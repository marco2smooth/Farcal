(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1797, 7042, 5909, 6006, 1070, 2358],
  {
    75: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return n;
        },
      });
      var s = a(18358);
      function n(e, t, a) {
        var n;
        if ("string" == typeof e) {
          let l = document;
          t &&
            ((0, s.k)(!!t.current, "Scope provided, but no element detected."),
            (l = t.current)),
            a
              ? ((null !== (n = a[e]) && void 0 !== n) ||
                  (a[e] = l.querySelectorAll(e)),
                (e = a[e]))
              : (e = l.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    97804: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return i;
        },
      });
      var s = a(2784),
        n = a(75);
      let l = { some: 0, all: 1 };
      function i(e, { root: t, margin: a, amount: i, once: r = !1 } = {}) {
        let [o, c] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            if (!e.current || (r && o)) return;
            let s = { root: (t && t.current) || void 0, margin: a, amount: i };
            return (function (
              e,
              t,
              { root: a, margin: s, amount: i = "some" } = {}
            ) {
              let r = (0, n.I)(e),
                o = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let a = o.get(e.target);
                      if (!!a !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let a = t(e);
                          "function" == typeof a
                            ? o.set(e.target, a)
                            : c.unobserve(e.target);
                        } else a && (a(e), o.delete(e.target));
                      }
                    });
                  },
                  {
                    root: a,
                    rootMargin: s,
                    threshold: "number" == typeof i ? i : l[i],
                  }
                );
              return r.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), r ? void 0 : () => c(!1)), s);
          }, [t, e, a, r, i]),
          o
        );
      }
    },
    71519: function (e, t, a) {
      "use strict";
      a.d(t, {
        VY: function () {
          return Z;
        },
        aV: function () {
          return S;
        },
        fC: function () {
          return _;
        },
        xz: function () {
          return C;
        },
      });
      var s = a(7560),
        n = a(2784),
        l = a(38930),
        i = a(72422),
        r = a(19106),
        o = a(80254),
        c = a(57915),
        d = a(97368),
        u = a(68622),
        p = a(62825);
      let m = "Tabs",
        [h, g] = (0, i.b)(m, [r.Pc]),
        x = (0, r.Pc)(),
        [b, f] = h(m),
        v = (0, n.forwardRef)((e, t) => {
          let {
              __scopeTabs: a,
              value: l,
              onValueChange: i,
              defaultValue: r,
              orientation: o = "horizontal",
              dir: m,
              activationMode: h = "automatic",
              ...g
            } = e,
            x = (0, d.gm)(m),
            [f, v] = (0, u.T)({ prop: l, onChange: i, defaultProp: r });
          return (0, n.createElement)(
            b,
            {
              scope: a,
              baseId: (0, p.M)(),
              value: f,
              onValueChange: v,
              orientation: o,
              dir: x,
              activationMode: h,
            },
            (0, n.createElement)(
              c.WV.div,
              (0, s.Z)({ dir: x, "data-orientation": o }, g, { ref: t })
            )
          );
        }),
        j = (0, n.forwardRef)((e, t) => {
          let { __scopeTabs: a, loop: l = !0, ...i } = e,
            o = f("TabsList", a),
            d = x(a);
          return (0, n.createElement)(
            r.fC,
            (0, s.Z)({ asChild: !0 }, d, {
              orientation: o.orientation,
              dir: o.dir,
              loop: l,
            }),
            (0, n.createElement)(
              c.WV.div,
              (0, s.Z)(
                { role: "tablist", "aria-orientation": o.orientation },
                i,
                { ref: t }
              )
            )
          );
        }),
        w = (0, n.forwardRef)((e, t) => {
          let { __scopeTabs: a, value: i, disabled: o = !1, ...d } = e,
            u = f("TabsTrigger", a),
            p = x(a),
            m = N(u.baseId, i),
            h = k(u.baseId, i),
            g = i === u.value;
          return (0, n.createElement)(
            r.ck,
            (0, s.Z)({ asChild: !0 }, p, { focusable: !o, active: g }),
            (0, n.createElement)(
              c.WV.button,
              (0, s.Z)(
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": g,
                  "aria-controls": h,
                  "data-state": g ? "active" : "inactive",
                  "data-disabled": o ? "" : void 0,
                  disabled: o,
                  id: m,
                },
                d,
                {
                  ref: t,
                  onMouseDown: (0, l.M)(e.onMouseDown, (e) => {
                    o || 0 !== e.button || !1 !== e.ctrlKey
                      ? e.preventDefault()
                      : u.onValueChange(i);
                  }),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) && u.onValueChange(i);
                  }),
                  onFocus: (0, l.M)(e.onFocus, () => {
                    let e = "manual" !== u.activationMode;
                    g || o || !e || u.onValueChange(i);
                  }),
                }
              )
            )
          );
        }),
        y = (0, n.forwardRef)((e, t) => {
          let {
              __scopeTabs: a,
              value: l,
              forceMount: i,
              children: r,
              ...d
            } = e,
            u = f("TabsContent", a),
            p = N(u.baseId, l),
            m = k(u.baseId, l),
            h = l === u.value,
            g = (0, n.useRef)(h);
          return (
            (0, n.useEffect)(() => {
              let e = requestAnimationFrame(() => (g.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, n.createElement)(o.z, { present: i || h }, ({ present: a }) =>
              (0, n.createElement)(
                c.WV.div,
                (0, s.Z)(
                  {
                    "data-state": h ? "active" : "inactive",
                    "data-orientation": u.orientation,
                    role: "tabpanel",
                    "aria-labelledby": p,
                    hidden: !a,
                    id: m,
                    tabIndex: 0,
                  },
                  d,
                  {
                    ref: t,
                    style: {
                      ...e.style,
                      animationDuration: g.current ? "0s" : void 0,
                    },
                  }
                ),
                a && r
              )
            )
          );
        });
      function N(e, t) {
        return `${e}-trigger-${t}`;
      }
      function k(e, t) {
        return `${e}-content-${t}`;
      }
      let _ = v,
        S = j,
        C = w,
        Z = y;
    },
    35167: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/storage",
        function () {
          return a(11127);
        },
      ]);
    },
    57042: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(52322),
        n = a(39097),
        l = a.n(n),
        i = a(44382),
        r = a(29982);
      t.default = (e) => {
        let { darkerBg: t, className: a } = e;
        return (0, s.jsxs)("div", {
          className: (0, i.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            a
          ),
          children: [
            (0, s.jsx)("div", {
              className: "col-span-12",
              children: (0, s.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, s.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, s.jsx)(r.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, s.jsx)(l(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, s.jsx)(r.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, s.jsx)(l(), {
                    href: "/contact/sales",
                    children: "Request a demo",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    53580: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var s = a(52322);
      (0, a(55132).Z)("CornerRightUp", [
        ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
        ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }],
      ]);
      var n = a(5632),
        l = a(2784),
        i = a(29982),
        r = a(93419),
        o = a(41401);
      a(31395);
      var c = a(97804),
        d = a(96577),
        u = a.n(d),
        p = a(59582),
        m = a(39097),
        h = a.n(m),
        g = function (e) {
          let { url: t = "", label: a, ...n } = e;
          return (0, s.jsx)(h(), {
            href: t,
            className:
              "text-foreground-light hover:text-foreground mt-3 block cursor-pointer text-sm",
            ...n,
            children: (0, s.jsxs)("div", {
              className: "group flex items-center gap-1",
              children: [
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: "".concat(a, " about ").concat(t),
                }),
                (0, s.jsx)("span", { children: a }),
                (0, s.jsx)("div", {
                  className: "transition-all group-hover:ml-0.5",
                  children: (0, s.jsx)(p.Z, { size: 14, strokeWidth: 2 }),
                }),
              ],
            }),
          });
        },
        x = a(62842),
        b = a.n(x),
        f = function (e) {
          let t = (0, l.useRef)(null),
            a = (0, c.Y)(t, { margin: "75%", once: !0 }),
            { basePath: d } = (0, n.useRouter)(),
            [p, m] = (0, l.useState)(void 0),
            [h, x] = (0, l.useState)(void 0),
            [f, v] = (0, l.useState)(0);
          function j(e) {
            v(e), p.slideTo(e), h.slideTo(e);
          }
          return (
            i.z,
            (0, s.jsxs)("div", {
              className: "grid grid-cols-12",
              ref: t,
              children: [
                (0, s.jsx)("div", {
                  className: "col-span-12 w-full lg:col-span-6",
                  children: (0, s.jsxs)("div", {
                    className: "sbui-tabs--alt col-span-12 lg:col-span-7",
                    children: [
                      (0, s.jsx)("div", {
                        className: e.altTabView ? "hidden" : "block",
                        children: (0, s.jsx)(r.Z, {
                          scrollable: !0,
                          type: e.altTabView ? "underlined" : "pills",
                          activeId: f.toString(),
                          onChange: (e) => j(Number(e)),
                          children: e.content.map((e, t) =>
                            (0, s.jsx)(
                              r.Z.Panel,
                              {
                                label: e.label ? e.label : e.title,
                                id: t.toString(),
                                children: (0, s.jsx)("span", {}),
                              },
                              t
                            )
                          ),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "overflow-hidden rounded-md border border-control bg-border-stronger ".concat(
                            b()["gradient-bg"]
                          ),
                        children: (0, s.jsx)(o.tq, {
                          onSwiper: m,
                          style: {
                            zIndex: 0,
                            overflow: "auto",
                            overflowX: "hidden",
                          },
                          initialSlide: 0,
                          spaceBetween: 0,
                          slidesPerView: 1,
                          speed: 300,
                          allowTouchMove: !1,
                          children: e.content.map((e, t) =>
                            (0, s.jsxs)(
                              o.o5,
                              {
                                children: [
                                  e.img_url &&
                                    (0, s.jsx)(u(), {
                                      src: "".concat(d).concat(e.img_url),
                                      alt: e.title,
                                      layout: "responsive",
                                      width: "1460",
                                      height: "960",
                                    }),
                                  a &&
                                    e.youtube_id &&
                                    (0, s.jsx)("div", {
                                      className: "relative w-full",
                                      style: { padding: "56.25% 0 0 0" },
                                      children: (0, s.jsx)("iframe", {
                                        title: "Demo video showcasing Supabase",
                                        className:
                                          "absolute h-full w-full rounded-b-md",
                                        src: "https://www.youtube-nocookie.com/embed/"
                                          .concat(e.youtube_id, "?playlist=")
                                          .concat(
                                            e.youtube_id,
                                            "&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1"
                                          ),
                                        style: { top: 0, left: 0 },
                                        frameBorder: "0",
                                        allow:
                                          "autoplay; modestbranding; encrypted-media",
                                        loading: "lazy",
                                      }),
                                    }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-5 xl:col-start-8",
                  children: [
                    (0, s.jsx)("div", {
                      className: "sbui-tabs--underline-alt ".concat(
                        e.altTabView ? "block" : "hidden",
                        " mb-3"
                      ),
                      children: (0, s.jsx)(r.Z, {
                        scrollable: !0,
                        type: "underlined",
                        size: "small",
                        activeId: f.toString(),
                        onChange: (e) => j(Number(e)),
                        children: e.content.map((e, t) =>
                          (0, s.jsx)(
                            r.Z.Panel,
                            {
                              label: e.label ? e.label : e.title,
                              id: t.toString(),
                            },
                            t
                          )
                        ),
                      }),
                    }),
                    (0, s.jsxs)(o.tq, {
                      onSwiper: x,
                      initialSlide: 0,
                      speed: 300,
                      allowTouchMove: !1,
                      autoHeight: !0,
                      children: [
                        e.content.map((e, t) =>
                          (0, s.jsxs)(
                            o.o5,
                            {
                              className: "py-4",
                              children: [
                                (0, s.jsx)("h4", {
                                  className: "text-foreground mb-4 text-xl",
                                  children: e.title,
                                }),
                                (0, s.jsx)("p", {
                                  className: "p text-base",
                                  children: e.text,
                                }),
                                !!e.url &&
                                  (0, s.jsx)(g, {
                                    label: e.cta ? e.cta : "View documentation",
                                    url: e.url,
                                  }),
                              ],
                            },
                            t
                          )
                        ),
                        e.footer &&
                          (0, s.jsx)("div", {
                            className: "my-8",
                            children: e.footer,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    91935: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(52322),
        n = a(2784),
        l = a(41401),
        i = a(29982),
        r = a(93419),
        o = a(74719),
        c = a(97939);
      a(31395);
      var d = a(83940),
        u = a(39097),
        p = a.n(u);
      t.default = function (e) {
        let [t, a] = (0, n.useState)(void 0),
          [u, m] = (0, n.useState)(void 0),
          [h, g] = (0, n.useState)(0);
        return (
          i.z,
          (0, s.jsxs)("div", {
            className:
              "sbui-tabs--alt col-span-12 space-y-2 lg:col-span-6 lg:col-start-7",
            children: [
              (0, s.jsx)(r.Z, {
                scrollable: !0,
                activeId: h.toString(),
                onChange: (e) => {
                  var a;
                  g((a = Number(e))), t.slideTo(a), u.slideTo(a);
                },
                type: "pills",
                children: e.content.map((e, t) =>
                  (0, s.jsx)(
                    r.Z.Panel,
                    {
                      label: e.title,
                      id: t.toString(),
                      children: (0, s.jsx)("span", {}),
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)(l.tq, {
                onSwiper: a,
                style: { zIndex: 0 },
                initialSlide: h,
                spaceBetween: 0,
                slidesPerView: 1,
                speed: 300,
                autoHeight: !0,
                allowTouchMove: !1,
                children: e.content.map((e, t) =>
                  (0, s.jsx)(
                    l.o5,
                    {
                      children: (0, s.jsx)(
                        c.Z,
                        { lang: e.lang, children: e.code },
                        t
                      ),
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)("div", {
                className:
                  "bg-surface-100 border-default overflow-hidden rounded-md border p-8",
                children: (0, s.jsx)(l.tq, {
                  onSwiper: m,
                  style: { zIndex: 0 },
                  initialSlide: 0,
                  spaceBetween: 0,
                  slidesPerView: 1,
                  direction: "horizontal",
                  speed: 300,
                  allowTouchMove: !1,
                  children: e.content.map((e, t) =>
                    (0, s.jsxs)(
                      l.o5,
                      {
                        children: [
                          (0, s.jsx)("p", {
                            children: (0, s.jsx)("span", {
                              className: "text-foreground mb-4 block text-lg",
                              children: e.detail_title,
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "p mb-6 block",
                            children: e.detail_text,
                          }),
                          (0, s.jsxs)(o.Z, {
                            className: "justify-between",
                            children: [
                              e.url &&
                                (0, s.jsx)(i.z, {
                                  asChild: !0,
                                  type: "default",
                                  children: (0, s.jsx)(p(), {
                                    href: e.url,
                                    as: e.url,
                                    className: "ml-px",
                                    children: "View documentation",
                                  }),
                                }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "p mr-4",
                                    children: e.badges_label,
                                  }),
                                  e.badges &&
                                    e.badges.map((e, t) =>
                                      (0, s.jsx)(d.C, { children: e }, e)
                                    ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          })
        );
      };
    },
    75909: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(52322);
      t.default = function (e) {
        let { icon: t, title: a, text: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            t && (0, s.jsx)("div", { className: "p mb-2", children: t }),
            (0, s.jsx)("h4", {
              className: "text-foreground mb-4 text-base",
              children: a,
            }),
            (0, s.jsx)("p", { className: "p", children: n }),
          ],
        });
      };
    },
    21221: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(52322);
      t.default = function (e) {
        let { icon: t, color: a } = e;
        return (0, s.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            a && "black" !== a
              ? ""
              : "bg-foreground text-background-alternative",
            a && "gray" === a ? "bg-border-strong text-foreground-light" : "",
            a && "green" === a ? "bg-brand text-brand-100" : "",
            a && "alt" === a ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, s.jsx)("svg", {
            className: [
              "h-5 w-5",
              a && "black" !== a ? "" : "stroke-background",
              a && "gray" === a ? "stroke-foreground-light" : "",
              a && "green" === a ? "stroke-brand-200" : "",
              a && "alt" === a ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: t,
            }),
          }),
        });
      };
    },
    14528: function (e, t, a) {
      "use strict";
      var s = a(52322);
      a(2784);
      var n = a(44382),
        l = a(39097),
        i = a.n(l),
        r = a(82577),
        o = a(37637);
      t.Z = function (e) {
        let { activePage: t } = e;
        return (0, s.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, s.jsx)(o.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(r.RB).map((e) => {
              let a = e[1],
                l = a.name === r.$7.AUTHENTICATION;
              return (0, s.jsxs)(
                i(),
                {
                  className: (0, n.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    a.name === t && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    l ? "auth" : a.name.toLowerCase().replace(" ", "-")
                  ),
                  children: [
                    (0, s.jsx)("svg", {
                      className:
                        "h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: a.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, s.jsx)("p", { children: l ? "Auth" : a.name }),
                  ],
                },
                a.name
              );
            }),
          }),
        });
      };
    },
    6322: function (e, t, a) {
      "use strict";
      var s = a(52322),
        n = a(39097),
        l = a.n(n),
        i = a(29982),
        r = a(21221),
        o = a(47048);
      t.Z = (e) =>
        (0, s.jsx)("div", {
          className:
            "container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-28 xl:px-20",
          children: (0, s.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, s.jsxs)("div", {
                className: "col-span-12 space-y-8 lg:col-span-5",
                children: [
                  e.callout && e.callout,
                  (0, s.jsxs)("div", {
                    children: [
                      e.icon || e.title
                        ? (0, s.jsxs)("div", {
                            className: "mb-4 flex items-center gap-3",
                            children: [
                              e.icon && (0, s.jsx)(r.default, { icon: e.icon }),
                              e.title &&
                                (0, s.jsx)(
                                  "span",
                                  {
                                    className: "text-foreground",
                                    children: e.title,
                                  },
                                  "product-name-".concat(e.title)
                                ),
                            ],
                          })
                        : null,
                      (0, s.jsx)(
                        "h1",
                        { className: "h1", children: e.h1 },
                        "h1"
                      ),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, t) =>
                        (0, s.jsx)(
                          "p",
                          { className: "p lg:text-lg", children: e },
                          t
                        )
                      ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-row md:flex-row md:items-center",
                    children: [
                      (0, s.jsx)(i.z, {
                        asChild: !0,
                        size: "medium",
                        children: (0, s.jsx)(l(), {
                          href: "https://supabase.com/dashboard",
                          as: "https://supabase.com/dashboard",
                          children: "Start a project",
                        }),
                      }),
                      e.documentation_url &&
                        (0, s.jsx)(i.z, {
                          asChild: !0,
                          type: "default",
                          size: "medium",
                          icon: (0, s.jsx)(o.Z, {}),
                          children: (0, s.jsx)(l(), {
                            href: e.documentation_url,
                            as: e.documentation_url,
                            className: "ml-2",
                            children: "See documentation",
                          }),
                        }),
                    ],
                  }),
                  e.footer &&
                    (0, s.jsx)("div", {
                      className: "mb-4",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, s.jsx)("div", {
                  className:
                    "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
            ],
          }),
        });
    },
    11127: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        });
      var s = a(52322),
        n = [
          {
            lang: "js",
            title: "Upload a file",
            code: "\n// Upload an image to the \"avatars\" bucket\nconst spaceCat = event.target.files[0]\nconst { data, error } = await supabase\n  .storage\n  .from('avatars')\n  .upload('space-cat.png', spaceCat)\n  \n  \n  \n\n\n  ",
          },
          {
            lang: "js",
            title: "Download a file",
            code: "\n// Download the \"space-cat.png\" image from the \"avatars\" bucket\nconst { data, error } = await supabase\n    .storage\n    .from('avatars')\n    .download('space-cat.png')\n\n\n\n\n\n        \n  ",
          },
          {
            lang: "js",
            title: "List files",
            code: "\n// List all the files in the \"avatars\" bucket\nconst { data, error } = await supabase\n    .storage\n    .from('avatars')\n    .list()\n\n\n\n\n\n        \n  ",
          },
          {
            lang: "js",
            title: "Move and rename files",
            code: "\n// Move and rename files\nconst { data, error } = await supabase\n  .storage\n  .from('avatars')\n  .move('public/space-cat.png', 'private/space-cat.png')\n\n\n\n\n\n\n        \n  ",
          },
          {
            lang: "js",
            title: "Delete files",
            code: "\n// Delete a list of files\nconst { data, error } = await supabase\n  .storage\n  .from('avatars')\n  .remove([ 'avatar1.png', 'avatar2.png' ])\n\n\n\n\n\n\n\n        \n  ",
          },
        ],
        l = JSON.parse(
          '[{"title":"File previews","label":"File previews","img_url":"/images/product/storage/dashboard-view/file-previews.png","text":"Preview any media type, including video and audio."},{"title":"Column view","label":"Column view","img_url":"/images/product/storage/dashboard-view/column-view.png","text":"Slick Miller-column navigation for rapid folder exploration."},{"title":"List view","label":"List view","img_url":"/images/product/storage/dashboard-view/list-view.png","text":"List View to find detailed File metadata at a glance."},{"title":"Multi select actions","label":"Multi select actions","img_url":"/images/product/storage/dashboard-view/multi-column-selection.png","text":"Multi-import and multi-export. Select multiple files from multiple folders."},{"title":"Path navigator","label":"Path navigator","img_url":"/images/product/storage/dashboard-view/path-setting.png","text":"If you know the exact path of your file, type it in and navigate directly."}]'
        ),
        i = [
          {
            lang: "sql",
            title: "Public access to a bucket",
            code: "create policy \"Public Access\" \non storage.objects for all \nusing ( bucket_id = 'avatars' );\n    ",
            detail_title: "Allow public CRUD access to a bucket",
            detail_text:
              "This will allow any user access to the bucket named 'avatars'",
            badges_label: "",
            badges: [],
            url: "",
          },
          {
            lang: "sql",
            title: "Public access to a folder",
            code: "create policy \"Public access to a folder\" \non storage.objects for all \nusing (\n  bucket_id = 'avatars' \n  and (storage.foldername(name))[1] = 'public' \n);\n    ",
            detail_title: "Allow public CRUD access to a folder in a bucket",
            detail_text:
              "This will allow any user access to the folder named 'public' in the bucket 'avatars'",
            badges_label: "",
            badges: [],
            url: "",
          },
          {
            lang: "sql",
            title: "Authenticated access to a bucket",
            code: "create policy \"Logged in access\" \non storage.objects \nfor all using (\n  bucket_id = 'avatars' \n  and auth.role() = 'authenticated'\n);",
            detail_title: "Allow any authenticated user access to a folder",
            detail_text:
              "This will allow any authenticated user access to the folder named 'authenticated' in the bucket 'avatars'",
            badges_label: "",
            badges: [],
            url: "",
          },
          {
            lang: "sql",
            title: "Individual access to a file",
            code: "create policy \"Individual access\" \non storage.objects for all \nusing (\n  bucket_id = 'avatars' \n  and name = 'folder/only_uid.jpg' \n  and (select auth.uid()) = 'd8c7bce9-cfeb-497b-bd61-e66ce2cbdaa2'\n);",
            detail_title: "Allow a specific user access to a file",
            detail_text:
              "This will allow a specific user based on the user's UID access to a file named 'only_uid.jpg'",
            badges_label: "",
            badges: [],
            url: "",
          },
        ],
        r = a(89460),
        o = a(51929),
        c = a(55132);
      let d = (0, c.Z)("Wifi", [
        ["path", { d: "M12 20h.01", key: "zekei9" }],
        ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
        ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
        ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
      ]);
      var u = a(99);
      let p = (0, c.Z)("Shuffle", [
        [
          "path",
          {
            d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",
            key: "1wmou1",
          },
        ],
        ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
        ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
        [
          "path",
          { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" },
        ],
        ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
      ]);
      var m = a(55351),
        h = a(39097),
        g = a.n(h),
        x = a(5632),
        b = a(82577),
        f = a(20194),
        v = a(29982),
        j = a(53580),
        w = a(91935),
        y = a(57042),
        N = a(81553),
        k = a(75909),
        _ = a(27478),
        S = a(37637),
        C = a(21221),
        Z = a(14528),
        z = a(66176),
        M = a(6322),
        T = function () {
          let { basePath: e } = (0, x.useRouter)(),
            t = "Storage | Store any digital content",
            a =
              "An open source S3 Compatible Object Store with unlimited scalability, for any file type.";
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(m.PB, {
                title: t,
                description: a,
                openGraph: {
                  title: t,
                  description: a,
                  url: "https://supabase.com/storage",
                  images: [
                    {
                      url: "https://supabase.com".concat(
                        e,
                        "/images/product/storage/storage-og.jpg"
                      ),
                    },
                  ],
                },
              }),
              (0, s.jsxs)(_.default, {
                children: [
                  (0, s.jsx)(Z.Z, { activePage: b.$7.STORAGE }),
                  (0, s.jsx)(M.Z, {
                    icon: r.Z.storage.icon,
                    title: r.Z.storage.name,
                    h1: [
                      (0, s.jsxs)(
                        "span",
                        {
                          children: [
                            "Store and serve",
                            (0, s.jsx)("br", {}),
                            " any type of digital content",
                          ],
                        },
                        0
                      ),
                    ],
                    subheader: [
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          "An open source ",
                          (0, s.jsx)("b", { children: "S3 Compatible" }),
                          " Object Store, with unlimited scalability, for any file type.",
                        ],
                      }),
                      "With custom policies and permissions that are familiar and easy to implement.",
                    ],
                    image: [
                      (0, s.jsx)(f.Z, {
                        src: {
                          light: "".concat(
                            e,
                            "/images/product/storage/header--light.png"
                          ),
                          dark: "".concat(
                            e,
                            "/images/product/storage/header--dark.png"
                          ),
                        },
                        alt: "storage header",
                        layout: "responsive",
                        width: "1386",
                        height: "1067",
                      }),
                    ],
                    documentation_url: "/docs/guides/storage",
                  }),
                  (0, s.jsx)(S.default, {
                    children: (0, s.jsxs)("div", {
                      className: "grid grid-cols-12",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "col-span-12 mb-10 lg:col-span-3 lg:mb-0",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "p mb-4 flex items-center space-x-2",
                              children: [
                                (0, s.jsx)(C.default, {
                                  icon: r.Z.storage.icon,
                                }),
                                (0, s.jsx)(o.Z, {}),
                                (0, s.jsx)(C.default, {
                                  icon: r.Z.authentication.icon,
                                }),
                                (0, s.jsx)(o.Z, {}),
                                (0, s.jsx)(C.default, {
                                  icon: r.Z.database.icon,
                                }),
                              ],
                            }),
                            (0, s.jsx)("h4", {
                              className: "h4",
                              children: "Interoperable",
                            }),
                            (0, s.jsx)("p", {
                              className: "p",
                              children:
                                "Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "col-span-12 mb-10 lg:col-span-3 lg:col-start-5 lg:mb-0",
                          children: [
                            (0, s.jsx)("div", {
                              className: "mb-4 flex items-center space-x-2",
                              children: (0, s.jsx)(C.default, {
                                icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                              }),
                            }),
                            (0, s.jsx)("h4", {
                              className: "h4",
                              children: "Lightning fast",
                            }),
                            (0, s.jsx)("p", {
                              className: "p",
                              children:
                                "Thin API server layer that leverages Postgres' permissions and performance.",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "col-span-12 lg:col-span-3 lg:col-start-9",
                          children: [
                            (0, s.jsx)("div", {
                              className: "mb-4 flex items-center space-x-2",
                              children: (0, s.jsx)(C.default, {
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                              }),
                            }),
                            (0, s.jsx)("h4", {
                              className: "h4",
                              children: "Multiple Protocol Support",
                            }),
                            (0, s.jsx)("p", {
                              className: "p",
                              children:
                                "S3, Resumable Uploads and Standard Uploads. Enterprise-level scalability.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)(S.default, {
                    className: "pt-16",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mb-16 block",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "h3",
                            children: "Sleek dashboard for managing your media",
                          }),
                          (0, s.jsx)("p", {
                            className: "p text-lg",
                            children:
                              "A complete Object Explorer so that any of your team can use.",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children:
                              "Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.",
                          }),
                        ],
                      }),
                      (0, s.jsx)(j.default, {
                        content: l,
                        footer: (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(
                              "span",
                              {
                                className: "p mb-4 block",
                                children: "Check out our example app",
                              },
                              "check-out"
                            ),
                            (0, s.jsx)(
                              N.Z,
                              {
                                type: "example",
                                products: ["database", "auth", "storage"],
                                title: "Profile management example",
                                description:
                                  "Update a user account with public profile information, including uploading a profile image.",
                                author: "supabase",
                                author_url: "https://github.com/supabase",
                                author_img:
                                  "https://avatars.githubusercontent.com/u/54469796",
                                repo_name: "nextjs-user-management",
                                repo_url:
                                  "https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-user-management",
                                vercel_deploy_url:
                                  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Ftree%2Fmaster%2Fexamples%2Fuser-management%2Fnextjs-user-management&project-name=supabase-nextjs-user-management&repository-name=supabase-nextjs-user-management&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Ftree%2Fmaster%2Fexamples%2Fuser-management%2Fnextjs-user-management",
                                demo_url: "",
                              },
                              "example"
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(S.default, {
                    className: "pt-0",
                    children: (0, s.jsx)(z.default, {
                      title: "Simple and convenient APIs",
                      content: n,
                      text: [
                        (0, s.jsx)(
                          "p",
                          {
                            children:
                              "Built from the ground up for interoperable authentication.",
                          },
                          0
                        ),
                        (0, s.jsx)(
                          "p",
                          {
                            children:
                              "Fast and easy to implement using our powerful library clients.",
                          },
                          1
                        ),
                      ],
                      footer: [
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "my-8 grid grid-cols-12 gap-8 lg:gap-0 xl:gap-16",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "col-span-6 lg:col-span-12 lg:mb-8 xl:col-span-4 xl:mb-0",
                                children: [
                                  (0, s.jsx)(k.default, {
                                    icon: (0, s.jsx)(d, {}),
                                    title: "CDN",
                                    text: "Serve from over 285 cities globally to reduce latency.",
                                  }),
                                  (0, s.jsx)(v.z, {
                                    asChild: !0,
                                    size: "small",
                                    type: "default",
                                    className: "mt-4",
                                    icon: (0, s.jsx)(u.Z, {}),
                                    children: (0, s.jsx)(g(), {
                                      href: "/docs/guides/storage/cdn/fundamentals",
                                      children: "Explore docs",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "col-span-6 lg:col-span-12 xl:col-span-4",
                                children: [
                                  (0, s.jsx)(k.default, {
                                    icon: (0, s.jsx)(p, {}),
                                    title:
                                      "Image Optimizations and Transformations",
                                    text: "Resize and compress your media files on the fly.",
                                  }),
                                  (0, s.jsx)(v.z, {
                                    asChild: !0,
                                    size: "small",
                                    type: "default",
                                    className: "mt-4",
                                    icon: (0, s.jsx)(u.Z, {}),
                                    children: (0, s.jsx)(g(), {
                                      href: "/docs/guides/storage/serving/image-transformations",
                                      children: "Explore docs",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          0
                        ),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "relative",
                    children: (0, s.jsxs)("div", {
                      className: "section--masked",
                      children: [
                        (0, s.jsx)("div", {
                          className: "section--bg-masked",
                          children: (0, s.jsx)("div", {
                            className: "section--bg border-t border-control",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "section-container pt-12 pb-0",
                          children: (0, s.jsx)("div", {
                            className: "overflow-x-hidden",
                            children: (0, s.jsx)(S.default, {
                              children: (0, s.jsxs)("div", {
                                className: "grid grid-cols-12 lg:gap-16",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "col-span-12 mb-8 lg:col-span-5",
                                    children: [
                                      (0, s.jsxs)("h2", {
                                        className: "h3",
                                        children: [
                                          "Integrates natively ",
                                          (0, s.jsx)("br", {}),
                                          "with Supabase Auth",
                                        ],
                                      }),
                                      (0, s.jsx)("p", {
                                        className: "p",
                                        children:
                                          "Using Postgres Row Level Security to create Object access rules.",
                                      }),
                                      (0, s.jsx)("p", {
                                        className: "p",
                                        children:
                                          "Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.",
                                      }),
                                      (0, s.jsx)(v.z, {
                                        asChild: !0,
                                        size: "small",
                                        type: "default",
                                        className: "mt-4",
                                        icon: (0, s.jsx)(u.Z, {}),
                                        children: (0, s.jsx)(g(), {
                                          href: "/docs/reference/javascript/storage-createbucket",
                                          children: "Explore documentation",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "col-span-12 lg:col-span-6 lg:col-start-7",
                                    children: (0, s.jsx)(w.default, {
                                      content: i,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(y.default, {}),
                ],
              }),
            ],
          });
        };
    },
    47048: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(55132).Z)("BookOpen", [
        [
          "path",
          { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" },
        ],
        [
          "path",
          { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
        ],
      ]);
    },
    20194: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = a(52322);
      a(96813);
      var n = a(2784),
        l = a(96577),
        i = a.n(l),
        r = a(22965),
        o = a(30175),
        c = a(44382),
        d = a(72170),
        u = (e) => {
          let { img: t } = e;
          return (0, s.jsx)("figure", {
            className: " [&_img]:rounded-md [&_img]:border [&_img]:bg-default ",
            children: t,
          });
        };
      let p = (e) => {
        switch (e) {
          case "left":
            return "text-left";
          case "right":
            return "text-right";
          default:
            return "text-center";
        }
      };
      var m = (e) => {
        let { src: t, alt: a = "", zoomable: l, ...m } = e,
          [h, g] = (0, n.useState)(!1),
          { resolvedTheme: x } = (0, r.F)(),
          b = (0, o.Gc)(),
          f = l ? d.Z : "span",
          v =
            "string" == typeof t
              ? t
              : (null == x ? void 0 : x.includes("dark"))
              ? t.dark
              : t.light;
        return ((0, n.useEffect)(() => {
          g(!0);
        }, []),
        h)
          ? (0, s.jsxs)("figure", {
              className: (0, c.cn)(
                "next-image--dynamic-fill",
                m.containerClassName
              ),
              children: [
                (0, s.jsx)(f, {
                  ...(l ? { ZoomContent: u, zoomMargin: b ? 20 : 80 } : void 0),
                  children: (0, s.jsx)(
                    i(),
                    {
                      alt: a,
                      src: v,
                      sizes: l
                        ? "(max-width: 768px) 200vw, (max-width: 1200px) 120vw, 200vw"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw",
                      className: m.className,
                      style: m.style,
                      ...m,
                    },
                    x
                  ),
                }),
                m.caption &&
                  (0, s.jsx)("figcaption", {
                    className: (0, c.cn)(p(m.captionAlign)),
                    children: m.caption,
                  }),
              ],
            })
          : null;
      };
    },
    74719: function (e, t, a) {
      "use strict";
      var s = a(52322);
      a(2784),
        (t.Z = function (e) {
          let {
            direction: t,
            size: a = 2,
            className: n,
            block: l,
            style: i,
            minus: r,
            children: o,
          } = e;
          return (0, s.jsx)("div", { className: n, style: i, children: o });
        });
    },
    93419: function (e, t, a) {
      "use strict";
      var s = a(52322),
        n = a(71519),
        l = a(2784),
        i = a(1903);
      let r = (e) => {
        var t, a, r;
        let {
            defaultActiveId: o,
            activeId: c,
            type: d = "pills",
            size: u = "tiny",
            block: p,
            onChange: m,
            onClick: h,
            scrollable: g,
            wrappable: x,
            addOnBefore: b,
            addOnAfter: f,
            listClassNames: v,
            baseClassNames: j,
            refs: w,
            children: y,
          } = e,
          N = l.Children.toArray(y),
          [k, _] = (0, l.useState)(
            null !== (r = null != c ? c : o) && void 0 !== r
              ? r
              : null == N
              ? void 0
              : null === (a = N[0]) || void 0 === a
              ? void 0
              : null === (t = a.props) || void 0 === t
              ? void 0
              : t.id
          );
        (0, l.useMemo)(() => {
          c && c !== k && _(c);
        }, [c]);
        let S = (0, i.Z)("tabs");
        function C(e) {
          null == h || h(e), e !== k && (null == m || m(e), _(e));
        }
        let Z = [S[d].list];
        return (
          g && Z.push(S.scrollable),
          x && Z.push(S.wrappable),
          v && Z.push(v),
          (0, s.jsxs)(n.fC, {
            value: k,
            className: [S.base, j].join(" "),
            ref: null == w ? void 0 : w.base,
            children: [
              (0, s.jsxs)(n.aV, {
                className: Z.join(" "),
                ref: null == w ? void 0 : w.list,
                children: [
                  b,
                  N.map((e) => {
                    let t = k === e.props.id,
                      a = [S[d].base, S.size[u]];
                    return (
                      t ? a.push(S[d].active) : a.push(S[d].inactive),
                      p && a.push(S.block),
                      (0, s.jsxs)(
                        n.xz,
                        {
                          onKeyDown: (t) => {
                            "Enter" === t.key &&
                              (t.preventDefault(), C(e.props.id));
                          },
                          onClick: () => C(e.props.id),
                          value: e.props.id,
                          className: a.join(" "),
                          children: [
                            e.props.icon,
                            (0, s.jsx)("span", { children: e.props.label }),
                            e.props.iconRight,
                          ],
                        },
                        "".concat(e.props.id, "-tab-button")
                      )
                    );
                  }),
                  f,
                ],
              }),
              N,
            ],
          })
        );
      };
      (r.Panel = (e) => {
        let { children: t, id: a, className: l } = e,
          r = (0, i.Z)("tabs");
        return (0, s.jsx)(n.VY, {
          value: a,
          className: [r.content, l].join(" "),
          children: t,
        });
      }),
        (t.Z = r);
    },
    31395: function () {},
    62842: function (e) {
      e.exports = { "gradient-bg": "ImageCarousel_gradient-bg__UZBzE" };
    },
  },
  function (e) {
    e.O(
      0,
      [
        5126, 2787, 2251, 4697, 977, 9573, 1401, 5669, 7478, 6999, 1553, 6176,
        2888, 9774, 179,
      ],
      function () {
        return e((e.s = 35167));
      }
    ),
      (_N_E = e.O());
  },
]);
