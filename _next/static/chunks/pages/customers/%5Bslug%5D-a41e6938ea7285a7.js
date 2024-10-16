(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7646, 7042],
  {
    69471: function (e, t, s) {
      "use strict";
      s.d(t, {
        R: function () {
          return c;
        },
      });
      var n = {};
      s.r(n),
        s.d(n, {
          MDXContext: function () {
            return r.pC;
          },
          MDXProvider: function () {
            return r.Zo;
          },
          useMDXComponents: function () {
            return r.ah;
          },
          withMDXComponents: function () {
            return r.NF;
          },
        });
      var l = s(2784),
        a = s(4423),
        r = s(29154);
      function c({
        compiledSource: e,
        frontmatter: t,
        scope: s,
        components: c = {},
        lazy: i,
      }) {
        let [o, d] = (0, l.useState)(!i || "undefined" == typeof window);
        (0, l.useEffect)(() => {
          if (i) {
            let e = window.requestIdleCallback(() => {
              d(!0);
            });
            return () => window.cancelIdleCallback(e);
          }
        }, []);
        let u = (0, l.useMemo)(() => {
          let l = Object.assign(
              { opts: { ...n, ...a.jsxRuntime } },
              { frontmatter: t },
              s
            ),
            r = Object.keys(l),
            c = Object.values(l),
            i = Reflect.construct(Function, r.concat(`${e}`));
          return i.apply(i, c).default;
        }, [s, e]);
        if (!o)
          return l.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let x = l.createElement(
          r.Zo,
          { components: c },
          l.createElement(u, null)
        );
        return i ? l.createElement("div", null, x) : x;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          }));
    },
    26318: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/customers/[slug]",
        function () {
          return s(68009);
        },
      ]);
    },
    57042: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(52322),
        l = s(39097),
        a = s.n(l),
        r = s(44382),
        c = s(29982);
      t.default = (e) => {
        let { darkerBg: t, className: s } = e;
        return (0, n.jsxs)("div", {
          className: (0, r.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            s
          ),
          children: [
            (0, n.jsx)("div", {
              className: "col-span-12",
              children: (0, n.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, n.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, n.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, n.jsx)(c.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, n.jsx)(a(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, n.jsx)(c.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, n.jsx)(a(), {
                    href: "/contact/sales",
                    children: "Request a demoss",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    68009: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return j;
          },
        });
      var n = s(52322),
        l = s(28079),
        a = s(25648),
        r = s(59582),
        c = s(69471),
        i = s(55351),
        o = s(96577),
        d = s.n(o),
        u = s(39097),
        x = s.n(u),
        m = s(29982),
        p = s(57042),
        h = s(27478),
        f = s(23642),
        g = s(33880),
        j = !0;
      t.default = function (e) {
        let {
            about: t,
            company_url: s,
            content: o,
            date: u,
            description: j,
            logo: b,
            meta_description: v,
            meta_title: N,
            misc: w,
            name: k,
            slug: y,
            title: _,
          } = e.blog,
          C = encodeURI(
            ""
              .concat(
                "https://obuldanrptloktxcffvn.supabase.co",
                "/functions/v1/og-images?site=customers&customer="
              )
              .concat(y, "&title=")
              .concat(null != N ? N : _)
          ),
          E = {
            title: null != N ? N : "".concat(k, " | Supabase Customer Storiesw"),
            description: null != v ? v : j,
            image:
              null != C
                ? C
                : "".concat(f.yp, "/images/customers/og/customer-stories.jpg"),
            url: "".concat(f.yp, "/customers/").concat(y),
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.PB, {
              title: E.title,
              openGraph: {
                title: E.title,
                description: E.description,
                url: E.url,
                type: "article",
                article: { publishedTime: u },
                images: [
                  { url: E.image, alt: "".concat(E.title, " thumbnail") },
                ],
              },
            }),
            (0, n.jsxs)(h.default, {
              children: [
                (0, n.jsx)("div", {
                  className:
                    " container mx-auto p-8 sm:py-16 sm:px-16 xl:px-20 ",
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-12 gap-4",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "hidden xl:block col-span-12 mb-2 xl:col-span-2",
                        children: (0, n.jsxs)(x(), {
                          href: "/customers",
                          className:
                            "text-foreground-lighter hover:text-foreground flex cursor-pointer items-center text-sm transition",
                          children: [
                            (0, n.jsx)(l.Z, { style: { padding: 0 } }),
                            "Back",
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "col-span-12 lg:col-span-8",
                        children: (0, n.jsx)("div", {
                          children: (0, n.jsxs)("article", {
                            className: "flex flex-col gap-8",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col gap-4 sm:gap-8 max-w-xxl",
                                children: [
                                  (0, n.jsx)(x(), {
                                    href: "/customers",
                                    className:
                                      "text-brand hover:text-brand-600 sm:mb-2 mt-0",
                                    children: "Customer Stories",
                                  }),
                                  (0, n.jsx)("h1", {
                                    className:
                                      "text-foreground text-4xl font-semibold xl:text-5xl",
                                    children: _,
                                  }),
                                  (0, n.jsx)("h2", {
                                    className:
                                      "text-foreground text-xl xl:text-2xl",
                                    children: j,
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "grid grid-cols-12 prose max-w-none gap-8 lg:gap-20",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "col-span-12 lg:col-span-4 lg:block xl:col-span-4",
                                    children: (0, n.jsxs)("div", {
                                      className:
                                        "space-y-8 lg:sticky lg:top-24 lg:mb-24",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "relative h-16 w-32 lg:mt-5",
                                          children: (0, n.jsx)(d(), {
                                            fill: !0,
                                            src: b,
                                            alt: "".concat(_, " logo"),
                                            priority: !0,
                                            placeholder: "blur",
                                            blurDataURL: "/images/blur.png",
                                            draggable: !1,
                                            className:
                                              " bg-no-repeat object-left object-contain m-0  [[data-theme*=dark]_&]:brightness-200 [[data-theme*=dark]_&]:contrast-0 [[data-theme*=dark]_&]:filter ",
                                          }),
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: "flex flex-col space-y-2",
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-foreground-lighter",
                                              children: "About",
                                            }),
                                            (0, n.jsx)("p", { children: t }),
                                            s &&
                                              (0, n.jsx)("span", {
                                                className: "not-prose ",
                                                children: (0, n.jsxs)("a", {
                                                  href: s,
                                                  className:
                                                    "flex cursor-pointer items-center space-x-1 transition-opacity text-foreground-lightround-ligtext-foreground-light:text-foreground-light",
                                                  target: "_blank",
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      children: s,
                                                    }),
                                                    (0, n.jsx)(a.Z, {
                                                      size: 14,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          ],
                                        }),
                                        null == w
                                          ? void 0
                                          : w.map((e) =>
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "flex flex-col gap-0",
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    className:
                                                      "text-foreground-lighter",
                                                    children: e.label,
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className:
                                                      "text-foreground-light",
                                                    children: e.text,
                                                  }),
                                                ],
                                              })
                                            ),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("p", {
                                              children: "Ready to get started?",
                                            }),
                                            (0, n.jsx)("div", {
                                              children: (0, n.jsx)(m.z, {
                                                asChild: !0,
                                                type: "default",
                                                iconRight: (0, n.jsx)(r.Z, {}),
                                                children: (0, n.jsx)(x(), {
                                                  href: "https://supabase.com/contact/enterprise",
                                                  className: "no-underline",
                                                  children: "Contact sales",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "xm:col-span-7 col-span-12 lg:col-span-8 xl:col-span-8 ",
                                    children: (0, n.jsx)(c.R, {
                                      ...o,
                                      components: (0, g.Z)(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(p.default, {}),
              ],
            }),
          ],
        });
      };
    },
    28079: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, s(55132).Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    25648: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, s(55132).Z)("ExternalLink", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    4423: function (e, t, s) {
      e.exports.jsxRuntime = s(52322);
    },
  },
  function (e) {
    e.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 26318));
      }
    ),
      (_N_E = e.O());
  },
]);
