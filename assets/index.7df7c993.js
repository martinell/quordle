var zs = Object.defineProperty
  , qs = Object.defineProperties;
var Ws = Object.getOwnPropertyDescriptors;
var Ro = Object.getOwnPropertySymbols;
var js = Object.prototype.hasOwnProperty
  , Ks = Object.prototype.propertyIsEnumerable;
var Io = (e, t, r) => t in e ? zs(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Me = (e, t) => {
    for (var r in t || (t = {}))
        js.call(t, r) && Io(e, r, t[r]);
    if (Ro)
        for (var r of Ro(t))
            Ks.call(t, r) && Io(e, r, t[r]);
    return e
}
  , It = (e, t) => qs(e, Ws(t));
var Xs = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports);
var qe = (e, t, r) => new Promise( (n, o) => {
    var i = u => {
        try {
            s(r.next(u))
        } catch (l) {
            o(l)
        }
    }
      , a = u => {
        try {
            s(r.throw(u))
        } catch (l) {
            o(l)
        }
    }
      , s = u => u.done ? n(u.value) : Promise.resolve(u.value).then(i, a);
    s((r = r.apply(e, t)).next())
}
);
var KR = Xs($t => {
    const eA = function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload"))
            return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
            n(o);
        new MutationObserver(o => {
            for (const i of o)
                if (i.type === "childList")
                    for (const a of i.addedNodes)
                        a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        });
        function r(o) {
            const i = {};
            return o.integrity && (i.integrity = o.integrity),
            o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
            o.crossorigin === "use-credentials" ? i.credentials = "include" : o.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
        }
        function n(o) {
            if (o.ep)
                return;
            o.ep = !0;
            const i = r(o);
            fetch(o.href, i)
        }
    };
    eA();
    const tA = (e, t) => e === t
      , ke = Symbol("solid-proxy")
      , ho = Symbol("solid-track")
      , wr = {
        equals: tA
    };
    let wi = $i;
    const Ke = 1
      , Br = 2
      , Bi = {
        owned: null,
        cleanups: null,
        context: null,
        owner: null
    };
    var ee = null;
    let dt = null
      , ne = null
      , he = null
      , We = null
      , Yn = 0;
    const [rA,eI] = Q(!1);
    function Qn(e, t) {
        const r = ne
          , n = ee
          , o = e.length === 0
          , i = o ? Bi : {
            owned: null,
            cleanups: null,
            context: null,
            owner: t || n
        }
          , a = o ? e : () => e( () => Ce( () => Kn(i)));
        ee = i,
        ne = null;
        try {
            return st(a, !0)
        } finally {
            ne = r,
            ee = n
        }
    }
    function Q(e, t) {
        t = t ? Object.assign({}, wr, t) : wr;
        const r = {
            value: e,
            observers: null,
            observerSlots: null,
            comparator: t.equals || void 0
        }
          , n = o => (typeof o == "function" && (o = o(r.value)),
        Fi(r, o));
        return [_i.bind(r), n]
    }
    function zn(e, t, r) {
        const n = Wr(e, t, !0, Ke);
        Ht(n)
    }
    function x(e, t, r) {
        const n = Wr(e, t, !1, Ke);
        Ht(n)
    }
    function re(e, t, r) {
        wi = AA;
        const n = Wr(e, t, !1, Ke);
        n.user = !0,
        We ? We.push(n) : Ht(n)
    }
    function T(e, t, r) {
        r = r ? Object.assign({}, wr, r) : wr;
        const n = Wr(e, t, !0, 0);
        return n.observers = null,
        n.observerSlots = null,
        n.comparator = r.equals || void 0,
        Ht(n),
        _i.bind(n)
    }
    function qn(e) {
        return st(e, !1)
    }
    function Ce(e) {
        let t, r = ne;
        return ne = null,
        t = e(),
        ne = r,
        t
    }
    function jt(e, t, r) {
        const n = Array.isArray(e);
        let o, i = r && r.defer;
        return a => {
            let s;
            if (n) {
                s = Array(e.length);
                for (let l = 0; l < e.length; l++)
                    s[l] = e[l]()
            } else
                s = e();
            if (i) {
                i = !1;
                return
            }
            const u = Ce( () => t(s, o, a));
            return o = s,
            u
        }
    }
    function xi(e) {
        re( () => Ce(e))
    }
    function De(e) {
        return ee === null || (ee.cleanups === null ? ee.cleanups = [e] : ee.cleanups.push(e)),
        e
    }
    function Gi() {
        return ne
    }
    function Wn() {
        return ee
    }
    function nA(e, t) {
        const r = ee;
        ee = e;
        try {
            return st(t, !0)
        } finally {
            ee = r
        }
    }
    function oA(e) {
        const t = ne
          , r = ee;
        return Promise.resolve().then( () => {
            ne = t,
            ee = r;
            let n;
            return st(e, !1),
            ne = ee = null,
            n ? n.done : void 0
        }
        )
    }
    function iA() {
        return [rA, oA]
    }
    function qr(e, t) {
        const r = Symbol("context");
        return {
            id: r,
            Provider: cA(r),
            defaultValue: e
        }
    }
    function Rt(e) {
        let t;
        return (t = Ji(ee, e.id)) !== void 0 ? t : e.defaultValue
    }
    function jn(e) {
        const t = T(e)
          , r = T( () => gn(t()));
        return r.toArray = () => {
            const n = r();
            return Array.isArray(n) ? n : n != null ? [n] : []
        }
        ,
        r
    }
    function _i() {
        const e = dt;
        if (this.sources && (this.state || e))
            if (this.state === Ke || e)
                Ht(this);
            else {
                const t = he;
                he = null,
                st( () => Gr(this), !1),
                he = t
            }
        if (ne) {
            const t = this.observers ? this.observers.length : 0;
            ne.sources ? (ne.sources.push(this),
            ne.sourceSlots.push(t)) : (ne.sources = [this],
            ne.sourceSlots = [t]),
            this.observers ? (this.observers.push(ne),
            this.observerSlots.push(ne.sources.length - 1)) : (this.observers = [ne],
            this.observerSlots = [ne.sources.length - 1])
        }
        return this.value
    }
    function Fi(e, t, r) {
        let n = e.value;
        return (!e.comparator || !e.comparator(n, t)) && (e.value = t,
        e.observers && e.observers.length && st( () => {
            for (let o = 0; o < e.observers.length; o += 1) {
                const i = e.observers[o]
                  , a = dt && dt.running;
                a && dt.disposed.has(i),
                (a && !i.tState || !a && !i.state) && (i.pure ? he.push(i) : We.push(i),
                i.observers && Hi(i)),
                a || (i.state = Ke)
            }
            if (he.length > 1e6)
                throw he = [],
                new Error
        }
        , !1)),
        t
    }
    function Ht(e) {
        if (!e.fn)
            return;
        Kn(e);
        const t = ee
          , r = ne
          , n = Yn;
        ne = ee = e,
        aA(e, e.value, n),
        ne = r,
        ee = t
    }
    function aA(e, t, r) {
        let n;
        try {
            n = e.fn(t)
        } catch (o) {
            e.pure && (e.state = Ke),
            ki(o)
        }
        (!e.updatedAt || e.updatedAt <= r) && (e.updatedAt != null && "observers"in e ? Fi(e, n) : e.value = n,
        e.updatedAt = r)
    }
    function Wr(e, t, r, n=Ke, o) {
        const i = {
            fn: e,
            state: n,
            updatedAt: null,
            owned: null,
            sources: null,
            sourceSlots: null,
            cleanups: null,
            value: t,
            owner: ee,
            context: null,
            pure: r
        };
        return ee === null || ee !== Bi && (ee.owned ? ee.owned.push(i) : ee.owned = [i]),
        i
    }
    function xr(e) {
        const t = dt;
        if (e.state === 0 || t)
            return;
        if (e.state === Br || t)
            return Gr(e);
        if (e.suspense && Ce(e.suspense.inFallback))
            return e.suspense.effects.push(e);
        const r = [e];
        for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Yn); )
            (e.state || t) && r.push(e);
        for (let n = r.length - 1; n >= 0; n--)
            if (e = r[n],
            e.state === Ke || t)
                Ht(e);
            else if (e.state === Br || t) {
                const o = he;
                he = null,
                st( () => Gr(e, r[0]), !1),
                he = o
            }
    }
    function st(e, t) {
        if (he)
            return e();
        let r = !1;
        t || (he = []),
        We ? r = !0 : We = [],
        Yn++;
        try {
            const n = e();
            return sA(r),
            n
        } catch (n) {
            he || (We = null),
            ki(n)
        }
    }
    function sA(e) {
        if (he && ($i(he),
        he = null),
        e)
            return;
        const t = We;
        We = null,
        t.length && st( () => wi(t), !1)
    }
    function $i(e) {
        for (let t = 0; t < e.length; t++)
            xr(e[t])
    }
    function AA(e) {
        let t, r = 0;
        for (t = 0; t < e.length; t++) {
            const n = e[t];
            n.user ? e[r++] = n : xr(n)
        }
        for (t = 0; t < r; t++)
            xr(e[t])
    }
    function Gr(e, t) {
        const r = dt;
        e.state = 0;
        for (let n = 0; n < e.sources.length; n += 1) {
            const o = e.sources[n];
            o.sources && (o.state === Ke || r ? o !== t && xr(o) : (o.state === Br || r) && Gr(o, t))
        }
    }
    function Hi(e) {
        const t = dt;
        for (let r = 0; r < e.observers.length; r += 1) {
            const n = e.observers[r];
            (!n.state || t) && (n.state = Br,
            n.pure ? he.push(n) : We.push(n),
            n.observers && Hi(n))
        }
    }
    function Kn(e) {
        let t;
        if (e.sources)
            for (; e.sources.length; ) {
                const r = e.sources.pop()
                  , n = e.sourceSlots.pop()
                  , o = r.observers;
                if (o && o.length) {
                    const i = o.pop()
                      , a = r.observerSlots.pop();
                    n < o.length && (i.sourceSlots[a] = n,
                    o[n] = i,
                    r.observerSlots[n] = a)
                }
            }
        if (e.owned) {
            for (t = 0; t < e.owned.length; t++)
                Kn(e.owned[t]);
            e.owned = null
        }
        if (e.cleanups) {
            for (t = 0; t < e.cleanups.length; t++)
                e.cleanups[t]();
            e.cleanups = null
        }
        e.state = 0,
        e.context = null
    }
    function lA(e) {
        return e instanceof Error || typeof e == "string" ? e : new Error("Unknown error")
    }
    function ki(e) {
        throw e = lA(e),
        e
    }
    function Ji(e, t) {
        return e ? e.context && e.context[t] !== void 0 ? e.context[t] : Ji(e.owner, t) : void 0
    }
    function gn(e) {
        if (typeof e == "function" && !e.length)
            return gn(e());
        if (Array.isArray(e)) {
            const t = [];
            for (let r = 0; r < e.length; r++) {
                const n = gn(e[r]);
                Array.isArray(n) ? t.push.apply(t, n) : t.push(n)
            }
            return t
        }
        return e
    }
    function cA(e, t) {
        return function(n) {
            let o;
            return x( () => o = Ce( () => (ee.context = {
                [e]: n.value
            },
            jn( () => n.children))), void 0),
            o
        }
    }
    function m(e, t) {
        return Ce( () => e(t || {}))
    }
    function Or() {
        return !0
    }
    const Vi = {
        get(e, t, r) {
            return t === ke ? r : e.get(t)
        },
        has(e, t) {
            return e.has(t)
        },
        set: Or,
        deleteProperty: Or,
        getOwnPropertyDescriptor(e, t) {
            return {
                configurable: !0,
                enumerable: !0,
                get() {
                    return e.get(t)
                },
                set: Or,
                deleteProperty: Or
            }
        },
        ownKeys(e) {
            return e.keys()
        }
    };
    function rn(e) {
        return (e = typeof e == "function" ? e() : e) == null ? {} : e
    }
    function Pt(...e) {
        if (e.some(r => r && (ke in r || typeof r == "function")))
            return new Proxy({
                get(r) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const o = rn(e[n])[r];
                        if (o !== void 0)
                            return o
                    }
                },
                has(r) {
                    for (let n = e.length - 1; n >= 0; n--)
                        if (r in rn(e[n]))
                            return !0;
                    return !1
                },
                keys() {
                    const r = [];
                    for (let n = 0; n < e.length; n++)
                        r.push(...Object.keys(rn(e[n])));
                    return [...new Set(r)]
                }
            },Vi);
        const t = {};
        for (let r = 0; r < e.length; r++)
            if (e[r]) {
                const n = Object.getOwnPropertyDescriptors(e[r]);
                Object.defineProperties(t, n)
            }
        return t
    }
    function Zi(e, ...t) {
        const r = new Set(t.flat())
          , n = Object.getOwnPropertyDescriptors(e)
          , o = ke in e;
        o || t.push(Object.keys(n).filter(a => !r.has(a)));
        const i = t.map(a => {
            const s = {};
            for (let u = 0; u < a.length; u++) {
                const l = a[u];
                Object.defineProperty(s, l, n[l] ? n[l] : {
                    get() {
                        return e[l]
                    },
                    set() {
                        return !0
                    }
                })
            }
            return s
        }
        );
        return o && i.push(new Proxy({
            get(a) {
                return r.has(a) ? void 0 : e[a]
            },
            has(a) {
                return r.has(a) ? !1 : a in e
            },
            keys() {
                return Object.keys(e).filter(a => !r.has(a))
            }
        },Vi)),
        i
    }
    let uA = 0;
    function EA() {
        return `cl-${uA++}`
    }
    function Yi(e) {
        let t = !1;
        const r = e.keyed
          , n = T( () => e.when, void 0, {
            equals: (o, i) => t ? o === i : !o == !i
        });
        return T( () => {
            const o = n();
            if (o) {
                const i = e.children
                  , a = typeof i == "function" && i.length > 0;
                return t = r || a,
                a ? Ce( () => i(o)) : i
            }
            return e.fallback
        }
        )
    }
    const dA = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]
      , OA = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...dA])
      , SA = new Set(["innerHTML", "textContent", "innerText", "children"])
      , fA = Object.assign(Object.create(null), {
        className: "class",
        htmlFor: "for"
    })
      , mo = Object.assign(Object.create(null), {
        class: "className",
        formnovalidate: "formNoValidate",
        ismap: "isMap",
        nomodule: "noModule",
        playsinline: "playsInline",
        readonly: "readOnly"
    })
      , RA = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"])
      , IA = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    };
    function hA(e, t, r) {
        let n = r.length
          , o = t.length
          , i = n
          , a = 0
          , s = 0
          , u = t[o - 1].nextSibling
          , l = null;
        for (; a < o || s < i; ) {
            if (t[a] === r[s]) {
                a++,
                s++;
                continue
            }
            for (; t[o - 1] === r[i - 1]; )
                o--,
                i--;
            if (o === a) {
                const A = i < n ? s ? r[s - 1].nextSibling : r[i - s] : u;
                for (; s < i; )
                    e.insertBefore(r[s++], A)
            } else if (i === s)
                for (; a < o; )
                    (!l || !l.has(t[a])) && t[a].remove(),
                    a++;
            else if (t[a] === r[i - 1] && r[s] === t[o - 1]) {
                const A = t[--o].nextSibling;
                e.insertBefore(r[s++], t[a++].nextSibling),
                e.insertBefore(r[--i], A),
                t[o] = r[i]
            } else {
                if (!l) {
                    l = new Map;
                    let d = s;
                    for (; d < i; )
                        l.set(r[d], d++)
                }
                const A = l.get(t[a]);
                if (A != null)
                    if (s < A && A < i) {
                        let d = a, c = 1, E;
                        for (; ++d < o && d < i && !((E = l.get(t[d])) == null || E !== A + c); )
                            c++;
                        if (c > A - s) {
                            const R = t[a];
                            for (; s < A; )
                                e.insertBefore(r[s++], R)
                        } else
                            e.replaceChild(r[s++], t[a++])
                    } else
                        a++;
                else
                    t[a++].remove()
            }
        }
    }
    const vo = "_$DX_DELEGATE";
    function mA(e, t, r, n={}) {
        let o;
        return Qn(i => {
            o = i,
            t === document ? e() : O(t, e(), t.firstChild ? null : void 0, r)
        }
        , n.owner),
        () => {
            o(),
            t.textContent = ""
        }
    }
    function b(e, t, r) {
        const n = document.createElement("template");
        n.innerHTML = e;
        let o = n.content.firstChild;
        return r && (o = o.firstChild),
        o
    }
    function Ge(e, t=window.document) {
        const r = t[vo] || (t[vo] = new Set);
        for (let n = 0, o = e.length; n < o; n++) {
            const i = e[n];
            r.has(i) || (r.add(i),
            t.addEventListener(i, NA))
        }
    }
    function P(e, t, r) {
        r == null ? e.removeAttribute(t) : e.setAttribute(t, r)
    }
    function vA(e, t, r, n) {
        n == null ? e.removeAttributeNS(t, r) : e.setAttributeNS(t, r, n)
    }
    function nr(e, t) {
        t == null ? e.removeAttribute("class") : e.className = t
    }
    function fe(e, t, r, n) {
        if (n)
            Array.isArray(r) ? (e[`$$${t}`] = r[0],
            e[`$$${t}Data`] = r[1]) : e[`$$${t}`] = r;
        else if (Array.isArray(r)) {
            const o = r[0];
            e.addEventListener(t, r[0] = i => o.call(e, r[1], i))
        } else
            e.addEventListener(t, r)
    }
    function xe(e, t, r={}) {
        const n = Object.keys(t || {})
          , o = Object.keys(r);
        let i, a;
        for (i = 0,
        a = o.length; i < a; i++) {
            const s = o[i];
            !s || s === "undefined" || t[s] || (go(e, s, !1),
            delete r[s])
        }
        for (i = 0,
        a = n.length; i < a; i++) {
            const s = n[i]
              , u = !!t[s];
            !s || s === "undefined" || r[s] === u || !u || (go(e, s, !0),
            r[s] = u)
        }
        return r
    }
    function Xn(e, t, r) {
        if (!t)
            return r ? P(e, "style") : t;
        const n = e.style;
        if (typeof t == "string")
            return n.cssText = t;
        typeof r == "string" && (n.cssText = r = void 0),
        r || (r = {}),
        t || (t = {});
        let o, i;
        for (i in r)
            t[i] == null && n.removeProperty(i),
            delete r[i];
        for (i in t)
            o = t[i],
            o !== r[i] && (n.setProperty(i, o),
            r[i] = o);
        return r
    }
    function Xe(e, t={}, r, n) {
        const o = {};
        return n || x( () => o.children = Mt(e, t.children, o.children)),
        x( () => t.ref && t.ref(e)),
        x( () => gA(e, t, r, !0, o, !0)),
        o
    }
    function $e(e, t, r) {
        return Ce( () => e(t, r))
    }
    function O(e, t, r, n) {
        if (r !== void 0 && !n && (n = []),
        typeof t != "function")
            return Mt(e, t, n, r);
        x(o => Mt(e, t(), o, r), n)
    }
    function gA(e, t, r, n, o={}, i=!1) {
        t || (t = {});
        for (const a in o)
            if (!(a in t)) {
                if (a === "children")
                    continue;
                o[a] = Co(e, a, null, o[a], r, i)
            }
        for (const a in t) {
            if (a === "children") {
                n || Mt(e, t.children);
                continue
            }
            const s = t[a];
            o[a] = Co(e, a, s, o[a], r, i)
        }
    }
    function CA(e) {
        return e.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase())
    }
    function go(e, t, r) {
        const n = t.trim().split(/\s+/);
        for (let o = 0, i = n.length; o < i; o++)
            e.classList.toggle(n[o], r)
    }
    function Co(e, t, r, n, o, i) {
        let a, s, u;
        if (t === "style")
            return Xn(e, r, n);
        if (t === "classList")
            return xe(e, r, n);
        if (r === n)
            return n;
        if (t === "ref")
            i || r(e);
        else if (t.slice(0, 3) === "on:") {
            const l = t.slice(3);
            n && e.removeEventListener(l, n),
            r && e.addEventListener(l, r)
        } else if (t.slice(0, 10) === "oncapture:") {
            const l = t.slice(10);
            n && e.removeEventListener(l, n, !0),
            r && e.addEventListener(l, r, !0)
        } else if (t.slice(0, 2) === "on") {
            const l = t.slice(2).toLowerCase()
              , A = RA.has(l);
            if (!A && n) {
                const d = Array.isArray(n) ? n[0] : n;
                e.removeEventListener(l, d)
            }
            (A || r) && (fe(e, l, r, A),
            A && Ge([l]))
        } else if ((u = SA.has(t)) || !o && (mo[t] || (s = OA.has(t))) || (a = e.nodeName.includes("-")))
            t === "class" || t === "className" ? nr(e, r) : a && !s && !u ? e[CA(t)] = r : e[mo[t] || t] = r;
        else {
            const l = o && t.indexOf(":") > -1 && IA[t.split(":")[0]];
            l ? vA(e, l, t, r) : P(e, fA[t] || t, r)
        }
        return r
    }
    function NA(e) {
        const t = `$$${e.type}`;
        let r = e.composedPath && e.composedPath()[0] || e.target;
        for (e.target !== r && Object.defineProperty(e, "target", {
            configurable: !0,
            value: r
        }),
        Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            get() {
                return r || document
            }
        }); r !== null; ) {
            const n = r[t];
            if (n && !r.disabled) {
                const o = r[`${t}Data`];
                if (o !== void 0 ? n.call(r, o, e) : n.call(r, e),
                e.cancelBubble)
                    return
            }
            r = r.host && r.host !== r && r.host instanceof Node ? r.host : r.parentNode
        }
    }
    function Mt(e, t, r, n, o) {
        for (; typeof r == "function"; )
            r = r();
        if (t === r)
            return r;
        const i = typeof t
          , a = n !== void 0;
        if (e = a && r[0] && r[0].parentNode || e,
        i === "string" || i === "number")
            if (i === "number" && (t = t.toString()),
            a) {
                let s = r[0];
                s && s.nodeType === 3 ? s.data = t : s = document.createTextNode(t),
                r = ht(e, r, n, s)
            } else
                r !== "" && typeof r == "string" ? r = e.firstChild.data = t : r = e.textContent = t;
        else if (t == null || i === "boolean")
            r = ht(e, r, n);
        else {
            if (i === "function")
                return x( () => {
                    let s = t();
                    for (; typeof s == "function"; )
                        s = s();
                    r = Mt(e, s, r, n)
                }
                ),
                () => r;
            if (Array.isArray(t)) {
                const s = []
                  , u = r && Array.isArray(r);
                if (Cn(s, t, r, o))
                    return x( () => r = Mt(e, s, r, n, !0)),
                    () => r;
                if (s.length === 0) {
                    if (r = ht(e, r, n),
                    a)
                        return r
                } else
                    u ? r.length === 0 ? No(e, s, n) : hA(e, r, s) : (r && ht(e),
                    No(e, s));
                r = s
            } else if (t instanceof Node) {
                if (Array.isArray(r)) {
                    if (a)
                        return r = ht(e, r, n, t);
                    ht(e, r, null, t)
                } else
                    r == null || r === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
                r = t
            }
        }
        return r
    }
    function Cn(e, t, r, n) {
        let o = !1;
        for (let i = 0, a = t.length; i < a; i++) {
            let s = t[i]
              , u = r && r[i];
            if (s instanceof Node)
                e.push(s);
            else if (!(s == null || s === !0 || s === !1))
                if (Array.isArray(s))
                    o = Cn(e, s, u) || o;
                else if (typeof s == "function")
                    if (n) {
                        for (; typeof s == "function"; )
                            s = s();
                        o = Cn(e, Array.isArray(s) ? s : [s], Array.isArray(u) ? u : [u]) || o
                    } else
                        e.push(s),
                        o = !0;
                else {
                    const l = String(s);
                    u && u.nodeType === 3 && u.data === l ? e.push(u) : e.push(document.createTextNode(l))
                }
        }
        return o
    }
    function No(e, t, r=null) {
        for (let n = 0, o = t.length; n < o; n++)
            e.insertBefore(t[n], r)
    }
    function ht(e, t, r, n) {
        if (r === void 0)
            return e.textContent = "";
        const o = n || document.createTextNode("");
        if (t.length) {
            let i = !1;
            for (let a = t.length - 1; a >= 0; a--) {
                const s = t[a];
                if (o !== s) {
                    const u = s.parentNode === e;
                    !i && !a ? u ? e.replaceChild(o, s) : e.insertBefore(o, r) : u && s.remove()
                } else
                    i = !0
            }
        } else
            e.insertBefore(o, r);
        return [o]
    }
    const yo = !1;
    function Qi(e, t, r) {
        return e.addEventListener(t, r),
        () => e.removeEventListener(t, r)
    }
    function yA([e,t], r, n) {
        return [r ? () => r(e()) : e, n ? o => t(n(o)) : t]
    }
    function LA(e) {
        try {
            return document.querySelector(e)
        } catch (t) {
            return null
        }
    }
    function zi(e, t) {
        const r = LA(`a#${e}`);
        r ? r.scrollIntoView() : t && window.scrollTo(0, 0)
    }
    function qi(e, t, r, n) {
        let o = !1;
        const i = s => typeof s == "string" ? {
            value: s
        } : s
          , a = yA(Q(i(e()), {
            equals: (s, u) => s.value === u.value
        }), void 0, s => (!o && t(s),
        s));
        return r && De(r( (s=e()) => {
            o = !0,
            a[1](i(s)),
            o = !1
        }
        )),
        {
            signal: a,
            utils: n
        }
    }
    function TA(e) {
        if (e) {
            if (Array.isArray(e))
                return {
                    signal: e
                }
        } else
            return {
                signal: Q({
                    value: ""
                })
            };
        return e
    }
    function pA() {
        return qi( () => ({
            value: window.location.pathname + window.location.search + window.location.hash,
            state: history.state
        }), ({value: e, replace: t, scroll: r, state: n}) => {
            t ? window.history.replaceState(n, "", e) : window.history.pushState(n, "", e),
            zi(window.location.hash.slice(1), r)
        }
        , e => Qi(window, "popstate", () => e()), {
            go: e => window.history.go(e)
        })
    }
    function UA() {
        return qi( () => window.location.hash.slice(1), ({value: e, replace: t, scroll: r, state: n}) => {
            t ? window.history.replaceState(n, "", "#" + e) : window.location.hash = e;
            const o = e.indexOf("#")
              , i = o >= 0 ? e.slice(o + 1) : "";
            zi(i, r)
        }
        , e => Qi(window, "hashchange", () => e()), {
            go: e => window.history.go(e),
            renderPath: e => `#${e}`,
            parsePath: e => {
                const t = e.replace(/^.*?#/, "");
                if (!t.startsWith("/")) {
                    const [,r="/"] = window.location.hash.split("#", 2);
                    return `${r}#${t}`
                }
                return t
            }
        })
    }
    const DA = /^(?:[a-z0-9]+:)?\/\//i
      , bA = /^\/+|\/+$/g;
    function Kt(e, t=!1) {
        const r = e.replace(bA, "");
        return r ? t || /^[?#]/.test(r) ? r : "/" + r : ""
    }
    function Tr(e, t, r) {
        if (DA.test(t))
            return;
        const n = Kt(e)
          , o = r && Kt(r);
        let i = "";
        return !o || t.startsWith("/") ? i = n : o.toLowerCase().indexOf(n.toLowerCase()) !== 0 ? i = n + o : i = o,
        (i || "/") + Kt(t, !i)
    }
    function PA(e, t) {
        if (e == null)
            throw new Error(t);
        return e
    }
    function Wi(e, t) {
        return Kt(e).replace(/\/*(\*.*)?$/g, "") + Kt(t)
    }
    function MA(e) {
        const t = {};
        return e.searchParams.forEach( (r, n) => {
            t[n] = r
        }
        ),
        t
    }
    function Lt(e, t) {
        return decodeURIComponent(t ? e.replace(/\+/g, " ") : e)
    }
    function wA(e, t) {
        const [r,n] = e.split("/*", 2)
          , o = r.split("/").filter(Boolean)
          , i = o.length;
        return a => {
            const s = a.split("/").filter(Boolean)
              , u = s.length - i;
            if (u < 0 || u > 0 && n === void 0 && !t)
                return null;
            const l = {
                path: i ? "" : "/",
                params: {}
            };
            for (let A = 0; A < i; A++) {
                const d = o[A]
                  , c = s[A];
                if (d[0] === ":")
                    l.params[d.slice(1)] = c;
                else if (d.localeCompare(c, void 0, {
                    sensitivity: "base"
                }) !== 0)
                    return null;
                l.path += `/${c}`
            }
            return n && (l.params[n] = u ? s.slice(-u).join("/") : ""),
            l
        }
    }
    function BA(e) {
        const [t,r] = e.pattern.split("/*", 2)
          , n = t.split("/").filter(Boolean);
        return n.reduce( (o, i) => o + (i.startsWith(":") ? 2 : 3), n.length - (r === void 0 ? 0 : 1))
    }
    function ji(e) {
        const t = new Map
          , r = Wn();
        return new Proxy({},{
            get(n, o) {
                return t.has(o) || nA(r, () => t.set(o, T( () => e()[o]))),
                t.get(o)()
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: !0,
                    configurable: !0
                }
            },
            ownKeys() {
                return Reflect.ownKeys(e())
            }
        })
    }
    function xA(e, t) {
        const r = new URLSearchParams(e);
        Object.entries(t).forEach( ([o,i]) => {
            i == null || i === "" ? r.delete(o) : r.set(o, String(i))
        }
        );
        const n = r.toString();
        return n ? `?${n}` : ""
    }
    const GA = 100
      , Ki = qr()
      , jr = qr()
      , sr = () => PA(Rt(Ki), "Make sure your app is wrapped in a <Router />");
    let or;
    const eo = () => or || Rt(jr) || sr().base
      , Xi = e => {
        const t = eo();
        return T( () => t.resolvePath(e()))
    }
      , _A = e => {
        const t = sr();
        return T( () => {
            const r = e();
            return r !== void 0 ? t.renderPath(r) : r
        }
        )
    }
      , FA = () => sr().navigatorFactory()
      , ea = () => sr().location
      , ta = () => {
        const e = ea()
          , t = FA()
          , r = (n, o) => {
            const i = Ce( () => xA(e.search, n));
            t(i, It(Me({
                scroll: !1
            }, o), {
                resolve: !0
            }))
        }
        ;
        return [e.query, r]
    }
    ;
    function $A(e, t="", r) {
        const {path: n, component: o, data: i, children: a} = e
          , s = !a || Array.isArray(a) && !a.length
          , u = Wi(t, n)
          , l = s ? u : u.split("/*", 1)[0];
        return {
            originalPath: n,
            pattern: l,
            element: o ? () => m(o, {}) : () => {
                const {element: A} = e;
                return A === void 0 && r ? m(r, {}) : A
            }
            ,
            preload: e.component ? o.preload : e.preload,
            data: i,
            matcher: wA(l, !s)
        }
    }
    function HA(e, t=0) {
        return {
            routes: e,
            score: BA(e[e.length - 1]) * 1e4 - t,
            matcher(r) {
                const n = [];
                for (let o = e.length - 1; o >= 0; o--) {
                    const i = e[o]
                      , a = i.matcher(r);
                    if (!a)
                        return null;
                    n.unshift(It(Me({}, a), {
                        route: i
                    }))
                }
                return n
            }
        }
    }
    function ra(e, t="", r, n=[], o=[]) {
        const i = Array.isArray(e) ? e : [e];
        for (let a = 0, s = i.length; a < s; a++) {
            const u = i[a];
            if (u && typeof u == "object" && u.hasOwnProperty("path")) {
                const l = $A(u, t, r);
                if (n.push(l),
                u.children)
                    ra(u.children, l.pattern, r, n, o);
                else {
                    const A = HA([...n], o.length);
                    o.push(A)
                }
                n.pop()
            }
        }
        return n.length ? o : o.sort( (a, s) => s.score - a.score)
    }
    function kA(e, t) {
        for (let r = 0, n = e.length; r < n; r++) {
            const o = e[r].matcher(t);
            if (o)
                return o
        }
        return []
    }
    function JA(e, t) {
        const r = new URL("http://sar")
          , n = T(u => {
            const l = e();
            try {
                return new URL(l,r)
            } catch (A) {
                return console.error(`Invalid path ${l}`),
                u
            }
        }
        , r, {
            equals: (u, l) => u.href === l.href
        })
          , o = T( () => Lt(n().pathname))
          , i = T( () => Lt(n().search, !0))
          , a = T( () => Lt(n().hash))
          , s = T( () => "");
        return {
            get pathname() {
                return o()
            },
            get search() {
                return i()
            },
            get hash() {
                return a()
            },
            get state() {
                return t()
            },
            get key() {
                return s()
            },
            query: ji(jt(i, () => MA(n())))
        }
    }
    function VA(e, t="", r, n) {
        const {signal: [o,i], utils: a={}} = TA(e)
          , s = a.parsePath || (v => v)
          , u = a.renderPath || (v => v)
          , l = Tr("", t)
          , A = void 0;
        if (l === void 0)
            throw new Error(`${l} is not a valid base path`);
        l && !o().value && i({
            value: l,
            replace: !0,
            scroll: !1
        });
        const [d,c] = iA()
          , [E,R] = Q(o().value)
          , [f,h] = Q(o().state)
          , I = JA(E, f)
          , C = []
          , N = {
            pattern: l,
            params: {},
            path: () => l,
            outlet: () => null,
            resolvePath(v) {
                return Tr(l, v)
            }
        };
        if (r)
            try {
                or = N,
                N.data = r({
                    data: void 0,
                    params: {},
                    location: I,
                    navigate: L(N)
                })
            } finally {
                or = void 0
            }
        function g(v, S, M) {
            Ce( () => {
                if (typeof S == "number") {
                    S && (a.go ? a.go(S) : console.warn("Router integration does not support relative routing"));
                    return
                }
                const {replace: H, resolve: w, scroll: $, state: z} = Me({
                    replace: !1,
                    resolve: !0,
                    scroll: !0
                }, M)
                  , B = w ? v.resolvePath(S) : Tr("", S);
                if (B === void 0)
                    throw new Error(`Path '${S}' is not a routable path`);
                if (C.length >= GA)
                    throw new Error("Too many redirects");
                const te = E();
                if (B !== te || z !== f()) {
                    const Ee = C.push({
                        value: te,
                        replace: H,
                        scroll: $,
                        state: f()
                    });
                    c( () => {
                        R(B),
                        h(z)
                    }
                    ).then( () => {
                        C.length === Ee && p({
                            value: B,
                            state: z
                        })
                    }
                    )
                }
            }
            )
        }
        function L(v) {
            return v = v || Rt(jr) || N,
            (S, M) => g(v, S, M)
        }
        function p(v) {
            const S = C[0];
            S && ((v.value !== S.value || v.state !== S.state) && i(It(Me({}, v), {
                replace: S.replace,
                scroll: S.scroll
            })),
            C.length = 0)
        }
        x( () => {
            const {value: v, state: S} = o();
            Ce( () => {
                v !== E() && c( () => {
                    R(v),
                    h(S)
                }
                )
            }
            )
        }
        );
        {
            let v = function(S) {
                if (S.defaultPrevented || S.button !== 0 || S.metaKey || S.altKey || S.ctrlKey || S.shiftKey)
                    return;
                const M = S.composedPath().find(Re => Re instanceof Node && Re.nodeName.toUpperCase() === "A");
                if (!M)
                    return;
                const H = M instanceof SVGAElement
                  , w = H ? M.href.baseVal : M.href;
                if ((H ? M.target.baseVal : M.target) || !w && !M.hasAttribute("state"))
                    return;
                const z = (M.getAttribute("rel") || "").split(/\s+/);
                if (M.hasAttribute("download") || z && z.includes("external"))
                    return;
                const B = H ? new URL(w,document.baseURI) : new URL(w)
                  , te = Lt(B.pathname);
                if (B.origin !== window.location.origin || l && te && !te.toLowerCase().startsWith(l.toLowerCase()))
                    return;
                const Ee = s(te + Lt(B.search, !0) + Lt(B.hash))
                  , ce = M.getAttribute("state");
                S.preventDefault(),
                g(N, Ee, {
                    resolve: !1,
                    replace: M.hasAttribute("replace"),
                    scroll: !M.hasAttribute("noscroll"),
                    state: ce && JSON.parse(ce)
                })
            };
            var y = v;
            document.addEventListener("click", v),
            De( () => document.removeEventListener("click", v))
        }
        return {
            base: N,
            out: A,
            location: I,
            isRouting: d,
            renderPath: u,
            parsePath: s,
            navigatorFactory: L
        }
    }
    function ZA(e, t, r, n) {
        const {base: o, location: i, navigatorFactory: a} = e
          , {pattern: s, element: u, preload: l, data: A} = n().route
          , d = T( () => n().path)
          , c = ji( () => n().params);
        l && l();
        const E = {
            parent: t,
            pattern: s,
            get child() {
                return r()
            },
            path: d,
            params: c,
            data: t.data,
            outlet: u,
            resolvePath(R) {
                return Tr(o.path(), R, d())
            }
        };
        if (A)
            try {
                or = E,
                E.data = A({
                    data: t.data,
                    params: c,
                    location: i,
                    navigate: a(E)
                })
            } finally {
                or = void 0
            }
        return E
    }
    const YA = b("<a></a>")
      , QA = e => {
        const {source: t, url: r, base: n, data: o, out: i} = e
          , a = t || pA()
          , s = VA(a, n, o);
        return m(Ki.Provider, {
            value: s,
            get children() {
                return e.children
            }
        })
    }
      , zA = e => {
        const t = sr()
          , r = eo()
          , n = T( () => ra(e.children, Wi(r.pattern, e.base || ""), qA))
          , o = T( () => kA(n(), t.location.pathname));
        t.out && t.out.matches.push(o().map( ({route: u, path: l, params: A}) => ({
            originalPath: u.originalPath,
            pattern: u.pattern,
            path: l,
            params: A
        })));
        const i = [];
        let a;
        const s = T(jt(o, (u, l, A) => {
            let d = l && u.length === l.length;
            const c = [];
            for (let E = 0, R = u.length; E < R; E++) {
                const f = l && l[E]
                  , h = u[E];
                A && f && h.route.pattern === f.route.pattern ? c[E] = A[E] : (d = !1,
                i[E] && i[E](),
                Qn(I => {
                    i[E] = I,
                    c[E] = ZA(t, c[E - 1] || r, () => s()[E + 1], () => o()[E])
                }
                ))
            }
            return i.splice(u.length).forEach(E => E()),
            A && d ? A : (a = c[0],
            c)
        }
        ));
        return m(Yi, {
            get when() {
                return s() && a
            },
            children: u => m(jr.Provider, {
                value: u,
                get children() {
                    return u.outlet()
                }
            })
        })
    }
      , Vt = e => e
      , qA = () => {
        const e = eo();
        return m(Yi, {
            get when() {
                return e.child
            },
            children: t => m(jr.Provider, {
                value: t,
                get children() {
                    return t.outlet()
                }
            })
        })
    }
    ;
    function na(e) {
        const [,t] = Zi(e, ["children", "to", "href", "state"])
          , r = _A( () => e.to);
        return ( () => {
            const n = YA.cloneNode(!0);
            return Xe(n, Pt(t, {
                get href() {
                    return r() || e.href
                },
                get state() {
                    return JSON.stringify(e.state)
                }
            }), !1, !0),
            O(n, () => e.children),
            n
        }
        )()
    }
    function pe(e) {
        const t = Xi( () => e.href);
        return m(na, Pt(e, {
            get to() {
                return t()
            }
        }))
    }
    function Lo(e) {
        e = Pt({
            inactiveClass: "inactive",
            activeClass: "active"
        }, e);
        const [,t] = Zi(e, ["activeClass", "inactiveClass", "end"])
          , r = ea()
          , n = Xi( () => e.href)
          , o = T( () => {
            const i = n();
            if (i === void 0)
                return !1;
            const a = i.split(/[?#]/, 1)[0].toLowerCase()
              , s = r.pathname.toLowerCase();
            return e.end ? a === s : s.startsWith(a)
        }
        );
        return m(na, Pt(t, {
            get to() {
                return n()
            },
            get classList() {
                return {
                    [e.inactiveClass]: !o(),
                    [e.activeClass]: o()
                }
            },
            get["aria-current"]() {
                return o() ? "page" : void 0
            }
        }))
    }
    const WA = "modulepreload"
      , To = {}
      , jA = "/"
      , KA = function(t, r) {
        return !r || r.length === 0 ? t() : Promise.all(r.map(n => {
            if (n = `${jA}${n}`,
            n in To)
                return;
            To[n] = !0;
            const o = n.endsWith(".css")
              , i = o ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${n}"]${i}`))
                return;
            const a = document.createElement("link");
            if (a.rel = o ? "stylesheet" : WA,
            o || (a.as = "script",
            a.crossOrigin = ""),
            a.href = n,
            document.head.appendChild(a),
            o)
                return new Promise( (s, u) => {
                    a.addEventListener("load", s),
                    a.addEventListener("error", () => u(new Error(`Unable to preload CSS for ${n}`)))
                }
                )
        }
        )).then( () => t())
    };
    function XA(e={}) {
        const {immediate: t=!1, onNeedRefresh: r, onOfflineReady: n, onRegistered: o, onRegisteredSW: i, onRegisterError: a} = e;
        let s, u, l, A;
        const d = (E=!0) => qe(this, null, function*() {
            yield l,
            E && (s == null || s.addEventListener("controlling", R => {
                R.isUpdate && window.location.reload()
            }
            )),
            yield A == null ? void 0 : A()
        });
        function c() {
            return qe(this, null, function*() {
                if ("serviceWorker"in navigator) {
                    const {Workbox: E, messageSW: R} = yield KA( () => import("./workbox-window.prod.es5.6954f450.js"), []);
                    A = () => qe(this, null, function*() {
                        u && u.waiting && (yield R(u.waiting, {
                            type: "SKIP_WAITING"
                        }))
                    }),
                    s = new E("/sw.js",{
                        scope: "/",
                        type: "classic"
                    }),
                    s.addEventListener("activated", f => {
                        f.isUpdate || n == null || n()
                    }
                    );
                    {
                        const f = () => {
                            r == null || r()
                        }
                        ;
                        s.addEventListener("waiting", f),
                        s.addEventListener("externalwaiting", f)
                    }
                    s.register({
                        immediate: t
                    }).then(f => {
                        u = f,
                        i ? i("/sw.js", f) : o == null || o(f)
                    }
                    ).catch(f => {
                        a == null || a(f)
                    }
                    )
                }
            })
        }
        return l = c(),
        d
    }
    function po(e) {
        requestAnimationFrame( () => {
            requestAnimationFrame(e)
        }
        )
    }
    const oa = e => {
        let t, r = !0;
        const [n,o] = Q()
          , [i,a] = Q()
          , s = jn( () => e.children)
          , u = e.name || "s";
        e = Pt({
            name: u,
            enterActiveClass: u + "-enter-active",
            enterClass: u + "-enter",
            enterToClass: u + "-enter-to",
            exitActiveClass: u + "-exit-active",
            exitClass: u + "-exit",
            exitToClass: u + "-exit-to"
        }, e);
        const {onBeforeEnter: l, onEnter: A, onAfterEnter: d, onBeforeExit: c, onExit: E, onAfterExit: R} = e;
        function f(I, C) {
            if (!r || e.appear) {
                let y = function(v) {
                    I && (!v || v.target === I) && (I.removeEventListener("transitionend", y),
                    I.removeEventListener("animationend", y),
                    I.classList.remove(...L),
                    I.classList.remove(...p),
                    qn( () => {
                        n() !== I && o(I),
                        i() === I && a(void 0)
                    }
                    ),
                    d && d(I),
                    e.mode === "inout" && h(I, C))
                };
                var N = y;
                const g = e.enterClass.split(" ")
                  , L = e.enterActiveClass.split(" ")
                  , p = e.enterToClass.split(" ");
                l && l(I),
                I.classList.add(...g),
                I.classList.add(...L),
                po( () => {
                    I.classList.remove(...g),
                    I.classList.add(...p),
                    A && A(I, () => y()),
                    (!A || A.length < 2) && (I.addEventListener("transitionend", y),
                    I.addEventListener("animationend", y))
                }
                )
            }
            C && !e.mode ? a(I) : o(I)
        }
        function h(I, C) {
            const N = e.exitClass.split(" ")
              , g = e.exitActiveClass.split(" ")
              , L = e.exitToClass.split(" ");
            if (!C.parentNode)
                return p();
            c && c(C),
            C.classList.add(...N),
            C.classList.add(...g),
            po( () => {
                C.classList.remove(...N),
                C.classList.add(...L)
            }
            ),
            E && E(C, () => p()),
            (!E || E.length < 2) && (C.addEventListener("transitionend", p),
            C.addEventListener("animationend", p));
            function p(y) {
                (!y || y.target === C) && (C.removeEventListener("transitionend", p),
                C.removeEventListener("animationend", p),
                C.classList.remove(...g),
                C.classList.remove(...L),
                n() === C && o(void 0),
                R && R(C),
                e.mode === "outin" && f(I, C))
            }
        }
        return zn(I => {
            for (t = s(); typeof t == "function"; )
                t = t();
            return Ce( () => (t && t !== I && (e.mode !== "outin" ? f(t, I) : r && o(t)),
            I && I !== t && e.mode !== "inout" && h(t, I),
            r = !1,
            t))
        }
        ),
        [n, i]
    }
      , wt = 2
      , ia = 2
      , Be = wt * ia
      , K = 9
      , He = 5
      , Te = {
        year: 24 * 60 * 60 * 1e3 * 365,
        month: 24 * 60 * 60 * 1e3 * 365 / 12,
        day: 24 * 60 * 60 * 1e3,
        hour: 60 * 60 * 1e3,
        minute: 60 * 1e3,
        second: 1e3
    }
      , _r = new Date("01/24/2022")
      , aa = Te.day
      , sa = 1.3
      , Aa = .7
      , el = .1
      , la = !!navigator.vibrate
      , tl = ["ipad simulator", "iphone simulator", "ipod simulator", "ipad", "iphone", "ipod"].indexOf(navigator.platform.toLowerCase()) >= 0 || navigator.userAgent.toLowerCase().includes("mac") && "ontouchend"in document
      , Uo = "standalone"in window.navigator && window.navigator.standalone === !0;
    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    window.matchMedia("(display-mode: standalone)").matches;
    const rl = navigator.share && navigator.canShare && navigator.canShare({
        text: "test share text"
    })
      , nl = navigator.share && navigator.canShare && navigator.canShare({
        text: "test share text",
        files: [new File([new Blob],"test.png",{
            type: "image/png"
        })]
    })
      , Do = 10
      , Tt = ["win_practice", "win_daily", "streak_practice", "streak_daily", "win_in_9", "win_in_8", "win_in_7", "win_in_6", "win_in_5", "win_in_4", "guess_word_2_same_letter", "guess_word_3_same_letter", "correct_turn_1", "share", "donate", "lose_1_wrong", "lose_2_wrong", "lose_3_wrong", "lose_4_wrong", "play_words"]
      , ol = ["donate"]
      , nn = Tt.filter(e => !ol.includes(e))
      , il = {
        win_practice: [1, 5, 10, 50, 100, 500, 1e3],
        win_daily: [1, 5, 10, 50, 100, 500, 1e3],
        streak_practice: [5, 10, 50, 100, 500],
        streak_daily: [5, 10, 50, 100, 500],
        win_in_9: [1],
        win_in_8: [1],
        win_in_7: [1],
        win_in_6: [1],
        win_in_5: [1],
        win_in_4: [1],
        guess_word_2_same_letter: [1],
        guess_word_3_same_letter: [1],
        correct_turn_1: [1],
        share: [1],
        donate: [1],
        lose_1_wrong: [1],
        lose_2_wrong: [1],
        lose_3_wrong: [1],
        lose_4_wrong: [1],
        play_words: [50, 100, 200, 300, 500, 1e3, 1e4]
    }
      , al = {
        win_practice: (e, t) => t.free.history.slice(Be - 1, K).reduce( (n, o) => n + o, 0),
        win_daily: (e, t) => t.daily.history.slice(Be - 1, K).reduce( (n, o) => n + o, 0),
        streak_practice: (e, t) => t.free.maxStreak,
        streak_daily: (e, t) => t.daily.maxStreak,
        win_in_9: (e, t) => t.daily.history[8] + t.free.history[8],
        win_in_8: (e, t) => t.daily.history[7] + t.free.history[7],
        win_in_7: (e, t) => t.daily.history[6] + t.free.history[6],
        win_in_6: (e, t) => t.daily.history[5] + t.free.history[5],
        win_in_5: (e, t) => t.daily.history[4] + t.free.history[4],
        win_in_4: (e, t) => t.daily.history[3] + t.free.history[3],
        guess_word_2_same_letter: (e, t) => {
            const r = /\w*(\w)\w*\1\w*/;
            return t.daily.guesses.some(n => n.match(r)) || t.free.guesses.some(n => n.match(r)) ? 1 : t.achievements[e.type].count
        }
        ,
        guess_word_3_same_letter: (e, t) => {
            const r = /\w*(\w)\w*\1\w*\1\w*/;
            return t.daily.guesses.some(n => n.match(r)) || t.free.guesses.some(n => n.match(r)) ? 1 : t.achievements[e.type].count
        }
        ,
        correct_turn_1: (e, t) => t.daily.answersCorrect.indexOf(0) !== -1 || t.free.answersCorrect.indexOf(0) !== -1 ? 1 : t.achievements[e.type].count,
        share: (e, t) => t.shareTime > 0 ? 1 : 0,
        donate: (e, t) => t.donationTime > 0 ? 1 : 0,
        lose_1_wrong: (e, t) => t.daily.history[12] + t.free.history[12],
        lose_2_wrong: (e, t) => t.daily.history[11] + t.free.history[11],
        lose_3_wrong: (e, t) => t.daily.history[10] + t.free.history[10],
        lose_4_wrong: (e, t) => t.daily.history[9] + t.free.history[9],
        play_words: (e, t) => {
            const r = t.free.history.slice(0, K).reduce( (o, i, a) => o + i * (a + 1), 0) + t.daily.history.slice(0, K).reduce( (o, i, a) => o + i * (a + 1), 0)
              , n = t.free.history.slice(K).reduce( (o, i) => o + i * K, 0) + t.daily.history.slice(K).reduce( (o, i) => o + i * K, 0);
            return r + n
        }
    }
      , to = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    };
    var Zt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function sl(e) {
        if (e.__esModule)
            return e;
        var t = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(e).forEach(function(r) {
            var n = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(t, r, n.get ? n : {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }),
        t
    }
    var et = function(e) {
        e == null && (e = new Date().getTime()),
        this.N = 624,
        this.M = 397,
        this.MATRIX_A = 2567483615,
        this.UPPER_MASK = 2147483648,
        this.LOWER_MASK = 2147483647,
        this.mt = new Array(this.N),
        this.mti = this.N + 1,
        e.constructor == Array ? this.init_by_array(e, e.length) : this.init_seed(e)
    };
    et.prototype.init_seed = function(e) {
        for (this.mt[0] = e >>> 0,
        this.mti = 1; this.mti < this.N; this.mti++) {
            var e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
            this.mt[this.mti] = (((e & 4294901760) >>> 16) * 1812433253 << 16) + (e & 65535) * 1812433253 + this.mti,
            this.mt[this.mti] >>>= 0
        }
    }
    ;
    et.prototype.init_by_array = function(e, t) {
        var r, n, o;
        for (this.init_seed(19650218),
        r = 1,
        n = 0,
        o = this.N > t ? this.N : t; o; o--) {
            var i = this.mt[r - 1] ^ this.mt[r - 1] >>> 30;
            this.mt[r] = (this.mt[r] ^ (((i & 4294901760) >>> 16) * 1664525 << 16) + (i & 65535) * 1664525) + e[n] + n,
            this.mt[r] >>>= 0,
            r++,
            n++,
            r >= this.N && (this.mt[0] = this.mt[this.N - 1],
            r = 1),
            n >= t && (n = 0)
        }
        for (o = this.N - 1; o; o--) {
            var i = this.mt[r - 1] ^ this.mt[r - 1] >>> 30;
            this.mt[r] = (this.mt[r] ^ (((i & 4294901760) >>> 16) * 1566083941 << 16) + (i & 65535) * 1566083941) - r,
            this.mt[r] >>>= 0,
            r++,
            r >= this.N && (this.mt[0] = this.mt[this.N - 1],
            r = 1)
        }
        this.mt[0] = 2147483648
    }
    ;
    et.prototype.random_int = function() {
        var e, t = new Array(0,this.MATRIX_A);
        if (this.mti >= this.N) {
            var r;
            for (this.mti == this.N + 1 && this.init_seed(5489),
            r = 0; r < this.N - this.M; r++)
                e = this.mt[r] & this.UPPER_MASK | this.mt[r + 1] & this.LOWER_MASK,
                this.mt[r] = this.mt[r + this.M] ^ e >>> 1 ^ t[e & 1];
            for (; r < this.N - 1; r++)
                e = this.mt[r] & this.UPPER_MASK | this.mt[r + 1] & this.LOWER_MASK,
                this.mt[r] = this.mt[r + (this.M - this.N)] ^ e >>> 1 ^ t[e & 1];
            e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK,
            this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[e & 1],
            this.mti = 0
        }
        return e = this.mt[this.mti++],
        e ^= e >>> 11,
        e ^= e << 7 & 2636928640,
        e ^= e << 15 & 4022730752,
        e ^= e >>> 18,
        e >>> 0
    }
    ;
    et.prototype.random_int31 = function() {
        return this.random_int() >>> 1
    }
    ;
    et.prototype.random_incl = function() {
        return this.random_int() * (1 / 4294967295)
    }
    ;
    et.prototype.random = function() {
        return this.random_int() * (1 / 4294967296)
    }
    ;
    et.prototype.random_excl = function() {
        return (this.random_int() + .5) * (1 / 4294967296)
    }
    ;
    et.prototype.random_long = function() {
        var e = this.random_int() >>> 5
          , t = this.random_int() >>> 6;
        return (e * 67108864 + t) * (1 / 9007199254740992)
    }
    ;
    var Al = et;
    const Fr = Symbol("store-raw")
      , ir = Symbol("store-node")
      , ll = Symbol("store-name");
    function ca(e, t) {
        let r = e[ke];
        if (!r && (Object.defineProperty(e, ke, {
            value: r = new Proxy(e,El)
        }),
        !Array.isArray(e))) {
            const n = Object.keys(e)
              , o = Object.getOwnPropertyDescriptors(e);
            for (let i = 0, a = n.length; i < a; i++) {
                const s = n[i];
                if (o[s].get) {
                    const u = o[s].get.bind(r);
                    Object.defineProperty(e, s, {
                        get: u
                    })
                }
            }
        }
        return r
    }
    function Bt(e) {
        let t;
        return e != null && typeof e == "object" && (e[ke] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
    }
    function xt(e, t=new Set) {
        let r, n, o, i;
        if (r = e != null && e[Fr])
            return r;
        if (!Bt(e) || t.has(e))
            return e;
        if (Array.isArray(e)) {
            Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
            for (let a = 0, s = e.length; a < s; a++)
                o = e[a],
                (n = xt(o, t)) !== o && (e[a] = n)
        } else {
            Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
            const a = Object.keys(e)
              , s = Object.getOwnPropertyDescriptors(e);
            for (let u = 0, l = a.length; u < l; u++)
                i = a[u],
                !s[i].get && (o = e[i],
                (n = xt(o, t)) !== o && (e[i] = n))
        }
        return e
    }
    function $r(e) {
        let t = e[ir];
        return t || Object.defineProperty(e, ir, {
            value: t = {}
        }),
        t
    }
    function Nn(e, t, r) {
        return e[t] || (e[t] = Ea(r))
    }
    function cl(e, t) {
        const r = Reflect.getOwnPropertyDescriptor(e, t);
        return !r || r.get || !r.configurable || t === ke || t === ir || t === ll || (delete r.value,
        delete r.writable,
        r.get = () => e[ke][t]),
        r
    }
    function ua(e) {
        if (Gi()) {
            const t = $r(e);
            (t._ || (t._ = Ea()))()
        }
    }
    function ul(e) {
        return ua(e),
        Reflect.ownKeys(e)
    }
    function Ea(e) {
        const [t,r] = Q(e, {
            equals: !1,
            internal: !0
        });
        return t.$ = r,
        t
    }
    const El = {
        get(e, t, r) {
            if (t === Fr)
                return e;
            if (t === ke)
                return r;
            if (t === ho)
                return ua(e),
                r;
            const n = $r(e)
              , o = n.hasOwnProperty(t);
            let i = o ? n[t]() : e[t];
            if (t === ir || t === "__proto__")
                return i;
            if (!o) {
                const a = Object.getOwnPropertyDescriptor(e, t);
                Gi() && (typeof i != "function" || e.hasOwnProperty(t)) && !(a && a.get) && (i = Nn(n, t, i)())
            }
            return Bt(i) ? ca(i) : i
        },
        has(e, t) {
            if (t === Fr || t === ke || t === ho || t === ir || t === "__proto__")
                return !0;
            const r = $r(e)[t];
            return r && r(),
            t in e
        },
        set() {
            return !0
        },
        deleteProperty() {
            return !0
        },
        ownKeys: ul,
        getOwnPropertyDescriptor: cl
    };
    function Gt(e, t, r, n=!1) {
        if (!n && e[t] === r)
            return;
        const o = e[t]
          , i = e.length;
        r === void 0 ? delete e[t] : e[t] = r;
        let a = $r(e), s;
        (s = Nn(a, t, o)) && s.$( () => r),
        Array.isArray(e) && e.length !== i && (s = Nn(a, "length", i)) && s.$(e.length),
        (s = a._) && s.$()
    }
    function da(e, t) {
        const r = Object.keys(t);
        for (let n = 0; n < r.length; n += 1) {
            const o = r[n];
            Gt(e, o, t[o])
        }
    }
    function dl(e, t) {
        if (typeof t == "function" && (t = t(e)),
        t = xt(t),
        Array.isArray(t)) {
            if (e === t)
                return;
            let r = 0
              , n = t.length;
            for (; r < n; r++) {
                const o = t[r];
                e[r] !== o && Gt(e, r, o)
            }
            Gt(e, "length", n)
        } else
            da(e, t)
    }
    function Wt(e, t, r=[]) {
        let n, o = e;
        if (t.length > 1) {
            n = t.shift();
            const a = typeof n
              , s = Array.isArray(e);
            if (Array.isArray(n)) {
                for (let u = 0; u < n.length; u++)
                    Wt(e, [n[u]].concat(t), r);
                return
            } else if (s && a === "function") {
                for (let u = 0; u < e.length; u++)
                    n(e[u], u) && Wt(e, [u].concat(t), r);
                return
            } else if (s && a === "object") {
                const {from: u=0, to: l=e.length - 1, by: A=1} = n;
                for (let d = u; d <= l; d += A)
                    Wt(e, [d].concat(t), r);
                return
            } else if (t.length > 1) {
                Wt(e[n], t, [n].concat(r));
                return
            }
            o = e[n],
            r = [n].concat(r)
        }
        let i = t[0];
        typeof i == "function" && (i = i(o, r),
        i === o) || n === void 0 && i == null || (i = xt(i),
        n === void 0 || Bt(o) && Bt(i) && !Array.isArray(i) ? da(o, i) : Gt(e, n, i))
    }
    function Ol(...[e,t]) {
        const r = xt(e || {})
          , n = Array.isArray(r)
          , o = ca(r);
        function i(...a) {
            qn( () => {
                n && a.length === 1 ? dl(r, a[0]) : Wt(r, a)
            }
            )
        }
        return [o, i]
    }
    const Hr = new WeakMap
      , Oa = {
        get(e, t) {
            if (t === Fr)
                return e;
            const r = e[t];
            let n;
            return Bt(r) ? Hr.get(r) || (Hr.set(r, n = new Proxy(r,Oa)),
            n) : r
        },
        set(e, t, r) {
            return Gt(e, t, xt(r)),
            !0
        },
        deleteProperty(e, t) {
            return Gt(e, t, void 0, !0),
            !0
        }
    };
    function Oe(e) {
        return t => {
            if (Bt(t)) {
                let r;
                (r = Hr.get(t)) || Hr.set(t, r = new Proxy(t,Oa)),
                e(r)
            }
            return t
        }
    }
    var bo = Object.prototype.toString, Sa = function(t) {
        var r = bo.call(t)
          , n = r === "[object Arguments]";
        return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && bo.call(t.callee) === "[object Function]"),
        n
    }, fa;
    if (!Object.keys) {
        var Sr = Object.prototype.hasOwnProperty
          , Po = Object.prototype.toString
          , Sl = Sa
          , Mo = Object.prototype.propertyIsEnumerable
          , fl = !Mo.call({
            toString: null
        }, "toString")
          , Rl = Mo.call(function() {}, "prototype")
          , fr = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , on = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        }
          , Il = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }
          , hl = function() {
            if (typeof window == "undefined")
                return !1;
            for (var e in window)
                try {
                    if (!Il["$" + e] && Sr.call(window, e) && window[e] !== null && typeof window[e] == "object")
                        try {
                            on(window[e])
                        } catch (t) {
                            return !0
                        }
                } catch (t) {
                    return !0
                }
            return !1
        }()
          , ml = function(e) {
            if (typeof window == "undefined" || !hl)
                return on(e);
            try {
                return on(e)
            } catch (t) {
                return !1
            }
        };
        fa = function(t) {
            var r = t !== null && typeof t == "object"
              , n = Po.call(t) === "[object Function]"
              , o = Sl(t)
              , i = r && Po.call(t) === "[object String]"
              , a = [];
            if (!r && !n && !o)
                throw new TypeError("Object.keys called on a non-object");
            var s = Rl && n;
            if (i && t.length > 0 && !Sr.call(t, 0))
                for (var u = 0; u < t.length; ++u)
                    a.push(String(u));
            if (o && t.length > 0)
                for (var l = 0; l < t.length; ++l)
                    a.push(String(l));
            else
                for (var A in t)
                    !(s && A === "prototype") && Sr.call(t, A) && a.push(String(A));
            if (fl)
                for (var d = ml(t), c = 0; c < fr.length; ++c)
                    !(d && fr[c] === "constructor") && Sr.call(t, fr[c]) && a.push(fr[c]);
            return a
        }
    }
    var vl = fa
      , gl = Array.prototype.slice
      , Cl = Sa
      , wo = Object.keys
      , pr = wo ? function(t) {
        return wo(t)
    }
    : vl
      , Bo = Object.keys;
    pr.shim = function() {
        if (Object.keys) {
            var t = function() {
                var r = Object.keys(arguments);
                return r && r.length === arguments.length
            }(1, 2);
            t || (Object.keys = function(n) {
                return Cl(n) ? Bo(gl.call(n)) : Bo(n)
            }
            )
        } else
            Object.keys = pr;
        return Object.keys || pr
    }
    ;
    var Nl = pr, Ra = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
            return !1;
        if (typeof Symbol.iterator == "symbol")
            return !0;
        var t = {}
          , r = Symbol("test")
          , n = Object(r);
        if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
            return !1;
        var o = 42;
        t[r] = o;
        for (r in t)
            return !1;
        if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
            return !1;
        var i = Object.getOwnPropertySymbols(t);
        if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
            return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var a = Object.getOwnPropertyDescriptor(t, r);
            if (a.value !== o || a.enumerable !== !0)
                return !1
        }
        return !0
    }, xo = typeof Symbol != "undefined" && Symbol, yl = Ra, Ia = function() {
        return typeof xo != "function" || typeof Symbol != "function" || typeof xo("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : yl()
    }, Ll = "Function.prototype.bind called on incompatible ", an = Array.prototype.slice, Tl = Object.prototype.toString, pl = "[object Function]", Ul = function(t) {
        var r = this;
        if (typeof r != "function" || Tl.call(r) !== pl)
            throw new TypeError(Ll + r);
        for (var n = an.call(arguments, 1), o, i = function() {
            if (this instanceof o) {
                var A = r.apply(this, n.concat(an.call(arguments)));
                return Object(A) === A ? A : this
            } else
                return r.apply(t, n.concat(an.call(arguments)))
        }, a = Math.max(0, r.length - n.length), s = [], u = 0; u < a; u++)
            s.push("$" + u);
        if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(i),
        r.prototype) {
            var l = function() {};
            l.prototype = r.prototype,
            o.prototype = new l,
            l.prototype = null
        }
        return o
    }, Dl = Ul, ro = Function.prototype.bind || Dl, bl = ro, ha = bl.call(Function.call, Object.prototype.hasOwnProperty), Y, _t = SyntaxError, ma = Function, pt = TypeError, sn = function(e) {
        try {
            return ma('"use strict"; return (' + e + ").constructor;")()
        } catch (t) {}
    }, Ot = Object.getOwnPropertyDescriptor;
    if (Ot)
        try {
            Ot({}, "")
        } catch (e) {
            Ot = null
        }
    var An = function() {
        throw new pt
    }
      , Pl = Ot ? function() {
        try {
            return arguments.callee,
            An
        } catch (e) {
            try {
                return Ot(arguments, "callee").get
            } catch (t) {
                return An
            }
        }
    }() : An
      , mt = Ia()
      , nt = Object.getPrototypeOf || function(e) {
        return e.__proto__
    }
      , Ct = {}
      , Ml = typeof Uint8Array == "undefined" ? Y : nt(Uint8Array)
      , Ut = {
        "%AggregateError%": typeof AggregateError == "undefined" ? Y : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? Y : ArrayBuffer,
        "%ArrayIteratorPrototype%": mt ? nt([][Symbol.iterator]()) : Y,
        "%AsyncFromSyncIteratorPrototype%": Y,
        "%AsyncFunction%": Ct,
        "%AsyncGenerator%": Ct,
        "%AsyncGeneratorFunction%": Ct,
        "%AsyncIteratorPrototype%": Ct,
        "%Atomics%": typeof Atomics == "undefined" ? Y : Atomics,
        "%BigInt%": typeof BigInt == "undefined" ? Y : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView == "undefined" ? Y : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array == "undefined" ? Y : Float32Array,
        "%Float64Array%": typeof Float64Array == "undefined" ? Y : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? Y : FinalizationRegistry,
        "%Function%": ma,
        "%GeneratorFunction%": Ct,
        "%Int8Array%": typeof Int8Array == "undefined" ? Y : Int8Array,
        "%Int16Array%": typeof Int16Array == "undefined" ? Y : Int16Array,
        "%Int32Array%": typeof Int32Array == "undefined" ? Y : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": mt ? nt(nt([][Symbol.iterator]())) : Y,
        "%JSON%": typeof JSON == "object" ? JSON : Y,
        "%Map%": typeof Map == "undefined" ? Y : Map,
        "%MapIteratorPrototype%": typeof Map == "undefined" || !mt ? Y : nt(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise == "undefined" ? Y : Promise,
        "%Proxy%": typeof Proxy == "undefined" ? Y : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect == "undefined" ? Y : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set == "undefined" ? Y : Set,
        "%SetIteratorPrototype%": typeof Set == "undefined" || !mt ? Y : nt(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? Y : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": mt ? nt(""[Symbol.iterator]()) : Y,
        "%Symbol%": mt ? Symbol : Y,
        "%SyntaxError%": _t,
        "%ThrowTypeError%": Pl,
        "%TypedArray%": Ml,
        "%TypeError%": pt,
        "%Uint8Array%": typeof Uint8Array == "undefined" ? Y : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? Y : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array == "undefined" ? Y : Uint16Array,
        "%Uint32Array%": typeof Uint32Array == "undefined" ? Y : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap == "undefined" ? Y : WeakMap,
        "%WeakRef%": typeof WeakRef == "undefined" ? Y : WeakRef,
        "%WeakSet%": typeof WeakSet == "undefined" ? Y : WeakSet
    }
      , wl = function e(t) {
        var r;
        if (t === "%AsyncFunction%")
            r = sn("async function () {}");
        else if (t === "%GeneratorFunction%")
            r = sn("function* () {}");
        else if (t === "%AsyncGeneratorFunction%")
            r = sn("async function* () {}");
        else if (t === "%AsyncGenerator%") {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
        } else if (t === "%AsyncIteratorPrototype%") {
            var o = e("%AsyncGenerator%");
            o && (r = nt(o.prototype))
        }
        return Ut[t] = r,
        r
    }
      , Go = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }
      , Ar = ro
      , kr = ha
      , Bl = Ar.call(Function.call, Array.prototype.concat)
      , xl = Ar.call(Function.apply, Array.prototype.splice)
      , _o = Ar.call(Function.call, String.prototype.replace)
      , Jr = Ar.call(Function.call, String.prototype.slice)
      , Gl = Ar.call(Function.call, RegExp.prototype.exec)
      , _l = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
      , Fl = /\\(\\)?/g
      , $l = function(t) {
        var r = Jr(t, 0, 1)
          , n = Jr(t, -1);
        if (r === "%" && n !== "%")
            throw new _t("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%")
            throw new _t("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return _o(t, _l, function(i, a, s, u) {
            o[o.length] = s ? _o(u, Fl, "$1") : a || i
        }),
        o
    }
      , Hl = function(t, r) {
        var n = t, o;
        if (kr(Go, n) && (o = Go[n],
        n = "%" + o[0] + "%"),
        kr(Ut, n)) {
            var i = Ut[n];
            if (i === Ct && (i = wl(n)),
            typeof i == "undefined" && !r)
                throw new pt("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: n,
                value: i
            }
        }
        throw new _t("intrinsic " + t + " does not exist!")
    }
      , ve = function(t, r) {
        if (typeof t != "string" || t.length === 0)
            throw new pt("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof r != "boolean")
            throw new pt('"allowMissing" argument must be a boolean');
        if (Gl(/^%?[^%]*%?$/, t) === null)
            throw new _t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = $l(t)
          , o = n.length > 0 ? n[0] : ""
          , i = Hl("%" + o + "%", r)
          , a = i.name
          , s = i.value
          , u = !1
          , l = i.alias;
        l && (o = l[0],
        xl(n, Bl([0, 1], l)));
        for (var A = 1, d = !0; A < n.length; A += 1) {
            var c = n[A]
              , E = Jr(c, 0, 1)
              , R = Jr(c, -1);
            if ((E === '"' || E === "'" || E === "`" || R === '"' || R === "'" || R === "`") && E !== R)
                throw new _t("property names with quotes must have matching quotes");
            if ((c === "constructor" || !d) && (u = !0),
            o += "." + c,
            a = "%" + o + "%",
            kr(Ut, a))
                s = Ut[a];
            else if (s != null) {
                if (!(c in s)) {
                    if (!r)
                        throw new pt("base intrinsic for " + t + " exists, but the property is not available.");
                    return
                }
                if (Ot && A + 1 >= n.length) {
                    var f = Ot(s, c);
                    d = !!f,
                    d && "get"in f && !("originalValue"in f.get) ? s = f.get : s = s[c]
                } else
                    d = kr(s, c),
                    s = s[c];
                d && !u && (Ut[a] = s)
            }
        }
        return s
    }
      , kl = ve
      , yn = kl("%Object.defineProperty%", !0)
      , Ln = function() {
        if (yn)
            try {
                return yn({}, "a", {
                    value: 1
                }),
                !0
            } catch (t) {
                return !1
            }
        return !1
    };
    Ln.hasArrayLengthDefineBug = function() {
        if (!Ln())
            return null;
        try {
            return yn([], "length", {
                value: 1
            }).length !== 1
        } catch (t) {
            return !0
        }
    }
    ;
    var Jl = Ln
      , Vl = Nl
      , Zl = typeof Symbol == "function" && typeof Symbol("foo") == "symbol"
      , Yl = Object.prototype.toString
      , Ql = Array.prototype.concat
      , va = Object.defineProperty
      , zl = function(e) {
        return typeof e == "function" && Yl.call(e) === "[object Function]"
    }
      , ql = Jl()
      , ga = va && ql
      , Wl = function(e, t, r, n) {
        t in e && (!zl(n) || !n()) || (ga ? va(e, t, {
            configurable: !0,
            enumerable: !1,
            value: r,
            writable: !0
        }) : e[t] = r)
    }
      , Ca = function(e, t) {
        var r = arguments.length > 2 ? arguments[2] : {}
          , n = Vl(t);
        Zl && (n = Ql.call(n, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < n.length; o += 1)
            Wl(e, n[o], t[n[o]], r[n[o]])
    };
    Ca.supportsDescriptors = !!ga;
    var kt = Ca
      , lr = {
        exports: {}
    };
    (function(e) {
        var t = ro
          , r = ve
          , n = r("%Function.prototype.apply%")
          , o = r("%Function.prototype.call%")
          , i = r("%Reflect.apply%", !0) || t.call(o, n)
          , a = r("%Object.getOwnPropertyDescriptor%", !0)
          , s = r("%Object.defineProperty%", !0)
          , u = r("%Math.max%");
        if (s)
            try {
                s({}, "a", {
                    value: 1
                })
            } catch (A) {
                s = null
            }
        e.exports = function(d) {
            var c = i(t, o, arguments);
            if (a && s) {
                var E = a(c, "length");
                E.configurable && s(c, "length", {
                    value: 1 + u(0, d.length - (arguments.length - 1))
                })
            }
            return c
        }
        ;
        var l = function() {
            return i(t, n, arguments)
        };
        s ? s(e.exports, "apply", {
            value: l
        }) : e.exports.apply = l
    }
    )(lr);
    var Na = ve
      , ya = lr.exports
      , jl = ya(Na("String.prototype.indexOf"))
      , tt = function(t, r) {
        var n = Na(t, !!r);
        return typeof n == "function" && jl(t, ".prototype.") > -1 ? ya(n) : n
    }
      , Kl = ve
      , Xl = Kl("%TypeError%")
      , ec = function(t, r) {
        if (t == null)
            throw new Xl(r || "Cannot call method on " + t);
        return t
    }
      , cr = ec
      , tc = ve
      , La = tc("%Array%")
      , rc = !La.isArray && tt("Object.prototype.toString")
      , nc = La.isArray || function(t) {
        return rc(t) === "[object Array]"
    }
      , oc = nc
      , Ta = ve
      , ic = tt
      , ac = Ta("%TypeError%")
      , sc = oc
      , Ac = Ta("%Reflect.apply%", !0) || ic("%Function.prototype.apply%")
      , lc = function(t, r) {
        var n = arguments.length > 2 ? arguments[2] : [];
        if (!sc(n))
            throw new ac("Assertion failed: optional `argumentsList`, if provided, must be a List");
        return Ac(t, r, n)
    }
      , cc = {}
      , uc = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: cc
    })
      , Ec = sl(uc)
      , no = typeof Map == "function" && Map.prototype
      , ln = Object.getOwnPropertyDescriptor && no ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
      , Vr = no && ln && typeof ln.get == "function" ? ln.get : null
      , dc = no && Map.prototype.forEach
      , oo = typeof Set == "function" && Set.prototype
      , cn = Object.getOwnPropertyDescriptor && oo ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
      , Zr = oo && cn && typeof cn.get == "function" ? cn.get : null
      , Oc = oo && Set.prototype.forEach
      , Sc = typeof WeakMap == "function" && WeakMap.prototype
      , Xt = Sc ? WeakMap.prototype.has : null
      , fc = typeof WeakSet == "function" && WeakSet.prototype
      , er = fc ? WeakSet.prototype.has : null
      , Rc = typeof WeakRef == "function" && WeakRef.prototype
      , Fo = Rc ? WeakRef.prototype.deref : null
      , Ic = Boolean.prototype.valueOf
      , hc = Object.prototype.toString
      , mc = Function.prototype.toString
      , vc = String.prototype.match
      , io = String.prototype.slice
      , it = String.prototype.replace
      , gc = String.prototype.toUpperCase
      , $o = String.prototype.toLowerCase
      , pa = RegExp.prototype.test
      , Ho = Array.prototype.concat
      , Fe = Array.prototype.join
      , Cc = Array.prototype.slice
      , ko = Math.floor
      , Tn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
      , un = Object.getOwnPropertySymbols
      , pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
      , Ft = typeof Symbol == "function" && typeof Symbol.iterator == "object"
      , me = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ft ? "object" : "symbol") ? Symbol.toStringTag : null
      , Ua = Object.prototype.propertyIsEnumerable
      , Jo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
        return e.__proto__
    }
    : null);
    function Vo(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || pa.call(/e/, t))
            return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -ko(-e) : ko(e);
            if (n !== e) {
                var o = String(n)
                  , i = io.call(t, o.length + 1);
                return it.call(o, r, "$&_") + "." + it.call(it.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return it.call(t, r, "$&_")
    }
    var Un = Ec
      , Zo = Un.custom
      , Yo = ba(Zo) ? Zo : null
      , Nc = function e(t, r, n, o) {
        var i = r || {};
        if (ot(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (ot(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var a = ot(i, "customInspect") ? i.customInspect : !0;
        if (typeof a != "boolean" && a !== "symbol")
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (ot(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ot(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var s = i.numericSeparator;
        if (typeof t == "undefined")
            return "undefined";
        if (t === null)
            return "null";
        if (typeof t == "boolean")
            return t ? "true" : "false";
        if (typeof t == "string")
            return Ma(t, i);
        if (typeof t == "number") {
            if (t === 0)
                return 1 / 0 / t > 0 ? "0" : "-0";
            var u = String(t);
            return s ? Vo(t, u) : u
        }
        if (typeof t == "bigint") {
            var l = String(t) + "n";
            return s ? Vo(t, l) : l
        }
        var A = typeof i.depth == "undefined" ? 5 : i.depth;
        if (typeof n == "undefined" && (n = 0),
        n >= A && A > 0 && typeof t == "object")
            return Dn(t) ? "[Array]" : "[Object]";
        var d = kc(i, n);
        if (typeof o == "undefined")
            o = [];
        else if (Pa(o, t) >= 0)
            return "[Circular]";
        function c($, z, B) {
            if (z && (o = Cc.call(o),
            o.push(z)),
            B) {
                var te = {
                    depth: i.depth
                };
                return ot(i, "quoteStyle") && (te.quoteStyle = i.quoteStyle),
                e($, te, n + 1, o)
            }
            return e($, i, n + 1, o)
        }
        if (typeof t == "function" && !Qo(t)) {
            var E = Mc(t)
              , R = Rr(t, c);
            return "[Function" + (E ? ": " + E : " (anonymous)") + "]" + (R.length > 0 ? " { " + Fe.call(R, ", ") + " }" : "")
        }
        if (ba(t)) {
            var f = Ft ? it.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : pn.call(t);
            return typeof t == "object" && !Ft ? Yt(f) : f
        }
        if (Fc(t)) {
            for (var h = "<" + $o.call(String(t.nodeName)), I = t.attributes || [], C = 0; C < I.length; C++)
                h += " " + I[C].name + "=" + Da(yc(I[C].value), "double", i);
            return h += ">",
            t.childNodes && t.childNodes.length && (h += "..."),
            h += "</" + $o.call(String(t.nodeName)) + ">",
            h
        }
        if (Dn(t)) {
            if (t.length === 0)
                return "[]";
            var N = Rr(t, c);
            return d && !Hc(N) ? "[" + bn(N, d) + "]" : "[ " + Fe.call(N, ", ") + " ]"
        }
        if (Tc(t)) {
            var g = Rr(t, c);
            return !("cause"in Error.prototype) && "cause"in t && !Ua.call(t, "cause") ? "{ [" + String(t) + "] " + Fe.call(Ho.call("[cause]: " + c(t.cause), g), ", ") + " }" : g.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Fe.call(g, ", ") + " }"
        }
        if (typeof t == "object" && a) {
            if (Yo && typeof t[Yo] == "function" && Un)
                return Un(t, {
                    depth: A - n
                });
            if (a !== "symbol" && typeof t.inspect == "function")
                return t.inspect()
        }
        if (wc(t)) {
            var L = [];
            return dc.call(t, function($, z) {
                L.push(c(z, t, !0) + " => " + c($, t))
            }),
            zo("Map", Vr.call(t), L, d)
        }
        if (Gc(t)) {
            var p = [];
            return Oc.call(t, function($) {
                p.push(c($, t))
            }),
            zo("Set", Zr.call(t), p, d)
        }
        if (Bc(t))
            return En("WeakMap");
        if (_c(t))
            return En("WeakSet");
        if (xc(t))
            return En("WeakRef");
        if (Uc(t))
            return Yt(c(Number(t)));
        if (bc(t))
            return Yt(c(Tn.call(t)));
        if (Dc(t))
            return Yt(Ic.call(t));
        if (pc(t))
            return Yt(c(String(t)));
        if (!Lc(t) && !Qo(t)) {
            var y = Rr(t, c)
              , v = Jo ? Jo(t) === Object.prototype : t instanceof Object || t.constructor === Object
              , S = t instanceof Object ? "" : "null prototype"
              , M = !v && me && Object(t) === t && me in t ? io.call(At(t), 8, -1) : S ? "Object" : ""
              , H = v || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : ""
              , w = H + (M || S ? "[" + Fe.call(Ho.call([], M || [], S || []), ": ") + "] " : "");
            return y.length === 0 ? w + "{}" : d ? w + "{" + bn(y, d) + "}" : w + "{ " + Fe.call(y, ", ") + " }"
        }
        return String(t)
    };
    function Da(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }
    function yc(e) {
        return it.call(String(e), /"/g, "&quot;")
    }
    function Dn(e) {
        return At(e) === "[object Array]" && (!me || !(typeof e == "object" && me in e))
    }
    function Lc(e) {
        return At(e) === "[object Date]" && (!me || !(typeof e == "object" && me in e))
    }
    function Qo(e) {
        return At(e) === "[object RegExp]" && (!me || !(typeof e == "object" && me in e))
    }
    function Tc(e) {
        return At(e) === "[object Error]" && (!me || !(typeof e == "object" && me in e))
    }
    function pc(e) {
        return At(e) === "[object String]" && (!me || !(typeof e == "object" && me in e))
    }
    function Uc(e) {
        return At(e) === "[object Number]" && (!me || !(typeof e == "object" && me in e))
    }
    function Dc(e) {
        return At(e) === "[object Boolean]" && (!me || !(typeof e == "object" && me in e))
    }
    function ba(e) {
        if (Ft)
            return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol")
            return !0;
        if (!e || typeof e != "object" || !pn)
            return !1;
        try {
            return pn.call(e),
            !0
        } catch (t) {}
        return !1
    }
    function bc(e) {
        if (!e || typeof e != "object" || !Tn)
            return !1;
        try {
            return Tn.call(e),
            !0
        } catch (t) {}
        return !1
    }
    var Pc = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    }
    ;
    function ot(e, t) {
        return Pc.call(e, t)
    }
    function At(e) {
        return hc.call(e)
    }
    function Mc(e) {
        if (e.name)
            return e.name;
        var t = vc.call(mc.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }
    function Pa(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t)
                return r;
        return -1
    }
    function wc(e) {
        if (!Vr || !e || typeof e != "object")
            return !1;
        try {
            Vr.call(e);
            try {
                Zr.call(e)
            } catch (t) {
                return !0
            }
            return e instanceof Map
        } catch (t) {}
        return !1
    }
    function Bc(e) {
        if (!Xt || !e || typeof e != "object")
            return !1;
        try {
            Xt.call(e, Xt);
            try {
                er.call(e, er)
            } catch (t) {
                return !0
            }
            return e instanceof WeakMap
        } catch (t) {}
        return !1
    }
    function xc(e) {
        if (!Fo || !e || typeof e != "object")
            return !1;
        try {
            return Fo.call(e),
            !0
        } catch (t) {}
        return !1
    }
    function Gc(e) {
        if (!Zr || !e || typeof e != "object")
            return !1;
        try {
            Zr.call(e);
            try {
                Vr.call(e)
            } catch (t) {
                return !0
            }
            return e instanceof Set
        } catch (t) {}
        return !1
    }
    function _c(e) {
        if (!er || !e || typeof e != "object")
            return !1;
        try {
            er.call(e, er);
            try {
                Xt.call(e, Xt)
            } catch (t) {
                return !0
            }
            return e instanceof WeakSet
        } catch (t) {}
        return !1
    }
    function Fc(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement != "undefined" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }
    function Ma(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength
              , n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return Ma(io.call(e, 0, t.maxStringLength), t) + n
        }
        var o = it.call(it.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $c);
        return Da(o, "single", t)
    }
    function $c(e) {
        var t = e.charCodeAt(0)
          , r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        }[t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + gc.call(t.toString(16))
    }
    function Yt(e) {
        return "Object(" + e + ")"
    }
    function En(e) {
        return e + " { ? }"
    }
    function zo(e, t, r, n) {
        var o = n ? bn(r, n) : Fe.call(r, ", ");
        return e + " (" + t + ") {" + o + "}"
    }
    function Hc(e) {
        for (var t = 0; t < e.length; t++)
            if (Pa(e[t], `
`) >= 0)
                return !1;
        return !0
    }
    function kc(e, t) {
        var r;
        if (e.indent === "	")
            r = "	";
        else if (typeof e.indent == "number" && e.indent > 0)
            r = Fe.call(Array(e.indent + 1), " ");
        else
            return null;
        return {
            base: r,
            prev: Fe.call(Array(t + 1), r)
        }
    }
    function bn(e, t) {
        if (e.length === 0)
            return "";
        var r = `
` + t.prev + t.base;
        return r + Fe.call(e, "," + r) + `
` + t.prev
    }
    function Rr(e, t) {
        var r = Dn(e)
          , n = [];
        if (r) {
            n.length = e.length;
            for (var o = 0; o < e.length; o++)
                n[o] = ot(e, o) ? t(e[o], e) : ""
        }
        var i = typeof un == "function" ? un(e) : [], a;
        if (Ft) {
            a = {};
            for (var s = 0; s < i.length; s++)
                a["$" + i[s]] = i[s]
        }
        for (var u in e)
            !ot(e, u) || r && String(Number(u)) === u && u < e.length || Ft && a["$" + u]instanceof Symbol || (pa.call(/[^\w$]/, u) ? n.push(t(u, e) + ": " + t(e[u], e)) : n.push(u + ": " + t(e[u], e)));
        if (typeof un == "function")
            for (var l = 0; l < i.length; l++)
                Ua.call(e, i[l]) && n.push("[" + t(i[l]) + "]: " + t(e[i[l]], e));
        return n
    }
    var wa = function(t) {
        return typeof t == "string" || typeof t == "symbol"
    }, Jc = function(t) {
        if (t === null)
            return "Null";
        if (typeof t == "undefined")
            return "Undefined";
        if (typeof t == "function" || typeof t == "object")
            return "Object";
        if (typeof t == "number")
            return "Number";
        if (typeof t == "boolean")
            return "Boolean";
        if (typeof t == "string")
            return "String"
    }, Vc = Jc, ao = function(t) {
        return typeof t == "symbol" ? "Symbol" : typeof t == "bigint" ? "BigInt" : Vc(t)
    }, Zc = ve, qo = Zc("%TypeError%"), Yc = Nc, Qc = wa, zc = ao, Ba = function(t, r) {
        if (zc(t) !== "Object")
            throw new qo("Assertion failed: Type(O) is not Object");
        if (!Qc(r))
            throw new qo("Assertion failed: IsPropertyKey(P) is not true, got " + Yc(r));
        return t[r]
    }, qc = ve, Wo = qc("%TypeError%"), Wc = wa, jc = ao, Kc = function(t, r) {
        if (jc(t) !== "Object")
            throw new Wo("Assertion failed: `O` must be an Object");
        if (!Wc(r))
            throw new Wo("Assertion failed: `P` must be a Property Key");
        return r in t
    }, xa = Function.prototype.toString, Nt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Pn, Ur;
    if (typeof Nt == "function" && typeof Object.defineProperty == "function")
        try {
            Pn = Object.defineProperty({}, "length", {
                get: function() {
                    throw Ur
                }
            }),
            Ur = {},
            Nt(function() {
                throw 42
            }, null, Pn)
        } catch (e) {
            e !== Ur && (Nt = null)
        }
    else
        Nt = null;
    var Xc = /^\s*class\b/
      , Mn = function(t) {
        try {
            var r = xa.call(t);
            return Xc.test(r)
        } catch (n) {
            return !1
        }
    }
      , dn = function(t) {
        try {
            return Mn(t) ? !1 : (xa.call(t),
            !0)
        } catch (r) {
            return !1
        }
    }
      , Dr = Object.prototype.toString
      , eu = "[object Object]"
      , tu = "[object Function]"
      , ru = "[object GeneratorFunction]"
      , nu = "[object HTMLAllCollection]"
      , ou = "[object HTML document.all class]"
      , iu = "[object HTMLCollection]"
      , au = typeof Symbol == "function" && !!Symbol.toStringTag
      , su = !(0 in [, ])
      , wn = function() {
        return !1
    };
    if (typeof document == "object") {
        var Au = document.all;
        Dr.call(Au) === Dr.call(document.all) && (wn = function(t) {
            if ((su || !t) && (typeof t == "undefined" || typeof t == "object"))
                try {
                    var r = Dr.call(t);
                    return (r === nu || r === ou || r === iu || r === eu) && t("") == null
                } catch (n) {}
            return !1
        }
        )
    }
    var Ga = Nt ? function(t) {
        if (wn(t))
            return !0;
        if (!t || typeof t != "function" && typeof t != "object")
            return !1;
        try {
            Nt(t, null, Pn)
        } catch (r) {
            if (r !== Ur)
                return !1
        }
        return !Mn(t) && dn(t)
    }
    : function(t) {
        if (wn(t))
            return !0;
        if (!t || typeof t != "function" && typeof t != "object")
            return !1;
        if (au)
            return dn(t);
        if (Mn(t))
            return !1;
        var r = Dr.call(t);
        return r !== tu && r !== ru && !/^\[object HTML/.test(r) ? !1 : dn(t)
    }
    , lu = Ga, _a = ve, cu = _a("%Math%"), uu = _a("%Number%"), Eu = uu.MAX_SAFE_INTEGER || cu.pow(2, 53) - 1, du = ve, Ou = du("%Math.abs%"), Su = function(t) {
        return Ou(t)
    }, fu = Math.floor, Ru = function(t) {
        return fu(t)
    }, Iu = Ra, so = function() {
        return Iu() && !!Symbol.toStringTag
    }, Bn = tt, Fa = so(), $a, Ha, xn, Gn;
    if (Fa) {
        $a = Bn("Object.prototype.hasOwnProperty"),
        Ha = Bn("RegExp.prototype.exec"),
        xn = {};
        var On = function() {
            throw xn
        };
        Gn = {
            toString: On,
            valueOf: On
        },
        typeof Symbol.toPrimitive == "symbol" && (Gn[Symbol.toPrimitive] = On)
    }
    var hu = Bn("Object.prototype.toString")
      , mu = Object.getOwnPropertyDescriptor
      , vu = "[object RegExp]"
      , gu = Fa ? function(t) {
        if (!t || typeof t != "object")
            return !1;
        var r = mu(t, "lastIndex")
          , n = r && $a(r, "value");
        if (!n)
            return !1;
        try {
            Ha(t, Gn)
        } catch (o) {
            return o === xn
        }
    }
    : function(t) {
        return !t || typeof t != "object" && typeof t != "function" ? !1 : hu(t) === vu
    }
      , Cu = tt
      , Nu = ve
      , yu = gu
      , Lu = Cu("RegExp.prototype.exec")
      , Tu = Nu("%TypeError%")
      , pu = function(t) {
        if (!yu(t))
            throw new Tu("`regex` must be a RegExp");
        return function(n) {
            return Lu(t, n) !== null
        }
    }
      , Uu = function(t) {
        return t === null || typeof t != "function" && typeof t != "object"
    }
      , Du = function(t) {
        return t === null || typeof t != "function" && typeof t != "object"
    }
      , bu = Date.prototype.getDay
      , Pu = function(t) {
        try {
            return bu.call(t),
            !0
        } catch (r) {
            return !1
        }
    }
      , Mu = Object.prototype.toString
      , wu = "[object Date]"
      , Bu = so()
      , xu = function(t) {
        return typeof t != "object" || t === null ? !1 : Bu ? Pu(t) : Mu.call(t) === wu
    }
      , _n = {
        exports: {}
    }
      , Gu = Object.prototype.toString
      , _u = Ia();
    if (_u) {
        var Fu = Symbol.prototype.toString
          , $u = /^Symbol\(.*\)$/
          , Hu = function(t) {
            return typeof t.valueOf() != "symbol" ? !1 : $u.test(Fu.call(t))
        };
        _n.exports = function(t) {
            if (typeof t == "symbol")
                return !0;
            if (Gu.call(t) !== "[object Symbol]")
                return !1;
            try {
                return Hu(t)
            } catch (r) {
                return !1
            }
        }
    } else
        _n.exports = function(t) {
            return !1
        }
        ;
    var ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      , Fn = Du
      , ka = Ga
      , Ju = xu
      , jo = _n.exports
      , Vu = function(t, r) {
        if (typeof t == "undefined" || t === null)
            throw new TypeError("Cannot call method on " + t);
        if (typeof r != "string" || r !== "number" && r !== "string")
            throw new TypeError('hint must be "string" or "number"');
        var n = r === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"], o, i, a;
        for (a = 0; a < n.length; ++a)
            if (o = t[n[a]],
            ka(o) && (i = o.call(t),
            Fn(i)))
                return i;
        throw new TypeError("No default value")
    }
      , Zu = function(t, r) {
        var n = t[r];
        if (n !== null && typeof n != "undefined") {
            if (!ka(n))
                throw new TypeError(n + " returned for property " + r + " of object " + t + " is not a function");
            return n
        }
    }
      , Yu = function(t) {
        if (Fn(t))
            return t;
        var r = "default";
        arguments.length > 1 && (arguments[1] === String ? r = "string" : arguments[1] === Number && (r = "number"));
        var n;
        if (ku && (Symbol.toPrimitive ? n = Zu(t, Symbol.toPrimitive) : jo(t) && (n = Symbol.prototype.valueOf)),
        typeof n != "undefined") {
            var o = n.call(t, r);
            if (Fn(o))
                return o;
            throw new TypeError("unable to convert exotic object to primitive")
        }
        return r === "default" && (Ju(t) || jo(t)) && (r = "string"),
        Vu(t, r === "default" ? "number" : r)
    }
      , Ko = Yu
      , Qu = function(t) {
        return arguments.length > 1 ? Ko(t, arguments[1]) : Ko(t)
    }
      , Kr = ve
      , Xo = Kr("%TypeError%")
      , ei = Kr("%Number%")
      , zu = Kr("%RegExp%")
      , ti = Kr("%parseInt%")
      , Ja = tt
      , Xr = pu
      , qu = Uu
      , ri = Ja("String.prototype.slice")
      , Wu = Xr(/^0b[01]+$/i)
      , ju = Xr(/^0o[0-7]+$/i)
      , Ku = Xr(/^[-+]0x[0-9a-f]+$/i)
      , Xu = ["\x85", "\u200B", "\uFFFE"].join("")
      , eE = new zu("[" + Xu + "]","g")
      , tE = Xr(eE)
      , ni = [`
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003`, "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028", "\u2029\uFEFF"].join("")
      , rE = new RegExp("(^[" + ni + "]+)|([" + ni + "]+$)","g")
      , nE = Ja("String.prototype.replace")
      , oE = function(e) {
        return nE(e, rE, "")
    }
      , iE = Qu
      , aE = function e(t) {
        var r = qu(t) ? t : iE(t, ei);
        if (typeof r == "symbol")
            throw new Xo("Cannot convert a Symbol value to a number");
        if (typeof r == "bigint")
            throw new Xo("Conversion from 'BigInt' to 'number' is not allowed.");
        if (typeof r == "string") {
            if (Wu(r))
                return e(ti(ri(r, 2), 2));
            if (ju(r))
                return e(ti(ri(r, 2), 8));
            if (tE(r) || Ku(r))
                return NaN;
            var n = oE(r);
            if (n !== r)
                return e(n)
        }
        return ei(r)
    }
      , sE = Number.isNaN || function(t) {
        return t !== t
    }
      , AE = Number.isNaN || function(e) {
        return e !== e
    }
      , lE = Number.isFinite || function(e) {
        return typeof e == "number" && !AE(e) && e !== 1 / 0 && e !== -1 / 0
    }
      , cE = function(t) {
        return t >= 0 ? 1 : -1
    }
      , uE = Su
      , EE = Ru
      , dE = aE
      , OE = sE
      , SE = lE
      , fE = cE
      , RE = function(t) {
        var r = dE(t);
        if (OE(r) || r === 0)
            return 0;
        if (!SE(r))
            return r;
        var n = EE(uE(r));
        return n === 0 ? 0 : fE(r) * n
    }
      , oi = Eu
      , IE = RE
      , hE = function(t) {
        var r = IE(t);
        return r <= 0 ? 0 : r > oi ? oi : r
    }
      , mE = ve
      , vE = mE("%TypeError%")
      , gE = Ba
      , CE = hE
      , NE = ao
      , yE = function(t) {
        if (NE(t) !== "Object")
            throw new vE("Assertion failed: `obj` must be an Object");
        return CE(gE(t, "length"))
    }
      , LE = ve
      , TE = LE("%Object%")
      , pE = cr
      , UE = function(t) {
        return pE(t),
        TE(t)
    }
      , Va = ve
      , DE = Va("%String%")
      , bE = Va("%TypeError%")
      , Za = function(t) {
        if (typeof t == "symbol")
            throw new bE("Cannot convert a Symbol value to a string");
        return DE(t)
    }
      , PE = String.prototype.valueOf
      , ME = function(t) {
        try {
            return PE.call(t),
            !0
        } catch (r) {
            return !1
        }
    }
      , wE = Object.prototype.toString
      , BE = "[object String]"
      , xE = so()
      , GE = function(t) {
        return typeof t == "string" ? !0 : typeof t != "object" ? !1 : xE ? ME(t) : wE.call(t) === BE
    }
      , _E = ve
      , FE = tt
      , $E = _E("%TypeError%")
      , HE = lc
      , kE = Ba
      , JE = Kc
      , VE = lu
      , ZE = yE
      , YE = UE
      , QE = Za
      , zE = GE
      , qE = FE("String.prototype.split")
      , ii = Object("a")
      , WE = ii[0] !== "a" || !(0 in ii)
      , Ya = function(t) {
        var r = YE(this)
          , n = WE && zE(this) ? qE(this, "") : r
          , o = ZE(n);
        if (!VE(t))
            throw new $E("Array.prototype.forEach callback must be a function");
        var i;
        arguments.length > 1 && (i = arguments[1]);
        for (var a = 0; a < o; ) {
            var s = QE(a)
              , u = JE(n, s);
            if (u) {
                var l = kE(n, s);
                HE(t, i, [l, a, n])
            }
            a += 1
        }
    }
      , jE = function(t) {
        var r = !0
          , n = !0
          , o = !1;
        if (typeof t == "function") {
            try {
                t.call("f", function(i, a, s) {
                    typeof s != "object" && (r = !1)
                }),
                t.call([null], function() {
                    "use strict";
                    n = typeof this == "string"
                }, "x")
            } catch (i) {
                o = !0
            }
            return !o && r && n
        }
        return !1
    }
      , KE = jE
      , XE = Ya
      , Qa = function() {
        var t = Array.prototype.forEach;
        return KE(t) ? t : XE
    }
      , ed = kt
      , td = Qa
      , rd = function() {
        var t = td();
        return ed(Array.prototype, {
            forEach: t
        }, {
            forEach: function() {
                return Array.prototype.forEach !== t
            }
        }),
        t
    }
      , nd = kt
      , od = lr.exports
      , id = tt
      , ad = cr
      , sd = Ya
      , za = Qa
      , Ad = za()
      , ld = rd
      , cd = id("Array.prototype.slice")
      , ud = od.apply(Ad)
      , qa = function(t, r) {
        return ad(t),
        ud(t, cd(arguments, 1))
    };
    nd(qa, {
        getPolyfill: za,
        implementation: sd,
        shim: ld
    });
    var Ed = qa
      , dd = cr
      , Wa = tt
      , Od = Wa("Object.prototype.propertyIsEnumerable")
      , Sd = Wa("Array.prototype.push")
      , ja = function(t) {
        var r = dd(t)
          , n = [];
        for (var o in r)
            Od(r, o) && Sd(n, [o, r[o]]);
        return n
    }
      , fd = ja
      , Ka = function() {
        return typeof Object.entries == "function" ? Object.entries : fd
    }
      , Rd = Ka
      , Id = kt
      , hd = function() {
        var t = Rd();
        return Id(Object, {
            entries: t
        }, {
            entries: function() {
                return Object.entries !== t
            }
        }),
        t
    }
      , md = kt
      , vd = lr.exports
      , gd = ja
      , Xa = Ka
      , Cd = hd
      , es = vd(Xa(), Object);
    md(es, {
        getPolyfill: Xa,
        implementation: gd,
        shim: Cd
    });
    var Nd = es
      , yd = cr
      , Ld = Za
      , Td = tt
      , ai = Td("String.prototype.replace")
      , ts = /^\s$/.test("\u180E")
      , pd = ts ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
      , Ud = ts ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
      , rs = function() {
        var t = Ld(yd(this));
        return ai(ai(t, pd, ""), Ud, "")
    }
      , Dd = rs
      , si = "\u200B"
      , vt = "\u180E"
      , ns = function() {
        return String.prototype.trim && si.trim() === si && vt.trim() === vt && ("_" + vt).trim() === "_" + vt && (vt + "_").trim() === vt + "_" ? String.prototype.trim : Dd
    }
      , bd = kt
      , Pd = ns
      , Md = function() {
        var t = Pd();
        return bd(String.prototype, {
            trim: t
        }, {
            trim: function() {
                return String.prototype.trim !== t
            }
        }),
        t
    }
      , wd = lr.exports
      , Bd = kt
      , xd = cr
      , Gd = rs
      , os = ns
      , _d = Md
      , Fd = wd(os())
      , is = function(t) {
        return xd(t),
        Fd(t)
    };
    Bd(is, {
        getPolyfill: os,
        implementation: Gd,
        shim: _d
    });
    var $d = is
      , Yr = Ed
      , Ao = Nd
      , as = ha
      , Hd = $d
      , kd = function(t) {}
      , Jd = String.prototype.replace
      , ss = String.prototype.split
      , br = "||||"
      , Sn = function(e) {
        var t = e % 100
          , r = t % 10;
        return t !== 11 && r === 1 ? 0 : 2 <= r && r <= 4 && !(t >= 12 && t <= 14) ? 1 : 2
    }
      , As = {
        pluralTypes: {
            arabic: function(e) {
                if (e < 3)
                    return e;
                var t = e % 100;
                return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5
            },
            bosnian_serbian: Sn,
            chinese: function() {
                return 0
            },
            croatian: Sn,
            french: function(e) {
                return e >= 2 ? 1 : 0
            },
            german: function(e) {
                return e !== 1 ? 1 : 0
            },
            russian: Sn,
            lithuanian: function(e) {
                return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19) ? 1 : 2
            },
            czech: function(e) {
                return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
            },
            polish: function(e) {
                if (e === 1)
                    return 0;
                var t = e % 10;
                return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            },
            icelandic: function(e) {
                return e % 10 !== 1 || e % 100 === 11 ? 1 : 0
            },
            slovenian: function(e) {
                var t = e % 100;
                return t === 1 ? 0 : t === 2 ? 1 : t === 3 || t === 4 ? 2 : 3
            }
        },
        pluralTypeToLanguages: {
            arabic: ["ar"],
            bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
            chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
            croatian: ["hr", "hr-HR"],
            german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
            french: ["fr", "tl", "pt-br"],
            russian: ["ru", "ru-RU"],
            lithuanian: ["lt"],
            czech: ["cs", "cs-CZ", "sk"],
            polish: ["pl"],
            icelandic: ["is"],
            slovenian: ["sl-SL"]
        }
    };
    function Vd(e) {
        var t = {};
        return Yr(Ao(e), function(r) {
            var n = r[0]
              , o = r[1];
            Yr(o, function(i) {
                t[i] = n
            })
        }),
        t
    }
    function Zd(e, t) {
        var r = Vd(e.pluralTypeToLanguages);
        return r[t] || r[ss.call(t, /-/, 1)[0]] || r.en
    }
    function Yd(e, t, r) {
        return e.pluralTypes[t](r)
    }
    function Qd() {
        var e = {};
        return function(t, r) {
            var n = e[r];
            return n && !t.pluralTypes[n] && (n = null,
            e[r] = n),
            n || (n = Zd(t, r),
            n && (e[r] = n)),
            n
        }
    }
    function Ai(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    function zd(e) {
        var t = e && e.prefix || "%{"
          , r = e && e.suffix || "}";
        if (t === br || r === br)
            throw new RangeError('"' + br + '" token is reserved for pluralization');
        return new RegExp(Ai(t) + "(.*?)" + Ai(r),"g")
    }
    var qd = Qd()
      , Wd = /%\{(.*?)\}/g;
    function lo(e, t, r, n, o) {
        if (typeof e != "string")
            throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        if (t == null)
            return e;
        var i = e
          , a = n || Wd
          , s = typeof t == "number" ? {
            smart_count: t
        } : t;
        if (s.smart_count != null && e) {
            var u = o || As
              , l = ss.call(e, br)
              , A = r || "en"
              , d = qd(u, A)
              , c = Yd(u, d, s.smart_count);
            i = Hd(l[c] || l[0])
        }
        return i = Jd.call(i, a, function(E, R) {
            return !as(s, R) || s[R] == null ? E : s[R]
        }),
        i
    }
    function rt(e) {
        var t = e || {};
        this.phrases = {},
        this.extend(t.phrases || {}),
        this.currentLocale = t.locale || "en";
        var r = t.allowMissing ? lo : null;
        this.onMissingKey = typeof t.onMissingKey == "function" ? t.onMissingKey : r,
        this.warn = t.warn || kd,
        this.tokenRegex = zd(t.interpolation),
        this.pluralRules = t.pluralRules || As
    }
    rt.prototype.locale = function(e) {
        return e && (this.currentLocale = e),
        this.currentLocale
    }
    ;
    rt.prototype.extend = function(e, t) {
        Yr(Ao(e || {}), function(r) {
            var n = r[0]
              , o = r[1]
              , i = t ? t + "." + n : n;
            typeof o == "object" ? this.extend(o, i) : this.phrases[i] = o
        }, this)
    }
    ;
    rt.prototype.unset = function(e, t) {
        typeof e == "string" ? delete this.phrases[e] : Yr(Ao(e || {}), function(r) {
            var n = r[0]
              , o = r[1]
              , i = t ? t + "." + n : n;
            typeof o == "object" ? this.unset(o, i) : delete this.phrases[i]
        }, this)
    }
    ;
    rt.prototype.clear = function() {
        this.phrases = {}
    }
    ;
    rt.prototype.replace = function(e) {
        this.clear(),
        this.extend(e)
    }
    ;
    rt.prototype.t = function(e, t) {
        var r, n, o = t == null ? {} : t;
        if (typeof this.phrases[e] == "string")
            r = this.phrases[e];
        else if (typeof o._ == "string")
            r = o._;
        else if (this.onMissingKey) {
            var i = this.onMissingKey;
            n = i(e, o, this.currentLocale, this.tokenRegex, this.pluralRules)
        } else
            this.warn('Missing translation for key: "' + e + '"'),
            n = e;
        return typeof r == "string" && (n = lo(r, o, this.currentLocale, this.tokenRegex, this.pluralRules)),
        n
    }
    ;
    rt.prototype.has = function(e) {
        return as(this.phrases, e)
    }
    ;
    rt.transformPhrase = function(t, r, n) {
        return lo(t, r, n)
    }
    ;
    var jd = rt;
    const Kd = {
        appName: "Quordle Espa\xF1ol",
        keywords: "quordle, juegos, rompecabezas, palabra, palabras, letras, jugar, en l\xEDnea, adivinar, rompecabezas, dordle",
        description: "\xA1Pon tus habilidades a prueba y resuelve cuatro palabras a la vez! Tienes 9 intentos para resolver las cuatro palabras. Un nuevo quordle disponible cada d\xEDa.",
        webAddress: "https://martinell.github.io/quordle",
        noJs: "Necesitas habilitar JavaScript para ejecutar esta aplicaci\xF3n.",
        error404: "404",
        oops: "\xA1UPS!",
        pageNotFound: "P\xE1gina no encontrada",
        notFoundText: "La p\xE1gina que est\xE1s buscando no existe.",
        backToDaily: "Volver a Quordle Diario",
        close: "Cerrar",
        dictionaryUrl: "https://dle.rae.es/%{word}"
    }
      , Xd = {
        aria: {
            openMoreOptions: "Abrir m\xE1s opciones desplegables",
            openPage: "Abrir P\xE1gina %{page}"
        },
        title: "Quordle",
        daily: "Diario",
        practice: "Pr\xE1ctica",
        settings: "Ajustes",
        dailyStats: "Estad\xEDsticas Diarias",
        practiceStats: "Estad\xEDsticas de Pr\xE1ctica",
        help: "Ayuda",
        moreOptions: "M\xE1s Opciones",
        achievements: "Logros"
    }
      , eO = {
        keyboardHeight: "Altura del Teclado (%{height})",
        gameSize: "Tama\xF1o del Juego",
        gameFit: "Ajustar a Pantalla",
        gameSquare: "Casillas Siempre Cuadradas",
        currentSeed: "Semilla de Juego de Pr\xE1ctica Actual",
        gameSeedDescription: "El campo de entrada a continuaci\xF3n le permite establecer una semilla personalizada para un juego de pr\xE1ctica. Esto es \xFAtil para compartir la misma semilla entre varias personas (para que todos puedan jugar con las mismas respuestas).",
        gameSeedInputLabel: "Nueva Semilla de Juego Pr\xE1ctica",
        gameSeedInputPlaceholder: "\xA1Introduce aqu\xED la semilla del juego!",
        startNewPractice: "Comenzar Nuevo Juego de Pr\xE1cticas",
        startNewPracticeWarning: "Advertencia: \xA1Iniciar una nueva partida contar\xE1 como una p\xE9rdida!",
        copySeedToClipboard: "Copiar Semilla de Juego al Portapapeles",
        copiedSeedToClipboardAlert: '\xA1Copiada la semilla del juego "%{seed}" al portapapeles!',
        resetPractice: "Restablecer la Pr\xE1ctica Actual",
        resetWarning: "Advertencia: \xA1Restablecer contar\xE1 como una partida p\xE9rdida!",
        darkMode: "Modo Oscuro",
        colorblindMode: "Modo Dalt\xF3nico",
        vibration: "Vibraci\xF3n",
        switchKeys: "Cambiar Teclas (%{example})",
        switchKeysInfo: "Alternar para cambiar las teclas de entrada y retroceder en el teclado. Actualmente establecido como %{left} en la izquierda y %{right} a la derecha.",
        achievementNotifs: "Notificaciones de Logros"
    }
      , tO = {
        aria: {
            played: "N\xFAmero total de %{mode} juegos jugados es %{num}",
            winPercent: "%{mode} El porcentaje de ganancia es %{num}%",
            numGames: "%{smart_count} juego |||| %{smart_count} juegos",
            numGuesses: "%{smart_count} intento |||| %{smart_count} intentos",
            numWords: "%{smart_count} palabra |||| %{smart_count} palabras",
            currentStreak: "%{mode} victoria actual racha es %{numGames}",
            maxStreak: "%{mode} la racha de victorias m\xE1xima es %{numGames}",
            winChartBar: "%{numGames} completado en %{numGuesses}",
            winRateRatio: "Relaci\xF3n de tasa de ganancia. Haga clic para ver la distribuci\xF3n de p\xE9rdidas.",
            lossChartBar: "%{numGames} perdido con %{numWords} perdido"
        },
        dailyStatistics: "Estad\xEDsticas Diarias",
        practiceStatistics: "Estad\xEDsticas de Pr\xE1ctica",
        played: "Jug\xF3",
        winPercent: "% de Victorias",
        currentStreak: `Racha
Actual`,
        maxStreak: `Racha
M\xE1xima`,
        winDistribution: "Distribuci\xF3n de Ganancias",
        winDistExplain: "(# total de intentos para completar las 4 palabras)",
        win: "Ganadas",
        loss: "Perdidas",
        lossDistribution: "Distribuci\xF3n de P\xE9rdidas",
        lossDistExplain: "(# palabras perdidas)"
    }
      , rO = {
        aria: {
            tutorialGuess: "Adivinanza Tutorial %{guess}.",
            tutorialGuessBoard: "Adivinanza Tutorial %{guess} en el tablero de juego %{num}."
        },
        tutorial: "Tutorial",
        title: "Adivina las cuatro palabras de Quordle en 9 intentos.",
        p1: "Cada intento debe ser una palabra v\xE1lida de 5 letras. Presiona el bot\xF3n ENTER para enviar. Despu\xE9s de cada intento, el color de las casillas cambiar\xE1 para mostrar lo cerca que est\xE1 tu intento de la palabra buscada.",
        examples: "Ejemplos",
        exampleWord1: "PALCO",
        exampleWord2: "RU\xD1IR",
        exampleWord3: "VISTA",
        exampleWord4: "NOCHE",
        example1: "La letra P est\xE1 en la palabra y en el lugar correcto.",
        example2: "La letra U est\xE1 en la palabra, pero en el lugar equivocado.",
        example3: "Las letras V, I, S, T, A no est\xE1n en la palabra en ning\xFAn lugar. Cuando escribes un intento en Quordle, usar\xE1s esa palabra para las cuatro palabras que est\xE1s resolviendo. Las cuatro palabras son diferentes.",
        example4Title: "Ejemplo en el que pruebas con NOCHE:",
        example4b1: "La palabra superior izquierda no tiene ninguna de las letras.",
        example4b2: "La palabra superior derecha tiene la C en el lugar equivocado y la E en el lugar correcto.",
        example4b3: "La palabra inferior izquierda tiene la H en el lugar equivocado.",
        example4b4: "La palabra inferior derecha tiene la O en el lugar correcto y la E en el lugar equivocado.",
        final1: "Tienes 9 intentos para obtener las 4 palabras correctas. \xA1Buena suerte!",
        final2: "\xA1Un nuevo Quordle estar\xE1 disponible cada d\xEDa!",
        author: "Creado por Freddie Meyer. Traducciones de Diana @xoloitzcuintle y Juan @jrregaldie",
        twitter: "Twitter",
        github: "Github",
        facebook: "Facebook",
        reddit: "Reddit",
        instagram: "Instagram",
        discord: "Discord",
        twitch: "Twitch"
    }
      , nO = {
        achievementAndXOthers: "%{achievement} y %{smart_count} logro |||| %{achievement} y %{smart_count} logros",
        win_practice: "La Pr\xE1ctica hace la Perfecci\xF3n (%{num})",
        win_practice_desc: "Ganar %{smart_count} partida de Pr\xE1ctica. |||| Ganar %{smart_count} partidas de Pr\xE1ctica.",
        win_daily: "Lento pero Seguro (%{num})",
        win_daily_desc: "Ganar %{smart_count} partida de Diario. |||| Ganar %{smart_count} partidas de Diario.",
        streak_practice: "Implacable (%{num})",
        streak_practice_desc: "Conseguir una racha m\xE1xima de %{num} en Pr\xE1ctica",
        streak_daily: "Irrompible (%{num})",
        streak_daily_desc: "Conseguir una racha m\xE1xima de %{num} en Diario.",
        win_in_9: "Niner",
        win_in_9_desc: "Ganar un juego en 9 turnos.",
        win_in_8: "Par",
        win_in_8_desc: "Ganar un juego en 8 turnos.",
        win_in_7: "Birdie",
        win_in_7_desc: "Ganar un juego en 7 turnos.",
        win_in_6: "Eagle",
        win_in_6_desc: "Ganar un juego en 6 turnos.",
        win_in_5: "Albatros",
        win_in_5_desc: "Ganar un juego en 5 turnos.",
        win_in_4: "Modo Dios",
        win_in_4_desc: "Ganar un juego en 4 turnos.",
        guess_word_2_same_letter: "Doble o Nada",
        guess_word_2_same_letter_desc: "Adivinar una palabra con 2 letras iguales.",
        guess_word_3_same_letter: "Guauuu",
        guess_word_3_same_letter_desc: "Adivinar una palabra con 3 letras iguales.",
        correct_turn_1: "Uno en un Mill\xF3n",
        correct_turn_1_desc: "Acertar una palabra en el turno 1.",
        share: "Correr la Voz",
        share_desc: "Compartir en redes el resultado de una Pr\xE1ctica o un Diario.",
        donate: "Compartir el Amor",
        donate_desc: "Hacer una Donaci\xF3n a Quordle.",
        lose_1_wrong: "Tan Cerca",
        lose_1_wrong_desc: "Perder un juego por solo 1 palabra fallada.",
        lose_2_wrong: "Domin\xE1ndolo",
        lose_2_wrong_desc: "Perder un juego fallando 2 palabras.",
        lose_3_wrong: "Debes mejorar",
        lose_3_wrong_desc: "Perder un juego fallando 3 palabras.",
        lose_4_wrong: "\xBFEn Serio que lo Intentas?",
        lose_4_wrong_desc: "Perder un juego fallando 4 palabras.",
        play_words: "Cuanto M\xE1s Mejor (%{num})",
        play_words_desc: "Usa %{smart_count} palabra en Pr\xE1ctica o Diario. |||| Usa %{smart_count} palabras en Pr\xE1ctica o Diario."
    }
      , oO = {
        aria: {
            blank: "Vac\xEDa",
            tileNever: "'%{letter}' (letra %{column}) nunca se adivina (la placa est\xE1 completa)",
            tileFuture: "'%{letter}' (letra %{column}) es una suposici\xF3n futura",
            tileInvalid: "'%{letter}' (letra %{column}) es una intento no v\xE1lida",
            tilePresent: "'%{letter}' (letra %{column}) se est\xE1 adivinando",
            tileDiff: "'%{letter}' (letra %{column}) est\xE1 en un lugar diferente",
            tileNone: "'%{letter}' (letra %{column}) es incorrecta",
            tileCorrect: "'%{letter}' (letra %{column}) es correcta",
            keyboard: "Teclado",
            keyboardRow: "Fila del teclado %{row}",
            key: "Tecla '%{letter}'. %{info}.",
            keyInfoDelimiter: ". ",
            keyNotGuessed: "No adivinado",
            keyIncorrectAll: "Incorrecto en todos los tableros de juego",
            keyDiff: "Lugar diferente en el tablero de juego %{board}",
            keyNone: "Incorrecto en el tablero de juego %{board}",
            keyCorrect: "Correcto en el tablero de juego %{board}",
            gameCompleteBanner: "Cartel de juego completo",
            shareBanner: "Cartel de resultados del juego y compartir",
            shareAnswer: "La respuesta es %{word} para el tablero de juego %{board}. %{solved}",
            shareAnswerSolved: "Resuelto en %{smart_count} intento. |||| Resuelto en %{smart_count} intentos.",
            shareAnswerUnsolved: "No resuelto.",
            shareAnswerLinkDesc: "Enlace a la definici\xF3n de la palabra"
        },
        dailyQuordleShare: "Quordle Diario %{num}",
        practiceQuordleShare: "Quordle de Pr\xE1ctica",
        dailyQuordleFoolsShare: "\xA1Quordle Diario de los Inocentes %{num}!",
        practiceQuordleFoolsShare: "\xA1Quordle de Pr\xE1ctica de los Inocentes!",
        hoursDuration: "en %{smart_count} hora |||| en %{smart_count} horas",
        minutesDuration: "en %{smart_count} Minuto |||| en %{smart_count} minutos",
        secondsDuration: "en %{smart_count} segundo |||| en %{smart_count} segundos",
        newPractice: "Nuevo Juego de Pr\xE1ctica",
        nextDaily: "Siguiente Diario %{duration}",
        dailyResetTimer: "Diario se reiniciar\xE1 en %{duration}",
        complete: "Quordle Completo!",
        soClose: "\xA1Tan cerca!",
        betterLuck: "\xA1Mejor suerte la pr\xF3xima vez!",
        copiedResults: "\xA1Resultados copiados al portapapeles!",
        errorCopy: "\xA1Error al copiar resultados al Portapapeles!",
        share: "Compartir",
        shareImage: "Compartir Imagen",
        saveImage: "Guardar Imagen",
        copyClipboard: "Copiar al Portapapeles",
        enterKey: "Introducir Clave",
        backspaceKey: "Tecla de Retroceso",
        alphabet: "ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ",
        keyboard: `Q W E R T Y U I O P
A S D F G H J K L \xD1
bs Z X C V B N M enter`,
        keyboardReversed: `Q W E R T Y U I O P
A S D F G H J K L \xD1
enter Z X C V B N M bs`
    };
    var iO = {
        app: Kd,
        header: Xd,
        settings: eO,
        stats: tO,
        tutorial: rO,
        achievements: nO,
        game: oO
    };
    const aO = It(Me({}, iO), {
        blacklist: "",
        wordBank: "ABAJO ABECE ABEJA ABONO ABRIR ABUSO ACASO ACERA ACERO ACETA ACETO ACHIS ACIDA ACIDO ACIMO ACOSO ACTOR ADIOS ADOBE ADOBO AEREA AEREO AFAGA AFAGO AFEAR AFINA AFONA AFONO AFORA AFORE AFORO AGAPE AGATA AGAVE AGNUS AGRIA AGRIO AGUDA AGUDO AGUJA AGUZA AGUZO AHOGA AHOGO AHORA AHUMA AHUME AHUMO AIRAR AIRON AJADA AJADO AJENA AJENO AJUAR ALADA ALADO ALAMO ALBAR ALBOR ALBUR ALDEA ALEAR ALELE ALELO ALERO ALETA ALEVE ALFAR ALFIL ALGAR ALGUN ALIAR ALIAS ALMUD ALOCA ALOCO ALPES ALTAR ALZAR AMADA AMADO AMBAR AMBAS AMBOS AMEBA AMENA AMENO AMIBA AMIGA AMIGO ANCHA ANCHO ANCLA ANDAR ANDEN ANDES ANEXO ANGEL ANGUS ANITO ANSIA ANTES ANTRO ANUAL A\xD1EJO A\xD1ERA A\xD1ERO A\xD1OJO AORTA APEAR APEGO APERO APNEA APOCA APOCO APODO APOYO APTAR APURO AQUEL ARADA ARADO ARA\xD1A ARA\xD1O ARCEN ARCON ARDER ARDOR ARDUA ARDUO ARENA AREPA ARETE ARGON ARGOS ARGOT ARIDA ARIDO ARIES ARMAR ARNES AROMA ARPAR ARPIA ARPON ARRAS ARROZ ASADO ASCUA ASEAR ASEDA ASEDE ASEDO ASILO ASINA ASTRO ATAUD ATLAS ATOLE ATRAS ATRIL ATRIO ATROZ AUDAZ AUDIO AUGUR AUNAR AUREA AUREO AUTOR AVARA AVARO AVENA AVIAR AVION AVISO AXIAL AXILA AYATE AYUDA AZARA AZARE AZARO AZOTE BABEL BABLE BACHE BADEN BAHIA BAILE BAJAR BAJEL BALAR BALDE BALSA BALTA BALTO BAMBA BANAL BANCA BANCO BANDA BANDO BANJO BA\xD1AR BARBA BARCA BARCO BARDA BARDO BARIO BARRA BARRO BASAL BASAR BASTA BASTO BATEA BATEO BATIR BAZAR BEATA BEATO BEBER BECAR BEDEL BEIGE BELFO BELGA BELLA BELLO BEODO BERRA BERRO BERZA BESAR BETUN BICHA BICHO BIFAZ BILIS BINGO BIRLA BIRLE BISEL BIZCA BIZCO BLEDA BLEDO BLUES BLUSA BOATO BOCHA BOCHE BOCIO BOFAR BOINA BOLEA BOLLA BOLLO BOLSA BOLSO BOMBA BOMBE BOMBO BONGO BORDA BORDE BORDO BOREO BORLA BOTAR BOTIN BOXEO BOZAL BRAGA BRAMA BRAME BRAMO BRASA BRAVA BRAVO BRAZA BRAZO BREAR BREVE BREZO BRIDA BRISA BRIZA BROCA BROMA BROMO BROTE BROZA BRUJA BRUMA BRUMO BRUNA BRUNO BRUTA BRUTO BUCAL BUCEO BUCLE BUENA BUENO BUFAR BUFET BUFON BUGLE BULAR BULBO BULLA BULLE BULLO BULON BULTO BUQUE BURDA BURDO BURGO BURLA BURRA BURRO BUSTO BUZAR CABAL CABAS CABER CABLE CABRA CABRO CACAO CACHA CACHO CACTO CAFRE CAGAR CAGON CAGUE CAIDA CAIDO CAJON CALAR CALCO CALDA CALDO CALIZ CALLE CALLO CALMA CALMO CALOR CALVA CALVO CALZA CALZO CAMPA CAMPO CANAL CANGA CANJE CANOA CANON CANTO CA\xD1AR CAOBA CAPAR CAPAZ CAPON CAQUI CARAY CARBA CARDO CAREO CAREY CARGA CARGO CARIZ CARNE CARPA CARRA CARRO CARTA CASAL CASAR CASCA CASCO CASPA CASTA CASTO CATAR CATRE CAUBA CAUCE CAUDA CAUSA CAUSE CAUTA CAUTO CAUZA CAVAR CAZAR CEBAR CEBON CEBRA CEBRO CEDER CEDRO CEGAR CEIBA CEJAR CELAR CELDA CELTA CENAR CENCO CENIT CENSO CE\xD1IR CERCA CERCO CERDA CERDO CERRA CERRO CESAR CESTA CESTO CETRO CHACO CHAFA CHAFE CHALE CHAMA CHANA CHANO CHAPA CHAPE CHAPO CHATA CHATO CHAVO CHAZA CHAZO CHECA CHECO CHELE CHELI CHELO CHEPA CHEPO CHICA CHICO CHIDA CHIDO CHILE CHINA CHINO CHIPA CHITA CHITE CHITO CHIVA CHIVO CHOLA CHOLO CHOPA CHOPO CHORA CHORO CHOTA CHOTO CHOZA CHOZO CHUCA CHUFA CHULA CHULE CHULO CHUPE CHUTA CHUTE CHUTO CHUZA CHUZO CIBAL CICLO CIDRA CIEGA CIEGO CIELO CIENO CIFRA CIMAR CINCA CINCO CINTA CINTO CIRCA CIRCE CIRCO CIRIO CIRRO CISCA CISCO CISMA CISNE CITAR CIVIL CLAMO CLARA CLARO CLASE CLAVA CLAVE CLAVO CLERO CLIMA CLORO CLUBE COATI COBRA COBRE COBRO COCER COCHE COFIA COFRE COGER COITO COJIN COLAR COLMA COLME COLMO COLON COLOR COMAL COMBO COMER COMIC COMUN CONDE CONGA CONGO CO\xD1AC COPAL COPAR COPIA COPLA CORAL CORAN COREA CORRO CORSA CORSE CORSO CORTE CORTO CORVA CORVO COSER COSTA COSTE COSTO COXIS CRASA CRASO CREAR CREDO CREER CREMA CRESA CRESO CRETA CRIAR CRIBA CROAR CROMA CROMO CRONO CRUCE CRUDA CRUDO CRUEL CRUZA CUAJA CUAJO CUASI CUATA CUATE CUBIL CUCHA CUCHE CUCHO CUCUY CUERA CUERO CUEVA CUITA CULAR CULPA CULTA CULTO CUNAR CU\xD1AR CUOTA CUPON CURAR CURDA CURIA CURIE CURIO CURRO CURRY CURSA CURSI CURSO CURVA CURVO CUTER CUTIR CUTIS CUTRE DADOR DALIA DANDI DANGO DANZA DA\xD1AR DARDO DARES DATAR DATIL DEBER DEBIL DEBUT DECIR DECOR DEDAL DEJAR DELTA DENSA DENSO DENTE DESDE DESEO DEUDA DEUDO DIANA DICHA DICHO DIEGO DIETA DIGAN DIGNA DIGNO DINAR DIODO DIOSA DIQUE DISCO DIVAN DOBLA DOBLE DOCIL DOCTA DOCTO DOGMA DOLAR DOLER DOLOR DOMAR DONAR DONDE DOPAR DORAR DORSO DOSEL DOSIS DOTAR DRAGA DRAGO DRAMA DROGA DROGO DUCHA DUCHO DUCTO DUDAR DUELO DUE\xD1A DUE\xD1O DUETO DULCE DUPLA DUPLO DURAR EBRIA EBRIO ECHAR EDEMA EDRAR EDUCA EFEBO EJIDO EJOTE ELOTE ENANA ENANO ENEMA ENERO ENOJO ENTRA ENTRE ENVES ENVIO EOLIO EPOXI EQUIS ERADO ERIZA ERIZO ERMAR ERRAR ERROR ESNOB ESPIA ESTAR ESTRO ETANO ETAPA ETNIA EXTRA FACHA FACHO FACIL FACTO FAENA FAJAR FALAZ FALCA FALCE FALDA FALLA FALLO FALSA FALSO FALTA FALUA FANAL FANGO FARDO FAROL FARON FARRA FARRO FARSA FASTO FATAL FATUA FATUO FAUNA FAUNO FAVOR FECAL FECHA FELIZ FELON FELPA FELPO FEMUR FENIX FERAL FERAZ FERIA FEROZ FERRA FERRE FERRO FERRY FETAL FEUDO FIADA FIADO FIBRA FICHA FICUS FIDEO FIERA FIERO FIGON FIJAR FILAR FILME FILON FINAL FINAR FINCA FINTA FIRMA FIRME FISCO FLACA FLACO FLAMA FLASH FLATO FLECO FLEMA FLETE FLEXO FLOJA FLOJO FLORA FLOTA FLUIR FLUJO FLUOR FOBIA FOCAL FOLIO FONDA FONDO FORJA FORMA FORRO FORTE FORUM FOSIL FRASE FREIR FRENO FRESA FRISO FROTE FRUTA FRUTO FUCHI FUEGO FUERA FUERO FUFAR FUGAR FUGAZ FUGIR FUMAR FUNDA FURIA FUROR FUSCA FUSCO FUSIL FUSTA FUSTE FUSTO FUTIL GABAN GACHA GACHO GAFAR GAFAS GAITA GAJES GALAN GALCE GALES GALGA GALGO GALIO GALLO GAMMA GAMON GANAR GANGA GANSA GANSO GARBO GARRA GARZA GARZO GASTO GAVIA GEMIR GENIO GENTE GEODA GESTA GESTO GIRAR GLOBO GLOSA GLOSE GNOMO GOLFA GOLFO GOLPE GOMAR GORDA GORDO GORRA GORRO GOTEO GOZAR GRADA GRADO GRAJA GRAJO GRAMA GRAMO GRANA GRANO GRAPA GRASA GRASO GRATA GRATO GRAVA GRAVE GRECA GRECO GREDA GRELO GRE\xD1A GRIAL GRIDA GRIFA GRIFO GRIMA GRIPE GRITA GRITO GROAR GROJO GROMO GROSA GROSO GRUIR GRUMO GRUPA GRUPO GRUTA GUABA GUABO GUACA GUACO GUADO GUAJA GUAJE GUANO GUAPA GUAPO GUARO GUASA GUASO GUATA GUAYA GUAYO GUBIA GUETO GUIAR GUI\xD1O GUION GUIRI GUISO GUITA GULAG GULAR GUSTA GUSTO HABER HABIL HABLA HACER HACHA HACHE HACHO HACIA HADES HAFIZ HALAR HAMPA HAMPO HAREM HARPA HARTO HASTA HEBRA HECHA HECHO HEDER HEDOR HELAR HELIO HELOR HENAR HERIR HEROE HERPE HIATO HIDRA HIELO HILAR HIMEN HIMNO HINDI HINDU HIPAR HIPER HIPPY HITAR HOBBY HOGAR HOLLO HONDO HONGO HONOR HONRA HORCA HORDA HORMA HORNA HORNO HOSCA HOSCO HOSPA HOSTE HOTEL HOZAR HUACA HUACO HUAJE HUCHA HUECA HUECO HUEGO HUERA HUERO HUESO HUEVA HUEVO HULAR HUMAR HUMOR HUMUS HURGA HURRA HURTO HUSAR HUSMA HUSMO IBERA IBERO ICONO IDEAL IDEAR IGNEA IGNEO IGUAL IJADA ILESA ILESO ILOTA ILUSA ILUSO IMPAR IMPIO INANE INDEX INDIA INDIO INGLE INTER IRANI ISLAM ISTMO IZADA IZADO JABON JADEO JAIBA JAIMA JAJAY JALAR JALEA JALEO JAMAR JAMAS JAMBA JAMBO JAMON JAQUE JARRA JARRO JAUJA JAULA JAYAN JERBO JERGA JETAR JIMAR JIRON JITAR JODER JORGE JOULE JOVEN JOYEL JOYON JUANA JUBON JUDAS JUDIA JUDIO JUEGO JUERA JUEZA JUGAR JULIA JULIO JUNCO JUNIO JUNTA JUNTO JURAR JUSTA JUSTO KAPPA KARMA KAYAK KEBAB KEFIR KENDO KILIM KOALA KOPEK KURDA KURDO LABIA LABIO LABOR LACAR LACIA LACIO LACON LACRA LACRE LADRA LAGAR LAICA LAICO LAMER LANAR LANCE LANZA LAPIZ LAPSO LARGA LARGO LARVA LASCA LASER LATEX LATIN LATIR LATON LAUDE LAVAR LAXAR LAZAR LECHA LECHE LECHO LEGAL LEGAR LEGUA LEJIA LEJOS LEMUR LENTA LENTE LENTO LE\xD1AR LEONA LEPRA LERDA LERDO LETAL LETRA LEVAR LEZNA LIBAR LIBRA LIBRE LIBRO LICEO LICOR LIDER LIDIA LIGAR LIJAR LILIO LIMAR LIMBO LIMON LINAR LINCE LINDA LINDE LINDO LINEA LINFA LINIO LIRIA LIRIO LISTA LISTO LITIO LITRO LLAGA LLAMA LLANA LLANO LLAVE LLENO LOADA LOADO LOBBY LOCAL LOGIA LOGRO LONJA LORZA LOSAR LUCHA LUCIR LUCRO LUEGO LUGAR LUMEN LUNAR LUNCH LUNES LUPUS LUXAR LYCRA MACHA MACHO MACRO MADRE MAFIA MAGIA MAGMA MAGNA MAGNO MAGRA MAGRO MAJAR MALAR MALLA MALLO MALTA MALVA MAMAR MAMBO MAMEY MAMON MAMUT MANAR MANCA MANCO MANDA MANDO MANGA MANGO MANIA MANSA MANSO MANTA MANTO MAORI MAQUE MAQUI MARCA MARCO MAREA MAREO MARRA MARRO MARTA MARTE MARZO MASAR MASTE MATAR MATIZ MATON MAULA MAYOR MAZAR MEADA MECER MECHA MEDIA MEDIO MEDIR MEJOR MELLA MEMEZ MENEO MENOR MENOS MENSA MENSO MENTA MENTE MERCA MERMA MESAR MESON METAL METER METRO MICRA MICRO MIEDO MIGAR MILLA MILPA MIMAR MINAR MIOMA MIOPE MIRAR MIRLO MIRON MIRRA MISIL MISMA MISMO MITAD MITIN MITRA MIXTA MIXTO MOCHA MOCHO MODAL MODEM MOFAR MOHIN MOJAR MOLAR MOLDE MOLER MOMIA MONJA MONJE MONTE MONTO MORAL MORAR MORBO MORFA MORFO MORIR MORRA MORRO MORSA MORSE MOSCA MOSCO MOTEL MOTIN MOTOR MOVER MOVIL MUCHA MUCHO MUDAR MUDEZ MUECA MUELA MUGAR MUGIR MUGRE MUJER MULAR MULTA MUNDO MU\xD1ON MURAL MUSCA MUSCO MUSEO MUSGO MUSLO MUTAR MUTIS MUTUA MUTUO NABAR NACAR NACER NACHA NACHO NADAL NADAR NADIE NADIR NAFTA NAHUA NAIPE NALGA NAPAR NARCO NARDO NARIZ NASAL NATAL NAUTA NAVAL NAVIO NECIA NECIO NEGAR NEGRA NEGRO NEUMA NEURA NEVAR NICHE NICHO NIDAL NIEGO NIETA NIETO NIEVE NIMBO NIMIA NIMIO NINFA NINFO NI\xD1EZ NIPON NITRO NIVEA NIVEL NOBEL NOBLE NOCHE NODAL NOGAL NONES NONIO NOPAL NORIA NORMA NORTE NOTAR NOVEL NOVIA NOVIO NUERA NUEVA NUEVE NUEVO NUNCA \xD1ANDU \xD1ANGA \xD1ANGO \xD1AQUE \xD1EQUE \xD1OCHA \xD1OCLO \xD1O\xD1EZ \xD1OQUI \xD1UBLO \xD1URDA \xD1URDO OASIS OBESA OBESO OBICE OBITO OBLEA OBOLO OBRAR OBVIA OBVIO OCAPI OCASO OCELO OCENA OCIAR OCTAL OCULO ODEON ODIAR OESTE OHMIO OJALA OJEAR OJERA OJETE OJIVA OJOSA OJOSO OLEAR OLIDA OLIDO OLIVA OLIVO OLLAR OMEGA OMEYA OMISA OMISO OPACA OPACO OPALO OPERA OPTAR ORATE ORDEN OREAR OREJA ORGIA ORINA ORLAR ORNAR ORUGA ORUJO ORZAR OSADA OSADO OSERA OSERO OSMIO OSOSA OSOSO OSTIA OSTRA OSTRO OSUDA OSUDO OSUNA OSUNO OTEAR OTERO OTO\xD1O OVADA OVADO OVALO OVEJA OVEJO OVERA OVERO OVINA OVINO OVULO OXIDO OZONO PACER PACHA PACHO PACTO PADEL PADRE PAGAR PAILA PAIRO PAJAR PALCO PALIO PALMA PALMO PALPO PALTA PAMPA PANAL PANDA PANEL PANTY PANZA PA\xD1AL PA\xD1OL PAPAL PAPAR PAPEL PARAR PARCA PARCO PARDA PARDO PARED PAREO PARGO PARIA PARIR PARRA PARRO PARSI PARTE PARTO PARVA PARVO PASAR PASEO PASMO PASTA PASTE PASTO PATAN PATIN PATIO PAUSA PAUTA PAVES PAVOR PEAJE PEANA PECAR PECHO PECIO PEDAL PEDIR PEGAR PEINE PELAR PELEA PELMA PENAL PENAR PENCA PENCO PE\xD1ON PEONA PEQUE PERAL PERCA PERLA PERNA PERNO PEROL PERRA PERRO PERSA PESAR PESCA PESTE PEZON PIANO PIARA PICAR PICHA PICHE PICHI PICOR PIEZA PIFIA PILAR PILLA PILLO PILON PINAR PINGA PINGO PINTA PINTO PINZA PI\xD1AL PI\xD1ON PIOJO PIPAR PIQUE PIRAL PIRAR PISAR PISCA PISCO PISTA PISTO PITAR PIXEL PIZCA PIZCO PIZZA PLACA PLAGA PLANA PLANO PLATA PLATO PLAYA PLAZA PLAZO PLEBE PLENA PLENO PLEXO PLICA PLOMO PLUMA POBRE POCHA POCHO PODAR PODER PODIO POEMA POETA POLAR POLCA POLEA POLEN POLEO POLIO POLIS POLLA POLLO POLVO POMAR POMEZ POMPA PONER PORNO PORRA PORRO PORTE POSAR POSTE POTRA POTRO POZAL POZOL PRADO PRESA PRESO PRIMA PRIMO PRION PRIOR PRISA PROEL PROFE PROLE PRONA PRONO PROSA PRUNA PRUNO PUBIS PUCHA PUCHO PUDIR PUDOR PUGIL PUGNA PUJAR PULGA PULIR PULLA PULPA PULPO PULSO PUNTA PUNTO PU\xD1AL PU\xD1AR PU\xD1IR PUPAR PURGA QUEDA QUEDO QUEJA QUEJO QUEMA QUENA QUEPI QUERA QUESO QUICO QUIEN QUIER QUILO QUIMO QUINA QUINO QUITA QUITE QUITO QUIZA RABAL RABEL RABIA RACHA RACOR RADAR RADIO RADON RAFEZ RAFIA RAGUA RAHEZ RAIDA RAIDO RAJAR RALEA RALLO RALLY RAMAL RAMPA RANGO RAPAR RAPAZ RAPEL RAPTO RASAR RASEL RASGO RASPA RASTA RATIO RATON RAUCA RAUCO RAUDA RAUDO RAYAR RAZAR RAZON REATA REBOL RECEL RECIA RECIO RECTA RECTO RECUA REDAR REDEL REDIL REGAR REGIA REGIO REGIR REGLA REHEN REINA REINO REJAL REJON RELAX RELOJ REMAR RENAL RENTA RE\xD1IR REOJO RESMA RESOL RESTA RESTO RETAL RETAR RETEN RETRO REUMA REVER REVES REZAR RIADA RIATA RIEGO RIFAR RIFLE RIGOR RIMAR RIMEL RIOJA RIPIO RISCO RITMO RIVAL RIZAR ROBAR ROBLE ROBOT ROCHA ROCHO ROCIN ROCIO RODAL RODAR RODEO RODIO ROGAR ROJEZ ROLAR ROLLO ROMAN ROMBO ROMEA ROMEO RONCA RONCO RONDA RONDO RONZA RONZO RO\xD1AR ROPON ROQUE RORAR ROSAL ROSCA ROSCO ROTAR ROTOR ROZAR RUANA RUANO RUBIA RUBIO RUBLO RUBOR RUBRA RUBRO RUCIA RUCIO RUECA RUEDA RUEDO RUEGO RUGBY RUGIR RUIDO RUINA RUMBA RUMBO RUMOR RUPIA RURAL RUSCO RUSEL RUSIA RUTEL SABER SABIA SABIO SABIR SABLE SABOR SACAR SACHO SACRA SACRE SACRO SAETA SAFIR SAGAZ SAJAR SAJON SALAR SALAZ SALCE SALDO SALIR SALMA SALMO SALON SALSA SALTO SALUD SALVA SALVE SALVO SAMBA SANAR SANTA SANTO SARAO SARGA SARGO SARNA SARRO SARTA SATAN SATEN SATIN SAUCE SAUCO SAUNA SAVIA SAYAL SAZON SECAR SECTA SEDAL SEDAR SEGAR SEGUN SELLO SELVA SEMEN SENDA SENIL SE\xD1AL SE\xD1OR SEPIA SEPTO SERIA SERIE SERIO SERON SERVO SESEO SESGO SETAL SEXAR SEXTA SEXTO SIBIL SIDRA SIEGA SIENA SIESO SIETE SIFON SIGLA SIGLO SIGMA SIGNO SILBA SILBO SILEX SILLA SILVA SIMIA SIMIL SIMIO SIRIA SIRIO SISAL SISAR SISEO SISMO SITAR SITIO SOBAR SOBRA SOBRE SOCIA SOCIO SODIO SOEZA SOLAR SOLAZ SOLEO SOLER SOLFA SOLLA SOLLO SONAR SONDA SONSA SONSO SO\xD1AR SOPAR SOPLO SOPOR SORDA SORDO SORGO SORNA SUAVE SUBIR SUCIA SUCIO SUCRE SUDAR SUDOR SUECA SUECO SUELA SUELO SUENO SUE\xD1O SUERO SUEVA SUEVO SUIZA SUIZO SUMAR SUMIR SURAL SURCO SUSTO SUTIL TABAL TABLA TACHA TACHO TACON TACTO TAHUR TAINA TAINO TAJAR TAJEA TALAR TALCO TALGO TALIO TALLA TALLE TALLO TALON TALUD TAMAL TAMIZ TANDA TANGA TANGO TANTA TANTO TANZA TAPAR TAPEO TAPIA TAPIE TAPIR TAPIZ TAPON TARDA TARDE TARDO TAREA TARJA TAROT TARRA TARRO TARSO TARTA TASAR TASCA TASCO TAURO TAXON TAZAR TAZON TEBEO TECHO TECLA TEDIO TEJAR TEJER TEJON TELAR TELON TEMER TEMOR TEMPO TENAZ TENER TENIA TENOR TENSA TENSO TENUE TE\xD1IR TERCA TERCO TERMA TERMO TERNA TERNO TERSA TERSO TESIS TESON TETAR TEXTO TIARA TIBIA TIBIO TIESA TIESO TIFON TIFUS TIGRA TIGRE TILDE TIMAR TIMBA TIMON TINTA TINTE TINTO TIPLE TIRAR TISIS TITAN TIZNE TIZON TOCAR TOLDO TOLMO TOLVA TOMAR TONAL TONAR TONEL TONER TONGO TONTA TONTO TOPAR TOQUE TORAX TORDO TOREO TORIL TORMO TORNO TORPE TORRE TORSO TORTA TORVA TORVO TOSCA TOSCO TOSER TOSTA TOTAL TOTEM TRABA TRACA TRAER TRAGO TRAJE TRAMA TRAMO TRAPO TRATA TRATO TRAZA TRAZO TRECE TRENA TRETA TRIAL TRIAR TRIBU TRIGO TRINO TRIPA TRIZA TROCA TROCO TROLA TROLE TRONO TROPA TROTE TROVA TROZO TRUCO TRUFA TUDEL TUMBA TUMBO TUMOR TUNAR TUNCA TUNCO TUNDA TUNEL TURBA TURBO TURCA TURCO TURNO TURRA TUTEO TUTIA TUTOR UCASE UFANA UFANO UJIER ULANO ULEMA ULTRA UMBRA UMBRO UNCIR UNGIR UNICA UNICO UNIDA UNIDO UNION UNTAR U\xD1ERO U\xD1OSA U\xD1OSO URDIR URGIR URICA URICO USADA USADO USTED USUAL USURA UTERO UVADA UVATE UVERA UVERO UVIAR UVULA VACAR VACIA VACIO VACUA VACUO VADEO VAGAR VAGON VAINA VALAR VALER VALET VALIA VALLA VALLE VALON VALOR VALVA VAPOR VARAL VARAR VARGA VARIA VARIO VARON VASAR VASCA VASCO VASTA VASTO VATIO VEDAR VEJAR VEJEZ VELAR VELLO VELON VELOZ VENAL VENDA VENIR VENTA VENUS VERAZ VERBA VERBO VERDE VERGA VERJA VERSO VESPA VETAR VIAJE VICIO VIDEO VIDRO VIEJA VIEJO VIGIA VIGOR VILLA VINAR VINCA VIOLA VIRAL VIRAR VIRGO VIRIL VIRUS VISAR VISCO VISIR VISON VISOR VISTA VISTO VITAL VITAR VIUDA VIUDO VIVAC VIVAR VIVAZ VIVEZ VIVIR VOCAL VOLAR VOLEA VORAZ VOSEO VOTAR VUELO VUESA VUESO VULGO VULVA XENON XIOTE YACER YAGUA YAMBO YAMBU YANTA YAPAR YARDA YEDRA YEGUA YELMO YENTE YERAL YERBA YERMA YERMO YERNA YERNO YERRO YERTA YERTO YESAL YESAR YESCA YESON YEZGO YIDIS YIHAD YODAR YOGAR YOGUI YOGUR YUCAL YUNGA YUNTA YUNTO ZABRA ZABRO ZACEO ZAFAR ZAFIA ZAFIO ZAFIR ZAFRA ZAFRE ZAGAL ZAGUA ZAHEN ZAHON ZAIDA ZAINA ZAINO ZALEA ZALEO ZAMBA ZAMBO ZAMPA ZANCA ZANCO ZANGA ZANJA ZAPAR ZAPEO ZAQUE ZARCA ZARCO ZARDA ZARJA ZARPA ZARZA ZARZO ZEBRA ZEINA ZEJEL ZENDA ZENDO ZENIT ZIPER ZOCAR ZOCLO ZOFRA ZOILO ZOIZO ZOMBI ZOMPA ZOMPO ZONAL ZONZA ZONZO ZORRA ZORRO ZOTAL ZUAVO ZUBIA ZUECA ZUECO ZULLA ZUMBA ZUMBO ZU\xD1IR ZUPIA ZURDA ZURDO ZUREO ZURRA ZUZAR ZUZON",
        allowed: "ABABA ABACA ABACO ABADA ABADI ABAJA ABAJE ABALA ABALE ABALO ABANA ABA\xD1A ABANE ABA\xD1E ABANO ABA\xD1O ABASI ABATA ABATE ABATI ABATO ABETE ABETO ABIAR ABIAS ABINA ABINE ABINO ABISO ABITA ABITE ABITO ABOBA ABOBE ABOBO ABOCA ABOCO ABOFA ABOFE ABOFO ABOGA ABOGO ABOLI ABONA ABONE ABOYA ABOYE ABOYO ABOZO ABRAN ABRAS ABREN ABRES ABRIA ABRID ABRIL ABRIO ABRIS ABSIT ABUBO ABUCE ABUJE ABURA ABURE ABURO ABUSA ABUSE ABUZA ABUZO ACABA ACABE ACABO ACAMA ACAME ACAMO ACANA ACARA ACARE ACARO ACATA ACATE ACATO ACEBO ACECE ACEDA ACEDE ACEDO ACEMA ACE\xD1A ACEPA ACEPE ACEPO ACERE ACEZA ACEZO ACHIN ACIAL ACIAR ACIJE ACILO ACION ACLES ACLLA ACMES ACNES ACOCA ACOCO ACODA ACODE ACODO ACOGE ACOGI ACOJA ACOJO ACOLA ACOLE ACOLO ACOPA ACOPE ACOPO ACORA ACORE ACORO ACOSA ACOSE ACOTA ACOTE ACOTO ACRES ACROE ACROY ACTAS ACTEA ACTOS ACTUA ACTUE ACTUO ACUDA ACUDE ACUDI ACUDO ACUEA ACUEO ACULA ACULE ACULO ACUNA ACU\xD1A ACUNE ACU\xD1E ACUNO ACU\xD1O ACURE ACUSA ACUSE ACUSO ACUTA ACUTI ACUTO ACUYO ADALA ADAMA ADAME ADAMO ADAZA ADEMA ADEME ADEMO ADIAD ADIAN ADIAR ADIAS ADIEN ADIES ADIVA ADIVE ADOBA ADORA ADORE ADORO ADOSA ADOSE ADOSO ADRAD ADRAL ADRAN ADRAR ADRAS ADREN ADRES ADUAR ADUCE ADUCI ADUFE ADUJA ADUJE ADUJO ADULA ADULE ADULO ADUNA ADUNE ADUNO ADURA ADURE ADURI ADURO ADVEN AEDAS AEDOS AETAS AFACA AFACE AFAMA AFAME AFAMO AFANA AFANE AFANO AFARA AFARE AFATA AFATE AFATO AFEAD AFEAN AFEAS AFEEN AFEES AFIAR AFICE AFIJA AFIJO AFILA AFILE AFILO AFINE AFINO AFIZO AFLUI AFOCA AFOCO AFOFA AFOFE AFOFO AFOGA AFOGO AFOSA AFOSE AFOSO AFTAS AFUFA AFUFE AFUFO AFUMA AFUME AFUMO AGACE AGAMI AGANA AGANE AGANO AGIOS AGITA AGITE AGITO AGOLA AGOLE AGOLO AGORA AGORE AGORO AGOTA AGOTE AGOTO AGRAS AGRAZ AGRES AGRIE AGROR AGROS AGUAD AGUAI AGUAN AGUAR AGUAS AGUAY AGUCE AGUEN AGUES AGUIN AGUIO AGUTI AHAJA AHAJE AHAJO AHIJA AHIJE AHIJO AHILA AHILE AHILO AHINA AHITA AHITE AHITO AHOYA AHOYE AHOYO AHUSA AHUSE AHUSO AILLO AILLU AINAS AIRAD AIRAN AIRAS AIREA AIREE AIREN AIREO AIRES AISAS AISLA AISLE AISLO AITES AJABA AJAIS AJAJA AJARA AJARE AJASE AJEAD AJEAN AJEAR AJEAS AJEBE AJEEN AJEES AJEIS AJEOS AJERA AJERO AJETE AJICE AJIES AJIPA AJIZA AJIZO AJOBO AJORA AJORE AJORO AJOTA AJOTE AJOTO AJUMA AJUME AJUMO AJUNA AJUNO ALABA ALABE ALABO ALACO ALAFA ALAGA ALAGO ALAJU ALALA ALALO ALAMA ALANA ALANO ALAUI ALAZO ALBAS ALBEA ALBEE ALBEO ALBIN ALBOS ALBUM ALCAS ALCEA ALCEN ALCES ALCOR ALEAD ALEAN ALEAS ALECE ALEDA ALEEN ALEES ALEFS ALEGA ALEGO ALEJA ALEJE ALEJO ALELA ALELI ALEMA ALETO ALEYA ALEZO ALFAD ALFAN ALFAS ALFEN ALFES ALFIZ ALFOZ ALGAS ALGOL ALGOS ALHOZ ALIAD ALIAN ALICA ALIEN ALIER ALIES ALIFA ALIGA ALIGO ALIJA ALIJE ALIJO ALIMO ALIMS ALI\xD1A ALI\xD1E ALI\xD1O ALIOJ ALISA ALISE ALISO ALJEZ ALJOR ALLEN ALMAS ALMEA ALMEZ ALMOS ALNAS ALNOS ALOBA ALOBE ALOBO ALOES ALOJA ALOJE ALOJO ALOLA ALOLE ALOLO ALOMA ALOME ALOMO ALONA ALORA ALOSA ALOTA ALOTE ALOTO ALOYA ALTAS ALTEA ALTEE ALTEO ALTOR ALTOS ALUAS ALUCE ALUDA ALUDE ALUDI ALUDO ALULA ALUNA ALUNE ALUNO ALUZA ALUZO ALVEO ALZAD ALZAN ALZAS ALZOS AMABA AMAGA AMAGO AMAIS AMALA AMALE AMALO AMANA AMA\xD1A AMANE AMA\xD1E AMANO AMA\xD1O AMARA AMARE AMARO AMASA AMASE AMASO AMATA AMATE AMATO AMBLA AMBLE AMBLO AMBON AMEIS AMELA AMELE AMELO AMEOS AMERA AMERE AMERO AMIAS AMIBO AMIDA AMINA AMINE AMINO AMIRI AMITO AMOLA AMOLE AMOLO AMOMO AMONA AMONE AMONO AMOVE AMOVI AMPAY AMPLA AMPLO AMPON AMPOS AMPRA AMPRE AMPRO AMUGA AMUGO AMULA AMULE AMULO AMURA AMURE AMURO AMUSO ANABI ANACO A\xD1ADA ANADE A\xD1ADE A\xD1ADI A\xD1ADO ANAFE ANAMU ANANA ANATA ANCAS ANCHE ANCLE ANCLO ANCON ANCUA ANDAD ANDAN ANDAS ANDEL ANDON ANEAD ANEAN ANEAR ANEAS A\xD1EDA A\xD1EDE A\xD1EDI A\xD1EDO ANEEN ANEES ANEGA ANEGO ANEJA A\xD1EJA ANEJE A\xD1EJE ANEJO ANETO ANEXA ANEXE ANGLA ANGLO ANGOR ANGRA ANIDA A\xD1IDA ANIDE A\xD1IDE A\xD1IDI ANIDO A\xD1IDO A\xD1ILA A\xD1ILE A\xD1ILO ANIMA ANIME ANIMO ANI\xD1A A\xD1INA ANI\xD1E ANI\xD1O A\xD1INO ANION ANISA ANISE ANISO ANJEO ANOAS ANODO A\xD1OJA ANOLA ANOLE ANOLO ANONA A\xD1ORA A\xD1ORE A\xD1ORO A\xD1OSA A\xD1OSO ANOTA ANOTE ANOTO ANSAR ANSAS ANSIE ANSIO ANTAS ANTIA ANTIS ANUAS ANUDA A\xD1UDA ANUDE A\xD1UDE ANUDO A\xD1UDO ANULA ANULE ANULO ANUOS ANURA ANURO AOCAR AOJAD AOJAN AOJAR AOJAS AOJEN AOJES AOJOS AONIA AONIO AOVAD AOVAN AOVAR AOVAS AOVEN AOVES APAGA APAGO APALE APA\xD1A APA\xD1E APA\xD1O APARA APARE APARO APEAD APEAN APEAS APEEN APEES APEGA APELA APELE APELO APENA APENE APENO APEOS APERA APERE APESE APICE APILA APILE APILO API\xD1A API\xD1E API\xD1O APIOS APIPA APIPE APIPO APIRI APITA APITE APITO APOCE APODA APODE APOLA APOLE APOLO APONE APOSA APOSE APOSO APOYA APOYE APOZA APOZO APRES APROA APROE APROO APTAS APTOS APUNA APU\xD1A APUNE APU\xD1E APUNO APU\xD1O APURA APURE APUSE APUSO AQUEA AQUEO ARABA ARABE ARABI ARABO ARAIS ARANA ARA\xD1E ARARA ARARE ARASA ARASE ARAZA ARBOL ARBOR ARCAD ARCAN ARCAR ARCAS ARCEA ARCES ARCHA ARCHI ARCOS ARDAN ARDAS ARDEA ARDED ARDEN ARDES ARDIA ARDID ARDIL ARDIO AREAS ARECA AREIS ARELA ARELE ARELO ARENE ARENO ARFAD ARFAN ARFAR ARFAS ARFEN ARFES ARFIL ARGAN ARGEL ARGEN ARGUE ARGUI ARIAS ARICA ARICO ARIJA ARIJE ARIJO ARILO ARIOS ARLAD ARLAN ARLAR ARLAS ARLEN ARLES ARLOS ARMAD ARMAN ARMAS ARMEN ARMES ARMON ARMOS ARNAS AROCA AROME AROMO ARPAD ARPAN ARPAS ARPEN ARPEO ARPES ARQUE ARRAZ ARREA ARREE ARREO ARRES ARRIA ARRIE ARRIO ARRUA ARRUE ARRUI ARRUO ARTAL ARTAS ARTES ARTOS ARULA ARU\xD1A ARU\xD1E ARU\xD1O ARUPO ARZON ASABA ASACA ASACO ASADA ASAIS ASARA ASARE ASARO ASASE ASCAR ASCAS ASCIA ASCIO ASCOS ASEAD ASEAN ASEAS ASEEN ASEES ASEIS ASELA ASELE ASELO ASEOS ASESA ASESE ASESO ASGAN ASGAS ASIAN ASIAS ASICA ASICO ASIDA ASIDO ASILA ASILE ASIRA ASIRE ASMAR ASMAS ASNAL ASNAS ASNOS ASOLA ASOLE ASOLO ASOMA ASOME ASOMO ASONA ASONE ASONO ASPAD ASPAN ASPAR ASPAS ASPEA ASPEE ASPEN ASPEO ASPES ASPIC ASPID ASPRO ASTAS ASTER ASTIL ASTUR ASUMA ASUME ASUMI ASUMO ASURA ASURE ASURO ASUSO ATABA ATABE ATACA ATACO ATADA ATADO ATAIS ATAJA ATAJE ATAJO ATA\xD1A ATA\xD1E ATA\xD1O ATAPA ATAPE ATAPO ATARA ATARE ATASE ATEAR ATEAS ATECE ATEIS ATEJE ATEOS ATERI ATESA ATESE ATESO ATETA ATETE ATETO ATEZA ATEZO ATIBA ATIBE ATIBO ATICA ATICE ATICO ATINA ATINE ATINO ATIPA ATIPE ATIPO ATIZA ATIZO ATOAD ATOAN ATOAR ATOAS ATOBA ATOBE ATOBO ATOEN ATOES ATOJA ATOJE ATOJO ATOMO ATONA ATONO ATORA ATORE ATORO ATRAE ATUFA ATUFE ATUFO ATURA ATURE ATURO ATUSA ATUSE ATUSO ATUVE ATUVO AUCAS AUGES AULAS AULLA AULLE AULLO AUNAD AUNAN AUNAS AUNEN AUNES AUPAD AUPAN AUPAR AUPAS AUPEN AUPES AURAS AUSOL AUTAN AUTOS AVADA AVADE AVADO AVAHA AVAHE AVAHO AVALA AVALE AVALO AVATI AVECE AVENE AVENI AVENO AVEZA AVEZO AVIAD AVIAN AVIAS AVICA AVIDA AVIDO AVIEN AVIES AVINE AVINO AVIOS AVISA AVISE AVIVA AVIVE AVIVO AVOCA AVOCO AVUGO AYACO AYEAD AYEAN AYEAR AYEAS AYEEN AYEES AYORA AYOTE AYUAS AYUDE AYUDO AYUGA AYUNA AYUNE AYUNO AYUSO AZADA AZAGA AZAGO AZALA AZCON AZERI AZIMO AZOAD AZOAN AZOAR AZOAS AZOCA AZOCO AZOEN AZOES AZOGA AZOGO AZOLA AZOLE AZOLO AZORA AZORE AZORO AZOTA AZOTO AZTOR AZUAS AZUCE AZUDA AZULA AZULE AZULO AZUTS AZUZA AZUZO BABAS BABEA BABEE BABEO BABIS BABOR BACAN BACAS BACIA BACIN BACON BADAL BADAN BADAS BADEA BADIL BAFLE BAGAD BAGAN BAGAR BAGAS BAGOS BAGRE BAGUE BAHAI BAIDA BAIFA BAIFO BAILA BAILO BAJAD BAJAN BAJAS BAJEA BAJEE BAJEN BAJEO BAJES BAJEZ BAJIA BAJIN BAJIO BAJON BAJOS BALAD BALAJ BALAN BALAS BALAY BALDA BALDO BALEA BALEE BALEN BALEO BALES BALIN BALON BALOS BALSO BAMBU BA\xD1AD BA\xD1AN BANAS BA\xD1AS BANCE BA\xD1EN BA\xD1ES BA\xD1IL BANIR BA\xD1OS BANTU BANYO BANZO BAQUE BARBE BARBO BARDE BARES BARIA BARIL BARIS BARNS BARON BAROS BARRE BARRI BARZA BASAD BASAN BASAS BASCA BASEN BASES BASIS BASNA BASTE BATAN BATAS BATEE BATEL BATEN BATES BATEY BATIA BATID BATIN BATIO BATIS BATON BATOS BATUA BAULA BAURE BAUSA BAUZA BAYAL BAYAS BAYON BAYOS BAYUA BAYUS BAZAS BAZOS BEBAN BEBAS BEBED BEBEN BEBES BEBIA BEBIO BECAD BECAN BECAS BEFAD BEFAN BEFAR BEFAS BEFEN BEFES BEFOS BEFRE BEGUM BEJIN BELDA BELDE BELDO BELEN BELES BELEZ BELFA BELIO BELUA BEMBA BEMBE BEMBO BEMOL BENES BEODA BEORI BEQUE BERBI BERMA BERON BERRE BERTA BESAD BESAN BESAS BESEN BESES BESOS BETAS BETEL BEUDA BEUDO BEYES BEZAR BEZON BEZOS BIAZA BIBIS BICAL BICHE BICIS BICOS BIDES BIDON BIELA BIFES BIGAS BIJAO BIJAS BIJOL BILAO BILES BILLA BILMA BILME BILMO BIMBA BINAD BINAN BINAR BINAS BINEA BINEE BINEN BINEO BINES BINZA BIOTA BIRAS BIRLI BIRLO BIROS BISAD BISAN BISAR BISAS BISEN BISES BISOS BISTE BITAD BITAN BITAR BITAS BITEN BITER BITES BITOR BIZAS BIZMA BIZME BIZMO BIZNA BLAOS BLAVA BLAVO BLOCA BLOCO BLOCS BOBAS BOBEA BOBEE BOBEO BOBOS BOCAL BOCAS BOCEA BOCEE BOCEL BOCEO BOCHO BOCIN BOCON BOCOY BODAS BODES BODON BOFAN BOFAS BOFEN BOFES BOFIA BOFOS BOGAD BOGAN BOGAR BOGAS BOGUE BOHIO BOIRA BOITE BOJAD BOJAN BOJAR BOJAS BOJEA BOJEE BOJEN BOJEO BOJES BOJOS BOLAR BOLAS BOLDO BOLEE BOLEO BOLES BOLIN BOLIS BOLLE BOLON BOLOS BONAL BONES BONGA BONOS BONZO BOQUE BOQUI BORAX BORIA BORNA BORNE BORNI BOROS BORRA BORRE BORRO BORTO BOSAR BOSON BOSTA BOTAD BOTAN BOTAS BOTEA BOTEE BOTEN BOTEO BOTES BOTON BOTOR BOTOS BOXEA BOXEE BOXER BOXES BOYAD BOYAL BOYAN BOYAR BOYAS BOYEN BOYES BOZAS BOZON BOZOS BRACA BRACO BRA\xD1A BREAD BREAN BREAS BRECA BRECE BRECO BREEN BREES BREGA BREGO BRE\xD1A BRETE BREVA BREZA BRIAL BRIBA BRICE BRIOL BRIOS BRISE BRISO BRIZO BROAS BROCE BROME BROTA BROTO BROZO BRUCE BRUGO BRUJE BRUJI BRUJO BRUME BRU\xD1A BRU\xD1E BRU\xD1I BRU\xD1O BRUTS BRUZA BRUZO BUARO BUBAS BUBIS BUBON BUCEA BUCEE BUCEN BUCES BUCHE BUCIO BUCOS BUDAS BUDIN BUEGA BUERA BUFAD BUFAN BUFAS BUFEN BUFEO BUFES BUFIA BUFOS BUHIO BUHOS BUIDA BUIDO BUJEO BUJES BUJIA BUJOS BULAS BULDA BULES BULIN BULIS BULLI BULOS BUNAS BUNIO BURAS BUREL BUREO BURGA BURIL BURIO BURIS BURLE BURLO BUROS BUSCA BUSCO BUSES BUTEN BUTIA BUYOS BUZAD BUZAN BUZAS BUZON BUZOS CABED CABEN CABES CABIA CABIO CABOS CABRE CACAN CACAS CACEA CACEE CACEN CACEO CACES CACHE CACHU CACLE CACOS CACUY CADAS CADIS CADOS CAEIS CAENA CAERA CAERE CAFES CAFIZ CAGAD CAGAN CAGAS CAHIZ CAIAN CAIAS CAICO CAIES CAIGA CAIGO CAIMA CAIRE CAITE CAJAS CAJEL CAJIN CAJIS CAJOS CALAD CALAN CALAO CALAS CALCA CALCE CALED CALEN CALER CALES CALIA CALIO CALIS CALLA CALME CALON CALOS CALTA CALVE CAMAL CAMAO CAMAS CAMBA CAMBE CAMBO CAMIO CAMON CAMPE CA\xD1AD CA\xD1AL CA\xD1AN CANAS CA\xD1AS CANDA CANDE CANDI CANDO CANEA CA\xD1EA CANEE CA\xD1EE CA\xD1EN CANEO CA\xD1EO CANES CA\xD1ES CANEY CANEZ CANGO CANIA CANIL CA\xD1IS CA\xD1ON CANOS CA\xD1OS CANSA CANSE CANSO CANTA CANTE CANTU CAOBO CAPAD CAPAN CAPAS CAPEA CAPEE CAPEL CAPEN CAPEO CAPES CAPIA CAPIN CAPIO CAPIS CAPOS CAPPA CAPTA CAPTE CAPTO CAPUZ CARAO CARAS CARAU CARCA CARDA CARDE CAREA CAREE CAREL CARES CARIA CARIE CARIO CARIS CARLA CARLO CARME CARON CAROS CARPE CARPI CARPO CARVI CASAD CASAN CASAS CASEA CASEN CASEO CASES CASIA CASIS CASON CASOS CATAD CATAN CATAS CATEA CATEE CATEN CATEO CATES CATEY CATIN CATON CATOS CAUCA CAUJE CAULA CAUNO CAURI CAURO CAUSO CAVAD CAVAN CAVAS CAVEA CAVEN CAVES CAVIA CAVIO CAVIS CAVON CAVOS CAYAN CAYAS CAYOS CAZAD CAZAN CAZAS CAZON CAZOS CAZUZ CEAJA CEAJO CEBAD CEBAN CEBAS CEBEN CEBES CEBIL CEBOS CEBTI CEBUS CECAL CECAS CECEA CECEE CECEO CEDAN CEDAS CEDED CEDEN CEDES CEDIA CEDIO CEFEA CEFEE CEFEO CEFOS CEGAD CEGAS CEGUA CEGUE CEIBO CEJAD CEJAN CEJAS CEJEN CEJES CEJOS CELAD CELAN CELAS CELEN CELES CELFO CELIA CELLA CELLO CELOS CEMAS CEMBO CENAD CE\xD1AD CENAL CENAN CE\xD1AN CE\xD1AR CENAS CE\xD1AS CENCA CENEN CE\xD1EN CENES CE\xD1ES CENIA CE\xD1IA CE\xD1ID CENIS CE\xD1IS CE\xD1OS CENSA CENSE CENTS CEPAS CEPOS CEPTI CEQUI CERAS CEREA CEREO CERIO CERNA CERNE CERNI CERNO CERON CEROS CERPA CERRE CESAD CESAN CESAS CESEN CESES CESIO CETIL CETIS CETME CETRA CETRE CEUTI CHACA CHACE CHAFO CHAIS CHAJA CHALA CHALO CHAME CHAMO CHANE CHAUL CHAUZ CHAVA CHAVE CHAYA CHAYE CHAYO CHEFS CHEJE CHELA CHEPE CHERA CHERO CHESA CHESO CHETA CHETO CHIAD CHIAN CHIAR CHIAS CHICS CHIEN CHIES CHIFA CHIIS CHIMA CHIME CHIMO CHIMU CHINE CHIPE CHIPS CHIRA CHIRI CHISA CHIST CHIVE CHIZA CHOBA CHOCA CHOCO CHOFE CHONA CHONO CHOPE CHORE CHORI CHOTE CHOVA CHOYA CHOYE CHOYO CHUAS CHUCE CHUCO CHUFE CHUFO CHUNA CHU\xD1A CHU\xD1O CHUPA CHUPO CHURA CHURO CHURU CHUTS CHUVA CHUYA CHUYO CIABA CIADO CIAIS CIANI CIARA CIARE CIASE CIATO CIBIS CICAS CICCA CICLA CICLE CIDES CIDRO CIECA CIEIS CIEMO CIFRE CIFRO CIGUA CIJAS CILIO CILLA CIMAS CIMBA CIMIA CIMPA CI\xD1AN CINAS CI\xD1AS CINCS CI\xD1EN CINES CI\xD1ES CINIA CINTE CIPES CIPOS CISME CISMO CISTA CITAD CITAN CITAS CITEN CITES CITRA CLACO CLACS CLAMA CLAME CLAPA CLEMA CLICA CLICS CLIPS CLISA CLISE CLISO CLOCA CLOCO CLONA CLONE CLONO CLORA CLORE CLOTA CLUBS COANA COBAS COBEA COBEZ COBIL COBLA COBOS COCAD COCAL COCAN COCAR COCAS COCEA COCED COCEE COCEO COCES COCHA COCHI COCHO COCIA COCIO COCOL COCOS COCUI COCUY CODAL CODAS CODEA CODEE CODEO CODEZ CODIN CODON CODOS COEVA COEVO COFAN COFAS COFIN COGED COGEN COGES COGIA COGIO COGON COIMA COIME COINE COIPO COITA COITE COJAL COJAN COJAS COJEA COJEE COJEO COJON COJOS COLAD COLAN COLAS COLEA COLEE COLEN COLEO COLES COLGA COLGO COLIN COLLA COLOS COLPA COLPE COLZA COMAN COMAS COMBA COMBE COMED COMEN COMES COMIA COMIO COMIS COMTA COMTO CO\xD1AS CONCA CO\xD1EA CO\xD1EE CO\xD1EO CO\xD1ON CONOS CO\xD1OS CONTA CONTE CONTO COONA COPAD COPAN COPAS COPEA COPEC COPEE COPEN COPEO COPES COPEY COPIE COPIN COPIO COPON COPOS COPRA COPTA COPTO COQUE COQUI CORAD CORAR CORAS CORBE CORCA CORCO CORDA COREE COREN COREO CORES CORIO CORIS CORLA CORLE CORLO CORMA CORNO COROS CORPA CORPS CORRA CORRE CORRI CORTA CORUA CORVE CORZA CORZO COSAN COSAS COSCA COSCO COSED COSEN COSES COSIA COSIO COSOS COSPE COTAD COTAN COTAR COTAS COTEN COTES COTIN COTIS COTON COTOS COTUA COVAD COVAN COVAR COVAS COVEN COVES COXAL COXAS COYAN COYAS COYES COYOL CRACS CRAZA CREAD CREAN CREAS CRECE CRECI CREED CREEN CREES CREIA CREME CREMO CREPE CREPS CREYO CRIAD CRIAN CRIAS CRIBE CRIBO CRICA CRICS CRIDA CRIEN CRIES CRINA CRINE CRINO CRIOS CROAD CROAN CROAS CROCO CROEN CROES CROME CROSS CROTO CROZA CRUJA CRUJE CRUJI CRUJO CRUOR CRUPS CRUZO CUABA CUACO CUADA CUADO CUAJE CUAPE CUATI CUBAS CUBOS CUBRA CUBRE CUBRI CUBRO CUCAD CUCAN CUCAR CUCAS CUCHI CUCOS CUCUS CUECA CUECE CUECO CUELA CUELE CUELO CUETE CUETO CUEZA CUEZO CUICA CUICO CUIDA CUIDE CUIDO CUIJA CUILO CUINA CUINO CUJAS CUJES CUJIN CUJIS CUJON CULAS CULEA CULEE CULEN CULEO CULIA CULIO CULIS CULLE CULON CULOS CULPE CULPO CUMAS CUMBA CUMBE CUMBO CUMEL CUMPA CUNAD CU\xD1AD CU\xD1AL CUNAN CU\xD1AN CUNAS CU\xD1AS CUNDA CUNDE CUNDI CUNDO CUNEA CUNEE CUNEN CU\xD1EN CUNEO CUNES CU\xD1ES CU\xD1OS CUPES CUPLE CUPOS CUQUE CURAD CURAL CURAN CURAS CURCA CURCO CURDO CUREN CURES CURIL CURIS CUROS CURRA CURRE CURSE CURTA CURTE CURTI CURTO CURUL CURVE CUSAN CUSAS CUSCA CUSCO CUSCU CUSEN CUSES CUSIA CUSID CUSIO CUSIR CUSIS CUSMA CUSPA CUSUL CUTAS CUTES CUTIO CUTOS CUTRA CUYAS CUYEO CUYES CUYOS CUZAS CUZCO CUZMA CUZOS CUZUL DABAN DABAS DABLE DACHA DACIA DACIO DADAS DADOS DAGAS DAHIR DAIFA DAJAO DALAS DALGO DALLA DALLE DALLO DAMAS DAMIL DAMOS DA\xD1AD DA\xD1AN DA\xD1AS DANCE DANDO DA\xD1EN DANES DA\xD1ES DA\xD1OS DANTA DANTE DANTO DANZO DAQUI DARAN DARAS DARGA DARIA DATAD DATAN DATAS DATEA DATEE DATEN DATEO DATES DATOS DAUCO DAUDA DAZAS DEBAN DEBAS DEBDA DEBDO DEBED DEBEN DEBES DEBIA DEBIO DEBLA DEBOS DECAE DECAI DECIA DECID DECIS DEDEO DEDIL DEDOS DEESA DEJAD DEJAN DEJAS DEJEN DEJES DEJOS DELCO DELES DELGA DELIA DELIO DELLA DELLO DEMAS DEMOS DE\xD1AR DENDE DENTA DENTO DEPON DEQUE DERBI DESCA DESDA DESDI DESEA DESEE DESES DESGA DESOI DESTA DESTE DESTO DESUS DETAL DETEN DEVEN DEYES DEZMA DEZME DEZMO DIADA DIADO DIA\xD1O DICAZ DICEN DICES DICTA DICTE DICTO DIERA DIERE DIESE DIESI DIETE DIETO DIGAS DIGNE DIJES DILUI DIMAN DIMAS DIMEN DIMES DIMIA DIMID DIMIO DIMIR DIMIS DIMOS DI\xD1AD DI\xD1AN DI\xD1AR DINAS DI\xD1AS DI\xD1EN DINES DI\xD1ES DINOS DIOSO DIRAN DIRAS DIRIA DISCA DISON DISTA DISTE DISTO DITAS DIUCA DIVAS DIVOS DOBLO DOCAS DOCES DODOS DOGAL DOGAS DOGOS DOGRE DOLAD DOLAS DOLED DOLES DOLIA DOLIO DOLOS DOMAD DOMAN DOMAS DOMBO DOMEN DOMES DOMOS DONAD DONAN DONAS DO\xD1AS DO\xD1EA DO\xD1EE DONEN DONEO DO\xD1EO DONES DOPAD DOPAN DOPAS DOPEN DOPES DORAD DORAL DORAN DORAS DOREN DORES DORIA DORIO DORMI DORNA DOSES DOTAD DOTAL DOTAN DOTAS DOTEN DOTES DOTOR DRABA DREAS DRENA DRENE DRENO DRIAS DRINO DRIZA DROPE DRUPA DRUSA DRUSO DSEDA DUBAS DUBDA DUBIO DUCAL DUCAS DUCES DUCHE DUCOS DUDAD DUDAN DUDAS DUDEN DUDES DUELA DUELE DUGOS DUJOS DULAR DULAS DULIA DUMAN DUMAS DUMEN DUMES DUMIA DUMID DUMIO DUMIR DUMIS DUNAS DUNDA DUNDO DUQUE DURAD DURAN DURAS DUREN DURES DUROS EBANO ECHAD ECHAN ECHAS ECHEN ECHES ECUAS ECUOS EDILA EDITA EDITE EDITO EDRAD EDRAN EDRAS EDREN EDRES EDUCE EDUCI EDUCO EDUJE EDUJO EFETA EFETO EFLUI EFORO EGENA EGENO EGIDA EGUAR EIRAS EJION ELAMI ELATA ELATO ELCHE ELEGA ELEGI ELEGO ELEMI ELEPE ELETA ELETO ELEVA ELEVE ELEVO ELFOS ELIDA ELIDE ELIDI ELIDO ELIGE ELIJA ELIJE ELIJO ELITE ELLAS ELLES ELLOS ELUDA ELUDE ELUDI ELUDO EMANA EMANE EMANO EMBAI EMITA EMITE EMITI EMITO EMPOS EMPRA EMPRE EMPRO EMUES EMULA EMULE EMULO ENCIA ENEAL ENEAS ENEJA ENEJE ENEJO ENEOS ENOJA ENOJE ENRIA ENRIE ENRIO ENSAY ENTEO ENTES ENTRO ENULA ENVIA ENVIE ENZAS EOLIA EONES EPALE EPATA EPATE EPATO EPICA EPICO EPOCA EPODA EPODO EPOTA EPOTO ERABA ERADA ERAIS ERAJE ERALA ERARA ERARE ERASE ERBIO ERCER EREBO EREIS ERGIO ERGUI ERIAL ERIAS ERICE ERIGE ERIGI ERIJA ERIJO ERINA ERIOS EROGA EROGO ERRAD ERRAJ ERRAN ERRAS ERREN ERRES ERROS ERUTA ERUTE ERUTO ESCAS ESCAY ESCOA ESMUI ESPAY ESPIE ESPIN ESPIO ESQUI ESTAD ESTAN ESTAS ESTAY ESTEN ESTER ESTES ESTIL ESTIO ESTOL ESTOR ESTOS ESTOY ESULA ETICA ETICO ETILO ETIMO ETNEA ETNEO ETOLA ETOLO ETUSA EUBEA EUBEO EUROS EVADA EVADE EVADI EVADO EVITA EVITE EVITO EVOCA EVOCO EVOHE EXIDA EXIGE EXIGI EXIJA EXIJO EXILA EXILE EXILO EXIMA EXIME EXIMI EXIMO EXITO EXODO EXORA EXORE EXORO EXPIA EXPIE EXPIO EXPON EXUDA EXUDE EXUDO FABAS FABLA FABOS FABRO FACAS FACER FACES FACHE FACON FADAS FADOS FAENE FAENO FAGOS FAGOT FAINA FAINO FAJAD FAJAN FAJAS FAJEA FAJEE FAJEN FAJEO FAJES FAJIN FAJOL FAJON FAJOS FALCO FALLE FALOS FALSE FALTE FALTO FAMAS FA\xD1AD FA\xD1AN FA\xD1AR FA\xD1AS FA\xD1EN FANES FA\xD1ES FAQUI FARAD FARAS FARDA FARDE FARIA FARIO FAROS FARPA FARTE FASES FASOL FASOS FASTA FATAS FATOR FATOS FAVOS FAXEA FAXEE FAXEO FAXES FAYAS FEBEA FEBEO FEBLE FECES FECHE FECHO FEEZA FEJES FELPE FELUS FEMAD FEMAN FEMAR FEMAS FEMEN FEMES FENAL FENDA FENDI FENOL FERIE FERIO FERIR FERMI FESTA FETAS FETEN FETOR FETOS FETUA FEUCA FEUCO FEUDA FEUDE FEURA FIABA FIACA FIAIS FIANA FIARA FIARE FIASE FIATS FICAR FICEN FICES FICHE FICHO FIEIS FIEMO FIFAD FIFAN FIFAR FIFAS FIFEN FIFES FIFIS FIGLE FIJAD FIJAN FIJAS FIJEN FIJES FIJON FIJOS FILAD FILAN FILAS FILEN FILES FILFA FILIA FILIE FILIN FILIO FILIS FILLO FILMA FILMO FILMS FILOS FIMOS FINAD FINAN FINAS FINCO FINEN FINES FI\xD1ES FINGE FINGI FINIA FINID FINIO FINIR FINIS FINJA FINJO FINOS FINTE FINTO FIQUE FIRMO FISAN FISGA FISGO FISTA FISTO FIZAD FIZAN FIZAR FIZAS FIZON FLAON FLAVA FLAVO FLEJA FLEJE FLEJO FLEME FLEOS FLETA FLETO FLIPA FLIPE FLIPO FLORE FLORO FLOTE FLOTO FLUIA FLUID FLUIS FLUYA FLUYE FLUYO FOCAS FOCHA FOCIA FOCIO FOCOS FOFAS FOFOS FOGON FOISA FOISO FOJAS FOLGA FOLGO FOLIA FOLIE FOLLA FOLLE FOLLO FOLUZ FOMES FONES FONIL FONIO FONJE FONOS FOQUE FORAL FORAS FORCA FORCE FORJE FORJO FORME FORMO FORNO FOROS FORRA FORRE FORZA FORZO FOSAD FOSAL FOSAN FOSAR FOSAS FOSCA FOSCO FOSEN FOSES FOSOR FOSOS FOTON FOTOS FOVEA FRACS FRADA FRADE FRADO FRAGA FRA\xD1A FRA\xD1E FRA\xD1I FRA\xD1O FRECE FREDO FREGA FREGO FREIA FREID FREIS FRENA FRENE FREON FREOS FRESE FRESO FRETA FRETE FRETO FREZA FREZO FRIAN FRIAS FRICA FRICO FRIEN FRIES FRIOR FRIOS FRISA FRISE FRITA FRITE FRITO FROGA FROGO FROTA FROTO FRUIA FRUID FRUIR FRUIS FRUTE FRUYA FRUYE FRUYO FUCAR FUCIA FUCOS FUDRE FUERE FUESA FUESE FUETS FUFAD FUFAN FUFAS FUFEN FUFES FUFOS FUFUS FUGAN FUGAS FUGUE FUINA FULAR FULAS FULGE FULGI FULJA FULJO FULLA FUMAD FUMAN FUMAS FUMEN FUMES FUMON FU\xD1AR FUNCA FUNCO FUNDE FUNDI FUNDO FUNGE FUNGI FUNJA FUNJO FURAS FUROS FURTO FUSAS FUSOR FUSOS FUTON FUTRE GABAR GACEL GACHE GACHI GAFAD GAFAN GAFEA GAFEE GAFEN GAFEO GAFES GAFOS GAGAS GAGOS GAJOS GALAS GALEA GALEO GALLA GALLE GALON GALOP GALOS GALUA GAMAS GAMBA GAMOS GANAD GANAN GA\xD1AN GANAS GA\xD1AS GANEN GA\xD1EN GANES GA\xD1ES GA\xD1IA GA\xD1ID GA\xD1IL GA\xD1IN GA\xD1IR GA\xD1IS GA\xD1ON GANTA GANTE GARAS GARAY GARBA GARBE GARFA GARIA GARIO GARLA GARLE GARLO GARMA GAROS GARPA GARPE GARPO GARRE GARRI GARRO GARUA GARUE GARUO GASAS GASEA GASEE GASEO GASES GASON GASTA GASTE GATAS GATEA GATEE GATEO GATOS GAUSS GAYAD GAYAN GAYAR GAYAS GAYEN GAYES GAYOS GAZAS GAZNA GAZNE GAZNO GELAN GELAR GELAS GELEN GELES GELFE GEMAS GEMIA GEMID GEMIS GENES GENOL GERBO GESTE GETAS GIBAD GIBAN GIBAO GIBAR GIBAS GIBEN GIBES GIBON GIGAS GILAS GILES GILIS GILVA GILVO GIMAN GIMAS GIMEN GIMES GIMIO GINEA GIRAD GIRAN GIRAS GIREN GIRES GIROS GISES GISTE GLASE GLAYO GLEBA GLERA GLIAL GLIAS GLIDE GLIFO GLOSO GLUMA GNEIS GOBEN GOBIO GOCEN GOCES GOCHA GOCHO GODAS GODEO GODOS GOFAS GOFIO GOFOS GOFRA GOFRE GOFRO GOLAS GOLEA GOLEE GOLEO GOLES GOLFS GOMAS GOMEL GOMER GOMIA GONCE GONGO GORGA GORJA GORMA GORME GORMO GOTAS GOTEA GOTEE GOTON GOYAS GOYOS GOZAD GOZAN GOZAS GOZNE GOZON GOZOS GRABA GRABE GRABO GRADE GRAFO GRAIS GRAME GRAND GRANE GRANT GRAOS GRAPE GRAPO GRATE GRAVO GREBA GREEN GRENO GRIFE GRIJA GRILL GRIPA GRIPO GRISA GRISU GRITE GROAD GROAN GROAS GROEN GROES GROGS GRUAS GRUIA GRUID GRUIS GRUJA GRUJE GRUJI GRUJO GRU\xD1A GRU\xD1E GRU\xD1I GRU\xD1O GRUPI GRUYA GRUYE GRUYO GUAIS GUALA GUAMA GUAME GUAMO GUAOS GUAPE GUARA GUARE GUARI GUATE GUATO GUAYE GUE\xD1A GUERA GUERO GUIAD GUIAN GUIAS GUIDA GUIDO GUIEN GUIES GUIFA GUIJA GUIJO GUILA GUILO GUINA GUI\xD1A GUI\xD1E GUINO GUIPA GUIPE GUIPO GUIRA GUIRE GUIRO GUISA GUISE GUITE GUITO GUIYE GUJAS GULAS GULAY GULES GUMIA GURDA GURDO GURIS GURUS GUSTE GUZGA GUZGO GUZLA HABAR HABAS HABIA HABIZ HABLE HABLO HABON HABRA HABRE HABUS HACAN HACED HACEN HACES HADAR HADAS HADOS HAGAN HAGAS HAIGA HALAD HALAN HALAS HALDA HALEN HALES HALLA HALLE HALLO HALON HALOS HAMEZ HANZO HAPAX HARAN HARAS HARBA HARBE HARBO HARCA HARDA HAREN HARIA HARMA HARON HARRE HARTA HARTE HATEA HATEE HATEO HATOS HAUTE HAVAR HAVOS HAYAL HAYAN HAYAS HAYOS HAZAS HEBEN HECES HEDED HEDES HEDIA HEDIO HELAD HELAS HELEA HELEE HELEO HEMOS HENAL HENDE HENDI HE\xD1IA HE\xD1ID HENIL HE\xD1IR HE\xD1IS HENOS HENRY HERBA HERBE HERBO HERIA HERID HERIL HERIS HERMA HERRA HERRE HERRO HERTZ HERVE HERVI HESPA HESPE HESPI HESPO HETEA HETEO HEVEA HICOS HIEDA HIEDE HIEDO HIELA HIELE HIENA HIERA HIERE HIERO HIGAS HIGOS HIGUI HIJAS HIJEA HIJEE HIJEO HIJOS HILAD HILAN HILAS HILEN HILES HILIO HILOS HIMPA HIMPE HIMPO HI\xD1AN HI\xD1AS HINCA HINCO HI\xD1EN HI\xD1ES HI\xD1IA HI\xD1ID HI\xD1IR HI\xD1IS HIPAD HIPAN HIPAS HIPEN HIPES HIPOS HIRCO HIRIO HIRMA HIRME HIRMO HISCA HISPA HISPE HISPI HISPO HITAD HITAN HITAS HITEN HITES HITON HITOS HOBOS HOCEN HOCES HOGOS HOJAS HOJEA HOJEE HOJEO HOLAN HOLCO HOLEA HOLEE HOLEO HOLGA HOLGO HOLLA HOLLE HOMES HONDA HONRE HONRO HOPAN HOPAR HOPAS HOPEA HOPEE HOPEN HOPEO HOPES HOPOS HOQUE HORAS HORCO HORNE HORRA HORRE HORRO HOTOS HOVES HOYAD HOYAN HOYAR HOYAS HOYEN HOYES HOYOS HOZAD HOZAN HOZAS HUAOS HUCHO HUCIA HUELA HUELE HUELO HUESA HUEVE HUIAN HUIAS HUICH HUIDA HUIDO HUIFA HUILA HUILO HUIRA HUIRE HUIRO HULAD HULAN HULAS HULEA HULEE HULEN HULEO HULES HULLA HULTE HUMAD HUMAN HUMAS HUMEA HUMEE HUMEN HUMEO HUMES HUMIL HUMOS HUNAS HUNDA HUNDE HUNDI HUNDO HUNOS HUPES HURAS HURGO HURIS HURON HURTA HURTE HUSME HUSOS HUTAS HUTIA HUYAN HUYAS HUYEN HUYES IBAIS IBICE ICACO ICEIS ICHAL ICHOS ICHUS ICTUS IDEAD IDEAN IDEAS IDEAY IDEEN IDEES IDEOS IDOLO IGLUS IGUAR IJIYO IJUJU ILEON ILEOS ILION ILUDA ILUDE ILUDI ILUDO IMADA IMANA IMANE IMANO IMBUI IMELA IMITA IMITE IMITO IMPIA IMPLA IMPLE IMPLO IMPON INCAS INCOA INCOE INCOO INDAS INDOS INFLA INFLE INFLO INGAS INGON INGRE INOPE INPUT INRIS INSTA INSTE INSTO INTIS INTUI INVAR IONES IOTAS IPSIS IRADA IRADO IREIS IRGAN IRGAS IRGUE IRIAN IRIAS IRIDE IRISA IRISE IRISO IRRUI IRUPE ISBAS ISLAN ISLAS ISLEO ISOCA ITALA ITALO ITEMS ITERA ITERE ITERO ITRIA ITRIO ITZAJ IZABA IZAIS IZARA IZARE IZASE IZOTE JABAS JABIS JABLE JABRA JABRE JABRI JABRO JACAL JACAS JACER JACHA JACOS JACTA JACTE JACTO JADAS JADEA JADEE JADES JADIA JADIE JADIO JAECE JAEZA JAEZO JAGUA JALAD JALAN JALAS JALDA JALDE JALDO JALEE JALEN JALES JALMA JALON JAMAD JAMAN JAMBE JAMEN JAMES JA\xD1AS JANES JA\xD1OS JAPON JARAL JARAS JARBA JARBE JARBO JARCA JARDA JAROS JARRE JASAD JASAN JASAR JASAS JASEN JASES JASPE JATAS JATEO JATES JATIB JATOS JAUDA JAUDO JAUTA JAUTO JAVAS JAVOS JEBES JEDAD JEDAN JEDAR JEDAS JEDEN JEDES JEFAS JEFES JEITO JEJEN JELIZ JEMAL JEMES JEQUE JERAS JEREZ JERPA JETAD JETAN JETAS JETEA JETEE JETEN JETEO JETES JETON JETOS JIBES JIBIA JICOS JIFAS JIFIA JIGAS JIGUE JIJAS JIJEA JIJEE JIJEO JIMAD JIMAN JIMAS JIMEN JIMES JIMIA JIMIO JI\xD1AD JI\xD1AN JI\xD1AR JI\xD1AS JINDA JI\xD1EN JINES JI\xD1ES JIOTE JIPAS JIPIA JIPIE JIPIO JIPIS JIRAS JIREL JISCA JITAD JITAN JITAS JITEN JITES JOBAR JOBOS JOCHA JOCHE JOCHO JOCON JOCOS JODAN JODAS JODED JODEN JODES JODIA JODIO JODON JOFOR JOLIN JONDO JONIA JONIO JOPAN JOPAR JOPAS JOPEA JOPEE JOPEN JOPEO JOPES JOPOS JORAS JORCO JORFE JORGA JORRO JOSAS JOTAS JOTES JOTOS JOYAS JOYOS JUBAS JUBOS JUCAS JUCOS JUDOS JUEGA JUGAD JUGAS JUGOS JUGUE JUJEA JUJEE JUJEO JULOS JUMAN JUMAR JUMAS JUMEA JUMEE JUMEN JUMEO JUMES JUMIL JUMOS JU\xD1AN JU\xD1AS JUNCE JUNCI JU\xD1EN JU\xD1ES JU\xD1IA JU\xD1ID JU\xD1IR JU\xD1IS JUNTE JUNZA JUNZO JUPAS JUPEA JUPEE JUPEO JUPON JURAD JURAN JURAS JURCO JUREL JUREN JURES JUROS JUSIS JUSTE JUTAS JUTIA JUVIA JUZGA JUZGO LABEO LABES LABIL LABRA LABRE LABRO LACAD LACAN LACAS LACEA LACEE LACEN LACEO LACES LACHA LACHO LACRO LACTA LACTE LACTO LADAS LADEA LADEE LADEO LADON LADOS LADRE LADRO LAGOS LAGUA LAIDA LAIDO LAJAS LAMAN LAMAS LAMBA LAMBE LAMBI LAMBO LAMED LAMEN LAMES LAMIA LAMIN LAMIO LAMPA LAMPE LAMPO LA\xD1AD LA\xD1AN LA\xD1AR LANAS LA\xD1AS LANDA LANDE LANDO LA\xD1EN LA\xD1ES LANGA LANIA LANIO LANZO LAPAS LAPON LAPOS LAPSA LAQUE LARDA LARDE LARDO LARES LARRA LASAR LASAS LASCO LASOS LASTA LASTE LASTO LASUN LATAN LATAS LATAZ LATEA LATEE LATEN LATEO LATES LATIA LATID LATIO LATIS LATOS LAUDA LAUDO LAUNA LAURO LAUTA LAUTO LAVAD LAVAN LAVAS LAVEN LAVES LAXAD LAXAN LAXAS LAXEN LAXES LAXOS LAYAD LAYAN LAYAR LAYAS LAYEN LAYES LAZAD LAZAN LAZAS LAZOS LEAIS LECOS LEDAS LEDON LEDOS LEEIS LEERA LEERE LEGAD LEGAN LEGAS LEGON LEGOS LEGRA LEGRE LEGRO LEGUE LEGUI LEIAN LEIAS LEIDA LEIDO LEILA LEIMA LEJAS LEJIO LELAS LELOS LEMAN LEMAS LEMBO LEMPO LE\xD1AD LE\xD1AN LENAS LE\xD1AS LENCA LE\xD1EN LENES LE\xD1ES LENON LE\xD1OS LERAS LESAS LESEA LESEE LESEO LESNA LESOS LESTE LETEA LETEO LETON LEUCO LEUDA LEUDE LEUDO LEVAD LEVAN LEVAS LEVEN LEVES LEYES LEZDA LEZNE LIABA LIADA LIADO LIAIS LIANA LIARA LIARE LIASE LIAZA LIBAD LIBAN LIBAS LIBEN LIBER LIBES LIBIA LIBIO LIBON LICIA LICIO LICUA LICUE LICUO LIDES LIDIE LIDIO LIDON LIEGA LIEGO LIEIS LIEVA LIEVE LIGAD LIGAN LIGAS LIGHT LIGIO LIGON LIGUE LIGUR LIJAD LIJAN LIJAS LIJEN LIJES LILAC LILAO LILAS LILOS LIMAD LIMAN LIMAS LIMEN LIMES LIMOS LINAO LINEE LINEO LINON LINOS LI\xD1OS LIOSA LIOSO LIPAS LIPES LIPIS LIPON LIRAS LIRON LISAS LISES LISIA LISIE LISIO LISIS LISOL LISOS LISTE LITAD LITAN LITAR LITAS LITEN LITES LITIS LITRE LITUO LIUDA LIUDE LIUDO LIVOR LIZAS LIZOS LLACA LLAGO LLAME LLAMO LLAPA LLAPE LLAPO LLECA LLECO LLEGA LLEGO LLENA LLENE LLERA LLEVA LLEVE LLEVO LLORA LLORE LLORO LLOSA LLOVE LLOVI LOABA LOAIS LOARA LOARE LOASE LOBAS LOBEA LOBEE LOBEO LOBOS LOCAS LOCEA LOCEE LOCEO LOCHA LOCHE LOCOS LOCRO LODON LODOS LODRA LOEIS LOGAR LOGIS LOGOS LOGRA LOGRE LOICA LOINA LOINO LOLAS LOLEA LOLEE LOLEO LOLIO LOLIS LOLOS LOMAS LOMBA LOMBO LOMEA LOMEE LOMEO LOMOS LONAS LONCO LONGA LONGO LORAS LOREA LOREE LOREO LORES LOROS LOSAD LOSAN LOSAS LOSEN LOSES LOTAS LOTEA LOTEE LOTEO LOTES LOTIN LOTOS LOZAS LUCAS LUCEN LUCES LUCHE LUCHO LUCIA LUCID LUCIO LUCIS LUCRA LUCRE LUDAN LUDAS LUDEN LUDES LUDIA LUDID LUDIE LUDIO LUDIR LUDIS LUDOS LUE\xD1E LUGRE LUIAN LUIAS LUIDA LUIDO LUIRA LUIRE LUISA LUJAD LUJAN LUJAR LUJAS LUJEN LUJES LUJOS LULOS LULUS LUMAS LUMBO LUMIA LUNAS LUNEA LUNEE LUNEL LUNEO LUNFA LUPAS LUPIA LURTE LUSAS LUSCA LUSCO LUSOS LUTEA LUTEO LUTOS LUVIA LUXAD LUXAN LUXAS LUXEN LUXES LUYAN LUYAS LUYEN LUYES LUZCA LUZCO MABIS MABLE MACAL MACAN MACAR MACAS MACEA MACEE MACEN MACEO MACES MACHE MACHI MACIA MACIO MACIS MACLA MACON MACUA MADOR MAE\xD1A MAE\xD1O MAESA MAESE MAESO MAGAS MAGIE MAGIN MAGIO MAGOS MAGUE MAHON MAIDO MAJAD MAJAL MAJAN MAJAS MAJEA MAJEE MAJEN MAJEO MAJES MAJOS MALAS MALEA MALEE MALEO MALES MALIS MALLE MALON MALOS MALVE MALVO MAMAD MAMAN MAMAS MAMBI MAMEN MAMES MAMIA MAMUA MANAD MANAL MANAN MANAS MA\xD1AS MANDE MANDI MANEA MA\xD1EA MANEE MA\xD1EE MANEN MANEO MA\xD1EO MANES MANID MANIO MA\xD1IO MANIR MANIS MANOS MA\xD1OS MANUS MAOMA MAPAS MAPEA MAPEE MAPEO MAPOS MARAS MARCE MARCI MAREE MARES MARGA MARGO MARIA MARLO MARON MAROS MARRE MARSA MARSO MARZA MASAD MASAN MASAS MASCA MASCO MASEA MASEE MASEN MASEO MASES MASIA MASLO MASON MASTO MATAD MATAN MATAS MATEA MATEE MATEN MATEO MATES MATOS MATUL MAULE MAULO MAURA MAURE MAURO MAYAD MAYAL MAYAN MAYAR MAYAS MAYEA MAYEE MAYEN MAYEO MAYES MAYOS MAZAD MAZAN MAZAS MAZNA MAZNE MAZNO MAZOS MBAYA MEABA MEADO MEAIS MEAJA MEANO MEARA MEARE MEASE MEATO MECAS MECED MECEN MECES MECHE MECHO MECIA MECIO MECOS MEDAS MEDID MEDIE MEDIS MEDOS MEDRA MEDRE MEDRO MEEIS MEGAS MEGOS MEIGA MEIGO MEJAN MEJAS MEJED MEJEN MEJER MEJES MEJIA MEJIO MELAD MELAR MELAS MELCA MELGA MELGO MELIS MELLE MELLO MELON MELSA MELVA MEMAS MEMOS MENAD MENAN MENAR MENAS MENDA MENEA MENEE MENEN MENES MENGE MENSU MENTI MENTO MENUS MEONA MERAD MERAN MERAR MERAS MERCO MEREN MERES MEREY MERGO MERLA MERLO MERME MERMO MEROL MEROS MERSA MESAD MESAN MESAS MESEN MESES MESMA MESMO MESTA MESTO METAD METAN METAS METED METEN METES METIA METIO METRA MEYAS MEYOR MEZAN MEZAS MIABA MIADO MIAGA MIAGO MIAIS MIAJA MIA\xD1A MIA\xD1E MIA\xD1O MIARA MIARE MIASE MIAUS MICAS MICER MICES MICHA MICHE MICHO MICOS MIDAN MIDAS MIDEN MIDES MIDIO MIEIS MIELA MIELE MIELO MIERA MIGAD MIGAN MIGAS MIGRA MIGRE MIGRO MIGUE MIJOS MILAN MILES MILIS MILLO MIMAD MIMAN MIMAS MIMEN MIMES MIMOS MINAD MINAL MINAN MINAS MINAZ MINEN MINES MINGA MINGO MINIA MINIE MINIO MI\xD1ON MINUE MIONA MIRAD MIRAN MIRAS MIREN MIRES MIRLA MIRLE MIRTO MIRZA MISAD MISAL MISAN MISAR MISAS MISEN MISES MISIA MISIO MISTA MISTE MISTO MITAN MITAS MITON MITOS MITRE MITRO MIURA MIZAS MIZOS MOAIS MOARE MOBLE MOCAD MOCAN MOCAR MOCAS MOCEA MOCEE MOCEO MOCHE MOCIL MOCOS MODAS MODIO MODOS MOFAD MOFAN MOFAS MOFEN MOFES MOGAS MOGOL MOGON MOGOS MOHOS MOHUR MOJAD MOJAN MOJAS MOJEL MOJEN MOJES MOJIL MOJIS MOJON MOJOS MOLAD MOLAN MOLAS MOLDA MOLDO MOLED MOLEN MOLES MOLIA MOLIO MOLLA MOLLE MOLON MOLOS MOLSA MOLSO MOMEA MOMEE MOMEO MOMIO MOMOS MONAS MO\xD1AS MONDA MONDE MONDO MONEA MONEE MONEO MONFI MONGA MONGO MONIS MO\xD1ON MONOS MO\xD1OS MONRA MONSE MONTA MOPAN MOPAS MOQUE MORAD MORAN MORAS MORCA MORCO MORDE MORDI MOREA MOREN MOREO MORES MORFE MORGA MORIA MORID MORIS MORMA MORME MORMO MORON MOROS MOSEN MOSTE MOSTO MOTAS MOTEA MOTEE MOTEO MOTES MOTIL MOTON MOTOS MOVED MOVES MOVIA MOVIO MOXAS MOXTE MOYAS MOYOS MOZAS MOZOS MUARE MUBLE MUCAS MUCOS MUDAD MUDAN MUDAS MUDEN MUDES MUDOS MUELE MUELO MUERA MUERE MUERO MUESO MUEVA MUEVE MUEVO MUFAS MUFLA MUFTI MUGAD MUGAN MUGAS MUGEN MUGES MUGIA MUGID MUGIL MUGIO MUGIS MUGLE MUGOR MUGUE MUIAN MUIAS MUIDA MUIDO MUIRA MUIRE MUJAN MUJAS MUJOL MULAS MULEO MULES MULLA MULLE MULLI MULLO MULOS MULSA MULSO MULTE MULTO MU\xD1AN MUNAS MU\xD1AS MU\xD1EN MU\xD1ES MU\xD1IA MU\xD1ID MU\xD1IR MU\xD1IS MURAD MURAN MURAR MURAS MUREN MURES MURGA MURIA MURIO MUROS MURTA MURTO MUSAN MUSAR MUSAS MUSEN MUSES MUSGA MUSIA MUSIO MUSIR MUSIS MUSOS MUTAD MUTAN MUTAS MUTEN MUTES MUTRA MUTRO MUYAN MUYAS MUYEN MUYES NABAB NABAL NABAS NABIS NABLA NABOS NACAS NACED NACEN NACES NACIA NACIO NACOS NACRE NADAD NADAN NADAS NADEN NADES NADGA NAFRA NAFRE NAFRO NAGUA NAHOA NAIFE NAIFS NAIRE NAJAS \xD1AJAS \xD1AJOS NALCA \xD1AMES \xD1AMPI NANAS \xD1A\xD1AS NANAY NANCE NANEA NANEE NANEO \xD1A\xD1OS NANSA NANSU NANTA NANTE NANTO NAPAS \xD1APAS NAPEA NAPEO NAQUE NARES NARRA NARRE NARRO NASAS NASON NASOS NATAS \xD1ATAS \xD1ATEA \xD1ATEE \xD1ATEO NATIA NATIO NATOS \xD1ATOS NATRI NAVAS NAVES NAZCA NAZCO NAZIS NEBEL NEBIS NEBLI NEBRO \xD1ECAS NECEA NECEE NECEO \xD1ECLA \xD1ECOS NEGAD NEGAS NEGUE NEGUS NEJAS NEJOS NELDO NELES NEMAS NEMEA NEMEO NEMES NEMON NENAS NENES \xD1ENGA \xD1ENGO NENIA NEPES NERON NESGA NESGO NETAS NETOS NEVAD NEVAS NEVOS NEVUS NEXOS NIARA NIAZO NICLE NICOL NIDIA NIDIO NIDOS NIEGA NIELA NIELE NIELO NIEVA NIEVO NIGUA NILAD NILON NIMBA NIMBE NI\xD1AS NI\xD1EA NI\xD1EE NI\xD1EO \xD1INGA NI\xD1OS NINOT NIOTO NIPAS \xD1IPES NIPIS NIPOS \xD1IQUE NIQUI \xD1IRES \xD1ISCA NISTE NITOR NITOS NITRA NITRE NIVEO NIXTE \xD1IZCA NOCAS \xD1OCAS NOCIR NOCLA \xD1OCOS NODOS NOEMA \xD1OLAS NOLIS NOLIT NOMAS NOMON NOMOS NONAS \xD1O\xD1AS \xD1ONGA \xD1ONGO NONOS \xD1O\xD1OS NOQUE \xD1ORAS NORAY \xD1ORBO \xD1ORES NORME NORMO NOTAD NOTAN NOTAS NOTEN NOTES NOTOS NOTRO NOVAD NOVAL NOVAN NOVAR NOVAS NOVEN NOVES NOVIE NOYOS NUBES NUBIA NUBIL NUBIO NUBLA NUBLE NUBLO NUCAS \xD1UCAS NUCHE NUCIR NUCOS \xD1UCOS NUDAS NUDOS \xD1UDOS NUESA NUESO NUEZA NULAS NULOS NUMEN NUMOS NU\xD1OS \xD1UTAS \xD1UTOS NUTRA NUTRE NUTRI NUTRO \xD1UZCO OBELO OBOES OBRAD OBRAN OBRAS OBREN OBRES OBSTA OBSTE OBSTO OBTEN OBUES OBVIE OCHOS OCIAD OCIAN OCIAS OCIEN OCIES OCIOS OCLES OCLUI OCOTE OCRAS OCRES OCREY OCUJE OCUME OCUMO OCUPA OCUPE OCUPO ODIAD ODIAN ODIAS ODIEN ODIES ODIOS ODRES OFITA OGA\xD1O OGROS OIAIS OIBLE OIDAS OIDIO OIDOR OIDOS OIGAN OIGAS OIMOS OIRAN OIRAS OIRIA OISLO OISTE OJALE OJALO OJEAD OJEAN OJEAS OJEEN OJEES OJEOS OJITO OJOTA OJUDA OJUDO OLAIS OLAJE OLEAD OLEAN OLEAS OLEEN OLEES OLEIS OLEOS OLERA OLERE OLIAN OLIAS OLIOS OLIVE OLLAO OLLAS OLMAS OLMOS OLOTE OLURA OMANI OMASO OMBUS OMERO OMINA OMINE OMINO OMITA OMITE OMITI OMITO OMOTO ONCEA ONCEE ONCEO ONCES ONDAS ONDEA ONDEE ONDEO ONDRA ONECE ONECI ONICE ONOTO ONZAS OPADA OPADO OPERE OPERO OPILA OPILE OPILO OPIMA OPIMO OPINA OPINE OPINO OPIOS OPONE OPTAD OPTAN OPTAS OPTEN OPTES OPUSE OPUSO ORABA ORADA ORADO ORAIS ORAJE ORALE ORARA ORARE ORASE ORBES ORCAS ORCEN ORCES ORCOS OREAD OREAN OREAS OREEN OREES OREIS OREOS ORERO ORFOS ORFRE ORIBE ORIES ORINE ORINO ORIOL ORIVE ORLAD ORLAN ORLAS ORLEN ORLES ORLOS ORNAD ORNAN ORNAS ORNEA ORNEE ORNEN ORNEO ORNES OROYA ORTOS ORZAD ORZAN ORZAS OSABA OSAIS OSARA OSARE OSASE OSCAS OSCOS OSEAD OSEAN OSEAR OSEAS OSEEN OSEES OSEIS OSEOS OSETA OSTAS OTATE OTEAD OTEAN OTEAS OTEEN OTEES OTILA OTILE OTILO OTOBA OTO\xD1A OTO\xD1E OTRAS OTRES OTRIS OTROS OVABA OVAIS OVALA OVALE OVARA OVARE OVASE OVEIS OVIDO OVNIS OVOLO OVOSA OVOSO OVULA OVULE OXEAD OXEAN OXEAR OXEAS OXEEN OXEES OXIDA OXIDE OYERA OYERE OYESE OZENA OZONA PACAE PACAS PACAY PACED PACEN PACES PACIA PACIO PACON PACOS PACTA PACTE PACUS PAFIA PAFIO PAGAD PAGAN PAGAS PAGEL PAGOS PAGRO PAGUA PAGUE PAHUA PAICO PAINA PAIRA PAIRE PAJAS PAJEA PAJEE PAJEL PAJEO PAJES PAJIL PAJLA PAJON PAJOS PAJUZ PALAS PALAY PALCA PALEA PALEE PALEO PALES PALIA PALIE PALIS PALLA PALLE PALLO PALME PALON PALOR PALOS PALPA PALPE PALPI PALTO PAMBA PAMUE PANAS PANCA PANCO PANDO PANES PANGA PA\xD1IL PANJI PANOS PA\xD1OS PANSA PANUL PAPAD PAPAN PAPAS PAPAZ PAPEA PAPEE PAPEN PAPEO PAPES PAPIN PAPON PAPOS PAPUA PAPUS PARAD PARAL PARAN PARAO PARAS PARCE PAREA PAREE PAREL PAREN PARES PARID PARIO PARIS PARLA PARLE PARLO PARNE PAROS PARPA PARPE PARPO PARRE PARTA PARTI PASAD PASAN PASAS PASCO PASEA PASEE PASEN PASES PASIL PASMA PASME PASOS PASPA PASPE PASPO PATAO PATAS PATAX PATAY PATEA PATEE PATEO PATER PATES PATIS PATON PATOS PAUJI PAULA PAULE PAULO PAUSE PAUSO PAUTE PAUTO PAVAS PAVIA PAVON PAVOS PAXTE PAYAD PAYAN PAYAR PAYAS PAYEN PAYES PAYOS PAZCA PAZCO PAZOS PEAIS PEALA PEALE PEALO PEA\xD1A PEBRE PECAD PECAN PECAS PECES PECHA PECHE PECTA PECTE PECTO PEDIA PEDID PEDIO PEDIS PEDOS PEDRO PEEIS PEERA PEERE PEGAD PEGAN PEGAS PEGON PEGOS PEGUE PEIAN PEIAS PEIDO PEINA PEINO PEJES PEJIN PELAD PELAN PELAS PELDE PELEE PELEN PELEO PELES PELIS PELLA PELLO PELON PELOS PELTA PELUS PELVI PEMON PENAD PENAN PENAS PE\xD1AS PENDA PENDE PENDI PENDO PENEN PENES PENIS PENOL PE\xD1OL PENOS PE\xD1OS PENSA PENSE PENSO PEORA PEPAS PEPES PEPLA PEPLO PEPON PEPUS PERAS PERDE PERDI PERIS PERLE PERLO PEROS PERTA PERUS PESAD PESAN PESAS PESCE PESCO PESEN PESES PESGA PESGO PESIA PESOL PESOR PESOS PETAD PETAN PETAR PETAS PETEN PETES PETOS PETRA PEUCO PEUMO PIABA PIADA PIADO PIAFA PIAFE PIAFO PIAIS PIALA PIALE PIALO PIARE PIASE PIBAS PIBES PIBIL PICAD PICAL PICAN PICAS PICEA PICEO PICHO PICON PICOS PICUY PIDAN PIDAS PIDEN PIDES PIDIO PIDON PIEIS PIEJO PIFAS PIFIE PIFIO PIGRA PIGRE PIGRO PIGUA PIHUA PIJAS PIJES PIJIN PIJOS PIJUL PIJUY PILAD PILAN PILAS PILCA PILEN PILEO PILES PILLE PILME PILOS PINAL PINAS PI\xD1AS PINCE PI\xD1EN PINES PINNA PINOL PINOS PI\xD1OS PINTE PINZO PIOLA PIOLE PIOLO PIONA PIPAD PIPAN PIPAS PIPEN PIPES PIPIA PIPIE PIPIL PIPIO PIPIS PIPON PIPOS PIRAD PIRAN PIRAS PIRCA PIRCO PIREN PIRES PIRLA PIRON PIROS PIRRA PIRRE PIRRI PIRRO PIRUL PIRUS PISAD PISAN PISAS PISEN PISES PISON PISOS PISPA PISPE PISPO PISTE PITAD PITAL PITAN PITAO PITAS PITEA PITEE PITEN PITEO PITES PITIA PITIO PITIS PITON PITOS PIULA PIULE PIULO PIUNE PIURE PIVOT PLACE PLACI PLACO PLAGO PLA\xD1A PLA\xD1E PLA\xD1I PLA\xD1O PLAYE PLAYO PLECA PLEGA PLEGO PLEON PLEPA PLISA PLISE PLISO PLOMA PLOME PLUGO POBLA POBLE POBLO POBOS POBRA POCAS POCOS PODAD PODAL PODAN PODAS PODED PODEN PODES PODIA PODON PODRA PODRE POINO POISA POISE POLCO POLEX POLIN POLIR POLOS POMAS POMOS POMPO PONCI PONED PONEN PONES PONEY PONGA PONGO PONIA PONIS PONTO POPAD POPAN POPAR POPAS POPEL POPEN POPES POPOS POPTI PORCO PORGA PORGO POROS PORTA PORTO POSAD POSAN POSAS POSCA POSEA POSEE POSEI POSEN POSEO POSES POSMA POSMO POSON POSOS POSTA POTAD POTAN POTAR POTAS POTEA POTEE POTEN POTEO POTES POTOS POYAD POYAL POYAN POYAR POYAS POYEN POYES POYOS POZAS POZOS PRAOS PRAVA PRAVO PRAZA PREAR PREAS PREDA PRE\xD1A PRE\xD1E PRE\xD1O PREST PREVE PREVI PRIME PRIVA PRIVE PRIVO PROAL PROAS PROBA PROBE PROBO PROCO PROFA PROIS PROIZ PRORA PSIES PUABA PUADA PUADO PUAIS PUARA PUARE PUASE PUBER PUBES PUCIA PUDIN PUDIO PUDRA PUDRE PUDRI PUDRO PUDUS PUEDA PUEDE PUEDO PUEIS PUFOS PUGAS PUGNE PUGNO PUJAD PUJAN PUJAS PUJEN PUJES PUJOS PULAN PULAS PULEN PULES PULIA PULID PULIO PULIS PULLE PULLO PULSA PULSE PUMAS PUMBA PUNAN PUNAR PUNAS PUNCE PUNEN PUNES PUNGA PUNGE PUNGI PUNIA PUNID PUNIO PUNIR PUNIS PUNJA PUNJO PU\xD1OS PUNTE PUNZA PUNZO PUPAD PUPAN PUPAS PUPEN PUPES PUPOS PUPUS PURAS PUREA PUREE PUREO PURES PURGO PURIN PUROS PURRA PURRE PURRI PURRO PUSES PUSPA PUSPO PUTAL PUTAS PUTEA PUTEE PUTEO PUTON PUTOS PUYAD PUYAN PUYAR PUYAS PUYEN PUYES PUYON PUYOS PUZLE PUZOL PYMES QUECO QUEDE QUEJE QUEME QUEMI QUEMO QUEPA QUEPO QUERE QUERO QUIAS QUIFS QUIJO QUILA QUIMA QUI\xD1A QUI\xD1E QUI\xD1O QUIOS QUIPA QUIPU QUISA QUISE QUISO QUITU QUIVI RABAS RABEA RABEE RABEO RABIE RABIL RABIO RABIS RABON RABOS RACEA RACEE RACEL RACEO RACHE RACHO RACOS RADAL RADAS RADES RADIA RADIE RAEIS RAERA RAERE RAFAL RAFAS RAFEA RAFEE RAFEO RAFES RAGUS RAIAN RAIAS RAICE RAIGA RAIGO RAIJO RAIZA RAIZO RAJAD RAJAN RAJAS RAJEN RAJES RAJON RALAS RALBA RALBE RALBO RALEE RALEO RALLA RALLE RALOS RALVA RALVE RALVO RAMAS RAMEA RAMEE RAMEO RAMIO RAMON RAMOS RAMPE RAMPO RANAS RA\xD1AS RANDA RANDS RANOS RA\xD1OS RAPAD RAPAN RAPAS RAPEN RAPES RAPOS RAPTA RAPTE RAQUE RARAS RAREA RAREE RAREO RAROS RASAD RASAN RASAS RASCA RASCO RASEN RASES RASGA RASIS RASOS RASPE RASPO RATAS RATEA RATEE RATEO RATOS RAULI RAUTA RAYAD RAYAN RAYAS RAYEN RAYES RAYON RAYOS RAZAS RAZIA REAJE REALA REAMA REAME REAMO REARA REARE REARO REATE REATO REBLA REBLE REBLO REBUS RECAE RECAI RECEN RECES RECLE RECRE RECTE REDAD REDAN REDAS REDEN REDES REDOL REDOR REDRO REFEZ REGAD REGAS REGID REGIS REGLE REGLO REGUE REHAZ REHUI REHUS REIAN REIAS REIDA REIDO REILA REILE REILO REINE REIRA REIRE REJAS REJIN REJOS REJUS RELEA RELEE RELEI RELEJ RELEO RELES RELSA RELSO RELVA RELVE RELVO REMAD REMAN REMAS REMEN REMES REMOS RENCA RENCO RENDA RENDE RENDI RENDO RENES RENGA RENGO RE\xD1IA RE\xD1ID RENIL RENIO RE\xD1IS RENOS RENTE RENTO REOCA REPON REPOS REPTA REPTE REPTO RESAL RESES RESPE RESTE RETAD RETAN RETAS RETEL RETES RETIN RETOR RETOS REUNA REUNE REUNI REUNO REVEA REVED REVEN REVEO REVIO REYAD REYAN REYAR REYAS REYEN REYES REZAD REZAN REZAS REZNO REZON REZOS RIAIS RIBAS RICAS RICEN RICES RICIA RICIO RICOS RIEGA RIELA RIELE RIELO RIERA RIERE RIESE RIFAD RIFAN RIFAS RIFEN RIFES RIGEN RIGES RIGIL RIGIO RIGUA RIGUE RIJAN RIJAS RIJOS RILAD RILAN RILAR RILAS RILEN RILES RIMAD RIMAN RIMAS RIMEN RIMES RIMUS RI\xD1AN RI\xD1AS RINDA RINDE RINDO RI\xD1EN RI\xD1ES RINGA RINGO RI\xD1ON RIPIA RIPIE RISAS RISCA RISOS RISPA RISPE RISPO RITMA RITME RITON RITOS RIZAD RIZAL RIZAN RIZAS RIZON RIZOS ROAIS ROANA ROANO ROBAD ROBAN ROBAS ROBDA ROBEN ROBES ROBIN ROBLA ROBLO ROBOS ROBRA ROBRE ROCAS ROCEA ROCEE ROCEN ROCEO ROCES ROCHE ROCIA ROCIE ROCOS RODAD RODAO RODAS RODEA RODEE RODIA RODIL RODOS ROEIS ROELA ROERA ROERE ROETE ROGAD ROGAS ROGOS ROGUE ROIAN ROIAS ROIDA ROIDO ROIGA ROIGO ROJAL ROJAS ROJEA ROJEE ROJEO ROJOS ROLAD ROLAN ROLAS ROLDA ROLDE ROLDO ROLEN ROLEO ROLES ROLLA ROLLE ROLOS ROMAS ROMIN ROMIS ROMOS ROMPA ROMPE ROMPI ROMPO RO\xD1AD RO\xD1AL RO\xD1AN RO\xD1AS RONCE RONDE RO\xD1EN RONES RO\xD1ES RO\xD1IA ROPAS RORAD RORAN RORAS ROREN RORES RORRO ROSAN ROSAR ROSAS ROSEA ROSEE ROSEN ROSEO ROSES ROSJO ROSON ROSOS ROSTA ROSTE ROSTI ROSTO ROTAD ROTAL ROTAN ROTAS ROTEN ROTES ROTOS ROUGE ROYAN ROYAS ROYOS ROZAD ROZAN ROZAS ROZNA ROZNE ROZNO ROZON ROZOS RUABA RUADA RUADO RUAIS RUARA RUARE RUASE RUBEA RUBEO RUBIN RUBIS RUCAD RUCAN RUCAR RUCAS RUCHA RUCHE RUCHO RUCOS RUDAS RUDOS RUEDE RUEGA RUEIS RUEJO RUE\xD1O RUFAS RUFON RUFOS RUGAD RUGAN RUGAR RUGAS RUGEN RUGES RUGIA RUGID RUGIO RUGIS RUGUE RUINE RUINO RUJAN RUJAS RUJIA RUJIE RUJIO RULAD RULAN RULAR RULAS RULEN RULES RULOS RUMBE RUMIA RUMIE RUMIO RUMIS RUMOS RU\xD1AD RU\xD1AN RU\xD1AR RUNAS RU\xD1AS RU\xD1EN RUNES RU\xD1ES RUNGA RUNGO RU\xD1IA RU\xD1ID RU\xD1IR RU\xD1IS RUNOS RUQUE RURRU RUSAS RUSES RUSOS RUSTA RUSTE RUSTI RUSTO RUTAD RUTAN RUTAR RUTAS RUTEN RUTES SABEA SABED SABEN SABEO SABES SABRA SABRE SACAD SACAN SACAS SACES SACHA SACHE SACIA SACIE SACIO SACON SACOS SAETE SAETI SAETO SAGAS SAGUS SAINA SAINE SAINO SAJAD SAJAN SAJAS SAJEN SAJES SAJIA SALAD SALAN SALAS SALDA SALDE SALEA SALEE SALEN SALEO SALEP SALES SALGA SALGO SALIA SALID SALIN SALIO SALIS SALLA SALLE SALLO SALME SALOL SALPA SALSO SALTA SALTE SAMAN SAMAS SAMBO SAMIA SAMIO SAMPA SANAD SANAN SANAS SA\xD1AS SANCO SANEA SANEE SANEN SANEO SANES SANGO SANIE SANJA SANJE SANJO SANOS SANSA SANSO SAPAS SAPEA SAPEE SAPEO SAPOS SAQUE SARAN SARDA SARDE SARDO SARIA SARIS SARZA SARZO SASAL SATAS SATIS SATOS SAUDI SAXEA SAXEO SAXOS SAYAS SAYON SAYOS SEAIS SEBES SEBOS SECAD SECAN SECAS SECON SECOS SECUA SEDAD SEDAN SEDAS SEDEA SEDEE SEDEN SEDEO SEDES SEGAD SEGAS SEGRI SEGUE SEGUI SEGUR SEIBO SEICO SEISE SEJES SELES SELLA SELLE SEMAS SEMIS SENAS SE\xD1AS SENES SENOS SENTA SENTE SENTI SENTO SEORA SEPAN SEPAS SEPES SEQUE SERAN SERAS SERBA SERBO SERES SERNA SERPA SERRA SERRE SERRO SERVI SESEA SESEE SESEN SESES SESGA SESIL SESIS SESMA SESMO SESOS SETAS SETOS SEXAD SEXAN SEXAS SEXEN SEXES SEXMA SEXMO SEXOS SHORT SHUAR SICLO SICUS SIDAS SIEGO SIFUE SIGAN SIGAS SIGNA SIGNE SIGUA SIGUE SIJES SIJUS SILBE SILES SILFO SILGA SILGO SILOS SIMAS SIMON SIMPA SIMUN SINGA SINGO SINOS SIOUX SIPES SIQUE SIRAS SIRGA SIRGO SIRIN SIRLE SIROS SIRTE SIRVA SIRVE SIRVO SISAD SISAN SISAS SISCA SISEA SISEE SISEN SISES SISON SITAS SITIA SITIE SITOS SITUA SITUE SITUO SOASA SOASE SOASO SOBAD SOBAN SOBAS SOBEN SOBEO SOBES SOBON SOBOS SOBRO SOCAS SOCAZ SOCHE SOCOL SODAS SOFAS SOFIS SOGAS SOGUN SOJAS SOLAD SOLAS SOLDA SOLDE SOLDO SOLEA SOLEE SOLEN SOLES SOLIA SOLIO SOLOS SOLTA SOLTE SOLTO SOMAS SOMOS SONAD SO\xD1AD SONAS SO\xD1AS SONDE SONDO SONES SONIO SONTA SONTO SOPAD SOPAN SOPAS SOPEA SOPEE SOPEN SOPEO SOPES SOPIE SOPLA SOPLE SOPON SORBA SORBE SORBI SORBO SORCE SORES SORNE SORNO SOROR SOROS SORRA SOSAL SOSAR SOSAS SOSIA SOSOS SOTAD SOTAN SOTAR SOTAS SOTEN SOTES SOTIL SOTOL SOTOS SOVOZ SOYAS SPORT SPRAY STAND SUABA SUABO SUATA SUATO SUAZI SUBAN SUBAS SUBEN SUBEO SUBES SUBIA SUBID SUBIO SUBIS SUBTE SUCHE SUCOS SUCUS SUDAD SUDAN SUDAS SUDEN SUDES SUELE SUENA SUE\xD1A SUENE SUE\xD1E SUFIS SUFRA SUFRE SUFRI SUFRO SUIDO SUITA SUITE SULAS SULCO SULLA SUMAD SUMAN SUMAS SUMEN SUMES SUMIA SUMID SUMIO SUMIS SUMOS SUMUS SUNCA SUNCO SUPER SUPLA SUPLE SUPLI SUPLO SUPON SUPRA SURAS SURCA SURDA SURDE SURDI SURDO SURES SURFS SURGE SURGI SURIS SURJA SURJO SURTA SURTE SURTI SURTO SUSES SUTAS SUTES SUYAS SUYOS SUZON TABAS TABEA TABES TABIS TABLE TABLO TABON TABOR TABOS TABUS TACAR TACAS TACEN TACES TACET TACHE TACOS TAFIA TAFON TAFOS TAFUR TAGUA TAHAS TAIFA TAIGA TAIMA TAIME TAIMO TAIPA TAIRA TAIRE TAITA TAJAD TAJAN TAJAS TAJEE TAJEN TAJEO TAJES TAJIN TAJON TAJOS TAJUS TALAD TALAN TALAS TALEA TALED TALEN TALES TALIN TALMA TALOS TALPA TAMBA TAMBO TAMIL TAMOS TAMUL TA\xD1AD TA\xD1AN TA\xD1AR TANAS TA\xD1AS TANCA TANCO TA\xD1ED TA\xD1EN TA\xD1ER TANES TA\xD1ES TANGE TANGI TA\xD1IA TANJA TANJO TANOR TANOS TA\xD1OS TAPAD TAPAN TAPAS TAPEA TAPEE TAPEN TAPES TAPIN TAPIO TAPIS TAQUE TARAD TARAN TARAR TARAS TARAY TARCA TARCO TAREN TARES TARIN TARJE TARJO TARMA TASAD TASAN TASAS TASEN TASES TASIA TASIO TASIS TASTO TATAS TATAY TATOS TATUA TATUE TATUO TATUS TAUCA TAUCO TAULA TAXIS TAYOS TAYUL TAZAD TAZAN TAZAS TEAME TEBEA TECAS TECES TECHA TECHE TECLE TECLO TECOL TEDAS TEFES TEGEA TEGEO TEGUA TEGUE TEHUL TEINA TEJAD TEJAN TEJAS TEJED TEJEN TEJES TEJIA TEJIO TEJOS TELAS TELES TELEX TEMAD TEMAN TEMAR TEMAS TEMED TEMEN TEMES TEMIA TEMIO TEMUS TENAS TE\xD1AS TENCA TENDE TENDI TENED TENES TENGA TENGO TE\xD1IA TE\xD1ID TENIO TENIS TE\xD1IS TENSE TENTA TENTE TENTO TEOSA TEOSO TEPES TEPUS TEPUY TEQUE TERNE TEROS TERSE TESAD TESAN TESAR TESAS TESEN TESES TESLA TESOS TESTA TESTE TESTO TETAD TETAN TETAS TETEN TETES TETON TETRA TETRO TEXES TEYAS TEYOS TEYUS TIACA TIBAR TIBES TIBIE TIBOR TICAS TICOS TIENE TIFAS TIFOS TIGUA TIGUE TIJAS TIJOS TIJUL TILAS TILDA TILDO TILES TILIA TILIN TILLA TILLE TILLO TILMA TILOS TIMAD TIMAN TIMAS TIMBO TIMEN TIMES TIMOL TIMOS TIMPA TI\xD1AN TINAS TI\xD1AS TINCA TINCO TINEA TI\xD1EN TINEO TI\xD1ES TINGE TINOS TIPAS TIPIS TIPOI TIPOS TIPOY TIQUE TIQUI TIRAD TIRAN TIRAS TIREN TIRES TIRIA TIRIO TIRON TIROS TIRRO TIRSO TIRTE TISTE TISUS TITAD TITAR TITAS TITEA TITEE TITEN TITEO TITES TITIL TITIS TITOS TIZAS TIZNA TIZNO TIZOS TLACO TOABA TOADA TOADO TOAIS TOARA TOARE TOASE TOBAR TOBAS TOCAD TOCAN TOCAS TOCEN TOCES TOCHA TOCHE TOCHO TOCIA TOCIO TOCON TOCOS TOCTE TODAS TODIA TODOS TOEIS TOESA TOFOS TOGAN TOGAR TOGAS TOGUE TOJAL TOJOS TOLAS TOLDA TOLDE TOLES TOLLA TOLLO TOLON TOMAD TOMAN TOMAS TOMEN TOMES TOMIN TOMON TOMOS TONAD TONAN TONAS TO\xD1AS TONCA TONDO TONEN TONES TONGA TO\xD1IL TONOS TOPAD TOPAN TOPAS TOPEA TOPEE TOPEN TOPEO TOPES TOPIA TOPIL TOPON TOPOS TOQUI TORAL TORAS TORCA TORCE TORCI TORCO TORDA TOREA TOREE TORES TORGA TORGO TORIO TORNA TORNE TORON TOROS TORRA TORRO TOSAN TOSAS TOSED TOSEN TOSES TOSIA TOSIO TOSTE TOSTO TOTES TOTIS TOTOL TOVAS TOZAD TOZAL TOZAN TOZAR TOZAS TOZOS TRABE TRABO TRACE TRAED TRAEN TRAES TRAFA TRAGA TRAIA TRAJO TRAME TRAPA TRAPE TRARO TRATE TRAVO TREBO TREFE TREJA TREMA TREME TREMI TREMO TRENO TREOS TREPA TREPE TREPO TRIAD TRIAN TRIAS TRICE TRIEN TRIES TRIGA TRILE TRINA TRINE TRIOS TRIPE TRISA TRISE TRISO TRIZO TROCE TROJA TROJE TRONA TRONE TROPO TROTA TROTO TROVE TROVO TROZA TRUCA TRUES TRUFE TRUFO TRUJA TRUSA TRUST TUANI TUBAS TUBOS TUCAN TUCAS TUCIA TUCOS TUCUN TUDAS TUECA TUECO TUERA TUERO TUFEA TUFEE TUFEO TUFOS TUINA TULAR TULES TULIO TULLA TULLE TULLI TULLO TULPA TUMBE TUMOS TUNAD TUNAL TUNAN TUNAS TUNDE TUNDI TUNDO TUNEA TUNEE TUNEN TUNEO TUNES TUNJO TUNOS TUNTA TUPAN TUPAS TUPEN TUPES TUPIA TUPID TUPIN TUPIO TUPIR TUPIS TUPOS TURAR TURBE TURMA TURNA TURNE TURON TURRE TURRO TUSAD TUSAN TUSAR TUSAS TUSCA TUSCO TUSEN TUSES TUSON TUSOS TUTAS TUTEA TUTEE TUTES TUTOS TUTUS TUYAS TUYOS TUZAS UBICA UBICO UBIES UBIOS UBRES UCHUS UEBOS UFANE UGRES UJULE ULAGA ULALA ULPOS ULUAS ULULA ULULE ULULO UMERO U\xD1ADA U\xD1ADO UNAIS U\xD1AIS U\xD1ATE UNCEN UNCES UNCIA UNCID UNCIO UNCIS U\xD1ERA U\xD1ERE U\xD1ESE U\xD1ETA UNGEN UNGES UNGIA UNGID UNGIO UNGIS UNIAN U\xD1IAN UNIAS U\xD1IAS U\xD1IDA U\xD1IDO UNIRA U\xD1IRA UNIRE U\xD1IRE UNJAN UNJAS UNTAD UNTAN UNTAS UNTEN UNTES UNTOS U\xD1UDO UNZAN UNZAS UPABA UPADA UPADO UPAIS UPARA UPARE UPASE UPEIS UPUPA URAOS URAPE URATO URBES URCAS URCES URDAN URDAS URDEN URDES URDIA URDID URDIO URDIS URDUS UREAS URGEN URGES URGIA URGID URGIO URGIS URJAN URJAS URNAS URTAS URUBU URUCU URUGA USABA USAIS USAJE USARA USARE USASE USEIS USGOS USIAS USIER USINA USURE USURO UVEAS VACAD VACAN VACAS VACIE VACOS VADEA VADEE VADES VADOS VAFEA VAFEE VAFEO VAGAD VAGAN VAGAS VAGOS VAGUE VAHAD VAHAN VAHAR VAHAS VAHEA VAHEE VAHEN VAHEO VAHES VAHOS VAIDA VAJEA VAJEE VAJEO VALED VALEN VALES VALGA VALGO VALIO VALIS VALLO VALSA VALSE VALSO VALUA VALUE VALUO VAMOS VANAS VANEA VANEE VANEO VANOS VAQUE VARAD VARAN VARAS VAREA VAREE VAREN VAREO VARES VARIE VARIS VARIZ VASAS VASOS VATER VATES VAYAN VAYAS VEAIS VECEN VECES VEDAD VEDAN VEDAS VEDEN VEDES VEGAS VEIAN VEIAS VEJAD VEJAN VEJAS VEJEN VEJES VELAD VELAN VELAS VELAY VELEN VELES VELIS VELIZ VELOS VEMOS VENAS VENCE VENCI VENDE VENDI VENDO VENGA VENGO VENIA VENID VENIS VENTE VENTO VENZA VENZO VERAN VERAS VERES VERGE VERIA VERIL VERME VERMU VEROS VERSA VERSE VERTE VERTI VESTE VESTI VETAD VETAN VETAS VETEA VETEE VETEN VETEO VETES VETON VETOS VEZAD VEZAN VEZAR VEZAS VIADA VIAJA VIAJO VIBRA VIBRE VIBRO VICHA VICHE VICHO VICHY VICIA VICIE VICOS VICTO VIDAS VIDES VIDON VIENE VIERA VIERE VIESA VIESE VIGAS VIGIE VIGIO VILES VILOS VIMOS VINAL VI\xD1AS VINCO VINOS VINTA VIOLE VIOLO VIRAD VIRAN VIRAS VIREN VIREO VIRES VIRIO VIROL VIRON VISAD VISAN VISAS VISEA VISEE VISEN VISEO VISES VISOS VISTE VITAD VITAN VITAS VITEN VITES VITOR VITOS VITRE VIVAD VIVAN VIVAS VIVEN VIVES VIVIA VIVID VIVIO VIVIS VIVON VIVOS VOACE VOCEA VOCEE VOCEO VOCES VODCA VODUS VOILA VOLAD VOLAS VOLCA VOLCO VOLEE VOLEO VOLON VOLTS VOLVE VOLVI VOLVO VOMER VOSEA VOSEE VOTAD VOTAN VOTAS VOTEN VOTES VOTOS VOTRI VOZNA VOZNE VOZNO VUDUS VUELA VUELE VULTO VUSCO XECAS XINCA XOLAS XOLOS YABAS YACAL YACAS YACED YACEN YACES YACIA YACIO YACON YAGAN YAGAS YAITI YALES YAMAO YAMPA YANAS YANTE YANTO YAPAD YAPAN YAPAS YAPEN YAPES YAPUS YAQUE YAQUI YARES YAREY YAROS YATAI YATAY YATES YAYAS YAYOS YAZCA YAZCO YAZGA YAZGO YEBOS YECOS YEDGO YELGO YEMAS YENDO YENES YERGA YERGO YERME YEROS YERRA YERRE YERSI YERVO YESOS YETIS YEYES YEYOS YINAS YINES YIRAS YIROS YODAD YODAN YODAS YODEN YODES YODOS YOGAS YOGOS YOLAS YOQUI YORIS YOSES YOYOS YUCAS YUCPA YUDOS YUGOS YUMBA YUMBO YURAS YURES YUTAS YUTES YUYAL YUYOS ZACAS ZACEA ZACEE ZADES ZAFAD ZAFAN ZAFAS ZAFEN ZAFES ZAFON ZAFOS ZAGAS ZAJON ZALAS ZALBA ZALBO ZALEE ZALLA ZALLE ZALLO ZAMPE ZAMPO ZANAS ZANJE ZANJO ZAPAD ZAPAN ZAPAS ZAPEA ZAPEE ZAPEN ZAPES ZARBO ZARES ZARPE ZARPO ZATAS ZAYAS ZAZAS ZAZOS ZEDAS ZEGRI ZENES ZETAS ZINCS ZOCAD ZOCAN ZOCAS ZOCOS ZOLLE ZOMAS ZOMOS ZONAS ZONDA ZONTA ZONTO ZOPAS ZOPES ZOPOS ZOQUE ZOTES ZOTOL ZUDAS ZUELA ZUIZA ZULLE ZULLO ZULUS ZUMAS ZUMBE ZUMOS ZU\xD1AN ZUNAS ZU\xD1AS ZU\xD1EN ZU\xD1ES ZU\xD1IA ZU\xD1ID ZU\xD1IS ZU\xD1OS ZUNZA ZURAS ZURBA ZURCE ZURCI ZURDE ZURDI ZUREA ZUREE ZUROS ZURRE ZURRI ZURRO ZURZA ZURZO"
    });
    var sO = new jd({
        locale: "es",
        phrases: aO
    });
    const co = qr()
      , AO = e => m(co.Provider, {
        value: sO,
        get children() {
            return e.children
        }
    })
      , Z = () => {
        const e = Rt(co);
        if (!e)
            throw new Error("TranslationsContext has been used outside provider");
        return e
    }
      , ur = e => String(e)
      , Er = (e, t) => e === null ? t : e === "true"
      , ls = e => e
      , cs = (e, t) => e === null ? t : e
      , lt = e => String(e)
      , ct = (e, t) => {
        if (e === null)
            return t;
        {
            const r = Number(e);
            return isFinite(r) && r >= 0 ? r : t
        }
    }
      , us = e => e.join(",")
      , Es = (e, t) => e === null ? t : e ? e.split(",").map(r => {
        const n = Number(r);
        return isFinite(n) && n >= 0 ? n : 0
    }
    ) : []
      , ds = e => e.join(",")
      , Os = (e, t) => {
        if (e) {
            const r = Z()
              , n = e.split(",").map(o => o.toLocaleUpperCase(r.locale()));
            return n.every(o => o.length === He) ? n : t
        } else
            return t
    }
      , lO = {
        key: "dark_mode",
        getDefault: () => window.matchMedia("(prefers-color-scheme: dark)").matches,
        serialize: ur,
        deserialize: Er
    }
      , cO = {
        key: "colorblind",
        getDefault: () => !1,
        serialize: ur,
        deserialize: Er
    }
      , uO = {
        key: "vibration",
        getDefault: () => !0,
        serialize: ur,
        deserialize: Er
    }
      , EO = {
        key: "enter_bs_reversed",
        getDefault: () => !1,
        serialize: ur,
        deserialize: Er
    }
      , dO = {
        key: "achievement_notifs",
        getDefault: () => !0,
        serialize: ur,
        deserialize: Er
    }
      , OO = {
        key: "keyboard_height",
        getDefault: () => 1,
        serialize: e => String(e),
        deserialize: (e, t) => {
            if (e === null)
                return t;
            {
                const r = Number(e);
                return isFinite(r) && r <= sa && r >= Aa ? r : t
            }
        }
    }
      , SO = {
        key: "game_size",
        getDefault: () => "fit",
        serialize: e => e,
        deserialize: (e, t) => e === "fit" || e === "square" ? e : t
    }
      , fO = {
        key: "donation_time",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , RO = {
        key: "share_time",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , IO = {
        key: "achievements",
        getDefault: () => new Array(Tt.length).fill(0),
        serialize: e => e.join(","),
        deserialize: (e, t) => {
            if (e) {
                const r = e.split(",").map(o => {
                    const i = Number(o);
                    return isFinite(i) && i >= 0 ? i : 0
                }
                );
                let n = new Array(...r);
                return n.length < Tt.length && (n = n.concat(new Array(Tt.length - n.length).fill(0))),
                n
            } else
                return t
        }
    }
      , hO = {
        key: "last_daily",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , mO = {
        key: "last_free",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , vO = {
        key: "daily_guesses",
        getDefault: () => [],
        serialize: ds,
        deserialize: Os
    }
      , gO = {
        key: "free_guesses",
        getDefault: () => [],
        serialize: ds,
        deserialize: Os
    }
      , CO = {
        key: "daily_current",
        getDefault: () => "",
        serialize: ls,
        deserialize: cs
    }
      , NO = {
        key: "free_current",
        getDefault: () => "",
        serialize: ls,
        deserialize: cs
    }
      , yO = {
        key: "daily_history",
        getDefault: () => new Array(K + 4).fill(0),
        serialize: us,
        deserialize: Es
    }
      , LO = {
        key: "free_history",
        getDefault: () => new Array(K + 4).fill(0),
        serialize: us,
        deserialize: Es
    }
      , TO = {
        key: "daily_current_streak",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , pO = {
        key: "free_current_streak",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , UO = {
        key: "daily_max_streak",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , DO = {
        key: "free_max_streak",
        getDefault: () => 0,
        serialize: lt,
        deserialize: ct
    }
      , Ss = {
        dark_mode: lO,
        colorblind: cO,
        vibration: uO,
        enter_bs_reversed: EO,
        achievement_notifs: dO,
        keyboard_height: OO,
        game_size: SO,
        donation_time: fO,
        share_time: RO,
        achievements: IO,
        last_daily: hO,
        daily_guesses: vO,
        daily_current: CO,
        daily_history: yO,
        daily_current_streak: TO,
        daily_max_streak: UO,
        last_free: mO,
        free_guesses: gO,
        free_current: NO,
        free_history: LO,
        free_current_streak: pO,
        free_max_streak: DO
    };
    function ae(e) {
        const t = Ss[e];
        try {
            return t.deserialize(window.localStorage.getItem(t.key), t.getDefault())
        } catch (r) {
            return t.getDefault()
        }
    }
    function Ie(e, t) {
        const r = Ss[e];
        try {
            window.localStorage.setItem(r.key, r.serialize(t))
        } catch (n) {}
    }
    const fs = () => {
        const e = new Date;
        return (e.getTime() - _r.getTime() + (_r.getTimezoneOffset() - e.getTimezoneOffset()) * Te.minute) / aa >> 0
    }
      , Se = (e, t, r) => {
        window.gtag && gtag(e, t, r)
    }
      , J = e => {
        la && e && navigator.vibrate(1)
    }
      , li = (e, t, r) => {
        if ("RelativeTimeFormat"in Intl) {
            const i = new Intl.RelativeTimeFormat(r.locale(),{
                numeric: "auto"
            })
              , a = t.valueOf() - e.valueOf();
            for (const s in Te) {
                const u = s;
                if (Math.abs(a) > Te[u] || s === "second")
                    return i.format(Math.round(a / Te[u]), u)
            }
            return `${a} ms`
        }
        const n = t.getTime() - e.getTime();
        let o = Math.floor(n / Te.hour);
        return o > 1 ? r.t("game.hoursDuration", {
            smart_count: o
        }) : (o = Math.floor(n / Te.minute),
        o > 1 ? r.t("game.minutesDuration", {
            smart_count: o
        }) : r.t("game.secondsDuration", {
            smart_count: Math.floor(n / Te.second)
        }))
    }
      , ci = () => new Intl.DateTimeFormat().resolvedOptions().timeZone
      , bO = e => {
        let t = e.length;
        for (; t--; ) {
            const r = Math.floor(Math.random() * t);
            [e[t],e[r]] = [e[r], e[t]]
        }
        return e
    }
    ;
    function gt(e, t) {
        return e + "_" + t
    }
    const ge = (e, t) => t[e].guesses.length === K || t[e].answers.filter(r => t[e].guesses.indexOf(r) >= 0).length === 4
      , Rs = (e, t) => {
        const r = t.split("")
          , n = e.split("")
          , o = new Array(He).fill("none")
          , i = {};
        for (let a = 0; a < He; a++)
            i[n[a]] = 0;
        for (let a = 0; a < He; a++)
            r[a] === n[a] && (r[a] = " ",
            i[n[a]] = 2,
            n[a] = " ",
            o[a] = "correct");
        for (let a = 0; a < He; a++)
            r.indexOf(n[a]) !== -1 && r[a] !== n[a] && n[a] !== " " && (i[n[a]] != 2 && (i[n[a]] = 1),
            r[r.indexOf(n[a])] = " ",
            o[a] = "diff");
        return o
    }
      , PO = (e, t) => {
        const r = [[], [], [], []];
        for (let n = 0; n < t.length; n++) {
            const o = e.indexOf(t[n]);
            for (let i = 0; i < e.length; i++)
                (i <= o || o === -1) && r[n].push(Rs(e[i], t[n]))
        }
        return r
    }
      , $n = (e, t, r) => {
        let n;
        const o = new Al(e);
        o.random_int31(),
        o.random_int31(),
        o.random_int31(),
        o.random_int31();
        do
            n = [t[o.random_int31() % t.length], t[o.random_int31() % t.length], t[o.random_int31() % t.length], t[o.random_int31() % t.length]];
        while (n[0] === n[1] || n[0] === n[2] || n[0] === n[3] || n[1] === n[2] || n[1] === n[3] || n[2] === n[3] || r.has(n[0]) || r.has(n[1]) || r.has(n[2]) || r.has(n[3]));
        return n
    }
    ;
    function MO(e) {
        const t = fs()
          , r = e.t("wordBank").split(" ")
          , n = e.t("allowed")
          , o = n ? n.split(" ") : []
          , i = e.t("blacklist")
          , a = i ? i.split(" ") : []
          , s = e.t("game.keyboard").split(`
`).map(c => c.split(" "))
          , u = e.t("game.keyboardReversed").split(`
`).map(c => c.split(" "))
          , l = {
            daily: {
                seed: ae("last_daily"),
                guesses: [...ae("daily_guesses")],
                answers: [],
                current: ae("daily_current"),
                states: [[], [], [], []],
                answersCorrect: [-1, -1, -1, -1],
                history: [...ae("daily_history")],
                currentStreak: ae("daily_current_streak"),
                maxStreak: ae("daily_max_streak"),
                extraCurrent: ""
            },
            free: {
                seed: ae("last_free"),
                guesses: [...ae("free_guesses")],
                answers: [],
                current: ae("free_current"),
                states: [[], [], [], []],
                answersCorrect: [-1, -1, -1, -1],
                history: [...ae("free_history")],
                currentStreak: ae("free_current_streak"),
                maxStreak: ae("free_max_streak"),
                extraCurrent: ""
            },
            wordBank: r,
            wordBankSet: new Set(r),
            allowed: o,
            allowedSet: new Set(o),
            blacklist: a,
            blacklistSet: new Set(a),
            alphabet: e.t("game.alphabet"),
            keyboard: s,
            keyboardReversed: u,
            darkMode: ae("dark_mode"),
            colorblind: ae("colorblind"),
            vibration: ae("vibration"),
            enterBsReversed: ae("enter_bs_reversed"),
            achievementNotifs: ae("achievement_notifs"),
            keyboardHeight: ae("keyboard_height"),
            gameSize: ae("game_size"),
            donationTime: ae("donation_time"),
            shareTime: ae("share_time"),
            achievements: ae("achievements").reduce( (c, E, R) => {
                const f = Tt[R];
                return It(Me({}, c), {
                    [f]: {
                        type: f,
                        index: R,
                        count: E,
                        thresholds: il[f]
                    }
                })
            }
            , {}),
            achievementsToNotify: []
        };
        ["daily", "free"].forEach(c => {
            const E = l[c];
            E.seed && (c === "free" || E.seed === t) ? Se("event", "restore", {
                mode: c,
                daily_seed: c === "daily" ? E.seed : void 0
            }) : (E.seed = c === "daily" ? t : Date.now(),
            E.guesses = [],
            E.current = "",
            E.extraCurrent = "",
            Se("event", "start", {
                mode: c,
                daily_seed: c === "daily" ? E.seed : void 0
            })),
            E.answers = $n(E.seed, l.wordBank, l.blacklistSet),
            E.states = PO(E.guesses, E.answers),
            E.answersCorrect = [0, 1, 2, 3].map(R => E.guesses.indexOf(E.answers[R])),
            l[c] = E
        }
        );
        const [A,d] = Ol(l);
        return re( () => {
            Ie("dark_mode", A.darkMode)
        }
        ),
        re( () => {
            Ie("colorblind", A.colorblind)
        }
        ),
        re( () => {
            Ie("vibration", A.vibration)
        }
        ),
        re( () => {
            Ie("enter_bs_reversed", A.enterBsReversed)
        }
        ),
        re( () => {
            Ie("achievement_notifs", A.achievementNotifs)
        }
        ),
        re( () => {
            Ie("keyboard_height", A.keyboardHeight)
        }
        ),
        re( () => {
            Ie("game_size", A.gameSize)
        }
        ),
        re( () => {
            Ie("donation_time", A.donationTime)
        }
        ),
        re( () => {
            Ie("share_time", A.shareTime)
        }
        ),
        re( () => {
            Ie("achievements", Tt.map(c => A.achievements[c].count))
        }
        ),
        ["daily", "free"].forEach(c => {
            re( () => {
                Ie(gt("last", c), A[c].seed)
            }
            ),
            re( () => {
                Ie(gt(c, "guesses"), A[c].guesses)
            }
            ),
            re( () => {
                Ie(gt(c, "current"), A[c].current)
            }
            ),
            re( () => {
                Ie(gt(c, "history"), A[c].history)
            }
            ),
            re( () => {
                Ie(gt(c, "current_streak"), A[c].currentStreak)
            }
            ),
            re( () => {
                Ie(gt(c, "max_streak"), A[c].maxStreak)
            }
            )
        }
        ),
        [A, d]
    }
    const uo = qr()
      , wO = e => {
        const t = Z()
          , [r,n] = MO(t)
          , o = (c, E) => {
            n(Oe(R => {
                ge(c, R) || (R[c].current.length < 5 ? R[c].current += E : R[c].extraCurrent += E)
            }
            ))
        }
          , i = c => {
            n(Oe(E => {
                E[c].current.length > 0 && !ge(c, E) && (E[c].current = E[c].current.slice(0, -1),
                E[c].extraCurrent = "")
            }
            ))
        }
          , a = c => {
            n(Oe(E => {
                for (let R of Object.values(E.achievements)) {
                    const f = E.achievements[R.type].count;
                    E.achievements[R.type].count = al[R.type](R, E);
                    const h = E.achievements[R.type].count;
                    c && E.achievements[R.type].thresholds.forEach(I => {
                        f < I && h >= I && E.achievementsToNotify.unshift([R.type, I, Date.now()])
                    }
                    )
                }
            }
            ))
        }
          , s = c => {
            n(Oe(E => {
                if (E[c].current.length === 5 && (r.wordBankSet.has(E[c].current) || r.allowedSet.has(E[c].current)) && !ge(c, E)) {
                    const R = E[c].current;
                    E[c].guesses.push(R),
                    E[c].current = "",
                    E[c].extraCurrent = "";
                    for (let f = 0; f < Be; f++) {
                        const h = E[c].guesses.indexOf(E[c].answers[f]);
                        (h === -1 || h === E[c].guesses.length - 1) && E[c].states[f].push(Rs(R, E[c].answers[f])),
                        E[c].answersCorrect[f] = E[c].guesses.indexOf(E[c].answers[f])
                    }
                    if (Se("event", "guess", {
                        mode: c,
                        daily_seed: c === "daily" ? E[c].seed : void 0,
                        word: R,
                        row: E[c].guesses.length
                    }),
                    ge(c, E)) {
                        const f = E[c].answersCorrect.reduce( (I, C) => I += C >= 0 ? 1 : 0, 0)
                          , h = {};
                        for (let[I,C] of E[c].guesses.entries())
                            h[`guess_${I + 1}`] = C;
                        if (f === 4) {
                            const I = Math.max(...E[c].answersCorrect);
                            E[c].history[I]++,
                            E[c].currentStreak++,
                            E[c].currentStreak > E[c].maxStreak && (E[c].maxStreak = E[c].currentStreak),
                            Se("event", "win", Me({
                                mode: c,
                                daily_seed: c === "daily" ? E[c].seed : void 0,
                                total_correct: f,
                                num_guesses: I + 1
                            }, h))
                        } else
                            E[c].history[K + f]++,
                            E[c].currentStreak > 0 && Se("event", "streak_reset", {
                                mode: c,
                                daily_seed: c === "daily" ? E[c].seed : void 0,
                                current_streak: E[c].currentStreak,
                                max_streak: E[c].maxStreak
                            }),
                            E[c].currentStreak = 0,
                            Se("event", "loss", Me({
                                mode: c,
                                daily_seed: c === "daily" ? E[c].seed : void 0,
                                total_correct: f,
                                num_guesses: E[c].guesses.length + 1
                            }, h));
                        a(!0)
                    }
                } else
                    E[c].current = "",
                    E[c].extraCurrent = ""
            }
            ))
        }
          , l = [r, {
            setDarkMode(c) {
                n(Oe(E => {
                    E.darkMode = c
                }
                ))
            },
            setColorblind(c) {
                n(Oe(E => {
                    E.colorblind = c
                }
                ))
            },
            setVibration(c) {
                n(Oe(E => {
                    E.vibration = c
                }
                ))
            },
            setEnterBsReversed(c) {
                n(Oe(E => {
                    E.enterBsReversed = c
                }
                ))
            },
            setAchievementNotifs(c) {
                n(Oe(E => {
                    E.achievementNotifs = c
                }
                ))
            },
            setKeyboardHeight(c) {
                n(Oe(E => {
                    E.keyboardHeight = c
                }
                ))
            },
            setGameSize(c) {
                n(Oe(E => {
                    E.gameSize = c
                }
                ))
            },
            sendKey(c, E) {
                if (E.ctrlKey)
                    return !1;
                if (E.key === "Backspace")
                    return i(c),
                    !0;
                if (E.key === "Enter")
                    return s(c),
                    !0;
                if (E.key) {
                    const R = E.key.toLocaleUpperCase(t.locale());
                    return r.alphabet.indexOf(R) === -1 ? !1 : (o(c, R),
                    !0)
                } else
                    return !1
            },
            addLetter: o,
            deleteLetter: i,
            submitCurrent: s,
            resetDailyIfOld() {
                const c = fs();
                c !== r.daily.seed && n(Oe(E => {
                    E.daily.seed = c,
                    E.daily.guesses = [],
                    E.daily.answers = $n(c, E.wordBank, E.blacklistSet),
                    E.daily.current = "",
                    E.daily.extraCurrent = "",
                    E.daily.states = [[], [], [], []],
                    E.daily.answersCorrect = [-1, -1, -1, -1]
                }
                ))
            },
            resetFree(c) {
                const E = c || new Date().getTime();
                n(Oe(R => {
                    if (!ge("free", R)) {
                        const f = R.free.answersCorrect.reduce( (I, C) => I += C >= 0 ? 1 : 0, 0)
                          , h = {};
                        for (let[I,C] of R.free.guesses.entries())
                            h[`guess_${I + 1}`] = C;
                        R.free.history[K + f]++,
                        R.free.currentStreak > 0 && Se("event", "streak_reset", {
                            mode: "free",
                            daily_seed: void 0,
                            current_streak: R.free.currentStreak,
                            max_streak: R.free.maxStreak
                        }),
                        R.free.currentStreak = 0,
                        Se("event", "loss", Me({
                            mode: "free",
                            daily_seed: void 0,
                            total_correct: f,
                            num_guesses: R.free.guesses.length + 1
                        }, h)),
                        Se("event", "reset", Me({
                            mode: "free",
                            daily_seed: void 0,
                            total_correct: f,
                            num_guesses: R.free.guesses.length + 1
                        }, h))
                    }
                    R.free.seed = E,
                    R.free.guesses = [],
                    R.free.answers = $n(E, R.wordBank, R.blacklistSet),
                    R.free.current = "",
                    R.free.extraCurrent = "",
                    R.free.states = [[], [], [], []],
                    R.free.answersCorrect = [-1, -1, -1, -1]
                }
                ))
            },
            getGameVariation: () => r.daily.seed === 67 ? "april_fools" : "default",
            updateDonationTime() {
                n(Oe(c => {
                    c.donationTime = Math.floor(Date.now() / 1e3),
                    a(!0)
                }
                ))
            },
            updateShareTime() {
                n(Oe(c => {
                    c.shareTime = Math.floor(Date.now() / 1e3),
                    a(!0)
                }
                ))
            },
            runAchievementFuncs: a,
            clearAchievementNotifications() {
                n(Oe(c => {
                    c.achievementsToNotify = []
                }
                ))
            },
            cleanupAchievementNotifications() {
                n(Oe(c => {
                    const E = Date.now();
                    c.achievementsToNotify.some(R => R[2] + Do * Te.second <= E) && (c.achievementsToNotify = c.achievementsToNotify.filter(R => R[2] + Do * Te.second > E))
                }
                ))
            }
        }]
          , A = setInterval( () => {
            l[1].resetDailyIfOld()
        }
        , 1e3)
          , d = setInterval( () => {
            l[1].cleanupAchievementNotifications()
        }
        , 1e3);
        return De( () => {
            clearInterval(A),
            clearInterval(d)
        }
        ),
        m(uo.Provider, {
            value: l,
            get children() {
                return e.children
            }
        })
    }
      , le = () => {
        const e = Rt(uo);
        if (!e || !e.length)
            throw new Error("GamesDataContext has been used outside provider");
        return e
    }
      , BO = b('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><title></title><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>')
      , xO = b('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path></svg>')
      , GO = b('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>')
      , _O = b(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><title></title><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`)
      , FO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>')
      , $O = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>')
      , HO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>')
      , kO = b('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Fran\xE7ais</title><rect width="900" height="600" fill="#ED2939"></rect><rect width="600" height="600" fill="#fff"></rect><rect width="300" height="600" fill="#002395"></rect></svg>')
      , JO = b('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Espa\xF1ol</title><rect width="900" height="600" fill="#c60b1e"></rect><rect width="900" height="300" y="150" fill="#ffc400"></rect></svg>')
      , VO = b('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 3 2"><title>Italiano</title><rect width="3" height="2" fill="#009246"></rect><rect width="2" height="2" x="1" fill="#fff"></rect><rect width="1" height="2" x="2" fill="#ce2b37"></rect></svg>')
      , ZO = b('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 9 6"><title>Nederlands</title><rect fill="#21468B" width="9" height="6"></rect><rect fill="#FFF" width="9" height="4"></rect><rect fill="#AE1C28" width="9" height="2"></rect></svg>')
      , YO = b('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 5850 3900"><title>English</title><rect width="7410" height="3900" fill="#b22234"></rect><path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300"></path><rect width="2964" height="2100" fill="#3c3b6e"></rect><g fill="#fff"><g id="s18"><g id="s9"><g id="s5"><g id="s4"><path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"></path><use href="#s" y="420"></use><use href="#s" y="840"></use><use href="#s" y="1260"></use></g><use href="#s" y="1680"></use></g><use href="#s4" x="247" y="210"></use></g><use href="#s9" x="494"></use></g><use href="#s18" x="988"></use><use href="#s9" x="1976"></use><use href="#s5" x="2470"></use></g></svg>')
      , QO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>')
      , zO = b('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor"><title></title><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"></path></g></svg>')
      , qO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>')
      , WO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>')
      , jO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>')
      , KO = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>')
      , XO = b(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" class="h-6 w-6" fill="currentColor"><title></title><g><path d="M221.982,276.506h-46.106l-14.886-74.432h-24.98l-14.886,74.432H75.018c-5.659,0-10.247,4.588-10.247,10.247
				S69.359,297,75.018,297h146.964c5.659,0,10.247-4.588,10.247-10.247S227.641,276.506,221.982,276.506z"></path><path d="M67.845,121.42v-10.485c-37.612-2.567-37.659-25.779-37.691-44.644c-0.016-9.411-0.01-31.684-0.005-44.847h37.696V0.95
				H19.907C14.25,0.95,9.663,5.534,9.66,11.191c0,0-0.023,41.35,0,55.134c0.018,10.492,0.045,26.348,8.466,40.176
				c9.346,15.344,26.287,23.718,50.369,24.978C68.082,128.181,67.845,124.829,67.845,121.42z"></path><path d="M287.34,11.191c-0.003-5.657-4.59-10.241-10.247-10.241h-47.938v20.494h37.696c0.005,13.162,0.011,35.436-0.005,44.847
				c-0.032,18.865-0.079,42.078-37.691,44.644v10.485c0,3.409-0.237,6.761-0.65,10.06c24.082-1.261,41.023-9.634,50.369-24.978
				c8.421-13.829,8.448-29.684,8.466-40.176C287.363,52.541,287.34,11.191,287.34,11.191z"></path><path d="M136.108,95.505l-1.852,12.198l11.029-5.53c1.012-0.507,2.113-0.762,3.215-0.762s2.204,0.254,3.215,0.762l11.029,5.53
				l-1.852-12.198c-0.339-2.239,0.397-4.505,1.987-6.116l8.667-8.779l-12.173-2.008c-2.234-0.368-4.162-1.769-5.203-3.78
				l-5.67-10.958l-5.671,10.957c-1.041,2.01-2.969,3.411-5.203,3.78l-12.173,2.008l8.667,8.779
				C135.711,90.999,136.447,93.266,136.108,95.505z"></path><path d="M148.5,187.728c36.563,0,66.309-29.746,66.309-66.308V0H82.191v121.42C82.191,157.982,111.937,187.728,148.5,187.728z
				 M103.791,73.57c0.829-2.55,3.009-4.424,5.654-4.86l22.297-3.678l10.387-20.069c1.233-2.381,3.69-3.876,6.37-3.876
				s5.138,1.495,6.37,3.876l10.387,20.069l22.297,3.678c2.645,0.436,4.825,2.311,5.654,4.86c0.829,2.55,0.166,5.348-1.717,7.256
				l-15.876,16.081l3.392,22.342c0.402,2.651-0.706,5.304-2.876,6.88c-1.249,0.908-2.728,1.37-4.217,1.37
				c-1.097,0-2.198-0.251-3.214-0.762l-20.2-10.129l-20.2,10.129c-2.397,1.203-5.262,0.968-7.431-0.608
				c-2.17-1.576-3.278-4.229-2.876-6.88l3.392-22.342l-15.876-16.081C103.625,78.918,102.963,76.12,103.791,73.57z"></path></g></svg>`)
      , eS = b('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>')
      , tS = e => {
        const t = Z();
        return ( () => {
            const r = BO.cloneNode(!0)
              , n = r.firstChild
              , o = n.nextSibling
              , i = o.nextSibling
              , a = i.nextSibling
              , s = a.nextSibling;
            return Xe(r, e, !0, !0),
            O(n, () => t.t("app.appName")),
            x(u => {
                const l = e.colorblind ? "#fb923c" : "#00cc88"
                  , A = e.colorblind ? "#fb923c" : "#00cc88"
                  , d = e.colorblind ? "#60a5fa" : "#ffcc00";
                return l !== u._v$ && P(i, "fill", u._v$ = l),
                A !== u._v$2 && P(a, "fill", u._v$2 = A),
                d !== u._v$3 && P(s, "fill", u._v$3 = d),
                u
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
            }),
            r
        }
        )()
    }
      , rS = e => {
        const t = Z();
        return ( () => {
            const r = xO.cloneNode(!0)
              , n = r.firstChild;
            return O(n, () => t.t("game.enterKey")),
            x( () => P(r, "height", (e.height ? e.height : 16) + "px")),
            r
        }
        )()
    }
      , nS = e => {
        const t = Z();
        return ( () => {
            const r = GO.cloneNode(!0)
              , n = r.firstChild;
            return O(n, () => t.t("game.backspaceKey")),
            x( () => P(r, "height", (e.height ? e.height : 16) + "px")),
            r
        }
        )()
    }
      , oS = e => {
        const t = Z();
        return ( () => {
            const r = _O.cloneNode(!0)
              , n = r.firstChild;
            return O(n, () => t.t("tutorial.twitter")),
            x( () => P(r, "height", (e.height ? e.height : 16) + "px")),
            r
        }
        )()
    }
      , iS = () => {
        const e = Z();
        return ( () => {
            const t = FO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("header.help")),
            t
        }
        )()
    }
      , en = e => {
        const t = Z();
        return ( () => {
            const r = $O.cloneNode(!0)
              , n = r.firstChild;
            return Xe(r, e, !0, !0),
            O(n, () => t.t("header.moreOptions")),
            r
        }
        )()
    }
      , aS = e => {
        const t = Z();
        return ( () => {
            const r = HO.cloneNode(!0)
              , n = r.firstChild;
            return Xe(r, e, !0, !0),
            O(n, () => t.t("header.settings")),
            r
        }
        )()
    }
      , sS = e => ( () => {
        const t = kO.cloneNode(!0);
        return Xe(t, e, !0, !0),
        t
    }
    )()
      , AS = e => ( () => {
        const t = JO.cloneNode(!0);
        return Xe(t, e, !0, !0),
        t
    }
    )()
      , lS = e => ( () => {
        const t = VO.cloneNode(!0);
        return Xe(t, e, !0, !0),
        t
    }
    )()
      , cS = e => ( () => {
        const t = ZO.cloneNode(!0);
        return Xe(t, e, !0, !0),
        t
    }
    )()
      , uS = e => ( () => {
        const t = YO.cloneNode(!0);
        return Xe(t, e, !0, !0),
        t
    }
    )()
      , ES = () => {
        const e = Z();
        return ( () => {
            const t = QO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("game.share")),
            t
        }
        )()
    }
      , dS = () => {
        const e = Z();
        return ( () => {
            const t = zO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("game.share")),
            t
        }
        )()
    }
      , Is = () => {
        const e = Z();
        return ( () => {
            const t = qO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("game.copyClipboard")),
            t
        }
        )()
    }
      , ui = () => {
        const e = Z();
        return ( () => {
            const t = WO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("game.saveImage")),
            t
        }
        )()
    }
      , OS = () => {
        const e = Z();
        return ( () => {
            const t = jO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("game.newPractice")),
            t
        }
        )()
    }
      , SS = e => {
        const t = Z();
        return ( () => {
            const r = KO.cloneNode(!0)
              , n = r.firstChild;
            return O(n, ( () => {
                const o = T( () => e.mode === "daily");
                return () => o() ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
            }
            )()),
            r
        }
        )()
    }
      , hs = () => {
        const e = Z();
        return ( () => {
            const t = XO.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("header.achievements")),
            t
        }
        )()
    }
      , dr = () => {
        const e = Z();
        return ( () => {
            const t = eS.cloneNode(!0)
              , r = t.firstChild;
            return O(r, () => e.t("app.close")),
            t
        }
        )()
    }
      , fS = b('<div class="px-4 py-2 rounded bg-green-800 flex flex-row items-center pointer-events-auto cursor-pointer border-4 border-green-900 overflow-hidden max-w-[100%]"><div class="w-6"></div><div class="mx-4 flex flex-col flex-1 overflow-hidden"><h1 class="text-base text-white whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-300 whitespace-nowrap text-ellipsis overflow-hidden"></p></div><button type="button" class="text-gray-300 hover:text-white"></button></div>')
      , RS = b('<div class="absolute w-full top-4 pointer-events-none flex justify-center px-6"></div>')
      , IS = b('<div class="my-2 rounded-xl overflow-hidden flex flex-col bg-gray-300 dark:bg-gray-700"><div class="py-2 relative flex flex-row items-center"><div class="mx-4 flex-1 overflow-hidden"><h1 class="text-base whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-700 dark:text-gray-300"></p></div><p class="text-base mr-4">/</p></div></div>')
      , hS = b('<button type="button" class="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white mr-4 transition"></button>')
      , mS = b('<div class="flex flex-col"></div>')
      , vS = b('<div class="py-2 relative flex flex-row items-center border-t-2 border-t-gray-200 dark:border-t-gray-600"><div class="mx-4 flex-1 overflow-hidden"><h1 class="text-base whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-700 dark:text-gray-300"></p></div><p class="text-base mr-4">/</p></div>')
      , gS = b('<div id="achievements-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><h1 class="text-4xl mt-2 mb-2 text-center"></h1><h2 class="text-2xl text-center mb-4">/</h2></div></div>')
      , Ei = e => {
        const t = Z()
          , [r,n] = le();
        return ( () => {
            const o = fS.cloneNode(!0)
              , i = o.firstChild
              , a = i.nextSibling
              , s = a.firstChild
              , u = s.nextSibling
              , l = a.nextSibling;
            return fe(o, "click", e.onOpenAchievements, !0),
            O(i, m(hs, {})),
            O(s, () => e.title),
            O(u, () => e.subtitle),
            l.$$click = A => {
                A.stopPropagation(),
                J(r.vibration),
                n.clearAchievementNotifications()
            }
            ,
            O(l, m(dr, {})),
            x( () => P(l, "aria-label", t.t("app.close"))),
            o
        }
        )()
    }
      , CS = e => {
        const t = Z()
          , [r,n] = le();
        return ( () => {
            const o = RS.cloneNode(!0);
            return O(o, m(oa, {
                enterClass: "quordle-notif-enter",
                enterToClass: "quordle-notif-enter-anim",
                exitClass: "quordle-notif-exit",
                exitToClass: "quordle-notif-exit-anim",
                get children() {
                    return T( () => !!(r.achievementNotifs && r.achievementsToNotify.length === 1))() ? m(Ei, {
                        get title() {
                            return t.t(`achievements.${r.achievementsToNotify[0][0]}`, {
                                num: r.achievementsToNotify[0][1],
                                smart_count: r.achievementsToNotify[0][1]
                            })
                        },
                        get subtitle() {
                            return t.t(`achievements.${r.achievementsToNotify[0][0]}_desc`, {
                                num: r.achievementsToNotify[0][1],
                                smart_count: r.achievementsToNotify[0][1]
                            })
                        },
                        get onOpenAchievements() {
                            return e.onOpenAchievements
                        }
                    }) : T( () => !!(r.achievementNotifs && r.achievementsToNotify.length > 1))() ? m(Ei, {
                        get title() {
                            return t.t("achievements.achievementAndXOthers", {
                                achievement: t.t(`achievements.${r.achievementsToNotify[0][0]}`, {
                                    num: r.achievementsToNotify[0][1],
                                    smart_count: r.achievementsToNotify[0][1]
                                }),
                                smart_count: r.achievementsToNotify.length - 1
                            })
                        },
                        get subtitle() {
                            return t.t(`achievements.${r.achievementsToNotify[0][0]}_desc`, {
                                num: r.achievementsToNotify[0][1],
                                smart_count: r.achievementsToNotify[0][1]
                            })
                        },
                        get onOpenAchievements() {
                            return e.onOpenAchievements
                        }
                    }) : null
                }
            })),
            o
        }
        )()
    }
      , NS = e => {
        const t = Z()
          , [r,n] = le()
          , [o,i] = Q(!1)
          , a = T( () => r.achievements[e.achievement])
          , s = T( () => a().thresholds.find(A => a().count < A) || a().thresholds[a().thresholds.length - 1])
          , u = T( () => a().count / s() * 100);
        return ( () => {
            const l = IS.cloneNode(!0)
              , A = l.firstChild
              , d = A.firstChild
              , c = d.firstChild
              , E = c.nextSibling
              , R = d.nextSibling
              , f = R.firstChild;
            return O(c, () => t.t(`achievements.${e.achievement}`, {
                num: s(),
                smart_count: s()
            })),
            O(E, () => t.t(`achievements.${e.achievement}_desc`, {
                num: s(),
                smart_count: s()
            })),
            O(R, () => Math.min(a().count, s()), f),
            O(R, s, null),
            O(A, ( () => {
                const h = T( () => a().thresholds.length > 1);
                return () => h() && ( () => {
                    const I = hS.cloneNode(!0);
                    return I.$$click = () => {
                        J(r.vibration),
                        i(!o())
                    }
                    ,
                    O(I, m(en, {})),
                    x(C => {
                        const N = !!o()
                          , g = o();
                        return N !== C._v$ && I.classList.toggle("rotate-180", C._v$ = N),
                        g !== C._v$2 && P(I, "aria-expanded", C._v$2 = g),
                        C
                    }
                    , {
                        _v$: void 0,
                        _v$2: void 0
                    }),
                    I
                }
                )()
            }
            )(), null),
            O(l, ( () => {
                const h = T( () => !!(o() && a().thresholds.length > 1));
                return () => h() && ( () => {
                    const I = mS.cloneNode(!0);
                    return O(I, () => a().thresholds.filter(C => C !== s()).map(C => {
                        const N = a().count / C * 100;
                        return ( () => {
                            const g = vS.cloneNode(!0)
                              , L = g.firstChild
                              , p = L.firstChild
                              , y = p.nextSibling
                              , v = L.nextSibling
                              , S = v.firstChild;
                            return O(p, () => t.t(`achievements.${e.achievement}`, {
                                num: C,
                                smart_count: C
                            })),
                            O(y, () => t.t(`achievements.${e.achievement}_desc`, {
                                num: C,
                                smart_count: C
                            })),
                            O(v, () => Math.min(a().count, C), S),
                            O(v, C, null),
                            x( () => g.style.setProperty("background", `linear-gradient(90deg, ${r.darkMode ? "#065f46" : "#34d399"} ${N}%, transparent ${N}%)`)),
                            g
                        }
                        )()
                    }
                    )),
                    I
                }
                )()
            }
            )(), null),
            x( () => A.style.setProperty("background", `linear-gradient(90deg, ${r.darkMode ? "#065f46" : "#34d399"} ${u()}%, transparent ${u()}%)`)),
            l
        }
        )()
    }
      , yS = e => {
        const t = Z()
          , [r,n] = le();
        re( () => {
            n.runAchievementFuncs(!1)
        }
        );
        const o = T( () => nn.flatMap(s => r.achievements[s].thresholds.map(u => r.achievements[s].count >= u)).filter(s => s).length)
          , i = T( () => nn.reduce( (a, s) => a + r.achievements[s].thresholds.length, 0));
        return ( () => {
            const a = gS.cloneNode(!0)
              , s = a.firstChild
              , u = s.firstChild
              , l = s.nextSibling
              , A = l.firstChild
              , d = A.nextSibling
              , c = d.firstChild;
            return fe(u, "click", e.onCloseAchievements, !0),
            O(u, m(dr, {})),
            O(A, () => t.t("header.achievements")),
            O(d, o, c),
            O(d, i, null),
            O(l, () => nn.map(E => m(NS, {
                achievement: E
            })), null),
            x(E => {
                const R = t.t("header.achievements")
                  , f = t.t("app.close");
                return R !== E._v$3 && P(a, "aria-label", E._v$3 = R),
                f !== E._v$4 && P(u, "aria-label", E._v$4 = f),
                E
            }
            , {
                _v$3: void 0,
                _v$4: void 0
            }),
            a
        }
        )()
    }
    ;
    Ge(["click"]);
    var ms = {
        exports: {}
    };
    /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
    (function(e) {
        (function() {
            var t = {}.hasOwnProperty;
            function r() {
                for (var n = [], o = 0; o < arguments.length; o++) {
                    var i = arguments[o];
                    if (!!i) {
                        var a = typeof i;
                        if (a === "string" || a === "number")
                            n.push(i);
                        else if (Array.isArray(i)) {
                            if (i.length) {
                                var s = r.apply(null, i);
                                s && n.push(s)
                            }
                        } else if (a === "object") {
                            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                n.push(i.toString());
                                continue
                            }
                            for (var u in i)
                                t.call(i, u) && i[u] && n.push(u)
                        }
                    }
                }
                return n.join(" ")
            }
            e.exports ? (r.default = r,
            e.exports = r) : window.classNames = r
        }
        )()
    }
    )(ms);
    var LS = ms.exports;
    const TS = "_AdContainer_b1aed_1";
    var di = {
        AdContainer: TS,
        "sticky-sidebar": "_sticky-sidebar_b1aed_7"
    };
    const pS = b("<div></div>")
      , Et = e => {
        const [t] = le()
          , [r,n] = Q("")
          , [o,i] = Q(0)
          , a = new ResizeObserver(l => {
            l.forEach(A => {
                let d = A.target;
                d && d instanceof HTMLElement && i(d.offsetTop)
            }
            )
        }
        );
        T( () => {
            if (e.align) {
                let l = e.alignThreshold ? e.alignThreshold : 0
                  , A = Math.max(o(), l);
                if (e.mode && ge(e.mode, t)) {
                    let d = 92;
                    window.innerWidth > 1194 && (A = Math.max(o() + d, l + d))
                }
                t.gameSize === "fit" ? n(`position: absolute; width: fit-content; left: 0; top: ${A}px;`) : n("margin-bottom: 25px;")
            }
        }
        );
        const s = () => {
            if (e.align) {
                let l = document.getElementById(e.align);
                l && a.observe(l)
            }
        }
          , u = () => {
            if (e.align) {
                let l = document.getElementById(e.align);
                l && a.unobserve(l)
            }
        }
        ;
        return xi( () => qe($t, null, function*() {
            s()
        })),
        De( () => qe($t, null, function*() {
            u()
        })),
        ( () => {
            const l = pS.cloneNode(!0);
            return O(l, () => e.children),
            x(A => {
                const d = e.id
                  , c = LS(e.cssClassName && e.cssClassName in di ? di[e.cssClassName] : "", e.className)
                  , E = r();
                return d !== A._v$ && P(l, "id", A._v$ = d),
                c !== A._v$2 && nr(l, A._v$2 = c),
                A._v$3 = Xn(l, E, A._v$3),
                A
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
            }),
            l
        }
        )()
    }
      , US = b('<div class="bg-new-blue dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"></div>')
      , DS = () => ( () => {
        const e = US.cloneNode(!0);
        return O(e, m(Et, {
            id: "footer-placement",
            cssClassName: "AdContainer",
            className: "mx-auto"
        })),
        e
    }
    )();
    function bS(e) {
        return e !== null && (typeof e == "object" || typeof e == "function")
    }
    function Oi(e, ...t) {
        return typeof e == "function" ? e(...t) : e
    }
    var vs = Object.entries
      , PS = Object.keys
      , MS = e => Wn() ? De(e) : e;
    function wS(e) {
        const t = Me({}, e)
          , r = {}
          , n = new Map
          , o = s => {
            const u = n.get(s);
            if (u)
                return u[0]();
            const l = Q(t[s], {
                name: typeof s == "string" ? s : void 0
            });
            return n.set(s, l),
            delete t[s],
            l[0]()
        }
          , i = (s, u) => {
            const l = n.get(s);
            if (l)
                return l[1](u);
            s in t && (t[s] = Oi(u, [t[s]]))
        }
        ;
        for (const s of PS(e))
            r[s] = void 0,
            Object.defineProperty(r, s, {
                get: o.bind(void 0, s)
            });
        return [r, (s, u) => (bS(s) ? Ce( () => {
            qn( () => {
                for (const [l,A] of vs(Oi(s, r)))
                    i(l, () => A)
            }
            )
        }
        ) : i(s, u),
        r)]
    }
    var BS = (e, t) => Object.entries(e).forEach( ([r,n]) => t(r, n));
    function gs(e, t, r, n) {
        return e.addEventListener(t, r, n),
        MS(e.removeEventListener.bind(e, t, r, n))
    }
    function xS(e) {
        let t = 0, r, n;
        return () => (n || Qn(o => {
            r = e(o),
            n = o
        }
        ),
        t++,
        Wn() && De( () => {
            t--,
            queueMicrotask( () => {
                t || !n || (n(),
                n = void 0,
                r = void 0)
            }
            )
        }
        ),
        r)
    }
    var GS = e => {
        const t = {};
        return vs(e).forEach( ([r]) => t[r] = !1),
        t
    }
      , _S = (e, t=!1, r=!0) => {
        const n = window.matchMedia(e);
        if (!r)
            return () => n.matches;
        const [o,i] = Q(n.matches);
        return gs(n, "change", () => i(n.matches)),
        o
    }
    ;
    function Eo(e, t={}) {
        var a;
        if (!window.matchMedia)
            return (a = t.fallbackState) != null ? a : GS(e);
        const {mediaFeature: r="min-width", watchChange: n=!0} = t
          , [o,i] = wS(( () => {
            const s = {};
            return BS(e, (u, l) => {
                const A = window.matchMedia(`(${r}: ${l})`);
                s[u] = A.matches,
                n && gs(A, "change", d => i(u, d.matches))
            }
            ),
            s
        }
        )());
        return o
    }
    _S.bind(null, "(prefers-color-scheme: dark)", !1, !0);
    const FS = b('<button type="button"></button>')
      , $S = b('<div class="px-4 py-2 text-center flex flex-col"><div class="text-3xl pb-2"></div></div>')
      , HS = b('<div class="flex items-center justify-center"><div class="ml-2"></div></div>')
      , kS = b('<div class="text-black dark:text-white text-2xl"></div>')
      , JS = b('<div class="mx-2.5 mt-1 px-4 py-2 text-center bg-rose-700 text-white text-xl rounded"></div>')
      , VS = e => ( () => {
        const t = FS.cloneNode(!0);
        return fe(t, "click", e.onClick, !0),
        O(t, () => e.children),
        x(r => {
            const n = `m-auto text-lg min-h-[40px] text-gray-900 bg-gray-300 border border-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-gray-600 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:focus:ring-gray-900 transition-colors ${e.class}`
              , o = e.ariaLabel;
            return n !== r._v$ && nr(t, r._v$ = n),
            o !== r._v$2 && P(t, "aria-label", r._v$2 = o),
            r
        }
        , {
            _v$: void 0,
            _v$2: void 0
        }),
        t
    }
    )()
      , ZS = e => {
        Eo(to);
        const t = Z()
          , [r,n] = le()
          , o = T( () => r[e.mode].answersCorrect.reduce( (l, A) => l += A >= 0 ? 1 : 0, 0))
          , i = T( () => new Date(_r.getTime() + (new Date().getTimezoneOffset() - _r.getTimezoneOffset()) * Te.minute + (r[e.mode].seed + 1) * aa))
          , [a,s] = Q(new Date)
          , u = setInterval( () => s(new Date), 1e3);
        return De( () => clearInterval(u)),
        T( () => ge(e.mode, r) ? ( () => {
            const l = $S.cloneNode(!0)
              , A = l.firstChild;
            return O(A, ( () => {
                const d = T( () => o() === 4);
                return () => d() ? t.t("game.complete") : ( () => {
                    const c = T( () => o() === 3);
                    return () => c() ? t.t("game.soClose") : t.t("game.betterLuck")
                }
                )()
            }
            )()),
            O(l, ( () => {
                const d = T( () => e.mode === "free");
                return () => d() ? m(VS, {
                    onClick: () => {
                        J(r.vibration),
                        n.resetFree()
                    }
                    ,
                    get ariaLabel() {
                        return t.t("game.newPractice")
                    },
                    get children() {
                        const c = HS.cloneNode(!0)
                          , E = c.firstChild;
                        return O(c, m(OS, {}), E),
                        O(E, () => t.t("game.newPractice")),
                        c
                    }
                }) : ( () => {
                    const c = kS.cloneNode(!0);
                    return O(c, () => t.t("game.nextDaily", {
                        duration: li(a(), i(), t)
                    })),
                    c
                }
                )()
            }
            )(), null),
            x(d => {
                const c = t.t("game.aria.gameCompleteBanner")
                  , E = {
                    "text-green-600 dark:text-green-500": o() === 4,
                    "text-amber-600 dark:text-amber-400": o() === 3,
                    "text-orange-600 dark:text-orange-500": o() === 2,
                    "text-rose-600": o() <= 1
                };
                return c !== d._v$3 && P(l, "aria-label", d._v$3 = c),
                d._v$4 = xe(A, E, d._v$4),
                d
            }
            , {
                _v$3: void 0,
                _v$4: void 0
            }),
            l
        }
        )() : e.mode === "daily" && i().getTime() - a().getTime() < Te.minute * 5 ? ( () => {
            const l = JS.cloneNode(!0);
            return O(l, () => t.t("game.dailyResetTimer", {
                duration: li(a(), i(), t)
            })),
            x( () => l.classList.toggle("animate-pulse", i().getTime() - a().getTime() < Te.second * 15)),
            l
        }
        )() : null)
    }
    ;
    Ge(["click"]);
    var Cs = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n()
        }
        )(Zt, function() {
            function r(l, A) {
                return typeof A == "undefined" ? A = {
                    autoBom: !1
                } : typeof A != "object" && (console.warn("Deprecated: Expected third argument to be a object"),
                A = {
                    autoBom: !A
                }),
                A.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type) ? new Blob(["\uFEFF", l],{
                    type: l.type
                }) : l
            }
            function n(l, A, d) {
                var c = new XMLHttpRequest;
                c.open("GET", l),
                c.responseType = "blob",
                c.onload = function() {
                    u(c.response, A, d)
                }
                ,
                c.onerror = function() {
                    console.error("could not download file")
                }
                ,
                c.send()
            }
            function o(l) {
                var A = new XMLHttpRequest;
                A.open("HEAD", l, !1);
                try {
                    A.send()
                } catch (d) {}
                return 200 <= A.status && 299 >= A.status
            }
            function i(l) {
                try {
                    l.dispatchEvent(new MouseEvent("click"))
                } catch (d) {
                    var A = document.createEvent("MouseEvents");
                    A.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                    l.dispatchEvent(A)
                }
            }
            var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Zt == "object" && Zt.global === Zt ? Zt : void 0
              , s = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
              , u = a.saveAs || (typeof window != "object" || window !== a ? function() {}
            : "download"in HTMLAnchorElement.prototype && !s ? function(l, A, d) {
                var c = a.URL || a.webkitURL
                  , E = document.createElement("a");
                A = A || l.name || "download",
                E.download = A,
                E.rel = "noopener",
                typeof l == "string" ? (E.href = l,
                E.origin === location.origin ? i(E) : o(E.href) ? n(l, A, d) : i(E, E.target = "_blank")) : (E.href = c.createObjectURL(l),
                setTimeout(function() {
                    c.revokeObjectURL(E.href)
                }, 4e4),
                setTimeout(function() {
                    i(E)
                }, 0))
            }
            : "msSaveOrOpenBlob"in navigator ? function(l, A, d) {
                if (A = A || l.name || "download",
                typeof l != "string")
                    navigator.msSaveOrOpenBlob(r(l, d), A);
                else if (o(l))
                    n(l, A, d);
                else {
                    var c = document.createElement("a");
                    c.href = l,
                    c.target = "_blank",
                    setTimeout(function() {
                        i(c)
                    })
                }
            }
            : function(l, A, d, c) {
                if (c = c || open("", "_blank"),
                c && (c.document.title = c.document.body.innerText = "downloading..."),
                typeof l == "string")
                    return n(l, A, d);
                var E = l.type === "application/octet-stream"
                  , R = /constructor/i.test(a.HTMLElement) || a.safari
                  , f = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((f || E && R || s) && typeof FileReader != "undefined") {
                    var h = new FileReader;
                    h.onloadend = function() {
                        var N = h.result;
                        N = f ? N : N.replace(/^data:[^;]*;/, "data:attachment/file;"),
                        c ? c.location.href = N : location = N,
                        c = null
                    }
                    ,
                    h.readAsDataURL(l)
                } else {
                    var I = a.URL || a.webkitURL
                      , C = I.createObjectURL(l);
                    c ? c.location = C : location.href = C,
                    c = null,
                    setTimeout(function() {
                        I.revokeObjectURL(C)
                    }, 4e4)
                }
            }
            );
            a.saveAs = u.saveAs = u,
            e.exports = u
        })
    }
    )(Cs);
    var YS = Cs.exports
      , QS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACLlBMVEUAAAAvfDEvfDBwmiGKqyBugBtwmSEvfDEvfjIudC56mCpwmSFwmSEvfDFxmyIwfDFvmCEvfDEvfTAvfDFwmSFwmSEvfTFwmSFwmSGqwhy1zxmftSVslyJwmSGftiVwmSGftSQvfDG40hgvfDG30hgufDAvfDAvfTFwmSAvfDKjuSMvfC9xmSAwfDAwfDCftSUvezBvmSG30RietiS30RhwmSFvmSAvfDFvmSEufDEvfDAwfDBwmSFxmSFVjieetSZvmCCgtyRwmyGgtiYwezChtSO1zxopfDC30RhZjya30hixyxwufDFikySDsSJwmSEufDEvfDEvfDJvmSEwezFhkiRfkSZvmSC20Rm30Ri20BhxmiEufDKgtCS40ReftSZWjimxyB2etSW40BijtiRwmCKftCVSjSm41BYzfzNwmSEvfDG30RiftSW1zxk2fy8zfjBfkiWjuiJpliK20BhAhCxGhiugtiRwmCEwfDExfTA8gi5DhSyowCA7gS5MiipKiCpPiilZjyalvCI+hC5jkySmvSFumCE5gS9XjidWjidmlSNrlyGsxB6uxxywyRuyzBpXkSxTjChajyZckCV0pyRhkySiuCOqwx6xyhtTkStIhyqbsyWXsSRtmCGavx2Wux2qyRtHii1+pCiEpydakCZtoyV6qyNtmCKpwR9PjyxmmStZlStvnSqRriaPrSV2nyWQtR5smyqZsSaUryZroSaBryJ/oSJoliKfvx8idSH9AAAAanRSTlMA/PUXBwL4PSAHBPTbz2tGDPnu5tayrI4sDfv5+e7o5N3UyaKTi4aBU1EwLCQaDPDcyLiyspSGeXhrY1xKRkRDPzg1KCcgGBL17ebl4dXKxsC/ube2sKmlpaKenJqThHJxYmFhW1lSOC8U7lHIBQAABMJJREFUWMO9lYVXWzEUxgOjFCYwQebu7u7u7u6SvNRGW9pS2iLt6IoMNhhjMGCwwdzlv1uS916T9BXdzn7ntDkvfd+Xm3uTW/DvSds+d+tIaWbI3Kxb2039lA9ZNQxCmJ7PLcaegJQpqy7kTFqWv7AP/dYpUCV35JA0NrMpHUqsNvW0dFZuzvAc8e303IVkehJMICv5xlcPg0bSN4J8w+SUpMsfgUkZlpXEN0kaRubAAXAo02Bwpr/aWhckjD46e6ekn9tPeafHZiVDBCGUahb0puGwf0SaPDQCOyIsHcoNNsF+E+siXy5EyeYG+XBAPEaMddxgGUzgflM57AwWJlO31Ac9iLGGG5AU1McidTFhDW8RQvdhS6jMF4xAkSaks0Ey8NoeoFqo01VMXiiCETqgCihShHRmc4NcCEMIWe8LeyhGzhYySaljE7GgD1IeIJ3UjLjBWvJDRZDqOQ/JhwVgbaF6r81jhYRyxJnDL4J0Ycud5ZoHInjtkFBIIg+pI+cYEELQsdtcVhTVjq2QgcLOQIR8h5DAQeEuTaQr11EDUiPPL1VDd+CTqluERMZwg1Mw9thuY5sssaEAZETZDuo1bSAQLEMyI3gzmQgDrG7s1bpCyJy08+Kyd8HykA0ZyYsbbCYJI+WxQ069E/UJP8tX2emr1atQ2+S0ob4ZtUiIgGP3IYmyF62v36BkzACcfaGi4uBDWnoXkvG2KoTfZUb96EWAk52CCMUupwe1/2hr/NoRX/OJQil9/sigNwORbKTxzqIoFow7kMqzAqp/ivGHuPJBoKKuJBo9vXGoaLAYabymAjf+qCWgjT42Yoz1CKy8VMPHig4jRAMHbhYSYGnA+JOuF2/cJNFhvbjnUoxt8YcC8vTBilTs8r+O4DB0hGDgx9gnJuC5fgdcUGbiHe6QMQZRXlFNN8btyRLglVtGYYlvWqbgcBwRvlNRJdVYX7AEuDF+jzRKZD09M+uBgHlGqhpBNRExPUtHh1erXxRKlCDCSSCROe8wW9bREG5TtFi+0S5oe/bkhdLKxYEQjLDEppqAzExFpMBNNtP+7tXnGub7SVva5UJOEgBjMZBZrkhYLBaF8xkygqzTqfc9JVPWp+1VeqbgqZa9Cp+T9j7elTg3ehRXV4bdzfECPNYv/SxZv3t/MrGlqtuBKR/1nlGMNFIyJP246UlW9hMxo7n5p9TtjDtI0zNoeaqoVIfdTPv85duADTlJy4lFudyQw3O63uFgY4229stnNv0yWlECC8QjENdjVvZKdfEvPtQLC4z6AgeuYldSXb2s9868OH6dz+v6UuynYYSZ/q0H9UpeXH9W0QjjUjUMwpKs1N71qTv1+q3U9X7cYGFhECbPB9mje93APKARr383djfG9TvIL3tmL+1RP80MZAOW+Eq6DV3PyDDPG2VUp+RtEPr6ZVVfhbFDz/+S+YCzRhYbL8FdRWtE7hraRQkTtgEB06zE9eckNBKaxEY3xlU0DMptIGPOIwUZMyN7zrQUMl5cABLYPV6pIXq/QgfCFWDAtOie2vYy9oAkXBvfgGkFLewArAAD5ybRVWsJnDoODILrE/x6AraAQbFtPP0bIVwCg2T+gTDfwODYsmICnroL/A1pRP6/+QOpnHr2k1gJNwAAAABJRU5ErkJggg=="
      , zS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB8lBMVEUAAAD/32X9tQL/4mX+tgP+tQH9tQL9tQL//wD/4mX+tQL/4mX+tQH/42X/tgL/tQP/42P/swD/5mP/4mX+tQL/4mX+tQL+tQL+tQL+tQL/42X+tQH/4mX9tQL9tgL/42X/4mX/uQv/tQL/tgP/4Gb/tAD/42X/32f/4mX/4mX+tQL/4mX/42X+tQP/4mX9tQL9tQL/4mX/tAL/tQP/4mX/tQP/4mT/twT/42X/twD/4GP/sgD/yCb+xib+tQL+tQL+xif/4mX+tAH/4mX9tQL/4mX/4Wb/4mX/42X/4WP/4Gb/tgP/4Gb/uAD/5GL//3/+tQL/4mX/iw3tazH+tAL+iQ/vby3xcSr9hxHubTDzdSb/jQ3+yzH6gRf8qwj9rwX/32H6vlTzgiL2jBv+wBn6pgz/kQv+sQP/31z/1UfyfSX2ex/4fhz2jhr3kxb7hBX8jhD/mQr+ogj/ngj9rQb+rwT8zVv1nUb/0T//qiz1eCP+vBD6nw7+pQb9swT+2GD/3Ff/0VT/zE73rk7/vkDveDf/rzL+xif0iB/3hBz2lhb3mRP/jxH8kg78qAr+qAb7yFr4tVL4tlH2qUz/1kv/1Un2pUf2oUHyiT7xiT74mTf/zTbwdyn+xCP8qR/7jRf6ixT8jBL5og7+uQr7pQr+nAm+IPFtAAAAUHRSTlMABKPry7SRgQH15ta7s3xPIBMN/Pr58+LW0LywlI2GhH52cF4pGxoV5N/bycXEpp2Xc2plWFVUQ0I7MSEK8O3n1rerqamObmhbTUtJMislAkJ++MAAAANFSURBVFjD7ZfnV9pQGIcp4EAU96h7a92rWkf33jcJyBIRaB2AinVba1urVq2je+/xf/bemx0SAn7rqc/H9+T55d73jpNoDvmPSOxMyS+8UnNg/0Q9gcisbz1Qxo2zBEd2U0+s+q0mbA5xGefTYtGrC7ORvbhD7iyyGYZLidHqGSUGrKyRiDWCJb86Kv3IZR0jrCLf+Zjg0HVG4V818sLqxuIG8nkKj6joaSlEZBqqIw/fQKhRWxkp4HY2oYouYsIxQh2jQh96WjNkA+Zeep6LKx2ysy/NJGpLS8L0J+sUZN3DFUbHTpbJdb+BkOPhB6RbrVb7HN7YbwbuAABkAq7pCFneU5TDZYHbyfJxdAzKNKaw4ZcQ8nio/kmS5hvgSZD4NfmEAvNWC8nwAPAUS64NHaHEOxfrTwEBRaJbC3ZfjqHXcMpudgLTQEi88OSm4Ga/eOURyHy/3CFoD0/PAhEtvF9pxGtth2s1T8uPFp7eB0JGzEBKM+d3GJheB1yTwTlGVkfLrt5FptcO3Ouvv0CUaLnp07zFfggIMLtXgDLn6M1rZPu18oO0hO4BnhlfP9y/3mWlgAIccGZg4dMX2SnfhTrG65YPiMMBeqX8Qdq3O5aW/GYgRzIOSFYK8CK9P0hCLBOikfm8vj0+IE7Bn0E+XBeMTdDXTQqBIhtxQAE93kFpwDN0AZAsI8KB2QM20gZbq8cBF1B1nHL4JAET8EFbeMBPGIvLuwAcxQFa9H4KHrf9sIAA5zu58jjFHO0pNqAZBdhhZUayiBQ1yQVM8wHssOCGycMBLai86YKJYsyfKQs3AL4Fy0t0aRiubB0OiKebuCezj2wy15B5i/bRyc7FAUWSF2/7/eMrdIKLeT/0edy7Tngz4CGdxgHFYt8PN49jy0w/+90G9T+zQAG6iQnS1Q9YYIe4QLOCzF9pJlHNRwWZFquTW4UDykTFbQeJ2FfX64qgjygXn4Ags0aRSIpLSE3XsLQBEb9DpHNqVtHNaYyv6NWIaAdRkqWPr7gp84VXEY2bpy3vVvqsOq4i52nbuvsUXDpArVlqdCm4puvYVacvR+KeSi5OrdLEgEmwtwoSUntj/x1p1+dkJem15V3pmkP+Sf4Cz3zAF4yRDX4AAAAASUVORK5CYII=";
    const we = e => e < 0 ? "\u{1F7E5}" : `${e + 1}\uFE0F\u20E3`
      , Ir = (e, t) => {
        let r = "";
        if (!t || t.length === 0)
            return "\u2B1B\u2B1B\u2B1B\u2B1B\u2B1B";
        for (let n = 0; n < t.length; n++)
            e === "default" ? t[n] === "correct" ? r += "\u{1F7E9}" : t[n] === "diff" ? r += "\u{1F7E8}" : t[n] === "none" && (r += "\u2B1C") : e === "april_fools" && (t[n] === "correct" ? r += "\u{1F966}" : t[n] === "diff" ? r += "\u{1F9C0}" : t[n] === "none" && (r += "\u2B1C"));
        return r
    }
      , hr = e => e ? e === "correct" ? "#00cc88" : e === "diff" ? "#ffcc00" : e === "none" ? "#e0e0e0" : "#2d2d2d" : "#2d2d2d";
    function Qt(e, t, r, n, o, i) {
        const a = {
            tl: i,
            tr: i,
            br: i,
            bl: i
        };
        e.beginPath(),
        e.moveTo(t + a.tl, r),
        e.lineTo(t + n - a.tr, r),
        e.quadraticCurveTo(t + n, r, t + n, r + a.tr),
        e.lineTo(t + n, r + o - a.br),
        e.quadraticCurveTo(t + n, r + o, t + n - a.br, r + o),
        e.lineTo(t + a.bl, r + o),
        e.quadraticCurveTo(t, r + o, t, r + o - a.bl),
        e.lineTo(t, r + a.tl),
        e.quadraticCurveTo(t, r, t + a.tl, r),
        e.closePath(),
        e.fill()
    }
    const mr = (e, t, r, n, o, i, a) => qe($t, null, function*() {
        if ((i === "correct" || i === "diff") && a === "april_fools") {
            const s = new Image;
            s.width = n,
            s.height = o,
            s.src = i === "correct" ? QS : zS;
            try {
                yield s.decode(),
                e.save(),
                e.clip(),
                e.drawImage(s, t, r, n, o),
                e.restore()
            } catch (u) {}
        }
    })
      , Ns = (e, t, r, n) => {
        let o = "";
        e === "daily" ? o = n.t(t === "april_fools" ? "game.dailyQuordleFoolsShare" : "game.dailyQuordleShare", {
            num: r.seed
        }) + `
` + we(r.answersCorrect[0]) + we(r.answersCorrect[1]) + `
` + we(r.answersCorrect[2]) + we(r.answersCorrect[3]) : o = n.t(t === "april_fools" ? "game.practiceQuordleFoolsShare" : "game.practiceQuordleShare") + `
` + we(r.answersCorrect[0]) + we(r.answersCorrect[1]) + (" " + r.answers[0] + " - " + r.answers[1]) + `
` + we(r.answersCorrect[2]) + we(r.answersCorrect[3]) + (" " + r.answers[2] + " - " + r.answers[3]),
        o += `
` + n.t("app.webAddress");
        const i = o;
        o += `
`;
        let a = K - 1;
        r.answersCorrect[0] >= 0 && r.answersCorrect[1] >= 0 && (a = Math.max(r.answersCorrect[0], r.answersCorrect[1]));
        let s = K - 1;
        r.answersCorrect[2] >= 0 && r.answersCorrect[3] >= 0 && (s = Math.max(r.answersCorrect[2], r.answersCorrect[3]));
        for (let u = 0; u <= a; u++)
            o += Ir(t, r.states[0][u]) + " " + Ir(t, r.states[1][u]) + `
`;
        o += `
`;
        for (let u = 0; u <= s; u++)
            o += Ir(t, r.states[2][u]) + " " + Ir(t, r.states[3][u]) + `
`;
        return [o, i]
    }
      , vr = (e, t, r, n, o) => qe($t, null, function*() {
        const [i,a] = Ns(e, t, r, o);
        if (Se("event", "share", {
            mode: e,
            share_type: n,
            daily_seed: e === "daily" ? r.seed : void 0
        }),
        n === "clipboard")
            navigator.clipboard.writeText(i).then( () => alert(o.t("game.copiedResults"))).catch(s => {
                console.error(s),
                alert(o.t("game.errorCopy"))
            }
            );
        else if (n === "share")
            navigator.share({
                text: i
            }).catch(s => console.error(s));
        else if (n === "image" || n === "image_save") {
            const s = document.createElement("canvas");
            s.style.display = "none";
            let u = K - 1;
            r.answersCorrect[0] >= 0 && r.answersCorrect[1] >= 0 && (u = Math.max(r.answersCorrect[0], r.answersCorrect[1]));
            let l = K - 1;
            r.answersCorrect[2] >= 0 && r.answersCorrect[3] >= 0 && (l = Math.max(r.answersCorrect[2], r.answersCorrect[3]));
            const A = 64
              , d = A / 16
              , c = A / 8
              , E = .75
              , R = A / 4;
            s.width = (A + d) * 11 - d,
            s.height = (A + d) * (u + 1 + l + 1 + 4) - d;
            const f = s.getContext("2d");
            if (!f)
                return;
            f.fillStyle = "black",
            f.fillRect(0, 0, s.width, s.height);
            let h = 0
              , I = 0;
            for (let v = 0; v <= u; v++) {
                let S = r.states[0][v];
                for (h = 0; h < He; h++)
                    f.fillStyle = hr(S == null ? void 0 : S[h]),
                    Qt(f, h * (A + d), I * (A + d), A, A, c),
                    yield mr(f, h * (A + d), I * (A + d), A, A, S == null ? void 0 : S[h], t);
                for (S = r.states[1][v],
                h = 6; h < He + 6; h++)
                    f.fillStyle = hr(S == null ? void 0 : S[h - 6]),
                    Qt(f, h * (A + d), I * (A + d), A, A, c),
                    yield mr(f, h * (A + d), I * (A + d), A, A, S == null ? void 0 : S[h - 6], t);
                I++
            }
            f.font = A * E + "px Arial",
            f.textAlign = "center",
            f.textBaseline = "alphabetic",
            f.fillStyle = "#ffffff";
            const C = e === "daily" ? o.t(t === "april_fools" ? "game.dailyQuordleFoolsShare" : "game.dailyQuordleShare", {
                num: r.seed
            }) : o.t(t === "april_fools" ? "game.practiceQuordleFoolsShare" : "game.practiceQuordleShare");
            let N = f.measureText(C)
              , g = N.actualBoundingBoxAscent;
            f.fillText(C, s.width / 2, I * (A + d) + A - (A - g) / 2, s.width - R * 2),
            I++;
            for (let v = 0; v < 2; v++) {
                for (let S = 0; S < 2; S++) {
                    f.fillStyle = r.answersCorrect[S + v * 2] >= 0 ? "#00a6ed" : "#f8312f";
                    const M = S * 2 - 1
                      , H = s.width / 2 + M * (d / 2) + M * (A / 2);
                    if (Qt(f, H - A / 2, I * (A + d), A, A, c),
                    r.answersCorrect[S + v * 2] >= 0) {
                        f.textAlign = "center",
                        f.fillStyle = "#ffffff";
                        const w = String(r.answersCorrect[S + v * 2] + 1);
                        N = f.measureText(w),
                        g = N.actualBoundingBoxAscent + N.actualBoundingBoxDescent,
                        f.fillText(w, H, I * (A + d) + A - (A - g) / 2, A)
                    }
                }
                if (e === "free") {
                    f.textAlign = "right",
                    f.fillStyle = "#ffffff";
                    let S = r.answers[0 + v * 2];
                    N = f.measureText(S),
                    g = N.actualBoundingBoxAscent + N.actualBoundingBoxDescent,
                    f.fillText(S, s.width / 2 - d / 2 - A - R, I * (A + d) + A - (A - g) / 2, s.width / 2 - d - A - R * 2),
                    f.textAlign = "left",
                    S = r.answers[1 + v * 2],
                    N = f.measureText(S),
                    g = N.actualBoundingBoxAscent + N.actualBoundingBoxDescent,
                    f.fillText(S, s.width / 2 + d / 2 + A + R, I * (A + d) + A - (A - g) / 2, s.width / 2 - d - A - R * 2)
                }
                I++
            }
            f.textAlign = "center",
            f.textBaseline = "middle",
            f.fillStyle = "#ffffff",
            f.fillText(o.t("app.webAddress"), s.width / 2, I * (A + d) + A / 2, s.width),
            I++;
            for (let v = 0; v <= l; v++) {
                h = 0;
                let S = r.states[2][v];
                for (h = 0; h < He; h++)
                    f.fillStyle = hr(S == null ? void 0 : S[h]),
                    Qt(f, h * (A + d), I * (A + d), A, A, c),
                    yield mr(f, h * (A + d), I * (A + d), A, A, S == null ? void 0 : S[h], t);
                for (S = r.states[3][v],
                h = 6; h < He + 6; h++)
                    f.fillStyle = hr(S == null ? void 0 : S[h - 6]),
                    Qt(f, h * (A + d), I * (A + d), A, A, c),
                    yield mr(f, h * (A + d), I * (A + d), A, A, S == null ? void 0 : S[h - 6], t);
                I++
            }
            const L = yield new Promise(v => s.toBlob(v));
            if (!L)
                return;
            const p = `quordle-${e === "daily" ? "daily" : "practice"}-${r.seed}.png`
              , y = new File([L],p,{
                type: "image/png"
            });
            n === "image" ? navigator.share({
                files: [y],
                text: a
            }).catch(v => console.error(v)) : n === "image_save" && YS.saveAs(y, p)
        }
    })
      , qS = b('<button type="button" class="flex-1 text-sm min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 pt-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button>')
      , WS = b('<span><a class="underline" target="_blank"></a></span>')
      , jS = b('<div class="flex flex-col rounded-t-lg text-center px-4 pt-2 pb-4"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="flex gap-1 mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>')
      , fn = b('<div class="flex flex-col items-center justify-center"><div></div></div>')
      , KS = b('<div class="inline-flex" role="group"><button type="button" class="text-sm min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 pt-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400 transition-colors"><div class="flex flex-col items-center justify-center"><div></div></div></button><button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button></div>')
      , Rn = e => ( () => {
        const t = qS.cloneNode(!0);
        return fe(t, "click", e.onClick, !0),
        O(t, () => e.children),
        x( () => P(t, "aria-label", e.ariaLabel)),
        t
    }
    )()
      , gr = e => {
        const t = Z()
          , [r] = le()
          , n = T( () => r[e.mode].answersCorrect[e.gameIndex])
          , o = T( () => r[e.mode].answers[e.gameIndex]);
        return ( () => {
            const i = WS.cloneNode(!0)
              , a = i.firstChild;
            return O(a, o),
            x(s => {
                const u = {
                    "mr-4": e.marginSide === "right",
                    "ml-4": e.marginSide === "left",
                    "text-green-600 dark:text-green-500": r[e.mode].answersCorrect[e.gameIndex] >= 0,
                    "text-rose-600": r[e.mode].answersCorrect[e.gameIndex] < 0
                }
                  , l = t.t("game.aria.shareAnswer", {
                    word: o(),
                    board: e.gameIndex + 1,
                    solved: n() >= 0 ? t.t("game.aria.shareAnswerSolved", {
                        smart_count: n() + 1
                    }) : t.t("game.aria.shareAnswerUnsolved")
                })
                  , A = t.t("app.dictionaryUrl", {
                    word: r[e.mode].answers[e.gameIndex]
                })
                  , d = t.t("game.aria.shareAnswerLinkDesc");
                return s._v$ = xe(i, u, s._v$),
                l !== s._v$2 && P(i, "aria-label", s._v$2 = l),
                A !== s._v$3 && P(a, "href", s._v$3 = A),
                d !== s._v$4 && P(a, "aria-label", s._v$4 = d),
                s
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0
            }),
            i
        }
        )()
    }
      , XS = e => {
        const t = Z()
          , [r,n] = le()
          , [o,i] = Q(void 0)
          , [a,s] = Q(!1)
          , u = T( () => Ns(e.mode, n.getGameVariation(), r[e.mode], t)[0]);
        return ( () => {
            const l = jS.cloneNode(!0)
              , A = l.firstChild
              , d = A.firstChild
              , c = d.firstChild
              , E = d.nextSibling
              , R = E.firstChild
              , f = A.nextSibling
              , h = f.firstChild
              , I = h.firstChild
              , C = h.nextSibling
              , N = C.firstChild
              , g = f.nextSibling
              , L = g.nextSibling;
            return O(d, m(gr, {
                get mode() {
                    return e.mode
                },
                gameIndex: 0,
                marginSide: "right"
            }), c),
            O(c, () => we(r[e.mode].answersCorrect[0])),
            O(R, () => we(r[e.mode].answersCorrect[1])),
            O(E, m(gr, {
                get mode() {
                    return e.mode
                },
                gameIndex: 1,
                marginSide: "left"
            }), null),
            O(h, m(gr, {
                get mode() {
                    return e.mode
                },
                gameIndex: 2,
                marginSide: "right"
            }), I),
            O(I, () => we(r[e.mode].answersCorrect[2])),
            O(N, () => we(r[e.mode].answersCorrect[3])),
            O(C, m(gr, {
                get mode() {
                    return e.mode
                },
                gameIndex: 3,
                marginSide: "left"
            }), null),
            O(g, rl && m(Rn, {
                onClick: () => {
                    J(r.vibration),
                    n.updateShareTime(),
                    vr(e.mode, n.getGameVariation(), r[e.mode], "share", t)
                }
                ,
                get ariaLabel() {
                    return t.t("game.share")
                },
                get children() {
                    const p = fn.cloneNode(!0)
                      , y = p.firstChild;
                    return O(p, tl ? m(dS, {}) : m(ES, {}), y),
                    O(y, () => t.t("game.share")),
                    p
                }
            }), null),
            O(g, nl ? ( () => {
                const p = KS.cloneNode(!0)
                  , y = p.firstChild
                  , v = y.firstChild
                  , S = v.firstChild
                  , M = y.nextSibling;
                return y.$$click = () => {
                    J(r.vibration),
                    n.updateShareTime(),
                    vr(e.mode, n.getGameVariation(), r[e.mode], "image", t)
                }
                ,
                O(v, m(oS, {
                    height: 16
                }), S),
                O(S, () => t.t("game.shareImage")),
                M.$$click = () => {
                    J(r.vibration),
                    n.updateShareTime(),
                    vr(e.mode, n.getGameVariation(), r[e.mode], "image_save", t)
                }
                ,
                O(M, m(ui, {})),
                x(H => {
                    const w = t.t("game.shareImage")
                      , $ = t.t("game.saveImage");
                    return w !== H._v$8 && P(y, "aria-label", H._v$8 = w),
                    $ !== H._v$9 && P(M, "aria-label", H._v$9 = $),
                    H
                }
                , {
                    _v$8: void 0,
                    _v$9: void 0
                }),
                p
            }
            )() : m(Rn, {
                onClick: () => {
                    J(r.vibration),
                    n.updateShareTime(),
                    vr(e.mode, n.getGameVariation(), r[e.mode], "image_save", t)
                }
                ,
                get ariaLabel() {
                    return t.t("game.saveImage")
                },
                get children() {
                    const p = fn.cloneNode(!0)
                      , y = p.firstChild;
                    return O(p, m(ui, {}), y),
                    O(y, () => t.t("game.saveImage")),
                    p
                }
            }), null),
            O(g, ( () => {
                const p = T( () => !!o());
                return () => p() && m(Rn, {
                    onClick: () => {
                        J(r.vibration),
                        n.updateShareTime(),
                        Se("event", "share", {
                            mode: e.mode,
                            share_type: "clipboard",
                            daily_seed: e.mode === "daily" ? r[e.mode].seed : void 0
                        }),
                        s(!0);
                        const y = o();
                        if (y) {
                            y.select(),
                            document.execCommand("copy");
                            const v = window.getSelection && window.getSelection();
                            v && v.removeAllRanges(),
                            y.blur()
                        }
                        alert(t.t("game.copiedResults"))
                    }
                    ,
                    get ariaLabel() {
                        return t.t("game.copyClipboard")
                    },
                    get children() {
                        const y = fn.cloneNode(!0)
                          , v = y.firstChild;
                        return O(y, m(Is, {}), v),
                        O(v, () => t.t("game.copyClipboard")),
                        y
                    }
                })
            }
            )(), null),
            $e(i, L),
            O(L, u),
            x(p => {
                const y = t.t("game.aria.shareBanner")
                  , v = {
                    "absolute top-[100%]": !a()
                }
                  , S = t.t("game.copyClipboard");
                return y !== p._v$5 && P(l, "aria-label", p._v$5 = y),
                p._v$6 = xe(L, v, p._v$6),
                S !== p._v$7 && P(L, "aria-label", p._v$7 = S),
                p
            }
            , {
                _v$5: void 0,
                _v$6: void 0,
                _v$7: void 0
            }),
            l
        }
        )()
    }
    ;
    Ge(["click"]);
    const ef = b('<div class="quordle-box w-[20%]" role="cell"><div class="quordle-box-content"> </div></div>')
      , ys = e => {
        const [t,r] = Q(!1)
          , n = T( () => e.rowTemporalState === "present" || e.gameSize === "square" ? e.presentTileHeight : e.tileHeight);
        return re( () => {
            if (n() > 0) {
                const o = setTimeout( () => {
                    r(!0)
                }
                , 100);
                De( () => clearTimeout(o))
            }
        }
        ),
        ( () => {
            const o = ef.cloneNode(!0)
              , i = o.firstChild
              , a = i.firstChild;
            return x(s => {
                const u = {
                    "bg-box-correct": e.state === "correct" && !e.colorblind,
                    "bg-box-correct-alt": e.state === "correct" && e.colorblind,
                    "bg-box-diff": e.state === "diff" && !e.colorblind,
                    "bg-box-diff-alt": e.state === "diff" && e.colorblind,
                    "bg-gray-200 dark:bg-gray-700": e.state === "none" && e.rowTemporalState === "past",
                    "bg-gray-300 dark:bg-gray-600": e.rowTemporalState === "present" && !e.answered,
                    "bg-gray-100 dark:bg-gray-900": e.rowTemporalState === "future" || e.rowTemporalState === "never" || e.rowTemporalState === "present" && e.answered,
                    "text-black": e.state === "correct" || e.state === "diff",
                    "text-rose-600": e.state === "invalid",
                    "text-black dark:text-white": e.state === "none",
                    "quordle-heartbeat-anim dark:quordle-heartbeat-anim-dark": e.activeCol === e.gameCol && e.rowTemporalState === "present" && !e.answered,
                    "quordle-letter-anim": e.letter !== "" && e.rowTemporalState === "present",
                    "quordle-box-connected": e.rowTemporalState === "future" || e.rowTemporalState === "never",
                    "quordle-box-animate": t()
                }
                  , l = n() + "px"
                  , A = Math.min(n() * .8, 30) + "px"
                  , d = e.ariaLabel
                  , c = e.letter;
                return s._v$ = xe(o, u, s._v$),
                l !== s._v$2 && o.style.setProperty("height", s._v$2 = l),
                A !== s._v$3 && o.style.setProperty("font-size", s._v$3 = A),
                d !== s._v$4 && P(o, "aria-label", s._v$4 = d),
                c !== s._v$5 && (a.data = s._v$5 = c),
                s
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0
            }),
            o
        }
        )()
    }
      , tf = e => {
        const t = Z()
          , r = e.gameX + e.gameY * wt
          , [n] = le()
          , o = T( () => n[e.mode].current.length)
          , i = T( () => {
            const l = n[e.mode]
              , A = l.current
              , d = l.guesses;
            return e.gameRow <= e.answerIndex || e.answerIndex === -1 && e.gameRow < d.length || e.answerIndex === -1 && e.gameRow === d.length && e.gameCol < A.length
        }
        )
          , a = T( () => {
            const l = n[e.mode]
              , A = l.guesses
              , d = l.current;
            let c = "";
            if (i())
                e.gameRow < A.length ? c = A[e.gameRow][e.gameCol] : e.gameRow === A.length && (c = d[e.gameCol]);
            else
                return c;
            return c
        }
        )
          , s = T( () => {
            var E;
            const l = n[e.mode]
              , A = l.guesses
              , d = l.states
              , c = l.current;
            if (i()) {
                if (e.gameRow < A.length)
                    return ((E = d[r][e.gameRow]) == null ? void 0 : E[e.gameCol]) || "none";
                if (e.gameRow === A.length && c.length === 5 && !n.allowedSet.has(c) && !n.wordBankSet.has(c))
                    return "invalid"
            }
            return "none"
        }
        )
          , u = T( () => {
            const l = {
                letter: a() ? a() : t.t("game.aria.blank"),
                column: e.gameCol + 1
            };
            return e.answered || e.temporalState === "never" ? t.t("game.aria.tileNever", l) : e.temporalState === "future" ? t.t("game.aria.tileFuture", l) : s() === "invalid" ? t.t("game.aria.tileInvalid", l) : e.temporalState === "present" ? t.t("game.aria.tilePresent", l) : s() === "diff" ? t.t("game.aria.tileDiff", l) : s() === "none" ? t.t("game.aria.tileNone", l) : t.t("game.aria.tileCorrect", l)
        }
        );
        return m(ys, {
            get state() {
                return s()
            },
            get letter() {
                return a()
            },
            get gameRow() {
                return e.gameRow
            },
            get gameCol() {
                return e.gameCol
            },
            get rowTemporalState() {
                return e.temporalState
            },
            get activeCol() {
                return o()
            },
            get colorblind() {
                return n.colorblind
            },
            get currentRow() {
                return n[e.mode].guesses.length
            },
            get tileHeight() {
                return e.tileHeight
            },
            get presentTileHeight() {
                return e.presentTileHeight
            },
            get answered() {
                return e.answered
            },
            get gameSize() {
                return n.gameSize
            },
            get ariaLabel() {
                return u()
            }
        })
    }
    ;
    function rf(e) {
        if (typeof window != "undefined" && window.navigator)
            return !!navigator.userAgent.match(e)
    }
    const Ls = rf(/iP(ad|od|hone)/i)
      , nf = typeof window != "undefined" ? Ls && "download"in document.createElement("a") : null;
    if (Ls && !nf && typeof window != "undefined") {
        const e = document.querySelector("html");
        e.style.cursor = "pointer",
        e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)"
    }
    const W = []
      , of = e => {
        W.push(e)
    }
      , Si = e => {
        const t = W.findIndex(n => n.uniqueId === e);
        if (t === -1)
            return;
        const r = W[t];
        return W.splice(t, 1),
        r
    }
      , af = (e, t) => {
        const {containerEl: r, setOpen: n, onClickDocumentRef: o} = e;
        r.contains(t.target) || (_.closedByEvents = !0,
        n(!1),
        e.prevFocusedEl = null,
        e.addedFocusOutAppEvents = !1,
        document.removeEventListener("click", o))
    }
      , sf = (e, t) => {
        const {containerEl: r, setOpen: n, onFocusFromOutsideAppOrTabRef: o} = e;
        if (!!r) {
            if (r.contains(t.target)) {
                e.addedFocusOutAppEvents = !1,
                e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", o),
                e.prevFocusedEl = null;
                return
            }
            e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", o),
            e.prevFocusedEl = null,
            _.closedByEvents = !0,
            n(!1),
            e.addedFocusOutAppEvents = !1
        }
    }
      , Hn = e => {
        const {onFocusFromOutsideAppOrTabRef: t, onClickDocumentRef: r} = e;
        !e.prevFocusedEl || (e.prevFocusedEl.removeEventListener("focus", t),
        document.removeEventListener("click", r),
        e.prevFocusedEl = null,
        e.addedFocusOutAppEvents = !1)
    }
      , Ts = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "[tabindex]", "[contentEditable=true]"].reduce( (e, t, r) => `${e}${r ? "," : ""}${t}:not([tabindex="-1"])`, "");
    let In = !1;
    const Ue = ({from: e, stopAtRootElement: t, ignoreElement: r=[], allowSelectors: n, direction: o="forwards", wrap: i}) => {
        let a, s = !1;
        if (e instanceof Element)
            s = tr(e),
            a = e;
        else {
            if (e === "activeElement") {
                const f = document.activeElement;
                s = tr(f),
                a = fi(f)
            }
            typeof e == "object" && (e.getActiveElement && (a = fi(e.el)),
            s = e.isIframe)
        }
        const u = a
          , l = u.parentElement
          , A = s
          , d = u
          , c = Ts + (n ? "," + n.join(",") : "");
        if (!d)
            return null;
        const E = (f, h) => {
            let I = !1;
            const C = f.children
              , N = C.length;
            if (In && (I = !0),
            o === "forwards")
                for (let g = 0; g < N; g++) {
                    const L = C[g];
                    if (I) {
                        if (r.some(y => y === L))
                            continue;
                        const p = Qr(L, c, o);
                        if (p)
                            return p;
                        continue
                    }
                    if (L === t)
                        return null;
                    if (L === h) {
                        I = !0;
                        continue
                    }
                }
            else
                for (let g = N - 1; g >= 0; g--) {
                    const L = C[g];
                    if (I) {
                        if (r.some(y => y === L))
                            continue;
                        const p = Qr(L, c, o);
                        if (p)
                            return p;
                        continue
                    }
                    if (L === t)
                        return null;
                    if (L === h) {
                        I = !0;
                        continue
                    }
                }
            if (h = f,
            f = f.parentElement,
            !f && A) {
                const g = document.activeElement;
                g && tr(g) && (h = g,
                f = g.parentElement)
            }
            return f ? E(f, h) : null
        }
        ;
        let R = E(l, d);
        return !R && i && t && (In = !0,
        R = Ue({
            from: t,
            allowSelectors: n,
            direction: o,
            ignoreElement: r,
            wrap: !1
        })),
        In = !1,
        R
    }
      , ps = e => {
        try {
            return e.contentWindow
        } catch (t) {
            return null
        }
    }
      , Af = e => {
        const t = ps(e);
        return t ? t.document : null
    }
      , fi = e => {
        if (!tr(e))
            return e;
        const t = Af(e);
        return t && t.activeElement || e
    }
      , Ri = (e, t=window) => {
        const r = o => o.display === "none" || o.visibility === "hidden";
        if (e.style && r(e.style) || e.hidden)
            return !0;
        const n = t.getComputedStyle(e);
        return !!(!n || r(n))
    }
      , Qr = (e, t=Ts, r="forwards", n=window, o=!0) => {
        const i = A => {
            if (!A.matches(t))
                return {
                    el: A,
                    matched: !1
                };
            const d = A.getAttribute("tabindex");
            if (tr(A) && (!d || d === "-1")) {
                const c = ps(A);
                return c ? (A = c.document.documentElement,
                n = c,
                {
                    el: A,
                    matched: !1,
                    windowContext: c
                }) : {
                    el: A,
                    matched: !0
                }
            }
            return {
                el: A,
                matched: !0
            }
        }
        ;
        if (o) {
            if (Ri(e, n))
                return null;
            const {el: A, matched: d, windowContext: c} = i(e);
            return e = A,
            d ? e : (n = c || n,
            Qr(e, t, r, n, !1))
        }
        const a = e.shadowRoot;
        a && (e = a);
        const s = e.children
          , u = s.length
          , l = A => {
            if (Ri(A, n))
                return {
                    continue: !0
                };
            const {el: d, matched: c, windowContext: E} = i(A);
            if (A = d,
            n = E || n,
            c)
                return {
                    returnVal: A
                };
            const R = Qr(A, t, r, n, !1);
            return R ? {
                returnVal: R
            } : null
        }
        ;
        if (r === "forwards")
            for (let A = 0; A < u; A++) {
                let d = s[A];
                const c = l(d);
                if (c) {
                    if (c.continue)
                        continue;
                    if (c.returnVal)
                        return c.returnVal
                }
            }
        else
            for (let A = u - 1; A >= 0; A--) {
                let d = s[A];
                const c = l(d);
                if (c) {
                    if (c.continue)
                        continue;
                    if (c.returnVal)
                        return c.returnVal
                }
            }
        return null
    }
      , tr = e => e.tagName === "IFRAME"
      , je = (e, t, r) => {
        for (let n = e.length - 1; n >= 0; n--) {
            const o = t(e[n]);
            if (o) {
                r(o);
                continue
            }
            return
        }
    }
      , kn = e => e.offsetHeight === 0 && e.offsetWidth === 0
      , ue = (e, {inputElement: t, type: r, subType: n}) => {
        var o;
        if (t === "menuPopup")
            return e.menuPopupEl;
        if (t === "menuButton")
            return ye(e.menuBtnEls);
        if (r === "focusElementOnOpen")
            return t === "firstChild" ? Ue({
                from: e.focusSentinelBeforeEl,
                stopAtRootElement: e.containerEl
            }) : typeof t == "string" ? (o = e.containerEl) == null ? void 0 : o.querySelector(t) : t instanceof Element ? t : t();
        if (t == null && r === "menuPopup")
            return e.containerEl ? e.menuPopupEl ? e.menuPopupEl : e.containerEl.children[1] : null;
        if (typeof t == "string" && r === "menuButton" || typeof t == "string")
            return document.querySelector(t);
        if (t instanceof Element)
            return t;
        if (typeof t == "function") {
            const i = t();
            if (i instanceof Element)
                return i;
            if (r === "closeButton")
                return e.containerEl ? e.containerEl.querySelector(i) : null
        }
        if (r === "focusElementOnClose") {
            if (!t)
                return null;
            switch (n) {
            case "tabForwards":
                return ue(e, {
                    inputElement: t.tabForwards
                });
            case "tabBackwards":
                return ue(e, {
                    inputElement: t.tabBackwards
                });
            case "click":
                return ue(e, {
                    inputElement: t.click
                });
            case "escapeKey":
                return ue(e, {
                    inputElement: t.escapeKey
                });
            case "scrolling":
                return ue(e, {
                    inputElement: t.scrolling
                })
            }
        }
        if (t == null)
            return null;
        if (Array.isArray(t))
            return t.map(i => ue(e, {
                inputElement: i,
                type: r
            }));
        for (const i in t) {
            const a = t[i];
            return ue(e, {
                inputElement: a
            })
        }
        return null
    }
    ;
    let Dt = !1;
    const lf = (e, t) => {
        const {timeouts: r, closeWhenMenuButtonIsClicked: n, focusedMenuBtn: o, onClickOutsideMenuButtonRef: i, setOpen: a, open: s, deadMenuButton: u} = e
          , l = t.currentTarget;
        if (_.focusedMenuBtns.forEach(A => A.el = null),
        document.removeEventListener("click", i),
        setTimeout( () => {
            document.addEventListener("click", i, {
                once: !0
            })
        }
        ),
        u) {
            _.addedDocumentClick = !0,
            setTimeout( () => {
                document.addEventListener("click", at, {
                    once: !0
                })
            }
            );
            return
        }
        if (e.menuBtnKeyupTabFired = !1,
        Dt && !s()) {
            Dt = !1;
            return
        }
        if (Dt = !1,
        _.addedDocumentClick = !1,
        document.removeEventListener("click", at),
        l.focus(),
        o.el = l,
        _.focusedMenuBtns.add(o),
        clearTimeout(r.containerFocusTimeoutId),
        clearTimeout(r.menuButtonBlurTimeoutId),
        r.containerFocusTimeoutId = null,
        s() || (l.addEventListener("focus", e.onFocusMenuButtonRef, {
            once: !0
        }),
        l.addEventListener("keydown", e.onKeydownMenuButtonRef),
        l.addEventListener("blur", e.onBlurMenuButtonRef)),
        !n) {
            a(!0);
            return
        }
        s() && (_.closedByEvents = !0),
        a(!s())
    }
      , cf = (e, t) => {
        const {containerEl: r, focusedMenuBtn: n, overlay: o, setOpen: i, timeouts: a, closeWhenMenuButtonIsClicked: s} = e;
        if (e.menuBtnKeyupTabFired) {
            e.menuBtnKeyupTabFired = !1;
            return
        }
        if (Dt && !s)
            return;
        if (!t.relatedTarget) {
            o || _.addedDocumentClick || (_.addedDocumentClick = !0,
            document.addEventListener("click", at, {
                once: !0
            }));
            return
        }
        if (Hn(e),
        !r || r.contains(t.relatedTarget))
            return;
        const u = () => {
            _.closedByEvents = !0,
            n.el = null,
            i(!1)
        }
        ;
        a.menuButtonBlurTimeoutId = window.setTimeout(u)
    }
      , uf = (e, t) => {
        const r = t.currentTarget;
        if (!e.open()) {
            je(W, n => {
                if (!n.containerEl.contains(r))
                    return n
            }
            , n => {
                _.focusedMenuBtns.forEach(o => o.el = null),
                _.closedByEvents = !0,
                n.setOpen(!1)
            }
            ),
            Dt = !1;
            return
        }
        Dt = !0
    }
      , Ef = e => {
        e.focusedMenuBtn.el = null
    }
      , df = (e, t) => {
        const {containerEl: r, setOpen: n, open: o, onKeydownMenuButtonRef: i, onBlurMenuButtonRef: a, mount: s, focusSentinelBeforeEl: u, focusSentinelAfterEl: l, ignoreMenuPopupWhenTabbing: A} = e
          , d = t.currentTarget;
        if (t.key !== "Tab" || (_.focusedMenuBtns.forEach(E => E.el = null),
        !o()))
            return;
        if (e.menuBtnKeyupTabFired = !0,
        t.key === "Tab" && t.shiftKey) {
            if (_.closedByEvents = !0,
            !s || d.nextElementSibling !== r) {
                t.preventDefault();
                let E = Ue({
                    from: d,
                    direction: "backwards",
                    ignoreElement: [r, u, l]
                });
                E && E.focus()
            }
            n(!1),
            d.removeEventListener("keydown", i),
            d.removeEventListener("blur", a);
            return
        }
        if (t.preventDefault(),
        A) {
            const E = Ue({
                from: d,
                direction: "forwards",
                ignoreElement: [r, u, l]
            });
            E && E.focus(),
            n(!1),
            d.removeEventListener("keydown", i),
            d.removeEventListener("blur", a);
            return
        }
        let c = Ue({
            from: u,
            stopAtRootElement: r
        });
        c ? c.focus() : r.focus(),
        c || (n(!1),
        c = Ue({
            from: u
        }),
        c && c.focus()),
        d.removeEventListener("keydown", i),
        d.removeEventListener("blur", a)
    }
      , Of = e => {
        const {closeWhenMenuButtonIsTabbed: t, timeouts: r, deadMenuButton: n, menuBtnEls: o} = e;
        if (n) {
            const i = ye(o);
            i.addEventListener("blur", e.onBlurMenuButtonRef),
            i.addEventListener("keydown", e.onKeydownMenuButtonRef),
            _.addedDocumentClick = !0,
            setTimeout( () => {
                document.addEventListener("click", at, {
                    once: !0
                })
            }
            );
            return
        }
        t || clearTimeout(r.containerFocusTimeoutId)
    }
      , ye = e => {
        if (!!e)
            return e.length <= 1 ? e[0] : e.find(t => {
                if (!(!t || kn(t)))
                    return t
            }
            )
    }
      , Us = ({focusedMenuBtn: e, timeouts: t, el: r}) => {
        e.el = r,
        r.addEventListener("blur", n => {
            const o = n.currentTarget;
            _.focusedMenuBtns.add(e),
            setTimeout( () => {
                !o.isConnected || (e.el = null)
            }
            )
        }
        , {
            once: !0
        })
    }
      , Sf = ({state: e, menuButton: t, open: r}) => {
        if (Array.isArray(t) && !t.length)
            return;
        const {focusedMenuBtn: n} = e
          , o = ue(e, {
            inputElement: t,
            type: "menuButton"
        });
        if (!o)
            return;
        e.menuBtnEls = Array.isArray(o) ? o : [o];
        const i = W.find(a => a.uniqueId === e.uniqueId);
        if (i && (i.menuBtnEls = e.menuBtnEls),
        e.deadMenuButton) {
            e.menuBtnEls.forEach(a => {
                a.addEventListener("click", e.onClickMenuButtonRef),
                a.addEventListener("mousedown", e.onMouseDownMenuButtonRef),
                a.addEventListener("focus", e.onFocusMenuButtonRef)
            }
            );
            return
        }
        e.menuBtnEls.forEach( (a, s, u) => {
            n.el && n.el !== a && (u.length > 1 ? !kn(a) : !0) && (n.el = a,
            a.focus({
                preventScroll: !0
            }),
            a.addEventListener("keydown", e.onKeydownMenuButtonRef)),
            a.setAttribute("type", "button"),
            a.addEventListener("click", e.onClickMenuButtonRef),
            a.addEventListener("mousedown", e.onMouseDownMenuButtonRef),
            r() && (!e.focusElementOnOpen || e.focusElementOnOpen === "menuButton" || e.focusElementOnOpen === e.menuBtnEls) && !kn(a) && a.addEventListener("blur", e.onBlurMenuButtonRef, {
                once: !0
            })
        }
        )
    }
      , Ds = (e, t) => {
        !e || !e.menuBtnEls || e.menuBtnEls.forEach(r => {
            e.deadMenuButton || r.removeEventListener("focus", e.onFocusMenuButtonRef),
            r.removeEventListener("blur", e.onBlurMenuButtonRef),
            t && (r.removeEventListener("click", e.onClickMenuButtonRef),
            r.removeEventListener("mousedown", e.onMouseDownMenuButtonRef))
        }
        )
    }
    ;
    let hn = !1
      , Jn = !1
      , yt = null
      , bs = 0
      , Vn = null
      , Pr = null;
    const _ = {
        closeByFocusSentinel: !1,
        closedBySetOpen: !1,
        addedDocumentClick: !1,
        documentClickTimeout: null,
        closedByEvents: !1,
        focusedMenuBtns: new Set,
        cursorKeysPrevEl: null
    }
      , at = e => {
        const t = e.target;
        je(W, r => {
            const n = ye(r.menuBtnEls);
            if (!(r.overlay || r.overlayElement || n && n.contains(t) || r.containerEl.contains(t)))
                return r
        }
        , r => {
            const {setOpen: n} = r;
            _.closedByEvents = !0,
            n(!1)
        }
        ),
        _.addedDocumentClick = !1
    }
      , Ps = e => {
        const t = W[W.length - 1];
        setTimeout( () => {
            const n = e.timeStamp - bs;
            if (!document.hasFocus() && n < 50) {
                je(W, o => o, o => {
                    const {setOpen: i} = o;
                    _.closedByEvents = !0,
                    i(!1)
                }
                );
                return
            }
        }
        );
        const r = n => {
            if (n.overlay || n.overlayEl || !n.closeWhenDocumentBlurs)
                return;
            ye(n.menuBtnEls).focus(),
            _.closedByEvents = !0,
            n.setOpen(!1)
        }
        ;
        t.overlay || setTimeout( () => {
            const n = document.activeElement;
            if (!n || n.tagName !== "IFRAME") {
                je(W, o => o, o => r(o));
                return
            }
            je(W, o => {
                const {containerEl: i} = o;
                if (i.contains(n)) {
                    Pr = n,
                    xs(),
                    document.addEventListener("visibilitychange", Bs);
                    return
                }
                return o
            }
            , o => {
                const {setOpen: i} = o;
                _.closedByEvents = !0,
                i(!1)
            }
            )
        }
        )
    }
      , Ms = e => {
        const {focusedMenuBtn: t, setOpen: r, menuBtnEls: n, cursorKeys: o, closeWhenEscapeKeyIsPressed: i, focusElementOnClose: a, timeouts: s, ignoreMenuPopupWhenTabbing: u, focusSentinelAfterEl: l, focusSentinelBeforeEl: A} = W[W.length - 1];
        if (e.key === "Tab") {
            if (u) {
                e.preventDefault();
                const E = e.shiftKey
                  , R = ye(n)
                  , f = Ue({
                    from: E ? A : l,
                    direction: E ? "backwards" : "forwards",
                    ignoreElement: R ? [R] : []
                });
                f && f.focus();
                return
            }
            bs = e.timeStamp
        }
        if (o && Rf(e),
        e.key !== "Escape" || !i)
            return;
        const d = ye(n)
          , c = ue({}, {
            inputElement: a,
            type: "focusElementOnClose",
            subType: "escapeKey"
        }) || d;
        c && (c.focus(),
        c === d && Us({
            focusedMenuBtn: t,
            timeouts: s,
            el: c
        })),
        _.closedByEvents = !0,
        r(!1)
    }
      , Oo = e => {
        const t = e.target;
        Vn !== t && je(W, r => {
            const {menuPopupEl: n} = r;
            return n.contains(t) ? (Vn = t,
            null) : r
        }
        , r => {
            const {setOpen: n, focusElementOnClose: o, menuBtnEls: i} = r
              , a = ye(i);
            _.closedByEvents = !0,
            n(!1);
            const s = ue({}, {
                inputElement: o,
                type: "focusElementOnClose",
                subType: "scrolling"
            }) || a;
            s && s.focus()
        }
        )
    }
      , ff = e => {
        Vn = null,
        !Jn && e && (Jn = !1,
        window.addEventListener("wheel", Oo, {
            capture: !0,
            passive: !0
        }),
        document.body.addEventListener("touchmove", ws)),
        !W.length && (document.addEventListener("keydown", Ms),
        window.addEventListener("blur", Ps))
    }
      , Ii = () => {
        W.length || (Jn = !1,
        _.addedDocumentClick = !1,
        _.cursorKeysPrevEl = null,
        window.clearTimeout(_.documentClickTimeout),
        _.documentClickTimeout = null,
        document.removeEventListener("keydown", Ms),
        document.removeEventListener("click", at),
        window.removeEventListener("blur", Ps),
        window.removeEventListener("wheel", Oo, {
            capture: !0
        }),
        document.body.removeEventListener("touchmove", ws))
    }
      , ws = () => {
        hn || (hn = !0,
        document.body.addEventListener("touchend", () => {
            hn = !1
        }
        , {
            once: !0
        }),
        window.addEventListener("scroll", Oo, {
            capture: !0,
            passive: !0,
            once: !0
        }))
    }
      , Rf = e => {
        const t = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
          , r = ["ArrowLeft", "ArrowRight"];
        if (!t.includes(e.key) || (e.preventDefault(),
        r.includes(e.key)))
            return;
        const {menuBtnEls: n, menuPopupEl: o, containerEl: i, focusSentinelBeforeEl: a, focusSentinelAfterEl: s, cursorKeys: u} = W[W.length - 1]
          , l = ye(n);
        let A = _.cursorKeysPrevEl || document.activeElement, d;
        e.key === "ArrowDown" ? d = "forwards" : d = "backwards",
        (A === l || A === o || A === i) && (e.key === "ArrowUp" ? (d = "backwards",
        A = s) : (d = "forwards",
        A = a));
        const c = typeof u == "object"
          , E = c && u.wrap;
        let R = Ue({
            from: A,
            direction: d,
            stopAtRootElement: o
        });
        if (!R && E) {
            const f = e.key === "ArrowDown" ? a : s;
            d = e.key === "ArrowDown" ? "forwards" : "backwards",
            R = Ue({
                from: f,
                direction: d,
                stopAtRootElement: i
            })
        }
        if (c && u.onKeyDown) {
            u.onKeyDown({
                currentEl: R,
                prevEl: _.cursorKeysPrevEl
            }),
            _.cursorKeysPrevEl = R;
            return
        }
        R && R.focus()
    }
      , Bs = () => {
        if (document.visibilityState === "visible" && yt != null) {
            xs();
            return
        }
        clearTimeout(yt)
    }
      , xs = () => {
        const t = () => {
            const r = document.activeElement;
            if (!!r) {
                if (Pr === r) {
                    yt = window.setTimeout(t, 250);
                    return
                }
                je(W, n => {
                    const {containerEl: o} = n;
                    if (r.tagName === "IFRAME") {
                        if (o && !o.contains(r))
                            return n;
                        Pr = r,
                        yt = window.setTimeout(t, 250)
                    }
                }
                , n => {
                    const {setOpen: o} = n;
                    _.closedByEvents = !0,
                    o(!1),
                    Pr = null,
                    yt = null,
                    document.removeEventListener("visibilitychange", Bs)
                }
                )
            }
        }
        ;
        yt = window.setTimeout(t, 250)
    }
      , If = e => {
        const {menuPopup: t} = e;
        e.menuPopupAdded || (e.menuPopupEl = ue(e, {
            inputElement: t,
            type: "menuPopup"
        }),
        e.menuPopupEl && (e.menuPopupAdded = !0,
        e.menuPopupEl.setAttribute("tabindex", "-1")))
    }
      , hi = e => {
        !e.menuPopupEl || !e.menuPopupAdded || (e.menuPopupEl = null,
        e.menuPopupAdded = !1)
    }
      , mi = e => {
        const {useShadow: t} = e
          , r = e.marker || document.createTextNode("")
          , n = e.mount || document.body;
        function o() {
            return () => e.popupChildren
        }
        const i = document.createElement("div")
          , a = t && i.attachShadow ? i.attachShadow({
            mode: "open"
        }) : i;
        Object.defineProperty(i, "host", {
            get() {
                return r.parentNode
            }
        }),
        O(a, o());
        const s = e.overlayChildren;
        return s && i.insertAdjacentElement("afterbegin", s),
        n.appendChild(i),
        e.ref && e.ref(i),
        e.onCreate != null && e.onCreate(n, i, r),
        e.stopComponentEventPropagation ? null : r
    }
      , hf = e => e.replace(/-./g, t => t.toUpperCase()[1])
      , mf = e => {
        let t;
        const [r,n] = Q()
          , o = jn( () => e.children)
          , {onBeforeEnter: i, onEnter: a, onAfterEnter: s, onBeforeExit: u, onExit: l, onAfterExit: A, appendToElement: d} = e;
        function c(h) {
            const I = e.name || "s"
              , C = hf(h) + "Class"
              , N = e[C];
            return N ? N.split(" ") : [`${I}-${h}`]
        }
        const E = h => d ? d === "menuPopup" ? ue({
            containerEl: h
        }, {
            inputElement: null,
            type: "menuPopup"
        }) : typeof d == "string" ? h.querySelector(d) : d : h;
        function R(h, I) {
            const C = c("enter")
              , N = c("enter-active")
              , g = c("enter-to")
              , L = E(h);
            i && i(L),
            L.classList.add(...C),
            L.classList.add(...N),
            requestAnimationFrame( () => {
                requestAnimationFrame( () => {
                    L.classList.remove(...C),
                    L.classList.add(...g),
                    a && a(L, p),
                    (!a || a.length < 2) && (L.addEventListener("transitionend", p, {
                        once: !0
                    }),
                    L.addEventListener("animationend", p, {
                        once: !0
                    }))
                }
                )
            }
            );
            function p() {
                L && (L.classList.remove(...N),
                L.classList.remove(...g),
                r() !== h && n(h),
                s && s(L))
            }
            n(h)
        }
        function f(h) {
            const I = c("exit")
              , C = c("exit-active")
              , N = c("exit-to")
              , g = E(h);
            if (!h.parentNode)
                return L();
            u && u(h),
            g.classList.add(...I),
            g.classList.add(...C),
            requestAnimationFrame( () => {
                g.classList.remove(...I),
                g.classList.add(...N)
            }
            ),
            l && l(g, L),
            (!l || l.length < 2) && (g.addEventListener("transitionend", L, {
                once: !0
            }),
            g.addEventListener("animationend", L, {
                once: !0
            }));
            function L() {
                g.classList.remove(...C),
                g.classList.remove(...N),
                r() === h && n(void 0),
                A && A(g)
            }
        }
        return zn(h => {
            for (t = o(); typeof t == "function"; )
                t = t();
            return Ce( () => (t && t !== h && R(t),
            h && h !== t && f(h),
            t))
        }
        ),
        [r]
    }
      , vi = (e, {isCleanup: t=!1}={}) => {
        document.removeEventListener("click", e.onClickDocumentRef),
        Ds(e, t)
    }
      , vf = (e, t) => {
        const {overlay: r, overlayElement: n, open: o, mount: i, setOpen: a, timeouts: s, stopComponentEventPropagation: u, focusedMenuBtn: l, menuButton: A, deadMenuButton: d} = e
          , c = t.relatedTarget;
        if (!r && !n && !!o() && !_.closedBySetOpen) {
            if (i && u) {
                _.addedDocumentClick || (_.addedDocumentClick = !0,
                document.addEventListener("click", at, {
                    once: !0
                }));
                return
            }
            if (!c) {
                if (W.find(E => E.overlay))
                    return;
                _.addedDocumentClick || (_.addedDocumentClick = !0,
                document.addEventListener("click", at, {
                    once: !0
                }));
                return
            }
            c === A && d || (s.containerFocusTimeoutId = window.setTimeout( () => {
                _.closedByEvents = !0,
                a(!1)
            }
            ))
        }
    }
      , gf = (e, t) => {
        const {timeouts: r} = e;
        clearTimeout(r.containerFocusTimeoutId),
        clearTimeout(r.menuButtonBlurTimeoutId),
        r.containerFocusTimeoutId = null
    }
      , Cf = e => {
        const {focusElementOnOpen: t, focusedMenuBtn: r} = e;
        if (t == null)
            return;
        const n = ue(e, {
            inputElement: t,
            type: "focusElementOnOpen"
        });
        n && setTimeout( () => {
            n.focus(),
            r.el = null
        }
        )
    }
      , Nf = e => {
        const {closeWhenOverlayClicked: t, menuPopupEl: r, focusElementOnClose: n, menuBtnEls: o} = e;
        if (!t) {
            r.focus();
            return
        }
        const i = ye(o)
          , a = ue(e, {
            inputElement: n,
            type: "focusElementOnClose",
            subType: "click"
        }) || i;
        a && a.focus(),
        je(W, s => {
            if (!s.overlayElement)
                return s
        }
        , s => {
            const {setOpen: u} = s;
            _.closedByEvents = !0,
            u(!1)
        }
        ),
        _.closedByEvents = !0,
        e.setOpen(!1)
    }
      , yf = ({parent: e, matchEl: t}) => {
        if (e === t)
            return !0;
        const r = n => {
            if (!n)
                return !1;
            const o = n.children[0];
            return o === t ? !0 : r(o)
        }
        ;
        return r(e)
    }
      , Lf = e => {
        const {enableLastFocusSentinel: t, menuBtnEls: r, containerEl: n, focusSentinelAfterEl: o} = e;
        if (t) {
            o.setAttribute("tabindex", "0");
            return
        }
        if (!r)
            return;
        const a = ye(r).nextElementSibling;
        yf({
            parent: a,
            matchEl: n
        }) || o.setAttribute("tabindex", "0")
    }
      , gi = (e, t, r) => {
        const {uniqueId: n, containerEl: o, menuBtnEls: i, focusSentinelBeforeEl: a, trapFocus: s, focusSentinelAfterEl: u, closeWhenMenuButtonIsTabbed: l, focusElementOnClose: A, mount: d, open: c, setOpen: E} = e
          , R = ye(i);
        W.forEach(I => window.clearTimeout(I.timeouts.containerFocusTimeoutId));
        const f = (I, C) => {
            je(W, N => {
                if (C && ye(N.menuBtnEls) === I && !N.closeWhenMenuButtonIsTabbed) {
                    R.addEventListener("focus", e.onFocusMenuButtonRef, {
                        once: !0
                    }),
                    R.addEventListener("keydown", e.onKeydownMenuButtonRef),
                    R.addEventListener("blur", e.onBlurMenuButtonRef, {
                        once: !0
                    });
                    return
                }
                if (N.uniqueId === n || !N.containerEl.contains(I))
                    return N
            }
            , N => {
                _.closedByEvents = !0,
                N.setOpen(!1)
            }
            ),
            I && I.focus()
        }
        ;
        if (!c())
            return;
        if (R && (r === o || r === R)) {
            Ue({
                from: a,
                direction: "forwards",
                stopAtRootElement: o
            }).focus();
            return
        }
        if (t === "before") {
            if (s) {
                Ue({
                    from: u,
                    direction: "backwards",
                    stopAtRootElement: o
                }).focus();
                return
            }
            if (l) {
                _.closedByEvents = !0,
                E(!1),
                R.focus();
                return
            }
            const I = ue(e, {
                inputElement: A,
                type: "focusElementOnClose",
                subType: "tabBackwards"
            }) || R;
            if (!e.menuBtnEls) {
                I.focus();
                return
            }
            f(I, !0);
            return
        }
        if (s) {
            Ue({
                from: a,
                stopAtRootElement: o
            }).focus();
            return
        }
        const h = ue(e, {
            inputElement: A,
            type: "focusElementOnClose",
            subType: "tabForwards"
        }) || Ue({
            from: R,
            ignoreElement: [o]
        });
        if (d) {
            f(h);
            return
        }
        h && h.focus(),
        _.closedByEvents = !0,
        E(!1)
    }
      , Tf = b('<div role="presentation"></div>')
      , pf = b('<div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div></div>')
      , Uf = e => {
        const t = e.modal || !1
          , {id: r, menuButton: n, menuPopup: o, focusElementOnClose: i, focusElementOnOpen: a, cursorKeys: s=!1, closeWhenMenuButtonIsTabbed: u=!1, closeWhenMenuButtonIsClicked: l=!0, closeWhenScrolling: A=!1, closeWhenDocumentBlurs: d=!1, closeWhenOverlayClicked: c=!0, closeWhenEscapeKeyIsPressed: E=!0, overlay: R=t, overlayElement: f=t, trapFocus: h=t, removeScrollbar: I=t, enableLastFocusSentinel: C=!1, mount: N=t ? "body" : void 0, show: g=!1, onToggleScrollbar: L, onOpen: p, deadMenuButton: y, ignoreMenuPopupWhenTabbing: v} = e
          , S = {
            mount: N,
            addedFocusOutAppEvents: !1,
            closeWhenOverlayClicked: c,
            closeWhenDocumentBlurs: d,
            closeWhenEscapeKeyIsPressed: E,
            closeWhenMenuButtonIsClicked: l,
            closeWhenMenuButtonIsTabbed: u,
            closeWhenScrolling: A,
            cursorKeys: s,
            focusElementOnClose: i,
            deadMenuButton: y,
            focusElementOnOpen: a,
            ignoreMenuPopupWhenTabbing: v,
            id: r,
            uniqueId: EA(),
            menuBtnId: "",
            focusedMenuBtn: {
                el: null
            },
            menuBtnKeyupTabFired: !1,
            menuButton: n,
            timeouts: {
                containerFocusTimeoutId: null,
                menuButtonBlurTimeoutId: null
            },
            upperStackRemovedByFocusOut: !1,
            menuPopup: o,
            closeByDismissEvent: !1,
            menuPopupAdded: !1,
            enableLastFocusSentinel: C,
            overlay: R,
            overlayElement: f,
            removeScrollbar: I,
            trapFocus: h,
            hasFocusSentinels: !!i || R || !!f || h || C,
            open: e.open,
            setOpen: e.setOpen,
            onClickOutsideMenuButtonRef: () => Ef(S),
            onClickDocumentRef: U => sf(S, U),
            onClickOverlayRef: () => Nf(S),
            onFocusInContainerRef: U => gf(S),
            onFocusOutContainerRef: U => vf(S, U),
            onBlurMenuButtonRef: U => cf(S, U),
            onClickMenuButtonRef: U => lf(S, U),
            onMouseDownMenuButtonRef: U => uf(S, U),
            onFocusFromOutsideAppOrTabRef: U => af(S, U),
            onFocusMenuButtonRef: () => Of(S),
            onKeydownMenuButtonRef: U => df(S, U),
            refContainerCb: U => {
                if (f && (U.style.zIndex = "1000",
                t)) {
                    U.style.pointerEvents = "none",
                    U.style.position = "relative";
                    const D = k => {
                        k.style.pointerEvents = "all"
                    }
                    ;
                    requestAnimationFrame( () => {
                        const k = U.querySelector('[role="dialog"]');
                        if (!k) {
                            const G = U.children;
                            if (!G)
                                return;
                            const oe = G[1].firstElementChild;
                            D(oe);
                            return
                        }
                        D(k)
                    }
                    )
                }
                e.ref && e.ref(U),
                S.containerEl = U
            }
            ,
            refOverlayCb: U => {
                U.style.position = "fixed",
                U.style.top = "0",
                U.style.left = "0",
                U.style.width = "100%",
                U.style.height = "100%",
                U.style.zIndex = "1000",
                typeof f == "object" && f.ref && f.ref(U),
                S.overlayEl = U
            }
        };
        let M = N && !yo ? document.createTextNode("") : null;
        const H = !e.open();
        let w, $, z, B, te, Ee, ce = !1;
        function Re(U, D) {
            return f && (U = U.nextElementSibling),
            D ? D === "menuPopup" ? ue({
                containerEl: U
            }, {
                inputElement: null,
                type: "menuPopup"
            }) : typeof D == "string" ? U.querySelector(D) : D : U
        }
        function be(U, D) {
            if (U === "overlay" && (!e.overlay || !e.overlay.animation))
                return;
            const k = U === "popup" ? e.animation : e.overlay.animation;
            if (!k || !k.appear && !H)
                return;
            ce = !1,
            D = Re(D, k.appendToElement);
            const G = k.name;
            let {onBeforeEnter: de, onEnter: oe, onAfterEnter: Ne, enterActiveClass: ie=G + "-enter-active", enterClass: Je=G + "-enter", enterToClass: Ve=G + "-enter-to", exitActiveClass: Ze=G + "-exit-active", exitClass: Ye=G + "-exit", exitToClass: Qe=G + "-exit-to"} = k;
            const ze = Je.split(" ")
              , tn = ie.split(" ")
              , fo = Ve.split(" ")
              , Zs = Ye.split(" ")
              , Ys = Ze.split(" ")
              , Qs = Qe.split(" ");
            U === "popup" ? (D.removeEventListener("transitionend", z),
            D.removeEventListener("animationend", z)) : (D.removeEventListener("transitionend", te),
            D.removeEventListener("animationend", te)),
            de && de(D),
            D.classList.remove(...Zs, ...Ys, ...Qs),
            D.classList.add(...ze),
            D.classList.add(...tn),
            requestAnimationFrame( () => {
                requestAnimationFrame( () => {
                    D.classList.remove(...ze),
                    D.classList.add(...fo),
                    oe && oe(D, Jt),
                    (!oe || oe.length < 2) && (U === "popup" ? B = Jt : Ee = Jt,
                    D.addEventListener("transitionend", Jt, {
                        once: !0
                    }),
                    D.addEventListener("animationend", Jt, {
                        once: !0
                    }))
                }
                )
            }
            );
            function Jt() {
                D && (D.classList.remove(...tn),
                D.classList.remove(...fo),
                Ne && Ne(D))
            }
        }
        function F(U, D) {
            if (!e.animation) {
                $ == null || $.removeChild(w),
                w = null,
                $ = null;
                return
            }
            if (U === "overlay" && (!e.overlay || !e.overlay.animation))
                return;
            const k = U === "popup" ? e.animation : e.overlay.animation;
            ce = !0,
            D = Re(D, k.appendToElement);
            const G = k.name;
            let {onBeforeExit: de, onExit: oe, onAfterExit: Ne, exitActiveClass: ie=G + "-exit-active", exitClass: Je=G + "-exit", exitToClass: Ve=G + "-exit-to"} = k;
            const Ze = Je.split(" ")
              , Ye = ie.split(" ")
              , Qe = Ve.split(" ");
            if (U === "popup" ? (D.removeEventListener("transitionend", B),
            D.removeEventListener("animationend", B)) : (D.removeEventListener("transitionend", Ee),
            D.removeEventListener("animationend", Ee)),
            !D.parentNode)
                return ze();
            de && de(D),
            D.classList.add(...Ze),
            D.classList.add(...Ye),
            requestAnimationFrame( () => {
                D.classList.remove(...Ze),
                D.classList.add(...Qe)
            }
            ),
            oe && oe(D, ze),
            (!oe || oe.length < 2) && (U === "popup" ? z = ze : te = ze,
            D.addEventListener("transitionend", ze, {
                once: !0
            }),
            D.addEventListener("animationend", ze, {
                once: !0
            }));
            function ze() {
                ce = !1,
                $ == null || $.removeChild(w),
                q(!1),
                _.closedBySetOpen = !1,
                S.menuBtnEls && (R || f) && document.activeElement === document.body && ye(S.menuBtnEls).focus(),
                Ne && Ne(D),
                w = null,
                $ = null
            }
        }
        const q = U => {
            if (L) {
                if (U) {
                    if (W.length > 1)
                        return;
                    L.onRemove()
                } else {
                    if (W.length)
                        return;
                    L.onRestore()
                }
                return
            }
            if (!I || W.length > 1)
                return;
            const D = document.scrollingElement;
            U ? D.style.overflow = "hidden" : D.style.overflow = ""
        }
          , X = () => {
            var Ne;
            const U = document.activeElement;
            if (U !== document.body && S.menuBtnEls.every(ie => U !== ie) && !((Ne = S.containerEl) != null && Ne.contains(U)))
                return;
            const {menuBtnEls: D, focusedMenuBtn: k, timeouts: G} = S
              , de = ye(D)
              , oe = ue(S, {
                inputElement: i,
                type: "focusElementOnClose",
                subType: "click"
            }) || de;
            oe && (oe.focus(),
            oe === de && Us({
                focusedMenuBtn: k,
                timeouts: G,
                el: oe
            }))
        }
          , se = () => {
            var D;
            if (_.closedByEvents)
                return;
            const U = document.activeElement;
            if (S.menuBtnEls.every(k => U !== k) && !((D = S.containerEl) != null && D.contains(U))) {
                setTimeout( () => {
                    _.closedBySetOpen = !1
                }
                );
                return
            }
            _.closedBySetOpen || (_.addedDocumentClick = !1,
            document.removeEventListener("click", at),
            _.closedBySetOpen = !0,
            setTimeout( () => {
                _.closedBySetOpen = !1,
                X()
            }
            ))
        }
        ;
        re(jt( () => typeof e.menuButton == "function" ? e.menuButton() : e.menuButton, U => {
            Sf({
                state: S,
                menuButton: U,
                open: e.open
            }),
            De( () => {
                !S || yo || Ds(S, !0)
            }
            )
        }
        )),
        g && N && mi({
            mount: typeof N == "string" ? document.querySelector(N) : N,
            popupChildren: j(e.children),
            overlayChildren: f ? V() : null,
            marker: M,
            onCreate: (U, D) => {
                $ = U,
                w = D
            }
        }),
        zn(jt( () => !!e.open(), (U, D) => {
            U !== D && (U || (S.focusSentinelAfterEl && (S.focusSentinelAfterEl.tabIndex = -1),
            se()),
            !(!N || g) && (U ? ($ || mi({
                mount: typeof N == "string" ? document.querySelector(N) : N,
                popupChildren: j(e.children),
                overlayChildren: f ? V() : null,
                marker: M,
                onCreate: (k, G) => {
                    $ = k,
                    w = G
                }
            }),
            be("popup", w == null ? void 0 : w.firstElementChild),
            be("overlay", S.overlayEl)) : (F("popup", w == null ? void 0 : w.firstElementChild),
            F("overlay", S.overlayEl))))
        }
        , {
            defer: H
        })),
        re(jt( () => !!e.open(), (U, D) => {
            U !== D && (U ? (_.closedByEvents = !1,
            If(S),
            Cf(S),
            ff(A),
            of({
                id: r,
                uniqueId: S.uniqueId,
                open: e.open,
                setOpen: e.setOpen,
                containerEl: S.containerEl,
                menuBtnEls: S.menuBtnEls,
                focusedMenuBtn: S.focusedMenuBtn,
                overlayEl: S.overlayEl,
                menuPopupEl: S.menuPopupEl,
                overlay: R,
                closeWhenDocumentBlurs: d,
                closeWhenEscapeKeyIsPressed: E,
                closeWhenMenuButtonIsTabbed: u,
                overlayElement: f,
                cursorKeys: s,
                focusElementOnClose: i,
                focusSentinelBeforeEl: S.focusSentinelBeforeEl,
                focusSentinelAfterEl: S.focusSentinelAfterEl,
                ignoreMenuPopupWhenTabbing: v,
                upperStackRemovedByFocusOut: !1,
                detectIfMenuButtonObscured: !1,
                queueRemoval: !1,
                timeouts: S.timeouts
            }),
            p && p(U, {
                uniqueId: S.uniqueId,
                dismissStack: W
            }),
            q(U),
            Lf(S)) : (_.closedByEvents = !1,
            vi(S),
            Hn(S),
            hi(S),
            Si(S.uniqueId),
            Ii(),
            p && p(U, {
                uniqueId: S.uniqueId,
                dismissStack: W
            }),
            e.animation || q(U)))
        }
        , {
            defer: H
        })),
        De( () => {
            vi(S, {
                isCleanup: !0
            }),
            hi(S),
            Hn(S),
            Si(S.uniqueId),
            Ii(),
            !g && N && $ && !ce && (F("popup", w == null ? void 0 : w.firstElementChild),
            F("overlay", S.overlayEl))
        }
        );
        function V() {
            return ( () => {
                const U = Tf.cloneNode(!0)
                  , D = S.refOverlayCb;
                return typeof D == "function" ? $e(D, U) : S.refOverlayCb = U,
                fe(U, "click", S.onClickOverlayRef, !0),
                x(k => {
                    const G = typeof e.overlayElement == "object" ? e.overlayElement.class : void 0
                      , de = typeof e.overlayElement == "object" ? e.overlayElement.classList || {} : {};
                    return G !== k._v$ && nr(U, k._v$ = G),
                    k._v$2 = xe(U, de, k._v$2),
                    k
                }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
            }
            )()
        }
        function j(U) {
            return ( () => {
                const D = pf.cloneNode(!0)
                  , k = D.firstChild
                  , G = k.nextSibling
                  , de = S.refContainerCb;
                typeof de == "function" ? $e(de, D) : S.refContainerCb = D,
                fe(D, "focusout", S.onFocusOutContainerRef, !0),
                fe(D, "focusin", S.onFocusInContainerRef, !0);
                const oe = S.focusSentinelBeforeEl;
                typeof oe == "function" ? $e(oe, k) : S.focusSentinelBeforeEl = k,
                k.addEventListener("focus", ie => {
                    gi(S, "before", ie.relatedTarget)
                }
                ),
                O(D, U, G);
                const Ne = S.focusSentinelAfterEl;
                return typeof Ne == "function" ? $e(Ne, G) : S.focusSentinelAfterEl = G,
                G.addEventListener("focus", () => {
                    gi(S, "after")
                }
                ),
                x(ie => {
                    const Je = S.id
                      , Ve = e.class
                      , Ze = e.classList || {}
                      , Ye = e.open() ? "0" : "-1"
                      , Qe = e.open() && S.hasFocusSentinels ? "0" : "-1";
                    return Je !== ie._v$3 && P(D, "id", ie._v$3 = Je),
                    Ve !== ie._v$4 && nr(D, ie._v$4 = Ve),
                    ie._v$5 = xe(D, Ze, ie._v$5),
                    Ye !== ie._v$6 && P(k, "tabindex", ie._v$6 = Ye),
                    Qe !== ie._v$7 && P(G, "tabindex", ie._v$7 = Qe),
                    ie
                }
                , {
                    _v$3: void 0,
                    _v$4: void 0,
                    _v$5: void 0,
                    _v$6: void 0,
                    _v$7: void 0
                }),
                D
            }
            )()
        }
        if (N)
            return M;
        if (g)
            return j(e.children);
        let Ae = !1;
        const Pe = T( () => e.open(), !1, {
            equals: (U, D) => Ae ? U === D : !U == !D
        })
          , Le = T( () => {
            const U = Pe();
            if (U) {
                const D = e.children;
                return (Ae = typeof D == "function" && D.length > 0) ? Ce( () => D(U)) : j(D)
            }
        }
        );
        return e.animation ? m(mf, Pt( () => e.animation, {
            get name() {
                return e.animation.name
            },
            get enterClass() {
                return e.animation.enterClass
            },
            get enterActiveClass() {
                return e.animation.enterActiveClass
            },
            get enterToClass() {
                return e.animation.enterToClass
            },
            get exitClass() {
                return e.animation.exitClass
            },
            get exitActiveClass() {
                return e.animation.exitActiveClass
            },
            get exitToClass() {
                return e.animation.exitToClass
            },
            get appear() {
                return e.animation.appear
            },
            get children() {
                return Le()
            }
        })) : Le
    }
    ;
    Ge(["click", "focusin", "focusout"]);
    const Df = "_logoLg_eogxx_1";
    var bf = {
        logoLg: Df
    };
    const Pf = b('<span class="mx-3 text-black sm:text-white dark:text-white text-lg"></span>')
      , zr = ({colorblind: e, size: t}) => {
        const r = Z()
          , n = t === "lg";
        return [m(tS, {
            colorblind: e,
            get classList() {
                return {
                    [bf.logoLg]: n
                }
            }
        }), ( () => {
            const o = Pf.cloneNode(!0);
            return o.classList.toggle("text-lg", n),
            O(o, () => r.t("header.title")),
            o
        }
        )()]
    }
      , Mf = b('<a class="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded" target="_blank"></a>')
      , wf = b('<div id="options-dropdown" class="quordle-options-dropdown absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4" aria-controls="settings-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4" aria-controls="statistics-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4" aria-controls="achievements-panel"><div class="mr-3 text-black dark:text-white"></div></button><div class="m-4 flex flex-row-reverse justify-center items-center"></div></div>')
      , Bf = b('<nav class="bg-new-blue w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4"><div class="flex flex-1 justify-center md:justify-end items-center ml-md-2"></div></div><div class="bg-slate-300 dark:bg-gray-900"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><div class="flex flex-grow-0 flex-shrink-1 overflow-auto"></div><div class="flex flex-1 justify-end items-center ml-2"><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white transition-colors" aria-controls="tutorial-panel"></button><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition" aria-controls="options-dropdown"></button></div></div></div></nav>')
      , zt = e => ( () => {
        const t = Mf.cloneNode(!0);
        return fe(t, "click", e.onClick, !0),
        O(t, m(e.iconComponent, {
            class: "h-5 w-auto rounded-sm ring-1 ring-black dark:ring-white"
        })),
        x(r => {
            const n = `https://${e.lang === "en" ? "www" : e.lang}.quordle.com`
              , o = e.ariaLabel;
            return n !== r._v$ && P(t, "href", r._v$ = n),
            o !== r._v$2 && P(t, "aria-label", r._v$2 = o),
            r
        }
        , {
            _v$: void 0,
            _v$2: void 0
        }),
        t
    }
    )()
      , xf = e => {
        const t = Eo(to)
          , r = Z()
          , [n,o] = le()
          , [i] = ta()
          , a = T( () => i.overlay === "tutorial")
          , s = T( () => i.overlay === "statistics")
          , u = T( () => i.overlay === "settings")
          , l = T( () => i.overlay === "achievements")
          , [A,d] = Q(!1)
          , [c,E] = Q();
        return ( () => {
            const R = Bf.cloneNode(!0)
              , f = R.firstChild
              , h = f.firstChild
              , I = f.nextSibling
              , C = I.firstChild
              , N = C.firstChild
              , g = N.nextSibling
              , L = g.firstChild
              , p = L.nextSibling;
            return O(f, ( () => {
                const y = T( () => !!t.md);
                return () => y() && m(zr, {
                    size: "lg",
                    get colorblind() {
                        return n.colorblind
                    }
                })
            }
            )(), h),
            O(h, m(Et, {
                id: "header-placement",
                cssClassName: "AdContainer"
            })),
            O(C, ( () => {
                const y = T( () => !t.md);
                return () => y() && m(zr, {
                    size: "sm",
                    get colorblind() {
                        return n.colorblind
                    }
                })
            }
            )(), N),
            O(N, m(Lo, {
                href: "/",
                activeClass: "quordle-nav-active",
                class: "quordle-nav",
                onClick: () => J(n.vibration),
                end: !0,
                get children() {
                    return r.t("header.daily")
                }
            }), null),
            O(N, m(Lo, {
                href: "/practice",
                activeClass: "quordle-nav-active",
                class: "quordle-nav ml-2",
                onClick: () => J(n.vibration),
                end: !0,
                get children() {
                    return r.t("header.practice")
                }
            }), null),
            fe(L, "click", e.onOpenTutorial, !0),
            O(L, m(iS, {})),
            p.$$click = () => J(n.vibration),
            $e(y => E(y), p),
            O(p, m(en, {})),
            O(C, m(Uf, {
                class: "z-30",
                menuButton: c,
                open: A,
                setOpen: d,
                animation: {
                    name: "quordle-fade"
                },
                get children() {
                    const y = wf.cloneNode(!0)
                      , v = y.firstChild
                      , S = v.firstChild
                      , M = v.nextSibling
                      , H = M.firstChild
                      , w = M.nextSibling
                      , $ = w.firstChild
                      , z = w.nextSibling;
                    return v.$$click = () => {
                        d(!1),
                        e.onOpenSettings()
                    }
                    ,
                    O(v, m(aS, {}), S),
                    O(S, () => r.t("header.settings")),
                    M.$$click = () => {
                        d(!1),
                        e.onOpenStatistics()
                    }
                    ,
                    O(M, m(SS, {
                        get mode() {
                            return e.mode
                        }
                    }), H),
                    O(H, ( () => {
                        const B = T( () => e.mode === "daily");
                        return () => B() ? r.t("header.dailyStats") : r.t("header.practiceStats")
                    }
                    )()),
                    w.$$click = () => {
                        d(!1),
                        e.onOpenAchievements()
                    }
                    ,
                    O(w, m(hs, {}), $),
                    O($, () => r.t("header.achievements")),
                    O(z, ( () => {
                        const B = T( () => r.locale() !== "en");
                        return () => B() && m(zt, {
                            lang: "en",
                            ariaLabel: "English Quordle",
                            onClick: () => {
                                J(n.vibration),
                                d(!1)
                            }
                            ,
                            iconComponent: uS
                        })
                    }
                    )(), null),
                    O(z, ( () => {
                        const B = T( () => r.locale() !== "fr");
                        return () => B() && m(zt, {
                            lang: "fr",
                            ariaLabel: "Quordle Fran\xE7ais",
                            onClick: () => {
                                J(n.vibration),
                                d(!1)
                            }
                            ,
                            iconComponent: sS
                        })
                    }
                    )(), null),
                    O(z, ( () => {
                        const B = T( () => r.locale() !== "es");
                        return () => B() && m(zt, {
                            lang: "es",
                            ariaLabel: "Quordle Espa\xF1ol",
                            onClick: () => {
                                J(n.vibration),
                                d(!1)
                            }
                            ,
                            iconComponent: AS
                        })
                    }
                    )(), null),
                    O(z, ( () => {
                        const B = T( () => r.locale() !== "it");
                        return () => B() && m(zt, {
                            lang: "it",
                            ariaLabel: "Quordle Italiano",
                            onClick: () => {
                                J(n.vibration),
                                d(!1)
                            }
                            ,
                            iconComponent: lS
                        })
                    }
                    )(), null),
                    O(z, ( () => {
                        const B = T( () => r.locale() !== "nl");
                        return () => B() && m(zt, {
                            lang: "nl",
                            ariaLabel: "Quordle Nederlands",
                            onClick: () => {
                                J(n.vibration),
                                d(!1)
                            }
                            ,
                            iconComponent: cS
                        })
                    }
                    )(), null),
                    x(B => {
                        var X;
                        const te = (((X = c()) == null ? void 0 : X.getBoundingClientRect().bottom) || 0) + 12 + "px"
                          , Ee = u()
                          , ce = r.t("header.aria.openPage", {
                            page: r.t("header.settings")
                        })
                          , Re = s()
                          , be = r.t("header.aria.openPage", {
                            page: e.mode === "daily" ? r.t("stats.dailyStatistics") : r.t("stats.practiceStatistics")
                        })
                          , F = l()
                          , q = r.t("header.aria.openPage", {
                            page: r.t("header.achievements")
                        });
                        return te !== B._v$3 && y.style.setProperty("top", B._v$3 = te),
                        Ee !== B._v$4 && P(v, "aria-expanded", B._v$4 = Ee),
                        ce !== B._v$5 && P(v, "aria-label", B._v$5 = ce),
                        Re !== B._v$6 && P(M, "aria-expanded", B._v$6 = Re),
                        be !== B._v$7 && P(M, "aria-label", B._v$7 = be),
                        F !== B._v$8 && P(w, "aria-expanded", B._v$8 = F),
                        q !== B._v$9 && P(w, "aria-label", B._v$9 = q),
                        B
                    }
                    , {
                        _v$3: void 0,
                        _v$4: void 0,
                        _v$5: void 0,
                        _v$6: void 0,
                        _v$7: void 0,
                        _v$8: void 0,
                        _v$9: void 0
                    }),
                    y
                }
            }), null),
            x(y => {
                const v = a()
                  , S = r.t("header.aria.openPage", {
                    page: r.t("header.help")
                })
                  , M = !!A()
                  , H = A()
                  , w = r.t("header.aria.openMoreOptions");
                return v !== y._v$10 && P(L, "aria-expanded", y._v$10 = v),
                S !== y._v$11 && P(L, "aria-label", y._v$11 = S),
                M !== y._v$12 && p.classList.toggle("rotate-180", y._v$12 = M),
                H !== y._v$13 && P(p, "aria-expanded", y._v$13 = H),
                w !== y._v$14 && P(p, "aria-label", y._v$14 = w),
                y
            }
            , {
                _v$10: void 0,
                _v$11: void 0,
                _v$12: void 0,
                _v$13: void 0,
                _v$14: void 0
            }),
            R
        }
        )()
    }
    ;
    Ge(["click"]);
    const Gf = b('<button class="quordle-key border-gray-300 dark:border-gray-700" role="cell"><div class="quordle-box-content"></div></button>')
      , _f = b('<div class="w-full flex-col p-1 pb-1.5 bg-blue-200 dark:bg-cyan-900 rounded-t shadow" role="table"></div>')
      , Ff = b('<div class="flex w-full justify-center" role="row"></div>')
      , $f = e => {
        const t = Z()
          , [r,n] = le()
          , o = T( () => {
            if (e.key === "bs" || e.key === "enter")
                return !1;
            const u = r[e.mode].guesses;
            let l = !1;
            for (let A = 0; A < u.length; A++)
                if (u[A].indexOf(e.key) >= 0) {
                    l = !0;
                    break
                }
            return l
        }
        )
          , i = T( () => {
            const u = r[e.mode].guesses
              , l = ["none", "none", "none", "none"];
            for (let A = 0; A < l.length; A++) {
                const d = r[e.mode].states[A];
                if (!(r[e.mode].answersCorrect[A] >= 0))
                    for (let c = 0; c < d.length; c++)
                        for (let E = 0; E < d[c].length; E++)
                            e.key === u[c][E] && (d[c][E] === "correct" || d[c][E] === "diff") && (d[c][E] === "correct" ? l[A] = "correct" : d[c][E] === "diff" && l[A] !== "correct" && (l[A] = "diff"))
            }
            return l
        }
        )
          , a = T( () => {
            if (!o() || i().every(A => A === "none"))
                return "";
            const u = {
                none: r.darkMode ? "#9ca3af" : "#d1d5db",
                diff: r.colorblind ? "#60a5fa" : "#ffcc00",
                correct: r.colorblind ? "#fb923c" : "#00cc88"
            }
              , l = i().map(A => u[A]);
            return "background: conic-gradient(" + l[1] + " 0deg 90deg, " + l[3] + " 90deg 180deg, " + l[2] + " 180deg 270deg, " + l[0] + " 270deg 360deg);"
        }
        )
          , s = T( () => e.key === "bs" ? t.t("game.backspaceKey") : e.key === "enter" ? t.t("game.enterKey") : t.t("game.aria.key", {
            letter: e.key,
            info: o() ? i().every(u => u === "none") && o() ? t.t("game.aria.keyIncorrectAll") : i().map( (u, l) => u === "diff" ? t.t("game.aria.keyDiff", {
                board: l + 1
            }) : u === "none" ? t.t("game.aria.keyNone", {
                board: l + 1
            }) : t.t("game.aria.keyCorrect", {
                board: l + 1
            })).join(t.t("game.aria.keyInfoDelimiter")) : t.t("game.aria.keyNotGuessed")
        }));
        return ( () => {
            const u = Gf.cloneNode(!0)
              , l = u.firstChild;
            return fe(u, "focusout", e.onFocusOut, !0),
            fe(u, "focusin", e.onFocusIn, !0),
            u.$$click = () => {
                J(r.vibration),
                n.sendKey(e.mode, new KeyboardEvent("keydown",{
                    keyCode: e.key === "enter" ? 13 : e.key === "bs" ? 8 : r.alphabet.indexOf(e.key) + 65,
                    key: e.key === "enter" ? "Enter" : e.key === "bs" ? "Backspace" : e.key
                }))
            }
            ,
            O(l, ( () => {
                const A = T( () => e.key === "enter");
                return () => A() ? m(rS, {
                    get height() {
                        return e.fontSize * .8
                    }
                }) : ( () => {
                    const d = T( () => e.key === "bs");
                    return () => d() ? m(nS, {
                        get height() {
                            return e.fontSize * .8
                        }
                    }) : e.key
                }
                )()
            }
            )()),
            x(A => {
                const d = {
                    "w-[calc(10%-0.25rem)]": e.key !== "enter" && e.key !== "bs" || e.numKeysInRow === 10,
                    "w-[calc(15%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 9,
                    "w-[calc(20%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 8,
                    "w-[calc(25%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 7,
                    "text-black dark:text-black border-gray-400": !!a(),
                    "text-black dark:text-white bg-white dark:bg-gray-500": !a() && !o(),
                    "text-blue-300 dark:text-cyan-600 bg-blue-100 dark:bg-cyan-800 border-blue-200 dark:border-cyan-900": !a() && o()
                }
                  , c = "padding-bottom: calc(" + 10 * r.keyboardHeight + "% - 0.25rem);" + a()
                  , E = s();
                return A._v$ = xe(u, d, A._v$),
                A._v$2 = Xn(u, c, A._v$2),
                E !== A._v$3 && P(u, "aria-label", A._v$3 = E),
                A
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
            }),
            u
        }
        )()
    }
      , Hf = e => {
        const t = Z()
          , [r,n] = le()
          , [o,i] = Q()
          , a = s => {
            e.disableInputCapture || o() && s.key === "Enter" || n.sendKey(e.mode, s) && s.preventDefault()
        }
        ;
        return document.addEventListener("keydown", a),
        De( () => document.removeEventListener("keydown", a)),
        ( () => {
            const s = _f.cloneNode(!0);
            return O(s, () => (r.enterBsReversed ? r.keyboardReversed : r.keyboard).map( (u, l) => ( () => {
                const A = Ff.cloneNode(!0);
                return O(A, () => u.map( (d, c) => m($f, {
                    get mode() {
                        return e.mode
                    },
                    x: c,
                    y: l,
                    key: d,
                    get numKeysInRow() {
                        return u.length
                    },
                    get fontSize() {
                        return e.fontSize
                    },
                    onFocusIn: () => i(d),
                    onFocusOut: () => i(void 0)
                }))),
                x( () => P(A, "aria-label", t.t("game.aria.keyboardRow", {
                    row: l + 1
                }))),
                A
            }
            )())),
            x( () => P(s, "aria-label", t.t("game.aria.keyboard"))),
            s
        }
        )()
    }
    ;
    Ge(["click", "focusin", "focusout"]);
    var St = [], kf = function() {
        return St.some(function(e) {
            return e.activeTargets.length > 0
        })
    }, Jf = function() {
        return St.some(function(e) {
            return e.skippedTargets.length > 0
        })
    }, Ci = "ResizeObserver loop completed with undelivered notifications.", Vf = function() {
        var e;
        typeof ErrorEvent == "function" ? e = new ErrorEvent("error",{
            message: Ci
        }) : (e = document.createEvent("Event"),
        e.initEvent("error", !1, !1),
        e.message = Ci),
        window.dispatchEvent(e)
    }, ar;
    (function(e) {
        e.BORDER_BOX = "border-box",
        e.CONTENT_BOX = "content-box",
        e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
    }
    )(ar || (ar = {}));
    var ft = function(e) {
        return Object.freeze(e)
    }, Zf = function() {
        function e(t, r) {
            this.inlineSize = t,
            this.blockSize = r,
            ft(this)
        }
        return e
    }(), Gs = function() {
        function e(t, r, n, o) {
            return this.x = t,
            this.y = r,
            this.width = n,
            this.height = o,
            this.top = this.y,
            this.left = this.x,
            this.bottom = this.top + this.height,
            this.right = this.left + this.width,
            ft(this)
        }
        return e.prototype.toJSON = function() {
            var t = this
              , r = t.x
              , n = t.y
              , o = t.top
              , i = t.right
              , a = t.bottom
              , s = t.left
              , u = t.width
              , l = t.height;
            return {
                x: r,
                y: n,
                top: o,
                right: i,
                bottom: a,
                left: s,
                width: u,
                height: l
            }
        }
        ,
        e.fromRect = function(t) {
            return new e(t.x,t.y,t.width,t.height)
        }
        ,
        e
    }(), So = function(e) {
        return e instanceof SVGElement && "getBBox"in e
    }, _s = function(e) {
        if (So(e)) {
            var t = e.getBBox()
              , r = t.width
              , n = t.height;
            return !r && !n
        }
        var o = e
          , i = o.offsetWidth
          , a = o.offsetHeight;
        return !(i || a || e.getClientRects().length)
    }, Ni = function(e) {
        var t;
        if (e instanceof Element)
            return !0;
        var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
        return !!(r && e instanceof r.Element)
    }, Yf = function(e) {
        switch (e.tagName) {
        case "INPUT":
            if (e.type !== "image")
                break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
            return !0
        }
        return !1
    }, rr = typeof window != "undefined" ? window : {}, Cr = new WeakMap, yi = /auto|scroll/, Qf = /^tb|vertical/, zf = /msie|trident/i.test(rr.navigator && rr.navigator.userAgent), _e = function(e) {
        return parseFloat(e || "0")
    }, bt = function(e, t, r) {
        return e === void 0 && (e = 0),
        t === void 0 && (t = 0),
        r === void 0 && (r = !1),
        new Zf((r ? t : e) || 0,(r ? e : t) || 0)
    }, Li = ft({
        devicePixelContentBoxSize: bt(),
        borderBoxSize: bt(),
        contentBoxSize: bt(),
        contentRect: new Gs(0,0,0,0)
    }), Fs = function(e, t) {
        if (t === void 0 && (t = !1),
        Cr.has(e) && !t)
            return Cr.get(e);
        if (_s(e))
            return Cr.set(e, Li),
            Li;
        var r = getComputedStyle(e)
          , n = So(e) && e.ownerSVGElement && e.getBBox()
          , o = !zf && r.boxSizing === "border-box"
          , i = Qf.test(r.writingMode || "")
          , a = !n && yi.test(r.overflowY || "")
          , s = !n && yi.test(r.overflowX || "")
          , u = n ? 0 : _e(r.paddingTop)
          , l = n ? 0 : _e(r.paddingRight)
          , A = n ? 0 : _e(r.paddingBottom)
          , d = n ? 0 : _e(r.paddingLeft)
          , c = n ? 0 : _e(r.borderTopWidth)
          , E = n ? 0 : _e(r.borderRightWidth)
          , R = n ? 0 : _e(r.borderBottomWidth)
          , f = n ? 0 : _e(r.borderLeftWidth)
          , h = d + l
          , I = u + A
          , C = f + E
          , N = c + R
          , g = s ? e.offsetHeight - N - e.clientHeight : 0
          , L = a ? e.offsetWidth - C - e.clientWidth : 0
          , p = o ? h + C : 0
          , y = o ? I + N : 0
          , v = n ? n.width : _e(r.width) - p - L
          , S = n ? n.height : _e(r.height) - y - g
          , M = v + h + L + C
          , H = S + I + g + N
          , w = ft({
            devicePixelContentBoxSize: bt(Math.round(v * devicePixelRatio), Math.round(S * devicePixelRatio), i),
            borderBoxSize: bt(M, H, i),
            contentBoxSize: bt(v, S, i),
            contentRect: new Gs(d,u,v,S)
        });
        return Cr.set(e, w),
        w
    }, $s = function(e, t, r) {
        var n = Fs(e, r)
          , o = n.borderBoxSize
          , i = n.contentBoxSize
          , a = n.devicePixelContentBoxSize;
        switch (t) {
        case ar.DEVICE_PIXEL_CONTENT_BOX:
            return a;
        case ar.BORDER_BOX:
            return o;
        default:
            return i
        }
    }, qf = function() {
        function e(t) {
            var r = Fs(t);
            this.target = t,
            this.contentRect = r.contentRect,
            this.borderBoxSize = ft([r.borderBoxSize]),
            this.contentBoxSize = ft([r.contentBoxSize]),
            this.devicePixelContentBoxSize = ft([r.devicePixelContentBoxSize])
        }
        return e
    }(), Hs = function(e) {
        if (_s(e))
            return 1 / 0;
        for (var t = 0, r = e.parentNode; r; )
            t += 1,
            r = r.parentNode;
        return t
    }, Wf = function() {
        var e = 1 / 0
          , t = [];
        St.forEach(function(a) {
            if (a.activeTargets.length !== 0) {
                var s = [];
                a.activeTargets.forEach(function(l) {
                    var A = new qf(l.target)
                      , d = Hs(l.target);
                    s.push(A),
                    l.lastReportedSize = $s(l.target, l.observedBox),
                    d < e && (e = d)
                }),
                t.push(function() {
                    a.callback.call(a.observer, s, a.observer)
                }),
                a.activeTargets.splice(0, a.activeTargets.length)
            }
        });
        for (var r = 0, n = t; r < n.length; r++) {
            var o = n[r];
            o()
        }
        return e
    }, Ti = function(e) {
        St.forEach(function(r) {
            r.activeTargets.splice(0, r.activeTargets.length),
            r.skippedTargets.splice(0, r.skippedTargets.length),
            r.observationTargets.forEach(function(o) {
                o.isActive() && (Hs(o.target) > e ? r.activeTargets.push(o) : r.skippedTargets.push(o))
            })
        })
    }, jf = function() {
        var e = 0;
        for (Ti(e); kf(); )
            e = Wf(),
            Ti(e);
        return Jf() && Vf(),
        e > 0
    }, mn, ks = [], Kf = function() {
        return ks.splice(0).forEach(function(e) {
            return e()
        })
    }, Xf = function(e) {
        if (!mn) {
            var t = 0
              , r = document.createTextNode("")
              , n = {
                characterData: !0
            };
            new MutationObserver(function() {
                return Kf()
            }
            ).observe(r, n),
            mn = function() {
                r.textContent = "".concat(t ? t-- : t++)
            }
        }
        ks.push(e),
        mn()
    }, eR = function(e) {
        Xf(function() {
            requestAnimationFrame(e)
        })
    }, Mr = 0, tR = function() {
        return !!Mr
    }, rR = 250, nR = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    }, pi = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], Ui = function(e) {
        return e === void 0 && (e = 0),
        Date.now() + e
    }, vn = !1, oR = function() {
        function e() {
            var t = this;
            this.stopped = !0,
            this.listener = function() {
                return t.schedule()
            }
        }
        return e.prototype.run = function(t) {
            var r = this;
            if (t === void 0 && (t = rR),
            !vn) {
                vn = !0;
                var n = Ui(t);
                eR(function() {
                    var o = !1;
                    try {
                        o = jf()
                    } finally {
                        if (vn = !1,
                        t = n - Ui(),
                        !tR())
                            return;
                        o ? r.run(1e3) : t > 0 ? r.run(t) : r.start()
                    }
                })
            }
        }
        ,
        e.prototype.schedule = function() {
            this.stop(),
            this.run()
        }
        ,
        e.prototype.observe = function() {
            var t = this
              , r = function() {
                return t.observer && t.observer.observe(document.body, nR)
            };
            document.body ? r() : rr.addEventListener("DOMContentLoaded", r)
        }
        ,
        e.prototype.start = function() {
            var t = this;
            this.stopped && (this.stopped = !1,
            this.observer = new MutationObserver(this.listener),
            this.observe(),
            pi.forEach(function(r) {
                return rr.addEventListener(r, t.listener, !0)
            }))
        }
        ,
        e.prototype.stop = function() {
            var t = this;
            this.stopped || (this.observer && this.observer.disconnect(),
            pi.forEach(function(r) {
                return rr.removeEventListener(r, t.listener, !0)
            }),
            this.stopped = !0)
        }
        ,
        e
    }(), Zn = new oR, Di = function(e) {
        !Mr && e > 0 && Zn.start(),
        Mr += e,
        !Mr && Zn.stop()
    }, iR = function(e) {
        return !So(e) && !Yf(e) && getComputedStyle(e).display === "inline"
    }, aR = function() {
        function e(t, r) {
            this.target = t,
            this.observedBox = r || ar.CONTENT_BOX,
            this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }
        return e.prototype.isActive = function() {
            var t = $s(this.target, this.observedBox, !0);
            return iR(this.target) && (this.lastReportedSize = t),
            this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
        }
        ,
        e
    }(), sR = function() {
        function e(t, r) {
            this.activeTargets = [],
            this.skippedTargets = [],
            this.observationTargets = [],
            this.observer = t,
            this.callback = r
        }
        return e
    }(), Nr = new WeakMap, bi = function(e, t) {
        for (var r = 0; r < e.length; r += 1)
            if (e[r].target === t)
                return r;
        return -1
    }, yr = function() {
        function e() {}
        return e.connect = function(t, r) {
            var n = new sR(t,r);
            Nr.set(t, n)
        }
        ,
        e.observe = function(t, r, n) {
            var o = Nr.get(t)
              , i = o.observationTargets.length === 0;
            bi(o.observationTargets, r) < 0 && (i && St.push(o),
            o.observationTargets.push(new aR(r,n && n.box)),
            Di(1),
            Zn.schedule())
        }
        ,
        e.unobserve = function(t, r) {
            var n = Nr.get(t)
              , o = bi(n.observationTargets, r)
              , i = n.observationTargets.length === 1;
            o >= 0 && (i && St.splice(St.indexOf(n), 1),
            n.observationTargets.splice(o, 1),
            Di(-1))
        }
        ,
        e.disconnect = function(t) {
            var r = this
              , n = Nr.get(t);
            n.observationTargets.slice().forEach(function(o) {
                return r.unobserve(t, o.target)
            }),
            n.activeTargets.splice(0, n.activeTargets.length)
        }
        ,
        e
    }(), AR = function() {
        function e(t) {
            if (arguments.length === 0)
                throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if (typeof t != "function")
                throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            yr.connect(this, t)
        }
        return e.prototype.observe = function(t, r) {
            if (arguments.length === 0)
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!Ni(t))
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            yr.observe(this, t, r)
        }
        ,
        e.prototype.unobserve = function(t) {
            if (arguments.length === 0)
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!Ni(t))
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            yr.unobserve(this, t)
        }
        ,
        e.prototype.disconnect = function() {
            yr.disconnect(this)
        }
        ,
        e.toString = function() {
            return "function ResizeObserver () { [polyfill code] }"
        }
        ,
        e
    }();
    function Js(e) {
        const [t,r] = Q([])
          , n = a => r(s => s.concat(a))
          , o = new Map
          , i = new AR(a => {
            if (!!Array.isArray(a))
                for (const s of a) {
                    const u = Math.round(s.contentRect.width)
                      , l = Math.round(s.contentRect.height)
                      , A = o.get(s.target);
                    if (!A || A.width !== u || A.height !== l) {
                        const d = {
                            width: u,
                            height: l
                        };
                        e.onResize(d, s.target),
                        o.set(s.target, {
                            width: u,
                            height: l
                        })
                    }
                }
        }
        );
        return re(a => {
            let s = [];
            if (e.refs) {
                const u = typeof e.refs == "function" ? e.refs() : e.refs;
                Array.isArray(u) ? s = s.concat(u) : s.push(u)
            }
            return s = s.concat(t()),
            a = a || [],
            a.forEach(u => {
                u in s || (i.unobserve(u),
                o.delete(u))
            }
            ),
            s.forEach(u => {
                u in a || i.observe(u)
            }
            ),
            s
        }
        ),
        De( () => i.disconnect()),
        n
    }
    const lR = b('<div class="text-lg mt-6 mb-3 flex items-center justify-center"><div class="text-sm text-right">:</div><input type="number" class="mx-2 text-sm text-center text-black dark:text-white bg-white dark:bg-gray-800" readonly><button class="transition"></button></div>')
      , cR = b('<div class="text-center"><button type="button" class="text-sm min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"><div class="flex items-center justify-center"><div class="ml-2"></div></div></button><div class="text-sm my-4"></div><label for="new_practice_seed" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"></label><div class="flex flex-row items-center"><input type="text" id="new_practice_seed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxlength="20" inputmode="numeric"><button type="button" class="flex-shrink-0 font-medium rounded-lg text-sm p-2.5 text-center ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:text-gray-400 disabled:bg-gray-300 disabled:dark:text-gray-500 disabled:dark:bg-gray-700 disabled:cursor-not-allowed"></button></div></div>')
      , uR = b('<div class="text-center text-base mt-2"></div>')
      , ER = e => {
        const t = Z()
          , [r,n] = le()
          , [o,i] = Q(!1)
          , [a,s] = Q()
          , [u,l] = Q(0)
          , [A,d] = Q(void 0)
          , c = T( () => {
            const E = u();
            return E === 0 || E === r.free.seed || E < 1e6
        }
        );
        return e.mode !== "free" ? null : [( () => {
            const E = lR.cloneNode(!0)
              , R = E.firstChild
              , f = R.firstChild
              , h = R.nextSibling
              , I = h.nextSibling;
            return O(R, () => t.t("settings.currentSeed"), f),
            $e(d, h),
            I.$$click = () => {
                J(r.vibration),
                i(!o())
            }
            ,
            O(I, m(en, {})),
            x(C => {
                const N = t.t("settings.currentSeed")
                  , g = !!o();
                return N !== C._v$ && P(h, "aria-label", C._v$ = N),
                g !== C._v$2 && I.classList.toggle("rotate-180", C._v$2 = g),
                C
            }
            , {
                _v$: void 0,
                _v$2: void 0
            }),
            x( () => h.value = r.free.seed),
            E
        }
        )(), T(( () => {
            const E = T( () => !!o());
            return () => E() && ( () => {
                const R = cR.cloneNode(!0)
                  , f = R.firstChild
                  , h = f.firstChild
                  , I = h.firstChild
                  , C = f.nextSibling
                  , N = C.nextSibling
                  , g = N.nextSibling
                  , L = g.firstChild
                  , p = L.nextSibling;
                return f.$$click = () => {
                    J(r.vibration);
                    const y = A();
                    if (y) {
                        y.select(),
                        document.execCommand("copy");
                        const v = window.getSelection && window.getSelection();
                        v && v.removeAllRanges(),
                        y.blur(),
                        alert(t.t("settings.copiedSeedToClipboardAlert", {
                            seed: y.value
                        }))
                    }
                }
                ,
                O(h, m(Is, {}), I),
                O(I, () => t.t("settings.copySeedToClipboard")),
                O(C, () => t.t("settings.gameSeedDescription")),
                O(N, () => t.t("settings.gameSeedInputLabel")),
                L.$$input = y => {
                    const v = a();
                    if (v) {
                        const S = Number(y.target.value);
                        if (S && !Number.isNaN(S) && Number.isFinite(S)) {
                            const M = Math.max(0, Math.min(Math.floor(S), 1e21));
                            l(M),
                            v.value = String(M)
                        } else
                            l(0),
                            v.value = ""
                    }
                }
                ,
                $e(s, L),
                p.$$click = () => {
                    J(r.vibration),
                    n.resetFree(u()),
                    Se("event", "override_free", {
                        seed: u()
                    }),
                    l(0);
                    const y = a();
                    y && (y.value = "")
                }
                ,
                O(p, () => t.t("settings.startNewPractice")),
                O(R, ( () => {
                    const y = T( () => r.free.guesses.length > 0 && !ge(e.mode, r));
                    return () => y() && ( () => {
                        const v = uR.cloneNode(!0);
                        return O(v, () => t.t("settings.startNewPracticeWarning")),
                        v
                    }
                    )()
                }
                )(), null),
                x(y => {
                    const v = t.t("settings.gameSeedInputPlaceholder")
                      , S = c();
                    return v !== y._v$3 && P(L, "placeholder", y._v$3 = v),
                    S !== y._v$4 && (p.disabled = y._v$4 = S),
                    y
                }
                , {
                    _v$3: void 0,
                    _v$4: void 0
                }),
                x( () => L.value = u() ? u() : ""),
                R
            }
            )()
        }
        )())]
    }
    ;
    Ge(["click", "input"]);
    const dR = b('<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>')
      , OR = b('<div id="settings-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"></div><div class="flex flex-col text-base"><div class="m-4"><label for="keyboardHeightRange"></label><input type="range" class="appearance-none w-full h-2 rounded bg-gray-300 dark:bg-gray-600 cursor-pointer" id="keyboardHeightRange"></div><div class="m-4"><label for="gameSizeSelect" class="block text-black dark:text-white mb-1"></label><div class="relative"><div class="flex items-center text-black dark:text-white absolute top-0 bottom-0 right-3 pointer-events-none"></div><select id="gameSizeSelect" class="bg-gray-50 border border-gray-400 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer appearance-none"><option value="fit"></option><option value="square"></option></select></div></div></div></div></div>')
      , SR = b('<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"></button><div class="text-center text-base"></div></div>')
      , qt = e => ( () => {
        const t = dR.cloneNode(!0)
          , r = t.firstChild
          , n = r.firstChild
          , o = n.firstChild
          , i = o.nextSibling
          , a = i.nextSibling
          , s = n.nextSibling;
        return fe(o, "change", e.onChange),
        fe(o, "click", e.onClick, !0),
        O(s, () => e.text),
        x(u => {
            const l = e.id
              , A = e.id
              , d = e.ariaLabel
              , c = !!e.checked
              , E = !!(e.checked && !e.colorblind)
              , R = !!(e.checked && e.colorblind);
            return l !== u._v$ && P(r, "for", u._v$ = l),
            A !== u._v$2 && P(o, "id", u._v$2 = A),
            d !== u._v$3 && P(o, "aria-label", u._v$3 = d),
            c !== u._v$4 && a.classList.toggle("translate-x-[100%]", u._v$4 = c),
            E !== u._v$5 && a.classList.toggle("bg-box-correct", u._v$5 = E),
            R !== u._v$6 && a.classList.toggle("bg-box-correct-alt", u._v$6 = R),
            u
        }
        , {
            _v$: void 0,
            _v$2: void 0,
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
        }),
        x( () => o.checked = e.checked),
        t
    }
    )()
      , fR = e => {
        const t = Z()
          , [r,n] = le();
        return ( () => {
            const o = OR.cloneNode(!0)
              , i = o.firstChild
              , a = i.firstChild
              , s = i.nextSibling
              , u = s.firstChild
              , l = u.nextSibling
              , A = l.firstChild
              , d = A.firstChild
              , c = d.nextSibling
              , E = A.nextSibling
              , R = E.firstChild
              , f = R.nextSibling
              , h = f.firstChild
              , I = h.nextSibling
              , C = I.firstChild
              , N = C.nextSibling;
            return fe(a, "click", e.onCloseSettings, !0),
            O(a, m(dr, {})),
            O(u, () => t.t("header.settings")),
            O(l, m(qt, {
                id: "toggleDarkMode",
                get text() {
                    return t.t("settings.darkMode")
                },
                get checked() {
                    return r.darkMode
                },
                get colorblind() {
                    return r.colorblind
                },
                onClick: () => J(r.vibration),
                onChange: g => n.setDarkMode(g.currentTarget.checked)
            }), A),
            O(l, m(qt, {
                id: "toggleColorblind",
                get text() {
                    return t.t("settings.colorblindMode")
                },
                get checked() {
                    return r.colorblind
                },
                get colorblind() {
                    return r.colorblind
                },
                onClick: () => J(r.vibration),
                onChange: g => n.setColorblind(g.currentTarget.checked)
            }), A),
            O(l, la && m(qt, {
                id: "toggleVibration",
                get text() {
                    return t.t("settings.vibration")
                },
                get checked() {
                    return r.vibration
                },
                get colorblind() {
                    return r.colorblind
                },
                onClick: () => J(r.vibration),
                onChange: g => n.setVibration(g.currentTarget.checked)
            }), A),
            O(l, m(qt, {
                id: "toggleEnterBsReversed",
                get text() {
                    return t.t("settings.switchKeys", {
                        example: `${r.enterBsReversed ? "\u23CE" : "\u232B"} . . . ${r.enterBsReversed ? "\u232B" : "\u23CE"}`
                    })
                },
                get checked() {
                    return r.enterBsReversed
                },
                get colorblind() {
                    return r.colorblind
                },
                onClick: () => J(r.vibration),
                onChange: g => n.setEnterBsReversed(g.currentTarget.checked),
                get ariaLabel() {
                    return t.t("settings.switchKeysInfo", {
                        left: r.enterBsReversed ? t.t("game.backspaceKey") : t.t("game.enterKey"),
                        right: r.enterBsReversed ? t.t("game.enterKey") : t.t("game.backspaceKey")
                    })
                }
            }), A),
            O(l, m(qt, {
                id: "toggleAchievementNotifs",
                get text() {
                    return t.t("settings.achievementNotifs")
                },
                get checked() {
                    return r.achievementNotifs
                },
                get colorblind() {
                    return r.colorblind
                },
                onClick: () => J(r.vibration),
                onChange: g => n.setAchievementNotifs(g.currentTarget.checked),
                get ariaLabel() {
                    return t.t("settings.achievementNotifs")
                }
            }), A),
            O(d, () => t.t("settings.keyboardHeight", {
                height: r.keyboardHeight.toFixed(1)
            })),
            c.addEventListener("change", g => n.setKeyboardHeight(Number(g.currentTarget.value))),
            c.$$input = g => n.setKeyboardHeight(Number(g.currentTarget.value)),
            P(c, "min", Aa),
            P(c, "max", sa),
            P(c, "step", el),
            O(R, () => t.t("settings.gameSize")),
            O(h, m(en, {})),
            I.addEventListener("change", g => n.setGameSize(g.currentTarget.value)),
            I.$$click = () => J(r.vibration),
            O(C, () => t.t("settings.gameFit")),
            O(N, () => t.t("settings.gameSquare")),
            O(s, m(ER, {
                get mode() {
                    return e.mode
                }
            }), null),
            O(s, ( () => {
                const g = T( () => e.mode === "free" && r.free.guesses.length > 0 && !ge(e.mode, r));
                return () => g() && ( () => {
                    const L = SR.cloneNode(!0)
                      , p = L.firstChild
                      , y = p.nextSibling;
                    return p.$$click = () => {
                        J(r.vibration),
                        n.resetFree()
                    }
                    ,
                    O(p, () => t.t("settings.resetPractice")),
                    O(y, () => t.t("settings.resetWarning")),
                    L
                }
                )()
            }
            )(), null),
            x(g => {
                const L = t.t("header.settings")
                  , p = t.t("app.close")
                  , y = !r.colorblind
                  , v = !!r.colorblind;
                return L !== g._v$7 && P(o, "aria-label", g._v$7 = L),
                p !== g._v$8 && P(a, "aria-label", g._v$8 = p),
                y !== g._v$9 && c.classList.toggle("quordle-range", g._v$9 = y),
                v !== g._v$10 && c.classList.toggle("quordle-range-alt", g._v$10 = v),
                g
            }
            , {
                _v$7: void 0,
                _v$8: void 0,
                _v$9: void 0,
                _v$10: void 0
            }),
            x( () => c.value = r.keyboardHeight),
            x( () => I.value = r.gameSize),
            o
        }
        )()
    }
    ;
    Ge(["click", "input"]);
    const RR = b('<div id="statistics-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><h1 class="text-4xl mt-2 mb-4 text-center"></h1><div class="w-full grid grid-cols-4 gap-2"><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div></div><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div></div>')
      , Pi = b('<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>')
      , IR = b('<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1"> - </div><div class="flex-1 text-right"> - </div></div>')
      , hR = b('<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden" role="button" aria-controls="loss-distribution"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>')
      , mR = b('<div id="loss-distribution"><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div>')
      , vR = [...Array(K - (Be - 1)).keys()].map(e => e + (Be - 1))
      , gR = [...Array(Be).keys()].map(e => e + K).reverse()
      , CR = e => {
        const t = Z()
          , [r,n] = le()
          , [o,i] = Q(!1)
          , a = T( () => Math.max(...r[e.mode].history.slice(Be - 1, K), 1))
          , s = T( () => Math.max(...r[e.mode].history.slice(K), 1))
          , u = T( () => r[e.mode].history.slice(Be - 1, K).reduce( (h, I) => h + I, 0))
          , l = T( () => r[e.mode].history.slice(K).reduce( (h, I) => h + I, 0))
          , A = T( () => u() + l())
          , d = T( () => r[e.mode].answersCorrect.reduce( (h, I) => h += I >= 0 ? 1 : 0, 0))
          , c = T( () => Math.max(...r[e.mode].answersCorrect))
          , E = T( () => ge(e.mode, r) && d() === Be)
          , R = T( () => ge(e.mode, r) && d() < Be)
          , f = T( () => e.mode === "daily" ? t.t("header.daily") : t.t("header.practice"));
        return ( () => {
            const h = RR.cloneNode(!0)
              , I = h.firstChild
              , C = I.firstChild
              , N = I.nextSibling
              , g = N.firstChild
              , L = g.nextSibling
              , p = L.firstChild
              , y = p.firstChild
              , v = y.nextSibling
              , S = p.nextSibling
              , M = S.firstChild
              , H = M.nextSibling
              , w = S.nextSibling
              , $ = w.firstChild
              , z = $.nextSibling
              , B = w.nextSibling
              , te = B.firstChild
              , Ee = te.nextSibling
              , ce = L.nextSibling
              , Re = ce.nextSibling
              , be = Re.nextSibling;
            return fe(C, "click", e.onCloseStatistics, !0),
            O(C, m(dr, {})),
            O(g, ( () => {
                const F = T( () => e.mode === "daily");
                return () => F() ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
            }
            )()),
            O(y, () => u() + l()),
            O(v, () => t.t("stats.played")),
            O(M, () => Math.round((A() > 0 ? u() / A() : 0) * 100)),
            O(H, () => t.t("stats.winPercent")),
            O($, () => r[e.mode].currentStreak),
            O(z, () => t.t("stats.currentStreak")),
            O(te, () => r[e.mode].maxStreak),
            O(Ee, () => t.t("stats.maxStreak")),
            O(ce, () => t.t("stats.winDistribution")),
            O(Re, () => t.t("stats.winDistExplain")),
            O(be, () => vR.map(F => ( () => {
                const q = Pi.cloneNode(!0)
                  , X = q.firstChild
                  , se = X.nextSibling;
                return O(X, F + 1),
                O(se, () => r[e.mode].history[F]),
                x(V => {
                    const j = t.t("stats.aria.winChartBar", {
                        numGames: t.t("stats.aria.numGames", {
                            smart_count: r[e.mode].history[F]
                        }),
                        numGuesses: t.t("stats.aria.numGuesses", {
                            smart_count: F + 1
                        })
                    })
                      , Ae = {
                        " text-black bg-box-correct": E() && c() === F,
                        "text-black bg-gray-300 dark:text-white dark:bg-gray-700": !(E() && c() === F)
                    }
                      , Pe = r[e.mode].history[F] / a() * 100 + "%";
                    return j !== V._v$7 && P(q, "aria-label", V._v$7 = j),
                    V._v$8 = xe(se, Ae, V._v$8),
                    Pe !== V._v$9 && se.style.setProperty("width", V._v$9 = Pe),
                    V
                }
                , {
                    _v$7: void 0,
                    _v$8: void 0,
                    _v$9: void 0
                }),
                q
            }
            )())),
            O(N, ( () => {
                const F = T( () => l() > 0);
                return () => F() && [( () => {
                    const q = IR.cloneNode(!0)
                      , X = q.firstChild
                      , se = X.firstChild
                      , V = X.nextSibling
                      , j = V.firstChild;
                    return O(X, () => t.t("stats.win"), se),
                    O(X, u, null),
                    O(V, l, j),
                    O(V, () => t.t("stats.loss"), null),
                    q
                }
                )(), ( () => {
                    const q = hR.cloneNode(!0)
                      , X = q.firstChild
                      , se = X.nextSibling;
                    return q.$$click = () => {
                        J(r.vibration),
                        i(!o())
                    }
                    ,
                    x(V => {
                        const j = o()
                          , Ae = t.t("stats.aria.winRateRatio")
                          , Pe = u() / A() * 100 + "%"
                          , Le = l() / A() * 100 + "%";
                        return j !== V._v$10 && P(q, "aria-expanded", V._v$10 = j),
                        Ae !== V._v$11 && P(q, "aria-label", V._v$11 = Ae),
                        Pe !== V._v$12 && X.style.setProperty("width", V._v$12 = Pe),
                        Le !== V._v$13 && se.style.setProperty("width", V._v$13 = Le),
                        V
                    }
                    , {
                        _v$10: void 0,
                        _v$11: void 0,
                        _v$12: void 0,
                        _v$13: void 0
                    }),
                    q
                }
                )()]
            }
            )(), null),
            O(N, ( () => {
                const F = T( () => !!o());
                return () => F() && ( () => {
                    const q = mR.cloneNode(!0)
                      , X = q.firstChild
                      , se = X.nextSibling
                      , V = se.nextSibling;
                    return O(X, () => t.t("stats.lossDistribution")),
                    O(se, () => t.t("stats.lossDistExplain")),
                    O(V, () => gR.map(j => ( () => {
                        const Ae = Pi.cloneNode(!0)
                          , Pe = Ae.firstChild
                          , Le = Pe.nextSibling;
                        return O(Pe, Be - (j - K)),
                        O(Le, () => r[e.mode].history[j]),
                        x(U => {
                            const D = t.t("stats.aria.lossChartBar", {
                                numGames: t.t("stats.aria.numGames", {
                                    smart_count: r[e.mode].history[j]
                                }),
                                numWords: t.t("stats.aria.numWords", {
                                    smart_count: Be - (j - K)
                                })
                            })
                              , k = {
                                "text-white bg-rose-600 dark:bg-rose-800": R() && d() === j - K,
                                "text-black bg-gray-300 dark:bg-gray-700 dark:text-white": !(R() && d() === j - K)
                            }
                              , G = r[e.mode].history[j] / s() * 100 + "%";
                            return D !== U._v$14 && P(Ae, "aria-label", U._v$14 = D),
                            U._v$15 = xe(Le, k, U._v$15),
                            G !== U._v$16 && Le.style.setProperty("width", U._v$16 = G),
                            U
                        }
                        , {
                            _v$14: void 0,
                            _v$15: void 0,
                            _v$16: void 0
                        }),
                        Ae
                    }
                    )())),
                    q
                }
                )()
            }
            )(), null),
            x(F => {
                const q = e.mode === "daily" ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
                  , X = t.t("app.close")
                  , se = t.t("stats.aria.played", {
                    mode: f(),
                    num: u() + l()
                })
                  , V = t.t("stats.aria.winPercent", {
                    mode: f(),
                    num: Math.round((A() > 0 ? u() / A() : 0) * 100)
                })
                  , j = t.t("stats.aria.currentStreak", {
                    mode: f(),
                    numGames: t.t("stats.aria.numGames", {
                        smart_count: r[e.mode].maxStreak
                    })
                })
                  , Ae = t.t("stats.aria.maxStreak", {
                    mode: f(),
                    numGames: t.t("stats.aria.numGames", {
                        smart_count: r[e.mode].maxStreak
                    })
                });
                return q !== F._v$ && P(h, "aria-label", F._v$ = q),
                X !== F._v$2 && P(C, "aria-label", F._v$2 = X),
                se !== F._v$3 && P(p, "aria-label", F._v$3 = se),
                V !== F._v$4 && P(S, "aria-label", F._v$4 = V),
                j !== F._v$5 && P(w, "aria-label", F._v$5 = j),
                Ae !== F._v$6 && P(B, "aria-label", F._v$6 = Ae),
                F
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0
            }),
            h
        }
        )()
    }
    ;
    Ge(["click"]);
    var NR = ["Alejandra P.", "Anna Kalata", "Anna Torres", "BEVERLY L Cheyney", "Bernadette McDougall", "Beth Secor", "Beth Vargas", "Blane Mall", "Bob Ezrin", "Bob Smith", "Bobby Franklin", "Bryan", "Bryan Williams", "Brynn Newton", "CJ Blake", "Carol Jones", "Carrie W NM", "Cat", "Charmiane Claxton", "Chris Benton", "Cindy McCullough", "Dale Johnson", "Dan Tienes", "Dancer 58", "David Pattillo", "Deborah Chadwick", "Dorothy Drennen", "Dug Karlson", "Elisabeth Martensen", "Elisabeth Puglisi", "Ellen Lidington", "Eric Johnson", "Eric L. Epps", "Flip Kromer", "Fredrick HAGEMEISTER", "Greg Webb", "HelenM", "JK Mc", "James Ralff", "Jeff LeCrone", "Jennifer Green", "Jess S", "Jhonny Rodriguez", "Jo Ann Coopwood", "Juliann Rulo", "Julie Gelfuso", "Jun Kwang Han", "June McCallum", "Karen Haack", "Karsten Rutt", "Kate", "Kathie Bollenbach", "Kelley Armstrong", "Kerin T Huber", "Kevin Eadie", "Kim Kalny", "LISA MOSER", "LadyAdrienne DelaCruz", "Leah Swiler", "Leanne Haire", "Linda Thomas", "Lloyd Lewis", "Lori Salganicoff", "Lynn M", "Lynn Pavalon", "Marcella Hilhorst", "Marcy Neal", "Margaret Minton", "Margaret W Sheppard", "Margaret Wendels", "Maria Ashot", "Mark Richards", "Mary Douglass Ryan", "Mary Kenny", "Mary Reddaway", "Maureen Shepherd", "Melissa Whiffin", "Micha\u0142 Bartoszkiewicz", "Mike Robertson", "Molly Bierman", "Nadia Beckett", "Nancy Ellis", "Nicole Dawson", "Paul Dzus", "Paula Gibes Smith", "Ralph Warren", "Rama Kocherlakota", "Renata Loewen", "Rob DeSisto", "RogueWarrior", "Ruth Kravitz", "SJ Cincotti", "Sabina Rogers", "Sally Taylor", "Samantha Weidenbenner", "Sammy Heather", "Sandy Niles", "Sara Widboom", "Sarah Wiley", "Scott Tuggle", "Sean G", "Shelley Estelle", "Susan Mazze", "Susan Thieme", "Tim Kunin", "Trisha Gorrell", "Ty Curtis", "Vonnie Matheny", "ZaftigShady", "doug wheaton", "eggler", "pp52", "rizen"];
    const yR = "1.11.4"
      , LR = b('<div class="flex w-[100%]" role="row"></div>')
      , TR = b('<div class="timezone-wrapper"><div class="adthrive-comscore adthrive-footer-message"><div class="adthrive-ccpa-link">Information from your device can be used to personalize your ad experience. <br><a>Do not sell my personal information.</a></div></div></div>')
      , pR = b('<div id="tutorial-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6"><h1 class="text-3xl mt-2 mb-1"></h1><div class="text-base mb-3"></div><div class="text-base"></div><div class="text-base"></div><div class="text-base"></div><h2 class="text-3xl mt-4 mb-2"></h2><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="text-base"></div><div class="flex w-[100%] mb-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="flex w-[100%] my-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="text-base"></div><ol class="text-base list-decimal ml-8 mb-6"><li></li><li></li><li></li><li></li></ol><div class="text-base mb-3"></div><div class="text-base mb-8"></div><h1 class="text-3xl mb-1"></h1><div class="text-base mb-3"></div><div class="text-base font-semibold mb-8"></div><hr class="opacity-20"><div class="text-base text-center my-5 flex justify-center gap-4"></div><div class="text-base text-center my-5 text-xs text-gray-400">v<!>&ndash;</div></div></div>')
      , UR = b('<div class="flex item-center justify-center mb-6"><a title="Crowdin" target="_blank" href="https://crowdin.com/project/quordle" class="inline-flex"><img src="https://badges.crowdin.net/quordle/localized.svg"></a></div>');
    bO(NR);
    const ut = e => {
        const t = Z();
        return ( () => {
            const r = LR.cloneNode(!0);
            return O(r, () => e.word[0].split("").map( (n, o) => m(ys, {
                get state() {
                    return e.word[1][o]
                },
                letter: n,
                gameRow: 0,
                gameCol: o,
                rowTemporalState: "past",
                activeCol: 0,
                get colorblind() {
                    return e.colorblind
                },
                currentRow: 0,
                get tileHeight() {
                    return e.tileHeight
                },
                get presentTileHeight() {
                    return e.tileHeight
                },
                answered: !1,
                gameSize: "square",
                get ariaLabel() {
                    return T( () => e.word[1][o] === "diff")() ? t.t("game.aria.tileDiff", {
                        letter: n,
                        column: o + 1
                    }) : T( () => e.word[1][o] === "none")() ? t.t("game.aria.tileNone", {
                        letter: n,
                        column: o + 1
                    }) : t.t("game.aria.tileCorrect", {
                        letter: n,
                        column: o + 1
                    })
                }
            }))),
            r
        }
        )()
    }
      , DR = e => {
        const t = Z()
          , [r] = le()
          , [n,o] = Q(0)
          , i = Js({
            onResize: ({width: A, height: d}) => {
                const c = parseFloat(getComputedStyle(document.documentElement).fontSize);
                if (A) {
                    const E = (A - c * .5 - c * .25 * 10) / 10;
                    o(E)
                }
            }
        })
          , [a,s] = Q(ci())
          , u = T( () => (console.log(a()),
        a() === "America/Los_Angeles" ? TR.cloneNode(!0) : !1))
          , l = [[t.t("tutorial.exampleWord1"), ["correct", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord2"), ["none", "diff", "none", "none", "none"]], [t.t("tutorial.exampleWord3"), ["none", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord4"), ["none", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord4"), ["none", "none", "diff", "none", "correct"]], [t.t("tutorial.exampleWord4"), ["none", "none", "none", "diff", "none"]], [t.t("tutorial.exampleWord4"), ["none", "correct", "none", "none", "diff"]]];
        return xi( () => qe($t, null, function*() {
            s(ci())
        })),
        ( () => {
            const A = pR.cloneNode(!0)
              , d = A.firstChild
              , c = d.firstChild
              , E = d.nextSibling
              , R = E.firstChild
              , f = R.nextSibling
              , h = f.nextSibling
              , I = h.nextSibling
              , C = I.nextSibling
              , N = C.nextSibling
              , g = N.nextSibling
              , L = g.nextSibling
              , p = L.nextSibling
              , y = p.nextSibling
              , v = y.nextSibling
              , S = v.nextSibling
              , M = S.nextSibling
              , H = M.nextSibling
              , w = H.firstChild
              , $ = w.nextSibling
              , z = H.nextSibling
              , B = z.firstChild
              , te = B.nextSibling
              , Ee = z.nextSibling
              , ce = Ee.nextSibling
              , Re = ce.firstChild
              , be = Re.nextSibling
              , F = be.nextSibling
              , q = F.nextSibling
              , X = ce.nextSibling
              , se = X.nextSibling
              , V = se.nextSibling
              , j = V.nextSibling
              , Ae = j.nextSibling
              , Pe = Ae.nextSibling
              , Le = Pe.nextSibling
              , U = Le.nextSibling
              , D = U.firstChild
              , k = D.nextSibling;
            return k.nextSibling,
            fe(c, "click", e.onCloseTutorial, !0),
            O(c, m(dr, {})),
            $e(i, E),
            O(R, () => t.t("tutorial.title")),
            O(f, () => t.t("tutorial.p1")),
            O(h, () => t.t("tutorial.p2")),
            O(I, () => t.t("tutorial.p3")),
            O(C, () => t.t("tutorial.p4")),
            O(N, () => t.t("tutorial.examples")),
            O(g, m(ut, {
                get word() {
                    return l[0]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(L, () => t.t("tutorial.example1")),
            O(p, m(ut, {
                get word() {
                    return l[1]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(y, () => t.t("tutorial.example2")),
            O(v, m(ut, {
                get word() {
                    return l[2]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(S, () => t.t("tutorial.example3")),
            O(M, () => t.t("tutorial.example4Pre")),
            O(w, m(ut, {
                get word() {
                    return l[3]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O($, m(ut, {
                get word() {
                    return l[4]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(B, m(ut, {
                get word() {
                    return l[5]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(te, m(ut, {
                get word() {
                    return l[6]
                },
                get colorblind() {
                    return r.colorblind
                },
                get tileHeight() {
                    return n()
                }
            })),
            O(Ee, () => t.t("tutorial.example4Title")),
            O(Re, () => t.t("tutorial.example4b1")),
            O(be, () => t.t("tutorial.example4b2")),
            O(F, () => t.t("tutorial.example4b3")),
            O(q, () => t.t("tutorial.example4b4")),
            O(X, () => t.t("tutorial.final1")),
            O(se, () => t.t("tutorial.final2")),
            O(E, ( () => {
                const G = T( () => t.locale() !== "en");
                return () => G() && UR.cloneNode(!0)
            }
            )(), V),
            O(V, () => t.t("tutorial.explanationTitle")),
            O(j, () => t.t("tutorial.explanationP1")),
            O(Ae, () => t.t("tutorial.explanationP2")),
            O(Le, m(pe, {
                href: "/privacy",
                target: "_blank",
                get children() {
                    return t.t("tutorial.privacy")
                }
            }), null),
            O(Le, m(pe, {
                href: "/terms",
                target: "_blank",
                get children() {
                    return t.t("tutorial.terms")
                }
            }), null),
            O(E, u, U),
            O(U, yR, k),
            O(U, () => window.__COMMIT_REF__, null),
            x(G => {
                const de = t.t("tutorial.tutorial")
                  , oe = t.t("app.close")
                  , Ne = t.t("tutorial.aria.tutorialGuess", {
                    guess: l[0]
                })
                  , ie = t.t("tutorial.aria.tutorialGuess", {
                    guess: l[1]
                })
                  , Je = t.t("tutorial.aria.tutorialGuess", {
                    guess: l[2]
                })
                  , Ve = t.t("tutorial.aria.tutorialGuessBoard", {
                    guess: l[3],
                    num: 1
                })
                  , Ze = t.t("tutorial.aria.tutorialGuessBoard", {
                    guess: l[4],
                    num: 2
                })
                  , Ye = t.t("tutorial.aria.tutorialGuessBoard", {
                    guess: l[5],
                    num: 3
                })
                  , Qe = t.t("tutorial.aria.tutorialGuessBoard", {
                    guess: l[6],
                    num: 4
                });
                return de !== G._v$ && P(A, "aria-label", G._v$ = de),
                oe !== G._v$2 && P(c, "aria-label", G._v$2 = oe),
                Ne !== G._v$3 && P(g, "aria-label", G._v$3 = Ne),
                ie !== G._v$4 && P(p, "aria-label", G._v$4 = ie),
                Je !== G._v$5 && P(v, "aria-label", G._v$5 = Je),
                Ve !== G._v$6 && P(w, "aria-label", G._v$6 = Ve),
                Ze !== G._v$7 && P($, "aria-label", G._v$7 = Ze),
                Ye !== G._v$8 && P(B, "aria-label", G._v$8 = Ye),
                Qe !== G._v$9 && P(te, "aria-label", G._v$9 = Qe),
                G
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0,
                _v$7: void 0,
                _v$8: void 0,
                _v$9: void 0
            }),
            A
        }
        )()
    }
    ;
    Ge(["click"]);
    const bR = b('<div class="z-[500000] fixed w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>')
      , PR = b('<div class="flex w-full" role="row"></div>')
      , MR = b('<div class="flex flex-col flex-auto p-1 first:pl-2 last:pr-2" role="table"></div>')
      , wR = b('<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto relative"><div class="w-full flex-col" aria-label="Game Boards"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>')
      , BR = b('<div class="flex w-full"></div>')
      , Lr = e => m(oa, {
        enterClass: "quordle-exit-page",
        enterToClass: "quordle-enter-page",
        exitClass: "quordle-enter-page",
        exitToClass: "quordle-exit-page",
        get children() {
            return T( () => !!e.open)() && ( () => {
                const t = bR.cloneNode(!0);
                return O(t, () => e.children),
                x( () => t.style.setProperty("font-size", e.fontSize + "px")),
                t
            }
            )()
        }
    })
      , xR = [...Array(wt).keys()]
      , GR = [...Array(ia).keys()]
      , _R = [...Array(K).keys()]
      , FR = [...Array(He).keys()]
      , $R = e => {
        const [t,r] = le()
          , n = e.gameX + e.gameY * wt
          , o = T( () => {
            const u = t[e.mode]
              , l = u.guesses
              , A = u.answers[n];
            return l.indexOf(A)
        }
        )
          , i = T( () => o() !== -1 && o() < e.gameRow)
          , a = T( () => {
            const l = t[e.mode].guesses;
            return e.gameRow === l.length ? ge(e.mode, t) ? "never" : "present" : i() ? "never" : l.length > e.gameRow ? "past" : "future"
        }
        )
          , s = T( () => {
            const u = e.gameX + e.gameY * wt
              , l = t[e.mode].guesses
              , A = t[e.mode].current
              , d = l[e.gameRow]
              , c = t[e.mode].states[u][e.gameRow]
              , E = t[e.mode].answersCorrect[u];
            return e.gameRow === E ? `Row ${e.gameRow + 1}. Guess ${d} is correct.` : e.gameRow === l.length && E < 0 ? `Row ${e.gameRow + 1}. Current guess ${A}.` : d && c ? `Row ${e.gameRow + 1}. Guess ${d}. ` : `Row ${e.gameRow + 1}. ` + (e.gameRow > E && E >= 0 ? `Answer already guessed correctly on row ${E + 1}.` : "Future guess.")
        }
        );
        return ( () => {
            const u = PR.cloneNode(!0);
            return O(u, () => FR.map(l => m(tf, {
                get mode() {
                    return e.mode
                },
                get gameX() {
                    return e.gameX
                },
                get gameY() {
                    return e.gameY
                },
                get gameRow() {
                    return e.gameRow
                },
                gameCol: l,
                get tileHeight() {
                    return e.tileHeight
                },
                get presentTileHeight() {
                    return e.presentTileHeight
                },
                get answerIndex() {
                    return o()
                },
                get answered() {
                    return i()
                },
                get temporalState() {
                    return a()
                }
            }))),
            x(l => {
                const A = s()
                  , d = a() === "present" && !i() && !!t[e.mode].extraCurrent && t[e.mode].extraCurrent.length > 0 && t[e.mode].extraCurrent.length % 2 === 0
                  , c = a() === "present" && !i() && !!t[e.mode].extraCurrent && t[e.mode].extraCurrent.length > 0 && t[e.mode].extraCurrent.length % 2 === 1;
                return A !== l._v$ && P(u, "aria-label", l._v$ = A),
                d !== l._v$2 && u.classList.toggle("quordle-shake-anim-0", l._v$2 = d),
                c !== l._v$3 && u.classList.toggle("quordle-shake-anim-1", l._v$3 = c),
                l
            }
            , {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
            }),
            u
        }
        )()
    }
      , HR = e => ( () => {
        const t = MR.cloneNode(!0);
        return O(t, () => _R.map(r => m($R, {
            get mode() {
                return e.mode
            },
            get gameX() {
                return e.gameX
            },
            get gameY() {
                return e.gameY
            },
            gameRow: r,
            get tileHeight() {
                return e.tileHeight
            },
            get presentTileHeight() {
                return e.presentTileHeight
            }
        }))),
        x( () => P(t, "aria-label", `Game Board ${e.gameX + e.gameY * wt + 1}`)),
        t
    }
    )()
      , Mi = e => {
        const [t,r] = le()
          , [n,o] = ta()
          , [i,a] = Q(35)
          , [s,u] = Q(0)
          , [l,A] = Q(0)
          , [d,c] = Q(!1)
          , E = T( () => n.overlay === "tutorial")
          , R = T( () => n.overlay === "statistics")
          , f = T( () => n.overlay === "settings")
          , h = T( () => n.overlay === "achievements")
          , I = N => {
            (E() || R() || f()) && N.key === "Escape" && o({
                overlay: void 0
            })
        }
        ;
        document.addEventListener("keydown", I),
        De( () => document.removeEventListener("keydown", I));
        const C = Js({
            onResize: ({width: N, height: g}) => {
                const L = parseFloat(getComputedStyle(document.documentElement).fontSize);
                if (N) {
                    a(N / 16);
                    const p = (N - 1.5 * L - L * .25 * 10) / 10;
                    if (A(p),
                    g)
                        if (ge(e.mode, t)) {
                            const y = (g - L - L * .25 * 18) / 18;
                            c(y < p / 3),
                            u(Math.max(p / 3, Math.min(p, y)))
                        } else {
                            const y = (g - L - L * .25 * 18 - p * 2) / 16;
                            c(y < p / 3),
                            u(Math.max(p / 3, Math.min(p, y)))
                        }
                }
            }
        });
        return ( () => {
            const N = wR.cloneNode(!0)
              , g = N.firstChild
              , L = g.nextSibling
              , p = L.firstChild
              , y = L.nextSibling;
            return O(N, m(xf, {
                get mode() {
                    return e.mode
                },
                onOpenTutorial: () => {
                    J(t.vibration),
                    Se("event", "tutorial", {
                        mode: e.mode
                    }),
                    o({
                        overlay: "tutorial"
                    })
                }
                ,
                onOpenStatistics: () => {
                    J(t.vibration),
                    Se("event", "statistics", {
                        mode: e.mode
                    }),
                    o({
                        overlay: "statistics"
                    })
                }
                ,
                onOpenSettings: () => {
                    J(t.vibration),
                    Se("event", "settings", {
                        mode: e.mode
                    }),
                    o({
                        overlay: "settings"
                    })
                }
                ,
                onOpenAchievements: () => {
                    J(t.vibration),
                    Se("event", "achievements", {
                        mode: e.mode
                    }),
                    o({
                        overlay: "achievements"
                    })
                }
            }), g),
            O(g, m(ZS, {
                get mode() {
                    return e.mode
                }
            })),
            $e(C, L),
            O(p, () => GR.map(v => ( () => {
                const S = BR.cloneNode(!0);
                return P(S, "id", `game-board-row-${v + 1}`),
                P(S, "aria-label", `Game Boards Row ${v + 1}`),
                O(S, () => xR.map(M => m(HR, {
                    get mode() {
                        return e.mode
                    },
                    gameX: M,
                    gameY: v,
                    get tileHeight() {
                        return s()
                    },
                    get presentTileHeight() {
                        return l()
                    }
                }))),
                S
            }
            )())),
            O(L, m(CS, {
                onOpenAchievements: () => {
                    J(t.vibration),
                    Se("event", "achievements", {
                        mode: e.mode
                    }),
                    o({
                        overlay: "achievements"
                    })
                }
            }), null),
            O(y, ( () => {
                const v = T( () => !!ge(e.mode, t));
                return () => v() ? m(XS, {
                    get mode() {
                        return e.mode
                    }
                }) : m(Hf, {
                    get mode() {
                        return e.mode
                    },
                    get fontSize() {
                        return i()
                    },
                    get disableInputCapture() {
                        return E() || R() || f()
                    }
                })
            }
            )()),
            O(N, m(Et, {
                id: "sidebar",
                cssClassName: "sticky-sidebar",
                className: "",
                get children() {
                    return [m(Et, {
                        id: "sidebar-ad-container",
                        align: "game-board-row-1",
                        alignThreshold: 0,
                        get mode() {
                            return e.mode
                        },
                        get children() {
                            return m(Et, {
                                id: "sidebar-ad",
                                className: "sidebar-ad"
                            })
                        }
                    }), m(Et, {
                        id: "sidebar-ad-2-container",
                        align: "game-board-row-2",
                        alignThreshold: 275,
                        get mode() {
                            return e.mode
                        },
                        get children() {
                            return m(Et, {
                                id: "sidebar-ad-2",
                                className: "sidebar-ad-2"
                            })
                        }
                    })]
                }
            }), null),
            O(N, m(Lr, {
                get open() {
                    return f()
                },
                get fontSize() {
                    return i()
                },
                get children() {
                    return m(fR, {
                        get mode() {
                            return e.mode
                        },
                        onCloseSettings: () => {
                            J(t.vibration),
                            o({
                                overlay: void 0
                            })
                        }
                    })
                }
            }), null),
            O(N, m(Lr, {
                get open() {
                    return R()
                },
                get fontSize() {
                    return i()
                },
                get children() {
                    return m(CR, {
                        get mode() {
                            return e.mode
                        },
                        onCloseStatistics: () => {
                            J(t.vibration),
                            o({
                                overlay: void 0
                            })
                        }
                    })
                }
            }), null),
            O(N, m(Lr, {
                get open() {
                    return E()
                },
                get fontSize() {
                    return i()
                },
                get children() {
                    return m(DR, {
                        onCloseTutorial: () => {
                            J(t.vibration),
                            o({
                                overlay: void 0
                            })
                        }
                    })
                }
            }), null),
            O(N, m(Lr, {
                get open() {
                    return h()
                },
                get fontSize() {
                    return i()
                },
                get children() {
                    return m(yS, {
                        onCloseAchievements: () => {
                            J(t.vibration),
                            o({
                                overlay: void 0
                            })
                        }
                    })
                }
            }), null),
            O(N, ( () => {
                const v = T( () => !!ge(e.mode, t));
                return () => v() && m(DS, {})
            }
            )(), null),
            x(v => {
                const S = {
                    "h-full": !Uo,
                    "h-[calc(100%-25px)] bottom-[25px]": Uo
                }
                  , M = i() + "px"
                  , H = !!(!E() && !R() && (t.gameSize === "square" || d()))
                  , w = !!(E() || R() || t.gameSize === "fit" && !d())
                  , $ = i() + "px"
                  , z = i() + "px";
                return v._v$4 = xe(N, S, v._v$4),
                M !== v._v$5 && g.style.setProperty("font-size", v._v$5 = M),
                H !== v._v$6 && L.classList.toggle("overflow-auto", v._v$6 = H),
                w !== v._v$7 && L.classList.toggle("overflow-hidden", v._v$7 = w),
                $ !== v._v$8 && L.style.setProperty("font-size", v._v$8 = $),
                z !== v._v$9 && y.style.setProperty("font-size", v._v$9 = z),
                v
            }
            , {
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0,
                _v$7: void 0,
                _v$8: void 0,
                _v$9: void 0
            }),
            N
        }
        )()
    }
      , kR = b('<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl"></h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500"></span> </h6><p class="mb-8 text-center text-gray-500 md:text-lg"></p></div></div></div>')
      , JR = e => {
        const t = Z();
        return ( () => {
            const r = kR.cloneNode(!0)
              , n = r.firstChild
              , o = n.firstChild
              , i = o.firstChild
              , a = i.nextSibling
              , s = a.firstChild;
            s.nextSibling;
            const u = a.nextSibling;
            return O(i, () => t.t("app.error404")),
            O(s, () => t.t("app.oops")),
            O(a, () => t.t("app.pageNotFound"), null),
            O(u, () => t.t("app.notFoundText")),
            O(o, m(pe, {
                href: "/",
                class: "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
                get children() {
                    return t.t("app.backToDaily")
                }
            }), null),
            r
        }
        )()
    }
      , VR = b('<nav class="bg-new-blue w-screen border-b-2 border-white dark:border-gray-800 sticky top-0 max-w-full"></nav>')
      , ZR = b('<div class="flex items-center max-w-[550px] h-[58px] m-auto px-4"></div>')
      , YR = b('<div class="bg-slate-300 dark:bg-gray-900"><div class="flex items-center max-w-[550px] h-[52px] m-auto px-4 py-2 relative"></div></div>')
      , Vs = () => {
        const e = Eo(to)
          , [t] = le();
        return ( () => {
            const r = VR.cloneNode(!0);
            return O(r, ( () => {
                const n = T( () => !!e.md);
                return () => n() ? ( () => {
                    const o = ZR.cloneNode(!0);
                    return O(o, ( () => {
                        const i = T( () => !!e.md);
                        return () => i() && m(pe, {
                            href: "/",
                            class: "contents",
                            get children() {
                                return m(zr, {
                                    size: "lg",
                                    get colorblind() {
                                        return t.colorblind
                                    }
                                })
                            }
                        })
                    }
                    )()),
                    o
                }
                )() : ( () => {
                    const o = YR.cloneNode(!0)
                      , i = o.firstChild;
                    return O(i, m(pe, {
                        href: "/",
                        class: "contents",
                        get children() {
                            return m(zr, {
                                size: "sm",
                                get colorblind() {
                                    return t.colorblind
                                }
                            })
                        }
                    })),
                    o
                }
                )()
            }
            )()),
            r
        }
        )()
    }
      , QR = b(`<div id="legal-page" class="max-w-[550px] m-auto overflow-hidden px-4 dark:text-white text-gray-900"><div class="mt-5 italic">Your use of our Quordle.com service is governed by our <!> <strong>OUR <!> CONTAIN DISCLAIMERS OF WARRANTIES AND LIABILITY AND A CLASS ACTION WAIVER. THESE PROVISIONS AFFECT YOUR RIGHTS ABOUT HOW TO RESOLVE ANY DISPUTE WITH QUORDLE.COM, INCLUDING UNDER THIS PRIVACY NOTICE. PLEASE REVIEW. YOUR USE OF THE QUORDLE.COM SERVICE IS ACCEPTANCE OF THIS PRIVACY NOTICE AND OUR </strong>.</div><div class="text-2xl font-bold mt-5 text-center">QUORDLE.COM</div><div class="text-2xl font-bold text-center">Website Privacy Notice</div><div class="text-center mb-5">Effective Date: August 17, 2022</div><div class="subheading">Table of Contents</div><ul><li><a href="#introduction">Introduction</a></li><li><a href="#coppa-compliance">COPPA Compliance</a></li><li><a href="#information-that-you-provide-to-us">Information that You Provide to Us</a></li><li><a href="#how-we-use-information-that-you-provide-to-us">How We Use Information that You Provide to Us</a></li><li><a href="#purposes-of-processing-the-information-that-you-provide-to-us">Purposes of Processing the Information that You Provide to Us</a></li><li><a href="#links-to-other-website">Links to Other Websites</a></li><li><a href="#information-collected-automatically-other-information-cookie-policy">Information Collected Automatically &amp; Other Information; Cookie Policy</a></li><li><a href="#your-rights-choices-opt-out">Your Rights &amp; Choices; Opt-Out</a></li><li><a href="#security-of-your-information">Security of Your Information</a></li><li><a href="#data-storage-and-retention">Data Storage and Retention</a></li><li><a href="#consent-to-process-and-transfer-of-information-about-you">Consent to Processing and Transfer of Information about You</a></li><li><a href="#correcting-updating-or-removing-personal-information-account-deletion">Correcting, Updating, or Removing Personal Information; Account Deletion</a></li><li><a href="#privacy-notice-for-california-residents">Privacy Notice for California Residents</a></li><li><a href="#eu-data-subject-rights">EU Data Subject Rights</a></li><li><a href="#eu-representative-and-data-protection-officer">EU Representative and Data Protection Officer</a></li><li><a href="#copyright">Copyright</a></li><li><a href="#business-transfers">Business Transfers</a></li><li><a href="#acceptance-of-privacy-notice-terms-and-conditions">Acceptance of Privacy Notice Terms and Conditions</a></li><li><a href="#questions-comments-or-complaints">Questions, Comments or Complaints</a></li></ul><div class="legalese"><div id="introduction" class="heading">Introduction</div><div>Your privacy is important to us. We understand that you are aware of and care about your own personal privacy interests, and we take that seriously. This Privacy Notice sets forth your privacy rights and applies to personal data we may collect solely through your use of the Quordle.com service. This Privacy Notice does not govern our collection of personal information through any means other than through Quordle.com.</div><div>Your decision to use Quordle.com and provide your personal data is voluntary. We indicate on our online, mobile, and other registration forms what types of personal data are requested. You may choose not to submit requested information online, or may choose to restrict the use of cookies (see 'Your Rights & Choices; Opt-Out\u2019 below for more information), but that may limit the services we are able to provide to you.</div><div>We recognize that information privacy is an ongoing responsibility, and so we will from time to time update this Privacy Notice as we undertake new personal data processing practices or adopt new privacy policies. If you have concerns, please contact our data protection officer at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div id="coppa-compliance" class="heading">COPPA Compliance</div><div>Quordle.com is intended for a general audience, and is not targeted to, and does not knowingly collect personal data from, minors under 13 years of age. We request that these individuals do not provide personal data through the Quordle.com service.</div><div>In accordance with the U.S. Children\u2019s Online Privacy Protection Act of 1998 (COPPA), we will never knowingly solicit, nor will we accept, personally identifiable information from Users known to be under 13 years of age in a manner not permitted by COPPA or other applicable laws.</div><div>If you are a parent or guardian and believe that we have collected personal information from your child in a manner not permitted by law, please contact us at: <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>. We will remove the data to the extent required by applicable laws.</div><div id="information-that-you-provide-to-us" class="heading">Information that You Provide to Us</div><div>Quordle.com protects the identity of visitors to the Quordle.com service by limiting the collection of personally identifiable information. Personal information provided by you to us will not be posted or published by us, and will be shared with third parties only as provided herein. You can enjoy many of the features of Quordle.com without giving us your personal information.</div><div class="subheading">Promotions and other special features</div><div>For certain promotions and to access certain features that may be available on Quordle.com, we collect information voluntarily submitted by you to us to deliver the requested feature that may include (but not be limited to) your name, email address, city, state and age. You may edit this information at any time to change, add or remove it from our Quordle.com service. We process your personal information to deliver the requested feature to you and to inform you of other benefits or opportunities associated with our Quordle.com service. We may also use this information for legitimate business purposes that help us understand our users\u2019 needs and interests to better tailor our products and services to meet your needs.</div><div class="subheading">Game Play</div><div>Whenever you play Quordle, we collect data about your interactions with each Quordle. This information may be associated with your username, IP address or device ID for the purpose of providing the Quordle.com service and improving it.</div><div class="subheading">Payment card information</div><div>You may choose to purchase goods or services from Quordle.com using a payment card. Typically, payment card information is provided directly by a User, via the Quordle.com service, into the PCI/DSS-compliant payment processing service to which the Quordle.com service subscribes, and the Quordle.com service does not, itself, process or store your card information.</div><div id="how-we-use-information-that-you-provide-to-us" class="heading">How We Use Information that You Provide to Us</div><div class="subheading">Non-subscriber communications from us and our approved, third-party partners</div><div>If you choose to provide us with personal information through the Quordle.com service, you may receive the following types of emails from us:<ul><li>Emails related to subscription-maintenance activities;</li><li>Emails highlighting new features, content, and usage tips for the Quordle.com service; and</li><li>Special offers from our approved, third-party partners, if you "opt-in" or give us your permission to send them.</li></ul></div><div>When you provide us with your personal information, you can let us know that you do not wish to receive special offers from our third-party partners. Also, each special offer will have information available to allow you to "opt-out" if you no longer wish to receive special offers.</div><div class="subheading">Authorized service providers</div><div>For legitimate business interests, we may share your personal information with service providers that perform certain services on our behalf, such as processing credit card payments, performing business and sales analysis, and supporting the Quordle.com service\u2019s functionality.</div><div class="subheading">Business partners</div><div>When you make purchases or engage in our promotions, we may share personal information with the businesses with which we partner to offer you those products, services, promotions, contests and/or sweepstakes. When you elect to engage in a particular merchant\u2019s offer or program, you expressly authorize us to provide your email address and other information to that merchant.</div><div class="subheading">Surveys</div><div>We may occasionally conduct on-line surveys. All surveys are voluntary, and you may decline to participate.</div><div class="subheading">Law enforcement</div><div>We also may disclose your information: In response to a subpoena or as otherwise required by law. When we believe disclosure is appropriate in connection with efforts to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of Quordle.com, our Users, our employees, or others; to comply with applicable law or cooperate with law enforcement; or to enforce our <!> or other agreements or policies.</div><div id="purposes-of-processing-the-information-that-you-provide-to-us" class="heading">Purposes of Processing the Information That You Provide to Us</div><div>As explained above, the Quordle.com service processes your data to provide you with the products and services you have requested or purchased from us, including special features and other content. Sometimes we use third-party providers to facilitate the delivery of the services described above, and these third-party providers may be supplied with or have access to your personal information for the sole purpose of providing services to you on our behalf.</div><div>We also use your data for legitimate business purposes that enable us to refine our the Quordle.com service and better tailor it to your needs and communicate with you about other products and services offered by Quordle.com. In addition, we may disclose your personal information in special legal circumstances. For instance, such information may be used where it is necessary to protect our copyright or intellectual property rights, or if the law requires us to do so.</div><div>You can update your personal information and change your marketing preferences at any time by sending an email to <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div id="links-to-other-website" class="heading">Links to Other Websites</div><div>This Privacy Notice only governs information collected through the Quordle.com service. The Quordle.com service may contain links to websites or content (including advertisements) operated and maintained by third parties, over which we have no control. We encourage you to review the privacy policy of a third-party website before disclosing any personal information to the website. Do not supply personal information to these sites unless you have verified their security and privacy policies.</div><div id="information-collected-automatically-other-information-cookie-policy" class="heading">Information Collected Automatically &amp; Other Information; Cookie Policy</div><div>Like other commercial websites, the Quordle.com service and its authorized partners use cookies (small files transferred from a website to its visitors\u2019 hard drives or browsers for record-keeping purposes), including essential, functional and analytical cookies, and other similar information-gathering technologies throughout the Quordle.com service to collect certain information automatically and store it in log files for a variety of legitimate business interests and purposes. This information may include (but is not limited to) internet protocol (IP) addresses, mobile device identifiers, the region or general location where your computer or device is accessing the internet, browser type, operating system and other usage information about your use of the Quordle.com service, including a history of the pages you view.</div><div>Web beacons, tags, and scripts may be used on the Quordle.com service or in email or other electronic communications we send to you. These assist us in delivering cookies, counting visits to the Quordle.com service, understanding usage and campaign effectiveness and determining whether an email has been opened and acted upon. We may receive reports based on the use of these technologies by our third-party service providers on an individual and aggregated basis.</div><div>Quordle.com and its authorized partners use cookies, beacons, and other similar technologies on the Quordle.com service for legitimate business interests that enable us to allow you to navigate, use, and access secure areas of the Quordle.com service. We also use these technologies for statistical purposes and to analyze and improve the use of the Quordle.com service and prepare aggregated usage reports.</div><div>As described below, we use these technologies for legitimate business purposes to provide standard advertising controls, determine User response to advertisements and promotions, and deliver targeted advertisements that we or our partners believe will be of most interest to you.</div><div>We may also use your IP address to help diagnose problems with our servers and to administer our website, analyze trends, track visitor movements, and gather broad demographic information that assists us in identifying visitor preferences.</div><div>We have a legitimate interest in understanding how our users, customers, and potential customers use the Quordle.com service. Among other things, this assists us in providing more relevant products and services. Please refer to '<a href="#your-rights-choices-opt-out">Your Rights &amp; Choices; Opt-Out</a>' below for more information.</div><div>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of the Quordle.com service. For more information about cookies, please visit <a href="https://www.allaboutcookies.org/">https://www.allaboutcookies.org/</a>.</div><ul class="mb-5 font-bold"><li>Analytics &amp; usage data</li></ul><div class="mb-5 italic">For our legitimate business interests, we may process your personal information for analytic purposes on the Quordle.com service as described in this section.</div><div>Together with <a href="https://policies.google.com/privacy?hl=en">Google Analytics</a>, we use cookies and software logs to monitor the use of the Quordle.com service and to gather non-personal information about visitors to Quordle.com. These monitoring systems allow us to track general information about our visitors, such as the type of browsers (for example, Firefox or Internet Explorer), the operating systems (for instance, Windows or Macintosh), or the Internet providers (for instance, Comcast) they use. This information is used for statistical and market research purposes to tailor content to usage patterns and to provide services requested by our customers.</div><div>We also have implemented certain <a href="https://policies.google.com/technologies/ads">Google Analytics Advertiser</a> features. These tools use cookies to collect and store standard Internet log and visitor information on our behalf, including information about what pages you visit, how long you are on Quordle.com, how you got here, and what you click on during your visit. This Google Analytics data is not tied to personal information, so this information cannot be used to identify who you are. We use the data provided by Google Analytics to develop our services and content around our User demographics, interests, and behavior on our Quordle.com service. You can opt-out of this Google Analytics Advertiser feature using the Ads Settings located at <a href="https://www.google.com/settings/ads">https://www.google.com/settings/ads</a>. In addition, you can use the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-Out Browser Add-on</a> to disable tracking by Google Analytics. To delete these cookies, please see your browser\u2019s privacy settings or follow the above instructions.</div><div>We also may receive other data about your use of our Quordle.com service from other sources. This information may include (but is not limited to) information about your activities across unrelated websites and mobile applications, information about the possible relationships between different browsers and devices and information that we receive from our third-party service providers. We may add this information to the information to the information we have already collected through our Quordle.com service.</div><ul class="mb-5 font-bold"><li>Advertising on Quordle.com</li></ul><div>The Quordle.com service is supported by advertising and, as more fully described <a href="#third-party-activities">below</a>, Quordle.com works with third parties to display advertising, including interest-based or behavioral advertising, on the Quordle.com service.</div><div><em>We participate in the IAB Transparency & Consent Framework and comply with its <a href="https://iabeurope.eu/iab-europe-transparency-consent-framework-policies/">Specifications and Policies</a>.</em> The Quordle.com service is affiliated with CMI Marketing, Inc., d/b/a CafeMedia ("<strong>CafeMedia</strong>") for the purposes of placing advertising on Quordle.com, and CafeMedia will collect and use certain data for advertising purposes as more fully described in the <a href="https://cafemedia.com/wp-content/uploads/2021/02/2020-CAM-Service-Privacy-Statement-KJK-draft-3-10-2020.pdf">CAM Service Privacy Statement</a>. <em>CafeMedia\u2019s CMP is LiveRamp with the CMP identification number 3</em>. To learn more about CafeMedia\u2019s data usage and your related rights, click here: <a href="https://cafemedia.com/publisher-advertising-privacy-policy/#:~:text=To%20be%20clear%20we%20do,exchanges%2C%20and%20demand%20side%20platforms.">CafeMedia Advertising Privacy Statement</a>.</div><div>The Quordle.com service may also rely on third-party service providers to do things like: take user-level information, anonymize it through hashing (a hashed email address might look something like this: <strong>e820bb4aba5ad74c5a6ff1aca16641f6</strong>) and match it against other anonymized, people-based identifiers \u2013 doing this helps us serve you personalized, relevant advertisements. Specifically, when you use our ad-supported Quordle.com service, we may share information that we may collect from you, including your email (in hashed form), IP address or information about your browser or operating system, with our third-party service provider, LiveRamp Inc. and its group companies ('LiveRamp\u2019). LiveRamp may use our first party cookie on your browser to match your shared information to their marketing databases in order to provide back a pseudonymous privacy-centric identifier for our use in real time bidding in digital advertising. These third parties may in turn link further demographic or interest-based information to your browser. You have the choice to opt-out of the use of your data by third-party service providers for this purpose at any time. Please find more information about opting out <a href="#your-rights-choices-opt-out">below</a>.</div><div>Please note that limiting third-party cookies via your browser controls does not prevent our first-party cookies from being set in this way. Also, please know, if you opt-out of interest-based advertising <strong class="underline">you will continue to receive ads on our free, ad-supported Quordle.com service, but not behaviorally targeted ads</strong>. Also, if you opt-out of Quordle.com\u2019s practices, you may continue to receive interest-based advertising through other companies. If you erase your browser\u2019s cookies, you may need to perform this process again.</div><ul class="mb-5 font-bold"><li>Anonymous data</li></ul><div>Anonymous aggregated data may be provided to other companies we do business with for statistical purposes. For example, we may report to advertisers that a certain percentage of our site\u2019s visitors are adults between the ages of 25 and 35.</div><ul class="mb-5 font-bold"><li>Device identifiers</li></ul><div class="mb-5 italic">For our legitimate business interests, we process your device identifiers as described in this section.</div><div>When you use a mobile device like a tablet or cell phone to access our Quordle.com service, we may access and monitor one or more "device identifiers." Device identifiers are small data files associated with your mobile device that uniquely identify your mobile device. A device identifier may deliver information to us or a third party partner about how you browse and use the services and may help us or others provide reports or personalized ads. Some features of the services may not function properly if use or availability of device identifiers is impaired or disabled.</div><div id="third-party-activities" class="subheading">Third-party activities</div><div class="mb-5 italic">For our legitimate business interests, and with your consent where this is required, we may process data collected by us for advertising, including interest-based advertising, as described in this section.</div><div>As described above, in order to monetize our free, ad-supported Quordle.com service, we work with third-party advertisers and advertising networks that use cookies and other similar technologies to target ads served to our free, ad-supported Quordle.com service. Our Privacy Notice does not cover the use of data that you provide directly to advertisers or third-party partners; that usage is governed by the advertiser\u2019s or third party partner\u2019s privacy policy.</div><div>What does it mean to "serve ads"? When you visit a website, your Internet browser transmits a "request" to the computer that hosts the website (the "host server") requesting that server to send you (or "serve") the Web page that you are seeking. Most Web pages contain components that are pulled from different sources, for example, a Web page at a news site may get its weather section from one provider, its sports results from a different source, and advertisements from other servers. Our Web pages contain coding that directs your browser to fill the ad spaces on the Web pages with content served by advertisers and networks of advertisers to whom we have sold the ad spaces. The advertisers and networks use cookies and beacons to help manage ad delivery and frequency and to identify audience segment(s) for customized advertising ("targeting"). These cookies are used to identify your IP address, so that when you visit another website using the same advertising network, the network will recognize the cookie as one of its own, read the information on the cookie (the record of which sites in the network you have visited) and serve you an ad that you might be interested in, based on your past visits to other sites in the network. Advertising targeted based on past Web surfing is known as "behavioral advertising."</div><div>Quordle.com does not provide any personal information to third-party advertisers about visitors to the Quordle.com service. Our Privacy Notice does not cover the use of information that they may have collected from you by third parties on other sites. If you would like to learn more about behavioral advertising or to opt-out of having this information used by companies that are part of the Network Advertising Initiative to deliver targeted ads, please visit <a href="https://www.networkadvertising.org">https://www.networkadvertising.org/</a>. Many of the same companies are members of the Self-Regulatory Program for Online Behavioral Advertising. You can learn more and opt-out of receiving targeted ads from them at <a href="https://www.aboutads.info/choices">https://www.aboutads.info/choices</a>.</div><div>Some advertising networks require that we specifically list their opt-out links below. When you opt-out of a network, you may receive a "opt-out" cookie so that the network will know not to assign you new cookies in the future. <strong class="underline">You will continue to receive ads from that network, but not behaviorally targeted ads</strong>. If you erase your browser\u2019s cookies, you may need to perform this process again.</div><div id="your-rights-choices-opt-out" class="heading">Your Rights & Choices; Opt-Out Choices</div><div>We participate in the IAB Transparency &amp; Consent Framework and comply with its <a href="https://iabeurope.eu/iab-europe-transparency-consent-framework-policies/">Specifications and Policies</a>. Our Consent Management Platform (CMP) is LiveRamp with the CMP identification number 3.</div><div>Our Cookie Policy above more fully describes the cookies, beacons and other similar technology used on the Quordle.com service and provides information on when and how Users can accept or reject them.</div><div>You can opt-out of being behaviorally targeted by Quordle.com (and other companies employing online advertising) via the following options:</div><ul><li><a href="http://www.aboutads.info/choices/">Digital Advertising Alliance</a></li><li><a href="http://www.youradchoices.ca/">Digital Advertising Alliance Canada</a></li><li><a href="http://www.youronlinechoices.eu/">European Digital Advertising Alliance</a></li><li><a href="http://www.networkadvertising.org/managing/opt_out.asp">Network Advertising Initiative</a></li></ul><div class="mb-5 font-bold">Please remember, if you opt-out of interest-based advertising you will continue to receive ads on our free, ad-supported Quordle.com service, but not behaviorally targeted ads. Also, if you opt-out of Quordle.com\u2019s practices, you may continue to receive interest-based advertising through other companies.</div><div class="subheading">Browser controls</div><div>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Quordle.com service. For more information about cookies, please visit <a href="http://www.allaboutcookies.org/">http://www.allaboutcookies.org/</a>. Please note that limiting third-party cookies via your browser controls does not prevent our first-party cookies from being set in this way.</div><ul><li>To manage or delete browser cookies, please see your browser\u2019s privacy settings.</li><li>To manage or delete Flash cookies, please use the Adobe Flash Player Settings Manager here:<a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html</a></li></ul><div class="subheading">Google Analytics</div><div>You can control the use of your personal data by Google Analytics by visiting the 'Your privacy controls\u2019 section of the Google Privacy Policy located at <a href="https://policies.google.com/privacy?hl=en-US#infochoices">https://policies.google.com/privacy?hl=en-US#infochoices</a>. You also can use the Google Analytics Opt-Out Browser Add-on to disable tracking by Google Analytics. To delete these cookies, please see your browser\u2019s privacy settings or follow the above instructions.</div><div class="subheading">LiveRamp</div><div>To opt out of LiveRamp\u2019s use of your personal data, please head here: https://liveramp.com/opt_out/.</div><div class="subheading">How we respond to "Do Not Track" signals</div><div>When you visit a website in any browser, you automatically share information with that website, such as your IP address, and other standard PC information. If the website contains content provided by a third-party website (for example a web measurement tools such as a web beacon or scripts), some information about you may be automatically sent to the content provider. This type of arrangement has several benefits, such as allowing you to access third-party content from the Quordle.com service conveniently. Some internet browsers or other tools include "Do Not Track" (DNT) features that, when turned on, send a signal to websites you visit indicating you do not wish to be tracked across websites over time. However, since no technology standard for DNT signals has been developed or adopted to date, the Quordle.com service does not currently respond to DNT signals.</div><div id="security-of-your-information" class="heading">Security of Your Information</div><div>Any personally identifiable information collected through this site is stored on limited-access servers. We will maintain safeguards to protect these servers and the information they store. In addition, to help protect the privacy of data and personally identifiable information you transmit through use of our Quordle.com service, we maintain physical, technical and administrative safeguards. We update and test our security technology on an ongoing basis. We strive to restrict access to your personal data to those employees who need to know that information to provide benefits or services to you.</div><div id="data-storage-and-retention" class="heading">Data Storage and Retention</div><div>Your personal data is stored by us in the AWS Cloud \u2013 U.S. (eastern) and Singapore regions. We retain your information for the duration of your relationship with us and as long as necessary to permit us to use it for the legitimate business purposes that we have communicated to you and comply with applicable law or regulations. For more information on where and how long your personal data is stored, and for more information on your rights of erasure and portability, please contact Quordle.com\u2019s data protection officer at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div id="consent-to-process-and-transfer-of-information-about-you" class="heading">Consent to Processing and Transfer of Information about You</div><div>Quordle.com\u2019s headquarters are located in the United States. Information we collect from you will be processed in the United States and may be stored, transferred to, and processed in any country where we have facilities or in which we engage service providers. These countries may be outside your country of residence, including the United States, and may have different data protection laws than your country.</div><div>If you are located in the European Economic Area (EEA), Quordle.com collects and transfers personal data out of the EEA only: with your consent; to perform a contract with you; or to fulfill a compelling legitimate interest of Quordle.com in a manner that does not outweigh your rights and freedoms. Quordle.com endeavors to apply suitable safeguards to protect the privacy and security of your personal data and to use it only consistent with your relationship with us and the practices described in this Privacy Notice.</div><div id="correcting-updating-or-removing-personal-information-account-deletion" class="heading">Correcting, Updating, or Removing Personal Information; Account Deletion</div><div>Users may opt out of certain Quordle.com features or correct, update, or remove certain personal information that Quordle.com has collected about them through any of the means listed below. Please be sure to include the following information in your correspondence:</div><div>Your email address<br>Your first and last name<br>Your mailing address (street, city, state, zip code, and country)</div><div><strong>Email us at:</strong> <a href="mailto:dpo@quordle.com">dpo@quordle.com</a></div><div class="subheading">Account Deletion:</div><div>If you no longer wish to have a registered account, you may terminate your account by sending an email to<a href="mailto:dpo@quordle.com">dpo@quordle.com</a>. Because of the way we maintain the Quordle.com service, such deletion may not be immediate, and residual copies of your profile information or posts may remain on backup media for up to ninety (90) days.</div><div id="privacy-notice-for-california-residents" class="heading">Privacy Notice for California Residents</div><div>This Privacy Notice for California Residents supplements the information contained elsewhere in this Privacy Notice and applies solely to all visitors, users, and others who reside in the State of California ("consumers" or "you"). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA) and any terms defined in the CCPA have the same meaning when used in this notice.</div><div class="subheading">Information We Collect</div><div>The Quordle.com service collects information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("personal information"). In particular, the Quordle.com service may collect the following categories of personal information from its consumers:</div><table class="table-auto mb-5"><thead><tr><th>Category</th><th>Collected</th></tr></thead><tbody><tr><td>A. Identifiers</td><td>YES</td></tr><tr><td>B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code \xA7 1798.80(e))</td><td>YES</td></tr><tr><td>C. Protected classification characteristics under California or federal law</td><td>NO</td></tr><tr><td>D. Commercial information.</td><td>YES</td></tr><tr><td>E. Biometric information.</td><td>NO</td></tr><tr><td>F. Internet or other similar network activity.</td><td>YES</td></tr><tr><td>H. Sensory data.</td><td>NO</td></tr><tr><td>I. Professional or employment-related information.</td><td>NO</td></tr><tr><td>J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).</td><td>NO</td></tr><tr><td>K. Inferences drawn from other personal information.</td><td>YES</td></tr></tbody></table><div>Personal information does not include:</div><ul><li>Publicly available information from government records.</li><li>Deidentified or aggregated consumer information.</li><li>Information excluded from the CCPA\u2019s scope, like:<ul><li>health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;</li><li>personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver\u2019s Privacy.</li></ul></li></ul><div class="subheading">Use of Personal Information</div><div>We may use or disclose the personal information we collect for one or more of the following business purposes:</div><ul><li>To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to ask a question about the Quordle.com service, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we or our third-party service providers will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product or service orders and requests.</li><li>To provide, support, personalize, and develop the Quordle.com services, emails, and other products, services and platforms.</li><li>To create, maintain, customize, and secure your account with us.</li><li>To process your requests, purchases, transactions, and payments and prevent transactional fraud.</li><li>To provide you with support and to respond to your inquiries, including investigating and addressing your concerns and monitoring and improving our responses.</li><li>To personalize your emails or Quordle.com experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through the Quordle.com service, and other products, services and platforms.</li><li>To help maintain the safety, security, and integrity of the Quordle.com service and our apps, emails, and other products, services and platforms, databases and other technology assets, and business.</li><li>For testing, research, analysis, and product development, including to develop and improve the Quordle.com service and our apps, emails, and other products, services and platforms.</li><li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li><li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li><li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Quordle.com assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Quordle.com about our Users is among the assets transferred.</li></ul><div>Quordle.com will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.</div><div class="subheading">Sharing Personal Information</div><div>Quordle.com may disclose your personal information to a third-party for a business purpose or sell your personal information, subject to your right to opt-out of those sales (see '<em>Sales of Personal Information</em>\u2019 below). When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. The CCPA prohibits third parties who purchase the personal information we hold from reselling it unless you have received explicit notice and an opportunity to opt-out of further sales (see '<em>Sales of Personal Information</em>\u2019 below).</div><div>We may share your personal information with the following categories of third parties:</div><ul><li>Subsidiaries and affiliates.</li><li>Contractors and service providers.</li><li>Data aggregators.</li><li>Third parties with whom we partner to offer products and services to you.</li></ul><div class="subheading">Disclosures of Personal Information for a Business Purpose</div><div>In the preceding twelve (12) months, Quordle.com has not disclosed any categories of personal information collect through the Quordle.com service for a business purpose.</div><div class="subheading">Sales of Personal Information</div><div>In the preceding twelve (12) months, Quordle.com has not sold any of the categories of personal information collected through the Quordle.com service.</div><div>As of the Effective Date of this Privacy Notice, the Company and our advertising partners will collect the personal information identified in the table above (such as the cookies stored on your browser, the advertising identifier on your mobile device, or the IP address of your device) when you visit the Quordle.com or open our emails. We, and our partners, will use this information to tailor and deliver ads to you on the Quordle.com service, or to help tailor ads to you when you visit others\u2019 sites (or use others\u2019 apps). To tailor ads that may be more relevant to you, we and/or our partners may share the information we collect with third parties.</div><div>If you do not wish for us or our partners to sell your personal information to third parties for advertising purposes, click the "<strong>Do Not Sell My Info</strong>" link accessible from the Quordle.com service. Note that although we will not sell your personal information after you click that button, we will continue to share some personal information with our partners (who will function as our service providers in such instance) to help us perform advertising-related functions such as, but not limited to, measuring the effectiveness of our ads, managing how many times you may see an ad, reporting on the performance of our ads, ensuring the Quordle.com service is working correctly and securely, providing aggregate statistics and analytics, improving when and where you may see ads and/or reducing ad fraud. If you access the Quordle.com service from other devices or browsers, visit our "<strong>Do Not Sell My Info</strong>" link from those devices or browsers to ensure your choice applies to the data collected when you use those devices or browsers. Additionally, although clicking the "<strong>Do Not Sell My Info</strong>" link will opt you out of the sale of your personal information for advertising purposes, <span class="underline">it will not opt you out of the use of previously collected and sold personal information (except for personal information sold within 90 days prior to your exercising your right to opt out) or all interest-based advertising</span>. If you would like more information about how to opt out of interest-based advertising in desktop and mobile browsers on a particular device, please visit <a href="http://optout.aboutads.info/#/">http://optout.aboutads.info/#/</a> and<a href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/#</a>. You may download the AppChoices app at <a href="http://www.aboutads.info/appchoices">http://www.aboutads.info/appchoices</a> to opt out in connection with mobile apps, or use the platform controls on your mobile device to opt out.</div><div class="subheading">Your Rights and Choices</div><div>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</div><div class="subheading italic">Access to Specific Information and Data Portability Rights</div><div>You have the right to request that the Company disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</div><ul><li>The categories of personal information we collected about you.</li><li>The categories of sources for the personal information we collected about you.</li><li>Our business or commercial purpose for collecting or selling that personal information.</li><li>The categories of third parties with whom we share that personal information.</li><li>The specific pieces of personal information we collected about you (also called a data portability request).</li><li>If we disclosed your personal information for a business purpose, we will identify the personal information categories that each category of recipient obtained.</li></ul><div class="subheading">Deletion Request Rights</div><div>You have the right to request that the Company delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</div><div>We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:</div><ol><li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li><li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li><li>Debug products to identify and repair errors that impair existing intended functionality.</li><li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li><li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code \xA7 1546 et. seq.).</li><li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information\u2019s deletion may likely render impossible or seriously impair the research\u2019s achievement, if you previously provided informed consent.</li><li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li><li>Comply with a legal obligation.</li><li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li></ol><div class="subheading italic">Exercising Access, Data Portability, and Deletion Rights</div><div>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by emailing us at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div>Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.</div><div>You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</div><ul><li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li><li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li></ul><div>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.</div><div>Making a verifiable consumer request does not require you to create an account with us.</div><div>We will only use personal information provided in a verifiable consumer request to verify the requestor\u2019s identity or authority to make the request.</div><div class="subheading italic">Response Timing and Format</div><div>We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time, we will inform you of the reason and extension period in writing in accordance with CCPA requirements.</div><div>If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically, at your option.</div><div>Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request\u2019s receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</div><div>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</div><div class="subheading">Personal Information Sales Opt-Out and Opt-In Rights</div><div>If you are 16 years of age or older, you have the right to direct us to not sell your personal information at any time (the "right to opt-out"). We do not sell the personal information of consumers we actually know are less than 16 years of age, unless we receive affirmative authorization (the "right to opt-in") from either the consumer who is between 13 and 16 years of age, or the parent or guardian of a consumer less than 13 years of age. Consumers who opt-in to personal information sales may opt-out of future sales at any time.</div><div>To exercise the right to opt-out, you (or your authorized representative) may submit a request to us by emailing<a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div>Once you make an opt-out request, we will wait at least twelve (12) months before asking you to reauthorize personal information sales. However, you may change your mind and opt back in to personal information sales at any time by clearing cookies from your browser or emailing <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div>You do not need to create an account with us to exercise your opt-out rights. We will only use personal information provided in an opt-out request to review and comply with the request.</div><div class="subheading">Non-Discrimination</div><div>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:</div><ul><li>Deny you goods or services.</li><li>Charge you different prices or rates for like-goods or services, including through granting discounts or other benefits, or imposing penalties.</li><li>Provide you a different level or quality of like-goods or services.</li><li>Suggest that you may receive a different price or rate for like-goods or services or a different level or quality of like-goods or services.</li></ul><div>However, we may offer you certain financial incentives permitted by the CCPA that can result in different prices, rates, or quality levels. Any CCPA-permitted financial incentive we offer will reasonably relate to your Personal Information\u2019s value and contain written terms that describe the program\u2019s material aspects. Participation in a financial incentive program requires your prior opt in consent, which you may revoke at any time. We currently provide the following financial incentives:</div><div>COMING SOON</div><div class="subheading">Other California Privacy Rights</div><div>California\u2019s "Shine the Light" law (Civil Code Section \xA7 1798.83) permits Users of our websites, mobile applications, and other products, services and platforms that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div class="subheading">Changes to Our Privacy Notice</div><div>Quordle.com reserves the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on our website at Quordle.com and update the notice\u2019s effective date. <strong>Your continued use of the Quordle.com service following the posting of changes constitutes your acceptance of such changes.</strong></div><div class="subheading">Contact Information</div><div>If you have any questions or comments about this notice, the ways in which Quordle.com collects and uses your information described herein, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:</div><table><tbody><tr><td> Website:</td><td><a href="https://www.quordle.com">www.quordle.com</a></td></tr><tr><td>Email:</td><td><a href="mailto:dpo@quordle.com">dpo@quordle.com</a></td></tr></tbody></table><div id="eu-data-subject-rights" class="heading">EU Data Subject Rights</div><div>The EU and UK General Data Protection Regulations (GDPR) and other countries\u2019 privacy laws provide certain rights for data subjects. A good explanation of them (in English) is available on the website of the United Kingdom\u2019s <a href="https://ico.org.uk/for-organisations/data-protection-reform/overview-of-the-gdpr/individuals-rights/the-right-to-be-informed/">Information Commissioner\u2019s Office</a>.</div><div>If you wish to confirm that the Quordle.com service is processing your personal data, or to have access to the personal data that Quordle.com may have about you, please contact us at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div><div id="eu-representative-and-data-protection-officer" class="heading">Data Protection Officer</div><div>Quordle.com is headquartered in the United States. Quordle.com has appointed a data protection officer for you to contact at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a> if you have any questions or concerns about Quordle.com\u2019s personal data policies or practices.</div><div id="copyright" class="heading">Copyright</div><div>All of the content on the Quordle.com service is copyrighted, and it cannot be redistributed or used for commercial purposes.</div><div id="business-transfers" class="heading">Business Transfers</div><div>As we continue to develop our business, we might sell or buy subsidiaries, or business units. In such transactions, customer information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice or Policy (unless, of course, the customer consents otherwise). Also, in the unlikely event that Quordle.com, or substantially all of its assets are acquired, customer information will be one of the transferred assets, and will remain subject to our Privacy Notice.</div><div id="acceptance-of-privacy-notice-terms-and-conditions" class="heading">Acceptance of Privacy Notice Terms and Conditions</div><div>By using Quordle.com, you signify your agreement to the terms and conditions of this Quordle.com Privacy Notice. If you do not agree to these terms, please do not use this site. We reserve the right, at our sole discretion, to change, modify, add, or remove portions of this policy at any time. All amended terms automatically take effect 30 days after they are initially posted on the site. Please check this page periodically for any modifications. Your continued use of the Quordle.com service following the posting of any changes to these terms shall mean that you have accepted those changes.</div><div id="questions-comments-or-complaints" class="heading">Questions, Comments or Complaints</div><div>If you have questions about Quordle.com, please email us at <a href="mailto:help@quordle.com">help@quordle.com</a>. To correct, update, or remove personally identifiable information, please email us at <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>. If you have any questions or concerns, please send an email to <a href="mailto:dpo@quordle.com">dpo@quordle.com</a>.</div></div></div>`)
      , zR = () => [m(Vs, {}), ( () => {
        const e = QR.cloneNode(!0)
          , t = e.firstChild
          , r = t.firstChild
          , n = r.nextSibling
          , o = n.nextSibling
          , i = o.nextSibling
          , a = i.firstChild
          , s = a.nextSibling;
        s.nextSibling;
        const u = t.nextSibling
          , l = u.nextSibling
          , A = l.nextSibling
          , d = A.nextSibling
          , c = d.nextSibling
          , E = c.nextSibling
          , R = E.firstChild
          , f = R.nextSibling
          , h = f.nextSibling
          , I = h.nextSibling
          , C = I.nextSibling
          , N = C.nextSibling
          , g = N.nextSibling
          , L = g.nextSibling
          , p = L.nextSibling
          , y = p.nextSibling
          , v = y.nextSibling
          , S = v.nextSibling
          , M = S.nextSibling
          , H = M.nextSibling
          , w = H.nextSibling
          , $ = w.nextSibling
          , z = $.nextSibling
          , B = z.nextSibling
          , te = B.nextSibling
          , Ee = te.nextSibling
          , ce = Ee.nextSibling
          , Re = ce.nextSibling
          , be = Re.nextSibling
          , F = be.nextSibling
          , q = F.nextSibling
          , X = q.nextSibling
          , se = X.nextSibling
          , V = se.nextSibling
          , j = V.firstChild
          , Ae = j.nextSibling;
        return Ae.nextSibling,
        O(t, m(pe, {
            href: "/terms",
            children: "Terms of Use"
        }), n),
        O(i, m(pe, {
            href: "/terms",
            children: "TERMS OF USE"
        }), s),
        O(i, m(pe, {
            href: "/terms",
            children: "TERMS OF USE"
        }), null),
        O(V, m(pe, {
            href: "/terms",
            children: "Terms of Use"
        }), Ae),
        e
    }
    )()]
      , qR = b(`<div id="legal-page" class="max-w-[550px] m-auto overflow-hidden px-4"><div class="text-2xl font-bold mt-5 text-center">QUORDLE.COM</div><div class="text-2xl font-bold text-center">Website Terms of Use</div><div class="text-center mb-5">Effective Date: August 17, 2022</div><div class="legalese"><div>These Website Terms of Use ("Terms of Use") govern your use of Quordle.com and, unless other terms and conditions expressly govern, any other services provided or made available by Quordle.com, including mobile application services (collectively, the "Services").</div><div class="font-bold">THESE TERMS OF USE CONTAIN <a href="#disclaimer-of-warranties">DISCLAIMERS OF WARRANTIES</a> AND <a href="#limitation-of-liability">LIABILITY</a>, A <a href="#governing-law">CHOICE OF LAW CLAUSE</a>, AND A <a href="#class-action-waiver">CLASS ACTION WAIVER</a>. THESE PROVISIONS AFFECT YOUR RIGHTS ABOUT HOW TO RESOLVE ANY DISPUTE WITH QUORDLE.COM. PLEASE READ THEM CAREFULLY BEFORE USING THE SERVICES.</div><div>For information on how Quordle.com collects, uses and shares any personal information, please see our <!>. If you reside outside of the European Economic Area, your acceptance of these Terms of Service constitutes your consent to the processing activities q</div><div class="subheading text-center">SECTION 1<br>Agreement to Terms of Use</div><div>Your use of the Services constitutes your agreement to these Terms of Use. If you do not agree with these Terms of Use, please do not use the Services. Quordle.com reserves the right to change, modify, add, or remove portions of these Terms of Use at any time, and the modified Terms of Use will be effective when posted on the Services. Please check this page periodically for any modifications. Your use of any of the Services following the posting of changes constitutes your acceptance of the changes.</div><div><strong>Ownership</strong>. The content on the Services is the property of Quordle.com, its affiliated companies or licensors, and is protected by international copyright, patent, and trademark laws. All materials published or available on the Services (including, but not limited to text, photographs, images, illustrations, designs, audio clips, video clips, "look and feel," metadata, data, or compilations, all also known as the "<strong>Content</strong>") are protected by copyright, and owned or controlled by Quordle.com, its affiliated companies or licensors, or the party credited as the provider of the Content. Quordle.com also owns copyright in the selection, coordination, compilation, and enhancement of such Content ("<strong>Arrangement</strong>"). You shall abide by all additional copyright notices, information, or restrictions contained in any Content accessed through the Services.</div><div><strong>Advertising</strong>. Advertisements, promotions, and marketing messages may appear on the Services from time to time. Please see our <!> for more information.</div><div><strong>Use of Content</strong>. You may display, reproduce, print or download content on the Services only for your personal, non-commercial use. In each case, however, you may not remove or alter any copyright, trademark, service mark or other proprietary notices or legends. You may not publish, distribute, retransmit, sell or provide access to the content on the Services, except as permitted under applicable law or as described in these Terms of Use. Quordle.com works to ensure that all the content on its Services complies with applicable U.S. copyright laws. You may not use data mining, robots, screen scraping, or similar data gathering and extraction tools on the Services, except with our express written permission. You may not decompile, reverse engineer or disassemble any software or other products or processes accessible through the Services, insert any code or product, or manipulate the content of the Services in any way that affects a user's experience.</div><div><strong>Mobile Application Services</strong>. If available, you may download certain Quordle.com mobile applications from either Quordle.com or third-party app stores. All of these Terms of Use, including our <!>, apply to the maximum extent relevant to your use of Quordle.com\u2019s mobile applications. If applicable, prices for our mobile applications may change at any time, and we do not provide price protection or refunds in the event of a price reduction or promotional offering.</div><div><strong>Use of your Data</strong>. Please see our <!> for details about how we use and process the data we collect from our Services.</div><div id="disclaimer-of-warranties" class="font-bold">Disclaimer of Warranties. THE SERVICES AND ALL INFORMATION, PRODUCTS, AND OTHER CONTENT INCLUDED IN OR ACCESSIBLE FROM THE SERVICES ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND (EXPRESS, IMPLIED, AND STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE), ALL OF WHICH QUORDLE.COM EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW.</div><div id="limitation-of-liability" class="font-bold">Limitation of Liability. IN NO EVENT SHALL QUORDLE.COM, ITS DIRECTORS, OFFICERS, SHAREHOLDERS, PARENTS, SUBSIDIARIES, AFFILIATES, AGENTS AND LICENSORS, OR CONTENT PROVIDERS BE LIABLE: (i) FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO THE USE, INABILITY TO USE, PERFORMANCE OR NONPERFORMANCE OF THE SERVICES, EVEN IF QUORDLE.COM WAS PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF WHETHER SUCH DAMAGES ARISE IN CONTRACT, TORT, UNDER STATUTE, IN EQUITY, AT LAW, OR OTHERWISE; AND (ii) FOR ANY DAMAGES, LOSSES AND/OR CAUSES OF ACTION EXCEEDING ONE THOUSAND U.S. DOLLARS (US $1,000) IN THE AGGREGATE.</div><div class="font-bold">SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU.</div><div><strong>Indemnification</strong>. To the fullest extent permitted by law, you agree to indemnify and hold Quordle.com, its directors, officers, shareholders, parents, subsidiaries, affiliates, agents, and licensors harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of (i) your use or unauthorized copying of the Services or any of their content; or (ii) your violation of these Terms of Use or any applicable laws or regulations.</div><div id="governing-law"><strong>Governing Law</strong>. You agree that all matters relating to your access to or use of the Services and these Terms of Use, including all disputes, will be governed by the laws of the United States and the State of Delaware, without giving effect to any principles of conflicts of laws, including the United Nations Convention on Contracts for the International Sale of Goods.</div><div id="class-action-waiver"><strong>Class Action Waiver. YOU AND QUORDLE.COM AGREE THAT EACH PARTY MAY BRING DISPUTES AGAINST THE OTHER PARTY ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, INCLUDING, WITHOUT LIMITATION, A FEDERAL OR STATE CLASS ACTION LAWSUIT. NEITHER YOU NOR QUORDLE.COM WILL SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR IN ANY OTHER PROCEEDING IN WHICH EITHER PARTY ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE CAPACITY.</strong>Nothing in this paragraph limits your right or Quordle.com\u2019s right to bring a lawsuit against each other as an individual plaintiff.</div><div><strong>Claims or Disputes Must be Filed within One Year</strong>. To the extent permitted by law, any claim or dispute arising out of or related to use of the Services or these Terms of Use must be filed within one year after such claim or dispute arose. The one-year period begins when the notice of such claim or dispute first could be filed. If such a claim or dispute is not filed within one year, it shall be permanently barred. Any claim by you that may arise in connection with these Terms of Use will be compensable by monetary damages and you will in no event be entitled to injunctive or other equitable relief.</div><div><strong>Opting Out of Pop Under Ads</strong>. Some of our pop-under ads are not detected by Safari and other browsers. To opt out of pop-under ads please see your browser\u2019s privacy settings.</div><div><strong>Severability</strong>. If any provision of these Terms of Use shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions.</div><div><strong>Survival</strong>. The provisions of these Terms of Use which by their nature should survive the termination of these Terms of Use shall survive such termination.</div><div><strong>Waiver</strong>. No waiver of any provision of these Terms of Use shall be deemed a further or continuing waiver of such provision or any other provision, and your or our failure to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.</div><div><strong>Entire Agreement</strong>. These Terms of Use constitute the entire agreement between Quordle.com and you, superseding any prior or contemporaneous communications and proposals (whether oral, written or electronic).</div><div class="subheading text-center">SECTION 2<br>COPYRIGHT INFRINGEMENT CLAIMS</div><div>If you believe that any copyright infringement exists on the Services, please use the following process to notify Quordle.com. We will act expeditiously to remove infringing material once informed. Please direct all claims of copyright infringement with respect to Content that is contained on the Services to<a href="mailto:copyrights@quordle.com">copyrights@quordle.com</a>. (Please direct all general questions to <a href="mailto:help@quordle.com">help@quordle.com</a>.)</div><div>In addition, if you believe that your work has been copied in a way that constitutes copyright infringement, please provide us the following information in writing to <a href="mailto:copyrights@quordle.com">copyrights@quordle.com</a> (see 17 U.S.C. \xA7 512(c)(3) for further detail). Please be advised that to be effective, the Notice must include ALL of the following information:</div><ol><li>Your physical or electronic signature (as either the owner of an exclusive right that is allegedly infringed or as a person authorized to act on behalf of such owner).</li><li>Identification of the copyrighted work claimed to have been infringed or, if multiple copyrighted works at a single online site are covered by a single claim, a representative list of such works at that online site.</li><li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit Quordle.com to locate the material.</li><li>Information reasonably sufficient to permit Quordle.com to contact you, such as an address, telephone number and, if available, an electronic mail address.</li><li>A statement that you believe in good faith that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law.</li><li>A statement that the information in the notice is accurate and that, under penalty of perjury, you are the owner of an exclusive right that is allegedly infringed or are authorized to act on behalf of such owner.</li></ol></div></div>`)
      , WR = () => [m(Vs, {}), ( () => {
        const e = qR.cloneNode(!0)
          , t = e.firstChild
          , r = t.nextSibling
          , n = r.nextSibling
          , o = n.nextSibling
          , i = o.firstChild
          , a = i.nextSibling
          , s = a.nextSibling
          , u = s.firstChild
          , l = u.nextSibling;
        l.nextSibling;
        const A = s.nextSibling
          , d = A.nextSibling
          , c = d.nextSibling
          , E = c.nextSibling
          , R = E.firstChild
          , f = R.nextSibling
          , h = f.nextSibling;
        h.nextSibling;
        const I = E.nextSibling
          , C = I.nextSibling
          , N = C.firstChild
          , g = N.nextSibling
          , L = g.nextSibling;
        L.nextSibling;
        const p = C.nextSibling
          , y = p.firstChild
          , v = y.nextSibling
          , S = v.nextSibling;
        return S.nextSibling,
        O(s, m(pe, {
            href: "/privacy",
            children: "Website Privacy Notice"
        }), l),
        O(E, m(pe, {
            href: "/privacy",
            children: "Website Privacy Notice"
        }), h),
        O(C, m(pe, {
            href: "/privacy",
            children: "Website Privacy Notice"
        }), L),
        O(p, m(pe, {
            href: "/privacy",
            children: "Website Privacy Notice"
        }), S),
        e
    }
    )()]
      , jR = () => {
        const e = T( () => Rt(uo))
          , t = T( () => Rt(co));
        return re( () => {
            var n;
            const r = document.querySelector("meta[name=theme-color]");
            (n = e()) != null && n[0].darkMode ? (document.documentElement.classList.add("dark"),
            r == null || r.setAttribute("content", "#111827")) : (document.documentElement.classList.remove("dark"),
            r == null || r.setAttribute("content", "#cbd5e1"))
        }
        ),
        e() && t() ? m(zA, {
            get children() {
                return [m(Vt, {
                    path: "/",
                    get element() {
                        return m(Mi, {
                            mode: "daily"
                        })
                    }
                }), m(Vt, {
                    path: "/practice",
                    get element() {
                        return m(Mi, {
                            mode: "free"
                        })
                    }
                }), m(Vt, {
                    path: "/privacy",
                    get element() {
                        return m(zR, {})
                    }
                }), m(Vt, {
                    path: "/terms",
                    get element() {
                        return m(WR, {})
                    }
                }), m(Vt, {
                    path: "/*all",
                    get element() {
                        return m(JR, {})
                    }
                })]
            }
        }) : null
    }
    ;
    if ("serviceWorker"in navigator) {
        const e = XA({
            onNeedRefresh() {
                e(!0)
            }
        })
    }
    mA( () => m(QA, {
        get source() {
            return UA()
        },
        get children() {
            return m(AO, {
                get children() {
                    return m(wO, {
                        get children() {
                            return m(jR, {})
                        }
                    })
                }
            })
        }
    }), document.getElementById("root"))
}
);
export default KR();
//# sourceMappingURL=index.7df7c993.js.map
