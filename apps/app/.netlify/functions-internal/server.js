var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// ../../packages/shared-ui/dist/index.cjs
var require_dist = __commonJS({
  "../../packages/shared-ui/dist/index.cjs"(exports) {
    "use strict";
    var react = require("react"), tailwindVariants = require("tailwind-variants"), lucideReact = require("lucide-react"), reactAria = require("react-aria"), jsxRuntime = require("react/jsx-runtime"), pe = require("react-use-measure"), framerMotion = require("framer-motion");
    function _interopDefault(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    var pe__default = /* @__PURE__ */ _interopDefault(pe), z2 = Object.defineProperty, A2 = Object.defineProperties, H = Object.getOwnPropertyDescriptors, k = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable, P2 = (e2, t2, r2) => t2 in e2 ? z2(e2, t2, { enumerable: !0, configurable: !0, writable: !0, value: r2 }) : e2[t2] = r2, u = (e2, t2) => {
      for (var r2 in t2 || (t2 = {}))
        C.call(t2, r2) && P2(e2, r2, t2[r2]);
      if (k)
        for (var r2 of k(t2))
          N.call(t2, r2) && P2(e2, r2, t2[r2]);
      return e2;
    }, b = (e2, t2) => A2(e2, H(t2)), f3 = (e2, t2) => {
      var r2 = {};
      for (var n in e2)
        C.call(e2, n) && t2.indexOf(n) < 0 && (r2[n] = e2[n]);
      if (e2 != null && k)
        for (var n of k(e2))
          t2.indexOf(n) < 0 && N.call(e2, n) && (r2[n] = e2[n]);
      return r2;
    }, F2 = tailwindVariants.tv({ base: ["inline-flex items-center justify-center border-2 border-transparent rounded-md font-medium transition-all select-none", "active:scale-95", "focus:outline-none focus:ring focus:ring-offset-2 focus:z-10", "focus:ring-offset-white dark:focus:ring-offset-neutral-900", "disabled:opacity-50 disabled:pointer-events-none"], variants: { size: { xs: "px-2.5 py-1.5 text-xs", sm: "px-3 py-2 text-sm leading-4", md: "px-4 py-2 text-sm", lg: "px-4 py-2 text-base", xl: "px-6 py-3 text-base" }, color: { primary: "", neutral: "", danger: "", warning: "", success: "", info: "" }, variant: { solid: "", outline: "", subtle: "" } }, compoundVariants: [{ variant: "solid", color: "primary", className: "bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 text-white dark:focus:ring-primary-500" }, { variant: "solid", color: "neutral", className: "bg-neutral-400 hover:bg-neutral-500 focus:ring-neutral-300 text-white dark:focus:ring-neutral-500 dark:text-black" }, { variant: "solid", color: "danger", className: "bg-danger-500 hover:bg-danger-600 focus:ring-danger-300 text-white dark:focus:ring-danger-600" }, { variant: "solid", color: "warning", className: "bg-warning-400 hover:bg-warning-500 focus:ring-warning-300 text-black dark:focus:ring-warning-600" }, { variant: "solid", color: "success", className: "bg-success-500 hover:bg-success-600 focus:ring-success-300 text-white dark:focus:ring-success-600" }, { variant: "solid", color: "info", className: "bg-info-600 hover:bg-info-700 focus:ring-info-400 text-white dark:focus:ring-info-500" }, { variant: "outline", color: "primary", className: "bg-primary-50 border-primary-300 hover:border-primary-400 hover:bg-primary-100 focus:ring-primary-300 text-primary-700 dark:bg-primary-900 dark:border-primary-600 dark:hover:border-primary-500 dark:hover:bg-primary-800 dark:focus:ring-primary-600 dark:text-primary-100" }, { variant: "outline", color: "neutral", className: "bg-white border-neutral-200 hover:border-neutral-300 hover:bg-white/75 focus:ring-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:focus:ring-neutral-600 dark:text-neutral-200" }, { variant: "outline", color: "danger", className: "bg-danger-50 border-danger-300 hover:border-danger-400 hover:bg-danger-100 focus:ring-danger-300 text-danger-700 dark:bg-danger-900 dark:border-danger-600 dark:hover:border-danger-500 dark:hover:bg-danger-800 dark:focus:ring-danger-600 dark:text-danger-100" }, { variant: "outline", color: "warning", className: "bg-warning-50 border-warning-300 hover:border-warning-400 hover:bg-warning-100 focus:ring-warning-300 text-warning-700 dark:bg-warning-900 dark:border-warning-600 dark:hover:border-warning-500 dark:hover:bg-warning-800 dark:focus:ring-warning-600 dark:text-warning-100" }, { variant: "outline", color: "success", className: "bg-success-50 border-success-300 hover:border-success-400 hover:bg-success-100 focus:ring-success-300 text-success-700 dark:bg-success-900 dark:border-success-600 dark:hover:border-success-500 dark:hover:bg-success-800 dark:focus:ring-success-600 dark:text-success-100" }, { variant: "outline", color: "info", className: "bg-info-50 border-info-300 hover:border-info-400 hover:bg-info-100 focus:ring-info-300 text-info-700 dark:bg-info-900 dark:border-info-600 dark:hover:border-info-500 dark:hover:bg-info-800 dark:focus:ring-info-600 dark:text-info-100" }, { variant: "subtle", color: "primary", className: "bg-primary-100 hover:bg-primary-200 focus:ring-primary-300 text-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:text-primary-100" }, { variant: "subtle", color: "neutral", className: "bg-neutral-200 hover:bg-neutral-300 focus:ring-neutral-400 text-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:focus:ring-neutral-500 dark:text-neutral-100" }, { variant: "subtle", color: "danger", className: "bg-danger-100 hover:bg-danger-200 focus:ring-danger-300 text-danger-700 dark:bg-danger-700 dark:hover:bg-danger-600 dark:focus:ring-danger-500 dark:text-danger-100" }, { variant: "subtle", color: "warning", className: "bg-warning-100 hover:bg-warning-200 focus:ring-warning-300 text-warning-700 dark:bg-warning-700 dark:hover:bg-warning-600 dark:focus:ring-warning-500 dark:text-warning-100" }, { variant: "subtle", color: "success", className: "bg-success-100 hover:bg-success-200 focus:ring-success-300 text-success-700 dark:bg-success-700 dark:hover:bg-success-600 dark:focus:ring-success-500 dark:text-success-100" }, { variant: "subtle", color: "info", className: "bg-info-100 hover:bg-info-200 focus:ring-info-300 text-info-700 dark:bg-info-700 dark:hover:bg-info-600 dark:focus:ring-info-500 dark:text-info-100" }], defaultVariants: { size: "md", color: "neutral", variant: "solid" } }), I = react.forwardRef((e2, t2) => {
      let r2 = react.useRef(null), n = t2 || r2, h2 = e2, { as: a = "button", children: o, loading: i2 = !1, disabled: c, className: l, color: s2, size: d, variant: m2 } = h2, p = f3(h2, ["as", "children", "loading", "disabled", "className", "color", "size", "variant"]), { buttonProps: x2 } = reactAria.useButton(b(u({}, p), { isDisabled: c || i2, elementType: a }), n);
      return jsxRuntime.jsxs(a, b(u({ ref: n }, x2), { className: F2({ color: s2, size: d, variant: m2, className: l }), children: [i2 && jsxRuntime.jsx(lucideReact.Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), o] }));
    }), G = tailwindVariants.tv({ slots: { button: "", icon: "" }, variants: { size: { xs: { button: "py-1 px-0.5", icon: "h-5 h-5" }, sm: { button: "py-1.5 px-1", icon: "h-5 h-5" }, md: { button: "p-1.5", icon: "h-6 w-6" }, lg: { button: "p-2", icon: "h-6 w-6" }, xl: { button: "py-2 px-3", icon: "h-8 h-8" } }, isRound: { true: { button: "rounded-full", icon: "" } } }, defaultVariants: { size: "md", isRound: !1 } }), S2 = react.forwardRef((e2, t2) => {
      var x2;
      let p = e2, { icon: r2, children: n, "aria-label": a, className: o, isRound: i2 = !1 } = p, c = f3(p, ["icon", "children", "aria-label", "className", "isRound"]), { button: l, icon: s2 } = G({ size: e2.size, isRound: i2 }), d = r2 || n, m2 = react.isValidElement(d) ? react.cloneElement(d, { "aria-hidden": !0, focusable: !1, className: s2({ className: (x2 = d.props) == null ? void 0 : x2.className }) }) : null;
      return jsxRuntime.jsx(I, b(u({ ref: t2, "aria-label": a, className: l({ className: o }) }, c), { children: m2 }));
    }), ae = tailwindVariants.tv({ slots: { wrapper: "rounded-md p-4 border", icon: "h-5 w-5", title: "text-sm font-medium", content: "mt-2 text-sm" }, variants: { color: { danger: { wrapper: "bg-danger-50 border-danger-100 dark:bg-danger-900/50 dark:border-danger-800", icon: "text-danger-400 dark:text-danger-500", title: "text-danger-800 dark:text-danger-50", content: "text-danger-700 dark:text-danger-200" }, warning: { wrapper: "bg-warning-50 border-warning-100 dark:bg-warning-900/50 dark:border-warning-800", icon: "text-warning-400 dark:text-warning-500", title: "text-warning-800 dark:text-warning-50", content: "text-warning-700 dark:text-warning-200" }, success: { wrapper: "bg-success-50 border-success-100 dark:bg-success-900/50 dark:border-success-800", icon: "text-success-400 dark:text-success-500", title: "text-success-800 dark:text-success-50", content: "text-success-700 dark:text-success-200" }, info: { wrapper: "bg-info-50 border-info-100 dark:bg-info-900/50 dark:border-info-800", icon: "text-info-400 dark:text-info-500", title: "text-info-800 dark:text-info-50", content: "text-info-700 dark:text-info-200" } } }, defaultVariants: { color: "info" } });
    function oe(e2) {
      switch (e2) {
        case "warning":
          return lucideReact.AlertTriangleIcon;
        case "danger":
          return lucideReact.AlertCircleIcon;
        case "success":
          return lucideReact.CheckCircle2Icon;
        case "info":
        default:
          return lucideReact.InfoIcon;
      }
    }
    function Je(e2) {
      let { color: t2 = "info", title: r2, children: n, dismissible: a = !1, className: o } = e2, { wrapper: i2, icon: c, title: l, content: s2 } = ae({ color: t2 }), d = oe(t2), [m2, p] = react.useState(!1);
      return react.useEffect(() => {
        m2 && p(!1);
      }, [r2, n]), m2 ? null : jsxRuntime.jsx("div", { role: "alert", className: i2({ className: o }), children: jsxRuntime.jsxs("div", { className: "flex", children: [jsxRuntime.jsx("div", { className: "flex-shrink-0", children: jsxRuntime.jsx(d, { className: c(), "aria-hidden": "true" }) }), jsxRuntime.jsxs("div", { className: "ml-3", children: [jsxRuntime.jsx("h3", { className: l(), children: r2 }), jsxRuntime.jsx("div", { className: s2(), children: n })] }), a && jsxRuntime.jsx("div", { className: "ml-auto pl-3", children: jsxRuntime.jsx("div", { className: "-mx-1.5 -my-1.5", children: jsxRuntime.jsx(S2, { color: t2, onClick: () => p(!0), "aria-label": "Ignorer", size: "xs", variant: "outline", children: jsxRuntime.jsx(lucideReact.XIcon, {}) }) }) })] }) });
    }
    var le = tailwindVariants.tv({ base: "font-bold", variants: { tag: { h1: "text-7xl", h2: "text-6xl", h3: "text-5xl", h4: "text-4xl", h5: "text-3xl", h6: "text-2xl" } }, defaultVariants: { tag: "h1" } }), ce = ["h1", "h2", "h3", "h4", "h5", "h6"], qe = react.forwardRef((e2, t2) => {
      let l = e2, { as: r2 = "h1", children: n, className: a, tag: o = (() => {
        for (let s2 of ce)
          if (s2 === r2)
            return !0;
        return !1;
      })() ? r2 : "h1" } = l, i2 = f3(l, ["as", "children", "className", "tag"]);
      return jsxRuntime.jsx(r2, b(u({ ref: t2 }, i2), { className: le({ tag: o, className: a }), children: n }));
    });
    function B({ children: e2, duration: t2 = 0.25 }) {
      let [r2, { height: n }] = pe__default.default();
      return jsxRuntime.jsx(framerMotion.MotionConfig, { transition: { duration: t2 }, children: jsxRuntime.jsx(framerMotion.motion.div, { animate: { height: n || "auto" }, className: "relative overflow-hidden", children: jsxRuntime.jsx(framerMotion.AnimatePresence, { initial: !1, children: jsxRuntime.jsx(framerMotion.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: t2 / 2, delay: t2 / 2 } }, exit: { opacity: 0, transition: { duration: t2 / 2 } }, children: jsxRuntime.jsx("div", { ref: r2, className: `${n ? "absolute w-full" : "relative"}`, children: e2 }) }, JSON.stringify(e2, me())) }) }) });
    }
    var me = () => {
      let e2 = /* @__PURE__ */ new WeakSet();
      return (t2, r2) => {
        if (!t2.startsWith("_")) {
          if (typeof r2 == "object" && r2 !== null) {
            if (e2.has(r2))
              return;
            e2.add(r2);
          }
          return r2;
        }
      };
    }, he = tailwindVariants.tv({ slots: { wrapper: ["focus-within:border-transparent focus-within:ring focus-within:ring-primary-300 dark:focus-within:ring-primary-600", "border border-neutral-200 dark:border-neutral-700", "bg-neutral-50 dark:bg-neutral-800", "rounded-md px-3 pt-2 pb-1 shadow-sm transition-all"], label: "block text-xs font-medium select-none text-neutral-500 dark:text-neutral-400", input: ["text-neutral-800 placeholder-neutral-300 dark:text-neutral-100 dark:placeholder-neutral-600", "focus:outline-none focus:ring-0", "w-full border-0 bg-transparent p-0 text-sm leading-loose"], error: "text-danger-600 mt-2 text-sm" }, variants: { hasError: { true: { wrapper: "border-transparent ring-2 ring-danger-300 dark:ring-danger-600" } } }, defaultVariants: { hasError: !1 } }), or = react.forwardRef((e2, t2) => {
      let r2 = react.useId(), h2 = e2, { as: n = "input", label: a, id: o = r2, className: i2, error: c } = h2, l = f3(h2, ["as", "label", "id", "className", "error"]), s2 = c !== void 0, { wrapper: d, label: m2, input: p, error: x2 } = he({ hasError: s2 }), R = n;
      return jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", { className: d(), children: [jsxRuntime.jsx("label", { htmlFor: o, className: m2(), children: a }), jsxRuntime.jsx(R, u({ ref: t2, id: o, className: p({ className: i2 }) }, l))] }), jsxRuntime.jsx(B, { children: jsxRuntime.jsx("p", { role: "alert", hidden: !s2, "aria-hidden": !s2, className: x2(), children: c || "" }) })] });
    }), ke = tailwindVariants.tv({ slots: { wrapper: "space-x-1 leading-3", kbd: "rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-sans text-xs font-semibold text-neutral-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300", plus: "ml-1 text-neutral-400" } });
    function dr({ shortcuts: e2 }) {
      let { wrapper: t2, kbd: r2, plus: n } = ke();
      return jsxRuntime.jsx("div", { className: t2(), children: e2.map((a, o) => jsxRuntime.jsxs("span", { children: [jsxRuntime.jsx("kbd", { className: r2(), children: a }), o < e2.length - 1 && jsxRuntime.jsx("span", { className: n(), children: "+" })] }, a)) });
    }
    exports.Alert = Je;
    exports.Button = I;
    exports.Heading = qe;
    exports.IconButton = S2;
    exports.Input = or;
    exports.KBD = dr;
    exports.ResizablePanel = B;
    exports.alertStyles = ae;
    exports.buttonStyles = F2;
    exports.headingStyles = le;
    exports.iconButtonStyles = G;
    exports.inputStyles = he;
    exports.kbdStyles = ke;
  }
});

// ../../node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  let m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2)
    return;
  let match2 = m2[2] || m2[3] || "", filename = match2.slice(match2.lastIndexOf("\\") + 1);
  return filename = filename.replace(/%22/g, '"'), filename = filename.replace(/&#(\d{4});/g, (m3, code) => String.fromCharCode(code)), filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct))
    throw new TypeError("Failed to fetch");
  let m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2)
    throw new TypeError("no or bad content-type header, no multipart boundary");
  let parser = new MultipartParser(m2[1] || m2[2]), headerField, headerValue, entryValue, entryName, contentType, filename, entryChunks = [], formData = new FormData(), onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: !0 });
  }, appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  }, appendFileToFormData = () => {
    let file = new File$1(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  }, appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  }, decoder = new TextDecoder("utf-8");
  decoder.decode(), parser.onPartBegin = function() {
    parser.onPartData = onPartData, parser.onPartEnd = appendEntryToFormData, headerField = "", headerValue = "", entryValue = "", entryName = "", contentType = "", filename = null, entryChunks.length = 0;
  }, parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: !0 });
  }, parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: !0 });
  }, parser.onHeaderEnd = function() {
    if (headerValue += decoder.decode(), headerField = headerField.toLowerCase(), headerField === "content-disposition") {
      let m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      m3 && (entryName = m3[2] || m3[3] || ""), filename = _fileName(headerValue), filename && (parser.onPartData = appendToFile, parser.onPartEnd = appendFileToFormData);
    } else
      headerField === "content-type" && (contentType = headerValue);
    headerValue = "", headerField = "";
  };
  for await (let chunk of Body2)
    parser.write(chunk);
  return parser.end(), formData;
}
var s, S, f, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser, init_multipart_parser = __esm({
  "../../node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs"() {
    init_node_fetch_native_2b047dc1();
    s = 0, S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    }, f = 1, F = {
      PART_BOUNDARY: f,
      LAST_BOUNDARY: f *= 2
    }, LF = 10, CR = 13, SPACE = 32, HYPHEN = 45, COLON = 58, A = 97, Z = 122, lower = (c) => c | 32, noop = () => {
    }, MultipartParser = class {
      constructor(boundary) {
        this.index = 0, this.flags = 0, this.onHeaderEnd = noop, this.onHeaderField = noop, this.onHeadersEnd = noop, this.onHeaderValue = noop, this.onPartBegin = noop, this.onPartData = noop, this.onPartEnd = noop, this.boundaryChars = {}, boundary = `\r
--` + boundary;
        let ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++)
          ui8a[i2] = boundary.charCodeAt(i2), this.boundaryChars[ui8a[i2]] = !0;
        this.boundary = ui8a, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0, length_ = data.length, previousIndex = this.index, { lookbehind, boundary, boundaryChars, index, state, flags } = this, boundaryLength = this.boundary.length, boundaryEnd = boundaryLength - 1, bufferLength = data.length, c, cl, mark = (name) => {
          this[name + "Mark"] = i2;
        }, clear = (name) => {
          delete this[name + "Mark"];
        }, callback = (callbackSymbol, start, end, ui8a) => {
          (start === void 0 || start !== end) && this[callbackSymbol](ui8a && ui8a.subarray(start, end));
        }, dataCallback = (name, clear2) => {
          let markSymbol = name + "Mark";
          markSymbol in this && (clear2 ? (callback(name, this[markSymbol], i2, data), delete this[markSymbol]) : (callback(name, this[markSymbol], data.length, data), this[markSymbol] = 0));
        };
        for (i2 = 0; i2 < length_; i2++)
          switch (c = data[i2], state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN)
                  flags |= F.LAST_BOUNDARY;
                else if (c !== CR)
                  return;
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN)
                  state = S.END, flags = 0;
                else if (!(flags & F.LAST_BOUNDARY) && c === LF)
                  index = 0, callback("onPartBegin"), state = S.HEADER_FIELD_START;
                else
                  return;
                break;
              }
              c !== boundary[index + 2] && (index = -2), c === boundary[index + 2] && index++;
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD, mark("onHeaderField"), index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField"), state = S.HEADERS_ALMOST_DONE;
                break;
              }
              if (index++, c === HYPHEN)
                break;
              if (c === COLON) {
                if (index === 1)
                  return;
                dataCallback("onHeaderField", !0), state = S.HEADER_VALUE_START;
                break;
              }
              if (cl = lower(c), cl < A || cl > Z)
                return;
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE)
                break;
              mark("onHeaderValue"), state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              c === CR && (dataCallback("onHeaderValue", !0), callback("onHeaderEnd"), state = S.HEADER_VALUE_ALMOST_DONE);
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF)
                return;
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF)
                return;
              callback("onHeadersEnd"), state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA, mark("onPartData");
            case S.PART_DATA:
              if (previousIndex = index, index === 0) {
                for (i2 += boundaryEnd; i2 < bufferLength && !(data[i2] in boundaryChars); )
                  i2 += boundaryLength;
                i2 -= boundaryEnd, c = data[i2];
              }
              if (index < boundary.length)
                boundary[index] === c ? (index === 0 && dataCallback("onPartData", !0), index++) : index = 0;
              else if (index === boundary.length)
                index++, c === CR ? flags |= F.PART_BOUNDARY : c === HYPHEN ? flags |= F.LAST_BOUNDARY : index = 0;
              else if (index - 1 === boundary.length)
                if (flags & F.PART_BOUNDARY) {
                  if (index = 0, c === LF) {
                    flags &= ~F.PART_BOUNDARY, callback("onPartEnd"), callback("onPartBegin"), state = S.HEADER_FIELD_START;
                    break;
                  }
                } else
                  flags & F.LAST_BOUNDARY && c === HYPHEN ? (callback("onPartEnd"), state = S.END, flags = 0) : index = 0;
              if (index > 0)
                lookbehind[index - 1] = c;
              else if (previousIndex > 0) {
                let _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind), previousIndex = 0, mark("onPartData"), i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        dataCallback("onHeaderField"), dataCallback("onHeaderValue"), dataCallback("onPartData"), this.index = index, this.state = state, this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length)
          this.onPartEnd();
        else if (this.state !== S.END)
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
      }
    };
  }
});

// ../../node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/shared/node-fetch-native.2b047dc1.mjs
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri))
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  uri = uri.replace(/\r?\n/g, "");
  let firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4)
    throw new TypeError("malformed data: URI");
  let meta2 = uri.substring(5, firstComma).split(";"), charset = "", base64 = !1, type = meta2[0] || "text/plain", typeFull = type;
  for (let i2 = 1; i2 < meta2.length; i2++)
    meta2[i2] === "base64" ? base64 = !0 : meta2[i2] && (typeFull += `;${meta2[i2]}`, meta2[i2].indexOf("charset=") === 0 && (charset = meta2[i2].substring(8)));
  !meta2[0] && !charset.length && (typeFull += ";charset=US-ASCII", charset = "US-ASCII");
  let encoding = base64 ? "base64" : "ascii", data = unescape(uri.substring(firstComma + 1)), buffer = Buffer.from(data, encoding);
  return buffer.type = type, buffer.typeFull = typeFull, buffer.charset = charset, buffer;
}
function requirePonyfill_es2018() {
  return hasRequiredPonyfill_es2018 || (hasRequiredPonyfill_es2018 = 1, function(module2, exports) {
    (function(global2, factory) {
      factory(exports);
    })(commonjsGlobal, function(exports2) {
      let SymbolPolyfill = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol : (description) => `Symbol(${description})`;
      function noop2() {
      }
      function getGlobals() {
        if (typeof self < "u")
          return self;
        if (typeof window < "u")
          return window;
        if (typeof commonjsGlobal < "u")
          return commonjsGlobal;
      }
      let globals = getGlobals();
      function typeIsObject(x2) {
        return typeof x2 == "object" && x2 !== null || typeof x2 == "function";
      }
      let rethrowAssertionErrorRejection = noop2, originalPromise = Promise, originalPromiseThen = Promise.prototype.then, originalPromiseResolve = Promise.resolve.bind(originalPromise), originalPromiseReject = Promise.reject.bind(originalPromise);
      function newPromise(executor) {
        return new originalPromise(executor);
      }
      function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
      }
      function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
      }
      function PerformPromiseThen(promise, onFulfilled, onRejected) {
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
      }
      function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
      }
      function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
      }
      function uponRejection(promise, onRejected) {
        uponPromise(promise, void 0, onRejected);
      }
      function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
      }
      function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
      }
      let queueMicrotask = (() => {
        let globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask == "function")
          return globalQueueMicrotask;
        let resolvedPromise = promiseResolvedWith(void 0);
        return (fn) => PerformPromiseThen(resolvedPromise, fn);
      })();
      function reflectCall(F2, V, args) {
        if (typeof F2 != "function")
          throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(F2, V, args);
      }
      function promiseCall(F2, V, args) {
        try {
          return promiseResolvedWith(reflectCall(F2, V, args));
        } catch (value) {
          return promiseRejectedWith(value);
        }
      }
      let QUEUE_MAX_ARRAY_SIZE = 16384;
      class SimpleQueue {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = {
            _elements: [],
            _next: void 0
          }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(element) {
          let oldBack = this._back, newBack = oldBack;
          oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1 && (newBack = {
            _elements: [],
            _next: void 0
          }), oldBack._elements.push(element), newBack !== oldBack && (this._back = newBack, oldBack._next = newBack), ++this._size;
        }
        shift() {
          let oldFront = this._front, newFront = oldFront, oldCursor = this._cursor, newCursor = oldCursor + 1, elements = oldFront._elements, element = elements[oldCursor];
          return newCursor === QUEUE_MAX_ARRAY_SIZE && (newFront = oldFront._next, newCursor = 0), --this._size, this._cursor = newCursor, oldFront !== newFront && (this._front = newFront), elements[oldCursor] = void 0, element;
        }
        forEach(callback) {
          let i2 = this._cursor, node = this._front, elements = node._elements;
          for (; (i2 !== elements.length || node._next !== void 0) && !(i2 === elements.length && (node = node._next, elements = node._elements, i2 = 0, elements.length === 0)); )
            callback(elements[i2]), ++i2;
        }
        peek() {
          let front = this._front, cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream, stream._reader = reader, stream._state === "readable" ? defaultReaderClosedPromiseInitialize(reader) : stream._state === "closed" ? defaultReaderClosedPromiseInitializeAsResolved(reader) : defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
      }
      function ReadableStreamReaderGenericCancel(reader, reason) {
        let stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
      }
      function ReadableStreamReaderGenericRelease(reader) {
        reader._ownerReadableStream._state === "readable" ? defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), reader._ownerReadableStream._reader = void 0, reader._ownerReadableStream = void 0;
      }
      function readerLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released reader");
      }
      function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
          reader._closedPromise_resolve = resolve, reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader), defaultReaderClosedPromiseReject(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader), defaultReaderClosedPromiseResolve(reader);
      }
      function defaultReaderClosedPromiseReject(reader, reason) {
        reader._closedPromise_reject !== void 0 && (setPromiseIsHandledToTrue(reader._closedPromise), reader._closedPromise_reject(reason), reader._closedPromise_resolve = void 0, reader._closedPromise_reject = void 0);
      }
      function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
      }
      function defaultReaderClosedPromiseResolve(reader) {
        reader._closedPromise_resolve !== void 0 && (reader._closedPromise_resolve(void 0), reader._closedPromise_resolve = void 0, reader._closedPromise_reject = void 0);
      }
      let AbortSteps = SymbolPolyfill("[[AbortSteps]]"), ErrorSteps = SymbolPolyfill("[[ErrorSteps]]"), CancelSteps = SymbolPolyfill("[[CancelSteps]]"), PullSteps = SymbolPolyfill("[[PullSteps]]"), NumberIsFinite = Number.isFinite || function(x2) {
        return typeof x2 == "number" && isFinite(x2);
      }, MathTrunc = Math.trunc || function(v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
      };
      function isDictionary(x2) {
        return typeof x2 == "object" || typeof x2 == "function";
      }
      function assertDictionary(obj, context) {
        if (obj !== void 0 && !isDictionary(obj))
          throw new TypeError(`${context} is not an object.`);
      }
      function assertFunction(x2, context) {
        if (typeof x2 != "function")
          throw new TypeError(`${context} is not a function.`);
      }
      function isObject2(x2) {
        return typeof x2 == "object" && x2 !== null || typeof x2 == "function";
      }
      function assertObject(x2, context) {
        if (!isObject2(x2))
          throw new TypeError(`${context} is not an object.`);
      }
      function assertRequiredArgument(x2, position, context) {
        if (x2 === void 0)
          throw new TypeError(`Parameter ${position} is required in '${context}'.`);
      }
      function assertRequiredField(x2, field, context) {
        if (x2 === void 0)
          throw new TypeError(`${field} is required in '${context}'.`);
      }
      function convertUnrestrictedDouble(value) {
        return Number(value);
      }
      function censorNegativeZero(x2) {
        return x2 === 0 ? 0 : x2;
      }
      function integerPart(x2) {
        return censorNegativeZero(MathTrunc(x2));
      }
      function convertUnsignedLongLongWithEnforceRange(value, context) {
        let upperBound = Number.MAX_SAFE_INTEGER, x2 = Number(value);
        if (x2 = censorNegativeZero(x2), !NumberIsFinite(x2))
          throw new TypeError(`${context} is not a finite number`);
        if (x2 = integerPart(x2), x2 < 0 || x2 > upperBound)
          throw new TypeError(`${context} is outside the accepted range of ${0} to ${upperBound}, inclusive`);
        return !NumberIsFinite(x2) || x2 === 0 ? 0 : x2;
      }
      function assertReadableStream(x2, context) {
        if (!IsReadableStream(x2))
          throw new TypeError(`${context} is not a ReadableStream.`);
      }
      function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
      }
      function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        let readRequest = stream._reader._readRequests.shift();
        done ? readRequest._closeSteps() : readRequest._chunkSteps(chunk);
      }
      function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader(stream) {
        let reader = stream._reader;
        return !(reader === void 0 || !IsReadableStreamDefaultReader(reader));
      }
      class ReadableStreamDefaultReader {
        constructor(stream) {
          if (assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader"), assertReadableStream(stream, "First parameter"), IsReadableStreamLocked(stream))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          ReadableStreamReaderGenericInitialize(this, stream), this._readRequests = new SimpleQueue();
        }
        get closed() {
          return IsReadableStreamDefaultReader(this) ? this._closedPromise : promiseRejectedWith(defaultReaderBrandCheckException("closed"));
        }
        cancel(reason = void 0) {
          return IsReadableStreamDefaultReader(this) ? this._ownerReadableStream === void 0 ? promiseRejectedWith(readerLockException("cancel")) : ReadableStreamReaderGenericCancel(this, reason) : promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
        }
        read() {
          if (!IsReadableStreamDefaultReader(this))
            return promiseRejectedWith(defaultReaderBrandCheckException("read"));
          if (this._ownerReadableStream === void 0)
            return promiseRejectedWith(readerLockException("read from"));
          let resolvePromise, rejectPromise, promise = newPromise((resolve, reject) => {
            resolvePromise = resolve, rejectPromise = reject;
          });
          return ReadableStreamDefaultReaderRead(this, {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: !1 }),
            _closeSteps: () => resolvePromise({ value: void 0, done: !0 }),
            _errorSteps: (e2) => rejectPromise(e2)
          }), promise;
        }
        releaseLock() {
          if (!IsReadableStreamDefaultReader(this))
            throw defaultReaderBrandCheckException("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            ReadableStreamReaderGenericRelease(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: !0 },
        read: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        closed: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultReader",
        configurable: !0
      });
      function IsReadableStreamDefaultReader(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_readRequests") ? !1 : x2 instanceof ReadableStreamDefaultReader;
      }
      function ReadableStreamDefaultReaderRead(reader, readRequest) {
        let stream = reader._ownerReadableStream;
        stream._disturbed = !0, stream._state === "closed" ? readRequest._closeSteps() : stream._state === "errored" ? readRequest._errorSteps(stream._storedError) : stream._readableStreamController[PullSteps](readRequest);
      }
      function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
      }
      let AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0, this._isFinished = !1, this._reader = reader, this._preventCancel = preventCancel;
        }
        next() {
          let nextSteps = () => this._nextSteps();
          return this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps(), this._ongoingPromise;
        }
        return(value) {
          let returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished)
            return Promise.resolve({ value: void 0, done: !0 });
          let reader = this._reader;
          if (reader._ownerReadableStream === void 0)
            return promiseRejectedWith(readerLockException("iterate"));
          let resolvePromise, rejectPromise, promise = newPromise((resolve, reject) => {
            resolvePromise = resolve, rejectPromise = reject;
          });
          return ReadableStreamDefaultReaderRead(reader, {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0, queueMicrotask(() => resolvePromise({ value: chunk, done: !1 }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0, this._isFinished = !0, ReadableStreamReaderGenericRelease(reader), resolvePromise({ value: void 0, done: !0 });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0, this._isFinished = !0, ReadableStreamReaderGenericRelease(reader), rejectPromise(reason);
            }
          }), promise;
        }
        _returnSteps(value) {
          if (this._isFinished)
            return Promise.resolve({ value, done: !0 });
          this._isFinished = !0;
          let reader = this._reader;
          if (reader._ownerReadableStream === void 0)
            return promiseRejectedWith(readerLockException("finish iterating"));
          if (!this._preventCancel) {
            let result = ReadableStreamReaderGenericCancel(reader, value);
            return ReadableStreamReaderGenericRelease(reader), transformPromiseWith(result, () => ({ value, done: !0 }));
          }
          return ReadableStreamReaderGenericRelease(reader), promiseResolvedWith({ value, done: !0 });
        }
      }
      let ReadableStreamAsyncIteratorPrototype = {
        next() {
          return IsReadableStreamAsyncIterator(this) ? this._asyncIteratorImpl.next() : promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
        },
        return(value) {
          return IsReadableStreamAsyncIterator(this) ? this._asyncIteratorImpl.return(value) : promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
        }
      };
      AsyncIteratorPrototype !== void 0 && Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
      function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        let reader = AcquireReadableStreamDefaultReader(stream), impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel), iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        return iterator._asyncIteratorImpl = impl, iterator;
      }
      function IsReadableStreamAsyncIterator(x2) {
        if (!typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl"))
          return !1;
        try {
          return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
        } catch {
          return !1;
        }
      }
      function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
      }
      let NumberIsNaN = Number.isNaN || function(x2) {
        return x2 !== x2;
      };
      function CreateArrayFromList(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
      }
      function TransferArrayBuffer(O) {
        return O;
      }
      function IsDetachedBuffer(O) {
        return !1;
      }
      function ArrayBufferSlice(buffer, begin, end) {
        if (buffer.slice)
          return buffer.slice(begin, end);
        let length = end - begin, slice = new ArrayBuffer(length);
        return CopyDataBlockBytes(slice, 0, buffer, begin, length), slice;
      }
      function IsNonNegativeNumber(v) {
        return !(typeof v != "number" || NumberIsNaN(v) || v < 0);
      }
      function CloneAsUint8Array(O) {
        let buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
        return new Uint8Array(buffer);
      }
      function DequeueValue(container) {
        let pair = container._queue.shift();
        return container._queueTotalSize -= pair.size, container._queueTotalSize < 0 && (container._queueTotalSize = 0), pair.value;
      }
      function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === 1 / 0)
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        container._queue.push({ value, size }), container._queueTotalSize += size;
      }
      function PeekQueueValue(container) {
        return container._queue.peek().value;
      }
      function ResetQueue(container) {
        container._queue = new SimpleQueue(), container._queueTotalSize = 0;
      }
      class ReadableStreamBYOBRequest {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!IsReadableStreamBYOBRequest(this))
            throw byobRequestBrandCheckException("view");
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest(this))
            throw byobRequestBrandCheckException("respond");
          if (assertRequiredArgument(bytesWritten, 1, "respond"), bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter"), this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          IsDetachedBuffer(this._view.buffer), ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest(this))
            throw byobRequestBrandCheckException("respondWithNewView");
          if (assertRequiredArgument(view, 1, "respondWithNewView"), !ArrayBuffer.isView(view))
            throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          IsDetachedBuffer(view.buffer), ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: !0 },
        respondWithNewView: { enumerable: !0 },
        view: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBRequest",
        configurable: !0
      });
      class ReadableByteStreamController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!IsReadableByteStreamController(this))
            throw byteStreamControllerBrandCheckException("byobRequest");
          return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        get desiredSize() {
          if (!IsReadableByteStreamController(this))
            throw byteStreamControllerBrandCheckException("desiredSize");
          return ReadableByteStreamControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableByteStreamController(this))
            throw byteStreamControllerBrandCheckException("close");
          if (this._closeRequested)
            throw new TypeError("The stream has already been closed; do not close it again!");
          let state = this._controlledReadableByteStream._state;
          if (state !== "readable")
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
          ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController(this))
            throw byteStreamControllerBrandCheckException("enqueue");
          if (assertRequiredArgument(chunk, 1, "enqueue"), !ArrayBuffer.isView(chunk))
            throw new TypeError("chunk must be an array buffer view");
          if (chunk.byteLength === 0)
            throw new TypeError("chunk must have non-zero byteLength");
          if (chunk.buffer.byteLength === 0)
            throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested)
            throw new TypeError("stream is closed or draining");
          let state = this._controlledReadableByteStream._state;
          if (state !== "readable")
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
          ReadableByteStreamControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableByteStreamController(this))
            throw byteStreamControllerBrandCheckException("error");
          ReadableByteStreamControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ReadableByteStreamControllerClearPendingPullIntos(this), ResetQueue(this);
          let result = this._cancelAlgorithm(reason);
          return ReadableByteStreamControllerClearAlgorithms(this), result;
        }
        [PullSteps](readRequest) {
          let stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            let entry2 = this._queue.shift();
            this._queueTotalSize -= entry2.byteLength, ReadableByteStreamControllerHandleQueueDrain(this);
            let view = new Uint8Array(entry2.buffer, entry2.byteOffset, entry2.byteLength);
            readRequest._chunkSteps(view);
            return;
          }
          let autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            let pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest(stream, readRequest), ReadableByteStreamControllerCallPullIfNeeded(this);
        }
      }
      Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: !0 },
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        byobRequest: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableByteStreamController",
        configurable: !0
      });
      function IsReadableByteStreamController(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream") ? !1 : x2 instanceof ReadableByteStreamController;
      }
      function IsReadableStreamBYOBRequest(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController") ? !1 : x2 instanceof ReadableStreamBYOBRequest;
      }
      function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        if (!ReadableByteStreamControllerShouldCallPull(controller))
          return;
        if (controller._pulling) {
          controller._pullAgain = !0;
          return;
        }
        controller._pulling = !0;
        let pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = !1, controller._pullAgain && (controller._pullAgain = !1, ReadableByteStreamControllerCallPullIfNeeded(controller));
        }, (e2) => {
          ReadableByteStreamControllerError(controller, e2);
        });
      }
      function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller), controller._pendingPullIntos = new SimpleQueue();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = !1;
        stream._state === "closed" && (done = !0);
        let filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        pullIntoDescriptor.readerType === "default" ? ReadableStreamFulfillReadRequest(stream, filledView, done) : ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        let bytesFilled = pullIntoDescriptor.bytesFilled, elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength }), controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        let elementSize = pullIntoDescriptor.elementSize, currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize, maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled), maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy, maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize, totalBytesToCopyRemaining = maxBytesToCopy, ready = !1;
        maxAlignedBytes > currentAlignedBytes && (totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled, ready = !0);
        let queue = controller._queue;
        for (; totalBytesToCopyRemaining > 0; ) {
          let headOfQueue = queue.peek(), bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength), destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy), headOfQueue.byteLength === bytesToCopy ? queue.shift() : (headOfQueue.byteOffset += bytesToCopy, headOfQueue.byteLength -= bytesToCopy), controller._queueTotalSize -= bytesToCopy, ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor), totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain(controller) {
        controller._queueTotalSize === 0 && controller._closeRequested ? (ReadableByteStreamControllerClearAlgorithms(controller), ReadableStreamClose(controller._controlledReadableByteStream)) : ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        controller._byobRequest !== null && (controller._byobRequest._associatedReadableByteStreamController = void 0, controller._byobRequest._view = null, controller._byobRequest = null);
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        for (; controller._pendingPullIntos.length > 0; ) {
          if (controller._queueTotalSize === 0)
            return;
          let pullIntoDescriptor = controller._pendingPullIntos.peek();
          ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) && (ReadableByteStreamControllerShiftPendingPullInto(controller), ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor));
        }
      }
      function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
        let stream = controller._controlledReadableByteStream, elementSize = 1;
        view.constructor !== DataView && (elementSize = view.constructor.BYTES_PER_ELEMENT);
        let ctor = view.constructor, buffer = view.buffer, pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset: view.byteOffset,
          byteLength: view.byteLength,
          bytesFilled: 0,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob"
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor), ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          let emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            let filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller), readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            let e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e2), readIntoRequest._errorSteps(e2);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor), ReadableStreamAddReadIntoRequest(stream, readIntoRequest), ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        let stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream))
          for (; ReadableStreamGetNumReadIntoRequests(stream) > 0; ) {
            let pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
          }
      }
      function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        if (ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor), pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize)
          return;
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        let remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          let end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled, remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize, ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor), ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
      }
      function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        let firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller), controller._controlledReadableByteStream._state === "closed" ? ReadableByteStreamControllerRespondInClosedState(controller) : ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor), ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        return controller._pendingPullIntos.shift();
      }
      function ReadableByteStreamControllerShouldCallPull(controller) {
        let stream = controller._controlledReadableByteStream;
        return stream._state !== "readable" || controller._closeRequested || !controller._started ? !1 : !!(ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0 || ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0 || ReadableByteStreamControllerGetDesiredSize(controller) > 0);
      }
      function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0, controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose(controller) {
        let stream = controller._controlledReadableByteStream;
        if (!(controller._closeRequested || stream._state !== "readable")) {
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = !0;
            return;
          }
          if (controller._pendingPullIntos.length > 0 && controller._pendingPullIntos.peek().bytesFilled > 0) {
            let e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw ReadableByteStreamControllerError(controller, e2), e2;
          }
          ReadableByteStreamControllerClearAlgorithms(controller), ReadableStreamClose(stream);
        }
      }
      function ReadableByteStreamControllerEnqueue(controller, chunk) {
        let stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable")
          return;
        let buffer = chunk.buffer, byteOffset = chunk.byteOffset, byteLength = chunk.byteLength, transferredBuffer = buffer;
        if (controller._pendingPullIntos.length > 0) {
          let firstPendingPullInto = controller._pendingPullIntos.peek();
          IsDetachedBuffer(firstPendingPullInto.buffer), firstPendingPullInto.buffer = firstPendingPullInto.buffer;
        }
        if (ReadableByteStreamControllerInvalidateBYOBRequest(controller), ReadableStreamHasDefaultReader(stream))
          if (ReadableStreamGetNumReadRequests(stream) === 0)
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          else {
            controller._pendingPullIntos.length > 0 && ReadableByteStreamControllerShiftPendingPullInto(controller);
            let transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, !1);
          }
        else
          ReadableStreamHasBYOBReader(stream) ? (ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength), ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller)) : ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerError(controller, e2) {
        let stream = controller._controlledReadableByteStream;
        stream._state === "readable" && (ReadableByteStreamControllerClearPendingPullIntos(controller), ResetQueue(controller), ReadableByteStreamControllerClearAlgorithms(controller), ReadableStreamError(stream, e2));
      }
      function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
          let firstDescriptor = controller._pendingPullIntos.peek(), view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled), byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
          SetUpReadableStreamBYOBRequest(byobRequest, controller, view), controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize(controller) {
        let state = controller._controlledReadableByteStream._state;
        return state === "errored" ? null : state === "closed" ? 0 : controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        let firstDescriptor = controller._pendingPullIntos.peek();
        if (controller._controlledReadableByteStream._state === "closed") {
          if (bytesWritten !== 0)
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (bytesWritten === 0)
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength)
            throw new RangeError("bytesWritten out of range");
        }
        firstDescriptor.buffer = firstDescriptor.buffer, ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        let firstDescriptor = controller._pendingPullIntos.peek();
        if (controller._controlledReadableByteStream._state === "closed") {
          if (view.byteLength !== 0)
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (view.byteLength === 0)
          throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset)
          throw new RangeError("The region specified by view does not match byobRequest");
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength)
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength)
          throw new RangeError("The region specified by view is larger than byobRequest");
        let viewByteLength = view.byteLength;
        firstDescriptor.buffer = view.buffer, ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream, controller._pullAgain = !1, controller._pulling = !1, controller._byobRequest = null, controller._queue = controller._queueTotalSize = void 0, ResetQueue(controller), controller._closeRequested = !1, controller._started = !1, controller._strategyHWM = highWaterMark, controller._pullAlgorithm = pullAlgorithm, controller._cancelAlgorithm = cancelAlgorithm, controller._autoAllocateChunkSize = autoAllocateChunkSize, controller._pendingPullIntos = new SimpleQueue(), stream._readableStreamController = controller;
        let startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = !0, ReadableByteStreamControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableByteStreamControllerError(controller, r2);
        });
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        let controller = Object.create(ReadableByteStreamController.prototype), startAlgorithm = () => {
        }, pullAlgorithm = () => promiseResolvedWith(void 0), cancelAlgorithm = () => promiseResolvedWith(void 0);
        underlyingByteSource.start !== void 0 && (startAlgorithm = () => underlyingByteSource.start(controller)), underlyingByteSource.pull !== void 0 && (pullAlgorithm = () => underlyingByteSource.pull(controller)), underlyingByteSource.cancel !== void 0 && (cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason));
        let autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0)
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
      }
      function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller, request._view = view;
      }
      function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
      }
      function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
      }
      function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
      }
      function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        let readIntoRequest = stream._reader._readIntoRequests.shift();
        done ? readIntoRequest._closeSteps(chunk) : readIntoRequest._chunkSteps(chunk);
      }
      function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader(stream) {
        let reader = stream._reader;
        return !(reader === void 0 || !IsReadableStreamBYOBReader(reader));
      }
      class ReadableStreamBYOBReader {
        constructor(stream) {
          if (assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader"), assertReadableStream(stream, "First parameter"), IsReadableStreamLocked(stream))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!IsReadableByteStreamController(stream._readableStreamController))
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          ReadableStreamReaderGenericInitialize(this, stream), this._readIntoRequests = new SimpleQueue();
        }
        get closed() {
          return IsReadableStreamBYOBReader(this) ? this._closedPromise : promiseRejectedWith(byobReaderBrandCheckException("closed"));
        }
        cancel(reason = void 0) {
          return IsReadableStreamBYOBReader(this) ? this._ownerReadableStream === void 0 ? promiseRejectedWith(readerLockException("cancel")) : ReadableStreamReaderGenericCancel(this, reason) : promiseRejectedWith(byobReaderBrandCheckException("cancel"));
        }
        read(view) {
          if (!IsReadableStreamBYOBReader(this))
            return promiseRejectedWith(byobReaderBrandCheckException("read"));
          if (!ArrayBuffer.isView(view))
            return promiseRejectedWith(new TypeError("view must be an array buffer view"));
          if (view.byteLength === 0)
            return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
          if (view.buffer.byteLength === 0)
            return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
          if (IsDetachedBuffer(view.buffer), this._ownerReadableStream === void 0)
            return promiseRejectedWith(readerLockException("read from"));
          let resolvePromise, rejectPromise, promise = newPromise((resolve, reject) => {
            resolvePromise = resolve, rejectPromise = reject;
          });
          return ReadableStreamBYOBReaderRead(this, view, {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: !1 }),
            _closeSteps: (chunk) => resolvePromise({ value: chunk, done: !0 }),
            _errorSteps: (e2) => rejectPromise(e2)
          }), promise;
        }
        releaseLock() {
          if (!IsReadableStreamBYOBReader(this))
            throw byobReaderBrandCheckException("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readIntoRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            ReadableStreamReaderGenericRelease(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: !0 },
        read: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        closed: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBReader",
        configurable: !0
      });
      function IsReadableStreamBYOBReader(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests") ? !1 : x2 instanceof ReadableStreamBYOBReader;
      }
      function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        let stream = reader._ownerReadableStream;
        stream._disturbed = !0, stream._state === "errored" ? readIntoRequest._errorSteps(stream._storedError) : ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
      }
      function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
      }
      function ExtractHighWaterMark(strategy, defaultHWM) {
        let { highWaterMark } = strategy;
        if (highWaterMark === void 0)
          return defaultHWM;
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0)
          throw new RangeError("Invalid highWaterMark");
        return highWaterMark;
      }
      function ExtractSizeAlgorithm(strategy) {
        let { size } = strategy;
        return size || (() => 1);
      }
      function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        let highWaterMark = init == null ? void 0 : init.highWaterMark, size = init == null ? void 0 : init.size;
        return {
          highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
          size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
      }
      function convertQueuingStrategySize(fn, context) {
        return assertFunction(fn, context), (chunk) => convertUnrestrictedDouble(fn(chunk));
      }
      function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        let abort = original == null ? void 0 : original.abort, close = original == null ? void 0 : original.close, start = original == null ? void 0 : original.start, type = original == null ? void 0 : original.type, write = original == null ? void 0 : original.write;
        return {
          abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
          close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
          write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
          type
        };
      }
      function convertUnderlyingSinkAbortCallback(fn, original, context) {
        return assertFunction(fn, context), (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback(fn, original, context) {
        return assertFunction(fn, context), () => promiseCall(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback(fn, original, context) {
        return assertFunction(fn, context), (controller) => reflectCall(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback(fn, original, context) {
        return assertFunction(fn, context), (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      function assertWritableStream(x2, context) {
        if (!IsWritableStream(x2))
          throw new TypeError(`${context} is not a WritableStream.`);
      }
      function isAbortSignal2(value) {
        if (typeof value != "object" || value === null)
          return !1;
        try {
          return typeof value.aborted == "boolean";
        } catch {
          return !1;
        }
      }
      let supportsAbortController = typeof AbortController == "function";
      function createAbortController() {
        if (supportsAbortController)
          return new AbortController();
      }
      class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          rawUnderlyingSink === void 0 ? rawUnderlyingSink = null : assertObject(rawUnderlyingSink, "First parameter");
          let strategy = convertQueuingStrategy(rawStrategy, "Second parameter"), underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
          if (InitializeWritableStream(this), underlyingSink.type !== void 0)
            throw new RangeError("Invalid type is specified");
          let sizeAlgorithm = ExtractSizeAlgorithm(strategy), highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        get locked() {
          if (!IsWritableStream(this))
            throw streamBrandCheckException$2("locked");
          return IsWritableStreamLocked(this);
        }
        abort(reason = void 0) {
          return IsWritableStream(this) ? IsWritableStreamLocked(this) ? promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer")) : WritableStreamAbort(this, reason) : promiseRejectedWith(streamBrandCheckException$2("abort"));
        }
        close() {
          return IsWritableStream(this) ? IsWritableStreamLocked(this) ? promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer")) : WritableStreamCloseQueuedOrInFlight(this) ? promiseRejectedWith(new TypeError("Cannot close an already-closing stream")) : WritableStreamClose(this) : promiseRejectedWith(streamBrandCheckException$2("close"));
        }
        getWriter() {
          if (!IsWritableStream(this))
            throw streamBrandCheckException$2("getWriter");
          return AcquireWritableStreamDefaultWriter(this);
        }
      }
      Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: !0 },
        close: { enumerable: !0 },
        getWriter: { enumerable: !0 },
        locked: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStream",
        configurable: !0
      });
      function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
      }
      function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        let stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        let controller = Object.create(WritableStreamDefaultController.prototype);
        return SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm), stream;
      }
      function InitializeWritableStream(stream) {
        stream._state = "writable", stream._storedError = void 0, stream._writer = void 0, stream._writableStreamController = void 0, stream._writeRequests = new SimpleQueue(), stream._inFlightWriteRequest = void 0, stream._closeRequest = void 0, stream._inFlightCloseRequest = void 0, stream._pendingAbortRequest = void 0, stream._backpressure = !1;
      }
      function IsWritableStream(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_writableStreamController") ? !1 : x2 instanceof WritableStream;
      }
      function IsWritableStreamLocked(stream) {
        return stream._writer !== void 0;
      }
      function WritableStreamAbort(stream, reason) {
        var _a4;
        if (stream._state === "closed" || stream._state === "errored")
          return promiseResolvedWith(void 0);
        stream._writableStreamController._abortReason = reason, (_a4 = stream._writableStreamController._abortController) === null || _a4 === void 0 || _a4.abort();
        let state = stream._state;
        if (state === "closed" || state === "errored")
          return promiseResolvedWith(void 0);
        if (stream._pendingAbortRequest !== void 0)
          return stream._pendingAbortRequest._promise;
        let wasAlreadyErroring = !1;
        state === "erroring" && (wasAlreadyErroring = !0, reason = void 0);
        let promise = newPromise((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
          };
        });
        return stream._pendingAbortRequest._promise = promise, wasAlreadyErroring || WritableStreamStartErroring(stream, reason), promise;
      }
      function WritableStreamClose(stream) {
        let state = stream._state;
        if (state === "closed" || state === "errored")
          return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        let promise = newPromise((resolve, reject) => {
          let closeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._closeRequest = closeRequest;
        }), writer = stream._writer;
        return writer !== void 0 && stream._backpressure && state === "writable" && defaultWriterReadyPromiseResolve(writer), WritableStreamDefaultControllerClose(stream._writableStreamController), promise;
      }
      function WritableStreamAddWriteRequest(stream) {
        return newPromise((resolve, reject) => {
          let writeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._writeRequests.push(writeRequest);
        });
      }
      function WritableStreamDealWithRejection(stream, error) {
        if (stream._state === "writable") {
          WritableStreamStartErroring(stream, error);
          return;
        }
        WritableStreamFinishErroring(stream);
      }
      function WritableStreamStartErroring(stream, reason) {
        let controller = stream._writableStreamController;
        stream._state = "erroring", stream._storedError = reason;
        let writer = stream._writer;
        writer !== void 0 && WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason), !WritableStreamHasOperationMarkedInFlight(stream) && controller._started && WritableStreamFinishErroring(stream);
      }
      function WritableStreamFinishErroring(stream) {
        stream._state = "errored", stream._writableStreamController[ErrorSteps]();
        let storedError = stream._storedError;
        if (stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        }), stream._writeRequests = new SimpleQueue(), stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        let abortRequest = stream._pendingAbortRequest;
        if (stream._pendingAbortRequest = void 0, abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError), WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        let promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, () => {
          abortRequest._resolve(), WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        }, (reason) => {
          abortRequest._reject(reason), WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        });
      }
      function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(void 0), stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error), stream._inFlightWriteRequest = void 0, WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(void 0), stream._inFlightCloseRequest = void 0, stream._state === "erroring" && (stream._storedError = void 0, stream._pendingAbortRequest !== void 0 && (stream._pendingAbortRequest._resolve(), stream._pendingAbortRequest = void 0)), stream._state = "closed";
        let writer = stream._writer;
        writer !== void 0 && defaultWriterClosedPromiseResolve(writer);
      }
      function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error), stream._inFlightCloseRequest = void 0, stream._pendingAbortRequest !== void 0 && (stream._pendingAbortRequest._reject(error), stream._pendingAbortRequest = void 0), WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamCloseQueuedOrInFlight(stream) {
        return !(stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0);
      }
      function WritableStreamHasOperationMarkedInFlight(stream) {
        return !(stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0);
      }
      function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest, stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        stream._closeRequest !== void 0 && (stream._closeRequest._reject(stream._storedError), stream._closeRequest = void 0);
        let writer = stream._writer;
        writer !== void 0 && defaultWriterClosedPromiseReject(writer, stream._storedError);
      }
      function WritableStreamUpdateBackpressure(stream, backpressure) {
        let writer = stream._writer;
        writer !== void 0 && backpressure !== stream._backpressure && (backpressure ? defaultWriterReadyPromiseReset(writer) : defaultWriterReadyPromiseResolve(writer)), stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter {
        constructor(stream) {
          if (assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter"), assertWritableStream(stream, "First parameter"), IsWritableStreamLocked(stream))
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = stream, stream._writer = this;
          let state = stream._state;
          if (state === "writable")
            !WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure ? defaultWriterReadyPromiseInitialize(this) : defaultWriterReadyPromiseInitializeAsResolved(this), defaultWriterClosedPromiseInitialize(this);
          else if (state === "erroring")
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError), defaultWriterClosedPromiseInitialize(this);
          else if (state === "closed")
            defaultWriterReadyPromiseInitializeAsResolved(this), defaultWriterClosedPromiseInitializeAsResolved(this);
          else {
            let storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError), defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
          }
        }
        get closed() {
          return IsWritableStreamDefaultWriter(this) ? this._closedPromise : promiseRejectedWith(defaultWriterBrandCheckException("closed"));
        }
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter(this))
            throw defaultWriterBrandCheckException("desiredSize");
          if (this._ownerWritableStream === void 0)
            throw defaultWriterLockException("desiredSize");
          return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        get ready() {
          return IsWritableStreamDefaultWriter(this) ? this._readyPromise : promiseRejectedWith(defaultWriterBrandCheckException("ready"));
        }
        abort(reason = void 0) {
          return IsWritableStreamDefaultWriter(this) ? this._ownerWritableStream === void 0 ? promiseRejectedWith(defaultWriterLockException("abort")) : WritableStreamDefaultWriterAbort(this, reason) : promiseRejectedWith(defaultWriterBrandCheckException("abort"));
        }
        close() {
          if (!IsWritableStreamDefaultWriter(this))
            return promiseRejectedWith(defaultWriterBrandCheckException("close"));
          let stream = this._ownerWritableStream;
          return stream === void 0 ? promiseRejectedWith(defaultWriterLockException("close")) : WritableStreamCloseQueuedOrInFlight(stream) ? promiseRejectedWith(new TypeError("Cannot close an already-closing stream")) : WritableStreamDefaultWriterClose(this);
        }
        releaseLock() {
          if (!IsWritableStreamDefaultWriter(this))
            throw defaultWriterBrandCheckException("releaseLock");
          this._ownerWritableStream !== void 0 && WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = void 0) {
          return IsWritableStreamDefaultWriter(this) ? this._ownerWritableStream === void 0 ? promiseRejectedWith(defaultWriterLockException("write to")) : WritableStreamDefaultWriterWrite(this, chunk) : promiseRejectedWith(defaultWriterBrandCheckException("write"));
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: !0 },
        close: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        write: { enumerable: !0 },
        closed: { enumerable: !0 },
        desiredSize: { enumerable: !0 },
        ready: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultWriter",
        configurable: !0
      });
      function IsWritableStreamDefaultWriter(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream") ? !1 : x2 instanceof WritableStreamDefaultWriter;
      }
      function WritableStreamDefaultWriterAbort(writer, reason) {
        let stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
      }
      function WritableStreamDefaultWriterClose(writer) {
        let stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        let stream = writer._ownerWritableStream, state = stream._state;
        return WritableStreamCloseQueuedOrInFlight(stream) || state === "closed" ? promiseResolvedWith(void 0) : state === "errored" ? promiseRejectedWith(stream._storedError) : WritableStreamDefaultWriterClose(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        writer._closedPromiseState === "pending" ? defaultWriterClosedPromiseReject(writer, error) : defaultWriterClosedPromiseResetToRejected(writer, error);
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        writer._readyPromiseState === "pending" ? defaultWriterReadyPromiseReject(writer, error) : defaultWriterReadyPromiseResetToRejected(writer, error);
      }
      function WritableStreamDefaultWriterGetDesiredSize(writer) {
        let stream = writer._ownerWritableStream, state = stream._state;
        return state === "errored" || state === "erroring" ? null : state === "closed" ? 0 : WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
      }
      function WritableStreamDefaultWriterRelease(writer) {
        let stream = writer._ownerWritableStream, releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError), WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError), stream._writer = void 0, writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite(writer, chunk) {
        let stream = writer._ownerWritableStream, controller = stream._writableStreamController, chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream)
          return promiseRejectedWith(defaultWriterLockException("write to"));
        let state = stream._state;
        if (state === "errored")
          return promiseRejectedWith(stream._storedError);
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed")
          return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
        if (state === "erroring")
          return promiseRejectedWith(stream._storedError);
        let promise = WritableStreamAddWriteRequest(stream);
        return WritableStreamDefaultControllerWrite(controller, chunk, chunkSize), promise;
      }
      let closeSentinel = {};
      class WritableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!IsWritableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$2("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!IsWritableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$2("signal");
          if (this._abortController === void 0)
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(e2 = void 0) {
          if (!IsWritableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$2("error");
          this._controlledWritableStream._state === "writable" && WritableStreamDefaultControllerError(this, e2);
        }
        [AbortSteps](reason) {
          let result = this._abortAlgorithm(reason);
          return WritableStreamDefaultControllerClearAlgorithms(this), result;
        }
        [ErrorSteps]() {
          ResetQueue(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: !0 },
        signal: { enumerable: !0 },
        error: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultController",
        configurable: !0
      });
      function IsWritableStreamDefaultController(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream") ? !1 : x2 instanceof WritableStreamDefaultController;
      }
      function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream, stream._writableStreamController = controller, controller._queue = void 0, controller._queueTotalSize = void 0, ResetQueue(controller), controller._abortReason = void 0, controller._abortController = createAbortController(), controller._started = !1, controller._strategySizeAlgorithm = sizeAlgorithm, controller._strategyHWM = highWaterMark, controller._writeAlgorithm = writeAlgorithm, controller._closeAlgorithm = closeAlgorithm, controller._abortAlgorithm = abortAlgorithm;
        let backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        let startResult = startAlgorithm(), startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, () => {
          controller._started = !0, WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (r2) => {
          controller._started = !0, WritableStreamDealWithRejection(stream, r2);
        });
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        let controller = Object.create(WritableStreamDefaultController.prototype), startAlgorithm = () => {
        }, writeAlgorithm = () => promiseResolvedWith(void 0), closeAlgorithm = () => promiseResolvedWith(void 0), abortAlgorithm = () => promiseResolvedWith(void 0);
        underlyingSink.start !== void 0 && (startAlgorithm = () => underlyingSink.start(controller)), underlyingSink.write !== void 0 && (writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller)), underlyingSink.close !== void 0 && (closeAlgorithm = () => underlyingSink.close()), underlyingSink.abort !== void 0 && (abortAlgorithm = (reason) => underlyingSink.abort(reason)), SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = void 0, controller._closeAlgorithm = void 0, controller._abortAlgorithm = void 0, controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0), WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          return WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE), 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
          return;
        }
        let stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
          let backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        let stream = controller._controlledWritableStream;
        if (!controller._started || stream._inFlightWriteRequest !== void 0)
          return;
        if (stream._state === "erroring") {
          WritableStreamFinishErroring(stream);
          return;
        }
        if (controller._queue.length === 0)
          return;
        let value = PeekQueueValue(controller);
        value === closeSentinel ? WritableStreamDefaultControllerProcessClose(controller) : WritableStreamDefaultControllerProcessWrite(controller, value);
      }
      function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        controller._controlledWritableStream._state === "writable" && WritableStreamDefaultControllerError(controller, error);
      }
      function WritableStreamDefaultControllerProcessClose(controller) {
        let stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream), DequeueValue(controller);
        let sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller), uponPromise(sinkClosePromise, () => {
          WritableStreamFinishInFlightClose(stream);
        }, (reason) => {
          WritableStreamFinishInFlightCloseWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        let stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        let sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, () => {
          WritableStreamFinishInFlightWrite(stream);
          let state = stream._state;
          if (DequeueValue(controller), !WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
            let backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (reason) => {
          stream._state === "writable" && WritableStreamDefaultControllerClearAlgorithms(controller), WritableStreamFinishInFlightWriteWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerGetBackpressure(controller) {
        return WritableStreamDefaultControllerGetDesiredSize(controller) <= 0;
      }
      function WritableStreamDefaultControllerError(controller, error) {
        let stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller), WritableStreamStartErroring(stream, error);
      }
      function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
      }
      function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
      }
      function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
      }
      function defaultWriterLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released writer");
      }
      function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
          writer._closedPromise_resolve = resolve, writer._closedPromise_reject = reject, writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer), defaultWriterClosedPromiseReject(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer), defaultWriterClosedPromiseResolve(writer);
      }
      function defaultWriterClosedPromiseReject(writer, reason) {
        writer._closedPromise_reject !== void 0 && (setPromiseIsHandledToTrue(writer._closedPromise), writer._closedPromise_reject(reason), writer._closedPromise_resolve = void 0, writer._closedPromise_reject = void 0, writer._closedPromiseState = "rejected");
      }
      function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterClosedPromiseResolve(writer) {
        writer._closedPromise_resolve !== void 0 && (writer._closedPromise_resolve(void 0), writer._closedPromise_resolve = void 0, writer._closedPromise_reject = void 0, writer._closedPromiseState = "resolved");
      }
      function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
          writer._readyPromise_resolve = resolve, writer._readyPromise_reject = reject;
        }), writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer), defaultWriterReadyPromiseReject(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer), defaultWriterReadyPromiseResolve(writer);
      }
      function defaultWriterReadyPromiseReject(writer, reason) {
        writer._readyPromise_reject !== void 0 && (setPromiseIsHandledToTrue(writer._readyPromise), writer._readyPromise_reject(reason), writer._readyPromise_resolve = void 0, writer._readyPromise_reject = void 0, writer._readyPromiseState = "rejected");
      }
      function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
      }
      function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterReadyPromiseResolve(writer) {
        writer._readyPromise_resolve !== void 0 && (writer._readyPromise_resolve(void 0), writer._readyPromise_resolve = void 0, writer._readyPromise_reject = void 0, writer._readyPromiseState = "fulfilled");
      }
      let NativeDOMException = typeof DOMException < "u" ? DOMException : void 0;
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor == "function" || typeof ctor == "object"))
          return !1;
        try {
          return new ctor(), !0;
        } catch {
          return !1;
        }
      }
      function createDOMExceptionPolyfill() {
        let ctor = function(message, name) {
          this.message = message || "", this.name = name || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        };
        return ctor.prototype = Object.create(Error.prototype), Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: !0, configurable: !0 }), ctor;
      }
      let DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
      function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        let reader = AcquireReadableStreamDefaultReader(source), writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = !0;
        let shuttingDown = !1, currentWrite = promiseResolvedWith(void 0);
        return newPromise((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            if (abortAlgorithm = () => {
              let error = new DOMException$1("Aborted", "AbortError"), actions = [];
              preventAbort || actions.push(() => dest._state === "writable" ? WritableStreamAbort(dest, error) : promiseResolvedWith(void 0)), preventCancel || actions.push(() => source._state === "readable" ? ReadableStreamCancel(source, error) : promiseResolvedWith(void 0)), shutdownWithAction(() => Promise.all(actions.map((action) => action())), !0, error);
            }, signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
              function next(done) {
                done ? resolveLoop() : PerformPromiseThen(pipeStep(), next, rejectLoop);
              }
              next(!1);
            });
          }
          function pipeStep() {
            return shuttingDown ? promiseResolvedWith(!0) : PerformPromiseThen(writer._readyPromise, () => newPromise((resolveRead, rejectRead) => {
              ReadableStreamDefaultReaderRead(reader, {
                _chunkSteps: (chunk) => {
                  currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2), resolveRead(!1);
                },
                _closeSteps: () => resolveRead(!0),
                _errorSteps: rejectRead
              });
            }));
          }
          if (isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            preventAbort ? shutdown(!0, storedError) : shutdownWithAction(() => WritableStreamAbort(dest, storedError), !0, storedError);
          }), isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            preventCancel ? shutdown(!0, storedError) : shutdownWithAction(() => ReadableStreamCancel(source, storedError), !0, storedError);
          }), isOrBecomesClosed(source, reader._closedPromise, () => {
            preventClose ? shutdown() : shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
          }), WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
            let destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
            preventCancel ? shutdown(!0, destClosed) : shutdownWithAction(() => ReadableStreamCancel(source, destClosed), !0, destClosed);
          }
          setPromiseIsHandledToTrue(pipeLoop());
          function waitForWritesToFinish() {
            let oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
          }
          function isOrBecomesErrored(stream, promise, action) {
            stream._state === "errored" ? action(stream._storedError) : uponRejection(promise, action);
          }
          function isOrBecomesClosed(stream, promise, action) {
            stream._state === "closed" ? action() : uponFulfillment(promise, action);
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown)
              return;
            shuttingDown = !0, dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest) ? uponFulfillment(waitForWritesToFinish(), doTheRest) : doTheRest();
            function doTheRest() {
              uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(!0, newError));
            }
          }
          function shutdown(isError, error) {
            shuttingDown || (shuttingDown = !0, dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest) ? uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error)) : finalize(isError, error));
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer), ReadableStreamReaderGenericRelease(reader), signal !== void 0 && signal.removeEventListener("abort", abortAlgorithm), isError ? reject(error) : resolve(void 0);
          }
        });
      }
      class ReadableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsReadableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$1("desiredSize");
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$1("close");
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this))
            throw new TypeError("The stream is not in a state that permits close");
          ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$1("enqueue");
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this))
            throw new TypeError("The stream is not in a state that permits enqueue");
          return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableStreamDefaultController(this))
            throw defaultControllerBrandCheckException$1("error");
          ReadableStreamDefaultControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ResetQueue(this);
          let result = this._cancelAlgorithm(reason);
          return ReadableStreamDefaultControllerClearAlgorithms(this), result;
        }
        [PullSteps](readRequest) {
          let stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            let chunk = DequeueValue(this);
            this._closeRequested && this._queue.length === 0 ? (ReadableStreamDefaultControllerClearAlgorithms(this), ReadableStreamClose(stream)) : ReadableStreamDefaultControllerCallPullIfNeeded(this), readRequest._chunkSteps(chunk);
          } else
            ReadableStreamAddReadRequest(stream, readRequest), ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: !0 },
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultController",
        configurable: !0
      });
      function IsReadableStreamDefaultController(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream") ? !1 : x2 instanceof ReadableStreamDefaultController;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        if (!ReadableStreamDefaultControllerShouldCallPull(controller))
          return;
        if (controller._pulling) {
          controller._pullAgain = !0;
          return;
        }
        controller._pulling = !0;
        let pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = !1, controller._pullAgain && (controller._pullAgain = !1, ReadableStreamDefaultControllerCallPullIfNeeded(controller));
        }, (e2) => {
          ReadableStreamDefaultControllerError(controller, e2);
        });
      }
      function ReadableStreamDefaultControllerShouldCallPull(controller) {
        let stream = controller._controlledReadableStream;
        return !ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) || !controller._started ? !1 : !!(IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0 || ReadableStreamDefaultControllerGetDesiredSize(controller) > 0);
      }
      function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0, controller._cancelAlgorithm = void 0, controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller))
          return;
        let stream = controller._controlledReadableStream;
        controller._closeRequested = !0, controller._queue.length === 0 && (ReadableStreamDefaultControllerClearAlgorithms(controller), ReadableStreamClose(stream));
      }
      function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller))
          return;
        let stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0)
          ReadableStreamFulfillReadRequest(stream, chunk, !1);
        else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            throw ReadableStreamDefaultControllerError(controller, chunkSizeE), chunkSizeE;
          }
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            throw ReadableStreamDefaultControllerError(controller, enqueueE), enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      function ReadableStreamDefaultControllerError(controller, e2) {
        let stream = controller._controlledReadableStream;
        stream._state === "readable" && (ResetQueue(controller), ReadableStreamDefaultControllerClearAlgorithms(controller), ReadableStreamError(stream, e2));
      }
      function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        let state = controller._controlledReadableStream._state;
        return state === "errored" ? null : state === "closed" ? 0 : controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure(controller) {
        return !ReadableStreamDefaultControllerShouldCallPull(controller);
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        let state = controller._controlledReadableStream._state;
        return !controller._closeRequested && state === "readable";
      }
      function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream, controller._queue = void 0, controller._queueTotalSize = void 0, ResetQueue(controller), controller._started = !1, controller._closeRequested = !1, controller._pullAgain = !1, controller._pulling = !1, controller._strategySizeAlgorithm = sizeAlgorithm, controller._strategyHWM = highWaterMark, controller._pullAlgorithm = pullAlgorithm, controller._cancelAlgorithm = cancelAlgorithm, stream._readableStreamController = controller;
        let startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = !0, ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableStreamDefaultControllerError(controller, r2);
        });
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        let controller = Object.create(ReadableStreamDefaultController.prototype), startAlgorithm = () => {
        }, pullAlgorithm = () => promiseResolvedWith(void 0), cancelAlgorithm = () => promiseResolvedWith(void 0);
        underlyingSource.start !== void 0 && (startAlgorithm = () => underlyingSource.start(controller)), underlyingSource.pull !== void 0 && (pullAlgorithm = () => underlyingSource.pull(controller)), underlyingSource.cancel !== void 0 && (cancelAlgorithm = (reason) => underlyingSource.cancel(reason)), SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
      }
      function ReadableStreamTee(stream, cloneForBranch2) {
        return IsReadableByteStreamController(stream._readableStreamController) ? ReadableByteStreamTee(stream) : ReadableStreamDefaultTee(stream);
      }
      function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        let reader = AcquireReadableStreamDefaultReader(stream), reading = !1, readAgain = !1, canceled1 = !1, canceled2 = !1, reason1, reason2, branch1, branch2, resolveCancelPromise, cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          return reading ? (readAgain = !0, promiseResolvedWith(void 0)) : (reading = !0, ReadableStreamDefaultReaderRead(reader, {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgain = !1;
                let chunk1 = chunk, chunk2 = chunk;
                canceled1 || ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1), canceled2 || ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2), reading = !1, readAgain && pullAlgorithm();
              });
            },
            _closeSteps: () => {
              reading = !1, canceled1 || ReadableStreamDefaultControllerClose(branch1._readableStreamController), canceled2 || ReadableStreamDefaultControllerClose(branch2._readableStreamController), (!canceled1 || !canceled2) && resolveCancelPromise(void 0);
            },
            _errorSteps: () => {
              reading = !1;
            }
          }), promiseResolvedWith(void 0));
        }
        function cancel1Algorithm(reason) {
          if (canceled1 = !0, reason1 = reason, canceled2) {
            let compositeReason = CreateArrayFromList([reason1, reason2]), cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          if (canceled2 = !0, reason2 = reason, canceled1) {
            let compositeReason = CreateArrayFromList([reason1, reason2]), cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        return branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm), branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm), uponRejection(reader._closedPromise, (r2) => {
          ReadableStreamDefaultControllerError(branch1._readableStreamController, r2), ReadableStreamDefaultControllerError(branch2._readableStreamController, r2), (!canceled1 || !canceled2) && resolveCancelPromise(void 0);
        }), [branch1, branch2];
      }
      function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream), reading = !1, readAgainForBranch1 = !1, readAgainForBranch2 = !1, canceled1 = !1, canceled2 = !1, reason1, reason2, branch1, branch2, resolveCancelPromise, cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection(thisReader._closedPromise, (r2) => {
            thisReader === reader && (ReadableByteStreamControllerError(branch1._readableStreamController, r2), ReadableByteStreamControllerError(branch2._readableStreamController, r2), (!canceled1 || !canceled2) && resolveCancelPromise(void 0));
          });
        }
        function pullWithDefaultReader() {
          IsReadableStreamBYOBReader(reader) && (ReadableStreamReaderGenericRelease(reader), reader = AcquireReadableStreamDefaultReader(stream), forwardReaderError(reader)), ReadableStreamDefaultReaderRead(reader, {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = !1, readAgainForBranch2 = !1;
                let chunk1 = chunk, chunk2 = chunk;
                if (!canceled1 && !canceled2)
                  try {
                    chunk2 = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(branch1._readableStreamController, cloneE), ReadableByteStreamControllerError(branch2._readableStreamController, cloneE), resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                canceled1 || ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1), canceled2 || ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2), reading = !1, readAgainForBranch1 ? pull1Algorithm() : readAgainForBranch2 && pull2Algorithm();
              });
            },
            _closeSteps: () => {
              reading = !1, canceled1 || ReadableByteStreamControllerClose(branch1._readableStreamController), canceled2 || ReadableByteStreamControllerClose(branch2._readableStreamController), branch1._readableStreamController._pendingPullIntos.length > 0 && ReadableByteStreamControllerRespond(branch1._readableStreamController, 0), branch2._readableStreamController._pendingPullIntos.length > 0 && ReadableByteStreamControllerRespond(branch2._readableStreamController, 0), (!canceled1 || !canceled2) && resolveCancelPromise(void 0);
            },
            _errorSteps: () => {
              reading = !1;
            }
          });
        }
        function pullWithBYOBReader(view, forBranch2) {
          IsReadableStreamDefaultReader(reader) && (ReadableStreamReaderGenericRelease(reader), reader = AcquireReadableStreamBYOBReader(stream), forwardReaderError(reader));
          let byobBranch = forBranch2 ? branch2 : branch1, otherBranch = forBranch2 ? branch1 : branch2;
          ReadableStreamBYOBReaderRead(reader, view, {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = !1, readAgainForBranch2 = !1;
                let byobCanceled = forBranch2 ? canceled2 : canceled1;
                if (forBranch2 ? canceled1 : canceled2)
                  byobCanceled || ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                else {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE), ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE), resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                  byobCanceled || ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk), ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                }
                reading = !1, readAgainForBranch1 ? pull1Algorithm() : readAgainForBranch2 && pull2Algorithm();
              });
            },
            _closeSteps: (chunk) => {
              reading = !1;
              let byobCanceled = forBranch2 ? canceled2 : canceled1, otherCanceled = forBranch2 ? canceled1 : canceled2;
              byobCanceled || ReadableByteStreamControllerClose(byobBranch._readableStreamController), otherCanceled || ReadableByteStreamControllerClose(otherBranch._readableStreamController), chunk !== void 0 && (byobCanceled || ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk), !otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0 && ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0)), (!byobCanceled || !otherCanceled) && resolveCancelPromise(void 0);
            },
            _errorSteps: () => {
              reading = !1;
            }
          });
        }
        function pull1Algorithm() {
          if (reading)
            return readAgainForBranch1 = !0, promiseResolvedWith(void 0);
          reading = !0;
          let byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
          return byobRequest === null ? pullWithDefaultReader() : pullWithBYOBReader(byobRequest._view, !1), promiseResolvedWith(void 0);
        }
        function pull2Algorithm() {
          if (reading)
            return readAgainForBranch2 = !0, promiseResolvedWith(void 0);
          reading = !0;
          let byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
          return byobRequest === null ? pullWithDefaultReader() : pullWithBYOBReader(byobRequest._view, !0), promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          if (canceled1 = !0, reason1 = reason, canceled2) {
            let compositeReason = CreateArrayFromList([reason1, reason2]), cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          if (canceled2 = !0, reason2 = reason, canceled1) {
            let compositeReason = CreateArrayFromList([reason1, reason2]), cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        return branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm), branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm), forwardReaderError(reader), [branch1, branch2];
      }
      function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        let original = source, autoAllocateChunkSize = original == null ? void 0 : original.autoAllocateChunkSize, cancel = original == null ? void 0 : original.cancel, pull = original == null ? void 0 : original.pull, start = original == null ? void 0 : original.start, type = original == null ? void 0 : original.type;
        return {
          autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
          cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
          pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
          type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
      }
      function convertUnderlyingSourceCancelCallback(fn, original, context) {
        return assertFunction(fn, context), (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback(fn, original, context) {
        return assertFunction(fn, context), (controller) => promiseCall(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback(fn, original, context) {
        return assertFunction(fn, context), (controller) => reflectCall(fn, original, [controller]);
      }
      function convertReadableStreamType(type, context) {
        if (type = `${type}`, type !== "bytes")
          throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        return type;
      }
      function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        let mode = options == null ? void 0 : options.mode;
        return {
          mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
      }
      function convertReadableStreamReaderMode(mode, context) {
        if (mode = `${mode}`, mode !== "byob")
          throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return mode;
      }
      function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        let preventCancel = options == null ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        let preventAbort = options == null ? void 0 : options.preventAbort, preventCancel = options == null ? void 0 : options.preventCancel, preventClose = options == null ? void 0 : options.preventClose, signal = options == null ? void 0 : options.signal;
        return signal !== void 0 && assertAbortSignal(signal, `${context} has member 'signal' that`), {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal
        };
      }
      function assertAbortSignal(signal, context) {
        if (!isAbortSignal2(signal))
          throw new TypeError(`${context} is not an AbortSignal.`);
      }
      function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        let readable = pair == null ? void 0 : pair.readable;
        assertRequiredField(readable, "readable", "ReadableWritablePair"), assertReadableStream(readable, `${context} has member 'readable' that`);
        let writable = pair == null ? void 0 : pair.writable;
        return assertRequiredField(writable, "writable", "ReadableWritablePair"), assertWritableStream(writable, `${context} has member 'writable' that`), { readable, writable };
      }
      class ReadableStream2 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          rawUnderlyingSource === void 0 ? rawUnderlyingSource = null : assertObject(rawUnderlyingSource, "First parameter");
          let strategy = convertQueuingStrategy(rawStrategy, "Second parameter"), underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
          if (InitializeReadableStream(this), underlyingSource.type === "bytes") {
            if (strategy.size !== void 0)
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            let highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
          } else {
            let sizeAlgorithm = ExtractSizeAlgorithm(strategy), highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
          }
        }
        get locked() {
          if (!IsReadableStream(this))
            throw streamBrandCheckException$1("locked");
          return IsReadableStreamLocked(this);
        }
        cancel(reason = void 0) {
          return IsReadableStream(this) ? IsReadableStreamLocked(this) ? promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader")) : ReadableStreamCancel(this, reason) : promiseRejectedWith(streamBrandCheckException$1("cancel"));
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream(this))
            throw streamBrandCheckException$1("getReader");
          return convertReaderOptions(rawOptions, "First parameter").mode === void 0 ? AcquireReadableStreamDefaultReader(this) : AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream(this))
            throw streamBrandCheckException$1("pipeThrough");
          assertRequiredArgument(rawTransform, 1, "pipeThrough");
          let transform = convertReadableWritablePair(rawTransform, "First parameter"), options = convertPipeOptions(rawOptions, "Second parameter");
          if (IsReadableStreamLocked(this))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (IsWritableStreamLocked(transform.writable))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          let promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          return setPromiseIsHandledToTrue(promise), transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream(this))
            return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
          if (destination === void 0)
            return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
          if (!IsWritableStream(destination))
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let options;
          try {
            options = convertPipeOptions(rawOptions, "Second parameter");
          } catch (e2) {
            return promiseRejectedWith(e2);
          }
          return IsReadableStreamLocked(this) ? promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : IsWritableStreamLocked(destination) ? promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        tee() {
          if (!IsReadableStream(this))
            throw streamBrandCheckException$1("tee");
          let branches = ReadableStreamTee(this);
          return CreateArrayFromList(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream(this))
            throw streamBrandCheckException$1("values");
          let options = convertIteratorOptions(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        }
      }
      Object.defineProperties(ReadableStream2.prototype, {
        cancel: { enumerable: !0 },
        getReader: { enumerable: !0 },
        pipeThrough: { enumerable: !0 },
        pipeTo: { enumerable: !0 },
        tee: { enumerable: !0 },
        values: { enumerable: !0 },
        locked: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStream",
        configurable: !0
      }), typeof SymbolPolyfill.asyncIterator == "symbol" && Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream2.prototype.values,
        writable: !0,
        configurable: !0
      });
      function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        let stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        let controller = Object.create(ReadableStreamDefaultController.prototype);
        return SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm), stream;
      }
      function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        let stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        let controller = Object.create(ReadableByteStreamController.prototype);
        return SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0), stream;
      }
      function InitializeReadableStream(stream) {
        stream._state = "readable", stream._reader = void 0, stream._storedError = void 0, stream._disturbed = !1;
      }
      function IsReadableStream(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_readableStreamController") ? !1 : x2 instanceof ReadableStream2;
      }
      function IsReadableStreamLocked(stream) {
        return stream._reader !== void 0;
      }
      function ReadableStreamCancel(stream, reason) {
        if (stream._disturbed = !0, stream._state === "closed")
          return promiseResolvedWith(void 0);
        if (stream._state === "errored")
          return promiseRejectedWith(stream._storedError);
        ReadableStreamClose(stream);
        let reader = stream._reader;
        reader !== void 0 && IsReadableStreamBYOBReader(reader) && (reader._readIntoRequests.forEach((readIntoRequest) => {
          readIntoRequest._closeSteps(void 0);
        }), reader._readIntoRequests = new SimpleQueue());
        let sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop2);
      }
      function ReadableStreamClose(stream) {
        stream._state = "closed";
        let reader = stream._reader;
        reader !== void 0 && (defaultReaderClosedPromiseResolve(reader), IsReadableStreamDefaultReader(reader) && (reader._readRequests.forEach((readRequest) => {
          readRequest._closeSteps();
        }), reader._readRequests = new SimpleQueue()));
      }
      function ReadableStreamError(stream, e2) {
        stream._state = "errored", stream._storedError = e2;
        let reader = stream._reader;
        reader !== void 0 && (defaultReaderClosedPromiseReject(reader, e2), IsReadableStreamDefaultReader(reader) ? (reader._readRequests.forEach((readRequest) => {
          readRequest._errorSteps(e2);
        }), reader._readRequests = new SimpleQueue()) : (reader._readIntoRequests.forEach((readIntoRequest) => {
          readIntoRequest._errorSteps(e2);
        }), reader._readIntoRequests = new SimpleQueue()));
      }
      function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
      }
      function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        let highWaterMark = init == null ? void 0 : init.highWaterMark;
        return assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit"), {
          highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
      }
      let byteLengthSizeFunction = (chunk) => chunk.byteLength;
      try {
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: !0
        });
      } catch {
      }
      class ByteLengthQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy"), options = convertQueuingStrategyInit(options, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy(this))
            throw byteLengthBrandCheckException("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsByteLengthQueuingStrategy(this))
            throw byteLengthBrandCheckException("size");
          return byteLengthSizeFunction;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: !0 },
        size: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "ByteLengthQueuingStrategy",
        configurable: !0
      });
      function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
      }
      function IsByteLengthQueuingStrategy(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark") ? !1 : x2 instanceof ByteLengthQueuingStrategy;
      }
      let countSizeFunction = () => 1;
      try {
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: !0
        });
      } catch {
      }
      class CountQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "CountQueuingStrategy"), options = convertQueuingStrategyInit(options, "First parameter"), this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsCountQueuingStrategy(this))
            throw countBrandCheckException("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsCountQueuingStrategy(this))
            throw countBrandCheckException("size");
          return countSizeFunction;
        }
      }
      Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: !0 },
        size: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "CountQueuingStrategy",
        configurable: !0
      });
      function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
      }
      function IsCountQueuingStrategy(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark") ? !1 : x2 instanceof CountQueuingStrategy;
      }
      function convertTransformer(original, context) {
        assertDictionary(original, context);
        let flush = original == null ? void 0 : original.flush, readableType = original == null ? void 0 : original.readableType, start = original == null ? void 0 : original.start, transform = original == null ? void 0 : original.transform, writableType = original == null ? void 0 : original.writableType;
        return {
          flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
          readableType,
          start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
          transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
          writableType
        };
      }
      function convertTransformerFlushCallback(fn, original, context) {
        return assertFunction(fn, context), (controller) => promiseCall(fn, original, [controller]);
      }
      function convertTransformerStartCallback(fn, original, context) {
        return assertFunction(fn, context), (controller) => reflectCall(fn, original, [controller]);
      }
      function convertTransformerTransformCallback(fn, original, context) {
        return assertFunction(fn, context), (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      class TransformStream {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
          rawTransformer === void 0 && (rawTransformer = null);
          let writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter"), readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter"), transformer = convertTransformer(rawTransformer, "First parameter");
          if (transformer.readableType !== void 0)
            throw new RangeError("Invalid readableType specified");
          if (transformer.writableType !== void 0)
            throw new RangeError("Invalid writableType specified");
          let readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0), readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy), writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1), writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy), startPromise_resolve, startPromise = newPromise((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm), SetUpTransformStreamDefaultControllerFromTransformer(this, transformer), transformer.start !== void 0 ? startPromise_resolve(transformer.start(this._transformStreamController)) : startPromise_resolve(void 0);
        }
        get readable() {
          if (!IsTransformStream(this))
            throw streamBrandCheckException("readable");
          return this._readable;
        }
        get writable() {
          if (!IsTransformStream(this))
            throw streamBrandCheckException("writable");
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: !0 },
        writable: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStream",
        configurable: !0
      });
      function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
          return TransformStreamErrorWritableAndUnblockWrite(stream, reason), promiseResolvedWith(void 0);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm), stream._backpressure = void 0, stream._backpressureChangePromise = void 0, stream._backpressureChangePromise_resolve = void 0, TransformStreamSetBackpressure(stream, !0), stream._transformStreamController = void 0;
      }
      function IsTransformStream(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_transformStreamController") ? !1 : x2 instanceof TransformStream;
      }
      function TransformStreamError(stream, e2) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2), TransformStreamErrorWritableAndUnblockWrite(stream, e2);
      }
      function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController), WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2), stream._backpressure && TransformStreamSetBackpressure(stream, !1);
      }
      function TransformStreamSetBackpressure(stream, backpressure) {
        stream._backpressureChangePromise !== void 0 && stream._backpressureChangePromise_resolve(), stream._backpressureChangePromise = newPromise((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        }), stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsTransformStreamDefaultController(this))
            throw defaultControllerBrandCheckException("desiredSize");
          let readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController(this))
            throw defaultControllerBrandCheckException("enqueue");
          TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController(this))
            throw defaultControllerBrandCheckException("error");
          TransformStreamDefaultControllerError(this, reason);
        }
        terminate() {
          if (!IsTransformStreamDefaultController(this))
            throw defaultControllerBrandCheckException("terminate");
          TransformStreamDefaultControllerTerminate(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        terminate: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof SymbolPolyfill.toStringTag == "symbol" && Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStreamDefaultController",
        configurable: !0
      });
      function IsTransformStreamDefaultController(x2) {
        return !typeIsObject(x2) || !Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream") ? !1 : x2 instanceof TransformStreamDefaultController;
      }
      function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream, stream._transformStreamController = controller, controller._transformAlgorithm = transformAlgorithm, controller._flushAlgorithm = flushAlgorithm;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        let controller = Object.create(TransformStreamDefaultController.prototype), transformAlgorithm = (chunk) => {
          try {
            return TransformStreamDefaultControllerEnqueue(controller, chunk), promiseResolvedWith(void 0);
          } catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
          }
        }, flushAlgorithm = () => promiseResolvedWith(void 0);
        transformer.transform !== void 0 && (transformAlgorithm = (chunk) => transformer.transform(chunk, controller)), transformer.flush !== void 0 && (flushAlgorithm = () => transformer.flush(controller)), SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
      }
      function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = void 0, controller._flushAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        let stream = controller._controlledTransformStream, readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController))
          throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e2) {
          throw TransformStreamErrorWritableAndUnblockWrite(stream, e2), stream._readable._storedError;
        }
        ReadableStreamDefaultControllerHasBackpressure(readableController) !== stream._backpressure && TransformStreamSetBackpressure(stream, !0);
      }
      function TransformStreamDefaultControllerError(controller, e2) {
        TransformStreamError(controller._controlledTransformStream, e2);
      }
      function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        let transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, void 0, (r2) => {
          throw TransformStreamError(controller._controlledTransformStream, r2), r2;
        });
      }
      function TransformStreamDefaultControllerTerminate(controller) {
        let stream = controller._controlledTransformStream, readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        let error = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
      }
      function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        let controller = stream._transformStreamController;
        if (stream._backpressure) {
          let backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith(backpressureChangePromise, () => {
            let writable = stream._writable;
            if (writable._state === "erroring")
              throw writable._storedError;
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
          });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
      }
      function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        return TransformStreamError(stream, reason), promiseResolvedWith(void 0);
      }
      function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        let readable = stream._readable, controller = stream._transformStreamController, flushPromise = controller._flushAlgorithm();
        return TransformStreamDefaultControllerClearAlgorithms(controller), transformPromiseWith(flushPromise, () => {
          if (readable._state === "errored")
            throw readable._storedError;
          ReadableStreamDefaultControllerClose(readable._readableStreamController);
        }, (r2) => {
          throw TransformStreamError(stream, r2), readable._storedError;
        });
      }
      function TransformStreamDefaultSourcePullAlgorithm(stream) {
        return TransformStreamSetBackpressure(stream, !1), stream._backpressureChangePromise;
      }
      function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
      }
      function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
      }
      exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy, exports2.CountQueuingStrategy = CountQueuingStrategy, exports2.ReadableByteStreamController = ReadableByteStreamController, exports2.ReadableStream = ReadableStream2, exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader, exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest, exports2.ReadableStreamDefaultController = ReadableStreamDefaultController, exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader, exports2.TransformStream = TransformStream, exports2.TransformStreamDefaultController = TransformStreamDefaultController, exports2.WritableStream = WritableStream, exports2.WritableStreamDefaultController = WritableStreamDefaultController, exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter, Object.defineProperty(exports2, "__esModule", { value: !0 });
    });
  }(ponyfill_es2018, ponyfill_es2018Exports)), ponyfill_es2018Exports;
}
async function* toIterator(parts, clone2 = !0) {
  for (let part of parts)
    if ("stream" in part)
      yield* part.stream();
    else if (ArrayBuffer.isView(part))
      if (clone2) {
        let position = part.byteOffset, end = part.byteOffset + part.byteLength;
        for (; position !== end; ) {
          let size = Math.min(end - position, POOL_SIZE), chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength, yield new Uint8Array(chunk);
        }
      } else
        yield part;
    else {
      let position = 0, b = part;
      for (; position !== b.size; ) {
        let buffer = await b.slice(position, Math.min(b.size, position + POOL_SIZE)).arrayBuffer();
        position += buffer.byteLength, yield new Uint8Array(buffer);
      }
    }
}
function formDataToBlob(F2, B = _Blob$1) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  return F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, `\r
`)}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, `\r
`)), c.push(`--${b}--`), new B(c, { type: "multipart/form-data; boundary=" + b });
}
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed)
    throw new TypeError(`body used already for: ${data.url}`);
  if (data[INTERNALS$2].disturbed = !0, data[INTERNALS$2].error)
    throw data[INTERNALS$2].error;
  let { body } = data;
  if (body === null)
    return import_node_buffer.Buffer.alloc(0);
  if (!(body instanceof import_node_stream.default))
    return import_node_buffer.Buffer.alloc(0);
  let accum = [], accumBytes = 0;
  try {
    for await (let chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        let error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        throw body.destroy(error), error;
      }
      accumBytes += chunk.length, accum.push(chunk);
    }
  } catch (error) {
    throw error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
  }
  if (body.readableEnded === !0 || body._readableState.ended === !0)
    try {
      return accum.every((c) => typeof c == "string") ? import_node_buffer.Buffer.from(accum.join("")) : import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
    }
  else
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
}
function fromRawHeaders(headers = []) {
  return new Headers(
    headers.reduce((result, value, index, array) => (index % 2 === 0 && result.push(array.slice(index, index + 2)), result), []).filter(([name, value]) => {
      try {
        return validateHeaderName(name), validateHeaderValue(name, String(value)), !0;
      } catch {
        return !1;
      }
    })
  );
}
function stripURLForUseAsAReferrer(url, originOnly = !1) {
  return url == null || (url = new URL(url), /^(about|blob|data):$/.test(url.protocol)) ? "no-referrer" : (url.username = "", url.password = "", url.hash = "", originOnly && (url.pathname = "", url.search = ""), url);
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy))
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol))
    return !0;
  let hostIp = url.host.replace(/(^\[)|(]$)/g, ""), hostIPVersion = (0, import_node_net.isIP)(hostIp);
  return hostIPVersion === 4 && /^127\./.test(hostIp) || hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp) ? !0 : url.host === "localhost" || url.host.endsWith(".localhost") ? !1 : url.protocol === "file:";
}
function isUrlPotentiallyTrustworthy(url) {
  return /^about:(blank|srcdoc)$/.test(url) || url.protocol === "data:" || /^(blob|filesystem):$/.test(url.protocol) ? !0 : isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "")
    return null;
  let policy = request.referrerPolicy;
  if (request.referrer === "about:client")
    return "no-referrer";
  let referrerSource = request.referrer, referrerURL = stripURLForUseAsAReferrer(referrerSource), referrerOrigin = stripURLForUseAsAReferrer(referrerSource, !0);
  referrerURL.toString().length > 4096 && (referrerURL = referrerOrigin), referrerURLCallback && (referrerURL = referrerURLCallback(referrerURL)), referrerOriginCallback && (referrerOrigin = referrerOriginCallback(referrerOrigin));
  let currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      return isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL) ? "no-referrer" : referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      return referrerURL.origin === currentURL.origin ? referrerURL : isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL) ? "no-referrer" : referrerOrigin;
    case "same-origin":
      return referrerURL.origin === currentURL.origin ? referrerURL : "no-referrer";
    case "origin-when-cross-origin":
      return referrerURL.origin === currentURL.origin ? referrerURL : referrerOrigin;
    case "no-referrer-when-downgrade":
      return isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL) ? "no-referrer" : referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  let policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/), policy = "";
  for (let token of policyTokens)
    token && ReferrerPolicy.has(token) && (policy = token);
  return policy;
}
async function fetch2(url, options_) {
  return new Promise((resolve, reject) => {
    let request = new Request(url, options_), { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol))
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    if (parsedURL.protocol === "data:") {
      let data = dataUriToBuffer(request.url), response2 = new Response3(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    let send = (parsedURL.protocol === "https:" ? import_node_https.default : import_node_http.default).request, { signal } = request, response = null, abort = () => {
      let error = new AbortError("The operation was aborted.");
      reject(error), request.body && request.body instanceof import_node_stream.default.Readable && request.body.destroy(error), !(!response || !response.body) && response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    let abortAndFinalize = () => {
      abort(), finalize();
    }, request_ = send(parsedURL.toString(), options);
    signal && signal.addEventListener("abort", abortAndFinalize);
    let finalize = () => {
      request_.abort(), signal && signal.removeEventListener("abort", abortAndFinalize);
    };
    request_.on("error", (error) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error)), finalize();
    }), fixResponseChunkedTransferBadEnding(request_, (error) => {
      response && response.body && response.body.destroy(error);
    }), process.version < "v14" && request_.on("socket", (s2) => {
      let endedWithEventsCount;
      s2.prependListener("end", () => {
        endedWithEventsCount = s2._eventsCount;
      }), s2.prependListener("close", (hadError) => {
        if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
          let error = new Error("Premature close");
          error.code = "ERR_STREAM_PREMATURE_CLOSE", response.body.emit("error", error);
        }
      });
    }), request_.on("response", (response_) => {
      request_.setTimeout(0);
      let headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        let location = headers.get("Location"), locationURL = null;
        try {
          locationURL = location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect")), finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect")), finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null)
              break;
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect")), finalize();
              return;
            }
            let requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL))
              for (let name of ["authorization", "www-authenticate", "cookie", "cookie2"])
                requestOptions.headers.delete(name);
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), finalize();
              return;
            }
            (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") && (requestOptions.method = "GET", requestOptions.body = void 0, requestOptions.headers.delete("content-length"));
            let responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            responseReferrerPolicy && (requestOptions.referrerPolicy = responseReferrerPolicy), resolve(fetch2(new Request(locationURL, requestOptions))), finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      signal && response_.once("end", () => {
        signal.removeEventListener("abort", abortAndFinalize);
      });
      let body = (0, import_node_stream.pipeline)(response_, new import_node_stream.PassThrough(), (error) => {
        error && reject(error);
      });
      process.version < "v12.10" && response_.on("aborted", abortAndFinalize);
      let responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      }, codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response3(body, responseOptions), resolve(response);
        return;
      }
      let zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createGunzip(zlibOptions), (error) => {
          error && reject(error);
        }), response = new Response3(body, responseOptions), resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        let raw = (0, import_node_stream.pipeline)(response_, new import_node_stream.PassThrough(), (error) => {
          error && reject(error);
        });
        raw.once("data", (chunk) => {
          (chunk[0] & 15) === 8 ? body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createInflate(), (error) => {
            error && reject(error);
          }) : body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createInflateRaw(), (error) => {
            error && reject(error);
          }), response = new Response3(body, responseOptions), resolve(response);
        }), raw.once("end", () => {
          response || (response = new Response3(body, responseOptions), resolve(response));
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createBrotliDecompress(), (error) => {
          error && reject(error);
        }), response = new Response3(body, responseOptions), resolve(response);
        return;
      }
      response = new Response3(body, responseOptions), resolve(response);
    }), writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  let LAST_CHUNK = import_node_buffer.Buffer.from(`0\r
\r
`), isChunkedTransfer = !1, properLastChunkReceived = !1, previousChunk;
  request.on("response", (response) => {
    let { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  }), request.on("socket", (socket) => {
    let onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        let error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE", errorCallback(error);
      }
    }, onData = (buf) => {
      properLastChunkReceived = import_node_buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0, !properLastChunkReceived && previousChunk && (properLastChunkReceived = import_node_buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && import_node_buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0), previousChunk = buf;
    };
    socket.prependListener("close", onSocketClose), socket.on("data", onData), request.on("close", () => {
      socket.removeListener("close", onSocketClose), socket.removeListener("data", onData);
    });
  });
}
function pd(event) {
  let retv = privateData.get(event);
  return console.assert(
    retv != null,
    "'this' is expected an Event object, but got",
    event
  ), retv;
}
function setCancelFlag(data) {
  if (data.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error(
      "Unable to preventDefault inside passive event listener invocation.",
      data.passiveListener
    );
    return;
  }
  !data.event.cancelable || (data.canceled = !0, typeof data.event.preventDefault == "function" && data.event.preventDefault());
}
function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget,
    event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: !1,
    stopped: !1,
    immediateStopped: !1,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }), Object.defineProperty(this, "isTrusted", { value: !1, enumerable: !0 });
  let keys = Object.keys(event);
  for (let i2 = 0; i2 < keys.length; ++i2) {
    let key = keys[i2];
    key in this || Object.defineProperty(this, key, defineRedirectDescriptor(key));
  }
}
function defineRedirectDescriptor(key) {
  return {
    get() {
      return pd(this).event[key];
    },
    set(value) {
      pd(this).event[key] = value;
    },
    configurable: !0,
    enumerable: !0
  };
}
function defineCallDescriptor(key) {
  return {
    value() {
      let event = pd(this).event;
      return event[key].apply(event, arguments);
    },
    configurable: !0,
    enumerable: !0
  };
}
function defineWrapper(BaseEvent, proto) {
  let keys = Object.keys(proto);
  if (keys.length === 0)
    return BaseEvent;
  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }
  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: { value: CustomEvent, configurable: !0, writable: !0 }
  });
  for (let i2 = 0; i2 < keys.length; ++i2) {
    let key = keys[i2];
    if (!(key in BaseEvent.prototype)) {
      let isFunc = typeof Object.getOwnPropertyDescriptor(proto, key).value == "function";
      Object.defineProperty(
        CustomEvent.prototype,
        key,
        isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key)
      );
    }
  }
  return CustomEvent;
}
function getWrapper(proto) {
  if (proto == null || proto === Object.prototype)
    return Event;
  let wrapper = wrappers.get(proto);
  return wrapper == null && (wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto), wrappers.set(proto, wrapper)), wrapper;
}
function wrapEvent(eventTarget, event) {
  let Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
function isStopped(event) {
  return pd(event).immediateStopped;
}
function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
function isObject(x2) {
  return x2 !== null && typeof x2 == "object";
}
function getListeners(eventTarget) {
  let listeners = listenersMap.get(eventTarget);
  if (listeners == null)
    throw new TypeError(
      "'this' is expected an EventTarget object, but got another value."
    );
  return listeners;
}
function defineEventAttributeDescriptor(eventName) {
  return {
    get() {
      let node = getListeners(this).get(eventName);
      for (; node != null; ) {
        if (node.listenerType === ATTRIBUTE)
          return node.listener;
        node = node.next;
      }
      return null;
    },
    set(listener) {
      typeof listener != "function" && !isObject(listener) && (listener = null);
      let listeners = getListeners(this), prev = null, node = listeners.get(eventName);
      for (; node != null; )
        node.listenerType === ATTRIBUTE ? prev !== null ? prev.next = node.next : node.next !== null ? listeners.set(eventName, node.next) : listeners.delete(eventName) : prev = node, node = node.next;
      if (listener !== null) {
        let newNode = {
          listener,
          listenerType: ATTRIBUTE,
          passive: !1,
          once: !1,
          next: null
        };
        prev === null ? listeners.set(eventName, newNode) : prev.next = newNode;
      }
    },
    configurable: !0,
    enumerable: !0
  };
}
function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(
    eventTargetPrototype,
    `on${eventName}`,
    defineEventAttributeDescriptor(eventName)
  );
}
function defineCustomEventTarget(eventNames) {
  function CustomEventTarget() {
    EventTarget.call(this);
  }
  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: !0,
      writable: !0
    }
  });
  for (let i2 = 0; i2 < eventNames.length; ++i2)
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i2]);
  return CustomEventTarget;
}
function EventTarget() {
  if (this instanceof EventTarget) {
    listenersMap.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0]))
    return defineCustomEventTarget(arguments[0]);
  if (arguments.length > 0) {
    let types2 = new Array(arguments.length);
    for (let i2 = 0; i2 < arguments.length; ++i2)
      types2[i2] = arguments[i2];
    return defineCustomEventTarget(types2);
  }
  throw new TypeError("Cannot call a class as a function");
}
function createAbortSignal() {
  let signal = Object.create(AbortSignal.prototype);
  return EventTarget.call(signal), abortedFlags.set(signal, !1), signal;
}
function abortSignal(signal) {
  abortedFlags.get(signal) === !1 && (abortedFlags.set(signal, !0), signal.dispatchEvent({ type: "abort" }));
}
function getSignal(controller) {
  let signal = signals.get(controller);
  if (signal == null)
    throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
  return signal;
}
var import_node_http, import_node_https, import_node_zlib, import_node_stream, import_node_buffer, import_node_util, import_node_url, import_node_net, commonjsGlobal, ponyfill_es2018Exports, ponyfill_es2018, hasRequiredPonyfill_es2018, POOL_SIZE$1, POOL_SIZE, _parts, _type, _size, _endings, _a, _Blob, Blob, _Blob$1, _lastModified, _name, _a2, _File, File2, File$1, t, i, h, r, m, f2, e, x, _d, _a3, FormData, FetchBaseError, FetchError, NAME, isURLSearchParameters, isBlob, isAbortSignal, isDomainOrSubdomain, isSameProtocol, pipeline, INTERNALS$2, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream, validateHeaderName, validateHeaderValue, Headers, redirectStatus, isRedirect, INTERNALS$1, Response3, getSearch, ReferrerPolicy, DEFAULT_REFERRER_POLICY, INTERNALS, isRequest, doBadDataWarn, Request, getNodeRequestOptions, AbortError, nodeDomexception, supportedSchemas, privateData, wrappers, listenersMap, CAPTURE, BUBBLE, ATTRIBUTE, AbortSignal, abortedFlags, AbortController$1, signals, init_node_fetch_native_2b047dc1 = __esm({
  "../../node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/shared/node-fetch-native.2b047dc1.mjs"() {
    import_node_http = __toESM(require("http"), 1), import_node_https = __toESM(require("https"), 1), import_node_zlib = __toESM(require("zlib"), 1), import_node_stream = __toESM(require("stream"), 1), import_node_buffer = require("buffer"), import_node_util = require("util"), import_node_url = require("url"), import_node_net = require("net");
    commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ponyfill_es2018Exports = {}, ponyfill_es2018 = {
      get exports() {
        return ponyfill_es2018Exports;
      },
      set exports(v) {
        ponyfill_es2018Exports = v;
      }
    };
    POOL_SIZE$1 = 65536;
    if (!globalThis.ReadableStream)
      try {
        let process2 = require("process"), { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          }, Object.assign(globalThis, require("stream/web")), process2.emitWarning = emitWarning;
        } catch (error) {
          throw process2.emitWarning = emitWarning, error;
        }
      } catch {
        Object.assign(globalThis, requirePonyfill_es2018());
      }
    try {
      let { Blob: Blob3 } = require("buffer");
      Blob3 && !Blob3.prototype.stream && (Blob3.prototype.stream = function(params) {
        let position = 0, blob = this;
        return new ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            let buffer = await blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1)).arrayBuffer();
            position += buffer.byteLength, ctrl.enqueue(new Uint8Array(buffer)), position === blob.size && ctrl.close();
          }
        });
      });
    } catch {
    }
    POOL_SIZE = 65536;
    _Blob = (_a = class {
      constructor(blobParts = [], options = {}) {
        __privateAdd(this, _parts, []);
        __privateAdd(this, _type, "");
        __privateAdd(this, _size, 0);
        __privateAdd(this, _endings, "transparent");
        if (typeof blobParts != "object" || blobParts === null)
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        if (typeof blobParts[Symbol.iterator] != "function")
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        if (typeof options != "object" && typeof options != "function")
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        options === null && (options = {});
        let encoder = new TextEncoder();
        for (let element of blobParts) {
          let part;
          ArrayBuffer.isView(element) ? part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength)) : element instanceof ArrayBuffer ? part = new Uint8Array(element.slice(0)) : element instanceof _a ? part = element : part = encoder.encode(`${element}`), __privateSet(this, _size, __privateGet(this, _size) + (ArrayBuffer.isView(part) ? part.byteLength : part.size)), __privateGet(this, _parts).push(part);
        }
        __privateSet(this, _endings, `${options.endings === void 0 ? "transparent" : options.endings}`);
        let type = options.type === void 0 ? "" : String(options.type);
        __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
      }
      get size() {
        return __privateGet(this, _size);
      }
      get type() {
        return __privateGet(this, _type);
      }
      async text() {
        let decoder = new TextDecoder(), str = "";
        for await (let part of toIterator(__privateGet(this, _parts), !1))
          str += decoder.decode(part, { stream: !0 });
        return str += decoder.decode(), str;
      }
      async arrayBuffer() {
        let data = new Uint8Array(this.size), offset = 0;
        for await (let chunk of toIterator(__privateGet(this, _parts), !1))
          data.set(chunk, offset), offset += chunk.length;
        return data.buffer;
      }
      stream() {
        let it = toIterator(__privateGet(this, _parts), !0);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            let chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        let { size } = this, relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size), relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size), span = Math.max(relativeEnd - relativeStart, 0), parts = __privateGet(this, _parts), blobParts = [], added = 0;
        for (let part of parts) {
          if (added >= span)
            break;
          let size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart)
            relativeStart -= size2, relativeEnd -= size2;
          else {
            let chunk;
            ArrayBuffer.isView(part) ? (chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd)), added += chunk.byteLength) : (chunk = part.slice(relativeStart, Math.min(size2, relativeEnd)), added += chunk.size), relativeEnd -= size2, blobParts.push(chunk), relativeStart = 0;
          }
        }
        let blob = new _a([], { type: String(type).toLowerCase() });
        return __privateSet(blob, _size, span), __privateSet(blob, _parts, blobParts), blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object == "object" && typeof object.constructor == "function" && (typeof object.stream == "function" || typeof object.arrayBuffer == "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    }, _parts = new WeakMap(), _type = new WeakMap(), _size = new WeakMap(), _endings = new WeakMap(), _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: !0 },
      type: { enumerable: !0 },
      slice: { enumerable: !0 }
    });
    Blob = _Blob, _Blob$1 = Blob, _File = (_a2 = class extends _Blob$1 {
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2)
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        super(fileBits, options);
        __privateAdd(this, _lastModified, 0);
        __privateAdd(this, _name, "");
        options === null && (options = {});
        let lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        Number.isNaN(lastModified) || __privateSet(this, _lastModified, lastModified), __privateSet(this, _name, String(fileName));
      }
      get name() {
        return __privateGet(this, _name);
      }
      get lastModified() {
        return __privateGet(this, _lastModified);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](object) {
        return !!object && object instanceof _Blob$1 && /^(File)$/.test(object[Symbol.toStringTag]);
      }
    }, _lastModified = new WeakMap(), _name = new WeakMap(), _a2), File2 = _File, File$1 = File2;
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol), r = Math.random, m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), f2 = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new File$1([b], c, b) : b] : [a, b + ""]), e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), x = (n, a, e2) => {
      if (a.length < e2)
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
    }, FormData = (_a3 = class {
      constructor(...a) {
        __privateAdd(this, _d, []);
        if (a.length)
          throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o == "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2), __privateGet(this, _d).push(f2(...a));
      }
      delete(a) {
        x("delete", arguments, 1), a += "", __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
      }
      get(a) {
        x("get", arguments, 1), a += "";
        for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        return x("getAll", arguments, 1), b = [], a += "", __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1])), b;
      }
      has(a) {
        return x("has", arguments, 1), a += "", __privateGet(this, _d).some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = !0;
        a = f2(...a), __privateGet(this, _d).forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        }), c && b.push(a), __privateSet(this, _d, b);
      }
      *entries() {
        yield* __privateGet(this, _d);
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    }, _d = new WeakMap(), _a3);
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message), Error.captureStackTrace(this, this.constructor), this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    }, FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type), systemError && (this.code = this.errno = systemError.code, this.erroredSysCall = systemError.syscall);
      }
    }, NAME = Symbol.toStringTag, isURLSearchParameters = (object) => typeof object == "object" && typeof object.append == "function" && typeof object.delete == "function" && typeof object.get == "function" && typeof object.getAll == "function" && typeof object.has == "function" && typeof object.set == "function" && typeof object.sort == "function" && object[NAME] === "URLSearchParams", isBlob = (object) => object && typeof object == "object" && typeof object.arrayBuffer == "function" && typeof object.type == "string" && typeof object.stream == "function" && typeof object.constructor == "function" && /^(Blob|File)$/.test(object[NAME]), isAbortSignal = (object) => typeof object == "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget"), isDomainOrSubdomain = (destination, original) => {
      let orig = new URL(original).hostname, dest = new URL(destination).hostname;
      return orig === dest || orig.endsWith(`.${dest}`);
    }, isSameProtocol = (destination, original) => {
      let orig = new URL(original).protocol, dest = new URL(destination).protocol;
      return orig === dest;
    }, pipeline = (0, import_node_util.promisify)(import_node_stream.default.pipeline), INTERNALS$2 = Symbol("Body internals"), Body = class {
      constructor(body, {
        size = 0
      } = {}) {
        let boundary = null;
        body === null ? body = null : isURLSearchParameters(body) ? body = import_node_buffer.Buffer.from(body.toString()) : isBlob(body) || import_node_buffer.Buffer.isBuffer(body) || (import_node_util.types.isAnyArrayBuffer(body) ? body = import_node_buffer.Buffer.from(body) : ArrayBuffer.isView(body) ? body = import_node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength) : body instanceof import_node_stream.default || (body instanceof FormData ? (body = formDataToBlob(body), boundary = body.type.split("=")[1]) : body = import_node_buffer.Buffer.from(String(body))));
        let stream = body;
        import_node_buffer.Buffer.isBuffer(body) ? stream = import_node_stream.default.Readable.from(body) : isBlob(body) && (stream = import_node_stream.default.Readable.from(body.stream())), this[INTERNALS$2] = {
          body,
          stream,
          boundary,
          disturbed: !1,
          error: null
        }, this.size = size, body instanceof import_node_stream.default && body.on("error", (error_) => {
          let error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
          this[INTERNALS$2].error = error;
        });
      }
      get body() {
        return this[INTERNALS$2].stream;
      }
      get bodyUsed() {
        return this[INTERNALS$2].disturbed;
      }
      async arrayBuffer() {
        let { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        let ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          let formData = new FormData(), parameters = new URLSearchParams(await this.text());
          for (let [name, value] of parameters)
            formData.append(name, value);
          return formData;
        }
        let { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        let ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "", buf = await this.arrayBuffer();
        return new _Blob$1([buf], {
          type: ct
        });
      }
      async json() {
        let text = await this.text();
        return JSON.parse(text);
      }
      async text() {
        let buffer = await consumeBody(this);
        return new TextDecoder().decode(buffer);
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: !0 },
      bodyUsed: { enumerable: !0 },
      arrayBuffer: { enumerable: !0 },
      blob: { enumerable: !0 },
      json: { enumerable: !0 },
      text: { enumerable: !0 },
      data: { get: (0, import_node_util.deprecate)(
        () => {
        },
        "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
        "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
      ) }
    });
    clone = (instance, highWaterMark) => {
      let p1, p2, { body } = instance[INTERNALS$2];
      if (instance.bodyUsed)
        throw new Error("cannot clone body after it is used");
      return body instanceof import_node_stream.default && typeof body.getBoundary != "function" && (p1 = new import_node_stream.PassThrough({ highWaterMark }), p2 = new import_node_stream.PassThrough({ highWaterMark }), body.pipe(p1), body.pipe(p2), instance[INTERNALS$2].stream = p1, body = p2), body;
    }, getNonSpecFormDataBoundary = (0, import_node_util.deprecate)(
      (body) => body.getBoundary(),
      "form-data doesn't follow the spec and requires special treatment. Use alternative package",
      "https://github.com/node-fetch/node-fetch/issues/1167"
    ), extractContentType = (body, request) => body === null ? null : typeof body == "string" ? "text/plain;charset=UTF-8" : isURLSearchParameters(body) ? "application/x-www-form-urlencoded;charset=UTF-8" : isBlob(body) ? body.type || null : import_node_buffer.Buffer.isBuffer(body) || import_node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body) ? null : body instanceof FormData ? `multipart/form-data; boundary=${request[INTERNALS$2].boundary}` : body && typeof body.getBoundary == "function" ? `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}` : body instanceof import_node_stream.default ? null : "text/plain;charset=UTF-8", getTotalBytes = (request) => {
      let { body } = request[INTERNALS$2];
      return body === null ? 0 : isBlob(body) ? body.size : import_node_buffer.Buffer.isBuffer(body) ? body.length : body && typeof body.getLengthSync == "function" && body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
    }, writeToStream = async (dest, { body }) => {
      body === null ? dest.end() : await pipeline(body, dest);
    }, validateHeaderName = typeof import_node_http.default.validateHeaderName == "function" ? import_node_http.default.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        let error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        throw Object.defineProperty(error, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), error;
      }
    }, validateHeaderValue = typeof import_node_http.default.validateHeaderValue == "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        let error = new TypeError(`Invalid character in header content ["${name}"]`);
        throw Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" }), error;
      }
    }, Headers = class extends URLSearchParams {
      constructor(init) {
        let result = [];
        if (init instanceof Headers) {
          let raw = init.raw();
          for (let [name, values] of Object.entries(raw))
            result.push(...values.map((value) => [name, value]));
        } else if (init != null)
          if (typeof init == "object" && !import_node_util.types.isBoxedPrimitive(init)) {
            let method = init[Symbol.iterator];
            if (method == null)
              result.push(...Object.entries(init));
            else {
              if (typeof method != "function")
                throw new TypeError("Header pairs must be iterable");
              result = [...init].map((pair) => {
                if (typeof pair != "object" || import_node_util.types.isBoxedPrimitive(pair))
                  throw new TypeError("Each header pair must be an iterable object");
                return [...pair];
              }).map((pair) => {
                if (pair.length !== 2)
                  throw new TypeError("Each header pair must be a name/value tuple");
                return [...pair];
              });
            }
          } else
            throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        return result = result.length > 0 ? result.map(([name, value]) => (validateHeaderName(name), validateHeaderValue(name, String(value)), [String(name).toLowerCase(), String(value)])) : void 0, super(result), new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => (validateHeaderName(name), validateHeaderValue(name, String(value)), URLSearchParams.prototype[p].call(
                  target,
                  String(name).toLowerCase(),
                  String(value)
                ));
              case "delete":
              case "has":
              case "getAll":
                return (name) => (validateHeaderName(name), URLSearchParams.prototype[p].call(
                  target,
                  String(name).toLowerCase()
                ));
              case "keys":
                return () => (target.sort(), new Set(URLSearchParams.prototype.keys.call(target)).keys());
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        let values = this.getAll(name);
        if (values.length === 0)
          return null;
        let value = values.join(", ");
        return /^content-encoding$/i.test(name) && (value = value.toLowerCase()), value;
      }
      forEach(callback, thisArg = void 0) {
        for (let name of this.keys())
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
      }
      *values() {
        for (let name of this.keys())
          yield this.get(name);
      }
      *entries() {
        for (let name of this.keys())
          yield [name, this.get(name)];
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key) => (result[key] = this.getAll(key), result), {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key) => {
          let values = this.getAll(key);
          return key === "host" ? result[key] = values[0] : result[key] = values.length > 1 ? values : values[0], result;
        }, {});
      }
    };
    Object.defineProperties(
      Headers.prototype,
      ["get", "entries", "forEach", "values"].reduce((result, property) => (result[property] = { enumerable: !0 }, result), {})
    );
    redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), isRedirect = (code) => redirectStatus.has(code), INTERNALS$1 = Symbol("Response internals"), Response3 = class extends Body {
      constructor(body = null, options = {}) {
        super(body, options);
        let status = options.status != null ? options.status : 200, headers = new Headers(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
          let contentType = extractContentType(body, this);
          contentType && headers.append("Content-Type", contentType);
        }
        this[INTERNALS$1] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS$1].type;
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      get highWaterMark() {
        return this[INTERNALS$1].highWaterMark;
      }
      clone() {
        return new Response3(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      static redirect(url, status = 302) {
        if (!isRedirect(status))
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        return new Response3(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        let response = new Response3(null, { status: 0, statusText: "" });
        return response[INTERNALS$1].type = "error", response;
      }
      static json(data = void 0, init = {}) {
        let body = JSON.stringify(data);
        if (body === void 0)
          throw new TypeError("data is not JSON serializable");
        let headers = new Headers(init && init.headers);
        return headers.has("content-type") || headers.set("content-type", "application/json"), new Response3(body, {
          ...init,
          headers
        });
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response3.prototype, {
      type: { enumerable: !0 },
      url: { enumerable: !0 },
      status: { enumerable: !0 },
      ok: { enumerable: !0 },
      redirected: { enumerable: !0 },
      statusText: { enumerable: !0 },
      headers: { enumerable: !0 },
      clone: { enumerable: !0 }
    });
    getSearch = (parsedURL) => {
      if (parsedURL.search)
        return parsedURL.search;
      let lastOffset = parsedURL.href.length - 1, hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
    };
    ReferrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]), DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
    INTERNALS = Symbol("Request internals"), isRequest = (object) => typeof object == "object" && typeof object[INTERNALS] == "object", doBadDataWarn = (0, import_node_util.deprecate)(
      () => {
      },
      ".data is not a valid RequestInit property, use .body instead",
      "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
    ), Request = class extends Body {
      constructor(input, init = {}) {
        let parsedURL;
        if (isRequest(input) ? parsedURL = new URL(input.url) : (parsedURL = new URL(input), input = {}), parsedURL.username !== "" || parsedURL.password !== "")
          throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
        let method = init.method || input.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(method) && (method = method.toUpperCase()), !isRequest(init) && "data" in init && doBadDataWarn(), (init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD"))
          throw new TypeError("Request with GET/HEAD method cannot have body");
        let inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init.size || input.size || 0
        });
        let headers = new Headers(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          let contentType = extractContentType(inputBody, this);
          contentType && headers.set("Content-Type", contentType);
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init && (signal = init.signal), signal != null && !isAbortSignal(signal))
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === "")
          referrer = "no-referrer";
        else if (referrer) {
          let parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else
          referrer = void 0;
        this[INTERNALS] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        }, this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow, this.compress = init.compress === void 0 ? input.compress === void 0 ? !0 : input.compress : init.compress, this.counter = init.counter || input.counter || 0, this.agent = init.agent || input.agent, this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384, this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || !1, this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS].method;
      }
      get url() {
        return (0, import_node_url.format)(this[INTERNALS].parsedURL);
      }
      get headers() {
        return this[INTERNALS].headers;
      }
      get redirect() {
        return this[INTERNALS].redirect;
      }
      get signal() {
        return this[INTERNALS].signal;
      }
      get referrer() {
        if (this[INTERNALS].referrer === "no-referrer")
          return "";
        if (this[INTERNALS].referrer === "client")
          return "about:client";
        if (this[INTERNALS].referrer)
          return this[INTERNALS].referrer.toString();
      }
      get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request.prototype, {
      method: { enumerable: !0 },
      url: { enumerable: !0 },
      headers: { enumerable: !0 },
      redirect: { enumerable: !0 },
      clone: { enumerable: !0 },
      signal: { enumerable: !0 },
      referrer: { enumerable: !0 },
      referrerPolicy: { enumerable: !0 }
    });
    getNodeRequestOptions = (request) => {
      let { parsedURL } = request[INTERNALS], headers = new Headers(request[INTERNALS].headers);
      headers.has("Accept") || headers.set("Accept", "*/*");
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method) && (contentLengthValue = "0"), request.body !== null) {
        let totalBytes = getTotalBytes(request);
        typeof totalBytes == "number" && !Number.isNaN(totalBytes) && (contentLengthValue = String(totalBytes));
      }
      contentLengthValue && headers.set("Content-Length", contentLengthValue), request.referrerPolicy === "" && (request.referrerPolicy = DEFAULT_REFERRER_POLICY), request.referrer && request.referrer !== "no-referrer" ? request[INTERNALS].referrer = determineRequestsReferrer(request) : request[INTERNALS].referrer = "no-referrer", request[INTERNALS].referrer instanceof URL && headers.set("Referer", request.referrer), headers.has("User-Agent") || headers.set("User-Agent", "node-fetch"), request.compress && !headers.has("Accept-Encoding") && headers.set("Accept-Encoding", "gzip, deflate, br");
      let { agent } = request;
      typeof agent == "function" && (agent = agent(parsedURL)), !headers.has("Connection") && !agent && headers.set("Connection", "close");
      let search = getSearch(parsedURL), options = {
        path: parsedURL.pathname + search,
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        parsedURL,
        options
      };
    }, AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
    if (!globalThis.DOMException)
      try {
        let { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    nodeDomexception = globalThis.DOMException, supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
    privateData = /* @__PURE__ */ new WeakMap(), wrappers = /* @__PURE__ */ new WeakMap();
    Event.prototype = {
      get type() {
        return pd(this).event.type;
      },
      get target() {
        return pd(this).eventTarget;
      },
      get currentTarget() {
        return pd(this).currentTarget;
      },
      composedPath() {
        let currentTarget = pd(this).currentTarget;
        return currentTarget == null ? [] : [currentTarget];
      },
      get NONE() {
        return 0;
      },
      get CAPTURING_PHASE() {
        return 1;
      },
      get AT_TARGET() {
        return 2;
      },
      get BUBBLING_PHASE() {
        return 3;
      },
      get eventPhase() {
        return pd(this).eventPhase;
      },
      stopPropagation() {
        let data = pd(this);
        data.stopped = !0, typeof data.event.stopPropagation == "function" && data.event.stopPropagation();
      },
      stopImmediatePropagation() {
        let data = pd(this);
        data.stopped = !0, data.immediateStopped = !0, typeof data.event.stopImmediatePropagation == "function" && data.event.stopImmediatePropagation();
      },
      get bubbles() {
        return Boolean(pd(this).event.bubbles);
      },
      get cancelable() {
        return Boolean(pd(this).event.cancelable);
      },
      preventDefault() {
        setCancelFlag(pd(this));
      },
      get defaultPrevented() {
        return pd(this).canceled;
      },
      get composed() {
        return Boolean(pd(this).event.composed);
      },
      get timeStamp() {
        return pd(this).timeStamp;
      },
      get srcElement() {
        return pd(this).eventTarget;
      },
      get cancelBubble() {
        return pd(this).stopped;
      },
      set cancelBubble(value) {
        if (!value)
          return;
        let data = pd(this);
        data.stopped = !0, typeof data.event.cancelBubble == "boolean" && (data.event.cancelBubble = !0);
      },
      get returnValue() {
        return !pd(this).canceled;
      },
      set returnValue(value) {
        value || setCancelFlag(pd(this));
      },
      initEvent() {
      }
    };
    Object.defineProperty(Event.prototype, "constructor", {
      value: Event,
      configurable: !0,
      writable: !0
    });
    typeof window < "u" && typeof window.Event < "u" && (Object.setPrototypeOf(Event.prototype, window.Event.prototype), wrappers.set(window.Event.prototype, Event));
    listenersMap = /* @__PURE__ */ new WeakMap(), CAPTURE = 1, BUBBLE = 2, ATTRIBUTE = 3;
    EventTarget.prototype = {
      addEventListener(eventName, listener, options) {
        if (listener == null)
          return;
        if (typeof listener != "function" && !isObject(listener))
          throw new TypeError("'listener' should be a function or an object.");
        let listeners = getListeners(this), optionsIsObj = isObject(options), listenerType = Boolean(optionsIsObj ? options.capture : options) ? CAPTURE : BUBBLE, newNode = {
          listener,
          listenerType,
          passive: optionsIsObj && Boolean(options.passive),
          once: optionsIsObj && Boolean(options.once),
          next: null
        }, node = listeners.get(eventName);
        if (node === void 0) {
          listeners.set(eventName, newNode);
          return;
        }
        let prev = null;
        for (; node != null; ) {
          if (node.listener === listener && node.listenerType === listenerType)
            return;
          prev = node, node = node.next;
        }
        prev.next = newNode;
      },
      removeEventListener(eventName, listener, options) {
        if (listener == null)
          return;
        let listeners = getListeners(this), listenerType = (isObject(options) ? Boolean(options.capture) : Boolean(options)) ? CAPTURE : BUBBLE, prev = null, node = listeners.get(eventName);
        for (; node != null; ) {
          if (node.listener === listener && node.listenerType === listenerType) {
            prev !== null ? prev.next = node.next : node.next !== null ? listeners.set(eventName, node.next) : listeners.delete(eventName);
            return;
          }
          prev = node, node = node.next;
        }
      },
      dispatchEvent(event) {
        if (event == null || typeof event.type != "string")
          throw new TypeError('"event.type" should be a string.');
        let listeners = getListeners(this), eventName = event.type, node = listeners.get(eventName);
        if (node == null)
          return !0;
        let wrappedEvent = wrapEvent(this, event), prev = null;
        for (; node != null; ) {
          if (node.once ? prev !== null ? prev.next = node.next : node.next !== null ? listeners.set(eventName, node.next) : listeners.delete(eventName) : prev = node, setPassiveListener(
            wrappedEvent,
            node.passive ? node.listener : null
          ), typeof node.listener == "function")
            try {
              node.listener.call(this, wrappedEvent);
            } catch (err) {
              typeof console < "u" && typeof console.error == "function" && console.error(err);
            }
          else
            node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent == "function" && node.listener.handleEvent(wrappedEvent);
          if (isStopped(wrappedEvent))
            break;
          node = node.next;
        }
        return setPassiveListener(wrappedEvent, null), setEventPhase(wrappedEvent, 0), setCurrentTarget(wrappedEvent, null), !wrappedEvent.defaultPrevented;
      }
    };
    Object.defineProperty(EventTarget.prototype, "constructor", {
      value: EventTarget,
      configurable: !0,
      writable: !0
    });
    typeof window < "u" && typeof window.EventTarget < "u" && Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
    AbortSignal = class extends EventTarget {
      constructor() {
        throw super(), new TypeError("AbortSignal cannot be constructed directly");
      }
      get aborted() {
        let aborted = abortedFlags.get(this);
        if (typeof aborted != "boolean")
          throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        return aborted;
      }
    };
    defineEventAttribute(AbortSignal.prototype, "abort");
    abortedFlags = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(AbortSignal.prototype, {
      aborted: { enumerable: !0 }
    });
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
      configurable: !0,
      value: "AbortSignal"
    });
    AbortController$1 = class {
      constructor() {
        signals.set(this, createAbortSignal());
      }
      get signal() {
        return getSignal(this);
      }
      abort() {
        abortSignal(getSignal(this));
      }
    }, signals = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(AbortController$1.prototype, {
      signal: { enumerable: !0 },
      abort: { enumerable: !0 }
    });
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(AbortController$1.prototype, Symbol.toStringTag, {
      configurable: !0,
      value: "AbortController"
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_node = require("@remix-run/node"), import_isbot = __toESM(require("isbot")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "src/entry.server.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      {
        [callbackName]() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => RootLayout,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_jotai = require("jotai"), import_shared_ui = __toESM(require_dist());

// src/components/layout/GlobalProgress.tsx
var React = __toESM(require("react")), import_react2 = require("@remix-run/react"), import_ts_pattern = require("ts-pattern"), import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function GlobalProgress() {
  let transition = (0, import_react2.useTransition)(), active = transition.state !== "idle", ref = React.useRef(null), [animationComplete, setAnimationComplete] = React.useState(!0);
  return React.useEffect(() => {
    !ref.current || (active && setAnimationComplete(!1), Promise.allSettled(
      ref.current.getAnimations().map(({ finished }) => finished)
    ).then(() => !active && setAnimationComplete(!0)));
  }, [active]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      role: "progressbar",
      "aria-hidden": !active,
      "aria-valuetext": active ? "Loading" : void 0,
      className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          ref,
          className: (0, import_clsx.default)(
            "bg-primary-500 h-full transition-all duration-300 ease-in-out",
            (0, import_ts_pattern.match)([transition.state, animationComplete]).with(["idle", !0], () => "w-0 opacity-0 transition-none").with(["submitting", import_ts_pattern.P._], () => "w-4/12").with(["loading", import_ts_pattern.P._], () => "w-10/12").otherwise(() => "w-full")
          )
        },
        void 0,
        !1,
        {
          fileName: "src/components/layout/GlobalProgress.tsx",
          lineNumber: 29,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "src/components/layout/GlobalProgress.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  );
}

// src/services/auth.server.ts
var import_remix_auth = require("remix-auth");

// src/services/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.COOKIE_SECRET],
    secure: !1
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// src/services/auth.server.ts
var import_remix_auth_form = require("remix-auth-form");

// ../../node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs
var import_node_http2 = __toESM(require("http"), 1), import_node_https2 = __toESM(require("https"), 1);

// ../../node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/index.mjs
init_node_fetch_native_2b047dc1();
init_node_fetch_native_2b047dc1();
var import_node_fs = require("fs");
var { stat } = import_node_fs.promises;
var _path, _start, _BlobDataItem = class {
  constructor(options) {
    __privateAdd(this, _path, void 0);
    __privateAdd(this, _start, void 0);
    __privateSet(this, _path, options.path), __privateSet(this, _start, options.start), this.size = options.size, this.lastModified = options.lastModified;
  }
  slice(start, end) {
    return new _BlobDataItem({
      path: __privateGet(this, _path),
      lastModified: this.lastModified,
      size: end - start,
      start: __privateGet(this, _start) + start
    });
  }
  async *stream() {
    let { mtimeMs } = await stat(__privateGet(this, _path));
    if (mtimeMs > this.lastModified)
      throw new nodeDomexception("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* (0, import_node_fs.createReadStream)(__privateGet(this, _path), {
      start: __privateGet(this, _start),
      end: __privateGet(this, _start) + this.size - 1
    });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
}, BlobDataItem = _BlobDataItem;
_path = new WeakMap(), _start = new WeakMap();
var fetch3 = globalThis.fetch || fetch2, Blob2 = globalThis.Blob || _Blob$1, File3 = globalThis.File || File$1, FormData3 = globalThis.FormData || FormData, Headers2 = globalThis.Headers || Headers, Request2 = globalThis.Request || Request, Response4 = globalThis.Response || Response3, AbortController3 = globalThis.AbortController || AbortController$1;

// ../../node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/shared/ofetch.502a4799.mjs
var import_destr = __toESM(require("destr"), 1), import_ufo = require("ufo"), FetchError2 = class extends Error {
  constructor() {
    super(...arguments), this.name = "FetchError";
  }
};
function createFetchError(request, error, response) {
  let message = "";
  error && (message = error.message), request && response ? message = `${message} (${response.status} ${response.statusText} (${request.toString()}))` : request && (message = `${message} (${request.toString()})`);
  let fetchError = new FetchError2(message);
  return Object.defineProperty(fetchError, "request", {
    get() {
      return request;
    }
  }), Object.defineProperty(fetchError, "response", {
    get() {
      return response;
    }
  }), Object.defineProperty(fetchError, "data", {
    get() {
      return response && response._data;
    }
  }), Object.defineProperty(fetchError, "status", {
    get() {
      return response && response.status;
    }
  }), Object.defineProperty(fetchError, "statusText", {
    get() {
      return response && response.statusText;
    }
  }), Object.defineProperty(fetchError, "statusCode", {
    get() {
      return response && response.status;
    }
  }), Object.defineProperty(fetchError, "statusMessage", {
    get() {
      return response && response.statusText;
    }
  }), fetchError;
}
var payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0)
    return !1;
  let t2 = typeof value;
  return t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null ? !0 : t2 !== "object" ? !1 : Array.isArray(value) ? !0 : value.constructor && value.constructor.name === "Object" || typeof value.toJSON == "function";
}
var textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType)
    return "json";
  let contentType = _contentType.split(";").shift() || "";
  return JSON_RE.test(contentType) ? "json" : textTypes.has(contentType) || contentType.startsWith("text/") ? "text" : "blob";
}
var retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  let { fetch: fetch5, Headers: Headers4 } = globalOptions;
  function onError(context) {
    let isAbort = context.error && context.error.name === "AbortError" || !1;
    if (context.options.retry !== !1 && !isAbort) {
      let retries;
      typeof context.options.retry == "number" ? retries = context.options.retry : retries = isPayloadMethod(context.options.method) ? 0 : 1;
      let responseCode = context.response && context.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode))
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
    }
    let error = createFetchError(
      context.request,
      context.error,
      context.response
    );
    throw Error.captureStackTrace && Error.captureStackTrace(error, $fetchRaw), error;
  }
  let $fetchRaw = async function(_request, _options = {}) {
    let context = {
      request: _request,
      options: { ...globalOptions.defaults, ..._options },
      response: void 0,
      error: void 0
    };
    context.options.onRequest && await context.options.onRequest(context), typeof context.request == "string" && (context.options.baseURL && (context.request = (0, import_ufo.withBase)(context.request, context.options.baseURL)), (context.options.query || context.options.params) && (context.request = (0, import_ufo.withQuery)(context.request, {
      ...context.options.params,
      ...context.options.query
    })), context.options.body && isPayloadMethod(context.options.method) && isJSONSerializable(context.options.body) && (context.options.body = typeof context.options.body == "string" ? context.options.body : JSON.stringify(context.options.body), context.options.headers = new Headers4(context.options.headers), context.options.headers.has("content-type") || context.options.headers.set("content-type", "application/json"), context.options.headers.has("accept") || context.options.headers.set("accept", "application/json"))), context.response = await fetch5(
      context.request,
      context.options
    ).catch(async (error) => (context.error = error, context.options.onRequestError && await context.options.onRequestError(context), onError(context)));
    let responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
    if (responseType === "json") {
      let data = await context.response.text(), parseFunction = context.options.parseResponse || import_destr.default;
      context.response._data = parseFunction(data);
    } else
      responseType === "stream" ? context.response._data = context.response.body : context.response._data = await context.response[responseType]();
    return context.options.onResponse && await context.options.onResponse(context), context.response.status >= 400 && context.response.status < 600 ? (context.options.onResponseError && await context.options.onResponseError(context), onError(context)) : context.response;
  }, $fetch = function(request, options) {
    return $fetchRaw(request, options).then((r2) => r2._data);
  };
  return $fetch.raw = $fetchRaw, $fetch.native = fetch5, $fetch.create = (defaultOptions = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  }), $fetch;
}

// ../../node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs
var import_destr2 = require("destr"), import_ufo2 = require("ufo");
function createNodeFetch() {
  if (!JSON.parse(process.env.FETCH_KEEP_ALIVE || "false"))
    return fetch3;
  let agentOptions = { keepAlive: !0 }, httpAgent = new import_node_http2.default.Agent(agentOptions), httpsAgent = new import_node_https2.default.Agent(agentOptions), nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function(input, init) {
    return fetch3(input, { ...nodeFetchOptions, ...init });
  };
}
var fetch4 = globalThis.fetch || createNodeFetch(), Headers3 = globalThis.Headers || Headers2, ofetch = createFetch({ fetch: fetch4, Headers: Headers3 });

// ../../packages/client/lib/utils.ts
var stripTrailingSlash = (url) => url.replace(/\/$/, "");
function omit(obj, keys) {
  let _ = { ...obj };
  return keys.forEach((key) => delete _[key]), _;
}

// ../../packages/client/lib/request-client.ts
var RequestClient = class {
  constructor(config) {
    this.DEFAULT_CONFIG = {
      baseUrl: "https://api.op-ent.fr"
    };
    this.DEFAULT_HEADERS = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    this.config = { ...this.DEFAULT_CONFIG, ...config }, this.config.baseUrl = stripTrailingSlash(this.config.baseUrl) + "/v1", this.apiFetch = this.createApiFetch(this.config);
  }
  createApiFetch(config) {
    return ofetch.create({ baseURL: config.baseUrl });
  }
  async fetch(method, path, body = {}, headers = {}) {
    let data, error;
    try {
      data = await this.apiFetch(path, {
        method,
        body,
        headers: { ...this.DEFAULT_HEADERS, ...headers }
      });
    } catch (err) {
      error = err;
    }
    return { data, ok: error === void 0, error };
  }
  async authenticatedFetch(...args) {
    if (!this.auth.token)
      throw new Error("Not authenticated");
    let [method, path, body, headers] = args;
    return this.fetch(method, path, body, {
      Authorization: `Bearer ${this.auth.token}`,
      ...headers
    });
  }
};

// ../../packages/client/lib/base-resource.ts
var BaseResource = class {
  constructor(client2) {
    this.client = client2;
  }
};

// ../../packages/client/lib/resources/admin/users.ts
var UsersResource = class extends BaseResource {
  async all() {
    let path = "/admin/users";
    return await this.client.authenticatedFetch("GET", path);
  }
  async get(payload) {
    let path = `/admin/users/${payload.id}`;
    return await this.client.authenticatedFetch("GET", path);
  }
  async create(payload) {
    let path = "/admin/users";
    return await this.client.authenticatedFetch(
      "POST",
      path,
      payload
    );
  }
  async update(payload) {
    let path = `/admin/users/${payload.id}`;
    return await this.client.authenticatedFetch(
      "PUT",
      path,
      omit(payload, ["id"])
    );
  }
  async destroy(payload) {
    let path = `/admin/users/${payload.id}`;
    return await this.client.authenticatedFetch("DELETE", path);
  }
};

// ../../packages/client/lib/resources/admin.ts
var AdminResource = class extends BaseResource {
  constructor(client2) {
    super(client2);
    this.users = new UsersResource(this.client);
  }
};

// ../../packages/client/lib/resources/auth.ts
var AuthResource = class extends BaseResource {
  async login(payload) {
    let path = "/auth/login", res = await this.client.fetch(
      "POST",
      path,
      payload
    );
    return res.ok && (this.token = res.data.token, this.user = res.data.user), res;
  }
  async register(payload) {
    let path = "/auth/register", res = await this.client.fetch(
      "POST",
      path,
      payload
    );
    return res.ok && (this.token = res.data.token, this.user = res.data.user), res;
  }
};

// ../../packages/client/lib/resources/shared.ts
var SharedResource = class extends BaseResource {
  async profile() {
    var _a4;
    let path = `/shared/profile/${(_a4 = this.client.auth.user) == null ? void 0 : _a4.id}`;
    return await this.client.authenticatedFetch("GET", path);
  }
};

// ../../packages/client/lib/client.ts
var Client = class {
  constructor(config) {
    this.client = new RequestClient(config), this.auth = new AuthResource(this.client), this.client.auth = this.auth, this.shared = new SharedResource(this.client), this.admin = new AdminResource(this.client);
  }
};

// ../../packages/client/lib/create-client.ts
var createClient = (config) => new Client(config);

// src/services/client.ts
var client = createClient({ baseUrl: "http://localhost:3333" });

// src/schemas/auth.ts
var import_zod = require("zod"), passwordSchema = import_zod.z.string().min(1, { message: "Champ obligatoire" }).min(6, { message: "6 caract\xE8res minimum" }), loginSchema = import_zod.z.object({
  email: import_zod.z.string().min(1, { message: "Champ obligatoire" }).email({ message: "Email invalide" }),
  password: passwordSchema
}), registerSchema = loginSchema.merge(import_zod.z.object({ passwordConfirmation: passwordSchema })).refine((data) => data.password === data.passwordConfirmation, {
  message: "Les mots de passe ne correspondent pas",
  path: ["passwordConfirmation"]
});

// src/utils/zod.ts
function normalizeZodError(zodError) {
  let errors = [];
  for (let { path, message } of zodError.issues) {
    let field = path[0], customErrorIndex = errors.findIndex((err) => err.field === field);
    customErrorIndex !== -1 ? errors[customErrorIndex].messages.push(message) : errors.push({ field, messages: [message] });
  }
  return errors;
}

// src/services/auth.server.ts
var FORM_STRATEGY_KEY = "form", FAILURE_REDIRECT_PATH = "/auth/login", auth = new import_remix_auth.Authenticator(sessionStorage);
auth.use(
  new import_remix_auth_form.FormStrategy(async ({ form }) => {
    var _a4;
    let result = loginSchema.safeParse(Object.fromEntries(form));
    if (!result.success)
      throw new import_remix_auth.AuthorizationError(
        JSON.stringify(normalizeZodError(result.error))
      );
    let { data, ok, error } = await client.auth.login(result.data);
    if (!ok)
      throw new import_remix_auth.AuthorizationError(
        JSON.stringify([{ messages: [(_a4 = error.data) == null ? void 0 : _a4.errors[0].message] }])
      );
    return data;
  }),
  FORM_STRATEGY_KEY
);
async function withAuth(request, opts = {
  success: !1,
  failure: !1
}) {
  let { success, failure } = opts;
  return await auth.isAuthenticated(request, {
    successRedirect: success && "/",
    failureRedirect: failure && FAILURE_REDIRECT_PATH
  });
}

// src/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BP2EK6IB.css";

// src/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), darkModeScript = `

  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`, meta = () => [
  {
    title: "op-ent"
  }
], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css"
  }
];
function SharedStructure({
  children,
  head
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "fr-FR", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      head,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("script", { dangerouslySetInnerHTML: { __html: darkModeScript } }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full bg-neutral-50 dark:bg-neutral-800", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function RootLayout() {
  let loaderData = (0, import_react3.useLoaderData)();
  return loaderData != null && loaderData.authData && (client.auth.token = loaderData.authData.token, client.auth.user = loaderData.authData.user), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SharedStructure, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jotai.Provider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GlobalProgress, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  let parsedUrl = new URL(request.url), path = parsedUrl.pathname;
  if (path.length > 1 && /\/$/.test(path)) {
    let newPath = path.slice(0, -1) + parsedUrl.search + parsedUrl.hash;
    return (0, import_node3.redirect)(newPath);
  }
  let authData = await withAuth(request);
  return (0, import_node3.json)({ authData });
}
function CatchBoundary() {
  let { status } = (0, import_react3.useCatch)(), text = status === 404 ? "Page introuvable" : "Une erreur est survenue", desc = status === 404 ? "D\xE9sol\xE9, nous n'avons pas trouv\xE9 la page que vous recherchez." : "Veuillez nous signaler le probl\xE8me.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SharedStructure, { head: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: `Erreur ${status} - ${text}` }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 144,
    columnNumber: 28
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-primary-500 text-base font-semibold", children: status }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 147,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl", children: text }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-neutral-500 dark:text-neutral-400", children: desc }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_shared_ui.Button,
        {
          as: "a",
          href: "/",
          color: "primary",
          className: "w-full sm:w-auto",
          children: "Retourner \xE0 l'accueil"
        },
        void 0,
        !1,
        {
          fileName: "src/root.tsx",
          lineNumber: 155,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_shared_ui.Button,
        {
          as: "a",
          href: "https://github.com/op-ent/op-ent/issues",
          color: "neutral",
          variant: "subtle",
          target: "_blank",
          rel: "noreferrer",
          className: "w-full sm:w-auto",
          children: "Ouvrir une issue sur GitHub"
        },
        void 0,
        !1,
        {
          fileName: "src/root.tsx",
          lineNumber: 163,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 154,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 146,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 145,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}

// src/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_lucide_react3 = require("lucide-react");

// src/components/layout/PageTransition.tsx
var import_react4 = require("@remix-run/react"), import_framer_motion = require("framer-motion"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function PageTransition({
  as = "div",
  children
}) {
  let location = (0, import_react4.useLocation)(), Component = import_framer_motion.motion[as];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Component,
    {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.98 },
      transition: { duration: 0.15, ease: "easeInOut" },
      className: "h-full",
      children
    },
    location.pathname,
    !1,
    {
      fileName: "src/components/layout/PageTransition.tsx",
      lineNumber: 154,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/layout/PageTransition.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

// src/components/layout/Sidebar.tsx
var import_react6 = require("@headlessui/react"), import_react7 = require("@remix-run/react"), import_clsx2 = __toESM(require("clsx")), import_jotai3 = require("jotai"), import_lucide_react = require("lucide-react"), import_react8 = require("react"), import_shared_ui2 = __toESM(require_dist());

// src/hooks/use-auth.ts
var import_react5 = require("@remix-run/react");
function useAuth() {
  let navigate = (0, import_react5.useNavigate)();
  async function logout() {
    await fetch("/auth/logout"), navigate(0);
  }
  return { logout };
}

// src/stores/layout.ts
var import_jotai2 = require("jotai"), openSidebarAtom = (0, import_jotai2.atom)(!1);

// src/components/layout/Sidebar.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function SidebarLink({ item }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react7.NavLink,
    {
      to: item.href,
      className: ({ isActive }) => (0, import_clsx2.default)(
        " focus:ring-primary-500 mt-1 inline-flex w-full items-center px-4 py-2 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2",
        isActive ? "text-primary-500 dark:text-primary-300 scale-95 rounded-lg bg-neutral-100 dark:bg-neutral-700" : "hover:text-primary-500 dark:hover:text-primary-300 rounded-none text-neutral-500 hover:scale-95 hover:rounded-lg hover:bg-neutral-100 focus:scale-95 focus:rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(item.icon, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, !1, {
          fileName: "src/components/layout/Sidebar.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "ml-4", children: item.text }, void 0, !1, {
          fileName: "src/components/layout/Sidebar.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
function SidebarHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-3 flex h-14 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react7.Link,
    {
      to: "/",
      className: "focus:ring-primary-500 inline-block rounded-md p-1 transition-all hover:scale-95 focus:outline-none focus:ring-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/logo.svg", className: "h-8", alt: "Logo d'op-ent" }, void 0, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/layout/Sidebar.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function SidebarContent({ navigation: navigation4 }) {
  let { logout } = useAuth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarHeader, {}, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-grow flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "flex-1 space-y-1", children: navigation4.map((n, i2) => "href" in n ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarLink, { item: n }, i2, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 64,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "px-4 text-xs font-medium text-neutral-400", children: n.title }, void 0, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: n.items.map((item, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarLink, { item }, void 0, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 73,
        columnNumber: 23
      }, this) }, j, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, i2, !0, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 66,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-auto border-t border-neutral-200 p-4 dark:border-neutral-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_shared_ui2.Button,
      {
        onClick: () => logout(),
        color: "neutral",
        variant: "subtle",
        className: "w-full",
        children: "D\xE9connexion"
      },
      void 0,
      !1,
      {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 83,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/layout/Sidebar.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function MobileSidebar(props) {
  let [open, setOpen] = (0, import_jotai3.useAtom)(openSidebarAtom), location = (0, import_react7.useLocation)();
  return (0, import_react8.useEffect)(() => {
    setOpen(!1);
  }, [location, setOpen]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Transition.Root, { show: open, as: import_react8.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Dialog, { as: "div", className: "relative z-40 lg:hidden", onClose: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react6.Transition.Child,
      {
        as: import_react8.Fragment,
        enter: "transition-opacity ease-linear duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition-opacity ease-linear duration-300",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "fixed inset-0 bg-neutral-500/80 dark:bg-neutral-800/80" }, void 0, !1, {
          fileName: "src/components/layout/Sidebar.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 107,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react6.Transition.Child,
        {
          as: import_react8.Fragment,
          enter: "transition ease-in-out duration-300 transform",
          enterFrom: "-translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transform",
          leaveFrom: "translate-x-0",
          leaveTo: "-translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Dialog.Panel, { className: "relative flex w-full max-w-[16rem] flex-1 flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react6.Transition.Child,
              {
                as: import_react8.Fragment,
                enter: "ease-in-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in-out duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute top-0 right-0 -mr-10 pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_shared_ui2.IconButton,
                  {
                    variant: "subtle",
                    size: "xs",
                    className: "focus:ring-offset-neutral-500/80 dark:ring-offset-neutral-800/80",
                    onClick: () => setOpen(!1),
                    "aria-label": "Fermer le menu lat\xE9ral",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_lucide_react.X, {}, void 0, !1, {
                      fileName: "src/components/layout/Sidebar.tsx",
                      lineNumber: 147,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/components/layout/Sidebar.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/components/layout/Sidebar.tsx",
                  lineNumber: 139,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "src/components/layout/Sidebar.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarContent, { ...props }, void 0, !1, {
              fileName: "src/components/layout/Sidebar.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "src/components/layout/Sidebar.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/components/layout/Sidebar.tsx",
          lineNumber: 120,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-12 flex-shrink-0", "aria-hidden": "true" }, void 0, !1, {
        fileName: "src/components/layout/Sidebar.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/layout/Sidebar.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/layout/Sidebar.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
function Sidebar(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileSidebar, { ...props }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("aside", { className: "fixed top-0 hidden h-full w-64 flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarContent, { ...props }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 168,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/components/layout/Sidebar.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/layout/Sidebar.tsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}

// src/components/molecules/ThemeSelector.tsx
var import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_clsx3 = __toESM(require("clsx")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), themes = [
  { name: "Clair", value: "light", icon: LightIcon },
  { name: "Sombre", value: "dark", icon: DarkIcon },
  { name: "Syst\xE8me", value: "system", icon: SystemIcon }
];
function LightIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
    },
    void 0,
    !1,
    {
      fileName: "src/components/molecules/ThemeSelector.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/molecules/ThemeSelector.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function DarkIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
    },
    void 0,
    !1,
    {
      fileName: "src/components/molecules/ThemeSelector.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/molecules/ThemeSelector.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function SystemIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
    },
    void 0,
    !1,
    {
      fileName: "src/components/molecules/ThemeSelector.tsx",
      lineNumber: 40,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/molecules/ThemeSelector.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function ThemeSelector({ className }) {
  let [selectedTheme, setSelectedTheme] = (0, import_react9.useState)(null);
  return (0, import_react9.useEffect)(() => {
    selectedTheme ? document.documentElement.setAttribute("data-theme", selectedTheme.value) : setSelectedTheme(
      themes.find(
        (theme) => theme.value === document.documentElement.getAttribute("data-theme")
      ) || null
    );
  }, [selectedTheme]), (0, import_react9.useEffect)(() => {
    let handler = () => setSelectedTheme(
      themes.find(
        (theme) => theme.value === (window.localStorage.theme ?? "system")
      ) || null
    );
    return window.addEventListener("storage", handler), () => window.removeEventListener("storage", handler);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react10.Listbox,
    {
      as: "div",
      value: selectedTheme,
      onChange: setSelectedTheme,
      className,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Listbox.Label, { className: "sr-only", children: "Theme" }, void 0, !1, {
          fileName: "src/components/molecules/ThemeSelector.tsx",
          lineNumber: 85,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react10.Listbox.Button,
          {
            className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-700 dark:ring-inset dark:ring-white/5",
            "aria-label": selectedTheme == null ? void 0 : selectedTheme.name,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LightIcon, { className: "fill-primary-400 dark:fill-primary-300 hidden h-4 w-4 [[data-theme=light]_&]:block" }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 90,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DarkIcon, { className: "fill-primary-400 dark:fill-primary-300 hidden h-4 w-4 [[data-theme=dark]_&]:block" }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 91,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LightIcon, { className: "hidden h-4 w-4 fill-neutral-400 [:not(.dark)[data-theme=system]_&]:block" }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 92,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DarkIcon, { className: "hidden h-4 w-4 fill-neutral-400 [.dark[data-theme=system]_&]:block" }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 93,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/components/molecules/ThemeSelector.tsx",
            lineNumber: 86,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Listbox.Options, { className: "absolute top-full left-full mt-3 w-36 -translate-x-full space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5", children: themes.map((theme) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react10.Listbox.Option,
          {
            value: theme,
            className: ({ active, selected }) => (0, import_clsx3.default)(
              "flex cursor-pointer select-none items-center rounded-[0.625rem] p-1",
              {
                "text-primary-500 dark:text-primary-300": selected,
                "text-neutral-900 dark:text-white": active && !selected,
                "text-neutral-700 dark:text-neutral-400": !active && !selected,
                "bg-neutral-100 dark:bg-neutral-800/40": active
              }
            ),
            children: ({ selected }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-md bg-white p-1 shadow ring-1 ring-neutral-900/5 dark:bg-neutral-700 dark:ring-inset dark:ring-white/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                theme.icon,
                {
                  className: (0, import_clsx3.default)(
                    "h-4 w-4",
                    selected ? "fill-primary-400 dark:fill-primary-300" : "fill-neutral-400"
                  )
                },
                void 0,
                !1,
                {
                  fileName: "src/components/molecules/ThemeSelector.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-3", children: theme.name }, void 0, !1, {
                fileName: "src/components/molecules/ThemeSelector.tsx",
                lineNumber: 125,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "src/components/molecules/ThemeSelector.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this)
          },
          theme.value,
          !1,
          {
            fileName: "src/components/molecules/ThemeSelector.tsx",
            lineNumber: 97,
            columnNumber: 11
          },
          this
        )) }, void 0, !1, {
          fileName: "src/components/molecules/ThemeSelector.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/components/molecules/ThemeSelector.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}

// src/components/layout/TopNav.tsx
var import_shared_ui3 = __toESM(require_dist()), import_jotai4 = require("jotai");
var import_lucide_react2 = require("lucide-react");

// src/hooks/use-user.ts
function useUser() {
  return client.auth.user;
}

// src/components/layout/TopNav.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SidebarButton() {
  let setOpen = (0, import_jotai4.useSetAtom)(openSidebarAtom);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_shared_ui3.IconButton,
    {
      variant: "subtle",
      className: "mr-4 lg:hidden",
      onClick: () => setOpen(!0),
      "aria-label": "Ouvrir le menu lat\xE9ral",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_lucide_react2.Menu, {}, void 0, !1, {
        fileName: "src/components/layout/TopNav.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/layout/TopNav.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
function CommandPaletteButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "button",
    {
      onClick: () => alert("open command palette"),
      className: "flex h-full items-center space-x-4 text-neutral-400 transition-opacity hover:opacity-75",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Search" }, void 0, !1, {
          fileName: "src/components/layout/TopNav.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_shared_ui3.KBD, { shortcuts: ["CTRL", "K"] }, void 0, !1, {
          fileName: "src/components/layout/TopNav.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/components/layout/TopNav.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
function UserAvatar() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "img",
    {
      src: encodeURI(
        `https://source.boringavatars.com/beam/40/${user.id}?colors=38bdf8,0ea5e9,0284c7`
      ),
      alt: `Avatar de ${user.email}`,
      className: "h-10 w-10 rounded-full"
    },
    void 0,
    !1,
    {
      fileName: "src/components/layout/TopNav.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
function TopNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "fixed top-0 right-0 left-0 h-14 border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:left-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full items-center justify-between px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarButton, {}, void 0, !1, {
        fileName: "src/components/layout/TopNav.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CommandPaletteButton, {}, void 0, !1, {
        fileName: "src/components/layout/TopNav.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/layout/TopNav.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeSelector, { className: "relative" }, void 0, !1, {
        fileName: "src/components/layout/TopNav.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatar, {}, void 0, !1, {
        fileName: "src/components/layout/TopNav.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/layout/TopNav.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/layout/TopNav.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/layout/TopNav.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// src/components/layout/Layout.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Layout({ children, ...sidebarProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Sidebar, { ...sidebarProps }, void 0, !1, {
      fileName: "src/components/layout/Layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TopNav, {}, void 0, !1, {
      fileName: "src/components/layout/Layout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "mt-14 overflow-y-auto p-4 lg:ml-64", children }, void 0, !1, {
      fileName: "src/components/layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/components/layout/Layout.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/layout/Layout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// src/routes/_index.tsx
var import_shared_ui4 = __toESM(require_dist()), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), navigation = [
  {
    href: "/",
    text: "Accueil",
    icon: import_lucide_react3.Home
  },
  {
    href: "/settings/general",
    text: "Param\xE8tres",
    icon: import_lucide_react3.Settings
  },
  {
    title: "Etablissements",
    items: [
      {
        href: "/s/1/overview",
        text: "Eleve 1",
        icon: import_lucide_react3.GraduationCap
      },
      {
        href: "/s/2/overview",
        text: "Eleve 2",
        icon: import_lucide_react3.GraduationCap
      }
    ]
  }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Layout, { navigation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_shared_ui4.Heading, { as: "h1", children: "Bienvenue !" }, void 0, !1, {
    fileName: "src/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/routes/_index.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
async function loader2({ request }) {
  return await withAuth(request, { failure: !0 }), null;
}

// src/routes/_domains/index.tsx
var domains_exports = {};
__export(domains_exports, {
  default: () => DomainsLayout,
  loader: () => loader3
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function DomainsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "src/routes/_domains/index.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function loader3({ request }) {
  return await withAuth(request, { failure: !0 }), null;
}

// src/routes/_domains/s.$studentId/index.tsx
var s_exports = {};
__export(s_exports, {
  default: () => StudentLayout,
  loader: () => loader4
});
var import_react14 = require("@remix-run/react");
var import_lucide_react4 = require("lucide-react");

// src/utils/server.ts
var import_node4 = require("@remix-run/node");
function defaultRedirect({
  request,
  entryURL,
  exitURL
}) {
  return function(fn) {
    let { url } = request;
    return new URL(url).pathname === entryURL ? (0, import_node4.redirect)(exitURL, 301) : fn();
  };
}

// src/hooks/use-redirect.ts
var import_react12 = require("@remix-run/react"), import_react13 = require("react");
function useRedirect({
  entryURL,
  exitURL
}) {
  let { pathname } = (0, import_react12.useLocation)(), navigate = (0, import_react12.useNavigate)();
  (0, import_react13.useEffect)(() => {
    pathname === entryURL && navigate(exitURL);
  }, [pathname, navigate, entryURL, exitURL]);
}

// src/routes/_domains/s.$studentId/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), navigation2 = (id) => [
  {
    href: "/",
    text: "Retour \xE0 l'accueil",
    icon: import_lucide_react4.ChevronLeft
  },
  {
    href: `/s/${id}/overview`,
    text: "Vue d'ensemble",
    icon: import_lucide_react4.Home
  },
  {
    title: "Scolarit\xE9",
    items: [
      {
        href: `/s/${id}/schooling/grades`,
        text: "Notes",
        icon: import_lucide_react4.GraduationCap
      },
      {
        href: `/s/${id}/schooling/homework`,
        text: "Devoirs",
        icon: import_lucide_react4.Briefcase
      },
      {
        href: `/s/${id}/schooling/schedule`,
        text: "Emploi du temps",
        icon: import_lucide_react4.CalendarDays
      },
      {
        href: `/s/${id}/schooling/quizzes`,
        text: "Questionnaires",
        icon: import_lucide_react4.FormInput
      }
    ]
  },
  {
    title: "Administration",
    items: [
      {
        href: "/administration/paiement",
        text: "Paiement",
        icon: import_lucide_react4.CreditCard
      },
      {
        href: "/administration/famille",
        text: "Famille",
        icon: import_lucide_react4.Users
      },
      {
        href: "/administration/documents",
        text: "Documents",
        icon: import_lucide_react4.Files
      }
    ]
  }
], redirectSettings = (id) => ({
  entryURL: `/s/${id}`,
  exitURL: `/s/${id}/overview`
});
function StudentLayout() {
  let studentId = (0, import_react14.useLoaderData)(), outlet = (0, import_react14.useOutlet)();
  return useRedirect(redirectSettings(studentId)), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Layout, { navigation: navigation2(studentId), children: outlet }, void 0, !1, {
    fileName: "src/routes/_domains/s.$studentId/index.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
function loader4({ request, params }) {
  let id = params.studentId;
  return defaultRedirect({
    request,
    ...redirectSettings(id)
  })(() => id);
}

// src/routes/auth/index.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AuthLayout() {
  let outlet = (0, import_react15.useOutlet)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ThemeSelector, { className: "fixed top-4 right-4 z-30" }, void 0, !1, {
      fileName: "src/routes/auth/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PageTransition, { as: "main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex min-h-full flex-col items-center justify-center py-4", children: outlet }, void 0, !1, {
      fileName: "src/routes/auth/index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/routes/auth/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/auth/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function loader5({ request: { url } }) {
  return new URL(url).pathname === "/auth" ? (0, import_node5.redirect)("/auth/login") : null;
}

// src/routes/settings/index.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => SettingsLayout,
  loader: () => loader6
});
var import_react16 = require("@remix-run/react"), import_lucide_react5 = require("lucide-react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), navigation3 = [
  {
    href: "/",
    text: "Retour \xE0 l'accueil",
    icon: import_lucide_react5.ChevronLeft
  },
  {
    href: "/settings/general",
    text: "G\xE9n\xE9ral",
    icon: import_lucide_react5.Cog
  }
], redirectSettings2 = { entryURL: "/settings", exitURL: "/settings/general" };
function SettingsLayout() {
  let outlet = (0, import_react16.useOutlet)();
  return useRedirect(redirectSettings2), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Layout, { navigation: navigation3, children: outlet }, void 0, !1, {
    fileName: "src/routes/settings/index.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
async function loader6({ request }) {
  return await withAuth(request, { failure: !0 }), defaultRedirect({
    request,
    ...redirectSettings2
  })(() => null);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2a14bb53", entry: { module: "/build/entry.client-BL5UN65Q.js", imports: ["/build/_shared/chunk-SZ62CEAA.js", "/build/_shared/chunk-2EH4WWJH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-67F7IZRH.js", imports: ["/build/_shared/chunk-GRA5YQL2.js", "/build/_shared/chunk-BLCOG3RB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_domains": { id: "routes/_domains", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_domains-SVBLBM5K.js", imports: ["/build/_shared/chunk-EI6MZPRF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_domains/s.$studentId": { id: "routes/_domains/s.$studentId", parentId: "routes/_domains", path: "s/:studentId", index: void 0, caseSensitive: void 0, module: "/build/routes/_domains/s.$studentId-A4BCRMKI.js", imports: ["/build/_shared/chunk-VJ2ZN7FX.js", "/build/_shared/chunk-RX5UNJIC.js", "/build/_shared/chunk-GRA5YQL2.js", "/build/_shared/chunk-W5DR6ACG.js", "/build/_shared/chunk-BLCOG3RB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XRHY43RV.js", imports: ["/build/_shared/chunk-EI6MZPRF.js", "/build/_shared/chunk-RX5UNJIC.js", "/build/_shared/chunk-W5DR6ACG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-KBOASONL.js", imports: ["/build/_shared/chunk-W5DR6ACG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-6TUPZX6L.js", imports: ["/build/_shared/chunk-EI6MZPRF.js", "/build/_shared/chunk-VJ2ZN7FX.js", "/build/_shared/chunk-RX5UNJIC.js", "/build/_shared/chunk-W5DR6ACG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-2A14BB53.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_domains": {
    id: "routes/_domains",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: domains_exports
  },
  "routes/_domains/s.$studentId": {
    id: "routes/_domains/s.$studentId",
    parentId: "routes/_domains",
    path: "s/:studentId",
    index: void 0,
    caseSensitive: void 0,
    module: s_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
