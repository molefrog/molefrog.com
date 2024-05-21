var Rs = Object.defineProperty;
var Ts = (e, t, n) => t in e ? Rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => (Ts(e, typeof t != "symbol" ? t + "" : t, n), n), hr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var oe = (e, t, n) => (hr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wt = (e, t, n, r) => (hr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import * as js from "react";
import K, { forwardRef as Je, Children as ft, isValidElement as He, createElement as dt, cloneElement as Gt, Fragment as As, useMemo as Ls, useState as ce, useCallback as De, useLayoutEffect as co, useEffect as Ne, useRef as pe, useDebugValue as pr, useContext as uo, useImperativeHandle as Is, createContext as An, useSyncExternalStore as Ln } from "react";
import { createPortal as Ds } from "react-dom";
var yn = { exports: {} }, ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function Ns() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = K, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function b(f) {
      if (f === null || typeof f != "object")
        return null;
      var v = g && f[g] || f[m];
      return typeof v == "function" ? v : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(f) {
      {
        for (var v = arguments.length, C = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
          C[O - 1] = arguments[O];
        w("error", f, C);
      }
    }
    function w(f, v, C) {
      {
        var O = x.ReactDebugCurrentFrame, j = O.getStackAddendum();
        j !== "" && (v += "%s", C = C.concat([j]));
        var N = C.map(function(T) {
          return String(T);
        });
        N.unshift("Warning: " + v), Function.prototype.apply.call(console[f], console, N);
      }
    }
    var E = !1, P = !1, S = !1, $ = !1, L = !1, D;
    D = Symbol.for("react.module.reference");
    function U(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || L || f === o || f === u || f === l || $ || f === p || E || P || S || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === D || f.getModuleId !== void 0));
    }
    function te(f, v, C) {
      var O = f.displayName;
      if (O)
        return O;
      var j = v.displayName || v.name || "";
      return j !== "" ? C + "(" + j + ")" : C;
    }
    function Pe(f) {
      return f.displayName || "Context";
    }
    function F(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case i:
            var v = f;
            return Pe(v) + ".Consumer";
          case a:
            var C = f;
            return Pe(C._context) + ".Provider";
          case c:
            return te(f, f.render, "ForwardRef");
          case d:
            var O = f.displayName || null;
            return O !== null ? O : F(f.type) || "Memo";
          case h: {
            var j = f, N = j._payload, T = j._init;
            try {
              return F(T(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, le, ne, re, ge, fe, Z, Fe;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function We() {
      {
        if (Y === 0) {
          le = console.log, ne = console.info, re = console.warn, ge = console.error, fe = console.group, Z = console.groupCollapsed, Fe = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Y++;
      }
    }
    function Me() {
      {
        if (Y--, Y === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, f, {
              value: le
            }),
            info: I({}, f, {
              value: ne
            }),
            warn: I({}, f, {
              value: re
            }),
            error: I({}, f, {
              value: ge
            }),
            group: I({}, f, {
              value: fe
            }),
            groupCollapsed: I({}, f, {
              value: Z
            }),
            groupEnd: I({}, f, {
              value: Fe
            })
          });
        }
        Y < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = x.ReactCurrentDispatcher, me;
    function ae(f, v, C) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (j) {
            var O = j.stack.trim().match(/\n( *(at )?)/);
            me = O && O[1] || "";
          }
        return `
` + me + f;
      }
    }
    var Oe = !1, we;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      we = new ye();
    }
    function Jn(f, v) {
      if (!f || Oe)
        return "";
      {
        var C = we.get(f);
        if (C !== void 0)
          return C;
      }
      var O;
      Oe = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Ce.current, Ce.current = null, We();
      try {
        if (v) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (xe) {
              O = xe;
            }
            Reflect.construct(f, [], T);
          } else {
            try {
              T.call();
            } catch (xe) {
              O = xe;
            }
            f.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            O = xe;
          }
          f();
        }
      } catch (xe) {
        if (xe && O && typeof xe.stack == "string") {
          for (var R = xe.stack.split(`
`), X = O.stack.split(`
`), z = R.length - 1, V = X.length - 1; z >= 1 && V >= 0 && R[z] !== X[V]; )
            V--;
          for (; z >= 1 && V >= 0; z--, V--)
            if (R[z] !== X[V]) {
              if (z !== 1 || V !== 1)
                do
                  if (z--, V--, V < 0 || R[z] !== X[V]) {
                    var ie = `
` + R[z].replace(" at new ", " at ");
                    return f.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", f.displayName)), typeof f == "function" && we.set(f, ie), ie;
                  }
                while (z >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        Oe = !1, Ce.current = N, Me(), Error.prepareStackTrace = j;
      }
      var Ve = f ? f.displayName || f.name : "", fr = Ve ? ae(Ve) : "";
      return typeof f == "function" && we.set(f, fr), fr;
    }
    function us(f, v, C) {
      return Jn(f, !1);
    }
    function ls(f) {
      var v = f.prototype;
      return !!(v && v.isReactComponent);
    }
    function yt(f, v, C) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Jn(f, ls(f));
      if (typeof f == "string")
        return ae(f);
      switch (f) {
        case u:
          return ae("Suspense");
        case l:
          return ae("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return us(f.render);
          case d:
            return yt(f.type, v, C);
          case h: {
            var O = f, j = O._payload, N = O._init;
            try {
              return yt(N(j), v, C);
            } catch {
            }
          }
        }
      return "";
    }
    var vt = Object.prototype.hasOwnProperty, Qn = {}, er = x.ReactDebugCurrentFrame;
    function bt(f) {
      if (f) {
        var v = f._owner, C = yt(f.type, f._source, v ? v.type : null);
        er.setExtraStackFrame(C);
      } else
        er.setExtraStackFrame(null);
    }
    function fs(f, v, C, O, j) {
      {
        var N = Function.call.bind(vt);
        for (var T in f)
          if (N(f, T)) {
            var R = void 0;
            try {
              if (typeof f[T] != "function") {
                var X = Error((O || "React class") + ": " + C + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              R = f[T](v, T, O, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              R = z;
            }
            R && !(R instanceof Error) && (bt(j), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", C, T, typeof R), bt(null)), R instanceof Error && !(R.message in Qn) && (Qn[R.message] = !0, bt(j), y("Failed %s type: %s", C, R.message), bt(null));
          }
      }
    }
    var hs = Array.isArray;
    function Jt(f) {
      return hs(f);
    }
    function ps(f) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, C = v && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return C;
      }
    }
    function ds(f) {
      try {
        return tr(f), !1;
      } catch {
        return !0;
      }
    }
    function tr(f) {
      return "" + f;
    }
    function nr(f) {
      if (ds(f))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ps(f)), tr(f);
    }
    var nt = x.ReactCurrentOwner, gs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, or, Qt;
    Qt = {};
    function ms(f) {
      if (vt.call(f, "ref")) {
        var v = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function ys(f) {
      if (vt.call(f, "key")) {
        var v = Object.getOwnPropertyDescriptor(f, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function vs(f, v) {
      if (typeof f.ref == "string" && nt.current && v && nt.current.stateNode !== v) {
        var C = F(nt.current.type);
        Qt[C] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(nt.current.type), f.ref), Qt[C] = !0);
      }
    }
    function bs(f, v) {
      {
        var C = function() {
          rr || (rr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function ws(f, v) {
      {
        var C = function() {
          or || (or = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var xs = function(f, v, C, O, j, N, T) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: v,
        ref: C,
        props: T,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Ss(f, v, C, O, j) {
      {
        var N, T = {}, R = null, X = null;
        C !== void 0 && (nr(C), R = "" + C), ys(v) && (nr(v.key), R = "" + v.key), ms(v) && (X = v.ref, vs(v, j));
        for (N in v)
          vt.call(v, N) && !gs.hasOwnProperty(N) && (T[N] = v[N]);
        if (f && f.defaultProps) {
          var z = f.defaultProps;
          for (N in z)
            T[N] === void 0 && (T[N] = z[N]);
        }
        if (R || X) {
          var V = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          R && bs(T, V), X && ws(T, V);
        }
        return xs(f, R, X, j, O, nt.current, T);
      }
    }
    var en = x.ReactCurrentOwner, sr = x.ReactDebugCurrentFrame;
    function ze(f) {
      if (f) {
        var v = f._owner, C = yt(f.type, f._source, v ? v.type : null);
        sr.setExtraStackFrame(C);
      } else
        sr.setExtraStackFrame(null);
    }
    var tn;
    tn = !1;
    function nn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function ar() {
      {
        if (en.current) {
          var f = F(en.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Cs(f) {
      {
        if (f !== void 0) {
          var v = f.fileName.replace(/^.*[\\\/]/, ""), C = f.lineNumber;
          return `

Check your code at ` + v + ":" + C + ".";
        }
        return "";
      }
    }
    var ir = {};
    function ks(f) {
      {
        var v = ar();
        if (!v) {
          var C = typeof f == "string" ? f : f.displayName || f.name;
          C && (v = `

Check the top-level render call using <` + C + ">.");
        }
        return v;
      }
    }
    function cr(f, v) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var C = ks(v);
        if (ir[C])
          return;
        ir[C] = !0;
        var O = "";
        f && f._owner && f._owner !== en.current && (O = " It was passed a child from " + F(f._owner.type) + "."), ze(f), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, O), ze(null);
      }
    }
    function ur(f, v) {
      {
        if (typeof f != "object")
          return;
        if (Jt(f))
          for (var C = 0; C < f.length; C++) {
            var O = f[C];
            nn(O) && cr(O, v);
          }
        else if (nn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var j = b(f);
          if (typeof j == "function" && j !== f.entries)
            for (var N = j.call(f), T; !(T = N.next()).done; )
              nn(T.value) && cr(T.value, v);
        }
      }
    }
    function Es(f) {
      {
        var v = f.type;
        if (v == null || typeof v == "string")
          return;
        var C;
        if (typeof v == "function")
          C = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === d))
          C = v.propTypes;
        else
          return;
        if (C) {
          var O = F(v);
          fs(C, f.props, "prop", O, f);
        } else if (v.PropTypes !== void 0 && !tn) {
          tn = !0;
          var j = F(v);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $s(f) {
      {
        for (var v = Object.keys(f.props), C = 0; C < v.length; C++) {
          var O = v[C];
          if (O !== "children" && O !== "key") {
            ze(f), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), ze(null);
            break;
          }
        }
        f.ref !== null && (ze(f), y("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function lr(f, v, C, O, j, N) {
      {
        var T = U(f);
        if (!T) {
          var R = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Cs(j);
          X ? R += X : R += ar();
          var z;
          f === null ? z = "null" : Jt(f) ? z = "array" : f !== void 0 && f.$$typeof === t ? (z = "<" + (F(f.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : z = typeof f, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, R);
        }
        var V = Ss(f, v, C, j, N);
        if (V == null)
          return V;
        if (T) {
          var ie = v.children;
          if (ie !== void 0)
            if (O)
              if (Jt(ie)) {
                for (var Ve = 0; Ve < ie.length; Ve++)
                  ur(ie[Ve], f);
                Object.freeze && Object.freeze(ie);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(ie, f);
        }
        return f === r ? $s(V) : Es(V), V;
      }
    }
    function Ps(f, v, C) {
      return lr(f, v, C, !0);
    }
    function Ms(f, v, C) {
      return lr(f, v, C, !1);
    }
    var Os = Ms, _s = Ps;
    ot.Fragment = r, ot.jsx = Os, ot.jsxs = _s;
  }()), ot;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Fs() {
  if (gr)
    return st;
  gr = 1;
  var e = K, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, c, u) {
    var l, d = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (l in c)
      r.call(c, l) && !s.hasOwnProperty(l) && (d[l] = c[l]);
    if (i && i.defaultProps)
      for (l in c = i.defaultProps, c)
        d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: i, key: h, ref: p, props: d, _owner: o.current };
  }
  return st.Fragment = n, st.jsx = a, st.jsxs = a, st;
}
process.env.NODE_ENV === "production" ? yn.exports = Fs() : yn.exports = Ns();
var k = yn.exports;
function Bs({ topLeftCornerRadius: e, topRightCornerRadius: t, bottomRightCornerRadius: n, bottomLeftCornerRadius: r, width: o, height: s }) {
  const a = {
    topLeft: -1,
    topRight: -1,
    bottomLeft: -1,
    bottomRight: -1
  }, i = {
    topLeft: e,
    topRight: t,
    bottomLeft: r,
    bottomRight: n
  };
  return Object.entries(i).sort(([, c], [, u]) => u - c).forEach(([c, u]) => {
    const l = c, d = Ws[l], h = Math.min(...d.map((p) => {
      const g = i[p.corner];
      if (u === 0 && g === 0)
        return 0;
      const m = a[p.corner], b = p.side === "top" || p.side === "bottom" ? o : s;
      return m >= 0 ? b - a[p.corner] : u / (u + g) * b;
    }));
    a[l] = h, i[l] = Math.min(u, h);
  }), {
    topLeft: {
      radius: i.topLeft,
      roundingAndSmoothingBudget: a.topLeft
    },
    topRight: {
      radius: i.topRight,
      roundingAndSmoothingBudget: a.topRight
    },
    bottomLeft: {
      radius: i.bottomLeft,
      roundingAndSmoothingBudget: a.bottomLeft
    },
    bottomRight: {
      radius: i.bottomRight,
      roundingAndSmoothingBudget: a.bottomRight
    }
  };
}
const Ws = {
  topLeft: [
    {
      corner: "topRight",
      side: "top"
    },
    {
      corner: "bottomLeft",
      side: "left"
    }
  ],
  topRight: [
    {
      corner: "topLeft",
      side: "top"
    },
    {
      corner: "bottomRight",
      side: "right"
    }
  ],
  bottomLeft: [
    {
      corner: "bottomRight",
      side: "bottom"
    },
    {
      corner: "topLeft",
      side: "left"
    }
  ],
  bottomRight: [
    {
      corner: "bottomLeft",
      side: "bottom"
    },
    {
      corner: "topRight",
      side: "right"
    }
  ]
};
function at({ cornerRadius: e, cornerSmoothing: t, preserveSmoothing: n, roundingAndSmoothingBudget: r }) {
  let o = (1 + t) * e;
  if (!n) {
    const g = r / e - 1;
    t = Math.min(t, g), o = Math.min(o, r);
  }
  const s = 90 * (1 - t), a = Math.sin(xt(s / 2)) * e * Math.sqrt(2), i = (90 - s) / 2, c = e * Math.tan(xt(i / 2)), u = 45 * t, l = c * Math.cos(xt(u)), d = l * Math.tan(xt(u));
  let h = (o - a - l - d) / 3, p = 2 * h;
  if (n && o > r) {
    const g = r - d - a - l, m = g / 6, b = g - m;
    h = Math.min(h, b), p = g - h, o = Math.min(o, r);
  }
  return {
    a: p,
    b: h,
    c: l,
    d,
    p: o,
    arcSectionLength: a,
    cornerRadius: e
  };
}
function mr({ width: e, height: t, topLeftPathParams: n, topRightPathParams: r, bottomLeftPathParams: o, bottomRightPathParams: s }) {
  return `
    M ${e - r.p} 0
    ${zs(r)}
    L ${e} ${t - s.p}
    ${Vs(s)}
    L ${o.p} ${t}
    ${Gs(o)}
    L 0 ${n.p}
    ${Us(n)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim();
}
function zs({ cornerRadius: e, a: t, b: n, c: r, d: o, p: s, arcSectionLength: a }) {
  return e ? Ee`
    c ${t} 0 ${t + n} 0 ${t + n + r} ${o}
    a ${e} ${e} 0 0 1 ${a} ${a}
    c ${o} ${r}
        ${o} ${n + r}
        ${o} ${t + n + r}` : Ee`l ${s} 0`;
}
function Vs({ cornerRadius: e, a: t, b: n, c: r, d: o, p: s, arcSectionLength: a }) {
  return e ? Ee`
    c 0 ${t}
      0 ${t + n}
      ${-o} ${t + n + r}
    a ${e} ${e} 0 0 1 -${a} ${a}
    c ${-r} ${o}
      ${-(n + r)} ${o}
      ${-(t + n + r)} ${o}` : Ee`l 0 ${s}`;
}
function Gs({ cornerRadius: e, a: t, b: n, c: r, d: o, p: s, arcSectionLength: a }) {
  return e ? Ee`
    c ${-t} 0
      ${-(t + n)} 0
      ${-(t + n + r)} ${-o}
    a ${e} ${e} 0 0 1 -${a} -${a}
    c ${-o} ${-r}
      ${-o} ${-(n + r)}
      ${-o} ${-(t + n + r)}` : Ee`l ${-s} 0`;
}
function Us({ cornerRadius: e, a: t, b: n, c: r, d: o, p: s, arcSectionLength: a }) {
  return e ? Ee`
    c 0 ${-t}
      0 ${-(t + n)}
      ${o} ${-(t + n + r)}
    a ${e} ${e} 0 0 1 ${a} -${a}
    c ${r} ${-o}
      ${n + r} ${-o}
      ${t + n + r} ${-o}` : Ee`l 0 ${-s}`;
}
function xt(e) {
  return e * Math.PI / 180;
}
function Ee(e, ...t) {
  return e.reduce((n, r, o) => {
    let s = t[o];
    return typeof s == "number" ? n + r + s.toFixed(4) : n + r + (s ?? "");
  }, "");
}
function Hs({ cornerRadius: e = 0, topLeftCornerRadius: t, topRightCornerRadius: n, bottomRightCornerRadius: r, bottomLeftCornerRadius: o, cornerSmoothing: s, width: a, height: i, preserveSmoothing: c = !1 }) {
  if (t = t ?? e, n = n ?? e, o = o ?? e, r = r ?? e, t === n && n === r && r === o && o === t) {
    const p = Math.min(a, i) / 2, g = Math.min(t, p), m = at({
      cornerRadius: g,
      cornerSmoothing: s,
      preserveSmoothing: c,
      roundingAndSmoothingBudget: p
    });
    return mr({
      width: a,
      height: i,
      topLeftPathParams: m,
      topRightPathParams: m,
      bottomLeftPathParams: m,
      bottomRightPathParams: m
    });
  }
  const { topLeft: u, topRight: l, bottomLeft: d, bottomRight: h } = Bs({
    topLeftCornerRadius: t,
    topRightCornerRadius: n,
    bottomRightCornerRadius: r,
    bottomLeftCornerRadius: o,
    width: a,
    height: i
  });
  return mr({
    width: a,
    height: i,
    topLeftPathParams: at({
      cornerSmoothing: s,
      preserveSmoothing: c,
      cornerRadius: u.radius,
      roundingAndSmoothingBudget: u.roundingAndSmoothingBudget
    }),
    topRightPathParams: at({
      cornerSmoothing: s,
      preserveSmoothing: c,
      cornerRadius: l.radius,
      roundingAndSmoothingBudget: l.roundingAndSmoothingBudget
    }),
    bottomRightPathParams: at({
      cornerSmoothing: s,
      preserveSmoothing: c,
      cornerRadius: h.radius,
      roundingAndSmoothingBudget: h.roundingAndSmoothingBudget
    }),
    bottomLeftPathParams: at({
      cornerSmoothing: s,
      preserveSmoothing: c,
      cornerRadius: d.radius,
      roundingAndSmoothingBudget: d.roundingAndSmoothingBudget
    })
  });
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function Ys(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function qs(...e) {
  return (t) => e.forEach(
    (n) => Ys(n, t)
  );
}
const lo = /* @__PURE__ */ Je((e, t) => {
  const { children: n, ...r } = e, o = ft.toArray(n), s = o.find(Zs);
  if (s) {
    const a = s.props.children, i = o.map((c) => c === s ? ft.count(a) > 1 ? ft.only(null) : /* @__PURE__ */ He(a) ? a.props.children : null : c);
    return /* @__PURE__ */ dt(vn, Lt({}, r, {
      ref: t
    }), /* @__PURE__ */ He(a) ? /* @__PURE__ */ Gt(a, void 0, i) : null);
  }
  return /* @__PURE__ */ dt(vn, Lt({}, r, {
    ref: t
  }), n);
});
lo.displayName = "Slot";
const vn = /* @__PURE__ */ Je((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ He(n) ? /* @__PURE__ */ Gt(n, {
    ...Xs(r, n.props),
    ref: t ? qs(t, n.ref) : n.ref
  }) : ft.count(n) > 1 ? ft.only(null) : null;
});
vn.displayName = "SlotClone";
const Ks = ({ children: e }) => /* @__PURE__ */ dt(As, null, e);
function Zs(e) {
  return /* @__PURE__ */ He(e) && e.type === Ks;
}
function Xs(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      s(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...s
    } : r === "className" && (n[r] = [
      o,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
var Js = Object.defineProperty, Qs = Object.defineProperties, ea = Object.getOwnPropertyDescriptors, It = Object.getOwnPropertySymbols, fo = Object.prototype.hasOwnProperty, ho = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? Js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vr = (e, t) => {
  for (var n in t || (t = {}))
    fo.call(t, n) && yr(e, n, t[n]);
  if (It)
    for (var n of It(t))
      ho.call(t, n) && yr(e, n, t[n]);
  return e;
}, br = (e, t) => Qs(e, ea(t)), ta = (e, t) => {
  var n = {};
  for (var r in e)
    fo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && It)
    for (var r of It(e))
      t.indexOf(r) < 0 && ho.call(e, r) && (n[r] = e[r]);
  return n;
}, po = typeof window < "u" ? co : Ne;
function na(e, t, n, r) {
  const o = pe(t);
  po(() => {
    o.current = t;
  }, [t]), Ne(() => {
    var s;
    const a = (s = n == null ? void 0 : n.current) != null ? s : window;
    if (!(a && a.addEventListener))
      return;
    const i = (c) => o.current(c);
    return a.addEventListener(e, i, r), () => {
      a.removeEventListener(e, i, r);
    };
  }, [e, n, r]);
}
function ra(e) {
  var t, n;
  const [r, o] = ce(null), [s, a] = ce({
    width: (t = e.defaultWidth) != null ? t : 0,
    height: (n = e.defaultHeight) != null ? n : 0
  }), i = De(() => {
    a({
      width: (r == null ? void 0 : r.offsetWidth) || 0,
      height: (r == null ? void 0 : r.offsetHeight) || 0
    });
  }, [r == null ? void 0 : r.offsetHeight, r == null ? void 0 : r.offsetWidth]);
  return na("resize", i), po(() => {
    i();
  }, [r == null ? void 0 : r.offsetHeight, r == null ? void 0 : r.offsetWidth]), [o, s];
}
function gt(e) {
  var t = e, {
    cornerRadius: n,
    cornerSmoothing: r = 0.6,
    asChild: o,
    style: s,
    width: a,
    height: i,
    defaultWidth: c,
    defaultHeight: u
  } = t, l = ta(t, [
    "cornerRadius",
    "cornerSmoothing",
    "asChild",
    "style",
    "width",
    "height",
    "defaultWidth",
    "defaultHeight"
  ]);
  const d = o ? lo : "div", [h, { width: p, height: g }] = ra({
    defaultWidth: c,
    defaultHeight: u
  }), m = a ?? p, b = i ?? g, x = Ls(() => Hs({
    width: m,
    height: b,
    cornerRadius: n,
    cornerSmoothing: r
  }), [m, b, n, r]);
  return /* @__PURE__ */ k.jsx(
    d,
    br(vr({}, l), {
      ref: h,
      style: br(vr({}, s), {
        borderRadius: n,
        width: a ?? c,
        height: i ?? u,
        clipPath: `path('${x}')`
      }),
      "data-squircle": n
    })
  );
}
function on(e, t, n) {
  if (e && e.length) {
    const [r, o] = t, s = Math.PI / 180 * n, a = Math.cos(s), i = Math.sin(s);
    for (const c of e) {
      const [u, l] = c;
      c[0] = (u - r) * a - (l - o) * i + r, c[1] = (u - r) * i + (l - o) * a + o;
    }
  }
}
function oa(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function sa(e, t, n, r = 1) {
  const o = n, s = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, i = [0, 0];
  if (o)
    for (const u of a)
      on(u, i, o);
  const c = function(u, l, d) {
    const h = [];
    for (const y of u) {
      const w = [...y];
      oa(w[0], w[w.length - 1]) || w.push([w[0][0], w[0][1]]), w.length > 2 && h.push(w);
    }
    const p = [];
    l = Math.max(l, 0.1);
    const g = [];
    for (const y of h)
      for (let w = 0; w < y.length - 1; w++) {
        const E = y[w], P = y[w + 1];
        if (E[1] !== P[1]) {
          const S = Math.min(E[1], P[1]);
          g.push({ ymin: S, ymax: Math.max(E[1], P[1]), x: S === E[1] ? E[0] : P[0], islope: (P[0] - E[0]) / (P[1] - E[1]) });
        }
      }
    if (g.sort((y, w) => y.ymin < w.ymin ? -1 : y.ymin > w.ymin ? 1 : y.x < w.x ? -1 : y.x > w.x ? 1 : y.ymax === w.ymax ? 0 : (y.ymax - w.ymax) / Math.abs(y.ymax - w.ymax)), !g.length)
      return p;
    let m = [], b = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let y = -1;
        for (let w = 0; w < g.length && !(g[w].ymin > b); w++)
          y = w;
        g.splice(0, y + 1).forEach((w) => {
          m.push({ s: b, edge: w });
        });
      }
      if (m = m.filter((y) => !(y.edge.ymax <= b)), m.sort((y, w) => y.edge.x === w.edge.x ? 0 : (y.edge.x - w.edge.x) / Math.abs(y.edge.x - w.edge.x)), (d !== 1 || x % l == 0) && m.length > 1)
        for (let y = 0; y < m.length; y += 2) {
          const w = y + 1;
          if (w >= m.length)
            break;
          const E = m[y].edge, P = m[w].edge;
          p.push([[Math.round(E.x), b], [Math.round(P.x), b]]);
        }
      b += d, m.forEach((y) => {
        y.edge.x = y.edge.x + d * y.edge.islope;
      }), x++;
    }
    return p;
  }(a, s, r);
  if (o) {
    for (const u of a)
      on(u, i, -o);
    (function(u, l, d) {
      const h = [];
      u.forEach((p) => h.push(...p)), on(h, l, d);
    })(c, i, -o);
  }
  return c;
}
function mt(e, t) {
  var n;
  const r = t.hachureAngle + 90;
  let o = t.hachureGap;
  o < 0 && (o = 4 * t.strokeWidth), o = Math.round(Math.max(o, 0.1));
  let s = 1;
  return t.roughness >= 1 && (((n = t.randomizer) === null || n === void 0 ? void 0 : n.next()) || Math.random()) > 0.7 && (s = o), sa(e, o, r, s || 1);
}
class In {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    return this._fillPolygons(t, n);
  }
  _fillPolygons(t, n) {
    const r = mt(t, n);
    return { type: "fillSketch", ops: this.renderLines(r, n) };
  }
  renderLines(t, n) {
    const r = [];
    for (const o of t)
      r.push(...this.helper.doubleLineOps(o[0][0], o[0][1], o[1][0], o[1][1], n));
    return r;
  }
}
function Ut(e) {
  const t = e[0], n = e[1];
  return Math.sqrt(Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2));
}
class aa extends In {
  fillPolygons(t, n) {
    let r = n.hachureGap;
    r < 0 && (r = 4 * n.strokeWidth), r = Math.max(r, 0.1);
    const o = mt(t, Object.assign({}, n, { hachureGap: r })), s = Math.PI / 180 * n.hachureAngle, a = [], i = 0.5 * r * Math.cos(s), c = 0.5 * r * Math.sin(s);
    for (const [u, l] of o)
      Ut([u, l]) && a.push([[u[0] - i, u[1] + c], [...l]], [[u[0] + i, u[1] - c], [...l]]);
    return { type: "fillSketch", ops: this.renderLines(a, n) };
  }
}
class ia extends In {
  fillPolygons(t, n) {
    const r = this._fillPolygons(t, n), o = Object.assign({}, n, { hachureAngle: n.hachureAngle + 90 }), s = this._fillPolygons(t, o);
    return r.ops = r.ops.concat(s.ops), r;
  }
}
class ca {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = mt(t, n = Object.assign({}, n, { hachureAngle: 0 }));
    return this.dotsOnLines(r, n);
  }
  dotsOnLines(t, n) {
    const r = [];
    let o = n.hachureGap;
    o < 0 && (o = 4 * n.strokeWidth), o = Math.max(o, 0.1);
    let s = n.fillWeight;
    s < 0 && (s = n.strokeWidth / 2);
    const a = o / 4;
    for (const i of t) {
      const c = Ut(i), u = c / o, l = Math.ceil(u) - 1, d = c - l * o, h = (i[0][0] + i[1][0]) / 2 - o / 4, p = Math.min(i[0][1], i[1][1]);
      for (let g = 0; g < l; g++) {
        const m = p + d + g * o, b = h - a + 2 * Math.random() * a, x = m - a + 2 * Math.random() * a, y = this.helper.ellipse(b, x, s, s, n);
        r.push(...y.ops);
      }
    }
    return { type: "fillSketch", ops: r };
  }
}
class ua {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = mt(t, n);
    return { type: "fillSketch", ops: this.dashedLine(r, n) };
  }
  dashedLine(t, n) {
    const r = n.dashOffset < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashOffset, o = n.dashGap < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashGap, s = [];
    return t.forEach((a) => {
      const i = Ut(a), c = Math.floor(i / (r + o)), u = (i + o - c * (r + o)) / 2;
      let l = a[0], d = a[1];
      l[0] > d[0] && (l = a[1], d = a[0]);
      const h = Math.atan((d[1] - l[1]) / (d[0] - l[0]));
      for (let p = 0; p < c; p++) {
        const g = p * (r + o), m = g + r, b = [l[0] + g * Math.cos(h) + u * Math.cos(h), l[1] + g * Math.sin(h) + u * Math.sin(h)], x = [l[0] + m * Math.cos(h) + u * Math.cos(h), l[1] + m * Math.sin(h) + u * Math.sin(h)];
        s.push(...this.helper.doubleLineOps(b[0], b[1], x[0], x[1], n));
      }
    }), s;
  }
}
class la {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap, o = n.zigzagOffset < 0 ? r : n.zigzagOffset, s = mt(t, n = Object.assign({}, n, { hachureGap: r + o }));
    return { type: "fillSketch", ops: this.zigzagLines(s, o, n) };
  }
  zigzagLines(t, n, r) {
    const o = [];
    return t.forEach((s) => {
      const a = Ut(s), i = Math.round(a / (2 * n));
      let c = s[0], u = s[1];
      c[0] > u[0] && (c = s[1], u = s[0]);
      const l = Math.atan((u[1] - c[1]) / (u[0] - c[0]));
      for (let d = 0; d < i; d++) {
        const h = 2 * d * n, p = 2 * (d + 1) * n, g = Math.sqrt(2 * Math.pow(n, 2)), m = [c[0] + h * Math.cos(l), c[1] + h * Math.sin(l)], b = [c[0] + p * Math.cos(l), c[1] + p * Math.sin(l)], x = [m[0] + g * Math.cos(l + Math.PI / 4), m[1] + g * Math.sin(l + Math.PI / 4)];
        o.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], r), ...this.helper.doubleLineOps(x[0], x[1], b[0], b[1], r));
      }
    }), o;
  }
}
const Q = {};
class fa {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const ha = 0, sn = 1, wr = 2, St = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function an(e, t) {
  return e.type === t;
}
function Dn(e) {
  const t = [], n = function(a) {
    const i = new Array();
    for (; a !== ""; )
      if (a.match(/^([ \t\r\n,]+)/))
        a = a.substr(RegExp.$1.length);
      else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/))
        i[i.length] = { type: ha, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
      else {
        if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))
          return [];
        i[i.length] = { type: sn, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
      }
    return i[i.length] = { type: wr, text: "" }, i;
  }(e);
  let r = "BOD", o = 0, s = n[o];
  for (; !an(s, wr); ) {
    let a = 0;
    const i = [];
    if (r === "BOD") {
      if (s.text !== "M" && s.text !== "m")
        return Dn("M0,0" + e);
      o++, a = St[s.text], r = s.text;
    } else
      an(s, sn) ? a = St[r] : (o++, a = St[s.text], r = s.text);
    if (!(o + a < n.length))
      throw new Error("Path data ended short");
    for (let c = o; c < o + a; c++) {
      const u = n[c];
      if (!an(u, sn))
        throw new Error("Param not a number: " + r + "," + u.text);
      i[i.length] = +u.text;
    }
    if (typeof St[r] != "number")
      throw new Error("Bad segment: " + r);
    {
      const c = { key: r, data: i };
      t.push(c), o += a, s = n[o], r === "M" && (r = "L"), r === "m" && (r = "l");
    }
  }
  return t;
}
function go(e) {
  let t = 0, n = 0, r = 0, o = 0;
  const s = [];
  for (const { key: a, data: i } of e)
    switch (a) {
      case "M":
        s.push({ key: "M", data: [...i] }), [t, n] = i, [r, o] = i;
        break;
      case "m":
        t += i[0], n += i[1], s.push({ key: "M", data: [t, n] }), r = t, o = n;
        break;
      case "L":
        s.push({ key: "L", data: [...i] }), [t, n] = i;
        break;
      case "l":
        t += i[0], n += i[1], s.push({ key: "L", data: [t, n] });
        break;
      case "C":
        s.push({ key: "C", data: [...i] }), t = i[4], n = i[5];
        break;
      case "c": {
        const c = i.map((u, l) => l % 2 ? u + n : u + t);
        s.push({ key: "C", data: c }), t = c[4], n = c[5];
        break;
      }
      case "Q":
        s.push({ key: "Q", data: [...i] }), t = i[2], n = i[3];
        break;
      case "q": {
        const c = i.map((u, l) => l % 2 ? u + n : u + t);
        s.push({ key: "Q", data: c }), t = c[2], n = c[3];
        break;
      }
      case "A":
        s.push({ key: "A", data: [...i] }), t = i[5], n = i[6];
        break;
      case "a":
        t += i[5], n += i[6], s.push({ key: "A", data: [i[0], i[1], i[2], i[3], i[4], t, n] });
        break;
      case "H":
        s.push({ key: "H", data: [...i] }), t = i[0];
        break;
      case "h":
        t += i[0], s.push({ key: "H", data: [t] });
        break;
      case "V":
        s.push({ key: "V", data: [...i] }), n = i[0];
        break;
      case "v":
        n += i[0], s.push({ key: "V", data: [n] });
        break;
      case "S":
        s.push({ key: "S", data: [...i] }), t = i[2], n = i[3];
        break;
      case "s": {
        const c = i.map((u, l) => l % 2 ? u + n : u + t);
        s.push({ key: "S", data: c }), t = c[2], n = c[3];
        break;
      }
      case "T":
        s.push({ key: "T", data: [...i] }), t = i[0], n = i[1];
        break;
      case "t":
        t += i[0], n += i[1], s.push({ key: "T", data: [t, n] });
        break;
      case "Z":
      case "z":
        s.push({ key: "Z", data: [] }), t = r, n = o;
    }
  return s;
}
function mo(e) {
  const t = [];
  let n = "", r = 0, o = 0, s = 0, a = 0, i = 0, c = 0;
  for (const { key: u, data: l } of e) {
    switch (u) {
      case "M":
        t.push({ key: "M", data: [...l] }), [r, o] = l, [s, a] = l;
        break;
      case "C":
        t.push({ key: "C", data: [...l] }), r = l[4], o = l[5], i = l[2], c = l[3];
        break;
      case "L":
        t.push({ key: "L", data: [...l] }), [r, o] = l;
        break;
      case "H":
        r = l[0], t.push({ key: "L", data: [r, o] });
        break;
      case "V":
        o = l[0], t.push({ key: "L", data: [r, o] });
        break;
      case "S": {
        let d = 0, h = 0;
        n === "C" || n === "S" ? (d = r + (r - i), h = o + (o - c)) : (d = r, h = o), t.push({ key: "C", data: [d, h, ...l] }), i = l[0], c = l[1], r = l[2], o = l[3];
        break;
      }
      case "T": {
        const [d, h] = l;
        let p = 0, g = 0;
        n === "Q" || n === "T" ? (p = r + (r - i), g = o + (o - c)) : (p = r, g = o);
        const m = r + 2 * (p - r) / 3, b = o + 2 * (g - o) / 3, x = d + 2 * (p - d) / 3, y = h + 2 * (g - h) / 3;
        t.push({ key: "C", data: [m, b, x, y, d, h] }), i = p, c = g, r = d, o = h;
        break;
      }
      case "Q": {
        const [d, h, p, g] = l, m = r + 2 * (d - r) / 3, b = o + 2 * (h - o) / 3, x = p + 2 * (d - p) / 3, y = g + 2 * (h - g) / 3;
        t.push({ key: "C", data: [m, b, x, y, p, g] }), i = d, c = h, r = p, o = g;
        break;
      }
      case "A": {
        const d = Math.abs(l[0]), h = Math.abs(l[1]), p = l[2], g = l[3], m = l[4], b = l[5], x = l[6];
        d === 0 || h === 0 ? (t.push({ key: "C", data: [r, o, b, x, b, x] }), r = b, o = x) : (r !== b || o !== x) && (yo(r, o, b, x, d, h, p, g, m).forEach(function(y) {
          t.push({ key: "C", data: y });
        }), r = b, o = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), r = s, o = a;
    }
    n = u;
  }
  return t;
}
function it(e, t, n) {
  return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function yo(e, t, n, r, o, s, a, i, c, u) {
  const l = (d = a, Math.PI * d / 180);
  var d;
  let h = [], p = 0, g = 0, m = 0, b = 0;
  if (u)
    [p, g, m, b] = u;
  else {
    [e, t] = it(e, t, -l), [n, r] = it(n, r, -l);
    const F = (e - n) / 2, I = (t - r) / 2;
    let Y = F * F / (o * o) + I * I / (s * s);
    Y > 1 && (Y = Math.sqrt(Y), o *= Y, s *= Y);
    const le = o * o, ne = s * s, re = le * ne - le * I * I - ne * F * F, ge = le * I * I + ne * F * F, fe = (i === c ? -1 : 1) * Math.sqrt(Math.abs(re / ge));
    m = fe * o * I / s + (e + n) / 2, b = fe * -s * F / o + (t + r) / 2, p = Math.asin(parseFloat(((t - b) / s).toFixed(9))), g = Math.asin(parseFloat(((r - b) / s).toFixed(9))), e < m && (p = Math.PI - p), n < m && (g = Math.PI - g), p < 0 && (p = 2 * Math.PI + p), g < 0 && (g = 2 * Math.PI + g), c && p > g && (p -= 2 * Math.PI), !c && g > p && (g -= 2 * Math.PI);
  }
  let x = g - p;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const F = g, I = n, Y = r;
    g = c && g > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, h = yo(n = m + o * Math.cos(g), r = b + s * Math.sin(g), I, Y, o, s, a, 0, c, [g, F, m, b]);
  }
  x = g - p;
  const y = Math.cos(p), w = Math.sin(p), E = Math.cos(g), P = Math.sin(g), S = Math.tan(x / 4), $ = 4 / 3 * o * S, L = 4 / 3 * s * S, D = [e, t], U = [e + $ * w, t - L * y], te = [n + $ * P, r - L * E], Pe = [n, r];
  if (U[0] = 2 * D[0] - U[0], U[1] = 2 * D[1] - U[1], u)
    return [U, te, Pe].concat(h);
  {
    h = [U, te, Pe].concat(h);
    const F = [];
    for (let I = 0; I < h.length; I += 3) {
      const Y = it(h[I][0], h[I][1], l), le = it(h[I + 1][0], h[I + 1][1], l), ne = it(h[I + 2][0], h[I + 2][1], l);
      F.push([Y[0], Y[1], le[0], le[1], ne[0], ne[1]]);
    }
    return F;
  }
}
const pa = { randOffset: function(e, t) {
  return M(e, t);
}, randOffsetWithRange: function(e, t, n) {
  return Dt(e, t, n);
}, ellipse: function(e, t, n, r, o) {
  const s = bo(n, r, o);
  return bn(e, t, o, s).opset;
}, doubleLineOps: function(e, t, n, r, o) {
  return $e(e, t, n, r, o, !0);
} };
function vo(e, t, n, r, o) {
  return { type: "path", ops: $e(e, t, n, r, o) };
}
function Mt(e, t, n) {
  const r = (e || []).length;
  if (r > 2) {
    const o = [];
    for (let s = 0; s < r - 1; s++)
      o.push(...$e(e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], n));
    return t && o.push(...$e(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), { type: "path", ops: o };
  }
  return r === 2 ? vo(e[0][0], e[0][1], e[1][0], e[1][1], n) : { type: "path", ops: [] };
}
function da(e, t, n, r, o) {
  return function(s, a) {
    return Mt(s, !0, a);
  }([[e, t], [e + n, t], [e + n, t + r], [e, t + r]], o);
}
function xr(e, t) {
  if (e.length) {
    const n = typeof e[0][0] == "number" ? [e] : e, r = Ct(n[0], 1 * (1 + 0.2 * t.roughness), t), o = t.disableMultiStroke ? [] : Ct(n[0], 1.5 * (1 + 0.22 * t.roughness), kr(t));
    for (let s = 1; s < n.length; s++) {
      const a = n[s];
      if (a.length) {
        const i = Ct(a, 1 * (1 + 0.2 * t.roughness), t), c = t.disableMultiStroke ? [] : Ct(a, 1.5 * (1 + 0.22 * t.roughness), kr(t));
        for (const u of i)
          u.op !== "move" && r.push(u);
        for (const u of c)
          u.op !== "move" && o.push(u);
      }
    }
    return { type: "path", ops: r.concat(o) };
  }
  return { type: "path", ops: [] };
}
function bo(e, t, n) {
  const r = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), o = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), s = 2 * Math.PI / o;
  let a = Math.abs(e / 2), i = Math.abs(t / 2);
  const c = 1 - n.curveFitting;
  return a += M(a * c, n), i += M(i * c, n), { increment: s, rx: a, ry: i };
}
function bn(e, t, n, r) {
  const [o, s] = Er(r.increment, e, t, r.rx, r.ry, 1, r.increment * Dt(0.1, Dt(0.4, 1, n), n), n);
  let a = Nt(o, null, n);
  if (!n.disableMultiStroke && n.roughness !== 0) {
    const [i] = Er(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), c = Nt(i, null, n);
    a = a.concat(c);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: a } };
}
function Sr(e, t, n, r, o, s, a, i, c) {
  const u = e, l = t;
  let d = Math.abs(n / 2), h = Math.abs(r / 2);
  d += M(0.01 * d, c), h += M(0.01 * h, c);
  let p = o, g = s;
  for (; p < 0; )
    p += 2 * Math.PI, g += 2 * Math.PI;
  g - p > 2 * Math.PI && (p = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / c.curveStepCount, b = Math.min(m / 2, (g - p) / 2), x = $r(b, u, l, d, h, p, g, 1, c);
  if (!c.disableMultiStroke) {
    const y = $r(b, u, l, d, h, p, g, 1.5, c);
    x.push(...y);
  }
  return a && (i ? x.push(...$e(u, l, u + d * Math.cos(p), l + h * Math.sin(p), c), ...$e(u, l, u + d * Math.cos(g), l + h * Math.sin(g), c)) : x.push({ op: "lineTo", data: [u, l] }, { op: "lineTo", data: [u + d * Math.cos(p), l + h * Math.sin(p)] })), { type: "path", ops: x };
}
function Cr(e, t) {
  const n = mo(go(Dn(e))), r = [];
  let o = [0, 0], s = [0, 0];
  for (const { key: a, data: i } of n)
    switch (a) {
      case "M":
        s = [i[0], i[1]], o = [i[0], i[1]];
        break;
      case "L":
        r.push(...$e(s[0], s[1], i[0], i[1], t)), s = [i[0], i[1]];
        break;
      case "C": {
        const [c, u, l, d, h, p] = i;
        r.push(...ga(c, u, l, d, h, p, s, t)), s = [h, p];
        break;
      }
      case "Z":
        r.push(...$e(s[0], s[1], o[0], o[1], t)), s = [o[0], o[1]];
    }
  return { type: "path", ops: r };
}
function cn(e, t) {
  const n = [];
  for (const r of e)
    if (r.length) {
      const o = t.maxRandomnessOffset || 0, s = r.length;
      if (s > 2) {
        n.push({ op: "move", data: [r[0][0] + M(o, t), r[0][1] + M(o, t)] });
        for (let a = 1; a < s; a++)
          n.push({ op: "lineTo", data: [r[a][0] + M(o, t), r[a][1] + M(o, t)] });
      }
    }
  return { type: "fillPath", ops: n };
}
function Ge(e, t) {
  return function(n, r) {
    let o = n.fillStyle || "hachure";
    if (!Q[o])
      switch (o) {
        case "zigzag":
          Q[o] || (Q[o] = new aa(r));
          break;
        case "cross-hatch":
          Q[o] || (Q[o] = new ia(r));
          break;
        case "dots":
          Q[o] || (Q[o] = new ca(r));
          break;
        case "dashed":
          Q[o] || (Q[o] = new ua(r));
          break;
        case "zigzag-line":
          Q[o] || (Q[o] = new la(r));
          break;
        default:
          o = "hachure", Q[o] || (Q[o] = new In(r));
      }
    return Q[o];
  }(t, pa).fillPolygons(e, t);
}
function kr(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function wo(e) {
  return e.randomizer || (e.randomizer = new fa(e.seed || 0)), e.randomizer.next();
}
function Dt(e, t, n, r = 1) {
  return n.roughness * r * (wo(n) * (t - e) + e);
}
function M(e, t, n = 1) {
  return Dt(-e, e, t, n);
}
function $e(e, t, n, r, o, s = !1) {
  const a = s ? o.disableMultiStrokeFill : o.disableMultiStroke, i = wn(e, t, n, r, o, !0, !1);
  if (a)
    return i;
  const c = wn(e, t, n, r, o, !0, !0);
  return i.concat(c);
}
function wn(e, t, n, r, o, s, a) {
  const i = Math.pow(e - n, 2) + Math.pow(t - r, 2), c = Math.sqrt(i);
  let u = 1;
  u = c < 200 ? 1 : c > 500 ? 0.4 : -16668e-7 * c + 1.233334;
  let l = o.maxRandomnessOffset || 0;
  l * l * 100 > i && (l = c / 10);
  const d = l / 2, h = 0.2 + 0.2 * wo(o);
  let p = o.bowing * o.maxRandomnessOffset * (r - t) / 200, g = o.bowing * o.maxRandomnessOffset * (e - n) / 200;
  p = M(p, o, u), g = M(g, o, u);
  const m = [], b = () => M(d, o, u), x = () => M(l, o, u), y = o.preserveVertices;
  return s && (a ? m.push({ op: "move", data: [e + (y ? 0 : b()), t + (y ? 0 : b())] }) : m.push({ op: "move", data: [e + (y ? 0 : M(l, o, u)), t + (y ? 0 : M(l, o, u))] })), a ? m.push({ op: "bcurveTo", data: [p + e + (n - e) * h + b(), g + t + (r - t) * h + b(), p + e + 2 * (n - e) * h + b(), g + t + 2 * (r - t) * h + b(), n + (y ? 0 : b()), r + (y ? 0 : b())] }) : m.push({ op: "bcurveTo", data: [p + e + (n - e) * h + x(), g + t + (r - t) * h + x(), p + e + 2 * (n - e) * h + x(), g + t + 2 * (r - t) * h + x(), n + (y ? 0 : x()), r + (y ? 0 : x())] }), m;
}
function Ct(e, t, n) {
  if (!e.length)
    return [];
  const r = [];
  r.push([e[0][0] + M(t, n), e[0][1] + M(t, n)]), r.push([e[0][0] + M(t, n), e[0][1] + M(t, n)]);
  for (let o = 1; o < e.length; o++)
    r.push([e[o][0] + M(t, n), e[o][1] + M(t, n)]), o === e.length - 1 && r.push([e[o][0] + M(t, n), e[o][1] + M(t, n)]);
  return Nt(r, null, n);
}
function Nt(e, t, n) {
  const r = e.length, o = [];
  if (r > 3) {
    const s = [], a = 1 - n.curveTightness;
    o.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let i = 1; i + 2 < r; i++) {
      const c = e[i];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (a * e[i + 1][0] - a * e[i - 1][0]) / 6, c[1] + (a * e[i + 1][1] - a * e[i - 1][1]) / 6], s[2] = [e[i + 1][0] + (a * e[i][0] - a * e[i + 2][0]) / 6, e[i + 1][1] + (a * e[i][1] - a * e[i + 2][1]) / 6], s[3] = [e[i + 1][0], e[i + 1][1]], o.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
    if (t && t.length === 2) {
      const i = n.maxRandomnessOffset;
      o.push({ op: "lineTo", data: [t[0] + M(i, n), t[1] + M(i, n)] });
    }
  } else
    r === 3 ? (o.push({ op: "move", data: [e[1][0], e[1][1]] }), o.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : r === 2 && o.push(...wn(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
  return o;
}
function Er(e, t, n, r, o, s, a, i) {
  const c = [], u = [];
  if (i.roughness === 0) {
    e /= 4, u.push([t + r * Math.cos(-e), n + o * Math.sin(-e)]);
    for (let l = 0; l <= 2 * Math.PI; l += e) {
      const d = [t + r * Math.cos(l), n + o * Math.sin(l)];
      c.push(d), u.push(d);
    }
    u.push([t + r * Math.cos(0), n + o * Math.sin(0)]), u.push([t + r * Math.cos(e), n + o * Math.sin(e)]);
  } else {
    const l = M(0.5, i) - Math.PI / 2;
    u.push([M(s, i) + t + 0.9 * r * Math.cos(l - e), M(s, i) + n + 0.9 * o * Math.sin(l - e)]);
    const d = 2 * Math.PI + l - 0.01;
    for (let h = l; h < d; h += e) {
      const p = [M(s, i) + t + r * Math.cos(h), M(s, i) + n + o * Math.sin(h)];
      c.push(p), u.push(p);
    }
    u.push([M(s, i) + t + r * Math.cos(l + 2 * Math.PI + 0.5 * a), M(s, i) + n + o * Math.sin(l + 2 * Math.PI + 0.5 * a)]), u.push([M(s, i) + t + 0.98 * r * Math.cos(l + a), M(s, i) + n + 0.98 * o * Math.sin(l + a)]), u.push([M(s, i) + t + 0.9 * r * Math.cos(l + 0.5 * a), M(s, i) + n + 0.9 * o * Math.sin(l + 0.5 * a)]);
  }
  return [u, c];
}
function $r(e, t, n, r, o, s, a, i, c) {
  const u = s + M(0.1, c), l = [];
  l.push([M(i, c) + t + 0.9 * r * Math.cos(u - e), M(i, c) + n + 0.9 * o * Math.sin(u - e)]);
  for (let d = u; d <= a; d += e)
    l.push([M(i, c) + t + r * Math.cos(d), M(i, c) + n + o * Math.sin(d)]);
  return l.push([t + r * Math.cos(a), n + o * Math.sin(a)]), l.push([t + r * Math.cos(a), n + o * Math.sin(a)]), Nt(l, null, c);
}
function ga(e, t, n, r, o, s, a, i) {
  const c = [], u = [i.maxRandomnessOffset || 1, (i.maxRandomnessOffset || 1) + 0.3];
  let l = [0, 0];
  const d = i.disableMultiStroke ? 1 : 2, h = i.preserveVertices;
  for (let p = 0; p < d; p++)
    p === 0 ? c.push({ op: "move", data: [a[0], a[1]] }) : c.push({ op: "move", data: [a[0] + (h ? 0 : M(u[0], i)), a[1] + (h ? 0 : M(u[0], i))] }), l = h ? [o, s] : [o + M(u[p], i), s + M(u[p], i)], c.push({ op: "bcurveTo", data: [e + M(u[p], i), t + M(u[p], i), n + M(u[p], i), r + M(u[p], i), l[0], l[1]] });
  return c;
}
function ct(e) {
  return [...e];
}
function Pr(e, t = 0) {
  const n = e.length;
  if (n < 3)
    throw new Error("A curve must have at least three points.");
  const r = [];
  if (n === 3)
    r.push(ct(e[0]), ct(e[1]), ct(e[2]), ct(e[2]));
  else {
    const o = [];
    o.push(e[0], e[0]);
    for (let i = 1; i < e.length; i++)
      o.push(e[i]), i === e.length - 1 && o.push(e[i]);
    const s = [], a = 1 - t;
    r.push(ct(o[0]));
    for (let i = 1; i + 2 < o.length; i++) {
      const c = o[i];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (a * o[i + 1][0] - a * o[i - 1][0]) / 6, c[1] + (a * o[i + 1][1] - a * o[i - 1][1]) / 6], s[2] = [o[i + 1][0] + (a * o[i][0] - a * o[i + 2][0]) / 6, o[i + 1][1] + (a * o[i][1] - a * o[i + 2][1]) / 6], s[3] = [o[i + 1][0], o[i + 1][1]], r.push(s[1], s[2], s[3]);
    }
  }
  return r;
}
function Ot(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function ma(e, t, n) {
  const r = Ot(t, n);
  if (r === 0)
    return Ot(e, t);
  let o = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
  return o = Math.max(0, Math.min(1, o)), Ot(e, _e(t, n, o));
}
function _e(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function xn(e, t, n, r) {
  const o = r || [];
  if (function(i, c) {
    const u = i[c + 0], l = i[c + 1], d = i[c + 2], h = i[c + 3];
    let p = 3 * l[0] - 2 * u[0] - h[0];
    p *= p;
    let g = 3 * l[1] - 2 * u[1] - h[1];
    g *= g;
    let m = 3 * d[0] - 2 * h[0] - u[0];
    m *= m;
    let b = 3 * d[1] - 2 * h[1] - u[1];
    return b *= b, p < m && (p = m), g < b && (g = b), p + g;
  }(e, t) < n) {
    const i = e[t + 0];
    o.length ? (s = o[o.length - 1], a = i, Math.sqrt(Ot(s, a)) > 1 && o.push(i)) : o.push(i), o.push(e[t + 3]);
  } else {
    const c = e[t + 0], u = e[t + 1], l = e[t + 2], d = e[t + 3], h = _e(c, u, 0.5), p = _e(u, l, 0.5), g = _e(l, d, 0.5), m = _e(h, p, 0.5), b = _e(p, g, 0.5), x = _e(m, b, 0.5);
    xn([c, h, m, x], 0, n, o), xn([x, b, g, d], 0, n, o);
  }
  var s, a;
  return o;
}
function ya(e, t) {
  return Ft(e, 0, e.length, t);
}
function Ft(e, t, n, r, o) {
  const s = o || [], a = e[t], i = e[n - 1];
  let c = 0, u = 1;
  for (let l = t + 1; l < n - 1; ++l) {
    const d = ma(e[l], a, i);
    d > c && (c = d, u = l);
  }
  return Math.sqrt(c) > r ? (Ft(e, t, u + 1, r, s), Ft(e, u, n, r, s)) : (s.length || s.push(a), s.push(i)), s;
}
function un(e, t = 0.15, n) {
  const r = [], o = (e.length - 1) / 3;
  for (let s = 0; s < o; s++)
    xn(e, 3 * s, t, r);
  return n && n > 0 ? Ft(r, 0, r.length, n) : r;
}
const se = "none";
let Bt = class {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, n, r) {
    return { shape: t, sets: n || [], options: r || this.defaultOptions };
  }
  line(t, n, r, o, s) {
    const a = this._o(s);
    return this._d("line", [vo(t, n, r, o, a)], a);
  }
  rectangle(t, n, r, o, s) {
    const a = this._o(s), i = [], c = da(t, n, r, o, a);
    if (a.fill) {
      const u = [[t, n], [t + r, n], [t + r, n + o], [t, n + o]];
      a.fillStyle === "solid" ? i.push(cn([u], a)) : i.push(Ge([u], a));
    }
    return a.stroke !== se && i.push(c), this._d("rectangle", i, a);
  }
  ellipse(t, n, r, o, s) {
    const a = this._o(s), i = [], c = bo(r, o, a), u = bn(t, n, a, c);
    if (a.fill)
      if (a.fillStyle === "solid") {
        const l = bn(t, n, a, c).opset;
        l.type = "fillPath", i.push(l);
      } else
        i.push(Ge([u.estimatedPoints], a));
    return a.stroke !== se && i.push(u.opset), this._d("ellipse", i, a);
  }
  circle(t, n, r, o) {
    const s = this.ellipse(t, n, r, r, o);
    return s.shape = "circle", s;
  }
  linearPath(t, n) {
    const r = this._o(n);
    return this._d("linearPath", [Mt(t, !1, r)], r);
  }
  arc(t, n, r, o, s, a, i = !1, c) {
    const u = this._o(c), l = [], d = Sr(t, n, r, o, s, a, i, !0, u);
    if (i && u.fill)
      if (u.fillStyle === "solid") {
        const h = Object.assign({}, u);
        h.disableMultiStroke = !0;
        const p = Sr(t, n, r, o, s, a, !0, !1, h);
        p.type = "fillPath", l.push(p);
      } else
        l.push(function(h, p, g, m, b, x, y) {
          const w = h, E = p;
          let P = Math.abs(g / 2), S = Math.abs(m / 2);
          P += M(0.01 * P, y), S += M(0.01 * S, y);
          let $ = b, L = x;
          for (; $ < 0; )
            $ += 2 * Math.PI, L += 2 * Math.PI;
          L - $ > 2 * Math.PI && ($ = 0, L = 2 * Math.PI);
          const D = (L - $) / y.curveStepCount, U = [];
          for (let te = $; te <= L; te += D)
            U.push([w + P * Math.cos(te), E + S * Math.sin(te)]);
          return U.push([w + P * Math.cos(L), E + S * Math.sin(L)]), U.push([w, E]), Ge([U], y);
        }(t, n, r, o, s, a, u));
    return u.stroke !== se && l.push(d), this._d("arc", l, u);
  }
  curve(t, n) {
    const r = this._o(n), o = [], s = xr(t, r);
    if (r.fill && r.fill !== se)
      if (r.fillStyle === "solid") {
        const a = xr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
        o.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
      } else {
        const a = [], i = t;
        if (i.length) {
          const c = typeof i[0][0] == "number" ? [i] : i;
          for (const u of c)
            u.length < 3 ? a.push(...u) : u.length === 3 ? a.push(...un(Pr([u[0], u[0], u[1], u[2]]), 10, (1 + r.roughness) / 2)) : a.push(...un(Pr(u), 10, (1 + r.roughness) / 2));
        }
        a.length && o.push(Ge([a], r));
      }
    return r.stroke !== se && o.push(s), this._d("curve", o, r);
  }
  polygon(t, n) {
    const r = this._o(n), o = [], s = Mt(t, !0, r);
    return r.fill && (r.fillStyle === "solid" ? o.push(cn([t], r)) : o.push(Ge([t], r))), r.stroke !== se && o.push(s), this._d("polygon", o, r);
  }
  path(t, n) {
    const r = this._o(n), o = [];
    if (!t)
      return this._d("path", o, r);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = r.fill && r.fill !== "transparent" && r.fill !== se, a = r.stroke !== se, i = !!(r.simplification && r.simplification < 1), c = function(l, d, h) {
      const p = mo(go(Dn(l))), g = [];
      let m = [], b = [0, 0], x = [];
      const y = () => {
        x.length >= 4 && m.push(...un(x, d)), x = [];
      }, w = () => {
        y(), m.length && (g.push(m), m = []);
      };
      for (const { key: P, data: S } of p)
        switch (P) {
          case "M":
            w(), b = [S[0], S[1]], m.push(b);
            break;
          case "L":
            y(), m.push([S[0], S[1]]);
            break;
          case "C":
            if (!x.length) {
              const $ = m.length ? m[m.length - 1] : b;
              x.push([$[0], $[1]]);
            }
            x.push([S[0], S[1]]), x.push([S[2], S[3]]), x.push([S[4], S[5]]);
            break;
          case "Z":
            y(), m.push([b[0], b[1]]);
        }
      if (w(), !h)
        return g;
      const E = [];
      for (const P of g) {
        const S = ya(P, h);
        S.length && E.push(S);
      }
      return E;
    }(t, 1, i ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), u = Cr(t, r);
    if (s)
      if (r.fillStyle === "solid")
        if (c.length === 1) {
          const l = Cr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
          o.push({ type: "fillPath", ops: this._mergedShape(l.ops) });
        } else
          o.push(cn(c, r));
      else
        o.push(Ge(c, r));
    return a && (i ? c.forEach((l) => {
      o.push(Mt(l, !1, r));
    }) : o.push(u)), this._d("path", o, r);
  }
  opsToPath(t, n) {
    let r = "";
    for (const o of t.ops) {
      const s = typeof n == "number" && n >= 0 ? o.data.map((a) => +a.toFixed(n)) : o.data;
      switch (o.op) {
        case "move":
          r += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          r += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          r += `L${s[0]} ${s[1]} `;
      }
    }
    return r.trim();
  }
  toPaths(t) {
    const n = t.sets || [], r = t.options || this.defaultOptions, o = [];
    for (const s of n) {
      let a = null;
      switch (s.type) {
        case "path":
          a = { d: this.opsToPath(s), stroke: r.stroke, strokeWidth: r.strokeWidth, fill: se };
          break;
        case "fillPath":
          a = { d: this.opsToPath(s), stroke: se, strokeWidth: 0, fill: r.fill || se };
          break;
        case "fillSketch":
          a = this.fillSketch(s, r);
      }
      a && o.push(a);
    }
    return o;
  }
  fillSketch(t, n) {
    let r = n.fillWeight;
    return r < 0 && (r = n.strokeWidth / 2), { d: this.opsToPath(t), stroke: n.fill || se, strokeWidth: r, fill: se };
  }
  _mergedShape(t) {
    return t.filter((n, r) => r === 0 || n.op !== "move");
  }
}, va = class {
  constructor(t, n) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Bt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.ctx, s = t.options.fixedDecimalPlaceDigits;
    for (const a of n)
      switch (a.type) {
        case "path":
          o.save(), o.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, o.lineWidth = r.strokeWidth, r.strokeLineDash && o.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (o.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(o, a, s), o.restore();
          break;
        case "fillPath": {
          o.save(), o.fillStyle = r.fill || "";
          const i = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
          this._drawToContext(o, a, s, i), o.restore();
          break;
        }
        case "fillSketch":
          this.fillSketch(o, a, r);
      }
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = o, this._drawToContext(t, n, r.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, n, r, o = "nonzero") {
    t.beginPath();
    for (const s of n.ops) {
      const a = typeof r == "number" && r >= 0 ? s.data.map((i) => +i.toFixed(r)) : s.data;
      switch (s.op) {
        case "move":
          t.moveTo(a[0], a[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "lineTo":
          t.lineTo(a[0], a[1]);
      }
    }
    n.type === "fillPath" ? t.fill(o) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, n, r, o, s) {
    const a = this.gen.line(t, n, r, o, s);
    return this.draw(a), a;
  }
  rectangle(t, n, r, o, s) {
    const a = this.gen.rectangle(t, n, r, o, s);
    return this.draw(a), a;
  }
  ellipse(t, n, r, o, s) {
    const a = this.gen.ellipse(t, n, r, o, s);
    return this.draw(a), a;
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s), s;
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r), r;
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r), r;
  }
  arc(t, n, r, o, s, a, i = !1, c) {
    const u = this.gen.arc(t, n, r, o, s, a, i, c);
    return this.draw(u), u;
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r), r;
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r), r;
  }
};
const kt = "http://www.w3.org/2000/svg";
let ba = class {
  constructor(t, n) {
    this.svg = t, this.gen = new Bt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.svg.ownerDocument || window.document, s = o.createElementNS(kt, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const i of n) {
      let c = null;
      switch (i.type) {
        case "path":
          c = o.createElementNS(kt, "path"), c.setAttribute("d", this.opsToPath(i, a)), c.setAttribute("stroke", r.stroke), c.setAttribute("stroke-width", r.strokeWidth + ""), c.setAttribute("fill", "none"), r.strokeLineDash && c.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && c.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          c = o.createElementNS(kt, "path"), c.setAttribute("d", this.opsToPath(i, a)), c.setAttribute("stroke", "none"), c.setAttribute("stroke-width", "0"), c.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || c.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          c = this.fillSketch(o, i, r);
      }
      c && s.appendChild(c);
    }
    return s;
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const s = t.createElementNS(kt, "path");
    return s.setAttribute("d", this.opsToPath(n, r.fixedDecimalPlaceDigits)), s.setAttribute("stroke", r.fill || ""), s.setAttribute("stroke-width", o + ""), s.setAttribute("fill", "none"), r.fillLineDash && s.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), s;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, n) {
    return this.gen.opsToPath(t, n);
  }
  line(t, n, r, o, s) {
    const a = this.gen.line(t, n, r, o, s);
    return this.draw(a);
  }
  rectangle(t, n, r, o, s) {
    const a = this.gen.rectangle(t, n, r, o, s);
    return this.draw(a);
  }
  ellipse(t, n, r, o, s) {
    const a = this.gen.ellipse(t, n, r, o, s);
    return this.draw(a);
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s);
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r);
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r);
  }
  arc(t, n, r, o, s, a, i = !1, c) {
    const u = this.gen.arc(t, n, r, o, s, a, i, c);
    return this.draw(u);
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r);
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r);
  }
};
var wa = { canvas: (e, t) => new va(e, t), svg: (e, t) => new ba(e, t), generator: (e) => new Bt(e), newSeed: () => Bt.newSeed() }, ee = function() {
  return ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ee.apply(this, arguments);
};
function Le(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function xa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Sa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ca = /* @__PURE__ */ xa(
  function(e) {
    return Sa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), B = "-ms-", ht = "-moz-", A = "-webkit-", xo = "comm", Ht = "rule", Nn = "decl", ka = "@import", So = "@keyframes", Ea = "@layer", $a = Math.abs, Fn = String.fromCharCode, Sn = Object.assign;
function Pa(e, t) {
  return q(e, 0) ^ 45 ? (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3) : 0;
}
function Co(e) {
  return e.trim();
}
function Se(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, n) {
  return e.replace(t, n);
}
function _t(e, t) {
  return e.indexOf(t);
}
function q(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ye(e, t, n) {
  return e.slice(t, n);
}
function be(e) {
  return e.length;
}
function ko(e) {
  return e.length;
}
function lt(e, t) {
  return t.push(e), e;
}
function Ma(e, t) {
  return e.map(t).join("");
}
function Mr(e, t) {
  return e.filter(function(n) {
    return !Se(n, t);
  });
}
var Yt = 1, qe = 1, Eo = 0, ue = 0, G = 0, Qe = "";
function qt(e, t, n, r, o, s, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: Yt, column: qe, length: a, return: "", siblings: i };
}
function ke(e, t) {
  return Sn(qt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ue(e) {
  for (; e.root; )
    e = ke(e.root, { children: [e] });
  lt(e, e.siblings);
}
function Oa() {
  return G;
}
function _a() {
  return G = ue > 0 ? q(Qe, --ue) : 0, qe--, G === 10 && (qe = 1, Yt--), G;
}
function de() {
  return G = ue < Eo ? q(Qe, ue++) : 0, qe++, G === 10 && (qe = 1, Yt++), G;
}
function je() {
  return q(Qe, ue);
}
function Rt() {
  return ue;
}
function Kt(e, t) {
  return Ye(Qe, e, t);
}
function Cn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ra(e) {
  return Yt = qe = 1, Eo = be(Qe = e), ue = 0, [];
}
function Ta(e) {
  return Qe = "", e;
}
function ln(e) {
  return Co(Kt(ue - 1, kn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ja(e) {
  for (; (G = je()) && G < 33; )
    de();
  return Cn(e) > 2 || Cn(G) > 3 ? "" : " ";
}
function Aa(e, t) {
  for (; --t && de() && !(G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97); )
    ;
  return Kt(e, Rt() + (t < 6 && je() == 32 && de() == 32));
}
function kn(e) {
  for (; de(); )
    switch (G) {
      case e:
        return ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kn(G);
        break;
      case 40:
        e === 41 && kn(e);
        break;
      case 92:
        de();
        break;
    }
  return ue;
}
function La(e, t) {
  for (; de() && e + G !== 57; )
    if (e + G === 84 && je() === 47)
      break;
  return "/*" + Kt(t, ue - 1) + "*" + Fn(e === 47 ? e : de());
}
function Ia(e) {
  for (; !Cn(je()); )
    de();
  return Kt(e, ue);
}
function Da(e) {
  return Ta(Tt("", null, null, null, [""], e = Ra(e), 0, [0], e));
}
function Tt(e, t, n, r, o, s, a, i, c) {
  for (var u = 0, l = 0, d = a, h = 0, p = 0, g = 0, m = 1, b = 1, x = 1, y = 0, w = "", E = o, P = s, S = r, $ = w; b; )
    switch (g = y, y = de()) {
      case 40:
        if (g != 108 && q($, d - 1) == 58) {
          _t($ += _(ln(y), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += ln(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += ja(g);
        break;
      case 92:
        $ += Aa(Rt() - 1, 7);
        continue;
      case 47:
        switch (je()) {
          case 42:
          case 47:
            lt(Na(La(de(), Rt()), t, n, c), c);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * m:
        i[u++] = be($) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            b = 0;
          case 59 + l:
            x == -1 && ($ = _($, /\f/g, "")), p > 0 && be($) - d && lt(p > 32 ? _r($ + ";", r, n, d - 1, c) : _r(_($, " ", "") + ";", r, n, d - 2, c), c);
            break;
          case 59:
            $ += ";";
          default:
            if (lt(S = Or($, t, n, u, l, o, i, w, E = [], P = [], d, s), s), y === 123)
              if (l === 0)
                Tt($, t, S, S, E, s, d, i, P);
              else
                switch (h === 99 && q($, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Tt(e, S, S, r && lt(Or(e, S, S, 0, 0, o, i, w, o, E = [], d, P), P), o, P, d, i, r ? E : P);
                    break;
                  default:
                    Tt($, S, S, S, [""], P, 0, i, P);
                }
        }
        u = l = p = 0, m = x = 1, w = $ = "", d = a;
        break;
      case 58:
        d = 1 + be($), p = g;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && _a() == 125)
            continue;
        }
        switch ($ += Fn(y), y * m) {
          case 38:
            x = l > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            i[u++] = (be($) - 1) * x, x = 1;
            break;
          case 64:
            je() === 45 && ($ += ln(de())), h = je(), l = d = be(w = $ += Ia(Rt())), y++;
            break;
          case 45:
            g === 45 && be($) == 2 && (m = 0);
        }
    }
  return s;
}
function Or(e, t, n, r, o, s, a, i, c, u, l, d) {
  for (var h = o - 1, p = o === 0 ? s : [""], g = ko(p), m = 0, b = 0, x = 0; m < r; ++m)
    for (var y = 0, w = Ye(e, h + 1, h = $a(b = a[m])), E = e; y < g; ++y)
      (E = Co(b > 0 ? p[y] + " " + w : _(w, /&\f/g, p[y]))) && (c[x++] = E);
  return qt(e, t, n, o === 0 ? Ht : i, c, u, l, d);
}
function Na(e, t, n, r) {
  return qt(e, t, n, xo, Fn(Oa()), Ye(e, 2, -2), 0, r);
}
function _r(e, t, n, r, o) {
  return qt(e, t, n, Nn, Ye(e, 0, r), Ye(e, r + 1, -1), r, o);
}
function $o(e, t, n) {
  switch (Pa(e, t)) {
    case 5103:
      return A + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return A + e + e;
    case 4789:
      return ht + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e + ht + e + B + e + e;
    case 5936:
      switch (q(e, t + 11)) {
        case 114:
          return A + e + B + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return A + e + B + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return A + e + B + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return A + e + B + e + e;
    case 6165:
      return A + e + B + "flex-" + e + e;
    case 5187:
      return A + e + _(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + B + "flex-$1$2") + e;
    case 5443:
      return A + e + B + "flex-item-" + _(e, /flex-|-self/g, "") + (Se(e, /flex-|baseline/) ? "" : B + "grid-row-" + _(e, /flex-|-self/g, "")) + e;
    case 4675:
      return A + e + B + "flex-line-pack" + _(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return A + e + B + _(e, "shrink", "negative") + e;
    case 5292:
      return A + e + B + _(e, "basis", "preferred-size") + e;
    case 6060:
      return A + "box-" + _(e, "-grow", "") + A + e + B + _(e, "grow", "positive") + e;
    case 4554:
      return A + _(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
    case 6187:
      return _(_(_(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return _(_(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + B + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
    case 4200:
      if (!Se(e, /flex-|baseline/))
        return B + "grid-column-align" + Ye(e, t) + e;
      break;
    case 2592:
    case 3360:
      return B + _(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Se(r.props, /grid-\w+-end/);
      }) ? ~_t(e + (n = n[t].value), "span") ? e : B + _(e, "-start", "") + e + B + "grid-row-span:" + (~_t(n, "span") ? Se(n, /\d+/) : +Se(n, /\d+/) - +Se(e, /\d+/)) + ";" : B + _(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Se(r.props, /grid-\w+-start/);
      }) ? e : B + _(_(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _(e, /(.+)-inline(.+)/, A + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (be(e) - 1 - t > 6)
        switch (q(e, t + 1)) {
          case 109:
            if (q(e, t + 4) !== 45)
              break;
          case 102:
            return _(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + ht + (q(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~_t(e, "stretch") ? $o(_(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return _(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, a, i, c, u) {
        return B + o + ":" + s + u + (a ? B + o + "-span:" + (i ? c : +c - +s) + u : "") + e;
      });
    case 4949:
      if (q(e, t + 6) === 121)
        return _(e, ":", ":" + A) + e;
      break;
    case 6444:
      switch (q(e, q(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return _(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + A + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + B + "$2box$3") + e;
        case 100:
          return _(e, ":", ":" + B) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return _(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Wt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Fa(e, t, n, r) {
  switch (e.type) {
    case Ea:
      if (e.children.length)
        break;
    case ka:
    case Nn:
      return e.return = e.return || e.value;
    case xo:
      return "";
    case So:
      return e.return = e.value + "{" + Wt(e.children, r) + "}";
    case Ht:
      if (!be(e.value = e.props.join(",")))
        return "";
  }
  return be(n = Wt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ba(e) {
  var t = ko(e);
  return function(n, r, o, s) {
    for (var a = "", i = 0; i < t; i++)
      a += e[i](n, r, o, s) || "";
    return a;
  };
}
function Wa(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function za(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Nn:
        e.return = $o(e.value, e.length, n);
        return;
      case So:
        return Wt([ke(e, { value: _(e.value, "@", "@" + A) })], r);
      case Ht:
        if (e.length)
          return Ma(n = e.props, function(o) {
            switch (Se(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ue(ke(e, { props: [_(o, /:(read-\w+)/, ":" + ht + "$1")] })), Ue(ke(e, { props: [o] })), Sn(e, { props: Mr(n, r) });
                break;
              case "::placeholder":
                Ue(ke(e, { props: [_(o, /:(plac\w+)/, ":" + A + "input-$1")] })), Ue(ke(e, { props: [_(o, /:(plac\w+)/, ":" + ht + "$1")] })), Ue(ke(e, { props: [_(o, /:(plac\w+)/, B + "input-$1")] })), Ue(ke(e, { props: [o] })), Sn(e, { props: Mr(n, r) });
                break;
            }
            return "";
          });
    }
}
var Va = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ie = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Bn = typeof window < "u" && "HTMLElement" in window, Ga = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Rr = /invalid hook call/i, Et = /* @__PURE__ */ new Set(), Ua = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(a) {
        for (var i = [], c = 1; c < arguments.length; c++)
          i[c - 1] = arguments[c];
        Rr.test(a) ? (s = !1, Et.delete(r)) : o.apply(void 0, Le([a], i, !1));
      }, pe(), s && !Et.has(r) && (console.warn(r), Et.add(r));
    } catch (a) {
      Rr.test(a.message) && Et.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Zt = Object.freeze([]), Ke = Object.freeze({});
function Ha(e, t, n) {
  return n === void 0 && (n = Ke), e.theme !== n.theme && e.theme || t || n.theme;
}
var En = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ya = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qa = /(^-|-$)/g;
function Tr(e) {
  return e.replace(Ya, "-").replace(qa, "");
}
var Ka = /(a)(d)/gi, jr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $n(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = jr(t % 52) + n;
  return (jr(t % 52) + n).replace(Ka, "$1-$2");
}
var fn, Re = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Po = function(e) {
  return Re(5381, e);
};
function Mo(e) {
  return $n(Po(e) >>> 0);
}
function Oo(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function hn(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _o = typeof Symbol == "function" && Symbol.for, Ro = _o ? Symbol.for("react.memo") : 60115, Za = _o ? Symbol.for("react.forward_ref") : 60112, Xa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ja = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, To = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qa = ((fn = {})[Za] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, fn[Ro] = To, fn);
function Ar(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ro ? To : "$$typeof" in e ? Qa[e.$$typeof] : Xa;
  var t;
}
var ei = Object.defineProperty, ti = Object.getOwnPropertyNames, Lr = Object.getOwnPropertySymbols, ni = Object.getOwnPropertyDescriptor, ri = Object.getPrototypeOf, Ir = Object.prototype;
function jo(e, t, n) {
  if (typeof t != "string") {
    if (Ir) {
      var r = ri(t);
      r && r !== Ir && jo(e, r, n);
    }
    var o = ti(t);
    Lr && (o = o.concat(Lr(t)));
    for (var s = Ar(e), a = Ar(t), i = 0; i < o.length; ++i) {
      var c = o[i];
      if (!(c in Ja || n && n[c] || a && c in a || s && c in s)) {
        var u = ni(t, c);
        try {
          ei(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ze(e) {
  return typeof e == "function";
}
function Wn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Te(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Pn(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function Xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Mn(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Xe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Mn(e[r], t[r]);
  else if (Xe(t))
    for (var r in t)
      e[r] = Mn(e[r], t[r]);
  return e;
}
function zn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var oi = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function si() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function et(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(si.apply(void 0, Le([oi[e]], t, !1)).trim());
}
var ai = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++)
      n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, s = o; t >= s; )
        if ((s <<= 1) < 0)
          throw et(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var a = o; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var i = this.indexOfGroup(t + 1), c = (a = 0, n.length); a < c; a++)
      this.tag.insertRule(i, n[a]) && (this.groupSizes[t]++, i++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var s = r; s < o; s++)
        this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, a = o; a < s; a++)
      n += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), jt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), At = 1, $t = function(e) {
  if (jt.has(e))
    return jt.get(e);
  for (; zt.has(At); )
    At++;
  var t = At++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw et(16, "".concat(t));
  return jt.set(e, t), zt.set(t, e), t;
}, ii = function(e, t) {
  At = t + 1, jt.set(e, t), zt.set(t, e);
}, ci = "style[".concat(Ie, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), ui = new RegExp("^".concat(Ie, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), li = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, a = o.length; s < a; s++)
    (r = o[s]) && e.registerName(t, r);
}, fi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], s = 0, a = r.length; s < a; s++) {
    var i = r[s].trim();
    if (i) {
      var c = i.match(ui);
      if (c) {
        var u = 0 | parseInt(c[1], 10), l = c[2];
        u !== 0 && (ii(l, u), li(e, l, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(i);
    }
  }
};
function hi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ao = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(i) {
    var c = Array.from(i.querySelectorAll("style[".concat(Ie, "]")));
    return c[c.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Ie, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = hi();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, s), r;
}, pi = function() {
  function e(t) {
    this.element = Ao(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw et(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), di = function() {
  function e(t) {
    this.element = Ao(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), gi = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Dr = Bn, mi = { isServer: !Bn, useCSSOMInjection: !Ga }, Lo = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ke), n === void 0 && (n = {});
    var o = this;
    this.options = ee(ee({}, mi), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Bn && Dr && (Dr = !1, function(s) {
      for (var a = document.querySelectorAll(ci), i = 0, c = a.length; i < c; i++) {
        var u = a[i];
        u && u.getAttribute(Ie) !== "active" && (fi(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), zn(this, function() {
      return function(s) {
        for (var a = s.getTag(), i = a.length, c = "", u = function(d) {
          var h = function(x) {
            return zt.get(x);
          }(d);
          if (h === void 0)
            return "continue";
          var p = s.names.get(h), g = a.getGroup(d);
          if (p === void 0 || g.length === 0)
            return "continue";
          var m = "".concat(Ie, ".g").concat(d, '[id="').concat(h, '"]'), b = "";
          p !== void 0 && p.forEach(function(x) {
            x.length > 0 && (b += "".concat(x, ","));
          }), c += "".concat(g).concat(m, '{content:"').concat(b, '"}').concat(`/*!sc*/
`);
        }, l = 0; l < i; l++)
          u(l);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return $t(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ee(ee({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new gi(o) : r ? new pi(o) : new di(o);
    }(this.options), new ai(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if ($t(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules($t(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup($t(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), yi = /&/g, vi = /^\s*\/\/.*$/gm;
function Io(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Io(n.children, t)), n;
  });
}
function bi(e) {
  var t, n, r, o = e === void 0 ? Ke : e, s = o.options, a = s === void 0 ? Ke : s, i = o.plugins, c = i === void 0 ? Zt : i, u = function(h, p, g) {
    return g === n || g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, l = c.slice();
  l.push(function(h) {
    h.type === Ht && h.value.includes("&") && (h.props[0] = h.props[0].replace(yi, n).replace(r, u));
  }), a.prefix && l.push(za), l.push(Fa);
  var d = function(h, p, g, m) {
    p === void 0 && (p = ""), g === void 0 && (g = ""), m === void 0 && (m = "&"), t = m, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var b = h.replace(vi, ""), x = Da(g || p ? "".concat(g, " ").concat(p, " { ").concat(b, " }") : b);
    a.namespace && (x = Io(x, a.namespace));
    var y = [];
    return Wt(x, Ba(l.concat(Wa(function(w) {
      return y.push(w);
    })))), y;
  };
  return d.hash = c.length ? c.reduce(function(h, p) {
    return p.name || et(15), Re(h, p.name);
  }, 5381).toString() : "", d;
}
var wi = new Lo(), On = bi(), Do = K.createContext({ shouldForwardProp: void 0, styleSheet: wi, stylis: On });
Do.Consumer;
K.createContext(void 0);
function Nr() {
  return uo(Do);
}
var _n = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = On);
      var a = r.name + s.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, s(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, zn(this, function() {
      throw et(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = On), this.name + t.hash;
  }, e;
}(), xi = function(e) {
  return e >= "A" && e <= "Z";
};
function Fr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    xi(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var No = function(e) {
  return e == null || e === !1 || e === "";
}, Fo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !No(s) && (Array.isArray(s) && s.isCss || Ze(s) ? r.push("".concat(Fr(o), ":"), s, ";") : Xe(s) ? r.push.apply(r, Le(Le(["".concat(o, " {")], Fo(s), !1), ["}"], !1)) : r.push("".concat(Fr(o), ": ").concat((t = o, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Va || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Ae(e, t, n, r) {
  if (No(e))
    return [];
  if (Wn(e))
    return [".".concat(e.styledComponentId)];
  if (Ze(e)) {
    if (!Ze(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof _n || Xe(o) || o === null || console.error("".concat(Oo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ae(o, t, n, r);
  }
  var s;
  return e instanceof _n ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Xe(e) ? Fo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Zt, e.map(function(a) {
    return Ae(a, t, n, r);
  })) : [e.toString()];
}
function Si(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ze(n) && !Wn(n))
      return !1;
  }
  return !0;
}
var Ci = Po("6.1.1"), ki = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Si(t), this.componentId = n, this.baseHash = Re(Ci, n), this.baseStyle = r, Lo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = Te(o, this.staticRulesId);
      else {
        var s = Pn(Ae(this.rules, t, n, r)), a = $n(Re(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var i = r(s, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, i);
        }
        o = Te(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = Re(this.baseHash, r.hash), u = "", l = 0; l < this.rules.length; l++) {
        var d = this.rules[l];
        if (typeof d == "string")
          u += d, process.env.NODE_ENV !== "production" && (c = Re(c, d));
        else if (d) {
          var h = Pn(Ae(d, t, n, r));
          c = Re(c, h + l), u += h;
        }
      }
      if (u) {
        var p = $n(c >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(u, ".".concat(p), void 0, this.componentId)), o = Te(o, p);
      }
    }
    return o;
  }, e;
}(), Bo = K.createContext(void 0);
Bo.Consumer;
var pn = {}, Br = /* @__PURE__ */ new Set();
function Ei(e, t, n) {
  var r = Wn(e), o = e, s = !hn(e), a = t.attrs, i = a === void 0 ? Zt : a, c = t.componentId, u = c === void 0 ? function(E, P) {
    var S = typeof E != "string" ? "sc" : Tr(E);
    pn[S] = (pn[S] || 0) + 1;
    var $ = "".concat(S, "-").concat(Mo("6.1.1" + S + pn[S]));
    return P ? "".concat(P, "-").concat($) : $;
  }(t.displayName, t.parentComponentId) : c, l = t.displayName, d = l === void 0 ? function(E) {
    return hn(E) ? "styled.".concat(E) : "Styled(".concat(Oo(E), ")");
  }(e) : l, h = t.displayName && t.componentId ? "".concat(Tr(t.displayName), "-").concat(t.componentId) : t.componentId || u, p = r && o.attrs ? o.attrs.concat(i).filter(Boolean) : i, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      g = function(E, P) {
        return m(E, P) && b(E, P);
      };
    } else
      g = m;
  }
  var x = new ki(n, h, r ? o.componentStyle : void 0);
  function y(E, P) {
    return function(S, $, L) {
      var D = S.attrs, U = S.componentStyle, te = S.defaultProps, Pe = S.foldedComponentIds, F = S.styledComponentId, I = S.target, Y = K.useContext(Bo), le = Nr(), ne = S.shouldForwardProp || le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pr(F);
      var re = function(We, Me, Ce) {
        for (var me, ae = ee(ee({}, Me), { className: void 0, theme: Ce }), Oe = 0; Oe < We.length; Oe += 1) {
          var we = Ze(me = We[Oe]) ? me(ae) : me;
          for (var ye in we)
            ae[ye] = ye === "className" ? Te(ae[ye], we[ye]) : ye === "style" ? ee(ee({}, ae[ye]), we[ye]) : we[ye];
        }
        return Me.className && (ae.className = Te(ae.className, Me.className)), ae;
      }(D, $, Ha($, Y, te) || Ke), ge = re.as || I, fe = {};
      for (var Z in re)
        re[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" || (Z === "forwardedAs" ? fe.as = re.forwardedAs : ne && !ne(Z, ge) || (fe[Z] = re[Z], ne || process.env.NODE_ENV !== "development" || Ca(Z) || Br.has(Z) || !En.has(ge) || (Br.add(Z), console.warn('styled-components: it looks like an unknown prop "'.concat(Z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Fe = function(We, Me) {
        var Ce = Nr(), me = We.generateAndInjectStyles(Me, Ce.styleSheet, Ce.stylis);
        return process.env.NODE_ENV !== "production" && pr(me), me;
      }(U, re);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(Fe);
      var Be = Te(Pe, F);
      return Fe && (Be += " " + Fe), re.className && (Be += " " + re.className), fe[hn(ge) && !En.has(ge) ? "class" : "className"] = Be, fe.ref = L, dt(ge, fe);
    }(w, E, P);
  }
  y.displayName = d;
  var w = K.forwardRef(y);
  return w.attrs = p, w.componentStyle = x, w.displayName = d, w.shouldForwardProp = g, w.foldedComponentIds = r ? Te(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = h, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(P) {
      for (var S = [], $ = 1; $ < arguments.length; $++)
        S[$ - 1] = arguments[$];
      for (var L = 0, D = S; L < D.length; L++)
        Mn(P, D[L], !0);
      return P;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Ua(d, h), w.warnTooManyClasses = /* @__PURE__ */ function(E, P) {
    var S = {}, $ = !1;
    return function(L) {
      if (!$ && (S[L] = !0, Object.keys(S).length >= 200)) {
        var D = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(D, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, S = {};
      }
    };
  }(d, h)), zn(w, function() {
    return ".".concat(w.styledComponentId);
  }), s && jo(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Wr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var zr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Wo(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (Ze(e) || Xe(e)) {
    var r = e;
    return zr(Ae(Wr(Zt, Le([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? Ae(o) : zr(Ae(Wr(o, t)));
}
function Rn(e, t, n) {
  if (n === void 0 && (n = Ke), !t)
    throw et(1, t);
  var r = function(o) {
    for (var s = [], a = 1; a < arguments.length; a++)
      s[a - 1] = arguments[a];
    return e(t, n, Wo.apply(void 0, Le([o], s, !1)));
  };
  return r.attrs = function(o) {
    return Rn(e, t, ee(ee({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Rn(e, t, ee(ee({}, n), o));
  }, r;
}
var zo = function(e) {
  return Rn(Ei, e);
}, H = zo;
En.forEach(function(e) {
  H[e] = zo(e);
});
function $i(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Pn(Wo.apply(void 0, Le([e], t, !1))), o = Mo(r);
  return new _n(o, r);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Pt = "__sc-".concat(Ie, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Pt] || (window[Pt] = 0), window[Pt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Pt] += 1);
const Vn = Je(
  ({ children: e, ...t }, n) => {
    const r = pe(0);
    return /* @__PURE__ */ k.jsx(Ai, { ...t, ref: n, children: /* @__PURE__ */ k.jsx(gt, { cornerRadius: 12, cornerSmoothing: 1, asChild: !0, children: /* @__PURE__ */ k.jsx(Li, { children: /* @__PURE__ */ k.jsx("span", { children: e }) }) }, r.current++) });
  }
), Gn = ({ size: e = 540, children: t, ...n }) => /* @__PURE__ */ k.jsxs(Ri, { $size: e, $gap: 32, ...n, children: [
  /* @__PURE__ */ k.jsx(Pi, { width: e, gap: 32 }),
  /* @__PURE__ */ k.jsx(Ti, { children: t })
] }), Pi = ({ width: e, height: t = e, gap: n, ...r }) => {
  const o = pe(null);
  return co(() => {
    const s = o.current;
    if (!s)
      return;
    for (; s.firstChild; )
      s.firstChild.remove();
    const a = wa.svg(s);
    s.append(
      a.rectangle(0, 0, e, t, {
        fill: "rgba(231, 228, 225, 0.65)",
        fillStyle: "zigzag",
        stroke: "none",
        hachureGap: 28,
        fillWeight: 20
      })
    ), s.append(
      a.rectangle(0, 0, e, t, {
        fill: "rgba(223, 100, 54, 0.75)",
        fillWeight: 1,
        fillStyle: "cross-hatch",
        hachureAngle: 0,
        roughness: 2,
        strokeWidth: 3,
        hachureGap: 60
      })
    );
  }, []), /* @__PURE__ */ k.jsx(
    ji,
    {
      width: e,
      height: t,
      viewBox: `${-n} ${-n} ${e + 2 * n} ${t + 2 * n}`,
      ref: o,
      ...r
    }
  );
}, Mi = () => /* @__PURE__ */ k.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ k.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 3C12.6863 3 10 5.68629 10 9C10 12.3137 12.6863 15 16 15C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ k.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 16.9297C11.1435 16.9297 9.36301 17.6672 8.05025 18.9799C6.7375 20.2927 6 22.0732 6 23.9297C6 24.7253 6.31607 25.4884 6.87868 26.051C7.44129 26.6136 8.20435 26.9297 9 26.9297H23C23.7957 26.9297 24.5587 26.6136 25.1213 26.051C25.6839 25.4884 26 24.7253 26 23.9297C26 22.0732 25.2625 20.2927 23.9497 18.9799C22.637 17.6672 20.8565 16.9297 19 16.9297H13Z",
      fill: "currentColor"
    }
  )
] }), Oi = () => /* @__PURE__ */ k.jsxs("svg", { width: "64", height: "58", viewBox: "0 0 64 58", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ k.jsx(
    "path",
    {
      d: "M63.2298 12.112C63.2038 7.21395 59.3358 2.32095 54.2948 0.690951L54.3158 0.58095C51.0998 -0.33805 47.5048 0.0979502 44.0278 0.51895C41.8148 0.78695 39.7268 1.03995 37.7358 0.967951C34.4518 0.848951 31.9618 0.82795 29.4148 0.90095C27.2718 0.96495 25.0948 0.848951 22.9878 0.738951C20.8798 0.628951 18.6988 0.51495 16.5428 0.57395C13.8708 0.64795 10.0408 0.948952 7.64481 2.70695C4.50181 5.01295 3.08081 9.66695 2.04281 13.066C0.999805 16.483 0.730805 20.228 0.545805 23.77C0.434805 25.887 0.441806 27.974 0.564806 29.976C0.602806 30.591 0.587806 31.265 0.572806 31.978C0.540806 33.416 0.508806 34.9019 0.902806 36.1629C1.83681 39.1509 4.52781 41.7239 7.92381 42.8779C8.87381 43.1999 10.0678 43.477 11.1988 43.636C12.3808 43.803 13.4868 43.598 14.5548 43.401C15.3398 43.256 16.0618 43.113 16.8428 43.122C17.0198 43.122 17.2538 43.1179 17.5158 43.1119C18.3118 43.0929 19.6448 43.066 20.1098 43.234C20.1718 43.256 20.2298 43.274 20.2848 43.288C20.3188 43.443 20.3648 43.615 20.4188 43.803C20.5368 44.21 20.5588 44.718 20.5788 45.209C20.5868 45.392 20.5948 45.5709 20.6058 45.7419C20.6308 46.0929 20.6438 46.4449 20.6568 46.7969C20.6818 47.4659 20.7078 48.158 20.8108 48.845C20.9378 49.687 20.8878 50.5499 20.8348 51.4629C20.7738 52.5139 20.7108 53.601 20.9408 54.662C21.3378 56.487 22.1398 57.5689 23.3238 57.8759C23.5548 57.9359 23.7938 57.9649 24.0398 57.9649C26.9148 57.9649 30.7828 54.047 34.2448 50.123C34.5028 49.831 34.7208 49.583 34.8918 49.396C35.2668 48.985 35.6318 48.542 35.9998 48.094C36.9038 46.994 37.8378 45.8559 39.0078 45.1549C39.7578 44.7059 40.3008 44.8379 41.2038 45.0589L41.6828 45.1729C43.2968 45.5349 44.9498 45.412 46.5608 45.292L47.5678 45.221C51.1548 44.975 54.8638 44.72 57.7348 42.144C59.8298 40.263 61.1578 37.698 61.6808 34.52C62.0808 32.089 62.2718 29.571 62.4558 27.136C62.5528 25.856 62.6488 24.5789 62.7748 23.3149C62.8578 22.4769 62.9648 21.6419 63.0718 20.8079C63.4368 17.9839 63.8108 15.068 63.2298 12.112ZM28.4778 50.025C27.8158 50.812 26.9218 51.875 26.0658 52.57C26.2438 51.269 25.9388 49.565 25.6948 48.203C25.6088 47.72 25.5328 47.3019 25.5018 47.0039C25.4688 46.6859 25.4438 46.302 25.4158 45.882C25.3098 44.279 25.1778 42.2989 24.5088 41.1549L24.5648 41.0919C24.0578 40.4839 23.2388 39.797 22.3608 39.386L22.3888 39.2879C21.9338 39.1359 21.5648 38.931 21.1738 38.714C20.4348 38.303 19.6648 37.8799 18.4288 37.9119C17.4158 37.9389 16.4368 38.132 15.4908 38.317C14.3068 38.549 13.1878 38.769 12.0108 38.691C9.46781 38.521 7.83981 38.117 7.17281 37.492C6.08781 36.474 5.96981 34.064 5.89081 32.47L5.87281 32.104C5.57081 26.426 5.62081 21.8529 6.02881 17.7099C6.50081 12.9179 7.16881 9.03995 11.0288 6.36695C12.0878 5.63295 14.2288 5.21295 15.7698 5.13295C20.5688 4.88195 25.5408 5.06695 30.2238 5.27895C31.2298 5.32395 32.2538 5.46495 33.2448 5.60095C34.1888 5.72995 35.1648 5.86395 36.1418 5.91895C37.6118 5.99995 38.7878 5.71995 40.0378 5.42095C40.5618 5.29595 41.0948 5.16795 41.6628 5.06695C48.3258 3.88595 56.6578 3.68995 58.5068 9.46495C59.4318 12.357 59.7468 16.834 59.2588 19.804C59.0998 20.282 58.8898 22.384 58.5598 25.775C58.3028 28.421 57.9598 31.952 57.7448 32.962H57.6648L57.5908 33.374C56.8278 37.647 54.7418 39.781 50.8268 40.292C50.4098 40.347 49.9738 40.4099 49.5288 40.4749C47.6748 40.7449 45.5728 41.0519 43.8528 40.8209C43.4688 40.7699 43.1198 40.703 42.7858 40.639C41.7558 40.442 40.7828 40.258 39.4338 40.638C36.3718 41.503 33.7468 43.2409 32.0418 45.5329L31.5138 46.248C30.7548 47.279 30.0378 48.253 29.1848 49.203C28.9758 49.434 28.7378 49.716 28.4778 50.025Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ k.jsx(
    "path",
    {
      d: "M33.096 34.1518C33.804 34.1808 34.536 34.2088 35.267 34.1708C35.691 34.1478 36.111 34.1178 36.531 34.0888C37.465 34.0228 38.348 33.9578 39.257 33.9738C39.712 33.9798 40.166 34.0178 40.621 34.0558C41.049 34.0908 41.477 34.1258 41.905 34.1378C42.092 34.1428 42.303 34.1668 42.526 34.1908C43.289 34.2738 44.24 34.3778 44.914 33.8788C45.6 33.3698 45.837 32.4998 45.622 31.2928C45.532 30.7868 45.377 30.2858 45.253 29.8828L45.145 29.5228C44.789 28.2918 44.138 26.5278 42.612 25.4248C40.847 24.1498 38.954 23.7168 36.877 23.4508L36.879 23.4218L36.707 23.4068C36.497 23.3868 36.288 23.3648 36.078 23.3418C35.36 23.2638 34.617 23.1828 33.851 23.2378C33.15 23.2888 32.46 23.4108 31.792 23.5288C31.33 23.6098 30.868 23.6918 30.404 23.7498C29.688 23.8388 28.94 23.8098 28.149 23.7768C26.811 23.7228 25.434 23.6688 24.151 24.2138C22.797 24.7888 20.949 26.0768 20.191 27.3328C19.879 27.8508 19.719 28.4368 19.564 29.0048C19.472 29.3438 19.381 29.6818 19.254 29.9918C19.204 30.1148 19.15 30.2348 19.095 30.3558C18.97 30.6328 18.841 30.9188 18.755 31.2388C18.715 31.3848 18.655 31.5358 18.595 31.6918C18.408 32.1728 18.177 32.7718 18.378 33.3818C18.681 34.2978 19.302 34.2798 19.714 34.2648C19.814 34.2628 19.92 34.2578 20.037 34.2668C21.444 34.3828 22.892 34.5028 24.444 34.5028C24.669 34.5028 24.897 34.5008 25.127 34.4948C26.256 34.4678 27.394 34.3828 28.494 34.2998C29.377 34.2338 30.261 34.1668 31.145 34.1298C31.79 34.0998 32.454 34.1268 33.096 34.1518Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ k.jsx(
    "path",
    {
      d: "M30.5347 22.3168C30.7937 22.3698 31.0497 22.3968 31.3027 22.3968C32.3797 22.3968 33.3897 21.9178 34.2057 21.0078C35.5907 19.4608 36.1867 16.9078 35.5917 15.0688C35.3257 14.2458 34.5477 12.1938 33.0707 10.9148C31.8447 9.85176 30.1137 9.92076 28.9207 10.0618C27.1447 10.2738 25.8307 11.0218 25.1217 12.2258C24.5077 13.2688 23.9017 15.4138 24.4777 16.8258C24.2837 20.1288 28.1757 21.8298 30.5347 22.3168Z",
      fill: "currentColor"
    }
  )
] }), _i = H.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
`, Un = H.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 52px;
  width: 100%;
  height: 100%;
`, Ri = H.div`
  font-family: SFRounded, ui-rounded, "SF Pro Rounded", Comic Sans MS, system-ui, sans-serif;

  width: ${(e) => e.$size}px;
  height: ${(e) => e.$size}px;
  padding: ${(e) => e.$gap}px;
  position: relative;

  /* Preferred box-sizing value */
  &,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`, Ti = H.div`
  position: relative;
  width: 100%;
  height: 100%;
`, ji = H.svg`
  position: absolute;
  inset: 0 0 0 0;
  pointer-events: none;
`, Ai = H.button`
  display: inline-block;

  all: unset;
  display: revert;
  cursor: revert;
`, Li = H.div`
  font-weight: 700;
  font-size: 28px;
  color: white;
  cursor: pointer;
  user-select: none;

  background: blue;
  padding: 14px 18px;
  box-shadow: inset 0px -2px 0px 4px #031298;
  text-shadow: 0px 1px 0px #333;
  white-space: nowrap;

  > span {
    display: inline-block;
  }

  &:active {
    box-shadow: none;
    > span {
      transform: translateY(2px);
    }
  }
`;
let Vo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ii = typeof global == "object" && global && global.Object === Object && global;
const Go = Ii;
var Di = typeof self == "object" && self && self.Object === Object && self, Ni = Go || Di || Function("return this")();
const Uo = Ni;
var Fi = Uo.Symbol;
const Vt = Fi;
var Ho = Object.prototype, Bi = Ho.hasOwnProperty, Wi = Ho.toString, ut = Vt ? Vt.toStringTag : void 0;
function zi(e) {
  var t = Bi.call(e, ut), n = e[ut];
  try {
    e[ut] = void 0;
    var r = !0;
  } catch {
  }
  var o = Wi.call(e);
  return r && (t ? e[ut] = n : delete e[ut]), o;
}
var Vi = Object.prototype, Gi = Vi.toString;
function Ui(e) {
  return Gi.call(e);
}
var Hi = "[object Null]", Yi = "[object Undefined]", Vr = Vt ? Vt.toStringTag : void 0;
function Hn(e) {
  return e == null ? e === void 0 ? Yi : Hi : Vr && Vr in Object(e) ? zi(e) : Ui(e);
}
function Yn(e) {
  return e != null && typeof e == "object";
}
function qi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ki = Array.isArray;
const qn = Ki;
function Zi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xi = "[object AsyncFunction]", Ji = "[object Function]", Qi = "[object GeneratorFunction]", ec = "[object Proxy]";
function tc(e) {
  if (!Zi(e))
    return !1;
  var t = Hn(e);
  return t == Ji || t == Qi || t == Xi || t == ec;
}
function nc(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var rc = 9007199254740991, oc = /^(?:0|[1-9]\d*)$/;
function sc(e, t) {
  var n = typeof e;
  return t = t ?? rc, !!t && (n == "number" || n != "symbol" && oc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ac = 9007199254740991;
function Yo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ac;
}
function ic(e) {
  return e != null && Yo(e.length) && !tc(e);
}
var cc = Object.prototype;
function uc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || cc;
  return e === n;
}
function lc(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fc = "[object Arguments]";
function Gr(e) {
  return Yn(e) && Hn(e) == fc;
}
var qo = Object.prototype, hc = qo.hasOwnProperty, pc = qo.propertyIsEnumerable, dc = Gr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Gr : function(e) {
  return Yn(e) && hc.call(e, "callee") && !pc.call(e, "callee");
};
const gc = dc;
function mc() {
  return !1;
}
var Ko = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = Ko && typeof module == "object" && module && !module.nodeType && module, yc = Ur && Ur.exports === Ko, Hr = yc ? Uo.Buffer : void 0, vc = Hr ? Hr.isBuffer : void 0, bc = vc || mc;
const wc = bc;
var xc = "[object Arguments]", Sc = "[object Array]", Cc = "[object Boolean]", kc = "[object Date]", Ec = "[object Error]", $c = "[object Function]", Pc = "[object Map]", Mc = "[object Number]", Oc = "[object Object]", _c = "[object RegExp]", Rc = "[object Set]", Tc = "[object String]", jc = "[object WeakMap]", Ac = "[object ArrayBuffer]", Lc = "[object DataView]", Ic = "[object Float32Array]", Dc = "[object Float64Array]", Nc = "[object Int8Array]", Fc = "[object Int16Array]", Bc = "[object Int32Array]", Wc = "[object Uint8Array]", zc = "[object Uint8ClampedArray]", Vc = "[object Uint16Array]", Gc = "[object Uint32Array]", W = {};
W[Ic] = W[Dc] = W[Nc] = W[Fc] = W[Bc] = W[Wc] = W[zc] = W[Vc] = W[Gc] = !0;
W[xc] = W[Sc] = W[Ac] = W[Cc] = W[Lc] = W[kc] = W[Ec] = W[$c] = W[Pc] = W[Mc] = W[Oc] = W[_c] = W[Rc] = W[Tc] = W[jc] = !1;
function Uc(e) {
  return Yn(e) && Yo(e.length) && !!W[Hn(e)];
}
function Hc(e) {
  return function(t) {
    return e(t);
  };
}
var Zo = typeof exports == "object" && exports && !exports.nodeType && exports, pt = Zo && typeof module == "object" && module && !module.nodeType && module, Yc = pt && pt.exports === Zo, dn = Yc && Go.process, qc = function() {
  try {
    var e = pt && pt.require && pt.require("util").types;
    return e || dn && dn.binding && dn.binding("util");
  } catch {
  }
}();
const Yr = qc;
var qr = Yr && Yr.isTypedArray, Kc = qr ? Hc(qr) : Uc;
const Zc = Kc;
var Xc = Object.prototype, Jc = Xc.hasOwnProperty;
function Qc(e, t) {
  var n = qn(e), r = !n && gc(e), o = !n && !r && wc(e), s = !n && !r && !o && Zc(e), a = n || r || o || s, i = a ? lc(e.length, String) : [], c = i.length;
  for (var u in e)
    (t || Jc.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    sc(u, c))) && i.push(u);
  return i;
}
function eu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var tu = eu(Object.keys, Object);
const nu = tu;
var ru = Object.prototype, ou = ru.hasOwnProperty;
function su(e) {
  if (!uc(e))
    return nu(e);
  var t = [];
  for (var n in Object(e))
    ou.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function au(e) {
  return ic(e) ? Qc(e) : su(e);
}
function iu(e, t) {
  return qi(t, function(n) {
    return e[n];
  });
}
function Xo(e) {
  return e == null ? [] : iu(e, au(e));
}
var cu = Math.floor, uu = Math.random;
function Jo(e, t) {
  return e + cu(uu() * (t - e + 1));
}
function Qo(e) {
  var t = e.length;
  return t ? e[Jo(0, t - 1)] : void 0;
}
function lu(e) {
  return Qo(Xo(e));
}
function fu(e) {
  var t = qn(e) ? Qo : lu;
  return t(e);
}
function es(e, t) {
  var n = -1, r = e.length, o = r - 1;
  for (t = t === void 0 ? r : t; ++n < t; ) {
    var s = Jo(n, o), a = e[s];
    e[s] = e[n], e[n] = a;
  }
  return e.length = t, e;
}
function hu(e) {
  return es(nc(e));
}
function pu(e) {
  return es(Xo(e));
}
function Kr(e) {
  var t = qn(e) ? hu : pu;
  return t(e);
}
const du = (e, t) => $i`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  50% { transform: translateY(-${t / 2}px) rotate(${e}deg); opacity: 1; }
  100% { transform: translateY(-${t}px) rotate(0deg); opacity: 0; }
`, gu = H.div`
  font-family: SFRounded, ui-rounded, "SF Pro Rounded", Comic Sans MS, system-ui, sans-serif;

  opacity: 0;
  pointer-events: none;
  user-select: none;

  position: fixed;
  left: ${(e) => e.$startX}px;
  top: ${(e) => e.$startY}px;

  width: ${(e) => e.$size}px;
  height: ${(e) => e.$size}px;
  font-size: ${(e) => e.$size}px;
  font-weight: bold;

  animation: ${(e) => du(e.$amplitude, e.$maxHeight)}
    ${(e) => e.$duration}s linear ${(e) => e.$delay}s forwards;
  transform-origin: bottom center;
`, mu = ({ id: e, size: t, duration: n, delay: r, startX: o, startY: s, amplitude: a, maxHeight: i, onDone: c, children: u }) => (Ne(() => {
  const l = setTimeout(() => c(e), (n + r) * 1e3);
  return () => clearTimeout(l);
}, [e, n, r, c]), /* @__PURE__ */ k.jsx(
  gu,
  {
    $size: t,
    $duration: n,
    $delay: r,
    $startX: o,
    $startY: s,
    $amplitude: a,
    $maxHeight: i,
    children: u
  }
)), yu = Je(
  ({ targetRef: e, symbol: t }, n) => {
    const [r, o] = ce({}), [s] = ce(() => [t].flat()), a = pe(), i = (l) => {
      o((d) => {
        const h = { ...d };
        return delete h[l], h;
      });
    }, c = () => {
      var p;
      const l = e.current;
      if (!(l instanceof HTMLElement))
        return;
      l.style.filter = "invert(1)", l.style.outline = "3px dashed red", l.style.outlineOffset = "4px", l.style.transition = "filter 0s ease-out, outline 0s ease-out", clearTimeout(a.current), setTimeout(() => {
        l.style.transition = "filter 1s ease-out, outline 1s ease-out", l.style.filter = "invert(0)", l.style.outlineColor = "transparent";
      }, 0), a.current = setTimeout(() => {
        l.style.outline = "none", l.style.filter = "none", l.style.transition = "none";
      }, 1e3);
      const d = Math.floor(u(4, 8)), h = (p = e.current) == null ? void 0 : p.getBoundingClientRect();
      for (let g = 0; g < d; g++) {
        const m = Vo(), b = u(20, 32), x = u(0.5, 1.5), y = u(0, 0.2), w = u(-30, 30), E = u(50, 150), P = h ? h.left + u(-b / 2, h.width - b / 2) : 0, S = h ? h.top - b : 0, $ = fu(s), L = /* @__PURE__ */ k.jsx(
          mu,
          {
            id: m,
            size: b,
            duration: x,
            delay: y,
            startX: P,
            startY: S,
            amplitude: w,
            maxHeight: E,
            onDone: i,
            children: $
          },
          m
        );
        o((D) => ({ ...D, [m]: L }));
      }
    }, u = (l, d) => Math.random() * (d - l) + l;
    return Is(n, () => ({
      emitParticles: c
    })), /* @__PURE__ */ k.jsx(k.Fragment, { children: Object.values(r) });
  }
), tt = ({
  children: e,
  symbol: t = "$"
}) => {
  const n = pe(!0), r = pe(null), o = pe(null);
  if (!He(e))
    return e;
  Ne(() => {
    var a;
    n.current || (a = o.current) == null || a.emitParticles(), n.current = !1;
  });
  const s = Gt(e, { ref: r });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    s,
    Ds(
      /* @__PURE__ */ k.jsx(yu, { ref: o, targetRef: r, symbol: t }),
      document.body
    )
  ] });
}, Pl = () => {
  const [e, t] = ce(0), n = De(() => {
    t((r) => r + 1);
  }, []);
  return /* @__PURE__ */ k.jsx(Gn, { children: /* @__PURE__ */ k.jsx(Un, { children: /* @__PURE__ */ k.jsx(tt, { symbol: ["€", "$"], children: /* @__PURE__ */ k.jsxs(Vn, { onClick: n, children: [
    "Counter: ",
    e
  ] }) }) }) });
}, Tn = [
  "Bella",
  "Bubbles",
  "Buttercup",
  "Caramel Swirl",
  "Charlie",
  "Cinnamon Swirl",
  "Cocoa Puff",
  "Cotton Ball",
  "Cuddles",
  "Cupcake",
  "Daisy",
  "Doodles",
  "Fluffy Boy",
  "Fluffy Whiskers",
  "Giggles",
  "Ginger Snap",
  "Golden Paws",
  "Jellybean",
  "Jellybean Toes",
  "Kitty",
  "Licorice Lace",
  "Lucky Charm",
  "Lucy",
  "Luna",
  "Marshmallow Cloud",
  "Max",
  "Milo",
  "Misty Shadow",
  "Mittens",
  "Molly",
  "Moonlight Sonata",
  "Muffin",
  "Noodles",
  "Oliver",
  "Peaches",
  "Pebbles",
  "Peppermint Twist",
  "Popsicle",
  "Pumpkin",
  "Pumpkin Spice",
  "Shadow",
  "Silent Whisper",
  "Silver Lining",
  "Simba",
  "Smokey",
  "Snowball",
  "Snuggles",
  "Sparkles",
  "Sprinkles",
  "Squiggles",
  "Sunny Delight",
  "Tiger",
  "Tigger",
  "Twilight Sparkle",
  "Twinkles",
  "Velvet Purr",
  "Whiskers",
  "Wiggles"
], Zr = [
  "#2857b7",
  "#8941cd",
  "#893863",
  "#f1520a",
  "#d70d8a",
  "#1c8cf0",
  "#bde646",
  "#9f1ab0",
  "#0c23ea",
  "#07829f",
  "#2997f9",
  "#3a15d1",
  "#4144c5",
  "#08682d",
  "#c4451a",
  "#be50a5",
  "#a0640c",
  "#5371ce",
  "#0c07ca",
  "#ce8e0e"
], vu = () => {
  const e = Math.floor(Math.random() * Tn.length);
  return Tn[e];
}, bu = () => {
  const e = Math.floor(Math.random() * Zr.length);
  return Zr[e];
};
var jn = { exports: {} }, gn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function wu() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = K, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(w) {
      {
        for (var E = arguments.length, P = new Array(E > 1 ? E - 1 : 0), S = 1; S < E; S++)
          P[S - 1] = arguments[S];
        r("error", w, P);
      }
    }
    function r(w, E, P) {
      {
        var S = t.ReactDebugCurrentFrame, $ = S.getStackAddendum();
        $ !== "" && (E += "%s", P = P.concat([$]));
        var L = P.map(function(D) {
          return String(D);
        });
        L.unshift("Warning: " + E), Function.prototype.apply.call(console[w], console, L);
      }
    }
    function o(w, E) {
      return w === E && (w !== 0 || 1 / w === 1 / E) || w !== w && E !== E;
    }
    var s = typeof Object.is == "function" ? Object.is : o, a = e.useState, i = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, l = !1, d = !1;
    function h(w, E, P) {
      l || e.startTransition !== void 0 && (l = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = E();
      if (!d) {
        var $ = E();
        s(S, $) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var L = a({
        inst: {
          value: S,
          getSnapshot: E
        }
      }), D = L[0].inst, U = L[1];
      return c(function() {
        D.value = S, D.getSnapshot = E, p(D) && U({
          inst: D
        });
      }, [w, S, E]), i(function() {
        p(D) && U({
          inst: D
        });
        var te = function() {
          p(D) && U({
            inst: D
          });
        };
        return w(te);
      }, [w]), u(S), S;
    }
    function p(w) {
      var E = w.getSnapshot, P = w.value;
      try {
        var S = E();
        return !s(P, S);
      } catch {
        return !0;
      }
    }
    function g(w, E, P) {
      return E();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !m, x = b ? g : h, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    gn.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), gn;
}
var mn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function xu() {
  if (Jr)
    return mn;
  Jr = 1;
  var e = K;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, a = e.useDebugValue;
  function i(d, h) {
    var p = h(), g = r({ inst: { value: p, getSnapshot: h } }), m = g[0].inst, b = g[1];
    return s(function() {
      m.value = p, m.getSnapshot = h, c(m) && b({ inst: m });
    }, [d, p, h]), o(function() {
      return c(m) && b({ inst: m }), d(function() {
        c(m) && b({ inst: m });
      });
    }, [d]), a(p), p;
  }
  function c(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var p = h();
      return !n(d, p);
    } catch {
      return !0;
    }
  }
  function u(d, h) {
    return h();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : i;
  return mn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, mn;
}
process.env.NODE_ENV === "production" ? jn.exports = xu() : jn.exports = wu();
var Su = jn.exports;
const {
  useEffect: Cu,
  useLayoutEffect: ku,
  useRef: Eu,
  useInsertionEffect: $u
} = js, Pu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mu = Pu ? ku : Cu, Ou = $u || Mu, ts = (e) => {
  const t = Eu([e, (...n) => t[0](...n)]).current;
  return Ou(() => {
    t[0] = e;
  }), t[1];
}, _u = "popstate", Kn = "pushState", Zn = "replaceState", Ru = "hashchange", Qr = [
  _u,
  Kn,
  Zn,
  Ru
], Tu = (e) => {
  for (const t of Qr)
    addEventListener(t, e);
  return () => {
    for (const t of Qr)
      removeEventListener(t, e);
  };
}, ns = (e, t) => Su.useSyncExternalStore(Tu, e, t), ju = () => location.search, Au = ({ ssrSearch: e = "" } = {}) => ns(ju, () => e), eo = () => location.pathname, Lu = ({ ssrPath: e } = {}) => ns(
  eo,
  e ? () => e : eo
), Iu = (e, { replace: t = !1, state: n = null } = {}) => history[t ? Zn : Kn](n, "", e), Du = (e = {}) => [Lu(e), Iu], to = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[to] > "u") {
  for (const e of [Kn, Zn]) {
    const t = history[e];
    history[e] = function() {
      const n = t.apply(this, arguments), r = new Event(e);
      return r.arguments = arguments, dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, to, { value: !0 });
}
function Nu(e, t) {
  if (e instanceof RegExp)
    return { keys: !1, pattern: e };
  var n, r, o, s, a = [], i = "", c = e.split("/");
  for (c[0] || c.shift(); o = c.shift(); )
    n = o[0], n === "*" ? (r = o[1] === "?", a.push("wild"), i += r ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1), s = o.indexOf(".", 1), a.push(o.substring(1, ~r ? r : ~s ? s : o.length)), i += ~r && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)", ~s && (i += (~r ? "?" : "") + "\\" + o.substring(s))) : i += "/" + o;
  return {
    keys: a,
    pattern: new RegExp("^" + i + (t ? "(?=$|/)" : "/?$"), "i")
  };
}
const Fu = (e = "", t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/", Bu = (e, t = "") => e[0] === "~" ? e.slice(1) : t + e, Wu = (e) => e[0] === "?" ? e.slice(1) : e, rs = (e) => {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, zu = {
  hook: Du,
  searchHook: Au,
  parser: Nu,
  base: "",
  // this option is used to override the current location during SSR
  ssrPath: void 0,
  ssrSearch: void 0
}, Vu = An(zu), os = () => uo(Vu);
An({});
const Gu = (e) => {
  const [t, n] = e.hook(e);
  return [
    rs(Fu(e.base, t)),
    ts((r, o) => n(Bu(r, e.base), o))
  ];
}, Xt = () => {
  const e = os();
  return rs(Wu(e.searchHook(e)));
};
Je((e, t) => {
  const n = os(), [, r] = Gu(n), {
    to: o,
    href: s = o,
    onClick: a,
    asChild: i,
    children: c,
    /* eslint-disable no-unused-vars */
    replace: u,
    state: l,
    /* eslint-enable no-unused-vars */
    ...d
  } = e, h = ts((g) => {
    g.ctrlKey || g.metaKey || g.altKey || g.shiftKey || g.button !== 0 || (a && a(g), g.defaultPrevented || (g.preventDefault(), r(s, e)));
  }), p = s[0] === "~" ? s.slice(1) : n.base + s;
  return i && He(c) ? Gt(c, { href: p, onClick: h }) : dt("a", { ...d, href: p, onClick: h, children: c, ref: t });
});
const no = ["Bambooni", "Waffle"], ss = ({ isIt: e }) => {
  const t = e ? "That's my cat!" : "This is NOT my cat...";
  return /* @__PURE__ */ k.jsx(tt, { children: /* @__PURE__ */ k.jsx(_i, { children: t }) });
}, Uu = K.memo(ss), Ml = () => {
  const e = new URLSearchParams(Xt()), [t, n] = ce(0), [r] = ce(() => Kr([...no, ...Kr(Tn).slice(0, 10)])), o = De(() => {
    n((a) => (a + 1) % r.length);
  }, [r]), s = e.has("memo") ? Uu : ss;
  return /* @__PURE__ */ k.jsx(Gn, { children: /* @__PURE__ */ k.jsxs(Un, { children: [
    /* @__PURE__ */ k.jsx(tt, { symbol: "😾", children: /* @__PURE__ */ k.jsx(Vn, { onClick: o, children: r[t] }) }),
    /* @__PURE__ */ k.jsx(s, { isIt: no.includes(r[t]) })
  ] }) });
}, Hu = typeof window < "u" ? (
  // useInsertionEffect is available in React 18+
  K.useInsertionEffect || K.useLayoutEffect
) : () => {
};
function Yu(e) {
  const t = K.useRef(qu);
  Hu(() => {
    t.current = e;
  }, [e]);
  const n = K.useRef(null);
  return n.current || (n.current = function() {
    return t.current.apply(this, arguments);
  }), n.current;
}
function qu() {
  throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.");
}
const Ku = K.memo(({ color: e, name: t }) => /* @__PURE__ */ k.jsx(tt, { children: /* @__PURE__ */ k.jsx(Ju, { children: /* @__PURE__ */ k.jsx(Qu, { $color: e, cornerRadius: 8, cornerSmoothing: 1, children: t || "Unknown" }, t) }) })), ro = ({ player: e, isMe: t = !1 }) => /* @__PURE__ */ k.jsxs(Xu, { $top: e.y, $left: e.x, $isMe: t, children: [
  /* @__PURE__ */ k.jsx(Zu, {}),
  /* @__PURE__ */ k.jsx(Ku, { color: e.color, name: e.name })
] }), Zu = () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", fill: "none", children: /* @__PURE__ */ k.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M2.188 1.363a1.015 1.015 0 0 0-.575.662c-.038.163.2 3 .975 11.238.575 6.062 1.15 12.25 1.287 13.762.138 1.513.275 2.838.313 2.963.187.662.95.975 1.55.612.1-.05 1.487-1.925 3.287-4.425a925.95 925.95 0 0 0 3.163-4.4c.025-.037 2.137-.1 5.625-.175 3.475-.075 5.687-.137 5.837-.187.675-.188.963-1.05.525-1.6-.062-.088-1.737-1.563-3.7-3.288C18.5 14.8 13.813 10.7 10.038 7.413c-3.775-3.288-6.925-6.038-7.05-6.088-.275-.112-.5-.1-.8.038"
  }
) }), oo = 2, Xu = H.div.attrs(({ $top: e, $left: t }) => ({
  style: { transform: `translate(${t - oo}px, ${e - oo}px)` }
}))`
  position: absolute;
  pointer-events: none;

  filter: drop-shadow(0px 2px 0px white) drop-shadow(0px -2px 0px white)
    drop-shadow(1px 0px 0px white) drop-shadow(-1px 0px 0px white);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  ${(e) => e.$isMe ? "color: black;" : "color: #999;"}
`, Ju = H.div`
  position: absolute;
  top: 32px;
  left: 16px;
`, Qu = H(gt)`
  background-color: ${(e) => e.$color};
  font-weight: 500;
  height: 32px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  padding: 0px 8px;
  white-space: nowrap;
  text-shadow: 0px 1px 0px #333;
`;
let so = () => ({
  emit(e, ...t) {
    for (let n = 0, r = this.events[e] || [], o = r.length; n < o; n++)
      r[n](...t);
  },
  events: {},
  on(e, t) {
    var n;
    return ((n = this.events)[e] || (n[e] = [])).push(t), () => {
      var r;
      this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter((o) => t !== o);
    };
  }
});
function el(e) {
  let t = null, n = null, r = 0;
  return function(o, s, a) {
    const i = a.value;
    return a.value = function(...c) {
      const u = Date.now();
      t || i.apply(this, c);
      const l = typeof e == "function" ? e() : e;
      (!t || u - r >= l) && (t = setTimeout(() => {
        n && i.apply(this, n), t = null, n = null;
      }, l)), n = c, r = u;
    }, a;
  };
}
var tl = Object.defineProperty, nl = Object.getOwnPropertyDescriptor, rl = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? nl(t, n) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (o = (r ? a(t, n, o) : a(o)) || o);
  return r && o && tl(t, n, o), o;
}, J, he, ve;
const as = (J = class {
  constructor({ autoconnect: t = !0 } = {}) {
    rt(this, "me");
    rt(this, "connection", "offline");
    rn(this, he, void 0);
    rn(this, ve, void 0);
    wt(this, he, vu()), this.me = {
      color: bu(),
      name: oe(this, he),
      x: 0,
      y: 0
    }, wt(this, ve, so()), t && this.connect();
  }
  get isOnline() {
    return this.connection === "online";
  }
  get players() {
    return { ...J.players, [oe(this, he)]: this.me };
  }
  async connect() {
    this.connection === "offline" && (this.connection = "connecting", oe(this, ve).emit("connect", this.connection), await ao(500), this.connection === "connecting" && (this.connection = "online", oe(this, ve).emit("connect", this.connection), this.sync()));
  }
  get name() {
    return oe(this, he);
  }
  set name(t) {
    J.players[t] || (delete J.players[oe(this, he)], wt(this, he, t), this.me.name = t, oe(this, ve).emit("rename", t), this.sync());
  }
  syncOverNetwork() {
    this.sync();
  }
  sync() {
    J.players[oe(this, he)] = { ...this.me }, J.globalEmitter.emit("update");
  }
  async move(t, n) {
    this.me.x = t, this.me.y = n, J.globalEmitter.emit("update"), this.syncOverNetwork();
  }
  on(t, n) {
    return t === "update" ? J.globalEmitter.on("update", n) : oe(this, ve).on(t, n);
  }
  async disconnect() {
    this.connection = "disconnecting", oe(this, ve).emit("connect", this.connection), await ao(250), this.connection = "offline", oe(this, ve).emit("connect", this.connection), delete J.players[oe(this, he)], J.globalEmitter.emit("update");
  }
}, he = new WeakMap(), ve = new WeakMap(), rt(J, "players", {}), rt(J, "globalEmitter", so()), J);
rl([
  el(() => 30 + Math.random() * 200)
], as.prototype, "syncOverNetwork", 1);
let is = as;
async function ao(e = 300) {
  return new Promise((t) => setTimeout(t, e));
}
let cs;
const Ol = () => cs, _l = () => cs || (cs = new is()), Rl = () => {
  const e = pe(), [t] = ce(() => e.current || (e.current = new is()));
  return t;
};
An({});
const Xn = (e, t) => {
  const [n] = ce(
    () => (
      // initializer trick to build this function on the first pass
      // hence, this hook can't work with variable `event`
      (r) => e.on(t, r)
    )
  );
  return n;
}, ol = (e) => {
  const [t, n] = ce(() => e.name);
  return Ne(() => e.on("rename", () => n(e.name)), [e]), t;
}, sl = (e) => {
  const t = Xn(e, "rename");
  return Ln(t, () => e.name);
}, al = (e) => {
  const t = Xn(e, "connect");
  return Ln(t, () => e.connection);
}, il = (e) => {
  const t = Xn(e, "update");
  return Ln(t, () => Object.keys(e.players).length);
}, cl = (e) => {
  const [, t] = ce({});
  Ne(() => e.on("update", () => t({})), [e]);
}, Tl = K.memo(({ nOfInstances: e, ...t }) => {
  const [n] = ce(() => Array.from({ length: e }).map(() => Vo())), r = Xt();
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: n.map((o) => /* @__PURE__ */ k.jsx(ul, { ...t }, o + r)) });
}), ul = (e) => {
  const t = e.useMultiplayerHook(), n = al(t);
  Ne(() => () => {
    t.disconnect();
  }, [t]);
  const r = De(() => {
    t.connect();
  }, [t]);
  return /* @__PURE__ */ k.jsxs(Gn, { children: [
    n === "connecting" && /* @__PURE__ */ k.jsx(io, { children: "Connecting..." }),
    n === "disconnecting" && /* @__PURE__ */ k.jsx(io, { children: "Disconnecting..." }),
    n === "online" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(pl, { client: t }),
      /* @__PURE__ */ k.jsx(fl, { client: t })
    ] }),
    n === "offline" && /* @__PURE__ */ k.jsx(Un, { children: /* @__PURE__ */ k.jsx(Vn, { onClick: r, children: "Connect" }) })
  ] });
}, ll = K.memo(({ onComment: e }) => /* @__PURE__ */ k.jsx(tt, { children: /* @__PURE__ */ k.jsx(ml, { children: /* @__PURE__ */ k.jsx(yl, { onClick: e, children: /* @__PURE__ */ k.jsx(Oi, {}) }) }) })), fl = ({ client: e }) => {
  const t = il(e), n = De(() => {
    e.disconnect();
  }, [e]);
  return /* @__PURE__ */ k.jsxs(vl, { children: [
    /* @__PURE__ */ k.jsx(hl, { client: e }),
    /* @__PURE__ */ k.jsxs(wl, { onClick: n, cornerRadius: 12, cornerSmoothing: 1, children: [
      /* @__PURE__ */ k.jsx(Mi, {}),
      t
    ] })
  ] });
}, hl = K.memo(({ client: e }) => {
  const r = (new URLSearchParams(Xt()).get("name") === "useSES" ? sl : ol)(e), o = De(() => {
    const s = prompt("Rename player", r) || "Anon";
    e.name = s;
  }, [e, r]);
  return /* @__PURE__ */ k.jsx(tt, { children: /* @__PURE__ */ k.jsx(dl, { $color: e.me.color, onClick: o, children: r }, r) });
}), pl = ({ client: e }) => {
  const t = new URLSearchParams(Xt()), n = pe(null), r = (u) => {
    if (e) {
      const l = n.current.getBoundingClientRect();
      e.move(u.clientX - l.left, u.clientY - l.top);
    }
  };
  cl(e);
  const o = Object.values(e.players).filter((u) => u.name !== e.name), s = pe([0, 0]), a = De(() => {
    s.current = [e.me.x, e.me.y];
  }, [e.me.x, e.me.y]), i = Yu(() => {
    s.current = [e.me.x, e.me.y];
  }), c = t.get("add-comment") === "use-event" ? i : a;
  return /* @__PURE__ */ k.jsxs(gl, { ref: n, onMouseMove: r, children: [
    o.map((u) => /* @__PURE__ */ k.jsx(ro, { player: u }, u.name)),
    /* @__PURE__ */ k.jsx(ro, { player: e.players[e.name], isMe: !0 }),
    t.has("comments") && /* @__PURE__ */ k.jsx(ll, { onComment: c })
  ] });
}, dl = Je(
  ({ children: e, ...t }, n) => /* @__PURE__ */ k.jsx(bl, { ref: n, ...t, children: /* @__PURE__ */ k.jsx(gt, { cornerRadius: 12, cornerSmoothing: 1, children: e }) })
), gl = H.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: none;
`, ml = H.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 14px;
  color: white;
  text-shadow: 0px 0px 4px black;
`, yl = H(gt).attrs({ cornerRadius: 12, cornerSmoothing: 1 })`
  width: 64px;
  height: 64px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 34px;
  }
`, io = H.div`
  position: absolute;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: black;
  text-shadow: 0px 0px 4px white;
`, vl = H.div`
  position: absolute;

  top: 16px;
  right: 16px;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  cursor: pointer;
`, bl = H.div`
  > div {
    background: ${(e) => e.$color};
    display: flex;
    align-items: center;
    color: white;
    font-size: 22px;
    font-weight: 600;
    height: 44px;

    padding: 6px 14px;
    text-shadow: 0px 1px 0px #333;
  }
`, wl = H(gt)`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  background: black;
  color: white;
  padding: 6px 14px;

  > svg {
    width: 24px;
  }
`;
export {
  Ml as CatDemo,
  Pl as ExpensiveRenderDemo,
  Tl as MultiplayerDemo,
  Ol as useMultiplayerA,
  _l as useMultiplayerB,
  Rl as useMultiplayerC
};
