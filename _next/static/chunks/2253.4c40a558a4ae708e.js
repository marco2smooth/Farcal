"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2253],
  {
    75: function (e, l, t) {
      t.d(l, {
        I: function () {
          return n;
        },
      });
      var r = t(18358);
      function n(e, l, t) {
        var n;
        if ("string" == typeof e) {
          let a = document;
          l &&
            ((0, r.k)(!!l.current, "Scope provided, but no element detected."),
            (a = l.current)),
            t
              ? ((null !== (n = t[e]) && void 0 !== n) ||
                  (t[e] = a.querySelectorAll(e)),
                (e = t[e]))
              : (e = a.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    97804: function (e, l, t) {
      t.d(l, {
        Y: function () {
          return i;
        },
      });
      var r = t(2784),
        n = t(75);
      let a = { some: 0, all: 1 };
      function i(e, { root: l, margin: t, amount: i, once: o = !1 } = {}) {
        let [s, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (o && s)) return;
            let r = { root: (l && l.current) || void 0, margin: t, amount: i };
            return (function (
              e,
              l,
              { root: t, margin: r, amount: i = "some" } = {}
            ) {
              let o = (0, n.I)(e),
                s = new WeakMap(),
                d = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let t = s.get(e.target);
                      if (!!t !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let t = l(e);
                          "function" == typeof t
                            ? s.set(e.target, t)
                            : d.unobserve(e.target);
                        } else t && (t(e), s.delete(e.target));
                      }
                    });
                  },
                  {
                    root: t,
                    rootMargin: r,
                    threshold: "number" == typeof i ? i : a[i],
                  }
                );
              return o.forEach((e) => d.observe(e)), () => d.disconnect();
            })(e.current, () => (d(!0), o ? void 0 : () => d(!1)), r);
          }, [l, e, t, o, i]),
          s
        );
      }
    },
    2253: function (e, l, t) {
      t.r(l),
        t.d(l, {
          default: function () {
            return g;
          },
        });
      var r = t(52322),
        n = t(2784),
        a = t(37637),
        i = t(39097),
        o = t.n(i),
        s = t(22965),
        d = t(15159),
        u = t(97804),
        c = t(45781),
        f = t(5126),
        x = t(83940),
        v = t(44382),
        p = (e) => {
          let { children: l, className: t, contentClassName: n } = e;
          return (0, r.jsxs)("div", {
            className: (0, v.cn)(
              "relative rounded-2xl shadow-lg p-2 pt-0 w-full h-full bg-alternative-200 border flex flex-col",
              t
            ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "w-full px-2 py-3 relative flex items-center gap-1.5 lg:gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "w-2 h-2 bg-border rounded-full",
                  }),
                  (0, r.jsx)("div", {
                    className: "w-2 h-2 bg-border rounded-full",
                  }),
                  (0, r.jsx)("div", {
                    className: "w-2 h-2 bg-border rounded-full",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: (0, v.cn)("h-full w-full rounded-lg", n),
                children: l,
              }),
            ],
          });
        };
      let h = (e) => {
        let { label: l, isActive: t, onClick: n } = e;
        return (0, r.jsx)("button", {
          onClick: n,
          "aria-selected": t,
          role: "tab",
          children: (0, r.jsx)(x.C, {
            size: "large",
            className: (0, v.cn)(
              "py-1.5 px-3 lg:py-2 lg:px-8",
              "hover:border-foreground-lighter hover:text-foreground",
              "opacity-80",
              t ? "opacity-100 !border-foreground" : ""
            ),
            children: l,
          }),
        });
      };
      var m = (e) => {
          var l, t, a, i, x, v;
          let { resolvedTheme: m } = (0, s.F)(),
            [g, b] = (0, n.useState)(0),
            j = (0, n.useRef)(null),
            w = (0, u.Y)(j, { once: !0 }),
            y =
              null !==
                (x =
                  null === (l = e.tabs[g]) || void 0 === l
                    ? void 0
                    : l.panel) && void 0 !== x
                ? x
                : null,
            N =
              null !==
                (v =
                  null === (t = e.tabs[g]) || void 0 === t
                    ? void 0
                    : t.highlights) && void 0 !== v
                ? v
                : [null],
            k = (e) => {
              b(e);
            };
          return (0, r.jsxs)("div", {
            className: "relative flex flex-col gap-8 lg:gap-12 items-center",
            children: [
              (0, r.jsx)("div", {
                ref: j,
                className: "absolute -top-[500px] not-sr-only",
              }),
              (0, r.jsx)("div", {
                className:
                  "relative w-full col-span-full flex justify-center gap-2",
                role: "tablist",
                children: e.tabs.map((e, l) =>
                  (0, r.jsx)(
                    h,
                    { isActive: l === g, label: e.label, onClick: () => k(l) },
                    l
                  )
                ),
              }),
              (0, r.jsx)(c.M, {
                mode: "wait",
                children: (0, r.jsx)(
                  f.E.ul,
                  {
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: 0.1, delay: 0.2 },
                    },
                    exit: { opacity: 0, transition: { duration: 0.05 } },
                    className:
                      "position order-last lg:order-2 w-ful flex flex-wrap items-center gap-x-8 gap-y-4 lg:gap-8 justify-center text-center mx-auto z-30",
                    children:
                      null == N
                        ? void 0
                        : N.map((e) => {
                            var l;
                            return (0, r.jsx)(
                              "li",
                              {
                                children: (0, r.jsxs)(o(), {
                                  href:
                                    null !== (l = e.link) && void 0 !== l
                                      ? l
                                      : "#",
                                  className:
                                    "group cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap text-foreground-light hover:text-foreground transition-colors hover:underline",
                                  children: [
                                    (0, r.jsx)(d.Z, {
                                      className: "stroke-2 w-4",
                                    }),
                                    (0, r.jsx)("span", { children: e.label }),
                                  ],
                                }),
                              },
                              e.label
                            );
                          }),
                  },
                  null === (a = e.tabs[g]) || void 0 === a ? void 0 : a.label
                ),
              }),
              (0, r.jsx)(p, {
                className:
                  "overflow-hidden lg:order-last bg-default w-full max-w-6xl mx-auto",
                contentClassName:
                  "aspect-video border overflow-hidden rounded-lg",
                children:
                  w &&
                  (0, r.jsx)(c.M, {
                    mode: "wait",
                    children: (0, r.jsx)(
                      f.E.div,
                      {
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: { duration: 0.1, delay: 0.2 },
                        },
                        exit: { opacity: 0, transition: { duration: 0.05 } },
                        className: "relative w-full max-w-full h-full",
                        children: (0, r.jsx)(
                          y,
                          { isDark: null == m ? void 0 : m.includes("dark") },
                          null == m ? void 0 : m.includes("dark")
                        ),
                      },
                      null === (i = e.tabs[g]) || void 0 === i
                        ? void 0
                        : i.label
                    ),
                  }),
              }),
            ],
          });
        },
        g = (e) => {
          let { title: l, tabs: t } = e;
          return (0, r.jsxs)(a.default, {
            className: "text-center",
            id: "dashboard",
            children: [
              (0, r.jsx)("h3", {
                className:
                  "mb-8 text-2xl md:text-4xl max-w-[300px] sm:max-w-none mx-auto text-foreground-lighter",
                children: l,
              }),
              (0, r.jsx)(m, { tabs: t }),
            ],
          });
        };
    },
  },
]);
