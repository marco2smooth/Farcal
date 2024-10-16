(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9939],
  {
    20726: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pricing",
        function () {
          return a(44545);
        },
      ]);
    },
    61210: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return b;
        },
      });
      var t = a(52322),
        n = a(46204),
        l = a(51248),
        i = a(15159),
        s = a(39097),
        o = a.n(s),
        c = a(2784),
        d = a(94352),
        p = a(29982),
        x = a(33023),
        m = a(44382),
        u = a(6746),
        h = a.n(u);
      let g = x.fC,
        w = x.xz;
      x.ee;
      let f = c.forwardRef((e, r) => {
        let {
            className: a,
            align: n = "center",
            sideOffset: l = 4,
            portal: i = !1,
            sameWidthAsTrigger: s = !1,
            ...o
          } = e,
          d = i ? x.h_ : c.Fragment;
        return (0, t.jsx)(d, {
          children: (0, t.jsx)(x.VY, {
            ref: r,
            align: n,
            sideOffset: l,
            className: (0, m.cn)(
              s ? h()["popover-trigger-width"] : "",
              "z-50 w-72 rounded-md border border-overlay bg-overlay p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...o,
          }),
        });
      });
      (f.displayName = "PopoverContent"),
        (c.forwardRef((e, r) => {
          let { className: a, children: n, ...l } = e;
          return (0, t.jsx)("div", {
            ref: r,
            ...l,
            className: (0, m.cn)("w-full h-px bg-border-overlay", a),
          });
        }).displayName = "PopoverSeparator");
      var _ = a(59951),
        b = (e) => {
          var r;
          let { organizations: a = [], onClick: s, size: x = "large" } = e,
            [u, h] = (0, c.useState)(!1),
            [b, j] = (0, c.useState)("");
          return (0, t.jsxs)(d.Vq, {
            children: [
              (0, t.jsx)(d.hg, {
                asChild: !0,
                children: (0, t.jsx)(p.z, {
                  block: !0,
                  size: x,
                  type: "primary",
                  onClick: s,
                  children: "Upgrade now",
                }),
              }),
              (0, t.jsxs)(d.cZ, {
                children: [
                  (0, t.jsxs)(d.fK, {
                    className: "pb-3",
                    children: [
                      (0, t.jsx)(d.$N, { children: "Upgrade organization" }),
                      (0, t.jsx)(d.Be, {
                        children:
                          "Choose the organization you want to upgrade to a paid plan.",
                      }),
                    ],
                  }),
                  (0, t.jsx)(d.VO, {
                    className: "py-2",
                    children: (0, t.jsxs)(g, {
                      open: u,
                      onOpenChange: h,
                      children: [
                        (0, t.jsx)(w, {
                          asChild: !0,
                          children: (0, t.jsx)(p.z, {
                            type: "default",
                            role: "combobox",
                            size: "small",
                            "aria-expanded": u,
                            className: "w-full justify-between",
                            iconRight: (0, t.jsx)(n.Z, {
                              className: "ml-2 h-4 w-4 shrink-0 opacity-50",
                            }),
                            children:
                              "new-organization" === b
                                ? (0, t.jsxs)("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, t.jsx)(l.Z, { className: "h-4 w-4" }),
                                      "New organization",
                                    ],
                                  })
                                : b
                                ? null === (r = a.find((e) => e.slug === b)) ||
                                  void 0 === r
                                  ? void 0
                                  : r.name
                                : "Select an organization...",
                          }),
                        }),
                        (0, t.jsx)(f, {
                          className: "w-[300px] p-0",
                          children: (0, t.jsxs)(_.mY, {
                            children: [
                              (0, t.jsx)(_.sZ, {
                                placeholder: "Select organization...",
                              }),
                              (0, t.jsxs)(_.e8, {
                                children: [
                                  (0, t.jsx)(_.rb, {
                                    children: "No organizations found.",
                                  }),
                                  (0, t.jsx)(_.fu, {
                                    children: a.map((e) =>
                                      (0, t.jsxs)(
                                        _.di,
                                        {
                                          value: e.slug,
                                          onSelect: (e) => {
                                            j(e === b ? "" : e), h(!1);
                                          },
                                          keywords: [e.name],
                                          children: [
                                            (0, t.jsx)(i.Z, {
                                              className: (0, m.cn)(
                                                "mr-2 h-4 w-4",
                                                b === e.slug
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              ),
                                            }),
                                            e.name,
                                          ],
                                        },
                                        e.slug
                                      )
                                    ),
                                  }),
                                  (0, t.jsx)(_.zz, {}),
                                  (0, t.jsx)(_.fu, {
                                    children: (0, t.jsxs)(_.di, {
                                      value: "new-organization",
                                      onSelect: (e) => {
                                        j(e === b ? "" : e), h(!1);
                                      },
                                      keywords: ["Create a new organization"],
                                      children: [
                                        (0, t.jsx)(i.Z, {
                                          className: (0, m.cn)(
                                            "mr-2 h-4 w-4",
                                            "new-organization" === b
                                              ? "opacity-100"
                                              : "opacity-0"
                                          ),
                                        }),
                                        (0, t.jsx)(l.Z, {
                                          className: "h-4 w-4 mr-2",
                                        }),
                                        " Create a new organization",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(d.VO, {
                    children: (0, t.jsx)(d.Be, {
                      className: "text-xs",
                      children:
                        "Upon continuing, you will be redirected to the organization's billing page where you can upgrade to a paid plan.",
                    }),
                  }),
                  (0, t.jsxs)(d.cN, {
                    children: [
                      (0, t.jsx)(d.GG, {
                        asChild: !0,
                        children: (0, t.jsx)(p.z, {
                          type: "outline",
                          children: "Cancel",
                        }),
                      }),
                      (0, t.jsx)(p.z, {
                        disabled: !b,
                        asChild: !0,
                        children: (0, t.jsx)(o(), {
                          href:
                            "new-organization" === b
                              ? "/dashboard/new"
                              : "/dashboard/org/".concat(
                                  b,
                                  "/billing?panel=subscriptionPlan"
                                ),
                          children: "Continue",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    53839: function (e, r) {
      "use strict";
      r.Z = {
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
    61172: function (e, r, a) {
      "use strict";
      var t = a(30175),
        n = a(23642),
        l = a(31930);
      let i = () => {};
      r.Z = {
        sendEvent: (e, r, a) => {
          var s, o;
          let c = localStorage.getItem(t.LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT);
          if ((!n.XK && !n.rv) || "true" !== c) return i;
          let { category: d, action: p, label: x, value: m } = e,
            u =
              "undefined" != typeof document
                ? null === (s = document) || void 0 === s
                  ? void 0
                  : s.title
                : "",
            h =
              "undefined" != typeof document
                ? null === (o = document) || void 0 === o
                  ? void 0
                  : o.referrer
                : "",
            {
              page_url: g,
              search: w,
              language: f,
              viewport_height: _,
              viewport_width: b,
            } = r;
          return (0, l.v)(
            "".concat(n.T5, "/telemetry/event"),
            {
              page_url: g,
              action: p,
              page_title: u,
              pathname: a.pathname,
              ph: {
                search: w,
                referrer: h,
                language: f,
                viewport_height: _,
                viewport_width: b,
                user_agent: navigator.userAgent,
              },
              custom_properties: { category: d, label: x, value: m },
            },
            { headers: { Version: "2" }, credentials: "include" }
          );
        },
      };
    },
    44545: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return Z;
          },
        });
      var t = a(52322),
        n = a(79582),
        l = a(99),
        i = a(55351),
        s = a(25237),
        o = a.n(s),
        c = a(5632),
        d = a(2784),
        p = a(33710),
        x = a(29982),
        m = a(27478),
        u = a(39097),
        h = a.n(u),
        g = a(18647),
        w = a(70151),
        f = a(44382),
        _ = a(53839),
        b = a(61172),
        j = a(61210),
        y = a(15159),
        N = (e) => {
          let { organizations: r, hasExistingOrganizations: a } = e,
            n = (0, c.useRouter)(),
            l = (0, g.M)(),
            i = async (e) => {
              await b.Z.sendEvent(e, l, n);
            };
          return (0, t.jsx)("div", {
            className: "mx-auto lg:container lg:px-16 xl:px-12 flex flex-col",
            children: (0, t.jsx)("div", {
              className: "relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8",
              children: (0, t.jsx)("div", {
                className:
                  "mx-auto max-w-md grid lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-0",
                children: w.z5.map((e) => {
                  let n = "Pro" === e.name,
                    l = "Team" === e.name,
                    s = n || l,
                    o = (0, w.g_)(e),
                    c = (0, w.nq)(e),
                    d = () => {
                      i(
                        _.Z[
                          "www_pricing_hero_plan_".concat(e.name.toLowerCase())
                        ]
                      );
                    };
                  return (0, t.jsxs)(
                    "div",
                    {
                      className: (0, f.cn)(
                        "flex flex-col border xl:border-r-0 last:border-r bg-surface-75 rounded-xl xl:rounded-none first:rounded-l-xl last:rounded-r-xl",
                        n &&
                          "border-foreground-muted !border-2 !rounded-xl xl:-my-8",
                        l && "xl:border-l-0"
                      ),
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, f.cn)(
                            "px-8 xl:px-4 2xl:px-8 pt-6",
                            n ? "rounded-tr-[9px] rounded-tl-[9px]" : ""
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex items-center gap-2",
                              children: (0, t.jsxs)("div", {
                                className: "flex items-center gap-2 pb-2",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className:
                                      "text-foreground text-2xl font-normal uppercase flex items-center gap-4 font-mono",
                                    children: e.name,
                                  }),
                                  e.nameBadge &&
                                    (0, t.jsx)("span", {
                                      className:
                                        "bg-foreground-light text-background rounded-md py-0.5 px-2 text-[13px] leading-4 inline-flex gap-1 items-center",
                                      children: e.nameBadge,
                                    }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("p", {
                              className: (0, f.cn)(
                                "text-foreground-light mb-4 text-sm 2xl:pr-4",
                                n && "xl:mb-12"
                              ),
                              children: e.description,
                            }),
                            s && a
                              ? (0, t.jsx)(j.Z, {
                                  organizations: r,
                                  onClick: d,
                                })
                              : (0, t.jsx)(x.z, {
                                  block: !0,
                                  size: "large",
                                  type:
                                    "Enterprise" === e.name
                                      ? "default"
                                      : "primary",
                                  asChild: !0,
                                  children: (0, t.jsx)(h(), {
                                    href: e.href,
                                    onClick: d,
                                    children: e.cta,
                                  }),
                                }),
                            (0, t.jsx)("div", {
                              className: (0, f.cn)(
                                "text-foreground flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b border-default lg:min-h-[175px]",
                                e.priceLabel
                                  ? "py-6 lg:pb-0 pt-6"
                                  : "py-8 lg:pb-0 lg:pt-10"
                              ),
                              children: (0, t.jsx)("div", {
                                className: "flex flex-col gap-1",
                                children: (0, t.jsx)("div", {
                                  className: "flex items-end gap-2",
                                  children: (0, t.jsxs)("div", {
                                    children: [
                                      e.priceLabel &&
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-foreground-lighter ml-1 text-[13px] leading-4 font-normal",
                                          children: e.priceLabel,
                                        }),
                                      (0, t.jsxs)("div", {
                                        className: "flex items-end",
                                        children: [
                                          (0, t.jsxs)("p", {
                                            className:
                                              "mt-2 pb-1 font-mono ".concat(
                                                "Enterprise" !== e.name
                                                  ? "text-5xl"
                                                  : "text-4xl"
                                              ),
                                            children: [
                                              "Enterprise" !== e.name
                                                ? "$"
                                                : "",
                                              e.priceMonthly,
                                            ],
                                          }),
                                          (0, t.jsx)("p", {
                                            className:
                                              "text-foreground-lighter mb-1.5 ml-1 text-[13px] leading-4",
                                            children: e.costUnit,
                                          }),
                                        ],
                                      }),
                                      e.warning &&
                                        (0, t.jsxs)("div", {
                                          className: "mt-4 flex flex-col gap-1",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: (0, f.cn)(
                                                "text-[13px] leading-4 inline-flex gap-1 items-center"
                                              ),
                                              children: e.warning,
                                            }),
                                            ("Pro" === e.name ||
                                              "Team" === e.name) &&
                                              (0, t.jsx)(h(), {
                                                href: "#addon-compute",
                                                className:
                                                  "hover:underline text-foreground-lighter text-[13px] m-0 p-0 leading-3",
                                                children: "Need more compute?",
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, f.cn)(
                            "border-default flex rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col px-8 xl:px-4 2xl:px-8 py-6",
                            n && "mb-0.5 rounded-bl-[4px] rounded-br-[4px]"
                          ),
                          children: [
                            e.preface &&
                              (0, t.jsx)("p", {
                                className:
                                  "text-foreground-lighter text-[13px] mt-2 mb-4",
                                children: e.preface,
                              }),
                            (0, t.jsx)("ul", {
                              className:
                                "text-[13px] flex-1 text-foreground-lighter",
                              children: o.map((r) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    className: "flex flex-col py-2 first:mt-0",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: "flex w-6",
                                            children: (0, t.jsx)(y.Z, {
                                              className: (0, f.cn)(
                                                "h-4 w-4",
                                                "Enterprise" === e.name
                                                  ? "text-foreground"
                                                  : "text-brand"
                                              ),
                                              "aria-hidden": "true",
                                              strokeWidth: 3,
                                            }),
                                          }),
                                          (0, t.jsx)("span", {
                                            className: "text-foreground mb-0",
                                            children:
                                              "string" == typeof r ? r : r[0],
                                          }),
                                        ],
                                      }),
                                      "string" != typeof r &&
                                        (0, t.jsx)("p", {
                                          className:
                                            "ml-6 text-foreground-lighter",
                                          children: r[1],
                                        }),
                                    ],
                                  },
                                  "string" == typeof r ? r : r[0]
                                )
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: "flex flex-col gap-6 mt-auto prose",
                              children: (0, t.jsx)("div", {
                                className: "space-y-2 mt-12",
                                children:
                                  c &&
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-[13px] leading-5 text-foreground-lighter whitespace-pre-wrap mb-0",
                                    children: c,
                                  }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    "row-".concat(e.name)
                  );
                }),
              }),
            }),
          });
        },
        v = a(23642),
        k = a(31930);
      let z = o()(
          () => Promise.all([a.e(9828), a.e(664)]).then(a.bind(a, 60664)),
          { loadableGenerated: { webpack: () => [60664] } }
        ),
        C = o()(() => a.e(230).then(a.bind(a, 30230)), {
          loadableGenerated: { webpack: () => [30230] },
        }),
        E = o()(() => a.e(8046).then(a.bind(a, 8046)), {
          loadableGenerated: { webpack: () => [8046] },
        }),
        S = o()(
          () =>
            Promise.all([a.e(4525), a.e(8147), a.e(5485)]).then(
              a.bind(a, 37873)
            ),
          { loadableGenerated: { webpack: () => [37873] } }
        ),
        Y = o()(() => a.e(7042).then(a.bind(a, 57042)), {
          loadableGenerated: { webpack: () => [57042] },
        });
      function Z() {
        let e = (0, c.useRouter)(),
          { asPath: r } = (0, c.useRouter)(),
          [a, s] = (0, d.useState)(!1),
          o = "Pricing & Fees | Supabase",
          u =
            "Explore Supabase fees and pricing information. Find our competitive pricing Plans, with no hidden pricing. We have a generous Free Plan for those getting started, and Pay As You Go for those scaling up.";
        (0, d.useEffect)(() => {
          setTimeout(() => {
            s(!0);
          }, 200);
        }, []),
          (0, d.useEffect)(() => {
            let e = r.split("#")[1];
            if (!e) return;
            let a = "desktop";
            window.matchMedia("screen and (max-width: 1024px)").matches &&
              (a = "mobile");
            let t = document.querySelector("#".concat(e, "-").concat(a));
            t && t.scrollIntoView({ behavior: "smooth" });
          }, [r]);
        let { isLoading: h, organizations: g } = (function () {
            let [e, r] = (0, d.useState)([]),
              [a, t] = (0, d.useState)(!0);
            return (
              (0, d.useEffect)(() => {
                let e = !0,
                  a = new AbortController();
                return (
                  (0, k.U)("".concat(v.T5, "/organizations"), {
                    signal: a.signal,
                  })
                    .then((e) => {
                      if (!e.ok) throw e;
                      return e;
                    })
                    .then((e) => e.json())
                    .then((a) => {
                      e && (r(a), t(!1));
                    })
                    .catch(() => {
                      t(!1);
                    }),
                  () => {
                    (e = !1), a.abort();
                  }
                );
              }, []),
              { organizations: e, isLoading: a }
            );
          })(),
          w = !h && g.length > 0;
        return (0, t.jsxs)(m.default, {
          children: [
            (0, t.jsx)(i.PB, {
              title: o,
              description: u,
              openGraph: {
                title: o,
                description: u,
                url: "https://supabase.com/".concat(e.pathname),
                images: [
                  { url: "https://supabase.com/images/og/supabase-og.png" },
                ],
              },
            }),
            (0, t.jsx)("div", {
              className: "relative z-10 pt-8 pb-4 xl:py-16",
              children: (0, t.jsx)("div", {
                className: "mx-auto max-w-7xl px-8 text-center sm:px-6 lg:px-8",
                children: (0, t.jsxs)("div", {
                  className: "mx-auto max-w-3xl space-y-2 lg:max-w-none",
                  children: [
                    (0, t.jsxs)("h1", {
                      className: "h1",
                      children: [
                        "Predictable pricing,",
                        (0, t.jsx)("br", { className: "block lg:hidden" }),
                        " designed to scale",
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "p text-lg leading-5",
                      children:
                        "Start building for free, collaborate with your team, then scale to millions of users",
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(N, { organizations: g, hasExistingOrganizations: w }),
            (0, t.jsx)("div", {
              className:
                "text-center mt-10 xl:mt-16 mx-auto max-w-lg flex flex-col gap-8",
              children: (0, t.jsxs)("div", {
                className: "flex justify-center gap-2",
                children: [
                  (0, t.jsx)("a", {
                    href: "#compare-plans",
                    children: (0, t.jsx)(x.z, {
                      size: "tiny",
                      type: "secondary",
                      iconRight: (0, t.jsx)(n.Z, { className: "w-3" }),
                      children: "Compare Plans",
                    }),
                  }),
                  (0, t.jsx)(x.z, {
                    size: "tiny",
                    type: "default",
                    asChild: !0,
                    iconRight: (0, t.jsx)(l.Z, { className: "w-4" }),
                    children: (0, t.jsx)("a", {
                      href: "/docs/guides/platform/org-based-billing",
                      target: "_blank",
                      children: "Learn how billing works",
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              id: "addon-compute",
              className:
                "container relative mx-auto px-4 lg:px-12 pt-16 md:pt-24 lg:pt-32 lg:pb-16",
              children: (0, t.jsx)(z, {}),
            }),
            (0, t.jsx)("div", {
              id: "addons",
              className:
                "sm:py-18 container relative mx-auto px-4 py-16 md:py-24 lg:px-12",
              children: (0, t.jsx)(C, {}),
            }),
            (0, t.jsx)(E, { organizations: g, hasExistingOrganizations: w }),
            (0, t.jsx)("div", {
              id: "faq",
              className: "border-t",
              children: (0, t.jsx)(S, {}),
            }),
            (0, t.jsx)(Y, {}),
            a &&
              (0, t.jsx)(p.default, {
                wrapper: "span",
                effect: "solid",
                backgroundColor: "hsl(var(--background-alternative-default))",
                textColor: "hsl(var(--foreground-light))",
                className: "!max-w-[320px] !px-3 whitespace-pre-line",
                uuid: "pricing-tt",
              }),
          ],
        });
      }
    },
    59951: function (e, r, a) {
      "use strict";
      a.d(r, {
        di: function () {
          return u;
        },
        e8: function () {
          return d;
        },
        fu: function () {
          return x;
        },
        mY: function () {
          return o;
        },
        rb: function () {
          return p;
        },
        sZ: function () {
          return c;
        },
        zz: function () {
          return m;
        },
      });
      var t = a(52322),
        n = a(99219),
        l = a(17644),
        i = a(2784),
        s = a(44382);
      let o = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY, {
          ref: r,
          className: (0, s.cn)(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-overlay text-foreground-light",
            a
          ),
          ...l,
        });
      });
      o.displayName = n.mY.displayName;
      let c = i.forwardRef((e, r) => {
        let { className: a, wrapperClassName: i, ...o } = e;
        return (0, t.jsxs)("div", {
          className: (0, s.cn)("flex items-center border-b px-3", i),
          "cmdk-input-wrapper": "",
          children: [
            (0, t.jsx)(l.Z, { className: "h-4 w-4 shrink-0 opacity-50" }),
            (0, t.jsx)(n.mY.Input, {
              ref: r,
              className: (0, s.cn)(
                "flex h-9 w-full rounded-md bg-transparent py-3 text-xs text outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0",
                a
              ),
              ...o,
            }),
          ],
        });
      });
      c.displayName = n.mY.Input.displayName;
      let d = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY.List, {
          ref: r,
          className: (0, s.cn)(
            "max-h-[300px] overflow-y-auto overflow-x-hidden",
            a
          ),
          ...l,
        });
      });
      d.displayName = n.mY.List.displayName;
      let p = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY.Empty, {
          ref: r,
          className: (0, s.cn)("py-6 text-center text-xs", a),
          ...l,
        });
      });
      p.displayName = n.mY.Empty.displayName;
      let x = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY.Group, {
          ref: r,
          className: (0, s.cn)(
            "overflow-hidden p-1 text-foreground-light [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-foreground-muted",
            "[&_[cmdk-group-heading]]:font-mono",
            "[&_[cmdk-group-heading]]:uppercase",
            "[&_[cmdk-group-heading]]:tracking-wider",
            a
          ),
          ...l,
        });
      });
      x.displayName = n.mY.Group.displayName;
      let m = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY.Separator, {
          ref: r,
          className: (0, s.cn)("-mx-1 h-px bg-border-overlay", a),
          ...l,
        });
      });
      m.displayName = n.mY.Separator.displayName;
      let u = i.forwardRef((e, r) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(n.mY.Item, {
          ref: r,
          className: (0, s.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[selected=true]:bg-overlay-hover data-[selected=true]:text-strong data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
            a
          ),
          ...l,
        });
      });
      u.displayName = n.mY.Item.displayName;
    },
    6746: function (e) {
      e.exports = {
        "popover-trigger-width": "popover_popover-trigger-width__O8y9q",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 3710, 9736, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 20726));
      }
    ),
      (_N_E = e.O());
  },
]);
