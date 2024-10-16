(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4724],
  {
    4879: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return u;
        },
      });
      var o = a(18358),
        s = a(38809),
        n = a(21448);
      function l() {
        let e = !1,
          t = new Set(),
          a = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(a, s) {
              (0, o.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let l = [];
              return (
                t.forEach((e) => {
                  l.push((0, n.d)(e, a, { transitionOverride: s }));
                }),
                Promise.all(l)
              );
            },
            set: (a) => (
              (0, o.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                (0, s.gg)(e, a);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), a.stop();
              }
            ),
          };
        return a;
      }
      var i = a(16770),
        r = a(54283);
      let u = function () {
        let e = (0, i.h)(l);
        return (0, r.L)(e.mount, []), e;
      };
    },
    41993: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact/sales",
        function () {
          return a(47849);
        },
      ]);
    },
    70915: function (e, t, a) {
      "use strict";
      var o = a(52322),
        s = a(2784),
        n = a(4879),
        l = a(45781),
        i = a(5126),
        r = a(44382);
      let u = (e) => {
        let { isActive: t, label: a, onClick: s } = e;
        return (0, o.jsx)("button", {
          onClick: s,
          className:
            "text-left text-lg flex flex-col group gap-1 transition-opacity flex-[1] ".concat(
              t ? "opacity-100" : "opacity-50"
            ),
          "aria-selected": t,
          role: "tab",
          children: (0, o.jsx)("div", { children: a }),
        });
      };
      t.Z = (e) => {
        var t;
        let {
            tabs: a,
            intervalDuration: c = 25,
            updateFrequency: d = 10,
            className: h,
          } = e,
          [f, g] = (0, s.useState)(0),
          [p, m] = (0, s.useState)(0),
          [x, b] = (0, s.useState)(!1),
          j = (0, n._)(),
          w = (e) => {
            m(0), g(e);
          },
          v = { width: "100%", transition: { duration: c, ease: "linear" } };
        (0, s.useEffect)(() => {
          let e = (100 / c) * (d / 1e3);
          j.start(v);
          let t = setInterval(() => {
            if (x) return m(0);
            m((t) => (t + e) % 101);
          }, d);
          return () => {
            clearInterval(t), m(0);
          };
        }, [f, j, x]),
          (0, s.useEffect)(() => {
            p >= 100.9 && g((e) => (e === a.length - 1 ? 0 : e + 1));
          }, [p]);
        let N = (e) => {
          w(e);
        };
        return (0, o.jsxs)("div", {
          className: (0, r.cn)("flex flex-col gap-6 w-full", h),
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          children: [
            (0, o.jsx)(l.M, {
              mode: "wait",
              children: (0, o.jsx)(
                i.E.div,
                {
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.1, delay: 0.2 },
                  },
                  exit: { opacity: 0, transition: { duration: 0.05 } },
                  className: "text-foreground-lighter text-sm",
                  children:
                    null === (t = a[f]) || void 0 === t ? void 0 : t.panel,
                },
                f
              ),
            }),
            (0, o.jsx)("div", {
              className:
                "relative w-full h-[1px] bg-border-strong opacity-80 group-hover:opacity-100 rounded-full overflow-hidden",
              children: (0, o.jsx)(i.E.div, {
                className: (0, r.cn)(
                  "absolute motion-reduce:hidden inset-0 w-full right-full bg-brand h-full transition-all",
                  p > 99.7 ? "opacity-0" : "opacity-100"
                ),
                style: { x: "".concat(p - 100, "%") },
                transition: { duration: c },
              }),
            }),
            (0, o.jsx)("div", {
              className: "w-full col-span-full flex gap-4 lg:gap-8 xl:gap-10",
              role: "tablist",
              children: a.map((e, t) =>
                (0, o.jsx)(
                  u,
                  { isActive: t === f, label: e.label, onClick: () => N(t) },
                  t
                )
              ),
            }),
          ],
        });
      };
    },
    47849: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CustomerLogo: function () {
            return m;
          },
          CustomerQuote: function () {
            return p;
          },
        });
      var o = a(52322),
        s = a(96577),
        n = a.n(s),
        l = a(5632),
        i = a(55351),
        r = a(44382),
        u = a(27478),
        c = a(37637),
        d = a(70915),
        h = a(84729);
      let f = "Contact Sales & Request a Demo | Supabase",
        g =
          "Book a demo to explore how Supabase can support your business growth",
        p = (e) => {
          let { quote: t, author: a, className: s } = e;
          return (0, o.jsxs)("div", {
            className: (0, r.cn)(
              "text-foreground flex text-base lg:text-lg flex-col gap-1 max-w-xs",
              s
            ),
            children: [
              (0, o.jsxs)("p", { children: ['"', t, '"'] }),
              (0, o.jsx)("p", {
                className: "text-foreground-lighter text-sm",
                children: a,
              }),
            ],
          });
        },
        m = (e) => {
          let { title: t, logo: a } = e;
          return (0, o.jsx)("div", {
            className:
              "relative h-8 max-h-5 xl:max-h-6 w-20 max-w-20 md:w-28 xl:max-w-28",
            children: (0, o.jsx)(n(), {
              fill: !0,
              src: a,
              alt: "".concat(t, " logo"),
              priority: !0,
              draggable: !1,
              className:
                " bg-no-repeat m-0 object-left object-contain [[data-theme*=dark]_&]:brightness-200 [[data-theme*=dark]_&]:contrast-0 [[data-theme*=dark]_&]:filter ",
            }),
          });
        };
      t.default = () => {
        let e = (0, l.useRouter)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.PB, {
              title: f,
              description: g,
              openGraph: {
                title: f,
                description: g,
                url: "https://supabase.com/".concat(e.pathname),
              },
            }),
            (0, o.jsx)(u.default, {
              className: "!min-h-fit",
              children: (0, o.jsxs)(c.default, {
                className: "text grid gap-8 lg:gap-12 md:grid-cols-2",
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "md:px-4 lg:pb-8 md:h-full w-full flex flex-col justify-between gap-2",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "flex flex-col gap-2 md:max-w-md",
                        children: [
                          (0, o.jsx)("h1", {
                            className: "h1 !m-0",
                            children: "Talk to our Sales team",
                          }),
                          (0, o.jsx)("p", {
                            className: "md:text-lg text-foreground-lighter",
                            children:
                              "Book a demo and set up a trial Enterprise account to see how Supabase's scalable features can accelerate your business growth and app development.",
                          }),
                        ],
                      }),
                      (0, o.jsx)(d.Z, {
                        className: "hidden md:flex",
                        tabs: [
                          {
                            label: (0, o.jsx)(m, {
                              title: "Goodtape",
                              logo: "/images/customers/logos/good-tape.png",
                            }),
                            panel: (0, o.jsx)(p, {
                              quote:
                                "My biggest regret is not having gone with Supabase from the beginning.",
                              author:
                                "Jakob Steinn, Co-founder & Tech Lead, Good Tape",
                            }),
                          },
                          {
                            label: (0, o.jsx)(m, {
                              title: "Xendit",
                              logo: "/images/customers/logos/xendit.png",
                            }),
                            panel: (0, o.jsx)(p, {
                              quote:
                                "The full solution was built and in production in less than one week.",
                              author: "Developer, Xendit",
                            }),
                          },
                          {
                            label: (0, o.jsx)(m, {
                              title: "Chatbase",
                              logo: "/images/customers/logos/chatbase.png",
                            }),
                            panel: (0, o.jsx)(p, {
                              quote:
                                "Supabase is great because it has everything. I don’t need a different solution for authentication, a different solution for database, or a different solution for storage.",
                              author: "Yasser Elsaid, Founder, Chatbase",
                              className: "max-w-none",
                            }),
                          },
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)(h.Z, {}),
                  (0, o.jsx)(d.Z, {
                    className: "md:hidden mt-4",
                    tabs: [
                      {
                        label: (0, o.jsx)(m, {
                          title: "Goodtape",
                          logo: "/images/customers/logos/good-tape.png",
                        }),
                        panel: (0, o.jsx)(p, {
                          quote:
                            "My biggest regret is not having gone with Supabase from the beginning.",
                          author: "Jakob Steinn Co-founder & Tech Lead",
                        }),
                      },
                      {
                        label: (0, o.jsx)(m, {
                          title: "Xendit",
                          logo: "/images/customers/logos/xendit.png",
                        }),
                        panel: (0, o.jsx)(p, {
                          quote:
                            "The full solution was built and in production in less than one week.",
                          author: "Xendit developer",
                        }),
                      },
                      {
                        label: (0, o.jsx)(m, {
                          title: "Chatbase",
                          logo: "/images/customers/logos/chatbase.png",
                        }),
                        panel: (0, o.jsx)(p, {
                          quote:
                            "Supabase is great because it has everything. I don’t need a different solution for authentication, a different solution for database, or a different solution for storage.",
                          author: "Yasser Elsaid, Founder, Chatbase",
                          className: "max-w-none",
                        }),
                      },
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
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 4729, 2888, 9774, 179],
      function () {
        return e((e.s = 41993));
      }
    ),
      (_N_E = e.O());
  },
]);
