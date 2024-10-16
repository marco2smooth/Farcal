(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3195, 1815, 2084],
  {
    93228: function (e) {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function (e, a, s, n) {
        for (var o = -1, l = r(t((a - e) / (s || 1)), 0), i = Array(l); l--; )
          (i[n ? l : ++o] = e), (e += s);
        return i;
      };
    },
    82941: function (e, t, r) {
      var a = r(93228),
        s = r(82406),
        n = r(5707);
      e.exports = function (e) {
        return function (t, r, o) {
          return (
            o && "number" != typeof o && s(t, r, o) && (r = o = void 0),
            (t = n(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = n(r)),
            (o = void 0 === o ? (t < r ? 1 : -1) : n(o)),
            a(t, r, o, e)
          );
        };
      };
    },
    82406: function (e, t, r) {
      var a = r(41225),
        s = r(67878),
        n = r(39045),
        o = r(29259);
      e.exports = function (e, t, r) {
        if (!o(r)) return !1;
        var l = typeof t;
        return (
          ("number" == l
            ? !!(s(r) && n(t, r.length))
            : "string" == l && t in r) && a(r[t], e)
        );
      };
    },
    2689: function (e, t, r) {
      var a = r(82941)();
      e.exports = a;
    },
    5707: function (e, t, r) {
      var a = r(7642),
        s = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = a(e)) === s || e === -s
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
    },
    31561: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/partners",
        function () {
          return r(35901);
        },
      ]);
    },
    21221: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(52322);
      t.default = function (e) {
        let { icon: t, color: r } = e;
        return (0, a.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            r && "black" !== r
              ? ""
              : "bg-foreground text-background-alternative",
            r && "gray" === r ? "bg-border-strong text-foreground-light" : "",
            r && "green" === r ? "bg-brand text-brand-100" : "",
            r && "alt" === r ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, a.jsx)("svg", {
            className: [
              "h-5 w-5",
              r && "black" !== r ? "" : "stroke-background",
              r && "gray" === r ? "stroke-foreground-light" : "",
              r && "green" === r ? "stroke-brand-200" : "",
              r && "alt" === r ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, a.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: t,
            }),
          }),
        });
      };
    },
    21815: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return b;
          },
        });
      var a = r(52322),
        s = r(96577),
        n = r.n(s),
        o = r(39097),
        l = r.n(o),
        i = r(44382),
        c = r(29982),
        d = r(15241),
        p = r.n(d),
        u = r(2784),
        x = r(83940);
      let m = u.forwardRef(function (e, t) {
        return u.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          u.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 8l4 4m0 0l-4 4m4-4H3",
          })
        );
      });
      var h = (e) => {
          let {
            url: t,
            announcement: r,
            badge: s,
            target: n = "_self",
            className: o,
            hasArrow: c = !0,
          } = e;
          return (0, a.jsx)("div", {
            className: (0, i.cn)(
              "relative w-fit max-w-xl flex justify-center",
              o
            ),
            children: (0, a.jsxs)(l(), {
              href: t,
              target: n,
              className: (0, i.cn)(
                "\n          announcement-link\n          group/announcement\n          relative\n          flex flex-row\n          items-center\n          p-1 pr-3\n          text-sm\n          w-auto\n          gap-2\n          text-left\n          rounded-full\n          bg-opacity-20\n          border\n          border-background-surface-300\n          hover:border-foreground-muted\n          hover:border-opacity-30\n          shadow-md\n          overflow-hidden\n          focus-visible:outline-none focus-visible:ring-brand-600 focus-visible:ring-2 focus-visible:rounded-full\n          ",
                !s && "px-4"
              ),
              children: [
                s &&
                  (0, a.jsx)(x.C, {
                    variant: "brand",
                    size: "large",
                    className: "py-1 announcement-badge",
                    children: s,
                  }),
                (0, a.jsx)("span", {
                  className: "text-foreground announcement-text",
                  children: r,
                }),
                c &&
                  (0, a.jsx)(m, {
                    className:
                      "announcement-icon h-4 ml-2 -translate-x-1 text-foreground transition-transform group-hover/announcement:translate-x-0",
                  }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover/announcement:opacity-100 transition-opacity overflow-hidden rounded-full from-background-surface-100 to-background-surface-300 backdrop-blur-md ",
                }),
              ],
            }),
          });
        },
        g = r(21221),
        f = r(58371),
        b = (e) => {
          var t;
          return (0, a.jsx)("div", {
            className: (0, i.cn)(
              "container relative w-full mx-auto px-6 pt-2 pb-0 sm:px-16 xl:px-20",
              e.className
            ),
            children: (0, a.jsxs)("div", {
              className: "flex flex-col text-center items-center",
              children: [
                e.image && "string" == typeof e.image
                  ? (0, a.jsx)("div", {
                      className:
                        "relative w-full max-w-[630px] mx-auto z-0 aspect-[2.3/1] -mt-8 -mb-8 md:-mb-12 lg:-mb-12",
                      children: (0, a.jsx)(n(), {
                        src: e.image,
                        priority: !0,
                        layout: "fill",
                        objectFit: "contain",
                        objectPosition: "top",
                        alt: "",
                      }),
                    })
                  : (0, a.jsx)("div", {
                      className:
                        "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                      children: e.image,
                    }),
                (0, a.jsxs)("div", {
                  className:
                    "relative w-full z-10 flex flex-col items-center space-y-2 mx-auto max-w-2xl",
                  children: [
                    e.announcement &&
                      (0, a.jsx)(h, {
                        ...e.announcement,
                        className: "pb-4 md:pb-4 z-10",
                      }),
                    (0, a.jsx)("div", {
                      children:
                        e.icon || e.title
                          ? (0, a.jsxs)("div", {
                              className:
                                "mb-2 flex justify-center items-center gap-3",
                              children: [
                                e.icon &&
                                  (0, a.jsx)(g.default, { icon: e.icon }),
                                e.title &&
                                  (0, a.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-brand font-mono uppercase tracking-widest text-sm",
                                      children: e.title,
                                    },
                                    "product-name-".concat(e.title)
                                  ),
                              ],
                            })
                          : null,
                    }),
                    (0, a.jsxs)("div", {
                      className: (0, i.cn)(p()["appear-from-bottom"]),
                      children: [
                        (0, a.jsx)(
                          "h1",
                          {
                            className:
                              "h1 text-3xl md:text-4xl tracking-[-1.5px]",
                            children: e.h1,
                          },
                          "h1"
                        ),
                        (0, a.jsx)("p", {
                          className: "p !text-foreground-light",
                          children: e.subheader,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "w-full sm:w-auto flex flex-col items-stretch sm:flex-row pt-2 sm:items-center gap-2",
                      children: [
                        e.cta &&
                          (0, a.jsx)(c.z, {
                            size: "medium",
                            className: "text-white",
                            asChild: !0,
                            children: (0, a.jsx)(l(), {
                              href: e.cta.link,
                              as: e.cta.link,
                              children:
                                null !== (t = e.cta.label) && void 0 !== t
                                  ? t
                                  : "Start for free",
                            }),
                          }),
                        e.video &&
                          (0, a.jsx)(c.z, {
                            type: "default",
                            size: "medium",
                            icon: (0, a.jsx)(f.Z, {}),
                            asChild: !0,
                            children: (0, a.jsx)(l(), {
                              href: e.video,
                              as: e.video,
                              children: "Watch video",
                            }),
                          }),
                        e.secondaryCta &&
                          (0, a.jsx)(c.z, {
                            type: "default",
                            size: "medium",
                            asChild: !0,
                            children: (0, a.jsx)(l(), {
                              href: e.secondaryCta.link,
                              as: e.secondaryCta.link,
                              children: e.secondaryCta.label,
                            }),
                          }),
                      ],
                    }),
                    e.footer &&
                      (0, a.jsx)("div", {
                        className: "mb-4",
                        children: e.footer,
                      }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    35901: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return A;
          },
        });
      var a = r(52322),
        s = r(2689),
        n = r.n(s),
        o = r(55351),
        l = r(96577),
        i = r.n(l),
        c = r(39097),
        d = r.n(c),
        p = r(5632),
        u = r(30175),
        x = r(4880),
        m = r(83940),
        h = r(29982),
        g = r(27478),
        f = r(37637),
        b = r(93089),
        v = r(21815),
        j = r(55132);
      let w = (0, j.Z)("Compass", [
        [
          "path",
          {
            d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
            key: "9ktpf1",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
      var k = r(74714),
        y = r(14126);
      let N = (0, j.Z)("TrendingUp", [
        ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
        ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
      ]);
      var C = {
        metaTitle: "Partner with Supabase",
        metaDescription:
          "Become a Supabase Partner and enable new business opportunities.",
        heroSection: {
          title: "Partners",
          h1: (0, a.jsx)("span", {
            className: "heading-gradient",
            children: "Partner with Supabase",
          }),
          subheader: (0, a.jsxs)(a.Fragment, {
            children: [
              "Apply to the Partners program to list your integration ",
              (0, a.jsx)("br", { className: "hidden md:block" }),
              " in our marketplace and grow your business.",
            ],
          }),
          image: (0, a.jsx)("div", {
            className: "relative z-10 flex items-center justify-center mb-4",
            children: (0, a.jsx)("div", {
              className:
                "w-12 h-12 rounded-xl bg-brand border border-brand-900 flex items-center justify-center",
              style: {
                boxShadow:
                  "0 0 20px hsl(var(--brand-300)), 0 0 30px hsl(var(--brand-200))",
              },
              children: (0, a.jsx)("svg", {
                className: "text-background-alternative h-8 w-8 flex-shrink-0",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M12.0003 6.1488L10.5812 4.76334C8.68921 2.91613 5.62161 2.91613 3.72957 4.76334C1.98628 6.46532 1.84923 9.14165 3.31842 10.9968C3.44378 11.1551 3.77166 11.514 3.92041 11.6592M12.0003 6.1488L13.4193 4.76334C15.3113 2.91613 18.3789 2.91613 20.271 4.76334C22.163 6.61054 22.163 9.60546 20.271 11.4527L19.2017 12.5186M12.0003 6.1488L10.7542 7.39725C10.0214 8.13141 10.0219 9.32043 10.7554 10.0539C11.4894 10.7879 12.6793 10.7879 13.4133 10.0539L16.0693 7.39787M14.9131 13.4531L17.4954 16.1809M17.4954 16.1809C18.2089 16.9347 18.1764 18.1242 17.4226 18.8378C16.6693 19.5509 15.4807 19.5189 14.7669 18.7663L13.3188 17.2217M17.4954 16.1809C18.2086 16.9344 19.3982 16.9676 20.1516 16.2543C20.9051 15.5411 20.9376 14.3521 20.2244 13.5987L17.6415 10.8703M6.13555 14.7589L7.46387 13.4306M6.13555 14.7589C5.40193 15.4925 4.21251 15.4925 3.47889 14.7589C2.74528 14.0253 2.74528 12.8358 3.47889 12.1022L4.80722 10.7739C5.54084 10.0403 6.73026 10.0403 7.46388 10.7739C8.19749 11.5075 8.19749 12.6969 7.46387 13.4306M6.13555 14.7589C5.40193 15.4925 5.40193 16.6819 6.13555 17.4155C6.86916 18.1492 8.05859 18.1492 8.7922 17.4155M7.46387 13.4306C8.19749 12.6969 9.38691 12.6969 10.1205 13.4306C10.8541 14.1642 10.8541 15.3536 10.1205 16.0872M8.7922 17.4155L10.1205 16.0872M8.7922 17.4155C8.05859 18.1492 8.05859 19.3386 8.7922 20.0722C9.52582 20.8058 10.7152 20.8058 11.4489 20.0722L12.7772 18.7439C13.5108 18.0102 13.5108 16.8208 12.7772 16.0872C12.0436 15.3536 10.8541 15.3536 10.1205 16.0872",
                }),
              }),
            }),
          }),
          cta: {
            label: "Become a Partner",
            link: "https://forms.supabase.com/partner",
          },
        },
        oAuthApp: {
          steps: [
            {
              title: "Register App",
              text: "An OAuth app first needs to be registered with Supabase",
            },
            {
              title: "Add OAuth2 Support",
              text: "Use the OAuth2 protocol to access a users organization or project",
            },
            {
              title: "Receive Tokens",
              text: "You'll receive a new access and refresh token",
            },
            {
              title: "Control Projects",
              text: "Use Supabase REST API to control projects and other settings",
            },
          ],
        },
        featureBlocks: [
          {
            title: "Technical support",
            description:
              "Access technical support to back your integrations and customer projects.",
            icon: (0, a.jsx)(w, { strokeWidth: 1.5 }),
          },
          {
            title: "Expand your ecosystem",
            description:
              "Offer your own products and services to Supabase customers.",
            icon: (0, a.jsx)(k.Z, { strokeWidth: 1.5 }),
          },
          {
            title: "Business growth",
            description: "Explore new revenue streams and growth potential.",
            icon: (0, a.jsx)(y.Z, { strokeWidth: 1.5 }),
          },
          {
            title: "Scale with us",
            description:
              "Scale automatically with the power of open-source Postgres technology.",
            icon: (0, a.jsx)(N, { strokeWidth: 1.5 }),
          },
        ],
        featuredApps: [
          {
            name: "Arengu",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/arengu/arengu_logo.jpeg",
          },
          {
            name: "Auth0",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/auth0/auth0_dark.png?t=2023-07-19T19%3A13%3A04.189Z",
          },
          {
            name: "Appsmith",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/appsmith/appsmith-logo.png",
          },
          {
            name: "CALDA",
            type: "experts",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/calda/calda_logo.jpeg",
          },
          {
            name: "Morrow",
            type: "experts",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/morrow/morrow-logo.png",
          },
          {
            name: "Voypost",
            type: "experts",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/voypost/33024474.png",
          },
          {
            name: "Vercel",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/vercel/vercel-icon.jpeg",
          },
          {
            name: "Prisma",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/prisma/prisma-icon.png",
          },
          {
            name: "Cloudflare-workers",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/cloudflare-integration/cloudflare_workers_logo.png?t=2023-07-21T11%3A07%3A47.005Z",
          },
          {
            name: "Codesandbox",
            type: "integration",
            logo: "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/codesandbox/codesandbox_logo.jpeg",
          },
        ],
      };
      let _ = (0, j.Z)("Code", [
        ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
        ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
      ]);
      var A = () => {
        let e = (0, p.useRouter)(),
          t = (0, u.Gc)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.PB, {
              title: C.metaTitle,
              description: C.metaDescription,
              openGraph: {
                title: C.metaTitle,
                description: C.metaDescription,
                url: "https://supabase.com/partners",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      e.basePath,
                      "/images/og/integrations.png"
                    ),
                  },
                ],
              },
            }),
            (0, a.jsxs)(g.default, {
              children: [
                (0, a.jsxs)("div", {
                  className: "relative bg-alternative overflow-hidden",
                  children: [
                    (0, a.jsx)(f.default, {
                      className: "overflow-hidden pt-8 pb-12 md:pt-12",
                      children: (0, a.jsx)(v.default, { ...C.heroSection }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-20 w-full flex py-16 mb-16 -mt-10 md:mb-24 md:-mt-20 justify-center gap-2 overflow-hidden mx-auto max-w-4xl before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(--background-alternative-default))_0%,transparent_10%,transparent_90%,hsl(var(--background-alternative-default))_100%)] before:z-10",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-alternative/90 backdrop-blur-2xl backdrop-filter bg-gradient-to-t from-background to-background-alternative border-4 border-background-alternative shadow-xl top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex items-center justify-center z-30",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 w-full h-full transform",
                              children: (0, a.jsxs)("svg", {
                                className:
                                  "absolute inset-[-2px] transform animate-[transformSpin_3s_both_cubic-bezier(.5,.2,.5,.8)_infinite] opacity-90",
                                viewBox: "0 0 182 183",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, a.jsx)("path", {
                                    d: "M91 1C120.005 1 145.841 14.5702 162.505 35.708",
                                    stroke: "url(#paint0_linear_4766_6117)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                  }),
                                  (0, a.jsx)("defs", {
                                    children: (0, a.jsxs)("linearGradient", {
                                      id: "paint0_linear_4766_6117",
                                      x1: "107",
                                      y1: "2.5",
                                      x2: "151",
                                      y2: "21.5",
                                      gradientUnits: "userSpaceOnUse",
                                      children: [
                                        (0, a.jsx)("stop", {
                                          stopColor: "hsl(var(--brand-600))",
                                          stopOpacity: "0",
                                        }),
                                        (0, a.jsx)("stop", {
                                          offset: "0.510417",
                                          stopColor: "hsl(var(--brand-600))",
                                        }),
                                        (0, a.jsx)("stop", {
                                          offset: "1",
                                          stopColor: "hsl(var(--brand-600))",
                                          stopOpacity: "0",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(i(), {
                              src: "/images/supabase-logo-icon.svg",
                              alt: "Supabase icon",
                              width: t ? 45 : 60,
                              height: t ? 45 : 60,
                            }),
                          ],
                        }),
                        n()(0, 3).map((e) =>
                          (0, a.jsx)("div", {
                            className:
                              "flex gap-2 animate-marquee will-change-transform",
                            children: C.featuredApps.map((e) =>
                              (0, a.jsx)("div", {
                                className:
                                  "w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-t from-background to-background-alternative border border-muted flex items-center justify-center shadow-xl",
                                children: (0, a.jsx)(i(), {
                                  src: e.logo,
                                  alt: e.name,
                                  width: t ? 24 : 45,
                                  height: t ? 24 : 45,
                                  className:
                                    "w-8 h-8  overflow-hidden rounded-full",
                                }),
                              })
                            ),
                          })
                        ),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 z-[1] bg-[linear-gradient(to_top,hsl(var(--background-alternative-default))_40%,hsl(var(--background-default))_90%)]",
                    }),
                  ],
                }),
                (0, a.jsx)(f.default, {
                  children: (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-span-1 lg:col-span-2",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-2xl sm:text-3xl xl:text-4xl tracking-[-.5px]",
                            children: "Explore our marketplace",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-foreground-lighter text-xs sm:text-sm lg:text-base py-3 lg:max-w-md",
                            children:
                              "Discover how technology and consulting partners are already working with Supabase.",
                          }),
                          (0, a.jsx)(x.Z, {
                            url: "https://supabase.com/docs/guides/platform/marketplace",
                            label: "View docs",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "col-span-1 lg:col-span-3 w-full max-w-4xl grid gap-8 rounded md:grid-cols-2",
                        children: [
                          (0, a.jsxs)(b.Z, {
                            hasShimmer: !0,
                            hasActiveOnHover: !0,
                            innerClassName:
                              "px-8 py-6 group flex flex-col gap-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "bg-surface-200 mb-4 text-foreground flex h-12 w-12 items-center justify-center rounded-md border transition-all group-hover:scale-105",
                                children: (0, a.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: "1",
                                  children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-foreground text-lg",
                                    children: "Experts",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-foreground-lighter text-sm",
                                    children:
                                      "Find an expert to help build your next idea.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d(), {
                                href: "/partners/experts",
                                className: "absolute inset-0",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(b.Z, {
                            hasInnerShimmer: !1,
                            hasActiveOnHover: !0,
                            innerClassName:
                              "px-8 py-6 group flex flex-col gap-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "bg-surface-200 text-foreground flex h-12 w-12 items-center justify-center rounded-md border transition-all group-hover:scale-105",
                                children: (0, a.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: "1",
                                  children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-foreground text-lg",
                                    children: "Integrations",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-foreground-lighter text-sm",
                                    children:
                                      "Use your favorite tools with Supabase.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d(), {
                                href: "/partners/integrations",
                                className: "absolute inset-0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(f.default, {
                  className: "!py-0",
                  children: (0, a.jsx)("div", { className: "border-b" }),
                }),
                (0, a.jsxs)(f.default, {
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-2xl sm:text-3xl xl:text-4xl text-center tracking-[-.5px]",
                      children: "Partner benefits",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid mt-8 lg:mt-16 gap-8 rounded md:grid-cols-2 xl:grid-cols-4",
                      children: C.featureBlocks.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "group flex flex-col items-center text-center gap-4 px-8 py-6",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "bg-brand-300 [[data-theme*=dark]_&]:bg-brand-500 text-brand-1200 group-hover:text-brand-800 [[data-theme*=dark]_&]:group-hover:text-brand-1000 flex h-12 w-12 items-center justify-center rounded-md border border-brand transition-all group-hover:scale-105",
                                children: e.icon
                                  ? e.icon
                                  : (0, a.jsx)(_, { strokeWidth: 2 }),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-foreground text-lg",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-foreground-lighter text-sm",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "bg-alternative border-t border-b",
                  children: (0, a.jsx)(f.default, {
                    className: "flex flex-col gap-8",
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex flex-col lg:flex-row gap-8 xl:gap-10 justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "w-full lg:w-1/2 gap-2 flex flex-col items-start",
                          children: [
                            (0, a.jsx)(m.C, { children: "Beta" }),
                            (0, a.jsx)("h2", {
                              className:
                                "text-3xl xl:text-4xl mt-2 max-w-[280px] sm:max-w-xs xl:max-w-[360px] tracking-[-1px]",
                              children: "Publish an OAuth App",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-foreground-lighter mb-4 max-w-sm",
                              children:
                                "Supabase lets you build a third-party app that can control organizations or projects programmatically.",
                            }),
                            (0, a.jsx)(x.Z, {
                              url: "https://supabase.com/docs/guides/platform/oauth-apps/publish-an-oauth-app",
                              label: "Learn more",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative w-full lg:w-1/2 border bg-background flex items-center justify-center aspect-video rounded-xl overflow-hidden",
                          children: (0, a.jsx)(i(), {
                            src: "/images/partners/register-oauth-app.svg",
                            alt: "Register app via API",
                            layout: "fill",
                            objectFit: "cover",
                            quality: 100,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.default, {
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col text-center gap-4 py-8 items-center justify-center",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "heading-gradient text-2xl sm:text-3xl xl:text-4xl",
                        children: "Reach out to partner with Supabase",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "w-full mt-4 flex items-center justify-center text-center gap-4",
                        children: (0, a.jsx)(h.z, {
                          asChild: !0,
                          size: "medium",
                          children: (0, a.jsx)(d(), {
                            href: "https://forms.supabase.com/partner",
                            tabIndex: -1,
                            children: "Become a Partner",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    58371: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(55132).Z)("CirclePlay", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
      ]);
    },
    14126: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(55132).Z)("DollarSign", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        [
          "path",
          {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s",
          },
        ],
      ]);
    },
    74714: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(55132).Z)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    15241: function (e) {
      e.exports = {
        "appear-from-bottom": "animations_appear-from-bottom__Z4upz",
        animateIn: "animations_animateIn__JEK8I",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 31561));
      }
    ),
      (_N_E = e.O());
  },
]);
