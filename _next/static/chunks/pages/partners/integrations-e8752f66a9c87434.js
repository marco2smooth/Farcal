(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5907],
  {
    25870: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/partners/integrations",
        function () {
          return t(54705);
        },
      ]);
    },
    85302: function (e, r, t) {
      "use strict";
      var n = t(52322),
        s = t(39097),
        a = t.n(s);
      t(2784),
        (r.Z = (e) => {
          let {
              href: r,
              title: t,
              description: s,
              icon: i,
              color: l = "amber",
            } = e,
            c = (0, n.jsx)("div", {
              className:
                " hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ",
              children: (0, n.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, n.jsx)("div", {
                    className: "".concat(
                      {
                        amber: "bg-amber-300 text-amber-900",
                        blue: "bg-blue-300 text-blue-900",
                        brand: "bg-brand-300 text-brand",
                      }[l],
                      "\n            flex h-8 w-8\n            items-center justify-center rounded-md\n            transition-all\n            group-hover:scale-110\n            "
                    ),
                    children: i,
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("h5", {
                        className: "text-foreground mb-2 text-base",
                        children: t,
                      }),
                      (0, n.jsx)("p", { className: "p text-sm", children: s }),
                    ],
                  }),
                ],
              }),
            });
          return (0, n.jsx)(a(), { href: r, children: c });
        });
    },
    5272: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return c;
        },
      });
      var n = t(52322),
        s = t(96577),
        a = t.n(s),
        i = t(39097),
        l = t.n(i);
      function c(e) {
        let { partners: r, hideCategories: t = !1 } = e,
          s = {};
        r.forEach((e) => {
          var r;
          return (s[e.category] = [
            ...(null !== (r = s[e.category]) && void 0 !== r ? r : []),
            e,
          ]);
        });
        let i = r.filter((e) => e.featured);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i.length > 0
              ? (0, n.jsxs)(
                  "div",
                  {
                    id: "featured",
                    className: "space-y-8 ".concat(
                      t ? "pb-8 border-b mb-8" : ""
                    ),
                    children: [
                      (0, n.jsx)("h2", {
                        className: "h2",
                        children: "Featured",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3",
                        children:
                          null == i
                            ? void 0
                            : i.map((e) =>
                                (0, n.jsx)(
                                  l(),
                                  {
                                    href: "/partners/".concat(e.slug),
                                    children: (0, n.jsx)("div", {
                                      className:
                                        " bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg",
                                      children: (0, n.jsxs)("div", {
                                        className: "flex w-full space-x-6",
                                        children: [
                                          (0, n.jsx)("div", {
                                            className:
                                              "relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110",
                                            children: (0, n.jsx)(a(), {
                                              layout: "fill",
                                              objectFit: "cover",
                                              className: "bg-surface-100",
                                              src: e.logo,
                                              alt: e.title,
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("h3", {
                                                className:
                                                  "text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors",
                                                children: e.title,
                                              }),
                                              (0, n.jsx)("p", {
                                                className:
                                                  "text-foreground-lighter text-sm line-clamp-4 min-h-[80px]",
                                                title: e.description,
                                                children: e.description,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  e.slug
                                )
                              ),
                      }),
                    ],
                  },
                  "featured"
                )
              : null,
            Object.keys(s).map((e) =>
              (0, n.jsxs)(
                "div",
                {
                  id: e.toLowerCase(),
                  className: "space-y-8",
                  children: [
                    !t && (0, n.jsx)("h2", { className: "h2", children: e }),
                    (0, n.jsx)("div", {
                      className:
                        "grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3",
                      children: s[e].map((e) =>
                        (0, n.jsx)(
                          l(),
                          {
                            href: "/partners/".concat(e.slug),
                            children: (0, n.jsx)("div", {
                              className:
                                " bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg",
                              children: (0, n.jsxs)("div", {
                                className: "flex w-full space-x-6",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110",
                                    children: (0, n.jsx)(a(), {
                                      layout: "fill",
                                      objectFit: "cover",
                                      className: "bg-surface-100",
                                      src: e.logo,
                                      alt: e.title,
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className:
                                          "text-light group-hover:text-foreground mb-2 text-xl transition-colors",
                                        children: e.title,
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-foreground-lighter text-sm line-clamp-4 min-h-[80px]",
                                        title: e.description,
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          },
                          e.slug
                        )
                      ),
                    }),
                  ],
                },
                e
              )
            ),
          ],
        });
      }
    },
    72298: function (e, r, t) {
      "use strict";
      let n = (0, t(79617).eI)(
        "https://obuldanrptloktxcffvn.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MTQ2ODUsImV4cCI6MjAzNDE5MDY4NX0.NFt49g6DFkc1X5khCzN5p01iAVo2TMxlx88cY1V0E2M"
      );
      r.Z = n;
    },
    54705: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return y;
          },
        });
      var n = t(52322),
        s = t(17644);
      let a = (0, t(55132).Z)("Loader", [
        ["path", { d: "M12 2v4", key: "3427ic" }],
        ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
        ["path", { d: "M18 12h4", key: "wj9ykh" }],
        ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
        ["path", { d: "M12 18v4", key: "jadmvz" }],
        ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
        ["path", { d: "M2 12h4", key: "j09sii" }],
        ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
      ]);
      var i = t(55351),
        l = t(5632),
        c = t(2784),
        o = t(94878);
      function u(e) {
        return "function" == typeof e
          ? function () {
              return e;
            }
          : e;
      }
      var d = t(27478),
        h = t(37637),
        p = t(29982),
        x = t(39097),
        f = t.n(x);
      function m() {
        return (0, n.jsx)("div", {
          className: "border-t",
          children: (0, n.jsxs)("div", {
            id: "become-a-partner",
            className: "mx-auto max-w-2xl space-y-12 py-32 px-6 text-center",
            children: [
              (0, n.jsx)("h2", {
                className: "h2",
                children: "Ready to work together?",
              }),
              (0, n.jsx)(p.z, {
                asChild: !0,
                size: "medium",
                className: "text-white",
                children: (0, n.jsx)(f(), {
                  href: "https://forms.supabase.com/partner",
                  as: "https://forms.supabase.com/partner",
                  children: "Become a partner",
                }),
              }),
            ],
          }),
        });
      }
      var g = t(85302),
        v = t(72298),
        j = t(5272),
        b = !0,
        y = function (e) {
          var r, t, p, x, f, b, y, N, w, k, C;
          let Z = null !== (r = e.partners) && void 0 !== r ? r : [],
            [z, _] = (0, c.useState)(Z),
            E = Array.from(
              new Set(null == Z ? void 0 : Z.map((e) => e.category))
            ),
            I = (0, l.useRouter)(),
            M = "Find an Integration",
            S = "Use your favorite tools with Supabase.",
            [F, T] = (0, c.useState)(""),
            [L] =
              ((y = ((x = (p = (0, c.useState)(u(F)))[0]),
              (f = p[1]),
              (b = [
                x,
                (0, c.useCallback)(function (e) {
                  return f(u(e));
                }, []),
              ]))[0]),
              (N = b[1]),
              (w = (function (e, r, t) {
                var n = this,
                  s = (0, c.useRef)(null),
                  a = (0, c.useRef)(0),
                  i = (0, c.useRef)(null),
                  l = (0, c.useRef)([]),
                  o = (0, c.useRef)(),
                  u = (0, c.useRef)(),
                  d = (0, c.useRef)(e),
                  h = (0, c.useRef)(!0);
                d.current = e;
                var p = !r && 0 !== r && "undefined" != typeof window;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                r = +r || 0;
                var x = !!(t = t || {}).leading,
                  f = !("trailing" in t) || !!t.trailing,
                  m = "maxWait" in t,
                  g = m ? Math.max(+t.maxWait || 0, r) : null;
                return (
                  (0, c.useEffect)(function () {
                    return (
                      (h.current = !0),
                      function () {
                        h.current = !1;
                      }
                    );
                  }, []),
                  (0, c.useMemo)(
                    function () {
                      var e = function (e) {
                          var r = l.current,
                            t = o.current;
                          return (
                            (l.current = o.current = null),
                            (a.current = e),
                            (u.current = d.current.apply(t, r))
                          );
                        },
                        t = function (e, r) {
                          p && cancelAnimationFrame(i.current),
                            (i.current = p
                              ? requestAnimationFrame(e)
                              : setTimeout(e, r));
                        },
                        c = function (e) {
                          if (!h.current) return !1;
                          var t = e - s.current,
                            n = e - a.current;
                          return !s.current || t >= r || t < 0 || (m && n >= g);
                        },
                        v = function (r) {
                          return ((i.current = null), f && l.current)
                            ? e(r)
                            : ((l.current = o.current = null), u.current);
                        },
                        j = function () {
                          var e = Date.now();
                          if (c(e)) return v(e);
                          if (h.current) {
                            var n = e - s.current,
                              i = e - a.current,
                              l = r - n;
                            t(j, m ? Math.min(l, g - i) : l);
                          }
                        },
                        b = function () {
                          for (var d = [], p = 0; p < arguments.length; p++)
                            d[p] = arguments[p];
                          var f = Date.now(),
                            g = c(f);
                          if (
                            ((l.current = d),
                            (o.current = n),
                            (s.current = f),
                            g)
                          ) {
                            if (!i.current && h.current)
                              return (
                                (a.current = s.current),
                                t(j, r),
                                x ? e(s.current) : u.current
                              );
                            if (m) return t(j, r), e(s.current);
                          }
                          return i.current || t(j, r), u.current;
                        };
                      return (
                        (b.cancel = function () {
                          i.current &&
                            (p
                              ? cancelAnimationFrame(i.current)
                              : clearTimeout(i.current)),
                            (a.current = 0),
                            (l.current =
                              s.current =
                              o.current =
                              i.current =
                                null);
                        }),
                        (b.isPending = function () {
                          return !!i.current;
                        }),
                        (b.flush = function () {
                          return i.current ? v(Date.now()) : u.current;
                        }),
                        b
                      );
                    },
                    [x, m, r, g, f, p]
                  )
                );
              })(
                (0, c.useCallback)(
                  function (e) {
                    return N(e);
                  },
                  [N]
                ),
                300,
                t
              )),
              (C = (k = (0, c.useRef)(F)).current),
              C === F || (w(F), (k.current = F)),
              [y, w]),
            [R, A] = (0, c.useState)(!1);
          return (
            (0, c.useEffect)(() => {
              let e = async () => {
                A(!0);
                let e = v.Z.from("partners")
                  .select("*")
                  .eq("approved", !0)
                  .order("category")
                  .order("title");
                F.trim() &&
                  (e = e.textSearch("tsv", "".concat(F.trim()), {
                    type: "websearch",
                    config: "english",
                  }));
                let { data: r } = await e;
                return r;
              };
              if ("" === F.trim()) {
                A(!1), _(Z);
                return;
              }
              e().then((e) => {
                e && _(e), A(!1);
              });
            }, [L, I]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(i.PB, {
                  title: M,
                  description: S,
                  openGraph: {
                    title: M,
                    description: S,
                    url: "https://supabase.com/partners/integrations",
                    images: [
                      {
                        url: "https://supabase.com".concat(
                          I.basePath,
                          "/images/og/integrations.png"
                        ),
                      },
                    ],
                  },
                }),
                (0, n.jsxs)(d.default, {
                  className: "bg-alternative",
                  children: [
                    (0, n.jsxs)(h.default, {
                      className: "space-y-16",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("h1", { className: "h1", children: M }),
                            (0, n.jsx)("p", {
                              className: "text-foreground-lighter text-xl",
                              children: S,
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16",
                          children: [
                            (0, n.jsx)("div", {
                              className: "lg:col-span-4 xl:col-span-3",
                              children: (0, n.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                  (0, n.jsx)(o.Z, {
                                    size: "small",
                                    icon: (0, n.jsx)(s.Z, {}),
                                    placeholder: "Search...",
                                    type: "text",
                                    value: F,
                                    onChange: (e) => T(e.target.value),
                                    actions:
                                      R &&
                                      (0, n.jsx)("span", {
                                        className:
                                          "mr-1 animate-spin text-white",
                                        children: (0, n.jsx)(a, {}),
                                      }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "hidden lg:block",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "text-foreground-lighter mb-2 text-sm",
                                        children: "Categories",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "space-y-1",
                                        children: E.map((e) =>
                                          (0, n.jsx)(
                                            "button",
                                            {
                                              onClick: () =>
                                                I.push(
                                                  "#".concat(e.toLowerCase())
                                                ),
                                              className:
                                                "text-foreground-light block text-base",
                                              children: e,
                                            },
                                            e
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "text-foreground-lighter mb-2 text-sm",
                                        children: "Explore more",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "grid grid-cols-2 gap-8 lg:grid-cols-1",
                                        children: [
                                          (0, n.jsx)(g.Z, {
                                            title: "Experts",
                                            color: "blue",
                                            description:
                                              "Explore our certified Supabase agency experts that build with Supabase",
                                            href: "/partners/experts",
                                            icon: (0, n.jsx)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              className: "h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: "1",
                                              children: (0, n.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                              }),
                                            }),
                                          }),
                                          (0, n.jsx)(g.Z, {
                                            href: "/partners/integrations#become-a-partner",
                                            title: "Become a partner",
                                            color: "brand",
                                            description:
                                              "Fill out a quick 30 second form to apply to become a partner",
                                            icon: (0, n.jsx)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              className: "h-5 w-5",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: "1",
                                              children: (0, n.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "lg:col-span-8 xl:col-span-9",
                              children: (0, n.jsx)("div", {
                                className: "grid space-y-10",
                                children: (null == z ? void 0 : z.length)
                                  ? (0, n.jsx)(j.Z, { partners: z })
                                  : (0, n.jsx)("p", {
                                      className: "h2",
                                      children: "No Partners Found",
                                    }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(m, {}),
                  ],
                }),
              ],
            })
          );
        };
    },
    43246: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return n;
        },
      });
      let n = (0, t(55132).Z)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    15481: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return n;
        },
      });
      let n = (0, t(55132).Z)("Copy", [
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
    17644: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return n;
        },
      });
      let n = (0, t(55132).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    94878: function (e, r, t) {
      "use strict";
      var n = t(52322),
        s = t(2784),
        a = t(27638),
        i = t(53322),
        l = t(66056),
        c = t(27510),
        o = t(1903),
        u = t(44382),
        d = t(29982),
        h = t(62365),
        p = t(15481);
      function x(e) {
        let {
            autoComplete: r,
            autoFocus: t,
            className: x,
            inputClassName: f,
            iconContainerClassName: m,
            copy: g,
            defaultValue: v,
            descriptionText: j,
            disabled: b,
            error: y,
            icon: N,
            id: w = "",
            name: k = "",
            inputRef: C,
            label: Z,
            afterLabel: z,
            beforeLabel: _,
            labelOptional: E,
            layout: I,
            onChange: M,
            onBlur: S,
            onCopy: F,
            placeholder: T,
            type: L = "text",
            value: R,
            style: A,
            reveal: O = !1,
            actions: B,
            size: V = "medium",
            borderless: q = !1,
            validation: D,
            ...J
          } = e,
          [W, X] = (0, s.useState)("Copy"),
          [G, P] = (0, s.useState)(!0),
          Y = (0, o.Z)("input"),
          {
            formContextOnChange: H,
            values: U,
            errors: Q,
            handleBlur: K,
            touched: $,
            fieldLevelValidation: ee,
          } = (0, h.G)();
        U && !R && (R = U[w || k]),
          y || (Q && !y && (y = Q[w || k]), (y = $ && $[w] ? y : void 0)),
          (0, s.useEffect)(() => {
            D && ee(w, D(R));
          }, []);
        let er = ["peer/input", Y.base];
        return (
          y && er.push(Y.variants.error),
          y || er.push(Y.variants.standard),
          V && er.push(Y.size[V]),
          N && er.push(Y.with_icon),
          b && er.push(Y.disabled),
          f && er.push(f),
          (0, n.jsx)(a.l, {
            label: Z,
            afterLabel: z,
            beforeLabel: _,
            labelOptional: E,
            layout: I,
            id: w,
            error: y,
            descriptionText: j,
            style: A,
            size: V,
            className: x,
            children: (0, n.jsxs)("div", {
              className: Y.container,
              children: [
                (0, n.jsx)("input", {
                  "data-size": V,
                  autoComplete: r,
                  autoFocus: t,
                  defaultValue: v,
                  disabled: b,
                  id: w,
                  name: k,
                  onChange: function (e) {
                    M && M(e), H && H(e), D && ee(w, D(e.target.value));
                  },
                  onBlur: function (e) {
                    K &&
                      setTimeout(() => {
                        K(e);
                      }, 100),
                      S && S(e);
                  },
                  onCopy: F,
                  placeholder: T,
                  ref: C,
                  type: L,
                  value: O && G ? c.aA : R,
                  className: (0, u.cn)(er),
                  ...J,
                }),
                N && (0, n.jsx)(l.Z, { size: V, icon: N, className: m }),
                g || y || B
                  ? (0, n.jsxs)("div", {
                      className: Y.actions_container,
                      children: [
                        y && (0, n.jsx)(i.Z, { size: V }),
                        g && !(O && G)
                          ? (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              icon: (0, n.jsx)(p.Z, {}),
                              onClick: () => {
                                var e, r;
                                return (
                                  (e = R),
                                  void (
                                    null ===
                                      (r = navigator.clipboard.writeText(e)) ||
                                    void 0 === r ||
                                    r.then(
                                      function () {
                                        X("Copied"),
                                          setTimeout(function () {
                                            X("Copy");
                                          }, 3e3),
                                          null == F || F();
                                      },
                                      function () {
                                        X("Failed to copy");
                                      }
                                    )
                                  )
                                );
                              },
                              children: W,
                            })
                          : null,
                        O && G
                          ? (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              onClick: function () {
                                P(!1);
                              },
                              children: "Reveal",
                            })
                          : null,
                        B && B,
                      ],
                    })
                  : null,
              ],
            }),
          })
        );
      }
      (x.TextArea = function (e) {
        let {
            className: r,
            textAreaClassName: t,
            descriptionText: l,
            disabled: c,
            error: u,
            icon: x,
            id: f = "",
            name: m = "",
            label: g,
            afterLabel: v,
            beforeLabel: j,
            labelOptional: b,
            layout: y,
            onChange: N,
            onBlur: w,
            placeholder: k,
            value: C,
            style: Z,
            rows: z = 4,
            limit: _,
            size: E,
            borderless: I = !1,
            validation: M,
            copy: S = !1,
            onCopy: F,
            actions: T,
            ...L
          } = e,
          [R, A] = (0, s.useState)(0),
          [O, B] = (0, s.useState)("Copy"),
          {
            formContextOnChange: V,
            values: q,
            errors: D,
            handleBlur: J,
            touched: W,
            fieldLevelValidation: X,
          } = (0, h.G)();
        q && !C && (C = q[f || m]),
          u || (D && !u && (u = D[f || m]), (u = W && W[f || m] ? u : void 0)),
          (0, s.useEffect)(() => {
            M && X(f, M(C));
          }, []);
        let G = (0, o.Z)("input"),
          P = [G.base];
        return (
          u && P.push(G.variants.error),
          u || P.push(G.variants.standard),
          x && P.push(G.with_icon),
          E && P.push(G.size[E]),
          c && P.push(G.disabled),
          t && P.push(t),
          (0, n.jsx)(a.l, {
            className: r,
            label: g,
            afterLabel: v,
            beforeLabel: j,
            labelOptional: b,
            layout: y,
            id: f,
            error: u,
            descriptionText: l,
            style: Z,
            size: E,
            children: (0, n.jsxs)("div", {
              className: G.container,
              children: [
                (0, n.jsx)("textarea", {
                  disabled: c,
                  id: f,
                  name: m,
                  rows: z,
                  cols: 100,
                  placeholder: k,
                  onChange: function (e) {
                    A(e.target.value.length),
                      N && N(e),
                      V && V(e),
                      M && X(f, M(e.target.value));
                  },
                  onBlur: function (e) {
                    J &&
                      setTimeout(() => {
                        J(e);
                      }, 100),
                      w && w(e);
                  },
                  onCopy: F,
                  value: C,
                  className: P.join(" "),
                  maxLength: _,
                  ...L,
                }),
                S || u || T
                  ? (0, n.jsx)("div", {
                      className: G.textarea_actions_container,
                      children: (0, n.jsxs)("div", {
                        className: G.textarea_actions_container_items,
                        children: [
                          u && (0, n.jsx)(i.Z, { size: E }),
                          S &&
                            (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              onClick: () =>
                                (function (e) {
                                  navigator.clipboard.writeText(e).then(
                                    function () {
                                      B("Copied"),
                                        setTimeout(function () {
                                          B("Copy");
                                        }, 3e3),
                                        null == F || F();
                                    },
                                    function () {
                                      B("Failed to copy");
                                    }
                                  );
                                })(C),
                              icon: (0, n.jsx)(p.Z, {}),
                              children: O,
                            }),
                          T && T,
                        ],
                      }),
                    })
                  : null,
              ],
            }),
          })
        );
      }),
        (r.Z = x);
    },
    53322: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return l;
        },
      });
      var n = t(52322);
      t(2784);
      var s = t(1903),
        a = t(43246);
      let i = { tiny: 14, small: 16, medium: 20, large: 24, xlarge: 32 };
      function l(e) {
        let { style: r, size: t = "medium" } = e,
          l = (0, s.Z)("inputErrorIcon");
        return (0, n.jsx)("div", {
          className: l.base,
          style: r,
          children: (0, n.jsx)(a.Z, { size: i[t], strokeWidth: 2 }),
        });
      }
    },
    66056: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var n = t(52322);
      t(2784);
      var s = t(1903),
        a = t(44382);
      function i(e) {
        let { icon: r, className: t, size: i } = e,
          l = (0, s.Z)("inputIconContainer");
        return (0, n.jsx)("div", {
          className: (0, a.cn)(l.base, l.size[i], t),
          children: r,
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 25870));
      }
    ),
      (_N_E = e.O());
  },
]);
