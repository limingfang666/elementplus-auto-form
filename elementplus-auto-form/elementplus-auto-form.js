import { ref as x, watch as K, getCurrentScope as Js, onScopeDispose as Xs, unref as f, getCurrentInstance as Qe, onMounted as Pe, nextTick as fe, openBlock as A, createElementBlock as z, createElementVNode as Z, warn as el, computed as S, inject as ie, isRef as tl, shallowRef as Jt, onBeforeUnmount as Je, onBeforeMount as nl, provide as We, defineComponent as q, mergeProps as lt, renderSlot as X, toRef as st, onUnmounted as rl, reactive as Vt, toRefs as Gn, normalizeClass as R, onUpdated as Ii, createVNode as ee, Fragment as ze, useSlots as Eo, withCtx as j, createBlock as W, resolveDynamicComponent as He, normalizeStyle as be, createTextVNode as ol, toDisplayString as Me, createCommentVNode as G, TransitionGroup as al, useAttrs as il, withDirectives as It, withModifiers as at, vShow as Sn, Transition as Bn, cloneVNode as sl, Text as xi, Comment as ll, Teleport as ul, readonly as cl, onDeactivated as fl, toRaw as hr, triggerRef as Pn, resolveComponent as Nt, resolveDirective as dl, renderList as Mn, withKeys as nt, vModelText as pl, createSlots as vl, isVNode as gl } from "vue";
const Pt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var aa;
const Ae = typeof window < "u", hl = (e) => typeof e == "string", mr = () => {
}, Fi = Ae && ((aa = window == null ? void 0 : window.navigator) == null ? void 0 : aa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yr(e) {
  return typeof e == "function" ? e() : f(e);
}
function ml(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function yl(e, t = {}) {
  let n, r, o = mr;
  const a = (s) => {
    clearTimeout(s), o(), o = mr;
  };
  return (s) => {
    const l = yr(e), c = yr(t.maxWait);
    return n && a(n), l <= 0 || c !== void 0 && c <= 0 ? (r && (a(r), r = null), Promise.resolve(s())) : new Promise((d, p) => {
      o = t.rejectOnCancel ? p : d, c && !r && (r = setTimeout(() => {
        n && a(n), r = null, d(s());
      }, c)), n = setTimeout(() => {
        r && a(r), r = null, d(s());
      }, l);
    });
  };
}
function bl(e) {
  return e;
}
function To(e) {
  return Js() ? (Xs(e), !0) : !1;
}
function wl(e, t = 200, n = {}) {
  return ml(yl(t, n), e);
}
function Sl(e, t = 200, n = {}) {
  const r = x(e.value), o = wl(() => {
    r.value = e.value;
  }, t, n);
  return K(e, () => o()), r;
}
function Ol(e, t = !0) {
  Qe() ? Pe(e) : t ? e() : fe(e);
}
function zt(e) {
  var t;
  const n = yr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _o = Ae ? window : void 0;
function Xt(...e) {
  let t, n, r, o;
  if (hl(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = _o) : [t, n, r, o] = e, !t)
    return mr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((d) => d()), a.length = 0;
  }, s = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = K(() => [zt(t), yr(o)], ([d, p]) => {
    i(), d && a.push(...n.flatMap((m) => r.map((y) => s(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), i();
  };
  return To(c), c;
}
let ia = !1;
function El(e, t, n = {}) {
  const { window: r = _o, ignore: o = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Fi && !ia && (ia = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", mr)));
  let s = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = zt(y);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), d = [
    Xt(r, "click", (m) => {
      const y = zt(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (s = !l(m)), !s) {
          s = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Xt(r, "pointerdown", (m) => {
      const y = zt(e);
      y && (s = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    i && Xt(r, "blur", (m) => {
      var y;
      const g = zt(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(g != null && g.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Tl(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), Ol(r, t), n;
}
const sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, la = "__vueuse_ssr_handlers__";
sa[la] = sa[la] || {};
var ua = Object.getOwnPropertySymbols, _l = Object.prototype.hasOwnProperty, $l = Object.prototype.propertyIsEnumerable, Cl = (e, t) => {
  var n = {};
  for (var r in e)
    _l.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ua)
    for (var r of ua(e))
      t.indexOf(r) < 0 && $l.call(e, r) && (n[r] = e[r]);
  return n;
};
function Yn(e, t, n = {}) {
  const r = n, { window: o = _o } = r, a = Cl(r, ["window"]);
  let i;
  const s = Tl(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, c = K(() => zt(e), (p) => {
    l(), s.value && o && p && (i = new ResizeObserver(t), i.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return To(d), {
    isSupported: s,
    stop: d
  };
}
var ca;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ca || (ca = {}));
var Al = Object.defineProperty, fa = Object.getOwnPropertySymbols, Pl = Object.prototype.hasOwnProperty, Il = Object.prototype.propertyIsEnumerable, da = (e, t, n) => t in e ? Al(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xl = (e, t) => {
  for (var n in t || (t = {}))
    Pl.call(t, n) && da(e, n, t[n]);
  if (fa)
    for (var n of fa(t))
      Il.call(t, n) && da(e, n, t[n]);
  return e;
};
const Fl = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
xl({
  linear: bl
}, Fl);
const Ml = () => Ae && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const jn = () => {
}, Rl = Object.prototype.hasOwnProperty, pa = (e, t) => Rl.call(e, t), Mi = Array.isArray, De = (e) => typeof e == "function", Ue = (e) => typeof e == "string", xt = (e) => e !== null && typeof e == "object", Ll = Object.prototype.toString, kl = (e) => Ll.call(e), Vr = (e) => kl(e).slice(8, -1);
var Nl = typeof global == "object" && global && global.Object === Object && global;
const Ri = Nl;
var Bl = typeof self == "object" && self && self.Object === Object && self, jl = Ri || Bl || Function("return this")();
const ft = jl;
var Dl = ft.Symbol;
const Et = Dl;
var Li = Object.prototype, zl = Li.hasOwnProperty, Hl = Li.toString, In = Et ? Et.toStringTag : void 0;
function ql(e) {
  var t = zl.call(e, In), n = e[In];
  try {
    e[In] = void 0;
    var r = !0;
  } catch {
  }
  var o = Hl.call(e);
  return r && (t ? e[In] = n : delete e[In]), o;
}
var Vl = Object.prototype, Wl = Vl.toString;
function Kl(e) {
  return Wl.call(e);
}
var Ul = "[object Null]", Gl = "[object Undefined]", va = Et ? Et.toStringTag : void 0;
function On(e) {
  return e == null ? e === void 0 ? Gl : Ul : va && va in Object(e) ? ql(e) : Kl(e);
}
function qt(e) {
  return e != null && typeof e == "object";
}
var Yl = "[object Symbol]";
function Tr(e) {
  return typeof e == "symbol" || qt(e) && On(e) == Yl;
}
function Zl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ql = Array.isArray;
const ut = Ql;
var Jl = 1 / 0, ga = Et ? Et.prototype : void 0, ha = ga ? ga.toString : void 0;
function ki(e) {
  if (typeof e == "string")
    return e;
  if (ut(e))
    return Zl(e, ki) + "";
  if (Tr(e))
    return ha ? ha.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Jl ? "-0" : t;
}
var Xl = /\s/;
function eu(e) {
  for (var t = e.length; t-- && Xl.test(e.charAt(t)); )
    ;
  return t;
}
var tu = /^\s+/;
function nu(e) {
  return e && e.slice(0, eu(e) + 1).replace(tu, "");
}
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ma = 0 / 0, ru = /^[-+]0x[0-9a-f]+$/i, ou = /^0b[01]+$/i, au = /^0o[0-7]+$/i, iu = parseInt;
function ao(e) {
  if (typeof e == "number")
    return e;
  if (Tr(e))
    return ma;
  if (ct(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ct(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nu(e);
  var n = ou.test(e);
  return n || au.test(e) ? iu(e.slice(2), n ? 2 : 8) : ru.test(e) ? ma : +e;
}
var ya = 1 / 0, su = 17976931348623157e292;
function lu(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ao(e), e === ya || e === -ya) {
    var t = e < 0 ? -1 : 1;
    return t * su;
  }
  return e === e ? e : 0;
}
function uu(e) {
  var t = lu(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function cu(e) {
  return e;
}
var fu = "[object AsyncFunction]", du = "[object Function]", pu = "[object GeneratorFunction]", vu = "[object Proxy]";
function Ni(e) {
  if (!ct(e))
    return !1;
  var t = On(e);
  return t == du || t == pu || t == fu || t == vu;
}
var gu = ft["__core-js_shared__"];
const Wr = gu;
var ba = function() {
  var e = /[^.]+$/.exec(Wr && Wr.keys && Wr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hu(e) {
  return !!ba && ba in e;
}
var mu = Function.prototype, yu = mu.toString;
function rn(e) {
  if (e != null) {
    try {
      return yu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bu = /[\\^$.*+?()[\]{}|]/g, wu = /^\[object .+?Constructor\]$/, Su = Function.prototype, Ou = Object.prototype, Eu = Su.toString, Tu = Ou.hasOwnProperty, _u = RegExp(
  "^" + Eu.call(Tu).replace(bu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $u(e) {
  if (!ct(e) || hu(e))
    return !1;
  var t = Ni(e) ? _u : wu;
  return t.test(rn(e));
}
function Cu(e, t) {
  return e == null ? void 0 : e[t];
}
function on(e, t) {
  var n = Cu(e, t);
  return $u(n) ? n : void 0;
}
var Au = on(ft, "WeakMap");
const io = Au;
var wa = Object.create, Pu = function() {
  function e() {
  }
  return function(t) {
    if (!ct(t))
      return {};
    if (wa)
      return wa(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Iu = Pu;
function xu(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Fu = function() {
  try {
    var e = on(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Sa = Fu;
function Mu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Ru(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Lu = 9007199254740991, ku = /^(?:0|[1-9]\d*)$/;
function $o(e, t) {
  var n = typeof e;
  return t = t ?? Lu, !!t && (n == "number" || n != "symbol" && ku.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Bi(e, t, n) {
  t == "__proto__" && Sa ? Sa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Co(e, t) {
  return e === t || e !== e && t !== t;
}
var Nu = Object.prototype, Bu = Nu.hasOwnProperty;
function Ao(e, t, n) {
  var r = e[t];
  (!(Bu.call(e, t) && Co(r, n)) || n === void 0 && !(t in e)) && Bi(e, t, n);
}
function _r(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), o ? Bi(n, s, l) : Ao(n, s, l);
  }
  return n;
}
var ju = 9007199254740991;
function Po(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ju;
}
function ji(e) {
  return e != null && Po(e.length) && !Ni(e);
}
var Du = Object.prototype;
function Io(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Du;
  return e === n;
}
function zu(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Hu = "[object Arguments]";
function Oa(e) {
  return qt(e) && On(e) == Hu;
}
var Di = Object.prototype, qu = Di.hasOwnProperty, Vu = Di.propertyIsEnumerable, Wu = Oa(function() {
  return arguments;
}()) ? Oa : function(e) {
  return qt(e) && qu.call(e, "callee") && !Vu.call(e, "callee");
};
const zi = Wu;
function Ku() {
  return !1;
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, Ea = Hi && typeof module == "object" && module && !module.nodeType && module, Uu = Ea && Ea.exports === Hi, Ta = Uu ? ft.Buffer : void 0, Gu = Ta ? Ta.isBuffer : void 0, Yu = Gu || Ku;
const br = Yu;
var Zu = "[object Arguments]", Qu = "[object Array]", Ju = "[object Boolean]", Xu = "[object Date]", ec = "[object Error]", tc = "[object Function]", nc = "[object Map]", rc = "[object Number]", oc = "[object Object]", ac = "[object RegExp]", ic = "[object Set]", sc = "[object String]", lc = "[object WeakMap]", uc = "[object ArrayBuffer]", cc = "[object DataView]", fc = "[object Float32Array]", dc = "[object Float64Array]", pc = "[object Int8Array]", vc = "[object Int16Array]", gc = "[object Int32Array]", hc = "[object Uint8Array]", mc = "[object Uint8ClampedArray]", yc = "[object Uint16Array]", bc = "[object Uint32Array]", de = {};
de[fc] = de[dc] = de[pc] = de[vc] = de[gc] = de[hc] = de[mc] = de[yc] = de[bc] = !0;
de[Zu] = de[Qu] = de[uc] = de[Ju] = de[cc] = de[Xu] = de[ec] = de[tc] = de[nc] = de[rc] = de[oc] = de[ac] = de[ic] = de[sc] = de[lc] = !1;
function wc(e) {
  return qt(e) && Po(e.length) && !!de[On(e)];
}
function xo(e) {
  return function(t) {
    return e(t);
  };
}
var qi = typeof exports == "object" && exports && !exports.nodeType && exports, Rn = qi && typeof module == "object" && module && !module.nodeType && module, Sc = Rn && Rn.exports === qi, Kr = Sc && Ri.process, Oc = function() {
  try {
    var e = Rn && Rn.require && Rn.require("util").types;
    return e || Kr && Kr.binding && Kr.binding("util");
  } catch {
  }
}();
const pn = Oc;
var _a = pn && pn.isTypedArray, Ec = _a ? xo(_a) : wc;
const Vi = Ec;
var Tc = Object.prototype, _c = Tc.hasOwnProperty;
function Wi(e, t) {
  var n = ut(e), r = !n && zi(e), o = !n && !r && br(e), a = !n && !r && !o && Vi(e), i = n || r || o || a, s = i ? zu(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || _c.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    $o(c, l))) && s.push(c);
  return s;
}
function Ki(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var $c = Ki(Object.keys, Object);
const Cc = $c;
var Ac = Object.prototype, Pc = Ac.hasOwnProperty;
function Ic(e) {
  if (!Io(e))
    return Cc(e);
  var t = [];
  for (var n in Object(e))
    Pc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $r(e) {
  return ji(e) ? Wi(e) : Ic(e);
}
function xc(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Fc = Object.prototype, Mc = Fc.hasOwnProperty;
function Rc(e) {
  if (!ct(e))
    return xc(e);
  var t = Io(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Mc.call(e, r)) || n.push(r);
  return n;
}
function Fo(e) {
  return ji(e) ? Wi(e, !0) : Rc(e);
}
var Lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kc = /^\w*$/;
function Mo(e, t) {
  if (ut(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Tr(e) ? !0 : kc.test(e) || !Lc.test(e) || t != null && e in Object(t);
}
var Nc = on(Object, "create");
const Dn = Nc;
function Bc() {
  this.__data__ = Dn ? Dn(null) : {}, this.size = 0;
}
function jc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dc = "__lodash_hash_undefined__", zc = Object.prototype, Hc = zc.hasOwnProperty;
function qc(e) {
  var t = this.__data__;
  if (Dn) {
    var n = t[e];
    return n === Dc ? void 0 : n;
  }
  return Hc.call(t, e) ? t[e] : void 0;
}
var Vc = Object.prototype, Wc = Vc.hasOwnProperty;
function Kc(e) {
  var t = this.__data__;
  return Dn ? t[e] !== void 0 : Wc.call(t, e);
}
var Uc = "__lodash_hash_undefined__";
function Gc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dn && t === void 0 ? Uc : t, this;
}
function tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tn.prototype.clear = Bc;
tn.prototype.delete = jc;
tn.prototype.get = qc;
tn.prototype.has = Kc;
tn.prototype.set = Gc;
function Yc() {
  this.__data__ = [], this.size = 0;
}
function Cr(e, t) {
  for (var n = e.length; n--; )
    if (Co(e[n][0], t))
      return n;
  return -1;
}
var Zc = Array.prototype, Qc = Zc.splice;
function Jc(e) {
  var t = this.__data__, n = Cr(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Qc.call(t, n, 1), --this.size, !0;
}
function Xc(e) {
  var t = this.__data__, n = Cr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ef(e) {
  return Cr(this.__data__, e) > -1;
}
function tf(e, t) {
  var n = this.__data__, r = Cr(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Mt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Mt.prototype.clear = Yc;
Mt.prototype.delete = Jc;
Mt.prototype.get = Xc;
Mt.prototype.has = ef;
Mt.prototype.set = tf;
var nf = on(ft, "Map");
const zn = nf;
function rf() {
  this.size = 0, this.__data__ = {
    hash: new tn(),
    map: new (zn || Mt)(),
    string: new tn()
  };
}
function of(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ar(e, t) {
  var n = e.__data__;
  return of(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function af(e) {
  var t = Ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sf(e) {
  return Ar(this, e).get(e);
}
function lf(e) {
  return Ar(this, e).has(e);
}
function uf(e, t) {
  var n = Ar(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = rf;
Rt.prototype.delete = af;
Rt.prototype.get = sf;
Rt.prototype.has = lf;
Rt.prototype.set = uf;
var cf = "Expected a function";
function Ro(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(cf);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Ro.Cache || Rt)(), n;
}
Ro.Cache = Rt;
var ff = 500;
function df(e) {
  var t = Ro(e, function(r) {
    return n.size === ff && n.clear(), r;
  }), n = t.cache;
  return t;
}
var pf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vf = /\\(\\)?/g, gf = df(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pf, function(n, r, o, a) {
    t.push(o ? a.replace(vf, "$1") : r || n);
  }), t;
});
const hf = gf;
function mf(e) {
  return e == null ? "" : ki(e);
}
function Lo(e, t) {
  return ut(e) ? e : Mo(e, t) ? [e] : hf(mf(e));
}
var yf = 1 / 0;
function Zn(e) {
  if (typeof e == "string" || Tr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yf ? "-0" : t;
}
function Ui(e, t) {
  t = Lo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Zn(t[n++])];
  return n && n == r ? e : void 0;
}
function Le(e, t, n) {
  var r = e == null ? void 0 : Ui(e, t);
  return r === void 0 ? n : r;
}
function Gi(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var bf = Ki(Object.getPrototypeOf, Object);
const Yi = bf;
function so() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ut(e) ? e : [e];
}
function wf() {
  this.__data__ = new Mt(), this.size = 0;
}
function Sf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Of(e) {
  return this.__data__.get(e);
}
function Ef(e) {
  return this.__data__.has(e);
}
var Tf = 200;
function _f(e, t) {
  var n = this.__data__;
  if (n instanceof Mt) {
    var r = n.__data__;
    if (!zn || r.length < Tf - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Rt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function St(e) {
  var t = this.__data__ = new Mt(e);
  this.size = t.size;
}
St.prototype.clear = wf;
St.prototype.delete = Sf;
St.prototype.get = Of;
St.prototype.has = Ef;
St.prototype.set = _f;
function $f(e, t) {
  return e && _r(t, $r(t), e);
}
function Cf(e, t) {
  return e && _r(t, Fo(t), e);
}
var Zi = typeof exports == "object" && exports && !exports.nodeType && exports, $a = Zi && typeof module == "object" && module && !module.nodeType && module, Af = $a && $a.exports === Zi, Ca = Af ? ft.Buffer : void 0, Aa = Ca ? Ca.allocUnsafe : void 0;
function Pf(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Aa ? Aa(n) : new e.constructor(n);
  return e.copy(r), r;
}
function If(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function Qi() {
  return [];
}
var xf = Object.prototype, Ff = xf.propertyIsEnumerable, Pa = Object.getOwnPropertySymbols, Mf = Pa ? function(e) {
  return e == null ? [] : (e = Object(e), If(Pa(e), function(t) {
    return Ff.call(e, t);
  }));
} : Qi;
const ko = Mf;
function Rf(e, t) {
  return _r(e, ko(e), t);
}
var Lf = Object.getOwnPropertySymbols, kf = Lf ? function(e) {
  for (var t = []; e; )
    Gi(t, ko(e)), e = Yi(e);
  return t;
} : Qi;
const Ji = kf;
function Nf(e, t) {
  return _r(e, Ji(e), t);
}
function Xi(e, t, n) {
  var r = t(e);
  return ut(e) ? r : Gi(r, n(e));
}
function lo(e) {
  return Xi(e, $r, ko);
}
function Bf(e) {
  return Xi(e, Fo, Ji);
}
var jf = on(ft, "DataView");
const uo = jf;
var Df = on(ft, "Promise");
const co = Df;
var zf = on(ft, "Set");
const fo = zf;
var Ia = "[object Map]", Hf = "[object Object]", xa = "[object Promise]", Fa = "[object Set]", Ma = "[object WeakMap]", Ra = "[object DataView]", qf = rn(uo), Vf = rn(zn), Wf = rn(co), Kf = rn(fo), Uf = rn(io), Yt = On;
(uo && Yt(new uo(new ArrayBuffer(1))) != Ra || zn && Yt(new zn()) != Ia || co && Yt(co.resolve()) != xa || fo && Yt(new fo()) != Fa || io && Yt(new io()) != Ma) && (Yt = function(e) {
  var t = On(e), n = t == Hf ? e.constructor : void 0, r = n ? rn(n) : "";
  if (r)
    switch (r) {
      case qf:
        return Ra;
      case Vf:
        return Ia;
      case Wf:
        return xa;
      case Kf:
        return Fa;
      case Uf:
        return Ma;
    }
  return t;
});
const Hn = Yt;
var Gf = Object.prototype, Yf = Gf.hasOwnProperty;
function Zf(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Yf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Qf = ft.Uint8Array;
const wr = Qf;
function No(e) {
  var t = new e.constructor(e.byteLength);
  return new wr(t).set(new wr(e)), t;
}
function Jf(e, t) {
  var n = t ? No(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Xf = /\w*$/;
function ed(e) {
  var t = new e.constructor(e.source, Xf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var La = Et ? Et.prototype : void 0, ka = La ? La.valueOf : void 0;
function td(e) {
  return ka ? Object(ka.call(e)) : {};
}
function nd(e, t) {
  var n = t ? No(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var rd = "[object Boolean]", od = "[object Date]", ad = "[object Map]", id = "[object Number]", sd = "[object RegExp]", ld = "[object Set]", ud = "[object String]", cd = "[object Symbol]", fd = "[object ArrayBuffer]", dd = "[object DataView]", pd = "[object Float32Array]", vd = "[object Float64Array]", gd = "[object Int8Array]", hd = "[object Int16Array]", md = "[object Int32Array]", yd = "[object Uint8Array]", bd = "[object Uint8ClampedArray]", wd = "[object Uint16Array]", Sd = "[object Uint32Array]";
function Od(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case fd:
      return No(e);
    case rd:
    case od:
      return new r(+e);
    case dd:
      return Jf(e, n);
    case pd:
    case vd:
    case gd:
    case hd:
    case md:
    case yd:
    case bd:
    case wd:
    case Sd:
      return nd(e, n);
    case ad:
      return new r();
    case id:
    case ud:
      return new r(e);
    case sd:
      return ed(e);
    case ld:
      return new r();
    case cd:
      return td(e);
  }
}
function Ed(e) {
  return typeof e.constructor == "function" && !Io(e) ? Iu(Yi(e)) : {};
}
var Td = "[object Map]";
function _d(e) {
  return qt(e) && Hn(e) == Td;
}
var Na = pn && pn.isMap, $d = Na ? xo(Na) : _d;
const Cd = $d;
var Ad = "[object Set]";
function Pd(e) {
  return qt(e) && Hn(e) == Ad;
}
var Ba = pn && pn.isSet, Id = Ba ? xo(Ba) : Pd;
const xd = Id;
var Fd = 1, Md = 2, Rd = 4, es = "[object Arguments]", Ld = "[object Array]", kd = "[object Boolean]", Nd = "[object Date]", Bd = "[object Error]", ts = "[object Function]", jd = "[object GeneratorFunction]", Dd = "[object Map]", zd = "[object Number]", ns = "[object Object]", Hd = "[object RegExp]", qd = "[object Set]", Vd = "[object String]", Wd = "[object Symbol]", Kd = "[object WeakMap]", Ud = "[object ArrayBuffer]", Gd = "[object DataView]", Yd = "[object Float32Array]", Zd = "[object Float64Array]", Qd = "[object Int8Array]", Jd = "[object Int16Array]", Xd = "[object Int32Array]", ep = "[object Uint8Array]", tp = "[object Uint8ClampedArray]", np = "[object Uint16Array]", rp = "[object Uint32Array]", ce = {};
ce[es] = ce[Ld] = ce[Ud] = ce[Gd] = ce[kd] = ce[Nd] = ce[Yd] = ce[Zd] = ce[Qd] = ce[Jd] = ce[Xd] = ce[Dd] = ce[zd] = ce[ns] = ce[Hd] = ce[qd] = ce[Vd] = ce[Wd] = ce[ep] = ce[tp] = ce[np] = ce[rp] = !0;
ce[Bd] = ce[ts] = ce[Kd] = !1;
function dr(e, t, n, r, o, a) {
  var i, s = t & Fd, l = t & Md, c = t & Rd;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!ct(e))
    return e;
  var d = ut(e);
  if (d) {
    if (i = Zf(e), !s)
      return xu(e, i);
  } else {
    var p = Hn(e), m = p == ts || p == jd;
    if (br(e))
      return Pf(e, s);
    if (p == ns || p == es || m && !o) {
      if (i = l || m ? {} : Ed(e), !s)
        return l ? Nf(e, Cf(i, e)) : Rf(e, $f(i, e));
    } else {
      if (!ce[p])
        return o ? e : {};
      i = Od(e, p, s);
    }
  }
  a || (a = new St());
  var y = a.get(e);
  if (y)
    return y;
  a.set(e, i), xd(e) ? e.forEach(function(h) {
    i.add(dr(h, t, n, h, e, a));
  }) : Cd(e) && e.forEach(function(h, v) {
    i.set(v, dr(h, t, n, v, e, a));
  });
  var g = c ? l ? Bf : lo : l ? Fo : $r, u = d ? void 0 : g(e);
  return Mu(u || e, function(h, v) {
    u && (v = h, h = e[v]), Ao(i, v, dr(h, t, n, v, e, a));
  }), i;
}
var op = 4;
function ja(e) {
  return dr(e, op);
}
var ap = "__lodash_hash_undefined__";
function ip(e) {
  return this.__data__.set(e, ap), this;
}
function sp(e) {
  return this.__data__.has(e);
}
function Sr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Rt(); ++t < n; )
    this.add(e[t]);
}
Sr.prototype.add = Sr.prototype.push = ip;
Sr.prototype.has = sp;
function lp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function up(e, t) {
  return e.has(t);
}
var cp = 1, fp = 2;
function rs(e, t, n, r, o, a) {
  var i = n & cp, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, m = !0, y = n & fp ? new Sr() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < s; ) {
    var g = e[p], u = t[p];
    if (r)
      var h = i ? r(u, g, p, t, e, a) : r(g, u, p, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!lp(t, function(v, w) {
        if (!up(y, w) && (g === v || o(g, v, n, r, a)))
          return y.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === u || o(g, u, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function dp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function pp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var vp = 1, gp = 2, hp = "[object Boolean]", mp = "[object Date]", yp = "[object Error]", bp = "[object Map]", wp = "[object Number]", Sp = "[object RegExp]", Op = "[object Set]", Ep = "[object String]", Tp = "[object Symbol]", _p = "[object ArrayBuffer]", $p = "[object DataView]", Da = Et ? Et.prototype : void 0, Ur = Da ? Da.valueOf : void 0;
function Cp(e, t, n, r, o, a, i) {
  switch (n) {
    case $p:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _p:
      return !(e.byteLength != t.byteLength || !a(new wr(e), new wr(t)));
    case hp:
    case mp:
    case wp:
      return Co(+e, +t);
    case yp:
      return e.name == t.name && e.message == t.message;
    case Sp:
    case Ep:
      return e == t + "";
    case bp:
      var s = dp;
    case Op:
      var l = r & vp;
      if (s || (s = pp), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      r |= gp, i.set(e, t);
      var d = rs(s(e), s(t), r, o, a, i);
      return i.delete(e), d;
    case Tp:
      if (Ur)
        return Ur.call(e) == Ur.call(t);
  }
  return !1;
}
var Ap = 1, Pp = Object.prototype, Ip = Pp.hasOwnProperty;
function xp(e, t, n, r, o, a) {
  var i = n & Ap, s = lo(e), l = s.length, c = lo(t), d = c.length;
  if (l != d && !i)
    return !1;
  for (var p = l; p--; ) {
    var m = s[p];
    if (!(i ? m in t : Ip.call(t, m)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var u = !0;
  a.set(e, t), a.set(t, e);
  for (var h = i; ++p < l; ) {
    m = s[p];
    var v = e[m], w = t[m];
    if (r)
      var E = i ? r(w, v, m, t, e, a) : r(v, w, m, e, t, a);
    if (!(E === void 0 ? v === w || o(v, w, n, r, a) : E)) {
      u = !1;
      break;
    }
    h || (h = m == "constructor");
  }
  if (u && !h) {
    var T = e.constructor, C = t.constructor;
    T != C && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof C == "function" && C instanceof C) && (u = !1);
  }
  return a.delete(e), a.delete(t), u;
}
var Fp = 1, za = "[object Arguments]", Ha = "[object Array]", rr = "[object Object]", Mp = Object.prototype, qa = Mp.hasOwnProperty;
function Rp(e, t, n, r, o, a) {
  var i = ut(e), s = ut(t), l = i ? Ha : Hn(e), c = s ? Ha : Hn(t);
  l = l == za ? rr : l, c = c == za ? rr : c;
  var d = l == rr, p = c == rr, m = l == c;
  if (m && br(e)) {
    if (!br(t))
      return !1;
    i = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new St()), i || Vi(e) ? rs(e, t, n, r, o, a) : Cp(e, t, l, n, r, o, a);
  if (!(n & Fp)) {
    var y = d && qa.call(e, "__wrapped__"), g = p && qa.call(t, "__wrapped__");
    if (y || g) {
      var u = y ? e.value() : e, h = g ? t.value() : t;
      return a || (a = new St()), o(u, h, n, r, a);
    }
  }
  return m ? (a || (a = new St()), xp(e, t, n, r, o, a)) : !1;
}
function Pr(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !qt(e) && !qt(t) ? e !== e && t !== t : Rp(e, t, n, r, Pr, o);
}
var Lp = 1, kp = 2;
function Np(e, t, n, r) {
  var o = n.length, a = o, i = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], c = e[l], d = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var p = new St();
      if (r)
        var m = r(c, d, l, e, t, p);
      if (!(m === void 0 ? Pr(d, c, Lp | kp, r, p) : m))
        return !1;
    }
  }
  return !0;
}
function os(e) {
  return e === e && !ct(e);
}
function Bp(e) {
  for (var t = $r(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, os(o)];
  }
  return t;
}
function as(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function jp(e) {
  var t = Bp(e);
  return t.length == 1 && t[0][2] ? as(t[0][0], t[0][1]) : function(n) {
    return n === e || Np(n, e, t);
  };
}
function Dp(e, t) {
  return e != null && t in Object(e);
}
function zp(e, t, n) {
  t = Lo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = Zn(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Po(o) && $o(i, o) && (ut(e) || zi(e)));
}
function Hp(e, t) {
  return e != null && zp(e, t, Dp);
}
var qp = 1, Vp = 2;
function Wp(e, t) {
  return Mo(e) && os(t) ? as(Zn(e), t) : function(n) {
    var r = Le(n, e);
    return r === void 0 && r === t ? Hp(n, e) : Pr(t, r, qp | Vp);
  };
}
function Kp(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Up(e) {
  return function(t) {
    return Ui(t, e);
  };
}
function Gp(e) {
  return Mo(e) ? Kp(Zn(e)) : Up(e);
}
function Yp(e) {
  return typeof e == "function" ? e : e == null ? cu : typeof e == "object" ? ut(e) ? Wp(e[0], e[1]) : jp(e) : Gp(e);
}
var Zp = function() {
  return ft.Date.now();
};
const Gr = Zp;
var Qp = "Expected a function", Jp = Math.max, Xp = Math.min;
function Va(e, t, n) {
  var r, o, a, i, s, l, c = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Qp);
  t = ao(t) || 0, ct(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? Jp(ao(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(_) {
    var O = r, I = o;
    return r = o = void 0, c = _, i = e.apply(I, O), i;
  }
  function g(_) {
    return c = _, s = setTimeout(v, t), d ? y(_) : i;
  }
  function u(_) {
    var O = _ - l, I = _ - c, D = t - O;
    return p ? Xp(D, a - I) : D;
  }
  function h(_) {
    var O = _ - l, I = _ - c;
    return l === void 0 || O >= t || O < 0 || p && I >= a;
  }
  function v() {
    var _ = Gr();
    if (h(_))
      return w(_);
    s = setTimeout(v, u(_));
  }
  function w(_) {
    return s = void 0, m && r ? y(_) : (r = o = void 0, i);
  }
  function E() {
    s !== void 0 && clearTimeout(s), c = 0, r = l = o = s = void 0;
  }
  function T() {
    return s === void 0 ? i : w(Gr());
  }
  function C() {
    var _ = Gr(), O = h(_);
    if (r = arguments, o = this, l = _, O) {
      if (s === void 0)
        return g(l);
      if (p)
        return clearTimeout(s), s = setTimeout(v, t), y(l);
    }
    return s === void 0 && (s = setTimeout(v, t)), i;
  }
  return C.cancel = E, C.flush = T, C;
}
var ev = Math.max, tv = Math.min;
function nv(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return n !== void 0 && (o = uu(n), o = n < 0 ? ev(r + o, 0) : tv(o, r - 1)), Ru(e, Yp(t), o, !0);
}
function Or(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Wa(e, t) {
  return Pr(e, t);
}
function Ir(e) {
  return e == null;
}
function rv(e) {
  return e === void 0;
}
function ov(e, t, n, r) {
  if (!ct(e))
    return e;
  t = Lo(t, e);
  for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a; ) {
    var l = Zn(t[o]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != i) {
      var d = s[l];
      c = r ? r(d, l, s) : void 0, c === void 0 && (c = ct(d) ? d : $o(t[o + 1]) ? [] : {});
    }
    Ao(s, l, c), s = s[l];
  }
  return e;
}
function av(e, t, n) {
  return e == null ? e : ov(e, t, n);
}
const is = (e) => e === void 0, xr = (e) => typeof e == "boolean", qe = (e) => typeof e == "number", qn = (e) => typeof Element > "u" ? !1 : e instanceof Element, iv = (e) => Ue(e) ? !Number.isNaN(Number(e)) : !1, sv = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Yr = (e, t, n) => ({
  get value() {
    return Le(e, t, n);
  },
  set value(r) {
    av(e, t, r);
  }
});
class ss extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ls(e, t) {
  throw new ss(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ue(e) ? new ss(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const lv = "utils/dom/style";
function Vn(e, t = "px") {
  if (!e)
    return "";
  if (qe(e) || iv(e))
    return `${e}${t}`;
  if (Ue(e))
    return e;
  Se(lv, "binding value must be a string or number");
}
function uv(e, t) {
  if (!Ae)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((l, c) => l + c.offsetTop, 0), a = o + t.offsetHeight, i = e.scrollTop, s = i + e.clientHeight;
  o < i ? e.scrollTop = o : a > s && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var an = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, cv = {
  name: "ArrowDown"
}, fv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), pv = [
  dv
];
function vv(e, t, n, r, o, a) {
  return A(), z("svg", fv, pv);
}
var gv = /* @__PURE__ */ an(cv, [["render", vv], ["__file", "arrow-down.vue"]]), hv = {
  name: "CircleCheck"
}, mv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), bv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), wv = [
  yv,
  bv
];
function Sv(e, t, n, r, o, a) {
  return A(), z("svg", mv, wv);
}
var Ov = /* @__PURE__ */ an(hv, [["render", Sv], ["__file", "circle-check.vue"]]), Ev = {
  name: "CircleClose"
}, Tv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _v = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), $v = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Cv = [
  _v,
  $v
];
function Av(e, t, n, r, o, a) {
  return A(), z("svg", Tv, Cv);
}
var Bo = /* @__PURE__ */ an(Ev, [["render", Av], ["__file", "circle-close.vue"]]), Pv = {
  name: "Close"
}, Iv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Fv = [
  xv
];
function Mv(e, t, n, r, o, a) {
  return A(), z("svg", Iv, Fv);
}
var Ka = /* @__PURE__ */ an(Pv, [["render", Mv], ["__file", "close.vue"]]), Rv = {
  name: "Hide"
}, Lv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Nv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Bv = [
  kv,
  Nv
];
function jv(e, t, n, r, o, a) {
  return A(), z("svg", Lv, Bv);
}
var Dv = /* @__PURE__ */ an(Rv, [["render", jv], ["__file", "hide.vue"]]), zv = {
  name: "Loading"
}, Hv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Vv = [
  qv
];
function Wv(e, t, n, r, o, a) {
  return A(), z("svg", Hv, Vv);
}
var us = /* @__PURE__ */ an(zv, [["render", Wv], ["__file", "loading.vue"]]), Kv = {
  name: "View"
}, Uv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gv = /* @__PURE__ */ Z(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Yv = [
  Gv
];
function Zv(e, t, n, r, o, a) {
  return A(), z("svg", Uv, Yv);
}
var Qv = /* @__PURE__ */ an(Kv, [["render", Zv], ["__file", "view.vue"]]);
const cs = "__epPropKey", Q = (e) => e, Jv = (e) => xt(e) && !!e[cs], Fr = (e, t) => {
  if (!xt(e) || Jv(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: i } = e, l = {
    type: a,
    required: !!r,
    validator: n || i ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), pa(e, "default") && p.push(o), d || (d = p.includes(c))), i && (d || (d = i(c))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        el(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [cs]: !0
  };
  return pa(e, "default") && (l.default = o), l;
}, me = (e) => Or(Object.entries(e).map(([t, n]) => [
  t,
  Fr(n, t)
])), vn = Q([
  String,
  Object,
  Function
]), fs = {
  validating: us,
  success: Ov,
  error: Bo
}, dt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Mr = (e) => (e.install = jn, e), gn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, it = "update:modelValue", ds = "change", Qn = ["", "default", "small", "large"], Xv = {
  large: 40,
  default: 32,
  small: 24
}, eg = (e) => Xv[e || "default"], tg = (e) => ["", ...Qn].includes(e), ps = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), cn = (e) => e, ng = ["class", "style"], rg = /^on[A-Z]/, og = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = S(() => ((n == null ? void 0 : n.value) || []).concat(ng)), o = Qe();
  return o ? S(() => {
    var a;
    return Or(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([i]) => !r.value.includes(i) && !(t && rg.test(i))));
  }) : (Se("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), S(() => ({})));
}, vs = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, i) => {
  K(() => f(i), (s) => {
    s && Se(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
};
var ag = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const ig = (e) => (t, n) => sg(t, n, f(e)), sg = (e, t, n) => Le(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
}), lg = (e) => {
  const t = S(() => f(e).name), n = tl(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: ig(e)
  };
}, ug = Symbol("localeContextKey"), jo = (e) => {
  const t = e || ie(ug, x());
  return lg(S(() => t.value || ag));
}, Zr = "el", cg = "is-", Gt = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, fg = Symbol("namespaceContextKey"), Do = (e) => {
  const t = e || (Qe() ? ie(fg, x(Zr)) : x(Zr));
  return S(() => f(t) || Zr);
}, pe = (e, t) => {
  const n = Do(t);
  return {
    namespace: n,
    b: (u = "") => Gt(n.value, e, u, "", ""),
    e: (u) => u ? Gt(n.value, e, "", u, "") : "",
    m: (u) => u ? Gt(n.value, e, "", "", u) : "",
    be: (u, h) => u && h ? Gt(n.value, e, u, h, "") : "",
    em: (u, h) => u && h ? Gt(n.value, e, "", u, h) : "",
    bm: (u, h) => u && h ? Gt(n.value, e, u, "", h) : "",
    bem: (u, h, v) => u && h && v ? Gt(n.value, e, u, h, v) : "",
    is: (u, ...h) => {
      const v = h.length >= 1 ? h[0] : !0;
      return u && v ? `${cg}${u}` : "";
    },
    cssVar: (u) => {
      const h = {};
      for (const v in u)
        u[v] && (h[`--${n.value}-${v}`] = u[v]);
      return h;
    },
    cssVarName: (u) => `--${n.value}-${u}`,
    cssVarBlock: (u) => {
      const h = {};
      for (const v in u)
        u[v] && (h[`--${n.value}-${e}-${v}`] = u[v]);
      return h;
    },
    cssVarBlockName: (u) => `--${n.value}-${e}-${u}`
  };
}, dg = Fr({
  type: Q(Boolean),
  default: null
}), pg = Fr({
  type: Q(Function)
}), gs = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: dg,
    [n]: pg
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const m = Qe(), { emit: y } = m, g = m.props, u = S(() => De(g[n])), h = S(() => g[e] === null), v = (O) => {
        i.value !== !0 && (i.value = !0, s && (s.value = O), De(d) && d(O));
      }, w = (O) => {
        i.value !== !1 && (i.value = !1, s && (s.value = O), De(p) && p(O));
      }, E = (O) => {
        if (g.disabled === !0 || De(c) && !c())
          return;
        const I = u.value && Ae;
        I && y(t, !0), (h.value || !I) && v(O);
      }, T = (O) => {
        if (g.disabled === !0 || !Ae)
          return;
        const I = u.value && Ae;
        I && y(t, !1), (h.value || !I) && w(O);
      }, C = (O) => {
        xr(O) && (g.disabled && O ? u.value && y(t, !1) : i.value !== O && (O ? v() : w()));
      }, _ = () => {
        i.value ? T() : E();
      };
      return K(() => g[e], C), l && m.appContext.config.globalProperties.$route !== void 0 && K(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && i.value && T();
      }), Pe(() => {
        C(g[e]);
      }), {
        hide: T,
        show: E,
        toggle: _,
        hasUpdateHandler: u
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
gs("modelValue");
const hs = (e) => {
  const t = Qe();
  return S(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var ke = "top", Ye = "bottom", Ze = "right", Ne = "left", zo = "auto", Jn = [ke, Ye, Ze, Ne], hn = "start", Wn = "end", vg = "clippingParents", ms = "viewport", xn = "popper", gg = "reference", Ua = Jn.reduce(function(e, t) {
  return e.concat([t + "-" + hn, t + "-" + Wn]);
}, []), Rr = [].concat(Jn, [zo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + hn, t + "-" + Wn]);
}, []), hg = "beforeRead", mg = "read", yg = "afterRead", bg = "beforeMain", wg = "main", Sg = "afterMain", Og = "beforeWrite", Eg = "write", Tg = "afterWrite", _g = [hg, mg, yg, bg, wg, Sg, Og, Eg, Tg];
function Tt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function mn(e) {
  var t = pt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ge(e) {
  var t = pt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ho(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = pt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $g(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Ge(a) || !Tt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Cg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Ge(o) || !Tt(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var ys = { name: "applyStyles", enabled: !0, phase: "write", fn: $g, effect: Cg, requires: ["computeStyles"] };
function Ot(e) {
  return e.split("-")[0];
}
var en = Math.max, Er = Math.min, yn = Math.round;
function bn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (Ge(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = yn(n.width) / i || 1), a > 0 && (o = yn(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function qo(e) {
  var t = bn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function bs(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ho(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ft(e) {
  return pt(e).getComputedStyle(e);
}
function Ag(e) {
  return ["table", "td", "th"].indexOf(Tt(e)) >= 0;
}
function Wt(e) {
  return ((mn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Lr(e) {
  return Tt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ho(e) ? e.host : null) || Wt(e);
}
function Ga(e) {
  return !Ge(e) || Ft(e).position === "fixed" ? null : e.offsetParent;
}
function Pg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Ge(e)) {
    var r = Ft(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Lr(e);
  for (Ho(o) && (o = o.host); Ge(o) && ["html", "body"].indexOf(Tt(o)) < 0; ) {
    var a = Ft(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Xn(e) {
  for (var t = pt(e), n = Ga(e); n && Ag(n) && Ft(n).position === "static"; )
    n = Ga(n);
  return n && (Tt(n) === "html" || Tt(n) === "body" && Ft(n).position === "static") ? t : n || Pg(e) || t;
}
function Vo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ln(e, t, n) {
  return en(e, Er(t, n));
}
function Ig(e, t, n) {
  var r = Ln(e, t, n);
  return r > n ? n : r;
}
function ws() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ss(e) {
  return Object.assign({}, ws(), e);
}
function Os(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var xg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ss(typeof e != "number" ? e : Os(e, Jn));
};
function Fg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = Ot(n.placement), l = Vo(s), c = [Ne, Ze].indexOf(s) >= 0, d = c ? "height" : "width";
  if (!(!a || !i)) {
    var p = xg(o.padding, n), m = qo(a), y = l === "y" ? ke : Ne, g = l === "y" ? Ye : Ze, u = n.rects.reference[d] + n.rects.reference[l] - i[l] - n.rects.popper[d], h = i[l] - n.rects.reference[l], v = Xn(a), w = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = u / 2 - h / 2, T = p[y], C = w - m[d] - p[g], _ = w / 2 - m[d] / 2 + E, O = Ln(T, _, C), I = l;
    n.modifiersData[r] = (t = {}, t[I] = O, t.centerOffset = O - _, t);
  }
}
function Mg(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !bs(t.elements.popper, o) || (t.elements.arrow = o));
}
var Rg = { name: "arrow", enabled: !0, phase: "main", fn: Fg, effect: Mg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function wn(e) {
  return e.split("-")[1];
}
var Lg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function kg(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: yn(t * o) / o || 0, y: yn(n * o) / o || 0 };
}
function Ya(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = i.x, y = m === void 0 ? 0 : m, g = i.y, u = g === void 0 ? 0 : g, h = typeof d == "function" ? d({ x: y, y: u }) : { x: y, y: u };
  y = h.x, u = h.y;
  var v = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), E = Ne, T = ke, C = window;
  if (c) {
    var _ = Xn(n), O = "clientHeight", I = "clientWidth";
    if (_ === pt(n) && (_ = Wt(n), Ft(_).position !== "static" && s === "absolute" && (O = "scrollHeight", I = "scrollWidth")), _ = _, o === ke || (o === Ne || o === Ze) && a === Wn) {
      T = Ye;
      var D = p && _ === C && C.visualViewport ? C.visualViewport.height : _[O];
      u -= D - r.height, u *= l ? 1 : -1;
    }
    if (o === Ne || (o === ke || o === Ye) && a === Wn) {
      E = Ze;
      var B = p && _ === C && C.visualViewport ? C.visualViewport.width : _[I];
      y -= B - r.width, y *= l ? 1 : -1;
    }
  }
  var H = Object.assign({ position: s }, c && Lg), L = d === !0 ? kg({ x: y, y: u }) : { x: y, y: u };
  if (y = L.x, u = L.y, l) {
    var Y;
    return Object.assign({}, H, (Y = {}, Y[T] = w ? "0" : "", Y[E] = v ? "0" : "", Y.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + u + "px)" : "translate3d(" + y + "px, " + u + "px, 0)", Y));
  }
  return Object.assign({}, H, (t = {}, t[T] = w ? u + "px" : "", t[E] = v ? y + "px" : "", t.transform = "", t));
}
function Ng(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, c = { placement: Ot(t.placement), variation: wn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ya(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ya(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Es = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ng, data: {} }, or = { passive: !0 };
function Bg(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, i = r.resize, s = i === void 0 ? !0 : i, l = pt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, or);
  }), s && l.addEventListener("resize", n.update, or), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, or);
    }), s && l.removeEventListener("resize", n.update, or);
  };
}
var Ts = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Bg, data: {} }, jg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jg[t];
  });
}
var Dg = { start: "end", end: "start" };
function Za(e) {
  return e.replace(/start|end/g, function(t) {
    return Dg[t];
  });
}
function Wo(e) {
  var t = pt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ko(e) {
  return bn(Wt(e)).left + Wo(e).scrollLeft;
}
function zg(e) {
  var t = pt(e), n = Wt(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, i = 0, s = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), { width: o, height: a, x: i + Ko(e), y: s };
}
function Hg(e) {
  var t, n = Wt(e), r = Wo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = en(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = en(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Ko(e), l = -r.scrollTop;
  return Ft(o || n).direction === "rtl" && (s += en(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function Uo(e) {
  var t = Ft(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function _s(e) {
  return ["html", "body", "#document"].indexOf(Tt(e)) >= 0 ? e.ownerDocument.body : Ge(e) && Uo(e) ? e : _s(Lr(e));
}
function kn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = _s(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = pt(r), i = o ? [a].concat(a.visualViewport || [], Uo(r) ? r : []) : r, s = t.concat(i);
  return o ? s : s.concat(kn(Lr(i)));
}
function po(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function qg(e) {
  var t = bn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Qa(e, t) {
  return t === ms ? po(zg(e)) : mn(t) ? qg(t) : po(Hg(Wt(e)));
}
function Vg(e) {
  var t = kn(Lr(e)), n = ["absolute", "fixed"].indexOf(Ft(e).position) >= 0, r = n && Ge(e) ? Xn(e) : e;
  return mn(r) ? t.filter(function(o) {
    return mn(o) && bs(o, r) && Tt(o) !== "body";
  }) : [];
}
function Wg(e, t, n) {
  var r = t === "clippingParents" ? Vg(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], i = o.reduce(function(s, l) {
    var c = Qa(e, l);
    return s.top = en(c.top, s.top), s.right = Er(c.right, s.right), s.bottom = Er(c.bottom, s.bottom), s.left = en(c.left, s.left), s;
  }, Qa(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function $s(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ot(r) : null, a = r ? wn(r) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case ke:
      l = { x: i, y: t.y - n.height };
      break;
    case Ye:
      l = { x: i, y: t.y + t.height };
      break;
    case Ze:
      l = { x: t.x + t.width, y: s };
      break;
    case Ne:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Vo(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case hn:
        l[c] = l[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Wn:
        l[c] = l[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Kn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, i = a === void 0 ? vg : a, s = n.rootBoundary, l = s === void 0 ? ms : s, c = n.elementContext, d = c === void 0 ? xn : c, p = n.altBoundary, m = p === void 0 ? !1 : p, y = n.padding, g = y === void 0 ? 0 : y, u = Ss(typeof g != "number" ? g : Os(g, Jn)), h = d === xn ? gg : xn, v = e.rects.popper, w = e.elements[m ? h : d], E = Wg(mn(w) ? w : w.contextElement || Wt(e.elements.popper), i, l), T = bn(e.elements.reference), C = $s({ reference: T, element: v, strategy: "absolute", placement: o }), _ = po(Object.assign({}, v, C)), O = d === xn ? _ : T, I = { top: E.top - O.top + u.top, bottom: O.bottom - E.bottom + u.bottom, left: E.left - O.left + u.left, right: O.right - E.right + u.right }, D = e.modifiersData.offset;
  if (d === xn && D) {
    var B = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [Ze, Ye].indexOf(H) >= 0 ? 1 : -1, Y = [ke, Ye].indexOf(H) >= 0 ? "y" : "x";
      I[H] += B[Y] * L;
    });
  }
  return I;
}
function Kg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Rr : l, d = wn(r), p = d ? s ? Ua : Ua.filter(function(g) {
    return wn(g) === d;
  }) : Jn, m = p.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(g, u) {
    return g[u] = Kn(e, { placement: u, boundary: o, rootBoundary: a, padding: i })[Ot(u)], g;
  }, {});
  return Object.keys(y).sort(function(g, u) {
    return y[g] - y[u];
  });
}
function Ug(e) {
  if (Ot(e) === zo)
    return [];
  var t = pr(e);
  return [Za(e), t, Za(t)];
}
function Gg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, u = n.allowedAutoPlacements, h = t.options.placement, v = Ot(h), w = v === h, E = l || (w || !g ? [pr(h)] : Ug(h)), T = [h].concat(E).reduce(function(xe, we) {
      return xe.concat(Ot(we) === zo ? Kg(t, { placement: we, boundary: d, rootBoundary: p, padding: c, flipVariations: g, allowedAutoPlacements: u }) : we);
    }, []), C = t.rects.reference, _ = t.rects.popper, O = /* @__PURE__ */ new Map(), I = !0, D = T[0], B = 0; B < T.length; B++) {
      var H = T[B], L = Ot(H), Y = wn(H) === hn, se = [ke, Ye].indexOf(L) >= 0, ae = se ? "width" : "height", te = Kn(t, { placement: H, boundary: d, rootBoundary: p, altBoundary: m, padding: c }), M = se ? Y ? Ze : Ne : Y ? Ye : ke;
      C[ae] > _[ae] && (M = pr(M));
      var ne = pr(M), re = [];
      if (a && re.push(te[L] <= 0), s && re.push(te[M] <= 0, te[ne] <= 0), re.every(function(xe) {
        return xe;
      })) {
        D = H, I = !1;
        break;
      }
      O.set(H, re);
    }
    if (I)
      for (var Ee = g ? 3 : 1, Ie = function(xe) {
        var we = T.find(function(Re) {
          var k = O.get(Re);
          if (k)
            return k.slice(0, xe).every(function(V) {
              return V;
            });
        });
        if (we)
          return D = we, "break";
      }, he = Ee; he > 0; he--) {
        var Te = Ie(he);
        if (Te === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
var Yg = { name: "flip", enabled: !0, phase: "main", fn: Gg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ja(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Xa(e) {
  return [ke, Ze, Ye, Ne].some(function(t) {
    return e[t] >= 0;
  });
}
function Zg(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Kn(t, { elementContext: "reference" }), s = Kn(t, { altBoundary: !0 }), l = Ja(i, r), c = Ja(s, o, a), d = Xa(l), p = Xa(c);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var Qg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zg };
function Jg(e, t, n) {
  var r = Ot(e), o = [Ne, ke].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ne, Ze].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function Xg(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, i = Rr.reduce(function(d, p) {
    return d[p] = Jg(p, t.rects, a), d;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i;
}
var eh = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Xg };
function th(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $s({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Cs = { name: "popperOffsets", enabled: !0, phase: "read", fn: th, data: {} };
function nh(e) {
  return e === "x" ? "y" : "x";
}
function rh(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, g = n.tetherOffset, u = g === void 0 ? 0 : g, h = Kn(t, { boundary: l, rootBoundary: c, padding: p, altBoundary: d }), v = Ot(t.placement), w = wn(t.placement), E = !w, T = Vo(v), C = nh(T), _ = t.modifiersData.popperOffsets, O = t.rects.reference, I = t.rects.popper, D = typeof u == "function" ? u(Object.assign({}, t.rects, { placement: t.placement })) : u, B = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = { x: 0, y: 0 };
  if (_) {
    if (a) {
      var Y, se = T === "y" ? ke : Ne, ae = T === "y" ? Ye : Ze, te = T === "y" ? "height" : "width", M = _[T], ne = M + h[se], re = M - h[ae], Ee = y ? -I[te] / 2 : 0, Ie = w === hn ? O[te] : I[te], he = w === hn ? -I[te] : -O[te], Te = t.elements.arrow, xe = y && Te ? qo(Te) : { width: 0, height: 0 }, we = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ws(), Re = we[se], k = we[ae], V = Ln(0, O[te], xe[te]), ve = E ? O[te] / 2 - Ee - V - Re - B.mainAxis : Ie - V - Re - B.mainAxis, oe = E ? -O[te] / 2 + Ee + V + k + B.mainAxis : he + V + k + B.mainAxis, le = t.elements.arrow && Xn(t.elements.arrow), _e = le ? T === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, vt = (Y = H == null ? void 0 : H[T]) != null ? Y : 0, gt = M + ve - vt - _e, _t = M + oe - vt, ht = Ln(y ? Er(ne, gt) : ne, M, y ? en(re, _t) : re);
      _[T] = ht, L[T] = ht - M;
    }
    if (s) {
      var mt, Xe = T === "x" ? ke : Ne, Kt = T === "x" ? Ye : Ze, Be = _[C], yt = C === "y" ? "height" : "width", et = Be + h[Xe], Lt = Be - h[Kt], bt = [ke, Ne].indexOf(v) !== -1, P = (mt = H == null ? void 0 : H[C]) != null ? mt : 0, N = bt ? et : Be - O[yt] - I[yt] - P + B.altAxis, ue = bt ? Be + O[yt] + I[yt] - P - B.altAxis : Lt, Ke = y && bt ? Ig(N, Be, ue) : Ln(y ? N : et, Be, y ? ue : Lt);
      _[C] = Ke, L[C] = Ke - Be;
    }
    t.modifiersData[r] = L;
  }
}
var oh = { name: "preventOverflow", enabled: !0, phase: "main", fn: rh, requiresIfExists: ["offset"] };
function ah(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ih(e) {
  return e === pt(e) || !Ge(e) ? Wo(e) : ah(e);
}
function sh(e) {
  var t = e.getBoundingClientRect(), n = yn(t.width) / e.offsetWidth || 1, r = yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function lh(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ge(t), o = Ge(t) && sh(t), a = Wt(t), i = bn(e, o), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Tt(t) !== "body" || Uo(a)) && (s = ih(t)), Ge(t) ? (l = bn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ko(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function uh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function ch(e) {
  var t = uh(e);
  return _g.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function fh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dh(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ei = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ti() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Go(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? ei : o;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ei, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: c, setOptions: function(u) {
      var h = typeof u == "function" ? u(c.options) : u;
      g(), c.options = Object.assign({}, a, c.options, h), c.scrollParents = { reference: mn(i) ? kn(i) : i.contextElement ? kn(i.contextElement) : [], popper: kn(s) };
      var v = ch(dh([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = v.filter(function(w) {
        return w.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var u = c.elements, h = u.reference, v = u.popper;
        if (ti(h, v)) {
          c.rects = { reference: lh(h, Xn(v), c.options.strategy === "fixed"), popper: qo(v) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
            return c.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var E = c.orderedModifiers[w], T = E.fn, C = E.options, _ = C === void 0 ? {} : C, O = E.name;
            typeof T == "function" && (c = T({ state: c, options: _, name: O, instance: m }) || c);
          }
        }
      }
    }, update: fh(function() {
      return new Promise(function(u) {
        m.forceUpdate(), u(c);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!ti(i, s))
      return m;
    m.setOptions(l).then(function(u) {
      !p && l.onFirstUpdate && l.onFirstUpdate(u);
    });
    function y() {
      c.orderedModifiers.forEach(function(u) {
        var h = u.name, v = u.options, w = v === void 0 ? {} : v, E = u.effect;
        if (typeof E == "function") {
          var T = E({ state: c, name: h, instance: m, options: w }), C = function() {
          };
          d.push(T || C);
        }
      });
    }
    function g() {
      d.forEach(function(u) {
        return u();
      }), d = [];
    }
    return m;
  };
}
Go();
var ph = [Ts, Cs, Es, ys];
Go({ defaultModifiers: ph });
var vh = [Ts, Cs, Es, ys, eh, Yg, oh, Rg, Qg], gh = Go({ defaultModifiers: vh });
const hh = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const c = mh(l);
      Object.assign(i.value, c);
    },
    requires: ["computeStyles"]
  }, o = S(() => {
    const { onFirstUpdate: l, placement: c, strategy: d, modifiers: p } = f(n);
    return {
      onFirstUpdate: l,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Jt(), i = x({
    styles: {
      popper: {
        position: f(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return K(o, (l) => {
    const c = f(a);
    c && c.setOptions(l);
  }, {
    deep: !0
  }), K([e, t], ([l, c]) => {
    s(), !(!l || !c) && (a.value = gh(l, c, f(o)));
  }), Je(() => {
    s();
  }), {
    state: S(() => {
      var l;
      return { ...((l = f(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: S(() => f(i).styles),
    attributes: S(() => f(i).attributes),
    update: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: S(() => f(a))
  };
};
function mh(e) {
  const t = Object.keys(e.elements), n = Or(t.map((o) => [o, e.styles[o] || {}])), r = Or(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function ni() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return To(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const vo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, yh = Symbol("elIdInjection"), As = () => Qe() ? ie(yh, vo) : vo, Yo = (e) => {
  const t = As();
  !Ae && t === vo && Se("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Do();
  return S(() => f(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let fn = [];
const ri = (e) => {
  const t = e;
  t.key === gn.esc && fn.forEach((n) => n(t));
}, bh = (e) => {
  Pe(() => {
    fn.length === 0 && document.addEventListener("keydown", ri), Ae && fn.push(e);
  }), Je(() => {
    fn = fn.filter((t) => t !== e), fn.length === 0 && Ae && document.removeEventListener("keydown", ri);
  });
};
let oi;
const Ps = () => {
  const e = Do(), t = As(), n = S(() => `${e.value}-popper-container-${t.prefix}`), r = S(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, wh = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Sh = () => {
  const { id: e, selector: t } = Ps();
  return nl(() => {
    Ae && (process.env.NODE_ENV === "test" || !oi && !document.body.querySelector(t.value)) && (oi = wh(e.value));
  }), {
    id: e,
    selector: t
  };
}, Oh = me({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), Eh = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = ni(), {
    registerTimeout: i,
    cancelTimeout: s
  } = ni();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const p = f(n);
        qe(p) && p > 0 && i(() => {
          o(d);
        }, p);
      }, f(e));
    },
    onClose: (d) => {
      s(), a(() => {
        o(d);
      }, f(t));
    }
  };
}, Is = Symbol("elForwardRef"), Th = (e) => {
  We(Is, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, _h = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ai = x(0), $h = 2e3, Ch = Symbol("zIndexContextKey"), Ah = (e) => {
  const t = e || (Qe() ? ie(Ch, void 0) : void 0), n = S(() => {
    const a = f(t);
    return qe(a) ? a : $h;
  }), r = S(() => n.value + ai.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (ai.value++, r.value)
  };
};
function Ph(e) {
  const t = x();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: i } = e.value;
    if (o == null || a == null)
      return;
    const s = i.slice(0, Math.max(0, o)), l = i.slice(Math.max(0, a));
    t.value = {
      selectionStart: o,
      selectionEnd: a,
      value: i,
      beforeTxt: s,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: i, selectionStart: s } = t.value;
    if (a == null || i == null || s == null)
      return;
    let l = o.length;
    if (o.endsWith(i))
      l = o.length - i.length;
    else if (o.startsWith(a))
      l = a.length;
    else {
      const c = a[s - 1], d = o.indexOf(c, s - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const xs = Fr({
  type: String,
  values: Qn,
  required: !1
}), Ih = Symbol("size"), xh = () => {
  const e = ie(Ih, {});
  return S(() => f(e.size) || "");
};
function Fh(e, { afterFocus: t, afterBlur: n } = {}) {
  const r = Qe(), { emit: o } = r, a = Jt(), i = x(!1), s = (d) => {
    i.value || (i.value = !0, o("focus", d), t == null || t());
  }, l = (d) => {
    var p;
    d.relatedTarget && ((p = a.value) != null && p.contains(d.relatedTarget)) || (i.value = !1, o("blur", d), n == null || n());
  }, c = () => {
    var d;
    (d = e.value) == null || d.focus();
  };
  return K(a, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), Xt(a, "click", c), {
    wrapperRef: a,
    isFocused: i,
    handleFocus: s,
    handleBlur: l
  };
}
const Mh = Symbol(), ii = x();
function Rh(e, t = void 0) {
  const n = Qe() ? ie(Mh, ii) : ii;
  return e ? S(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
var ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Lh = me({
  size: {
    type: Q([Number, String])
  },
  color: {
    type: String
  }
}), kh = q({
  name: "ElIcon",
  inheritAttrs: !1
}), Nh = /* @__PURE__ */ q({
  ...kh,
  props: Lh,
  setup(e) {
    const t = e, n = pe("icon"), r = S(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: is(o) ? void 0 : Vn(o),
        "--color": a
      };
    });
    return (o, a) => (A(), z("i", lt({
      class: f(n).b(),
      style: f(r)
    }, o.$attrs), [
      X(o.$slots, "default")
    ], 16));
  }
});
var Bh = /* @__PURE__ */ ge(Nh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const wt = dt(Bh), En = Symbol("formContextKey"), nn = Symbol("formItemContextKey"), Tn = (e, t = {}) => {
  const n = x(void 0), r = t.prop ? n : hs("size"), o = t.global ? n : xh(), a = t.form ? { size: void 0 } : ie(En, void 0), i = t.formItem ? { size: void 0 } : ie(nn, void 0);
  return S(() => r.value || f(e) || (i == null ? void 0 : i.size) || (a == null ? void 0 : a.size) || o.value || "");
}, Zo = (e) => {
  const t = hs("disabled"), n = ie(En, void 0);
  return S(() => t.value || f(e) || (n == null ? void 0 : n.disabled) || !1);
}, Qo = () => {
  const e = ie(En, void 0), t = ie(nn, void 0);
  return {
    form: e,
    formItem: t
  };
}, jh = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = x(!1)), r || (r = x(!1));
  const o = x();
  let a;
  const i = S(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Pe(() => {
    a = K([st(e, "id"), n], ([s, l]) => {
      const c = s ?? (l ? void 0 : Yo().value);
      c !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !l && c && t.addInputId(c)), o.value = c);
    }, { immediate: !0 });
  }), rl(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, Dh = me({
  size: {
    type: String,
    values: Qn
  },
  disabled: Boolean
}), zh = me({
  ...Dh,
  model: Object,
  rules: {
    type: Q(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
}), Hh = {
  validate: (e, t, n) => (Mi(e) || Ue(e)) && xr(t) && Ue(n)
}, qh = "ElForm";
function Vh() {
  const e = x([]), t = S(() => {
    if (!e.value.length)
      return "0";
    const a = Math.max(...e.value);
    return a ? `${a}px` : "";
  });
  function n(a) {
    const i = e.value.indexOf(a);
    return i === -1 && t.value === "0" && Se(qh, `unexpected width ${a}`), i;
  }
  function r(a, i) {
    if (a && i) {
      const s = n(i);
      e.value.splice(s, 1, a);
    } else
      a && e.value.push(a);
  }
  function o(a) {
    const i = n(a);
    i > -1 && e.value.splice(i, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: r,
    deregisterLabelWidth: o
  };
}
const ar = (e, t) => {
  const n = so(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, vr = "ElForm", Wh = q({
  name: vr
}), Kh = /* @__PURE__ */ q({
  ...Wh,
  props: zh,
  emits: Hh,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = [], a = Tn(), i = pe("form"), s = S(() => {
      const { labelPosition: w, inline: E } = r;
      return [
        i.b(),
        i.m(a.value || "default"),
        {
          [i.m(`label-${w}`)]: w,
          [i.m("inline")]: E
        }
      ];
    }), l = (w) => {
      o.push(w);
    }, c = (w) => {
      w.prop && o.splice(o.indexOf(w), 1);
    }, d = (w = []) => {
      if (!r.model) {
        Se(vr, "model is required for resetFields to work.");
        return;
      }
      ar(o, w).forEach((E) => E.resetField());
    }, p = (w = []) => {
      ar(o, w).forEach((E) => E.clearValidate());
    }, m = S(() => {
      const w = !!r.model;
      return w || Se(vr, "model is required for validate to work."), w;
    }), y = (w) => {
      if (o.length === 0)
        return [];
      const E = ar(o, w);
      return E.length ? E : (Se(vr, "please pass correct props!"), []);
    }, g = async (w) => h(void 0, w), u = async (w = []) => {
      if (!m.value)
        return !1;
      const E = y(w);
      if (E.length === 0)
        return !0;
      let T = {};
      for (const C of E)
        try {
          await C.validate("");
        } catch (_) {
          T = {
            ...T,
            ..._
          };
        }
      return Object.keys(T).length === 0 ? !0 : Promise.reject(T);
    }, h = async (w = [], E) => {
      const T = !De(E);
      try {
        const C = await u(w);
        return C === !0 && (E == null || E(C)), C;
      } catch (C) {
        if (C instanceof Error)
          throw C;
        const _ = C;
        return r.scrollToError && v(Object.keys(_)[0]), E == null || E(!1, _), T && Promise.reject(_);
      }
    }, v = (w) => {
      var E;
      const T = ar(o, w)[0];
      T && ((E = T.$el) == null || E.scrollIntoView(r.scrollIntoViewOptions));
    };
    return K(() => r.rules, () => {
      r.validateOnRuleChange && g().catch((w) => Se(w));
    }, { deep: !0 }), We(En, Vt({
      ...Gn(r),
      emit: n,
      resetFields: d,
      clearValidate: p,
      validateField: h,
      addField: l,
      removeField: c,
      ...Vh()
    })), t({
      validate: g,
      validateField: h,
      resetFields: d,
      clearValidate: p,
      scrollToField: v
    }), (w, E) => (A(), z("form", {
      class: R(f(s))
    }, [
      X(w.$slots, "default")
    ], 2));
  }
});
var Uh = /* @__PURE__ */ ge(Kh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
function Gh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Un(e, t);
}
function go(e) {
  return go = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, go(e);
}
function Un(e, t) {
  return Un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Un(e, t);
}
function Yh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e, t, n) {
  return Yh() ? gr = Reflect.construct.bind() : gr = function(o, a, i) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(o, s), c = new l();
    return i && Un(c, i.prototype), c;
  }, gr.apply(null, arguments);
}
function Zh(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ho(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ho = function(r) {
    if (r === null || !Zh(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return gr(r, arguments, go(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Un(o, r);
  }, ho(e);
}
var Qh = /%[sdj%]/g, Fs = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Fs = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function mo(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Ve(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(Qh, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function Jh(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ye(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Jh(t) && typeof e == "string" && !e);
}
function Xh(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, s || []), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function si(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], a) : n([]);
  }
  a([]);
}
function em(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var li = /* @__PURE__ */ function(e) {
  Gh(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ ho(Error));
function tm(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(m, y) {
      var g = function(v) {
        return r(v), v.length ? y(new li(v, mo(v))) : m(o);
      }, u = em(e);
      si(u, n, g);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, d = [], p = new Promise(function(m, y) {
    var g = function(h) {
      if (d.push.apply(d, h), c++, c === l)
        return r(d), d.length ? y(new li(d, mo(d))) : m(o);
    };
    s.length || (r(d), m(o)), s.forEach(function(u) {
      var h = e[u];
      i.indexOf(u) !== -1 ? si(h, n, g) : Xh(h, n, g);
    });
  });
  return p.catch(function(m) {
    return m;
  }), p;
}
function nm(e) {
  return !!(e && e.message !== void 0);
}
function rm(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function ui(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = rm(t, e.fullFields) : r = t[n.field || e.fullField], nm(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function ci(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Zt({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Ms = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || ye(n, i || t.type)) && o.push(Ve(a.messages.required, t.fullField));
}, om = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(Ve(a.messages.whitespace, t.fullField));
}, ir, am = function() {
  if (ir)
    return ir;
  var e = "[a-fA-F\\d:]", t = function(T) {
    return T && T.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), i = new RegExp("^" + n + "$"), s = new RegExp("^" + o + "$"), l = function(T) {
    return T && T.exact ? a : new RegExp("(?:" + t(T) + n + t(T) + ")|(?:" + t(T) + o + t(T) + ")", "g");
  };
  l.v4 = function(E) {
    return E && E.exact ? i : new RegExp("" + t(E) + n + t(E), "g");
  }, l.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + o + t(E), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, m = l.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", u = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', w = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + p + "|" + m + "|" + y + g + u + ")" + h + v;
  return ir = new RegExp("(?:^" + w + "$)", "i"), ir;
}, fi = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Fn = {
  integer: function(t) {
    return Fn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Fn.number(t) && !Fn.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Fn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(fi.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(am());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(fi.hex);
  }
}, im = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Ms(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Fn[s](n) || o.push(Ve(a.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && o.push(Ve(a.messages.types[s], t.fullField, t.type));
}, sm = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, p = null, m = typeof n == "number", y = typeof n == "string", g = Array.isArray(n);
  if (m ? p = "number" : y ? p = "string" : g && (p = "array"), !p)
    return !1;
  g && (d = n.length), y && (d = n.replace(c, "_").length), i ? d !== t.len && o.push(Ve(a.messages[p].len, t.fullField, t.len)) : s && !l && d < t.min ? o.push(Ve(a.messages[p].min, t.fullField, t.min)) : l && !s && d > t.max ? o.push(Ve(a.messages[p].max, t.fullField, t.max)) : s && l && (d < t.min || d > t.max) && o.push(Ve(a.messages[p].range, t.fullField, t.min, t.max));
}, ln = "enum", lm = function(t, n, r, o, a) {
  t[ln] = Array.isArray(t[ln]) ? t[ln] : [], t[ln].indexOf(n) === -1 && o.push(Ve(a.messages[ln], t.fullField, t[ln].join(", ")));
}, um = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(Ve(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(Ve(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, J = {
  required: Ms,
  whitespace: om,
  type: im,
  range: sm,
  enum: lm,
  pattern: um
}, cm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n, "string") && !t.required)
      return r();
    J.required(t, n, o, i, a, "string"), ye(n, "string") || (J.type(t, n, o, i, a), J.range(t, n, o, i, a), J.pattern(t, n, o, i, a), t.whitespace === !0 && J.whitespace(t, n, o, i, a));
  }
  r(i);
}, fm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && J.type(t, n, o, i, a);
  }
  r(i);
}, dm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && (J.type(t, n, o, i, a), J.range(t, n, o, i, a));
  }
  r(i);
}, pm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && J.type(t, n, o, i, a);
  }
  r(i);
}, vm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), ye(n) || J.type(t, n, o, i, a);
  }
  r(i);
}, gm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && (J.type(t, n, o, i, a), J.range(t, n, o, i, a));
  }
  r(i);
}, hm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && (J.type(t, n, o, i, a), J.range(t, n, o, i, a));
  }
  r(i);
}, mm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    J.required(t, n, o, i, a, "array"), n != null && (J.type(t, n, o, i, a), J.range(t, n, o, i, a));
  }
  r(i);
}, ym = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && J.type(t, n, o, i, a);
  }
  r(i);
}, bm = "enum", wm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a), n !== void 0 && J[bm](t, n, o, i, a);
  }
  r(i);
}, Sm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n, "string") && !t.required)
      return r();
    J.required(t, n, o, i, a), ye(n, "string") || J.pattern(t, n, o, i, a);
  }
  r(i);
}, Om = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n, "date") && !t.required)
      return r();
    if (J.required(t, n, o, i, a), !ye(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), J.type(t, l, o, i, a), l && J.range(t, l.getTime(), o, i, a);
    }
  }
  r(i);
}, Em = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : typeof n;
  J.required(t, n, o, i, a, s), r(i);
}, Qr = function(t, n, r, o, a) {
  var i = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ye(n, i) && !t.required)
      return r();
    J.required(t, n, o, s, a, i), ye(n, i) || J.type(t, n, o, s, a);
  }
  r(s);
}, Tm = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ye(n) && !t.required)
      return r();
    J.required(t, n, o, i, a);
  }
  r(i);
}, Nn = {
  string: cm,
  method: fm,
  number: dm,
  boolean: pm,
  regexp: vm,
  integer: gm,
  float: hm,
  array: mm,
  object: ym,
  enum: wm,
  pattern: Sm,
  date: Om,
  url: Qr,
  hex: Qr,
  email: Qr,
  required: Em,
  any: Tm
};
function yo() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var bo = yo(), er = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = bo, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var i = r[a];
      o.rules[a] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(r) {
    return r && (this._messages = ci(yo(), r)), this._messages;
  }, t.validate = function(r, o, a) {
    var i = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var s = r, l = o, c = a;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function d(u) {
      var h = [], v = {};
      function w(T) {
        if (Array.isArray(T)) {
          var C;
          h = (C = h).concat.apply(C, T);
        } else
          h.push(T);
      }
      for (var E = 0; E < u.length; E++)
        w(u[E]);
      h.length ? (v = mo(h), c(h, v)) : c(null, s);
    }
    if (l.messages) {
      var p = this.messages();
      p === bo && (p = yo()), ci(p, l.messages), l.messages = p;
    } else
      l.messages = this.messages();
    var m = {}, y = l.keys || Object.keys(this.rules);
    y.forEach(function(u) {
      var h = i.rules[u], v = s[u];
      h.forEach(function(w) {
        var E = w;
        typeof E.transform == "function" && (s === r && (s = Zt({}, s)), v = s[u] = E.transform(v)), typeof E == "function" ? E = {
          validator: E
        } : E = Zt({}, E), E.validator = i.getValidationMethod(E), E.validator && (E.field = u, E.fullField = E.fullField || u, E.type = i.getType(E), m[u] = m[u] || [], m[u].push({
          rule: E,
          value: v,
          source: s,
          field: u
        }));
      });
    });
    var g = {};
    return tm(m, l, function(u, h) {
      var v = u.rule, w = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      w = w && (v.required || !v.required && u.value), v.field = u.field;
      function E(_, O) {
        return Zt({}, O, {
          fullField: v.fullField + "." + _,
          fullFields: v.fullFields ? [].concat(v.fullFields, [_]) : [_]
        });
      }
      function T(_) {
        _ === void 0 && (_ = []);
        var O = Array.isArray(_) ? _ : [_];
        !l.suppressWarning && O.length && e.warning("async-validator:", O), O.length && v.message !== void 0 && (O = [].concat(v.message));
        var I = O.map(ui(v, s));
        if (l.first && I.length)
          return g[v.field] = 1, h(I);
        if (!w)
          h(I);
        else {
          if (v.required && !u.value)
            return v.message !== void 0 ? I = [].concat(v.message).map(ui(v, s)) : l.error && (I = [l.error(v, Ve(l.messages.required, v.field))]), h(I);
          var D = {};
          v.defaultField && Object.keys(u.value).map(function(L) {
            D[L] = v.defaultField;
          }), D = Zt({}, D, u.rule.fields);
          var B = {};
          Object.keys(D).forEach(function(L) {
            var Y = D[L], se = Array.isArray(Y) ? Y : [Y];
            B[L] = se.map(E.bind(null, L));
          });
          var H = new e(B);
          H.messages(l.messages), u.rule.options && (u.rule.options.messages = l.messages, u.rule.options.error = l.error), H.validate(u.value, u.rule.options || l, function(L) {
            var Y = [];
            I && I.length && Y.push.apply(Y, I), L && L.length && Y.push.apply(Y, L), h(Y.length ? Y : null);
          });
        }
      }
      var C;
      if (v.asyncValidator)
        C = v.asyncValidator(v, u.value, T, u.source, l);
      else if (v.validator) {
        try {
          C = v.validator(v, u.value, T, u.source, l);
        } catch (_) {
          console.error == null || console.error(_), l.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), T(_.message);
        }
        C === !0 ? T() : C === !1 ? T(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : C instanceof Array ? T(C) : C instanceof Error && T(C.message);
      }
      C && C.then && C.then(function() {
        return T();
      }, function(_) {
        return T(_);
      });
    }, function(u) {
      d(u);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Nn.hasOwnProperty(r.type))
      throw new Error(Ve("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? Nn.required : Nn[this.getType(r)] || void 0;
  }, e;
}();
er.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Nn[t] = n;
};
er.warning = Fs;
er.messages = bo;
er.validators = Nn;
const _m = [
  "",
  "error",
  "validating",
  "success"
], $m = me({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: Q([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: Q([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: _m
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: Qn
  }
}), di = "ElLabelWrap";
var Cm = q({
  name: di,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = ie(En, void 0), r = ie(nn);
    r || ls(di, "usage: <el-form-item><label-wrap /></el-form-item>");
    const o = pe("form"), a = x(), i = x(0), s = () => {
      var d;
      if ((d = a.value) != null && d.firstElementChild) {
        const p = window.getComputedStyle(a.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(p));
      } else
        return 0;
    }, l = (d = "update") => {
      fe(() => {
        t.default && e.isAutoWidth && (d === "update" ? i.value = s() : d === "remove" && (n == null || n.deregisterLabelWidth(i.value)));
      });
    }, c = () => l("update");
    return Pe(() => {
      c();
    }), Je(() => {
      l("remove");
    }), Ii(() => c()), K(i, (d, p) => {
      e.updateAll && (n == null || n.registerLabelWidth(d, p));
    }), Yn(S(() => {
      var d, p;
      return (p = (d = a.value) == null ? void 0 : d.firstElementChild) != null ? p : null;
    }), c), () => {
      var d, p;
      if (!t)
        return null;
      const {
        isAutoWidth: m
      } = e;
      if (m) {
        const y = n == null ? void 0 : n.autoLabelWidth, g = r == null ? void 0 : r.hasLabel, u = {};
        if (g && y && y !== "auto") {
          const h = Math.max(0, Number.parseInt(y, 10) - i.value), v = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          h && (u[v] = `${h}px`);
        }
        return ee("div", {
          ref: a,
          class: [o.be("item", "label-wrap")],
          style: u
        }, [(d = t.default) == null ? void 0 : d.call(t)]);
      } else
        return ee(ze, {
          ref: a
        }, [(p = t.default) == null ? void 0 : p.call(t)]);
    };
  }
});
const Am = ["role", "aria-labelledby"], Pm = q({
  name: "ElFormItem"
}), Im = /* @__PURE__ */ q({
  ...Pm,
  props: $m,
  setup(e, { expose: t }) {
    const n = e, r = Eo(), o = ie(En, void 0), a = ie(nn, void 0), i = Tn(void 0, { formItem: !1 }), s = pe("form-item"), l = Yo().value, c = x([]), d = x(""), p = Sl(d, 100), m = x(""), y = x();
    let g, u = !1;
    const h = S(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top")
        return {};
      const k = Vn(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return k ? { width: k } : {};
    }), v = S(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top" || o != null && o.inline)
        return {};
      if (!n.label && !n.labelWidth && D)
        return {};
      const k = Vn(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: k } : {};
    }), w = S(() => [
      s.b(),
      s.m(i.value),
      s.is("error", d.value === "error"),
      s.is("validating", d.value === "validating"),
      s.is("success", d.value === "success"),
      s.is("required", se.value || n.required),
      s.is("no-asterisk", o == null ? void 0 : o.hideRequiredAsterisk),
      (o == null ? void 0 : o.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: o == null ? void 0 : o.statusIcon }
    ]), E = S(() => xr(n.inlineMessage) ? n.inlineMessage : (o == null ? void 0 : o.inlineMessage) || !1), T = S(() => [
      s.e("error"),
      { [s.em("error", "inline")]: E.value }
    ]), C = S(() => n.prop ? Ue(n.prop) ? n.prop : n.prop.join(".") : ""), _ = S(() => !!(n.label || r.label)), O = S(() => n.for || c.value.length === 1 ? c.value[0] : void 0), I = S(() => !O.value && _.value), D = !!a, B = S(() => {
      const k = o == null ? void 0 : o.model;
      if (!(!k || !n.prop))
        return Yr(k, n.prop).value;
    }), H = S(() => {
      const { required: k } = n, V = [];
      n.rules && V.push(...so(n.rules));
      const ve = o == null ? void 0 : o.rules;
      if (ve && n.prop) {
        const oe = Yr(ve, n.prop).value;
        oe && V.push(...so(oe));
      }
      if (k !== void 0) {
        const oe = V.map((le, _e) => [le, _e]).filter(([le]) => Object.keys(le).includes("required"));
        if (oe.length > 0)
          for (const [le, _e] of oe)
            le.required !== k && (V[_e] = { ...le, required: k });
        else
          V.push({ required: k });
      }
      return V;
    }), L = S(() => H.value.length > 0), Y = (k) => H.value.filter((ve) => !ve.trigger || !k ? !0 : Array.isArray(ve.trigger) ? ve.trigger.includes(k) : ve.trigger === k).map(({ trigger: ve, ...oe }) => oe), se = S(() => H.value.some((k) => k.required)), ae = S(() => {
      var k;
      return p.value === "error" && n.showMessage && ((k = o == null ? void 0 : o.showMessage) != null ? k : !0);
    }), te = S(() => `${n.label || ""}${(o == null ? void 0 : o.labelSuffix) || ""}`), M = (k) => {
      d.value = k;
    }, ne = (k) => {
      var V, ve;
      const { errors: oe, fields: le } = k;
      (!oe || !le) && console.error(k), M("error"), m.value = oe ? (ve = (V = oe == null ? void 0 : oe[0]) == null ? void 0 : V.message) != null ? ve : `${n.prop} is required` : "", o == null || o.emit("validate", n.prop, !1, m.value);
    }, re = () => {
      M("success"), o == null || o.emit("validate", n.prop, !0, "");
    }, Ee = async (k) => {
      const V = C.value;
      return new er({
        [V]: k
      }).validate({ [V]: B.value }, { firstFields: !0 }).then(() => (re(), !0)).catch((oe) => (ne(oe), Promise.reject(oe)));
    }, Ie = async (k, V) => {
      if (u || !n.prop)
        return !1;
      const ve = De(V);
      if (!L.value)
        return V == null || V(!1), !1;
      const oe = Y(k);
      return oe.length === 0 ? (V == null || V(!0), !0) : (M("validating"), Ee(oe).then(() => (V == null || V(!0), !0)).catch((le) => {
        const { fields: _e } = le;
        return V == null || V(!1, _e), ve ? !1 : Promise.reject(_e);
      }));
    }, he = () => {
      M(""), m.value = "", u = !1;
    }, Te = async () => {
      const k = o == null ? void 0 : o.model;
      if (!k || !n.prop)
        return;
      const V = Yr(k, n.prop);
      u = !0, V.value = ja(g), await fe(), he(), u = !1;
    }, xe = (k) => {
      c.value.includes(k) || c.value.push(k);
    }, we = (k) => {
      c.value = c.value.filter((V) => V !== k);
    };
    K(() => n.error, (k) => {
      m.value = k || "", M(k ? "error" : "");
    }, { immediate: !0 }), K(() => n.validateStatus, (k) => M(k || ""));
    const Re = Vt({
      ...Gn(n),
      $el: y,
      size: i,
      validateState: d,
      labelId: l,
      inputIds: c,
      isGroup: I,
      hasLabel: _,
      addInputId: xe,
      removeInputId: we,
      resetField: Te,
      clearValidate: he,
      validate: Ie
    });
    return We(nn, Re), Pe(() => {
      n.prop && (o == null || o.addField(Re), g = ja(B.value));
    }), Je(() => {
      o == null || o.removeField(Re);
    }), t({
      size: i,
      validateMessage: m,
      validateState: d,
      validate: Ie,
      clearValidate: he,
      resetField: Te
    }), (k, V) => {
      var ve;
      return A(), z("div", {
        ref_key: "formItemRef",
        ref: y,
        class: R(f(w)),
        role: f(I) ? "group" : void 0,
        "aria-labelledby": f(I) ? f(l) : void 0
      }, [
        ee(f(Cm), {
          "is-auto-width": f(h).width === "auto",
          "update-all": ((ve = f(o)) == null ? void 0 : ve.labelWidth) === "auto"
        }, {
          default: j(() => [
            f(_) ? (A(), W(He(f(O) ? "label" : "div"), {
              key: 0,
              id: f(l),
              for: f(O),
              class: R(f(s).e("label")),
              style: be(f(h))
            }, {
              default: j(() => [
                X(k.$slots, "label", { label: f(te) }, () => [
                  ol(Me(f(te)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        Z("div", {
          class: R(f(s).e("content")),
          style: be(f(v))
        }, [
          X(k.$slots, "default"),
          ee(al, {
            name: `${f(s).namespace.value}-zoom-in-top`
          }, {
            default: j(() => [
              f(ae) ? X(k.$slots, "error", {
                key: 0,
                error: m.value
              }, () => [
                Z("div", {
                  class: R(f(T))
                }, Me(m.value), 3)
              ]) : G("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Am);
    };
  }
});
var Rs = /* @__PURE__ */ ge(Im, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const xm = dt(Uh, {
  FormItem: Rs
}), Fm = Mr(Rs);
let rt;
const Mm = `
  height:0 !important;
  visibility:hidden !important;
  ${Ml() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Rm = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Lm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Rm.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: o, boxSizing: n };
}
function pi(e, t = 1, n) {
  var r;
  rt || (rt = document.createElement("textarea"), document.body.appendChild(rt));
  const { paddingSize: o, borderSize: a, boxSizing: i, contextStyle: s } = Lm(e);
  rt.setAttribute("style", `${s};${Mm}`), rt.value = e.value || e.placeholder || "";
  let l = rt.scrollHeight;
  const c = {};
  i === "border-box" ? l = l + a : i === "content-box" && (l = l - o), rt.value = "";
  const d = rt.scrollHeight - o;
  if (qe(t)) {
    let p = d * t;
    i === "border-box" && (p = p + o + a), l = Math.max(p, l), c.minHeight = `${p}px`;
  }
  if (qe(n)) {
    let p = d * n;
    i === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return c.height = `${l}px`, (r = rt.parentNode) == null || r.removeChild(rt), rt = void 0, c;
}
const km = me({
  id: {
    type: String,
    default: void 0
  },
  size: xs,
  disabled: Boolean,
  modelValue: {
    type: Q([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Q([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: vn
  },
  prefixIcon: {
    type: vn
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Q([Object, Array, String]),
    default: () => cn({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), Nm = {
  [it]: (e) => Ue(e),
  input: (e) => Ue(e),
  change: (e) => Ue(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Bm = ["role"], jm = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], Dm = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], zm = q({
  name: "ElInput",
  inheritAttrs: !1
}), Hm = /* @__PURE__ */ q({
  ...zm,
  props: km,
  emits: Nm,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = il(), a = Eo(), i = S(() => {
      const P = {};
      return r.containerRole === "combobox" && (P["aria-haspopup"] = o["aria-haspopup"], P["aria-owns"] = o["aria-owns"], P["aria-expanded"] = o["aria-expanded"]), P;
    }), s = S(() => [
      r.type === "textarea" ? h.b() : u.b(),
      u.m(y.value),
      u.is("disabled", g.value),
      u.is("exceed", xe.value),
      {
        [u.b("group")]: a.prepend || a.append,
        [u.bm("group", "append")]: a.append,
        [u.bm("group", "prepend")]: a.prepend,
        [u.m("prefix")]: a.prefix || r.prefixIcon,
        [u.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [u.bm("suffix", "password-clear")]: Ee.value && Ie.value
      },
      o.class
    ]), l = S(() => [
      u.e("wrapper"),
      u.is("focus", B.value)
    ]), c = og({
      excludeKeys: S(() => Object.keys(i.value))
    }), { form: d, formItem: p } = Qo(), { inputId: m } = jh(r, {
      formItemContext: p
    }), y = Tn(), g = Zo(), u = pe("input"), h = pe("textarea"), v = Jt(), w = Jt(), E = x(!1), T = x(!1), C = x(!1), _ = x(), O = Jt(r.inputStyle), I = S(() => v.value || w.value), { wrapperRef: D, isFocused: B, handleFocus: H, handleBlur: L } = Fh(I, {
      afterBlur() {
        var P;
        r.validateEvent && ((P = p == null ? void 0 : p.validate) == null || P.call(p, "blur").catch((N) => Se(N)));
      }
    }), Y = S(() => {
      var P;
      return (P = d == null ? void 0 : d.statusIcon) != null ? P : !1;
    }), se = S(() => (p == null ? void 0 : p.validateState) || ""), ae = S(() => se.value && fs[se.value]), te = S(() => C.value ? Qv : Dv), M = S(() => [
      o.style,
      r.inputStyle
    ]), ne = S(() => [
      r.inputStyle,
      O.value,
      { resize: r.resize }
    ]), re = S(() => Ir(r.modelValue) ? "" : String(r.modelValue)), Ee = S(() => r.clearable && !g.value && !r.readonly && !!re.value && (B.value || E.value)), Ie = S(() => r.showPassword && !g.value && !r.readonly && !!re.value && (!!re.value || B.value)), he = S(() => r.showWordLimit && !!c.value.maxlength && (r.type === "text" || r.type === "textarea") && !g.value && !r.readonly && !r.showPassword), Te = S(() => re.value.length), xe = S(() => !!he.value && Te.value > Number(c.value.maxlength)), we = S(() => !!a.suffix || !!r.suffixIcon || Ee.value || r.showPassword || he.value || !!se.value && Y.value), [Re, k] = Ph(v);
    Yn(w, (P) => {
      if (oe(), !he.value || r.resize !== "both")
        return;
      const N = P[0], { width: ue } = N.contentRect;
      _.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const V = () => {
      const { type: P, autosize: N } = r;
      if (!(!Ae || P !== "textarea" || !w.value))
        if (N) {
          const ue = xt(N) ? N.minRows : void 0, Ke = xt(N) ? N.maxRows : void 0, kt = pi(w.value, ue, Ke);
          O.value = {
            overflowY: "hidden",
            ...kt
          }, fe(() => {
            w.value.offsetHeight, O.value = kt;
          });
        } else
          O.value = {
            minHeight: pi(w.value).minHeight
          };
    }, oe = ((P) => {
      let N = !1;
      return () => {
        var ue;
        if (N || !r.autosize)
          return;
        ((ue = w.value) == null ? void 0 : ue.offsetParent) === null || (P(), N = !0);
      };
    })(V), le = () => {
      const P = I.value, N = r.formatter ? r.formatter(re.value) : re.value;
      !P || P.value === N || (P.value = N);
    }, _e = async (P) => {
      Re();
      let { value: N } = P.target;
      if (r.formatter && (N = r.parser ? r.parser(N) : N), !T.value) {
        if (N === re.value) {
          le();
          return;
        }
        n(it, N), n("input", N), await fe(), le(), k();
      }
    }, vt = (P) => {
      n("change", P.target.value);
    }, gt = (P) => {
      n("compositionstart", P), T.value = !0;
    }, _t = (P) => {
      var N;
      n("compositionupdate", P);
      const ue = (N = P.target) == null ? void 0 : N.value, Ke = ue[ue.length - 1] || "";
      T.value = !ps(Ke);
    }, ht = (P) => {
      n("compositionend", P), T.value && (T.value = !1, _e(P));
    }, mt = () => {
      C.value = !C.value, Xe();
    }, Xe = async () => {
      var P;
      await fe(), (P = I.value) == null || P.focus();
    }, Kt = () => {
      var P;
      return (P = I.value) == null ? void 0 : P.blur();
    }, Be = (P) => {
      E.value = !1, n("mouseleave", P);
    }, yt = (P) => {
      E.value = !0, n("mouseenter", P);
    }, et = (P) => {
      n("keydown", P);
    }, Lt = () => {
      var P;
      (P = I.value) == null || P.select();
    }, bt = () => {
      n(it, ""), n("change", ""), n("clear"), n("input", "");
    };
    return K(() => r.modelValue, () => {
      var P;
      fe(() => V()), r.validateEvent && ((P = p == null ? void 0 : p.validate) == null || P.call(p, "change").catch((N) => Se(N)));
    }), K(re, () => le()), K(() => r.type, async () => {
      await fe(), le(), V();
    }), Pe(() => {
      !r.formatter && r.parser && Se("ElInput", "If you set the parser, you also need to set the formatter."), le(), fe(V);
    }), t({
      input: v,
      textarea: w,
      ref: I,
      textareaStyle: ne,
      autosize: st(r, "autosize"),
      focus: Xe,
      blur: Kt,
      select: Lt,
      clear: bt,
      resizeTextarea: V
    }), (P, N) => It((A(), z("div", lt(f(i), {
      class: f(s),
      style: f(M),
      role: P.containerRole,
      onMouseenter: yt,
      onMouseleave: Be
    }), [
      G(" input "),
      P.type !== "textarea" ? (A(), z(ze, { key: 0 }, [
        G(" prepend slot "),
        P.$slots.prepend ? (A(), z("div", {
          key: 0,
          class: R(f(u).be("group", "prepend"))
        }, [
          X(P.$slots, "prepend")
        ], 2)) : G("v-if", !0),
        Z("div", {
          ref_key: "wrapperRef",
          ref: D,
          class: R(f(l))
        }, [
          G(" prefix slot "),
          P.$slots.prefix || P.prefixIcon ? (A(), z("span", {
            key: 0,
            class: R(f(u).e("prefix"))
          }, [
            Z("span", {
              class: R(f(u).e("prefix-inner"))
            }, [
              X(P.$slots, "prefix"),
              P.prefixIcon ? (A(), W(f(wt), {
                key: 0,
                class: R(f(u).e("icon"))
              }, {
                default: j(() => [
                  (A(), W(He(P.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0),
          Z("input", lt({
            id: f(m),
            ref_key: "input",
            ref: v,
            class: f(u).e("inner")
          }, f(c), {
            type: P.showPassword ? C.value ? "text" : "password" : P.type,
            disabled: f(g),
            formatter: P.formatter,
            parser: P.parser,
            readonly: P.readonly,
            autocomplete: P.autocomplete,
            tabindex: P.tabindex,
            "aria-label": P.label,
            placeholder: P.placeholder,
            style: P.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: gt,
            onCompositionupdate: _t,
            onCompositionend: ht,
            onInput: _e,
            onFocus: N[0] || (N[0] = (...ue) => f(H) && f(H)(...ue)),
            onBlur: N[1] || (N[1] = (...ue) => f(L) && f(L)(...ue)),
            onChange: vt,
            onKeydown: et
          }), null, 16, jm),
          G(" suffix slot "),
          f(we) ? (A(), z("span", {
            key: 1,
            class: R(f(u).e("suffix"))
          }, [
            Z("span", {
              class: R(f(u).e("suffix-inner"))
            }, [
              !f(Ee) || !f(Ie) || !f(he) ? (A(), z(ze, { key: 0 }, [
                X(P.$slots, "suffix"),
                P.suffixIcon ? (A(), W(f(wt), {
                  key: 0,
                  class: R(f(u).e("icon"))
                }, {
                  default: j(() => [
                    (A(), W(He(P.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : G("v-if", !0)
              ], 64)) : G("v-if", !0),
              f(Ee) ? (A(), W(f(wt), {
                key: 1,
                class: R([f(u).e("icon"), f(u).e("clear")]),
                onMousedown: at(f(jn), ["prevent"]),
                onClick: bt
              }, {
                default: j(() => [
                  ee(f(Bo))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : G("v-if", !0),
              f(Ie) ? (A(), W(f(wt), {
                key: 2,
                class: R([f(u).e("icon"), f(u).e("password")]),
                onClick: mt
              }, {
                default: j(() => [
                  (A(), W(He(f(te))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              f(he) ? (A(), z("span", {
                key: 3,
                class: R(f(u).e("count"))
              }, [
                Z("span", {
                  class: R(f(u).e("count-inner"))
                }, Me(f(Te)) + " / " + Me(f(c).maxlength), 3)
              ], 2)) : G("v-if", !0),
              f(se) && f(ae) && f(Y) ? (A(), W(f(wt), {
                key: 4,
                class: R([
                  f(u).e("icon"),
                  f(u).e("validateIcon"),
                  f(u).is("loading", f(se) === "validating")
                ])
              }, {
                default: j(() => [
                  (A(), W(He(f(ae))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0)
        ], 2),
        G(" append slot "),
        P.$slots.append ? (A(), z("div", {
          key: 1,
          class: R(f(u).be("group", "append"))
        }, [
          X(P.$slots, "append")
        ], 2)) : G("v-if", !0)
      ], 64)) : (A(), z(ze, { key: 1 }, [
        G(" textarea "),
        Z("textarea", lt({
          id: f(m),
          ref_key: "textarea",
          ref: w,
          class: f(h).e("inner")
        }, f(c), {
          tabindex: P.tabindex,
          disabled: f(g),
          readonly: P.readonly,
          autocomplete: P.autocomplete,
          style: f(ne),
          "aria-label": P.label,
          placeholder: P.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: gt,
          onCompositionupdate: _t,
          onCompositionend: ht,
          onInput: _e,
          onFocus: N[2] || (N[2] = (...ue) => f(H) && f(H)(...ue)),
          onBlur: N[3] || (N[3] = (...ue) => f(L) && f(L)(...ue)),
          onChange: vt,
          onKeydown: et
        }), null, 16, Dm),
        f(he) ? (A(), z("span", {
          key: 0,
          style: be(_.value),
          class: R(f(u).e("count"))
        }, Me(f(Te)) + " / " + Me(f(c).maxlength), 7)) : G("v-if", !0)
      ], 64))
    ], 16, Bm)), [
      [Sn, P.type !== "hidden"]
    ]);
  }
});
var qm = /* @__PURE__ */ ge(Hm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Jo = dt(qm), dn = 4, Vm = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Wm = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ls = Symbol("scrollbarContextKey"), Km = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Um = "Thumb", Gm = /* @__PURE__ */ q({
  __name: "thumb",
  props: Km,
  setup(e) {
    const t = e, n = ie(Ls), r = pe("scrollbar");
    n || ls(Um, "can not inject scrollbar context");
    const o = x(), a = x(), i = x({}), s = x(!1);
    let l = !1, c = !1, d = Ae ? document.onselectstart : null;
    const p = S(() => Vm[t.vertical ? "vertical" : "horizontal"]), m = S(() => Wm({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = S(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (_) => {
      var O;
      if (_.stopPropagation(), _.ctrlKey || [1, 2].includes(_.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), h(_);
      const I = _.currentTarget;
      I && (i.value[p.value.axis] = I[p.value.offset] - (_[p.value.client] - I.getBoundingClientRect()[p.value.direction]));
    }, u = (_) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(_.target.getBoundingClientRect()[p.value.direction] - _[p.value.client]), I = a.value[p.value.offset] / 2, D = (O - I) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = D * n.wrapElement[p.value.scrollSize] / 100;
    }, h = (_) => {
      _.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, v = (_) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = i.value[p.value.axis];
      if (!O)
        return;
      const I = (o.value.getBoundingClientRect()[p.value.direction] - _[p.value.client]) * -1, D = a.value[p.value.offset] - O, B = (I - D) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, w = () => {
      l = !1, i.value[p.value.axis] = 0, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", w), C(), c && (s.value = !1);
    }, E = () => {
      c = !1, s.value = !!t.size;
    }, T = () => {
      c = !0, s.value = l;
    };
    Je(() => {
      C(), document.removeEventListener("mouseup", w);
    });
    const C = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Xt(st(n, "scrollbarElement"), "mousemove", E), Xt(st(n, "scrollbarElement"), "mouseleave", T), (_, O) => (A(), W(Bn, {
      name: f(r).b("fade"),
      persisted: ""
    }, {
      default: j(() => [
        It(Z("div", {
          ref_key: "instance",
          ref: o,
          class: R([f(r).e("bar"), f(r).is(f(p).key)]),
          onMousedown: u
        }, [
          Z("div", {
            ref_key: "thumb",
            ref: a,
            class: R(f(r).e("thumb")),
            style: be(f(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Sn, _.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var vi = /* @__PURE__ */ ge(Gm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Ym = me({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), Zm = /* @__PURE__ */ q({
  __name: "bar",
  props: Ym,
  setup(e, { expose: t }) {
    const n = e, r = x(0), o = x(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const s = i.offsetHeight - dn, l = i.offsetWidth - dn;
          o.value = i.scrollTop * 100 / s * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, s) => (A(), z(ze, null, [
      ee(vi, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ee(vi, {
        move: o.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Qm = /* @__PURE__ */ ge(Zm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Jm = me({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Q([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), Xm = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(qe)
}, wo = "ElScrollbar", e0 = q({
  name: wo
}), t0 = /* @__PURE__ */ q({
  ...e0,
  props: Jm,
  emits: Xm,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = pe("scrollbar");
    let a, i;
    const s = x(), l = x(), c = x(), d = x("0"), p = x("0"), m = x(), y = x(1), g = x(1), u = S(() => {
      const O = {};
      return r.height && (O.height = Vn(r.height)), r.maxHeight && (O.maxHeight = Vn(r.maxHeight)), [r.wrapStyle, O];
    }), h = S(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = S(() => [o.e("view"), r.viewClass]), w = () => {
      var O;
      l.value && ((O = m.value) == null || O.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function E(O, I) {
      xt(O) ? l.value.scrollTo(O) : qe(O) && qe(I) && l.value.scrollTo(O, I);
    }
    const T = (O) => {
      if (!qe(O)) {
        Se(wo, "value must be a number");
        return;
      }
      l.value.scrollTop = O;
    }, C = (O) => {
      if (!qe(O)) {
        Se(wo, "value must be a number");
        return;
      }
      l.value.scrollLeft = O;
    }, _ = () => {
      if (!l.value)
        return;
      const O = l.value.offsetHeight - dn, I = l.value.offsetWidth - dn, D = O ** 2 / l.value.scrollHeight, B = I ** 2 / l.value.scrollWidth, H = Math.max(D, r.minSize), L = Math.max(B, r.minSize);
      y.value = D / (O - D) / (H / (O - H)), g.value = B / (I - B) / (L / (I - L)), p.value = H + dn < O ? `${H}px` : "", d.value = L + dn < I ? `${L}px` : "";
    };
    return K(() => r.noresize, (O) => {
      O ? (a == null || a(), i == null || i()) : ({ stop: a } = Yn(c, _), i = Xt("resize", _));
    }, { immediate: !0 }), K(() => [r.maxHeight, r.height], () => {
      r.native || fe(() => {
        var O;
        _(), l.value && ((O = m.value) == null || O.handleScroll(l.value));
      });
    }), We(Ls, Vt({
      scrollbarElement: s,
      wrapElement: l
    })), Pe(() => {
      r.native || fe(() => {
        _();
      });
    }), Ii(() => _()), t({
      wrapRef: l,
      update: _,
      scrollTo: E,
      setScrollTop: T,
      setScrollLeft: C,
      handleScroll: w
    }), (O, I) => (A(), z("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: R(f(o).b())
    }, [
      Z("div", {
        ref_key: "wrapRef",
        ref: l,
        class: R(f(h)),
        style: be(f(u)),
        onScroll: w
      }, [
        (A(), W(He(O.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: R(f(v)),
          style: be(O.viewStyle)
        }, {
          default: j(() => [
            X(O.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      O.native ? G("v-if", !0) : (A(), W(Qm, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: p.value,
        width: d.value,
        always: O.always,
        "ratio-x": g.value,
        "ratio-y": y.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var n0 = /* @__PURE__ */ ge(t0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const r0 = dt(n0), Xo = Symbol("popper"), ks = Symbol("popperContent"), o0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ns = me({
  role: {
    type: String,
    values: o0,
    default: "tooltip"
  }
}), a0 = q({
  name: "ElPopper",
  inheritAttrs: !1
}), i0 = /* @__PURE__ */ q({
  ...a0,
  props: Ns,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), i = x(), s = S(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), We(Xo, l), (c, d) => X(c.$slots, "default");
  }
});
var s0 = /* @__PURE__ */ ge(i0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Bs = me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), l0 = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), u0 = /* @__PURE__ */ q({
  ...l0,
  props: Bs,
  setup(e, { expose: t }) {
    const n = e, r = pe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: i } = ie(ks, void 0);
    return K(() => n.arrowOffset, (s) => {
      o.value = s;
    }), Je(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (A(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: R(f(r).e("arrow")),
      style: be(f(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var c0 = /* @__PURE__ */ ge(u0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Jr = "ElOnlyChild", f0 = q({
  name: Jr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ie(Is), a = _h((r = o == null ? void 0 : o.setForwardRef) != null ? r : jn);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Se(Jr, "requires exact only one valid child."), null;
      const l = js(s);
      return l ? It(sl(l, n), [[a]]) : (Se(Jr, "no valid child node found"), null);
    };
  }
});
function js(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (xt(n))
      switch (n.type) {
        case ll:
          continue;
        case xi:
        case "svg":
          return gi(n);
        case ze:
          return js(n.children);
        default:
          return n;
      }
    return gi(n);
  }
  return null;
}
function gi(e) {
  const t = pe("only-child");
  return ee("span", {
    class: t.e("content")
  }, [e]);
}
const Ds = me({
  virtualRef: {
    type: Q(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Q(Function)
  },
  onMouseleave: {
    type: Q(Function)
  },
  onClick: {
    type: Q(Function)
  },
  onKeydown: {
    type: Q(Function)
  },
  onFocus: {
    type: Q(Function)
  },
  onBlur: {
    type: Q(Function)
  },
  onContextmenu: {
    type: Q(Function)
  },
  id: String,
  open: Boolean
}), d0 = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), p0 = /* @__PURE__ */ q({
  ...d0,
  props: Ds,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ie(Xo, void 0);
    Th(o);
    const a = S(() => s.value ? n.id : void 0), i = S(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = S(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = S(() => s.value ? `${n.open}` : void 0);
    let c;
    return Pe(() => {
      K(() => n.virtualRef, (d) => {
        d && (o.value = zt(d));
      }, {
        immediate: !0
      }), K(o, (d, p) => {
        c == null || c(), c = void 0, qn(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var y;
          const g = n[m];
          g && (d.addEventListener(m.slice(2).toLowerCase(), g), (y = p == null ? void 0 : p.removeEventListener) == null || y.call(p, m.slice(2).toLowerCase(), g));
        }), c = K([a, i, s, l], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, g) => {
            Ir(m[g]) ? d.removeAttribute(y) : d.setAttribute(y, m[g]);
          });
        }, { immediate: !0 })), qn(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => p.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Je(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: o
    }), (d, p) => d.virtualTriggering ? G("v-if", !0) : (A(), W(f(f0), lt({ key: 0 }, d.$attrs, {
      "aria-controls": f(a),
      "aria-describedby": f(i),
      "aria-expanded": f(l),
      "aria-haspopup": f(s)
    }), {
      default: j(() => [
        X(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var v0 = /* @__PURE__ */ ge(p0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Xr = "focus-trap.focus-after-trapped", eo = "focus-trap.focus-after-released", g0 = "focus-trap.focusout-prevented", hi = {
  cancelable: !0,
  bubbles: !1
}, h0 = {
  cancelable: !0,
  bubbles: !1
}, mi = "focusAfterTrapped", yi = "focusAfterReleased", m0 = Symbol("elFocusTrap"), ea = x(), kr = x(0), ta = x(0);
let sr = 0;
const zs = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, bi = (e, t) => {
  for (const n of e)
    if (!y0(n, t))
      return n;
}, y0 = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, b0 = (e) => {
  const t = zs(e), n = bi(t, e), r = bi(t.reverse(), e);
  return [n, r];
}, w0 = (e) => e instanceof HTMLInputElement && "select" in e, jt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), ta.value = window.performance.now(), e !== n && w0(e) && t && e.select();
  }
};
function wi(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const S0 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = wi(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = wi(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, O0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (jt(r, t), document.activeElement !== n)
      return;
}, Si = S0(), E0 = () => kr.value > ta.value, lr = () => {
  ea.value = "pointer", kr.value = window.performance.now();
}, Oi = () => {
  ea.value = "keyboard", kr.value = window.performance.now();
}, T0 = () => (Pe(() => {
  sr === 0 && (document.addEventListener("mousedown", lr), document.addEventListener("touchstart", lr), document.addEventListener("keydown", Oi)), sr++;
}), Je(() => {
  sr--, sr <= 0 && (document.removeEventListener("mousedown", lr), document.removeEventListener("touchstart", lr), document.removeEventListener("keydown", Oi));
}), {
  focusReason: ea,
  lastUserFocusTimestamp: kr,
  lastAutomatedFocusTimestamp: ta
}), ur = (e) => new CustomEvent(g0, {
  ...h0,
  detail: e
}), _0 = q({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    mi,
    yi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, o;
    const { focusReason: a } = T0();
    bh((g) => {
      e.trapped && !i.paused && t("release-requested", g);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (g) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: u, altKey: h, ctrlKey: v, metaKey: w, currentTarget: E, shiftKey: T } = g, { loop: C } = e, _ = u === gn.tab && !h && !v && !w, O = document.activeElement;
      if (_ && O) {
        const I = E, [D, B] = b0(I);
        if (D && B) {
          if (!T && O === B) {
            const L = ur({
              focusReason: a.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (g.preventDefault(), C && jt(D, !0));
          } else if (T && [D, I].includes(O)) {
            const L = ur({
              focusReason: a.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (g.preventDefault(), C && jt(B, !0));
          }
        } else if (O === I) {
          const L = ur({
            focusReason: a.value
          });
          t("focusout-prevented", L), L.defaultPrevented || g.preventDefault();
        }
      }
    };
    We(m0, {
      focusTrapRef: n,
      onKeydown: s
    }), K(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), K([n], ([g], [u]) => {
      g && (g.addEventListener("keydown", s), g.addEventListener("focusin", d), g.addEventListener("focusout", p)), u && (u.removeEventListener("keydown", s), u.removeEventListener("focusin", d), u.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(mi, g);
    }, c = (g) => t(yi, g), d = (g) => {
      const u = f(n);
      if (!u)
        return;
      const h = g.target, v = g.relatedTarget, w = h && u.contains(h);
      e.trapped || v && u.contains(v) || (r = v), w && t("focusin", g), !i.paused && e.trapped && (w ? o = h : jt(o, !0));
    }, p = (g) => {
      const u = f(n);
      if (!(i.paused || !u))
        if (e.trapped) {
          const h = g.relatedTarget;
          !Ir(h) && !u.contains(h) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const v = ur({
                focusReason: a.value
              });
              t("focusout-prevented", v), v.defaultPrevented || jt(o, !0);
            }
          }, 0);
        } else {
          const h = g.target;
          h && u.contains(h) || t("focusout", g);
        }
    };
    async function m() {
      await fe();
      const g = f(n);
      if (g) {
        Si.push(i);
        const u = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = u, !g.contains(u)) {
          const v = new Event(Xr, hi);
          g.addEventListener(Xr, l), g.dispatchEvent(v), v.defaultPrevented || fe(() => {
            let w = e.focusStartEl;
            Ue(w) || (jt(w), document.activeElement !== w && (w = "first")), w === "first" && O0(zs(g), !0), (document.activeElement === u || w === "container") && jt(g);
          });
        }
      }
    }
    function y() {
      const g = f(n);
      if (g) {
        g.removeEventListener(Xr, l);
        const u = new CustomEvent(eo, {
          ...hi,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(eo, c), g.dispatchEvent(u), !u.defaultPrevented && (a.value == "keyboard" || !E0() || g.contains(document.activeElement)) && jt(r ?? document.body), g.removeEventListener(eo, c), Si.remove(i);
      }
    }
    return Pe(() => {
      e.trapped && m(), K(() => e.trapped, (g) => {
        g ? m() : y();
      });
    }), Je(() => {
      e.trapped && y();
    }), {
      onKeydown: s
    };
  }
});
function $0(e, t, n, r, o, a) {
  return X(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var C0 = /* @__PURE__ */ ge(_0, [["render", $0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const A0 = ["fixed", "absolute"], P0 = me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Q(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Rr,
    default: "bottom"
  },
  popperOptions: {
    type: Q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: A0,
    default: "absolute"
  }
}), Hs = me({
  ...P0,
  id: String,
  style: {
    type: Q([String, Array, Object])
  },
  className: {
    type: Q([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Q([String, Array, Object])
  },
  popperStyle: {
    type: Q([String, Array, Object])
  },
  referenceEl: {
    type: Q(Object)
  },
  triggerTargetEl: {
    type: Q(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), I0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, x0 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...M0(e), ...t]
  };
  return R0(a, o == null ? void 0 : o.modifiers), a;
}, F0 = (e) => {
  if (Ae)
    return zt(e);
};
function M0(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function R0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const L0 = 0, k0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ie(Xo, void 0), a = x(), i = x(), s = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = S(() => {
    var v;
    const w = f(a), E = (v = f(i)) != null ? v : L0;
    return {
      name: "arrow",
      enabled: !rv(w),
      options: {
        element: w,
        padding: E
      }
    };
  }), c = S(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...x0(e, [
      f(l),
      f(s)
    ])
  })), d = S(() => F0(e.referenceEl) || f(r)), { attributes: p, state: m, styles: y, update: g, forceUpdate: u, instanceRef: h } = hh(d, n, c);
  return K(h, (v) => t.value = v), Pe(() => {
    K(() => {
      var v;
      return (v = f(d)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: h,
    state: m,
    styles: y,
    role: o,
    forceUpdate: u,
    update: g
  };
}, N0 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Ah(), a = pe("popper"), i = S(() => f(t).popper), s = x(e.zIndex || o()), l = S(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = S(() => [
    { zIndex: f(s) },
    f(n).popper,
    e.popperStyle || {}
  ]), d = S(() => r.value === "dialog" ? "false" : void 0), p = S(() => f(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: i,
    contentClass: l,
    contentStyle: c,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || o();
    }
  };
}, B0 = (e, t) => {
  const n = x(!1), r = x();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, j0 = q({
  name: "ElPopperContent"
}), D0 = /* @__PURE__ */ q({
  ...j0,
  props: Hs,
  emits: I0,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = B0(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: g, instanceRef: u, role: h, update: v } = k0(r), {
      ariaModal: w,
      arrowStyle: E,
      contentAttrs: T,
      contentClass: C,
      contentStyle: _,
      updateZIndex: O
    } = N0(r, {
      styles: g,
      attributes: p,
      role: h
    }), I = ie(nn, void 0), D = x();
    We(ks, {
      arrowStyle: E,
      arrowRef: m,
      arrowOffset: D
    }), I && (I.addInputId || I.removeInputId) && We(nn, {
      ...I,
      addInputId: jn,
      removeInputId: jn
    });
    let B;
    const H = (Y = !0) => {
      v(), Y && O();
    }, L = () => {
      H(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Pe(() => {
      K(() => r.triggerTargetEl, (Y, se) => {
        B == null || B(), B = void 0;
        const ae = f(Y || y.value), te = f(se || y.value);
        qn(ae) && (B = K([h, () => r.ariaLabel, w, () => r.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ne, re) => {
            Ir(M[re]) ? ae.removeAttribute(ne) : ae.setAttribute(ne, M[re]);
          });
        }, { immediate: !0 })), te !== ae && qn(te) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          te.removeAttribute(M);
        });
      }, { immediate: !0 }), K(() => r.visible, L, { immediate: !0 });
    }), Je(() => {
      B == null || B(), B = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: u,
      updatePopper: H,
      contentStyle: _
    }), (Y, se) => (A(), z("div", lt({
      ref_key: "contentRef",
      ref: y
    }, f(T), {
      style: f(_),
      class: f(C),
      tabindex: "-1",
      onMouseenter: se[0] || (se[0] = (ae) => Y.$emit("mouseenter", ae)),
      onMouseleave: se[1] || (se[1] = (ae) => Y.$emit("mouseleave", ae))
    }), [
      ee(f(C0), {
        trapped: f(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": f(y),
        "focus-start-el": f(o),
        onFocusAfterTrapped: f(s),
        onFocusAfterReleased: f(i),
        onFocusin: f(l),
        onFocusoutPrevented: f(c),
        onReleaseRequested: f(d)
      }, {
        default: j(() => [
          X(Y.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var z0 = /* @__PURE__ */ ge(D0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const H0 = dt(s0), na = Symbol("elTooltip"), ra = me({
  ...Oh,
  ...Hs,
  appendTo: {
    type: Q([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Q(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), qs = me({
  ...Ds,
  disabled: Boolean,
  trigger: {
    type: Q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Q(Array),
    default: () => [gn.enter, gn.space]
  }
}), {
  useModelToggleProps: q0,
  useModelToggleEmits: V0,
  useModelToggle: W0
} = gs("visible"), K0 = me({
  ...Ns,
  ...q0,
  ...ra,
  ...qs,
  ...Bs,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), U0 = [
  ...V0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], G0 = (e, t) => Mi(e) ? e.includes(t) : e === t, un = (e, t, n) => (r) => {
  G0(f(e), t) && n(r);
}, Y0 = q({
  name: "ElTooltipTrigger"
}), Z0 = /* @__PURE__ */ q({
  ...Y0,
  props: qs,
  setup(e, { expose: t }) {
    const n = e, r = pe("tooltip"), { controlled: o, id: a, open: i, onOpen: s, onClose: l, onToggle: c } = ie(na, void 0), d = x(null), p = () => {
      if (f(o) || n.disabled)
        return !0;
    }, m = st(n, "trigger"), y = Pt(p, un(m, "hover", s)), g = Pt(p, un(m, "hover", l)), u = Pt(p, un(m, "click", (T) => {
      T.button === 0 && c(T);
    })), h = Pt(p, un(m, "focus", s)), v = Pt(p, un(m, "focus", l)), w = Pt(p, un(m, "contextmenu", (T) => {
      T.preventDefault(), c(T);
    })), E = Pt(p, (T) => {
      const { code: C } = T;
      n.triggerKeys.includes(C) && (T.preventDefault(), c(T));
    });
    return t({
      triggerRef: d
    }), (T, C) => (A(), W(f(v0), {
      id: f(a),
      "virtual-ref": T.virtualRef,
      open: f(i),
      "virtual-triggering": T.virtualTriggering,
      class: R(f(r).e("trigger")),
      onBlur: f(v),
      onClick: f(u),
      onContextmenu: f(w),
      onFocus: f(h),
      onMouseenter: f(y),
      onMouseleave: f(g),
      onKeydown: f(E)
    }, {
      default: j(() => [
        X(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Q0 = /* @__PURE__ */ ge(Z0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const J0 = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), X0 = /* @__PURE__ */ q({
  ...J0,
  props: ra,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Ps(), o = pe("tooltip"), a = x(null), i = x(!1), {
      controlled: s,
      id: l,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: y,
      onHide: g,
      onBeforeShow: u,
      onBeforeHide: h
    } = ie(na, void 0), v = S(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = S(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Je(() => {
      i.value = !0;
    });
    const E = S(() => f(w) ? !0 : f(c)), T = S(() => n.disabled ? !1 : f(c)), C = S(() => n.appendTo || r.value), _ = S(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), O = S(() => !f(c)), I = () => {
      g();
    }, D = () => {
      if (f(s))
        return !0;
    }, B = Pt(D, () => {
      n.enterable && f(d) === "hover" && m();
    }), H = Pt(D, () => {
      f(d) === "hover" && p();
    }), L = () => {
      var M, ne;
      (ne = (M = a.value) == null ? void 0 : M.updatePopper) == null || ne.call(M), u == null || u();
    }, Y = () => {
      h == null || h();
    }, se = () => {
      y(), te = El(S(() => {
        var M;
        return (M = a.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (f(s))
          return;
        f(d) !== "hover" && p();
      });
    }, ae = () => {
      n.virtualTriggering || p();
    };
    let te;
    return K(() => f(c), (M) => {
      M || te == null || te();
    }, {
      flush: "post"
    }), K(() => n.content, () => {
      var M, ne;
      (ne = (M = a.value) == null ? void 0 : M.updatePopper) == null || ne.call(M);
    }), t({
      contentRef: a
    }), (M, ne) => (A(), W(ul, {
      disabled: !M.teleported,
      to: f(C)
    }, [
      ee(Bn, {
        name: f(v),
        onAfterLeave: I,
        onBeforeEnter: L,
        onAfterEnter: se,
        onBeforeLeave: Y
      }, {
        default: j(() => [
          f(E) ? It((A(), W(f(z0), lt({
            key: 0,
            id: f(l),
            ref_key: "contentRef",
            ref: a
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": f(O),
            "boundaries-padding": M.boundariesPadding,
            "fallback-placements": M.fallbackPlacements,
            "gpu-acceleration": M.gpuAcceleration,
            offset: M.offset,
            placement: M.placement,
            "popper-options": M.popperOptions,
            strategy: M.strategy,
            effect: M.effect,
            enterable: M.enterable,
            pure: M.pure,
            "popper-class": M.popperClass,
            "popper-style": [M.popperStyle, f(_)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: f(T),
            "z-index": M.zIndex,
            onMouseenter: f(B),
            onMouseleave: f(H),
            onBlur: ae,
            onClose: f(p)
          }), {
            default: j(() => [
              i.value ? G("v-if", !0) : X(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Sn, f(T)]
          ]) : G("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var ey = /* @__PURE__ */ ge(X0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const ty = ["innerHTML"], ny = { key: 1 }, ry = q({
  name: "ElTooltip"
}), oy = /* @__PURE__ */ q({
  ...ry,
  props: K0,
  emits: U0,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Sh();
    const o = Yo(), a = x(), i = x(), s = () => {
      var v;
      const w = f(a);
      w && ((v = w.popperInstanceRef) == null || v.update());
    }, l = x(!1), c = x(), { show: d, hide: p, hasUpdateHandler: m } = W0({
      indicator: l,
      toggleReason: c
    }), { onOpen: y, onClose: g } = Eh({
      showAfter: st(r, "showAfter"),
      hideAfter: st(r, "hideAfter"),
      autoClose: st(r, "autoClose"),
      open: d,
      close: p
    }), u = S(() => xr(r.visible) && !m.value);
    We(na, {
      controlled: u,
      id: o,
      open: cl(l),
      trigger: st(r, "trigger"),
      onOpen: (v) => {
        y(v);
      },
      onClose: (v) => {
        g(v);
      },
      onToggle: (v) => {
        f(l) ? g(v) : y(v);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: s
    }), K(() => r.disabled, (v) => {
      v && l.value && (l.value = !1);
    });
    const h = (v) => {
      var w, E;
      const T = (E = (w = i.value) == null ? void 0 : w.contentRef) == null ? void 0 : E.popperContentRef, C = (v == null ? void 0 : v.relatedTarget) || document.activeElement;
      return T && T.contains(C);
    };
    return fl(() => l.value && p()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: h,
      updatePopper: s,
      onOpen: y,
      onClose: g,
      hide: p
    }), (v, w) => (A(), W(f(H0), {
      ref_key: "popperRef",
      ref: a,
      role: v.role
    }, {
      default: j(() => [
        ee(Q0, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: j(() => [
            v.$slots.default ? X(v.$slots, "default", { key: 0 }) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ee(ey, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": v.ariaLabel,
          "boundaries-padding": v.boundariesPadding,
          content: v.content,
          disabled: v.disabled,
          effect: v.effect,
          enterable: v.enterable,
          "fallback-placements": v.fallbackPlacements,
          "hide-after": v.hideAfter,
          "gpu-acceleration": v.gpuAcceleration,
          offset: v.offset,
          persistent: v.persistent,
          "popper-class": v.popperClass,
          "popper-style": v.popperStyle,
          placement: v.placement,
          "popper-options": v.popperOptions,
          pure: v.pure,
          "raw-content": v.rawContent,
          "reference-el": v.referenceEl,
          "trigger-target-el": v.triggerTargetEl,
          "show-after": v.showAfter,
          strategy: v.strategy,
          teleported: v.teleported,
          transition: v.transition,
          "virtual-triggering": v.virtualTriggering,
          "z-index": v.zIndex,
          "append-to": v.appendTo
        }, {
          default: j(() => [
            X(v.$slots, "content", {}, () => [
              v.rawContent ? (A(), z("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, ty)) : (A(), z("span", ny, Me(v.content), 1))
            ]),
            v.showArrow ? (A(), W(f(c0), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ay = /* @__PURE__ */ ge(oy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const iy = dt(ay), Vs = Symbol("buttonGroupContextKey"), sy = (e, t) => {
  vs({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => e.type === "text"));
  const n = ie(Vs, void 0), r = Rh("button"), { form: o } = Qo(), a = Tn(S(() => n == null ? void 0 : n.size)), i = Zo(), s = x(), l = Eo(), c = S(() => e.type || (n == null ? void 0 : n.type) || ""), d = S(() => {
    var g, u, h;
    return (h = (u = e.autoInsertSpace) != null ? u : (g = r.value) == null ? void 0 : g.autoInsertSpace) != null ? h : !1;
  }), p = S(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = S(() => {
    var g;
    const u = (g = l.default) == null ? void 0 : g.call(l);
    if (d.value && (u == null ? void 0 : u.length) === 1) {
      const h = u[0];
      if ((h == null ? void 0 : h.type) === xi) {
        const v = h.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: c,
    _ref: s,
    _props: p,
    shouldAddSpace: m,
    handleClick: (g) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", g);
    }
  };
}, ly = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], uy = ["button", "submit", "reset"], So = me({
  size: xs,
  disabled: Boolean,
  type: {
    type: String,
    values: ly,
    default: ""
  },
  icon: {
    type: vn
  },
  nativeType: {
    type: String,
    values: uy,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: vn,
    default: () => us
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Q([String, Object]),
    default: "button"
  }
}), cy = {
  click: (e) => e instanceof MouseEvent
};
function Oe(e, t) {
  fy(e) && (e = "100%");
  var n = dy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function cr(e) {
  return Math.min(1, Math.max(0, e));
}
function fy(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function dy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ws(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Qt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function py(e, t, n) {
  return {
    r: Oe(e, 255) * 255,
    g: Oe(t, 255) * 255,
    b: Oe(n, 255) * 255
  };
}
function Ei(e, t, n) {
  e = Oe(e, 255), t = Oe(t, 255), n = Oe(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, s = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var l = r - o;
    switch (i = s > 0.5 ? l / (2 - r - o) : l / (r + o), r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l: s };
}
function to(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function vy(e, t, n) {
  var r, o, a;
  if (e = Oe(e, 360), t = Oe(t, 100), n = Oe(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    r = to(s, i, e + 1 / 3), o = to(s, i, e), a = to(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function Ti(e, t, n) {
  e = Oe(e, 255), t = Oe(t, 255), n = Oe(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, s = r - o, l = r === 0 ? 0 : s / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function gy(e, t, n) {
  e = Oe(e, 360) * 6, t = Oe(t, 100), n = Oe(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), s = n * (1 - (1 - o) * t), l = r % 6, c = [n, i, a, a, s, n][l], d = [s, n, n, i, a, a][l], p = [a, a, s, n, n, i][l];
  return { r: c * 255, g: d * 255, b: p * 255 };
}
function _i(e, t, n, r) {
  var o = [
    Qt(Math.round(e).toString(16)),
    Qt(Math.round(t).toString(16)),
    Qt(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function hy(e, t, n, r, o) {
  var a = [
    Qt(Math.round(e).toString(16)),
    Qt(Math.round(t).toString(16)),
    Qt(Math.round(n).toString(16)),
    Qt(my(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function my(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function $i(e) {
  return je(e) / 255;
}
function je(e) {
  return parseInt(e, 16);
}
function yy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Oo = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function by(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = Oy(e)), typeof e == "object" && (At(e.r) && At(e.g) && At(e.b) ? (t = py(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : At(e.h) && At(e.s) && At(e.v) ? (r = fr(e.s), o = fr(e.v), t = gy(e.h, r, o), i = !0, s = "hsv") : At(e.h) && At(e.s) && At(e.l) && (r = fr(e.s), a = fr(e.l), t = vy(e.h, r, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ws(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var wy = "[-\\+]?\\d+%?", Sy = "[-\\+]?\\d*\\.\\d+%?", Ht = "(?:".concat(Sy, ")|(?:").concat(wy, ")"), no = "[\\s|\\(]+(".concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")\\s*\\)?"), ro = "[\\s|\\(]+(".concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")\\s*\\)?"), ot = {
  CSS_UNIT: new RegExp(Ht),
  rgb: new RegExp("rgb" + no),
  rgba: new RegExp("rgba" + ro),
  hsl: new RegExp("hsl" + no),
  hsla: new RegExp("hsla" + ro),
  hsv: new RegExp("hsv" + no),
  hsva: new RegExp("hsva" + ro),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Oy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Oo[e])
    e = Oo[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ot.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ot.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ot.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ot.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ot.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ot.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ot.hex8.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    a: $i(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ot.hex6.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    format: t ? "name" : "hex"
  } : (n = ot.hex4.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    a: $i(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ot.hex3.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function At(e) {
  return !!ot.CSS_UNIT.exec(String(e));
}
var Ey = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = yy(t)), this.originalInput = t;
      var o = by(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, s = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ws(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ti(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ti(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ei(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ei(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), _i(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), hy(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Oe(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Oe(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + _i(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Oo); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = cr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = cr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = cr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = cr(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Bt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Ty(e) {
  const t = Zo(), n = pe("button");
  return S(() => {
    let r = {};
    const o = e.color;
    if (o) {
      const a = new Ey(o), i = e.dark ? a.tint(20).toString() : Bt(a, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? Bt(a, 90) : a.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? Bt(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Bt(a, 90) : a.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? Bt(a, 50) : a.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? Bt(a, 80) : a.tint(80).toString());
      else {
        const s = e.dark ? Bt(a, 30) : a.tint(30).toString(), l = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": l,
          "border-color": o,
          "hover-bg-color": s,
          "hover-text-color": l,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const c = e.dark ? Bt(a, 50) : a.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = c, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return r;
  });
}
const _y = q({
  name: "ElButton"
}), $y = /* @__PURE__ */ q({
  ..._y,
  props: So,
  emits: cy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ty(r), a = pe("button"), { _ref: i, _size: s, _type: l, _disabled: c, _props: d, shouldAddSpace: p, handleClick: m } = sy(r, n);
    return t({
      ref: i,
      size: s,
      type: l,
      disabled: c,
      shouldAddSpace: p
    }), (y, g) => (A(), W(He(y.tag), lt({
      ref_key: "_ref",
      ref: i
    }, f(d), {
      class: [
        f(a).b(),
        f(a).m(f(l)),
        f(a).m(f(s)),
        f(a).is("disabled", f(c)),
        f(a).is("loading", y.loading),
        f(a).is("plain", y.plain),
        f(a).is("round", y.round),
        f(a).is("circle", y.circle),
        f(a).is("text", y.text),
        f(a).is("link", y.link),
        f(a).is("has-bg", y.bg)
      ],
      style: f(o),
      onClick: f(m)
    }), {
      default: j(() => [
        y.loading ? (A(), z(ze, { key: 0 }, [
          y.$slots.loading ? X(y.$slots, "loading", { key: 0 }) : (A(), W(f(wt), {
            key: 1,
            class: R(f(a).is("loading"))
          }, {
            default: j(() => [
              (A(), W(He(y.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : y.icon || y.$slots.icon ? (A(), W(f(wt), { key: 1 }, {
          default: j(() => [
            y.icon ? (A(), W(He(y.icon), { key: 0 })) : X(y.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : G("v-if", !0),
        y.$slots.default ? (A(), z("span", {
          key: 2,
          class: R({ [f(a).em("text", "expand")]: f(p) })
        }, [
          X(y.$slots, "default")
        ], 2)) : G("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Cy = /* @__PURE__ */ ge($y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Ay = {
  size: So.size,
  type: So.type
}, Py = q({
  name: "ElButtonGroup"
}), Iy = /* @__PURE__ */ q({
  ...Py,
  props: Ay,
  setup(e) {
    const t = e;
    We(Vs, Vt({
      size: st(t, "size"),
      type: st(t, "type")
    }));
    const n = pe("button");
    return (r, o) => (A(), z("div", {
      class: R(`${f(n).b("group")}`)
    }, [
      X(r.$slots, "default")
    ], 2));
  }
});
var Ks = /* @__PURE__ */ ge(Iy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Us = dt(Cy, {
  ButtonGroup: Ks
});
Mr(Ks);
const Dt = /* @__PURE__ */ new Map();
let Ci;
Ae && (document.addEventListener("mousedown", (e) => Ci = e), document.addEventListener("mouseup", (e) => {
  for (const t of Dt.values())
    for (const { documentHandler: n } of t)
      n(e, Ci);
}));
function Ai(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : qn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, i = r.target, s = o == null ? void 0 : o.target, l = !t || !t.instance, c = !i || !s, d = e.contains(i) || e.contains(s), p = e === i, m = n.length && n.some((g) => g == null ? void 0 : g.contains(i)) || n.length && n.includes(s), y = a && (a.contains(i) || a.contains(s));
    l || c || d || p || m || y || t.value(r, o);
  };
}
const xy = {
  beforeMount(e, t) {
    Dt.has(e) || Dt.set(e, []), Dt.get(e).push({
      documentHandler: Ai(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Dt.has(e) || Dt.set(e, []);
    const n = Dt.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Ai(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    Dt.delete(e);
  }
}, Gs = me({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: Qn,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Fy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, My = q({
  name: "ElTag"
}), Ry = /* @__PURE__ */ q({
  ...My,
  props: Gs,
  emits: Fy,
  setup(e, { emit: t }) {
    const n = e, r = Tn(), o = pe("tag"), a = S(() => {
      const { type: l, hit: c, effect: d, closable: p, round: m } = n;
      return [
        o.b(),
        o.is("closable", p),
        o.m(l),
        o.m(r.value),
        o.m(d),
        o.is("hit", c),
        o.is("round", m)
      ];
    }), i = (l) => {
      t("close", l);
    }, s = (l) => {
      t("click", l);
    };
    return (l, c) => l.disableTransitions ? (A(), z("span", {
      key: 0,
      class: R(f(a)),
      style: be({ backgroundColor: l.color }),
      onClick: s
    }, [
      Z("span", {
        class: R(f(o).e("content"))
      }, [
        X(l.$slots, "default")
      ], 2),
      l.closable ? (A(), W(f(wt), {
        key: 0,
        class: R(f(o).e("close")),
        onClick: at(i, ["stop"])
      }, {
        default: j(() => [
          ee(f(Ka))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : G("v-if", !0)
    ], 6)) : (A(), W(Bn, {
      key: 1,
      name: `${f(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: j(() => [
        Z("span", {
          class: R(f(a)),
          style: be({ backgroundColor: l.color }),
          onClick: s
        }, [
          Z("span", {
            class: R(f(o).e("content"))
          }, [
            X(l.$slots, "default")
          ], 2),
          l.closable ? (A(), W(f(wt), {
            key: 0,
            class: R(f(o).e("close")),
            onClick: at(i, ["stop"])
          }, {
            default: j(() => [
              ee(f(Ka))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Ly = /* @__PURE__ */ ge(Ry, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ky = dt(Ly), Ys = Symbol("rowContextKey"), Ny = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], By = ["top", "middle", "bottom"], jy = me({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: Ny,
    default: "start"
  },
  align: {
    type: String,
    values: By
  }
}), Dy = q({
  name: "ElRow"
}), zy = /* @__PURE__ */ q({
  ...Dy,
  props: jy,
  setup(e) {
    const t = e, n = pe("row"), r = S(() => t.gutter);
    We(Ys, {
      gutter: r
    });
    const o = S(() => {
      const i = {};
      return t.gutter && (i.marginRight = i.marginLeft = `-${t.gutter / 2}px`), i;
    }), a = S(() => [
      n.b(),
      n.is(`justify-${t.justify}`, t.justify !== "start"),
      n.is(`align-${t.align}`, !!t.align)
    ]);
    return (i, s) => (A(), W(He(i.tag), {
      class: R(f(a)),
      style: be(f(o))
    }, {
      default: j(() => [
        X(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var Hy = /* @__PURE__ */ ge(zy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const qy = dt(Hy), Vy = me({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: Q([Number, Object]),
    default: () => cn({})
  },
  sm: {
    type: Q([Number, Object]),
    default: () => cn({})
  },
  md: {
    type: Q([Number, Object]),
    default: () => cn({})
  },
  lg: {
    type: Q([Number, Object]),
    default: () => cn({})
  },
  xl: {
    type: Q([Number, Object]),
    default: () => cn({})
  }
}), Wy = q({
  name: "ElCol"
}), Ky = /* @__PURE__ */ q({
  ...Wy,
  props: Vy,
  setup(e) {
    const t = e, { gutter: n } = ie(Ys, { gutter: S(() => 0) }), r = pe("col"), o = S(() => {
      const i = {};
      return n.value && (i.paddingLeft = i.paddingRight = `${n.value / 2}px`), i;
    }), a = S(() => {
      const i = [];
      return ["span", "offset", "pull", "push"].forEach((c) => {
        const d = t[c];
        qe(d) && (c === "span" ? i.push(r.b(`${t[c]}`)) : d > 0 && i.push(r.b(`${c}-${t[c]}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((c) => {
        qe(t[c]) ? i.push(r.b(`${c}-${t[c]}`)) : xt(t[c]) && Object.entries(t[c]).forEach(([d, p]) => {
          i.push(d !== "span" ? r.b(`${c}-${d}-${p}`) : r.b(`${c}-${p}`));
        });
      }), n.value && i.push(r.is("guttered")), [r.b(), i];
    });
    return (i, s) => (A(), W(He(i.tag), {
      class: R(f(a)),
      style: be(f(o))
    }, {
      default: j(() => [
        X(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var Uy = /* @__PURE__ */ ge(Ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);
const Gy = dt(Uy), Zs = Symbol("ElSelectGroup"), Nr = Symbol("ElSelect");
function Yy(e, t) {
  const n = ie(Nr), r = ie(Zs, { disabled: !1 }), o = S(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = S(() => n.props.multiple ? p(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), i = S(() => {
    if (n.props.multiple) {
      const u = n.props.modelValue || [];
      return !a.value && u.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = S(() => e.label || (o.value ? "" : e.value)), l = S(() => e.value || e.label || ""), c = S(() => e.disabled || t.groupDisabled || i.value), d = Qe(), p = (u = [], h) => {
    if (o.value) {
      const v = n.props.valueKey;
      return u && u.some((w) => hr(Le(w, v)) === Le(h, v));
    } else
      return u && u.includes(h);
  }, m = (u, h) => {
    if (o.value) {
      const { valueKey: v } = n.props;
      return Le(u, v) === Le(h, v);
    } else
      return u === h;
  }, y = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  K(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), K(() => e.value, (u, h) => {
    const { remote: v, valueKey: w } = n.props;
    if (Object.is(u, h) || (n.onOptionDestroy(h, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !v) {
      if (w && typeof u == "object" && typeof h == "object" && u[w] === h[w])
        return;
      n.setSelected();
    }
  }), K(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: g } = hr(n);
  return K(g, (u) => {
    const { query: h } = f(u), v = new RegExp(sv(h), "i");
    t.visible = v.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: a,
    isDisabled: c,
    hoverItem: y
  };
}
const Zy = q({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = pe("select"), n = S(() => [
      t.be("dropdown", "item"),
      t.is("disabled", f(i)),
      {
        selected: f(a),
        hover: f(d)
      }
    ]), r = Vt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: a, isDisabled: i, select: s, hoverItem: l } = Yy(e, r), { visible: c, hover: d } = Gn(r), p = Qe().proxy;
    s.onOptionCreate(p), Je(() => {
      const y = p.value, { selected: g } = s, h = (s.props.multiple ? g : [g]).some((v) => v.value === p.value);
      fe(() => {
        s.cachedOptions.get(y) === p && !h && s.cachedOptions.delete(y);
      }), s.onOptionDestroy(y, p);
    });
    function m() {
      e.disabled !== !0 && r.groupDisabled !== !0 && s.handleOptionSelect(p);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: o,
      itemSelected: a,
      isDisabled: i,
      select: s,
      hoverItem: l,
      visible: c,
      hover: d,
      selectOptionClick: m,
      states: r
    };
  }
});
function Qy(e, t, n, r, o, a) {
  return It((A(), z("li", {
    class: R(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = at((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    X(e.$slots, "default", {}, () => [
      Z("span", null, Me(e.currentLabel), 1)
    ])
  ], 34)), [
    [Sn, e.visible]
  ]);
}
var oa = /* @__PURE__ */ ge(Zy, [["render", Qy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Jy = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ie(Nr), t = pe("select"), n = S(() => e.props.popperClass), r = S(() => e.props.multiple), o = S(() => e.props.fitInputWidth), a = x("");
    function i() {
      var s;
      a.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Pe(() => {
      i(), Yn(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function Xy(e, t, n, r, o, a) {
  return A(), z("div", {
    class: R([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: be({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    X(e.$slots, "default")
  ], 6);
}
var eb = /* @__PURE__ */ ge(Jy, [["render", Xy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function tb(e) {
  const { t } = jo();
  return Vt({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const nb = (e, t, n) => {
  const { t: r } = jo(), o = pe("select");
  vs({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, S(() => e.suffixTransition === !1));
  const a = x(null), i = x(null), s = x(null), l = x(null), c = x(null), d = x(null), p = x(null), m = x(null), y = x(-1), g = Jt({ query: "" }), u = Jt(""), h = x([]);
  let v = 0;
  const { form: w, formItem: E } = Qo(), T = S(() => !e.filterable || e.multiple || !t.visible), C = S(() => e.disabled || (w == null ? void 0 : w.disabled)), _ = S(() => {
    const b = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !C.value && t.inputHovering && b;
  }), O = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), I = S(() => o.is("reverse", O.value && t.visible && e.suffixTransition)), D = S(() => (w == null ? void 0 : w.statusIcon) && (E == null ? void 0 : E.validateState) && fs[E == null ? void 0 : E.validateState]), B = S(() => e.remote ? 300 : 0), H = S(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), L = S(() => {
    const b = Array.from(t.options.values()), $ = [];
    return h.value.forEach((F) => {
      const U = b.findIndex(($e) => $e.currentLabel === F);
      U > -1 && $.push(b[U]);
    }), $.length >= b.length ? $ : b;
  }), Y = S(() => Array.from(t.cachedOptions.values())), se = S(() => {
    const b = L.value.filter(($) => !$.created).some(($) => $.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !b;
  }), ae = Tn(), te = S(() => ["small"].includes(ae.value) ? "small" : "default"), M = S({
    get() {
      return t.visible && H.value !== !1;
    },
    set(b) {
      t.visible = b;
    }
  });
  K([() => C.value, () => ae.value, () => w == null ? void 0 : w.size], () => {
    fe(() => {
      ne();
    });
  }), K(() => e.placeholder, (b) => {
    t.cachedPlaceHolder = t.currentPlaceholder = b, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), K(() => e.modelValue, (b, $) => {
    e.multiple && (ne(), b && b.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", re(t.query))), he(), e.filterable && !e.multiple && (t.inputLength = 20), !Wa(b, $) && e.validateEvent && (E == null || E.validate("change").catch((F) => Se(F)));
  }, {
    flush: "post",
    deep: !0
  }), K(() => t.visible, (b) => {
    var $, F, U, $e, Fe;
    b ? ((F = ($ = l.value) == null ? void 0 : $.updatePopper) == null || F.call($), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, ($e = (U = s.value) == null ? void 0 : U.focus) == null || $e.call(U), e.multiple ? (Fe = i.value) == null || Fe.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), re(t.query), !e.multiple && !e.remote && (g.value.query = "", Pn(g), Pn(u)))) : (e.filterable && (De(e.filterMethod) && e.filterMethod(""), De(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, xe(), fe(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", b);
  }), K(() => t.options.entries(), () => {
    var b, $, F;
    if (!Ae)
      return;
    ($ = (b = l.value) == null ? void 0 : b.updatePopper) == null || $.call(b), e.multiple && ne();
    const U = ((F = p.value) == null ? void 0 : F.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !is(e.modelValue) || !Array.from(U).includes(document.activeElement)) && he(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Ie();
  }, {
    flush: "post"
  }), K(() => t.hoverIndex, (b) => {
    qe(b) && b > -1 ? y.value = L.value[b] || {} : y.value = {}, L.value.forEach(($) => {
      $.hover = y.value === $;
    });
  });
  const ne = () => {
    fe(() => {
      var b, $;
      if (!a.value)
        return;
      const F = a.value.$el.querySelector("input");
      v = v || (F.clientHeight > 0 ? F.clientHeight + 2 : 0);
      const U = d.value, $e = eg(ae.value || (w == null ? void 0 : w.size)), Fe = ae.value || $e === v || v <= 0 ? $e : v;
      !(F.offsetParent === null) && (F.style.height = `${(t.selected.length === 0 ? Fe : Math.max(U ? U.clientHeight + (U.clientHeight > Fe ? 6 : 0) : 0, Fe)) - 2}px`), t.visible && H.value !== !1 && (($ = (b = l.value) == null ? void 0 : b.updatePopper) == null || $.call(b));
    });
  }, re = async (b) => {
    if (!(t.previousQuery === b || t.isOnComposition)) {
      if (t.previousQuery === null && (De(e.filterMethod) || De(e.remoteMethod))) {
        t.previousQuery = b;
        return;
      }
      t.previousQuery = b, fe(() => {
        var $, F;
        t.visible && ((F = ($ = l.value) == null ? void 0 : $.updatePopper) == null || F.call($));
      }), t.hoverIndex = -1, e.multiple && e.filterable && fe(() => {
        if (!C.value) {
          const $ = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, $) : $, Ee();
        }
        ne();
      }), e.remote && De(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(b)) : De(e.filterMethod) ? (e.filterMethod(b), Pn(u)) : (t.filteredOptionsCount = t.optionsCount, g.value.query = b, Pn(g), Pn(u)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await fe(), Ie());
    }
  }, Ee = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, Ie = () => {
    const b = L.value.filter((U) => U.visible && !U.disabled && !U.states.groupDisabled), $ = b.find((U) => U.created), F = b[0];
    t.hoverIndex = ht(L.value, $ || F);
  }, he = () => {
    var b;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const F = Te(e.modelValue);
      (b = F.props) != null && b.created ? (t.createdLabel = F.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = F.currentLabel, t.selected = F, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const $ = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((F) => {
      $.push(Te(F));
    }), t.selected = $, fe(() => {
      ne();
    });
  }, Te = (b) => {
    let $;
    const F = Vr(b).toLowerCase() === "object", U = Vr(b).toLowerCase() === "null", $e = Vr(b).toLowerCase() === "undefined";
    for (let Ct = t.cachedOptions.size - 1; Ct >= 0; Ct--) {
      const tt = Y.value[Ct];
      if (F ? Le(tt.value, e.valueKey) === Le(b, e.valueKey) : tt.value === b) {
        $ = {
          value: b,
          currentLabel: tt.currentLabel,
          isDisabled: tt.isDisabled
        };
        break;
      }
    }
    if ($)
      return $;
    const Fe = F ? b.label : !U && !$e ? b : "", $t = {
      value: b,
      currentLabel: Fe
    };
    return e.multiple && ($t.hitState = !1), $t;
  }, xe = () => {
    setTimeout(() => {
      const b = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map(($) => L.value.findIndex((F) => Le(F, b) === Le($, b)))) : t.hoverIndex = -1 : t.hoverIndex = L.value.findIndex(($) => $n($) === $n(t.selected));
    }, 300);
  }, we = () => {
    var b, $;
    Re(), ($ = (b = l.value) == null ? void 0 : b.updatePopper) == null || $.call(b), e.multiple && ne();
  }, Re = () => {
    var b;
    t.inputWidth = (b = a.value) == null ? void 0 : b.$el.offsetWidth;
  }, k = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, re(t.query));
  }, V = Va(() => {
    k();
  }, B.value), ve = Va((b) => {
    re(b.target.value);
  }, B.value), oe = (b) => {
    Wa(e.modelValue, b) || n.emit(ds, b);
  }, le = (b) => nv(b, ($) => !t.disabledOptions.has($)), _e = (b) => {
    if (b.code !== gn.delete) {
      if (b.target.value.length <= 0 && !et()) {
        const $ = e.modelValue.slice(), F = le($);
        if (F < 0)
          return;
        $.splice(F, 1), n.emit(it, $), oe($);
      }
      b.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, vt = (b, $) => {
    const F = t.selected.indexOf($);
    if (F > -1 && !C.value) {
      const U = e.modelValue.slice();
      U.splice(F, 1), n.emit(it, U), oe(U), n.emit("remove-tag", $.value);
    }
    b.stopPropagation(), N();
  }, gt = (b) => {
    b.stopPropagation();
    const $ = e.multiple ? [] : "";
    if (!Ue($))
      for (const F of t.selected)
        F.isDisabled && $.push(F.value);
    n.emit(it, $), oe($), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), N();
  }, _t = (b) => {
    var $;
    if (e.multiple) {
      const F = (e.modelValue || []).slice(), U = ht(F, b.value);
      U > -1 ? F.splice(U, 1) : (e.multipleLimit <= 0 || F.length < e.multipleLimit) && F.push(b.value), n.emit(it, F), oe(F), b.created && (t.query = "", re(""), t.inputLength = 20), e.filterable && (($ = i.value) == null || $.focus());
    } else
      n.emit(it, b.value), oe(b.value), t.visible = !1;
    mt(), !t.visible && fe(() => {
      Xe(b);
    });
  }, ht = (b = [], $) => {
    if (!xt($))
      return b.indexOf($);
    const F = e.valueKey;
    let U = -1;
    return b.some(($e, Fe) => hr(Le($e, F)) === Le($, F) ? (U = Fe, !0) : !1), U;
  }, mt = () => {
    const b = i.value || a.value;
    b && (b == null || b.focus());
  }, Xe = (b) => {
    var $, F, U, $e, Fe;
    const $t = Array.isArray(b) ? b[0] : b;
    let Ct = null;
    if ($t != null && $t.value) {
      const tt = L.value.filter((Ce) => Ce.value === $t.value);
      tt.length > 0 && (Ct = tt[0].$el);
    }
    if (l.value && Ct) {
      const tt = ($e = (U = (F = ($ = l.value) == null ? void 0 : $.popperRef) == null ? void 0 : F.contentRef) == null ? void 0 : U.querySelector) == null ? void 0 : $e.call(U, `.${o.be("dropdown", "wrap")}`);
      tt && uv(tt, Ct);
    }
    (Fe = m.value) == null || Fe.handleScroll();
  }, Kt = (b) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(b.value, b), t.cachedOptions.set(b.value, b), b.disabled && t.disabledOptions.set(b.value, b);
  }, Be = (b, $) => {
    t.options.get(b) === $ && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(b));
  }, yt = (b) => {
    b.code !== gn.backspace && et(!1), t.inputLength = i.value.value.length * 15 + 20, ne();
  }, et = (b) => {
    if (!Array.isArray(t.selected))
      return;
    const $ = le(t.selected.map((U) => U.value)), F = t.selected[$];
    if (F)
      return b === !0 || b === !1 ? (F.hitState = b, b) : (F.hitState = !F.hitState, F.hitState);
  }, Lt = (b) => {
    const $ = b.target.value;
    if (b.type === "compositionend")
      t.isOnComposition = !1, fe(() => re($));
    else {
      const F = $[$.length - 1] || "";
      t.isOnComposition = !ps(F);
    }
  }, bt = () => {
    fe(() => Xe(t.selected));
  }, P = (b) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", b));
  }, N = () => {
    var b, $;
    t.visible ? (b = i.value || a.value) == null || b.focus() : ($ = a.value) == null || $.focus();
  }, ue = () => {
    var b, $, F;
    t.visible = !1, (b = a.value) == null || b.blur(), (F = ($ = s.value) == null ? void 0 : $.blur) == null || F.call($);
  }, Ke = (b) => {
    var $, F, U;
    ($ = l.value) != null && $.isFocusInsideContent(b) || (F = c.value) != null && F.isFocusInsideContent(b) || (U = p.value) != null && U.contains(b.relatedTarget) || (t.visible && tr(), t.focused = !1, n.emit("blur", b));
  }, kt = (b) => {
    gt(b);
  }, tr = () => {
    t.visible = !1;
  }, Br = (b) => {
    t.visible && (b.preventDefault(), b.stopPropagation(), t.visible = !1);
  }, _n = (b) => {
    b && !t.mouseEnter || C.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), N());
  }, nr = () => {
    t.visible ? L.value[t.hoverIndex] && _t(L.value[t.hoverIndex]) : _n();
  }, $n = (b) => xt(b.value) ? Le(b.value, e.valueKey) : b.value, Cn = S(() => L.value.filter((b) => b.visible).every((b) => b.disabled)), jr = S(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), Dr = S(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), An = (b) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Cn.value) {
      b === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : b === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const $ = L.value[t.hoverIndex];
      ($.disabled === !0 || $.states.groupDisabled === !0 || !$.visible) && An(b), fe(() => Xe(y.value));
    }
  }, zr = () => {
    t.mouseEnter = !0;
  }, Hr = () => {
    t.mouseEnter = !1;
  }, sn = (b, $) => {
    var F, U;
    vt(b, $), (U = (F = c.value) == null ? void 0 : F.updatePopper) == null || U.call(F);
  }, qr = S(() => ({
    maxWidth: `${f(t.inputWidth) - 32 - (D.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: h,
    optionsArray: L,
    selectSize: ae,
    handleResize: we,
    debouncedOnInputChange: V,
    debouncedQueryChange: ve,
    deletePrevTag: _e,
    deleteTag: vt,
    deleteSelected: gt,
    handleOptionSelect: _t,
    scrollToOption: Xe,
    readonly: T,
    resetInputHeight: ne,
    showClose: _,
    iconComponent: O,
    iconReverse: I,
    showNewOption: se,
    collapseTagSize: te,
    setSelected: he,
    managePlaceholder: Ee,
    selectDisabled: C,
    emptyText: H,
    toggleLastOptionHitState: et,
    resetInputState: yt,
    handleComposition: Lt,
    onOptionCreate: Kt,
    onOptionDestroy: Be,
    handleMenuEnter: bt,
    handleFocus: P,
    focus: N,
    blur: ue,
    handleBlur: Ke,
    handleClearClick: kt,
    handleClose: tr,
    handleKeydownEscape: Br,
    toggleMenu: _n,
    selectOption: nr,
    getValueKey: $n,
    navigateOptions: An,
    handleDeleteTooltipTag: sn,
    dropMenuVisible: M,
    queryChange: g,
    groupQueryChange: u,
    showTagList: jr,
    collapseTagList: Dr,
    selectTagsStyle: qr,
    reference: a,
    input: i,
    iOSInput: s,
    tooltipRef: l,
    tagTooltipRef: c,
    tags: d,
    selectWrapper: p,
    scrollbar: m,
    handleMouseEnter: zr,
    handleMouseLeave: Hr
  };
};
var rb = q({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function o(a, i) {
      if (a.length !== i.length)
        return !1;
      for (const [s] of a.entries())
        if (a[s] != i[s])
          return !1;
      return !0;
    }
    return () => {
      var a, i;
      const s = (a = t.default) == null ? void 0 : a.call(t), l = [];
      function c(d) {
        Array.isArray(d) && d.forEach((p) => {
          var m, y, g, u;
          const h = (m = (p == null ? void 0 : p.type) || {}) == null ? void 0 : m.name;
          h === "ElOptionGroup" ? c(!Ue(p.children) && !Array.isArray(p.children) && De((y = p.children) == null ? void 0 : y.default) ? (g = p.children) == null ? void 0 : g.default() : p.children) : h === "ElOption" ? l.push((u = p.props) == null ? void 0 : u.label) : Array.isArray(p.children) && c(p.children);
        });
      }
      return s.length && c((i = s[0]) == null ? void 0 : i.children), o(l, r) || (r = l, n("update-options", l)), s;
    };
  }
});
const Pi = "ElSelect", ob = q({
  name: Pi,
  componentName: Pi,
  components: {
    ElInput: Jo,
    ElSelectMenu: eb,
    ElOption: oa,
    ElOptions: rb,
    ElTag: ky,
    ElScrollbar: r0,
    ElTooltip: iy,
    ElIcon: wt
  },
  directives: { ClickOutside: xy },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: tg
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: ra.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: vn,
      default: Bo
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: vn,
      default: gv
    },
    tagType: { ...Gs.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Rr,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    it,
    ds,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = pe("select"), r = pe("input"), { t: o } = jo(), a = tb(e), {
      optionList: i,
      optionsArray: s,
      selectSize: l,
      readonly: c,
      handleResize: d,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: y,
      deletePrevTag: g,
      deleteTag: u,
      deleteSelected: h,
      handleOptionSelect: v,
      scrollToOption: w,
      setSelected: E,
      resetInputHeight: T,
      managePlaceholder: C,
      showClose: _,
      selectDisabled: O,
      iconComponent: I,
      iconReverse: D,
      showNewOption: B,
      emptyText: H,
      toggleLastOptionHitState: L,
      resetInputState: Y,
      handleComposition: se,
      onOptionCreate: ae,
      onOptionDestroy: te,
      handleMenuEnter: M,
      handleFocus: ne,
      focus: re,
      blur: Ee,
      handleBlur: Ie,
      handleClearClick: he,
      handleClose: Te,
      handleKeydownEscape: xe,
      toggleMenu: we,
      selectOption: Re,
      getValueKey: k,
      navigateOptions: V,
      handleDeleteTooltipTag: ve,
      dropMenuVisible: oe,
      reference: le,
      input: _e,
      iOSInput: vt,
      tooltipRef: gt,
      tagTooltipRef: _t,
      tags: ht,
      selectWrapper: mt,
      scrollbar: Xe,
      queryChange: Kt,
      groupQueryChange: Be,
      handleMouseEnter: yt,
      handleMouseLeave: et,
      showTagList: Lt,
      collapseTagList: bt,
      selectTagsStyle: P
    } = nb(e, a, t), {
      inputWidth: N,
      selected: ue,
      inputLength: Ke,
      filteredOptionsCount: kt,
      visible: tr,
      selectedLabel: Br,
      hoverIndex: _n,
      query: nr,
      inputHovering: $n,
      currentPlaceholder: Cn,
      menuVisibleOnFocus: jr,
      isOnComposition: Dr,
      options: An,
      cachedOptions: zr,
      optionsCount: Hr,
      prefixWidth: sn
    } = Gn(a), qr = S(() => {
      const Ce = [n.b()], Ut = f(l);
      return Ut && Ce.push(n.m(Ut)), e.disabled && Ce.push(n.m("disabled")), Ce;
    }), b = S(() => [
      n.e("tags"),
      n.is("disabled", f(O))
    ]), $ = S(() => [
      n.b("tags-wrapper"),
      { "has-prefix": f(sn) && f(ue).length }
    ]), F = S(() => [
      n.e("input"),
      n.is(f(l)),
      n.is("disabled", f(O))
    ]), U = S(() => [
      n.e("input"),
      n.is(f(l)),
      n.em("input", "iOS")
    ]), $e = S(() => [
      n.is("empty", !e.allowCreate && !!f(nr) && f(kt) === 0)
    ]), Fe = S(() => ({ maxWidth: `${f(N) > 123 ? f(N) - 123 : f(N) - 75}px` })), $t = S(() => ({
      marginLeft: `${f(sn)}px`,
      flexGrow: 1,
      width: `${f(Ke) / (f(N) - 32)}%`,
      maxWidth: `${f(N) - 42}px`
    }));
    We(Nr, Vt({
      props: e,
      options: An,
      optionsArray: s,
      cachedOptions: zr,
      optionsCount: Hr,
      filteredOptionsCount: kt,
      hoverIndex: _n,
      handleOptionSelect: v,
      onOptionCreate: ae,
      onOptionDestroy: te,
      selectWrapper: mt,
      selected: ue,
      setSelected: E,
      queryChange: Kt,
      groupQueryChange: Be
    })), Pe(() => {
      a.cachedPlaceHolder = Cn.value = e.placeholder || (() => o("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Cn.value = ""), Yn(mt, d), e.remote && e.multiple && T(), fe(() => {
        const Ce = le.value && le.value.$el;
        if (Ce && (N.value = Ce.getBoundingClientRect().width, t.slots.prefix)) {
          const Ut = Ce.querySelector(`.${r.e("prefix")}`);
          sn.value = Math.max(Ut.getBoundingClientRect().width + 11, 30);
        }
      }), E();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(it, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(it, "");
    const Ct = S(() => {
      var Ce, Ut;
      return (Ut = (Ce = gt.value) == null ? void 0 : Ce.popperRef) == null ? void 0 : Ut.contentRef;
    });
    return {
      isIOS: Fi,
      onOptionsRendered: (Ce) => {
        i.value = Ce;
      },
      prefixWidth: sn,
      selectSize: l,
      readonly: c,
      handleResize: d,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: y,
      deletePrevTag: g,
      deleteTag: u,
      handleDeleteTooltipTag: ve,
      deleteSelected: h,
      handleOptionSelect: v,
      scrollToOption: w,
      inputWidth: N,
      selected: ue,
      inputLength: Ke,
      filteredOptionsCount: kt,
      visible: tr,
      selectedLabel: Br,
      hoverIndex: _n,
      query: nr,
      inputHovering: $n,
      currentPlaceholder: Cn,
      menuVisibleOnFocus: jr,
      isOnComposition: Dr,
      options: An,
      resetInputHeight: T,
      managePlaceholder: C,
      showClose: _,
      selectDisabled: O,
      iconComponent: I,
      iconReverse: D,
      showNewOption: B,
      emptyText: H,
      toggleLastOptionHitState: L,
      resetInputState: Y,
      handleComposition: se,
      handleMenuEnter: M,
      handleFocus: ne,
      focus: re,
      blur: Ee,
      handleBlur: Ie,
      handleClearClick: he,
      handleClose: Te,
      handleKeydownEscape: xe,
      toggleMenu: we,
      selectOption: Re,
      getValueKey: k,
      navigateOptions: V,
      dropMenuVisible: oe,
      reference: le,
      input: _e,
      iOSInput: vt,
      tooltipRef: gt,
      popperPaneRef: Ct,
      tags: ht,
      selectWrapper: mt,
      scrollbar: Xe,
      wrapperKls: qr,
      tagsKls: b,
      tagWrapperKls: $,
      inputKls: F,
      iOSInputKls: U,
      scrollbarKls: $e,
      selectTagsStyle: P,
      nsSelect: n,
      tagTextStyle: Fe,
      inputStyle: $t,
      handleMouseEnter: yt,
      handleMouseLeave: et,
      showTagList: Lt,
      collapseTagList: bt,
      tagTooltipRef: _t
    };
  }
}), ab = ["disabled", "autocomplete", "aria-label"], ib = ["disabled"], sb = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function lb(e, t, n, r, o, a) {
  const i = Nt("el-tag"), s = Nt("el-tooltip"), l = Nt("el-icon"), c = Nt("el-input"), d = Nt("el-option"), p = Nt("el-options"), m = Nt("el-scrollbar"), y = Nt("el-select-menu"), g = dl("click-outside");
  return It((A(), z("div", {
    ref: "selectWrapper",
    class: R(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...u) => e.handleMouseEnter && e.handleMouseEnter(...u)),
    onMouseleave: t[23] || (t[23] = (...u) => e.handleMouseLeave && e.handleMouseLeave(...u)),
    onClick: t[24] || (t[24] = at((...u) => e.toggleMenu && e.toggleMenu(...u), ["stop"]))
  }, [
    ee(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: j(() => [
        Z("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (u) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (u) => e.inputHovering = !1)
        }, [
          e.multiple ? (A(), z("div", {
            key: 0,
            ref: "tags",
            tabindex: "-1",
            class: R(e.tagsKls),
            style: be(e.selectTagsStyle),
            onClick: t[15] || (t[15] = (...u) => e.focus && e.focus(...u))
          }, [
            e.collapseTags && e.selected.length ? (A(), W(Bn, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: j(() => [
                Z("span", {
                  class: R(e.tagWrapperKls)
                }, [
                  (A(!0), z(ze, null, Mn(e.showTagList, (u) => (A(), W(i, {
                    key: e.getValueKey(u),
                    closable: !e.selectDisabled && !u.isDisabled,
                    size: e.collapseTagSize,
                    hit: u.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, u)
                  }, {
                    default: j(() => [
                      Z("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: be(e.tagTextStyle)
                      }, Me(u.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (A(), W(i, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: j(() => [
                      e.collapseTagsTooltip ? (A(), W(s, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: j(() => [
                          Z("span", {
                            class: R(e.nsSelect.e("tags-text"))
                          }, "+ " + Me(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: j(() => [
                          Z("div", {
                            class: R(e.nsSelect.e("collapse-tags"))
                          }, [
                            (A(!0), z(ze, null, Mn(e.collapseTagList, (u) => (A(), z("div", {
                              key: e.getValueKey(u),
                              class: R(e.nsSelect.e("collapse-tag"))
                            }, [
                              ee(i, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !u.isDisabled,
                                size: e.collapseTagSize,
                                hit: u.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (h) => e.handleDeleteTooltipTag(h, u)
                              }, {
                                default: j(() => [
                                  Z("span", {
                                    class: R(e.nsSelect.e("tags-text")),
                                    style: be({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, Me(u.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (A(), z("span", {
                        key: 1,
                        class: R(e.nsSelect.e("tags-text"))
                      }, "+ " + Me(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : G("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : G("v-if", !0),
            e.collapseTags ? G("v-if", !0) : (A(), W(Bn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: j(() => [
                Z("span", {
                  class: R(e.tagWrapperKls),
                  style: be(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (A(!0), z(ze, null, Mn(e.selected, (u) => (A(), W(i, {
                    key: e.getValueKey(u),
                    closable: !e.selectDisabled && !u.isDisabled,
                    size: e.collapseTagSize,
                    hit: u.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, u)
                  }, {
                    default: j(() => [
                      Z("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: be({ maxWidth: e.inputWidth - 75 + "px" })
                      }, Me(u.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? It((A(), z("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (u) => e.query = u),
              type: "text",
              class: R(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: be(e.inputStyle),
              "aria-label": e.ariaLabel,
              onFocus: t[1] || (t[1] = (...u) => e.handleFocus && e.handleFocus(...u)),
              onBlur: t[2] || (t[2] = (...u) => e.handleBlur && e.handleBlur(...u)),
              onKeyup: t[3] || (t[3] = (...u) => e.managePlaceholder && e.managePlaceholder(...u)),
              onKeydown: [
                t[4] || (t[4] = (...u) => e.resetInputState && e.resetInputState(...u)),
                t[5] || (t[5] = nt(at((u) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = nt(at((u) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = nt((...u) => e.handleKeydownEscape && e.handleKeydownEscape(...u), ["esc"])),
                t[8] || (t[8] = nt(at((...u) => e.selectOption && e.selectOption(...u), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = nt((...u) => e.deletePrevTag && e.deletePrevTag(...u), ["delete"])),
                t[10] || (t[10] = nt((u) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionupdate: t[12] || (t[12] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionend: t[13] || (t[13] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onInput: t[14] || (t[14] = (...u) => e.debouncedQueryChange && e.debouncedQueryChange(...u))
            }, null, 46, ab)), [
              [pl, e.query]
            ]) : G("v-if", !0)
          ], 6)) : G("v-if", !0),
          G(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (A(), z("input", {
            key: 1,
            ref: "iOSInput",
            class: R(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, ib)) : G("v-if", !0),
          ee(c, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (u) => e.selectedLabel = u),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: R([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            label: e.ariaLabel,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = nt(at((u) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = nt(at((u) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              nt(at(e.selectOption, ["stop", "prevent"]), ["enter"]),
              nt(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = nt((u) => e.visible = !1, ["tab"]))
            ]
          }, vl({
            suffix: j(() => [
              e.iconComponent && !e.showClose ? (A(), W(l, {
                key: 0,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: j(() => [
                  (A(), W(He(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              e.showClose && e.clearIcon ? (A(), W(l, {
                key: 1,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: j(() => [
                  (A(), W(He(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : G("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: j(() => [
                Z("div", sb, [
                  X(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: j(() => [
        ee(y, null, {
          default: j(() => [
            It(ee(m, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: R(e.scrollbarKls)
            }, {
              default: j(() => [
                e.showNewOption ? (A(), W(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : G("v-if", !0),
                ee(p, { onUpdateOptions: e.onOptionsRendered }, {
                  default: j(() => [
                    X(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Sn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (A(), z(ze, { key: 0 }, [
              e.$slots.empty ? X(e.$slots, "empty", { key: 0 }) : (A(), z("p", {
                key: 1,
                class: R(e.nsSelect.be("dropdown", "empty"))
              }, Me(e.emptyText), 3))
            ], 64)) : G("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [g, e.handleClose, e.popperPaneRef]
  ]);
}
var ub = /* @__PURE__ */ ge(ob, [["render", lb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const cb = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = pe("select"), n = x(!0), r = Qe(), o = x([]);
    We(Zs, Vt({
      ...Gn(e)
    }));
    const a = ie(Nr);
    Pe(() => {
      o.value = i(r.subTree);
    });
    const i = (l) => {
      const c = [];
      return Array.isArray(l.children) && l.children.forEach((d) => {
        var p;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? c.push(d.component.proxy) : (p = d.children) != null && p.length && c.push(...i(d));
      }), c;
    }, { groupQueryChange: s } = hr(a);
    return K(s, () => {
      n.value = o.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function fb(e, t, n, r, o, a) {
  return It((A(), z("ul", {
    class: R(e.ns.be("group", "wrap"))
  }, [
    Z("li", {
      class: R(e.ns.be("group", "title"))
    }, Me(e.label), 3),
    Z("li", null, [
      Z("ul", {
        class: R(e.ns.b("group"))
      }, [
        X(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Sn, e.visible]
  ]);
}
var Qs = /* @__PURE__ */ ge(cb, [["render", fb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const db = dt(ub, {
  Option: oa,
  OptionGroup: Qs
}), pb = Mr(oa);
Mr(Qs);
function vb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gl(e);
}
const gb = (e, t) => ee("span", null, [t]), oo = (e, t) => ee(Jo, lt({
  modelValue: e[t.field],
  "onUpdate:modelValue": (n) => e[t.field] = n,
  type: t.type,
  "input-style": t.inputStyle,
  size: t.size,
  autocomplete: t.autocomplete,
  "show-password": t.type == "password",
  clearable: !0,
  placeholder: t.placeholder,
  autosize: {
    minRows: 3,
    maxRows: 4
  }
}, t.props), null), hb = (e, t) => ee(Jo, lt({
  modelValue: e[t.field],
  "onUpdate:modelValue": (n) => e[t.field] = n,
  type: t.type,
  "input-style": t.inputStyle,
  size: t.size,
  rows: t.rows,
  clearable: t.clearable,
  placeholder: t.placeholder
}, t.props), {
  default: () => [t.rows]
}), mb = (e, {
  optionsKey: t
} = {}) => ({
  label: t ? e[t.label] : e.label,
  value: t ? e[t.value] : e.value
}), yb = (e, t) => {
  let n;
  return ee(db, lt({
    size: t.size,
    modelValue: e[t.field],
    "onUpdate:modelValue": (r) => e[t.field] = r,
    filterable: !0,
    style: t.style,
    clearable: t.clearable,
    placeholder: t.placeholder
  }, t.props), vb(n = t.options.map((r) => ee(pb, mb(r, t), null))) ? n : {
    default: () => [n]
  });
}, bb = (e, t) => {
  ee(Us, {
    type: t.type,
    size: t.size,
    icon: t.icon,
    plain: t.plain,
    click: t.clickBtn,
    value: t.value
  }, null);
}, wb = (e, t, n) => {
  if (!e)
    return null;
  if (!n)
    return gb(e, t);
  switch (t.type) {
    case "input":
      return oo(e, t);
    case "textarea":
      return hb(e, t);
    case "password":
      return oo(e, t);
    case "number":
      return oo(e, t);
    case "select":
      return yb(e, t);
    case "date":
    case "daterange":
      return Date(e, t);
    case "time":
      return Time(e, t);
    case "radio":
      return Radio(e, t);
    case "checkbox":
      return Checkbox(e, t);
    case "button":
      return bb(e, t);
    default:
      return null;
  }
}, Sb = () => /* @__PURE__ */ q({
  props: {
    data: Object,
    formData: Object,
    editable: Boolean
  },
  setup(e) {
    return () => e.data ? wb(e.formData, e.data, e.editable) : null;
  }
}), Ob = (e, t) => t.isHidden ? "" : ee(Us, {
  type: t.type,
  size: t.size,
  icon: t.icon,
  plain: t.plain,
  onClick: t.onClick
}, {
  default: () => [t.name]
}), Eb = (e, t, n) => t ? n ? Ob(e, t) : Span(e, t) : null, Tb = () => /* @__PURE__ */ q({
  props: {
    data: Object,
    formData: Object,
    editable: Boolean
  },
  //不能直接用click 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件。
  emits: ["onClick"],
  setup(e) {
    return () => e.data ? Eb(e.formData, e.data, e.editable) : null;
  }
});
const _b = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, $b = {
  __name: "TForm",
  props: {
    modelForm: {
      type: Object,
      require: !0
    },
    rules: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      require: !0,
      default: []
    },
    inline: {
      type: Boolean,
      default: !0
    },
    labelWidth: {
      type: String,
      default: "120"
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    editable: {
      type: Boolean,
      default: !0
    },
    colLayout: {
      type: Object,
      default() {
        return {
          xl: 5,
          //2K屏等
          lg: 8,
          //大屏幕，如大桌面显示器
          md: 12,
          //中等屏幕，如桌面显示器
          sm: 24,
          //小屏幕，如平板
          xs: 24
          //超小屏，如手机
        };
      }
    },
    elRowGutter: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: "default"
    },
    btnList: {
      type: Object,
      default: []
    },
    formBorder: {
      type: Boolean,
      default: !1
    },
    formRef: {
      type: String,
      default: "formRef"
    },
    customFormItem: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, r = Sb(), o = Tb(), a = x(), i = x(!1);
    function s(d) {
      d.onClick && d.onClick();
    }
    async function l() {
      return a.value ? await a.value.validate() : void 0;
    }
    async function c() {
      return a.value ? await a.value.resetFields() : await a.value.resetFields();
    }
    return n.customFormItem && (i.value = !0), t({
      validate: l,
      resetFields: c
    }), (d, p) => {
      const m = Fm, y = Gy, g = qy, u = xm;
      return A(), W(u, {
        ref_key: "FormRef",
        ref: a,
        class: R(e.formBorder ? "form-border" : ""),
        model: e.modelForm,
        rules: e.editable ? e.rules : {},
        inline: e.inline,
        "label-position": e.labelPosition,
        "label-width": e.labelWidth
      }, {
        default: j(() => [
          X(d.$slots, "header", {}, void 0, !0),
          ee(g, { gutter: e.elRowGutter }, {
            default: j(() => [
              (A(!0), z(ze, null, Mn(e.data, (h, v) => (A(), W(y, {
                span: h.span,
                key: v
              }, {
                default: j(() => [
                  h.isHidden ? G("", !0) : (A(), W(m, {
                    key: 0,
                    class: R(i.value ? "custom-form-item" : ""),
                    label: h.label ? h.label + "：" : "",
                    prop: h.prop,
                    "label-width": h.labelWidth
                  }, {
                    default: j(() => [
                      ee(f(r), {
                        formData: e.modelForm,
                        editable: e.editable,
                        data: h
                      }, null, 8, ["formData", "editable", "data"]),
                      h.children ? (A(), W(f(r), {
                        key: 0,
                        formData: e.modelForm,
                        editable: e.editable,
                        clearable: !1,
                        data: h.children
                      }, null, 8, ["formData", "editable", "data"])) : G("", !0)
                    ]),
                    _: 2
                  }, 1032, ["class", "label", "prop", "label-width"]))
                ]),
                _: 2
              }, 1032, ["span"]))), 128)),
              e.btnList && e.btnList.length ? (A(), W(y, {
                key: 0,
                class: "button-list",
                span: 24
              }, {
                default: j(() => [
                  ee(m, {
                    class: R(i.value ? "custom-form-item" : "")
                  }, {
                    default: j(() => [
                      (A(!0), z(ze, null, Mn(e.btnList, (h, v) => (A(), z("div", { key: v }, [
                        ee(f(o), {
                          formData: e.modelForm,
                          editable: e.editable,
                          data: h,
                          onOnClick: (w) => s(h)
                        }, null, 8, ["formData", "editable", "data", "onOnClick"])
                      ]))), 128))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              })) : G("", !0),
              X(d.$slots, "footer", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["gutter"])
        ]),
        _: 3
      }, 8, ["class", "model", "rules", "inline", "label-position", "label-width"]);
    };
  }
}, Cb = /* @__PURE__ */ _b($b, [["__scopeId", "data-v-cba66fbc"]]), Pb = {
  install(e) {
    e.component("TForm", Cb);
  }
};
export {
  Pb as default
};
