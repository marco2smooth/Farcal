"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8290],
  {
    78290: function (e, s, a) {
      a.r(s),
        a.d(s, {
          CompositionCol: function () {
            return N;
          },
        });
      var l = a(52322),
        t = a(25237),
        r = a.n(t),
        o = a(39097),
        n = a.n(o),
        i = a(96577),
        c = a.n(i),
        d = a(22965),
        p = a(62351),
        h = a(29982),
        x = a(44382),
        u = a(37637),
        m = a(29455),
        g = a(93089),
        f = a(47490);
      let w = r()(
          () =>
            Promise.all([a.e(1070), a.e(1401), a.e(336)]).then(a.bind(a, 336)),
          { loadableGenerated: { webpack: () => [336] } }
        ),
        j = r()(() => a.e(9667).then(a.bind(a, 19667)), {
          loadableGenerated: { webpack: () => [19667] },
        }),
        v = (e, s) => ({
          ...f.Z.find((s) => e.includes(s.organization)),
          linked: s,
        }),
        y = [
          { type: "narrow", cards: [v("Quivr", !1), v("Tinloof", !1)] },
          {
            type: "narrow",
            cards: [
              {
                logo: "/images/customers/logos/1password.png",
                logo_inverse: "/images/customers/logos/light/1password.png",
                organization: "1Password",
              },
              v("Next Door Lending", !0),
            ],
          },
          { type: "expanded", cards: [v("Maergo", !0)] },
          {
            type: "narrow",
            cards: [
              v("Shotgun", !0),
              {
                logo: "/images/customers/logos/mozilla.png",
                logo_inverse: "/images/customers/logos/light/mozilla.png",
                organization: "Mozilla",
                linked: !1,
              },
            ],
          },
          { type: "expanded", cards: [v("Chatbase", !0)] },
          { type: "narrow", cards: [v("Mobbin", !0), v("HappyTeams", !0)] },
          { type: "expanded", cards: [v("Pebblely", !0)] },
        ],
        N = (e) => {
          let { column: s, className: a } = e;
          return (0, l.jsx)("div", {
            className: a,
            children: s.cards.map((e) =>
              "expanded" === s.type
                ? (0, l.jsx)(
                    n(),
                    {
                      href: e.url,
                      className:
                        "col-span-12 md:col-span-4 w-full md:w-[450px] h-full",
                      children: (0, l.jsx)(b, {
                        size: "expanded",
                        customer: e,
                      }),
                    },
                    e.organization
                  )
                : e.linked
                ? (0, l.jsx)(
                    n(),
                    {
                      href: e.url,
                      className:
                        "col-span-12 md:col-span-4 w-full h-full flex-grow",
                      children: (0, l.jsx)(b, { size: "narrow", customer: e }),
                    },
                    e.organization
                  )
                : (0, l.jsx)(
                    b,
                    {
                      size: "narrow",
                      customer: e,
                      className: " pointer-events-none",
                    },
                    e.organization
                  )
            ),
          });
        },
        b = (e) => {
          let { customer: s, className: a, size: t, children: r, ...o } = e,
            { resolvedTheme: n } = (0, d.F)(),
            i = s.logo_inverse && (null == n ? void 0 : n.includes("dark")),
            h = !i && s.logo,
            u = (e) => {
              let { logoImage: a, className: t } = e;
              return (0, l.jsx)("div", {
                className:
                  "relative box-content opacity-50 group-hover:opacity-75 transition-opacity",
                children: (0, l.jsx)("div", {
                  className: "relative h-[33px] w-auto max-w-[145px]",
                  children: (0, l.jsx)(c(), {
                    src: a,
                    alt: s.title,
                    fill: !0,
                    priority: !0,
                    sizes: "100%",
                    className: (0, x.cn)("object-contain object-left", t),
                  }),
                }),
              });
            };
          switch (t) {
            case "narrow":
              return (0, l.jsx)(g.Z, {
                hasActiveOnHover: !0,
                outerClassName: (0, x.cn)(
                  "h-full w-full md:w-[250px] h-full flex-grow",
                  a
                ),
                innerClassName: "flex items-center justify-center",
                children: (0, l.jsx)(
                  c(),
                  {
                    src: s.logo,
                    alt: s.organization,
                    width: 300,
                    height: 150,
                    priority: !0,
                    className:
                      "w-full opacity-50 group-hover/panel:opacity-75 transition-opacity max-w-[140px] filter dark:invert",
                  },
                  s.organization
                ),
              });
            case "expanded":
              return (0, l.jsxs)(g.Z, {
                hasActiveOnHover: !0,
                outerClassName: (0, x.cn)(
                  "relative",
                  "w-full h-full",
                  "group",
                  "cursor-pointer",
                  "overflow-hidden",
                  "text-left",
                  "transition",
                  a
                ),
                innerClassName:
                  "h-full p-4 md:p-8 flex flex-col gap-6 justify-between",
                ...o,
                children: [
                  (0, l.jsx)(p.Z, {
                    className:
                      "not-sr-only absolute top-8 right-8 -rotate-45 stroke-1 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0",
                  }),
                  i && (0, l.jsx)(u, { logoImage: s.logo_inverse }),
                  h && (0, l.jsx)(u, { logoImage: s.logo }),
                  (0, l.jsx)("p", {
                    className: "text-base text-foreground-lighter",
                    children: s.title,
                  }),
                  r &&
                    (0, l.jsx)("span", {
                      className: "text-sm text-foreground-light flex-grow",
                      children: r,
                    }),
                ],
              });
          }
        };
      s.default = () =>
        (0, l.jsxs)("div", {
          id: "customers",
          className: "overflow-hidden pb-16 md:pb-24",
          children: [
            (0, l.jsxs)(u.default, {
              className:
                "!pb-8 w-full flex gap-4 justify-between flex-col xl:flex-row xl:items-end",
              children: [
                (0, l.jsx)(m.Z, {
                  title: "Infrastructure",
                  title_alt: " to innovate and scale with ease.",
                  subtitle: "Customer Stories",
                  paragraph:
                    "See how Supabase empowers companies of all sizes to accelerate their growth and streamline their work.",
                  className: "xl:w-1/2",
                }),
                (0, l.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, l.jsx)(h.z, {
                      asChild: !0,
                      children: (0, l.jsx)(n(), {
                        href: "/customers",
                        children: "View all stories",
                      }),
                    }),
                    (0, l.jsx)(h.z, {
                      asChild: !0,
                      type: "default",
                      children: (0, l.jsx)(n(), {
                        href: "/events",
                        children: "View Events",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(w, {
              columns: y,
              className: "md:hidden w-full h-[230px]",
            }),
            (0, l.jsx)(j, { columns: y, className: "hidden md:flex" }),
          ],
        });
    },
    29455: function (e, s, a) {
      var l = a(52322);
      s.Z = (e) =>
        (0, l.jsxs)("div", {
          className: e.className,
          children: [
            (0, l.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, l.jsx)("span", {
                  className:
                    "text-foreground-lighter block font-mono text-xs uppercase tracking-widest",
                  children: e.subtitle,
                }),
                (0, l.jsxs)("h3", {
                  className: "h2 lg:max-w-md",
                  children: [
                    (0, l.jsx)("span", { children: e.title }),
                    e.title_alt &&
                      (0, l.jsx)("span", {
                        className: "text-foreground-light inline",
                        children: e.title_alt,
                      }),
                  ],
                }),
              ],
            }),
            e.paragraph &&
              (0, l.jsx)("p", {
                className: "text-foreground-lighter max-w-3xl text-lg sm:mt-4",
                children: e.paragraph,
              }),
          ],
        });
    },
    62351: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return l;
        },
      });
      let l = (0, a(55132).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
  },
]);
