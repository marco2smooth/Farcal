(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6525],
  {
    18895: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/customers",
        function () {
          return t(66890);
        },
      ]);
    },
    66890: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return N;
          },
          default: function () {
            return w;
          },
        });
      var a = t(52322),
        i = t(5632),
        r = t(97729),
        n = t.n(r),
        l = t(55351),
        o = t(27478),
        c = t(5126),
        d = t(90459),
        m = t.n(d),
        u = t(39097),
        x = t.n(u),
        g = t(22965),
        p = t(96577),
        h = t.n(p);
      t(2784);
      var f = t(44382);
      let j = (e) => {
        let {
            title: s,
            icon: t,
            children: i,
            header: r,
            background: n = !0,
            logo: l,
            logoInverse: o,
            hasLightIcon: c,
            showLink: d = !1,
            showIconBg: m = !1,
            className: u,
          } = e,
          { resolvedTheme: x } = (0, g.F)(),
          p = o && (null == x ? void 0 : x.includes("dark")),
          j = !p && l,
          v = (e) =>
            (0, a.jsx)("div", {
              className: (0, f.cn)(
                "shrink-0",
                m
                  ? "bg-surface-75 border w-8 h-8 flex items-center justify-center rounded"
                  : ""
              ),
              children: e.children,
            }),
          b = (e) => {
            let { logoImage: t, className: i } = e;
            return (0, a.jsx)("div", {
              className: "relative box-content p-8 pb-0",
              children: (0, a.jsx)("div", {
                className: "relative h-[33px] w-auto max-w-[145px]",
                children: (0, a.jsx)(h(), {
                  src: t,
                  alt: s,
                  fill: !0,
                  sizes: "100%",
                  className: (0, f.cn)("object-contain object-left", i),
                }),
              }),
            });
          };
        return (0, a.jsxs)("div", {
          className: (0, f.cn)(
            "relative",
            "h-full",
            "group",
            "cursor-pointer",
            "overflow-hidden",
            "border rounded-lg",
            "text-left",
            n
              ? "hover:border-strong bg-surface-75"
              : "border-muted hover:border-default bg-transparent",
            "transition",
            u
          ),
          children: [
            p && (0, a.jsx)(b, { logoImage: o, className: "opacity-50" }),
            j && (0, a.jsx)(b, { logoImage: l, className: "opacity-75" }),
            r &&
              (0, a.jsx)("img", {
                src: "".concat(r),
                className:
                  "transition-all left-0 -top-64 w-full duration-700 ease-out ",
              }),
            (0, a.jsxs)("div", {
              className: (0, f.cn)(
                "px-8 pb-8 relative",
                "flex flex-col h-full",
                t ? "gap-6" : "gap-2",
                r ? "" : "pt-8"
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t && "string" == typeof t
                      ? (0, a.jsx)(v, {
                          children: (0, a.jsx)("img", {
                            className: "w-5",
                            alt: s,
                            src: ""
                              .concat(t)
                              .concat(
                                !c || (null == x ? void 0 : x.includes("dark"))
                                  ? ""
                                  : "-light",
                                ".svg"
                              ),
                          }),
                        })
                      : t && (0, a.jsx)(v, { children: t }),
                    (0, a.jsx)("p", {
                      className: "text-base text-foreground",
                      children: s,
                    }),
                  ],
                }),
                i &&
                  (0, a.jsx)("span", {
                    className: "text-sm text-foreground-light flex-grow",
                    children: i,
                  }),
                d &&
                  (0, a.jsx)("span", {
                    className: "text-brand justify-end text-sm",
                    children: "Learn more",
                  }),
              ],
            }),
          ],
        });
      };
      var v = t(45411),
        b = t(30175),
        N = !0,
        w = function (e) {
          var s;
          let { basePath: t } = (0, i.useRouter)(),
            r = (0, b.Gc)(768),
            d = {
              title: "Customer Stories | Supabase",
              image: "".concat(t, "/images/customers/og/customer-stories.jpg"),
              description:
                "See how Supabase empowers companies of all sizes to accelerate their growth and streamline their work.",
            },
            u =
              null === (s = e.blogs) || void 0 === s
                ? void 0
                : s.map((e, s) => ({
                    logo: e.logo,
                    logoInverse: e.logo_inverse,
                    title: e.title,
                    link: e.url,
                  }));
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(n(), {
                children: [
                  (0, a.jsx)("title", { children: d.title }),
                  (0, a.jsx)("meta", {
                    name: "description",
                    content: d.description,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image",
                    content: d.image,
                  }),
                  (0, a.jsx)("meta", {
                    name: "twitter:image",
                    content: d.image,
                  }),
                  (0, a.jsx)("link", {
                    rel: "alternate",
                    type: "application/rss+xml",
                    title: "RSS feed for customer storiess",
                    href: "".concat(t, "/customers-rss.xml"),
                  }),
                ],
              }),
              (0, a.jsx)(l.PB, {
                title: d.title,
                description: d.description,
                openGraph: {
                  title: d.title,
                  description: d.description,
                  url: "".concat(t, "/customers"),
                  images: [{ url: d.image }],
                },
              }),
              (0, a.jsx)(o.default, {
                children: (0, a.jsx)("div", {
                  className: "relative z-0 bg-background overflow-hidden",
                  children: (0, a.jsxs)("div", {
                    className: "container mx-auto mt-28 sm:mt-44 px-4 xl:px-20",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "mx-auto relative z-10",
                        children: [
                          (0, a.jsxs)(c.E.div, {
                            className:
                              "mx-auto sm:max-w-2xl text-center flex flex-col items-center",
                            initial: { opacity: 0, y: 10 },
                            animate: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, easing: "easeOut" },
                            },
                            children: [
                              (0, a.jsx)(v.Z, {
                                size: r ? "tiny" : "small",
                                className: "mb-4 lg:mb-8 -mt-4",
                              }),
                              (0, a.jsx)("h1", {
                                className: "text-foreground mb-3 text-3xl",
                                children: "Customer stories",
                              }),
                              (0, a.jsx)("h2", {
                                className:
                                  "text-foreground-light text-base sm:text-xl",
                                children:
                                  "Discover case studies on how Supabase is being used around the world to quickly create outstanding products and set new industry standards.",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mx-auto my-12 md:my-20 grid grid-cols-12 gap-6 not-prose",
                            children: u.map((e, s) =>
                              (0, a.jsx)(
                                x(),
                                {
                                  href: "".concat(e.link),
                                  passHref: !0,
                                  legacyBehavior: !0,
                                  children: (0, a.jsx)(c.E.a, {
                                    className: "col-span-12 md:col-span-4",
                                    initial: { opacity: 0, y: 20 },
                                    animate: {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                        duration: 0.4,
                                        ease: [0.24, 0.25, 0.05, 1],
                                        delay: 0.2 + s / 15,
                                      },
                                    },
                                    children: (0, a.jsx)(j, {
                                      ...e,
                                      background: !0,
                                      showIconBg: !0,
                                      showLink: !0,
                                      hasLightIcon: !0,
                                      children: e.description,
                                    }),
                                  }),
                                },
                                e.title
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: [
                          "absolute inset-0 h-[150px] sm:h-[300px] bg-background z-0 after:!bg-background",
                          m()["bg-visual"],
                        ].join(" "),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
    90459: function (e) {
      e.exports = {
        "bg-visual": "customers_bg-visual__lMx6l",
        fadeIn: "customers_fadeIn__vxUyU",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 18895));
      }
    ),
      (_N_E = e.O());
  },
]);
