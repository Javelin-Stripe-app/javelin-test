/**
 * Seed Stripe test account with realistic data for Javelin AI testing.
 *
 * Usage:
 *   STRIPE_SECRET_KEY=sk_test_... npx tsx scripts/seed-stripe-test-data.ts
 *   STRIPE_SECRET_KEY=sk_test_... npx tsx scripts/seed-stripe-test-data.ts --clean
 */

import Stripe from 'stripe';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  console.error('Error: STRIPE_SECRET_KEY environment variable is required.');
  console.error('Usage: STRIPE_SECRET_KEY=sk_test_... npx tsx scripts/seed-stripe-test-data.ts');
  process.exit(1);
}

if (!STRIPE_SECRET_KEY.startsWith('sk_test_')) {
  console.error('Error: Only test-mode keys (sk_test_*) are allowed. Aborting.');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

const SEED_TAG = 'javelin-test';
const METADATA_KEY = 'seed';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function monthsAgo(months: number): number {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return Math.floor(d.getTime() / 1000);
}

function daysAgo(days: number): number {
  return Math.floor((Date.now() - days * 86_400_000) / 1000);
}

async function listAllSeeded<T extends { id: string }>(
  listFn: (params: Stripe.PaginationParams & Record<string, unknown>) => Stripe.ApiListPromise<T>,
): Promise<T[]> {
  const items: T[] = [];
  for await (const item of listFn({ limit: 100 })) {
    if ((item as unknown as { metadata?: Record<string, string> }).metadata?.[METADATA_KEY] === SEED_TAG) {
      items.push(item);
    }
  }
  return items;
}

// ---------------------------------------------------------------------------
// Check existing seeds
// ---------------------------------------------------------------------------

async function checkExistingSeeds(): Promise<boolean> {
  // Use list (real-time) instead of search (eventually consistent)
  const products: Stripe.Product[] = [];
  for await (const product of stripe.products.list({ limit: 100, active: true })) {
    if (product.metadata?.[METADATA_KEY] === SEED_TAG) {
      products.push(product);
    }
  }
  if (products.length > 0) {
    console.log(`Found ${products.length} existing active seeded product(s).`);
    console.log('Run with --clean first to remove existing seed data, or skip seeding.');
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

interface ProductDef {
  name: string;
  description: string;
  key: string;
}

const PRODUCT_DEFS: ProductDef[] = [
  { name: 'Starter Plan', description: 'Basic features for small teams', key: 'starter' },
  { name: 'Pro Plan', description: 'Advanced features for growing businesses', key: 'pro' },
  { name: 'Enterprise Plan', description: 'Full platform for large organizations', key: 'enterprise' },
];

async function createProducts(): Promise<Record<string, Stripe.Product>> {
  const products: Record<string, Stripe.Product> = {};
  for (const def of PRODUCT_DEFS) {
    const product = await stripe.products.create({
      name: def.name,
      description: def.description,
      metadata: { [METADATA_KEY]: SEED_TAG, plan_key: def.key },
    });
    products[def.key] = product;
    console.log(`  Created product: ${def.name} (${product.id})`);
  }
  return products;
}

// ---------------------------------------------------------------------------
// Prices
// ---------------------------------------------------------------------------

interface PriceDef {
  productKey: string;
  unitAmount: number;
  interval: 'month' | 'year';
  nickname: string;
  key: string;
}

const PRICE_DEFS: PriceDef[] = [
  { productKey: 'starter', unitAmount: 1900, interval: 'month', nickname: 'Starter Monthly', key: 'starter_monthly' },
  { productKey: 'pro', unitAmount: 4900, interval: 'month', nickname: 'Pro Monthly', key: 'pro_monthly' },
  { productKey: 'pro', unitAmount: 49000, interval: 'year', nickname: 'Pro Annual', key: 'pro_annual' },
  { productKey: 'enterprise', unitAmount: 19900, interval: 'month', nickname: 'Enterprise Monthly', key: 'enterprise_monthly' },
];

async function createPrices(
  products: Record<string, Stripe.Product>,
): Promise<Record<string, Stripe.Price>> {
  const prices: Record<string, Stripe.Price> = {};
  for (const def of PRICE_DEFS) {
    const product = products[def.productKey];
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: def.unitAmount,
      currency: 'usd',
      recurring: { interval: def.interval },
      nickname: def.nickname,
      metadata: { [METADATA_KEY]: SEED_TAG, price_key: def.key },
    });
    prices[def.key] = price;
    console.log(`  Created price: ${def.nickname} — $${def.unitAmount / 100}/${def.interval} (${price.id})`);
  }
  return prices;
}

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

interface CustomerDef {
  name: string;
  email: string;
  createdMonthsAgo: number;
}

const CUSTOMER_DEFS: CustomerDef[] = [
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', createdMonthsAgo: 5 },
  { name: 'Bob Martinez', email: 'bob.martinez@example.com', createdMonthsAgo: 4 },
  { name: 'Carol Chen', email: 'carol.chen@example.com', createdMonthsAgo: 4 },
  { name: 'David Kim', email: 'david.kim@example.com', createdMonthsAgo: 3 },
  { name: 'Eva Patel', email: 'eva.patel@example.com', createdMonthsAgo: 3 },
  { name: 'Frank Wilson', email: 'frank.wilson@example.com', createdMonthsAgo: 2 },
  { name: 'Grace Liu', email: 'grace.liu@example.com', createdMonthsAgo: 1 },
  { name: 'Henry Nakamura', email: 'henry.nakamura@example.com', createdMonthsAgo: 1 },
];

async function createCustomers(): Promise<Stripe.Customer[]> {
  const customers: Stripe.Customer[] = [];
  for (const def of CUSTOMER_DEFS) {
    const customer = await stripe.customers.create({
      name: def.name,
      email: def.email,
      metadata: { [METADATA_KEY]: SEED_TAG },
      test_clock: undefined,
    });
    customers.push(customer);
    console.log(`  Created customer: ${def.name} (${customer.id})`);
  }
  return customers;
}

// ---------------------------------------------------------------------------
// Payment methods (test tokens)
// ---------------------------------------------------------------------------

async function attachTestPaymentMethod(customerId: string): Promise<string> {
  const pm = await stripe.paymentMethods.create({
    type: 'card',
    card: { token: 'tok_visa' },
    metadata: { [METADATA_KEY]: SEED_TAG },
  });
  await stripe.paymentMethods.attach(pm.id, { customer: customerId });
  await stripe.customers.update(customerId, {
    invoice_settings: { default_payment_method: pm.id },
  });
  return pm.id;
}

// ---------------------------------------------------------------------------
// Subscriptions
// ---------------------------------------------------------------------------

interface SubDef {
  customerIndex: number;
  priceKey: string;
  backdateMonths: number;
  status: 'active' | 'past_due' | 'canceled';
  canceledDaysAgo?: number;
}

const SUB_DEFS: SubDef[] = [
  // 5 active
  { customerIndex: 0, priceKey: 'pro_monthly', backdateMonths: 5, status: 'active' },
  { customerIndex: 1, priceKey: 'pro_annual', backdateMonths: 4, status: 'active' },
  { customerIndex: 2, priceKey: 'starter_monthly', backdateMonths: 4, status: 'active' },
  { customerIndex: 3, priceKey: 'enterprise_monthly', backdateMonths: 3, status: 'active' },
  { customerIndex: 4, priceKey: 'starter_monthly', backdateMonths: 3, status: 'active' },
  // 1 past_due
  { customerIndex: 5, priceKey: 'pro_monthly', backdateMonths: 2, status: 'past_due' },
  // 2 canceled
  { customerIndex: 6, priceKey: 'starter_monthly', backdateMonths: 1, status: 'canceled', canceledDaysAgo: 5 },
  { customerIndex: 7, priceKey: 'pro_monthly', backdateMonths: 1, status: 'canceled', canceledDaysAgo: 10 },
];

async function createSubscriptions(
  customers: Stripe.Customer[],
  prices: Record<string, Stripe.Price>,
): Promise<Stripe.Subscription[]> {
  const subscriptions: Stripe.Subscription[] = [];

  for (const def of SUB_DEFS) {
    const customer = customers[def.customerIndex];
    const price = prices[def.priceKey];

    // Attach a test payment method so invoices can be paid
    await attachTestPaymentMethod(customer.id);

    const backdateTs = monthsAgo(def.backdateMonths);

    const createParams: Stripe.SubscriptionCreateParams = {
      customer: customer.id,
      items: [{ price: price.id }],
      backdate_start_date: backdateTs,
      metadata: { [METADATA_KEY]: SEED_TAG, intended_status: def.status },
    };

    let sub = await stripe.subscriptions.create(createParams);
    console.log(`  Created subscription: ${customer.name} → ${price.nickname ?? def.priceKey} (${sub.id})`);

    // past_due: True past_due status requires Stripe test clocks.
    // We mark it in metadata so the sync/AI layer can recognize it.
    if (def.status === 'past_due') {
      console.log(`    → Marked as past_due in metadata (active in Stripe — true past_due requires test clocks)`);
    }

    // Handle canceled: cancel the subscription
    if (def.status === 'canceled') {
      sub = await stripe.subscriptions.cancel(sub.id);
      console.log(`    → Canceled subscription (was created ${def.canceledDaysAgo ?? 0} days scenario)`);
    }

    subscriptions.push(sub);
  }

  return subscriptions;
}

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------

async function cleanSeeds(): Promise<void> {
  console.log('\nCleaning seeded data...\n');

  // 1. Cancel/delete subscriptions
  console.log('Subscriptions:');
  const subs = await listAllSeeded((params) =>
    stripe.subscriptions.list({ ...params, status: 'all' } as Stripe.SubscriptionListParams),
  );
  for (const sub of subs) {
    if (sub.status !== 'canceled') {
      await stripe.subscriptions.cancel(sub.id);
      console.log(`  Canceled: ${sub.id}`);
    } else {
      console.log(`  Already canceled: ${sub.id}`);
    }
  }

  // 2. Delete customers (also removes their payment methods and invoices)
  console.log('Customers:');
  const customers = await listAllSeeded((params) =>
    stripe.customers.list(params as Stripe.CustomerListParams),
  );
  for (const cust of customers) {
    await stripe.customers.del(cust.id);
    console.log(`  Deleted: ${cust.name} (${cust.id})`);
  }

  // 3. Archive prices (can't delete, only deactivate)
  console.log('Prices:');
  const allPrices: Stripe.Price[] = [];
  for await (const price of stripe.prices.list({ limit: 100, active: true })) {
    if (price.metadata?.[METADATA_KEY] === SEED_TAG) {
      allPrices.push(price);
    }
  }
  for (const price of allPrices) {
    await stripe.prices.update(price.id, { active: false });
    console.log(`  Deactivated: ${price.nickname ?? price.id}`);
  }

  // 4. Archive products
  console.log('Products:');
  const products = await stripe.products.search({
    query: `metadata["${METADATA_KEY}"]:"${SEED_TAG}"`,
  });
  for (const product of products.data) {
    await stripe.products.update(product.id, { active: false });
    console.log(`  Archived: ${product.name} (${product.id})`);
  }

  console.log('\nCleanup complete.');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const isClean = process.argv.includes('--clean');

  if (isClean) {
    await cleanSeeds();
    return;
  }

  console.log('Javelin — Stripe Test Data Seeder\n');

  // Check for existing seed data
  const exists = await checkExistingSeeds();
  if (exists) {
    console.log('\nTo re-seed, run: npm run seed:clean && npm run seed');
    process.exit(0);
  }

  // Create objects
  console.log('\n1. Creating products...');
  const products = await createProducts();

  console.log('\n2. Creating prices...');
  const prices = await createPrices(products);

  console.log('\n3. Creating customers...');
  const customers = await createCustomers();

  console.log('\n4. Creating subscriptions...');
  const subscriptions = await createSubscriptions(customers, prices);

  // Summary
  console.log('\n--- Seed Summary ---');
  console.log(`Products:      ${Object.keys(products).length}`);
  console.log(`Prices:        ${Object.keys(prices).length}`);
  console.log(`Customers:     ${customers.length}`);
  console.log(`Subscriptions: ${subscriptions.length}`);
  console.log(`  Active:      ${subscriptions.filter((s) => s.status === 'active').length}`);
  console.log(`  Past Due:    ${subscriptions.filter((s) => s.status === 'past_due').length}`);
  console.log(`  Canceled:    ${subscriptions.filter((s) => s.status === 'canceled').length}`);
  console.log('\nDone! Now trigger a sync to pull data into Supabase.');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
