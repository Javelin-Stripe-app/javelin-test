"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "9.1.0";
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Tab = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Switch = exports.StripeFileUploader = exports.Spinner = exports.Sparkline = exports.SignInView = exports.SettingsView = exports.Select = exports.Radio = exports.PropertyList = exports.PropertyListItem = exports.PlatformConfigurationView = exports.OnboardingView = exports.Menu = exports.MenuItem = exports.MenuGroup = exports.List = exports.ListItem = exports.Link = exports.LineChart = exports.Inline = exports.Img = exports.Icon = exports.FormFieldGroup = exports.FocusView = exports.Divider = exports.DetailPageTable = exports.DetailPagePropertyList = exports.DetailPageModule = exports.DateField = exports.ContextView = exports.Chip = exports.ChipList = exports.Checkbox = exports.Button = exports.ButtonGroup = exports.Box = exports.BarChart = exports.Banner = exports.Badge = exports.Accordion = exports.AccordionItem = void 0;
      exports.Tooltip = exports.TextField = exports.TextArea = exports.TaskList = exports.TaskListItem = exports.Tabs = exports.TableRow = exports.Table = void 0;
      var jsx_runtime_1 = __require("react/jsx-runtime");
      var react_1 = __require("@remote-ui/react");
      var version_1 = require_version();
      var withSdkProps = (Component) => {
        const wrappedComponentName = Component.displayName || Component.toString();
        const WithSdkProps = (props) => (0, jsx_runtime_1.jsx)(Component, __spreadProps(__spreadValues({}, props), { wrappedComponentName, sdkVersion: version_1.SDK_VERSION, schemaVersion: "v9" }));
        WithSdkProps.wrappedComponentName = wrappedComponentName;
        return WithSdkProps;
      };
      var defineComponent = (name, fragmentProps, wrapWithSdkProps) => {
        const remoteComponent = (0, react_1.createRemoteReactComponent)(name, {
          fragmentProps
        });
        if (!wrapWithSdkProps) {
          return remoteComponent;
        }
        return withSdkProps(remoteComponent);
      };
      exports.AccordionItem = defineComponent("AccordionItem", ["title", "actions", "media", "subtitle"], true);
      exports.Accordion = defineComponent("Accordion", [], true);
      exports.Badge = defineComponent("Badge", [], true);
      exports.Banner = defineComponent("Banner", ["actions", "description", "title"], true);
      exports.BarChart = defineComponent("BarChart", [], true);
      exports.Box = defineComponent("Box", [], true);
      exports.ButtonGroup = defineComponent("ButtonGroup", ["menuTrigger"], true);
      exports.Button = defineComponent("Button", [], true);
      exports.Checkbox = defineComponent("Checkbox", ["label"], true);
      exports.ChipList = defineComponent("ChipList", [], true);
      exports.Chip = defineComponent("Chip", [], true);
      exports.ContextView = defineComponent("ContextView", ["actions", "banner", "footerContent", "primaryAction", "secondaryAction"], true);
      exports.DateField = defineComponent("DateField", ["label"], true);
      exports.DetailPageModule = defineComponent("DetailPageModule", [], true);
      exports.DetailPagePropertyList = defineComponent("DetailPagePropertyList", [], true);
      exports.DetailPageTable = defineComponent("DetailPageTable", [], true);
      exports.Divider = defineComponent("Divider", [], true);
      exports.FocusView = defineComponent("FocusView", ["footerContent", "primaryAction", "secondaryAction"], true);
      exports.FormFieldGroup = defineComponent("FormFieldGroup", [], true);
      exports.Icon = defineComponent("Icon", [], true);
      exports.Img = defineComponent("Img", [], true);
      exports.Inline = defineComponent("Inline", [], true);
      exports.LineChart = defineComponent("LineChart", [], true);
      exports.Link = defineComponent("Link", [], true);
      exports.ListItem = defineComponent("ListItem", ["icon", "image", "secondaryTitle", "title", "value"], true);
      exports.List = defineComponent("List", [], true);
      exports.MenuGroup = defineComponent("MenuGroup", ["title"], true);
      exports.MenuItem = defineComponent("MenuItem", [], true);
      exports.Menu = defineComponent("Menu", ["trigger"], true);
      exports.OnboardingView = defineComponent("OnboardingView", ["error"], true);
      exports.PlatformConfigurationView = defineComponent("PlatformConfigurationView", [], true);
      exports.PropertyListItem = defineComponent("PropertyListItem", ["label", "value"], true);
      exports.PropertyList = defineComponent("PropertyList", [], true);
      exports.Radio = defineComponent("Radio", ["label"], true);
      exports.Select = defineComponent("Select", ["label"], true);
      exports.SettingsView = defineComponent("SettingsView", [], true);
      exports.SignInView = defineComponent("SignInView", ["descriptionActionContents", "footerContent"], true);
      exports.Sparkline = defineComponent("Sparkline", [], true);
      exports.Spinner = defineComponent("Spinner", [], true);
      exports.StripeFileUploader = defineComponent("StripeFileUploader", [], true);
      exports.Switch = defineComponent("Switch", ["label"], true);
      exports.TabList = defineComponent("TabList", [], true);
      exports.TabPanel = defineComponent("TabPanel", [], true);
      exports.TabPanels = defineComponent("TabPanels", [], true);
      exports.Tab = defineComponent("Tab", [], true);
      exports.TableBody = defineComponent("TableBody", [], true);
      exports.TableCell = defineComponent("TableCell", [], true);
      exports.TableFooter = defineComponent("TableFooter", [], true);
      exports.TableHead = defineComponent("TableHead", [], true);
      exports.TableHeaderCell = defineComponent("TableHeaderCell", [], true);
      exports.Table = defineComponent("Table", [], true);
      exports.TableRow = defineComponent("TableRow", [], true);
      exports.Tabs = defineComponent("Tabs", [], true);
      exports.TaskListItem = defineComponent("TaskListItem", [], true);
      exports.TaskList = defineComponent("TaskList", [], true);
      exports.TextArea = defineComponent("TextArea", ["label"], true);
      exports.TextField = defineComponent("TextField", ["label"], true);
      exports.Tooltip = defineComponent("Tooltip", ["trigger"], true);
    }
  });

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js
  var require_endpoint = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHostEndpoint = void 0;
      var invariant_1 = __importDefault(require_browser());
      var getHostEndpoint = () => {
        var _a2;
        const hostEndpoint = (_a2 = globalThis.__StripeExtExports) == null ? void 0 : _a2.endpoint;
        (0, invariant_1.default)(hostEndpoint, "hostEndpoint has not been initialized");
        return hostEndpoint;
      };
      exports.getHostEndpoint = getHostEndpoint;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/supportsFetchAppEmbeddedKey.js
  var require_supportsFetchAppEmbeddedKey = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/supportsFetchAppEmbeddedKey.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.supportsFetchAppEmbeddedKey = void 0;
      var _endpoint_1 = require_endpoint();
      var supportsFetchAppEmbeddedKey = () => __async(exports, null, function* () {
        return (0, _endpoint_1.getHostEndpoint)().call.supportsFetchAppEmbeddedKey().then((supported) => supported).catch(() => false);
      });
      exports.supportsFetchAppEmbeddedKey = supportsFetchAppEmbeddedKey;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchAppEmbeddedKey.js
  var require_fetchAppEmbeddedKey = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/fetchAppEmbeddedKey.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchAppEmbeddedKey = void 0;
      var _endpoint_1 = require_endpoint();
      var fetchAppEmbeddedKey = () => __async(exports, null, function* () {
        const apiKey = yield (0, _endpoint_1.getHostEndpoint)().call.fetchAppEmbeddedKey();
        if (!apiKey) {
          throw new Error("Unable to fetch app embedded key");
        }
        return apiKey;
      });
      exports.fetchAppEmbeddedKey = fetchAppEmbeddedKey;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaFrame.js
  var require_fetchViaFrame = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaFrame.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchViaFrame = void 0;
      var fetchAppEmbeddedKey_1 = require_fetchAppEmbeddedKey();
      var fetchViaFrame = (_0, ..._1) => __async(exports, [_0, ..._1], function* (url, options = {}) {
        const apiKey = yield (0, fetchAppEmbeddedKey_1.fetchAppEmbeddedKey)();
        const init = __spreadProps(__spreadValues({}, options), {
          headers: __spreadProps(__spreadValues({}, options.headers), {
            Authorization: `Bearer ${apiKey}`
          })
        });
        const response = yield fetch(url, init);
        const headers = {};
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const serializableResponse = {
          json: void 0,
          arrayBuffer: void 0,
          headers,
          ok: response.ok,
          redirected: response.redirected,
          status: response.status,
          statusText: response.statusText,
          type: response.type,
          url: response.url
        };
        switch (response.headers.get("Content-Type")) {
          case "application/json":
            serializableResponse.json = yield response.json();
            break;
          default:
            serializableResponse.arrayBuffer = yield response.arrayBuffer();
            break;
        }
        return serializableResponse;
      });
      exports.fetchViaFrame = fetchViaFrame;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaHost.js
  var require_fetchViaHost = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaHost.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchViaHost = void 0;
      var _endpoint_1 = require_endpoint();
      var fetchViaHost = (_0, ..._1) => __async(exports, [_0, ..._1], function* (encodedUrl, options = {}) {
        const url = new URL(encodedUrl);
        return (0, _endpoint_1.getHostEndpoint)().call.stripeApiFetch(url.pathname + url.search, options);
      });
      exports.fetchViaHost = fetchViaHost;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/selectPreferredStripeApiFetch.js
  var require_selectPreferredStripeApiFetch = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/selectPreferredStripeApiFetch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.selectPreferredStripeApiFetch = void 0;
      var supportsFetchAppEmbeddedKey_1 = require_supportsFetchAppEmbeddedKey();
      var fetchViaFrame_1 = require_fetchViaFrame();
      var fetchViaHost_1 = require_fetchViaHost();
      var selectedStripeApiFetch = null;
      var selectPreferredStripeApiFetch = () => __async(exports, null, function* () {
        if (!selectedStripeApiFetch) {
          selectedStripeApiFetch = (yield (0, supportsFetchAppEmbeddedKey_1.supportsFetchAppEmbeddedKey)()) ? fetchViaFrame_1.fetchViaFrame : fetchViaHost_1.fetchViaHost;
        }
        return selectedStripeApiFetch;
      });
      exports.selectPreferredStripeApiFetch = selectPreferredStripeApiFetch;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/api/index.js
  var require_api = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/api/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.selectPreferredStripeApiFetch = void 0;
      var selectPreferredStripeApiFetch_1 = require_selectPreferredStripeApiFetch();
      Object.defineProperty(exports, "selectPreferredStripeApiFetch", { enumerable: true, get: function() {
        return selectPreferredStripeApiFetch_1.selectPreferredStripeApiFetch;
      } });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/apiFetch.js
  var require_apiFetch = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/apiFetch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stripeApiFetch = void 0;
      var api_1 = require_api();
      var stripeApiFetch = (path, options) => __async(exports, null, function* () {
        const preferredFetchMethod = yield (0, api_1.selectPreferredStripeApiFetch)();
        return preferredFetchMethod(path, options);
      });
      exports.stripeApiFetch = stripeApiFetch;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/httpClient.js
  var require_httpClient = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/httpClient.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AUTHORIZATION_VALUE = exports.AUTHORIZATION_HEADER = exports.createHttpClient = exports.STRIPE_API_KEY = exports.StripeAppsHttpClient = void 0;
      var invariant_1 = __importDefault(require_browser());
      var apiFetch_1 = require_apiFetch();
      var matchesStripeKey = /[ps]k_(test|live)_[A-Za-z0-9]+/;
      var StripeAppsHttpResponse = class {
        constructor(resp) {
          this._resp = resp;
        }
        getHeaders() {
          return this._resp.headers;
        }
        getStatusCode() {
          return this._resp.status;
        }
        getRawResponse() {
          return this._resp;
        }
        toStream() {
          throw new Error("Streams have not been implemented in the Stripe HTTP client");
        }
        toJSON() {
          const { json } = this._resp;
          if (json === void 0) {
            return Promise.reject(new Error("Response body undefined"));
          } else {
            return Promise.resolve(json);
          }
        }
      };
      var StripeAppsHttpClient = class {
        constructor(fetch2) {
          this._fetch = fetch2;
        }
        getClientName() {
          return "stripe-ui-extension";
        }
        makeRequest(host, port, path, method, headers, requestData, protocol, _timeout) {
          return __async(this, null, function* () {
            (0, invariant_1.default)(protocol === "https", "Must use https connections in UI extensions");
            const fetchOptions = {
              method,
              headers
            };
            if (requestData) {
              fetchOptions.body = requestData;
            }
            const authHeader = headers.Authorization;
            if (authHeader && matchesStripeKey.test(authHeader)) {
              throw new Error("Do not use actual stripe keys when using the Stripe JS API client with UI extesions.\n\n Instead, use `STRIPE_API_KEY` from `@stripe/ui-extension-sdk/http_client` as a placeholder.");
            }
            const url = new URL(path, `${protocol}://${host}`);
            const resp = yield this._fetch(url.toString(), fetchOptions);
            return new StripeAppsHttpResponse(resp);
          });
        }
      };
      exports.StripeAppsHttpClient = StripeAppsHttpClient;
      exports.STRIPE_API_KEY = "DO_NOT_PASS_A_REAL_API_KEY";
      var createHttpClient = () => new StripeAppsHttpClient(apiFetch_1.stripeApiFetch);
      exports.createHttpClient = createHttpClient;
      exports.AUTHORIZATION_HEADER = "Authorization";
      exports.AUTHORIZATION_VALUE = `Bearer ${exports.STRIPE_API_KEY}`;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/signature/createFetchStripeSignatureDirectly.js
  var require_createFetchStripeSignatureDirectly = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/signature/createFetchStripeSignatureDirectly.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createFetchStripeSignatureDirectly = void 0;
      var httpClient_1 = require_httpClient();
      var createFetchStripeSignatureDirectly = ({ host, port }) => (payload) => __async(exports, null, function* () {
        const url = new URL(`https://${host}:${port}/v1/apps/app_embedded_backend_signature`);
        url.searchParams.set("payload", JSON.stringify(__spreadValues({}, payload)));
        url.searchParams.set("include_only[]", "signature");
        const client = (0, httpClient_1.createHttpClient)();
        const response = client.makeRequest(host, port, url.pathname + url.search, "GET", {}, null, "https");
        return response.then((r) => r.toJSON()).then((data) => data.signature);
      });
      exports.createFetchStripeSignatureDirectly = createFetchStripeSignatureDirectly;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/signature/connectionSettings.js
  var require_connectionSettings = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/signature/connectionSettings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.setConnectionSettings = exports.connectionSettings = void 0;
      var defaultConnectionSettings = {
        host: "api.stripe.com",
        port: 443
      };
      exports.connectionSettings = defaultConnectionSettings;
      var setConnectionSettings = (settings) => {
        exports.connectionSettings = __spreadValues(__spreadValues({}, defaultConnectionSettings), settings);
      };
      exports.setConnectionSettings = setConnectionSettings;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/signature.js
  var require_signature = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchStripeSignature = void 0;
      var createFetchStripeSignatureDirectly_1 = require_createFetchStripeSignatureDirectly();
      var supportsFetchAppEmbeddedKey_1 = require_supportsFetchAppEmbeddedKey();
      var connectionSettings_1 = require_connectionSettings();
      var _endpoint_1 = require_endpoint();
      var fetchStripeSignature2 = (additionalPayload) => __async(exports, null, function* () {
        if (yield (0, supportsFetchAppEmbeddedKey_1.supportsFetchAppEmbeddedKey)()) {
          const fetchStripeSignatureDirectly = (0, createFetchStripeSignatureDirectly_1.createFetchStripeSignatureDirectly)(connectionSettings_1.connectionSettings);
          return fetchStripeSignatureDirectly(additionalPayload);
        } else {
          return (0, _endpoint_1.getHostEndpoint)().call.fetchStripeSignature(additionalPayload);
        }
      });
      exports.fetchStripeSignature = fetchStripeSignature2;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/signature.js
  var require_signature2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var signature_1 = require_signature();
      exports.default = signature_1.fetchStripeSignature;
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    ChatView: () => ChatView_default,
    OnboardingView: () => OnboardingView_default,
    SettingsView: () => SettingsView_default,
    default: () => manifest_default
  });

  // src/views/ChatView.tsx
  var import_ui9 = __toESM(require_ui());
  var import_react4 = __require("react");

  // src/components/ChatThread.tsx
  var import_ui5 = __toESM(require_ui());

  // src/components/MessageBubble.tsx
  var import_ui = __toESM(require_ui());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var MessageBubble = ({ role, content, freshness }) => {
    const isUser = role === "user";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
      css: {
        padding: "medium",
        backgroundColor: isUser ? "container" : void 0,
        stack: "y",
        gap: "small"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
          css: { fontWeight: "semibold", color: "secondary" },
          children: isUser ? "You" : "Javelin"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
          children: content
        }),
        freshness && !isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
          css: { marginTop: "xsmall" },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
            type: freshness.type === "live" ? "positive" : "info",
            children: freshness.type === "live" ? "Live data" : `Data as of ${freshness.syncedAt ? new Date(freshness.syncedAt).toLocaleString() : "cache"}`
          })
        })
      ]
    });
  };
  var MessageBubble_default = MessageBubble;

  // src/components/InsightCard.tsx
  var import_ui2 = __toESM(require_ui());
  var import_react = __require("react");

  // src/lib/api-client.ts
  var import_signature = __toESM(require_signature2());
  var _a;
  var SUPABASE_FUNCTIONS_URL = typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.SUPABASE_FUNCTIONS_URL) ? process.env.SUPABASE_FUNCTIONS_URL : "https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1";
  function apiClient(_0) {
    return __async(this, arguments, function* (path, options = {}) {
      const signature = yield (0, import_signature.default)();
      const response = yield fetch(`${SUPABASE_FUNCTIONS_URL}${path}`, {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
          "stripe-signature": signature
        },
        body: options.body ? JSON.stringify(options.body) : void 0
      });
      if (!response.ok) {
        const error = yield response.json();
        throw error;
      }
      return response.json();
    });
  }

  // src/components/InsightCard.tsx
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var InsightCard = ({ insightId, messageId, content }) => {
    const [feedback, setFeedback] = (0, import_react.useState)(null);
    const [submitting, setSubmitting] = (0, import_react.useState)(false);
    const handleFeedback = (rating) => __async(void 0, null, function* () {
      if (submitting || feedback)
        return;
      setSubmitting(true);
      try {
        yield apiClient("/insights-feedback", {
          method: "POST",
          body: { insightId, messageId, rating }
        });
        setFeedback(rating);
      } catch (e) {
      } finally {
        setSubmitting(false);
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
      css: { padding: "small", stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Banner, {
          type: "default",
          title: "Insight",
          description: content
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { stack: "x", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
              type: feedback === "positive" ? "primary" : "secondary",
              size: "small",
              disabled: submitting || feedback !== null,
              onPress: () => handleFeedback("positive"),
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Inline, {
                children: feedback === "positive" ? "Helpful" : "Helpful?"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
              type: feedback === "negative" ? "primary" : "secondary",
              size: "small",
              disabled: submitting || feedback !== null,
              onPress: () => handleFeedback("negative"),
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Inline, {
                children: feedback === "negative" ? "Not helpful" : "Not helpful?"
              })
            })
          ]
        })
      ]
    });
  };
  var InsightCard_default = InsightCard;

  // src/components/ThinkingIndicator.tsx
  var import_ui3 = __toESM(require_ui());
  var import_react2 = __require("react");
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var ThinkingIndicator = ({ startedAt }) => {
    const [elapsed, setElapsed] = (0, import_react2.useState)(0);
    (0, import_react2.useEffect)(() => {
      const interval = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startedAt) / 1e3));
      }, 1e3);
      return () => clearInterval(interval);
    }, [startedAt]);
    const statusText = elapsed >= 5 ? "Fetching fresh data from Stripe..." : "Analyzing your data...";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
      css: { padding: "medium", stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
          css: { stack: "x", gap: "small", alignY: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {
              size: "small"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Inline, {
              css: { color: "secondary" },
              children: statusText
            })
          ]
        }),
        elapsed >= 5 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
          type: "default",
          description: "Still working \u2014 fetching the latest data from Stripe to give you an accurate answer."
        })
      ]
    });
  };
  var ThinkingIndicator_default = ThinkingIndicator;

  // src/components/ClarificationPrompt.tsx
  var import_ui4 = __toESM(require_ui());
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var ClarificationPrompt = ({ question, options, onSelect }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
      css: { padding: "medium", stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Banner, {
          type: "default",
          title: "Clarification needed",
          description: question
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
          css: { stack: "x", gap: "small", wrap: "wrap" },
          children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Button, {
            type: "secondary",
            size: "small",
            onPress: () => onSelect(option.value),
            children: option.label
          }, option.value))
        })
      ]
    });
  };
  var ClarificationPrompt_default = ClarificationPrompt;

  // src/components/ChatThread.tsx
  var import_jsx_runtime5 = __require("react/jsx-runtime");
  var ChatThread = ({
    messages,
    isThinking,
    thinkingStartedAt,
    onClarificationSelect
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_ui5.Box, {
      css: { stack: "y", gap: "xsmall", overflow: "auto" },
      children: [
        messages.map((message) => {
          var _a2;
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_ui5.Box, {
            css: { stack: "y" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MessageBubble_default, {
                role: message.role,
                content: message.content,
                freshness: message.freshness
              }),
              (_a2 = message.insights) == null ? void 0 : _a2.map((insight) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InsightCard_default, {
                insightId: insight.id,
                messageId: message.id,
                content: insight.content
              }, insight.id)),
              message.clarification && onClarificationSelect && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ClarificationPrompt_default, {
                question: message.clarification.question,
                options: message.clarification.options,
                onSelect: onClarificationSelect
              })
            ]
          }, message.id);
        }),
        isThinking && thinkingStartedAt && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThinkingIndicator_default, {
          startedAt: thinkingStartedAt
        })
      ]
    });
  };
  var ChatThread_default = ChatThread;

  // src/components/ChatInput.tsx
  var import_ui6 = __toESM(require_ui());
  var import_react3 = __require("react");
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  var ChatInput = ({ onSend, disabled = false, initialValue = "" }) => {
    const [value, setValue] = (0, import_react3.useState)(initialValue);
    const handleSend = (0, import_react3.useCallback)(() => {
      const trimmed = value.trim();
      if (!trimmed || disabled)
        return;
      onSend(trimmed);
      setValue("");
    }, [value, disabled, onSend]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_ui6.Box, {
      css: { stack: "x", gap: "small", alignY: "bottom", padding: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Box, {
          css: { width: "fill" },
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.TextArea, {
            label: "Ask a question",
            placeholder: "What's my MRR?",
            value,
            onChange: (e) => setValue(e.target.value),
            rows: 2,
            disabled
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Button, {
          type: "primary",
          onPress: handleSend,
          disabled: disabled || !value.trim(),
          children: "Send"
        })
      ]
    });
  };
  var ChatInput_default = ChatInput;

  // src/components/WelcomePrompt.tsx
  var import_ui7 = __toESM(require_ui());
  var import_jsx_runtime7 = __require("react/jsx-runtime");
  var GUIDED_PROMPTS = [
    { label: "What's my MRR?", value: "What's my MRR?" },
    { label: "How's churn trending?", value: "How is my churn rate trending over the last 3 months?" },
    { label: "Revenue by product", value: "What's my revenue breakdown by product?" },
    { label: "Top customers", value: "Who are my top 10 customers by revenue?" },
    { label: "Growth rate", value: "What's my MRR growth rate?" }
  ];
  var WelcomePrompt = ({ onSelectPrompt, insights }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_ui7.Box, {
      css: { padding: "medium", stack: "y", gap: "medium" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_ui7.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
              css: { font: "heading" },
              children: "Welcome to Javelin"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
              css: { color: "secondary" },
              children: "Ask me anything about your Stripe business. I can calculate metrics, analyze trends, and surface insights from your data."
            })
          ]
        }),
        insights && insights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_ui7.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
              css: { fontWeight: "semibold" },
              children: "Recent insights"
            }),
            insights.map((insight) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Box, {
              css: { padding: "small", backgroundColor: "container", stack: "y", gap: "xsmall" },
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
                css: { color: "secondary" },
                children: insight.content
              })
            }, insight.id))
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_ui7.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
              css: { fontWeight: "semibold" },
              children: "Try asking"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Box, {
              css: { stack: "x", gap: "small", wrap: "wrap" },
              children: GUIDED_PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Button, {
                type: "secondary",
                size: "small",
                onPress: () => onSelectPrompt(prompt.value),
                children: prompt.label
              }, prompt.value))
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Box, {
          css: { marginTop: "small" },
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui7.Inline, {
            css: { font: "caption", color: "secondary" },
            children: "Javelin provides informational insights only, not financial or business advice. Always verify important decisions with your own analysis."
          })
        })
      ]
    });
  };
  var WelcomePrompt_default = WelcomePrompt;

  // src/components/ConversationList.tsx
  var import_ui8 = __toESM(require_ui());
  var import_jsx_runtime8 = __require("react/jsx-runtime");
  var ConversationList = ({
    conversations,
    activeConversationId,
    onSelectConversation,
    onClose
  }) => {
    if (conversations.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_ui8.Box, {
        css: { padding: "medium", stack: "y", gap: "small", alignX: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Inline, {
            css: { color: "secondary" },
            children: "No conversations yet."
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Inline, {
            css: { color: "secondary" },
            children: "Start by asking a question below."
          })
        ]
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_ui8.Box, {
      css: { stack: "y", gap: "xsmall", padding: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_ui8.Box, {
          css: { stack: "x", distribute: "space-between", alignY: "center", padding: "xsmall" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Inline, {
              css: { fontWeight: "semibold" },
              children: "Conversations"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Button, {
              type: "secondary",
              size: "small",
              onPress: onClose,
              children: "Close"
            })
          ]
        }),
        conversations.map((conv) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Box, {
          css: {
            padding: "small",
            backgroundColor: conv.id === activeConversationId ? "container" : void 0,
            stack: "y",
            gap: "xsmall"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Button, {
            type: "secondary",
            size: "small",
            onPress: () => onSelectConversation(conv.id),
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_ui8.Box, {
              css: { stack: "y", gap: "xsmall", width: "fill" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Inline, {
                  css: { fontWeight: conv.id === activeConversationId ? "semibold" : "regular" },
                  children: conv.title || "Untitled conversation"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Inline, {
                  css: { font: "caption", color: "secondary" },
                  children: new Date(conv.updatedAt).toLocaleDateString()
                })
              ]
            })
          })
        }, conv.id))
      ]
    });
  };
  var ConversationList_default = ConversationList;

  // src/views/ChatView.tsx
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  var ChatView = ({ userContext: _userContext, environment: _environment }) => {
    const [viewState, setViewState] = (0, import_react4.useState)("loading");
    const [conversations, setConversations] = (0, import_react4.useState)([]);
    const [activeConversationId, setActiveConversationId] = (0, import_react4.useState)(null);
    const [messages, setMessages] = (0, import_react4.useState)([]);
    const [isThinking, setIsThinking] = (0, import_react4.useState)(false);
    const [thinkingStartedAt, setThinkingStartedAt] = (0, import_react4.useState)();
    const [error, setError] = (0, import_react4.useState)(null);
    const [welcomeInsights, setWelcomeInsights] = (0, import_react4.useState)([]);
    const [showConversationList, setShowConversationList] = (0, import_react4.useState)(false);
    const loadConversations = (0, import_react4.useCallback)(() => __async(void 0, null, function* () {
      var _a2;
      try {
        const response = yield apiClient("/chat-conversations");
        const convos = ((_a2 = response.data) == null ? void 0 : _a2.conversations) || [];
        setConversations(convos);
        if (convos.length === 0) {
          loadWelcomeInsights();
          setViewState("empty");
        } else {
          yield loadConversation(convos[0].id);
          setViewState("chat");
        }
      } catch (e) {
        setViewState("empty");
        loadWelcomeInsights();
      }
    }), []);
    (0, import_react4.useEffect)(() => {
      loadConversations();
    }, [loadConversations]);
    const loadWelcomeInsights = () => __async(void 0, null, function* () {
      var _a2;
      try {
        const response = yield apiClient(
          "/insights-welcome"
        );
        setWelcomeInsights(((_a2 = response.data) == null ? void 0 : _a2.insights) || []);
      } catch (e) {
      }
    });
    const loadConversation = (conversationId) => __async(void 0, null, function* () {
      var _a2;
      try {
        const response = yield apiClient(`/chat-conversation-detail?conversationId=${conversationId}`);
        const msgs = (((_a2 = response.data) == null ? void 0 : _a2.messages) || []).map((m) => {
          var _a3, _b;
          return {
            id: m.id,
            role: m.role,
            content: m.content,
            freshness: (_a3 = m.metadata) == null ? void 0 : _a3.freshness,
            insights: (_b = m.metadata) == null ? void 0 : _b.insights
          };
        });
        setMessages(msgs);
        setActiveConversationId(conversationId);
      } catch (e) {
        setError("Failed to load conversation");
      }
    });
    const sendMessage = (0, import_react4.useCallback)(
      (content) => __async(void 0, null, function* () {
        var _a2, _b, _c, _d, _e;
        setError(null);
        const tempUserMsgId = `temp-${Date.now()}`;
        const userMessage = {
          id: tempUserMsgId,
          role: "user",
          content
        };
        setMessages((prev) => [...prev, userMessage]);
        setViewState("chat");
        setIsThinking(true);
        setThinkingStartedAt(Date.now());
        try {
          const response = yield apiClient("/chat-message", {
            method: "POST",
            body: {
              conversationId: activeConversationId,
              content
            }
          });
          const assistantMessage = {
            id: ((_a2 = response.data) == null ? void 0 : _a2.message.id) || `msg-${Date.now()}`,
            role: "assistant",
            content: ((_b = response.data) == null ? void 0 : _b.message.content) || "Sorry, I could not generate a response.",
            freshness: response.meta,
            insights: (_c = response.data) == null ? void 0 : _c.insights
          };
          if (((_d = response.data) == null ? void 0 : _d.conversationId) && !activeConversationId) {
            setActiveConversationId(response.data.conversationId);
          }
          setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
          const errorObj = err;
          const code = (_e = errorObj == null ? void 0 : errorObj.error) == null ? void 0 : _e.code;
          if (code === "auth_refresh_failed") {
            setError("Your session has expired. Please re-authorize Javelin.");
          } else if (code === "llm_unavailable") {
            setError("AI service is temporarily unavailable. Please try again in a moment.");
          } else {
            setError("Something went wrong. Please try again.");
          }
        } finally {
          setIsThinking(false);
          setThinkingStartedAt(void 0);
        }
      }),
      [activeConversationId]
    );
    const handleClarificationSelect = (0, import_react4.useCallback)(
      (value) => {
        sendMessage(value);
      },
      [sendMessage]
    );
    const handleNewConversation = (0, import_react4.useCallback)(() => {
      setActiveConversationId(null);
      setMessages([]);
      setViewState("empty");
      setShowConversationList(false);
      loadWelcomeInsights();
    }, []);
    const handleSelectConversation = (0, import_react4.useCallback)((id) => __async(void 0, null, function* () {
      setShowConversationList(false);
      yield loadConversation(id);
      setViewState("chat");
    }), []);
    if (viewState === "loading") {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.ContextView, {
        title: "Javelin",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
          css: { padding: "medium", stack: "y", gap: "medium", alignX: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Spinner, {}),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Inline, {
              css: { color: "secondary" },
              children: "Loading Javelin..."
            })
          ]
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.ContextView, {
      title: "Javelin",
      actions: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
        css: { stack: "x", gap: "small" },
        children: [
          conversations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Button, {
            type: "secondary",
            onPress: () => setShowConversationList((v) => !v),
            children: "History"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Button, {
            type: "secondary",
            onPress: handleNewConversation,
            children: "New chat"
          })
        ]
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
        css: { stack: "y", height: "fill" },
        children: [
          error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Banner, {
            type: "critical",
            title: "Error",
            description: error,
            onDismiss: () => setError(null)
          }),
          showConversationList && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ConversationList_default, {
            conversations,
            activeConversationId,
            onSelectConversation: handleSelectConversation,
            onClose: () => setShowConversationList(false)
          }),
          !showConversationList && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Box, {
            css: { stack: "y", overflow: "auto" },
            children: viewState === "empty" && messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WelcomePrompt_default, {
              onSelectPrompt: sendMessage,
              insights: welcomeInsights
            }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChatThread_default, {
              messages,
              isThinking,
              thinkingStartedAt,
              onClarificationSelect: handleClarificationSelect
            })
          }),
          !showConversationList && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChatInput_default, {
            onSend: sendMessage,
            disabled: isThinking
          })
        ]
      })
    });
  };
  var ChatView_default = ChatView;

  // src/views/SettingsView.tsx
  var import_ui10 = __toESM(require_ui());
  var import_jsx_runtime10 = __require("react/jsx-runtime");
  var AppSettingsView = ({ userContext: _userContext }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.SettingsView, {
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.Box, {
        css: { padding: "medium" },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.Inline, {
          children: "Javelin settings coming soon."
        })
      })
    });
  };
  var SettingsView_default = AppSettingsView;

  // src/views/OnboardingView.tsx
  var import_ui11 = __toESM(require_ui());
  var import_react5 = __require("react");
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  var OnboardingView = ({ userContext: _userContext, oauthContext }) => {
    const [state, setState] = (0, import_react5.useState)("processing");
    const [errorMessage, setErrorMessage] = (0, import_react5.useState)("");
    const handleOAuth = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      if (oauthContext == null ? void 0 : oauthContext.error) {
        setState("error");
        setErrorMessage(`Authorization failed: ${oauthContext.error}`);
        return;
      }
      if (!(oauthContext == null ? void 0 : oauthContext.code)) {
        setState("error");
        setErrorMessage("No authorization code received. Please try installing again.");
        return;
      }
      try {
        yield apiClient("/auth-callback", {
          method: "POST",
          body: {
            code: oauthContext.code,
            state: oauthContext.state || "",
            verifier: oauthContext.verifier || ""
          }
        });
        yield apiClient("/sync-trigger", {
          method: "POST",
          body: {}
        });
        setState("success");
      } catch (e) {
        setState("error");
        setErrorMessage("Failed to complete setup. Please try again.");
      }
    }), [oauthContext]);
    (0, import_react5.useEffect)(() => {
      handleOAuth();
    }, [handleOAuth]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.ContextView, {
      title: "Welcome to Javelin",
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
        css: { padding: "medium", stack: "y", gap: "medium", alignX: "center" },
        children: [
          state === "processing" && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Spinner, {}),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                children: "Setting up Javelin..."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                css: { color: "secondary" },
                children: "Connecting to your Stripe account and syncing your data."
              })
            ]
          }),
          state === "success" && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Banner, {
                type: "default",
                title: "Setup complete!",
                description: "Javelin is ready. Your data is syncing in the background \u2014 you can start asking questions right away."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                css: { color: "secondary" },
                children: "Open the Javelin drawer from any page in your Stripe Dashboard to get started."
              })
            ]
          }),
          state === "error" && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Banner, {
                type: "critical",
                title: "Setup failed",
                description: errorMessage
              }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Button, {
                type: "primary",
                onPress: handleOAuth,
                children: "Retry"
              })
            ]
          })
        ]
      })
    });
  };
  var OnboardingView_default = OnboardingView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2026-02-12 15:33:03.509477 -0300 -03 m=+3.007036314";
  var manifest_default = {
    "allowed_redirect_uris": [
      "https://dashboard.stripe.com/test/apps-oauth/com.javelin.ai",
      "https://dashboard.stripe.com/apps-oauth/com.javelin.ai"
    ],
    "connect_permissions": null,
    "distribution_type": "public",
    "icon": "./icon.png",
    "id": "com.javelin.ai",
    "name": "Javelin",
    "permissions": [
      {
        "permission": "customer_read",
        "purpose": "Read customer data to calculate business metrics and answer questions about your customer base"
      },
      {
        "permission": "invoice_read",
        "purpose": "Read invoice data to calculate revenue, MRR, and other billing metrics"
      },
      {
        "permission": "charge_read",
        "purpose": "Read charge data to analyze payment volume and revenue trends"
      },
      {
        "permission": "subscription_read",
        "purpose": "Read subscription data to calculate MRR, churn rate, and subscription analytics"
      },
      {
        "permission": "product_read",
        "purpose": "Read product data to break down revenue and metrics by product"
      },
      {
        "permission": "plan_read",
        "purpose": "Read price and plan data to analyze plan-level revenue and subscriber counts"
      },
      {
        "permission": "secret_write",
        "purpose": "Store and manage OAuth tokens securely via the Secret Store API"
      }
    ],
    "sandbox_install_compatible": true,
    "stripe_api_access_type": "oauth",
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1/",
          "https://openrouter.ai/api/",
          "https://api.openai.com/v1/"
        ],
        "image-src": null,
        "purpose": "Connect to Supabase backend for data processing and LLM provider for AI-powered business intelligence"
      },
      "views": [
        {
          "component": "ChatView",
          "viewport": "stripe.dashboard.drawer.default"
        },
        {
          "component": "SettingsView",
          "viewport": "settings"
        },
        {
          "component": "OnboardingView",
          "viewport": "onboarding"
        }
      ]
    },
    "version": "0.0.1"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvX2VuZHBvaW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoVmlhRnJhbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFIb3N0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9DaGF0Vmlldy50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdFRocmVhZC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJ1YmJsZS50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvSW5zaWdodENhcmQudHN4IiwgIi4uL3NyYy9saWIvYXBpLWNsaWVudC50cyIsICIuLi9zcmMvY29tcG9uZW50cy9UaGlua2luZ0luZGljYXRvci50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2xhcmlmaWNhdGlvblByb21wdC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdElucHV0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9XZWxjb21lUHJvbXB0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeCIsICIuLi9zcmMvdmlld3MvU2V0dGluZ3NWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU0RLX1ZFUlNJT04gPSB2b2lkIDA7XG5leHBvcnRzLlNES19WRVJTSU9OID0gJzkuMS4wJztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGVIZWFkZXJDZWxsID0gZXhwb3J0cy5UYWJsZUhlYWQgPSBleHBvcnRzLlRhYmxlRm9vdGVyID0gZXhwb3J0cy5UYWJsZUNlbGwgPSBleHBvcnRzLlRhYmxlQm9keSA9IGV4cG9ydHMuVGFiID0gZXhwb3J0cy5UYWJQYW5lbHMgPSBleHBvcnRzLlRhYlBhbmVsID0gZXhwb3J0cy5UYWJMaXN0ID0gZXhwb3J0cy5Td2l0Y2ggPSBleHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuU3BhcmtsaW5lID0gZXhwb3J0cy5TaWduSW5WaWV3ID0gZXhwb3J0cy5TZXR0aW5nc1ZpZXcgPSBleHBvcnRzLlNlbGVjdCA9IGV4cG9ydHMuUmFkaW8gPSBleHBvcnRzLlByb3BlcnR5TGlzdCA9IGV4cG9ydHMuUHJvcGVydHlMaXN0SXRlbSA9IGV4cG9ydHMuUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGV4cG9ydHMuT25ib2FyZGluZ1ZpZXcgPSBleHBvcnRzLk1lbnUgPSBleHBvcnRzLk1lbnVJdGVtID0gZXhwb3J0cy5NZW51R3JvdXAgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLkxpc3RJdGVtID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5MaW5lQ2hhcnQgPSBleHBvcnRzLklubGluZSA9IGV4cG9ydHMuSW1nID0gZXhwb3J0cy5JY29uID0gZXhwb3J0cy5Gb3JtRmllbGRHcm91cCA9IGV4cG9ydHMuRm9jdXNWaWV3ID0gZXhwb3J0cy5EaXZpZGVyID0gZXhwb3J0cy5EZXRhaWxQYWdlVGFibGUgPSBleHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBleHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBleHBvcnRzLkRhdGVGaWVsZCA9IGV4cG9ydHMuQ29udGV4dFZpZXcgPSBleHBvcnRzLkNoaXAgPSBleHBvcnRzLkNoaXBMaXN0ID0gZXhwb3J0cy5DaGVja2JveCA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5CdXR0b25Hcm91cCA9IGV4cG9ydHMuQm94ID0gZXhwb3J0cy5CYXJDaGFydCA9IGV4cG9ydHMuQmFubmVyID0gZXhwb3J0cy5CYWRnZSA9IGV4cG9ydHMuQWNjb3JkaW9uID0gZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gdm9pZCAwO1xuZXhwb3J0cy5Ub29sdGlwID0gZXhwb3J0cy5UZXh0RmllbGQgPSBleHBvcnRzLlRleHRBcmVhID0gZXhwb3J0cy5UYXNrTGlzdCA9IGV4cG9ydHMuVGFza0xpc3RJdGVtID0gZXhwb3J0cy5UYWJzID0gZXhwb3J0cy5UYWJsZVJvdyA9IGV4cG9ydHMuVGFibGUgPSB2b2lkIDA7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJAcmVtb3RlLXVpL3JlYWN0XCIpO1xuY29uc3QgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL3ZlcnNpb25cIik7XG5jb25zdCB3aXRoU2RrUHJvcHMgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgV2l0aFNka1Byb3BzID0gKHByb3BzKSA9PiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShDb21wb25lbnQsIHsgLi4ucHJvcHMsIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSwgc2RrVmVyc2lvbjogdmVyc2lvbl8xLlNES19WRVJTSU9OLCBzY2hlbWFWZXJzaW9uOiBcInY5XCIgfSkpO1xuICAgIFdpdGhTZGtQcm9wcy53cmFwcGVkQ29tcG9uZW50TmFtZSA9IHdyYXBwZWRDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBXaXRoU2RrUHJvcHM7XG59O1xuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGZyYWdtZW50UHJvcHMsIHdyYXBXaXRoU2RrUHJvcHMpID0+IHtcbiAgICBjb25zdCByZW1vdGVDb21wb25lbnQgPSAoMCwgcmVhY3RfMS5jcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCkobmFtZSwge1xuICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgIH0pO1xuICAgIGlmICghd3JhcFdpdGhTZGtQcm9wcykge1xuICAgICAgICByZXR1cm4gcmVtb3RlQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFNka1Byb3BzKHJlbW90ZUNvbXBvbmVudCk7XG59O1xuZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb25JdGVtJywgWyd0aXRsZScsICdhY3Rpb25zJywgJ21lZGlhJywgJ3N1YnRpdGxlJ10sIHRydWUpO1xuZXhwb3J0cy5BY2NvcmRpb24gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFkZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0JhZGdlJywgW10sIHRydWUpO1xuZXhwb3J0cy5CYW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ0Jhbm5lcicsIFsnYWN0aW9ucycsICdkZXNjcmlwdGlvbicsICd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQmFyQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0JhckNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5Cb3ggPSBkZWZpbmVDb21wb25lbnQoJ0JveCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbkdyb3VwJywgWydtZW51VHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoZWNrYm94ID0gZGVmaW5lQ29tcG9uZW50KCdDaGVja2JveCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ2hpcCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ29udGV4dFZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0NvbnRleHRWaWV3JywgWydhY3Rpb25zJywgJ2Jhbm5lcicsICdmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0cy5EYXRlRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VNb2R1bGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZVRhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5EaXZpZGVyID0gZGVmaW5lQ29tcG9uZW50KCdEaXZpZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Gb2N1c1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0ZvY3VzVmlldycsIFsnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0Zvcm1GaWVsZEdyb3VwJywgW10sIHRydWUpO1xuZXhwb3J0cy5JY29uID0gZGVmaW5lQ29tcG9uZW50KCdJY29uJywgW10sIHRydWUpO1xuZXhwb3J0cy5JbWcgPSBkZWZpbmVDb21wb25lbnQoJ0ltZycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSW5saW5lID0gZGVmaW5lQ29tcG9uZW50KCdJbmxpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkxpbmVDaGFydCA9IGRlZmluZUNvbXBvbmVudCgnTGluZUNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5MaW5rID0gZGVmaW5lQ29tcG9uZW50KCdMaW5rJywgW10sIHRydWUpO1xuZXhwb3J0cy5MaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTGlzdEl0ZW0nLCBbJ2ljb24nLCAnaW1hZ2UnLCAnc2Vjb25kYXJ5VGl0bGUnLCAndGl0bGUnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnRzLkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnVHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnTWVudUdyb3VwJywgWyd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuTWVudUl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ01lbnVJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0cy5NZW51ID0gZGVmaW5lQ29tcG9uZW50KCdNZW51JywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuZXhwb3J0cy5PbmJvYXJkaW5nVmlldyA9IGRlZmluZUNvbXBvbmVudCgnT25ib2FyZGluZ1ZpZXcnLCBbJ2Vycm9yJ10sIHRydWUpO1xuZXhwb3J0cy5QbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdQbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3JywgW10sIHRydWUpO1xuZXhwb3J0cy5Qcm9wZXJ0eUxpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3RJdGVtJywgWydsYWJlbCcsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydHMuUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlJhZGlvID0gZGVmaW5lQ29tcG9uZW50KCdSYWRpbycsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlNlbGVjdCA9IGRlZmluZUNvbXBvbmVudCgnU2VsZWN0JywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTZXR0aW5nc1ZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNpZ25JblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NpZ25JblZpZXcnLCBbJ2Rlc2NyaXB0aW9uQWN0aW9uQ29udGVudHMnLCAnZm9vdGVyQ29udGVudCddLCB0cnVlKTtcbmV4cG9ydHMuU3BhcmtsaW5lID0gZGVmaW5lQ29tcG9uZW50KCdTcGFya2xpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNwaW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ1NwaW5uZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGRlZmluZUNvbXBvbmVudCgnU3RyaXBlRmlsZVVwbG9hZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Td2l0Y2ggPSBkZWZpbmVDb21wb25lbnQoJ1N3aXRjaCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1RhYkxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYlBhbmVsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFiUGFuZWxzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbHMnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYiA9IGRlZmluZUNvbXBvbmVudCgnVGFiJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUJvZHkgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQm9keScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlRm9vdGVyID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUZvb3RlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVIZWFkID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWQnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkZXJDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlUm93ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZVJvdycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFicyA9IGRlZmluZUNvbXBvbmVudCgnVGFicycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFza0xpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdEl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhc2tMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEFyZWEgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRBcmVhJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0RmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5Ub29sdGlwID0gZGVmaW5lQ29tcG9uZW50KCdUb29sdGlwJywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuIiwgIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUHJpdmF0ZSEgVGhpcyBhbGxvd3MgdGhlIHNoYXJlZCBlbmRwb2ludCB0byBiZSBpbnRpYWxpemVkXG4gKiBzbyB0aGF0IHRoZSBTREsgY2FuIGNvbW11bmljYXRlIHdpdGggdGhlIERhc2hib2FyZC5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRIb3N0RW5kcG9pbnQgPSB2b2lkIDA7XG5jb25zdCBpbnZhcmlhbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW52YXJpYW50XCIpKTtcbmNvbnN0IGdldEhvc3RFbmRwb2ludCA9ICgpID0+IHtcbiAgICAvLyBUaGlzIGlzIGVuZHBvaW50IGlzIGNyZWF0ZWQgZnJvbSB0aGUgTWVzc2FnZVBvcnQgdHJhbnNmZXJyZWQgZnJvbSB0aGUgaG9zdCBlbnZcbiAgICAvLyBhcyBhIHBhcnQgb2YgdGhlIGBpbml0X2V4dGVuc2lvbmAgbWVzc2FnZS5cbiAgICBjb25zdCBob3N0RW5kcG9pbnQgPSBnbG9iYWxUaGlzLl9fU3RyaXBlRXh0RXhwb3J0cz8uZW5kcG9pbnQ7XG4gICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKGhvc3RFbmRwb2ludCwgJ2hvc3RFbmRwb2ludCBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQnKTtcbiAgICByZXR1cm4gaG9zdEVuZHBvaW50O1xufTtcbmV4cG9ydHMuZ2V0SG9zdEVuZHBvaW50ID0gZ2V0SG9zdEVuZHBvaW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuLi9fZW5kcG9pbnRcIik7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpXG4gICAgLmNhbGwuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KClcbiAgICAudGhlbigoc3VwcG9ydGVkKSA9PiBzdXBwb3J0ZWQpXG4gICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbmV4cG9ydHMuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaEFwcEVtYmVkZGVkS2V5ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hBcHBFbWJlZGRlZEtleSgpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZldGNoIGFwcCBlbWJlZGRlZCBrZXknKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaUtleTtcbn07XG5leHBvcnRzLmZldGNoQXBwRW1iZWRkZWRLZXkgPSBmZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gdm9pZCAwO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleV8xID0gcmVxdWlyZShcIi4vZmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWUgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgZmV0Y2hBcHBFbWJlZGRlZEtleV8xLmZldGNoQXBwRW1iZWRkZWRLZXkpKCk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgc2VyaWFsaXphYmxlUmVzcG9uc2UgPSB7XG4gICAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyYXlCdWZmZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgb2s6IHJlc3BvbnNlLm9rLFxuICAgICAgICByZWRpcmVjdGVkOiByZXNwb25zZS5yZWRpcmVjdGVkLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgdXJsOiByZXNwb25zZS51cmwsXG4gICAgfTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXphYmxlUmVzcG9uc2U7XG59O1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gZmV0Y2hWaWFGcmFtZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hWaWFIb3N0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hWaWFIb3N0ID0gYXN5bmMgKGVuY29kZWRVcmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5jb2RlZFVybCk7XG4gICAgcmV0dXJuICgwLCBfZW5kcG9pbnRfMS5nZXRIb3N0RW5kcG9pbnQpKCkuY2FsbC5zdHJpcGVBcGlGZXRjaCh1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLmZldGNoVmlhSG9zdCA9IGZldGNoVmlhSG9zdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMSA9IHJlcXVpcmUoXCIuL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWVfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhRnJhbWVcIik7XG5jb25zdCBmZXRjaFZpYUhvc3RfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhSG9zdFwiKTtcbmxldCBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gbnVsbDtcbmNvbnN0IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCkge1xuICAgICAgICBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gKGF3YWl0ICgwLCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMS5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkpKCkpXG4gICAgICAgICAgICA/IGZldGNoVmlhRnJhbWVfMS5mZXRjaFZpYUZyYW1lXG4gICAgICAgICAgICA6IGZldGNoVmlhSG9zdF8xLmZldGNoVmlhSG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2g7XG59O1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHZvaWQgMDtcbnZhciBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaDsgfSB9KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHN0cmlwZUFwaUZldGNoID0gYXN5bmMgKHBhdGgsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcmVmZXJyZWRGZXRjaE1ldGhvZCA9IGF3YWl0ICgwLCBhcGlfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCkoKTtcbiAgICByZXR1cm4gcHJlZmVycmVkRmV0Y2hNZXRob2QocGF0aCwgb3B0aW9ucyk7XG59O1xuZXhwb3J0cy5zdHJpcGVBcGlGZXRjaCA9IHN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGV4cG9ydHMuQVVUSE9SSVpBVElPTl9IRUFERVIgPSBleHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBleHBvcnRzLlNUUklQRV9BUElfS0VZID0gZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IHZvaWQgMDtcbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBIdHRwQ2xpZW50IHRoYXQgY2FuIGJlIHBsdWdnZWQgaW50byBzdHJpcGUtbm9kZVxuICogdGhhdCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIHVzZSBzdHJpcGUtbm9kZSBpbiBleHRlbnNpb25zIGlmIHRoZSBEYXNoYm9hcmRcbiAqIHByb3ZpZGVzIGEgYHN0cmlwZUFwaUZldGNoYCBmdW5jdGlvbiB0aGF0IHdpbGwgcmVsYXkgQVBJIGNhbGxzIHRocm91Z2ggdGhlXG4gKiBEYXNoYm9hcmQgYW5kIHBpZ2d5IGJhY2sgb24gdGhlIHVzZXIncyBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqL1xuY29uc3QgaW52YXJpYW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5jb25zdCBhcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vYXBpRmV0Y2hcIik7XG5jb25zdCBtYXRjaGVzU3RyaXBlS2V5ID0gL1twc11rXyh0ZXN0fGxpdmUpX1tBLVphLXowLTldKy87XG5jbGFzcyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwKSB7XG4gICAgICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICAgIH1cbiAgICBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5oZWFkZXJzO1xuICAgIH1cbiAgICBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5zdGF0dXM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICB0b1N0cmVhbSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGhhdmUgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIFN0cmlwZSBIVFRQIGNsaWVudCcpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgeyBqc29uIH0gPSB0aGlzLl9yZXNwO1xuICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdSZXNwb25zZSBib2R5IHVuZGVmaW5lZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBTdHJpcGVBcHBzSHR0cENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2ggPSBmZXRjaDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBnZXRDbGllbnROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3N0cmlwZS11aS1leHRlbnNpb24nO1xuICAgIH1cbiAgICBhc3luYyBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgX3RpbWVvdXQpIHtcbiAgICAgICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKHByb3RvY29sID09PSAnaHR0cHMnLCAnTXVzdCB1c2UgaHR0cHMgY29ubmVjdGlvbnMgaW4gVUkgZXh0ZW5zaW9ucycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdERhdGEpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gcmVxdWVzdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICAgICAgaWYgKGF1dGhIZWFkZXIgJiYgbWF0Y2hlc1N0cmlwZUtleS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgYWN0dWFsIHN0cmlwZSBrZXlzIHdoZW4gdXNpbmcgdGhlIFN0cmlwZSBKUyBBUEkgY2xpZW50IHdpdGggVUkgZXh0ZXNpb25zLlxcblxcbiBJbnN0ZWFkLCB1c2UgYFNUUklQRV9BUElfS0VZYCBmcm9tIGBAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnRgIGFzIGEgcGxhY2Vob2xkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YCk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9mZXRjaCh1cmwudG9TdHJpbmcoKSwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIHRpbWVvdXRzLlxuICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUFwcHNIdHRwUmVzcG9uc2UocmVzcCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IFN0cmlwZUFwcHNIdHRwQ2xpZW50O1xuLy8gRE8gTk9UIGNoYW5nZSB0aGlzIHN0cmluZyB3aXRob3V0IGEgZGVwcmVjYXRpb24gcGxhbi4gVGhlIHJ1bnRpbWUgY2hlY2tzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoaXNcbi8vIGV4YWN0IHN0cmluZyBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuLy8gU2VlOiBtYW5hZ2UvZnJvbnRlbmQvc3JjL3RhaWxvci9leHRlbnNpb25zL2hvc3QvYXBpX2ZldGNoLmpzXG5leHBvcnRzLlNUUklQRV9BUElfS0VZID0gJ0RPX05PVF9QQVNTX0FfUkVBTF9BUElfS0VZJztcbmNvbnN0IGNyZWF0ZUh0dHBDbGllbnQgPSAoKSA9PiBuZXcgU3RyaXBlQXBwc0h0dHBDbGllbnQoYXBpRmV0Y2hfMS5zdHJpcGVBcGlGZXRjaCk7XG5leHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBjcmVhdGVIdHRwQ2xpZW50O1xuZXhwb3J0cy5BVVRIT1JJWkFUSU9OX0hFQURFUiA9ICdBdXRob3JpemF0aW9uJztcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGBCZWFyZXIgJHtleHBvcnRzLlNUUklQRV9BUElfS0VZfWA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSB2b2lkIDA7XG5jb25zdCBodHRwQ2xpZW50XzEgPSByZXF1aXJlKFwiLi4vaHR0cENsaWVudFwiKTtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoeyBob3N0LCBwb3J0IH0pID0+IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly8ke2hvc3R9OiR7cG9ydH0vdjEvYXBwcy9hcHBfZW1iZWRkZWRfYmFja2VuZF9zaWduYXR1cmVgKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgncGF5bG9hZCcsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGF5bG9hZCB9KSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2luY2x1ZGVfb25seVtdJywgJ3NpZ25hdHVyZScpO1xuICAgIGNvbnN0IGNsaWVudCA9ICgwLCBodHRwQ2xpZW50XzEuY3JlYXRlSHR0cENsaWVudCkoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNsaWVudC5tYWtlUmVxdWVzdChob3N0LCBwb3J0LCB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCAnR0VUJywge30sIG51bGwsICdodHRwcycpO1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAudGhlbigocikgPT4gci50b0pTT04oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc2lnbmF0dXJlKTtcbn07XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRDb25uZWN0aW9uU2V0dGluZ3MgPSBleHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3MgPSB7XG4gICAgaG9zdDogJ2FwaS5zdHJpcGUuY29tJyxcbiAgICBwb3J0OiA0NDMsXG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0gZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncztcbmNvbnN0IHNldENvbm5lY3Rpb25TZXR0aW5ncyA9IChzZXR0aW5ncykgPT4ge1xuICAgIGV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgICAgICAuLi5kZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzLFxuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICB9O1xufTtcbmV4cG9ydHMuc2V0Q29ubmVjdGlvblNldHRpbmdzID0gc2V0Q29ubmVjdGlvblNldHRpbmdzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFN0cmlwZVNpZ25hdHVyZSA9IHZvaWQgMDtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHlfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZS9jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5XCIpO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEgPSByZXF1aXJlKFwiLi9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XCIpO1xuY29uc3QgY29ubmVjdGlvblNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzXCIpO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGFzeW5jIChhZGRpdGlvbmFsUGF5bG9hZCkgPT4ge1xuICAgIGlmIChhd2FpdCAoMCwgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KSgpKSB7XG4gICAgICAgIGNvbnN0IGZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoMCwgY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseV8xLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkpKGNvbm5lY3Rpb25TZXR0aW5nc18xLmNvbm5lY3Rpb25TZXR0aW5ncyk7XG4gICAgICAgIHJldHVybiBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hTdHJpcGVTaWduYXR1cmUoYWRkaXRpb25hbFBheWxvYWQpO1xuICAgIH1cbn07XG5leHBvcnRzLmZldGNoU3RyaXBlU2lnbmF0dXJlID0gZmV0Y2hTdHJpcGVTaWduYXR1cmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGZpbGUgbW92ZWQgdG8gdXRpbHM7IHJlLWV4cG9ydGVkIHRvIG5vdCBicmVhayBpbXBvcnRzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NpZ25hdHVyZVwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpZ25hdHVyZV8xLmZldGNoU3RyaXBlU2lnbmF0dXJlO1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgQ2hhdFZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL0NoYXRWaWV3JztpbXBvcnQgU2V0dGluZ3NWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9TZXR0aW5nc1ZpZXcnO2ltcG9ydCBPbmJvYXJkaW5nVmlldyBmcm9tICcuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcnO1xuXG5leHBvcnQgKiBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdmVyc2lvbic7XG5leHBvcnQgY29uc3QgQlVJTERfVElNRSA9ICcyMDI2LTAyLTEyIDE1OjMzOjAzLjUwOTQ3NyAtMDMwMCAtMDMgbT0rMy4wMDcwMzYzMTQnO1xuXG5leHBvcnQgeyBcbiAgQ2hhdFZpZXcsXHRcblxuICBTZXR0aW5nc1ZpZXcsXHRcblxuICBPbmJvYXJkaW5nVmlld1x0XG4gfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImFsbG93ZWRfcmVkaXJlY3RfdXJpc1wiOiBbXG4gICAgXCJodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tL3Rlc3QvYXBwcy1vYXV0aC9jb20uamF2ZWxpbi5haVwiLFxuICAgIFwiaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS9hcHBzLW9hdXRoL2NvbS5qYXZlbGluLmFpXCJcbiAgXSxcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwiZGlzdHJpYnV0aW9uX3R5cGVcIjogXCJwdWJsaWNcIixcbiAgXCJpY29uXCI6IFwiLi9pY29uLnBuZ1wiLFxuICBcImlkXCI6IFwiY29tLmphdmVsaW4uYWlcIixcbiAgXCJuYW1lXCI6IFwiSmF2ZWxpblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGRhdGEgdG8gY2FsY3VsYXRlIGJ1c2luZXNzIG1ldHJpY3MgYW5kIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgeW91ciBjdXN0b21lciBiYXNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImludm9pY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBpbnZvaWNlIGRhdGEgdG8gY2FsY3VsYXRlIHJldmVudWUsIE1SUiwgYW5kIG90aGVyIGJpbGxpbmcgbWV0cmljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBjaGFyZ2UgZGF0YSB0byBhbmFseXplIHBheW1lbnQgdm9sdW1lIGFuZCByZXZlbnVlIHRyZW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzdWJzY3JpcHRpb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBzdWJzY3JpcHRpb24gZGF0YSB0byBjYWxjdWxhdGUgTVJSLCBjaHVybiByYXRlLCBhbmQgc3Vic2NyaXB0aW9uIGFuYWx5dGljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgcHJvZHVjdCBkYXRhIHRvIGJyZWFrIGRvd24gcmV2ZW51ZSBhbmQgbWV0cmljcyBieSBwcm9kdWN0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBsYW5fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwcmljZSBhbmQgcGxhbiBkYXRhIHRvIGFuYWx5emUgcGxhbi1sZXZlbCByZXZlbnVlIGFuZCBzdWJzY3JpYmVyIGNvdW50c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlIGFuZCBtYW5hZ2UgT0F1dGggdG9rZW5zIHNlY3VyZWx5IHZpYSB0aGUgU2VjcmV0IFN0b3JlIEFQSVwiXG4gICAgfVxuICBdLFxuICBcInNhbmRib3hfaW5zdGFsbF9jb21wYXRpYmxlXCI6IHRydWUsXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcIm9hdXRoXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vdGVjdnljcG16Y3h4b3FtdHR0ankuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL1wiLFxuICAgICAgICBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9cIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJDb25uZWN0IHRvIFN1cGFiYXNlIGJhY2tlbmQgZm9yIGRhdGEgcHJvY2Vzc2luZyBhbmQgTExNIHByb3ZpZGVyIGZvciBBSS1wb3dlcmVkIGJ1c2luZXNzIGludGVsbGlnZW5jZVwiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJDaGF0Vmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5kcmF3ZXIuZGVmYXVsdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHRpbmdzVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJPbmJvYXJkaW5nVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwib25ib2FyZGluZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiXG59O1xuIiwgImltcG9ydCB7IENvbnRleHRWaWV3LCBCb3gsIFNwaW5uZXIsIElubGluZSwgQmFubmVyLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGF0VGhyZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdFRocmVhZCc7XG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdElucHV0JztcbmltcG9ydCBXZWxjb21lUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvV2VsY29tZVByb21wdCc7XG5pbXBvcnQgQ29udmVyc2F0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZyZXNobmVzcz86IHsgdHlwZTogJ2NhY2hlZCcgfCAnbGl2ZSc7IHN5bmNlZEF0Pzogc3RyaW5nIH07XG4gIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gIGNsYXJpZmljYXRpb24/OiB7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICBvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT47XG4gIH07XG59XG5cbmludGVyZmFjZSBDb252ZXJzYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cblxudHlwZSBWaWV3U3RhdGUgPSAnbG9hZGluZycgfCAnZW1wdHknIHwgJ2NoYXQnIHwgJ2Vycm9yJztcblxuY29uc3QgQ2hhdFZpZXcgPSAoeyB1c2VyQ29udGV4dDogX3VzZXJDb250ZXh0LCBlbnZpcm9ubWVudDogX2Vudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGU8Vmlld1N0YXRlPignbG9hZGluZycpO1xuICBjb25zdCBbY29udmVyc2F0aW9ucywgc2V0Q29udmVyc2F0aW9uc10gPSB1c2VTdGF0ZTxDb252ZXJzYXRpb25bXT4oW10pO1xuICBjb25zdCBbYWN0aXZlQ29udmVyc2F0aW9uSWQsIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICBjb25zdCBbaXNUaGlua2luZywgc2V0SXNUaGlua2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aGlua2luZ1N0YXJ0ZWRBdCwgc2V0VGhpbmtpbmdTdGFydGVkQXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbd2VsY29tZUluc2lnaHRzLCBzZXRXZWxjb21lSW5zaWdodHNdID0gdXNlU3RhdGU8QXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT4+KFtdKTtcbiAgY29uc3QgW3Nob3dDb252ZXJzYXRpb25MaXN0LCBzZXRTaG93Q29udmVyc2F0aW9uTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbG9hZENvbnZlcnNhdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHsgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW10gfT4oJy9jaGF0LWNvbnZlcnNhdGlvbnMnKTtcbiAgICAgIGNvbnN0IGNvbnZvcyA9IHJlc3BvbnNlLmRhdGE/LmNvbnZlcnNhdGlvbnMgfHwgW107XG4gICAgICBzZXRDb252ZXJzYXRpb25zKGNvbnZvcyk7XG5cbiAgICAgIGlmIChjb252b3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEZpcnN0IHRpbWUgdXNlciBcdTIwMTQgbG9hZCB3ZWxjb21lIGluc2lnaHRzXG4gICAgICAgIGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgICAgc2V0Vmlld1N0YXRlKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9hZCB0aGUgbW9zdCByZWNlbnQgY29udmVyc2F0aW9uXG4gICAgICAgIGF3YWl0IGxvYWRDb252ZXJzYXRpb24oY29udm9zWzBdLmlkKTtcbiAgICAgICAgc2V0Vmlld1N0YXRlKCdjaGF0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBJZiBjb252ZXJzYXRpb25zIGZhaWwgdG8gbG9hZCwgc2hvdyBlbXB0eSBzdGF0ZSAoY291bGQgYmUgZmlyc3QgdGltZSlcbiAgICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICAgIGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIGNvbnZlcnNhdGlvbnMgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ29udmVyc2F0aW9ucygpO1xuICB9LCBbbG9hZENvbnZlcnNhdGlvbnNdKTtcblxuICBjb25zdCBsb2FkV2VsY29tZUluc2lnaHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudDx7IGluc2lnaHRzOiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PiB9PihcbiAgICAgICAgJy9pbnNpZ2h0cy13ZWxjb21lJyxcbiAgICAgICk7XG4gICAgICBzZXRXZWxjb21lSW5zaWdodHMocmVzcG9uc2UuZGF0YT8uaW5zaWdodHMgfHwgW10pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gTm9uLWNyaXRpY2FsIFx1MjAxNCBqdXN0IHNob3cgZW1wdHkgd2VsY29tZVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkQ29udmVyc2F0aW9uID0gYXN5bmMgKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8e1xuICAgICAgICBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcbiAgICAgICAgbWVzc2FnZXM6IEFycmF5PHtcbiAgICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICAgIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICAgICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICB9PjtcbiAgICAgIH0+KGAvY2hhdC1jb252ZXJzYXRpb24tZGV0YWlsP2NvbnZlcnNhdGlvbklkPSR7Y29udmVyc2F0aW9uSWR9YCk7XG5cbiAgICAgIGNvbnN0IG1zZ3M6IE1lc3NhZ2VbXSA9IChyZXNwb25zZS5kYXRhPy5tZXNzYWdlcyB8fCBbXSkubWFwKChtKSA9PiAoe1xuICAgICAgICBpZDogbS5pZCxcbiAgICAgICAgcm9sZTogbS5yb2xlLFxuICAgICAgICBjb250ZW50OiBtLmNvbnRlbnQsXG4gICAgICAgIGZyZXNobmVzczogbS5tZXRhZGF0YT8uZnJlc2huZXNzIGFzIE1lc3NhZ2VbJ2ZyZXNobmVzcyddLFxuICAgICAgICBpbnNpZ2h0czogbS5tZXRhZGF0YT8uaW5zaWdodHMgYXMgTWVzc2FnZVsnaW5zaWdodHMnXSxcbiAgICAgIH0pKTtcblxuICAgICAgc2V0TWVzc2FnZXMobXNncyk7XG4gICAgICBzZXRBY3RpdmVDb252ZXJzYXRpb25JZChjb252ZXJzYXRpb25JZCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgY29udmVyc2F0aW9uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICAgIC8vIEFkZCB1c2VyIG1lc3NhZ2UgdG8gVUkgaW1tZWRpYXRlbHlcbiAgICAgIGNvbnN0IHRlbXBVc2VyTXNnSWQgPSBgdGVtcC0ke0RhdGUubm93KCl9YDtcbiAgICAgIGNvbnN0IHVzZXJNZXNzYWdlOiBNZXNzYWdlID0ge1xuICAgICAgICBpZDogdGVtcFVzZXJNc2dJZCxcbiAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfTtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgdXNlck1lc3NhZ2VdKTtcbiAgICAgIHNldFZpZXdTdGF0ZSgnY2hhdCcpO1xuICAgICAgc2V0SXNUaGlua2luZyh0cnVlKTtcbiAgICAgIHNldFRoaW5raW5nU3RhcnRlZEF0KERhdGUubm93KCkpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudDx7XG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICAgIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbnNpZ2h0cz86IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+O1xuICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiBzdHJpbmc7XG4gICAgICAgIH0+KCcvY2hhdC1tZXNzYWdlJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiBhY3RpdmVDb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXNzaXN0YW50TWVzc2FnZTogTWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YT8ubWVzc2FnZS5pZCB8fCBgbXNnLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UuY29udGVudCB8fCAnU29ycnksIEkgY291bGQgbm90IGdlbmVyYXRlIGEgcmVzcG9uc2UuJyxcbiAgICAgICAgICBmcmVzaG5lc3M6IHJlc3BvbnNlLm1ldGEgYXMgTWVzc2FnZVsnZnJlc2huZXNzJ10sXG4gICAgICAgICAgaW5zaWdodHM6IHJlc3BvbnNlLmRhdGE/Lmluc2lnaHRzLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjb252ZXJzYXRpb24gSUQgaWYgbmV3IGNvbnZlcnNhdGlvbiB3YXMgY3JlYXRlZFxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8uY29udmVyc2F0aW9uSWQgJiYgIWFjdGl2ZUNvbnZlcnNhdGlvbklkKSB7XG4gICAgICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQocmVzcG9uc2UuZGF0YS5jb252ZXJzYXRpb25JZCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIGFzc2lzdGFudE1lc3NhZ2VdKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgICBjb25zdCBlcnJvck9iaiA9IGVyciBhcyB7IGVycm9yPzogeyBjb2RlPzogc3RyaW5nOyBtZXNzYWdlPzogc3RyaW5nIH0gfTtcbiAgICAgICAgY29uc3QgY29kZSA9IGVycm9yT2JqPy5lcnJvcj8uY29kZTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gJ2F1dGhfcmVmcmVzaF9mYWlsZWQnKSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ1lvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlLWF1dGhvcml6ZSBKYXZlbGluLicpO1xuICAgICAgICAgIC8vIEluIGEgZnVsbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3b3VsZCBzd2l0Y2ggdG8gU2lnbkluVmlld1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdsbG1fdW5hdmFpbGFibGUnKSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ0FJIHNlcnZpY2UgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuIFBsZWFzZSB0cnkgYWdhaW4gaW4gYSBtb21lbnQuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc1RoaW5raW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VGhpbmtpbmdTdGFydGVkQXQodW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFthY3RpdmVDb252ZXJzYXRpb25JZF0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2xhcmlmaWNhdGlvblNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBzZW5kTWVzc2FnZSh2YWx1ZSk7XG4gICAgfSxcbiAgICBbc2VuZE1lc3NhZ2VdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU5ld0NvbnZlcnNhdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBY3RpdmVDb252ZXJzYXRpb25JZChudWxsKTtcbiAgICBzZXRNZXNzYWdlcyhbXSk7XG4gICAgc2V0Vmlld1N0YXRlKCdlbXB0eScpO1xuICAgIHNldFNob3dDb252ZXJzYXRpb25MaXN0KGZhbHNlKTtcbiAgICBsb2FkV2VsY29tZUluc2lnaHRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RDb252ZXJzYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFNob3dDb252ZXJzYXRpb25MaXN0KGZhbHNlKTtcbiAgICBhd2FpdCBsb2FkQ29udmVyc2F0aW9uKGlkKTtcbiAgICBzZXRWaWV3U3RhdGUoJ2NoYXQnKTtcbiAgfSwgW10pO1xuXG4gIC8vIExvYWRpbmcgc3RhdGVcbiAgaWYgKHZpZXdTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIkphdmVsaW5cIj5cbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScsIGFsaWduWDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+TG9hZGluZyBKYXZlbGluLi4uPC9JbmxpbmU+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXdcbiAgICAgIHRpdGxlPVwiSmF2ZWxpblwiXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgIHtjb252ZXJzYXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25QcmVzcz17KCkgPT4gc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoKHYpID0+ICF2KX0+XG4gICAgICAgICAgICAgIEhpc3RvcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25QcmVzcz17aGFuZGxlTmV3Q29udmVyc2F0aW9ufT5cbiAgICAgICAgICAgIE5ldyBjaGF0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGhlaWdodDogJ2ZpbGwnIH19PlxuICAgICAgICB7LyogRXJyb3IgYmFubmVyICovfVxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICB0aXRsZT1cIkVycm9yXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlcnJvcn1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogQ29udmVyc2F0aW9uIGxpc3QgcGFuZWwgKi99XG4gICAgICAgIHtzaG93Q29udmVyc2F0aW9uTGlzdCAmJiAoXG4gICAgICAgICAgPENvbnZlcnNhdGlvbkxpc3RcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnM9e2NvbnZlcnNhdGlvbnN9XG4gICAgICAgICAgICBhY3RpdmVDb252ZXJzYXRpb25JZD17YWN0aXZlQ29udmVyc2F0aW9uSWR9XG4gICAgICAgICAgICBvblNlbGVjdENvbnZlcnNhdGlvbj17aGFuZGxlU2VsZWN0Q29udmVyc2F0aW9ufVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIE1haW4gY29udGVudCBhcmVhICovfVxuICAgICAgICB7IXNob3dDb252ZXJzYXRpb25MaXN0ICYmIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAge3ZpZXdTdGF0ZSA9PT0gJ2VtcHR5JyAmJiBtZXNzYWdlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8V2VsY29tZVByb21wdCBvblNlbGVjdFByb21wdD17c2VuZE1lc3NhZ2V9IGluc2lnaHRzPXt3ZWxjb21lSW5zaWdodHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDaGF0VGhyZWFkXG4gICAgICAgICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc31cbiAgICAgICAgICAgICAgaXNUaGlua2luZz17aXNUaGlua2luZ31cbiAgICAgICAgICAgICAgdGhpbmtpbmdTdGFydGVkQXQ9e3RoaW5raW5nU3RhcnRlZEF0fVxuICAgICAgICAgICAgICBvbkNsYXJpZmljYXRpb25TZWxlY3Q9e2hhbmRsZUNsYXJpZmljYXRpb25TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94Pn1cblxuICAgICAgICB7LyogQ2hhdCBpbnB1dCAqL31cbiAgICAgICAgeyFzaG93Q29udmVyc2F0aW9uTGlzdCAmJiA8Q2hhdElucHV0IG9uU2VuZD17c2VuZE1lc3NhZ2V9IGRpc2FibGVkPXtpc1RoaW5raW5nfSAvPn1cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0VmlldztcbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IE1lc3NhZ2VCdWJibGUgZnJvbSAnLi9NZXNzYWdlQnViYmxlJztcbmltcG9ydCBJbnNpZ2h0Q2FyZCBmcm9tICcuL0luc2lnaHRDYXJkJztcbmltcG9ydCBUaGlua2luZ0luZGljYXRvciBmcm9tICcuL1RoaW5raW5nSW5kaWNhdG9yJztcbmltcG9ydCBDbGFyaWZpY2F0aW9uUHJvbXB0IGZyb20gJy4vQ2xhcmlmaWNhdGlvblByb21wdCc7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgY2xhcmlmaWNhdGlvbj86IHtcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIENoYXRUaHJlYWRQcm9wcyB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG4gIGlzVGhpbmtpbmc6IGJvb2xlYW47XG4gIHRoaW5raW5nU3RhcnRlZEF0PzogbnVtYmVyO1xuICBvbkNsYXJpZmljYXRpb25TZWxlY3Q/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2hhdFRocmVhZCA9ICh7XG4gIG1lc3NhZ2VzLFxuICBpc1RoaW5raW5nLFxuICB0aGlua2luZ1N0YXJ0ZWRBdCxcbiAgb25DbGFyaWZpY2F0aW9uU2VsZWN0LFxufTogQ2hhdFRocmVhZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcbiAgICAgICAgPEJveCBrZXk9e21lc3NhZ2UuaWR9IGNzcz17eyBzdGFjazogJ3knIH19PlxuICAgICAgICAgIDxNZXNzYWdlQnViYmxlXG4gICAgICAgICAgICByb2xlPXttZXNzYWdlLnJvbGV9XG4gICAgICAgICAgICBjb250ZW50PXttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICBmcmVzaG5lc3M9e21lc3NhZ2UuZnJlc2huZXNzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge21lc3NhZ2UuaW5zaWdodHM/Lm1hcCgoaW5zaWdodCkgPT4gKFxuICAgICAgICAgICAgPEluc2lnaHRDYXJkXG4gICAgICAgICAgICAgIGtleT17aW5zaWdodC5pZH1cbiAgICAgICAgICAgICAgaW5zaWdodElkPXtpbnNpZ2h0LmlkfVxuICAgICAgICAgICAgICBtZXNzYWdlSWQ9e21lc3NhZ2UuaWR9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2luc2lnaHQuY29udGVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge21lc3NhZ2UuY2xhcmlmaWNhdGlvbiAmJiBvbkNsYXJpZmljYXRpb25TZWxlY3QgJiYgKFxuICAgICAgICAgICAgPENsYXJpZmljYXRpb25Qcm9tcHRcbiAgICAgICAgICAgICAgcXVlc3Rpb249e21lc3NhZ2UuY2xhcmlmaWNhdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17bWVzc2FnZS5jbGFyaWZpY2F0aW9uLm9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvbkNsYXJpZmljYXRpb25TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgICB7aXNUaGlua2luZyAmJiB0aGlua2luZ1N0YXJ0ZWRBdCAmJiAoXG4gICAgICAgIDxUaGlua2luZ0luZGljYXRvciBzdGFydGVkQXQ9e3RoaW5raW5nU3RhcnRlZEF0fSAvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRUaHJlYWQ7XG4iLCAiaW1wb3J0IHsgQm94LCBJbmxpbmUsIEJhZGdlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIE1lc3NhZ2VCdWJibGVQcm9wcyB7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZyZXNobmVzcz86IHsgdHlwZTogJ2NhY2hlZCcgfCAnbGl2ZSc7IHN5bmNlZEF0Pzogc3RyaW5nIH07XG59XG5cbmNvbnN0IE1lc3NhZ2VCdWJibGUgPSAoeyByb2xlLCBjb250ZW50LCBmcmVzaG5lc3MgfTogTWVzc2FnZUJ1YmJsZVByb3BzKSA9PiB7XG4gIGNvbnN0IGlzVXNlciA9IHJvbGUgPT09ICd1c2VyJztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17e1xuICAgICAgICBwYWRkaW5nOiAnbWVkaXVtJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1VzZXIgPyAnY29udGFpbmVyJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhY2s6ICd5JyxcbiAgICAgICAgZ2FwOiAnc21hbGwnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgIHtpc1VzZXIgPyAnWW91JyA6ICdKYXZlbGluJ31cbiAgICAgIDwvSW5saW5lPlxuICAgICAgPElubGluZT57Y29udGVudH08L0lubGluZT5cbiAgICAgIHtmcmVzaG5lc3MgJiYgIWlzVXNlciAmJiAoXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgICAgPEJhZGdlIHR5cGU9e2ZyZXNobmVzcy50eXBlID09PSAnbGl2ZScgPyAncG9zaXRpdmUnIDogJ2luZm8nfT5cbiAgICAgICAgICAgIHtmcmVzaG5lc3MudHlwZSA9PT0gJ2xpdmUnXG4gICAgICAgICAgICAgID8gJ0xpdmUgZGF0YSdcbiAgICAgICAgICAgICAgOiBgRGF0YSBhcyBvZiAke2ZyZXNobmVzcy5zeW5jZWRBdCA/IG5ldyBEYXRlKGZyZXNobmVzcy5zeW5jZWRBdCkudG9Mb2NhbGVTdHJpbmcoKSA6ICdjYWNoZSd9YH1cbiAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQnViYmxlO1xuIiwgImltcG9ydCB7IEJveCwgQmFubmVyLCBCdXR0b24sIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwaUNsaWVudCB9IGZyb20gJy4uL2xpYi9hcGktY2xpZW50JztcblxuaW50ZXJmYWNlIEluc2lnaHRDYXJkUHJvcHMge1xuICBpbnNpZ2h0SWQ6IHN0cmluZztcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgSW5zaWdodENhcmQgPSAoeyBpbnNpZ2h0SWQsIG1lc3NhZ2VJZCwgY29udGVudCB9OiBJbnNpZ2h0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IFtmZWVkYmFjaywgc2V0RmVlZGJhY2tdID0gdXNlU3RhdGU8J3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUZlZWRiYWNrID0gYXN5bmMgKHJhdGluZzogJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScpID0+IHtcbiAgICBpZiAoc3VibWl0dGluZyB8fCBmZWVkYmFjaykgcmV0dXJuO1xuICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaUNsaWVudCgnL2luc2lnaHRzLWZlZWRiYWNrJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogeyBpbnNpZ2h0SWQsIG1lc3NhZ2VJZCwgcmF0aW5nIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEZlZWRiYWNrKHJhdGluZyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTaWxlbnRseSBmYWlsIFx1MjAxNCBmZWVkYmFjayBpcyBub24tY3JpdGljYWxcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ3NtYWxsJywgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgPEJhbm5lciB0eXBlPVwiZGVmYXVsdFwiIHRpdGxlPVwiSW5zaWdodFwiIGRlc2NyaXB0aW9uPXtjb250ZW50fSAvPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17ZmVlZGJhY2sgPT09ICdwb3NpdGl2ZScgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IGZlZWRiYWNrICE9PSBudWxsfVxuICAgICAgICAgIG9uUHJlc3M9eygpID0+IGhhbmRsZUZlZWRiYWNrKCdwb3NpdGl2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZT57ZmVlZGJhY2sgPT09ICdwb3NpdGl2ZScgPyAnSGVscGZ1bCcgOiAnSGVscGZ1bD8nfTwvSW5saW5lPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9e2ZlZWRiYWNrID09PSAnbmVnYXRpdmUnID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBmZWVkYmFjayAhPT0gbnVsbH1cbiAgICAgICAgICBvblByZXNzPXsoKSA9PiBoYW5kbGVGZWVkYmFjaygnbmVnYXRpdmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmU+e2ZlZWRiYWNrID09PSAnbmVnYXRpdmUnID8gJ05vdCBoZWxwZnVsJyA6ICdOb3QgaGVscGZ1bD8nfTwvSW5saW5lPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodENhcmQ7XG4iLCAiaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9zaWduYXR1cmUnO1xuXG4vLyBTdXBhYmFzZSBFZGdlIEZ1bmN0aW9ucyBiYXNlIFVSTCBcdTIwMTQgc2V0IGR1cmluZyBhcHAgY29uZmlndXJhdGlvblxuLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyBpcyBzZXQgdmlhIHRoZSBTdHJpcGUgU2VjcmV0IFN0b3JlIG9yIGJ1aWxkLXRpbWUgZW52XG5jb25zdCBTVVBBQkFTRV9GVU5DVElPTlNfVVJMID1cbiAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Py5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgPyBwcm9jZXNzLmVudi5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgOiAnaHR0cHM6Ly90ZWN2eWNwbXpjeHhvcW10dHRqeS5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEnO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhPzogVDtcbiAgZXJyb3I/OiB7IGNvZGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyByZXF1ZXN0SWQ6IHN0cmluZyB9O1xuICBtZXRhPzogeyBmcmVzaG5lc3M6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpQ2xpZW50PFQ+KFxuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgbWV0aG9kPzogc3RyaW5nOyBib2R5PzogdW5rbm93biB9ID0ge30sXG4pOiBQcm9taXNlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTVVBBQkFTRV9GVU5DVElPTlNfVVJMfSR7cGF0aH1gLCB7XG4gICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ3N0cmlwZS1zaWduYXR1cmUnOiBzaWduYXR1cmUsXG4gICAgfSxcbiAgICBib2R5OiBvcHRpb25zLmJvZHkgPyBKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvZHkpIDogdW5kZWZpbmVkLFxuICB9KTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuIiwgImltcG9ydCB7IEJveCwgU3Bpbm5lciwgSW5saW5lLCBCYW5uZXIgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFRoaW5raW5nSW5kaWNhdG9yUHJvcHMge1xuICBzdGFydGVkQXQ6IG51bWJlcjtcbn1cblxuY29uc3QgVGhpbmtpbmdJbmRpY2F0b3IgPSAoeyBzdGFydGVkQXQgfTogVGhpbmtpbmdJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RWxhcHNlZChNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gc3RhcnRlZEF0KSAvIDEwMDApKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtzdGFydGVkQXRdKTtcblxuICBjb25zdCBzdGF0dXNUZXh0ID1cbiAgICBlbGFwc2VkID49IDUgPyAnRmV0Y2hpbmcgZnJlc2ggZGF0YSBmcm9tIFN0cmlwZS4uLicgOiAnQW5hbHl6aW5nIHlvdXIgZGF0YS4uLic7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxuICAgICAgICA8U3Bpbm5lciBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+e3N0YXR1c1RleHR9PC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICAgIHtlbGFwc2VkID49IDUgJiYgKFxuICAgICAgICA8QmFubmVyXG4gICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3RpbGwgd29ya2luZyBcdTIwMTQgZmV0Y2hpbmcgdGhlIGxhdGVzdCBkYXRhIGZyb20gU3RyaXBlIHRvIGdpdmUgeW91IGFuIGFjY3VyYXRlIGFuc3dlci5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoaW5raW5nSW5kaWNhdG9yO1xuIiwgImltcG9ydCB7IEJveCwgQmFubmVyLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgQ2xhcmlmaWNhdGlvbk9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDbGFyaWZpY2F0aW9uUHJvbXB0UHJvcHMge1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICBvcHRpb25zOiBDbGFyaWZpY2F0aW9uT3B0aW9uW107XG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2xhcmlmaWNhdGlvblByb21wdCA9ICh7IHF1ZXN0aW9uLCBvcHRpb25zLCBvblNlbGVjdCB9OiBDbGFyaWZpY2F0aW9uUHJvbXB0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgPEJhbm5lciB0eXBlPVwiZGVmYXVsdFwiIHRpdGxlPVwiQ2xhcmlmaWNhdGlvbiBuZWVkZWRcIiBkZXNjcmlwdGlvbj17cXVlc3Rpb259IC8+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIHdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IG9uU2VsZWN0KG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXJpZmljYXRpb25Qcm9tcHQ7XG4iLCAiaW1wb3J0IHsgQm94LCBUZXh0QXJlYSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENoYXRJbnB1dFByb3BzIHtcbiAgb25TZW5kOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGluaXRpYWxWYWx1ZT86IHN0cmluZztcbn1cblxuY29uc3QgQ2hhdElucHV0ID0gKHsgb25TZW5kLCBkaXNhYmxlZCA9IGZhbHNlLCBpbml0aWFsVmFsdWUgPSAnJyB9OiBDaGF0SW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgIGlmICghdHJpbW1lZCB8fCBkaXNhYmxlZCkgcmV0dXJuO1xuICAgIG9uU2VuZCh0cmltbWVkKTtcbiAgICBzZXRWYWx1ZSgnJyk7XG4gIH0sIFt2YWx1ZSwgZGlzYWJsZWQsIG9uU2VuZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdib3R0b20nLCBwYWRkaW5nOiAnc21hbGwnIH19PlxuICAgICAgPEJveCBjc3M9e3sgd2lkdGg6ICdmaWxsJyB9fT5cbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9XCJBc2sgYSBxdWVzdGlvblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3MgbXkgTVJSP1wiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJvd3M9ezJ9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgb25QcmVzcz17aGFuZGxlU2VuZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8ICF2YWx1ZS50cmltKCl9XG4gICAgICA+XG4gICAgICAgIFNlbmRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdElucHV0O1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5jb25zdCBHVUlERURfUFJPTVBUUyA9IFtcbiAgeyBsYWJlbDogXCJXaGF0J3MgbXkgTVJSP1wiLCB2YWx1ZTogXCJXaGF0J3MgbXkgTVJSP1wiIH0sXG4gIHsgbGFiZWw6IFwiSG93J3MgY2h1cm4gdHJlbmRpbmc/XCIsIHZhbHVlOiBcIkhvdyBpcyBteSBjaHVybiByYXRlIHRyZW5kaW5nIG92ZXIgdGhlIGxhc3QgMyBtb250aHM/XCIgfSxcbiAgeyBsYWJlbDogJ1JldmVudWUgYnkgcHJvZHVjdCcsIHZhbHVlOiBcIldoYXQncyBteSByZXZlbnVlIGJyZWFrZG93biBieSBwcm9kdWN0P1wiIH0sXG4gIHsgbGFiZWw6ICdUb3AgY3VzdG9tZXJzJywgdmFsdWU6ICdXaG8gYXJlIG15IHRvcCAxMCBjdXN0b21lcnMgYnkgcmV2ZW51ZT8nIH0sXG4gIHsgbGFiZWw6ICdHcm93dGggcmF0ZScsIHZhbHVlOiBcIldoYXQncyBteSBNUlIgZ3Jvd3RoIHJhdGU/XCIgfSxcbl07XG5cbmludGVyZmFjZSBXZWxjb21lUHJvbXB0UHJvcHMge1xuICBvblNlbGVjdFByb21wdDogKHByb21wdDogc3RyaW5nKSA9PiB2b2lkO1xuICBpbnNpZ2h0cz86IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+O1xufVxuXG5jb25zdCBXZWxjb21lUHJvbXB0ID0gKHsgb25TZWxlY3RQcm9tcHQsIGluc2lnaHRzIH06IFdlbGNvbWVQcm9tcHRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nIH19PlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnaGVhZGluZycgfX0+V2VsY29tZSB0byBKYXZlbGluPC9JbmxpbmU+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICBBc2sgbWUgYW55dGhpbmcgYWJvdXQgeW91ciBTdHJpcGUgYnVzaW5lc3MuIEkgY2FuIGNhbGN1bGF0ZSBtZXRyaWNzLCBhbmFseXplIHRyZW5kcywgYW5kXG4gICAgICAgICAgc3VyZmFjZSBpbnNpZ2h0cyBmcm9tIHlvdXIgZGF0YS5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAge2luc2lnaHRzICYmIGluc2lnaHRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5SZWNlbnQgaW5zaWdodHM8L0lubGluZT5cbiAgICAgICAgICB7aW5zaWdodHMubWFwKChpbnNpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17aW5zaWdodC5pZH1cbiAgICAgICAgICAgICAgY3NzPXt7IHBhZGRpbmc6ICdzbWFsbCcsIGJhY2tncm91bmRDb2xvcjogJ2NvbnRhaW5lcicsIHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PntpbnNpZ2h0LmNvbnRlbnR9PC9JbmxpbmU+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+VHJ5IGFza2luZzwvSW5saW5lPlxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIHdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICB7R1VJREVEX1BST01QVFMubWFwKChwcm9tcHQpID0+IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtwcm9tcHQudmFsdWV9XG4gICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBvblNlbGVjdFByb21wdChwcm9tcHQudmFsdWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvbXB0LmxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2NhcHRpb24nLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgSmF2ZWxpbiBwcm92aWRlcyBpbmZvcm1hdGlvbmFsIGluc2lnaHRzIG9ubHksIG5vdCBmaW5hbmNpYWwgb3IgYnVzaW5lc3MgYWR2aWNlLiBBbHdheXMgdmVyaWZ5IGltcG9ydGFudCBkZWNpc2lvbnMgd2l0aCB5b3VyIG93biBhbmFseXNpcy5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVQcm9tcHQ7XG4iLCAiaW1wb3J0IHsgQm94LCBJbmxpbmUsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5cbmludGVyZmFjZSBDb252ZXJzYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbkxpc3RQcm9wcyB7XG4gIGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbltdO1xuICBhY3RpdmVDb252ZXJzYXRpb25JZDogc3RyaW5nIHwgbnVsbDtcbiAgb25TZWxlY3RDb252ZXJzYXRpb246IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb252ZXJzYXRpb25MaXN0ID0gKHtcbiAgY29udmVyc2F0aW9ucyxcbiAgYWN0aXZlQ29udmVyc2F0aW9uSWQsXG4gIG9uU2VsZWN0Q29udmVyc2F0aW9uLFxuICBvbkNsb3NlLFxufTogQ29udmVyc2F0aW9uTGlzdFByb3BzKSA9PiB7XG4gIGlmIChjb252ZXJzYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnLCBhbGlnblg6ICdjZW50ZXInIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+Tm8gY29udmVyc2F0aW9ucyB5ZXQuPC9JbmxpbmU+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5TdGFydCBieSBhc2tpbmcgYSBxdWVzdGlvbiBiZWxvdy48L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcsIHBhZGRpbmc6ICdzbWFsbCcgfX0+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBkaXN0cmlidXRlOiAnc3BhY2UtYmV0d2VlbicsIGFsaWduWTogJ2NlbnRlcicsIHBhZGRpbmc6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PkNvbnZlcnNhdGlvbnM8L0lubGluZT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgb25QcmVzcz17b25DbG9zZX0+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIHtjb252ZXJzYXRpb25zLm1hcCgoY29udikgPT4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAga2V5PXtjb252LmlkfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcGFkZGluZzogJ3NtYWxsJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29udi5pZCA9PT0gYWN0aXZlQ29udmVyc2F0aW9uSWQgPyAnY29udGFpbmVyJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0YWNrOiAneScsXG4gICAgICAgICAgICBnYXA6ICd4c21hbGwnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiBvblNlbGVjdENvbnZlcnNhdGlvbihjb252LmlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCB3aWR0aDogJ2ZpbGwnIH19PlxuICAgICAgICAgICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiBjb252LmlkID09PSBhY3RpdmVDb252ZXJzYXRpb25JZCA/ICdzZW1pYm9sZCcgOiAncmVndWxhcicgfX0+XG4gICAgICAgICAgICAgICAge2NvbnYudGl0bGUgfHwgJ1VudGl0bGVkIGNvbnZlcnNhdGlvbid9XG4gICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnY2FwdGlvbicsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoY29udi51cGRhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uTGlzdDtcbiIsICJpbXBvcnQgeyBTZXR0aW5nc1ZpZXcsIEJveCwgSW5saW5lIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuXG5jb25zdCBBcHBTZXR0aW5nc1ZpZXcgPSAoeyB1c2VyQ29udGV4dDogX3VzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZXR0aW5nc1ZpZXc+XG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPElubGluZT5KYXZlbGluIHNldHRpbmdzIGNvbWluZyBzb29uLjwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZXR0aW5nc1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBTZXR0aW5nc1ZpZXc7XG4iLCAiaW1wb3J0IHtcbiAgQ29udGV4dFZpZXcsXG4gIEJveCxcbiAgU3Bpbm5lcixcbiAgSW5saW5lLFxuICBCYW5uZXIsXG4gIEJ1dHRvbixcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5cbnR5cGUgT25ib2FyZGluZ1N0YXRlID0gJ3Byb2Nlc3NpbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcblxuY29uc3QgT25ib2FyZGluZ1ZpZXcgPSAoeyB1c2VyQ29udGV4dDogX3VzZXJDb250ZXh0LCBvYXV0aENvbnRleHQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8T25ib2FyZGluZ1N0YXRlPigncHJvY2Vzc2luZycpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgaGFuZGxlT0F1dGggPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIE9BdXRoIGVycm9yXG4gICAgaWYgKG9hdXRoQ29udGV4dD8uZXJyb3IpIHtcbiAgICAgIHNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKGBBdXRob3JpemF0aW9uIGZhaWxlZDogJHtvYXV0aENvbnRleHQuZXJyb3J9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIE9BdXRoIGNvZGVcbiAgICBpZiAoIW9hdXRoQ29udGV4dD8uY29kZSkge1xuICAgICAgc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ05vIGF1dGhvcml6YXRpb24gY29kZSByZWNlaXZlZC4gUGxlYXNlIHRyeSBpbnN0YWxsaW5nIGFnYWluLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBFeGNoYW5nZSBjb2RlIGZvciB0b2tlbnMgdmlhIEVkZ2UgRnVuY3Rpb25cbiAgICAgIGF3YWl0IGFwaUNsaWVudCgnL2F1dGgtY2FsbGJhY2snLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgY29kZTogb2F1dGhDb250ZXh0LmNvZGUsXG4gICAgICAgICAgc3RhdGU6IG9hdXRoQ29udGV4dC5zdGF0ZSB8fCAnJyxcbiAgICAgICAgICB2ZXJpZmllcjogb2F1dGhDb250ZXh0LnZlcmlmaWVyIHx8ICcnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFRyaWdnZXIgaW5pdGlhbCBkYXRhIHN5bmNcbiAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtdHJpZ2dlcicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldFN0YXRlKCdzdWNjZXNzJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnRmFpbGVkIHRvIGNvbXBsZXRlIHNldHVwLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH1cbiAgfSwgW29hdXRoQ29udGV4dF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlT0F1dGgoKTtcbiAgfSwgW2hhbmRsZU9BdXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJXZWxjb21lIHRvIEphdmVsaW5cIj5cbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nLCBhbGlnblg6ICdjZW50ZXInIH19PlxuICAgICAgICB7c3RhdGUgPT09ICdwcm9jZXNzaW5nJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICA8SW5saW5lPlNldHRpbmcgdXAgSmF2ZWxpbi4uLjwvSW5saW5lPlxuICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBDb25uZWN0aW5nIHRvIHlvdXIgU3RyaXBlIGFjY291bnQgYW5kIHN5bmNpbmcgeW91ciBkYXRhLlxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTZXR1cCBjb21wbGV0ZSFcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkphdmVsaW4gaXMgcmVhZHkuIFlvdXIgZGF0YSBpcyBzeW5jaW5nIGluIHRoZSBiYWNrZ3JvdW5kIFx1MjAxNCB5b3UgY2FuIHN0YXJ0IGFza2luZyBxdWVzdGlvbnMgcmlnaHQgYXdheS5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgT3BlbiB0aGUgSmF2ZWxpbiBkcmF3ZXIgZnJvbSBhbnkgcGFnZSBpbiB5b3VyIFN0cmlwZSBEYXNoYm9hcmQgdG8gZ2V0IHN0YXJ0ZWQuXG4gICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3RhdGUgPT09ICdlcnJvcicgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJjcml0aWNhbFwiIHRpdGxlPVwiU2V0dXAgZmFpbGVkXCIgZGVzY3JpcHRpb249e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXtoYW5kbGVPQXV0aH0+XG4gICAgICAgICAgICAgIFJldHJ5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbmJv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QWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsOEJBQThCO0FBQUEsSUFDOUIsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsTUFDZCwyQkFBMkI7QUFBQSxRQUN6QixlQUFlO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7IiwKICAibmFtZXMiOiBbIl9hIiwgImZldGNoIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgInJlcXVpcmVfc2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3VpIiwgImltcG9ydF91aSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJfYSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=
