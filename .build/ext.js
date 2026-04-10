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
  var import_ui18 = __toESM(require_ui());
  var import_react5 = __require("react");

  // src/components/ChatThread.tsx
  var import_ui14 = __toESM(require_ui());

  // src/components/MessageBubble.tsx
  var import_ui11 = __toESM(require_ui());

  // src/components/brand/JvSectionHeader.tsx
  var import_ui = __toESM(require_ui());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var JvSectionHeader = ({ title, action, subtitle }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
      css: {
        stack: action ? "x" : "y",
        distribute: "space-between",
        alignY: "center",
        marginBottom: "medium"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "xsmall" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
              css: { font: "heading" },
              children: title
            }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
              css: { font: "caption", color: "secondary" },
              children: subtitle
            })
          ]
        }),
        action
      ]
    });
  };
  var JvSectionHeader_default = JvSectionHeader;

  // src/components/brand/JvCard.tsx
  var import_ui2 = __toESM(require_ui());
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var JvCard = ({ children, padding = "medium", transparent = false }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
      css: {
        padding,
        backgroundColor: transparent ? void 0 : "container",
        stack: "y",
        gap: "small"
      },
      children
    });
  };
  var JvCard_default = JvCard;

  // src/components/brand/JvStatusIndicator.tsx
  var import_ui3 = __toESM(require_ui());
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var JvStatusIndicator = ({ variant, label, context }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
      css: { stack: "x", gap: "xsmall", alignY: "center" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
          type: variant,
          children: label
        }),
        context && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Inline, {
          css: { font: "caption", color: "secondary" },
          children: context
        })
      ]
    });
  };
  var JvStatusIndicator_default = JvStatusIndicator;

  // src/components/brand/JvEmptyState.tsx
  var import_ui4 = __toESM(require_ui());
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var JvEmptyState = ({
    title,
    description,
    action,
    suggestions,
    onSelectSuggestion
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
      css: { padding: "large", stack: "y", gap: "medium", alignX: "center" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Inline, {
          css: { fontWeight: "semibold" },
          children: title
        }),
        description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Inline, {
          css: { color: "secondary" },
          children: description
        }),
        action && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Button, {
          type: "primary",
          onPress: action.onPress,
          children: action.label
        }),
        suggestions && suggestions.length > 0 && onSelectSuggestion && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
          css: { stack: "x", gap: "small", wrap: "wrap" },
          children: suggestions.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Button, {
            type: "secondary",
            size: "small",
            onPress: () => onSelectSuggestion(suggestion.value),
            children: suggestion.label
          }, suggestion.value))
        })
      ]
    });
  };
  var JvEmptyState_default = JvEmptyState;

  // src/components/brand/JvMetricDisplay.tsx
  var import_ui5 = __toESM(require_ui());
  var import_jsx_runtime5 = __require("react/jsx-runtime");

  // src/components/brand/JvActionBar.tsx
  var import_ui6 = __toESM(require_ui());
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  var JvActionBar = ({
    primary,
    secondary,
    destructive,
    showDivider = false
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_ui6.Box, {
      css: { stack: "y" },
      children: [
        showDivider && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_ui6.Box, {
          css: {
            stack: "x",
            gap: "small",
            distribute: destructive ? "space-between" : void 0,
            alignY: "center",
            paddingTop: "medium"
          },
          children: [
            destructive && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Button, {
              type: "destructive",
              disabled: destructive.disabled,
              onPress: destructive.onPress,
              children: destructive.label
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_ui6.Box, {
              css: { stack: "x", gap: "small" },
              children: [
                secondary && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Button, {
                  type: "secondary",
                  disabled: secondary.disabled,
                  onPress: secondary.onPress,
                  children: secondary.label
                }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui6.Button, {
                  type: "primary",
                  disabled: primary.disabled,
                  onPress: primary.onPress,
                  children: primary.label
                })
              ]
            })
          ]
        })
      ]
    });
  };
  var JvActionBar_default = JvActionBar;

  // src/components/brand/JvConfirmationPrompt.tsx
  var import_ui7 = __toESM(require_ui());
  var import_jsx_runtime7 = __require("react/jsx-runtime");

  // src/components/brand/JvFreshnessIndicator.tsx
  var import_ui8 = __toESM(require_ui());
  var import_jsx_runtime8 = __require("react/jsx-runtime");
  var JvFreshnessIndicator = ({ type, syncedAt }) => {
    if (type === "live") {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Badge, {
        type: "positive",
        children: "Live data"
      });
    }
    const label = syncedAt ? `Data as of ${new Date(syncedAt).toLocaleString()}` : "Data as of cache";
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ui8.Badge, {
      type: "info",
      children: label
    });
  };
  var JvFreshnessIndicator_default = JvFreshnessIndicator;

  // src/components/brand/JvLoadingState.tsx
  var import_ui9 = __toESM(require_ui());
  var import_react = __require("react");
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  var JvLoadingState = ({
    message = "Analyzing your data...",
    startedAt,
    showExtendedWait = false
  }) => {
    const [elapsed, setElapsed] = (0, import_react.useState)(0);
    (0, import_react.useEffect)(() => {
      if (!startedAt)
        return;
      const interval = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startedAt) / 1e3));
      }, 1e3);
      return () => clearInterval(interval);
    }, [startedAt]);
    const isExtended = showExtendedWait || startedAt !== void 0 && elapsed >= 5;
    const statusText = isExtended ? "Fetching fresh data from Stripe..." : message;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
      css: { padding: "medium", stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
          css: { stack: "x", gap: "small", alignY: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Spinner, {
              size: "small"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Inline, {
              css: { color: "secondary" },
              children: statusText
            })
          ]
        }),
        isExtended && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Banner, {
          type: "default",
          description: "Still working \u2014 fetching the latest data from Stripe to give you an accurate answer."
        })
      ]
    });
  };
  var JvLoadingState_default = JvLoadingState;

  // src/components/brand/JvPromptSuggestions.tsx
  var import_ui10 = __toESM(require_ui());
  var import_jsx_runtime10 = __require("react/jsx-runtime");
  var JvPromptSuggestions = ({
    label,
    suggestions,
    onSelect
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_ui10.Box, {
      css: { stack: "y", gap: "small" },
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.Inline, {
          css: { fontWeight: "semibold" },
          children: label
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.Box, {
          css: { stack: "y", gap: "xsmall" },
          children: suggestions.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui10.Button, {
            type: "secondary",
            onPress: () => onSelect(suggestion.value),
            children: suggestion.label
          }, suggestion.value))
        })
      ]
    });
  };
  var JvPromptSuggestions_default = JvPromptSuggestions;

  // src/components/MessageBubble.tsx
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  var MessageBubble = ({ role, content, freshness }) => {
    const isUser = role === "user";
    if (isUser) {
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
        css: { padding: "small", backgroundColor: "container", stack: "y", gap: "xsmall" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
            css: { font: "caption", color: "secondary" },
            children: "you"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
            children: content
          })
        ]
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
      css: { stack: "y", gap: "xsmall" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
          css: { padding: "medium", stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
              css: { font: "caption", color: "secondary" },
              children: "Javelin"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Box, {
              css: { marginLeft: "small" },
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                children: content
              })
            }),
            freshness && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Box, {
              css: { marginLeft: "small", marginTop: "xsmall" },
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(JvFreshnessIndicator_default, {
                type: freshness.type,
                syncedAt: freshness.syncedAt
              })
            })
          ]
        })
      ]
    });
  };
  var MessageBubble_default = MessageBubble;

  // src/components/InsightCard.tsx
  var import_react2 = __require("react");
  var import_ui12 = __toESM(require_ui());

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
  var import_jsx_runtime12 = __require("react/jsx-runtime");
  var InsightCard = ({ insightId, messageId, content }) => {
    const [feedback, setFeedback] = (0, import_react2.useState)(null);
    const [submitting, setSubmitting] = (0, import_react2.useState)(false);
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_ui12.Accordion, {
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_ui12.AccordionItem, {
        title: "Insight",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_ui12.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_ui12.Inline, {
              css: { color: "secondary" },
              children: content
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(JvActionBar_default, {
              primary: {
                label: feedback === "positive" ? "Helpful \u2713" : "Helpful?",
                onPress: () => handleFeedback("positive"),
                disabled: submitting || feedback !== null
              },
              secondary: {
                label: feedback === "negative" ? "Not helpful \u2713" : "Not helpful?",
                onPress: () => handleFeedback("negative"),
                disabled: submitting || feedback !== null
              }
            })
          ]
        })
      })
    });
  };
  var InsightCard_default = InsightCard;

  // src/components/ClarificationPrompt.tsx
  var import_ui13 = __toESM(require_ui());
  var import_jsx_runtime13 = __require("react/jsx-runtime");
  var ClarificationPrompt = ({ question, options, onSelect }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(JvCard_default, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(JvSectionHeader_default, {
          title: "Clarification needed"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui13.Inline, {
          css: { color: "secondary" },
          children: question
        }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(JvPromptSuggestions_default, {
          suggestions: options,
          onSelect
        })
      ]
    });
  };
  var ClarificationPrompt_default = ClarificationPrompt;

  // src/components/ChatThread.tsx
  var import_jsx_runtime14 = __require("react/jsx-runtime");
  var ChatThread = ({
    messages,
    isThinking,
    thinkingStartedAt,
    onClarificationSelect
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_ui14.Box, {
      css: { stack: "y", gap: "xsmall", overflow: "auto" },
      children: [
        messages.map((message) => {
          var _a2;
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_ui14.Box, {
            css: { stack: "y" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MessageBubble_default, {
                role: message.role,
                content: message.content,
                freshness: message.freshness
              }),
              (_a2 = message.insights) == null ? void 0 : _a2.map((insight) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(InsightCard_default, {
                insightId: insight.id,
                messageId: message.id,
                content: insight.content
              }, insight.id)),
              message.clarification && onClarificationSelect && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ClarificationPrompt_default, {
                question: message.clarification.question,
                options: message.clarification.options,
                onSelect: onClarificationSelect
              })
            ]
          }, message.id);
        }),
        isThinking && thinkingStartedAt && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(JvLoadingState_default, {
          startedAt: thinkingStartedAt
        })
      ]
    });
  };
  var ChatThread_default = ChatThread;

  // src/components/ChatInput.tsx
  var import_ui15 = __toESM(require_ui());
  var import_react3 = __require("react");
  var import_jsx_runtime15 = __require("react/jsx-runtime");
  var ChatInput = ({ onSend, disabled = false, initialValue = "" }) => {
    const [value, setValue] = (0, import_react3.useState)(initialValue);
    const handleSend = (0, import_react3.useCallback)(() => {
      const trimmed = value.trim();
      if (!trimmed || disabled)
        return;
      onSend(trimmed);
      setValue("");
    }, [value, disabled, onSend]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ui15.Box, {
      css: { backgroundColor: "container", padding: "xsmall" },
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_ui15.Box, {
        css: { stack: "x", gap: "small", alignY: "bottom", padding: "small" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ui15.Box, {
            css: { width: "fill" },
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ui15.TextArea, {
              label: "Ask a question",
              placeholder: "What's my MRR?",
              value,
              onChange: (e) => setValue(e.target.value),
              rows: 2,
              disabled
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ui15.Button, {
            type: "primary",
            onPress: handleSend,
            disabled: disabled || !value.trim(),
            children: "Send"
          })
        ]
      })
    });
  };
  var ChatInput_default = ChatInput;

  // src/components/WelcomePrompt.tsx
  var import_ui16 = __toESM(require_ui());
  var import_jsx_runtime16 = __require("react/jsx-runtime");
  var GUIDED_PROMPTS = [
    { label: "What's my MRR?", value: "What's my MRR?" },
    { label: "How's churn trending?", value: "How is my churn rate trending over the last 3 months?" },
    { label: "Revenue by product", value: "What's my revenue breakdown by product?" },
    { label: "Top customers", value: "Who are my top 10 customers by revenue?" },
    { label: "Growth rate", value: "What's my MRR growth rate?" }
  ];
  var WelcomePrompt = ({ onSelectPrompt, insights }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_ui16.Box, {
      css: { padding: "medium", stack: "y", gap: "medium" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(JvSectionHeader_default, {
          title: "Welcome to Javelin",
          subtitle: "Ask me anything about your Stripe business. I can calculate metrics, analyze trends, and surface insights from your data."
        }),
        insights && insights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_ui16.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_ui16.Inline, {
              css: { fontWeight: "semibold" },
              children: "Recent insights"
            }),
            insights.map((insight) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(JvCard_default, {
              padding: "small",
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_ui16.Inline, {
                css: { color: "secondary" },
                children: insight.content
              })
            }, insight.id))
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_ui16.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(JvPromptSuggestions_default, {
          label: "Try asking",
          suggestions: GUIDED_PROMPTS,
          onSelect: onSelectPrompt
        }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_ui16.Inline, {
          css: { font: "caption", color: "secondary" },
          children: "Javelin provides informational insights only, not financial or business advice. Always verify important decisions with your own analysis."
        })
      ]
    });
  };
  var WelcomePrompt_default = WelcomePrompt;

  // src/components/ConversationList.tsx
  var import_ui17 = __toESM(require_ui());
  var import_jsx_runtime17 = __require("react/jsx-runtime");
  var ConversationList = ({
    conversations,
    activeConversationId: _activeConversationId,
    onSelectConversation,
    onClose
  }) => {
    if (conversations.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(JvEmptyState_default, {
        title: "No conversations yet",
        description: "Start by asking a question below."
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_ui17.Box, {
      css: { stack: "y", gap: "xsmall", padding: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(JvSectionHeader_default, {
          title: "Conversations",
          action: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_ui17.Button, {
            type: "secondary",
            size: "small",
            onPress: onClose,
            children: "Close"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_ui17.List, {
          onAction: (id) => onSelectConversation(String(id)),
          children: conversations.map((conv) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_ui17.ListItem, {
            id: conv.id,
            title: conv.title || "Untitled conversation",
            secondaryTitle: new Date(conv.updatedAt).toLocaleDateString()
          }, conv.id))
        })
      ]
    });
  };
  var ConversationList_default = ConversationList;

  // src/hooks/useAuthStatus.ts
  var import_react4 = __require("react");
  function useAuthStatus() {
    const [authStatus, setAuthStatus] = (0, import_react4.useState)({
      state: "checking",
      expiresAt: null
    });
    const checkingRef = (0, import_react4.useRef)(false);
    const checkAuth = (0, import_react4.useCallback)(() => __async(this, null, function* () {
      var _a2, _b;
      if (checkingRef.current)
        return authStatus;
      checkingRef.current = true;
      setAuthStatus({ state: "checking", expiresAt: null });
      try {
        const response = yield apiClient("/auth-refresh");
        const status = {
          state: "healthy",
          expiresAt: ((_a2 = response.data) == null ? void 0 : _a2.expiresAt) || null
        };
        setAuthStatus(status);
        checkingRef.current = false;
        return status;
      } catch (err) {
        const errorObj = err;
        const code = (_b = errorObj == null ? void 0 : errorObj.error) == null ? void 0 : _b.code;
        let status;
        if (err instanceof TypeError && !code) {
          status = { state: "unreachable", expiresAt: null };
        } else if (code === "token_not_found") {
          status = { state: "missing", expiresAt: null };
        } else if (code === "refresh_token_expired") {
          status = { state: "expired", expiresAt: null };
        } else {
          status = { state: "error", expiresAt: null };
        }
        setAuthStatus(status);
        checkingRef.current = false;
        return status;
      }
    }), [authStatus]);
    return { authStatus, checkAuth };
  }

  // src/views/ChatView.tsx
  var import_jsx_runtime18 = __require("react/jsx-runtime");
  var ChatView = ({ userContext }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
    const [viewState, setViewState] = (0, import_react5.useState)("loading");
    const [conversations, setConversations] = (0, import_react5.useState)([]);
    const [activeConversationId, setActiveConversationId] = (0, import_react5.useState)(null);
    const [messages, setMessages] = (0, import_react5.useState)([]);
    const [isThinking, setIsThinking] = (0, import_react5.useState)(false);
    const [thinkingStartedAt, setThinkingStartedAt] = (0, import_react5.useState)();
    const [error, setError] = (0, import_react5.useState)(null);
    const [welcomeInsights, setWelcomeInsights] = (0, import_react5.useState)([]);
    const [showConversationList, setShowConversationList] = (0, import_react5.useState)(false);
    const [syncComplete, setSyncComplete] = (0, import_react5.useState)(false);
    const [syncMethod, setSyncMethod] = (0, import_react5.useState)(null);
    const { authStatus, checkAuth } = useAuthStatus();
    const syncChecked = (0, import_react5.useRef)(false);
    const loadWelcomeInsights = () => __async(void 0, null, function* () {
      var _a3;
      try {
        const response = yield apiClient(
          "/insights-welcome"
        );
        const insights = ((_a3 = response.data) == null ? void 0 : _a3.insights) || [];
        setWelcomeInsights(insights);
        return insights.length > 0;
      } catch (e) {
        return false;
      }
    });
    const authAwareSync = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      if (syncChecked.current)
        return;
      syncChecked.current = true;
      const status = yield checkAuth();
      if (status.state === "healthy") {
        setSyncMethod("backend");
        try {
          yield apiClient("/sync-trigger", { method: "POST" });
          yield loadWelcomeInsights();
          setSyncComplete(true);
        } catch (e) {
          setSyncComplete(true);
          yield loadWelcomeInsights();
        }
      } else if (status.state === "unreachable") {
        setSyncComplete(true);
      } else {
        setSyncComplete(true);
      }
    }), [checkAuth]);
    const loadConversations = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      var _a3;
      try {
        const response = yield apiClient("/chat-conversations");
        const convos = ((_a3 = response.data) == null ? void 0 : _a3.conversations) || [];
        setConversations(convos);
        if (convos.length === 0) {
          setViewState("empty");
        } else {
          yield loadConversation(convos[0].id);
          setViewState("chat");
        }
      } catch (e) {
        setViewState("empty");
      }
    }), []);
    (0, import_react5.useEffect)(() => {
      loadConversations();
      authAwareSync();
    }, [loadConversations, authAwareSync]);
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
    const sendMessage = (0, import_react5.useCallback)(
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
    const handleClarificationSelect = (0, import_react5.useCallback)(
      (value) => {
        sendMessage(value);
      },
      [sendMessage]
    );
    const handleNewConversation = (0, import_react5.useCallback)(() => {
      setActiveConversationId(null);
      setMessages([]);
      setViewState("empty");
      setShowConversationList(false);
      loadWelcomeInsights();
    }, []);
    const handleSelectConversation = (0, import_react5.useCallback)((id) => __async(void 0, null, function* () {
      setShowConversationList(false);
      yield loadConversation(id);
      setViewState("chat");
    }), []);
    if (viewState === "loading") {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.ContextView, {
        title: "Javelin",
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(JvLoadingState_default, {
          message: "Loading Javelin..."
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.ContextView, {
      title: "Javelin",
      actions: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_ui18.Box, {
        css: { stack: "x", gap: "small" },
        children: [
          conversations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Button, {
            type: "secondary",
            onPress: () => setShowConversationList((v) => !v),
            children: "History"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Button, {
            type: "secondary",
            onPress: handleNewConversation,
            children: "New chat"
          })
        ]
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_ui18.Box, {
        css: { stack: "y", height: "fill" },
        children: [
          error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Banner, {
            type: "critical",
            title: error,
            onDismiss: () => setError(null)
          }),
          syncMethod === "backend" && !syncComplete && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(JvLoadingState_default, {
            message: "Syncing your data..."
          }),
          (authStatus.state === "missing" || authStatus.state === "expired") && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Banner, {
            type: "caution",
            title: "Authorization required",
            description: "Please re-install the app to reconnect your account."
          }),
          syncComplete && syncMethod === "backend" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Banner, {
            type: "default",
            title: "Data synced",
            description: "Your Stripe data is up to date.",
            onDismiss: () => setSyncComplete(false)
          }),
          showConversationList && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ConversationList_default, {
            conversations,
            activeConversationId,
            onSelectConversation: handleSelectConversation,
            onClose: () => setShowConversationList(false)
          }),
          !showConversationList && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_ui18.Box, {
            css: { stack: "y", overflow: "auto" },
            children: viewState === "empty" && messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(WelcomePrompt_default, {
              onSelectPrompt: sendMessage,
              insights: welcomeInsights
            }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ChatThread_default, {
              messages,
              isThinking,
              thinkingStartedAt,
              onClarificationSelect: handleClarificationSelect
            })
          }),
          !showConversationList && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ChatInput_default, {
            onSend: sendMessage,
            disabled: isThinking
          })
        ]
      })
    });
  };
  var ChatView_default = ChatView;

  // src/views/SettingsView.tsx
  var import_ui19 = __toESM(require_ui());
  var import_react6 = __require("react");
  var import_jsx_runtime19 = __require("react/jsx-runtime");
  function getStatusVariant(state) {
    if (state === "healthy")
      return "positive";
    if (state === "missing" || state === "expired")
      return "warning";
    if (state === "unreachable")
      return "negative";
    return "info";
  }
  function getStatusLabel(state, expiresAt) {
    if (state === "healthy" && expiresAt) {
      const minutesLeft = Math.round((new Date(expiresAt).getTime() - Date.now()) / 6e4);
      return `Connected (expires in ${minutesLeft} min)`;
    }
    if (state === "healthy")
      return "Connected";
    if (state === "missing" || state === "expired")
      return "Not connected";
    if (state === "unreachable")
      return "Backend unreachable";
    return "Unable to check";
  }
  var AppSettingsView = ({ userContext }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
    const { authStatus, checkAuth } = useAuthStatus();
    (0, import_react6.useEffect)(() => {
      checkAuth();
    }, [checkAuth]);
    const isChecking = authStatus.state === "checking";
    const statusLabel = getStatusLabel(authStatus.state, authStatus.expiresAt);
    const showExplanation = authStatus.state === "missing" || authStatus.state === "expired";
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_ui19.SettingsView, {
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_ui19.Box, {
        css: { padding: "medium", stack: "y", gap: "medium" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(JvCard_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(JvSectionHeader_default, {
                title: "Stripe access"
              }),
              isChecking ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(JvLoadingState_default, {
                message: "Checking connection..."
              }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(JvStatusIndicator_default, {
                variant: getStatusVariant(authStatus.state),
                label: statusLabel
              }),
              showExplanation && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_ui19.Inline, {
                css: { color: "secondary" },
                children: "OAuth connection is required. Please re-install the app to reconnect your Stripe account."
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(JvActionBar_default, {
            primary: { label: "Check status", onPress: () => {
              void checkAuth();
            }, disabled: isChecking }
          })
        ]
      })
    });
  };
  var SettingsView_default = AppSettingsView;

  // src/views/OnboardingView.tsx
  var import_ui20 = __toESM(require_ui());
  var import_react7 = __require("react");
  var import_jsx_runtime20 = __require("react/jsx-runtime");
  var OnboardingView = ({ userContext, oauthContext }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
    const [state, setState] = (0, import_react7.useState)("auth");
    const [errorMessage, setErrorMessage] = (0, import_react7.useState)("");
    const hasRun = (0, import_react7.useRef)(false);
    const handleSetup = (0, import_react7.useCallback)(() => __async(void 0, null, function* () {
      if (hasRun.current)
        return;
      hasRun.current = true;
      if (oauthContext == null ? void 0 : oauthContext.error) {
        setState("error");
        setErrorMessage(
          `Authorization was denied or failed (${oauthContext.error}). Please uninstall and re-install the app to try again.`
        );
        hasRun.current = false;
        return;
      }
      if (oauthContext == null ? void 0 : oauthContext.code) {
        try {
          yield apiClient("/auth-callback", {
            method: "POST",
            body: {
              code: oauthContext.code,
              state: oauthContext.state || "",
              verifier: oauthContext.verifier || ""
            }
          });
        } catch (e) {
          setState("error");
          setErrorMessage(
            "Authorization failed. Please re-install the app to reconnect your Stripe account."
          );
          hasRun.current = false;
          return;
        }
      }
      setState("syncing");
      try {
        yield apiClient("/sync-trigger", { method: "POST" });
      } catch (e) {
      }
      setState("success");
    }), [oauthContext]);
    (0, import_react7.useEffect)(() => {
      handleSetup();
    }, [handleSetup]);
    const handleRetry = (0, import_react7.useCallback)(() => {
      hasRun.current = false;
      setErrorMessage("");
      setState("auth");
      handleSetup();
    }, [handleSetup]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_ui20.ContextView, {
      title: "Welcome to Javelin",
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_ui20.Box, {
        css: { padding: "medium", stack: "y", gap: "medium" },
        children: [
          (state === "auth" || state === "syncing") && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(JvCard_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(JvSectionHeader_default, {
                title: state === "auth" ? "Connecting to Stripe..." : "Syncing your data..."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(JvLoadingState_default, {
                message: state === "auth" ? "Establishing connection..." : "Syncing your data..."
              })
            ]
          }),
          state === "success" && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(JvCard_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(JvStatusIndicator_default, {
                variant: "positive",
                label: "Setup complete!",
                context: "Your data has been synced \u2014 you can start asking questions right away."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_ui20.Inline, {
                css: { color: "secondary" },
                children: "Open the Javelin drawer from any page in your Stripe Dashboard to get started."
              })
            ]
          }),
          state === "error" && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(JvCard_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(JvStatusIndicator_default, {
                variant: "negative",
                label: "Setup failed",
                context: errorMessage
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(JvActionBar_default, {
                primary: { label: "Retry", onPress: handleRetry }
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
  var BUILD_TIME = "2026-04-10 15:47:49.078249 -0300 -03 m=+0.602241626";
  var manifest_default = {
    "$schema": "https://stripe.com/stripe-app.schema.json",
    "allowed_redirect_uris": [
      "https://dashboard.stripe.com/test/apps-oauth/com.javelin.analytics",
      "https://dashboard.stripe.com/apps-oauth/com.javelin.analytics"
    ],
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
    "post_install_action": {
      "type": "onboarding"
    },
    "sandbox_install_compatible": true,
    "stripe_api_access_type": "oauth",
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1/",
          "https://openrouter.ai/api/",
          "https://api.openai.com/v1/"
        ],
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
    "version": "0.0.16"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvX2VuZHBvaW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoVmlhRnJhbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFIb3N0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9DaGF0Vmlldy50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdFRocmVhZC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJ1YmJsZS50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvYnJhbmQvSnZTZWN0aW9uSGVhZGVyLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9icmFuZC9KdkNhcmQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL2JyYW5kL0p2U3RhdHVzSW5kaWNhdG9yLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9icmFuZC9KdkVtcHR5U3RhdGUudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL2JyYW5kL0p2TWV0cmljRGlzcGxheS50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvYnJhbmQvSnZBY3Rpb25CYXIudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL2JyYW5kL0p2Q29uZmlybWF0aW9uUHJvbXB0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9icmFuZC9KdkZyZXNobmVzc0luZGljYXRvci50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvYnJhbmQvSnZMb2FkaW5nU3RhdGUudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL2JyYW5kL0p2UHJvbXB0U3VnZ2VzdGlvbnMudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0luc2lnaHRDYXJkLnRzeCIsICIuLi9zcmMvbGliL2FwaS1jbGllbnQudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2xhcmlmaWNhdGlvblByb21wdC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ2hhdElucHV0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9XZWxjb21lUHJvbXB0LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeCIsICIuLi9zcmMvaG9va3MvdXNlQXV0aFN0YXR1cy50cyIsICIuLi9zcmMvdmlld3MvU2V0dGluZ3NWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU0RLX1ZFUlNJT04gPSB2b2lkIDA7XG5leHBvcnRzLlNES19WRVJTSU9OID0gJzkuMS4wJztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGVIZWFkZXJDZWxsID0gZXhwb3J0cy5UYWJsZUhlYWQgPSBleHBvcnRzLlRhYmxlRm9vdGVyID0gZXhwb3J0cy5UYWJsZUNlbGwgPSBleHBvcnRzLlRhYmxlQm9keSA9IGV4cG9ydHMuVGFiID0gZXhwb3J0cy5UYWJQYW5lbHMgPSBleHBvcnRzLlRhYlBhbmVsID0gZXhwb3J0cy5UYWJMaXN0ID0gZXhwb3J0cy5Td2l0Y2ggPSBleHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuU3BhcmtsaW5lID0gZXhwb3J0cy5TaWduSW5WaWV3ID0gZXhwb3J0cy5TZXR0aW5nc1ZpZXcgPSBleHBvcnRzLlNlbGVjdCA9IGV4cG9ydHMuUmFkaW8gPSBleHBvcnRzLlByb3BlcnR5TGlzdCA9IGV4cG9ydHMuUHJvcGVydHlMaXN0SXRlbSA9IGV4cG9ydHMuUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGV4cG9ydHMuT25ib2FyZGluZ1ZpZXcgPSBleHBvcnRzLk1lbnUgPSBleHBvcnRzLk1lbnVJdGVtID0gZXhwb3J0cy5NZW51R3JvdXAgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLkxpc3RJdGVtID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5MaW5lQ2hhcnQgPSBleHBvcnRzLklubGluZSA9IGV4cG9ydHMuSW1nID0gZXhwb3J0cy5JY29uID0gZXhwb3J0cy5Gb3JtRmllbGRHcm91cCA9IGV4cG9ydHMuRm9jdXNWaWV3ID0gZXhwb3J0cy5EaXZpZGVyID0gZXhwb3J0cy5EZXRhaWxQYWdlVGFibGUgPSBleHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBleHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBleHBvcnRzLkRhdGVGaWVsZCA9IGV4cG9ydHMuQ29udGV4dFZpZXcgPSBleHBvcnRzLkNoaXAgPSBleHBvcnRzLkNoaXBMaXN0ID0gZXhwb3J0cy5DaGVja2JveCA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5CdXR0b25Hcm91cCA9IGV4cG9ydHMuQm94ID0gZXhwb3J0cy5CYXJDaGFydCA9IGV4cG9ydHMuQmFubmVyID0gZXhwb3J0cy5CYWRnZSA9IGV4cG9ydHMuQWNjb3JkaW9uID0gZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gdm9pZCAwO1xuZXhwb3J0cy5Ub29sdGlwID0gZXhwb3J0cy5UZXh0RmllbGQgPSBleHBvcnRzLlRleHRBcmVhID0gZXhwb3J0cy5UYXNrTGlzdCA9IGV4cG9ydHMuVGFza0xpc3RJdGVtID0gZXhwb3J0cy5UYWJzID0gZXhwb3J0cy5UYWJsZVJvdyA9IGV4cG9ydHMuVGFibGUgPSB2b2lkIDA7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJAcmVtb3RlLXVpL3JlYWN0XCIpO1xuY29uc3QgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL3ZlcnNpb25cIik7XG5jb25zdCB3aXRoU2RrUHJvcHMgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgV2l0aFNka1Byb3BzID0gKHByb3BzKSA9PiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShDb21wb25lbnQsIHsgLi4ucHJvcHMsIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSwgc2RrVmVyc2lvbjogdmVyc2lvbl8xLlNES19WRVJTSU9OLCBzY2hlbWFWZXJzaW9uOiBcInY5XCIgfSkpO1xuICAgIFdpdGhTZGtQcm9wcy53cmFwcGVkQ29tcG9uZW50TmFtZSA9IHdyYXBwZWRDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBXaXRoU2RrUHJvcHM7XG59O1xuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGZyYWdtZW50UHJvcHMsIHdyYXBXaXRoU2RrUHJvcHMpID0+IHtcbiAgICBjb25zdCByZW1vdGVDb21wb25lbnQgPSAoMCwgcmVhY3RfMS5jcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCkobmFtZSwge1xuICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgIH0pO1xuICAgIGlmICghd3JhcFdpdGhTZGtQcm9wcykge1xuICAgICAgICByZXR1cm4gcmVtb3RlQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFNka1Byb3BzKHJlbW90ZUNvbXBvbmVudCk7XG59O1xuZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb25JdGVtJywgWyd0aXRsZScsICdhY3Rpb25zJywgJ21lZGlhJywgJ3N1YnRpdGxlJ10sIHRydWUpO1xuZXhwb3J0cy5BY2NvcmRpb24gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFkZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0JhZGdlJywgW10sIHRydWUpO1xuZXhwb3J0cy5CYW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ0Jhbm5lcicsIFsnYWN0aW9ucycsICdkZXNjcmlwdGlvbicsICd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQmFyQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0JhckNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5Cb3ggPSBkZWZpbmVDb21wb25lbnQoJ0JveCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbkdyb3VwJywgWydtZW51VHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoZWNrYm94ID0gZGVmaW5lQ29tcG9uZW50KCdDaGVja2JveCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ2hpcCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ29udGV4dFZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0NvbnRleHRWaWV3JywgWydhY3Rpb25zJywgJ2Jhbm5lcicsICdmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0cy5EYXRlRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VNb2R1bGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZVRhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5EaXZpZGVyID0gZGVmaW5lQ29tcG9uZW50KCdEaXZpZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Gb2N1c1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0ZvY3VzVmlldycsIFsnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0Zvcm1GaWVsZEdyb3VwJywgW10sIHRydWUpO1xuZXhwb3J0cy5JY29uID0gZGVmaW5lQ29tcG9uZW50KCdJY29uJywgW10sIHRydWUpO1xuZXhwb3J0cy5JbWcgPSBkZWZpbmVDb21wb25lbnQoJ0ltZycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSW5saW5lID0gZGVmaW5lQ29tcG9uZW50KCdJbmxpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkxpbmVDaGFydCA9IGRlZmluZUNvbXBvbmVudCgnTGluZUNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5MaW5rID0gZGVmaW5lQ29tcG9uZW50KCdMaW5rJywgW10sIHRydWUpO1xuZXhwb3J0cy5MaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTGlzdEl0ZW0nLCBbJ2ljb24nLCAnaW1hZ2UnLCAnc2Vjb25kYXJ5VGl0bGUnLCAndGl0bGUnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnRzLkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnVHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnTWVudUdyb3VwJywgWyd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuTWVudUl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ01lbnVJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0cy5NZW51ID0gZGVmaW5lQ29tcG9uZW50KCdNZW51JywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuZXhwb3J0cy5PbmJvYXJkaW5nVmlldyA9IGRlZmluZUNvbXBvbmVudCgnT25ib2FyZGluZ1ZpZXcnLCBbJ2Vycm9yJ10sIHRydWUpO1xuZXhwb3J0cy5QbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdQbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3JywgW10sIHRydWUpO1xuZXhwb3J0cy5Qcm9wZXJ0eUxpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3RJdGVtJywgWydsYWJlbCcsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydHMuUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlJhZGlvID0gZGVmaW5lQ29tcG9uZW50KCdSYWRpbycsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlNlbGVjdCA9IGRlZmluZUNvbXBvbmVudCgnU2VsZWN0JywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTZXR0aW5nc1ZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNpZ25JblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NpZ25JblZpZXcnLCBbJ2Rlc2NyaXB0aW9uQWN0aW9uQ29udGVudHMnLCAnZm9vdGVyQ29udGVudCddLCB0cnVlKTtcbmV4cG9ydHMuU3BhcmtsaW5lID0gZGVmaW5lQ29tcG9uZW50KCdTcGFya2xpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlNwaW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ1NwaW5uZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlN0cmlwZUZpbGVVcGxvYWRlciA9IGRlZmluZUNvbXBvbmVudCgnU3RyaXBlRmlsZVVwbG9hZGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5Td2l0Y2ggPSBkZWZpbmVDb21wb25lbnQoJ1N3aXRjaCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1RhYkxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYlBhbmVsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFiUGFuZWxzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbHMnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYiA9IGRlZmluZUNvbXBvbmVudCgnVGFiJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUJvZHkgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQm9keScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlRm9vdGVyID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUZvb3RlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVIZWFkID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWQnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkZXJDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlUm93ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZVJvdycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFicyA9IGRlZmluZUNvbXBvbmVudCgnVGFicycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFza0xpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdEl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhc2tMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEFyZWEgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRBcmVhJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVGV4dEZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0RmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5Ub29sdGlwID0gZGVmaW5lQ29tcG9uZW50KCdUb29sdGlwJywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuIiwgIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUHJpdmF0ZSEgVGhpcyBhbGxvd3MgdGhlIHNoYXJlZCBlbmRwb2ludCB0byBiZSBpbnRpYWxpemVkXG4gKiBzbyB0aGF0IHRoZSBTREsgY2FuIGNvbW11bmljYXRlIHdpdGggdGhlIERhc2hib2FyZC5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRIb3N0RW5kcG9pbnQgPSB2b2lkIDA7XG5jb25zdCBpbnZhcmlhbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW52YXJpYW50XCIpKTtcbmNvbnN0IGdldEhvc3RFbmRwb2ludCA9ICgpID0+IHtcbiAgICAvLyBUaGlzIGlzIGVuZHBvaW50IGlzIGNyZWF0ZWQgZnJvbSB0aGUgTWVzc2FnZVBvcnQgdHJhbnNmZXJyZWQgZnJvbSB0aGUgaG9zdCBlbnZcbiAgICAvLyBhcyBhIHBhcnQgb2YgdGhlIGBpbml0X2V4dGVuc2lvbmAgbWVzc2FnZS5cbiAgICBjb25zdCBob3N0RW5kcG9pbnQgPSBnbG9iYWxUaGlzLl9fU3RyaXBlRXh0RXhwb3J0cz8uZW5kcG9pbnQ7XG4gICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKGhvc3RFbmRwb2ludCwgJ2hvc3RFbmRwb2ludCBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQnKTtcbiAgICByZXR1cm4gaG9zdEVuZHBvaW50O1xufTtcbmV4cG9ydHMuZ2V0SG9zdEVuZHBvaW50ID0gZ2V0SG9zdEVuZHBvaW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuLi9fZW5kcG9pbnRcIik7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpXG4gICAgLmNhbGwuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KClcbiAgICAudGhlbigoc3VwcG9ydGVkKSA9PiBzdXBwb3J0ZWQpXG4gICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbmV4cG9ydHMuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaEFwcEVtYmVkZGVkS2V5ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hBcHBFbWJlZGRlZEtleSgpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZldGNoIGFwcCBlbWJlZGRlZCBrZXknKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaUtleTtcbn07XG5leHBvcnRzLmZldGNoQXBwRW1iZWRkZWRLZXkgPSBmZXRjaEFwcEVtYmVkZGVkS2V5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gdm9pZCAwO1xuY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleV8xID0gcmVxdWlyZShcIi4vZmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWUgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCAoMCwgZmV0Y2hBcHBFbWJlZGRlZEtleV8xLmZldGNoQXBwRW1iZWRkZWRLZXkpKCk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgc2VyaWFsaXphYmxlUmVzcG9uc2UgPSB7XG4gICAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyYXlCdWZmZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgb2s6IHJlc3BvbnNlLm9rLFxuICAgICAgICByZWRpcmVjdGVkOiByZXNwb25zZS5yZWRpcmVjdGVkLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgdXJsOiByZXNwb25zZS51cmwsXG4gICAgfTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXphYmxlUmVzcG9uc2U7XG59O1xuZXhwb3J0cy5mZXRjaFZpYUZyYW1lID0gZmV0Y2hWaWFGcmFtZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hWaWFIb3N0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hWaWFIb3N0ID0gYXN5bmMgKGVuY29kZWRVcmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5jb2RlZFVybCk7XG4gICAgcmV0dXJuICgwLCBfZW5kcG9pbnRfMS5nZXRIb3N0RW5kcG9pbnQpKCkuY2FsbC5zdHJpcGVBcGlGZXRjaCh1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLmZldGNoVmlhSG9zdCA9IGZldGNoVmlhSG9zdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMSA9IHJlcXVpcmUoXCIuL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGZldGNoVmlhRnJhbWVfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhRnJhbWVcIik7XG5jb25zdCBmZXRjaFZpYUhvc3RfMSA9IHJlcXVpcmUoXCIuL2ZldGNoVmlhSG9zdFwiKTtcbmxldCBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gbnVsbDtcbmNvbnN0IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCkge1xuICAgICAgICBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gKGF3YWl0ICgwLCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlfMS5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkpKCkpXG4gICAgICAgICAgICA/IGZldGNoVmlhRnJhbWVfMS5mZXRjaFZpYUZyYW1lXG4gICAgICAgICAgICA6IGZldGNoVmlhSG9zdF8xLmZldGNoVmlhSG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2g7XG59O1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IHZvaWQgMDtcbnZhciBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaDsgfSB9KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHN0cmlwZUFwaUZldGNoID0gYXN5bmMgKHBhdGgsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcmVmZXJyZWRGZXRjaE1ldGhvZCA9IGF3YWl0ICgwLCBhcGlfMS5zZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCkoKTtcbiAgICByZXR1cm4gcHJlZmVycmVkRmV0Y2hNZXRob2QocGF0aCwgb3B0aW9ucyk7XG59O1xuZXhwb3J0cy5zdHJpcGVBcGlGZXRjaCA9IHN0cmlwZUFwaUZldGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGV4cG9ydHMuQVVUSE9SSVpBVElPTl9IRUFERVIgPSBleHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBleHBvcnRzLlNUUklQRV9BUElfS0VZID0gZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IHZvaWQgMDtcbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBIdHRwQ2xpZW50IHRoYXQgY2FuIGJlIHBsdWdnZWQgaW50byBzdHJpcGUtbm9kZVxuICogdGhhdCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIHVzZSBzdHJpcGUtbm9kZSBpbiBleHRlbnNpb25zIGlmIHRoZSBEYXNoYm9hcmRcbiAqIHByb3ZpZGVzIGEgYHN0cmlwZUFwaUZldGNoYCBmdW5jdGlvbiB0aGF0IHdpbGwgcmVsYXkgQVBJIGNhbGxzIHRocm91Z2ggdGhlXG4gKiBEYXNoYm9hcmQgYW5kIHBpZ2d5IGJhY2sgb24gdGhlIHVzZXIncyBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqL1xuY29uc3QgaW52YXJpYW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5jb25zdCBhcGlGZXRjaF8xID0gcmVxdWlyZShcIi4vYXBpRmV0Y2hcIik7XG5jb25zdCBtYXRjaGVzU3RyaXBlS2V5ID0gL1twc11rXyh0ZXN0fGxpdmUpX1tBLVphLXowLTldKy87XG5jbGFzcyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwKSB7XG4gICAgICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICAgIH1cbiAgICBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5oZWFkZXJzO1xuICAgIH1cbiAgICBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5zdGF0dXM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICB0b1N0cmVhbSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGhhdmUgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIFN0cmlwZSBIVFRQIGNsaWVudCcpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgeyBqc29uIH0gPSB0aGlzLl9yZXNwO1xuICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdSZXNwb25zZSBib2R5IHVuZGVmaW5lZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBTdHJpcGVBcHBzSHR0cENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2ggPSBmZXRjaDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBnZXRDbGllbnROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3N0cmlwZS11aS1leHRlbnNpb24nO1xuICAgIH1cbiAgICBhc3luYyBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgX3RpbWVvdXQpIHtcbiAgICAgICAgKDAsIGludmFyaWFudF8xLmRlZmF1bHQpKHByb3RvY29sID09PSAnaHR0cHMnLCAnTXVzdCB1c2UgaHR0cHMgY29ubmVjdGlvbnMgaW4gVUkgZXh0ZW5zaW9ucycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdERhdGEpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gcmVxdWVzdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICAgICAgaWYgKGF1dGhIZWFkZXIgJiYgbWF0Y2hlc1N0cmlwZUtleS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgYWN0dWFsIHN0cmlwZSBrZXlzIHdoZW4gdXNpbmcgdGhlIFN0cmlwZSBKUyBBUEkgY2xpZW50IHdpdGggVUkgZXh0ZXNpb25zLlxcblxcbiBJbnN0ZWFkLCB1c2UgYFNUUklQRV9BUElfS0VZYCBmcm9tIGBAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnRgIGFzIGEgcGxhY2Vob2xkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YCk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9mZXRjaCh1cmwudG9TdHJpbmcoKSwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIHRpbWVvdXRzLlxuICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUFwcHNIdHRwUmVzcG9uc2UocmVzcCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpcGVBcHBzSHR0cENsaWVudCA9IFN0cmlwZUFwcHNIdHRwQ2xpZW50O1xuLy8gRE8gTk9UIGNoYW5nZSB0aGlzIHN0cmluZyB3aXRob3V0IGEgZGVwcmVjYXRpb24gcGxhbi4gVGhlIHJ1bnRpbWUgY2hlY2tzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoaXNcbi8vIGV4YWN0IHN0cmluZyBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuLy8gU2VlOiBtYW5hZ2UvZnJvbnRlbmQvc3JjL3RhaWxvci9leHRlbnNpb25zL2hvc3QvYXBpX2ZldGNoLmpzXG5leHBvcnRzLlNUUklQRV9BUElfS0VZID0gJ0RPX05PVF9QQVNTX0FfUkVBTF9BUElfS0VZJztcbmNvbnN0IGNyZWF0ZUh0dHBDbGllbnQgPSAoKSA9PiBuZXcgU3RyaXBlQXBwc0h0dHBDbGllbnQoYXBpRmV0Y2hfMS5zdHJpcGVBcGlGZXRjaCk7XG5leHBvcnRzLmNyZWF0ZUh0dHBDbGllbnQgPSBjcmVhdGVIdHRwQ2xpZW50O1xuZXhwb3J0cy5BVVRIT1JJWkFUSU9OX0hFQURFUiA9ICdBdXRob3JpemF0aW9uJztcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9WQUxVRSA9IGBCZWFyZXIgJHtleHBvcnRzLlNUUklQRV9BUElfS0VZfWA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSB2b2lkIDA7XG5jb25zdCBodHRwQ2xpZW50XzEgPSByZXF1aXJlKFwiLi4vaHR0cENsaWVudFwiKTtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoeyBob3N0LCBwb3J0IH0pID0+IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly8ke2hvc3R9OiR7cG9ydH0vdjEvYXBwcy9hcHBfZW1iZWRkZWRfYmFja2VuZF9zaWduYXR1cmVgKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgncGF5bG9hZCcsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGF5bG9hZCB9KSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2luY2x1ZGVfb25seVtdJywgJ3NpZ25hdHVyZScpO1xuICAgIGNvbnN0IGNsaWVudCA9ICgwLCBodHRwQ2xpZW50XzEuY3JlYXRlSHR0cENsaWVudCkoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNsaWVudC5tYWtlUmVxdWVzdChob3N0LCBwb3J0LCB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCAnR0VUJywge30sIG51bGwsICdodHRwcycpO1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAudGhlbigocikgPT4gci50b0pTT04oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc2lnbmF0dXJlKTtcbn07XG5leHBvcnRzLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRDb25uZWN0aW9uU2V0dGluZ3MgPSBleHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3MgPSB7XG4gICAgaG9zdDogJ2FwaS5zdHJpcGUuY29tJyxcbiAgICBwb3J0OiA0NDMsXG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0gZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncztcbmNvbnN0IHNldENvbm5lY3Rpb25TZXR0aW5ncyA9IChzZXR0aW5ncykgPT4ge1xuICAgIGV4cG9ydHMuY29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgICAgICAuLi5kZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzLFxuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICB9O1xufTtcbmV4cG9ydHMuc2V0Q29ubmVjdGlvblNldHRpbmdzID0gc2V0Q29ubmVjdGlvblNldHRpbmdzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFN0cmlwZVNpZ25hdHVyZSA9IHZvaWQgMDtcbmNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHlfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZS9jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5XCIpO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEgPSByZXF1aXJlKFwiLi9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XCIpO1xuY29uc3QgY29ubmVjdGlvblNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzXCIpO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGFzeW5jIChhZGRpdGlvbmFsUGF5bG9hZCkgPT4ge1xuICAgIGlmIChhd2FpdCAoMCwgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KSgpKSB7XG4gICAgICAgIGNvbnN0IGZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoMCwgY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseV8xLmNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkpKGNvbm5lY3Rpb25TZXR0aW5nc18xLmNvbm5lY3Rpb25TZXR0aW5ncyk7XG4gICAgICAgIHJldHVybiBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuZmV0Y2hTdHJpcGVTaWduYXR1cmUoYWRkaXRpb25hbFBheWxvYWQpO1xuICAgIH1cbn07XG5leHBvcnRzLmZldGNoU3RyaXBlU2lnbmF0dXJlID0gZmV0Y2hTdHJpcGVTaWduYXR1cmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGZpbGUgbW92ZWQgdG8gdXRpbHM7IHJlLWV4cG9ydGVkIHRvIG5vdCBicmVhayBpbXBvcnRzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NpZ25hdHVyZVwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpZ25hdHVyZV8xLmZldGNoU3RyaXBlU2lnbmF0dXJlO1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgQ2hhdFZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL0NoYXRWaWV3JztpbXBvcnQgU2V0dGluZ3NWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9TZXR0aW5nc1ZpZXcnO2ltcG9ydCBPbmJvYXJkaW5nVmlldyBmcm9tICcuLi9zcmMvdmlld3MvT25ib2FyZGluZ1ZpZXcnO1xuXG5leHBvcnQgKiBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdmVyc2lvbic7XG5leHBvcnQgY29uc3QgQlVJTERfVElNRSA9ICcyMDI2LTA0LTEwIDE1OjQ3OjQ5LjA3ODI0OSAtMDMwMCAtMDMgbT0rMC42MDIyNDE2MjYnO1xuXG5leHBvcnQgeyBcbiAgQ2hhdFZpZXcsXG5cbiAgU2V0dGluZ3NWaWV3LFxuXG4gIE9uYm9hcmRpbmdWaWV3XG4gfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3N0cmlwZS5jb20vc3RyaXBlLWFwcC5zY2hlbWEuanNvblwiLFxuICBcImFsbG93ZWRfcmVkaXJlY3RfdXJpc1wiOiBbXG4gICAgXCJodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tL3Rlc3QvYXBwcy1vYXV0aC9jb20uamF2ZWxpbi5hbmFseXRpY3NcIixcbiAgICBcImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vYXBwcy1vYXV0aC9jb20uamF2ZWxpbi5hbmFseXRpY3NcIlxuICBdLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uamF2ZWxpbi5hbmFseXRpY3NcIixcbiAgXCJuYW1lXCI6IFwiSmF2ZWxpblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGRhdGEgdG8gY2FsY3VsYXRlIGJ1c2luZXNzIG1ldHJpY3MgYW5kIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgeW91ciBjdXN0b21lciBiYXNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImludm9pY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBpbnZvaWNlIGRhdGEgdG8gY2FsY3VsYXRlIHJldmVudWUsIE1SUiwgYW5kIG90aGVyIGJpbGxpbmcgbWV0cmljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBjaGFyZ2UgZGF0YSB0byBhbmFseXplIHBheW1lbnQgdm9sdW1lIGFuZCByZXZlbnVlIHRyZW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzdWJzY3JpcHRpb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBzdWJzY3JpcHRpb24gZGF0YSB0byBjYWxjdWxhdGUgTVJSLCBjaHVybiByYXRlLCBhbmQgc3Vic2NyaXB0aW9uIGFuYWx5dGljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgcHJvZHVjdCBkYXRhIHRvIGJyZWFrIGRvd24gcmV2ZW51ZSBhbmQgbWV0cmljcyBieSBwcm9kdWN0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBsYW5fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwcmljZSBhbmQgcGxhbiBkYXRhIHRvIGFuYWx5emUgcGxhbi1sZXZlbCByZXZlbnVlIGFuZCBzdWJzY3JpYmVyIGNvdW50c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlIGFuZCBtYW5hZ2UgT0F1dGggdG9rZW5zIHNlY3VyZWx5IHZpYSB0aGUgU2VjcmV0IFN0b3JlIEFQSVwiXG4gICAgfVxuICBdLFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjoge1xuICAgIFwidHlwZVwiOiBcIm9uYm9hcmRpbmdcIlxuICB9LFxuICBcInNhbmRib3hfaW5zdGFsbF9jb21wYXRpYmxlXCI6IHRydWUsXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcIm9hdXRoXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vdGVjdnljcG16Y3h4b3FtdHR0ankuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL1wiLFxuICAgICAgICBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9cIlxuICAgICAgXSxcbiAgICAgIFwicHVycG9zZVwiOiBcIkNvbm5lY3QgdG8gU3VwYWJhc2UgYmFja2VuZCBmb3IgZGF0YSBwcm9jZXNzaW5nIGFuZCBMTE0gcHJvdmlkZXIgZm9yIEFJLXBvd2VyZWQgYnVzaW5lc3MgaW50ZWxsaWdlbmNlXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkNoYXRWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiU2V0dGluZ3NWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzZXR0aW5nc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIk9uYm9hcmRpbmdWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJvbmJvYXJkaW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xNlwiXG59O1xuIiwgImltcG9ydCB7IENvbnRleHRWaWV3LCBCb3gsIEJ1dHRvbiwgQmFubmVyIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGF0VGhyZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdFRocmVhZCc7XG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdElucHV0JztcbmltcG9ydCBXZWxjb21lUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvV2VsY29tZVByb21wdCc7XG5pbXBvcnQgQ29udmVyc2F0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50LCBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXR1cyB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGhTdGF0dXMnO1xuaW1wb3J0IHsgSnZMb2FkaW5nU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kJztcblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBpZDogc3RyaW5nO1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmcmVzaG5lc3M/OiB7IHR5cGU6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xuICBpbnNpZ2h0cz86IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+O1xuICBjbGFyaWZpY2F0aW9uPzoge1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgb3B0aW9uczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+O1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbnR5cGUgVmlld1N0YXRlID0gJ2xvYWRpbmcnIHwgJ2VtcHR5JyB8ICdjaGF0JyB8ICdlcnJvcic7XG50eXBlIFN5bmNNZXRob2QgPSAnYmFja2VuZCcgfCBudWxsO1xuXG5jb25zdCBDaGF0VmlldyA9ICh7IHVzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAvLyBJbml0aWFsaXplIEFQSSBjbGllbnQgd2l0aCBTdHJpcGUgY29udGV4dCBmb3Igc2lnbmF0dXJlIHZlcmlmaWNhdGlvblxuICBpZiAodXNlckNvbnRleHQ/LmlkICYmIHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xuICAgIGluaXRBcGlDbGllbnQodXNlckNvbnRleHQuaWQsIHVzZXJDb250ZXh0LmFjY291bnQuaWQpO1xuICB9XG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KCdsb2FkaW5nJyk7XG4gIGNvbnN0IFtjb252ZXJzYXRpb25zLCBzZXRDb252ZXJzYXRpb25zXSA9IHVzZVN0YXRlPENvbnZlcnNhdGlvbltdPihbXSk7XG4gIGNvbnN0IFthY3RpdmVDb252ZXJzYXRpb25JZCwgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtpc1RoaW5raW5nLCBzZXRJc1RoaW5raW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RoaW5raW5nU3RhcnRlZEF0LCBzZXRUaGlua2luZ1N0YXJ0ZWRBdF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt3ZWxjb21lSW5zaWdodHMsIHNldFdlbGNvbWVJbnNpZ2h0c10gPSB1c2VTdGF0ZTxBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pj4oW10pO1xuICBjb25zdCBbc2hvd0NvbnZlcnNhdGlvbkxpc3QsIHNldFNob3dDb252ZXJzYXRpb25MaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N5bmNDb21wbGV0ZSwgc2V0U3luY0NvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N5bmNNZXRob2QsIHNldFN5bmNNZXRob2RdID0gdXNlU3RhdGU8U3luY01ldGhvZD4obnVsbCk7XG5cbiAgY29uc3QgeyBhdXRoU3RhdHVzLCBjaGVja0F1dGggfSA9IHVzZUF1dGhTdGF0dXMoKTtcbiAgY29uc3Qgc3luY0NoZWNrZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IGxvYWRXZWxjb21lSW5zaWdodHMgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHsgaW5zaWdodHM6IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+IH0+KFxuICAgICAgICAnL2luc2lnaHRzLXdlbGNvbWUnLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGluc2lnaHRzID0gcmVzcG9uc2UuZGF0YT8uaW5zaWdodHMgfHwgW107XG4gICAgICBzZXRXZWxjb21lSW5zaWdodHMoaW5zaWdodHMpO1xuICAgICAgcmV0dXJuIGluc2lnaHRzLmxlbmd0aCA+IDA7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vIEF1dGgtYXdhcmUgc3luYzogY2hlY2sgdG9rZW4gaGVhbHRoLCB1c2UgYmFja2VuZCBzeW5jIG9ubHlcbiAgY29uc3QgYXV0aEF3YXJlU3luYyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoc3luY0NoZWNrZWQuY3VycmVudCkgcmV0dXJuO1xuICAgIHN5bmNDaGVja2VkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgY2hlY2tBdXRoKCk7XG5cbiAgICBpZiAoc3RhdHVzLnN0YXRlID09PSAnaGVhbHRoeScpIHtcbiAgICAgIHNldFN5bmNNZXRob2QoJ2JhY2tlbmQnKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtdHJpZ2dlcicsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgICAgIGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgICAgc2V0U3luY0NvbXBsZXRlKHRydWUpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEJhY2tlbmQgc3luYyB0cmlnZ2VyIGZhaWxlZCBcdTIwMTQgc3RpbGwgdHJ5IGxvYWRpbmcgaW5zaWdodHMgZnJvbSBjYWNoZWQgZGF0YVxuICAgICAgICBzZXRTeW5jQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgIGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0ZSA9PT0gJ3VucmVhY2hhYmxlJykge1xuICAgICAgLy8gQmFja2VuZCBpcyBkb3duIGVudGlyZWx5XG4gICAgICBzZXRTeW5jQ29tcGxldGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIHZhbGlkIHRva2VuIChtaXNzaW5nL2V4cGlyZWQvZXJyb3IpIFx1MjAxNCB1c2VyIG5lZWRzIHRvIHJlLWF1dGhvcml6ZVxuICAgICAgc2V0U3luY0NvbXBsZXRlKHRydWUpO1xuICAgIH1cbiAgfSwgW2NoZWNrQXV0aF0pO1xuXG4gIGNvbnN0IGxvYWRDb252ZXJzYXRpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudDx7IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbltdIH0+KCcvY2hhdC1jb252ZXJzYXRpb25zJyk7XG4gICAgICBjb25zdCBjb252b3MgPSByZXNwb25zZS5kYXRhPy5jb252ZXJzYXRpb25zIHx8IFtdO1xuICAgICAgc2V0Q29udmVyc2F0aW9ucyhjb252b3MpO1xuXG4gICAgICBpZiAoY29udm9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZXRWaWV3U3RhdGUoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIHRoZSBtb3N0IHJlY2VudCBjb252ZXJzYXRpb25cbiAgICAgICAgYXdhaXQgbG9hZENvbnZlcnNhdGlvbihjb252b3NbMF0uaWQpO1xuICAgICAgICBzZXRWaWV3U3RhdGUoJ2NoYXQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBPbiBtb3VudDogbG9hZCBjb252ZXJzYXRpb25zIEFORCBhdXRoLWF3YXJlIHN5bmMgaW4gcGFyYWxsZWxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ29udmVyc2F0aW9ucygpO1xuICAgIGF1dGhBd2FyZVN5bmMoKTtcbiAgfSwgW2xvYWRDb252ZXJzYXRpb25zLCBhdXRoQXdhcmVTeW5jXSk7XG5cbiAgY29uc3QgbG9hZENvbnZlcnNhdGlvbiA9IGFzeW5jIChjb252ZXJzYXRpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHtcbiAgICAgICAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG4gICAgICAgIG1lc3NhZ2VzOiBBcnJheTx7XG4gICAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgfT47XG4gICAgICB9PihgL2NoYXQtY29udmVyc2F0aW9uLWRldGFpbD9jb252ZXJzYXRpb25JZD0ke2NvbnZlcnNhdGlvbklkfWApO1xuXG4gICAgICBjb25zdCBtc2dzOiBNZXNzYWdlW10gPSAocmVzcG9uc2UuZGF0YT8ubWVzc2FnZXMgfHwgW10pLm1hcCgobSkgPT4gKHtcbiAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgIHJvbGU6IG0ucm9sZSxcbiAgICAgICAgY29udGVudDogbS5jb250ZW50LFxuICAgICAgICBmcmVzaG5lc3M6IG0ubWV0YWRhdGE/LmZyZXNobmVzcyBhcyBNZXNzYWdlWydmcmVzaG5lc3MnXSxcbiAgICAgICAgaW5zaWdodHM6IG0ubWV0YWRhdGE/Lmluc2lnaHRzIGFzIE1lc3NhZ2VbJ2luc2lnaHRzJ10sXG4gICAgICB9KSk7XG5cbiAgICAgIHNldE1lc3NhZ2VzKG1zZ3MpO1xuICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQoY29udmVyc2F0aW9uSWQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNvbnZlcnNhdGlvbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICAvLyBBZGQgdXNlciBtZXNzYWdlIHRvIFVJIGltbWVkaWF0ZWx5XG4gICAgICBjb25zdCB0ZW1wVXNlck1zZ0lkID0gYHRlbXAtJHtEYXRlLm5vdygpfWA7XG4gICAgICBjb25zdCB1c2VyTWVzc2FnZTogTWVzc2FnZSA9IHtcbiAgICAgICAgaWQ6IHRlbXBVc2VyTXNnSWQsXG4gICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH07XG4gICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIHVzZXJNZXNzYWdlXSk7XG4gICAgICBzZXRWaWV3U3RhdGUoJ2NoYXQnKTtcbiAgICAgIHNldElzVGhpbmtpbmcodHJ1ZSk7XG4gICAgICBzZXRUaGlua2luZ1N0YXJ0ZWRBdChEYXRlLm5vdygpKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8e1xuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgIH07XG4gICAgICAgICAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgICAgICAgICBjb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgICAgICB9PignL2NoYXQtbWVzc2FnZScsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBjb252ZXJzYXRpb25JZDogYWN0aXZlQ29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFzc2lzdGFudE1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UuaWQgfHwgYG1zZy0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhPy5tZXNzYWdlLmNvbnRlbnQgfHwgJ1NvcnJ5LCBJIGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlLicsXG4gICAgICAgICAgZnJlc2huZXNzOiByZXNwb25zZS5tZXRhIGFzIE1lc3NhZ2VbJ2ZyZXNobmVzcyddLFxuICAgICAgICAgIGluc2lnaHRzOiByZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgY29udmVyc2F0aW9uIElEIGlmIG5ldyBjb252ZXJzYXRpb24gd2FzIGNyZWF0ZWRcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LmNvbnZlcnNhdGlvbklkICYmICFhY3RpdmVDb252ZXJzYXRpb25JZCkge1xuICAgICAgICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkKHJlc3BvbnNlLmRhdGEuY29udmVyc2F0aW9uSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBhc3Npc3RhbnRNZXNzYWdlXSk7XG4gICAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgICAgY29uc3QgZXJyb3JPYmogPSBlcnIgYXMgeyBlcnJvcj86IHsgY29kZT86IHN0cmluZzsgbWVzc2FnZT86IHN0cmluZyB9IH07XG4gICAgICAgIGNvbnN0IGNvZGUgPSBlcnJvck9iaj8uZXJyb3I/LmNvZGU7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09ICdhdXRoX3JlZnJlc2hfZmFpbGVkJykge1xuICAgICAgICAgIHNldEVycm9yKCdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSByZS1hdXRob3JpemUgSmF2ZWxpbi4nKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnbGxtX3VuYXZhaWxhYmxlJykge1xuICAgICAgICAgIHNldEVycm9yKCdBSSBzZXJ2aWNlIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbW9tZW50LicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNUaGlua2luZyhmYWxzZSk7XG4gICAgICAgIHNldFRoaW5raW5nU3RhcnRlZEF0KHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbYWN0aXZlQ29udmVyc2F0aW9uSWRdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNsYXJpZmljYXRpb25TZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgc2VuZE1lc3NhZ2UodmFsdWUpO1xuICAgIH0sXG4gICAgW3NlbmRNZXNzYWdlXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVOZXdDb252ZXJzYXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQobnVsbCk7XG4gICAgc2V0TWVzc2FnZXMoW10pO1xuICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSk7XG4gICAgbG9hZFdlbGNvbWVJbnNpZ2h0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0Q29udmVyc2F0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSk7XG4gICAgYXdhaXQgbG9hZENvbnZlcnNhdGlvbihpZCk7XG4gICAgc2V0Vmlld1N0YXRlKCdjaGF0Jyk7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkaW5nIHN0YXRlXG4gIGlmICh2aWV3U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJKYXZlbGluXCI+XG4gICAgICAgIDxKdkxvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiTG9hZGluZyBKYXZlbGluLi4uXCIgLz5cbiAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIkphdmVsaW5cIlxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9eygpID0+IHNldFNob3dDb252ZXJzYXRpb25MaXN0KCh2KSA9PiAhdil9PlxuICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9e2hhbmRsZU5ld0NvbnZlcnNhdGlvbn0+XG4gICAgICAgICAgICBOZXcgY2hhdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBoZWlnaHQ6ICdmaWxsJyB9fT5cbiAgICAgICAgey8qIEVycm9yIHN0YXR1cyAqL31cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgdGl0bGU9e2Vycm9yfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBCYWNrZW5kIHN5bmMgaW4gcHJvZ3Jlc3MgKi99XG4gICAgICAgIHtzeW5jTWV0aG9kID09PSAnYmFja2VuZCcgJiYgIXN5bmNDb21wbGV0ZSAmJiAoXG4gICAgICAgICAgPEp2TG9hZGluZ1N0YXRlIG1lc3NhZ2U9XCJTeW5jaW5nIHlvdXIgZGF0YS4uLlwiIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEF1dGggcmUtYXV0aG9yaXphdGlvbiBzdGF0dXMgKi99XG4gICAgICAgIHsoYXV0aFN0YXR1cy5zdGF0ZSA9PT0gJ21pc3NpbmcnIHx8IGF1dGhTdGF0dXMuc3RhdGUgPT09ICdleHBpcmVkJykgJiYgKFxuICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgIHR5cGU9XCJjYXV0aW9uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQXV0aG9yaXphdGlvbiByZXF1aXJlZFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSByZS1pbnN0YWxsIHRoZSBhcHAgdG8gcmVjb25uZWN0IHlvdXIgYWNjb3VudC5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN5bmMgY29tcGxldGUgKi99XG4gICAgICAgIHtzeW5jQ29tcGxldGUgJiYgc3luY01ldGhvZCA9PT0gJ2JhY2tlbmQnICYmIChcbiAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICB0aXRsZT1cIkRhdGEgc3luY2VkXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91ciBTdHJpcGUgZGF0YSBpcyB1cCB0byBkYXRlLlwiXG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFN5bmNDb21wbGV0ZShmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogQ29udmVyc2F0aW9uIGxpc3QgcGFuZWwgKi99XG4gICAgICAgIHtzaG93Q29udmVyc2F0aW9uTGlzdCAmJiAoXG4gICAgICAgICAgPENvbnZlcnNhdGlvbkxpc3RcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnM9e2NvbnZlcnNhdGlvbnN9XG4gICAgICAgICAgICBhY3RpdmVDb252ZXJzYXRpb25JZD17YWN0aXZlQ29udmVyc2F0aW9uSWR9XG4gICAgICAgICAgICBvblNlbGVjdENvbnZlcnNhdGlvbj17aGFuZGxlU2VsZWN0Q29udmVyc2F0aW9ufVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIE1haW4gY29udGVudCBhcmVhICovfVxuICAgICAgICB7IXNob3dDb252ZXJzYXRpb25MaXN0ICYmIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAge3ZpZXdTdGF0ZSA9PT0gJ2VtcHR5JyAmJiBtZXNzYWdlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8V2VsY29tZVByb21wdCBvblNlbGVjdFByb21wdD17c2VuZE1lc3NhZ2V9IGluc2lnaHRzPXt3ZWxjb21lSW5zaWdodHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDaGF0VGhyZWFkXG4gICAgICAgICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc31cbiAgICAgICAgICAgICAgaXNUaGlua2luZz17aXNUaGlua2luZ31cbiAgICAgICAgICAgICAgdGhpbmtpbmdTdGFydGVkQXQ9e3RoaW5raW5nU3RhcnRlZEF0fVxuICAgICAgICAgICAgICBvbkNsYXJpZmljYXRpb25TZWxlY3Q9e2hhbmRsZUNsYXJpZmljYXRpb25TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94Pn1cblxuICAgICAgICB7LyogQ2hhdCBpbnB1dCBcdTIwMTQgYWx3YXlzIGF2YWlsYWJsZSAqL31cbiAgICAgICAgeyFzaG93Q29udmVyc2F0aW9uTGlzdCAmJiAoXG4gICAgICAgICAgPENoYXRJbnB1dCBvblNlbmQ9e3NlbmRNZXNzYWdlfSBkaXNhYmxlZD17aXNUaGlua2luZ30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0VmlldztcbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IE1lc3NhZ2VCdWJibGUgZnJvbSAnLi9NZXNzYWdlQnViYmxlJztcbmltcG9ydCBJbnNpZ2h0Q2FyZCBmcm9tICcuL0luc2lnaHRDYXJkJztcbmltcG9ydCBDbGFyaWZpY2F0aW9uUHJvbXB0IGZyb20gJy4vQ2xhcmlmaWNhdGlvblByb21wdCc7XG5pbXBvcnQgeyBKdkxvYWRpbmdTdGF0ZSB9IGZyb20gJy4vYnJhbmQnO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZyZXNobmVzcz86IHsgdHlwZTogJ2NhY2hlZCcgfCAnbGl2ZSc7IHN5bmNlZEF0Pzogc3RyaW5nIH07XG4gIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gIGNsYXJpZmljYXRpb24/OiB7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICBvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT47XG4gIH07XG59XG5cbmludGVyZmFjZSBDaGF0VGhyZWFkUHJvcHMge1xuICBtZXNzYWdlczogTWVzc2FnZVtdO1xuICBpc1RoaW5raW5nOiBib29sZWFuO1xuICB0aGlua2luZ1N0YXJ0ZWRBdD86IG51bWJlcjtcbiAgb25DbGFyaWZpY2F0aW9uU2VsZWN0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENoYXRUaHJlYWQgPSAoe1xuICBtZXNzYWdlcyxcbiAgaXNUaGlua2luZyxcbiAgdGhpbmtpbmdTdGFydGVkQXQsXG4gIG9uQ2xhcmlmaWNhdGlvblNlbGVjdCxcbn06IENoYXRUaHJlYWRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgIDxCb3gga2V5PXttZXNzYWdlLmlkfSBjc3M9e3sgc3RhY2s6ICd5JyB9fT5cbiAgICAgICAgICA8TWVzc2FnZUJ1YmJsZVxuICAgICAgICAgICAgcm9sZT17bWVzc2FnZS5yb2xlfVxuICAgICAgICAgICAgY29udGVudD17bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgICAgZnJlc2huZXNzPXttZXNzYWdlLmZyZXNobmVzc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHttZXNzYWdlLmluc2lnaHRzPy5tYXAoKGluc2lnaHQpID0+IChcbiAgICAgICAgICAgIDxJbnNpZ2h0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2luc2lnaHQuaWR9XG4gICAgICAgICAgICAgIGluc2lnaHRJZD17aW5zaWdodC5pZH1cbiAgICAgICAgICAgICAgbWVzc2FnZUlkPXttZXNzYWdlLmlkfVxuICAgICAgICAgICAgICBjb250ZW50PXtpbnNpZ2h0LmNvbnRlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHttZXNzYWdlLmNsYXJpZmljYXRpb24gJiYgb25DbGFyaWZpY2F0aW9uU2VsZWN0ICYmIChcbiAgICAgICAgICAgIDxDbGFyaWZpY2F0aW9uUHJvbXB0XG4gICAgICAgICAgICAgIHF1ZXN0aW9uPXttZXNzYWdlLmNsYXJpZmljYXRpb24ucXVlc3Rpb259XG4gICAgICAgICAgICAgIG9wdGlvbnM9e21lc3NhZ2UuY2xhcmlmaWNhdGlvbi5vcHRpb25zfVxuICAgICAgICAgICAgICBvblNlbGVjdD17b25DbGFyaWZpY2F0aW9uU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgICAge2lzVGhpbmtpbmcgJiYgdGhpbmtpbmdTdGFydGVkQXQgJiYgKFxuICAgICAgICA8SnZMb2FkaW5nU3RhdGUgc3RhcnRlZEF0PXt0aGlua2luZ1N0YXJ0ZWRBdH0gLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0VGhyZWFkO1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBEaXZpZGVyIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IEp2RnJlc2huZXNzSW5kaWNhdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZCc7XG5cbmludGVyZmFjZSBNZXNzYWdlQnViYmxlUHJvcHMge1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmcmVzaG5lc3M/OiB7IHR5cGU6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xufVxuXG5jb25zdCBNZXNzYWdlQnViYmxlID0gKHsgcm9sZSwgY29udGVudCwgZnJlc2huZXNzIH06IE1lc3NhZ2VCdWJibGVQcm9wcykgPT4ge1xuICBjb25zdCBpc1VzZXIgPSByb2xlID09PSAndXNlcic7XG5cbiAgaWYgKGlzVXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICdjb250YWluZXInLCBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnY2FwdGlvbicsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT55b3U8L0lubGluZT5cbiAgICAgICAgPElubGluZT57Y29udGVudH08L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcgfX0+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2NhcHRpb24nLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+SmF2ZWxpbjwvSW5saW5lPlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5MZWZ0OiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmU+e2NvbnRlbnR9PC9JbmxpbmU+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7ZnJlc2huZXNzICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5MZWZ0OiAnc21hbGwnLCBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICAgICAgPEp2RnJlc2huZXNzSW5kaWNhdG9yIHR5cGU9e2ZyZXNobmVzcy50eXBlfSBzeW5jZWRBdD17ZnJlc2huZXNzLnN5bmNlZEF0fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQnViYmxlO1xuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW5saW5lIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIEp2U2VjdGlvbkhlYWRlclByb3BzIHtcbiAgLyoqIFNlY3Rpb24gdGl0bGUuIEtlZXAgdG8gMy01IHdvcmRzLiBCcmFuZCB2b2ljZTogZGlyZWN0LCBzcGVjaWZpYy4gKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIHRyYWlsaW5nIGFjdGlvbiAoQnV0dG9uLCBMaW5rLCBvciBhbnkgU3RyaXBlIGNvbXBvbmVudCkgKi9cbiAgYWN0aW9uPzogUmVhY3ROb2RlO1xuICAvKiogT3B0aW9uYWwgc3VidGl0bGUvZGVzY3JpcHRpb24gYmVsb3cgdGhlIHRpdGxlICovXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBKdlNlY3Rpb25IZWFkZXIgPSAoeyB0aXRsZSwgYWN0aW9uLCBzdWJ0aXRsZSB9OiBKdlNlY3Rpb25IZWFkZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjc3M9e3tcbiAgICAgICAgc3RhY2s6IGFjdGlvbiA/ICd4JyA6ICd5JyxcbiAgICAgICAgZGlzdHJpYnV0ZTogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICBhbGlnblk6ICdjZW50ZXInLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdtZWRpdW0nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnaGVhZGluZycgfX0+e3RpdGxlfTwvSW5saW5lPlxuICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdjYXB0aW9uJywgY29sb3I6ICdzZWNvbmRhcnknIH19PntzdWJ0aXRsZX08L0lubGluZT5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICAge2FjdGlvbn1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEp2U2VjdGlvbkhlYWRlcjtcbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgSnZDYXJkUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICAvKiogT3ZlcnJpZGUgZGVmYXVsdCBwYWRkaW5nIGZvciBkZW5zZSBjb250ZXh0cyAqL1xuICBwYWRkaW5nPzogJ3NtYWxsJyB8ICdtZWRpdW0nO1xuICAvKiogUmVtb3ZlIGJhY2tncm91bmQgZm9yIHRyYW5zcGFyZW50IGNhcmQgKGNvbnRlbnQgZ3JvdXBpbmcgb25seSkgKi9cbiAgdHJhbnNwYXJlbnQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBKdkNhcmQgPSAoeyBjaGlsZHJlbiwgcGFkZGluZyA9ICdtZWRpdW0nLCB0cmFuc3BhcmVudCA9IGZhbHNlIH06IEp2Q2FyZFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17e1xuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50ID8gdW5kZWZpbmVkIDogJ2NvbnRhaW5lcicsXG4gICAgICAgIHN0YWNrOiAneScsXG4gICAgICAgIGdhcDogJ3NtYWxsJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSnZDYXJkO1xuIiwgImltcG9ydCB7IEJhZGdlLCBCb3gsIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5cbmV4cG9ydCB0eXBlIFN0YXR1c1ZhcmlhbnQgPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICd3YXJuaW5nJyB8ICdpbmZvJztcblxuaW50ZXJmYWNlIEp2U3RhdHVzSW5kaWNhdG9yUHJvcHMge1xuICAvKiogU3RhdHVzIHZhcmlhbnQgZGV0ZXJtaW5pbmcgY29sb3IgYW5kIGljb24gdHJlYXRtZW50ICovXG4gIHZhcmlhbnQ6IFN0YXR1c1ZhcmlhbnQ7XG4gIC8qKiBEaXNwbGF5IGxhYmVsLiBCcmFuZCB2b2ljZTogY29uY2lzZSwgc3BlY2lmaWMuIFwiTVJSIHVwIDEyJVwiIG5vdCBcIlBvc2l0aXZlIHRyZW5kIGRldGVjdGVkXCIgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIHNlY29uZGFyeSB0ZXh0IGZvciBjb250ZXh0IChlLmcuLCBcInZzLiBsYXN0IG1vbnRoXCIpICovXG4gIGNvbnRleHQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEp2U3RhdHVzSW5kaWNhdG9yID0gKHsgdmFyaWFudCwgbGFiZWwsIGNvbnRleHQgfTogSnZTdGF0dXNJbmRpY2F0b3JQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICd4c21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxuICAgICAgPEJhZGdlIHR5cGU9e3ZhcmlhbnR9PntsYWJlbH08L0JhZGdlPlxuICAgICAge2NvbnRleHQgJiYgKFxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnY2FwdGlvbicsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57Y29udGV4dH08L0lubGluZT5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdlN0YXR1c0luZGljYXRvcjtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIEp2RW1wdHlTdGF0ZVByb3BzIHtcbiAgLyoqXG4gICAqIFByaW1hcnkgbWVzc2FnZS4gQnJhbmQgdm9pY2U6IGRpcmVjdCwgZm9yd2FyZC1sb29raW5nLlxuICAgKiBHT09EOiBcIk5vIGNvbnZlcnNhdGlvbnMgeWV0XCJcbiAgICogQkFEOiBcIkl0IGxvb2tzIGxpa2UgeW91IGhhdmVuJ3Qgc3RhcnRlZCBhbnkgY29udmVyc2F0aW9uc1wiXG4gICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgICogU3VwcG9ydGluZyB0ZXh0LiBCcmFuZCB2b2ljZTogc3VnZ2VzdCBhY3Rpb24sIGJlIHNwZWNpZmljLlxuICAgKiBHT09EOiBcIkFzayBhIHF1ZXN0aW9uIHRvIGdldCBzdGFydGVkLiBUcnk6ICdXaGF0J3MgbXkgTVJSPydcIlxuICAgKiBCQUQ6IFwiWW91IGNhbiB1c2UgdGhlIGlucHV0IGJlbG93IHRvIGJlZ2luIGEgY29udmVyc2F0aW9uIHdpdGggb3VyIEFJIGFzc2lzdGFudFwiXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIENUQSBidXR0b24gKi9cbiAgYWN0aW9uPzoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb25QcmVzczogKCkgPT4gdm9pZDtcbiAgfTtcbiAgLyoqIE9wdGlvbmFsIHByb21wdCBzdWdnZXN0aW9ucyAocmVuZGVycyBhcyBzZWNvbmRhcnkgYnV0dG9uIHJvdykgKi9cbiAgc3VnZ2VzdGlvbnM/OiBBcnJheTx7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICB9PjtcbiAgLyoqIENhbGxiYWNrIHdoZW4gYSBzdWdnZXN0aW9uIGlzIHNlbGVjdGVkICovXG4gIG9uU2VsZWN0U3VnZ2VzdGlvbj86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBKdkVtcHR5U3RhdGUgPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGFjdGlvbixcbiAgc3VnZ2VzdGlvbnMsXG4gIG9uU2VsZWN0U3VnZ2VzdGlvbixcbn06IEp2RW1wdHlTdGF0ZVByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdsYXJnZScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScsIGFsaWduWDogJ2NlbnRlcicgfX0+XG4gICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19Pnt0aXRsZX08L0lubGluZT5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57ZGVzY3JpcHRpb259PC9JbmxpbmU+XG4gICAgICApfVxuICAgICAge2FjdGlvbiAmJiAoXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXthY3Rpb24ub25QcmVzc30+XG4gICAgICAgICAge2FjdGlvbi5sYWJlbH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAge3N1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgb25TZWxlY3RTdWdnZXN0aW9uICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCB3cmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3N1Z2dlc3Rpb24udmFsdWV9XG4gICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBvblNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdWdnZXN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEp2RW1wdHlTdGF0ZTtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQmFkZ2UgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5leHBvcnQgdHlwZSBUcmVuZERpcmVjdGlvbiA9ICd1cCcgfCAnZG93bicgfCAnZmxhdCc7XG5cbmNvbnN0IFRSRU5EX0JBREdFX1RZUEU6IFJlY29yZDxUcmVuZERpcmVjdGlvbiwgJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCAnaW5mbyc+ID0ge1xuICB1cDogJ3Bvc2l0aXZlJyxcbiAgZG93bjogJ25lZ2F0aXZlJyxcbiAgZmxhdDogJ2luZm8nLFxufTtcblxuaW50ZXJmYWNlIEp2TWV0cmljRGlzcGxheVByb3BzIHtcbiAgLyoqXG4gICAqIE1ldHJpYyBsYWJlbC4gVXNlIFN0cmlwZSdzIHRlcm1pbm9sb2d5IChNUlIsIGNodXJuIHJhdGUsIEFSUFUpLlxuICAgKiBCcmFuZCB2b2ljZTogdXNlIHRoZSBvcGVyYXRvcidzIGxhbmd1YWdlLCBub3QgdGVjaG5pY2FsIGphcmdvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3JtYXR0ZWQgbWV0cmljIHZhbHVlLiBQcmUtZm9ybWF0IHdpdGggY3VycmVuY3kgc3ltYm9scywgcGVyY2VudGFnZXMsIGV0Yy5cbiAgICogVGhlIGNvbXBvbmVudCByZW5kZXJzIHRoaXMgYXMtaXMgXHUyMDE0IGl0IGRvZXMgbm90IGZvcm1hdCBudW1iZXJzLlxuICAgKi9cbiAgdmFsdWU6IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIHRyZW5kIGRpcmVjdGlvbi4gUmVuZGVycyBhIGNvbG9yZWQgYmFkZ2UuICovXG4gIHRyZW5kPzoge1xuICAgIGRpcmVjdGlvbjogVHJlbmREaXJlY3Rpb247XG4gICAgLyoqIFRyZW5kIGxhYmVsLCBlLmcuLCBcIisxMiVcIiBvciBcIi0zLjIlXCIuIEJlIHNwZWNpZmljLiAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gIH07XG4gIC8qKiBPcHRpb25hbCBmcmVzaG5lc3MgaW5kaWNhdG9yICovXG4gIGZyZXNobmVzcz86IHtcbiAgICB0eXBlOiAnbGl2ZScgfCAnY2FjaGVkJztcbiAgICBzeW5jZWRBdD86IHN0cmluZztcbiAgfTtcbiAgLyoqIFNpemUgdmFyaWFudCBcdTIwMTQgJ2RlZmF1bHQnIGZvciBkYXNoYm9hcmQgY2FyZHMsICdjb21wYWN0JyBmb3IgaW5saW5lL3RhYmxlIGNvbnRleHRzICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG59XG5cbmNvbnN0IEp2TWV0cmljRGlzcGxheSA9ICh7XG4gIGxhYmVsLFxuICB2YWx1ZSxcbiAgdHJlbmQsXG4gIGZyZXNobmVzcyxcbiAgc2l6ZSA9ICdkZWZhdWx0Jyxcbn06IEp2TWV0cmljRGlzcGxheVByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB2YWx1ZVdlaWdodCA9IHNpemUgPT09ICdjb21wYWN0JyA/ICdzZW1pYm9sZCcgOiAnYm9sZCc7XG4gIGNvbnN0IGdhcFNpemUgPSBzaXplID09PSAnY29tcGFjdCcgPyAneHhzbWFsbCcgOiAneHNtYWxsJztcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogZ2FwU2l6ZSB9fT5cbiAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdjYXB0aW9uJywgY29sb3I6ICdzZWNvbmRhcnknIH19PntsYWJlbH08L0lubGluZT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogdmFsdWVXZWlnaHQgfX0+e3ZhbHVlfTwvSW5saW5lPlxuICAgICAgICB7dHJlbmQgJiYgKFxuICAgICAgICAgIDxCYWRnZSB0eXBlPXtUUkVORF9CQURHRV9UWVBFW3RyZW5kLmRpcmVjdGlvbl19Pnt0cmVuZC5sYWJlbH08L0JhZGdlPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgICB7ZnJlc2huZXNzICYmIChcbiAgICAgICAgPEJhZGdlIHR5cGU9e2ZyZXNobmVzcy50eXBlID09PSAnbGl2ZScgPyAncG9zaXRpdmUnIDogJ2luZm8nfT5cbiAgICAgICAgICB7ZnJlc2huZXNzLnR5cGUgPT09ICdsaXZlJ1xuICAgICAgICAgICAgPyAnTGl2ZSBkYXRhJ1xuICAgICAgICAgICAgOiBgRGF0YSBhcyBvZiAke2ZyZXNobmVzcy5zeW5jZWRBdCA/IG5ldyBEYXRlKGZyZXNobmVzcy5zeW5jZWRBdCkudG9Mb2NhbGVTdHJpbmcoKSA6ICdjYWNoZSd9YH1cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdk1ldHJpY0Rpc3BsYXk7XG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24sIERpdmlkZXIgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgSnZBY3Rpb25CYXJBY3Rpb24ge1xuICAvKiogQnV0dG9uIGxhYmVsLiBCcmFuZCB2b2ljZTogdmVyYi1maXJzdCwgc3BlY2lmaWMuIFwiVXBkYXRlIDIzIHN1YnNjcmlwdGlvbnNcIiBub3QgXCJTdWJtaXRcIiAqL1xuICBsYWJlbDogc3RyaW5nO1xuICBvblByZXNzOiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBKdkFjdGlvbkJhclByb3BzIHtcbiAgLyoqIFByaW1hcnkgYWN0aW9uLiBSZW5kZXJzIGFzIHR5cGU9XCJwcmltYXJ5XCIgYnV0dG9uLiAqL1xuICBwcmltYXJ5OiBKdkFjdGlvbkJhckFjdGlvbjtcbiAgLyoqIE9wdGlvbmFsIHNlY29uZGFyeSBhY3Rpb24uIFJlbmRlcnMgYXMgdHlwZT1cInNlY29uZGFyeVwiIGJ1dHRvbi4gKi9cbiAgc2Vjb25kYXJ5PzogSnZBY3Rpb25CYXJBY3Rpb247XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXN0cnVjdGl2ZSBhY3Rpb24uIFJlbmRlcnMgYXMgdHlwZT1cImRlc3RydWN0aXZlXCIgYnV0dG9uLlxuICAgKiBWaXN1YWxseSBzZXBhcmF0ZWQgZnJvbSBwcmltYXJ5L3NlY29uZGFyeSB3aXRoIHNwYWNlLWJldHdlZW4gZGlzdHJpYnV0aW9uLlxuICAgKi9cbiAgZGVzdHJ1Y3RpdmU/OiBKdkFjdGlvbkJhckFjdGlvbjtcbiAgLyoqIFNob3cgYSBkaXZpZGVyIGxpbmUgYWJvdmUgdGhlIGFjdGlvbiBiYXIgKi9cbiAgc2hvd0RpdmlkZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBKdkFjdGlvbkJhciA9ICh7XG4gIHByaW1hcnksXG4gIHNlY29uZGFyeSxcbiAgZGVzdHJ1Y3RpdmUsXG4gIHNob3dEaXZpZGVyID0gZmFsc2UsXG59OiBKdkFjdGlvbkJhclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScgfX0+XG4gICAgICB7c2hvd0RpdmlkZXIgJiYgPERpdmlkZXIgLz59XG4gICAgICA8Qm94XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHN0YWNrOiAneCcsXG4gICAgICAgICAgZ2FwOiAnc21hbGwnLFxuICAgICAgICAgIGRpc3RyaWJ1dGU6IGRlc3RydWN0aXZlID8gJ3NwYWNlLWJldHdlZW4nIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGFsaWduWTogJ2NlbnRlcicsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJ21lZGl1bScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtkZXN0cnVjdGl2ZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZXN0cnVjdGl2ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgIG9uUHJlc3M9e2Rlc3RydWN0aXZlLm9uUHJlc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc3RydWN0aXZlLmxhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAge3NlY29uZGFyeSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17c2Vjb25kYXJ5LmRpc2FibGVkfVxuICAgICAgICAgICAgICBvblByZXNzPXtzZWNvbmRhcnkub25QcmVzc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3ByaW1hcnkuZGlzYWJsZWR9XG4gICAgICAgICAgICBvblByZXNzPXtwcmltYXJ5Lm9uUHJlc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnkubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdkFjdGlvbkJhcjtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQmFubmVyLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgSnZDb25maXJtYXRpb25Qcm9tcHRQcm9wcyB7XG4gIC8qKlxuICAgKiBXaGF0IHdpbGwgaGFwcGVuLiBCcmFuZCB2b2ljZTogc3BlY2lmaWMgYW5kIGhvbmVzdC5cbiAgICogR09PRDogXCJVcGRhdGUgMjMgc3Vic2NyaXB0aW9ucyB0byB0aGUgUHJvIHBsYW5cIlxuICAgKiBCQUQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/XCJcbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB3aGF0IGNoYW5nZXMgYW5kIHdoYXQgY2Fubm90IGJlIHVuZG9uZS5cbiAgICogQnJhbmQgdm9pY2U6IGZhY3R1YWwsIGNvbXBsZXRlLCBubyBoZWRnaW5nLlxuICAgKiBHT09EOiBcIlRoaXMgd2lsbCBjaGFuZ2UgdGhlIHBsYW4gZm9yIDIzIGFjdGl2ZSBzdWJzY3JpcHRpb25zLiAyIHN1YnNjcmlwdGlvbnMgd2l0aCBwZW5kaW5nIGludm9pY2VzIHdpbGwgYmUgc2tpcHBlZC4gVGhpcyBhY3Rpb24gY2FuIGJlIHJldmVyc2VkLlwiXG4gICAqIEJBRDogXCJUaGlzIGFjdGlvbiBtYXkgYWZmZWN0IHNvbWUgc3Vic2NyaXB0aW9ucy5cIlxuICAgKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGxpc3Qgb2Ygc3BlY2lmaWMgaXRlbXMgYWZmZWN0ZWQuXG4gICAqIFNob3dzIHVzZXJzIGV4YWN0bHkgd2hhdCB3aWxsIGNoYW5nZSAoU2FnZSB0cmFuc3BhcmVuY3kpLlxuICAgKi9cbiAgYWZmZWN0ZWRJdGVtcz86IEFycmF5PHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGRldGFpbD86IHN0cmluZztcbiAgfT47XG4gIC8qKiBDb25maXJtIGFjdGlvbi4gTGFiZWwgc2hvdWxkIGRlc2NyaWJlIHRoZSBhY3Rpb24sIG5vdCBcIk9LXCIgb3IgXCJZZXNcIi4gKi9cbiAgb25Db25maXJtOiAoKSA9PiB2b2lkO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgLyoqIENhbmNlbCBhY3Rpb24gKi9cbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIGNhbmNlbExhYmVsPzogc3RyaW5nO1xuICAvKiogV2hldGhlciB0aGlzIGlzIGEgZGVzdHJ1Y3RpdmUgKGlycmV2ZXJzaWJsZSkgYWN0aW9uICovXG4gIGRlc3RydWN0aXZlPzogYm9vbGVhbjtcbiAgLyoqIExvYWRpbmcgc3RhdGUgZHVyaW5nIGFjdGlvbiBleGVjdXRpb24gKi9cbiAgbG9hZGluZz86IGJvb2xlYW47XG59XG5cbmNvbnN0IEp2Q29uZmlybWF0aW9uUHJvbXB0ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBhZmZlY3RlZEl0ZW1zLFxuICBvbkNvbmZpcm0sXG4gIGNvbmZpcm1MYWJlbCxcbiAgb25DYW5jZWwsXG4gIGNhbmNlbExhYmVsID0gJ0NhbmNlbCcsXG4gIGRlc3RydWN0aXZlID0gZmFsc2UsXG4gIGxvYWRpbmcgPSBmYWxzZSxcbn06IEp2Q29uZmlybWF0aW9uUHJvbXB0UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIGJhY2tncm91bmRDb2xvcjogJ2NvbnRhaW5lcicsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScgfX0+XG4gICAgICA8QmFubmVyXG4gICAgICAgIHR5cGU9e2Rlc3RydWN0aXZlID8gJ2NyaXRpY2FsJyA6ICdkZWZhdWx0J31cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICAge2FmZmVjdGVkSXRlbXMgJiYgYWZmZWN0ZWRJdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJyB9fT5cbiAgICAgICAgICB7YWZmZWN0ZWRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+e2l0ZW0ubGFiZWx9PC9JbmxpbmU+XG4gICAgICAgICAgICAgIHtpdGVtLmRldGFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PntpdGVtLmRldGFpbH08L0lubGluZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBkaXN0cmlidXRlOiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9e29uQ2FuY2VsfT5cbiAgICAgICAgICB7Y2FuY2VsTGFiZWx9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17ZGVzdHJ1Y3RpdmUgPyAnZGVzdHJ1Y3RpdmUnIDogJ3ByaW1hcnknfVxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgIG9uUHJlc3M9e29uQ29uZmlybX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdkNvbmZpcm1hdGlvblByb21wdDtcbiIsICJpbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5cbmludGVyZmFjZSBKdkZyZXNobmVzc0luZGljYXRvclByb3BzIHtcbiAgdHlwZTogJ2xpdmUnIHwgJ2NhY2hlZCc7XG4gIHN5bmNlZEF0Pzogc3RyaW5nO1xufVxuXG5jb25zdCBKdkZyZXNobmVzc0luZGljYXRvciA9ICh7IHR5cGUsIHN5bmNlZEF0IH06IEp2RnJlc2huZXNzSW5kaWNhdG9yUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGlmICh0eXBlID09PSAnbGl2ZScpIHtcbiAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPkxpdmUgZGF0YTwvQmFkZ2U+O1xuICB9XG4gIGNvbnN0IGxhYmVsID0gc3luY2VkQXRcbiAgICA/IGBEYXRhIGFzIG9mICR7bmV3IERhdGUoc3luY2VkQXQpLnRvTG9jYWxlU3RyaW5nKCl9YFxuICAgIDogJ0RhdGEgYXMgb2YgY2FjaGUnO1xuICByZXR1cm4gPEJhZGdlIHR5cGU9XCJpbmZvXCI+e2xhYmVsfTwvQmFkZ2U+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSnZGcmVzaG5lc3NJbmRpY2F0b3I7XG4iLCAiaW1wb3J0IHsgQm94LCBTcGlubmVyLCBJbmxpbmUsIEJhbm5lciB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSnZMb2FkaW5nU3RhdGVQcm9wcyB7XG4gIC8qKiBJbml0aWFsIHN0YXR1cyBtZXNzYWdlLiBCcmFuZCB2b2ljZTogc3BlY2lmaWMgYWJvdXQgd2hhdCBpcyBoYXBwZW5pbmcuICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiBsb2FkaW5nIHN0YXJ0ZWQgKGVuYWJsZXMgcHJvZ3Jlc3NpdmUgbWVzc2FnaW5nIGFmdGVyIDVzKSAqL1xuICBzdGFydGVkQXQ/OiBudW1iZXI7XG4gIC8qKiBGb3JjZSB0aGUgZXh0ZW5kZWQtd2FpdCBiYW5uZXIgdmlzaWJsZSAodXNlZnVsIGZvciB0ZXN0aW5nKSAqL1xuICBzaG93RXh0ZW5kZWRXYWl0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgSnZMb2FkaW5nU3RhdGUgPSAoe1xuICBtZXNzYWdlID0gJ0FuYWx5emluZyB5b3VyIGRhdGEuLi4nLFxuICBzdGFydGVkQXQsXG4gIHNob3dFeHRlbmRlZFdhaXQgPSBmYWxzZSxcbn06IEp2TG9hZGluZ1N0YXRlUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdGFydGVkQXQpIHJldHVybjtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEVsYXBzZWQoTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCkgLyAxMDAwKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbc3RhcnRlZEF0XSk7XG5cbiAgY29uc3QgaXNFeHRlbmRlZCA9IHNob3dFeHRlbmRlZFdhaXQgfHwgKHN0YXJ0ZWRBdCAhPT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPj0gNSk7XG4gIGNvbnN0IHN0YXR1c1RleHQgPSBpc0V4dGVuZGVkID8gJ0ZldGNoaW5nIGZyZXNoIGRhdGEgZnJvbSBTdHJpcGUuLi4nIDogbWVzc2FnZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57c3RhdHVzVGV4dH08L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICAge2lzRXh0ZW5kZWQgJiYgKFxuICAgICAgICA8QmFubmVyXG4gICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3RpbGwgd29ya2luZyBcdTIwMTQgZmV0Y2hpbmcgdGhlIGxhdGVzdCBkYXRhIGZyb20gU3RyaXBlIHRvIGdpdmUgeW91IGFuIGFjY3VyYXRlIGFuc3dlci5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEp2TG9hZGluZ1N0YXRlO1xuIiwgImltcG9ydCB7IEJveCwgQnV0dG9uLCBJbmxpbmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgUHJvbXB0U3VnZ2VzdGlvbiB7XG4gIC8qKiBTaG9ydCBsYWJlbCBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvbiAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKiogRnVsbCBwcm9tcHQgdmFsdWUgc2VudCB3aGVuIHNlbGVjdGVkIChtYXkgZGlmZmVyIGZyb20gbGFiZWwpICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBKdlByb21wdFN1Z2dlc3Rpb25zUHJvcHMge1xuICAvKiogT3B0aW9uYWwgc2VjdGlvbiBsYWJlbCBhYm92ZSB0aGUgc3VnZ2VzdGlvbnMgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHN1Z2dlc3Rpb25zOiBQcm9tcHRTdWdnZXN0aW9uW107XG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgSnZQcm9tcHRTdWdnZXN0aW9ucyA9ICh7XG4gIGxhYmVsLFxuICBzdWdnZXN0aW9ucyxcbiAgb25TZWxlY3QsXG59OiBKdlByb21wdFN1Z2dlc3Rpb25zUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT57bGFiZWx9PC9JbmxpbmU+XG4gICAgICApfVxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJyB9fT5cbiAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c3VnZ2VzdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3Qoc3VnZ2VzdGlvbi52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1Z2dlc3Rpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdlByb21wdFN1Z2dlc3Rpb25zO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25JdGVtLCBCb3gsIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5pbXBvcnQgeyBKdkFjdGlvbkJhciB9IGZyb20gJy4vYnJhbmQnO1xuXG5pbnRlcmZhY2UgSW5zaWdodENhcmRQcm9wcyB7XG4gIGluc2lnaHRJZDogc3RyaW5nO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBJbnNpZ2h0Q2FyZCA9ICh7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCBjb250ZW50IH06IEluc2lnaHRDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZlZWRiYWNrLCBzZXRGZWVkYmFja10gPSB1c2VTdGF0ZTwncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRmVlZGJhY2sgPSBhc3luYyAocmF0aW5nOiAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJykgPT4ge1xuICAgIGlmIChzdWJtaXR0aW5nIHx8IGZlZWRiYWNrKSByZXR1cm47XG4gICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpQ2xpZW50KCcvaW5zaWdodHMtZmVlZGJhY2snLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCByYXRpbmcgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0RmVlZGJhY2socmF0aW5nKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFNpbGVudGx5IGZhaWwgXHUyMDE0IGZlZWRiYWNrIGlzIG5vbi1jcml0aWNhbFxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uPlxuICAgICAgPEFjY29yZGlvbkl0ZW0gdGl0bGU9XCJJbnNpZ2h0XCI+XG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+e2NvbnRlbnR9PC9JbmxpbmU+XG4gICAgICAgICAgPEp2QWN0aW9uQmFyXG4gICAgICAgICAgICBwcmltYXJ5PXt7XG4gICAgICAgICAgICAgIGxhYmVsOiBmZWVkYmFjayA9PT0gJ3Bvc2l0aXZlJyA/ICdIZWxwZnVsIFx1MjcxMycgOiAnSGVscGZ1bD8nLFxuICAgICAgICAgICAgICBvblByZXNzOiAoKSA9PiBoYW5kbGVGZWVkYmFjaygncG9zaXRpdmUnKSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcgfHwgZmVlZGJhY2sgIT09IG51bGwsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Vjb25kYXJ5PXt7XG4gICAgICAgICAgICAgIGxhYmVsOiBmZWVkYmFjayA9PT0gJ25lZ2F0aXZlJyA/ICdOb3QgaGVscGZ1bCBcdTI3MTMnIDogJ05vdCBoZWxwZnVsPycsXG4gICAgICAgICAgICAgIG9uUHJlc3M6ICgpID0+IGhhbmRsZUZlZWRiYWNrKCduZWdhdGl2ZScpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogc3VibWl0dGluZyB8fCBmZWVkYmFjayAhPT0gbnVsbCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgPC9BY2NvcmRpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0Q2FyZDtcbiIsICJpbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cbi8vIFN1cGFiYXNlIEVkZ2UgRnVuY3Rpb25zIGJhc2UgVVJMXG5jb25zdCBTVVBBQkFTRV9GVU5DVElPTlNfVVJMID1cbiAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Py5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgPyBwcm9jZXNzLmVudi5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgOiAnaHR0cHM6Ly90ZWN2eWNwbXpjeHhvcW10dHRqeS5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEnO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhPzogVDtcbiAgZXJyb3I/OiB7IGNvZGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyByZXF1ZXN0SWQ6IHN0cmluZyB9O1xuICBtZXRhPzogeyBmcmVzaG5lc3M6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xufVxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlQ29udGV4dCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBhY2NvdW50SWQ6IHN0cmluZztcbn1cblxubGV0IF9zaWduYXR1cmVDb250ZXh0OiBTaWduYXR1cmVDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgQVBJIGNsaWVudCB3aXRoIHRoZSB1c2VyJ3MgU3RyaXBlIGNvbnRleHQuXG4gKiBNdXN0IGJlIGNhbGxlZCBvbmNlIGZyb20gYSB2aWV3IHRoYXQgaGFzIEV4dGVuc2lvbkNvbnRleHRWYWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcGlDbGllbnQodXNlcklkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nKSB7XG4gIF9zaWduYXR1cmVDb250ZXh0ID0geyB1c2VySWQsIGFjY291bnRJZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpQ2xpZW50PFQ+KFxuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgbWV0aG9kPzogc3RyaW5nOyBib2R5PzogdW5rbm93biB9ID0ge30sXG4pOiBQcm9taXNlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gIGlmICghX3NpZ25hdHVyZUNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwaUNsaWVudCBub3QgaW5pdGlhbGl6ZWQgXHUyMDE0IGNhbGwgaW5pdEFwaUNsaWVudCBmaXJzdCcpO1xuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgU3RyaXBlIHNpZ25hdHVyZTsgZmFsbGJhY2sgZ3JhY2VmdWxseSBmb3IgbG9jYWwgZGV2XG4gIGxldCBzaWduYXR1cmUgPSAnJztcbiAgdHJ5IHtcbiAgICBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBmZXRjaFN0cmlwZVNpZ25hdHVyZSBtYXkgbm90IHdvcmsgaW4gbG9jYWwgcHJldmlldyBtb2RlXG4gICAgY29uc29sZS53YXJuKCdmZXRjaFN0cmlwZVNpZ25hdHVyZSBmYWlsZWQgXHUyMDE0IHNlbmRpbmcgdW5zaWduZWQgcmVxdWVzdCcpO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnO1xuXG4gIC8vIEFsd2F5cyBpbmNsdWRlIHVzZXJfaWQgYW5kIGFjY291bnRfaWQgaW4gdGhlIGJvZHkgZm9yIGF1dGhcbiAgY29uc3QgYm9keVBheWxvYWQgPSB7XG4gICAgdXNlcl9pZDogX3NpZ25hdHVyZUNvbnRleHQudXNlcklkLFxuICAgIGFjY291bnRfaWQ6IF9zaWduYXR1cmVDb250ZXh0LmFjY291bnRJZCxcbiAgICAuLi4ob3B0aW9ucy5ib2R5ICYmIHR5cGVvZiBvcHRpb25zLmJvZHkgPT09ICdvYmplY3QnID8gb3B0aW9ucy5ib2R5IDoge30pLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U1VQQUJBU0VfRlVOQ1RJT05TX1VSTH0ke3BhdGh9YCwge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKHNpZ25hdHVyZSA/IHsgJ3N0cmlwZS1zaWduYXR1cmUnOiBzaWduYXR1cmUgfSA6IHt9KSxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlQYXlsb2FkKSxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbiIsICJpbXBvcnQgeyBJbmxpbmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHsgSnZDYXJkLCBKdlNlY3Rpb25IZWFkZXIsIEp2UHJvbXB0U3VnZ2VzdGlvbnMgfSBmcm9tICcuL2JyYW5kJztcblxuaW50ZXJmYWNlIENsYXJpZmljYXRpb25PcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2xhcmlmaWNhdGlvblByb21wdFByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZztcbiAgb3B0aW9uczogQ2xhcmlmaWNhdGlvbk9wdGlvbltdO1xuICBvblNlbGVjdDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENsYXJpZmljYXRpb25Qcm9tcHQgPSAoeyBxdWVzdGlvbiwgb3B0aW9ucywgb25TZWxlY3QgfTogQ2xhcmlmaWNhdGlvblByb21wdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEp2Q2FyZD5cbiAgICAgIDxKdlNlY3Rpb25IZWFkZXIgdGl0bGU9XCJDbGFyaWZpY2F0aW9uIG5lZWRlZFwiIC8+XG4gICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+e3F1ZXN0aW9ufTwvSW5saW5lPlxuICAgICAgPEp2UHJvbXB0U3VnZ2VzdGlvbnMgc3VnZ2VzdGlvbnM9e29wdGlvbnN9IG9uU2VsZWN0PXtvblNlbGVjdH0gLz5cbiAgICA8L0p2Q2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXJpZmljYXRpb25Qcm9tcHQ7XG4iLCAiaW1wb3J0IHsgQm94LCBUZXh0QXJlYSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENoYXRJbnB1dFByb3BzIHtcbiAgb25TZW5kOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGluaXRpYWxWYWx1ZT86IHN0cmluZztcbn1cblxuY29uc3QgQ2hhdElucHV0ID0gKHsgb25TZW5kLCBkaXNhYmxlZCA9IGZhbHNlLCBpbml0aWFsVmFsdWUgPSAnJyB9OiBDaGF0SW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgIGlmICghdHJpbW1lZCB8fCBkaXNhYmxlZCkgcmV0dXJuO1xuICAgIG9uU2VuZCh0cmltbWVkKTtcbiAgICBzZXRWYWx1ZSgnJyk7XG4gIH0sIFt2YWx1ZSwgZGlzYWJsZWQsIG9uU2VuZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgYmFja2dyb3VuZENvbG9yOiAnY29udGFpbmVyJywgcGFkZGluZzogJ3hzbWFsbCcgfX0+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2JvdHRvbScsIHBhZGRpbmc6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IHdpZHRoOiAnZmlsbCcgfX0+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBsYWJlbD1cIkFzayBhIHF1ZXN0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG15IE1SUj9cIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIG9uUHJlc3M9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8ICF2YWx1ZS50cmltKCl9XG4gICAgICAgID5cbiAgICAgICAgICBTZW5kXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5wdXQ7XG4iLCAiaW1wb3J0IHsgQm94LCBJbmxpbmUsIERpdmlkZXIgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHsgSnZTZWN0aW9uSGVhZGVyLCBKdkNhcmQsIEp2UHJvbXB0U3VnZ2VzdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kJztcblxuY29uc3QgR1VJREVEX1BST01QVFMgPSBbXG4gIHsgbGFiZWw6IFwiV2hhdCdzIG15IE1SUj9cIiwgdmFsdWU6IFwiV2hhdCdzIG15IE1SUj9cIiB9LFxuICB7IGxhYmVsOiBcIkhvdydzIGNodXJuIHRyZW5kaW5nP1wiLCB2YWx1ZTogXCJIb3cgaXMgbXkgY2h1cm4gcmF0ZSB0cmVuZGluZyBvdmVyIHRoZSBsYXN0IDMgbW9udGhzP1wiIH0sXG4gIHsgbGFiZWw6ICdSZXZlbnVlIGJ5IHByb2R1Y3QnLCB2YWx1ZTogXCJXaGF0J3MgbXkgcmV2ZW51ZSBicmVha2Rvd24gYnkgcHJvZHVjdD9cIiB9LFxuICB7IGxhYmVsOiAnVG9wIGN1c3RvbWVycycsIHZhbHVlOiAnV2hvIGFyZSBteSB0b3AgMTAgY3VzdG9tZXJzIGJ5IHJldmVudWU/JyB9LFxuICB7IGxhYmVsOiAnR3Jvd3RoIHJhdGUnLCB2YWx1ZTogXCJXaGF0J3MgbXkgTVJSIGdyb3d0aCByYXRlP1wiIH0sXG5dO1xuXG5pbnRlcmZhY2UgV2VsY29tZVByb21wdFByb3BzIHtcbiAgb25TZWxlY3RQcm9tcHQ6IChwcm9tcHQ6IHN0cmluZykgPT4gdm9pZDtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pjtcbn1cblxuY29uc3QgV2VsY29tZVByb21wdCA9ICh7IG9uU2VsZWN0UHJvbXB0LCBpbnNpZ2h0cyB9OiBXZWxjb21lUHJvbXB0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJyB9fT5cbiAgICAgIDxKdlNlY3Rpb25IZWFkZXJcbiAgICAgICAgdGl0bGU9XCJXZWxjb21lIHRvIEphdmVsaW5cIlxuICAgICAgICBzdWJ0aXRsZT1cIkFzayBtZSBhbnl0aGluZyBhYm91dCB5b3VyIFN0cmlwZSBidXNpbmVzcy4gSSBjYW4gY2FsY3VsYXRlIG1ldHJpY3MsIGFuYWx5emUgdHJlbmRzLCBhbmQgc3VyZmFjZSBpbnNpZ2h0cyBmcm9tIHlvdXIgZGF0YS5cIlxuICAgICAgLz5cblxuICAgICAge2luc2lnaHRzICYmIGluc2lnaHRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5SZWNlbnQgaW5zaWdodHM8L0lubGluZT5cbiAgICAgICAgICB7aW5zaWdodHMubWFwKChpbnNpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8SnZDYXJkIGtleT17aW5zaWdodC5pZH0gcGFkZGluZz1cInNtYWxsXCI+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57aW5zaWdodC5jb250ZW50fTwvSW5saW5lPlxuICAgICAgICAgICAgPC9KdkNhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgPEp2UHJvbXB0U3VnZ2VzdGlvbnNcbiAgICAgICAgbGFiZWw9XCJUcnkgYXNraW5nXCJcbiAgICAgICAgc3VnZ2VzdGlvbnM9e0dVSURFRF9QUk9NUFRTfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3RQcm9tcHR9XG4gICAgICAvPlxuXG4gICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnY2FwdGlvbicsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgSmF2ZWxpbiBwcm92aWRlcyBpbmZvcm1hdGlvbmFsIGluc2lnaHRzIG9ubHksIG5vdCBmaW5hbmNpYWwgb3IgYnVzaW5lc3MgYWR2aWNlLiBBbHdheXMgdmVyaWZ5IGltcG9ydGFudCBkZWNpc2lvbnMgd2l0aCB5b3VyIG93biBhbmFseXNpcy5cbiAgICAgIDwvSW5saW5lPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZVByb21wdDtcbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHsgSnZTZWN0aW9uSGVhZGVyLCBKdkVtcHR5U3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kJztcblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uTGlzdFByb3BzIHtcbiAgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW107XG4gIGFjdGl2ZUNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudWxsO1xuICBvblNlbGVjdENvbnZlcnNhdGlvbjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvbnZlcnNhdGlvbkxpc3QgPSAoe1xuICBjb252ZXJzYXRpb25zLFxuICBhY3RpdmVDb252ZXJzYXRpb25JZDogX2FjdGl2ZUNvbnZlcnNhdGlvbklkLFxuICBvblNlbGVjdENvbnZlcnNhdGlvbixcbiAgb25DbG9zZSxcbn06IENvbnZlcnNhdGlvbkxpc3RQcm9wcykgPT4ge1xuICBpZiAoY29udmVyc2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEp2RW1wdHlTdGF0ZVxuICAgICAgICB0aXRsZT1cIk5vIGNvbnZlcnNhdGlvbnMgeWV0XCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJTdGFydCBieSBhc2tpbmcgYSBxdWVzdGlvbiBiZWxvdy5cIlxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCBwYWRkaW5nOiAnc21hbGwnIH19PlxuICAgICAgPEp2U2VjdGlvbkhlYWRlclxuICAgICAgICB0aXRsZT1cIkNvbnZlcnNhdGlvbnNcIlxuICAgICAgICBhY3Rpb249e1xuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIG9uUHJlc3M9e29uQ2xvc2V9PlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxMaXN0IG9uQWN0aW9uPXsoaWQpID0+IG9uU2VsZWN0Q29udmVyc2F0aW9uKFN0cmluZyhpZCkpfT5cbiAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252KSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e2NvbnYuaWR9XG4gICAgICAgICAgICBpZD17Y29udi5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtjb252LnRpdGxlIHx8ICdVbnRpdGxlZCBjb252ZXJzYXRpb24nfVxuICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9e25ldyBEYXRlKGNvbnYudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbkxpc3Q7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5cbmV4cG9ydCB0eXBlIEF1dGhTdGF0ZSA9ICdjaGVja2luZycgfCAnaGVhbHRoeScgfCAnbWlzc2luZycgfCAnZXhwaXJlZCcgfCAndW5yZWFjaGFibGUnIHwgJ2Vycm9yJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoU3RhdHVzIHtcbiAgc3RhdGU6IEF1dGhTdGF0ZTtcbiAgZXhwaXJlc0F0OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aFN0YXR1cygpIHtcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGU8QXV0aFN0YXR1cz4oe1xuICAgIHN0YXRlOiAnY2hlY2tpbmcnLFxuICAgIGV4cGlyZXNBdDogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IGNoZWNraW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBjaGVja0F1dGggPSB1c2VDYWxsYmFjayhhc3luYyAoKTogUHJvbWlzZTxBdXRoU3RhdHVzPiA9PiB7XG4gICAgaWYgKGNoZWNraW5nUmVmLmN1cnJlbnQpIHJldHVybiBhdXRoU3RhdHVzO1xuICAgIGNoZWNraW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgc2V0QXV0aFN0YXR1cyh7IHN0YXRlOiAnY2hlY2tpbmcnLCBleHBpcmVzQXQ6IG51bGwgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8eyBleHBpcmVzQXQ6IHN0cmluZyB9PignL2F1dGgtcmVmcmVzaCcpO1xuICAgICAgY29uc3Qgc3RhdHVzOiBBdXRoU3RhdHVzID0ge1xuICAgICAgICBzdGF0ZTogJ2hlYWx0aHknLFxuICAgICAgICBleHBpcmVzQXQ6IHJlc3BvbnNlLmRhdGE/LmV4cGlyZXNBdCB8fCBudWxsLFxuICAgICAgfTtcbiAgICAgIHNldEF1dGhTdGF0dXMoc3RhdHVzKTtcbiAgICAgIGNoZWNraW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICBjb25zdCBlcnJvck9iaiA9IGVyciBhcyB7IGVycm9yPzogeyBjb2RlPzogc3RyaW5nIH0gfTtcbiAgICAgIGNvbnN0IGNvZGUgPSBlcnJvck9iaj8uZXJyb3I/LmNvZGU7XG5cbiAgICAgIGxldCBzdGF0dXM6IEF1dGhTdGF0dXM7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yICYmICFjb2RlKSB7XG4gICAgICAgIC8vIE5ldHdvcmstbGV2ZWwgZmFpbHVyZSAoRE5TLCBjb25uZWN0aW9uIHJlZnVzZWQsIGV0Yy4pXG4gICAgICAgIHN0YXR1cyA9IHsgc3RhdGU6ICd1bnJlYWNoYWJsZScsIGV4cGlyZXNBdDogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAndG9rZW5fbm90X2ZvdW5kJykge1xuICAgICAgICBzdGF0dXMgPSB7IHN0YXRlOiAnbWlzc2luZycsIGV4cGlyZXNBdDogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAncmVmcmVzaF90b2tlbl9leHBpcmVkJykge1xuICAgICAgICBzdGF0dXMgPSB7IHN0YXRlOiAnZXhwaXJlZCcsIGV4cGlyZXNBdDogbnVsbCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0geyBzdGF0ZTogJ2Vycm9yJywgZXhwaXJlc0F0OiBudWxsIH07XG4gICAgICB9XG5cbiAgICAgIHNldEF1dGhTdGF0dXMoc3RhdHVzKTtcbiAgICAgIGNoZWNraW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuICB9LCBbYXV0aFN0YXR1c10pO1xuXG4gIHJldHVybiB7IGF1dGhTdGF0dXMsIGNoZWNrQXV0aCB9O1xufVxuIiwgImltcG9ydCB7IFNldHRpbmdzVmlldywgQm94LCBJbmxpbmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXR1cyB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGhTdGF0dXMnO1xuaW1wb3J0IHR5cGUgeyBBdXRoU3RhdGUgfSBmcm9tICcuLi9ob29rcy91c2VBdXRoU3RhdHVzJztcbmltcG9ydCB7XG4gIEp2Q2FyZCxcbiAgSnZTZWN0aW9uSGVhZGVyLFxuICBKdkxvYWRpbmdTdGF0ZSxcbiAgSnZTdGF0dXNJbmRpY2F0b3IsXG4gIEp2QWN0aW9uQmFyLFxufSBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kJztcbmltcG9ydCB0eXBlIHsgU3RhdHVzVmFyaWFudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnJhbmQnO1xuXG5mdW5jdGlvbiBnZXRTdGF0dXNWYXJpYW50KHN0YXRlOiBBdXRoU3RhdGUpOiBTdGF0dXNWYXJpYW50IHtcbiAgaWYgKHN0YXRlID09PSAnaGVhbHRoeScpIHJldHVybiAncG9zaXRpdmUnO1xuICBpZiAoc3RhdGUgPT09ICdtaXNzaW5nJyB8fCBzdGF0ZSA9PT0gJ2V4cGlyZWQnKSByZXR1cm4gJ3dhcm5pbmcnO1xuICBpZiAoc3RhdGUgPT09ICd1bnJlYWNoYWJsZScpIHJldHVybiAnbmVnYXRpdmUnO1xuICByZXR1cm4gJ2luZm8nO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0dXNMYWJlbChzdGF0ZTogQXV0aFN0YXRlLCBleHBpcmVzQXQ6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoc3RhdGUgPT09ICdoZWFsdGh5JyAmJiBleHBpcmVzQXQpIHtcbiAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGgucm91bmQoKG5ldyBEYXRlKGV4cGlyZXNBdCkuZ2V0VGltZSgpIC0gRGF0ZS5ub3coKSkgLyA2MDAwMCk7XG4gICAgcmV0dXJuIGBDb25uZWN0ZWQgKGV4cGlyZXMgaW4gJHttaW51dGVzTGVmdH0gbWluKWA7XG4gIH1cbiAgaWYgKHN0YXRlID09PSAnaGVhbHRoeScpIHJldHVybiAnQ29ubmVjdGVkJztcbiAgaWYgKHN0YXRlID09PSAnbWlzc2luZycgfHwgc3RhdGUgPT09ICdleHBpcmVkJykgcmV0dXJuICdOb3QgY29ubmVjdGVkJztcbiAgaWYgKHN0YXRlID09PSAndW5yZWFjaGFibGUnKSByZXR1cm4gJ0JhY2tlbmQgdW5yZWFjaGFibGUnO1xuICByZXR1cm4gJ1VuYWJsZSB0byBjaGVjayc7XG59XG5cbmNvbnN0IEFwcFNldHRpbmdzVmlldyA9ICh7IHVzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBpZiAodXNlckNvbnRleHQ/LmlkICYmIHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xuICAgIGluaXRBcGlDbGllbnQodXNlckNvbnRleHQuaWQsIHVzZXJDb250ZXh0LmFjY291bnQuaWQpO1xuICB9XG5cbiAgY29uc3QgeyBhdXRoU3RhdHVzLCBjaGVja0F1dGggfSA9IHVzZUF1dGhTdGF0dXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrQXV0aCgpO1xuICB9LCBbY2hlY2tBdXRoXSk7XG5cbiAgY29uc3QgaXNDaGVja2luZyA9IGF1dGhTdGF0dXMuc3RhdGUgPT09ICdjaGVja2luZyc7XG4gIGNvbnN0IHN0YXR1c0xhYmVsID0gZ2V0U3RhdHVzTGFiZWwoYXV0aFN0YXR1cy5zdGF0ZSwgYXV0aFN0YXR1cy5leHBpcmVzQXQpO1xuICBjb25zdCBzaG93RXhwbGFuYXRpb24gPSBhdXRoU3RhdHVzLnN0YXRlID09PSAnbWlzc2luZycgfHwgYXV0aFN0YXR1cy5zdGF0ZSA9PT0gJ2V4cGlyZWQnO1xuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdzVmlldz5cbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nIH19PlxuICAgICAgICA8SnZDYXJkPlxuICAgICAgICAgIDxKdlNlY3Rpb25IZWFkZXIgdGl0bGU9XCJTdHJpcGUgYWNjZXNzXCIgLz5cbiAgICAgICAgICB7aXNDaGVja2luZyA/IChcbiAgICAgICAgICAgIDxKdkxvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiQ2hlY2tpbmcgY29ubmVjdGlvbi4uLlwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxKdlN0YXR1c0luZGljYXRvclxuICAgICAgICAgICAgICB2YXJpYW50PXtnZXRTdGF0dXNWYXJpYW50KGF1dGhTdGF0dXMuc3RhdGUpfVxuICAgICAgICAgICAgICBsYWJlbD17c3RhdHVzTGFiZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3dFeHBsYW5hdGlvbiAmJiAoXG4gICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIE9BdXRoIGNvbm5lY3Rpb24gaXMgcmVxdWlyZWQuIFBsZWFzZSByZS1pbnN0YWxsIHRoZSBhcHAgdG8gcmVjb25uZWN0IHlvdXIgU3RyaXBlXG4gICAgICAgICAgICAgIGFjY291bnQuXG4gICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0p2Q2FyZD5cbiAgICAgICAgPEp2QWN0aW9uQmFyXG4gICAgICAgICAgcHJpbWFyeT17eyBsYWJlbDogJ0NoZWNrIHN0YXR1cycsIG9uUHJlc3M6ICgpID0+IHsgdm9pZCBjaGVja0F1dGgoKTsgfSwgZGlzYWJsZWQ6IGlzQ2hlY2tpbmcgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2V0dGluZ3NWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ3NWaWV3O1xuIiwgImltcG9ydCB7IENvbnRleHRWaWV3LCBCb3gsIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcGlDbGllbnQsIGluaXRBcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5pbXBvcnQge1xuICBKdkNhcmQsXG4gIEp2U2VjdGlvbkhlYWRlcixcbiAgSnZMb2FkaW5nU3RhdGUsXG4gIEp2U3RhdHVzSW5kaWNhdG9yLFxuICBKdkFjdGlvbkJhcixcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZCc7XG5cbnR5cGUgT25ib2FyZGluZ1N0YXRlID0gJ2F1dGgnIHwgJ3N5bmNpbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcblxuY29uc3QgT25ib2FyZGluZ1ZpZXcgPSAoeyB1c2VyQ29udGV4dCwgb2F1dGhDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBpZiAodXNlckNvbnRleHQ/LmlkICYmIHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xuICAgIGluaXRBcGlDbGllbnQodXNlckNvbnRleHQuaWQsIHVzZXJDb250ZXh0LmFjY291bnQuaWQpO1xuICB9XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxPbmJvYXJkaW5nU3RhdGU+KCdhdXRoJyk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgaGFzUnVuID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTZXR1cCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAvLyBQcmV2ZW50IGRvdWJsZS1leGVjdXRpb24gZnJvbSBSZWFjdCBzdHJpY3QgbW9kZSBvciBkZXAgY2hhbmdlc1xuICAgIGlmIChoYXNSdW4uY3VycmVudCkgcmV0dXJuO1xuICAgIGhhc1J1bi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIC8vIFN0ZXAgMTogQ2hlY2sgZm9yIE9BdXRoIGVycm9yc1xuICAgIGlmIChvYXV0aENvbnRleHQ/LmVycm9yKSB7XG4gICAgICBzZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcbiAgICAgICAgYEF1dGhvcml6YXRpb24gd2FzIGRlbmllZCBvciBmYWlsZWQgKCR7b2F1dGhDb250ZXh0LmVycm9yfSkuIFBsZWFzZSB1bmluc3RhbGwgYW5kIHJlLWluc3RhbGwgdGhlIGFwcCB0byB0cnkgYWdhaW4uYCxcbiAgICAgICk7XG4gICAgICBoYXNSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMjogRXhjaGFuZ2UgT0F1dGggY29kZSBpZiBhdmFpbGFibGUgKHB1YmxpYyBkaXN0cmlidXRpb24pXG4gICAgLy8gUHJpdmF0ZSBhcHBzIHNraXAgdGhpcyBcdTIwMTQgYmFja2VuZCB1c2VzIFNUUklQRV9TRUNSRVRfS0VZIGZhbGxiYWNrXG4gICAgaWYgKG9hdXRoQ29udGV4dD8uY29kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpQ2xpZW50KCcvYXV0aC1jYWxsYmFjaycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBjb2RlOiBvYXV0aENvbnRleHQuY29kZSxcbiAgICAgICAgICAgIHN0YXRlOiBvYXV0aENvbnRleHQuc3RhdGUgfHwgJycsXG4gICAgICAgICAgICB2ZXJpZmllcjogb2F1dGhDb250ZXh0LnZlcmlmaWVyIHx8ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UgcmUtaW5zdGFsbCB0aGUgYXBwIHRvIHJlY29ubmVjdCB5b3VyIFN0cmlwZSBhY2NvdW50LicsXG4gICAgICAgICk7XG4gICAgICAgIGhhc1J1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDM6IFRyaWdnZXIgYmFja2VuZCBzeW5jIChzZXJ2ZXItc2lkZSwgcGFnaW5hdGVkKVxuICAgIHNldFN0YXRlKCdzeW5jaW5nJyk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtdHJpZ2dlcicsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBOb24tY3JpdGljYWwgXHUyMDE0IHN5bmMgbWF5IGNvbXBsZXRlIGFzeW5jaHJvbm91c2x5XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoJ3N1Y2Nlc3MnKTtcbiAgfSwgW29hdXRoQ29udGV4dF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlU2V0dXAoKTtcbiAgfSwgW2hhbmRsZVNldHVwXSk7XG5cbiAgY29uc3QgaGFuZGxlUmV0cnkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFzUnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xuICAgIHNldFN0YXRlKCdhdXRoJyk7XG4gICAgaGFuZGxlU2V0dXAoKTtcbiAgfSwgW2hhbmRsZVNldHVwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJXZWxjb21lIHRvIEphdmVsaW5cIj5cbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nIH19PlxuICAgICAgICB7KHN0YXRlID09PSAnYXV0aCcgfHwgc3RhdGUgPT09ICdzeW5jaW5nJykgJiYgKFxuICAgICAgICAgIDxKdkNhcmQ+XG4gICAgICAgICAgICA8SnZTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIHRpdGxlPXtzdGF0ZSA9PT0gJ2F1dGgnID8gJ0Nvbm5lY3RpbmcgdG8gU3RyaXBlLi4uJyA6ICdTeW5jaW5nIHlvdXIgZGF0YS4uLid9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEp2TG9hZGluZ1N0YXRlXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e3N0YXRlID09PSAnYXV0aCcgPyAnRXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24uLi4nIDogJ1N5bmNpbmcgeW91ciBkYXRhLi4uJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9KdkNhcmQ+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICAgIDxKdkNhcmQ+XG4gICAgICAgICAgICA8SnZTdGF0dXNJbmRpY2F0b3JcbiAgICAgICAgICAgICAgdmFyaWFudD1cInBvc2l0aXZlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZXR1cCBjb21wbGV0ZSFcIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiWW91ciBkYXRhIGhhcyBiZWVuIHN5bmNlZCBcdTIwMTQgeW91IGNhbiBzdGFydCBhc2tpbmcgcXVlc3Rpb25zIHJpZ2h0IGF3YXkuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIE9wZW4gdGhlIEphdmVsaW4gZHJhd2VyIGZyb20gYW55IHBhZ2UgaW4geW91ciBTdHJpcGUgRGFzaGJvYXJkIHRvIGdldCBzdGFydGVkLlxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPC9KdkNhcmQ+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnZXJyb3InICYmIChcbiAgICAgICAgICA8SnZDYXJkPlxuICAgICAgICAgICAgPEp2U3RhdHVzSW5kaWNhdG9yXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2V0dXAgZmFpbGVkXCJcbiAgICAgICAgICAgICAgY29udGV4dD17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxKdkFjdGlvbkJhciBwcmltYXJ5PXt7IGxhYmVsOiAnUmV0cnknLCBvblByZXNzOiBoYW5kbGVSZXRyeSB9fSAvPlxuICAgICAgICAgIDwvSnZDYXJkPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdWaWV3O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsYUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELGNBQVEsY0FBYztBQUN0QixjQUFRLGNBQWM7QUFBQTtBQUFBOzs7QUNIdEI7QUFBQTtBQUFBO0FBQ0EsYUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELGNBQVEsa0JBQWtCLFFBQVEsWUFBWSxRQUFRLGNBQWMsUUFBUSxZQUFZLFFBQVEsWUFBWSxRQUFRLE1BQU0sUUFBUSxZQUFZLFFBQVEsV0FBVyxRQUFRLFVBQVUsUUFBUSxTQUFTLFFBQVEscUJBQXFCLFFBQVEsVUFBVSxRQUFRLFlBQVksUUFBUSxhQUFhLFFBQVEsZUFBZSxRQUFRLFNBQVMsUUFBUSxRQUFRLFFBQVEsZUFBZSxRQUFRLG1CQUFtQixRQUFRLDRCQUE0QixRQUFRLGlCQUFpQixRQUFRLE9BQU8sUUFBUSxXQUFXLFFBQVEsWUFBWSxRQUFRLE9BQU8sUUFBUSxXQUFXLFFBQVEsT0FBTyxRQUFRLFlBQVksUUFBUSxTQUFTLFFBQVEsTUFBTSxRQUFRLE9BQU8sUUFBUSxpQkFBaUIsUUFBUSxZQUFZLFFBQVEsVUFBVSxRQUFRLGtCQUFrQixRQUFRLHlCQUF5QixRQUFRLG1CQUFtQixRQUFRLFlBQVksUUFBUSxjQUFjLFFBQVEsT0FBTyxRQUFRLFdBQVcsUUFBUSxXQUFXLFFBQVEsU0FBUyxRQUFRLGNBQWMsUUFBUSxNQUFNLFFBQVEsV0FBVyxRQUFR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LE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7IiwKICAibmFtZXMiOiBbIl9hIiwgImZldGNoIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgInJlcXVpcmVfc2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3VpIiwgImltcG9ydF91aSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJfYSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiXQp9Cg==
