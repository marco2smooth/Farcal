"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3880],
  {
    97939: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return q;
        },
      });
      var t = r(52322),
        l = r(16474),
        n = r(10963),
        i = r(15159),
        a = r(15481),
        o = r(22965),
        c = r(2784),
        d = r(72282),
        m = r.n(d),
        h = r(19469),
        u = r(27666),
        p = r(86497),
        g = r(83667),
        f = r(54299),
        v = r(14969),
        y = r(78894),
        j = r(44382),
        x = r(29982),
        b = {
          dark: {
            hljs: {
              display: "block",
              overflowX: "auto",
              padding: "0.5em",
              background: "#161616",
              color: "#ddd",
            },
            "hljs-tag": { color: "#569cd6" },
            "hljs-keyword": { color: "#569cd6", fontWeight: "normal" },
            "hljs-selector-tag": { color: "#569cd6", fontWeight: "normal" },
            "hljs-literal": { color: "#569cd6", fontWeight: "normal" },
            "hljs-strong": { color: "#569cd6" },
            "hljs-name": { color: "#569cd6" },
            "hljs-code": { color: "#66d9ef" },
            "hljs-class .hljs-title": { color: "gray" },
            "hljs-attribute": { color: "#bf79db" },
            "hljs-symbol": { color: "#bf79db" },
            "hljs-regexp": { color: "#bf79db" },
            "hljs-link": { color: "#bf79db" },
            "hljs-string": { color: "#3ECF8E" },
            "hljs-bullet": { color: "#3ECF8E" },
            "hljs-subst": { color: "#3ECF8E" },
            "hljs-title": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-section": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-emphasis": { color: "#3ECF8E" },
            "hljs-type": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-built_in": { color: "#3ECF8E" },
            "hljs-builtin-name": { color: "#3ECF8E" },
            "hljs-selector-attr": { color: "#3ECF8E" },
            "hljs-selector-pseudo": { color: "#3ECF8E" },
            "hljs-addition": { color: "#3ECF8E" },
            "hljs-variable": { color: "#3ECF8E" },
            "hljs-template-tag": { color: "#3ECF8E" },
            "hljs-template-variable": { color: "#3ECF8E" },
            "hljs-comment": { color: "#75715e" },
            "hljs-quote": { color: "#75715e" },
            "hljs-deletion": { color: "#75715e" },
            "hljs-meta": { color: "#75715e" },
            "hljs-doctag": { fontWeight: "normal" },
            "hljs-selector-id": { fontWeight: "normal" },
          },
          light: {
            hljs: {
              display: "block",
              overflowX: "auto",
              padding: "0.5em",
              background: "#f9f9f9",
              color: "#24292f",
            },
            "hljs-tag": { color: "#0550ae" },
            "hljs-keyword": { color: "#0550ae", fontWeight: "normal" },
            "hljs-selector-tag": { color: "#0550ae", fontWeight: "normal" },
            "hljs-literal": { color: "#0550ae", fontWeight: "normal" },
            "hljs-strong": { color: "#0550ae" },
            "hljs-name": { color: "#0550ae" },
            "hljs-code": { color: "#66d9ef" },
            "hljs-class .hljs-title": { color: "gray" },
            "hljs-attribute": { color: "#bf79db" },
            "hljs-symbol": { color: "#bf79db" },
            "hljs-regexp": { color: "#bf79db" },
            "hljs-link": { color: "#bf79db" },
            "hljs-string": { color: "#1B9657" },
            "hljs-bullet": { color: "#1B9657" },
            "hljs-subst": { color: "#1B9657" },
            "hljs-title": { color: "#1B9657", fontWeight: "normal" },
            "hljs-section": { color: "#1B9657", fontWeight: "normal" },
            "hljs-emphasis": { color: "#1B9657" },
            "hljs-type": { color: "#1B9657", fontWeight: "normal" },
            "hljs-built_in": { color: "#1B9657" },
            "hljs-builtin-name": { color: "#1B9657" },
            "hljs-selector-attr": { color: "#1B9657" },
            "hljs-selector-pseudo": { color: "#1B9657" },
            "hljs-addition": { color: "#1B9657" },
            "hljs-variable": { color: "#1B9657" },
            "hljs-template-tag": { color: "#1B9657" },
            "hljs-template-variable": { color: "#1B9657" },
            "hljs-comment": { color: "#75715e" },
            "hljs-quote": { color: "#75715e" },
            "hljs-deletion": { color: "#75715e" },
            "hljs-meta": { color: "#75715e" },
            "hljs-doctag": { fontWeight: "normal" },
            "hljs-selector-id": { fontWeight: "normal" },
          },
        },
        q = function (e) {
          let { resolvedTheme: s } = (0, o.F)(),
            r = null == s ? void 0 : s.includes("dark"),
            [d, q] = (0, c.useState)(!1),
            [w, k] = (0, c.useState)(!1),
            C = e.children ? e.children.split("\n")[0] : "",
            N = "";
          C.includes("filename =") && (N = C.split("=")[1]);
          let Z =
              e.children && N
                ? e.children.replace("".concat(C, "\n\n"), "")
                : e.children,
            E = () => {
              q(!0),
                setTimeout(() => {
                  q(!1);
                }, 1e3);
            },
            _ = e.lang
              ? e.lang
              : e.className
              ? e.className.replace("language-", "")
              : "js";
          return ("jsx" === _ && (_ = "js"),
          h.Z.registerLanguage("js", p.Z),
          h.Z.registerLanguage("py", f.Z),
          h.Z.registerLanguage("sql", v.Z),
          h.Z.registerLanguage("bash", u.Z),
          h.Z.registerLanguage("kotlin", g.Z),
          h.Z.registerLanguage("yaml", y.Z),
          (0, c.useEffect)(() => {
            k(!0);
          }, []),
          w)
            ? (0, t.jsxs)("div", {
                className: "not-prose dark overflow-hidden",
                children: [
                  N &&
                    (0, t.jsxs)("div", {
                      className:
                        " bg-background text-muted flex h-8 w-full items-center  gap-1 rounded-tr rounded-tl  border-t  border-r border-l px-4 font-sans ",
                      children: [
                        "bash" === _
                          ? (0, t.jsx)(l.Z, { size: 12, strokeWidth: 2 })
                          : (0, t.jsx)(n.Z, { size: 12, strokeWidth: 2 }),
                        (0, t.jsx)("span", {
                          className: "text-xs",
                          children: null != N ? N : "index.js",
                        }),
                      ],
                    }),
                  (0, t.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, t.jsx)(h.Z, {
                        language: _,
                        style: r ? b.dark : b.light,
                        className: (0, j.cn)(
                          "synthax-highlighter border border-default/15 rounded-lg",
                          !N && "rounded-t-lg",
                          "rounded-b-lg",
                          e.className
                        ),
                        customStyle: {
                          padding: e.showLineNumbers
                            ? "1rem 0.8rem"
                            : "1.25rem 1.5rem",
                          fontSize: "0.775rem",
                          lineHeight: 1.4,
                        },
                        showLineNumbers: e.showLineNumbers,
                        lineNumberStyle: {
                          padding: "0px",
                          marginRight: "21px",
                          minWidth: "1.5em",
                          opacity: "0.3",
                          fontSize: "0.75rem",
                        },
                        children: Z,
                      }),
                      !e.hideCopy && e.children
                        ? (0, t.jsx)("div", {
                            className: "absolute right-2 top-2",
                            children: (0, t.jsx)(m(), {
                              text: e.children,
                              children: (0, t.jsx)(x.z, {
                                type: "text",
                                icon: d
                                  ? (0, t.jsx)("span", {
                                      className: "text-brand",
                                      children: (0, t.jsx)(i.Z, {
                                        strokeWidth: 3,
                                      }),
                                    })
                                  : (0, t.jsx)(a.Z, {}),
                                onClick: () => E(),
                                "aria-label": "Copy",
                                className:
                                  "px-1.5 py-1.5 border border-transparent hover:border-strong",
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null;
        };
    },
    99678: function (e, s, r) {
      var t = r(52322),
        l = r(96577),
        n = r.n(l),
        i = r(39097),
        a = r.n(i),
        o = r(5126),
        c = r(44382);
      s.Z = (e) => {
        let {
            images: s,
            smCols: r = 3,
            mdCols: l = 6,
            lgCols: i = 8,
            padding: d = 8,
            className: m,
            animated: h = !1,
            removeFilter: u = !1,
            bg: p = !0,
          } = e,
          g = { 6: "h-6 ", 8: "h-8 ", 12: "h-12 " };
        return (0, t.jsx)("div", {
          className:
            "grid \n      gap-0.5 rounded-lg overflow-hidden\n      items-center\n    	"
              .concat(
                {
                  2: "grid-cols-2",
                  3: "grid-cols-3",
                  4: "grid-cols-4",
                  5: "grid-cols-5",
                  6: "grid-cols-6",
                  8: "grid-cols-8",
                }[r],
                "\n      "
              )
              .concat(
                {
                  2: "md:grid-cols-2",
                  3: "md:grid-cols-3",
                  4: "md:grid-cols-4",
                  5: "md:grid-cols-5",
                  6: "md:grid-cols-6",
                  8: "md:grid-cols-8",
                }[l],
                "\n      "
              )
              .concat(
                {
                  2: "lg:grid-cols-2",
                  3: "lg:grid-cols-3",
                  4: "lg:grid-cols-4",
                  5: "lg:grid-cols-5",
                  6: "lg:grid-cols-6",
                  8: "lg:grid-cols-8",
                }[i],
                "\n    "
              ),
          children: s.map((e, s) =>
            (0, t.jsx)(
              (s) => {
                let { children: r, link: l } = s;
                return e.link
                  ? (0, t.jsx)(a(), {
                      href: l,
                      children: (0, t.jsx)("div", {
                        className:
                          "scale-100 transform cursor-pointer duration-100 ease-in-out hover:shadow-sm",
                        children: r,
                      }),
                    })
                  : r;
              },
              {
                link: e.link,
                children: (0, t.jsx)(
                  (e) => {
                    let { children: r, ...l } = e;
                    return h
                      ? (0, t.jsx)(o.E.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: s / 10 },
                          },
                          ...l,
                          children: r,
                        })
                      : (0, t.jsx)("div", { ...l, children: r });
                  },
                  {
                    className: (0, c.cn)(
                      p && "bg-surface-200",
                      "w-full",
                      "col-span-1 flex items-center justify-center \n                  "
                        .concat(
                          e.link && "hover:bg-overlay-hover",
                          "\n                  p-8 "
                        )
                        .concat(m)
                    ),
                    children: (0, t.jsx)("div", {
                      className: "relative h-8 w-full overflow-auto ".concat(
                        g[d]
                      ),
                      children: (0, t.jsx)(n(), {
                        src: e.image,
                        alt: "".concat(e.name, " logo"),
                        fill: !0,
                        sizes: "100%",
                        className: (0, c.cn)(
                          "object-scale-down object-center bg-no-repeat",
                          !u && "contrast-0 filter opacity-50"
                        ),
                      }),
                    }),
                  },
                  "".concat(e.name, "-").concat(s)
                ),
              },
              s
            )
          ),
        });
      };
    },
    33880: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return er;
        },
      });
      var t = {};
      r.r(t),
        r.d(t, {
          avg_latency: function () {
            return I;
          },
          latency: function () {
            return P;
          },
          results: function () {
            return R;
          },
        });
      var l = r(52322),
        n = r(22569),
        i = r(99),
        a = r(80276),
        o = r(44382),
        c = r(39379);
      let d = c.fC,
        m = c.wy,
        h = c.Fw;
      var u = r(2784),
        p = r(57960);
      let g = function (e) {
          let { id: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (s) return s;
          if ("object" == typeof e) {
            if (Array.isArray(e)) {
              let s = e.find((e) => "string" == typeof e && f(e));
              return void 0 !== s
                ? v(s)
                : e
                    .map((e) =>
                      "string" != typeof e ? e.props.children : e.trim()
                    )
                    .map((e) => ("string" != typeof e ? e : y(e)))
                    .join("-")
                    .toLowerCase();
            }
            {
              let s = e.props.children;
              return "string" == typeof s ? y(s) : s;
            }
          }
          if ("string" == typeof e) return f(e) ? v(e) : y(e);
        },
        f = (e) => e.includes("[#") && e.includes("]"),
        v = (e) => e.slice(e.indexOf("[#") + 2, e.indexOf("]")),
        y = (e) =>
          e
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9- ]/g, "")
            .replace(/[ ]/g, "-"),
        j = (e) =>
          "object" == typeof e && Array.isArray(e)
            ? e.filter((e) => !("string" == typeof e && f(e)))
            : "string" == typeof e && e.indexOf("[#") > 0
            ? e.slice(0, e.indexOf("[#"))
            : e,
        x = (e) => {
          let s = document.querySelectorAll(".toc-menu a"),
            r = document.querySelector(".toc-menu .toc__menu-item--active");
          null == r || r.classList.remove("toc__menu-item--active"),
            s.forEach((s) => {
              s.href.split("#")[1] === e &&
                s.classList.add("toc__menu-item--active");
            });
        },
        b = () => {
          let e = document.querySelector(".toc-menu .toc__menu-item--active");
          null == e || e.classList.remove("toc__menu-item--active");
        },
        q = (0, u.forwardRef)((e, s) => {
          let { tag: r, customAnchor: t, children: n, ...i } = e,
            a = t || g(n, i),
            o = "#".concat(a),
            { ref: c } = (0, p.YD)({
              threshold: 1,
              rootMargin: "-20% 0% -35% 0px",
              onChange: (e, s) => {
                0 === window.scrollY && b(), e && x(s.target.id);
              },
            }),
            d = (0, u.useCallback)(
              (e) => {
                c(e), "function" == typeof s ? s(e) : s && (s.current = e);
              },
              [s, c]
            );
          return (0, l.jsxs)("".concat(r), {
            id: a,
            ref: d,
            className: "group scroll-mt-24",
            ...i,
            children: [
              j(n),
              a &&
                (0, l.jsx)("a", {
                  href: o,
                  "aria-hidden": "true",
                  className:
                    "ml-2 opacity-0 group-hover:opacity-100 transition",
                  children: (0, l.jsx)("span", {
                    "aria-hidden": "true",
                    children: "#",
                  }),
                }),
            ],
          });
        });
      q.displayName = "Heading";
      var w = r(83940),
        k = r(20194),
        C = r(70157),
        N = r(96577),
        Z = r.n(N);
      function E(e) {
        let { caption: s, img: r } = e;
        return (0, l.jsxs)("div", {
          className: "align-center m-0 flex h-8 items-center gap-3",
          children: [
            (0, l.jsx)(Z(), {
              src: "/images/blog/avatars/" + r,
              className: "h-8 w-8 rounded-full object-cover text-center m-0",
              alt: "".concat(s, " avatar"),
              width: 32,
              height: 32,
            }),
            (0, l.jsx)("figcaption", {
              style: { marginTop: 0 },
              className:
                "text-foreground-lighter font-normal not-italic not-prose",
              children: (0, l.jsx)("p", { children: s }),
            }),
          ],
        });
      }
      var _ = r(93419),
        B = r(88147),
        L = r(97433),
        F = r(3483),
        W = r(14799),
        z = r(84645),
        S = r(96141),
        A = r(28335);
      let P = [
          {
            query: "awakening",
            meilisearch: 3.63,
            opensearch: 9.84,
            pg: 1.93,
            "sqlite-disk": 0.3,
            "sqlite-mem": 0.24,
            typesense: 2.07,
          },
          {
            query: "comedy",
            meilisearch: 3.46,
            opensearch: 40.1,
            pg: 3.55,
            "sqlite-disk": 4.25,
            "sqlite-mem": 2.91,
            typesense: 3.14,
          },
          {
            query: "love",
            meilisearch: 12.4,
            opensearch: 139,
            pg: 15.3,
            "sqlite-disk": 27.7,
            "sqlite-mem": 13.4,
            typesense: 30.6,
          },
          {
            query: "romance",
            meilisearch: 3.05,
            opensearch: 23.9,
            pg: 2.14,
            "sqlite-disk": 1.97,
            "sqlite-mem": 1.43,
            typesense: 2.68,
          },
          {
            query: "spy",
            meilisearch: 3.57,
            opensearch: 14.1,
            pg: 1.78,
            "sqlite-disk": 0.92,
            "sqlite-mem": 0.64,
            typesense: 3.78,
          },
          {
            query: "superhero",
            meilisearch: 4.82,
            opensearch: 112,
            pg: 3.68,
            "sqlite-disk": 0.68,
            "sqlite-mem": 0.39,
            typesense: 3.99,
          },
          {
            query: "superhero",
            meilisearch: 4.39,
            opensearch: 12.6,
            pg: 1.59,
            "sqlite-disk": 0.52,
            "sqlite-mem": 0.24,
            typesense: 2.09,
          },
          {
            query: "superman",
            meilisearch: 3.45,
            opensearch: 11.4,
            pg: 1.24,
            "sqlite-disk": 0.36,
            "sqlite-mem": 0.19,
            typesense: 2.71,
          },
          {
            query: "suprman",
            meilisearch: 2.69,
            opensearch: 6.78,
            pg: 1,
            "sqlite-disk": 0.08,
            "sqlite-mem": 0.06,
            typesense: 2.83,
          },
          {
            query: "worldwar",
            meilisearch: 8.53,
            opensearch: 149,
            pg: 2.94,
            "sqlite-disk": 5.02,
            "sqlite-mem": 2.93,
            typesense: 3.26,
          },
        ],
        R = [
          {
            query: "awakening",
            meilisearch: 15,
            opensearch: 32,
            pg: 210,
            "sqlite-disk": 63,
            "sqlite-mem": 63,
            typesense: 14,
          },
          {
            query: "comedy",
            meilisearch: 67,
            opensearch: 756,
            pg: 1213,
            "sqlite-disk": 1220,
            "sqlite-mem": 1220,
            typesense: 55,
          },
          {
            query: "love",
            meilisearch: 812,
            opensearch: 3036,
            pg: 5417,
            "sqlite-disk": 4691,
            "sqlite-mem": 4691,
            typesense: 745,
          },
          {
            query: "romance",
            meilisearch: 35,
            opensearch: 383,
            pg: 630,
            "sqlite-disk": 554,
            "sqlite-mem": 554,
            typesense: 34,
          },
          {
            query: "spy",
            meilisearch: 47,
            opensearch: 168,
            pg: 349,
            "sqlite-disk": 241,
            "sqlite-mem": 241,
            typesense: 47,
          },
          {
            query: "superhero",
            meilisearch: 56,
            opensearch: 431,
            pg: 34,
            "sqlite-disk": 20,
            "sqlite-mem": 20,
            typesense: 8,
          },
          {
            query: "superhero",
            meilisearch: 14,
            opensearch: 45,
            pg: 86,
            "sqlite-disk": 67,
            "sqlite-mem": 67,
            typesense: 8,
          },
          {
            query: "superman",
            meilisearch: 41,
            opensearch: 25,
            pg: 47,
            "sqlite-disk": 47,
            "sqlite-mem": 47,
            typesense: 28,
          },
          {
            query: "suprman",
            meilisearch: 29,
            opensearch: 0,
            pg: 0,
            "sqlite-disk": 0,
            "sqlite-mem": 0,
            typesense: 28,
          },
          {
            query: "worldwar",
            meilisearch: 316,
            opensearch: 3805,
            pg: 834,
            "sqlite-disk": 781,
            "sqlite-mem": 781,
            typesense: 11,
          },
        ],
        I = [
          {
            query: "awakening",
            meilisearch: 0.24,
            opensearch: 0.31,
            pg: 0.01,
            "sqlite-disk": 0,
            "sqlite-mem": 0,
            typesense: 0.15,
          },
          {
            query: "comedy",
            meilisearch: 0.05,
            opensearch: 0.05,
            pg: 0,
            "sqlite-disk": 0,
            "sqlite-mem": 0,
            typesense: 0.06,
          },
          {
            query: "love",
            meilisearch: 0.02,
            opensearch: 0.05,
            pg: 0,
            "sqlite-disk": 0.01,
            "sqlite-mem": 0,
            typesense: 0.04,
          },
          {
            query: "romance",
            meilisearch: 0.09,
            opensearch: 0.06,
            pg: 0,
            "sqlite-disk": 0,
            "sqlite-mem": 0,
            typesense: 0.08,
          },
          {
            query: "spy",
            meilisearch: 0.08,
            opensearch: 0.08,
            pg: 0.01,
            "sqlite-disk": 0,
            "sqlite-mem": 0,
            typesense: 0.08,
          },
          {
            query: "superhero",
            meilisearch: 0.09,
            opensearch: 0.26,
            pg: 0.11,
            "sqlite-disk": 0.03,
            "sqlite-mem": 0.02,
            typesense: 0.5,
          },
          {
            query: "superhero",
            meilisearch: 0.31,
            opensearch: 0.28,
            pg: 0.02,
            "sqlite-disk": 0.01,
            "sqlite-mem": 0,
            typesense: 0.26,
          },
          {
            query: "superman",
            meilisearch: 0.08,
            opensearch: 0.45,
            pg: 0.03,
            "sqlite-disk": 0.01,
            "sqlite-mem": 0,
            typesense: 0.1,
          },
          {
            query: "suprman",
            meilisearch: 0.09,
            opensearch: void 0,
            pg: void 0,
            "sqlite-disk": void 0,
            "sqlite-mem": void 0,
            typesense: 0.1,
          },
          {
            query: "worldwar",
            meilisearch: 0.03,
            opensearch: 0.04,
            pg: 0,
            "sqlite-disk": 0.01,
            "sqlite-mem": 0,
            typesense: 0.3,
          },
        ];
      var M = r(64456);
      let V = {
          pg: "hsl(var(--brand-600))",
          meilisearch: "var(--colors-blue11)",
          typesense: "var(--colors-violet11)",
          "sqlite-disk": "var(--colors-orange11)",
          "sqlite-mem": "var(--colors-yellow11)",
          opensearch: "var(--colors-tomato11)",
        },
        D = [
          "pg",
          "meilisearch",
          "typesense",
          "sqlite-disk",
          "sqlite-mem",
          "opensearch",
        ],
        H = (e, s) => {
          let { color: r } = s;
          return (0, l.jsx)("span", {
            className: "text-sm -mt-32",
            style: { color: r },
            children: e,
          });
        },
        X = (e) => {
          let { x: s, y: r, stroke: t, payload: n } = e;
          return (0, l.jsx)("g", {
            transform: "translate(".concat(s, ",").concat(r, ")"),
            children: (0, l.jsx)("text", {
              x: 0,
              y: -12,
              dy: 16,
              textAnchor: "end",
              fill: "hsl(var(--foreground-lighter))",
              transform: "rotate(-35)",
              className: "text-xs",
              children: n.value,
            }),
          });
        };
      var G = () => {
          let [e, s] = (0, u.useState)("latency");
          return (0, l.jsxs)("div", {
            className: "my-16 flex flex-col",
            children: [
              (0, l.jsxs)(_.Z, {
                defaultActiveId: "latency",
                type: "underlined",
                size: "medium",
                block: !0,
                onChange: (e) => s(e),
                children: [
                  (0, l.jsx)(_.Z.Panel, { id: "latency", label: "Latency" }),
                  (0, l.jsx)(_.Z.Panel, {
                    id: "results",
                    label: "Number of results",
                  }),
                  (0, l.jsx)(_.Z.Panel, {
                    id: "avg_latency",
                    label: "Average latency",
                  }),
                  (0, l.jsx)(_.Z.Panel, { id: "raw_data", label: "Raw data" }),
                ],
              }),
              "raw_data" !== e
                ? (0, l.jsx)(L.h, {
                    height: 720,
                    minHeight: 720,
                    width: "100%",
                    children: (0, l.jsxs)(F.v, {
                      data: t[e],
                      layout: "vertical",
                      children: [
                        (0, l.jsx)(W.K, {
                          axisLine: { stroke: "hsl(var(--border-default))" },
                          tickLine: { stroke: "hsl(var(--border-default))" },
                          type: "number",
                          tickMargin: 8,
                          style: {
                            fontSize: "14px",
                            marginBottom: "32px",
                            color: "hsl(var(--foreground-default))",
                          },
                          tick: (0, l.jsx)(X, {}),
                          label: {
                            value:
                              "latency" === e
                                ? "Latency (ms)"
                                : "avg_latency" === e
                                ? "Avg latency per result (ms)"
                                : "Number of results",
                            position: "insideBottom",
                            offset: -32,
                            fill: "hsl(var(--foreground-default))",
                          },
                        }),
                        (0, l.jsx)(z.B, {
                          dataKey: "query",
                          type: "category",
                          style: {
                            fontSize: "14px",
                            marginBottom: "32px",
                            color: "hsl(var(--foreground-lighter))",
                          },
                          minTickGap: 16,
                          tickMargin: 8,
                          axisLine: { stroke: "hsl(var(--border-default))" },
                          tickLine: { stroke: "hsl(var(--border-default))" },
                          tick: (0, l.jsx)(X, {}),
                        }),
                        D.map((e, s) =>
                          (0, l.jsx)(S.$, { dataKey: "".concat(e), fill: V[e] })
                        ),
                        (0, l.jsx)(A.D, {
                          verticalAlign: "top",
                          height: 64,
                          className: "mt-16",
                          iconSize: 8,
                          formatter: H,
                        }),
                      ],
                    }),
                  })
                : (0, l.jsx)(B.D, {
                    remarkPlugins: [M.Z],
                    children:
                      '\n| engine        | query        | number of results | latency (ms) | avg result latency (ms) |\n|---------------|--------------|-------------------|--------------|-------------------------|\n| `pg`          | "super hero" | `34`              | `3.68`       | `0.108`                 |\n| `pg`          | "superhero"  | `86`              | `1.59`       | `0.0184`                |\n| `pg`          | "superman"   | `47`              | `1.24`       | `0.0264`                |\n| `pg`          | "suprman"    | `0`               | `0.999`      | `Infinity`              |\n| `pg`          | "love"       | `5417`            | `15.3`       | `0.00282`               |\n| `pg`          | "world war"  | `834`             | `2.94`       | `0.00352`               |\n| `pg`          | "spy"        | `349`             | `1.78`       | `0.00510`               |\n| `pg`          | "romance"    | `630`             | `2.14`       | `0.00339`               |\n| `pg`          | "comedy"     | `1213`            | `3.55`       | `0.00292`               |\n| `pg`          | "awakening"  | `210`             | `1.93`       | `0.00919`               |\n| `meilisearch` | "super hero" | `56`              | `4.82`       | `0.0861`                |\n| `meilisearch` | "superhero"  | `14`              | `4.39`       | `0.313`                 |\n| `meilisearch` | "superman"   | `41`              | `3.45`       | `0.0841`                |\n| `meilisearch` | "suprman"    | `29`              | `2.69`       | `0.0929`                |\n| `meilisearch` | "love"       | `812`             | `12.4`       | `0.0153`                |\n| `meilisearch` | "world war"  | `316`             | `8.53`       | `0.0270`                |\n| `meilisearch` | "spy"        | `47`              | `3.57`       | `0.0760`                |\n| `meilisearch` | "romance"    | `35`              | `3.05`       | `0.0871`                |\n| `meilisearch` | "comedy"     | `67`              | `3.46`       | `0.0516`                |\n| `meilisearch` | "awakening"  | `15`              | `3.63`       | `0.242`                 |\n| `typesense`   | "super hero" | `8`               | `3.99`       | `0.499`                 |\n| `typesense`   | "superhero"  | `8`               | `2.09`       | `0.261`                 |\n| `typesense`   | "superman"   | `28`              | `2.71`       | `0.0968`                |\n| `typesense`   | "suprman"    | `28`              | `2.83`       | `0.101`                 |\n| `typesense`   | "love"       | `745`             | `30.6`       | `0.0411`                |\n| `typesense`   | "world war"  | `11`              | `3.26`       | `0.296`                 |\n| `typesense`   | "spy"        | `47`              | `3.78`       | `0.0804`                |\n| `typesense`   | "romance"    | `34`              | `2.68`       | `0.0789`                |\n| `typesense`   | "comedy"     | `55`              | `3.14`       | `0.0571`                |\n| `typesense`   | "awakening"  | `14`              | `2.07`       | `0.148`                 |\n| `sqlite-disk` | "super hero" | `20`              | `0.682`      | `0.0341`                |\n| `sqlite-disk` | "superhero"  | `67`              | `0.524`      | `0.00782`               |\n| `sqlite-disk` | "superman"   | `47`              | `0.355`      | `0.00755`               |\n| `sqlite-disk` | "suprman"    | `0`               | `0.0806`     | `Infinity`              |\n| `sqlite-disk` | "love"       | `4691`            | `27.7`       | `0.00590`               |\n| `sqlite-disk` | "world war"  | `781`             | `5.02`       | `0.00642`               |\n| `sqlite-disk` | "spy"        | `241`             | `0.916`      | `0.00380`               |\n| `sqlite-disk` | "romance"    | `554`             | `1.97`       | `0.00355`               |\n| `sqlite-disk` | "comedy"     | `1220`            | `4.25`       | `0.00349`               |\n| `sqlite-disk` | "awakening"  | `63`              | `0.303`      | `0.00482`               |\n| `sqlite-mem`  | "super hero" | `20`              | `0.392`      | `0.0196`                |\n| `sqlite-mem`  | "superhero"  | `67`              | `0.237`      | `0.00354`               |\n| `sqlite-mem`  | "superman"   | `47`              | `0.193`      | `0.00410`               |\n| `sqlite-mem`  | "suprman"    | `0`               | `0.0568`     | `Infinity`              |\n| `sqlite-mem`  | "love"       | `4691`            | `13.4`       | `0.00286`               |\n| `sqlite-mem`  | "world war"  | `781`             | `2.93`       | `0.00376`               |\n| `sqlite-mem`  | "spy"        | `241`             | `0.644`      | `0.00267`               |\n| `sqlite-mem`  | "romance"    | `554`             | `1.43`       | `0.00258`               |\n| `sqlite-mem`  | "comedy"     | `1220`            | `2.91`       | `0.00239`               |\n| `sqlite-mem`  | "awakening"  | `63`              | `0.237`      | `0.00377`               |\n| `opensearch`  | "super hero" | `431`             | `112`        | `0.260`                 |\n| `opensearch`  | "superhero"  | `45`              | `12.6`       | `0.281`                 |\n| `opensearch`  | "superman"   | `25`              | `11.4`       | `0.454`                 |\n| `opensearch`  | "suprman"    | `0`               | `6.78`       | `Infinity`              |\n| `opensearch`  | "love"       | `3036`            | `139`        | `0.0457`                |\n| `opensearch`  | "world war"  | `3805`            | `149`        | `0.0393`                |\n| `opensearch`  | "spy"        | `168`             | `14.1`       | `0.0842`                |\n| `opensearch`  | "romance"    | `383`             | `23.9`       | `0.0625`                |\n| `opensearch`  | "comedy"     | `756`             | `40.1`       | `0.0531`                |\n| `opensearch`  | "awakening"  | `32`              | `9.84`       | `0.307`                 |',
                  }),
            ],
          });
        },
        K = r(97939),
        O = r(17618),
        T = r(58371),
        Y = (e) => {
          let {
              images: s,
              height: r = "default",
              delay: t = 3e3,
              autoplay: n = !1,
              altText: i = "Image",
              showNavigation: a = !1,
            } = e,
            [c, d] = (0, u.useState)(0),
            [m, h] = (0, u.useState)(n);
          return (
            (0, u.useEffect)(() => {
              if (m) {
                let e = setInterval(() => {
                  d((e) => (e + 1) % s.length);
                }, t);
                return () => clearInterval(e);
              }
            }, [s, m]),
            (0, l.jsxs)("div", {
              className: "relative ".concat(
                "default" === r ? "h-[300px]" : "h-[400px]",
                " my-6"
              ),
              children: [
                s.map((e, s) =>
                  (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(
                      Z(),
                      {
                        className: "absolute top-0 left-0",
                        src: e,
                        layout: "fill",
                        alt: i,
                        style: {
                          opacity: c === s ? 1 : 0,
                          transition: "opacity 1s ease-in-out",
                        },
                      },
                      s
                    ),
                  })
                ),
                (0, l.jsxs)("div", {
                  className: "absolute bottom-4 right-4 flex gap-3",
                  children: [
                    a &&
                      s.map((e, s) =>
                        (0, l.jsx)("button", {
                          className: "text-white",
                          onClick: () => {
                            h(!1), d(s);
                          },
                          children: (0, l.jsx)("div", {
                            className: (0, o.cn)(
                              "w-2 h-2 rounded-full bg-foreground-muted hover:bg-surface-100 transition-colors",
                              c === s && "bg-border-strong"
                            ),
                          }),
                        })
                      ),
                    (0, l.jsx)("button", {
                      onClick: () => h(!m),
                      className:
                        "text-white bg-foreground-light hover:bg-overlay rounded-full p-0.5 transition-colors",
                      children: m
                        ? (0, l.jsx)(O.Z, { size: 12 })
                        : (0, l.jsx)(T.Z, { size: 12 }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        J = r(99678),
        Q = (e) => {
          let { children: s } = e;
          if ("string" != typeof s) return s;
          let r = s.length < 70 ? "short-inline-codeblock" : "";
          return (0, l.jsx)("code", { className: r, children: s });
        };
      function $(e) {
        let { children: s, caption: r, img: t } = e;
        return (0, l.jsxs)("blockquote", {
          className: "text-foreground",
          children: [s, r && t && (0, l.jsx)(E, { caption: r, img: t })],
        });
      }
      let U = "ignore-on-export",
        ee = (e) =>
          (0, l.jsxs)("a", {
            href: e.href,
            target: e.target,
            className: (0, o.cn)(
              "inline relative [&_p]:inline",
              "_blank" === e.target && "mr-4"
            ),
            children: [
              e.children,
              " ",
              "_blank" === e.target &&
                (0, l.jsx)(i.Z, { className: "absolute -right-3.5 w-3 top-0" }),
            ],
          }),
        es = (e) => {
          let { title: s, ...r } = e;
          return (0, l.jsxs)(d, {
            children: [
              (0, l.jsxs)(m, {
                className:
                  " data-[state=open]:text hover:text-foreground-light flex items-center gap-3 [&>svg]:fill-current [&>svg]:rotate-90 [&>svg]:transition-transform [&>svg]:data-[state='open']:rotate-180 [&>svg]:data-[state='open']:text ",
                children: [
                  (0, l.jsx)(a.Z, { size: 10 }),
                  (0, l.jsx)("span", { children: s }),
                ],
              }),
              (0, l.jsx)(h, { ...r }),
            ],
          });
        };
      function er(e) {
        return {
          CodeBlock: K.Z,
          CH: n.CH,
          h1: (e) => (0, l.jsx)(q, { ...e, tag: "h1" }),
          h2: (e) => (0, l.jsx)(q, { ...e, tag: "h2" }),
          h3: (e) => (0, l.jsx)(q, { ...e, tag: "h3" }),
          h4: (e) => (0, l.jsx)(q, { ...e, tag: "h4" }),
          h5: (e) => (0, l.jsx)(q, { ...e, tag: "h5" }),
          h6: (e) => (0, l.jsx)(q, { ...e, tag: "h6" }),
          Badge: w.C,
          Quote: $,
          Avatar: E,
          PGChart: (e) => (0, l.jsx)(G, { ...e }),
          pre: (e) =>
            e.className !== U
              ? (0, l.jsx)(K.Z, { ...e.children.props })
              : (0, l.jsx)("code", { ...e }),
          ImageGrid: J.Z,
          ImageFadeStack: Y,
          img: (s) =>
            s.className !== U
              ? (0, l.jsx)(k.Z, {
                  fill: !0,
                  className: (0, o.cn)(
                    "m-0 object-cover",
                    "blog" === e ? "rounded-md border" : "",
                    s.wide && "wide",
                    s.className
                  ),
                  ...s,
                })
              : (0, l.jsx)("img", { ...s }),
          Img: (s) => {
            let { zoomable: r = !0, className: t, ...n } = s;
            return (0, l.jsx)(k.Z, {
              fill: !0,
              className: (0, o.cn)(
                "m-0 object-cover",
                "blog" === e ? "rounded-md border" : "",
                n.wide && "wide",
                t
              ),
              zoomable: r,
              ...n,
            });
          },
          Link: ee,
          code: (e) => (0, l.jsx)(Q, { children: e.children }),
          BlogCollapsible: (e) => (0, l.jsx)(es, { ...e }),
          Admonition: C.J,
        };
      }
    },
    70157: function (e, s, r) {
      r.d(s, {
        J: function () {
          return u;
        },
      });
      var t = r(52322),
        l = r(51795),
        n = r(2784),
        i = r(89577),
        a = r(44382);
      let o = {
          note: "default",
          tip: "default",
          caution: "warning",
          danger: "destructive",
          deprecation: "warning",
          default: "default",
          warning: "warning",
          destructive: "destructive",
        },
        c = () =>
          (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 21 20",
            className: "w-6 h-6",
            fill: "currentColor",
            children: (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0.625 9.8252C0.625 4.44043 4.99023 0.0751953 10.375 0.0751953C15.7598 0.0751953 20.125 4.44043 20.125 9.8252C20.125 15.21 15.7598 19.5752 10.375 19.5752C4.99023 19.5752 0.625 15.21 0.625 9.8252ZM9.3584 4.38135C9.45117 4.28857 9.55518 4.20996 9.66699 4.14648C9.88086 4.02539 10.1245 3.96045 10.375 3.96045C10.5845 3.96045 10.7896 4.00586 10.9766 4.09229C11.1294 4.1626 11.2705 4.26025 11.3916 4.38135C11.6611 4.65088 11.8125 5.0166 11.8125 5.39795C11.8125 5.5249 11.7959 5.6499 11.7637 5.77002C11.6987 6.01172 11.5718 6.23438 11.3916 6.41455C11.1221 6.68408 10.7563 6.83545 10.375 6.83545C9.99365 6.83545 9.62793 6.68408 9.3584 6.41455C9.08887 6.14502 8.9375 5.7793 8.9375 5.39795C8.9375 5.29492 8.94873 5.19287 8.97021 5.09375C9.02783 4.82568 9.16162 4.57812 9.3584 4.38135ZM10.375 15.6899C10.0933 15.6899 9.82275 15.5781 9.62354 15.3789C9.42432 15.1797 9.3125 14.9092 9.3125 14.6274V9.31494C9.3125 9.0332 9.42432 8.7627 9.62354 8.56348C9.82275 8.36426 10.0933 8.25244 10.375 8.25244C10.6567 8.25244 10.9272 8.36426 11.1265 8.56348C11.3257 8.7627 11.4375 9.0332 11.4375 9.31494V14.6274C11.4375 14.7944 11.3979 14.9575 11.3242 15.104C11.2739 15.2046 11.2075 15.2979 11.1265 15.3789C10.9272 15.5781 10.6567 15.6899 10.375 15.6899Z",
            }),
          }),
        d = () =>
          (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 22 20",
            className: "w-6 h-6",
            fill: "currentColor",
            children: (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.15137 1.95117C9.30615 -0.0488281 12.1943 -0.0488281 13.3481 1.95117L20.7031 14.6992C21.8574 16.6992 20.4131 19.1992 18.104 19.1992H3.39502C1.08594 19.1992 -0.356933 16.6992 0.797364 14.6992L8.15137 1.95117ZM11.7666 16.0083C11.4971 16.2778 11.1313 16.4292 10.75 16.4292C10.3687 16.4292 10.0029 16.2778 9.7334 16.0083C9.46387 15.7388 9.3125 15.373 9.3125 14.9917C9.3125 14.9307 9.31641 14.8706 9.32373 14.811C9.33545 14.7197 9.35547 14.6304 9.38379 14.5439L9.41406 14.4609C9.48584 14.2803 9.59375 14.1147 9.7334 13.9751C10.0029 13.7056 10.3687 13.5542 10.75 13.5542C11.1313 13.5542 11.4971 13.7056 11.7666 13.9751C12.0361 14.2446 12.1875 14.6104 12.1875 14.9917C12.1875 15.373 12.0361 15.7388 11.7666 16.0083ZM10.75 4.69971C11.0317 4.69971 11.3022 4.81152 11.5015 5.01074C11.7007 5.20996 11.8125 5.48047 11.8125 5.76221V11.0747C11.8125 11.3564 11.7007 11.627 11.5015 11.8262C11.3022 12.0254 11.0317 12.1372 10.75 12.1372C10.4683 12.1372 10.1978 12.0254 9.99854 11.8262C9.79932 11.627 9.6875 11.3564 9.6875 11.0747V5.76221C9.6875 5.48047 9.79932 5.20996 9.99854 5.01074C10.1978 4.81152 10.4683 4.69971 10.75 4.69971Z",
            }),
          }),
        m = (0, l.j)("", {
          variants: {
            type: {
              default:
                "[&>svg]:bg-foreground-muted [&>svg]:text-background-muted",
              warning: "[&>svg]:bg-warning [&>svg]:text-warning-100",
              destructive: "[&>svg]:bg-destructive [&>svg]:text-white",
            },
          },
        }),
        h = (0, l.j)("", {
          variants: {
            type: {
              default: "bg-surface-200/25 border border-default",
              warning:
                "bg-alternative border border-default ![&_p]:text-background-muted",
              destructive: "bg-alternative border border-default",
            },
          },
        }),
        u = (0, n.forwardRef)((e, s) => {
          var r, l, n, u, p, g, f, v;
          let {
              type: y = "note",
              variant: j,
              showIcon: x = !0,
              label: b,
              title: q,
              description: w,
              children: k,
              ...C
            } = e,
            N = j ? o[j] : o[y];
          return (0, t.jsxs)(i.bZ, {
            ref: s,
            variant: N,
            ...C,
            className: (0, a.cn)(
              "mb-2",
              m({ type: N }),
              h({ type: N }),
              C.className
            ),
            children: [
              (x && "warning" === N) || "destructive" === N
                ? (0, t.jsx)(d, {})
                : (0, t.jsx)(c, {}),
              b || q
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(i.Cd, {
                        ...(null === (r = C.childProps) || void 0 === r
                          ? void 0
                          : r.title),
                        className: (0, a.cn)(
                          "text mt-0.5 flex gap-3 text-sm [&_p]:mb-1.5 [&_p]:mt-0",
                          !b && "flex-col",
                          null === (n = C.childProps) || void 0 === n
                            ? void 0
                            : null === (l = n.title) || void 0 === l
                            ? void 0
                            : l.className
                        ),
                        children: b || q,
                      }),
                      w &&
                        (0, t.jsx)(i.X, {
                          className:
                            null === (p = C.childProps) || void 0 === p
                              ? void 0
                              : null === (u = p.description) || void 0 === u
                              ? void 0
                              : u.className,
                          children: w,
                        }),
                      k &&
                        (0, t.jsx)(i.X, {
                          ...(null === (g = C.childProps) || void 0 === g
                            ? void 0
                            : g.description),
                          className: (0, a.cn)(
                            "mt-3 [&_p]:mb-1.5 [&_p]:mt-0",
                            null === (v = C.childProps) || void 0 === v
                              ? void 0
                              : null === (f = v.description) || void 0 === f
                              ? void 0
                              : f.className
                          ),
                          children: k,
                        }),
                    ],
                  })
                : (0, t.jsx)("div", {
                    className:
                      "text mt [&_p]:mb-1.5 [&_p]:mt-0 mt-0.5 [&_p:last-child]:mb-0",
                    children: k,
                  }),
            ],
          });
        });
    },
    20194: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return u;
        },
      });
      var t = r(52322);
      r(96813);
      var l = r(2784),
        n = r(96577),
        i = r.n(n),
        a = r(22965),
        o = r(30175),
        c = r(44382),
        d = r(72170),
        m = (e) => {
          let { img: s } = e;
          return (0, t.jsx)("figure", {
            className: " [&_img]:rounded-md [&_img]:border [&_img]:bg-default ",
            children: s,
          });
        };
      let h = (e) => {
        switch (e) {
          case "left":
            return "text-left";
          case "right":
            return "text-right";
          default:
            return "text-center";
        }
      };
      var u = (e) => {
        let { src: s, alt: r = "", zoomable: n, ...u } = e,
          [p, g] = (0, l.useState)(!1),
          { resolvedTheme: f } = (0, a.F)(),
          v = (0, o.Gc)(),
          y = n ? d.Z : "span",
          j =
            "string" == typeof s
              ? s
              : (null == f ? void 0 : f.includes("dark"))
              ? s.dark
              : s.light;
        return ((0, l.useEffect)(() => {
          g(!0);
        }, []),
        p)
          ? (0, t.jsxs)("figure", {
              className: (0, c.cn)(
                "next-image--dynamic-fill",
                u.containerClassName
              ),
              children: [
                (0, t.jsx)(y, {
                  ...(n ? { ZoomContent: m, zoomMargin: v ? 20 : 80 } : void 0),
                  children: (0, t.jsx)(
                    i(),
                    {
                      alt: r,
                      src: j,
                      sizes: n
                        ? "(max-width: 768px) 200vw, (max-width: 1200px) 120vw, 200vw"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw",
                      className: u.className,
                      style: u.style,
                      ...u,
                    },
                    f
                  ),
                }),
                u.caption &&
                  (0, t.jsx)("figcaption", {
                    className: (0, c.cn)(h(u.captionAlign)),
                    children: u.caption,
                  }),
              ],
            })
          : null;
      };
    },
    93419: function (e, s, r) {
      var t = r(52322),
        l = r(71519),
        n = r(2784),
        i = r(1903);
      let a = (e) => {
        var s, r, a;
        let {
            defaultActiveId: o,
            activeId: c,
            type: d = "pills",
            size: m = "tiny",
            block: h,
            onChange: u,
            onClick: p,
            scrollable: g,
            wrappable: f,
            addOnBefore: v,
            addOnAfter: y,
            listClassNames: j,
            baseClassNames: x,
            refs: b,
            children: q,
          } = e,
          w = n.Children.toArray(q),
          [k, C] = (0, n.useState)(
            null !== (a = null != c ? c : o) && void 0 !== a
              ? a
              : null == w
              ? void 0
              : null === (r = w[0]) || void 0 === r
              ? void 0
              : null === (s = r.props) || void 0 === s
              ? void 0
              : s.id
          );
        (0, n.useMemo)(() => {
          c && c !== k && C(c);
        }, [c]);
        let N = (0, i.Z)("tabs");
        function Z(e) {
          null == p || p(e), e !== k && (null == u || u(e), C(e));
        }
        let E = [N[d].list];
        return (
          g && E.push(N.scrollable),
          f && E.push(N.wrappable),
          j && E.push(j),
          (0, t.jsxs)(l.fC, {
            value: k,
            className: [N.base, x].join(" "),
            ref: null == b ? void 0 : b.base,
            children: [
              (0, t.jsxs)(l.aV, {
                className: E.join(" "),
                ref: null == b ? void 0 : b.list,
                children: [
                  v,
                  w.map((e) => {
                    let s = k === e.props.id,
                      r = [N[d].base, N.size[m]];
                    return (
                      s ? r.push(N[d].active) : r.push(N[d].inactive),
                      h && r.push(N.block),
                      (0, t.jsxs)(
                        l.xz,
                        {
                          onKeyDown: (s) => {
                            "Enter" === s.key &&
                              (s.preventDefault(), Z(e.props.id));
                          },
                          onClick: () => Z(e.props.id),
                          value: e.props.id,
                          className: r.join(" "),
                          children: [
                            e.props.icon,
                            (0, t.jsx)("span", { children: e.props.label }),
                            e.props.iconRight,
                          ],
                        },
                        "".concat(e.props.id, "-tab-button")
                      )
                    );
                  }),
                  y,
                ],
              }),
              w,
            ],
          })
        );
      };
      (a.Panel = (e) => {
        let { children: s, id: r, className: n } = e,
          a = (0, i.Z)("tabs");
        return (0, t.jsx)(l.VY, {
          value: r,
          className: [a.content, n].join(" "),
          children: s,
        });
      }),
        (s.Z = a);
    },
    89577: function (e, s, r) {
      r.d(s, {
        Cd: function () {
          return c;
        },
        X: function () {
          return d;
        },
        bZ: function () {
          return o;
        },
      });
      var t = r(52322),
        l = r(51795),
        n = r(2784),
        i = r(44382);
      let a = (0, l.j)(
          (0, i.cn)(
            "relative w-full text-sm rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
            "[&>svg]:w-[23px] [&>svg]:h-[23px] [&>svg]:p-1 [&>svg]:flex [&>svg]:rounded"
          ),
          {
            variants: {
              variant: {
                default:
                  "text-foreground bg-alternative border [&>svg]:text-background [&>svg]:bg-foreground",
                destructive:
                  "text border-destructive-400 bg-destructive-200 [&>svg]:text-destructive-200 [&>svg]:bg-destructive-600",
                warning:
                  "border-warning-400 bg-warning-200 [&>svg]:text-warning-200 [&>svg]:bg-warning-600",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        o = n.forwardRef((e, s) => {
          let { className: r, variant: l, ...n } = e;
          return (0, t.jsx)("div", {
            ref: s,
            role: "alert",
            className: (0, i.cn)(a({ variant: l }), r),
            ...n,
          });
        });
      o.displayName = "Alert";
      let c = n.forwardRef((e, s) => {
        let { className: r, ...l } = e;
        return (0, t.jsx)("h5", {
          ref: s,
          className: (0, i.cn)("mb-1", r),
          ...l,
        });
      });
      c.displayName = "AlertTitle";
      let d = n.forwardRef((e, s) => {
        let { className: r, ...l } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, i.cn)(
            "text-sm [&_p]:leading-relaxed text-foreground-light font-normal",
            r
          ),
          ...l,
        });
      });
      d.displayName = "AlertDescription";
    },
  },
]);
