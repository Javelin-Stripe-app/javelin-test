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
  var _signatureContext = null;
  function initApiClient(userId, accountId) {
    _signatureContext = { userId, accountId };
  }
  function apiClient(_0) {
    return __async(this, arguments, function* (path, options = {}) {
      if (!_signatureContext) {
        throw new Error("apiClient not initialized \u2014 call initApiClient first");
      }
      let signature = "";
      try {
        signature = yield (0, import_signature.default)();
      } catch (e) {
        console.warn("fetchStripeSignature failed \u2014 sending unsigned request");
      }
      const method = options.method || "POST";
      const bodyPayload = __spreadValues({
        user_id: _signatureContext.userId,
        account_id: _signatureContext.accountId
      }, options.body && typeof options.body === "object" ? options.body : {});
      const response = yield fetch(`${SUPABASE_FUNCTIONS_URL}${path}`, {
        method,
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, signature ? { "stripe-signature": signature } : {}),
        body: JSON.stringify(bodyPayload)
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
  var ChatView = ({ userContext, environment: _environment }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
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
      var _a3;
      try {
        const response = yield apiClient("/chat-conversations");
        const convos = ((_a3 = response.data) == null ? void 0 : _a3.conversations) || [];
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
      var _a3;
      try {
        const response = yield apiClient(
          "/insights-welcome"
        );
        setWelcomeInsights(((_a3 = response.data) == null ? void 0 : _a3.insights) || []);
      } catch (e) {
      }
    });
    const loadConversation = (conversationId) => __async(void 0, null, function* () {
      var _a3;
      try {
        const response = yield apiClient(`/chat-conversation-detail?conversationId=${conversationId}`);
        const msgs = (((_a3 = response.data) == null ? void 0 : _a3.messages) || []).map((m) => {
          var _a4, _b;
          return {
            id: m.id,
            role: m.role,
            content: m.content,
            freshness: (_a4 = m.metadata) == null ? void 0 : _a4.freshness,
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
        var _a3, _b, _c, _d, _e;
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
            id: ((_a3 = response.data) == null ? void 0 : _a3.message.id) || `msg-${Date.now()}`,
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
  var OnboardingView = ({ userContext, oauthContext }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
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
  var BUILD_TIME = "2026-02-13 07:14:17.144806 -0300 -03 m=+13.024168243";
  var manifest_default = {
    "allowed_redirect_uris": [
      "https://dashboard.stripe.com/test/apps-oauth/com.javelin.analytics",
      "https://dashboard.stripe.com/apps-oauth/com.javelin.analytics"
    ],
    "connect_permissions": null,
    "distribution_type": "private",
    "icon": "./icon.png",
    "id": "com.javelin.analytics",
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
    "version": "0.0.4"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvX2VuZHBvaW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoVmlhRnJhbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFIb3N0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9DaGF0Vmlldy50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdFRocmVhZC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJ1YmJsZS50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvSW5zaWdodENhcmQudHN4IiwgIi4uL3NyYy9saWIvYXBpLWNsaWVudC50cyIsICIuLi9zcmMvY29tcG9uZW50cy9UaGlua2luZ0luZGljYXRvci50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2xhcmlmaWNhdGlvblByb21wdC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdElucHV0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9XZWxjb21lUHJvbXB0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeCIsICIuLi9zcmMvdmlld3MvU2V0dGluZ3NWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU0RLX1ZFUlNJT04gPSB2b2lkIDA7XG5leHBvcnRzLlNES19WRVJTSU9OID0gJzkuMS4wJztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGVIZWFkZXJDZWxsID0gZXhwb3J0cy5UYWJsZUhlYWQgPSBleHBvcnRzLlRhYmxlRm9vdGVyID0gZXhwb3J0cy5UYWJsZUNlbGwgPSBleHBvcnRzLlRhYmxlQm9keSA9IGV4cG9ydHMuVGFiID0gZXhwb3J0cy5UYWJQYW5lbHMgPSBleHBvcnRzLlRhYlBhbmVsID0gZXhwb3J0cy5UYWJMaXN0ID0gZXhwb3J0cy5Td2l0Y2ggPSBleHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuU3BhcmtsaW5lID0gZXhwb3J0cy5TaWduSW5WaWV3ID0gZXhwb3J0cy5TZXR0aW5nc1ZpZXcgPSBleHBvcnRzLlNlbGVjdCA9IGV4cG9ydHMuUmFkaW8gPSBleHBvcnRzLlByb3BlcnR5TGlzdCA9IGV4cG9ydHMuUHJvcGVydHlMaXN0SXRlbSA9IGV4cG9ydHMuUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGV4cG9ydHMuT25ib2FyZGluZ1ZpZXcgPSBleHBvcnRzLk1lbnUgPSBleHBvcnRzLk1lbnVJdGVtID0gZXhwb3J0cy5NZW51R3JvdXAgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLkxpc3RJdGVtID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5MaW5lQ2hhcnQgPSBleHBvcnRzLklubGluZSA9IGV4cG9ydHMuSW1nID0gZXhwb3J0cy5JY29uID0gZXhwb3J0cy5Gb3JtRmllbGRHcm91cCA9IGV4cG9ydHMuRm9jdXNWaWV3ID0gZXhwb3J0cy5EaXZpZGVyID0gZXhwb3J0cy5EZXRhaWxQYWdlVGFibGUgPSBleHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBleHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBleHBvcnRzLkRhdGVGaWVsZCA9IGV4cG9ydHMuQ29udGV4dFZpZXcgPSBleHBvcnRzLkNoaXAgPSBleHBvcnRzLkNoaXBMaXN0ID0gZXhwb3J0cy5DaGVja2JveCA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5CdXR0b25Hcm91cCA9IGV4cG9ydHMuQm94ID0gZXhwb3J0cy5CYXJDaGFydCA9IGV4cG9ydHMuQmFubmVyID0gZXhwb3J0cy5CYWRnZSA9IGV4cG9ydHMuQWNjb3JkaW9uID0gZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gdm9pZCAwO1xuZXhwb3J0cy5Ub29sdGlwID0gZXhwb3J0cy5UZXh0RmllbGQgPSBleHBvcnRzLlRleHRBcmVhID0gZXhwb3J0cy5UYXNrTGlzdCA9IGV4cG9ydHMuVGFza0xpc3RJdGVtID0gZXhwb3J0cy5UYWJzID0gZXhwb3J0cy5UYWJsZVJvdyA9IGV4cG9ydHMuVGFibGUgPSB2b2lkIDA7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJAcmVtb3RlLXVpL3JlYWN0XCIpO1xuY29uc3QgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL3ZlcnNpb25cIik7XG5jb25zdCB3aXRoU2RrUHJvcHMgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgV2l0aFNka1Byb3BzID0gKHByb3BzKSA9PiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShDb21wb25lbnQsIHsgLi4ucHJvcHMsIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSwgc2RrVmVyc2lvbjogdmVyc2lvbl8xLlNES19WRVJTSU9OLCBzY2hlbWFWZXJzaW9uOiBcInY5XCIgfSkpO1xuICAgIFdpdGhTZGtQcm9wcy53cmFwcGVkQ29tcG9uZW50TmFtZSA9IHdyYXBwZWRDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBXaXRoU2RrUHJvcHM7XG59O1xuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGZyYWdtZW50UHJvcHMsIHdyYXBXaXRoU2RrUHJvcHMpID0+IHtcbiAgICBjb25zdCByZW1vdGVDb21wb25lbnQgPSAoMCwgcmVhY3RfMS5jcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCkobmFtZSwge1xuICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgIH0pO1xuICAgIGlmICghd3JhcFdpdGhTZGtQcm9wcykge1xuICAgICAgICByZXR1cm4gcmVtb3RlQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFNka1Byb3BzKHJlbW90ZUNvbXBvbmVudCk7XG59O1xuZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb25JdGVtJywgWyd0aXRsZScsICdhY3Rpb25zJywgJ21lZGlhJywgJ3N1YnRpdGxlJ10sIHRydWUpO1xuZXhwb3J0cy5BY2NvcmRpb24gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFkZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0JhZGdlJywgW10sIHRydWUpO1xuZXhwb3J0cy5CYW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ0Jhbm5lcicsIFsnYWN0aW9ucycsICdkZXNjcmlwdGlvbicsICd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQmFyQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0JhckNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5Cb3ggPSBkZWZpbmVDb21wb25lbnQoJ0JveCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbkdyb3VwJywgWydtZW51VHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoZWNrYm94ID0gZGVmaW5lQ29tcG9uZW50KCdDaGVja2JveCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ2hpcCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ29udGV4dFZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0NvbnRleHRWaWV3JywgWydhY3Rpb25zJywgJ2Jhbm5lcicsICdmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0cy5EYXRlRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VNb2R1bGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZVRhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5EaXZpZGVyID0gZGVmaW5lQ29tcG9uZW50KCdEaXZpZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Gb2N1c1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0ZvY3VzVmlldycsIFsnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0Zvcm1GaWVsZEdyb3VwJywgW10sIHRydWUpO1xuZXhwb3J0cy5JY29uID0gZGVmaW5lQ29tcG9uZW50KCdJY29uJywgW10sIHRydWUpO1xuZXhwb3J0cy5JbWcgPSBkZWZpbmVDb21wb25lbnQoJ0ltZycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSW5saW5lID0gZGVmaW5lQ29tcG9uZW50KCdJbmxpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkxpbmVDaGFydCA9IGRlZmluZUNvbXBvbmVudCgnTGluZUNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5MaW5rID0gZGVmaW5lQ29tcG9uZW50KCdMaW5rJywgW10sIHRydWUpO1xuZXhwb3J0cy5MaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTGlzdEl0ZW0nLCBbJ2ljb24nLCAnaW1hZ2UnLCAnc2Vjb25kYXJ5VGl0bGUnLCAndGl0bGUnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnRzLkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnVHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnTWVudUdyb3VwJywgWyd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuTWVudUl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ01lbnVJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0cy5NZW51ID0gZGVmaW5lQ29tcG9uZW50KCdNZW51JywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuZXhwb3J0cy5PbmJvYXJkaW5nVmlldyA9IGRlZmluZUNvbXBvbmVudCgnT25ib2FyZGluZ1ZpZXcnLCBbJ2Vycm9yJ10sIHRydWUpO1xuZXhwb3J0cy5QbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdQbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3JywgW10sIHRydWUpO1xuZXhwb3J0cy5Qcm9wZXJ0eUxpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3RJdGVtJywgWydsYWJlbCcsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydHMuUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlJhZGlvID0gZGVmaW5lQ29tcG9uZW50KCdSYWRpbycsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlNlbGVjdCA9IGRlZmluZUNvbXBvbmVudCgnU2VsZWN0JywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTZXR0aW5nc1ZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNpZ25JblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NpZ25JblZpZXcnLCBbJ2Rlc2NyaXB0aW9uQWN0aW9uQ29udGVudHMnLCAnZm9vdGVyQ29udGVudCddLCB0cnVlKTtcbmV4cG9ydHMuU3BhcmtsaW5lID0gZGVmaW5lQ29tcG9uZW50KCdTcGFya2xpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNwaW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ1NwaW5uZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGRlZmluZUNvbXBvbmVudCgnU3RyaXBlRmlsZVVwbG9hZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Td2l0Y2ggPSBkZWZpbmVDb21wb25lbnQoJ1N3aXRjaCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1RhYkxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYlBhbmVsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFiUGFuZWxzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbHMnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYiA9IGRlZmluZUNvbXBvbmVudCgnVGFiJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUJvZHkgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQm9keScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlRm9vdGVyID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUZvb3RlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVIZWFkID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWQnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkZXJDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlUm93ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZVJvdycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFicyA9IGRlZmluZUNvbXBvbmVudCgnVGFicycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFza0xpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdEl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhc2tMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEFyZWEgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRBcmVhJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0RmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5Ub29sdGlwID0gZGVmaW5lQ29tcG9uZW50KCdUb29sdGlwJywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuIiwgIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUHJpdmF0ZSEgVGhpcyBhbGxvd3MgdGhlIHNoYXJlZCBlbmRwb2ludCB0byBiZSBpbnRpYWxpemVkXG4gKiBzbyB0aGF0IHRoZSBTREsgY2FuIGNvbW11bmljYXRlIHdpdGggdGhlIERhc2hib2FyZC5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRIb3N0RW5kcG9pbnQgPSB2b2lkIDA7XG5jb25zdCBpbnZhcmlhbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW52YXJpYW50XCIpKTtcbmNvbnN0IGdldEhvc3RFbmRwb2ludCA9ICgpID0+IHtcbiAgICAvLyBUaGlzIGlzIGVuZHBvaW50IGlzIGNyZWF0ZWQgZnJvbSB0aGUgTWVzc2FnZVBvcnQgdHJhbnNmZXJyZWQgZnJvbSB0aGUgaG9zdCBlbnZcbiAgICAvLyBhcyBhIHBhcnQgb2YgdGhlIGBpbml0X2V4dGVuc2lvbmAgbWVzc2FnZS5cbiAgICBjb25zdCBob3N0RW5kcG9pbnQgPSBnbG9iYWxUaGlzLl9fU3RyaXBlRXh0RXhwb3J0cz8uZW5kcG9pbnQ7XG4gICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKGhvc3RFbmRwb2ludCwgJ2hvc3RFbmRwb2ludCBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQnKTtcbiAgICByZXR1cm4gaG9zdEVuZHBvaW50O1xufTtcbmV4cG9ydHMuZ2V0SG9zdEVuZHBvaW50ID0gZ2V0SG9zdEVuZHBvaW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuLi9fZW5kcG9pbnRcIik7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpXG4gICAgLmNhbGwuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KClcbiAgICAudGhlbigoc3VwcG9ydGVkKSA9PiBzdXBwb3J0ZWQpXG4gICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbmV4cG9ydHMuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaEFwcEVtYmVkZGVkS2V5ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hBcHBFbWJlZGRlZEtleSgpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZldGNoIGFwcCBlbWJlZGRlZCBrZXknKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaUtleTtcbn07XG5leHBvcnRzLmZldGNoQXBwRW1iZWRkZWRLZXkgPSBmZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gdm9pZCAwO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleV8xID0gcmVxdWlyZShcIi4vZmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWUgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgZmV0Y2hBcHBFbWJlZGRlZEtleV8xLmZldGNoQXBwRW1iZWRkZWRLZXkpKCk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgc2VyaWFsaXphYmxlUmVzcG9uc2UgPSB7XG4gICAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyYXlCdWZmZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgb2s6IHJlc3BvbnNlLm9rLFxuICAgICAgICByZWRpcmVjdGVkOiByZXNwb25zZS5yZWRpcmVjdGVkLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgdXJsOiByZXNwb25zZS51cmwsXG4gICAgfTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXphYmxlUmVzcG9uc2U7XG59O1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gZmV0Y2hWaWFGcmFtZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hWaWFIb3N0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hWaWFIb3N0ID0gYXN5bmMgKGVuY29kZWRVcmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5jb2RlZFVybCk7XG4gICAgcmV0dXJuICgwLCBfZW5kcG9pbnRfMS5nZXRIb3N0RW5kcG9pbnQpKCkuY2FsbC5zdHJpcGVBcGlGZXRjaCh1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLmZldGNoVmlhSG9zdCA9IGZldGNoVmlhSG9zdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMSA9IHJlcXVpcmUoXCIuL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWVfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhRnJhbWVcIik7XG5jb25zdCBmZXRjaFZpYUhvc3RfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhSG9zdFwiKTtcbmxldCBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gbnVsbDtcbmNvbnN0IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCkge1xuICAgICAgICBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gKGF3YWl0ICgwLCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMS5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkpKCkpXG4gICAgICAgICAgICA/IGZldGNoVmlhRnJhbWVfMS5mZXRjaFZpYUZyYW1lXG4gICAgICAgICAgICA6IGZldGNoVmlhSG9zdF8xLmZldGNoVmlhSG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2g7XG59O1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHZvaWQgMDtcbnZhciBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaDsgfSB9KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHN0cmlwZUFwaUZldGNoID0gYXN5bmMgKHBhdGgsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcmVmZXJyZWRGZXRjaE1ldGhvZCA9IGF3YWl0ICgwLCBhcGlfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCkoKTtcbiAgICByZXR1cm4gcHJlZmVycmVkRmV0Y2hNZXRob2QocGF0aCwgb3B0aW9ucyk7XG59O1xuZXhwb3J0cy5zdHJpcGVBcGlGZXRjaCA9IHN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGV4cG9ydHMuQVVUSE9SSVpBVElPTl9IRUFERVIgPSBleHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBleHBvcnRzLlNUUklQRV9BUElfS0VZID0gZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IHZvaWQgMDtcbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBIdHRwQ2xpZW50IHRoYXQgY2FuIGJlIHBsdWdnZWQgaW50byBzdHJpcGUtbm9kZVxuICogdGhhdCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIHVzZSBzdHJpcGUtbm9kZSBpbiBleHRlbnNpb25zIGlmIHRoZSBEYXNoYm9hcmRcbiAqIHByb3ZpZGVzIGEgYHN0cmlwZUFwaUZldGNoYCBmdW5jdGlvbiB0aGF0IHdpbGwgcmVsYXkgQVBJIGNhbGxzIHRocm91Z2ggdGhlXG4gKiBEYXNoYm9hcmQgYW5kIHBpZ2d5IGJhY2sgb24gdGhlIHVzZXIncyBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqL1xuY29uc3QgaW52YXJpYW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5jb25zdCBhcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vYXBpRmV0Y2hcIik7XG5jb25zdCBtYXRjaGVzU3RyaXBlS2V5ID0gL1twc11rXyh0ZXN0fGxpdmUpX1tBLVphLXowLTldKy87XG5jbGFzcyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwKSB7XG4gICAgICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICAgIH1cbiAgICBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5oZWFkZXJzO1xuICAgIH1cbiAgICBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5zdGF0dXM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICB0b1N0cmVhbSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGhhdmUgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIFN0cmlwZSBIVFRQIGNsaWVudCcpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgeyBqc29uIH0gPSB0aGlzLl9yZXNwO1xuICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdSZXNwb25zZSBib2R5IHVuZGVmaW5lZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBTdHJpcGVBcHBzSHR0cENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2ggPSBmZXRjaDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBnZXRDbGllbnROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3N0cmlwZS11aS1leHRlbnNpb24nO1xuICAgIH1cbiAgICBhc3luYyBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgX3RpbWVvdXQpIHtcbiAgICAgICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKHByb3RvY29sID09PSAnaHR0cHMnLCAnTXVzdCB1c2UgaHR0cHMgY29ubmVjdGlvbnMgaW4gVUkgZXh0ZW5zaW9ucycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdERhdGEpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gcmVxdWVzdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICAgICAgaWYgKGF1dGhIZWFkZXIgJiYgbWF0Y2hlc1N0cmlwZUtleS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgYWN0dWFsIHN0cmlwZSBrZXlzIHdoZW4gdXNpbmcgdGhlIFN0cmlwZSBKUyBBUEkgY2xpZW50IHdpdGggVUkgZXh0ZXNpb25zLlxcblxcbiBJbnN0ZWFkLCB1c2UgYFNUUklQRV9BUElfS0VZYCBmcm9tIGBAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnRgIGFzIGEgcGxhY2Vob2xkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YCk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9mZXRjaCh1cmwudG9TdHJpbmcoKSwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIHRpbWVvdXRzLlxuICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUFwcHNIdHRwUmVzcG9uc2UocmVzcCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IFN0cmlwZUFwcHNIdHRwQ2xpZW50O1xuLy8gRE8gTk9UIGNoYW5nZSB0aGlzIHN0cmluZyB3aXRob3V0IGEgZGVwcmVjYXRpb24gcGxhbi4gVGhlIHJ1bnRpbWUgY2hlY2tzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoaXNcbi8vIGV4YWN0IHN0cmluZyBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuLy8gU2VlOiBtYW5hZ2UvZnJvbnRlbmQvc3JjL3RhaWxvci9leHRlbnNpb25zL2hvc3QvYXBpX2ZldGNoLmpzXG5leHBvcnRzLlNUUklQRV9BUElfS0VZID0gJ0RPX05PVF9QQVNTX0FfUkVBTF9BUElfS0VZJztcbmNvbnN0IGNyZWF0ZUh0dHBDbGllbnQgPSAoKSA9PiBuZXcgU3RyaXBlQXBwc0h0dHBDbGllbnQoYXBpRmV0Y2hfMS5zdHJpcGVBcGlGZXRjaCk7XG5leHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBjcmVhdGVIdHRwQ2xpZW50O1xuZXhwb3J0cy5BVVRIT1JJWkFUSU9OX0hFQURFUiA9ICdBdXRob3JpemF0aW9uJztcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGBCZWFyZXIgJHtleHBvcnRzLlNUUklQRV9BUElfS0VZfWA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSB2b2lkIDA7XG5jb25zdCBodHRwQ2xpZW50XzEgPSByZXF1aXJlKFwiLi4vaHR0cENsaWVudFwiKTtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoeyBob3N0LCBwb3J0IH0pID0+IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly8ke2hvc3R9OiR7cG9ydH0vdjEvYXBwcy9hcHBfZW1iZWRkZWRfYmFja2VuZF9zaWduYXR1cmVgKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgncGF5bG9hZCcsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGF5bG9hZCB9KSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2luY2x1ZGVfb25seVtdJywgJ3NpZ25hdHVyZScpO1xuICAgIGNvbnN0IGNsaWVudCA9ICgwLCBodHRwQ2xpZW50XzEuY3JlYXRlSHR0cENsaWVudCkoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNsaWVudC5tYWtlUmVxdWVzdChob3N0LCBwb3J0LCB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCAnR0VUJywge30sIG51bGwsICdodHRwcycpO1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAudGhlbigocikgPT4gci50b0pTT04oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc2lnbmF0dXJlKTtcbn07XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRDb25uZWN0aW9uU2V0dGluZ3MgPSBleHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3MgPSB7XG4gICAgaG9zdDogJ2FwaS5zdHJpcGUuY29tJyxcbiAgICBwb3J0OiA0NDMsXG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0gZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncztcbmNvbnN0IHNldENvbm5lY3Rpb25TZXR0aW5ncyA9IChzZXR0aW5ncykgPT4ge1xuICAgIGV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgICAgICAuLi5kZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzLFxuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICB9O1xufTtcbmV4cG9ydHMuc2V0Q29ubmVjdGlvblNldHRpbmdzID0gc2V0Q29ubmVjdGlvblNldHRpbmdzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFN0cmlwZVNpZ25hdHVyZSA9IHZvaWQgMDtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHlfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZS9jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5XCIpO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEgPSByZXF1aXJlKFwiLi9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XCIpO1xuY29uc3QgY29ubmVjdGlvblNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzXCIpO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGFzeW5jIChhZGRpdGlvbmFsUGF5bG9hZCkgPT4ge1xuICAgIGlmIChhd2FpdCAoMCwgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KSgpKSB7XG4gICAgICAgIGNvbnN0IGZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoMCwgY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseV8xLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkpKGNvbm5lY3Rpb25TZXR0aW5nc18xLmNvbm5lY3Rpb25TZXR0aW5ncyk7XG4gICAgICAgIHJldHVybiBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hTdHJpcGVTaWduYXR1cmUoYWRkaXRpb25hbFBheWxvYWQpO1xuICAgIH1cbn07XG5leHBvcnRzLmZldGNoU3RyaXBlU2lnbmF0dXJlID0gZmV0Y2hTdHJpcGVTaWduYXR1cmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGZpbGUgbW92ZWQgdG8gdXRpbHM7IHJlLWV4cG9ydGVkIHRvIG5vdCBicmVhayBpbXBvcnRzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NpZ25hdHVyZVwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpZ25hdHVyZV8xLmZldGNoU3RyaXBlU2lnbmF0dXJlO1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgQ2hhdFZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL0NoYXRWaWV3JztpbXBvcnQgU2V0dGluZ3NWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9TZXR0aW5nc1ZpZXcnO2ltcG9ydCBPbmJvYXJkaW5nVmlldyBmcm9tICcuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcnO1xuXG5leHBvcnQgKiBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdmVyc2lvbic7XG5leHBvcnQgY29uc3QgQlVJTERfVElNRSA9ICcyMDI2LTAyLTEzIDA3OjE0OjE3LjE0NDgwNiAtMDMwMCAtMDMgbT0rMTMuMDI0MTY4MjQzJztcblxuZXhwb3J0IHsgXG4gIENoYXRWaWV3LFx0XG5cbiAgU2V0dGluZ3NWaWV3LFx0XG5cbiAgT25ib2FyZGluZ1ZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhbGxvd2VkX3JlZGlyZWN0X3VyaXNcIjogW1xuICAgIFwiaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS90ZXN0L2FwcHMtb2F1dGgvY29tLmphdmVsaW4uYW5hbHl0aWNzXCIsXG4gICAgXCJodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tL2FwcHMtb2F1dGgvY29tLmphdmVsaW4uYW5hbHl0aWNzXCJcbiAgXSxcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwiZGlzdHJpYnV0aW9uX3R5cGVcIjogXCJwcml2YXRlXCIsXG4gIFwiaWNvblwiOiBcIi4vaWNvbi5wbmdcIixcbiAgXCJpZFwiOiBcImNvbS5qYXZlbGluLmFuYWx5dGljc1wiLFxuICBcIm5hbWVcIjogXCJKYXZlbGluXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImN1c3RvbWVyX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgY3VzdG9tZXIgZGF0YSB0byBjYWxjdWxhdGUgYnVzaW5lc3MgbWV0cmljcyBhbmQgYW5zd2VyIHF1ZXN0aW9ucyBhYm91dCB5b3VyIGN1c3RvbWVyIGJhc2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiaW52b2ljZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGludm9pY2UgZGF0YSB0byBjYWxjdWxhdGUgcmV2ZW51ZSwgTVJSLCBhbmQgb3RoZXIgYmlsbGluZyBtZXRyaWNzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNoYXJnZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGNoYXJnZSBkYXRhIHRvIGFuYWx5emUgcGF5bWVudCB2b2x1bWUgYW5kIHJldmVudWUgdHJlbmRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInN1YnNjcmlwdGlvbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIHN1YnNjcmlwdGlvbiBkYXRhIHRvIGNhbGN1bGF0ZSBNUlIsIGNodXJuIHJhdGUsIGFuZCBzdWJzY3JpcHRpb24gYW5hbHl0aWNzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInByb2R1Y3RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwcm9kdWN0IGRhdGEgdG8gYnJlYWsgZG93biByZXZlbnVlIGFuZCBtZXRyaWNzIGJ5IHByb2R1Y3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGxhbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIHByaWNlIGFuZCBwbGFuIGRhdGEgdG8gYW5hbHl6ZSBwbGFuLWxldmVsIHJldmVudWUgYW5kIHN1YnNjcmliZXIgY291bnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNlY3JldF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiU3RvcmUgYW5kIG1hbmFnZSBPQXV0aCB0b2tlbnMgc2VjdXJlbHkgdmlhIHRoZSBTZWNyZXQgU3RvcmUgQVBJXCJcbiAgICB9XG4gIF0sXG4gIFwic2FuZGJveF9pbnN0YWxsX2NvbXBhdGlibGVcIjogdHJ1ZSxcbiAgXCJzdHJpcGVfYXBpX2FjY2Vzc190eXBlXCI6IFwib2F1dGhcIixcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly90ZWN2eWNwbXpjeHhvcW10dHRqeS5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS9cIixcbiAgICAgICAgXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIkNvbm5lY3QgdG8gU3VwYWJhc2UgYmFja2VuZCBmb3IgZGF0YSBwcm9jZXNzaW5nIGFuZCBMTE0gcHJvdmlkZXIgZm9yIEFJLXBvd2VyZWQgYnVzaW5lc3MgaW50ZWxsaWdlbmNlXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkNoYXRWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiU2V0dGluZ3NWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzZXR0aW5nc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIk9uYm9hcmRpbmdWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJvbmJvYXJkaW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMC40XCJcbn07XG4iLCAiaW1wb3J0IHsgQ29udGV4dFZpZXcsIEJveCwgU3Bpbm5lciwgSW5saW5lLCBCYW5uZXIsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXRUaHJlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0VGhyZWFkJztcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SW5wdXQnO1xuaW1wb3J0IFdlbGNvbWVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lUHJvbXB0JztcbmltcG9ydCBDb252ZXJzYXRpb25MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdCc7XG5pbXBvcnQgeyBhcGlDbGllbnQsIGluaXRBcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgY2xhcmlmaWNhdGlvbj86IHtcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG50eXBlIFZpZXdTdGF0ZSA9ICdsb2FkaW5nJyB8ICdlbXB0eScgfCAnY2hhdCcgfCAnZXJyb3InO1xuXG5jb25zdCBDaGF0VmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudDogX2Vudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAvLyBJbml0aWFsaXplIEFQSSBjbGllbnQgd2l0aCBTdHJpcGUgY29udGV4dCBmb3Igc2lnbmF0dXJlIHZlcmlmaWNhdGlvblxuICBpZiAodXNlckNvbnRleHQ/LmlkICYmIHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xuICAgIGluaXRBcGlDbGllbnQodXNlckNvbnRleHQuaWQsIHVzZXJDb250ZXh0LmFjY291bnQuaWQpO1xuICB9XG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KCdsb2FkaW5nJyk7XG4gIGNvbnN0IFtjb252ZXJzYXRpb25zLCBzZXRDb252ZXJzYXRpb25zXSA9IHVzZVN0YXRlPENvbnZlcnNhdGlvbltdPihbXSk7XG4gIGNvbnN0IFthY3RpdmVDb252ZXJzYXRpb25JZCwgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtpc1RoaW5raW5nLCBzZXRJc1RoaW5raW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RoaW5raW5nU3RhcnRlZEF0LCBzZXRUaGlua2luZ1N0YXJ0ZWRBdF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt3ZWxjb21lSW5zaWdodHMsIHNldFdlbGNvbWVJbnNpZ2h0c10gPSB1c2VTdGF0ZTxBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pj4oW10pO1xuICBjb25zdCBbc2hvd0NvbnZlcnNhdGlvbkxpc3QsIHNldFNob3dDb252ZXJzYXRpb25MaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsb2FkQ29udmVyc2F0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8eyBjb252ZXJzYXRpb25zOiBDb252ZXJzYXRpb25bXSB9PignL2NoYXQtY29udmVyc2F0aW9ucycpO1xuICAgICAgY29uc3QgY29udm9zID0gcmVzcG9uc2UuZGF0YT8uY29udmVyc2F0aW9ucyB8fCBbXTtcbiAgICAgIHNldENvbnZlcnNhdGlvbnMoY29udm9zKTtcblxuICAgICAgaWYgKGNvbnZvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRmlyc3QgdGltZSB1c2VyIFx1MjAxNCBsb2FkIHdlbGNvbWUgaW5zaWdodHNcbiAgICAgICAgbG9hZFdlbGNvbWVJbnNpZ2h0cygpO1xuICAgICAgICBzZXRWaWV3U3RhdGUoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIHRoZSBtb3N0IHJlY2VudCBjb252ZXJzYXRpb25cbiAgICAgICAgYXdhaXQgbG9hZENvbnZlcnNhdGlvbihjb252b3NbMF0uaWQpO1xuICAgICAgICBzZXRWaWV3U3RhdGUoJ2NoYXQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIElmIGNvbnZlcnNhdGlvbnMgZmFpbCB0byBsb2FkLCBzaG93IGVtcHR5IHN0YXRlIChjb3VsZCBiZSBmaXJzdCB0aW1lKVxuICAgICAgc2V0Vmlld1N0YXRlKCdlbXB0eScpO1xuICAgICAgbG9hZFdlbGNvbWVJbnNpZ2h0cygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIExvYWQgY29udmVyc2F0aW9ucyBvbiBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRDb252ZXJzYXRpb25zKCk7XG4gIH0sIFtsb2FkQ29udmVyc2F0aW9uc10pO1xuXG4gIGNvbnN0IGxvYWRXZWxjb21lSW5zaWdodHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHsgaW5zaWdodHM6IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+IH0+KFxuICAgICAgICAnL2luc2lnaHRzLXdlbGNvbWUnLFxuICAgICAgKTtcbiAgICAgIHNldFdlbGNvbWVJbnNpZ2h0cyhyZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyB8fCBbXSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBOb24tY3JpdGljYWwgXHUyMDE0IGp1c3Qgc2hvdyBlbXB0eSB3ZWxjb21lXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRDb252ZXJzYXRpb24gPSBhc3luYyAoY29udmVyc2F0aW9uSWQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudDx7XG4gICAgICAgIGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uO1xuICAgICAgICBtZXNzYWdlczogQXJyYXk8e1xuICAgICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgICAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gICAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgIH0+O1xuICAgICAgfT4oYC9jaGF0LWNvbnZlcnNhdGlvbi1kZXRhaWw/Y29udmVyc2F0aW9uSWQ9JHtjb252ZXJzYXRpb25JZH1gKTtcblxuICAgICAgY29uc3QgbXNnczogTWVzc2FnZVtdID0gKHJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2VzIHx8IFtdKS5tYXAoKG0pID0+ICh7XG4gICAgICAgIGlkOiBtLmlkLFxuICAgICAgICByb2xlOiBtLnJvbGUsXG4gICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgZnJlc2huZXNzOiBtLm1ldGFkYXRhPy5mcmVzaG5lc3MgYXMgTWVzc2FnZVsnZnJlc2huZXNzJ10sXG4gICAgICAgIGluc2lnaHRzOiBtLm1ldGFkYXRhPy5pbnNpZ2h0cyBhcyBNZXNzYWdlWydpbnNpZ2h0cyddLFxuICAgICAgfSkpO1xuXG4gICAgICBzZXRNZXNzYWdlcyhtc2dzKTtcbiAgICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkKGNvbnZlcnNhdGlvbklkKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjb252ZXJzYXRpb24nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgLy8gQWRkIHVzZXIgbWVzc2FnZSB0byBVSSBpbW1lZGlhdGVseVxuICAgICAgY29uc3QgdGVtcFVzZXJNc2dJZCA9IGB0ZW1wLSR7RGF0ZS5ub3coKX1gO1xuICAgICAgY29uc3QgdXNlck1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgIGlkOiB0ZW1wVXNlck1zZ0lkLFxuICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9O1xuICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCB1c2VyTWVzc2FnZV0pO1xuICAgICAgc2V0Vmlld1N0YXRlKCdjaGF0Jyk7XG4gICAgICBzZXRJc1RoaW5raW5nKHRydWUpO1xuICAgICAgc2V0VGhpbmtpbmdTdGFydGVkQXQoRGF0ZS5ub3coKSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHtcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gICAgICAgICAgY29udmVyc2F0aW9uSWQ6IHN0cmluZztcbiAgICAgICAgfT4oJy9jaGF0LW1lc3NhZ2UnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IGFjdGl2ZUNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhc3Npc3RhbnRNZXNzYWdlOiBNZXNzYWdlID0ge1xuICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhPy5tZXNzYWdlLmlkIHx8IGBtc2ctJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgcm9sZTogJ2Fzc2lzdGFudCcsXG4gICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YT8ubWVzc2FnZS5jb250ZW50IHx8ICdTb3JyeSwgSSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZS4nLFxuICAgICAgICAgIGZyZXNobmVzczogcmVzcG9uc2UubWV0YSBhcyBNZXNzYWdlWydmcmVzaG5lc3MnXSxcbiAgICAgICAgICBpbnNpZ2h0czogcmVzcG9uc2UuZGF0YT8uaW5zaWdodHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIGNvbnZlcnNhdGlvbiBJRCBpZiBuZXcgY29udmVyc2F0aW9uIHdhcyBjcmVhdGVkXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5jb252ZXJzYXRpb25JZCAmJiAhYWN0aXZlQ29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICBzZXRBY3RpdmVDb252ZXJzYXRpb25JZChyZXNwb25zZS5kYXRhLmNvbnZlcnNhdGlvbklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgYXNzaXN0YW50TWVzc2FnZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICAgIGNvbnN0IGVycm9yT2JqID0gZXJyIGFzIHsgZXJyb3I/OiB7IGNvZGU/OiBzdHJpbmc7IG1lc3NhZ2U/OiBzdHJpbmcgfSB9O1xuICAgICAgICBjb25zdCBjb2RlID0gZXJyb3JPYmo/LmVycm9yPy5jb2RlO1xuXG4gICAgICAgIGlmIChjb2RlID09PSAnYXV0aF9yZWZyZXNoX2ZhaWxlZCcpIHtcbiAgICAgICAgICBzZXRFcnJvcignWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkLiBQbGVhc2UgcmUtYXV0aG9yaXplIEphdmVsaW4uJyk7XG4gICAgICAgICAgLy8gSW4gYSBmdWxsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdvdWxkIHN3aXRjaCB0byBTaWduSW5WaWV3XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2xsbV91bmF2YWlsYWJsZScpIHtcbiAgICAgICAgICBzZXRFcnJvcignQUkgc2VydmljZSBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2FpbiBpbiBhIG1vbWVudC4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzVGhpbmtpbmcoZmFsc2UpO1xuICAgICAgICBzZXRUaGlua2luZ1N0YXJ0ZWRBdCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2FjdGl2ZUNvbnZlcnNhdGlvbklkXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbGFyaWZpY2F0aW9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHNlbmRNZXNzYWdlKHZhbHVlKTtcbiAgICB9LFxuICAgIFtzZW5kTWVzc2FnZV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlTmV3Q29udmVyc2F0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkKG51bGwpO1xuICAgIHNldE1lc3NhZ2VzKFtdKTtcbiAgICBzZXRWaWV3U3RhdGUoJ2VtcHR5Jyk7XG4gICAgc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpO1xuICAgIGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENvbnZlcnNhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpO1xuICAgIGF3YWl0IGxvYWRDb252ZXJzYXRpb24oaWQpO1xuICAgIHNldFZpZXdTdGF0ZSgnY2hhdCcpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZGluZyBzdGF0ZVxuICBpZiAodmlld1N0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiSmF2ZWxpblwiPlxuICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5Mb2FkaW5nIEphdmVsaW4uLi48L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0Vmlld1xuICAgICAgdGl0bGU9XCJKYXZlbGluXCJcbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXsoKSA9PiBzZXRTaG93Q29udmVyc2F0aW9uTGlzdCgodikgPT4gIXYpfT5cbiAgICAgICAgICAgICAgSGlzdG9yeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXtoYW5kbGVOZXdDb252ZXJzYXRpb259PlxuICAgICAgICAgICAgTmV3IGNoYXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgaGVpZ2h0OiAnZmlsbCcgfX0+XG4gICAgICAgIHsvKiBFcnJvciBiYW5uZXIgKi99XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRXJyb3JcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Vycm9yfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBDb252ZXJzYXRpb24gbGlzdCBwYW5lbCAqL31cbiAgICAgICAge3Nob3dDb252ZXJzYXRpb25MaXN0ICYmIChcbiAgICAgICAgICA8Q29udmVyc2F0aW9uTGlzdFxuICAgICAgICAgICAgY29udmVyc2F0aW9ucz17Y29udmVyc2F0aW9uc31cbiAgICAgICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbklkPXthY3RpdmVDb252ZXJzYXRpb25JZH1cbiAgICAgICAgICAgIG9uU2VsZWN0Q29udmVyc2F0aW9uPXtoYW5kbGVTZWxlY3RDb252ZXJzYXRpb259XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFpbiBjb250ZW50IGFyZWEgKi99XG4gICAgICAgIHshc2hvd0NvbnZlcnNhdGlvbkxpc3QgJiYgPEJveCBjc3M9e3sgc3RhY2s6ICd5Jywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICB7dmlld1N0YXRlID09PSAnZW1wdHknICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxXZWxjb21lUHJvbXB0IG9uU2VsZWN0UHJvbXB0PXtzZW5kTWVzc2FnZX0gaW5zaWdodHM9e3dlbGNvbWVJbnNpZ2h0c30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENoYXRUaHJlYWRcbiAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICBpc1RoaW5raW5nPXtpc1RoaW5raW5nfVxuICAgICAgICAgICAgICB0aGlua2luZ1N0YXJ0ZWRBdD17dGhpbmtpbmdTdGFydGVkQXR9XG4gICAgICAgICAgICAgIG9uQ2xhcmlmaWNhdGlvblNlbGVjdD17aGFuZGxlQ2xhcmlmaWNhdGlvblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+fVxuXG4gICAgICAgIHsvKiBDaGF0IGlucHV0ICovfVxuICAgICAgICB7IXNob3dDb252ZXJzYXRpb25MaXN0ICYmIDxDaGF0SW5wdXQgb25TZW5kPXtzZW5kTWVzc2FnZX0gZGlzYWJsZWQ9e2lzVGhpbmtpbmd9IC8+fVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRWaWV3O1xuIiwgImltcG9ydCB7IEJveCB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgTWVzc2FnZUJ1YmJsZSBmcm9tICcuL01lc3NhZ2VCdWJibGUnO1xuaW1wb3J0IEluc2lnaHRDYXJkIGZyb20gJy4vSW5zaWdodENhcmQnO1xuaW1wb3J0IFRoaW5raW5nSW5kaWNhdG9yIGZyb20gJy4vVGhpbmtpbmdJbmRpY2F0b3InO1xuaW1wb3J0IENsYXJpZmljYXRpb25Qcm9tcHQgZnJvbSAnLi9DbGFyaWZpY2F0aW9uUHJvbXB0JztcblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBpZDogc3RyaW5nO1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmcmVzaG5lc3M/OiB7IHR5cGU6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xuICBpbnNpZ2h0cz86IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+O1xuICBjbGFyaWZpY2F0aW9uPzoge1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgb3B0aW9uczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+O1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQ2hhdFRocmVhZFByb3BzIHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbiAgaXNUaGlua2luZzogYm9vbGVhbjtcbiAgdGhpbmtpbmdTdGFydGVkQXQ/OiBudW1iZXI7XG4gIG9uQ2xhcmlmaWNhdGlvblNlbGVjdD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDaGF0VGhyZWFkID0gKHtcbiAgbWVzc2FnZXMsXG4gIGlzVGhpbmtpbmcsXG4gIHRoaW5raW5nU3RhcnRlZEF0LFxuICBvbkNsYXJpZmljYXRpb25TZWxlY3QsXG59OiBDaGF0VGhyZWFkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICA8Qm94IGtleT17bWVzc2FnZS5pZH0gY3NzPXt7IHN0YWNrOiAneScgfX0+XG4gICAgICAgICAgPE1lc3NhZ2VCdWJibGVcbiAgICAgICAgICAgIHJvbGU9e21lc3NhZ2Uucm9sZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgIGZyZXNobmVzcz17bWVzc2FnZS5mcmVzaG5lc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bWVzc2FnZS5pbnNpZ2h0cz8ubWFwKChpbnNpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8SW5zaWdodENhcmRcbiAgICAgICAgICAgICAga2V5PXtpbnNpZ2h0LmlkfVxuICAgICAgICAgICAgICBpbnNpZ2h0SWQ9e2luc2lnaHQuaWR9XG4gICAgICAgICAgICAgIG1lc3NhZ2VJZD17bWVzc2FnZS5pZH1cbiAgICAgICAgICAgICAgY29udGVudD17aW5zaWdodC5jb250ZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7bWVzc2FnZS5jbGFyaWZpY2F0aW9uICYmIG9uQ2xhcmlmaWNhdGlvblNlbGVjdCAmJiAoXG4gICAgICAgICAgICA8Q2xhcmlmaWNhdGlvblByb21wdFxuICAgICAgICAgICAgICBxdWVzdGlvbj17bWVzc2FnZS5jbGFyaWZpY2F0aW9uLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICBvcHRpb25zPXttZXNzYWdlLmNsYXJpZmljYXRpb24ub3B0aW9uc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uQ2xhcmlmaWNhdGlvblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICAgIHtpc1RoaW5raW5nICYmIHRoaW5raW5nU3RhcnRlZEF0ICYmIChcbiAgICAgICAgPFRoaW5raW5nSW5kaWNhdG9yIHN0YXJ0ZWRBdD17dGhpbmtpbmdTdGFydGVkQXR9IC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFRocmVhZDtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQmFkZ2UgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgTWVzc2FnZUJ1YmJsZVByb3BzIHtcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbn1cblxuY29uc3QgTWVzc2FnZUJ1YmJsZSA9ICh7IHJvbGUsIGNvbnRlbnQsIGZyZXNobmVzcyB9OiBNZXNzYWdlQnViYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgaXNVc2VyID0gcm9sZSA9PT0gJ3VzZXInO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY3NzPXt7XG4gICAgICAgIHBhZGRpbmc6ICdtZWRpdW0nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzVXNlciA/ICdjb250YWluZXInIDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFjazogJ3knLFxuICAgICAgICBnYXA6ICdzbWFsbCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAge2lzVXNlciA/ICdZb3UnIDogJ0phdmVsaW4nfVxuICAgICAgPC9JbmxpbmU+XG4gICAgICA8SW5saW5lPntjb250ZW50fTwvSW5saW5lPlxuICAgICAge2ZyZXNobmVzcyAmJiAhaXNVc2VyICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgICA8QmFkZ2UgdHlwZT17ZnJlc2huZXNzLnR5cGUgPT09ICdsaXZlJyA/ICdwb3NpdGl2ZScgOiAnaW5mbyd9PlxuICAgICAgICAgICAge2ZyZXNobmVzcy50eXBlID09PSAnbGl2ZSdcbiAgICAgICAgICAgICAgPyAnTGl2ZSBkYXRhJ1xuICAgICAgICAgICAgICA6IGBEYXRhIGFzIG9mICR7ZnJlc2huZXNzLnN5bmNlZEF0ID8gbmV3IERhdGUoZnJlc2huZXNzLnN5bmNlZEF0KS50b0xvY2FsZVN0cmluZygpIDogJ2NhY2hlJ31gfVxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCdWJibGU7XG4iLCAiaW1wb3J0IHsgQm94LCBCYW5uZXIsIEJ1dHRvbiwgSW5saW5lIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuXG5pbnRlcmZhY2UgSW5zaWdodENhcmRQcm9wcyB7XG4gIGluc2lnaHRJZDogc3RyaW5nO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBJbnNpZ2h0Q2FyZCA9ICh7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCBjb250ZW50IH06IEluc2lnaHRDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZlZWRiYWNrLCBzZXRGZWVkYmFja10gPSB1c2VTdGF0ZTwncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRmVlZGJhY2sgPSBhc3luYyAocmF0aW5nOiAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJykgPT4ge1xuICAgIGlmIChzdWJtaXR0aW5nIHx8IGZlZWRiYWNrKSByZXR1cm47XG4gICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpQ2xpZW50KCcvaW5zaWdodHMtZmVlZGJhY2snLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCByYXRpbmcgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0RmVlZGJhY2socmF0aW5nKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFNpbGVudGx5IGZhaWwgXHUyMDE0IGZlZWRiYWNrIGlzIG5vbi1jcml0aWNhbFxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICA8QmFubmVyIHR5cGU9XCJkZWZhdWx0XCIgdGl0bGU9XCJJbnNpZ2h0XCIgZGVzY3JpcHRpb249e2NvbnRlbnR9IC8+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPXtmZWVkYmFjayA9PT0gJ3Bvc2l0aXZlJyA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgZmVlZGJhY2sgIT09IG51bGx9XG4gICAgICAgICAgb25QcmVzcz17KCkgPT4gaGFuZGxlRmVlZGJhY2soJ3Bvc2l0aXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lPntmZWVkYmFjayA9PT0gJ3Bvc2l0aXZlJyA/ICdIZWxwZnVsJyA6ICdIZWxwZnVsPyd9PC9JbmxpbmU+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17ZmVlZGJhY2sgPT09ICduZWdhdGl2ZScgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IGZlZWRiYWNrICE9PSBudWxsfVxuICAgICAgICAgIG9uUHJlc3M9eygpID0+IGhhbmRsZUZlZWRiYWNrKCduZWdhdGl2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZT57ZmVlZGJhY2sgPT09ICduZWdhdGl2ZScgPyAnTm90IGhlbHBmdWwnIDogJ05vdCBoZWxwZnVsPyd9PC9JbmxpbmU+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0Q2FyZDtcbiIsICJpbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cbi8vIFN1cGFiYXNlIEVkZ2UgRnVuY3Rpb25zIGJhc2UgVVJMXG5jb25zdCBTVVBBQkFTRV9GVU5DVElPTlNfVVJMID1cbiAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Py5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgPyBwcm9jZXNzLmVudi5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgOiAnaHR0cHM6Ly90ZWN2eWNwbXpjeHhvcW10dHRqeS5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEnO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhPzogVDtcbiAgZXJyb3I/OiB7IGNvZGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyByZXF1ZXN0SWQ6IHN0cmluZyB9O1xuICBtZXRhPzogeyBmcmVzaG5lc3M6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xufVxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlQ29udGV4dCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBhY2NvdW50SWQ6IHN0cmluZztcbn1cblxubGV0IF9zaWduYXR1cmVDb250ZXh0OiBTaWduYXR1cmVDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgQVBJIGNsaWVudCB3aXRoIHRoZSB1c2VyJ3MgU3RyaXBlIGNvbnRleHQuXG4gKiBNdXN0IGJlIGNhbGxlZCBvbmNlIGZyb20gYSB2aWV3IHRoYXQgaGFzIEV4dGVuc2lvbkNvbnRleHRWYWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcGlDbGllbnQodXNlcklkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nKSB7XG4gIF9zaWduYXR1cmVDb250ZXh0ID0geyB1c2VySWQsIGFjY291bnRJZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpQ2xpZW50PFQ+KFxuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgbWV0aG9kPzogc3RyaW5nOyBib2R5PzogdW5rbm93biB9ID0ge30sXG4pOiBQcm9taXNlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gIGlmICghX3NpZ25hdHVyZUNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwaUNsaWVudCBub3QgaW5pdGlhbGl6ZWQgXHUyMDE0IGNhbGwgaW5pdEFwaUNsaWVudCBmaXJzdCcpO1xuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgU3RyaXBlIHNpZ25hdHVyZTsgZmFsbGJhY2sgZ3JhY2VmdWxseSBmb3IgbG9jYWwgZGV2XG4gIGxldCBzaWduYXR1cmUgPSAnJztcbiAgdHJ5IHtcbiAgICBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBmZXRjaFN0cmlwZVNpZ25hdHVyZSBtYXkgbm90IHdvcmsgaW4gbG9jYWwgcHJldmlldyBtb2RlXG4gICAgY29uc29sZS53YXJuKCdmZXRjaFN0cmlwZVNpZ25hdHVyZSBmYWlsZWQgXHUyMDE0IHNlbmRpbmcgdW5zaWduZWQgcmVxdWVzdCcpO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnO1xuXG4gIC8vIEFsd2F5cyBpbmNsdWRlIHVzZXJfaWQgYW5kIGFjY291bnRfaWQgaW4gdGhlIGJvZHkgZm9yIGF1dGhcbiAgY29uc3QgYm9keVBheWxvYWQgPSB7XG4gICAgdXNlcl9pZDogX3NpZ25hdHVyZUNvbnRleHQudXNlcklkLFxuICAgIGFjY291bnRfaWQ6IF9zaWduYXR1cmVDb250ZXh0LmFjY291bnRJZCxcbiAgICAuLi4ob3B0aW9ucy5ib2R5ICYmIHR5cGVvZiBvcHRpb25zLmJvZHkgPT09ICdvYmplY3QnID8gb3B0aW9ucy5ib2R5IDoge30pLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U1VQQUJBU0VfRlVOQ1RJT05TX1VSTH0ke3BhdGh9YCwge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKHNpZ25hdHVyZSA/IHsgJ3N0cmlwZS1zaWduYXR1cmUnOiBzaWduYXR1cmUgfSA6IHt9KSxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlQYXlsb2FkKSxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIFNwaW5uZXIsIElubGluZSwgQmFubmVyIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBUaGlua2luZ0luZGljYXRvclByb3BzIHtcbiAgc3RhcnRlZEF0OiBudW1iZXI7XG59XG5cbmNvbnN0IFRoaW5raW5nSW5kaWNhdG9yID0gKHsgc3RhcnRlZEF0IH06IFRoaW5raW5nSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEVsYXBzZWQoTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCkgLyAxMDAwKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbc3RhcnRlZEF0XSk7XG5cbiAgY29uc3Qgc3RhdHVzVGV4dCA9XG4gICAgZWxhcHNlZCA+PSA1ID8gJ0ZldGNoaW5nIGZyZXNoIGRhdGEgZnJvbSBTdHJpcGUuLi4nIDogJ0FuYWx5emluZyB5b3VyIGRhdGEuLi4nO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PntzdGF0dXNUZXh0fTwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgICB7ZWxhcHNlZCA+PSA1ICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlN0aWxsIHdvcmtpbmcgXHUyMDE0IGZldGNoaW5nIHRoZSBsYXRlc3QgZGF0YSBmcm9tIFN0cmlwZSB0byBnaXZlIHlvdSBhbiBhY2N1cmF0ZSBhbnN3ZXIuXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGlua2luZ0luZGljYXRvcjtcbiIsICJpbXBvcnQgeyBCb3gsIEJhbm5lciwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIENsYXJpZmljYXRpb25PcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2xhcmlmaWNhdGlvblByb21wdFByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZztcbiAgb3B0aW9uczogQ2xhcmlmaWNhdGlvbk9wdGlvbltdO1xuICBvblNlbGVjdDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENsYXJpZmljYXRpb25Qcm9tcHQgPSAoeyBxdWVzdGlvbiwgb3B0aW9ucywgb25TZWxlY3QgfTogQ2xhcmlmaWNhdGlvblByb21wdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgIDxCYW5uZXIgdHlwZT1cImRlZmF1bHRcIiB0aXRsZT1cIkNsYXJpZmljYXRpb24gbmVlZGVkXCIgZGVzY3JpcHRpb249e3F1ZXN0aW9ufSAvPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCB3cmFwOiAnd3JhcCcgfX0+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiBvblNlbGVjdChvcHRpb24udmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGFyaWZpY2F0aW9uUHJvbXB0O1xuIiwgImltcG9ydCB7IEJveCwgVGV4dEFyZWEsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDaGF0SW5wdXRQcm9wcyB7XG4gIG9uU2VuZDogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENoYXRJbnB1dCA9ICh7IG9uU2VuZCwgZGlzYWJsZWQgPSBmYWxzZSwgaW5pdGlhbFZhbHVlID0gJycgfTogQ2hhdElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAoIXRyaW1tZWQgfHwgZGlzYWJsZWQpIHJldHVybjtcbiAgICBvblNlbmQodHJpbW1lZCk7XG4gICAgc2V0VmFsdWUoJycpO1xuICB9LCBbdmFsdWUsIGRpc2FibGVkLCBvblNlbmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnYm90dG9tJywgcGFkZGluZzogJ3NtYWxsJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHdpZHRoOiAnZmlsbCcgfX0+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPVwiQXNrIGEgcXVlc3Rpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG15IE1SUj9cIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgIG9uUHJlc3M9e2hhbmRsZVNlbmR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAhdmFsdWUudHJpbSgpfVxuICAgICAgPlxuICAgICAgICBTZW5kXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRJbnB1dDtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuY29uc3QgR1VJREVEX1BST01QVFMgPSBbXG4gIHsgbGFiZWw6IFwiV2hhdCdzIG15IE1SUj9cIiwgdmFsdWU6IFwiV2hhdCdzIG15IE1SUj9cIiB9LFxuICB7IGxhYmVsOiBcIkhvdydzIGNodXJuIHRyZW5kaW5nP1wiLCB2YWx1ZTogXCJIb3cgaXMgbXkgY2h1cm4gcmF0ZSB0cmVuZGluZyBvdmVyIHRoZSBsYXN0IDMgbW9udGhzP1wiIH0sXG4gIHsgbGFiZWw6ICdSZXZlbnVlIGJ5IHByb2R1Y3QnLCB2YWx1ZTogXCJXaGF0J3MgbXkgcmV2ZW51ZSBicmVha2Rvd24gYnkgcHJvZHVjdD9cIiB9LFxuICB7IGxhYmVsOiAnVG9wIGN1c3RvbWVycycsIHZhbHVlOiAnV2hvIGFyZSBteSB0b3AgMTAgY3VzdG9tZXJzIGJ5IHJldmVudWU/JyB9LFxuICB7IGxhYmVsOiAnR3Jvd3RoIHJhdGUnLCB2YWx1ZTogXCJXaGF0J3MgbXkgTVJSIGdyb3d0aCByYXRlP1wiIH0sXG5dO1xuXG5pbnRlcmZhY2UgV2VsY29tZVByb21wdFByb3BzIHtcbiAgb25TZWxlY3RQcm9tcHQ6IChwcm9tcHQ6IHN0cmluZykgPT4gdm9pZDtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pjtcbn1cblxuY29uc3QgV2VsY29tZVByb21wdCA9ICh7IG9uU2VsZWN0UHJvbXB0LCBpbnNpZ2h0cyB9OiBXZWxjb21lUHJvbXB0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2hlYWRpbmcnIH19PldlbGNvbWUgdG8gSmF2ZWxpbjwvSW5saW5lPlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgQXNrIG1lIGFueXRoaW5nIGFib3V0IHlvdXIgU3RyaXBlIGJ1c2luZXNzLiBJIGNhbiBjYWxjdWxhdGUgbWV0cmljcywgYW5hbHl6ZSB0cmVuZHMsIGFuZFxuICAgICAgICAgIHN1cmZhY2UgaW5zaWdodHMgZnJvbSB5b3VyIGRhdGEuXG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtpbnNpZ2h0cyAmJiBpbnNpZ2h0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+UmVjZW50IGluc2lnaHRzPC9JbmxpbmU+XG4gICAgICAgICAge2luc2lnaHRzLm1hcCgoaW5zaWdodCkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2luc2lnaHQuaWR9XG4gICAgICAgICAgICAgIGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICdjb250YWluZXInLCBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57aW5zaWdodC5jb250ZW50fTwvSW5saW5lPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlRyeSBhc2tpbmc8L0lubGluZT5cbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCB3cmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAge0dVSURFRF9QUk9NUFRTLm1hcCgocHJvbXB0KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT17cHJvbXB0LnZhbHVlfVxuICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3RQcm9tcHQocHJvbXB0LnZhbHVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb21wdC5sYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdjYXB0aW9uJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIEphdmVsaW4gcHJvdmlkZXMgaW5mb3JtYXRpb25hbCBpbnNpZ2h0cyBvbmx5LCBub3QgZmluYW5jaWFsIG9yIGJ1c2luZXNzIGFkdmljZS4gQWx3YXlzIHZlcmlmeSBpbXBvcnRhbnQgZGVjaXNpb25zIHdpdGggeW91ciBvd24gYW5hbHlzaXMuXG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lUHJvbXB0O1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb252ZXJzYXRpb25MaXN0UHJvcHMge1xuICBjb252ZXJzYXRpb25zOiBDb252ZXJzYXRpb25bXTtcbiAgYWN0aXZlQ29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bGw7XG4gIG9uU2VsZWN0Q29udmVyc2F0aW9uOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ29udmVyc2F0aW9uTGlzdCA9ICh7XG4gIGNvbnZlcnNhdGlvbnMsXG4gIGFjdGl2ZUNvbnZlcnNhdGlvbklkLFxuICBvblNlbGVjdENvbnZlcnNhdGlvbixcbiAgb25DbG9zZSxcbn06IENvbnZlcnNhdGlvbkxpc3RQcm9wcykgPT4ge1xuICBpZiAoY29udmVyc2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19Pk5vIGNvbnZlcnNhdGlvbnMgeWV0LjwvSW5saW5lPlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+U3RhcnQgYnkgYXNraW5nIGEgcXVlc3Rpb24gYmVsb3cuPC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCBwYWRkaW5nOiAnc21hbGwnIH19PlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZGlzdHJpYnV0ZTogJ3NwYWNlLWJldHdlZW4nLCBhbGlnblk6ICdjZW50ZXInLCBwYWRkaW5nOiAneHNtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5Db252ZXJzYXRpb25zPC9JbmxpbmU+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIG9uUHJlc3M9e29uQ2xvc2V9PlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICB7Y29udmVyc2F0aW9ucy5tYXAoKGNvbnYpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGtleT17Y29udi5pZH1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6ICdzbWFsbCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbnYuaWQgPT09IGFjdGl2ZUNvbnZlcnNhdGlvbklkID8gJ2NvbnRhaW5lcicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdGFjazogJ3knLFxuICAgICAgICAgICAgZ2FwOiAneHNtYWxsJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3RDb252ZXJzYXRpb24oY29udi5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJywgd2lkdGg6ICdmaWxsJyB9fT5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogY29udi5pZCA9PT0gYWN0aXZlQ29udmVyc2F0aW9uSWQgPyAnc2VtaWJvbGQnIDogJ3JlZ3VsYXInIH19PlxuICAgICAgICAgICAgICAgIHtjb252LnRpdGxlIHx8ICdVbnRpdGxlZCBjb252ZXJzYXRpb24nfVxuICAgICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2NhcHRpb24nLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKGNvbnYudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbkxpc3Q7XG4iLCAiaW1wb3J0IHsgU2V0dGluZ3NWaWV3LCBCb3gsIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcblxuY29uc3QgQXBwU2V0dGluZ3NWaWV3ID0gKHsgdXNlckNvbnRleHQ6IF91c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2V0dGluZ3NWaWV3PlxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XG4gICAgICAgIDxJbmxpbmU+SmF2ZWxpbiBzZXR0aW5ncyBjb21pbmcgc29vbi48L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgIDwvU2V0dGluZ3NWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ3NWaWV3O1xuIiwgImltcG9ydCB7XG4gIENvbnRleHRWaWV3LFxuICBCb3gsXG4gIFNwaW5uZXIsXG4gIElubGluZSxcbiAgQmFubmVyLFxuICBCdXR0b24sXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50LCBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuXG50eXBlIE9uYm9hcmRpbmdTdGF0ZSA9ICdwcm9jZXNzaW5nJyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbmNvbnN0IE9uYm9hcmRpbmdWaWV3ID0gKHsgdXNlckNvbnRleHQsIG9hdXRoQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBBUEkgY2xpZW50IHdpdGggU3RyaXBlIGNvbnRleHQgZm9yIHNpZ25hdHVyZSB2ZXJpZmljYXRpb25cbiAgaWYgKHVzZXJDb250ZXh0Py5pZCAmJiB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcbiAgICBpbml0QXBpQ2xpZW50KHVzZXJDb250ZXh0LmlkLCB1c2VyQ29udGV4dC5hY2NvdW50LmlkKTtcbiAgfVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPE9uYm9hcmRpbmdTdGF0ZT4oJ3Byb2Nlc3NpbmcnKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGhhbmRsZU9BdXRoID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIC8vIENoZWNrIGZvciBPQXV0aCBlcnJvclxuICAgIGlmIChvYXV0aENvbnRleHQ/LmVycm9yKSB7XG4gICAgICBzZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShgQXV0aG9yaXphdGlvbiBmYWlsZWQ6ICR7b2F1dGhDb250ZXh0LmVycm9yfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBPQXV0aCBjb2RlXG4gICAgaWYgKCFvYXV0aENvbnRleHQ/LmNvZGUpIHtcbiAgICAgIHNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdObyBhdXRob3JpemF0aW9uIGNvZGUgcmVjZWl2ZWQuIFBsZWFzZSB0cnkgaW5zdGFsbGluZyBhZ2Fpbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gRXhjaGFuZ2UgY29kZSBmb3IgdG9rZW5zIHZpYSBFZGdlIEZ1bmN0aW9uXG4gICAgICBhd2FpdCBhcGlDbGllbnQoJy9hdXRoLWNhbGxiYWNrJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGNvZGU6IG9hdXRoQ29udGV4dC5jb2RlLFxuICAgICAgICAgIHN0YXRlOiBvYXV0aENvbnRleHQuc3RhdGUgfHwgJycsXG4gICAgICAgICAgdmVyaWZpZXI6IG9hdXRoQ29udGV4dC52ZXJpZmllciB8fCAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgZGF0YSBzeW5jXG4gICAgICBhd2FpdCBhcGlDbGllbnQoJy9zeW5jLXRyaWdnZXInLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRTdGF0ZSgnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ZhaWxlZCB0byBjb21wbGV0ZSBzZXR1cC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICB9XG4gIH0sIFtvYXV0aENvbnRleHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZU9BdXRoKCk7XG4gIH0sIFtoYW5kbGVPQXV0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3IHRpdGxlPVwiV2VsY29tZSB0byBKYXZlbGluXCI+XG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAge3N0YXRlID09PSAncHJvY2Vzc2luZycgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgPElubGluZT5TZXR0aW5nIHVwIEphdmVsaW4uLi48L0lubGluZT5cbiAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgQ29ubmVjdGluZyB0byB5b3VyIFN0cmlwZSBhY2NvdW50IGFuZCBzeW5jaW5nIHlvdXIgZGF0YS5cbiAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2V0dXAgY29tcGxldGUhXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJKYXZlbGluIGlzIHJlYWR5LiBZb3VyIGRhdGEgaXMgc3luY2luZyBpbiB0aGUgYmFja2dyb3VuZCBcdTIwMTQgeW91IGNhbiBzdGFydCBhc2tpbmcgcXVlc3Rpb25zIHJpZ2h0IGF3YXkuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIE9wZW4gdGhlIEphdmVsaW4gZHJhd2VyIGZyb20gYW55IHBhZ2UgaW4geW91ciBTdHJpcGUgRGFzaGJvYXJkIHRvIGdldCBzdGFydGVkLlxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnZXJyb3InICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIlNldHVwIGZhaWxlZFwiIGRlc2NyaXB0aW9uPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlT0F1dGh9PlxuICAgICAgICAgICAgICBSZXRyeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT25ib2FyZGluZ1ZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxjQUFjO0FBQ3RCLGNBQVEsY0FBYztBQUFBO0FBQUE7OztBQ0h0QjtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxrQkFBa0IsUUFBUSxZQUFZLFFBQVEsY0FBYyxRQUFRLFlBQVksUUFBUSxZQUFZLFFBQVEsTUFBTSxRQUFRLFlBQVksUUFBUSxXQUFXLFFBQVEsVUFBVSxRQUFRLFNBQVMsUUFBUSxxQkFBcUIsUUFBUSxVQUFVLFFBQVEsWUFBWSxRQUFRLGFBQWEsUUFBUSxlQUFlLFFBQVEsU0FB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TUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLDhCQUE4QjtBQUFBLElBQzlCLDBCQUEwQjtBQUFBLElBQzFCLGdCQUFnQjtBQUFBLE1BQ2QsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiOyIsCiAgIm5hbWVzIjogWyJfYSIsICJmZXRjaCIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJyZXF1aXJlX3NpZ25hdHVyZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJpbXBvcnRfdWkiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIl9hIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJfYSJdCn0K
