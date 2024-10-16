(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    93228: function (e) {
      var a = Math.ceil,
        t = Math.max;
      e.exports = function (e, s, i, o) {
        for (var l = -1, r = t(a((s - e) / (i || 1)), 0), n = Array(r); r--; )
          (n[o ? r : ++l] = e), (e += i);
        return n;
      };
    },
    82941: function (e, a, t) {
      var s = t(93228),
        i = t(82406),
        o = t(5707);
      e.exports = function (e) {
        return function (a, t, l) {
          return (
            l && "number" != typeof l && i(a, t, l) && (t = l = void 0),
            (a = o(a)),
            void 0 === t ? ((t = a), (a = 0)) : (t = o(t)),
            (l = void 0 === l ? (a < t ? 1 : -1) : o(l)),
            s(a, t, l, e)
          );
        };
      };
    },
    82406: function (e, a, t) {
      var s = t(41225),
        i = t(67878),
        o = t(39045),
        l = t(29259);
      e.exports = function (e, a, t) {
        if (!l(t)) return !1;
        var r = typeof a;
        return (
          ("number" == r
            ? !!(i(t) && o(a, t.length))
            : "string" == r && a in t) && s(t[a], e)
        );
      };
    },
    2689: function (e, a, t) {
      var s = t(82941)();
      e.exports = s;
    },
    5707: function (e, a, t) {
      var s = t(7642),
        i = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = s(e)) === i || e === -i
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
    },
    87314: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(85343);
        },
      ]);
    },
    59257: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return c;
        },
      });
      var s = t(52322),
        i = t(89460),
        o = t(96577),
        l = t.n(o),
        r = t(22965),
        n = (e) => {
          var a;
          let { resolvedTheme: t } = (0, r.F)();
          return (0, s.jsxs)("div", {
            className: "relative h-full w-full",
            children: [
              (0, s.jsx)("video", {
                className:
                  "relative z-10 block w-full h-full reduce-motion:hidden",
                height: "100%",
                width: "100%",
                loop: !0,
                muted: !0,
                autoPlay: !0,
                controls: !1,
                playsInline: !0,
                poster:
                  null !== (a = e.video.poster) && void 0 !== a
                    ? a
                    : "/images/index/dashboard/supabase-table-editor".concat(
                        (null == t ? void 0 : t.includes("dark"))
                          ? ""
                          : "-light",
                        ".png"
                      ),
                children: e.video.sources.map((e, a) => {
                  var t;
                  return (0, s.jsx)(
                    "source",
                    {
                      src: "".concat(e.src).concat(0 === a ? ".webm" : ".mp4"),
                      type: (
                        null !== (t = e.type) && void 0 !== t ? t : 0 === a
                      )
                        ? "video/webm"
                        : "video/mp4",
                    },
                    "".concat(e.src).concat(0 === a ? ".webm" : ".mp4")
                  );
                }),
              }),
              (0, s.jsx)(l(), {
                src: e.video.poster,
                alt: e.video.title,
                width: 1920,
                height: 1080,
                className: "reduce-motion:block relative z-0 overflow-hidden",
              }),
            ],
          });
        },
        c = {
          heroSection: {
            heading: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("span", {
                  className:
                    "block text-[#F4FFFA00] bg-clip-text bg-gradient-to-b from-foreground to-foreground-light",
                  children: "Build in a weeskend",
                }),
                (0, s.jsx)("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2] block md:ml-0",
                  children: "Scale to millions",
                }),
              ],
            }),
            subheading: (0, s.jsxs)(s.Fragment, {
              children: [
                "Supabase is an open source Firebase alternative. ",
                (0, s.jsx)("br", { className: "hidden md:block" }),
                "Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
              ],
            }),
            image: "/images/index/gradient-bg.png",
            cta: {
              label: "Start your projecssss",
              link: "https://app.supabase.com",
            },
            secondaryCta: { label: "Documentation", link: "/docs" },
          },
          productsSection: {
            products: {
              ...i.Z,
              "data-api": {
                name: "Data APIs",
                icon: "M4.13477 12.8129C4.13477 14.1481 4.43245 15.4138 4.96506 16.5471M12.925 4.02271C11.5644 4.02271 10.276 4.33184 9.12614 4.88371M21.7152 12.8129C21.7152 11.4644 21.4115 10.1867 20.8688 9.0447M12.925 21.6032C14.2829 21.6032 15.5689 21.2952 16.717 20.7454M16.717 20.7454C17.2587 21.5257 18.1612 22.0366 19.1831 22.0366C20.84 22.0366 22.1831 20.6935 22.1831 19.0366C22.1831 17.3798 20.84 16.0366 19.1831 16.0366C17.5263 16.0366 16.1831 17.3798 16.1831 19.0366C16.1831 19.6716 16.3804 20.2605 16.717 20.7454ZM4.96506 16.5471C4.16552 17.086 3.63965 17.9999 3.63965 19.0366C3.63965 20.6935 4.98279 22.0366 6.63965 22.0366C8.2965 22.0366 9.63965 20.6935 9.63965 19.0366C9.63965 17.3798 8.2965 16.0366 6.63965 16.0366C6.01951 16.0366 5.44333 16.2248 4.96506 16.5471ZM9.12614 4.88371C8.58687 4.08666 7.67444 3.56274 6.63965 3.56274C4.98279 3.56274 3.63965 4.90589 3.63965 6.56274C3.63965 8.2196 4.98279 9.56274 6.63965 9.56274C8.2965 9.56274 9.63965 8.2196 9.63965 6.56274C9.63965 5.94069 9.45032 5.36285 9.12614 4.88371ZM20.8688 9.0447C21.6621 8.50486 22.1831 7.59464 22.1831 6.56274C22.1831 4.90589 20.84 3.56274 19.1831 3.56274C17.5263 3.56274 16.1831 4.90589 16.1831 6.56274C16.1831 8.2196 17.5263 9.56274 19.1831 9.56274C19.8081 9.56274 20.3884 9.37165 20.8688 9.0447Z",
                description: (0, s.jsxs)(s.Fragment, {
                  children: [
                    "Instant ready-to-use ",
                    (0, s.jsx)("strong", { children: "Restful APIs" }),
                    ".",
                  ],
                }),
                description_short: "Instant ready-to-use Restful APIs.",
                label: "",
                url: "https://supabase.com/docs/guides/api",
              },
            },
          },
          // dashboardFeatures: {
          //   title: (0, s.jsxs)(s.Fragment, {
          //     children: [
          //       (0, s.jsx)("span", {
          //         className: "text-foreground",
          //         children: "Stay productive and manage your app",
          //       }),
          //       (0, s.jsx)("br", { className: "hidden sm:block" }),
          //       " without leaving the dashboard",
          //     ],
          //   }),
          //   tabs: [
          //     {
          //       label: "Table Editor",
          //       panel: (e) => {
          //         let { isDark: a } = e;
          //         return (0, s.jsx)(n, {
          //           video: {
          //             title: "Supabase dashboard table editor",
          //             sources: [
          //               {
          //                 src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-table-editor".concat(
          //                   a ? "" : "-light"
          //                 ),
          //                 type: "video/mp4",
          //               },
          //             ],
          //             poster:
          //               "/images/index/dashboard/supabase-table-editor".concat(
          //                 a ? "" : "-light",
          //                 ".png"
          //               ),
          //           },
          //         });
          //       },
          //       highlights: [
          //         {
          //           label: "Full CRUD",
          //           link: "/docs/guides/database/tables?queryGroups=database-method&database-method=sql&queryGroups=language&language=js",
          //         },
          //         {
          //           label: "Materialized Views",
          //           link: "/docs/guides/database/tables?queryGroups=database-method&database-method=sql&queryGroups=language&language=js#materialized-views",
          //         },
          //         {
          //           label: "Foreign Tables",
          //           link: "/docs/guides/database/tables?queryGroups=database-method&database-method=sql&queryGroups=language&language=js#joining-tables-with-foreign-keys",
          //         },
          //         {
          //           label: "Partitioned Tables",
          //           link: "/docs/guides/database/partitions",
          //         },
          //         {
          //           label: "Easy as a spreadsheet",
          //           link: "/docs/guides/database/overview#table-view",
          //         },
          //       ],
          //     },
          //     {
          //       label: "SQL Editor",
          //       panel: (e) => {
          //         let { isDark: a } = e;
          //         return (0, s.jsx)(n, {
          //           video: {
          //             title: "Supabase dashboard SQL editor",
          //             sources: [
          //               {
          //                 src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-sql-editor".concat(
          //                   a ? "" : "-light"
          //                 ),
          //                 type: "video/mp4",
          //               },
          //             ],
          //             poster:
          //               "/images/index/dashboard/supabase-sql-editor".concat(
          //                 a ? "" : "-light",
          //                 ".png"
          //               ),
          //           },
          //         });
          //       },
          //       highlights: [
          //         {
          //           label: "AI SQL Editor",
          //           link: "/docs/guides/database/overview#the-sql-editor",
          //         },
          //         {
          //           label: "Row Level Security",
          //           link: "/docs/guides/database/postgres/row-level-security",
          //         },
          //         {
          //           label: "Save time using Templates",
          //           link: "/docs/guides/database/overview#the-sql-editor",
          //         },
          //         {
          //           label: "Save and reuse Queries",
          //           link: "/docs/guides/database/overview#the-sql-editor",
          //         },
          //       ],
          //     },
          //     {
          //       label: "RLS Policies",
          //       panel: (e) => {
          //         let { isDark: a } = e;
          //         return (0, s.jsx)(n, {
          //           video: {
          //             title: "Supabase dashboard Row Level Security",
          //             sources: [
          //               {
          //                 src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-rls".concat(
          //                   a ? "" : "-light"
          //                 ),
          //                 type: "video/mp4",
          //               },
          //             ],
          //             poster: "/images/index/dashboard/supabase-rls".concat(
          //               a ? "" : "-light",
          //               ".png"
          //             ),
          //           },
          //         });
          //       },
          //       highlights: [
          //         {
          //           label: "Email Logins",
          //           link: "/docs/guides/auth/auth-email-passwordless",
          //         },
          //         {
          //           label: "Magic Links",
          //           link: "/docs/guides/auth/auth-email-passwordless?queryGroups=language&language=js#with-magic-link",
          //         },
          //         {
          //           label: "20+ Third-party Logins",
          //           link: "/docs/guides/auth/social-login#set-up-a-social-provider-with-supabase-auth",
          //         },
          //         {
          //           label: "Custom Access Policies via RLS",
          //           link: "/docs/guides/database/postgres/row-level-security",
          //         },
          //         {
          //           label: "Password Recovery",
          //           link: "/docs/guides/auth/passwords?queryGroups=language&language=js#resetting-a-password",
          //         },
          //       ],
          //     },
          //   ],
          // },
        };
    },
    53839: function (e, a) {
      "use strict";
      a.Z = {
        www_hp_hero_startProject: {
          action: "click",
          category: "www_hp_hero",
          label: "start_project",
        },
        www_hp_hero_documentation: {
          action: "click",
          category: "www_hp_hero",
          label: "documentation",
        },
        www_hp_subhero_products_database: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_database",
        },
        www_hp_subhero_products_auth: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_auth",
        },
        www_hp_subhero_products_storage: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_storage",
        },
        www_hp_subhero_products_edgeFunctions: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_functions",
        },
        www_hp_subhero_products_realtime: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_realtime",
        },
        www_hp_subhero_products_vector: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_vector",
        },
        www_pricing_hero_plan_free: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_free",
        },
        www_pricing_hero_plan_pro: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_pro",
        },
        www_pricing_hero_plan_team: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_team",
        },
        www_pricing_hero_plan_enterprise: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_enterprise",
        },
        www_pricing_comparison_free: {
          action: "click",
          category: "www_pricing_comparison",
          label: "free",
        },
        www_pricing_comparison_pro: {
          action: "click",
          category: "www_pricing_comparison",
          label: "pro",
        },
        www_pricing_comparison_team: {
          action: "click",
          category: "www_pricing_comparison",
          label: "team",
        },
        www_pricing_comparison_enterprise: {
          action: "click",
          category: "www_pricing_comparison",
          label: "enterprise",
        },
        www_event_main_cta: {
          action: "click",
          category: "www_event_page",
          label: "main_cta",
        },
      };
    },
    61172: function (e, a, t) {
      "use strict";
      var s = t(30175),
        i = t(23642),
        o = t(31930);
      let l = () => {};
      a.Z = {
        sendEvent: (e, a, t) => {
          var r, n;
          let c = localStorage.getItem(s.LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT);
          if ((!i.XK && !i.rv) || "true" !== c) return l;
          let { category: d, action: u, label: p, value: g } = e,
            m =
              "undefined" != typeof document
                ? null === (r = document) || void 0 === r
                  ? void 0
                  : r.title
                : "",
            b =
              "undefined" != typeof document
                ? null === (n = document) || void 0 === n
                  ? void 0
                  : n.referrer
                : "",
            {
              page_url: h,
              search: w,
              language: _,
              viewport_height: x,
              viewport_width: v,
            } = a;
          return (0, o.v)(
            "".concat(i.T5, "/telemetry/event"),
            {
              page_url: h,
              action: u,
              page_title: m,
              pathname: t.pathname,
              ph: {
                search: w,
                referrer: b,
                language: _,
                viewport_height: x,
                viewport_width: v,
                user_agent: navigator.userAgent,
              },
              custom_properties: { category: d, label: p, value: g },
            },
            { headers: { Version: "2" }, credentials: "include" }
          );
        },
      };
    },
    85343: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return z;
          },
        });
      var s = t(52322),
        i = t(25237),
        o = t.n(i),
        l = t(59257),
        r = t(27478),
        n = t(39097),
        c = t.n(n),
        d = t(5632),
        u = t(18647),
        p = t(53839),
        g = t(61172),
        m = t(29982),
        b = t(37637),
        h = t(45411),
        w = t(30175),
        _ = () => {
          let e = (0, w.Gc)(768),
            a = (0, d.useRouter)(),
            t = (0, u.M)(),
            i = async (e) => {
              await g.Z.sendEvent(e, t, a);
            };
          return (0, s.jsx)("div", {
            className: "relative -mt-[65px]",
            children: (0, s.jsx)(b.default, {
              className: "pt-8 pb-10 md:pt-16 overflow-hidden",
              children: (0, s.jsx)("div", {
                className: "relative",
                children: (0, s.jsx)("div", {
                  className: "mx-auto",
                  children: (0, s.jsx)("div", {
                    className:
                      "mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center",
                    children: (0, s.jsxs)("div", {
                      className:
                        "relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-col items-center",
                          children: [
                            (0, s.jsx)(h.Z, {
                              size: e ? "tiny" : "small",
                              className: "mb-4 lg:mb-8 -mt-4",
                            }),
                            (0, s.jsxs)("h1", {
                              className:
                                "text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "block text-foreground",
                                  children: "Build in a weekend",
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-brand block md:ml-0",
                                  children: "Scale to millions",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("p", {
                              className:
                                "pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg",
                              children: [
                                "Supabase is an open source Firebase alternative.",
                                " ",
                                (0, s.jsx)("br", {
                                  className: "hidden md:block",
                                }),
                                "Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, s.jsx)(m.z, {
                              asChild: !0,
                              size: "medium",
                              children: (0, s.jsx)(c(), {
                                href: "https://supabase.com/dashboard",
                                as: "https://supabase.com/dashboard",
                                onClick: () => i(p.Z.www_hp_hero_startProject),
                                children: "Join Discord",
                              }),
                            }),
                            (0, s.jsx)(m.z, {
                               asChild: !0,
                               size: "medium",
                               type: "default",
                               children: (0, s.jsx)(c(), {
                                 href: "/careers",
                                 as: "/careers",
                                 onClick: () => i(p.Z.www_hp_hero_requestDemo),
                                 children: "Careers",
                               }),
                             }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        x = t(44382),
        v = t(2689),
        f = t.n(v);
      let y = [
          {
            image: "/images/logos/publicity/mozilla.svg",
            alt: "mozilla",
            name: "mozilla",
          },
          {
            image: "/images/logos/publicity/1password.svg",
            alt: "1password",
            name: "1password",
          },
          { image: "/images/logos/publicity/pwc.svg", alt: "pwc", name: "pwc" },
          {
            image: "/images/logos/publicity/pika.svg",
            alt: "pika",
            name: "pika",
          },
          {
            image: "/images/logos/publicity/humata.svg",
            alt: "humata",
            name: "humata",
          },
          {
            image: "/images/logos/publicity/krea.svg",
            alt: "krea",
            name: "krea",
          },
          {
            image: "/images/logos/publicity/udio.svg",
            alt: "udio",
            name: "udio",
          },
          {
            image: "/images/logos/publicity/langchain.svg",
            alt: "langchain",
            name: "langchain",
          },
          {
            image: "/images/logos/publicity/resend.svg",
            alt: "resend",
            name: "resend",
          },
          {
            image: "/images/logos/publicity/loops.svg",
            alt: "loops",
            name: "loops",
          },
          {
            image: "/images/logos/publicity/mobbin.svg",
            alt: "mobbin",
            name: "mobbin",
          },
          {
            image: "/images/logos/publicity/gopuff.svg",
            alt: "gopuff",
            name: "gopuff",
          },
          {
            image: "/images/logos/publicity/chatbase.svg",
            alt: "chatbase",
            name: "chatbase",
          },
          {
            image: "/images/logos/publicity/betashares.svg",
            alt: "betashares",
            name: "betashares",
          },
        ],
        j = (e) => {
          let { className: a } = e;
          return (0, s.jsx)("div", {
            className: (0, x.cn)(a),
            suppressHydrationWarning: !0,
            children: y.map((e) =>
              (0, s.jsx)(
                "div",
                {
                  className: "h-12 lg:h-12 w-max !inline-block",
                  children: (0, s.jsx)("img", {
                    src: e.image,
                    alt: e.alt,
                    className:
                      "h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block",
                    draggable: !1,
                  }),
                },
                "logos-group-".concat(e.name)
              )
            ),
          });
        };
      var k = (e) => {
        let { className: a, showHeading: t = !0, align: i = "center" } = e,
          o = "gap-4 lg:gap-8";
        return (0, s.jsxs)("div", {
          className: (0, x.cn)("pb-14 md:pb-24", a),
          suppressHydrationWarning: !0,
         
        });
      };
      let C = o()(() => t.e(5273).then(t.bind(t, 5273)), {
          loadableGenerated: { webpack: () => [5273] },
        }),
        N = o()(() => t.e(2121).then(t.bind(t, 72121)), {
          loadableGenerated: { webpack: () => [72121] },
        }),
        S = o()(() => t.e(8290).then(t.bind(t, 78290)), {
          loadableGenerated: { webpack: () => [78290] },
        }),
        E = o()(
          () =>
            Promise.all([t.e(1070), t.e(1401), t.e(1553), t.e(8386)]).then(
              t.bind(t, 28482)
            ),
          { loadableGenerated: { webpack: () => [28482] } }
        ),
        q = o()(() => t.e(2253).then(t.bind(t, 2253)), {
          loadableGenerated: { webpack: () => [2253] },
        }),
        F = o()(
          () =>
            Promise.all([t.e(1070), t.e(1401), t.e(9754)]).then(
              t.bind(t, 19754)
            ),
          { loadableGenerated: { webpack: () => [19754] } }
        ),
        G = o()(() => t.e(7042).then(t.bind(t, 57042)), {
          loadableGenerated: { webpack: () => [57042] },
        }),
        P = o()(() => t.e(3710).then(t.bind(t, 33710)), {
          loadableGenerated: { webpack: () => [33710] },
          ssr: !1,
        });
      var z = () =>
        (0, s.jsxs)(r.default, {
          children: [
            (0, s.jsx)(_, {}),
            (0, s.jsx)(k, {}),
            (0, s.jsx)(C, { ...l.Z.productsSection }),
            (0, s.jsx)(N, {}),
            (0, s.jsx)(S, {}),
            (0, s.jsx)(E, {}),
          //  (0, s.jsx)(q, { ...l.Z.dashboardFeatures }),
            (0, s.jsx)(F, {}),
            (0, s.jsx)(G, { className: "border-none" }),
            (0, s.jsx)(P, {
              effect: "solid",
              place: "bottom",
              backgroundColor: "hsl(var(--background-alternative-default))",
              textColor: "hsl(var(--foreground-light))",
              className: "!max-w-[320px] !px-3 whitespace-pre-line",
              uuid: "homepage-tt",
            }),
          ],
        });
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 87314));
      }
    ),
      (_N_E = e.O());
  },
]);
