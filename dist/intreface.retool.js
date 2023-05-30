var Bx = Object.defineProperty;
var zx = (n, t, e) => t in n ? Bx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var N = (n, t, e) => (zx(n, typeof t != "symbol" ? t + "" : t, e), e);
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function rs(n) {
  return n + 0.5 | 0;
}
const dn = (n, t, e) => Math.max(Math.min(n, e), t);
function Ni(n) {
  return dn(rs(n * 2.55), 0, 255);
}
function _n(n) {
  return dn(rs(n * 255), 0, 255);
}
function Ze(n) {
  return dn(rs(n / 2.55) / 100, 0, 1);
}
function kh(n) {
  return dn(rs(n * 100), 0, 100);
}
const ve = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, xa = [..."0123456789ABCDEF"], Wx = (n) => xa[n & 15], Nx = (n) => xa[(n & 240) >> 4] + xa[n & 15], Qs = (n) => (n & 240) >> 4 === (n & 15), Hx = (n) => Qs(n.r) && Qs(n.g) && Qs(n.b) && Qs(n.a);
function Vx(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & ve[n[1]] * 17,
    g: 255 & ve[n[2]] * 17,
    b: 255 & ve[n[3]] * 17,
    a: t === 5 ? ve[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: ve[n[1]] << 4 | ve[n[2]],
    g: ve[n[3]] << 4 | ve[n[4]],
    b: ve[n[5]] << 4 | ve[n[6]],
    a: t === 9 ? ve[n[7]] << 4 | ve[n[8]] : 255
  })), e;
}
const Ux = (n, t) => n < 255 ? t(n) : "";
function $x(n) {
  var t = Hx(n) ? Wx : Nx;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + Ux(n.a, t) : void 0;
}
const Yx = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zu(n, t, e) {
  const i = t * Math.min(e, 1 - e), r = (a, l = (a + n / 30) % 12) => e - i * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  return [r(0), r(8), r(4)];
}
function Xx(n, t, e) {
  const i = (r, a = (r + n / 60) % 6) => e - e * t * Math.max(Math.min(a, 4 - a, 1), 0);
  return [i(5), i(3), i(1)];
}
function jx(n, t, e) {
  const i = Zu(n, 1, 0.5);
  let r;
  for (t + e > 1 && (r = 1 / (t + e), t *= r, e *= r), r = 0; r < 3; r++)
    i[r] *= 1 - t - e, i[r] += t;
  return i;
}
function Gx(n, t, e, i, r) {
  return n === r ? (t - e) / i + (t < e ? 6 : 0) : t === r ? (e - n) / i + 2 : (n - t) / i + 4;
}
function Fa(n) {
  const e = n.r / 255, i = n.g / 255, r = n.b / 255, a = Math.max(e, i, r), l = Math.min(e, i, r), c = (a + l) / 2;
  let u, f, g;
  return a !== l && (g = a - l, f = c > 0.5 ? g / (2 - a - l) : g / (a + l), u = Gx(e, i, r, g, a), u = u * 60 + 0.5), [u | 0, f || 0, c];
}
function Ba(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(_n);
}
function za(n, t, e) {
  return Ba(Zu, n, t, e);
}
function Kx(n, t, e) {
  return Ba(jx, n, t, e);
}
function qx(n, t, e) {
  return Ba(Xx, n, t, e);
}
function Ju(n) {
  return (n % 360 + 360) % 360;
}
function Zx(n) {
  const t = Yx.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? Ni(+t[5]) : _n(+t[5]));
  const r = Ju(+t[2]), a = +t[3] / 100, l = +t[4] / 100;
  return t[1] === "hwb" ? i = Kx(r, a, l) : t[1] === "hsv" ? i = qx(r, a, l) : i = za(r, a, l), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function Jx(n, t) {
  var e = Fa(n);
  e[0] = Ju(e[0] + t), e = za(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function Qx(n) {
  if (!n)
    return;
  const t = Fa(n), e = t[0], i = kh(t[1]), r = kh(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${r}%, ${Ze(n.a)})` : `hsl(${e}, ${i}%, ${r}%)`;
}
const Th = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Dh = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function tv() {
  const n = {}, t = Object.keys(Dh), e = Object.keys(Th);
  let i, r, a, l, c;
  for (i = 0; i < t.length; i++) {
    for (l = c = t[i], r = 0; r < e.length; r++)
      a = e[r], c = c.replace(a, Th[a]);
    a = parseInt(Dh[l], 16), n[c] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return n;
}
let tr;
function ev(n) {
  tr || (tr = tv(), tr.transparent = [0, 0, 0, 0]);
  const t = tr[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const nv = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function iv(n) {
  const t = nv.exec(n);
  let e = 255, i, r, a;
  if (t) {
    if (t[7] !== i) {
      const l = +t[7];
      e = t[8] ? Ni(l) : dn(l * 255, 0, 255);
    }
    return i = +t[1], r = +t[3], a = +t[5], i = 255 & (t[2] ? Ni(i) : dn(i, 0, 255)), r = 255 & (t[4] ? Ni(r) : dn(r, 0, 255)), a = 255 & (t[6] ? Ni(a) : dn(a, 0, 255)), {
      r: i,
      g: r,
      b: a,
      a: e
    };
  }
}
function sv(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Ze(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const sa = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, ri = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function rv(n, t, e) {
  const i = ri(Ze(n.r)), r = ri(Ze(n.g)), a = ri(Ze(n.b));
  return {
    r: _n(sa(i + e * (ri(Ze(t.r)) - i))),
    g: _n(sa(r + e * (ri(Ze(t.g)) - r))),
    b: _n(sa(a + e * (ri(Ze(t.b)) - a))),
    a: n.a + e * (t.a - n.a)
  };
}
function er(n, t, e) {
  if (n) {
    let i = Fa(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = za(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function Qu(n, t) {
  return n && Object.assign(t || {}, n);
}
function Lh(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = _n(n[3]))) : (t = Qu(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = _n(t.a)), t;
}
function ov(n) {
  return n.charAt(0) === "r" ? iv(n) : Zx(n);
}
class Zi {
  constructor(t) {
    if (t instanceof Zi)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = Lh(t) : e === "string" && (i = Vx(t) || ev(t) || ov(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Qu(this._rgb);
    return t && (t.a = Ze(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Lh(t);
  }
  rgbString() {
    return this._valid ? sv(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? $x(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Qx(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb, r = t.rgb;
      let a;
      const l = e === a ? 0.5 : e, c = 2 * l - 1, u = i.a - r.a, f = ((c * u === -1 ? c : (c + u) / (1 + c * u)) + 1) / 2;
      a = 1 - f, i.r = 255 & f * i.r + a * r.r + 0.5, i.g = 255 & f * i.g + a * r.g + 0.5, i.b = 255 & f * i.b + a * r.b + 0.5, i.a = l * i.a + (1 - l) * r.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = rv(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Zi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = _n(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = rs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return er(this._rgb, 2, t), this;
  }
  darken(t) {
    return er(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return er(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return er(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Jx(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function Ge() {
}
const av = (() => {
  let n = 0;
  return () => n++;
})();
function lt(n) {
  return n === null || typeof n > "u";
}
function vt(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ot(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function Ot(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function ce(n, t) {
  return Ot(n) ? n : t;
}
function Z(n, t) {
  return typeof n > "u" ? t : n;
}
const lv = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, tf = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function bt(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function gt(n, t, e, i) {
  let r, a, l;
  if (vt(n))
    if (a = n.length, i)
      for (r = a - 1; r >= 0; r--)
        t.call(e, n[r], r);
    else
      for (r = 0; r < a; r++)
        t.call(e, n[r], r);
  else if (ot(n))
    for (l = Object.keys(n), a = l.length, r = 0; r < a; r++)
      t.call(e, n[l[r]], l[r]);
}
function yr(n, t) {
  let e, i, r, a;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (r = n[e], a = t[e], r.datasetIndex !== a.datasetIndex || r.index !== a.index)
      return !1;
  return !0;
}
function wr(n) {
  if (vt(n))
    return n.map(wr);
  if (ot(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let r = 0;
    for (; r < i; ++r)
      t[e[r]] = wr(n[e[r]]);
    return t;
  }
  return n;
}
function ef(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function cv(n, t, e, i) {
  if (!ef(n))
    return;
  const r = t[n], a = e[n];
  ot(r) && ot(a) ? Ji(r, a, i) : t[n] = wr(a);
}
function Ji(n, t, e) {
  const i = vt(t) ? t : [
    t
  ], r = i.length;
  if (!ot(n))
    return n;
  e = e || {};
  const a = e.merger || cv;
  let l;
  for (let c = 0; c < r; ++c) {
    if (l = i[c], !ot(l))
      continue;
    const u = Object.keys(l);
    for (let f = 0, g = u.length; f < g; ++f)
      a(u[f], n, l, e);
  }
  return n;
}
function Xi(n, t) {
  return Ji(n, t, {
    merger: hv
  });
}
function hv(n, t, e) {
  if (!ef(n))
    return;
  const i = t[n], r = e[n];
  ot(i) && ot(r) ? Xi(i, r) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = wr(r));
}
const Rh = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (n) => n,
  // default resolvers
  x: (n) => n.x,
  y: (n) => n.y
};
function uv(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const r of t)
    i += r, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function fv(n) {
  const t = uv(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function bn(n, t) {
  return (Rh[t] || (Rh[t] = fv(t)))(n);
}
function Wa(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Qi = (n) => typeof n < "u", xn = (n) => typeof n == "function", Eh = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function dv(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const St = Math.PI, yt = 2 * St, gv = yt + St, Sr = Number.POSITIVE_INFINITY, pv = St / 180, Pt = St / 2, Ln = St / 4, Ih = St * 2 / 3, gn = Math.log10, Be = Math.sign;
function ji(n, t, e) {
  return Math.abs(n - t) < e;
}
function Fh(n) {
  const t = Math.round(n);
  n = ji(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(gn(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function mv(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((r, a) => r - a).pop(), t;
}
function ci(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function _v(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function nf(n, t, e) {
  let i, r, a;
  for (i = 0, r = n.length; i < r; i++)
    a = n[i][e], isNaN(a) || (t.min = Math.min(t.min, a), t.max = Math.max(t.max, a));
}
function Ce(n) {
  return n * (St / 180);
}
function Na(n) {
  return n * (180 / St);
}
function Bh(n) {
  if (!Ot(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function sf(n, t) {
  const e = t.x - n.x, i = t.y - n.y, r = Math.sqrt(e * e + i * i);
  let a = Math.atan2(i, e);
  return a < -0.5 * St && (a += yt), {
    angle: a,
    distance: r
  };
}
function va(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function bv(n, t) {
  return (n - t + gv) % yt - St;
}
function he(n) {
  return (n % yt + yt) % yt;
}
function ts(n, t, e, i) {
  const r = he(n), a = he(t), l = he(e), c = he(a - r), u = he(l - r), f = he(r - a), g = he(r - l);
  return r === a || r === l || i && a === l || c > u && f < g;
}
function zt(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function xv(n) {
  return zt(n, -32768, 32767);
}
function Je(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Ha(n, t, e) {
  e = e || ((l) => n[l] < t);
  let i = n.length - 1, r = 0, a;
  for (; i - r > 1; )
    a = r + i >> 1, e(a) ? r = a : i = a;
  return {
    lo: r,
    hi: i
  };
}
const Qe = (n, t, e, i) => Ha(n, e, i ? (r) => {
  const a = n[r][t];
  return a < e || a === e && n[r + 1][t] === e;
} : (r) => n[r][t] < e), vv = (n, t, e) => Ha(n, e, (i) => n[i][t] >= e);
function yv(n, t, e) {
  let i = 0, r = n.length;
  for (; i < r && n[i] < t; )
    i++;
  for (; r > i && n[r - 1] > e; )
    r--;
  return i > 0 || r < n.length ? n.slice(i, r) : n;
}
const rf = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function wv(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), rf.forEach((e) => {
    const i = "_onData" + Wa(e), r = n[e];
    Object.defineProperty(n, e, {
      configurable: !0,
      enumerable: !1,
      value(...a) {
        const l = r.apply(this, a);
        return n._chartjs.listeners.forEach((c) => {
          typeof c[i] == "function" && c[i](...a);
        }), l;
      }
    });
  });
}
function zh(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, r = i.indexOf(t);
  r !== -1 && i.splice(r, 1), !(i.length > 0) && (rf.forEach((a) => {
    delete n[a];
  }), delete n._chartjs);
}
function of(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const af = function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
}();
function lf(n, t) {
  let e = [], i = !1;
  return function(...r) {
    e = r, i || (i = !0, af.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function Sv(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const Va = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", $t = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, Mv = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function cf(n, t, e) {
  const i = t.length;
  let r = 0, a = i;
  if (n._sorted) {
    const { iScale: l, _parsed: c } = n, u = l.axis, { min: f, max: g, minDefined: p, maxDefined: _ } = l.getUserBounds();
    p && (r = zt(Math.min(
      // @ts-expect-error Need to type _parsed
      Qe(c, l.axis, f).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? i : Qe(t, u, l.getPixelForValue(f)).lo
    ), 0, i - 1)), _ ? a = zt(Math.max(
      // @ts-expect-error Need to type _parsed
      Qe(c, l.axis, g, !0).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? 0 : Qe(t, u, l.getPixelForValue(g), !0).hi + 1
    ), r, i) - r : a = i - r;
  }
  return {
    start: r,
    count: a
  };
}
function hf(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n, r = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!i)
    return n._scaleRanges = r, !0;
  const a = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
  return Object.assign(i, r), a;
}
const nr = (n) => n === 0 || n === 1, Wh = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * yt / e)), Nh = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * yt / e) + 1, Gi = {
  linear: (n) => n,
  easeInQuad: (n) => n * n,
  easeOutQuad: (n) => -n * (n - 2),
  easeInOutQuad: (n) => (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
  easeInCubic: (n) => n * n * n,
  easeOutCubic: (n) => (n -= 1) * n * n + 1,
  easeInOutCubic: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
  easeInQuart: (n) => n * n * n * n,
  easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
  easeInOutQuart: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
  easeInQuint: (n) => n * n * n * n * n,
  easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
  easeInOutQuint: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
  easeInSine: (n) => -Math.cos(n * Pt) + 1,
  easeOutSine: (n) => Math.sin(n * Pt),
  easeInOutSine: (n) => -0.5 * (Math.cos(St * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => nr(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => nr(n) ? n : Wh(n, 0.075, 0.3),
  easeOutElastic: (n) => nr(n) ? n : Nh(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return nr(n) ? n : n < 0.5 ? 0.5 * Wh(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * Nh(n * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(n) {
    return n * n * ((1.70158 + 1) * n - 1.70158);
  },
  easeOutBack(n) {
    return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
  },
  easeInOutBack(n) {
    let t = 1.70158;
    return (n /= 0.5) < 1 ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t)) : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
  },
  easeInBounce: (n) => 1 - Gi.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Gi.easeInBounce(n * 2) * 0.5 : Gi.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Ua(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Hh(n) {
  return Ua(n) ? n : new Zi(n);
}
function ra(n) {
  return Ua(n) ? n : new Zi(n).saturate(0.5).darken(0.1).hexString();
}
const Av = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Ov = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Pv(n) {
  n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), n.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), n.set("animations", {
    colors: {
      type: "color",
      properties: Ov
    },
    numbers: {
      type: "number",
      properties: Av
    }
  }), n.describe("animations", {
    _fallback: "animation"
  }), n.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Cv(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Vh = /* @__PURE__ */ new Map();
function kv(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = Vh.get(e);
  return i || (i = new Intl.NumberFormat(n, t), Vh.set(e, i)), i;
}
function os(n, t, e) {
  return kv(t, e).format(n);
}
const uf = {
  values(n) {
    return vt(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let r, a = n;
    if (e.length > 1) {
      const f = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (f < 1e-4 || f > 1e15) && (r = "scientific"), a = Tv(n, e);
    }
    const l = gn(Math.abs(a)), c = isNaN(l) ? 1 : Math.max(Math.min(-1 * Math.floor(l), 20), 0), u = {
      notation: r,
      minimumFractionDigits: c,
      maximumFractionDigits: c
    };
    return Object.assign(u, this.options.ticks.format), os(n, i, u);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(gn(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? uf.numeric.call(this, n, t, e) : "";
  }
};
function Tv(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Tr = {
  formatters: uf
};
function Dv(n) {
  n.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Tr.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), n.route("scale.ticks", "color", "", "color"), n.route("scale.grid", "color", "", "borderColor"), n.route("scale.border", "color", "", "borderColor"), n.route("scale.title", "color", "", "color"), n.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), n.describe("scales", {
    _fallback: "scale"
  }), n.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Hn = /* @__PURE__ */ Object.create(null), ya = /* @__PURE__ */ Object.create(null);
function Ki(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, r = e.length; i < r; ++i) {
    const a = e[i];
    n = n[a] || (n[a] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function oa(n, t, e) {
  return typeof t == "string" ? Ji(Ki(n, t), e) : Ji(Ki(n, ""), t);
}
class Lv {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, r) => ra(r.backgroundColor), this.hoverBorderColor = (i, r) => ra(r.borderColor), this.hoverColor = (i, r) => ra(r.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return oa(this, t, e);
  }
  get(t) {
    return Ki(this, t);
  }
  describe(t, e) {
    return oa(ya, t, e);
  }
  override(t, e) {
    return oa(Hn, t, e);
  }
  route(t, e, i, r) {
    const a = Ki(this, t), l = Ki(this, i), c = "_" + e;
    Object.defineProperties(a, {
      [c]: {
        value: a[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const u = this[c], f = l[r];
          return ot(u) ? Object.assign({}, f, u) : Z(u, f);
        },
        set(u) {
          this[c] = u;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var Ct = /* @__PURE__ */ new Lv({
  _scriptable: (n) => !n.startsWith("on"),
  _indexable: (n) => n !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Pv,
  Cv,
  Dv
]);
function Rv(n) {
  return !n || lt(n.size) || lt(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function Mr(n, t, e, i, r) {
  let a = t[r];
  return a || (a = t[r] = n.measureText(r).width, e.push(r)), a > i && (i = a), i;
}
function Ev(n, t, e, i) {
  i = i || {};
  let r = i.data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (r = i.data = {}, a = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let l = 0;
  const c = e.length;
  let u, f, g, p, _;
  for (u = 0; u < c; u++)
    if (p = e[u], p != null && !vt(p))
      l = Mr(n, r, a, l, p);
    else if (vt(p))
      for (f = 0, g = p.length; f < g; f++)
        _ = p[f], _ != null && !vt(_) && (l = Mr(n, r, a, l, _));
  n.restore();
  const v = a.length / 2;
  if (v > e.length) {
    for (u = 0; u < v; u++)
      delete r[a[u]];
    a.splice(0, v);
  }
  return l;
}
function Rn(n, t, e) {
  const i = n.currentDevicePixelRatio, r = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - r) * i) / i + r;
}
function Uh(n, t) {
  t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore();
}
function wa(n, t, e, i) {
  ff(n, t, e, i, null);
}
function ff(n, t, e, i, r) {
  let a, l, c, u, f, g, p, _;
  const v = t.pointStyle, y = t.rotation, M = t.radius;
  let S = (y || 0) * pv;
  if (v && typeof v == "object" && (a = v.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(S), n.drawImage(v, -v.width / 2, -v.height / 2, v.width, v.height), n.restore();
    return;
  }
  if (!(isNaN(M) || M <= 0)) {
    switch (n.beginPath(), v) {
      default:
        r ? n.ellipse(e, i, r / 2, M, 0, 0, yt) : n.arc(e, i, M, 0, yt), n.closePath();
        break;
      case "triangle":
        g = r ? r / 2 : M, n.moveTo(e + Math.sin(S) * g, i - Math.cos(S) * M), S += Ih, n.lineTo(e + Math.sin(S) * g, i - Math.cos(S) * M), S += Ih, n.lineTo(e + Math.sin(S) * g, i - Math.cos(S) * M), n.closePath();
        break;
      case "rectRounded":
        f = M * 0.516, u = M - f, l = Math.cos(S + Ln) * u, p = Math.cos(S + Ln) * (r ? r / 2 - f : u), c = Math.sin(S + Ln) * u, _ = Math.sin(S + Ln) * (r ? r / 2 - f : u), n.arc(e - p, i - c, f, S - St, S - Pt), n.arc(e + _, i - l, f, S - Pt, S), n.arc(e + p, i + c, f, S, S + Pt), n.arc(e - _, i + l, f, S + Pt, S + St), n.closePath();
        break;
      case "rect":
        if (!y) {
          u = Math.SQRT1_2 * M, g = r ? r / 2 : u, n.rect(e - g, i - u, 2 * g, 2 * u);
          break;
        }
        S += Ln;
      case "rectRot":
        p = Math.cos(S) * (r ? r / 2 : M), l = Math.cos(S) * M, c = Math.sin(S) * M, _ = Math.sin(S) * (r ? r / 2 : M), n.moveTo(e - p, i - c), n.lineTo(e + _, i - l), n.lineTo(e + p, i + c), n.lineTo(e - _, i + l), n.closePath();
        break;
      case "crossRot":
        S += Ln;
      case "cross":
        p = Math.cos(S) * (r ? r / 2 : M), l = Math.cos(S) * M, c = Math.sin(S) * M, _ = Math.sin(S) * (r ? r / 2 : M), n.moveTo(e - p, i - c), n.lineTo(e + p, i + c), n.moveTo(e + _, i - l), n.lineTo(e - _, i + l);
        break;
      case "star":
        p = Math.cos(S) * (r ? r / 2 : M), l = Math.cos(S) * M, c = Math.sin(S) * M, _ = Math.sin(S) * (r ? r / 2 : M), n.moveTo(e - p, i - c), n.lineTo(e + p, i + c), n.moveTo(e + _, i - l), n.lineTo(e - _, i + l), S += Ln, p = Math.cos(S) * (r ? r / 2 : M), l = Math.cos(S) * M, c = Math.sin(S) * M, _ = Math.sin(S) * (r ? r / 2 : M), n.moveTo(e - p, i - c), n.lineTo(e + p, i + c), n.moveTo(e + _, i - l), n.lineTo(e - _, i + l);
        break;
      case "line":
        l = r ? r / 2 : Math.cos(S) * M, c = Math.sin(S) * M, n.moveTo(e - l, i - c), n.lineTo(e + l, i + c);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(S) * (r ? r / 2 : M), i + Math.sin(S) * M);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function tn(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function Dr(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Lr(n) {
  n.restore();
}
function Iv(n, t, e, i, r) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (r === "middle") {
    const a = (t.x + e.x) / 2;
    n.lineTo(a, t.y), n.lineTo(a, e.y);
  } else
    r === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Fv(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Bv(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), lt(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function zv(n, t, e, i, r) {
  if (r.strikethrough || r.underline) {
    const a = n.measureText(i), l = t - a.actualBoundingBoxLeft, c = t + a.actualBoundingBoxRight, u = e - a.actualBoundingBoxAscent, f = e + a.actualBoundingBoxDescent, g = r.strikethrough ? (u + f) / 2 : f;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = r.decorationWidth || 2, n.moveTo(l, g), n.lineTo(c, g), n.stroke();
  }
}
function Wv(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function Vn(n, t, e, i, r, a = {}) {
  const l = vt(t) ? t : [
    t
  ], c = a.strokeWidth > 0 && a.strokeColor !== "";
  let u, f;
  for (n.save(), n.font = r.string, Bv(n, a), u = 0; u < l.length; ++u)
    f = l[u], a.backdrop && Wv(n, a.backdrop), c && (a.strokeColor && (n.strokeStyle = a.strokeColor), lt(a.strokeWidth) || (n.lineWidth = a.strokeWidth), n.strokeText(f, e, i, a.maxWidth)), n.fillText(f, e, i, a.maxWidth), zv(n, e, i, f, a), i += Number(r.lineHeight);
  n.restore();
}
function es(n, t) {
  const { x: e, y: i, w: r, h: a, radius: l } = t;
  n.arc(e + l.topLeft, i + l.topLeft, l.topLeft, -Pt, St, !0), n.lineTo(e, i + a - l.bottomLeft), n.arc(e + l.bottomLeft, i + a - l.bottomLeft, l.bottomLeft, St, Pt, !0), n.lineTo(e + r - l.bottomRight, i + a), n.arc(e + r - l.bottomRight, i + a - l.bottomRight, l.bottomRight, Pt, 0, !0), n.lineTo(e + r, i + l.topRight), n.arc(e + r - l.topRight, i + l.topRight, l.topRight, 0, -Pt, !0), n.lineTo(e + l.topLeft, i);
}
const Nv = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Hv = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Vv(n, t) {
  const e = ("" + n).match(Nv);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (n = +e[2], e[3]) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return t * n;
}
const Uv = (n) => +n || 0;
function $a(n, t) {
  const e = {}, i = ot(t), r = i ? Object.keys(t) : t, a = ot(n) ? i ? (l) => Z(n[l], n[t[l]]) : (l) => n[l] : () => n;
  for (const l of r)
    e[l] = Uv(a(l));
  return e;
}
function df(n) {
  return $a(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Wn(n) {
  return $a(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Xt(n) {
  const t = df(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function It(n, t) {
  n = n || {}, t = t || Ct.font;
  let e = Z(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = Z(n.style, t.style);
  i && !("" + i).match(Hv) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const r = {
    family: Z(n.family, t.family),
    lineHeight: Vv(Z(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: Z(n.weight, t.weight),
    string: ""
  };
  return r.string = Rv(r), r;
}
function Hi(n, t, e, i) {
  let r = !0, a, l, c;
  for (a = 0, l = n.length; a < l; ++a)
    if (c = n[a], c !== void 0 && (t !== void 0 && typeof c == "function" && (c = c(t), r = !1), e !== void 0 && vt(c) && (c = c[e % c.length], r = !1), c !== void 0))
      return i && !r && (i.cacheable = !1), c;
}
function $v(n, t, e) {
  const { min: i, max: r } = n, a = tf(t, (r - i) / 2), l = (c, u) => e && c === 0 ? 0 : c + u;
  return {
    min: l(i, -Math.abs(a)),
    max: l(r, a)
  };
}
function vn(n, t) {
  return Object.assign(Object.create(n), t);
}
function Ya(n, t = [
  ""
], e, i, r = () => n[0]) {
  const a = e || n;
  typeof i > "u" && (i = _f("_fallback", n));
  const l = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: a,
    _fallback: i,
    _getTarget: r,
    override: (c) => Ya([
      c,
      ...n
    ], t, a, i)
  };
  return new Proxy(l, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(c, u) {
      return delete c[u], delete c._keys, delete n[0][u], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(c, u) {
      return pf(c, u, () => Jv(u, t, n, c));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(c, u) {
      return Reflect.getOwnPropertyDescriptor(c._scopes[0], u);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(c, u) {
      return Yh(c).includes(u);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(c) {
      return Yh(c);
    },
    /**
    * A trap for setting property values.
    */
    set(c, u, f) {
      const g = c._storage || (c._storage = r());
      return c[u] = g[u] = f, delete c._keys, !0;
    }
  });
}
function hi(n, t, e, i) {
  const r = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: gf(n, i),
    setContext: (a) => hi(n, a, e, i),
    override: (a) => hi(n.override(a), t, e, i)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete n[l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l, c) {
      return pf(a, l, () => Xv(a, l, c));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return a._descriptors.allKeys ? Reflect.has(n, l) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(n, l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return Reflect.has(n, l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      return n[l] = c, delete a[l], !0;
    }
  });
}
function gf(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: r = t.allKeys } = n;
  return {
    allKeys: r,
    scriptable: e,
    indexable: i,
    isScriptable: xn(e) ? e : () => e,
    isIndexable: xn(i) ? i : () => i
  };
}
const Yv = (n, t) => n ? n + Wa(t) : t, Xa = (n, t) => ot(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function pf(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t))
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function Xv(n, t, e) {
  const { _proxy: i, _context: r, _subProxy: a, _descriptors: l } = n;
  let c = i[t];
  return xn(c) && l.isScriptable(t) && (c = jv(t, c, n, e)), vt(c) && c.length && (c = Gv(t, c, n, l.isIndexable)), Xa(t, c) && (c = hi(c, r, a && a[t], l)), c;
}
function jv(n, t, e, i) {
  const { _proxy: r, _context: a, _subProxy: l, _stack: c } = e;
  if (c.has(n))
    throw new Error("Recursion detected: " + Array.from(c).join("->") + "->" + n);
  c.add(n);
  let u = t(a, l || i);
  return c.delete(n), Xa(n, u) && (u = ja(r._scopes, r, n, u)), u;
}
function Gv(n, t, e, i) {
  const { _proxy: r, _context: a, _subProxy: l, _descriptors: c } = e;
  if (typeof a.index < "u" && i(n))
    return t[a.index % t.length];
  if (ot(t[0])) {
    const u = t, f = r._scopes.filter((g) => g !== u);
    t = [];
    for (const g of u) {
      const p = ja(f, r, n, g);
      t.push(hi(p, a, l && l[n], c));
    }
  }
  return t;
}
function mf(n, t, e) {
  return xn(n) ? n(t, e) : n;
}
const Kv = (n, t) => n === !0 ? t : typeof n == "string" ? bn(t, n) : void 0;
function qv(n, t, e, i, r) {
  for (const a of t) {
    const l = Kv(e, a);
    if (l) {
      n.add(l);
      const c = mf(l._fallback, e, r);
      if (typeof c < "u" && c !== e && c !== i)
        return c;
    } else if (l === !1 && typeof i < "u" && e !== i)
      return null;
  }
  return !1;
}
function ja(n, t, e, i) {
  const r = t._rootScopes, a = mf(t._fallback, e, i), l = [
    ...n,
    ...r
  ], c = /* @__PURE__ */ new Set();
  c.add(i);
  let u = $h(c, l, e, a || e, i);
  return u === null || typeof a < "u" && a !== e && (u = $h(c, l, a, u, i), u === null) ? !1 : Ya(Array.from(c), [
    ""
  ], r, a, () => Zv(t, e, i));
}
function $h(n, t, e, i, r) {
  for (; e; )
    e = qv(n, t, e, i, r);
  return e;
}
function Zv(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const r = i[t];
  return vt(r) && ot(e) ? e : r || {};
}
function Jv(n, t, e, i) {
  let r;
  for (const a of t)
    if (r = _f(Yv(a, n), e), typeof r < "u")
      return Xa(n, r) ? ja(e, i, n, r) : r;
}
function _f(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (typeof i < "u")
      return i;
  }
}
function Yh(n) {
  let t = n._keys;
  return t || (t = n._keys = Qv(n._scopes)), t;
}
function Qv(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((r) => !r.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function bf(n, t, e, i) {
  const { iScale: r } = n, { key: a = "r" } = this._parsing, l = new Array(i);
  let c, u, f, g;
  for (c = 0, u = i; c < u; ++c)
    f = c + e, g = t[f], l[c] = {
      r: r.parse(bn(g, a), f)
    };
  return l;
}
const ty = Number.EPSILON || 1e-14, ui = (n, t) => t < n.length && !n[t].skip && n[t], xf = (n) => n === "x" ? "y" : "x";
function ey(n, t, e, i) {
  const r = n.skip ? t : n, a = t, l = e.skip ? t : e, c = va(a, r), u = va(l, a);
  let f = c / (c + u), g = u / (c + u);
  f = isNaN(f) ? 0 : f, g = isNaN(g) ? 0 : g;
  const p = i * f, _ = i * g;
  return {
    previous: {
      x: a.x - p * (l.x - r.x),
      y: a.y - p * (l.y - r.y)
    },
    next: {
      x: a.x + _ * (l.x - r.x),
      y: a.y + _ * (l.y - r.y)
    }
  };
}
function ny(n, t, e) {
  const i = n.length;
  let r, a, l, c, u, f = ui(n, 0);
  for (let g = 0; g < i - 1; ++g)
    if (u = f, f = ui(n, g + 1), !(!u || !f)) {
      if (ji(t[g], 0, ty)) {
        e[g] = e[g + 1] = 0;
        continue;
      }
      r = e[g] / t[g], a = e[g + 1] / t[g], c = Math.pow(r, 2) + Math.pow(a, 2), !(c <= 9) && (l = 3 / Math.sqrt(c), e[g] = r * l * t[g], e[g + 1] = a * l * t[g]);
    }
}
function iy(n, t, e = "x") {
  const i = xf(e), r = n.length;
  let a, l, c, u = ui(n, 0);
  for (let f = 0; f < r; ++f) {
    if (l = c, c = u, u = ui(n, f + 1), !c)
      continue;
    const g = c[e], p = c[i];
    l && (a = (g - l[e]) / 3, c[`cp1${e}`] = g - a, c[`cp1${i}`] = p - a * t[f]), u && (a = (u[e] - g) / 3, c[`cp2${e}`] = g + a, c[`cp2${i}`] = p + a * t[f]);
  }
}
function sy(n, t = "x") {
  const e = xf(t), i = n.length, r = Array(i).fill(0), a = Array(i);
  let l, c, u, f = ui(n, 0);
  for (l = 0; l < i; ++l)
    if (c = u, u = f, f = ui(n, l + 1), !!u) {
      if (f) {
        const g = f[t] - u[t];
        r[l] = g !== 0 ? (f[e] - u[e]) / g : 0;
      }
      a[l] = c ? f ? Be(r[l - 1]) !== Be(r[l]) ? 0 : (r[l - 1] + r[l]) / 2 : r[l - 1] : r[l];
    }
  ny(n, r, a), iy(n, a, t);
}
function ir(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function ry(n, t) {
  let e, i, r, a, l, c = tn(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    l = a, a = c, c = e < i - 1 && tn(n[e + 1], t), a && (r = n[e], l && (r.cp1x = ir(r.cp1x, t.left, t.right), r.cp1y = ir(r.cp1y, t.top, t.bottom)), c && (r.cp2x = ir(r.cp2x, t.left, t.right), r.cp2y = ir(r.cp2y, t.top, t.bottom)));
}
function oy(n, t, e, i, r) {
  let a, l, c, u;
  if (t.spanGaps && (n = n.filter((f) => !f.skip)), t.cubicInterpolationMode === "monotone")
    sy(n, r);
  else {
    let f = i ? n[n.length - 1] : n[0];
    for (a = 0, l = n.length; a < l; ++a)
      c = n[a], u = ey(f, c, n[Math.min(a + 1, l - (i ? 0 : 1)) % l], t.tension), c.cp1x = u.previous.x, c.cp1y = u.previous.y, c.cp2x = u.next.x, c.cp2y = u.next.y, f = c;
  }
  t.capBezierPoints && ry(n, e);
}
function vf() {
  return typeof window < "u" && typeof document < "u";
}
function Ga(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ar(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const Rr = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function ay(n, t) {
  return Rr(n).getPropertyValue(t);
}
const ly = [
  "top",
  "right",
  "bottom",
  "left"
];
function Nn(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let r = 0; r < 4; r++) {
    const a = ly[r];
    i[a] = parseFloat(n[t + "-" + a + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const cy = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function hy(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: r, offsetY: a } = i;
  let l = !1, c, u;
  if (cy(r, a, n.target))
    c = r, u = a;
  else {
    const f = t.getBoundingClientRect();
    c = i.clientX - f.left, u = i.clientY - f.top, l = !0;
  }
  return {
    x: c,
    y: u,
    box: l
  };
}
function Fn(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, r = Rr(e), a = r.boxSizing === "border-box", l = Nn(r, "padding"), c = Nn(r, "border", "width"), { x: u, y: f, box: g } = hy(n, e), p = l.left + (g && c.left), _ = l.top + (g && c.top);
  let { width: v, height: y } = t;
  return a && (v -= l.width + c.width, y -= l.height + c.height), {
    x: Math.round((u - p) / v * e.width / i),
    y: Math.round((f - _) / y * e.height / i)
  };
}
function uy(n, t, e) {
  let i, r;
  if (t === void 0 || e === void 0) {
    const a = Ga(n);
    if (!a)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const l = a.getBoundingClientRect(), c = Rr(a), u = Nn(c, "border", "width"), f = Nn(c, "padding");
      t = l.width - f.width - u.width, e = l.height - f.height - u.height, i = Ar(c.maxWidth, a, "clientWidth"), r = Ar(c.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || Sr,
    maxHeight: r || Sr
  };
}
const sr = (n) => Math.round(n * 10) / 10;
function fy(n, t, e, i) {
  const r = Rr(n), a = Nn(r, "margin"), l = Ar(r.maxWidth, n, "clientWidth") || Sr, c = Ar(r.maxHeight, n, "clientHeight") || Sr, u = uy(n, t, e);
  let { width: f, height: g } = u;
  if (r.boxSizing === "content-box") {
    const _ = Nn(r, "border", "width"), v = Nn(r, "padding");
    f -= v.width + _.width, g -= v.height + _.height;
  }
  return f = Math.max(0, f - a.width), g = Math.max(0, i ? f / i : g - a.height), f = sr(Math.min(f, l, u.maxWidth)), g = sr(Math.min(g, c, u.maxHeight)), f && !g && (g = sr(f / 2)), (t !== void 0 || e !== void 0) && i && u.height && g > u.height && (g = u.height, f = sr(Math.floor(g * i))), {
    width: f,
    height: g
  };
}
function Xh(n, t, e) {
  const i = t || 1, r = Math.floor(n.height * i), a = Math.floor(n.width * i);
  n.height = Math.floor(n.height), n.width = Math.floor(n.width);
  const l = n.canvas;
  return l.style && (e || !l.style.height && !l.style.width) && (l.style.height = `${n.height}px`, l.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || l.height !== r || l.width !== a ? (n.currentDevicePixelRatio = i, l.height = r, l.width = a, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const dy = function() {
  let n = !1;
  try {
    const t = {
      get passive() {
        return n = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return n;
}();
function jh(n, t) {
  const e = ay(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Bn(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function gy(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function py(n, t, e, i) {
  const r = {
    x: n.cp2x,
    y: n.cp2y
  }, a = {
    x: t.cp1x,
    y: t.cp1y
  }, l = Bn(n, r, e), c = Bn(r, a, e), u = Bn(a, t, e), f = Bn(l, c, e), g = Bn(c, u, e);
  return Bn(f, g, e);
}
const my = function(n, t) {
  return {
    x(e) {
      return n + n + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, i) {
      return e - i;
    },
    leftForLtr(e, i) {
      return e - i;
    }
  };
}, _y = function() {
  return {
    x(n) {
      return n;
    },
    setWidth(n) {
    },
    textAlign(n) {
      return n;
    },
    xPlus(n, t) {
      return n + t;
    },
    leftForLtr(n, t) {
      return n;
    }
  };
};
function ai(n, t, e) {
  return n ? my(t, e) : _y();
}
function yf(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function wf(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function Sf(n) {
  return n === "angle" ? {
    between: ts,
    compare: bv,
    normalize: he
  } : {
    between: Je,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Gh({ start: n, end: t, count: e, loop: i, style: r }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: r
  };
}
function by(n, t, e) {
  const { property: i, start: r, end: a } = e, { between: l, normalize: c } = Sf(i), u = t.length;
  let { start: f, end: g, loop: p } = n, _, v;
  if (p) {
    for (f += u, g += u, _ = 0, v = u; _ < v && l(c(t[f % u][i]), r, a); ++_)
      f--, g--;
    f %= u, g %= u;
  }
  return g < f && (g += u), {
    start: f,
    end: g,
    loop: p,
    style: n.style
  };
}
function Mf(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: r, end: a } = e, l = t.length, { compare: c, between: u, normalize: f } = Sf(i), { start: g, end: p, loop: _, style: v } = by(n, t, e), y = [];
  let M = !1, S = null, C, T, D;
  const F = () => u(r, D, C) && c(r, D) !== 0, L = () => c(a, C) === 0 || u(a, D, C), W = () => M || F(), z = () => !M || L();
  for (let H = g, Y = g; H <= p; ++H)
    T = t[H % l], !T.skip && (C = f(T[i]), C !== D && (M = u(C, r, a), S === null && W() && (S = c(C, r) === 0 ? H : Y), S !== null && z() && (y.push(Gh({
      start: S,
      end: H,
      loop: _,
      count: l,
      style: v
    })), S = null), Y = H, D = C));
  return S !== null && y.push(Gh({
    start: S,
    end: p,
    loop: _,
    count: l,
    style: v
  })), y;
}
function Af(n, t) {
  const e = [], i = n.segments;
  for (let r = 0; r < i.length; r++) {
    const a = Mf(i[r], n.points, t);
    a.length && e.push(...a);
  }
  return e;
}
function xy(n, t, e, i) {
  let r = 0, a = t - 1;
  if (e && !i)
    for (; r < t && !n[r].skip; )
      r++;
  for (; r < t && n[r].skip; )
    r++;
  for (r %= t, e && (a += r); a > r && n[a % t].skip; )
    a--;
  return a %= t, {
    start: r,
    end: a
  };
}
function vy(n, t, e, i) {
  const r = n.length, a = [];
  let l = t, c = n[t], u;
  for (u = t + 1; u <= e; ++u) {
    const f = n[u % r];
    f.skip || f.stop ? c.skip || (i = !1, a.push({
      start: t % r,
      end: (u - 1) % r,
      loop: i
    }), t = l = f.stop ? u : null) : (l = u, c.skip && (t = u)), c = f;
  }
  return l !== null && a.push({
    start: t % r,
    end: l % r,
    loop: i
  }), a;
}
function yy(n, t) {
  const e = n.points, i = n.options.spanGaps, r = e.length;
  if (!r)
    return [];
  const a = !!n._loop, { start: l, end: c } = xy(e, r, a, i);
  if (i === !0)
    return Kh(n, [
      {
        start: l,
        end: c,
        loop: a
      }
    ], e, t);
  const u = c < l ? c + r : c, f = !!n._fullLoop && l === 0 && c === r - 1;
  return Kh(n, vy(e, l, u, f), e, t);
}
function Kh(n, t, e, i) {
  return !i || !i.setContext || !e ? t : wy(n, t, e, i);
}
function wy(n, t, e, i) {
  const r = n._chart.getContext(), a = qh(n.options), { _datasetIndex: l, options: { spanGaps: c } } = n, u = e.length, f = [];
  let g = a, p = t[0].start, _ = p;
  function v(y, M, S, C) {
    const T = c ? -1 : 1;
    if (y !== M) {
      for (y += u; e[y % u].skip; )
        y -= T;
      for (; e[M % u].skip; )
        M += T;
      y % u !== M % u && (f.push({
        start: y % u,
        end: M % u,
        loop: S,
        style: C
      }), g = C, p = M % u);
    }
  }
  for (const y of t) {
    p = c ? p : y.start;
    let M = e[p % u], S;
    for (_ = p + 1; _ <= y.end; _++) {
      const C = e[_ % u];
      S = qh(i.setContext(vn(r, {
        type: "segment",
        p0: M,
        p1: C,
        p0DataIndex: (_ - 1) % u,
        p1DataIndex: _ % u,
        datasetIndex: l
      }))), Sy(S, g) && v(p, _ - 1, y.loop, g), M = C, g = S;
    }
    p < _ - 1 && v(p, _ - 1, y.loop, g);
  }
  return f;
}
function qh(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor
  };
}
function Sy(n, t) {
  if (!t)
    return !1;
  const e = [], i = function(r, a) {
    return Ua(a) ? (e.includes(a) || e.push(a), e.indexOf(a)) : a;
  };
  return JSON.stringify(n, i) !== JSON.stringify(t, i);
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class My {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, i, r) {
    const a = e.listeners[r], l = e.duration;
    a.forEach((c) => c({
      chart: t,
      initial: e.initial,
      numSteps: l,
      currentStep: Math.min(i - e.start, l)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = af.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length)
        return;
      const a = i.items;
      let l = a.length - 1, c = !1, u;
      for (; l >= 0; --l)
        u = a[l], u._active ? (u._total > i.duration && (i.duration = u._total), u.tick(t), c = !0) : (a[l] = a[a.length - 1], a.pop());
      c && (r.draw(), this._notify(r, i, t, "progress")), a.length || (i.running = !1, this._notify(r, i, t, "complete"), i.initial = !1), e += a.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, i)), i;
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, r) => Math.max(i, r._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const i = e.items;
    let r = i.length - 1;
    for (; r >= 0; --r)
      i[r].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Ke = /* @__PURE__ */ new My();
const Zh = "transparent", Ay = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = Hh(n || Zh), r = i.valid && Hh(t || Zh);
    return r && r.valid ? r.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class Oy {
  constructor(t, e, i, r) {
    const a = e[i];
    r = Hi([
      t.to,
      r,
      a,
      t.from
    ]);
    const l = Hi([
      t.from,
      a,
      r
    ]);
    this._active = !0, this._fn = t.fn || Ay[t.type || typeof l], this._easing = Gi[t.easing] || Gi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = l, this._to = r, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop], a = i - this._start, l = this._duration - a;
      this._start = i, this._duration = Math.floor(Math.max(l, t.duration)), this._total += a, this._loop = !!t.loop, this._to = Hi([
        t.to,
        e,
        r,
        t.from
      ]), this._from = Hi([
        t.from,
        r,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, i = this._duration, r = this._prop, a = this._from, l = this._loop, c = this._to;
    let u;
    if (this._active = a !== c && (l || e < i), !this._active) {
      this._target[r] = c, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[r] = a;
      return;
    }
    u = e / i % 2, u = l && u > 1 ? 2 - u : u, u = this._easing(Math.min(1, Math.max(0, u))), this._target[r] = this._fn(a, c, u);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({
        res: e,
        rej: i
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", i = this._promises || [];
    for (let r = 0; r < i.length; r++)
      i[r][e]();
  }
}
class Of {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!ot(t))
      return;
    const e = Object.keys(Ct.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((r) => {
      const a = t[r];
      if (!ot(a))
        return;
      const l = {};
      for (const c of e)
        l[c] = a[c];
      (vt(a.properties) && a.properties || [
        r
      ]).forEach((c) => {
        (c === r || !i.has(c)) && i.set(c, l);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, r = Cy(t, i);
    if (!r)
      return [];
    const a = this._createAnimations(r, i);
    return i.$shared && Py(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), a;
  }
  _createAnimations(t, e) {
    const i = this._properties, r = [], a = t.$animations || (t.$animations = {}), l = Object.keys(e), c = Date.now();
    let u;
    for (u = l.length - 1; u >= 0; --u) {
      const f = l[u];
      if (f.charAt(0) === "$")
        continue;
      if (f === "options") {
        r.push(...this._animateOptions(t, e));
        continue;
      }
      const g = e[f];
      let p = a[f];
      const _ = i.get(f);
      if (p)
        if (_ && p.active()) {
          p.update(_, g, c);
          continue;
        } else
          p.cancel();
      if (!_ || !_.duration) {
        t[f] = g;
        continue;
      }
      a[f] = p = new Oy(_, t, f, g), r.push(p);
    }
    return r;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length)
      return Ke.add(this._chart, i), !0;
  }
}
function Py(n, t) {
  const e = [], i = Object.keys(t);
  for (let r = 0; r < i.length; r++) {
    const a = n[i[r]];
    a && a.active() && e.push(a.wait());
  }
  return Promise.all(e);
}
function Cy(n, t) {
  if (!t)
    return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Jh(n, t) {
  const e = n && n.options || {}, i = e.reverse, r = e.min === void 0 ? t : 0, a = e.max === void 0 ? t : 0;
  return {
    start: i ? a : r,
    end: i ? r : a
  };
}
function ky(n, t, e) {
  if (e === !1)
    return !1;
  const i = Jh(n, e), r = Jh(t, e);
  return {
    top: r.end,
    right: i.end,
    bottom: r.start,
    left: i.start
  };
}
function Ty(n) {
  let t, e, i, r;
  return ot(n) ? (t = n.top, e = n.right, i = n.bottom, r = n.left) : t = e = i = r = n, {
    top: t,
    right: e,
    bottom: i,
    left: r,
    disabled: n === !1
  };
}
function Pf(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let r, a;
  for (r = 0, a = i.length; r < a; ++r)
    e.push(i[r].index);
  return e;
}
function Qh(n, t, e, i = {}) {
  const r = n.keys, a = i.mode === "single";
  let l, c, u, f;
  if (t !== null) {
    for (l = 0, c = r.length; l < c; ++l) {
      if (u = +r[l], u === e) {
        if (i.all)
          continue;
        break;
      }
      f = n.values[u], Ot(f) && (a || t === 0 || Be(t) === Be(f)) && (t += f);
    }
    return t;
  }
}
function Dy(n) {
  const t = Object.keys(n), e = new Array(t.length);
  let i, r, a;
  for (i = 0, r = t.length; i < r; ++i)
    a = t[i], e[i] = {
      x: a,
      y: n[a]
    };
  return e;
}
function tu(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ly(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Ry(n) {
  const { min: t, max: e, minDefined: i, maxDefined: r } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: r ? e : Number.POSITIVE_INFINITY
  };
}
function Ey(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function eu(n, t, e, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const a = n[r.index];
    if (e && a > 0 || !e && a < 0)
      return r.index;
  }
  return null;
}
function nu(n, t) {
  const { chart: e, _cachedMeta: i } = n, r = e._stacks || (e._stacks = {}), { iScale: a, vScale: l, index: c } = i, u = a.axis, f = l.axis, g = Ly(a, l, i), p = t.length;
  let _;
  for (let v = 0; v < p; ++v) {
    const y = t[v], { [u]: M, [f]: S } = y, C = y._stacks || (y._stacks = {});
    _ = C[f] = Ey(r, g, M), _[c] = S, _._top = eu(_, l, !0, i.type), _._bottom = eu(_, l, !1, i.type);
    const T = _._visualValues || (_._visualValues = {});
    T[c] = S;
  }
}
function aa(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function Iy(n, t) {
  return vn(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Fy(n, t, e) {
  return vn(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ei(n, t) {
  const e = n.controller.index, i = n.vScale && n.vScale.axis;
  if (i) {
    t = t || n._parsed;
    for (const r of t) {
      const a = r._stacks;
      if (!a || a[i] === void 0 || a[i][e] === void 0)
        return;
      delete a[i][e], a[i]._visualValues !== void 0 && a[i]._visualValues[e] !== void 0 && delete a[i]._visualValues[e];
    }
  }
}
const la = (n) => n === "reset" || n === "none", iu = (n, t) => t ? n : Object.assign({}, n), By = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: Pf(e, !0),
  values: null
};
class ke {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = tu(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ei(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), r = (p, _, v, y) => p === "x" ? _ : p === "r" ? y : v, a = e.xAxisID = Z(i.xAxisID, aa(t, "x")), l = e.yAxisID = Z(i.yAxisID, aa(t, "y")), c = e.rAxisID = Z(i.rAxisID, aa(t, "r")), u = e.indexAxis, f = e.iAxisID = r(u, a, l, c), g = e.vAxisID = r(u, l, a, c);
    e.xScale = this.getScaleForId(a), e.yScale = this.getScaleForId(l), e.rScale = this.getScaleForId(c), e.iScale = this.getScaleForId(f), e.vScale = this.getScaleForId(g);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && zh(this._data, this), t._stacked && Ei(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (ot(e))
      this._data = Dy(e);
    else if (i !== e) {
      if (i) {
        zh(i, this);
        const r = this._cachedMeta;
        Ei(r), r._parsed = [];
      }
      e && Object.isExtensible(e) && wv(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const a = e._stacked;
    e._stacked = tu(e.vScale, e), e.stack !== i.stack && (r = !0, Ei(e), e.stack = i.stack), this._resyncElements(t), (r || a !== e._stacked) && nu(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: r } = this, { iScale: a, _stacked: l } = i, c = a.axis;
    let u = t === 0 && e === r.length ? !0 : i._sorted, f = t > 0 && i._parsed[t - 1], g, p, _;
    if (this._parsing === !1)
      i._parsed = r, i._sorted = !0, _ = r;
    else {
      vt(r[t]) ? _ = this.parseArrayData(i, r, t, e) : ot(r[t]) ? _ = this.parseObjectData(i, r, t, e) : _ = this.parsePrimitiveData(i, r, t, e);
      const v = () => p[c] === null || f && p[c] < f[c];
      for (g = 0; g < e; ++g)
        i._parsed[g + t] = p = _[g], u && (v() && (u = !1), f = p);
      i._sorted = u;
    }
    l && nu(this, _);
  }
  parsePrimitiveData(t, e, i, r) {
    const { iScale: a, vScale: l } = t, c = a.axis, u = l.axis, f = a.getLabels(), g = a === l, p = new Array(r);
    let _, v, y;
    for (_ = 0, v = r; _ < v; ++_)
      y = _ + i, p[_] = {
        [c]: g || a.parse(f[y], y),
        [u]: l.parse(e[y], y)
      };
    return p;
  }
  parseArrayData(t, e, i, r) {
    const { xScale: a, yScale: l } = t, c = new Array(r);
    let u, f, g, p;
    for (u = 0, f = r; u < f; ++u)
      g = u + i, p = e[g], c[u] = {
        x: a.parse(p[0], g),
        y: l.parse(p[1], g)
      };
    return c;
  }
  parseObjectData(t, e, i, r) {
    const { xScale: a, yScale: l } = t, { xAxisKey: c = "x", yAxisKey: u = "y" } = this._parsing, f = new Array(r);
    let g, p, _, v;
    for (g = 0, p = r; g < p; ++g)
      _ = g + i, v = e[_], f[g] = {
        x: a.parse(bn(v, c), _),
        y: l.parse(bn(v, u), _)
      };
    return f;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const r = this.chart, a = this._cachedMeta, l = e[t.axis], c = {
      keys: Pf(r, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Qh(c, l, a.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, r) {
    const a = i[e.axis];
    let l = a === null ? NaN : a;
    const c = r && i._stacks[e.axis];
    r && c && (r.values = c, l = Qh(r, a, this._cachedMeta.index)), t.min = Math.min(t.min, l), t.max = Math.max(t.max, l);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, r = i._parsed, a = i._sorted && t === i.iScale, l = r.length, c = this._getOtherScale(t), u = By(e, i, this.chart), f = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: g, max: p } = Ry(c);
    let _, v;
    function y() {
      v = r[_];
      const M = v[c.axis];
      return !Ot(v[t.axis]) || g > M || p < M;
    }
    for (_ = 0; _ < l && !(!y() && (this.updateRangeFromParsed(f, t, v, u), a)); ++_)
      ;
    if (a) {
      for (_ = l - 1; _ >= 0; --_)
        if (!y()) {
          this.updateRangeFromParsed(f, t, v, u);
          break;
        }
    }
    return f;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, i = [];
    let r, a, l;
    for (r = 0, a = e.length; r < a; ++r)
      l = e[r][t.axis], Ot(l) && i.push(l);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = e.iScale, r = e.vScale, a = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(a[r.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Ty(Z(this.options.clip, ky(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, r = i.data || [], a = e.chartArea, l = [], c = this._drawStart || 0, u = this._drawCount || r.length - c, f = this.options.drawActiveElementsOnTop;
    let g;
    for (i.dataset && i.dataset.draw(t, a, c, u), g = c; g < c + u; ++g) {
      const p = r[g];
      p.hidden || (p.active && f ? l.push(p) : p.draw(t, a));
    }
    for (g = 0; g < l.length; ++g)
      l[g].draw(t, a);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const r = this.getDataset();
    let a;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const l = this._cachedMeta.data[t];
      a = l.$context || (l.$context = Fy(this.getContext(), t, l)), a.parsed = this.getParsed(t), a.raw = r.data[t], a.index = a.dataIndex = t;
    } else
      a = this.$context || (this.$context = Iy(this.chart.getContext(), this.index)), a.dataset = r, a.index = a.datasetIndex = this.index;
    return a.active = !!e, a.mode = i, a;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const r = e === "active", a = this._cachedDataOpts, l = t + "-" + e, c = a[l], u = this.enableOptionSharing && Qi(i);
    if (c)
      return iu(c, u);
    const f = this.chart.config, g = f.datasetElementScopeKeys(this._type, t), p = r ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], _ = f.getOptionScopes(this.getDataset(), g), v = Object.keys(Ct.elements[t]), y = () => this.getContext(i, r, e), M = f.resolveNamedOptions(_, v, y, p);
    return M.$shared && (M.$shared = u, a[l] = Object.freeze(iu(M, u))), M;
  }
  _resolveAnimations(t, e, i) {
    const r = this.chart, a = this._cachedDataOpts, l = `animation-${e}`, c = a[l];
    if (c)
      return c;
    let u;
    if (r.options.animation !== !1) {
      const g = this.chart.config, p = g.datasetAnimationScopeKeys(this._type, e), _ = g.getOptionScopes(this.getDataset(), p);
      u = g.createResolver(_, this.getContext(t, i, e));
    }
    const f = new Of(r, u && u.animations);
    return u && u._cacheable && (a[l] = Object.freeze(f)), f;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || la(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), r = this._sharedOptions, a = this.getSharedOptions(i), l = this.includeOptions(e, a) || a !== r;
    return this.updateSharedOptions(a, e, i), {
      sharedOptions: a,
      includeOptions: l
    };
  }
  updateElement(t, e, i, r) {
    la(r) ? Object.assign(t, i) : this._resolveAnimations(e, r).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !la(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, r) {
    t.active = r;
    const a = this.getStyle(e, r);
    this._resolveAnimations(e, i, r).update(t, {
      options: !r && this.getSharedOptions(a) || a
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, i = this._cachedMeta.data;
    for (const [c, u, f] of this._syncList)
      this[c](u, f);
    this._syncList = [];
    const r = i.length, a = e.length, l = Math.min(a, r);
    l && this.parse(0, l), a > r ? this._insertElements(r, a - r, t) : a < r && this._removeElements(a, r - a);
  }
  _insertElements(t, e, i = !0) {
    const r = this._cachedMeta, a = r.data, l = t + e;
    let c;
    const u = (f) => {
      for (f.length += e, c = f.length - 1; c >= l; c--)
        f[c] = f[c - e];
    };
    for (u(a), c = t; c < l; ++c)
      a[c] = new this.dataElementType();
    this._parsing && u(r._parsed), this.parse(t, e), i && this.updateElements(a, t, e, "reset");
  }
  updateElements(t, e, i, r) {
  }
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(t, e);
      i._stacked && Ei(i, r);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, i, r] = t;
      this[e](i, r);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
N(ke, "defaults", {}), N(ke, "datasetElementType", null), N(ke, "dataElementType", null);
function zy(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let r = 0, a = e.length; r < a; r++)
      i = i.concat(e[r].controller.getAllParsedValues(n));
    n._cache.$bar = of(i.sort((r, a) => r - a));
  }
  return n._cache.$bar;
}
function Wy(n) {
  const t = n.iScale, e = zy(t, n.type);
  let i = t._length, r, a, l, c;
  const u = () => {
    l === 32767 || l === -32768 || (Qi(c) && (i = Math.min(i, Math.abs(l - c) || i)), c = l);
  };
  for (r = 0, a = e.length; r < a; ++r)
    l = t.getPixelForValue(e[r]), u();
  for (c = void 0, r = 0, a = t.ticks.length; r < a; ++r)
    l = t.getPixelForTick(r), u();
  return i;
}
function Ny(n, t, e, i) {
  const r = e.barThickness;
  let a, l;
  return lt(r) ? (a = t.min * e.categoryPercentage, l = e.barPercentage) : (a = r * i, l = 1), {
    chunk: a / i,
    ratio: l,
    start: t.pixels[n] - a / 2
  };
}
function Hy(n, t, e, i) {
  const r = t.pixels, a = r[n];
  let l = n > 0 ? r[n - 1] : null, c = n < r.length - 1 ? r[n + 1] : null;
  const u = e.categoryPercentage;
  l === null && (l = a - (c === null ? t.end - t.start : c - a)), c === null && (c = a + a - l);
  const f = a - (a - Math.min(l, c)) / 2 * u;
  return {
    chunk: Math.abs(c - l) / 2 * u / i,
    ratio: e.barPercentage,
    start: f
  };
}
function Vy(n, t, e, i) {
  const r = e.parse(n[0], i), a = e.parse(n[1], i), l = Math.min(r, a), c = Math.max(r, a);
  let u = l, f = c;
  Math.abs(l) > Math.abs(c) && (u = c, f = l), t[e.axis] = f, t._custom = {
    barStart: u,
    barEnd: f,
    start: r,
    end: a,
    min: l,
    max: c
  };
}
function Cf(n, t, e, i) {
  return vt(n) ? Vy(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function su(n, t, e, i) {
  const r = n.iScale, a = n.vScale, l = r.getLabels(), c = r === a, u = [];
  let f, g, p, _;
  for (f = e, g = e + i; f < g; ++f)
    _ = t[f], p = {}, p[r.axis] = c || r.parse(l[f], f), u.push(Cf(_, p, a, f));
  return u;
}
function ca(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Uy(n, t, e) {
  return n !== 0 ? Be(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function $y(n) {
  let t, e, i, r, a;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (r = "end", a = "start") : (r = "start", a = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: r,
    bottom: a
  };
}
function Yy(n, t, e, i) {
  let r = t.borderSkipped;
  const a = {};
  if (!r) {
    n.borderSkipped = a;
    return;
  }
  if (r === !0) {
    n.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: l, end: c, reverse: u, top: f, bottom: g } = $y(n);
  r === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? r = f : (e._bottom || 0) === i ? r = g : (a[ru(g, l, c, u)] = !0, r = f)), a[ru(r, l, c, u)] = !0, n.borderSkipped = a;
}
function ru(n, t, e, i) {
  return i ? (n = Xy(n, t, e), n = ou(n, e, t)) : n = ou(n, t, e), n;
}
function Xy(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function ou(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function jy(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class fr extends ke {
  parsePrimitiveData(t, e, i, r) {
    return su(t, e, i, r);
  }
  parseArrayData(t, e, i, r) {
    return su(t, e, i, r);
  }
  parseObjectData(t, e, i, r) {
    const { iScale: a, vScale: l } = t, { xAxisKey: c = "x", yAxisKey: u = "y" } = this._parsing, f = a.axis === "x" ? c : u, g = l.axis === "x" ? c : u, p = [];
    let _, v, y, M;
    for (_ = i, v = i + r; _ < v; ++_)
      M = e[_], y = {}, y[a.axis] = a.parse(bn(M, f), _), p.push(Cf(bn(M, g), y, l, _));
    return p;
  }
  updateRangeFromParsed(t, e, i, r) {
    super.updateRangeFromParsed(t, e, i, r);
    const a = i._custom;
    a && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: i, vScale: r } = e, a = this.getParsed(t), l = a._custom, c = ca(l) ? "[" + l.start + ", " + l.end + "]" : "" + r.getLabelForValue(a[r.axis]);
    return {
      label: "" + i.getLabelForValue(a[i.axis]),
      value: c
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", { index: l, _cachedMeta: { vScale: c } } = this, u = c.getBasePixel(), f = c.isHorizontal(), g = this._getRuler(), { sharedOptions: p, includeOptions: _ } = this._getSharedOptions(e, r);
    for (let v = e; v < e + i; v++) {
      const y = this.getParsed(v), M = a || lt(y[c.axis]) ? {
        base: u,
        head: u
      } : this._calculateBarValuePixels(v), S = this._calculateBarIndexPixels(v, g), C = (y._stacks || {})[c.axis], T = {
        horizontal: f,
        base: M.base,
        enableBorderRadius: !C || ca(y._custom) || l === C._top || l === C._bottom,
        x: f ? M.head : S.center,
        y: f ? S.center : M.head,
        height: f ? S.size : Math.abs(M.size),
        width: f ? Math.abs(M.size) : S.size
      };
      _ && (T.options = p || this.resolveDataElementOptions(v, t[v].active ? "active" : r));
      const D = T.options || t[v].options;
      Yy(T, D, C, l), jy(T, D, g.ratio), this.updateElement(t[v], v, T, r);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, r = i.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), a = i.options.stacked, l = [], c = (u) => {
      const f = u.controller.getParsed(e), g = f && f[u.vScale.axis];
      if (lt(g) || isNaN(g))
        return !0;
    };
    for (const u of r)
      if (!(e !== void 0 && c(u)) && ((a === !1 || l.indexOf(u.stack) === -1 || a === void 0 && u.stack === void 0) && l.push(u.stack), u.index === t))
        break;
    return l.length || l.push(void 0), l;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const r = this._getStacks(t, i), a = e !== void 0 ? r.indexOf(e) : -1;
    return a === -1 ? r.length - 1 : a;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, i = e.iScale, r = [];
    let a, l;
    for (a = 0, l = e.data.length; a < l; ++a)
      r.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
    const c = t.barThickness;
    return {
      min: c || Wy(e),
      pixels: r,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: c ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: i, index: r }, options: { base: a, minBarLength: l } } = this, c = a || 0, u = this.getParsed(t), f = u._custom, g = ca(f);
    let p = u[e.axis], _ = 0, v = i ? this.applyStack(e, u, i) : p, y, M;
    v !== p && (_ = v - p, v = p), g && (p = f.barStart, v = f.barEnd - f.barStart, p !== 0 && Be(p) !== Be(f.barEnd) && (_ = 0), _ += p);
    const S = !lt(a) && !g ? a : _;
    let C = e.getPixelForValue(S);
    if (this.chart.getDataVisibility(t) ? y = e.getPixelForValue(_ + v) : y = C, M = y - C, Math.abs(M) < l) {
      M = Uy(M, e, c) * l, p === c && (C -= M / 2);
      const T = e.getPixelForDecimal(0), D = e.getPixelForDecimal(1), F = Math.min(T, D), L = Math.max(T, D);
      C = Math.max(Math.min(C, L), F), y = C + M, i && !g && (u._stacks[e.axis]._visualValues[r] = e.getValueForPixel(y) - e.getValueForPixel(C));
    }
    if (C === e.getPixelForValue(c)) {
      const T = Be(M) * e.getLineWidthForValue(c) / 2;
      C += T, M -= T;
    }
    return {
      size: M,
      base: C,
      head: y,
      center: y + M / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, r = this.options, a = r.skipNull, l = Z(r.maxBarThickness, 1 / 0);
    let c, u;
    if (e.grouped) {
      const f = a ? this._getStackCount(t) : e.stackCount, g = r.barThickness === "flex" ? Hy(t, e, r, f) : Ny(t, e, r, f), p = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0);
      c = g.start + g.chunk * p + g.chunk / 2, u = Math.min(l, g.chunk * g.ratio);
    } else
      c = i.getPixelForValue(this.getParsed(t)[i.axis], t), u = Math.min(l, e.min * e.ratio);
    return {
      base: c - u / 2,
      head: c + u / 2,
      center: c,
      size: u
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, i = t.data, r = i.length;
    let a = 0;
    for (; a < r; ++a)
      this.getParsed(a)[e.axis] !== null && i[a].draw(this._ctx);
  }
}
N(fr, "id", "bar"), N(fr, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), N(fr, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class dr extends ke {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, i, r) {
    const a = super.parsePrimitiveData(t, e, i, r);
    for (let l = 0; l < a.length; l++)
      a[l]._custom = this.resolveDataElementOptions(l + i).radius;
    return a;
  }
  parseArrayData(t, e, i, r) {
    const a = super.parseArrayData(t, e, i, r);
    for (let l = 0; l < a.length; l++) {
      const c = e[i + l];
      a[l]._custom = Z(c[2], this.resolveDataElementOptions(l + i).radius);
    }
    return a;
  }
  parseObjectData(t, e, i, r) {
    const a = super.parseObjectData(t, e, i, r);
    for (let l = 0; l < a.length; l++) {
      const c = e[i + l];
      a[l]._custom = Z(c && c.r && +c.r, this.resolveDataElementOptions(l + i).radius);
    }
    return a;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let i = t.length - 1; i >= 0; --i)
      e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: r, yScale: a } = e, l = this.getParsed(t), c = r.getLabelForValue(l.x), u = a.getLabelForValue(l.y), f = l._custom;
    return {
      label: i[t] || "",
      value: "(" + c + ", " + u + (f ? ", " + f : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", { iScale: l, vScale: c } = this._cachedMeta, { sharedOptions: u, includeOptions: f } = this._getSharedOptions(e, r), g = l.axis, p = c.axis;
    for (let _ = e; _ < e + i; _++) {
      const v = t[_], y = !a && this.getParsed(_), M = {}, S = M[g] = a ? l.getPixelForDecimal(0.5) : l.getPixelForValue(y[g]), C = M[p] = a ? c.getBasePixel() : c.getPixelForValue(y[p]);
      M.skip = isNaN(S) || isNaN(C), f && (M.options = u || this.resolveDataElementOptions(_, v.active ? "active" : r), a && (M.options.radius = 0)), this.updateElement(v, _, M, r);
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let r = super.resolveDataElementOptions(t, e);
    r.$shared && (r = Object.assign({}, r, {
      $shared: !1
    }));
    const a = r.radius;
    return e !== "active" && (r.radius = 0), r.radius += Z(i && i._custom, a), r;
  }
}
N(dr, "id", "bubble"), N(dr, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), N(dr, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Gy(n, t, e) {
  let i = 1, r = 1, a = 0, l = 0;
  if (t < yt) {
    const c = n, u = c + t, f = Math.cos(c), g = Math.sin(c), p = Math.cos(u), _ = Math.sin(u), v = (D, F, L) => ts(D, c, u, !0) ? 1 : Math.max(F, F * e, L, L * e), y = (D, F, L) => ts(D, c, u, !0) ? -1 : Math.min(F, F * e, L, L * e), M = v(0, f, p), S = v(Pt, g, _), C = y(St, f, p), T = y(St + Pt, g, _);
    i = (M - C) / 2, r = (S - T) / 2, a = -(M + C) / 2, l = -(S + T) / 2;
  }
  return {
    ratioX: i,
    ratioY: r,
    offsetX: a,
    offsetY: l
  };
}
class zn extends ke {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const i = this.getDataset().data, r = this._cachedMeta;
    if (this._parsing === !1)
      r._parsed = i;
    else {
      let a = (u) => +i[u];
      if (ot(i[t])) {
        const { key: u = "value" } = this._parsing;
        a = (f) => +bn(i[f], u);
      }
      let l, c;
      for (l = t, c = t + e; l < c; ++l)
        r._parsed[l] = a(l);
    }
  }
  _getRotation() {
    return Ce(this.options.rotation - 90);
  }
  _getCircumference() {
    return Ce(this.options.circumference);
  }
  _getRotationExtents() {
    let t = yt, e = -yt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const r = this.chart.getDatasetMeta(i).controller, a = r._getRotation(), l = r._getCircumference();
        t = Math.min(t, a), e = Math.max(e, a + l);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: i } = e, r = this._cachedMeta, a = r.data, l = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing, c = Math.max((Math.min(i.width, i.height) - l) / 2, 0), u = Math.min(lv(this.options.cutout, c), 1), f = this._getRingWeight(this.index), { circumference: g, rotation: p } = this._getRotationExtents(), { ratioX: _, ratioY: v, offsetX: y, offsetY: M } = Gy(p, g, u), S = (i.width - l) / _, C = (i.height - l) / v, T = Math.max(Math.min(S, C) / 2, 0), D = tf(this.options.radius, T), F = Math.max(D * u, 0), L = (D - F) / this._getVisibleDatasetWeightTotal();
    this.offsetX = y * D, this.offsetY = M * D, r.total = this.calculateTotal(), this.outerRadius = D - L * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - L * f, 0), this.updateElements(a, 0, a.length, t);
  }
  _circumference(t, e) {
    const i = this.options, r = this._cachedMeta, a = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || r._parsed[t] === null || r.data[t].hidden ? 0 : this.calculateCircumference(r._parsed[t] * a / yt);
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", l = this.chart, c = l.chartArea, f = l.options.animation, g = (c.left + c.right) / 2, p = (c.top + c.bottom) / 2, _ = a && f.animateScale, v = _ ? 0 : this.innerRadius, y = _ ? 0 : this.outerRadius, { sharedOptions: M, includeOptions: S } = this._getSharedOptions(e, r);
    let C = this._getRotation(), T;
    for (T = 0; T < e; ++T)
      C += this._circumference(T, a);
    for (T = e; T < e + i; ++T) {
      const D = this._circumference(T, a), F = t[T], L = {
        x: g + this.offsetX,
        y: p + this.offsetY,
        startAngle: C,
        endAngle: C + D,
        circumference: D,
        outerRadius: y,
        innerRadius: v
      };
      S && (L.options = M || this.resolveDataElementOptions(T, F.active ? "active" : r)), C += D, this.updateElement(F, T, L, r);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let i = 0, r;
    for (r = 0; r < e.length; r++) {
      const a = t._parsed[r];
      a !== null && !isNaN(a) && this.chart.getDataVisibility(r) && !e[r].hidden && (i += Math.abs(a));
    }
    return i;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? yt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, r = i.data.labels || [], a = os(e._parsed[t], i.options.locale);
    return {
      label: r[t] || "",
      value: a
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const i = this.chart;
    let r, a, l, c, u;
    if (!t) {
      for (r = 0, a = i.data.datasets.length; r < a; ++r)
        if (i.isDatasetVisible(r)) {
          l = i.getDatasetMeta(r), t = l.data, c = l.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (r = 0, a = t.length; r < a; ++r)
      u = c.resolveDataElementOptions(r), u.borderAlign !== "inner" && (e = Math.max(e, u.borderWidth || 0, u.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, r = t.length; i < r; ++i) {
      const a = this.resolveDataElementOptions(i);
      e = Math.max(e, a.offset || 0, a.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(Z(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
N(zn, "id", "doughnut"), N(zn, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), N(zn, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), N(zn, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: i, color: r } } = t.legend.options;
            return e.labels.map((a, l) => {
              const u = t.getDatasetMeta(0).controller.getStyle(l);
              return {
                text: a,
                fillStyle: u.backgroundColor,
                strokeStyle: u.borderColor,
                fontColor: r,
                lineWidth: u.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(l),
                index: l
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, i) {
        i.chart.toggleDataVisibility(e.index), i.chart.update();
      }
    }
  }
});
class gr extends ke {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: r = [], _dataset: a } = e, l = this.chart._animationsDisabled;
    let { start: c, count: u } = cf(e, r, l);
    this._drawStart = c, this._drawCount = u, hf(e) && (c = 0, u = r.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!a._decimated, i.points = r;
    const f = this.resolveDatasetElementOptions(t);
    this.options.showLine || (f.borderWidth = 0), f.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !l,
      options: f
    }, t), this.updateElements(r, c, u, t);
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", { iScale: l, vScale: c, _stacked: u, _dataset: f } = this._cachedMeta, { sharedOptions: g, includeOptions: p } = this._getSharedOptions(e, r), _ = l.axis, v = c.axis, { spanGaps: y, segment: M } = this.options, S = ci(y) ? y : Number.POSITIVE_INFINITY, C = this.chart._animationsDisabled || a || r === "none", T = e + i, D = t.length;
    let F = e > 0 && this.getParsed(e - 1);
    for (let L = 0; L < D; ++L) {
      const W = t[L], z = C ? W : {};
      if (L < e || L >= T) {
        z.skip = !0;
        continue;
      }
      const H = this.getParsed(L), Y = lt(H[v]), J = z[_] = l.getPixelForValue(H[_], L), Q = z[v] = a || Y ? c.getBasePixel() : c.getPixelForValue(u ? this.applyStack(c, H, u) : H[v], L);
      z.skip = isNaN(J) || isNaN(Q) || Y, z.stop = L > 0 && Math.abs(H[_] - F[_]) > S, M && (z.parsed = H, z.raw = f.data[L]), p && (z.options = g || this.resolveDataElementOptions(L, W.active ? "active" : r)), C || this.updateElement(W, L, z, r), F = H;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, r = t.data || [];
    if (!r.length)
      return i;
    const a = r[0].size(this.resolveDataElementOptions(0)), l = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(i, a, l) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
N(gr, "id", "line"), N(gr, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), N(gr, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class qi extends ke {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, r = i.data.labels || [], a = os(e._parsed[t].r, i.options.locale);
    return {
      label: r[t] || "",
      value: a
    };
  }
  parseObjectData(t, e, i, r) {
    return bf.bind(this)(t, e, i, r);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((i, r) => {
      const a = this.getParsed(r).r;
      !isNaN(a) && this.chart.getDataVisibility(r) && (a < e.min && (e.min = a), a > e.max && (e.max = a));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, i = t.options, r = Math.min(e.right - e.left, e.bottom - e.top), a = Math.max(r / 2, 0), l = Math.max(i.cutoutPercentage ? a / 100 * i.cutoutPercentage : 1, 0), c = (a - l) / t.getVisibleDatasetCount();
    this.outerRadius = a - c * this.index, this.innerRadius = this.outerRadius - c;
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", l = this.chart, u = l.options.animation, f = this._cachedMeta.rScale, g = f.xCenter, p = f.yCenter, _ = f.getIndexAngle(0) - 0.5 * St;
    let v = _, y;
    const M = 360 / this.countVisibleElements();
    for (y = 0; y < e; ++y)
      v += this._computeAngle(y, r, M);
    for (y = e; y < e + i; y++) {
      const S = t[y];
      let C = v, T = v + this._computeAngle(y, r, M), D = l.getDataVisibility(y) ? f.getDistanceFromCenterForValue(this.getParsed(y).r) : 0;
      v = T, a && (u.animateScale && (D = 0), u.animateRotate && (C = T = _));
      const F = {
        x: g,
        y: p,
        innerRadius: 0,
        outerRadius: D,
        startAngle: C,
        endAngle: T,
        options: this.resolveDataElementOptions(y, S.active ? "active" : r)
      };
      this.updateElement(S, y, F, r);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((i, r) => {
      !isNaN(this.getParsed(r).r) && this.chart.getDataVisibility(r) && e++;
    }), e;
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t) ? Ce(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
N(qi, "id", "polarArea"), N(qi, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), N(qi, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: i, color: r } } = t.legend.options;
            return e.labels.map((a, l) => {
              const u = t.getDatasetMeta(0).controller.getStyle(l);
              return {
                text: a,
                fillStyle: u.backgroundColor,
                strokeStyle: u.borderColor,
                fontColor: r,
                lineWidth: u.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(l),
                index: l
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, i) {
        i.chart.toggleDataVisibility(e.index), i.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class Sa extends zn {
}
N(Sa, "id", "pie"), N(Sa, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class pr extends ke {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, r) {
    return bf.bind(this)(t, e, i, r);
  }
  update(t) {
    const e = this._cachedMeta, i = e.dataset, r = e.data || [], a = e.iScale.getLabels();
    if (i.points = r, t !== "resize") {
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0);
      const c = {
        _loop: !0,
        _fullLoop: a.length === r.length,
        options: l
      };
      this.updateElement(i, void 0, c, t);
    }
    this.updateElements(r, 0, r.length, t);
  }
  updateElements(t, e, i, r) {
    const a = this._cachedMeta.rScale, l = r === "reset";
    for (let c = e; c < e + i; c++) {
      const u = t[c], f = this.resolveDataElementOptions(c, u.active ? "active" : r), g = a.getPointPositionForValue(c, this.getParsed(c).r), p = l ? a.xCenter : g.x, _ = l ? a.yCenter : g.y, v = {
        x: p,
        y: _,
        angle: g.angle,
        skip: isNaN(p) || isNaN(_),
        options: f
      };
      this.updateElement(u, c, v, r);
    }
  }
}
N(pr, "id", "radar"), N(pr, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), N(pr, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class mr extends ke {
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: r, yScale: a } = e, l = this.getParsed(t), c = r.getLabelForValue(l.x), u = a.getLabelForValue(l.y);
    return {
      label: i[t] || "",
      value: "(" + c + ", " + u + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: i = [] } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = cf(e, i, r);
    if (this._drawStart = a, this._drawCount = l, hf(e) && (a = 0, l = i.length), this.options.showLine) {
      const { dataset: c, _dataset: u } = e;
      c._chart = this.chart, c._datasetIndex = this.index, c._decimated = !!u._decimated, c.points = i;
      const f = this.resolveDatasetElementOptions(t);
      f.segment = this.options.segment, this.updateElement(c, void 0, {
        animated: !r,
        options: f
      }, t);
    }
    this.updateElements(i, a, l, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, e, i, r) {
    const a = r === "reset", { iScale: l, vScale: c, _stacked: u, _dataset: f } = this._cachedMeta, g = this.resolveDataElementOptions(e, r), p = this.getSharedOptions(g), _ = this.includeOptions(r, p), v = l.axis, y = c.axis, { spanGaps: M, segment: S } = this.options, C = ci(M) ? M : Number.POSITIVE_INFINITY, T = this.chart._animationsDisabled || a || r === "none";
    let D = e > 0 && this.getParsed(e - 1);
    for (let F = e; F < e + i; ++F) {
      const L = t[F], W = this.getParsed(F), z = T ? L : {}, H = lt(W[y]), Y = z[v] = l.getPixelForValue(W[v], F), J = z[y] = a || H ? c.getBasePixel() : c.getPixelForValue(u ? this.applyStack(c, W, u) : W[y], F);
      z.skip = isNaN(Y) || isNaN(J) || H, z.stop = F > 0 && Math.abs(W[v] - D[v]) > C, S && (z.parsed = W, z.raw = f.data[F]), _ && (z.options = p || this.resolveDataElementOptions(F, L.active ? "active" : r)), T || this.updateElement(L, F, z, r), D = W;
    }
    this.updateSharedOptions(p, r, g);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let c = 0;
      for (let u = e.length - 1; u >= 0; --u)
        c = Math.max(c, e[u].size(this.resolveDataElementOptions(u)) / 2);
      return c > 0 && c;
    }
    const i = t.dataset, r = i.options && i.options.borderWidth || 0;
    if (!e.length)
      return r;
    const a = e[0].size(this.resolveDataElementOptions(0)), l = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(r, a, l) / 2;
  }
}
N(mr, "id", "scatter"), N(mr, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), N(mr, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
var Ky = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: fr,
  BubbleController: dr,
  DoughnutController: zn,
  LineController: gr,
  PieController: Sa,
  PolarAreaController: qi,
  RadarController: pr,
  ScatterController: mr
});
function En() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ka {
  constructor(t) {
    N(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Ka.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return En();
  }
  parse() {
    return En();
  }
  format() {
    return En();
  }
  add() {
    return En();
  }
  diff() {
    return En();
  }
  startOf() {
    return En();
  }
  endOf() {
    return En();
  }
}
var qy = {
  _date: Ka
};
function Zy(n, t, e, i) {
  const { controller: r, data: a, _sorted: l } = n, c = r._cachedMeta.iScale;
  if (c && t === c.axis && t !== "r" && l && a.length) {
    const u = c._reversePixels ? vv : Qe;
    if (i) {
      if (r._sharedOptions) {
        const f = a[0], g = typeof f.getRange == "function" && f.getRange(t);
        if (g) {
          const p = u(a, t, e - g), _ = u(a, t, e + g);
          return {
            lo: p.lo,
            hi: _.hi
          };
        }
      }
    } else
      return u(a, t, e);
  }
  return {
    lo: 0,
    hi: a.length - 1
  };
}
function as(n, t, e, i, r) {
  const a = n.getSortedVisibleDatasetMetas(), l = e[t];
  for (let c = 0, u = a.length; c < u; ++c) {
    const { index: f, data: g } = a[c], { lo: p, hi: _ } = Zy(a[c], t, l, r);
    for (let v = p; v <= _; ++v) {
      const y = g[v];
      y.skip || i(y, f, v);
    }
  }
}
function Jy(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, r) {
    const a = t ? Math.abs(i.x - r.x) : 0, l = e ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2));
  };
}
function ha(n, t, e, i, r) {
  const a = [];
  return !r && !n.isPointInArea(t) || as(n, e, t, function(c, u, f) {
    !r && !tn(c, n.chartArea, 0) || c.inRange(t.x, t.y, i) && a.push({
      element: c,
      datasetIndex: u,
      index: f
    });
  }, !0), a;
}
function Qy(n, t, e, i) {
  let r = [];
  function a(l, c, u) {
    const { startAngle: f, endAngle: g } = l.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: p } = sf(l, {
      x: t.x,
      y: t.y
    });
    ts(p, f, g) && r.push({
      element: l,
      datasetIndex: c,
      index: u
    });
  }
  return as(n, e, t, a), r;
}
function t1(n, t, e, i, r, a) {
  let l = [];
  const c = Jy(e);
  let u = Number.POSITIVE_INFINITY;
  function f(g, p, _) {
    const v = g.inRange(t.x, t.y, r);
    if (i && !v)
      return;
    const y = g.getCenterPoint(r);
    if (!(!!a || n.isPointInArea(y)) && !v)
      return;
    const S = c(t, y);
    S < u ? (l = [
      {
        element: g,
        datasetIndex: p,
        index: _
      }
    ], u = S) : S === u && l.push({
      element: g,
      datasetIndex: p,
      index: _
    });
  }
  return as(n, e, t, f), l;
}
function ua(n, t, e, i, r, a) {
  return !a && !n.isPointInArea(t) ? [] : e === "r" && !i ? Qy(n, t, e, r) : t1(n, t, e, i, r, a);
}
function au(n, t, e, i, r) {
  const a = [], l = e === "x" ? "inXRange" : "inYRange";
  let c = !1;
  return as(n, e, t, (u, f, g) => {
    u[l](t[e], r) && (a.push({
      element: u,
      datasetIndex: f,
      index: g
    }), c = c || u.inRange(t.x, t.y, r));
  }), i && !c ? [] : a;
}
var e1 = {
  evaluateInteractionItems: as,
  modes: {
    index(n, t, e, i) {
      const r = Fn(t, n), a = e.axis || "x", l = e.includeInvisible || !1, c = e.intersect ? ha(n, r, a, i, l) : ua(n, r, a, !1, i, l), u = [];
      return c.length ? (n.getSortedVisibleDatasetMetas().forEach((f) => {
        const g = c[0].index, p = f.data[g];
        p && !p.skip && u.push({
          element: p,
          datasetIndex: f.index,
          index: g
        });
      }), u) : [];
    },
    dataset(n, t, e, i) {
      const r = Fn(t, n), a = e.axis || "xy", l = e.includeInvisible || !1;
      let c = e.intersect ? ha(n, r, a, i, l) : ua(n, r, a, !1, i, l);
      if (c.length > 0) {
        const u = c[0].datasetIndex, f = n.getDatasetMeta(u).data;
        c = [];
        for (let g = 0; g < f.length; ++g)
          c.push({
            element: f[g],
            datasetIndex: u,
            index: g
          });
      }
      return c;
    },
    point(n, t, e, i) {
      const r = Fn(t, n), a = e.axis || "xy", l = e.includeInvisible || !1;
      return ha(n, r, a, i, l);
    },
    nearest(n, t, e, i) {
      const r = Fn(t, n), a = e.axis || "xy", l = e.includeInvisible || !1;
      return ua(n, r, a, e.intersect, i, l);
    },
    x(n, t, e, i) {
      const r = Fn(t, n);
      return au(n, r, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const r = Fn(t, n);
      return au(n, r, "y", e.intersect, i);
    }
  }
};
const kf = [
  "left",
  "top",
  "right",
  "bottom"
];
function Ii(n, t) {
  return n.filter((e) => e.pos === t);
}
function lu(n, t) {
  return n.filter((e) => kf.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Fi(n, t) {
  return n.sort((e, i) => {
    const r = t ? i : e, a = t ? e : i;
    return r.weight === a.weight ? r.index - a.index : r.weight - a.weight;
  });
}
function n1(n) {
  const t = [];
  let e, i, r, a, l, c;
  for (e = 0, i = (n || []).length; e < i; ++e)
    r = n[e], { position: a, options: { stack: l, stackWeight: c = 1 } } = r, t.push({
      index: e,
      box: r,
      pos: a,
      horizontal: r.isHorizontal(),
      weight: r.weight,
      stack: l && a + l,
      stackWeight: c
    });
  return t;
}
function i1(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: r, stackWeight: a } = e;
    if (!i || !kf.includes(r))
      continue;
    const l = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    l.count++, l.weight += a;
  }
  return t;
}
function s1(n, t) {
  const e = i1(n), { vBoxMaxWidth: i, hBoxMaxHeight: r } = t;
  let a, l, c;
  for (a = 0, l = n.length; a < l; ++a) {
    c = n[a];
    const { fullSize: u } = c.box, f = e[c.stack], g = f && c.stackWeight / f.weight;
    c.horizontal ? (c.width = g ? g * i : u && t.availableWidth, c.height = r) : (c.width = i, c.height = g ? g * r : u && t.availableHeight);
  }
  return e;
}
function r1(n) {
  const t = n1(n), e = Fi(t.filter((f) => f.box.fullSize), !0), i = Fi(Ii(t, "left"), !0), r = Fi(Ii(t, "right")), a = Fi(Ii(t, "top"), !0), l = Fi(Ii(t, "bottom")), c = lu(t, "x"), u = lu(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(a),
    rightAndBottom: r.concat(u).concat(l).concat(c),
    chartArea: Ii(t, "chartArea"),
    vertical: i.concat(r).concat(u),
    horizontal: a.concat(l).concat(c)
  };
}
function cu(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function Tf(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function o1(n, t, e, i) {
  const { pos: r, box: a } = e, l = n.maxPadding;
  if (!ot(r)) {
    e.size && (n[r] -= e.size);
    const p = i[e.stack] || {
      size: 0,
      count: 1
    };
    p.size = Math.max(p.size, e.horizontal ? a.height : a.width), e.size = p.size / p.count, n[r] += e.size;
  }
  a.getPadding && Tf(l, a.getPadding());
  const c = Math.max(0, t.outerWidth - cu(l, n, "left", "right")), u = Math.max(0, t.outerHeight - cu(l, n, "top", "bottom")), f = c !== n.w, g = u !== n.h;
  return n.w = c, n.h = u, e.horizontal ? {
    same: f,
    other: g
  } : {
    same: g,
    other: f
  };
}
function a1(n) {
  const t = n.maxPadding;
  function e(i) {
    const r = Math.max(t[i] - n[i], 0);
    return n[i] += r, r;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function l1(n, t) {
  const e = t.maxPadding;
  function i(r) {
    const a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return r.forEach((l) => {
      a[l] = Math.max(t[l], e[l]);
    }), a;
  }
  return i(n ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Vi(n, t, e, i) {
  const r = [];
  let a, l, c, u, f, g;
  for (a = 0, l = n.length, f = 0; a < l; ++a) {
    c = n[a], u = c.box, u.update(c.width || t.w, c.height || t.h, l1(c.horizontal, t));
    const { same: p, other: _ } = o1(t, e, c, i);
    f |= p && r.length, g = g || _, u.fullSize || r.push(c);
  }
  return f && Vi(r, t, e, i) || g;
}
function rr(n, t, e, i, r) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + r, n.width = i, n.height = r;
}
function hu(n, t, e, i) {
  const r = e.padding;
  let { x: a, y: l } = t;
  for (const c of n) {
    const u = c.box, f = i[c.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, g = c.stackWeight / f.weight || 1;
    if (c.horizontal) {
      const p = t.w * g, _ = f.size || u.height;
      Qi(f.start) && (l = f.start), u.fullSize ? rr(u, r.left, l, e.outerWidth - r.right - r.left, _) : rr(u, t.left + f.placed, l, p, _), f.start = l, f.placed += p, l = u.bottom;
    } else {
      const p = t.h * g, _ = f.size || u.width;
      Qi(f.start) && (a = f.start), u.fullSize ? rr(u, a, r.top, _, e.outerHeight - r.bottom - r.top) : rr(u, a, t.top + f.placed, _, p), f.start = a, f.placed += p, a = u.right;
    }
  }
  t.x = a, t.y = l;
}
var Yt = {
  addBox(n, t) {
    n.boxes || (n.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(n, t, e, i) {
    if (!n)
      return;
    const r = Xt(n.options.layout.padding), a = Math.max(t - r.width, 0), l = Math.max(e - r.height, 0), c = r1(n.boxes), u = c.vertical, f = c.horizontal;
    gt(n.boxes, (M) => {
      typeof M.beforeLayout == "function" && M.beforeLayout();
    });
    const g = u.reduce((M, S) => S.box.options && S.box.options.display === !1 ? M : M + 1, 0) || 1, p = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: r,
      availableWidth: a,
      availableHeight: l,
      vBoxMaxWidth: a / 2 / g,
      hBoxMaxHeight: l / 2
    }), _ = Object.assign({}, r);
    Tf(_, Xt(i));
    const v = Object.assign({
      maxPadding: _,
      w: a,
      h: l,
      x: r.left,
      y: r.top
    }, r), y = s1(u.concat(f), p);
    Vi(c.fullSize, v, p, y), Vi(u, v, p, y), Vi(f, v, p, y) && Vi(u, v, p, y), a1(v), hu(c.leftAndTop, v, p, y), v.x += v.w, v.y += v.h, hu(c.rightAndBottom, v, p, y), n.chartArea = {
      left: v.left,
      top: v.top,
      right: v.left + v.w,
      bottom: v.top + v.h,
      height: v.h,
      width: v.w
    }, gt(c.chartArea, (M) => {
      const S = M.box;
      Object.assign(S, n.chartArea), S.update(v.w, v.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Df {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {
  }
  removeEventListener(t, e, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, r) {
    return e = Math.max(0, e || t.width), i = i || t.height, {
      width: e,
      height: Math.max(0, r ? Math.floor(e / r) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class c1 extends Df {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const _r = "$chartjs", h1 = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, uu = (n) => n === null || n === "";
function u1(n, t) {
  const e = n.style, i = n.getAttribute("height"), r = n.getAttribute("width");
  if (n[_r] = {
    initial: {
      height: i,
      width: r,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", uu(r)) {
    const a = jh(n, "width");
    a !== void 0 && (n.width = a);
  }
  if (uu(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const a = jh(n, "height");
      a !== void 0 && (n.height = a);
    }
  return n;
}
const Lf = dy ? {
  passive: !0
} : !1;
function f1(n, t, e) {
  n.addEventListener(t, e, Lf);
}
function d1(n, t, e) {
  n.canvas.removeEventListener(t, e, Lf);
}
function g1(n, t) {
  const e = h1[n.type] || n.type, { x: i, y: r } = Fn(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null
  };
}
function Or(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function p1(n, t, e) {
  const i = n.canvas, r = new MutationObserver((a) => {
    let l = !1;
    for (const c of a)
      l = l || Or(c.addedNodes, i), l = l && !Or(c.removedNodes, i);
    l && e();
  });
  return r.observe(document, {
    childList: !0,
    subtree: !0
  }), r;
}
function m1(n, t, e) {
  const i = n.canvas, r = new MutationObserver((a) => {
    let l = !1;
    for (const c of a)
      l = l || Or(c.removedNodes, i), l = l && !Or(c.addedNodes, i);
    l && e();
  });
  return r.observe(document, {
    childList: !0,
    subtree: !0
  }), r;
}
const ns = /* @__PURE__ */ new Map();
let fu = 0;
function Rf() {
  const n = window.devicePixelRatio;
  n !== fu && (fu = n, ns.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function _1(n, t) {
  ns.size || window.addEventListener("resize", Rf), ns.set(n, t);
}
function b1(n) {
  ns.delete(n), ns.size || window.removeEventListener("resize", Rf);
}
function x1(n, t, e) {
  const i = n.canvas, r = i && Ga(i);
  if (!r)
    return;
  const a = lf((c, u) => {
    const f = r.clientWidth;
    e(c, u), f < r.clientWidth && e();
  }, window), l = new ResizeObserver((c) => {
    const u = c[0], f = u.contentRect.width, g = u.contentRect.height;
    f === 0 && g === 0 || a(f, g);
  });
  return l.observe(r), _1(n, a), l;
}
function fa(n, t, e) {
  e && e.disconnect(), t === "resize" && b1(n);
}
function v1(n, t, e) {
  const i = n.canvas, r = lf((a) => {
    n.ctx !== null && e(g1(a, n));
  }, n);
  return f1(i, t, r), r;
}
class y1 extends Df {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (u1(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[_r])
      return !1;
    const i = e[_r].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const l = i[a];
      lt(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
    });
    const r = i.style || {};
    return Object.keys(r).forEach((a) => {
      e.style[a] = r[a];
    }), e.width = e.width, delete e[_r], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const r = t.$proxies || (t.$proxies = {}), l = {
      attach: p1,
      detach: m1,
      resize: x1
    }[e] || v1;
    r[e] = l(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), r = i[e];
    if (!r)
      return;
    ({
      attach: fa,
      detach: fa,
      resize: fa
    }[e] || d1)(t, e, r), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, r) {
    return fy(t, e, i, r);
  }
  isAttached(t) {
    const e = Ga(t);
    return !!(e && e.isConnected);
  }
}
function w1(n) {
  return !vf() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? c1 : y1;
}
class Te {
  constructor() {
    N(this, "x");
    N(this, "y");
    N(this, "active", !1);
    N(this, "options");
    N(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  hasValue() {
    return ci(this.x) && ci(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i)
      return this;
    const r = {};
    return t.forEach((a) => {
      r[a] = i[a] && i[a].active() ? i[a]._to : this[a];
    }), r;
  }
}
N(Te, "defaults", {}), N(Te, "defaultRoutes");
function S1(n, t) {
  const e = n.options.ticks, i = M1(n), r = Math.min(e.maxTicksLimit || i, i), a = e.major.enabled ? O1(t) : [], l = a.length, c = a[0], u = a[l - 1], f = [];
  if (l > r)
    return P1(t, f, a, l / r), f;
  const g = A1(a, t, r);
  if (l > 0) {
    let p, _;
    const v = l > 1 ? Math.round((u - c) / (l - 1)) : null;
    for (or(t, f, g, lt(v) ? 0 : c - v, c), p = 0, _ = l - 1; p < _; p++)
      or(t, f, g, a[p], a[p + 1]);
    return or(t, f, g, u, lt(v) ? t.length : u + v), f;
  }
  return or(t, f, g), f;
}
function M1(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), r = n._maxLength / e;
  return Math.floor(Math.min(i, r));
}
function A1(n, t, e) {
  const i = C1(n), r = t.length / e;
  if (!i)
    return Math.max(r, 1);
  const a = mv(i);
  for (let l = 0, c = a.length - 1; l < c; l++) {
    const u = a[l];
    if (u > r)
      return u;
  }
  return Math.max(r, 1);
}
function O1(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function P1(n, t, e, i) {
  let r = 0, a = e[0], l;
  for (i = Math.ceil(i), l = 0; l < n.length; l++)
    l === a && (t.push(n[l]), r++, a = e[r * i]);
}
function or(n, t, e, i, r) {
  const a = Z(i, 0), l = Math.min(Z(r, n.length), n.length);
  let c = 0, u, f, g;
  for (e = Math.ceil(e), r && (u = r - i, e = u / Math.floor(u / e)), g = a; g < 0; )
    c++, g = Math.round(a + c * e);
  for (f = Math.max(a, 0); f < l; f++)
    f === g && (t.push(n[f]), c++, g = Math.round(a + c * e));
}
function C1(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const k1 = (n) => n === "left" ? "right" : n === "right" ? "left" : n, du = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e, gu = (n, t) => Math.min(t || n, n);
function pu(n, t) {
  const e = [], i = n.length / t, r = n.length;
  let a = 0;
  for (; a < r; a += i)
    e.push(n[Math.floor(a)]);
  return e;
}
function T1(n, t, e) {
  const i = n.ticks.length, r = Math.min(t, i - 1), a = n._startPixel, l = n._endPixel, c = 1e-6;
  let u = n.getPixelForTick(r), f;
  if (!(e && (i === 1 ? f = Math.max(u - a, l - u) : t === 0 ? f = (n.getPixelForTick(1) - u) / 2 : f = (u - n.getPixelForTick(r - 1)) / 2, u += r < t ? f : -f, u < a - c || u > l + c)))
    return u;
}
function D1(n, t) {
  gt(n, (e) => {
    const i = e.gc, r = i.length / 2;
    let a;
    if (r > t) {
      for (a = 0; a < r; ++a)
        delete e.data[i[a]];
      i.splice(0, r);
    }
  });
}
function Bi(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function mu(n, t) {
  if (!n.display)
    return 0;
  const e = It(n.font, t), i = Xt(n.padding);
  return (vt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function L1(n, t) {
  return vn(n, {
    scale: t,
    type: "scale"
  });
}
function R1(n, t, e) {
  return vn(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function E1(n, t, e) {
  let i = Va(n);
  return (e && t !== "right" || !e && t === "right") && (i = k1(i)), i;
}
function I1(n, t, e, i) {
  const { top: r, left: a, bottom: l, right: c, chart: u } = n, { chartArea: f, scales: g } = u;
  let p = 0, _, v, y;
  const M = l - r, S = c - a;
  if (n.isHorizontal()) {
    if (v = $t(i, a, c), ot(e)) {
      const C = Object.keys(e)[0], T = e[C];
      y = g[C].getPixelForValue(T) + M - t;
    } else
      e === "center" ? y = (f.bottom + f.top) / 2 + M - t : y = du(n, e, t);
    _ = c - a;
  } else {
    if (ot(e)) {
      const C = Object.keys(e)[0], T = e[C];
      v = g[C].getPixelForValue(T) - S + t;
    } else
      e === "center" ? v = (f.left + f.right) / 2 - S + t : v = du(n, e, t);
    y = $t(i, l, r), p = e === "left" ? -Pt : Pt;
  }
  return {
    titleX: v,
    titleY: y,
    maxWidth: _,
    rotation: p
  };
}
class Un extends Te {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: r } = this;
    return t = ce(t, Number.POSITIVE_INFINITY), e = ce(e, Number.NEGATIVE_INFINITY), i = ce(i, Number.POSITIVE_INFINITY), r = ce(r, Number.NEGATIVE_INFINITY), {
      min: ce(t, i),
      max: ce(e, r),
      minDefined: Ot(t),
      maxDefined: Ot(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: r, maxDefined: a } = this.getUserBounds(), l;
    if (r && a)
      return {
        min: e,
        max: i
      };
    const c = this.getMatchingVisibleMetas();
    for (let u = 0, f = c.length; u < f; ++u)
      l = c[u].controller.getMinMax(this, t), r || (e = Math.min(e, l.min)), a || (i = Math.max(i, l.max));
    return e = a && e > i ? i : e, i = r && e > i ? e : i, {
      min: ce(e, ce(i, e)),
      max: ce(i, ce(e, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    bt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, i) {
    const { beginAtZero: r, grace: a, ticks: l } = this.options, c = l.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = $v(this, a, r), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const u = c < this.ticks.length;
    this._convertTicksToLabels(u ? pu(this.ticks, c) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), l.display && (l.autoSkip || l.source === "auto") && (this.ticks = S1(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), u && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    bt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    bt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    bt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), bt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    bt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, r, a;
    for (i = 0, r = t.length; i < r; i++)
      a = t[i], a.label = bt(e.callback, [
        a.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    bt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    bt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = gu(this.ticks.length, t.ticks.maxTicksLimit), r = e.minRotation || 0, a = e.maxRotation;
    let l = r, c, u, f;
    if (!this._isVisible() || !e.display || r >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = r;
      return;
    }
    const g = this._getLabelSizes(), p = g.widest.width, _ = g.highest.height, v = zt(this.chart.width - p, 0, this.maxWidth);
    c = t.offset ? this.maxWidth / i : v / (i - 1), p + 6 > c && (c = v / (i - (t.offset ? 0.5 : 1)), u = this.maxHeight - Bi(t.grid) - e.padding - mu(t.title, this.chart.options.font), f = Math.sqrt(p * p + _ * _), l = Na(Math.min(Math.asin(zt((g.highest.height + 6) / c, -1, 1)), Math.asin(zt(u / f, -1, 1)) - Math.asin(zt(_ / f, -1, 1)))), l = Math.max(r, Math.min(a, l))), this.labelRotation = l;
  }
  afterCalculateLabelRotation() {
    bt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    bt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: r, grid: a } } = this, l = this._isVisible(), c = this.isHorizontal();
    if (l) {
      const u = mu(r, e.options.font);
      if (c ? (t.width = this.maxWidth, t.height = Bi(a) + u) : (t.height = this.maxHeight, t.width = Bi(a) + u), i.display && this.ticks.length) {
        const { first: f, last: g, widest: p, highest: _ } = this._getLabelSizes(), v = i.padding * 2, y = Ce(this.labelRotation), M = Math.cos(y), S = Math.sin(y);
        if (c) {
          const C = i.mirror ? 0 : S * p.width + M * _.height;
          t.height = Math.min(this.maxHeight, t.height + C + v);
        } else {
          const C = i.mirror ? 0 : M * p.width + S * _.height;
          t.width = Math.min(this.maxWidth, t.width + C + v);
        }
        this._calculatePadding(f, g, S, M);
      }
    }
    this._handleMargins(), c ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, r) {
    const { ticks: { align: a, padding: l }, position: c } = this.options, u = this.labelRotation !== 0, f = c !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const g = this.getPixelForTick(0) - this.left, p = this.right - this.getPixelForTick(this.ticks.length - 1);
      let _ = 0, v = 0;
      u ? f ? (_ = r * t.width, v = i * e.height) : (_ = i * t.height, v = r * e.width) : a === "start" ? v = e.width : a === "end" ? _ = t.width : a !== "inner" && (_ = t.width / 2, v = e.width / 2), this.paddingLeft = Math.max((_ - g + l) * this.width / (this.width - g), 0), this.paddingRight = Math.max((v - p + l) * this.width / (this.width - p), 0);
    } else {
      let g = e.height / 2, p = t.height / 2;
      a === "start" ? (g = 0, p = t.height) : a === "end" && (g = e.height, p = 0), this.paddingTop = g + l, this.paddingBottom = p + l;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    bt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++)
      lt(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = pu(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: r, _longestTextCache: a } = this, l = [], c = [], u = Math.floor(e / gu(e, i));
    let f = 0, g = 0, p, _, v, y, M, S, C, T, D, F, L;
    for (p = 0; p < e; p += u) {
      if (y = t[p].label, M = this._resolveTickFontOptions(p), r.font = S = M.string, C = a[S] = a[S] || {
        data: {},
        gc: []
      }, T = M.lineHeight, D = F = 0, !lt(y) && !vt(y))
        D = Mr(r, C.data, C.gc, D, y), F = T;
      else if (vt(y))
        for (_ = 0, v = y.length; _ < v; ++_)
          L = y[_], !lt(L) && !vt(L) && (D = Mr(r, C.data, C.gc, D, L), F += T);
      l.push(D), c.push(F), f = Math.max(D, f), g = Math.max(F, g);
    }
    D1(a, e);
    const W = l.indexOf(f), z = c.indexOf(g), H = (Y) => ({
      width: l[Y] || 0,
      height: c[Y] || 0
    });
    return {
      first: H(0),
      last: H(e - 1),
      widest: H(W),
      highest: H(z),
      widths: l,
      heights: c
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return xv(this._alignToPixels ? Rn(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = R1(this.getContext(), t, i));
    }
    return this.$context || (this.$context = L1(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Ce(this.labelRotation), i = Math.abs(Math.cos(e)), r = Math.abs(Math.sin(e)), a = this._getLabelSizes(), l = t.autoSkipPadding || 0, c = a ? a.widest.width + l : 0, u = a ? a.highest.height + l : 0;
    return this.isHorizontal() ? u * i > c * r ? c / i : u / r : u * r < c * i ? u / i : c / r;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, r = this.options, { grid: a, position: l, border: c } = r, u = a.offset, f = this.isHorizontal(), p = this.ticks.length + (u ? 1 : 0), _ = Bi(a), v = [], y = c.setContext(this.getContext()), M = y.display ? y.width : 0, S = M / 2, C = function(mt) {
      return Rn(i, mt, M);
    };
    let T, D, F, L, W, z, H, Y, J, Q, st, Lt;
    if (l === "top")
      T = C(this.bottom), z = this.bottom - _, Y = T - S, Q = C(t.top) + S, Lt = t.bottom;
    else if (l === "bottom")
      T = C(this.top), Q = t.top, Lt = C(t.bottom) - S, z = T + S, Y = this.top + _;
    else if (l === "left")
      T = C(this.right), W = this.right - _, H = T - S, J = C(t.left) + S, st = t.right;
    else if (l === "right")
      T = C(this.left), J = t.left, st = C(t.right) - S, W = T + S, H = this.left + _;
    else if (e === "x") {
      if (l === "center")
        T = C((t.top + t.bottom) / 2 + 0.5);
      else if (ot(l)) {
        const mt = Object.keys(l)[0], ft = l[mt];
        T = C(this.chart.scales[mt].getPixelForValue(ft));
      }
      Q = t.top, Lt = t.bottom, z = T + S, Y = z + _;
    } else if (e === "y") {
      if (l === "center")
        T = C((t.left + t.right) / 2);
      else if (ot(l)) {
        const mt = Object.keys(l)[0], ft = l[mt];
        T = C(this.chart.scales[mt].getPixelForValue(ft));
      }
      W = T - S, H = W - _, J = t.left, st = t.right;
    }
    const Ht = Z(r.ticks.maxTicksLimit, p), ht = Math.max(1, Math.ceil(p / Ht));
    for (D = 0; D < p; D += ht) {
      const mt = this.getContext(D), ft = a.setContext(mt), Dt = c.setContext(mt), Ft = ft.lineWidth, ye = ft.color, jt = Dt.dash || [], en = Dt.dashOffset, yn = ft.tickWidth, wn = ft.tickColor, ue = ft.tickBorderDash || [], De = ft.tickBorderDashOffset;
      F = T1(this, D, u), F !== void 0 && (L = Rn(i, F, Ft), f ? W = H = J = st = L : z = Y = Q = Lt = L, v.push({
        tx1: W,
        ty1: z,
        tx2: H,
        ty2: Y,
        x1: J,
        y1: Q,
        x2: st,
        y2: Lt,
        width: Ft,
        color: ye,
        borderDash: jt,
        borderDashOffset: en,
        tickWidth: yn,
        tickColor: wn,
        tickBorderDash: ue,
        tickBorderDashOffset: De
      }));
    }
    return this._ticksLength = p, this._borderValue = T, v;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: r, ticks: a } = i, l = this.isHorizontal(), c = this.ticks, { align: u, crossAlign: f, padding: g, mirror: p } = a, _ = Bi(i.grid), v = _ + g, y = p ? -g : v, M = -Ce(this.labelRotation), S = [];
    let C, T, D, F, L, W, z, H, Y, J, Q, st, Lt = "middle";
    if (r === "top")
      W = this.bottom - y, z = this._getXAxisLabelAlignment();
    else if (r === "bottom")
      W = this.top + y, z = this._getXAxisLabelAlignment();
    else if (r === "left") {
      const ht = this._getYAxisLabelAlignment(_);
      z = ht.textAlign, L = ht.x;
    } else if (r === "right") {
      const ht = this._getYAxisLabelAlignment(_);
      z = ht.textAlign, L = ht.x;
    } else if (e === "x") {
      if (r === "center")
        W = (t.top + t.bottom) / 2 + v;
      else if (ot(r)) {
        const ht = Object.keys(r)[0], mt = r[ht];
        W = this.chart.scales[ht].getPixelForValue(mt) + v;
      }
      z = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (r === "center")
        L = (t.left + t.right) / 2 - v;
      else if (ot(r)) {
        const ht = Object.keys(r)[0], mt = r[ht];
        L = this.chart.scales[ht].getPixelForValue(mt);
      }
      z = this._getYAxisLabelAlignment(_).textAlign;
    }
    e === "y" && (u === "start" ? Lt = "top" : u === "end" && (Lt = "bottom"));
    const Ht = this._getLabelSizes();
    for (C = 0, T = c.length; C < T; ++C) {
      D = c[C], F = D.label;
      const ht = a.setContext(this.getContext(C));
      H = this.getPixelForTick(C) + a.labelOffset, Y = this._resolveTickFontOptions(C), J = Y.lineHeight, Q = vt(F) ? F.length : 1;
      const mt = Q / 2, ft = ht.color, Dt = ht.textStrokeColor, Ft = ht.textStrokeWidth;
      let ye = z;
      l ? (L = H, z === "inner" && (C === T - 1 ? ye = this.options.reverse ? "left" : "right" : C === 0 ? ye = this.options.reverse ? "right" : "left" : ye = "center"), r === "top" ? f === "near" || M !== 0 ? st = -Q * J + J / 2 : f === "center" ? st = -Ht.highest.height / 2 - mt * J + J : st = -Ht.highest.height + J / 2 : f === "near" || M !== 0 ? st = J / 2 : f === "center" ? st = Ht.highest.height / 2 - mt * J : st = Ht.highest.height - Q * J, p && (st *= -1), M !== 0 && !ht.showLabelBackdrop && (L += J / 2 * Math.sin(M))) : (W = H, st = (1 - Q) * J / 2);
      let jt;
      if (ht.showLabelBackdrop) {
        const en = Xt(ht.backdropPadding), yn = Ht.heights[C], wn = Ht.widths[C];
        let ue = st - en.top, De = 0 - en.left;
        switch (Lt) {
          case "middle":
            ue -= yn / 2;
            break;
          case "bottom":
            ue -= yn;
            break;
        }
        switch (z) {
          case "center":
            De -= wn / 2;
            break;
          case "right":
            De -= wn;
            break;
        }
        jt = {
          left: De,
          top: ue,
          width: wn + en.width,
          height: yn + en.height,
          color: ht.backdropColor
        };
      }
      S.push({
        label: F,
        font: Y,
        textOffset: st,
        options: {
          rotation: M,
          color: ft,
          strokeColor: Dt,
          strokeWidth: Ft,
          textAlign: ye,
          textBaseline: Lt,
          translation: [
            L,
            W
          ],
          backdrop: jt
        }
      });
    }
    return S;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Ce(this.labelRotation))
      return t === "top" ? "left" : "right";
    let r = "center";
    return e.align === "start" ? r = "left" : e.align === "end" ? r = "right" : e.align === "inner" && (r = "inner"), r;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: r, padding: a } } = this.options, l = this._getLabelSizes(), c = t + a, u = l.widest.width;
    let f, g;
    return e === "left" ? r ? (g = this.right + a, i === "near" ? f = "left" : i === "center" ? (f = "center", g += u / 2) : (f = "right", g += u)) : (g = this.right - c, i === "near" ? f = "right" : i === "center" ? (f = "center", g -= u / 2) : (f = "left", g = this.left)) : e === "right" ? r ? (g = this.left + a, i === "near" ? f = "right" : i === "center" ? (f = "center", g -= u / 2) : (f = "left", g -= u)) : (g = this.left + c, i === "near" ? f = "left" : i === "center" ? (f = "center", g += u / 2) : (f = "right", g = this.right)) : f = "right", {
      textAlign: f,
      x: g
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: i, top: r, width: a, height: l } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(i, r, a, l), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const r = this.ticks.findIndex((a) => a.value === t);
    return r >= 0 ? e.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, i = this.ctx, r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let a, l;
    const c = (u, f, g) => {
      !g.width || !g.color || (i.save(), i.lineWidth = g.width, i.strokeStyle = g.color, i.setLineDash(g.borderDash || []), i.lineDashOffset = g.borderDashOffset, i.beginPath(), i.moveTo(u.x, u.y), i.lineTo(f.x, f.y), i.stroke(), i.restore());
    };
    if (e.display)
      for (a = 0, l = r.length; a < l; ++a) {
        const u = r[a];
        e.drawOnChartArea && c({
          x: u.x1,
          y: u.y1
        }, {
          x: u.x2,
          y: u.y2
        }, u), e.drawTicks && c({
          x: u.tx1,
          y: u.ty1
        }, {
          x: u.tx2,
          y: u.ty2
        }, {
          color: u.tickColor,
          width: u.tickWidth,
          borderDash: u.tickBorderDash,
          borderDashOffset: u.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: i, grid: r } } = this, a = i.setContext(this.getContext()), l = i.display ? a.width : 0;
    if (!l)
      return;
    const c = r.setContext(this.getContext(0)).lineWidth, u = this._borderValue;
    let f, g, p, _;
    this.isHorizontal() ? (f = Rn(t, this.left, l) - l / 2, g = Rn(t, this.right, c) + c / 2, p = _ = u) : (p = Rn(t, this.top, l) - l / 2, _ = Rn(t, this.bottom, c) + c / 2, f = g = u), e.save(), e.lineWidth = a.width, e.strokeStyle = a.color, e.beginPath(), e.moveTo(f, p), e.lineTo(g, _), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, r = this._computeLabelArea();
    r && Dr(i, r);
    const a = this.getLabelItems(t);
    for (const l of a) {
      const c = l.options, u = l.font, f = l.label, g = l.textOffset;
      Vn(i, f, 0, g, u, c);
    }
    r && Lr(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: r } } = this;
    if (!i.display)
      return;
    const a = It(i.font), l = Xt(i.padding), c = i.align;
    let u = a.lineHeight / 2;
    e === "bottom" || e === "center" || ot(e) ? (u += l.bottom, vt(i.text) && (u += a.lineHeight * (i.text.length - 1))) : u += l.top;
    const { titleX: f, titleY: g, maxWidth: p, rotation: _ } = I1(this, u, e, c);
    Vn(t, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: p,
      rotation: _,
      textAlign: E1(c, e, r),
      textBaseline: "middle",
      translation: [
        f,
        g
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = Z(t.grid && t.grid.z, -1), r = Z(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Un.prototype.draw ? [
      {
        z: e,
        draw: (a) => {
          this.draw(a);
        }
      }
    ] : [
      {
        z: i,
        draw: (a) => {
          this.drawBackground(), this.drawGrid(a), this.drawTitle();
        }
      },
      {
        z: r,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (a) => {
          this.drawLabels(a);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", r = [];
    let a, l;
    for (a = 0, l = e.length; a < l; ++a) {
      const c = e[a];
      c[i] === this.id && (!t || c.type === t) && r.push(c);
    }
    return r;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return It(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ar {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    z1(e) && (i = this.register(e));
    const r = this.items, a = t.id, l = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + t);
    return a in r || (r[a] = t, F1(t, l, i), this.override && Ct.override(t.id, t.overrides)), l;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, r = this.scope;
    i in e && delete e[i], r && i in Ct[r] && (delete Ct[r][i], this.override && delete Hn[i]);
  }
}
function F1(n, t, e) {
  const i = Ji(/* @__PURE__ */ Object.create(null), [
    e ? Ct.get(e) : {},
    Ct.get(t),
    n.defaults
  ]);
  Ct.set(t, i), n.defaultRoutes && B1(t, n.defaultRoutes), n.descriptors && Ct.describe(t, n.descriptors);
}
function B1(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), r = i.pop(), a = [
      n
    ].concat(i).join("."), l = t[e].split("."), c = l.pop(), u = l.join(".");
    Ct.route(a, r, u, c);
  });
}
function z1(n) {
  return "id" in n && "defaults" in n;
}
class W1 {
  constructor() {
    this.controllers = new ar(ke, "datasets", !0), this.elements = new ar(Te, "elements"), this.plugins = new ar(Object, "plugins"), this.scales = new ar(Un, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, i) {
    [
      ...e
    ].forEach((r) => {
      const a = i || this._getRegistryForType(r);
      i || a.isForType(r) || a === this.plugins && r.id ? this._exec(t, a, r) : gt(r, (l) => {
        const c = i || this._getRegistryForType(l);
        this._exec(t, c, l);
      });
    });
  }
  _exec(t, e, i) {
    const r = Wa(t);
    bt(i["before" + r], [], i), e[t](i), bt(i["after" + r], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const r = e.get(t);
    if (r === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return r;
  }
}
var Fe = /* @__PURE__ */ new W1();
class N1 {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, r) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const a = r ? this._descriptors(t).filter(r) : this._descriptors(t), l = this._notify(a, t, e, i);
    return e === "afterDestroy" && (this._notify(a, t, "stop"), this._notify(this._init, t, "uninstall")), l;
  }
  _notify(t, e, i, r) {
    r = r || {};
    for (const a of t) {
      const l = a.plugin, c = l[i], u = [
        e,
        r,
        a.options
      ];
      if (bt(c, u, l) === !1 && r.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    lt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, r = Z(i.options && i.options.plugins, {}), a = H1(i);
    return r === !1 && !e ? [] : U1(t, a, r, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, r = (a, l) => a.filter((c) => !l.some((u) => c.plugin.id === u.plugin.id));
    this._notify(r(e, i), t, "stop"), this._notify(r(i, e), t, "start");
  }
}
function H1(n) {
  const t = {}, e = [], i = Object.keys(Fe.plugins.items);
  for (let a = 0; a < i.length; a++)
    e.push(Fe.getPlugin(i[a]));
  const r = n.plugins || [];
  for (let a = 0; a < r.length; a++) {
    const l = r[a];
    e.indexOf(l) === -1 && (e.push(l), t[l.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function V1(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function U1(n, { plugins: t, localIds: e }, i, r) {
  const a = [], l = n.getContext();
  for (const c of t) {
    const u = c.id, f = V1(i[u], r);
    f !== null && a.push({
      plugin: c,
      options: $1(n.config, {
        plugin: c,
        local: e[u]
      }, f, l)
    });
  }
  return a;
}
function $1(n, { plugin: t, local: e }, i, r) {
  const a = n.pluginScopeKeys(t), l = n.getOptionScopes(i, a);
  return e && t.defaults && l.push(t.defaults), n.createResolver(l, r, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ma(n, t) {
  const e = Ct.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Y1(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function X1(n, t) {
  return n === t ? "_index_" : "_value_";
}
function _u(n) {
  if (n === "x" || n === "y" || n === "r")
    return n;
}
function j1(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function Aa(n, ...t) {
  if (_u(n))
    return n;
  for (const e of t) {
    const i = e.axis || j1(e.position) || n.length > 1 && _u(n[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`);
}
function bu(n, t, e) {
  if (e[t + "AxisID"] === n)
    return {
      axis: t
    };
}
function G1(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length)
      return bu(n, "x", e[0]) || bu(n, "y", e[0]);
  }
  return {};
}
function K1(n, t) {
  const e = Hn[n.type] || {
    scales: {}
  }, i = t.scales || {}, r = Ma(n.type, t), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((l) => {
    const c = i[l];
    if (!ot(c))
      return console.error(`Invalid scale configuration for scale: ${l}`);
    if (c._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${l}`);
    const u = Aa(l, c, G1(l, n), Ct.scales[c.type]), f = X1(u, r), g = e.scales || {};
    a[l] = Xi(/* @__PURE__ */ Object.create(null), [
      {
        axis: u
      },
      c,
      g[u],
      g[f]
    ]);
  }), n.data.datasets.forEach((l) => {
    const c = l.type || n.type, u = l.indexAxis || Ma(c, t), g = (Hn[c] || {}).scales || {};
    Object.keys(g).forEach((p) => {
      const _ = Y1(p, u), v = l[_ + "AxisID"] || _;
      a[v] = a[v] || /* @__PURE__ */ Object.create(null), Xi(a[v], [
        {
          axis: _
        },
        i[v],
        g[p]
      ]);
    });
  }), Object.keys(a).forEach((l) => {
    const c = a[l];
    Xi(c, [
      Ct.scales[c.type],
      Ct.scale
    ]);
  }), a;
}
function Ef(n) {
  const t = n.options || (n.options = {});
  t.plugins = Z(t.plugins, {}), t.scales = K1(n, t);
}
function If(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function q1(n) {
  return n = n || {}, n.data = If(n.data), Ef(n), n;
}
const xu = /* @__PURE__ */ new Map(), Ff = /* @__PURE__ */ new Set();
function lr(n, t) {
  let e = xu.get(n);
  return e || (e = t(), xu.set(n, e), Ff.add(e)), e;
}
const zi = (n, t, e) => {
  const i = bn(t, e);
  i !== void 0 && n.add(i);
};
class Z1 {
  constructor(t) {
    this._config = q1(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = If(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Ef(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return lr(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return lr(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return lr(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, i = this.type;
    return lr(`${i}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let r = i.get(t);
    return (!r || e) && (r = /* @__PURE__ */ new Map(), i.set(t, r)), r;
  }
  getOptionScopes(t, e, i) {
    const { options: r, type: a } = this, l = this._cachedScopes(t, i), c = l.get(e);
    if (c)
      return c;
    const u = /* @__PURE__ */ new Set();
    e.forEach((g) => {
      t && (u.add(t), g.forEach((p) => zi(u, t, p))), g.forEach((p) => zi(u, r, p)), g.forEach((p) => zi(u, Hn[a] || {}, p)), g.forEach((p) => zi(u, Ct, p)), g.forEach((p) => zi(u, ya, p));
    });
    const f = Array.from(u);
    return f.length === 0 && f.push(/* @__PURE__ */ Object.create(null)), Ff.has(e) && l.set(e, f), f;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Hn[e] || {},
      Ct.datasets[e] || {},
      {
        type: e
      },
      Ct,
      ya
    ];
  }
  resolveNamedOptions(t, e, i, r = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: l, subPrefixes: c } = vu(this._resolverCache, t, r);
    let u = l;
    if (Q1(l, e)) {
      a.$shared = !1, i = xn(i) ? i() : i;
      const f = this.createResolver(t, i, c);
      u = hi(l, i, f);
    }
    for (const f of e)
      a[f] = u[f];
    return a;
  }
  createResolver(t, e, i = [
    ""
  ], r) {
    const { resolver: a } = vu(this._resolverCache, t, i);
    return ot(e) ? hi(a, e, void 0, r) : a;
  }
}
function vu(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const r = e.join();
  let a = i.get(r);
  return a || (a = {
    resolver: Ya(t, e),
    subPrefixes: e.filter((c) => !c.toLowerCase().includes("hover"))
  }, i.set(r, a)), a;
}
const J1 = (n) => ot(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || xn(n[e]), !1);
function Q1(n, t) {
  const { isScriptable: e, isIndexable: i } = gf(n);
  for (const r of t) {
    const a = e(r), l = i(r), c = (l || a) && n[r];
    if (a && (xn(c) || J1(c)) || l && vt(c))
      return !0;
  }
  return !1;
}
var tw = "4.3.0";
const ew = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function yu(n, t) {
  return n === "top" || n === "bottom" || ew.indexOf(n) === -1 && t === "x";
}
function wu(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function Su(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), bt(e && e.onComplete, [
    n
  ], t);
}
function nw(n) {
  const t = n.chart, e = t.options.animation;
  bt(e && e.onProgress, [
    n
  ], t);
}
function Bf(n) {
  return vf() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const br = {}, Mu = (n) => {
  const t = Bf(n);
  return Object.values(br).filter((e) => e.canvas === t).pop();
};
function iw(n, t, e) {
  const i = Object.keys(n);
  for (const r of i) {
    const a = +r;
    if (a >= t) {
      const l = n[r];
      delete n[r], (e > 0 || a > t) && (n[a + e] = l);
    }
  }
}
function sw(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
function rw(n) {
  const { xScale: t, yScale: e } = n;
  if (t && e)
    return {
      left: t.left,
      right: t.right,
      top: e.top,
      bottom: e.bottom
    };
}
var fn;
let Er = (fn = class {
  static register(...t) {
    Fe.add(...t), Au();
  }
  static unregister(...t) {
    Fe.remove(...t), Au();
  }
  constructor(t, e) {
    const i = this.config = new Z1(e), r = Bf(t), a = Mu(r);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const l = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || w1(r))(), this.platform.updateConfig(i);
    const c = this.platform.acquireContext(r, l.aspectRatio), u = c && c.canvas, f = u && u.height, g = u && u.width;
    if (this.id = av(), this.ctx = c, this.canvas = u, this.width = g, this.height = f, this._options = l, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new N1(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Sv((p) => this.update(p), l.resizeDelay || 0), this._dataChanges = [], br[this.id] = this, !c || !u) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ke.listen(this, "complete", Su), Ke.listen(this, "progress", nw), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: r, _aspectRatio: a } = this;
    return lt(t) ? e && a ? a : r ? i / r : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Fe;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Xh(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Uh(this.canvas, this.ctx), this;
  }
  stop() {
    return Ke.stop(this), this;
  }
  resize(t, e) {
    Ke.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, r = this.canvas, a = i.maintainAspectRatio && this.aspectRatio, l = this.platform.getMaximumSize(r, t, e, a), c = i.devicePixelRatio || this.platform.getDevicePixelRatio(), u = this.width ? "resize" : "attach";
    this.width = l.width, this.height = l.height, this._aspectRatio = this.aspectRatio, Xh(this, c, !0) && (this.notifyPlugins("resize", {
      size: l
    }), bt(i.onResize, [
      this,
      l
    ], this), this.attached && this._doResize(u) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    gt(e, (i, r) => {
      i.id = r;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, r = Object.keys(i).reduce((l, c) => (l[c] = !1, l), {});
    let a = [];
    e && (a = a.concat(Object.keys(e).map((l) => {
      const c = e[l], u = Aa(l, c), f = u === "r", g = u === "x";
      return {
        options: c,
        dposition: f ? "chartArea" : g ? "bottom" : "left",
        dtype: f ? "radialLinear" : g ? "category" : "linear"
      };
    }))), gt(a, (l) => {
      const c = l.options, u = c.id, f = Aa(u, c), g = Z(c.type, l.dtype);
      (c.position === void 0 || yu(c.position, f) !== yu(l.dposition)) && (c.position = l.dposition), r[u] = !0;
      let p = null;
      if (u in i && i[u].type === g)
        p = i[u];
      else {
        const _ = Fe.getScale(g);
        p = new _({
          id: u,
          type: g,
          ctx: this.ctx,
          chart: this
        }), i[p.id] = p;
      }
      p.init(c, t);
    }), gt(r, (l, c) => {
      l || delete i[c];
    }), gt(i, (l) => {
      Yt.configure(this, l, l.options), Yt.addBox(this, l);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((r, a) => r.index - a.index), i > e) {
      for (let r = e; r < i; ++r)
        this._destroyDatasetMeta(r);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(wu("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((i, r) => {
      e.filter((a) => a === i._dataset).length === 0 && this._destroyDatasetMeta(r);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let i, r;
    for (this._removeUnreferencedMetasets(), i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      let l = this.getDatasetMeta(i);
      const c = a.type || this.config.type;
      if (l.type && l.type !== c && (this._destroyDatasetMeta(i), l = this.getDatasetMeta(i)), l.type = c, l.indexAxis = a.indexAxis || Ma(c, this.options), l.order = a.order || 0, l.index = i, l.label = "" + a.label, l.visible = this.isDatasetVisible(i), l.controller)
        l.controller.updateIndex(i), l.controller.linkScales();
      else {
        const u = Fe.getController(c), { datasetElementType: f, dataElementType: g } = Ct.datasets[c];
        Object.assign(u, {
          dataElementType: Fe.getElement(g),
          datasetElementType: f && Fe.getElement(f)
        }), l.controller = new u(this, i), t.push(l.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    gt(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), r = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const a = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let l = 0;
    for (let f = 0, g = this.data.datasets.length; f < g; f++) {
      const { controller: p } = this.getDatasetMeta(f), _ = !r && a.indexOf(p) === -1;
      p.buildOrUpdateElements(_), l = Math.max(+p.getMaxOverflow(), l);
    }
    l = this._minPadding = i.layout.autoPadding ? l : 0, this._updateLayout(l), r || gt(a, (f) => {
      f.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(wu("z", "_idx"));
    const { _active: c, _lastEvent: u } = this;
    u ? this._eventHandler(u, !0) : c.length && this._updateHoverStyles(c, c, !0), this.render();
  }
  _updateScales() {
    gt(this.scales, (t) => {
      Yt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!Eh(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: r, count: a } of e) {
      const l = i === "_removeElements" ? -a : a;
      iw(t, r, l);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (a) => new Set(t.filter((l) => l[0] === a).map((l, c) => c + "," + l.splice(1).join(","))), r = i(0);
    for (let a = 1; a < e; a++)
      if (!Eh(r, i(a)))
        return;
    return Array.from(r).map((a) => a.split(",")).map((a) => ({
      method: a[1],
      start: +a[2],
      count: +a[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Yt.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], gt(this.boxes, (r) => {
      i && r.position === "chartArea" || (r.configure && r.configure(), this._layers.push(...r._layers()));
    }, this), this._layers.forEach((r, a) => {
      r._idx = a;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, xn(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t), r = {
      meta: i,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 && (i.controller._update(e), r.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Ke.has(this) ? this.attached && !Ke.running(this) && Ke.start(this) : (this.draw(), Su({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: r } = this._resizeBeforeDraw;
      this._resize(i, r), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, i = [];
    let r, a;
    for (r = 0, a = e.length; r < a; ++r) {
      const l = e[r];
      (!t || l.visible) && i.push(l);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, i = t._clip, r = !i.disabled, a = rw(t) || this.chartArea, l = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 && (r && Dr(e, {
      left: i.left === !1 ? 0 : a.left - i.left,
      right: i.right === !1 ? this.width : a.right + i.right,
      top: i.top === !1 ? 0 : a.top - i.top,
      bottom: i.bottom === !1 ? this.height : a.bottom + i.bottom
    }), t.controller.draw(), r && Lr(e), l.cancelable = !1, this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(t) {
    return tn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, r) {
    const a = e1.modes[e];
    return typeof a == "function" ? a(this, t, i, r) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], i = this._metasets;
    let r = i.filter((a) => a && a._dataset === e).pop();
    return r || (r = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, i.push(r)), r;
  }
  getContext() {
    return this.$context || (this.$context = vn(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const r = i ? "show" : "hide", a = this.getDatasetMeta(t), l = a.controller._resolveAnimations(void 0, r);
    Qi(e) ? (a.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), l.update(a, {
      visible: i
    }), this.update((c) => c.datasetIndex === t ? r : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Ke.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Uh(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete br[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, i = (a, l) => {
      e.addEventListener(this, a, l), t[a] = l;
    }, r = (a, l, c) => {
      a.offsetX = l, a.offsetY = c, this._eventHandler(a);
    };
    gt(this.options.events, (a) => i(a, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, i = (u, f) => {
      e.addEventListener(this, u, f), t[u] = f;
    }, r = (u, f) => {
      t[u] && (e.removeEventListener(this, u, f), delete t[u]);
    }, a = (u, f) => {
      this.canvas && this.resize(u, f);
    };
    let l;
    const c = () => {
      r("attach", c), this.attached = !0, this.resize(), i("resize", a), i("detach", l);
    };
    l = () => {
      this.attached = !1, r("resize", a), this._stop(), this._resize(0, 0), i("attach", c);
    }, e.isAttached(this.canvas) ? c() : l();
  }
  unbindEvents() {
    gt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, gt(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, i) {
    const r = i ? "set" : "remove";
    let a, l, c, u;
    for (e === "dataset" && (a = this.getDatasetMeta(t[0].datasetIndex), a.controller["_" + r + "DatasetHoverStyle"]()), c = 0, u = t.length; c < u; ++c) {
      l = t[c];
      const f = l && this.getDatasetMeta(l.datasetIndex).controller;
      f && f[r + "HoverStyle"](l.element, l.datasetIndex, l.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], i = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.getDatasetMeta(a);
      if (!c)
        throw new Error("No dataset found at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    });
    !yr(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const r = this.options.hover, a = (u, f) => u.filter((g) => !f.some((p) => g.datasetIndex === p.datasetIndex && g.index === p.index)), l = a(e, t), c = i ? t : a(t, e);
    l.length && this.updateHoverStyle(l, r.mode, !1), c.length && r.mode && this.updateHoverStyle(c, r.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, r = (l) => (l.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, r) === !1)
      return;
    const a = this._handleEvent(t, e, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, r), (a || i.changed) && this.render(), this;
  }
  _handleEvent(t, e, i) {
    const { _active: r = [], options: a } = this, l = e, c = this._getActiveElements(t, r, i, l), u = dv(t), f = sw(t, this._lastEvent, i, u);
    i && (this._lastEvent = null, bt(a.onHover, [
      t,
      c,
      this
    ], this), u && bt(a.onClick, [
      t,
      c,
      this
    ], this));
    const g = !yr(c, r);
    return (g || e) && (this._active = c, this._updateHoverStyles(c, r, e)), this._lastEvent = f, g;
  }
  _getActiveElements(t, e, i, r) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e;
    const a = this.options.hover;
    return this.getElementsAtEventForMode(t, a.mode, a, r);
  }
}, N(fn, "defaults", Ct), N(fn, "instances", br), N(fn, "overrides", Hn), N(fn, "registry", Fe), N(fn, "version", tw), N(fn, "getChart", Mu), fn);
function Au() {
  return gt(Er.instances, (n) => n._plugins.invalidate());
}
function ow(n, t, e) {
  const { startAngle: i, pixelMargin: r, x: a, y: l, outerRadius: c, innerRadius: u } = t;
  let f = r / c;
  n.beginPath(), n.arc(a, l, c, i - f, e + f), u > r ? (f = r / u, n.arc(a, l, u, e + f, i - f, !0)) : n.arc(a, l, r, e + Pt, i - Pt), n.closePath(), n.clip();
}
function aw(n) {
  return $a(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function lw(n, t, e, i) {
  const r = aw(n.options.borderRadius), a = (e - t) / 2, l = Math.min(a, i * t / 2), c = (u) => {
    const f = (e - Math.min(a, u)) * i / 2;
    return zt(u, 0, Math.min(a, f));
  };
  return {
    outerStart: c(r.outerStart),
    outerEnd: c(r.outerEnd),
    innerStart: zt(r.innerStart, 0, l),
    innerEnd: zt(r.innerEnd, 0, l)
  };
}
function oi(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Pr(n, t, e, i, r, a) {
  const { x: l, y: c, startAngle: u, pixelMargin: f, innerRadius: g } = t, p = Math.max(t.outerRadius + i + e - f, 0), _ = g > 0 ? g + i + e + f : 0;
  let v = 0;
  const y = r - u;
  if (i) {
    const ht = g > 0 ? g - i : 0, mt = p > 0 ? p - i : 0, ft = (ht + mt) / 2, Dt = ft !== 0 ? y * ft / (ft + i) : y;
    v = (y - Dt) / 2;
  }
  const M = Math.max(1e-3, y * p - e / St) / p, S = (y - M) / 2, C = u + S + v, T = r - S - v, { outerStart: D, outerEnd: F, innerStart: L, innerEnd: W } = lw(t, _, p, T - C), z = p - D, H = p - F, Y = C + D / z, J = T - F / H, Q = _ + L, st = _ + W, Lt = C + L / Q, Ht = T - W / st;
  if (n.beginPath(), a) {
    const ht = (Y + J) / 2;
    if (n.arc(l, c, p, Y, ht), n.arc(l, c, p, ht, J), F > 0) {
      const Ft = oi(H, J, l, c);
      n.arc(Ft.x, Ft.y, F, J, T + Pt);
    }
    const mt = oi(st, T, l, c);
    if (n.lineTo(mt.x, mt.y), W > 0) {
      const Ft = oi(st, Ht, l, c);
      n.arc(Ft.x, Ft.y, W, T + Pt, Ht + Math.PI);
    }
    const ft = (T - W / _ + (C + L / _)) / 2;
    if (n.arc(l, c, _, T - W / _, ft, !0), n.arc(l, c, _, ft, C + L / _, !0), L > 0) {
      const Ft = oi(Q, Lt, l, c);
      n.arc(Ft.x, Ft.y, L, Lt + Math.PI, C - Pt);
    }
    const Dt = oi(z, C, l, c);
    if (n.lineTo(Dt.x, Dt.y), D > 0) {
      const Ft = oi(z, Y, l, c);
      n.arc(Ft.x, Ft.y, D, C - Pt, Y);
    }
  } else {
    n.moveTo(l, c);
    const ht = Math.cos(Y) * p + l, mt = Math.sin(Y) * p + c;
    n.lineTo(ht, mt);
    const ft = Math.cos(J) * p + l, Dt = Math.sin(J) * p + c;
    n.lineTo(ft, Dt);
  }
  n.closePath();
}
function cw(n, t, e, i, r) {
  const { fullCircles: a, startAngle: l, circumference: c } = t;
  let u = t.endAngle;
  if (a) {
    Pr(n, t, e, i, u, r);
    for (let f = 0; f < a; ++f)
      n.fill();
    isNaN(c) || (u = l + (c % yt || yt));
  }
  return Pr(n, t, e, i, u, r), n.fill(), u;
}
function hw(n, t, e, i, r) {
  const { fullCircles: a, startAngle: l, circumference: c, options: u } = t, { borderWidth: f, borderJoinStyle: g, borderDash: p, borderDashOffset: _ } = u, v = u.borderAlign === "inner";
  if (!f)
    return;
  n.setLineDash(p || []), n.lineDashOffset = _, v ? (n.lineWidth = f * 2, n.lineJoin = g || "round") : (n.lineWidth = f, n.lineJoin = g || "bevel");
  let y = t.endAngle;
  if (a) {
    Pr(n, t, e, i, y, r);
    for (let M = 0; M < a; ++M)
      n.stroke();
    isNaN(c) || (y = l + (c % yt || yt));
  }
  v && ow(n, t, y), a || (Pr(n, t, e, i, y, r), n.stroke());
}
class Ui extends Te {
  constructor(e) {
    super();
    N(this, "circumference");
    N(this, "endAngle");
    N(this, "fullCircles");
    N(this, "innerRadius");
    N(this, "outerRadius");
    N(this, "pixelMargin");
    N(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, i, r) {
    const a = this.getProps([
      "x",
      "y"
    ], r), { angle: l, distance: c } = sf(a, {
      x: e,
      y: i
    }), { startAngle: u, endAngle: f, innerRadius: g, outerRadius: p, circumference: _ } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], r), v = (this.options.spacing + this.options.borderWidth) / 2, M = Z(_, f - u) >= yt || ts(l, u, f), S = Je(c, g + v, p + v);
    return M && S;
  }
  getCenterPoint(e) {
    const { x: i, y: r, startAngle: a, endAngle: l, innerRadius: c, outerRadius: u } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: f, spacing: g } = this.options, p = (a + l) / 2, _ = (c + u + g + f) / 2;
    return {
      x: i + Math.cos(p) * _,
      y: r + Math.sin(p) * _
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: i, circumference: r } = this, a = (i.offset || 0) / 4, l = (i.spacing || 0) / 2, c = i.circular;
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = r > yt ? Math.floor(r / yt) : 0, r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const u = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(u) * a, Math.sin(u) * a);
    const f = 1 - Math.sin(Math.min(St, r || 0)), g = a * f;
    e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, cw(e, this, g, l, c), hw(e, this, g, l, c), e.restore();
  }
}
N(Ui, "id", "arc"), N(Ui, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), N(Ui, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), N(Ui, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
function zf(n, t, e = t) {
  n.lineCap = Z(e.borderCapStyle, t.borderCapStyle), n.setLineDash(Z(e.borderDash, t.borderDash)), n.lineDashOffset = Z(e.borderDashOffset, t.borderDashOffset), n.lineJoin = Z(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = Z(e.borderWidth, t.borderWidth), n.strokeStyle = Z(e.borderColor, t.borderColor);
}
function uw(n, t, e) {
  n.lineTo(e.x, e.y);
}
function fw(n) {
  return n.stepped ? Iv : n.tension || n.cubicInterpolationMode === "monotone" ? Fv : uw;
}
function Wf(n, t, e = {}) {
  const i = n.length, { start: r = 0, end: a = i - 1 } = e, { start: l, end: c } = t, u = Math.max(r, l), f = Math.min(a, c), g = r < l && a < l || r > c && a > c;
  return {
    count: i,
    start: u,
    loop: t.loop,
    ilen: f < u && !g ? i + f - u : f - u
  };
}
function dw(n, t, e, i) {
  const { points: r, options: a } = t, { count: l, start: c, loop: u, ilen: f } = Wf(r, e, i), g = fw(a);
  let { move: p = !0, reverse: _ } = i || {}, v, y, M;
  for (v = 0; v <= f; ++v)
    y = r[(c + (_ ? f - v : v)) % l], !y.skip && (p ? (n.moveTo(y.x, y.y), p = !1) : g(n, M, y, _, a.stepped), M = y);
  return u && (y = r[(c + (_ ? f : 0)) % l], g(n, M, y, _, a.stepped)), !!u;
}
function gw(n, t, e, i) {
  const r = t.points, { count: a, start: l, ilen: c } = Wf(r, e, i), { move: u = !0, reverse: f } = i || {};
  let g = 0, p = 0, _, v, y, M, S, C;
  const T = (F) => (l + (f ? c - F : F)) % a, D = () => {
    M !== S && (n.lineTo(g, S), n.lineTo(g, M), n.lineTo(g, C));
  };
  for (u && (v = r[T(0)], n.moveTo(v.x, v.y)), _ = 0; _ <= c; ++_) {
    if (v = r[T(_)], v.skip)
      continue;
    const F = v.x, L = v.y, W = F | 0;
    W === y ? (L < M ? M = L : L > S && (S = L), g = (p * g + F) / ++p) : (D(), n.lineTo(F, L), y = W, p = 0, M = S = L), C = L;
  }
  D();
}
function Oa(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? gw : dw;
}
function pw(n) {
  return n.stepped ? gy : n.tension || n.cubicInterpolationMode === "monotone" ? py : Bn;
}
function mw(n, t, e, i) {
  let r = t._path;
  r || (r = t._path = new Path2D(), t.path(r, e, i) && r.closePath()), zf(n, t.options), n.stroke(r);
}
function _w(n, t, e, i) {
  const { segments: r, options: a } = t, l = Oa(t);
  for (const c of r)
    zf(n, a, c.style), n.beginPath(), l(n, t, c, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const bw = typeof Path2D == "function";
function xw(n, t, e, i) {
  bw && !t.options.segment ? mw(n, t, e, i) : _w(n, t, e, i);
}
class pn extends Te {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      oy(this._points, i, t, r, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = yy(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options, r = t[e], a = this.points, l = Af(this, {
      property: e,
      start: r,
      end: r
    });
    if (!l.length)
      return;
    const c = [], u = pw(i);
    let f, g;
    for (f = 0, g = l.length; f < g; ++f) {
      const { start: p, end: _ } = l[f], v = a[p], y = a[_];
      if (v === y) {
        c.push(v);
        continue;
      }
      const M = Math.abs((r - v[e]) / (y[e] - v[e])), S = u(v, y, M, i.stepped);
      S[e] = t[e], c.push(S);
    }
    return c.length === 1 ? c[0] : c;
  }
  pathSegment(t, e, i) {
    return Oa(this)(t, this, e, i);
  }
  path(t, e, i) {
    const r = this.segments, a = Oa(this);
    let l = this._loop;
    e = e || 0, i = i || this.points.length - e;
    for (const c of r)
      l &= a(t, this, c, {
        start: e,
        end: e + i - 1
      });
    return !!l;
  }
  draw(t, e, i, r) {
    const a = this.options || {};
    (this.points || []).length && a.borderWidth && (t.save(), xw(t, this, i, r), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
N(pn, "id", "line"), N(pn, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), N(pn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), N(pn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Ou(n, t, e, i) {
  const r = n.options, { [e]: a } = n.getProps([
    e
  ], i);
  return Math.abs(t - a) < r.radius + r.hitRadius;
}
class xr extends Te {
  constructor(e) {
    super();
    N(this, "parsed");
    N(this, "skip");
    N(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, i, r) {
    const a = this.options, { x: l, y: c } = this.getProps([
      "x",
      "y"
    ], r);
    return Math.pow(e - l, 2) + Math.pow(i - c, 2) < Math.pow(a.hitRadius + a.radius, 2);
  }
  inXRange(e, i) {
    return Ou(this, e, "x", i);
  }
  inYRange(e, i) {
    return Ou(this, e, "y", i);
  }
  getCenterPoint(e) {
    const { x: i, y: r } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: i,
      y: r
    };
  }
  size(e) {
    e = e || this.options || {};
    let i = e.radius || 0;
    i = Math.max(i, i && e.hoverRadius || 0);
    const r = i && e.borderWidth || 0;
    return (i + r) * 2;
  }
  draw(e, i) {
    const r = this.options;
    this.skip || r.radius < 0.1 || !tn(this, i, this.size(r) / 2) || (e.strokeStyle = r.borderColor, e.lineWidth = r.borderWidth, e.fillStyle = r.backgroundColor, wa(e, r, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
N(xr, "id", "point"), /**
* @type {any}
*/
N(xr, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
N(xr, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Nf(n, t) {
  const { x: e, y: i, base: r, width: a, height: l } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let c, u, f, g, p;
  return n.horizontal ? (p = l / 2, c = Math.min(e, r), u = Math.max(e, r), f = i - p, g = i + p) : (p = a / 2, c = e - p, u = e + p, f = Math.min(i, r), g = Math.max(i, r)), {
    left: c,
    top: f,
    right: u,
    bottom: g
  };
}
function mn(n, t, e, i) {
  return n ? 0 : zt(t, e, i);
}
function vw(n, t, e) {
  const i = n.options.borderWidth, r = n.borderSkipped, a = df(i);
  return {
    t: mn(r.top, a.top, 0, e),
    r: mn(r.right, a.right, 0, t),
    b: mn(r.bottom, a.bottom, 0, e),
    l: mn(r.left, a.left, 0, t)
  };
}
function yw(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), r = n.options.borderRadius, a = Wn(r), l = Math.min(t, e), c = n.borderSkipped, u = i || ot(r);
  return {
    topLeft: mn(!u || c.top || c.left, a.topLeft, 0, l),
    topRight: mn(!u || c.top || c.right, a.topRight, 0, l),
    bottomLeft: mn(!u || c.bottom || c.left, a.bottomLeft, 0, l),
    bottomRight: mn(!u || c.bottom || c.right, a.bottomRight, 0, l)
  };
}
function ww(n) {
  const t = Nf(n), e = t.right - t.left, i = t.bottom - t.top, r = vw(n, e / 2, i / 2), a = yw(n, e / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: i,
      radius: a
    },
    inner: {
      x: t.left + r.l,
      y: t.top + r.t,
      w: e - r.l - r.r,
      h: i - r.t - r.b,
      radius: {
        topLeft: Math.max(0, a.topLeft - Math.max(r.t, r.l)),
        topRight: Math.max(0, a.topRight - Math.max(r.t, r.r)),
        bottomLeft: Math.max(0, a.bottomLeft - Math.max(r.b, r.l)),
        bottomRight: Math.max(0, a.bottomRight - Math.max(r.b, r.r))
      }
    }
  };
}
function da(n, t, e, i) {
  const r = t === null, a = e === null, c = n && !(r && a) && Nf(n, i);
  return c && (r || Je(t, c.left, c.right)) && (a || Je(e, c.top, c.bottom));
}
function Sw(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Mw(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function ga(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, r = n.y !== e.y ? -t : 0, a = (n.x + n.w !== e.x + e.w ? t : 0) - i, l = (n.y + n.h !== e.y + e.h ? t : 0) - r;
  return {
    x: n.x + i,
    y: n.y + r,
    w: n.w + a,
    h: n.h + l,
    radius: n.radius
  };
}
class vr extends Te {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: r } } = this, { inner: a, outer: l } = ww(this), c = Sw(l.radius) ? es : Mw;
    t.save(), (l.w !== a.w || l.h !== a.h) && (t.beginPath(), c(t, ga(l, e, a)), t.clip(), c(t, ga(a, -e, l)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), c(t, ga(a, e)), t.fillStyle = r, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return da(this, t, e, i);
  }
  inXRange(t, e) {
    return da(this, t, null, e);
  }
  inYRange(t, e) {
    return da(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: r, horizontal: a } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: a ? (e + r) / 2 : e,
      y: a ? i : (i + r) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
N(vr, "id", "bar"), N(vr, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), N(vr, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var Aw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: Ui,
  BarElement: vr,
  LineElement: pn,
  PointElement: xr
});
const Pa = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Pu = /* @__PURE__ */ Pa.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Hf(n) {
  return Pa[n % Pa.length];
}
function Vf(n) {
  return Pu[n % Pu.length];
}
function Ow(n, t) {
  return n.borderColor = Hf(t), n.backgroundColor = Vf(t), ++t;
}
function Pw(n, t) {
  return n.backgroundColor = n.data.map(() => Hf(t++)), t;
}
function Cw(n, t) {
  return n.backgroundColor = n.data.map(() => Vf(t++)), t;
}
function kw(n) {
  let t = 0;
  return (e, i) => {
    const r = n.getDatasetMeta(i).controller;
    r instanceof zn ? t = Pw(e, t) : r instanceof qi ? t = Cw(e, t) : r && (t = Ow(e, t));
  };
}
function Cu(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function Tw(n) {
  return n && (n.borderColor || n.backgroundColor);
}
var Dw = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: r } = n.config, { elements: a } = r;
    if (!e.forceOverride && (Cu(i) || Tw(r) || a && Cu(a)))
      return;
    const l = kw(n);
    i.forEach(l);
  }
};
function Lw(n, t, e, i, r) {
  const a = r.samples || i;
  if (a >= e)
    return n.slice(t, t + e);
  const l = [], c = (e - 2) / (a - 2);
  let u = 0;
  const f = t + e - 1;
  let g = t, p, _, v, y, M;
  for (l[u++] = n[g], p = 0; p < a - 2; p++) {
    let S = 0, C = 0, T;
    const D = Math.floor((p + 1) * c) + 1 + t, F = Math.min(Math.floor((p + 2) * c) + 1, e) + t, L = F - D;
    for (T = D; T < F; T++)
      S += n[T].x, C += n[T].y;
    S /= L, C /= L;
    const W = Math.floor(p * c) + 1 + t, z = Math.min(Math.floor((p + 1) * c) + 1, e) + t, { x: H, y: Y } = n[g];
    for (v = y = -1, T = W; T < z; T++)
      y = 0.5 * Math.abs((H - S) * (n[T].y - Y) - (H - n[T].x) * (C - Y)), y > v && (v = y, _ = n[T], M = T);
    l[u++] = _, g = M;
  }
  return l[u++] = n[f], l;
}
function Rw(n, t, e, i) {
  let r = 0, a = 0, l, c, u, f, g, p, _, v, y, M;
  const S = [], C = t + e - 1, T = n[t].x, F = n[C].x - T;
  for (l = t; l < t + e; ++l) {
    c = n[l], u = (c.x - T) / F * i, f = c.y;
    const L = u | 0;
    if (L === g)
      f < y ? (y = f, p = l) : f > M && (M = f, _ = l), r = (a * r + c.x) / ++a;
    else {
      const W = l - 1;
      if (!lt(p) && !lt(_)) {
        const z = Math.min(p, _), H = Math.max(p, _);
        z !== v && z !== W && S.push({
          ...n[z],
          x: r
        }), H !== v && H !== W && S.push({
          ...n[H],
          x: r
        });
      }
      l > 0 && W !== v && S.push(n[W]), S.push(c), g = L, a = 0, y = M = f, p = _ = v = l;
    }
  }
  return S;
}
function Uf(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated, delete n._data, Object.defineProperty(n, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  }
}
function ku(n) {
  n.data.datasets.forEach((t) => {
    Uf(t);
  });
}
function Ew(n, t) {
  const e = t.length;
  let i = 0, r;
  const { iScale: a } = n, { min: l, max: c, minDefined: u, maxDefined: f } = a.getUserBounds();
  return u && (i = zt(Qe(t, a.axis, l).lo, 0, e - 1)), f ? r = zt(Qe(t, a.axis, c).hi + 1, i, e) - i : r = e - i, {
    start: i,
    count: r
  };
}
var Iw = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      ku(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((r, a) => {
      const { _data: l, indexAxis: c } = r, u = n.getDatasetMeta(a), f = l || r.data;
      if (Hi([
        c,
        n.options.indexAxis
      ]) === "y" || !u.controller.supportsDecimation)
        return;
      const g = n.scales[u.xAxisID];
      if (g.type !== "linear" && g.type !== "time" || n.options.parsing)
        return;
      let { start: p, count: _ } = Ew(u, f);
      const v = e.threshold || 4 * i;
      if (_ <= v) {
        Uf(r);
        return;
      }
      lt(l) && (r._data = f, delete r.data, Object.defineProperty(r, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(M) {
          this._data = M;
        }
      }));
      let y;
      switch (e.algorithm) {
        case "lttb":
          y = Lw(f, p, _, i, e);
          break;
        case "min-max":
          y = Rw(f, p, _, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      r._decimated = y;
    });
  },
  destroy(n) {
    ku(n);
  }
};
function Fw(n, t, e) {
  const i = n.segments, r = n.points, a = t.points, l = [];
  for (const c of i) {
    let { start: u, end: f } = c;
    f = qa(u, f, r);
    const g = Ca(e, r[u], r[f], c.loop);
    if (!t.segments) {
      l.push({
        source: c,
        target: g,
        start: r[u],
        end: r[f]
      });
      continue;
    }
    const p = Af(t, g);
    for (const _ of p) {
      const v = Ca(e, a[_.start], a[_.end], _.loop), y = Mf(c, r, v);
      for (const M of y)
        l.push({
          source: M,
          target: _,
          start: {
            [e]: Tu(g, v, "start", Math.max)
          },
          end: {
            [e]: Tu(g, v, "end", Math.min)
          }
        });
    }
  }
  return l;
}
function Ca(n, t, e, i) {
  if (i)
    return;
  let r = t[n], a = e[n];
  return n === "angle" && (r = he(r), a = he(a)), {
    property: n,
    start: r,
    end: a
  };
}
function Bw(n, t) {
  const { x: e = null, y: i = null } = n || {}, r = t.points, a = [];
  return t.segments.forEach(({ start: l, end: c }) => {
    c = qa(l, c, r);
    const u = r[l], f = r[c];
    i !== null ? (a.push({
      x: u.x,
      y: i
    }), a.push({
      x: f.x,
      y: i
    })) : e !== null && (a.push({
      x: e,
      y: u.y
    }), a.push({
      x: e,
      y: f.y
    }));
  }), a;
}
function qa(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function Tu(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function $f(n, t) {
  let e = [], i = !1;
  return vt(n) ? (i = !0, e = n) : e = Bw(n, t), e.length ? new pn({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Du(n) {
  return n && n.fill !== !1;
}
function zw(n, t, e) {
  let r = n[t].fill;
  const a = [
    t
  ];
  let l;
  if (!e)
    return r;
  for (; r !== !1 && a.indexOf(r) === -1; ) {
    if (!Ot(r))
      return r;
    if (l = n[r], !l)
      return !1;
    if (l.visible)
      return r;
    a.push(r), r = l.fill;
  }
  return !1;
}
function Ww(n, t, e) {
  const i = Uw(n);
  if (ot(i))
    return isNaN(i.value) ? !1 : i;
  let r = parseFloat(i);
  return Ot(r) && Math.floor(r) === r ? Nw(i[0], t, r, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Nw(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Hw(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : ot(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Vw(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : ot(n) ? i = n.value : i = t.getBaseValue(), i;
}
function Uw(n) {
  const t = n.options, e = t.fill;
  let i = Z(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function $w(n) {
  const { scale: t, index: e, line: i } = n, r = [], a = i.segments, l = i.points, c = Yw(t, e);
  c.push($f({
    x: null,
    y: t.bottom
  }, i));
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    for (let g = f.start; g <= f.end; g++)
      Xw(r, l[g], c);
  }
  return new pn({
    points: r,
    options: {}
  });
}
function Yw(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    if (a.index === t)
      break;
    a.hidden || e.unshift(a.dataset);
  }
  return e;
}
function Xw(n, t, e) {
  const i = [];
  for (let r = 0; r < e.length; r++) {
    const a = e[r], { first: l, last: c, point: u } = jw(a, t, "x");
    if (!(!u || l && c)) {
      if (l)
        i.unshift(u);
      else if (n.push(u), !c)
        break;
    }
  }
  n.push(...i);
}
function jw(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const r = i[e], a = n.segments, l = n.points;
  let c = !1, u = !1;
  for (let f = 0; f < a.length; f++) {
    const g = a[f], p = l[g.start][e], _ = l[g.end][e];
    if (Je(r, p, _)) {
      c = r === p, u = r === _;
      break;
    }
  }
  return {
    first: c,
    last: u,
    point: i
  };
}
class Yf {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: r, y: a, radius: l } = this;
    return e = e || {
      start: 0,
      end: yt
    }, t.arc(r, a, l, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: r } = this, a = t.angle;
    return {
      x: e + Math.cos(a) * r,
      y: i + Math.sin(a) * r,
      angle: a
    };
  }
}
function Gw(n) {
  const { chart: t, fill: e, line: i } = n;
  if (Ot(e))
    return Kw(t, e);
  if (e === "stack")
    return $w(n);
  if (e === "shape")
    return !0;
  const r = qw(n);
  return r instanceof Yf ? r : $f(r, i);
}
function Kw(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function qw(n) {
  return (n.scale || {}).getPointPositionForValue ? Jw(n) : Zw(n);
}
function Zw(n) {
  const { scale: t = {}, fill: e } = n, i = Hw(e, t);
  if (Ot(i)) {
    const r = t.isHorizontal();
    return {
      x: r ? i : null,
      y: r ? null : i
    };
  }
  return null;
}
function Jw(n) {
  const { scale: t, fill: e } = n, i = t.options, r = t.getLabels().length, a = i.reverse ? t.max : t.min, l = Vw(e, t, a), c = [];
  if (i.grid.circular) {
    const u = t.getPointPositionForValue(0, a);
    return new Yf({
      x: u.x,
      y: u.y,
      radius: t.getDistanceFromCenterForValue(l)
    });
  }
  for (let u = 0; u < r; ++u)
    c.push(t.getPointPositionForValue(u, l));
  return c;
}
function pa(n, t, e) {
  const i = Gw(t), { line: r, scale: a, axis: l } = t, c = r.options, u = c.fill, f = c.backgroundColor, { above: g = f, below: p = f } = u || {};
  i && r.points.length && (Dr(n, e), Qw(n, {
    line: r,
    target: i,
    above: g,
    below: p,
    area: e,
    scale: a,
    axis: l
  }), Lr(n));
}
function Qw(n, t) {
  const { line: e, target: i, above: r, below: a, area: l, scale: c } = t, u = e._loop ? "angle" : t.axis;
  n.save(), u === "x" && a !== r && (Lu(n, i, l.top), Ru(n, {
    line: e,
    target: i,
    color: r,
    scale: c,
    property: u
  }), n.restore(), n.save(), Lu(n, i, l.bottom)), Ru(n, {
    line: e,
    target: i,
    color: a,
    scale: c,
    property: u
  }), n.restore();
}
function Lu(n, t, e) {
  const { segments: i, points: r } = t;
  let a = !0, l = !1;
  n.beginPath();
  for (const c of i) {
    const { start: u, end: f } = c, g = r[u], p = r[qa(u, f, r)];
    a ? (n.moveTo(g.x, g.y), a = !1) : (n.lineTo(g.x, e), n.lineTo(g.x, g.y)), l = !!t.pathSegment(n, c, {
      move: l
    }), l ? n.closePath() : n.lineTo(p.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Ru(n, t) {
  const { line: e, target: i, property: r, color: a, scale: l } = t, c = Fw(e, i, r);
  for (const { source: u, target: f, start: g, end: p } of c) {
    const { style: { backgroundColor: _ = a } = {} } = u, v = i !== !0;
    n.save(), n.fillStyle = _, tS(n, l, v && Ca(r, g, p)), n.beginPath();
    const y = !!e.pathSegment(n, u);
    let M;
    if (v) {
      y ? n.closePath() : Eu(n, i, p, r);
      const S = !!i.pathSegment(n, f, {
        move: y,
        reverse: !0
      });
      M = y && S, M || Eu(n, i, g, r);
    }
    n.closePath(), n.fill(M ? "evenodd" : "nonzero"), n.restore();
  }
}
function tS(n, t, e) {
  const { top: i, bottom: r } = t.chart.chartArea, { property: a, start: l, end: c } = e || {};
  a === "x" && (n.beginPath(), n.rect(l, i, c - l, r - i), n.clip());
}
function Eu(n, t, e, i) {
  const r = t.interpolate(e, i);
  r && n.lineTo(r.x, r.y);
}
var eS = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, r = [];
    let a, l, c, u;
    for (l = 0; l < i; ++l)
      a = n.getDatasetMeta(l), c = a.dataset, u = null, c && c.options && c instanceof pn && (u = {
        visible: n.isDatasetVisible(l),
        index: l,
        fill: Ww(c, l, i),
        chart: n,
        axis: a.controller.options.indexAxis,
        scale: a.vScale,
        line: c
      }), a.$filler = u, r.push(u);
    for (l = 0; l < i; ++l)
      u = r[l], !(!u || u.fill === !1) && (u.fill = zw(r, l, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", r = n.getSortedVisibleDatasetMetas(), a = n.chartArea;
    for (let l = r.length - 1; l >= 0; --l) {
      const c = r[l].$filler;
      c && (c.line.updateControlPoints(a, c.axis), i && c.fill && pa(n.ctx, c, a));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let r = i.length - 1; r >= 0; --r) {
      const a = i[r].$filler;
      Du(a) && pa(n.ctx, a, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !Du(i) || e.drawTime !== "beforeDatasetDraw" || pa(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Iu = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, nS = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class Fu extends Te {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, i) {
    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = bt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))), t.sort && (e = e.sort((i, r) => t.sort(i, r, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, r = It(i.font), a = r.size, l = this._computeTitleHeight(), { boxWidth: c, itemHeight: u } = Iu(i, a);
    let f, g;
    e.font = r.string, this.isHorizontal() ? (f = this.maxWidth, g = this._fitRows(l, a, c, u) + 10) : (g = this.maxHeight, f = this._fitCols(l, r, c, u) + 10), this.width = Math.min(f, t.maxWidth || this.maxWidth), this.height = Math.min(g, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, r) {
    const { ctx: a, maxWidth: l, options: { labels: { padding: c } } } = this, u = this.legendHitBoxes = [], f = this.lineWidths = [
      0
    ], g = r + c;
    let p = t;
    a.textAlign = "left", a.textBaseline = "middle";
    let _ = -1, v = -g;
    return this.legendItems.forEach((y, M) => {
      const S = i + e / 2 + a.measureText(y.text).width;
      (M === 0 || f[f.length - 1] + S + 2 * c > l) && (p += g, f[f.length - (M > 0 ? 0 : 1)] = 0, v += g, _++), u[M] = {
        left: 0,
        top: v,
        row: _,
        width: S,
        height: r
      }, f[f.length - 1] += S + c;
    }), p;
  }
  _fitCols(t, e, i, r) {
    const { ctx: a, maxHeight: l, options: { labels: { padding: c } } } = this, u = this.legendHitBoxes = [], f = this.columnSizes = [], g = l - t;
    let p = c, _ = 0, v = 0, y = 0, M = 0;
    return this.legendItems.forEach((S, C) => {
      const { itemWidth: T, itemHeight: D } = iS(i, e, a, S, r);
      C > 0 && v + D + 2 * c > g && (p += _ + c, f.push({
        width: _,
        height: v
      }), y += _ + c, M++, _ = v = 0), u[C] = {
        left: y,
        top: v,
        col: M,
        width: T,
        height: D
      }, _ = Math.max(_, T), v += D + c;
    }), p += _, f.push({
      width: _,
      height: v
    }), p;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: r }, rtl: a } } = this, l = ai(a, this.left, this.width);
    if (this.isHorizontal()) {
      let c = 0, u = $t(i, this.left + r, this.right - this.lineWidths[c]);
      for (const f of e)
        c !== f.row && (c = f.row, u = $t(i, this.left + r, this.right - this.lineWidths[c])), f.top += this.top + t + r, f.left = l.leftForLtr(l.x(u), f.width), u += f.width + r;
    } else {
      let c = 0, u = $t(i, this.top + t + r, this.bottom - this.columnSizes[c].height);
      for (const f of e)
        f.col !== c && (c = f.col, u = $t(i, this.top + t + r, this.bottom - this.columnSizes[c].height)), f.top = u, f.left += this.left + r, f.left = l.leftForLtr(l.x(f.left), f.width), u += f.height + r;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Dr(t, this), this._draw(), Lr(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: r } = this, { align: a, labels: l } = t, c = Ct.color, u = ai(t.rtl, this.left, this.width), f = It(l.font), { padding: g } = l, p = f.size, _ = p / 2;
    let v;
    this.drawTitle(), r.textAlign = u.textAlign("left"), r.textBaseline = "middle", r.lineWidth = 0.5, r.font = f.string;
    const { boxWidth: y, boxHeight: M, itemHeight: S } = Iu(l, p), C = function(W, z, H) {
      if (isNaN(y) || y <= 0 || isNaN(M) || M < 0)
        return;
      r.save();
      const Y = Z(H.lineWidth, 1);
      if (r.fillStyle = Z(H.fillStyle, c), r.lineCap = Z(H.lineCap, "butt"), r.lineDashOffset = Z(H.lineDashOffset, 0), r.lineJoin = Z(H.lineJoin, "miter"), r.lineWidth = Y, r.strokeStyle = Z(H.strokeStyle, c), r.setLineDash(Z(H.lineDash, [])), l.usePointStyle) {
        const J = {
          radius: M * Math.SQRT2 / 2,
          pointStyle: H.pointStyle,
          rotation: H.rotation,
          borderWidth: Y
        }, Q = u.xPlus(W, y / 2), st = z + _;
        ff(r, J, Q, st, l.pointStyleWidth && y);
      } else {
        const J = z + Math.max((p - M) / 2, 0), Q = u.leftForLtr(W, y), st = Wn(H.borderRadius);
        r.beginPath(), Object.values(st).some((Lt) => Lt !== 0) ? es(r, {
          x: Q,
          y: J,
          w: y,
          h: M,
          radius: st
        }) : r.rect(Q, J, y, M), r.fill(), Y !== 0 && r.stroke();
      }
      r.restore();
    }, T = function(W, z, H) {
      Vn(r, H.text, W, z + S / 2, f, {
        strikethrough: H.hidden,
        textAlign: u.textAlign(H.textAlign)
      });
    }, D = this.isHorizontal(), F = this._computeTitleHeight();
    D ? v = {
      x: $t(a, this.left + g, this.right - i[0]),
      y: this.top + g + F,
      line: 0
    } : v = {
      x: this.left + g,
      y: $t(a, this.top + F + g, this.bottom - e[0].height),
      line: 0
    }, yf(this.ctx, t.textDirection);
    const L = S + g;
    this.legendItems.forEach((W, z) => {
      r.strokeStyle = W.fontColor, r.fillStyle = W.fontColor;
      const H = r.measureText(W.text).width, Y = u.textAlign(W.textAlign || (W.textAlign = l.textAlign)), J = y + _ + H;
      let Q = v.x, st = v.y;
      u.setWidth(this.width), D ? z > 0 && Q + J + g > this.right && (st = v.y += L, v.line++, Q = v.x = $t(a, this.left + g, this.right - i[v.line])) : z > 0 && st + L > this.bottom && (Q = v.x = Q + e[v.line].width + g, v.line++, st = v.y = $t(a, this.top + F + g, this.bottom - e[v.line].height));
      const Lt = u.x(Q);
      if (C(Lt, st, W), Q = Mv(Y, Q + y + _, D ? Q + J : this.right, t.rtl), T(u.x(Q), st, W), D)
        v.x += J + g;
      else if (typeof W.text != "string") {
        const Ht = f.lineHeight;
        v.y += Xf(W, Ht);
      } else
        v.y += L;
    }), wf(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = It(e.font), r = Xt(e.padding);
    if (!e.display)
      return;
    const a = ai(t.rtl, this.left, this.width), l = this.ctx, c = e.position, u = i.size / 2, f = r.top + u;
    let g, p = this.left, _ = this.width;
    if (this.isHorizontal())
      _ = Math.max(...this.lineWidths), g = this.top + f, p = $t(t.align, p, this.right - _);
    else {
      const y = this.columnSizes.reduce((M, S) => Math.max(M, S.height), 0);
      g = f + $t(t.align, this.top, this.bottom - y - t.labels.padding - this._computeTitleHeight());
    }
    const v = $t(c, p, p + _);
    l.textAlign = a.textAlign(Va(c)), l.textBaseline = "middle", l.strokeStyle = e.color, l.fillStyle = e.color, l.font = i.string, Vn(l, e.text, v, g, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = It(t.font), i = Xt(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, r, a;
    if (Je(t, this.left, this.right) && Je(e, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
        if (r = a[i], Je(t, r.left, r.left + r.width) && Je(e, r.top, r.top + r.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!oS(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const r = this._hoveredItem, a = nS(r, i);
      r && !a && bt(e.onLeave, [
        t,
        r,
        this
      ], this), this._hoveredItem = i, i && !a && bt(e.onHover, [
        t,
        i,
        this
      ], this);
    } else
      i && bt(e.onClick, [
        t,
        i,
        this
      ], this);
  }
}
function iS(n, t, e, i, r) {
  const a = sS(i, n, t, e), l = rS(r, i, t.lineHeight);
  return {
    itemWidth: a,
    itemHeight: l
  };
}
function sS(n, t, e, i) {
  let r = n.text;
  return r && typeof r != "string" && (r = r.reduce((a, l) => a.length > l.length ? a : l)), t + e.size / 2 + i.measureText(r).width;
}
function rS(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = Xf(t, e)), i;
}
function Xf(n, t) {
  const e = n.text ? n.text.length + 0.5 : 0;
  return t * e;
}
function oS(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var aS = {
  id: "legend",
  _element: Fu,
  start(n, t, e) {
    const i = n.legend = new Fu({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Yt.configure(n, i, e), Yt.addBox(n, i);
  },
  stop(n) {
    Yt.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    Yt.configure(n, i, e), i.options = e;
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex, r = e.chart;
      r.isDatasetVisible(i) ? (r.hide(i), t.hidden = !0) : (r.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets, { labels: { usePointStyle: e, pointStyle: i, textAlign: r, color: a, useBorderRadius: l, borderRadius: c } } = n.legend.options;
        return n._getSortedDatasetMetas().map((u) => {
          const f = u.controller.getStyle(e ? 0 : void 0), g = Xt(f.borderWidth);
          return {
            text: t[u.index].label,
            fillStyle: f.backgroundColor,
            fontColor: a,
            hidden: !u.visible,
            lineCap: f.borderCapStyle,
            lineDash: f.borderDash,
            lineDashOffset: f.borderDashOffset,
            lineJoin: f.borderJoinStyle,
            lineWidth: (g.width + g.height) / 4,
            strokeStyle: f.borderColor,
            pointStyle: i || f.pointStyle,
            rotation: f.rotation,
            textAlign: r || f.textAlign,
            borderRadius: l && (c || f.borderRadius),
            datasetIndex: u.index
          };
        }, this);
      }
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(n)
    }
  }
};
class Za extends Te {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const r = vt(i.text) ? i.text.length : 1;
    this._padding = Xt(i.padding);
    const a = r * It(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = a : this.width = a;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: r, right: a, options: l } = this, c = l.align;
    let u = 0, f, g, p;
    return this.isHorizontal() ? (g = $t(c, i, a), p = e + t, f = a - i) : (l.position === "left" ? (g = i + t, p = $t(c, r, e), u = St * -0.5) : (g = a - t, p = $t(c, e, r), u = St * 0.5), f = r - e), {
      titleX: g,
      titleY: p,
      maxWidth: f,
      rotation: u
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = It(e.font), a = i.lineHeight / 2 + this._padding.top, { titleX: l, titleY: c, maxWidth: u, rotation: f } = this._drawArgs(a);
    Vn(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: u,
      rotation: f,
      textAlign: Va(e.align),
      textBaseline: "middle",
      translation: [
        l,
        c
      ]
    });
  }
}
function lS(n, t) {
  const e = new Za({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Yt.configure(n, e, t), Yt.addBox(n, e), n.titleBlock = e;
}
var cS = {
  id: "title",
  _element: Za,
  start(n, t, e) {
    lS(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Yt.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    Yt.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const cr = /* @__PURE__ */ new WeakMap();
var hS = {
  id: "subtitle",
  start(n, t, e) {
    const i = new Za({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Yt.configure(n, i, e), Yt.addBox(n, i), cr.set(n, i);
  },
  stop(n) {
    Yt.removeBox(n, cr.get(n)), cr.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = cr.get(n);
    Yt.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const $i = {
  average(n) {
    if (!n.length)
      return !1;
    let t, e, i = 0, r = 0, a = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const l = n[t].element;
      if (l && l.hasValue()) {
        const c = l.tooltipPosition();
        i += c.x, r += c.y, ++a;
      }
    }
    return {
      x: i / a,
      y: r / a
    };
  },
  nearest(n, t) {
    if (!n.length)
      return !1;
    let e = t.x, i = t.y, r = Number.POSITIVE_INFINITY, a, l, c;
    for (a = 0, l = n.length; a < l; ++a) {
      const u = n[a].element;
      if (u && u.hasValue()) {
        const f = u.getCenterPoint(), g = va(t, f);
        g < r && (r = g, c = u);
      }
    }
    if (c) {
      const u = c.tooltipPosition();
      e = u.x, i = u.y;
    }
    return {
      x: e,
      y: i
    };
  }
};
function Ie(n, t) {
  return t && (vt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function qe(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function uS(n, t) {
  const { element: e, datasetIndex: i, index: r } = t, a = n.getDatasetMeta(i).controller, { label: l, value: c } = a.getLabelAndValue(r);
  return {
    chart: n,
    label: l,
    parsed: a.getParsed(r),
    raw: n.data.datasets[i].data[r],
    formattedValue: c,
    dataset: a.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: e
  };
}
function Bu(n, t) {
  const e = n.chart.ctx, { body: i, footer: r, title: a } = n, { boxWidth: l, boxHeight: c } = t, u = It(t.bodyFont), f = It(t.titleFont), g = It(t.footerFont), p = a.length, _ = r.length, v = i.length, y = Xt(t.padding);
  let M = y.height, S = 0, C = i.reduce((F, L) => F + L.before.length + L.lines.length + L.after.length, 0);
  if (C += n.beforeBody.length + n.afterBody.length, p && (M += p * f.lineHeight + (p - 1) * t.titleSpacing + t.titleMarginBottom), C) {
    const F = t.displayColors ? Math.max(c, u.lineHeight) : u.lineHeight;
    M += v * F + (C - v) * u.lineHeight + (C - 1) * t.bodySpacing;
  }
  _ && (M += t.footerMarginTop + _ * g.lineHeight + (_ - 1) * t.footerSpacing);
  let T = 0;
  const D = function(F) {
    S = Math.max(S, e.measureText(F).width + T);
  };
  return e.save(), e.font = f.string, gt(n.title, D), e.font = u.string, gt(n.beforeBody.concat(n.afterBody), D), T = t.displayColors ? l + 2 + t.boxPadding : 0, gt(i, (F) => {
    gt(F.before, D), gt(F.lines, D), gt(F.after, D);
  }), T = 0, e.font = g.string, gt(n.footer, D), e.restore(), S += y.width, {
    width: S,
    height: M
  };
}
function fS(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function dS(n, t, e, i) {
  const { x: r, width: a } = i, l = e.caretSize + e.caretPadding;
  if (n === "left" && r + a + l > t.width || n === "right" && r - a - l < 0)
    return !0;
}
function gS(n, t, e, i) {
  const { x: r, width: a } = e, { width: l, chartArea: { left: c, right: u } } = n;
  let f = "center";
  return i === "center" ? f = r <= (c + u) / 2 ? "left" : "right" : r <= a / 2 ? f = "left" : r >= l - a / 2 && (f = "right"), dS(f, n, t, e) && (f = "center"), f;
}
function zu(n, t, e) {
  const i = e.yAlign || t.yAlign || fS(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || gS(n, t, e, i),
    yAlign: i
  };
}
function pS(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function mS(n, t, e) {
  let { y: i, height: r } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= r + e : i -= r / 2, i;
}
function Wu(n, t, e, i) {
  const { caretSize: r, caretPadding: a, cornerRadius: l } = n, { xAlign: c, yAlign: u } = e, f = r + a, { topLeft: g, topRight: p, bottomLeft: _, bottomRight: v } = Wn(l);
  let y = pS(t, c);
  const M = mS(t, u, f);
  return u === "center" ? c === "left" ? y += f : c === "right" && (y -= f) : c === "left" ? y -= Math.max(g, _) + r : c === "right" && (y += Math.max(p, v) + r), {
    x: zt(y, 0, i.width - t.width),
    y: zt(M, 0, i.height - t.height)
  };
}
function hr(n, t, e) {
  const i = Xt(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function Nu(n) {
  return Ie([], qe(n));
}
function _S(n, t, e) {
  return vn(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Hu(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const jf = {
  beforeTitle: Ge,
  title(n) {
    if (n.length > 0) {
      const t = n[0], e = t.chart.data.labels, i = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Ge,
  beforeBody: Ge,
  beforeLabel: Ge,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return lt(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Ge,
  afterBody: Ge,
  beforeFooter: Ge,
  footer: Ge,
  afterFooter: Ge
};
function ee(n, t, e, i) {
  const r = n[t].call(e, i);
  return typeof r > "u" ? jf[t].call(e, i) : r;
}
class ka extends Te {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, i = this.options.setContext(this.getContext()), r = i.enabled && e.options.animation && i.animations, a = new Of(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = _S(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, r = ee(i, "beforeTitle", this, t), a = ee(i, "title", this, t), l = ee(i, "afterTitle", this, t);
    let c = [];
    return c = Ie(c, qe(r)), c = Ie(c, qe(a)), c = Ie(c, qe(l)), c;
  }
  getBeforeBody(t, e) {
    return Nu(ee(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, r = [];
    return gt(t, (a) => {
      const l = {
        before: [],
        lines: [],
        after: []
      }, c = Hu(i, a);
      Ie(l.before, qe(ee(c, "beforeLabel", this, a))), Ie(l.lines, ee(c, "label", this, a)), Ie(l.after, qe(ee(c, "afterLabel", this, a))), r.push(l);
    }), r;
  }
  getAfterBody(t, e) {
    return Nu(ee(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, r = ee(i, "beforeFooter", this, t), a = ee(i, "footer", this, t), l = ee(i, "afterFooter", this, t);
    let c = [];
    return c = Ie(c, qe(r)), c = Ie(c, qe(a)), c = Ie(c, qe(l)), c;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, r = [], a = [], l = [];
    let c = [], u, f;
    for (u = 0, f = e.length; u < f; ++u)
      c.push(uS(this.chart, e[u]));
    return t.filter && (c = c.filter((g, p, _) => t.filter(g, p, _, i))), t.itemSort && (c = c.sort((g, p) => t.itemSort(g, p, i))), gt(c, (g) => {
      const p = Hu(t.callbacks, g);
      r.push(ee(p, "labelColor", this, g)), a.push(ee(p, "labelPointStyle", this, g)), l.push(ee(p, "labelTextColor", this, g));
    }), this.labelColors = r, this.labelPointStyles = a, this.labelTextColors = l, this.dataPoints = c, c;
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()), r = this._active;
    let a, l = [];
    if (!r.length)
      this.opacity !== 0 && (a = {
        opacity: 0
      });
    else {
      const c = $i[i.position].call(this, r, this._eventPosition);
      l = this._createItems(i), this.title = this.getTitle(l, i), this.beforeBody = this.getBeforeBody(l, i), this.body = this.getBody(l, i), this.afterBody = this.getAfterBody(l, i), this.footer = this.getFooter(l, i);
      const u = this._size = Bu(this, i), f = Object.assign({}, c, u), g = zu(this.chart, i, f), p = Wu(i, f, g, this.chart);
      this.xAlign = g.xAlign, this.yAlign = g.yAlign, a = {
        opacity: 1,
        x: p.x,
        y: p.y,
        width: u.width,
        height: u.height,
        caretX: c.x,
        caretY: c.y
      };
    }
    this._tooltipItems = l, this.$context = void 0, a && this._resolveAnimations().update(this, a), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, i, r) {
    const a = this.getCaretPosition(t, i, r);
    e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: r, yAlign: a } = this, { caretSize: l, cornerRadius: c } = i, { topLeft: u, topRight: f, bottomLeft: g, bottomRight: p } = Wn(c), { x: _, y: v } = t, { width: y, height: M } = e;
    let S, C, T, D, F, L;
    return a === "center" ? (F = v + M / 2, r === "left" ? (S = _, C = S - l, D = F + l, L = F - l) : (S = _ + y, C = S + l, D = F - l, L = F + l), T = S) : (r === "left" ? C = _ + Math.max(u, g) + l : r === "right" ? C = _ + y - Math.max(f, p) - l : C = this.caretX, a === "top" ? (D = v, F = D - l, S = C - l, T = C + l) : (D = v + M, F = D + l, S = C + l, T = C - l), L = D), {
      x1: S,
      x2: C,
      x3: T,
      y1: D,
      y2: F,
      y3: L
    };
  }
  drawTitle(t, e, i) {
    const r = this.title, a = r.length;
    let l, c, u;
    if (a) {
      const f = ai(i.rtl, this.x, this.width);
      for (t.x = hr(this, i.titleAlign, i), e.textAlign = f.textAlign(i.titleAlign), e.textBaseline = "middle", l = It(i.titleFont), c = i.titleSpacing, e.fillStyle = i.titleColor, e.font = l.string, u = 0; u < a; ++u)
        e.fillText(r[u], f.x(t.x), t.y + l.lineHeight / 2), t.y += l.lineHeight + c, u + 1 === a && (t.y += i.titleMarginBottom - c);
    }
  }
  _drawColorBox(t, e, i, r, a) {
    const l = this.labelColors[i], c = this.labelPointStyles[i], { boxHeight: u, boxWidth: f } = a, g = It(a.bodyFont), p = hr(this, "left", a), _ = r.x(p), v = u < g.lineHeight ? (g.lineHeight - u) / 2 : 0, y = e.y + v;
    if (a.usePointStyle) {
      const M = {
        radius: Math.min(f, u) / 2,
        pointStyle: c.pointStyle,
        rotation: c.rotation,
        borderWidth: 1
      }, S = r.leftForLtr(_, f) + f / 2, C = y + u / 2;
      t.strokeStyle = a.multiKeyBackground, t.fillStyle = a.multiKeyBackground, wa(t, M, S, C), t.strokeStyle = l.borderColor, t.fillStyle = l.backgroundColor, wa(t, M, S, C);
    } else {
      t.lineWidth = ot(l.borderWidth) ? Math.max(...Object.values(l.borderWidth)) : l.borderWidth || 1, t.strokeStyle = l.borderColor, t.setLineDash(l.borderDash || []), t.lineDashOffset = l.borderDashOffset || 0;
      const M = r.leftForLtr(_, f), S = r.leftForLtr(r.xPlus(_, 1), f - 2), C = Wn(l.borderRadius);
      Object.values(C).some((T) => T !== 0) ? (t.beginPath(), t.fillStyle = a.multiKeyBackground, es(t, {
        x: M,
        y,
        w: f,
        h: u,
        radius: C
      }), t.fill(), t.stroke(), t.fillStyle = l.backgroundColor, t.beginPath(), es(t, {
        x: S,
        y: y + 1,
        w: f - 2,
        h: u - 2,
        radius: C
      }), t.fill()) : (t.fillStyle = a.multiKeyBackground, t.fillRect(M, y, f, u), t.strokeRect(M, y, f, u), t.fillStyle = l.backgroundColor, t.fillRect(S, y + 1, f - 2, u - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: r } = this, { bodySpacing: a, bodyAlign: l, displayColors: c, boxHeight: u, boxWidth: f, boxPadding: g } = i, p = It(i.bodyFont);
    let _ = p.lineHeight, v = 0;
    const y = ai(i.rtl, this.x, this.width), M = function(H) {
      e.fillText(H, y.x(t.x + v), t.y + _ / 2), t.y += _ + a;
    }, S = y.textAlign(l);
    let C, T, D, F, L, W, z;
    for (e.textAlign = l, e.textBaseline = "middle", e.font = p.string, t.x = hr(this, S, i), e.fillStyle = i.bodyColor, gt(this.beforeBody, M), v = c && S !== "right" ? l === "center" ? f / 2 + g : f + 2 + g : 0, F = 0, W = r.length; F < W; ++F) {
      for (C = r[F], T = this.labelTextColors[F], e.fillStyle = T, gt(C.before, M), D = C.lines, c && D.length && (this._drawColorBox(e, t, F, y, i), _ = Math.max(p.lineHeight, u)), L = 0, z = D.length; L < z; ++L)
        M(D[L]), _ = p.lineHeight;
      gt(C.after, M);
    }
    v = 0, _ = p.lineHeight, gt(this.afterBody, M), t.y -= a;
  }
  drawFooter(t, e, i) {
    const r = this.footer, a = r.length;
    let l, c;
    if (a) {
      const u = ai(i.rtl, this.x, this.width);
      for (t.x = hr(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = u.textAlign(i.footerAlign), e.textBaseline = "middle", l = It(i.footerFont), e.fillStyle = i.footerColor, e.font = l.string, c = 0; c < a; ++c)
        e.fillText(r[c], u.x(t.x), t.y + l.lineHeight / 2), t.y += l.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, r) {
    const { xAlign: a, yAlign: l } = this, { x: c, y: u } = t, { width: f, height: g } = i, { topLeft: p, topRight: _, bottomLeft: v, bottomRight: y } = Wn(r.cornerRadius);
    e.fillStyle = r.backgroundColor, e.strokeStyle = r.borderColor, e.lineWidth = r.borderWidth, e.beginPath(), e.moveTo(c + p, u), l === "top" && this.drawCaret(t, e, i, r), e.lineTo(c + f - _, u), e.quadraticCurveTo(c + f, u, c + f, u + _), l === "center" && a === "right" && this.drawCaret(t, e, i, r), e.lineTo(c + f, u + g - y), e.quadraticCurveTo(c + f, u + g, c + f - y, u + g), l === "bottom" && this.drawCaret(t, e, i, r), e.lineTo(c + v, u + g), e.quadraticCurveTo(c, u + g, c, u + g - v), l === "center" && a === "left" && this.drawCaret(t, e, i, r), e.lineTo(c, u + p), e.quadraticCurveTo(c, u, c + p, u), e.closePath(), e.fill(), r.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, r = i && i.x, a = i && i.y;
    if (r || a) {
      const l = $i[t.position].call(this, this._active, this._eventPosition);
      if (!l)
        return;
      const c = this._size = Bu(this, t), u = Object.assign({}, l, this._size), f = zu(e, t, u), g = Wu(t, u, f, e);
      (r._to !== g.x || a._to !== g.y) && (this.xAlign = f.xAlign, this.yAlign = f.yAlign, this.width = c.width, this.height = c.height, this.caretX = l.x, this.caretY = l.y, this._resolveAnimations().update(this, g));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(e);
    const r = {
      width: this.width,
      height: this.height
    }, a = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const l = Xt(e.padding), c = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && c && (t.save(), t.globalAlpha = i, this.drawBackground(a, t, r, e), yf(t, e.textDirection), a.y += l.top, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), wf(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active, r = t.map(({ datasetIndex: c, index: u }) => {
      const f = this.chart.getDatasetMeta(c);
      if (!f)
        throw new Error("Cannot find a dataset at index " + c);
      return {
        datasetIndex: c,
        element: f.data[u],
        index: u
      };
    }), a = !yr(i, r), l = this._positionChanged(r, e);
    (a || l) && (this._active = r, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options, a = this._active || [], l = this._getActiveElements(t, a, e, i), c = this._positionChanged(l, t), u = e || !yr(l, a) || c;
    return u && (this._active = l, (r.enabled || r.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), u;
  }
  _getActiveElements(t, e, i, r) {
    const a = this.options;
    if (t.type === "mouseout")
      return [];
    if (!r)
      return e;
    const l = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
    return a.reverse && l.reverse(), l;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: r, options: a } = this, l = $i[a.position].call(this, t, e);
    return l !== !1 && (i !== l.x || r !== l.y);
  }
}
N(ka, "positioners", $i);
var bS = {
  id: "tooltip",
  _element: ka,
  positioners: $i,
  afterInit(n, t, e) {
    e && (n.tooltip = new ka({
      chart: n,
      options: e
    }));
  },
  beforeUpdate(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  reset(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  afterDraw(n) {
    const t = n.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (n.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(n, t) {
    if (n.tooltip) {
      const e = t.replay;
      n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (n, t) => t.bodyFont.size,
    boxWidth: (n, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: jf
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, xS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: Dw,
  Decimation: Iw,
  Filler: eS,
  Legend: aS,
  SubTitle: hS,
  Title: cS,
  Tooltip: bS
});
const vS = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function yS(n, t, e, i) {
  const r = n.indexOf(t);
  if (r === -1)
    return vS(n, t, e, i);
  const a = n.lastIndexOf(t);
  return r !== a ? e : r;
}
const wS = (n, t) => n === null ? null : zt(Math.round(n), 0, t);
function Vu(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Ta extends Un {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: r, label: a } of e)
        i[r] === a && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (lt(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : yS(i, t, Z(e, t), this._addedLabels), wS(e, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), e || (r = this.getLabels().length - 1)), this.min = i, this.max = r;
  }
  buildTicks() {
    const t = this.min, e = this.max, i = this.options.offset, r = [];
    let a = this.getLabels();
    a = t === 0 && e === a.length - 1 ? a : a.slice(t, e + 1), this._valueRange = Math.max(a.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let l = t; l <= e; l++)
      r.push({
        value: l
      });
    return r;
  }
  getLabelForValue(t) {
    return Vu.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
N(Ta, "id", "category"), N(Ta, "defaults", {
  ticks: {
    callback: Vu
  }
});
function SS(n, t) {
  const e = [], { bounds: r, step: a, min: l, max: c, precision: u, count: f, maxTicks: g, maxDigits: p, includeBounds: _ } = n, v = a || 1, y = g - 1, { min: M, max: S } = t, C = !lt(l), T = !lt(c), D = !lt(f), F = (S - M) / (p + 1);
  let L = Fh((S - M) / y / v) * v, W, z, H, Y;
  if (L < 1e-14 && !C && !T)
    return [
      {
        value: M
      },
      {
        value: S
      }
    ];
  Y = Math.ceil(S / L) - Math.floor(M / L), Y > y && (L = Fh(Y * L / y / v) * v), lt(u) || (W = Math.pow(10, u), L = Math.ceil(L * W) / W), r === "ticks" ? (z = Math.floor(M / L) * L, H = Math.ceil(S / L) * L) : (z = M, H = S), C && T && a && _v((c - l) / a, L / 1e3) ? (Y = Math.round(Math.min((c - l) / L, g)), L = (c - l) / Y, z = l, H = c) : D ? (z = C ? l : z, H = T ? c : H, Y = f - 1, L = (H - z) / Y) : (Y = (H - z) / L, ji(Y, Math.round(Y), L / 1e3) ? Y = Math.round(Y) : Y = Math.ceil(Y));
  const J = Math.max(Bh(L), Bh(z));
  W = Math.pow(10, lt(u) ? J : u), z = Math.round(z * W) / W, H = Math.round(H * W) / W;
  let Q = 0;
  for (C && (_ && z !== l ? (e.push({
    value: l
  }), z < l && Q++, ji(Math.round((z + Q * L) * W) / W, l, Uu(l, F, n)) && Q++) : z < l && Q++); Q < Y; ++Q) {
    const st = Math.round((z + Q * L) * W) / W;
    if (T && st > c)
      break;
    e.push({
      value: st
    });
  }
  return T && _ && H !== c ? e.length && ji(e[e.length - 1].value, c, Uu(c, F, n)) ? e[e.length - 1].value = c : e.push({
    value: c
  }) : (!T || H === c) && e.push({
    value: H
  }), e;
}
function Uu(n, t, { horizontal: e, minRotation: i }) {
  const r = Ce(i), a = (e ? Math.sin(r) : Math.cos(r)) || 1e-3, l = 0.75 * t * ("" + n).length;
  return Math.min(t / a, l);
}
class Cr extends Un {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return lt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: r, max: a } = this;
    const l = (u) => r = e ? r : u, c = (u) => a = i ? a : u;
    if (t) {
      const u = Be(r), f = Be(a);
      u < 0 && f < 0 ? c(0) : u > 0 && f > 0 && l(0);
    }
    if (r === a) {
      let u = a === 0 ? 1 : Math.abs(a * 0.05);
      c(a + u), t || l(r - u);
    }
    this.min = r, this.max = a;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: i } = t, r;
    return i ? (r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, r > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`), r = 1e3)) : (r = this.computeTickLimit(), e = e || 11), e && (r = Math.min(e, r)), r;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, a = this._range || this, l = SS(r, a);
    return t.bounds === "ticks" && nf(l, this, "value"), t.reverse ? (l.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), l;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const r = (i - e) / Math.max(t.length - 1, 1) / 2;
      e -= r, i += r;
    }
    this._startValue = e, this._endValue = i, this._valueRange = i - e;
  }
  getLabelForValue(t) {
    return os(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Da extends Cr {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = Ot(t) ? t : 0, this.max = Ot(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = Ce(this.options.ticks.minRotation), r = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, a = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, a.lineHeight / r));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
N(Da, "id", "linear"), N(Da, "defaults", {
  ticks: {
    callback: Tr.formatters.numeric
  }
});
const is = (n) => Math.floor(gn(n)), In = (n, t) => Math.pow(10, is(n) + t);
function $u(n) {
  return n / Math.pow(10, is(n)) === 1;
}
function Yu(n, t, e) {
  const i = Math.pow(10, e), r = Math.floor(n / i);
  return Math.ceil(t / i) - r;
}
function MS(n, t) {
  const e = t - n;
  let i = is(e);
  for (; Yu(n, t, i) > 10; )
    i++;
  for (; Yu(n, t, i) < 10; )
    i--;
  return Math.min(i, is(n));
}
function AS(n, { min: t, max: e }) {
  t = ce(n.min, t);
  const i = [], r = is(t);
  let a = MS(t, e), l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const c = Math.pow(10, a), u = r > a ? Math.pow(10, r) : 0, f = Math.round((t - u) * l) / l, g = Math.floor((t - u) / c / 10) * c * 10;
  let p = Math.floor((f - g) / Math.pow(10, a)), _ = ce(n.min, Math.round((u + g + p * Math.pow(10, a)) * l) / l);
  for (; _ < e; )
    i.push({
      value: _,
      major: $u(_),
      significand: p
    }), p >= 10 ? p = p < 15 ? 15 : 20 : p++, p >= 20 && (a++, p = 2, l = a >= 0 ? 1 : l), _ = Math.round((u + g + p * Math.pow(10, a)) * l) / l;
  const v = ce(n.max, _);
  return i.push({
    value: v,
    major: $u(v),
    significand: p
  }), i;
}
class La extends Un {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const i = Cr.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return Ot(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = Ot(t) ? Math.max(0, t) : null, this.max = Ot(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Ot(this._userMin) && (this.min = t === In(this.min, 0) ? In(this.min, -1) : In(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, r = this.max;
    const a = (c) => i = t ? i : c, l = (c) => r = e ? r : c;
    i === r && (i <= 0 ? (a(1), l(10)) : (a(In(i, -1)), l(In(r, 1)))), i <= 0 && a(In(r, -1)), r <= 0 && l(In(i, 1)), this.min = i, this.max = r;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = AS(e, this);
    return t.bounds === "ticks" && nf(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : os(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = gn(t), this._valueRange = gn(this.max) - gn(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (gn(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
N(La, "id", "logarithmic"), N(La, "defaults", {
  ticks: {
    callback: Tr.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ra(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Xt(t.backdropPadding);
    return Z(t.font && t.font.size, Ct.font.size) + e.height;
  }
  return 0;
}
function OS(n, t, e) {
  return e = vt(e) ? e : [
    e
  ], {
    w: Ev(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Xu(n, t, e, i, r) {
  return n === i || n === r ? {
    start: t - e / 2,
    end: t + e / 2
  } : n < i || n > r ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function PS(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], r = [], a = n._pointLabels.length, l = n.options.pointLabels, c = l.centerPointLabels ? St / a : 0;
  for (let u = 0; u < a; u++) {
    const f = l.setContext(n.getPointLabelContext(u));
    r[u] = f.padding;
    const g = n.getPointPosition(u, n.drawingArea + r[u], c), p = It(f.font), _ = OS(n.ctx, p, n._pointLabels[u]);
    i[u] = _;
    const v = he(n.getIndexAngle(u) + c), y = Math.round(Na(v)), M = Xu(y, g.x, _.w, 0, 180), S = Xu(y, g.y, _.h, 90, 270);
    CS(e, t, v, M, S);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = DS(n, i, r);
}
function CS(n, t, e, i, r) {
  const a = Math.abs(Math.sin(e)), l = Math.abs(Math.cos(e));
  let c = 0, u = 0;
  i.start < t.l ? (c = (t.l - i.start) / a, n.l = Math.min(n.l, t.l - c)) : i.end > t.r && (c = (i.end - t.r) / a, n.r = Math.max(n.r, t.r + c)), r.start < t.t ? (u = (t.t - r.start) / l, n.t = Math.min(n.t, t.t - u)) : r.end > t.b && (u = (r.end - t.b) / l, n.b = Math.max(n.b, t.b + u));
}
function kS(n, t, e) {
  const i = n.drawingArea, { extra: r, additionalAngle: a, padding: l, size: c } = e, u = n.getPointPosition(t, i + r + l, a), f = Math.round(Na(he(u.angle + Pt))), g = ES(u.y, c.h, f), p = LS(f), _ = RS(u.x, c.w, p);
  return {
    visible: !0,
    x: u.x,
    y: g,
    textAlign: p,
    left: _,
    top: g,
    right: _ + c.w,
    bottom: g + c.h
  };
}
function TS(n, t) {
  if (!t)
    return !0;
  const { left: e, top: i, right: r, bottom: a } = n;
  return !(tn({
    x: e,
    y: i
  }, t) || tn({
    x: e,
    y: a
  }, t) || tn({
    x: r,
    y: i
  }, t) || tn({
    x: r,
    y: a
  }, t));
}
function DS(n, t, e) {
  const i = [], r = n._pointLabels.length, a = n.options, { centerPointLabels: l, display: c } = a.pointLabels, u = {
    extra: Ra(a) / 2,
    additionalAngle: l ? St / r : 0
  };
  let f;
  for (let g = 0; g < r; g++) {
    u.padding = e[g], u.size = t[g];
    const p = kS(n, g, u);
    i.push(p), c === "auto" && (p.visible = TS(p, f), p.visible && (f = p));
  }
  return i;
}
function LS(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function RS(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function ES(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function IS(n, t, e) {
  const { left: i, top: r, right: a, bottom: l } = e, { backdropColor: c } = t;
  if (!lt(c)) {
    const u = Wn(t.borderRadius), f = Xt(t.backdropPadding);
    n.fillStyle = c;
    const g = i - f.left, p = r - f.top, _ = a - i + f.width, v = l - r + f.height;
    Object.values(u).some((y) => y !== 0) ? (n.beginPath(), es(n, {
      x: g,
      y: p,
      w: _,
      h: v,
      radius: u
    }), n.fill()) : n.fillRect(g, p, _, v);
  }
}
function FS(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let r = t - 1; r >= 0; r--) {
    const a = n._pointLabelItems[r];
    if (!a.visible)
      continue;
    const l = i.setContext(n.getPointLabelContext(r));
    IS(e, l, a);
    const c = It(l.font), { x: u, y: f, textAlign: g } = a;
    Vn(e, n._pointLabels[r], u, f + c.lineHeight / 2, c, {
      color: l.color,
      textAlign: g,
      textBaseline: "middle"
    });
  }
}
function Gf(n, t, e, i) {
  const { ctx: r } = n;
  if (e)
    r.arc(n.xCenter, n.yCenter, t, 0, yt);
  else {
    let a = n.getPointPosition(0, t);
    r.moveTo(a.x, a.y);
    for (let l = 1; l < i; l++)
      a = n.getPointPosition(l, t), r.lineTo(a.x, a.y);
  }
}
function BS(n, t, e, i, r) {
  const a = n.ctx, l = t.circular, { color: c, lineWidth: u } = t;
  !l && !i || !c || !u || e < 0 || (a.save(), a.strokeStyle = c, a.lineWidth = u, a.setLineDash(r.dash), a.lineDashOffset = r.dashOffset, a.beginPath(), Gf(n, e, l, i), a.closePath(), a.stroke(), a.restore());
}
function zS(n, t, e) {
  return vn(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Yi extends Cr {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Xt(Ra(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = Ot(t) && !isNaN(t) ? t : 0, this.max = Ot(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ra(this.options));
  }
  generateTickLabels(t) {
    Cr.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const r = bt(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return r || r === 0 ? r : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? PS(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, r) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - r) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, r));
  }
  getIndexAngle(t) {
    const e = yt / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return he(t * e + Ce(i));
  }
  getDistanceFromCenterForValue(t) {
    if (lt(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (lt(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return zS(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const r = this.getIndexAngle(t) - Pt + i;
    return {
      x: Math.cos(r) * e + this.xCenter,
      y: Math.sin(r) * e + this.yCenter,
      angle: r
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: r, bottom: a } = this._pointLabelItems[t];
    return {
      left: e,
      top: i,
      right: r,
      bottom: a
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), Gf(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: r, border: a } = e, l = this._pointLabels.length;
    let c, u, f;
    if (e.pointLabels.display && FS(this, l), r.display && this.ticks.forEach((g, p) => {
      if (p !== 0) {
        u = this.getDistanceFromCenterForValue(g.value);
        const _ = this.getContext(p), v = r.setContext(_), y = a.setContext(_);
        BS(this, v, u, l, y);
      }
    }), i.display) {
      for (t.save(), c = l - 1; c >= 0; c--) {
        const g = i.setContext(this.getPointLabelContext(c)), { color: p, lineWidth: _ } = g;
        !_ || !p || (t.lineWidth = _, t.strokeStyle = p, t.setLineDash(g.borderDash), t.lineDashOffset = g.borderDashOffset, u = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), f = this.getPointPosition(c, u), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(f.x, f.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, i = e.ticks;
    if (!i.display)
      return;
    const r = this.getIndexAngle(0);
    let a, l;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(r), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((c, u) => {
      if (u === 0 && !e.reverse)
        return;
      const f = i.setContext(this.getContext(u)), g = It(f.font);
      if (a = this.getDistanceFromCenterForValue(this.ticks[u].value), f.showLabelBackdrop) {
        t.font = g.string, l = t.measureText(c.label).width, t.fillStyle = f.backdropColor;
        const p = Xt(f.backdropPadding);
        t.fillRect(-l / 2 - p.left, -a - g.size / 2 - p.top, l + p.width, g.size + p.height);
      }
      Vn(t, c.label, 0, -a, g, {
        color: f.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
N(Yi, "id", "radialLinear"), N(Yi, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Tr.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), N(Yi, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), N(Yi, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Ir = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, ne = /* @__PURE__ */ Object.keys(Ir);
function WS(n, t) {
  return n - t;
}
function ju(n, t) {
  if (lt(t))
    return null;
  const e = n._adapter, { parser: i, round: r, isoWeekday: a } = n._parseOpts;
  let l = t;
  return typeof i == "function" && (l = i(l)), Ot(l) || (l = typeof i == "string" ? e.parse(l, i) : e.parse(l)), l === null ? null : (r && (l = r === "week" && (ci(a) || a === !0) ? e.startOf(l, "isoWeek", a) : e.startOf(l, r)), +l);
}
function Gu(n, t, e, i) {
  const r = ne.length;
  for (let a = ne.indexOf(n); a < r - 1; ++a) {
    const l = Ir[ne[a]], c = l.steps ? l.steps : Number.MAX_SAFE_INTEGER;
    if (l.common && Math.ceil((e - t) / (c * l.size)) <= i)
      return ne[a];
  }
  return ne[r - 1];
}
function NS(n, t, e, i, r) {
  for (let a = ne.length - 1; a >= ne.indexOf(e); a--) {
    const l = ne[a];
    if (Ir[l].common && n._adapter.diff(r, i, l) >= t - 1)
      return l;
  }
  return ne[e ? ne.indexOf(e) : 0];
}
function HS(n) {
  for (let t = ne.indexOf(n) + 1, e = ne.length; t < e; ++t)
    if (Ir[ne[t]].common)
      return ne[t];
}
function Ku(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: r } = Ha(e, t), a = e[i] >= t ? e[i] : e[r];
    n[a] = !0;
  }
}
function VS(n, t, e, i) {
  const r = n._adapter, a = +r.startOf(t[0].value, i), l = t[t.length - 1].value;
  let c, u;
  for (c = a; c <= l; c = +r.add(c, 1, i))
    u = e[c], u >= 0 && (t[u].major = !0);
  return t;
}
function qu(n, t, e) {
  const i = [], r = {}, a = t.length;
  let l, c;
  for (l = 0; l < a; ++l)
    c = t[l], r[c] = l, i.push({
      value: c,
      major: !1
    });
  return a === 0 || !e ? i : VS(n, i, r, e);
}
class ss extends Un {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), r = this._adapter = new qy._date(t.adapters.date);
    r.init(e), Xi(i.displayFormats, r.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : ju(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, i = t.time.unit || "day";
    let { min: r, max: a, minDefined: l, maxDefined: c } = this.getUserBounds();
    function u(f) {
      !l && !isNaN(f.min) && (r = Math.min(r, f.min)), !c && !isNaN(f.max) && (a = Math.max(a, f.max));
    }
    (!l || !c) && (u(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && u(this.getMinMax(!1))), r = Ot(r) && !isNaN(r) ? r : +e.startOf(Date.now(), i), a = Ot(a) && !isNaN(a) ? a : +e.endOf(Date.now(), i) + 1, this.min = Math.min(r, a - 1), this.max = Math.max(r + 1, a);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], i = t[t.length - 1]), {
      min: e,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, i = t.ticks, r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && r.length && (this.min = this._userMin || r[0], this.max = this._userMax || r[r.length - 1]);
    const a = this.min, l = this.max, c = yv(r, a, l);
    return this._unit = e.unit || (i.autoSkip ? Gu(e.minUnit, this.min, this.max, this._getLabelCapacity(a)) : NS(this, c.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : HS(this._unit), this.initOffsets(r), t.reverse && c.reverse(), qu(this, c, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, r, a;
    this.options.offset && t.length && (r = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - r : e = (this.getDecimalForValue(t[1]) - r) / 2, a = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = a : i = (a - this.getDecimalForValue(t[t.length - 2])) / 2);
    const l = t.length < 3 ? 0.5 : 0.25;
    e = zt(e, 0, l), i = zt(i, 0, l), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, r = this.options, a = r.time, l = a.unit || Gu(a.minUnit, e, i, this._getLabelCapacity(e)), c = Z(r.ticks.stepSize, 1), u = l === "week" ? a.isoWeekday : !1, f = ci(u) || u === !0, g = {};
    let p = e, _, v;
    if (f && (p = +t.startOf(p, "isoWeek", u)), p = +t.startOf(p, f ? "day" : l), t.diff(i, e, l) > 1e5 * c)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + c + " " + l);
    const y = r.ticks.source === "data" && this.getDataTimestamps();
    for (_ = p, v = 0; _ < i; _ = +t.add(_, c, l), v++)
      Ku(g, _, y);
    return (_ === i || r.bounds === "ticks" || v === 1) && Ku(g, _, y), Object.keys(g).sort((M, S) => M - S).map((M) => +M);
  }
  getLabelForValue(t) {
    const e = this._adapter, i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const r = this.options.time.displayFormats, a = this._unit, l = e || r[a];
    return this._adapter.format(t, l);
  }
  _tickFormatFunction(t, e, i, r) {
    const a = this.options, l = a.ticks.callback;
    if (l)
      return bt(l, [
        t,
        e,
        i
      ], this);
    const c = a.time.displayFormats, u = this._unit, f = this._majorUnit, g = u && c[u], p = f && c[f], _ = i[e], v = f && p && _ && _.major;
    return this._adapter.format(t, r || (v ? p : g));
  }
  generateTickLabels(t) {
    let e, i, r;
    for (e = 0, i = t.length; e < i; ++e)
      r = t[e], r.label = this._tickFormatFunction(r.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, i = this.ctx.measureText(t).width, r = Ce(this.isHorizontal() ? e.maxRotation : e.minRotation), a = Math.cos(r), l = Math.sin(r), c = this._resolveTickFontOptions(0).size;
    return {
      w: i * a + c * l,
      h: i * l + c * a
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, r = i[e.unit] || i.millisecond, a = this._tickFormatFunction(t, 0, qu(this, [
      t
    ], this._majorUnit), r), l = this._getLabelSize(a), c = Math.floor(this.isHorizontal() ? this.width / l.w : this.height / l.h) - 1;
    return c > 0 ? c : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, i;
    if (t.length)
      return t;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return this._cache.data = r[0].controller.getAllParsedValues(this);
    for (e = 0, i = r.length; e < i; ++e)
      t = t.concat(r[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length)
      return t;
    const r = this.getLabels();
    for (e = 0, i = r.length; e < i; ++e)
      t.push(ju(this, r[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return of(t.sort(WS));
  }
}
N(ss, "id", "time"), N(ss, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function ur(n, t, e) {
  let i = 0, r = n.length - 1, a, l, c, u;
  e ? (t >= n[i].pos && t <= n[r].pos && ({ lo: i, hi: r } = Qe(n, "pos", t)), { pos: a, time: c } = n[i], { pos: l, time: u } = n[r]) : (t >= n[i].time && t <= n[r].time && ({ lo: i, hi: r } = Qe(n, "time", t)), { time: a, pos: c } = n[i], { time: l, pos: u } = n[r]);
  const f = l - a;
  return f ? c + (u - c) * (t - a) / f : c;
}
class Ea extends ss {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = ur(e, this.min), this._tableRange = ur(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, r = [], a = [];
    let l, c, u, f, g;
    for (l = 0, c = t.length; l < c; ++l)
      f = t[l], f >= e && f <= i && r.push(f);
    if (r.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (l = 0, c = r.length; l < c; ++l)
      g = r[l + 1], u = r[l - 1], f = r[l], Math.round((g + u) / 2) !== f && a.push({
        time: f,
        pos: l / (c - 1)
      });
    return a;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (ur(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return ur(this._table, i * this._tableRange + this._minPos, !0);
  }
}
N(Ea, "id", "timeseries"), N(Ea, "defaults", ss.defaults);
var US = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Ta,
  LinearScale: Da,
  LogarithmicScale: La,
  RadialLinearScale: Yi,
  TimeScale: ss,
  TimeSeriesScale: Ea
});
const $S = [
  Ky,
  Aw,
  xS,
  US
];
Er.register(...$S);
var Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function YS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var kr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
kr.exports;
(function(n, t) {
  (function() {
    var e, i = "4.17.21", r = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, g = "__lodash_placeholder__", p = 1, _ = 2, v = 4, y = 1, M = 2, S = 1, C = 2, T = 4, D = 8, F = 16, L = 32, W = 64, z = 128, H = 256, Y = 512, J = 30, Q = "...", st = 800, Lt = 16, Ht = 1, ht = 2, mt = 3, ft = 1 / 0, Dt = 9007199254740991, Ft = 17976931348623157e292, ye = 0 / 0, jt = 4294967295, en = jt - 1, yn = jt >>> 1, wn = [
      ["ary", z],
      ["bind", S],
      ["bindKey", C],
      ["curry", D],
      ["curryRight", F],
      ["flip", Y],
      ["partial", L],
      ["partialRight", W],
      ["rearg", H]
    ], ue = "[object Arguments]", De = "[object Array]", Jf = "[object AsyncFunction]", fi = "[object Boolean]", di = "[object Date]", Qf = "[object DOMException]", ls = "[object Error]", cs = "[object Function]", Ja = "[object GeneratorFunction]", we = "[object Map]", gi = "[object Number]", td = "[object Null]", ze = "[object Object]", Qa = "[object Promise]", ed = "[object Proxy]", pi = "[object RegExp]", Se = "[object Set]", mi = "[object String]", hs = "[object Symbol]", nd = "[object Undefined]", _i = "[object WeakMap]", id = "[object WeakSet]", bi = "[object ArrayBuffer]", $n = "[object DataView]", Fr = "[object Float32Array]", Br = "[object Float64Array]", zr = "[object Int8Array]", Wr = "[object Int16Array]", Nr = "[object Int32Array]", Hr = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Ur = "[object Uint16Array]", $r = "[object Uint32Array]", sd = /\b__p \+= '';/g, rd = /\b(__p \+=) '' \+/g, od = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tl = /&(?:amp|lt|gt|quot|#39);/g, el = /[&<>"']/g, ad = RegExp(tl.source), ld = RegExp(el.source), cd = /<%-([\s\S]+?)%>/g, hd = /<%([\s\S]+?)%>/g, nl = /<%=([\s\S]+?)%>/g, ud = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fd = /^\w*$/, dd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /[\\^$.*+?()[\]{}|]/g, gd = RegExp(Yr.source), Xr = /^\s+/, pd = /\s/, md = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _d = /\{\n\/\* \[wrapped with (.+)\] \*/, bd = /,? & /, xd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vd = /[()=,{}\[\]\/\s]/, yd = /\\(\\)?/g, wd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, il = /\w*$/, Sd = /^[-+]0x[0-9a-f]+$/i, Md = /^0b[01]+$/i, Ad = /^\[object .+?Constructor\]$/, Od = /^0o[0-7]+$/i, Pd = /^(?:0|[1-9]\d*)$/, Cd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, us = /($^)/, kd = /['\n\r\u2028\u2029\\]/g, fs = "\\ud800-\\udfff", Td = "\\u0300-\\u036f", Dd = "\\ufe20-\\ufe2f", Ld = "\\u20d0-\\u20ff", sl = Td + Dd + Ld, rl = "\\u2700-\\u27bf", ol = "a-z\\xdf-\\xf6\\xf8-\\xff", Rd = "\\xac\\xb1\\xd7\\xf7", Ed = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Id = "\\u2000-\\u206f", Fd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", al = "A-Z\\xc0-\\xd6\\xd8-\\xde", ll = "\\ufe0e\\ufe0f", cl = Rd + Ed + Id + Fd, jr = "['’]", Bd = "[" + fs + "]", hl = "[" + cl + "]", ds = "[" + sl + "]", ul = "\\d+", zd = "[" + rl + "]", fl = "[" + ol + "]", dl = "[^" + fs + cl + ul + rl + ol + al + "]", Gr = "\\ud83c[\\udffb-\\udfff]", Wd = "(?:" + ds + "|" + Gr + ")", gl = "[^" + fs + "]", Kr = "(?:\\ud83c[\\udde6-\\uddff]){2}", qr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yn = "[" + al + "]", pl = "\\u200d", ml = "(?:" + fl + "|" + dl + ")", Nd = "(?:" + Yn + "|" + dl + ")", _l = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", bl = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", xl = Wd + "?", vl = "[" + ll + "]?", Hd = "(?:" + pl + "(?:" + [gl, Kr, qr].join("|") + ")" + vl + xl + ")*", Vd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ud = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", yl = vl + xl + Hd, $d = "(?:" + [zd, Kr, qr].join("|") + ")" + yl, Yd = "(?:" + [gl + ds + "?", ds, Kr, qr, Bd].join("|") + ")", Xd = RegExp(jr, "g"), jd = RegExp(ds, "g"), Zr = RegExp(Gr + "(?=" + Gr + ")|" + Yd + yl, "g"), Gd = RegExp([
      Yn + "?" + fl + "+" + _l + "(?=" + [hl, Yn, "$"].join("|") + ")",
      Nd + "+" + bl + "(?=" + [hl, Yn + ml, "$"].join("|") + ")",
      Yn + "?" + ml + "+" + _l,
      Yn + "+" + bl,
      Ud,
      Vd,
      ul,
      $d
    ].join("|"), "g"), Kd = RegExp("[" + pl + fs + sl + ll + "]"), qd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Zd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Jd = -1, xt = {};
    xt[Fr] = xt[Br] = xt[zr] = xt[Wr] = xt[Nr] = xt[Hr] = xt[Vr] = xt[Ur] = xt[$r] = !0, xt[ue] = xt[De] = xt[bi] = xt[fi] = xt[$n] = xt[di] = xt[ls] = xt[cs] = xt[we] = xt[gi] = xt[ze] = xt[pi] = xt[Se] = xt[mi] = xt[_i] = !1;
    var _t = {};
    _t[ue] = _t[De] = _t[bi] = _t[$n] = _t[fi] = _t[di] = _t[Fr] = _t[Br] = _t[zr] = _t[Wr] = _t[Nr] = _t[we] = _t[gi] = _t[ze] = _t[pi] = _t[Se] = _t[mi] = _t[hs] = _t[Hr] = _t[Vr] = _t[Ur] = _t[$r] = !0, _t[ls] = _t[cs] = _t[_i] = !1;
    var Qd = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, tg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, eg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, ng = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ig = parseFloat, sg = parseInt, wl = typeof Wi == "object" && Wi && Wi.Object === Object && Wi, rg = typeof self == "object" && self && self.Object === Object && self, Wt = wl || rg || Function("return this")(), Jr = t && !t.nodeType && t, Sn = Jr && !0 && n && !n.nodeType && n, Sl = Sn && Sn.exports === Jr, Qr = Sl && wl.process, fe = function() {
      try {
        var O = Sn && Sn.require && Sn.require("util").types;
        return O || Qr && Qr.binding && Qr.binding("util");
      } catch {
      }
    }(), Ml = fe && fe.isArrayBuffer, Al = fe && fe.isDate, Ol = fe && fe.isMap, Pl = fe && fe.isRegExp, Cl = fe && fe.isSet, kl = fe && fe.isTypedArray;
    function ie(O, R, k) {
      switch (k.length) {
        case 0:
          return O.call(R);
        case 1:
          return O.call(R, k[0]);
        case 2:
          return O.call(R, k[0], k[1]);
        case 3:
          return O.call(R, k[0], k[1], k[2]);
      }
      return O.apply(R, k);
    }
    function og(O, R, k, U) {
      for (var K = -1, ct = O == null ? 0 : O.length; ++K < ct; ) {
        var Rt = O[K];
        R(U, Rt, k(Rt), O);
      }
      return U;
    }
    function de(O, R) {
      for (var k = -1, U = O == null ? 0 : O.length; ++k < U && R(O[k], k, O) !== !1; )
        ;
      return O;
    }
    function ag(O, R) {
      for (var k = O == null ? 0 : O.length; k-- && R(O[k], k, O) !== !1; )
        ;
      return O;
    }
    function Tl(O, R) {
      for (var k = -1, U = O == null ? 0 : O.length; ++k < U; )
        if (!R(O[k], k, O))
          return !1;
      return !0;
    }
    function nn(O, R) {
      for (var k = -1, U = O == null ? 0 : O.length, K = 0, ct = []; ++k < U; ) {
        var Rt = O[k];
        R(Rt, k, O) && (ct[K++] = Rt);
      }
      return ct;
    }
    function gs(O, R) {
      var k = O == null ? 0 : O.length;
      return !!k && Xn(O, R, 0) > -1;
    }
    function to(O, R, k) {
      for (var U = -1, K = O == null ? 0 : O.length; ++U < K; )
        if (k(R, O[U]))
          return !0;
      return !1;
    }
    function wt(O, R) {
      for (var k = -1, U = O == null ? 0 : O.length, K = Array(U); ++k < U; )
        K[k] = R(O[k], k, O);
      return K;
    }
    function sn(O, R) {
      for (var k = -1, U = R.length, K = O.length; ++k < U; )
        O[K + k] = R[k];
      return O;
    }
    function eo(O, R, k, U) {
      var K = -1, ct = O == null ? 0 : O.length;
      for (U && ct && (k = O[++K]); ++K < ct; )
        k = R(k, O[K], K, O);
      return k;
    }
    function lg(O, R, k, U) {
      var K = O == null ? 0 : O.length;
      for (U && K && (k = O[--K]); K--; )
        k = R(k, O[K], K, O);
      return k;
    }
    function no(O, R) {
      for (var k = -1, U = O == null ? 0 : O.length; ++k < U; )
        if (R(O[k], k, O))
          return !0;
      return !1;
    }
    var cg = io("length");
    function hg(O) {
      return O.split("");
    }
    function ug(O) {
      return O.match(xd) || [];
    }
    function Dl(O, R, k) {
      var U;
      return k(O, function(K, ct, Rt) {
        if (R(K, ct, Rt))
          return U = ct, !1;
      }), U;
    }
    function ps(O, R, k, U) {
      for (var K = O.length, ct = k + (U ? 1 : -1); U ? ct-- : ++ct < K; )
        if (R(O[ct], ct, O))
          return ct;
      return -1;
    }
    function Xn(O, R, k) {
      return R === R ? Sg(O, R, k) : ps(O, Ll, k);
    }
    function fg(O, R, k, U) {
      for (var K = k - 1, ct = O.length; ++K < ct; )
        if (U(O[K], R))
          return K;
      return -1;
    }
    function Ll(O) {
      return O !== O;
    }
    function Rl(O, R) {
      var k = O == null ? 0 : O.length;
      return k ? ro(O, R) / k : ye;
    }
    function io(O) {
      return function(R) {
        return R == null ? e : R[O];
      };
    }
    function so(O) {
      return function(R) {
        return O == null ? e : O[R];
      };
    }
    function El(O, R, k, U, K) {
      return K(O, function(ct, Rt, pt) {
        k = U ? (U = !1, ct) : R(k, ct, Rt, pt);
      }), k;
    }
    function dg(O, R) {
      var k = O.length;
      for (O.sort(R); k--; )
        O[k] = O[k].value;
      return O;
    }
    function ro(O, R) {
      for (var k, U = -1, K = O.length; ++U < K; ) {
        var ct = R(O[U]);
        ct !== e && (k = k === e ? ct : k + ct);
      }
      return k;
    }
    function oo(O, R) {
      for (var k = -1, U = Array(O); ++k < O; )
        U[k] = R(k);
      return U;
    }
    function gg(O, R) {
      return wt(R, function(k) {
        return [k, O[k]];
      });
    }
    function Il(O) {
      return O && O.slice(0, Wl(O) + 1).replace(Xr, "");
    }
    function se(O) {
      return function(R) {
        return O(R);
      };
    }
    function ao(O, R) {
      return wt(R, function(k) {
        return O[k];
      });
    }
    function xi(O, R) {
      return O.has(R);
    }
    function Fl(O, R) {
      for (var k = -1, U = O.length; ++k < U && Xn(R, O[k], 0) > -1; )
        ;
      return k;
    }
    function Bl(O, R) {
      for (var k = O.length; k-- && Xn(R, O[k], 0) > -1; )
        ;
      return k;
    }
    function pg(O, R) {
      for (var k = O.length, U = 0; k--; )
        O[k] === R && ++U;
      return U;
    }
    var mg = so(Qd), _g = so(tg);
    function bg(O) {
      return "\\" + ng[O];
    }
    function xg(O, R) {
      return O == null ? e : O[R];
    }
    function jn(O) {
      return Kd.test(O);
    }
    function vg(O) {
      return qd.test(O);
    }
    function yg(O) {
      for (var R, k = []; !(R = O.next()).done; )
        k.push(R.value);
      return k;
    }
    function lo(O) {
      var R = -1, k = Array(O.size);
      return O.forEach(function(U, K) {
        k[++R] = [K, U];
      }), k;
    }
    function zl(O, R) {
      return function(k) {
        return O(R(k));
      };
    }
    function rn(O, R) {
      for (var k = -1, U = O.length, K = 0, ct = []; ++k < U; ) {
        var Rt = O[k];
        (Rt === R || Rt === g) && (O[k] = g, ct[K++] = k);
      }
      return ct;
    }
    function ms(O) {
      var R = -1, k = Array(O.size);
      return O.forEach(function(U) {
        k[++R] = U;
      }), k;
    }
    function wg(O) {
      var R = -1, k = Array(O.size);
      return O.forEach(function(U) {
        k[++R] = [U, U];
      }), k;
    }
    function Sg(O, R, k) {
      for (var U = k - 1, K = O.length; ++U < K; )
        if (O[U] === R)
          return U;
      return -1;
    }
    function Mg(O, R, k) {
      for (var U = k + 1; U--; )
        if (O[U] === R)
          return U;
      return U;
    }
    function Gn(O) {
      return jn(O) ? Og(O) : cg(O);
    }
    function Me(O) {
      return jn(O) ? Pg(O) : hg(O);
    }
    function Wl(O) {
      for (var R = O.length; R-- && pd.test(O.charAt(R)); )
        ;
      return R;
    }
    var Ag = so(eg);
    function Og(O) {
      for (var R = Zr.lastIndex = 0; Zr.test(O); )
        ++R;
      return R;
    }
    function Pg(O) {
      return O.match(Zr) || [];
    }
    function Cg(O) {
      return O.match(Gd) || [];
    }
    var kg = function O(R) {
      R = R == null ? Wt : Kn.defaults(Wt.Object(), R, Kn.pick(Wt, Zd));
      var k = R.Array, U = R.Date, K = R.Error, ct = R.Function, Rt = R.Math, pt = R.Object, co = R.RegExp, Tg = R.String, ge = R.TypeError, _s = k.prototype, Dg = ct.prototype, qn = pt.prototype, bs = R["__core-js_shared__"], xs = Dg.toString, dt = qn.hasOwnProperty, Lg = 0, Nl = function() {
        var s = /[^.]+$/.exec(bs && bs.keys && bs.keys.IE_PROTO || "");
        return s ? "Symbol(src)_1." + s : "";
      }(), vs = qn.toString, Rg = xs.call(pt), Eg = Wt._, Ig = co(
        "^" + xs.call(dt).replace(Yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ys = Sl ? R.Buffer : e, on = R.Symbol, ws = R.Uint8Array, Hl = ys ? ys.allocUnsafe : e, Ss = zl(pt.getPrototypeOf, pt), Vl = pt.create, Ul = qn.propertyIsEnumerable, Ms = _s.splice, $l = on ? on.isConcatSpreadable : e, vi = on ? on.iterator : e, Mn = on ? on.toStringTag : e, As = function() {
        try {
          var s = kn(pt, "defineProperty");
          return s({}, "", {}), s;
        } catch {
        }
      }(), Fg = R.clearTimeout !== Wt.clearTimeout && R.clearTimeout, Bg = U && U.now !== Wt.Date.now && U.now, zg = R.setTimeout !== Wt.setTimeout && R.setTimeout, Os = Rt.ceil, Ps = Rt.floor, ho = pt.getOwnPropertySymbols, Wg = ys ? ys.isBuffer : e, Yl = R.isFinite, Ng = _s.join, Hg = zl(pt.keys, pt), Et = Rt.max, Vt = Rt.min, Vg = U.now, Ug = R.parseInt, Xl = Rt.random, $g = _s.reverse, uo = kn(R, "DataView"), yi = kn(R, "Map"), fo = kn(R, "Promise"), Zn = kn(R, "Set"), wi = kn(R, "WeakMap"), Si = kn(pt, "create"), Cs = wi && new wi(), Jn = {}, Yg = Tn(uo), Xg = Tn(yi), jg = Tn(fo), Gg = Tn(Zn), Kg = Tn(wi), ks = on ? on.prototype : e, Mi = ks ? ks.valueOf : e, jl = ks ? ks.toString : e;
      function b(s) {
        if (At(s) && !q(s) && !(s instanceof rt)) {
          if (s instanceof pe)
            return s;
          if (dt.call(s, "__wrapped__"))
            return Gc(s);
        }
        return new pe(s);
      }
      var Qn = function() {
        function s() {
        }
        return function(o) {
          if (!Mt(o))
            return {};
          if (Vl)
            return Vl(o);
          s.prototype = o;
          var h = new s();
          return s.prototype = e, h;
        };
      }();
      function Ts() {
      }
      function pe(s, o) {
        this.__wrapped__ = s, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = e;
      }
      b.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: cd,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: hd,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: nl,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: b
        }
      }, b.prototype = Ts.prototype, b.prototype.constructor = b, pe.prototype = Qn(Ts.prototype), pe.prototype.constructor = pe;
      function rt(s) {
        this.__wrapped__ = s, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = jt, this.__views__ = [];
      }
      function qg() {
        var s = new rt(this.__wrapped__);
        return s.__actions__ = Zt(this.__actions__), s.__dir__ = this.__dir__, s.__filtered__ = this.__filtered__, s.__iteratees__ = Zt(this.__iteratees__), s.__takeCount__ = this.__takeCount__, s.__views__ = Zt(this.__views__), s;
      }
      function Zg() {
        if (this.__filtered__) {
          var s = new rt(this);
          s.__dir__ = -1, s.__filtered__ = !0;
        } else
          s = this.clone(), s.__dir__ *= -1;
        return s;
      }
      function Jg() {
        var s = this.__wrapped__.value(), o = this.__dir__, h = q(s), d = o < 0, m = h ? s.length : 0, x = hm(0, m, this.__views__), w = x.start, A = x.end, P = A - w, E = d ? A : w - 1, I = this.__iteratees__, B = I.length, V = 0, $ = Vt(P, this.__takeCount__);
        if (!h || !d && m == P && $ == P)
          return _c(s, this.__actions__);
        var j = [];
        t:
          for (; P-- && V < $; ) {
            E += o;
            for (var et = -1, G = s[E]; ++et < B; ) {
              var it = I[et], at = it.iteratee, ae = it.type, qt = at(G);
              if (ae == ht)
                G = qt;
              else if (!qt) {
                if (ae == Ht)
                  continue t;
                break t;
              }
            }
            j[V++] = G;
          }
        return j;
      }
      rt.prototype = Qn(Ts.prototype), rt.prototype.constructor = rt;
      function An(s) {
        var o = -1, h = s == null ? 0 : s.length;
        for (this.clear(); ++o < h; ) {
          var d = s[o];
          this.set(d[0], d[1]);
        }
      }
      function Qg() {
        this.__data__ = Si ? Si(null) : {}, this.size = 0;
      }
      function tp(s) {
        var o = this.has(s) && delete this.__data__[s];
        return this.size -= o ? 1 : 0, o;
      }
      function ep(s) {
        var o = this.__data__;
        if (Si) {
          var h = o[s];
          return h === u ? e : h;
        }
        return dt.call(o, s) ? o[s] : e;
      }
      function np(s) {
        var o = this.__data__;
        return Si ? o[s] !== e : dt.call(o, s);
      }
      function ip(s, o) {
        var h = this.__data__;
        return this.size += this.has(s) ? 0 : 1, h[s] = Si && o === e ? u : o, this;
      }
      An.prototype.clear = Qg, An.prototype.delete = tp, An.prototype.get = ep, An.prototype.has = np, An.prototype.set = ip;
      function We(s) {
        var o = -1, h = s == null ? 0 : s.length;
        for (this.clear(); ++o < h; ) {
          var d = s[o];
          this.set(d[0], d[1]);
        }
      }
      function sp() {
        this.__data__ = [], this.size = 0;
      }
      function rp(s) {
        var o = this.__data__, h = Ds(o, s);
        if (h < 0)
          return !1;
        var d = o.length - 1;
        return h == d ? o.pop() : Ms.call(o, h, 1), --this.size, !0;
      }
      function op(s) {
        var o = this.__data__, h = Ds(o, s);
        return h < 0 ? e : o[h][1];
      }
      function ap(s) {
        return Ds(this.__data__, s) > -1;
      }
      function lp(s, o) {
        var h = this.__data__, d = Ds(h, s);
        return d < 0 ? (++this.size, h.push([s, o])) : h[d][1] = o, this;
      }
      We.prototype.clear = sp, We.prototype.delete = rp, We.prototype.get = op, We.prototype.has = ap, We.prototype.set = lp;
      function Ne(s) {
        var o = -1, h = s == null ? 0 : s.length;
        for (this.clear(); ++o < h; ) {
          var d = s[o];
          this.set(d[0], d[1]);
        }
      }
      function cp() {
        this.size = 0, this.__data__ = {
          hash: new An(),
          map: new (yi || We)(),
          string: new An()
        };
      }
      function hp(s) {
        var o = Us(this, s).delete(s);
        return this.size -= o ? 1 : 0, o;
      }
      function up(s) {
        return Us(this, s).get(s);
      }
      function fp(s) {
        return Us(this, s).has(s);
      }
      function dp(s, o) {
        var h = Us(this, s), d = h.size;
        return h.set(s, o), this.size += h.size == d ? 0 : 1, this;
      }
      Ne.prototype.clear = cp, Ne.prototype.delete = hp, Ne.prototype.get = up, Ne.prototype.has = fp, Ne.prototype.set = dp;
      function On(s) {
        var o = -1, h = s == null ? 0 : s.length;
        for (this.__data__ = new Ne(); ++o < h; )
          this.add(s[o]);
      }
      function gp(s) {
        return this.__data__.set(s, u), this;
      }
      function pp(s) {
        return this.__data__.has(s);
      }
      On.prototype.add = On.prototype.push = gp, On.prototype.has = pp;
      function Ae(s) {
        var o = this.__data__ = new We(s);
        this.size = o.size;
      }
      function mp() {
        this.__data__ = new We(), this.size = 0;
      }
      function _p(s) {
        var o = this.__data__, h = o.delete(s);
        return this.size = o.size, h;
      }
      function bp(s) {
        return this.__data__.get(s);
      }
      function xp(s) {
        return this.__data__.has(s);
      }
      function vp(s, o) {
        var h = this.__data__;
        if (h instanceof We) {
          var d = h.__data__;
          if (!yi || d.length < r - 1)
            return d.push([s, o]), this.size = ++h.size, this;
          h = this.__data__ = new Ne(d);
        }
        return h.set(s, o), this.size = h.size, this;
      }
      Ae.prototype.clear = mp, Ae.prototype.delete = _p, Ae.prototype.get = bp, Ae.prototype.has = xp, Ae.prototype.set = vp;
      function Gl(s, o) {
        var h = q(s), d = !h && Dn(s), m = !h && !d && un(s), x = !h && !d && !m && ii(s), w = h || d || m || x, A = w ? oo(s.length, Tg) : [], P = A.length;
        for (var E in s)
          (o || dt.call(s, E)) && !(w && // Safari 9 has enumerable `arguments.length` in strict mode.
          (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          x && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
          $e(E, P))) && A.push(E);
        return A;
      }
      function Kl(s) {
        var o = s.length;
        return o ? s[Mo(0, o - 1)] : e;
      }
      function yp(s, o) {
        return $s(Zt(s), Pn(o, 0, s.length));
      }
      function wp(s) {
        return $s(Zt(s));
      }
      function go(s, o, h) {
        (h !== e && !Oe(s[o], h) || h === e && !(o in s)) && He(s, o, h);
      }
      function Ai(s, o, h) {
        var d = s[o];
        (!(dt.call(s, o) && Oe(d, h)) || h === e && !(o in s)) && He(s, o, h);
      }
      function Ds(s, o) {
        for (var h = s.length; h--; )
          if (Oe(s[h][0], o))
            return h;
        return -1;
      }
      function Sp(s, o, h, d) {
        return an(s, function(m, x, w) {
          o(d, m, h(m), w);
        }), d;
      }
      function ql(s, o) {
        return s && Re(o, Bt(o), s);
      }
      function Mp(s, o) {
        return s && Re(o, Qt(o), s);
      }
      function He(s, o, h) {
        o == "__proto__" && As ? As(s, o, {
          configurable: !0,
          enumerable: !0,
          value: h,
          writable: !0
        }) : s[o] = h;
      }
      function po(s, o) {
        for (var h = -1, d = o.length, m = k(d), x = s == null; ++h < d; )
          m[h] = x ? e : Ko(s, o[h]);
        return m;
      }
      function Pn(s, o, h) {
        return s === s && (h !== e && (s = s <= h ? s : h), o !== e && (s = s >= o ? s : o)), s;
      }
      function me(s, o, h, d, m, x) {
        var w, A = o & p, P = o & _, E = o & v;
        if (h && (w = m ? h(s, d, m, x) : h(s)), w !== e)
          return w;
        if (!Mt(s))
          return s;
        var I = q(s);
        if (I) {
          if (w = fm(s), !A)
            return Zt(s, w);
        } else {
          var B = Ut(s), V = B == cs || B == Ja;
          if (un(s))
            return vc(s, A);
          if (B == ze || B == ue || V && !m) {
            if (w = P || V ? {} : Wc(s), !A)
              return P ? em(s, Mp(w, s)) : tm(s, ql(w, s));
          } else {
            if (!_t[B])
              return m ? s : {};
            w = dm(s, B, A);
          }
        }
        x || (x = new Ae());
        var $ = x.get(s);
        if ($)
          return $;
        x.set(s, w), gh(s) ? s.forEach(function(G) {
          w.add(me(G, o, h, G, s, x));
        }) : fh(s) && s.forEach(function(G, it) {
          w.set(it, me(G, o, h, it, s, x));
        });
        var j = E ? P ? Io : Eo : P ? Qt : Bt, et = I ? e : j(s);
        return de(et || s, function(G, it) {
          et && (it = G, G = s[it]), Ai(w, it, me(G, o, h, it, s, x));
        }), w;
      }
      function Ap(s) {
        var o = Bt(s);
        return function(h) {
          return Zl(h, s, o);
        };
      }
      function Zl(s, o, h) {
        var d = h.length;
        if (s == null)
          return !d;
        for (s = pt(s); d--; ) {
          var m = h[d], x = o[m], w = s[m];
          if (w === e && !(m in s) || !x(w))
            return !1;
        }
        return !0;
      }
      function Jl(s, o, h) {
        if (typeof s != "function")
          throw new ge(l);
        return Li(function() {
          s.apply(e, h);
        }, o);
      }
      function Oi(s, o, h, d) {
        var m = -1, x = gs, w = !0, A = s.length, P = [], E = o.length;
        if (!A)
          return P;
        h && (o = wt(o, se(h))), d ? (x = to, w = !1) : o.length >= r && (x = xi, w = !1, o = new On(o));
        t:
          for (; ++m < A; ) {
            var I = s[m], B = h == null ? I : h(I);
            if (I = d || I !== 0 ? I : 0, w && B === B) {
              for (var V = E; V--; )
                if (o[V] === B)
                  continue t;
              P.push(I);
            } else
              x(o, B, d) || P.push(I);
          }
        return P;
      }
      var an = Ac(Le), Ql = Ac(_o, !0);
      function Op(s, o) {
        var h = !0;
        return an(s, function(d, m, x) {
          return h = !!o(d, m, x), h;
        }), h;
      }
      function Ls(s, o, h) {
        for (var d = -1, m = s.length; ++d < m; ) {
          var x = s[d], w = o(x);
          if (w != null && (A === e ? w === w && !oe(w) : h(w, A)))
            var A = w, P = x;
        }
        return P;
      }
      function Pp(s, o, h, d) {
        var m = s.length;
        for (h = tt(h), h < 0 && (h = -h > m ? 0 : m + h), d = d === e || d > m ? m : tt(d), d < 0 && (d += m), d = h > d ? 0 : mh(d); h < d; )
          s[h++] = o;
        return s;
      }
      function tc(s, o) {
        var h = [];
        return an(s, function(d, m, x) {
          o(d, m, x) && h.push(d);
        }), h;
      }
      function Nt(s, o, h, d, m) {
        var x = -1, w = s.length;
        for (h || (h = pm), m || (m = []); ++x < w; ) {
          var A = s[x];
          o > 0 && h(A) ? o > 1 ? Nt(A, o - 1, h, d, m) : sn(m, A) : d || (m[m.length] = A);
        }
        return m;
      }
      var mo = Oc(), ec = Oc(!0);
      function Le(s, o) {
        return s && mo(s, o, Bt);
      }
      function _o(s, o) {
        return s && ec(s, o, Bt);
      }
      function Rs(s, o) {
        return nn(o, function(h) {
          return Ye(s[h]);
        });
      }
      function Cn(s, o) {
        o = cn(o, s);
        for (var h = 0, d = o.length; s != null && h < d; )
          s = s[Ee(o[h++])];
        return h && h == d ? s : e;
      }
      function nc(s, o, h) {
        var d = o(s);
        return q(s) ? d : sn(d, h(s));
      }
      function Gt(s) {
        return s == null ? s === e ? nd : td : Mn && Mn in pt(s) ? cm(s) : wm(s);
      }
      function bo(s, o) {
        return s > o;
      }
      function Cp(s, o) {
        return s != null && dt.call(s, o);
      }
      function kp(s, o) {
        return s != null && o in pt(s);
      }
      function Tp(s, o, h) {
        return s >= Vt(o, h) && s < Et(o, h);
      }
      function xo(s, o, h) {
        for (var d = h ? to : gs, m = s[0].length, x = s.length, w = x, A = k(x), P = 1 / 0, E = []; w--; ) {
          var I = s[w];
          w && o && (I = wt(I, se(o))), P = Vt(I.length, P), A[w] = !h && (o || m >= 120 && I.length >= 120) ? new On(w && I) : e;
        }
        I = s[0];
        var B = -1, V = A[0];
        t:
          for (; ++B < m && E.length < P; ) {
            var $ = I[B], j = o ? o($) : $;
            if ($ = h || $ !== 0 ? $ : 0, !(V ? xi(V, j) : d(E, j, h))) {
              for (w = x; --w; ) {
                var et = A[w];
                if (!(et ? xi(et, j) : d(s[w], j, h)))
                  continue t;
              }
              V && V.push(j), E.push($);
            }
          }
        return E;
      }
      function Dp(s, o, h, d) {
        return Le(s, function(m, x, w) {
          o(d, h(m), x, w);
        }), d;
      }
      function Pi(s, o, h) {
        o = cn(o, s), s = Uc(s, o);
        var d = s == null ? s : s[Ee(be(o))];
        return d == null ? e : ie(d, s, h);
      }
      function ic(s) {
        return At(s) && Gt(s) == ue;
      }
      function Lp(s) {
        return At(s) && Gt(s) == bi;
      }
      function Rp(s) {
        return At(s) && Gt(s) == di;
      }
      function Ci(s, o, h, d, m) {
        return s === o ? !0 : s == null || o == null || !At(s) && !At(o) ? s !== s && o !== o : Ep(s, o, h, d, Ci, m);
      }
      function Ep(s, o, h, d, m, x) {
        var w = q(s), A = q(o), P = w ? De : Ut(s), E = A ? De : Ut(o);
        P = P == ue ? ze : P, E = E == ue ? ze : E;
        var I = P == ze, B = E == ze, V = P == E;
        if (V && un(s)) {
          if (!un(o))
            return !1;
          w = !0, I = !1;
        }
        if (V && !I)
          return x || (x = new Ae()), w || ii(s) ? Fc(s, o, h, d, m, x) : am(s, o, P, h, d, m, x);
        if (!(h & y)) {
          var $ = I && dt.call(s, "__wrapped__"), j = B && dt.call(o, "__wrapped__");
          if ($ || j) {
            var et = $ ? s.value() : s, G = j ? o.value() : o;
            return x || (x = new Ae()), m(et, G, h, d, x);
          }
        }
        return V ? (x || (x = new Ae()), lm(s, o, h, d, m, x)) : !1;
      }
      function Ip(s) {
        return At(s) && Ut(s) == we;
      }
      function vo(s, o, h, d) {
        var m = h.length, x = m, w = !d;
        if (s == null)
          return !x;
        for (s = pt(s); m--; ) {
          var A = h[m];
          if (w && A[2] ? A[1] !== s[A[0]] : !(A[0] in s))
            return !1;
        }
        for (; ++m < x; ) {
          A = h[m];
          var P = A[0], E = s[P], I = A[1];
          if (w && A[2]) {
            if (E === e && !(P in s))
              return !1;
          } else {
            var B = new Ae();
            if (d)
              var V = d(E, I, P, s, o, B);
            if (!(V === e ? Ci(I, E, y | M, d, B) : V))
              return !1;
          }
        }
        return !0;
      }
      function sc(s) {
        if (!Mt(s) || _m(s))
          return !1;
        var o = Ye(s) ? Ig : Ad;
        return o.test(Tn(s));
      }
      function Fp(s) {
        return At(s) && Gt(s) == pi;
      }
      function Bp(s) {
        return At(s) && Ut(s) == Se;
      }
      function zp(s) {
        return At(s) && qs(s.length) && !!xt[Gt(s)];
      }
      function rc(s) {
        return typeof s == "function" ? s : s == null ? te : typeof s == "object" ? q(s) ? lc(s[0], s[1]) : ac(s) : Ph(s);
      }
      function yo(s) {
        if (!Di(s))
          return Hg(s);
        var o = [];
        for (var h in pt(s))
          dt.call(s, h) && h != "constructor" && o.push(h);
        return o;
      }
      function Wp(s) {
        if (!Mt(s))
          return ym(s);
        var o = Di(s), h = [];
        for (var d in s)
          d == "constructor" && (o || !dt.call(s, d)) || h.push(d);
        return h;
      }
      function wo(s, o) {
        return s < o;
      }
      function oc(s, o) {
        var h = -1, d = Jt(s) ? k(s.length) : [];
        return an(s, function(m, x, w) {
          d[++h] = o(m, x, w);
        }), d;
      }
      function ac(s) {
        var o = Bo(s);
        return o.length == 1 && o[0][2] ? Hc(o[0][0], o[0][1]) : function(h) {
          return h === s || vo(h, s, o);
        };
      }
      function lc(s, o) {
        return Wo(s) && Nc(o) ? Hc(Ee(s), o) : function(h) {
          var d = Ko(h, s);
          return d === e && d === o ? qo(h, s) : Ci(o, d, y | M);
        };
      }
      function Es(s, o, h, d, m) {
        s !== o && mo(o, function(x, w) {
          if (m || (m = new Ae()), Mt(x))
            Np(s, o, w, h, Es, d, m);
          else {
            var A = d ? d(Ho(s, w), x, w + "", s, o, m) : e;
            A === e && (A = x), go(s, w, A);
          }
        }, Qt);
      }
      function Np(s, o, h, d, m, x, w) {
        var A = Ho(s, h), P = Ho(o, h), E = w.get(P);
        if (E) {
          go(s, h, E);
          return;
        }
        var I = x ? x(A, P, h + "", s, o, w) : e, B = I === e;
        if (B) {
          var V = q(P), $ = !V && un(P), j = !V && !$ && ii(P);
          I = P, V || $ || j ? q(A) ? I = A : kt(A) ? I = Zt(A) : $ ? (B = !1, I = vc(P, !0)) : j ? (B = !1, I = yc(P, !0)) : I = [] : Ri(P) || Dn(P) ? (I = A, Dn(A) ? I = _h(A) : (!Mt(A) || Ye(A)) && (I = Wc(P))) : B = !1;
        }
        B && (w.set(P, I), m(I, P, d, x, w), w.delete(P)), go(s, h, I);
      }
      function cc(s, o) {
        var h = s.length;
        if (h)
          return o += o < 0 ? h : 0, $e(o, h) ? s[o] : e;
      }
      function hc(s, o, h) {
        o.length ? o = wt(o, function(x) {
          return q(x) ? function(w) {
            return Cn(w, x.length === 1 ? x[0] : x);
          } : x;
        }) : o = [te];
        var d = -1;
        o = wt(o, se(X()));
        var m = oc(s, function(x, w, A) {
          var P = wt(o, function(E) {
            return E(x);
          });
          return { criteria: P, index: ++d, value: x };
        });
        return dg(m, function(x, w) {
          return Qp(x, w, h);
        });
      }
      function Hp(s, o) {
        return uc(s, o, function(h, d) {
          return qo(s, d);
        });
      }
      function uc(s, o, h) {
        for (var d = -1, m = o.length, x = {}; ++d < m; ) {
          var w = o[d], A = Cn(s, w);
          h(A, w) && ki(x, cn(w, s), A);
        }
        return x;
      }
      function Vp(s) {
        return function(o) {
          return Cn(o, s);
        };
      }
      function So(s, o, h, d) {
        var m = d ? fg : Xn, x = -1, w = o.length, A = s;
        for (s === o && (o = Zt(o)), h && (A = wt(s, se(h))); ++x < w; )
          for (var P = 0, E = o[x], I = h ? h(E) : E; (P = m(A, I, P, d)) > -1; )
            A !== s && Ms.call(A, P, 1), Ms.call(s, P, 1);
        return s;
      }
      function fc(s, o) {
        for (var h = s ? o.length : 0, d = h - 1; h--; ) {
          var m = o[h];
          if (h == d || m !== x) {
            var x = m;
            $e(m) ? Ms.call(s, m, 1) : Po(s, m);
          }
        }
        return s;
      }
      function Mo(s, o) {
        return s + Ps(Xl() * (o - s + 1));
      }
      function Up(s, o, h, d) {
        for (var m = -1, x = Et(Os((o - s) / (h || 1)), 0), w = k(x); x--; )
          w[d ? x : ++m] = s, s += h;
        return w;
      }
      function Ao(s, o) {
        var h = "";
        if (!s || o < 1 || o > Dt)
          return h;
        do
          o % 2 && (h += s), o = Ps(o / 2), o && (s += s);
        while (o);
        return h;
      }
      function nt(s, o) {
        return Vo(Vc(s, o, te), s + "");
      }
      function $p(s) {
        return Kl(si(s));
      }
      function Yp(s, o) {
        var h = si(s);
        return $s(h, Pn(o, 0, h.length));
      }
      function ki(s, o, h, d) {
        if (!Mt(s))
          return s;
        o = cn(o, s);
        for (var m = -1, x = o.length, w = x - 1, A = s; A != null && ++m < x; ) {
          var P = Ee(o[m]), E = h;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return s;
          if (m != w) {
            var I = A[P];
            E = d ? d(I, P, A) : e, E === e && (E = Mt(I) ? I : $e(o[m + 1]) ? [] : {});
          }
          Ai(A, P, E), A = A[P];
        }
        return s;
      }
      var dc = Cs ? function(s, o) {
        return Cs.set(s, o), s;
      } : te, Xp = As ? function(s, o) {
        return As(s, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Jo(o),
          writable: !0
        });
      } : te;
      function jp(s) {
        return $s(si(s));
      }
      function _e(s, o, h) {
        var d = -1, m = s.length;
        o < 0 && (o = -o > m ? 0 : m + o), h = h > m ? m : h, h < 0 && (h += m), m = o > h ? 0 : h - o >>> 0, o >>>= 0;
        for (var x = k(m); ++d < m; )
          x[d] = s[d + o];
        return x;
      }
      function Gp(s, o) {
        var h;
        return an(s, function(d, m, x) {
          return h = o(d, m, x), !h;
        }), !!h;
      }
      function Is(s, o, h) {
        var d = 0, m = s == null ? d : s.length;
        if (typeof o == "number" && o === o && m <= yn) {
          for (; d < m; ) {
            var x = d + m >>> 1, w = s[x];
            w !== null && !oe(w) && (h ? w <= o : w < o) ? d = x + 1 : m = x;
          }
          return m;
        }
        return Oo(s, o, te, h);
      }
      function Oo(s, o, h, d) {
        var m = 0, x = s == null ? 0 : s.length;
        if (x === 0)
          return 0;
        o = h(o);
        for (var w = o !== o, A = o === null, P = oe(o), E = o === e; m < x; ) {
          var I = Ps((m + x) / 2), B = h(s[I]), V = B !== e, $ = B === null, j = B === B, et = oe(B);
          if (w)
            var G = d || j;
          else
            E ? G = j && (d || V) : A ? G = j && V && (d || !$) : P ? G = j && V && !$ && (d || !et) : $ || et ? G = !1 : G = d ? B <= o : B < o;
          G ? m = I + 1 : x = I;
        }
        return Vt(x, en);
      }
      function gc(s, o) {
        for (var h = -1, d = s.length, m = 0, x = []; ++h < d; ) {
          var w = s[h], A = o ? o(w) : w;
          if (!h || !Oe(A, P)) {
            var P = A;
            x[m++] = w === 0 ? 0 : w;
          }
        }
        return x;
      }
      function pc(s) {
        return typeof s == "number" ? s : oe(s) ? ye : +s;
      }
      function re(s) {
        if (typeof s == "string")
          return s;
        if (q(s))
          return wt(s, re) + "";
        if (oe(s))
          return jl ? jl.call(s) : "";
        var o = s + "";
        return o == "0" && 1 / s == -ft ? "-0" : o;
      }
      function ln(s, o, h) {
        var d = -1, m = gs, x = s.length, w = !0, A = [], P = A;
        if (h)
          w = !1, m = to;
        else if (x >= r) {
          var E = o ? null : rm(s);
          if (E)
            return ms(E);
          w = !1, m = xi, P = new On();
        } else
          P = o ? [] : A;
        t:
          for (; ++d < x; ) {
            var I = s[d], B = o ? o(I) : I;
            if (I = h || I !== 0 ? I : 0, w && B === B) {
              for (var V = P.length; V--; )
                if (P[V] === B)
                  continue t;
              o && P.push(B), A.push(I);
            } else
              m(P, B, h) || (P !== A && P.push(B), A.push(I));
          }
        return A;
      }
      function Po(s, o) {
        return o = cn(o, s), s = Uc(s, o), s == null || delete s[Ee(be(o))];
      }
      function mc(s, o, h, d) {
        return ki(s, o, h(Cn(s, o)), d);
      }
      function Fs(s, o, h, d) {
        for (var m = s.length, x = d ? m : -1; (d ? x-- : ++x < m) && o(s[x], x, s); )
          ;
        return h ? _e(s, d ? 0 : x, d ? x + 1 : m) : _e(s, d ? x + 1 : 0, d ? m : x);
      }
      function _c(s, o) {
        var h = s;
        return h instanceof rt && (h = h.value()), eo(o, function(d, m) {
          return m.func.apply(m.thisArg, sn([d], m.args));
        }, h);
      }
      function Co(s, o, h) {
        var d = s.length;
        if (d < 2)
          return d ? ln(s[0]) : [];
        for (var m = -1, x = k(d); ++m < d; )
          for (var w = s[m], A = -1; ++A < d; )
            A != m && (x[m] = Oi(x[m] || w, s[A], o, h));
        return ln(Nt(x, 1), o, h);
      }
      function bc(s, o, h) {
        for (var d = -1, m = s.length, x = o.length, w = {}; ++d < m; ) {
          var A = d < x ? o[d] : e;
          h(w, s[d], A);
        }
        return w;
      }
      function ko(s) {
        return kt(s) ? s : [];
      }
      function To(s) {
        return typeof s == "function" ? s : te;
      }
      function cn(s, o) {
        return q(s) ? s : Wo(s, o) ? [s] : jc(ut(s));
      }
      var Kp = nt;
      function hn(s, o, h) {
        var d = s.length;
        return h = h === e ? d : h, !o && h >= d ? s : _e(s, o, h);
      }
      var xc = Fg || function(s) {
        return Wt.clearTimeout(s);
      };
      function vc(s, o) {
        if (o)
          return s.slice();
        var h = s.length, d = Hl ? Hl(h) : new s.constructor(h);
        return s.copy(d), d;
      }
      function Do(s) {
        var o = new s.constructor(s.byteLength);
        return new ws(o).set(new ws(s)), o;
      }
      function qp(s, o) {
        var h = o ? Do(s.buffer) : s.buffer;
        return new s.constructor(h, s.byteOffset, s.byteLength);
      }
      function Zp(s) {
        var o = new s.constructor(s.source, il.exec(s));
        return o.lastIndex = s.lastIndex, o;
      }
      function Jp(s) {
        return Mi ? pt(Mi.call(s)) : {};
      }
      function yc(s, o) {
        var h = o ? Do(s.buffer) : s.buffer;
        return new s.constructor(h, s.byteOffset, s.length);
      }
      function wc(s, o) {
        if (s !== o) {
          var h = s !== e, d = s === null, m = s === s, x = oe(s), w = o !== e, A = o === null, P = o === o, E = oe(o);
          if (!A && !E && !x && s > o || x && w && P && !A && !E || d && w && P || !h && P || !m)
            return 1;
          if (!d && !x && !E && s < o || E && h && m && !d && !x || A && h && m || !w && m || !P)
            return -1;
        }
        return 0;
      }
      function Qp(s, o, h) {
        for (var d = -1, m = s.criteria, x = o.criteria, w = m.length, A = h.length; ++d < w; ) {
          var P = wc(m[d], x[d]);
          if (P) {
            if (d >= A)
              return P;
            var E = h[d];
            return P * (E == "desc" ? -1 : 1);
          }
        }
        return s.index - o.index;
      }
      function Sc(s, o, h, d) {
        for (var m = -1, x = s.length, w = h.length, A = -1, P = o.length, E = Et(x - w, 0), I = k(P + E), B = !d; ++A < P; )
          I[A] = o[A];
        for (; ++m < w; )
          (B || m < x) && (I[h[m]] = s[m]);
        for (; E--; )
          I[A++] = s[m++];
        return I;
      }
      function Mc(s, o, h, d) {
        for (var m = -1, x = s.length, w = -1, A = h.length, P = -1, E = o.length, I = Et(x - A, 0), B = k(I + E), V = !d; ++m < I; )
          B[m] = s[m];
        for (var $ = m; ++P < E; )
          B[$ + P] = o[P];
        for (; ++w < A; )
          (V || m < x) && (B[$ + h[w]] = s[m++]);
        return B;
      }
      function Zt(s, o) {
        var h = -1, d = s.length;
        for (o || (o = k(d)); ++h < d; )
          o[h] = s[h];
        return o;
      }
      function Re(s, o, h, d) {
        var m = !h;
        h || (h = {});
        for (var x = -1, w = o.length; ++x < w; ) {
          var A = o[x], P = d ? d(h[A], s[A], A, h, s) : e;
          P === e && (P = s[A]), m ? He(h, A, P) : Ai(h, A, P);
        }
        return h;
      }
      function tm(s, o) {
        return Re(s, zo(s), o);
      }
      function em(s, o) {
        return Re(s, Bc(s), o);
      }
      function Bs(s, o) {
        return function(h, d) {
          var m = q(h) ? og : Sp, x = o ? o() : {};
          return m(h, s, X(d, 2), x);
        };
      }
      function ti(s) {
        return nt(function(o, h) {
          var d = -1, m = h.length, x = m > 1 ? h[m - 1] : e, w = m > 2 ? h[2] : e;
          for (x = s.length > 3 && typeof x == "function" ? (m--, x) : e, w && Kt(h[0], h[1], w) && (x = m < 3 ? e : x, m = 1), o = pt(o); ++d < m; ) {
            var A = h[d];
            A && s(o, A, d, x);
          }
          return o;
        });
      }
      function Ac(s, o) {
        return function(h, d) {
          if (h == null)
            return h;
          if (!Jt(h))
            return s(h, d);
          for (var m = h.length, x = o ? m : -1, w = pt(h); (o ? x-- : ++x < m) && d(w[x], x, w) !== !1; )
            ;
          return h;
        };
      }
      function Oc(s) {
        return function(o, h, d) {
          for (var m = -1, x = pt(o), w = d(o), A = w.length; A--; ) {
            var P = w[s ? A : ++m];
            if (h(x[P], P, x) === !1)
              break;
          }
          return o;
        };
      }
      function nm(s, o, h) {
        var d = o & S, m = Ti(s);
        function x() {
          var w = this && this !== Wt && this instanceof x ? m : s;
          return w.apply(d ? h : this, arguments);
        }
        return x;
      }
      function Pc(s) {
        return function(o) {
          o = ut(o);
          var h = jn(o) ? Me(o) : e, d = h ? h[0] : o.charAt(0), m = h ? hn(h, 1).join("") : o.slice(1);
          return d[s]() + m;
        };
      }
      function ei(s) {
        return function(o) {
          return eo(Ah(Mh(o).replace(Xd, "")), s, "");
        };
      }
      function Ti(s) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new s();
            case 1:
              return new s(o[0]);
            case 2:
              return new s(o[0], o[1]);
            case 3:
              return new s(o[0], o[1], o[2]);
            case 4:
              return new s(o[0], o[1], o[2], o[3]);
            case 5:
              return new s(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new s(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new s(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var h = Qn(s.prototype), d = s.apply(h, o);
          return Mt(d) ? d : h;
        };
      }
      function im(s, o, h) {
        var d = Ti(s);
        function m() {
          for (var x = arguments.length, w = k(x), A = x, P = ni(m); A--; )
            w[A] = arguments[A];
          var E = x < 3 && w[0] !== P && w[x - 1] !== P ? [] : rn(w, P);
          if (x -= E.length, x < h)
            return Lc(
              s,
              o,
              zs,
              m.placeholder,
              e,
              w,
              E,
              e,
              e,
              h - x
            );
          var I = this && this !== Wt && this instanceof m ? d : s;
          return ie(I, this, w);
        }
        return m;
      }
      function Cc(s) {
        return function(o, h, d) {
          var m = pt(o);
          if (!Jt(o)) {
            var x = X(h, 3);
            o = Bt(o), h = function(A) {
              return x(m[A], A, m);
            };
          }
          var w = s(o, h, d);
          return w > -1 ? m[x ? o[w] : w] : e;
        };
      }
      function kc(s) {
        return Ue(function(o) {
          var h = o.length, d = h, m = pe.prototype.thru;
          for (s && o.reverse(); d--; ) {
            var x = o[d];
            if (typeof x != "function")
              throw new ge(l);
            if (m && !w && Vs(x) == "wrapper")
              var w = new pe([], !0);
          }
          for (d = w ? d : h; ++d < h; ) {
            x = o[d];
            var A = Vs(x), P = A == "wrapper" ? Fo(x) : e;
            P && No(P[0]) && P[1] == (z | D | L | H) && !P[4].length && P[9] == 1 ? w = w[Vs(P[0])].apply(w, P[3]) : w = x.length == 1 && No(x) ? w[A]() : w.thru(x);
          }
          return function() {
            var E = arguments, I = E[0];
            if (w && E.length == 1 && q(I))
              return w.plant(I).value();
            for (var B = 0, V = h ? o[B].apply(this, E) : I; ++B < h; )
              V = o[B].call(this, V);
            return V;
          };
        });
      }
      function zs(s, o, h, d, m, x, w, A, P, E) {
        var I = o & z, B = o & S, V = o & C, $ = o & (D | F), j = o & Y, et = V ? e : Ti(s);
        function G() {
          for (var it = arguments.length, at = k(it), ae = it; ae--; )
            at[ae] = arguments[ae];
          if ($)
            var qt = ni(G), le = pg(at, qt);
          if (d && (at = Sc(at, d, m, $)), x && (at = Mc(at, x, w, $)), it -= le, $ && it < E) {
            var Tt = rn(at, qt);
            return Lc(
              s,
              o,
              zs,
              G.placeholder,
              h,
              at,
              Tt,
              A,
              P,
              E - it
            );
          }
          var Pe = B ? h : this, je = V ? Pe[s] : s;
          return it = at.length, A ? at = Sm(at, A) : j && it > 1 && at.reverse(), I && P < it && (at.length = P), this && this !== Wt && this instanceof G && (je = et || Ti(je)), je.apply(Pe, at);
        }
        return G;
      }
      function Tc(s, o) {
        return function(h, d) {
          return Dp(h, s, o(d), {});
        };
      }
      function Ws(s, o) {
        return function(h, d) {
          var m;
          if (h === e && d === e)
            return o;
          if (h !== e && (m = h), d !== e) {
            if (m === e)
              return d;
            typeof h == "string" || typeof d == "string" ? (h = re(h), d = re(d)) : (h = pc(h), d = pc(d)), m = s(h, d);
          }
          return m;
        };
      }
      function Lo(s) {
        return Ue(function(o) {
          return o = wt(o, se(X())), nt(function(h) {
            var d = this;
            return s(o, function(m) {
              return ie(m, d, h);
            });
          });
        });
      }
      function Ns(s, o) {
        o = o === e ? " " : re(o);
        var h = o.length;
        if (h < 2)
          return h ? Ao(o, s) : o;
        var d = Ao(o, Os(s / Gn(o)));
        return jn(o) ? hn(Me(d), 0, s).join("") : d.slice(0, s);
      }
      function sm(s, o, h, d) {
        var m = o & S, x = Ti(s);
        function w() {
          for (var A = -1, P = arguments.length, E = -1, I = d.length, B = k(I + P), V = this && this !== Wt && this instanceof w ? x : s; ++E < I; )
            B[E] = d[E];
          for (; P--; )
            B[E++] = arguments[++A];
          return ie(V, m ? h : this, B);
        }
        return w;
      }
      function Dc(s) {
        return function(o, h, d) {
          return d && typeof d != "number" && Kt(o, h, d) && (h = d = e), o = Xe(o), h === e ? (h = o, o = 0) : h = Xe(h), d = d === e ? o < h ? 1 : -1 : Xe(d), Up(o, h, d, s);
        };
      }
      function Hs(s) {
        return function(o, h) {
          return typeof o == "string" && typeof h == "string" || (o = xe(o), h = xe(h)), s(o, h);
        };
      }
      function Lc(s, o, h, d, m, x, w, A, P, E) {
        var I = o & D, B = I ? w : e, V = I ? e : w, $ = I ? x : e, j = I ? e : x;
        o |= I ? L : W, o &= ~(I ? W : L), o & T || (o &= ~(S | C));
        var et = [
          s,
          o,
          m,
          $,
          B,
          j,
          V,
          A,
          P,
          E
        ], G = h.apply(e, et);
        return No(s) && $c(G, et), G.placeholder = d, Yc(G, s, o);
      }
      function Ro(s) {
        var o = Rt[s];
        return function(h, d) {
          if (h = xe(h), d = d == null ? 0 : Vt(tt(d), 292), d && Yl(h)) {
            var m = (ut(h) + "e").split("e"), x = o(m[0] + "e" + (+m[1] + d));
            return m = (ut(x) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return o(h);
        };
      }
      var rm = Zn && 1 / ms(new Zn([, -0]))[1] == ft ? function(s) {
        return new Zn(s);
      } : ea;
      function Rc(s) {
        return function(o) {
          var h = Ut(o);
          return h == we ? lo(o) : h == Se ? wg(o) : gg(o, s(o));
        };
      }
      function Ve(s, o, h, d, m, x, w, A) {
        var P = o & C;
        if (!P && typeof s != "function")
          throw new ge(l);
        var E = d ? d.length : 0;
        if (E || (o &= ~(L | W), d = m = e), w = w === e ? w : Et(tt(w), 0), A = A === e ? A : tt(A), E -= m ? m.length : 0, o & W) {
          var I = d, B = m;
          d = m = e;
        }
        var V = P ? e : Fo(s), $ = [
          s,
          o,
          h,
          d,
          m,
          I,
          B,
          x,
          w,
          A
        ];
        if (V && vm($, V), s = $[0], o = $[1], h = $[2], d = $[3], m = $[4], A = $[9] = $[9] === e ? P ? 0 : s.length : Et($[9] - E, 0), !A && o & (D | F) && (o &= ~(D | F)), !o || o == S)
          var j = nm(s, o, h);
        else
          o == D || o == F ? j = im(s, o, A) : (o == L || o == (S | L)) && !m.length ? j = sm(s, o, h, d) : j = zs.apply(e, $);
        var et = V ? dc : $c;
        return Yc(et(j, $), s, o);
      }
      function Ec(s, o, h, d) {
        return s === e || Oe(s, qn[h]) && !dt.call(d, h) ? o : s;
      }
      function Ic(s, o, h, d, m, x) {
        return Mt(s) && Mt(o) && (x.set(o, s), Es(s, o, e, Ic, x), x.delete(o)), s;
      }
      function om(s) {
        return Ri(s) ? e : s;
      }
      function Fc(s, o, h, d, m, x) {
        var w = h & y, A = s.length, P = o.length;
        if (A != P && !(w && P > A))
          return !1;
        var E = x.get(s), I = x.get(o);
        if (E && I)
          return E == o && I == s;
        var B = -1, V = !0, $ = h & M ? new On() : e;
        for (x.set(s, o), x.set(o, s); ++B < A; ) {
          var j = s[B], et = o[B];
          if (d)
            var G = w ? d(et, j, B, o, s, x) : d(j, et, B, s, o, x);
          if (G !== e) {
            if (G)
              continue;
            V = !1;
            break;
          }
          if ($) {
            if (!no(o, function(it, at) {
              if (!xi($, at) && (j === it || m(j, it, h, d, x)))
                return $.push(at);
            })) {
              V = !1;
              break;
            }
          } else if (!(j === et || m(j, et, h, d, x))) {
            V = !1;
            break;
          }
        }
        return x.delete(s), x.delete(o), V;
      }
      function am(s, o, h, d, m, x, w) {
        switch (h) {
          case $n:
            if (s.byteLength != o.byteLength || s.byteOffset != o.byteOffset)
              return !1;
            s = s.buffer, o = o.buffer;
          case bi:
            return !(s.byteLength != o.byteLength || !x(new ws(s), new ws(o)));
          case fi:
          case di:
          case gi:
            return Oe(+s, +o);
          case ls:
            return s.name == o.name && s.message == o.message;
          case pi:
          case mi:
            return s == o + "";
          case we:
            var A = lo;
          case Se:
            var P = d & y;
            if (A || (A = ms), s.size != o.size && !P)
              return !1;
            var E = w.get(s);
            if (E)
              return E == o;
            d |= M, w.set(s, o);
            var I = Fc(A(s), A(o), d, m, x, w);
            return w.delete(s), I;
          case hs:
            if (Mi)
              return Mi.call(s) == Mi.call(o);
        }
        return !1;
      }
      function lm(s, o, h, d, m, x) {
        var w = h & y, A = Eo(s), P = A.length, E = Eo(o), I = E.length;
        if (P != I && !w)
          return !1;
        for (var B = P; B--; ) {
          var V = A[B];
          if (!(w ? V in o : dt.call(o, V)))
            return !1;
        }
        var $ = x.get(s), j = x.get(o);
        if ($ && j)
          return $ == o && j == s;
        var et = !0;
        x.set(s, o), x.set(o, s);
        for (var G = w; ++B < P; ) {
          V = A[B];
          var it = s[V], at = o[V];
          if (d)
            var ae = w ? d(at, it, V, o, s, x) : d(it, at, V, s, o, x);
          if (!(ae === e ? it === at || m(it, at, h, d, x) : ae)) {
            et = !1;
            break;
          }
          G || (G = V == "constructor");
        }
        if (et && !G) {
          var qt = s.constructor, le = o.constructor;
          qt != le && "constructor" in s && "constructor" in o && !(typeof qt == "function" && qt instanceof qt && typeof le == "function" && le instanceof le) && (et = !1);
        }
        return x.delete(s), x.delete(o), et;
      }
      function Ue(s) {
        return Vo(Vc(s, e, Zc), s + "");
      }
      function Eo(s) {
        return nc(s, Bt, zo);
      }
      function Io(s) {
        return nc(s, Qt, Bc);
      }
      var Fo = Cs ? function(s) {
        return Cs.get(s);
      } : ea;
      function Vs(s) {
        for (var o = s.name + "", h = Jn[o], d = dt.call(Jn, o) ? h.length : 0; d--; ) {
          var m = h[d], x = m.func;
          if (x == null || x == s)
            return m.name;
        }
        return o;
      }
      function ni(s) {
        var o = dt.call(b, "placeholder") ? b : s;
        return o.placeholder;
      }
      function X() {
        var s = b.iteratee || Qo;
        return s = s === Qo ? rc : s, arguments.length ? s(arguments[0], arguments[1]) : s;
      }
      function Us(s, o) {
        var h = s.__data__;
        return mm(o) ? h[typeof o == "string" ? "string" : "hash"] : h.map;
      }
      function Bo(s) {
        for (var o = Bt(s), h = o.length; h--; ) {
          var d = o[h], m = s[d];
          o[h] = [d, m, Nc(m)];
        }
        return o;
      }
      function kn(s, o) {
        var h = xg(s, o);
        return sc(h) ? h : e;
      }
      function cm(s) {
        var o = dt.call(s, Mn), h = s[Mn];
        try {
          s[Mn] = e;
          var d = !0;
        } catch {
        }
        var m = vs.call(s);
        return d && (o ? s[Mn] = h : delete s[Mn]), m;
      }
      var zo = ho ? function(s) {
        return s == null ? [] : (s = pt(s), nn(ho(s), function(o) {
          return Ul.call(s, o);
        }));
      } : na, Bc = ho ? function(s) {
        for (var o = []; s; )
          sn(o, zo(s)), s = Ss(s);
        return o;
      } : na, Ut = Gt;
      (uo && Ut(new uo(new ArrayBuffer(1))) != $n || yi && Ut(new yi()) != we || fo && Ut(fo.resolve()) != Qa || Zn && Ut(new Zn()) != Se || wi && Ut(new wi()) != _i) && (Ut = function(s) {
        var o = Gt(s), h = o == ze ? s.constructor : e, d = h ? Tn(h) : "";
        if (d)
          switch (d) {
            case Yg:
              return $n;
            case Xg:
              return we;
            case jg:
              return Qa;
            case Gg:
              return Se;
            case Kg:
              return _i;
          }
        return o;
      });
      function hm(s, o, h) {
        for (var d = -1, m = h.length; ++d < m; ) {
          var x = h[d], w = x.size;
          switch (x.type) {
            case "drop":
              s += w;
              break;
            case "dropRight":
              o -= w;
              break;
            case "take":
              o = Vt(o, s + w);
              break;
            case "takeRight":
              s = Et(s, o - w);
              break;
          }
        }
        return { start: s, end: o };
      }
      function um(s) {
        var o = s.match(_d);
        return o ? o[1].split(bd) : [];
      }
      function zc(s, o, h) {
        o = cn(o, s);
        for (var d = -1, m = o.length, x = !1; ++d < m; ) {
          var w = Ee(o[d]);
          if (!(x = s != null && h(s, w)))
            break;
          s = s[w];
        }
        return x || ++d != m ? x : (m = s == null ? 0 : s.length, !!m && qs(m) && $e(w, m) && (q(s) || Dn(s)));
      }
      function fm(s) {
        var o = s.length, h = new s.constructor(o);
        return o && typeof s[0] == "string" && dt.call(s, "index") && (h.index = s.index, h.input = s.input), h;
      }
      function Wc(s) {
        return typeof s.constructor == "function" && !Di(s) ? Qn(Ss(s)) : {};
      }
      function dm(s, o, h) {
        var d = s.constructor;
        switch (o) {
          case bi:
            return Do(s);
          case fi:
          case di:
            return new d(+s);
          case $n:
            return qp(s, h);
          case Fr:
          case Br:
          case zr:
          case Wr:
          case Nr:
          case Hr:
          case Vr:
          case Ur:
          case $r:
            return yc(s, h);
          case we:
            return new d();
          case gi:
          case mi:
            return new d(s);
          case pi:
            return Zp(s);
          case Se:
            return new d();
          case hs:
            return Jp(s);
        }
      }
      function gm(s, o) {
        var h = o.length;
        if (!h)
          return s;
        var d = h - 1;
        return o[d] = (h > 1 ? "& " : "") + o[d], o = o.join(h > 2 ? ", " : " "), s.replace(md, `{
/* [wrapped with ` + o + `] */
`);
      }
      function pm(s) {
        return q(s) || Dn(s) || !!($l && s && s[$l]);
      }
      function $e(s, o) {
        var h = typeof s;
        return o = o ?? Dt, !!o && (h == "number" || h != "symbol" && Pd.test(s)) && s > -1 && s % 1 == 0 && s < o;
      }
      function Kt(s, o, h) {
        if (!Mt(h))
          return !1;
        var d = typeof o;
        return (d == "number" ? Jt(h) && $e(o, h.length) : d == "string" && o in h) ? Oe(h[o], s) : !1;
      }
      function Wo(s, o) {
        if (q(s))
          return !1;
        var h = typeof s;
        return h == "number" || h == "symbol" || h == "boolean" || s == null || oe(s) ? !0 : fd.test(s) || !ud.test(s) || o != null && s in pt(o);
      }
      function mm(s) {
        var o = typeof s;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? s !== "__proto__" : s === null;
      }
      function No(s) {
        var o = Vs(s), h = b[o];
        if (typeof h != "function" || !(o in rt.prototype))
          return !1;
        if (s === h)
          return !0;
        var d = Fo(h);
        return !!d && s === d[0];
      }
      function _m(s) {
        return !!Nl && Nl in s;
      }
      var bm = bs ? Ye : ia;
      function Di(s) {
        var o = s && s.constructor, h = typeof o == "function" && o.prototype || qn;
        return s === h;
      }
      function Nc(s) {
        return s === s && !Mt(s);
      }
      function Hc(s, o) {
        return function(h) {
          return h == null ? !1 : h[s] === o && (o !== e || s in pt(h));
        };
      }
      function xm(s) {
        var o = Gs(s, function(d) {
          return h.size === f && h.clear(), d;
        }), h = o.cache;
        return o;
      }
      function vm(s, o) {
        var h = s[1], d = o[1], m = h | d, x = m < (S | C | z), w = d == z && h == D || d == z && h == H && s[7].length <= o[8] || d == (z | H) && o[7].length <= o[8] && h == D;
        if (!(x || w))
          return s;
        d & S && (s[2] = o[2], m |= h & S ? 0 : T);
        var A = o[3];
        if (A) {
          var P = s[3];
          s[3] = P ? Sc(P, A, o[4]) : A, s[4] = P ? rn(s[3], g) : o[4];
        }
        return A = o[5], A && (P = s[5], s[5] = P ? Mc(P, A, o[6]) : A, s[6] = P ? rn(s[5], g) : o[6]), A = o[7], A && (s[7] = A), d & z && (s[8] = s[8] == null ? o[8] : Vt(s[8], o[8])), s[9] == null && (s[9] = o[9]), s[0] = o[0], s[1] = m, s;
      }
      function ym(s) {
        var o = [];
        if (s != null)
          for (var h in pt(s))
            o.push(h);
        return o;
      }
      function wm(s) {
        return vs.call(s);
      }
      function Vc(s, o, h) {
        return o = Et(o === e ? s.length - 1 : o, 0), function() {
          for (var d = arguments, m = -1, x = Et(d.length - o, 0), w = k(x); ++m < x; )
            w[m] = d[o + m];
          m = -1;
          for (var A = k(o + 1); ++m < o; )
            A[m] = d[m];
          return A[o] = h(w), ie(s, this, A);
        };
      }
      function Uc(s, o) {
        return o.length < 2 ? s : Cn(s, _e(o, 0, -1));
      }
      function Sm(s, o) {
        for (var h = s.length, d = Vt(o.length, h), m = Zt(s); d--; ) {
          var x = o[d];
          s[d] = $e(x, h) ? m[x] : e;
        }
        return s;
      }
      function Ho(s, o) {
        if (!(o === "constructor" && typeof s[o] == "function") && o != "__proto__")
          return s[o];
      }
      var $c = Xc(dc), Li = zg || function(s, o) {
        return Wt.setTimeout(s, o);
      }, Vo = Xc(Xp);
      function Yc(s, o, h) {
        var d = o + "";
        return Vo(s, gm(d, Mm(um(d), h)));
      }
      function Xc(s) {
        var o = 0, h = 0;
        return function() {
          var d = Vg(), m = Lt - (d - h);
          if (h = d, m > 0) {
            if (++o >= st)
              return arguments[0];
          } else
            o = 0;
          return s.apply(e, arguments);
        };
      }
      function $s(s, o) {
        var h = -1, d = s.length, m = d - 1;
        for (o = o === e ? d : o; ++h < o; ) {
          var x = Mo(h, m), w = s[x];
          s[x] = s[h], s[h] = w;
        }
        return s.length = o, s;
      }
      var jc = xm(function(s) {
        var o = [];
        return s.charCodeAt(0) === 46 && o.push(""), s.replace(dd, function(h, d, m, x) {
          o.push(m ? x.replace(yd, "$1") : d || h);
        }), o;
      });
      function Ee(s) {
        if (typeof s == "string" || oe(s))
          return s;
        var o = s + "";
        return o == "0" && 1 / s == -ft ? "-0" : o;
      }
      function Tn(s) {
        if (s != null) {
          try {
            return xs.call(s);
          } catch {
          }
          try {
            return s + "";
          } catch {
          }
        }
        return "";
      }
      function Mm(s, o) {
        return de(wn, function(h) {
          var d = "_." + h[0];
          o & h[1] && !gs(s, d) && s.push(d);
        }), s.sort();
      }
      function Gc(s) {
        if (s instanceof rt)
          return s.clone();
        var o = new pe(s.__wrapped__, s.__chain__);
        return o.__actions__ = Zt(s.__actions__), o.__index__ = s.__index__, o.__values__ = s.__values__, o;
      }
      function Am(s, o, h) {
        (h ? Kt(s, o, h) : o === e) ? o = 1 : o = Et(tt(o), 0);
        var d = s == null ? 0 : s.length;
        if (!d || o < 1)
          return [];
        for (var m = 0, x = 0, w = k(Os(d / o)); m < d; )
          w[x++] = _e(s, m, m += o);
        return w;
      }
      function Om(s) {
        for (var o = -1, h = s == null ? 0 : s.length, d = 0, m = []; ++o < h; ) {
          var x = s[o];
          x && (m[d++] = x);
        }
        return m;
      }
      function Pm() {
        var s = arguments.length;
        if (!s)
          return [];
        for (var o = k(s - 1), h = arguments[0], d = s; d--; )
          o[d - 1] = arguments[d];
        return sn(q(h) ? Zt(h) : [h], Nt(o, 1));
      }
      var Cm = nt(function(s, o) {
        return kt(s) ? Oi(s, Nt(o, 1, kt, !0)) : [];
      }), km = nt(function(s, o) {
        var h = be(o);
        return kt(h) && (h = e), kt(s) ? Oi(s, Nt(o, 1, kt, !0), X(h, 2)) : [];
      }), Tm = nt(function(s, o) {
        var h = be(o);
        return kt(h) && (h = e), kt(s) ? Oi(s, Nt(o, 1, kt, !0), e, h) : [];
      });
      function Dm(s, o, h) {
        var d = s == null ? 0 : s.length;
        return d ? (o = h || o === e ? 1 : tt(o), _e(s, o < 0 ? 0 : o, d)) : [];
      }
      function Lm(s, o, h) {
        var d = s == null ? 0 : s.length;
        return d ? (o = h || o === e ? 1 : tt(o), o = d - o, _e(s, 0, o < 0 ? 0 : o)) : [];
      }
      function Rm(s, o) {
        return s && s.length ? Fs(s, X(o, 3), !0, !0) : [];
      }
      function Em(s, o) {
        return s && s.length ? Fs(s, X(o, 3), !0) : [];
      }
      function Im(s, o, h, d) {
        var m = s == null ? 0 : s.length;
        return m ? (h && typeof h != "number" && Kt(s, o, h) && (h = 0, d = m), Pp(s, o, h, d)) : [];
      }
      function Kc(s, o, h) {
        var d = s == null ? 0 : s.length;
        if (!d)
          return -1;
        var m = h == null ? 0 : tt(h);
        return m < 0 && (m = Et(d + m, 0)), ps(s, X(o, 3), m);
      }
      function qc(s, o, h) {
        var d = s == null ? 0 : s.length;
        if (!d)
          return -1;
        var m = d - 1;
        return h !== e && (m = tt(h), m = h < 0 ? Et(d + m, 0) : Vt(m, d - 1)), ps(s, X(o, 3), m, !0);
      }
      function Zc(s) {
        var o = s == null ? 0 : s.length;
        return o ? Nt(s, 1) : [];
      }
      function Fm(s) {
        var o = s == null ? 0 : s.length;
        return o ? Nt(s, ft) : [];
      }
      function Bm(s, o) {
        var h = s == null ? 0 : s.length;
        return h ? (o = o === e ? 1 : tt(o), Nt(s, o)) : [];
      }
      function zm(s) {
        for (var o = -1, h = s == null ? 0 : s.length, d = {}; ++o < h; ) {
          var m = s[o];
          d[m[0]] = m[1];
        }
        return d;
      }
      function Jc(s) {
        return s && s.length ? s[0] : e;
      }
      function Wm(s, o, h) {
        var d = s == null ? 0 : s.length;
        if (!d)
          return -1;
        var m = h == null ? 0 : tt(h);
        return m < 0 && (m = Et(d + m, 0)), Xn(s, o, m);
      }
      function Nm(s) {
        var o = s == null ? 0 : s.length;
        return o ? _e(s, 0, -1) : [];
      }
      var Hm = nt(function(s) {
        var o = wt(s, ko);
        return o.length && o[0] === s[0] ? xo(o) : [];
      }), Vm = nt(function(s) {
        var o = be(s), h = wt(s, ko);
        return o === be(h) ? o = e : h.pop(), h.length && h[0] === s[0] ? xo(h, X(o, 2)) : [];
      }), Um = nt(function(s) {
        var o = be(s), h = wt(s, ko);
        return o = typeof o == "function" ? o : e, o && h.pop(), h.length && h[0] === s[0] ? xo(h, e, o) : [];
      });
      function $m(s, o) {
        return s == null ? "" : Ng.call(s, o);
      }
      function be(s) {
        var o = s == null ? 0 : s.length;
        return o ? s[o - 1] : e;
      }
      function Ym(s, o, h) {
        var d = s == null ? 0 : s.length;
        if (!d)
          return -1;
        var m = d;
        return h !== e && (m = tt(h), m = m < 0 ? Et(d + m, 0) : Vt(m, d - 1)), o === o ? Mg(s, o, m) : ps(s, Ll, m, !0);
      }
      function Xm(s, o) {
        return s && s.length ? cc(s, tt(o)) : e;
      }
      var jm = nt(Qc);
      function Qc(s, o) {
        return s && s.length && o && o.length ? So(s, o) : s;
      }
      function Gm(s, o, h) {
        return s && s.length && o && o.length ? So(s, o, X(h, 2)) : s;
      }
      function Km(s, o, h) {
        return s && s.length && o && o.length ? So(s, o, e, h) : s;
      }
      var qm = Ue(function(s, o) {
        var h = s == null ? 0 : s.length, d = po(s, o);
        return fc(s, wt(o, function(m) {
          return $e(m, h) ? +m : m;
        }).sort(wc)), d;
      });
      function Zm(s, o) {
        var h = [];
        if (!(s && s.length))
          return h;
        var d = -1, m = [], x = s.length;
        for (o = X(o, 3); ++d < x; ) {
          var w = s[d];
          o(w, d, s) && (h.push(w), m.push(d));
        }
        return fc(s, m), h;
      }
      function Uo(s) {
        return s == null ? s : $g.call(s);
      }
      function Jm(s, o, h) {
        var d = s == null ? 0 : s.length;
        return d ? (h && typeof h != "number" && Kt(s, o, h) ? (o = 0, h = d) : (o = o == null ? 0 : tt(o), h = h === e ? d : tt(h)), _e(s, o, h)) : [];
      }
      function Qm(s, o) {
        return Is(s, o);
      }
      function t_(s, o, h) {
        return Oo(s, o, X(h, 2));
      }
      function e_(s, o) {
        var h = s == null ? 0 : s.length;
        if (h) {
          var d = Is(s, o);
          if (d < h && Oe(s[d], o))
            return d;
        }
        return -1;
      }
      function n_(s, o) {
        return Is(s, o, !0);
      }
      function i_(s, o, h) {
        return Oo(s, o, X(h, 2), !0);
      }
      function s_(s, o) {
        var h = s == null ? 0 : s.length;
        if (h) {
          var d = Is(s, o, !0) - 1;
          if (Oe(s[d], o))
            return d;
        }
        return -1;
      }
      function r_(s) {
        return s && s.length ? gc(s) : [];
      }
      function o_(s, o) {
        return s && s.length ? gc(s, X(o, 2)) : [];
      }
      function a_(s) {
        var o = s == null ? 0 : s.length;
        return o ? _e(s, 1, o) : [];
      }
      function l_(s, o, h) {
        return s && s.length ? (o = h || o === e ? 1 : tt(o), _e(s, 0, o < 0 ? 0 : o)) : [];
      }
      function c_(s, o, h) {
        var d = s == null ? 0 : s.length;
        return d ? (o = h || o === e ? 1 : tt(o), o = d - o, _e(s, o < 0 ? 0 : o, d)) : [];
      }
      function h_(s, o) {
        return s && s.length ? Fs(s, X(o, 3), !1, !0) : [];
      }
      function u_(s, o) {
        return s && s.length ? Fs(s, X(o, 3)) : [];
      }
      var f_ = nt(function(s) {
        return ln(Nt(s, 1, kt, !0));
      }), d_ = nt(function(s) {
        var o = be(s);
        return kt(o) && (o = e), ln(Nt(s, 1, kt, !0), X(o, 2));
      }), g_ = nt(function(s) {
        var o = be(s);
        return o = typeof o == "function" ? o : e, ln(Nt(s, 1, kt, !0), e, o);
      });
      function p_(s) {
        return s && s.length ? ln(s) : [];
      }
      function m_(s, o) {
        return s && s.length ? ln(s, X(o, 2)) : [];
      }
      function __(s, o) {
        return o = typeof o == "function" ? o : e, s && s.length ? ln(s, e, o) : [];
      }
      function $o(s) {
        if (!(s && s.length))
          return [];
        var o = 0;
        return s = nn(s, function(h) {
          if (kt(h))
            return o = Et(h.length, o), !0;
        }), oo(o, function(h) {
          return wt(s, io(h));
        });
      }
      function th(s, o) {
        if (!(s && s.length))
          return [];
        var h = $o(s);
        return o == null ? h : wt(h, function(d) {
          return ie(o, e, d);
        });
      }
      var b_ = nt(function(s, o) {
        return kt(s) ? Oi(s, o) : [];
      }), x_ = nt(function(s) {
        return Co(nn(s, kt));
      }), v_ = nt(function(s) {
        var o = be(s);
        return kt(o) && (o = e), Co(nn(s, kt), X(o, 2));
      }), y_ = nt(function(s) {
        var o = be(s);
        return o = typeof o == "function" ? o : e, Co(nn(s, kt), e, o);
      }), w_ = nt($o);
      function S_(s, o) {
        return bc(s || [], o || [], Ai);
      }
      function M_(s, o) {
        return bc(s || [], o || [], ki);
      }
      var A_ = nt(function(s) {
        var o = s.length, h = o > 1 ? s[o - 1] : e;
        return h = typeof h == "function" ? (s.pop(), h) : e, th(s, h);
      });
      function eh(s) {
        var o = b(s);
        return o.__chain__ = !0, o;
      }
      function O_(s, o) {
        return o(s), s;
      }
      function Ys(s, o) {
        return o(s);
      }
      var P_ = Ue(function(s) {
        var o = s.length, h = o ? s[0] : 0, d = this.__wrapped__, m = function(x) {
          return po(x, s);
        };
        return o > 1 || this.__actions__.length || !(d instanceof rt) || !$e(h) ? this.thru(m) : (d = d.slice(h, +h + (o ? 1 : 0)), d.__actions__.push({
          func: Ys,
          args: [m],
          thisArg: e
        }), new pe(d, this.__chain__).thru(function(x) {
          return o && !x.length && x.push(e), x;
        }));
      });
      function C_() {
        return eh(this);
      }
      function k_() {
        return new pe(this.value(), this.__chain__);
      }
      function T_() {
        this.__values__ === e && (this.__values__ = ph(this.value()));
        var s = this.__index__ >= this.__values__.length, o = s ? e : this.__values__[this.__index__++];
        return { done: s, value: o };
      }
      function D_() {
        return this;
      }
      function L_(s) {
        for (var o, h = this; h instanceof Ts; ) {
          var d = Gc(h);
          d.__index__ = 0, d.__values__ = e, o ? m.__wrapped__ = d : o = d;
          var m = d;
          h = h.__wrapped__;
        }
        return m.__wrapped__ = s, o;
      }
      function R_() {
        var s = this.__wrapped__;
        if (s instanceof rt) {
          var o = s;
          return this.__actions__.length && (o = new rt(this)), o = o.reverse(), o.__actions__.push({
            func: Ys,
            args: [Uo],
            thisArg: e
          }), new pe(o, this.__chain__);
        }
        return this.thru(Uo);
      }
      function E_() {
        return _c(this.__wrapped__, this.__actions__);
      }
      var I_ = Bs(function(s, o, h) {
        dt.call(s, h) ? ++s[h] : He(s, h, 1);
      });
      function F_(s, o, h) {
        var d = q(s) ? Tl : Op;
        return h && Kt(s, o, h) && (o = e), d(s, X(o, 3));
      }
      function B_(s, o) {
        var h = q(s) ? nn : tc;
        return h(s, X(o, 3));
      }
      var z_ = Cc(Kc), W_ = Cc(qc);
      function N_(s, o) {
        return Nt(Xs(s, o), 1);
      }
      function H_(s, o) {
        return Nt(Xs(s, o), ft);
      }
      function V_(s, o, h) {
        return h = h === e ? 1 : tt(h), Nt(Xs(s, o), h);
      }
      function nh(s, o) {
        var h = q(s) ? de : an;
        return h(s, X(o, 3));
      }
      function ih(s, o) {
        var h = q(s) ? ag : Ql;
        return h(s, X(o, 3));
      }
      var U_ = Bs(function(s, o, h) {
        dt.call(s, h) ? s[h].push(o) : He(s, h, [o]);
      });
      function $_(s, o, h, d) {
        s = Jt(s) ? s : si(s), h = h && !d ? tt(h) : 0;
        var m = s.length;
        return h < 0 && (h = Et(m + h, 0)), Zs(s) ? h <= m && s.indexOf(o, h) > -1 : !!m && Xn(s, o, h) > -1;
      }
      var Y_ = nt(function(s, o, h) {
        var d = -1, m = typeof o == "function", x = Jt(s) ? k(s.length) : [];
        return an(s, function(w) {
          x[++d] = m ? ie(o, w, h) : Pi(w, o, h);
        }), x;
      }), X_ = Bs(function(s, o, h) {
        He(s, h, o);
      });
      function Xs(s, o) {
        var h = q(s) ? wt : oc;
        return h(s, X(o, 3));
      }
      function j_(s, o, h, d) {
        return s == null ? [] : (q(o) || (o = o == null ? [] : [o]), h = d ? e : h, q(h) || (h = h == null ? [] : [h]), hc(s, o, h));
      }
      var G_ = Bs(function(s, o, h) {
        s[h ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function K_(s, o, h) {
        var d = q(s) ? eo : El, m = arguments.length < 3;
        return d(s, X(o, 4), h, m, an);
      }
      function q_(s, o, h) {
        var d = q(s) ? lg : El, m = arguments.length < 3;
        return d(s, X(o, 4), h, m, Ql);
      }
      function Z_(s, o) {
        var h = q(s) ? nn : tc;
        return h(s, Ks(X(o, 3)));
      }
      function J_(s) {
        var o = q(s) ? Kl : $p;
        return o(s);
      }
      function Q_(s, o, h) {
        (h ? Kt(s, o, h) : o === e) ? o = 1 : o = tt(o);
        var d = q(s) ? yp : Yp;
        return d(s, o);
      }
      function t0(s) {
        var o = q(s) ? wp : jp;
        return o(s);
      }
      function e0(s) {
        if (s == null)
          return 0;
        if (Jt(s))
          return Zs(s) ? Gn(s) : s.length;
        var o = Ut(s);
        return o == we || o == Se ? s.size : yo(s).length;
      }
      function n0(s, o, h) {
        var d = q(s) ? no : Gp;
        return h && Kt(s, o, h) && (o = e), d(s, X(o, 3));
      }
      var i0 = nt(function(s, o) {
        if (s == null)
          return [];
        var h = o.length;
        return h > 1 && Kt(s, o[0], o[1]) ? o = [] : h > 2 && Kt(o[0], o[1], o[2]) && (o = [o[0]]), hc(s, Nt(o, 1), []);
      }), js = Bg || function() {
        return Wt.Date.now();
      };
      function s0(s, o) {
        if (typeof o != "function")
          throw new ge(l);
        return s = tt(s), function() {
          if (--s < 1)
            return o.apply(this, arguments);
        };
      }
      function sh(s, o, h) {
        return o = h ? e : o, o = s && o == null ? s.length : o, Ve(s, z, e, e, e, e, o);
      }
      function rh(s, o) {
        var h;
        if (typeof o != "function")
          throw new ge(l);
        return s = tt(s), function() {
          return --s > 0 && (h = o.apply(this, arguments)), s <= 1 && (o = e), h;
        };
      }
      var Yo = nt(function(s, o, h) {
        var d = S;
        if (h.length) {
          var m = rn(h, ni(Yo));
          d |= L;
        }
        return Ve(s, d, o, h, m);
      }), oh = nt(function(s, o, h) {
        var d = S | C;
        if (h.length) {
          var m = rn(h, ni(oh));
          d |= L;
        }
        return Ve(o, d, s, h, m);
      });
      function ah(s, o, h) {
        o = h ? e : o;
        var d = Ve(s, D, e, e, e, e, e, o);
        return d.placeholder = ah.placeholder, d;
      }
      function lh(s, o, h) {
        o = h ? e : o;
        var d = Ve(s, F, e, e, e, e, e, o);
        return d.placeholder = lh.placeholder, d;
      }
      function ch(s, o, h) {
        var d, m, x, w, A, P, E = 0, I = !1, B = !1, V = !0;
        if (typeof s != "function")
          throw new ge(l);
        o = xe(o) || 0, Mt(h) && (I = !!h.leading, B = "maxWait" in h, x = B ? Et(xe(h.maxWait) || 0, o) : x, V = "trailing" in h ? !!h.trailing : V);
        function $(Tt) {
          var Pe = d, je = m;
          return d = m = e, E = Tt, w = s.apply(je, Pe), w;
        }
        function j(Tt) {
          return E = Tt, A = Li(it, o), I ? $(Tt) : w;
        }
        function et(Tt) {
          var Pe = Tt - P, je = Tt - E, Ch = o - Pe;
          return B ? Vt(Ch, x - je) : Ch;
        }
        function G(Tt) {
          var Pe = Tt - P, je = Tt - E;
          return P === e || Pe >= o || Pe < 0 || B && je >= x;
        }
        function it() {
          var Tt = js();
          if (G(Tt))
            return at(Tt);
          A = Li(it, et(Tt));
        }
        function at(Tt) {
          return A = e, V && d ? $(Tt) : (d = m = e, w);
        }
        function ae() {
          A !== e && xc(A), E = 0, d = P = m = A = e;
        }
        function qt() {
          return A === e ? w : at(js());
        }
        function le() {
          var Tt = js(), Pe = G(Tt);
          if (d = arguments, m = this, P = Tt, Pe) {
            if (A === e)
              return j(P);
            if (B)
              return xc(A), A = Li(it, o), $(P);
          }
          return A === e && (A = Li(it, o)), w;
        }
        return le.cancel = ae, le.flush = qt, le;
      }
      var r0 = nt(function(s, o) {
        return Jl(s, 1, o);
      }), o0 = nt(function(s, o, h) {
        return Jl(s, xe(o) || 0, h);
      });
      function a0(s) {
        return Ve(s, Y);
      }
      function Gs(s, o) {
        if (typeof s != "function" || o != null && typeof o != "function")
          throw new ge(l);
        var h = function() {
          var d = arguments, m = o ? o.apply(this, d) : d[0], x = h.cache;
          if (x.has(m))
            return x.get(m);
          var w = s.apply(this, d);
          return h.cache = x.set(m, w) || x, w;
        };
        return h.cache = new (Gs.Cache || Ne)(), h;
      }
      Gs.Cache = Ne;
      function Ks(s) {
        if (typeof s != "function")
          throw new ge(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !s.call(this);
            case 1:
              return !s.call(this, o[0]);
            case 2:
              return !s.call(this, o[0], o[1]);
            case 3:
              return !s.call(this, o[0], o[1], o[2]);
          }
          return !s.apply(this, o);
        };
      }
      function l0(s) {
        return rh(2, s);
      }
      var c0 = Kp(function(s, o) {
        o = o.length == 1 && q(o[0]) ? wt(o[0], se(X())) : wt(Nt(o, 1), se(X()));
        var h = o.length;
        return nt(function(d) {
          for (var m = -1, x = Vt(d.length, h); ++m < x; )
            d[m] = o[m].call(this, d[m]);
          return ie(s, this, d);
        });
      }), Xo = nt(function(s, o) {
        var h = rn(o, ni(Xo));
        return Ve(s, L, e, o, h);
      }), hh = nt(function(s, o) {
        var h = rn(o, ni(hh));
        return Ve(s, W, e, o, h);
      }), h0 = Ue(function(s, o) {
        return Ve(s, H, e, e, e, o);
      });
      function u0(s, o) {
        if (typeof s != "function")
          throw new ge(l);
        return o = o === e ? o : tt(o), nt(s, o);
      }
      function f0(s, o) {
        if (typeof s != "function")
          throw new ge(l);
        return o = o == null ? 0 : Et(tt(o), 0), nt(function(h) {
          var d = h[o], m = hn(h, 0, o);
          return d && sn(m, d), ie(s, this, m);
        });
      }
      function d0(s, o, h) {
        var d = !0, m = !0;
        if (typeof s != "function")
          throw new ge(l);
        return Mt(h) && (d = "leading" in h ? !!h.leading : d, m = "trailing" in h ? !!h.trailing : m), ch(s, o, {
          leading: d,
          maxWait: o,
          trailing: m
        });
      }
      function g0(s) {
        return sh(s, 1);
      }
      function p0(s, o) {
        return Xo(To(o), s);
      }
      function m0() {
        if (!arguments.length)
          return [];
        var s = arguments[0];
        return q(s) ? s : [s];
      }
      function _0(s) {
        return me(s, v);
      }
      function b0(s, o) {
        return o = typeof o == "function" ? o : e, me(s, v, o);
      }
      function x0(s) {
        return me(s, p | v);
      }
      function v0(s, o) {
        return o = typeof o == "function" ? o : e, me(s, p | v, o);
      }
      function y0(s, o) {
        return o == null || Zl(s, o, Bt(o));
      }
      function Oe(s, o) {
        return s === o || s !== s && o !== o;
      }
      var w0 = Hs(bo), S0 = Hs(function(s, o) {
        return s >= o;
      }), Dn = ic(function() {
        return arguments;
      }()) ? ic : function(s) {
        return At(s) && dt.call(s, "callee") && !Ul.call(s, "callee");
      }, q = k.isArray, M0 = Ml ? se(Ml) : Lp;
      function Jt(s) {
        return s != null && qs(s.length) && !Ye(s);
      }
      function kt(s) {
        return At(s) && Jt(s);
      }
      function A0(s) {
        return s === !0 || s === !1 || At(s) && Gt(s) == fi;
      }
      var un = Wg || ia, O0 = Al ? se(Al) : Rp;
      function P0(s) {
        return At(s) && s.nodeType === 1 && !Ri(s);
      }
      function C0(s) {
        if (s == null)
          return !0;
        if (Jt(s) && (q(s) || typeof s == "string" || typeof s.splice == "function" || un(s) || ii(s) || Dn(s)))
          return !s.length;
        var o = Ut(s);
        if (o == we || o == Se)
          return !s.size;
        if (Di(s))
          return !yo(s).length;
        for (var h in s)
          if (dt.call(s, h))
            return !1;
        return !0;
      }
      function k0(s, o) {
        return Ci(s, o);
      }
      function T0(s, o, h) {
        h = typeof h == "function" ? h : e;
        var d = h ? h(s, o) : e;
        return d === e ? Ci(s, o, e, h) : !!d;
      }
      function jo(s) {
        if (!At(s))
          return !1;
        var o = Gt(s);
        return o == ls || o == Qf || typeof s.message == "string" && typeof s.name == "string" && !Ri(s);
      }
      function D0(s) {
        return typeof s == "number" && Yl(s);
      }
      function Ye(s) {
        if (!Mt(s))
          return !1;
        var o = Gt(s);
        return o == cs || o == Ja || o == Jf || o == ed;
      }
      function uh(s) {
        return typeof s == "number" && s == tt(s);
      }
      function qs(s) {
        return typeof s == "number" && s > -1 && s % 1 == 0 && s <= Dt;
      }
      function Mt(s) {
        var o = typeof s;
        return s != null && (o == "object" || o == "function");
      }
      function At(s) {
        return s != null && typeof s == "object";
      }
      var fh = Ol ? se(Ol) : Ip;
      function L0(s, o) {
        return s === o || vo(s, o, Bo(o));
      }
      function R0(s, o, h) {
        return h = typeof h == "function" ? h : e, vo(s, o, Bo(o), h);
      }
      function E0(s) {
        return dh(s) && s != +s;
      }
      function I0(s) {
        if (bm(s))
          throw new K(a);
        return sc(s);
      }
      function F0(s) {
        return s === null;
      }
      function B0(s) {
        return s == null;
      }
      function dh(s) {
        return typeof s == "number" || At(s) && Gt(s) == gi;
      }
      function Ri(s) {
        if (!At(s) || Gt(s) != ze)
          return !1;
        var o = Ss(s);
        if (o === null)
          return !0;
        var h = dt.call(o, "constructor") && o.constructor;
        return typeof h == "function" && h instanceof h && xs.call(h) == Rg;
      }
      var Go = Pl ? se(Pl) : Fp;
      function z0(s) {
        return uh(s) && s >= -Dt && s <= Dt;
      }
      var gh = Cl ? se(Cl) : Bp;
      function Zs(s) {
        return typeof s == "string" || !q(s) && At(s) && Gt(s) == mi;
      }
      function oe(s) {
        return typeof s == "symbol" || At(s) && Gt(s) == hs;
      }
      var ii = kl ? se(kl) : zp;
      function W0(s) {
        return s === e;
      }
      function N0(s) {
        return At(s) && Ut(s) == _i;
      }
      function H0(s) {
        return At(s) && Gt(s) == id;
      }
      var V0 = Hs(wo), U0 = Hs(function(s, o) {
        return s <= o;
      });
      function ph(s) {
        if (!s)
          return [];
        if (Jt(s))
          return Zs(s) ? Me(s) : Zt(s);
        if (vi && s[vi])
          return yg(s[vi]());
        var o = Ut(s), h = o == we ? lo : o == Se ? ms : si;
        return h(s);
      }
      function Xe(s) {
        if (!s)
          return s === 0 ? s : 0;
        if (s = xe(s), s === ft || s === -ft) {
          var o = s < 0 ? -1 : 1;
          return o * Ft;
        }
        return s === s ? s : 0;
      }
      function tt(s) {
        var o = Xe(s), h = o % 1;
        return o === o ? h ? o - h : o : 0;
      }
      function mh(s) {
        return s ? Pn(tt(s), 0, jt) : 0;
      }
      function xe(s) {
        if (typeof s == "number")
          return s;
        if (oe(s))
          return ye;
        if (Mt(s)) {
          var o = typeof s.valueOf == "function" ? s.valueOf() : s;
          s = Mt(o) ? o + "" : o;
        }
        if (typeof s != "string")
          return s === 0 ? s : +s;
        s = Il(s);
        var h = Md.test(s);
        return h || Od.test(s) ? sg(s.slice(2), h ? 2 : 8) : Sd.test(s) ? ye : +s;
      }
      function _h(s) {
        return Re(s, Qt(s));
      }
      function $0(s) {
        return s ? Pn(tt(s), -Dt, Dt) : s === 0 ? s : 0;
      }
      function ut(s) {
        return s == null ? "" : re(s);
      }
      var Y0 = ti(function(s, o) {
        if (Di(o) || Jt(o)) {
          Re(o, Bt(o), s);
          return;
        }
        for (var h in o)
          dt.call(o, h) && Ai(s, h, o[h]);
      }), bh = ti(function(s, o) {
        Re(o, Qt(o), s);
      }), Js = ti(function(s, o, h, d) {
        Re(o, Qt(o), s, d);
      }), X0 = ti(function(s, o, h, d) {
        Re(o, Bt(o), s, d);
      }), j0 = Ue(po);
      function G0(s, o) {
        var h = Qn(s);
        return o == null ? h : ql(h, o);
      }
      var K0 = nt(function(s, o) {
        s = pt(s);
        var h = -1, d = o.length, m = d > 2 ? o[2] : e;
        for (m && Kt(o[0], o[1], m) && (d = 1); ++h < d; )
          for (var x = o[h], w = Qt(x), A = -1, P = w.length; ++A < P; ) {
            var E = w[A], I = s[E];
            (I === e || Oe(I, qn[E]) && !dt.call(s, E)) && (s[E] = x[E]);
          }
        return s;
      }), q0 = nt(function(s) {
        return s.push(e, Ic), ie(xh, e, s);
      });
      function Z0(s, o) {
        return Dl(s, X(o, 3), Le);
      }
      function J0(s, o) {
        return Dl(s, X(o, 3), _o);
      }
      function Q0(s, o) {
        return s == null ? s : mo(s, X(o, 3), Qt);
      }
      function tb(s, o) {
        return s == null ? s : ec(s, X(o, 3), Qt);
      }
      function eb(s, o) {
        return s && Le(s, X(o, 3));
      }
      function nb(s, o) {
        return s && _o(s, X(o, 3));
      }
      function ib(s) {
        return s == null ? [] : Rs(s, Bt(s));
      }
      function sb(s) {
        return s == null ? [] : Rs(s, Qt(s));
      }
      function Ko(s, o, h) {
        var d = s == null ? e : Cn(s, o);
        return d === e ? h : d;
      }
      function rb(s, o) {
        return s != null && zc(s, o, Cp);
      }
      function qo(s, o) {
        return s != null && zc(s, o, kp);
      }
      var ob = Tc(function(s, o, h) {
        o != null && typeof o.toString != "function" && (o = vs.call(o)), s[o] = h;
      }, Jo(te)), ab = Tc(function(s, o, h) {
        o != null && typeof o.toString != "function" && (o = vs.call(o)), dt.call(s, o) ? s[o].push(h) : s[o] = [h];
      }, X), lb = nt(Pi);
      function Bt(s) {
        return Jt(s) ? Gl(s) : yo(s);
      }
      function Qt(s) {
        return Jt(s) ? Gl(s, !0) : Wp(s);
      }
      function cb(s, o) {
        var h = {};
        return o = X(o, 3), Le(s, function(d, m, x) {
          He(h, o(d, m, x), d);
        }), h;
      }
      function hb(s, o) {
        var h = {};
        return o = X(o, 3), Le(s, function(d, m, x) {
          He(h, m, o(d, m, x));
        }), h;
      }
      var ub = ti(function(s, o, h) {
        Es(s, o, h);
      }), xh = ti(function(s, o, h, d) {
        Es(s, o, h, d);
      }), fb = Ue(function(s, o) {
        var h = {};
        if (s == null)
          return h;
        var d = !1;
        o = wt(o, function(x) {
          return x = cn(x, s), d || (d = x.length > 1), x;
        }), Re(s, Io(s), h), d && (h = me(h, p | _ | v, om));
        for (var m = o.length; m--; )
          Po(h, o[m]);
        return h;
      });
      function db(s, o) {
        return vh(s, Ks(X(o)));
      }
      var gb = Ue(function(s, o) {
        return s == null ? {} : Hp(s, o);
      });
      function vh(s, o) {
        if (s == null)
          return {};
        var h = wt(Io(s), function(d) {
          return [d];
        });
        return o = X(o), uc(s, h, function(d, m) {
          return o(d, m[0]);
        });
      }
      function pb(s, o, h) {
        o = cn(o, s);
        var d = -1, m = o.length;
        for (m || (m = 1, s = e); ++d < m; ) {
          var x = s == null ? e : s[Ee(o[d])];
          x === e && (d = m, x = h), s = Ye(x) ? x.call(s) : x;
        }
        return s;
      }
      function mb(s, o, h) {
        return s == null ? s : ki(s, o, h);
      }
      function _b(s, o, h, d) {
        return d = typeof d == "function" ? d : e, s == null ? s : ki(s, o, h, d);
      }
      var yh = Rc(Bt), wh = Rc(Qt);
      function bb(s, o, h) {
        var d = q(s), m = d || un(s) || ii(s);
        if (o = X(o, 4), h == null) {
          var x = s && s.constructor;
          m ? h = d ? new x() : [] : Mt(s) ? h = Ye(x) ? Qn(Ss(s)) : {} : h = {};
        }
        return (m ? de : Le)(s, function(w, A, P) {
          return o(h, w, A, P);
        }), h;
      }
      function xb(s, o) {
        return s == null ? !0 : Po(s, o);
      }
      function vb(s, o, h) {
        return s == null ? s : mc(s, o, To(h));
      }
      function yb(s, o, h, d) {
        return d = typeof d == "function" ? d : e, s == null ? s : mc(s, o, To(h), d);
      }
      function si(s) {
        return s == null ? [] : ao(s, Bt(s));
      }
      function wb(s) {
        return s == null ? [] : ao(s, Qt(s));
      }
      function Sb(s, o, h) {
        return h === e && (h = o, o = e), h !== e && (h = xe(h), h = h === h ? h : 0), o !== e && (o = xe(o), o = o === o ? o : 0), Pn(xe(s), o, h);
      }
      function Mb(s, o, h) {
        return o = Xe(o), h === e ? (h = o, o = 0) : h = Xe(h), s = xe(s), Tp(s, o, h);
      }
      function Ab(s, o, h) {
        if (h && typeof h != "boolean" && Kt(s, o, h) && (o = h = e), h === e && (typeof o == "boolean" ? (h = o, o = e) : typeof s == "boolean" && (h = s, s = e)), s === e && o === e ? (s = 0, o = 1) : (s = Xe(s), o === e ? (o = s, s = 0) : o = Xe(o)), s > o) {
          var d = s;
          s = o, o = d;
        }
        if (h || s % 1 || o % 1) {
          var m = Xl();
          return Vt(s + m * (o - s + ig("1e-" + ((m + "").length - 1))), o);
        }
        return Mo(s, o);
      }
      var Ob = ei(function(s, o, h) {
        return o = o.toLowerCase(), s + (h ? Sh(o) : o);
      });
      function Sh(s) {
        return Zo(ut(s).toLowerCase());
      }
      function Mh(s) {
        return s = ut(s), s && s.replace(Cd, mg).replace(jd, "");
      }
      function Pb(s, o, h) {
        s = ut(s), o = re(o);
        var d = s.length;
        h = h === e ? d : Pn(tt(h), 0, d);
        var m = h;
        return h -= o.length, h >= 0 && s.slice(h, m) == o;
      }
      function Cb(s) {
        return s = ut(s), s && ld.test(s) ? s.replace(el, _g) : s;
      }
      function kb(s) {
        return s = ut(s), s && gd.test(s) ? s.replace(Yr, "\\$&") : s;
      }
      var Tb = ei(function(s, o, h) {
        return s + (h ? "-" : "") + o.toLowerCase();
      }), Db = ei(function(s, o, h) {
        return s + (h ? " " : "") + o.toLowerCase();
      }), Lb = Pc("toLowerCase");
      function Rb(s, o, h) {
        s = ut(s), o = tt(o);
        var d = o ? Gn(s) : 0;
        if (!o || d >= o)
          return s;
        var m = (o - d) / 2;
        return Ns(Ps(m), h) + s + Ns(Os(m), h);
      }
      function Eb(s, o, h) {
        s = ut(s), o = tt(o);
        var d = o ? Gn(s) : 0;
        return o && d < o ? s + Ns(o - d, h) : s;
      }
      function Ib(s, o, h) {
        s = ut(s), o = tt(o);
        var d = o ? Gn(s) : 0;
        return o && d < o ? Ns(o - d, h) + s : s;
      }
      function Fb(s, o, h) {
        return h || o == null ? o = 0 : o && (o = +o), Ug(ut(s).replace(Xr, ""), o || 0);
      }
      function Bb(s, o, h) {
        return (h ? Kt(s, o, h) : o === e) ? o = 1 : o = tt(o), Ao(ut(s), o);
      }
      function zb() {
        var s = arguments, o = ut(s[0]);
        return s.length < 3 ? o : o.replace(s[1], s[2]);
      }
      var Wb = ei(function(s, o, h) {
        return s + (h ? "_" : "") + o.toLowerCase();
      });
      function Nb(s, o, h) {
        return h && typeof h != "number" && Kt(s, o, h) && (o = h = e), h = h === e ? jt : h >>> 0, h ? (s = ut(s), s && (typeof o == "string" || o != null && !Go(o)) && (o = re(o), !o && jn(s)) ? hn(Me(s), 0, h) : s.split(o, h)) : [];
      }
      var Hb = ei(function(s, o, h) {
        return s + (h ? " " : "") + Zo(o);
      });
      function Vb(s, o, h) {
        return s = ut(s), h = h == null ? 0 : Pn(tt(h), 0, s.length), o = re(o), s.slice(h, h + o.length) == o;
      }
      function Ub(s, o, h) {
        var d = b.templateSettings;
        h && Kt(s, o, h) && (o = e), s = ut(s), o = Js({}, o, d, Ec);
        var m = Js({}, o.imports, d.imports, Ec), x = Bt(m), w = ao(m, x), A, P, E = 0, I = o.interpolate || us, B = "__p += '", V = co(
          (o.escape || us).source + "|" + I.source + "|" + (I === nl ? wd : us).source + "|" + (o.evaluate || us).source + "|$",
          "g"
        ), $ = "//# sourceURL=" + (dt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Jd + "]") + `
`;
        s.replace(V, function(G, it, at, ae, qt, le) {
          return at || (at = ae), B += s.slice(E, le).replace(kd, bg), it && (A = !0, B += `' +
__e(` + it + `) +
'`), qt && (P = !0, B += `';
` + qt + `;
__p += '`), at && (B += `' +
((__t = (` + at + `)) == null ? '' : __t) +
'`), E = le + G.length, G;
        }), B += `';
`;
        var j = dt.call(o, "variable") && o.variable;
        if (!j)
          B = `with (obj) {
` + B + `
}
`;
        else if (vd.test(j))
          throw new K(c);
        B = (P ? B.replace(sd, "") : B).replace(rd, "$1").replace(od, "$1;"), B = "function(" + (j || "obj") + `) {
` + (j ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var et = Oh(function() {
          return ct(x, $ + "return " + B).apply(e, w);
        });
        if (et.source = B, jo(et))
          throw et;
        return et;
      }
      function $b(s) {
        return ut(s).toLowerCase();
      }
      function Yb(s) {
        return ut(s).toUpperCase();
      }
      function Xb(s, o, h) {
        if (s = ut(s), s && (h || o === e))
          return Il(s);
        if (!s || !(o = re(o)))
          return s;
        var d = Me(s), m = Me(o), x = Fl(d, m), w = Bl(d, m) + 1;
        return hn(d, x, w).join("");
      }
      function jb(s, o, h) {
        if (s = ut(s), s && (h || o === e))
          return s.slice(0, Wl(s) + 1);
        if (!s || !(o = re(o)))
          return s;
        var d = Me(s), m = Bl(d, Me(o)) + 1;
        return hn(d, 0, m).join("");
      }
      function Gb(s, o, h) {
        if (s = ut(s), s && (h || o === e))
          return s.replace(Xr, "");
        if (!s || !(o = re(o)))
          return s;
        var d = Me(s), m = Fl(d, Me(o));
        return hn(d, m).join("");
      }
      function Kb(s, o) {
        var h = J, d = Q;
        if (Mt(o)) {
          var m = "separator" in o ? o.separator : m;
          h = "length" in o ? tt(o.length) : h, d = "omission" in o ? re(o.omission) : d;
        }
        s = ut(s);
        var x = s.length;
        if (jn(s)) {
          var w = Me(s);
          x = w.length;
        }
        if (h >= x)
          return s;
        var A = h - Gn(d);
        if (A < 1)
          return d;
        var P = w ? hn(w, 0, A).join("") : s.slice(0, A);
        if (m === e)
          return P + d;
        if (w && (A += P.length - A), Go(m)) {
          if (s.slice(A).search(m)) {
            var E, I = P;
            for (m.global || (m = co(m.source, ut(il.exec(m)) + "g")), m.lastIndex = 0; E = m.exec(I); )
              var B = E.index;
            P = P.slice(0, B === e ? A : B);
          }
        } else if (s.indexOf(re(m), A) != A) {
          var V = P.lastIndexOf(m);
          V > -1 && (P = P.slice(0, V));
        }
        return P + d;
      }
      function qb(s) {
        return s = ut(s), s && ad.test(s) ? s.replace(tl, Ag) : s;
      }
      var Zb = ei(function(s, o, h) {
        return s + (h ? " " : "") + o.toUpperCase();
      }), Zo = Pc("toUpperCase");
      function Ah(s, o, h) {
        return s = ut(s), o = h ? e : o, o === e ? vg(s) ? Cg(s) : ug(s) : s.match(o) || [];
      }
      var Oh = nt(function(s, o) {
        try {
          return ie(s, e, o);
        } catch (h) {
          return jo(h) ? h : new K(h);
        }
      }), Jb = Ue(function(s, o) {
        return de(o, function(h) {
          h = Ee(h), He(s, h, Yo(s[h], s));
        }), s;
      });
      function Qb(s) {
        var o = s == null ? 0 : s.length, h = X();
        return s = o ? wt(s, function(d) {
          if (typeof d[1] != "function")
            throw new ge(l);
          return [h(d[0]), d[1]];
        }) : [], nt(function(d) {
          for (var m = -1; ++m < o; ) {
            var x = s[m];
            if (ie(x[0], this, d))
              return ie(x[1], this, d);
          }
        });
      }
      function tx(s) {
        return Ap(me(s, p));
      }
      function Jo(s) {
        return function() {
          return s;
        };
      }
      function ex(s, o) {
        return s == null || s !== s ? o : s;
      }
      var nx = kc(), ix = kc(!0);
      function te(s) {
        return s;
      }
      function Qo(s) {
        return rc(typeof s == "function" ? s : me(s, p));
      }
      function sx(s) {
        return ac(me(s, p));
      }
      function rx(s, o) {
        return lc(s, me(o, p));
      }
      var ox = nt(function(s, o) {
        return function(h) {
          return Pi(h, s, o);
        };
      }), ax = nt(function(s, o) {
        return function(h) {
          return Pi(s, h, o);
        };
      });
      function ta(s, o, h) {
        var d = Bt(o), m = Rs(o, d);
        h == null && !(Mt(o) && (m.length || !d.length)) && (h = o, o = s, s = this, m = Rs(o, Bt(o)));
        var x = !(Mt(h) && "chain" in h) || !!h.chain, w = Ye(s);
        return de(m, function(A) {
          var P = o[A];
          s[A] = P, w && (s.prototype[A] = function() {
            var E = this.__chain__;
            if (x || E) {
              var I = s(this.__wrapped__), B = I.__actions__ = Zt(this.__actions__);
              return B.push({ func: P, args: arguments, thisArg: s }), I.__chain__ = E, I;
            }
            return P.apply(s, sn([this.value()], arguments));
          });
        }), s;
      }
      function lx() {
        return Wt._ === this && (Wt._ = Eg), this;
      }
      function ea() {
      }
      function cx(s) {
        return s = tt(s), nt(function(o) {
          return cc(o, s);
        });
      }
      var hx = Lo(wt), ux = Lo(Tl), fx = Lo(no);
      function Ph(s) {
        return Wo(s) ? io(Ee(s)) : Vp(s);
      }
      function dx(s) {
        return function(o) {
          return s == null ? e : Cn(s, o);
        };
      }
      var gx = Dc(), px = Dc(!0);
      function na() {
        return [];
      }
      function ia() {
        return !1;
      }
      function mx() {
        return {};
      }
      function _x() {
        return "";
      }
      function bx() {
        return !0;
      }
      function xx(s, o) {
        if (s = tt(s), s < 1 || s > Dt)
          return [];
        var h = jt, d = Vt(s, jt);
        o = X(o), s -= jt;
        for (var m = oo(d, o); ++h < s; )
          o(h);
        return m;
      }
      function vx(s) {
        return q(s) ? wt(s, Ee) : oe(s) ? [s] : Zt(jc(ut(s)));
      }
      function yx(s) {
        var o = ++Lg;
        return ut(s) + o;
      }
      var wx = Ws(function(s, o) {
        return s + o;
      }, 0), Sx = Ro("ceil"), Mx = Ws(function(s, o) {
        return s / o;
      }, 1), Ax = Ro("floor");
      function Ox(s) {
        return s && s.length ? Ls(s, te, bo) : e;
      }
      function Px(s, o) {
        return s && s.length ? Ls(s, X(o, 2), bo) : e;
      }
      function Cx(s) {
        return Rl(s, te);
      }
      function kx(s, o) {
        return Rl(s, X(o, 2));
      }
      function Tx(s) {
        return s && s.length ? Ls(s, te, wo) : e;
      }
      function Dx(s, o) {
        return s && s.length ? Ls(s, X(o, 2), wo) : e;
      }
      var Lx = Ws(function(s, o) {
        return s * o;
      }, 1), Rx = Ro("round"), Ex = Ws(function(s, o) {
        return s - o;
      }, 0);
      function Ix(s) {
        return s && s.length ? ro(s, te) : 0;
      }
      function Fx(s, o) {
        return s && s.length ? ro(s, X(o, 2)) : 0;
      }
      return b.after = s0, b.ary = sh, b.assign = Y0, b.assignIn = bh, b.assignInWith = Js, b.assignWith = X0, b.at = j0, b.before = rh, b.bind = Yo, b.bindAll = Jb, b.bindKey = oh, b.castArray = m0, b.chain = eh, b.chunk = Am, b.compact = Om, b.concat = Pm, b.cond = Qb, b.conforms = tx, b.constant = Jo, b.countBy = I_, b.create = G0, b.curry = ah, b.curryRight = lh, b.debounce = ch, b.defaults = K0, b.defaultsDeep = q0, b.defer = r0, b.delay = o0, b.difference = Cm, b.differenceBy = km, b.differenceWith = Tm, b.drop = Dm, b.dropRight = Lm, b.dropRightWhile = Rm, b.dropWhile = Em, b.fill = Im, b.filter = B_, b.flatMap = N_, b.flatMapDeep = H_, b.flatMapDepth = V_, b.flatten = Zc, b.flattenDeep = Fm, b.flattenDepth = Bm, b.flip = a0, b.flow = nx, b.flowRight = ix, b.fromPairs = zm, b.functions = ib, b.functionsIn = sb, b.groupBy = U_, b.initial = Nm, b.intersection = Hm, b.intersectionBy = Vm, b.intersectionWith = Um, b.invert = ob, b.invertBy = ab, b.invokeMap = Y_, b.iteratee = Qo, b.keyBy = X_, b.keys = Bt, b.keysIn = Qt, b.map = Xs, b.mapKeys = cb, b.mapValues = hb, b.matches = sx, b.matchesProperty = rx, b.memoize = Gs, b.merge = ub, b.mergeWith = xh, b.method = ox, b.methodOf = ax, b.mixin = ta, b.negate = Ks, b.nthArg = cx, b.omit = fb, b.omitBy = db, b.once = l0, b.orderBy = j_, b.over = hx, b.overArgs = c0, b.overEvery = ux, b.overSome = fx, b.partial = Xo, b.partialRight = hh, b.partition = G_, b.pick = gb, b.pickBy = vh, b.property = Ph, b.propertyOf = dx, b.pull = jm, b.pullAll = Qc, b.pullAllBy = Gm, b.pullAllWith = Km, b.pullAt = qm, b.range = gx, b.rangeRight = px, b.rearg = h0, b.reject = Z_, b.remove = Zm, b.rest = u0, b.reverse = Uo, b.sampleSize = Q_, b.set = mb, b.setWith = _b, b.shuffle = t0, b.slice = Jm, b.sortBy = i0, b.sortedUniq = r_, b.sortedUniqBy = o_, b.split = Nb, b.spread = f0, b.tail = a_, b.take = l_, b.takeRight = c_, b.takeRightWhile = h_, b.takeWhile = u_, b.tap = O_, b.throttle = d0, b.thru = Ys, b.toArray = ph, b.toPairs = yh, b.toPairsIn = wh, b.toPath = vx, b.toPlainObject = _h, b.transform = bb, b.unary = g0, b.union = f_, b.unionBy = d_, b.unionWith = g_, b.uniq = p_, b.uniqBy = m_, b.uniqWith = __, b.unset = xb, b.unzip = $o, b.unzipWith = th, b.update = vb, b.updateWith = yb, b.values = si, b.valuesIn = wb, b.without = b_, b.words = Ah, b.wrap = p0, b.xor = x_, b.xorBy = v_, b.xorWith = y_, b.zip = w_, b.zipObject = S_, b.zipObjectDeep = M_, b.zipWith = A_, b.entries = yh, b.entriesIn = wh, b.extend = bh, b.extendWith = Js, ta(b, b), b.add = wx, b.attempt = Oh, b.camelCase = Ob, b.capitalize = Sh, b.ceil = Sx, b.clamp = Sb, b.clone = _0, b.cloneDeep = x0, b.cloneDeepWith = v0, b.cloneWith = b0, b.conformsTo = y0, b.deburr = Mh, b.defaultTo = ex, b.divide = Mx, b.endsWith = Pb, b.eq = Oe, b.escape = Cb, b.escapeRegExp = kb, b.every = F_, b.find = z_, b.findIndex = Kc, b.findKey = Z0, b.findLast = W_, b.findLastIndex = qc, b.findLastKey = J0, b.floor = Ax, b.forEach = nh, b.forEachRight = ih, b.forIn = Q0, b.forInRight = tb, b.forOwn = eb, b.forOwnRight = nb, b.get = Ko, b.gt = w0, b.gte = S0, b.has = rb, b.hasIn = qo, b.head = Jc, b.identity = te, b.includes = $_, b.indexOf = Wm, b.inRange = Mb, b.invoke = lb, b.isArguments = Dn, b.isArray = q, b.isArrayBuffer = M0, b.isArrayLike = Jt, b.isArrayLikeObject = kt, b.isBoolean = A0, b.isBuffer = un, b.isDate = O0, b.isElement = P0, b.isEmpty = C0, b.isEqual = k0, b.isEqualWith = T0, b.isError = jo, b.isFinite = D0, b.isFunction = Ye, b.isInteger = uh, b.isLength = qs, b.isMap = fh, b.isMatch = L0, b.isMatchWith = R0, b.isNaN = E0, b.isNative = I0, b.isNil = B0, b.isNull = F0, b.isNumber = dh, b.isObject = Mt, b.isObjectLike = At, b.isPlainObject = Ri, b.isRegExp = Go, b.isSafeInteger = z0, b.isSet = gh, b.isString = Zs, b.isSymbol = oe, b.isTypedArray = ii, b.isUndefined = W0, b.isWeakMap = N0, b.isWeakSet = H0, b.join = $m, b.kebabCase = Tb, b.last = be, b.lastIndexOf = Ym, b.lowerCase = Db, b.lowerFirst = Lb, b.lt = V0, b.lte = U0, b.max = Ox, b.maxBy = Px, b.mean = Cx, b.meanBy = kx, b.min = Tx, b.minBy = Dx, b.stubArray = na, b.stubFalse = ia, b.stubObject = mx, b.stubString = _x, b.stubTrue = bx, b.multiply = Lx, b.nth = Xm, b.noConflict = lx, b.noop = ea, b.now = js, b.pad = Rb, b.padEnd = Eb, b.padStart = Ib, b.parseInt = Fb, b.random = Ab, b.reduce = K_, b.reduceRight = q_, b.repeat = Bb, b.replace = zb, b.result = pb, b.round = Rx, b.runInContext = O, b.sample = J_, b.size = e0, b.snakeCase = Wb, b.some = n0, b.sortedIndex = Qm, b.sortedIndexBy = t_, b.sortedIndexOf = e_, b.sortedLastIndex = n_, b.sortedLastIndexBy = i_, b.sortedLastIndexOf = s_, b.startCase = Hb, b.startsWith = Vb, b.subtract = Ex, b.sum = Ix, b.sumBy = Fx, b.template = Ub, b.times = xx, b.toFinite = Xe, b.toInteger = tt, b.toLength = mh, b.toLower = $b, b.toNumber = xe, b.toSafeInteger = $0, b.toString = ut, b.toUpper = Yb, b.trim = Xb, b.trimEnd = jb, b.trimStart = Gb, b.truncate = Kb, b.unescape = qb, b.uniqueId = yx, b.upperCase = Zb, b.upperFirst = Zo, b.each = nh, b.eachRight = ih, b.first = Jc, ta(b, function() {
        var s = {};
        return Le(b, function(o, h) {
          dt.call(b.prototype, h) || (s[h] = o);
        }), s;
      }(), { chain: !1 }), b.VERSION = i, de(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(s) {
        b[s].placeholder = b;
      }), de(["drop", "take"], function(s, o) {
        rt.prototype[s] = function(h) {
          h = h === e ? 1 : Et(tt(h), 0);
          var d = this.__filtered__ && !o ? new rt(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Vt(h, d.__takeCount__) : d.__views__.push({
            size: Vt(h, jt),
            type: s + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, rt.prototype[s + "Right"] = function(h) {
          return this.reverse()[s](h).reverse();
        };
      }), de(["filter", "map", "takeWhile"], function(s, o) {
        var h = o + 1, d = h == Ht || h == mt;
        rt.prototype[s] = function(m) {
          var x = this.clone();
          return x.__iteratees__.push({
            iteratee: X(m, 3),
            type: h
          }), x.__filtered__ = x.__filtered__ || d, x;
        };
      }), de(["head", "last"], function(s, o) {
        var h = "take" + (o ? "Right" : "");
        rt.prototype[s] = function() {
          return this[h](1).value()[0];
        };
      }), de(["initial", "tail"], function(s, o) {
        var h = "drop" + (o ? "" : "Right");
        rt.prototype[s] = function() {
          return this.__filtered__ ? new rt(this) : this[h](1);
        };
      }), rt.prototype.compact = function() {
        return this.filter(te);
      }, rt.prototype.find = function(s) {
        return this.filter(s).head();
      }, rt.prototype.findLast = function(s) {
        return this.reverse().find(s);
      }, rt.prototype.invokeMap = nt(function(s, o) {
        return typeof s == "function" ? new rt(this) : this.map(function(h) {
          return Pi(h, s, o);
        });
      }), rt.prototype.reject = function(s) {
        return this.filter(Ks(X(s)));
      }, rt.prototype.slice = function(s, o) {
        s = tt(s);
        var h = this;
        return h.__filtered__ && (s > 0 || o < 0) ? new rt(h) : (s < 0 ? h = h.takeRight(-s) : s && (h = h.drop(s)), o !== e && (o = tt(o), h = o < 0 ? h.dropRight(-o) : h.take(o - s)), h);
      }, rt.prototype.takeRightWhile = function(s) {
        return this.reverse().takeWhile(s).reverse();
      }, rt.prototype.toArray = function() {
        return this.take(jt);
      }, Le(rt.prototype, function(s, o) {
        var h = /^(?:filter|find|map|reject)|While$/.test(o), d = /^(?:head|last)$/.test(o), m = b[d ? "take" + (o == "last" ? "Right" : "") : o], x = d || /^find/.test(o);
        m && (b.prototype[o] = function() {
          var w = this.__wrapped__, A = d ? [1] : arguments, P = w instanceof rt, E = A[0], I = P || q(w), B = function(it) {
            var at = m.apply(b, sn([it], A));
            return d && V ? at[0] : at;
          };
          I && h && typeof E == "function" && E.length != 1 && (P = I = !1);
          var V = this.__chain__, $ = !!this.__actions__.length, j = x && !V, et = P && !$;
          if (!x && I) {
            w = et ? w : new rt(this);
            var G = s.apply(w, A);
            return G.__actions__.push({ func: Ys, args: [B], thisArg: e }), new pe(G, V);
          }
          return j && et ? s.apply(this, A) : (G = this.thru(B), j ? d ? G.value()[0] : G.value() : G);
        });
      }), de(["pop", "push", "shift", "sort", "splice", "unshift"], function(s) {
        var o = _s[s], h = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(s);
        b.prototype[s] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var x = this.value();
            return o.apply(q(x) ? x : [], m);
          }
          return this[h](function(w) {
            return o.apply(q(w) ? w : [], m);
          });
        };
      }), Le(rt.prototype, function(s, o) {
        var h = b[o];
        if (h) {
          var d = h.name + "";
          dt.call(Jn, d) || (Jn[d] = []), Jn[d].push({ name: o, func: h });
        }
      }), Jn[zs(e, C).name] = [{
        name: "wrapper",
        func: e
      }], rt.prototype.clone = qg, rt.prototype.reverse = Zg, rt.prototype.value = Jg, b.prototype.at = P_, b.prototype.chain = C_, b.prototype.commit = k_, b.prototype.next = T_, b.prototype.plant = L_, b.prototype.reverse = R_, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = E_, b.prototype.first = b.prototype.head, vi && (b.prototype[vi] = D_), b;
    }, Kn = kg();
    Sn ? ((Sn.exports = Kn)._ = Kn, Jr._ = Kn) : Wt._ = Kn;
  }).call(Wi);
})(kr, kr.exports);
var ma = kr.exports;
function XS(n) {
  var f;
  let { data: t, parameters: e = {} } = n;
  const i = Object.keys(((f = Object.values(t)) == null ? void 0 : f[0].dataset) ?? []), r = Object.keys(t), a = [];
  Object.values(t).forEach((g, p) => {
    const _ = {
      type: "bar",
      label: r[p],
      data: g.dataset,
      //yAxisID: `y${index}`,
      borderWidth: 1
    };
    g != null && g.color && (_.backgroundColor = g.color), a.push(_);
  });
  const l = {
    responsive: !1,
    maintainAspectRatio: !1,
    plugins: {
      // tooltip: {
      //     callbacks: {
      //         label: function(context) {
      //             let label = context.dataset.label || '';
      //
      //             if (label) {
      //                 label += ': ';
      //             }
      //
      //             if (context.parsed.y !== null && context.datasetIndex === 0) {
      //                 label += new Intl.NumberFormat('en-US', {
      //                     style: 'currency',
      //                     currency: 'USD'
      //                 }).format(context.parsed.y);
      //             } else {
      //                 label += context.parsed.y;
      //             }
      //
      //             return label;
      //         }
      //     }
      // }
    }
  }, c = document.getElementById("app"), u = {
    type: "scatter",
    data: {
      labels: i,
      datasets: a
    },
    options: l
  };
  return new Er(c, u);
}
function jS(n) {
  let { data: t, label: e, value: i } = n;
  const r = t.map((u) => u[e]), a = t.map((u) => u[i]), l = document.getElementById("app"), c = {
    type: "pie",
    data: {
      datasets: [{
        data: a
      }],
      labels: r
    },
    options: {}
  };
  return new Er(l, c);
}
const GS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bar: XS,
  Pie: jS
}, Symbol.toStringTag, { value: "Module" })), KS = (n, t) => {
  const e = {};
  return n.forEach((i) => {
    e[i[t]] || (e[i[t]] = 0), e[i[t]]++;
  }), Object.values(e);
}, qS = (n, t) => {
  const e = {};
  return n.forEach((i) => {
    e[i[t]] || (e[i[t]] = 0), e[i[t]] += parseFloat(i[t]);
  }), Object.values(e);
}, ZS = (n, t) => {
  const e = {};
  return n.forEach((i) => {
    e[i[t]] ? e[i[t]] > parseFloat(i[t]) && (e[i[t]] = parseFloat(i[t])) : e[i[t]] = parseFloat(i[t]);
  }), Object.values(e);
}, JS = (n, t) => {
  const e = {};
  return n.forEach((i) => {
    e[i[t]] ? e[i[t]] < parseFloat(i[t]) && (e[i[t]] = parseFloat(i[t])) : e[i[t]] = parseFloat(i[t]);
  }), Object.values(e);
}, QS = (n, t) => {
  const e = {}, i = {};
  dataset.forEach((r) => {
    e[r[t]] || (e[r[t]] = 0, i[r[t]] = 0), e[r[t]] += parseFloat(r[t]), i[r[t]]++;
  });
  for (const r in e)
    e[r] /= i[r];
  return Object.values(e);
}, tM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  average: QS,
  count: KS,
  max: JS,
  min: ZS,
  sum: qS
}, Symbol.toStringTag, { value: "Module" })), eM = (n, t, e) => {
  const i = ma.map(n, t), r = ma.map(n, e);
  return ma.zipObject(i, r);
}, nM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromCollection: eM
}, Symbol.toStringTag, { value: "Module" })), iM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Aggregation: tM,
  Collection: nM
}, Symbol.toStringTag, { value: "Module" }));
var Kf = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (e = !1));
  function r(u, f, g) {
    this.fn = u, this.context = f, this.once = g || !1;
  }
  function a(u, f, g, p, _) {
    if (typeof g != "function")
      throw new TypeError("The listener must be a function");
    var v = new r(g, p || u, _), y = e ? e + f : f;
    return u._events[y] ? u._events[y].fn ? u._events[y] = [u._events[y], v] : u._events[y].push(v) : (u._events[y] = v, u._eventsCount++), u;
  }
  function l(u, f) {
    --u._eventsCount === 0 ? u._events = new i() : delete u._events[f];
  }
  function c() {
    this._events = new i(), this._eventsCount = 0;
  }
  c.prototype.eventNames = function() {
    var f = [], g, p;
    if (this._eventsCount === 0)
      return f;
    for (p in g = this._events)
      t.call(g, p) && f.push(e ? p.slice(1) : p);
    return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(g)) : f;
  }, c.prototype.listeners = function(f) {
    var g = e ? e + f : f, p = this._events[g];
    if (!p)
      return [];
    if (p.fn)
      return [p.fn];
    for (var _ = 0, v = p.length, y = new Array(v); _ < v; _++)
      y[_] = p[_].fn;
    return y;
  }, c.prototype.listenerCount = function(f) {
    var g = e ? e + f : f, p = this._events[g];
    return p ? p.fn ? 1 : p.length : 0;
  }, c.prototype.emit = function(f, g, p, _, v, y) {
    var M = e ? e + f : f;
    if (!this._events[M])
      return !1;
    var S = this._events[M], C = arguments.length, T, D;
    if (S.fn) {
      switch (S.once && this.removeListener(f, S.fn, void 0, !0), C) {
        case 1:
          return S.fn.call(S.context), !0;
        case 2:
          return S.fn.call(S.context, g), !0;
        case 3:
          return S.fn.call(S.context, g, p), !0;
        case 4:
          return S.fn.call(S.context, g, p, _), !0;
        case 5:
          return S.fn.call(S.context, g, p, _, v), !0;
        case 6:
          return S.fn.call(S.context, g, p, _, v, y), !0;
      }
      for (D = 1, T = new Array(C - 1); D < C; D++)
        T[D - 1] = arguments[D];
      S.fn.apply(S.context, T);
    } else {
      var F = S.length, L;
      for (D = 0; D < F; D++)
        switch (S[D].once && this.removeListener(f, S[D].fn, void 0, !0), C) {
          case 1:
            S[D].fn.call(S[D].context);
            break;
          case 2:
            S[D].fn.call(S[D].context, g);
            break;
          case 3:
            S[D].fn.call(S[D].context, g, p);
            break;
          case 4:
            S[D].fn.call(S[D].context, g, p, _);
            break;
          default:
            if (!T)
              for (L = 1, T = new Array(C - 1); L < C; L++)
                T[L - 1] = arguments[L];
            S[D].fn.apply(S[D].context, T);
        }
    }
    return !0;
  }, c.prototype.on = function(f, g, p) {
    return a(this, f, g, p, !1);
  }, c.prototype.once = function(f, g, p) {
    return a(this, f, g, p, !0);
  }, c.prototype.removeListener = function(f, g, p, _) {
    var v = e ? e + f : f;
    if (!this._events[v])
      return this;
    if (!g)
      return l(this, v), this;
    var y = this._events[v];
    if (y.fn)
      y.fn === g && (!_ || y.once) && (!p || y.context === p) && l(this, v);
    else {
      for (var M = 0, S = [], C = y.length; M < C; M++)
        (y[M].fn !== g || _ && !y[M].once || p && y[M].context !== p) && S.push(y[M]);
      S.length ? this._events[v] = S.length === 1 ? S[0] : S : l(this, v);
    }
    return this;
  }, c.prototype.removeAllListeners = function(f) {
    var g;
    return f ? (g = e ? e + f : f, this._events[g] && l(this, g)) : (this._events = new i(), this._eventsCount = 0), this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = e, c.EventEmitter = c, n.exports = c;
})(Kf);
var sM = Kf.exports;
const rM = /* @__PURE__ */ YS(sM), li = new rM();
let qf = null, _a = !1, ba = !1;
const oM = () => {
  _a || (Zf(() => {
    ba = !0;
  }), console.log(Ia().subscribe), Ia().subscribe((n) => {
    n && (console.log({
      subscribe: "subscribe",
      LISTENING: _a,
      CREATED: ba
    }), ba ? li.emit("intreface:retool:onUpdate", n) : li.emit("intreface:retool:onCreate", n), li.emit("intreface:retool:onListen", n));
  })), _a = !0;
}, Ia = () => qf ?? window.Retool, aM = (n) => {
  qf = n;
}, Zf = (n) => {
  li.once("intreface:retool:onCreate", n);
}, lM = (n) => {
  li.on("intreface:retool:onUpdate", n);
}, cM = (n) => {
  li.on("intreface:retool:onListen", n);
}, hM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getContext: Ia,
  listen: oM,
  onCreate: Zf,
  onListen: cM,
  onUpdate: lM,
  setContext: aM
}, Symbol.toStringTag, { value: "Module" })), dM = {
  Chart: GS,
  Utility: iM,
  Retool: hM
};
export {
  dM as default
};
