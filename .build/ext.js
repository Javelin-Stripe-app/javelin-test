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
      total: OBJECT_TYPES.length,
      failed: []
    });
    const [error, setError] = (0, import_react4.useState)(null);
    const syncingRef = (0, import_react4.useRef)(false);
    const syncAll = (0, import_react4.useCallback)(() => __async(this, null, function* () {
      if (syncingRef.current)
        return false;
      syncingRef.current = true;
      setSyncing(true);
      setError(null);
      setProgress({ completed: 0, total: OBJECT_TYPES.length, failed: [] });
      const failed = [];
      let lastError = "";
      for (const objectType of OBJECT_TYPES) {
        setProgress((prev) => __spreadProps(__spreadValues({}, prev), { current: objectType }));
        try {
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
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error(`Sync failed for ${objectType}:`, msg);
          lastError = msg;
          failed.push(objectType);
        }
        setProgress((prev) => __spreadProps(__spreadValues({}, prev), {
          completed: prev.completed + 1,
          failed: [...failed]
        }));
      }
      syncingRef.current = false;
      setSyncing(false);
      const succeeded = OBJECT_TYPES.length - failed.length;
      if (failed.length > 0 && succeeded === 0) {
        setError(`Sync failed: ${lastError}`);
        return false;
      }
      if (failed.length > 0) {
        setError(`Synced ${succeeded}/${OBJECT_TYPES.length} types. Failed: ${failed.join(", ")}`);
      }
      return succeeded > 0;
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
    const [syncComplete, setSyncComplete] = (0, import_react5.useState)(false);
    const { syncAll, syncing, progress, error: syncError } = useStripeSync();
    const syncChecked = (0, import_react5.useRef)(false);
    const checkAndSync = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      var _a3;
      if (syncChecked.current)
        return;
      syncChecked.current = true;
      try {
        const response = yield apiClient("/insights-welcome");
        const insights = ((_a3 = response.data) == null ? void 0 : _a3.insights) || [];
        setWelcomeInsights(insights);
        if (insights.length === 0) {
          const ok = yield syncAll();
          setSyncComplete(true);
          if (ok) {
            yield loadWelcomeInsights();
          }
        }
      } catch (e) {
        const ok = yield syncAll();
        setSyncComplete(true);
        if (ok) {
          yield loadWelcomeInsights();
        }
      }
    }), [syncAll]);
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
      checkAndSync();
    }, [loadConversations, checkAndSync]);
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
    const handleManualSync = (0, import_react5.useCallback)(() => __async(void 0, null, function* () {
      syncChecked.current = false;
      setSyncComplete(false);
      const ok = yield syncAll();
      setSyncComplete(true);
      if (ok) {
        yield loadWelcomeInsights();
      }
    }), [syncAll]);
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
          syncing && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Box, {
            css: { padding: "small", backgroundColor: "container", stack: "x", gap: "small", alignY: "center" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Spinner, {
                size: "small"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_ui9.Inline, {
                css: { color: "secondary" },
                children: [
                  "Syncing data... (",
                  progress.completed,
                  "/",
                  progress.total,
                  ")"
                ]
              })
            ]
          }),
          syncError && !syncing && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Banner, {
            type: "caution",
            title: "Sync issue",
            description: syncError,
            actions: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Button, {
              onPress: handleManualSync,
              children: "Retry sync"
            })
          }),
          syncComplete && !syncing && !syncError && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ui9.Banner, {
            type: "default",
            title: "Data synced",
            description: "Your Stripe data is up to date.",
            onDismiss: () => setSyncComplete(false)
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
    const { syncAll, syncing, progress, error: syncError } = useStripeSync();
    const hasRun = (0, import_react6.useRef)(false);
    const handleSetup = (0, import_react6.useCallback)(() => __async(void 0, null, function* () {
      if (hasRun.current)
        return;
      hasRun.current = true;
      let authOk = false;
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
          authOk = true;
        } catch (e) {
          console.warn("auth-callback failed, proceeding with SDK-based sync");
        }
      }
      setState("syncing");
      const anyDataSynced = yield syncAll();
      if (!anyDataSynced) {
        setState("error");
        setErrorMessage("Failed to sync your Stripe data. Please try again.");
        hasRun.current = false;
        return;
      }
      if (authOk) {
        try {
          yield apiClient("/sync-trigger", { method: "POST", body: {} });
        } catch (e) {
        }
      }
      setState("success");
    }), [oauthContext, syncAll]);
    (0, import_react6.useEffect)(() => {
      handleSetup();
    }, [handleSetup]);
    const handleRetry = (0, import_react6.useCallback)(() => {
      hasRun.current = false;
      setErrorMessage("");
      setState("auth");
      handleSetup();
    }, [handleSetup]);
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
                    const isFailed = progress.failed.includes(type);
                    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_ui11.Box, {
                      css: { stack: "x", gap: "small", alignY: "center" },
                      children: [
                        isComplete && !isFailed && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Icon, {
                          name: "check"
                        }),
                        isComplete && isFailed && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Icon, {
                          name: "warning"
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
              syncError && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui11.Banner, {
                type: "caution",
                title: "Partial sync",
                description: syncError
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
                onPress: handleRetry,
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
  var BUILD_TIME = "2026-02-13 10:08:36.502099 -0300 -03 m=+1.825940176";
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
    "version": "0.0.7"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvX2VuZHBvaW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoVmlhRnJhbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFIb3N0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9jbGlwYm9hcmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9jb250ZXh0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2lzUGVybWlzc2lvbkF1dGhvcml6ZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL29hdXRoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvcGxhdGZvcm1ScGNzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvdG9hc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9pbmRleC5qcyIsICJtYW5pZmVzdC5qcyIsICIuLi9zcmMvdmlld3MvQ2hhdFZpZXcudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NoYXRUaHJlYWQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCdWJibGUudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0luc2lnaHRDYXJkLnRzeCIsICIuLi9zcmMvbGliL2FwaS1jbGllbnQudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvVGhpbmtpbmdJbmRpY2F0b3IudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NsYXJpZmljYXRpb25Qcm9tcHQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0NoYXRJbnB1dC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvV2VsY29tZVByb21wdC50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdC50c3giLCAiLi4vc3JjL2hvb2tzL3VzZVN0cmlwZVN5bmMudHMiLCAiLi4vc3JjL2xpYi9zdHJpcGUtY2xpZW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3V0aWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL25ldC9IdHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL25ldC9GZXRjaEh0dHBDbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vY3J5cHRvL0NyeXB0b1Byb3ZpZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL2NyeXB0by9TdWJ0bGVDcnlwdG9Qcm92aWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9wbGF0Zm9ybS9QbGF0Zm9ybUZ1bmN0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9TdHJpcGVFbWl0dGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3BsYXRmb3JtL1dlYlBsYXRmb3JtRnVuY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL0Vycm9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1JlcXVlc3RTZW5kZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vYXV0b1BhZ2luYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vU3RyaXBlTWV0aG9kLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1N0cmlwZVJlc291cmNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL1N0cmlwZUNvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vV2ViaG9va3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vYXBpVmVyc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vUmVzb3VyY2VOYW1lc3BhY2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudExpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRUb2tlbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZpbmFuY2lhbENvbm5lY3Rpb25zL0FjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRzL1BlcnNvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudHMvUGVyc29uVG9rZW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvQWN0aXZlRW50aXRsZW1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL0FsZXJ0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L0Fzc29jaWF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L0NhbGN1bGF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9DYXJkaG9sZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9DYXJkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9DYXJkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZ1BvcnRhbC9Db25maWd1cmF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvQ29uZmlndXJhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0NvbmZpcm1hdGlvblRva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvQ29ubmVjdGlvblRva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlU3VtbWFyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmlsbGluZy9DcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL0NyZWRpdEdyYW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVHJlYXN1cnkvQ3JlZGl0UmV2ZXJzYWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXN0SGVscGVycy9DdXN0b21lcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L0RlYml0UmV2ZXJzYWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Jc3N1aW5nL0Rpc3B1dGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9FYXJseUZyYXVkV2FybmluZ3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvRXZlbnREZXN0aW5hdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1YyL0NvcmUvRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvRmVhdHVyZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L0ZpbmFuY2lhbEFjY291bnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UZXJtaW5hbC9Mb2NhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0JpbGxpbmcvTWV0ZXJFdmVudEFkanVzdG1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRBZGp1c3RtZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50U2Vzc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50U3RyZWFtLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL01ldGVyRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nL01ldGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvT25ib2FyZGluZ0xpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DbGltYXRlL09yZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvT3V0Ym91bmRQYXltZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVHJlYXN1cnkvT3V0Ym91bmRQYXltZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvT3V0Ym91bmRUcmFuc2ZlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RyZWFzdXJ5L091dGJvdW5kVHJhbnNmZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9QYXltZW50RXZhbHVhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0lzc3VpbmcvUGVyc29uYWxpemF0aW9uRGVzaWducy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9QZXJzb25hbGl6YXRpb25EZXNpZ25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Jc3N1aW5nL1BoeXNpY2FsQnVuZGxlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ2xpbWF0ZS9Qcm9kdWN0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVybWluYWwvUmVhZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVGVybWluYWwvUmVhZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvVHJlYXN1cnkvUmVjZWl2ZWRDcmVkaXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZENyZWRpdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L1JlY2VpdmVkRGViaXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZERlYml0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvUmVmdW5kcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4L1JlZ2lzdHJhdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JlcG9ydGluZy9SZXBvcnRSdW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SZXBvcnRpbmcvUmVwb3J0VHlwZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZvcndhcmRpbmcvUmVxdWVzdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NpZ21hL1NjaGVkdWxlZFF1ZXJ5UnVucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQXBwcy9TZWNyZXRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CaWxsaW5nUG9ydGFsL1Nlc3Npb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DaGVja291dC9TZXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmluYW5jaWFsQ29ubmVjdGlvbnMvU2Vzc2lvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheC9TZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ2xpbWF0ZS9TdXBwbGllcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1Rlc3RDbG9ja3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0lzc3VpbmcvVG9rZW5zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9UcmFuc2FjdGlvbkVudHJpZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ZpbmFuY2lhbENvbm5lY3Rpb25zL1RyYW5zYWN0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSXNzdWluZy9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheC9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0lzc3VpbmcvVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmVhc3VyeS9UcmFuc2FjdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JhZGFyL1ZhbHVlTGlzdEl0ZW1zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9SYWRhci9WYWx1ZUxpc3RzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25SZXBvcnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JZGVudGl0eS9WZXJpZmljYXRpb25TZXNzaW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQWNjb3VudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0FjY291bnRMaW5rcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQWNjb3VudFNlc3Npb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9BcHBsZVBheURvbWFpbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0FwcGxpY2F0aW9uRmVlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmFsYW5jZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQmFsYW5jZVNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9CYWxhbmNlVHJhbnNhY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9DaGFyZ2VzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9Db25maXJtYXRpb25Ub2tlbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0NvdW50cnlTcGVjcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ291cG9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvQ3JlZGl0Tm90ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0N1c3RvbWVyU2Vzc2lvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0N1c3RvbWVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRGlzcHV0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0VwaGVtZXJhbEtleXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0V2ZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRXhjaGFuZ2VSYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmlsZUxpbmtzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL211bHRpcGFydC5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvRmlsZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL0ludm9pY2VJdGVtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvSW52b2ljZVBheW1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JbnZvaWNlUmVuZGVyaW5nVGVtcGxhdGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9JbnZvaWNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvTWFuZGF0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL09BdXRoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50QXR0ZW1wdFJlY29yZHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRJbnRlbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50TGlua3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRNZXRob2RDb25maWd1cmF0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZERvbWFpbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1BheW1lbnRNZXRob2RzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9QYXltZW50UmVjb3Jkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGF5b3V0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUGxhbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1ByaWNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvUHJvZHVjdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Byb21vdGlvbkNvZGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9RdW90ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1JlZnVuZHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Jldmlld3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NldHVwQXR0ZW1wdHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1NldHVwSW50ZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU2hpcHBpbmdSYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU291cmNlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU3Vic2NyaXB0aW9uSXRlbXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1N1YnNjcmlwdGlvblNjaGVkdWxlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4Q29kZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1RheElkcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVGF4UmF0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1Rva2Vucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvc3RyaXBlL2VzbS9yZXNvdXJjZXMvVG9wdXBzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdHJpcGUvZXNtL3Jlc291cmNlcy9UcmFuc2ZlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vcmVzb3VyY2VzL1dlYmhvb2tFbmRwb2ludHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vc3RyaXBlLmNvcmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwZS9lc20vc3RyaXBlLmVzbS53b3JrZXIuanMiLCAiLi4vc3JjL3ZpZXdzL1NldHRpbmdzVmlldy50c3giLCAiLi4vc3JjL3ZpZXdzL09uYm9hcmRpbmdWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNES19WRVJTSU9OID0gdm9pZCAwO1xuZXhwb3J0cy5TREtfVkVSU0lPTiA9ICc5LjEuMCc7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGV4cG9ydHMuVGFibGVIZWFkID0gZXhwb3J0cy5UYWJsZUZvb3RlciA9IGV4cG9ydHMuVGFibGVDZWxsID0gZXhwb3J0cy5UYWJsZUJvZHkgPSBleHBvcnRzLlRhYiA9IGV4cG9ydHMuVGFiUGFuZWxzID0gZXhwb3J0cy5UYWJQYW5lbCA9IGV4cG9ydHMuVGFiTGlzdCA9IGV4cG9ydHMuU3dpdGNoID0gZXhwb3J0cy5TdHJpcGVGaWxlVXBsb2FkZXIgPSBleHBvcnRzLlNwaW5uZXIgPSBleHBvcnRzLlNwYXJrbGluZSA9IGV4cG9ydHMuU2lnbkluVmlldyA9IGV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZXhwb3J0cy5TZWxlY3QgPSBleHBvcnRzLlJhZGlvID0gZXhwb3J0cy5Qcm9wZXJ0eUxpc3QgPSBleHBvcnRzLlByb3BlcnR5TGlzdEl0ZW0gPSBleHBvcnRzLlBsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcgPSBleHBvcnRzLk9uYm9hcmRpbmdWaWV3ID0gZXhwb3J0cy5NZW51ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuTWVudUdyb3VwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5MaXN0SXRlbSA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuTGluZUNoYXJ0ID0gZXhwb3J0cy5JbmxpbmUgPSBleHBvcnRzLkltZyA9IGV4cG9ydHMuSWNvbiA9IGV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBleHBvcnRzLkZvY3VzVmlldyA9IGV4cG9ydHMuRGl2aWRlciA9IGV4cG9ydHMuRGV0YWlsUGFnZVRhYmxlID0gZXhwb3J0cy5EZXRhaWxQYWdlUHJvcGVydHlMaXN0ID0gZXhwb3J0cy5EZXRhaWxQYWdlTW9kdWxlID0gZXhwb3J0cy5EYXRlRmllbGQgPSBleHBvcnRzLkNvbnRleHRWaWV3ID0gZXhwb3J0cy5DaGlwID0gZXhwb3J0cy5DaGlwTGlzdCA9IGV4cG9ydHMuQ2hlY2tib3ggPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuQnV0dG9uR3JvdXAgPSBleHBvcnRzLkJveCA9IGV4cG9ydHMuQmFyQ2hhcnQgPSBleHBvcnRzLkJhbm5lciA9IGV4cG9ydHMuQmFkZ2UgPSBleHBvcnRzLkFjY29yZGlvbiA9IGV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IHZvaWQgMDtcbmV4cG9ydHMuVG9vbHRpcCA9IGV4cG9ydHMuVGV4dEZpZWxkID0gZXhwb3J0cy5UZXh0QXJlYSA9IGV4cG9ydHMuVGFza0xpc3QgPSBleHBvcnRzLlRhc2tMaXN0SXRlbSA9IGV4cG9ydHMuVGFicyA9IGV4cG9ydHMuVGFibGVSb3cgPSBleHBvcnRzLlRhYmxlID0gdm9pZCAwO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwiQHJlbW90ZS11aS9yZWFjdFwiKTtcbmNvbnN0IHZlcnNpb25fMSA9IHJlcXVpcmUoXCIuLi92ZXJzaW9uXCIpO1xuY29uc3Qgd2l0aFNka1Byb3BzID0gKENvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IFdpdGhTZGtQcm9wcyA9IChwcm9wcykgPT4gKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoQ29tcG9uZW50LCB7IC4uLnByb3BzLCB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsIHNka1ZlcnNpb246IHZlcnNpb25fMS5TREtfVkVSU0lPTiwgc2NoZW1hVmVyc2lvbjogXCJ2OVwiIH0pKTtcbiAgICBXaXRoU2RrUHJvcHMud3JhcHBlZENvbXBvbmVudE5hbWUgPSB3cmFwcGVkQ29tcG9uZW50TmFtZTtcbiAgICByZXR1cm4gV2l0aFNka1Byb3BzO1xufTtcbmNvbnN0IGRlZmluZUNvbXBvbmVudCA9IChuYW1lLCBmcmFnbWVudFByb3BzLCB3cmFwV2l0aFNka1Byb3BzKSA9PiB7XG4gICAgY29uc3QgcmVtb3RlQ29tcG9uZW50ID0gKDAsIHJlYWN0XzEuY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQpKG5hbWUsIHtcbiAgICAgICAgZnJhZ21lbnRQcm9wcyxcbiAgICB9KTtcbiAgICBpZiAoIXdyYXBXaXRoU2RrUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW90ZUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhTZGtQcm9wcyhyZW1vdGVDb21wb25lbnQpO1xufTtcbmV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IGRlZmluZUNvbXBvbmVudCgnQWNjb3JkaW9uSXRlbScsIFsndGl0bGUnLCAnYWN0aW9ucycsICdtZWRpYScsICdzdWJ0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQWNjb3JkaW9uID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkJhZGdlID0gZGVmaW5lQ29tcG9uZW50KCdCYWRnZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFubmVyID0gZGVmaW5lQ29tcG9uZW50KCdCYW5uZXInLCBbJ2FjdGlvbnMnLCAnZGVzY3JpcHRpb24nLCAndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnRzLkJhckNoYXJ0ID0gZGVmaW5lQ29tcG9uZW50KCdCYXJDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQm94ID0gZGVmaW5lQ29tcG9uZW50KCdCb3gnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b25Hcm91cCcsIFsnbWVudVRyaWdnZXInXSwgdHJ1ZSk7XG5leHBvcnRzLkJ1dHRvbiA9IGRlZmluZUNvbXBvbmVudCgnQnV0dG9uJywgW10sIHRydWUpO1xuZXhwb3J0cy5DaGVja2JveCA9IGRlZmluZUNvbXBvbmVudCgnQ2hlY2tib3gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5DaGlwTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcExpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXAgPSBkZWZpbmVDb21wb25lbnQoJ0NoaXAnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNvbnRleHRWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdDb250ZXh0VmlldycsIFsnYWN0aW9ucycsICdiYW5uZXInLCAnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydHMuRGF0ZUZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdEYXRlRmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlTW9kdWxlID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlTW9kdWxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5EZXRhaWxQYWdlVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuRGl2aWRlciA9IGRlZmluZUNvbXBvbmVudCgnRGl2aWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuRm9jdXNWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdGb2N1c1ZpZXcnLCBbJ2Zvb3RlckNvbnRlbnQnLCAncHJpbWFyeUFjdGlvbicsICdzZWNvbmRhcnlBY3Rpb24nXSwgdHJ1ZSk7XG5leHBvcnRzLkZvcm1GaWVsZEdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdGb3JtRmllbGRHcm91cCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSWNvbiA9IGRlZmluZUNvbXBvbmVudCgnSWNvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuSW1nID0gZGVmaW5lQ29tcG9uZW50KCdJbWcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLklubGluZSA9IGRlZmluZUNvbXBvbmVudCgnSW5saW5lJywgW10sIHRydWUpO1xuZXhwb3J0cy5MaW5lQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0xpbmVDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTGluayA9IGRlZmluZUNvbXBvbmVudCgnTGluaycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ0xpc3RJdGVtJywgWydpY29uJywgJ2ltYWdlJywgJ3NlY29uZGFyeVRpdGxlJywgJ3RpdGxlJywgJ3ZhbHVlJ10sIHRydWUpO1xuZXhwb3J0cy5MaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5NZW51R3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ01lbnVHcm91cCcsIFsndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnVJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdNZW51SXRlbScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTWVudSA9IGRlZmluZUNvbXBvbmVudCgnTWVudScsIFsndHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuT25ib2FyZGluZ1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ09uYm9hcmRpbmdWaWV3JywgWydlcnJvciddLCB0cnVlKTtcbmV4cG9ydHMuUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGRlZmluZUNvbXBvbmVudCgnUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuUHJvcGVydHlMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0SXRlbScsIFsnbGFiZWwnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnRzLlByb3BlcnR5TGlzdCA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5SYWRpbyA9IGRlZmluZUNvbXBvbmVudCgnUmFkaW8nLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5TZWxlY3QgPSBkZWZpbmVDb21wb25lbnQoJ1NlbGVjdCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlNldHRpbmdzVmlldyA9IGRlZmluZUNvbXBvbmVudCgnU2V0dGluZ3NWaWV3JywgW10sIHRydWUpO1xuZXhwb3J0cy5TaWduSW5WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTaWduSW5WaWV3JywgWydkZXNjcmlwdGlvbkFjdGlvbkNvbnRlbnRzJywgJ2Zvb3RlckNvbnRlbnQnXSwgdHJ1ZSk7XG5leHBvcnRzLlNwYXJrbGluZSA9IGRlZmluZUNvbXBvbmVudCgnU3BhcmtsaW5lJywgW10sIHRydWUpO1xuZXhwb3J0cy5TcGlubmVyID0gZGVmaW5lQ29tcG9uZW50KCdTcGlubmVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5TdHJpcGVGaWxlVXBsb2FkZXIgPSBkZWZpbmVDb21wb25lbnQoJ1N0cmlwZUZpbGVVcGxvYWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuU3dpdGNoID0gZGVmaW5lQ29tcG9uZW50KCdTd2l0Y2gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5UYWJMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJQYW5lbCA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYlBhbmVscyA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWxzJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWIgPSBkZWZpbmVDb21wb25lbnQoJ1RhYicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVCb2R5ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUJvZHknLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUZvb3RlciA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVGb290ZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlSGVhZCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUhlYWRlckNlbGwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlSGVhZGVyQ2VsbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZVJvdyA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVSb3cnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYnMgPSBkZWZpbmVDb21wb25lbnQoJ1RhYnMnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhc2tMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3RJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYXNrTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRleHRBcmVhID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0QXJlYScsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRleHRGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnVGV4dEZpZWxkJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVG9vbHRpcCA9IGRlZmluZUNvbXBvbmVudCgnVG9vbHRpcCcsIFsndHJpZ2dlciddLCB0cnVlKTtcbiIsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFByaXZhdGUhIFRoaXMgYWxsb3dzIHRoZSBzaGFyZWQgZW5kcG9pbnQgdG8gYmUgaW50aWFsaXplZFxuICogc28gdGhhdCB0aGUgU0RLIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHRoZSBEYXNoYm9hcmQuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0SG9zdEVuZHBvaW50ID0gdm9pZCAwO1xuY29uc3QgaW52YXJpYW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5jb25zdCBnZXRIb3N0RW5kcG9pbnQgPSAoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBlbmRwb2ludCBpcyBjcmVhdGVkIGZyb20gdGhlIE1lc3NhZ2VQb3J0IHRyYW5zZmVycmVkIGZyb20gdGhlIGhvc3QgZW52XG4gICAgLy8gYXMgYSBwYXJ0IG9mIHRoZSBgaW5pdF9leHRlbnNpb25gIG1lc3NhZ2UuXG4gICAgY29uc3QgaG9zdEVuZHBvaW50ID0gZ2xvYmFsVGhpcy5fX1N0cmlwZUV4dEV4cG9ydHM/LmVuZHBvaW50O1xuICAgICgwLCBpbnZhcmlhbnRfMS5kZWZhdWx0KShob3N0RW5kcG9pbnQsICdob3N0RW5kcG9pbnQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuIGhvc3RFbmRwb2ludDtcbn07XG5leHBvcnRzLmdldEhvc3RFbmRwb2ludCA9IGdldEhvc3RFbmRwb2ludDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi4vX2VuZHBvaW50XCIpO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gYXN5bmMgKCkgPT4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKVxuICAgIC5jYWxsLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSgpXG4gICAgLnRoZW4oKHN1cHBvcnRlZCkgPT4gc3VwcG9ydGVkKVxuICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5leHBvcnRzLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSA9IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hBcHBFbWJlZGRlZEtleSA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4uL19lbmRwb2ludFwiKTtcbmNvbnN0IGZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmZldGNoQXBwRW1iZWRkZWRLZXkoKTtcbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBhcHAgZW1iZWRkZWQga2V5Jyk7XG4gICAgfVxuICAgIHJldHVybiBhcGlLZXk7XG59O1xuZXhwb3J0cy5mZXRjaEFwcEVtYmVkZGVkS2V5ID0gZmV0Y2hBcHBFbWJlZGRlZEtleTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hWaWFGcmFtZSA9IHZvaWQgMDtcbmNvbnN0IGZldGNoQXBwRW1iZWRkZWRLZXlfMSA9IHJlcXVpcmUoXCIuL2ZldGNoQXBwRW1iZWRkZWRLZXlcIik7XG5jb25zdCBmZXRjaFZpYUZyYW1lID0gYXN5bmMgKHVybCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgKDAsIGZldGNoQXBwRW1iZWRkZWRLZXlfMS5mZXRjaEFwcEVtYmVkZGVkS2V5KSgpO1xuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNlcmlhbGl6YWJsZVJlc3BvbnNlID0ge1xuICAgICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICAgIGFycmF5QnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIG9rOiByZXNwb25zZS5vayxcbiAgICAgICAgcmVkaXJlY3RlZDogcmVzcG9uc2UucmVkaXJlY3RlZCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgIHVybDogcmVzcG9uc2UudXJsLFxuICAgIH07XG4gICAgc3dpdGNoIChyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5qc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5hcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6YWJsZVJlc3BvbnNlO1xufTtcbmV4cG9ydHMuZmV0Y2hWaWFGcmFtZSA9IGZldGNoVmlhRnJhbWU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZldGNoVmlhSG9zdCA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4uL19lbmRwb2ludFwiKTtcbmNvbnN0IGZldGNoVmlhSG9zdCA9IGFzeW5jIChlbmNvZGVkVXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuY29kZWRVcmwpO1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuc3RyaXBlQXBpRmV0Y2godXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgb3B0aW9ucyk7XG59O1xuZXhwb3J0cy5mZXRjaFZpYUhvc3QgPSBmZXRjaFZpYUhvc3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gdm9pZCAwO1xuY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEgPSByZXF1aXJlKFwiLi9zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXlcIik7XG5jb25zdCBmZXRjaFZpYUZyYW1lXzEgPSByZXF1aXJlKFwiLi9mZXRjaFZpYUZyYW1lXCIpO1xuY29uc3QgZmV0Y2hWaWFIb3N0XzEgPSByZXF1aXJlKFwiLi9mZXRjaFZpYUhvc3RcIik7XG5sZXQgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IG51bGw7XG5jb25zdCBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkU3RyaXBlQXBpRmV0Y2gpIHtcbiAgICAgICAgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IChhd2FpdCAoMCwgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5XzEuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KSgpKVxuICAgICAgICAgICAgPyBmZXRjaFZpYUZyYW1lXzEuZmV0Y2hWaWFGcmFtZVxuICAgICAgICAgICAgOiBmZXRjaFZpYUhvc3RfMS5mZXRjaFZpYUhvc3Q7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFN0cmlwZUFwaUZldGNoO1xufTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSB2b2lkIDA7XG52YXIgc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hfMSA9IHJlcXVpcmUoXCIuL3NlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoXzEuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2g7IH0gfSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmlwZUFwaUZldGNoID0gdm9pZCAwO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi9hcGlcIik7XG5jb25zdCBzdHJpcGVBcGlGZXRjaCA9IGFzeW5jIChwYXRoLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJlZmVycmVkRmV0Y2hNZXRob2QgPSBhd2FpdCAoMCwgYXBpXzEuc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2gpKCk7XG4gICAgcmV0dXJuIHByZWZlcnJlZEZldGNoTWV0aG9kKHBhdGgsIG9wdGlvbnMpO1xufTtcbmV4cG9ydHMuc3RyaXBlQXBpRmV0Y2ggPSBzdHJpcGVBcGlGZXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fSEVBREVSID0gZXhwb3J0cy5jcmVhdGVIdHRwQ2xpZW50ID0gZXhwb3J0cy5TVFJJUEVfQVBJX0tFWSA9IGV4cG9ydHMuU3RyaXBlQXBwc0h0dHBDbGllbnQgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgSHR0cENsaWVudCB0aGF0IGNhbiBiZSBwbHVnZ2VkIGludG8gc3RyaXBlLW5vZGVcbiAqIHRoYXQgd2lsbCBhbGxvdyB0aGUgdXNlciB0byB1c2Ugc3RyaXBlLW5vZGUgaW4gZXh0ZW5zaW9ucyBpZiB0aGUgRGFzaGJvYXJkXG4gKiBwcm92aWRlcyBhIGBzdHJpcGVBcGlGZXRjaGAgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbGF5IEFQSSBjYWxscyB0aHJvdWdoIHRoZVxuICogRGFzaGJvYXJkIGFuZCBwaWdneSBiYWNrIG9uIHRoZSB1c2VyJ3MgRGFzaGJvYXJkIHNlc3Npb24uXG4gKi9cbmNvbnN0IGludmFyaWFudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpbnZhcmlhbnRcIikpO1xuY29uc3QgYXBpRmV0Y2hfMSA9IHJlcXVpcmUoXCIuL2FwaUZldGNoXCIpO1xuY29uc3QgbWF0Y2hlc1N0cmlwZUtleSA9IC9bcHNda18odGVzdHxsaXZlKV9bQS1aYS16MC05XSsvO1xuY2xhc3MgU3RyaXBlQXBwc0h0dHBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcCkge1xuICAgICAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3AuaGVhZGVycztcbiAgICB9XG4gICAgZ2V0U3RhdHVzQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3Auc3RhdHVzO1xuICAgIH1cbiAgICBnZXRSYXdSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3A7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgdG9TdHJlYW0oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtcyBoYXZlIG5vdCBiZWVuIGltcGxlbWVudGVkIGluIHRoZSBTdHJpcGUgSFRUUCBjbGllbnQnKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gdGhpcy5fcmVzcDtcbiAgICAgICAgaWYgKGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUmVzcG9uc2UgYm9keSB1bmRlZmluZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgU3RyaXBlQXBwc0h0dHBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGZldGNoKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoID0gZmV0Y2g7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0Q2xpZW50TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzdHJpcGUtdWktZXh0ZW5zaW9uJztcbiAgICB9XG4gICAgYXN5bmMgbWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgcGF0aCwgbWV0aG9kLCBoZWFkZXJzLCByZXF1ZXN0RGF0YSwgcHJvdG9jb2wsIF90aW1lb3V0KSB7XG4gICAgICAgICgwLCBpbnZhcmlhbnRfMS5kZWZhdWx0KShwcm90b2NvbCA9PT0gJ2h0dHBzJywgJ011c3QgdXNlIGh0dHBzIGNvbm5lY3Rpb25zIGluIFVJIGV4dGVuc2lvbnMnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlcXVlc3REYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IHJlcXVlc3REYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBoZWFkZXJzLkF1dGhvcml6YXRpb247XG4gICAgICAgIGlmIChhdXRoSGVhZGVyICYmIG1hdGNoZXNTdHJpcGVLZXkudGVzdChhdXRoSGVhZGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIGFjdHVhbCBzdHJpcGUga2V5cyB3aGVuIHVzaW5nIHRoZSBTdHJpcGUgSlMgQVBJIGNsaWVudCB3aXRoIFVJIGV4dGVzaW9ucy5cXG5cXG4gSW5zdGVhZCwgdXNlIGBTVFJJUEVfQVBJX0tFWWAgZnJvbSBgQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2h0dHBfY2xpZW50YCBhcyBhIHBsYWNlaG9sZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aCwgYCR7cHJvdG9jb2x9Oi8vJHtob3N0fWApO1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5fZmV0Y2godXJsLnRvU3RyaW5nKCksIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciB0aW1lb3V0cy5cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlKHJlc3ApO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaXBlQXBwc0h0dHBDbGllbnQgPSBTdHJpcGVBcHBzSHR0cENsaWVudDtcbi8vIERPIE5PVCBjaGFuZ2UgdGhpcyBzdHJpbmcgd2l0aG91dCBhIGRlcHJlY2F0aW9uIHBsYW4uIFRoZSBydW50aW1lIGNoZWNrcyB0byBtYWtlIHN1cmUgdGhhdCB0aGlzXG4vLyBleGFjdCBzdHJpbmcgaXMgcGFzc2VkLCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbi8vIFNlZTogbWFuYWdlL2Zyb250ZW5kL3NyYy90YWlsb3IvZXh0ZW5zaW9ucy9ob3N0L2FwaV9mZXRjaC5qc1xuZXhwb3J0cy5TVFJJUEVfQVBJX0tFWSA9ICdET19OT1RfUEFTU19BX1JFQUxfQVBJX0tFWSc7XG5jb25zdCBjcmVhdGVIdHRwQ2xpZW50ID0gKCkgPT4gbmV3IFN0cmlwZUFwcHNIdHRwQ2xpZW50KGFwaUZldGNoXzEuc3RyaXBlQXBpRmV0Y2gpO1xuZXhwb3J0cy5jcmVhdGVIdHRwQ2xpZW50ID0gY3JlYXRlSHR0cENsaWVudDtcbmV4cG9ydHMuQVVUSE9SSVpBVElPTl9IRUFERVIgPSAnQXV0aG9yaXphdGlvbic7XG5leHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBgQmVhcmVyICR7ZXhwb3J0cy5TVFJJUEVfQVBJX0tFWX1gO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gdm9pZCAwO1xuY29uc3QgaHR0cENsaWVudF8xID0gcmVxdWlyZShcIi4uL2h0dHBDbGllbnRcIik7XG5jb25zdCBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gKHsgaG9zdCwgcG9ydCB9KSA9PiBhc3luYyAocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYGh0dHBzOi8vJHtob3N0fToke3BvcnR9L3YxL2FwcHMvYXBwX2VtYmVkZGVkX2JhY2tlbmRfc2lnbmF0dXJlYCk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3BheWxvYWQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBheWxvYWQgfSkpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpbmNsdWRlX29ubHlbXScsICdzaWduYXR1cmUnKTtcbiAgICBjb25zdCBjbGllbnQgPSAoMCwgaHR0cENsaWVudF8xLmNyZWF0ZUh0dHBDbGllbnQpKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjbGllbnQubWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgJ0dFVCcsIHt9LCBudWxsLCAnaHR0cHMnKTtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgLnRoZW4oKHIpID0+IHIudG9KU09OKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnNpZ25hdHVyZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0Q29ubmVjdGlvblNldHRpbmdzID0gZXhwb3J0cy5jb25uZWN0aW9uU2V0dGluZ3MgPSB2b2lkIDA7XG5jb25zdCBkZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgIGhvc3Q6ICdhcGkuc3RyaXBlLmNvbScsXG4gICAgcG9ydDogNDQzLFxufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3M7XG5jb25zdCBzZXRDb25uZWN0aW9uU2V0dGluZ3MgPSAoc2V0dGluZ3MpID0+IHtcbiAgICBleHBvcnRzLmNvbm5lY3Rpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncyxcbiAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgfTtcbn07XG5leHBvcnRzLnNldENvbm5lY3Rpb25TZXR0aW5ncyA9IHNldENvbm5lY3Rpb25TZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hTdHJpcGVTaWduYXR1cmUgPSB2b2lkIDA7XG5jb25zdCBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmUvY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseVwiKTtcbmNvbnN0IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleV8xID0gcmVxdWlyZShcIi4vYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleVwiKTtcbmNvbnN0IGNvbm5lY3Rpb25TZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlL2Nvbm5lY3Rpb25TZXR0aW5nc1wiKTtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZmV0Y2hTdHJpcGVTaWduYXR1cmUgPSBhc3luYyAoYWRkaXRpb25hbFBheWxvYWQpID0+IHtcbiAgICBpZiAoYXdhaXQgKDAsIHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleV8xLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSkoKSkge1xuICAgICAgICBjb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gKDAsIGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHlfMS5jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KShjb25uZWN0aW9uU2V0dGluZ3NfMS5jb25uZWN0aW9uU2V0dGluZ3MpO1xuICAgICAgICByZXR1cm4gZmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseShhZGRpdGlvbmFsUGF5bG9hZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmZldGNoU3RyaXBlU2lnbmF0dXJlKGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG59O1xuZXhwb3J0cy5mZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGZldGNoU3RyaXBlU2lnbmF0dXJlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBmaWxlIG1vdmVkIHRvIHV0aWxzOyByZS1leHBvcnRlZCB0byBub3QgYnJlYWsgaW1wb3J0c1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi91dGlscy9zaWduYXR1cmVcIik7XG5leHBvcnRzLmRlZmF1bHQgPSBzaWduYXR1cmVfMS5mZXRjaFN0cmlwZVNpZ25hdHVyZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgZmlsZSBtb3ZlZCB0byB1dGlsczsgcmUtZXhwb3J0ZWQgdG8gbm90IGJyZWFrIGltcG9ydHNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlSHR0cENsaWVudCA9IGV4cG9ydHMuU1RSSVBFX0FQSV9LRVkgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fVkFMVUUgPSBleHBvcnRzLkFVVEhPUklaQVRJT05fSEVBREVSID0gdm9pZCAwO1xuY29uc3QgaHR0cENsaWVudF8xID0gcmVxdWlyZShcIi4vdXRpbHMvaHR0cENsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFVVEhPUklaQVRJT05fSEVBREVSXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9IRUFERVI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBVVRIT1JJWkFUSU9OX1ZBTFVFXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9WQUxVRTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNUUklQRV9BUElfS0VZXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuU1RSSVBFX0FQSV9LRVk7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVIdHRwQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBodHRwQ2xpZW50XzEuY3JlYXRlSHR0cENsaWVudDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh0dHBDbGllbnRfMS5TdHJpcGVBcHBzSHR0cENsaWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2xpcGJvYXJkV3JpdGVUZXh0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBjbGlwYm9hcmRXcml0ZVRleHQgPSAodGV4dCA9ICcnKSA9PiB7XG4gICAgcmV0dXJuICgwLCBfZW5kcG9pbnRfMS5nZXRIb3N0RW5kcG9pbnQpKCkuY2FsbC5jbGlwYm9hcmRXcml0ZVRleHQodGV4dCk7XG59O1xuZXhwb3J0cy5jbGlwYm9hcmRXcml0ZVRleHQgPSBjbGlwYm9hcmRXcml0ZVRleHQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlUmVmcmVzaERhc2hib2FyZERhdGEgPSB2b2lkIDA7XG5jb25zdCBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCB1c2VSZWZyZXNoRGFzaGJvYXJkRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLnJlZnJlc2hEYXNoYm9hcmREYXRhKCk7XG4gICAgfSwgW10pO1xufTtcbmV4cG9ydHMudXNlUmVmcmVzaERhc2hib2FyZERhdGEgPSB1c2VSZWZyZXNoRGFzaGJvYXJkRGF0YTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0RGFzaGJvYXJkVXNlckVtYWlsID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBodHRwQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9odHRwQ2xpZW50XCIpO1xuY29uc3QgZ2V0RGFzaGJvYXJkVXNlckVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuc3RyaXBlQXBpRmV0Y2goJy92MS91c2VyL2VtYWlsJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFtodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9IRUFERVJdOiBodHRwQ2xpZW50XzEuQVVUSE9SSVpBVElPTl9WQUxVRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcC5vaykge1xuICAgICAgICAgICAgcmVzcC5lbWFpbCA9IHJlc3AuanNvbi5lbWFpbDtcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBkYXNoYm9hcmQgdXNlciBlbWFpbCcsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn07XG5leHBvcnRzLmdldERhc2hib2FyZFVzZXJFbWFpbCA9IGdldERhc2hib2FyZFVzZXJFbWFpbDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucyA9IHZvaWQgMDtcbmNvbnN0IF9lbmRwb2ludF8xID0gcmVxdWlyZShcIi4vX2VuZHBvaW50XCIpO1xuY29uc3QgZ2V0VXNlckF1dGhvcml6ZWRQZXJtaXNzaW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmdldFVzZXJBdXRob3JpemVkUGVybWlzc2lvbnMoKTtcbn07XG5leHBvcnRzLmdldFVzZXJBdXRob3JpemVkUGVybWlzc2lvbnMgPSBnZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1Blcm1pc3Npb25BdXRob3JpemVkID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBpc1Blcm1pc3Npb25BdXRob3JpemVkID0gKHBlcm1pc3Npb24pID0+IHtcbiAgICByZXR1cm4gKDAsIF9lbmRwb2ludF8xLmdldEhvc3RFbmRwb2ludCkoKS5jYWxsLmlzUGVybWlzc2lvbkF1dGhvcml6ZWQocGVybWlzc2lvbik7XG59O1xuZXhwb3J0cy5pc1Blcm1pc3Npb25BdXRob3JpemVkID0gaXNQZXJtaXNzaW9uQXV0aG9yaXplZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1AgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKTtcbmNvbnN0IGlzU291cmNlSW5BdXRob3JpemVkQ1NQID0gKHNvdXJjZSkgPT4ge1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1Aoc291cmNlKTtcbn07XG5leHBvcnRzLmlzU291cmNlSW5BdXRob3JpemVkQ1NQID0gaXNTb3VyY2VJbkF1dGhvcml6ZWRDU1A7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZU9BdXRoU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBfZW5kcG9pbnRfMSA9IHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKTtcbmNvbnN0IGNyZWF0ZU9BdXRoU3RhdGUgPSAoc3RhdGUgPSAnJykgPT4ge1xuICAgIHJldHVybiAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpLmNhbGwuY3JlYXRlT0F1dGhTdGF0ZShzdGF0ZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVPQXV0aFN0YXRlID0gY3JlYXRlT0F1dGhTdGF0ZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2hvd1RvYXN0ID0gdm9pZCAwO1xuY29uc3QgX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiLi9fZW5kcG9pbnRcIik7XG5jb25zdCBzaG93VG9hc3QgPSBhc3luYyAobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSAoMCwgX2VuZHBvaW50XzEuZ2V0SG9zdEVuZHBvaW50KSgpO1xuICAgIHJldHVybiBlbmRwb2ludC5jYWxsLnNob3dUb2FzdChtZXNzYWdlLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLnNob3dUb2FzdCA9IHNob3dUb2FzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gVE9ETzogRXhwb3J0IGFsbCBpdGVtcyBleHBsaWNldGVseVxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19lbmRwb2ludFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYXBpRmV0Y2hcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsaXBib2FyZFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29udGV4dFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2V0RGFzaGJvYXJkVXNlckVtYWlsXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9odHRwQ2xpZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pc1Blcm1pc3Npb25BdXRob3JpemVkXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pc1NvdXJjZUluQXV0aG9yaXplZENTUFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vb2F1dGhcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3BsYXRmb3JtUnBjc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2lnbmF0dXJlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90b2FzdFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2lnbmF0dXJlL2Nvbm5lY3Rpb25TZXR0aW5nc1wiKSwgZXhwb3J0cyk7XG4iLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBDaGF0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvQ2hhdFZpZXcnO2ltcG9ydCBTZXR0aW5nc1ZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL1NldHRpbmdzVmlldyc7aW1wb3J0IE9uYm9hcmRpbmdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9PbmJvYXJkaW5nVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDItMTMgMTA6MDg6MzYuNTAyMDk5IC0wMzAwIC0wMyBtPSsxLjgyNTk0MDE3Nic7XG5cbmV4cG9ydCB7IFxuICBDaGF0VmlldyxcdFxuXG4gIFNldHRpbmdzVmlldyxcdFxuXG4gIE9uYm9hcmRpbmdWaWV3XHRcbiB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiYWxsb3dlZF9yZWRpcmVjdF91cmlzXCI6IFtcbiAgICBcImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9hcHBzLW9hdXRoL2NvbS5qYXZlbGluLmFuYWx5dGljc1wiLFxuICAgIFwiaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS9hcHBzLW9hdXRoL2NvbS5qYXZlbGluLmFuYWx5dGljc1wiXG4gIF0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uamF2ZWxpbi5hbmFseXRpY3NcIixcbiAgXCJuYW1lXCI6IFwiSmF2ZWxpblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGRhdGEgdG8gY2FsY3VsYXRlIGJ1c2luZXNzIG1ldHJpY3MgYW5kIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgeW91ciBjdXN0b21lciBiYXNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImludm9pY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBpbnZvaWNlIGRhdGEgdG8gY2FsY3VsYXRlIHJldmVudWUsIE1SUiwgYW5kIG90aGVyIGJpbGxpbmcgbWV0cmljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBjaGFyZ2UgZGF0YSB0byBhbmFseXplIHBheW1lbnQgdm9sdW1lIGFuZCByZXZlbnVlIHRyZW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzdWJzY3JpcHRpb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBzdWJzY3JpcHRpb24gZGF0YSB0byBjYWxjdWxhdGUgTVJSLCBjaHVybiByYXRlLCBhbmQgc3Vic2NyaXB0aW9uIGFuYWx5dGljc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgcHJvZHVjdCBkYXRhIHRvIGJyZWFrIGRvd24gcmV2ZW51ZSBhbmQgbWV0cmljcyBieSBwcm9kdWN0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBsYW5fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwcmljZSBhbmQgcGxhbiBkYXRhIHRvIGFuYWx5emUgcGxhbi1sZXZlbCByZXZlbnVlIGFuZCBzdWJzY3JpYmVyIGNvdW50c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlIGFuZCBtYW5hZ2UgT0F1dGggdG9rZW5zIHNlY3VyZWx5IHZpYSB0aGUgU2VjcmV0IFN0b3JlIEFQSVwiXG4gICAgfVxuICBdLFxuICBcInNhbmRib3hfaW5zdGFsbF9jb21wYXRpYmxlXCI6IHRydWUsXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcIm9hdXRoXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vdGVjdnljcG16Y3h4b3FtdHR0ankuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL1wiLFxuICAgICAgICBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9cIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJDb25uZWN0IHRvIFN1cGFiYXNlIGJhY2tlbmQgZm9yIGRhdGEgcHJvY2Vzc2luZyBhbmQgTExNIHByb3ZpZGVyIGZvciBBSS1wb3dlcmVkIGJ1c2luZXNzIGludGVsbGlnZW5jZVwiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJDaGF0Vmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5kcmF3ZXIuZGVmYXVsdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHRpbmdzVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJPbmJvYXJkaW5nVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwib25ib2FyZGluZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuN1wiXG59O1xuIiwgImltcG9ydCB7IENvbnRleHRWaWV3LCBCb3gsIFNwaW5uZXIsIElubGluZSwgQmFubmVyLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXRUaHJlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0VGhyZWFkJztcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SW5wdXQnO1xuaW1wb3J0IFdlbGNvbWVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lUHJvbXB0JztcbmltcG9ydCBDb252ZXJzYXRpb25MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdCc7XG5pbXBvcnQgeyBhcGlDbGllbnQsIGluaXRBcGlDbGllbnQgfSBmcm9tICcuLi9saWIvYXBpLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdHJpcGVTeW5jIH0gZnJvbSAnLi4vaG9va3MvdXNlU3RyaXBlU3luYyc7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PjtcbiAgY2xhcmlmaWNhdGlvbj86IHtcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG50eXBlIFZpZXdTdGF0ZSA9ICdsb2FkaW5nJyB8ICdlbXB0eScgfCAnY2hhdCcgfCAnZXJyb3InO1xuXG5jb25zdCBDaGF0VmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudDogX2Vudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAvLyBJbml0aWFsaXplIEFQSSBjbGllbnQgd2l0aCBTdHJpcGUgY29udGV4dCBmb3Igc2lnbmF0dXJlIHZlcmlmaWNhdGlvblxuICBpZiAodXNlckNvbnRleHQ/LmlkICYmIHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xuICAgIGluaXRBcGlDbGllbnQodXNlckNvbnRleHQuaWQsIHVzZXJDb250ZXh0LmFjY291bnQuaWQpO1xuICB9XG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KCdsb2FkaW5nJyk7XG4gIGNvbnN0IFtjb252ZXJzYXRpb25zLCBzZXRDb252ZXJzYXRpb25zXSA9IHVzZVN0YXRlPENvbnZlcnNhdGlvbltdPihbXSk7XG4gIGNvbnN0IFthY3RpdmVDb252ZXJzYXRpb25JZCwgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtpc1RoaW5raW5nLCBzZXRJc1RoaW5raW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RoaW5raW5nU3RhcnRlZEF0LCBzZXRUaGlua2luZ1N0YXJ0ZWRBdF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt3ZWxjb21lSW5zaWdodHMsIHNldFdlbGNvbWVJbnNpZ2h0c10gPSB1c2VTdGF0ZTxBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pj4oW10pO1xuICBjb25zdCBbc2hvd0NvbnZlcnNhdGlvbkxpc3QsIHNldFNob3dDb252ZXJzYXRpb25MaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N5bmNDb21wbGV0ZSwgc2V0U3luY0NvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHN5bmNBbGwsIHN5bmNpbmcsIHByb2dyZXNzLCBlcnJvcjogc3luY0Vycm9yIH0gPSB1c2VTdHJpcGVTeW5jKCk7XG4gIGNvbnN0IHN5bmNDaGVja2VkID0gdXNlUmVmKGZhbHNlKTtcblxuICAvLyBBbHdheXMgY2hlY2sgZm9yIGNhY2hlZCBkYXRhIG9uIG1vdW50IGFuZCBhdXRvLXN5bmMgaWYgZW1wdHlcbiAgY29uc3QgY2hlY2tBbmRTeW5jID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzeW5jQ2hlY2tlZC5jdXJyZW50KSByZXR1cm47XG4gICAgc3luY0NoZWNrZWQuY3VycmVudCA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8e1xuICAgICAgICBpbnNpZ2h0czogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gICAgICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICB9PignL2luc2lnaHRzLXdlbGNvbWUnKTtcblxuICAgICAgY29uc3QgaW5zaWdodHMgPSByZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyB8fCBbXTtcbiAgICAgIHNldFdlbGNvbWVJbnNpZ2h0cyhpbnNpZ2h0cyk7XG5cbiAgICAgIGlmIChpbnNpZ2h0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gTm8gY2FjaGVkIGRhdGEgXHUyMDE0IGF1dG8tdHJpZ2dlciBTREsgc3luY1xuICAgICAgICBjb25zdCBvayA9IGF3YWl0IHN5bmNBbGwoKTtcbiAgICAgICAgc2V0U3luY0NvbXBsZXRlKHRydWUpO1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAvLyBSZWxvYWQgaW5zaWdodHMgbm93IHRoYXQgZGF0YSBleGlzdHNcbiAgICAgICAgICBhd2FpdCBsb2FkV2VsY29tZUluc2lnaHRzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGluc2lnaHRzLXdlbGNvbWUgZmFpbGVkIFx1MjAxNCB0cnkgc3luY2luZyBhbnl3YXlcbiAgICAgIGNvbnN0IG9rID0gYXdhaXQgc3luY0FsbCgpO1xuICAgICAgc2V0U3luY0NvbXBsZXRlKHRydWUpO1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzeW5jQWxsXSk7XG5cbiAgY29uc3QgbG9hZENvbnZlcnNhdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHsgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW10gfT4oJy9jaGF0LWNvbnZlcnNhdGlvbnMnKTtcbiAgICAgIGNvbnN0IGNvbnZvcyA9IHJlc3BvbnNlLmRhdGE/LmNvbnZlcnNhdGlvbnMgfHwgW107XG4gICAgICBzZXRDb252ZXJzYXRpb25zKGNvbnZvcyk7XG5cbiAgICAgIGlmIChjb252b3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgnZW1wdHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgdGhlIG1vc3QgcmVjZW50IGNvbnZlcnNhdGlvblxuICAgICAgICBhd2FpdCBsb2FkQ29udmVyc2F0aW9uKGNvbnZvc1swXS5pZCk7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgnY2hhdCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0Vmlld1N0YXRlKCdlbXB0eScpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIE9uIG1vdW50OiBsb2FkIGNvbnZlcnNhdGlvbnMgQU5EIGNoZWNrL3N5bmMgZGF0YSBpbiBwYXJhbGxlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRDb252ZXJzYXRpb25zKCk7XG4gICAgY2hlY2tBbmRTeW5jKCk7XG4gIH0sIFtsb2FkQ29udmVyc2F0aW9ucywgY2hlY2tBbmRTeW5jXSk7XG5cbiAgY29uc3QgbG9hZFdlbGNvbWVJbnNpZ2h0cyA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQ8eyBpbnNpZ2h0czogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT4gfT4oXG4gICAgICAgICcvaW5zaWdodHMtd2VsY29tZScsXG4gICAgICApO1xuICAgICAgY29uc3QgaW5zaWdodHMgPSByZXNwb25zZS5kYXRhPy5pbnNpZ2h0cyB8fCBbXTtcbiAgICAgIHNldFdlbGNvbWVJbnNpZ2h0cyhpbnNpZ2h0cyk7XG4gICAgICByZXR1cm4gaW5zaWdodHMubGVuZ3RoID4gMDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbnZlcnNhdGlvbiA9IGFzeW5jIChjb252ZXJzYXRpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHtcbiAgICAgICAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG4gICAgICAgIG1lc3NhZ2VzOiBBcnJheTx7XG4gICAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgfT47XG4gICAgICB9PihgL2NoYXQtY29udmVyc2F0aW9uLWRldGFpbD9jb252ZXJzYXRpb25JZD0ke2NvbnZlcnNhdGlvbklkfWApO1xuXG4gICAgICBjb25zdCBtc2dzOiBNZXNzYWdlW10gPSAocmVzcG9uc2UuZGF0YT8ubWVzc2FnZXMgfHwgW10pLm1hcCgobSkgPT4gKHtcbiAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgIHJvbGU6IG0ucm9sZSxcbiAgICAgICAgY29udGVudDogbS5jb250ZW50LFxuICAgICAgICBmcmVzaG5lc3M6IG0ubWV0YWRhdGE/LmZyZXNobmVzcyBhcyBNZXNzYWdlWydmcmVzaG5lc3MnXSxcbiAgICAgICAgaW5zaWdodHM6IG0ubWV0YWRhdGE/Lmluc2lnaHRzIGFzIE1lc3NhZ2VbJ2luc2lnaHRzJ10sXG4gICAgICB9KSk7XG5cbiAgICAgIHNldE1lc3NhZ2VzKG1zZ3MpO1xuICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSWQoY29udmVyc2F0aW9uSWQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNvbnZlcnNhdGlvbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYW51YWxTeW5jID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHN5bmNDaGVja2VkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzZXRTeW5jQ29tcGxldGUoZmFsc2UpO1xuICAgIGNvbnN0IG9rID0gYXdhaXQgc3luY0FsbCgpO1xuICAgIHNldFN5bmNDb21wbGV0ZSh0cnVlKTtcbiAgICBpZiAob2spIHtcbiAgICAgIGF3YWl0IGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgICB9XG4gIH0sIFtzeW5jQWxsXSk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgLy8gQWRkIHVzZXIgbWVzc2FnZSB0byBVSSBpbW1lZGlhdGVseVxuICAgICAgY29uc3QgdGVtcFVzZXJNc2dJZCA9IGB0ZW1wLSR7RGF0ZS5ub3coKX1gO1xuICAgICAgY29uc3QgdXNlck1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgIGlkOiB0ZW1wVXNlck1zZ0lkLFxuICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9O1xuICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCB1c2VyTWVzc2FnZV0pO1xuICAgICAgc2V0Vmlld1N0YXRlKCdjaGF0Jyk7XG4gICAgICBzZXRJc1RoaW5raW5nKHRydWUpO1xuICAgICAgc2V0VGhpbmtpbmdTdGFydGVkQXQoRGF0ZS5ub3coKSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50PHtcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluc2lnaHRzPzogQXJyYXk8eyBpZDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfT47XG4gICAgICAgICAgY29udmVyc2F0aW9uSWQ6IHN0cmluZztcbiAgICAgICAgfT4oJy9jaGF0LW1lc3NhZ2UnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IGFjdGl2ZUNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhc3Npc3RhbnRNZXNzYWdlOiBNZXNzYWdlID0ge1xuICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhPy5tZXNzYWdlLmlkIHx8IGBtc2ctJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgcm9sZTogJ2Fzc2lzdGFudCcsXG4gICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YT8ubWVzc2FnZS5jb250ZW50IHx8ICdTb3JyeSwgSSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZS4nLFxuICAgICAgICAgIGZyZXNobmVzczogcmVzcG9uc2UubWV0YSBhcyBNZXNzYWdlWydmcmVzaG5lc3MnXSxcbiAgICAgICAgICBpbnNpZ2h0czogcmVzcG9uc2UuZGF0YT8uaW5zaWdodHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIGNvbnZlcnNhdGlvbiBJRCBpZiBuZXcgY29udmVyc2F0aW9uIHdhcyBjcmVhdGVkXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5jb252ZXJzYXRpb25JZCAmJiAhYWN0aXZlQ29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICBzZXRBY3RpdmVDb252ZXJzYXRpb25JZChyZXNwb25zZS5kYXRhLmNvbnZlcnNhdGlvbklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgYXNzaXN0YW50TWVzc2FnZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICAgIGNvbnN0IGVycm9yT2JqID0gZXJyIGFzIHsgZXJyb3I/OiB7IGNvZGU/OiBzdHJpbmc7IG1lc3NhZ2U/OiBzdHJpbmcgfSB9O1xuICAgICAgICBjb25zdCBjb2RlID0gZXJyb3JPYmo/LmVycm9yPy5jb2RlO1xuXG4gICAgICAgIGlmIChjb2RlID09PSAnYXV0aF9yZWZyZXNoX2ZhaWxlZCcpIHtcbiAgICAgICAgICBzZXRFcnJvcignWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkLiBQbGVhc2UgcmUtYXV0aG9yaXplIEphdmVsaW4uJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2xsbV91bmF2YWlsYWJsZScpIHtcbiAgICAgICAgICBzZXRFcnJvcignQUkgc2VydmljZSBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2FpbiBpbiBhIG1vbWVudC4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzVGhpbmtpbmcoZmFsc2UpO1xuICAgICAgICBzZXRUaGlua2luZ1N0YXJ0ZWRBdCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2FjdGl2ZUNvbnZlcnNhdGlvbklkXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbGFyaWZpY2F0aW9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHNlbmRNZXNzYWdlKHZhbHVlKTtcbiAgICB9LFxuICAgIFtzZW5kTWVzc2FnZV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlTmV3Q29udmVyc2F0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbklkKG51bGwpO1xuICAgIHNldE1lc3NhZ2VzKFtdKTtcbiAgICBzZXRWaWV3U3RhdGUoJ2VtcHR5Jyk7XG4gICAgc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpO1xuICAgIGxvYWRXZWxjb21lSW5zaWdodHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENvbnZlcnNhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2hvd0NvbnZlcnNhdGlvbkxpc3QoZmFsc2UpO1xuICAgIGF3YWl0IGxvYWRDb252ZXJzYXRpb24oaWQpO1xuICAgIHNldFZpZXdTdGF0ZSgnY2hhdCcpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZGluZyBzdGF0ZVxuICBpZiAodmlld1N0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiSmF2ZWxpblwiPlxuICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5Mb2FkaW5nIEphdmVsaW4uLi48L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0Vmlld1xuICAgICAgdGl0bGU9XCJKYXZlbGluXCJcbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXsoKSA9PiBzZXRTaG93Q29udmVyc2F0aW9uTGlzdCgodikgPT4gIXYpfT5cbiAgICAgICAgICAgICAgSGlzdG9yeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXtoYW5kbGVOZXdDb252ZXJzYXRpb259PlxuICAgICAgICAgICAgTmV3IGNoYXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgaGVpZ2h0OiAnZmlsbCcgfX0+XG4gICAgICAgIHsvKiBFcnJvciBiYW5uZXIgKi99XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRXJyb3JcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Vycm9yfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTeW5jIHByb2dyZXNzIGJhbm5lciBcdTIwMTQgbm9uLWJsb2NraW5nLCBzaG93cyBhdCB0b3AgKi99XG4gICAgICAgIHtzeW5jaW5nICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICdjb250YWluZXInLCBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBTeW5jaW5nIGRhdGEuLi4gKHtwcm9ncmVzcy5jb21wbGV0ZWR9L3twcm9ncmVzcy50b3RhbH0pXG4gICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogU3luYyBlcnJvciB3aXRoIHJldHJ5ICovfVxuICAgICAgICB7c3luY0Vycm9yICYmICFzeW5jaW5nICYmIChcbiAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICB0eXBlPVwiY2F1dGlvblwiXG4gICAgICAgICAgICB0aXRsZT1cIlN5bmMgaXNzdWVcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3N5bmNFcnJvcn1cbiAgICAgICAgICAgIGFjdGlvbnM9ezxCdXR0b24gb25QcmVzcz17aGFuZGxlTWFudWFsU3luY30+UmV0cnkgc3luYzwvQnV0dG9uPn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTeW5jIGNvbXBsZXRlIHN1Y2Nlc3MgKGRpc21pc3MgYWZ0ZXIgYSBtb21lbnQpICovfVxuICAgICAgICB7c3luY0NvbXBsZXRlICYmICFzeW5jaW5nICYmICFzeW5jRXJyb3IgJiYgKFxuICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHRpdGxlPVwiRGF0YSBzeW5jZWRcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3VyIFN0cmlwZSBkYXRhIGlzIHVwIHRvIGRhdGUuXCJcbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U3luY0NvbXBsZXRlKGZhbHNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBDb252ZXJzYXRpb24gbGlzdCBwYW5lbCAqL31cbiAgICAgICAge3Nob3dDb252ZXJzYXRpb25MaXN0ICYmIChcbiAgICAgICAgICA8Q29udmVyc2F0aW9uTGlzdFxuICAgICAgICAgICAgY29udmVyc2F0aW9ucz17Y29udmVyc2F0aW9uc31cbiAgICAgICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbklkPXthY3RpdmVDb252ZXJzYXRpb25JZH1cbiAgICAgICAgICAgIG9uU2VsZWN0Q29udmVyc2F0aW9uPXtoYW5kbGVTZWxlY3RDb252ZXJzYXRpb259XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93Q29udmVyc2F0aW9uTGlzdChmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFpbiBjb250ZW50IGFyZWEgKi99XG4gICAgICAgIHshc2hvd0NvbnZlcnNhdGlvbkxpc3QgJiYgPEJveCBjc3M9e3sgc3RhY2s6ICd5Jywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICB7dmlld1N0YXRlID09PSAnZW1wdHknICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxXZWxjb21lUHJvbXB0IG9uU2VsZWN0UHJvbXB0PXtzZW5kTWVzc2FnZX0gaW5zaWdodHM9e3dlbGNvbWVJbnNpZ2h0c30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENoYXRUaHJlYWRcbiAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICBpc1RoaW5raW5nPXtpc1RoaW5raW5nfVxuICAgICAgICAgICAgICB0aGlua2luZ1N0YXJ0ZWRBdD17dGhpbmtpbmdTdGFydGVkQXR9XG4gICAgICAgICAgICAgIG9uQ2xhcmlmaWNhdGlvblNlbGVjdD17aGFuZGxlQ2xhcmlmaWNhdGlvblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+fVxuXG4gICAgICAgIHsvKiBDaGF0IGlucHV0IFx1MjAxNCBhbHdheXMgYXZhaWxhYmxlICovfVxuICAgICAgICB7IXNob3dDb252ZXJzYXRpb25MaXN0ICYmIChcbiAgICAgICAgICA8Q2hhdElucHV0IG9uU2VuZD17c2VuZE1lc3NhZ2V9IGRpc2FibGVkPXtpc1RoaW5raW5nfSAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRWaWV3O1xuIiwgImltcG9ydCB7IEJveCB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgTWVzc2FnZUJ1YmJsZSBmcm9tICcuL01lc3NhZ2VCdWJibGUnO1xuaW1wb3J0IEluc2lnaHRDYXJkIGZyb20gJy4vSW5zaWdodENhcmQnO1xuaW1wb3J0IFRoaW5raW5nSW5kaWNhdG9yIGZyb20gJy4vVGhpbmtpbmdJbmRpY2F0b3InO1xuaW1wb3J0IENsYXJpZmljYXRpb25Qcm9tcHQgZnJvbSAnLi9DbGFyaWZpY2F0aW9uUHJvbXB0JztcblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBpZDogc3RyaW5nO1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmcmVzaG5lc3M/OiB7IHR5cGU6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xuICBpbnNpZ2h0cz86IEFycmF5PHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+O1xuICBjbGFyaWZpY2F0aW9uPzoge1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgb3B0aW9uczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+O1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQ2hhdFRocmVhZFByb3BzIHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbiAgaXNUaGlua2luZzogYm9vbGVhbjtcbiAgdGhpbmtpbmdTdGFydGVkQXQ/OiBudW1iZXI7XG4gIG9uQ2xhcmlmaWNhdGlvblNlbGVjdD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDaGF0VGhyZWFkID0gKHtcbiAgbWVzc2FnZXMsXG4gIGlzVGhpbmtpbmcsXG4gIHRoaW5raW5nU3RhcnRlZEF0LFxuICBvbkNsYXJpZmljYXRpb25TZWxlY3QsXG59OiBDaGF0VGhyZWFkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICA8Qm94IGtleT17bWVzc2FnZS5pZH0gY3NzPXt7IHN0YWNrOiAneScgfX0+XG4gICAgICAgICAgPE1lc3NhZ2VCdWJibGVcbiAgICAgICAgICAgIHJvbGU9e21lc3NhZ2Uucm9sZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgIGZyZXNobmVzcz17bWVzc2FnZS5mcmVzaG5lc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bWVzc2FnZS5pbnNpZ2h0cz8ubWFwKChpbnNpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8SW5zaWdodENhcmRcbiAgICAgICAgICAgICAga2V5PXtpbnNpZ2h0LmlkfVxuICAgICAgICAgICAgICBpbnNpZ2h0SWQ9e2luc2lnaHQuaWR9XG4gICAgICAgICAgICAgIG1lc3NhZ2VJZD17bWVzc2FnZS5pZH1cbiAgICAgICAgICAgICAgY29udGVudD17aW5zaWdodC5jb250ZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7bWVzc2FnZS5jbGFyaWZpY2F0aW9uICYmIG9uQ2xhcmlmaWNhdGlvblNlbGVjdCAmJiAoXG4gICAgICAgICAgICA8Q2xhcmlmaWNhdGlvblByb21wdFxuICAgICAgICAgICAgICBxdWVzdGlvbj17bWVzc2FnZS5jbGFyaWZpY2F0aW9uLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICBvcHRpb25zPXttZXNzYWdlLmNsYXJpZmljYXRpb24ub3B0aW9uc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uQ2xhcmlmaWNhdGlvblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICAgIHtpc1RoaW5raW5nICYmIHRoaW5raW5nU3RhcnRlZEF0ICYmIChcbiAgICAgICAgPFRoaW5raW5nSW5kaWNhdG9yIHN0YXJ0ZWRBdD17dGhpbmtpbmdTdGFydGVkQXR9IC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFRocmVhZDtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQmFkZ2UgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgTWVzc2FnZUJ1YmJsZVByb3BzIHtcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZnJlc2huZXNzPzogeyB0eXBlOiAnY2FjaGVkJyB8ICdsaXZlJzsgc3luY2VkQXQ/OiBzdHJpbmcgfTtcbn1cblxuY29uc3QgTWVzc2FnZUJ1YmJsZSA9ICh7IHJvbGUsIGNvbnRlbnQsIGZyZXNobmVzcyB9OiBNZXNzYWdlQnViYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgaXNVc2VyID0gcm9sZSA9PT0gJ3VzZXInO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY3NzPXt7XG4gICAgICAgIHBhZGRpbmc6ICdtZWRpdW0nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzVXNlciA/ICdjb250YWluZXInIDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFjazogJ3knLFxuICAgICAgICBnYXA6ICdzbWFsbCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAge2lzVXNlciA/ICdZb3UnIDogJ0phdmVsaW4nfVxuICAgICAgPC9JbmxpbmU+XG4gICAgICA8SW5saW5lPntjb250ZW50fTwvSW5saW5lPlxuICAgICAge2ZyZXNobmVzcyAmJiAhaXNVc2VyICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgICA8QmFkZ2UgdHlwZT17ZnJlc2huZXNzLnR5cGUgPT09ICdsaXZlJyA/ICdwb3NpdGl2ZScgOiAnaW5mbyd9PlxuICAgICAgICAgICAge2ZyZXNobmVzcy50eXBlID09PSAnbGl2ZSdcbiAgICAgICAgICAgICAgPyAnTGl2ZSBkYXRhJ1xuICAgICAgICAgICAgICA6IGBEYXRhIGFzIG9mICR7ZnJlc2huZXNzLnN5bmNlZEF0ID8gbmV3IERhdGUoZnJlc2huZXNzLnN5bmNlZEF0KS50b0xvY2FsZVN0cmluZygpIDogJ2NhY2hlJ31gfVxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCdWJibGU7XG4iLCAiaW1wb3J0IHsgQm94LCBCYW5uZXIsIEJ1dHRvbiwgSW5saW5lIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuXG5pbnRlcmZhY2UgSW5zaWdodENhcmRQcm9wcyB7XG4gIGluc2lnaHRJZDogc3RyaW5nO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBJbnNpZ2h0Q2FyZCA9ICh7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCBjb250ZW50IH06IEluc2lnaHRDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZlZWRiYWNrLCBzZXRGZWVkYmFja10gPSB1c2VTdGF0ZTwncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRmVlZGJhY2sgPSBhc3luYyAocmF0aW5nOiAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJykgPT4ge1xuICAgIGlmIChzdWJtaXR0aW5nIHx8IGZlZWRiYWNrKSByZXR1cm47XG4gICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpQ2xpZW50KCcvaW5zaWdodHMtZmVlZGJhY2snLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGluc2lnaHRJZCwgbWVzc2FnZUlkLCByYXRpbmcgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0RmVlZGJhY2socmF0aW5nKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFNpbGVudGx5IGZhaWwgXHUyMDE0IGZlZWRiYWNrIGlzIG5vbi1jcml0aWNhbFxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICA8QmFubmVyIHR5cGU9XCJkZWZhdWx0XCIgdGl0bGU9XCJJbnNpZ2h0XCIgZGVzY3JpcHRpb249e2NvbnRlbnR9IC8+XG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPXtmZWVkYmFjayA9PT0gJ3Bvc2l0aXZlJyA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgZmVlZGJhY2sgIT09IG51bGx9XG4gICAgICAgICAgb25QcmVzcz17KCkgPT4gaGFuZGxlRmVlZGJhY2soJ3Bvc2l0aXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lPntmZWVkYmFjayA9PT0gJ3Bvc2l0aXZlJyA/ICdIZWxwZnVsJyA6ICdIZWxwZnVsPyd9PC9JbmxpbmU+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17ZmVlZGJhY2sgPT09ICduZWdhdGl2ZScgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IGZlZWRiYWNrICE9PSBudWxsfVxuICAgICAgICAgIG9uUHJlc3M9eygpID0+IGhhbmRsZUZlZWRiYWNrKCduZWdhdGl2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZT57ZmVlZGJhY2sgPT09ICduZWdhdGl2ZScgPyAnTm90IGhlbHBmdWwnIDogJ05vdCBoZWxwZnVsPyd9PC9JbmxpbmU+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0Q2FyZDtcbiIsICJpbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cbi8vIFN1cGFiYXNlIEVkZ2UgRnVuY3Rpb25zIGJhc2UgVVJMXG5jb25zdCBTVVBBQkFTRV9GVU5DVElPTlNfVVJMID1cbiAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Py5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgPyBwcm9jZXNzLmVudi5TVVBBQkFTRV9GVU5DVElPTlNfVVJMXG4gICAgOiAnaHR0cHM6Ly90ZWN2eWNwbXpjeHhvcW10dHRqeS5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEnO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhPzogVDtcbiAgZXJyb3I/OiB7IGNvZGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyByZXF1ZXN0SWQ6IHN0cmluZyB9O1xuICBtZXRhPzogeyBmcmVzaG5lc3M6ICdjYWNoZWQnIHwgJ2xpdmUnOyBzeW5jZWRBdD86IHN0cmluZyB9O1xufVxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlQ29udGV4dCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBhY2NvdW50SWQ6IHN0cmluZztcbn1cblxubGV0IF9zaWduYXR1cmVDb250ZXh0OiBTaWduYXR1cmVDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgQVBJIGNsaWVudCB3aXRoIHRoZSB1c2VyJ3MgU3RyaXBlIGNvbnRleHQuXG4gKiBNdXN0IGJlIGNhbGxlZCBvbmNlIGZyb20gYSB2aWV3IHRoYXQgaGFzIEV4dGVuc2lvbkNvbnRleHRWYWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcGlDbGllbnQodXNlcklkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nKSB7XG4gIF9zaWduYXR1cmVDb250ZXh0ID0geyB1c2VySWQsIGFjY291bnRJZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpQ2xpZW50PFQ+KFxuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgbWV0aG9kPzogc3RyaW5nOyBib2R5PzogdW5rbm93biB9ID0ge30sXG4pOiBQcm9taXNlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gIGlmICghX3NpZ25hdHVyZUNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwaUNsaWVudCBub3QgaW5pdGlhbGl6ZWQgXHUyMDE0IGNhbGwgaW5pdEFwaUNsaWVudCBmaXJzdCcpO1xuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgU3RyaXBlIHNpZ25hdHVyZTsgZmFsbGJhY2sgZ3JhY2VmdWxseSBmb3IgbG9jYWwgZGV2XG4gIGxldCBzaWduYXR1cmUgPSAnJztcbiAgdHJ5IHtcbiAgICBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBmZXRjaFN0cmlwZVNpZ25hdHVyZSBtYXkgbm90IHdvcmsgaW4gbG9jYWwgcHJldmlldyBtb2RlXG4gICAgY29uc29sZS53YXJuKCdmZXRjaFN0cmlwZVNpZ25hdHVyZSBmYWlsZWQgXHUyMDE0IHNlbmRpbmcgdW5zaWduZWQgcmVxdWVzdCcpO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnO1xuXG4gIC8vIEFsd2F5cyBpbmNsdWRlIHVzZXJfaWQgYW5kIGFjY291bnRfaWQgaW4gdGhlIGJvZHkgZm9yIGF1dGhcbiAgY29uc3QgYm9keVBheWxvYWQgPSB7XG4gICAgdXNlcl9pZDogX3NpZ25hdHVyZUNvbnRleHQudXNlcklkLFxuICAgIGFjY291bnRfaWQ6IF9zaWduYXR1cmVDb250ZXh0LmFjY291bnRJZCxcbiAgICAuLi4ob3B0aW9ucy5ib2R5ICYmIHR5cGVvZiBvcHRpb25zLmJvZHkgPT09ICdvYmplY3QnID8gb3B0aW9ucy5ib2R5IDoge30pLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U1VQQUJBU0VfRlVOQ1RJT05TX1VSTH0ke3BhdGh9YCwge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKHNpZ25hdHVyZSA/IHsgJ3N0cmlwZS1zaWduYXR1cmUnOiBzaWduYXR1cmUgfSA6IHt9KSxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlQYXlsb2FkKSxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIFNwaW5uZXIsIElubGluZSwgQmFubmVyIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBUaGlua2luZ0luZGljYXRvclByb3BzIHtcbiAgc3RhcnRlZEF0OiBudW1iZXI7XG59XG5cbmNvbnN0IFRoaW5raW5nSW5kaWNhdG9yID0gKHsgc3RhcnRlZEF0IH06IFRoaW5raW5nSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEVsYXBzZWQoTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCkgLyAxMDAwKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbc3RhcnRlZEF0XSk7XG5cbiAgY29uc3Qgc3RhdHVzVGV4dCA9XG4gICAgZWxhcHNlZCA+PSA1ID8gJ0ZldGNoaW5nIGZyZXNoIGRhdGEgZnJvbSBTdHJpcGUuLi4nIDogJ0FuYWx5emluZyB5b3VyIGRhdGEuLi4nO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PntzdGF0dXNUZXh0fTwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgICB7ZWxhcHNlZCA+PSA1ICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlN0aWxsIHdvcmtpbmcgXHUyMDE0IGZldGNoaW5nIHRoZSBsYXRlc3QgZGF0YSBmcm9tIFN0cmlwZSB0byBnaXZlIHlvdSBhbiBhY2N1cmF0ZSBhbnN3ZXIuXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGlua2luZ0luZGljYXRvcjtcbiIsICJpbXBvcnQgeyBCb3gsIEJhbm5lciwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuaW50ZXJmYWNlIENsYXJpZmljYXRpb25PcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2xhcmlmaWNhdGlvblByb21wdFByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZztcbiAgb3B0aW9uczogQ2xhcmlmaWNhdGlvbk9wdGlvbltdO1xuICBvblNlbGVjdDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENsYXJpZmljYXRpb25Qcm9tcHQgPSAoeyBxdWVzdGlvbiwgb3B0aW9ucywgb25TZWxlY3QgfTogQ2xhcmlmaWNhdGlvblByb21wdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgIDxCYW5uZXIgdHlwZT1cImRlZmF1bHRcIiB0aXRsZT1cIkNsYXJpZmljYXRpb24gbmVlZGVkXCIgZGVzY3JpcHRpb249e3F1ZXN0aW9ufSAvPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCB3cmFwOiAnd3JhcCcgfX0+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiBvblNlbGVjdChvcHRpb24udmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGFyaWZpY2F0aW9uUHJvbXB0O1xuIiwgImltcG9ydCB7IEJveCwgVGV4dEFyZWEsIEJ1dHRvbiB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDaGF0SW5wdXRQcm9wcyB7XG4gIG9uU2VuZDogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENoYXRJbnB1dCA9ICh7IG9uU2VuZCwgZGlzYWJsZWQgPSBmYWxzZSwgaW5pdGlhbFZhbHVlID0gJycgfTogQ2hhdElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAoIXRyaW1tZWQgfHwgZGlzYWJsZWQpIHJldHVybjtcbiAgICBvblNlbmQodHJpbW1lZCk7XG4gICAgc2V0VmFsdWUoJycpO1xuICB9LCBbdmFsdWUsIGRpc2FibGVkLCBvblNlbmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnYm90dG9tJywgcGFkZGluZzogJ3NtYWxsJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHdpZHRoOiAnZmlsbCcgfX0+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPVwiQXNrIGEgcXVlc3Rpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG15IE1SUj9cIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgIG9uUHJlc3M9e2hhbmRsZVNlbmR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAhdmFsdWUudHJpbSgpfVxuICAgICAgPlxuICAgICAgICBTZW5kXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRJbnB1dDtcbiIsICJpbXBvcnQgeyBCb3gsIElubGluZSwgQnV0dG9uIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcblxuY29uc3QgR1VJREVEX1BST01QVFMgPSBbXG4gIHsgbGFiZWw6IFwiV2hhdCdzIG15IE1SUj9cIiwgdmFsdWU6IFwiV2hhdCdzIG15IE1SUj9cIiB9LFxuICB7IGxhYmVsOiBcIkhvdydzIGNodXJuIHRyZW5kaW5nP1wiLCB2YWx1ZTogXCJIb3cgaXMgbXkgY2h1cm4gcmF0ZSB0cmVuZGluZyBvdmVyIHRoZSBsYXN0IDMgbW9udGhzP1wiIH0sXG4gIHsgbGFiZWw6ICdSZXZlbnVlIGJ5IHByb2R1Y3QnLCB2YWx1ZTogXCJXaGF0J3MgbXkgcmV2ZW51ZSBicmVha2Rvd24gYnkgcHJvZHVjdD9cIiB9LFxuICB7IGxhYmVsOiAnVG9wIGN1c3RvbWVycycsIHZhbHVlOiAnV2hvIGFyZSBteSB0b3AgMTAgY3VzdG9tZXJzIGJ5IHJldmVudWU/JyB9LFxuICB7IGxhYmVsOiAnR3Jvd3RoIHJhdGUnLCB2YWx1ZTogXCJXaGF0J3MgbXkgTVJSIGdyb3d0aCByYXRlP1wiIH0sXG5dO1xuXG5pbnRlcmZhY2UgV2VsY29tZVByb21wdFByb3BzIHtcbiAgb25TZWxlY3RQcm9tcHQ6IChwcm9tcHQ6IHN0cmluZykgPT4gdm9pZDtcbiAgaW5zaWdodHM/OiBBcnJheTx7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9Pjtcbn1cblxuY29uc3QgV2VsY29tZVByb21wdCA9ICh7IG9uU2VsZWN0UHJvbXB0LCBpbnNpZ2h0cyB9OiBXZWxjb21lUHJvbXB0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2hlYWRpbmcnIH19PldlbGNvbWUgdG8gSmF2ZWxpbjwvSW5saW5lPlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgQXNrIG1lIGFueXRoaW5nIGFib3V0IHlvdXIgU3RyaXBlIGJ1c2luZXNzLiBJIGNhbiBjYWxjdWxhdGUgbWV0cmljcywgYW5hbHl6ZSB0cmVuZHMsIGFuZFxuICAgICAgICAgIHN1cmZhY2UgaW5zaWdodHMgZnJvbSB5b3VyIGRhdGEuXG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtpbnNpZ2h0cyAmJiBpbnNpZ2h0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+UmVjZW50IGluc2lnaHRzPC9JbmxpbmU+XG4gICAgICAgICAge2luc2lnaHRzLm1hcCgoaW5zaWdodCkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2luc2lnaHQuaWR9XG4gICAgICAgICAgICAgIGNzcz17eyBwYWRkaW5nOiAnc21hbGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICdjb250YWluZXInLCBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT57aW5zaWdodC5jb250ZW50fTwvSW5saW5lPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlRyeSBhc2tpbmc8L0lubGluZT5cbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCB3cmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAge0dVSURFRF9QUk9NUFRTLm1hcCgocHJvbXB0KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT17cHJvbXB0LnZhbHVlfVxuICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3RQcm9tcHQocHJvbXB0LnZhbHVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb21wdC5sYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdjYXB0aW9uJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIEphdmVsaW4gcHJvdmlkZXMgaW5mb3JtYXRpb25hbCBpbnNpZ2h0cyBvbmx5LCBub3QgZmluYW5jaWFsIG9yIGJ1c2luZXNzIGFkdmljZS4gQWx3YXlzIHZlcmlmeSBpbXBvcnRhbnQgZGVjaXNpb25zIHdpdGggeW91ciBvd24gYW5hbHlzaXMuXG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lUHJvbXB0O1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBCdXR0b24gfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb252ZXJzYXRpb25MaXN0UHJvcHMge1xuICBjb252ZXJzYXRpb25zOiBDb252ZXJzYXRpb25bXTtcbiAgYWN0aXZlQ29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bGw7XG4gIG9uU2VsZWN0Q29udmVyc2F0aW9uOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ29udmVyc2F0aW9uTGlzdCA9ICh7XG4gIGNvbnZlcnNhdGlvbnMsXG4gIGFjdGl2ZUNvbnZlcnNhdGlvbklkLFxuICBvblNlbGVjdENvbnZlcnNhdGlvbixcbiAgb25DbG9zZSxcbn06IENvbnZlcnNhdGlvbkxpc3RQcm9wcykgPT4ge1xuICBpZiAoY29udmVyc2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJywgYWxpZ25YOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19Pk5vIGNvbnZlcnNhdGlvbnMgeWV0LjwvSW5saW5lPlxuICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+U3RhcnQgYnkgYXNraW5nIGEgcXVlc3Rpb24gYmVsb3cuPC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnLCBwYWRkaW5nOiAnc21hbGwnIH19PlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZGlzdHJpYnV0ZTogJ3NwYWNlLWJldHdlZW4nLCBhbGlnblk6ICdjZW50ZXInLCBwYWRkaW5nOiAneHNtYWxsJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5Db252ZXJzYXRpb25zPC9JbmxpbmU+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIG9uUHJlc3M9e29uQ2xvc2V9PlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICB7Y29udmVyc2F0aW9ucy5tYXAoKGNvbnYpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGtleT17Y29udi5pZH1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6ICdzbWFsbCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbnYuaWQgPT09IGFjdGl2ZUNvbnZlcnNhdGlvbklkID8gJ2NvbnRhaW5lcicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdGFjazogJ3knLFxuICAgICAgICAgICAgZ2FwOiAneHNtYWxsJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gb25TZWxlY3RDb252ZXJzYXRpb24oY29udi5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJywgd2lkdGg6ICdmaWxsJyB9fT5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udFdlaWdodDogY29udi5pZCA9PT0gYWN0aXZlQ29udmVyc2F0aW9uSWQgPyAnc2VtaWJvbGQnIDogJ3JlZ3VsYXInIH19PlxuICAgICAgICAgICAgICAgIHtjb252LnRpdGxlIHx8ICdVbnRpdGxlZCBjb252ZXJzYXRpb24nfVxuICAgICAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgZm9udDogJ2NhcHRpb24nLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKGNvbnYudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbkxpc3Q7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RyaXBlIGZyb20gJy4uL2xpYi9zdHJpcGUtY2xpZW50JztcbmltcG9ydCB7IGFwaUNsaWVudCB9IGZyb20gJy4uL2xpYi9hcGktY2xpZW50JztcblxuY29uc3QgT0JKRUNUX1RZUEVTID0gW1xuICAnY3VzdG9tZXJzJyxcbiAgJ3N1YnNjcmlwdGlvbnMnLFxuICAnaW52b2ljZXMnLFxuICAnY2hhcmdlcycsXG4gICdwcm9kdWN0cycsXG4gICdwcmljZXMnLFxuXSBhcyBjb25zdDtcblxudHlwZSBPYmplY3RUeXBlID0gKHR5cGVvZiBPQkpFQ1RfVFlQRVMpW251bWJlcl07XG5cbmludGVyZmFjZSBTeW5jUHJvZ3Jlc3Mge1xuICBjb21wbGV0ZWQ6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgY3VycmVudD86IE9iamVjdFR5cGU7XG4gIGZhaWxlZDogT2JqZWN0VHlwZVtdO1xufVxuXG5pbnRlcmZhY2UgVXNlU3RyaXBlU3luY1JldHVybiB7XG4gIHN5bmNBbGw6ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG4gIHN5bmNpbmc6IGJvb2xlYW47XG4gIHByb2dyZXNzOiBTeW5jUHJvZ3Jlc3M7XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFN0cmlwZU9iamVjdHMob2JqZWN0VHlwZTogT2JqZWN0VHlwZSkge1xuICBzd2l0Y2ggKG9iamVjdFR5cGUpIHtcbiAgICBjYXNlICdjdXN0b21lcnMnOlxuICAgICAgcmV0dXJuIHN0cmlwZS5jdXN0b21lcnMubGlzdCh7IGxpbWl0OiAxMDAgfSk7XG4gICAgY2FzZSAnc3Vic2NyaXB0aW9ucyc6XG4gICAgICByZXR1cm4gc3RyaXBlLnN1YnNjcmlwdGlvbnMubGlzdCh7IGxpbWl0OiAxMDAgfSk7XG4gICAgY2FzZSAnaW52b2ljZXMnOlxuICAgICAgcmV0dXJuIHN0cmlwZS5pbnZvaWNlcy5saXN0KHsgbGltaXQ6IDEwMCB9KTtcbiAgICBjYXNlICdjaGFyZ2VzJzpcbiAgICAgIHJldHVybiBzdHJpcGUuY2hhcmdlcy5saXN0KHsgbGltaXQ6IDEwMCB9KTtcbiAgICBjYXNlICdwcm9kdWN0cyc6XG4gICAgICByZXR1cm4gc3RyaXBlLnByb2R1Y3RzLmxpc3QoeyBsaW1pdDogMTAwIH0pO1xuICAgIGNhc2UgJ3ByaWNlcyc6XG4gICAgICByZXR1cm4gc3RyaXBlLnByaWNlcy5saXN0KHsgbGltaXQ6IDEwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RyaXBlU3luYygpOiBVc2VTdHJpcGVTeW5jUmV0dXJuIHtcbiAgY29uc3QgW3N5bmNpbmcsIHNldFN5bmNpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlPFN5bmNQcm9ncmVzcz4oe1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICB0b3RhbDogT0JKRUNUX1RZUEVTLmxlbmd0aCxcbiAgICBmYWlsZWQ6IFtdLFxuICB9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc3luY2luZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3Qgc3luY0FsbCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICAvLyBQcmV2ZW50IGNvbmN1cnJlbnQgc3luY3NcbiAgICBpZiAoc3luY2luZ1JlZi5jdXJyZW50KSByZXR1cm4gZmFsc2U7XG4gICAgc3luY2luZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIHNldFN5bmNpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgc2V0UHJvZ3Jlc3MoeyBjb21wbGV0ZWQ6IDAsIHRvdGFsOiBPQkpFQ1RfVFlQRVMubGVuZ3RoLCBmYWlsZWQ6IFtdIH0pO1xuXG4gICAgY29uc3QgZmFpbGVkOiBPYmplY3RUeXBlW10gPSBbXTtcbiAgICBsZXQgbGFzdEVycm9yID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IG9iamVjdFR5cGUgb2YgT0JKRUNUX1RZUEVTKSB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldikgPT4gKHsgLi4ucHJldiwgY3VycmVudDogb2JqZWN0VHlwZSB9KSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hTdHJpcGVPYmplY3RzKG9iamVjdFR5cGUpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBhcGlDbGllbnQoJy9zeW5jLWRhdGEnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgb2JqZWN0VHlwZSxcbiAgICAgICAgICAgICAgcmVjb3JkczogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBMb2cgYnV0IGNvbnRpbnVlIHdpdGggcmVtYWluaW5nIHR5cGVzXG4gICAgICAgIGNvbnN0IG1zZyA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihgU3luYyBmYWlsZWQgZm9yICR7b2JqZWN0VHlwZX06YCwgbXNnKTtcbiAgICAgICAgbGFzdEVycm9yID0gbXNnO1xuICAgICAgICBmYWlsZWQucHVzaChvYmplY3RUeXBlKTtcbiAgICAgIH1cblxuICAgICAgc2V0UHJvZ3Jlc3MoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGNvbXBsZXRlZDogcHJldi5jb21wbGV0ZWQgKyAxLFxuICAgICAgICBmYWlsZWQ6IFsuLi5mYWlsZWRdLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN5bmNpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIHNldFN5bmNpbmcoZmFsc2UpO1xuXG4gICAgY29uc3Qgc3VjY2VlZGVkID0gT0JKRUNUX1RZUEVTLmxlbmd0aCAtIGZhaWxlZC5sZW5ndGg7XG5cbiAgICBpZiAoZmFpbGVkLmxlbmd0aCA+IDAgJiYgc3VjY2VlZGVkID09PSAwKSB7XG4gICAgICBzZXRFcnJvcihgU3luYyBmYWlsZWQ6ICR7bGFzdEVycm9yfWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmYWlsZWQubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RXJyb3IoYFN5bmNlZCAke3N1Y2NlZWRlZH0vJHtPQkpFQ1RfVFlQRVMubGVuZ3RofSB0eXBlcy4gRmFpbGVkOiAke2ZhaWxlZC5qb2luKCcsICcpfWApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZWVkZWQgPiAwO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgc3luY0FsbCwgc3luY2luZywgcHJvZ3Jlc3MsIGVycm9yIH07XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlSHR0cENsaWVudCB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9odHRwX2NsaWVudCc7XG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgeyBTVFJJUEVfQVBJX0tFWSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoU1RSSVBFX0FQSV9LRVksIHtcbiAgaHR0cENsaWVudDogY3JlYXRlSHR0cENsaWVudCgpLFxuICBhcGlWZXJzaW9uOiAnMjAyNi0wMS0yOC5jbG92ZXInLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwZTtcbiIsICJjb25zdCBPUFRJT05TX0tFWVMgPSBbXG4gICAgJ2FwaUtleScsXG4gICAgJ2lkZW1wb3RlbmN5S2V5JyxcbiAgICAnc3RyaXBlQWNjb3VudCcsXG4gICAgJ2FwaVZlcnNpb24nLFxuICAgICdtYXhOZXR3b3JrUmV0cmllcycsXG4gICAgJ3RpbWVvdXQnLFxuICAgICdob3N0JyxcbiAgICAnYXV0aGVudGljYXRvcicsXG4gICAgJ3N0cmlwZUNvbnRleHQnLFxuICAgICdhZGRpdGlvbmFsSGVhZGVycycsXG4gICAgJ3N0cmVhbWluZycsXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGlzT3B0aW9uc0hhc2gobykge1xuICAgIHJldHVybiAobyAmJlxuICAgICAgICB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgT1BUSU9OU19LRVlTLnNvbWUoKHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwcm9wKSkpO1xufVxuLyoqXG4gKiBTdHJpbmdpZmllcyBhbiBPYmplY3QsIGFjY29tbW9kYXRpbmcgbmVzdGVkIG9iamVjdHNcbiAqIChmb3JtaW5nIHRoZSBjb252ZW50aW9uYWwga2V5ICdwYXJlbnRbY2hpbGRdPXZhbHVlJylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSwgXG4vKiogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuICovXG5fYXBpTW9kZSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlSZXF1ZXN0RGF0YShkYXRhKTtcbn1cbi8qKlxuICogRW5jb2RlcyBhIHZhbHVlIGZvciB1c2UgaW4gYSBxdWVyeSBzdHJpbmcsIGtlZXBpbmcgYnJhY2tldHMgdW5lbmNvZGVkXG4gKiBmb3IgcmVhZGFiaWxpdHkgKHRoZSBzZXJ2ZXIgYWNjZXB0cyBib3RoIGVuY29kZWQgYW5kIHVuZW5jb2RlZCBicmFja2V0cykuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVF1ZXJ5VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gKGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcbiAgICAgICAgLy8gRW5jb2RlIGNoYXJhY3RlcnMgbm90IGVuY29kZWQgYnkgZW5jb2RlVVJJQ29tcG9uZW50IGJ1dCBlbmNvZGVkIGJ5IHFzXG4gICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgICAgLy8gRGVjb2RlIGJyYWNrZXRzIGZvciByZWFkYWJpbGl0eSAoc2VydmVyIGFjY2VwdHMgYm90aClcbiAgICAgICAgLnJlcGxhY2UoLyU1Qi9nLCAnWycpXG4gICAgICAgIC5yZXBsYWNlKC8lNUQvZywgJ10nKSk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gZm9yIHF1ZXJ5IHN0cmluZyBlbmNvZGluZy5cbiAqIERhdGVzIGFyZSBjb252ZXJ0ZWQgdG8gVW5peCB0aW1lc3RhbXBzLlxuICovXG5mdW5jdGlvbiB2YWx1ZVRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWx1ZS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbn1cbi8qKlxuICogQ3VzdG9tIHF1ZXJ5IHN0cmluZyBzdHJpbmdpZmllciB0aGF0IGhhbmRsZXMgbmVzdGVkIG9iamVjdHMgYW5kIGFycmF5cy5cbiAqIFByb2R1Y2VzIG91dHB1dCBjb21wYXRpYmxlIHdpdGggdGhlIHFzIGxpYnJhcnkncyBpbmRleGVkIGFycmF5IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgZnVuY3Rpb24gZW5jb2RlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIC8vIFByaW1pdGl2ZSB2YWx1ZSAoaW5jbHVkaW5nIG51bGwgYW5kIERhdGUpXG4gICAgICAgICAgICBwYWlycy5wdXNoKGVuY29kZVF1ZXJ5VmFsdWUoa2V5KSArICc9JyArIGVuY29kZVF1ZXJ5VmFsdWUodmFsdWVUb1N0cmluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIEFycmF5OiB1c2UgaW5kZXhlZCBmb3JtYXQgYXJyWzBdLCBhcnJbMV0sIGV0Yy5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGUoa2V5ICsgJ1snICsgaSArICddJywgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPYmplY3Q6IHJlY3Vyc2Ugd2l0aCBicmFja2V0IG5vdGF0aW9uXG4gICAgICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGVuY29kZShrZXkgKyAnWycgKyBrICsgJ10nLCB2YWx1ZVtrXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIHRvcC1sZXZlbCBvYmplY3RcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmIGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGVuY29kZShrZXksIGRhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cbi8qKlxuICogT3V0cHV0cyBhIG5ldyBmdW5jdGlvbiB3aXRoIGludGVycG9sYXRlZCBvYmplY3QgcHJvcGVydHkgdmFsdWVzLlxuICogVXNlIGxpa2Ugc286XG4gKiAgIGNvbnN0IGZuID0gbWFrZVVSTEludGVycG9sYXRvcignc29tZS91cmwve3BhcmFtMX0ve3BhcmFtMn0nKTtcbiAqICAgZm4oeyBwYXJhbTE6IDEyMywgcGFyYW0yOiA0NTYgfSk7IC8vID0+ICdzb21lL3VybC8xMjMvNDU2J1xuICovXG5leHBvcnQgY29uc3QgbWFrZVVSTEludGVycG9sYXRvciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmMgPSB7XG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAnXCInOiAnXFxcXFwiJyxcbiAgICAgICAgJ1xcdTIwMjgnOiAnXFxcXHUyMDI4JyxcbiAgICAgICAgJ1xcdTIwMjknOiAnXFxcXHUyMDI5JyxcbiAgICB9O1xuICAgIHJldHVybiAoc3RyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFuU3RyaW5nID0gc3RyLnJlcGxhY2UoL1tcIlxcblxcclxcdTIwMjhcXHUyMDI5XS9nLCAoJDApID0+IHJjWyQwXSk7XG4gICAgICAgIHJldHVybiAob3V0cHV0cykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFuU3RyaW5nLnJlcGxhY2UoL1xceyhbXFxzXFxTXSs/KVxcfS9nLCAoJDAsICQxKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0c1skMV07XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRFbmNvZGVVcmlDb21wb25lbnRUeXBlKG91dHB1dCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQob3V0cHV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xufSkoKTtcbmZ1bmN0aW9uIGlzVmFsaWRFbmNvZGVVcmlDb21wb25lbnRUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFsnbnVtYmVyJywgJ3N0cmluZycsICdib29sZWFuJ10uaW5jbHVkZXModHlwZW9mIHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VXJsUGFyYW1zKHBhdGgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBwYXRoLm1hdGNoKC9cXHtcXHcrXFx9L2cpO1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5yZXBsYWNlKC9be31dL2csICcnKSk7XG59XG4vKipcbiAqIFJldHVybiB0aGUgZGF0YSBhcmd1bWVudCBmcm9tIGEgbGlzdCBvZiBhcmd1bWVudHNcbiAqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBhcmdzXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21BcmdzKGFyZ3MpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykgfHwgIWFyZ3NbMF0gfHwgdHlwZW9mIGFyZ3NbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKCFpc09wdGlvbnNIYXNoKGFyZ3NbMF0pKSB7XG4gICAgICAgIHJldHVybiBhcmdzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IGFyZ0tleXMgPSBPYmplY3Qua2V5cyhhcmdzWzBdKTtcbiAgICBjb25zdCBvcHRpb25LZXlzSW5BcmdzID0gYXJnS2V5cy5maWx0ZXIoKGtleSkgPT4gT1BUSU9OU19LRVlTLmluY2x1ZGVzKGtleSkpO1xuICAgIC8vIEluIHNvbWUgY2FzZXMgb3B0aW9ucyBtYXkgYmUgdGhlIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgICAvLyBIZXJlIHdlJ3JlIGRldGVjdGluZyBhIGNhc2Ugd2hlcmUgdGhlcmUgYXJlIHR3byBkaXN0aW5jdCBhcmd1bWVudHNcbiAgICAvLyAodGhlIGZpcnN0IGJlaW5nIGFyZ3MgYW5kIHRoZSBzZWNvbmQgb3B0aW9ucykgYW5kIHdpdGgga25vd25cbiAgICAvLyBvcHRpb24ga2V5cyBpbiB0aGUgZmlyc3Qgc28gdGhhdCB3ZSBjYW4gd2FybiB0aGUgdXNlciBhYm91dCBpdC5cbiAgICBpZiAob3B0aW9uS2V5c0luQXJncy5sZW5ndGggPiAwICYmXG4gICAgICAgIG9wdGlvbktleXNJbkFyZ3MubGVuZ3RoICE9PSBhcmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBlbWl0V2FybmluZyhgT3B0aW9ucyBmb3VuZCBpbiBhcmd1bWVudHMgKCR7b3B0aW9uS2V5c0luQXJncy5qb2luKCcsICcpfSkuIERpZCB5b3UgbWVhbiB0byBwYXNzIGFuIG9wdGlvbnMgb2JqZWN0PyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZS93aWtpL1Bhc3NpbmctT3B0aW9ucy5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufVxuLyoqXG4gKiBSZXR1cm4gdGhlIG9wdGlvbnMgaGFzaCBmcm9tIGEgbGlzdCBvZiBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGlvbnNGcm9tQXJncyhhcmdzKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgaG9zdDogbnVsbCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgc3RyZWFtaW5nOiBmYWxzZSxcbiAgICB9O1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdHMuYXV0aGVudGljYXRvciA9IGNyZWF0ZUFwaUtleUF1dGhlbnRpY2F0b3IoYXJncy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPcHRpb25zSGFzaChhcmcpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzLnBvcCgpKTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcykuZmlsdGVyKChrZXkpID0+ICFPUFRJT05TX0tFWVMuaW5jbHVkZXMoa2V5KSk7XG4gICAgICAgICAgICBpZiAoZXh0cmFLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVtaXRXYXJuaW5nKGBJbnZhbGlkIG9wdGlvbnMgZm91bmQgKCR7ZXh0cmFLZXlzLmpvaW4oJywgJyl9KTsgaWdub3JpbmcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIG9wdHMuYXV0aGVudGljYXRvciA9IGNyZWF0ZUFwaUtleUF1dGhlbnRpY2F0b3IocGFyYW1zLmFwaUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmlkZW1wb3RlbmN5S2V5KSB7XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzWydJZGVtcG90ZW5jeS1LZXknXSA9IHBhcmFtcy5pZGVtcG90ZW5jeUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuc3RyaXBlQWNjb3VudCkge1xuICAgICAgICAgICAgICAgIG9wdHMuaGVhZGVyc1snU3RyaXBlLUFjY291bnQnXSA9IHBhcmFtcy5zdHJpcGVBY2NvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5zdHJpcGVDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaGVhZGVyc1snU3RyaXBlLUFjY291bnQnXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzcGVjaWZ5IGJvdGggc3RyaXBlQWNjb3VudCBhbmQgc3RyaXBlQ29udGV4dC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMuaGVhZGVyc1snU3RyaXBlLUNvbnRleHQnXSA9IHBhcmFtcy5zdHJpcGVDb250ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5hcGlWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzWydTdHJpcGUtVmVyc2lvbiddID0gcGFyYW1zLmFwaVZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXJhbXMubWF4TmV0d29ya1JldHJpZXMpKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5zZXR0aW5ncy5tYXhOZXR3b3JrUmV0cmllcyA9IHBhcmFtcy5tYXhOZXR3b3JrUmV0cmllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhcmFtcy50aW1lb3V0KSkge1xuICAgICAgICAgICAgICAgIG9wdHMuc2V0dGluZ3MudGltZW91dCA9IHBhcmFtcy50aW1lb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5ob3N0KSB7XG4gICAgICAgICAgICAgICAgb3B0cy5ob3N0ID0gcGFyYW1zLmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmF1dGhlbnRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmFwaUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzcGVjaWZ5IGJvdGggYXBpS2V5IGFuZCBhdXRoZW50aWNhdG9yLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuYXV0aGVudGljYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhdXRoZW50aWNhdG9yIG11c3QgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZWNlaXZpbmcgYSByZXF1ZXN0IGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMuYXV0aGVudGljYXRvciA9IHBhcmFtcy5hdXRoZW50aWNhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5hZGRpdGlvbmFsSGVhZGVycykge1xuICAgICAgICAgICAgICAgIG9wdHMuaGVhZGVycyA9IHBhcmFtcy5hZGRpdGlvbmFsSGVhZGVycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuc3RyZWFtaW5nKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5zdHJlYW1pbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRzO1xufVxuLyoqXG4gKiBQcm92aWRlIHNpbXBsZSBcIkNsYXNzXCIgZXh0ZW5zaW9uIG1lY2hhbmlzbS5cbiAqIDwhLS0gUHVibGljIEFQSSBhY2Nlc3NpYmxlIHZpYSBTdHJpcGUuU3RyaXBlUmVzb3VyY2UuZXh0ZW5kIC0tPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdG9FeHRlbmQoc3ViKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgY29uc3QgU3VwZXIgPSB0aGlzO1xuICAgIGNvbnN0IENvbnN0cnVjdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN1YiwgJ2NvbnN0cnVjdG9yJylcbiAgICAgICAgPyBzdWIuY29uc3RydWN0b3JcbiAgICAgICAgOiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgU3VwZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgLy8gVGhpcyBpbml0aWFsaXphdGlvbiBsb2dpYyBpcyBzb21ld2hhdCBzZW5zaXRpdmUgdG8gYmUgY29tcGF0aWJsZSB3aXRoXG4gICAgLy8gZGl2ZXJnZW50IEpTIGltcGxlbWVudGF0aW9ucyBsaWtlIHRoZSBvbmUgZm91bmQgaW4gUXQuIFNlZSBoZXJlIGZvciBtb3JlXG4gICAgLy8gY29udGV4dDpcbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGUvcHVsbC8zMzRcbiAgICBPYmplY3QuYXNzaWduKENvbnN0cnVjdG9yLCBTdXBlcik7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIE9iamVjdC5hc3NpZ24oQ29uc3RydWN0b3IucHJvdG90eXBlLCBzdWIpO1xuICAgIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbi8qKlxuICogUmVtb3ZlIGVtcHR5IHZhbHVlcyBmcm9tIGFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTnVsbGlzaChvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChvYmpba2V5XSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgc3RhbmRhcmQgSFRUUCBIZWFkZXJzOlxuICogeydmb28tYmFyJzogJ2hpJ31cbiAqIGJlY29tZXNcbiAqIHsnRm9vLUJhcic6ICdoaSd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJzKG9iaikge1xuICAgIGlmICghKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChyZXN1bHQsIGhlYWRlcikgPT4ge1xuICAgICAgICByZXN1bHRbbm9ybWFsaXplSGVhZGVyKGhlYWRlcildID0gb2JqW2hlYWRlcl07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xufVxuLyoqXG4gKiBTdG9sZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWFydGVuLWRlLXZyaWVzL2hlYWRlci1jYXNlLW5vcm1hbGl6ZXIvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDM2LUw0MVxuICogd2l0aG91dCB0aGUgZXhjZXB0aW9ucyB3aGljaCBhcmUgaXJyZWxldmFudCB0byB1cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgICByZXR1cm4gaGVhZGVyXG4gICAgICAgIC5zcGxpdCgnLScpXG4gICAgICAgIC5tYXAoKHRleHQpID0+IHRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAuam9pbignLScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNraWZ5UHJvbWlzZVdpdGhUaW1lb3V0KHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIEVuc3VyZSBjYWxsYmFjayBpcyBjYWxsZWQgb3V0c2lkZSBvZiBwcm9taXNlIHN0YWNrLlxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG4vKipcbiAqIEFsbG93IGZvciBzcGVjaWFsIGNhcGl0YWxpemF0aW9uIGNhc2VzIChzdWNoIGFzIE9BdXRoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsVG9DYW1lbENhc2UobmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnT0F1dGgnKSB7XG4gICAgICAgIHJldHVybiAnb2F1dGgnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5hbWVbMF0udG9Mb3dlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzLmVtaXRXYXJuaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oYFN0cmlwZTogJHt3YXJuaW5nfWApOyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGUgKi9cbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgJ1N0cmlwZScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiAodHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JykgJiYgISFvYmo7XG59XG4vLyBGb3IgdXNlIGluIG11bHRpcGFydCByZXF1ZXN0c1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5BbmRTdHJpbmdpZnkoZGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHN0ZXAgPSAob2JqLCBwcmV2S2V5KSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSBwcmV2S2V5ID8gYCR7cHJldktleX1bJHtrZXl9XWAgOiBrZXk7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSAmJlxuICAgICAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vbi1idWZmZXIgbm9uLWZpbGUgT2JqZWN0cyBhcmUgcmVjdXJzaXZlbHkgZmxhdHRlbmVkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwKHZhbHVlLCBuZXdLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVmZmVycyBhbmQgZmlsZSBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aG91dCBtb2RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQcmltaXRpdmVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nc1xuICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzdGVwKGRhdGEsIG51bGwpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbnRlZ2VyKG5hbWUsIG4sIGRlZmF1bHRWYWwpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobikpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRWYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gbXVzdCBiZSBhbiBpbnRlZ2VyYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lUHJvY2Vzc1VzZXJBZ2VudFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHt9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgbGFuZ192ZXJzaW9uOiBwcm9jZXNzLnZlcnNpb24sXG4gICAgICAgICAgICBwbGF0Zm9ybTogcHJvY2Vzcy5wbGF0Zm9ybSxcbiAgICAgICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcGlLZXlBdXRoZW50aWNhdG9yKGFwaUtleSkge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0b3IgPSAocmVxdWVzdCkgPT4ge1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIGFwaUtleTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgLy8gRm9yIHRlc3RpbmdcbiAgICBhdXRoZW50aWNhdG9yLl9hcGlLZXkgPSBhcGlLZXk7XG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0b3I7XG59XG4vKipcbiAqIEpvaW5zIGFuIGFycmF5IG9mIFVpbnQ4QXJyYXlzIGludG8gYSBzaW5nbGUgVWludDhBcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5cykge1xuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gYXJyYXlzLnJlZHVjZSgobGVuLCBhcnJheSkgPT4gbGVuICsgYXJyYXkubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBtZXJnZWQgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgYXJyYXlzLmZvckVhY2goKGFycmF5KSA9PiB7XG4gICAgICAgIG1lcmdlZC5zZXQoYXJyYXksIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBhcnJheS5sZW5ndGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1lcmdlZDtcbn1cbi8qKlxuICogUmVwbGFjZXMgRGF0ZSBvYmplY3RzIHdpdGggVW5peCB0aW1lc3RhbXBzXG4gKi9cbmZ1bmN0aW9uIGRhdGVUaW1lUmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXNba2V5XS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEpTT04gc3RyaW5naWZpZXMgYW4gT2JqZWN0LCByZXBsYWNpbmcgRGF0ZSBvYmplY3RzIHdpdGggVW5peCB0aW1lc3RhbXBzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc29uU3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhLCBkYXRlVGltZVJlcGxhY2VyKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGdpdmVuIHBhdGggdG8gZGV0ZXJtaW5lIGlmIHRoZSBlbmRwb2ludCBpcyBmb3IgdjEgb3IgdjIgQVBJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBUElNb2RlKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuICd2MSc7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoJy92MicpID8gJ3YyJyA6ICd2MSc7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIdHRwSGVhZGVyQXNTdHJpbmcoaGVhZGVyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgICByZXR1cm4gaGVhZGVyLmpvaW4oJywgJyk7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoaGVhZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUh0dHBIZWFkZXJBc051bWJlcihoZWFkZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSBBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXJbMF0gOiBoZWFkZXI7XG4gICAgcmV0dXJuIE51bWJlcihudW1iZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSGVhZGVyc0ZvckZldGNoKGhlYWRlcnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoaGVhZGVycykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIFtrZXksIHBhcnNlSHR0cEhlYWRlckFzU3RyaW5nKHZhbHVlKV07XG4gICAgfSk7XG59XG4iLCAiLyoqXG4gKiBFbmNhcHN1bGF0ZXMgdGhlIGxvZ2ljIGZvciBpc3N1aW5nIGEgcmVxdWVzdCB0byB0aGUgU3RyaXBlIEFQSS5cbiAqXG4gKiBBIGN1c3RvbSBIVFRQIGNsaWVudCBzaG91bGQgc2hvdWxkIGltcGxlbWVudDpcbiAqIDEuIEEgcmVzcG9uc2UgY2xhc3Mgd2hpY2ggZXh0ZW5kcyBIdHRwQ2xpZW50UmVzcG9uc2UgYW5kIHdyYXBzIGFyb3VuZCB0aGVpclxuICogICAgb3duIGludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgcmVzcG9uc2UuXG4gKiAyLiBBIGNsaWVudCBjbGFzcyB3aGljaCBleHRlbmRzIEh0dHBDbGllbnQgYW5kIGltcGxlbWVudHMgYWxsIG1ldGhvZHMsXG4gKiAgICByZXR1cm5pbmcgdGhlaXIgb3duIHJlc3BvbnNlIGNsYXNzIHdoZW4gbWFraW5nIHJlcXVlc3RzLlxuICovXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudCB7XG4gICAgLyoqIFRoZSBjbGllbnQgbmFtZSB1c2VkIGZvciBkaWFnbm9zdGljcy4gKi9cbiAgICBnZXRDbGllbnROYW1lKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldENsaWVudE5hbWUgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgdGltZW91dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21ha2VSZXF1ZXN0IG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgLyoqIEhlbHBlciB0byBtYWtlIGEgY29uc2lzdGVudCB0aW1lb3V0IGVycm9yIGFjcm9zcyBpbXBsZW1lbnRhdGlvbnMuICovXG4gICAgc3RhdGljIG1ha2VUaW1lb3V0RXJyb3IoKSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRFcnIgPSBuZXcgVHlwZUVycm9yKEh0dHBDbGllbnQuVElNRU9VVF9FUlJPUl9DT0RFKTtcbiAgICAgICAgdGltZW91dEVyci5jb2RlID0gSHR0cENsaWVudC5USU1FT1VUX0VSUk9SX0NPREU7XG4gICAgICAgIHJldHVybiB0aW1lb3V0RXJyO1xuICAgIH1cbn1cbi8vIFB1YmxpYyBBUEkgYWNjZXNzaWJsZSB2aWEgU3RyaXBlLkh0dHBDbGllbnRcbkh0dHBDbGllbnQuQ09OTkVDVElPTl9DTE9TRURfRVJST1JfQ09ERVMgPSBbJ0VDT05OUkVTRVQnLCAnRVBJUEUnXTtcbkh0dHBDbGllbnQuVElNRU9VVF9FUlJPUl9DT0RFID0gJ0VUSU1FRE9VVCc7XG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuX3N0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG4gICAgZ2V0U3RhdHVzQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxuICAgIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkZXJzO1xuICAgIH1cbiAgICBnZXRSYXdSZXNwb25zZSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRSYXdSZXNwb25zZSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHRvU3RyZWFtKHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b1N0cmVhbSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b0pTT04gbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBwYXJzZUhlYWRlcnNGb3JGZXRjaCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRSZXNwb25zZSwgfSBmcm9tICcuL0h0dHBDbGllbnQuanMnO1xuLyoqXG4gKiBIVFRQIGNsaWVudCB3aGljaCB1c2VzIGEgYGZldGNoYCBmdW5jdGlvbiB0byBpc3N1ZSByZXF1ZXN0cy5cbiAqXG4gKiBCeSBkZWZhdWx0IHJlbGllcyBvbiB0aGUgZ2xvYmFsIGBmZXRjaGAgZnVuY3Rpb24sIGJ1dCBhbiBvcHRpb25hbCBmdW5jdGlvblxuICogY2FuIGJlIHBhc3NlZCBpbi4gSWYgcGFzc2luZyBpbiBhIGZ1bmN0aW9uLCBpdCBpcyBleHBlY3RlZCB0byBtYXRjaCB0aGUgV2ViXG4gKiBGZXRjaCBBUEkuIEFzIGFuIGV4YW1wbGUsIHRoaXMgY291bGQgYmUgdGhlIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IHRoZVxuICogbm9kZS1mZXRjaCBwYWNrYWdlIChodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZldGNoSHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGZldGNoRm4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gRGVmYXVsdCB0byBnbG9iYWwgZmV0Y2ggaWYgYXZhaWxhYmxlXG4gICAgICAgIGlmICghZmV0Y2hGbikge1xuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLmZldGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmZXRjaCgpIGZ1bmN0aW9uIG5vdCBwcm92aWRlZCBhbmQgaXMgbm90IGRlZmluZWQgaW4gdGhlIGdsb2JhbCBzY29wZS4gJyArXG4gICAgICAgICAgICAgICAgICAgICdZb3UgbXVzdCBwcm92aWRlIGEgZmV0Y2ggaW1wbGVtZW50YXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaEZuID0gZ2xvYmFsVGhpcy5mZXRjaDtcbiAgICAgICAgfVxuICAgICAgICAvLyBCb3RoIHRpbWVvdXQgYmVoYXZpb3JzIGRpZmZlcnMgZnJvbSBOb2RlOlxuICAgICAgICAvLyAtIEZldGNoIHVzZXMgYSBzaW5nbGUgdGltZW91dCBmb3IgdGhlIGVudGlyZSBsZW5ndGggb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgIC8vIC0gTm9kZSBpcyBtb3JlIGZpbmUtZ3JhaW5lZCBhbmQgcmVzZXRzIHRoZSB0aW1lb3V0IGFmdGVyIGVhY2ggc3RhZ2Ugb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLkFib3J0Q29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gVXRpbGlzZSBuYXRpdmUgQWJvcnRDb250cm9sbGVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gQWJvcnRDb250cm9sbGVyIHdhcyBhZGRlZCBpbiBOb2RlIHYxNS4wLjAsIHYxNC4xNy4wXG4gICAgICAgICAgICB0aGlzLl9mZXRjaEZuID0gRmV0Y2hIdHRwQ2xpZW50Lm1ha2VGZXRjaFdpdGhBYm9ydFRpbWVvdXQoZmV0Y2hGbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8gcmFjaW5nIGFnYWluc3QgYSB0aW1lb3V0IHByb21pc2UgaWYgbm90IGF2YWlsYWJsZSBpbiB0aGUgcnVudGltZVxuICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBhY3R1YWxseSBjYW5jZWwgdGhlIHVuZGVybHlpbmcgZmV0Y2ggb3BlcmF0aW9uIG9yIHJlc291cmNlc1xuICAgICAgICAgICAgdGhpcy5fZmV0Y2hGbiA9IEZldGNoSHR0cENsaWVudC5tYWtlRmV0Y2hXaXRoUmFjZVRpbWVvdXQoZmV0Y2hGbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG1ha2VGZXRjaFdpdGhSYWNlVGltZW91dChmZXRjaEZuKSB7XG4gICAgICAgIHJldHVybiAodXJsLCBpbml0LCB0aW1lb3V0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcGVuZGluZ1RpbWVvdXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChIdHRwQ2xpZW50Lm1ha2VUaW1lb3V0RXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IGZldGNoRm4odXJsLCBpbml0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW2ZldGNoUHJvbWlzZSwgdGltZW91dFByb21pc2VdKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1RpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocGVuZGluZ1RpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBtYWtlRmV0Y2hXaXRoQWJvcnRUaW1lb3V0KGZldGNoRm4pIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jICh1cmwsIGluaXQsIHRpbWVvdXQpID0+IHtcbiAgICAgICAgICAgIC8vIFVzZSBBYm9ydENvbnRyb2xsZXIgYmVjYXVzZSBBYm9ydFNpZ25hbC50aW1lb3V0KCkgd2FzIGFkZGVkIGxhdGVyIGluIE5vZGUgdjE3LjMuMCwgdjE2LjE0LjBcbiAgICAgICAgICAgIGNvbnN0IGFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgbGV0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYWJvcnQuYWJvcnQoSHR0cENsaWVudC5tYWtlVGltZW91dEVycm9yKCkpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmZXRjaEZuKHVybCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbml0KSwgeyBzaWduYWw6IGFib3J0LnNpZ25hbCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gU29tZSBpbXBsZW1lbnRhdGlvbnMsIGxpa2Ugbm9kZS1mZXRjaCwgZG8gbm90IHJlc3BlY3QgdGhlIHJlYXNvbiBwYXNzZWQgdG8gQWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICAgICAgICAvLyBhbmQgaW5zdGVhZCBpdCBhbHdheXMgdGhyb3dzIGFuIEFib3J0RXJyb3JcbiAgICAgICAgICAgICAgICAvLyBXZSBjYXRjaCB0aGlzIGNhc2UgdG8gbm9ybWFsaXNlIGFsbCB0aW1lb3V0IGVycm9yc1xuICAgICAgICAgICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEh0dHBDbGllbnQubWFrZVRpbWVvdXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlLiAqL1xuICAgIGdldENsaWVudE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZmV0Y2gnO1xuICAgIH1cbiAgICBhc3luYyBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgdGltZW91dCkge1xuICAgICAgICBjb25zdCBpc0luc2VjdXJlQ29ubmVjdGlvbiA9IHByb3RvY29sID09PSAnaHR0cCc7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aCwgYCR7aXNJbnNlY3VyZUNvbm5lY3Rpb24gPyAnaHR0cCcgOiAnaHR0cHMnfTovLyR7aG9zdH1gKTtcbiAgICAgICAgdXJsLnBvcnQgPSBwb3J0O1xuICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBleHBlY3QgcGF5bG9hZHMsIHdlIHNob3VsZCBhbHdheXMgcGFzcyBhIGJvZHkgdmFsdWVcbiAgICAgICAgLy8gZXZlbiB3aGVuIGl0IGlzIGVtcHR5LiBXaXRob3V0IHRoaXMsIHNvbWUgSlMgcnVudGltZXMgKGVnLiBEZW5vKSB3aWxsXG4gICAgICAgIC8vIGluamVjdCBhIHNlY29uZCBDb250ZW50LUxlbmd0aCBoZWFkZXIuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RyaXBlL3N0cmlwZS1ub2RlL2lzc3Vlcy8xNTE5XG4gICAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgIGNvbnN0IG1ldGhvZEhhc1BheWxvYWQgPSBtZXRob2QgPT0gJ1BPU1QnIHx8IG1ldGhvZCA9PSAnUFVUJyB8fCBtZXRob2QgPT0gJ1BBVENIJztcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcXVlc3REYXRhIHx8IChtZXRob2RIYXNQYXlsb2FkID8gJycgOiB1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLl9mZXRjaEZuKHVybC50b1N0cmluZygpLCB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnNGb3JGZXRjaChoZWFkZXJzKSxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICByZXR1cm4gbmV3IEZldGNoSHR0cENsaWVudFJlc3BvbnNlKHJlcyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZldGNoSHR0cENsaWVudFJlc3BvbnNlIGV4dGVuZHMgSHR0cENsaWVudFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXMpIHtcbiAgICAgICAgc3VwZXIocmVzLnN0YXR1cywgRmV0Y2hIdHRwQ2xpZW50UmVzcG9uc2UuX3RyYW5zZm9ybUhlYWRlcnNUb09iamVjdChyZXMuaGVhZGVycykpO1xuICAgICAgICB0aGlzLl9yZXMgPSByZXM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xuICAgIH1cbiAgICB0b1N0cmVhbShzdHJlYW1Db21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHkgYGZldGNoYCBkb2VzIG5vdCBoYXZlIGV2ZW50IGhhbmRsZXJzIGZvciB3aGVuIHRoZSBzdHJlYW0gaXNcbiAgICAgICAgLy8gY29tcGxldGVseSByZWFkLiBXZSB0aGVyZWZvcmUgaW52b2tlIHRoZSBzdHJlYW1Db21wbGV0ZUNhbGxiYWNrIHJpZ2h0XG4gICAgICAgIC8vIGF3YXkuIFRoaXMgY2FsbGJhY2sgZW1pdHMgYSByZXNwb25zZSBldmVudCB3aXRoIG1ldGFkYXRhIGFuZCBjb21wbGV0ZXNcbiAgICAgICAgLy8gbWV0cmljcywgc28gaXQncyBvayB0byBkbyB0aGlzIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHN0cmVhbSB0byBiZVxuICAgICAgICAvLyBjb21wbGV0ZWx5IHJlYWQuXG4gICAgICAgIHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgLy8gRmV0Y2gncyBgYm9keWAgcHJvcGVydHkgaXMgZXhwZWN0ZWQgdG8gYmUgYSByZWFkYWJsZSBzdHJlYW0gb2YgdGhlIGJvZHkuXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXMuYm9keTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzLmpzb24oKTtcbiAgICB9XG4gICAgc3RhdGljIF90cmFuc2Zvcm1IZWFkZXJzVG9PYmplY3QoaGVhZGVycykge1xuICAgICAgICAvLyBGZXRjaCB1c2VzIGEgSGVhZGVycyBpbnN0YW5jZSBzbyB0aGlzIG11c3QgYmUgY29udmVydGVkIHRvIGEgYmFyZWJvbmVzXG4gICAgICAgIC8vIEpTIG9iamVjdCB0byBtZWV0IHRoZSBIdHRwQ2xpZW50IGludGVyZmFjZS5cbiAgICAgICAgY29uc3QgaGVhZGVyc09iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgZW50cnkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNlIG9iamVjdHMgcHJvZHVjZWQgYnkgdGhlIGZldGNoIGZ1bmN0aW9uIGdpdmVuIHRvIEZldGNoSHR0cENsaWVudCBkbyBub3QgaGF2ZSBhbiBpdGVyYWJsZSBoZWFkZXJzIG1hcC4gUmVzcG9uc2UjaGVhZGVycyBzaG91bGQgYmUgYW4gaXRlcmFibGUgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyc09ialtlbnRyeVswXV0gPSBlbnRyeVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyc09iajtcbiAgICB9XG59XG4iLCAiLyoqXG4gKiBJbnRlcmZhY2UgZW5jYXBzdWxhdGluZyB0aGUgdmFyaW91cyBjcnlwdG8gY29tcHV0YXRpb25zIHVzZWQgYnkgdGhlIGxpYnJhcnksXG4gKiBhbGxvd2luZyBwbHVnZ2FibGUgdW5kZXJseWluZyBjcnlwdG8gaW1wbGVtZW50YXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgQ3J5cHRvUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgU0hBLTI1NiBITUFDIGdpdmVuIGEgc2VjcmV0IGFuZCBhIHBheWxvYWQgKGVuY29kZWQgaW4gVVRGLTgpLlxuICAgICAqIFRoZSBvdXRwdXQgSE1BQyBzaG91bGQgYmUgZW5jb2RlZCBpbiBoZXhhZGVjaW1hbC5cbiAgICAgKlxuICAgICAqIFNhbXBsZSB2YWx1ZXMgZm9yIGltcGxlbWVudGF0aW9uczpcbiAgICAgKiAtIGNvbXB1dGVITUFDU2lnbmF0dXJlKCcnLCAndGVzdF9zZWNyZXQnKSA9PiAnZjdmOWJkNDdmYjk4NzMzN2I1Nzk2ZmRjMWZkYjliYTIyMWQwZDUzOTY4MTRiZmNhZjk1MjFmNDNmZDg5MjdmZCdcbiAgICAgKiAtIGNvbXB1dGVITUFDU2lnbmF0dXJlKCdcXHVkODNkXFx1ZGUwMCcsICd0ZXN0X3NlY3JldCcpID0+ICc4MzdkYTI5NmQwNWM0ZmUzMWY2MWQ1ZDdlYWQwMzUwOTlkOTU4NWE1YmNkZTg3ZGU5NTIwMTJhNzhmMGIwYzQzXG4gICAgICovXG4gICAgY29tcHV0ZUhNQUNTaWduYXR1cmUocGF5bG9hZCwgc2VjcmV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29tcHV0ZUhNQUNTaWduYXR1cmUgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb25vdXMgdmVyc2lvbiBvZiBgY29tcHV0ZUhNQUNTaWduYXR1cmVgLiBTb21lIGltcGxlbWVudGF0aW9ucyBtYXlcbiAgICAgKiBvbmx5IGFsbG93IHN1cHBvcnQgYXN5bmMgc2lnbmF0dXJlIGNvbXB1dGF0aW9uLlxuICAgICAqXG4gICAgICogQ29tcHV0ZXMgYSBTSEEtMjU2IEhNQUMgZ2l2ZW4gYSBzZWNyZXQgYW5kIGEgcGF5bG9hZCAoZW5jb2RlZCBpbiBVVEYtOCkuXG4gICAgICogVGhlIG91dHB1dCBITUFDIHNob3VsZCBiZSBlbmNvZGVkIGluIGhleGFkZWNpbWFsLlxuICAgICAqXG4gICAgICogU2FtcGxlIHZhbHVlcyBmb3IgaW1wbGVtZW50YXRpb25zOlxuICAgICAqIC0gY29tcHV0ZUhNQUNTaWduYXR1cmUoJycsICd0ZXN0X3NlY3JldCcpID0+ICdmN2Y5YmQ0N2ZiOTg3MzM3YjU3OTZmZGMxZmRiOWJhMjIxZDBkNTM5NjgxNGJmY2FmOTUyMWY0M2ZkODkyN2ZkJ1xuICAgICAqIC0gY29tcHV0ZUhNQUNTaWduYXR1cmUoJ1xcdWQ4M2RcXHVkZTAwJywgJ3Rlc3Rfc2VjcmV0JykgPT4gJzgzN2RhMjk2ZDA1YzRmZTMxZjYxZDVkN2VhZDAzNTA5OWQ5NTg1YTViY2RlODdkZTk1MjAxMmE3OGYwYjBjNDNcbiAgICAgKi9cbiAgICBjb21wdXRlSE1BQ1NpZ25hdHVyZUFzeW5jKHBheWxvYWQsIHNlY3JldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXB1dGVITUFDU2lnbmF0dXJlQXN5bmMgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIFNIQS0yNTYgaGFzaCBvZiB0aGUgZGF0YS5cbiAgICAgKi9cbiAgICBjb21wdXRlU0hBMjU2QXN5bmMoZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXB1dGVTSEEyNTYgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbi8qKlxuICogSWYgdGhlIGNyeXB0byBwcm92aWRlciBvbmx5IHN1cHBvcnRzIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zLFxuICogdGhyb3cgQ3J5cHRvUHJvdmlkZXJPbmx5U3VwcG9ydHNBc3luY0Vycm9yIGluc3RlYWQgb2ZcbiAqIGEgZ2VuZXJpYyBlcnJvciBzbyB0aGF0IHRoZSBjYWxsZXIgY2FuIGNob29zZSB0byBwcm92aWRlXG4gKiBhIG1vcmUgaGVscGZ1bCBlcnJvciBtZXNzYWdlIHRvIGRpcmVjdCB0aGUgdXNlciB0byB1c2VcbiAqIGFuIGFzeW5jaHJvbm91cyBwYXRod2F5LlxuICovXG5leHBvcnQgY2xhc3MgQ3J5cHRvUHJvdmlkZXJPbmx5U3VwcG9ydHNBc3luY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuIiwgImltcG9ydCB7IENyeXB0b1Byb3ZpZGVyLCBDcnlwdG9Qcm92aWRlck9ubHlTdXBwb3J0c0FzeW5jRXJyb3IsIH0gZnJvbSAnLi9DcnlwdG9Qcm92aWRlci5qcyc7XG4vKipcbiAqIGBDcnlwdG9Qcm92aWRlciB3aGljaCB1c2VzIHRoZSBTdWJ0bGVDcnlwdG8gaW50ZXJmYWNlIG9mIHRoZSBXZWIgQ3J5cHRvIEFQSS5cbiAqXG4gKiBUaGlzIG9ubHkgc3VwcG9ydHMgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJ0bGVDcnlwdG9Qcm92aWRlciBleHRlbmRzIENyeXB0b1Byb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdWJ0bGVDcnlwdG8pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gSWYgbm8gc3VidGxlIGNyeXB0byBpcyBpbnRlcmZhY2UsIGRlZmF1bHQgdG8gdGhlIGdsb2JhbCBuYW1lc3BhY2UuIFRoaXNcbiAgICAgICAgLy8gaXMgdG8gYWxsb3cgY3VzdG9tIGludGVyZmFjZXMgKGVnLiB1c2luZyB0aGUgTm9kZSB3ZWJjcnlwdG8gaW50ZXJmYWNlIGluXG4gICAgICAgIC8vIHRlc3RzKS5cbiAgICAgICAgdGhpcy5zdWJ0bGVDcnlwdG8gPSBzdWJ0bGVDcnlwdG8gfHwgY3J5cHRvLnN1YnRsZTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGNvbXB1dGVITUFDU2lnbmF0dXJlKHBheWxvYWQsIHNlY3JldCkge1xuICAgICAgICB0aHJvdyBuZXcgQ3J5cHRvUHJvdmlkZXJPbmx5U3VwcG9ydHNBc3luY0Vycm9yKCdTdWJ0bGVDcnlwdG9Qcm92aWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIHN5bmNocm9ub3VzIGNvbnRleHQuJyk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBhc3luYyBjb21wdXRlSE1BQ1NpZ25hdHVyZUFzeW5jKHBheWxvYWQsIHNlY3JldCkge1xuICAgICAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuc3VidGxlQ3J5cHRvLmltcG9ydEtleSgncmF3JywgZW5jb2Rlci5lbmNvZGUoc2VjcmV0KSwge1xuICAgICAgICAgICAgbmFtZTogJ0hNQUMnLFxuICAgICAgICAgICAgaGFzaDogeyBuYW1lOiAnU0hBLTI1NicgfSxcbiAgICAgICAgfSwgZmFsc2UsIFsnc2lnbiddKTtcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlQnVmZmVyID0gYXdhaXQgdGhpcy5zdWJ0bGVDcnlwdG8uc2lnbignaG1hYycsIGtleSwgZW5jb2Rlci5lbmNvZGUocGF5bG9hZCkpO1xuICAgICAgICAvLyBjcnlwdG8uc3VidGxlIHJldHVybnMgdGhlIHNpZ25hdHVyZSBpbiBiYXNlNjQgZm9ybWF0LiBUaGlzIG11c3QgYmVcbiAgICAgICAgLy8gZW5jb2RlZCBpbiBoZXggdG8gbWF0Y2ggdGhlIENyeXB0b1Byb3ZpZGVyIGNvbnRyYWN0LiBXZSBtYXAgZWFjaCBieXRlIGluXG4gICAgICAgIC8vIHRoZSBidWZmZXIgdG8gaXRzIGNvcnJlc3BvbmRpbmcgaGV4IG9jdGV0IGFuZCB0aGVuIGNvbWJpbmUgaW50byBhIHN0cmluZy5cbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlQnl0ZXMgPSBuZXcgVWludDhBcnJheShzaWduYXR1cmVCdWZmZXIpO1xuICAgICAgICBjb25zdCBzaWduYXR1cmVIZXhDb2RlcyA9IG5ldyBBcnJheShzaWduYXR1cmVCeXRlcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hdHVyZUJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaWduYXR1cmVIZXhDb2Rlc1tpXSA9IGJ5dGVIZXhNYXBwaW5nW3NpZ25hdHVyZUJ5dGVzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2lnbmF0dXJlSGV4Q29kZXMuam9pbignJyk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBhc3luYyBjb21wdXRlU0hBMjU2QXN5bmMoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgdGhpcy5zdWJ0bGVDcnlwdG8uZGlnZXN0KCdTSEEtMjU2JywgZGF0YSkpO1xuICAgIH1cbn1cbi8vIENhY2hlZCBtYXBwaW5nIG9mIGJ5dGUgdG8gaGV4IHJlcHJlc2VudGF0aW9uLiBXZSBkbyB0aGlzIG9uY2UgdG8gYXZvaWQgcmUtXG4vLyBjb21wdXRpbmcgZXZlcnkgdGltZSB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhlIHJlc3VsdCBvZiBhIHNpZ25hdHVyZSB0byBoZXguXG5jb25zdCBieXRlSGV4TWFwcGluZyA9IG5ldyBBcnJheSgyNTYpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlSGV4TWFwcGluZy5sZW5ndGg7IGkrKykge1xuICAgIGJ5dGVIZXhNYXBwaW5nW2ldID0gaS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbn1cbiIsICJpbXBvcnQgeyBGZXRjaEh0dHBDbGllbnQgfSBmcm9tICcuLi9uZXQvRmV0Y2hIdHRwQ2xpZW50LmpzJztcbmltcG9ydCB7IFN1YnRsZUNyeXB0b1Byb3ZpZGVyIH0gZnJvbSAnLi4vY3J5cHRvL1N1YnRsZUNyeXB0b1Byb3ZpZGVyLmpzJztcbi8qKlxuICogSW50ZXJmYWNlIGVuY2Fwc3VsYXRpbmcgdmFyaW91cyB1dGlsaXR5IGZ1bmN0aW9ucyB3aG9zZVxuICogaW1wbGVtZW50YXRpb25zIGRlcGVuZCBvbiB0aGUgcGxhdGZvcm0gLyBKUyBydW50aW1lLlxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1GdW5jdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9mZXRjaEZuID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYWdlbnQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHVuYW1lIHdpdGggTm9kZSdzIGJ1aWx0LWluIGBleGVjYCBmdW5jdGlvbiwgaWYgYXZhaWxhYmxlLlxuICAgICAqL1xuICAgIGdldFVuYW1lKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFVuYW1lIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdjQgVVVJRC4gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXG4gICAgICovXG4gICAgdXVpZDQoKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgICAgICAgICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wYXJlcyBzdHJpbmdzIGluIGNvbnN0YW50IHRpbWUuXG4gICAgICovXG4gICAgc2VjdXJlQ29tcGFyZShhLCBiKSB7XG4gICAgICAgIC8vIHJldHVybiBlYXJseSBoZXJlIGlmIGJ1ZmZlciBsZW5ndGhzIGFyZSBub3QgZXF1YWxcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IGEubGVuZ3RoO1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgcmVzdWx0IHw9IGEuY2hhckNvZGVBdChpKSBeIGIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0ID09PSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGV2ZW50IGVtaXR0ZXIuXG4gICAgICovXG4gICAgY3JlYXRlRW1pdHRlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVFbWl0dGVyIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSByZXF1ZXN0IGRhdGEgaXMgYSBzdHJlYW0uIElmIHNvLCByZWFkIHRoZSBlbnRpcmUgc3RyZWFtXG4gICAgICogdG8gYSBidWZmZXIgYW5kIHJldHVybiB0aGUgYnVmZmVyLlxuICAgICAqL1xuICAgIHRyeUJ1ZmZlckRhdGEoZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RyeUJ1ZmZlckRhdGEgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEhUVFAgY2xpZW50IHdoaWNoIHVzZXMgdGhlIE5vZGUgYGh0dHBgIGFuZCBgaHR0cHNgIHBhY2thZ2VzXG4gICAgICogdG8gaXNzdWUgcmVxdWVzdHMuXG4gICAgICovXG4gICAgY3JlYXRlTm9kZUh0dHBDbGllbnQoYWdlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVOb2RlSHR0cENsaWVudCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSFRUUCBjbGllbnQgZm9yIGlzc3VpbmcgU3RyaXBlIEFQSSByZXF1ZXN0cyB3aGljaCB1c2VzIHRoZSBXZWJcbiAgICAgKiBGZXRjaCBBUEkuXG4gICAgICpcbiAgICAgKiBBIGZldGNoIGZ1bmN0aW9uIGNhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtZXRlci4gSWYgbm9uZSBpc1xuICAgICAqIHBhc3NlZCwgd2lsbCBkZWZhdWx0IHRvIHRoZSBkZWZhdWx0IGBmZXRjaGAgZnVuY3Rpb24gaW4gdGhlIGdsb2JhbCBzY29wZS5cbiAgICAgKi9cbiAgICBjcmVhdGVGZXRjaEh0dHBDbGllbnQoZmV0Y2hGbikge1xuICAgICAgICByZXR1cm4gbmV3IEZldGNoSHR0cENsaWVudChmZXRjaEZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBIVFRQIGNsaWVudCB1c2luZyBydW50aW1lLXNwZWNpZmljIEFQSXMuXG4gICAgICovXG4gICAgY3JlYXRlRGVmYXVsdEh0dHBDbGllbnQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlRGVmYXVsdEh0dHBDbGllbnQgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgQ3J5cHRvUHJvdmlkZXIgd2hpY2ggdXNlcyB0aGUgTm9kZSBgY3J5cHRvYCBwYWNrYWdlIGZvciBpdHMgY29tcHV0YXRpb25zLlxuICAgICAqL1xuICAgIGNyZWF0ZU5vZGVDcnlwdG9Qcm92aWRlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVOb2RlQ3J5cHRvUHJvdmlkZXIgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgQ3J5cHRvUHJvdmlkZXIgd2hpY2ggdXNlcyB0aGUgU3VidGxlQ3J5cHRvIGludGVyZmFjZSBvZiB0aGUgV2ViIENyeXB0byBBUEkuXG4gICAgICovXG4gICAgY3JlYXRlU3VidGxlQ3J5cHRvUHJvdmlkZXIoc3VidGxlQ3J5cHRvKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3VidGxlQ3J5cHRvUHJvdmlkZXIoc3VidGxlQ3J5cHRvKTtcbiAgICB9XG4gICAgY3JlYXRlRGVmYXVsdENyeXB0b1Byb3ZpZGVyKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZURlZmF1bHRDcnlwdG9Qcm92aWRlciBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuIiwgIi8qKlxuICogQHByaXZhdGVcbiAqIChGb3IgaW50ZXJuYWwgdXNlIGluIHN0cmlwZS1ub2RlLilcbiAqIFdyYXBwZXIgYXJvdW5kIHRoZSBFdmVudCBXZWIgQVBJLlxuICovXG5jbGFzcyBfU3RyaXBlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKGV2ZW50TmFtZSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuLyoqIE1pbmltYWwgRXZlbnRFbWl0dGVyIHdyYXBwZXIgYXJvdW5kIEV2ZW50VGFyZ2V0LiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJNYXBwaW5nID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyV3JhcHBlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdGVuZXJNYXBwaW5nLnNldChsaXN0ZW5lciwgbGlzdGVuZXJXcmFwcGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyV3JhcHBlcik7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJXcmFwcGVyID0gdGhpcy5saXN0ZW5lck1hcHBpbmcuZ2V0KGxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lck1hcHBpbmcuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyV3JhcHBlcik7XG4gICAgfVxuICAgIG9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcldyYXBwZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LmRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxpc3RlbmVyTWFwcGluZy5zZXQobGlzdGVuZXIsIGxpc3RlbmVyV3JhcHBlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcldyYXBwZXIsIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBfU3RyaXBlRXZlbnQoZXZlbnROYW1lLCBkYXRhKSk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBsYXRmb3JtRnVuY3Rpb25zIH0gZnJvbSAnLi9QbGF0Zm9ybUZ1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBTdHJpcGVFbWl0dGVyIH0gZnJvbSAnLi4vU3RyaXBlRW1pdHRlci5qcyc7XG4vKipcbiAqIFNwZWNpYWxpemVzIFdlYlBsYXRmb3JtRnVuY3Rpb25zIHVzaW5nIEFQSXMgYXZhaWxhYmxlIGluIFdlYiB3b3JrZXJzLlxuICovXG5leHBvcnQgY2xhc3MgV2ViUGxhdGZvcm1GdW5jdGlvbnMgZXh0ZW5kcyBQbGF0Zm9ybUZ1bmN0aW9ucyB7XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGdldFVuYW1lKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY3JlYXRlRW1pdHRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVFbWl0dGVyKCk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICB0cnlCdWZmZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZmlsZS5kYXRhIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXBsb2FkaW5nIGEgZmlsZSBhcyBhIHN0cmVhbSBpcyBub3Qgc3VwcG9ydGVkIGluIG5vbi1Ob2RlIGVudmlyb25tZW50cy4gUGxlYXNlIG9wZW4gb3IgdXB2b3RlIGFuIGlzc3VlIGF0IGdpdGh1Yi5jb20vc3RyaXBlL3N0cmlwZS1ub2RlIGlmIHlvdSB1c2UgdGhpcywgZGV0YWlsaW5nIHlvdXIgdXNlLWNhc2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGNyZWF0ZU5vZGVIdHRwQ2xpZW50KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmlwZTogYGNyZWF0ZU5vZGVIdHRwQ2xpZW50KClgIGlzIG5vdCBhdmFpbGFibGUgaW4gbm9uLU5vZGUgZW52aXJvbm1lbnRzLiBQbGVhc2UgdXNlIGBjcmVhdGVGZXRjaEh0dHBDbGllbnQoKWAgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGNyZWF0ZURlZmF1bHRIdHRwQ2xpZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRmV0Y2hIdHRwQ2xpZW50KCk7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBjcmVhdGVOb2RlQ3J5cHRvUHJvdmlkZXIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyaXBlOiBgY3JlYXRlTm9kZUNyeXB0b1Byb3ZpZGVyKClgIGlzIG5vdCBhdmFpbGFibGUgaW4gbm9uLU5vZGUgZW52aXJvbm1lbnRzLiBQbGVhc2UgdXNlIGBjcmVhdGVTdWJ0bGVDcnlwdG9Qcm92aWRlcigpYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY3JlYXRlRGVmYXVsdENyeXB0b1Byb3ZpZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdWJ0bGVDcnlwdG9Qcm92aWRlcigpO1xuICAgIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXdhcm5pbmctY29tbWVudHMgKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVYxRXJyb3IgPSAocmF3U3RyaXBlRXJyb3IpID0+IHtcbiAgICBzd2l0Y2ggKHJhd1N0cmlwZUVycm9yLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2FyZF9lcnJvcic6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUNhcmRFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ2ludmFsaWRfcmVxdWVzdF9lcnJvcic6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUludmFsaWRSZXF1ZXN0RXJyb3IocmF3U3RyaXBlRXJyb3IpO1xuICAgICAgICBjYXNlICdhcGlfZXJyb3InOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVBUElFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ2F1dGhlbnRpY2F0aW9uX2Vycm9yJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlQXV0aGVudGljYXRpb25FcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ3JhdGVfbGltaXRfZXJyb3InOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVSYXRlTGltaXRFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ2lkZW1wb3RlbmN5X2Vycm9yJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaXBlSWRlbXBvdGVuY3lFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGNhc2UgJ2ludmFsaWRfZ3JhbnQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVJbnZhbGlkR3JhbnRFcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZVVua25vd25FcnJvcihyYXdTdHJpcGVFcnJvcik7XG4gICAgfVxufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVWMkVycm9yID0gKHJhd1N0cmlwZUVycm9yKSA9PiB7XG4gICAgc3dpdGNoIChyYXdTdHJpcGVFcnJvci50eXBlKSB7XG4gICAgICAgIC8vIHN3aXRjaENhc2VzOiBUaGUgYmVnaW5uaW5nIG9mIHRoZSBzZWN0aW9uIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbiAgICAgICAgY2FzZSAndGVtcG9yYXJ5X3Nlc3Npb25fZXhwaXJlZCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRlbXBvcmFyeVNlc3Npb25FeHBpcmVkRXJyb3IocmF3U3RyaXBlRXJyb3IpO1xuICAgICAgICAvLyBzd2l0Y2hDYXNlczogVGhlIGVuZCBvZiB0aGUgc2VjdGlvbiBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG4gICAgfVxuICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbWlzc2luZyByZXF1aXJlZCBmaWVsZHMgaW4gVjIgQVBJcy5cbiAgICAvLyBpbnZhbGlkX2ZpZWxkIHJlc3BvbnNlIGluIFYyIEFQSXMgcmV0dXJucyB0aGUgZmllbGQgJ2NvZGUnIGluc3RlYWQgb2YgJ3R5cGUnLlxuICAgIHN3aXRjaCAocmF3U3RyaXBlRXJyb3IuY29kZSkge1xuICAgICAgICBjYXNlICdpbnZhbGlkX2ZpZWxkcyc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUludmFsaWRSZXF1ZXN0RXJyb3IocmF3U3RyaXBlRXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVWMUVycm9yKHJhd1N0cmlwZUVycm9yKTtcbn07XG4vKipcbiAqIFN0cmlwZUVycm9yIGlzIHRoZSBiYXNlIGVycm9yIGZyb20gd2hpY2ggYWxsIG90aGVyIG1vcmUgc3BlY2lmaWMgU3RyaXBlIGVycm9ycyBkZXJpdmUuXG4gKiBTcGVjaWZpY2FsbHkgZm9yIGVycm9ycyByZXR1cm5lZCBmcm9tIFN0cmlwZSdzIFJFU1QgQVBJLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30sIHR5cGUgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIocmF3Lm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMucmF3VHlwZSA9IHJhdy50eXBlO1xuICAgICAgICB0aGlzLmNvZGUgPSByYXcuY29kZTtcbiAgICAgICAgdGhpcy5kb2NfdXJsID0gcmF3LmRvY191cmw7XG4gICAgICAgIHRoaXMucGFyYW0gPSByYXcucGFyYW07XG4gICAgICAgIHRoaXMuZGV0YWlsID0gcmF3LmRldGFpbDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gcmF3LmhlYWRlcnM7XG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmF3LnJlcXVlc3RJZDtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gcmF3LnN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IChfYSA9IHJhdy5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgdGhpcy51c2VyTWVzc2FnZSA9IHJhdy51c2VyX21lc3NhZ2U7XG4gICAgICAgIHRoaXMuY2hhcmdlID0gcmF3LmNoYXJnZTtcbiAgICAgICAgdGhpcy5kZWNsaW5lX2NvZGUgPSByYXcuZGVjbGluZV9jb2RlO1xuICAgICAgICB0aGlzLnBheW1lbnRfaW50ZW50ID0gcmF3LnBheW1lbnRfaW50ZW50O1xuICAgICAgICB0aGlzLnBheW1lbnRfbWV0aG9kID0gcmF3LnBheW1lbnRfbWV0aG9kO1xuICAgICAgICB0aGlzLnBheW1lbnRfbWV0aG9kX3R5cGUgPSByYXcucGF5bWVudF9tZXRob2RfdHlwZTtcbiAgICAgICAgdGhpcy5zZXR1cF9pbnRlbnQgPSByYXcuc2V0dXBfaW50ZW50O1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHJhdy5zb3VyY2U7XG4gICAgfVxufVxuLyoqXG4gKiBIZWxwZXIgZmFjdG9yeSB3aGljaCB0YWtlcyByYXcgc3RyaXBlIGVycm9ycyBhbmQgb3V0cHV0cyB3cmFwcGluZyBpbnN0YW5jZXNcbiAqL1xuU3RyaXBlRXJyb3IuZ2VuZXJhdGUgPSBnZW5lcmF0ZVYxRXJyb3I7XG4vLyBTcGVjaWZpYyBTdHJpcGUgRXJyb3IgdHlwZXM6XG4vKipcbiAqIENhcmRFcnJvciBpcyByYWlzZWQgd2hlbiBhIHVzZXIgZW50ZXJzIGEgY2FyZCB0aGF0IGNhbid0IGJlIGNoYXJnZWQgZm9yXG4gKiBzb21lIHJlYXNvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUNhcmRFcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVDYXJkRXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIEludmFsaWRSZXF1ZXN0RXJyb3IgaXMgcmFpc2VkIHdoZW4gYSByZXF1ZXN0IGlzIGluaXRpYXRlZCB3aXRoIGludmFsaWRcbiAqIHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVJbnZhbGlkUmVxdWVzdEVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUludmFsaWRSZXF1ZXN0RXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIEFQSUVycm9yIGlzIGEgZ2VuZXJpYyBlcnJvciB0aGF0IG1heSBiZSByYWlzZWQgaW4gY2FzZXMgd2hlcmUgbm9uZSBvZiB0aGVcbiAqIG90aGVyIG5hbWVkIGVycm9ycyBjb3ZlciB0aGUgcHJvYmxlbS4gSXQgY291bGQgYWxzbyBiZSByYWlzZWQgaW4gdGhlIGNhc2VcbiAqIHRoYXQgYSBuZXcgZXJyb3IgaGFzIGJlZW4gaW50cm9kdWNlZCBpbiB0aGUgQVBJLCBidXQgdGhpcyB2ZXJzaW9uIG9mIHRoZVxuICogTm9kZS5KUyBTREsgZG9lc24ndCBrbm93IGhvdyB0byBoYW5kbGUgaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVBUElFcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVBUElFcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogQXV0aGVudGljYXRpb25FcnJvciBpcyByYWlzZWQgd2hlbiBpbnZhbGlkIGNyZWRlbnRpYWxzIGFyZSB1c2VkIHRvIGNvbm5lY3RcbiAqIHRvIFN0cmlwZSdzIHNlcnZlcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVBdXRoZW50aWNhdGlvbkVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUF1dGhlbnRpY2F0aW9uRXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIFBlcm1pc3Npb25FcnJvciBpcyByYWlzZWQgaW4gY2FzZXMgd2hlcmUgYWNjZXNzIHdhcyBhdHRlbXB0ZWQgb24gYSByZXNvdXJjZVxuICogdGhhdCB3YXNuJ3QgYWxsb3dlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZVBlcm1pc3Npb25FcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXcgPSB7fSkge1xuICAgICAgICBzdXBlcihyYXcsICdTdHJpcGVQZXJtaXNzaW9uRXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIFJhdGVMaW1pdEVycm9yIGlzIHJhaXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBhY2NvdW50IGlzIHB1dHRpbmcgdG9vIG11Y2ggbG9hZFxuICogb24gU3RyaXBlJ3MgQVBJIHNlcnZlcnMgKHVzdWFsbHkgYnkgcGVyZm9ybWluZyB0b28gbWFueSByZXF1ZXN0cykuIFBsZWFzZVxuICogYmFjayBvZmYgb24gcmVxdWVzdCByYXRlLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlUmF0ZUxpbWl0RXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlUmF0ZUxpbWl0RXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIFN0cmlwZUNvbm5lY3Rpb25FcnJvciBpcyByYWlzZWQgaW4gdGhlIGV2ZW50IHRoYXQgdGhlIFNESyBjYW4ndCBjb25uZWN0IHRvXG4gKiBTdHJpcGUncyBzZXJ2ZXJzLiBUaGF0IGNhbiBiZSBmb3IgYSB2YXJpZXR5IG9mIGRpZmZlcmVudCByZWFzb25zIGZyb20gYVxuICogZG93bmVkIG5ldHdvcmsgdG8gYSBiYWQgVExTIGNlcnRpZmljYXRlLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlQ29ubmVjdGlvbkVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUNvbm5lY3Rpb25FcnJvcicpO1xuICAgIH1cbn1cbi8qKlxuICogU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IgaXMgcmFpc2VkIHdoZW4gdGhlIHNpZ25hdHVyZSB2ZXJpZmljYXRpb24gZm9yIGFcbiAqIHdlYmhvb2sgZmFpbHNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlciwgcGF5bG9hZCwgcmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3InKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxufVxuLyoqXG4gKiBJZGVtcG90ZW5jeUVycm9yIGlzIHJhaXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpZGVtcG90ZW5jeSBrZXkgd2FzIHVzZWRcbiAqIGltcHJvcGVybHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVJZGVtcG90ZW5jeUVycm9yIGV4dGVuZHMgU3RyaXBlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJhdyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhdywgJ1N0cmlwZUlkZW1wb3RlbmN5RXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIEludmFsaWRHcmFudEVycm9yIGlzIHJhaXNlZCB3aGVuIGEgc3BlY2lmaWVkIGNvZGUgZG9lc24ndCBleGlzdCwgaXNcbiAqIGV4cGlyZWQsIGhhcyBiZWVuIHVzZWQsIG9yIGRvZXNuJ3QgYmVsb25nIHRvIHlvdTsgYSByZWZyZXNoIHRva2VuIGRvZXNuJ3RcbiAqIGV4aXN0LCBvciBkb2Vzbid0IGJlbG9uZyB0byB5b3U7IG9yIGlmIGFuIEFQSSBrZXkncyBtb2RlIChsaXZlIG9yIHRlc3QpXG4gKiBkb2Vzbid0IG1hdGNoIHRoZSBtb2RlIG9mIGEgY29kZSBvciByZWZyZXNoIHRva2VuLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlSW52YWxpZEdyYW50RXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlSW52YWxpZEdyYW50RXJyb3InKTtcbiAgICB9XG59XG4vKipcbiAqIEFueSBvdGhlciBlcnJvciBmcm9tIFN0cmlwZSBub3Qgc3BlY2lmaWNhbGx5IGNhcHR1cmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVVbmtub3duRXJyb3IgZXh0ZW5kcyBTdHJpcGVFcnJvciB7XG4gICAgY29uc3RydWN0b3IocmF3ID0ge30pIHtcbiAgICAgICAgc3VwZXIocmF3LCAnU3RyaXBlVW5rbm93bkVycm9yJyk7XG4gICAgfVxufVxuLy8gY2xhc3NEZWZpbml0aW9uczogVGhlIGJlZ2lubmluZyBvZiB0aGUgc2VjdGlvbiBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5leHBvcnQgY2xhc3MgVGVtcG9yYXJ5U2Vzc2lvbkV4cGlyZWRFcnJvciBleHRlbmRzIFN0cmlwZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyYXdTdHJpcGVFcnJvciA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHJhd1N0cmlwZUVycm9yLCAnVGVtcG9yYXJ5U2Vzc2lvbkV4cGlyZWRFcnJvcicpO1xuICAgIH1cbn1cbi8vIGNsYXNzRGVmaW5pdGlvbnM6IFRoZSBlbmQgb2YgdGhlIHNlY3Rpb24gZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuIiwgImltcG9ydCB7IFN0cmlwZUFQSUVycm9yLCBTdHJpcGVBdXRoZW50aWNhdGlvbkVycm9yLCBTdHJpcGVDb25uZWN0aW9uRXJyb3IsIFN0cmlwZUVycm9yLCBTdHJpcGVQZXJtaXNzaW9uRXJyb3IsIFN0cmlwZVJhdGVMaW1pdEVycm9yLCBnZW5lcmF0ZVYxRXJyb3IsIGdlbmVyYXRlVjJFcnJvciwgfSBmcm9tICcuL0Vycm9yLmpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICcuL25ldC9IdHRwQ2xpZW50LmpzJztcbmltcG9ydCB7IGVtaXRXYXJuaW5nLCBqc29uU3RyaW5naWZ5UmVxdWVzdERhdGEsIG5vcm1hbGl6ZUhlYWRlcnMsIHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEsIHJlbW92ZU51bGxpc2gsIGdldEFQSU1vZGUsIGdldE9wdGlvbnNGcm9tQXJncywgZ2V0RGF0YUZyb21BcmdzLCBwYXJzZUh0dHBIZWFkZXJBc1N0cmluZywgcGFyc2VIdHRwSGVhZGVyQXNOdW1iZXIsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5jb25zdCBNQVhfUkVUUllfQUZURVJfV0FJVCA9IDYwO1xuZXhwb3J0IGNsYXNzIFJlcXVlc3RTZW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmlwZSwgbWF4QnVmZmVyZWRSZXF1ZXN0TWV0cmljKSB7XG4gICAgICAgIHRoaXMuX3N0cmlwZSA9IHN0cmlwZTtcbiAgICAgICAgdGhpcy5fbWF4QnVmZmVyZWRSZXF1ZXN0TWV0cmljID0gbWF4QnVmZmVyZWRSZXF1ZXN0TWV0cmljO1xuICAgIH1cbiAgICBfbm9ybWFsaXplU3RyaXBlQ29udGV4dChvcHRzQ29udGV4dCwgY2xpZW50Q29udGV4dCkge1xuICAgICAgICBpZiAob3B0c0NvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRzQ29udGV4dC50b1N0cmluZygpIHx8IG51bGw7IC8vIHJldHVybiBudWxsIGZvciBlbXB0eSBzdHJpbmdzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChjbGllbnRDb250ZXh0ID09PSBudWxsIHx8IGNsaWVudENvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWVudENvbnRleHQudG9TdHJpbmcoKSkgfHwgbnVsbDsgLy8gcmV0dXJuIG51bGwgZm9yIGVtcHR5IHN0cmluZ3NcbiAgICB9XG4gICAgX2FkZEhlYWRlcnNEaXJlY3RseVRvT2JqZWN0KG9iaiwgaGVhZGVycykge1xuICAgICAgICAvLyBGb3IgY29udmVuaWVuY2UsIG1ha2Ugc29tZSBoZWFkZXJzIGVhc2lseSBhY2Nlc3NpYmxlIG9uXG4gICAgICAgIC8vIGxhc3RSZXNwb25zZS5cbiAgICAgICAgLy8gTk9URTogU3RyaXBlIHJlc3BvbmRzIHdpdGggbG93ZXJjYXNlIGhlYWRlciBuYW1lcy9rZXlzLlxuICAgICAgICBvYmoucmVxdWVzdElkID0gaGVhZGVyc1sncmVxdWVzdC1pZCddO1xuICAgICAgICBvYmouc3RyaXBlQWNjb3VudCA9IG9iai5zdHJpcGVBY2NvdW50IHx8IGhlYWRlcnNbJ3N0cmlwZS1hY2NvdW50J107XG4gICAgICAgIG9iai5hcGlWZXJzaW9uID0gb2JqLmFwaVZlcnNpb24gfHwgaGVhZGVyc1snc3RyaXBlLXZlcnNpb24nXTtcbiAgICAgICAgb2JqLmlkZW1wb3RlbmN5S2V5ID0gb2JqLmlkZW1wb3RlbmN5S2V5IHx8IGhlYWRlcnNbJ2lkZW1wb3RlbmN5LWtleSddO1xuICAgIH1cbiAgICBfbWFrZVJlc3BvbnNlRXZlbnQocmVxdWVzdEV2ZW50LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdER1cmF0aW9uTXMgPSByZXF1ZXN0RW5kVGltZSAtIHJlcXVlc3RFdmVudC5yZXF1ZXN0X3N0YXJ0X3RpbWU7XG4gICAgICAgIHJldHVybiByZW1vdmVOdWxsaXNoKHtcbiAgICAgICAgICAgIGFwaV92ZXJzaW9uOiBoZWFkZXJzWydzdHJpcGUtdmVyc2lvbiddLFxuICAgICAgICAgICAgYWNjb3VudDogaGVhZGVyc1snc3RyaXBlLWFjY291bnQnXSxcbiAgICAgICAgICAgIGlkZW1wb3RlbmN5X2tleTogaGVhZGVyc1snaWRlbXBvdGVuY3kta2V5J10sXG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3RFdmVudC5tZXRob2QsXG4gICAgICAgICAgICBwYXRoOiByZXF1ZXN0RXZlbnQucGF0aCxcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzQ29kZSxcbiAgICAgICAgICAgIHJlcXVlc3RfaWQ6IHRoaXMuX2dldFJlcXVlc3RJZChoZWFkZXJzKSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IHJlcXVlc3REdXJhdGlvbk1zLFxuICAgICAgICAgICAgcmVxdWVzdF9zdGFydF90aW1lOiByZXF1ZXN0RXZlbnQucmVxdWVzdF9zdGFydF90aW1lLFxuICAgICAgICAgICAgcmVxdWVzdF9lbmRfdGltZTogcmVxdWVzdEVuZFRpbWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0UmVxdWVzdElkKGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnNbJ3JlcXVlc3QtaWQnXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXNlZCBieSBtZXRob2RzIHdpdGggc3BlYy5zdHJlYW1pbmcgPT09IHRydWUuIEZvciB0aGVzZSBtZXRob2RzLCB3ZSBkbyBub3RcbiAgICAgKiBidWZmZXIgc3VjY2Vzc2Z1bCByZXNwb25zZXMgaW50byBtZW1vcnkgb3IgZG8gcGFyc2UgdGhlbSBpbnRvIHN0cmlwZVxuICAgICAqIG9iamVjdHMsIHdlIGRlbGVnYXRlIHRoYXQgYWxsIG9mIHRoYXQgdG8gdGhlIHVzZXIgYW5kIHBhc3MgYmFjayB0aGUgcmF3XG4gICAgICogaHR0cC5SZXNwb25zZSBvYmplY3QgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogKFVuc3VjY2Vzc2Z1bCByZXNwb25zZXMgc2hvdWxkbid0IG1ha2UgaXQgaGVyZSwgdGhleSBzaG91bGRcbiAgICAgKiBzdGlsbCBiZSBidWZmZXJlZC9wYXJzZWQgYW5kIGhhbmRsZWQgYnkgX2pzb25SZXNwb25zZUhhbmRsZXIgLS0gc2VlXG4gICAgICogbWFrZVJlcXVlc3QpXG4gICAgICovXG4gICAgX3N0cmVhbWluZ1Jlc3BvbnNlSGFuZGxlcihyZXF1ZXN0RXZlbnQsIHVzYWdlLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlcy5nZXRIZWFkZXJzKCk7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW1Db21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRXZlbnQgPSB0aGlzLl9tYWtlUmVzcG9uc2VFdmVudChyZXF1ZXN0RXZlbnQsIHJlcy5nZXRTdGF0dXNDb2RlKCksIGhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmlwZS5fZW1pdHRlci5lbWl0KCdyZXNwb25zZScsIHJlc3BvbnNlRXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZFJlcXVlc3RNZXRyaWNzKHRoaXMuX2dldFJlcXVlc3RJZChoZWFkZXJzKSwgcmVzcG9uc2VFdmVudC5lbGFwc2VkLCB1c2FnZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVzLnRvU3RyZWFtKHN0cmVhbUNvbXBsZXRlQ2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgYXMgdGhlIHN0cmVhbSBpcyBhIHJhd1xuICAgICAgICAgICAgLy8gSFRUUCByZXNwb25zZSBpbiBOb2RlIGFuZCB0aGUgbGVnYWN5IGJlaGF2aW9yIHdhcyB0byBtdXRhdGUgdGhpc1xuICAgICAgICAgICAgLy8gcmVzcG9uc2UuXG4gICAgICAgICAgICB0aGlzLl9hZGRIZWFkZXJzRGlyZWN0bHlUb09iamVjdChzdHJlYW0sIGhlYWRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHN0cmVhbSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgaGFuZGxlciBmb3IgU3RyaXBlIHJlc3BvbnNlcy4gQnVmZmVycyB0aGUgcmVzcG9uc2UgaW50byBtZW1vcnksXG4gICAgICogcGFyc2VzIHRoZSBKU09OIGFuZCByZXR1cm5zIGl0IChpLmUuIHBhc3NlcyBpdCB0byB0aGUgY2FsbGJhY2spIGlmIHRoZXJlXG4gICAgICogaXMgbm8gXCJlcnJvclwiIGZpZWxkLiBPdGhlcndpc2UgY29uc3RydWN0cy9wYXNzZXMgYW4gYXBwcm9wcmlhdGUgRXJyb3IuXG4gICAgICovXG4gICAgX2pzb25SZXNwb25zZUhhbmRsZXIocmVxdWVzdEV2ZW50LCBhcGlNb2RlLCB1c2FnZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXMuZ2V0SGVhZGVycygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdElkID0gdGhpcy5fZ2V0UmVxdWVzdElkKGhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5nZXRTdGF0dXNDb2RlKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUV2ZW50ID0gdGhpcy5fbWFrZVJlc3BvbnNlRXZlbnQocmVxdWVzdEV2ZW50LCBzdGF0dXNDb2RlLCBoZWFkZXJzKTtcbiAgICAgICAgICAgIHRoaXMuX3N0cmlwZS5fZW1pdHRlci5lbWl0KCdyZXNwb25zZScsIHJlc3BvbnNlRXZlbnQpO1xuICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnRvSlNPTigpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGpzb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChqc29uUmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBPQXV0aCBlcnJvciByZXNwb25zZXMgaW50byBhIHN0YW5kYXJkIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHRoZSByZXN0IG9mIHRoZSBlcnJvciBsb2dpYyBjYW4gYmUgc2hhcmVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvblJlc3BvbnNlLmVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvblJlc3BvbnNlLmVycm9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGpzb25SZXNwb25zZS5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBqc29uUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGpzb25SZXNwb25zZS5lcnJvci5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgICAgICAgICAgICAganNvblJlc3BvbnNlLmVycm9yLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICAgICBqc29uUmVzcG9uc2UuZXJyb3IucmVxdWVzdElkID0gcmVxdWVzdElkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgU3RyaXBlQXV0aGVudGljYXRpb25FcnJvcihqc29uUmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IFN0cmlwZVBlcm1pc3Npb25FcnJvcihqc29uUmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQyOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IFN0cmlwZVJhdGVMaW1pdEVycm9yKGpzb25SZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXBpTW9kZSA9PT0gJ3YyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gZ2VuZXJhdGVWMkVycm9yKGpzb25SZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBnZW5lcmF0ZVYxRXJyb3IoanNvblJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTdHJpcGVBUElFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgZnJvbSB0aGUgU3RyaXBlIEFQSScsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkOiBoZWFkZXJzWydyZXF1ZXN0LWlkJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvcmRSZXF1ZXN0TWV0cmljcyhyZXF1ZXN0SWQsIHJlc3BvbnNlRXZlbnQuZWxhcHNlZCwgdXNhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEV4cG9zZSByYXcgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gcmVzLmdldFJhd1Jlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkSGVhZGVyc0RpcmVjdGx5VG9PYmplY3QocmF3UmVzcG9uc2UsIGhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShqc29uUmVzcG9uc2UsICdsYXN0UmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByYXdSZXNwb25zZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBqc29uUmVzcG9uc2UpO1xuICAgICAgICAgICAgfSwgKGUpID0+IGNhbGxiYWNrKGUsIG51bGwpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIF9nZW5lcmF0ZUNvbm5lY3Rpb25FcnJvck1lc3NhZ2UocmVxdWVzdFJldHJpZXMpIHtcbiAgICAgICAgcmV0dXJuIGBBbiBlcnJvciBvY2N1cnJlZCB3aXRoIG91ciBjb25uZWN0aW9uIHRvIFN0cmlwZS4ke3JlcXVlc3RSZXRyaWVzID4gMCA/IGAgUmVxdWVzdCB3YXMgcmV0cmllZCAke3JlcXVlc3RSZXRyaWVzfSB0aW1lcy5gIDogJyd9YDtcbiAgICB9XG4gICAgLy8gRm9yIG1vcmUgb24gd2hlbiBhbmQgaG93IHRvIHJldHJ5IEFQSSByZXF1ZXN0cywgc2VlIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2Vycm9yLWhhbmRsaW5nI3NhZmVseS1yZXRyeWluZy1yZXF1ZXN0cy13aXRoLWlkZW1wb3RlbmN5XG4gICAgc3RhdGljIF9zaG91bGRSZXRyeShyZXMsIG51bVJldHJpZXMsIG1heFJldHJpZXMsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciAmJlxuICAgICAgICAgICAgbnVtUmV0cmllcyA9PT0gMCAmJlxuICAgICAgICAgICAgSHR0cENsaWVudC5DT05ORUNUSU9OX0NMT1NFRF9FUlJPUl9DT0RFUy5pbmNsdWRlcyhlcnJvci5jb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gbm90IHJldHJ5IGlmIHdlIGFyZSBvdXQgb2YgcmV0cmllcy5cbiAgICAgICAgaWYgKG51bVJldHJpZXMgPj0gbWF4UmV0cmllcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHJ5IG9uIGNvbm5lY3Rpb24gZXJyb3IuXG4gICAgICAgIGlmICghcmVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgQVBJIG1heSBhc2sgdXMgbm90IHRvIHJldHJ5IChlLmcuLCBpZiBkb2luZyBzbyB3b3VsZCBiZSBhIG5vLW9wKVxuICAgICAgICAvLyBvciBhZHZpc2UgdXMgdG8gcmV0cnkgKGUuZy4sIGluIGNhc2VzIG9mIGxvY2sgdGltZW91dHMpOyB3ZSBkZWZlciB0byB0aGF0LlxuICAgICAgICBpZiAocmVzLmdldEhlYWRlcnMoKVsnc3RyaXBlLXNob3VsZC1yZXRyeSddID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy5nZXRIZWFkZXJzKClbJ3N0cmlwZS1zaG91bGQtcmV0cnknXSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXRyeSBvbiBjb25mbGljdCBlcnJvcnMuXG4gICAgICAgIGlmIChyZXMuZ2V0U3RhdHVzQ29kZSgpID09PSA0MDkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHJ5IG9uIDUwMCwgNTAzLCBhbmQgb3RoZXIgaW50ZXJuYWwgZXJyb3JzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZXhwZWN0IHRoZSBzdHJpcGUtc2hvdWxkLXJldHJ5IGhlYWRlciB0byBiZSBmYWxzZVxuICAgICAgICAvLyBpbiBtb3N0IGNhc2VzIHdoZW4gYSA1MDAgaXMgcmV0dXJuZWQsIHNpbmNlIG91ciBpZGVtcG90ZW5jeSBmcmFtZXdvcmtcbiAgICAgICAgLy8gd291bGQgdHlwaWNhbGx5IHJlcGxheSBpdCBhbnl3YXkuXG4gICAgICAgIGlmIChyZXMuZ2V0U3RhdHVzQ29kZSgpID49IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfZ2V0U2xlZXBUaW1lSW5NUyhudW1SZXRyaWVzLCByZXRyeUFmdGVyID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpbml0aWFsTmV0d29ya1JldHJ5RGVsYXkgPSB0aGlzLl9zdHJpcGUuZ2V0SW5pdGlhbE5ldHdvcmtSZXRyeURlbGF5KCk7XG4gICAgICAgIGNvbnN0IG1heE5ldHdvcmtSZXRyeURlbGF5ID0gdGhpcy5fc3RyaXBlLmdldE1heE5ldHdvcmtSZXRyeURlbGF5KCk7XG4gICAgICAgIC8vIEFwcGx5IGV4cG9uZW50aWFsIGJhY2tvZmYgd2l0aCBpbml0aWFsTmV0d29ya1JldHJ5RGVsYXkgb24gdGhlXG4gICAgICAgIC8vIG51bWJlciBvZiBudW1SZXRyaWVzIHNvIGZhciBhcyBpbnB1dHMuIERvIG5vdCBhbGxvdyB0aGUgbnVtYmVyIHRvIGV4Y2VlZFxuICAgICAgICAvLyBtYXhOZXR3b3JrUmV0cnlEZWxheS5cbiAgICAgICAgbGV0IHNsZWVwU2Vjb25kcyA9IE1hdGgubWluKGluaXRpYWxOZXR3b3JrUmV0cnlEZWxheSAqIE1hdGgucG93KDIsIG51bVJldHJpZXMgLSAxKSwgbWF4TmV0d29ya1JldHJ5RGVsYXkpO1xuICAgICAgICAvLyBBcHBseSBzb21lIGppdHRlciBieSByYW5kb21pemluZyB0aGUgdmFsdWUgaW4gdGhlIHJhbmdlIG9mXG4gICAgICAgIC8vIChzbGVlcFNlY29uZHMgLyAyKSB0byAoc2xlZXBTZWNvbmRzKS5cbiAgICAgICAgc2xlZXBTZWNvbmRzICo9IDAuNSAqICgxICsgTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIC8vIEJ1dCBuZXZlciBzbGVlcCBsZXNzIHRoYW4gdGhlIGJhc2Ugc2xlZXAgc2Vjb25kcy5cbiAgICAgICAgc2xlZXBTZWNvbmRzID0gTWF0aC5tYXgoaW5pdGlhbE5ldHdvcmtSZXRyeURlbGF5LCBzbGVlcFNlY29uZHMpO1xuICAgICAgICAvLyBBbmQgbmV2ZXIgc2xlZXAgbGVzcyB0aGFuIHRoZSB0aW1lIHRoZSBBUEkgYXNrcyB1cyB0byB3YWl0LCBhc3N1bWluZyBpdCdzIGEgcmVhc29uYWJsZSBhc2suXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJldHJ5QWZ0ZXIpICYmIHJldHJ5QWZ0ZXIgPD0gTUFYX1JFVFJZX0FGVEVSX1dBSVQpIHtcbiAgICAgICAgICAgIHNsZWVwU2Vjb25kcyA9IE1hdGgubWF4KHNsZWVwU2Vjb25kcywgcmV0cnlBZnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNsZWVwU2Vjb25kcyAqIDEwMDA7XG4gICAgfVxuICAgIC8vIE1heCByZXRyaWVzIGNhbiBiZSBzZXQgb24gYSBwZXIgcmVxdWVzdCBiYXNpcy4gRmF2b3IgdGhvc2Ugb3ZlciB0aGUgZ2xvYmFsIHNldHRpbmdcbiAgICBfZ2V0TWF4TmV0d29ya1JldHJpZXMoc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MubWF4TmV0d29ya1JldHJpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihzZXR0aW5ncy5tYXhOZXR3b3JrUmV0cmllcylcbiAgICAgICAgICAgID8gc2V0dGluZ3MubWF4TmV0d29ya1JldHJpZXNcbiAgICAgICAgICAgIDogdGhpcy5fc3RyaXBlLmdldE1heE5ldHdvcmtSZXRyaWVzKCk7XG4gICAgfVxuICAgIF9kZWZhdWx0SWRlbXBvdGVuY3lLZXkobWV0aG9kLCBzZXR0aW5ncywgYXBpTW9kZSkge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgUE9TVCBhbmQgd2UgYWxsb3cgbXVsdGlwbGUgcmV0cmllcywgZW5zdXJlIGFuIGlkZW1wb3RlbmN5IGtleS5cbiAgICAgICAgY29uc3QgbWF4UmV0cmllcyA9IHRoaXMuX2dldE1heE5ldHdvcmtSZXRyaWVzKHNldHRpbmdzKTtcbiAgICAgICAgY29uc3QgZ2VuS2V5ID0gKCkgPT4gYHN0cmlwZS1ub2RlLXJldHJ5LSR7dGhpcy5fc3RyaXBlLl9wbGF0Zm9ybUZ1bmN0aW9ucy51dWlkNCgpfWA7XG4gICAgICAgIC8vIG1vcmUgdmVyYm9zZSB0aGFuIGl0IG5lZWRzIHRvIGJlLCBidXQgZ2l2ZXMgY2xlYXIgc2VwYXJhdGlvbiBiZXR3ZWVuIFYxIGFuZCBWMiBiZWhhdmlvclxuICAgICAgICBpZiAoYXBpTW9kZSA9PT0gJ3YyJykge1xuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2VuS2V5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXBpTW9kZSA9PT0gJ3YxJykge1xuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIG1heFJldHJpZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdlbktleSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBfbWFrZUhlYWRlcnMoeyBjb250ZW50VHlwZSwgY29udGVudExlbmd0aCwgYXBpVmVyc2lvbiwgY2xpZW50VXNlckFnZW50LCBtZXRob2QsIHVzZXJTdXBwbGllZEhlYWRlcnMsIHVzZXJTdXBwbGllZFNldHRpbmdzLCBzdHJpcGVBY2NvdW50LCBzdHJpcGVDb250ZXh0LCBhcGlNb2RlLCB9KSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRIZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUsXG4gICAgICAgICAgICAnVXNlci1BZ2VudCc6IHRoaXMuX2dldFVzZXJBZ2VudFN0cmluZyhhcGlNb2RlKSxcbiAgICAgICAgICAgICdYLVN0cmlwZS1DbGllbnQtVXNlci1BZ2VudCc6IGNsaWVudFVzZXJBZ2VudCxcbiAgICAgICAgICAgICdYLVN0cmlwZS1DbGllbnQtVGVsZW1ldHJ5JzogdGhpcy5fZ2V0VGVsZW1ldHJ5SGVhZGVyKCksXG4gICAgICAgICAgICAnU3RyaXBlLVZlcnNpb24nOiBhcGlWZXJzaW9uLFxuICAgICAgICAgICAgJ1N0cmlwZS1BY2NvdW50Jzogc3RyaXBlQWNjb3VudCxcbiAgICAgICAgICAgICdTdHJpcGUtQ29udGV4dCc6IHN0cmlwZUNvbnRleHQsXG4gICAgICAgICAgICAnSWRlbXBvdGVuY3ktS2V5JzogdGhpcy5fZGVmYXVsdElkZW1wb3RlbmN5S2V5KG1ldGhvZCwgdXNlclN1cHBsaWVkU2V0dGluZ3MsIGFwaU1vZGUpLFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcyBwZXIgaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4zLjI6XG4gICAgICAgIC8vICAgQSB1c2VyIGFnZW50IFNIT1VMRCBzZW5kIGEgQ29udGVudC1MZW5ndGggaW4gYSByZXF1ZXN0IG1lc3NhZ2Ugd2hlblxuICAgICAgICAvLyAgIG5vIFRyYW5zZmVyLUVuY29kaW5nIGlzIHNlbnQgYW5kIHRoZSByZXF1ZXN0IG1ldGhvZCBkZWZpbmVzIGEgbWVhbmluZ1xuICAgICAgICAvLyAgIGZvciBhbiBlbmNsb3NlZCBwYXlsb2FkIGJvZHkuICBGb3IgZXhhbXBsZSwgYSBDb250ZW50LUxlbmd0aCBoZWFkZXJcbiAgICAgICAgLy8gICBmaWVsZCBpcyBub3JtYWxseSBzZW50IGluIGEgUE9TVCByZXF1ZXN0IGV2ZW4gd2hlbiB0aGUgdmFsdWUgaXMgMFxuICAgICAgICAvLyAgIChpbmRpY2F0aW5nIGFuIGVtcHR5IHBheWxvYWQgYm9keSkuICBBIHVzZXIgYWdlbnQgU0hPVUxEIE5PVCBzZW5kIGFcbiAgICAgICAgLy8gICBDb250ZW50LUxlbmd0aCBoZWFkZXIgZmllbGQgd2hlbiB0aGUgcmVxdWVzdCBtZXNzYWdlIGRvZXMgbm90IGNvbnRhaW5cbiAgICAgICAgLy8gICBhIHBheWxvYWQgYm9keSBhbmQgdGhlIG1ldGhvZCBzZW1hbnRpY3MgZG8gbm90IGFudGljaXBhdGUgc3VjaCBhXG4gICAgICAgIC8vICAgYm9keS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlc2UgbWV0aG9kIHR5cGVzIGFyZSBleHBlY3RlZCB0byBoYXZlIGJvZGllcyBhbmQgc28gd2Ugc2hvdWxkIGFsd2F5c1xuICAgICAgICAvLyBpbmNsdWRlIGEgQ29udGVudC1MZW5ndGguXG4gICAgICAgIGNvbnN0IG1ldGhvZEhhc1BheWxvYWQgPSBtZXRob2QgPT0gJ1BPU1QnIHx8IG1ldGhvZCA9PSAnUFVUJyB8fCBtZXRob2QgPT0gJ1BBVENIJztcbiAgICAgICAgLy8gSWYgYSBjb250ZW50IGxlbmd0aCB3YXMgc3BlY2lmaWVkLCB3ZSBhbHdheXMgaW5jbHVkZSBpdCByZWdhcmRsZXNzIG9mXG4gICAgICAgIC8vIHdoZXRoZXIgdGhlIG1ldGhvZCBzZW1hbnRpY3MgYW50aWNpcGF0ZSBzdWNoIGEgYm9keS4gVGhpcyBrZWVwcyB1c1xuICAgICAgICAvLyBjb25zaXN0ZW50IHdpdGggaGlzdG9yaWNhbCBiZWhhdmlvci4gV2UgZG8gaG93ZXZlciB3YW50IHRvIHdhcm4gb24gdGhpc1xuICAgICAgICAvLyBhbmQgZml4IHRoZXNlIGNhc2VzIGFzIHRoZXkgYXJlIHNlbWFudGljYWxseSBpbmNvcnJlY3QuXG4gICAgICAgIGlmIChtZXRob2RIYXNQYXlsb2FkIHx8IGNvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghbWV0aG9kSGFzUGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIGVtaXRXYXJuaW5nKGAke21ldGhvZH0gbWV0aG9kIGhhZCBub24temVybyBjb250ZW50TGVuZ3RoIGJ1dCBubyBwYXlsb2FkIGlzIGV4cGVjdGVkIGZvciB0aGlzIHZlcmJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRIZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gY29udGVudExlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihyZW1vdmVOdWxsaXNoKGRlZmF1bHRIZWFkZXJzKSwgXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHN1cHBsaWVkLCBzYXkgJ2lkZW1wb3RlbmN5LWtleScsIG92ZXJyaWRlIGluc3RlYWQgb2YgYXBwZW5kaW5nIGJ5IGVuc3VyaW5nIGNhcHMgYXJlIHRoZSBzYW1lLlxuICAgICAgICBub3JtYWxpemVIZWFkZXJzKHVzZXJTdXBwbGllZEhlYWRlcnMpKTtcbiAgICB9XG4gICAgX2dldFVzZXJBZ2VudFN0cmluZyhhcGlNb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VWZXJzaW9uID0gdGhpcy5fc3RyaXBlLmdldENvbnN0YW50KCdQQUNLQUdFX1ZFUlNJT04nKTtcbiAgICAgICAgY29uc3QgYXBwSW5mbyA9IHRoaXMuX3N0cmlwZS5fYXBwSW5mb1xuICAgICAgICAgICAgPyB0aGlzLl9zdHJpcGUuZ2V0QXBwSW5mb0FzU3RyaW5nKClcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIHJldHVybiBgU3RyaXBlLyR7YXBpTW9kZX0gTm9kZUJpbmRpbmdzLyR7cGFja2FnZVZlcnNpb259ICR7YXBwSW5mb31gLnRyaW0oKTtcbiAgICB9XG4gICAgX2dldFRlbGVtZXRyeUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0cmlwZS5nZXRUZWxlbWV0cnlFbmFibGVkKCkgJiZcbiAgICAgICAgICAgIHRoaXMuX3N0cmlwZS5fcHJldlJlcXVlc3RNZXRyaWNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLl9zdHJpcGUuX3ByZXZSZXF1ZXN0TWV0cmljcy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYXN0X3JlcXVlc3RfbWV0cmljczogbWV0cmljcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9yZWNvcmRSZXF1ZXN0TWV0cmljcyhyZXF1ZXN0SWQsIHJlcXVlc3REdXJhdGlvbk1zLCB1c2FnZSkge1xuICAgICAgICBpZiAodGhpcy5fc3RyaXBlLmdldFRlbGVtZXRyeUVuYWJsZWQoKSAmJiByZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHJpcGUuX3ByZXZSZXF1ZXN0TWV0cmljcy5sZW5ndGggPiB0aGlzLl9tYXhCdWZmZXJlZFJlcXVlc3RNZXRyaWMpIHtcbiAgICAgICAgICAgICAgICBlbWl0V2FybmluZygnUmVxdWVzdCBtZXRyaWNzIGJ1ZmZlciBpcyBmdWxsLCBkcm9wcGluZyB0ZWxlbWV0cnkgbWVzc2FnZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9kdXJhdGlvbl9tczogcmVxdWVzdER1cmF0aW9uTXMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodXNhZ2UgJiYgdXNhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtLnVzYWdlID0gdXNhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmlwZS5fcHJldlJlcXVlc3RNZXRyaWNzLnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3Jhd1JlcXVlc3QobWV0aG9kLCBwYXRoLCBwYXJhbXMsIG9wdGlvbnMsIHVzYWdlKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdHM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RNZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdE1ldGhvZCAhPT0gJ1BPU1QnICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyAmJlxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jhd1JlcXVlc3Qgb25seSBzdXBwb3J0cyBwYXJhbXMgb24gUE9TVCByZXF1ZXN0cy4gUGxlYXNlIHBhc3MgbnVsbCBhbmQgYWRkIHlvdXIgcGFyYW1ldGVycyB0byBwYXRoLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChbcGFyYW1zLCBvcHRpb25zXSk7XG4gICAgICAgICAgICAgICAgLy8gUHVsbCByZXF1ZXN0IGRhdGEgYW5kIG9wdGlvbnMgKGhlYWRlcnMsIGF1dGgpIGZyb20gYXJncy5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhRnJvbUFyZ3MgPSBnZXREYXRhRnJvbUFyZ3MoYXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3RNZXRob2QgPT09ICdQT1NUJyA/IE9iamVjdC5hc3NpZ24oe30sIGRhdGFGcm9tQXJncykgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRPcHRpb25zID0gZ2V0T3B0aW9uc0Zyb21BcmdzKGFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBjYWxjdWxhdGVkT3B0aW9ucy5oZWFkZXJzO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aGVudGljYXRvciA9IGNhbGN1bGF0ZWRPcHRpb25zLmF1dGhlbnRpY2F0b3I7XG4gICAgICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHlEYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeURhdGE6IHt9LFxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdG9yLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBob3N0OiBjYWxjdWxhdGVkT3B0aW9ucy5ob3N0LFxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1pbmc6ICEhY2FsY3VsYXRlZE9wdGlvbnMuc3RyZWFtaW5nLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzZSB0aGlzIGZvciB0aGluIGV2ZW50IGludGVybmFscywgc28gd2Ugc2hvdWxkIHJlY29yZCB0aGUgbW9yZSBzcGVjaWZpYyBgdXNhZ2VgLCB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICB1c2FnZTogdXNhZ2UgfHwgWydyYXdfcmVxdWVzdCddLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVxdWVzdENhbGxiYWNrKGVyciwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBoZWFkZXJzLCBzZXR0aW5ncyB9ID0gb3B0cztcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdG9yID0gb3B0cy5hdXRoZW50aWNhdG9yO1xuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdChvcHRzLnJlcXVlc3RNZXRob2QsIG9wdHMuaG9zdCwgcGF0aCwgb3B0cy5ib2R5RGF0YSwgYXV0aGVudGljYXRvciwgeyBoZWFkZXJzLCBzZXR0aW5ncywgc3RyZWFtaW5nOiBvcHRzLnN0cmVhbWluZyB9LCBvcHRzLnVzYWdlLCByZXF1ZXN0Q2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RQcm9taXNlO1xuICAgIH1cbiAgICBfZ2V0Q29udGVudExlbmd0aChkYXRhKSB7XG4gICAgICAgIC8vIGlmIHdlIGNhbGN1bGF0ZSB0aGlzIHdyb25nLCB0aGUgc2VydmVyIHRyZWF0cyBpdCBhcyBpbnZhbGlkIGpzb25cbiAgICAgICAgLy8gb3IgaWYgY29udGVudCBsZW5ndGggaXMgdG9vIGJpZywgdGhlIHJlcXVlc3QgbmV2ZXIgZmluaXNoZXMgYW5kIGl0XG4gICAgICAgIC8vIHRpbWVzIG91dC5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZGF0YSkubGVuZ3RoXG4gICAgICAgICAgICA6IGRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICBfcmVxdWVzdChtZXRob2QsIGhvc3QsIHBhdGgsIGRhdGEsIGF1dGhlbnRpY2F0b3IsIG9wdGlvbnMsIHVzYWdlID0gW10sIGNhbGxiYWNrLCByZXF1ZXN0RGF0YVByb2Nlc3NvciA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcmVxdWVzdERhdGE7XG4gICAgICAgIGF1dGhlbnRpY2F0b3IgPSAoX2EgPSBhdXRoZW50aWNhdG9yICE9PSBudWxsICYmIGF1dGhlbnRpY2F0b3IgIT09IHZvaWQgMCA/IGF1dGhlbnRpY2F0b3IgOiB0aGlzLl9zdHJpcGUuX2F1dGhlbnRpY2F0b3IpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGFwaU1vZGUgPSBnZXRBUElNb2RlKHBhdGgpO1xuICAgICAgICBjb25zdCByZXRyeVJlcXVlc3QgPSAocmVxdWVzdEZuLCBhcGlWZXJzaW9uLCBoZWFkZXJzLCByZXF1ZXN0UmV0cmllcywgcmV0cnlBZnRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVxdWVzdEZuLCB0aGlzLl9nZXRTbGVlcFRpbWVJbk1TKHJlcXVlc3RSZXRyaWVzLCByZXRyeUFmdGVyKSwgYXBpVmVyc2lvbiwgaGVhZGVycywgcmVxdWVzdFJldHJpZXMgKyAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSAoYXBpVmVyc2lvbiwgaGVhZGVycywgbnVtUmV0cmllcykgPT4ge1xuICAgICAgICAgICAgLy8gdGltZW91dCBjYW4gYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMuIEZhdm9yIHRoYXQgb3ZlciB0aGUgZ2xvYmFsIHNldHRpbmdcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnNldHRpbmdzICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zZXR0aW5ncy50aW1lb3V0ICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLnNldHRpbmdzLnRpbWVvdXQpICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zZXR0aW5ncy50aW1lb3V0ID49IDBcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuc2V0dGluZ3MudGltZW91dFxuICAgICAgICAgICAgICAgIDogdGhpcy5fc3RyaXBlLmdldEFwaUZpZWxkKCd0aW1lb3V0Jyk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIGhvc3Q6IGhvc3QgfHwgdGhpcy5fc3RyaXBlLmdldEFwaUZpZWxkKCdob3N0JyksXG4gICAgICAgICAgICAgICAgcG9ydDogdGhpcy5fc3RyaXBlLmdldEFwaUZpZWxkKCdwb3J0JyksXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCBoZWFkZXJzKSxcbiAgICAgICAgICAgICAgICBib2R5OiByZXF1ZXN0RGF0YSxcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogdGhpcy5fc3RyaXBlLmdldEFwaUZpZWxkKCdwcm90b2NvbCcpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0b3IocmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxID0gdGhpcy5fc3RyaXBlXG4gICAgICAgICAgICAgICAgICAgIC5nZXRBcGlGaWVsZCgnaHR0cENsaWVudCcpXG4gICAgICAgICAgICAgICAgICAgIC5tYWtlUmVxdWVzdChyZXF1ZXN0Lmhvc3QsIHJlcXVlc3QucG9ydCwgcmVxdWVzdC5wYXRoLCByZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC5oZWFkZXJzLCByZXF1ZXN0LmJvZHksIHJlcXVlc3QucHJvdG9jb2wsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RFdmVudCA9IHJlbW92ZU51bGxpc2goe1xuICAgICAgICAgICAgICAgICAgICBhcGlfdmVyc2lvbjogYXBpVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogcGFyc2VIdHRwSGVhZGVyQXNTdHJpbmcoaGVhZGVyc1snU3RyaXBlLUFjY291bnQnXSksXG4gICAgICAgICAgICAgICAgICAgIGlkZW1wb3RlbmN5X2tleTogcGFyc2VIdHRwSGVhZGVyQXNTdHJpbmcoaGVhZGVyc1snSWRlbXBvdGVuY3ktS2V5J10pLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Rfc3RhcnRfdGltZTogcmVxdWVzdFN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0UmV0cmllcyA9IG51bVJldHJpZXMgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhSZXRyaWVzID0gdGhpcy5fZ2V0TWF4TmV0d29ya1JldHJpZXMob3B0aW9ucy5zZXR0aW5ncyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9lbWl0dGVyLmVtaXQoJ3JlcXVlc3QnLCByZXF1ZXN0RXZlbnQpO1xuICAgICAgICAgICAgICAgIHJlcVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0U2VuZGVyLl9zaG91bGRSZXRyeShyZXMsIHJlcXVlc3RSZXRyaWVzLCBtYXhSZXRyaWVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHJ5UmVxdWVzdChtYWtlUmVxdWVzdCwgYXBpVmVyc2lvbiwgaGVhZGVycywgcmVxdWVzdFJldHJpZXMsIHBhcnNlSHR0cEhlYWRlckFzTnVtYmVyKHJlcy5nZXRIZWFkZXJzKClbJ3JldHJ5LWFmdGVyJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnN0cmVhbWluZyAmJiByZXMuZ2V0U3RhdHVzQ29kZSgpIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyZWFtaW5nUmVzcG9uc2VIYW5kbGVyKHJlcXVlc3RFdmVudCwgdXNhZ2UsIGNhbGxiYWNrKShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXNwb25zZUhhbmRsZXIocmVxdWVzdEV2ZW50LCBhcGlNb2RlLCB1c2FnZSwgY2FsbGJhY2spKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0U2VuZGVyLl9zaG91bGRSZXRyeShudWxsLCByZXF1ZXN0UmV0cmllcywgbWF4UmV0cmllcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0cnlSZXF1ZXN0KG1ha2VSZXF1ZXN0LCBhcGlWZXJzaW9uLCBoZWFkZXJzLCByZXF1ZXN0UmV0cmllcywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RpbWVvdXRFcnJvciA9IGVycm9yLmNvZGUgJiYgZXJyb3IuY29kZSA9PT0gSHR0cENsaWVudC5USU1FT1VUX0VSUk9SX0NPREU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFN0cmlwZUNvbm5lY3Rpb25FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogaXNUaW1lb3V0RXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgUmVxdWVzdCBhYm9ydGVkIGR1ZSB0byB0aW1lb3V0IGJlaW5nIHJlYWNoZWQgKCR7dGltZW91dH1tcylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogUmVxdWVzdFNlbmRlci5fZ2VuZXJhdGVDb25uZWN0aW9uRXJyb3JNZXNzYWdlKHJlcXVlc3RSZXRyaWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTdHJpcGVFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmFibGUgdG8gYXV0aGVudGljYXRlIHRoZSByZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHByZXBhcmVBbmRNYWtlUmVxdWVzdCA9IChlcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3REYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX3N0cmlwZS5nZXRDbGllbnRVc2VyQWdlbnQoKGNsaWVudFVzZXJBZ2VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwaVZlcnNpb24gPSB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ3ZlcnNpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5fbWFrZUhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogYXBpTW9kZSA9PSAndjInXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudExlbmd0aDogdGhpcy5fZ2V0Q29udGVudExlbmd0aChkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgYXBpVmVyc2lvbjogYXBpVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50VXNlckFnZW50LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyIGNhbGxlcnMgZXhwZWN0IG51bGwsIGJ1dCAuaGVhZGVycyBiZWluZyBvcHRpb25hbCBtZWFucyBpdCdzIHVuZGVmaW5lZCBpZiBub3Qgc3VwcGxpZWQuIFNvIHdlIG5vcm1hbGl6ZSB0byBudWxsLlxuICAgICAgICAgICAgICAgICAgICB1c2VyU3VwcGxpZWRIZWFkZXJzOiAoX2EgPSBvcHRpb25zLmhlYWRlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTdXBwbGllZFNldHRpbmdzOiAoX2IgPSBvcHRpb25zLnNldHRpbmdzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgc3RyaXBlQWNjb3VudDogKF9jID0gb3B0aW9ucy5zdHJpcGVBY2NvdW50KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB0aGlzLl9zdHJpcGUuZ2V0QXBpRmllbGQoJ3N0cmlwZUFjY291bnQnKSxcbiAgICAgICAgICAgICAgICAgICAgc3RyaXBlQ29udGV4dDogdGhpcy5fbm9ybWFsaXplU3RyaXBlQ29udGV4dChvcHRpb25zLnN0cmlwZUNvbnRleHQsIHRoaXMuX3N0cmlwZS5nZXRBcGlGaWVsZCgnc3RyaXBlQ29udGV4dCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYXBpTW9kZTogYXBpTW9kZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtYWtlUmVxdWVzdChhcGlWZXJzaW9uLCBoZWFkZXJzLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdERhdGFQcm9jZXNzb3IpIHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhUHJvY2Vzc29yKG1ldGhvZCwgZGF0YSwgb3B0aW9ucy5oZWFkZXJzLCBwcmVwYXJlQW5kTWFrZVJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0cmluZ2lmaWVkRGF0YTtcbiAgICAgICAgICAgIGlmIChhcGlNb2RlID09ICd2MicpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZmllZERhdGEgPSBkYXRhID8ganNvblN0cmluZ2lmeVJlcXVlc3REYXRhKGRhdGEpIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZmllZERhdGEgPSBxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhKGRhdGEgfHwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlcGFyZUFuZE1ha2VSZXF1ZXN0KG51bGwsIHN0cmluZ2lmaWVkRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgY2FsbGJhY2tpZnlQcm9taXNlV2l0aFRpbWVvdXQsIGdldERhdGFGcm9tQXJncywgZ2V0QVBJTW9kZSwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmNsYXNzIFYxSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGZpcnN0UGFnZVByb21pc2UsIHJlcXVlc3RBcmdzLCBzcGVjLCBzdHJpcGVSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5wYWdlUHJvbWlzZSA9IGZpcnN0UGFnZVByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZUNhY2hlID0geyBjdXJyZW50UHJvbWlzZTogbnVsbCB9O1xuICAgICAgICB0aGlzLnJlcXVlc3RBcmdzID0gcmVxdWVzdEFyZ3M7XG4gICAgICAgIHRoaXMuc3BlYyA9IHNwZWM7XG4gICAgICAgIHRoaXMuc3RyaXBlUmVzb3VyY2UgPSBzdHJpcGVSZXNvdXJjZTtcbiAgICB9XG4gICAgYXN5bmMgaXRlcmF0ZShwYWdlUmVzdWx0KSB7XG4gICAgICAgIGlmICghKHBhZ2VSZXN1bHQgJiZcbiAgICAgICAgICAgIHBhZ2VSZXN1bHQuZGF0YSAmJlxuICAgICAgICAgICAgdHlwZW9mIHBhZ2VSZXN1bHQuZGF0YS5sZW5ndGggPT09ICdudW1iZXInKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1VuZXhwZWN0ZWQ6IFN0cmlwZSBBUEkgcmVzcG9uc2UgZG9lcyBub3QgaGF2ZSBhIHdlbGwtZm9ybWVkIGBkYXRhYCBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXZlcnNlSXRlcmF0aW9uID0gaXNSZXZlcnNlSXRlcmF0aW9uKHRoaXMucmVxdWVzdEFyZ3MpO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHBhZ2VSZXN1bHQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHJldmVyc2VJdGVyYXRpb25cbiAgICAgICAgICAgICAgICA/IHBhZ2VSZXN1bHQuZGF0YS5sZW5ndGggLSAxIC0gdGhpcy5pbmRleFxuICAgICAgICAgICAgICAgIDogdGhpcy5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFnZVJlc3VsdC5kYXRhW2lkeF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYWdlUmVzdWx0Lmhhc19tb3JlKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBjb3VudGVyLCByZXF1ZXN0IG5leHQgcGFnZSwgYW5kIHJlY3Vyc2UuXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZVByb21pc2UgPSB0aGlzLmdldE5leHRQYWdlKHBhZ2VSZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgbmV4dFBhZ2VSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VQcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0ZShuZXh0UGFnZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgIH1cbiAgICAvKiogQGFic3RyYWN0ICovXG4gICAgZ2V0TmV4dFBhZ2UoX3BhZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGFzeW5jIF9uZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRlKGF3YWl0IHRoaXMucGFnZVByb21pc2UpO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSB1c2VyIGNhbGxzIGAubmV4dCgpYCBtdWx0aXBsZSB0aW1lcyBpbiBwYXJhbGxlbCxcbiAgICAgICAgICogcmV0dXJuIHRoZSBzYW1lIHJlc3VsdCB1bnRpbCBzb21ldGhpbmcgaGFzIHJlc29sdmVkXG4gICAgICAgICAqIHRvIHByZXZlbnQgcGFnZS10dXJuaW5nIHJhY2UgY29uZGl0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnByb21pc2VDYWNoZS5jdXJyZW50UHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZUNhY2hlLmN1cnJlbnRQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHRQcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX25leHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlLmN1cnJlbnRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMucHJvbWlzZUNhY2hlLmN1cnJlbnRQcm9taXNlID0gbmV4dFByb21pc2U7XG4gICAgICAgIHJldHVybiBuZXh0UHJvbWlzZTtcbiAgICB9XG59XG5jbGFzcyBWMUxpc3RJdGVyYXRvciBleHRlbmRzIFYxSXRlcmF0b3Ige1xuICAgIGdldE5leHRQYWdlKHBhZ2VSZXN1bHQpIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZUl0ZXJhdGlvbiA9IGlzUmV2ZXJzZUl0ZXJhdGlvbih0aGlzLnJlcXVlc3RBcmdzKTtcbiAgICAgICAgY29uc3QgbGFzdElkID0gZ2V0TGFzdElkKHBhZ2VSZXN1bHQsIHJldmVyc2VJdGVyYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVSZXNvdXJjZS5fbWFrZVJlcXVlc3QodGhpcy5yZXF1ZXN0QXJncywgdGhpcy5zcGVjLCB7XG4gICAgICAgICAgICBbcmV2ZXJzZUl0ZXJhdGlvbiA/ICdlbmRpbmdfYmVmb3JlJyA6ICdzdGFydGluZ19hZnRlciddOiBsYXN0SWQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFYxU2VhcmNoSXRlcmF0b3IgZXh0ZW5kcyBWMUl0ZXJhdG9yIHtcbiAgICBnZXROZXh0UGFnZShwYWdlUmVzdWx0KSB7XG4gICAgICAgIGlmICghcGFnZVJlc3VsdC5uZXh0X3BhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdVbmV4cGVjdGVkOiBTdHJpcGUgQVBJIHJlc3BvbnNlIGRvZXMgbm90IGhhdmUgYSB3ZWxsLWZvcm1lZCBgbmV4dF9wYWdlYCBmaWVsZCwgYnV0IGBoYXNfbW9yZWAgd2FzIHRydWUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaXBlUmVzb3VyY2UuX21ha2VSZXF1ZXN0KHRoaXMucmVxdWVzdEFyZ3MsIHRoaXMuc3BlYywge1xuICAgICAgICAgICAgcGFnZTogcGFnZVJlc3VsdC5uZXh0X3BhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFYyTGlzdEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihmaXJzdFBhZ2VQcm9taXNlLCByZXF1ZXN0QXJncywgc3BlYywgc3RyaXBlUmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5maXJzdFBhZ2VQcm9taXNlID0gZmlyc3RQYWdlUHJvbWlzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZUl0ZXJhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0UGFnZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdEFyZ3MgPSByZXF1ZXN0QXJncztcbiAgICAgICAgdGhpcy5zcGVjID0gc3BlYztcbiAgICAgICAgdGhpcy5zdHJpcGVSZXNvdXJjZSA9IHN0cmlwZVJlc291cmNlO1xuICAgIH1cbiAgICBhc3luYyBpbml0Rmlyc3RQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdFBhZ2VQcm9taXNlKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gYXdhaXQgdGhpcy5maXJzdFBhZ2VQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFBhZ2VQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VJdGVyYXRvciA9IHBhZ2UuZGF0YVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICB0aGlzLm5leHRQYWdlVXJsID0gcGFnZS5uZXh0X3BhZ2VfdXJsIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgdHVyblBhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5uZXh0UGFnZVVybClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLnNwZWMuZnVsbFBhdGggPSB0aGlzLm5leHRQYWdlVXJsO1xuICAgICAgICBjb25zdCBwYWdlID0gYXdhaXQgdGhpcy5zdHJpcGVSZXNvdXJjZS5fbWFrZVJlcXVlc3QoW10sIHRoaXMuc3BlYywge30pO1xuICAgICAgICB0aGlzLm5leHRQYWdlVXJsID0gcGFnZS5uZXh0X3BhZ2VfdXJsIHx8IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VJdGVyYXRvciA9IHBhZ2UuZGF0YVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlSXRlcmF0b3I7XG4gICAgfVxuICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdEZpcnN0UGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZUl0ZXJhdG9yKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmN1cnJlbnRQYWdlSXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuZG9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHJlc3VsdC52YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHRQYWdlSXRlcmF0b3IgPSBhd2FpdCB0aGlzLnR1cm5QYWdlKCk7XG4gICAgICAgIGlmICghbmV4dFBhZ2VJdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5leHRQYWdlSXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoIXJlc3VsdC5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiByZXN1bHQudmFsdWUgfTtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzID0gKHN0cmlwZVJlc291cmNlLCByZXF1ZXN0QXJncywgc3BlYywgZmlyc3RQYWdlUHJvbWlzZSkgPT4ge1xuICAgIGNvbnN0IGFwaU1vZGUgPSBnZXRBUElNb2RlKHNwZWMuZnVsbFBhdGggfHwgc3BlYy5wYXRoKTtcbiAgICBpZiAoYXBpTW9kZSAhPT0gJ3YyJyAmJiBzcGVjLm1ldGhvZFR5cGUgPT09ICdzZWFyY2gnKSB7XG4gICAgICAgIHJldHVybiBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzRnJvbUl0ZXJhdG9yKG5ldyBWMVNlYXJjaEl0ZXJhdG9yKGZpcnN0UGFnZVByb21pc2UsIHJlcXVlc3RBcmdzLCBzcGVjLCBzdHJpcGVSZXNvdXJjZSkpO1xuICAgIH1cbiAgICBpZiAoYXBpTW9kZSAhPT0gJ3YyJyAmJiBzcGVjLm1ldGhvZFR5cGUgPT09ICdsaXN0Jykge1xuICAgICAgICByZXR1cm4gbWFrZUF1dG9QYWdpbmF0aW9uTWV0aG9kc0Zyb21JdGVyYXRvcihuZXcgVjFMaXN0SXRlcmF0b3IoZmlyc3RQYWdlUHJvbWlzZSwgcmVxdWVzdEFyZ3MsIHNwZWMsIHN0cmlwZVJlc291cmNlKSk7XG4gICAgfVxuICAgIGlmIChhcGlNb2RlID09PSAndjInICYmIHNwZWMubWV0aG9kVHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgIHJldHVybiBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzRnJvbUl0ZXJhdG9yKG5ldyBWMkxpc3RJdGVyYXRvcihmaXJzdFBhZ2VQcm9taXNlLCByZXF1ZXN0QXJncywgc3BlYywgc3RyaXBlUmVzb3VyY2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgbWFrZUF1dG9QYWdpbmF0aW9uTWV0aG9kc0Zyb21JdGVyYXRvciA9IChpdGVyYXRvcikgPT4ge1xuICAgIGNvbnN0IGF1dG9QYWdpbmdFYWNoID0gbWFrZUF1dG9QYWdpbmdFYWNoKCguLi5hcmdzKSA9PiBpdGVyYXRvci5uZXh0KC4uLmFyZ3MpKTtcbiAgICBjb25zdCBhdXRvUGFnaW5nVG9BcnJheSA9IG1ha2VBdXRvUGFnaW5nVG9BcnJheShhdXRvUGFnaW5nRWFjaCk7XG4gICAgY29uc3QgYXV0b1BhZ2luYXRpb25NZXRob2RzID0ge1xuICAgICAgICBhdXRvUGFnaW5nRWFjaCxcbiAgICAgICAgYXV0b1BhZ2luZ1RvQXJyYXksXG4gICAgICAgIC8vIEFzeW5jIGl0ZXJhdG9yIGZ1bmN0aW9uczpcbiAgICAgICAgbmV4dDogKCkgPT4gaXRlcmF0b3IubmV4dCgpLFxuICAgICAgICByZXR1cm46ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIGBicmVha2AuXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIFtnZXRBc3luY0l0ZXJhdG9yU3ltYm9sKCldOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b1BhZ2luYXRpb25NZXRob2RzO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGF1dG9QYWdpbmF0aW9uTWV0aG9kcztcbn07XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgSGVscGVyczpcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuZnVuY3Rpb24gZ2V0QXN5bmNJdGVyYXRvclN5bWJvbCgpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIFN5bWJvbC5hc3luY0l0ZXJhdG9yO1xuICAgIH1cbiAgICAvLyBGb2xsb3cgdGhlIGNvbnZlbnRpb24gZnJvbSBsaWJyYXJpZXMgbGlrZSBpdGVyYWxsOiBodHRwczovL2dpdGh1Yi5jb20vbGVlYnlyb24vaXRlcmFsbCNhc3luY2l0ZXJhdG9yLTFcbiAgICByZXR1cm4gJ0BAYXN5bmNJdGVyYXRvcic7XG59XG5mdW5jdGlvbiBnZXREb25lQ2FsbGJhY2soYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG9uRG9uZSA9IGFyZ3NbMV07XG4gICAgaWYgKHR5cGVvZiBvbkRvbmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFRoZSBzZWNvbmQgYXJndW1lbnQgdG8gYXV0b1BhZ2luZ0VhY2gsIGlmIHByZXNlbnQsIG11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvbjsgcmVjZWl2ZWQgJHt0eXBlb2Ygb25Eb25lfWApO1xuICAgIH1cbiAgICByZXR1cm4gb25Eb25lO1xufVxuLyoqXG4gKiBXZSBhbGxvdyBmb3VyIGZvcm1zIG9mIHRoZSBgb25JdGVtYCBjYWxsYmFjayAodGhlIG1pZGRsZSB0d28gYmVpbmcgZXF1aXZhbGVudCksXG4gKlxuICogICAxLiBgLmF1dG9QYWdpbmdFYWNoKChpdGVtKSA9PiB7IGRvU29tZXRoaW5nKGl0ZW0pOyByZXR1cm4gZmFsc2U7IH0pO2BcbiAqICAgMi4gYC5hdXRvUGFnaW5nRWFjaChhc3luYyAoaXRlbSkgPT4geyBhd2FpdCBkb1NvbWV0aGluZyhpdGVtKTsgcmV0dXJuIGZhbHNlOyB9KTtgXG4gKiAgIDMuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0pID0+IGRvU29tZXRoaW5nKGl0ZW0pLnRoZW4oKCkgPT4gZmFsc2UpKTtgXG4gKiAgIDQuIGAuYXV0b1BhZ2luZ0VhY2goKGl0ZW0sIG5leHQpID0+IHsgZG9Tb21ldGhpbmcoaXRlbSk7IG5leHQoZmFsc2UpOyB9KTtgXG4gKlxuICogSW4gYWRkaXRpb24gdG8gc3RhbmRhcmQgdmFsaWRhdGlvbiwgdGhpcyBoZWxwZXJcbiAqIGNvYWxlc2NlcyB0aGUgZm9ybWVyIGZvcm1zIGludG8gdGhlIGxhdHRlciBmb3JtLlxuICovXG5mdW5jdGlvbiBnZXRJdGVtQ2FsbGJhY2soYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBvbkl0ZW0gPSBhcmdzWzBdO1xuICAgIGlmICh0eXBlb2Ygb25JdGVtICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgdG8gYXV0b1BhZ2luZ0VhY2gsIGlmIHByZXNlbnQsIG11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvbjsgcmVjZWl2ZWQgJHt0eXBlb2Ygb25JdGVtfWApO1xuICAgIH1cbiAgICAvLyA0LiBgLmF1dG9QYWdpbmdFYWNoKChpdGVtLCBuZXh0KSA9PiB7IGRvU29tZXRoaW5nKGl0ZW0pOyBuZXh0KGZhbHNlKTsgfSk7YFxuICAgIGlmIChvbkl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHJldHVybiBvbkl0ZW07XG4gICAgfVxuICAgIGlmIChvbkl0ZW0ubGVuZ3RoID4gMikge1xuICAgICAgICB0aHJvdyBFcnJvcihgVGhlIFxcYG9uSXRlbVxcYCBjYWxsYmFjayBmdW5jdGlvbiBwYXNzZWQgdG8gYXV0b1BhZ2luZ0VhY2ggbXVzdCBhY2NlcHQgYXQgbW9zdCB0d28gYXJndW1lbnRzOyBnb3QgJHtvbkl0ZW19YCk7XG4gICAgfVxuICAgIC8vIFRoaXMgbWFnaWNhbGx5IGhhbmRsZXMgYWxsIHRocmVlIG9mIHRoZXNlIHVzZWNhc2VzICh0aGUgbGF0dGVyIHR3byBiZWluZyBmdW5jdGlvbmFsbHkgaWRlbnRpY2FsKTpcbiAgICAvLyAxLiBgLmF1dG9QYWdpbmdFYWNoKChpdGVtKSA9PiB7IGRvU29tZXRoaW5nKGl0ZW0pOyByZXR1cm4gZmFsc2U7IH0pO2BcbiAgICAvLyAyLiBgLmF1dG9QYWdpbmdFYWNoKGFzeW5jIChpdGVtKSA9PiB7IGF3YWl0IGRvU29tZXRoaW5nKGl0ZW0pOyByZXR1cm4gZmFsc2U7IH0pO2BcbiAgICAvLyAzLiBgLmF1dG9QYWdpbmdFYWNoKChpdGVtKSA9PiBkb1NvbWV0aGluZyhpdGVtKS50aGVuKCgpID0+IGZhbHNlKSk7YFxuICAgIHJldHVybiBmdW5jdGlvbiBfb25JdGVtKGl0ZW0sIG5leHQpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ29udGludWUgPSBvbkl0ZW0oaXRlbSk7XG4gICAgICAgIG5leHQoc2hvdWxkQ29udGludWUpO1xuICAgIH07XG59XG5mdW5jdGlvbiBnZXRMYXN0SWQobGlzdFJlc3VsdCwgcmV2ZXJzZUl0ZXJhdGlvbikge1xuICAgIGNvbnN0IGxhc3RJZHggPSByZXZlcnNlSXRlcmF0aW9uID8gMCA6IGxpc3RSZXN1bHQuZGF0YS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGxhc3RJdGVtID0gbGlzdFJlc3VsdC5kYXRhW2xhc3RJZHhdO1xuICAgIGNvbnN0IGxhc3RJZCA9IGxhc3RJdGVtICYmIGxhc3RJdGVtLmlkO1xuICAgIGlmICghbGFzdElkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdVbmV4cGVjdGVkOiBObyBgaWRgIGZvdW5kIG9uIHRoZSBsYXN0IGl0ZW0gd2hpbGUgYXV0by1wYWdpbmcgYSBsaXN0LicpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdElkO1xufVxuZnVuY3Rpb24gbWFrZUF1dG9QYWdpbmdFYWNoKGFzeW5jSXRlcmF0b3JOZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGF1dG9QYWdpbmdFYWNoKCAvKiBvbkl0ZW0/LCBvbkRvbmU/ICovKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG9uSXRlbSA9IGdldEl0ZW1DYWxsYmFjayhhcmdzKTtcbiAgICAgICAgY29uc3Qgb25Eb25lID0gZ2V0RG9uZUNhbGxiYWNrKGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgYXV0b1BhZ2luZ0VhY2ggdGFrZXMgdXAgdG8gdHdvIGFyZ3VtZW50czsgcmVjZWl2ZWQgJHthcmdzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dG9QYWdlUHJvbWlzZSA9IHdyYXBBc3luY0l0ZXJhdG9yV2l0aENhbGxiYWNrKGFzeW5jSXRlcmF0b3JOZXh0LCBcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB3ZSBtaWdodCBuZWVkIGEgbnVsbCBjaGVja1xuICAgICAgICBvbkl0ZW0pO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2tpZnlQcm9taXNlV2l0aFRpbWVvdXQoYXV0b1BhZ2VQcm9taXNlLCBvbkRvbmUpO1xuICAgIH07XG59XG5mdW5jdGlvbiBtYWtlQXV0b1BhZ2luZ1RvQXJyYXkoYXV0b1BhZ2luZ0VhY2gpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXV0b1BhZ2luZ1RvQXJyYXkob3B0cywgb25Eb25lKSB7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gb3B0cyAmJiBvcHRzLmxpbWl0O1xuICAgICAgICBpZiAoIWxpbWl0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignWW91IG11c3QgcGFzcyBhIGBsaW1pdGAgb3B0aW9uIHRvIGF1dG9QYWdpbmdUb0FycmF5LCBlLmcuLCBgYXV0b1BhZ2luZ1RvQXJyYXkoe2xpbWl0OiAxMDAwfSk7YC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGltaXQgPiAxMDAwMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1lvdSBjYW5ub3Qgc3BlY2lmeSBhIGxpbWl0IG9mIG1vcmUgdGhhbiAxMCwwMDAgaXRlbXMgdG8gZmV0Y2ggaW4gYGF1dG9QYWdpbmdUb0FycmF5YDsgdXNlIGBhdXRvUGFnaW5nRWFjaGAgdG8gaXRlcmF0ZSB0aHJvdWdoIGxvbmdlciBsaXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGF1dG9QYWdpbmdFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBjYWxsYmFja2lmeVByb21pc2VXaXRoVGltZW91dChwcm9taXNlLCBvbkRvbmUpO1xuICAgIH07XG59XG5mdW5jdGlvbiB3cmFwQXN5bmNJdGVyYXRvcldpdGhDYWxsYmFjayhhc3luY0l0ZXJhdG9yTmV4dCwgb25JdGVtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSXRlcmF0aW9uKGl0ZXJSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpdGVyUmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZXJSZXN1bHQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKG5leHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCaXQgY29uZnVzaW5nLCBwZXJoYXBzOyB3ZSBwYXNzIGEgYHJlc29sdmVgIGZuXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIHVzZXIsIHNvIHRoZXkgY2FuIGRlY2lkZSB3aGVuIGFuZCBpZiB0byBjb250aW51ZS5cbiAgICAgICAgICAgICAgICAvLyBUaGV5IGNhbiByZXR1cm4gZmFsc2UsIG9yIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byBmYWxzZSwgdG8gYnJlYWsuXG4gICAgICAgICAgICAgICAgb25JdGVtKGl0ZW0sIG5leHQpO1xuICAgICAgICAgICAgfSkudGhlbigoc2hvdWxkQ29udGludWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkQ29udGludWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVJdGVyYXRpb24oeyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jSXRlcmF0b3JOZXh0KCkudGhlbihoYW5kbGVJdGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jSXRlcmF0b3JOZXh0KClcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZUl0ZXJhdGlvbilcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNSZXZlcnNlSXRlcmF0aW9uKHJlcXVlc3RBcmdzKSB7XG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwocmVxdWVzdEFyZ3MpO1xuICAgIGNvbnN0IGRhdGFGcm9tQXJncyA9IGdldERhdGFGcm9tQXJncyhhcmdzKTtcbiAgICByZXR1cm4gISFkYXRhRnJvbUFyZ3MuZW5kaW5nX2JlZm9yZTtcbn1cbiIsICJpbXBvcnQgeyBjYWxsYmFja2lmeVByb21pc2VXaXRoVGltZW91dCwgZXh0cmFjdFVybFBhcmFtcyB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgbWFrZUF1dG9QYWdpbmF0aW9uTWV0aG9kcyB9IGZyb20gJy4vYXV0b1BhZ2luYXRpb24uanMnO1xuLyoqXG4gKiBDcmVhdGUgYW4gQVBJIG1ldGhvZCBmcm9tIHRoZSBkZWNsYXJlZCBzcGVjLlxuICpcbiAqIEBwYXJhbSBbc3BlYy5tZXRob2Q9J0dFVCddIFJlcXVlc3QgTWV0aG9kIChQT1NULCBHRVQsIERFTEVURSwgUFVUKVxuICogQHBhcmFtIFtzcGVjLnBhdGg9JyddIFBhdGggdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBCQVNFX1BBVEgsIGpvaW5lZCB3aXRoXG4gKiAgdGhlIGluc3RhbmNlJ3MgcGF0aCAoZS5nLiAnY2hhcmdlcycgb3IgJ2N1c3RvbWVycycpXG4gKiBAcGFyYW0gW3NwZWMuZnVsbFBhdGg9JyddIEZ1bGx5IHF1YWxpZmllZCBwYXRoIHRvIHRoZSBtZXRob2QgKGVnLiAvdjEvYS9iL2MpLlxuICogIElmIHRoaXMgaXMgc3BlY2lmaWVkLCBwYXRoIHNob3VsZCBub3QgYmUgc3BlY2lmaWVkLlxuICogQHBhcmFtIFtzcGVjLnVybFBhcmFtcz1bXV0gQXJyYXkgb2YgcmVxdWlyZWQgYXJndW1lbnRzIGluIHRoZSBvcmRlciB0aGF0IHRoZXlcbiAqICBtdXN0IGJlIHBhc3NlZCBieSB0aGUgY29uc3VtZXIgb2YgdGhlIEFQSS4gU3Vic2VxdWVudCBvcHRpb25hbCBhcmd1bWVudHMgYXJlXG4gKiAgb3B0aW9uYWxseSBwYXNzZWQgdGhyb3VnaCBhIGhhc2ggKE9iamVjdCkgYXMgdGhlIHBlbnVsdGltYXRlIGFyZ3VtZW50XG4gKiAgKHByZWNlZGluZyB0aGUgYWxzby1vcHRpb25hbCBjYWxsYmFjayBhcmd1bWVudFxuICogQHBhcmFtIFtzcGVjLmVuY29kZV0gRnVuY3Rpb24gZm9yIG11dGF0aW5nIGlucHV0IHBhcmFtZXRlcnMgdG8gYSBtZXRob2QuXG4gKiAgVXNlZnVsbHkgZm9yIGFwcGx5aW5nIHRyYW5zZm9ybXMgdG8gZGF0YSBvbiBhIHBlci1tZXRob2QgYmFzaXMuXG4gKiBAcGFyYW0gW3NwZWMuaG9zdF0gSG9zdG5hbWUgZm9yIHRoZSByZXF1ZXN0LlxuICpcbiAqIDwhLS0gUHVibGljIEFQSSBhY2Nlc3NpYmxlIHZpYSBTdHJpcGUuU3RyaXBlUmVzb3VyY2UubWV0aG9kIC0tPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBlTWV0aG9kKHNwZWMpIHtcbiAgICBpZiAoc3BlYy5wYXRoICE9PSB1bmRlZmluZWQgJiYgc3BlYy5mdWxsUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIHNwZWMgc3BlY2lmaWVkIGJvdGggYSAncGF0aCcgKCR7c3BlYy5wYXRofSkgYW5kIGEgJ2Z1bGxQYXRoJyAoJHtzcGVjLmZ1bGxQYXRofSkuYCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT0gJ2Z1bmN0aW9uJyAmJiBhcmdzLnBvcCgpO1xuICAgICAgICBzcGVjLnVybFBhcmFtcyA9IGV4dHJhY3RVcmxQYXJhbXMoc3BlYy5mdWxsUGF0aCB8fCB0aGlzLmNyZWF0ZVJlc291cmNlUGF0aFdpdGhTeW1ib2xzKHNwZWMucGF0aCB8fCAnJykpO1xuICAgICAgICBjb25zdCByZXF1ZXN0UHJvbWlzZSA9IGNhbGxiYWNraWZ5UHJvbWlzZVdpdGhUaW1lb3V0KHRoaXMuX21ha2VSZXF1ZXN0KGFyZ3MsIHNwZWMsIHt9KSwgY2FsbGJhY2spO1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3RQcm9taXNlLCBtYWtlQXV0b1BhZ2luYXRpb25NZXRob2RzKHRoaXMsIGFyZ3MsIHNwZWMsIHJlcXVlc3RQcm9taXNlKSk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0UHJvbWlzZTtcbiAgICB9O1xufVxuIiwgImltcG9ydCB7IGdldERhdGFGcm9tQXJncywgZ2V0T3B0aW9uc0Zyb21BcmdzLCBtYWtlVVJMSW50ZXJwb2xhdG9yLCBwcm90b0V4dGVuZCwgcXVlcnlTdHJpbmdpZnlSZXF1ZXN0RGF0YSwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IHN0cmlwZU1ldGhvZCB9IGZyb20gJy4vU3RyaXBlTWV0aG9kLmpzJztcbi8vIFByb3ZpZGUgZXh0ZW5zaW9uIG1lY2hhbmlzbSBmb3IgU3RyaXBlIFJlc291cmNlIFN1Yi1DbGFzc2VzXG5TdHJpcGVSZXNvdXJjZS5leHRlbmQgPSBwcm90b0V4dGVuZDtcbi8vIEV4cG9zZSBtZXRob2QtY3JlYXRvclxuU3RyaXBlUmVzb3VyY2UubWV0aG9kID0gc3RyaXBlTWV0aG9kO1xuU3RyaXBlUmVzb3VyY2UuTUFYX0JVRkZFUkVEX1JFUVVFU1RfTUVUUklDUyA9IDEwMDtcbi8qKlxuICogRW5jYXBzdWxhdGVzIHJlcXVlc3QgbG9naWMgZm9yIGEgU3RyaXBlIFJlc291cmNlXG4gKi9cbmZ1bmN0aW9uIFN0cmlwZVJlc291cmNlKHN0cmlwZSwgZGVwcmVjYXRlZFVybERhdGEpIHtcbiAgICB0aGlzLl9zdHJpcGUgPSBzdHJpcGU7XG4gICAgaWYgKGRlcHJlY2F0ZWRVcmxEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcG9ydCBmb3IgY3VycmllZCB1cmwgcGFyYW1zIHdhcyBkcm9wcGVkIGluIHN0cmlwZS1ub2RlIHY3LjAuMC4gSW5zdGVhZCwgcGFzcyB0d28gaWRzLicpO1xuICAgIH1cbiAgICB0aGlzLmJhc2VQYXRoID0gbWFrZVVSTEludGVycG9sYXRvcihcbiAgICAvLyBAdHMtaWdub3JlIGNoYW5naW5nIHR5cGUgb2YgYmFzZVBhdGhcbiAgICB0aGlzLmJhc2VQYXRoIHx8IHN0cmlwZS5nZXRBcGlGaWVsZCgnYmFzZVBhdGgnKSk7XG4gICAgLy8gQHRzLWlnbm9yZSBjaGFuZ2luZyB0eXBlIG9mIHBhdGhcbiAgICB0aGlzLnJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcbiAgICAvLyBAdHMtaWdub3JlIGNoYW5naW5nIHR5cGUgb2YgcGF0aFxuICAgIHRoaXMucGF0aCA9IG1ha2VVUkxJbnRlcnBvbGF0b3IodGhpcy5wYXRoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJndW1lbnRzKTtcbn1cblN0cmlwZVJlc291cmNlLnByb3RvdHlwZSA9IHtcbiAgICBfc3RyaXBlOiBudWxsLFxuICAgIC8vIEB0cy1pZ25vcmUgdGhlIHR5cGUgb2YgcGF0aCBjaGFuZ2VzIGluIGN0b3JcbiAgICBwYXRoOiAnJyxcbiAgICByZXNvdXJjZVBhdGg6ICcnLFxuICAgIC8vIE1ldGhvZHMgdGhhdCBkb24ndCB1c2UgdGhlIEFQSSdzIGRlZmF1bHQgJy92MScgcGF0aCBjYW4gb3ZlcnJpZGUgaXQgd2l0aCB0aGlzIHNldHRpbmcuXG4gICAgYmFzZVBhdGg6IG51bGwsXG4gICAgaW5pdGlhbGl6ZSgpIHsgfSxcbiAgICAvLyBGdW5jdGlvbiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBkYXRhIHByb2Nlc3Nvci4gVGhpcyBhbGxvd3MgZnVsbCBjb250cm9sXG4gICAgLy8gb3ZlciBob3cgYSBTdHJpcGVSZXNvdXJjZSdzIHJlcXVlc3QgZGF0YSB3aWxsIGdldCBjb252ZXJ0ZWQgaW50byBhbiBIVFRQXG4gICAgLy8gYm9keS4gVGhpcyBpcyB1c2VmdWwgZm9yIG5vbi1zdGFuZGFyZCBIVFRQIHJlcXVlc3RzLiBUaGUgZnVuY3Rpb24gc2hvdWxkXG4gICAgLy8gdGFrZSBtZXRob2QgbmFtZSwgZGF0YSwgYW5kIGhlYWRlcnMgYXMgYXJndW1lbnRzLlxuICAgIHJlcXVlc3REYXRhUHJvY2Vzc29yOiBudWxsLFxuICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIHZhbGlkYXRpb24gY2hlY2tzIGJlZm9yZSBzZW5kaW5nIHRoZSByZXF1ZXN0LCBlcnJvcnMgc2hvdWxkXG4gICAgLy8gYmUgdGhyb3duLCBhbmQgdGhleSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2svcHJvbWlzZS5cbiAgICB2YWxpZGF0ZVJlcXVlc3Q6IG51bGwsXG4gICAgY3JlYXRlRnVsbFBhdGgoY29tbWFuZFBhdGgsIHVybERhdGEpIHtcbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSBbdGhpcy5iYXNlUGF0aCh1cmxEYXRhKSwgdGhpcy5wYXRoKHVybERhdGEpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21tYW5kUGF0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRDb21tYW5kUGF0aCA9IGNvbW1hbmRQYXRoKHVybERhdGEpO1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBubyBhY3R1YWwgY29tbWFuZCBwYXRoLCB3ZSBqdXN0IG9taXQgaXQgdG8gYXZvaWQgYWRkaW5nIGFcbiAgICAgICAgICAgIC8vIHRyYWlsaW5nIHNsYXNoLiBUaGlzIGlzIGltcG9ydGFudCBmb3IgdG9wLWxldmVsIGxpc3RpbmcgcmVxdWVzdHMsIHdoaWNoXG4gICAgICAgICAgICAvLyBkbyBub3QgaGF2ZSBhIGNvbW1hbmQgcGF0aC5cbiAgICAgICAgICAgIGlmIChjb21wdXRlZENvbW1hbmRQYXRoKSB7XG4gICAgICAgICAgICAgICAgdXJsUGFydHMucHVzaChjb21wdXRlZENvbW1hbmRQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybFBhcnRzLnB1c2goY29tbWFuZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9qb2luVXJsUGFydHModXJsUGFydHMpO1xuICAgIH0sXG4gICAgLy8gQ3JlYXRlcyBhIHJlbGF0aXZlIHJlc291cmNlIHBhdGggd2l0aCBzeW1ib2xzIGxlZnQgaW4gKHVubGlrZVxuICAgIC8vIGNyZWF0ZUZ1bGxQYXRoIHdoaWNoIHRha2VzIHNvbWUgZGF0YSB0byByZXBsYWNlIHRoZW0gd2l0aCkuIEZvciBleGFtcGxlIGl0XG4gICAgLy8gbWlnaHQgcHJvZHVjZTogL2ludm9pY2VzL3tpZH1cbiAgICBjcmVhdGVSZXNvdXJjZVBhdGhXaXRoU3ltYm9scyhwYXRoV2l0aFN5bWJvbHMpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcGF0aCBiZXlvbmQgdGhlIHJlc291cmNlIHBhdGgsIHdlIHdhbnQgdG8gcHJvZHVjZSBqdXN0XG4gICAgICAgIC8vIC88cmVzb3VyY2UgcGF0aD4gcmF0aGVyIHRoYW4gLzxyZXNvdXJjZSBwYXRoPi8uXG4gICAgICAgIGlmIChwYXRoV2l0aFN5bWJvbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7dGhpcy5fam9pblVybFBhcnRzKFt0aGlzLnJlc291cmNlUGF0aCwgcGF0aFdpdGhTeW1ib2xzXSl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7dGhpcy5yZXNvdXJjZVBhdGh9YDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX2pvaW5VcmxQYXJ0cyhwYXJ0cykge1xuICAgICAgICAvLyBSZXBsYWNlIGFueSBhY2NpZGVudGFsbHkgZG91YmxlZCB1cCBzbGFzaGVzLiBUaGlzIHByZXZpb3VzbHkgdXNlZFxuICAgICAgICAvLyBwYXRoLmpvaW4sIHdoaWNoIHdvdWxkIGRvIHRoaXMgYXMgd2VsbC4gVW5mb3J0dW5hdGVseSB3ZSBuZWVkIHRvIGRvIHRoaXNcbiAgICAgICAgLy8gYXMgdGhlIGZ1bmN0aW9ucyBmb3IgY3JlYXRpbmcgcGF0aHMgYXJlIHRlY2huaWNhbGx5IHBhcnQgb2YgdGhlIHB1YmxpY1xuICAgICAgICAvLyBpbnRlcmZhY2UgYW5kIHNvIHdlIG5lZWQgdG8gcHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcvJykucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpO1xuICAgIH0sXG4gICAgX2dldFJlcXVlc3RPcHRzKHJlcXVlc3RBcmdzLCBzcGVjLCBvdmVycmlkZURhdGEpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBFeHRyYWN0IHNwZWMgdmFsdWVzIHdpdGggZGVmYXVsdHMuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXRob2QgPSAoc3BlYy5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVzYWdlID0gc3BlYy51c2FnZSB8fCBbXTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gc3BlYy51cmxQYXJhbXMgfHwgW107XG4gICAgICAgIGNvbnN0IGVuY29kZSA9IHNwZWMuZW5jb2RlIHx8ICgoZGF0YSkgPT4gZGF0YSk7XG4gICAgICAgIGNvbnN0IGlzVXNpbmdGdWxsUGF0aCA9ICEhc3BlYy5mdWxsUGF0aDtcbiAgICAgICAgY29uc3QgY29tbWFuZFBhdGggPSBtYWtlVVJMSW50ZXJwb2xhdG9yKGlzVXNpbmdGdWxsUGF0aCA/IHNwZWMuZnVsbFBhdGggOiBzcGVjLnBhdGggfHwgJycpO1xuICAgICAgICAvLyBXaGVuIHVzaW5nIGZ1bGxQYXRoLCB3ZSBpZ25vcmUgdGhlIHJlc291cmNlIHBhdGggYXMgaXQgc2hvdWxkIGFscmVhZHkgYmVcbiAgICAgICAgLy8gZnVsbHkgcXVhbGlmaWVkLlxuICAgICAgICBjb25zdCBwYXRoID0gaXNVc2luZ0Z1bGxQYXRoXG4gICAgICAgICAgICA/IHNwZWMuZnVsbFBhdGhcbiAgICAgICAgICAgIDogdGhpcy5jcmVhdGVSZXNvdXJjZVBhdGhXaXRoU3ltYm9scyhzcGVjLnBhdGgpO1xuICAgICAgICAvLyBEb24ndCBtdXRhdGUgYXJncyBleHRlcm5hbGx5LlxuICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChyZXF1ZXN0QXJncyk7XG4gICAgICAgIC8vIEdlbmVyYXRlIGFuZCB2YWxpZGF0ZSB1cmwgcGFyYW1zLlxuICAgICAgICBjb25zdCB1cmxEYXRhID0gdXJsUGFyYW1zLnJlZHVjZSgodXJsRGF0YSwgcGFyYW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3RyaXBlOiBBcmd1bWVudCBcIiR7cGFyYW19XCIgbXVzdCBiZSBhIHN0cmluZywgYnV0IGdvdDogJHthcmd9IChvbiBBUEkgcmVxdWVzdCB0byBcXGAke3JlcXVlc3RNZXRob2R9ICR7cGF0aH1cXGApYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxEYXRhW3BhcmFtXSA9IGFyZztcbiAgICAgICAgICAgIHJldHVybiB1cmxEYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIC8vIFB1bGwgcmVxdWVzdCBkYXRhIGFuZCBvcHRpb25zIChoZWFkZXJzLCBhdXRoKSBmcm9tIGFyZ3MuXG4gICAgICAgIGNvbnN0IGRhdGFGcm9tQXJncyA9IGdldERhdGFGcm9tQXJncyhhcmdzKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVuY29kZShPYmplY3QuYXNzaWduKHt9LCBkYXRhRnJvbUFyZ3MsIG92ZXJyaWRlRGF0YSkpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZ2V0T3B0aW9uc0Zyb21BcmdzKGFyZ3MpO1xuICAgICAgICBjb25zdCBob3N0ID0gb3B0aW9ucy5ob3N0IHx8IHNwZWMuaG9zdDtcbiAgICAgICAgY29uc3Qgc3RyZWFtaW5nID0gISFzcGVjLnN0cmVhbWluZyB8fCAhIW9wdGlvbnMuc3RyZWFtaW5nO1xuICAgICAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZXJlIGFyZSBubyBtb3JlIGFyZ3MuXG4gICAgICAgIGlmIChhcmdzLmZpbHRlcigoeCkgPT4geCAhPSBudWxsKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3RyaXBlOiBVbmtub3duIGFyZ3VtZW50cyAoJHthcmdzfSkuIERpZCB5b3UgbWVhbiB0byBwYXNzIGFuIG9wdGlvbnMgb2JqZWN0PyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0cmlwZS9zdHJpcGUtbm9kZS93aWtpL1Bhc3NpbmctT3B0aW9ucy4gKG9uIEFQSSByZXF1ZXN0IHRvICR7cmVxdWVzdE1ldGhvZH0gXFxgJHtwYXRofVxcYClgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHVzaW5nIGZ1bGwgcGF0aCwgd2UgY2FuIGp1c3QgaW52b2tlIHRoZSBVUkwgaW50ZXJwb2xhdG9yIGRpcmVjdGx5XG4gICAgICAgIC8vIGFzIHdlIGRvbid0IG5lZWQgdG8gdXNlIHRoZSByZXNvdXJjZSB0byBjcmVhdGUgYSBmdWxsIHBhdGguXG4gICAgICAgIGNvbnN0IHJlcXVlc3RQYXRoID0gaXNVc2luZ0Z1bGxQYXRoXG4gICAgICAgICAgICA/IGNvbW1hbmRQYXRoKHVybERhdGEpXG4gICAgICAgICAgICA6IHRoaXMuY3JlYXRlRnVsbFBhdGgoY29tbWFuZFBhdGgsIHVybERhdGEpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLmhlYWRlcnMsIHNwZWMuaGVhZGVycyk7XG4gICAgICAgIGlmIChzcGVjLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgc3BlYy52YWxpZGF0b3IoZGF0YSwgeyBoZWFkZXJzIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGFJblF1ZXJ5ID0gc3BlYy5tZXRob2QgPT09ICdHRVQnIHx8IHNwZWMubWV0aG9kID09PSAnREVMRVRFJztcbiAgICAgICAgY29uc3QgYm9keURhdGEgPSBkYXRhSW5RdWVyeSA/IG51bGwgOiBkYXRhO1xuICAgICAgICBjb25zdCBxdWVyeURhdGEgPSBkYXRhSW5RdWVyeSA/IGRhdGEgOiB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlcXVlc3RNZXRob2QsXG4gICAgICAgICAgICByZXF1ZXN0UGF0aCxcbiAgICAgICAgICAgIGJvZHlEYXRhLFxuICAgICAgICAgICAgcXVlcnlEYXRhLFxuICAgICAgICAgICAgYXV0aGVudGljYXRvcjogKF9hID0gb3B0aW9ucy5hdXRoZW50aWNhdG9yKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGhvc3Q6IGhvc3QgIT09IG51bGwgJiYgaG9zdCAhPT0gdm9pZCAwID8gaG9zdCA6IG51bGwsXG4gICAgICAgICAgICBzdHJlYW1pbmcsXG4gICAgICAgICAgICBzZXR0aW5nczogb3B0aW9ucy5zZXR0aW5ncyxcbiAgICAgICAgICAgIHVzYWdlLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX21ha2VSZXF1ZXN0KHJlcXVlc3RBcmdzLCBzcGVjLCBvdmVycmlkZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBvcHRzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcHRzID0gdGhpcy5fZ2V0UmVxdWVzdE9wdHMocmVxdWVzdEFyZ3MsIHNwZWMsIG92ZXJyaWRlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVxdWVzdENhbGxiYWNrKGVyciwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzcGVjLnRyYW5zZm9ybVJlc3BvbnNlRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzcGVjLnRyYW5zZm9ybVJlc3BvbnNlRGF0YShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVtcHR5UXVlcnkgPSBPYmplY3Qua2V5cyhvcHRzLnF1ZXJ5RGF0YSkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IFtcbiAgICAgICAgICAgICAgICBvcHRzLnJlcXVlc3RQYXRoLFxuICAgICAgICAgICAgICAgIGVtcHR5UXVlcnkgPyAnJyA6ICc/JyxcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhKG9wdHMucXVlcnlEYXRhKSxcbiAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICBjb25zdCB7IGhlYWRlcnMsIHNldHRpbmdzIH0gPSBvcHRzO1xuICAgICAgICAgICAgdGhpcy5fc3RyaXBlLl9yZXF1ZXN0U2VuZGVyLl9yZXF1ZXN0KG9wdHMucmVxdWVzdE1ldGhvZCwgb3B0cy5ob3N0LCBwYXRoLCBvcHRzLmJvZHlEYXRhLCBvcHRzLmF1dGhlbnRpY2F0b3IsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLFxuICAgICAgICAgICAgICAgIHN0cmVhbWluZzogb3B0cy5zdHJlYW1pbmcsXG4gICAgICAgICAgICB9LCBvcHRzLnVzYWdlLCByZXF1ZXN0Q2FsbGJhY2ssIChfYSA9IHRoaXMucmVxdWVzdERhdGFQcm9jZXNzb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5leHBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9O1xuIiwgIi8qKlxuICogVGhlIFN0cmlwZUNvbnRleHQgY2xhc3MgcHJvdmlkZXMgYW4gaW1tdXRhYmxlIGNvbnRhaW5lciBhbmQgY29udmVuaWVuY2UgbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgYFN0cmlwZS1Db250ZXh0YCBoZWFkZXIuIEFsbCBtZXRob2RzIHJldHVybiBhIG5ldyBpbnN0YW5jZSBvZiBTdHJpcGVDb250ZXh0LlxuICogWW91IGNhbiB1c2UgaXQgd2hlbmV2ZXIgeW91J3JlIGluaXRpYWxpemluZyBhIGBTdHJpcGVgIGluc3RhbmNlIG9yIHNlbmRpbmcgYHN0cmlwZUNvbnRleHRgIHdpdGggYSByZXF1ZXN0LiBJdCdzIGFsc28gZm91bmQgaW4gdGhlIGBFdmVudE5vdGlmaWNhdGlvbi5jb250ZXh0YCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUNvbnRleHQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgU3RyaXBlQ29udGV4dCB3aXRoIHRoZSBnaXZlbiBzZWdtZW50cy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWdtZW50cyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX3NlZ21lbnRzID0gWy4uLnNlZ21lbnRzXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNvcHkgb2YgdGhlIHNlZ21lbnRzIG9mIHRoaXMgQ29udGV4dC5cbiAgICAgKi9cbiAgICBnZXQgc2VnbWVudHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fc2VnbWVudHNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFN0cmlwZUNvbnRleHQgd2l0aCBhbiBhZGRpdGlvbmFsIHNlZ21lbnQgYXBwZW5kZWQuXG4gICAgICovXG4gICAgcHVzaChzZWdtZW50KSB7XG4gICAgICAgIGlmICghc2VnbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWdtZW50IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RyaXBlQ29udGV4dChbLi4udGhpcy5fc2VnbWVudHMsIHNlZ21lbnRdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBTdHJpcGVDb250ZXh0IHdpdGggdGhlIGxhc3Qgc2VnbWVudCByZW1vdmVkLlxuICAgICAqIElmIHRoZXJlIGFyZSBubyBzZWdtZW50cywgdGhyb3dzIGFuIGVycm9yLlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcG9wIGZyb20gYW4gZW1wdHkgY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RyaXBlQ29udGV4dCh0aGlzLl9zZWdtZW50cy5zbGljZSgwLCAtMSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGNvbnRleHQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAgICAgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnRzLmpvaW4oJy8nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgY29udGV4dCBzdHJpbmcgaW50byBhIFN0cmlwZUNvbnRleHQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlKGNvbnRleHRTdHIpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0U3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUNvbnRleHQoW10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RyaXBlQ29udGV4dChjb250ZXh0U3RyLnNwbGl0KCcvJykpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBTdHJpcGVFcnJvciwgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IgfSBmcm9tICcuL0Vycm9yLmpzJztcbmltcG9ydCB7IENyeXB0b1Byb3ZpZGVyT25seVN1cHBvcnRzQXN5bmNFcnJvciwgfSBmcm9tICcuL2NyeXB0by9DcnlwdG9Qcm92aWRlci5qcyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2ViaG9va3MocGxhdGZvcm1GdW5jdGlvbnMpIHtcbiAgICBjb25zdCBXZWJob29rID0ge1xuICAgICAgICBERUZBVUxUX1RPTEVSQU5DRTogMzAwLFxuICAgICAgICBzaWduYXR1cmU6IG51bGwsXG4gICAgICAgIGNvbnN0cnVjdEV2ZW50KHBheWxvYWQsIGhlYWRlciwgc2VjcmV0LCB0b2xlcmFuY2UsIGNyeXB0b1Byb3ZpZGVyLCByZWNlaXZlZEF0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlI6IG1pc3Npbmcgc2lnbmF0dXJlIGhlbHBlciwgdW5hYmxlIHRvIHZlcmlmeScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25hdHVyZS52ZXJpZnlIZWFkZXIocGF5bG9hZCwgaGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSB8fCBXZWJob29rLkRFRkFVTFRfVE9MRVJBTkNFLCBjcnlwdG9Qcm92aWRlciwgcmVjZWl2ZWRBdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgQ3J5cHRvUHJvdmlkZXJPbmx5U3VwcG9ydHNBc3luY0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGUubWVzc2FnZSArPVxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcblVzZSBgYXdhaXQgY29uc3RydWN0RXZlbnRBc3luYyguLi4pYCBpbnN0ZWFkIG9mIGBjb25zdHJ1Y3RFdmVudCguLi4pYCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBqc29uUGF5bG9hZCA9IHBheWxvYWQgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKG5ldyBUZXh0RGVjb2RlcigndXRmOCcpLmRlY29kZShwYXlsb2FkKSlcbiAgICAgICAgICAgICAgICA6IEpTT04ucGFyc2UocGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ganNvblBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNvbnN0cnVjdEV2ZW50QXN5bmMocGF5bG9hZCwgaGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VSUjogbWlzc2luZyBzaWduYXR1cmUgaGVscGVyLCB1bmFibGUgdG8gdmVyaWZ5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25hdHVyZS52ZXJpZnlIZWFkZXJBc3luYyhwYXlsb2FkLCBoZWFkZXIsIHNlY3JldCwgdG9sZXJhbmNlIHx8IFdlYmhvb2suREVGQVVMVF9UT0xFUkFOQ0UsIGNyeXB0b1Byb3ZpZGVyLCByZWNlaXZlZEF0KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25QYXlsb2FkID0gcGF5bG9hZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UobmV3IFRleHREZWNvZGVyKCd1dGY4JykuZGVjb2RlKHBheWxvYWQpKVxuICAgICAgICAgICAgICAgIDogSlNPTi5wYXJzZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uUGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyBhIGhlYWRlciB0byBiZSB1c2VkIGZvciB3ZWJob29rIG1vY2tpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGVkZWYge29iamVjdH0gb3B0c1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZXN0YW1wIC0gVGltZXN0YW1wIG9mIHRoZSBoZWFkZXIuIERlZmF1bHRzIHRvIERhdGUubm93KClcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHBheWxvYWQgLSBKU09OIHN0cmluZ2lmaWVkIHBheWxvYWQgb2JqZWN0LCBjb250YWluaW5nIHRoZSAnaWQnIGFuZCAnb2JqZWN0JyBwYXJhbWV0ZXJzXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNyZXQgLSBTdHJpcGUgd2ViaG9vayBzZWNyZXQgJ3doc2VjXy4uLidcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNjaGVtZSAtIFZlcnNpb24gb2YgQVBJIHRvIGhpdC4gRGVmYXVsdHMgdG8gJ3YxJy5cbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZSAtIENvbXB1dGVkIHdlYmhvb2sgc2lnbmF0dXJlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Q3J5cHRvUHJvdmlkZXJ9IGNyeXB0b1Byb3ZpZGVyIC0gQ3J5cHRvIHByb3ZpZGVyIHRvIHVzZSBmb3IgY29tcHV0aW5nIHRoZSBzaWduYXR1cmUgaWYgbm9uZSB3YXMgcHJvdmlkZWQuIERlZmF1bHRzIHRvIE5vZGVDcnlwdG9Qcm92aWRlci5cbiAgICAgICAgICovXG4gICAgICAgIGdlbmVyYXRlVGVzdEhlYWRlclN0cmluZzogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXBhcmVkT3B0cyA9IHByZXBhcmVPcHRpb25zKG9wdHMpO1xuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gcHJlcGFyZWRPcHRzLnNpZ25hdHVyZSB8fFxuICAgICAgICAgICAgICAgIHByZXBhcmVkT3B0cy5jcnlwdG9Qcm92aWRlci5jb21wdXRlSE1BQ1NpZ25hdHVyZShwcmVwYXJlZE9wdHMucGF5bG9hZFN0cmluZywgcHJlcGFyZWRPcHRzLnNlY3JldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGFyZWRPcHRzLmdlbmVyYXRlSGVhZGVyU3RyaW5nKHNpZ25hdHVyZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlVGVzdEhlYWRlclN0cmluZ0FzeW5jOiBhc3luYyBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgY29uc3QgcHJlcGFyZWRPcHRzID0gcHJlcGFyZU9wdGlvbnMob3B0cyk7XG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBwcmVwYXJlZE9wdHMuc2lnbmF0dXJlIHx8XG4gICAgICAgICAgICAgICAgKGF3YWl0IHByZXBhcmVkT3B0cy5jcnlwdG9Qcm92aWRlci5jb21wdXRlSE1BQ1NpZ25hdHVyZUFzeW5jKHByZXBhcmVkT3B0cy5wYXlsb2FkU3RyaW5nLCBwcmVwYXJlZE9wdHMuc2VjcmV0KSk7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGFyZWRPcHRzLmdlbmVyYXRlSGVhZGVyU3RyaW5nKHNpZ25hdHVyZSk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB7XG4gICAgICAgIEVYUEVDVEVEX1NDSEVNRTogJ3YxJyxcbiAgICAgICAgdmVyaWZ5SGVhZGVyKGVuY29kZWRQYXlsb2FkLCBlbmNvZGVkSGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVjb2RlZEhlYWRlcjogaGVhZGVyLCBkZWNvZGVkUGF5bG9hZDogcGF5bG9hZCwgZGV0YWlscywgc3VzcGVjdFBheWxvYWRUeXBlLCB9ID0gcGFyc2VFdmVudERldGFpbHMoZW5jb2RlZFBheWxvYWQsIGVuY29kZWRIZWFkZXIsIHRoaXMuRVhQRUNURURfU0NIRU1FKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3JldENvbnRhaW5zV2hpdGVzcGFjZSA9IC9cXHMvLnRlc3Qoc2VjcmV0KTtcbiAgICAgICAgICAgIGNyeXB0b1Byb3ZpZGVyID0gY3J5cHRvUHJvdmlkZXIgfHwgZ2V0Q3J5cHRvUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkU2lnbmF0dXJlID0gY3J5cHRvUHJvdmlkZXIuY29tcHV0ZUhNQUNTaWduYXR1cmUobWFrZUhNQUNDb250ZW50KHBheWxvYWQsIGRldGFpbHMpLCBzZWNyZXQpO1xuICAgICAgICAgICAgdmFsaWRhdGVDb21wdXRlZFNpZ25hdHVyZShwYXlsb2FkLCBoZWFkZXIsIGRldGFpbHMsIGV4cGVjdGVkU2lnbmF0dXJlLCB0b2xlcmFuY2UsIHN1c3BlY3RQYXlsb2FkVHlwZSwgc2VjcmV0Q29udGFpbnNXaGl0ZXNwYWNlLCByZWNlaXZlZEF0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB2ZXJpZnlIZWFkZXJBc3luYyhlbmNvZGVkUGF5bG9hZCwgZW5jb2RlZEhlYWRlciwgc2VjcmV0LCB0b2xlcmFuY2UsIGNyeXB0b1Byb3ZpZGVyLCByZWNlaXZlZEF0KSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlY29kZWRIZWFkZXI6IGhlYWRlciwgZGVjb2RlZFBheWxvYWQ6IHBheWxvYWQsIGRldGFpbHMsIHN1c3BlY3RQYXlsb2FkVHlwZSwgfSA9IHBhcnNlRXZlbnREZXRhaWxzKGVuY29kZWRQYXlsb2FkLCBlbmNvZGVkSGVhZGVyLCB0aGlzLkVYUEVDVEVEX1NDSEVNRSk7XG4gICAgICAgICAgICBjb25zdCBzZWNyZXRDb250YWluc1doaXRlc3BhY2UgPSAvXFxzLy50ZXN0KHNlY3JldCk7XG4gICAgICAgICAgICBjcnlwdG9Qcm92aWRlciA9IGNyeXB0b1Byb3ZpZGVyIHx8IGdldENyeXB0b1Byb3ZpZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFNpZ25hdHVyZSA9IGF3YWl0IGNyeXB0b1Byb3ZpZGVyLmNvbXB1dGVITUFDU2lnbmF0dXJlQXN5bmMobWFrZUhNQUNDb250ZW50KHBheWxvYWQsIGRldGFpbHMpLCBzZWNyZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQ29tcHV0ZWRTaWduYXR1cmUocGF5bG9hZCwgaGVhZGVyLCBkZXRhaWxzLCBleHBlY3RlZFNpZ25hdHVyZSwgdG9sZXJhbmNlLCBzdXNwZWN0UGF5bG9hZFR5cGUsIHNlY3JldENvbnRhaW5zV2hpdGVzcGFjZSwgcmVjZWl2ZWRBdCk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBtYWtlSE1BQ0NvbnRlbnQocGF5bG9hZCwgZGV0YWlscykge1xuICAgICAgICByZXR1cm4gYCR7ZGV0YWlscy50aW1lc3RhbXB9LiR7cGF5bG9hZH1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUV2ZW50RGV0YWlscyhlbmNvZGVkUGF5bG9hZCwgZW5jb2RlZEhlYWRlciwgZXhwZWN0ZWRTY2hlbWUpIHtcbiAgICAgICAgaWYgKCFlbmNvZGVkUGF5bG9hZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGVuY29kZWRIZWFkZXIsIGVuY29kZWRQYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIHdlYmhvb2sgcGF5bG9hZCB3YXMgcHJvdmlkZWQuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1c3BlY3RQYXlsb2FkVHlwZSA9IHR5cGVvZiBlbmNvZGVkUGF5bG9hZCAhPSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgIShlbmNvZGVkUGF5bG9hZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpO1xuICAgICAgICBjb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmOCcpO1xuICAgICAgICBjb25zdCBkZWNvZGVkUGF5bG9hZCA9IGVuY29kZWRQYXlsb2FkIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgICAgICAgICAgPyB0ZXh0RGVjb2Rlci5kZWNvZGUoZW5jb2RlZFBheWxvYWQpXG4gICAgICAgICAgICA6IGVuY29kZWRQYXlsb2FkO1xuICAgICAgICAvLyBFeHByZXNzJ3MgdHlwZSBmb3IgYFJlcXVlc3QjaGVhZGVyc2AgaXMgYHN0cmluZyB8IFtdc3RyaW5nYFxuICAgICAgICAvLyB3aGljaCBpcyBiZWNhdXNlIHRoZSBgc2V0LWNvb2tpZWAgaGVhZGVyIGlzIGFuIGFycmF5LFxuICAgICAgICAvLyBidXQgbm8gb3RoZXIgaGVhZGVycyBhcmUgYW4gYXJyYXkgKGRvY3M6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzKVxuICAgICAgICAvLyAoRXhwcmVzcydzIFJlcXVlc3QgY2xhc3MgaXMgYW4gZXh0ZW5zaW9uIG9mIGh0dHAuSW5jb21pbmdNZXNzYWdlLCBhbmQgZG9lc24ndCBhcHBlYXIgdG8gYmUgcmVsZXZhbnRseSBtb2RpZmllZDogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9leHByZXNzL2Jsb2IvbWFzdGVyL2xpYi9yZXF1ZXN0LmpzI0wzMSlcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW5jb2RlZEhlYWRlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZDogQW4gYXJyYXkgd2FzIHBhc3NlZCBhcyBhIGhlYWRlciwgd2hpY2ggc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSBmb3IgdGhlIHN0cmlwZS1zaWduYXR1cmUgaGVhZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmNvZGVkSGVhZGVyID09IG51bGwgfHwgZW5jb2RlZEhlYWRlciA9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGVuY29kZWRIZWFkZXIsIGVuY29kZWRQYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIHN0cmlwZS1zaWduYXR1cmUgaGVhZGVyIHZhbHVlIHdhcyBwcm92aWRlZC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlZEhlYWRlciA9IGVuY29kZWRIZWFkZXIgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgICAgICAgICA/IHRleHREZWNvZGVyLmRlY29kZShlbmNvZGVkSGVhZGVyKVxuICAgICAgICAgICAgOiBlbmNvZGVkSGVhZGVyO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gcGFyc2VIZWFkZXIoZGVjb2RlZEhlYWRlciwgZXhwZWN0ZWRTY2hlbWUpO1xuICAgICAgICBpZiAoIWRldGFpbHMgfHwgZGV0YWlscy50aW1lc3RhbXAgPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RyaXBlU2lnbmF0dXJlVmVyaWZpY2F0aW9uRXJyb3IoZGVjb2RlZEhlYWRlciwgZGVjb2RlZFBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIGV4dHJhY3QgdGltZXN0YW1wIGFuZCBzaWduYXR1cmVzIGZyb20gaGVhZGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGV0YWlscy5zaWduYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGRlY29kZWRIZWFkZXIsIGRlY29kZWRQYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIHNpZ25hdHVyZXMgZm91bmQgd2l0aCBleHBlY3RlZCBzY2hlbWUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlY29kZWRQYXlsb2FkLFxuICAgICAgICAgICAgZGVjb2RlZEhlYWRlcixcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICBzdXNwZWN0UGF5bG9hZFR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ29tcHV0ZWRTaWduYXR1cmUocGF5bG9hZCwgaGVhZGVyLCBkZXRhaWxzLCBleHBlY3RlZFNpZ25hdHVyZSwgdG9sZXJhbmNlLCBzdXNwZWN0UGF5bG9hZFR5cGUsIHNlY3JldENvbnRhaW5zV2hpdGVzcGFjZSwgcmVjZWl2ZWRBdCkge1xuICAgICAgICBjb25zdCBzaWduYXR1cmVGb3VuZCA9ICEhZGV0YWlscy5zaWduYXR1cmVzLmZpbHRlcihwbGF0Zm9ybUZ1bmN0aW9ucy5zZWN1cmVDb21wYXJlLmJpbmQocGxhdGZvcm1GdW5jdGlvbnMsIGV4cGVjdGVkU2lnbmF0dXJlKSkubGVuZ3RoO1xuICAgICAgICBjb25zdCBkb2NzTG9jYXRpb24gPSAnXFxuTGVhcm4gbW9yZSBhYm91dCB3ZWJob29rIHNpZ25pbmcgYW5kIGV4cGxvcmUgd2ViaG9vayBpbnRlZ3JhdGlvbiBleGFtcGxlcyBmb3IgdmFyaW91cyBmcmFtZXdvcmtzIGF0ICcgK1xuICAgICAgICAgICAgJ2h0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3dlYmhvb2tzL3NpZ25hdHVyZSc7XG4gICAgICAgIGNvbnN0IHdoaXRlc3BhY2VNZXNzYWdlID0gc2VjcmV0Q29udGFpbnNXaGl0ZXNwYWNlXG4gICAgICAgICAgICA/ICdcXG5cXG5Ob3RlOiBUaGUgcHJvdmlkZWQgc2lnbmluZyBzZWNyZXQgY29udGFpbnMgd2hpdGVzcGFjZS4gVGhpcyBvZnRlbiBpbmRpY2F0ZXMgYW4gZXh0cmEgbmV3bGluZSBvciBzcGFjZSBpcyBpbiB0aGUgdmFsdWUnXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIXNpZ25hdHVyZUZvdW5kKSB7XG4gICAgICAgICAgICBpZiAoc3VzcGVjdFBheWxvYWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGhlYWRlciwgcGF5bG9hZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnV2ViaG9vayBwYXlsb2FkIG11c3QgYmUgcHJvdmlkZWQgYXMgYSBzdHJpbmcgb3IgYSBCdWZmZXIgKGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvYnVmZmVyLmh0bWwpIGluc3RhbmNlIHJlcHJlc2VudGluZyB0aGUgX3Jhd18gcmVxdWVzdCBib2R5LicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1BheWxvYWQgd2FzIHByb3ZpZGVkIGFzIGEgcGFyc2VkIEphdmFTY3JpcHQgb2JqZWN0IGluc3RlYWQuIFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1NpZ25hdHVyZSB2ZXJpZmljYXRpb24gaXMgaW1wb3NzaWJsZSB3aXRob3V0IGFjY2VzcyB0byB0aGUgb3JpZ2luYWwgc2lnbmVkIG1hdGVyaWFsLiBcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3NMb2NhdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlTWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBTdHJpcGVTaWduYXR1cmVWZXJpZmljYXRpb25FcnJvcihoZWFkZXIsIHBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gc2lnbmF0dXJlcyBmb3VuZCBtYXRjaGluZyB0aGUgZXhwZWN0ZWQgc2lnbmF0dXJlIGZvciBwYXlsb2FkLicgK1xuICAgICAgICAgICAgICAgICAgICAnIEFyZSB5b3UgcGFzc2luZyB0aGUgcmF3IHJlcXVlc3QgYm9keSB5b3UgcmVjZWl2ZWQgZnJvbSBTdHJpcGU/IFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAnIElmIGEgd2ViaG9vayByZXF1ZXN0IGlzIGJlaW5nIGZvcndhcmRlZCBieSBhIHRoaXJkLXBhcnR5IHRvb2wsJyArXG4gICAgICAgICAgICAgICAgICAgICcgZW5zdXJlIHRoYXQgdGhlIGV4YWN0IHJlcXVlc3QgYm9keSwgaW5jbHVkaW5nIEpTT04gZm9ybWF0dGluZyBhbmQgbmV3IGxpbmUgc3R5bGUsIGlzIHByZXNlcnZlZC5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgZG9jc0xvY2F0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcEFnZSA9IE1hdGguZmxvb3IoKHR5cGVvZiByZWNlaXZlZEF0ID09PSAnbnVtYmVyJyA/IHJlY2VpdmVkQXQgOiBEYXRlLm5vdygpKSAvIDEwMDApIC0gZGV0YWlscy50aW1lc3RhbXA7XG4gICAgICAgIGlmICh0b2xlcmFuY2UgPiAwICYmIHRpbWVzdGFtcEFnZSA+IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN0cmlwZVNpZ25hdHVyZVZlcmlmaWNhdGlvbkVycm9yKGhlYWRlciwgcGF5bG9hZCwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaW1lc3RhbXAgb3V0c2lkZSB0aGUgdG9sZXJhbmNlIHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlSGVhZGVyKGhlYWRlciwgc2NoZW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlci5zcGxpdCgnLCcpLnJlZHVjZSgoYWNjdW0sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGt2ID0gaXRlbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgaWYgKGt2WzBdID09PSAndCcpIHtcbiAgICAgICAgICAgICAgICBhY2N1bS50aW1lc3RhbXAgPSBwYXJzZUludChrdlsxXSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGt2WzBdID09PSBzY2hlbWUpIHtcbiAgICAgICAgICAgICAgICBhY2N1bS5zaWduYXR1cmVzLnB1c2goa3ZbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IC0xLFxuICAgICAgICAgICAgc2lnbmF0dXJlczogW10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgd2ViaG9va3NDcnlwdG9Qcm92aWRlckluc3RhbmNlID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBMYXppbHkgaW5zdGFudGlhdGUgYSBDcnlwdG9Qcm92aWRlciBpbnN0YW5jZS4gVGhpcyBpcyBhIHN0YXRlbGVzcyBvYmplY3RcbiAgICAgKiBzbyBhIHNpbmdsZXRvbiBjYW4gYmUgdXNlZCBoZXJlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENyeXB0b1Byb3ZpZGVyKCkge1xuICAgICAgICBpZiAoIXdlYmhvb2tzQ3J5cHRvUHJvdmlkZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgd2ViaG9va3NDcnlwdG9Qcm92aWRlckluc3RhbmNlID0gcGxhdGZvcm1GdW5jdGlvbnMuY3JlYXRlRGVmYXVsdENyeXB0b1Byb3ZpZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdlYmhvb2tzQ3J5cHRvUHJvdmlkZXJJbnN0YW5jZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlcGFyZU9wdGlvbnMob3B0cykge1xuICAgICAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTdHJpcGVFcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ09wdGlvbnMgYXJlIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3B0cy50aW1lc3RhbXApIHx8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBjb25zdCBzY2hlbWUgPSBvcHRzLnNjaGVtZSB8fCBzaWduYXR1cmUuRVhQRUNURURfU0NIRU1FO1xuICAgICAgICBjb25zdCBjcnlwdG9Qcm92aWRlciA9IG9wdHMuY3J5cHRvUHJvdmlkZXIgfHwgZ2V0Q3J5cHRvUHJvdmlkZXIoKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZFN0cmluZyA9IGAke3RpbWVzdGFtcH0uJHtvcHRzLnBheWxvYWR9YDtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVIZWFkZXJTdHJpbmcgPSAoc2lnbmF0dXJlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYHQ9JHt0aW1lc3RhbXB9LCR7c2NoZW1lfT0ke3NpZ25hdHVyZX1gO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRzKSwgeyB0aW1lc3RhbXAsXG4gICAgICAgICAgICBzY2hlbWUsXG4gICAgICAgICAgICBjcnlwdG9Qcm92aWRlcixcbiAgICAgICAgICAgIHBheWxvYWRTdHJpbmcsXG4gICAgICAgICAgICBnZW5lcmF0ZUhlYWRlclN0cmluZyB9KTtcbiAgICB9XG4gICAgV2ViaG9vay5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgcmV0dXJuIFdlYmhvb2s7XG59XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5leHBvcnQgY29uc3QgQXBpVmVyc2lvbiA9ICcyMDI2LTAxLTI4LmNsb3Zlcic7XG5leHBvcnQgY29uc3QgQXBpTWFqb3JWZXJzaW9uID0gJ2Nsb3Zlcic7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyByZXNvdXJjZU5hbWVzcGFjZSB9IGZyb20gJy4vUmVzb3VyY2VOYW1lc3BhY2UuanMnO1xuaW1wb3J0IHsgQWNjb3VudExpbmtzIGFzIFYyQ29yZUFjY291bnRMaW5rcyB9IGZyb20gJy4vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudExpbmtzLmpzJztcbmltcG9ydCB7IEFjY291bnRUb2tlbnMgYXMgVjJDb3JlQWNjb3VudFRva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL1YyL0NvcmUvQWNjb3VudFRva2Vucy5qcyc7XG5pbXBvcnQgeyBBY2NvdW50cyBhcyBGaW5hbmNpYWxDb25uZWN0aW9uc0FjY291bnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRmluYW5jaWFsQ29ubmVjdGlvbnMvQWNjb3VudHMuanMnO1xuaW1wb3J0IHsgQWNjb3VudHMgYXMgVjJDb3JlQWNjb3VudHMgfSBmcm9tICcuL3Jlc291cmNlcy9WMi9Db3JlL0FjY291bnRzLmpzJztcbmltcG9ydCB7IEFjdGl2ZUVudGl0bGVtZW50cyBhcyBFbnRpdGxlbWVudHNBY3RpdmVFbnRpdGxlbWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvQWN0aXZlRW50aXRsZW1lbnRzLmpzJztcbmltcG9ydCB7IEFsZXJ0cyBhcyBCaWxsaW5nQWxlcnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmlsbGluZy9BbGVydHMuanMnO1xuaW1wb3J0IHsgQXNzb2NpYXRpb25zIGFzIFRheEFzc29jaWF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheC9Bc3NvY2lhdGlvbnMuanMnO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvbnMgYXMgSXNzdWluZ0F1dGhvcml6YXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvSXNzdWluZy9BdXRob3JpemF0aW9ucy5qcyc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9ucyBhcyBUZXN0SGVscGVyc0lzc3VpbmdBdXRob3JpemF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0lzc3VpbmcvQXV0aG9yaXphdGlvbnMuanMnO1xuaW1wb3J0IHsgQ2FsY3VsYXRpb25zIGFzIFRheENhbGN1bGF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheC9DYWxjdWxhdGlvbnMuanMnO1xuaW1wb3J0IHsgQ2FyZGhvbGRlcnMgYXMgSXNzdWluZ0NhcmRob2xkZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvSXNzdWluZy9DYXJkaG9sZGVycy5qcyc7XG5pbXBvcnQgeyBDYXJkcyBhcyBJc3N1aW5nQ2FyZHMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL0NhcmRzLmpzJztcbmltcG9ydCB7IENhcmRzIGFzIFRlc3RIZWxwZXJzSXNzdWluZ0NhcmRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9DYXJkcy5qcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9ucyBhcyBCaWxsaW5nUG9ydGFsQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9CaWxsaW5nUG9ydGFsL0NvbmZpZ3VyYXRpb25zLmpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25zIGFzIFRlcm1pbmFsQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXJtaW5hbC9Db25maWd1cmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Ub2tlbnMgYXMgVGVzdEhlbHBlcnNDb25maXJtYXRpb25Ub2tlbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9Db25maXJtYXRpb25Ub2tlbnMuanMnO1xuaW1wb3J0IHsgQ29ubmVjdGlvblRva2VucyBhcyBUZXJtaW5hbENvbm5lY3Rpb25Ub2tlbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXJtaW5hbC9Db25uZWN0aW9uVG9rZW5zLmpzJztcbmltcG9ydCB7IENyZWRpdEJhbGFuY2VTdW1tYXJ5IGFzIEJpbGxpbmdDcmVkaXRCYWxhbmNlU3VtbWFyeSB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvQ3JlZGl0QmFsYW5jZVN1bW1hcnkuanMnO1xuaW1wb3J0IHsgQ3JlZGl0QmFsYW5jZVRyYW5zYWN0aW9ucyBhcyBCaWxsaW5nQ3JlZGl0QmFsYW5jZVRyYW5zYWN0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvQ3JlZGl0QmFsYW5jZVRyYW5zYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBDcmVkaXRHcmFudHMgYXMgQmlsbGluZ0NyZWRpdEdyYW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvQ3JlZGl0R3JhbnRzLmpzJztcbmltcG9ydCB7IENyZWRpdFJldmVyc2FscyBhcyBUcmVhc3VyeUNyZWRpdFJldmVyc2FscyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L0NyZWRpdFJldmVyc2Fscy5qcyc7XG5pbXBvcnQgeyBDdXN0b21lcnMgYXMgVGVzdEhlbHBlcnNDdXN0b21lcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9DdXN0b21lcnMuanMnO1xuaW1wb3J0IHsgRGViaXRSZXZlcnNhbHMgYXMgVHJlYXN1cnlEZWJpdFJldmVyc2FscyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L0RlYml0UmV2ZXJzYWxzLmpzJztcbmltcG9ydCB7IERpc3B1dGVzIGFzIElzc3VpbmdEaXNwdXRlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0lzc3VpbmcvRGlzcHV0ZXMuanMnO1xuaW1wb3J0IHsgRWFybHlGcmF1ZFdhcm5pbmdzIGFzIFJhZGFyRWFybHlGcmF1ZFdhcm5pbmdzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUmFkYXIvRWFybHlGcmF1ZFdhcm5pbmdzLmpzJztcbmltcG9ydCB7IEV2ZW50RGVzdGluYXRpb25zIGFzIFYyQ29yZUV2ZW50RGVzdGluYXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQ29yZS9FdmVudERlc3RpbmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBFdmVudHMgYXMgVjJDb3JlRXZlbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQ29yZS9FdmVudHMuanMnO1xuaW1wb3J0IHsgRmVhdHVyZXMgYXMgRW50aXRsZW1lbnRzRmVhdHVyZXMgfSBmcm9tICcuL3Jlc291cmNlcy9FbnRpdGxlbWVudHMvRmVhdHVyZXMuanMnO1xuaW1wb3J0IHsgRmluYW5jaWFsQWNjb3VudHMgYXMgVHJlYXN1cnlGaW5hbmNpYWxBY2NvdW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L0ZpbmFuY2lhbEFjY291bnRzLmpzJztcbmltcG9ydCB7IEluYm91bmRUcmFuc2ZlcnMgYXMgVGVzdEhlbHBlcnNUcmVhc3VyeUluYm91bmRUcmFuc2ZlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9JbmJvdW5kVHJhbnNmZXJzLmpzJztcbmltcG9ydCB7IEluYm91bmRUcmFuc2ZlcnMgYXMgVHJlYXN1cnlJbmJvdW5kVHJhbnNmZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvSW5ib3VuZFRyYW5zZmVycy5qcyc7XG5pbXBvcnQgeyBMb2NhdGlvbnMgYXMgVGVybWluYWxMb2NhdGlvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXJtaW5hbC9Mb2NhdGlvbnMuanMnO1xuaW1wb3J0IHsgTWV0ZXJFdmVudEFkanVzdG1lbnRzIGFzIEJpbGxpbmdNZXRlckV2ZW50QWRqdXN0bWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9CaWxsaW5nL01ldGVyRXZlbnRBZGp1c3RtZW50cy5qcyc7XG5pbXBvcnQgeyBNZXRlckV2ZW50QWRqdXN0bWVudHMgYXMgVjJCaWxsaW5nTWV0ZXJFdmVudEFkanVzdG1lbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50QWRqdXN0bWVudHMuanMnO1xuaW1wb3J0IHsgTWV0ZXJFdmVudFNlc3Npb24gYXMgVjJCaWxsaW5nTWV0ZXJFdmVudFNlc3Npb24gfSBmcm9tICcuL3Jlc291cmNlcy9WMi9CaWxsaW5nL01ldGVyRXZlbnRTZXNzaW9uLmpzJztcbmltcG9ydCB7IE1ldGVyRXZlbnRTdHJlYW0gYXMgVjJCaWxsaW5nTWV0ZXJFdmVudFN0cmVhbSB9IGZyb20gJy4vcmVzb3VyY2VzL1YyL0JpbGxpbmcvTWV0ZXJFdmVudFN0cmVhbS5qcyc7XG5pbXBvcnQgeyBNZXRlckV2ZW50cyBhcyBCaWxsaW5nTWV0ZXJFdmVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9CaWxsaW5nL01ldGVyRXZlbnRzLmpzJztcbmltcG9ydCB7IE1ldGVyRXZlbnRzIGFzIFYyQmlsbGluZ01ldGVyRXZlbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVjIvQmlsbGluZy9NZXRlckV2ZW50cy5qcyc7XG5pbXBvcnQgeyBNZXRlcnMgYXMgQmlsbGluZ01ldGVycyB9IGZyb20gJy4vcmVzb3VyY2VzL0JpbGxpbmcvTWV0ZXJzLmpzJztcbmltcG9ydCB7IE9uYm9hcmRpbmdMaW5rcyBhcyBUZXJtaW5hbE9uYm9hcmRpbmdMaW5rcyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlcm1pbmFsL09uYm9hcmRpbmdMaW5rcy5qcyc7XG5pbXBvcnQgeyBPcmRlcnMgYXMgQ2xpbWF0ZU9yZGVycyB9IGZyb20gJy4vcmVzb3VyY2VzL0NsaW1hdGUvT3JkZXJzLmpzJztcbmltcG9ydCB7IE91dGJvdW5kUGF5bWVudHMgYXMgVGVzdEhlbHBlcnNUcmVhc3VyeU91dGJvdW5kUGF5bWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9PdXRib3VuZFBheW1lbnRzLmpzJztcbmltcG9ydCB7IE91dGJvdW5kUGF5bWVudHMgYXMgVHJlYXN1cnlPdXRib3VuZFBheW1lbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvT3V0Ym91bmRQYXltZW50cy5qcyc7XG5pbXBvcnQgeyBPdXRib3VuZFRyYW5zZmVycyBhcyBUZXN0SGVscGVyc1RyZWFzdXJ5T3V0Ym91bmRUcmFuc2ZlcnMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9PdXRib3VuZFRyYW5zZmVycy5qcyc7XG5pbXBvcnQgeyBPdXRib3VuZFRyYW5zZmVycyBhcyBUcmVhc3VyeU91dGJvdW5kVHJhbnNmZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvT3V0Ym91bmRUcmFuc2ZlcnMuanMnO1xuaW1wb3J0IHsgUGF5bWVudEV2YWx1YXRpb25zIGFzIFJhZGFyUGF5bWVudEV2YWx1YXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUmFkYXIvUGF5bWVudEV2YWx1YXRpb25zLmpzJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkRlc2lnbnMgYXMgSXNzdWluZ1BlcnNvbmFsaXphdGlvbkRlc2lnbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL1BlcnNvbmFsaXphdGlvbkRlc2lnbnMuanMnO1xuaW1wb3J0IHsgUGVyc29uYWxpemF0aW9uRGVzaWducyBhcyBUZXN0SGVscGVyc0lzc3VpbmdQZXJzb25hbGl6YXRpb25EZXNpZ25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGVzdEhlbHBlcnMvSXNzdWluZy9QZXJzb25hbGl6YXRpb25EZXNpZ25zLmpzJztcbmltcG9ydCB7IFBoeXNpY2FsQnVuZGxlcyBhcyBJc3N1aW5nUGh5c2ljYWxCdW5kbGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvSXNzdWluZy9QaHlzaWNhbEJ1bmRsZXMuanMnO1xuaW1wb3J0IHsgUHJvZHVjdHMgYXMgQ2xpbWF0ZVByb2R1Y3RzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ2xpbWF0ZS9Qcm9kdWN0cy5qcyc7XG5pbXBvcnQgeyBSZWFkZXJzIGFzIFRlcm1pbmFsUmVhZGVycyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlcm1pbmFsL1JlYWRlcnMuanMnO1xuaW1wb3J0IHsgUmVhZGVycyBhcyBUZXN0SGVscGVyc1Rlcm1pbmFsUmVhZGVycyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1Rlcm1pbmFsL1JlYWRlcnMuanMnO1xuaW1wb3J0IHsgUmVjZWl2ZWRDcmVkaXRzIGFzIFRlc3RIZWxwZXJzVHJlYXN1cnlSZWNlaXZlZENyZWRpdHMgfSBmcm9tICcuL3Jlc291cmNlcy9UZXN0SGVscGVycy9UcmVhc3VyeS9SZWNlaXZlZENyZWRpdHMuanMnO1xuaW1wb3J0IHsgUmVjZWl2ZWRDcmVkaXRzIGFzIFRyZWFzdXJ5UmVjZWl2ZWRDcmVkaXRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJlYXN1cnkvUmVjZWl2ZWRDcmVkaXRzLmpzJztcbmltcG9ydCB7IFJlY2VpdmVkRGViaXRzIGFzIFRlc3RIZWxwZXJzVHJlYXN1cnlSZWNlaXZlZERlYml0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1RyZWFzdXJ5L1JlY2VpdmVkRGViaXRzLmpzJztcbmltcG9ydCB7IFJlY2VpdmVkRGViaXRzIGFzIFRyZWFzdXJ5UmVjZWl2ZWREZWJpdHMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9SZWNlaXZlZERlYml0cy5qcyc7XG5pbXBvcnQgeyBSZWZ1bmRzIGFzIFRlc3RIZWxwZXJzUmVmdW5kcyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1JlZnVuZHMuanMnO1xuaW1wb3J0IHsgUmVnaXN0cmF0aW9ucyBhcyBUYXhSZWdpc3RyYXRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvVGF4L1JlZ2lzdHJhdGlvbnMuanMnO1xuaW1wb3J0IHsgUmVwb3J0UnVucyBhcyBSZXBvcnRpbmdSZXBvcnRSdW5zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUmVwb3J0aW5nL1JlcG9ydFJ1bnMuanMnO1xuaW1wb3J0IHsgUmVwb3J0VHlwZXMgYXMgUmVwb3J0aW5nUmVwb3J0VHlwZXMgfSBmcm9tICcuL3Jlc291cmNlcy9SZXBvcnRpbmcvUmVwb3J0VHlwZXMuanMnO1xuaW1wb3J0IHsgUmVxdWVzdHMgYXMgRm9yd2FyZGluZ1JlcXVlc3RzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRm9yd2FyZGluZy9SZXF1ZXN0cy5qcyc7XG5pbXBvcnQgeyBTY2hlZHVsZWRRdWVyeVJ1bnMgYXMgU2lnbWFTY2hlZHVsZWRRdWVyeVJ1bnMgfSBmcm9tICcuL3Jlc291cmNlcy9TaWdtYS9TY2hlZHVsZWRRdWVyeVJ1bnMuanMnO1xuaW1wb3J0IHsgU2VjcmV0cyBhcyBBcHBzU2VjcmV0cyB9IGZyb20gJy4vcmVzb3VyY2VzL0FwcHMvU2VjcmV0cy5qcyc7XG5pbXBvcnQgeyBTZXNzaW9ucyBhcyBCaWxsaW5nUG9ydGFsU2Vzc2lvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9CaWxsaW5nUG9ydGFsL1Nlc3Npb25zLmpzJztcbmltcG9ydCB7IFNlc3Npb25zIGFzIENoZWNrb3V0U2Vzc2lvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9DaGVja291dC9TZXNzaW9ucy5qcyc7XG5pbXBvcnQgeyBTZXNzaW9ucyBhcyBGaW5hbmNpYWxDb25uZWN0aW9uc1Nlc3Npb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvRmluYW5jaWFsQ29ubmVjdGlvbnMvU2Vzc2lvbnMuanMnO1xuaW1wb3J0IHsgU2V0dGluZ3MgYXMgVGF4U2V0dGluZ3MgfSBmcm9tICcuL3Jlc291cmNlcy9UYXgvU2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgU3VwcGxpZXJzIGFzIENsaW1hdGVTdXBwbGllcnMgfSBmcm9tICcuL3Jlc291cmNlcy9DbGltYXRlL1N1cHBsaWVycy5qcyc7XG5pbXBvcnQgeyBUZXN0Q2xvY2tzIGFzIFRlc3RIZWxwZXJzVGVzdENsb2NrcyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL1Rlc3RDbG9ja3MuanMnO1xuaW1wb3J0IHsgVG9rZW5zIGFzIElzc3VpbmdUb2tlbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Jc3N1aW5nL1Rva2Vucy5qcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkVudHJpZXMgYXMgVHJlYXN1cnlUcmFuc2FjdGlvbkVudHJpZXMgfSBmcm9tICcuL3Jlc291cmNlcy9UcmVhc3VyeS9UcmFuc2FjdGlvbkVudHJpZXMuanMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zIGFzIEZpbmFuY2lhbENvbm5lY3Rpb25zVHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvRmluYW5jaWFsQ29ubmVjdGlvbnMvVHJhbnNhY3Rpb25zLmpzJztcbmltcG9ydCB7IFRyYW5zYWN0aW9ucyBhcyBJc3N1aW5nVHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvSXNzdWluZy9UcmFuc2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zIGFzIFRheFRyYW5zYWN0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheC9UcmFuc2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zIGFzIFRlc3RIZWxwZXJzSXNzdWluZ1RyYW5zYWN0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rlc3RIZWxwZXJzL0lzc3VpbmcvVHJhbnNhY3Rpb25zLmpzJztcbmltcG9ydCB7IFRyYW5zYWN0aW9ucyBhcyBUcmVhc3VyeVRyYW5zYWN0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1RyZWFzdXJ5L1RyYW5zYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBWYWx1ZUxpc3RJdGVtcyBhcyBSYWRhclZhbHVlTGlzdEl0ZW1zIH0gZnJvbSAnLi9yZXNvdXJjZXMvUmFkYXIvVmFsdWVMaXN0SXRlbXMuanMnO1xuaW1wb3J0IHsgVmFsdWVMaXN0cyBhcyBSYWRhclZhbHVlTGlzdHMgfSBmcm9tICcuL3Jlc291cmNlcy9SYWRhci9WYWx1ZUxpc3RzLmpzJztcbmltcG9ydCB7IFZlcmlmaWNhdGlvblJlcG9ydHMgYXMgSWRlbnRpdHlWZXJpZmljYXRpb25SZXBvcnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvSWRlbnRpdHkvVmVyaWZpY2F0aW9uUmVwb3J0cy5qcyc7XG5pbXBvcnQgeyBWZXJpZmljYXRpb25TZXNzaW9ucyBhcyBJZGVudGl0eVZlcmlmaWNhdGlvblNlc3Npb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvSWRlbnRpdHkvVmVyaWZpY2F0aW9uU2Vzc2lvbnMuanMnO1xuZXhwb3J0IHsgQWNjb3VudHMgYXMgQWNjb3VudCB9IGZyb20gJy4vcmVzb3VyY2VzL0FjY291bnRzLmpzJztcbmV4cG9ydCB7IEFjY291bnRMaW5rcyB9IGZyb20gJy4vcmVzb3VyY2VzL0FjY291bnRMaW5rcy5qcyc7XG5leHBvcnQgeyBBY2NvdW50U2Vzc2lvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9BY2NvdW50U2Vzc2lvbnMuanMnO1xuZXhwb3J0IHsgQWNjb3VudHMgfSBmcm9tICcuL3Jlc291cmNlcy9BY2NvdW50cy5qcyc7XG5leHBvcnQgeyBBcHBsZVBheURvbWFpbnMgfSBmcm9tICcuL3Jlc291cmNlcy9BcHBsZVBheURvbWFpbnMuanMnO1xuZXhwb3J0IHsgQXBwbGljYXRpb25GZWVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQXBwbGljYXRpb25GZWVzLmpzJztcbmV4cG9ydCB7IEJhbGFuY2UgfSBmcm9tICcuL3Jlc291cmNlcy9CYWxhbmNlLmpzJztcbmV4cG9ydCB7IEJhbGFuY2VTZXR0aW5ncyB9IGZyb20gJy4vcmVzb3VyY2VzL0JhbGFuY2VTZXR0aW5ncy5qcyc7XG5leHBvcnQgeyBCYWxhbmNlVHJhbnNhY3Rpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvQmFsYW5jZVRyYW5zYWN0aW9ucy5qcyc7XG5leHBvcnQgeyBDaGFyZ2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ2hhcmdlcy5qcyc7XG5leHBvcnQgeyBDb25maXJtYXRpb25Ub2tlbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Db25maXJtYXRpb25Ub2tlbnMuanMnO1xuZXhwb3J0IHsgQ291bnRyeVNwZWNzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ291bnRyeVNwZWNzLmpzJztcbmV4cG9ydCB7IENvdXBvbnMgfSBmcm9tICcuL3Jlc291cmNlcy9Db3Vwb25zLmpzJztcbmV4cG9ydCB7IENyZWRpdE5vdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ3JlZGl0Tm90ZXMuanMnO1xuZXhwb3J0IHsgQ3VzdG9tZXJTZXNzaW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL0N1c3RvbWVyU2Vzc2lvbnMuanMnO1xuZXhwb3J0IHsgQ3VzdG9tZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvQ3VzdG9tZXJzLmpzJztcbmV4cG9ydCB7IERpc3B1dGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRGlzcHV0ZXMuanMnO1xuZXhwb3J0IHsgRXBoZW1lcmFsS2V5cyB9IGZyb20gJy4vcmVzb3VyY2VzL0VwaGVtZXJhbEtleXMuanMnO1xuZXhwb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvRXZlbnRzLmpzJztcbmV4cG9ydCB7IEV4Y2hhbmdlUmF0ZXMgfSBmcm9tICcuL3Jlc291cmNlcy9FeGNoYW5nZVJhdGVzLmpzJztcbmV4cG9ydCB7IEZpbGVMaW5rcyB9IGZyb20gJy4vcmVzb3VyY2VzL0ZpbGVMaW5rcy5qcyc7XG5leHBvcnQgeyBGaWxlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0ZpbGVzLmpzJztcbmV4cG9ydCB7IEludm9pY2VJdGVtcyB9IGZyb20gJy4vcmVzb3VyY2VzL0ludm9pY2VJdGVtcy5qcyc7XG5leHBvcnQgeyBJbnZvaWNlUGF5bWVudHMgfSBmcm9tICcuL3Jlc291cmNlcy9JbnZvaWNlUGF5bWVudHMuanMnO1xuZXhwb3J0IHsgSW52b2ljZVJlbmRlcmluZ1RlbXBsYXRlcyB9IGZyb20gJy4vcmVzb3VyY2VzL0ludm9pY2VSZW5kZXJpbmdUZW1wbGF0ZXMuanMnO1xuZXhwb3J0IHsgSW52b2ljZXMgfSBmcm9tICcuL3Jlc291cmNlcy9JbnZvaWNlcy5qcyc7XG5leHBvcnQgeyBNYW5kYXRlcyB9IGZyb20gJy4vcmVzb3VyY2VzL01hbmRhdGVzLmpzJztcbmV4cG9ydCB7IE9BdXRoIH0gZnJvbSAnLi9yZXNvdXJjZXMvT0F1dGguanMnO1xuZXhwb3J0IHsgUGF5bWVudEF0dGVtcHRSZWNvcmRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudEF0dGVtcHRSZWNvcmRzLmpzJztcbmV4cG9ydCB7IFBheW1lbnRJbnRlbnRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudEludGVudHMuanMnO1xuZXhwb3J0IHsgUGF5bWVudExpbmtzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudExpbmtzLmpzJztcbmV4cG9ydCB7IFBheW1lbnRNZXRob2RDb25maWd1cmF0aW9ucyB9IGZyb20gJy4vcmVzb3VyY2VzL1BheW1lbnRNZXRob2RDb25maWd1cmF0aW9ucy5qcyc7XG5leHBvcnQgeyBQYXltZW50TWV0aG9kRG9tYWlucyB9IGZyb20gJy4vcmVzb3VyY2VzL1BheW1lbnRNZXRob2REb21haW5zLmpzJztcbmV4cG9ydCB7IFBheW1lbnRNZXRob2RzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZHMuanMnO1xuZXhwb3J0IHsgUGF5bWVudFJlY29yZHMgfSBmcm9tICcuL3Jlc291cmNlcy9QYXltZW50UmVjb3Jkcy5qcyc7XG5leHBvcnQgeyBQYXlvdXRzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUGF5b3V0cy5qcyc7XG5leHBvcnQgeyBQbGFucyB9IGZyb20gJy4vcmVzb3VyY2VzL1BsYW5zLmpzJztcbmV4cG9ydCB7IFByaWNlcyB9IGZyb20gJy4vcmVzb3VyY2VzL1ByaWNlcy5qcyc7XG5leHBvcnQgeyBQcm9kdWN0cyB9IGZyb20gJy4vcmVzb3VyY2VzL1Byb2R1Y3RzLmpzJztcbmV4cG9ydCB7IFByb21vdGlvbkNvZGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUHJvbW90aW9uQ29kZXMuanMnO1xuZXhwb3J0IHsgUXVvdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvUXVvdGVzLmpzJztcbmV4cG9ydCB7IFJlZnVuZHMgfSBmcm9tICcuL3Jlc291cmNlcy9SZWZ1bmRzLmpzJztcbmV4cG9ydCB7IFJldmlld3MgfSBmcm9tICcuL3Jlc291cmNlcy9SZXZpZXdzLmpzJztcbmV4cG9ydCB7IFNldHVwQXR0ZW1wdHMgfSBmcm9tICcuL3Jlc291cmNlcy9TZXR1cEF0dGVtcHRzLmpzJztcbmV4cG9ydCB7IFNldHVwSW50ZW50cyB9IGZyb20gJy4vcmVzb3VyY2VzL1NldHVwSW50ZW50cy5qcyc7XG5leHBvcnQgeyBTaGlwcGluZ1JhdGVzIH0gZnJvbSAnLi9yZXNvdXJjZXMvU2hpcHBpbmdSYXRlcy5qcyc7XG5leHBvcnQgeyBTb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMvU291cmNlcy5qcyc7XG5leHBvcnQgeyBTdWJzY3JpcHRpb25JdGVtcyB9IGZyb20gJy4vcmVzb3VyY2VzL1N1YnNjcmlwdGlvbkl0ZW1zLmpzJztcbmV4cG9ydCB7IFN1YnNjcmlwdGlvblNjaGVkdWxlcyB9IGZyb20gJy4vcmVzb3VyY2VzL1N1YnNjcmlwdGlvblNjaGVkdWxlcy5qcyc7XG5leHBvcnQgeyBTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy5qcyc7XG5leHBvcnQgeyBUYXhDb2RlcyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheENvZGVzLmpzJztcbmV4cG9ydCB7IFRheElkcyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheElkcy5qcyc7XG5leHBvcnQgeyBUYXhSYXRlcyB9IGZyb20gJy4vcmVzb3VyY2VzL1RheFJhdGVzLmpzJztcbmV4cG9ydCB7IFRva2VucyB9IGZyb20gJy4vcmVzb3VyY2VzL1Rva2Vucy5qcyc7XG5leHBvcnQgeyBUb3B1cHMgfSBmcm9tICcuL3Jlc291cmNlcy9Ub3B1cHMuanMnO1xuZXhwb3J0IHsgVHJhbnNmZXJzIH0gZnJvbSAnLi9yZXNvdXJjZXMvVHJhbnNmZXJzLmpzJztcbmV4cG9ydCB7IFdlYmhvb2tFbmRwb2ludHMgfSBmcm9tICcuL3Jlc291cmNlcy9XZWJob29rRW5kcG9pbnRzLmpzJztcbmV4cG9ydCBjb25zdCBBcHBzID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2FwcHMnLCB7IFNlY3JldHM6IEFwcHNTZWNyZXRzIH0pO1xuZXhwb3J0IGNvbnN0IEJpbGxpbmcgPSByZXNvdXJjZU5hbWVzcGFjZSgnYmlsbGluZycsIHtcbiAgICBBbGVydHM6IEJpbGxpbmdBbGVydHMsXG4gICAgQ3JlZGl0QmFsYW5jZVN1bW1hcnk6IEJpbGxpbmdDcmVkaXRCYWxhbmNlU3VtbWFyeSxcbiAgICBDcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zOiBCaWxsaW5nQ3JlZGl0QmFsYW5jZVRyYW5zYWN0aW9ucyxcbiAgICBDcmVkaXRHcmFudHM6IEJpbGxpbmdDcmVkaXRHcmFudHMsXG4gICAgTWV0ZXJFdmVudEFkanVzdG1lbnRzOiBCaWxsaW5nTWV0ZXJFdmVudEFkanVzdG1lbnRzLFxuICAgIE1ldGVyRXZlbnRzOiBCaWxsaW5nTWV0ZXJFdmVudHMsXG4gICAgTWV0ZXJzOiBCaWxsaW5nTWV0ZXJzLFxufSk7XG5leHBvcnQgY29uc3QgQmlsbGluZ1BvcnRhbCA9IHJlc291cmNlTmFtZXNwYWNlKCdiaWxsaW5nUG9ydGFsJywge1xuICAgIENvbmZpZ3VyYXRpb25zOiBCaWxsaW5nUG9ydGFsQ29uZmlndXJhdGlvbnMsXG4gICAgU2Vzc2lvbnM6IEJpbGxpbmdQb3J0YWxTZXNzaW9ucyxcbn0pO1xuZXhwb3J0IGNvbnN0IENoZWNrb3V0ID0gcmVzb3VyY2VOYW1lc3BhY2UoJ2NoZWNrb3V0Jywge1xuICAgIFNlc3Npb25zOiBDaGVja291dFNlc3Npb25zLFxufSk7XG5leHBvcnQgY29uc3QgQ2xpbWF0ZSA9IHJlc291cmNlTmFtZXNwYWNlKCdjbGltYXRlJywge1xuICAgIE9yZGVyczogQ2xpbWF0ZU9yZGVycyxcbiAgICBQcm9kdWN0czogQ2xpbWF0ZVByb2R1Y3RzLFxuICAgIFN1cHBsaWVyczogQ2xpbWF0ZVN1cHBsaWVycyxcbn0pO1xuZXhwb3J0IGNvbnN0IEVudGl0bGVtZW50cyA9IHJlc291cmNlTmFtZXNwYWNlKCdlbnRpdGxlbWVudHMnLCB7XG4gICAgQWN0aXZlRW50aXRsZW1lbnRzOiBFbnRpdGxlbWVudHNBY3RpdmVFbnRpdGxlbWVudHMsXG4gICAgRmVhdHVyZXM6IEVudGl0bGVtZW50c0ZlYXR1cmVzLFxufSk7XG5leHBvcnQgY29uc3QgRmluYW5jaWFsQ29ubmVjdGlvbnMgPSByZXNvdXJjZU5hbWVzcGFjZSgnZmluYW5jaWFsQ29ubmVjdGlvbnMnLCB7XG4gICAgQWNjb3VudHM6IEZpbmFuY2lhbENvbm5lY3Rpb25zQWNjb3VudHMsXG4gICAgU2Vzc2lvbnM6IEZpbmFuY2lhbENvbm5lY3Rpb25zU2Vzc2lvbnMsXG4gICAgVHJhbnNhY3Rpb25zOiBGaW5hbmNpYWxDb25uZWN0aW9uc1RyYW5zYWN0aW9ucyxcbn0pO1xuZXhwb3J0IGNvbnN0IEZvcndhcmRpbmcgPSByZXNvdXJjZU5hbWVzcGFjZSgnZm9yd2FyZGluZycsIHtcbiAgICBSZXF1ZXN0czogRm9yd2FyZGluZ1JlcXVlc3RzLFxufSk7XG5leHBvcnQgY29uc3QgSWRlbnRpdHkgPSByZXNvdXJjZU5hbWVzcGFjZSgnaWRlbnRpdHknLCB7XG4gICAgVmVyaWZpY2F0aW9uUmVwb3J0czogSWRlbnRpdHlWZXJpZmljYXRpb25SZXBvcnRzLFxuICAgIFZlcmlmaWNhdGlvblNlc3Npb25zOiBJZGVudGl0eVZlcmlmaWNhdGlvblNlc3Npb25zLFxufSk7XG5leHBvcnQgY29uc3QgSXNzdWluZyA9IHJlc291cmNlTmFtZXNwYWNlKCdpc3N1aW5nJywge1xuICAgIEF1dGhvcml6YXRpb25zOiBJc3N1aW5nQXV0aG9yaXphdGlvbnMsXG4gICAgQ2FyZGhvbGRlcnM6IElzc3VpbmdDYXJkaG9sZGVycyxcbiAgICBDYXJkczogSXNzdWluZ0NhcmRzLFxuICAgIERpc3B1dGVzOiBJc3N1aW5nRGlzcHV0ZXMsXG4gICAgUGVyc29uYWxpemF0aW9uRGVzaWduczogSXNzdWluZ1BlcnNvbmFsaXphdGlvbkRlc2lnbnMsXG4gICAgUGh5c2ljYWxCdW5kbGVzOiBJc3N1aW5nUGh5c2ljYWxCdW5kbGVzLFxuICAgIFRva2VuczogSXNzdWluZ1Rva2VucyxcbiAgICBUcmFuc2FjdGlvbnM6IElzc3VpbmdUcmFuc2FjdGlvbnMsXG59KTtcbmV4cG9ydCBjb25zdCBSYWRhciA9IHJlc291cmNlTmFtZXNwYWNlKCdyYWRhcicsIHtcbiAgICBFYXJseUZyYXVkV2FybmluZ3M6IFJhZGFyRWFybHlGcmF1ZFdhcm5pbmdzLFxuICAgIFBheW1lbnRFdmFsdWF0aW9uczogUmFkYXJQYXltZW50RXZhbHVhdGlvbnMsXG4gICAgVmFsdWVMaXN0SXRlbXM6IFJhZGFyVmFsdWVMaXN0SXRlbXMsXG4gICAgVmFsdWVMaXN0czogUmFkYXJWYWx1ZUxpc3RzLFxufSk7XG5leHBvcnQgY29uc3QgUmVwb3J0aW5nID0gcmVzb3VyY2VOYW1lc3BhY2UoJ3JlcG9ydGluZycsIHtcbiAgICBSZXBvcnRSdW5zOiBSZXBvcnRpbmdSZXBvcnRSdW5zLFxuICAgIFJlcG9ydFR5cGVzOiBSZXBvcnRpbmdSZXBvcnRUeXBlcyxcbn0pO1xuZXhwb3J0IGNvbnN0IFNpZ21hID0gcmVzb3VyY2VOYW1lc3BhY2UoJ3NpZ21hJywge1xuICAgIFNjaGVkdWxlZFF1ZXJ5UnVuczogU2lnbWFTY2hlZHVsZWRRdWVyeVJ1bnMsXG59KTtcbmV4cG9ydCBjb25zdCBUYXggPSByZXNvdXJjZU5hbWVzcGFjZSgndGF4Jywge1xuICAgIEFzc29jaWF0aW9uczogVGF4QXNzb2NpYXRpb25zLFxuICAgIENhbGN1bGF0aW9uczogVGF4Q2FsY3VsYXRpb25zLFxuICAgIFJlZ2lzdHJhdGlvbnM6IFRheFJlZ2lzdHJhdGlvbnMsXG4gICAgU2V0dGluZ3M6IFRheFNldHRpbmdzLFxuICAgIFRyYW5zYWN0aW9uczogVGF4VHJhbnNhY3Rpb25zLFxufSk7XG5leHBvcnQgY29uc3QgVGVybWluYWwgPSByZXNvdXJjZU5hbWVzcGFjZSgndGVybWluYWwnLCB7XG4gICAgQ29uZmlndXJhdGlvbnM6IFRlcm1pbmFsQ29uZmlndXJhdGlvbnMsXG4gICAgQ29ubmVjdGlvblRva2VuczogVGVybWluYWxDb25uZWN0aW9uVG9rZW5zLFxuICAgIExvY2F0aW9uczogVGVybWluYWxMb2NhdGlvbnMsXG4gICAgT25ib2FyZGluZ0xpbmtzOiBUZXJtaW5hbE9uYm9hcmRpbmdMaW5rcyxcbiAgICBSZWFkZXJzOiBUZXJtaW5hbFJlYWRlcnMsXG59KTtcbmV4cG9ydCBjb25zdCBUZXN0SGVscGVycyA9IHJlc291cmNlTmFtZXNwYWNlKCd0ZXN0SGVscGVycycsIHtcbiAgICBDb25maXJtYXRpb25Ub2tlbnM6IFRlc3RIZWxwZXJzQ29uZmlybWF0aW9uVG9rZW5zLFxuICAgIEN1c3RvbWVyczogVGVzdEhlbHBlcnNDdXN0b21lcnMsXG4gICAgUmVmdW5kczogVGVzdEhlbHBlcnNSZWZ1bmRzLFxuICAgIFRlc3RDbG9ja3M6IFRlc3RIZWxwZXJzVGVzdENsb2NrcyxcbiAgICBJc3N1aW5nOiByZXNvdXJjZU5hbWVzcGFjZSgnaXNzdWluZycsIHtcbiAgICAgICAgQXV0aG9yaXphdGlvbnM6IFRlc3RIZWxwZXJzSXNzdWluZ0F1dGhvcml6YXRpb25zLFxuICAgICAgICBDYXJkczogVGVzdEhlbHBlcnNJc3N1aW5nQ2FyZHMsXG4gICAgICAgIFBlcnNvbmFsaXphdGlvbkRlc2lnbnM6IFRlc3RIZWxwZXJzSXNzdWluZ1BlcnNvbmFsaXphdGlvbkRlc2lnbnMsXG4gICAgICAgIFRyYW5zYWN0aW9uczogVGVzdEhlbHBlcnNJc3N1aW5nVHJhbnNhY3Rpb25zLFxuICAgIH0pLFxuICAgIFRlcm1pbmFsOiByZXNvdXJjZU5hbWVzcGFjZSgndGVybWluYWwnLCB7XG4gICAgICAgIFJlYWRlcnM6IFRlc3RIZWxwZXJzVGVybWluYWxSZWFkZXJzLFxuICAgIH0pLFxuICAgIFRyZWFzdXJ5OiByZXNvdXJjZU5hbWVzcGFjZSgndHJlYXN1cnknLCB7XG4gICAgICAgIEluYm91bmRUcmFuc2ZlcnM6IFRlc3RIZWxwZXJzVHJlYXN1cnlJbmJvdW5kVHJhbnNmZXJzLFxuICAgICAgICBPdXRib3VuZFBheW1lbnRzOiBUZXN0SGVscGVyc1RyZWFzdXJ5T3V0Ym91bmRQYXltZW50cyxcbiAgICAgICAgT3V0Ym91bmRUcmFuc2ZlcnM6IFRlc3RIZWxwZXJzVHJlYXN1cnlPdXRib3VuZFRyYW5zZmVycyxcbiAgICAgICAgUmVjZWl2ZWRDcmVkaXRzOiBUZXN0SGVscGVyc1RyZWFzdXJ5UmVjZWl2ZWRDcmVkaXRzLFxuICAgICAgICBSZWNlaXZlZERlYml0czogVGVzdEhlbHBlcnNUcmVhc3VyeVJlY2VpdmVkRGViaXRzLFxuICAgIH0pLFxufSk7XG5leHBvcnQgY29uc3QgVHJlYXN1cnkgPSByZXNvdXJjZU5hbWVzcGFjZSgndHJlYXN1cnknLCB7XG4gICAgQ3JlZGl0UmV2ZXJzYWxzOiBUcmVhc3VyeUNyZWRpdFJldmVyc2FscyxcbiAgICBEZWJpdFJldmVyc2FsczogVHJlYXN1cnlEZWJpdFJldmVyc2FscyxcbiAgICBGaW5hbmNpYWxBY2NvdW50czogVHJlYXN1cnlGaW5hbmNpYWxBY2NvdW50cyxcbiAgICBJbmJvdW5kVHJhbnNmZXJzOiBUcmVhc3VyeUluYm91bmRUcmFuc2ZlcnMsXG4gICAgT3V0Ym91bmRQYXltZW50czogVHJlYXN1cnlPdXRib3VuZFBheW1lbnRzLFxuICAgIE91dGJvdW5kVHJhbnNmZXJzOiBUcmVhc3VyeU91dGJvdW5kVHJhbnNmZXJzLFxuICAgIFJlY2VpdmVkQ3JlZGl0czogVHJlYXN1cnlSZWNlaXZlZENyZWRpdHMsXG4gICAgUmVjZWl2ZWREZWJpdHM6IFRyZWFzdXJ5UmVjZWl2ZWREZWJpdHMsXG4gICAgVHJhbnNhY3Rpb25FbnRyaWVzOiBUcmVhc3VyeVRyYW5zYWN0aW9uRW50cmllcyxcbiAgICBUcmFuc2FjdGlvbnM6IFRyZWFzdXJ5VHJhbnNhY3Rpb25zLFxufSk7XG5leHBvcnQgY29uc3QgVjIgPSByZXNvdXJjZU5hbWVzcGFjZSgndjInLCB7XG4gICAgQmlsbGluZzogcmVzb3VyY2VOYW1lc3BhY2UoJ2JpbGxpbmcnLCB7XG4gICAgICAgIE1ldGVyRXZlbnRBZGp1c3RtZW50czogVjJCaWxsaW5nTWV0ZXJFdmVudEFkanVzdG1lbnRzLFxuICAgICAgICBNZXRlckV2ZW50U2Vzc2lvbjogVjJCaWxsaW5nTWV0ZXJFdmVudFNlc3Npb24sXG4gICAgICAgIE1ldGVyRXZlbnRTdHJlYW06IFYyQmlsbGluZ01ldGVyRXZlbnRTdHJlYW0sXG4gICAgICAgIE1ldGVyRXZlbnRzOiBWMkJpbGxpbmdNZXRlckV2ZW50cyxcbiAgICB9KSxcbiAgICBDb3JlOiByZXNvdXJjZU5hbWVzcGFjZSgnY29yZScsIHtcbiAgICAgICAgQWNjb3VudExpbmtzOiBWMkNvcmVBY2NvdW50TGlua3MsXG4gICAgICAgIEFjY291bnRUb2tlbnM6IFYyQ29yZUFjY291bnRUb2tlbnMsXG4gICAgICAgIEFjY291bnRzOiBWMkNvcmVBY2NvdW50cyxcbiAgICAgICAgRXZlbnREZXN0aW5hdGlvbnM6IFYyQ29yZUV2ZW50RGVzdGluYXRpb25zLFxuICAgICAgICBFdmVudHM6IFYyQ29yZUV2ZW50cyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIFJlc291cmNlTmFtZXNwYWNlIGFsbG93cyB5b3UgdG8gY3JlYXRlIG5lc3RlZCByZXNvdXJjZXMsIGkuZS4gYHN0cmlwZS5pc3N1aW5nLmNhcmRzYC5cbi8vIEl0IGFsc28gd29ya3MgcmVjdXJzaXZlbHksIHNvIHlvdSBjb3VsZCBkbyBpLmUuIGBzdHJpcGUuYmlsbGluZy5pbnZvaWNpbmcucGF5YC5cbmZ1bmN0aW9uIFJlc291cmNlTmFtZXNwYWNlKHN0cmlwZSwgcmVzb3VyY2VzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHJlc291cmNlcykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXNvdXJjZXMsIG5hbWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW1lbENhc2VOYW1lID0gbmFtZVswXS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gbmV3IHJlc291cmNlc1tuYW1lXShzdHJpcGUpO1xuICAgICAgICB0aGlzW2NhbWVsQ2FzZU5hbWVdID0gcmVzb3VyY2U7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlTmFtZXNwYWNlKG5hbWVzcGFjZSwgcmVzb3VyY2VzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZU5hbWVzcGFjZShzdHJpcGUsIHJlc291cmNlcyk7XG4gICAgfTtcbn1cbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEFjY291bnRMaW5rcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50X2xpbmtzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudFRva2VucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50X3Rva2VucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudF90b2tlbnMve2lkfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEFjY291bnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL2FjY291bnRzL3thY2NvdW50fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZmluYW5jaWFsX2Nvbm5lY3Rpb25zL2FjY291bnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRpc2Nvbm5lY3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maW5hbmNpYWxfY29ubmVjdGlvbnMvYWNjb3VudHMve2FjY291bnR9L2Rpc2Nvbm5lY3QnLFxuICAgIH0pLFxuICAgIGxpc3RPd25lcnM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9hY2NvdW50cy97YWNjb3VudH0vb3duZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHJlZnJlc2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maW5hbmNpYWxfY29ubmVjdGlvbnMvYWNjb3VudHMve2FjY291bnR9L3JlZnJlc2gnLFxuICAgIH0pLFxuICAgIHN1YnNjcmliZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9hY2NvdW50cy97YWNjb3VudH0vc3Vic2NyaWJlJyxcbiAgICB9KSxcbiAgICB1bnN1YnNjcmliZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9hY2NvdW50cy97YWNjb3VudH0vdW5zdWJzY3JpYmUnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQZXJzb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3thY2NvdW50X2lkfS9wZXJzb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50cy97YWNjb3VudF9pZH0vcGVyc29ucy97aWR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3thY2NvdW50X2lkfS9wZXJzb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3thY2NvdW50X2lkfS9wZXJzb25zL3tpZH0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQZXJzb25Ub2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMve2FjY291bnRfaWR9L3BlcnNvbl90b2tlbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3thY2NvdW50X2lkfS9wZXJzb25fdG9rZW5zL3tpZH0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmltcG9ydCB7IFBlcnNvbnMgfSBmcm9tICcuL0FjY291bnRzL1BlcnNvbnMuanMnO1xuaW1wb3J0IHsgUGVyc29uVG9rZW5zIH0gZnJvbSAnLi9BY2NvdW50cy9QZXJzb25Ub2tlbnMuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEFjY291bnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgU3RyaXBlUmVzb3VyY2UuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IG5ldyBQZXJzb25zKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnBlcnNvblRva2VucyA9IG5ldyBQZXJzb25Ub2tlbnMoLi4uYXJncyk7XG4gICAgfSxcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjIvY29yZS9hY2NvdW50cy97aWR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvYWNjb3VudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2xvc2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2FjY291bnRzL3tpZH0vY2xvc2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBBY3RpdmVFbnRpdGxlbWVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9lbnRpdGxlbWVudHMvYWN0aXZlX2VudGl0bGVtZW50cy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9lbnRpdGxlbWVudHMvYWN0aXZlX2VudGl0bGVtZW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWxlcnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2FsZXJ0cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvYWxlcnRzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvYWxlcnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGFjdGl2YXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9hbGVydHMve2lkfS9hY3RpdmF0ZScsXG4gICAgfSksXG4gICAgYXJjaGl2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvYWxlcnRzL3tpZH0vYXJjaGl2ZScsXG4gICAgfSksXG4gICAgZGVhY3RpdmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvYWxlcnRzL3tpZH0vZGVhY3RpdmF0ZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgZmluZDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdGF4L2Fzc29jaWF0aW9ucy9maW5kJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQXV0aG9yaXphdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYXBwcm92ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2FwcHJvdmUnLFxuICAgIH0pLFxuICAgIGRlY2xpbmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufS9kZWNsaW5lJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQXV0aG9yaXphdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2F1dGhvcml6YXRpb25zJyxcbiAgICB9KSxcbiAgICBjYXB0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2NhcHR1cmUnLFxuICAgIH0pLFxuICAgIGV4cGlyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufS9leHBpcmUnLFxuICAgIH0pLFxuICAgIGZpbmFsaXplQW1vdW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2ZpbmFsaXplX2Ftb3VudCcsXG4gICAgfSksXG4gICAgaW5jcmVtZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvYXV0aG9yaXphdGlvbnMve2F1dGhvcml6YXRpb259L2luY3JlbWVudCcsXG4gICAgfSksXG4gICAgcmVzcG9uZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2F1dGhvcml6YXRpb25zL3thdXRob3JpemF0aW9ufS9mcmF1ZF9jaGFsbGVuZ2VzL3Jlc3BvbmQnLFxuICAgIH0pLFxuICAgIHJldmVyc2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9hdXRob3JpemF0aW9ucy97YXV0aG9yaXphdGlvbn0vcmV2ZXJzZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENhbGN1bGF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdGF4L2NhbGN1bGF0aW9ucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC9jYWxjdWxhdGlvbnMve2NhbGN1bGF0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdExpbmVJdGVtczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L2NhbGN1bGF0aW9ucy97Y2FsY3VsYXRpb259L2xpbmVfaXRlbXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENhcmRob2xkZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRob2xkZXJzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9jYXJkaG9sZGVycy97Y2FyZGhvbGRlcn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvY2FyZGhvbGRlcnMve2NhcmRob2xkZXJ9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRob2xkZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDYXJkcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9jYXJkcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvY2FyZHMve2NhcmR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2NhcmRzL3tjYXJkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9jYXJkcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ2FyZHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGRlbGl2ZXJDYXJkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvY2FyZHMve2NhcmR9L3NoaXBwaW5nL2RlbGl2ZXInLFxuICAgIH0pLFxuICAgIGZhaWxDYXJkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvY2FyZHMve2NhcmR9L3NoaXBwaW5nL2ZhaWwnLFxuICAgIH0pLFxuICAgIHJldHVybkNhcmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9jYXJkcy97Y2FyZH0vc2hpcHBpbmcvcmV0dXJuJyxcbiAgICB9KSxcbiAgICBzaGlwQ2FyZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL2NhcmRzL3tjYXJkfS9zaGlwcGluZy9zaGlwJyxcbiAgICB9KSxcbiAgICBzdWJtaXRDYXJkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvY2FyZHMve2NhcmR9L3NoaXBwaW5nL3N1Ym1pdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENvbmZpZ3VyYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nX3BvcnRhbC9jb25maWd1cmF0aW9ucycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmdfcG9ydGFsL2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZ19wb3J0YWwvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb259JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nX3BvcnRhbC9jb25maWd1cmF0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ29uZmlndXJhdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2NvbmZpZ3VyYXRpb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2NvbmZpZ3VyYXRpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvY29uZmlndXJhdGlvbnMve2NvbmZpZ3VyYXRpb259JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uVG9rZW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvY29uZmlybWF0aW9uX3Rva2VucycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENvbm5lY3Rpb25Ub2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2Nvbm5lY3Rpb25fdG9rZW5zJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3JlZGl0QmFsYW5jZVN1bW1hcnkgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9iYWxhbmNlX3N1bW1hcnknLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDcmVkaXRCYWxhbmNlVHJhbnNhY3Rpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfYmFsYW5jZV90cmFuc2FjdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfYmFsYW5jZV90cmFuc2FjdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENyZWRpdEdyYW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfZ3JhbnRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfZ3JhbnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvY3JlZGl0X2dyYW50cy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9ncmFudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZXhwaXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9jcmVkaXRfZ3JhbnRzL3tpZH0vZXhwaXJlJyxcbiAgICB9KSxcbiAgICB2b2lkR3JhbnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL2NyZWRpdF9ncmFudHMve2lkfS92b2lkJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3JlZGl0UmV2ZXJzYWxzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9jcmVkaXRfcmV2ZXJzYWxzJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvY3JlZGl0X3JldmVyc2Fscy97Y3JlZGl0X3JldmVyc2FsfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvY3JlZGl0X3JldmVyc2FscycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3VzdG9tZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBmdW5kQ2FzaEJhbGFuY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvY3VzdG9tZXJzL3tjdXN0b21lcn0vZnVuZF9jYXNoX2JhbGFuY2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBEZWJpdFJldmVyc2FscyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZGViaXRfcmV2ZXJzYWxzJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZGViaXRfcmV2ZXJzYWxzL3tkZWJpdF9yZXZlcnNhbH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2RlYml0X3JldmVyc2FscycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRGlzcHV0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvZGlzcHV0ZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL2Rpc3B1dGVzL3tkaXNwdXRlfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9kaXNwdXRlcy97ZGlzcHV0ZX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvZGlzcHV0ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgc3VibWl0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9kaXNwdXRlcy97ZGlzcHV0ZX0vc3VibWl0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRWFybHlGcmF1ZFdhcm5pbmdzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvZWFybHlfZnJhdWRfd2FybmluZ3Mve2Vhcmx5X2ZyYXVkX3dhcm5pbmd9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci9lYXJseV9mcmF1ZF93YXJuaW5ncycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRXZlbnREZXN0aW5hdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvZXZlbnRfZGVzdGluYXRpb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucy97aWR9JyxcbiAgICB9KSxcbiAgICBkaXNhYmxlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudF9kZXN0aW5hdGlvbnMve2lkfS9kaXNhYmxlJyxcbiAgICB9KSxcbiAgICBlbmFibGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50X2Rlc3RpbmF0aW9ucy97aWR9L2VuYWJsZScsXG4gICAgfSksXG4gICAgcGluZzogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2NvcmUvZXZlbnRfZGVzdGluYXRpb25zL3tpZH0vcGluZycsXG4gICAgfSksXG59KTtcbiIsICIvLyBUaGlzIGZpbGUgaXMgbWFudWFsbHkgbWFpbnRhaW5lZFxuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRXZlbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZSguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybVJlc3BvbnNlRGF0YSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmV0Y2hSZWxhdGVkT2JqZWN0SWZOZWVkZWQocmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBmdWxsUGF0aDogJy92Mi9jb3JlL2V2ZW50cy97aWR9JyxcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlRGF0YSxcbiAgICAgICAgfSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSxcbiAgICBsaXN0KC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtUmVzcG9uc2VEYXRhID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSksIHsgZGF0YTogcmVzcG9uc2UuZGF0YS5tYXAodGhpcy5hZGRGZXRjaFJlbGF0ZWRPYmplY3RJZk5lZWRlZC5iaW5kKHRoaXMpKSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0cmlwZU1ldGhvZCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgZnVsbFBhdGg6ICcvdjIvY29yZS9ldmVudHMnLFxuICAgICAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2VEYXRhLFxuICAgICAgICB9KS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBGb3IgaW50ZXJuYWwgdXNlIGluIHN0cmlwZS1ub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHB1bGxlZEV2ZW50IFRoZSByZXRyaWV2ZWQgZXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybnMgVGhlIHJldHJpZXZlZCBldmVudCBvYmplY3Qgd2l0aCBhIGZldGNoUmVsYXRlZE9iamVjdCBtZXRob2QsXG4gICAgICogaWYgcHVsbGVkRXZlbnQucmVsYXRlZF9vYmplY3QgaXMgdmFsaWQgKG5vbi1udWxsIGFuZCBoYXMgYSB1cmwpXG4gICAgICovXG4gICAgYWRkRmV0Y2hSZWxhdGVkT2JqZWN0SWZOZWVkZWQocHVsbGVkRXZlbnQpIHtcbiAgICAgICAgaWYgKCFwdWxsZWRFdmVudC5yZWxhdGVkX29iamVjdCB8fCAhcHVsbGVkRXZlbnQucmVsYXRlZF9vYmplY3QudXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHVsbGVkRXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHVsbGVkRXZlbnQpLCB7IGZldGNoUmVsYXRlZE9iamVjdDogKCkgPT4gXG4gICAgICAgICAgICAvLyBjYWxsIHN0cmlwZU1ldGhvZCB3aXRoICd0aGlzJyByZXNvdXJjZSB0byBmZXRjaFxuICAgICAgICAgICAgLy8gdGhlIHJlbGF0ZWQgb2JqZWN0LiAndGhpcycgaXMgbmVlZGVkIHRvIGNvbnN0cnVjdFxuICAgICAgICAgICAgLy8gYW5kIHNlbmQgdGhlIHJlcXVlc3QsIGJ1dCB0aGUgbWV0aG9kIHNwZWMgY29udHJvbHNcbiAgICAgICAgICAgIC8vIHRoZSB1cmwgZW5kcG9pbnQgYW5kIG1ldGhvZCwgc28gaXQgZG9lc24ndCBtYXR0ZXJcbiAgICAgICAgICAgIC8vIHRoYXQgJ3RoaXMnIGlzIGFuIEV2ZW50cyByZXNvdXJjZSBvYmplY3QgaGVyZVxuICAgICAgICAgICAgc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoOiBwdWxsZWRFdmVudC5yZWxhdGVkX29iamVjdC51cmwsXG4gICAgICAgICAgICB9KS5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHJpcGVDb250ZXh0OiBwdWxsZWRFdmVudC5jb250ZXh0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKSB9KTtcbiAgICB9LFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBGZWF0dXJlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvZW50aXRsZW1lbnRzL2ZlYXR1cmVzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZW50aXRsZW1lbnRzL2ZlYXR1cmVzL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2VudGl0bGVtZW50cy9mZWF0dXJlcy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9lbnRpdGxlbWVudHMvZmVhdHVyZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEZpbmFuY2lhbEFjY291bnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9maW5hbmNpYWxfYWNjb3VudHMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9maW5hbmNpYWxfYWNjb3VudHMve2ZpbmFuY2lhbF9hY2NvdW50fScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvZmluYW5jaWFsX2FjY291bnRzL3tmaW5hbmNpYWxfYWNjb3VudH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjbG9zZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L2ZpbmFuY2lhbF9hY2NvdW50cy97ZmluYW5jaWFsX2FjY291bnR9L2Nsb3NlJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUZlYXR1cmVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9maW5hbmNpYWxfYWNjb3VudHMve2ZpbmFuY2lhbF9hY2NvdW50fS9mZWF0dXJlcycsXG4gICAgfSksXG4gICAgdXBkYXRlRmVhdHVyZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9maW5hbmNpYWxfYWNjb3VudHMve2ZpbmFuY2lhbF9hY2NvdW50fS9mZWF0dXJlcycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEluYm91bmRUcmFuc2ZlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGZhaWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvaW5ib3VuZF90cmFuc2ZlcnMve2lkfS9mYWlsJyxcbiAgICB9KSxcbiAgICByZXR1cm5JbmJvdW5kVHJhbnNmZXI6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvaW5ib3VuZF90cmFuc2ZlcnMve2lkfS9yZXR1cm4nLFxuICAgIH0pLFxuICAgIHN1Y2NlZWQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvaW5ib3VuZF90cmFuc2ZlcnMve2lkfS9zdWNjZWVkJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgSW5ib3VuZFRyYW5zZmVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvaW5ib3VuZF90cmFuc2ZlcnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9pbmJvdW5kX3RyYW5zZmVycy97aW5ib3VuZF90cmFuc2Zlcn0vY2FuY2VsJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTG9jYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9sb2NhdGlvbnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9sb2NhdGlvbnMve2xvY2F0aW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvbG9jYXRpb25zL3tsb2NhdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2xvY2F0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL2xvY2F0aW9ucy97bG9jYXRpb259JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudEFkanVzdG1lbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL21ldGVyX2V2ZW50X2FkanVzdG1lbnRzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudEFkanVzdG1lbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92Mi9iaWxsaW5nL21ldGVyX2V2ZW50X2FkanVzdG1lbnRzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudFNlc3Npb24gPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2JpbGxpbmcvbWV0ZXJfZXZlbnRfc2Vzc2lvbicsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE1ldGVyRXZlbnRTdHJlYW0gPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YyL2JpbGxpbmcvbWV0ZXJfZXZlbnRfc3RyZWFtJyxcbiAgICAgICAgaG9zdDogJ21ldGVyLWV2ZW50cy5zdHJpcGUuY29tJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJfZXZlbnRzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJFdmVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YyL2JpbGxpbmcvbWV0ZXJfZXZlbnRzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWV0ZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9iaWxsaW5nL21ldGVycycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzL3tpZH0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlYWN0aXZhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nL21ldGVycy97aWR9L2RlYWN0aXZhdGUnLFxuICAgIH0pLFxuICAgIGxpc3RFdmVudFN1bW1hcmllczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYmlsbGluZy9tZXRlcnMve2lkfS9ldmVudF9zdW1tYXJpZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmVhY3RpdmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2JpbGxpbmcvbWV0ZXJzL3tpZH0vcmVhY3RpdmF0ZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE9uYm9hcmRpbmdMaW5rcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvb25ib2FyZGluZ19saW5rcycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE9yZGVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY2xpbWF0ZS9vcmRlcnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL29yZGVycy97b3JkZXJ9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL29yZGVycy97b3JkZXJ9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL29yZGVycycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jbGltYXRlL29yZGVycy97b3JkZXJ9L2NhbmNlbCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE91dGJvdW5kUGF5bWVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cy97aWR9JyxcbiAgICB9KSxcbiAgICBmYWlsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3BheW1lbnRzL3tpZH0vZmFpbCcsXG4gICAgfSksXG4gICAgcG9zdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cy97aWR9L3Bvc3QnLFxuICAgIH0pLFxuICAgIHJldHVybk91dGJvdW5kUGF5bWVudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9vdXRib3VuZF9wYXltZW50cy97aWR9L3JldHVybicsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IE91dGJvdW5kUGF5bWVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L291dGJvdW5kX3BheW1lbnRzJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfcGF5bWVudHMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfcGF5bWVudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfcGF5bWVudHMve2lkfS9jYW5jZWwnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBPdXRib3VuZFRyYW5zZmVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3RyYW5zZmVycy97b3V0Ym91bmRfdHJhbnNmZXJ9JyxcbiAgICB9KSxcbiAgICBmYWlsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L291dGJvdW5kX3RyYW5zZmVycy97b3V0Ym91bmRfdHJhbnNmZXJ9L2ZhaWwnLFxuICAgIH0pLFxuICAgIHBvc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzL3tvdXRib3VuZF90cmFuc2Zlcn0vcG9zdCcsXG4gICAgfSksXG4gICAgcmV0dXJuT3V0Ym91bmRUcmFuc2Zlcjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90cmVhc3VyeS9vdXRib3VuZF90cmFuc2ZlcnMve291dGJvdW5kX3RyYW5zZmVyfS9yZXR1cm4nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBPdXRib3VuZFRyYW5zZmVycyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvb3V0Ym91bmRfdHJhbnNmZXJzL3tvdXRib3VuZF90cmFuc2Zlcn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L291dGJvdW5kX3RyYW5zZmVycycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9vdXRib3VuZF90cmFuc2ZlcnMve291dGJvdW5kX3RyYW5zZmVyfS9jYW5jZWwnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50RXZhbHVhdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3BheW1lbnRfZXZhbHVhdGlvbnMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQZXJzb25hbGl6YXRpb25EZXNpZ25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9wZXJzb25hbGl6YXRpb25fZGVzaWducy97cGVyc29uYWxpemF0aW9uX2Rlc2lnbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvcGVyc29uYWxpemF0aW9uX2Rlc2lnbnMve3BlcnNvbmFsaXphdGlvbl9kZXNpZ259JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQZXJzb25hbGl6YXRpb25EZXNpZ25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBhY3RpdmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zL3twZXJzb25hbGl6YXRpb25fZGVzaWdufS9hY3RpdmF0ZScsXG4gICAgfSksXG4gICAgZGVhY3RpdmF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL3BlcnNvbmFsaXphdGlvbl9kZXNpZ25zL3twZXJzb25hbGl6YXRpb25fZGVzaWdufS9kZWFjdGl2YXRlJyxcbiAgICB9KSxcbiAgICByZWplY3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy9wZXJzb25hbGl6YXRpb25fZGVzaWducy97cGVyc29uYWxpemF0aW9uX2Rlc2lnbn0vcmVqZWN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGh5c2ljYWxCdW5kbGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaXNzdWluZy9waHlzaWNhbF9idW5kbGVzL3twaHlzaWNhbF9idW5kbGV9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3BoeXNpY2FsX2J1bmRsZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFByb2R1Y3RzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2xpbWF0ZS9wcm9kdWN0cy97cHJvZHVjdH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NsaW1hdGUvcHJvZHVjdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlYWRlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfScsXG4gICAgfSksXG4gICAgY2FuY2VsQWN0aW9uOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9jYW5jZWxfYWN0aW9uJyxcbiAgICB9KSxcbiAgICBjb2xsZWN0SW5wdXRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9jb2xsZWN0X2lucHV0cycsXG4gICAgfSksXG4gICAgY29sbGVjdFBheW1lbnRNZXRob2Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L2NvbGxlY3RfcGF5bWVudF9tZXRob2QnLFxuICAgIH0pLFxuICAgIGNvbmZpcm1QYXltZW50SW50ZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9jb25maXJtX3BheW1lbnRfaW50ZW50JyxcbiAgICB9KSxcbiAgICBwcm9jZXNzUGF5bWVudEludGVudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vcHJvY2Vzc19wYXltZW50X2ludGVudCcsXG4gICAgfSksXG4gICAgcHJvY2Vzc1NldHVwSW50ZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVybWluYWwvcmVhZGVycy97cmVhZGVyfS9wcm9jZXNzX3NldHVwX2ludGVudCcsXG4gICAgfSksXG4gICAgcmVmdW5kUGF5bWVudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vcmVmdW5kX3BheW1lbnQnLFxuICAgIH0pLFxuICAgIHNldFJlYWRlckRpc3BsYXk6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L3NldF9yZWFkZXJfZGlzcGxheScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlYWRlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHByZXNlbnRQYXltZW50TWV0aG9kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3Rlcm1pbmFsL3JlYWRlcnMve3JlYWRlcn0vcHJlc2VudF9wYXltZW50X21ldGhvZCcsXG4gICAgfSksXG4gICAgc3VjY2VlZElucHV0Q29sbGVjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L3N1Y2NlZWRfaW5wdXRfY29sbGVjdGlvbicsXG4gICAgfSksXG4gICAgdGltZW91dElucHV0Q29sbGVjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXJtaW5hbC9yZWFkZXJzL3tyZWFkZXJ9L3RpbWVvdXRfaW5wdXRfY29sbGVjdGlvbicsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlY2VpdmVkQ3JlZGl0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL3RyZWFzdXJ5L3JlY2VpdmVkX2NyZWRpdHMnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZWNlaXZlZENyZWRpdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9yZWNlaXZlZF9jcmVkaXRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L3JlY2VpdmVkX2NyZWRpdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlY2VpdmVkRGViaXRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdHJlYXN1cnkvcmVjZWl2ZWRfZGViaXRzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmVjZWl2ZWREZWJpdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS9yZWNlaXZlZF9kZWJpdHMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvcmVjZWl2ZWRfZGViaXRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZWZ1bmRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBleHBpcmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvcmVmdW5kcy97cmVmdW5kfS9leHBpcmUnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZWdpc3RyYXRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90YXgvcmVnaXN0cmF0aW9ucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC9yZWdpc3RyYXRpb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC9yZWdpc3RyYXRpb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC9yZWdpc3RyYXRpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZXBvcnRSdW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9yZXBvcnRpbmcvcmVwb3J0X3J1bnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yZXBvcnRpbmcvcmVwb3J0X3J1bnMve3JlcG9ydF9ydW59JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yZXBvcnRpbmcvcmVwb3J0X3J1bnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlcG9ydFR5cGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmVwb3J0aW5nL3JlcG9ydF90eXBlcy97cmVwb3J0X3R5cGV9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yZXBvcnRpbmcvcmVwb3J0X3R5cGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBSZXF1ZXN0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvZm9yd2FyZGluZy9yZXF1ZXN0cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZvcndhcmRpbmcvcmVxdWVzdHMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZm9yd2FyZGluZy9yZXF1ZXN0cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2NoZWR1bGVkUXVlcnlSdW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2lnbWEvc2NoZWR1bGVkX3F1ZXJ5X3J1bnMve3NjaGVkdWxlZF9xdWVyeV9ydW59JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zaWdtYS9zY2hlZHVsZWRfcXVlcnlfcnVucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2VjcmV0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYXBwcy9zZWNyZXRzJyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBzL3NlY3JldHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsZXRlV2hlcmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBzL3NlY3JldHMvZGVsZXRlJyxcbiAgICB9KSxcbiAgICBmaW5kOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9hcHBzL3NlY3JldHMvZmluZCcgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNlc3Npb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iaWxsaW5nX3BvcnRhbC9zZXNzaW9ucycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNlc3Npb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jaGVja291dC9zZXNzaW9ucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoZWNrb3V0L3Nlc3Npb25zL3tzZXNzaW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2hlY2tvdXQvc2Vzc2lvbnMve3Nlc3Npb259JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jaGVja291dC9zZXNzaW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBleHBpcmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jaGVja291dC9zZXNzaW9ucy97c2Vzc2lvbn0vZXhwaXJlJyxcbiAgICB9KSxcbiAgICBsaXN0TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jaGVja291dC9zZXNzaW9ucy97c2Vzc2lvbn0vbGluZV9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU2Vzc2lvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9zZXNzaW9ucycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy9zZXNzaW9ucy97c2Vzc2lvbn0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTZXR0aW5ncyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3RheC9zZXR0aW5ncycgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdGF4L3NldHRpbmdzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU3VwcGxpZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2xpbWF0ZS9zdXBwbGllcnMve3N1cHBsaWVyfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY2xpbWF0ZS9zdXBwbGllcnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRlc3RDbG9ja3MgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXN0X2Nsb2NrcycsXG4gICAgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXN0X2Nsb2Nrcy97dGVzdF9jbG9ja30nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXN0X2Nsb2NrcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy90ZXN0X2Nsb2Nrcy97dGVzdF9jbG9ja30nLFxuICAgIH0pLFxuICAgIGFkdmFuY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvdGVzdF9jbG9ja3Mve3Rlc3RfY2xvY2t9L2FkdmFuY2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUb2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3Rva2Vucy97dG9rZW59JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3Rva2Vucy97dG9rZW59JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pc3N1aW5nL3Rva2VucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25FbnRyaWVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvdHJhbnNhY3Rpb25fZW50cmllcy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmVhc3VyeS90cmFuc2FjdGlvbl9lbnRyaWVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maW5hbmNpYWxfY29ubmVjdGlvbnMvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ZpbmFuY2lhbF9jb25uZWN0aW9ucy90cmFuc2FjdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lzc3VpbmcvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90YXgvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0nLFxuICAgIH0pLFxuICAgIGNyZWF0ZUZyb21DYWxjdWxhdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC90cmFuc2FjdGlvbnMvY3JlYXRlX2Zyb21fY2FsY3VsYXRpb24nLFxuICAgIH0pLFxuICAgIGNyZWF0ZVJldmVyc2FsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4L3RyYW5zYWN0aW9ucy9jcmVhdGVfcmV2ZXJzYWwnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheC90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufS9saW5lX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZUZvcmNlQ2FwdHVyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Rlc3RfaGVscGVycy9pc3N1aW5nL3RyYW5zYWN0aW9ucy9jcmVhdGVfZm9yY2VfY2FwdHVyZScsXG4gICAgfSksXG4gICAgY3JlYXRlVW5saW5rZWRSZWZ1bmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90ZXN0X2hlbHBlcnMvaXNzdWluZy90cmFuc2FjdGlvbnMvY3JlYXRlX3VubGlua2VkX3JlZnVuZCcsXG4gICAgfSksXG4gICAgcmVmdW5kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGVzdF9oZWxwZXJzL2lzc3VpbmcvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvbn0vcmVmdW5kJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJlYXN1cnkvdHJhbnNhY3Rpb25zL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RyZWFzdXJ5L3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVmFsdWVMaXN0SXRlbXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RfaXRlbXMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0X2l0ZW1zL3tpdGVtfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdF9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RfaXRlbXMve2l0ZW19JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVmFsdWVMaXN0cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0cy97dmFsdWVfbGlzdH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JhZGFyL3ZhbHVlX2xpc3RzL3t2YWx1ZV9saXN0fScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcmFkYXIvdmFsdWVfbGlzdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yYWRhci92YWx1ZV9saXN0cy97dmFsdWVfbGlzdH0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBWZXJpZmljYXRpb25SZXBvcnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3JlcG9ydHMve3JlcG9ydH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lkZW50aXR5L3ZlcmlmaWNhdGlvbl9yZXBvcnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uLy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBWZXJpZmljYXRpb25TZXNzaW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3Nlc3Npb25zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3Nlc3Npb25zL3tzZXNzaW9ufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3Nlc3Npb25zL3tzZXNzaW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaWRlbnRpdHkvdmVyaWZpY2F0aW9uX3Nlc3Npb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2lkZW50aXR5L3ZlcmlmaWNhdGlvbl9zZXNzaW9ucy97c2Vzc2lvbn0vY2FuY2VsJyxcbiAgICB9KSxcbiAgICByZWRhY3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pZGVudGl0eS92ZXJpZmljYXRpb25fc2Vzc2lvbnMve3Nlc3Npb259L3JlZGFjdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuLy8gU2luY2UgcGF0aCBjYW4gZWl0aGVyIGJlIGBhY2NvdW50YCBvciBgYWNjb3VudHNgLCBzdXBwb3J0IGJvdGggdGhyb3VnaCBzdHJpcGVNZXRob2QgcGF0aFxuZXhwb3J0IGNvbnN0IEFjY291bnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hY2NvdW50cycgfSksXG4gICAgcmV0cmlldmUoaWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gTm8gbG9uZ2VyIGFsbG93IGFuIGFwaSBrZXkgdG8gYmUgcGFzc2VkIGFzIHRoZSBmaXJzdCBzdHJpbmcgdG8gdGhpcyBmdW5jdGlvbiBkdWUgdG8gYW1iaWd1aXR5IGJldHdlZW5cbiAgICAgICAgLy8gb2xkIGFjY291bnQgaWRzIGFuZCBhcGkga2V5cy4gVG8gcmVxdWVzdCB0aGUgYWNjb3VudCBmb3IgYW4gYXBpIGtleSwgc2VuZCBudWxsIGFzIHRoZSBpZFxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZU1ldGhvZCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97aWR9JyxcbiAgICAgICAgICAgIH0pLmFwcGx5KHRoaXMsIFtpZCwgLi4uYXJnc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaWQgYXMgc3RyaXBlTWV0aG9kIHdvdWxkIGNvbXBsYWluIG9mIHVuZXhwZWN0ZWQgYXJndW1lbnRcbiAgICAgICAgICAgICAgICBbXS5zaGlmdC5hcHBseShbaWQsIC4uLmFyZ3NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudCcsXG4gICAgICAgICAgICB9KS5hcHBseSh0aGlzLCBbaWQsIC4uLmFyZ3NdKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0RFTEVURScsIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fScgfSksXG4gICAgY3JlYXRlRXh0ZXJuYWxBY2NvdW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L2V4dGVybmFsX2FjY291bnRzJyxcbiAgICB9KSxcbiAgICBjcmVhdGVMb2dpbkxpbms6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vbG9naW5fbGlua3MnLFxuICAgIH0pLFxuICAgIGNyZWF0ZVBlcnNvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9wZXJzb25zJyxcbiAgICB9KSxcbiAgICBkZWxldGVFeHRlcm5hbEFjY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9leHRlcm5hbF9hY2NvdW50cy97aWR9JyxcbiAgICB9KSxcbiAgICBkZWxldGVQZXJzb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9wZXJzb25zL3twZXJzb259JyxcbiAgICB9KSxcbiAgICBsaXN0Q2FwYWJpbGl0aWVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vY2FwYWJpbGl0aWVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGxpc3RFeHRlcm5hbEFjY291bnRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vZXh0ZXJuYWxfYWNjb3VudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgbGlzdFBlcnNvbnM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9wZXJzb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHJlamVjdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9yZWplY3QnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlQ3VycmVudDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvYWNjb3VudCcgfSksXG4gICAgcmV0cmlldmVDYXBhYmlsaXR5OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vY2FwYWJpbGl0aWVzL3tjYXBhYmlsaXR5fScsXG4gICAgfSksXG4gICAgcmV0cmlldmVFeHRlcm5hbEFjY291bnQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9leHRlcm5hbF9hY2NvdW50cy97aWR9JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZVBlcnNvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L3BlcnNvbnMve3BlcnNvbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZUNhcGFiaWxpdHk6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hY2NvdW50cy97YWNjb3VudH0vY2FwYWJpbGl0aWVzL3tjYXBhYmlsaXR5fScsXG4gICAgfSksXG4gICAgdXBkYXRlRXh0ZXJuYWxBY2NvdW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYWNjb3VudHMve2FjY291bnR9L2V4dGVybmFsX2FjY291bnRzL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZVBlcnNvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FjY291bnRzL3thY2NvdW50fS9wZXJzb25zL3twZXJzb259JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudExpbmtzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hY2NvdW50X2xpbmtzJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQWNjb3VudFNlc3Npb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hY2NvdW50X3Nlc3Npb25zJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQXBwbGVQYXlEb21haW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9hcHBsZV9wYXkvZG9tYWlucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxlX3BheS9kb21haW5zL3tkb21haW59JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBsZV9wYXkvZG9tYWlucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxlX3BheS9kb21haW5zL3tkb21haW59JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25GZWVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGljYXRpb25fZmVlcy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBsaWNhdGlvbl9mZWVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNyZWF0ZVJlZnVuZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxpY2F0aW9uX2ZlZXMve2lkfS9yZWZ1bmRzJyxcbiAgICB9KSxcbiAgICBsaXN0UmVmdW5kczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvYXBwbGljYXRpb25fZmVlcy97aWR9L3JlZnVuZHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmV0cmlldmVSZWZ1bmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2FwcGxpY2F0aW9uX2ZlZXMve2ZlZX0vcmVmdW5kcy97aWR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGVSZWZ1bmQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9hcHBsaWNhdGlvbl9mZWVzL3tmZWV9L3JlZnVuZHMve2lkfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEJhbGFuY2UgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9iYWxhbmNlJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQmFsYW5jZVNldHRpbmdzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvYmFsYW5jZV9zZXR0aW5ncycgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvYmFsYW5jZV9zZXR0aW5ncycgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEJhbGFuY2VUcmFuc2FjdGlvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iYWxhbmNlX3RyYW5zYWN0aW9ucy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9iYWxhbmNlX3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ2hhcmdlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY2hhcmdlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL2NoYXJnZXMve2NoYXJnZX0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2NoYXJnZXMve2NoYXJnZX0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoYXJnZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FwdHVyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NoYXJnZXMve2NoYXJnZX0vY2FwdHVyZScsXG4gICAgfSksXG4gICAgc2VhcmNoOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jaGFyZ2VzL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdzZWFyY2gnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Ub2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jb25maXJtYXRpb25fdG9rZW5zL3tjb25maXJtYXRpb25fdG9rZW59JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ291bnRyeVNwZWNzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY291bnRyeV9zcGVjcy97Y291bnRyeX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NvdW50cnlfc3BlY3MnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENvdXBvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2NvdXBvbnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9jb3Vwb25zL3tjb3Vwb259JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jb3Vwb25zL3tjb3Vwb259JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jb3Vwb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvY291cG9ucy97Y291cG9ufScgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IENyZWRpdE5vdGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMve2lkfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY3JlZGl0X25vdGVzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2NyZWRpdF9ub3RlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jcmVkaXRfbm90ZXMve2NyZWRpdF9ub3RlfS9saW5lcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0UHJldmlld0xpbmVJdGVtczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3JlZGl0X25vdGVzL3ByZXZpZXcvbGluZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcHJldmlldzogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvY3JlZGl0X25vdGVzL3ByZXZpZXcnIH0pLFxuICAgIHZvaWRDcmVkaXROb3RlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3JlZGl0X25vdGVzL3tpZH0vdm9pZCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEN1c3RvbWVyU2Vzc2lvbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVyX3Nlc3Npb25zJyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgQ3VzdG9tZXJzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0RFTEVURScsIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9JyB9KSxcbiAgICBjcmVhdGVCYWxhbmNlVHJhbnNhY3Rpb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9iYWxhbmNlX3RyYW5zYWN0aW9ucycsXG4gICAgfSksXG4gICAgY3JlYXRlRnVuZGluZ0luc3RydWN0aW9uczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2Z1bmRpbmdfaW5zdHJ1Y3Rpb25zJyxcbiAgICB9KSxcbiAgICBjcmVhdGVTb3VyY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9zb3VyY2VzJyxcbiAgICB9KSxcbiAgICBjcmVhdGVUYXhJZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3RheF9pZHMnLFxuICAgIH0pLFxuICAgIGRlbGV0ZURpc2NvdW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9kaXNjb3VudCcsXG4gICAgfSksXG4gICAgZGVsZXRlU291cmNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9zb3VyY2VzL3tpZH0nLFxuICAgIH0pLFxuICAgIGRlbGV0ZVRheElkOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS90YXhfaWRzL3tpZH0nLFxuICAgIH0pLFxuICAgIGxpc3RCYWxhbmNlVHJhbnNhY3Rpb25zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9iYWxhbmNlX3RyYW5zYWN0aW9ucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0Q2FzaEJhbGFuY2VUcmFuc2FjdGlvbnM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2Nhc2hfYmFsYW5jZV90cmFuc2FjdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgbGlzdFBheW1lbnRNZXRob2RzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9wYXltZW50X21ldGhvZHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgbGlzdFNvdXJjZXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3NvdXJjZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgbGlzdFRheElkczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vdGF4X2lkcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUJhbGFuY2VUcmFuc2FjdGlvbjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vYmFsYW5jZV90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgcmV0cmlldmVDYXNoQmFsYW5jZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vY2FzaF9iYWxhbmNlJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZUNhc2hCYWxhbmNlVHJhbnNhY3Rpb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2Nhc2hfYmFsYW5jZV90cmFuc2FjdGlvbnMve3RyYW5zYWN0aW9ufScsXG4gICAgfSksXG4gICAgcmV0cmlldmVQYXltZW50TWV0aG9kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9wYXltZW50X21ldGhvZHMve3BheW1lbnRfbWV0aG9kfScsXG4gICAgfSksXG4gICAgcmV0cmlldmVTb3VyY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L3NvdXJjZXMve2lkfScsXG4gICAgfSksXG4gICAgcmV0cmlldmVUYXhJZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vdGF4X2lkcy97aWR9JyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbiAgICB1cGRhdGVCYWxhbmNlVHJhbnNhY3Rpb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9iYWxhbmNlX3RyYW5zYWN0aW9ucy97dHJhbnNhY3Rpb259JyxcbiAgICB9KSxcbiAgICB1cGRhdGVDYXNoQmFsYW5jZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2N1c3RvbWVycy97Y3VzdG9tZXJ9L2Nhc2hfYmFsYW5jZScsXG4gICAgfSksXG4gICAgdXBkYXRlU291cmNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvY3VzdG9tZXJzL3tjdXN0b21lcn0vc291cmNlcy97aWR9JyxcbiAgICB9KSxcbiAgICB2ZXJpZnlTb3VyY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9jdXN0b21lcnMve2N1c3RvbWVyfS9zb3VyY2VzL3tpZH0vdmVyaWZ5JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRGlzcHV0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9kaXNwdXRlcy97ZGlzcHV0ZX0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2Rpc3B1dGVzL3tkaXNwdXRlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZGlzcHV0ZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2xvc2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9kaXNwdXRlcy97ZGlzcHV0ZX0vY2xvc2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFcGhlbWVyYWxLZXlzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9lcGhlbWVyYWxfa2V5cycsXG4gICAgICAgIHZhbGlkYXRvcjogKGRhdGEsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzIHx8ICFvcHRpb25zLmhlYWRlcnNbJ1N0cmlwZS1WZXJzaW9uJ10pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3NpbmcgYXBpVmVyc2lvbiBpbiBhIHNlcGFyYXRlIG9wdGlvbnMgaGFzaCBpcyByZXF1aXJlZCB0byBjcmVhdGUgYW4gZXBoZW1lcmFsIGtleS4gU2VlIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2FwaS92ZXJzaW9uaW5nP2xhbmc9bm9kZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvZXBoZW1lcmFsX2tleXMve2tleX0nIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFdmVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9ldmVudHMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZXZlbnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBFeGNoYW5nZVJhdGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvZXhjaGFuZ2VfcmF0ZXMve3JhdGVfaWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9leGNoYW5nZV9yYXRlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgRmlsZUxpbmtzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9maWxlX2xpbmtzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvZmlsZV9saW5rcy97bGlua30nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2ZpbGVfbGlua3Mve2xpbmt9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maWxlX2xpbmtzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiaW1wb3J0IHsgZmxhdHRlbkFuZFN0cmluZ2lmeSwgcXVlcnlTdHJpbmdpZnlSZXF1ZXN0RGF0YSB9IGZyb20gJy4vdXRpbHMuanMnO1xuLy8gTWV0aG9kIGZvciBmb3JtYXR0aW5nIEhUVFAgYm9keSBmb3IgdGhlIG11bHRpcGFydC9mb3JtLWRhdGEgc3BlY2lmaWNhdGlvblxuLy8gTW9zdGx5IHRha2VuIGZyb20gRmVybWF0YS5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25hdGV2dy9mZXJtYXRhL2Jsb2IvNWQ5NzMyYTMzZDc3NmNlOTI1MDEzYTI2NTkzNWZhY2QxNjI2Y2M4OC9mZXJtYXRhLmpzI0wzMTUtTDM0M1xuY29uc3QgbXVsdGlwYXJ0RGF0YUdlbmVyYXRvciA9IChtZXRob2QsIGRhdGEsIGhlYWRlcnMpID0+IHtcbiAgICBjb25zdCBzZWdubyA9IChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpKS50b1N0cmluZygpO1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7c2Vnbm99YDtcbiAgICBjb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSBuZXcgVWludDhBcnJheSgwKTtcbiAgICBjb25zdCBlbmRCdWZmZXIgPSB0ZXh0RW5jb2Rlci5lbmNvZGUoJ1xcclxcbicpO1xuICAgIGZ1bmN0aW9uIHB1c2gobCkge1xuICAgICAgICBjb25zdCBwcmV2QnVmZmVyID0gYnVmZmVyO1xuICAgICAgICBjb25zdCBuZXdCdWZmZXIgPSBsIGluc3RhbmNlb2YgVWludDhBcnJheSA/IGwgOiBuZXcgVWludDhBcnJheSh0ZXh0RW5jb2Rlci5lbmNvZGUobCkpO1xuICAgICAgICBidWZmZXIgPSBuZXcgVWludDhBcnJheShwcmV2QnVmZmVyLmxlbmd0aCArIG5ld0J1ZmZlci5sZW5ndGggKyAyKTtcbiAgICAgICAgYnVmZmVyLnNldChwcmV2QnVmZmVyKTtcbiAgICAgICAgYnVmZmVyLnNldChuZXdCdWZmZXIsIHByZXZCdWZmZXIubGVuZ3RoKTtcbiAgICAgICAgYnVmZmVyLnNldChlbmRCdWZmZXIsIGJ1ZmZlci5sZW5ndGggLSAyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcShzKSB7XG4gICAgICAgIHJldHVybiBgXCIke3MucmVwbGFjZSgvXCJ8XCIvZywgJyUyMicpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICcgJyl9XCJgO1xuICAgIH1cbiAgICBjb25zdCBmbGF0dGVuZWREYXRhID0gZmxhdHRlbkFuZFN0cmluZ2lmeShkYXRhKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gZmxhdHRlbmVkRGF0YSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmbGF0dGVuZWREYXRhLCBrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdiA9IGZsYXR0ZW5lZERhdGFba107XG4gICAgICAgIHB1c2goYC0tJHtzZWdub31gKTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2LCAnZGF0YScpKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlZEVudHJ5ID0gdjtcbiAgICAgICAgICAgIHB1c2goYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT0ke3Eoayl9OyBmaWxlbmFtZT0ke3EodHlwZWRFbnRyeS5uYW1lIHx8ICdibG9iJyl9YCk7XG4gICAgICAgICAgICBwdXNoKGBDb250ZW50LVR5cGU6ICR7dHlwZWRFbnRyeS50eXBlIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nfWApO1xuICAgICAgICAgICAgcHVzaCgnJyk7XG4gICAgICAgICAgICBwdXNoKHR5cGVkRW50cnkuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwdXNoKGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9JHtxKGspfWApO1xuICAgICAgICAgICAgcHVzaCgnJyk7XG4gICAgICAgICAgICBwdXNoKHYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1c2goYC0tJHtzZWdub30tLWApO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGFydFJlcXVlc3REYXRhUHJvY2Vzc29yKG1ldGhvZCwgZGF0YSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICBpZiAobWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHF1ZXJ5U3RyaW5naWZ5UmVxdWVzdERhdGEoZGF0YSkpO1xuICAgIH1cbiAgICB0aGlzLl9zdHJpcGUuX3BsYXRmb3JtRnVuY3Rpb25zXG4gICAgICAgIC50cnlCdWZmZXJEYXRhKGRhdGEpXG4gICAgICAgIC50aGVuKChidWZmZXJlZERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbXVsdGlwYXJ0RGF0YUdlbmVyYXRvcihtZXRob2QsIGJ1ZmZlcmVkRGF0YSwgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBidWZmZXIpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjYWxsYmFjayhlcnIsIG51bGwpKTtcbn1cbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IG11bHRpcGFydFJlcXVlc3REYXRhUHJvY2Vzc29yIH0gZnJvbSAnLi4vbXVsdGlwYXJ0LmpzJztcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEZpbGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maWxlcycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgIH0sXG4gICAgICAgIGhvc3Q6ICdmaWxlcy5zdHJpcGUuY29tJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvZmlsZXMve2ZpbGV9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9maWxlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICByZXF1ZXN0RGF0YVByb2Nlc3NvcjogbXVsdGlwYXJ0UmVxdWVzdERhdGFQcm9jZXNzb3IsXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEludm9pY2VJdGVtcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaW52b2ljZWl0ZW1zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZWl0ZW1zL3tpbnZvaWNlaXRlbX0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VpdGVtcy97aW52b2ljZWl0ZW19JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlaXRlbXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlaXRlbXMve2ludm9pY2VpdGVtfScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEludm9pY2VQYXltZW50cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VfcGF5bWVudHMve2ludm9pY2VfcGF5bWVudH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VfcGF5bWVudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IEludm9pY2VSZW5kZXJpbmdUZW1wbGF0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlX3JlbmRlcmluZ190ZW1wbGF0ZXMve3RlbXBsYXRlfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZV9yZW5kZXJpbmdfdGVtcGxhdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGFyY2hpdmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlX3JlbmRlcmluZ190ZW1wbGF0ZXMve3RlbXBsYXRlfS9hcmNoaXZlJyxcbiAgICB9KSxcbiAgICB1bmFyY2hpdmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlX3JlbmRlcmluZ190ZW1wbGF0ZXMve3RlbXBsYXRlfS91bmFyY2hpdmUnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBJbnZvaWNlcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0nIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0nIH0pLFxuICAgIGFkZExpbmVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L2FkZF9saW5lcycsXG4gICAgfSksXG4gICAgYXR0YWNoUGF5bWVudDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9hdHRhY2hfcGF5bWVudCcsXG4gICAgfSksXG4gICAgY3JlYXRlUHJldmlldzogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL2NyZWF0ZV9wcmV2aWV3JyxcbiAgICB9KSxcbiAgICBmaW5hbGl6ZUludm9pY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy97aW52b2ljZX0vZmluYWxpemUnLFxuICAgIH0pLFxuICAgIGxpc3RMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9saW5lcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBtYXJrVW5jb2xsZWN0aWJsZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9tYXJrX3VuY29sbGVjdGlibGUnLFxuICAgIH0pLFxuICAgIHBheTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9wYXknIH0pLFxuICAgIHJlbW92ZUxpbmVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L3JlbW92ZV9saW5lcycsXG4gICAgfSksXG4gICAgc2VhcmNoOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9pbnZvaWNlcy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbiAgICBzZW5kSW52b2ljZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS9zZW5kJyxcbiAgICB9KSxcbiAgICB1cGRhdGVMaW5lczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS91cGRhdGVfbGluZXMnLFxuICAgIH0pLFxuICAgIHVwZGF0ZUxpbmVJdGVtOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvaW52b2ljZXMve2ludm9pY2V9L2xpbmVzL3tsaW5lX2l0ZW1faWR9JyxcbiAgICB9KSxcbiAgICB2b2lkSW52b2ljZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL2ludm9pY2VzL3tpbnZvaWNlfS92b2lkJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgTWFuZGF0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9tYW5kYXRlcy97bWFuZGF0ZX0nIH0pLFxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5pbXBvcnQgeyBxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuY29uc3Qgb0F1dGhIb3N0ID0gJ2Nvbm5lY3Quc3RyaXBlLmNvbSc7XG5leHBvcnQgY29uc3QgT0F1dGggPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGJhc2VQYXRoOiAnLycsXG4gICAgYXV0aG9yaXplVXJsKHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBsZXQgcGF0aCA9ICdvYXV0aC9hdXRob3JpemUnO1xuICAgICAgICAvLyBGb3IgRXhwcmVzcyBhY2NvdW50cywgdGhlIHBhdGggY2hhbmdlc1xuICAgICAgICBpZiAob3B0aW9ucy5leHByZXNzKSB7XG4gICAgICAgICAgICBwYXRoID0gYGV4cHJlc3MvJHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbXMucmVzcG9uc2VfdHlwZSkge1xuICAgICAgICAgICAgcGFyYW1zLnJlc3BvbnNlX3R5cGUgPSAnY29kZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbXMuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBwYXJhbXMuY2xpZW50X2lkID0gdGhpcy5fc3RyaXBlLmdldENsaWVudElkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbXMuc2NvcGUpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zY29wZSA9ICdyZWFkX3dyaXRlJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vJHtvQXV0aEhvc3R9LyR7cGF0aH0/JHtxdWVyeVN0cmluZ2lmeVJlcXVlc3REYXRhKHBhcmFtcyl9YDtcbiAgICB9LFxuICAgIHRva2VuOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJ29hdXRoL3Rva2VuJyxcbiAgICAgICAgaG9zdDogb0F1dGhIb3N0LFxuICAgIH0pLFxuICAgIGRlYXV0aG9yaXplKHNwZWMsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFzcGVjLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgc3BlYy5jbGllbnRfaWQgPSB0aGlzLl9zdHJpcGUuZ2V0Q2xpZW50SWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgcGF0aDogJ29hdXRoL2RlYXV0aG9yaXplJyxcbiAgICAgICAgICAgIGhvc3Q6IG9BdXRoSG9zdCxcbiAgICAgICAgfSkuYXBwbHkodGhpcywgW3NwZWMsIC4uLmFyZ3NdKTtcbiAgICB9LFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50QXR0ZW1wdFJlY29yZHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2F0dGVtcHRfcmVjb3Jkcy97aWR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2F0dGVtcHRfcmVjb3JkcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGF5bWVudEludGVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy97aW50ZW50fScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYXBwbHlDdXN0b21lckJhbGFuY2U6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vYXBwbHlfY3VzdG9tZXJfYmFsYW5jZScsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9L2NhbmNlbCcsXG4gICAgfSksXG4gICAgY2FwdHVyZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy97aW50ZW50fS9jYXB0dXJlJyxcbiAgICB9KSxcbiAgICBjb25maXJtOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9L2NvbmZpcm0nLFxuICAgIH0pLFxuICAgIGluY3JlbWVudEF1dGhvcml6YXRpb246IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vaW5jcmVtZW50X2F1dGhvcml6YXRpb24nLFxuICAgIH0pLFxuICAgIGxpc3RBbW91bnREZXRhaWxzTGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2ludGVudHMve2ludGVudH0vYW1vdW50X2RldGFpbHNfbGluZV9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfaW50ZW50cy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbiAgICB2ZXJpZnlNaWNyb2RlcG9zaXRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9pbnRlbnRzL3tpbnRlbnR9L3ZlcmlmeV9taWNyb2RlcG9zaXRzJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGF5bWVudExpbmtzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wYXltZW50X2xpbmtzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9saW5rcy97cGF5bWVudF9saW5rfScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9saW5rcy97cGF5bWVudF9saW5rfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9saW5rcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X2xpbmtzL3twYXltZW50X2xpbmt9L2xpbmVfaXRlbXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2RDb25maWd1cmF0aW9ucyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfY29uZmlndXJhdGlvbnMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9jb25maWd1cmF0aW9ucy97Y29uZmlndXJhdGlvbn0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kX2NvbmZpZ3VyYXRpb25zL3tjb25maWd1cmF0aW9ufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfY29uZmlndXJhdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2REb21haW5zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZF9kb21haW5zJyxcbiAgICB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfZG9tYWlucy97cGF5bWVudF9tZXRob2RfZG9tYWlufScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfZG9tYWlucy97cGF5bWVudF9tZXRob2RfZG9tYWlufScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RfZG9tYWlucycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICB2YWxpZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kX2RvbWFpbnMve3BheW1lbnRfbWV0aG9kX2RvbWFpbn0vdmFsaWRhdGUnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50TWV0aG9kcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgY3JlYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RzL3twYXltZW50X21ldGhvZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfbWV0aG9kcy97cGF5bWVudF9tZXRob2R9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYXR0YWNoOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9tZXRob2RzL3twYXltZW50X21ldGhvZH0vYXR0YWNoJyxcbiAgICB9KSxcbiAgICBkZXRhY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X21ldGhvZHMve3BheW1lbnRfbWV0aG9kfS9kZXRhY2gnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBQYXltZW50UmVjb3JkcyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9JyB9KSxcbiAgICByZXBvcnRQYXltZW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3JlcG9ydF9wYXltZW50JyxcbiAgICB9KSxcbiAgICByZXBvcnRQYXltZW50QXR0ZW1wdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9L3JlcG9ydF9wYXltZW50X2F0dGVtcHQnLFxuICAgIH0pLFxuICAgIHJlcG9ydFBheW1lbnRBdHRlbXB0Q2FuY2VsZWQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X3JlY29yZHMve2lkfS9yZXBvcnRfcGF5bWVudF9hdHRlbXB0X2NhbmNlbGVkJyxcbiAgICB9KSxcbiAgICByZXBvcnRQYXltZW50QXR0ZW1wdEZhaWxlZDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9L3JlcG9ydF9wYXltZW50X2F0dGVtcHRfZmFpbGVkJyxcbiAgICB9KSxcbiAgICByZXBvcnRQYXltZW50QXR0ZW1wdEd1YXJhbnRlZWQ6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXltZW50X3JlY29yZHMve2lkfS9yZXBvcnRfcGF5bWVudF9hdHRlbXB0X2d1YXJhbnRlZWQnLFxuICAgIH0pLFxuICAgIHJlcG9ydFBheW1lbnRBdHRlbXB0SW5mb3JtYXRpb25hbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW1lbnRfcmVjb3Jkcy97aWR9L3JlcG9ydF9wYXltZW50X2F0dGVtcHRfaW5mb3JtYXRpb25hbCcsXG4gICAgfSksXG4gICAgcmVwb3J0UmVmdW5kOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5bWVudF9yZWNvcmRzL3tpZH0vcmVwb3J0X3JlZnVuZCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFBheW91dHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BheW91dHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9wYXlvdXRzL3twYXlvdXR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wYXlvdXRzL3twYXlvdXR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wYXlvdXRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BheW91dHMve3BheW91dH0vY2FuY2VsJyxcbiAgICB9KSxcbiAgICByZXZlcnNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcGF5b3V0cy97cGF5b3V0fS9yZXZlcnNlJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUGxhbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3BsYW5zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvcGxhbnMve3BsYW59JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wbGFucy97cGxhbn0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3BsYW5zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvcGxhbnMve3BsYW59JyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUHJpY2VzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9wcmljZXMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9wcmljZXMve3ByaWNlfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcHJpY2VzL3twcmljZX0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3ByaWNlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3ByaWNlcy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUHJvZHVjdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3Byb2R1Y3RzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvcHJvZHVjdHMve2lkfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcHJvZHVjdHMve2lkfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJvZHVjdHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgZGVsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdERUxFVEUnLCBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97aWR9JyB9KSxcbiAgICBjcmVhdGVGZWF0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJvZHVjdHMve3Byb2R1Y3R9L2ZlYXR1cmVzJyxcbiAgICB9KSxcbiAgICBkZWxldGVGZWF0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97cHJvZHVjdH0vZmVhdHVyZXMve2lkfScsXG4gICAgfSksXG4gICAgbGlzdEZlYXR1cmVzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97cHJvZHVjdH0vZmVhdHVyZXMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmV0cmlldmVGZWF0dXJlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy97cHJvZHVjdH0vZmVhdHVyZXMve2lkfScsXG4gICAgfSksXG4gICAgc2VhcmNoOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9kdWN0cy9zZWFyY2gnLFxuICAgICAgICBtZXRob2RUeXBlOiAnc2VhcmNoJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUHJvbW90aW9uQ29kZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3Byb21vdGlvbl9jb2RlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Byb21vdGlvbl9jb2Rlcy97cHJvbW90aW9uX2NvZGV9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9wcm9tb3Rpb25fY29kZXMve3Byb21vdGlvbl9jb2RlfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcHJvbW90aW9uX2NvZGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBRdW90ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3F1b3RlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3F1b3Rlcy97cXVvdGV9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9xdW90ZXMve3F1b3RlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcXVvdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGFjY2VwdDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3F1b3Rlcy97cXVvdGV9L2FjY2VwdCcgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0vY2FuY2VsJyB9KSxcbiAgICBmaW5hbGl6ZVF1b3RlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0vZmluYWxpemUnLFxuICAgIH0pLFxuICAgIGxpc3RDb21wdXRlZFVwZnJvbnRMaW5lSXRlbXM6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3F1b3Rlcy97cXVvdGV9L2NvbXB1dGVkX3VwZnJvbnRfbGluZV9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBsaXN0TGluZUl0ZW1zOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9xdW90ZXMve3F1b3RlfS9saW5lX2l0ZW1zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHBkZjogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvcXVvdGVzL3txdW90ZX0vcGRmJyxcbiAgICAgICAgaG9zdDogJ2ZpbGVzLnN0cmlwZS5jb20nLFxuICAgICAgICBzdHJlYW1pbmc6IHRydWUsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFJlZnVuZHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3JlZnVuZHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS9yZWZ1bmRzL3tyZWZ1bmR9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9yZWZ1bmRzL3tyZWZ1bmR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9yZWZ1bmRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3JlZnVuZHMve3JlZnVuZH0vY2FuY2VsJyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgUmV2aWV3cyA9IFN0cmlwZVJlc291cmNlLmV4dGVuZCh7XG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3Jldmlld3Mve3Jldmlld30nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Jldmlld3MnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgYXBwcm92ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3Jldmlld3Mve3Jldmlld30vYXBwcm92ZScsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNldHVwQXR0ZW1wdHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2F0dGVtcHRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTZXR1cEludGVudHMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2ludGVudHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zZXR1cF9pbnRlbnRzL3tpbnRlbnR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zZXR1cF9pbnRlbnRzL3tpbnRlbnR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zZXR1cF9pbnRlbnRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNhbmNlbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NldHVwX2ludGVudHMve2ludGVudH0vY2FuY2VsJyxcbiAgICB9KSxcbiAgICBjb25maXJtOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2V0dXBfaW50ZW50cy97aW50ZW50fS9jb25maXJtJyxcbiAgICB9KSxcbiAgICB2ZXJpZnlNaWNyb2RlcG9zaXRzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2V0dXBfaW50ZW50cy97aW50ZW50fS92ZXJpZnlfbWljcm9kZXBvc2l0cycsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFNoaXBwaW5nUmF0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3NoaXBwaW5nX3JhdGVzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc2hpcHBpbmdfcmF0ZXMve3NoaXBwaW5nX3JhdGVfdG9rZW59JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zaGlwcGluZ19yYXRlcy97c2hpcHBpbmdfcmF0ZV90b2tlbn0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NoaXBwaW5nX3JhdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTb3VyY2VzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9zb3VyY2VzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvc291cmNlcy97c291cmNlfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvc291cmNlcy97c291cmNlfScgfSksXG4gICAgbGlzdFNvdXJjZVRyYW5zYWN0aW9uczogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc291cmNlcy97c291cmNlfS9zb3VyY2VfdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIHZlcmlmeTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3NvdXJjZXMve3NvdXJjZX0vdmVyaWZ5JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgU3Vic2NyaXB0aW9uSXRlbXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9pdGVtcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9pdGVtcy97aXRlbX0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9pdGVtcy97aXRlbX0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9pdGVtcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9pdGVtcy97aXRlbX0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTdWJzY3JpcHRpb25TY2hlZHVsZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9zY2hlZHVsZXMnLFxuICAgIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25fc2NoZWR1bGVzL3tzY2hlZHVsZX0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbl9zY2hlZHVsZXMve3NjaGVkdWxlfScsXG4gICAgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX3NjaGVkdWxlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25fc2NoZWR1bGVzL3tzY2hlZHVsZX0vY2FuY2VsJyxcbiAgICB9KSxcbiAgICByZWxlYXNlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9uX3NjaGVkdWxlcy97c2NoZWR1bGV9L3JlbGVhc2UnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBTdWJzY3JpcHRpb25zID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvc3Vic2NyaXB0aW9ucy97c3Vic2NyaXB0aW9uX2V4cG9zZWRfaWR9JyxcbiAgICB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zL3tzdWJzY3JpcHRpb25fZXhwb3NlZF9pZH0nLFxuICAgIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgY2FuY2VsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zL3tzdWJzY3JpcHRpb25fZXhwb3NlZF9pZH0nLFxuICAgIH0pLFxuICAgIGRlbGV0ZURpc2NvdW50OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zL3tzdWJzY3JpcHRpb25fZXhwb3NlZF9pZH0vZGlzY291bnQnLFxuICAgIH0pLFxuICAgIG1pZ3JhdGU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS9zdWJzY3JpcHRpb25zL3tzdWJzY3JpcHRpb259L21pZ3JhdGUnLFxuICAgIH0pLFxuICAgIHJlc3VtZTogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMve3N1YnNjcmlwdGlvbn0vcmVzdW1lJyxcbiAgICB9KSxcbiAgICBzZWFyY2g6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3N1YnNjcmlwdGlvbnMvc2VhcmNoJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ3NlYXJjaCcsXG4gICAgfSksXG59KTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWNcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi4vU3RyaXBlUmVzb3VyY2UuanMnO1xuY29uc3Qgc3RyaXBlTWV0aG9kID0gU3RyaXBlUmVzb3VyY2UubWV0aG9kO1xuZXhwb3J0IGNvbnN0IFRheENvZGVzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdGF4X2NvZGVzL3tpZH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RheF9jb2RlcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVGF4SWRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90YXhfaWRzJyB9KSxcbiAgICByZXRyaWV2ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnR0VUJywgZnVsbFBhdGg6ICcvdjEvdGF4X2lkcy97aWR9JyB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90YXhfaWRzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGRlbDogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnREVMRVRFJywgZnVsbFBhdGg6ICcvdjEvdGF4X2lkcy97aWR9JyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVGF4UmF0ZXMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RheF9yYXRlcycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3RheF9yYXRlcy97dGF4X3JhdGV9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90YXhfcmF0ZXMve3RheF9yYXRlfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdGF4X3JhdGVzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUb2tlbnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3Rva2VucycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3Rva2Vucy97dG9rZW59JyB9KSxcbn0pO1xuIiwgIi8vIEZpbGUgZ2VuZXJhdGVkIGZyb20gb3VyIE9wZW5BUEkgc3BlY1xuaW1wb3J0IHsgU3RyaXBlUmVzb3VyY2UgfSBmcm9tICcuLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5jb25zdCBzdHJpcGVNZXRob2QgPSBTdHJpcGVSZXNvdXJjZS5tZXRob2Q7XG5leHBvcnQgY29uc3QgVG9wdXBzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90b3B1cHMnIH0pLFxuICAgIHJldHJpZXZlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdHRVQnLCBmdWxsUGF0aDogJy92MS90b3B1cHMve3RvcHVwfScgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2QoeyBtZXRob2Q6ICdQT1NUJywgZnVsbFBhdGg6ICcvdjEvdG9wdXBzL3t0b3B1cH0nIH0pLFxuICAgIGxpc3Q6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3RvcHVwcycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBjYW5jZWw6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90b3B1cHMve3RvcHVwfS9jYW5jZWwnIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBUcmFuc2ZlcnMgPSBTdHJpcGVSZXNvdXJjZS5leHRlbmQoe1xuICAgIGNyZWF0ZTogc3RyaXBlTWV0aG9kKHsgbWV0aG9kOiAnUE9TVCcsIGZ1bGxQYXRoOiAnL3YxL3RyYW5zZmVycycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ0dFVCcsIGZ1bGxQYXRoOiAnL3YxL3RyYW5zZmVycy97dHJhbnNmZXJ9JyB9KSxcbiAgICB1cGRhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMve3RyYW5zZmVyfScgfSksXG4gICAgbGlzdDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzJyxcbiAgICAgICAgbWV0aG9kVHlwZTogJ2xpc3QnLFxuICAgIH0pLFxuICAgIGNyZWF0ZVJldmVyc2FsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzL3tpZH0vcmV2ZXJzYWxzJyxcbiAgICB9KSxcbiAgICBsaXN0UmV2ZXJzYWxzOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS90cmFuc2ZlcnMve2lkfS9yZXZlcnNhbHMnLFxuICAgICAgICBtZXRob2RUeXBlOiAnbGlzdCcsXG4gICAgfSksXG4gICAgcmV0cmlldmVSZXZlcnNhbDogc3RyaXBlTWV0aG9kKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzL3t0cmFuc2Zlcn0vcmV2ZXJzYWxzL3tpZH0nLFxuICAgIH0pLFxuICAgIHVwZGF0ZVJldmVyc2FsOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvdHJhbnNmZXJzL3t0cmFuc2Zlcn0vcmV2ZXJzYWxzL3tpZH0nLFxuICAgIH0pLFxufSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjXG5pbXBvcnQgeyBTdHJpcGVSZXNvdXJjZSB9IGZyb20gJy4uL1N0cmlwZVJlc291cmNlLmpzJztcbmNvbnN0IHN0cmlwZU1ldGhvZCA9IFN0cmlwZVJlc291cmNlLm1ldGhvZDtcbmV4cG9ydCBjb25zdCBXZWJob29rRW5kcG9pbnRzID0gU3RyaXBlUmVzb3VyY2UuZXh0ZW5kKHtcbiAgICBjcmVhdGU6IHN0cmlwZU1ldGhvZCh7IG1ldGhvZDogJ1BPU1QnLCBmdWxsUGF0aDogJy92MS93ZWJob29rX2VuZHBvaW50cycgfSksXG4gICAgcmV0cmlldmU6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3dlYmhvb2tfZW5kcG9pbnRzL3t3ZWJob29rX2VuZHBvaW50fScsXG4gICAgfSksXG4gICAgdXBkYXRlOiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZnVsbFBhdGg6ICcvdjEvd2ViaG9va19lbmRwb2ludHMve3dlYmhvb2tfZW5kcG9pbnR9JyxcbiAgICB9KSxcbiAgICBsaXN0OiBzdHJpcGVNZXRob2Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBmdWxsUGF0aDogJy92MS93ZWJob29rX2VuZHBvaW50cycsXG4gICAgICAgIG1ldGhvZFR5cGU6ICdsaXN0JyxcbiAgICB9KSxcbiAgICBkZWw6IHN0cmlwZU1ldGhvZCh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGZ1bGxQYXRoOiAnL3YxL3dlYmhvb2tfZW5kcG9pbnRzL3t3ZWJob29rX2VuZHBvaW50fScsXG4gICAgfSksXG59KTtcbiIsICJpbXBvcnQgKiBhcyBfRXJyb3IgZnJvbSAnLi9FcnJvci5qcyc7XG5pbXBvcnQgeyBSZXF1ZXN0U2VuZGVyIH0gZnJvbSAnLi9SZXF1ZXN0U2VuZGVyLmpzJztcbmltcG9ydCB7IFN0cmlwZVJlc291cmNlIH0gZnJvbSAnLi9TdHJpcGVSZXNvdXJjZS5qcyc7XG5pbXBvcnQgeyBTdHJpcGVDb250ZXh0IH0gZnJvbSAnLi9TdHJpcGVDb250ZXh0LmpzJztcbmltcG9ydCB7IGNyZWF0ZVdlYmhvb2tzIH0gZnJvbSAnLi9XZWJob29rcy5qcyc7XG5pbXBvcnQgeyBBcGlWZXJzaW9uIH0gZnJvbSAnLi9hcGlWZXJzaW9uLmpzJztcbmltcG9ydCB7IENyeXB0b1Byb3ZpZGVyIH0gZnJvbSAnLi9jcnlwdG8vQ3J5cHRvUHJvdmlkZXIuanMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi9uZXQvSHR0cENsaWVudC5qcyc7XG5pbXBvcnQgKiBhcyByZXNvdXJjZXMgZnJvbSAnLi9yZXNvdXJjZXMuanMnO1xuaW1wb3J0IHsgY3JlYXRlQXBpS2V5QXV0aGVudGljYXRvciwgZGV0ZXJtaW5lUHJvY2Vzc1VzZXJBZ2VudFByb3BlcnRpZXMsIHBhc2NhbFRvQ2FtZWxDYXNlLCB2YWxpZGF0ZUludGVnZXIsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5jb25zdCBERUZBVUxUX0hPU1QgPSAnYXBpLnN0cmlwZS5jb20nO1xuY29uc3QgREVGQVVMVF9QT1JUID0gJzQ0Myc7XG5jb25zdCBERUZBVUxUX0JBU0VfUEFUSCA9ICcvdjEvJztcbmNvbnN0IERFRkFVTFRfQVBJX1ZFUlNJT04gPSBBcGlWZXJzaW9uO1xuY29uc3QgREVGQVVMVF9USU1FT1VUID0gODAwMDA7XG5jb25zdCBNQVhfTkVUV09SS19SRVRSWV9ERUxBWV9TRUMgPSA1O1xuY29uc3QgSU5JVElBTF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQyA9IDAuNTtcbmNvbnN0IEFQUF9JTkZPX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAndmVyc2lvbicsICd1cmwnLCAncGFydG5lcl9pZCddO1xuY29uc3QgQUxMT1dFRF9DT05GSUdfUFJPUEVSVElFUyA9IFtcbiAgICAnYXV0aGVudGljYXRvcicsXG4gICAgJ2FwaVZlcnNpb24nLFxuICAgICd0eXBlc2NyaXB0JyxcbiAgICAnbWF4TmV0d29ya1JldHJpZXMnLFxuICAgICdodHRwQWdlbnQnLFxuICAgICdodHRwQ2xpZW50JyxcbiAgICAndGltZW91dCcsXG4gICAgJ2hvc3QnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICd0ZWxlbWV0cnknLFxuICAgICdhcHBJbmZvJyxcbiAgICAnc3RyaXBlQWNjb3VudCcsXG4gICAgJ3N0cmlwZUNvbnRleHQnLFxuXTtcbmNvbnN0IGRlZmF1bHRSZXF1ZXN0U2VuZGVyRmFjdG9yeSA9IChzdHJpcGUpID0+IG5ldyBSZXF1ZXN0U2VuZGVyKHN0cmlwZSwgU3RyaXBlUmVzb3VyY2UuTUFYX0JVRkZFUkVEX1JFUVVFU1RfTUVUUklDUyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyaXBlKHBsYXRmb3JtRnVuY3Rpb25zLCByZXF1ZXN0U2VuZGVyID0gZGVmYXVsdFJlcXVlc3RTZW5kZXJGYWN0b3J5KSB7XG4gICAgU3RyaXBlLlBBQ0tBR0VfVkVSU0lPTiA9ICcyMC4zLjEnO1xuICAgIFN0cmlwZS5BUElfVkVSU0lPTiA9IEFwaVZlcnNpb247XG4gICAgU3RyaXBlLlVTRVJfQUdFTlQgPSBPYmplY3QuYXNzaWduKHsgYmluZGluZ3NfdmVyc2lvbjogU3RyaXBlLlBBQ0tBR0VfVkVSU0lPTiwgbGFuZzogJ25vZGUnLCBwdWJsaXNoZXI6ICdzdHJpcGUnLCB1bmFtZTogbnVsbCwgdHlwZXNjcmlwdDogZmFsc2UgfSwgZGV0ZXJtaW5lUHJvY2Vzc1VzZXJBZ2VudFByb3BlcnRpZXMoKSk7XG4gICAgU3RyaXBlLlN0cmlwZVJlc291cmNlID0gU3RyaXBlUmVzb3VyY2U7XG4gICAgU3RyaXBlLlN0cmlwZUNvbnRleHQgPSBTdHJpcGVDb250ZXh0O1xuICAgIFN0cmlwZS5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgU3RyaXBlLkh0dHBDbGllbnQgPSBIdHRwQ2xpZW50O1xuICAgIFN0cmlwZS5IdHRwQ2xpZW50UmVzcG9uc2UgPSBIdHRwQ2xpZW50UmVzcG9uc2U7XG4gICAgU3RyaXBlLkNyeXB0b1Byb3ZpZGVyID0gQ3J5cHRvUHJvdmlkZXI7XG4gICAgU3RyaXBlLndlYmhvb2tzID0gY3JlYXRlV2ViaG9va3MocGxhdGZvcm1GdW5jdGlvbnMpO1xuICAgIGZ1bmN0aW9uIFN0cmlwZShrZXksIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdHJpcGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmlwZShrZXksIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLl9nZXRQcm9wc0Zyb21Db25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5fcGxhdGZvcm1GdW5jdGlvbnMgPSBwbGF0Zm9ybUZ1bmN0aW9ucztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZW1pdHRlcicsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9wbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVFbWl0dGVyKCksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLlZFUlNJT04gPSBTdHJpcGUuUEFDS0FHRV9WRVJTSU9OO1xuICAgICAgICB0aGlzLm9uID0gdGhpcy5fZW1pdHRlci5vbi5iaW5kKHRoaXMuX2VtaXR0ZXIpO1xuICAgICAgICB0aGlzLm9uY2UgPSB0aGlzLl9lbWl0dGVyLm9uY2UuYmluZCh0aGlzLl9lbWl0dGVyKTtcbiAgICAgICAgdGhpcy5vZmYgPSB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyLmJpbmQodGhpcy5fZW1pdHRlcik7XG4gICAgICAgIGNvbnN0IGFnZW50ID0gcHJvcHMuaHR0cEFnZW50IHx8IG51bGw7XG4gICAgICAgIHRoaXMuX2FwaSA9IHtcbiAgICAgICAgICAgIGhvc3Q6IHByb3BzLmhvc3QgfHwgREVGQVVMVF9IT1NULFxuICAgICAgICAgICAgcG9ydDogcHJvcHMucG9ydCB8fCBERUZBVUxUX1BPUlQsXG4gICAgICAgICAgICBwcm90b2NvbDogcHJvcHMucHJvdG9jb2wgfHwgJ2h0dHBzJyxcbiAgICAgICAgICAgIGJhc2VQYXRoOiBERUZBVUxUX0JBU0VfUEFUSCxcbiAgICAgICAgICAgIHZlcnNpb246IHByb3BzLmFwaVZlcnNpb24gfHwgREVGQVVMVF9BUElfVkVSU0lPTixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHZhbGlkYXRlSW50ZWdlcigndGltZW91dCcsIHByb3BzLnRpbWVvdXQsIERFRkFVTFRfVElNRU9VVCksXG4gICAgICAgICAgICBtYXhOZXR3b3JrUmV0cmllczogdmFsaWRhdGVJbnRlZ2VyKCdtYXhOZXR3b3JrUmV0cmllcycsIHByb3BzLm1heE5ldHdvcmtSZXRyaWVzLCAyKSxcbiAgICAgICAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgICAgICAgIGh0dHBDbGllbnQ6IHByb3BzLmh0dHBDbGllbnQgfHxcbiAgICAgICAgICAgICAgICAoYWdlbnRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9wbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVOb2RlSHR0cENsaWVudChhZ2VudClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9wbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVEZWZhdWx0SHR0cENsaWVudCgpKSxcbiAgICAgICAgICAgIGRldjogZmFsc2UsXG4gICAgICAgICAgICBzdHJpcGVBY2NvdW50OiBwcm9wcy5zdHJpcGVBY2NvdW50IHx8IG51bGwsXG4gICAgICAgICAgICBzdHJpcGVDb250ZXh0OiBwcm9wcy5zdHJpcGVDb250ZXh0IHx8IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHR5cGVzY3JpcHQgPSBwcm9wcy50eXBlc2NyaXB0IHx8IGZhbHNlO1xuICAgICAgICBpZiAodHlwZXNjcmlwdCAhPT0gU3RyaXBlLlVTRVJfQUdFTlQudHlwZXNjcmlwdCkge1xuICAgICAgICAgICAgLy8gVGhlIG11dGF0aW9uIGhlcmUgaXMgdW5jb21mb3J0YWJsZSwgYnV0IGxpa2VseSBmYXN0ZXN0O1xuICAgICAgICAgICAgLy8gc2VyaWFsaXppbmcgdGhlIHVzZXIgYWdlbnQgaW52b2x2ZXMgc2hlbGxpbmcgb3V0IHRvIHRoZSBzeXN0ZW0sXG4gICAgICAgICAgICAvLyBhbmQgZ2l2ZW4gc29tZSB1c2VycyBtYXkgaW5zdGFudGlhdGUgdGhlIGxpYnJhcnkgbWFueSB0aW1lcyB3aXRob3V0IHN3aXRjaGluZyBiZXR3ZWVuIFRTIGFuZCBub24tVFMsXG4gICAgICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gaW5jdXIgdGhlIHBlcmZvcm1hbmNlIGhpdCB3aGVuIHRoYXQgYWN0dWFsbHkgaGFwcGVucy5cbiAgICAgICAgICAgIFN0cmlwZS5VU0VSX0FHRU5ULnR5cGVzY3JpcHQgPSB0eXBlc2NyaXB0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5hcHBJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRBcHBJbmZvKHByb3BzLmFwcEluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXBSZXNvdXJjZXMoKTtcbiAgICAgICAgdGhpcy5fc2V0QXV0aGVudGljYXRvcihrZXksIHByb3BzLmF1dGhlbnRpY2F0b3IpO1xuICAgICAgICB0aGlzLmVycm9ycyA9IF9FcnJvcjtcbiAgICAgICAgdGhpcy53ZWJob29rcyA9IFN0cmlwZS53ZWJob29rcztcbiAgICAgICAgdGhpcy5fcHJldlJlcXVlc3RNZXRyaWNzID0gW107XG4gICAgICAgIHRoaXMuX2VuYWJsZVRlbGVtZXRyeSA9IHByb3BzLnRlbGVtZXRyeSAhPT0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RTZW5kZXIgPSByZXF1ZXN0U2VuZGVyKHRoaXMpO1xuICAgICAgICAvLyBFeHBvc2UgU3RyaXBlUmVzb3VyY2Ugb24gdGhlIGluc3RhbmNlIHRvb1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuU3RyaXBlUmVzb3VyY2UgPSBTdHJpcGUuU3RyaXBlUmVzb3VyY2U7XG4gICAgfVxuICAgIFN0cmlwZS5lcnJvcnMgPSBfRXJyb3I7XG4gICAgU3RyaXBlLmNyZWF0ZU5vZGVIdHRwQ2xpZW50ID0gcGxhdGZvcm1GdW5jdGlvbnMuY3JlYXRlTm9kZUh0dHBDbGllbnQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBIVFRQIGNsaWVudCBmb3IgaXNzdWluZyBTdHJpcGUgQVBJIHJlcXVlc3RzIHdoaWNoIHVzZXMgdGhlIFdlYlxuICAgICAqIEZldGNoIEFQSS5cbiAgICAgKlxuICAgICAqIEEgZmV0Y2ggZnVuY3Rpb24gY2FuIG9wdGlvbmFsbHkgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1ldGVyLiBJZiBub25lIGlzXG4gICAgICogcGFzc2VkLCB3aWxsIGRlZmF1bHQgdG8gdGhlIGRlZmF1bHQgYGZldGNoYCBmdW5jdGlvbiBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuICAgICAqL1xuICAgIFN0cmlwZS5jcmVhdGVGZXRjaEh0dHBDbGllbnQgPSBwbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVGZXRjaEh0dHBDbGllbnQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgQ3J5cHRvUHJvdmlkZXIgd2hpY2ggdXNlcyB0aGUgYnVpbHQtaW4gTm9kZSBjcnlwdG8gbGlicmFyaWVzIGZvclxuICAgICAqIGl0cyBjcnlwdG8gb3BlcmF0aW9ucy5cbiAgICAgKi9cbiAgICBTdHJpcGUuY3JlYXRlTm9kZUNyeXB0b1Byb3ZpZGVyID0gcGxhdGZvcm1GdW5jdGlvbnMuY3JlYXRlTm9kZUNyeXB0b1Byb3ZpZGVyO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBDcnlwdG9Qcm92aWRlciB3aGljaCB1c2VzIHRoZSBTdWJ0bGUgQ3J5cHRvIEFQSSBmcm9tIHRoZSBXZWJcbiAgICAgKiBDcnlwdG8gQVBJIHNwZWMgZm9yIGl0cyBjcnlwdG8gb3BlcmF0aW9ucy5cbiAgICAgKlxuICAgICAqIEEgU3VidGxlQ3J5cHRvIGludGVyZmFjZSBjYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIuIElmIG5vbmVcbiAgICAgKiBpcyBwYXNzZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgZGVmYXVsdCBgY3J5cHRvLnN1YnRsZWAgb2JqZWN0IGluIHRoZSBnbG9iYWxcbiAgICAgKiBzY29wZS5cbiAgICAgKi9cbiAgICBTdHJpcGUuY3JlYXRlU3VidGxlQ3J5cHRvUHJvdmlkZXIgPVxuICAgICAgICBwbGF0Zm9ybUZ1bmN0aW9ucy5jcmVhdGVTdWJ0bGVDcnlwdG9Qcm92aWRlcjtcbiAgICBTdHJpcGUucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBQcm9wZXJ0aWVzIGFyZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIGFib3ZlXG4gICAgICAgIF9hcHBJbmZvOiB1bmRlZmluZWQsXG4gICAgICAgIG9uOiBudWxsLFxuICAgICAgICBvZmY6IG51bGwsXG4gICAgICAgIG9uY2U6IG51bGwsXG4gICAgICAgIFZFUlNJT046IG51bGwsXG4gICAgICAgIFN0cmlwZVJlc291cmNlOiBudWxsLFxuICAgICAgICB3ZWJob29rczogbnVsbCxcbiAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICBfYXBpOiBudWxsLFxuICAgICAgICBfcHJldlJlcXVlc3RNZXRyaWNzOiBudWxsLFxuICAgICAgICBfZW1pdHRlcjogbnVsbCxcbiAgICAgICAgX2VuYWJsZVRlbGVtZXRyeTogbnVsbCxcbiAgICAgICAgX3JlcXVlc3RTZW5kZXI6IG51bGwsXG4gICAgICAgIF9wbGF0Zm9ybUZ1bmN0aW9uczogbnVsbCxcbiAgICAgICAgcmF3UmVxdWVzdChtZXRob2QsIHBhdGgsIHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RTZW5kZXIuX3Jhd1JlcXVlc3QobWV0aG9kLCBwYXRoLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9zZXRBdXRoZW50aWNhdG9yKGtleSwgYXV0aGVudGljYXRvcikge1xuICAgICAgICAgICAgaWYgKGtleSAmJiBhdXRoZW50aWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3BlY2lmeSBib3RoIGFwaUtleSBhbmQgYXV0aGVudGljYXRvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgha2V5ICYmICFhdXRoZW50aWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWl0aGVyIGFwaUtleSBub3IgY29uZmlnLmF1dGhlbnRpY2F0b3IgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0b3IgPSBrZXlcbiAgICAgICAgICAgICAgICA/IGNyZWF0ZUFwaUtleUF1dGhlbnRpY2F0b3Ioa2V5KVxuICAgICAgICAgICAgICAgIDogYXV0aGVudGljYXRvcjtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFRoaXMgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIF9zZXRBcHBJbmZvKGluZm8pIHtcbiAgICAgICAgICAgIGlmIChpbmZvICYmIHR5cGVvZiBpbmZvICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXBwSW5mbyBtdXN0IGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmZvICYmICFpbmZvLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcEluZm8ubmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5mbyA9IGluZm8gfHwge307XG4gICAgICAgICAgICB0aGlzLl9hcHBJbmZvID0gQVBQX0lORk9fUFJPUEVSVElFUy5yZWR1Y2UoKGFjY3VtLCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmZvW3Byb3BdID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtID0gYWNjdW0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW3Byb3BdID0gaW5mb1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogVGhpcyBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgX3NldEFwaUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwaVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGVcbiAgICAgICAgICogaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldEFwaUZpZWxkKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVtrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXRDbGllbnRJZChjbGllbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2xpZW50SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGVcbiAgICAgICAgICogaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldENvbnN0YW50OiAoYykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnREVGQVVMVF9IT1NUJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERFRkFVTFRfSE9TVDtcbiAgICAgICAgICAgICAgICBjYXNlICdERUZBVUxUX1BPUlQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9QT1JUO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RFRkFVTFRfQkFTRV9QQVRIJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERFRkFVTFRfQkFTRV9QQVRIO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RFRkFVTFRfQVBJX1ZFUlNJT04nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9BUElfVkVSU0lPTjtcbiAgICAgICAgICAgICAgICBjYXNlICdERUZBVUxUX1RJTUVPVVQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9USU1FT1VUO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01BWF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNQVhfTkVUV09SS19SRVRSWV9ERUxBWV9TRUM7XG4gICAgICAgICAgICAgICAgY2FzZSAnSU5JVElBTF9ORVRXT1JLX1JFVFJZX0RFTEFZX1NFQyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTklUSUFMX05FVFdPUktfUkVUUllfREVMQVlfU0VDO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmlwZVtjXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TWF4TmV0d29ya1JldHJpZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlGaWVsZCgnbWF4TmV0d29ya1JldHJpZXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIFRoaXMgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIF9zZXRBcGlOdW1iZXJGaWVsZChwcm9wLCBuLCBkZWZhdWx0VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB2YWxpZGF0ZUludGVnZXIocHJvcCwgbiwgZGVmYXVsdFZhbCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRBcGlGaWVsZChwcm9wLCB2YWwpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRNYXhOZXR3b3JrUmV0cnlEZWxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiBNQVhfTkVUV09SS19SRVRSWV9ERUxBWV9TRUM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluaXRpYWxOZXR3b3JrUmV0cnlEZWxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiBJTklUSUFMX05FVFdPUktfUkVUUllfREVMQVlfU0VDO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogUGxlYXNlIG9wZW4gb3IgdXB2b3RlIGFuIGlzc3VlIGF0IGdpdGh1Yi5jb20vc3RyaXBlL3N0cmlwZS1ub2RlXG4gICAgICAgICAqIGlmIHlvdSB1c2UgdGhpcywgZGV0YWlsaW5nIHlvdXIgdXNlLWNhc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEl0IG1heSBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEdldHMgYSBKU09OIHZlcnNpb24gb2YgYSBVc2VyLUFnZW50IGFuZCB1c2VzIGEgY2FjaGVkIHZlcnNpb24gZm9yIGEgc2xpZ2h0XG4gICAgICAgICAqIHNwZWVkIGFkdmFudGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldENsaWVudFVzZXJBZ2VudChjYikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VXNlckFnZW50U2VlZGVkKFN0cmlwZS5VU0VSX0FHRU5ULCBjYik7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGVcbiAgICAgICAgICogaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICpcbiAgICAgICAgICogR2V0cyBhIEpTT04gdmVyc2lvbiBvZiBhIFVzZXItQWdlbnQgYnkgZW5jb2RpbmcgYSBzZWVkZWQgb2JqZWN0IGFuZFxuICAgICAgICAgKiBmZXRjaGluZyBhIHVuYW1lIGZyb20gdGhlIHN5c3RlbS5cbiAgICAgICAgICovXG4gICAgICAgIGdldENsaWVudFVzZXJBZ2VudFNlZWRlZChzZWVkLCBjYikge1xuICAgICAgICAgICAgdGhpcy5fcGxhdGZvcm1GdW5jdGlvbnMuZ2V0VW5hbWUoKS50aGVuKCh1bmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHNlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VlZCwgZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnRbZmllbGRdID0gZW5jb2RlVVJJQ29tcG9uZW50KChfYSA9IHNlZWRbZmllbGRdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnbnVsbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBVUkktZW5jb2RlIGluIGNhc2UgdGhlcmUgYXJlIHVudXN1YWwgY2hhcmFjdGVycyBpbiB0aGUgc3lzdGVtJ3MgdW5hbWUuXG4gICAgICAgICAgICAgICAgdXNlckFnZW50LnVuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KHVuYW1lIHx8ICdVTktOT1dOJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5nZXRBcGlGaWVsZCgnaHR0cENsaWVudCcpO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50Lmh0dHBsaWIgPSBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50LmdldENsaWVudE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcHBJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudC5hcHBsaWNhdGlvbiA9IHRoaXMuX2FwcEluZm87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNiKEpTT04uc3RyaW5naWZ5KHVzZXJBZ2VudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBQbGVhc2Ugb3BlbiBvciB1cHZvdGUgYW4gaXNzdWUgYXQgZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGVcbiAgICAgICAgICogaWYgeW91IHVzZSB0aGlzLCBkZXRhaWxpbmcgeW91ciB1c2UtY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldEFwcEluZm9Bc1N0cmluZygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXBwSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWQgPSB0aGlzLl9hcHBJbmZvLm5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXBwSW5mby52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkICs9IGAvJHt0aGlzLl9hcHBJbmZvLnZlcnNpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9hcHBJbmZvLnVybCkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCArPSBgICgke3RoaXMuX2FwcEluZm8udXJsfSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGVsZW1ldHJ5RW5hYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmFibGVUZWxlbWV0cnk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBUaGlzIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAqL1xuICAgICAgICBfcHJlcFJlc291cmNlcygpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXNvdXJjZXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpc1twYXNjYWxUb0NhbWVsQ2FzZShuYW1lKV0gPSBuZXcgcmVzb3VyY2VzW25hbWVdKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogVGhpcyBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgX2dldFByb3BzRnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgICAgIC8vIElmIGNvbmZpZyBpcyBudWxsIG9yIHVuZGVmaW5lZCwganVzdCBiYWlsIGVhcmx5IHdpdGggbm8gcHJvcHNcbiAgICAgICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uZmlnIGNhbiBiZSBhbiBvYmplY3Qgb3IgYSBzdHJpbmdcbiAgICAgICAgICAgIGNvbnN0IGlzU3RyaW5nID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZyc7XG4gICAgICAgICAgICBjb25zdCBpc09iamVjdCA9IGNvbmZpZyA9PT0gT2JqZWN0KGNvbmZpZykgJiYgIUFycmF5LmlzQXJyYXkoY29uZmlnKTtcbiAgICAgICAgICAgIGlmICghaXNPYmplY3QgJiYgIWlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25maWcgbXVzdCBlaXRoZXIgYmUgYW4gb2JqZWN0IG9yIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBjb25maWcgaXMgYSBzdHJpbmcsIHdlIGFzc3VtZSB0aGUgb2xkIGJlaGF2aW9yIG9mIHBhc3NpbmcgaW4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFwaSB2ZXJzaW9uXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhcGlWZXJzaW9uOiBjb25maWcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGNvbmZpZyBpcyBhbiBvYmplY3QsIHdlIGFzc3VtZSB0aGUgbmV3IGJlaGF2aW9yIGFuZCBtYWtlIHN1cmUgaXQgZG9lc24ndCBjb250YWluIGFueSB1bmV4cGVjdGVkIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmtleXMoY29uZmlnKS5maWx0ZXIoKHZhbHVlKSA9PiAhQUxMT1dFRF9DT05GSUdfUFJPUEVSVElFUy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25maWcgb2JqZWN0IG1heSBvbmx5IGNvbnRhaW4gdGhlIGZvbGxvd2luZzogJHtBTExPV0VEX0NPTkZJR19QUk9QRVJUSUVTLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICBwYXJzZUV2ZW50Tm90aWZpY2F0aW9uKHBheWxvYWQsIGhlYWRlciwgc2VjcmV0LCB0b2xlcmFuY2UsIGNyeXB0b1Byb3ZpZGVyLCByZWNlaXZlZEF0XG4gICAgICAgIC8vIHRoaXMgcmV0dXJuIHR5cGUgaXMgaWdub3JlZD8/IHBpY2tzIHVwIHR5cGVzIGZyb20gYHR5cGVzL2luZGV4LmQudHNgIGluc3RlYWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBwYXJzZXMgYW5kIHZhbGlkYXRlcyB0aGUgZXZlbnQgcGF5bG9hZCBhbGwgaW4gb25lIGdvXG4gICAgICAgICAgICBjb25zdCBldmVudE5vdGlmaWNhdGlvbiA9IHRoaXMud2ViaG9va3MuY29uc3RydWN0RXZlbnQocGF5bG9hZCwgaGVhZGVyLCBzZWNyZXQsIHRvbGVyYW5jZSwgY3J5cHRvUHJvdmlkZXIsIHJlY2VpdmVkQXQpO1xuICAgICAgICAgICAgLy8gUGFyc2Ugc3RyaW5nIGNvbnRleHQgaW50byBTdHJpcGVDb250ZXh0IG9iamVjdCBpZiBwcmVzZW50XG4gICAgICAgICAgICBpZiAoZXZlbnROb3RpZmljYXRpb24uY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGV2ZW50Tm90aWZpY2F0aW9uLmNvbnRleHQgPSBTdHJpcGVDb250ZXh0LnBhcnNlKGV2ZW50Tm90aWZpY2F0aW9uLmNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnROb3RpZmljYXRpb24uZmV0Y2hFdmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlbmRlci5fcmF3UmVxdWVzdCgnR0VUJywgYC92Mi9jb3JlL2V2ZW50cy8ke2V2ZW50Tm90aWZpY2F0aW9uLmlkfWAsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgICBzdHJpcGVDb250ZXh0OiBldmVudE5vdGlmaWNhdGlvbi5jb250ZXh0LFxuICAgICAgICAgICAgICAgIH0sIFsnZmV0Y2hfZXZlbnQnXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXZlbnROb3RpZmljYXRpb24uZmV0Y2hSZWxhdGVkT2JqZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnROb3RpZmljYXRpb24ucmVsYXRlZF9vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RTZW5kZXIuX3Jhd1JlcXVlc3QoJ0dFVCcsIGV2ZW50Tm90aWZpY2F0aW9uLnJlbGF0ZWRfb2JqZWN0LnVybCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZUNvbnRleHQ6IGV2ZW50Tm90aWZpY2F0aW9uLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSwgWydmZXRjaF9yZWxhdGVkX29iamVjdCddKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZXZlbnROb3RpZmljYXRpb247XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gU3RyaXBlO1xufVxuIiwgImltcG9ydCB7IFdlYlBsYXRmb3JtRnVuY3Rpb25zIH0gZnJvbSAnLi9wbGF0Zm9ybS9XZWJQbGF0Zm9ybUZ1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVTdHJpcGUgfSBmcm9tICcuL3N0cmlwZS5jb3JlLmpzJztcbmV4cG9ydCBjb25zdCBTdHJpcGUgPSBjcmVhdGVTdHJpcGUobmV3IFdlYlBsYXRmb3JtRnVuY3Rpb25zKCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RyaXBlO1xuIiwgImltcG9ydCB7IFNldHRpbmdzVmlldywgQm94LCBJbmxpbmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5cbmNvbnN0IEFwcFNldHRpbmdzVmlldyA9ICh7IHVzZXJDb250ZXh0OiBfdXNlckNvbnRleHQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdzVmlldz5cbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxuICAgICAgICA8SW5saW5lPkphdmVsaW4gc2V0dGluZ3MgY29taW5nIHNvb24uPC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICA8L1NldHRpbmdzVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNldHRpbmdzVmlldztcbiIsICJpbXBvcnQge1xuICBDb250ZXh0VmlldyxcbiAgQm94LFxuICBTcGlubmVyLFxuICBJbmxpbmUsXG4gIEJhbm5lcixcbiAgQnV0dG9uLFxuICBJY29uLFxufSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpQ2xpZW50LCBpbml0QXBpQ2xpZW50IH0gZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RyaXBlU3luYyB9IGZyb20gJy4uL2hvb2tzL3VzZVN0cmlwZVN5bmMnO1xuXG50eXBlIE9uYm9hcmRpbmdTdGF0ZSA9ICdhdXRoJyB8ICdzeW5jaW5nJyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbmNvbnN0IE9CSkVDVF9UWVBFX0xBQkVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgY3VzdG9tZXJzOiAnQ3VzdG9tZXJzJyxcbiAgc3Vic2NyaXB0aW9uczogJ1N1YnNjcmlwdGlvbnMnLFxuICBpbnZvaWNlczogJ0ludm9pY2VzJyxcbiAgY2hhcmdlczogJ0NoYXJnZXMnLFxuICBwcm9kdWN0czogJ1Byb2R1Y3RzJyxcbiAgcHJpY2VzOiAnUHJpY2VzJyxcbn07XG5cbmNvbnN0IE9uYm9hcmRpbmdWaWV3ID0gKHsgdXNlckNvbnRleHQsIG9hdXRoQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgaWYgKHVzZXJDb250ZXh0Py5pZCAmJiB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcbiAgICBpbml0QXBpQ2xpZW50KHVzZXJDb250ZXh0LmlkLCB1c2VyQ29udGV4dC5hY2NvdW50LmlkKTtcbiAgfVxuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8T25ib2FyZGluZ1N0YXRlPignYXV0aCcpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IHsgc3luY0FsbCwgc3luY2luZywgcHJvZ3Jlc3MsIGVycm9yOiBzeW5jRXJyb3IgfSA9IHVzZVN0cmlwZVN5bmMoKTtcbiAgY29uc3QgaGFzUnVuID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTZXR1cCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAvLyBQcmV2ZW50IGRvdWJsZS1leGVjdXRpb24gZnJvbSBSZWFjdCBzdHJpY3QgbW9kZSBvciBkZXAgY2hhbmdlc1xuICAgIGlmIChoYXNSdW4uY3VycmVudCkgcmV0dXJuO1xuICAgIGhhc1J1bi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGxldCBhdXRoT2sgPSBmYWxzZTtcblxuICAgIC8vIFN0ZXAgMTogVHJ5IGF1dGgtY2FsbGJhY2sgaWYgd2UgaGF2ZSBhbiBPQXV0aCBjb2RlXG4gICAgaWYgKG9hdXRoQ29udGV4dD8uY29kZSAmJiAhb2F1dGhDb250ZXh0Py5lcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpQ2xpZW50KCcvYXV0aC1jYWxsYmFjaycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBjb2RlOiBvYXV0aENvbnRleHQuY29kZSxcbiAgICAgICAgICAgIHN0YXRlOiBvYXV0aENvbnRleHQuc3RhdGUgfHwgJycsXG4gICAgICAgICAgICB2ZXJpZmllcjogb2F1dGhDb250ZXh0LnZlcmlmaWVyIHx8ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBhdXRoT2sgPSB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUud2FybignYXV0aC1jYWxsYmFjayBmYWlsZWQsIHByb2NlZWRpbmcgd2l0aCBTREstYmFzZWQgc3luYycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgMjogQWx3YXlzIHJ1biBTREstYmFzZWQgc3luY1xuICAgIHNldFN0YXRlKCdzeW5jaW5nJyk7XG4gICAgY29uc3QgYW55RGF0YVN5bmNlZCA9IGF3YWl0IHN5bmNBbGwoKTtcblxuICAgIGlmICghYW55RGF0YVN5bmNlZCkge1xuICAgICAgc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ZhaWxlZCB0byBzeW5jIHlvdXIgU3RyaXBlIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICBoYXNSdW4uY3VycmVudCA9IGZhbHNlOyAvLyBBbGxvdyByZXRyeVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMzogSWYgYXV0aC1jYWxsYmFjayBzdWNjZWVkZWQsIGFsc28gdHJpZ2dlciBiYWNrZW5kIHN5bmMgZm9yIGNvbXBsZXRlbmVzc1xuICAgIGlmIChhdXRoT2spIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUNsaWVudCgnL3N5bmMtdHJpZ2dlcicsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IHt9IH0pO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIE5vbi1jcml0aWNhbCBcdTIwMTQgU0RLIHN5bmMgYWxyZWFkeSBwb3B1bGF0ZWQgdGhlIGNhY2hlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoJ3N1Y2Nlc3MnKTtcbiAgfSwgW29hdXRoQ29udGV4dCwgc3luY0FsbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlU2V0dXAoKTtcbiAgfSwgW2hhbmRsZVNldHVwXSk7XG5cbiAgY29uc3QgaGFuZGxlUmV0cnkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFzUnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xuICAgIHNldFN0YXRlKCdhdXRoJyk7XG4gICAgaGFuZGxlU2V0dXAoKTtcbiAgfSwgW2hhbmRsZVNldHVwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJXZWxjb21lIHRvIEphdmVsaW5cIj5cbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdtZWRpdW0nLCBhbGlnblg6ICdjZW50ZXInIH19PlxuICAgICAgICB7KHN0YXRlID09PSAnYXV0aCcgfHwgKHN0YXRlID09PSAnc3luY2luZycgJiYgc3luY2luZykpICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGZvbnQ6ICdoZWFkaW5nJyB9fT5cbiAgICAgICAgICAgICAge3N0YXRlID09PSAnYXV0aCcgPyAnQ29ubmVjdGluZyB0byBTdHJpcGUuLi4nIDogJ1N5bmNpbmcgeW91ciBkYXRhLi4uJ31cbiAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAge3N0YXRlID09PSAnc3luY2luZycgJiYgcHJvZ3Jlc3MuY3VycmVudCAmJiAoXG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJywgd2lkdGg6ICdmaWxsJyB9fT5cbiAgICAgICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICBTeW5jaW5nIHtPQkpFQ1RfVFlQRV9MQUJFTFNbcHJvZ3Jlc3MuY3VycmVudF0gfHwgcHJvZ3Jlc3MuY3VycmVudH0gKHtwcm9ncmVzcy5jb21wbGV0ZWQgKyAxfS97cHJvZ3Jlc3MudG90YWx9KVxuICAgICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhPQkpFQ1RfVFlQRV9MQUJFTFMpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gT2JqZWN0LmtleXMoT0JKRUNUX1RZUEVfTEFCRUxTKS5pbmRleE9mKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21wbGV0ZSA9IGlkeCA8IHByb2dyZXNzLmNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudCA9IHR5cGUgPT09IHByb2dyZXNzLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhaWxlZCA9IHByb2dyZXNzLmZhaWxlZC5pbmNsdWRlcyh0eXBlIGFzIG5ldmVyKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt0eXBlfSBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBsZXRlICYmICFpc0ZhaWxlZCAmJiA8SWNvbiBuYW1lPVwiY2hlY2tcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICB7aXNDb21wbGV0ZSAmJiBpc0ZhaWxlZCAmJiA8SWNvbiBuYW1lPVwid2FybmluZ1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPElubGluZSBjc3M9e3sgY29sb3I6IGlzQ29tcGxldGUgfHwgaXNDdXJyZW50ID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T0JKRUNUX1RZUEVfTEFCRUxTW3R5cGVdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3RhdGUgPT09ICdzdWNjZXNzJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlNldHVwIGNvbXBsZXRlIVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSmF2ZWxpbiBpcyByZWFkeS4gWW91ciBkYXRhIGhhcyBiZWVuIHN5bmNlZCBcdTIwMTQgeW91IGNhbiBzdGFydCBhc2tpbmcgcXVlc3Rpb25zIHJpZ2h0IGF3YXkuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7c3luY0Vycm9yICYmIChcbiAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjYXV0aW9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhcnRpYWwgc3luY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3N5bmNFcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SW5saW5lIGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIE9wZW4gdGhlIEphdmVsaW4gZHJhd2VyIGZyb20gYW55IHBhZ2UgaW4geW91ciBTdHJpcGUgRGFzaGJvYXJkIHRvIGdldCBzdGFydGVkLlxuICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N0YXRlID09PSAnZXJyb3InICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIlNldHVwIGZhaWxlZFwiIGRlc2NyaXB0aW9uPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlUmV0cnl9PlxuICAgICAgICAgICAgICBSZXRyeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT25ib2FyZGluZ1ZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxjQUFjO0FBQ3RCLGNBQVEsY0FBYztBQUFBO0FBQUE7OztBQ0h0QjtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxrQkFBa0IsUUFBUSxZQUFZLFFBQVEsY0FBYyxRQUFRLFlBQVksUUFBUSxZQUFZLFFBQVEsTUFBTSxRQUFRLFlBQVksUUFBUSxXQUFXLFFBQVEsVUFBVSxRQUFRLFNBQVMsUUFBUSxxQkFBcUIsUUFBUSxVQUFVLFFBQVEsWUFBWSxRQUFRLGFBQWEsUUFBUSxlQUFlLFFBQVEsU0FBUyxRQUFRLFFBQVEsUUFBUSxlQUFlLFFBQVEsbUJBQW1CLFFBQVEsNEJBQTRCLFFBQVEsaUJBQWlCLFFBQVEsT0FBTyxRQUFRLFdBQVcsUUFBUSxZQUFZLFFBQVEsT0FBTyxRQUFRLFdBQVcsUUFBUSxPQUFPLFFBQVEsWUFBWSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsT0FBTyxRQUFRLGlCQUFpQixRQUFRLFlBQVksUUFBUSxVQUFVLFFBQVEsa0JBQWtCLFFBQVEseUJBQXlCLFFBQVEsbUJBQW1CLFFBQVEsWUFBWSxRQUFRLGNBQWMsUUFBUSxPQUFPLFFBQVEsV0FBVyxRQUFRLFdBQVcsUUFBUSxTQUFTLFFBQVEsY0FBYyxRQUFRLE1BQU0sUUFBUSxXQUFXLFFBQVEsU0FBUyxRQUFRLFFBQVEsUUFB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UUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsOEJBQThCO0FBQUEsSUFDOUIsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsTUFDZCwyQkFBMkI7QUFBQSxRQUN6QixlQUFlO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7IiwKICAibmFtZXMiOiBbIl9hIiwgImZldGNoIiwgImNyZWF0ZUh0dHBDbGllbnQiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAicmVxdWlyZV9zaWduYXR1cmUiLCAiZXhwb3J0cyIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJpbXBvcnRfdWkiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIl9hIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiX2EiLCAic3RyaXBlIiwgImhlYWRlcnMiLCAiYXV0aGVudGljYXRvciIsICJfYSIsICJkYXRhIiwgInJlc3VsdCIsICJzdHJpcGUiLCAiX2EiLCAiZGF0YSIsICJ1cmxEYXRhIiwgInNpZ25hdHVyZSIsICJBY2NvdW50cyIsICJBY2NvdW50TGlua3MiLCAiQ29uZmlybWF0aW9uVG9rZW5zIiwgIkN1c3RvbWVycyIsICJEaXNwdXRlcyIsICJFdmVudHMiLCAiUHJvZHVjdHMiLCAiUmVmdW5kcyIsICJUb2tlbnMiLCAic3RyaXBlIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIkFjY291bnRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQXV0aG9yaXphdGlvbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIkNhcmRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQ29uZmlndXJhdGlvbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIkluYm91bmRUcmFuc2ZlcnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiTWV0ZXJFdmVudEFkanVzdG1lbnRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJNZXRlckV2ZW50cyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIk91dGJvdW5kUGF5bWVudHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJPdXRib3VuZFRyYW5zZmVycyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJQZXJzb25hbGl6YXRpb25EZXNpZ25zIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJSZWFkZXJzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiUmVjZWl2ZWRDcmVkaXRzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiUmVjZWl2ZWREZWJpdHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiU2Vzc2lvbnMiLCAic3RyaXBlTWV0aG9kIiwgIlNlc3Npb25zIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJUcmFuc2FjdGlvbnMiLCAic3RyaXBlTWV0aG9kIiwgIlRyYW5zYWN0aW9ucyIsICJzdHJpcGVNZXRob2QiLCAiVHJhbnNhY3Rpb25zIiwgInN0cmlwZU1ldGhvZCIsICJUcmFuc2FjdGlvbnMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJBY2NvdW50cyIsICJzdHJpcGVNZXRob2QiLCAiQWNjb3VudExpbmtzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQ29uZmlybWF0aW9uVG9rZW5zIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiQ3VzdG9tZXJzIiwgInN0cmlwZU1ldGhvZCIsICJEaXNwdXRlcyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIkV2ZW50cyIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlByb2R1Y3RzIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlJlZnVuZHMiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAiVG9rZW5zIiwgInN0cmlwZU1ldGhvZCIsICJzdHJpcGVNZXRob2QiLCAic3RyaXBlTWV0aG9kIiwgIlNlc3Npb25zIiwgIlRyYW5zYWN0aW9ucyIsICJDb25maWd1cmF0aW9ucyIsICJBdXRob3JpemF0aW9ucyIsICJDYXJkcyIsICJQZXJzb25hbGl6YXRpb25EZXNpZ25zIiwgIlJlYWRlcnMiLCAiSW5ib3VuZFRyYW5zZmVycyIsICJPdXRib3VuZFBheW1lbnRzIiwgIk91dGJvdW5kVHJhbnNmZXJzIiwgIlJlY2VpdmVkQ3JlZGl0cyIsICJSZWNlaXZlZERlYml0cyIsICJNZXRlckV2ZW50QWRqdXN0bWVudHMiLCAiTWV0ZXJFdmVudHMiLCAiQWNjb3VudHMiLCAic3RyaXBlIiwgIlN0cmlwZSIsICJfYSIsICJpc09iamVjdCIsICJpbXBvcnRfdXRpbHMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIl9hIiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiXQp9Cg==
