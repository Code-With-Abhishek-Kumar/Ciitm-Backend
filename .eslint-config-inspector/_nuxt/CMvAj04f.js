var Cn = Object.defineProperty;
var Sn = (r, e, t) =>
  e in r
    ? Cn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var u = (r, e, t) => Sn(r, typeof e != 'symbol' ? e + '' : e, t);
import {
  a1 as He,
  f as ye,
  j as J,
  i as Bt,
  o as B,
  c as $,
  a as ee,
  n as Dt,
  t as wn,
  D as qe,
  U as re,
  E as vn,
  a5 as Y,
  G as Oe,
  l as Me,
  w as Be,
  F as ht,
  q as ft,
  s as dt,
  b as Rn,
  a0 as pt,
  x as De,
  a6 as Nn,
} from './BsYh-B0w.js';
const gt = {
  ts: 200,
  typescript: 200,
  '@typescript-eslint': 200,
  ignore: '#888888',
  ignores: '#888888',
  disable: '#888888',
  disables: '#888888',
  vue: '#41b883',
  nuxt: '#41b883',
  svelte: '#ff3e00',
  react: '#61dafb',
  node: 110,
  n: 110,
  js: 50,
  javascript: 50,
  antfu: 170,
  markdown: 270,
};
function kn(r, e = 1) {
  let t = 0;
  for (let s = 0; s < r.length; s++) t = r.charCodeAt(s) + ((t << 5) - t);
  const n = t % 360;
  return Gt(n, e);
}
function Gt(r, e = 1) {
  const t = He.value ? 50 : 65,
    n = He.value ? 60 : 40;
  return `hsla(${r}, ${t}%, ${n}%, ${e})`;
}
function xn(r, e = 1) {
  if (gt[r]) {
    const t = gt[r];
    if (typeof t == 'number') return Gt(t, e);
    {
      if (e === 1) return t;
      const n = Math.floor(e * 255)
        .toString(16)
        .padStart(2, '0');
      return t + n;
    }
  }
  return kn(r, e);
}
const An = [
    { match: /package\.json$/, icon: 'i-file-icons-npm text-red scale-110' },
    { match: /eslint\.config\.\w+$/, icon: 'i-file-icons-eslint text-primary' },
    { match: /\.[mc]?jsx?$/, icon: 'i-vscode-icons-file-type-js-official' },
    { match: /\.[mc]?tsx?$/, icon: 'i-file-icons-typescript-alt text-blue3' },
    { match: /\.vue$/, icon: 'i-logos-vue' },
    { match: /\.svelte$/, icon: 'i-logos-svelte-icon' },
    { match: /\.html?$/, icon: 'i-devicon-html5' },
    { match: /\.md$/, icon: 'i-simple-icons-markdown text-gray' },
    { match: /\.json[c5]?$/, icon: 'i-simple-icons-json text-gray' },
    { match: /\.css$/, icon: 'i-vscode-icons-file-type-css' },
  ],
  Pn = { flex: '~ gap-2 items-center' },
  Tn = ye({
    __name: 'FileItem',
    props: { filepath: {} },
    setup(r) {
      const e = r,
        t = J(() => {
          for (const o of An) if (o.match.test(e.filepath)) return o.icon;
          return 'i-ph-file-duotone';
        }),
        n = Bt();
      function s() {
        (qe.filepath = e.filepath), (qe.rule = void 0), n.push('/configs');
      }
      return (o, i) => (
        B(),
        $('div', Pn, [
          ee(
            'div',
            {
              class: Dt(t.value),
              'flex-none': '',
              h: '1em',
              'translate-y-1px': '',
            },
            null,
            2
          ),
          ee(
            'button',
            { 'text-gray': '', hover: 'underline', onClick: s },
            wn(o.filepath),
            1
          ),
        ])
      );
    },
  }),
  Ln = ye({
    props: { name: { type: String }, index: { type: Number } },
    setup(r) {
      const e = J(() => {
        var t;
        return (t = r.name) == null
          ? void 0
          : t.split(/([:/])/g).filter(Boolean);
      });
      return () =>
        e.value
          ? re(
              'span',
              e.value.map((t, n) =>
                re(
                  'span',
                  [':', '/'].includes(t)
                    ? { style: { opacity: 0.35, margin: '0 1px' } }
                    : n !== e.value.length - 1
                      ? { style: { color: xn(t) } }
                      : null,
                  t
                )
              )
            )
          : re('span', [
              re('span', { class: 'op50 italic' }, 'anonymous'),
              r.index != null
                ? re('span', { class: 'op50 text-sm' }, ` #${r.index + 1}`)
                : null,
            ]);
    },
  });
var F;
(function (r) {
  (r[(r.NotSet = -1)] = 'NotSet'),
    (r[(r.None = 0)] = 'None'),
    (r[(r.Italic = 1)] = 'Italic'),
    (r[(r.Bold = 2)] = 'Bold'),
    (r[(r.Underline = 4)] = 'Underline');
})(F || (F = {}));
var te;
(function (r) {
  function e(h) {
    return h.toString(2).padStart(32, '0');
  }
  r.toBinaryStr = e;
  function t(h) {
    const f = r.getLanguageId(h),
      d = r.getTokenType(h),
      g = r.getFontStyle(h),
      m = r.getForeground(h),
      p = r.getBackground(h);
    console.log({
      languageId: f,
      tokenType: d,
      fontStyle: g,
      foreground: m,
      background: p,
    });
  }
  r.print = t;
  function n(h) {
    return (h & 255) >>> 0;
  }
  r.getLanguageId = n;
  function s(h) {
    return (h & 768) >>> 8;
  }
  r.getTokenType = s;
  function o(h) {
    return (h & 1024) !== 0;
  }
  r.containsBalancedBrackets = o;
  function i(h) {
    return (h & 30720) >>> 11;
  }
  r.getFontStyle = i;
  function a(h) {
    return (h & 16744448) >>> 15;
  }
  r.getForeground = a;
  function l(h) {
    return (h & 4278190080) >>> 24;
  }
  r.getBackground = l;
  function c(h, f, d, g, m, p, y) {
    let C = r.getLanguageId(h),
      v = r.getTokenType(h),
      b = r.containsBalancedBrackets(h) ? 1 : 0,
      S = r.getFontStyle(h),
      w = r.getForeground(h),
      N = r.getBackground(h);
    return (
      f !== 0 && (C = f),
      d !== 8 && (v = d),
      g !== null && (b = g ? 1 : 0),
      m !== -1 && (S = m),
      p !== 0 && (w = p),
      y !== 0 && (N = y),
      ((C << 0) | (v << 8) | (b << 10) | (S << 11) | (w << 15) | (N << 24)) >>>
        0
    );
  }
  r.set = c;
})(te || (te = {}));
function be(r, e) {
  const t = [],
    n = En(r);
  let s = n.next();
  for (; s !== null; ) {
    let l = 0;
    if (s.length === 2 && s.charAt(1) === ':') {
      switch (s.charAt(0)) {
        case 'R':
          l = 1;
          break;
        case 'L':
          l = -1;
          break;
        default:
          console.log(`Unknown priority ${s} in scope selector`);
      }
      s = n.next();
    }
    let c = i();
    if ((t.push({ matcher: c, priority: l }), s !== ',')) break;
    s = n.next();
  }
  return t;
  function o() {
    if (s === '-') {
      s = n.next();
      const l = o();
      return (c) => !!l && !l(c);
    }
    if (s === '(') {
      s = n.next();
      const l = a();
      return s === ')' && (s = n.next()), l;
    }
    if (mt(s)) {
      const l = [];
      do l.push(s), (s = n.next());
      while (mt(s));
      return (c) => e(l, c);
    }
    return null;
  }
  function i() {
    const l = [];
    let c = o();
    for (; c; ) l.push(c), (c = o());
    return (h) => l.every((f) => f(h));
  }
  function a() {
    const l = [];
    let c = i();
    for (; c && (l.push(c), s === '|' || s === ','); ) {
      do s = n.next();
      while (s === '|' || s === ',');
      c = i();
    }
    return (h) => l.some((f) => f(h));
  }
}
function mt(r) {
  return !!r && !!r.match(/[\w\.:]+/);
}
function En(r) {
  let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
    t = e.exec(r);
  return {
    next: () => {
      if (!t) return null;
      const n = t[0];
      return (t = e.exec(r)), n;
    },
  };
}
function Ft(r) {
  typeof r.dispose == 'function' && r.dispose();
}
function In(r) {
  return et(r);
}
function et(r) {
  return Array.isArray(r) ? On(r) : typeof r == 'object' ? Mn(r) : r;
}
function On(r) {
  let e = [];
  for (let t = 0, n = r.length; t < n; t++) e[t] = et(r[t]);
  return e;
}
function Mn(r) {
  let e = {};
  for (let t in r) e[t] = et(r[t]);
  return e;
}
function Ut(r, ...e) {
  return (
    e.forEach((t) => {
      for (let n in t) r[n] = t[n];
    }),
    r
  );
}
function $t(r) {
  const e = ~r.lastIndexOf('/') || ~r.lastIndexOf('\\');
  return e === 0
    ? r
    : ~e === r.length - 1
      ? $t(r.substring(0, r.length - 1))
      : r.substr(~e + 1);
}
let Ge = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
class de {
  static hasCaptures(e) {
    return e === null ? !1 : ((Ge.lastIndex = 0), Ge.test(e));
  }
  static replaceCaptures(e, t, n) {
    return e.replace(Ge, (s, o, i, a) => {
      let l = n[parseInt(o || i, 10)];
      if (l) {
        let c = t.substring(l.start, l.end);
        for (; c[0] === '.'; ) c = c.substring(1);
        switch (a) {
          case 'downcase':
            return c.toLowerCase();
          case 'upcase':
            return c.toUpperCase();
          default:
            return c;
        }
      } else return s;
    });
  }
}
function jt(r, e) {
  return r < e ? -1 : r > e ? 1 : 0;
}
function Wt(r, e) {
  if (r === null && e === null) return 0;
  if (!r) return -1;
  if (!e) return 1;
  let t = r.length,
    n = e.length;
  if (t === n) {
    for (let s = 0; s < t; s++) {
      let o = jt(r[s], e[s]);
      if (o !== 0) return o;
    }
    return 0;
  }
  return t - n;
}
function _t(r) {
  return !!(
    /^#[0-9a-f]{6}$/i.test(r) ||
    /^#[0-9a-f]{8}$/i.test(r) ||
    /^#[0-9a-f]{3}$/i.test(r) ||
    /^#[0-9a-f]{4}$/i.test(r)
  );
}
function zt(r) {
  return r.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
}
class Ht {
  constructor(e) {
    u(this, 'fn');
    u(this, 'cache', new Map());
    this.fn = e;
  }
  get(e) {
    if (this.cache.has(e)) return this.cache.get(e);
    const t = this.fn(e);
    return this.cache.set(e, t), t;
  }
}
class le {
  constructor(e) {
    u(this, 'scopeName');
    this.scopeName = e;
  }
  toKey() {
    return this.scopeName;
  }
}
class Bn {
  constructor(e, t) {
    u(this, 'scopeName');
    u(this, 'ruleName');
    (this.scopeName = e), (this.ruleName = t);
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
}
class Dn {
  constructor() {
    u(this, '_references', []);
    u(this, '_seenReferenceKeys', new Set());
    u(this, 'visitedRule', new Set());
  }
  get references() {
    return this._references;
  }
  add(e) {
    const t = e.toKey();
    this._seenReferenceKeys.has(t) ||
      (this._seenReferenceKeys.add(t), this._references.push(e));
  }
}
class Gn {
  constructor(e, t) {
    u(this, 'repo');
    u(this, 'initialScopeName');
    u(this, 'seenFullScopeRequests', new Set());
    u(this, 'seenPartialScopeRequests', new Set());
    u(this, 'Q');
    (this.repo = e),
      (this.initialScopeName = t),
      this.seenFullScopeRequests.add(this.initialScopeName),
      (this.Q = [new le(this.initialScopeName)]);
  }
  processQueue() {
    const e = this.Q;
    this.Q = [];
    const t = new Dn();
    for (const n of e) Fn(n, this.initialScopeName, this.repo, t);
    for (const n of t.references)
      if (n instanceof le) {
        if (this.seenFullScopeRequests.has(n.scopeName)) continue;
        this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
      } else {
        if (
          this.seenFullScopeRequests.has(n.scopeName) ||
          this.seenPartialScopeRequests.has(n.toKey())
        )
          continue;
        this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
      }
  }
}
function Fn(r, e, t, n) {
  const s = t.lookup(r.scopeName);
  if (!s) {
    if (r.scopeName === e) throw new Error(`No grammar provided for <${e}>`);
    return;
  }
  const o = t.lookup(e);
  r instanceof le
    ? _e({ baseGrammar: o, selfGrammar: s }, n)
    : Ke(
        r.ruleName,
        { baseGrammar: o, selfGrammar: s, repository: s.repository },
        n
      );
  const i = t.injections(r.scopeName);
  if (i) for (const a of i) n.add(new le(a));
}
function Ke(r, e, t) {
  if (e.repository && e.repository[r]) {
    const n = e.repository[r];
    Ce([n], e, t);
  }
}
function _e(r, e) {
  r.selfGrammar.patterns &&
    Array.isArray(r.selfGrammar.patterns) &&
    Ce(
      r.selfGrammar.patterns,
      { ...r, repository: r.selfGrammar.repository },
      e
    ),
    r.selfGrammar.injections &&
      Ce(
        Object.values(r.selfGrammar.injections),
        { ...r, repository: r.selfGrammar.repository },
        e
      );
}
function Ce(r, e, t) {
  for (const n of r) {
    if (t.visitedRule.has(n)) continue;
    t.visitedRule.add(n);
    const s = n.repository ? Ut({}, e.repository, n.repository) : e.repository;
    Array.isArray(n.patterns) && Ce(n.patterns, { ...e, repository: s }, t);
    const o = n.include;
    if (!o) continue;
    const i = qt(o);
    switch (i.kind) {
      case 0:
        _e({ ...e, selfGrammar: e.baseGrammar }, t);
        break;
      case 1:
        _e(e, t);
        break;
      case 2:
        Ke(i.ruleName, { ...e, repository: s }, t);
        break;
      case 3:
      case 4:
        const a =
          i.scopeName === e.selfGrammar.scopeName
            ? e.selfGrammar
            : i.scopeName === e.baseGrammar.scopeName
              ? e.baseGrammar
              : void 0;
        if (a) {
          const l = {
            baseGrammar: e.baseGrammar,
            selfGrammar: a,
            repository: s,
          };
          i.kind === 4 ? Ke(i.ruleName, l, t) : _e(l, t);
        } else
          i.kind === 4
            ? t.add(new Bn(i.scopeName, i.ruleName))
            : t.add(new le(i.scopeName));
        break;
    }
  }
}
class Un {
  constructor() {
    u(this, 'kind', 0);
  }
}
class $n {
  constructor() {
    u(this, 'kind', 1);
  }
}
class jn {
  constructor(e) {
    u(this, 'ruleName');
    u(this, 'kind', 2);
    this.ruleName = e;
  }
}
class Wn {
  constructor(e) {
    u(this, 'scopeName');
    u(this, 'kind', 3);
    this.scopeName = e;
  }
}
class zn {
  constructor(e, t) {
    u(this, 'scopeName');
    u(this, 'ruleName');
    u(this, 'kind', 4);
    (this.scopeName = e), (this.ruleName = t);
  }
}
function qt(r) {
  if (r === '$base') return new Un();
  if (r === '$self') return new $n();
  const e = r.indexOf('#');
  if (e === -1) return new Wn(r);
  if (e === 0) return new jn(r.substring(1));
  {
    const t = r.substring(0, e),
      n = r.substring(e + 1);
    return new zn(t, n);
  }
}
const Hn = /\\(\d+)/,
  yt = /\\(\d+)/g,
  qn = -1,
  Kt = -2;
class he {
  constructor(e, t, n, s) {
    u(this, '$location');
    u(this, 'id');
    u(this, '_nameIsCapturing');
    u(this, '_name');
    u(this, '_contentNameIsCapturing');
    u(this, '_contentName');
    (this.$location = e),
      (this.id = t),
      (this._name = n || null),
      (this._nameIsCapturing = de.hasCaptures(this._name)),
      (this._contentName = s || null),
      (this._contentNameIsCapturing = de.hasCaptures(this._contentName));
  }
  get debugName() {
    const e = this.$location
      ? `${$t(this.$location.filename)}:${this.$location.line}`
      : 'unknown';
    return `${this.constructor.name}#${this.id} @ ${e}`;
  }
  getName(e, t) {
    return !this._nameIsCapturing ||
      this._name === null ||
      e === null ||
      t === null
      ? this._name
      : de.replaceCaptures(this._name, e, t);
  }
  getContentName(e, t) {
    return !this._contentNameIsCapturing || this._contentName === null
      ? this._contentName
      : de.replaceCaptures(this._contentName, e, t);
  }
}
class Kn extends he {
  constructor(t, n, s, o, i) {
    super(t, n, s, o);
    u(this, 'retokenizeCapturedWithRuleId');
    this.retokenizeCapturedWithRuleId = i;
  }
  dispose() {}
  collectPatterns(t, n) {
    throw new Error('Not supported!');
  }
  compile(t, n) {
    throw new Error('Not supported!');
  }
  compileAG(t, n, s, o) {
    throw new Error('Not supported!');
  }
}
class Vn extends he {
  constructor(t, n, s, o, i) {
    super(t, n, s, null);
    u(this, '_match');
    u(this, 'captures');
    u(this, '_cachedCompiledPatterns');
    (this._match = new K(o, this.id)),
      (this.captures = i),
      (this._cachedCompiledPatterns = null);
  }
  dispose() {
    this._cachedCompiledPatterns &&
      (this._cachedCompiledPatterns.dispose(),
      (this._cachedCompiledPatterns = null));
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(t, n) {
    n.push(this._match);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, s, o) {
    return this._getCachedCompiledPatterns(t).compileAG(t, s, o);
  }
  _getCachedCompiledPatterns(t) {
    return (
      this._cachedCompiledPatterns ||
        ((this._cachedCompiledPatterns = new ae()),
        this.collectPatterns(t, this._cachedCompiledPatterns)),
      this._cachedCompiledPatterns
    );
  }
}
class bt extends he {
  constructor(t, n, s, o, i) {
    super(t, n, s, o);
    u(this, 'hasMissingPatterns');
    u(this, 'patterns');
    u(this, '_cachedCompiledPatterns');
    (this.patterns = i.patterns),
      (this.hasMissingPatterns = i.hasMissingPatterns),
      (this._cachedCompiledPatterns = null);
  }
  dispose() {
    this._cachedCompiledPatterns &&
      (this._cachedCompiledPatterns.dispose(),
      (this._cachedCompiledPatterns = null));
  }
  collectPatterns(t, n) {
    for (const s of this.patterns) t.getRule(s).collectPatterns(t, n);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, s, o) {
    return this._getCachedCompiledPatterns(t).compileAG(t, s, o);
  }
  _getCachedCompiledPatterns(t) {
    return (
      this._cachedCompiledPatterns ||
        ((this._cachedCompiledPatterns = new ae()),
        this.collectPatterns(t, this._cachedCompiledPatterns)),
      this._cachedCompiledPatterns
    );
  }
}
class Ve extends he {
  constructor(t, n, s, o, i, a, l, c, h, f) {
    super(t, n, s, o);
    u(this, '_begin');
    u(this, 'beginCaptures');
    u(this, '_end');
    u(this, 'endHasBackReferences');
    u(this, 'endCaptures');
    u(this, 'applyEndPatternLast');
    u(this, 'hasMissingPatterns');
    u(this, 'patterns');
    u(this, '_cachedCompiledPatterns');
    (this._begin = new K(i, this.id)),
      (this.beginCaptures = a),
      (this._end = new K(l || '￿', -1)),
      (this.endHasBackReferences = this._end.hasBackReferences),
      (this.endCaptures = c),
      (this.applyEndPatternLast = h || !1),
      (this.patterns = f.patterns),
      (this.hasMissingPatterns = f.hasMissingPatterns),
      (this._cachedCompiledPatterns = null);
  }
  dispose() {
    this._cachedCompiledPatterns &&
      (this._cachedCompiledPatterns.dispose(),
      (this._cachedCompiledPatterns = null));
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(t, n) {
    return this._end.resolveBackReferences(t, n);
  }
  collectPatterns(t, n) {
    n.push(this._begin);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t, n).compile(t);
  }
  compileAG(t, n, s, o) {
    return this._getCachedCompiledPatterns(t, n).compileAG(t, s, o);
  }
  _getCachedCompiledPatterns(t, n) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new ae();
      for (const s of this.patterns)
        t.getRule(s).collectPatterns(t, this._cachedCompiledPatterns);
      this.applyEndPatternLast
        ? this._cachedCompiledPatterns.push(
            this._end.hasBackReferences ? this._end.clone() : this._end
          )
        : this._cachedCompiledPatterns.unshift(
            this._end.hasBackReferences ? this._end.clone() : this._end
          );
    }
    return (
      this._end.hasBackReferences &&
        (this.applyEndPatternLast
          ? this._cachedCompiledPatterns.setSource(
              this._cachedCompiledPatterns.length() - 1,
              n
            )
          : this._cachedCompiledPatterns.setSource(0, n)),
      this._cachedCompiledPatterns
    );
  }
}
class Se extends he {
  constructor(t, n, s, o, i, a, l, c, h) {
    super(t, n, s, o);
    u(this, '_begin');
    u(this, 'beginCaptures');
    u(this, 'whileCaptures');
    u(this, '_while');
    u(this, 'whileHasBackReferences');
    u(this, 'hasMissingPatterns');
    u(this, 'patterns');
    u(this, '_cachedCompiledPatterns');
    u(this, '_cachedCompiledWhilePatterns');
    (this._begin = new K(i, this.id)),
      (this.beginCaptures = a),
      (this.whileCaptures = c),
      (this._while = new K(l, Kt)),
      (this.whileHasBackReferences = this._while.hasBackReferences),
      (this.patterns = h.patterns),
      (this.hasMissingPatterns = h.hasMissingPatterns),
      (this._cachedCompiledPatterns = null),
      (this._cachedCompiledWhilePatterns = null);
  }
  dispose() {
    this._cachedCompiledPatterns &&
      (this._cachedCompiledPatterns.dispose(),
      (this._cachedCompiledPatterns = null)),
      this._cachedCompiledWhilePatterns &&
        (this._cachedCompiledWhilePatterns.dispose(),
        (this._cachedCompiledWhilePatterns = null));
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(t, n) {
    return this._while.resolveBackReferences(t, n);
  }
  collectPatterns(t, n) {
    n.push(this._begin);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, s, o) {
    return this._getCachedCompiledPatterns(t).compileAG(t, s, o);
  }
  _getCachedCompiledPatterns(t) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new ae();
      for (const n of this.patterns)
        t.getRule(n).collectPatterns(t, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(t, n) {
    return this._getCachedCompiledWhilePatterns(t, n).compile(t);
  }
  compileWhileAG(t, n, s, o) {
    return this._getCachedCompiledWhilePatterns(t, n).compileAG(t, s, o);
  }
  _getCachedCompiledWhilePatterns(t, n) {
    return (
      this._cachedCompiledWhilePatterns ||
        ((this._cachedCompiledWhilePatterns = new ae()),
        this._cachedCompiledWhilePatterns.push(
          this._while.hasBackReferences ? this._while.clone() : this._while
        )),
      this._while.hasBackReferences &&
        this._cachedCompiledWhilePatterns.setSource(0, n || '￿'),
      this._cachedCompiledWhilePatterns
    );
  }
}
class T {
  static createCaptureRule(e, t, n, s, o) {
    return e.registerRule((i) => new Kn(t, i, n, s, o));
  }
  static getCompiledRuleId(e, t, n) {
    return (
      e.id ||
        t.registerRule((s) => {
          if (((e.id = s), e.match))
            return new Vn(
              e.$vscodeTextmateLocation,
              e.id,
              e.name,
              e.match,
              T._compileCaptures(e.captures, t, n)
            );
          if (typeof e.begin > 'u') {
            e.repository && (n = Ut({}, n, e.repository));
            let o = e.patterns;
            return (
              typeof o > 'u' && e.include && (o = [{ include: e.include }]),
              new bt(
                e.$vscodeTextmateLocation,
                e.id,
                e.name,
                e.contentName,
                T._compilePatterns(o, t, n)
              )
            );
          }
          return e.while
            ? new Se(
                e.$vscodeTextmateLocation,
                e.id,
                e.name,
                e.contentName,
                e.begin,
                T._compileCaptures(e.beginCaptures || e.captures, t, n),
                e.while,
                T._compileCaptures(e.whileCaptures || e.captures, t, n),
                T._compilePatterns(e.patterns, t, n)
              )
            : new Ve(
                e.$vscodeTextmateLocation,
                e.id,
                e.name,
                e.contentName,
                e.begin,
                T._compileCaptures(e.beginCaptures || e.captures, t, n),
                e.end,
                T._compileCaptures(e.endCaptures || e.captures, t, n),
                e.applyEndPatternLast,
                T._compilePatterns(e.patterns, t, n)
              );
        }),
      e.id
    );
  }
  static _compileCaptures(e, t, n) {
    let s = [];
    if (e) {
      let o = 0;
      for (const i in e) {
        if (i === '$vscodeTextmateLocation') continue;
        const a = parseInt(i, 10);
        a > o && (o = a);
      }
      for (let i = 0; i <= o; i++) s[i] = null;
      for (const i in e) {
        if (i === '$vscodeTextmateLocation') continue;
        const a = parseInt(i, 10);
        let l = 0;
        e[i].patterns && (l = T.getCompiledRuleId(e[i], t, n)),
          (s[a] = T.createCaptureRule(
            t,
            e[i].$vscodeTextmateLocation,
            e[i].name,
            e[i].contentName,
            l
          ));
      }
    }
    return s;
  }
  static _compilePatterns(e, t, n) {
    let s = [];
    if (e)
      for (let o = 0, i = e.length; o < i; o++) {
        const a = e[o];
        let l = -1;
        if (a.include) {
          const c = qt(a.include);
          switch (c.kind) {
            case 0:
            case 1:
              l = T.getCompiledRuleId(n[a.include], t, n);
              break;
            case 2:
              let h = n[c.ruleName];
              h && (l = T.getCompiledRuleId(h, t, n));
              break;
            case 3:
            case 4:
              const f = c.scopeName,
                d = c.kind === 4 ? c.ruleName : null,
                g = t.getExternalGrammar(f, n);
              if (g)
                if (d) {
                  let m = g.repository[d];
                  m && (l = T.getCompiledRuleId(m, t, g.repository));
                } else
                  l = T.getCompiledRuleId(g.repository.$self, t, g.repository);
              break;
          }
        } else l = T.getCompiledRuleId(a, t, n);
        if (l !== -1) {
          const c = t.getRule(l);
          let h = !1;
          if (
            ((c instanceof bt || c instanceof Ve || c instanceof Se) &&
              c.hasMissingPatterns &&
              c.patterns.length === 0 &&
              (h = !0),
            h)
          )
            continue;
          s.push(l);
        }
      }
    return { patterns: s, hasMissingPatterns: (e ? e.length : 0) !== s.length };
  }
}
class K {
  constructor(e, t) {
    u(this, 'source');
    u(this, 'ruleId');
    u(this, 'hasAnchor');
    u(this, 'hasBackReferences');
    u(this, '_anchorCache');
    if (e) {
      const n = e.length;
      let s = 0,
        o = [],
        i = !1;
      for (let a = 0; a < n; a++)
        if (e.charAt(a) === '\\' && a + 1 < n) {
          const c = e.charAt(a + 1);
          c === 'z'
            ? (o.push(e.substring(s, a)),
              o.push('$(?!\\n)(?<!\\n)'),
              (s = a + 2))
            : (c === 'A' || c === 'G') && (i = !0),
            a++;
        }
      (this.hasAnchor = i),
        s === 0
          ? (this.source = e)
          : (o.push(e.substring(s, n)), (this.source = o.join('')));
    } else (this.hasAnchor = !1), (this.source = e);
    this.hasAnchor
      ? (this._anchorCache = this._buildAnchorCache())
      : (this._anchorCache = null),
      (this.ruleId = t),
      (this.hasBackReferences = Hn.test(this.source));
  }
  clone() {
    return new K(this.source, this.ruleId);
  }
  setSource(e) {
    this.source !== e &&
      ((this.source = e),
      this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
  }
  resolveBackReferences(e, t) {
    let n = t.map((s) => e.substring(s.start, s.end));
    return (
      (yt.lastIndex = 0),
      this.source.replace(yt, (s, o) => zt(n[parseInt(o, 10)] || ''))
    );
  }
  _buildAnchorCache() {
    let e = [],
      t = [],
      n = [],
      s = [],
      o,
      i,
      a,
      l;
    for (o = 0, i = this.source.length; o < i; o++)
      (a = this.source.charAt(o)),
        (e[o] = a),
        (t[o] = a),
        (n[o] = a),
        (s[o] = a),
        a === '\\' &&
          o + 1 < i &&
          ((l = this.source.charAt(o + 1)),
          l === 'A'
            ? ((e[o + 1] = '￿'),
              (t[o + 1] = '￿'),
              (n[o + 1] = 'A'),
              (s[o + 1] = 'A'))
            : l === 'G'
              ? ((e[o + 1] = '￿'),
                (t[o + 1] = 'G'),
                (n[o + 1] = '￿'),
                (s[o + 1] = 'G'))
              : ((e[o + 1] = l),
                (t[o + 1] = l),
                (n[o + 1] = l),
                (s[o + 1] = l)),
          o++);
    return {
      A0_G0: e.join(''),
      A0_G1: t.join(''),
      A1_G0: n.join(''),
      A1_G1: s.join(''),
    };
  }
  resolveAnchors(e, t) {
    return !this.hasAnchor || !this._anchorCache
      ? this.source
      : e
        ? t
          ? this._anchorCache.A1_G1
          : this._anchorCache.A1_G0
        : t
          ? this._anchorCache.A0_G1
          : this._anchorCache.A0_G0;
  }
}
class ae {
  constructor() {
    u(this, '_items');
    u(this, '_hasAnchors');
    u(this, '_cached');
    u(this, '_anchorCache');
    (this._items = []),
      (this._hasAnchors = !1),
      (this._cached = null),
      (this._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null,
      });
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    this._cached && (this._cached.dispose(), (this._cached = null)),
      this._anchorCache.A0_G0 &&
        (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
      this._anchorCache.A0_G1 &&
        (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
      this._anchorCache.A1_G0 &&
        (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
      this._anchorCache.A1_G1 &&
        (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null));
  }
  push(e) {
    this._items.push(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor);
  }
  unshift(e) {
    this._items.unshift(e),
      (this._hasAnchors = this._hasAnchors || e.hasAnchor);
  }
  length() {
    return this._items.length;
  }
  setSource(e, t) {
    this._items[e].source !== t &&
      (this._disposeCaches(), this._items[e].setSource(t));
  }
  compile(e) {
    if (!this._cached) {
      let t = this._items.map((n) => n.source);
      this._cached = new Ct(
        e,
        t,
        this._items.map((n) => n.ruleId)
      );
    }
    return this._cached;
  }
  compileAG(e, t, n) {
    return this._hasAnchors
      ? t
        ? n
          ? (this._anchorCache.A1_G1 ||
              (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
            this._anchorCache.A1_G1)
          : (this._anchorCache.A1_G0 ||
              (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
            this._anchorCache.A1_G0)
        : n
          ? (this._anchorCache.A0_G1 ||
              (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
            this._anchorCache.A0_G1)
          : (this._anchorCache.A0_G0 ||
              (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
            this._anchorCache.A0_G0)
      : this.compile(e);
  }
  _resolveAnchors(e, t, n) {
    let s = this._items.map((o) => o.resolveAnchors(t, n));
    return new Ct(
      e,
      s,
      this._items.map((o) => o.ruleId)
    );
  }
}
class Ct {
  constructor(e, t, n) {
    u(this, 'regExps');
    u(this, 'rules');
    u(this, 'scanner');
    (this.regExps = t),
      (this.rules = n),
      (this.scanner = e.createOnigScanner(t));
  }
  dispose() {
    typeof this.scanner.dispose == 'function' && this.scanner.dispose();
  }
  toString() {
    const e = [];
    for (let t = 0, n = this.rules.length; t < n; t++)
      e.push('   - ' + this.rules[t] + ': ' + this.regExps[t]);
    return e.join(`
`);
  }
  findNextMatchSync(e, t, n) {
    const s = this.scanner.findNextMatchSync(e, t, n);
    return s
      ? { ruleId: this.rules[s.index], captureIndices: s.captureIndices }
      : null;
  }
}
class we {
  constructor(e, t, n) {
    u(this, '_colorMap');
    u(this, '_defaults');
    u(this, '_root');
    u(this, '_cachedMatchRoot', new Ht((e) => this._root.match(e)));
    (this._colorMap = e), (this._defaults = t), (this._root = n);
  }
  static createFromRawTheme(e, t) {
    return this.createFromParsedTheme(Jn(e), t);
  }
  static createFromParsedTheme(e, t) {
    return Zn(e, t);
  }
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(e) {
    if (e === null) return this._defaults;
    const t = e.scopeName,
      s = this._cachedMatchRoot
        .get(t)
        .find((o) => Yn(e.parent, o.parentScopes));
    return s ? new Vt(s.fontStyle, s.foreground, s.background) : null;
  }
}
class q {
  constructor(e, t) {
    u(this, 'parent');
    u(this, 'scopeName');
    (this.parent = e), (this.scopeName = t);
  }
  static push(e, t) {
    for (const n of t) e = new q(e, n);
    return e;
  }
  static from(...e) {
    let t = null;
    for (let n = 0; n < e.length; n++) t = new q(t, e[n]);
    return t;
  }
  push(e) {
    return new q(this, e);
  }
  getSegments() {
    let e = this;
    const t = [];
    for (; e; ) t.push(e.scopeName), (e = e.parent);
    return t.reverse(), t;
  }
  toString() {
    return this.getSegments().join(' ');
  }
  extends(e) {
    return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e);
  }
  getExtensionIfDefined(e) {
    const t = [];
    let n = this;
    for (; n && n !== e; ) t.push(n.scopeName), (n = n.parent);
    return n === e ? t.reverse() : void 0;
  }
}
function Yn(r, e) {
  if (e === null) return !0;
  let t = 0,
    n = e[t];
  for (; r; ) {
    if (Xn(r.scopeName, n)) {
      if ((t++, t === e.length)) return !0;
      n = e[t];
    }
    r = r.parent;
  }
  return !1;
}
function Xn(r, e) {
  return e === r || (r.startsWith(e) && r[e.length] === '.');
}
class Vt {
  constructor(e, t, n) {
    u(this, 'fontStyle');
    u(this, 'foregroundId');
    u(this, 'backgroundId');
    (this.fontStyle = e), (this.foregroundId = t), (this.backgroundId = n);
  }
}
function Jn(r) {
  if (!r) return [];
  if (!r.settings || !Array.isArray(r.settings)) return [];
  let e = r.settings,
    t = [],
    n = 0;
  for (let s = 0, o = e.length; s < o; s++) {
    let i = e[s];
    if (!i.settings) continue;
    let a;
    if (typeof i.scope == 'string') {
      let f = i.scope;
      (f = f.replace(/^[,]+/, '')),
        (f = f.replace(/[,]+$/, '')),
        (a = f.split(','));
    } else Array.isArray(i.scope) ? (a = i.scope) : (a = ['']);
    let l = -1;
    if (typeof i.settings.fontStyle == 'string') {
      l = 0;
      let f = i.settings.fontStyle.split(' ');
      for (let d = 0, g = f.length; d < g; d++)
        switch (f[d]) {
          case 'italic':
            l = l | 1;
            break;
          case 'bold':
            l = l | 2;
            break;
          case 'underline':
            l = l | 4;
            break;
          case 'strikethrough':
            l = l | 8;
            break;
        }
    }
    let c = null;
    typeof i.settings.foreground == 'string' &&
      _t(i.settings.foreground) &&
      (c = i.settings.foreground);
    let h = null;
    typeof i.settings.background == 'string' &&
      _t(i.settings.background) &&
      (h = i.settings.background);
    for (let f = 0, d = a.length; f < d; f++) {
      let m = a[f].trim().split(' '),
        p = m[m.length - 1],
        y = null;
      m.length > 1 && ((y = m.slice(0, m.length - 1)), y.reverse()),
        (t[n++] = new Qn(p, y, s, l, c, h));
    }
  }
  return t;
}
class Qn {
  constructor(e, t, n, s, o, i) {
    u(this, 'scope');
    u(this, 'parentScopes');
    u(this, 'index');
    u(this, 'fontStyle');
    u(this, 'foreground');
    u(this, 'background');
    (this.scope = e),
      (this.parentScopes = t),
      (this.index = n),
      (this.fontStyle = s),
      (this.foreground = o),
      (this.background = i);
  }
}
function Zn(r, e) {
  r.sort((l, c) => {
    let h = jt(l.scope, c.scope);
    return h !== 0 || ((h = Wt(l.parentScopes, c.parentScopes)), h !== 0)
      ? h
      : l.index - c.index;
  });
  let t = 0,
    n = '#000000',
    s = '#ffffff';
  for (; r.length >= 1 && r[0].scope === ''; ) {
    let l = r.shift();
    l.fontStyle !== -1 && (t = l.fontStyle),
      l.foreground !== null && (n = l.foreground),
      l.background !== null && (s = l.background);
  }
  let o = new er(e),
    i = new Vt(t, o.getId(n), o.getId(s)),
    a = new ie(new ce(0, null, -1, 0, 0), []);
  for (let l = 0, c = r.length; l < c; l++) {
    let h = r[l];
    a.insert(
      0,
      h.scope,
      h.parentScopes,
      h.fontStyle,
      o.getId(h.foreground),
      o.getId(h.background)
    );
  }
  return new we(o, i, a);
}
class er {
  constructor(e) {
    u(this, '_isFrozen');
    u(this, '_lastColorId');
    u(this, '_id2color');
    u(this, '_color2id');
    if (
      ((this._lastColorId = 0),
      (this._id2color = []),
      (this._color2id = Object.create(null)),
      Array.isArray(e))
    ) {
      this._isFrozen = !0;
      for (let t = 0, n = e.length; t < n; t++)
        (this._color2id[e[t]] = t), (this._id2color[t] = e[t]);
    } else this._isFrozen = !1;
  }
  getId(e) {
    if (e === null) return 0;
    e = e.toUpperCase();
    let t = this._color2id[e];
    if (t) return t;
    if (this._isFrozen) throw new Error(`Missing color in color map - ${e}`);
    return (
      (t = ++this._lastColorId),
      (this._color2id[e] = t),
      (this._id2color[t] = e),
      t
    );
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
}
class ce {
  constructor(e, t, n, s, o) {
    u(this, 'scopeDepth');
    u(this, 'parentScopes');
    u(this, 'fontStyle');
    u(this, 'foreground');
    u(this, 'background');
    (this.scopeDepth = e),
      (this.parentScopes = t),
      (this.fontStyle = n),
      (this.foreground = s),
      (this.background = o);
  }
  clone() {
    return new ce(
      this.scopeDepth,
      this.parentScopes,
      this.fontStyle,
      this.foreground,
      this.background
    );
  }
  static cloneArr(e) {
    let t = [];
    for (let n = 0, s = e.length; n < s; n++) t[n] = e[n].clone();
    return t;
  }
  acceptOverwrite(e, t, n, s) {
    this.scopeDepth > e
      ? console.log('how did this happen?')
      : (this.scopeDepth = e),
      t !== -1 && (this.fontStyle = t),
      n !== 0 && (this.foreground = n),
      s !== 0 && (this.background = s);
  }
}
class ie {
  constructor(e, t = [], n = {}) {
    u(this, '_mainRule');
    u(this, '_children');
    u(this, '_rulesWithParentScopes');
    (this._mainRule = e),
      (this._children = n),
      (this._rulesWithParentScopes = t);
  }
  static _sortBySpecificity(e) {
    return e.length === 1 || e.sort(this._cmpBySpecificity), e;
  }
  static _cmpBySpecificity(e, t) {
    if (e.scopeDepth === t.scopeDepth) {
      const n = e.parentScopes,
        s = t.parentScopes;
      let o = n === null ? 0 : n.length,
        i = s === null ? 0 : s.length;
      if (o === i)
        for (let a = 0; a < o; a++) {
          const l = n[a].length,
            c = s[a].length;
          if (l !== c) return c - l;
        }
      return i - o;
    }
    return t.scopeDepth - e.scopeDepth;
  }
  match(e) {
    if (e === '')
      return ie._sortBySpecificity(
        [].concat(this._mainRule).concat(this._rulesWithParentScopes)
      );
    let t = e.indexOf('.'),
      n,
      s;
    return (
      t === -1
        ? ((n = e), (s = ''))
        : ((n = e.substring(0, t)), (s = e.substring(t + 1))),
      this._children.hasOwnProperty(n)
        ? this._children[n].match(s)
        : ie._sortBySpecificity(
            [].concat(this._mainRule).concat(this._rulesWithParentScopes)
          )
    );
  }
  insert(e, t, n, s, o, i) {
    if (t === '') {
      this._doInsertHere(e, n, s, o, i);
      return;
    }
    let a = t.indexOf('.'),
      l,
      c;
    a === -1
      ? ((l = t), (c = ''))
      : ((l = t.substring(0, a)), (c = t.substring(a + 1)));
    let h;
    this._children.hasOwnProperty(l)
      ? (h = this._children[l])
      : ((h = new ie(
          this._mainRule.clone(),
          ce.cloneArr(this._rulesWithParentScopes)
        )),
        (this._children[l] = h)),
      h.insert(e + 1, c, n, s, o, i);
  }
  _doInsertHere(e, t, n, s, o) {
    if (t === null) {
      this._mainRule.acceptOverwrite(e, n, s, o);
      return;
    }
    for (let i = 0, a = this._rulesWithParentScopes.length; i < a; i++) {
      let l = this._rulesWithParentScopes[i];
      if (Wt(l.parentScopes, t) === 0) {
        l.acceptOverwrite(e, n, s, o);
        return;
      }
    }
    n === -1 && (n = this._mainRule.fontStyle),
      s === 0 && (s = this._mainRule.foreground),
      o === 0 && (o = this._mainRule.background),
      this._rulesWithParentScopes.push(new ce(e, t, n, s, o));
  }
}
class Fe {
  constructor(e, t) {
    u(this, 'languageId');
    u(this, 'tokenType');
    (this.languageId = e), (this.tokenType = t);
  }
}
const X = class X {
  constructor(e, t) {
    u(this, '_defaultAttributes');
    u(this, '_embeddedLanguagesMatcher');
    u(
      this,
      '_getBasicScopeAttributes',
      new Ht((e) => {
        const t = this._scopeToLanguage(e),
          n = this._toStandardTokenType(e);
        return new Fe(t, n);
      })
    );
    (this._defaultAttributes = new Fe(e, 8)),
      (this._embeddedLanguagesMatcher = new tr(Object.entries(t || {})));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(e) {
    return e === null
      ? X._NULL_SCOPE_METADATA
      : this._getBasicScopeAttributes.get(e);
  }
  _scopeToLanguage(e) {
    return this._embeddedLanguagesMatcher.match(e) || 0;
  }
  _toStandardTokenType(e) {
    const t = e.match(X.STANDARD_TOKEN_TYPE_REGEXP);
    if (!t) return 8;
    switch (t[1]) {
      case 'comment':
        return 1;
      case 'string':
        return 2;
      case 'regex':
        return 3;
      case 'meta.embedded':
        return 0;
    }
    throw new Error('Unexpected match for standard token type!');
  }
};
u(X, '_NULL_SCOPE_METADATA', new Fe(0, 0)),
  u(
    X,
    'STANDARD_TOKEN_TYPE_REGEXP',
    /\b(comment|string|regex|meta\.embedded)\b/
  );
let Ye = X;
class tr {
  constructor(e) {
    u(this, 'values');
    u(this, 'scopesRegExp');
    if (e.length === 0) (this.values = null), (this.scopesRegExp = null);
    else {
      this.values = new Map(e);
      const t = e.map(([n, s]) => zt(n));
      t.sort(),
        t.reverse(),
        (this.scopesRegExp = new RegExp(`^((${t.join(')|(')}))($|\\.)`, ''));
    }
  }
  match(e) {
    if (!this.scopesRegExp) return;
    const t = e.match(this.scopesRegExp);
    if (t) return this.values.get(t[1]);
  }
}
class St {
  constructor(e, t) {
    u(this, 'stack');
    u(this, 'stoppedEarly');
    (this.stack = e), (this.stoppedEarly = t);
  }
}
function Yt(r, e, t, n, s, o, i, a) {
  const l = e.content.length;
  let c = !1,
    h = -1;
  if (i) {
    const g = nr(r, e, t, n, s, o);
    (s = g.stack), (n = g.linePos), (t = g.isFirstLine), (h = g.anchorPosition);
  }
  const f = Date.now();
  for (; !c; ) {
    if (a !== 0 && Date.now() - f > a) return new St(s, !0);
    d();
  }
  return new St(s, !1);
  function d() {
    const g = rr(r, e, t, n, s, h);
    if (!g) {
      o.produce(s, l), (c = !0);
      return;
    }
    const m = g.captureIndices,
      p = g.matchedRuleId,
      y = m && m.length > 0 ? m[0].end > n : !1;
    if (p === qn) {
      const C = s.getRule(r);
      o.produce(s, m[0].start),
        (s = s.withContentNameScopesList(s.nameScopesList)),
        oe(r, e, t, s, o, C.endCaptures, m),
        o.produce(s, m[0].end);
      const v = s;
      if (
        ((s = s.parent), (h = v.getAnchorPos()), !y && v.getEnterPos() === n)
      ) {
        (s = v), o.produce(s, l), (c = !0);
        return;
      }
    } else {
      const C = r.getRule(p);
      o.produce(s, m[0].start);
      const v = s,
        b = C.getName(e.content, m),
        S = s.contentNameScopesList.pushAttributed(b, r);
      if (
        ((s = s.push(p, n, h, m[0].end === l, null, S, S)), C instanceof Ve)
      ) {
        const w = C;
        oe(r, e, t, s, o, w.beginCaptures, m),
          o.produce(s, m[0].end),
          (h = m[0].end);
        const N = w.getContentName(e.content, m),
          O = S.pushAttributed(N, r);
        if (
          ((s = s.withContentNameScopesList(O)),
          w.endHasBackReferences &&
            (s = s.withEndRule(
              w.getEndWithResolvedBackReferences(e.content, m)
            )),
          !y && v.hasSameRuleAs(s))
        ) {
          (s = s.pop()), o.produce(s, l), (c = !0);
          return;
        }
      } else if (C instanceof Se) {
        const w = C;
        oe(r, e, t, s, o, w.beginCaptures, m),
          o.produce(s, m[0].end),
          (h = m[0].end);
        const N = w.getContentName(e.content, m),
          O = S.pushAttributed(N, r);
        if (
          ((s = s.withContentNameScopesList(O)),
          w.whileHasBackReferences &&
            (s = s.withEndRule(
              w.getWhileWithResolvedBackReferences(e.content, m)
            )),
          !y && v.hasSameRuleAs(s))
        ) {
          (s = s.pop()), o.produce(s, l), (c = !0);
          return;
        }
      } else if (
        (oe(r, e, t, s, o, C.captures, m),
        o.produce(s, m[0].end),
        (s = s.pop()),
        !y)
      ) {
        (s = s.safePop()), o.produce(s, l), (c = !0);
        return;
      }
    }
    m[0].end > n && ((n = m[0].end), (t = !1));
  }
}
function nr(r, e, t, n, s, o) {
  let i = s.beginRuleCapturedEOL ? 0 : -1;
  const a = [];
  for (let l = s; l; l = l.pop()) {
    const c = l.getRule(r);
    c instanceof Se && a.push({ rule: c, stack: l });
  }
  for (let l = a.pop(); l; l = a.pop()) {
    const { ruleScanner: c, findOptions: h } = ir(
        l.rule,
        r,
        l.stack.endRule,
        t,
        n === i
      ),
      f = c.findNextMatchSync(e, n, h);
    if (f) {
      if (f.ruleId !== Kt) {
        s = l.stack.pop();
        break;
      }
      f.captureIndices &&
        f.captureIndices.length &&
        (o.produce(l.stack, f.captureIndices[0].start),
        oe(r, e, t, l.stack, o, l.rule.whileCaptures, f.captureIndices),
        o.produce(l.stack, f.captureIndices[0].end),
        (i = f.captureIndices[0].end),
        f.captureIndices[0].end > n &&
          ((n = f.captureIndices[0].end), (t = !1)));
    } else {
      s = l.stack.pop();
      break;
    }
  }
  return { stack: s, linePos: n, anchorPosition: i, isFirstLine: t };
}
function rr(r, e, t, n, s, o) {
  const i = sr(r, e, t, n, s, o),
    a = r.getInjections();
  if (a.length === 0) return i;
  const l = or(a, r, e, t, n, s, o);
  if (!l) return i;
  if (!i) return l;
  const c = i.captureIndices[0].start,
    h = l.captureIndices[0].start;
  return h < c || (l.priorityMatch && h === c) ? l : i;
}
function sr(r, e, t, n, s, o) {
  const i = s.getRule(r),
    { ruleScanner: a, findOptions: l } = Xt(i, r, s.endRule, t, n === o),
    c = a.findNextMatchSync(e, n, l);
  return c
    ? { captureIndices: c.captureIndices, matchedRuleId: c.ruleId }
    : null;
}
function or(r, e, t, n, s, o, i) {
  let a = Number.MAX_VALUE,
    l = null,
    c,
    h = 0;
  const f = o.contentNameScopesList.getScopeNames();
  for (let d = 0, g = r.length; d < g; d++) {
    const m = r[d];
    if (!m.matcher(f)) continue;
    const p = e.getRule(m.ruleId),
      { ruleScanner: y, findOptions: C } = Xt(p, e, null, n, s === i),
      v = y.findNextMatchSync(t, s, C);
    if (!v) continue;
    const b = v.captureIndices[0].start;
    if (
      !(b >= a) &&
      ((a = b),
      (l = v.captureIndices),
      (c = v.ruleId),
      (h = m.priority),
      a === s)
    )
      break;
  }
  return l
    ? { priorityMatch: h === -1, captureIndices: l, matchedRuleId: c }
    : null;
}
function Xt(r, e, t, n, s) {
  return { ruleScanner: r.compileAG(e, t, n, s), findOptions: 0 };
}
function ir(r, e, t, n, s) {
  return { ruleScanner: r.compileWhileAG(e, t, n, s), findOptions: 0 };
}
function oe(r, e, t, n, s, o, i) {
  if (o.length === 0) return;
  const a = e.content,
    l = Math.min(o.length, i.length),
    c = [],
    h = i[0].end;
  for (let f = 0; f < l; f++) {
    const d = o[f];
    if (d === null) continue;
    const g = i[f];
    if (g.length === 0) continue;
    if (g.start > h) break;
    for (; c.length > 0 && c[c.length - 1].endPos <= g.start; )
      s.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos),
        c.pop();
    if (
      (c.length > 0
        ? s.produceFromScopes(c[c.length - 1].scopes, g.start)
        : s.produce(n, g.start),
      d.retokenizeCapturedWithRuleId)
    ) {
      const p = d.getName(a, i),
        y = n.contentNameScopesList.pushAttributed(p, r),
        C = d.getContentName(a, i),
        v = y.pushAttributed(C, r),
        b = n.push(d.retokenizeCapturedWithRuleId, g.start, -1, !1, null, y, v),
        S = r.createOnigString(a.substring(0, g.end));
      Yt(r, S, t && g.start === 0, g.start, b, s, !1, 0), Ft(S);
      continue;
    }
    const m = d.getName(a, i);
    if (m !== null) {
      const y = (
        c.length > 0 ? c[c.length - 1].scopes : n.contentNameScopesList
      ).pushAttributed(m, r);
      c.push(new lr(y, g.end));
    }
  }
  for (; c.length > 0; )
    s.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos),
      c.pop();
}
class lr {
  constructor(e, t) {
    u(this, 'scopes');
    u(this, 'endPos');
    (this.scopes = e), (this.endPos = t);
  }
}
function ar(r, e, t, n, s, o, i, a) {
  return new ur(r, e, t, n, s, o, i, a);
}
function wt(r, e, t, n, s) {
  const o = be(e, ve),
    i = T.getCompiledRuleId(t, n, s.repository);
  for (const a of o)
    r.push({
      debugSelector: e,
      matcher: a.matcher,
      ruleId: i,
      grammar: s,
      priority: a.priority,
    });
}
function ve(r, e) {
  if (e.length < r.length) return !1;
  let t = 0;
  return r.every((n) => {
    for (let s = t; s < e.length; s++) if (cr(e[s], n)) return (t = s + 1), !0;
    return !1;
  });
}
function cr(r, e) {
  if (!r) return !1;
  if (r === e) return !0;
  const t = e.length;
  return r.length > t && r.substr(0, t) === e && r[t] === '.';
}
class ur {
  constructor(e, t, n, s, o, i, a, l) {
    u(this, '_rootScopeName');
    u(this, 'balancedBracketSelectors');
    u(this, '_onigLib');
    u(this, '_rootId');
    u(this, '_lastRuleId');
    u(this, '_ruleId2desc');
    u(this, '_includedGrammars');
    u(this, '_grammarRepository');
    u(this, '_grammar');
    u(this, '_injections');
    u(this, '_basicScopeAttributesProvider');
    u(this, '_tokenTypeMatchers');
    if (
      ((this._rootScopeName = e),
      (this.balancedBracketSelectors = i),
      (this._onigLib = l),
      (this._basicScopeAttributesProvider = new Ye(n, s)),
      (this._rootId = -1),
      (this._lastRuleId = 0),
      (this._ruleId2desc = [null]),
      (this._includedGrammars = {}),
      (this._grammarRepository = a),
      (this._grammar = vt(t, null)),
      (this._injections = null),
      (this._tokenTypeMatchers = []),
      o)
    )
      for (const c of Object.keys(o)) {
        const h = be(c, ve);
        for (const f of h)
          this._tokenTypeMatchers.push({ matcher: f.matcher, type: o[c] });
      }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const e of this._ruleId2desc) e && e.dispose();
  }
  createOnigScanner(e) {
    return this._onigLib.createOnigScanner(e);
  }
  createOnigString(e) {
    return this._onigLib.createOnigString(e);
  }
  getMetadataForScope(e) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
  }
  _collectInjections() {
    const e = {
        lookup: (o) =>
          o === this._rootScopeName
            ? this._grammar
            : this.getExternalGrammar(o),
        injections: (o) => this._grammarRepository.injections(o),
      },
      t = [],
      n = this._rootScopeName,
      s = e.lookup(n);
    if (s) {
      const o = s.injections;
      if (o) for (let a in o) wt(t, a, o[a], this, s);
      const i = this._grammarRepository.injections(n);
      i &&
        i.forEach((a) => {
          const l = this.getExternalGrammar(a);
          if (l) {
            const c = l.injectionSelector;
            c && wt(t, c, l, this, l);
          }
        });
    }
    return t.sort((o, i) => o.priority - i.priority), t;
  }
  getInjections() {
    return (
      this._injections === null &&
        (this._injections = this._collectInjections()),
      this._injections
    );
  }
  registerRule(e) {
    const t = ++this._lastRuleId,
      n = e(t);
    return (this._ruleId2desc[t] = n), n;
  }
  getRule(e) {
    return this._ruleId2desc[e];
  }
  getExternalGrammar(e, t) {
    if (this._includedGrammars[e]) return this._includedGrammars[e];
    if (this._grammarRepository) {
      const n = this._grammarRepository.lookup(e);
      if (n)
        return (
          (this._includedGrammars[e] = vt(n, t && t.$base)),
          this._includedGrammars[e]
        );
    }
  }
  tokenizeLine(e, t, n = 0) {
    const s = this._tokenize(e, t, !1, n);
    return {
      tokens: s.lineTokens.getResult(s.ruleStack, s.lineLength),
      ruleStack: s.ruleStack,
      stoppedEarly: s.stoppedEarly,
    };
  }
  tokenizeLine2(e, t, n = 0) {
    const s = this._tokenize(e, t, !0, n);
    return {
      tokens: s.lineTokens.getBinaryResult(s.ruleStack, s.lineLength),
      ruleStack: s.ruleStack,
      stoppedEarly: s.stoppedEarly,
    };
  }
  _tokenize(e, t, n, s) {
    this._rootId === -1 &&
      ((this._rootId = T.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository
      )),
      this.getInjections());
    let o;
    if (!t || t === ue.NULL) {
      o = !0;
      const h = this._basicScopeAttributesProvider.getDefaultAttributes(),
        f = this.themeProvider.getDefaults(),
        d = te.set(
          0,
          h.languageId,
          h.tokenType,
          null,
          f.fontStyle,
          f.foregroundId,
          f.backgroundId
        ),
        g = this.getRule(this._rootId).getName(null, null);
      let m;
      g
        ? (m = I.createRootAndLookUpScopeName(g, d, this))
        : (m = I.createRoot('unknown', d)),
        (t = new ue(null, this._rootId, -1, -1, !1, null, m, m));
    } else (o = !1), t.reset();
    e =
      e +
      `
`;
    const i = this.createOnigString(e),
      a = i.content.length,
      l = new fr(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
      c = Yt(this, i, o, 0, t, l, !0, s);
    return (
      Ft(i),
      {
        lineLength: a,
        lineTokens: l,
        ruleStack: c.stack,
        stoppedEarly: c.stoppedEarly,
      }
    );
  }
}
function vt(r, e) {
  return (
    (r = In(r)),
    (r.repository = r.repository || {}),
    (r.repository.$self = {
      $vscodeTextmateLocation: r.$vscodeTextmateLocation,
      patterns: r.patterns,
      name: r.scopeName,
    }),
    (r.repository.$base = e || r.repository.$self),
    r
  );
}
class I {
  constructor(e, t, n) {
    u(this, 'parent');
    u(this, 'scopePath');
    u(this, 'tokenAttributes');
    (this.parent = e), (this.scopePath = t), (this.tokenAttributes = n);
  }
  static fromExtension(e, t) {
    let n = e,
      s = (e == null ? void 0 : e.scopePath) ?? null;
    for (const o of t)
      (s = q.push(s, o.scopeNames)),
        (n = new I(n, s, o.encodedTokenAttributes));
    return n;
  }
  static createRoot(e, t) {
    return new I(null, new q(null, e), t);
  }
  static createRootAndLookUpScopeName(e, t, n) {
    const s = n.getMetadataForScope(e),
      o = new q(null, e),
      i = n.themeProvider.themeMatch(o),
      a = I.mergeAttributes(t, s, i);
    return new I(null, o, a);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(' ');
  }
  equals(e) {
    return I.equals(this, e);
  }
  static equals(e, t) {
    do {
      if (e === t || (!e && !t)) return !0;
      if (
        !e ||
        !t ||
        e.scopeName !== t.scopeName ||
        e.tokenAttributes !== t.tokenAttributes
      )
        return !1;
      (e = e.parent), (t = t.parent);
    } while (!0);
  }
  static mergeAttributes(e, t, n) {
    let s = -1,
      o = 0,
      i = 0;
    return (
      n !== null &&
        ((s = n.fontStyle), (o = n.foregroundId), (i = n.backgroundId)),
      te.set(e, t.languageId, t.tokenType, null, s, o, i)
    );
  }
  pushAttributed(e, t) {
    if (e === null) return this;
    if (e.indexOf(' ') === -1) return I._pushAttributed(this, e, t);
    const n = e.split(/ /g);
    let s = this;
    for (const o of n) s = I._pushAttributed(s, o, t);
    return s;
  }
  static _pushAttributed(e, t, n) {
    const s = n.getMetadataForScope(t),
      o = e.scopePath.push(t),
      i = n.themeProvider.themeMatch(o),
      a = I.mergeAttributes(e.tokenAttributes, s, i);
    return new I(e, o, a);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(e) {
    var s;
    const t = [];
    let n = this;
    for (; n && n !== e; )
      t.push({
        encodedTokenAttributes: n.tokenAttributes,
        scopeNames: n.scopePath.getExtensionIfDefined(
          ((s = n.parent) == null ? void 0 : s.scopePath) ?? null
        ),
      }),
        (n = n.parent);
    return n === e ? t.reverse() : void 0;
  }
}
const j = class j {
  constructor(e, t, n, s, o, i, a, l) {
    u(this, 'parent');
    u(this, 'ruleId');
    u(this, 'beginRuleCapturedEOL');
    u(this, 'endRule');
    u(this, 'nameScopesList');
    u(this, 'contentNameScopesList');
    u(this, '_stackElementBrand');
    u(this, '_enterPos');
    u(this, '_anchorPos');
    u(this, 'depth');
    (this.parent = e),
      (this.ruleId = t),
      (this.beginRuleCapturedEOL = o),
      (this.endRule = i),
      (this.nameScopesList = a),
      (this.contentNameScopesList = l),
      (this.depth = this.parent ? this.parent.depth + 1 : 1),
      (this._enterPos = n),
      (this._anchorPos = s);
  }
  equals(e) {
    return e === null ? !1 : j._equals(this, e);
  }
  static _equals(e, t) {
    return e === t
      ? !0
      : this._structuralEquals(e, t)
        ? I.equals(e.contentNameScopesList, t.contentNameScopesList)
        : !1;
  }
  static _structuralEquals(e, t) {
    do {
      if (e === t || (!e && !t)) return !0;
      if (
        !e ||
        !t ||
        e.depth !== t.depth ||
        e.ruleId !== t.ruleId ||
        e.endRule !== t.endRule
      )
        return !1;
      (e = e.parent), (t = t.parent);
    } while (!0);
  }
  clone() {
    return this;
  }
  static _reset(e) {
    for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent);
  }
  reset() {
    j._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    return this.parent ? this.parent : this;
  }
  push(e, t, n, s, o, i, a) {
    return new j(this, e, t, n, s, o, i, a);
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(e) {
    return e.getRule(this.ruleId);
  }
  toString() {
    const e = [];
    return this._writeString(e, 0), '[' + e.join(',') + ']';
  }
  _writeString(e, t) {
    var n, s;
    return (
      this.parent && (t = this.parent._writeString(e, t)),
      (e[t++] =
        `(${this.ruleId}, ${(n = this.nameScopesList) == null ? void 0 : n.toString()}, ${(s = this.contentNameScopesList) == null ? void 0 : s.toString()})`),
      t
    );
  }
  withContentNameScopesList(e) {
    return this.contentNameScopesList === e
      ? this
      : this.parent.push(
          this.ruleId,
          this._enterPos,
          this._anchorPos,
          this.beginRuleCapturedEOL,
          this.endRule,
          this.nameScopesList,
          e
        );
  }
  withEndRule(e) {
    return this.endRule === e
      ? this
      : new j(
          this.parent,
          this.ruleId,
          this._enterPos,
          this._anchorPos,
          this.beginRuleCapturedEOL,
          e,
          this.nameScopesList,
          this.contentNameScopesList
        );
  }
  hasSameRuleAs(e) {
    let t = this;
    for (; t && t._enterPos === e._enterPos; ) {
      if (t.ruleId === e.ruleId) return !0;
      t = t.parent;
    }
    return !1;
  }
  toStateStackFrame() {
    var e, t, n;
    return {
      ruleId: this.ruleId,
      beginRuleCapturedEOL: this.beginRuleCapturedEOL,
      endRule: this.endRule,
      nameScopesList:
        ((t = this.nameScopesList) == null
          ? void 0
          : t.getExtensionIfDefined(
              ((e = this.parent) == null ? void 0 : e.nameScopesList) ?? null
            )) ?? [],
      contentNameScopesList:
        ((n = this.contentNameScopesList) == null
          ? void 0
          : n.getExtensionIfDefined(this.nameScopesList)) ?? [],
    };
  }
  static pushFrame(e, t) {
    const n = I.fromExtension(
      (e == null ? void 0 : e.nameScopesList) ?? null,
      t.nameScopesList
    );
    return new j(
      e,
      t.ruleId,
      t.enterPos ?? -1,
      t.anchorPos ?? -1,
      t.beginRuleCapturedEOL,
      t.endRule,
      n,
      I.fromExtension(n, t.contentNameScopesList)
    );
  }
};
u(j, 'NULL', new j(null, 0, 0, 0, !1, null, null, null));
let ue = j;
class hr {
  constructor(e, t) {
    u(this, 'balancedBracketScopes');
    u(this, 'unbalancedBracketScopes');
    u(this, 'allowAny', !1);
    (this.balancedBracketScopes = e.flatMap((n) =>
      n === '*' ? ((this.allowAny = !0), []) : be(n, ve).map((s) => s.matcher)
    )),
      (this.unbalancedBracketScopes = t.flatMap((n) =>
        be(n, ve).map((s) => s.matcher)
      ));
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(e) {
    for (const t of this.unbalancedBracketScopes) if (t(e)) return !1;
    for (const t of this.balancedBracketScopes) if (t(e)) return !0;
    return this.allowAny;
  }
}
class fr {
  constructor(e, t, n, s) {
    u(this, 'balancedBracketSelectors');
    u(this, '_emitBinaryTokens');
    u(this, '_lineText');
    u(this, '_tokens');
    u(this, '_binaryTokens');
    u(this, '_lastTokenEndIndex');
    u(this, '_tokenTypeOverrides');
    (this.balancedBracketSelectors = s),
      (this._emitBinaryTokens = e),
      (this._tokenTypeOverrides = n),
      (this._lineText = null),
      (this._tokens = []),
      (this._binaryTokens = []),
      (this._lastTokenEndIndex = 0);
  }
  produce(e, t) {
    this.produceFromScopes(e.contentNameScopesList, t);
  }
  produceFromScopes(e, t) {
    var s;
    if (this._lastTokenEndIndex >= t) return;
    if (this._emitBinaryTokens) {
      let o = (e == null ? void 0 : e.tokenAttributes) ?? 0,
        i = !1;
      if (
        ((s = this.balancedBracketSelectors) != null &&
          s.matchesAlways &&
          (i = !0),
        this._tokenTypeOverrides.length > 0 ||
          (this.balancedBracketSelectors &&
            !this.balancedBracketSelectors.matchesAlways &&
            !this.balancedBracketSelectors.matchesNever))
      ) {
        const a = (e == null ? void 0 : e.getScopeNames()) ?? [];
        for (const l of this._tokenTypeOverrides)
          l.matcher(a) && (o = te.set(o, 0, l.type, null, -1, 0, 0));
        this.balancedBracketSelectors &&
          (i = this.balancedBracketSelectors.match(a));
      }
      if (
        (i && (o = te.set(o, 0, 8, i, -1, 0, 0)),
        this._binaryTokens.length > 0 &&
          this._binaryTokens[this._binaryTokens.length - 1] === o)
      ) {
        this._lastTokenEndIndex = t;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex),
        this._binaryTokens.push(o),
        (this._lastTokenEndIndex = t);
      return;
    }
    const n = (e == null ? void 0 : e.getScopeNames()) ?? [];
    this._tokens.push({
      startIndex: this._lastTokenEndIndex,
      endIndex: t,
      scopes: n,
    }),
      (this._lastTokenEndIndex = t);
  }
  getResult(e, t) {
    return (
      this._tokens.length > 0 &&
        this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
        this._tokens.pop(),
      this._tokens.length === 0 &&
        ((this._lastTokenEndIndex = -1),
        this.produce(e, t),
        (this._tokens[this._tokens.length - 1].startIndex = 0)),
      this._tokens
    );
  }
  getBinaryResult(e, t) {
    this._binaryTokens.length > 0 &&
      this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
      (this._binaryTokens.pop(), this._binaryTokens.pop()),
      this._binaryTokens.length === 0 &&
        ((this._lastTokenEndIndex = -1),
        this.produce(e, t),
        (this._binaryTokens[this._binaryTokens.length - 2] = 0));
    const n = new Uint32Array(this._binaryTokens.length);
    for (let s = 0, o = this._binaryTokens.length; s < o; s++)
      n[s] = this._binaryTokens[s];
    return n;
  }
}
class dr {
  constructor(e, t) {
    u(this, '_onigLibPromise');
    u(this, '_grammars', new Map());
    u(this, '_rawGrammars', new Map());
    u(this, '_injectionGrammars', new Map());
    u(this, '_theme');
    (this._onigLibPromise = t), (this._theme = e);
  }
  dispose() {
    for (const e of this._grammars.values()) e.dispose();
  }
  setTheme(e) {
    this._theme = e;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  addGrammar(e, t) {
    this._rawGrammars.set(e.scopeName, e),
      t && this._injectionGrammars.set(e.scopeName, t);
  }
  lookup(e) {
    return this._rawGrammars.get(e);
  }
  injections(e) {
    return this._injectionGrammars.get(e);
  }
  getDefaults() {
    return this._theme.getDefaults();
  }
  themeMatch(e) {
    return this._theme.match(e);
  }
  async grammarForScopeName(e, t, n, s, o) {
    if (!this._grammars.has(e)) {
      let i = this._rawGrammars.get(e);
      if (!i) return null;
      this._grammars.set(
        e,
        ar(e, i, t, n, s, o, this, await this._onigLibPromise)
      );
    }
    return this._grammars.get(e);
  }
}
let pr = class {
  constructor(e) {
    u(this, '_options');
    u(this, '_syncRegistry');
    u(this, '_ensureGrammarCache');
    (this._options = e),
      (this._syncRegistry = new dr(
        we.createFromRawTheme(e.theme, e.colorMap),
        e.onigLib
      )),
      (this._ensureGrammarCache = new Map());
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  setTheme(e, t) {
    this._syncRegistry.setTheme(we.createFromRawTheme(e, t));
  }
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  loadGrammarWithEmbeddedLanguages(e, t, n) {
    return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: n });
  }
  loadGrammarWithConfiguration(e, t, n) {
    return this._loadGrammar(
      e,
      t,
      n.embeddedLanguages,
      n.tokenTypes,
      new hr(
        n.balancedBracketSelectors || [],
        n.unbalancedBracketSelectors || []
      )
    );
  }
  loadGrammar(e) {
    return this._loadGrammar(e, 0, null, null, null);
  }
  async _loadGrammar(e, t, n, s, o) {
    const i = new Gn(this._syncRegistry, e);
    for (; i.Q.length > 0; )
      await Promise.all(i.Q.map((a) => this._loadSingleGrammar(a.scopeName))),
        i.processQueue();
    return this._grammarForScopeName(e, t, n, s, o);
  }
  async _loadSingleGrammar(e) {
    return (
      this._ensureGrammarCache.has(e) ||
        this._ensureGrammarCache.set(e, this._doLoadSingleGrammar(e)),
      this._ensureGrammarCache.get(e)
    );
  }
  async _doLoadSingleGrammar(e) {
    const t = await this._options.loadGrammar(e);
    if (t) {
      const n =
        typeof this._options.getInjections == 'function'
          ? this._options.getInjections(e)
          : void 0;
      this._syncRegistry.addGrammar(t, n);
    }
  }
  async addGrammar(e, t = [], n = 0, s = null) {
    return (
      this._syncRegistry.addGrammar(e, t),
      await this._grammarForScopeName(e.scopeName, n, s)
    );
  }
  _grammarForScopeName(e, t = 0, n = null, s = null, o = null) {
    return this._syncRegistry.grammarForScopeName(e, t, n, s, o);
  }
};
const Jt = ue.NULL,
  E = {
    LANGUAGEID_MASK: 255,
    TOKEN_TYPE_MASK: 768,
    BALANCED_BRACKETS_MASK: 1024,
    FONT_STYLE_MASK: 14336,
    FOREGROUND_MASK: 8372224,
    BACKGROUND_MASK: 4286578688,
    LANGUAGEID_OFFSET: 0,
    TOKEN_TYPE_OFFSET: 8,
    BALANCED_BRACKETS_OFFSET: 10,
    FONT_STYLE_OFFSET: 11,
    FOREGROUND_OFFSET: 15,
    BACKGROUND_OFFSET: 24,
  };
class W {
  static toBinaryStr(e) {
    let t = e.toString(2);
    for (; t.length < 32; ) t = `0${t}`;
    return t;
  }
  static getLanguageId(e) {
    return (e & E.LANGUAGEID_MASK) >>> E.LANGUAGEID_OFFSET;
  }
  static getTokenType(e) {
    return (e & E.TOKEN_TYPE_MASK) >>> E.TOKEN_TYPE_OFFSET;
  }
  static getFontStyle(e) {
    return (e & E.FONT_STYLE_MASK) >>> E.FONT_STYLE_OFFSET;
  }
  static getForeground(e) {
    return (e & E.FOREGROUND_MASK) >>> E.FOREGROUND_OFFSET;
  }
  static getBackground(e) {
    return (e & E.BACKGROUND_MASK) >>> E.BACKGROUND_OFFSET;
  }
  static containsBalancedBrackets(e) {
    return (e & E.BALANCED_BRACKETS_MASK) !== 0;
  }
  static set(e, t, n, s, o, i) {
    let a = W.getLanguageId(e),
      l = W.getTokenType(e),
      c = W.getFontStyle(e),
      h = W.getForeground(e),
      f = W.getBackground(e);
    const d = W.containsBalancedBrackets(e) ? 1 : 0;
    return (
      t !== 0 && (a = t),
      n !== 0 && (l = n === 8 ? 0 : n),
      s !== F.NotSet && (c = s),
      o !== 0 && (h = o),
      i !== 0 && (f = i),
      ((a << E.LANGUAGEID_OFFSET) |
        (l << E.TOKEN_TYPE_OFFSET) |
        (c << E.FONT_STYLE_OFFSET) |
        (d << E.BALANCED_BRACKETS_OFFSET) |
        (h << E.FOREGROUND_OFFSET) |
        (f << E.BACKGROUND_OFFSET)) >>>
        0
    );
  }
}
function Pe(r, e = !1) {
  var o;
  const t = r.split(/(\r?\n)/g);
  let n = 0;
  const s = [];
  for (let i = 0; i < t.length; i += 2) {
    const a = e ? t[i] + (t[i + 1] || '') : t[i];
    s.push([a, n]),
      (n += t[i].length),
      (n += ((o = t[i + 1]) == null ? void 0 : o.length) || 0);
  }
  return s;
}
function tt(r) {
  return !r || ['plaintext', 'txt', 'text', 'plain'].includes(r);
}
function gr(r) {
  return r === 'ansi' || tt(r);
}
function nt(r) {
  return r === 'none';
}
function mr(r) {
  return nt(r);
}
function Qt(r, e) {
  var n;
  if (!e) return r;
  r.properties || (r.properties = {}),
    (n = r.properties).class || (n.class = []),
    typeof r.properties.class == 'string' &&
      (r.properties.class = r.properties.class.split(/\s+/g)),
    Array.isArray(r.properties.class) || (r.properties.class = []);
  const t = Array.isArray(e) ? e : e.split(/\s+/g);
  for (const s of t)
    s && !r.properties.class.includes(s) && r.properties.class.push(s);
  return r;
}
function _r(r, e) {
  let t = 0;
  const n = [];
  for (const s of e)
    s > t &&
      n.push({ ...r, content: r.content.slice(t, s), offset: r.offset + t }),
      (t = s);
  return (
    t < r.content.length &&
      n.push({ ...r, content: r.content.slice(t), offset: r.offset + t }),
    n
  );
}
function yr(r, e) {
  const t = Array.from(e instanceof Set ? e : new Set(e)).sort((n, s) => n - s);
  return t.length
    ? r.map((n) =>
        n.flatMap((s) => {
          const o = t
            .filter((i) => s.offset < i && i < s.offset + s.content.length)
            .map((i) => i - s.offset)
            .sort((i, a) => i - a);
          return o.length ? _r(s, o) : s;
        })
      )
    : r;
}
function Re(r, e) {
  const t = typeof r == 'string' ? {} : { ...r.colorReplacements },
    n = typeof r == 'string' ? r : r.name;
  for (const [s, o] of Object.entries(
    (e == null ? void 0 : e.colorReplacements) || {}
  ))
    typeof o == 'string' ? (t[s] = o) : s === n && Object.assign(t, o);
  return t;
}
function z(r, e) {
  return (
    r && ((e == null ? void 0 : e[r == null ? void 0 : r.toLowerCase()]) || r)
  );
}
function Zt(r) {
  const e = {};
  return (
    r.color && (e.color = r.color),
    r.bgColor && (e['background-color'] = r.bgColor),
    r.fontStyle &&
      (r.fontStyle & F.Italic && (e['font-style'] = 'italic'),
      r.fontStyle & F.Bold && (e['font-weight'] = 'bold'),
      r.fontStyle & F.Underline && (e['text-decoration'] = 'underline')),
    e
  );
}
function en(r) {
  return Object.entries(r)
    .map(([e, t]) => `${e}:${t}`)
    .join(';');
}
function br(r) {
  const e = Pe(r, !0).map(([s]) => s);
  function t(s) {
    if (s === r.length)
      return { line: e.length - 1, character: e[e.length - 1].length };
    let o = s,
      i = 0;
    for (const a of e) {
      if (o < a.length) break;
      (o -= a.length), i++;
    }
    return { line: i, character: o };
  }
  function n(s, o) {
    let i = 0;
    for (let a = 0; a < s; a++) i += e[a].length;
    return (i += o), i;
  }
  return { lines: e, indexToPos: t, posToIndex: n };
}
var H = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'brightBlack',
    'brightRed',
    'brightGreen',
    'brightYellow',
    'brightBlue',
    'brightMagenta',
    'brightCyan',
    'brightWhite',
  ],
  Ue = {
    1: 'bold',
    2: 'dim',
    3: 'italic',
    4: 'underline',
    7: 'reverse',
    9: 'strikethrough',
  };
function Cr(r, e) {
  const t = r.indexOf('\x1B[', e);
  if (t !== -1) {
    const n = r.indexOf('m', t);
    return {
      sequence: r.substring(t + 2, n).split(';'),
      startPosition: t,
      position: n + 1,
    };
  }
  return { position: r.length };
}
function Rt(r, e) {
  let t = 1;
  const n = r[e + t++];
  let s;
  if (n === '2') {
    const o = [r[e + t++], r[e + t++], r[e + t]].map((i) => Number.parseInt(i));
    o.length === 3 &&
      !o.some((i) => Number.isNaN(i)) &&
      (s = { type: 'rgb', rgb: o });
  } else if (n === '5') {
    const o = Number.parseInt(r[e + t]);
    Number.isNaN(o) || (s = { type: 'table', index: Number(o) });
  }
  return [t, s];
}
function Sr(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t],
      s = Number.parseInt(n);
    if (!Number.isNaN(s))
      if (s === 0) e.push({ type: 'resetAll' });
      else if (s <= 9) Ue[s] && e.push({ type: 'setDecoration', value: Ue[s] });
      else if (s <= 29) {
        const o = Ue[s - 20];
        o && e.push({ type: 'resetDecoration', value: o });
      } else if (s <= 37)
        e.push({
          type: 'setForegroundColor',
          value: { type: 'named', name: H[s - 30] },
        });
      else if (s === 38) {
        const [o, i] = Rt(r, t);
        i && e.push({ type: 'setForegroundColor', value: i }), (t += o);
      } else if (s === 39) e.push({ type: 'resetForegroundColor' });
      else if (s <= 47)
        e.push({
          type: 'setBackgroundColor',
          value: { type: 'named', name: H[s - 40] },
        });
      else if (s === 48) {
        const [o, i] = Rt(r, t);
        i && e.push({ type: 'setBackgroundColor', value: i }), (t += o);
      } else
        s === 49
          ? e.push({ type: 'resetBackgroundColor' })
          : s >= 90 && s <= 97
            ? e.push({
                type: 'setForegroundColor',
                value: { type: 'named', name: H[s - 90 + 8] },
              })
            : s >= 100 &&
              s <= 107 &&
              e.push({
                type: 'setBackgroundColor',
                value: { type: 'named', name: H[s - 100 + 8] },
              });
  }
  return e;
}
function wr() {
  let r = null,
    e = null,
    t = new Set();
  return {
    parse(n) {
      const s = [];
      let o = 0;
      do {
        const i = Cr(n, o),
          a = i.sequence ? n.substring(o, i.startPosition) : n.substring(o);
        if (
          (a.length > 0 &&
            s.push({
              value: a,
              foreground: r,
              background: e,
              decorations: new Set(t),
            }),
          i.sequence)
        ) {
          const l = Sr(i.sequence);
          for (const c of l)
            c.type === 'resetAll'
              ? ((r = null), (e = null), t.clear())
              : c.type === 'resetForegroundColor'
                ? (r = null)
                : c.type === 'resetBackgroundColor'
                  ? (e = null)
                  : c.type === 'resetDecoration' && t.delete(c.value);
          for (const c of l)
            c.type === 'setForegroundColor'
              ? (r = c.value)
              : c.type === 'setBackgroundColor'
                ? (e = c.value)
                : c.type === 'setDecoration' && t.add(c.value);
        }
        o = i.position;
      } while (o < n.length);
      return s;
    },
  };
}
var vr = {
  black: '#000000',
  red: '#bb0000',
  green: '#00bb00',
  yellow: '#bbbb00',
  blue: '#0000bb',
  magenta: '#ff00ff',
  cyan: '#00bbbb',
  white: '#eeeeee',
  brightBlack: '#555555',
  brightRed: '#ff5555',
  brightGreen: '#00ff00',
  brightYellow: '#ffff55',
  brightBlue: '#5555ff',
  brightMagenta: '#ff55ff',
  brightCyan: '#55ffff',
  brightWhite: '#ffffff',
};
function Rr(r = vr) {
  function e(a) {
    return r[a];
  }
  function t(a) {
    return `#${a.map((l) => Math.max(0, Math.min(l, 255)).toString(16).padStart(2, '0')).join('')}`;
  }
  let n;
  function s() {
    if (n) return n;
    n = [];
    for (let c = 0; c < H.length; c++) n.push(e(H[c]));
    let a = [0, 95, 135, 175, 215, 255];
    for (let c = 0; c < 6; c++)
      for (let h = 0; h < 6; h++)
        for (let f = 0; f < 6; f++) n.push(t([a[c], a[h], a[f]]));
    let l = 8;
    for (let c = 0; c < 24; c++, l += 10) n.push(t([l, l, l]));
    return n;
  }
  function o(a) {
    return s()[a];
  }
  function i(a) {
    switch (a.type) {
      case 'named':
        return e(a.name);
      case 'rgb':
        return t(a.rgb);
      case 'table':
        return o(a.index);
    }
  }
  return { value: i };
}
function Nr(r, e, t) {
  const n = Re(r, t),
    s = Pe(e),
    o = Rr(
      Object.fromEntries(
        H.map((a) => {
          var l;
          return [
            a,
            (l = r.colors) == null
              ? void 0
              : l[`terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`],
          ];
        })
      )
    ),
    i = wr();
  return s.map((a) =>
    i.parse(a[0]).map((l) => {
      let c, h;
      l.decorations.has('reverse')
        ? ((c = l.background ? o.value(l.background) : r.bg),
          (h = l.foreground ? o.value(l.foreground) : r.fg))
        : ((c = l.foreground ? o.value(l.foreground) : r.fg),
          (h = l.background ? o.value(l.background) : void 0)),
        (c = z(c, n)),
        (h = z(h, n)),
        l.decorations.has('dim') && (c = kr(c));
      let f = F.None;
      return (
        l.decorations.has('bold') && (f |= F.Bold),
        l.decorations.has('italic') && (f |= F.Italic),
        l.decorations.has('underline') && (f |= F.Underline),
        { content: l.value, offset: a[1], color: c, bgColor: h, fontStyle: f }
      );
    })
  );
}
function kr(r) {
  const e = r.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (e)
    if (e[3]) {
      const n = Math.round(Number.parseInt(e[3], 16) / 2)
        .toString(16)
        .padStart(2, '0');
      return `#${e[1]}${e[2]}${n}`;
    } else
      return e[2]
        ? `#${e[1]}${e[2]}80`
        : `#${Array.from(e[1])
            .map((n) => `${n}${n}`)
            .join('')}80`;
  const t = r.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return t ? `var(${t[1]}-dim)` : r;
}
class x extends Error {
  constructor(e) {
    super(e), (this.name = 'ShikiError');
  }
}
class Te {
  constructor(e, t, n) {
    u(this, '_stack');
    u(this, 'lang');
    u(this, 'theme');
    (this._stack = e), (this.lang = t), (this.theme = n);
  }
  static initial(e, t) {
    return new Te(Jt, e, t);
  }
  get scopes() {
    return xr(this._stack);
  }
  toJSON() {
    return { lang: this.lang, theme: this.theme, scopes: this.scopes };
  }
}
function xr(r) {
  const e = [],
    t = new Set();
  function n(s) {
    var i;
    if (t.has(s)) return;
    t.add(s);
    const o =
      (i = s == null ? void 0 : s.nameScopesList) == null
        ? void 0
        : i.scopeName;
    o && e.push(o), s.parent && n(s.parent);
  }
  return n(r), e;
}
function Ar(r) {
  if (!(r instanceof Te)) throw new x('Invalid grammar state');
  return r._stack;
}
function rt(r, e, t = {}) {
  const { lang: n = 'text', theme: s = r.getLoadedThemes()[0] } = t;
  if (tt(n) || nt(s))
    return Pe(e).map((l) => [{ content: l[0], offset: l[1] }]);
  const { theme: o, colorMap: i } = r.setTheme(s);
  if (n === 'ansi') return Nr(o, e, t);
  const a = r.getLanguage(n);
  if (t.grammarState) {
    if (t.grammarState.lang !== a.name)
      throw new x(
        `Grammar state language "${t.grammarState.lang}" does not match highlight language "${a.name}"`
      );
    if (t.grammarState.theme !== s)
      throw new x(
        `Grammar state theme "${t.grammarState.theme}" does not match highlight theme "${s}"`
      );
  }
  return Tr(e, a, o, i, t);
}
function Pr(r, e, t = {}) {
  const { lang: n = 'text', theme: s = r.getLoadedThemes()[0] } = t;
  if (tt(n) || nt(s)) throw new x('Plain language does not have grammar state');
  if (n === 'ansi') throw new x('ANSI language does not have grammar state');
  const { theme: o, colorMap: i } = r.setTheme(s),
    a = r.getLanguage(n);
  return new Te(st(e, a, o, i, t).stateStack, a.name, o.name);
}
function Tr(r, e, t, n, s) {
  return st(r, e, t, n, s).tokens;
}
function st(r, e, t, n, s) {
  const o = Re(t, s),
    { tokenizeMaxLineLength: i = 0, tokenizeTimeLimit: a = 500 } = s,
    l = Pe(r);
  let c = s.grammarState
      ? Ar(s.grammarState)
      : s.grammarContextCode != null
        ? st(s.grammarContextCode, e, t, n, {
            ...s,
            grammarState: void 0,
            grammarContextCode: void 0,
          }).stateStack
        : Jt,
    h = [];
  const f = [],
    d = [];
  if (s.includeExplanation)
    for (const g of t.settings) {
      let m;
      switch (typeof g.scope) {
        case 'string':
          m = g.scope.split(/,/).map((p) => p.trim());
          break;
        case 'object':
          m = g.scope;
          break;
        default:
          continue;
      }
      d.push({ settings: g, selectors: m.map((p) => p.split(/ /)) });
    }
  for (let g = 0, m = l.length; g < m; g++) {
    const [p, y] = l[g];
    if (p === '') {
      (h = []), f.push([]);
      continue;
    }
    if (i > 0 && p.length >= i) {
      (h = []), f.push([{ content: p, offset: y, color: '', fontStyle: 0 }]);
      continue;
    }
    let C, v, b;
    s.includeExplanation &&
      ((C = e.tokenizeLine(p, c)), (v = C.tokens), (b = 0));
    const S = e.tokenizeLine2(p, c, a),
      w = S.tokens.length / 2;
    for (let N = 0; N < w; N++) {
      const O = S.tokens[2 * N],
        U = N + 1 < w ? S.tokens[2 * N + 2] : p.length;
      if (O === U) continue;
      const at = S.tokens[2 * N + 1],
        yn = z(n[W.getForeground(at)], o),
        bn = W.getFontStyle(at),
        Ee = {
          content: p.substring(O, U),
          offset: y + O,
          color: yn,
          fontStyle: bn,
        };
      if (s.includeExplanation) {
        Ee.explanation = [];
        let ct = 0;
        for (; O + ct < U; ) {
          const Ie = v[b],
            ut = p.substring(Ie.startIndex, Ie.endIndex);
          (ct += ut.length),
            Ee.explanation.push({ content: ut, scopes: Lr(d, Ie.scopes) }),
            (b += 1);
        }
      }
      h.push(Ee);
    }
    f.push(h), (h = []), (c = S.ruleStack);
  }
  return { tokens: f, stateStack: c };
}
function Lr(r, e) {
  const t = [];
  for (let n = 0, s = e.length; n < s; n++) {
    const o = e.slice(0, n),
      i = e[n];
    t[n] = { scopeName: i, themeMatches: Ir(r, i, o) };
  }
  return t;
}
function Nt(r, e) {
  return r === e || (e.substring(0, r.length) === r && e[r.length] === '.');
}
function Er(r, e, t) {
  if (!Nt(r[r.length - 1], e)) return !1;
  let n = r.length - 2,
    s = t.length - 1;
  for (; n >= 0 && s >= 0; ) Nt(r[n], t[s]) && (n -= 1), (s -= 1);
  return n === -1;
}
function Ir(r, e, t) {
  const n = [];
  for (const { selectors: s, settings: o } of r)
    for (const i of s)
      if (Er(i, e, t)) {
        n.push(o);
        break;
      }
  return n;
}
function tn(r, e, t) {
  const n = Object.entries(t.themes)
      .filter((i) => i[1])
      .map((i) => ({ color: i[0], theme: i[1] })),
    s = Or(...n.map((i) => rt(r, e, { ...t, theme: i.theme })));
  return s[0].map((i, a) =>
    i.map((l, c) => {
      const h = { content: l.content, variants: {}, offset: l.offset };
      return (
        'includeExplanation' in t &&
          t.includeExplanation &&
          (h.explanation = l.explanation),
        s.forEach((f, d) => {
          const { content: g, explanation: m, offset: p, ...y } = f[a][c];
          h.variants[n[d].color] = y;
        }),
        h
      );
    })
  );
}
function Or(...r) {
  const e = r.map(() => []),
    t = r.length;
  for (let n = 0; n < r[0].length; n++) {
    const s = r.map((l) => l[n]),
      o = e.map(() => []);
    e.forEach((l, c) => l.push(o[c]));
    const i = s.map(() => 0),
      a = s.map((l) => l[0]);
    for (; a.every((l) => l); ) {
      const l = Math.min(...a.map((c) => c.content.length));
      for (let c = 0; c < t; c++) {
        const h = a[c];
        h.content.length === l
          ? (o[c].push(h), (i[c] += 1), (a[c] = s[c][i[c]]))
          : (o[c].push({ ...h, content: h.content.slice(0, l) }),
            (a[c] = {
              ...h,
              content: h.content.slice(l),
              offset: h.offset + l,
            }));
      }
    }
  }
  return e;
}
function Ne(r, e, t) {
  let n, s, o, i, a;
  if ('themes' in t) {
    const { defaultColor: l = 'light', cssVariablePrefix: c = '--shiki-' } = t,
      h = Object.entries(t.themes)
        .filter((p) => p[1])
        .map((p) => ({ color: p[0], theme: p[1] }))
        .sort((p, y) => (p.color === l ? -1 : y.color === l ? 1 : 0));
    if (h.length === 0) throw new x('`themes` option must not be empty');
    const f = tn(r, e, t);
    if (l && !h.find((p) => p.color === l))
      throw new x(
        `\`themes\` option must contain the defaultColor key \`${l}\``
      );
    const d = h.map((p) => r.getTheme(p.theme)),
      g = h.map((p) => p.color);
    o = f.map((p) => p.map((y) => Mr(y, g, c, l)));
    const m = h.map((p) => Re(p.theme, t));
    (s = h
      .map(
        (p, y) =>
          (y === 0 && l ? '' : `${c + p.color}:`) +
          (z(d[y].fg, m[y]) || 'inherit')
      )
      .join(';')),
      (n = h
        .map(
          (p, y) =>
            (y === 0 && l ? '' : `${c + p.color}-bg:`) +
            (z(d[y].bg, m[y]) || 'inherit')
        )
        .join(';')),
      (i = `shiki-themes ${d.map((p) => p.name).join(' ')}`),
      (a = l ? void 0 : [s, n].join(';'));
  } else if ('theme' in t) {
    const l = Re(t.theme, t);
    o = rt(r, e, t);
    const c = r.getTheme(t.theme);
    (n = z(c.bg, l)), (s = z(c.fg, l)), (i = c.name);
  } else
    throw new x('Invalid options, either `theme` or `themes` must be provided');
  return { tokens: o, fg: s, bg: n, themeName: i, rootStyle: a };
}
function Mr(r, e, t, n) {
  const s = {
      content: r.content,
      explanation: r.explanation,
      offset: r.offset,
    },
    o = e.map((l) => Zt(r.variants[l])),
    i = new Set(o.flatMap((l) => Object.keys(l))),
    a = o.reduce((l, c, h) => {
      for (const f of i) {
        const d = c[f] || 'inherit';
        if (h === 0 && n) l[f] = d;
        else {
          const g =
              f === 'color' ? '' : f === 'background-color' ? '-bg' : `-${f}`,
            m = t + e[h] + (f === 'color' ? '' : g);
          l[f] ? (l[f] += `;${m}:${d}`) : (l[f] = `${m}:${d}`);
        }
      }
      return l;
    }, {});
  return (s.htmlStyle = n ? en(a) : Object.values(a).join(';')), s;
}
function Br() {
  const r = new WeakMap();
  function e(n) {
    if (!r.has(n.meta)) {
      let o = function (a) {
        if (typeof a == 'number') {
          if (a < 0 || a > n.source.length)
            throw new x(
              `Invalid decoration offset: ${a}. Code length: ${n.source.length}`
            );
          return { ...s.indexToPos(a), offset: a };
        } else {
          const l = s.lines[a.line];
          if (l === void 0)
            throw new x(
              `Invalid decoration position ${JSON.stringify(a)}. Lines length: ${s.lines.length}`
            );
          if (a.character < 0 || a.character > l.length)
            throw new x(
              `Invalid decoration position ${JSON.stringify(a)}. Line ${a.line} length: ${l.length}`
            );
          return { ...a, offset: s.posToIndex(a.line, a.character) };
        }
      };
      const s = br(n.source),
        i = (n.options.decorations || []).map((a) => ({
          ...a,
          start: o(a.start),
          end: o(a.end),
        }));
      t(i), r.set(n.meta, { decorations: i, converter: s, source: n.source });
    }
    return r.get(n.meta);
  }
  function t(n) {
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      if (o.start.offset > o.end.offset)
        throw new x(
          `Invalid decoration range: ${JSON.stringify(o.start)} - ${JSON.stringify(o.end)}`
        );
      for (let i = s + 1; i < n.length; i++) {
        const a = n[i],
          l = o.start.offset < a.start.offset && a.start.offset < o.end.offset,
          c = o.start.offset < a.end.offset && a.end.offset < o.end.offset,
          h = a.start.offset < o.start.offset && o.start.offset < a.end.offset,
          f = a.start.offset < o.end.offset && o.end.offset < a.end.offset;
        if (l || c || h || f) {
          if ((c && c) || (h && f)) continue;
          throw new x(
            `Decorations ${JSON.stringify(o.start)} and ${JSON.stringify(a.start)} intersect.`
          );
        }
      }
    }
  }
  return {
    name: 'shiki:decorations',
    tokens(n) {
      var a;
      if (!((a = this.options.decorations) != null && a.length)) return;
      const o = e(this).decorations.flatMap((l) => [
        l.start.offset,
        l.end.offset,
      ]);
      return yr(n, o);
    },
    code(n) {
      var f;
      if (!((f = this.options.decorations) != null && f.length)) return;
      const s = e(this),
        o = Array.from(n.children).filter(
          (d) => d.type === 'element' && d.tagName === 'span'
        );
      if (o.length !== s.converter.lines.length)
        throw new x(
          `Number of lines in code element (${o.length}) does not match the number of lines in the source (${s.converter.lines.length}). Failed to apply decorations.`
        );
      function i(d, g, m, p) {
        const y = o[d];
        let C = '',
          v = -1,
          b = -1;
        function S(N) {
          return N.type === 'text'
            ? N.value
            : N.type === 'element'
              ? N.children.map(S).join('')
              : '';
        }
        if (
          (g === 0 && (v = 0),
          m === 0 && (b = 0),
          m === Number.POSITIVE_INFINITY && (b = y.children.length),
          v === -1 || b === -1)
        )
          for (let N = 0; N < y.children.length; N++)
            (C += S(y.children[N])),
              v === -1 && C.length === g && (v = N + 1),
              b === -1 && C.length === m && (b = N + 1);
        if (v === -1)
          throw new x(
            `Failed to find start index for decoration ${JSON.stringify(p.start)}`
          );
        if (b === -1)
          throw new x(
            `Failed to find end index for decoration ${JSON.stringify(p.end)}`
          );
        const w = y.children.slice(v, b);
        if (!p.alwaysWrap && w.length === y.children.length) l(y, p, 'line');
        else if (!p.alwaysWrap && w.length === 1 && w[0].type === 'element')
          l(w[0], p, 'token');
        else {
          const N = {
            type: 'element',
            tagName: 'span',
            properties: {},
            children: w,
          };
          l(N, p, 'wrapper'), y.children.splice(v, w.length, N);
        }
      }
      function a(d, g) {
        o[d] = l(o[d], g, 'line');
      }
      function l(d, g, m) {
        var C;
        const p = g.properties || {},
          y = g.transform || ((v) => v);
        return (
          (d.tagName = g.tagName || 'span'),
          (d.properties = { ...d.properties, ...p, class: d.properties.class }),
          (C = g.properties) != null && C.class && Qt(d, g.properties.class),
          (d = y(d, m) || d),
          d
        );
      }
      const c = [],
        h = s.decorations.sort((d, g) => g.start.offset - d.start.offset);
      for (const d of h) {
        const { start: g, end: m } = d;
        if (g.line === m.line) i(g.line, g.character, m.character, d);
        else if (g.line < m.line) {
          i(g.line, g.character, Number.POSITIVE_INFINITY, d);
          for (let p = g.line + 1; p < m.line; p++) c.unshift(() => a(p, d));
          i(m.line, 0, m.character, d);
        }
      }
      c.forEach((d) => d());
    },
  };
}
const Dr = [Br()];
function ke(r) {
  return [...(r.transformers || []), ...Dr];
}
function xe(
  r,
  e,
  t,
  n = {
    meta: {},
    options: t,
    codeToHast: (s, o) => xe(r, s, o),
    codeToTokens: (s, o) => Ne(r, s, o),
  }
) {
  var d, g;
  let s = e;
  for (const m of ke(t))
    s = ((d = m.preprocess) == null ? void 0 : d.call(n, s, t)) || s;
  let { tokens: o, fg: i, bg: a, themeName: l, rootStyle: c } = Ne(r, s, t);
  const { mergeWhitespaces: h = !0 } = t;
  h === !0 ? (o = Fr(o)) : h === 'never' && (o = Ur(o));
  const f = {
    ...n,
    get source() {
      return s;
    },
  };
  for (const m of ke(t))
    o = ((g = m.tokens) == null ? void 0 : g.call(f, o)) || o;
  return Gr(o, { ...t, fg: i, bg: a, themeName: l, rootStyle: c }, f);
}
function Gr(r, e, t) {
  var d, g, m;
  const n = ke(e),
    s = [],
    o = { type: 'root', children: [] },
    { structure: i = 'classic' } = e;
  let a = {
      type: 'element',
      tagName: 'pre',
      properties: {
        class: `shiki ${e.themeName || ''}`,
        style: e.rootStyle || `background-color:${e.bg};color:${e.fg}`,
        tabindex: '0',
        ...Object.fromEntries(
          Array.from(Object.entries(e.meta || {})).filter(
            ([p]) => !p.startsWith('_')
          )
        ),
      },
      children: [],
    },
    l = { type: 'element', tagName: 'code', properties: {}, children: s };
  const c = [],
    h = {
      ...t,
      structure: i,
      addClassToHast: Qt,
      get source() {
        return t.source;
      },
      get tokens() {
        return r;
      },
      get options() {
        return e;
      },
      get root() {
        return o;
      },
      get pre() {
        return a;
      },
      get code() {
        return l;
      },
      get lines() {
        return c;
      },
    };
  if (
    (r.forEach((p, y) => {
      var b, S;
      y &&
        (i === 'inline'
          ? o.children.push({
              type: 'element',
              tagName: 'br',
              properties: {},
              children: [],
            })
          : i === 'classic' &&
            s.push({
              type: 'text',
              value: `
`,
            }));
      let C = {
          type: 'element',
          tagName: 'span',
          properties: { class: 'line' },
          children: [],
        },
        v = 0;
      for (const w of p) {
        let N = {
          type: 'element',
          tagName: 'span',
          properties: {},
          children: [{ type: 'text', value: w.content }],
        };
        const O = w.htmlStyle || en(Zt(w));
        O && (N.properties.style = O);
        for (const U of n)
          N =
            ((b = U == null ? void 0 : U.span) == null
              ? void 0
              : b.call(h, N, y + 1, v, C)) || N;
        i === 'inline'
          ? o.children.push(N)
          : i === 'classic' && C.children.push(N),
          (v += w.content.length);
      }
      if (i === 'classic') {
        for (const w of n)
          C =
            ((S = w == null ? void 0 : w.line) == null
              ? void 0
              : S.call(h, C, y + 1)) || C;
        c.push(C), s.push(C);
      }
    }),
    i === 'classic')
  ) {
    for (const p of n)
      l =
        ((d = p == null ? void 0 : p.code) == null ? void 0 : d.call(h, l)) ||
        l;
    a.children.push(l);
    for (const p of n)
      a =
        ((g = p == null ? void 0 : p.pre) == null ? void 0 : g.call(h, a)) || a;
    o.children.push(a);
  }
  let f = o;
  for (const p of n)
    f =
      ((m = p == null ? void 0 : p.root) == null ? void 0 : m.call(h, f)) || f;
  return f;
}
function Fr(r) {
  return r.map((e) => {
    const t = [];
    let n = '',
      s = 0;
    return (
      e.forEach((o, i) => {
        const l = !(o.fontStyle && o.fontStyle & F.Underline);
        l && o.content.match(/^\s+$/) && e[i + 1]
          ? (s || (s = o.offset), (n += o.content))
          : n
            ? (l
                ? t.push({ ...o, offset: s, content: n + o.content })
                : t.push({ content: n, offset: s }, o),
              (s = 0),
              (n = ''))
            : t.push(o);
      }),
      t
    );
  });
}
function Ur(r) {
  return r.map((e) =>
    e.flatMap((t) => {
      if (t.content.match(/^\s+$/)) return t;
      const n = t.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!n) return t;
      const [, s, o, i] = n;
      if (!s && !i) return t;
      const a = [{ ...t, offset: t.offset + s.length, content: o }];
      return (
        s && a.unshift({ content: s, offset: t.offset }),
        i && a.push({ content: i, offset: t.offset + s.length + o.length }),
        a
      );
    })
  );
}
const $r = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];
class fe {
  constructor(e, t, n) {
    (this.property = e), (this.normal = t), n && (this.space = n);
  }
}
fe.prototype.property = {};
fe.prototype.normal = {};
fe.prototype.space = null;
function nn(r, e) {
  const t = {},
    n = {};
  let s = -1;
  for (; ++s < r.length; )
    Object.assign(t, r[s].property), Object.assign(n, r[s].normal);
  return new fe(t, n, e);
}
function Xe(r) {
  return r.toLowerCase();
}
class G {
  constructor(e, t) {
    (this.property = e), (this.attribute = t);
  }
}
G.prototype.space = null;
G.prototype.boolean = !1;
G.prototype.booleanish = !1;
G.prototype.overloadedBoolean = !1;
G.prototype.number = !1;
G.prototype.commaSeparated = !1;
G.prototype.spaceSeparated = !1;
G.prototype.commaOrSpaceSeparated = !1;
G.prototype.mustUseProperty = !1;
G.prototype.defined = !1;
let jr = 0;
const R = V(),
  A = V(),
  rn = V(),
  _ = V(),
  k = V(),
  Q = V(),
  D = V();
function V() {
  return 2 ** ++jr;
}
var Je = Object.freeze({
  __proto__: null,
  boolean: R,
  booleanish: A,
  commaOrSpaceSeparated: D,
  commaSeparated: Q,
  number: _,
  overloadedBoolean: rn,
  spaceSeparated: k,
});
const $e = Object.keys(Je);
class ot extends G {
  constructor(e, t, n, s) {
    let o = -1;
    if ((super(e, t), kt(this, 'space', s), typeof n == 'number'))
      for (; ++o < $e.length; ) {
        const i = $e[o];
        kt(this, $e[o], (n & Je[i]) === Je[i]);
      }
  }
}
ot.prototype.defined = !0;
function kt(r, e, t) {
  t && (r[e] = t);
}
const Wr = {}.hasOwnProperty;
function ne(r) {
  const e = {},
    t = {};
  let n;
  for (n in r.properties)
    if (Wr.call(r.properties, n)) {
      const s = r.properties[n],
        o = new ot(n, r.transform(r.attributes || {}, n), s, r.space);
      r.mustUseProperty &&
        r.mustUseProperty.includes(n) &&
        (o.mustUseProperty = !0),
        (e[n] = o),
        (t[Xe(n)] = n),
        (t[Xe(o.attribute)] = n);
    }
  return new fe(e, t, r.space);
}
const sn = ne({
    space: 'xlink',
    transform(r, e) {
      return 'xlink:' + e.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  on = ne({
    space: 'xml',
    transform(r, e) {
      return 'xml:' + e.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function ln(r, e) {
  return e in r ? r[e] : e;
}
function an(r, e) {
  return ln(r, e.toLowerCase());
}
const cn = ne({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: an,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  un = ne({
    transform(r, e) {
      return e === 'role' ? e : 'aria-' + e.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: A,
      ariaAutoComplete: null,
      ariaBusy: A,
      ariaChecked: A,
      ariaColCount: _,
      ariaColIndex: _,
      ariaColSpan: _,
      ariaControls: k,
      ariaCurrent: null,
      ariaDescribedBy: k,
      ariaDetails: null,
      ariaDisabled: A,
      ariaDropEffect: k,
      ariaErrorMessage: null,
      ariaExpanded: A,
      ariaFlowTo: k,
      ariaGrabbed: A,
      ariaHasPopup: null,
      ariaHidden: A,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: k,
      ariaLevel: _,
      ariaLive: null,
      ariaModal: A,
      ariaMultiLine: A,
      ariaMultiSelectable: A,
      ariaOrientation: null,
      ariaOwns: k,
      ariaPlaceholder: null,
      ariaPosInSet: _,
      ariaPressed: A,
      ariaReadOnly: A,
      ariaRelevant: null,
      ariaRequired: A,
      ariaRoleDescription: k,
      ariaRowCount: _,
      ariaRowIndex: _,
      ariaRowSpan: _,
      ariaSelected: A,
      ariaSetSize: _,
      ariaSort: null,
      ariaValueMax: _,
      ariaValueMin: _,
      ariaValueNow: _,
      ariaValueText: null,
      role: null,
    },
  }),
  zr = ne({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: an,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Q,
      acceptCharset: k,
      accessKey: k,
      action: null,
      allow: null,
      allowFullScreen: R,
      allowPaymentRequest: R,
      allowUserMedia: R,
      alt: null,
      as: null,
      async: R,
      autoCapitalize: null,
      autoComplete: k,
      autoFocus: R,
      autoPlay: R,
      blocking: k,
      capture: null,
      charSet: null,
      checked: R,
      cite: null,
      className: k,
      cols: _,
      colSpan: null,
      content: null,
      contentEditable: A,
      controls: R,
      controlsList: k,
      coords: _ | Q,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: R,
      defer: R,
      dir: null,
      dirName: null,
      disabled: R,
      download: rn,
      draggable: A,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: R,
      formTarget: null,
      headers: k,
      height: _,
      hidden: R,
      high: _,
      href: null,
      hrefLang: null,
      htmlFor: k,
      httpEquiv: k,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: R,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: R,
      itemId: null,
      itemProp: k,
      itemRef: k,
      itemScope: R,
      itemType: k,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: R,
      low: _,
      manifest: null,
      max: null,
      maxLength: _,
      media: null,
      method: null,
      min: null,
      minLength: _,
      multiple: R,
      muted: R,
      name: null,
      nonce: null,
      noModule: R,
      noValidate: R,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: R,
      optimum: _,
      pattern: null,
      ping: k,
      placeholder: null,
      playsInline: R,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: R,
      referrerPolicy: null,
      rel: k,
      required: R,
      reversed: R,
      rows: _,
      rowSpan: _,
      sandbox: k,
      scope: null,
      scoped: R,
      seamless: R,
      selected: R,
      shadowRootDelegatesFocus: R,
      shadowRootMode: null,
      shape: null,
      size: _,
      sizes: null,
      slot: null,
      span: _,
      spellCheck: A,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: _,
      step: null,
      style: null,
      tabIndex: _,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: R,
      useMap: null,
      value: A,
      width: _,
      wrap: null,
      align: null,
      aLink: null,
      archive: k,
      axis: null,
      background: null,
      bgColor: null,
      border: _,
      borderColor: null,
      bottomMargin: _,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: R,
      declare: R,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: _,
      leftMargin: _,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: _,
      marginWidth: _,
      noResize: R,
      noHref: R,
      noShade: R,
      noWrap: R,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: _,
      rules: null,
      scheme: null,
      scrolling: A,
      standby: null,
      summary: null,
      text: null,
      topMargin: _,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: _,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: R,
      disableRemotePlayback: R,
      prefix: null,
      property: null,
      results: _,
      security: null,
      unselectable: null,
    },
  }),
  Hr = ne({
    space: 'svg',
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    transform: ln,
    properties: {
      about: D,
      accentHeight: _,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: _,
      amplitude: _,
      arabicForm: null,
      ascent: _,
      attributeName: null,
      attributeType: null,
      azimuth: _,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: _,
      by: null,
      calcMode: null,
      capHeight: _,
      className: k,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: _,
      diffuseConstant: _,
      direction: null,
      display: null,
      dur: null,
      divisor: _,
      dominantBaseline: null,
      download: R,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: _,
      enableBackground: null,
      end: null,
      event: null,
      exponent: _,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: _,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Q,
      g2: Q,
      glyphName: Q,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: _,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: _,
      horizOriginX: _,
      horizOriginY: _,
      id: null,
      ideographic: _,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: _,
      k: _,
      k1: _,
      k2: _,
      k3: _,
      k4: _,
      kernelMatrix: D,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: _,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: _,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: _,
      overlineThickness: _,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: _,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: k,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: _,
      pointsAtY: _,
      pointsAtZ: _,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: D,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: D,
      rev: D,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: D,
      requiredFeatures: D,
      requiredFonts: D,
      requiredFormats: D,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: _,
      specularExponent: _,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: _,
      strikethroughThickness: _,
      string: null,
      stroke: null,
      strokeDashArray: D,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: _,
      strokeOpacity: _,
      strokeWidth: null,
      style: null,
      surfaceScale: _,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: D,
      tabIndex: _,
      tableValues: null,
      target: null,
      targetX: _,
      targetY: _,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: D,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: _,
      underlineThickness: _,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: _,
      values: null,
      vAlphabetic: _,
      vMathematical: _,
      vectorEffect: null,
      vHanging: _,
      vIdeographic: _,
      version: null,
      vertAdvY: _,
      vertOriginX: _,
      vertOriginY: _,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: _,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  qr = /^data[-\w.:]+$/i,
  xt = /-[a-z]/g,
  Kr = /[A-Z]/g;
function Vr(r, e) {
  const t = Xe(e);
  let n = e,
    s = G;
  if (t in r.normal) return r.property[r.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === 'data' && qr.test(e)) {
    if (e.charAt(4) === '-') {
      const o = e.slice(5).replace(xt, Xr);
      n = 'data' + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = e.slice(4);
      if (!xt.test(o)) {
        let i = o.replace(Kr, Yr);
        i.charAt(0) !== '-' && (i = '-' + i), (e = 'data' + i);
      }
    }
    s = ot;
  }
  return new s(n, e);
}
function Yr(r) {
  return '-' + r.toLowerCase();
}
function Xr(r) {
  return r.charAt(1).toUpperCase();
}
const Jr = nn([on, sn, cn, un, zr], 'html'),
  hn = nn([on, sn, cn, un, Hr], 'svg'),
  At = {}.hasOwnProperty;
function Qr(r, e) {
  const t = e || {};
  function n(s, ...o) {
    let i = n.invalid;
    const a = n.handlers;
    if (s && At.call(s, r)) {
      const l = String(s[r]);
      i = At.call(a, l) ? a[l] : n.unknown;
    }
    if (i) return i.call(this, s, ...o);
  }
  return (
    (n.handlers = t.handlers || {}),
    (n.invalid = t.invalid),
    (n.unknown = t.unknown),
    n
  );
}
function Zr(r, e) {
  if (
    ((r = r.replace(e.subset ? es(e.subset) : /["&'<>`]/g, n)),
    e.subset || e.escapeOnly)
  )
    return r;
  return r
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, t)
    .replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, n);
  function t(s, o, i) {
    return e.format(
      (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536,
      i.charCodeAt(o + 2),
      e
    );
  }
  function n(s, o, i) {
    return e.format(s.charCodeAt(0), i.charCodeAt(o + 1), e);
  }
}
function es(r) {
  const e = [];
  let t = -1;
  for (; ++t < r.length; ) e.push(r[t].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'));
  return new RegExp('(?:' + e.join('|') + ')', 'g');
}
function ts(r, e, t) {
  const n = '&#x' + r.toString(16).toUpperCase();
  return t && e && !/[\dA-Fa-f]/.test(String.fromCharCode(e)) ? n : n + ';';
}
function ns(r, e, t) {
  const n = '&#' + String(r);
  return t && e && !/\d/.test(String.fromCharCode(e)) ? n : n + ';';
}
const rs = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml',
  ],
  je = {
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    fnof: 'ƒ',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    bull: '•',
    hellip: '…',
    prime: '′',
    Prime: '″',
    oline: '‾',
    frasl: '⁄',
    weierp: '℘',
    image: 'ℑ',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    quot: '"',
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    permil: '‰',
    lsaquo: '‹',
    rsaquo: '›',
    euro: '€',
  },
  ss = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'],
  fn = {}.hasOwnProperty,
  Qe = {};
let pe;
for (pe in je) fn.call(je, pe) && (Qe[je[pe]] = pe);
function os(r, e, t, n) {
  const s = String.fromCharCode(r);
  if (fn.call(Qe, s)) {
    const o = Qe[s],
      i = '&' + o;
    return t &&
      rs.includes(o) &&
      !ss.includes(o) &&
      (!n || (e && e !== 61 && /[^\da-z]/i.test(String.fromCharCode(e))))
      ? i
      : i + ';';
  }
  return '';
}
function is(r, e, t) {
  let n = ts(r, e, t.omitOptionalSemicolons),
    s;
  if (
    ((t.useNamedReferences || t.useShortestReferences) &&
      (s = os(r, e, t.omitOptionalSemicolons, t.attribute)),
    (t.useShortestReferences || !s) && t.useShortestReferences)
  ) {
    const o = ns(r, e, t.omitOptionalSemicolons);
    o.length < n.length && (n = o);
  }
  return s && (!t.useShortestReferences || s.length < n.length) ? s : n;
}
function Z(r, e) {
  return Zr(r, Object.assign({ format: is }, e));
}
const ls = /^>|^->|<!--|-->|--!>|<!-$/g,
  as = ['>'],
  cs = ['<', '>'];
function us(r, e, t, n) {
  return n.settings.bogusComments
    ? '<?' +
        Z(
          r.value,
          Object.assign({}, n.settings.characterReferences, { subset: as })
        ) +
        '>'
    : '<!--' + r.value.replace(ls, s) + '-->';
  function s(o) {
    return Z(
      o,
      Object.assign({}, n.settings.characterReferences, { subset: cs })
    );
  }
}
function hs(r, e, t, n) {
  return (
    '<!' +
    (n.settings.upperDoctype ? 'DOCTYPE' : 'doctype') +
    (n.settings.tightDoctype ? '' : ' ') +
    'html>'
  );
}
function Pt(r, e) {
  const t = String(r);
  if (typeof e != 'string') throw new TypeError('Expected character');
  let n = 0,
    s = t.indexOf(e);
  for (; s !== -1; ) n++, (s = t.indexOf(e, s + e.length));
  return n;
}
function fs(r, e) {
  const t = e || {};
  return (r[r.length - 1] === '' ? [...r, ''] : r)
    .join((t.padRight ? ' ' : '') + ',' + (t.padLeft === !1 ? '' : ' '))
    .trim();
}
function ds(r) {
  return r.join(' ').trim();
}
const ps = /[ \t\n\f\r]/g;
function it(r) {
  return typeof r == 'object' ? (r.type === 'text' ? Tt(r.value) : !1) : Tt(r);
}
function Tt(r) {
  return r.replace(ps, '') === '';
}
const P = pn(1),
  dn = pn(-1),
  gs = [];
function pn(r) {
  return e;
  function e(t, n, s) {
    const o = t ? t.children : gs;
    let i = (n || 0) + r,
      a = o[i];
    if (!s) for (; a && it(a); ) (i += r), (a = o[i]);
    return a;
  }
}
const ms = {}.hasOwnProperty;
function gn(r) {
  return e;
  function e(t, n, s) {
    return ms.call(r, t.tagName) && r[t.tagName](t, n, s);
  }
}
const lt = gn({
  body: ys,
  caption: We,
  colgroup: We,
  dd: ws,
  dt: Ss,
  head: We,
  html: _s,
  li: Cs,
  optgroup: vs,
  option: Rs,
  p: bs,
  rp: Lt,
  rt: Lt,
  tbody: ks,
  td: Et,
  tfoot: xs,
  th: Et,
  thead: Ns,
  tr: As,
});
function We(r, e, t) {
  const n = P(t, e, !0);
  return (
    !n ||
    (n.type !== 'comment' && !(n.type === 'text' && it(n.value.charAt(0))))
  );
}
function _s(r, e, t) {
  const n = P(t, e);
  return !n || n.type !== 'comment';
}
function ys(r, e, t) {
  const n = P(t, e);
  return !n || n.type !== 'comment';
}
function bs(r, e, t) {
  const n = P(t, e);
  return n
    ? n.type === 'element' &&
        (n.tagName === 'address' ||
          n.tagName === 'article' ||
          n.tagName === 'aside' ||
          n.tagName === 'blockquote' ||
          n.tagName === 'details' ||
          n.tagName === 'div' ||
          n.tagName === 'dl' ||
          n.tagName === 'fieldset' ||
          n.tagName === 'figcaption' ||
          n.tagName === 'figure' ||
          n.tagName === 'footer' ||
          n.tagName === 'form' ||
          n.tagName === 'h1' ||
          n.tagName === 'h2' ||
          n.tagName === 'h3' ||
          n.tagName === 'h4' ||
          n.tagName === 'h5' ||
          n.tagName === 'h6' ||
          n.tagName === 'header' ||
          n.tagName === 'hgroup' ||
          n.tagName === 'hr' ||
          n.tagName === 'main' ||
          n.tagName === 'menu' ||
          n.tagName === 'nav' ||
          n.tagName === 'ol' ||
          n.tagName === 'p' ||
          n.tagName === 'pre' ||
          n.tagName === 'section' ||
          n.tagName === 'table' ||
          n.tagName === 'ul')
    : !t ||
        !(
          t.type === 'element' &&
          (t.tagName === 'a' ||
            t.tagName === 'audio' ||
            t.tagName === 'del' ||
            t.tagName === 'ins' ||
            t.tagName === 'map' ||
            t.tagName === 'noscript' ||
            t.tagName === 'video')
        );
}
function Cs(r, e, t) {
  const n = P(t, e);
  return !n || (n.type === 'element' && n.tagName === 'li');
}
function Ss(r, e, t) {
  const n = P(t, e);
  return !!(
    n &&
    n.type === 'element' &&
    (n.tagName === 'dt' || n.tagName === 'dd')
  );
}
function ws(r, e, t) {
  const n = P(t, e);
  return (
    !n || (n.type === 'element' && (n.tagName === 'dt' || n.tagName === 'dd'))
  );
}
function Lt(r, e, t) {
  const n = P(t, e);
  return (
    !n || (n.type === 'element' && (n.tagName === 'rp' || n.tagName === 'rt'))
  );
}
function vs(r, e, t) {
  const n = P(t, e);
  return !n || (n.type === 'element' && n.tagName === 'optgroup');
}
function Rs(r, e, t) {
  const n = P(t, e);
  return (
    !n ||
    (n.type === 'element' &&
      (n.tagName === 'option' || n.tagName === 'optgroup'))
  );
}
function Ns(r, e, t) {
  const n = P(t, e);
  return !!(
    n &&
    n.type === 'element' &&
    (n.tagName === 'tbody' || n.tagName === 'tfoot')
  );
}
function ks(r, e, t) {
  const n = P(t, e);
  return (
    !n ||
    (n.type === 'element' && (n.tagName === 'tbody' || n.tagName === 'tfoot'))
  );
}
function xs(r, e, t) {
  return !P(t, e);
}
function As(r, e, t) {
  const n = P(t, e);
  return !n || (n.type === 'element' && n.tagName === 'tr');
}
function Et(r, e, t) {
  const n = P(t, e);
  return (
    !n || (n.type === 'element' && (n.tagName === 'td' || n.tagName === 'th'))
  );
}
const Ps = gn({ body: Es, colgroup: Is, head: Ls, html: Ts, tbody: Os });
function Ts(r) {
  const e = P(r, -1);
  return !e || e.type !== 'comment';
}
function Ls(r) {
  const e = r.children,
    t = [];
  let n = -1;
  for (; ++n < e.length; ) {
    const s = e[n];
    if (
      s.type === 'element' &&
      (s.tagName === 'title' || s.tagName === 'base')
    ) {
      if (t.includes(s.tagName)) return !1;
      t.push(s.tagName);
    }
  }
  return e.length > 0;
}
function Es(r) {
  const e = P(r, -1, !0);
  return (
    !e ||
    (e.type !== 'comment' &&
      !(e.type === 'text' && it(e.value.charAt(0))) &&
      !(
        e.type === 'element' &&
        (e.tagName === 'meta' ||
          e.tagName === 'link' ||
          e.tagName === 'script' ||
          e.tagName === 'style' ||
          e.tagName === 'template')
      ))
  );
}
function Is(r, e, t) {
  const n = dn(t, e),
    s = P(r, -1, !0);
  return t &&
    n &&
    n.type === 'element' &&
    n.tagName === 'colgroup' &&
    lt(n, t.children.indexOf(n), t)
    ? !1
    : !!(s && s.type === 'element' && s.tagName === 'col');
}
function Os(r, e, t) {
  const n = dn(t, e),
    s = P(r, -1);
  return t &&
    n &&
    n.type === 'element' &&
    (n.tagName === 'thead' || n.tagName === 'tbody') &&
    lt(n, t.children.indexOf(n), t)
    ? !1
    : !!(s && s.type === 'element' && s.tagName === 'tr');
}
const ge = {
  name: [
    [
      `	
\f\r &/=>`.split(''),
      `	
\f\r "&'/=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(''),
      `\0	
\f\r "&'/<=>\``.split(''),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
  ],
  single: [
    ["&'".split(''), '"&\'`'.split('')],
    ["\0&'".split(''), '\0"&\'`'.split('')],
  ],
  double: [
    ['"&'.split(''), '"&\'`'.split('')],
    ['\0"&'.split(''), '\0"&\'`'.split('')],
  ],
};
function Ms(r, e, t, n) {
  const s = n.schema,
    o = s.space === 'svg' ? !1 : n.settings.omitOptionalTags;
  let i =
    s.space === 'svg'
      ? n.settings.closeEmptyElements
      : n.settings.voids.includes(r.tagName.toLowerCase());
  const a = [];
  let l;
  s.space === 'html' && r.tagName === 'svg' && (n.schema = hn);
  const c = Bs(n, r.properties),
    h = n.all(s.space === 'html' && r.tagName === 'template' ? r.content : r);
  return (
    (n.schema = s),
    h && (i = !1),
    (c || !o || !Ps(r, e, t)) &&
      (a.push('<', r.tagName, c ? ' ' + c : ''),
      i &&
        (s.space === 'svg' || n.settings.closeSelfClosing) &&
        ((l = c.charAt(c.length - 1)),
        (!n.settings.tightSelfClosing ||
          l === '/' ||
          (l && l !== '"' && l !== "'")) &&
          a.push(' '),
        a.push('/')),
      a.push('>')),
    a.push(h),
    !i && (!o || !lt(r, e, t)) && a.push('</' + r.tagName + '>'),
    a.join('')
  );
}
function Bs(r, e) {
  const t = [];
  let n = -1,
    s;
  if (e) {
    for (s in e)
      if (e[s] !== null && e[s] !== void 0) {
        const o = Ds(r, s, e[s]);
        o && t.push(o);
      }
  }
  for (; ++n < t.length; ) {
    const o = r.settings.tightAttributes
      ? t[n].charAt(t[n].length - 1)
      : void 0;
    n !== t.length - 1 && o !== '"' && o !== "'" && (t[n] += ' ');
  }
  return t.join('');
}
function Ds(r, e, t) {
  const n = Vr(r.schema, e),
    s = r.settings.allowParseErrors && r.schema.space === 'html' ? 0 : 1,
    o = r.settings.allowDangerousCharacters ? 0 : 1;
  let i = r.quote,
    a;
  if (
    (n.overloadedBoolean && (t === n.attribute || t === '')
      ? (t = !0)
      : (n.boolean || (n.overloadedBoolean && typeof t != 'string')) &&
        (t = !!t),
    t == null || t === !1 || (typeof t == 'number' && Number.isNaN(t)))
  )
    return '';
  const l = Z(
    n.attribute,
    Object.assign({}, r.settings.characterReferences, { subset: ge.name[s][o] })
  );
  return t === !0 ||
    ((t = Array.isArray(t)
      ? (n.commaSeparated ? fs : ds)(t, {
          padLeft: !r.settings.tightCommaSeparatedLists,
        })
      : String(t)),
    r.settings.collapseEmptyAttributes && !t)
    ? l
    : (r.settings.preferUnquoted &&
        (a = Z(
          t,
          Object.assign({}, r.settings.characterReferences, {
            attribute: !0,
            subset: ge.unquoted[s][o],
          })
        )),
      a !== t &&
        (r.settings.quoteSmart &&
          Pt(t, i) > Pt(t, r.alternative) &&
          (i = r.alternative),
        (a =
          i +
          Z(
            t,
            Object.assign({}, r.settings.characterReferences, {
              subset: (i === "'" ? ge.single : ge.double)[s][o],
              attribute: !0,
            })
          ) +
          i)),
      l + (a && '=' + a));
}
const Gs = ['<', '&'];
function mn(r, e, t, n) {
  return t &&
    t.type === 'element' &&
    (t.tagName === 'script' || t.tagName === 'style')
    ? r.value
    : Z(
        r.value,
        Object.assign({}, n.settings.characterReferences, { subset: Gs })
      );
}
function Fs(r, e, t, n) {
  return n.settings.allowDangerousHtml ? r.value : mn(r, e, t, n);
}
function Us(r, e, t, n) {
  return n.all(r);
}
const $s = Qr('type', {
  invalid: js,
  unknown: Ws,
  handlers: {
    comment: us,
    doctype: hs,
    element: Ms,
    raw: Fs,
    root: Us,
    text: mn,
  },
});
function js(r) {
  throw new Error('Expected node, not `' + r + '`');
}
function Ws(r) {
  const e = r;
  throw new Error('Cannot compile unknown node `' + e.type + '`');
}
const zs = {},
  Hs = {},
  qs = [];
function Ks(r, e) {
  const t = zs,
    n = t.quote || '"',
    s = n === '"' ? "'" : '"';
  if (n !== '"' && n !== "'")
    throw new Error('Invalid quote `' + n + '`, expected `\'` or `"`');
  return {
    one: Vs,
    all: Ys,
    settings: {
      omitOptionalTags: t.omitOptionalTags || !1,
      allowParseErrors: t.allowParseErrors || !1,
      allowDangerousCharacters: t.allowDangerousCharacters || !1,
      quoteSmart: t.quoteSmart || !1,
      preferUnquoted: t.preferUnquoted || !1,
      tightAttributes: t.tightAttributes || !1,
      upperDoctype: t.upperDoctype || !1,
      tightDoctype: t.tightDoctype || !1,
      bogusComments: t.bogusComments || !1,
      tightCommaSeparatedLists: t.tightCommaSeparatedLists || !1,
      tightSelfClosing: t.tightSelfClosing || !1,
      collapseEmptyAttributes: t.collapseEmptyAttributes || !1,
      allowDangerousHtml: t.allowDangerousHtml || !1,
      voids: t.voids || $r,
      characterReferences: t.characterReferences || Hs,
      closeSelfClosing: t.closeSelfClosing || !1,
      closeEmptyElements: t.closeEmptyElements || !1,
    },
    schema: t.space === 'svg' ? hn : Jr,
    quote: n,
    alternative: s,
  }.one(Array.isArray(r) ? { type: 'root', children: r } : r, void 0, void 0);
}
function Vs(r, e, t) {
  return $s(r, e, t, this);
}
function Ys(r) {
  const e = [],
    t = (r && r.children) || qs;
  let n = -1;
  for (; ++n < t.length; ) e[n] = this.one(t[n], n, r);
  return e.join('');
}
function Xs(r, e, t) {
  var o;
  const n = {
    meta: {},
    options: t,
    codeToHast: (i, a) => xe(r, i, a),
    codeToTokens: (i, a) => Ne(r, i, a),
  };
  let s = Ks(xe(r, e, t, n));
  for (const i of ke(t))
    s = ((o = i.postprocess) == null ? void 0 : o.call(n, s, t)) || s;
  return s;
}
async function Js(r) {
  let e, t;
  const n = {};
  function s(p) {
    (t = p), (n.HEAPU8 = new Uint8Array(p)), (n.HEAPU32 = new Uint32Array(p));
  }
  function o() {
    return typeof performance < 'u' ? performance.now() : Date.now();
  }
  function i(p, y, C) {
    n.HEAPU8.copyWithin(p, y, y + C);
  }
  function a() {
    return 2147483648;
  }
  function l(p) {
    try {
      return e.grow((p - t.byteLength + 65535) >>> 16), s(e.buffer), 1;
    } catch {}
  }
  function c(p) {
    const y = n.HEAPU8.length;
    p = p >>> 0;
    const C = a();
    if (p > C) return !1;
    const v = (b, S) => b + ((S - (b % S)) % S);
    for (let b = 1; b <= 4; b *= 2) {
      let S = y * (1 + 0.2 / b);
      S = Math.min(S, p + 100663296);
      const w = Math.min(C, v(Math.max(p, S), 65536));
      if (l(w)) return !0;
    }
    return !1;
  }
  const h = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
  function f(p, y, C = 1024) {
    const v = y + C;
    let b = y;
    for (; p[b] && !(b >= v); ) ++b;
    if (b - y > 16 && p.buffer && h) return h.decode(p.subarray(y, b));
    let S = '';
    for (; y < b; ) {
      let w = p[y++];
      if (!(w & 128)) {
        S += String.fromCharCode(w);
        continue;
      }
      const N = p[y++] & 63;
      if ((w & 224) === 192) {
        S += String.fromCharCode(((w & 31) << 6) | N);
        continue;
      }
      const O = p[y++] & 63;
      if (
        ((w & 240) === 224
          ? (w = ((w & 15) << 12) | (N << 6) | O)
          : (w = ((w & 7) << 18) | (N << 12) | (O << 6) | (p[y++] & 63)),
        w < 65536)
      )
        S += String.fromCharCode(w);
      else {
        const U = w - 65536;
        S += String.fromCharCode(55296 | (U >> 10), 56320 | (U & 1023));
      }
    }
    return S;
  }
  function d(p, y) {
    return p ? f(n.HEAPU8, p, y) : '';
  }
  const g = {
    emscripten_get_now: o,
    emscripten_memcpy_big: i,
    emscripten_resize_heap: c,
    fd_write: () => 0,
  };
  async function m() {
    const y = await r({ env: g, wasi_snapshot_preview1: g });
    (e = y.memory), s(e.buffer), Object.assign(n, y), (n.UTF8ToString = d);
  }
  return await m(), n;
}
let L = null,
  Qs = !1;
function Zs(r) {
  throw new x(r.UTF8ToString(r.getLastOnigError()));
}
class Le {
  constructor(e) {
    u(this, 'utf16Length');
    u(this, 'utf8Length');
    u(this, 'utf16Value');
    u(this, 'utf8Value');
    u(this, 'utf16OffsetToUtf8');
    u(this, 'utf8OffsetToUtf16');
    const t = e.length,
      n = Le._utf8ByteLength(e),
      s = n !== t,
      o = s ? new Uint32Array(t + 1) : null;
    s && (o[t] = n);
    const i = s ? new Uint32Array(n + 1) : null;
    s && (i[n] = t);
    const a = new Uint8Array(n);
    let l = 0;
    for (let c = 0; c < t; c++) {
      const h = e.charCodeAt(c);
      let f = h,
        d = !1;
      if (h >= 55296 && h <= 56319 && c + 1 < t) {
        const g = e.charCodeAt(c + 1);
        g >= 56320 &&
          g <= 57343 &&
          ((f = (((h - 55296) << 10) + 65536) | (g - 56320)), (d = !0));
      }
      s &&
        ((o[c] = l),
        d && (o[c + 1] = l),
        f <= 127
          ? (i[l + 0] = c)
          : f <= 2047
            ? ((i[l + 0] = c), (i[l + 1] = c))
            : f <= 65535
              ? ((i[l + 0] = c), (i[l + 1] = c), (i[l + 2] = c))
              : ((i[l + 0] = c),
                (i[l + 1] = c),
                (i[l + 2] = c),
                (i[l + 3] = c))),
        f <= 127
          ? (a[l++] = f)
          : f <= 2047
            ? ((a[l++] = 192 | ((f & 1984) >>> 6)),
              (a[l++] = 128 | ((f & 63) >>> 0)))
            : f <= 65535
              ? ((a[l++] = 224 | ((f & 61440) >>> 12)),
                (a[l++] = 128 | ((f & 4032) >>> 6)),
                (a[l++] = 128 | ((f & 63) >>> 0)))
              : ((a[l++] = 240 | ((f & 1835008) >>> 18)),
                (a[l++] = 128 | ((f & 258048) >>> 12)),
                (a[l++] = 128 | ((f & 4032) >>> 6)),
                (a[l++] = 128 | ((f & 63) >>> 0))),
        d && c++;
    }
    (this.utf16Length = t),
      (this.utf8Length = n),
      (this.utf16Value = e),
      (this.utf8Value = a),
      (this.utf16OffsetToUtf8 = o),
      (this.utf8OffsetToUtf16 = i);
  }
  static _utf8ByteLength(e) {
    let t = 0;
    for (let n = 0, s = e.length; n < s; n++) {
      const o = e.charCodeAt(n);
      let i = o,
        a = !1;
      if (o >= 55296 && o <= 56319 && n + 1 < s) {
        const l = e.charCodeAt(n + 1);
        l >= 56320 &&
          l <= 57343 &&
          ((i = (((o - 55296) << 10) + 65536) | (l - 56320)), (a = !0));
      }
      i <= 127
        ? (t += 1)
        : i <= 2047
          ? (t += 2)
          : i <= 65535
            ? (t += 3)
            : (t += 4),
        a && n++;
    }
    return t;
  }
  createString(e) {
    const t = e.omalloc(this.utf8Length);
    return e.HEAPU8.set(this.utf8Value, t), t;
  }
}
const M = class M {
  constructor(e) {
    u(this, 'id', ++M.LAST_ID);
    u(this, '_onigBinding');
    u(this, 'content');
    u(this, 'utf16Length');
    u(this, 'utf8Length');
    u(this, 'utf16OffsetToUtf8');
    u(this, 'utf8OffsetToUtf16');
    u(this, 'ptr');
    if (!L) throw new x('Must invoke loadWasm first.');
    (this._onigBinding = L), (this.content = e);
    const t = new Le(e);
    (this.utf16Length = t.utf16Length),
      (this.utf8Length = t.utf8Length),
      (this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8),
      (this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16),
      this.utf8Length < 1e4 && !M._sharedPtrInUse
        ? (M._sharedPtr || (M._sharedPtr = L.omalloc(1e4)),
          (M._sharedPtrInUse = !0),
          L.HEAPU8.set(t.utf8Value, M._sharedPtr),
          (this.ptr = M._sharedPtr))
        : (this.ptr = t.createString(L));
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16
      ? e < 0
        ? 0
        : e > this.utf8Length
          ? this.utf16Length
          : this.utf8OffsetToUtf16[e]
      : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8
      ? e < 0
        ? 0
        : e > this.utf16Length
          ? this.utf8Length
          : this.utf16OffsetToUtf8[e]
      : e;
  }
  dispose() {
    this.ptr === M._sharedPtr
      ? (M._sharedPtrInUse = !1)
      : this._onigBinding.ofree(this.ptr);
  }
};
u(M, 'LAST_ID', 0), u(M, '_sharedPtr', 0), u(M, '_sharedPtrInUse', !1);
let Ae = M;
class eo {
  constructor(e) {
    u(this, '_onigBinding');
    u(this, '_ptr');
    if (!L) throw new x('Must invoke loadWasm first.');
    const t = [],
      n = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = new Le(e[a]);
      (t[a] = c.createString(L)), (n[a] = c.utf8Length);
    }
    const s = L.omalloc(4 * e.length);
    L.HEAPU32.set(t, s / 4);
    const o = L.omalloc(4 * e.length);
    L.HEAPU32.set(n, o / 4);
    const i = L.createOnigScanner(s, o, e.length);
    for (let a = 0, l = e.length; a < l; a++) L.ofree(t[a]);
    L.ofree(o),
      L.ofree(s),
      i === 0 && Zs(L),
      (this._onigBinding = L),
      (this._ptr = i);
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e, t, n) {
    let s = Qs,
      o = 0;
    if (
      (typeof n == 'number'
        ? (n & 8 && (s = !0), (o = n))
        : typeof n == 'boolean' && (s = n),
      typeof e == 'string')
    ) {
      e = new Ae(e);
      const i = this._findNextMatchSync(e, t, s, o);
      return e.dispose(), i;
    }
    return this._findNextMatchSync(e, t, s, o);
  }
  _findNextMatchSync(e, t, n, s) {
    const o = this._onigBinding;
    let i;
    if (
      (n
        ? (i = o.findNextOnigScannerMatchDbg(
            this._ptr,
            e.id,
            e.ptr,
            e.utf8Length,
            e.convertUtf16OffsetToUtf8(t),
            s
          ))
        : (i = o.findNextOnigScannerMatch(
            this._ptr,
            e.id,
            e.ptr,
            e.utf8Length,
            e.convertUtf16OffsetToUtf8(t),
            s
          )),
      i === 0)
    )
      return null;
    const a = o.HEAPU32;
    let l = i / 4;
    const c = a[l++],
      h = a[l++],
      f = [];
    for (let d = 0; d < h; d++) {
      const g = e.convertUtf8OffsetToUtf16(a[l++]),
        m = e.convertUtf8OffsetToUtf16(a[l++]);
      f[d] = { start: g, end: m, length: m - g };
    }
    return { index: c, captureIndices: f };
  }
}
function to(r) {
  return typeof r.instantiator == 'function';
}
function no(r) {
  return typeof r.default == 'function';
}
function ro(r) {
  return typeof r.data < 'u';
}
function so(r) {
  return typeof Response < 'u' && r instanceof Response;
}
function oo(r) {
  var e;
  return (
    (typeof ArrayBuffer < 'u' &&
      (r instanceof ArrayBuffer || ArrayBuffer.isView(r))) ||
    (typeof Buffer < 'u' &&
      ((e = Buffer.isBuffer) == null ? void 0 : e.call(Buffer, r))) ||
    (typeof SharedArrayBuffer < 'u' && r instanceof SharedArrayBuffer) ||
    (typeof Uint32Array < 'u' && r instanceof Uint32Array)
  );
}
let me;
function io(r) {
  if (me) return me;
  async function e() {
    L = await Js(async (t) => {
      let n = r;
      return (
        (n = await n),
        typeof n == 'function' && (n = await n(t)),
        typeof n == 'function' && (n = await n(t)),
        to(n)
          ? (n = await n.instantiator(t))
          : no(n)
            ? (n = await n.default(t))
            : (ro(n) && (n = n.data),
              so(n)
                ? typeof WebAssembly.instantiateStreaming == 'function'
                  ? (n = await lo(n)(t))
                  : (n = await ao(n)(t))
                : oo(n)
                  ? (n = await ze(n)(t))
                  : n instanceof WebAssembly.Module
                    ? (n = await ze(n)(t))
                    : 'default' in n &&
                      n.default instanceof WebAssembly.Module &&
                      (n = await ze(n.default)(t))),
        'instance' in n && (n = n.instance),
        'exports' in n && (n = n.exports),
        n
      );
    });
  }
  return (me = e()), me;
}
function ze(r) {
  return (e) => WebAssembly.instantiate(r, e);
}
function lo(r) {
  return (e) => WebAssembly.instantiateStreaming(r, e);
}
function ao(r) {
  return async (e) => {
    const t = await r.arrayBuffer();
    return WebAssembly.instantiate(t, e);
  };
}
function co(r) {
  return new Ae(r);
}
function uo(r) {
  return new eo(r);
}
const It = { light: '#333333', dark: '#bbbbbb' },
  Ot = { light: '#fffffe', dark: '#1e1e1e' },
  Mt = '__shiki_resolved';
function _n(r) {
  var a, l, c, h, f;
  if (r != null && r[Mt]) return r;
  const e = { ...r };
  e.tokenColors &&
    !e.settings &&
    ((e.settings = e.tokenColors), delete e.tokenColors),
    e.type || (e.type = 'dark'),
    (e.colorReplacements = { ...e.colorReplacements }),
    e.settings || (e.settings = []);
  let { bg: t, fg: n } = e;
  if (!t || !n) {
    const d = e.settings ? e.settings.find((g) => !g.name && !g.scope) : void 0;
    (a = d == null ? void 0 : d.settings) != null &&
      a.foreground &&
      (n = d.settings.foreground),
      (l = d == null ? void 0 : d.settings) != null &&
        l.background &&
        (t = d.settings.background),
      !n &&
        (c = e == null ? void 0 : e.colors) != null &&
        c['editor.foreground'] &&
        (n = e.colors['editor.foreground']),
      !t &&
        (h = e == null ? void 0 : e.colors) != null &&
        h['editor.background'] &&
        (t = e.colors['editor.background']),
      n || (n = e.type === 'light' ? It.light : It.dark),
      t || (t = e.type === 'light' ? Ot.light : Ot.dark),
      (e.fg = n),
      (e.bg = t);
  }
  (e.settings[0] && e.settings[0].settings && !e.settings[0].scope) ||
    e.settings.unshift({ settings: { foreground: e.fg, background: e.bg } });
  let s = 0;
  const o = new Map();
  function i(d) {
    var m;
    if (o.has(d)) return o.get(d);
    s += 1;
    const g = `#${s.toString(16).padStart(8, '0').toLowerCase()}`;
    return (m = e.colorReplacements) != null && m[`#${g}`]
      ? i(d)
      : (o.set(d, g), g);
  }
  e.settings = e.settings.map((d) => {
    var y, C;
    const g =
        ((y = d.settings) == null ? void 0 : y.foreground) &&
        !d.settings.foreground.startsWith('#'),
      m =
        ((C = d.settings) == null ? void 0 : C.background) &&
        !d.settings.background.startsWith('#');
    if (!g && !m) return d;
    const p = { ...d, settings: { ...d.settings } };
    if (g) {
      const v = i(d.settings.foreground);
      (e.colorReplacements[v] = d.settings.foreground),
        (p.settings.foreground = v);
    }
    if (m) {
      const v = i(d.settings.background);
      (e.colorReplacements[v] = d.settings.background),
        (p.settings.background = v);
    }
    return p;
  });
  for (const d of Object.keys(e.colors || {}))
    if (
      (d === 'editor.foreground' ||
        d === 'editor.background' ||
        d.startsWith('terminal.ansi')) &&
      !((f = e.colors[d]) != null && f.startsWith('#'))
    ) {
      const g = i(e.colors[d]);
      (e.colorReplacements[g] = e.colors[d]), (e.colors[d] = g);
    }
  return (
    Object.defineProperty(e, Mt, { enumerable: !1, writable: !1, value: !0 }), e
  );
}
class ho extends pr {
  constructor(t, n, s, o = {}) {
    super(t);
    u(this, '_resolver');
    u(this, '_themes');
    u(this, '_langs');
    u(this, '_alias');
    u(this, '_resolvedThemes', new Map());
    u(this, '_resolvedGrammars', new Map());
    u(this, '_langMap', new Map());
    u(this, '_langGraph', new Map());
    u(this, '_textmateThemeCache', new WeakMap());
    u(this, '_loadedThemesCache', null);
    u(this, '_loadedLanguagesCache', null);
    (this._resolver = t),
      (this._themes = n),
      (this._langs = s),
      (this._alias = o),
      n.forEach((i) => this.loadTheme(i)),
      s.forEach((i) => this.loadLanguage(i));
  }
  getTheme(t) {
    return typeof t == 'string'
      ? this._resolvedThemes.get(t)
      : this.loadTheme(t);
  }
  loadTheme(t) {
    const n = _n(t);
    return (
      n.name &&
        (this._resolvedThemes.set(n.name, n), (this._loadedThemesCache = null)),
      n
    );
  }
  getLoadedThemes() {
    return (
      this._loadedThemesCache ||
        (this._loadedThemesCache = [...this._resolvedThemes.keys()]),
      this._loadedThemesCache
    );
  }
  setTheme(t) {
    let n = this._textmateThemeCache.get(t);
    n || ((n = we.createFromRawTheme(t)), this._textmateThemeCache.set(t, n)),
      this._syncRegistry.setTheme(n);
  }
  getGrammar(t) {
    if (this._alias[t]) {
      const n = new Set([t]);
      for (; this._alias[t]; ) {
        if (((t = this._alias[t]), n.has(t)))
          throw new x(
            `Circular alias \`${Array.from(n).join(' -> ')} -> ${t}\``
          );
        n.add(t);
      }
    }
    return this._resolvedGrammars.get(t);
  }
  async loadLanguage(t) {
    var i, a, l, c;
    if (this.getGrammar(t.name)) return;
    const n = new Set(
      [...this._langMap.values()].filter((h) => {
        var f;
        return (f = h.embeddedLangsLazy) == null ? void 0 : f.includes(t.name);
      })
    );
    this._resolver.addLanguage(t);
    const s = {
      balancedBracketSelectors: t.balancedBracketSelectors || ['*'],
      unbalancedBracketSelectors: t.unbalancedBracketSelectors || [],
    };
    this._syncRegistry._rawGrammars.set(t.scopeName, t);
    const o = await this.loadGrammarWithConfiguration(t.scopeName, 1, s);
    if (
      ((o.name = t.name),
      this._resolvedGrammars.set(t.name, o),
      t.aliases &&
        t.aliases.forEach((h) => {
          this._alias[h] = t.name;
        }),
      (this._loadedLanguagesCache = null),
      n.size)
    )
      for (const h of n)
        this._resolvedGrammars.delete(h.name),
          (this._loadedLanguagesCache = null),
          (a =
            (i = this._syncRegistry) == null ? void 0 : i._injectionGrammars) ==
            null || a.delete(h.scopeName),
          (c = (l = this._syncRegistry) == null ? void 0 : l._grammars) ==
            null || c.delete(h.scopeName),
          await this.loadLanguage(this._langMap.get(h.name));
  }
  async init() {
    this._themes.map((t) => this.loadTheme(t)),
      await this.loadLanguages(this._langs);
  }
  dispose() {
    super.dispose(),
      this._resolvedThemes.clear(),
      this._resolvedGrammars.clear(),
      this._langMap.clear(),
      this._langGraph.clear(),
      (this._loadedThemesCache = null);
  }
  async loadLanguages(t) {
    for (const o of t) this.resolveEmbeddedLanguages(o);
    const n = Array.from(this._langGraph.entries()),
      s = n.filter(([o, i]) => !i);
    if (s.length) {
      const o = n
        .filter(([i, a]) => {
          var l;
          return (
            a &&
            ((l = a.embeddedLangs) == null
              ? void 0
              : l.some((c) => s.map(([h]) => h).includes(c)))
          );
        })
        .filter((i) => !s.includes(i));
      throw new x(
        `Missing languages ${s.map(([i]) => `\`${i}\``).join(', ')}, required by ${o.map(([i]) => `\`${i}\``).join(', ')}`
      );
    }
    for (const [o, i] of n) this._resolver.addLanguage(i);
    for (const [o, i] of n) await this.loadLanguage(i);
  }
  getLoadedLanguages() {
    return (
      this._loadedLanguagesCache ||
        (this._loadedLanguagesCache = [
          ...new Set([
            ...this._resolvedGrammars.keys(),
            ...Object.keys(this._alias),
          ]),
        ]),
      this._loadedLanguagesCache
    );
  }
  resolveEmbeddedLanguages(t) {
    if (
      (this._langMap.set(t.name, t),
      this._langGraph.set(t.name, t),
      t.embeddedLangs)
    )
      for (const n of t.embeddedLangs)
        this._langGraph.set(n, this._langMap.get(n));
  }
}
class fo {
  constructor(e, t) {
    u(this, '_langs', new Map());
    u(this, '_scopeToLang', new Map());
    u(this, '_injections', new Map());
    u(this, '_onigLibPromise');
    (this._onigLibPromise = e), t.forEach((n) => this.addLanguage(n));
  }
  get onigLib() {
    return this._onigLibPromise;
  }
  getLangRegistration(e) {
    return this._langs.get(e);
  }
  async loadGrammar(e) {
    return this._scopeToLang.get(e);
  }
  addLanguage(e) {
    this._langs.set(e.name, e),
      e.aliases &&
        e.aliases.forEach((t) => {
          this._langs.set(t, e);
        }),
      this._scopeToLang.set(e.scopeName, e),
      e.injectTo &&
        e.injectTo.forEach((t) => {
          this._injections.get(t) || this._injections.set(t, []),
            this._injections.get(t).push(e.scopeName);
        });
  }
  getInjections(e) {
    const t = e.split('.');
    let n = [];
    for (let s = 1; s <= t.length; s++) {
      const o = t.slice(0, s).join('.');
      n = [...n, ...(this._injections.get(o) || [])];
    }
    return n;
  }
}
let po,
  se = 0;
async function go(r = {}) {
  (se += 1),
    r.warnings !== !1 &&
      se >= 10 &&
      se % 10 === 0 &&
      console.warn(
        `[Shiki] ${se} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`
      );
  let e = !1;
  async function t(b) {
    return Promise.resolve(typeof b == 'function' ? b() : b).then(
      (S) => S.default || S
    );
  }
  async function n(b) {
    return Array.from(
      new Set(
        (
          await Promise.all(
            b
              .filter((S) => !gr(S))
              .map(
                async (S) =>
                  await t(S).then((w) => (Array.isArray(w) ? w : [w]))
              )
          )
        ).flat()
      )
    );
  }
  const s = r.loadWasm || po,
    [o, i] = await Promise.all([
      Promise.all((r.themes || []).map(t)).then((b) => b.map(_n)),
      n(r.langs || []),
      s ? io(s) : void 0,
    ]),
    a = new fo(
      Promise.resolve({
        createOnigScanner(b) {
          return uo(b);
        },
        createOnigString(b) {
          return co(b);
        },
      }),
      i
    ),
    l = new ho(a, o, i, r.langAlias);
  await l.init();
  let c;
  function h(b) {
    C();
    const S = l.getGrammar(typeof b == 'string' ? b : b.name);
    if (!S)
      throw new x(`Language \`${b}\` not found, you may need to load it first`);
    return S;
  }
  function f(b) {
    if (b === 'none')
      return { bg: '', fg: '', name: 'none', settings: [], type: 'dark' };
    C();
    const S = l.getTheme(b);
    if (!S)
      throw new x(`Theme \`${b}\` not found, you may need to load it first`);
    return S;
  }
  function d(b) {
    C();
    const S = f(b);
    c !== b && (l.setTheme(S), (c = b));
    const w = l.getColorMap();
    return { theme: S, colorMap: w };
  }
  function g() {
    return C(), l.getLoadedThemes();
  }
  function m() {
    return C(), l.getLoadedLanguages();
  }
  async function p(...b) {
    C(), await l.loadLanguages(await n(b));
  }
  async function y(...b) {
    C(),
      await Promise.all(
        b.map(async (S) => (mr(S) ? null : l.loadTheme(await t(S))))
      );
  }
  function C() {
    if (e) throw new x('Shiki instance has been disposed');
  }
  function v() {
    e || ((e = !0), l.dispose(), (se -= 1));
  }
  return {
    setTheme: d,
    getTheme: f,
    getLanguage: h,
    getLoadedThemes: g,
    getLoadedLanguages: m,
    loadLanguage: p,
    loadTheme: y,
    dispose: v,
    [Symbol.dispose]: v,
  };
}
async function mo(r = {}) {
  const e = await go(r);
  return {
    getLastGrammarState: (t, n) => Pr(e, t, n),
    codeToTokensBase: (t, n) => rt(e, t, n),
    codeToTokensWithThemes: (t, n) => tn(e, t, n),
    codeToTokens: (t, n) => Ne(e, t, n),
    codeToHast: (t, n) => xe(e, t, n),
    codeToHtml: (t, n) => Xs(e, t, n),
    ...e,
    getInternalContext: () => e,
  };
}
const Ze = vn();
mo({
  themes: [
    Y(() => import('./NrGJGX17.js'), [], import.meta.url),
    Y(() => import('./EQHFthT6.js'), [], import.meta.url),
  ],
  langs: [
    Y(() => import('./Dch3xQiY.js'), [], import.meta.url),
    Y(() => import('./DC8MraHL.js'), [], import.meta.url),
    Y(() => import('./Defcyui7.js'), [], import.meta.url),
  ],
  loadWasm: Y(() => import('./CsTmP73Z.js'), [], import.meta.url),
}).then((r) => {
  Ze.value = r;
});
function _o(r) {
  return J(() =>
    Ze.value
      ? Ze.value.codeToHtml(r(), {
          lang: 'glob',
          theme: He.value ? 'vitesse-dark' : 'vitesse-light',
          structure: 'inline',
        })
      : yo(r())
  );
}
function yo(r) {
  return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const bo = ['innerHTML'],
  Co = { key: 0, 'max-h': '30vh', 'min-w-80': '', 'of-auto': '', p3: '' },
  So = { key: 0, flex: '~ col gap-1' },
  wo = ee('div', null, 'Files that matches this glob', -1),
  vo = { key: 1, 'text-center': '', italic: '', op50: '' },
  Ro = { key: 1, 'max-h': '30vh', 'min-w-80': '', 'of-auto': '', p3: '' },
  No = { key: 0, flex: '~ col gap-1' },
  ko = ee('div', null, 'Configs that contains this glob', -1),
  xo = ['onClick'],
  Ao = { key: 1, 'text-center': '', italic: '', op50: '' },
  Eo = ye({
    __name: 'GlobItem',
    props: {
      glob: {},
      popup: {},
      active: { type: [Boolean, null], default: null },
    },
    setup(r) {
      const e = r,
        t = _o(() => e.glob.toString()),
        n = J(
          () =>
            (e.popup === 'files' && Oe.value.filesResolved) ||
            e.popup === 'configs'
        ),
        s = J(() => {
          var c;
          return e.popup === 'files'
            ? (c = Oe.value.filesResolved) == null
              ? void 0
              : c.globToFiles.get(e.glob)
            : void 0;
        }),
        o = J(() =>
          e.popup === 'configs' ? Oe.value.globToConfigs.get(e.glob) : void 0
        ),
        i = Bt();
      function a(c) {
        (qe.filepath = ''), i.push(`/configs?index=${c + 1}`);
      }
      const l = ye({
        setup:
          (c, { slots: h }) =>
          () => {
            var f;
            return (f = h.default) == null ? void 0 : f.call(h);
          },
      });
      return (c, h) => {
        const f = Tn,
          d = Ln;
        return (
          B(),
          Me(pt(n.value ? De(Nn) : De(l)), null, {
            popper: Be(({ shown: g, hide: m }) => {
              var p, y;
              return [
                g && c.popup === 'files'
                  ? (B(),
                    $('div', Co, [
                      (p = s.value) != null && p.size
                        ? (B(),
                          $('div', So, [
                            wo,
                            (B(!0),
                            $(
                              ht,
                              null,
                              ft(
                                s.value,
                                (C) => (
                                  B(),
                                  Me(
                                    f,
                                    {
                                      key: C,
                                      filepath: C,
                                      'font-mono': '',
                                      onClick: (v) => m(),
                                    },
                                    null,
                                    8,
                                    ['filepath', 'onClick']
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : (B(), $('div', vo, ' No files matched this glob. ')),
                    ]))
                  : dt('', !0),
                g && c.popup === 'configs'
                  ? (B(),
                    $('div', Ro, [
                      (y = o.value) != null && y.length
                        ? (B(),
                          $('div', No, [
                            ko,
                            (B(!0),
                            $(
                              ht,
                              null,
                              ft(
                                o.value,
                                (C) => (
                                  B(),
                                  $('div', { key: C.name, flex: '~ gap-2' }, [
                                    ee(
                                      'button',
                                      {
                                        'btn-badge': '',
                                        onClick: (v) => a(C.index),
                                      },
                                      [
                                        Rn(
                                          d,
                                          { name: C.name, index: C.index },
                                          null,
                                          8,
                                          ['name', 'index']
                                        ),
                                      ],
                                      8,
                                      xo
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                          ]))
                        : (B(),
                          $('div', Ao, ' No configs matched this glob. ')),
                    ]))
                  : dt('', !0),
              ];
            }),
            default: Be(() => [
              (B(),
              Me(
                pt(n.value ? 'button' : 'div'),
                {
                  'text-gray': '',
                  'font-mono': '',
                  class: Dt(
                    c.active === !0
                      ? 'badge-active'
                      : c.active === !1
                        ? 'badge op50'
                        : 'badge'
                  ),
                },
                {
                  default: Be(() => [
                    ee(
                      'span',
                      { class: 'filter-hue-rotate-180', innerHTML: De(t) },
                      null,
                      8,
                      bo
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['class']
              )),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { Ln as _, Eo as a, Tn as b, yo as c, xn as g, Ze as s };
