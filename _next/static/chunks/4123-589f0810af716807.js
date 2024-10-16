(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4123],
  {
    29154: function (e, t, n) {
      "use strict";
      n.d(t, {
        NF: function () {
          return l;
        },
        Zo: function () {
          return a;
        },
        ah: function () {
          return o;
        },
        pC: function () {
          return i;
        },
      });
      var r = n(2784);
      let i = r.createContext({});
      function l(e) {
        return function (t) {
          let n = o(t.components);
          return r.createElement(e, { ...t, allComponents: n });
        };
      }
      function o(e) {
        let t = r.useContext(i);
        return r.useMemo(
          () => ("function" == typeof e ? e(t) : { ...t, ...e }),
          [t, e]
        );
      }
      let u = {};
      function a({ components: e, children: t, disableParentContext: n }) {
        let l;
        return (
          (l = n ? ("function" == typeof e ? e({}) : e || u) : o(e)),
          r.createElement(i.Provider, { value: l }, t)
        );
      }
    },
    71519: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return M;
        },
        aV: function () {
          return E;
        },
        fC: function () {
          return D;
        },
        xz: function () {
          return w;
        },
      });
      var r = n(7560),
        i = n(2784),
        l = n(38930),
        o = n(72422),
        u = n(19106),
        a = n(80254),
        s = n(57915),
        c = n(97368),
        f = n(68622),
        h = n(62825);
      let d = "Tabs",
        [p, g] = (0, o.b)(d, [u.Pc]),
        m = (0, u.Pc)(),
        [b, k] = p(d),
        y = (0, i.forwardRef)((e, t) => {
          let {
              __scopeTabs: n,
              value: l,
              onValueChange: o,
              defaultValue: u,
              orientation: a = "horizontal",
              dir: d,
              activationMode: p = "automatic",
              ...g
            } = e,
            m = (0, c.gm)(d),
            [k, y] = (0, f.T)({ prop: l, onChange: o, defaultProp: u });
          return (0, i.createElement)(
            b,
            {
              scope: n,
              baseId: (0, h.M)(),
              value: k,
              onValueChange: y,
              orientation: a,
              dir: m,
              activationMode: p,
            },
            (0, i.createElement)(
              s.WV.div,
              (0, r.Z)({ dir: m, "data-orientation": a }, g, { ref: t })
            )
          );
        }),
        x = (0, i.forwardRef)((e, t) => {
          let { __scopeTabs: n, loop: l = !0, ...o } = e,
            a = k("TabsList", n),
            c = m(n);
          return (0, i.createElement)(
            u.fC,
            (0, r.Z)({ asChild: !0 }, c, {
              orientation: a.orientation,
              dir: a.dir,
              loop: l,
            }),
            (0, i.createElement)(
              s.WV.div,
              (0, r.Z)(
                { role: "tablist", "aria-orientation": a.orientation },
                o,
                { ref: t }
              )
            )
          );
        }),
        F = (0, i.forwardRef)((e, t) => {
          let { __scopeTabs: n, value: o, disabled: a = !1, ...c } = e,
            f = k("TabsTrigger", n),
            h = m(n),
            d = C(f.baseId, o),
            p = A(f.baseId, o),
            g = o === f.value;
          return (0, i.createElement)(
            u.ck,
            (0, r.Z)({ asChild: !0 }, h, { focusable: !a, active: g }),
            (0, i.createElement)(
              s.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": g,
                  "aria-controls": p,
                  "data-state": g ? "active" : "inactive",
                  "data-disabled": a ? "" : void 0,
                  disabled: a,
                  id: d,
                },
                c,
                {
                  ref: t,
                  onMouseDown: (0, l.M)(e.onMouseDown, (e) => {
                    a || 0 !== e.button || !1 !== e.ctrlKey
                      ? e.preventDefault()
                      : f.onValueChange(o);
                  }),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) && f.onValueChange(o);
                  }),
                  onFocus: (0, l.M)(e.onFocus, () => {
                    let e = "manual" !== f.activationMode;
                    g || a || !e || f.onValueChange(o);
                  }),
                }
              )
            )
          );
        }),
        v = (0, i.forwardRef)((e, t) => {
          let {
              __scopeTabs: n,
              value: l,
              forceMount: o,
              children: u,
              ...c
            } = e,
            f = k("TabsContent", n),
            h = C(f.baseId, l),
            d = A(f.baseId, l),
            p = l === f.value,
            g = (0, i.useRef)(p);
          return (
            (0, i.useEffect)(() => {
              let e = requestAnimationFrame(() => (g.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, i.createElement)(a.z, { present: o || p }, ({ present: n }) =>
              (0, i.createElement)(
                s.WV.div,
                (0, r.Z)(
                  {
                    "data-state": p ? "active" : "inactive",
                    "data-orientation": f.orientation,
                    role: "tabpanel",
                    "aria-labelledby": h,
                    hidden: !n,
                    id: d,
                    tabIndex: 0,
                  },
                  c,
                  {
                    ref: t,
                    style: {
                      ...e.style,
                      animationDuration: g.current ? "0s" : void 0,
                    },
                  }
                ),
                n && u
              )
            )
          );
        });
      function C(e, t) {
        return `${e}-trigger-${t}`;
      }
      function A(e, t) {
        return `${e}-content-${t}`;
      }
      let D = y,
        E = x,
        w = F,
        M = v;
    },
    53404: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, {
        w: function () {
          return r;
        },
      });
    },
    94920: function (e) {
      e.exports = function (e) {
        var t = "true false yes no null",
          n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
          r = {
            className: "string",
            relevance: 0,
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /\S+/ },
            ],
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                className: "template-variable",
                variants: [
                  { begin: /\{\{/, end: /\}\}/ },
                  { begin: /%\{/, end: /\}/ },
                ],
              },
            ],
          },
          i = e.inherit(r, {
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /[^\s,{}[\]]+/ },
            ],
          }),
          l = {
            end: ",",
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: t,
            relevance: 0,
          },
          o = [
            {
              className: "attr",
              variants: [
                { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
                { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
                { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
              ],
            },
            { className: "meta", begin: "^---\\s*$", relevance: 10 },
            {
              className: "string",
              begin:
                "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
            },
            {
              begin: "<%[%=-]?",
              end: "[%-]?%>",
              subLanguage: "ruby",
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
            },
            { className: "type", begin: "!\\w+!" + n },
            { className: "type", begin: "!<" + n + ">" },
            { className: "type", begin: "!" + n },
            { className: "type", begin: "!!" + n },
            { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
            e.HASH_COMMENT_MODE,
            { beginKeywords: t, keywords: { literal: t } },
            {
              className: "number",
              begin:
                "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
            },
            { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
            {
              begin: /\{/,
              end: /\}/,
              contains: [l],
              illegal: "\\n",
              relevance: 0,
            },
            {
              begin: "\\[",
              end: "\\]",
              contains: [l],
              illegal: "\\n",
              relevance: 0,
            },
            r,
          ],
          u = [...o];
        return (
          u.pop(),
          u.push(i),
          (l.contains = u),
          { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: o }
        );
      };
    },
    17591: function (e, t, n) {
      "use strict";
      function r(e, t = {}) {
        let n = (t.align || []).concat(),
          r = t.stringLength || i,
          o = [],
          u = [],
          a = [],
          s = [],
          c = 0,
          f = -1;
        for (; ++f < e.length; ) {
          let n = [],
            i = [],
            l = -1;
          for (e[f].length > c && (c = e[f].length); ++l < e[f].length; ) {
            var h;
            let o = null == (h = e[f][l]) ? "" : String(h);
            if (!1 !== t.alignDelimiters) {
              let e = r(o);
              (i[l] = e), (void 0 === s[l] || e > s[l]) && (s[l] = e);
            }
            n.push(o);
          }
          (u[f] = n), (a[f] = i);
        }
        let d = -1;
        if ("object" == typeof n && "length" in n)
          for (; ++d < c; ) o[d] = l(n[d]);
        else {
          let e = l(n);
          for (; ++d < c; ) o[d] = e;
        }
        d = -1;
        let p = [],
          g = [];
        for (; ++d < c; ) {
          let e = o[d],
            n = "",
            r = "";
          99 === e
            ? ((n = ":"), (r = ":"))
            : 108 === e
            ? (n = ":")
            : 114 === e && (r = ":");
          let i =
              !1 === t.alignDelimiters
                ? 1
                : Math.max(1, s[d] - n.length - r.length),
            l = n + "-".repeat(i) + r;
          !1 !== t.alignDelimiters &&
            ((i = n.length + i + r.length) > s[d] && (s[d] = i), (g[d] = i)),
            (p[d] = l);
        }
        u.splice(1, 0, p), a.splice(1, 0, g), (f = -1);
        let m = [];
        for (; ++f < u.length; ) {
          let e = u[f],
            n = a[f];
          d = -1;
          let r = [];
          for (; ++d < c; ) {
            let i = e[d] || "",
              l = "",
              u = "";
            if (!1 !== t.alignDelimiters) {
              let e = s[d] - (n[d] || 0),
                t = o[d];
              114 === t
                ? (l = " ".repeat(e))
                : 99 === t
                ? e % 2
                  ? ((l = " ".repeat(e / 2 + 0.5)),
                    (u = " ".repeat(e / 2 - 0.5)))
                  : (u = l = " ".repeat(e / 2))
                : (u = " ".repeat(e));
            }
            !1 === t.delimiterStart || d || r.push("|"),
              !1 !== t.padding &&
                !(!1 === t.alignDelimiters && "" === i) &&
                (!1 !== t.delimiterStart || d) &&
                r.push(" "),
              !1 !== t.alignDelimiters && r.push(l),
              r.push(i),
              !1 !== t.alignDelimiters && r.push(u),
              !1 !== t.padding && r.push(" "),
              (!1 !== t.delimiterEnd || d !== c - 1) && r.push("|");
          }
          m.push(
            !1 === t.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join("")
          );
        }
        return m.join("\n");
      }
      function i(e) {
        return e.length;
      }
      function l(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
          ? 108
          : 82 === t || 114 === t
          ? 114
          : 0;
      }
      n.d(t, {
        x: function () {
          return r;
        },
      });
    },
    17618: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("CirclePause", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
        ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }],
      ]);
    },
    58371: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("CirclePlay", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
      ]);
    },
    15481: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    10963: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("File", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
      ]);
    },
    16474: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Terminal", [
        ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
      ]);
    },
    80276: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Triangle", [
        [
          "path",
          {
            d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "14u9p9",
          },
        ],
      ]);
    },
    3483: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(32605),
        i = n(96141),
        l = n(14799),
        o = n(84645),
        u = n(85742),
        a = (0, r.z)({
          chartName: "BarChart",
          GraphicalChild: i.$,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: l.K },
            { axisType: "yAxis", AxisComp: o.B },
          ],
          formatAxisMap: u.t9,
        });
    },
    57960: function (e, t, n) {
      "use strict";
      n.d(t, {
        YD: function () {
          return s;
        },
      });
      var r = n(2784),
        i = Object.defineProperty,
        l = new Map(),
        o = new WeakMap(),
        u = 0,
        a = void 0;
      function s({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: i,
        root: s,
        triggerOnce: c,
        skip: f,
        initialInView: h,
        fallbackInView: d,
        onChange: p,
      } = {}) {
        var g;
        let [m, b] = r.useState(null),
          k = r.useRef(),
          [y, x] = r.useState({ inView: !!h, entry: void 0 });
        (k.current = p),
          r.useEffect(() => {
            let r;
            if (!f && m)
              return (
                (r = (function (e, t, n = {}, r = a) {
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let i = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          "number" == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: i,
                      observer: s,
                      elements: c,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var n;
                            return `${t}_${
                              "root" === t
                                ? (n = e.root)
                                  ? (o.has(n) ||
                                      ((u += 1), o.set(n, u.toString())),
                                    o.get(n))
                                  : "0"
                                : e[t]
                            }`;
                          })
                          .toString(),
                        n = l.get(t);
                      if (!n) {
                        let r;
                        let i = new Map(),
                          o = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var n;
                              let l =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = l),
                                null == (n = i.get(t.target)) ||
                                  n.forEach((e) => {
                                    e(l, t);
                                  });
                            });
                          }, e);
                        (r =
                          o.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: o, elements: i }),
                          l.set(t, n);
                      }
                      return n;
                    })(n),
                    f = c.get(e) || [];
                  return (
                    c.has(e) || c.set(e, f),
                    f.push(t),
                    s.observe(e),
                    function () {
                      f.splice(f.indexOf(t), 1),
                        0 === f.length && (c.delete(e), s.unobserve(e)),
                        0 === c.size && (s.disconnect(), l.delete(i));
                    }
                  );
                })(
                  m,
                  (e, t) => {
                    x({ inView: e, entry: t }),
                      k.current && k.current(e, t),
                      t.isIntersecting && c && r && (r(), (r = void 0));
                  },
                  {
                    root: s,
                    rootMargin: i,
                    threshold: e,
                    trackVisibility: n,
                    delay: t,
                  },
                  d
                )),
                () => {
                  r && r();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, m, s, i, c, f, n, d, t]);
        let F = null == (g = y.entry) ? void 0 : g.target,
          v = r.useRef();
        m ||
          !F ||
          c ||
          f ||
          v.current === F ||
          ((v.current = F), x({ inView: !!h, entry: void 0 }));
        let C = [b, y.inView, y.entry];
        return (C.ref = C[0]), (C.inView = C[1]), (C.entry = C[2]), C;
      }
      r.Component;
    },
    78894: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var i = r(n(94920)).default;
      t.Z = i;
    },
    64456: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return eH;
        },
      });
      var r = n(61271);
      let i = f(/[A-Za-z]/),
        l = f(/[\dA-Za-z]/);
      function o(e) {
        return null !== e && e < -2;
      }
      function u(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function a(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      f(/[#-'*+\--9=?A-Z^-~]/), f(/\d/), f(/[\dA-Fa-f]/), f(/[!-/:-@[-`{-~]/);
      let s = f(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        c = f(/\s/);
      function f(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      let h = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(l) {
              return (87 === l || 119 === l) && r < 3
                ? (r++, e.consume(l), t)
                : 46 === l && 3 === r
                ? (e.consume(l), i)
                : n(l);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        d = {
          tokenize: function (e, t, n) {
            let r, i, l;
            return o;
            function o(t) {
              return 46 === t || 95 === t
                ? e.check(g, f, a)(t)
                : null === t || u(t) || c(t) || (45 !== t && s(t))
                ? f(t)
                : ((l = !0), e.consume(t), o);
            }
            function a(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), o
              );
            }
            function f(e) {
              return i || r || !l ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        p = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(o) {
              return 40 === o
                ? (n++, e.consume(o), i)
                : 41 === o && r < n
                ? l(o)
                : 33 === o ||
                  34 === o ||
                  38 === o ||
                  39 === o ||
                  41 === o ||
                  42 === o ||
                  44 === o ||
                  46 === o ||
                  58 === o ||
                  59 === o ||
                  60 === o ||
                  63 === o ||
                  93 === o ||
                  95 === o ||
                  126 === o
                ? e.check(g, t, l)(o)
                : null === o || u(o) || c(o)
                ? t(o)
                : (e.consume(o), i);
            }
            function l(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        g = {
          tokenize: function (e, t, n) {
            return r;
            function r(i) {
              return 33 === i ||
                34 === i ||
                39 === i ||
                41 === i ||
                42 === i ||
                44 === i ||
                46 === i ||
                58 === i ||
                59 === i ||
                63 === i ||
                95 === i ||
                126 === i
                ? (e.consume(i), r)
                : 38 === i
                ? (e.consume(i), o)
                : 93 === i
                ? (e.consume(i), l)
                : 60 === i || null === i || u(i) || c(i)
                ? t(i)
                : n(i);
            }
            function l(e) {
              return null === e || 40 === e || 91 === e || u(e) || c(e)
                ? t(e)
                : r(e);
            }
            function o(t) {
              return i(t)
                ? (function t(l) {
                    return 59 === l
                      ? (e.consume(l), r)
                      : i(l)
                      ? (e.consume(l), t)
                      : n(l);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        m = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return l(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        b = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !C.call(r, r.previous) ||
                w(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(h, e.attempt(d, e.attempt(p, i), n), n)(t));
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: C,
        },
        k = {
          tokenize: function (e, t, n) {
            let r = this,
              l = "",
              o = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                A.call(r, r.previous) &&
                !w(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (l += String.fromCodePoint(t)),
                  e.consume(t),
                  a)
                : n(t);
            };
            function a(t) {
              if (i(t) && l.length < 5)
                return (l += String.fromCodePoint(t)), e.consume(t), a;
              if (58 === t) {
                let n = l.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), f;
              }
              return n(t);
            }
            function f(t) {
              return 47 === t ? ((e.consume(t), o) ? h : ((o = !0), f)) : n(t);
            }
            function h(t) {
              return null === t ||
                (null !== t && (t < 32 || 127 === t)) ||
                u(t) ||
                c(t) ||
                s(t)
                ? n(t)
                : e.attempt(d, e.attempt(p, g), n)(t);
            }
            function g(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: A,
        },
        y = {
          tokenize: function (e, t, n) {
            let r, o;
            let u = this;
            return function (t) {
              return !E(t) || !D.call(u, u.previous) || w(u.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function t(r) {
                    return E(r)
                      ? (e.consume(r), t)
                      : 64 === r
                      ? (e.consume(r), a)
                      : n(r);
                  })(t));
            };
            function a(t) {
              return 46 === t
                ? e.check(m, c, s)(t)
                : 45 === t || 95 === t || l(t)
                ? ((o = !0), e.consume(t), a)
                : c(t);
            }
            function s(t) {
              return e.consume(t), (r = !0), a;
            }
            function c(l) {
              return o && r && i(u.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(l))
                : n(l);
            }
          },
          previous: D,
        },
        x = {},
        F = { text: x },
        v = 48;
      for (; v < 123; ) (x[v] = y), 58 == ++v ? (v = 65) : 91 === v && (v = 97);
      function C(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          u(e)
        );
      }
      function A(e) {
        return !i(e);
      }
      function D(e) {
        return !(47 === e || E(e));
      }
      function E(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || l(e);
      }
      function w(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (x[43] = y),
        (x[45] = y),
        (x[46] = y),
        (x[95] = y),
        (x[72] = [y, k]),
        (x[104] = [y, k]),
        (x[87] = [y, b]),
        (x[119] = [y, b]);
      var M = n(2730),
        S = n(99238),
        j = n(20402);
      let L = {
        tokenize: function (e, t, n) {
          let r = this;
          return (0, S.f)(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function R(e, t, n) {
        let r;
        let i = this,
          l = i.events.length,
          o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; l--; ) {
          let e = i.events[l][1];
          if ("labelImage" === e.type) {
            r = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (l) {
          if (!r || !r._balanced) return n(l);
          let u = (0, j.d)(i.sliceSerialize({ start: r.end, end: i.now() }));
          return 94 === u.codePointAt(0) && o.includes(u.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(l),
              e.exit("gfmFootnoteCallLabelMarker"),
              t(l))
            : n(l);
        };
      }
      function T(e, t) {
        let n = e.length;
        for (; n--; )
          if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
            e[n][1];
            break;
          }
        (e[n + 1][1].type = "data"),
          (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        let l = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          o = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, l.start),
            end: Object.assign({}, l.end),
          },
          u = [
            e[n + 1],
            e[n + 2],
            ["enter", r, t],
            e[n + 3],
            e[n + 4],
            ["enter", i, t],
            ["exit", i, t],
            ["enter", l, t],
            ["enter", o, t],
            ["exit", o, t],
            ["exit", l, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, t],
          ];
        return e.splice(n, e.length - n + 1, ...u), e;
      }
      function O(e, t, n) {
        let r;
        let i = this,
          l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
          o = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            a
          );
        };
        function a(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              s);
        }
        function s(a) {
          if (o > 999 || (93 === a && !r) || null === a || 91 === a || u(a))
            return n(a);
          if (93 === a) {
            e.exit("chunkString");
            let r = e.exit("gfmFootnoteCallString");
            return l.includes((0, j.d)(i.sliceSerialize(r)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(a),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(a);
          }
          return u(a) || (r = !0), o++, e.consume(a), 92 === a ? c : s;
        }
        function c(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), o++, s)
            : s(t);
        }
      }
      function B(e, t, n) {
        let r, i;
        let l = this,
          o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
          a = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            s
          );
        };
        function s(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              c)
            : n(t);
        }
        function c(t) {
          if (a > 999 || (93 === t && !i) || null === t || 91 === t || u(t))
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            let n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (r = (0, j.d)(l.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              h
            );
          }
          return u(t) || (i = !0), a++, e.consume(t), 92 === t ? f : c;
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), a++, c)
            : c(t);
        }
        function h(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              o.includes(r) || o.push(r),
              (0, S.f)(e, d, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function d(e) {
          return t(e);
        }
      }
      function _(e, t, n) {
        return e.check(M.w, t, e.attempt(L, t, n));
      }
      function z(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var I = n(50189),
        Z = n(25869),
        V = n(79598);
      class N {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 !== n || 0 !== r.length) {
              for (; i < e.map.length; ) {
                if (e.map[i][0] === t) {
                  (e.map[i][1] += n), e.map[i][2].push(...r);
                  return;
                }
                i += 1;
              }
              e.map.push([t, n, r]);
            }
          })(this, e, t, n);
        }
        consume(e) {
          if ((this.map.sort((e, t) => e[0] - t[0]), 0 === this.map.length))
            return;
          let t = this.map.length,
            n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1])),
              n.push(this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      let $ = {
        flow: {
          null: {
            tokenize: function (e, t, n) {
              let r;
              let i = this,
                l = 0,
                s = 0;
              return function (e) {
                let t = i.events.length - 1;
                for (; t > -1; ) {
                  let e = i.events[t][1].type;
                  if ("lineEnding" === e || "linePrefix" === e) t--;
                  else break;
                }
                let r = t > -1 ? i.events[t][1].type : null,
                  l = "tableHead" === r || "tableRow" === r ? F : c;
                return l === F && i.parser.lazy[i.now().line] ? n(e) : l(e);
              };
              function c(t) {
                return (
                  e.enter("tableHead"),
                  e.enter("tableRow"),
                  124 === t || ((r = !0), (s += 1)),
                  f(t)
                );
              }
              function f(t) {
                return null === t
                  ? n(t)
                  : o(t)
                  ? s > 1
                    ? ((s = 0),
                      (i.interrupt = !0),
                      e.exit("tableRow"),
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      p)
                    : n(t)
                  : a(t)
                  ? (0, S.f)(e, f, "whitespace")(t)
                  : ((s += 1), r && ((r = !1), (l += 1)), 124 === t)
                  ? (e.enter("tableCellDivider"),
                    e.consume(t),
                    e.exit("tableCellDivider"),
                    (r = !0),
                    f)
                  : (e.enter("data"), h(t));
              }
              function h(t) {
                return null === t || 124 === t || u(t)
                  ? (e.exit("data"), f(t))
                  : (e.consume(t), 92 === t ? d : h);
              }
              function d(t) {
                return 92 === t || 124 === t ? (e.consume(t), h) : h(t);
              }
              function p(t) {
                return ((i.interrupt = !1), i.parser.lazy[i.now().line])
                  ? n(t)
                  : (e.enter("tableDelimiterRow"), (r = !1), a(t))
                  ? (0, S.f)(
                      e,
                      g,
                      "linePrefix",
                      i.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : g(t);
              }
              function g(t) {
                return 45 === t || 58 === t
                  ? b(t)
                  : 124 === t
                  ? ((r = !0),
                    e.enter("tableCellDivider"),
                    e.consume(t),
                    e.exit("tableCellDivider"),
                    m)
                  : n(t);
              }
              function m(t) {
                return a(t) ? (0, S.f)(e, b, "whitespace")(t) : b(t);
              }
              function b(t) {
                return 58 === t
                  ? ((s += 1),
                    (r = !0),
                    e.enter("tableDelimiterMarker"),
                    e.consume(t),
                    e.exit("tableDelimiterMarker"),
                    k)
                  : 45 === t
                  ? ((s += 1), k(t))
                  : null === t || o(t)
                  ? x(t)
                  : n(t);
              }
              function k(t) {
                return 45 === t
                  ? (e.enter("tableDelimiterFiller"),
                    (function t(n) {
                      return 45 === n
                        ? (e.consume(n), t)
                        : 58 === n
                        ? ((r = !0),
                          e.exit("tableDelimiterFiller"),
                          e.enter("tableDelimiterMarker"),
                          e.consume(n),
                          e.exit("tableDelimiterMarker"),
                          y)
                        : (e.exit("tableDelimiterFiller"), y(n));
                    })(t))
                  : n(t);
              }
              function y(t) {
                return a(t) ? (0, S.f)(e, x, "whitespace")(t) : x(t);
              }
              function x(i) {
                return 124 === i
                  ? g(i)
                  : null === i || o(i)
                  ? r && l === s
                    ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i))
                    : n(i)
                  : n(i);
              }
              function F(t) {
                return e.enter("tableRow"), v(t);
              }
              function v(n) {
                return 124 === n
                  ? (e.enter("tableCellDivider"),
                    e.consume(n),
                    e.exit("tableCellDivider"),
                    v)
                  : null === n || o(n)
                  ? (e.exit("tableRow"), t(n))
                  : a(n)
                  ? (0, S.f)(e, v, "whitespace")(n)
                  : (e.enter("data"), C(n));
              }
              function C(t) {
                return null === t || 124 === t || u(t)
                  ? (e.exit("data"), v(t))
                  : (e.consume(t), 92 === t ? A : C);
              }
              function A(t) {
                return 92 === t || 124 === t ? (e.consume(t), C) : C(t);
              }
            },
            resolveAll: function (e, t) {
              let n,
                r,
                i,
                l = -1,
                o = !0,
                u = 0,
                a = [0, 0, 0, 0],
                s = [0, 0, 0, 0],
                c = !1,
                f = 0,
                h = new N();
              for (; ++l < e.length; ) {
                let d = e[l],
                  p = d[1];
                "enter" === d[0]
                  ? "tableHead" === p.type
                    ? ((c = !1),
                      0 !== f && (H(h, t, f, n, r), (r = void 0), (f = 0)),
                      (n = {
                        type: "table",
                        start: Object.assign({}, p.start),
                        end: Object.assign({}, p.end),
                      }),
                      h.add(l, 0, [["enter", n, t]]))
                    : "tableRow" === p.type || "tableDelimiterRow" === p.type
                    ? ((o = !0),
                      (i = void 0),
                      (a = [0, 0, 0, 0]),
                      (s = [0, l + 1, 0, 0]),
                      c &&
                        ((c = !1),
                        (r = {
                          type: "tableBody",
                          start: Object.assign({}, p.start),
                          end: Object.assign({}, p.end),
                        }),
                        h.add(l, 0, [["enter", r, t]])),
                      (u = "tableDelimiterRow" === p.type ? 2 : r ? 3 : 1))
                    : u &&
                      ("data" === p.type ||
                        "tableDelimiterMarker" === p.type ||
                        "tableDelimiterFiller" === p.type)
                    ? ((o = !1),
                      0 === s[2] &&
                        (0 !== a[1] &&
                          ((s[0] = s[1]),
                          (i = P(h, t, a, u, void 0, i)),
                          (a = [0, 0, 0, 0])),
                        (s[2] = l)))
                    : "tableCellDivider" === p.type &&
                      (o
                        ? (o = !1)
                        : (0 !== a[1] &&
                            ((s[0] = s[1]), (i = P(h, t, a, u, void 0, i))),
                          (s = [(a = s)[1], l, 0, 0])))
                  : "tableHead" === p.type
                  ? ((c = !0), (f = l))
                  : "tableRow" === p.type || "tableDelimiterRow" === p.type
                  ? ((f = l),
                    0 !== a[1]
                      ? ((s[0] = s[1]), (i = P(h, t, a, u, l, i)))
                      : 0 !== s[1] && (i = P(h, t, s, u, l, i)),
                    (u = 0))
                  : u &&
                    ("data" === p.type ||
                      "tableDelimiterMarker" === p.type ||
                      "tableDelimiterFiller" === p.type) &&
                    (s[3] = l);
              }
              for (
                0 !== f && H(h, t, f, n, r), h.consume(t.events), l = -1;
                ++l < t.events.length;

              ) {
                let e = t.events[l];
                "enter" === e[0] &&
                  "table" === e[1].type &&
                  (e[1]._align = (function (e, t) {
                    let n = !1,
                      r = [];
                    for (; t < e.length; ) {
                      let i = e[t];
                      if (n) {
                        if ("enter" === i[0])
                          "tableContent" === i[1].type &&
                            r.push(
                              "tableDelimiterMarker" === e[t + 1][1].type
                                ? "left"
                                : "none"
                            );
                        else if ("tableContent" === i[1].type) {
                          if ("tableDelimiterMarker" === e[t - 1][1].type) {
                            let e = r.length - 1;
                            r[e] = "left" === r[e] ? "center" : "right";
                          }
                        } else if ("tableDelimiterRow" === i[1].type) break;
                      } else
                        "enter" === i[0] &&
                          "tableDelimiterRow" === i[1].type &&
                          (n = !0);
                      t += 1;
                    }
                    return r;
                  })(t.events, l));
              }
              return e;
            },
          },
        },
      };
      function P(e, t, n, r, i, l) {
        0 !== n[0] &&
          ((l.end = Object.assign({}, W(t.events, n[0]))),
          e.add(n[0], 0, [["exit", l, t]]));
        let o = W(t.events, n[1]);
        if (
          ((l = {
            type:
              1 === r
                ? "tableHeader"
                : 2 === r
                ? "tableDelimiter"
                : "tableData",
            start: Object.assign({}, o),
            end: Object.assign({}, o),
          }),
          e.add(n[1], 0, [["enter", l, t]]),
          0 !== n[2])
        ) {
          let i = W(t.events, n[2]),
            l = W(t.events, n[3]),
            o = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, l),
            };
          if ((e.add(n[2], 0, [["enter", o, t]]), 2 !== r)) {
            let r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              let t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", o, t]]);
        }
        return (
          void 0 !== i &&
            ((l.end = Object.assign({}, W(t.events, i))),
            e.add(i, 0, [["exit", l, t]]),
            (l = void 0)),
          l
        );
      }
      function H(e, t, n, r, i) {
        let l = [],
          o = W(t.events, n);
        i && ((i.end = Object.assign({}, o)), l.push(["exit", i, t])),
          (r.end = Object.assign({}, o)),
          l.push(["exit", r, t]),
          e.add(n + 1, 0, l);
      }
      function W(e, t) {
        let n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      let q = {
        text: {
          91: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return null === r.previous &&
                  r._gfmTasklistFirstContentOfListItem
                  ? (e.enter("taskListCheck"),
                    e.enter("taskListCheckMarker"),
                    e.consume(t),
                    e.exit("taskListCheckMarker"),
                    i)
                  : n(t);
              };
              function i(t) {
                return u(t)
                  ? (e.enter("taskListCheckValueUnchecked"),
                    e.consume(t),
                    e.exit("taskListCheckValueUnchecked"),
                    l)
                  : 88 === t || 120 === t
                  ? (e.enter("taskListCheckValueChecked"),
                    e.consume(t),
                    e.exit("taskListCheckValueChecked"),
                    l)
                  : n(t);
              }
              function l(t) {
                return 93 === t
                  ? (e.enter("taskListCheckMarker"),
                    e.consume(t),
                    e.exit("taskListCheckMarker"),
                    e.exit("taskListCheck"),
                    s)
                  : n(t);
              }
              function s(r) {
                return o(r)
                  ? t(r)
                  : a(r)
                  ? e.check({ tokenize: U }, t, n)(r)
                  : n(r);
              }
            },
          },
        },
      };
      function U(e, t, n) {
        return (0, S.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace"
        );
      }
      var K = n(53404);
      let Y = function (e) {
        if (null == e) return Q;
        if ("string" == typeof e)
          return G(function (t) {
            return t && t.type === e;
          });
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = Y(e[n]);
                return G(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].call(this, ...e)) return !0;
                  return !1;
                });
              })(e)
            : G(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("function" == typeof e) return G(e);
        throw Error("Expected function, string, or object as test");
      };
      function G(e) {
        return function (t, ...n) {
          return !!(
            t &&
            "object" == typeof t &&
            "type" in t &&
            e.call(this, t, ...n)
          );
        };
      }
      function Q() {
        return !0;
      }
      let J = function (e, t, n, r) {
          "function" == typeof t &&
            "function" != typeof n &&
            ((r = n), (n = t), (t = null));
          let i = Y(t),
            l = r ? -1 : 1;
          (function e(o, u, a) {
            let s = o && "object" == typeof o ? o : {};
            if ("string" == typeof s.type) {
              let e =
                "string" == typeof s.tagName
                  ? s.tagName
                  : "string" == typeof s.name
                  ? s.name
                  : void 0;
              Object.defineProperty(c, "name", {
                value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")",
              });
            }
            return c;
            function c() {
              var s;
              let c,
                f,
                h,
                d = [];
              if (
                (!t || i(o, u, a[a.length - 1] || null)) &&
                !1 ===
                  (d = Array.isArray((s = n(o, a)))
                    ? s
                    : "number" == typeof s
                    ? [!0, s]
                    : [s])[0]
              )
                return d;
              if (o.children && "skip" !== d[0])
                for (
                  f = (r ? o.children.length : -1) + l, h = a.concat(o);
                  f > -1 && f < o.children.length;

                ) {
                  if (!1 === (c = e(o.children[f], f, h)())[0]) return c;
                  f = "number" == typeof c[1] ? c[1] : f + l;
                }
              return d;
            }
          })(e, void 0, [])();
        },
        X = {}.hasOwnProperty,
        ee = function (e, t, n, r) {
          let i, l;
          "string" == typeof t || t instanceof RegExp
            ? ((l = [[t, n]]), (i = r))
            : ((l = t), (i = n)),
            i || (i = {});
          let o = Y(i.ignore || []),
            u = (function (e) {
              let t = [];
              if ("object" != typeof e)
                throw TypeError("Expected array or object as schema");
              if (Array.isArray(e)) {
                let n = -1;
                for (; ++n < e.length; ) t.push([et(e[n][0]), en(e[n][1])]);
              } else {
                let n;
                for (n in e) X.call(e, n) && t.push([et(n), en(e[n])]);
              }
              return t;
            })(l),
            a = -1;
          for (; ++a < u.length; ) J(e, "text", s);
          return e;
          function s(e, t) {
            let n,
              r = -1;
            for (; ++r < t.length; ) {
              let e = t[r];
              if (o(e, n ? n.children.indexOf(e) : void 0, n)) return;
              n = e;
            }
            if (n)
              return (function (e, t) {
                let n = t[t.length - 1],
                  r = u[a][0],
                  i = u[a][1],
                  l = 0,
                  o = n.children.indexOf(e),
                  s = !1,
                  c = [];
                r.lastIndex = 0;
                let f = r.exec(e.value);
                for (; f; ) {
                  let n = f.index,
                    o = { index: f.index, input: f.input, stack: [...t, e] },
                    u = i(...f, o);
                  if (
                    ("string" == typeof u &&
                      (u = u.length > 0 ? { type: "text", value: u } : void 0),
                    !1 !== u &&
                      (l !== n &&
                        c.push({ type: "text", value: e.value.slice(l, n) }),
                      Array.isArray(u) ? c.push(...u) : u && c.push(u),
                      (l = n + f[0].length),
                      (s = !0)),
                    !r.global)
                  )
                    break;
                  f = r.exec(e.value);
                }
                return (
                  s
                    ? (l < e.value.length &&
                        c.push({ type: "text", value: e.value.slice(l) }),
                      n.children.splice(o, 1, ...c))
                    : (c = [e]),
                  o + c.length
                );
              })(e, t);
          }
        };
      function et(e) {
        return "string" == typeof e
          ? RegExp(
              (function (e) {
                if ("string" != typeof e) throw TypeError("Expected a string");
                return e
                  .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                  .replace(/-/g, "\\x2d");
              })(e),
              "g"
            )
          : e;
      }
      function en(e) {
        return "function" == typeof e ? e : () => e;
      }
      let er = "phrasing",
        ei = ["autolink", "link", "image", "label"],
        el = {
          transforms: [
            function (e) {
              ee(
                e,
                [
                  [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ea],
                  [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, es],
                ],
                { ignore: ["link", "linkReference"] }
              );
            },
          ],
          enter: {
            literalAutolink: function (e) {
              this.enter(
                { type: "link", title: null, url: "", children: [] },
                e
              );
            },
            literalAutolinkEmail: eu,
            literalAutolinkHttp: eu,
            literalAutolinkWww: eu,
          },
          exit: {
            literalAutolink: function (e) {
              this.exit(e);
            },
            literalAutolinkEmail: function (e) {
              this.config.exit.autolinkEmail.call(this, e);
            },
            literalAutolinkHttp: function (e) {
              this.config.exit.autolinkProtocol.call(this, e);
            },
            literalAutolinkWww: function (e) {
              this.config.exit.data.call(this, e),
                (this.stack[this.stack.length - 1].url =
                  "http://" + this.sliceSerialize(e));
            },
          },
        },
        eo = {
          unsafe: [
            {
              character: "@",
              before: "[+\\-.\\w]",
              after: "[\\-.\\w]",
              inConstruct: er,
              notInConstruct: ei,
            },
            {
              character: ".",
              before: "[Ww]",
              after: "[\\-.\\w]",
              inConstruct: er,
              notInConstruct: ei,
            },
            {
              character: ":",
              before: "[ps]",
              after: "\\/",
              inConstruct: er,
              notInConstruct: ei,
            },
          ],
        };
      function eu(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function ea(e, t, n, r, i) {
        let l = "";
        if (
          !ec(i) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (l = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let o = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            r = n.indexOf(")"),
            i = (0, K.w)(e, "("),
            l = (0, K.w)(e, ")");
          for (; -1 !== r && i > l; )
            (e += n.slice(0, r + 1)),
              (r = (n = n.slice(r + 1)).indexOf(")")),
              l++;
          return [e, n];
        })(n + r);
        if (!o[0]) return !1;
        let u = {
          type: "link",
          title: null,
          url: l + t + o[0],
          children: [{ type: "text", value: t + o[0] }],
        };
        return o[1] ? [u, { type: "text", value: o[1] }] : u;
      }
      function es(e, t, n, r) {
        return (
          !(!ec(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function ec(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (0 === e.index || c(n) || s(n)) && (!t || 47 !== n);
      }
      var ef = n(1973);
      function eh(e) {
        return e.label || !e.identifier
          ? e.label || ""
          : (0, ef.v)(e.identifier);
      }
      let ed = /\r?\n|\r/g;
      function ep(e) {
        if (!e._compiled) {
          let t =
            (e.atBreak ? "[\\r\\n][\\t ]*" : "") +
            (e.before ? "(?:" + e.before + ")" : "");
          e._compiled = RegExp(
            (t ? "(" + t + ")" : "") +
              (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") +
              e.character +
              (e.after ? "(?:" + e.after + ")" : ""),
            "g"
          );
        }
        return e._compiled;
      }
      function eg(e, t, n) {
        if (("string" == typeof t && (t = [t]), !t || 0 === t.length)) return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      function em(e, t, n) {
        let r = (n.before || "") + (t || "") + (n.after || ""),
          i = [],
          l = [],
          o = {},
          u = -1;
        for (; ++u < e.unsafe.length; ) {
          var a;
          let t;
          let n = e.unsafe[u];
          if (
            !eg((a = e.stack), n.inConstruct, !0) ||
            eg(a, n.notInConstruct, !1)
          )
            continue;
          let l = ep(n);
          for (; (t = l.exec(r)); ) {
            let e = "before" in n || !!n.atBreak,
              r = "after" in n,
              l = t.index + (e ? t[1].length : 0);
            i.includes(l)
              ? (o[l].before && !e && (o[l].before = !1),
                o[l].after && !r && (o[l].after = !1))
              : (i.push(l), (o[l] = { before: e, after: r }));
          }
        }
        i.sort(eb);
        let s = n.before ? n.before.length : 0,
          c = r.length - (n.after ? n.after.length : 0);
        for (u = -1; ++u < i.length; ) {
          let e = i[u];
          !(e < s) &&
            !(e >= c) &&
            (!(e + 1 < c) ||
              i[u + 1] !== e + 1 ||
              !o[e].after ||
              o[e + 1].before ||
              o[e + 1].after) &&
            (i[u - 1] !== e - 1 ||
              !o[e].before ||
              o[e - 1].before ||
              o[e - 1].after) &&
            (s !== e && l.push(ek(r.slice(s, e), "\\")),
            (s = e),
            !/[!-/:-@[-`{-~]/.test(r.charAt(e)) ||
            (n.encode && n.encode.includes(r.charAt(e)))
              ? (l.push(
                  "&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"
                ),
                s++)
              : l.push("\\"));
        }
        return l.push(ek(r.slice(s, c), n.after)), l.join("");
      }
      function eb(e, t) {
        return e - t;
      }
      function ek(e, t) {
        let n;
        let r = /\\(?=[!-/:-@[-`{-~])/g,
          i = [],
          l = [],
          o = e + t,
          u = -1,
          a = 0;
        for (; (n = r.exec(o)); ) i.push(n.index);
        for (; ++u < i.length; )
          a !== i[u] && l.push(e.slice(a, i[u])), l.push("\\"), (a = i[u]);
        return l.push(e.slice(a)), l.join("");
      }
      function ey(e) {
        let t = e || {},
          n = t.now || {},
          r = t.lineShift || 0,
          i = n.line || 1,
          l = n.column || 1;
        return {
          move: function (e) {
            let t = e || "",
              n = t.split(/\r?\n|\r/g),
              o = n[n.length - 1];
            return (
              (i += n.length - 1),
              (l = 1 === n.length ? l + o.length : 1 + o.length + r),
              t
            );
          },
          current: function () {
            return { now: { line: i, column: l }, lineShift: r };
          },
          shift: function (e) {
            r += e;
          },
        };
      }
      function ex(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function eF() {
        this.buffer();
      }
      function ev(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (n.label = t),
          (n.identifier = (0, j.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function eC(e) {
        this.exit(e);
      }
      function eA(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function eD() {
        this.buffer();
      }
      function eE(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (n.label = t),
          (n.identifier = (0, j.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function ew(e) {
        this.exit(e);
      }
      function eM(e, t, n, r) {
        let i = ey(r),
          l = i.move("[^"),
          o = n.enter("footnoteReference"),
          u = n.enter("reference");
        return (
          (l += i.move(
            em(n, eh(e), { ...i.current(), before: l, after: "]" })
          )),
          u(),
          o(),
          (l += i.move("]"))
        );
      }
      function eS(e, t, n, r) {
        let i = ey(r),
          l = i.move("[^"),
          o = n.enter("footnoteDefinition"),
          u = n.enter("label");
        return (
          (l += i.move(
            em(n, eh(e), { ...i.current(), before: l, after: "]" })
          )),
          u(),
          (l += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : "")
          )),
          i.shift(4),
          (l += i.move(
            (function (e, t) {
              let n;
              let r = [],
                i = 0,
                l = 0;
              for (; (n = ed.exec(e)); )
                o(e.slice(i, n.index)),
                  r.push(n[0]),
                  (i = n.index + n[0].length),
                  l++;
              return o(e.slice(i)), r.join("");
              function o(e) {
                r.push(t(e, l, !e));
              }
            })(
              (function (e, t, n) {
                let r = t.indexStack,
                  i = e.children || [],
                  l = t.createTracker(n),
                  o = [],
                  u = -1;
                for (r.push(-1); ++u < i.length; ) {
                  let n = i[u];
                  (r[r.length - 1] = u),
                    o.push(
                      l.move(
                        t.handle(n, e, t, {
                          before: "\n",
                          after: "\n",
                          ...l.current(),
                        })
                      )
                    ),
                    "list" !== n.type && (t.bulletLastUsed = void 0),
                    u < i.length - 1 &&
                      o.push(
                        l.move(
                          (function (e, t, n, r) {
                            let i = r.join.length;
                            for (; i--; ) {
                              let l = r.join[i](e, t, n, r);
                              if (!0 === l || 1 === l) break;
                              if ("number" == typeof l)
                                return "\n".repeat(1 + l);
                              if (!1 === l) return "\n\n<!---->\n\n";
                            }
                            return "\n\n";
                          })(n, i[u + 1], e, t)
                        )
                      );
                }
                return r.pop(), o.join("");
              })(e, n, i.current()),
              ej
            )
          )),
          o(),
          l
        );
      }
      function ej(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      function eL(e, t, n) {
        let r = t.indexStack,
          i = e.children || [],
          l = [],
          o = -1,
          u = n.before;
        r.push(-1);
        let a = t.createTracker(n);
        for (; ++o < i.length; ) {
          let s;
          let c = i[o];
          if (((r[r.length - 1] = o), o + 1 < i.length)) {
            let n = t.handle.handlers[i[o + 1].type];
            n && n.peek && (n = n.peek),
              (s = n
                ? n(i[o + 1], e, t, {
                    before: "",
                    after: "",
                    ...a.current(),
                  }).charAt(0)
                : "");
          } else s = n.after;
          l.length > 0 &&
            ("\r" === u || "\n" === u) &&
            "html" === c.type &&
            ((l[l.length - 1] = l[l.length - 1].replace(/(\r?\n|\r)$/, " ")),
            (u = " "),
            (a = t.createTracker(n)).move(l.join(""))),
            l.push(
              a.move(t.handle(c, e, t, { ...a.current(), before: u, after: s }))
            ),
            (u = l[l.length - 1].slice(-1));
        }
        return r.pop(), l.join("");
      }
      (eM.peek = function () {
        return "[";
      }),
        (eO.peek = function () {
          return "~";
        });
      let eR = {
          canContainEols: ["delete"],
          enter: {
            strikethrough: function (e) {
              this.enter({ type: "delete", children: [] }, e);
            },
          },
          exit: {
            strikethrough: function (e) {
              this.exit(e);
            },
          },
        },
        eT = {
          unsafe: [
            {
              character: "~",
              inConstruct: "phrasing",
              notInConstruct: [
                "autolink",
                "destinationLiteral",
                "destinationRaw",
                "reference",
                "titleQuote",
                "titleApostrophe",
              ],
            },
          ],
          handlers: { delete: eO },
        };
      function eO(e, t, n, r) {
        let i = ey(r),
          l = n.enter("strikethrough"),
          o = i.move("~~");
        return (
          (o +=
            eL(e, n, { ...i.current(), before: o, after: "~" }) + i.move("~~")),
          l(),
          o
        );
      }
      function eB(e, t, n) {
        let r = e.value || "",
          i = "`",
          l = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++l < n.unsafe.length;

        ) {
          let e;
          let t = n.unsafe[l],
            i = ep(t);
          if (t.atBreak)
            for (; (e = i.exec(r)); ) {
              let t = e.index;
              10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                (r = r.slice(0, t) + " " + r.slice(e.index + 1));
            }
        }
        return i + r + i;
      }
      eB.peek = function () {
        return "`";
      };
      var e_ = n(17591);
      let ez = {
        enter: {
          table: function (e) {
            let t = e._align;
            this.enter(
              {
                type: "table",
                align: t.map((e) => ("none" === e ? null : e)),
                children: [],
              },
              e
            ),
              this.setData("inTable", !0);
          },
          tableData: eZ,
          tableHeader: eZ,
          tableRow: function (e) {
            this.enter({ type: "tableRow", children: [] }, e);
          },
        },
        exit: {
          codeText: function (e) {
            let t = this.resume();
            this.getData("inTable") && (t = t.replace(/\\([\\|])/g, eV)),
              (this.stack[this.stack.length - 1].value = t),
              this.exit(e);
          },
          table: function (e) {
            this.exit(e), this.setData("inTable");
          },
          tableData: eI,
          tableHeader: eI,
          tableRow: eI,
        },
      };
      function eI(e) {
        this.exit(e);
      }
      function eZ(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function eV(e, t) {
        return "|" === t ? t : e;
      }
      let eN = {
          exit: {
            taskListCheckValueChecked: eP,
            taskListCheckValueUnchecked: eP,
            paragraph: function (e) {
              let t = this.stack[this.stack.length - 2];
              if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                let e = this.stack[this.stack.length - 1],
                  n = e.children[0];
                if (n && "text" === n.type) {
                  let r;
                  let i = t.children,
                    l = -1;
                  for (; ++l < i.length; ) {
                    let e = i[l];
                    if ("paragraph" === e.type) {
                      r = e;
                      break;
                    }
                  }
                  r === e &&
                    ((n.value = n.value.slice(1)),
                    0 === n.value.length
                      ? e.children.shift()
                      : e.position &&
                        n.position &&
                        "number" == typeof n.position.start.offset &&
                        (n.position.start.column++,
                        n.position.start.offset++,
                        (e.position.start = Object.assign(
                          {},
                          n.position.start
                        ))));
                }
              }
              this.exit(e);
            },
          },
        },
        e$ = {
          unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
          handlers: {
            listItem: function (e, t, n, r) {
              let i = e.children[0],
                l =
                  "boolean" == typeof e.checked && i && "paragraph" === i.type,
                o = "[" + (e.checked ? "x" : " ") + "] ",
                u = ey(r);
              l && u.move(o);
              let a = (function (e, t, n, r) {
                let i = (function (e) {
                    let t = e.options.listItemIndent || "tab";
                    if (1 === t || "1" === t) return "one";
                    if ("tab" !== t && "one" !== t && "mixed" !== t)
                      throw Error(
                        "Cannot serialize items with `" +
                          t +
                          "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                      );
                    return t;
                  })(n),
                  l =
                    n.bulletCurrent ||
                    (function (e) {
                      let t = e.options.bullet || "*";
                      if ("*" !== t && "+" !== t && "-" !== t)
                        throw Error(
                          "Cannot serialize items with `" +
                            t +
                            "` for `options.bullet`, expected `*`, `+`, or `-`"
                        );
                      return t;
                    })(n);
                t &&
                  "list" === t.type &&
                  t.ordered &&
                  (l =
                    ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
                    (!1 === n.options.incrementListMarker
                      ? 0
                      : t.children.indexOf(e)) +
                    l);
                let o = l.length + 1;
                ("tab" === i ||
                  ("mixed" === i &&
                    ((t && "list" === t.type && t.spread) || e.spread))) &&
                  (o = 4 * Math.ceil(o / 4));
                let u = n.createTracker(r);
                u.move(l + " ".repeat(o - l.length)), u.shift(o);
                let a = n.enter("listItem"),
                  s = n.indentLines(
                    n.containerFlow(e, u.current()),
                    function (e, t, n) {
                      return t
                        ? (n ? "" : " ".repeat(o)) + e
                        : (n ? l : l + " ".repeat(o - l.length)) + e;
                    }
                  );
                return a(), s;
              })(e, t, n, { ...r, ...u.current() });
              return (
                l &&
                  (a = a.replace(
                    /^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,
                    function (e) {
                      return e + o;
                    }
                  )),
                a
              );
            },
          },
        };
      function eP(e) {
        this.stack[this.stack.length - 2].checked =
          "taskListCheckValueChecked" === e.type;
      }
      function eH(e = {}) {
        let t = this.data();
        function n(e, n) {
          (t[e] ? t[e] : (t[e] = [])).push(n);
        }
        n(
          "micromarkExtensions",
          (0, r.W)([
            F,
            {
              document: {
                91: { tokenize: B, continuation: { tokenize: _ }, exit: z },
              },
              text: {
                91: { tokenize: O },
                93: { add: "after", tokenize: R, resolveTo: T },
              },
            },
            (function (e) {
              let t = (e || {}).singleTilde,
                n = {
                  tokenize: function (e, n, r) {
                    let i = this.previous,
                      l = this.events,
                      o = 0;
                    return function (u) {
                      return 126 === i &&
                        "characterEscape" !== l[l.length - 1][1].type
                        ? r(u)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function l(u) {
                            let a = (0, Z.r)(i);
                            if (126 === u)
                              return o > 1 ? r(u) : (e.consume(u), o++, l);
                            if (o < 2 && !t) return r(u);
                            let s = e.exit("strikethroughSequenceTemporary"),
                              c = (0, Z.r)(u);
                            return (
                              (s._open = !c || (2 === c && !!a)),
                              (s._close = !a || (2 === a && !!c)),
                              n(u)
                            );
                          })(u));
                    };
                  },
                  resolveAll: function (e, t) {
                    let n = -1;
                    for (; ++n < e.length; )
                      if (
                        "enter" === e[n][0] &&
                        "strikethroughSequenceTemporary" === e[n][1].type &&
                        e[n][1]._close
                      ) {
                        let r = n;
                        for (; r--; )
                          if (
                            "exit" === e[r][0] &&
                            "strikethroughSequenceTemporary" === e[r][1].type &&
                            e[r][1]._open &&
                            e[n][1].end.offset - e[n][1].start.offset ==
                              e[r][1].end.offset - e[r][1].start.offset
                          ) {
                            (e[n][1].type = "strikethroughSequence"),
                              (e[r][1].type = "strikethroughSequence");
                            let i = {
                                type: "strikethrough",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[n][1].end),
                              },
                              l = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[r][1].end),
                                end: Object.assign({}, e[n][1].start),
                              },
                              o = [
                                ["enter", i, t],
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                                ["enter", l, t],
                              ],
                              u = t.parser.constructs.insideSpan.null;
                            u &&
                              (0, I.d)(
                                o,
                                o.length,
                                0,
                                (0, V.C)(u, e.slice(r + 1, n), t)
                              ),
                              (0, I.d)(o, o.length, 0, [
                                ["exit", l, t],
                                ["enter", e[n][1], t],
                                ["exit", e[n][1], t],
                                ["exit", i, t],
                              ]),
                              (0, I.d)(e, r - 1, n - r + 3, o),
                              (n = r + o.length - 2);
                            break;
                          }
                      }
                    for (n = -1; ++n < e.length; )
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                        (e[n][1].type = "data");
                    return e;
                  },
                };
              return (
                null == t && (t = !0),
                {
                  text: { 126: n },
                  insideSpan: { null: [n] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(e),
            $,
            q,
          ])
        ),
          n("fromMarkdownExtensions", [
            el,
            {
              enter: {
                gfmFootnoteDefinition: ex,
                gfmFootnoteDefinitionLabelString: eF,
                gfmFootnoteCall: eA,
                gfmFootnoteCallString: eD,
              },
              exit: {
                gfmFootnoteDefinition: eC,
                gfmFootnoteDefinitionLabelString: ev,
                gfmFootnoteCall: ew,
                gfmFootnoteCallString: eE,
              },
            },
            eR,
            ez,
            eN,
          ]),
          n("toMarkdownExtensions", {
            extensions: [
              eo,
              {
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["phrasing", "label", "reference"],
                  },
                ],
                handlers: { footnoteDefinition: eS, footnoteReference: eM },
              },
              eT,
              (function (e) {
                let t = e || {},
                  n = t.tableCellPadding,
                  r = t.tablePipeAlign,
                  i = t.stringLength,
                  l = n ? " " : "|";
                return {
                  unsafe: [
                    { character: "\r", inConstruct: "tableCell" },
                    { character: "\n", inConstruct: "tableCell" },
                    { atBreak: !0, character: "|", after: "[	 :-]" },
                    { character: "|", inConstruct: "tableCell" },
                    { atBreak: !0, character: ":", after: "-" },
                    { atBreak: !0, character: "-", after: "[:|-]" },
                  ],
                  handlers: {
                    table: function (e, t, n, r) {
                      return u(
                        (function (e, t, n) {
                          let r = e.children,
                            i = -1,
                            l = [],
                            o = t.enter("table");
                          for (; ++i < r.length; ) l[i] = a(r[i], t, n);
                          return o(), l;
                        })(e, n, r),
                        e.align
                      );
                    },
                    tableRow: function (e, t, n, r) {
                      let i = u([a(e, n, r)]);
                      return i.slice(0, i.indexOf("\n"));
                    },
                    tableCell: o,
                    inlineCode: function (e, t, n) {
                      let r = eB(e, t, n);
                      return (
                        n.stack.includes("tableCell") &&
                          (r = r.replace(/\|/g, "\\$&")),
                        r
                      );
                    },
                  },
                };
                function o(e, t, n, r) {
                  let i = n.enter("tableCell"),
                    o = n.enter("phrasing"),
                    u = eL(e, n, { ...r, before: l, after: l });
                  return o(), i(), u;
                }
                function u(e, t) {
                  return (0, e_.x)(e, {
                    align: t,
                    alignDelimiters: r,
                    padding: n,
                    stringLength: i,
                  });
                }
                function a(e, t, n) {
                  let r = e.children,
                    i = -1,
                    l = [],
                    u = t.enter("tableRow");
                  for (; ++i < r.length; ) l[i] = o(r[i], e, t, n);
                  return u(), l;
                }
              })(e),
              e$,
            ],
          });
      }
    },
  },
]);
