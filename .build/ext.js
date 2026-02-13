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
      var createHttpClient2 = () => new StripeAppsHttpClient(apiFetch_1.stripeApiFetch);
      exports.createHttpClient = createHttpClient2;
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

  // node_modules/@stripe/ui-extension-sdk/http_client.js
  var require_http_client = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/http_client.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createHttpClient = exports.STRIPE_API_KEY = exports.AUTHORIZATION_VALUE = exports.AUTHORIZATION_HEADER = void 0;
      var httpClient_1 = require_httpClient();
      Object.defineProperty(exports, "AUTHORIZATION_HEADER", { enumerable: true, get: function() {
        return httpClient_1.AUTHORIZATION_HEADER;
      } });
      Object.defineProperty(exports, "AUTHORIZATION_VALUE", { enumerable: true, get: function() {
        return httpClient_1.AUTHORIZATION_VALUE;
      } });
      Object.defineProperty(exports, "STRIPE_API_KEY", { enumerable: true, get: function() {
        return httpClient_1.STRIPE_API_KEY;
      } });
      Object.defineProperty(exports, "createHttpClient", { enumerable: true, get: function() {
        return httpClient_1.createHttpClient;
      } });
      exports.default = httpClient_1.StripeAppsHttpClient;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/clipboard.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.clipboardWriteText = void 0;
      var _endpoint_1 = require_endpoint();
      var clipboardWriteText = (text = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.clipboardWriteText(text);
      };
      exports.clipboardWriteText = clipboardWriteText;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/context.js
  var require_context = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/context.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.useRefreshDashboardData = void 0;
      var React = __importStar(__require("react"));
      var _endpoint_1 = require_endpoint();
      var useRefreshDashboardData = () => {
        return React.useCallback(() => {
          return (0, _endpoint_1.getHostEndpoint)().call.refreshDashboardData();
        }, []);
      };
      exports.useRefreshDashboardData = useRefreshDashboardData;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/getDashboardUserEmail.js
  var require_getDashboardUserEmail = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/getDashboardUserEmail.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDashboardUserEmail = void 0;
      var _endpoint_1 = require_endpoint();
      var httpClient_1 = require_httpClient();
      var getDashboardUserEmail = () => __async(exports, null, function* () {
        try {
          const resp = yield (0, _endpoint_1.getHostEndpoint)().call.stripeApiFetch("/v1/user/email", {
            headers: {
              [httpClient_1.AUTHORIZATION_HEADER]: httpClient_1.AUTHORIZATION_VALUE
            }
          });
          if (resp.ok) {
            resp.email = resp.json.email;
            return resp;
          }
          return Promise.reject(resp);
        } catch (e) {
          console.error("Error getting dashboard user email", e);
          throw e;
        }
      });
      exports.getDashboardUserEmail = getDashboardUserEmail;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/getUserAuthorizedPermissions.js
  var require_getUserAuthorizedPermissions = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/getUserAuthorizedPermissions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getUserAuthorizedPermissions = void 0;
      var _endpoint_1 = require_endpoint();
      var getUserAuthorizedPermissions = () => {
        return (0, _endpoint_1.getHostEndpoint)().call.getUserAuthorizedPermissions();
      };
      exports.getUserAuthorizedPermissions = getUserAuthorizedPermissions;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/isPermissionAuthorized.js
  var require_isPermissionAuthorized = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/isPermissionAuthorized.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isPermissionAuthorized = void 0;
      var _endpoint_1 = require_endpoint();
      var isPermissionAuthorized = (permission) => {
        return (0, _endpoint_1.getHostEndpoint)().call.isPermissionAuthorized(permission);
      };
      exports.isPermissionAuthorized = isPermissionAuthorized;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/isSourceInAuthorizedCSP.js
  var require_isSourceInAuthorizedCSP = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/isSourceInAuthorizedCSP.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isSourceInAuthorizedCSP = void 0;
      var _endpoint_1 = require_endpoint();
      var isSourceInAuthorizedCSP = (source) => {
        return (0, _endpoint_1.getHostEndpoint)().call.isSourceInAuthorizedCSP(source);
      };
      exports.isSourceInAuthorizedCSP = isSourceInAuthorizedCSP;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/oauth.js
  var require_oauth = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/oauth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createOAuthState = void 0;
      var _endpoint_1 = require_endpoint();
      var createOAuthState = (state = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.createOAuthState(state);
      };
      exports.createOAuthState = createOAuthState;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/platformRpcs.js
  var require_platformRpcs = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/platformRpcs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/toast.js
  var require_toast = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/toast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showToast = void 0;
      var _endpoint_1 = require_endpoint();
      var showToast = (_0, ..._1) => __async(exports, [_0, ..._1], function* (message, options = {}) {
        const endpoint = (0, _endpoint_1.getHostEndpoint)();
        return endpoint.call.showToast(message, options);
      });
      exports.showToast = showToast;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_endpoint(), exports);
      __exportStar(require_apiFetch(), exports);
      __exportStar(require_clipboard(), exports);
      __exportStar(require_context(), exports);
      __exportStar(require_getDashboardUserEmail(), exports);
      __exportStar(require_getUserAuthorizedPermissions(), exports);
      __exportStar(require_httpClient(), exports);
      __exportStar(require_isPermissionAuthorized(), exports);
      __exportStar(require_isSourceInAuthorizedCSP(), exports);
      __exportStar(require_oauth(), exports);
      __exportStar(require_platformRpcs(), exports);
      __exportStar(require_signature(), exports);
      __exportStar(require_toast(), exports);
      __exportStar(require_connectionSettings(), exports);
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
  var import_react5 = __require("react");

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

  // src/hooks/useStripeSync.ts
  var import_react4 = __require("react");

  // src/lib/stripe-client.ts
  var import_http_client = __toESM(require_http_client());

  // node_modules/stripe/esm/utils.js
  var OPTIONS_KEYS = [
    "apiKey",
    "idempotencyKey",
    "stripeAccount",
    "apiVersion",
    "maxNetworkRetries",
    "timeout",
    "host",
    "authenticator",
    "stripeContext",
    "additionalHeaders",
    "streaming"
  ];
  function isOptionsHash(o) {
    return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
  }
  function queryStringifyRequestData(data, _apiMode) {
    return stringifyRequestData(data);
  }
  function encodeQueryValue(value) {
    return encodeURIComponent(value).replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
  function valueToString(value) {
    if (value instanceof Date) {
      return Math.floor(value.getTime() / 1e3).toString();
    }
    if (value === null) {
      return "";
    }
    return String(value);
  }
  function stringifyRequestData(data) {
    const pairs = [];
    function encode(key, value) {
      if (value === void 0) {
        return;
      }
      if (value === null || typeof value !== "object" || value instanceof Date) {
        pairs.push(encodeQueryValue(key) + "=" + encodeQueryValue(valueToString(value)));
        return;
      }
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          if (value[i] !== void 0) {
            encode(key + "[" + i + "]", value[i]);
          }
        }
        return;
      }
      for (const k of Object.keys(value)) {
        encode(key + "[" + k + "]", value[k]);
      }
    }
    if (typeof data === "object" && data !== null) {
      for (const key of Object.keys(data)) {
        encode(key, data[key]);
      }
    }
    return pairs.join("&");
  }
  var makeURLInterpolator = (() => {
    const rc = {
      "\n": "\\n",
      '"': '\\"',
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
      return (outputs) => {
        return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => {
          const output = outputs[$1];
          if (isValidEncodeUriComponentType(output))
            return encodeURIComponent(output);
          return "";
        });
      };
    };
  })();
  function isValidEncodeUriComponentType(value) {
    return ["number", "string", "boolean"].includes(typeof value);
  }
  function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
      return [];
    }
    return params.map((param) => param.replace(/[{}]/g, ""));
  }
  function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
      return {};
    }
    if (!isOptionsHash(args[0])) {
      return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
      emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
  }
  function getOptionsFromArgs(args) {
    const opts = {
      host: null,
      headers: {},
      settings: {},
      streaming: false
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (typeof arg === "string") {
        opts.authenticator = createApiKeyAuthenticator(args.pop());
      } else if (isOptionsHash(arg)) {
        const params = Object.assign({}, args.pop());
        const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
        if (extraKeys.length) {
          emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
        }
        if (params.apiKey) {
          opts.authenticator = createApiKeyAuthenticator(params.apiKey);
        }
        if (params.idempotencyKey) {
          opts.headers["Idempotency-Key"] = params.idempotencyKey;
        }
        if (params.stripeAccount) {
          opts.headers["Stripe-Account"] = params.stripeAccount;
        }
        if (params.stripeContext) {
          if (opts.headers["Stripe-Account"]) {
            throw new Error("Can't specify both stripeAccount and stripeContext.");
          }
          opts.headers["Stripe-Context"] = params.stripeContext;
        }
        if (params.apiVersion) {
          opts.headers["Stripe-Version"] = params.apiVersion;
        }
        if (Number.isInteger(params.maxNetworkRetries)) {
          opts.settings.maxNetworkRetries = params.maxNetworkRetries;
        }
        if (Number.isInteger(params.timeout)) {
          opts.settings.timeout = params.timeout;
        }
        if (params.host) {
          opts.host = params.host;
        }
        if (params.authenticator) {
          if (params.apiKey) {
            throw new Error("Can't specify both apiKey and authenticator.");
          }
          if (typeof params.authenticator !== "function") {
            throw new Error("The authenticator must be a function receiving a request as the first parameter.");
          }
          opts.authenticator = params.authenticator;
        }
        if (params.additionalHeaders) {
          opts.headers = params.additionalHeaders;
        }
        if (params.streaming) {
          opts.streaming = true;
        }
      }
    }
    return opts;
  }
  function protoExtend(sub) {
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
      Super.apply(this, args);
    };
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
  }
  function removeNullish(obj) {
    if (typeof obj !== "object") {
      throw new Error("Argument must be an object");
    }
    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  }
  function normalizeHeaders(obj) {
    if (!(obj && typeof obj === "object")) {
      return obj;
    }
    return Object.keys(obj).reduce((result, header) => {
      result[normalizeHeader(header)] = obj[header];
      return result;
    }, {});
  }
  function normalizeHeader(header) {
    return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
  }
  function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
      return promise.then((res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      }, (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      });
    }
    return promise;
  }
  function pascalToCamelCase(name) {
    if (name === "OAuth") {
      return "oauth";
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  }
  function emitWarning(warning) {
    if (typeof process.emitWarning !== "function") {
      return console.warn(`Stripe: ${warning}`);
    }
    return process.emitWarning(warning, "Stripe");
  }
  function isObject(obj) {
    const type = typeof obj;
    return (type === "function" || type === "object") && !!obj;
  }
  function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey) => {
      Object.entries(obj).forEach(([key, value]) => {
        const newKey = prevKey ? `${prevKey}[${key}]` : key;
        if (isObject(value)) {
          if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
            return step(value, newKey);
          } else {
            result[newKey] = value;
          }
        } else {
          result[newKey] = String(value);
        }
      });
    };
    step(data, null);
    return result;
  }
  function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
      if (defaultVal !== void 0) {
        return defaultVal;
      } else {
        throw new Error(`${name} must be an integer`);
      }
    }
    return n;
  }
  function determineProcessUserAgentProperties() {
    return typeof process === "undefined" ? {} : {
      lang_version: process.version,
      platform: process.platform
    };
  }
  function createApiKeyAuthenticator(apiKey) {
    const authenticator = (request) => {
      request.headers.Authorization = "Bearer " + apiKey;
      return Promise.resolve();
    };
    authenticator._apiKey = apiKey;
    return authenticator;
  }
  function dateTimeReplacer(key, value) {
    if (this[key] instanceof Date) {
      return Math.floor(this[key].getTime() / 1e3).toString();
    }
    return value;
  }
  function jsonStringifyRequestData(data) {
    return JSON.stringify(data, dateTimeReplacer);
  }
  function getAPIMode(path) {
    if (!path) {
      return "v1";
    }
    return path.startsWith("/v2") ? "v2" : "v1";
  }
  function parseHttpHeaderAsString(header) {
    if (Array.isArray(header)) {
      return header.join(", ");
    }
    return String(header);
  }
  function parseHttpHeaderAsNumber(header) {
    const number = Array.isArray(header) ? header[0] : header;
    return Number(number);
  }
  function parseHeadersForFetch(headers) {
    return Object.entries(headers).map(([key, value]) => {
      return [key, parseHttpHeaderAsString(value)];
    });
  }

  // node_modules/stripe/esm/net/HttpClient.js
  var HttpClient = class {
    getClientName() {
      throw new Error("getClientName not implemented.");
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      throw new Error("makeRequest not implemented.");
    }
    static makeTimeoutError() {
      const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
      timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
      return timeoutErr;
    }
  };
  HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
  HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
  var HttpClientResponse = class {
    constructor(statusCode, headers) {
      this._statusCode = statusCode;
      this._headers = headers;
    }
    getStatusCode() {
      return this._statusCode;
    }
    getHeaders() {
      return this._headers;
    }
    getRawResponse() {
      throw new Error("getRawResponse not implemented.");
    }
    toStream(streamCompleteCallback) {
      throw new Error("toStream not implemented.");
    }
    toJSON() {
      throw new Error("toJSON not implemented.");
    }
  };

  // node_modules/stripe/esm/net/FetchHttpClient.js
  var FetchHttpClient = class extends HttpClient {
    constructor(fetchFn) {
      super();
      if (!fetchFn) {
        if (!globalThis.fetch) {
          throw new Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
        }
        fetchFn = globalThis.fetch;
      }
      if (globalThis.AbortController) {
        this._fetchFn = FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
      } else {
        this._fetchFn = FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
      }
    }
    static makeFetchWithRaceTimeout(fetchFn) {
      return (url, init, timeout) => {
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          pendingTimeoutId = setTimeout(() => {
            pendingTimeoutId = null;
            reject(HttpClient.makeTimeoutError());
          }, timeout);
        });
        const fetchPromise = fetchFn(url, init);
        return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
          if (pendingTimeoutId) {
            clearTimeout(pendingTimeoutId);
          }
        });
      };
    }
    static makeFetchWithAbortTimeout(fetchFn) {
      return (url, init, timeout) => __async(this, null, function* () {
        const abort = new AbortController();
        let timeoutId = setTimeout(() => {
          timeoutId = null;
          abort.abort(HttpClient.makeTimeoutError());
        }, timeout);
        try {
          return yield fetchFn(url, Object.assign(Object.assign({}, init), { signal: abort.signal }));
        } catch (err) {
          if (err.name === "AbortError") {
            throw HttpClient.makeTimeoutError();
          } else {
            throw err;
          }
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      });
    }
    getClientName() {
      return "fetch";
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      return __async(this, null, function* () {
        const isInsecureConnection = protocol === "http";
        const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
        url.port = port;
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        const body = requestData || (methodHasPayload ? "" : void 0);
        const res = yield this._fetchFn(url.toString(), {
          method,
          headers: parseHeadersForFetch(headers),
          body
        }, timeout);
        return new FetchHttpClientResponse(res);
      });
    }
  };
  var FetchHttpClientResponse = class extends HttpClientResponse {
    constructor(res) {
      super(res.status, FetchHttpClientResponse._transformHeadersToObject(res.headers));
      this._res = res;
    }
    getRawResponse() {
      return this._res;
    }
    toStream(streamCompleteCallback) {
      streamCompleteCallback();
      return this._res.body;
    }
    toJSON() {
      return this._res.json();
    }
    static _transformHeadersToObject(headers) {
      const headersObj = {};
      for (const entry of headers) {
        if (!Array.isArray(entry) || entry.length != 2) {
          throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
        }
        headersObj[entry[0]] = entry[1];
      }
      return headersObj;
    }
  };

  // node_modules/stripe/esm/crypto/CryptoProvider.js
  var CryptoProvider = class {
    computeHMACSignature(payload, secret) {
      throw new Error("computeHMACSignature not implemented.");
    }
    computeHMACSignatureAsync(payload, secret) {
      throw new Error("computeHMACSignatureAsync not implemented.");
    }
    computeSHA256Async(data) {
      throw new Error("computeSHA256 not implemented.");
    }
  };
  var CryptoProviderOnlySupportsAsyncError = class extends Error {
  };

  // node_modules/stripe/esm/crypto/SubtleCryptoProvider.js
  var SubtleCryptoProvider = class extends CryptoProvider {
    constructor(subtleCrypto) {
      super();
      this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    computeHMACSignature(payload, secret) {
      throw new CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
    }
    computeHMACSignatureAsync(payload, secret) {
      return __async(this, null, function* () {
        const encoder = new TextEncoder();
        const key = yield this.subtleCrypto.importKey("raw", encoder.encode(secret), {
          name: "HMAC",
          hash: { name: "SHA-256" }
        }, false, ["sign"]);
        const signatureBuffer = yield this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for (let i = 0; i < signatureBytes.length; i++) {
          signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join("");
      });
    }
    computeSHA256Async(data) {
      return __async(this, null, function* () {
        return new Uint8Array(yield this.subtleCrypto.digest("SHA-256", data));
      });
    }
  };
  var byteHexMapping = new Array(256);
  for (let i = 0; i < byteHexMapping.length; i++) {
    byteHexMapping[i] = i.toString(16).padStart(2, "0");
  }

  // node_modules/stripe/esm/platform/PlatformFunctions.js
  var PlatformFunctions = class {
    constructor() {
      this._fetchFn = null;
      this._agent = null;
    }
    getUname() {
      throw new Error("getUname not implemented.");
    }
    uuid4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
    secureCompare(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      const len = a.length;
      let result = 0;
      for (let i = 0; i < len; ++i) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
      }
      return result === 0;
    }
    createEmitter() {
      throw new Error("createEmitter not implemented.");
    }
    tryBufferData(data) {
      throw new Error("tryBufferData not implemented.");
    }
    createNodeHttpClient(agent) {
      throw new Error("createNodeHttpClient not implemented.");
    }
    createFetchHttpClient(fetchFn) {
      return new FetchHttpClient(fetchFn);
    }
    createDefaultHttpClient() {
      throw new Error("createDefaultHttpClient not implemented.");
    }
    createNodeCryptoProvider() {
      throw new Error("createNodeCryptoProvider not implemented.");
    }
    createSubtleCryptoProvider(subtleCrypto) {
      return new SubtleCryptoProvider(subtleCrypto);
    }
    createDefaultCryptoProvider() {
      throw new Error("createDefaultCryptoProvider not implemented.");
    }
  };

  // node_modules/stripe/esm/StripeEmitter.js
  var _StripeEvent = class extends Event {
    constructor(eventName, data) {
      super(eventName);
      this.data = data;
    }
  };
  var StripeEmitter = class {
    constructor() {
      this.eventTarget = new EventTarget();
      this.listenerMapping = /* @__PURE__ */ new Map();
    }
    on(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }
    removeListener(eventName, listener) {
      const listenerWrapper = this.listenerMapping.get(listener);
      this.listenerMapping.delete(listener);
      return this.eventTarget.removeEventListener(eventName, listenerWrapper);
    }
    once(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper, {
        once: true
      });
    }
    emit(eventName, data) {
      return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
    }
  };

  // node_modules/stripe/esm/platform/WebPlatformFunctions.js
  var WebPlatformFunctions = class extends PlatformFunctions {
    getUname() {
      return Promise.resolve(null);
    }
    createEmitter() {
      return new StripeEmitter();
    }
    tryBufferData(data) {
      if (data.file.data instanceof ReadableStream) {
        throw new Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
      }
      return Promise.resolve(data);
    }
    createNodeHttpClient() {
      throw new Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
    }
    createDefaultHttpClient() {
      return super.createFetchHttpClient();
    }
    createNodeCryptoProvider() {
      throw new Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
    }
    createDefaultCryptoProvider() {
      return this.createSubtleCryptoProvider();
    }
  };

  // node_modules/stripe/esm/Error.js
  var Error_exports = {};
  __export(Error_exports, {
    StripeAPIError: () => StripeAPIError,
    StripeAuthenticationError: () => StripeAuthenticationError,
    StripeCardError: () => StripeCardError,
    StripeConnectionError: () => StripeConnectionError,
    StripeError: () => StripeError,
    StripeIdempotencyError: () => StripeIdempotencyError,
    StripeInvalidGrantError: () => StripeInvalidGrantError,
    StripeInvalidRequestError: () => StripeInvalidRequestError,
    StripePermissionError: () => StripePermissionError,
    StripeRateLimitError: () => StripeRateLimitError,
    StripeSignatureVerificationError: () => StripeSignatureVerificationError,
    StripeUnknownError: () => StripeUnknownError,
    TemporarySessionExpiredError: () => TemporarySessionExpiredError,
    generateV1Error: () => generateV1Error,
    generateV2Error: () => generateV2Error
  });
  var generateV1Error = (rawStripeError) => {
    switch (rawStripeError.type) {
      case "card_error":
        return new StripeCardError(rawStripeError);
      case "invalid_request_error":
        return new StripeInvalidRequestError(rawStripeError);
      case "api_error":
        return new StripeAPIError(rawStripeError);
      case "authentication_error":
        return new StripeAuthenticationError(rawStripeError);
      case "rate_limit_error":
        return new StripeRateLimitError(rawStripeError);
      case "idempotency_error":
        return new StripeIdempotencyError(rawStripeError);
      case "invalid_grant":
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new StripeUnknownError(rawStripeError);
    }
  };
  var generateV2Error = (rawStripeError) => {
    switch (rawStripeError.type) {
      case "temporary_session_expired":
        return new TemporarySessionExpiredError(rawStripeError);
    }
    switch (rawStripeError.code) {
      case "invalid_fields":
        return new StripeInvalidRequestError(rawStripeError);
    }
    return generateV1Error(rawStripeError);
  };
  var StripeError = class extends Error {
    constructor(raw = {}, type = null) {
      var _a2;
      super(raw.message);
      this.type = type || this.constructor.name;
      this.raw = raw;
      this.rawType = raw.type;
      this.code = raw.code;
      this.doc_url = raw.doc_url;
      this.param = raw.param;
      this.detail = raw.detail;
      this.headers = raw.headers;
      this.requestId = raw.requestId;
      this.statusCode = raw.statusCode;
      this.message = (_a2 = raw.message) !== null && _a2 !== void 0 ? _a2 : "";
      this.userMessage = raw.user_message;
      this.charge = raw.charge;
      this.decline_code = raw.decline_code;
      this.payment_intent = raw.payment_intent;
      this.payment_method = raw.payment_method;
      this.payment_method_type = raw.payment_method_type;
      this.setup_intent = raw.setup_intent;
      this.source = raw.source;
    }
  };
  StripeError.generate = generateV1Error;
  var StripeCardError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeCardError");
    }
  };
  var StripeInvalidRequestError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeInvalidRequestError");
    }
  };
  var StripeAPIError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeAPIError");
    }
  };
  var StripeAuthenticationError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeAuthenticationError");
    }
  };
  var StripePermissionError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripePermissionError");
    }
  };
  var StripeRateLimitError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeRateLimitError");
    }
  };
  var StripeConnectionError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeConnectionError");
    }
  };
  var StripeSignatureVerificationError = class extends StripeError {
    constructor(header, payload, raw = {}) {
      super(raw, "StripeSignatureVerificationError");
      this.header = header;
      this.payload = payload;
    }
  };
  var StripeIdempotencyError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeIdempotencyError");
    }
  };
  var StripeInvalidGrantError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeInvalidGrantError");
    }
  };
  var StripeUnknownError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeUnknownError");
    }
  };
  var TemporarySessionExpiredError = class extends StripeError {
    constructor(rawStripeError = {}) {
      super(rawStripeError, "TemporarySessionExpiredError");
    }
  };

  // node_modules/stripe/esm/RequestSender.js
  var MAX_RETRY_AFTER_WAIT = 60;
  var RequestSender = class {
    constructor(stripe2, maxBufferedRequestMetric) {
      this._stripe = stripe2;
      this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _normalizeStripeContext(optsContext, clientContext) {
      if (optsContext) {
        return optsContext.toString() || null;
      }
      return (clientContext === null || clientContext === void 0 ? void 0 : clientContext.toString()) || null;
    }
    _addHeadersDirectlyToObject(obj, headers) {
      obj.requestId = headers["request-id"];
      obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
      obj.apiVersion = obj.apiVersion || headers["stripe-version"];
      obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
      const requestEndTime = Date.now();
      const requestDurationMs = requestEndTime - requestEvent.request_start_time;
      return removeNullish({
        api_version: headers["stripe-version"],
        account: headers["stripe-account"],
        idempotency_key: headers["idempotency-key"],
        method: requestEvent.method,
        path: requestEvent.path,
        status: statusCode,
        request_id: this._getRequestId(headers),
        elapsed: requestDurationMs,
        request_start_time: requestEvent.request_start_time,
        request_end_time: requestEndTime
      });
    }
    _getRequestId(headers) {
      return headers["request-id"];
    }
    _streamingResponseHandler(requestEvent, usage, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const streamCompleteCallback = () => {
          const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
          this._stripe._emitter.emit("response", responseEvent);
          this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
        };
        const stream = res.toStream(streamCompleteCallback);
        this._addHeadersDirectlyToObject(stream, headers);
        return callback(null, stream);
      };
    }
    _jsonResponseHandler(requestEvent, apiMode, usage, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const requestId = this._getRequestId(headers);
        const statusCode = res.getStatusCode();
        const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
        this._stripe._emitter.emit("response", responseEvent);
        res.toJSON().then((jsonResponse) => {
          if (jsonResponse.error) {
            let err;
            if (typeof jsonResponse.error === "string") {
              jsonResponse.error = {
                type: jsonResponse.error,
                message: jsonResponse.error_description
              };
            }
            jsonResponse.error.headers = headers;
            jsonResponse.error.statusCode = statusCode;
            jsonResponse.error.requestId = requestId;
            if (statusCode === 401) {
              err = new StripeAuthenticationError(jsonResponse.error);
            } else if (statusCode === 403) {
              err = new StripePermissionError(jsonResponse.error);
            } else if (statusCode === 429) {
              err = new StripeRateLimitError(jsonResponse.error);
            } else if (apiMode === "v2") {
              err = generateV2Error(jsonResponse.error);
            } else {
              err = generateV1Error(jsonResponse.error);
            }
            throw err;
          }
          return jsonResponse;
        }, (e) => {
          throw new StripeAPIError({
            message: "Invalid JSON received from the Stripe API",
            exception: e,
            requestId: headers["request-id"]
          });
        }).then((jsonResponse) => {
          this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
          const rawResponse = res.getRawResponse();
          this._addHeadersDirectlyToObject(rawResponse, headers);
          Object.defineProperty(jsonResponse, "lastResponse", {
            enumerable: false,
            writable: false,
            value: rawResponse
          });
          callback(null, jsonResponse);
        }, (e) => callback(e, null));
      };
    }
    static _generateConnectionErrorMessage(requestRetries) {
      return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
    }
    static _shouldRetry(res, numRetries, maxRetries, error) {
      if (error && numRetries === 0 && HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
        return true;
      }
      if (numRetries >= maxRetries) {
        return false;
      }
      if (!res) {
        return true;
      }
      if (res.getHeaders()["stripe-should-retry"] === "false") {
        return false;
      }
      if (res.getHeaders()["stripe-should-retry"] === "true") {
        return true;
      }
      if (res.getStatusCode() === 409) {
        return true;
      }
      if (res.getStatusCode() >= 500) {
        return true;
      }
      return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
      const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
      const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
      let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(2, numRetries - 1), maxNetworkRetryDelay);
      sleepSeconds *= 0.5 * (1 + Math.random());
      sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
      if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
        sleepSeconds = Math.max(sleepSeconds, retryAfter);
      }
      return sleepSeconds * 1e3;
    }
    _getMaxNetworkRetries(settings = {}) {
      return settings.maxNetworkRetries !== void 0 && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings, apiMode) {
      const maxRetries = this._getMaxNetworkRetries(settings);
      const genKey = () => `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
      if (apiMode === "v2") {
        if (method === "POST" || method === "DELETE") {
          return genKey();
        }
      } else if (apiMode === "v1") {
        if (method === "POST" && maxRetries > 0) {
          return genKey();
        }
      }
      return null;
    }
    _makeHeaders({ contentType, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings, stripeAccount, stripeContext, apiMode }) {
      const defaultHeaders = {
        Accept: "application/json",
        "Content-Type": contentType,
        "User-Agent": this._getUserAgentString(apiMode),
        "X-Stripe-Client-User-Agent": clientUserAgent,
        "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
        "Stripe-Version": apiVersion,
        "Stripe-Account": stripeAccount,
        "Stripe-Context": stripeContext,
        "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings, apiMode)
      };
      const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
      if (methodHasPayload || contentLength) {
        if (!methodHasPayload) {
          emitWarning(`${method} method had non-zero contentLength but no payload is expected for this verb`);
        }
        defaultHeaders["Content-Length"] = contentLength;
      }
      return Object.assign(
        removeNullish(defaultHeaders),
        normalizeHeaders(userSuppliedHeaders)
      );
    }
    _getUserAgentString(apiMode) {
      const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
      const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
      return `Stripe/${apiMode} NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
      if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
        const metrics = this._stripe._prevRequestMetrics.shift();
        return JSON.stringify({
          last_request_metrics: metrics
        });
      }
    }
    _recordRequestMetrics(requestId, requestDurationMs, usage) {
      if (this._stripe.getTelemetryEnabled() && requestId) {
        if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
          emitWarning("Request metrics buffer is full, dropping telemetry message.");
        } else {
          const m = {
            request_id: requestId,
            request_duration_ms: requestDurationMs
          };
          if (usage && usage.length > 0) {
            m.usage = usage;
          }
          this._stripe._prevRequestMetrics.push(m);
        }
      }
    }
    _rawRequest(method, path, params, options, usage) {
      const requestPromise = new Promise((resolve, reject) => {
        let opts;
        try {
          const requestMethod = method.toUpperCase();
          if (requestMethod !== "POST" && params && Object.keys(params).length !== 0) {
            throw new Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
          }
          const args = [].slice.call([params, options]);
          const dataFromArgs = getDataFromArgs(args);
          const data = requestMethod === "POST" ? Object.assign({}, dataFromArgs) : null;
          const calculatedOptions = getOptionsFromArgs(args);
          const headers2 = calculatedOptions.headers;
          const authenticator2 = calculatedOptions.authenticator;
          opts = {
            requestMethod,
            requestPath: path,
            bodyData: data,
            queryData: {},
            authenticator: authenticator2,
            headers: headers2,
            host: calculatedOptions.host,
            streaming: !!calculatedOptions.streaming,
            settings: {},
            usage: usage || ["raw_request"]
          };
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
        const { headers, settings } = opts;
        const authenticator = opts.authenticator;
        this._request(opts.requestMethod, opts.host, path, opts.bodyData, authenticator, { headers, settings, streaming: opts.streaming }, opts.usage, requestCallback);
      });
      return requestPromise;
    }
    _getContentLength(data) {
      return typeof data === "string" ? new TextEncoder().encode(data).length : data.length;
    }
    _request(method, host, path, data, authenticator, options, usage = [], callback, requestDataProcessor = null) {
      var _a2;
      let requestData;
      authenticator = (_a2 = authenticator !== null && authenticator !== void 0 ? authenticator : this._stripe._authenticator) !== null && _a2 !== void 0 ? _a2 : null;
      const apiMode = getAPIMode(path);
      const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter) => {
        return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
      };
      const makeRequest = (apiVersion, headers, numRetries) => {
        const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
        const request = {
          host: host || this._stripe.getApiField("host"),
          port: this._stripe.getApiField("port"),
          path,
          method,
          headers: Object.assign({}, headers),
          body: requestData,
          protocol: this._stripe.getApiField("protocol")
        };
        authenticator(request).then(() => {
          const req = this._stripe.getApiField("httpClient").makeRequest(request.host, request.port, request.path, request.method, request.headers, request.body, request.protocol, timeout);
          const requestStartTime = Date.now();
          const requestEvent = removeNullish({
            api_version: apiVersion,
            account: parseHttpHeaderAsString(headers["Stripe-Account"]),
            idempotency_key: parseHttpHeaderAsString(headers["Idempotency-Key"]),
            method,
            path,
            request_start_time: requestStartTime
          });
          const requestRetries = numRetries || 0;
          const maxRetries = this._getMaxNetworkRetries(options.settings || {});
          this._stripe._emitter.emit("request", requestEvent);
          req.then((res) => {
            if (RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
              return retryRequest(makeRequest, apiVersion, headers, requestRetries, parseHttpHeaderAsNumber(res.getHeaders()["retry-after"]));
            } else if (options.streaming && res.getStatusCode() < 400) {
              return this._streamingResponseHandler(requestEvent, usage, callback)(res);
            } else {
              return this._jsonResponseHandler(requestEvent, apiMode, usage, callback)(res);
            }
          }).catch((error) => {
            if (RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
              return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
            } else {
              const isTimeoutError = error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;
              return callback(new StripeConnectionError({
                message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : RequestSender._generateConnectionErrorMessage(requestRetries),
                detail: error
              }));
            }
          });
        }).catch((e) => {
          throw new StripeError({
            message: "Unable to authenticate the request",
            exception: e
          });
        });
      };
      const prepareAndMakeRequest = (error, data2) => {
        if (error) {
          return callback(error);
        }
        requestData = data2;
        this._stripe.getClientUserAgent((clientUserAgent) => {
          var _a3, _b, _c;
          const apiVersion = this._stripe.getApiField("version");
          const headers = this._makeHeaders({
            contentType: apiMode == "v2" ? "application/json" : "application/x-www-form-urlencoded",
            contentLength: this._getContentLength(data2),
            apiVersion,
            clientUserAgent,
            method,
            userSuppliedHeaders: (_a3 = options.headers) !== null && _a3 !== void 0 ? _a3 : null,
            userSuppliedSettings: (_b = options.settings) !== null && _b !== void 0 ? _b : {},
            stripeAccount: (_c = options.stripeAccount) !== null && _c !== void 0 ? _c : this._stripe.getApiField("stripeAccount"),
            stripeContext: this._normalizeStripeContext(options.stripeContext, this._stripe.getApiField("stripeContext")),
            apiMode
          });
          makeRequest(apiVersion, headers, 0);
        });
      };
      if (requestDataProcessor) {
        requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
      } else {
        let stringifiedData;
        if (apiMode == "v2") {
          stringifiedData = data ? jsonStringifyRequestData(data) : "";
        } else {
          stringifiedData = queryStringifyRequestData(data || {});
        }
        prepareAndMakeRequest(null, stringifiedData);
      }
    }
  };

  // node_modules/stripe/esm/autoPagination.js
  var V1Iterator = class {
    constructor(firstPagePromise, requestArgs, spec, stripeResource) {
      this.index = 0;
      this.pagePromise = firstPagePromise;
      this.promiseCache = { currentPromise: null };
      this.requestArgs = requestArgs;
      this.spec = spec;
      this.stripeResource = stripeResource;
    }
    iterate(pageResult) {
      return __async(this, null, function* () {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
          throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
        }
        const reverseIteration = isReverseIteration(this.requestArgs);
        if (this.index < pageResult.data.length) {
          const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
          const value = pageResult.data[idx];
          this.index += 1;
          return { value, done: false };
        } else if (pageResult.has_more) {
          this.index = 0;
          this.pagePromise = this.getNextPage(pageResult);
          const nextPageResult = yield this.pagePromise;
          return this.iterate(nextPageResult);
        }
        return { done: true, value: void 0 };
      });
    }
    getNextPage(_pageResult) {
      throw new Error("Unimplemented");
    }
    _next() {
      return __async(this, null, function* () {
        return this.iterate(yield this.pagePromise);
      });
    }
    next() {
      if (this.promiseCache.currentPromise) {
        return this.promiseCache.currentPromise;
      }
      const nextPromise = (() => __async(this, null, function* () {
        const ret = yield this._next();
        this.promiseCache.currentPromise = null;
        return ret;
      }))();
      this.promiseCache.currentPromise = nextPromise;
      return nextPromise;
    }
  };
  var V1ListIterator = class extends V1Iterator {
    getNextPage(pageResult) {
      const reverseIteration = isReverseIteration(this.requestArgs);
      const lastId = getLastId(pageResult, reverseIteration);
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        [reverseIteration ? "ending_before" : "starting_after"]: lastId
      });
    }
  };
  var V1SearchIterator = class extends V1Iterator {
    getNextPage(pageResult) {
      if (!pageResult.next_page) {
        throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
      }
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        page: pageResult.next_page
      });
    }
  };
  var V2ListIterator = class {
    constructor(firstPagePromise, requestArgs, spec, stripeResource) {
      this.firstPagePromise = firstPagePromise;
      this.currentPageIterator = null;
      this.nextPageUrl = null;
      this.requestArgs = requestArgs;
      this.spec = spec;
      this.stripeResource = stripeResource;
    }
    initFirstPage() {
      return __async(this, null, function* () {
        if (this.firstPagePromise) {
          const page = yield this.firstPagePromise;
          this.firstPagePromise = null;
          this.currentPageIterator = page.data[Symbol.iterator]();
          this.nextPageUrl = page.next_page_url || null;
        }
      });
    }
    turnPage() {
      return __async(this, null, function* () {
        if (!this.nextPageUrl)
          return null;
        this.spec.fullPath = this.nextPageUrl;
        const page = yield this.stripeResource._makeRequest([], this.spec, {});
        this.nextPageUrl = page.next_page_url || null;
        this.currentPageIterator = page.data[Symbol.iterator]();
        return this.currentPageIterator;
      });
    }
    next() {
      return __async(this, null, function* () {
        yield this.initFirstPage();
        if (this.currentPageIterator) {
          const result2 = this.currentPageIterator.next();
          if (!result2.done)
            return { done: false, value: result2.value };
        }
        const nextPageIterator = yield this.turnPage();
        if (!nextPageIterator) {
          return { done: true, value: void 0 };
        }
        const result = nextPageIterator.next();
        if (!result.done)
          return { done: false, value: result.value };
        return { done: true, value: void 0 };
      });
    }
  };
  var makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise) => {
    const apiMode = getAPIMode(spec.fullPath || spec.path);
    if (apiMode !== "v2" && spec.methodType === "search") {
      return makeAutoPaginationMethodsFromIterator(new V1SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (apiMode !== "v2" && spec.methodType === "list") {
      return makeAutoPaginationMethodsFromIterator(new V1ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (apiMode === "v2" && spec.methodType === "list") {
      return makeAutoPaginationMethodsFromIterator(new V2ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
  };
  var makeAutoPaginationMethodsFromIterator = (iterator) => {
    const autoPagingEach = makeAutoPagingEach((...args) => iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
      autoPagingEach,
      autoPagingToArray,
      next: () => iterator.next(),
      return: () => {
        return {};
      },
      [getAsyncIteratorSymbol()]: () => {
        return autoPaginationMethods;
      }
    };
    return autoPaginationMethods;
  };
  function getAsyncIteratorSymbol() {
    if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
      return Symbol.asyncIterator;
    }
    return "@@asyncIterator";
  }
  function getDoneCallback(args) {
    if (args.length < 2) {
      return null;
    }
    const onDone = args[1];
    if (typeof onDone !== "function") {
      throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
  }
  function getItemCallback(args) {
    if (args.length === 0) {
      return void 0;
    }
    const onItem = args[0];
    if (typeof onItem !== "function") {
      throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    if (onItem.length === 2) {
      return onItem;
    }
    if (onItem.length > 2) {
      throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    return function _onItem(item, next) {
      const shouldContinue = onItem(item);
      next(shouldContinue);
    };
  }
  function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
      throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
    }
    return lastId;
  }
  function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
      const args = [].slice.call(arguments);
      const onItem = getItemCallback(args);
      const onDone = getDoneCallback(args);
      if (args.length > 2) {
        throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
      }
      const autoPagePromise = wrapAsyncIteratorWithCallback(
        asyncIteratorNext,
        onItem
      );
      return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
    };
  }
  function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
      const limit = opts && opts.limit;
      if (!limit) {
        throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
      }
      if (limit > 1e4) {
        throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
      }
      const promise = new Promise((resolve, reject) => {
        const items = [];
        autoPagingEach((item) => {
          items.push(item);
          if (items.length >= limit) {
            return false;
          }
        }).then(() => {
          resolve(items);
        }).catch(reject);
      });
      return callbackifyPromiseWithTimeout(promise, onDone);
    };
  }
  function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject) => {
      function handleIteration(iterResult) {
        if (iterResult.done) {
          resolve();
          return;
        }
        const item = iterResult.value;
        return new Promise((next) => {
          onItem(item, next);
        }).then((shouldContinue) => {
          if (shouldContinue === false) {
            return handleIteration({ done: true, value: void 0 });
          } else {
            return asyncIteratorNext().then(handleIteration);
          }
        });
      }
      asyncIteratorNext().then(handleIteration).catch(reject);
    });
  }
  function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = getDataFromArgs(args);
    return !!dataFromArgs.ending_before;
  }

  // node_modules/stripe/esm/StripeMethod.js
  function stripeMethod(spec) {
    if (spec.path !== void 0 && spec.fullPath !== void 0) {
      throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
      const callback = typeof args[args.length - 1] == "function" && args.pop();
      spec.urlParams = extractUrlParams(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
      const requestPromise = callbackifyPromiseWithTimeout(this._makeRequest(args, spec, {}), callback);
      Object.assign(requestPromise, makeAutoPaginationMethods(this, args, spec, requestPromise));
      return requestPromise;
    };
  }

  // node_modules/stripe/esm/StripeResource.js
  StripeResource.extend = protoExtend;
  StripeResource.method = stripeMethod;
  StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
  function StripeResource(stripe2, deprecatedUrlData) {
    this._stripe = stripe2;
    if (deprecatedUrlData) {
      throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
    }
    this.basePath = makeURLInterpolator(
      this.basePath || stripe2.getApiField("basePath")
    );
    this.resourcePath = this.path;
    this.path = makeURLInterpolator(this.path);
    this.initialize(...arguments);
  }
  StripeResource.prototype = {
    _stripe: null,
    path: "",
    resourcePath: "",
    basePath: null,
    initialize() {
    },
    requestDataProcessor: null,
    validateRequest: null,
    createFullPath(commandPath, urlData) {
      const urlParts = [this.basePath(urlData), this.path(urlData)];
      if (typeof commandPath === "function") {
        const computedCommandPath = commandPath(urlData);
        if (computedCommandPath) {
          urlParts.push(computedCommandPath);
        }
      } else {
        urlParts.push(commandPath);
      }
      return this._joinUrlParts(urlParts);
    },
    createResourcePathWithSymbols(pathWithSymbols) {
      if (pathWithSymbols) {
        return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
      } else {
        return `/${this.resourcePath}`;
      }
    },
    _joinUrlParts(parts) {
      return parts.join("/").replace(/\/{2,}/g, "/");
    },
    _getRequestOpts(requestArgs, spec, overrideData) {
      var _a2;
      const requestMethod = (spec.method || "GET").toUpperCase();
      const usage = spec.usage || [];
      const urlParams = spec.urlParams || [];
      const encode = spec.encode || ((data2) => data2);
      const isUsingFullPath = !!spec.fullPath;
      const commandPath = makeURLInterpolator(isUsingFullPath ? spec.fullPath : spec.path || "");
      const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
      const args = [].slice.call(requestArgs);
      const urlData = urlParams.reduce((urlData2, param) => {
        const arg = args.shift();
        if (typeof arg !== "string") {
          throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
        }
        urlData2[param] = arg;
        return urlData2;
      }, {});
      const dataFromArgs = getDataFromArgs(args);
      const data = encode(Object.assign({}, dataFromArgs, overrideData));
      const options = getOptionsFromArgs(args);
      const host = options.host || spec.host;
      const streaming = !!spec.streaming || !!options.streaming;
      if (args.filter((x) => x != null).length) {
        throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
      }
      const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
      const headers = Object.assign(options.headers, spec.headers);
      if (spec.validator) {
        spec.validator(data, { headers });
      }
      const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
      const bodyData = dataInQuery ? null : data;
      const queryData = dataInQuery ? data : {};
      return {
        requestMethod,
        requestPath,
        bodyData,
        queryData,
        authenticator: (_a2 = options.authenticator) !== null && _a2 !== void 0 ? _a2 : null,
        headers,
        host: host !== null && host !== void 0 ? host : null,
        streaming,
        settings: options.settings,
        usage
      };
    },
    _makeRequest(requestArgs, spec, overrideData) {
      return new Promise((resolve, reject) => {
        var _a2;
        let opts;
        try {
          opts = this._getRequestOpts(requestArgs, spec, overrideData);
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
          }
        }
        const emptyQuery = Object.keys(opts.queryData).length === 0;
        const path = [
          opts.requestPath,
          emptyQuery ? "" : "?",
          queryStringifyRequestData(opts.queryData)
        ].join("");
        const { headers, settings } = opts;
        this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.authenticator, {
          headers,
          settings,
          streaming: opts.streaming
        }, opts.usage, requestCallback, (_a2 = this.requestDataProcessor) === null || _a2 === void 0 ? void 0 : _a2.bind(this));
      });
    }
  };

  // node_modules/stripe/esm/StripeContext.js
  var StripeContext = class {
    constructor(segments = []) {
      this._segments = [...segments];
    }
    get segments() {
      return [...this._segments];
    }
    push(segment) {
      if (!segment) {
        throw new Error("Segment cannot be null or undefined");
      }
      return new StripeContext([...this._segments, segment]);
    }
    pop() {
      if (this._segments.length === 0) {
        throw new Error("Cannot pop from an empty context");
      }
      return new StripeContext(this._segments.slice(0, -1));
    }
    toString() {
      return this._segments.join("/");
    }
    static parse(contextStr) {
      if (!contextStr) {
        return new StripeContext([]);
      }
      return new StripeContext(contextStr.split("/"));
    }
  };

  // node_modules/stripe/esm/Webhooks.js
  function createWebhooks(platformFunctions) {
    const Webhook = {
      DEFAULT_TOLERANCE: 300,
      signature: null,
      constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        try {
          if (!this.signature) {
            throw new Error("ERR: missing signature helper, unable to verify");
          }
          this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
        } catch (e) {
          if (e instanceof CryptoProviderOnlySupportsAsyncError) {
            e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
          }
          throw e;
        }
        const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
        return jsonPayload;
      },
      constructEventAsync(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        return __async(this, null, function* () {
          if (!this.signature) {
            throw new Error("ERR: missing signature helper, unable to verify");
          }
          yield this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
          const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
          return jsonPayload;
        });
      },
      generateTestHeaderString: function(opts) {
        const preparedOpts = prepareOptions(opts);
        const signature2 = preparedOpts.signature || preparedOpts.cryptoProvider.computeHMACSignature(preparedOpts.payloadString, preparedOpts.secret);
        return preparedOpts.generateHeaderString(signature2);
      },
      generateTestHeaderStringAsync: function(opts) {
        return __async(this, null, function* () {
          const preparedOpts = prepareOptions(opts);
          const signature2 = preparedOpts.signature || (yield preparedOpts.cryptoProvider.computeHMACSignatureAsync(preparedOpts.payloadString, preparedOpts.secret));
          return preparedOpts.generateHeaderString(signature2);
        });
      }
    };
    const signature = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        const secretContainsWhitespace = /\s/.test(secret);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
        validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        return true;
      },
      verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        return __async(this, null, function* () {
          const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
          const secretContainsWhitespace = /\s/.test(secret);
          cryptoProvider = cryptoProvider || getCryptoProvider();
          const expectedSignature = yield cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
          return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        });
      }
    };
    function makeHMACContent(payload, details) {
      return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
      if (!encodedPayload) {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No webhook payload was provided."
        });
      }
      const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
      const textDecoder = new TextDecoder("utf8");
      const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
      if (Array.isArray(encodedHeader)) {
        throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
      }
      if (encodedHeader == null || encodedHeader == "") {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No stripe-signature header value was provided."
        });
      }
      const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
      const details = parseHeader(decodedHeader, expectedScheme);
      if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "Unable to extract timestamp and signatures from header"
        });
      }
      if (!details.signatures.length) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "No signatures found with expected scheme"
        });
      }
      return {
        decodedPayload,
        decodedHeader,
        details,
        suspectPayloadType
      };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
      const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
      const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature";
      const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
      if (!signatureFound) {
        if (suspectPayloadType) {
          throw new StripeSignatureVerificationError(header, payload, {
            message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
          });
        }
        throw new StripeSignatureVerificationError(header, payload, {
          message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + docsLocation + "\n" + whitespaceMessage
        });
      }
      const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
      if (tolerance > 0 && timestampAge > tolerance) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Timestamp outside the tolerance zone"
        });
      }
      return true;
    }
    function parseHeader(header, scheme) {
      if (typeof header !== "string") {
        return null;
      }
      return header.split(",").reduce((accum, item) => {
        const kv = item.split("=");
        if (kv[0] === "t") {
          accum.timestamp = parseInt(kv[1], 10);
        }
        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }
        return accum;
      }, {
        timestamp: -1,
        signatures: []
      });
    }
    let webhooksCryptoProviderInstance = null;
    function getCryptoProvider() {
      if (!webhooksCryptoProviderInstance) {
        webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
      }
      return webhooksCryptoProviderInstance;
    }
    function prepareOptions(opts) {
      if (!opts) {
        throw new StripeError({
          message: "Options are required"
        });
      }
      const timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
      const scheme = opts.scheme || signature.EXPECTED_SCHEME;
      const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
      const payloadString = `${timestamp}.${opts.payload}`;
      const generateHeaderString = (signature2) => {
        return `t=${timestamp},${scheme}=${signature2}`;
      };
      return Object.assign(Object.assign({}, opts), {
        timestamp,
        scheme,
        cryptoProvider,
        payloadString,
        generateHeaderString
      });
    }
    Webhook.signature = signature;
    return Webhook;
  }

  // node_modules/stripe/esm/apiVersion.js
  var ApiVersion = "2026-01-28.clover";

  // node_modules/stripe/esm/resources.js
  var resources_exports = {};
  __export(resources_exports, {
    Account: () => Accounts3,
    AccountLinks: () => AccountLinks2,
    AccountSessions: () => AccountSessions,
    Accounts: () => Accounts3,
    ApplePayDomains: () => ApplePayDomains,
    ApplicationFees: () => ApplicationFees,
    Apps: () => Apps,
    Balance: () => Balance,
    BalanceSettings: () => BalanceSettings,
    BalanceTransactions: () => BalanceTransactions,
    Billing: () => Billing,
    BillingPortal: () => BillingPortal,
    Charges: () => Charges,
    Checkout: () => Checkout,
    Climate: () => Climate,
    ConfirmationTokens: () => ConfirmationTokens2,
    CountrySpecs: () => CountrySpecs,
    Coupons: () => Coupons,
    CreditNotes: () => CreditNotes,
    CustomerSessions: () => CustomerSessions,
    Customers: () => Customers2,
    Disputes: () => Disputes2,
    Entitlements: () => Entitlements,
    EphemeralKeys: () => EphemeralKeys,
    Events: () => Events2,
    ExchangeRates: () => ExchangeRates,
    FileLinks: () => FileLinks,
    Files: () => Files,
    FinancialConnections: () => FinancialConnections,
    Forwarding: () => Forwarding,
    Identity: () => Identity,
    InvoiceItems: () => InvoiceItems,
    InvoicePayments: () => InvoicePayments,
    InvoiceRenderingTemplates: () => InvoiceRenderingTemplates,
    Invoices: () => Invoices,
    Issuing: () => Issuing,
    Mandates: () => Mandates,
    OAuth: () => OAuth,
    PaymentAttemptRecords: () => PaymentAttemptRecords,
    PaymentIntents: () => PaymentIntents,
    PaymentLinks: () => PaymentLinks,
    PaymentMethodConfigurations: () => PaymentMethodConfigurations,
    PaymentMethodDomains: () => PaymentMethodDomains,
    PaymentMethods: () => PaymentMethods,
    PaymentRecords: () => PaymentRecords,
    Payouts: () => Payouts,
    Plans: () => Plans,
    Prices: () => Prices,
    Products: () => Products2,
    PromotionCodes: () => PromotionCodes,
    Quotes: () => Quotes,
    Radar: () => Radar,
    Refunds: () => Refunds2,
    Reporting: () => Reporting,
    Reviews: () => Reviews,
    SetupAttempts: () => SetupAttempts,
    SetupIntents: () => SetupIntents,
    ShippingRates: () => ShippingRates,
    Sigma: () => Sigma,
    Sources: () => Sources,
    SubscriptionItems: () => SubscriptionItems,
    SubscriptionSchedules: () => SubscriptionSchedules,
    Subscriptions: () => Subscriptions,
    Tax: () => Tax,
    TaxCodes: () => TaxCodes,
    TaxIds: () => TaxIds,
    TaxRates: () => TaxRates,
    Terminal: () => Terminal,
    TestHelpers: () => TestHelpers,
    Tokens: () => Tokens2,
    Topups: () => Topups,
    Transfers: () => Transfers,
    Treasury: () => Treasury,
    V2: () => V2,
    WebhookEndpoints: () => WebhookEndpoints
  });

  // node_modules/stripe/esm/ResourceNamespace.js
  function ResourceNamespace(stripe2, resources) {
    for (const name in resources) {
      if (!Object.prototype.hasOwnProperty.call(resources, name)) {
        continue;
      }
      const camelCaseName = name[0].toLowerCase() + name.substring(1);
      const resource = new resources[name](stripe2);
      this[camelCaseName] = resource;
    }
  }
  function resourceNamespace(namespace, resources) {
    return function(stripe2) {
      return new ResourceNamespace(stripe2, resources);
    };
  }

  // node_modules/stripe/esm/resources/V2/Core/AccountLinks.js
  var stripeMethod2 = StripeResource.method;
  var AccountLinks = StripeResource.extend({
    create: stripeMethod2({ method: "POST", fullPath: "/v2/core/account_links" })
  });

  // node_modules/stripe/esm/resources/V2/Core/AccountTokens.js
  var stripeMethod3 = StripeResource.method;
  var AccountTokens = StripeResource.extend({
    create: stripeMethod3({ method: "POST", fullPath: "/v2/core/account_tokens" }),
    retrieve: stripeMethod3({
      method: "GET",
      fullPath: "/v2/core/account_tokens/{id}"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Accounts.js
  var stripeMethod4 = StripeResource.method;
  var Accounts = StripeResource.extend({
    retrieve: stripeMethod4({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}"
    }),
    list: stripeMethod4({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts",
      methodType: "list"
    }),
    disconnect: stripeMethod4({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
    }),
    listOwners: stripeMethod4({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}/owners",
      methodType: "list"
    }),
    refresh: stripeMethod4({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/refresh"
    }),
    subscribe: stripeMethod4({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
    }),
    unsubscribe: stripeMethod4({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
    })
  });

  // node_modules/stripe/esm/resources/V2/Core/Accounts/Persons.js
  var stripeMethod5 = StripeResource.method;
  var Persons = StripeResource.extend({
    create: stripeMethod5({
      method: "POST",
      fullPath: "/v2/core/accounts/{account_id}/persons"
    }),
    retrieve: stripeMethod5({
      method: "GET",
      fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
    }),
    update: stripeMethod5({
      method: "POST",
      fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
    }),
    list: stripeMethod5({
      method: "GET",
      fullPath: "/v2/core/accounts/{account_id}/persons",
      methodType: "list"
    }),
    del: stripeMethod5({
      method: "DELETE",
      fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
    })
  });

  // node_modules/stripe/esm/resources/V2/Core/Accounts/PersonTokens.js
  var stripeMethod6 = StripeResource.method;
  var PersonTokens = StripeResource.extend({
    create: stripeMethod6({
      method: "POST",
      fullPath: "/v2/core/accounts/{account_id}/person_tokens"
    }),
    retrieve: stripeMethod6({
      method: "GET",
      fullPath: "/v2/core/accounts/{account_id}/person_tokens/{id}"
    })
  });

  // node_modules/stripe/esm/resources/V2/Core/Accounts.js
  var stripeMethod7 = StripeResource.method;
  var Accounts2 = StripeResource.extend({
    constructor: function(...args) {
      StripeResource.apply(this, args);
      this.persons = new Persons(...args);
      this.personTokens = new PersonTokens(...args);
    },
    create: stripeMethod7({ method: "POST", fullPath: "/v2/core/accounts" }),
    retrieve: stripeMethod7({ method: "GET", fullPath: "/v2/core/accounts/{id}" }),
    update: stripeMethod7({ method: "POST", fullPath: "/v2/core/accounts/{id}" }),
    list: stripeMethod7({
      method: "GET",
      fullPath: "/v2/core/accounts",
      methodType: "list"
    }),
    close: stripeMethod7({
      method: "POST",
      fullPath: "/v2/core/accounts/{id}/close"
    })
  });

  // node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js
  var stripeMethod8 = StripeResource.method;
  var ActiveEntitlements = StripeResource.extend({
    retrieve: stripeMethod8({
      method: "GET",
      fullPath: "/v1/entitlements/active_entitlements/{id}"
    }),
    list: stripeMethod8({
      method: "GET",
      fullPath: "/v1/entitlements/active_entitlements",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Billing/Alerts.js
  var stripeMethod9 = StripeResource.method;
  var Alerts = StripeResource.extend({
    create: stripeMethod9({ method: "POST", fullPath: "/v1/billing/alerts" }),
    retrieve: stripeMethod9({ method: "GET", fullPath: "/v1/billing/alerts/{id}" }),
    list: stripeMethod9({
      method: "GET",
      fullPath: "/v1/billing/alerts",
      methodType: "list"
    }),
    activate: stripeMethod9({
      method: "POST",
      fullPath: "/v1/billing/alerts/{id}/activate"
    }),
    archive: stripeMethod9({
      method: "POST",
      fullPath: "/v1/billing/alerts/{id}/archive"
    }),
    deactivate: stripeMethod9({
      method: "POST",
      fullPath: "/v1/billing/alerts/{id}/deactivate"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Associations.js
  var stripeMethod10 = StripeResource.method;
  var Associations = StripeResource.extend({
    find: stripeMethod10({ method: "GET", fullPath: "/v1/tax/associations/find" })
  });

  // node_modules/stripe/esm/resources/Issuing/Authorizations.js
  var stripeMethod11 = StripeResource.method;
  var Authorizations = StripeResource.extend({
    retrieve: stripeMethod11({
      method: "GET",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    update: stripeMethod11({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    list: stripeMethod11({
      method: "GET",
      fullPath: "/v1/issuing/authorizations",
      methodType: "list"
    }),
    approve: stripeMethod11({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/approve"
    }),
    decline: stripeMethod11({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/decline"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js
  var stripeMethod12 = StripeResource.method;
  var Authorizations2 = StripeResource.extend({
    create: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations"
    }),
    capture: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
    }),
    expire: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
    }),
    finalizeAmount: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
    }),
    increment: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
    }),
    respond: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"
    }),
    reverse: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Calculations.js
  var stripeMethod13 = StripeResource.method;
  var Calculations = StripeResource.extend({
    create: stripeMethod13({ method: "POST", fullPath: "/v1/tax/calculations" }),
    retrieve: stripeMethod13({
      method: "GET",
      fullPath: "/v1/tax/calculations/{calculation}"
    }),
    listLineItems: stripeMethod13({
      method: "GET",
      fullPath: "/v1/tax/calculations/{calculation}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cardholders.js
  var stripeMethod14 = StripeResource.method;
  var Cardholders = StripeResource.extend({
    create: stripeMethod14({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
    retrieve: stripeMethod14({
      method: "GET",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    update: stripeMethod14({
      method: "POST",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    list: stripeMethod14({
      method: "GET",
      fullPath: "/v1/issuing/cardholders",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cards.js
  var stripeMethod15 = StripeResource.method;
  var Cards = StripeResource.extend({
    create: stripeMethod15({ method: "POST", fullPath: "/v1/issuing/cards" }),
    retrieve: stripeMethod15({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
    update: stripeMethod15({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
    list: stripeMethod15({
      method: "GET",
      fullPath: "/v1/issuing/cards",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js
  var stripeMethod16 = StripeResource.method;
  var Cards2 = StripeResource.extend({
    deliverCard: stripeMethod16({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
    }),
    failCard: stripeMethod16({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
    }),
    returnCard: stripeMethod16({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
    }),
    shipCard: stripeMethod16({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
    }),
    submitCard: stripeMethod16({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
    })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Configurations.js
  var stripeMethod17 = StripeResource.method;
  var Configurations = StripeResource.extend({
    create: stripeMethod17({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations"
    }),
    retrieve: stripeMethod17({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    update: stripeMethod17({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    list: stripeMethod17({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Configurations.js
  var stripeMethod18 = StripeResource.method;
  var Configurations2 = StripeResource.extend({
    create: stripeMethod18({
      method: "POST",
      fullPath: "/v1/terminal/configurations"
    }),
    retrieve: stripeMethod18({
      method: "GET",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    update: stripeMethod18({
      method: "POST",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    list: stripeMethod18({
      method: "GET",
      fullPath: "/v1/terminal/configurations",
      methodType: "list"
    }),
    del: stripeMethod18({
      method: "DELETE",
      fullPath: "/v1/terminal/configurations/{configuration}"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js
  var stripeMethod19 = StripeResource.method;
  var ConfirmationTokens = StripeResource.extend({
    create: stripeMethod19({
      method: "POST",
      fullPath: "/v1/test_helpers/confirmation_tokens"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js
  var stripeMethod20 = StripeResource.method;
  var ConnectionTokens = StripeResource.extend({
    create: stripeMethod20({
      method: "POST",
      fullPath: "/v1/terminal/connection_tokens"
    })
  });

  // node_modules/stripe/esm/resources/Billing/CreditBalanceSummary.js
  var stripeMethod21 = StripeResource.method;
  var CreditBalanceSummary = StripeResource.extend({
    retrieve: stripeMethod21({
      method: "GET",
      fullPath: "/v1/billing/credit_balance_summary"
    })
  });

  // node_modules/stripe/esm/resources/Billing/CreditBalanceTransactions.js
  var stripeMethod22 = StripeResource.method;
  var CreditBalanceTransactions = StripeResource.extend({
    retrieve: stripeMethod22({
      method: "GET",
      fullPath: "/v1/billing/credit_balance_transactions/{id}"
    }),
    list: stripeMethod22({
      method: "GET",
      fullPath: "/v1/billing/credit_balance_transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Billing/CreditGrants.js
  var stripeMethod23 = StripeResource.method;
  var CreditGrants = StripeResource.extend({
    create: stripeMethod23({ method: "POST", fullPath: "/v1/billing/credit_grants" }),
    retrieve: stripeMethod23({
      method: "GET",
      fullPath: "/v1/billing/credit_grants/{id}"
    }),
    update: stripeMethod23({
      method: "POST",
      fullPath: "/v1/billing/credit_grants/{id}"
    }),
    list: stripeMethod23({
      method: "GET",
      fullPath: "/v1/billing/credit_grants",
      methodType: "list"
    }),
    expire: stripeMethod23({
      method: "POST",
      fullPath: "/v1/billing/credit_grants/{id}/expire"
    }),
    voidGrant: stripeMethod23({
      method: "POST",
      fullPath: "/v1/billing/credit_grants/{id}/void"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/CreditReversals.js
  var stripeMethod24 = StripeResource.method;
  var CreditReversals = StripeResource.extend({
    create: stripeMethod24({
      method: "POST",
      fullPath: "/v1/treasury/credit_reversals"
    }),
    retrieve: stripeMethod24({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
    }),
    list: stripeMethod24({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Customers.js
  var stripeMethod25 = StripeResource.method;
  var Customers = StripeResource.extend({
    fundCashBalance: stripeMethod25({
      method: "POST",
      fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/DebitReversals.js
  var stripeMethod26 = StripeResource.method;
  var DebitReversals = StripeResource.extend({
    create: stripeMethod26({
      method: "POST",
      fullPath: "/v1/treasury/debit_reversals"
    }),
    retrieve: stripeMethod26({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
    }),
    list: stripeMethod26({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Disputes.js
  var stripeMethod27 = StripeResource.method;
  var Disputes = StripeResource.extend({
    create: stripeMethod27({ method: "POST", fullPath: "/v1/issuing/disputes" }),
    retrieve: stripeMethod27({
      method: "GET",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    update: stripeMethod27({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    list: stripeMethod27({
      method: "GET",
      fullPath: "/v1/issuing/disputes",
      methodType: "list"
    }),
    submit: stripeMethod27({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}/submit"
    })
  });

  // node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js
  var stripeMethod28 = StripeResource.method;
  var EarlyFraudWarnings = StripeResource.extend({
    retrieve: stripeMethod28({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
    }),
    list: stripeMethod28({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/V2/Core/EventDestinations.js
  var stripeMethod29 = StripeResource.method;
  var EventDestinations = StripeResource.extend({
    create: stripeMethod29({
      method: "POST",
      fullPath: "/v2/core/event_destinations"
    }),
    retrieve: stripeMethod29({
      method: "GET",
      fullPath: "/v2/core/event_destinations/{id}"
    }),
    update: stripeMethod29({
      method: "POST",
      fullPath: "/v2/core/event_destinations/{id}"
    }),
    list: stripeMethod29({
      method: "GET",
      fullPath: "/v2/core/event_destinations",
      methodType: "list"
    }),
    del: stripeMethod29({
      method: "DELETE",
      fullPath: "/v2/core/event_destinations/{id}"
    }),
    disable: stripeMethod29({
      method: "POST",
      fullPath: "/v2/core/event_destinations/{id}/disable"
    }),
    enable: stripeMethod29({
      method: "POST",
      fullPath: "/v2/core/event_destinations/{id}/enable"
    }),
    ping: stripeMethod29({
      method: "POST",
      fullPath: "/v2/core/event_destinations/{id}/ping"
    })
  });

  // node_modules/stripe/esm/resources/V2/Core/Events.js
  var stripeMethod30 = StripeResource.method;
  var Events = StripeResource.extend({
    retrieve(...args) {
      const transformResponseData = (response) => {
        return this.addFetchRelatedObjectIfNeeded(response);
      };
      return stripeMethod30({
        method: "GET",
        fullPath: "/v2/core/events/{id}",
        transformResponseData
      }).apply(this, args);
    },
    list(...args) {
      const transformResponseData = (response) => {
        return Object.assign(Object.assign({}, response), { data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) });
      };
      return stripeMethod30({
        method: "GET",
        fullPath: "/v2/core/events",
        methodType: "list",
        transformResponseData
      }).apply(this, args);
    },
    addFetchRelatedObjectIfNeeded(pulledEvent) {
      if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
        return pulledEvent;
      }
      return Object.assign(Object.assign({}, pulledEvent), { fetchRelatedObject: () => stripeMethod30({
        method: "GET",
        fullPath: pulledEvent.related_object.url
      }).apply(this, [
        {
          stripeContext: pulledEvent.context
        }
      ]) });
    }
  });

  // node_modules/stripe/esm/resources/Entitlements/Features.js
  var stripeMethod31 = StripeResource.method;
  var Features = StripeResource.extend({
    create: stripeMethod31({ method: "POST", fullPath: "/v1/entitlements/features" }),
    retrieve: stripeMethod31({
      method: "GET",
      fullPath: "/v1/entitlements/features/{id}"
    }),
    update: stripeMethod31({
      method: "POST",
      fullPath: "/v1/entitlements/features/{id}"
    }),
    list: stripeMethod31({
      method: "GET",
      fullPath: "/v1/entitlements/features",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js
  var stripeMethod32 = StripeResource.method;
  var FinancialAccounts = StripeResource.extend({
    create: stripeMethod32({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts"
    }),
    retrieve: stripeMethod32({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    update: stripeMethod32({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    list: stripeMethod32({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts",
      methodType: "list"
    }),
    close: stripeMethod32({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/close"
    }),
    retrieveFeatures: stripeMethod32({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    }),
    updateFeatures: stripeMethod32({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js
  var stripeMethod33 = StripeResource.method;
  var InboundTransfers = StripeResource.extend({
    fail: stripeMethod33({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
    }),
    returnInboundTransfer: stripeMethod33({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
    }),
    succeed: stripeMethod33({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/InboundTransfers.js
  var stripeMethod34 = StripeResource.method;
  var InboundTransfers2 = StripeResource.extend({
    create: stripeMethod34({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers"
    }),
    retrieve: stripeMethod34({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers/{id}"
    }),
    list: stripeMethod34({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod34({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Locations.js
  var stripeMethod35 = StripeResource.method;
  var Locations = StripeResource.extend({
    create: stripeMethod35({ method: "POST", fullPath: "/v1/terminal/locations" }),
    retrieve: stripeMethod35({
      method: "GET",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    update: stripeMethod35({
      method: "POST",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    list: stripeMethod35({
      method: "GET",
      fullPath: "/v1/terminal/locations",
      methodType: "list"
    }),
    del: stripeMethod35({
      method: "DELETE",
      fullPath: "/v1/terminal/locations/{location}"
    })
  });

  // node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js
  var stripeMethod36 = StripeResource.method;
  var MeterEventAdjustments = StripeResource.extend({
    create: stripeMethod36({
      method: "POST",
      fullPath: "/v1/billing/meter_event_adjustments"
    })
  });

  // node_modules/stripe/esm/resources/V2/Billing/MeterEventAdjustments.js
  var stripeMethod37 = StripeResource.method;
  var MeterEventAdjustments2 = StripeResource.extend({
    create: stripeMethod37({
      method: "POST",
      fullPath: "/v2/billing/meter_event_adjustments"
    })
  });

  // node_modules/stripe/esm/resources/V2/Billing/MeterEventSession.js
  var stripeMethod38 = StripeResource.method;
  var MeterEventSession = StripeResource.extend({
    create: stripeMethod38({
      method: "POST",
      fullPath: "/v2/billing/meter_event_session"
    })
  });

  // node_modules/stripe/esm/resources/V2/Billing/MeterEventStream.js
  var stripeMethod39 = StripeResource.method;
  var MeterEventStream = StripeResource.extend({
    create: stripeMethod39({
      method: "POST",
      fullPath: "/v2/billing/meter_event_stream",
      host: "meter-events.stripe.com"
    })
  });

  // node_modules/stripe/esm/resources/Billing/MeterEvents.js
  var stripeMethod40 = StripeResource.method;
  var MeterEvents = StripeResource.extend({
    create: stripeMethod40({ method: "POST", fullPath: "/v1/billing/meter_events" })
  });

  // node_modules/stripe/esm/resources/V2/Billing/MeterEvents.js
  var stripeMethod41 = StripeResource.method;
  var MeterEvents2 = StripeResource.extend({
    create: stripeMethod41({ method: "POST", fullPath: "/v2/billing/meter_events" })
  });

  // node_modules/stripe/esm/resources/Billing/Meters.js
  var stripeMethod42 = StripeResource.method;
  var Meters = StripeResource.extend({
    create: stripeMethod42({ method: "POST", fullPath: "/v1/billing/meters" }),
    retrieve: stripeMethod42({ method: "GET", fullPath: "/v1/billing/meters/{id}" }),
    update: stripeMethod42({ method: "POST", fullPath: "/v1/billing/meters/{id}" }),
    list: stripeMethod42({
      method: "GET",
      fullPath: "/v1/billing/meters",
      methodType: "list"
    }),
    deactivate: stripeMethod42({
      method: "POST",
      fullPath: "/v1/billing/meters/{id}/deactivate"
    }),
    listEventSummaries: stripeMethod42({
      method: "GET",
      fullPath: "/v1/billing/meters/{id}/event_summaries",
      methodType: "list"
    }),
    reactivate: stripeMethod42({
      method: "POST",
      fullPath: "/v1/billing/meters/{id}/reactivate"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/OnboardingLinks.js
  var stripeMethod43 = StripeResource.method;
  var OnboardingLinks = StripeResource.extend({
    create: stripeMethod43({
      method: "POST",
      fullPath: "/v1/terminal/onboarding_links"
    })
  });

  // node_modules/stripe/esm/resources/Climate/Orders.js
  var stripeMethod44 = StripeResource.method;
  var Orders = StripeResource.extend({
    create: stripeMethod44({ method: "POST", fullPath: "/v1/climate/orders" }),
    retrieve: stripeMethod44({
      method: "GET",
      fullPath: "/v1/climate/orders/{order}"
    }),
    update: stripeMethod44({
      method: "POST",
      fullPath: "/v1/climate/orders/{order}"
    }),
    list: stripeMethod44({
      method: "GET",
      fullPath: "/v1/climate/orders",
      methodType: "list"
    }),
    cancel: stripeMethod44({
      method: "POST",
      fullPath: "/v1/climate/orders/{order}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js
  var stripeMethod45 = StripeResource.method;
  var OutboundPayments = StripeResource.extend({
    update: stripeMethod45({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
    }),
    fail: stripeMethod45({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
    }),
    post: stripeMethod45({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
    }),
    returnOutboundPayment: stripeMethod45({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundPayments.js
  var stripeMethod46 = StripeResource.method;
  var OutboundPayments2 = StripeResource.extend({
    create: stripeMethod46({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments"
    }),
    retrieve: stripeMethod46({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments/{id}"
    }),
    list: stripeMethod46({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments",
      methodType: "list"
    }),
    cancel: stripeMethod46({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js
  var stripeMethod47 = StripeResource.method;
  var OutboundTransfers = StripeResource.extend({
    update: stripeMethod47({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
    }),
    fail: stripeMethod47({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
    }),
    post: stripeMethod47({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
    }),
    returnOutboundTransfer: stripeMethod47({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js
  var stripeMethod48 = StripeResource.method;
  var OutboundTransfers2 = StripeResource.extend({
    create: stripeMethod48({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers"
    }),
    retrieve: stripeMethod48({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
    }),
    list: stripeMethod48({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod48({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Radar/PaymentEvaluations.js
  var stripeMethod49 = StripeResource.method;
  var PaymentEvaluations = StripeResource.extend({
    create: stripeMethod49({
      method: "POST",
      fullPath: "/v1/radar/payment_evaluations"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js
  var stripeMethod50 = StripeResource.method;
  var PersonalizationDesigns = StripeResource.extend({
    create: stripeMethod50({
      method: "POST",
      fullPath: "/v1/issuing/personalization_designs"
    }),
    retrieve: stripeMethod50({
      method: "GET",
      fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
    }),
    update: stripeMethod50({
      method: "POST",
      fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
    }),
    list: stripeMethod50({
      method: "GET",
      fullPath: "/v1/issuing/personalization_designs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js
  var stripeMethod51 = StripeResource.method;
  var PersonalizationDesigns2 = StripeResource.extend({
    activate: stripeMethod51({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
    }),
    deactivate: stripeMethod51({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
    }),
    reject: stripeMethod51({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js
  var stripeMethod52 = StripeResource.method;
  var PhysicalBundles = StripeResource.extend({
    retrieve: stripeMethod52({
      method: "GET",
      fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
    }),
    list: stripeMethod52({
      method: "GET",
      fullPath: "/v1/issuing/physical_bundles",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Climate/Products.js
  var stripeMethod53 = StripeResource.method;
  var Products = StripeResource.extend({
    retrieve: stripeMethod53({
      method: "GET",
      fullPath: "/v1/climate/products/{product}"
    }),
    list: stripeMethod53({
      method: "GET",
      fullPath: "/v1/climate/products",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Readers.js
  var stripeMethod54 = StripeResource.method;
  var Readers = StripeResource.extend({
    create: stripeMethod54({ method: "POST", fullPath: "/v1/terminal/readers" }),
    retrieve: stripeMethod54({
      method: "GET",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    update: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    list: stripeMethod54({
      method: "GET",
      fullPath: "/v1/terminal/readers",
      methodType: "list"
    }),
    del: stripeMethod54({
      method: "DELETE",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    cancelAction: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/cancel_action"
    }),
    collectInputs: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/collect_inputs"
    }),
    collectPaymentMethod: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/collect_payment_method"
    }),
    confirmPaymentIntent: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/confirm_payment_intent"
    }),
    processPaymentIntent: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
    }),
    processSetupIntent: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
    }),
    refundPayment: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/refund_payment"
    }),
    setReaderDisplay: stripeMethod54({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js
  var stripeMethod55 = StripeResource.method;
  var Readers2 = StripeResource.extend({
    presentPaymentMethod: stripeMethod55({
      method: "POST",
      fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
    }),
    succeedInputCollection: stripeMethod55({
      method: "POST",
      fullPath: "/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection"
    }),
    timeoutInputCollection: stripeMethod55({
      method: "POST",
      fullPath: "/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js
  var stripeMethod56 = StripeResource.method;
  var ReceivedCredits = StripeResource.extend({
    create: stripeMethod56({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_credits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js
  var stripeMethod57 = StripeResource.method;
  var ReceivedCredits2 = StripeResource.extend({
    retrieve: stripeMethod57({
      method: "GET",
      fullPath: "/v1/treasury/received_credits/{id}"
    }),
    list: stripeMethod57({
      method: "GET",
      fullPath: "/v1/treasury/received_credits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js
  var stripeMethod58 = StripeResource.method;
  var ReceivedDebits = StripeResource.extend({
    create: stripeMethod58({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_debits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js
  var stripeMethod59 = StripeResource.method;
  var ReceivedDebits2 = StripeResource.extend({
    retrieve: stripeMethod59({
      method: "GET",
      fullPath: "/v1/treasury/received_debits/{id}"
    }),
    list: stripeMethod59({
      method: "GET",
      fullPath: "/v1/treasury/received_debits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Refunds.js
  var stripeMethod60 = StripeResource.method;
  var Refunds = StripeResource.extend({
    expire: stripeMethod60({
      method: "POST",
      fullPath: "/v1/test_helpers/refunds/{refund}/expire"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Registrations.js
  var stripeMethod61 = StripeResource.method;
  var Registrations = StripeResource.extend({
    create: stripeMethod61({ method: "POST", fullPath: "/v1/tax/registrations" }),
    retrieve: stripeMethod61({
      method: "GET",
      fullPath: "/v1/tax/registrations/{id}"
    }),
    update: stripeMethod61({
      method: "POST",
      fullPath: "/v1/tax/registrations/{id}"
    }),
    list: stripeMethod61({
      method: "GET",
      fullPath: "/v1/tax/registrations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportRuns.js
  var stripeMethod62 = StripeResource.method;
  var ReportRuns = StripeResource.extend({
    create: stripeMethod62({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
    retrieve: stripeMethod62({
      method: "GET",
      fullPath: "/v1/reporting/report_runs/{report_run}"
    }),
    list: stripeMethod62({
      method: "GET",
      fullPath: "/v1/reporting/report_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportTypes.js
  var stripeMethod63 = StripeResource.method;
  var ReportTypes = StripeResource.extend({
    retrieve: stripeMethod63({
      method: "GET",
      fullPath: "/v1/reporting/report_types/{report_type}"
    }),
    list: stripeMethod63({
      method: "GET",
      fullPath: "/v1/reporting/report_types",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Forwarding/Requests.js
  var stripeMethod64 = StripeResource.method;
  var Requests = StripeResource.extend({
    create: stripeMethod64({ method: "POST", fullPath: "/v1/forwarding/requests" }),
    retrieve: stripeMethod64({
      method: "GET",
      fullPath: "/v1/forwarding/requests/{id}"
    }),
    list: stripeMethod64({
      method: "GET",
      fullPath: "/v1/forwarding/requests",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js
  var stripeMethod65 = StripeResource.method;
  var ScheduledQueryRuns = StripeResource.extend({
    retrieve: stripeMethod65({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
    }),
    list: stripeMethod65({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Apps/Secrets.js
  var stripeMethod66 = StripeResource.method;
  var Secrets = StripeResource.extend({
    create: stripeMethod66({ method: "POST", fullPath: "/v1/apps/secrets" }),
    list: stripeMethod66({
      method: "GET",
      fullPath: "/v1/apps/secrets",
      methodType: "list"
    }),
    deleteWhere: stripeMethod66({
      method: "POST",
      fullPath: "/v1/apps/secrets/delete"
    }),
    find: stripeMethod66({ method: "GET", fullPath: "/v1/apps/secrets/find" })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Sessions.js
  var stripeMethod67 = StripeResource.method;
  var Sessions = StripeResource.extend({
    create: stripeMethod67({
      method: "POST",
      fullPath: "/v1/billing_portal/sessions"
    })
  });

  // node_modules/stripe/esm/resources/Checkout/Sessions.js
  var stripeMethod68 = StripeResource.method;
  var Sessions2 = StripeResource.extend({
    create: stripeMethod68({ method: "POST", fullPath: "/v1/checkout/sessions" }),
    retrieve: stripeMethod68({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}"
    }),
    update: stripeMethod68({
      method: "POST",
      fullPath: "/v1/checkout/sessions/{session}"
    }),
    list: stripeMethod68({
      method: "GET",
      fullPath: "/v1/checkout/sessions",
      methodType: "list"
    }),
    expire: stripeMethod68({
      method: "POST",
      fullPath: "/v1/checkout/sessions/{session}/expire"
    }),
    listLineItems: stripeMethod68({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Sessions.js
  var stripeMethod69 = StripeResource.method;
  var Sessions3 = StripeResource.extend({
    create: stripeMethod69({
      method: "POST",
      fullPath: "/v1/financial_connections/sessions"
    }),
    retrieve: stripeMethod69({
      method: "GET",
      fullPath: "/v1/financial_connections/sessions/{session}"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Settings.js
  var stripeMethod70 = StripeResource.method;
  var Settings = StripeResource.extend({
    retrieve: stripeMethod70({ method: "GET", fullPath: "/v1/tax/settings" }),
    update: stripeMethod70({ method: "POST", fullPath: "/v1/tax/settings" })
  });

  // node_modules/stripe/esm/resources/Climate/Suppliers.js
  var stripeMethod71 = StripeResource.method;
  var Suppliers = StripeResource.extend({
    retrieve: stripeMethod71({
      method: "GET",
      fullPath: "/v1/climate/suppliers/{supplier}"
    }),
    list: stripeMethod71({
      method: "GET",
      fullPath: "/v1/climate/suppliers",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/TestClocks.js
  var stripeMethod72 = StripeResource.method;
  var TestClocks = StripeResource.extend({
    create: stripeMethod72({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks"
    }),
    retrieve: stripeMethod72({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    list: stripeMethod72({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks",
      methodType: "list"
    }),
    del: stripeMethod72({
      method: "DELETE",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    advance: stripeMethod72({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Tokens.js
  var stripeMethod73 = StripeResource.method;
  var Tokens = StripeResource.extend({
    retrieve: stripeMethod73({
      method: "GET",
      fullPath: "/v1/issuing/tokens/{token}"
    }),
    update: stripeMethod73({
      method: "POST",
      fullPath: "/v1/issuing/tokens/{token}"
    }),
    list: stripeMethod73({
      method: "GET",
      fullPath: "/v1/issuing/tokens",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/TransactionEntries.js
  var stripeMethod74 = StripeResource.method;
  var TransactionEntries = StripeResource.extend({
    retrieve: stripeMethod74({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries/{id}"
    }),
    list: stripeMethod74({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Transactions.js
  var stripeMethod75 = StripeResource.method;
  var Transactions = StripeResource.extend({
    retrieve: stripeMethod75({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions/{transaction}"
    }),
    list: stripeMethod75({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Transactions.js
  var stripeMethod76 = StripeResource.method;
  var Transactions2 = StripeResource.extend({
    retrieve: stripeMethod76({
      method: "GET",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    update: stripeMethod76({
      method: "POST",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    list: stripeMethod76({
      method: "GET",
      fullPath: "/v1/issuing/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Transactions.js
  var stripeMethod77 = StripeResource.method;
  var Transactions3 = StripeResource.extend({
    retrieve: stripeMethod77({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}"
    }),
    createFromCalculation: stripeMethod77({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_from_calculation"
    }),
    createReversal: stripeMethod77({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_reversal"
    }),
    listLineItems: stripeMethod77({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js
  var stripeMethod78 = StripeResource.method;
  var Transactions4 = StripeResource.extend({
    createForceCapture: stripeMethod78({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
    }),
    createUnlinkedRefund: stripeMethod78({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
    }),
    refund: stripeMethod78({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/Transactions.js
  var stripeMethod79 = StripeResource.method;
  var Transactions5 = StripeResource.extend({
    retrieve: stripeMethod79({
      method: "GET",
      fullPath: "/v1/treasury/transactions/{id}"
    }),
    list: stripeMethod79({
      method: "GET",
      fullPath: "/v1/treasury/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueListItems.js
  var stripeMethod80 = StripeResource.method;
  var ValueListItems = StripeResource.extend({
    create: stripeMethod80({
      method: "POST",
      fullPath: "/v1/radar/value_list_items"
    }),
    retrieve: stripeMethod80({
      method: "GET",
      fullPath: "/v1/radar/value_list_items/{item}"
    }),
    list: stripeMethod80({
      method: "GET",
      fullPath: "/v1/radar/value_list_items",
      methodType: "list"
    }),
    del: stripeMethod80({
      method: "DELETE",
      fullPath: "/v1/radar/value_list_items/{item}"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueLists.js
  var stripeMethod81 = StripeResource.method;
  var ValueLists = StripeResource.extend({
    create: stripeMethod81({ method: "POST", fullPath: "/v1/radar/value_lists" }),
    retrieve: stripeMethod81({
      method: "GET",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    update: stripeMethod81({
      method: "POST",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    list: stripeMethod81({
      method: "GET",
      fullPath: "/v1/radar/value_lists",
      methodType: "list"
    }),
    del: stripeMethod81({
      method: "DELETE",
      fullPath: "/v1/radar/value_lists/{value_list}"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationReports.js
  var stripeMethod82 = StripeResource.method;
  var VerificationReports = StripeResource.extend({
    retrieve: stripeMethod82({
      method: "GET",
      fullPath: "/v1/identity/verification_reports/{report}"
    }),
    list: stripeMethod82({
      method: "GET",
      fullPath: "/v1/identity/verification_reports",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationSessions.js
  var stripeMethod83 = StripeResource.method;
  var VerificationSessions = StripeResource.extend({
    create: stripeMethod83({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions"
    }),
    retrieve: stripeMethod83({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    update: stripeMethod83({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    list: stripeMethod83({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions",
      methodType: "list"
    }),
    cancel: stripeMethod83({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/cancel"
    }),
    redact: stripeMethod83({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/redact"
    })
  });

  // node_modules/stripe/esm/resources/Accounts.js
  var stripeMethod84 = StripeResource.method;
  var Accounts3 = StripeResource.extend({
    create: stripeMethod84({ method: "POST", fullPath: "/v1/accounts" }),
    retrieve(id, ...args) {
      if (typeof id === "string") {
        return stripeMethod84({
          method: "GET",
          fullPath: "/v1/accounts/{id}"
        }).apply(this, [id, ...args]);
      } else {
        if (id === null || id === void 0) {
          [].shift.apply([id, ...args]);
        }
        return stripeMethod84({
          method: "GET",
          fullPath: "/v1/account"
        }).apply(this, [id, ...args]);
      }
    },
    update: stripeMethod84({ method: "POST", fullPath: "/v1/accounts/{account}" }),
    list: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts",
      methodType: "list"
    }),
    del: stripeMethod84({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
    createExternalAccount: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts"
    }),
    createLoginLink: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/login_links"
    }),
    createPerson: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons"
    }),
    deleteExternalAccount: stripeMethod84({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    deletePerson: stripeMethod84({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    listCapabilities: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities",
      methodType: "list"
    }),
    listExternalAccounts: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts",
      methodType: "list"
    }),
    listPersons: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons",
      methodType: "list"
    }),
    reject: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/reject"
    }),
    retrieveCurrent: stripeMethod84({ method: "GET", fullPath: "/v1/account" }),
    retrieveCapability: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    retrieveExternalAccount: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    retrievePerson: stripeMethod84({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    updateCapability: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    updateExternalAccount: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    updatePerson: stripeMethod84({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    })
  });

  // node_modules/stripe/esm/resources/AccountLinks.js
  var stripeMethod85 = StripeResource.method;
  var AccountLinks2 = StripeResource.extend({
    create: stripeMethod85({ method: "POST", fullPath: "/v1/account_links" })
  });

  // node_modules/stripe/esm/resources/AccountSessions.js
  var stripeMethod86 = StripeResource.method;
  var AccountSessions = StripeResource.extend({
    create: stripeMethod86({ method: "POST", fullPath: "/v1/account_sessions" })
  });

  // node_modules/stripe/esm/resources/ApplePayDomains.js
  var stripeMethod87 = StripeResource.method;
  var ApplePayDomains = StripeResource.extend({
    create: stripeMethod87({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
    retrieve: stripeMethod87({
      method: "GET",
      fullPath: "/v1/apple_pay/domains/{domain}"
    }),
    list: stripeMethod87({
      method: "GET",
      fullPath: "/v1/apple_pay/domains",
      methodType: "list"
    }),
    del: stripeMethod87({
      method: "DELETE",
      fullPath: "/v1/apple_pay/domains/{domain}"
    })
  });

  // node_modules/stripe/esm/resources/ApplicationFees.js
  var stripeMethod88 = StripeResource.method;
  var ApplicationFees = StripeResource.extend({
    retrieve: stripeMethod88({
      method: "GET",
      fullPath: "/v1/application_fees/{id}"
    }),
    list: stripeMethod88({
      method: "GET",
      fullPath: "/v1/application_fees",
      methodType: "list"
    }),
    createRefund: stripeMethod88({
      method: "POST",
      fullPath: "/v1/application_fees/{id}/refunds"
    }),
    listRefunds: stripeMethod88({
      method: "GET",
      fullPath: "/v1/application_fees/{id}/refunds",
      methodType: "list"
    }),
    retrieveRefund: stripeMethod88({
      method: "GET",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    }),
    updateRefund: stripeMethod88({
      method: "POST",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    })
  });

  // node_modules/stripe/esm/resources/Balance.js
  var stripeMethod89 = StripeResource.method;
  var Balance = StripeResource.extend({
    retrieve: stripeMethod89({ method: "GET", fullPath: "/v1/balance" })
  });

  // node_modules/stripe/esm/resources/BalanceSettings.js
  var stripeMethod90 = StripeResource.method;
  var BalanceSettings = StripeResource.extend({
    retrieve: stripeMethod90({ method: "GET", fullPath: "/v1/balance_settings" }),
    update: stripeMethod90({ method: "POST", fullPath: "/v1/balance_settings" })
  });

  // node_modules/stripe/esm/resources/BalanceTransactions.js
  var stripeMethod91 = StripeResource.method;
  var BalanceTransactions = StripeResource.extend({
    retrieve: stripeMethod91({
      method: "GET",
      fullPath: "/v1/balance_transactions/{id}"
    }),
    list: stripeMethod91({
      method: "GET",
      fullPath: "/v1/balance_transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Charges.js
  var stripeMethod92 = StripeResource.method;
  var Charges = StripeResource.extend({
    create: stripeMethod92({ method: "POST", fullPath: "/v1/charges" }),
    retrieve: stripeMethod92({ method: "GET", fullPath: "/v1/charges/{charge}" }),
    update: stripeMethod92({ method: "POST", fullPath: "/v1/charges/{charge}" }),
    list: stripeMethod92({
      method: "GET",
      fullPath: "/v1/charges",
      methodType: "list"
    }),
    capture: stripeMethod92({
      method: "POST",
      fullPath: "/v1/charges/{charge}/capture"
    }),
    search: stripeMethod92({
      method: "GET",
      fullPath: "/v1/charges/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/ConfirmationTokens.js
  var stripeMethod93 = StripeResource.method;
  var ConfirmationTokens2 = StripeResource.extend({
    retrieve: stripeMethod93({
      method: "GET",
      fullPath: "/v1/confirmation_tokens/{confirmation_token}"
    })
  });

  // node_modules/stripe/esm/resources/CountrySpecs.js
  var stripeMethod94 = StripeResource.method;
  var CountrySpecs = StripeResource.extend({
    retrieve: stripeMethod94({
      method: "GET",
      fullPath: "/v1/country_specs/{country}"
    }),
    list: stripeMethod94({
      method: "GET",
      fullPath: "/v1/country_specs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Coupons.js
  var stripeMethod95 = StripeResource.method;
  var Coupons = StripeResource.extend({
    create: stripeMethod95({ method: "POST", fullPath: "/v1/coupons" }),
    retrieve: stripeMethod95({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
    update: stripeMethod95({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
    list: stripeMethod95({
      method: "GET",
      fullPath: "/v1/coupons",
      methodType: "list"
    }),
    del: stripeMethod95({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
  });

  // node_modules/stripe/esm/resources/CreditNotes.js
  var stripeMethod96 = StripeResource.method;
  var CreditNotes = StripeResource.extend({
    create: stripeMethod96({ method: "POST", fullPath: "/v1/credit_notes" }),
    retrieve: stripeMethod96({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
    update: stripeMethod96({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
    list: stripeMethod96({
      method: "GET",
      fullPath: "/v1/credit_notes",
      methodType: "list"
    }),
    listLineItems: stripeMethod96({
      method: "GET",
      fullPath: "/v1/credit_notes/{credit_note}/lines",
      methodType: "list"
    }),
    listPreviewLineItems: stripeMethod96({
      method: "GET",
      fullPath: "/v1/credit_notes/preview/lines",
      methodType: "list"
    }),
    preview: stripeMethod96({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
    voidCreditNote: stripeMethod96({
      method: "POST",
      fullPath: "/v1/credit_notes/{id}/void"
    })
  });

  // node_modules/stripe/esm/resources/CustomerSessions.js
  var stripeMethod97 = StripeResource.method;
  var CustomerSessions = StripeResource.extend({
    create: stripeMethod97({ method: "POST", fullPath: "/v1/customer_sessions" })
  });

  // node_modules/stripe/esm/resources/Customers.js
  var stripeMethod98 = StripeResource.method;
  var Customers2 = StripeResource.extend({
    create: stripeMethod98({ method: "POST", fullPath: "/v1/customers" }),
    retrieve: stripeMethod98({ method: "GET", fullPath: "/v1/customers/{customer}" }),
    update: stripeMethod98({ method: "POST", fullPath: "/v1/customers/{customer}" }),
    list: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers",
      methodType: "list"
    }),
    del: stripeMethod98({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
    createBalanceTransaction: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions"
    }),
    createFundingInstructions: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/funding_instructions"
    }),
    createSource: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources"
    }),
    createTaxId: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/tax_ids"
    }),
    deleteDiscount: stripeMethod98({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/discount"
    }),
    deleteSource: stripeMethod98({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    deleteTaxId: stripeMethod98({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    listBalanceTransactions: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions",
      methodType: "list"
    }),
    listCashBalanceTransactions: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions",
      methodType: "list"
    }),
    listPaymentMethods: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods",
      methodType: "list"
    }),
    listSources: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources",
      methodType: "list"
    }),
    listTaxIds: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids",
      methodType: "list"
    }),
    retrieveBalanceTransaction: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    retrieveCashBalance: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    retrieveCashBalanceTransaction: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
    }),
    retrievePaymentMethod: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
    }),
    retrieveSource: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    retrieveTaxId: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    search: stripeMethod98({
      method: "GET",
      fullPath: "/v1/customers/search",
      methodType: "search"
    }),
    updateBalanceTransaction: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    updateCashBalance: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    updateSource: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    verifySource: stripeMethod98({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}/verify"
    })
  });

  // node_modules/stripe/esm/resources/Disputes.js
  var stripeMethod99 = StripeResource.method;
  var Disputes2 = StripeResource.extend({
    retrieve: stripeMethod99({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
    update: stripeMethod99({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
    list: stripeMethod99({
      method: "GET",
      fullPath: "/v1/disputes",
      methodType: "list"
    }),
    close: stripeMethod99({
      method: "POST",
      fullPath: "/v1/disputes/{dispute}/close"
    })
  });

  // node_modules/stripe/esm/resources/EphemeralKeys.js
  var stripeMethod100 = StripeResource.method;
  var EphemeralKeys = StripeResource.extend({
    create: stripeMethod100({
      method: "POST",
      fullPath: "/v1/ephemeral_keys",
      validator: (data, options) => {
        if (!options.headers || !options.headers["Stripe-Version"]) {
          throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
        }
      }
    }),
    del: stripeMethod100({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
  });

  // node_modules/stripe/esm/resources/Events.js
  var stripeMethod101 = StripeResource.method;
  var Events2 = StripeResource.extend({
    retrieve: stripeMethod101({ method: "GET", fullPath: "/v1/events/{id}" }),
    list: stripeMethod101({
      method: "GET",
      fullPath: "/v1/events",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/ExchangeRates.js
  var stripeMethod102 = StripeResource.method;
  var ExchangeRates = StripeResource.extend({
    retrieve: stripeMethod102({
      method: "GET",
      fullPath: "/v1/exchange_rates/{rate_id}"
    }),
    list: stripeMethod102({
      method: "GET",
      fullPath: "/v1/exchange_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FileLinks.js
  var stripeMethod103 = StripeResource.method;
  var FileLinks = StripeResource.extend({
    create: stripeMethod103({ method: "POST", fullPath: "/v1/file_links" }),
    retrieve: stripeMethod103({ method: "GET", fullPath: "/v1/file_links/{link}" }),
    update: stripeMethod103({ method: "POST", fullPath: "/v1/file_links/{link}" }),
    list: stripeMethod103({
      method: "GET",
      fullPath: "/v1/file_links",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/multipart.js
  var multipartDataGenerator = (method, data, headers) => {
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode("\r\n");
    function push(l) {
      const prevBuffer = buffer;
      const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
      buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
      buffer.set(prevBuffer);
      buffer.set(newBuffer, prevBuffer.length);
      buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
      return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
    }
    const flattenedData = flattenAndStringify(data);
    for (const k in flattenedData) {
      if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
        continue;
      }
      const v = flattenedData[k];
      push(`--${segno}`);
      if (Object.prototype.hasOwnProperty.call(v, "data")) {
        const typedEntry = v;
        push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
        push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
        push("");
        push(typedEntry.data);
      } else {
        push(`Content-Disposition: form-data; name=${q(k)}`);
        push("");
        push(v);
      }
    }
    push(`--${segno}--`);
    return buffer;
  };
  function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== "POST") {
      return callback(null, queryStringifyRequestData(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData) => {
      const buffer = multipartDataGenerator(method, bufferedData, headers);
      return callback(null, buffer);
    }).catch((err) => callback(err, null));
  }

  // node_modules/stripe/esm/resources/Files.js
  var stripeMethod104 = StripeResource.method;
  var Files = StripeResource.extend({
    create: stripeMethod104({
      method: "POST",
      fullPath: "/v1/files",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      host: "files.stripe.com"
    }),
    retrieve: stripeMethod104({ method: "GET", fullPath: "/v1/files/{file}" }),
    list: stripeMethod104({
      method: "GET",
      fullPath: "/v1/files",
      methodType: "list"
    }),
    requestDataProcessor: multipartRequestDataProcessor
  });

  // node_modules/stripe/esm/resources/InvoiceItems.js
  var stripeMethod105 = StripeResource.method;
  var InvoiceItems = StripeResource.extend({
    create: stripeMethod105({ method: "POST", fullPath: "/v1/invoiceitems" }),
    retrieve: stripeMethod105({
      method: "GET",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    update: stripeMethod105({
      method: "POST",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    list: stripeMethod105({
      method: "GET",
      fullPath: "/v1/invoiceitems",
      methodType: "list"
    }),
    del: stripeMethod105({
      method: "DELETE",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    })
  });

  // node_modules/stripe/esm/resources/InvoicePayments.js
  var stripeMethod106 = StripeResource.method;
  var InvoicePayments = StripeResource.extend({
    retrieve: stripeMethod106({
      method: "GET",
      fullPath: "/v1/invoice_payments/{invoice_payment}"
    }),
    list: stripeMethod106({
      method: "GET",
      fullPath: "/v1/invoice_payments",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js
  var stripeMethod107 = StripeResource.method;
  var InvoiceRenderingTemplates = StripeResource.extend({
    retrieve: stripeMethod107({
      method: "GET",
      fullPath: "/v1/invoice_rendering_templates/{template}"
    }),
    list: stripeMethod107({
      method: "GET",
      fullPath: "/v1/invoice_rendering_templates",
      methodType: "list"
    }),
    archive: stripeMethod107({
      method: "POST",
      fullPath: "/v1/invoice_rendering_templates/{template}/archive"
    }),
    unarchive: stripeMethod107({
      method: "POST",
      fullPath: "/v1/invoice_rendering_templates/{template}/unarchive"
    })
  });

  // node_modules/stripe/esm/resources/Invoices.js
  var stripeMethod108 = StripeResource.method;
  var Invoices = StripeResource.extend({
    create: stripeMethod108({ method: "POST", fullPath: "/v1/invoices" }),
    retrieve: stripeMethod108({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
    update: stripeMethod108({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
    list: stripeMethod108({
      method: "GET",
      fullPath: "/v1/invoices",
      methodType: "list"
    }),
    del: stripeMethod108({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
    addLines: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/add_lines"
    }),
    attachPayment: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/attach_payment"
    }),
    createPreview: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/create_preview"
    }),
    finalizeInvoice: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/finalize"
    }),
    listLineItems: stripeMethod108({
      method: "GET",
      fullPath: "/v1/invoices/{invoice}/lines",
      methodType: "list"
    }),
    markUncollectible: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
    }),
    pay: stripeMethod108({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
    removeLines: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/remove_lines"
    }),
    search: stripeMethod108({
      method: "GET",
      fullPath: "/v1/invoices/search",
      methodType: "search"
    }),
    sendInvoice: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/send"
    }),
    updateLines: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/update_lines"
    }),
    updateLineItem: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
    }),
    voidInvoice: stripeMethod108({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/void"
    })
  });

  // node_modules/stripe/esm/resources/Mandates.js
  var stripeMethod109 = StripeResource.method;
  var Mandates = StripeResource.extend({
    retrieve: stripeMethod109({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
  });

  // node_modules/stripe/esm/resources/OAuth.js
  var stripeMethod110 = StripeResource.method;
  var oAuthHost = "connect.stripe.com";
  var OAuth = StripeResource.extend({
    basePath: "/",
    authorizeUrl(params, options) {
      params = params || {};
      options = options || {};
      let path = "oauth/authorize";
      if (options.express) {
        path = `express/${path}`;
      }
      if (!params.response_type) {
        params.response_type = "code";
      }
      if (!params.client_id) {
        params.client_id = this._stripe.getClientId();
      }
      if (!params.scope) {
        params.scope = "read_write";
      }
      return `https://${oAuthHost}/${path}?${queryStringifyRequestData(params)}`;
    },
    token: stripeMethod110({
      method: "POST",
      path: "oauth/token",
      host: oAuthHost
    }),
    deauthorize(spec, ...args) {
      if (!spec.client_id) {
        spec.client_id = this._stripe.getClientId();
      }
      return stripeMethod110({
        method: "POST",
        path: "oauth/deauthorize",
        host: oAuthHost
      }).apply(this, [spec, ...args]);
    }
  });

  // node_modules/stripe/esm/resources/PaymentAttemptRecords.js
  var stripeMethod111 = StripeResource.method;
  var PaymentAttemptRecords = StripeResource.extend({
    retrieve: stripeMethod111({
      method: "GET",
      fullPath: "/v1/payment_attempt_records/{id}"
    }),
    list: stripeMethod111({
      method: "GET",
      fullPath: "/v1/payment_attempt_records",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentIntents.js
  var stripeMethod112 = StripeResource.method;
  var PaymentIntents = StripeResource.extend({
    create: stripeMethod112({ method: "POST", fullPath: "/v1/payment_intents" }),
    retrieve: stripeMethod112({
      method: "GET",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    update: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    list: stripeMethod112({
      method: "GET",
      fullPath: "/v1/payment_intents",
      methodType: "list"
    }),
    applyCustomerBalance: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
    }),
    cancel: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/cancel"
    }),
    capture: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/capture"
    }),
    confirm: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/confirm"
    }),
    incrementAuthorization: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/increment_authorization"
    }),
    listAmountDetailsLineItems: stripeMethod112({
      method: "GET",
      fullPath: "/v1/payment_intents/{intent}/amount_details_line_items",
      methodType: "list"
    }),
    search: stripeMethod112({
      method: "GET",
      fullPath: "/v1/payment_intents/search",
      methodType: "search"
    }),
    verifyMicrodeposits: stripeMethod112({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/PaymentLinks.js
  var stripeMethod113 = StripeResource.method;
  var PaymentLinks = StripeResource.extend({
    create: stripeMethod113({ method: "POST", fullPath: "/v1/payment_links" }),
    retrieve: stripeMethod113({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    update: stripeMethod113({
      method: "POST",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    list: stripeMethod113({
      method: "GET",
      fullPath: "/v1/payment_links",
      methodType: "list"
    }),
    listLineItems: stripeMethod113({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethodConfigurations.js
  var stripeMethod114 = StripeResource.method;
  var PaymentMethodConfigurations = StripeResource.extend({
    create: stripeMethod114({
      method: "POST",
      fullPath: "/v1/payment_method_configurations"
    }),
    retrieve: stripeMethod114({
      method: "GET",
      fullPath: "/v1/payment_method_configurations/{configuration}"
    }),
    update: stripeMethod114({
      method: "POST",
      fullPath: "/v1/payment_method_configurations/{configuration}"
    }),
    list: stripeMethod114({
      method: "GET",
      fullPath: "/v1/payment_method_configurations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethodDomains.js
  var stripeMethod115 = StripeResource.method;
  var PaymentMethodDomains = StripeResource.extend({
    create: stripeMethod115({
      method: "POST",
      fullPath: "/v1/payment_method_domains"
    }),
    retrieve: stripeMethod115({
      method: "GET",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}"
    }),
    update: stripeMethod115({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}"
    }),
    list: stripeMethod115({
      method: "GET",
      fullPath: "/v1/payment_method_domains",
      methodType: "list"
    }),
    validate: stripeMethod115({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethods.js
  var stripeMethod116 = StripeResource.method;
  var PaymentMethods = StripeResource.extend({
    create: stripeMethod116({ method: "POST", fullPath: "/v1/payment_methods" }),
    retrieve: stripeMethod116({
      method: "GET",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    update: stripeMethod116({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    list: stripeMethod116({
      method: "GET",
      fullPath: "/v1/payment_methods",
      methodType: "list"
    }),
    attach: stripeMethod116({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/attach"
    }),
    detach: stripeMethod116({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/detach"
    })
  });

  // node_modules/stripe/esm/resources/PaymentRecords.js
  var stripeMethod117 = StripeResource.method;
  var PaymentRecords = StripeResource.extend({
    retrieve: stripeMethod117({ method: "GET", fullPath: "/v1/payment_records/{id}" }),
    reportPayment: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/report_payment"
    }),
    reportPaymentAttempt: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_payment_attempt"
    }),
    reportPaymentAttemptCanceled: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_payment_attempt_canceled"
    }),
    reportPaymentAttemptFailed: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_payment_attempt_failed"
    }),
    reportPaymentAttemptGuaranteed: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_payment_attempt_guaranteed"
    }),
    reportPaymentAttemptInformational: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_payment_attempt_informational"
    }),
    reportRefund: stripeMethod117({
      method: "POST",
      fullPath: "/v1/payment_records/{id}/report_refund"
    })
  });

  // node_modules/stripe/esm/resources/Payouts.js
  var stripeMethod118 = StripeResource.method;
  var Payouts = StripeResource.extend({
    create: stripeMethod118({ method: "POST", fullPath: "/v1/payouts" }),
    retrieve: stripeMethod118({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
    update: stripeMethod118({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
    list: stripeMethod118({
      method: "GET",
      fullPath: "/v1/payouts",
      methodType: "list"
    }),
    cancel: stripeMethod118({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/cancel"
    }),
    reverse: stripeMethod118({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/reverse"
    })
  });

  // node_modules/stripe/esm/resources/Plans.js
  var stripeMethod119 = StripeResource.method;
  var Plans = StripeResource.extend({
    create: stripeMethod119({ method: "POST", fullPath: "/v1/plans" }),
    retrieve: stripeMethod119({ method: "GET", fullPath: "/v1/plans/{plan}" }),
    update: stripeMethod119({ method: "POST", fullPath: "/v1/plans/{plan}" }),
    list: stripeMethod119({
      method: "GET",
      fullPath: "/v1/plans",
      methodType: "list"
    }),
    del: stripeMethod119({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
  });

  // node_modules/stripe/esm/resources/Prices.js
  var stripeMethod120 = StripeResource.method;
  var Prices = StripeResource.extend({
    create: stripeMethod120({ method: "POST", fullPath: "/v1/prices" }),
    retrieve: stripeMethod120({ method: "GET", fullPath: "/v1/prices/{price}" }),
    update: stripeMethod120({ method: "POST", fullPath: "/v1/prices/{price}" }),
    list: stripeMethod120({
      method: "GET",
      fullPath: "/v1/prices",
      methodType: "list"
    }),
    search: stripeMethod120({
      method: "GET",
      fullPath: "/v1/prices/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/Products.js
  var stripeMethod121 = StripeResource.method;
  var Products2 = StripeResource.extend({
    create: stripeMethod121({ method: "POST", fullPath: "/v1/products" }),
    retrieve: stripeMethod121({ method: "GET", fullPath: "/v1/products/{id}" }),
    update: stripeMethod121({ method: "POST", fullPath: "/v1/products/{id}" }),
    list: stripeMethod121({
      method: "GET",
      fullPath: "/v1/products",
      methodType: "list"
    }),
    del: stripeMethod121({ method: "DELETE", fullPath: "/v1/products/{id}" }),
    createFeature: stripeMethod121({
      method: "POST",
      fullPath: "/v1/products/{product}/features"
    }),
    deleteFeature: stripeMethod121({
      method: "DELETE",
      fullPath: "/v1/products/{product}/features/{id}"
    }),
    listFeatures: stripeMethod121({
      method: "GET",
      fullPath: "/v1/products/{product}/features",
      methodType: "list"
    }),
    retrieveFeature: stripeMethod121({
      method: "GET",
      fullPath: "/v1/products/{product}/features/{id}"
    }),
    search: stripeMethod121({
      method: "GET",
      fullPath: "/v1/products/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/PromotionCodes.js
  var stripeMethod122 = StripeResource.method;
  var PromotionCodes = StripeResource.extend({
    create: stripeMethod122({ method: "POST", fullPath: "/v1/promotion_codes" }),
    retrieve: stripeMethod122({
      method: "GET",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    update: stripeMethod122({
      method: "POST",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    list: stripeMethod122({
      method: "GET",
      fullPath: "/v1/promotion_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Quotes.js
  var stripeMethod123 = StripeResource.method;
  var Quotes = StripeResource.extend({
    create: stripeMethod123({ method: "POST", fullPath: "/v1/quotes" }),
    retrieve: stripeMethod123({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
    update: stripeMethod123({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
    list: stripeMethod123({
      method: "GET",
      fullPath: "/v1/quotes",
      methodType: "list"
    }),
    accept: stripeMethod123({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
    cancel: stripeMethod123({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
    finalizeQuote: stripeMethod123({
      method: "POST",
      fullPath: "/v1/quotes/{quote}/finalize"
    }),
    listComputedUpfrontLineItems: stripeMethod123({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
      methodType: "list"
    }),
    listLineItems: stripeMethod123({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/line_items",
      methodType: "list"
    }),
    pdf: stripeMethod123({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/pdf",
      host: "files.stripe.com",
      streaming: true
    })
  });

  // node_modules/stripe/esm/resources/Refunds.js
  var stripeMethod124 = StripeResource.method;
  var Refunds2 = StripeResource.extend({
    create: stripeMethod124({ method: "POST", fullPath: "/v1/refunds" }),
    retrieve: stripeMethod124({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
    update: stripeMethod124({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
    list: stripeMethod124({
      method: "GET",
      fullPath: "/v1/refunds",
      methodType: "list"
    }),
    cancel: stripeMethod124({
      method: "POST",
      fullPath: "/v1/refunds/{refund}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Reviews.js
  var stripeMethod125 = StripeResource.method;
  var Reviews = StripeResource.extend({
    retrieve: stripeMethod125({ method: "GET", fullPath: "/v1/reviews/{review}" }),
    list: stripeMethod125({
      method: "GET",
      fullPath: "/v1/reviews",
      methodType: "list"
    }),
    approve: stripeMethod125({
      method: "POST",
      fullPath: "/v1/reviews/{review}/approve"
    })
  });

  // node_modules/stripe/esm/resources/SetupAttempts.js
  var stripeMethod126 = StripeResource.method;
  var SetupAttempts = StripeResource.extend({
    list: stripeMethod126({
      method: "GET",
      fullPath: "/v1/setup_attempts",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/SetupIntents.js
  var stripeMethod127 = StripeResource.method;
  var SetupIntents = StripeResource.extend({
    create: stripeMethod127({ method: "POST", fullPath: "/v1/setup_intents" }),
    retrieve: stripeMethod127({
      method: "GET",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    update: stripeMethod127({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    list: stripeMethod127({
      method: "GET",
      fullPath: "/v1/setup_intents",
      methodType: "list"
    }),
    cancel: stripeMethod127({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/cancel"
    }),
    confirm: stripeMethod127({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/confirm"
    }),
    verifyMicrodeposits: stripeMethod127({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/ShippingRates.js
  var stripeMethod128 = StripeResource.method;
  var ShippingRates = StripeResource.extend({
    create: stripeMethod128({ method: "POST", fullPath: "/v1/shipping_rates" }),
    retrieve: stripeMethod128({
      method: "GET",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    update: stripeMethod128({
      method: "POST",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    list: stripeMethod128({
      method: "GET",
      fullPath: "/v1/shipping_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sources.js
  var stripeMethod129 = StripeResource.method;
  var Sources = StripeResource.extend({
    create: stripeMethod129({ method: "POST", fullPath: "/v1/sources" }),
    retrieve: stripeMethod129({ method: "GET", fullPath: "/v1/sources/{source}" }),
    update: stripeMethod129({ method: "POST", fullPath: "/v1/sources/{source}" }),
    listSourceTransactions: stripeMethod129({
      method: "GET",
      fullPath: "/v1/sources/{source}/source_transactions",
      methodType: "list"
    }),
    verify: stripeMethod129({
      method: "POST",
      fullPath: "/v1/sources/{source}/verify"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionItems.js
  var stripeMethod130 = StripeResource.method;
  var SubscriptionItems = StripeResource.extend({
    create: stripeMethod130({ method: "POST", fullPath: "/v1/subscription_items" }),
    retrieve: stripeMethod130({
      method: "GET",
      fullPath: "/v1/subscription_items/{item}"
    }),
    update: stripeMethod130({
      method: "POST",
      fullPath: "/v1/subscription_items/{item}"
    }),
    list: stripeMethod130({
      method: "GET",
      fullPath: "/v1/subscription_items",
      methodType: "list"
    }),
    del: stripeMethod130({
      method: "DELETE",
      fullPath: "/v1/subscription_items/{item}"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionSchedules.js
  var stripeMethod131 = StripeResource.method;
  var SubscriptionSchedules = StripeResource.extend({
    create: stripeMethod131({
      method: "POST",
      fullPath: "/v1/subscription_schedules"
    }),
    retrieve: stripeMethod131({
      method: "GET",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    update: stripeMethod131({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    list: stripeMethod131({
      method: "GET",
      fullPath: "/v1/subscription_schedules",
      methodType: "list"
    }),
    cancel: stripeMethod131({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/cancel"
    }),
    release: stripeMethod131({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/release"
    })
  });

  // node_modules/stripe/esm/resources/Subscriptions.js
  var stripeMethod132 = StripeResource.method;
  var Subscriptions = StripeResource.extend({
    create: stripeMethod132({ method: "POST", fullPath: "/v1/subscriptions" }),
    retrieve: stripeMethod132({
      method: "GET",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    update: stripeMethod132({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    list: stripeMethod132({
      method: "GET",
      fullPath: "/v1/subscriptions",
      methodType: "list"
    }),
    cancel: stripeMethod132({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    deleteDiscount: stripeMethod132({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
    }),
    migrate: stripeMethod132({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription}/migrate"
    }),
    resume: stripeMethod132({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription}/resume"
    }),
    search: stripeMethod132({
      method: "GET",
      fullPath: "/v1/subscriptions/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/TaxCodes.js
  var stripeMethod133 = StripeResource.method;
  var TaxCodes = StripeResource.extend({
    retrieve: stripeMethod133({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
    list: stripeMethod133({
      method: "GET",
      fullPath: "/v1/tax_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TaxIds.js
  var stripeMethod134 = StripeResource.method;
  var TaxIds = StripeResource.extend({
    create: stripeMethod134({ method: "POST", fullPath: "/v1/tax_ids" }),
    retrieve: stripeMethod134({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
    list: stripeMethod134({
      method: "GET",
      fullPath: "/v1/tax_ids",
      methodType: "list"
    }),
    del: stripeMethod134({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
  });

  // node_modules/stripe/esm/resources/TaxRates.js
  var stripeMethod135 = StripeResource.method;
  var TaxRates = StripeResource.extend({
    create: stripeMethod135({ method: "POST", fullPath: "/v1/tax_rates" }),
    retrieve: stripeMethod135({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
    update: stripeMethod135({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
    list: stripeMethod135({
      method: "GET",
      fullPath: "/v1/tax_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tokens.js
  var stripeMethod136 = StripeResource.method;
  var Tokens2 = StripeResource.extend({
    create: stripeMethod136({ method: "POST", fullPath: "/v1/tokens" }),
    retrieve: stripeMethod136({ method: "GET", fullPath: "/v1/tokens/{token}" })
  });

  // node_modules/stripe/esm/resources/Topups.js
  var stripeMethod137 = StripeResource.method;
  var Topups = StripeResource.extend({
    create: stripeMethod137({ method: "POST", fullPath: "/v1/topups" }),
    retrieve: stripeMethod137({ method: "GET", fullPath: "/v1/topups/{topup}" }),
    update: stripeMethod137({ method: "POST", fullPath: "/v1/topups/{topup}" }),
    list: stripeMethod137({
      method: "GET",
      fullPath: "/v1/topups",
      methodType: "list"
    }),
    cancel: stripeMethod137({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
  });

  // node_modules/stripe/esm/resources/Transfers.js
  var stripeMethod138 = StripeResource.method;
  var Transfers = StripeResource.extend({
    create: stripeMethod138({ method: "POST", fullPath: "/v1/transfers" }),
    retrieve: stripeMethod138({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
    update: stripeMethod138({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
    list: stripeMethod138({
      method: "GET",
      fullPath: "/v1/transfers",
      methodType: "list"
    }),
    createReversal: stripeMethod138({
      method: "POST",
      fullPath: "/v1/transfers/{id}/reversals"
    }),
    listReversals: stripeMethod138({
      method: "GET",
      fullPath: "/v1/transfers/{id}/reversals",
      methodType: "list"
    }),
    retrieveReversal: stripeMethod138({
      method: "GET",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    }),
    updateReversal: stripeMethod138({
      method: "POST",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    })
  });

  // node_modules/stripe/esm/resources/WebhookEndpoints.js
  var stripeMethod139 = StripeResource.method;
  var WebhookEndpoints = StripeResource.extend({
    create: stripeMethod139({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
    retrieve: stripeMethod139({
      method: "GET",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    update: stripeMethod139({
      method: "POST",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    list: stripeMethod139({
      method: "GET",
      fullPath: "/v1/webhook_endpoints",
      methodType: "list"
    }),
    del: stripeMethod139({
      method: "DELETE",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    })
  });

  // node_modules/stripe/esm/resources.js
  var Apps = resourceNamespace("apps", { Secrets });
  var Billing = resourceNamespace("billing", {
    Alerts,
    CreditBalanceSummary,
    CreditBalanceTransactions,
    CreditGrants,
    MeterEventAdjustments,
    MeterEvents,
    Meters
  });
  var BillingPortal = resourceNamespace("billingPortal", {
    Configurations,
    Sessions
  });
  var Checkout = resourceNamespace("checkout", {
    Sessions: Sessions2
  });
  var Climate = resourceNamespace("climate", {
    Orders,
    Products,
    Suppliers
  });
  var Entitlements = resourceNamespace("entitlements", {
    ActiveEntitlements,
    Features
  });
  var FinancialConnections = resourceNamespace("financialConnections", {
    Accounts,
    Sessions: Sessions3,
    Transactions
  });
  var Forwarding = resourceNamespace("forwarding", {
    Requests
  });
  var Identity = resourceNamespace("identity", {
    VerificationReports,
    VerificationSessions
  });
  var Issuing = resourceNamespace("issuing", {
    Authorizations,
    Cardholders,
    Cards,
    Disputes,
    PersonalizationDesigns,
    PhysicalBundles,
    Tokens,
    Transactions: Transactions2
  });
  var Radar = resourceNamespace("radar", {
    EarlyFraudWarnings,
    PaymentEvaluations,
    ValueListItems,
    ValueLists
  });
  var Reporting = resourceNamespace("reporting", {
    ReportRuns,
    ReportTypes
  });
  var Sigma = resourceNamespace("sigma", {
    ScheduledQueryRuns
  });
  var Tax = resourceNamespace("tax", {
    Associations,
    Calculations,
    Registrations,
    Settings,
    Transactions: Transactions3
  });
  var Terminal = resourceNamespace("terminal", {
    Configurations: Configurations2,
    ConnectionTokens,
    Locations,
    OnboardingLinks,
    Readers
  });
  var TestHelpers = resourceNamespace("testHelpers", {
    ConfirmationTokens,
    Customers,
    Refunds,
    TestClocks,
    Issuing: resourceNamespace("issuing", {
      Authorizations: Authorizations2,
      Cards: Cards2,
      PersonalizationDesigns: PersonalizationDesigns2,
      Transactions: Transactions4
    }),
    Terminal: resourceNamespace("terminal", {
      Readers: Readers2
    }),
    Treasury: resourceNamespace("treasury", {
      InboundTransfers,
      OutboundPayments,
      OutboundTransfers,
      ReceivedCredits,
      ReceivedDebits
    })
  });
  var Treasury = resourceNamespace("treasury", {
    CreditReversals,
    DebitReversals,
    FinancialAccounts,
    InboundTransfers: InboundTransfers2,
    OutboundPayments: OutboundPayments2,
    OutboundTransfers: OutboundTransfers2,
    ReceivedCredits: ReceivedCredits2,
    ReceivedDebits: ReceivedDebits2,
    TransactionEntries,
    Transactions: Transactions5
  });
  var V2 = resourceNamespace("v2", {
    Billing: resourceNamespace("billing", {
      MeterEventAdjustments: MeterEventAdjustments2,
      MeterEventSession,
      MeterEventStream,
      MeterEvents: MeterEvents2
    }),
    Core: resourceNamespace("core", {
      AccountLinks,
      AccountTokens,
      Accounts: Accounts2,
      EventDestinations,
      Events
    })
  });

  // node_modules/stripe/esm/stripe.core.js
  var DEFAULT_HOST = "api.stripe.com";
  var DEFAULT_PORT = "443";
  var DEFAULT_BASE_PATH = "/v1/";
  var DEFAULT_API_VERSION = ApiVersion;
  var DEFAULT_TIMEOUT = 8e4;
  var MAX_NETWORK_RETRY_DELAY_SEC = 5;
  var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
  var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
  var ALLOWED_CONFIG_PROPERTIES = [
    "authenticator",
    "apiVersion",
    "typescript",
    "maxNetworkRetries",
    "httpAgent",
    "httpClient",
    "timeout",
    "host",
    "port",
    "protocol",
    "telemetry",
    "appInfo",
    "stripeAccount",
    "stripeContext"
  ];
  var defaultRequestSenderFactory = (stripe2) => new RequestSender(stripe2, StripeResource.MAX_BUFFERED_REQUEST_METRICS);
  function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe2.PACKAGE_VERSION = "20.3.1";
    Stripe2.API_VERSION = ApiVersion;
    Stripe2.USER_AGENT = Object.assign({ bindings_version: Stripe2.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: false }, determineProcessUserAgentProperties());
    Stripe2.StripeResource = StripeResource;
    Stripe2.StripeContext = StripeContext;
    Stripe2.resources = resources_exports;
    Stripe2.HttpClient = HttpClient;
    Stripe2.HttpClientResponse = HttpClientResponse;
    Stripe2.CryptoProvider = CryptoProvider;
    Stripe2.webhooks = createWebhooks(platformFunctions);
    function Stripe2(key, config = {}) {
      if (!(this instanceof Stripe2)) {
        return new Stripe2(key, config);
      }
      const props = this._getPropsFromConfig(config);
      this._platformFunctions = platformFunctions;
      Object.defineProperty(this, "_emitter", {
        value: this._platformFunctions.createEmitter(),
        enumerable: false,
        configurable: false,
        writable: false
      });
      this.VERSION = Stripe2.PACKAGE_VERSION;
      this.on = this._emitter.on.bind(this._emitter);
      this.once = this._emitter.once.bind(this._emitter);
      this.off = this._emitter.removeListener.bind(this._emitter);
      const agent = props.httpAgent || null;
      this._api = {
        host: props.host || DEFAULT_HOST,
        port: props.port || DEFAULT_PORT,
        protocol: props.protocol || "https",
        basePath: DEFAULT_BASE_PATH,
        version: props.apiVersion || DEFAULT_API_VERSION,
        timeout: validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
        maxNetworkRetries: validateInteger("maxNetworkRetries", props.maxNetworkRetries, 2),
        agent,
        httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
        dev: false,
        stripeAccount: props.stripeAccount || null,
        stripeContext: props.stripeContext || null
      };
      const typescript = props.typescript || false;
      if (typescript !== Stripe2.USER_AGENT.typescript) {
        Stripe2.USER_AGENT.typescript = typescript;
      }
      if (props.appInfo) {
        this._setAppInfo(props.appInfo);
      }
      this._prepResources();
      this._setAuthenticator(key, props.authenticator);
      this.errors = Error_exports;
      this.webhooks = Stripe2.webhooks;
      this._prevRequestMetrics = [];
      this._enableTelemetry = props.telemetry !== false;
      this._requestSender = requestSender(this);
      this.StripeResource = Stripe2.StripeResource;
    }
    Stripe2.errors = Error_exports;
    Stripe2.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    Stripe2.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    Stripe2.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    Stripe2.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe2.prototype = {
      _appInfo: void 0,
      on: null,
      off: null,
      once: null,
      VERSION: null,
      StripeResource: null,
      webhooks: null,
      errors: null,
      _api: null,
      _prevRequestMetrics: null,
      _emitter: null,
      _enableTelemetry: null,
      _requestSender: null,
      _platformFunctions: null,
      rawRequest(method, path, params, options) {
        return this._requestSender._rawRequest(method, path, params, options);
      },
      _setAuthenticator(key, authenticator) {
        if (key && authenticator) {
          throw new Error("Can't specify both apiKey and authenticator");
        }
        if (!key && !authenticator) {
          throw new Error("Neither apiKey nor config.authenticator provided");
        }
        this._authenticator = key ? createApiKeyAuthenticator(key) : authenticator;
      },
      _setAppInfo(info) {
        if (info && typeof info !== "object") {
          throw new Error("AppInfo must be an object.");
        }
        if (info && !info.name) {
          throw new Error("AppInfo.name is required");
        }
        info = info || {};
        this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
          if (typeof info[prop] == "string") {
            accum = accum || {};
            accum[prop] = info[prop];
          }
          return accum;
        }, {});
      },
      _setApiField(key, value) {
        this._api[key] = value;
      },
      getApiField(key) {
        return this._api[key];
      },
      setClientId(clientId) {
        this._clientId = clientId;
      },
      getClientId() {
        return this._clientId;
      },
      getConstant: (c) => {
        switch (c) {
          case "DEFAULT_HOST":
            return DEFAULT_HOST;
          case "DEFAULT_PORT":
            return DEFAULT_PORT;
          case "DEFAULT_BASE_PATH":
            return DEFAULT_BASE_PATH;
          case "DEFAULT_API_VERSION":
            return DEFAULT_API_VERSION;
          case "DEFAULT_TIMEOUT":
            return DEFAULT_TIMEOUT;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return MAX_NETWORK_RETRY_DELAY_SEC;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe2[c];
      },
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      _setApiNumberField(prop, n, defaultVal) {
        const val = validateInteger(prop, n, defaultVal);
        this._setApiField(prop, val);
      },
      getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
      },
      getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
      },
      getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe2.USER_AGENT, cb);
      },
      getClientUserAgentSeeded(seed, cb) {
        this._platformFunctions.getUname().then((uname) => {
          var _a2;
          const userAgent = {};
          for (const field in seed) {
            if (!Object.prototype.hasOwnProperty.call(seed, field)) {
              continue;
            }
            userAgent[field] = encodeURIComponent((_a2 = seed[field]) !== null && _a2 !== void 0 ? _a2 : "null");
          }
          userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
          const client = this.getApiField("httpClient");
          if (client) {
            userAgent.httplib = encodeURIComponent(client.getClientName());
          }
          if (this._appInfo) {
            userAgent.application = this._appInfo;
          }
          cb(JSON.stringify(userAgent));
        });
      },
      getAppInfoAsString() {
        if (!this._appInfo) {
          return "";
        }
        let formatted = this._appInfo.name;
        if (this._appInfo.version) {
          formatted += `/${this._appInfo.version}`;
        }
        if (this._appInfo.url) {
          formatted += ` (${this._appInfo.url})`;
        }
        return formatted;
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      _prepResources() {
        for (const name in resources_exports) {
          if (!Object.prototype.hasOwnProperty.call(resources_exports, name)) {
            continue;
          }
          this[pascalToCamelCase(name)] = new resources_exports[name](this);
        }
      },
      _getPropsFromConfig(config) {
        if (!config) {
          return {};
        }
        const isString = typeof config === "string";
        const isObject2 = config === Object(config) && !Array.isArray(config);
        if (!isObject2 && !isString) {
          throw new Error("Config must either be an object or a string");
        }
        if (isString) {
          return {
            apiVersion: config
          };
        }
        const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
        if (values.length > 0) {
          throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
        }
        return config;
      },
      parseEventNotification(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        const eventNotification = this.webhooks.constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt);
        if (eventNotification.context) {
          eventNotification.context = StripeContext.parse(eventNotification.context);
        }
        eventNotification.fetchEvent = () => {
          return this._requestSender._rawRequest("GET", `/v2/core/events/${eventNotification.id}`, void 0, {
            stripeContext: eventNotification.context
          }, ["fetch_event"]);
        };
        eventNotification.fetchRelatedObject = () => {
          if (!eventNotification.related_object) {
            return Promise.resolve(null);
          }
          return this._requestSender._rawRequest("GET", eventNotification.related_object.url, void 0, {
            stripeContext: eventNotification.context
          }, ["fetch_related_object"]);
        };
        return eventNotification;
      }
    };
    return Stripe2;
  }

  // node_modules/stripe/esm/stripe.esm.worker.js
  var Stripe = createStripe(new WebPlatformFunctions());
  var stripe_esm_worker_default = Stripe;

  // src/lib/stripe-client.ts
  var import_utils9 = __toESM(require_utils());
  var stripe = new stripe_esm_worker_default(import_utils9.STRIPE_API_KEY, {
    httpClient: (0, import_http_client.createHttpClient)(),
    apiVersion: "2026-01-28.clover"
  });
  var stripe_client_default = stripe;

  // src/hooks/useStripeSync.ts
  var OBJECT_TYPES = [
    "customers",
    "subscriptions",
    "invoices",
    "charges",
    "products",
    "prices"
  ];
  function fetchStripeObjects(objectType) {
    return __async(this, null, function* () {
      switch (objectType) {
        case "customers":
          return stripe_client_default.customers.list({ limit: 100 });
        case "subscriptions":
          return stripe_client_default.subscriptions.list({ limit: 100 });
        case "invoices":
          return stripe_client_default.invoices.list({ limit: 100 });
        case "charges":
          return stripe_client_default.charges.list({ limit: 100 });
        case "products":
          return stripe_client_default.products.list({ limit: 100 });
        case "prices":
          return stripe_client_default.prices.list({ limit: 100 });
      }
    });
  }
  function useStripeSync() {
    const [syncing, setSyncing] = (0, import_react4.useState)(false);
    const [progress, setProgress] = (0, import_react4.useState)({
      completed: 0,
      total: OBJECT_TYPES.length
    });
    const [error, setError] = (0, import_react4.useState)(null);
    const syncAll = (0, import_react4.useCallback)(() => __async(this, null, function* () {
      setSyncing(true);
      setError(null);
      setProgress({ completed: 0, total: OBJECT_TYPES.length });
      try {
        for (const objectType of OBJECT_TYPES) {
          setProgress((prev) => __spreadProps(__spreadValues({}, prev), { current: objectType }));
          const response = yield fetchStripeObjects(objectType);
          if (response.data.length > 0) {
            yield apiClient("/sync-data", {
              method: "POST",
              body: {
                objectType,
                records: response.data
              }
            });
          }
          setProgress((prev) => __spreadProps(__spreadValues({}, prev), {
            completed: prev.completed + 1
          }));
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Sync failed";
        setError(message);
      } finally {
        setSyncing(false);
      }
    }), []);
    return { syncAll, syncing, progress, error };
  }

  // src/views/ChatView.tsx
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  var ChatView = ({ userContext, environment: _environment }) => {
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
    const { syncAll, syncing, progress, error: syncError } = useStripeSync();
    const handleSyncNow = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      yield syncAll();
      if (!syncError) {
        loadWelcomeInsights();
        setViewState("empty");
      }
    }), [syncAll, syncError]);
    const loadConversations = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      var _a3;
      try {
        const response = yield apiClient("/chat-conversations");
        const convos = ((_a3 = response.data) == null ? void 0 : _a3.conversations) || [];
        setConversations(convos);
        if (convos.length === 0) {
          const hasData = yield loadWelcomeInsights();
          setViewState(hasData ? "empty" : "needs-sync");
        } else {
          yield loadConversation(convos[0].id);
          setViewState("chat");
        }
      } catch (e) {
        const hasData = yield loadWelcomeInsights();
        setViewState(hasData ? "empty" : "needs-sync");
      }
    }), []);
    (0, import_react5.useEffect)(() => {
      loadConversations();
    }, [loadConversations]);
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
          syncError && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Banner, {
            type: "caution",
            title: "Sync issue",
            description: syncError
          }),
          showConversationList && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ConversationList_default, {
            conversations,
            activeConversationId,
            onSelectConversation: handleSelectConversation,
            onClose: () => setShowConversationList(false)
          }),
          !showConversationList && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
            css: { stack: "y", overflow: "auto" },
            children: [
              viewState === "needs-sync" && !syncing && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
                css: { padding: "medium", stack: "y", gap: "medium", alignX: "center" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Inline, {
                    css: { font: "heading" },
                    children: "Sync your Stripe data"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Inline, {
                    css: { color: "secondary" },
                    children: "Javelin needs to sync your Stripe data before it can generate insights. This usually takes less than a minute."
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Button, {
                    type: "primary",
                    onPress: handleSyncNow,
                    children: "Sync now"
                  })
                ]
              }),
              syncing && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
                css: { padding: "medium", stack: "y", gap: "small", alignX: "center" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Spinner, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Inline, {
                    css: { color: "secondary" },
                    children: [
                      "Syncing your data... (",
                      progress.completed,
                      "/",
                      progress.total,
                      ")"
                    ]
                  })
                ]
              }),
              viewState === "empty" && !syncing && messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WelcomePrompt_default, {
                onSelectPrompt: sendMessage,
                insights: welcomeInsights
              }) : viewState === "chat" || messages.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChatThread_default, {
                messages,
                isThinking,
                thinkingStartedAt,
                onClarificationSelect: handleClarificationSelect
              }) : null
            ]
          }),
          !showConversationList && viewState !== "needs-sync" && !syncing && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChatInput_default, {
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
  var import_react6 = __require("react");
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  var OBJECT_TYPE_LABELS = {
    customers: "Customers",
    subscriptions: "Subscriptions",
    invoices: "Invoices",
    charges: "Charges",
    products: "Products",
    prices: "Prices"
  };
  var OnboardingView = ({ userContext, oauthContext }) => {
    var _a2;
    if ((userContext == null ? void 0 : userContext.id) && ((_a2 = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a2.id)) {
      initApiClient(userContext.id, userContext.account.id);
    }
    const [state, setState] = (0, import_react6.useState)("auth");
    const [errorMessage, setErrorMessage] = (0, import_react6.useState)("");
    const [authCallbackSucceeded, setAuthCallbackSucceeded] = (0, import_react6.useState)(false);
    const { syncAll, syncing, progress, error: syncError } = useStripeSync();
    const handleSetup = (0, import_react6.useCallback)(() => __async(void 0, null, function* () {
      if ((oauthContext == null ? void 0 : oauthContext.code) && !(oauthContext == null ? void 0 : oauthContext.error)) {
        try {
          yield apiClient("/auth-callback", {
            method: "POST",
            body: {
              code: oauthContext.code,
              state: oauthContext.state || "",
              verifier: oauthContext.verifier || ""
            }
          });
          setAuthCallbackSucceeded(true);
        } catch (e) {
          console.warn("auth-callback failed, proceeding with SDK-based sync");
        }
      }
      setState("syncing");
      try {
        yield syncAll();
        if (authCallbackSucceeded) {
          try {
            yield apiClient("/sync-trigger", { method: "POST", body: {} });
          } catch (e) {
          }
        }
        setState("success");
      } catch (e) {
        setState("error");
        setErrorMessage("Failed to sync your Stripe data. Please try again.");
      }
    }), [oauthContext, syncAll, authCallbackSucceeded]);
    (0, import_react6.useEffect)(() => {
      handleSetup();
    }, [handleSetup]);
    (0, import_react6.useEffect)(() => {
      if (syncError) {
        setState("error");
        setErrorMessage(syncError);
      }
    }, [syncError]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.ContextView, {
      title: "Welcome to Javelin",
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
        css: { padding: "medium", stack: "y", gap: "medium", alignX: "center" },
        children: [
          (state === "auth" || state === "syncing" && syncing) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Spinner, {}),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                css: { font: "heading" },
                children: state === "auth" ? "Connecting to Stripe..." : "Syncing your data..."
              }),
              state === "syncing" && progress.current && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
                css: { stack: "y", gap: "small", width: "fill" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Inline, {
                    css: { color: "secondary" },
                    children: [
                      "Syncing ",
                      OBJECT_TYPE_LABELS[progress.current] || progress.current,
                      " (",
                      progress.completed + 1,
                      "/",
                      progress.total,
                      ")"
                    ]
                  }),
                  Object.keys(OBJECT_TYPE_LABELS).map((type) => {
                    const idx = Object.keys(OBJECT_TYPE_LABELS).indexOf(type);
                    const isComplete = idx < progress.completed;
                    const isCurrent = type === progress.current;
                    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
                      css: { stack: "x", gap: "small", alignY: "center" },
                      children: [
                        isComplete && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Icon, {
                          name: "check"
                        }),
                        isCurrent && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Spinner, {
                          size: "small"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Inline, {
                          css: { color: isComplete || isCurrent ? "primary" : "secondary" },
                          children: OBJECT_TYPE_LABELS[type]
                        })
                      ]
                    }, type);
                  })
                ]
              })
            ]
          }),
          state === "success" && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Banner, {
                type: "default",
                title: "Setup complete!",
                description: "Javelin is ready. Your data has been synced \u2014 you can start asking questions right away."
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
                onPress: handleSetup,
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
  var BUILD_TIME = "2026-02-13 09:52:47.528856 -0300 -03 m=+8.814534654";
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
    "version": "0.0.5"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvX2VuZHBvaW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoVmlhRnJhbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFIb3N0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9jbGlwYm9hcmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9jb250ZXh0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2lzUGVybWlzc2lvbkF1dGhvcml6ZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL29hdXRoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvcGxhdGZvcm1ScGNzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvdG9hc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9pbmRleC5qcyIsICJtYW5pZmVzdC5qcyIsICIuLi9zcmMvdmlld3MvQ2hhdFZpZXcudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NoYXRUaHJlYWQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCdWJibGUudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0luc2lnaHRDYXJkLnRzeCIsICIuLi9zcmMvbGliL2FwaS1jbGllbnQudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvVGhpbmtpbmdJbmRpY2F0b3IudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NsYXJpZmljYXRpb25Qcm9tcHQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NoYXRJbnB1dC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvV2VsY29tZVByb21wdC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdC50c3giLCAiLi4vc3JjL2hvb2tzL3VzZVN0cmlwZVN5bmMudHMiLCAiLi4vc3JjL2xpYi9zdHJpcGUtY2xpZW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3V0aWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL25ldC9IdHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL25ldC9GZXRjaEh0dHBDbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vY3J5cHRvL0NyeXB0b1Byb3ZpZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL2NyeXB0by9TdWJ0bGVDcnlwdG9Qcm92aWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9wbGF0Zm9ybS9QbGF0Zm9ybUZ1bmN0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9TdHJpcGVFbWl0dGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3BsYXRmb3JtL1dlYlBsYXRmb3JtRnVuY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL0Vycm9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1JlcXVlc3RTZW5kZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vYXV0b1BhZ2luYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vU3RyaXBlTWV0aG9kLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1N0cmlwZVJlc291cmNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1N0cmlwZUNvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vV2ViaG9va3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vYXBpVmVyc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vUmVzb3VyY2VOYW1lc3BhY2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudExpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRUb2tlbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZpbmFuY2lhbENvbm5lY3Rpb25zL0FjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRzL1BlcnNvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudHMvUGVyc29uVG9rZW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvQWN0aXZlRW50aXRsZW1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL0FsZXJ0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L0Fzc29jaWF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L0NhbGN1bGF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9DYXJkaG9sZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9DYXJkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9DYXJkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZ1BvcnRhbC9Db25maWd1cmF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvQ29uZmlndXJhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0NvbmZpcm1hdGlvblRva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvQ29ubmVjdGlvblRva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlU3VtbWFyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL0NyZWRpdEdyYW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVHJlYXN1cnkvQ3JlZGl0UmV2ZXJzYWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXN0SGVscGVycy9DdXN0b21lcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L0RlYml0UmV2ZXJzYWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Jc3N1aW5nL0Rpc3B1dGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9FYXJseUZyYXVkV2FybmluZ3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvRXZlbnREZXN0aW5hdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvRmVhdHVyZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L0ZpbmFuY2lhbEFjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXJtaW5hbC9Mb2NhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0JpbGxpbmcvTWV0ZXJFdmVudEFkanVzdG1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRBZGp1c3RtZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50U2Vzc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50U3RyZWFtLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL01ldGVyRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL01ldGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvT25ib2FyZGluZ0xpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DbGltYXRlL09yZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvT3V0Ym91bmRQYXltZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVHJlYXN1cnkvT3V0Ym91bmRQYXltZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvT3V0Ym91bmRUcmFuc2ZlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L091dGJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9QYXltZW50RXZhbHVhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0lzc3VpbmcvUGVyc29uYWxpemF0aW9uRGVzaWducy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9QZXJzb25hbGl6YXRpb25EZXNpZ25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Jc3N1aW5nL1BoeXNpY2FsQnVuZGxlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ2xpbWF0ZS9Qcm9kdWN0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvUmVhZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVGVybWluYWwvUmVhZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvUmVjZWl2ZWRDcmVkaXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZENyZWRpdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L1JlY2VpdmVkRGViaXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZERlYml0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvUmVmdW5kcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L1JlZ2lzdHJhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JlcG9ydGluZy9SZXBvcnRSdW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SZXBvcnRpbmcvUmVwb3J0VHlwZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZvcndhcmRpbmcvUmVxdWVzdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NpZ21hL1NjaGVkdWxlZFF1ZXJ5UnVucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQXBwcy9TZWNyZXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nUG9ydGFsL1Nlc3Npb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DaGVja291dC9TZXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmluYW5jaWFsQ29ubmVjdGlvbnMvU2Vzc2lvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheC9TZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ2xpbWF0ZS9TdXBwbGllcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1Rlc3RDbG9ja3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0lzc3VpbmcvVG9rZW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9UcmFuc2FjdGlvbkVudHJpZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZpbmFuY2lhbENvbm5lY3Rpb25zL1RyYW5zYWN0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheC9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0lzc3VpbmcvVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JhZGFyL1ZhbHVlTGlzdEl0ZW1zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9WYWx1ZUxpc3RzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25SZXBvcnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25TZXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQWNjb3VudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0FjY291bnRMaW5rcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQWNjb3VudFNlc3Npb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9BcHBsZVBheURvbWFpbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0FwcGxpY2F0aW9uRmVlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmFsYW5jZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmFsYW5jZVNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CYWxhbmNlVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DaGFyZ2VzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Db25maXJtYXRpb25Ub2tlbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0NvdW50cnlTcGVjcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ291cG9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ3JlZGl0Tm90ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0N1c3RvbWVyU2Vzc2lvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0N1c3RvbWVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRGlzcHV0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0VwaGVtZXJhbEtleXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0V2ZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRXhjaGFuZ2VSYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmlsZUxpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL211bHRpcGFydC5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmlsZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ludm9pY2VJdGVtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSW52b2ljZVBheW1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JbnZvaWNlUmVuZGVyaW5nVGVtcGxhdGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JbnZvaWNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvTWFuZGF0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL09BdXRoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50QXR0ZW1wdFJlY29yZHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRJbnRlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50TGlua3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRNZXRob2RDb25maWd1cmF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZERvbWFpbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRNZXRob2RzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50UmVjb3Jkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGF5b3V0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGxhbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1ByaWNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUHJvZHVjdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Byb21vdGlvbkNvZGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9RdW90ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JlZnVuZHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Jldmlld3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NldHVwQXR0ZW1wdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NldHVwSW50ZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU2hpcHBpbmdSYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU291cmNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU3Vic2NyaXB0aW9uSXRlbXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1N1YnNjcmlwdGlvblNjaGVkdWxlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4Q29kZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheElkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4UmF0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVG9wdXBzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmFuc2ZlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1dlYmhvb2tFbmRwb2ludHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vc3RyaXBlLmNvcmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vc3RyaXBlLmVzbS53b3JrZXIuanMiLCAiLi4vc3JjL3ZpZXdzL1NldHRpbmdzVmlldy50c3giLCAiLi4vc3JjL3ZpZXdzL09uYm9hcmRpbmdWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNES19WRVJTSU9OID0gdm9pZCAwO1xuZXhwb3J0cy5TREtfVkVSU0lPTiA9ICc5LjEuMCc7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGV4cG9ydHMuVGFibGVIZWFkID0gZXhwb3J0cy5UYWJsZUZvb3RlciA9IGV4cG9ydHMuVGFibGVDZWxsID0gZXhwb3J0cy5UYWJsZUJvZHkgPSBleHBvcnRzLlRhYiA9IGV4cG9ydHMuVGFiUGFuZWxzID0gZXhwb3J0cy5UYWJQYW5lbCA9IGV4cG9ydHMuVGFiTGlzdCA9IGV4cG9ydHMuU3dpdGNoID0gZXhwb3J0cy5TdHJpcGVGaWxlVXBsb2FkZXIgPSBleHBvcnRzLlNwaW5uZXIgPSBleHBvcnRzLlNwYXJrbGluZSA9IGV4cG9ydHMuU2lnbkluVmlldyA9IGV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZXhwb3J0cy5TZWxlY3QgPSBleHBvcnRzLlJhZGlvID0gZXhwb3J0cy5Qcm9wZXJ0eUxpc3QgPSBleHBvcnRzLlByb3BlcnR5TGlzdEl0ZW0gPSBleHBvcnRzLlBsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcgPSBleHBvcnRzLk9uYm9hcmRpbmdWaWV3ID0gZXhwb3J0cy5NZW51ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuTWVudUdyb3VwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5MaXN0SXRlbSA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuTGluZUNoYXJ0ID0gZXhwb3J0cy5JbmxpbmUgPSBleHBvcnRzLkltZyA9IGV4cG9ydHMuSWNvbiA9IGV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBleHBvcnRzLkZvY3VzVmlldyA9IGV4cG9ydHMuRGl2aWRlciA9IGV4cG9ydHMuRGV0YWlsUGFnZVRhYmxlID0gZXhwb3J0cy5EZXRhaWxQYWdlUHJvcGVydHlMaXN0ID0gZXhwb3J0cy5EZXRhaWxQYWdlTW9kdWxlID0gZXhwb3J0cy5EYXRlRmllbGQgPSBleHBvcnRzLkNvbnRleHRWaWV3ID0gZXhwb3J0cy5DaGlwID0gZXhwb3J0cy5DaGlwTGlzdCA9IGV4cG9ydHMuQ2hlY2tib3ggPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuQnV0dG9uR3JvdXAgPSBleHBvcnRzLkJveCA9IGV4cG9ydHMuQmFyQ2hhcnQgPSBleHBvcnRzLkJhbm5lciA9IGV4cG9ydHMuQmFkZ2UgPSBleHBvcnRzLkFjY29yZGlvbiA9IGV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IHZvaWQgMDtcbmV4cG9ydHMuVG9vbHRpcCA9IGV4cG9ydHMuVGV4dEZpZWxkID0gZXhwb3J0cy5UZXh0QXJlYSA9IGV4cG9ydHMuVGFza0xpc3QgPSBleHBvcnRzLlRhc2tMaXN0SXRlbSA9IGV4cG9ydHMuVGFicyA9IGV4cG9ydHMuVGFibGVSb3cgPSBleHBvcnRzLlRhYmxlID0gdm9pZCAwO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwiQHJlbW90ZS11aS9yZWFjdFwiKTtcbmNvbnN0IHZlcnNpb25fMSA9IHJlcXVpcmUoXCIuLi92ZXJzaW9uXCIpO1xuY29uc3Qgd2l0aFNka1Byb3BzID0gKENvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IFdpdGhTZGtQcm9wcyA9IChwcm9wcykgPT4gKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoQ29tcG9uZW50LCB7IC4uLnByb3BzLCB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsIHNka1ZlcnNpb246IHZlcnNpb25fMS5TREtfVkVSU0lPTiwgc2NoZW1hVmVyc2lvbjogXCJ2OVwiIH0pKTtcbiAgICBXaXRoU2RrUHJvcHMud3JhcHBlZENvbXBvbmVudE5hbWUgPSB3cmFwcGVkQ29tcG9uZW50TmFtZTtcbiAgICByZXR1cm4gV2l0aFNka1Byb3BzO1xufTtcbmNvbnN0IGRlZmluZUNvbXBvbmVudCA9IChuYW1lLCBmcmFnbWVudFByb3BzLCB3cmFwV2l0aFNka1Byb3BzKSA9PiB7XG4gICAgY29uc3QgcmVtb3RlQ29tcG9uZW50ID0gKDAsIHJlYWN0XzEuY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQpKG5hbWUsIHtcbiAgICAgICAgZnJhZ21lbnRQcm9wcyxcbiAgICB9KTtcbiAgICBpZiAoIXdyYXBXaXRoU2RrUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW90ZUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhTZGtQcm9wcyhyZW1vdGVDb21wb25lbnQpO1xufTtcbmV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IGRlZmluZUNvbXBvbmVudCgnQWNjb3JkaW9uSXRlbScsIFsndGl0bGUnLCAnYWN0aW9ucycsICdtZWRpYScsICdzdWJ0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQWNjb3JkaW9uID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkJhZGdlID0gZGVmaW5lQ29tcG9uZW50KCdCYWRnZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFubmVyID0gZGVmaW5lQ29tcG9uZW50KCdCYW5uZXInLCBbJ2FjdGlvbnMnLCAnZGVzY3JpcHRpb24nLCAndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnRzLkJhckNoYXJ0ID0gZGVmaW5lQ29tcG9uZW50KCdCYXJDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQm94ID0gZGVmaW5lQ29tcG9uZW50KCdCb3gnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b25Hcm91cCcsIFsnbWVudVRyaWdnZXInXSwgdHJ1ZSk7XG5leHBvcnRzLkJ1dHRvbiA9IGRlZmluZUNvbXBvbmVudCgnQnV0dG9uJywgW10sIHRydWUpO1xuZXhwb3J0cy5DaGVja2JveCA9IGRlZmluZUNvbXBvbmVudCgnQ2hlY2tib3gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5DaGlwTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcExpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXAgPSBkZWZpbmVDb21wb25lbnQoJ0NoaXAnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNvbnRleHRWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdDb250ZXh0VmlldycsIFsnYWN0aW9ucycsICdiYW5uZXInLCAnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydHMuRGF0ZUZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdEYXRlRmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlTW9kdWxlID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlTW9kdWxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuRGl2aWRlciA9IGRlZmluZUNvbXBvbmVudCgnRGl2aWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuRm9jdXNWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdGb2N1c1ZpZXcnLCBbJ2Zvb3RlckNvbnRlbnQnLCAncHJpbWFyeUFjdGlvbicsICdzZWNvbmRhcnlBY3Rpb24nXSwgdHJ1ZSk7XG5leHBvcnRzLkZvcm1GaWVsZEdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdGb3JtRmllbGRHcm91cCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSWNvbiA9IGRlZmluZUNvbXBvbmVudCgnSWNvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSW1nID0gZGVmaW5lQ29tcG9uZW50KCdJbWcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLklubGluZSA9IGRlZmluZUNvbXBvbmVudCgnSW5saW5lJywgW10sIHRydWUpO1xuZXhwb3J0cy5MaW5lQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0xpbmVDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTGluayA9IGRlZmluZUNvbXBvbmVudCgnTGluaycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ0xpc3RJdGVtJywgWydpY29uJywgJ2ltYWdlJywgJ3NlY29uZGFyeVRpdGxlJywgJ3RpdGxlJywgJ3ZhbHVlJ10sIHRydWUpO1xuZXhwb3J0cy5MaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5NZW51R3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ01lbnVHcm91cCcsIFsndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnVJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdNZW51SXRlbScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTWVudSA9IGRlZmluZUNvbXBvbmVudCgnTWVudScsIFsndHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuT25ib2FyZGluZ1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ09uYm9hcmRpbmdWaWV3JywgWydlcnJvciddLCB0cnVlKTtcbmV4cG9ydHMuUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGRlZmluZUNvbXBvbmVudCgnUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuUHJvcGVydHlMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0SXRlbScsIFsnbGFiZWwnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnRzLlByb3BlcnR5TGlzdCA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5SYWRpbyA9IGRlZmluZUNvbXBvbmVudCgnUmFkaW8nLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5TZWxlY3QgPSBkZWZpbmVDb21wb25lbnQoJ1NlbGVjdCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlNldHRpbmdzVmlldyA9IGRlZmluZUNvbXBvbmVudCgnU2V0dGluZ3NWaWV3JywgW10sIHRydWUpO1xuZXhwb3J0cy5TaWduSW5WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTaWduSW5WaWV3JywgWydkZXNjcmlwdGlvbkFjdGlvbkNvbnRlbnRzJywgJ2Zvb3RlckNvbnRlbnQnXSwgdHJ1ZSk7XG5leHBvcnRzLlNwYXJrbGluZSA9IGRlZmluZUNvbXBvbmVudCgnU3BhcmtsaW5lJywgW10sIHRydWUpO1xuZXhwb3J0cy5TcGlubmVyID0gZGVmaW5lQ29tcG9uZW50KCdTcGlubmVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5TdHJpcGVGaWxlVXBsb2FkZXIgPSBkZWZpbmVDb21wb25lbnQoJ1N0cmlwZUZpbGVVcGxvYWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuU3dpdGNoID0gZGVmaW5lQ29tcG9uZW50KCdTd2l0Y2gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5UYWJMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJQYW5lbCA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYlBhbmVscyA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWxzJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWIgPSBkZWZpbmVDb21wb25lbnQoJ1RhYicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVCb2R5ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUJvZHknLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUZvb3RlciA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVGb290ZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlSGVhZCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUhlYWRlckNlbGwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlSGVhZGVyQ2VsbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZVJvdyA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVSb3cnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYnMgPSBkZWZpbmVDb21wb25lbnQoJ1RhYnMnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhc2tMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3RJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYXNrTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRleHRBcmVhID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0QXJlYScsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRleHRGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnVGV4dEZpZWxkJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVG9vbHRpcCA9IGRlZmluZUNvbXBvbmVudCgnVG9vbHRpcCcsIFsndHJpZ2dlciddLCB0cnVlKTtcbiIsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFByaXZhdGUhIFRoaXMgYWxsb3dzIHRoZSBzaGFyZWQgZW5kcG9pbnQgdG8gYmUgaW50aWFsaXplZFxuICogc28gdGhhdCB0aGUgU0RLIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHRoZSBEYXNoYm9hcmQuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0SG9zdEVuZHBvaW50ID0gdm9pZCAwO1xuY29uc3QgaW52YXJpYW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5jb25zdCBnZXRIb3N0RW5kcG9pbnQgPSAoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBlbmRwb2ludCBpcyBjcmVhdGVkIGZyb20gdGhlIE1lc3NhZ2VQb3J0IHRyYW5zZmVycmVkIGZyb20gdGhlIGhvc3QgZW52XG4gICAgLy8gYXMgYSBwYXJ0IG9mIHRoZSBgaW5pdF9leHRlbnNpb25gIG1lc3NhZ2UuXG4gICAgY29uc3QgaG9zdEVuZHBvaW50ID0gZ2xvYmFsVGhpcy5fX1N0cmlwZUV4dEV4cG9ydHM/LmVuZHBvaW50O1xuICAgICgwLCBpbnZhcmlhbnRfMS5kZWZhdWx0KShob3N0RW5kcG9pbnQsICdob3N0RW5kcG9pbnQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuIGhvc3RFbmRwb2ludDtcbn07XG5leHBvcnRzLmdldEhvc3RFbmRwb2ludCA9IGdldEhvc3RFbmRwb2ludDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gYXN5bmMgKCkgPT4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKVxuICAgIC5jYWxsLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSgpXG4gICAgLnRoZW4oKHN1cHBvcnRlZCkgPT4gc3VwcG9ydGVkKVxuICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5leHBvcnRzLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSA9IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hBcHBFbWJlZGRlZEtleSA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4uL19lbmRwb2ludFwiKTtcbmNvbnN0IGZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmZldGNoQXBwRW1iZWRkZWRLZXkoKTtcbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBhcHAgZW1iZWRkZWQga2V5Jyk7XG4gICAgfVxuICAgIHJldHVybiBhcGlLZXk7XG59O1xuZXhwb3J0cy5mZXRjaEFwcEVtYmVkZGVkS2V5ID0gZmV0Y2hBcHBFbWJlZGRlZEtleTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hWaWFGcmFtZSA9IHZvaWQgMDtcbmNvbnN0IGZldGNoQXBwRW1iZWRkZWRLZXlfMSA9IHJlcXVpcmUoXCIuL2ZldGNoQXBwRW1iZWRkZWRLZXlcIik7XG5jb25zdCBmZXRjaFZpYUZyYW1lID0gYXN5bmMgKHVybCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgKDAsIGZldGNoQXBwRW1iZWRkZWRLZXlfMS5mZXRjaEFwcEVtYmVkZGVkS2V5KSgpO1xuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNlcmlhbGl6YWJsZVJlc3BvbnNlID0ge1xuICAgICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICAgIGFycmF5QnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIG9rOiByZXNwb25zZS5vayxcbiAgICAgICAgcmVkaXJlY3RlZDogcmVzcG9uc2UucmVkaXJlY3RlZCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgIHVybDogcmVzcG9uc2UudXJsLFxuICAgIH07XG4gICAgc3dpdGNoIChyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5qc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5hcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6YWJsZVJlc3BvbnNlO1xufTtcbmV4cG9ydHMuZmV0Y2hWaWFGcmFtZSA9IGZldGNoVmlhRnJhbWU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZldGNoVmlhSG9zdCA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4uL19lbmRwb2ludFwiKTtcbmNvbnN0IGZldGNoVmlhSG9zdCA9IGFzeW5jIChlbmNvZGVkVXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuY29kZWRVcmwpO1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuc3RyaXBlQXBpRmV0Y2godXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgb3B0aW9ucyk7XG59O1xuZXhwb3J0cy5mZXRjaFZpYUhvc3QgPSBmZXRjaFZpYUhvc3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gdm9pZCAwO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEgPSByZXF1aXJlKFwiLi9zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlcIik7XG5jb25zdCBmZXRjaFZpYUZyYW1lXzEgPSByZXF1aXJlKFwiLi9mZXRjaFZpYUZyYW1lXCIpO1xuY29uc3QgZmV0Y2hWaWFIb3N0XzEgPSByZXF1aXJlKFwiLi9mZXRjaFZpYUhvc3RcIik7XG5sZXQgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IG51bGw7XG5jb25zdCBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkU3RyaXBlQXBpRmV0Y2gpIHtcbiAgICAgICAgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IChhd2FpdCAoMCwgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KSgpKVxuICAgICAgICAgICAgPyBmZXRjaFZpYUZyYW1lXzEuZmV0Y2hWaWFGcmFtZVxuICAgICAgICAgICAgOiBmZXRjaFZpYUhvc3RfMS5mZXRjaFZpYUhvc3Q7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFN0cmlwZUFwaUZldGNoO1xufTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG52YXIgc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hfMSA9IHJlcXVpcmUoXCIuL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoXzEuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2g7IH0gfSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmlwZUFwaUZldGNoID0gdm9pZCAwO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi9hcGlcIik7XG5jb25zdCBzdHJpcGVBcGlGZXRjaCA9IGFzeW5jIChwYXRoLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJlZmVycmVkRmV0Y2hNZXRob2QgPSBhd2FpdCAoMCwgYXBpXzEuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2gpKCk7XG4gICAgcmV0dXJuIHByZWZlcnJlZEZldGNoTWV0aG9kKHBhdGgsIG9wdGlvbnMpO1xufTtcbmV4cG9ydHMuc3RyaXBlQXBpRmV0Y2ggPSBzdHJpcGVBcGlGZXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fSEVBREVSID0gZXhwb3J0cy5jcmVhdGVIdHRwQ2xpZW50ID0gZXhwb3J0cy5TVFJJUEVfQVBJX0tFWSA9IGV4cG9ydHMuU3RyaXBlQXBwc0h0dHBDbGllbnQgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgSHR0cENsaWVudCB0aGF0IGNhbiBiZSBwbHVnZ2VkIGludG8gc3RyaXBlLW5vZGVcbiAqIHRoYXQgd2lsbCBhbGxvdyB0aGUgdXNlciB0byB1c2Ugc3RyaXBlLW5vZGUgaW4gZXh0ZW5zaW9ucyBpZiB0aGUgRGFzaGJvYXJkXG4gKiBwcm92aWRlcyBhIGBzdHJpcGVBcGlGZXRjaGAgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbGF5IEFQSSBjYWxscyB0aHJvdWdoIHRoZVxuICogRGFzaGJvYXJkIGFuZCBwaWdneSBiYWNrIG9uIHRoZSB1c2VyJ3MgRGFzaGJvYXJkIHNlc3Npb24uXG4gKi9cbmNvbnN0IGludmFyaWFudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpbnZhcmlhbnRcIikpO1xuY29uc3QgYXBpRmV0Y2hfMSA9IHJlcXVpcmUoXCIuL2FwaUZldGNoXCIpO1xuY29uc3QgbWF0Y2hlc1N0cmlwZUtleSA9IC9bcHNda18odGVzdHxsaXZlKV9bQS1aYS16MC05XSsvO1xuY2xhc3MgU3RyaXBlQXBwc0h0dHBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcCkge1xuICAgICAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3AuaGVhZGVycztcbiAgICB9XG4gICAgZ2V0U3RhdHVzQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3Auc3RhdHVzO1xuICAgIH1cbiAgICBnZXRSYXdSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3A7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgdG9TdHJlYW0oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtcyBoYXZlIG5vdCBiZWVuIGltcGxlbWVudGVkIGluIHRoZSBTdHJpcGUgSFRUUCBjbGllbnQnKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gdGhpcy5fcmVzcDtcbiAgICAgICAgaWYgKGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUmVzcG9uc2UgYm9keSB1bmRlZmluZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgU3RyaXBlQXBwc0h0dHBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGZldGNoKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoID0gZmV0Y2g7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0Q2xpZW50TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzdHJpcGUtdWktZXh0ZW5zaW9uJztcbiAgICB9XG4gICAgYXN5bmMgbWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgcGF0aCwgbWV0aG9kLCBoZWFkZXJzLCByZXF1ZXN0RGF0YSwgcHJvdG9jb2wsIF90aW1lb3V0KSB7XG4gICAgICAgICgwLCBpbnZhcmlhbnRfMS5kZWZhdWx0KShwcm90b2NvbCA9PT0gJ2h0dHBzJywgJ011c3QgdXNlIGh0dHBzIGNvbm5lY3Rpb25zIGluIFVJIGV4dGVuc2lvbnMnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlcXVlc3REYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IHJlcXVlc3REYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBoZWFkZXJzLkF1dGhvcml6YXRpb247XG4gICAgICAgIGlmIChhdXRoSGVhZGVyICYmIG1hdGNoZXNTdHJpcGVLZXkudGVzdChhdXRoSGVhZGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIGFjdHVhbCBzdHJpcGUga2V5cyB3aGVuIHVzaW5nIHRoZSBTdHJpcGUgSlMgQVBJIGNsaWVudCB3aXRoIFVJIGV4dGVzaW9ucy5cXG5cXG4gSW5zdGVhZCwgdXNlIGBTVFJJUEVfQVBJX0tFWWAgZnJvbSBgQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2h0dHBfY2xpZW50YCBhcyBhIHBsYWNlaG9sZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aCwgYCR7cHJvdG9jb2x9Oi8vJHtob3N0fWApO1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5fZmV0Y2godXJsLnRvU3RyaW5nKCksIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciB0aW1lb3V0cy5cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlKHJlc3ApO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaXBlQXBwc0h0dHBDbGllbnQgPSBTdHJpcGVBcHBzSHR0cENsaWVudDtcbi8vIERPIE5PVCBjaGFuZ2UgdGhpcyBzdHJpbmcgd2l0aG91dCBhIGRlcHJlY2F0aW9uIHBsYW4uIFRoZSBydW50aW1lIGNoZWNrcyB0byBtYWtlIHN1cmUgdGhhdCB0aGlzXG4vLyBleGFjdCBzdHJpbmcgaXMgcGFzc2VkLCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbi8vIFNlZTogbWFuYWdlL2Zyb250ZW5kL3NyYy90YWlsb3IvZXh0ZW5zaW9ucy9ob3N0L2FwaV9mZXRjaC5qc1xuZXhwb3J0cy5TVFJJUEVfQVBJX0tFWSA9ICdET19OT1RfUEFTU19BX1JFQUxfQVBJX0tFWSc7XG5jb25zdCBjcmVhdGVIdHRwQ2xpZW50ID0gKCkgPT4gbmV3IFN0cmlwZUFwcHNIdHRwQ2xpZW50KGFwaUZldGNoXzEuc3RyaXBlQXBpRmV0Y2gpO1xuZXhwb3J0cy5jcmVhdGVIdHRwQ2xpZW50ID0gY3JlYXRlSHR0cENsaWVudDtcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9IRUFERVIgPSAnQXV0aG9yaXphdGlvbic7XG5leHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBgQmVhcmVyICR7ZXhwb3J0cy5TVFJJUEVfQVBJX0tFWX1gO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gdm9pZCAwO1xuY29uc3QgaHR0cENsaWVudF8xID0gcmVxdWlyZShcIi4uL2h0dHBDbGllbnRcIik7XG5jb25zdCBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gKHsgaG9zdCwgcG9ydCB9KSA9PiBhc3luYyAocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYGh0dHBzOi8vJHtob3N0fToke3BvcnR9L3YxL2FwcHMvYXBwX2VtYmVkZGVkX2JhY2tlbmRfc2lnbmF0dXJlYCk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3BheWxvYWQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBheWxvYWQgfSkpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpbmNsdWRlX29ubHlbXScsICdzaWduYXR1cmUnKTtcbiAgICBjb25zdCBjbGllbnQgPSAoMCwgaHR0cENsaWVudF8xLmNyZWF0ZUh0dHBDbGllbnQpKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjbGllbnQubWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgJ0dFVCcsIHt9LCBudWxsLCAnaHR0cHMnKTtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgLnRoZW4oKHIpID0+IHIudG9KU09OKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnNpZ25hdHVyZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0Q29ubmVjdGlvblNldHRpbmdzID0gZXhwb3J0cy5jb25uZWN0aW9uU2V0dGluZ3MgPSB2b2lkIDA7XG5jb25zdCBkZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgIGhvc3Q6ICdhcGkuc3RyaXBlLmNvbScsXG4gICAgcG9ydDogNDQzLFxufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3M7XG5jb25zdCBzZXRDb25uZWN0aW9uU2V0dGluZ3MgPSAoc2V0dGluZ3MpID0+IHtcbiAgICBleHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncyxcbiAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgfTtcbn07XG5leHBvcnRzLnNldENvbm5lY3Rpb25TZXR0aW5ncyA9IHNldENvbm5lY3Rpb25TZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hTdHJpcGVTaWduYXR1cmUgPSB2b2lkIDA7XG5jb25zdCBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmUvY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseVwiKTtcbmNvbnN0IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleV8xID0gcmVxdWlyZShcIi4vYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGNvbm5lY3Rpb25TZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlL2Nvbm5lY3Rpb25TZXR0aW5nc1wiKTtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hTdHJpcGVTaWduYXR1cmUgPSBhc3luYyAoYWRkaXRpb25hbFBheWxvYWQpID0+IHtcbiAgICBpZiAoYXdhaXQgKDAsIHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleV8xLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSkoKSkge1xuICAgICAgICBjb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gKDAsIGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHlfMS5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KShjb25uZWN0aW9uU2V0dGluZ3NfMS5jb25uZWN0aW9uU2V0dGluZ3MpO1xuICAgICAgICByZXR1cm4gZmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseShhZGRpdGlvbmFsUGF5bG9hZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmZldGNoU3RyaXBlU2lnbmF0dXJlKGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG59O1xuZXhwb3J0cy5mZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGZldGNoU3RyaXBlU2lnbmF0dXJlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBmaWxlIG1vdmVkIHRvIHV0aWxzOyByZS1leHBvcnRlZCB0byBub3QgYnJlYWsgaW1wb3J0c1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi91dGlscy9zaWduYXR1cmVcIik7XG5leHBvcnRzLmRlZmF1bHQgPSBzaWduYXR1cmVfMS5mZXRjaFN0cmlwZVNpZ25hdHVyZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgZmlsZSBtb3ZlZCB0byB1dGlsczsgcmUtZXhwb3J0ZWQgdG8gbm90IGJyZWFrIGltcG9ydHNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlSHR0cENsaWVudCA9IGV4cG9ydHMuU1RSSVBFX0FQSV9LRVkgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fSEVBREVSID0gdm9pZCAwO1xuY29uc3QgaHR0cENsaWVudF8xID0gcmVxdWlyZShcIi4vdXRpbHMvaHR0cENsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFVVEhPUklaQVRJT05fSEVBREVSXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9IRUFERVI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBVVRIT1JJWkFUSU9OX1ZBTFVFXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9WQUxVRTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNUUklQRV9BUElfS0VZXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuU1RSSVBFX0FQSV9LRVk7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVIdHRwQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuY3JlYXRlSHR0cENsaWVudDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh0dHBDbGllbnRfMS5TdHJpcGVBcHBzSHR0cENsaWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2xpcGJvYXJkV3JpdGVUZXh0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBjbGlwYm9hcmRXcml0ZVRleHQgPSAodGV4dCA9ICcnKSA9PiB7XG4gICAgcmV0dXJuICgwLCBfZW5kcG9pbnRfMS5nZXRIb3N0RW5kcG9pbnQpKCkuY2FsbC5jbGlwYm9hcmRXcml0ZVRleHQodGV4dCk7XG59O1xuZXhwb3J0cy5jbGlwYm9hcmRXcml0ZVRleHQgPSBjbGlwYm9hcmRXcml0ZVRleHQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlUmVmcmVzaERhc2hib2FyZERhdGEgPSB2b2lkIDA7XG5jb25zdCBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCB1c2VSZWZyZXNoRGFzaGJvYXJkRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLnJlZnJlc2hEYXNoYm9hcmREYXRhKCk7XG4gICAgfSwgW10pO1xufTtcbmV4cG9ydHMudXNlUmVmcmVzaERhc2hib2FyZERhdGEgPSB1c2VSZWZyZXNoRGFzaGJvYXJkRGF0YTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0RGFzaGJvYXJkVXNlckVtYWlsID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBodHRwQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9odHRwQ2xpZW50XCIpO1xuY29uc3QgZ2V0RGFzaGJvYXJkVXNlckVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuc3RyaXBlQXBpRmV0Y2goJy92MS91c2VyL2VtYWlsJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFtodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9IRUFERVJdOiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9WQUxVRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcC5vaykge1xuICAgICAgICAgICAgcmVzcC5lbWFpbCA9IHJlc3AuanNvbi5lbWFpbDtcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBkYXNoYm9hcmQgdXNlciBlbWFpbCcsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn07XG5leHBvcnRzLmdldERhc2hib2FyZFVzZXJFbWFpbCA9IGdldERhc2hib2FyZFVzZXJFbWFpbDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucyA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmdldFVzZXJBdXRob3JpemVkUGVybWlzc2lvbnMoKTtcbn07XG5leHBvcnRzLmdldFVzZXJBdXRob3JpemVkUGVybWlzc2lvbnMgPSBnZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1Blcm1pc3Npb25BdXRob3JpemVkID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBpc1Blcm1pc3Npb25BdXRob3JpemVkID0gKHBlcm1pc3Npb24pID0+IHtcbiAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmlzUGVybWlzc2lvbkF1dGhvcml6ZWQocGVybWlzc2lvbik7XG59O1xuZXhwb3J0cy5pc1Blcm1pc3Npb25BdXRob3JpemVkID0gaXNQZXJtaXNzaW9uQXV0aG9yaXplZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1AgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKTtcbmNvbnN0IGlzU291cmNlSW5BdXRob3JpemVkQ1NQID0gKHNvdXJjZSkgPT4ge1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1Aoc291cmNlKTtcbn07XG5leHBvcnRzLmlzU291cmNlSW5BdXRob3JpemVkQ1NQID0gaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1A7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZU9BdXRoU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKTtcbmNvbnN0IGNyZWF0ZU9BdXRoU3RhdGUgPSAoc3RhdGUgPSAnJykgPT4ge1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuY3JlYXRlT0F1dGhTdGF0ZShzdGF0ZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVPQXV0aFN0YXRlID0gY3JlYXRlT0F1dGhTdGF0ZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2hvd1RvYXN0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBzaG93VG9hc3QgPSBhc3luYyAobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpO1xuICAgIHJldHVybiBlbmRwb2ludC5jYWxsLnNob3dUb2FzdChtZXNzYWdlLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLnNob3dUb2FzdCA9IHNob3dUb2FzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gVE9ETzogRXhwb3J0IGFsbCBpdGVtcyBleHBsaWNldGVseVxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYXBpRmV0Y2hcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsaXBib2FyZFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29udGV4dFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2V0RGFzaGJvYXJkVXNlckVtYWlsXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9odHRwQ2xpZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pc1Blcm1pc3Npb25BdXRob3JpemVkXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pc1NvdXJjZUluQXV0aG9yaXplZENTUFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vb2F1dGhcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3BsYXRmb3JtUnBjc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2lnbmF0dXJlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90b2FzdFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2lnbmF0dXJlL2Nvbm5lY3Rpb25TZXR0aW5nc1wiKSwgZXhwb3J0cyk7XG4iLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBDaGF0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvQ2hhdFZpZXcnO2ltcG9ydCBTZXR0aW5nc1ZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL1NldHRpbmdzVmlldyc7aW1wb3J0IE9uYm9hcmRpbmdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9PbmJvYXJkaW5nVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDItMTMgMDk6NTI6NDcuNTI4ODU2IC0wMzAwIC0wMyBtPSs4LjgxNDUzNDY1NCc7XG5cbmV4cG9ydCB7IFxuICBDaGF0VmlldyxcdFxuXG4gIFNldHRpbmdzVmlldyxcdFxuXG4gIE9uYm9hcmRpbmdWaWV3XHRcbiB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiYWxsb3dlZF9yZWRpcmVjdF91cmlzXCI6IFtcbiAgICBcImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9hcHBzLW9hdXRoL2NvbS5qYXZlbGluLmFuYWx5dGljc1wiLFxuICAgIFwiaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS9hcHBzLW9hdXRoL2NvbS5qYXZlbGluLmFuYWx5dGljc1wiXG4gIF0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uamF2ZWxpbi5hbmFseXRpY3NcIixcbiAgXCJuYW1lXCI6IFwiSmF2ZWxpblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGRhdGEgdG8gY2FsY3VsYXRlIGJ1c2luZXNzIG1ldHJpY3MgYW5kIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgeW91ciBjdXN0b21lciBiYXNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImludm9pY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBpbnZvaWNlIGRhdGEgdG8gY2FsY3VsYXRlIHJldmVudWUsIE1SUiwgYW5kIG90aGVyIGJpbGxpbmcgbWV0cmljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBjaGFyZ2UgZGF0YSB0byBhbmFseXplIHBheW1lbnQgdm9sdW1lIGFuZCByZXZlbnVlIHRyZW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzdWJzY3JpcHRpb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBzdWJzY3JpcHRpb24gZGF0YSB0byBjYWxjdWxhdGUgTVJSLCBjaHVybiByYXRlLCBhbmQgc3Vic2NyaXB0aW9uIGFuYWx5dGljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgcHJvZHVjdCBkYXRhIHRvIGJyZWFrIGRvd24gcmV2ZW51ZSBhbmQgbWV0cmljcyBieSBwcm9kdWN0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBsYW5fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwcmljZSBhbmQgcGxhbiBkYXRhIHRvIGFuYWx5emUgcGxhbi1sZXZlbCByZXZlbnVlIGFuZCBzdWJzY3JpYmVyIGNvdW50c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlIGFuZCBtYW5hZ2UgT0F1dGggdG9rZW5zIHNlY3VyZWx5IHZpYSB0aGUgU2VjcmV0IFN0b3JlIEFQSVwiXG4gICAgfVxuICBdLFxuICBcInNhbmRib3hfaW5zdGFsbF9jb21wYXRpYmxlXCI6IHRydWUsXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcIm9hdXRoXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vdGVjdnljcG16Y3h4b3FtdHR0ankuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL1wiLFxuICAgICAgICBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9cIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJDb25uZWN0IHRvIFN1cGFiYXNlIGJhY2tlbmQgZm9yIGRhdGEgcHJvY2Vzc2luZyBhbmQgTExNIHByb3ZpZGVyIGZvciBBSS1wb3dlcmVkIGJ1c2luZXNzIGludGVsbGlnZW5jZVwiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJDaGF0Vmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5kcmF3ZXIuZGVmYXVsdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHRpbmdzVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJPbmJvYXJkaW5nVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwib25ib2FyZGluZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuNVwiXG59O1xuIiwgImltcG9ydCB7IENvbnRleHRWaWV3LCBCb3gsIFNwaW5uZXIsIElubGluZSwgQmFubmVyLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGF0VGhyZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdFRocmVhZCc7XG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdElucHV0JztcbmltcG9ydCBXZWxjb21lUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvV2VsY29tZVByb21wdCc7XG5pbXBvcnQgQ29udmVyc2F0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50LCBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RyaXBlU3luYyB9IGZyb20gJy4uL2hvb2tzL3VzZVN0cmlwZVN5bmMnO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZyZXNobmVzcz86IHsgdHlwZTogJ2NhY2hlZCcgfCAnbGl2ZSc7IHN5bmNlZEF0Pzogc3RyaW5nIH07XG4gIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gIGNsYXJpZmljYXRpb24/OiB7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICBvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT47XG4gIH07XG59XG5cbmludGVyZmFjZSBDb252ZXJzYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cblxudHlwZSBWaWV3U3RhdGUgPSAnbG9hZGluZycgfCAnZW1wdHknIHwgJ25lZWRzLXN5bmMnIHwgJ2NoYXQnIHwgJ2Vycm9yJztcblxuY29uc3QgQ2hhdFZpZXcgPSAoeyB1c2VyQ29udGV4dCwgZW52aXJvbm1lbnQ6IF9lbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBBUEkgY2xpZW50IHdpdGggU3RyaXBlIGNvbnRleHQgZm9yIHNpZ25hdHVyZSB2ZXJpZmljYXRpb25cbiAgaWYgKHVzZXJDb250ZXh0Py5pZCAmJiB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcbiAgICBpbml0QXBpQ2xpZW50KHVzZXJDb250ZXh0LmlkLCB1c2VyQ29udGV4dC5hY2NvdW50LmlkKTtcbiAgfVxuICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGU8Vmlld1N0YXRlPignbG9hZGluZycpO1xuICBjb25zdCBbY29udmVyc2F0aW9ucywgc2V0Q29udmVyc2F0aW9uc10gPSB1c2VTdGF0ZTxDb252ZXJzYXRpb25bXT4oW10pO1xuICBjb25zdCBbYWN0aXZlQ29udmVyc2F0aW9uSWQsIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICBjb25zdCBbaXNUaGlua2luZywgc2V0SXNUaGlua2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aGlua2luZ1N0YXJ0ZWRBdCwgc2V0VGhpbmtpbmdTdGFydGVkQXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbd2VsY29tZUluc2lnaHRzLCBzZXRXZWxjb21lSW5zaWdodHNdID0gdXNlU3RhdGU8QXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT4+KFtdKTtcbiAgY29uc3QgW3Nob3dDb252ZXJzYXRpb25MaXN0LCBzZXRTaG93Q29udmVyc2F0aW9uTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBzeW5jQWxsLCBzeW5jaW5nLCBwcm9ncmVzcywgZXJyb3I6IHN5bmNFcnJvciB9ID0gdXNlU3RyaXBlU3luYygpO1xuXG4gIGNvbnN0IGhhbmRsZVN5bmNOb3cgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc3luY0FsbCgpO1xuICAgIC8vIEFmdGVyIHN5bmMgY29tcGxldGVzLCByZWxvYWQgd2VsY29tZSBpbnNpZ2h0cyBhbmQgc3dpdGNoIHRvIGVtcHR5IHN0YXRlXG4gICAgaWYgKCFzeW5jRXJyb3IpIHtcbiAgICAgIGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICB9XG4gIH0sIFtzeW5jQWxsLCBzeW5jRXJyb3JdKTtcblxuICBjb25zdCBsb2FkQ29udmVyc2F0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8eyBjb252ZXJzYXRpb25zOiBDb252ZXJzYXRpb25bXSB9PignL2NoYXQtY29udmVyc2F0aW9ucycpO1xuICAgICAgY29uc3QgY29udm9zID0gcmVzcG9uc2UuZGF0YT8uY29udmVyc2F0aW9ucyB8fCBbXTtcbiAgICAgIHNldENvbnZlcnNhdGlvbnMoY29udm9zKTtcblxuICAgICAgaWYgKGNvbnZvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRmlyc3QgdGltZSB1c2VyIFx1MjAxNCBsb2FkIHdlbGNvbWUgaW5zaWdodHNcbiAgICAgICAgY29uc3QgaGFzRGF0YSA9IGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgICAgc2V0Vmlld1N0YXRlKGhhc0RhdGEgPyAnZW1wdHknIDogJ25lZWRzLXN5bmMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgdGhlIG1vc3QgcmVjZW50IGNvbnZlcnNhdGlvblxuICAgICAgICBhd2FpdCBsb2FkQ29udmVyc2F0aW9uKGNvbnZvc1swXS5pZCk7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgnY2hhdCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gSWYgY29udmVyc2F0aW9ucyBmYWlsIHRvIGxvYWQsIGNoZWNrIGlmIHdlIG5lZWQgc3luY1xuICAgICAgY29uc3QgaGFzRGF0YSA9IGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgIHNldFZpZXdTdGF0ZShoYXNEYXRhID8gJ2VtcHR5JyA6ICduZWVkcy1zeW5jJyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCBjb252ZXJzYXRpb25zIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZENvbnZlcnNhdGlvbnMoKTtcbiAgfSwgW2xvYWRDb252ZXJzYXRpb25zXSk7XG5cbiAgY29uc3QgbG9hZFdlbGNvbWVJbnNpZ2h0cyA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8eyBpbnNpZ2h0czogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT4gfT4oXG4gICAgICAgICcvaW5zaWdodHMtd2VsY29tZScsXG4gICAgICApO1xuICAgICAgY29uc3QgaW5zaWdodHMgPSByZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyB8fCBbXTtcbiAgICAgIHNldFdlbGNvbWVJbnNpZ2h0cyhpbnNpZ2h0cyk7XG4gICAgICByZXR1cm4gaW5zaWdodHMubGVuZ3RoID4gMDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbnZlcnNhdGlvbiA9IGFzeW5jIChjb252ZXJzYXRpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHtcbiAgICAgICAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG4gICAgICAgIG1lc3NhZ2VzOiBBcnJheTx7XG4gICAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgfT47XG4gICAgICB9PihgL2NoYXQtY29udmVyc2F0aW9uLWRldGFpbD9jb252ZXJzYXRpb25JZD0ke2NvbnZlcnNhdGlvbklkfWApO1xuXG4gICAgICBjb25zdCBtc2dzOiBNZXNzYWdlW10gPSAocmVzcG9uc2UuZGF0YT8ubWVzc2FnZXMgfHwgW10pLm1hcCgobSkgPT4gKHtcbiAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgIHJvbGU6IG0ucm9sZSxcbiAgICAgICAgY29udGVudDogbS5jb250ZW50LFxuICAgICAgICBmcmVzaG5lc3M6IG0ubWV0YWRhdGE/LmZyZXNobmVzcyBhcyBNZXNzYWdlWydmcmVzaG5lc3MnXSxcbiAgICAgICAgaW5zaWdodHM6IG0ubWV0YWRhdGE/Lmluc2lnaHRzIGFzIE1lc3NhZ2VbJ2luc2lnaHRzJ10sXG4gICAgICB9KSk7XG5cbiAgICAgIHNldE1lc3NhZ2VzKG1zZ3MpO1xuICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQoY29udmVyc2F0aW9uSWQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNvbnZlcnNhdGlvbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICAvLyBBZGQgdXNlciBtZXNzYWdlIHRvIFVJIGltbWVkaWF0ZWx5XG4gICAgICBjb25zdCB0ZW1wVXNlck1zZ0lkID0gYHRlbXAtJHtEYXRlLm5vdygpfWA7XG4gICAgICBjb25zdCB1c2VyTWVzc2FnZTogTWVzc2FnZSA9IHtcbiAgICAgICAgaWQ6IHRlbXBVc2VyTXNnSWQsXG4gICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH07XG4gICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIHVzZXJNZXNzYWdlXSk7XG4gICAgICBzZXRWaWV3U3RhdGUoJ2NoYXQnKTtcbiAgICAgIHNldElzVGhpbmtpbmcodHJ1ZSk7XG4gICAgICBzZXRUaGlua2luZ1N0YXJ0ZWRBdChEYXRlLm5vdygpKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8e1xuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgIH07XG4gICAgICAgICAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgICAgICAgICBjb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgICAgICB9PignL2NoYXQtbWVzc2FnZScsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBjb252ZXJzYXRpb25JZDogYWN0aXZlQ29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFzc2lzdGFudE1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UuaWQgfHwgYG1zZy0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhPy5tZXNzYWdlLmNvbnRlbnQgfHwgJ1NvcnJ5LCBJIGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlLicsXG4gICAgICAgICAgZnJlc2huZXNzOiByZXNwb25zZS5tZXRhIGFzIE1lc3NhZ2VbJ2ZyZXNobmVzcyddLFxuICAgICAgICAgIGluc2lnaHRzOiByZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgY29udmVyc2F0aW9uIElEIGlmIG5ldyBjb252ZXJzYXRpb24gd2FzIGNyZWF0ZWRcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LmNvbnZlcnNhdGlvbklkICYmICFhY3RpdmVDb252ZXJzYXRpb25JZCkge1xuICAgICAgICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkKHJlc3BvbnNlLmRhdGEuY29udmVyc2F0aW9uSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBhc3Npc3RhbnRNZXNzYWdlXSk7XG4gICAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgICAgY29uc3QgZXJyb3JPYmogPSBlcnIgYXMgeyBlcnJvcj86IHsgY29kZT86IHN0cmluZzsgbWVzc2FnZT86IHN0cmluZyB9IH07XG4gICAgICAgIGNvbnN0IGNvZGUgPSBlcnJvck9iaj8uZXJyb3I/LmNvZGU7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09ICdhdXRoX3JlZnJlc2hfZmFpbGVkJykge1xuICAgICAgICAgIHNldEVycm9yKCdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSByZS1hdXRob3JpemUgSmF2ZWxpbi4nKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnbGxtX3VuYXZhaWxhYmxlJykge1xuICAgICAgICAgIHNldEVycm9yKCdBSSBzZXJ2aWNlIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbW9tZW50LicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNUaGlua2luZyhmYWxzZSk7XG4gICAgICAgIHNldFRoaW5raW5nU3RhcnRlZEF0KHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbYWN0aXZlQ29udmVyc2F0aW9uSWRdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNsYXJpZmljYXRpb25TZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgc2VuZE1lc3NhZ2UodmFsdWUpO1xuICAgIH0sXG4gICAgW3NlbmRNZXNzYWdlXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVOZXdDb252ZXJzYXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQobnVsbCk7XG4gICAgc2V0TWVzc2FnZXMoW10pO1xuICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSk7XG4gICAgbG9hZFdlbGNvbWVJbnNpZ2h0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0Q29udmVyc2F0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSk7XG4gICAgYXdhaXQgbG9hZENvbnZlcnNhdGlvbihpZCk7XG4gICAgc2V0Vmlld1N0YXRlKCdjaGF0Jyk7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkaW5nIHN0YXRlXG4gIGlmICh2aWV3U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJKYXZlbGluXCI+XG4gICAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nLCBhbGlnblg6ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PkxvYWRpbmcgSmF2ZWxpbi4uLjwvSW5saW5lPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIkphdmVsaW5cIlxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9eygpID0+IHNldFNob3dDb252ZXJzYXRpb25MaXN0KCh2KSA9PiAhdil9PlxuICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9e2hhbmRsZU5ld0NvbnZlcnNhdGlvbn0+XG4gICAgICAgICAgICBOZXcgY2hhdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBoZWlnaHQ6ICdmaWxsJyB9fT5cbiAgICAgICAgey8qIEVycm9yIGJhbm5lciAqL31cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgdGl0bGU9XCJFcnJvclwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZXJyb3J9XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN5bmMgZXJyb3IgYmFubmVyICovfVxuICAgICAgICB7c3luY0Vycm9yICYmIChcbiAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICB0eXBlPVwiY2F1dGlvblwiXG4gICAgICAgICAgICB0aXRsZT1cIlN5bmMgaXNzdWVcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3N5bmNFcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBDb252ZXJzYXRpb24gbGlzdCBwYW5lbCAqL31cbiAgICAgICAge3Nob3dDb252ZXJzYXRpb25MaXN0ICYmIChcbiAgICAgICAgICA8Q29udmVyc2F0aW9uTGlzdFxuICAgICAgICAgICAgY29udmVyc2F0aW9ucz17Y29udmVyc2F0aW9uc31cbiAgICAgICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbklkPXthY3RpdmVDb252ZXJzYXRpb25JZH1cbiAgICAgICAgICAgIG9uU2VsZWN0Q29udmVyc2F0aW9uPXtoYW5kbGVTZWxlY3RDb252ZXJzYXRpb259XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFpbiBjb250ZW50IGFyZWEgKi99XG4gICAgICAgIHshc2hvd0NvbnZlcnNhdGlvbkxpc3QgJiYgPEJveCBjc3M9e3sgc3RhY2s6ICd5Jywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICB7LyogTmVlZHMgc3luYyBzdGF0ZSAqL31cbiAgICAgICAgICB7dmlld1N0YXRlID09PSAnbmVlZHMtc3luYycgJiYgIXN5bmNpbmcgJiYgKFxuICAgICAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScsIGFsaWduWDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdoZWFkaW5nJyB9fT5TeW5jIHlvdXIgU3RyaXBlIGRhdGE8L0lubGluZT5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIEphdmVsaW4gbmVlZHMgdG8gc3luYyB5b3VyIFN0cmlwZSBkYXRhIGJlZm9yZSBpdCBjYW4gZ2VuZXJhdGUgaW5zaWdodHMuIFRoaXMgdXN1YWxseSB0YWtlcyBsZXNzIHRoYW4gYSBtaW51dGUuXG4gICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU3luY05vd30+XG4gICAgICAgICAgICAgICAgU3luYyBub3dcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFN5bmNpbmcgcHJvZ3Jlc3MgKi99XG4gICAgICAgICAge3N5bmNpbmcgJiYgKFxuICAgICAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIFN5bmNpbmcgeW91ciBkYXRhLi4uICh7cHJvZ3Jlc3MuY29tcGxldGVkfS97cHJvZ3Jlc3MudG90YWx9KVxuICAgICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogTm9ybWFsIGVtcHR5L2NoYXQgc3RhdGVzICovfVxuICAgICAgICAgIHt2aWV3U3RhdGUgPT09ICdlbXB0eScgJiYgIXN5bmNpbmcgJiYgbWVzc2FnZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPFdlbGNvbWVQcm9tcHQgb25TZWxlY3RQcm9tcHQ9e3NlbmRNZXNzYWdlfSBpbnNpZ2h0cz17d2VsY29tZUluc2lnaHRzfSAvPlxuICAgICAgICAgICkgOiB2aWV3U3RhdGUgPT09ICdjaGF0JyB8fCBtZXNzYWdlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPENoYXRUaHJlYWRcbiAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICBpc1RoaW5raW5nPXtpc1RoaW5raW5nfVxuICAgICAgICAgICAgICB0aGlua2luZ1N0YXJ0ZWRBdD17dGhpbmtpbmdTdGFydGVkQXR9XG4gICAgICAgICAgICAgIG9uQ2xhcmlmaWNhdGlvblNlbGVjdD17aGFuZGxlQ2xhcmlmaWNhdGlvblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvQm94Pn1cblxuICAgICAgICB7LyogQ2hhdCBpbnB1dCAqL31cbiAgICAgICAgeyFzaG93Q29udmVyc2F0aW9uTGlzdCAmJiB2aWV3U3RhdGUgIT09ICduZWVkcy1zeW5jJyAmJiAhc3luY2luZyAmJiAoXG4gICAgICAgICAgPENoYXRJbnB1dCBvblNlbmQ9e3NlbmRNZXNzYWdlfSBkaXNhYmxlZD17aXNUaGlua2luZ30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0VmlldztcbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IE1lc3NhZ2VCdWJibGUgZnJvbSAnLi9NZXNzYWdlQnViYmxlJztcbmltcG9ydCBJbnNpZ2h0Q2FyZCBmcm9tICcuL0luc2lnaHRDYXJkJztcbmltcG9ydCBUaGlua2luZ0luZGljYXRvciBmcm9tICcuL1RoaW5raW5nSW5kaWNhdG9yJztcbmltcG9ydCBDbGFyaWZpY2F0aW9uUHJvbXB0IGZyb20gJy4vQ2xhcmlmaWNhdGlvblByb21wdCc7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgY2xhcmlmaWNhdGlvbj86IHtcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIENoYXRUaHJlYWRQcm9wcyB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG4gIGlzVGhpbmtpbmc6IGJvb2xlYW47XG4gIHRoaW5raW5nU3RhcnRlZEF0PzogbnVtYmVyO1xuICBvbkNsYXJpZmljYXRpb25TZWxlY3Q/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2hhdFRocmVhZCA9ICh7XG4gIG1lc3NhZ2VzLFxuICBpc1RoaW5raW5nLFxuICB0aGlua2luZ1N0YXJ0ZWRBdCxcbiAgb25DbGFyaWZpY2F0aW9uU2VsZWN0LFxufTogQ2hhdFRocmVhZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcbiAgICAgICAgPEJveCBrZXk9e21lc3NhZ2UuaWR9IGNzcz17eyBzdGFjazogJ3knIH19PlxuICAgICAgICAgIDxNZXNzYWdlQnViYmxlXG4gICAgICAgICAgICByb2xlPXttZXNzYWdlLnJvbGV9XG4gICAgICAgICAgICBjb250ZW50PXttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICBmcmVzaG5lc3M9e21lc3NhZ2UuZnJlc2huZXNzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge21lc3NhZ2UuaW5zaWdodHM/Lm1hcCgoaW5zaWdodCkgPT4gKFxuICAgICAgICAgICAgPEluc2lnaHRDYXJkXG4gICAgICAgICAgICAgIGtleT17aW5zaWdodC5pZH1cbiAgICAgICAgICAgICAgaW5zaWdodElkPXtpbnNpZ2h0LmlkfVxuICAgICAgICAgICAgICBtZXNzYWdlSWQ9e21lc3NhZ2UuaWR9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2luc2lnaHQuY29udGVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge21lc3NhZ2UuY2xhcmlmaWNhdGlvbiAmJiBvbkNsYXJpZmljYXRpb25TZWxlY3QgJiYgKFxuICAgICAgICAgICAgPENsYXJpZmljYXRpb25Qcm9tcHRcbiAgICAgICAgICAgICAgcXVlc3Rpb249e21lc3NhZ2UuY2xhcmlmaWNhdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17bWVzc2FnZS5jbGFyaWZpY2F0aW9uLm9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvbkNsYXJpZmljYXRpb25TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgICB7aXNUaGlua2luZyAmJiB0aGlua2luZ1N0YXJ0ZWRBdCAmJiAoXG4gICAgICAgIDxUaGlua2luZ0luZGljYXRvciBzdGFydGVkQXQ9e3RoaW5raW5nU3RhcnRlZEF0fSAvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRUaHJlYWQ7XG4iLCAiaW1wb3J0IHsgQm94LCBJbmxpbmUsIEJhZGdlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIE1lc3NhZ2VCdWJibGVQcm9wcyB7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZyZXNobmVzcz86IHsgdHlwZTogJ2NhY2hlZCcgfCAnbGl2ZSc7IHN5bmNlZEF0Pzogc3RyaW5nIH07XG59XG5cbmNvbnN0IE1lc3NhZ2VCdWJibGUgPSAoeyByb2xlLCBjb250ZW50LCBmcmVzaG5lc3MgfTogTWVzc2FnZUJ1YmJsZVByb3BzKSA9PiB7XG4gIGNvbnN0IGlzVXNlciA9IHJvbGUgPT09ICd1c2VyJztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17e1xuICAgICAgICBwYWRkaW5nOiAnbWVkaXVtJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1VzZXIgPyAnY29udGFpbmVyJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhY2s6ICd5JyxcbiAgICAgICAgZ2FwOiAnc21hbGwnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgIHtpc1VzZXIgPyAnWW91JyA6ICdKYXZlbGluJ31cbiAgICAgIDwvSW5saW5lPlxuICAgICAgPElubGluZT57Y29udGVudH08L0lubGluZT5cbiAgICAgIHtmcmVzaG5lc3MgJiYgIWlzVXNlciAmJiAoXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgICAgPEJhZGdlIHR5cGU9e2ZyZXNobmVzcy50eXBlID09PSAnbGl2ZScgPyAncG9zaXRpdmUnIDogJ2luZm8nfT5cbiAgICAgICAgICAgIHtmcmVzaG5lc3MudHlwZSA9PT0gJ2xpdmUnXG4gICAgICAgICAgICAgID8gJ0xpdmUgZGF0YSdcbiAgICAgICAgICAgICAgOiBgRGF0YSBhcyBvZiAke2ZyZXNobmVzcy5zeW5jZWRBdCA/IG5ldyBEYXRlKGZyZXNobmVzcy5zeW5jZWRBdCkudG9Mb2NhbGVTdHJpbmcoKSA6ICdjYWNoZSd9YH1cbiAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQnViYmxlO1xuIiwgImltcG9ydCB7IEJveCwgQmFubmVyLCBCdXR0b24sIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwaUNsaWVudCB9IGZyb20gJy4uL2xpYi9hcGktY2xpZW50JztcblxuaW50ZXJmYWNlIEluc2lnaHRDYXJkUHJvcHMge1xuICBpbnNpZ2h0SWQ6IHN0cmluZztcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgSW5zaWdodENhcmQgPSAoeyBpbnNpZ2h0SWQsIG1lc3NhZ2VJZCwgY29udGVudCB9OiBJbnNpZ2h0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IFtmZWVkYmFjaywgc2V0RmVlZGJhY2tdID0gdXNlU3RhdGU8J3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUZlZWRiYWNrID0gYXN5bmMgKHJhdGluZzogJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScpID0+IHtcbiAgICBpZiAoc3VibWl0dGluZyB8fCBmZWVkYmFjaykgcmV0dXJuO1xuICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaUNsaWVudCgnL2luc2lnaHRzLWZlZWRiYWNrJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogeyBpbnNpZ2h0SWQsIG1lc3NhZ2VJZCwgcmF0aW5nIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEZlZWRiYWNrKHJhdGluZyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTaWxlbnRseSBmYWlsIFx1MjAxNCBmZWVkYmFjayBpcyBub24tY3JpdGljYWxcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ3NtYWxsJywgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgPEJhbm5lciB0eXBlPVwiZGVmYXVsdFwiIHRpdGxlPVwiSW5zaWdodFwiIGRlc2NyaXB0aW9uPXtjb250ZW50fSAvPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17ZmVlZGJhY2sgPT09ICdwb3NpdGl2ZScgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IGZlZWRiYWNrICE9PSBudWxsfVxuICAgICAgICAgIG9uUHJlc3M9eygpID0+IGhhbmRsZUZlZWRiYWNrKCdwb3NpdGl2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZT57ZmVlZGJhY2sgPT09ICdwb3NpdGl2ZScgPyAnSGVscGZ1bCcgOiAnSGVscGZ1bD8nfTwvSW5saW5lPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9e2ZlZWRiYWNrID09PSAnbmVnYXRpdmUnID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBmZWVkYmFjayAhPT0gbnVsbH1cbiAgICAgICAgICBvblByZXNzPXsoKSA9PiBoYW5kbGVGZWVkYmFjaygnbmVnYXRpdmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmU+e2ZlZWRiYWNrID09PSAnbmVnYXRpdmUnID8gJ05vdCBoZWxwZnVsJyA6ICdOb3QgaGVscGZ1bD8nfTwvSW5saW5lPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodENhcmQ7XG4iLCAiaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9zaWduYXR1cmUnO1xuXG4vLyBTdXBhYmFzZSBFZGdlIEZ1bmN0aW9ucyBiYXNlIFVSTFxuY29uc3QgU1VQQUJBU0VfRlVOQ1RJT05TX1VSTCA9XG4gIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudj8uU1VQQUJBU0VfRlVOQ1RJT05TX1VSTFxuICAgID8gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfRlVOQ1RJT05TX1VSTFxuICAgIDogJ2h0dHBzOi8vdGVjdnljcG16Y3h4b3FtdHR0ankuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxJztcblxuaW50ZXJmYWNlIEFwaVJlc3BvbnNlPFQ+IHtcbiAgZGF0YT86IFQ7XG4gIGVycm9yPzogeyBjb2RlOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZzsgcmVxdWVzdElkOiBzdHJpbmcgfTtcbiAgbWV0YT86IHsgZnJlc2huZXNzOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbn1cblxuaW50ZXJmYWNlIFNpZ25hdHVyZUNvbnRleHQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgYWNjb3VudElkOiBzdHJpbmc7XG59XG5cbmxldCBfc2lnbmF0dXJlQ29udGV4dDogU2lnbmF0dXJlQ29udGV4dCB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIEFQSSBjbGllbnQgd2l0aCB0aGUgdXNlcidzIFN0cmlwZSBjb250ZXh0LlxuICogTXVzdCBiZSBjYWxsZWQgb25jZSBmcm9tIGEgdmlldyB0aGF0IGhhcyBFeHRlbnNpb25Db250ZXh0VmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBpQ2xpZW50KHVzZXJJZDogc3RyaW5nLCBhY2NvdW50SWQ6IHN0cmluZykge1xuICBfc2lnbmF0dXJlQ29udGV4dCA9IHsgdXNlcklkLCBhY2NvdW50SWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaUNsaWVudDxUPihcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zOiB7IG1ldGhvZD86IHN0cmluZzsgYm9keT86IHVua25vd24gfSA9IHt9LFxuKTogUHJvbWlzZTxBcGlSZXNwb25zZTxUPj4ge1xuICBpZiAoIV9zaWduYXR1cmVDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhcGlDbGllbnQgbm90IGluaXRpYWxpemVkIFx1MjAxNCBjYWxsIGluaXRBcGlDbGllbnQgZmlyc3QnKTtcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIFN0cmlwZSBzaWduYXR1cmU7IGZhbGxiYWNrIGdyYWNlZnVsbHkgZm9yIGxvY2FsIGRldlxuICBsZXQgc2lnbmF0dXJlID0gJyc7XG4gIHRyeSB7XG4gICAgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gZmV0Y2hTdHJpcGVTaWduYXR1cmUgbWF5IG5vdCB3b3JrIGluIGxvY2FsIHByZXZpZXcgbW9kZVxuICAgIGNvbnNvbGUud2FybignZmV0Y2hTdHJpcGVTaWduYXR1cmUgZmFpbGVkIFx1MjAxNCBzZW5kaW5nIHVuc2lnbmVkIHJlcXVlc3QnKTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJztcblxuICAvLyBBbHdheXMgaW5jbHVkZSB1c2VyX2lkIGFuZCBhY2NvdW50X2lkIGluIHRoZSBib2R5IGZvciBhdXRoXG4gIGNvbnN0IGJvZHlQYXlsb2FkID0ge1xuICAgIHVzZXJfaWQ6IF9zaWduYXR1cmVDb250ZXh0LnVzZXJJZCxcbiAgICBhY2NvdW50X2lkOiBfc2lnbmF0dXJlQ29udGV4dC5hY2NvdW50SWQsXG4gICAgLi4uKG9wdGlvbnMuYm9keSAmJiB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYm9keSA6IHt9KSxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NVUEFCQVNFX0ZVTkNUSU9OU19VUkx9JHtwYXRofWAsIHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC4uLihzaWduYXR1cmUgPyB7ICdzdHJpcGUtc2lnbmF0dXJlJzogc2lnbmF0dXJlIH0gOiB7fSksXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5UGF5bG9hZCksXG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG4iLCAiaW1wb3J0IHsgQm94LCBTcGlubmVyLCBJbmxpbmUsIEJhbm5lciB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVGhpbmtpbmdJbmRpY2F0b3JQcm9wcyB7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xufVxuXG5jb25zdCBUaGlua2luZ0luZGljYXRvciA9ICh7IHN0YXJ0ZWRBdCB9OiBUaGlua2luZ0luZGljYXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRFbGFwc2VkKE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBzdGFydGVkQXQpIC8gMTAwMCkpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3N0YXJ0ZWRBdF0pO1xuXG4gIGNvbnN0IHN0YXR1c1RleHQgPVxuICAgIGVsYXBzZWQgPj0gNSA/ICdGZXRjaGluZyBmcmVzaCBkYXRhIGZyb20gU3RyaXBlLi4uJyA6ICdBbmFseXppbmcgeW91ciBkYXRhLi4uJztcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57c3RhdHVzVGV4dH08L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICAge2VsYXBzZWQgPj0gNSAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJTdGlsbCB3b3JraW5nIFx1MjAxNCBmZXRjaGluZyB0aGUgbGF0ZXN0IGRhdGEgZnJvbSBTdHJpcGUgdG8gZ2l2ZSB5b3UgYW4gYWNjdXJhdGUgYW5zd2VyLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhpbmtpbmdJbmRpY2F0b3I7XG4iLCAiaW1wb3J0IHsgQm94LCBCYW5uZXIsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5cbmludGVyZmFjZSBDbGFyaWZpY2F0aW9uT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENsYXJpZmljYXRpb25Qcm9tcHRQcm9wcyB7XG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIG9wdGlvbnM6IENsYXJpZmljYXRpb25PcHRpb25bXTtcbiAgb25TZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDbGFyaWZpY2F0aW9uUHJvbXB0ID0gKHsgcXVlc3Rpb24sIG9wdGlvbnMsIG9uU2VsZWN0IH06IENsYXJpZmljYXRpb25Qcm9tcHRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICA8QmFubmVyIHR5cGU9XCJkZWZhdWx0XCIgdGl0bGU9XCJDbGFyaWZpY2F0aW9uIG5lZWRlZFwiIGRlc2NyaXB0aW9uPXtxdWVzdGlvbn0gLz5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgd3JhcDogJ3dyYXAnIH19PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3Qob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhcmlmaWNhdGlvblByb21wdDtcbiIsICJpbXBvcnQgeyBCb3gsIFRleHRBcmVhLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQ2hhdElucHV0UHJvcHMge1xuICBvblNlbmQ6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaW5pdGlhbFZhbHVlPzogc3RyaW5nO1xufVxuXG5jb25zdCBDaGF0SW5wdXQgPSAoeyBvblNlbmQsIGRpc2FibGVkID0gZmFsc2UsIGluaXRpYWxWYWx1ZSA9ICcnIH06IENoYXRJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblxuICBjb25zdCBoYW5kbGVTZW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XG4gICAgaWYgKCF0cmltbWVkIHx8IGRpc2FibGVkKSByZXR1cm47XG4gICAgb25TZW5kKHRyaW1tZWQpO1xuICAgIHNldFZhbHVlKCcnKTtcbiAgfSwgW3ZhbHVlLCBkaXNhYmxlZCwgb25TZW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2JvdHRvbScsIHBhZGRpbmc6ICdzbWFsbCcgfX0+XG4gICAgICA8Qm94IGNzcz17eyB3aWR0aDogJ2ZpbGwnIH19PlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD1cIkFzayBhIHF1ZXN0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBteSBNUlI/XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcm93cz17Mn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICBvblByZXNzPXtoYW5kbGVTZW5kfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgIXZhbHVlLnRyaW0oKX1cbiAgICAgID5cbiAgICAgICAgU2VuZFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5wdXQ7XG4iLCAiaW1wb3J0IHsgQm94LCBJbmxpbmUsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5cbmNvbnN0IEdVSURFRF9QUk9NUFRTID0gW1xuICB7IGxhYmVsOiBcIldoYXQncyBteSBNUlI/XCIsIHZhbHVlOiBcIldoYXQncyBteSBNUlI/XCIgfSxcbiAgeyBsYWJlbDogXCJIb3cncyBjaHVybiB0cmVuZGluZz9cIiwgdmFsdWU6IFwiSG93IGlzIG15IGNodXJuIHJhdGUgdHJlbmRpbmcgb3ZlciB0aGUgbGFzdCAzIG1vbnRocz9cIiB9LFxuICB7IGxhYmVsOiAnUmV2ZW51ZSBieSBwcm9kdWN0JywgdmFsdWU6IFwiV2hhdCdzIG15IHJldmVudWUgYnJlYWtkb3duIGJ5IHByb2R1Y3Q/XCIgfSxcbiAgeyBsYWJlbDogJ1RvcCBjdXN0b21lcnMnLCB2YWx1ZTogJ1dobyBhcmUgbXkgdG9wIDEwIGN1c3RvbWVycyBieSByZXZlbnVlPycgfSxcbiAgeyBsYWJlbDogJ0dyb3d0aCByYXRlJywgdmFsdWU6IFwiV2hhdCdzIG15IE1SUiBncm93dGggcmF0ZT9cIiB9LFxuXTtcblxuaW50ZXJmYWNlIFdlbGNvbWVQcm9tcHRQcm9wcyB7XG4gIG9uU2VsZWN0UHJvbXB0OiAocHJvbXB0OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG59XG5cbmNvbnN0IFdlbGNvbWVQcm9tcHQgPSAoeyBvblNlbGVjdFByb21wdCwgaW5zaWdodHMgfTogV2VsY29tZVByb21wdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScgfX0+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdoZWFkaW5nJyB9fT5XZWxjb21lIHRvIEphdmVsaW48L0lubGluZT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIEFzayBtZSBhbnl0aGluZyBhYm91dCB5b3VyIFN0cmlwZSBidXNpbmVzcy4gSSBjYW4gY2FsY3VsYXRlIG1ldHJpY3MsIGFuYWx5emUgdHJlbmRzLCBhbmRcbiAgICAgICAgICBzdXJmYWNlIGluc2lnaHRzIGZyb20geW91ciBkYXRhLlxuICAgICAgICA8L0lubGluZT5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7aW5zaWdodHMgJiYgaW5zaWdodHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlJlY2VudCBpbnNpZ2h0czwvSW5saW5lPlxuICAgICAgICAgIHtpbnNpZ2h0cy5tYXAoKGluc2lnaHQpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtpbnNpZ2h0LmlkfVxuICAgICAgICAgICAgICBjc3M9e3sgcGFkZGluZzogJ3NtYWxsJywgYmFja2dyb3VuZENvbG9yOiAnY29udGFpbmVyJywgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+e2luc2lnaHQuY29udGVudH08L0lubGluZT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5UcnkgYXNraW5nPC9JbmxpbmU+XG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgd3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgIHtHVUlERURfUFJPTVBUUy5tYXAoKHByb21wdCkgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3Byb21wdC52YWx1ZX1cbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IG9uU2VsZWN0UHJvbXB0KHByb21wdC52YWx1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9tcHQubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250OiAnY2FwdGlvbicsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICBKYXZlbGluIHByb3ZpZGVzIGluZm9ybWF0aW9uYWwgaW5zaWdodHMgb25seSwgbm90IGZpbmFuY2lhbCBvciBidXNpbmVzcyBhZHZpY2UuIEFsd2F5cyB2ZXJpZnkgaW1wb3J0YW50IGRlY2lzaW9ucyB3aXRoIHlvdXIgb3duIGFuYWx5c2lzLlxuICAgICAgICA8L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZVByb21wdDtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uTGlzdFByb3BzIHtcbiAgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW107XG4gIGFjdGl2ZUNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudWxsO1xuICBvblNlbGVjdENvbnZlcnNhdGlvbjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvbnZlcnNhdGlvbkxpc3QgPSAoe1xuICBjb252ZXJzYXRpb25zLFxuICBhY3RpdmVDb252ZXJzYXRpb25JZCxcbiAgb25TZWxlY3RDb252ZXJzYXRpb24sXG4gIG9uQ2xvc2UsXG59OiBDb252ZXJzYXRpb25MaXN0UHJvcHMpID0+IHtcbiAgaWYgKGNvbnZlcnNhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcsIGFsaWduWDogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5ObyBjb252ZXJzYXRpb25zIHlldC48L0lubGluZT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlN0YXJ0IGJ5IGFza2luZyBhIHF1ZXN0aW9uIGJlbG93LjwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJywgcGFkZGluZzogJ3NtYWxsJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGRpc3RyaWJ1dGU6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25ZOiAnY2VudGVyJywgcGFkZGluZzogJ3hzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+Q29udmVyc2F0aW9uczwvSW5saW5lPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIiBvblByZXNzPXtvbkNsb3NlfT5cbiAgICAgICAgICBDbG9zZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252KSA9PiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBrZXk9e2NvbnYuaWR9XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiAnc21hbGwnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb252LmlkID09PSBhY3RpdmVDb252ZXJzYXRpb25JZCA/ICdjb250YWluZXInIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RhY2s6ICd5JyxcbiAgICAgICAgICAgIGdhcDogJ3hzbWFsbCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IG9uU2VsZWN0Q29udmVyc2F0aW9uKGNvbnYuaWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcsIHdpZHRoOiAnZmlsbCcgfX0+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6IGNvbnYuaWQgPT09IGFjdGl2ZUNvbnZlcnNhdGlvbklkID8gJ3NlbWlib2xkJyA6ICdyZWd1bGFyJyB9fT5cbiAgICAgICAgICAgICAgICB7Y29udi50aXRsZSB8fCAnVW50aXRsZWQgY29udmVyc2F0aW9uJ31cbiAgICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdjYXB0aW9uJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShjb252LnVwZGF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb25MaXN0O1xuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHJpcGUgZnJvbSAnLi4vbGliL3N0cmlwZS1jbGllbnQnO1xuaW1wb3J0IHsgYXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuXG5jb25zdCBPQkpFQ1RfVFlQRVMgPSBbXG4gICdjdXN0b21lcnMnLFxuICAnc3Vic2NyaXB0aW9ucycsXG4gICdpbnZvaWNlcycsXG4gICdjaGFyZ2VzJyxcbiAgJ3Byb2R1Y3RzJyxcbiAgJ3ByaWNlcycsXG5dIGFzIGNvbnN0O1xuXG50eXBlIE9iamVjdFR5cGUgPSAodHlwZW9mIE9CSkVDVF9UWVBFUylbbnVtYmVyXTtcblxuaW50ZXJmYWNlIFN5bmNQcm9ncmVzcyB7XG4gIGNvbXBsZXRlZDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBjdXJyZW50PzogT2JqZWN0VHlwZTtcbn1cblxuaW50ZXJmYWNlIFVzZVN0cmlwZVN5bmNSZXR1cm4ge1xuICBzeW5jQWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBzeW5jaW5nOiBib29sZWFuO1xuICBwcm9ncmVzczogU3luY1Byb2dyZXNzO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTdHJpcGVPYmplY3RzKG9iamVjdFR5cGU6IE9iamVjdFR5cGUpIHtcbiAgc3dpdGNoIChvYmplY3RUeXBlKSB7XG4gICAgY2FzZSAnY3VzdG9tZXJzJzpcbiAgICAgIHJldHVybiBzdHJpcGUuY3VzdG9tZXJzLmxpc3QoeyBsaW1pdDogMTAwIH0pO1xuICAgIGNhc2UgJ3N1YnNjcmlwdGlvbnMnOlxuICAgICAgcmV0dXJuIHN0cmlwZS5zdWJzY3JpcHRpb25zLmxpc3QoeyBsaW1pdDogMTAwIH0pO1xuICAgIGNhc2UgJ2ludm9pY2VzJzpcbiAgICAgIHJldHVybiBzdHJpcGUuaW52b2ljZXMubGlzdCh7IGxpbWl0OiAxMDAgfSk7XG4gICAgY2FzZSAnY2hhcmdlcyc6XG4gICAgICByZXR1cm4gc3RyaXBlLmNoYXJnZXMubGlzdCh7IGxpbWl0OiAxMDAgfSk7XG4gICAgY2FzZSAncHJvZHVjdHMnOlxuICAgICAgcmV0dXJuIHN0cmlwZS5wcm9kdWN0cy5saXN0KHsgbGltaXQ6IDEwMCB9KTtcbiAgICBjYXNlICdwcmljZXMnOlxuICAgICAgcmV0dXJuIHN0cmlwZS5wcmljZXMubGlzdCh7IGxpbWl0OiAxMDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0cmlwZVN5bmMoKTogVXNlU3RyaXBlU3luY1JldHVybiB7XG4gIGNvbnN0IFtzeW5jaW5nLCBzZXRTeW5jaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZTxTeW5jUHJvZ3Jlc3M+KHtcbiAgICBjb21wbGV0ZWQ6IDAsXG4gICAgdG90YWw6IE9CSkVDVF9UWVBFUy5sZW5ndGgsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHN5bmNBbGwgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0U3luY2luZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBzZXRQcm9ncmVzcyh7IGNvbXBsZXRlZDogMCwgdG90YWw6IE9CSkVDVF9UWVBFUy5sZW5ndGggfSk7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChjb25zdCBvYmplY3RUeXBlIG9mIE9CSkVDVF9UWVBFUykge1xuICAgICAgICBzZXRQcm9ncmVzcygocHJldikgPT4gKHsgLi4ucHJldiwgY3VycmVudDogb2JqZWN0VHlwZSB9KSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFN0cmlwZU9iamVjdHMob2JqZWN0VHlwZSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtZGF0YScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICBvYmplY3RUeXBlLFxuICAgICAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb2dyZXNzKChwcmV2KSA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgY29tcGxldGVkOiBwcmV2LmNvbXBsZXRlZCArIDEsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ1N5bmMgZmFpbGVkJztcbiAgICAgIHNldEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTeW5jaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4geyBzeW5jQWxsLCBzeW5jaW5nLCBwcm9ncmVzcywgZXJyb3IgfTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVIdHRwQ2xpZW50IH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2h0dHBfY2xpZW50JztcbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcbmltcG9ydCB7IFNUUklQRV9BUElfS0VZIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzJztcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShTVFJJUEVfQVBJX0tFWSwge1xuICBodHRwQ2xpZW50OiBjcmVhdGVIdHRwQ2xpZW50KCksXG4gIGFwaVZlcnNpb246ICcyMDI2LTAxLTI4LmNsb3ZlcicsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBlO1xuIiwgImNvbnN0IE9QVElPTlNfS0VZUyA9IFtcbiAgICAnYXBpS2V5JyxcbiAgICAnaWRlbXBvdGVuY3lLZXknLFxuICAgICdzdHJpcGVBY2NvdW50JyxcbiAgICAnYXBpVmVyc2lvbicsXG4gICAgJ21heE5ldHdvcmtSZXRyaWVzJyxcbiAgICAndGltZW91dCcsXG4gICAgJ2hvc3QnLFxuICAgICdhdXRoZW50aWNhdG9yJyxcbiAgICAnc3RyaXBlQ29udGV4dCcsXG4gICAgJ2FkZGl0aW9uYWxIZWFkZXJzJyxcbiAgICAnc3RyZWFtaW5nJyxcbl07XG5leHBvcnQgZnVuY3Rpb24gaXNPcHRpb25zSGFzaChvKSB7XG4gICAgcmV0dXJuIChvICYmXG4gICAgICAgIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBPUFRJT05TX0tFWVMuc29tZSgocHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHByb3ApKSk7XG59XG4vKipcbiAqIFN0cmluZ2lmaWVzIGFuIE9iamVjdCwgYWNjb21tb2RhdGluZyBuZXN0ZWQgb2JqZWN0c1xuICogKGZvcm1pbmcgdGhlIGNvbnZlbnRpb25hbCBrZXkgJ3BhcmVudFtjaGlsZF09dmFsdWUnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdpZnlSZXF1ZXN0RGF0YShkYXRhLCBcbi8qKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS4gKi9cbl9hcGlNb2RlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeVJlcXVlc3REYXRhKGRhdGEpO1xufVxuLyoqXG4gKiBFbmNvZGVzIGEgdmFsdWUgZm9yIHVzZSBpbiBhIHF1ZXJ5IHN0cmluZywga2VlcGluZyBicmFja2V0cyB1bmVuY29kZWRcbiAqIGZvciByZWFkYWJpbGl0eSAodGhlIHNlcnZlciBhY2NlcHRzIGJvdGggZW5jb2RlZCBhbmQgdW5lbmNvZGVkIGJyYWNrZXRzKS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlUXVlcnlWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiAoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxuICAgICAgICAvLyBFbmNvZGUgY2hhcmFjdGVycyBub3QgZW5jb2RlZCBieSBlbmNvZGVVUklDb21wb25lbnQgYnV0IGVuY29kZWQgYnkgcXNcbiAgICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAvLyBEZWNvZGUgYnJhY2tldHMgZm9yIHJlYWRhYmlsaXR5IChzZXJ2ZXIgYWNjZXB0cyBib3RoKVxuICAgICAgICAucmVwbGFjZSgvJTVCL2csICdbJylcbiAgICAgICAgLnJlcGxhY2UoLyU1RC9nLCAnXScpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSB2YWx1ZSB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgcXVlcnkgc3RyaW5nIGVuY29kaW5nLlxuICogRGF0ZXMgYXJlIGNvbnZlcnRlZCB0byBVbml4IHRpbWVzdGFtcHMuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlVG9TdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xufVxuLyoqXG4gKiBDdXN0b20gcXVlcnkgc3RyaW5nIHN0cmluZ2lmaWVyIHRoYXQgaGFuZGxlcyBuZXN0ZWQgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICogUHJvZHVjZXMgb3V0cHV0IGNvbXBhdGlibGUgd2l0aCB0aGUgcXMgbGlicmFyeSdzIGluZGV4ZWQgYXJyYXkgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlSZXF1ZXN0RGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBlbmNvZGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgLy8gUHJpbWl0aXZlIHZhbHVlIChpbmNsdWRpbmcgbnVsbCBhbmQgRGF0ZSlcbiAgICAgICAgICAgIHBhaXJzLnB1c2goZW5jb2RlUXVlcnlWYWx1ZShrZXkpICsgJz0nICsgZW5jb2RlUXVlcnlWYWx1ZSh2YWx1ZVRvU3RyaW5nKHZhbHVlKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gQXJyYXk6IHVzZSBpbmRleGVkIGZvcm1hdCBhcnJbMF0sIGFyclsxXSwgZXRjLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZShrZXkgKyAnWycgKyBpICsgJ10nLCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE9iamVjdDogcmVjdXJzZSB3aXRoIGJyYWNrZXQgbm90YXRpb25cbiAgICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICAgICAgZW5jb2RlKGtleSArICdbJyArIGsgKyAnXScsIHZhbHVlW2tdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgdG9wLWxldmVsIG9iamVjdFxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICAgICAgZW5jb2RlKGtleSwgZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuLyoqXG4gKiBPdXRwdXRzIGEgbmV3IGZ1bmN0aW9uIHdpdGggaW50ZXJwb2xhdGVkIG9iamVjdCBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBVc2UgbGlrZSBzbzpcbiAqICAgY29uc3QgZm4gPSBtYWtlVVJMSW50ZXJwb2xhdG9yKCdzb21lL3VybC97cGFyYW0xfS97cGFyYW0yfScpO1xuICogICBmbih7IHBhcmFtMTogMTIzLCBwYXJhbTI6IDQ1NiB9KTsgLy8gPT4gJ3NvbWUvdXJsLzEyMy80NTYnXG4gKi9cbmV4cG9ydCBjb25zdCBtYWtlVVJMSW50ZXJwb2xhdG9yID0gKCgpID0+IHtcbiAgICBjb25zdCByYyA9IHtcbiAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICdcIic6ICdcXFxcXCInLFxuICAgICAgICAnXFx1MjAyOCc6ICdcXFxcdTIwMjgnLFxuICAgICAgICAnXFx1MjAyOSc6ICdcXFxcdTIwMjknLFxuICAgIH07XG4gICAgcmV0dXJuIChzdHIpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW5TdHJpbmcgPSBzdHIucmVwbGFjZSgvW1wiXFxuXFxyXFx1MjAyOFxcdTIwMjldL2csICgkMCkgPT4gcmNbJDBdKTtcbiAgICAgICAgcmV0dXJuIChvdXRwdXRzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2xlYW5TdHJpbmcucmVwbGFjZSgvXFx7KFtcXHNcXFNdKz8pXFx9L2csICgkMCwgJDEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBvdXRwdXRzWyQxXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZEVuY29kZVVyaUNvbXBvbmVudFR5cGUob3V0cHV0KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChvdXRwdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG59KSgpO1xuZnVuY3Rpb24gaXNWYWxpZEVuY29kZVVyaUNvbXBvbmVudFR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gWydudW1iZXInLCAnc3RyaW5nJywgJ2Jvb2xlYW4nXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RVcmxQYXJhbXMocGF0aCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHBhdGgubWF0Y2goL1xce1xcdytcXH0vZyk7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLnJlcGxhY2UoL1t7fV0vZywgJycpKTtcbn1cbi8qKlxuICogUmV0dXJuIHRoZSBkYXRhIGFyZ3VtZW50IGZyb20gYSBsaXN0IG9mIGFyZ3VtZW50c1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0W119IGFyZ3NcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbUFyZ3MoYXJncykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSB8fCAhYXJnc1swXSB8fCB0eXBlb2YgYXJnc1swXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAoIWlzT3B0aW9uc0hhc2goYXJnc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3Muc2hpZnQoKTtcbiAgICB9XG4gICAgY29uc3QgYXJnS2V5cyA9IE9iamVjdC5rZXlzKGFyZ3NbMF0pO1xuICAgIGNvbnN0IG9wdGlvbktleXNJbkFyZ3MgPSBhcmdLZXlzLmZpbHRlcigoa2V5KSA9PiBPUFRJT05TX0tFWVMuaW5jbHVkZXMoa2V5KSk7XG4gICAgLy8gSW4gc29tZSBjYXNlcyBvcHRpb25zIG1heSBiZSB0aGUgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAgIC8vIEhlcmUgd2UncmUgZGV0ZWN0aW5nIGEgY2FzZSB3aGVyZSB0aGVyZSBhcmUgdHdvIGRpc3RpbmN0IGFyZ3VtZW50c1xuICAgIC8vICh0aGUgZmlyc3QgYmVpbmcgYXJncyBhbmQgdGhlIHNlY29uZCBvcHRpb25zKSBhbmQgd2l0aCBrbm93blxuICAgIC8vIG9wdGlvbiBrZXlzIGluIHRoZSBmaXJzdCBzbyB0aGF0IHdlIGNhbiB3YXJuIHRoZSB1c2VyIGFib3V0IGl0LlxuICAgIGlmIChvcHRpb25LZXlzSW5BcmdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgb3B0aW9uS2V5c0luQXJncy5sZW5ndGggIT09IGFyZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIGVtaXRXYXJuaW5nKGBPcHRpb25zIGZvdW5kIGluIGFyZ3VtZW50cyAoJHtvcHRpb25LZXlzSW5BcmdzLmpvaW4oJywgJyl9KS4gRGlkIHlvdSBtZWFuIHRvIHBhc3MgYW4gb3B0aW9ucyBvYmplY3Q/IFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RyaXBlL3N0cmlwZS1ub2RlL3dpa2kvUGFzc2luZy1PcHRpb25zLmApO1xuICAgIH1cbiAgICByZXR1cm4ge307XG59XG4vKipcbiAqIFJldHVybiB0aGUgb3B0aW9ucyBoYXNoIGZyb20gYSBsaXN0IG9mIGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uc0Zyb21BcmdzKGFyZ3MpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBob3N0OiBudWxsLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBzdHJlYW1pbmc6IGZhbHNlLFxuICAgIH07XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0cy5hdXRoZW50aWNhdG9yID0gY3JlYXRlQXBpS2V5QXV0aGVudGljYXRvcihhcmdzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09wdGlvbnNIYXNoKGFyZykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MucG9wKCkpO1xuICAgICAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKS5maWx0ZXIoKGtleSkgPT4gIU9QVElPTlNfS0VZUy5pbmNsdWRlcyhrZXkpKTtcbiAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZW1pdFdhcm5pbmcoYEludmFsaWQgb3B0aW9ucyBmb3VuZCAoJHtleHRyYUtleXMuam9pbignLCAnKX0pOyBpZ25vcmluZy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgb3B0cy5hdXRoZW50aWNhdG9yID0gY3JlYXRlQXBpS2V5QXV0aGVudGljYXRvcihwYXJhbXMuYXBpS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuaWRlbXBvdGVuY3lLZXkpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmhlYWRlcnNbJ0lkZW1wb3RlbmN5LUtleSddID0gcGFyYW1zLmlkZW1wb3RlbmN5S2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5zdHJpcGVBY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzWydTdHJpcGUtQWNjb3VudCddID0gcGFyYW1zLnN0cmlwZUFjY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLnN0cmlwZUNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5oZWFkZXJzWydTdHJpcGUtQWNjb3VudCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHNwZWNpZnkgYm90aCBzdHJpcGVBY2NvdW50IGFuZCBzdHJpcGVDb250ZXh0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzWydTdHJpcGUtQ29udGV4dCddID0gcGFyYW1zLnN0cmlwZUNvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmFwaVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBvcHRzLmhlYWRlcnNbJ1N0cmlwZS1WZXJzaW9uJ10gPSBwYXJhbXMuYXBpVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhcmFtcy5tYXhOZXR3b3JrUmV0cmllcykpIHtcbiAgICAgICAgICAgICAgICBvcHRzLnNldHRpbmdzLm1heE5ldHdvcmtSZXRyaWVzID0gcGFyYW1zLm1heE5ldHdvcmtSZXRyaWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocGFyYW1zLnRpbWVvdXQpKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5zZXR0aW5ncy50aW1lb3V0ID0gcGFyYW1zLnRpbWVvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhvc3QpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmhvc3QgPSBwYXJhbXMuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuYXV0aGVudGljYXRvcikge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHNwZWNpZnkgYm90aCBhcGlLZXkgYW5kIGF1dGhlbnRpY2F0b3IuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5hdXRoZW50aWNhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGF1dGhlbnRpY2F0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlY2VpdmluZyBhIHJlcXVlc3QgYXMgdGhlIGZpcnN0IHBhcmFtZXRlci4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5hdXRoZW50aWNhdG9yID0gcGFyYW1zLmF1dGhlbnRpY2F0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmFkZGl0aW9uYWxIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzID0gcGFyYW1zLmFkZGl0aW9uYWxIZWFkZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5zdHJlYW1pbmcpIHtcbiAgICAgICAgICAgICAgICBvcHRzLnN0cmVhbWluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdHM7XG59XG4vKipcbiAqIFByb3ZpZGUgc2ltcGxlIFwiQ2xhc3NcIiBleHRlbnNpb24gbWVjaGFuaXNtLlxuICogPCEtLSBQdWJsaWMgQVBJIGFjY2Vzc2libGUgdmlhIFN0cmlwZS5TdHJpcGVSZXNvdXJjZS5leHRlbmQgLS0+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm90b0V4dGVuZChzdWIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBTdXBlciA9IHRoaXM7XG4gICAgY29uc3QgQ29uc3RydWN0b3IgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3ViLCAnY29uc3RydWN0b3InKVxuICAgICAgICA/IHN1Yi5jb25zdHJ1Y3RvclxuICAgICAgICA6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICBTdXBlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAvLyBUaGlzIGluaXRpYWxpemF0aW9uIGxvZ2ljIGlzIHNvbWV3aGF0IHNlbnNpdGl2ZSB0byBiZSBjb21wYXRpYmxlIHdpdGhcbiAgICAvLyBkaXZlcmdlbnQgSlMgaW1wbGVtZW50YXRpb25zIGxpa2UgdGhlIG9uZSBmb3VuZCBpbiBRdC4gU2VlIGhlcmUgZm9yIG1vcmVcbiAgICAvLyBjb250ZXh0OlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZS9wdWxsLzMzNFxuICAgIE9iamVjdC5hc3NpZ24oQ29uc3RydWN0b3IsIFN1cGVyKTtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgT2JqZWN0LmFzc2lnbihDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHN1Yik7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuLyoqXG4gKiBSZW1vdmUgZW1wdHkgdmFsdWVzIGZyb20gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOdWxsaXNoKG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKG9ialtrZXldICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSBzdGFuZGFyZCBIVFRQIEhlYWRlcnM6XG4gKiB7J2Zvby1iYXInOiAnaGknfVxuICogYmVjb21lc1xuICogeydGb28tQmFyJzogJ2hpJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcnMob2JqKSB7XG4gICAgaWYgKCEob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHJlc3VsdCwgaGVhZGVyKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub3JtYWxpemVIZWFkZXIoaGVhZGVyKV0gPSBvYmpbaGVhZGVyXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG59XG4vKipcbiAqIFN0b2xlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0ZW4tZGUtdnJpZXMvaGVhZGVyLWNhc2Utbm9ybWFsaXplci9ibG9iL21hc3Rlci9pbmRleC5qcyNMMzYtTDQxXG4gKiB3aXRob3V0IHRoZSBleGNlcHRpb25zIHdoaWNoIGFyZSBpcnJlbGV2YW50IHRvIHVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICAgIHJldHVybiBoZWFkZXJcbiAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgLm1hcCgodGV4dCkgPT4gdGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRleHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC5qb2luKCctJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tpZnlQcm9taXNlV2l0aFRpbWVvdXQocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRW5zdXJlIGNhbGxiYWNrIGlzIGNhbGxlZCBvdXRzaWRlIG9mIHByb21pc2Ugc3RhY2suXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbi8qKlxuICogQWxsb3cgZm9yIHNwZWNpYWwgY2FwaXRhbGl6YXRpb24gY2FzZXMgKHN1Y2ggYXMgT0F1dGgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXNjYWxUb0NhbWVsQ2FzZShuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdPQXV0aCcpIHtcbiAgICAgICAgcmV0dXJuICdvYXV0aCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmFtZVswXS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MuZW1pdFdhcm5pbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgU3RyaXBlOiAke3dhcm5pbmd9YCk7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZSAqL1xuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzcy5lbWl0V2FybmluZyh3YXJuaW5nLCAnU3RyaXBlJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuICh0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnKSAmJiAhIW9iajtcbn1cbi8vIEZvciB1c2UgaW4gbXVsdGlwYXJ0IHJlcXVlc3RzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkFuZFN0cmluZ2lmeShkYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3Qgc3RlcCA9IChvYmosIHByZXZLZXkpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IHByZXZLZXkgPyBgJHtwcmV2S2V5fVske2tleX1dYCA6IGtleTtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpICYmXG4gICAgICAgICAgICAgICAgICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9uLWJ1ZmZlciBub24tZmlsZSBPYmplY3RzIGFyZSByZWN1cnNpdmVseSBmbGF0dGVuZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXAodmFsdWUsIG5ld0tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBCdWZmZXJzIGFuZCBmaWxlIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRob3V0IG1vZGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFByaW1pdGl2ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzXG4gICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHN0ZXAoZGF0YSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUludGVnZXIobmFtZSwgbiwgZGVmYXVsdFZhbCkge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuKSkge1xuICAgICAgICBpZiAoZGVmYXVsdFZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBtdXN0IGJlIGFuIGludGVnZXJgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVQcm9jZXNzVXNlckFnZW50UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8ge31cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBsYW5nX3ZlcnNpb246IHByb2Nlc3MudmVyc2lvbixcbiAgICAgICAgICAgIHBsYXRmb3JtOiBwcm9jZXNzLnBsYXRmb3JtLFxuICAgICAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwaUtleUF1dGhlbnRpY2F0b3IoYXBpS2V5KSB7XG4gICAgY29uc3QgYXV0aGVudGljYXRvciA9IChyZXF1ZXN0KSA9PiB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYXBpS2V5O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICAvLyBGb3IgdGVzdGluZ1xuICAgIGF1dGhlbnRpY2F0b3IuX2FwaUtleSA9IGFwaUtleTtcbiAgICByZXR1cm4gYXV0aGVudGljYXRvcjtcbn1cbi8qKlxuICogSm9pbnMgYW4gYXJyYXkgb2YgVWludDhBcnJheXMgaW50byBhIHNpbmdsZSBVaW50OEFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlzKSB7XG4gICAgY29uc3QgdG90YWxMZW5ndGggPSBhcnJheXMucmVkdWNlKChsZW4sIGFycmF5KSA9PiBsZW4gKyBhcnJheS5sZW5ndGgsIDApO1xuICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcbiAgICAgICAgbWVyZ2VkLnNldChhcnJheSwgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGFycmF5Lmxlbmd0aDtcbiAgICB9KTtcbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuLyoqXG4gKiBSZXBsYWNlcyBEYXRlIG9iamVjdHMgd2l0aCBVbml4IHRpbWVzdGFtcHNcbiAqL1xuZnVuY3Rpb24gZGF0ZVRpbWVSZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHRoaXNba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpc1trZXldLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogSlNPTiBzdHJpbmdpZmllcyBhbiBPYmplY3QsIHJlcGxhY2luZyBEYXRlIG9iamVjdHMgd2l0aCBVbml4IHRpbWVzdGFtcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25TdHJpbmdpZnlSZXF1ZXN0RGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEsIGRhdGVUaW1lUmVwbGFjZXIpO1xufVxuLyoqXG4gKiBJbnNwZWN0cyB0aGUgZ2l2ZW4gcGF0aCB0byBkZXRlcm1pbmUgaWYgdGhlIGVuZHBvaW50IGlzIGZvciB2MSBvciB2MiBBUElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFQSU1vZGUocGF0aCkge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm4gJ3YxJztcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguc3RhcnRzV2l0aCgnL3YyJykgPyAndjInIDogJ3YxJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUh0dHBIZWFkZXJBc1N0cmluZyhoZWFkZXIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIuam9pbignLCAnKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhoZWFkZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSHR0cEhlYWRlckFzTnVtYmVyKGhlYWRlcikge1xuICAgIGNvbnN0IG51bWJlciA9IEFycmF5LmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlclswXSA6IGhlYWRlcjtcbiAgICByZXR1cm4gTnVtYmVyKG51bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIZWFkZXJzRm9yRmV0Y2goaGVhZGVycykge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICByZXR1cm4gW2tleSwgcGFyc2VIdHRwSGVhZGVyQXNTdHJpbmcodmFsdWUpXTtcbiAgICB9KTtcbn1cbiIsICIvKipcbiAqIEVuY2Fwc3VsYXRlcyB0aGUgbG9naWMgZm9yIGlzc3VpbmcgYSByZXF1ZXN0IHRvIHRoZSBTdHJpcGUgQVBJLlxuICpcbiAqIEEgY3VzdG9tIEhUVFAgY2xpZW50IHNob3VsZCBzaG91bGQgaW1wbGVtZW50OlxuICogMS4gQSByZXNwb25zZSBjbGFzcyB3aGljaCBleHRlbmRzIEh0dHBDbGllbnRSZXNwb25zZSBhbmQgd3JhcHMgYXJvdW5kIHRoZWlyXG4gKiAgICBvd24gaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYSByZXNwb25zZS5cbiAqIDIuIEEgY2xpZW50IGNsYXNzIHdoaWNoIGV4dGVuZHMgSHR0cENsaWVudCBhbmQgaW1wbGVtZW50cyBhbGwgbWV0aG9kcyxcbiAqICAgIHJldHVybmluZyB0aGVpciBvd24gcmVzcG9uc2UgY2xhc3Mgd2hlbiBtYWtpbmcgcmVxdWVzdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IHtcbiAgICAvKiogVGhlIGNsaWVudCBuYW1lIHVzZWQgZm9yIGRpYWdub3N0aWNzLiAqL1xuICAgIGdldENsaWVudE5hbWUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2xpZW50TmFtZSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KGhvc3QsIHBvcnQsIHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcmVxdWVzdERhdGEsIHByb3RvY29sLCB0aW1lb3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWFrZVJlcXVlc3Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKiogSGVscGVyIHRvIG1ha2UgYSBjb25zaXN0ZW50IHRpbWVvdXQgZXJyb3IgYWNyb3NzIGltcGxlbWVudGF0aW9ucy4gKi9cbiAgICBzdGF0aWMgbWFrZVRpbWVvdXRFcnJvcigpIHtcbiAgICAgICAgY29uc3QgdGltZW91dEVyciA9IG5ldyBUeXBlRXJyb3IoSHR0cENsaWVudC5USU1FT1VUX0VSUk9SX0NPREUpO1xuICAgICAgICB0aW1lb3V0RXJyLmNvZGUgPSBIdHRwQ2xpZW50LlRJTUVPVVRfRVJST1JfQ09ERTtcbiAgICAgICAgcmV0dXJuIHRpbWVvdXRFcnI7XG4gICAgfVxufVxuLy8gUHVibGljIEFQSSBhY2Nlc3NpYmxlIHZpYSBTdHJpcGUuSHR0cENsaWVudFxuSHR0cENsaWVudC5DT05ORUNUSU9OX0NMT1NFRF9FUlJPUl9DT0RFUyA9IFsnRUNPTk5SRVNFVCcsICdFUElQRSddO1xuSHR0cENsaWVudC5USU1FT1VUX0VSUk9SX0NPREUgPSAnRVRJTUVET1VUJztcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICAgIH1cbiAgICBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzQ29kZTtcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJhd1Jlc3BvbnNlIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdG9TdHJlYW0oc3RyZWFtQ29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvU3RyZWFtIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvSlNPTiBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IHBhcnNlSGVhZGVyc0ZvckZldGNoIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudFJlc3BvbnNlLCB9IGZyb20gJy4vSHR0cENsaWVudC5qcyc7XG4vKipcbiAqIEhUVFAgY2xpZW50IHdoaWNoIHVzZXMgYSBgZmV0Y2hgIGZ1bmN0aW9uIHRvIGlzc3VlIHJlcXVlc3RzLlxuICpcbiAqIEJ5IGRlZmF1bHQgcmVsaWVzIG9uIHRoZSBnbG9iYWwgYGZldGNoYCBmdW5jdGlvbiwgYnV0IGFuIG9wdGlvbmFsIGZ1bmN0aW9uXG4gKiBjYW4gYmUgcGFzc2VkIGluLiBJZiBwYXNzaW5nIGluIGEgZnVuY3Rpb24sIGl0IGlzIGV4cGVjdGVkIHRvIG1hdGNoIHRoZSBXZWJcbiAqIEZldGNoIEFQSS4gQXMgYW4gZXhhbXBsZSwgdGhpcyBjb3VsZCBiZSB0aGUgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlXG4gKiBub2RlLWZldGNoIHBhY2thZ2UgKGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gpLlxuICovXG5leHBvcnQgY2xhc3MgRmV0Y2hIdHRwQ2xpZW50IGV4dGVuZHMgSHR0cENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2hGbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBEZWZhdWx0IHRvIGdsb2JhbCBmZXRjaCBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKCFmZXRjaEZuKSB7XG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZldGNoKCkgZnVuY3Rpb24gbm90IHByb3ZpZGVkIGFuZCBpcyBub3QgZGVmaW5lZCBpbiB0aGUgZ2xvYmFsIHNjb3BlLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtdXN0IHByb3ZpZGUgYSBmZXRjaCBpbXBsZW1lbnRhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoRm4gPSBnbG9iYWxUaGlzLmZldGNoO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJvdGggdGltZW91dCBiZWhhdmlvcnMgZGlmZmVycyBmcm9tIE5vZGU6XG4gICAgICAgIC8vIC0gRmV0Y2ggdXNlcyBhIHNpbmdsZSB0aW1lb3V0IGZvciB0aGUgZW50aXJlIGxlbmd0aCBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAgLy8gLSBOb2RlIGlzIG1vcmUgZmluZS1ncmFpbmVkIGFuZCByZXNldHMgdGhlIHRpbWVvdXQgYWZ0ZXIgZWFjaCBzdGFnZSBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuQWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBVdGlsaXNlIG5hdGl2ZSBBYm9ydENvbnRyb2xsZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBBYm9ydENvbnRyb2xsZXIgd2FzIGFkZGVkIGluIE5vZGUgdjE1LjAuMCwgdjE0LjE3LjBcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoRm4gPSBGZXRjaEh0dHBDbGllbnQubWFrZUZldGNoV2l0aEFib3J0VGltZW91dChmZXRjaEZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byByYWNpbmcgYWdhaW5zdCBhIHRpbWVvdXQgcHJvbWlzZSBpZiBub3QgYXZhaWxhYmxlIGluIHRoZSBydW50aW1lXG4gICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IGFjdHVhbGx5IGNhbmNlbCB0aGUgdW5kZXJseWluZyBmZXRjaCBvcGVyYXRpb24gb3IgcmVzb3VyY2VzXG4gICAgICAgICAgICB0aGlzLl9mZXRjaEZuID0gRmV0Y2hIdHRwQ2xpZW50Lm1ha2VGZXRjaFdpdGhSYWNlVGltZW91dChmZXRjaEZuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgbWFrZUZldGNoV2l0aFJhY2VUaW1lb3V0KGZldGNoRm4pIHtcbiAgICAgICAgcmV0dXJuICh1cmwsIGluaXQsIHRpbWVvdXQpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nVGltZW91dElkO1xuICAgICAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEh0dHBDbGllbnQubWFrZVRpbWVvdXRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hGbih1cmwsIGluaXQpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbZmV0Y2hQcm9taXNlLCB0aW1lb3V0UHJvbWlzZV0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nVGltZW91dElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChwZW5kaW5nVGltZW91dElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG1ha2VGZXRjaFdpdGhBYm9ydFRpbWVvdXQoZmV0Y2hGbikge1xuICAgICAgICByZXR1cm4gYXN5bmMgKHVybCwgaW5pdCwgdGltZW91dCkgPT4ge1xuICAgICAgICAgICAgLy8gVXNlIEFib3J0Q29udHJvbGxlciBiZWNhdXNlIEFib3J0U2lnbmFsLnRpbWVvdXQoKSB3YXMgYWRkZWQgbGF0ZXIgaW4gTm9kZSB2MTcuMy4wLCB2MTYuMTQuMFxuICAgICAgICAgICAgY29uc3QgYWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICBsZXQgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBhYm9ydC5hYm9ydChIdHRwQ2xpZW50Lm1ha2VUaW1lb3V0RXJyb3IoKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoRm4odXJsLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGluaXQpLCB7IHNpZ25hbDogYWJvcnQuc2lnbmFsIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBTb21lIGltcGxlbWVudGF0aW9ucywgbGlrZSBub2RlLWZldGNoLCBkbyBub3QgcmVzcGVjdCB0aGUgcmVhc29uIHBhc3NlZCB0byBBYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgICAgICAgIC8vIGFuZCBpbnN0ZWFkIGl0IGFsd2F5cyB0aHJvd3MgYW4gQWJvcnRFcnJvclxuICAgICAgICAgICAgICAgIC8vIFdlIGNhdGNoIHRoaXMgY2FzZSB0byBub3JtYWxpc2UgYWxsIHRpbWVvdXQgZXJyb3JzXG4gICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgSHR0cENsaWVudC5tYWtlVGltZW91dEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUuICovXG4gICAgZ2V0Q2xpZW50TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdmZXRjaCc7XG4gICAgfVxuICAgIGFzeW5jIG1ha2VSZXF1ZXN0KGhvc3QsIHBvcnQsIHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcmVxdWVzdERhdGEsIHByb3RvY29sLCB0aW1lb3V0KSB7XG4gICAgICAgIGNvbnN0IGlzSW5zZWN1cmVDb25uZWN0aW9uID0gcHJvdG9jb2wgPT09ICdodHRwJztcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgJHtpc0luc2VjdXJlQ29ubmVjdGlvbiA/ICdodHRwJyA6ICdodHRwcyd9Oi8vJHtob3N0fWApO1xuICAgICAgICB1cmwucG9ydCA9IHBvcnQ7XG4gICAgICAgIC8vIEZvciBtZXRob2RzIHdoaWNoIGV4cGVjdCBwYXlsb2Fkcywgd2Ugc2hvdWxkIGFsd2F5cyBwYXNzIGEgYm9keSB2YWx1ZVxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgZW1wdHkuIFdpdGhvdXQgdGhpcywgc29tZSBKUyBydW50aW1lcyAoZWcuIERlbm8pIHdpbGxcbiAgICAgICAgLy8gaW5qZWN0IGEgc2Vjb25kIENvbnRlbnQtTGVuZ3RoIGhlYWRlci4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGUvaXNzdWVzLzE1MTlcbiAgICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgY29uc3QgbWV0aG9kSGFzUGF5bG9hZCA9IG1ldGhvZCA9PSAnUE9TVCcgfHwgbWV0aG9kID09ICdQVVQnIHx8IG1ldGhvZCA9PSAnUEFUQ0gnO1xuICAgICAgICBjb25zdCBib2R5ID0gcmVxdWVzdERhdGEgfHwgKG1ldGhvZEhhc1BheWxvYWQgPyAnJyA6IHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuX2ZldGNoRm4odXJsLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVyc0ZvckZldGNoKGhlYWRlcnMpLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIHJldHVybiBuZXcgRmV0Y2hIdHRwQ2xpZW50UmVzcG9uc2UocmVzKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmV0Y2hIdHRwQ2xpZW50UmVzcG9uc2UgZXh0ZW5kcyBIdHRwQ2xpZW50UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlcykge1xuICAgICAgICBzdXBlcihyZXMuc3RhdHVzLCBGZXRjaEh0dHBDbGllbnRSZXNwb25zZS5fdHJhbnNmb3JtSGVhZGVyc1RvT2JqZWN0KHJlcy5oZWFkZXJzKSk7XG4gICAgICAgIHRoaXMuX3JlcyA9IHJlcztcbiAgICB9XG4gICAgZ2V0UmF3UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXM7XG4gICAgfVxuICAgIHRvU3RyZWFtKHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSBgZmV0Y2hgIGRvZXMgbm90IGhhdmUgZXZlbnQgaGFuZGxlcnMgZm9yIHdoZW4gdGhlIHN0cmVhbSBpc1xuICAgICAgICAvLyBjb21wbGV0ZWx5IHJlYWQuIFdlIHRoZXJlZm9yZSBpbnZva2UgdGhlIHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2sgcmlnaHRcbiAgICAgICAgLy8gYXdheS4gVGhpcyBjYWxsYmFjayBlbWl0cyBhIHJlc3BvbnNlIGV2ZW50IHdpdGggbWV0YWRhdGEgYW5kIGNvbXBsZXRlc1xuICAgICAgICAvLyBtZXRyaWNzLCBzbyBpdCdzIG9rIHRvIGRvIHRoaXMgd2l0aG91dCB3YWl0aW5nIGZvciB0aGUgc3RyZWFtIHRvIGJlXG4gICAgICAgIC8vIGNvbXBsZXRlbHkgcmVhZC5cbiAgICAgICAgc3RyZWFtQ29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAvLyBGZXRjaCdzIGBib2R5YCBwcm9wZXJ0eSBpcyBleHBlY3RlZCB0byBiZSBhIHJlYWRhYmxlIHN0cmVhbSBvZiB0aGUgYm9keS5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlcy5ib2R5O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXMuanNvbigpO1xuICAgIH1cbiAgICBzdGF0aWMgX3RyYW5zZm9ybUhlYWRlcnNUb09iamVjdChoZWFkZXJzKSB7XG4gICAgICAgIC8vIEZldGNoIHVzZXMgYSBIZWFkZXJzIGluc3RhbmNlIHNvIHRoaXMgbXVzdCBiZSBjb252ZXJ0ZWQgdG8gYSBiYXJlYm9uZXNcbiAgICAgICAgLy8gSlMgb2JqZWN0IHRvIG1lZXQgdGhlIEh0dHBDbGllbnQgaW50ZXJmYWNlLlxuICAgICAgICBjb25zdCBoZWFkZXJzT2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCBlbnRyeS5sZW5ndGggIT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2Ugb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgZmV0Y2ggZnVuY3Rpb24gZ2l2ZW4gdG8gRmV0Y2hIdHRwQ2xpZW50IGRvIG5vdCBoYXZlIGFuIGl0ZXJhYmxlIGhlYWRlcnMgbWFwLiBSZXNwb25zZSNoZWFkZXJzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJzT2JqW2VudHJ5WzBdXSA9IGVudHJ5WzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXJzT2JqO1xuICAgIH1cbn1cbiIsICIvKipcbiAqIEludGVyZmFjZSBlbmNhcHN1bGF0aW5nIHRoZSB2YXJpb3VzIGNyeXB0byBjb21wdXRhdGlvbnMgdXNlZCBieSB0aGUgbGlicmFyeSxcbiAqIGFsbG93aW5nIHBsdWdnYWJsZSB1bmRlcmx5aW5nIGNyeXB0byBpbXBsZW1lbnRhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDcnlwdG9Qcm92aWRlciB7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSBTSEEtMjU2IEhNQUMgZ2l2ZW4gYSBzZWNyZXQgYW5kIGEgcGF5bG9hZCAoZW5jb2RlZCBpbiBVVEYtOCkuXG4gICAgICogVGhlIG91dHB1dCBITUFDIHNob3VsZCBiZSBlbmNvZGVkIGluIGhleGFkZWNpbWFsLlxuICAgICAqXG4gICAgICogU2FtcGxlIHZhbHVlcyBmb3IgaW1wbGVtZW50YXRpb25zOlxuICAgICAqIC0gY29tcHV0ZUhNQUNTaWduYXR1cmUoJycsICd0ZXN0X3NlY3JldCcpID0+ICdmN2Y5YmQ0N2ZiOTg3MzM3YjU3OTZmZGMxZmRiOWJhMjIxZDBkNTM5NjgxNGJmY2FmOTUyMWY0M2ZkODkyN2ZkJ1xuICAgICAqIC0gY29tcHV0ZUhNQUNTaWduYXR1cmUoJ1xcdWQ4M2RcXHVkZTAwJywgJ3Rlc3Rfc2VjcmV0JykgPT4gJzgzN2RhMjk2ZDA1YzRmZTMxZjYxZDVkN2VhZDAzNTA5OWQ5NTg1YTViY2RlODdkZTk1MjAxMmE3OGYwYjBjNDNcbiAgICAgKi9cbiAgICBjb21wdXRlSE1BQ1NpZ25hdHVyZShwYXlsb2FkLCBzZWNyZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb21wdXRlSE1BQ1NpZ25hdHVyZSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFzeW5jaHJvbm91cyB2ZXJzaW9uIG9mIGBjb21wdXRlSE1BQ1NpZ25hdHVyZWAuIFNvbWUgaW1wbGVtZW50YXRpb25zIG1heVxuICAgICAqIG9ubHkgYWxsb3cgc3VwcG9ydCBhc3luYyBzaWduYXR1cmUgY29tcHV0YXRpb24uXG4gICAgICpcbiAgICAgKiBDb21wdXRlcyBhIFNIQS0yNTYgSE1BQyBnaXZlbiBhIHNlY3JldCBhbmQgYSBwYXlsb2FkIChlbmNvZGVkIGluIFVURi04KS5cbiAgICAgKiBUaGUgb3V0cHV0IEhNQUMgc2hvdWxkIGJlIGVuY29kZWQgaW4gaGV4YWRlY2ltYWwuXG4gICAgICpcbiAgICAgKiBTYW1wbGUgdmFsdWVzIGZvciBpbXBsZW1lbnRhdGlvbnM6XG4gICAgICogLSBjb21wdXRlSE1BQ1NpZ25hdHVyZSgnJywgJ3Rlc3Rfc2VjcmV0JykgPT4gJ2Y3ZjliZDQ3ZmI5ODczMzdiNTc5NmZkYzFmZGI5YmEyMjFkMGQ1Mzk2ODE0YmZjYWY5NTIxZjQzZmQ4OTI3ZmQnXG4gICAgICogLSBjb21wdXRlSE1BQ1NpZ25hdHVyZSgnXFx1ZDgzZFxcdWRlMDAnLCAndGVzdF9zZWNyZXQnKSA9PiAnODM3ZGEyOTZkMDVjNGZlMzFmNjFkNWQ3ZWFkMDM1MDk5ZDk1ODVhNWJjZGU4N2RlOTUyMDEyYTc4ZjBiMGM0M1xuICAgICAqL1xuICAgIGNvbXB1dGVITUFDU2lnbmF0dXJlQXN5bmMocGF5bG9hZCwgc2VjcmV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29tcHV0ZUhNQUNTaWduYXR1cmVBc3luYyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgU0hBLTI1NiBoYXNoIG9mIHRoZSBkYXRhLlxuICAgICAqL1xuICAgIGNvbXB1dGVTSEEyNTZBc3luYyhkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29tcHV0ZVNIQTI1NiBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuLyoqXG4gKiBJZiB0aGUgY3J5cHRvIHByb3ZpZGVyIG9ubHkgc3VwcG9ydHMgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMsXG4gKiB0aHJvdyBDcnlwdG9Qcm92aWRlck9ubHlTdXBwb3J0c0FzeW5jRXJyb3IgaW5zdGVhZCBvZlxuICogYSBnZW5lcmljIGVycm9yIHNvIHRoYXQgdGhlIGNhbGxlciBjYW4gY2hvb3NlIHRvIHByb3ZpZGVcbiAqIGEgbW9yZSBoZWxwZnVsIGVycm9yIG1lc3NhZ2UgdG8gZGlyZWN0IHRoZSB1c2VyIHRvIHVzZVxuICogYW4gYXN5bmNocm9ub3VzIHBhdGh3YXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDcnlwdG9Qcm92aWRlck9ubHlTdXBwb3J0c0FzeW5jRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG4iLCAiaW1wb3J0IHsgQ3J5cHRvUHJvdmlkZXIsIENyeXB0b1Byb3ZpZGVyT25seVN1cHBvcnRzQXN5bmNFcnJvciwgfSBmcm9tICcuL0NyeXB0b1Byb3ZpZGVyLmpzJztcbi8qKlxuICogYENyeXB0b1Byb3ZpZGVyIHdoaWNoIHVzZXMgdGhlIFN1YnRsZUNyeXB0byBpbnRlcmZhY2Ugb2YgdGhlIFdlYiBDcnlwdG8gQVBJLlxuICpcbiAqIFRoaXMgb25seSBzdXBwb3J0cyBhc3luY2hyb25vdXMgb3BlcmF0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnRsZUNyeXB0b1Byb3ZpZGVyIGV4dGVuZHMgQ3J5cHRvUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHN1YnRsZUNyeXB0bykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBJZiBubyBzdWJ0bGUgY3J5cHRvIGlzIGludGVyZmFjZSwgZGVmYXVsdCB0byB0aGUgZ2xvYmFsIG5hbWVzcGFjZS4gVGhpc1xuICAgICAgICAvLyBpcyB0byBhbGxvdyBjdXN0b20gaW50ZXJmYWNlcyAoZWcuIHVzaW5nIHRoZSBOb2RlIHdlYmNyeXB0byBpbnRlcmZhY2UgaW5cbiAgICAgICAgLy8gdGVzdHMpLlxuICAgICAgICB0aGlzLnN1YnRsZUNyeXB0byA9IHN1YnRsZUNyeXB0byB8fCBjcnlwdG8uc3VidGxlO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY29tcHV0ZUhNQUNTaWduYXR1cmUocGF5bG9hZCwgc2VjcmV0KSB7XG4gICAgICAgIHRocm93IG5ldyBDcnlwdG9Qcm92aWRlck9ubHlTdXBwb3J0c0FzeW5jRXJyb3IoJ1N1YnRsZUNyeXB0b1Byb3ZpZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgc3luY2hyb25vdXMgY29udGV4dC4nKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGFzeW5jIGNvbXB1dGVITUFDU2lnbmF0dXJlQXN5bmMocGF5bG9hZCwgc2VjcmV0KSB7XG4gICAgICAgIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgdGhpcy5zdWJ0bGVDcnlwdG8uaW1wb3J0S2V5KCdyYXcnLCBlbmNvZGVyLmVuY29kZShzZWNyZXQpLCB7XG4gICAgICAgICAgICBuYW1lOiAnSE1BQycsXG4gICAgICAgICAgICBoYXNoOiB7IG5hbWU6ICdTSEEtMjU2JyB9LFxuICAgICAgICB9LCBmYWxzZSwgWydzaWduJ10pO1xuICAgICAgICBjb25zdCBzaWduYXR1cmVCdWZmZXIgPSBhd2FpdCB0aGlzLnN1YnRsZUNyeXB0by5zaWduKCdobWFjJywga2V5LCBlbmNvZGVyLmVuY29kZShwYXlsb2FkKSk7XG4gICAgICAgIC8vIGNyeXB0by5zdWJ0bGUgcmV0dXJucyB0aGUgc2lnbmF0dXJlIGluIGJhc2U2NCBmb3JtYXQuIFRoaXMgbXVzdCBiZVxuICAgICAgICAvLyBlbmNvZGVkIGluIGhleCB0byBtYXRjaCB0aGUgQ3J5cHRvUHJvdmlkZXIgY29udHJhY3QuIFdlIG1hcCBlYWNoIGJ5dGUgaW5cbiAgICAgICAgLy8gdGhlIGJ1ZmZlciB0byBpdHMgY29ycmVzcG9uZGluZyBoZXggb2N0ZXQgYW5kIHRoZW4gY29tYmluZSBpbnRvIGEgc3RyaW5nLlxuICAgICAgICBjb25zdCBzaWduYXR1cmVCeXRlcyA9IG5ldyBVaW50OEFycmF5KHNpZ25hdHVyZUJ1ZmZlcik7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZUhleENvZGVzID0gbmV3IEFycmF5KHNpZ25hdHVyZUJ5dGVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnbmF0dXJlQnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZUhleENvZGVzW2ldID0gYnl0ZUhleE1hcHBpbmdbc2lnbmF0dXJlQnl0ZXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaWduYXR1cmVIZXhDb2Rlcy5qb2luKCcnKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGFzeW5jIGNvbXB1dGVTSEEyNTZBc3luYyhkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShhd2FpdCB0aGlzLnN1YnRsZUNyeXB0by5kaWdlc3QoJ1NIQS0yNTYnLCBkYXRhKSk7XG4gICAgfVxufVxuLy8gQ2FjaGVkIG1hcHBpbmcgb2YgYnl0ZSB0byBoZXggcmVwcmVzZW50YXRpb24uIFdlIGRvIHRoaXMgb25jZSB0byBhdm9pZCByZS1cbi8vIGNvbXB1dGluZyBldmVyeSB0aW1lIHdlIG5lZWQgdG8gY29udmVydCB0aGUgcmVzdWx0IG9mIGEgc2lnbmF0dXJlIHRvIGhleC5cbmNvbnN0IGJ5dGVIZXhNYXBwaW5nID0gbmV3IEFycmF5KDI1Nik7XG5mb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVIZXhNYXBwaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgYnl0ZUhleE1hcHBpbmdbaV0gPSBpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xufVxuIiwgImltcG9ydCB7IEZldGNoSHR0cENsaWVudCB9IGZyb20gJy4uL25ldC9GZXRjaEh0dHBDbGllbnQuanMnO1xuaW1wb3J0IHsgU3VidGxlQ3J5cHRvUHJvdmlkZXIgfSBmcm9tICcuLi9jcnlwdG8vU3VidGxlQ3J5cHRvUHJvdmlkZXIuanMnO1xuLyoqXG4gKiBJbnRlcmZhY2UgZW5jYXBzdWxhdGluZyB2YXJpb3VzIHV0aWxpdHkgZnVuY3Rpb25zIHdob3NlXG4gKiBpbXBsZW1lbnRhdGlvbnMgZGVwZW5kIG9uIHRoZSBwbGF0Zm9ybSAvIEpTIHJ1bnRpbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybUZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoRm4gPSBudWxsO1xuICAgICAgICB0aGlzLl9hZ2VudCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdW5hbWUgd2l0aCBOb2RlJ3MgYnVpbHQtaW4gYGV4ZWNgIGZ1bmN0aW9uLCBpZiBhdmFpbGFibGUuXG4gICAgICovXG4gICAgZ2V0VW5hbWUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0VW5hbWUgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB2NCBVVUlELiBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbiAgICAgKi9cbiAgICB1dWlkNCgpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICAgICAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHN0cmluZ3MgaW4gY29uc3RhbnQgdGltZS5cbiAgICAgKi9cbiAgICBzZWN1cmVDb21wYXJlKGEsIGIpIHtcbiAgICAgICAgLy8gcmV0dXJuIGVhcmx5IGhlcmUgaWYgYnVmZmVyIGxlbmd0aHMgYXJlIG5vdCBlcXVhbFxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGVuID0gYS5sZW5ndGg7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQgfD0gYS5jaGFyQ29kZUF0KGkpIF4gYi5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZXZlbnQgZW1pdHRlci5cbiAgICAgKi9cbiAgICBjcmVhdGVFbWl0dGVyKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZUVtaXR0ZXIgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHJlcXVlc3QgZGF0YSBpcyBhIHN0cmVhbS4gSWYgc28sIHJlYWQgdGhlIGVudGlyZSBzdHJlYW1cbiAgICAgKiB0byBhIGJ1ZmZlciBhbmQgcmV0dXJuIHRoZSBidWZmZXIuXG4gICAgICovXG4gICAgdHJ5QnVmZmVyRGF0YShkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndHJ5QnVmZmVyRGF0YSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSFRUUCBjbGllbnQgd2hpY2ggdXNlcyB0aGUgTm9kZSBgaHR0cGAgYW5kIGBodHRwc2AgcGFja2FnZXNcbiAgICAgKiB0byBpc3N1ZSByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBjcmVhdGVOb2RlSHR0cENsaWVudChhZ2VudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZU5vZGVIdHRwQ2xpZW50IG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBIVFRQIGNsaWVudCBmb3IgaXNzdWluZyBTdHJpcGUgQVBJIHJlcXVlc3RzIHdoaWNoIHVzZXMgdGhlIFdlYlxuICAgICAqIEZldGNoIEFQSS5cbiAgICAgKlxuICAgICAqIEEgZmV0Y2ggZnVuY3Rpb24gY2FuIG9wdGlvbmFsbHkgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1ldGVyLiBJZiBub25lIGlzXG4gICAgICogcGFzc2VkLCB3aWxsIGRlZmF1bHQgdG8gdGhlIGRlZmF1bHQgYGZldGNoYCBmdW5jdGlvbiBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuICAgICAqL1xuICAgIGNyZWF0ZUZldGNoSHR0cENsaWVudChmZXRjaEZuKSB7XG4gICAgICAgIHJldHVybiBuZXcgRmV0Y2hIdHRwQ2xpZW50KGZldGNoRm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEhUVFAgY2xpZW50IHVzaW5nIHJ1bnRpbWUtc3BlY2lmaWMgQVBJcy5cbiAgICAgKi9cbiAgICBjcmVhdGVEZWZhdWx0SHR0cENsaWVudCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVEZWZhdWx0SHR0cENsaWVudCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBDcnlwdG9Qcm92aWRlciB3aGljaCB1c2VzIHRoZSBOb2RlIGBjcnlwdG9gIHBhY2thZ2UgZm9yIGl0cyBjb21wdXRhdGlvbnMuXG4gICAgICovXG4gICAgY3JlYXRlTm9kZUNyeXB0b1Byb3ZpZGVyKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZU5vZGVDcnlwdG9Qcm92aWRlciBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBDcnlwdG9Qcm92aWRlciB3aGljaCB1c2VzIHRoZSBTdWJ0bGVDcnlwdG8gaW50ZXJmYWNlIG9mIHRoZSBXZWIgQ3J5cHRvIEFQSS5cbiAgICAgKi9cbiAgICBjcmVhdGVTdWJ0bGVDcnlwdG9Qcm92aWRlcihzdWJ0bGVDcnlwdG8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJ0bGVDcnlwdG9Qcm92aWRlcihzdWJ0bGVDcnlwdG8pO1xuICAgIH1cbiAgICBjcmVhdGVEZWZhdWx0Q3J5cHRvUHJvdmlkZXIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlRGVmYXVsdENyeXB0b1Byb3ZpZGVyIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG59XG4iLCAiLyoqXG4gKiBAcHJpdmF0ZVxuICogKEZvciBpbnRlcm5hbCB1c2UgaW4gc3RyaXBlLW5vZGUuKVxuICogV3JhcHBlciBhcm91bmQgdGhlIEV2ZW50IFdlYiBBUEkuXG4gKi9cbmNsYXNzIF9TdHJpcGVFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIoZXZlbnROYW1lKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59XG4vKiogTWluaW1hbCBFdmVudEVtaXR0ZXIgd3JhcHBlciBhcm91bmQgRXZlbnRUYXJnZXQuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lck1hcHBpbmcgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIG9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJXcmFwcGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lcihldmVudC5kYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0ZW5lck1hcHBpbmcuc2V0KGxpc3RlbmVyLCBsaXN0ZW5lcldyYXBwZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXJXcmFwcGVyKTtcbiAgICB9XG4gICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcldyYXBwZXIgPSB0aGlzLmxpc3RlbmVyTWFwcGluZy5nZXQobGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmxpc3RlbmVyTWFwcGluZy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXJXcmFwcGVyKTtcbiAgICB9XG4gICAgb25jZShldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyV3JhcHBlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJNYXBwaW5nLnNldChsaXN0ZW5lciwgbGlzdGVuZXJXcmFwcGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyV3JhcHBlciwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IF9TdHJpcGVFdmVudChldmVudE5hbWUsIGRhdGEpKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGxhdGZvcm1GdW5jdGlvbnMgfSBmcm9tICcuL1BsYXRmb3JtRnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IFN0cmlwZUVtaXR0ZXIgfSBmcm9tICcuLi9TdHJpcGVFbWl0dGVyLmpzJztcbi8qKlxuICogU3BlY2lhbGl6ZXMgV2ViUGxhdGZvcm1GdW5jdGlvbnMgdXNpbmcgQVBJcyBhdmFpbGFibGUgaW4gV2ViIHdvcmtlcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJQbGF0Zm9ybUZ1bmN0aW9ucyBleHRlbmRzIFBsYXRmb3JtRnVuY3Rpb25zIHtcbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZ2V0VW5hbWUoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBjcmVhdGVFbWl0dGVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUVtaXR0ZXIoKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIHRyeUJ1ZmZlckRhdGEoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5maWxlLmRhdGEgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcGxvYWRpbmcgYSBmaWxlIGFzIGEgc3RyZWFtIGlzIG5vdCBzdXBwb3J0ZWQgaW4gbm9uLU5vZGUgZW52aXJvbm1lbnRzLiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGUgaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY3JlYXRlTm9kZUh0dHBDbGllbnQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyaXBlOiBgY3JlYXRlTm9kZUh0dHBDbGllbnQoKWAgaXMgbm90IGF2YWlsYWJsZSBpbiBub24tTm9kZSBlbnZpcm9ubWVudHMuIFBsZWFzZSB1c2UgYGNyZWF0ZUZldGNoSHR0cENsaWVudCgpYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY3JlYXRlRGVmYXVsdEh0dHBDbGllbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVGZXRjaEh0dHBDbGllbnQoKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGNyZWF0ZU5vZGVDcnlwdG9Qcm92aWRlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpcGU6IGBjcmVhdGVOb2RlQ3J5cHRvUHJvdmlkZXIoKWAgaXMgbm90IGF2YWlsYWJsZSBpbiBub24tTm9kZSBlbnZpcm9ubWVudHMuIFBsZWFzZSB1c2UgYGNyZWF0ZVN1YnRsZUNyeXB0b1Byb3ZpZGVyKClgIGluc3RlYWQuJyk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBjcmVhdGVEZWZhdWx0Q3J5cHRvUHJvdmlkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN1YnRsZUNyeXB0b1Byb3ZpZGVyKCk7XG4gICAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8td2FybmluZy1jb21tZW50cyAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVjFFcnJvciA9IChyYXdTdHJpcGVFcnJvcikgPT4ge1xuICAgIHN3aXRjaCAocmF3U3RyaXBlRXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdjYXJkX2Vycm9yJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlQ2FyZEVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgY2FzZSAnaW52YWxpZF9yZXF1ZXN0X2Vycm9yJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlSW52YWxpZFJlcXVlc3RFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ2FwaV9lcnJvcic6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUFQSUVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgY2FzZSAnYXV0aGVudGljYXRpb25fZXJyb3InOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVBdXRoZW50aWNhdGlvbkVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgY2FzZSAncmF0ZV9saW1pdF9lcnJvcic6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZVJhdGVMaW1pdEVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgY2FzZSAnaWRlbXBvdGVuY3lfZXJyb3InOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVJZGVtcG90ZW5jeUVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgY2FzZSAnaW52YWxpZF9ncmFudCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUludmFsaWRHcmFudEVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlVW5rbm93bkVycm9yKHJhd1N0cmlwZUVycm9yKTtcbiAgICB9XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVYyRXJyb3IgPSAocmF3U3RyaXBlRXJyb3IpID0+IHtcbiAgICBzd2l0Y2ggKHJhd1N0cmlwZUVycm9yLnR5cGUpIHtcbiAgICAgICAgLy8gc3dpdGNoQ2FzZXM6IFRoZSBiZWdpbm5pbmcgb2YgdGhlIHNlY3Rpb24gZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuICAgICAgICBjYXNlICd0ZW1wb3Jhcnlfc2Vzc2lvbl9leHBpcmVkJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGVtcG9yYXJ5U2Vzc2lvbkV4cGlyZWRFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIC8vIHN3aXRjaENhc2VzOiBUaGUgZW5kIG9mIHRoZSBzZWN0aW9uIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbiAgICB9XG4gICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBtaXNzaW5nIHJlcXVpcmVkIGZpZWxkcyBpbiBWMiBBUElzLlxuICAgIC8vIGludmFsaWRfZmllbGQgcmVzcG9uc2UgaW4gVjIgQVBJcyByZXR1cm5zIHRoZSBmaWVsZCAnY29kZScgaW5zdGVhZCBvZiAndHlwZScuXG4gICAgc3dpdGNoIChyYXdTdHJpcGVFcnJvci5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ2ludmFsaWRfZmllbGRzJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlSW52YWxpZFJlcXVlc3RFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZVYxRXJyb3IocmF3U3RyaXBlRXJyb3IpO1xufTtcbi8qKlxuICogU3RyaXBlRXJyb3IgaXMgdGhlIGJhc2UgZXJyb3IgZnJvbSB3aGljaCBhbGwgb3RoZXIgbW9yZSBzcGVjaWZpYyBTdHJpcGUgZXJyb3JzIGRlcml2ZS5cbiAqIFNwZWNpZmljYWxseSBmb3IgZXJyb3JzIHJldHVybmVkIGZyb20gU3RyaXBlJ3MgUkVTVCBBUEkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSwgdHlwZSA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlcihyYXcubWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy5yYXdUeXBlID0gcmF3LnR5cGU7XG4gICAgICAgIHRoaXMuY29kZSA9IHJhdy5jb2RlO1xuICAgICAgICB0aGlzLmRvY191cmwgPSByYXcuZG9jX3VybDtcbiAgICAgICAgdGhpcy5wYXJhbSA9IHJhdy5wYXJhbTtcbiAgICAgICAgdGhpcy5kZXRhaWwgPSByYXcuZGV0YWlsO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSByYXcuaGVhZGVycztcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByYXcucmVxdWVzdElkO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSByYXcuc3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gKF9hID0gcmF3Lm1lc3NhZ2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICB0aGlzLnVzZXJNZXNzYWdlID0gcmF3LnVzZXJfbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jaGFyZ2UgPSByYXcuY2hhcmdlO1xuICAgICAgICB0aGlzLmRlY2xpbmVfY29kZSA9IHJhdy5kZWNsaW5lX2NvZGU7XG4gICAgICAgIHRoaXMucGF5bWVudF9pbnRlbnQgPSByYXcucGF5bWVudF9pbnRlbnQ7XG4gICAgICAgIHRoaXMucGF5bWVudF9tZXRob2QgPSByYXcucGF5bWVudF9tZXRob2Q7XG4gICAgICAgIHRoaXMucGF5bWVudF9tZXRob2RfdHlwZSA9IHJhdy5wYXltZW50X21ldGhvZF90eXBlO1xuICAgICAgICB0aGlzLnNldHVwX2ludGVudCA9IHJhdy5zZXR1cF9pbnRlbnQ7XG4gICAgICAgIHRoaXMuc291cmNlID0gcmF3LnNvdXJjZTtcbiAgICB9XG59XG4vKipcbiAqIEhlbHBlciBmYWN0b3J5IHdoaWNoIHRha2VzIHJhdyBzdHJpcGUgZXJyb3JzIGFuZCBvdXRwdXRzIHdyYXBwaW5nIGluc3RhbmNlc1xuICovXG5TdHJpcGVFcnJvci5nZW5lcmF0ZSA9IGdlbmVyYXRlVjFFcnJvcjtcbi8vIFNwZWNpZmljIFN0cmlwZSBFcnJvciB0eXBlczpcbi8qKlxuICogQ2FyZEVycm9yIGlzIHJhaXNlZCB3aGVuIGEgdXNlciBlbnRlcnMgYSBjYXJkIHRoYXQgY2FuJ3QgYmUgY2hhcmdlZCBmb3JcbiAqIHNvbWUgcmVhc29uLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlQ2FyZEVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUNhcmRFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogSW52YWxpZFJlcXVlc3RFcnJvciBpcyByYWlzZWQgd2hlbiBhIHJlcXVlc3QgaXMgaW5pdGlhdGVkIHdpdGggaW52YWxpZFxuICogcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUludmFsaWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlSW52YWxpZFJlcXVlc3RFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogQVBJRXJyb3IgaXMgYSBnZW5lcmljIGVycm9yIHRoYXQgbWF5IGJlIHJhaXNlZCBpbiBjYXNlcyB3aGVyZSBub25lIG9mIHRoZVxuICogb3RoZXIgbmFtZWQgZXJyb3JzIGNvdmVyIHRoZSBwcm9ibGVtLiBJdCBjb3VsZCBhbHNvIGJlIHJhaXNlZCBpbiB0aGUgY2FzZVxuICogdGhhdCBhIG5ldyBlcnJvciBoYXMgYmVlbiBpbnRyb2R1Y2VkIGluIHRoZSBBUEksIGJ1dCB0aGlzIHZlcnNpb24gb2YgdGhlXG4gKiBOb2RlLkpTIFNESyBkb2Vzbid0IGtub3cgaG93IHRvIGhhbmRsZSBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUFQSUVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUFQSUVycm9yJyk7XG4gICAgfVxufVxuLyoqXG4gKiBBdXRoZW50aWNhdGlvbkVycm9yIGlzIHJhaXNlZCB3aGVuIGludmFsaWQgY3JlZGVudGlhbHMgYXJlIHVzZWQgdG8gY29ubmVjdFxuICogdG8gU3RyaXBlJ3Mgc2VydmVycy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUF1dGhlbnRpY2F0aW9uRXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlQXV0aGVudGljYXRpb25FcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogUGVybWlzc2lvbkVycm9yIGlzIHJhaXNlZCBpbiBjYXNlcyB3aGVyZSBhY2Nlc3Mgd2FzIGF0dGVtcHRlZCBvbiBhIHJlc291cmNlXG4gKiB0aGF0IHdhc24ndCBhbGxvd2VkLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlUGVybWlzc2lvbkVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZVBlcm1pc3Npb25FcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogUmF0ZUxpbWl0RXJyb3IgaXMgcmFpc2VkIGluIGNhc2VzIHdoZXJlIGFuIGFjY291bnQgaXMgcHV0dGluZyB0b28gbXVjaCBsb2FkXG4gKiBvbiBTdHJpcGUncyBBUEkgc2VydmVycyAodXN1YWxseSBieSBwZXJmb3JtaW5nIHRvbyBtYW55IHJlcXVlc3RzKS4gUGxlYXNlXG4gKiBiYWNrIG9mZiBvbiByZXF1ZXN0IHJhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVSYXRlTGltaXRFcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVSYXRlTGltaXRFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogU3RyaXBlQ29ubmVjdGlvbkVycm9yIGlzIHJhaXNlZCBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgU0RLIGNhbid0IGNvbm5lY3QgdG9cbiAqIFN0cmlwZSdzIHNlcnZlcnMuIFRoYXQgY2FuIGJlIGZvciBhIHZhcmlldHkgb2YgZGlmZmVyZW50IHJlYXNvbnMgZnJvbSBhXG4gKiBkb3duZWQgbmV0d29yayB0byBhIGJhZCBUTFMgY2VydGlmaWNhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlQ29ubmVjdGlvbkVycm9yJyk7XG4gICAgfVxufVxuLyoqXG4gKiBTaWduYXR1cmVWZXJpZmljYXRpb25FcnJvciBpcyByYWlzZWQgd2hlbiB0aGUgc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBmb3IgYVxuICogd2ViaG9vayBmYWlsc1xuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IoaGVhZGVyLCBwYXlsb2FkLCByYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVTaWduYXR1cmVWZXJpZmljYXRpb25FcnJvcicpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB9XG59XG4vKipcbiAqIElkZW1wb3RlbmN5RXJyb3IgaXMgcmFpc2VkIGluIGNhc2VzIHdoZXJlIGFuIGlkZW1wb3RlbmN5IGtleSB3YXMgdXNlZFxuICogaW1wcm9wZXJseS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUlkZW1wb3RlbmN5RXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlSWRlbXBvdGVuY3lFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogSW52YWxpZEdyYW50RXJyb3IgaXMgcmFpc2VkIHdoZW4gYSBzcGVjaWZpZWQgY29kZSBkb2Vzbid0IGV4aXN0LCBpc1xuICogZXhwaXJlZCwgaGFzIGJlZW4gdXNlZCwgb3IgZG9lc24ndCBiZWxvbmcgdG8geW91OyBhIHJlZnJlc2ggdG9rZW4gZG9lc24ndFxuICogZXhpc3QsIG9yIGRvZXNuJ3QgYmVsb25nIHRvIHlvdTsgb3IgaWYgYW4gQVBJIGtleSdzIG1vZGUgKGxpdmUgb3IgdGVzdClcbiAqIGRvZXNuJ3QgbWF0Y2ggdGhlIG1vZGUgb2YgYSBjb2RlIG9yIHJlZnJlc2ggdG9rZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVJbnZhbGlkR3JhbnRFcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVJbnZhbGlkR3JhbnRFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogQW55IG90aGVyIGVycm9yIGZyb20gU3RyaXBlIG5vdCBzcGVjaWZpY2FsbHkgY2FwdHVyZWQgYWJvdmVcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZVVua25vd25FcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVVbmtub3duRXJyb3InKTtcbiAgICB9XG59XG4vLyBjbGFzc0RlZmluaXRpb25zOiBUaGUgYmVnaW5uaW5nIG9mIHRoZSBzZWN0aW9uIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmV4cG9ydCBjbGFzcyBUZW1wb3JhcnlTZXNzaW9uRXhwaXJlZEVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhd1N0cmlwZUVycm9yID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3U3RyaXBlRXJyb3IsICdUZW1wb3JhcnlTZXNzaW9uRXhwaXJlZEVycm9yJyk7XG4gICAgfVxufVxuLy8gY2xhc3NEZWZpbml0aW9uczogVGhlIGVuZCBvZiB0aGUgc2VjdGlvbiBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG4iLCAiaW1wb3J0IHsgU3RyaXBlQVBJRXJyb3IsIFN0cmlwZUF1dGhlbnRpY2F0aW9uRXJyb3IsIFN0cmlwZUNvbm5lY3Rpb25FcnJvciwgU3RyaXBlRXJyb3IsIFN0cmlwZVBlcm1pc3Npb25FcnJvciwgU3RyaXBlUmF0ZUxpbWl0RXJyb3IsIGdlbmVyYXRlVjFFcnJvciwgZ2VuZXJhdGVWMkVycm9yLCB9IGZyb20gJy4vRXJyb3IuanMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJy4vbmV0L0h0dHBDbGllbnQuanMnO1xuaW1wb3J0IHsgZW1pdFdhcm5pbmcsIGpzb25TdHJpbmdpZnlSZXF1ZXN0RGF0YSwgbm9ybWFsaXplSGVhZGVycywgcXVlcnlTdHJpbmdpZnlSZXF1ZXN0RGF0YSwgcmVtb3ZlTnVsbGlzaCwgZ2V0QVBJTW9kZSwgZ2V0T3B0aW9uc0Zyb21BcmdzLCBnZXREYXRhRnJvbUFyZ3MsIHBhcnNlSHR0cEhlYWRlckFzU3RyaW5nLCBwYXJzZUh0dHBIZWFkZXJBc051bWJlciwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmNvbnN0IE1BWF9SRVRSWV9BRlRFUl9XQUlUID0gNjA7XG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlbmRlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaXBlLCBtYXhCdWZmZXJlZFJlcXVlc3RNZXRyaWMpIHtcbiAgICAgICAgdGhpcy5fc3RyaXBlID0gc3RyaXBlO1xuICAgICAgICB0aGlzLl9tYXhCdWZmZXJlZFJlcXVlc3RNZXRyaWMgPSBtYXhCdWZmZXJlZFJlcXVlc3RNZXRyaWM7XG4gICAgfVxuICAgIF9ub3JtYWxpemVTdHJpcGVDb250ZXh0KG9wdHNDb250ZXh0LCBjbGllbnRDb250ZXh0KSB7XG4gICAgICAgIGlmIChvcHRzQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdHNDb250ZXh0LnRvU3RyaW5nKCkgfHwgbnVsbDsgLy8gcmV0dXJuIG51bGwgZm9yIGVtcHR5IHN0cmluZ3NcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGNsaWVudENvbnRleHQgPT09IG51bGwgfHwgY2xpZW50Q29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpZW50Q29udGV4dC50b1N0cmluZygpKSB8fCBudWxsOyAvLyByZXR1cm4gbnVsbCBmb3IgZW1wdHkgc3RyaW5nc1xuICAgIH1cbiAgICBfYWRkSGVhZGVyc0RpcmVjdGx5VG9PYmplY3Qob2JqLCBoZWFkZXJzKSB7XG4gICAgICAgIC8vIEZvciBjb252ZW5pZW5jZSwgbWFrZSBzb21lIGhlYWRlcnMgZWFzaWx5IGFjY2Vzc2libGUgb25cbiAgICAgICAgLy8gbGFzdFJlc3BvbnNlLlxuICAgICAgICAvLyBOT1RFOiBTdHJpcGUgcmVzcG9uZHMgd2l0aCBsb3dlcmNhc2UgaGVhZGVyIG5hbWVzL2tleXMuXG4gICAgICAgIG9iai5yZXF1ZXN0SWQgPSBoZWFkZXJzWydyZXF1ZXN0LWlkJ107XG4gICAgICAgIG9iai5zdHJpcGVBY2NvdW50ID0gb2JqLnN0cmlwZUFjY291bnQgfHwgaGVhZGVyc1snc3RyaXBlLWFjY291bnQnXTtcbiAgICAgICAgb2JqLmFwaVZlcnNpb24gPSBvYmouYXBpVmVyc2lvbiB8fCBoZWFkZXJzWydzdHJpcGUtdmVyc2lvbiddO1xuICAgICAgICBvYmouaWRlbXBvdGVuY3lLZXkgPSBvYmouaWRlbXBvdGVuY3lLZXkgfHwgaGVhZGVyc1snaWRlbXBvdGVuY3kta2V5J107XG4gICAgfVxuICAgIF9tYWtlUmVzcG9uc2VFdmVudChyZXF1ZXN0RXZlbnQsIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdEVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCByZXF1ZXN0RHVyYXRpb25NcyA9IHJlcXVlc3RFbmRUaW1lIC0gcmVxdWVzdEV2ZW50LnJlcXVlc3Rfc3RhcnRfdGltZTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZU51bGxpc2goe1xuICAgICAgICAgICAgYXBpX3ZlcnNpb246IGhlYWRlcnNbJ3N0cmlwZS12ZXJzaW9uJ10sXG4gICAgICAgICAgICBhY2NvdW50OiBoZWFkZXJzWydzdHJpcGUtYWNjb3VudCddLFxuICAgICAgICAgICAgaWRlbXBvdGVuY3lfa2V5OiBoZWFkZXJzWydpZGVtcG90ZW5jeS1rZXknXSxcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdEV2ZW50Lm1ldGhvZCxcbiAgICAgICAgICAgIHBhdGg6IHJlcXVlc3RFdmVudC5wYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNDb2RlLFxuICAgICAgICAgICAgcmVxdWVzdF9pZDogdGhpcy5fZ2V0UmVxdWVzdElkKGhlYWRlcnMpLFxuICAgICAgICAgICAgZWxhcHNlZDogcmVxdWVzdER1cmF0aW9uTXMsXG4gICAgICAgICAgICByZXF1ZXN0X3N0YXJ0X3RpbWU6IHJlcXVlc3RFdmVudC5yZXF1ZXN0X3N0YXJ0X3RpbWUsXG4gICAgICAgICAgICByZXF1ZXN0X2VuZF90aW1lOiByZXF1ZXN0RW5kVGltZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRSZXF1ZXN0SWQoaGVhZGVycykge1xuICAgICAgICByZXR1cm4gaGVhZGVyc1sncmVxdWVzdC1pZCddO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IG1ldGhvZHMgd2l0aCBzcGVjLnN0cmVhbWluZyA9PT0gdHJ1ZS4gRm9yIHRoZXNlIG1ldGhvZHMsIHdlIGRvIG5vdFxuICAgICAqIGJ1ZmZlciBzdWNjZXNzZnVsIHJlc3BvbnNlcyBpbnRvIG1lbW9yeSBvciBkbyBwYXJzZSB0aGVtIGludG8gc3RyaXBlXG4gICAgICogb2JqZWN0cywgd2UgZGVsZWdhdGUgdGhhdCBhbGwgb2YgdGhhdCB0byB0aGUgdXNlciBhbmQgcGFzcyBiYWNrIHRoZSByYXdcbiAgICAgKiBodHRwLlJlc3BvbnNlIG9iamVjdCB0byB0aGUgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiAoVW5zdWNjZXNzZnVsIHJlc3BvbnNlcyBzaG91bGRuJ3QgbWFrZSBpdCBoZXJlLCB0aGV5IHNob3VsZFxuICAgICAqIHN0aWxsIGJlIGJ1ZmZlcmVkL3BhcnNlZCBhbmQgaGFuZGxlZCBieSBfanNvblJlc3BvbnNlSGFuZGxlciAtLSBzZWVcbiAgICAgKiBtYWtlUmVxdWVzdClcbiAgICAgKi9cbiAgICBfc3RyZWFtaW5nUmVzcG9uc2VIYW5kbGVyKHJlcXVlc3RFdmVudCwgdXNhZ2UsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzLmdldEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFdmVudCA9IHRoaXMuX21ha2VSZXNwb25zZUV2ZW50KHJlcXVlc3RFdmVudCwgcmVzLmdldFN0YXR1c0NvZGUoKSwgaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9lbWl0dGVyLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2VFdmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkUmVxdWVzdE1ldHJpY3ModGhpcy5fZ2V0UmVxdWVzdElkKGhlYWRlcnMpLCByZXNwb25zZUV2ZW50LmVsYXBzZWQsIHVzYWdlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSByZXMudG9TdHJlYW0oc3RyZWFtQ29tcGxldGVDYWxsYmFjayk7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBhcyB0aGUgc3RyZWFtIGlzIGEgcmF3XG4gICAgICAgICAgICAvLyBIVFRQIHJlc3BvbnNlIGluIE5vZGUgYW5kIHRoZSBsZWdhY3kgYmVoYXZpb3Igd2FzIHRvIG11dGF0ZSB0aGlzXG4gICAgICAgICAgICAvLyByZXNwb25zZS5cbiAgICAgICAgICAgIHRoaXMuX2FkZEhlYWRlcnNEaXJlY3RseVRvT2JqZWN0KHN0cmVhbSwgaGVhZGVycyk7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgc3RyZWFtKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBoYW5kbGVyIGZvciBTdHJpcGUgcmVzcG9uc2VzLiBCdWZmZXJzIHRoZSByZXNwb25zZSBpbnRvIG1lbW9yeSxcbiAgICAgKiBwYXJzZXMgdGhlIEpTT04gYW5kIHJldHVybnMgaXQgKGkuZS4gcGFzc2VzIGl0IHRvIHRoZSBjYWxsYmFjaykgaWYgdGhlcmVcbiAgICAgKiBpcyBubyBcImVycm9yXCIgZmllbGQuIE90aGVyd2lzZSBjb25zdHJ1Y3RzL3Bhc3NlcyBhbiBhcHByb3ByaWF0ZSBFcnJvci5cbiAgICAgKi9cbiAgICBfanNvblJlc3BvbnNlSGFuZGxlcihyZXF1ZXN0RXZlbnQsIGFwaU1vZGUsIHVzYWdlLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlcy5nZXRIZWFkZXJzKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SWQgPSB0aGlzLl9nZXRSZXF1ZXN0SWQoaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzLmdldFN0YXR1c0NvZGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRXZlbnQgPSB0aGlzLl9tYWtlUmVzcG9uc2VFdmVudChyZXF1ZXN0RXZlbnQsIHN0YXR1c0NvZGUsIGhlYWRlcnMpO1xuICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9lbWl0dGVyLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2VFdmVudCk7XG4gICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICAudG9KU09OKClcbiAgICAgICAgICAgICAgICAudGhlbigoanNvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGpzb25SZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyO1xuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IE9BdXRoIGVycm9yIHJlc3BvbnNlcyBpbnRvIGEgc3RhbmRhcmQgZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIHJlc3Qgb2YgdGhlIGVycm9yIGxvZ2ljIGNhbiBiZSBzaGFyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uUmVzcG9uc2UuZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uUmVzcG9uc2UuZXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZToganNvblJlc3BvbnNlLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGpzb25SZXNwb25zZS5lcnJvcl9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAganNvblJlc3BvbnNlLmVycm9yLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgICAgICAgICAgICAgICAgICBqc29uUmVzcG9uc2UuZXJyb3Iuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgICAgIGpzb25SZXNwb25zZS5lcnJvci5yZXF1ZXN0SWQgPSByZXF1ZXN0SWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IG5ldyBTdHJpcGVBdXRoZW50aWNhdGlvbkVycm9yKGpzb25SZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgU3RyaXBlUGVybWlzc2lvbkVycm9yKGpzb25SZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDI5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgU3RyaXBlUmF0ZUxpbWl0RXJyb3IoanNvblJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcGlNb2RlID09PSAndjInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBnZW5lcmF0ZVYyRXJyb3IoanNvblJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IGdlbmVyYXRlVjFFcnJvcihqc29uUmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZUFQSUVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgSlNPTiByZWNlaXZlZCBmcm9tIHRoZSBTdHJpcGUgQVBJJyxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBlLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IGhlYWRlcnNbJ3JlcXVlc3QtaWQnXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGpzb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZFJlcXVlc3RNZXRyaWNzKHJlcXVlc3RJZCwgcmVzcG9uc2VFdmVudC5lbGFwc2VkLCB1c2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gRXhwb3NlIHJhdyByZXNwb25zZSBvYmplY3QuXG4gICAgICAgICAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSByZXMuZ2V0UmF3UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRIZWFkZXJzRGlyZWN0bHlUb09iamVjdChyYXdSZXNwb25zZSwgaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGpzb25SZXNwb25zZSwgJ2xhc3RSZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJhd1Jlc3BvbnNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGpzb25SZXNwb25zZSk7XG4gICAgICAgICAgICB9LCAoZSkgPT4gY2FsbGJhY2soZSwgbnVsbCkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgX2dlbmVyYXRlQ29ubmVjdGlvbkVycm9yTWVzc2FnZShyZXF1ZXN0UmV0cmllcykge1xuICAgICAgICByZXR1cm4gYEFuIGVycm9yIG9jY3VycmVkIHdpdGggb3VyIGNvbm5lY3Rpb24gdG8gU3RyaXBlLiR7cmVxdWVzdFJldHJpZXMgPiAwID8gYCBSZXF1ZXN0IHdhcyByZXRyaWVkICR7cmVxdWVzdFJldHJpZXN9IHRpbWVzLmAgOiAnJ31gO1xuICAgIH1cbiAgICAvLyBGb3IgbW9yZSBvbiB3aGVuIGFuZCBob3cgdG8gcmV0cnkgQVBJIHJlcXVlc3RzLCBzZWUgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvZXJyb3ItaGFuZGxpbmcjc2FmZWx5LXJldHJ5aW5nLXJlcXVlc3RzLXdpdGgtaWRlbXBvdGVuY3lcbiAgICBzdGF0aWMgX3Nob3VsZFJldHJ5KHJlcywgbnVtUmV0cmllcywgbWF4UmV0cmllcywgZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yICYmXG4gICAgICAgICAgICBudW1SZXRyaWVzID09PSAwICYmXG4gICAgICAgICAgICBIdHRwQ2xpZW50LkNPTk5FQ1RJT05fQ0xPU0VEX0VSUk9SX0NPREVTLmluY2x1ZGVzKGVycm9yLmNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyBub3QgcmV0cnkgaWYgd2UgYXJlIG91dCBvZiByZXRyaWVzLlxuICAgICAgICBpZiAobnVtUmV0cmllcyA+PSBtYXhSZXRyaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0cnkgb24gY29ubmVjdGlvbiBlcnJvci5cbiAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBBUEkgbWF5IGFzayB1cyBub3QgdG8gcmV0cnkgKGUuZy4sIGlmIGRvaW5nIHNvIHdvdWxkIGJlIGEgbm8tb3ApXG4gICAgICAgIC8vIG9yIGFkdmlzZSB1cyB0byByZXRyeSAoZS5nLiwgaW4gY2FzZXMgb2YgbG9jayB0aW1lb3V0cyk7IHdlIGRlZmVyIHRvIHRoYXQuXG4gICAgICAgIGlmIChyZXMuZ2V0SGVhZGVycygpWydzdHJpcGUtc2hvdWxkLXJldHJ5J10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLmdldEhlYWRlcnMoKVsnc3RyaXBlLXNob3VsZC1yZXRyeSddID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHJ5IG9uIGNvbmZsaWN0IGVycm9ycy5cbiAgICAgICAgaWYgKHJlcy5nZXRTdGF0dXNDb2RlKCkgPT09IDQwOSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0cnkgb24gNTAwLCA1MDMsIGFuZCBvdGhlciBpbnRlcm5hbCBlcnJvcnMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBleHBlY3QgdGhlIHN0cmlwZS1zaG91bGQtcmV0cnkgaGVhZGVyIHRvIGJlIGZhbHNlXG4gICAgICAgIC8vIGluIG1vc3QgY2FzZXMgd2hlbiBhIDUwMCBpcyByZXR1cm5lZCwgc2luY2Ugb3VyIGlkZW1wb3RlbmN5IGZyYW1ld29ya1xuICAgICAgICAvLyB3b3VsZCB0eXBpY2FsbHkgcmVwbGF5IGl0IGFueXdheS5cbiAgICAgICAgaWYgKHJlcy5nZXRTdGF0dXNDb2RlKCkgPj0gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9nZXRTbGVlcFRpbWVJbk1TKG51bVJldHJpZXMsIHJldHJ5QWZ0ZXIgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxOZXR3b3JrUmV0cnlEZWxheSA9IHRoaXMuX3N0cmlwZS5nZXRJbml0aWFsTmV0d29ya1JldHJ5RGVsYXkoKTtcbiAgICAgICAgY29uc3QgbWF4TmV0d29ya1JldHJ5RGVsYXkgPSB0aGlzLl9zdHJpcGUuZ2V0TWF4TmV0d29ya1JldHJ5RGVsYXkoKTtcbiAgICAgICAgLy8gQXBwbHkgZXhwb25lbnRpYWwgYmFja29mZiB3aXRoIGluaXRpYWxOZXR3b3JrUmV0cnlEZWxheSBvbiB0aGVcbiAgICAgICAgLy8gbnVtYmVyIG9mIG51bVJldHJpZXMgc28gZmFyIGFzIGlucHV0cy4gRG8gbm90IGFsbG93IHRoZSBudW1iZXIgdG8gZXhjZWVkXG4gICAgICAgIC8vIG1heE5ldHdvcmtSZXRyeURlbGF5LlxuICAgICAgICBsZXQgc2xlZXBTZWNvbmRzID0gTWF0aC5taW4oaW5pdGlhbE5ldHdvcmtSZXRyeURlbGF5ICogTWF0aC5wb3coMiwgbnVtUmV0cmllcyAtIDEpLCBtYXhOZXR3b3JrUmV0cnlEZWxheSk7XG4gICAgICAgIC8vIEFwcGx5IHNvbWUgaml0dGVyIGJ5IHJhbmRvbWl6aW5nIHRoZSB2YWx1ZSBpbiB0aGUgcmFuZ2Ugb2ZcbiAgICAgICAgLy8gKHNsZWVwU2Vjb25kcyAvIDIpIHRvIChzbGVlcFNlY29uZHMpLlxuICAgICAgICBzbGVlcFNlY29uZHMgKj0gMC41ICogKDEgKyBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgLy8gQnV0IG5ldmVyIHNsZWVwIGxlc3MgdGhhbiB0aGUgYmFzZSBzbGVlcCBzZWNvbmRzLlxuICAgICAgICBzbGVlcFNlY29uZHMgPSBNYXRoLm1heChpbml0aWFsTmV0d29ya1JldHJ5RGVsYXksIHNsZWVwU2Vjb25kcyk7XG4gICAgICAgIC8vIEFuZCBuZXZlciBzbGVlcCBsZXNzIHRoYW4gdGhlIHRpbWUgdGhlIEFQSSBhc2tzIHVzIHRvIHdhaXQsIGFzc3VtaW5nIGl0J3MgYSByZWFzb25hYmxlIGFzay5cbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocmV0cnlBZnRlcikgJiYgcmV0cnlBZnRlciA8PSBNQVhfUkVUUllfQUZURVJfV0FJVCkge1xuICAgICAgICAgICAgc2xlZXBTZWNvbmRzID0gTWF0aC5tYXgoc2xlZXBTZWNvbmRzLCByZXRyeUFmdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2xlZXBTZWNvbmRzICogMTAwMDtcbiAgICB9XG4gICAgLy8gTWF4IHJldHJpZXMgY2FuIGJlIHNldCBvbiBhIHBlciByZXF1ZXN0IGJhc2lzLiBGYXZvciB0aG9zZSBvdmVyIHRoZSBnbG9iYWwgc2V0dGluZ1xuICAgIF9nZXRNYXhOZXR3b3JrUmV0cmllcyhzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncy5tYXhOZXR3b3JrUmV0cmllcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKHNldHRpbmdzLm1heE5ldHdvcmtSZXRyaWVzKVxuICAgICAgICAgICAgPyBzZXR0aW5ncy5tYXhOZXR3b3JrUmV0cmllc1xuICAgICAgICAgICAgOiB0aGlzLl9zdHJpcGUuZ2V0TWF4TmV0d29ya1JldHJpZXMoKTtcbiAgICB9XG4gICAgX2RlZmF1bHRJZGVtcG90ZW5jeUtleShtZXRob2QsIHNldHRpbmdzLCBhcGlNb2RlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBQT1NUIGFuZCB3ZSBhbGxvdyBtdWx0aXBsZSByZXRyaWVzLCBlbnN1cmUgYW4gaWRlbXBvdGVuY3kga2V5LlxuICAgICAgICBjb25zdCBtYXhSZXRyaWVzID0gdGhpcy5fZ2V0TWF4TmV0d29ya1JldHJpZXMoc2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBnZW5LZXkgPSAoKSA9PiBgc3RyaXBlLW5vZGUtcmV0cnktJHt0aGlzLl9zdHJpcGUuX3BsYXRmb3JtRnVuY3Rpb25zLnV1aWQ0KCl9YDtcbiAgICAgICAgLy8gbW9yZSB2ZXJib3NlIHRoYW4gaXQgbmVlZHMgdG8gYmUsIGJ1dCBnaXZlcyBjbGVhciBzZXBhcmF0aW9uIGJldHdlZW4gVjEgYW5kIFYyIGJlaGF2aW9yXG4gICAgICAgIGlmIChhcGlNb2RlID09PSAndjInKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZW5LZXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcGlNb2RlID09PSAndjEnKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgbWF4UmV0cmllcyA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2VuS2V5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIF9tYWtlSGVhZGVycyh7IGNvbnRlbnRUeXBlLCBjb250ZW50TGVuZ3RoLCBhcGlWZXJzaW9uLCBjbGllbnRVc2VyQWdlbnQsIG1ldGhvZCwgdXNlclN1cHBsaWVkSGVhZGVycywgdXNlclN1cHBsaWVkU2V0dGluZ3MsIHN0cmlwZUFjY291bnQsIHN0cmlwZUNvbnRleHQsIGFwaU1vZGUsIH0pIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICdVc2VyLUFnZW50JzogdGhpcy5fZ2V0VXNlckFnZW50U3RyaW5nKGFwaU1vZGUpLFxuICAgICAgICAgICAgJ1gtU3RyaXBlLUNsaWVudC1Vc2VyLUFnZW50JzogY2xpZW50VXNlckFnZW50LFxuICAgICAgICAgICAgJ1gtU3RyaXBlLUNsaWVudC1UZWxlbWV0cnknOiB0aGlzLl9nZXRUZWxlbWV0cnlIZWFkZXIoKSxcbiAgICAgICAgICAgICdTdHJpcGUtVmVyc2lvbic6IGFwaVZlcnNpb24sXG4gICAgICAgICAgICAnU3RyaXBlLUFjY291bnQnOiBzdHJpcGVBY2NvdW50LFxuICAgICAgICAgICAgJ1N0cmlwZS1Db250ZXh0Jzogc3RyaXBlQ29udGV4dCxcbiAgICAgICAgICAgICdJZGVtcG90ZW5jeS1LZXknOiB0aGlzLl9kZWZhdWx0SWRlbXBvdGVuY3lLZXkobWV0aG9kLCB1c2VyU3VwcGxpZWRTZXR0aW5ncywgYXBpTW9kZSksXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFzIHBlciBodHRwczovL2RhdGF0cmFja2VyLmlldGYub3JnL2RvYy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjMuMjpcbiAgICAgICAgLy8gICBBIHVzZXIgYWdlbnQgU0hPVUxEIHNlbmQgYSBDb250ZW50LUxlbmd0aCBpbiBhIHJlcXVlc3QgbWVzc2FnZSB3aGVuXG4gICAgICAgIC8vICAgbm8gVHJhbnNmZXItRW5jb2RpbmcgaXMgc2VudCBhbmQgdGhlIHJlcXVlc3QgbWV0aG9kIGRlZmluZXMgYSBtZWFuaW5nXG4gICAgICAgIC8vICAgZm9yIGFuIGVuY2xvc2VkIHBheWxvYWQgYm9keS4gIEZvciBleGFtcGxlLCBhIENvbnRlbnQtTGVuZ3RoIGhlYWRlclxuICAgICAgICAvLyAgIGZpZWxkIGlzIG5vcm1hbGx5IHNlbnQgaW4gYSBQT1NUIHJlcXVlc3QgZXZlbiB3aGVuIHRoZSB2YWx1ZSBpcyAwXG4gICAgICAgIC8vICAgKGluZGljYXRpbmcgYW4gZW1wdHkgcGF5bG9hZCBib2R5KS4gIEEgdXNlciBhZ2VudCBTSE9VTEQgTk9UIHNlbmQgYVxuICAgICAgICAvLyAgIENvbnRlbnQtTGVuZ3RoIGhlYWRlciBmaWVsZCB3aGVuIHRoZSByZXF1ZXN0IG1lc3NhZ2UgZG9lcyBub3QgY29udGFpblxuICAgICAgICAvLyAgIGEgcGF5bG9hZCBib2R5IGFuZCB0aGUgbWV0aG9kIHNlbWFudGljcyBkbyBub3QgYW50aWNpcGF0ZSBzdWNoIGFcbiAgICAgICAgLy8gICBib2R5LlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGVzZSBtZXRob2QgdHlwZXMgYXJlIGV4cGVjdGVkIHRvIGhhdmUgYm9kaWVzIGFuZCBzbyB3ZSBzaG91bGQgYWx3YXlzXG4gICAgICAgIC8vIGluY2x1ZGUgYSBDb250ZW50LUxlbmd0aC5cbiAgICAgICAgY29uc3QgbWV0aG9kSGFzUGF5bG9hZCA9IG1ldGhvZCA9PSAnUE9TVCcgfHwgbWV0aG9kID09ICdQVVQnIHx8IG1ldGhvZCA9PSAnUEFUQ0gnO1xuICAgICAgICAvLyBJZiBhIGNvbnRlbnQgbGVuZ3RoIHdhcyBzcGVjaWZpZWQsIHdlIGFsd2F5cyBpbmNsdWRlIGl0IHJlZ2FyZGxlc3Mgb2ZcbiAgICAgICAgLy8gd2hldGhlciB0aGUgbWV0aG9kIHNlbWFudGljcyBhbnRpY2lwYXRlIHN1Y2ggYSBib2R5LiBUaGlzIGtlZXBzIHVzXG4gICAgICAgIC8vIGNvbnNpc3RlbnQgd2l0aCBoaXN0b3JpY2FsIGJlaGF2aW9yLiBXZSBkbyBob3dldmVyIHdhbnQgdG8gd2FybiBvbiB0aGlzXG4gICAgICAgIC8vIGFuZCBmaXggdGhlc2UgY2FzZXMgYXMgdGhleSBhcmUgc2VtYW50aWNhbGx5IGluY29ycmVjdC5cbiAgICAgICAgaWYgKG1ldGhvZEhhc1BheWxvYWQgfHwgY29udGVudExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFtZXRob2RIYXNQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgZW1pdFdhcm5pbmcoYCR7bWV0aG9kfSBtZXRob2QgaGFkIG5vbi16ZXJvIGNvbnRlbnRMZW5ndGggYnV0IG5vIHBheWxvYWQgaXMgZXhwZWN0ZWQgZm9yIHRoaXMgdmVyYmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdEhlYWRlcnNbJ0NvbnRlbnQtTGVuZ3RoJ10gPSBjb250ZW50TGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlbW92ZU51bGxpc2goZGVmYXVsdEhlYWRlcnMpLCBcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgc3VwcGxpZWQsIHNheSAnaWRlbXBvdGVuY3kta2V5Jywgb3ZlcnJpZGUgaW5zdGVhZCBvZiBhcHBlbmRpbmcgYnkgZW5zdXJpbmcgY2FwcyBhcmUgdGhlIHNhbWUuXG4gICAgICAgIG5vcm1hbGl6ZUhlYWRlcnModXNlclN1cHBsaWVkSGVhZGVycykpO1xuICAgIH1cbiAgICBfZ2V0VXNlckFnZW50U3RyaW5nKGFwaU1vZGUpIHtcbiAgICAgICAgY29uc3QgcGFja2FnZVZlcnNpb24gPSB0aGlzLl9zdHJpcGUuZ2V0Q29uc3RhbnQoJ1BBQ0tBR0VfVkVSU0lPTicpO1xuICAgICAgICBjb25zdCBhcHBJbmZvID0gdGhpcy5fc3RyaXBlLl9hcHBJbmZvXG4gICAgICAgICAgICA/IHRoaXMuX3N0cmlwZS5nZXRBcHBJbmZvQXNTdHJpbmcoKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgcmV0dXJuIGBTdHJpcGUvJHthcGlNb2RlfSBOb2RlQmluZGluZ3MvJHtwYWNrYWdlVmVyc2lvbn0gJHthcHBJbmZvfWAudHJpbSgpO1xuICAgIH1cbiAgICBfZ2V0VGVsZW1ldHJ5SGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5fc3RyaXBlLmdldFRlbGVtZXRyeUVuYWJsZWQoKSAmJlxuICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9wcmV2UmVxdWVzdE1ldHJpY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbWV0cmljcyA9IHRoaXMuX3N0cmlwZS5fcHJldlJlcXVlc3RNZXRyaWNzLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhc3RfcmVxdWVzdF9tZXRyaWNzOiBtZXRyaWNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3JlY29yZFJlcXVlc3RNZXRyaWNzKHJlcXVlc3RJZCwgcmVxdWVzdER1cmF0aW9uTXMsIHVzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHJpcGUuZ2V0VGVsZW1ldHJ5RW5hYmxlZCgpICYmIHJlcXVlc3RJZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cmlwZS5fcHJldlJlcXVlc3RNZXRyaWNzLmxlbmd0aCA+IHRoaXMuX21heEJ1ZmZlcmVkUmVxdWVzdE1ldHJpYykge1xuICAgICAgICAgICAgICAgIGVtaXRXYXJuaW5nKCdSZXF1ZXN0IG1ldHJpY3MgYnVmZmVyIGlzIGZ1bGwsIGRyb3BwaW5nIHRlbGVtZXRyeSBtZXNzYWdlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0X2R1cmF0aW9uX21zOiByZXF1ZXN0RHVyYXRpb25NcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh1c2FnZSAmJiB1c2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG0udXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9wcmV2UmVxdWVzdE1ldHJpY3MucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfcmF3UmVxdWVzdChtZXRob2QsIHBhdGgsIHBhcmFtcywgb3B0aW9ucywgdXNhZ2UpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0cztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0TWV0aG9kICE9PSAnUE9TVCcgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zICYmXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmF3UmVxdWVzdCBvbmx5IHN1cHBvcnRzIHBhcmFtcyBvbiBQT1NUIHJlcXVlc3RzLiBQbGVhc2UgcGFzcyBudWxsIGFuZCBhZGQgeW91ciBwYXJhbWV0ZXJzIHRvIHBhdGguJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKFtwYXJhbXMsIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICAvLyBQdWxsIHJlcXVlc3QgZGF0YSBhbmQgb3B0aW9ucyAoaGVhZGVycywgYXV0aCkgZnJvbSBhcmdzLlxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFGcm9tQXJncyA9IGdldERhdGFGcm9tQXJncyhhcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdE1ldGhvZCA9PT0gJ1BPU1QnID8gT2JqZWN0LmFzc2lnbih7fSwgZGF0YUZyb21BcmdzKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZE9wdGlvbnMgPSBnZXRPcHRpb25zRnJvbUFyZ3MoYXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGNhbGN1bGF0ZWRPcHRpb25zLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdG9yID0gY2FsY3VsYXRlZE9wdGlvbnMuYXV0aGVudGljYXRvcjtcbiAgICAgICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0TWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0UGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keURhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YToge30sXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0b3IsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6IGNhbGN1bGF0ZWRPcHRpb25zLmhvc3QsXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbWluZzogISFjYWxjdWxhdGVkT3B0aW9ucy5zdHJlYW1pbmcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgdXNlIHRoaXMgZm9yIHRoaW4gZXZlbnQgaW50ZXJuYWxzLCBzbyB3ZSBzaG91bGQgcmVjb3JkIHRoZSBtb3JlIHNwZWNpZmljIGB1c2FnZWAsIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHVzYWdlOiB1c2FnZSB8fCBbJ3Jhd19yZXF1ZXN0J10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZXF1ZXN0Q2FsbGJhY2soZXJyLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGhlYWRlcnMsIHNldHRpbmdzIH0gPSBvcHRzO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0b3IgPSBvcHRzLmF1dGhlbnRpY2F0b3I7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0KG9wdHMucmVxdWVzdE1ldGhvZCwgb3B0cy5ob3N0LCBwYXRoLCBvcHRzLmJvZHlEYXRhLCBhdXRoZW50aWNhdG9yLCB7IGhlYWRlcnMsIHNldHRpbmdzLCBzdHJlYW1pbmc6IG9wdHMuc3RyZWFtaW5nIH0sIG9wdHMudXNhZ2UsIHJlcXVlc3RDYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVxdWVzdFByb21pc2U7XG4gICAgfVxuICAgIF9nZXRDb250ZW50TGVuZ3RoKGRhdGEpIHtcbiAgICAgICAgLy8gaWYgd2UgY2FsY3VsYXRlIHRoaXMgd3JvbmcsIHRoZSBzZXJ2ZXIgdHJlYXRzIGl0IGFzIGludmFsaWQganNvblxuICAgICAgICAvLyBvciBpZiBjb250ZW50IGxlbmd0aCBpcyB0b28gYmlnLCB0aGUgcmVxdWVzdCBuZXZlciBmaW5pc2hlcyBhbmQgaXRcbiAgICAgICAgLy8gdGltZXMgb3V0LlxuICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShkYXRhKS5sZW5ndGhcbiAgICAgICAgICAgIDogZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIF9yZXF1ZXN0KG1ldGhvZCwgaG9zdCwgcGF0aCwgZGF0YSwgYXV0aGVudGljYXRvciwgb3B0aW9ucywgdXNhZ2UgPSBbXSwgY2FsbGJhY2ssIHJlcXVlc3REYXRhUHJvY2Vzc29yID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YTtcbiAgICAgICAgYXV0aGVudGljYXRvciA9IChfYSA9IGF1dGhlbnRpY2F0b3IgIT09IG51bGwgJiYgYXV0aGVudGljYXRvciAhPT0gdm9pZCAwID8gYXV0aGVudGljYXRvciA6IHRoaXMuX3N0cmlwZS5fYXV0aGVudGljYXRvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgY29uc3QgYXBpTW9kZSA9IGdldEFQSU1vZGUocGF0aCk7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVxdWVzdCA9IChyZXF1ZXN0Rm4sIGFwaVZlcnNpb24sIGhlYWRlcnMsIHJlcXVlc3RSZXRyaWVzLCByZXRyeUFmdGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXF1ZXN0Rm4sIHRoaXMuX2dldFNsZWVwVGltZUluTVMocmVxdWVzdFJldHJpZXMsIHJldHJ5QWZ0ZXIpLCBhcGlWZXJzaW9uLCBoZWFkZXJzLCByZXF1ZXN0UmV0cmllcyArIDEpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYWtlUmVxdWVzdCA9IChhcGlWZXJzaW9uLCBoZWFkZXJzLCBudW1SZXRyaWVzKSA9PiB7XG4gICAgICAgICAgICAvLyB0aW1lb3V0IGNhbiBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcy4gRmF2b3IgdGhhdCBvdmVyIHRoZSBnbG9iYWwgc2V0dGluZ1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IG9wdGlvbnMuc2V0dGluZ3MgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNldHRpbmdzLnRpbWVvdXQgJiZcbiAgICAgICAgICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMuc2V0dGluZ3MudGltZW91dCkgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNldHRpbmdzLnRpbWVvdXQgPj0gMFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5zZXR0aW5ncy50aW1lb3V0XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgaG9zdDogaG9zdCB8fCB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ2hvc3QnKSxcbiAgICAgICAgICAgICAgICBwb3J0OiB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ3BvcnQnKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGhlYWRlcnMpLFxuICAgICAgICAgICAgICAgIGJvZHk6IHJlcXVlc3REYXRhLFxuICAgICAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ3Byb3RvY29sJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXV0aGVudGljYXRvcihyZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXEgPSB0aGlzLl9zdHJpcGVcbiAgICAgICAgICAgICAgICAgICAgLmdldEFwaUZpZWxkKCdodHRwQ2xpZW50JylcbiAgICAgICAgICAgICAgICAgICAgLm1ha2VSZXF1ZXN0KHJlcXVlc3QuaG9zdCwgcmVxdWVzdC5wb3J0LCByZXF1ZXN0LnBhdGgsIHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LmhlYWRlcnMsIHJlcXVlc3QuYm9keSwgcmVxdWVzdC5wcm90b2NvbCwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdEV2ZW50ID0gcmVtb3ZlTnVsbGlzaCh7XG4gICAgICAgICAgICAgICAgICAgIGFwaV92ZXJzaW9uOiBhcGlWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJzZUh0dHBIZWFkZXJBc1N0cmluZyhoZWFkZXJzWydTdHJpcGUtQWNjb3VudCddKSxcbiAgICAgICAgICAgICAgICAgICAgaWRlbXBvdGVuY3lfa2V5OiBwYXJzZUh0dHBIZWFkZXJBc1N0cmluZyhoZWFkZXJzWydJZGVtcG90ZW5jeS1LZXknXSksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9zdGFydF90aW1lOiByZXF1ZXN0U3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RSZXRyaWVzID0gbnVtUmV0cmllcyB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFJldHJpZXMgPSB0aGlzLl9nZXRNYXhOZXR3b3JrUmV0cmllcyhvcHRpb25zLnNldHRpbmdzIHx8IHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpcGUuX2VtaXR0ZXIuZW1pdCgncmVxdWVzdCcsIHJlcXVlc3RFdmVudCk7XG4gICAgICAgICAgICAgICAgcmVxXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3RTZW5kZXIuX3Nob3VsZFJldHJ5KHJlcywgcmVxdWVzdFJldHJpZXMsIG1heFJldHJpZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0cnlSZXF1ZXN0KG1ha2VSZXF1ZXN0LCBhcGlWZXJzaW9uLCBoZWFkZXJzLCByZXF1ZXN0UmV0cmllcywgcGFyc2VIdHRwSGVhZGVyQXNOdW1iZXIocmVzLmdldEhlYWRlcnMoKVsncmV0cnktYWZ0ZXInXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuc3RyZWFtaW5nICYmIHJlcy5nZXRTdGF0dXNDb2RlKCkgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmdSZXNwb25zZUhhbmRsZXIocmVxdWVzdEV2ZW50LCB1c2FnZSwgY2FsbGJhY2spKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblJlc3BvbnNlSGFuZGxlcihyZXF1ZXN0RXZlbnQsIGFwaU1vZGUsIHVzYWdlLCBjYWxsYmFjaykocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3RTZW5kZXIuX3Nob3VsZFJldHJ5KG51bGwsIHJlcXVlc3RSZXRyaWVzLCBtYXhSZXRyaWVzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRyeVJlcXVlc3QobWFrZVJlcXVlc3QsIGFwaVZlcnNpb24sIGhlYWRlcnMsIHJlcXVlc3RSZXRyaWVzLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVGltZW91dEVycm9yID0gZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSBIdHRwQ2xpZW50LlRJTUVPVVRfRVJST1JfQ09ERTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgU3RyaXBlQ29ubmVjdGlvbkVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBpc1RpbWVvdXRFcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBSZXF1ZXN0IGFib3J0ZWQgZHVlIHRvIHRpbWVvdXQgYmVpbmcgcmVhY2hlZCAoJHt0aW1lb3V0fW1zKWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBSZXF1ZXN0U2VuZGVyLl9nZW5lcmF0ZUNvbm5lY3Rpb25FcnJvck1lc3NhZ2UocmVxdWVzdFJldHJpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZUVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byBhdXRoZW50aWNhdGUgdGhlIHJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb246IGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJlcGFyZUFuZE1ha2VSZXF1ZXN0ID0gKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5fc3RyaXBlLmdldENsaWVudFVzZXJBZ2VudCgoY2xpZW50VXNlckFnZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBpVmVyc2lvbiA9IHRoaXMuX3N0cmlwZS5nZXRBcGlGaWVsZCgndmVyc2lvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLl9tYWtlSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBhcGlNb2RlID09ICd2MidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50TGVuZ3RoOiB0aGlzLl9nZXRDb250ZW50TGVuZ3RoKGRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBhcGlWZXJzaW9uOiBhcGlWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRVc2VyQWdlbnQsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXIgY2FsbGVycyBleHBlY3QgbnVsbCwgYnV0IC5oZWFkZXJzIGJlaW5nIG9wdGlvbmFsIG1lYW5zIGl0J3MgdW5kZWZpbmVkIGlmIG5vdCBzdXBwbGllZC4gU28gd2Ugbm9ybWFsaXplIHRvIG51bGwuXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTdXBwbGllZEhlYWRlcnM6IChfYSA9IG9wdGlvbnMuaGVhZGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdXNlclN1cHBsaWVkU2V0dGluZ3M6IChfYiA9IG9wdGlvbnMuc2V0dGluZ3MpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBzdHJpcGVBY2NvdW50OiAoX2MgPSBvcHRpb25zLnN0cmlwZUFjY291bnQpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHRoaXMuX3N0cmlwZS5nZXRBcGlGaWVsZCgnc3RyaXBlQWNjb3VudCcpLFxuICAgICAgICAgICAgICAgICAgICBzdHJpcGVDb250ZXh0OiB0aGlzLl9ub3JtYWxpemVTdHJpcGVDb250ZXh0KG9wdGlvbnMuc3RyaXBlQ29udGV4dCwgdGhpcy5fc3RyaXBlLmdldEFwaUZpZWxkKCdzdHJpcGVDb250ZXh0JykpLFxuICAgICAgICAgICAgICAgICAgICBhcGlNb2RlOiBhcGlNb2RlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1ha2VSZXF1ZXN0KGFwaVZlcnNpb24sIGhlYWRlcnMsIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXF1ZXN0RGF0YVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgcmVxdWVzdERhdGFQcm9jZXNzb3IobWV0aG9kLCBkYXRhLCBvcHRpb25zLmhlYWRlcnMsIHByZXBhcmVBbmRNYWtlUmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZpZWREYXRhO1xuICAgICAgICAgICAgaWYgKGFwaU1vZGUgPT0gJ3YyJykge1xuICAgICAgICAgICAgICAgIHN0cmluZ2lmaWVkRGF0YSA9IGRhdGEgPyBqc29uU3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSkgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZ2lmaWVkRGF0YSA9IHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSB8fCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVwYXJlQW5kTWFrZVJlcXVlc3QobnVsbCwgc3RyaW5naWZpZWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBjYWxsYmFja2lmeVByb21pc2VXaXRoVGltZW91dCwgZ2V0RGF0YUZyb21BcmdzLCBnZXRBUElNb2RlLCB9IGZyb20gJy4vdXRpbHMuanMnO1xuY2xhc3MgVjFJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoZmlyc3RQYWdlUHJvbWlzZSwgcmVxdWVzdEFyZ3MsIHNwZWMsIHN0cmlwZVJlc291cmNlKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBhZ2VQcm9taXNlID0gZmlyc3RQYWdlUHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUgPSB7IGN1cnJlbnRQcm9taXNlOiBudWxsIH07XG4gICAgICAgIHRoaXMucmVxdWVzdEFyZ3MgPSByZXF1ZXN0QXJncztcbiAgICAgICAgdGhpcy5zcGVjID0gc3BlYztcbiAgICAgICAgdGhpcy5zdHJpcGVSZXNvdXJjZSA9IHN0cmlwZVJlc291cmNlO1xuICAgIH1cbiAgICBhc3luYyBpdGVyYXRlKHBhZ2VSZXN1bHQpIHtcbiAgICAgICAgaWYgKCEocGFnZVJlc3VsdCAmJlxuICAgICAgICAgICAgcGFnZVJlc3VsdC5kYXRhICYmXG4gICAgICAgICAgICB0eXBlb2YgcGFnZVJlc3VsdC5kYXRhLmxlbmd0aCA9PT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVW5leHBlY3RlZDogU3RyaXBlIEFQSSByZXNwb25zZSBkb2VzIG5vdCBoYXZlIGEgd2VsbC1mb3JtZWQgYGRhdGFgIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldmVyc2VJdGVyYXRpb24gPSBpc1JldmVyc2VJdGVyYXRpb24odGhpcy5yZXF1ZXN0QXJncyk7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgcGFnZVJlc3VsdC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gcmV2ZXJzZUl0ZXJhdGlvblxuICAgICAgICAgICAgICAgID8gcGFnZVJlc3VsdC5kYXRhLmxlbmd0aCAtIDEgLSB0aGlzLmluZGV4XG4gICAgICAgICAgICAgICAgOiB0aGlzLmluZGV4O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWdlUmVzdWx0LmRhdGFbaWR4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhZ2VSZXN1bHQuaGFzX21vcmUpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGNvdW50ZXIsIHJlcXVlc3QgbmV4dCBwYWdlLCBhbmQgcmVjdXJzZS5cbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlUHJvbWlzZSA9IHRoaXMuZ2V0TmV4dFBhZ2UocGFnZVJlc3VsdCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0UGFnZVJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZVByb21pc2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRlKG5leHRQYWdlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG4gICAgfVxuICAgIC8qKiBAYWJzdHJhY3QgKi9cbiAgICBnZXROZXh0UGFnZShfcGFnZVJlc3VsdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgYXN5bmMgX25leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZXJhdGUoYXdhaXQgdGhpcy5wYWdlUHJvbWlzZSk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIHVzZXIgY2FsbHMgYC5uZXh0KClgIG11bHRpcGxlIHRpbWVzIGluIHBhcmFsbGVsLFxuICAgICAgICAgKiByZXR1cm4gdGhlIHNhbWUgcmVzdWx0IHVudGlsIHNvbWV0aGluZyBoYXMgcmVzb2x2ZWRcbiAgICAgICAgICogdG8gcHJldmVudCBwYWdlLXR1cm5pbmcgcmFjZSBjb25kaXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucHJvbWlzZUNhY2hlLmN1cnJlbnRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ2FjaGUuY3VycmVudFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5fbmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUuY3VycmVudFByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUuY3VycmVudFByb21pc2UgPSBuZXh0UHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9taXNlO1xuICAgIH1cbn1cbmNsYXNzIFYxTGlzdEl0ZXJhdG9yIGV4dGVuZHMgVjFJdGVyYXRvciB7XG4gICAgZ2V0TmV4dFBhZ2UocGFnZVJlc3VsdCkge1xuICAgICAgICBjb25zdCByZXZlcnNlSXRlcmF0aW9uID0gaXNSZXZlcnNlSXRlcmF0aW9uKHRoaXMucmVxdWVzdEFyZ3MpO1xuICAgICAgICBjb25zdCBsYXN0SWQgPSBnZXRMYXN0SWQocGFnZVJlc3VsdCwgcmV2ZXJzZUl0ZXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmlwZVJlc291cmNlLl9tYWtlUmVxdWVzdCh0aGlzLnJlcXVlc3RBcmdzLCB0aGlzLnNwZWMsIHtcbiAgICAgICAgICAgIFtyZXZlcnNlSXRlcmF0aW9uID8gJ2VuZGluZ19iZWZvcmUnIDogJ3N0YXJ0aW5nX2FmdGVyJ106IGxhc3RJZCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgVjFTZWFyY2hJdGVyYXRvciBleHRlbmRzIFYxSXRlcmF0b3Ige1xuICAgIGdldE5leHRQYWdlKHBhZ2VSZXN1bHQpIHtcbiAgICAgICAgaWYgKCFwYWdlUmVzdWx0Lm5leHRfcGFnZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1VuZXhwZWN0ZWQ6IFN0cmlwZSBBUEkgcmVzcG9uc2UgZG9lcyBub3QgaGF2ZSBhIHdlbGwtZm9ybWVkIGBuZXh0X3BhZ2VgIGZpZWxkLCBidXQgYGhhc19tb3JlYCB3YXMgdHJ1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVSZXNvdXJjZS5fbWFrZVJlcXVlc3QodGhpcy5yZXF1ZXN0QXJncywgdGhpcy5zcGVjLCB7XG4gICAgICAgICAgICBwYWdlOiBwYWdlUmVzdWx0Lm5leHRfcGFnZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgVjJMaXN0SXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGZpcnN0UGFnZVByb21pc2UsIHJlcXVlc3RBcmdzLCBzcGVjLCBzdHJpcGVSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpcnN0UGFnZVByb21pc2UgPSBmaXJzdFBhZ2VQcm9taXNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlSXRlcmF0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRQYWdlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QXJncyA9IHJlcXVlc3RBcmdzO1xuICAgICAgICB0aGlzLnNwZWMgPSBzcGVjO1xuICAgICAgICB0aGlzLnN0cmlwZVJlc291cmNlID0gc3RyaXBlUmVzb3VyY2U7XG4gICAgfVxuICAgIGFzeW5jIGluaXRGaXJzdFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0UGFnZVByb21pc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCB0aGlzLmZpcnN0UGFnZVByb21pc2U7XG4gICAgICAgICAgICB0aGlzLmZpcnN0UGFnZVByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZUl0ZXJhdG9yID0gcGFnZS5kYXRhW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIHRoaXMubmV4dFBhZ2VVcmwgPSBwYWdlLm5leHRfcGFnZV91cmwgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyB0dXJuUGFnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlVXJsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMuc3BlYy5mdWxsUGF0aCA9IHRoaXMubmV4dFBhZ2VVcmw7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCB0aGlzLnN0cmlwZVJlc291cmNlLl9tYWtlUmVxdWVzdChbXSwgdGhpcy5zcGVjLCB7fSk7XG4gICAgICAgIHRoaXMubmV4dFBhZ2VVcmwgPSBwYWdlLm5leHRfcGFnZV91cmwgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZUl0ZXJhdG9yID0gcGFnZS5kYXRhW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VJdGVyYXRvcjtcbiAgICB9XG4gICAgYXN5bmMgbmV4dCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0Rmlyc3RQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlSXRlcmF0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3VycmVudFBhZ2VJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5kb25lKVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogcmVzdWx0LnZhbHVlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dFBhZ2VJdGVyYXRvciA9IGF3YWl0IHRoaXMudHVyblBhZ2UoKTtcbiAgICAgICAgaWYgKCFuZXh0UGFnZUl0ZXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV4dFBhZ2VJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmICghcmVzdWx0LmRvbmUpXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHJlc3VsdC52YWx1ZSB9O1xuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IG1ha2VBdXRvUGFnaW5hdGlvbk1ldGhvZHMgPSAoc3RyaXBlUmVzb3VyY2UsIHJlcXVlc3RBcmdzLCBzcGVjLCBmaXJzdFBhZ2VQcm9taXNlKSA9PiB7XG4gICAgY29uc3QgYXBpTW9kZSA9IGdldEFQSU1vZGUoc3BlYy5mdWxsUGF0aCB8fCBzcGVjLnBhdGgpO1xuICAgIGlmIChhcGlNb2RlICE9PSAndjInICYmIHNwZWMubWV0aG9kVHlwZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VBdXRvUGFnaW5hdGlvbk1ldGhvZHNGcm9tSXRlcmF0b3IobmV3IFYxU2VhcmNoSXRlcmF0b3IoZmlyc3RQYWdlUHJvbWlzZSwgcmVxdWVzdEFyZ3MsIHNwZWMsIHN0cmlwZVJlc291cmNlKSk7XG4gICAgfVxuICAgIGlmIChhcGlNb2RlICE9PSAndjInICYmIHNwZWMubWV0aG9kVHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgIHJldHVybiBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzRnJvbUl0ZXJhdG9yKG5ldyBWMUxpc3RJdGVyYXRvcihmaXJzdFBhZ2VQcm9taXNlLCByZXF1ZXN0QXJncywgc3BlYywgc3RyaXBlUmVzb3VyY2UpKTtcbiAgICB9XG4gICAgaWYgKGFwaU1vZGUgPT09ICd2MicgJiYgc3BlYy5tZXRob2RUeXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VBdXRvUGFnaW5hdGlvbk1ldGhvZHNGcm9tSXRlcmF0b3IobmV3IFYyTGlzdEl0ZXJhdG9yKGZpcnN0UGFnZVByb21pc2UsIHJlcXVlc3RBcmdzLCBzcGVjLCBzdHJpcGVSZXNvdXJjZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzRnJvbUl0ZXJhdG9yID0gKGl0ZXJhdG9yKSA9PiB7XG4gICAgY29uc3QgYXV0b1BhZ2luZ0VhY2ggPSBtYWtlQXV0b1BhZ2luZ0VhY2goKC4uLmFyZ3MpID0+IGl0ZXJhdG9yLm5leHQoLi4uYXJncykpO1xuICAgIGNvbnN0IGF1dG9QYWdpbmdUb0FycmF5ID0gbWFrZUF1dG9QYWdpbmdUb0FycmF5KGF1dG9QYWdpbmdFYWNoKTtcbiAgICBjb25zdCBhdXRvUGFnaW5hdGlvbk1ldGhvZHMgPSB7XG4gICAgICAgIGF1dG9QYWdpbmdFYWNoLFxuICAgICAgICBhdXRvUGFnaW5nVG9BcnJheSxcbiAgICAgICAgLy8gQXN5bmMgaXRlcmF0b3IgZnVuY3Rpb25zOlxuICAgICAgICBuZXh0OiAoKSA9PiBpdGVyYXRvci5uZXh0KCksXG4gICAgICAgIHJldHVybjogKCkgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgYGJyZWFrYC5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgW2dldEFzeW5jSXRlcmF0b3JTeW1ib2woKV06ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhdXRvUGFnaW5hdGlvbk1ldGhvZHM7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYXV0b1BhZ2luYXRpb25NZXRob2RzO1xufTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBIZWxwZXJzOlxuICogLS0tLS0tLS0tLS0tLS0tLVxuICovXG5mdW5jdGlvbiBnZXRBc3luY0l0ZXJhdG9yU3ltYm9sKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3I7XG4gICAgfVxuICAgIC8vIEZvbGxvdyB0aGUgY29udmVudGlvbiBmcm9tIGxpYnJhcmllcyBsaWtlIGl0ZXJhbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS9sZWVieXJvbi9pdGVyYWxsI2FzeW5jaXRlcmF0b3ItMVxuICAgIHJldHVybiAnQEBhc3luY0l0ZXJhdG9yJztcbn1cbmZ1bmN0aW9uIGdldERvbmVDYWxsYmFjayhhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgb25Eb25lID0gYXJnc1sxXTtcbiAgICBpZiAodHlwZW9mIG9uRG9uZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcihgVGhlIHNlY29uZCBhcmd1bWVudCB0byBhdXRvUGFnaW5nRWFjaCwgaWYgcHJlc2VudCwgbXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uOyByZWNlaXZlZCAke3R5cGVvZiBvbkRvbmV9YCk7XG4gICAgfVxuICAgIHJldHVybiBvbkRvbmU7XG59XG4vKipcbiAqIFdlIGFsbG93IGZvdXIgZm9ybXMgb2YgdGhlIGBvbkl0ZW1gIGNhbGxiYWNrICh0aGUgbWlkZGxlIHR3byBiZWluZyBlcXVpdmFsZW50KSxcbiAqXG4gKiAgIDEuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0pID0+IHsgZG9Tb21ldGhpbmcoaXRlbSk7IHJldHVybiBmYWxzZTsgfSk7YFxuICogICAyLiBgLmF1dG9QYWdpbmdFYWNoKGFzeW5jIChpdGVtKSA9PiB7IGF3YWl0IGRvU29tZXRoaW5nKGl0ZW0pOyByZXR1cm4gZmFsc2U7IH0pO2BcbiAqICAgMy4gYC5hdXRvUGFnaW5nRWFjaCgoaXRlbSkgPT4gZG9Tb21ldGhpbmcoaXRlbSkudGhlbigoKSA9PiBmYWxzZSkpO2BcbiAqICAgNC4gYC5hdXRvUGFnaW5nRWFjaCgoaXRlbSwgbmV4dCkgPT4geyBkb1NvbWV0aGluZyhpdGVtKTsgbmV4dChmYWxzZSk7IH0pO2BcbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBzdGFuZGFyZCB2YWxpZGF0aW9uLCB0aGlzIGhlbHBlclxuICogY29hbGVzY2VzIHRoZSBmb3JtZXIgZm9ybXMgaW50byB0aGUgbGF0dGVyIGZvcm0uXG4gKi9cbmZ1bmN0aW9uIGdldEl0ZW1DYWxsYmFjayhhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IG9uSXRlbSA9IGFyZ3NbMF07XG4gICAgaWYgKHR5cGVvZiBvbkl0ZW0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFRoZSBmaXJzdCBhcmd1bWVudCB0byBhdXRvUGFnaW5nRWFjaCwgaWYgcHJlc2VudCwgbXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uOyByZWNlaXZlZCAke3R5cGVvZiBvbkl0ZW19YCk7XG4gICAgfVxuICAgIC8vIDQuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0sIG5leHQpID0+IHsgZG9Tb21ldGhpbmcoaXRlbSk7IG5leHQoZmFsc2UpOyB9KTtgXG4gICAgaWYgKG9uSXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIG9uSXRlbTtcbiAgICB9XG4gICAgaWYgKG9uSXRlbS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBUaGUgXFxgb25JdGVtXFxgIGNhbGxiYWNrIGZ1bmN0aW9uIHBhc3NlZCB0byBhdXRvUGFnaW5nRWFjaCBtdXN0IGFjY2VwdCBhdCBtb3N0IHR3byBhcmd1bWVudHM7IGdvdCAke29uSXRlbX1gKTtcbiAgICB9XG4gICAgLy8gVGhpcyBtYWdpY2FsbHkgaGFuZGxlcyBhbGwgdGhyZWUgb2YgdGhlc2UgdXNlY2FzZXMgKHRoZSBsYXR0ZXIgdHdvIGJlaW5nIGZ1bmN0aW9uYWxseSBpZGVudGljYWwpOlxuICAgIC8vIDEuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0pID0+IHsgZG9Tb21ldGhpbmcoaXRlbSk7IHJldHVybiBmYWxzZTsgfSk7YFxuICAgIC8vIDIuIGAuYXV0b1BhZ2luZ0VhY2goYXN5bmMgKGl0ZW0pID0+IHsgYXdhaXQgZG9Tb21ldGhpbmcoaXRlbSk7IHJldHVybiBmYWxzZTsgfSk7YFxuICAgIC8vIDMuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0pID0+IGRvU29tZXRoaW5nKGl0ZW0pLnRoZW4oKCkgPT4gZmFsc2UpKTtgXG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9vbkl0ZW0oaXRlbSwgbmV4dCkge1xuICAgICAgICBjb25zdCBzaG91bGRDb250aW51ZSA9IG9uSXRlbShpdGVtKTtcbiAgICAgICAgbmV4dChzaG91bGRDb250aW51ZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldExhc3RJZChsaXN0UmVzdWx0LCByZXZlcnNlSXRlcmF0aW9uKSB7XG4gICAgY29uc3QgbGFzdElkeCA9IHJldmVyc2VJdGVyYXRpb24gPyAwIDogbGlzdFJlc3VsdC5kYXRhLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbGFzdEl0ZW0gPSBsaXN0UmVzdWx0LmRhdGFbbGFzdElkeF07XG4gICAgY29uc3QgbGFzdElkID0gbGFzdEl0ZW0gJiYgbGFzdEl0ZW0uaWQ7XG4gICAgaWYgKCFsYXN0SWQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1VuZXhwZWN0ZWQ6IE5vIGBpZGAgZm91bmQgb24gdGhlIGxhc3QgaXRlbSB3aGlsZSBhdXRvLXBhZ2luZyBhIGxpc3QuJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0SWQ7XG59XG5mdW5jdGlvbiBtYWtlQXV0b1BhZ2luZ0VhY2goYXN5bmNJdGVyYXRvck5leHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXV0b1BhZ2luZ0VhY2goIC8qIG9uSXRlbT8sIG9uRG9uZT8gKi8pIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3Qgb25JdGVtID0gZ2V0SXRlbUNhbGxiYWNrKGFyZ3MpO1xuICAgICAgICBjb25zdCBvbkRvbmUgPSBnZXREb25lQ2FsbGJhY2soYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBhdXRvUGFnaW5nRWFjaCB0YWtlcyB1cCB0byB0d28gYXJndW1lbnRzOyByZWNlaXZlZCAke2FyZ3N9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXV0b1BhZ2VQcm9taXNlID0gd3JhcEFzeW5jSXRlcmF0b3JXaXRoQ2FsbGJhY2soYXN5bmNJdGVyYXRvck5leHQsIFxuICAgICAgICAvLyBAdHMtaWdub3JlIHdlIG1pZ2h0IG5lZWQgYSBudWxsIGNoZWNrXG4gICAgICAgIG9uSXRlbSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFja2lmeVByb21pc2VXaXRoVGltZW91dChhdXRvUGFnZVByb21pc2UsIG9uRG9uZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1ha2VBdXRvUGFnaW5nVG9BcnJheShhdXRvUGFnaW5nRWFjaCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBhdXRvUGFnaW5nVG9BcnJheShvcHRzLCBvbkRvbmUpIHtcbiAgICAgICAgY29uc3QgbGltaXQgPSBvcHRzICYmIG9wdHMubGltaXQ7XG4gICAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdZb3UgbXVzdCBwYXNzIGEgYGxpbWl0YCBvcHRpb24gdG8gYXV0b1BhZ2luZ1RvQXJyYXksIGUuZy4sIGBhdXRvUGFnaW5nVG9BcnJheSh7bGltaXQ6IDEwMDB9KTtgLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW1pdCA+IDEwMDAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignWW91IGNhbm5vdCBzcGVjaWZ5IGEgbGltaXQgb2YgbW9yZSB0aGFuIDEwLDAwMCBpdGVtcyB0byBmZXRjaCBpbiBgYXV0b1BhZ2luZ1RvQXJyYXlgOyB1c2UgYGF1dG9QYWdpbmdFYWNoYCB0byBpdGVyYXRlIHRocm91Z2ggbG9uZ2VyIGxpc3RzLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgYXV0b1BhZ2luZ0VhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaXRlbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNraWZ5UHJvbWlzZVdpdGhUaW1lb3V0KHByb21pc2UsIG9uRG9uZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdyYXBBc3luY0l0ZXJhdG9yV2l0aENhbGxiYWNrKGFzeW5jSXRlcmF0b3JOZXh0LCBvbkl0ZW0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVJdGVyYXRpb24oaXRlclJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJSZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlclJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgobmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEJpdCBjb25mdXNpbmcsIHBlcmhhcHM7IHdlIHBhc3MgYSBgcmVzb2x2ZWAgZm5cbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgdXNlciwgc28gdGhleSBjYW4gZGVjaWRlIHdoZW4gYW5kIGlmIHRvIGNvbnRpbnVlLlxuICAgICAgICAgICAgICAgIC8vIFRoZXkgY2FuIHJldHVybiBmYWxzZSwgb3IgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIGZhbHNlLCB0byBicmVhay5cbiAgICAgICAgICAgICAgICBvbkl0ZW0oaXRlbSwgbmV4dCk7XG4gICAgICAgICAgICB9KS50aGVuKChzaG91bGRDb250aW51ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRDb250aW51ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUl0ZXJhdGlvbih7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmNJdGVyYXRvck5leHQoKS50aGVuKGhhbmRsZUl0ZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmNJdGVyYXRvck5leHQoKVxuICAgICAgICAgICAgLnRoZW4oaGFuZGxlSXRlcmF0aW9uKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc1JldmVyc2VJdGVyYXRpb24ocmVxdWVzdEFyZ3MpIHtcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChyZXF1ZXN0QXJncyk7XG4gICAgY29uc3QgZGF0YUZyb21BcmdzID0gZ2V0RGF0YUZyb21BcmdzKGFyZ3MpO1xuICAgIHJldHVybiAhIWRhdGFGcm9tQXJncy5lbmRpbmdfYmVmb3JlO1xufVxuIiwgImltcG9ydCB7IGNhbGxiYWNraWZ5UHJvbWlzZVdpdGhUaW1lb3V0LCBleHRyYWN0VXJsUGFyYW1zIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzIH0gZnJvbSAnLi9hdXRvUGFnaW5hdGlvbi5qcyc7XG4vKipcbiAqIENyZWF0ZSBhbiBBUEkgbWV0aG9kIGZyb20gdGhlIGRlY2xhcmVkIHNwZWMuXG4gKlxuICogQHBhcmFtIFtzcGVjLm1ldGhvZD0nR0VUJ10gUmVxdWVzdCBNZXRob2QgKFBPU1QsIEdFVCwgREVMRVRFLCBQVVQpXG4gKiBAcGFyYW0gW3NwZWMucGF0aD0nJ10gUGF0aCB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIEJBU0VfUEFUSCwgam9pbmVkIHdpdGhcbiAqICB0aGUgaW5zdGFuY2UncyBwYXRoIChlLmcuICdjaGFyZ2VzJyBvciAnY3VzdG9tZXJzJylcbiAqIEBwYXJhbSBbc3BlYy5mdWxsUGF0aD0nJ10gRnVsbHkgcXVhbGlmaWVkIHBhdGggdG8gdGhlIG1ldGhvZCAoZWcuIC92MS9hL2IvYykuXG4gKiAgSWYgdGhpcyBpcyBzcGVjaWZpZWQsIHBhdGggc2hvdWxkIG5vdCBiZSBzcGVjaWZpZWQuXG4gKiBAcGFyYW0gW3NwZWMudXJsUGFyYW1zPVtdXSBBcnJheSBvZiByZXF1aXJlZCBhcmd1bWVudHMgaW4gdGhlIG9yZGVyIHRoYXQgdGhleVxuICogIG11c3QgYmUgcGFzc2VkIGJ5IHRoZSBjb25zdW1lciBvZiB0aGUgQVBJLiBTdWJzZXF1ZW50IG9wdGlvbmFsIGFyZ3VtZW50cyBhcmVcbiAqICBvcHRpb25hbGx5IHBhc3NlZCB0aHJvdWdoIGEgaGFzaCAoT2JqZWN0KSBhcyB0aGUgcGVudWx0aW1hdGUgYXJndW1lbnRcbiAqICAocHJlY2VkaW5nIHRoZSBhbHNvLW9wdGlvbmFsIGNhbGxiYWNrIGFyZ3VtZW50XG4gKiBAcGFyYW0gW3NwZWMuZW5jb2RlXSBGdW5jdGlvbiBmb3IgbXV0YXRpbmcgaW5wdXQgcGFyYW1ldGVycyB0byBhIG1ldGhvZC5cbiAqICBVc2VmdWxseSBmb3IgYXBwbHlpbmcgdHJhbnNmb3JtcyB0byBkYXRhIG9uIGEgcGVyLW1ldGhvZCBiYXNpcy5cbiAqIEBwYXJhbSBbc3BlYy5ob3N0XSBIb3N0bmFtZSBmb3IgdGhlIHJlcXVlc3QuXG4gKlxuICogPCEtLSBQdWJsaWMgQVBJIGFjY2Vzc2libGUgdmlhIFN0cmlwZS5TdHJpcGVSZXNvdXJjZS5tZXRob2QgLS0+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcGVNZXRob2Qoc3BlYykge1xuICAgIGlmIChzcGVjLnBhdGggIT09IHVuZGVmaW5lZCAmJiBzcGVjLmZ1bGxQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2Qgc3BlYyBzcGVjaWZpZWQgYm90aCBhICdwYXRoJyAoJHtzcGVjLnBhdGh9KSBhbmQgYSAnZnVsbFBhdGgnICgke3NwZWMuZnVsbFBhdGh9KS5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PSAnZnVuY3Rpb24nICYmIGFyZ3MucG9wKCk7XG4gICAgICAgIHNwZWMudXJsUGFyYW1zID0gZXh0cmFjdFVybFBhcmFtcyhzcGVjLmZ1bGxQYXRoIHx8IHRoaXMuY3JlYXRlUmVzb3VyY2VQYXRoV2l0aFN5bWJvbHMoc3BlYy5wYXRoIHx8ICcnKSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlID0gY2FsbGJhY2tpZnlQcm9taXNlV2l0aFRpbWVvdXQodGhpcy5fbWFrZVJlcXVlc3QoYXJncywgc3BlYywge30pLCBjYWxsYmFjayk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdFByb21pc2UsIG1ha2VBdXRvUGFnaW5hdGlvbk1ldGhvZHModGhpcywgYXJncywgc3BlYywgcmVxdWVzdFByb21pc2UpKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RQcm9taXNlO1xuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgZ2V0RGF0YUZyb21BcmdzLCBnZXRPcHRpb25zRnJvbUFyZ3MsIG1ha2VVUkxJbnRlcnBvbGF0b3IsIHByb3RvRXh0ZW5kLCBxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhLCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgc3RyaXBlTWV0aG9kIH0gZnJvbSAnLi9TdHJpcGVNZXRob2QuanMnO1xuLy8gUHJvdmlkZSBleHRlbnNpb24gbWVjaGFuaXNtIGZvciBTdHJpcGUgUmVzb3VyY2UgU3ViLUNsYXNzZXNcblN0cmlwZVJlc291cmNlLmV4dGVuZCA9IHByb3RvRXh0ZW5kO1xuLy8gRXhwb3NlIG1ldGhvZC1jcmVhdG9yXG5TdHJpcGVSZXNvdXJjZS5tZXRob2QgPSBzdHJpcGVNZXRob2Q7XG5TdHJpcGVSZXNvdXJjZS5NQVhfQlVGRkVSRURfUkVRVUVTVF9NRVRSSUNTID0gMTAwO1xuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgcmVxdWVzdCBsb2dpYyBmb3IgYSBTdHJpcGUgUmVzb3VyY2VcbiAqL1xuZnVuY3Rpb24gU3RyaXBlUmVzb3VyY2Uoc3RyaXBlLCBkZXByZWNhdGVkVXJsRGF0YSkge1xuICAgIHRoaXMuX3N0cmlwZSA9IHN0cmlwZTtcbiAgICBpZiAoZGVwcmVjYXRlZFVybERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdXBwb3J0IGZvciBjdXJyaWVkIHVybCBwYXJhbXMgd2FzIGRyb3BwZWQgaW4gc3RyaXBlLW5vZGUgdjcuMC4wLiBJbnN0ZWFkLCBwYXNzIHR3byBpZHMuJyk7XG4gICAgfVxuICAgIHRoaXMuYmFzZVBhdGggPSBtYWtlVVJMSW50ZXJwb2xhdG9yKFxuICAgIC8vIEB0cy1pZ25vcmUgY2hhbmdpbmcgdHlwZSBvZiBiYXNlUGF0aFxuICAgIHRoaXMuYmFzZVBhdGggfHwgc3RyaXBlLmdldEFwaUZpZWxkKCdiYXNlUGF0aCcpKTtcbiAgICAvLyBAdHMtaWdub3JlIGNoYW5naW5nIHR5cGUgb2YgcGF0aFxuICAgIHRoaXMucmVzb3VyY2VQYXRoID0gdGhpcy5wYXRoO1xuICAgIC8vIEB0cy1pZ25vcmUgY2hhbmdpbmcgdHlwZSBvZiBwYXRoXG4gICAgdGhpcy5wYXRoID0gbWFrZVVSTEludGVycG9sYXRvcih0aGlzLnBhdGgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmd1bWVudHMpO1xufVxuU3RyaXBlUmVzb3VyY2UucHJvdG90eXBlID0ge1xuICAgIF9zdHJpcGU6IG51bGwsXG4gICAgLy8gQHRzLWlnbm9yZSB0aGUgdHlwZSBvZiBwYXRoIGNoYW5nZXMgaW4gY3RvclxuICAgIHBhdGg6ICcnLFxuICAgIHJlc291cmNlUGF0aDogJycsXG4gICAgLy8gTWV0aG9kcyB0aGF0IGRvbid0IHVzZSB0aGUgQVBJJ3MgZGVmYXVsdCAnL3YxJyBwYXRoIGNhbiBvdmVycmlkZSBpdCB3aXRoIHRoaXMgc2V0dGluZy5cbiAgICBiYXNlUGF0aDogbnVsbCxcbiAgICBpbml0aWFsaXplKCkgeyB9LFxuICAgIC8vIEZ1bmN0aW9uIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGRhdGEgcHJvY2Vzc29yLiBUaGlzIGFsbG93cyBmdWxsIGNvbnRyb2xcbiAgICAvLyBvdmVyIGhvdyBhIFN0cmlwZVJlc291cmNlJ3MgcmVxdWVzdCBkYXRhIHdpbGwgZ2V0IGNvbnZlcnRlZCBpbnRvIGFuIEhUVFBcbiAgICAvLyBib2R5LiBUaGlzIGlzIHVzZWZ1bCBmb3Igbm9uLXN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuIFRoZSBmdW5jdGlvbiBzaG91bGRcbiAgICAvLyB0YWtlIG1ldGhvZCBuYW1lLCBkYXRhLCBhbmQgaGVhZGVycyBhcyBhcmd1bWVudHMuXG4gICAgcmVxdWVzdERhdGFQcm9jZXNzb3I6IG51bGwsXG4gICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgdmFsaWRhdGlvbiBjaGVja3MgYmVmb3JlIHNlbmRpbmcgdGhlIHJlcXVlc3QsIGVycm9ycyBzaG91bGRcbiAgICAvLyBiZSB0aHJvd24sIGFuZCB0aGV5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay9wcm9taXNlLlxuICAgIHZhbGlkYXRlUmVxdWVzdDogbnVsbCxcbiAgICBjcmVhdGVGdWxsUGF0aChjb21tYW5kUGF0aCwgdXJsRGF0YSkge1xuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFt0aGlzLmJhc2VQYXRoKHVybERhdGEpLCB0aGlzLnBhdGgodXJsRGF0YSldO1xuICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZENvbW1hbmRQYXRoID0gY29tbWFuZFBhdGgodXJsRGF0YSk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vIGFjdHVhbCBjb21tYW5kIHBhdGgsIHdlIGp1c3Qgb21pdCBpdCB0byBhdm9pZCBhZGRpbmcgYVxuICAgICAgICAgICAgLy8gdHJhaWxpbmcgc2xhc2guIFRoaXMgaXMgaW1wb3J0YW50IGZvciB0b3AtbGV2ZWwgbGlzdGluZyByZXF1ZXN0cywgd2hpY2hcbiAgICAgICAgICAgIC8vIGRvIG5vdCBoYXZlIGEgY29tbWFuZCBwYXRoLlxuICAgICAgICAgICAgaWYgKGNvbXB1dGVkQ29tbWFuZFBhdGgpIHtcbiAgICAgICAgICAgICAgICB1cmxQYXJ0cy5wdXNoKGNvbXB1dGVkQ29tbWFuZFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXJsUGFydHMucHVzaChjb21tYW5kUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2pvaW5VcmxQYXJ0cyh1cmxQYXJ0cyk7XG4gICAgfSxcbiAgICAvLyBDcmVhdGVzIGEgcmVsYXRpdmUgcmVzb3VyY2UgcGF0aCB3aXRoIHN5bWJvbHMgbGVmdCBpbiAodW5saWtlXG4gICAgLy8gY3JlYXRlRnVsbFBhdGggd2hpY2ggdGFrZXMgc29tZSBkYXRhIHRvIHJlcGxhY2UgdGhlbSB3aXRoKS4gRm9yIGV4YW1wbGUgaXRcbiAgICAvLyBtaWdodCBwcm9kdWNlOiAvaW52b2ljZXMve2lkfVxuICAgIGNyZWF0ZVJlc291cmNlUGF0aFdpdGhTeW1ib2xzKHBhdGhXaXRoU3ltYm9scykge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBwYXRoIGJleW9uZCB0aGUgcmVzb3VyY2UgcGF0aCwgd2Ugd2FudCB0byBwcm9kdWNlIGp1c3RcbiAgICAgICAgLy8gLzxyZXNvdXJjZSBwYXRoPiByYXRoZXIgdGhhbiAvPHJlc291cmNlIHBhdGg+Ly5cbiAgICAgICAgaWYgKHBhdGhXaXRoU3ltYm9scykge1xuICAgICAgICAgICAgcmV0dXJuIGAvJHt0aGlzLl9qb2luVXJsUGFydHMoW3RoaXMucmVzb3VyY2VQYXRoLCBwYXRoV2l0aFN5bWJvbHNdKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAvJHt0aGlzLnJlc291cmNlUGF0aH1gO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfam9pblVybFBhcnRzKHBhcnRzKSB7XG4gICAgICAgIC8vIFJlcGxhY2UgYW55IGFjY2lkZW50YWxseSBkb3VibGVkIHVwIHNsYXNoZXMuIFRoaXMgcHJldmlvdXNseSB1c2VkXG4gICAgICAgIC8vIHBhdGguam9pbiwgd2hpY2ggd291bGQgZG8gdGhpcyBhcyB3ZWxsLiBVbmZvcnR1bmF0ZWx5IHdlIG5lZWQgdG8gZG8gdGhpc1xuICAgICAgICAvLyBhcyB0aGUgZnVuY3Rpb25zIGZvciBjcmVhdGluZyBwYXRocyBhcmUgdGVjaG5pY2FsbHkgcGFydCBvZiB0aGUgcHVibGljXG4gICAgICAgIC8vIGludGVyZmFjZSBhbmQgc28gd2UgbmVlZCB0byBwcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJy8nKS5yZXBsYWNlKC9cXC97Mix9L2csICcvJyk7XG4gICAgfSxcbiAgICBfZ2V0UmVxdWVzdE9wdHMocmVxdWVzdEFyZ3MsIHNwZWMsIG92ZXJyaWRlRGF0YSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIEV4dHJhY3Qgc3BlYyB2YWx1ZXMgd2l0aCBkZWZhdWx0cy5cbiAgICAgICAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IChzcGVjLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdXNhZ2UgPSBzcGVjLnVzYWdlIHx8IFtdO1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBzcGVjLnVybFBhcmFtcyB8fCBbXTtcbiAgICAgICAgY29uc3QgZW5jb2RlID0gc3BlYy5lbmNvZGUgfHwgKChkYXRhKSA9PiBkYXRhKTtcbiAgICAgICAgY29uc3QgaXNVc2luZ0Z1bGxQYXRoID0gISFzcGVjLmZ1bGxQYXRoO1xuICAgICAgICBjb25zdCBjb21tYW5kUGF0aCA9IG1ha2VVUkxJbnRlcnBvbGF0b3IoaXNVc2luZ0Z1bGxQYXRoID8gc3BlYy5mdWxsUGF0aCA6IHNwZWMucGF0aCB8fCAnJyk7XG4gICAgICAgIC8vIFdoZW4gdXNpbmcgZnVsbFBhdGgsIHdlIGlnbm9yZSB0aGUgcmVzb3VyY2UgcGF0aCBhcyBpdCBzaG91bGQgYWxyZWFkeSBiZVxuICAgICAgICAvLyBmdWxseSBxdWFsaWZpZWQuXG4gICAgICAgIGNvbnN0IHBhdGggPSBpc1VzaW5nRnVsbFBhdGhcbiAgICAgICAgICAgID8gc3BlYy5mdWxsUGF0aFxuICAgICAgICAgICAgOiB0aGlzLmNyZWF0ZVJlc291cmNlUGF0aFdpdGhTeW1ib2xzKHNwZWMucGF0aCk7XG4gICAgICAgIC8vIERvbid0IG11dGF0ZSBhcmdzIGV4dGVybmFsbHkuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKHJlcXVlc3RBcmdzKTtcbiAgICAgICAgLy8gR2VuZXJhdGUgYW5kIHZhbGlkYXRlIHVybCBwYXJhbXMuXG4gICAgICAgIGNvbnN0IHVybERhdGEgPSB1cmxQYXJhbXMucmVkdWNlKCh1cmxEYXRhLCBwYXJhbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdHJpcGU6IEFyZ3VtZW50IFwiJHtwYXJhbX1cIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgZ290OiAke2FyZ30gKG9uIEFQSSByZXF1ZXN0IHRvIFxcYCR7cmVxdWVzdE1ldGhvZH0gJHtwYXRofVxcYClgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybERhdGFbcGFyYW1dID0gYXJnO1xuICAgICAgICAgICAgcmV0dXJuIHVybERhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgLy8gUHVsbCByZXF1ZXN0IGRhdGEgYW5kIG9wdGlvbnMgKGhlYWRlcnMsIGF1dGgpIGZyb20gYXJncy5cbiAgICAgICAgY29uc3QgZGF0YUZyb21BcmdzID0gZ2V0RGF0YUZyb21BcmdzKGFyZ3MpO1xuICAgICAgICBjb25zdCBkYXRhID0gZW5jb2RlKE9iamVjdC5hc3NpZ24oe30sIGRhdGFGcm9tQXJncywgb3ZlcnJpZGVEYXRhKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBnZXRPcHRpb25zRnJvbUFyZ3MoYXJncyk7XG4gICAgICAgIGNvbnN0IGhvc3QgPSBvcHRpb25zLmhvc3QgfHwgc3BlYy5ob3N0O1xuICAgICAgICBjb25zdCBzdHJlYW1pbmcgPSAhIXNwZWMuc3RyZWFtaW5nIHx8ICEhb3B0aW9ucy5zdHJlYW1pbmc7XG4gICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlcmUgYXJlIG5vIG1vcmUgYXJncy5cbiAgICAgICAgaWYgKGFyZ3MuZmlsdGVyKCh4KSA9PiB4ICE9IG51bGwpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdHJpcGU6IFVua25vd24gYXJndW1lbnRzICgke2FyZ3N9KS4gRGlkIHlvdSBtZWFuIHRvIHBhc3MgYW4gb3B0aW9ucyBvYmplY3Q/IFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RyaXBlL3N0cmlwZS1ub2RlL3dpa2kvUGFzc2luZy1PcHRpb25zLiAob24gQVBJIHJlcXVlc3QgdG8gJHtyZXF1ZXN0TWV0aG9kfSBcXGAke3BhdGh9XFxgKWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdXNpbmcgZnVsbCBwYXRoLCB3ZSBjYW4ganVzdCBpbnZva2UgdGhlIFVSTCBpbnRlcnBvbGF0b3IgZGlyZWN0bHlcbiAgICAgICAgLy8gYXMgd2UgZG9uJ3QgbmVlZCB0byB1c2UgdGhlIHJlc291cmNlIHRvIGNyZWF0ZSBhIGZ1bGwgcGF0aC5cbiAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSBpc1VzaW5nRnVsbFBhdGhcbiAgICAgICAgICAgID8gY29tbWFuZFBhdGgodXJsRGF0YSlcbiAgICAgICAgICAgIDogdGhpcy5jcmVhdGVGdWxsUGF0aChjb21tYW5kUGF0aCwgdXJsRGF0YSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMuaGVhZGVycywgc3BlYy5oZWFkZXJzKTtcbiAgICAgICAgaWYgKHNwZWMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBzcGVjLnZhbGlkYXRvcihkYXRhLCB7IGhlYWRlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YUluUXVlcnkgPSBzcGVjLm1ldGhvZCA9PT0gJ0dFVCcgfHwgc3BlYy5tZXRob2QgPT09ICdERUxFVEUnO1xuICAgICAgICBjb25zdCBib2R5RGF0YSA9IGRhdGFJblF1ZXJ5ID8gbnVsbCA6IGRhdGE7XG4gICAgICAgIGNvbnN0IHF1ZXJ5RGF0YSA9IGRhdGFJblF1ZXJ5ID8gZGF0YSA6IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWVzdE1ldGhvZCxcbiAgICAgICAgICAgIHJlcXVlc3RQYXRoLFxuICAgICAgICAgICAgYm9keURhdGEsXG4gICAgICAgICAgICBxdWVyeURhdGEsXG4gICAgICAgICAgICBhdXRoZW50aWNhdG9yOiAoX2EgPSBvcHRpb25zLmF1dGhlbnRpY2F0b3IpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgaG9zdDogaG9zdCAhPT0gbnVsbCAmJiBob3N0ICE9PSB2b2lkIDAgPyBob3N0IDogbnVsbCxcbiAgICAgICAgICAgIHN0cmVhbWluZyxcbiAgICAgICAgICAgIHNldHRpbmdzOiBvcHRpb25zLnNldHRpbmdzLFxuICAgICAgICAgICAgdXNhZ2UsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBfbWFrZVJlcXVlc3QocmVxdWVzdEFyZ3MsIHNwZWMsIG92ZXJyaWRlRGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IG9wdHM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdHMgPSB0aGlzLl9nZXRSZXF1ZXN0T3B0cyhyZXF1ZXN0QXJncywgc3BlYywgb3ZlcnJpZGVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZXF1ZXN0Q2FsbGJhY2soZXJyLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNwZWMudHJhbnNmb3JtUmVzcG9uc2VEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNwZWMudHJhbnNmb3JtUmVzcG9uc2VEYXRhKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW1wdHlRdWVyeSA9IE9iamVjdC5rZXlzKG9wdHMucXVlcnlEYXRhKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gW1xuICAgICAgICAgICAgICAgIG9wdHMucmVxdWVzdFBhdGgsXG4gICAgICAgICAgICAgICAgZW1wdHlRdWVyeSA/ICcnIDogJz8nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEob3B0cy5xdWVyeURhdGEpLFxuICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaGVhZGVycywgc2V0dGluZ3MgfSA9IG9wdHM7XG4gICAgICAgICAgICB0aGlzLl9zdHJpcGUuX3JlcXVlc3RTZW5kZXIuX3JlcXVlc3Qob3B0cy5yZXF1ZXN0TWV0aG9kLCBvcHRzLmhvc3QsIHBhdGgsIG9wdHMuYm9keURhdGEsIG9wdHMuYXV0aGVudGljYXRvciwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgc3RyZWFtaW5nOiBvcHRzLnN0cmVhbWluZyxcbiAgICAgICAgICAgIH0sIG9wdHMudXNhZ2UsIHJlcXVlc3RDYWxsYmFjaywgKF9hID0gdGhpcy5yZXF1ZXN0RGF0YVByb2Nlc3NvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcbmV4cG9ydCB7IFN0cmlwZVJlc291cmNlIH07XG4iLCAiLyoqXG4gKiBUaGUgU3RyaXBlQ29udGV4dCBjbGFzcyBwcm92aWRlcyBhbiBpbW11dGFibGUgY29udGFpbmVyIGFuZCBjb252ZW5pZW5jZSBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBgU3RyaXBlLUNvbnRleHRgIGhlYWRlci4gQWxsIG1ldGhvZHMgcmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIFN0cmlwZUNvbnRleHQuXG4gKiBZb3UgY2FuIHVzZSBpdCB3aGVuZXZlciB5b3UncmUgaW5pdGlhbGl6aW5nIGEgYFN0cmlwZWAgaW5zdGFuY2Ugb3Igc2VuZGluZyBgc3RyaXBlQ29udGV4dGAgd2l0aCBhIHJlcXVlc3QuIEl0J3MgYWxzbyBmb3VuZCBpbiB0aGUgYEV2ZW50Tm90aWZpY2F0aW9uLmNvbnRleHRgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlQ29udGV4dCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBTdHJpcGVDb250ZXh0IHdpdGggdGhlIGdpdmVuIHNlZ21lbnRzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlZ21lbnRzID0gW10pIHtcbiAgICAgICAgdGhpcy5fc2VnbWVudHMgPSBbLi4uc2VnbWVudHNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgY29weSBvZiB0aGUgc2VnbWVudHMgb2YgdGhpcyBDb250ZXh0LlxuICAgICAqL1xuICAgIGdldCBzZWdtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9zZWdtZW50c107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgU3RyaXBlQ29udGV4dCB3aXRoIGFuIGFkZGl0aW9uYWwgc2VnbWVudCBhcHBlbmRlZC5cbiAgICAgKi9cbiAgICBwdXNoKHNlZ21lbnQpIHtcbiAgICAgICAgaWYgKCFzZWdtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlZ21lbnQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVDb250ZXh0KFsuLi50aGlzLl9zZWdtZW50cywgc2VnbWVudF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFN0cmlwZUNvbnRleHQgd2l0aCB0aGUgbGFzdCBzZWdtZW50IHJlbW92ZWQuXG4gICAgICogSWYgdGhlcmUgYXJlIG5vIHNlZ21lbnRzLCB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICovXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwb3AgZnJvbSBhbiBlbXB0eSBjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVDb250ZXh0KHRoaXMuX3NlZ21lbnRzLnNsaWNlKDAsIC0xKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoaXMgY29udGV4dCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudHMuam9pbignLycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBjb250ZXh0IHN0cmluZyBpbnRvIGEgU3RyaXBlQ29udGV4dCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoY29udGV4dFN0cikge1xuICAgICAgICBpZiAoIWNvbnRleHRTdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlQ29udGV4dChbXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVDb250ZXh0KGNvbnRleHRTdHIuc3BsaXQoJy8nKSk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFN0cmlwZUVycm9yLCBTdHJpcGVTaWduYXR1cmVWZXJpZmljYXRpb25FcnJvciB9IGZyb20gJy4vRXJyb3IuanMnO1xuaW1wb3J0IHsgQ3J5cHRvUHJvdmlkZXJPbmx5U3VwcG9ydHNBc3luY0Vycm9yLCB9IGZyb20gJy4vY3J5cHRvL0NyeXB0b1Byb3ZpZGVyLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJob29rcyhwbGF0Zm9ybUZ1bmN0aW9ucykge1xuICAgIGNvbnN0IFdlYmhvb2sgPSB7XG4gICAgICAgIERFRkFVTFRfVE9MRVJBTkNFOiAzMDAsXG4gICAgICAgIHNpZ25hdHVyZTogbnVsbCxcbiAgICAgICAgY29uc3RydWN0RXZlbnQocGF5bG9hZCwgaGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VSUjogbWlzc2luZyBzaWduYXR1cmUgaGVscGVyLCB1bmFibGUgdG8gdmVyaWZ5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmF0dXJlLnZlcmlmeUhlYWRlcihwYXlsb2FkLCBoZWFkZXIsIHNlY3JldCwgdG9sZXJhbmNlIHx8IFdlYmhvb2suREVGQVVMVF9UT0xFUkFOQ0UsIGNyeXB0b1Byb3ZpZGVyLCByZWNlaXZlZEF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDcnlwdG9Qcm92aWRlck9ubHlTdXBwb3J0c0FzeW5jRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5tZXNzYWdlICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxuVXNlIGBhd2FpdCBjb25zdHJ1Y3RFdmVudEFzeW5jKC4uLilgIGluc3RlYWQgb2YgYGNvbnN0cnVjdEV2ZW50KC4uLilgJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGpzb25QYXlsb2FkID0gcGF5bG9hZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UobmV3IFRleHREZWNvZGVyKCd1dGY4JykuZGVjb2RlKHBheWxvYWQpKVxuICAgICAgICAgICAgICAgIDogSlNPTi5wYXJzZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uUGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY29uc3RydWN0RXZlbnRBc3luYyhwYXlsb2FkLCBoZWFkZXIsIHNlY3JldCwgdG9sZXJhbmNlLCBjcnlwdG9Qcm92aWRlciwgcmVjZWl2ZWRBdCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRVJSOiBtaXNzaW5nIHNpZ25hdHVyZSBoZWxwZXIsIHVuYWJsZSB0byB2ZXJpZnknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2lnbmF0dXJlLnZlcmlmeUhlYWRlckFzeW5jKHBheWxvYWQsIGhlYWRlciwgc2VjcmV0LCB0b2xlcmFuY2UgfHwgV2ViaG9vay5ERUZBVUxUX1RPTEVSQU5DRSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpO1xuICAgICAgICAgICAgY29uc3QganNvblBheWxvYWQgPSBwYXlsb2FkIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKS5kZWNvZGUocGF5bG9hZCkpXG4gICAgICAgICAgICAgICAgOiBKU09OLnBhcnNlKHBheWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb25QYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIGEgaGVhZGVyIHRvIGJlIHVzZWQgZm9yIHdlYmhvb2sgbW9ja2luZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZWRlZiB7b2JqZWN0fSBvcHRzXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lc3RhbXAgLSBUaW1lc3RhbXAgb2YgdGhlIGhlYWRlci4gRGVmYXVsdHMgdG8gRGF0ZS5ub3coKVxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gcGF5bG9hZCAtIEpTT04gc3RyaW5naWZpZWQgcGF5bG9hZCBvYmplY3QsIGNvbnRhaW5pbmcgdGhlICdpZCcgYW5kICdvYmplY3QnIHBhcmFtZXRlcnNcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY3JldCAtIFN0cmlwZSB3ZWJob29rIHNlY3JldCAnd2hzZWNfLi4uJ1xuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2NoZW1lIC0gVmVyc2lvbiBvZiBBUEkgdG8gaGl0LiBEZWZhdWx0cyB0byAndjEnLlxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmF0dXJlIC0gQ29tcHV0ZWQgd2ViaG9vayBzaWduYXR1cmVcbiAgICAgICAgICogQHByb3BlcnR5IHtDcnlwdG9Qcm92aWRlcn0gY3J5cHRvUHJvdmlkZXIgLSBDcnlwdG8gcHJvdmlkZXIgdG8gdXNlIGZvciBjb21wdXRpbmcgdGhlIHNpZ25hdHVyZSBpZiBub25lIHdhcyBwcm92aWRlZC4gRGVmYXVsdHMgdG8gTm9kZUNyeXB0b1Byb3ZpZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2VuZXJhdGVUZXN0SGVhZGVyU3RyaW5nOiBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgY29uc3QgcHJlcGFyZWRPcHRzID0gcHJlcGFyZU9wdGlvbnMob3B0cyk7XG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBwcmVwYXJlZE9wdHMuc2lnbmF0dXJlIHx8XG4gICAgICAgICAgICAgICAgcHJlcGFyZWRPcHRzLmNyeXB0b1Byb3ZpZGVyLmNvbXB1dGVITUFDU2lnbmF0dXJlKHByZXBhcmVkT3B0cy5wYXlsb2FkU3RyaW5nLCBwcmVwYXJlZE9wdHMuc2VjcmV0KTtcbiAgICAgICAgICAgIHJldHVybiBwcmVwYXJlZE9wdHMuZ2VuZXJhdGVIZWFkZXJTdHJpbmcoc2lnbmF0dXJlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVUZXN0SGVhZGVyU3RyaW5nQXN5bmM6IGFzeW5jIGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVwYXJlZE9wdHMgPSBwcmVwYXJlT3B0aW9ucyhvcHRzKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHByZXBhcmVkT3B0cy5zaWduYXR1cmUgfHxcbiAgICAgICAgICAgICAgICAoYXdhaXQgcHJlcGFyZWRPcHRzLmNyeXB0b1Byb3ZpZGVyLmNvbXB1dGVITUFDU2lnbmF0dXJlQXN5bmMocHJlcGFyZWRPcHRzLnBheWxvYWRTdHJpbmcsIHByZXBhcmVkT3B0cy5zZWNyZXQpKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVwYXJlZE9wdHMuZ2VuZXJhdGVIZWFkZXJTdHJpbmcoc2lnbmF0dXJlKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHtcbiAgICAgICAgRVhQRUNURURfU0NIRU1FOiAndjEnLFxuICAgICAgICB2ZXJpZnlIZWFkZXIoZW5jb2RlZFBheWxvYWQsIGVuY29kZWRIZWFkZXIsIHNlY3JldCwgdG9sZXJhbmNlLCBjcnlwdG9Qcm92aWRlciwgcmVjZWl2ZWRBdCkge1xuICAgICAgICAgICAgY29uc3QgeyBkZWNvZGVkSGVhZGVyOiBoZWFkZXIsIGRlY29kZWRQYXlsb2FkOiBwYXlsb2FkLCBkZXRhaWxzLCBzdXNwZWN0UGF5bG9hZFR5cGUsIH0gPSBwYXJzZUV2ZW50RGV0YWlscyhlbmNvZGVkUGF5bG9hZCwgZW5jb2RlZEhlYWRlciwgdGhpcy5FWFBFQ1RFRF9TQ0hFTUUpO1xuICAgICAgICAgICAgY29uc3Qgc2VjcmV0Q29udGFpbnNXaGl0ZXNwYWNlID0gL1xccy8udGVzdChzZWNyZXQpO1xuICAgICAgICAgICAgY3J5cHRvUHJvdmlkZXIgPSBjcnlwdG9Qcm92aWRlciB8fCBnZXRDcnlwdG9Qcm92aWRlcigpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRTaWduYXR1cmUgPSBjcnlwdG9Qcm92aWRlci5jb21wdXRlSE1BQ1NpZ25hdHVyZShtYWtlSE1BQ0NvbnRlbnQocGF5bG9hZCwgZGV0YWlscyksIHNlY3JldCk7XG4gICAgICAgICAgICB2YWxpZGF0ZUNvbXB1dGVkU2lnbmF0dXJlKHBheWxvYWQsIGhlYWRlciwgZGV0YWlscywgZXhwZWN0ZWRTaWduYXR1cmUsIHRvbGVyYW5jZSwgc3VzcGVjdFBheWxvYWRUeXBlLCBzZWNyZXRDb250YWluc1doaXRlc3BhY2UsIHJlY2VpdmVkQXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHZlcmlmeUhlYWRlckFzeW5jKGVuY29kZWRQYXlsb2FkLCBlbmNvZGVkSGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVjb2RlZEhlYWRlcjogaGVhZGVyLCBkZWNvZGVkUGF5bG9hZDogcGF5bG9hZCwgZGV0YWlscywgc3VzcGVjdFBheWxvYWRUeXBlLCB9ID0gcGFyc2VFdmVudERldGFpbHMoZW5jb2RlZFBheWxvYWQsIGVuY29kZWRIZWFkZXIsIHRoaXMuRVhQRUNURURfU0NIRU1FKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3JldENvbnRhaW5zV2hpdGVzcGFjZSA9IC9cXHMvLnRlc3Qoc2VjcmV0KTtcbiAgICAgICAgICAgIGNyeXB0b1Byb3ZpZGVyID0gY3J5cHRvUHJvdmlkZXIgfHwgZ2V0Q3J5cHRvUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkU2lnbmF0dXJlID0gYXdhaXQgY3J5cHRvUHJvdmlkZXIuY29tcHV0ZUhNQUNTaWduYXR1cmVBc3luYyhtYWtlSE1BQ0NvbnRlbnQocGF5bG9hZCwgZGV0YWlscyksIHNlY3JldCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVDb21wdXRlZFNpZ25hdHVyZShwYXlsb2FkLCBoZWFkZXIsIGRldGFpbHMsIGV4cGVjdGVkU2lnbmF0dXJlLCB0b2xlcmFuY2UsIHN1c3BlY3RQYXlsb2FkVHlwZSwgc2VjcmV0Q29udGFpbnNXaGl0ZXNwYWNlLCByZWNlaXZlZEF0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1ha2VITUFDQ29udGVudChwYXlsb2FkLCBkZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiBgJHtkZXRhaWxzLnRpbWVzdGFtcH0uJHtwYXlsb2FkfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlRXZlbnREZXRhaWxzKGVuY29kZWRQYXlsb2FkLCBlbmNvZGVkSGVhZGVyLCBleHBlY3RlZFNjaGVtZSkge1xuICAgICAgICBpZiAoIWVuY29kZWRQYXlsb2FkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoZW5jb2RlZEhlYWRlciwgZW5jb2RlZFBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gd2ViaG9vayBwYXlsb2FkIHdhcyBwcm92aWRlZC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VzcGVjdFBheWxvYWRUeXBlID0gdHlwZW9mIGVuY29kZWRQYXlsb2FkICE9ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAhKGVuY29kZWRQYXlsb2FkIGluc3RhbmNlb2YgVWludDhBcnJheSk7XG4gICAgICAgIGNvbnN0IHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGY4Jyk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRQYXlsb2FkID0gZW5jb2RlZFBheWxvYWQgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgICAgICAgICA/IHRleHREZWNvZGVyLmRlY29kZShlbmNvZGVkUGF5bG9hZClcbiAgICAgICAgICAgIDogZW5jb2RlZFBheWxvYWQ7XG4gICAgICAgIC8vIEV4cHJlc3MncyB0eXBlIGZvciBgUmVxdWVzdCNoZWFkZXJzYCBpcyBgc3RyaW5nIHwgW11zdHJpbmdgXG4gICAgICAgIC8vIHdoaWNoIGlzIGJlY2F1c2UgdGhlIGBzZXQtY29va2llYCBoZWFkZXIgaXMgYW4gYXJyYXksXG4gICAgICAgIC8vIGJ1dCBubyBvdGhlciBoZWFkZXJzIGFyZSBhbiBhcnJheSAoZG9jczogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnMpXG4gICAgICAgIC8vIChFeHByZXNzJ3MgUmVxdWVzdCBjbGFzcyBpcyBhbiBleHRlbnNpb24gb2YgaHR0cC5JbmNvbWluZ01lc3NhZ2UsIGFuZCBkb2Vzbid0IGFwcGVhciB0byBiZSByZWxldmFudGx5IG1vZGlmaWVkOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2V4cHJlc3MvYmxvYi9tYXN0ZXIvbGliL3JlcXVlc3QuanMjTDMxKVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbmNvZGVkSGVhZGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkOiBBbiBhcnJheSB3YXMgcGFzc2VkIGFzIGEgaGVhZGVyLCB3aGljaCBzaG91bGQgbm90IGJlIHBvc3NpYmxlIGZvciB0aGUgc3RyaXBlLXNpZ25hdHVyZSBoZWFkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuY29kZWRIZWFkZXIgPT0gbnVsbCB8fCBlbmNvZGVkSGVhZGVyID09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoZW5jb2RlZEhlYWRlciwgZW5jb2RlZFBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gc3RyaXBlLXNpZ25hdHVyZSBoZWFkZXIgdmFsdWUgd2FzIHByb3ZpZGVkLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGVkSGVhZGVyID0gZW5jb2RlZEhlYWRlciBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICAgICAgICAgID8gdGV4dERlY29kZXIuZGVjb2RlKGVuY29kZWRIZWFkZXIpXG4gICAgICAgICAgICA6IGVuY29kZWRIZWFkZXI7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBwYXJzZUhlYWRlcihkZWNvZGVkSGVhZGVyLCBleHBlY3RlZFNjaGVtZSk7XG4gICAgICAgIGlmICghZGV0YWlscyB8fCBkZXRhaWxzLnRpbWVzdGFtcCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTdHJpcGVTaWduYXR1cmVWZXJpZmljYXRpb25FcnJvcihkZWNvZGVkSGVhZGVyLCBkZWNvZGVkUGF5bG9hZCwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmFibGUgdG8gZXh0cmFjdCB0aW1lc3RhbXAgYW5kIHNpZ25hdHVyZXMgZnJvbSBoZWFkZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXRhaWxzLnNpZ25hdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoZGVjb2RlZEhlYWRlciwgZGVjb2RlZFBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gc2lnbmF0dXJlcyBmb3VuZCB3aXRoIGV4cGVjdGVkIHNjaGVtZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVjb2RlZFBheWxvYWQsXG4gICAgICAgICAgICBkZWNvZGVkSGVhZGVyLFxuICAgICAgICAgICAgZGV0YWlscyxcbiAgICAgICAgICAgIHN1c3BlY3RQYXlsb2FkVHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb21wdXRlZFNpZ25hdHVyZShwYXlsb2FkLCBoZWFkZXIsIGRldGFpbHMsIGV4cGVjdGVkU2lnbmF0dXJlLCB0b2xlcmFuY2UsIHN1c3BlY3RQYXlsb2FkVHlwZSwgc2VjcmV0Q29udGFpbnNXaGl0ZXNwYWNlLCByZWNlaXZlZEF0KSB7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZUZvdW5kID0gISFkZXRhaWxzLnNpZ25hdHVyZXMuZmlsdGVyKHBsYXRmb3JtRnVuY3Rpb25zLnNlY3VyZUNvbXBhcmUuYmluZChwbGF0Zm9ybUZ1bmN0aW9ucywgZXhwZWN0ZWRTaWduYXR1cmUpKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRvY3NMb2NhdGlvbiA9ICdcXG5MZWFybiBtb3JlIGFib3V0IHdlYmhvb2sgc2lnbmluZyBhbmQgZXhwbG9yZSB3ZWJob29rIGludGVncmF0aW9uIGV4YW1wbGVzIGZvciB2YXJpb3VzIGZyYW1ld29ya3MgYXQgJyArXG4gICAgICAgICAgICAnaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vd2ViaG9va3Mvc2lnbmF0dXJlJztcbiAgICAgICAgY29uc3Qgd2hpdGVzcGFjZU1lc3NhZ2UgPSBzZWNyZXRDb250YWluc1doaXRlc3BhY2VcbiAgICAgICAgICAgID8gJ1xcblxcbk5vdGU6IFRoZSBwcm92aWRlZCBzaWduaW5nIHNlY3JldCBjb250YWlucyB3aGl0ZXNwYWNlLiBUaGlzIG9mdGVuIGluZGljYXRlcyBhbiBleHRyYSBuZXdsaW5lIG9yIHNwYWNlIGlzIGluIHRoZSB2YWx1ZSdcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmICghc2lnbmF0dXJlRm91bmQpIHtcbiAgICAgICAgICAgIGlmIChzdXNwZWN0UGF5bG9hZFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoaGVhZGVyLCBwYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXZWJob29rIHBheWxvYWQgbXVzdCBiZSBwcm92aWRlZCBhcyBhIHN0cmluZyBvciBhIEJ1ZmZlciAoaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9idWZmZXIuaHRtbCkgaW5zdGFuY2UgcmVwcmVzZW50aW5nIHRoZSBfcmF3XyByZXF1ZXN0IGJvZHkuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnUGF5bG9hZCB3YXMgcHJvdmlkZWQgYXMgYSBwYXJzZWQgSmF2YVNjcmlwdCBvYmplY3QgaW5zdGVhZC4gXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBpcyBpbXBvc3NpYmxlIHdpdGhvdXQgYWNjZXNzIHRvIHRoZSBvcmlnaW5hbCBzaWduZWQgbWF0ZXJpYWwuIFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jc0xvY2F0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2VNZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGhlYWRlciwgcGF5bG9hZCwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBzaWduYXR1cmVzIGZvdW5kIG1hdGNoaW5nIHRoZSBleHBlY3RlZCBzaWduYXR1cmUgZm9yIHBheWxvYWQuJyArXG4gICAgICAgICAgICAgICAgICAgICcgQXJlIHlvdSBwYXNzaW5nIHRoZSByYXcgcmVxdWVzdCBib2R5IHlvdSByZWNlaXZlZCBmcm9tIFN0cmlwZT8gXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICcgSWYgYSB3ZWJob29rIHJlcXVlc3QgaXMgYmVpbmcgZm9yd2FyZGVkIGJ5IGEgdGhpcmQtcGFydHkgdG9vbCwnICtcbiAgICAgICAgICAgICAgICAgICAgJyBlbnN1cmUgdGhhdCB0aGUgZXhhY3QgcmVxdWVzdCBib2R5LCBpbmNsdWRpbmcgSlNPTiBmb3JtYXR0aW5nIGFuZCBuZXcgbGluZSBzdHlsZSwgaXMgcHJlc2VydmVkLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICBkb2NzTG9jYXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAnXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2VNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXN0YW1wQWdlID0gTWF0aC5mbG9vcigodHlwZW9mIHJlY2VpdmVkQXQgPT09ICdudW1iZXInID8gcmVjZWl2ZWRBdCA6IERhdGUubm93KCkpIC8gMTAwMCkgLSBkZXRhaWxzLnRpbWVzdGFtcDtcbiAgICAgICAgaWYgKHRvbGVyYW5jZSA+IDAgJiYgdGltZXN0YW1wQWdlID4gdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoaGVhZGVyLCBwYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RpbWVzdGFtcCBvdXRzaWRlIHRoZSB0b2xlcmFuY2Ugem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VIZWFkZXIoaGVhZGVyLCBzY2hlbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyLnNwbGl0KCcsJykucmVkdWNlKChhY2N1bSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga3YgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBpZiAoa3ZbMF0gPT09ICd0Jykge1xuICAgICAgICAgICAgICAgIGFjY3VtLnRpbWVzdGFtcCA9IHBhcnNlSW50KGt2WzFdLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa3ZbMF0gPT09IHNjaGVtZSkge1xuICAgICAgICAgICAgICAgIGFjY3VtLnNpZ25hdHVyZXMucHVzaChrdlsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogLTEsXG4gICAgICAgICAgICBzaWduYXR1cmVzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCB3ZWJob29rc0NyeXB0b1Byb3ZpZGVySW5zdGFuY2UgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIExhemlseSBpbnN0YW50aWF0ZSBhIENyeXB0b1Byb3ZpZGVyIGluc3RhbmNlLiBUaGlzIGlzIGEgc3RhdGVsZXNzIG9iamVjdFxuICAgICAqIHNvIGEgc2luZ2xldG9uIGNhbiBiZSB1c2VkIGhlcmUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q3J5cHRvUHJvdmlkZXIoKSB7XG4gICAgICAgIGlmICghd2ViaG9va3NDcnlwdG9Qcm92aWRlckluc3RhbmNlKSB7XG4gICAgICAgICAgICB3ZWJob29rc0NyeXB0b1Byb3ZpZGVySW5zdGFuY2UgPSBwbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVEZWZhdWx0Q3J5cHRvUHJvdmlkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2ViaG9va3NDcnlwdG9Qcm92aWRlckluc3RhbmNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmVwYXJlT3B0aW9ucyhvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZUVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT3B0aW9ucyBhcmUgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcHRzLnRpbWVzdGFtcCkgfHwgTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGNvbnN0IHNjaGVtZSA9IG9wdHMuc2NoZW1lIHx8IHNpZ25hdHVyZS5FWFBFQ1RFRF9TQ0hFTUU7XG4gICAgICAgIGNvbnN0IGNyeXB0b1Byb3ZpZGVyID0gb3B0cy5jcnlwdG9Qcm92aWRlciB8fCBnZXRDcnlwdG9Qcm92aWRlcigpO1xuICAgICAgICBjb25zdCBwYXlsb2FkU3RyaW5nID0gYCR7dGltZXN0YW1wfS4ke29wdHMucGF5bG9hZH1gO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUhlYWRlclN0cmluZyA9IChzaWduYXR1cmUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgdD0ke3RpbWVzdGFtcH0sJHtzY2hlbWV9PSR7c2lnbmF0dXJlfWA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdHMpLCB7IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHNjaGVtZSxcbiAgICAgICAgICAgIGNyeXB0b1Byb3ZpZGVyLFxuICAgICAgICAgICAgcGF5bG9hZFN0cmluZyxcbiAgICAgICAgICAgIGdlbmVyYXRlSGVhZGVyU3RyaW5nIH0pO1xuICAgIH1cbiAgICBXZWJob29rLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICByZXR1cm4gV2ViaG9vaztcbn1cbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmV4cG9ydCBjb25zdCBBcGlWZXJzaW9uID0gJzIwMjYtMDEtMjguY2xvdmVyJztcbmV4cG9ydCBjb25zdCBBcGlNYWpvclZlcnNpb24gPSAnY2xvdmVyJztcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IHJlc291cmNlTmFtZXNwYWNlIH0gZnJvbSAnLi9SZXNvdXJjZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgeyBBY2NvdW50TGlua3MgYXMgVjJDb3JlQWNjb3VudExpbmtzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQ29yZS9BY2NvdW50TGlua3MuanMnO1xuaW1wb3J0IHsgQWNjb3VudFRva2VucyBhcyBWMkNvcmVBY2NvdW50VG9rZW5zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQ29yZS9BY2NvdW50VG9rZW5zLmpzJztcbmltcG9ydCB7IEFjY291bnRzIGFzIEZpbmFuY2lhbENvbm5lY3Rpb25zQWNjb3VudHMgfSBmcm9tICcuL3Jlc291cmNlcy9GaW5hbmNpYWxDb25uZWN0aW9ucy9BY2NvdW50cy5qcyc7XG5pbXBvcnQgeyBBY2NvdW50cyBhcyBWMkNvcmVBY2NvdW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudHMuanMnO1xuaW1wb3J0IHsgQWN0aXZlRW50aXRsZW1lbnRzIGFzIEVudGl0bGVtZW50c0FjdGl2ZUVudGl0bGVtZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0VudGl0bGVtZW50cy9BY3RpdmVFbnRpdGxlbWVudHMuanMnO1xuaW1wb3J0IHsgQWxlcnRzIGFzIEJpbGxpbmdBbGVydHMgfSBmcm9tICcuL3Jlc291cmNlcy9CaWxsaW5nL0FsZXJ0cy5qcyc7XG5pbXBvcnQgeyBBc3NvY2lhdGlvbnMgYXMgVGF4QXNzb2NpYXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4L0Fzc29jaWF0aW9ucy5qcyc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9ucyBhcyBJc3N1aW5nQXV0aG9yaXphdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL0F1dGhvcml6YXRpb25zLmpzJztcbmltcG9ydCB7IEF1dGhvcml6YXRpb25zIGFzIFRlc3RIZWxwZXJzSXNzdWluZ0F1dGhvcml6YXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyc7XG5pbXBvcnQgeyBDYWxjdWxhdGlvbnMgYXMgVGF4Q2FsY3VsYXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4L0NhbGN1bGF0aW9ucy5qcyc7XG5pbXBvcnQgeyBDYXJkaG9sZGVycyBhcyBJc3N1aW5nQ2FyZGhvbGRlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL0NhcmRob2xkZXJzLmpzJztcbmltcG9ydCB7IENhcmRzIGFzIElzc3VpbmdDYXJkcyB9IGZyb20gJy4vcmVzb3VyY2VzL0lzc3VpbmcvQ2FyZHMuanMnO1xuaW1wb3J0IHsgQ2FyZHMgYXMgVGVzdEhlbHBlcnNJc3N1aW5nQ2FyZHMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9Jc3N1aW5nL0NhcmRzLmpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25zIGFzIEJpbGxpbmdQb3J0YWxDb25maWd1cmF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmdQb3J0YWwvQ29uZmlndXJhdGlvbnMuanMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbnMgYXMgVGVybWluYWxDb25maWd1cmF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlcm1pbmFsL0NvbmZpZ3VyYXRpb25zLmpzJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblRva2VucyBhcyBUZXN0SGVscGVyc0NvbmZpcm1hdGlvblRva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0NvbmZpcm1hdGlvblRva2Vucy5qcyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uVG9rZW5zIGFzIFRlcm1pbmFsQ29ubmVjdGlvblRva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlcm1pbmFsL0Nvbm5lY3Rpb25Ub2tlbnMuanMnO1xuaW1wb3J0IHsgQ3JlZGl0QmFsYW5jZVN1bW1hcnkgYXMgQmlsbGluZ0NyZWRpdEJhbGFuY2VTdW1tYXJ5IH0gZnJvbSAnLi9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlU3VtbWFyeS5qcyc7XG5pbXBvcnQgeyBDcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zIGFzIEJpbGxpbmdDcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zLmpzJztcbmltcG9ydCB7IENyZWRpdEdyYW50cyBhcyBCaWxsaW5nQ3JlZGl0R3JhbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRHcmFudHMuanMnO1xuaW1wb3J0IHsgQ3JlZGl0UmV2ZXJzYWxzIGFzIFRyZWFzdXJ5Q3JlZGl0UmV2ZXJzYWxzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvQ3JlZGl0UmV2ZXJzYWxzLmpzJztcbmltcG9ydCB7IEN1c3RvbWVycyBhcyBUZXN0SGVscGVyc0N1c3RvbWVycyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0N1c3RvbWVycy5qcyc7XG5pbXBvcnQgeyBEZWJpdFJldmVyc2FscyBhcyBUcmVhc3VyeURlYml0UmV2ZXJzYWxzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvRGViaXRSZXZlcnNhbHMuanMnO1xuaW1wb3J0IHsgRGlzcHV0ZXMgYXMgSXNzdWluZ0Rpc3B1dGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvSXNzdWluZy9EaXNwdXRlcy5qcyc7XG5pbXBvcnQgeyBFYXJseUZyYXVkV2FybmluZ3MgYXMgUmFkYXJFYXJseUZyYXVkV2FybmluZ3MgfSBmcm9tICcuL3Jlc291cmNlcy9SYWRhci9FYXJseUZyYXVkV2FybmluZ3MuanMnO1xuaW1wb3J0IHsgRXZlbnREZXN0aW5hdGlvbnMgYXMgVjJDb3JlRXZlbnREZXN0aW5hdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9WMi9Db3JlL0V2ZW50RGVzdGluYXRpb25zLmpzJztcbmltcG9ydCB7IEV2ZW50cyBhcyBWMkNvcmVFdmVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9WMi9Db3JlL0V2ZW50cy5qcyc7XG5pbXBvcnQgeyBGZWF0dXJlcyBhcyBFbnRpdGxlbWVudHNGZWF0dXJlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0VudGl0bGVtZW50cy9GZWF0dXJlcy5qcyc7XG5pbXBvcnQgeyBGaW5hbmNpYWxBY2NvdW50cyBhcyBUcmVhc3VyeUZpbmFuY2lhbEFjY291bnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvRmluYW5jaWFsQWNjb3VudHMuanMnO1xuaW1wb3J0IHsgSW5ib3VuZFRyYW5zZmVycyBhcyBUZXN0SGVscGVyc1RyZWFzdXJ5SW5ib3VuZFRyYW5zZmVycyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L0luYm91bmRUcmFuc2ZlcnMuanMnO1xuaW1wb3J0IHsgSW5ib3VuZFRyYW5zZmVycyBhcyBUcmVhc3VyeUluYm91bmRUcmFuc2ZlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzJztcbmltcG9ydCB7IExvY2F0aW9ucyBhcyBUZXJtaW5hbExvY2F0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlcm1pbmFsL0xvY2F0aW9ucy5qcyc7XG5pbXBvcnQgeyBNZXRlckV2ZW50QWRqdXN0bWVudHMgYXMgQmlsbGluZ01ldGVyRXZlbnRBZGp1c3RtZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvTWV0ZXJFdmVudEFkanVzdG1lbnRzLmpzJztcbmltcG9ydCB7IE1ldGVyRXZlbnRBZGp1c3RtZW50cyBhcyBWMkJpbGxpbmdNZXRlckV2ZW50QWRqdXN0bWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRBZGp1c3RtZW50cy5qcyc7XG5pbXBvcnQgeyBNZXRlckV2ZW50U2Vzc2lvbiBhcyBWMkJpbGxpbmdNZXRlckV2ZW50U2Vzc2lvbiB9IGZyb20gJy4vcmVzb3VyY2VzL1YyL0JpbGxpbmcvTWV0ZXJFdmVudFNlc3Npb24uanMnO1xuaW1wb3J0IHsgTWV0ZXJFdmVudFN0cmVhbSBhcyBWMkJpbGxpbmdNZXRlckV2ZW50U3RyZWFtIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50U3RyZWFtLmpzJztcbmltcG9ydCB7IE1ldGVyRXZlbnRzIGFzIEJpbGxpbmdNZXRlckV2ZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvTWV0ZXJFdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0ZXJFdmVudHMgYXMgVjJCaWxsaW5nTWV0ZXJFdmVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRzLmpzJztcbmltcG9ydCB7IE1ldGVycyBhcyBCaWxsaW5nTWV0ZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmlsbGluZy9NZXRlcnMuanMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0xpbmtzIGFzIFRlcm1pbmFsT25ib2FyZGluZ0xpbmtzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVybWluYWwvT25ib2FyZGluZ0xpbmtzLmpzJztcbmltcG9ydCB7IE9yZGVycyBhcyBDbGltYXRlT3JkZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ2xpbWF0ZS9PcmRlcnMuanMnO1xuaW1wb3J0IHsgT3V0Ym91bmRQYXltZW50cyBhcyBUZXN0SGVscGVyc1RyZWFzdXJ5T3V0Ym91bmRQYXltZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L091dGJvdW5kUGF5bWVudHMuanMnO1xuaW1wb3J0IHsgT3V0Ym91bmRQYXltZW50cyBhcyBUcmVhc3VyeU91dGJvdW5kUGF5bWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9PdXRib3VuZFBheW1lbnRzLmpzJztcbmltcG9ydCB7IE91dGJvdW5kVHJhbnNmZXJzIGFzIFRlc3RIZWxwZXJzVHJlYXN1cnlPdXRib3VuZFRyYW5zZmVycyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L091dGJvdW5kVHJhbnNmZXJzLmpzJztcbmltcG9ydCB7IE91dGJvdW5kVHJhbnNmZXJzIGFzIFRyZWFzdXJ5T3V0Ym91bmRUcmFuc2ZlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9PdXRib3VuZFRyYW5zZmVycy5qcyc7XG5pbXBvcnQgeyBQYXltZW50RXZhbHVhdGlvbnMgYXMgUmFkYXJQYXltZW50RXZhbHVhdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9SYWRhci9QYXltZW50RXZhbHVhdGlvbnMuanMnO1xuaW1wb3J0IHsgUGVyc29uYWxpemF0aW9uRGVzaWducyBhcyBJc3N1aW5nUGVyc29uYWxpemF0aW9uRGVzaWducyB9IGZyb20gJy4vcmVzb3VyY2VzL0lzc3VpbmcvUGVyc29uYWxpemF0aW9uRGVzaWducy5qcyc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25EZXNpZ25zIGFzIFRlc3RIZWxwZXJzSXNzdWluZ1BlcnNvbmFsaXphdGlvbkRlc2lnbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9Jc3N1aW5nL1BlcnNvbmFsaXphdGlvbkRlc2lnbnMuanMnO1xuaW1wb3J0IHsgUGh5c2ljYWxCdW5kbGVzIGFzIElzc3VpbmdQaHlzaWNhbEJ1bmRsZXMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL1BoeXNpY2FsQnVuZGxlcy5qcyc7XG5pbXBvcnQgeyBQcm9kdWN0cyBhcyBDbGltYXRlUHJvZHVjdHMgfSBmcm9tICcuL3Jlc291cmNlcy9DbGltYXRlL1Byb2R1Y3RzLmpzJztcbmltcG9ydCB7IFJlYWRlcnMgYXMgVGVybWluYWxSZWFkZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVybWluYWwvUmVhZGVycy5qcyc7XG5pbXBvcnQgeyBSZWFkZXJzIGFzIFRlc3RIZWxwZXJzVGVybWluYWxSZWFkZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVGVybWluYWwvUmVhZGVycy5qcyc7XG5pbXBvcnQgeyBSZWNlaXZlZENyZWRpdHMgYXMgVGVzdEhlbHBlcnNUcmVhc3VyeVJlY2VpdmVkQ3JlZGl0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L1JlY2VpdmVkQ3JlZGl0cy5qcyc7XG5pbXBvcnQgeyBSZWNlaXZlZENyZWRpdHMgYXMgVHJlYXN1cnlSZWNlaXZlZENyZWRpdHMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZENyZWRpdHMuanMnO1xuaW1wb3J0IHsgUmVjZWl2ZWREZWJpdHMgYXMgVGVzdEhlbHBlcnNUcmVhc3VyeVJlY2VpdmVkRGViaXRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvUmVjZWl2ZWREZWJpdHMuanMnO1xuaW1wb3J0IHsgUmVjZWl2ZWREZWJpdHMgYXMgVHJlYXN1cnlSZWNlaXZlZERlYml0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L1JlY2VpdmVkRGViaXRzLmpzJztcbmltcG9ydCB7IFJlZnVuZHMgYXMgVGVzdEhlbHBlcnNSZWZ1bmRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvUmVmdW5kcy5qcyc7XG5pbXBvcnQgeyBSZWdpc3RyYXRpb25zIGFzIFRheFJlZ2lzdHJhdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UYXgvUmVnaXN0cmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBSZXBvcnRSdW5zIGFzIFJlcG9ydGluZ1JlcG9ydFJ1bnMgfSBmcm9tICcuL3Jlc291cmNlcy9SZXBvcnRpbmcvUmVwb3J0UnVucy5qcyc7XG5pbXBvcnQgeyBSZXBvcnRUeXBlcyBhcyBSZXBvcnRpbmdSZXBvcnRUeXBlcyB9IGZyb20gJy4vcmVzb3VyY2VzL1JlcG9ydGluZy9SZXBvcnRUeXBlcy5qcyc7XG5pbXBvcnQgeyBSZXF1ZXN0cyBhcyBGb3J3YXJkaW5nUmVxdWVzdHMgfSBmcm9tICcuL3Jlc291cmNlcy9Gb3J3YXJkaW5nL1JlcXVlc3RzLmpzJztcbmltcG9ydCB7IFNjaGVkdWxlZFF1ZXJ5UnVucyBhcyBTaWdtYVNjaGVkdWxlZFF1ZXJ5UnVucyB9IGZyb20gJy4vcmVzb3VyY2VzL1NpZ21hL1NjaGVkdWxlZFF1ZXJ5UnVucy5qcyc7XG5pbXBvcnQgeyBTZWNyZXRzIGFzIEFwcHNTZWNyZXRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQXBwcy9TZWNyZXRzLmpzJztcbmltcG9ydCB7IFNlc3Npb25zIGFzIEJpbGxpbmdQb3J0YWxTZXNzaW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmdQb3J0YWwvU2Vzc2lvbnMuanMnO1xuaW1wb3J0IHsgU2Vzc2lvbnMgYXMgQ2hlY2tvdXRTZXNzaW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0NoZWNrb3V0L1Nlc3Npb25zLmpzJztcbmltcG9ydCB7IFNlc3Npb25zIGFzIEZpbmFuY2lhbENvbm5lY3Rpb25zU2Vzc2lvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9GaW5hbmNpYWxDb25uZWN0aW9ucy9TZXNzaW9ucy5qcyc7XG5pbXBvcnQgeyBTZXR0aW5ncyBhcyBUYXhTZXR0aW5ncyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheC9TZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBTdXBwbGllcnMgYXMgQ2xpbWF0ZVN1cHBsaWVycyB9IGZyb20gJy4vcmVzb3VyY2VzL0NsaW1hdGUvU3VwcGxpZXJzLmpzJztcbmltcG9ydCB7IFRlc3RDbG9ja3MgYXMgVGVzdEhlbHBlcnNUZXN0Q2xvY2tzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVGVzdENsb2Nrcy5qcyc7XG5pbXBvcnQgeyBUb2tlbnMgYXMgSXNzdWluZ1Rva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL0lzc3VpbmcvVG9rZW5zLmpzJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uRW50cmllcyBhcyBUcmVhc3VyeVRyYW5zYWN0aW9uRW50cmllcyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L1RyYW5zYWN0aW9uRW50cmllcy5qcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnMgYXMgRmluYW5jaWFsQ29ubmVjdGlvbnNUcmFuc2FjdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9GaW5hbmNpYWxDb25uZWN0aW9ucy9UcmFuc2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zIGFzIElzc3VpbmdUcmFuc2FjdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL1RyYW5zYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnMgYXMgVGF4VHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4L1RyYW5zYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnMgYXMgVGVzdEhlbHBlcnNJc3N1aW5nVHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9UcmFuc2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zIGFzIFRyZWFzdXJ5VHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvVHJhbnNhY3Rpb25zLmpzJztcbmltcG9ydCB7IFZhbHVlTGlzdEl0ZW1zIGFzIFJhZGFyVmFsdWVMaXN0SXRlbXMgfSBmcm9tICcuL3Jlc291cmNlcy9SYWRhci9WYWx1ZUxpc3RJdGVtcy5qcyc7XG5pbXBvcnQgeyBWYWx1ZUxpc3RzIGFzIFJhZGFyVmFsdWVMaXN0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1JhZGFyL1ZhbHVlTGlzdHMuanMnO1xuaW1wb3J0IHsgVmVyaWZpY2F0aW9uUmVwb3J0cyBhcyBJZGVudGl0eVZlcmlmaWNhdGlvblJlcG9ydHMgfSBmcm9tICcuL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25SZXBvcnRzLmpzJztcbmltcG9ydCB7IFZlcmlmaWNhdGlvblNlc3Npb25zIGFzIElkZW50aXR5VmVyaWZpY2F0aW9uU2Vzc2lvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25TZXNzaW9ucy5qcyc7XG5leHBvcnQgeyBBY2NvdW50cyBhcyBBY2NvdW50IH0gZnJvbSAnLi9yZXNvdXJjZXMvQWNjb3VudHMuanMnO1xuZXhwb3J0IHsgQWNjb3VudExpbmtzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQWNjb3VudExpbmtzLmpzJztcbmV4cG9ydCB7IEFjY291bnRTZXNzaW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0FjY291bnRTZXNzaW9ucy5qcyc7XG5leHBvcnQgeyBBY2NvdW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0FjY291bnRzLmpzJztcbmV4cG9ydCB7IEFwcGxlUGF5RG9tYWlucyB9IGZyb20gJy4vcmVzb3VyY2VzL0FwcGxlUGF5RG9tYWlucy5qcyc7XG5leHBvcnQgeyBBcHBsaWNhdGlvbkZlZXMgfSBmcm9tICcuL3Jlc291cmNlcy9BcHBsaWNhdGlvbkZlZXMuanMnO1xuZXhwb3J0IHsgQmFsYW5jZSB9IGZyb20gJy4vcmVzb3VyY2VzL0JhbGFuY2UuanMnO1xuZXhwb3J0IHsgQmFsYW5jZVNldHRpbmdzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmFsYW5jZVNldHRpbmdzLmpzJztcbmV4cG9ydCB7IEJhbGFuY2VUcmFuc2FjdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9CYWxhbmNlVHJhbnNhY3Rpb25zLmpzJztcbmV4cG9ydCB7IENoYXJnZXMgfSBmcm9tICcuL3Jlc291cmNlcy9DaGFyZ2VzLmpzJztcbmV4cG9ydCB7IENvbmZpcm1hdGlvblRva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL0NvbmZpcm1hdGlvblRva2Vucy5qcyc7XG5leHBvcnQgeyBDb3VudHJ5U3BlY3MgfSBmcm9tICcuL3Jlc291cmNlcy9Db3VudHJ5U3BlY3MuanMnO1xuZXhwb3J0IHsgQ291cG9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0NvdXBvbnMuanMnO1xuZXhwb3J0IHsgQ3JlZGl0Tm90ZXMgfSBmcm9tICcuL3Jlc291cmNlcy9DcmVkaXROb3Rlcy5qcyc7XG5leHBvcnQgeyBDdXN0b21lclNlc3Npb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ3VzdG9tZXJTZXNzaW9ucy5qcyc7XG5leHBvcnQgeyBDdXN0b21lcnMgfSBmcm9tICcuL3Jlc291cmNlcy9DdXN0b21lcnMuanMnO1xuZXhwb3J0IHsgRGlzcHV0ZXMgfSBmcm9tICcuL3Jlc291cmNlcy9EaXNwdXRlcy5qcyc7XG5leHBvcnQgeyBFcGhlbWVyYWxLZXlzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRXBoZW1lcmFsS2V5cy5qcyc7XG5leHBvcnQgeyBFdmVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9FdmVudHMuanMnO1xuZXhwb3J0IHsgRXhjaGFuZ2VSYXRlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0V4Y2hhbmdlUmF0ZXMuanMnO1xuZXhwb3J0IHsgRmlsZUxpbmtzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRmlsZUxpbmtzLmpzJztcbmV4cG9ydCB7IEZpbGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRmlsZXMuanMnO1xuZXhwb3J0IHsgSW52b2ljZUl0ZW1zIH0gZnJvbSAnLi9yZXNvdXJjZXMvSW52b2ljZUl0ZW1zLmpzJztcbmV4cG9ydCB7IEludm9pY2VQYXltZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0ludm9pY2VQYXltZW50cy5qcyc7XG5leHBvcnQgeyBJbnZvaWNlUmVuZGVyaW5nVGVtcGxhdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvSW52b2ljZVJlbmRlcmluZ1RlbXBsYXRlcy5qcyc7XG5leHBvcnQgeyBJbnZvaWNlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0ludm9pY2VzLmpzJztcbmV4cG9ydCB7IE1hbmRhdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvTWFuZGF0ZXMuanMnO1xuZXhwb3J0IHsgT0F1dGggfSBmcm9tICcuL3Jlc291cmNlcy9PQXV0aC5qcyc7XG5leHBvcnQgeyBQYXltZW50QXR0ZW1wdFJlY29yZHMgfSBmcm9tICcuL3Jlc291cmNlcy9QYXltZW50QXR0ZW1wdFJlY29yZHMuanMnO1xuZXhwb3J0IHsgUGF5bWVudEludGVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9QYXltZW50SW50ZW50cy5qcyc7XG5leHBvcnQgeyBQYXltZW50TGlua3MgfSBmcm9tICcuL3Jlc291cmNlcy9QYXltZW50TGlua3MuanMnO1xuZXhwb3J0IHsgUGF5bWVudE1ldGhvZENvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZENvbmZpZ3VyYXRpb25zLmpzJztcbmV4cG9ydCB7IFBheW1lbnRNZXRob2REb21haW5zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZERvbWFpbnMuanMnO1xuZXhwb3J0IHsgUGF5bWVudE1ldGhvZHMgfSBmcm9tICcuL3Jlc291cmNlcy9QYXltZW50TWV0aG9kcy5qcyc7XG5leHBvcnQgeyBQYXltZW50UmVjb3JkcyB9IGZyb20gJy4vcmVzb3VyY2VzL1BheW1lbnRSZWNvcmRzLmpzJztcbmV4cG9ydCB7IFBheW91dHMgfSBmcm9tICcuL3Jlc291cmNlcy9QYXlvdXRzLmpzJztcbmV4cG9ydCB7IFBsYW5zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGxhbnMuanMnO1xuZXhwb3J0IHsgUHJpY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUHJpY2VzLmpzJztcbmV4cG9ydCB7IFByb2R1Y3RzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUHJvZHVjdHMuanMnO1xuZXhwb3J0IHsgUHJvbW90aW9uQ29kZXMgfSBmcm9tICcuL3Jlc291cmNlcy9Qcm9tb3Rpb25Db2Rlcy5qcyc7XG5leHBvcnQgeyBRdW90ZXMgfSBmcm9tICcuL3Jlc291cmNlcy9RdW90ZXMuanMnO1xuZXhwb3J0IHsgUmVmdW5kcyB9IGZyb20gJy4vcmVzb3VyY2VzL1JlZnVuZHMuanMnO1xuZXhwb3J0IHsgUmV2aWV3cyB9IGZyb20gJy4vcmVzb3VyY2VzL1Jldmlld3MuanMnO1xuZXhwb3J0IHsgU2V0dXBBdHRlbXB0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1NldHVwQXR0ZW1wdHMuanMnO1xuZXhwb3J0IHsgU2V0dXBJbnRlbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvU2V0dXBJbnRlbnRzLmpzJztcbmV4cG9ydCB7IFNoaXBwaW5nUmF0ZXMgfSBmcm9tICcuL3Jlc291cmNlcy9TaGlwcGluZ1JhdGVzLmpzJztcbmV4cG9ydCB7IFNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcy9Tb3VyY2VzLmpzJztcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbkl0ZW1zIH0gZnJvbSAnLi9yZXNvdXJjZXMvU3Vic2NyaXB0aW9uSXRlbXMuanMnO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uU2NoZWR1bGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvU3Vic2NyaXB0aW9uU2NoZWR1bGVzLmpzJztcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9TdWJzY3JpcHRpb25zLmpzJztcbmV4cG9ydCB7IFRheENvZGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4Q29kZXMuanMnO1xuZXhwb3J0IHsgVGF4SWRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4SWRzLmpzJztcbmV4cG9ydCB7IFRheFJhdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4UmF0ZXMuanMnO1xuZXhwb3J0IHsgVG9rZW5zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVG9rZW5zLmpzJztcbmV4cG9ydCB7IFRvcHVwcyB9IGZyb20gJy4vcmVzb3VyY2VzL1RvcHVwcy5qcyc7XG5leHBvcnQgeyBUcmFuc2ZlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmFuc2ZlcnMuanMnO1xuZXhwb3J0IHsgV2ViaG9va0VuZHBvaW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL1dlYmhvb2tFbmRwb2ludHMuanMnO1xuZXhwb3J0IGNvbnN0IEFwcHMgPSByZXNvdXJjZU5hbWVzcGFjZSgnYXBwcycsIHsgU2VjcmV0czogQXBwc1NlY3JldHMgfSk7XG5leHBvcnQgY29uc3QgQmlsbGluZyA9IHJlc291cmNlTmFtZXNwYWNlKCdiaWxsaW5nJywge1xuICAgIEFsZXJ0czogQmlsbGluZ0FsZXJ0cyxcbiAgICBDcmVkaXRCYWxhbmNlU3VtbWFyeTogQmlsbGluZ0NyZWRpdEJhbGFuY2VTdW1tYXJ5LFxuICAgIENyZWRpdEJhbGFuY2VUcmFuc2FjdGlvbnM6IEJpbGxpbmdDcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zLFxuICAgIENyZWRpdEdyYW50czogQmlsbGluZ0NyZWRpdEdyYW50cyxcbiAgICBNZXRlckV2ZW50QWRqdXN0bWVudHM6IEJpbGxpbmdNZXRlckV2ZW50QWRqdXN0bWVudHMsXG4gICAgTWV0ZXJFdmVudHM6IEJpbGxpbmdNZXRlckV2ZW50cyxcbiAgICBNZXRlcnM6IEJpbGxpbmdNZXRlcnMsXG59KTtcbmV4cG9ydCBjb25zdCBCaWxsaW5nUG9ydGFsID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2JpbGxpbmdQb3J0YWwnLCB7XG4gICAgQ29uZmlndXJhdGlvbnM6IEJpbGxpbmdQb3J0YWxDb25maWd1cmF0aW9ucyxcbiAgICBTZXNzaW9uczogQmlsbGluZ1BvcnRhbFNlc3Npb25zLFxufSk7XG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSByZXNvdXJjZU5hbWVzcGFjZSgnY2hlY2tvdXQnLCB7XG4gICAgU2Vzc2lvbnM6IENoZWNrb3V0U2Vzc2lvbnMsXG59KTtcbmV4cG9ydCBjb25zdCBDbGltYXRlID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2NsaW1hdGUnLCB7XG4gICAgT3JkZXJzOiBDbGltYXRlT3JkZXJzLFxuICAgIFByb2R1Y3RzOiBDbGltYXRlUHJvZHVjdHMsXG4gICAgU3VwcGxpZXJzOiBDbGltYXRlU3VwcGxpZXJzLFxufSk7XG5leHBvcnQgY29uc3QgRW50aXRsZW1lbnRzID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2VudGl0bGVtZW50cycsIHtcbiAgICBBY3RpdmVFbnRpdGxlbWVudHM6IEVudGl0bGVtZW50c0FjdGl2ZUVudGl0bGVtZW50cyxcbiAgICBGZWF0dXJlczogRW50aXRsZW1lbnRzRmVhdHVyZXMsXG59KTtcbmV4cG9ydCBjb25zdCBGaW5hbmNpYWxDb25uZWN0aW9ucyA9IHJlc291cmNlTmFtZXNwYWNlKCdmaW5hbmNpYWxDb25uZWN0aW9ucycsIHtcbiAgICBBY2NvdW50czogRmluYW5jaWFsQ29ubmVjdGlvbnNBY2NvdW50cyxcbiAgICBTZXNzaW9uczogRmluYW5jaWFsQ29ubmVjdGlvbnNTZXNzaW9ucyxcbiAgICBUcmFuc2FjdGlvbnM6IEZpbmFuY2lhbENvbm5lY3Rpb25zVHJhbnNhY3Rpb25zLFxufSk7XG5leHBvcnQgY29uc3QgRm9yd2FyZGluZyA9IHJlc291cmNlTmFtZXNwYWNlKCdmb3J3YXJkaW5nJywge1xuICAgIFJlcXVlc3RzOiBGb3J3YXJkaW5nUmVxdWVzdHMsXG59KTtcbmV4cG9ydCBjb25zdCBJZGVudGl0eSA9IHJlc291cmNlTmFtZXNwYWNlKCdpZGVudGl0eScsIHtcbiAgICBWZXJpZmljYXRpb25SZXBvcnRzOiBJZGVudGl0eVZlcmlmaWNhdGlvblJlcG9ydHMsXG4gICAgVmVyaWZpY2F0aW9uU2Vzc2lvbnM6IElkZW50aXR5VmVyaWZpY2F0aW9uU2Vzc2lvbnMsXG59KTtcbmV4cG9ydCBjb25zdCBJc3N1aW5nID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2lzc3VpbmcnLCB7XG4gICAgQXV0aG9yaXphdGlvbnM6IElzc3VpbmdBdXRob3JpemF0aW9ucyxcbiAgICBDYXJkaG9sZGVyczogSXNzdWluZ0NhcmRob2xkZXJzLFxuICAgIENhcmRzOiBJc3N1aW5nQ2FyZHMsXG4gICAgRGlzcHV0ZXM6IElzc3VpbmdEaXNwdXRlcyxcbiAgICBQZXJzb25hbGl6YXRpb25EZXNpZ25zOiBJc3N1aW5nUGVyc29uYWxpemF0aW9uRGVzaWducyxcbiAgICBQaHlzaWNhbEJ1bmRsZXM6IElzc3VpbmdQaHlzaWNhbEJ1bmRsZXMsXG4gICAgVG9rZW5zOiBJc3N1aW5nVG9rZW5zLFxuICAgIFRyYW5zYWN0aW9uczogSXNzdWluZ1RyYW5zYWN0aW9ucyxcbn0pO1xuZXhwb3J0IGNvbnN0IFJhZGFyID0gcmVzb3VyY2VOYW1lc3BhY2UoJ3JhZGFyJywge1xuICAgIEVhcmx5RnJhdWRXYXJuaW5nczogUmFkYXJFYXJseUZyYXVkV2FybmluZ3MsXG4gICAgUGF5bWVudEV2YWx1YXRpb25zOiBSYWRhclBheW1lbnRFdmFsdWF0aW9ucyxcbiAgICBWYWx1ZUxpc3RJdGVtczogUmFkYXJWYWx1ZUxpc3RJdGVtcyxcbiAgICBWYWx1ZUxpc3RzOiBSYWRhclZhbHVlTGlzdHMsXG59KTtcbmV4cG9ydCBjb25zdCBSZXBvcnRpbmcgPSByZXNvdXJjZU5hbWVzcGFjZSgncmVwb3J0aW5nJywge1xuICAgIFJlcG9ydFJ1bnM6IFJlcG9ydGluZ1JlcG9ydFJ1bnMsXG4gICAgUmVwb3J0VHlwZXM6IFJlcG9ydGluZ1JlcG9ydFR5cGVzLFxufSk7XG5leHBvcnQgY29uc3QgU2lnbWEgPSByZXNvdXJjZU5hbWVzcGFjZSgnc2lnbWEnLCB7XG4gICAgU2NoZWR1bGVkUXVlcnlSdW5zOiBTaWdtYVNjaGVkdWxlZFF1ZXJ5UnVucyxcbn0pO1xuZXhwb3J0IGNvbnN0IFRheCA9IHJlc291cmNlTmFtZXNwYWNlKCd0YXgnLCB7XG4gICAgQXNzb2NpYXRpb25zOiBUYXhBc3NvY2lhdGlvbnMsXG4gICAgQ2FsY3VsYXRpb25zOiBUYXhDYWxjdWxhdGlvbnMsXG4gICAgUmVnaXN0cmF0aW9uczogVGF4UmVnaXN0cmF0aW9ucyxcbiAgICBTZXR0aW5nczogVGF4U2V0dGluZ3MsXG4gICAgVHJhbnNhY3Rpb25zOiBUYXhUcmFuc2FjdGlvbnMsXG59KTtcbmV4cG9ydCBjb25zdCBUZXJtaW5hbCA9IHJlc291cmNlTmFtZXNwYWNlKCd0ZXJtaW5hbCcsIHtcbiAgICBDb25maWd1cmF0aW9uczogVGVybWluYWxDb25maWd1cmF0aW9ucyxcbiAgICBDb25uZWN0aW9uVG9rZW5zOiBUZXJtaW5hbENvbm5lY3Rpb25Ub2tlbnMsXG4gICAgTG9jYXRpb25zOiBUZXJtaW5hbExvY2F0aW9ucyxcbiAgICBPbmJvYXJkaW5nTGlua3M6IFRlcm1pbmFsT25ib2FyZGluZ0xpbmtzLFxuICAgIFJlYWRlcnM6IFRlcm1pbmFsUmVhZGVycyxcbn0pO1xuZXhwb3J0IGNvbnN0IFRlc3RIZWxwZXJzID0gcmVzb3VyY2VOYW1lc3BhY2UoJ3Rlc3RIZWxwZXJzJywge1xuICAgIENvbmZpcm1hdGlvblRva2VuczogVGVzdEhlbHBlcnNDb25maXJtYXRpb25Ub2tlbnMsXG4gICAgQ3VzdG9tZXJzOiBUZXN0SGVscGVyc0N1c3RvbWVycyxcbiAgICBSZWZ1bmRzOiBUZXN0SGVscGVyc1JlZnVuZHMsXG4gICAgVGVzdENsb2NrczogVGVzdEhlbHBlcnNUZXN0Q2xvY2tzLFxuICAgIElzc3Vpbmc6IHJlc291cmNlTmFtZXNwYWNlKCdpc3N1aW5nJywge1xuICAgICAgICBBdXRob3JpemF0aW9uczogVGVzdEhlbHBlcnNJc3N1aW5nQXV0aG9yaXphdGlvbnMsXG4gICAgICAgIENhcmRzOiBUZXN0SGVscGVyc0lzc3VpbmdDYXJkcyxcbiAgICAgICAgUGVyc29uYWxpemF0aW9uRGVzaWduczogVGVzdEhlbHBlcnNJc3N1aW5nUGVyc29uYWxpemF0aW9uRGVzaWducyxcbiAgICAgICAgVHJhbnNhY3Rpb25zOiBUZXN0SGVscGVyc0lzc3VpbmdUcmFuc2FjdGlvbnMsXG4gICAgfSksXG4gICAgVGVybWluYWw6IHJlc291cmNlTmFtZXNwYWNlKCd0ZXJtaW5hbCcsIHtcbiAgICAgICAgUmVhZGVyczogVGVzdEhlbHBlcnNUZXJtaW5hbFJlYWRlcnMsXG4gICAgfSksXG4gICAgVHJlYXN1cnk6IHJlc291cmNlTmFtZXNwYWNlKCd0cmVhc3VyeScsIHtcbiAgICAgICAgSW5ib3VuZFRyYW5zZmVyczogVGVzdEhlbHBlcnNUcmVhc3VyeUluYm91bmRUcmFuc2ZlcnMsXG4gICAgICAgIE91dGJvdW5kUGF5bWVudHM6IFRlc3RIZWxwZXJzVHJlYXN1cnlPdXRib3VuZFBheW1lbnRzLFxuICAgICAgICBPdXRib3VuZFRyYW5zZmVyczogVGVzdEhlbHBlcnNUcmVhc3VyeU91dGJvdW5kVHJhbnNmZXJzLFxuICAgICAgICBSZWNlaXZlZENyZWRpdHM6IFRlc3RIZWxwZXJzVHJlYXN1cnlSZWNlaXZlZENyZWRpdHMsXG4gICAgICAgIFJlY2VpdmVkRGViaXRzOiBUZXN0SGVscGVyc1RyZWFzdXJ5UmVjZWl2ZWREZWJpdHMsXG4gICAgfSksXG59KTtcbmV4cG9ydCBjb25zdCBUcmVhc3VyeSA9IHJlc291cmNlTmFtZXNwYWNlKCd0cmVhc3VyeScsIHtcbiAgICBDcmVkaXRSZXZlcnNhbHM6IFRyZWFzdXJ5Q3JlZGl0UmV2ZXJzYWxzLFxuICAgIERlYml0UmV2ZXJzYWxzOiBUcmVhc3VyeURlYml0UmV2ZXJzYWxzLFxuICAgIEZpbmFuY2lhbEFjY291bnRzOiBUcmVhc3VyeUZpbmFuY2lhbEFjY291bnRzLFxuICAgIEluYm91bmRUcmFuc2ZlcnM6IFRyZWFzdXJ5SW5ib3VuZFRyYW5zZmVycyxcbiAgICBPdXRib3VuZFBheW1lbnRzOiBUcmVhc3VyeU91dGJvdW5kUGF5bWVudHMsXG4gICAgT3V0Ym91bmRUcmFuc2ZlcnM6IFRyZWFzdXJ5T3V0Ym91bmRUcmFuc2ZlcnMsXG4gICAgUmVjZWl2ZWRDcmVkaXRzOiBUcmVhc3VyeVJlY2VpdmVkQ3JlZGl0cyxcbiAgICBSZWNlaXZlZERlYml0czogVHJlYXN1cnlSZWNlaXZlZERlYml0cyxcbiAgICBUcmFuc2FjdGlvbkVudHJpZXM6IFRyZWFzdXJ5VHJhbnNhY3Rpb25FbnRyaWVzLFxuICAgIFRyYW5zYWN0aW9uczogVHJlYXN1cnlUcmFuc2FjdGlvbnMsXG59KTtcbmV4cG9ydCBjb25zdCBWMiA9IHJlc291cmNlTmFtZXNwYWNlKCd2MicsIHtcbiAgICBCaWxsaW5nOiByZXNvdXJjZU5hbWVzcGFjZSgnYmlsbGluZycsIHtcbiAgICAgICAgTWV0ZXJFdmVudEFkanVzdG1lbnRzOiBWMkJpbGxpbmdNZXRlckV2ZW50QWRqdXN0bWVudHMsXG4gICAgICAgIE1ldGVyRXZlbnRTZXNzaW9uOiBWMkJpbGxpbmdNZXRlckV2ZW50U2Vzc2lvbixcbiAgICAgICAgTWV0ZXJFdmVudFN0cmVhbTogVjJCaWxsaW5nTWV0ZXJFdmVudFN0cmVhbSxcbiAgICAgICAgTWV0ZXJFdmVudHM6IFYyQmlsbGluZ01ldGVyRXZlbnRzLFxuICAgIH0pLFxuICAgIENvcmU6IHJlc291cmNlTmFtZXNwYWNlKCdjb3JlJywge1xuICAgICAgICBBY2NvdW50TGlua3M6IFYyQ29yZUFjY291bnRMaW5rcyxcbiAgICAgICAgQWNjb3VudFRva2VuczogVjJDb3JlQWNjb3VudFRva2VucyxcbiAgICAgICAgQWNjb3VudHM6IFYyQ29yZUFjY291bnRzLFxuICAgICAgICBFdmVudERlc3RpbmF0aW9uczogVjJDb3JlRXZlbnREZXN0aW5hdGlvbnMsXG4gICAgICAgIEV2ZW50czogVjJDb3JlRXZlbnRzLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gUmVzb3VyY2VOYW1lc3BhY2UgYWxsb3dzIHlvdSB0byBjcmVhdGUgbmVzdGVkIHJlc291cmNlcywgaS5lLiBgc3RyaXBlLmlzc3VpbmcuY2FyZHNgLlxuLy8gSXQgYWxzbyB3b3JrcyByZWN1cnNpdmVseSwgc28geW91IGNvdWxkIGRvIGkuZS4gYHN0cmlwZS5iaWxsaW5nLmludm9pY2luZy5wYXlgLlxuZnVuY3Rpb24gUmVzb3VyY2VOYW1lc3BhY2Uoc3RyaXBlLCByZXNvdXJjZXMpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gcmVzb3VyY2VzKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc291cmNlcywgbmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbWVsQ2FzZU5hbWUgPSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBuZXcgcmVzb3VyY2VzW25hbWVdKHN0cmlwZSk7XG4gICAgICAgIHRoaXNbY2FtZWxDYXNlTmFtZV0gPSByZXNvdXJjZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VOYW1lc3BhY2UobmFtZXNwYWNlLCByZXNvdXJjZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cmlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlTmFtZXNwYWNlKHN0cmlwZSwgcmVzb3VyY2VzKTtcbiAgICB9O1xufVxuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudExpbmtzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRfbGlua3MnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBY2NvdW50VG9rZW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRfdG9rZW5zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50X3Rva2Vucy97aWR9JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maW5hbmNpYWxfY29ubmVjdGlvbnMvYWNjb3VudHMve2FjY291bnR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maW5hbmNpYWxfY29ubmVjdGlvbnMvYWNjb3VudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGlzY29ubmVjdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9hY2NvdW50cy97YWNjb3VudH0vZGlzY29ubmVjdCcsXG4gICAgfSksXG4gICAgbGlzdE93bmVyczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL2FjY291bnRzL3thY2NvdW50fS9vd25lcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmVmcmVzaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9hY2NvdW50cy97YWNjb3VudH0vcmVmcmVzaCcsXG4gICAgfSksXG4gICAgc3Vic2NyaWJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL2FjY291bnRzL3thY2NvdW50fS9zdWJzY3JpYmUnLFxuICAgIH0pLFxuICAgIHVuc3Vic2NyaWJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL2FjY291bnRzL3thY2NvdW50fS91bnN1YnNjcmliZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBlcnNvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3thY2NvdW50X2lkfS9wZXJzb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbnMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50cy97YWNjb3VudF9pZH0vcGVyc29ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbnMve2lkfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBlcnNvblRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50cy97YWNjb3VudF9pZH0vcGVyc29uX3Rva2VucycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbl90b2tlbnMve2lkfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuaW1wb3J0IHsgUGVyc29ucyB9IGZyb20gJy4vQWNjb3VudHMvUGVyc29ucy5qcyc7XG5pbXBvcnQgeyBQZXJzb25Ub2tlbnMgfSBmcm9tICcuL0FjY291bnRzL1BlcnNvblRva2Vucy5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBTdHJpcGVSZXNvdXJjZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gbmV3IFBlcnNvbnMoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucGVyc29uVG9rZW5zID0gbmV3IFBlcnNvblRva2VucyguLi5hcmdzKTtcbiAgICB9LFxuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3tpZH0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjbG9zZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2lkfS9jbG9zZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEFjdGl2ZUVudGl0bGVtZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2VudGl0bGVtZW50cy9hY3RpdmVfZW50aXRsZW1lbnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2VudGl0bGVtZW50cy9hY3RpdmVfZW50aXRsZW1lbnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBbGVydHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvYWxlcnRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9hbGVydHMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9hbGVydHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYWN0aXZhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2FsZXJ0cy97aWR9L2FjdGl2YXRlJyxcbiAgICB9KSxcbiAgICBhcmNoaXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9hbGVydHMve2lkfS9hcmNoaXZlJyxcbiAgICB9KSxcbiAgICBkZWFjdGl2YXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9hbGVydHMve2lkfS9kZWFjdGl2YXRlJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBmaW5kOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS90YXgvYXNzb2NpYXRpb25zL2ZpbmQnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBdXRob3JpemF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9hdXRob3JpemF0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBhcHByb3ZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0vYXBwcm92ZScsXG4gICAgfSksXG4gICAgZGVjbGluZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2RlY2xpbmUnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBdXRob3JpemF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMnLFxuICAgIH0pLFxuICAgIGNhcHR1cmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0vY2FwdHVyZScsXG4gICAgfSksXG4gICAgZXhwaXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2V4cGlyZScsXG4gICAgfSksXG4gICAgZmluYWxpemVBbW91bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0vZmluYWxpemVfYW1vdW50JyxcbiAgICB9KSxcbiAgICBpbmNyZW1lbnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0vaW5jcmVtZW50JyxcbiAgICB9KSxcbiAgICByZXNwb25kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2ZyYXVkX2NoYWxsZW5nZXMvcmVzcG9uZCcsXG4gICAgfSksXG4gICAgcmV2ZXJzZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufS9yZXZlcnNlJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ2FsY3VsYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90YXgvY2FsY3VsYXRpb25zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L2NhbGN1bGF0aW9ucy97Y2FsY3VsYXRpb259JyxcbiAgICB9KSxcbiAgICBsaXN0TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90YXgvY2FsY3VsYXRpb25zL3tjYWxjdWxhdGlvbn0vbGluZV9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ2FyZGhvbGRlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvY2FyZGhvbGRlcnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRob2xkZXJzL3tjYXJkaG9sZGVyfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9jYXJkaG9sZGVycy97Y2FyZGhvbGRlcn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvY2FyZGhvbGRlcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENhcmRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9jYXJkcy97Y2FyZH0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvY2FyZHMve2NhcmR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDYXJkcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgZGVsaXZlckNhcmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9jYXJkcy97Y2FyZH0vc2hpcHBpbmcvZGVsaXZlcicsXG4gICAgfSksXG4gICAgZmFpbENhcmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9jYXJkcy97Y2FyZH0vc2hpcHBpbmcvZmFpbCcsXG4gICAgfSksXG4gICAgcmV0dXJuQ2FyZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2NhcmRzL3tjYXJkfS9zaGlwcGluZy9yZXR1cm4nLFxuICAgIH0pLFxuICAgIHNoaXBDYXJkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvY2FyZHMve2NhcmR9L3NoaXBwaW5nL3NoaXAnLFxuICAgIH0pLFxuICAgIHN1Ym1pdENhcmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9jYXJkcy97Y2FyZH0vc2hpcHBpbmcvc3VibWl0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ29uZmlndXJhdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmdfcG9ydGFsL2NvbmZpZ3VyYXRpb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZ19wb3J0YWwvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nX3BvcnRhbC9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmdfcG9ydGFsL2NvbmZpZ3VyYXRpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDb25maWd1cmF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvY29uZmlndXJhdGlvbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvY29uZmlndXJhdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Ub2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9jb25maXJtYXRpb25fdG9rZW5zJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ29ubmVjdGlvblRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvY29ubmVjdGlvbl90b2tlbnMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDcmVkaXRCYWxhbmNlU3VtbWFyeSA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvY3JlZGl0X2JhbGFuY2Vfc3VtbWFyeScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENyZWRpdEJhbGFuY2VUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9iYWxhbmNlX3RyYW5zYWN0aW9ucy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9iYWxhbmNlX3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3JlZGl0R3JhbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9ncmFudHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9ncmFudHMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfZ3JhbnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvY3JlZGl0X2dyYW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBleHBpcmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9ncmFudHMve2lkfS9leHBpcmUnLFxuICAgIH0pLFxuICAgIHZvaWRHcmFudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvY3JlZGl0X2dyYW50cy97aWR9L3ZvaWQnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDcmVkaXRSZXZlcnNhbHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2NyZWRpdF9yZXZlcnNhbHMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9jcmVkaXRfcmV2ZXJzYWxzL3tjcmVkaXRfcmV2ZXJzYWx9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9jcmVkaXRfcmV2ZXJzYWxzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDdXN0b21lcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGZ1bmRDYXNoQmFsYW5jZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9jdXN0b21lcnMve2N1c3RvbWVyfS9mdW5kX2Nhc2hfYmFsYW5jZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IERlYml0UmV2ZXJzYWxzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9kZWJpdF9yZXZlcnNhbHMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9kZWJpdF9yZXZlcnNhbHMve2RlYml0X3JldmVyc2FsfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZGViaXRfcmV2ZXJzYWxzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBEaXNwdXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9kaXNwdXRlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvZGlzcHV0ZXMve2Rpc3B1dGV9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2Rpc3B1dGVzL3tkaXNwdXRlfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9kaXNwdXRlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBzdWJtaXQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2Rpc3B1dGVzL3tkaXNwdXRlfS9zdWJtaXQnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFYXJseUZyYXVkV2FybmluZ3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci9lYXJseV9mcmF1ZF93YXJuaW5ncy97ZWFybHlfZnJhdWRfd2FybmluZ30nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL2Vhcmx5X2ZyYXVkX3dhcm5pbmdzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFdmVudERlc3RpbmF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucy97aWR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvZXZlbnRfZGVzdGluYXRpb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIGRpc2FibGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucy97aWR9L2Rpc2FibGUnLFxuICAgIH0pLFxuICAgIGVuYWJsZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvZXZlbnRfZGVzdGluYXRpb25zL3tpZH0vZW5hYmxlJyxcbiAgICB9KSxcbiAgICBwaW5nOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMve2lkfS9waW5nJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIFRoaXMgZmlsZSBpcyBtYW51YWxseSBtYWludGFpbmVkXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFdmVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtUmVzcG9uc2VEYXRhID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRGZXRjaFJlbGF0ZWRPYmplY3RJZk5lZWRlZChyZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvZXZlbnRzL3tpZH0nLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2VEYXRhLFxuICAgICAgICB9KS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LFxuICAgIGxpc3QoLi4uYXJncykge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1SZXNwb25zZURhdGEgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlKSwgeyBkYXRhOiByZXNwb25zZS5kYXRhLm1hcCh0aGlzLmFkZEZldGNoUmVsYXRlZE9iamVjdElmTmVlZGVkLmJpbmQodGhpcykpIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50cycsXG4gICAgICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZURhdGEsXG4gICAgICAgIH0pLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEZvciBpbnRlcm5hbCB1c2UgaW4gc3RyaXBlLW5vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHVsbGVkRXZlbnQgVGhlIHJldHJpZXZlZCBldmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBUaGUgcmV0cmlldmVkIGV2ZW50IG9iamVjdCB3aXRoIGEgZmV0Y2hSZWxhdGVkT2JqZWN0IG1ldGhvZCxcbiAgICAgKiBpZiBwdWxsZWRFdmVudC5yZWxhdGVkX29iamVjdCBpcyB2YWxpZCAobm9uLW51bGwgYW5kIGhhcyBhIHVybClcbiAgICAgKi9cbiAgICBhZGRGZXRjaFJlbGF0ZWRPYmplY3RJZk5lZWRlZChwdWxsZWRFdmVudCkge1xuICAgICAgICBpZiAoIXB1bGxlZEV2ZW50LnJlbGF0ZWRfb2JqZWN0IHx8ICFwdWxsZWRFdmVudC5yZWxhdGVkX29iamVjdC51cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBwdWxsZWRFdmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwdWxsZWRFdmVudCksIHsgZmV0Y2hSZWxhdGVkT2JqZWN0OiAoKSA9PiBcbiAgICAgICAgICAgIC8vIGNhbGwgc3RyaXBlTWV0aG9kIHdpdGggJ3RoaXMnIHJlc291cmNlIHRvIGZldGNoXG4gICAgICAgICAgICAvLyB0aGUgcmVsYXRlZCBvYmplY3QuICd0aGlzJyBpcyBuZWVkZWQgdG8gY29uc3RydWN0XG4gICAgICAgICAgICAvLyBhbmQgc2VuZCB0aGUgcmVxdWVzdCwgYnV0IHRoZSBtZXRob2Qgc3BlYyBjb250cm9sc1xuICAgICAgICAgICAgLy8gdGhlIHVybCBlbmRwb2ludCBhbmQgbWV0aG9kLCBzbyBpdCBkb2Vzbid0IG1hdHRlclxuICAgICAgICAgICAgLy8gdGhhdCAndGhpcycgaXMgYW4gRXZlbnRzIHJlc291cmNlIG9iamVjdCBoZXJlXG4gICAgICAgICAgICBzdHJpcGVNZXRob2Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgZnVsbFBhdGg6IHB1bGxlZEV2ZW50LnJlbGF0ZWRfb2JqZWN0LnVybCxcbiAgICAgICAgICAgIH0pLmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZUNvbnRleHQ6IHB1bGxlZEV2ZW50LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pIH0pO1xuICAgIH0sXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEZlYXR1cmVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9lbnRpdGxlbWVudHMvZmVhdHVyZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9lbnRpdGxlbWVudHMvZmVhdHVyZXMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZW50aXRsZW1lbnRzL2ZlYXR1cmVzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2VudGl0bGVtZW50cy9mZWF0dXJlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRmluYW5jaWFsQWNjb3VudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cy97ZmluYW5jaWFsX2FjY291bnR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9maW5hbmNpYWxfYWNjb3VudHMve2ZpbmFuY2lhbF9hY2NvdW50fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZmluYW5jaWFsX2FjY291bnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNsb3NlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZmluYW5jaWFsX2FjY291bnRzL3tmaW5hbmNpYWxfYWNjb3VudH0vY2xvc2UnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlRmVhdHVyZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cy97ZmluYW5jaWFsX2FjY291bnR9L2ZlYXR1cmVzJyxcbiAgICB9KSxcbiAgICB1cGRhdGVGZWF0dXJlczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cy97ZmluYW5jaWFsX2FjY291bnR9L2ZlYXR1cmVzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgSW5ib3VuZFRyYW5zZmVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgZmFpbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycy97aWR9L2ZhaWwnLFxuICAgIH0pLFxuICAgIHJldHVybkluYm91bmRUcmFuc2Zlcjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycy97aWR9L3JldHVybicsXG4gICAgfSksXG4gICAgc3VjY2VlZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycy97aWR9L3N1Y2NlZWQnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBJbmJvdW5kVHJhbnNmZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2luYm91bmRfdHJhbnNmZXJzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2luYm91bmRfdHJhbnNmZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2luYm91bmRfdHJhbnNmZXJzL3tpbmJvdW5kX3RyYW5zZmVyfS9jYW5jZWwnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2xvY2F0aW9ucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2xvY2F0aW9ucy97bG9jYXRpb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9sb2NhdGlvbnMve2xvY2F0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvbG9jYXRpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvbG9jYXRpb25zL3tsb2NhdGlvbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlckV2ZW50QWRqdXN0bWVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJfZXZlbnRfYWRqdXN0bWVudHMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlckV2ZW50QWRqdXN0bWVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2JpbGxpbmcvbWV0ZXJfZXZlbnRfYWRqdXN0bWVudHMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlckV2ZW50U2Vzc2lvbiA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvYmlsbGluZy9tZXRlcl9ldmVudF9zZXNzaW9uJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudFN0cmVhbSA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvYmlsbGluZy9tZXRlcl9ldmVudF9zdHJlYW0nLFxuICAgICAgICBob3N0OiAnbWV0ZXItZXZlbnRzLnN0cmlwZS5jb20nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlckV2ZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcl9ldmVudHMnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlckV2ZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjIvYmlsbGluZy9tZXRlcl9ldmVudHMnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNZXRlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcnMve2lkfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcnMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVhY3RpdmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzL3tpZH0vZGVhY3RpdmF0ZScsXG4gICAgfSksXG4gICAgbGlzdEV2ZW50U3VtbWFyaWVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL21ldGVycy97aWR9L2V2ZW50X3N1bW1hcmllcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZWFjdGl2YXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcnMve2lkfS9yZWFjdGl2YXRlJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgT25ib2FyZGluZ0xpbmtzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9vbmJvYXJkaW5nX2xpbmtzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgT3JkZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jbGltYXRlL29yZGVycycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NsaW1hdGUvb3JkZXJzL3tvcmRlcn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NsaW1hdGUvb3JkZXJzL3tvcmRlcn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NsaW1hdGUvb3JkZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NsaW1hdGUvb3JkZXJzL3tvcmRlcn0vY2FuY2VsJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgT3V0Ym91bmRQYXltZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3BheW1lbnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGZhaWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvb3V0Ym91bmRfcGF5bWVudHMve2lkfS9mYWlsJyxcbiAgICB9KSxcbiAgICBwb3N0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3BheW1lbnRzL3tpZH0vcG9zdCcsXG4gICAgfSksXG4gICAgcmV0dXJuT3V0Ym91bmRQYXltZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3BheW1lbnRzL3tpZH0vcmV0dXJuJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgT3V0Ym91bmRQYXltZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfcGF5bWVudHMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cy97aWR9L2NhbmNlbCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE91dGJvdW5kVHJhbnNmZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzL3tvdXRib3VuZF90cmFuc2Zlcn0nLFxuICAgIH0pLFxuICAgIGZhaWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzL3tvdXRib3VuZF90cmFuc2Zlcn0vZmFpbCcsXG4gICAgfSksXG4gICAgcG9zdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9vdXRib3VuZF90cmFuc2ZlcnMve291dGJvdW5kX3RyYW5zZmVyfS9wb3N0JyxcbiAgICB9KSxcbiAgICByZXR1cm5PdXRib3VuZFRyYW5zZmVyOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3RyYW5zZmVycy97b3V0Ym91bmRfdHJhbnNmZXJ9L3JldHVybicsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE91dGJvdW5kVHJhbnNmZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF90cmFuc2ZlcnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF90cmFuc2ZlcnMve291dGJvdW5kX3RyYW5zZmVyfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L291dGJvdW5kX3RyYW5zZmVycy97b3V0Ym91bmRfdHJhbnNmZXJ9L2NhbmNlbCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRFdmFsdWF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvcGF5bWVudF9ldmFsdWF0aW9ucycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBlcnNvbmFsaXphdGlvbkRlc2lnbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvcGVyc29uYWxpemF0aW9uX2Rlc2lnbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zL3twZXJzb25hbGl6YXRpb25fZGVzaWdufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9wZXJzb25hbGl6YXRpb25fZGVzaWducy97cGVyc29uYWxpemF0aW9uX2Rlc2lnbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvcGVyc29uYWxpemF0aW9uX2Rlc2lnbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBlcnNvbmFsaXphdGlvbkRlc2lnbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGFjdGl2YXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvcGVyc29uYWxpemF0aW9uX2Rlc2lnbnMve3BlcnNvbmFsaXphdGlvbl9kZXNpZ259L2FjdGl2YXRlJyxcbiAgICB9KSxcbiAgICBkZWFjdGl2YXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvcGVyc29uYWxpemF0aW9uX2Rlc2lnbnMve3BlcnNvbmFsaXphdGlvbl9kZXNpZ259L2RlYWN0aXZhdGUnLFxuICAgIH0pLFxuICAgIHJlamVjdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zL3twZXJzb25hbGl6YXRpb25fZGVzaWdufS9yZWplY3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQaHlzaWNhbEJ1bmRsZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3BoeXNpY2FsX2J1bmRsZXMve3BoeXNpY2FsX2J1bmRsZX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvcGh5c2ljYWxfYnVuZGxlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUHJvZHVjdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL3Byb2R1Y3RzL3twcm9kdWN0fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2xpbWF0ZS9wcm9kdWN0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVhZGVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9JyxcbiAgICB9KSxcbiAgICBjYW5jZWxBY3Rpb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L2NhbmNlbF9hY3Rpb24nLFxuICAgIH0pLFxuICAgIGNvbGxlY3RJbnB1dHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L2NvbGxlY3RfaW5wdXRzJyxcbiAgICB9KSxcbiAgICBjb2xsZWN0UGF5bWVudE1ldGhvZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vY29sbGVjdF9wYXltZW50X21ldGhvZCcsXG4gICAgfSksXG4gICAgY29uZmlybVBheW1lbnRJbnRlbnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L2NvbmZpcm1fcGF5bWVudF9pbnRlbnQnLFxuICAgIH0pLFxuICAgIHByb2Nlc3NQYXltZW50SW50ZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9wcm9jZXNzX3BheW1lbnRfaW50ZW50JyxcbiAgICB9KSxcbiAgICBwcm9jZXNzU2V0dXBJbnRlbnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L3Byb2Nlc3Nfc2V0dXBfaW50ZW50JyxcbiAgICB9KSxcbiAgICByZWZ1bmRQYXltZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9yZWZ1bmRfcGF5bWVudCcsXG4gICAgfSksXG4gICAgc2V0UmVhZGVyRGlzcGxheTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vc2V0X3JlYWRlcl9kaXNwbGF5JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVhZGVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcHJlc2VudFBheW1lbnRNZXRob2Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9wcmVzZW50X3BheW1lbnRfbWV0aG9kJyxcbiAgICB9KSxcbiAgICBzdWNjZWVkSW5wdXRDb2xsZWN0aW9uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vc3VjY2VlZF9pbnB1dF9jb2xsZWN0aW9uJyxcbiAgICB9KSxcbiAgICB0aW1lb3V0SW5wdXRDb2xsZWN0aW9uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vdGltZW91dF9pbnB1dF9jb2xsZWN0aW9uJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVjZWl2ZWRDcmVkaXRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvcmVjZWl2ZWRfY3JlZGl0cycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlY2VpdmVkQ3JlZGl0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L3JlY2VpdmVkX2NyZWRpdHMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvcmVjZWl2ZWRfY3JlZGl0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVjZWl2ZWREZWJpdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9yZWNlaXZlZF9kZWJpdHMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZWNlaXZlZERlYml0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L3JlY2VpdmVkX2RlYml0cy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9yZWNlaXZlZF9kZWJpdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlZnVuZHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGV4cGlyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9yZWZ1bmRzL3tyZWZ1bmR9L2V4cGlyZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RheC9yZWdpc3RyYXRpb25zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3JlZ2lzdHJhdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3JlZ2lzdHJhdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3JlZ2lzdHJhdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlcG9ydFJ1bnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3JlcG9ydGluZy9yZXBvcnRfcnVucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JlcG9ydGluZy9yZXBvcnRfcnVucy97cmVwb3J0X3J1bn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JlcG9ydGluZy9yZXBvcnRfcnVucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVwb3J0VHlwZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yZXBvcnRpbmcvcmVwb3J0X3R5cGVzL3tyZXBvcnRfdHlwZX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JlcG9ydGluZy9yZXBvcnRfdHlwZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlcXVlc3RzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9mb3J3YXJkaW5nL3JlcXVlc3RzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZm9yd2FyZGluZy9yZXF1ZXN0cy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9mb3J3YXJkaW5nL3JlcXVlc3RzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTY2hlZHVsZWRRdWVyeVJ1bnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zaWdtYS9zY2hlZHVsZWRfcXVlcnlfcnVucy97c2NoZWR1bGVkX3F1ZXJ5X3J1bn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NpZ21hL3NjaGVkdWxlZF9xdWVyeV9ydW5zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTZWNyZXRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hcHBzL3NlY3JldHMnIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcHMvc2VjcmV0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWxldGVXaGVyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcHMvc2VjcmV0cy9kZWxldGUnLFxuICAgIH0pLFxuICAgIGZpbmQ6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2FwcHMvc2VjcmV0cy9maW5kJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2Vzc2lvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmdfcG9ydGFsL3Nlc3Npb25zJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2Vzc2lvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2NoZWNrb3V0L3Nlc3Npb25zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2hlY2tvdXQvc2Vzc2lvbnMve3Nlc3Npb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jaGVja291dC9zZXNzaW9ucy97c2Vzc2lvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoZWNrb3V0L3Nlc3Npb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGV4cGlyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoZWNrb3V0L3Nlc3Npb25zL3tzZXNzaW9ufS9leHBpcmUnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoZWNrb3V0L3Nlc3Npb25zL3tzZXNzaW9ufS9saW5lX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTZXNzaW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL3Nlc3Npb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL3Nlc3Npb25zL3tzZXNzaW9ufScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdGF4L3NldHRpbmdzJyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90YXgvc2V0dGluZ3MnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTdXBwbGllcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL3N1cHBsaWVycy97c3VwcGxpZXJ9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL3N1cHBsaWVycycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVGVzdENsb2NrcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlc3RfY2xvY2tzJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlc3RfY2xvY2tzL3t0ZXN0X2Nsb2NrfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlc3RfY2xvY2tzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlc3RfY2xvY2tzL3t0ZXN0X2Nsb2NrfScsXG4gICAgfSksXG4gICAgYWR2YW5jZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXN0X2Nsb2Nrcy97dGVzdF9jbG9ja30vYWR2YW5jZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdG9rZW5zL3t0b2tlbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdG9rZW5zL3t0b2tlbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdG9rZW5zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkVudHJpZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS90cmFuc2FjdGlvbl9lbnRyaWVzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L3RyYW5zYWN0aW9uX2VudHJpZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy90cmFuc2FjdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgY3JlYXRlRnJvbUNhbGN1bGF0aW9uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3RyYW5zYWN0aW9ucy9jcmVhdGVfZnJvbV9jYWxjdWxhdGlvbicsXG4gICAgfSksXG4gICAgY3JlYXRlUmV2ZXJzYWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90YXgvdHJhbnNhY3Rpb25zL2NyZWF0ZV9yZXZlcnNhbCcsXG4gICAgfSksXG4gICAgbGlzdExpbmVJdGVtczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3RyYW5zYWN0aW9ucy97dHJhbnNhY3Rpb259L2xpbmVfaXRlbXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlRm9yY2VDYXB0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvdHJhbnNhY3Rpb25zL2NyZWF0ZV9mb3JjZV9jYXB0dXJlJyxcbiAgICB9KSxcbiAgICBjcmVhdGVVbmxpbmtlZFJlZnVuZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL3RyYW5zYWN0aW9ucy9jcmVhdGVfdW5saW5rZWRfcmVmdW5kJyxcbiAgICB9KSxcbiAgICByZWZ1bmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufS9yZWZ1bmQnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS90cmFuc2FjdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBWYWx1ZUxpc3RJdGVtcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdF9pdGVtcycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RfaXRlbXMve2l0ZW19JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0X2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdF9pdGVtcy97aXRlbX0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBWYWx1ZUxpc3RzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RzL3t2YWx1ZV9saXN0fScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdHMve3ZhbHVlX2xpc3R9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RzL3t2YWx1ZV9saXN0fScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFZlcmlmaWNhdGlvblJlcG9ydHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fcmVwb3J0cy97cmVwb3J0fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3JlcG9ydHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFZlcmlmaWNhdGlvblNlc3Npb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fc2Vzc2lvbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fc2Vzc2lvbnMve3Nlc3Npb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fc2Vzc2lvbnMve3Nlc3Npb259JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fc2Vzc2lvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3Nlc3Npb25zL3tzZXNzaW9ufS9jYW5jZWwnLFxuICAgIH0pLFxuICAgIHJlZGFjdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lkZW50aXR5L3ZlcmlmaWNhdGlvbl9zZXNzaW9ucy97c2Vzc2lvbn0vcmVkYWN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG4vLyBTaW5jZSBwYXRoIGNhbiBlaXRoZXIgYmUgYGFjY291bnRgIG9yIGBhY2NvdW50c2AsIHN1cHBvcnQgYm90aCB0aHJvdWdoIHN0cmlwZU1ldGhvZCBwYXRoXG5leHBvcnQgY29uc3QgQWNjb3VudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzJyB9KSxcbiAgICByZXRyaWV2ZShpZCwgLi4uYXJncykge1xuICAgICAgICAvLyBObyBsb25nZXIgYWxsb3cgYW4gYXBpIGtleSB0byBiZSBwYXNzZWQgYXMgdGhlIGZpcnN0IHN0cmluZyB0byB0aGlzIGZ1bmN0aW9uIGR1ZSB0byBhbWJpZ3VpdHkgYmV0d2VlblxuICAgICAgICAvLyBvbGQgYWNjb3VudCBpZHMgYW5kIGFwaSBrZXlzLiBUbyByZXF1ZXN0IHRoZSBhY2NvdW50IGZvciBhbiBhcGkga2V5LCBzZW5kIG51bGwgYXMgdGhlIGlkXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3tpZH0nLFxuICAgICAgICAgICAgfSkuYXBwbHkodGhpcywgW2lkLCAuLi5hcmdzXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpZCBhcyBzdHJpcGVNZXRob2Qgd291bGQgY29tcGxhaW4gb2YgdW5leHBlY3RlZCBhcmd1bWVudFxuICAgICAgICAgICAgICAgIFtdLnNoaWZ0LmFwcGx5KFtpZCwgLi4uYXJnc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZU1ldGhvZCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50JyxcbiAgICAgICAgICAgIH0pLmFwcGx5KHRoaXMsIFtpZCwgLi4uYXJnc10pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9JyB9KSxcbiAgICBjcmVhdGVFeHRlcm5hbEFjY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vZXh0ZXJuYWxfYWNjb3VudHMnLFxuICAgIH0pLFxuICAgIGNyZWF0ZUxvZ2luTGluazogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9sb2dpbl9saW5rcycsXG4gICAgfSksXG4gICAgY3JlYXRlUGVyc29uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3BlcnNvbnMnLFxuICAgIH0pLFxuICAgIGRlbGV0ZUV4dGVybmFsQWNjb3VudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L2V4dGVybmFsX2FjY291bnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGRlbGV0ZVBlcnNvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3BlcnNvbnMve3BlcnNvbn0nLFxuICAgIH0pLFxuICAgIGxpc3RDYXBhYmlsaXRpZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9jYXBhYmlsaXRpZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgbGlzdEV4dGVybmFsQWNjb3VudHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9leHRlcm5hbF9hY2NvdW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0UGVyc29uczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3BlcnNvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmVqZWN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3JlamVjdCcsXG4gICAgfSksXG4gICAgcmV0cmlldmVDdXJyZW50OiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9hY2NvdW50JyB9KSxcbiAgICByZXRyaWV2ZUNhcGFiaWxpdHk6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9jYXBhYmlsaXRpZXMve2NhcGFiaWxpdHl9JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUV4dGVybmFsQWNjb3VudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L2V4dGVybmFsX2FjY291bnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIHJldHJpZXZlUGVyc29uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vcGVyc29ucy97cGVyc29ufScsXG4gICAgfSksXG4gICAgdXBkYXRlQ2FwYWJpbGl0eTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9jYXBhYmlsaXRpZXMve2NhcGFiaWxpdHl9JyxcbiAgICB9KSxcbiAgICB1cGRhdGVFeHRlcm5hbEFjY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vZXh0ZXJuYWxfYWNjb3VudHMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlUGVyc29uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3BlcnNvbnMve3BlcnNvbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBY2NvdW50TGlua3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRfbGlua3MnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBY2NvdW50U2Vzc2lvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRfc2Vzc2lvbnMnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBcHBsZVBheURvbWFpbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2FwcGxlX3BheS9kb21haW5zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGVfcGF5L2RvbWFpbnMve2RvbWFpbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxlX3BheS9kb21haW5zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGVfcGF5L2RvbWFpbnMve2RvbWFpbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbkZlZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBsaWNhdGlvbl9mZWVzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxpY2F0aW9uX2ZlZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY3JlYXRlUmVmdW5kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGljYXRpb25fZmVlcy97aWR9L3JlZnVuZHMnLFxuICAgIH0pLFxuICAgIGxpc3RSZWZ1bmRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBsaWNhdGlvbl9mZWVzL3tpZH0vcmVmdW5kcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVJlZnVuZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGljYXRpb25fZmVlcy97ZmVlfS9yZWZ1bmRzL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZVJlZnVuZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxpY2F0aW9uX2ZlZXMve2ZlZX0vcmVmdW5kcy97aWR9JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQmFsYW5jZSA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2JhbGFuY2UnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBCYWxhbmNlU2V0dGluZ3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9iYWxhbmNlX3NldHRpbmdzJyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9iYWxhbmNlX3NldHRpbmdzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQmFsYW5jZVRyYW5zYWN0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JhbGFuY2VfdHJhbnNhY3Rpb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JhbGFuY2VfdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDaGFyZ2VzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jaGFyZ2VzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvY2hhcmdlcy97Y2hhcmdlfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY2hhcmdlcy97Y2hhcmdlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2hhcmdlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYXB0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2hhcmdlcy97Y2hhcmdlfS9jYXB0dXJlJyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoYXJnZXMvc2VhcmNoJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ3NlYXJjaCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NvbmZpcm1hdGlvbl90b2tlbnMve2NvbmZpcm1hdGlvbl90b2tlbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDb3VudHJ5U3BlY3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jb3VudHJ5X3NwZWNzL3tjb3VudHJ5fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY291bnRyeV9zcGVjcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ291cG9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY291cG9ucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2NvdXBvbnMve2NvdXBvbn0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2NvdXBvbnMve2NvdXBvbn0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NvdXBvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS9jb3Vwb25zL3tjb3Vwb259JyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3JlZGl0Tm90ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2NyZWRpdF9ub3RlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2NyZWRpdF9ub3Rlcy97aWR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3JlZGl0X25vdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NyZWRpdF9ub3Rlcy97Y3JlZGl0X25vdGV9L2xpbmVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RQcmV2aWV3TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMvcHJldmlldy9saW5lcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBwcmV2aWV3OiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMvcHJldmlldycgfSksXG4gICAgdm9pZENyZWRpdE5vdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMve2lkfS92b2lkJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3VzdG9tZXJTZXNzaW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJfc2Vzc2lvbnMnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDdXN0b21lcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0nIH0pLFxuICAgIGNyZWF0ZUJhbGFuY2VUcmFuc2FjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2JhbGFuY2VfdHJhbnNhY3Rpb25zJyxcbiAgICB9KSxcbiAgICBjcmVhdGVGdW5kaW5nSW5zdHJ1Y3Rpb25zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vZnVuZGluZ19pbnN0cnVjdGlvbnMnLFxuICAgIH0pLFxuICAgIGNyZWF0ZVNvdXJjZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3NvdXJjZXMnLFxuICAgIH0pLFxuICAgIGNyZWF0ZVRheElkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vdGF4X2lkcycsXG4gICAgfSksXG4gICAgZGVsZXRlRGlzY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2Rpc2NvdW50JyxcbiAgICB9KSxcbiAgICBkZWxldGVTb3VyY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3NvdXJjZXMve2lkfScsXG4gICAgfSksXG4gICAgZGVsZXRlVGF4SWQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3RheF9pZHMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdEJhbGFuY2VUcmFuc2FjdGlvbnM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2JhbGFuY2VfdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RDYXNoQmFsYW5jZVRyYW5zYWN0aW9uczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vY2FzaF9iYWxhbmNlX3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0UGF5bWVudE1ldGhvZHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3BheW1lbnRfbWV0aG9kcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0U291cmNlczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vc291cmNlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0VGF4SWRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS90YXhfaWRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlQmFsYW5jZVRyYW5zYWN0aW9uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9iYWxhbmNlX3RyYW5zYWN0aW9ucy97dHJhbnNhY3Rpb259JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUNhc2hCYWxhbmNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9jYXNoX2JhbGFuY2UnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlQ2FzaEJhbGFuY2VUcmFuc2FjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vY2FzaF9iYWxhbmNlX3RyYW5zYWN0aW9ucy97dHJhbnNhY3Rpb259JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVBheW1lbnRNZXRob2Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3BheW1lbnRfbWV0aG9kcy97cGF5bWVudF9tZXRob2R9JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVNvdXJjZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vc291cmNlcy97aWR9JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVRheElkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS90YXhfaWRzL3tpZH0nLFxuICAgIH0pLFxuICAgIHNlYXJjaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxuICAgIHVwZGF0ZUJhbGFuY2VUcmFuc2FjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2JhbGFuY2VfdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZUNhc2hCYWxhbmNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vY2FzaF9iYWxhbmNlJyxcbiAgICB9KSxcbiAgICB1cGRhdGVTb3VyY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9zb3VyY2VzL3tpZH0nLFxuICAgIH0pLFxuICAgIHZlcmlmeVNvdXJjZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3NvdXJjZXMve2lkfS92ZXJpZnknLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBEaXNwdXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2Rpc3B1dGVzL3tkaXNwdXRlfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvZGlzcHV0ZXMve2Rpc3B1dGV9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9kaXNwdXRlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjbG9zZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2Rpc3B1dGVzL3tkaXNwdXRlfS9jbG9zZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEVwaGVtZXJhbEtleXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2VwaGVtZXJhbF9rZXlzJyxcbiAgICAgICAgdmFsaWRhdG9yOiAoZGF0YSwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMgfHwgIW9wdGlvbnMuaGVhZGVyc1snU3RyaXBlLVZlcnNpb24nXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc2luZyBhcGlWZXJzaW9uIGluIGEgc2VwYXJhdGUgb3B0aW9ucyBoYXNoIGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBhbiBlcGhlbWVyYWwga2V5LiBTZWUgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvYXBpL3ZlcnNpb25pbmc/bGFuZz1ub2RlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS9lcGhlbWVyYWxfa2V5cy97a2V5fScgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2V2ZW50cy97aWR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9ldmVudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEV4Y2hhbmdlUmF0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9leGNoYW5nZV9yYXRlcy97cmF0ZV9pZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2V4Y2hhbmdlX3JhdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBGaWxlTGlua3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2ZpbGVfbGlua3MnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9maWxlX2xpbmtzL3tsaW5rfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvZmlsZV9saW5rcy97bGlua30nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbGVfbGlua3MnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICJpbXBvcnQgeyBmbGF0dGVuQW5kU3RyaW5naWZ5LCBxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhIH0gZnJvbSAnLi91dGlscy5qcyc7XG4vLyBNZXRob2QgZm9yIGZvcm1hdHRpbmcgSFRUUCBib2R5IGZvciB0aGUgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBzcGVjaWZpY2F0aW9uXG4vLyBNb3N0bHkgdGFrZW4gZnJvbSBGZXJtYXRhLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbmF0ZXZ3L2Zlcm1hdGEvYmxvYi81ZDk3MzJhMzNkNzc2Y2U5MjUwMTNhMjY1OTM1ZmFjZDE2MjZjYzg4L2Zlcm1hdGEuanMjTDMxNS1MMzQzXG5jb25zdCBtdWx0aXBhcnREYXRhR2VuZXJhdG9yID0gKG1ldGhvZCwgZGF0YSwgaGVhZGVycykgPT4ge1xuICAgIGNvbnN0IHNlZ25vID0gKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNikpLnRvU3RyaW5nKCk7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtzZWdub31gO1xuICAgIGNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDApO1xuICAgIGNvbnN0IGVuZEJ1ZmZlciA9IHRleHRFbmNvZGVyLmVuY29kZSgnXFxyXFxuJyk7XG4gICAgZnVuY3Rpb24gcHVzaChsKSB7XG4gICAgICAgIGNvbnN0IHByZXZCdWZmZXIgPSBidWZmZXI7XG4gICAgICAgIGNvbnN0IG5ld0J1ZmZlciA9IGwgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbCA6IG5ldyBVaW50OEFycmF5KHRleHRFbmNvZGVyLmVuY29kZShsKSk7XG4gICAgICAgIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHByZXZCdWZmZXIubGVuZ3RoICsgbmV3QnVmZmVyLmxlbmd0aCArIDIpO1xuICAgICAgICBidWZmZXIuc2V0KHByZXZCdWZmZXIpO1xuICAgICAgICBidWZmZXIuc2V0KG5ld0J1ZmZlciwgcHJldkJ1ZmZlci5sZW5ndGgpO1xuICAgICAgICBidWZmZXIuc2V0KGVuZEJ1ZmZlciwgYnVmZmVyLmxlbmd0aCAtIDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxKHMpIHtcbiAgICAgICAgcmV0dXJuIGBcIiR7cy5yZXBsYWNlKC9cInxcIi9nLCAnJTIyJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJyAnKX1cImA7XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZERhdGEgPSBmbGF0dGVuQW5kU3RyaW5naWZ5KGRhdGEpO1xuICAgIGZvciAoY29uc3QgayBpbiBmbGF0dGVuZWREYXRhKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZsYXR0ZW5lZERhdGEsIGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gZmxhdHRlbmVkRGF0YVtrXTtcbiAgICAgICAgcHVzaChgLS0ke3NlZ25vfWApO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHYsICdkYXRhJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVkRW50cnkgPSB2O1xuICAgICAgICAgICAgcHVzaChgQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSR7cShrKX07IGZpbGVuYW1lPSR7cSh0eXBlZEVudHJ5Lm5hbWUgfHwgJ2Jsb2InKX1gKTtcbiAgICAgICAgICAgIHB1c2goYENvbnRlbnQtVHlwZTogJHt0eXBlZEVudHJ5LnR5cGUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9YCk7XG4gICAgICAgICAgICBwdXNoKCcnKTtcbiAgICAgICAgICAgIHB1c2godHlwZWRFbnRyeS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHB1c2goYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT0ke3Eoayl9YCk7XG4gICAgICAgICAgICBwdXNoKCcnKTtcbiAgICAgICAgICAgIHB1c2godik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVzaChgLS0ke3NlZ25vfS0tYCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwYXJ0UmVxdWVzdERhdGFQcm9jZXNzb3IobWV0aG9kLCBkYXRhLCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGlmIChtZXRob2QgIT09ICdQT1NUJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcXVlcnlTdHJpbmdpZnlSZXF1ZXN0RGF0YShkYXRhKSk7XG4gICAgfVxuICAgIHRoaXMuX3N0cmlwZS5fcGxhdGZvcm1GdW5jdGlvbnNcbiAgICAgICAgLnRyeUJ1ZmZlckRhdGEoZGF0YSlcbiAgICAgICAgLnRoZW4oKGJ1ZmZlcmVkRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBtdWx0aXBhcnREYXRhR2VuZXJhdG9yKG1ldGhvZCwgYnVmZmVyZWREYXRhLCBoZWFkZXJzKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGJ1ZmZlcik7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNhbGxiYWNrKGVyciwgbnVsbCkpO1xufVxuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgbXVsdGlwYXJ0UmVxdWVzdERhdGFQcm9jZXNzb3IgfSBmcm9tICcuLi9tdWx0aXBhcnQuanMnO1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRmlsZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbGVzJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgfSxcbiAgICAgICAgaG9zdDogJ2ZpbGVzLnN0cmlwZS5jb20nLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9maWxlcy97ZmlsZX0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHJlcXVlc3REYXRhUHJvY2Vzc29yOiBtdWx0aXBhcnRSZXF1ZXN0RGF0YVByb2Nlc3Nvcixcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgSW52b2ljZUl0ZW1zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9pbnZvaWNlaXRlbXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlaXRlbXMve2ludm9pY2VpdGVtfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZWl0ZW1zL3tpbnZvaWNlaXRlbX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VpdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VpdGVtcy97aW52b2ljZWl0ZW19JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZV9wYXltZW50cy97aW52b2ljZV9wYXltZW50fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZV9wYXltZW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgSW52b2ljZVJlbmRlcmluZ1RlbXBsYXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VfcmVuZGVyaW5nX3RlbXBsYXRlcy97dGVtcGxhdGV9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlX3JlbmRlcmluZ190ZW1wbGF0ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYXJjaGl2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VfcmVuZGVyaW5nX3RlbXBsYXRlcy97dGVtcGxhdGV9L2FyY2hpdmUnLFxuICAgIH0pLFxuICAgIHVuYXJjaGl2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VfcmVuZGVyaW5nX3RlbXBsYXRlcy97dGVtcGxhdGV9L3VuYXJjaGl2ZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEludm9pY2VzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9pbnZvaWNlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0RFTEVURScsIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfScgfSksXG4gICAgYWRkTGluZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0vYWRkX2xpbmVzJyxcbiAgICB9KSxcbiAgICBhdHRhY2hQYXltZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L2F0dGFjaF9wYXltZW50JyxcbiAgICB9KSxcbiAgICBjcmVhdGVQcmV2aWV3OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMvY3JlYXRlX3ByZXZpZXcnLFxuICAgIH0pLFxuICAgIGZpbmFsaXplSW52b2ljZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9maW5hbGl6ZScsXG4gICAgfSksXG4gICAgbGlzdExpbmVJdGVtczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L2xpbmVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIG1hcmtVbmNvbGxlY3RpYmxlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L21hcmtfdW5jb2xsZWN0aWJsZScsXG4gICAgfSksXG4gICAgcGF5OiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L3BheScgfSksXG4gICAgcmVtb3ZlTGluZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0vcmVtb3ZlX2xpbmVzJyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxuICAgIHNlbmRJbnZvaWNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L3NlbmQnLFxuICAgIH0pLFxuICAgIHVwZGF0ZUxpbmVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L3VwZGF0ZV9saW5lcycsXG4gICAgfSksXG4gICAgdXBkYXRlTGluZUl0ZW06IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0vbGluZXMve2xpbmVfaXRlbV9pZH0nLFxuICAgIH0pLFxuICAgIHZvaWRJbnZvaWNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L3ZvaWQnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBNYW5kYXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL21hbmRhdGVzL3ttYW5kYXRlfScgfSksXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmltcG9ydCB7IHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEgfSBmcm9tICcuLi91dGlscy5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5jb25zdCBvQXV0aEhvc3QgPSAnY29ubmVjdC5zdHJpcGUuY29tJztcbmV4cG9ydCBjb25zdCBPQXV0aCA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgYmFzZVBhdGg6ICcvJyxcbiAgICBhdXRob3JpemVVcmwocGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGxldCBwYXRoID0gJ29hdXRoL2F1dGhvcml6ZSc7XG4gICAgICAgIC8vIEZvciBFeHByZXNzIGFjY291bnRzLCB0aGUgcGF0aCBjaGFuZ2VzXG4gICAgICAgIGlmIChvcHRpb25zLmV4cHJlc3MpIHtcbiAgICAgICAgICAgIHBhdGggPSBgZXhwcmVzcy8ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmFtcy5yZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICBwYXJhbXMucmVzcG9uc2VfdHlwZSA9ICdjb2RlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmFtcy5jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIHBhcmFtcy5jbGllbnRfaWQgPSB0aGlzLl9zdHJpcGUuZ2V0Q2xpZW50SWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmFtcy5zY29wZSkge1xuICAgICAgICAgICAgcGFyYW1zLnNjb3BlID0gJ3JlYWRfd3JpdGUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly8ke29BdXRoSG9zdH0vJHtwYXRofT8ke3F1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEocGFyYW1zKX1gO1xuICAgIH0sXG4gICAgdG9rZW46IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnb2F1dGgvdG9rZW4nLFxuICAgICAgICBob3N0OiBvQXV0aEhvc3QsXG4gICAgfSksXG4gICAgZGVhdXRob3JpemUoc3BlYywgLi4uYXJncykge1xuICAgICAgICBpZiAoIXNwZWMuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBzcGVjLmNsaWVudF9pZCA9IHRoaXMuX3N0cmlwZS5nZXRDbGllbnRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXRoOiAnb2F1dGgvZGVhdXRob3JpemUnLFxuICAgICAgICAgICAgaG9zdDogb0F1dGhIb3N0LFxuICAgICAgICB9KS5hcHBseSh0aGlzLCBbc3BlYywgLi4uYXJnc10pO1xuICAgIH0sXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRBdHRlbXB0UmVjb3JkcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfYXR0ZW1wdF9yZWNvcmRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfYXR0ZW1wdF9yZWNvcmRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50SW50ZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBhcHBseUN1c3RvbWVyQmFsYW5jZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy97aW50ZW50fS9hcHBseV9jdXN0b21lcl9iYWxhbmNlJyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vY2FuY2VsJyxcbiAgICB9KSxcbiAgICBjYXB0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9L2NhcHR1cmUnLFxuICAgIH0pLFxuICAgIGNvbmZpcm06IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vY29uZmlybScsXG4gICAgfSksXG4gICAgaW5jcmVtZW50QXV0aG9yaXphdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy97aW50ZW50fS9pbmNyZW1lbnRfYXV0aG9yaXphdGlvbicsXG4gICAgfSksXG4gICAgbGlzdEFtb3VudERldGFpbHNMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy97aW50ZW50fS9hbW91bnRfZGV0YWlsc19saW5lX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHNlYXJjaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxuICAgIHZlcmlmeU1pY3JvZGVwb3NpdHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vdmVyaWZ5X21pY3JvZGVwb3NpdHMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50TGlua3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbGlua3MnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2xpbmtzL3twYXltZW50X2xpbmt9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2xpbmtzL3twYXltZW50X2xpbmt9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2xpbmtzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbGlua3Mve3BheW1lbnRfbGlua30vbGluZV9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZENvbmZpZ3VyYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9jb25maWd1cmF0aW9ucycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kX2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb259JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9jb25maWd1cmF0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZERvbWFpbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kX2RvbWFpbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9kb21haW5zL3twYXltZW50X21ldGhvZF9kb21haW59JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9kb21haW5zL3twYXltZW50X21ldGhvZF9kb21haW59JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9kb21haW5zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHZhbGlkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfZG9tYWlucy97cGF5bWVudF9tZXRob2RfZG9tYWlufS92YWxpZGF0ZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2RzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZHMve3BheW1lbnRfbWV0aG9kfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RzL3twYXltZW50X21ldGhvZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBhdHRhY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZHMve3BheW1lbnRfbWV0aG9kfS9hdHRhY2gnLFxuICAgIH0pLFxuICAgIGRldGFjaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kcy97cGF5bWVudF9tZXRob2R9L2RldGFjaCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRSZWNvcmRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3tpZH0nIH0pLFxuICAgIHJlcG9ydFBheW1lbnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X3JlY29yZHMvcmVwb3J0X3BheW1lbnQnLFxuICAgIH0pLFxuICAgIHJlcG9ydFBheW1lbnRBdHRlbXB0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3tpZH0vcmVwb3J0X3BheW1lbnRfYXR0ZW1wdCcsXG4gICAgfSksXG4gICAgcmVwb3J0UGF5bWVudEF0dGVtcHRDYW5jZWxlZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9L3JlcG9ydF9wYXltZW50X2F0dGVtcHRfY2FuY2VsZWQnLFxuICAgIH0pLFxuICAgIHJlcG9ydFBheW1lbnRBdHRlbXB0RmFpbGVkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3tpZH0vcmVwb3J0X3BheW1lbnRfYXR0ZW1wdF9mYWlsZWQnLFxuICAgIH0pLFxuICAgIHJlcG9ydFBheW1lbnRBdHRlbXB0R3VhcmFudGVlZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9L3JlcG9ydF9wYXltZW50X2F0dGVtcHRfZ3VhcmFudGVlZCcsXG4gICAgfSksXG4gICAgcmVwb3J0UGF5bWVudEF0dGVtcHRJbmZvcm1hdGlvbmFsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3tpZH0vcmVwb3J0X3BheW1lbnRfYXR0ZW1wdF9pbmZvcm1hdGlvbmFsJyxcbiAgICB9KSxcbiAgICByZXBvcnRSZWZ1bmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X3JlY29yZHMve2lkfS9yZXBvcnRfcmVmdW5kJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGF5b3V0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcGF5b3V0cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW91dHMve3BheW91dH0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW91dHMve3BheW91dH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW91dHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5b3V0cy97cGF5b3V0fS9jYW5jZWwnLFxuICAgIH0pLFxuICAgIHJldmVyc2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXlvdXRzL3twYXlvdXR9L3JldmVyc2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQbGFucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcGxhbnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9wbGFucy97cGxhbn0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BsYW5zL3twbGFufScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGxhbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS9wbGFucy97cGxhbn0nIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQcmljZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3ByaWNlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3ByaWNlcy97cHJpY2V9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wcmljZXMve3ByaWNlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJpY2VzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHNlYXJjaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJpY2VzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQcm9kdWN0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcHJvZHVjdHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97aWR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97aWR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0RFTEVURScsIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzL3tpZH0nIH0pLFxuICAgIGNyZWF0ZUZlYXR1cmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97cHJvZHVjdH0vZmVhdHVyZXMnLFxuICAgIH0pLFxuICAgIGRlbGV0ZUZlYXR1cmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzL3twcm9kdWN0fS9mZWF0dXJlcy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0RmVhdHVyZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzL3twcm9kdWN0fS9mZWF0dXJlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUZlYXR1cmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzL3twcm9kdWN0fS9mZWF0dXJlcy97aWR9JyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQcm9tb3Rpb25Db2RlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcHJvbW90aW9uX2NvZGVzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJvbW90aW9uX2NvZGVzL3twcm9tb3Rpb25fY29kZX0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb21vdGlvbl9jb2Rlcy97cHJvbW90aW9uX2NvZGV9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9tb3Rpb25fY29kZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFF1b3RlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcXVvdGVzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3F1b3Rlcy97cXVvdGV9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9xdW90ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYWNjZXB0OiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0vYWNjZXB0JyB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9xdW90ZXMve3F1b3RlfS9jYW5jZWwnIH0pLFxuICAgIGZpbmFsaXplUXVvdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9xdW90ZXMve3F1b3RlfS9maW5hbGl6ZScsXG4gICAgfSksXG4gICAgbGlzdENvbXB1dGVkVXBmcm9udExpbmVJdGVtczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0vY29tcHV0ZWRfdXBmcm9udF9saW5lX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3F1b3Rlcy97cXVvdGV9L2xpbmVfaXRlbXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcGRmOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9xdW90ZXMve3F1b3RlfS9wZGYnLFxuICAgICAgICBob3N0OiAnZmlsZXMuc3RyaXBlLmNvbScsXG4gICAgICAgIHN0cmVhbWluZzogdHJ1ZSxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVmdW5kcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcmVmdW5kcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3JlZnVuZHMve3JlZnVuZH0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3JlZnVuZHMve3JlZnVuZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JlZnVuZHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmVmdW5kcy97cmVmdW5kfS9jYW5jZWwnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZXZpZXdzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvcmV2aWV3cy97cmV2aWV3fScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmV2aWV3cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBhcHByb3ZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmV2aWV3cy97cmV2aWV3fS9hcHByb3ZlJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2V0dXBBdHRlbXB0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2V0dXBfYXR0ZW1wdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNldHVwSW50ZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvc2V0dXBfaW50ZW50cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2ludGVudHMve2ludGVudH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2ludGVudHMve2ludGVudH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2ludGVudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2V0dXBfaW50ZW50cy97aW50ZW50fS9jYW5jZWwnLFxuICAgIH0pLFxuICAgIGNvbmZpcm06IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zZXR1cF9pbnRlbnRzL3tpbnRlbnR9L2NvbmZpcm0nLFxuICAgIH0pLFxuICAgIHZlcmlmeU1pY3JvZGVwb3NpdHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zZXR1cF9pbnRlbnRzL3tpbnRlbnR9L3ZlcmlmeV9taWNyb2RlcG9zaXRzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2hpcHBpbmdSYXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvc2hpcHBpbmdfcmF0ZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zaGlwcGluZ19yYXRlcy97c2hpcHBpbmdfcmF0ZV90b2tlbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NoaXBwaW5nX3JhdGVzL3tzaGlwcGluZ19yYXRlX3Rva2VufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2hpcHBpbmdfcmF0ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNvdXJjZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3NvdXJjZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9zb3VyY2VzL3tzb3VyY2V9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9zb3VyY2VzL3tzb3VyY2V9JyB9KSxcbiAgICBsaXN0U291cmNlVHJhbnNhY3Rpb25zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zb3VyY2VzL3tzb3VyY2V9L3NvdXJjZV90cmFuc2FjdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgdmVyaWZ5OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc291cmNlcy97c291cmNlfS92ZXJpZnknLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTdWJzY3JpcHRpb25JdGVtcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX2l0ZW1zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX2l0ZW1zL3tpdGVtfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX2l0ZW1zL3tpdGVtfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX2l0ZW1zL3tpdGVtfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFN1YnNjcmlwdGlvblNjaGVkdWxlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX3NjaGVkdWxlcycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9zY2hlZHVsZXMve3NjaGVkdWxlfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX3NjaGVkdWxlcy97c2NoZWR1bGV9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25fc2NoZWR1bGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9zY2hlZHVsZXMve3NjaGVkdWxlfS9jYW5jZWwnLFxuICAgIH0pLFxuICAgIHJlbGVhc2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25fc2NoZWR1bGVzL3tzY2hlZHVsZX0vcmVsZWFzZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFN1YnNjcmlwdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zL3tzdWJzY3JpcHRpb25fZXhwb3NlZF9pZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMve3N1YnNjcmlwdGlvbl9leHBvc2VkX2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMve3N1YnNjcmlwdGlvbl9leHBvc2VkX2lkfScsXG4gICAgfSksXG4gICAgZGVsZXRlRGlzY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMve3N1YnNjcmlwdGlvbl9leHBvc2VkX2lkfS9kaXNjb3VudCcsXG4gICAgfSksXG4gICAgbWlncmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMve3N1YnNjcmlwdGlvbn0vbWlncmF0ZScsXG4gICAgfSksXG4gICAgcmVzdW1lOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9ucy97c3Vic2NyaXB0aW9ufS9yZXN1bWUnLFxuICAgIH0pLFxuICAgIHNlYXJjaDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9ucy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVGF4Q29kZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS90YXhfY29kZXMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4X2NvZGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUYXhJZHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RheF9pZHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS90YXhfaWRzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheF9pZHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS90YXhfaWRzL3tpZH0nIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUYXhSYXRlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdGF4X3JhdGVzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdGF4X3JhdGVzL3t0YXhfcmF0ZX0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RheF9yYXRlcy97dGF4X3JhdGV9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90YXhfcmF0ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdG9rZW5zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdG9rZW5zL3t0b2tlbn0nIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUb3B1cHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RvcHVwcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3RvcHVwcy97dG9wdXB9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90b3B1cHMve3RvcHVwfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdG9wdXBzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RvcHVwcy97dG9wdXB9L2NhbmNlbCcgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRyYW5zZmVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzL3t0cmFuc2Zlcn0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RyYW5zZmVycy97dHJhbnNmZXJ9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY3JlYXRlUmV2ZXJzYWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMve2lkfS9yZXZlcnNhbHMnLFxuICAgIH0pLFxuICAgIGxpc3RSZXZlcnNhbHM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyYW5zZmVycy97aWR9L3JldmVyc2FscycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVJldmVyc2FsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMve3RyYW5zZmVyfS9yZXZlcnNhbHMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlUmV2ZXJzYWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMve3RyYW5zZmVyfS9yZXZlcnNhbHMve2lkfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFdlYmhvb2tFbmRwb2ludHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3dlYmhvb2tfZW5kcG9pbnRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvd2ViaG9va19lbmRwb2ludHMve3dlYmhvb2tfZW5kcG9pbnR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS93ZWJob29rX2VuZHBvaW50cy97d2ViaG9va19lbmRwb2ludH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3dlYmhvb2tfZW5kcG9pbnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvd2ViaG9va19lbmRwb2ludHMve3dlYmhvb2tfZW5kcG9pbnR9JyxcbiAgICB9KSxcbn0pO1xuIiwgImltcG9ydCAqIGFzIF9FcnJvciBmcm9tICcuL0Vycm9yLmpzJztcbmltcG9ydCB7IFJlcXVlc3RTZW5kZXIgfSBmcm9tICcuL1JlcXVlc3RTZW5kZXIuanMnO1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuL1N0cmlwZVJlc291cmNlLmpzJztcbmltcG9ydCB7IFN0cmlwZUNvbnRleHQgfSBmcm9tICcuL1N0cmlwZUNvbnRleHQuanMnO1xuaW1wb3J0IHsgY3JlYXRlV2ViaG9va3MgfSBmcm9tICcuL1dlYmhvb2tzLmpzJztcbmltcG9ydCB7IEFwaVZlcnNpb24gfSBmcm9tICcuL2FwaVZlcnNpb24uanMnO1xuaW1wb3J0IHsgQ3J5cHRvUHJvdmlkZXIgfSBmcm9tICcuL2NyeXB0by9DcnlwdG9Qcm92aWRlci5qcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuL25ldC9IdHRwQ2xpZW50LmpzJztcbmltcG9ydCAqIGFzIHJlc291cmNlcyBmcm9tICcuL3Jlc291cmNlcy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBcGlLZXlBdXRoZW50aWNhdG9yLCBkZXRlcm1pbmVQcm9jZXNzVXNlckFnZW50UHJvcGVydGllcywgcGFzY2FsVG9DYW1lbENhc2UsIHZhbGlkYXRlSW50ZWdlciwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmNvbnN0IERFRkFVTFRfSE9TVCA9ICdhcGkuc3RyaXBlLmNvbSc7XG5jb25zdCBERUZBVUxUX1BPUlQgPSAnNDQzJztcbmNvbnN0IERFRkFVTFRfQkFTRV9QQVRIID0gJy92MS8nO1xuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9IEFwaVZlcnNpb247XG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSA4MDAwMDtcbmNvbnN0IE1BWF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQyA9IDU7XG5jb25zdCBJTklUSUFMX05FVFdPUktfUkVUUllfREVMQVlfU0VDID0gMC41O1xuY29uc3QgQVBQX0lORk9fUFJPUEVSVElFUyA9IFsnbmFtZScsICd2ZXJzaW9uJywgJ3VybCcsICdwYXJ0bmVyX2lkJ107XG5jb25zdCBBTExPV0VEX0NPTkZJR19QUk9QRVJUSUVTID0gW1xuICAgICdhdXRoZW50aWNhdG9yJyxcbiAgICAnYXBpVmVyc2lvbicsXG4gICAgJ3R5cGVzY3JpcHQnLFxuICAgICdtYXhOZXR3b3JrUmV0cmllcycsXG4gICAgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBDbGllbnQnLFxuICAgICd0aW1lb3V0JyxcbiAgICAnaG9zdCcsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3RlbGVtZXRyeScsXG4gICAgJ2FwcEluZm8nLFxuICAgICdzdHJpcGVBY2NvdW50JyxcbiAgICAnc3RyaXBlQ29udGV4dCcsXG5dO1xuY29uc3QgZGVmYXVsdFJlcXVlc3RTZW5kZXJGYWN0b3J5ID0gKHN0cmlwZSkgPT4gbmV3IFJlcXVlc3RTZW5kZXIoc3RyaXBlLCBTdHJpcGVSZXNvdXJjZS5NQVhfQlVGRkVSRURfUkVRVUVTVF9NRVRSSUNTKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJpcGUocGxhdGZvcm1GdW5jdGlvbnMsIHJlcXVlc3RTZW5kZXIgPSBkZWZhdWx0UmVxdWVzdFNlbmRlckZhY3RvcnkpIHtcbiAgICBTdHJpcGUuUEFDS0FHRV9WRVJTSU9OID0gJzIwLjMuMSc7XG4gICAgU3RyaXBlLkFQSV9WRVJTSU9OID0gQXBpVmVyc2lvbjtcbiAgICBTdHJpcGUuVVNFUl9BR0VOVCA9IE9iamVjdC5hc3NpZ24oeyBiaW5kaW5nc192ZXJzaW9uOiBTdHJpcGUuUEFDS0FHRV9WRVJTSU9OLCBsYW5nOiAnbm9kZScsIHB1Ymxpc2hlcjogJ3N0cmlwZScsIHVuYW1lOiBudWxsLCB0eXBlc2NyaXB0OiBmYWxzZSB9LCBkZXRlcm1pbmVQcm9jZXNzVXNlckFnZW50UHJvcGVydGllcygpKTtcbiAgICBTdHJpcGUuU3RyaXBlUmVzb3VyY2UgPSBTdHJpcGVSZXNvdXJjZTtcbiAgICBTdHJpcGUuU3RyaXBlQ29udGV4dCA9IFN0cmlwZUNvbnRleHQ7XG4gICAgU3RyaXBlLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICBTdHJpcGUuSHR0cENsaWVudCA9IEh0dHBDbGllbnQ7XG4gICAgU3RyaXBlLkh0dHBDbGllbnRSZXNwb25zZSA9IEh0dHBDbGllbnRSZXNwb25zZTtcbiAgICBTdHJpcGUuQ3J5cHRvUHJvdmlkZXIgPSBDcnlwdG9Qcm92aWRlcjtcbiAgICBTdHJpcGUud2ViaG9va3MgPSBjcmVhdGVXZWJob29rcyhwbGF0Zm9ybUZ1bmN0aW9ucyk7XG4gICAgZnVuY3Rpb24gU3RyaXBlKGtleSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN0cmlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlKGtleSwgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuX2dldFByb3BzRnJvbUNvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLl9wbGF0Zm9ybUZ1bmN0aW9ucyA9IHBsYXRmb3JtRnVuY3Rpb25zO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19lbWl0dGVyJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX3BsYXRmb3JtRnVuY3Rpb25zLmNyZWF0ZUVtaXR0ZXIoKSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuVkVSU0lPTiA9IFN0cmlwZS5QQUNLQUdFX1ZFUlNJT047XG4gICAgICAgIHRoaXMub24gPSB0aGlzLl9lbWl0dGVyLm9uLmJpbmQodGhpcy5fZW1pdHRlcik7XG4gICAgICAgIHRoaXMub25jZSA9IHRoaXMuX2VtaXR0ZXIub25jZS5iaW5kKHRoaXMuX2VtaXR0ZXIpO1xuICAgICAgICB0aGlzLm9mZiA9IHRoaXMuX2VtaXR0ZXIucmVtb3ZlTGlzdGVuZXIuYmluZCh0aGlzLl9lbWl0dGVyKTtcbiAgICAgICAgY29uc3QgYWdlbnQgPSBwcm9wcy5odHRwQWdlbnQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5fYXBpID0ge1xuICAgICAgICAgICAgaG9zdDogcHJvcHMuaG9zdCB8fCBERUZBVUxUX0hPU1QsXG4gICAgICAgICAgICBwb3J0OiBwcm9wcy5wb3J0IHx8IERFRkFVTFRfUE9SVCxcbiAgICAgICAgICAgIHByb3RvY29sOiBwcm9wcy5wcm90b2NvbCB8fCAnaHR0cHMnLFxuICAgICAgICAgICAgYmFzZVBhdGg6IERFRkFVTFRfQkFTRV9QQVRILFxuICAgICAgICAgICAgdmVyc2lvbjogcHJvcHMuYXBpVmVyc2lvbiB8fCBERUZBVUxUX0FQSV9WRVJTSU9OLFxuICAgICAgICAgICAgdGltZW91dDogdmFsaWRhdGVJbnRlZ2VyKCd0aW1lb3V0JywgcHJvcHMudGltZW91dCwgREVGQVVMVF9USU1FT1VUKSxcbiAgICAgICAgICAgIG1heE5ldHdvcmtSZXRyaWVzOiB2YWxpZGF0ZUludGVnZXIoJ21heE5ldHdvcmtSZXRyaWVzJywgcHJvcHMubWF4TmV0d29ya1JldHJpZXMsIDIpLFxuICAgICAgICAgICAgYWdlbnQ6IGFnZW50LFxuICAgICAgICAgICAgaHR0cENsaWVudDogcHJvcHMuaHR0cENsaWVudCB8fFxuICAgICAgICAgICAgICAgIChhZ2VudFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3BsYXRmb3JtRnVuY3Rpb25zLmNyZWF0ZU5vZGVIdHRwQ2xpZW50KGFnZW50KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3BsYXRmb3JtRnVuY3Rpb25zLmNyZWF0ZURlZmF1bHRIdHRwQ2xpZW50KCkpLFxuICAgICAgICAgICAgZGV2OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmlwZUFjY291bnQ6IHByb3BzLnN0cmlwZUFjY291bnQgfHwgbnVsbCxcbiAgICAgICAgICAgIHN0cmlwZUNvbnRleHQ6IHByb3BzLnN0cmlwZUNvbnRleHQgfHwgbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdHlwZXNjcmlwdCA9IHByb3BzLnR5cGVzY3JpcHQgfHwgZmFsc2U7XG4gICAgICAgIGlmICh0eXBlc2NyaXB0ICE9PSBTdHJpcGUuVVNFUl9BR0VOVC50eXBlc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyBUaGUgbXV0YXRpb24gaGVyZSBpcyB1bmNvbWZvcnRhYmxlLCBidXQgbGlrZWx5IGZhc3Rlc3Q7XG4gICAgICAgICAgICAvLyBzZXJpYWxpemluZyB0aGUgdXNlciBhZ2VudCBpbnZvbHZlcyBzaGVsbGluZyBvdXQgdG8gdGhlIHN5c3RlbSxcbiAgICAgICAgICAgIC8vIGFuZCBnaXZlbiBzb21lIHVzZXJzIG1heSBpbnN0YW50aWF0ZSB0aGUgbGlicmFyeSBtYW55IHRpbWVzIHdpdGhvdXQgc3dpdGNoaW5nIGJldHdlZW4gVFMgYW5kIG5vbi1UUyxcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBpbmN1ciB0aGUgcGVyZm9ybWFuY2UgaGl0IHdoZW4gdGhhdCBhY3R1YWxseSBoYXBwZW5zLlxuICAgICAgICAgICAgU3RyaXBlLlVTRVJfQUdFTlQudHlwZXNjcmlwdCA9IHR5cGVzY3JpcHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmFwcEluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEFwcEluZm8ocHJvcHMuYXBwSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJlcFJlc291cmNlcygpO1xuICAgICAgICB0aGlzLl9zZXRBdXRoZW50aWNhdG9yKGtleSwgcHJvcHMuYXV0aGVudGljYXRvcik7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gX0Vycm9yO1xuICAgICAgICB0aGlzLndlYmhvb2tzID0gU3RyaXBlLndlYmhvb2tzO1xuICAgICAgICB0aGlzLl9wcmV2UmVxdWVzdE1ldHJpY3MgPSBbXTtcbiAgICAgICAgdGhpcy5fZW5hYmxlVGVsZW1ldHJ5ID0gcHJvcHMudGVsZW1ldHJ5ICE9PSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdFNlbmRlciA9IHJlcXVlc3RTZW5kZXIodGhpcyk7XG4gICAgICAgIC8vIEV4cG9zZSBTdHJpcGVSZXNvdXJjZSBvbiB0aGUgaW5zdGFuY2UgdG9vXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5TdHJpcGVSZXNvdXJjZSA9IFN0cmlwZS5TdHJpcGVSZXNvdXJjZTtcbiAgICB9XG4gICAgU3RyaXBlLmVycm9ycyA9IF9FcnJvcjtcbiAgICBTdHJpcGUuY3JlYXRlTm9kZUh0dHBDbGllbnQgPSBwbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVOb2RlSHR0cENsaWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEhUVFAgY2xpZW50IGZvciBpc3N1aW5nIFN0cmlwZSBBUEkgcmVxdWVzdHMgd2hpY2ggdXNlcyB0aGUgV2ViXG4gICAgICogRmV0Y2ggQVBJLlxuICAgICAqXG4gICAgICogQSBmZXRjaCBmdW5jdGlvbiBjYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIuIElmIG5vbmUgaXNcbiAgICAgKiBwYXNzZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgZGVmYXVsdCBgZmV0Y2hgIGZ1bmN0aW9uIGluIHRoZSBnbG9iYWwgc2NvcGUuXG4gICAgICovXG4gICAgU3RyaXBlLmNyZWF0ZUZldGNoSHR0cENsaWVudCA9IHBsYXRmb3JtRnVuY3Rpb25zLmNyZWF0ZUZldGNoSHR0cENsaWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBDcnlwdG9Qcm92aWRlciB3aGljaCB1c2VzIHRoZSBidWlsdC1pbiBOb2RlIGNyeXB0byBsaWJyYXJpZXMgZm9yXG4gICAgICogaXRzIGNyeXB0byBvcGVyYXRpb25zLlxuICAgICAqL1xuICAgIFN0cmlwZS5jcmVhdGVOb2RlQ3J5cHRvUHJvdmlkZXIgPSBwbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVOb2RlQ3J5cHRvUHJvdmlkZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIENyeXB0b1Byb3ZpZGVyIHdoaWNoIHVzZXMgdGhlIFN1YnRsZSBDcnlwdG8gQVBJIGZyb20gdGhlIFdlYlxuICAgICAqIENyeXB0byBBUEkgc3BlYyBmb3IgaXRzIGNyeXB0byBvcGVyYXRpb25zLlxuICAgICAqXG4gICAgICogQSBTdWJ0bGVDcnlwdG8gaW50ZXJmYWNlIGNhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtZXRlci4gSWYgbm9uZVxuICAgICAqIGlzIHBhc3NlZCwgd2lsbCBkZWZhdWx0IHRvIHRoZSBkZWZhdWx0IGBjcnlwdG8uc3VidGxlYCBvYmplY3QgaW4gdGhlIGdsb2JhbFxuICAgICAqIHNjb3BlLlxuICAgICAqL1xuICAgIFN0cmlwZS5jcmVhdGVTdWJ0bGVDcnlwdG9Qcm92aWRlciA9XG4gICAgICAgIHBsYXRmb3JtRnVuY3Rpb25zLmNyZWF0ZVN1YnRsZUNyeXB0b1Byb3ZpZGVyO1xuICAgIFN0cmlwZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIFByb3BlcnRpZXMgYXJlIHNldCBpbiB0aGUgY29uc3RydWN0b3IgYWJvdmVcbiAgICAgICAgX2FwcEluZm86IHVuZGVmaW5lZCxcbiAgICAgICAgb246IG51bGwsXG4gICAgICAgIG9mZjogbnVsbCxcbiAgICAgICAgb25jZTogbnVsbCxcbiAgICAgICAgVkVSU0lPTjogbnVsbCxcbiAgICAgICAgU3RyaXBlUmVzb3VyY2U6IG51bGwsXG4gICAgICAgIHdlYmhvb2tzOiBudWxsLFxuICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgIF9hcGk6IG51bGwsXG4gICAgICAgIF9wcmV2UmVxdWVzdE1ldHJpY3M6IG51bGwsXG4gICAgICAgIF9lbWl0dGVyOiBudWxsLFxuICAgICAgICBfZW5hYmxlVGVsZW1ldHJ5OiBudWxsLFxuICAgICAgICBfcmVxdWVzdFNlbmRlcjogbnVsbCxcbiAgICAgICAgX3BsYXRmb3JtRnVuY3Rpb25zOiBudWxsLFxuICAgICAgICByYXdSZXF1ZXN0KG1ldGhvZCwgcGF0aCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlbmRlci5fcmF3UmVxdWVzdChtZXRob2QsIHBhdGgsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3NldEF1dGhlbnRpY2F0b3Ioa2V5LCBhdXRoZW50aWNhdG9yKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICYmIGF1dGhlbnRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzcGVjaWZ5IGJvdGggYXBpS2V5IGFuZCBhdXRoZW50aWNhdG9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFrZXkgJiYgIWF1dGhlbnRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05laXRoZXIgYXBpS2V5IG5vciBjb25maWcuYXV0aGVudGljYXRvciBwcm92aWRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRvciA9IGtleVxuICAgICAgICAgICAgICAgID8gY3JlYXRlQXBpS2V5QXV0aGVudGljYXRvcihrZXkpXG4gICAgICAgICAgICAgICAgOiBhdXRoZW50aWNhdG9yO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogVGhpcyBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgX3NldEFwcEluZm8oaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8gJiYgdHlwZW9mIGluZm8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBJbmZvIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZm8gJiYgIWluZm8ubmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXBwSW5mby5uYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmZvID0gaW5mbyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuX2FwcEluZm8gPSBBUFBfSU5GT19QUk9QRVJUSUVTLnJlZHVjZSgoYWNjdW0sIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm9bcHJvcF0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjdW0gPSBhY2N1bSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bcHJvcF0gPSBpbmZvW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBUaGlzIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAqL1xuICAgICAgICBfc2V0QXBpRmllbGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYXBpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFBsZWFzZSBvcGVuIG9yIHVwdm90ZSBhbiBpc3N1ZSBhdCBnaXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZVxuICAgICAgICAgKiBpZiB5b3UgdXNlIHRoaXMsIGRldGFpbGluZyB5b3VyIHVzZS1jYXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBtYXkgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0QXBpRmllbGQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXBpW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldENsaWVudElkKGNsaWVudElkKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDbGllbnRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFBsZWFzZSBvcGVuIG9yIHVwdm90ZSBhbiBpc3N1ZSBhdCBnaXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZVxuICAgICAgICAgKiBpZiB5b3UgdXNlIHRoaXMsIGRldGFpbGluZyB5b3VyIHVzZS1jYXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBtYXkgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q29uc3RhbnQ6IChjKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdERUZBVUxUX0hPU1QnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9IT1NUO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RFRkFVTFRfUE9SVCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBERUZBVUxUX1BPUlQ7XG4gICAgICAgICAgICAgICAgY2FzZSAnREVGQVVMVF9CQVNFX1BBVEgnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9CQVNFX1BBVEg7XG4gICAgICAgICAgICAgICAgY2FzZSAnREVGQVVMVF9BUElfVkVSU0lPTic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBERUZBVUxUX0FQSV9WRVJTSU9OO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RFRkFVTFRfVElNRU9VVCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBERUZBVUxUX1RJTUVPVVQ7XG4gICAgICAgICAgICAgICAgY2FzZSAnTUFYX05FVFdPUktfUkVUUllfREVMQVlfU0VDJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1BWF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQztcbiAgICAgICAgICAgICAgICBjYXNlICdJTklUSUFMX05FVFdPUktfUkVUUllfREVMQVlfU0VDJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfTkVUV09SS19SRVRSWV9ERUxBWV9TRUM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaXBlW2NdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRNYXhOZXR3b3JrUmV0cmllcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFwaUZpZWxkKCdtYXhOZXR3b3JrUmV0cmllcycpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogVGhpcyBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgX3NldEFwaU51bWJlckZpZWxkKHByb3AsIG4sIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHZhbGlkYXRlSW50ZWdlcihwcm9wLCBuLCBkZWZhdWx0VmFsKTtcbiAgICAgICAgICAgIHRoaXMuX3NldEFwaUZpZWxkKHByb3AsIHZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE1heE5ldHdvcmtSZXRyeURlbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1BWF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5pdGlhbE5ldHdvcmtSZXRyeURlbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfTkVUV09SS19SRVRSWV9ERUxBWV9TRUM7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGVcbiAgICAgICAgICogaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICpcbiAgICAgICAgICogR2V0cyBhIEpTT04gdmVyc2lvbiBvZiBhIFVzZXItQWdlbnQgYW5kIHVzZXMgYSBjYWNoZWQgdmVyc2lvbiBmb3IgYSBzbGlnaHRcbiAgICAgICAgICogc3BlZWQgYWR2YW50YWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2xpZW50VXNlckFnZW50KGNiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRVc2VyQWdlbnRTZWVkZWQoU3RyaXBlLlVTRVJfQUdFTlQsIGNiKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFBsZWFzZSBvcGVuIG9yIHVwdm90ZSBhbiBpc3N1ZSBhdCBnaXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZVxuICAgICAgICAgKiBpZiB5b3UgdXNlIHRoaXMsIGRldGFpbGluZyB5b3VyIHVzZS1jYXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBtYXkgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBHZXRzIGEgSlNPTiB2ZXJzaW9uIG9mIGEgVXNlci1BZ2VudCBieSBlbmNvZGluZyBhIHNlZWRlZCBvYmplY3QgYW5kXG4gICAgICAgICAqIGZldGNoaW5nIGEgdW5hbWUgZnJvbSB0aGUgc3lzdGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2xpZW50VXNlckFnZW50U2VlZGVkKHNlZWQsIGNiKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF0Zm9ybUZ1bmN0aW9ucy5nZXRVbmFtZSgpLnRoZW4oKHVuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gc2VlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWVkLCBmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudFtmaWVsZF0gPSBlbmNvZGVVUklDb21wb25lbnQoKF9hID0gc2VlZFtmaWVsZF0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdudWxsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFVSSS1lbmNvZGUgaW4gY2FzZSB0aGVyZSBhcmUgdW51c3VhbCBjaGFyYWN0ZXJzIGluIHRoZSBzeXN0ZW0ncyB1bmFtZS5cbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQudW5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQodW5hbWUgfHwgJ1VOS05PV04nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdldEFwaUZpZWxkKCdodHRwQ2xpZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQuaHR0cGxpYiA9IGVuY29kZVVSSUNvbXBvbmVudChjbGllbnQuZ2V0Q2xpZW50TmFtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FwcEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50LmFwcGxpY2F0aW9uID0gdGhpcy5fYXBwSW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2IoSlNPTi5zdHJpbmdpZnkodXNlckFnZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFBsZWFzZSBvcGVuIG9yIHVwdm90ZSBhbiBpc3N1ZSBhdCBnaXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZVxuICAgICAgICAgKiBpZiB5b3UgdXNlIHRoaXMsIGRldGFpbGluZyB5b3VyIHVzZS1jYXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBtYXkgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0QXBwSW5mb0FzU3RyaW5nKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hcHBJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHRoaXMuX2FwcEluZm8ubmFtZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hcHBJbmZvLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgKz0gYC8ke3RoaXMuX2FwcEluZm8udmVyc2lvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2FwcEluZm8udXJsKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkICs9IGAgKCR7dGhpcy5fYXBwSW5mby51cmx9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUZWxlbWV0cnlFbmFibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZVRlbGVtZXRyeTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFRoaXMgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIF9wcmVwUmVzb3VyY2VzKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc291cmNlcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzW3Bhc2NhbFRvQ2FtZWxDYXNlKG5hbWUpXSA9IG5ldyByZXNvdXJjZXNbbmFtZV0odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBUaGlzIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAqL1xuICAgICAgICBfZ2V0UHJvcHNGcm9tQ29uZmlnKGNvbmZpZykge1xuICAgICAgICAgICAgLy8gSWYgY29uZmlnIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBqdXN0IGJhaWwgZWFybHkgd2l0aCBubyBwcm9wc1xuICAgICAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25maWcgY2FuIGJlIGFuIG9iamVjdCBvciBhIHN0cmluZ1xuICAgICAgICAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJztcbiAgICAgICAgICAgIGNvbnN0IGlzT2JqZWN0ID0gY29uZmlnID09PSBPYmplY3QoY29uZmlnKSAmJiAhQXJyYXkuaXNBcnJheShjb25maWcpO1xuICAgICAgICAgICAgaWYgKCFpc09iamVjdCAmJiAhaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZyBtdXN0IGVpdGhlciBiZSBhbiBvYmplY3Qgb3IgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGNvbmZpZyBpcyBhIHN0cmluZywgd2UgYXNzdW1lIHRoZSBvbGQgYmVoYXZpb3Igb2YgcGFzc2luZyBpbiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXBpIHZlcnNpb25cbiAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFwaVZlcnNpb246IGNvbmZpZyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgY29uZmlnIGlzIGFuIG9iamVjdCwgd2UgYXNzdW1lIHRoZSBuZXcgYmVoYXZpb3IgYW5kIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGNvbnRhaW4gYW55IHVuZXhwZWN0ZWQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3Qua2V5cyhjb25maWcpLmZpbHRlcigodmFsdWUpID0+ICFBTExPV0VEX0NPTkZJR19QUk9QRVJUSUVTLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbmZpZyBvYmplY3QgbWF5IG9ubHkgY29udGFpbiB0aGUgZm9sbG93aW5nOiAke0FMTE9XRURfQ09ORklHX1BST1BFUlRJRVMuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlRXZlbnROb3RpZmljYXRpb24ocGF5bG9hZCwgaGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXRcbiAgICAgICAgLy8gdGhpcyByZXR1cm4gdHlwZSBpcyBpZ25vcmVkPz8gcGlja3MgdXAgdHlwZXMgZnJvbSBgdHlwZXMvaW5kZXguZC50c2AgaW5zdGVhZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHBhcnNlcyBhbmQgdmFsaWRhdGVzIHRoZSBldmVudCBwYXlsb2FkIGFsbCBpbiBvbmUgZ29cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50Tm90aWZpY2F0aW9uID0gdGhpcy53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChwYXlsb2FkLCBoZWFkZXIsIHNlY3JldCwgdG9sZXJhbmNlLCBjcnlwdG9Qcm92aWRlciwgcmVjZWl2ZWRBdCk7XG4gICAgICAgICAgICAvLyBQYXJzZSBzdHJpbmcgY29udGV4dCBpbnRvIFN0cmlwZUNvbnRleHQgb2JqZWN0IGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChldmVudE5vdGlmaWNhdGlvbi5jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnROb3RpZmljYXRpb24uY29udGV4dCA9IFN0cmlwZUNvbnRleHQucGFyc2UoZXZlbnROb3RpZmljYXRpb24uY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudE5vdGlmaWNhdGlvbi5mZXRjaEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0U2VuZGVyLl9yYXdSZXF1ZXN0KCdHRVQnLCBgL3YyL2NvcmUvZXZlbnRzLyR7ZXZlbnROb3RpZmljYXRpb24uaWR9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZUNvbnRleHQ6IGV2ZW50Tm90aWZpY2F0aW9uLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSwgWydmZXRjaF9ldmVudCddKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBldmVudE5vdGlmaWNhdGlvbi5mZXRjaFJlbGF0ZWRPYmplY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudE5vdGlmaWNhdGlvbi5yZWxhdGVkX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlbmRlci5fcmF3UmVxdWVzdCgnR0VUJywgZXZlbnROb3RpZmljYXRpb24ucmVsYXRlZF9vYmplY3QudXJsLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaXBlQ29udGV4dDogZXZlbnROb3RpZmljYXRpb24uY29udGV4dCxcbiAgICAgICAgICAgICAgICB9LCBbJ2ZldGNoX3JlbGF0ZWRfb2JqZWN0J10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBldmVudE5vdGlmaWNhdGlvbjtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBTdHJpcGU7XG59XG4iLCAiaW1wb3J0IHsgV2ViUGxhdGZvcm1GdW5jdGlvbnMgfSBmcm9tICcuL3BsYXRmb3JtL1dlYlBsYXRmb3JtRnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IGNyZWF0ZVN0cmlwZSB9IGZyb20gJy4vc3RyaXBlLmNvcmUuanMnO1xuZXhwb3J0IGNvbnN0IFN0cmlwZSA9IGNyZWF0ZVN0cmlwZShuZXcgV2ViUGxhdGZvcm1GdW5jdGlvbnMoKSk7XG5leHBvcnQgZGVmYXVsdCBTdHJpcGU7XG4iLCAiaW1wb3J0IHsgU2V0dGluZ3NWaWV3LCBCb3gsIElubGluZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcblxuY29uc3QgQXBwU2V0dGluZ3NWaWV3ID0gKHsgdXNlckNvbnRleHQ6IF91c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2V0dGluZ3NWaWV3PlxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XG4gICAgICAgIDxJbmxpbmU+SmF2ZWxpbiBzZXR0aW5ncyBjb21pbmcgc29vbi48L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgIDwvU2V0dGluZ3NWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ3NWaWV3O1xuIiwgImltcG9ydCB7XG4gIENvbnRleHRWaWV3LFxuICBCb3gsXG4gIFNwaW5uZXIsXG4gIElubGluZSxcbiAgQmFubmVyLFxuICBCdXR0b24sXG4gIEljb24sXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50LCBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RyaXBlU3luYyB9IGZyb20gJy4uL2hvb2tzL3VzZVN0cmlwZVN5bmMnO1xuXG50eXBlIE9uYm9hcmRpbmdTdGF0ZSA9ICdhdXRoJyB8ICdzeW5jaW5nJyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbmNvbnN0IE9CSkVDVF9UWVBFX0xBQkVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgY3VzdG9tZXJzOiAnQ3VzdG9tZXJzJyxcbiAgc3Vic2NyaXB0aW9uczogJ1N1YnNjcmlwdGlvbnMnLFxuICBpbnZvaWNlczogJ0ludm9pY2VzJyxcbiAgY2hhcmdlczogJ0NoYXJnZXMnLFxuICBwcm9kdWN0czogJ1Byb2R1Y3RzJyxcbiAgcHJpY2VzOiAnUHJpY2VzJyxcbn07XG5cbmNvbnN0IE9uYm9hcmRpbmdWaWV3ID0gKHsgdXNlckNvbnRleHQsIG9hdXRoQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgaWYgKHVzZXJDb250ZXh0Py5pZCAmJiB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcbiAgICBpbml0QXBpQ2xpZW50KHVzZXJDb250ZXh0LmlkLCB1c2VyQ29udGV4dC5hY2NvdW50LmlkKTtcbiAgfVxuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8T25ib2FyZGluZ1N0YXRlPignYXV0aCcpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFthdXRoQ2FsbGJhY2tTdWNjZWVkZWQsIHNldEF1dGhDYWxsYmFja1N1Y2NlZWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgc3luY0FsbCwgc3luY2luZywgcHJvZ3Jlc3MsIGVycm9yOiBzeW5jRXJyb3IgfSA9IHVzZVN0cmlwZVN5bmMoKTtcblxuICBjb25zdCBoYW5kbGVTZXR1cCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAvLyBTdGVwIDE6IFRyeSBhdXRoLWNhbGxiYWNrIGlmIHdlIGhhdmUgYW4gT0F1dGggY29kZVxuICAgIGlmIChvYXV0aENvbnRleHQ/LmNvZGUgJiYgIW9hdXRoQ29udGV4dD8uZXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUNsaWVudCgnL2F1dGgtY2FsbGJhY2snLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgY29kZTogb2F1dGhDb250ZXh0LmNvZGUsXG4gICAgICAgICAgICBzdGF0ZTogb2F1dGhDb250ZXh0LnN0YXRlIHx8ICcnLFxuICAgICAgICAgICAgdmVyaWZpZXI6IG9hdXRoQ29udGV4dC52ZXJpZmllciB8fCAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0QXV0aENhbGxiYWNrU3VjY2VlZGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEF1dGggY2FsbGJhY2sgZmFpbGVkIFx1MjAxNCBjb250aW51ZSB3aXRoIFNESyBzeW5jIGFueXdheVxuICAgICAgICBjb25zb2xlLndhcm4oJ2F1dGgtY2FsbGJhY2sgZmFpbGVkLCBwcm9jZWVkaW5nIHdpdGggU0RLLWJhc2VkIHN5bmMnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDI6IEFsd2F5cyBydW4gU0RLLWJhc2VkIHN5bmNcbiAgICBzZXRTdGF0ZSgnc3luY2luZycpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzeW5jQWxsKCk7XG5cbiAgICAgIC8vIFN0ZXAgMzogSWYgYXV0aC1jYWxsYmFjayBzdWNjZWVkZWQsIGFsc28gdHJpZ2dlciBiYWNrZW5kIHN5bmMgZm9yIGNvbXBsZXRlbmVzc1xuICAgICAgaWYgKGF1dGhDYWxsYmFja1N1Y2NlZWRlZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtdHJpZ2dlcicsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IHt9IH0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBOb24tY3JpdGljYWwgXHUyMDE0IFNESyBzeW5jIGFscmVhZHkgcG9wdWxhdGVkIHRoZSBjYWNoZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKCdzdWNjZXNzJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnRmFpbGVkIHRvIHN5bmMgeW91ciBTdHJpcGUgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICB9XG4gIH0sIFtvYXV0aENvbnRleHQsIHN5bmNBbGwsIGF1dGhDYWxsYmFja1N1Y2NlZWRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlU2V0dXAoKTtcbiAgfSwgW2hhbmRsZVNldHVwXSk7XG5cbiAgLy8gVXBkYXRlIHN0YXRlIGlmIHN5bmMgZXJyb3Igb2NjdXJzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN5bmNFcnJvcikge1xuICAgICAgc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2Uoc3luY0Vycm9yKTtcbiAgICB9XG4gIH0sIFtzeW5jRXJyb3JdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIldlbGNvbWUgdG8gSmF2ZWxpblwiPlxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScsIGFsaWduWDogJ2NlbnRlcicgfX0+XG4gICAgICAgIHsoc3RhdGUgPT09ICdhdXRoJyB8fCAoc3RhdGUgPT09ICdzeW5jaW5nJyAmJiBzeW5jaW5nKSkgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2hlYWRpbmcnIH19PlxuICAgICAgICAgICAgICB7c3RhdGUgPT09ICdhdXRoJyA/ICdDb25uZWN0aW5nIHRvIFN0cmlwZS4uLicgOiAnU3luY2luZyB5b3VyIGRhdGEuLi4nfVxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICB7c3RhdGUgPT09ICdzeW5jaW5nJyAmJiBwcm9ncmVzcy5jdXJyZW50ICYmIChcbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnLCB3aWR0aDogJ2ZpbGwnIH19PlxuICAgICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICAgIFN5bmNpbmcge09CSkVDVF9UWVBFX0xBQkVMU1twcm9ncmVzcy5jdXJyZW50XSB8fCBwcm9ncmVzcy5jdXJyZW50fSAoe3Byb2dyZXNzLmNvbXBsZXRlZCArIDF9L3twcm9ncmVzcy50b3RhbH0pXG4gICAgICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKE9CSkVDVF9UWVBFX0xBQkVMUykubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBPYmplY3Qua2V5cyhPQkpFQ1RfVFlQRV9MQUJFTFMpLmluZGV4T2YodHlwZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbXBsZXRlID0gaWR4IDwgcHJvZ3Jlc3MuY29tcGxldGVkO1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gdHlwZSA9PT0gcHJvZ3Jlc3MuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt0eXBlfSBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBsZXRlICYmIDxJY29uIG5hbWU9XCJjaGVja1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6IGlzQ29tcGxldGUgfHwgaXNDdXJyZW50ID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T0JKRUNUX1RZUEVfTEFCRUxTW3R5cGVdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3RhdGUgPT09ICdzdWNjZXNzJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlNldHVwIGNvbXBsZXRlIVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSmF2ZWxpbiBpcyByZWFkeS4gWW91ciBkYXRhIGhhcyBiZWVuIHN5bmNlZCBcdTIwMTQgeW91IGNhbiBzdGFydCBhc2tpbmcgcXVlc3Rpb25zIHJpZ2h0IGF3YXkuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIE9wZW4gdGhlIEphdmVsaW4gZHJhd2VyIGZyb20gYW55IHBhZ2UgaW4geW91ciBTdHJpcGUgRGFzaGJvYXJkIHRvIGdldCBzdGFydGVkLlxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnZXJyb3InICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIlNldHVwIGZhaWxlZFwiIGRlc2NyaXB0aW9uPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU2V0dXB9PlxuICAgICAgICAgICAgICBSZXRyeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT25ib2FyZGluZ1ZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxjQUFjO0FBQ3RCLGNBQVEsY0FBYztBQUFBO0FBQUE7OztBQ0h0QjtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxrQkFBa0IsUUFBUSxZQUFZLFFBQVEsY0FBYyxRQUFRLFlBQVksUUFBUSxZQUFZLFFBQVEsTUFBTSxRQUFRLFlBQVksUUFBUSxXQUFXLFFBQVEsVUFBVSxRQUFRLFNBQVMsUUFBUSxxQkFBcUIsUUFBUSxVQUFVLFFBQVEsWUFBWSxRQUFRLGFBQWEsUUFBUSxlQUFlLFFBQVEsU0FBUyxRQUFRLFFBQVEsUUFBUSxlQUFlLFFBQVEsbUJBQW1CLFFBQVEsNEJBQTRCLFFBQVEsaUJBQWlCLFFBQVEsT0FBTyxRQUFRLFdBQVcsUUFBUSxZQUFZLFFBQVEsT0FBTyxRQUFRLFdBQVcsUUFBUSxPQUFPLFFBQVEsWUFBWSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsT0FBTyxRQUFRLGlCQUFpQixRQUFRLFlBQVksUUFBUSxVQUFVLFFBQVEsa0JBQWtCLFFBQVEseUJBQXlCLFFBQVEsbUJBQW1CLFFBQVEsWUFBWSxRQUFRLGNBQWMsUUFBUSxPQUFPLFFBQVEsV0FBVyxRQUFRLFdBQVcsUUFBUSxTQUFTLFFBQVEsY0FBYyxRQUFRLE1BQU0sUUFBUSxXQUFXLFFBQVEsU0FBUyxRQUFRLFFBQVEsUUFBUSxZQUFZLFFBQVEsZ0JBQWdCO0FBQ3IvQixjQUFRLFVBQVUsUUFBUSxZQUFZLFFB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QSxVQUNiO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsRUFDYjsiLAogICJuYW1lcyI6IFsiX2EiLCAiZmV0Y2giLCAiY3JlYXRlSHR0cENsaWVudCIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJyZXF1aXJlX3NpZ25hdHVyZSIsICJleHBvcnRzIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3VpIiwgImltcG9ydF91aSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJfYSIsICJzdHJpcGUiLCAiaGVhZGVycyIsICJhdXRoZW50aWNhdG9yIiwgIl9hIiwgImRhdGEiLCAicmVzdWx0IiwgInN0cmlwZSIsICJfYSIsICJkYXRhIiwgInVybERhdGEiLCAic2lnbmF0dXJlIiwgIkFjY291bnRzIiwgIkFjY291bnRMaW5rcyIsICJDb25maXJtYXRpb25Ub2tlbnMiLCAiQ3VzdG9tZXJzIiwgIkRpc3B1dGVzIiwgIkV2ZW50cyIsICJQcm9kdWN0cyIsICJSZWZ1bmRzIiwgIlRva2VucyIsICJzdHJpcGUiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQWNjb3VudHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJBdXRob3JpemF0aW9ucyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQ2FyZHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJDb25maWd1cmF0aW9ucyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiSW5ib3VuZFRyYW5zZmVycyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJNZXRlckV2ZW50QWRqdXN0bWVudHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIk1ldGVyRXZlbnRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiT3V0Ym91bmRQYXltZW50cyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIk91dGJvdW5kVHJhbnNmZXJzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlBlcnNvbmFsaXphdGlvbkRlc2lnbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlJlYWRlcnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJSZWNlaXZlZENyZWRpdHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJSZWNlaXZlZERlYml0cyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJTZXNzaW9ucyIsICJzdHJpcGVNZXRob2QiLCAiU2Vzc2lvbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlRyYW5zYWN0aW9ucyIsICJzdHJpcGVNZXRob2QiLCAiVHJhbnNhY3Rpb25zIiwgInN0cmlwZU1ldGhvZCIsICJUcmFuc2FjdGlvbnMiLCAic3RyaXBlTWV0aG9kIiwgIlRyYW5zYWN0aW9ucyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIkFjY291bnRzIiwgInN0cmlwZU1ldGhvZCIsICJBY2NvdW50TGlua3MiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJDb25maXJtYXRpb25Ub2tlbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJDdXN0b21lcnMiLCAic3RyaXBlTWV0aG9kIiwgIkRpc3B1dGVzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiRXZlbnRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiUHJvZHVjdHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiUmVmdW5kcyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJUb2tlbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiU2Vzc2lvbnMiLCAiVHJhbnNhY3Rpb25zIiwgIkNvbmZpZ3VyYXRpb25zIiwgIkF1dGhvcml6YXRpb25zIiwgIkNhcmRzIiwgIlBlcnNvbmFsaXphdGlvbkRlc2lnbnMiLCAiUmVhZGVycyIsICJJbmJvdW5kVHJhbnNmZXJzIiwgIk91dGJvdW5kUGF5bWVudHMiLCAiT3V0Ym91bmRUcmFuc2ZlcnMiLCAiUmVjZWl2ZWRDcmVkaXRzIiwgIlJlY2VpdmVkRGViaXRzIiwgIk1ldGVyRXZlbnRBZGp1c3RtZW50cyIsICJNZXRlckV2ZW50cyIsICJBY2NvdW50cyIsICJzdHJpcGUiLCAiU3RyaXBlIiwgIl9hIiwgImlzT2JqZWN0IiwgImltcG9ydF91dGlscyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJfYSJdCn0K
