(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [771],
  {
    25915: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/partners/experts",
        function () {
          return r(21827);
        },
      ]);
    },
    85302: function (e, s, r) {
      "use strict";
      var l = r(52322),
        a = r(39097),
        t = r.n(a);
      r(2784),
        (s.Z = (e) => {
          let {
              href: s,
              title: r,
              description: a,
              icon: n,
              color: i = "amber",
            } = e,
            c = (0, l.jsx)("div", {
              className:
                " hover:border-foreground-lighter bg-surface-100 group cursor-pointer rounded  border px-5 py-4  ",
              children: (0, l.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, l.jsx)("div", {
                    className: "".concat(
                      {
                        amber: "bg-amber-300 text-amber-900",
                        blue: "bg-blue-300 text-blue-900",
                        brand: "bg-brand-300 text-brand",
                      }[i],
                      "\n            flex h-8 w-8\n            items-center justify-center rounded-md\n            transition-all\n            group-hover:scale-110\n            "
                    ),
                    children: n,
                  }),
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("h5", {
                        className: "text-foreground mb-2 text-base",
                        children: r,
                      }),
                      (0, l.jsx)("p", { className: "p text-sm", children: a }),
                    ],
                  }),
                ],
              }),
            });
          return (0, l.jsx)(t(), { href: s, children: c });
        });
    },
    5272: function (e, s, r) {
      "use strict";
      r.d(s, {
        Z: function () {
          return c;
        },
      });
      var l = r(52322),
        a = r(96577),
        t = r.n(a),
        n = r(39097),
        i = r.n(n);
      function c(e) {
        let { partners: s, hideCategories: r = !1 } = e,
          a = {};
        s.forEach((e) => {
          var s;
          return (a[e.category] = [
            ...(null !== (s = a[e.category]) && void 0 !== s ? s : []),
            e,
          ]);
        });
        let n = s.filter((e) => e.featured);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            n.length > 0
              ? (0, l.jsxs)(
                  "div",
                  {
                    id: "featured",
                    className: "space-y-8 ".concat(
                      r ? "pb-8 border-b mb-8" : ""
                    ),
                    children: [
                      (0, l.jsx)("h2", {
                        className: "h2",
                        children: "Featured",
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3",
                        children:
                          null == n
                            ? void 0
                            : n.map((e) =>
                                (0, l.jsx)(
                                  i(),
                                  {
                                    href: "/partners/".concat(e.slug),
                                    children: (0, l.jsx)("div", {
                                      className:
                                        " bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg",
                                      children: (0, l.jsxs)("div", {
                                        className: "flex w-full space-x-6",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className:
                                              "relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110",
                                            children: (0, l.jsx)(t(), {
                                              layout: "fill",
                                              objectFit: "cover",
                                              className: "bg-surface-100",
                                              src: e.logo,
                                              alt: e.title,
                                            }),
                                          }),
                                          (0, l.jsxs)("div", {
                                            children: [
                                              (0, l.jsx)("h3", {
                                                className:
                                                  "text-foreground-light group-hover:text-foreground mb-2 text-xl transition-colors",
                                                children: e.title,
                                              }),
                                              (0, l.jsx)("p", {
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
            Object.keys(a).map((e) =>
              (0, l.jsxs)(
                "div",
                {
                  id: e.toLowerCase(),
                  className: "space-y-8",
                  children: [
                    !r && (0, l.jsx)("h2", { className: "h2", children: e }),
                    (0, l.jsx)("div", {
                      className:
                        "grid  grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3",
                      children: a[e].map((e) =>
                        (0, l.jsx)(
                          i(),
                          {
                            href: "/partners/".concat(e.slug),
                            children: (0, l.jsx)("div", {
                              className:
                                " bg-surface-100 hover:bg-surface-200 group flex h-full w-full flex-col rounded-xl border px-6 py-6 shadow transition-all hover:shadow-lg",
                              children: (0, l.jsxs)("div", {
                                className: "flex w-full space-x-6",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "relative h-[40px] min-w-[40px] w-[40px] rounded-full overflow-hidden scale-100 transition-all group-hover:scale-110",
                                    children: (0, l.jsx)(t(), {
                                      layout: "fill",
                                      objectFit: "cover",
                                      className: "bg-surface-100",
                                      src: e.logo,
                                      alt: e.title,
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("h3", {
                                        className:
                                          "text-light group-hover:text-foreground mb-2 text-xl transition-colors",
                                        children: e.title,
                                      }),
                                      (0, l.jsx)("p", {
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
    21827: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          __N_SSG: function () {
            return d;
          },
        });
      var l = r(52322),
        a = r(55351),
        t = r(5632),
        n = r(27478),
        i = r(37637),
        c = r(85302),
        o = r(5272),
        d = !0;
      s.default = function (e) {
        var s;
        let r = null !== (s = e.partners) && void 0 !== s ? s : [],
          d = (0, t.useRouter)(),
          x = "Find an expert",
          h = "Find an expert to help build your next idea.";
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(a.PB, {
              title: x,
              description: h,
              openGraph: {
                title: x,
                description: h,
                url: "https://supabase.com/partners/experts",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      d.basePath,
                      "/images/product/database/database-og.jpg"
                    ),
                  },
                ],
              },
            }),
            (0, l.jsx)(n.default, {
              className: "bg-alternative",
              children: (0, l.jsxs)(i.default, {
                className: "space-y-12",
                children: [
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("h1", { className: "h1", children: x }),
                      (0, l.jsx)("p", {
                        className: "text-foreground-lighter text-xl",
                        children: h,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16",
                    children: [
                      (0, l.jsx)("div", {
                        className: "lg:col-span-4 xl:col-span-3",
                        children: (0, l.jsx)("div", {
                          className: "space-y-6",
                          children: (0, l.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, l.jsx)("div", {
                                className: "text-foreground-light mb-2 text-sm",
                                children: "Explore more",
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "grid grid-cols-2 gap-4 lg:grid-cols-1",
                                children: (0, l.jsx)(c.Z, {
                                  title: "Integrations",
                                  color: "blue",
                                  description:
                                    "Extend and automate your workflow by using integrations for your favorite tools.",
                                  href: "/partners/integrations",
                                  icon: (0, l.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "1",
                                    children: (0, l.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "lg:col-span-8 xl:col-span-9",
                        children: [
                          (0, l.jsx)("div", {
                            className: "pb-8 mb-8 border-b",
                            children: (0, l.jsx)("p", {
                              className:
                                "text-foreground-lighter text-sm bg-surface-100 w-full rounded border p-4 shadow",
                              children:
                                "We are no longer accepting applications for new experts at the moment.",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "grid",
                            children: r.length
                              ? (0, l.jsx)(o.Z, {
                                  partners: r,
                                  hideCategories: !0,
                                })
                              : (0, l.jsx)("p", {
                                  className: "h2",
                                  children: "No Partners Found",
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 25915));
      }
    ),
      (_N_E = e.O());
  },
]);
