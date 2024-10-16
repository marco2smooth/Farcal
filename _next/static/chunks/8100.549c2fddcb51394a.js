"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8100],
  {
    4879: function (e, t, a) {
      a.d(t, {
        _: function () {
          return u;
        },
      });
      var o = a(18358),
        s = a(38809),
        l = a(21448);
      function n() {
        let e = !1,
          t = new Set(),
          a = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(a, s) {
              (0, o.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let n = [];
              return (
                t.forEach((e) => {
                  n.push((0, l.d)(e, a, { transitionOverride: s }));
                }),
                Promise.all(n)
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
        let e = (0, i.h)(n);
        return (0, r.L)(e.mount, []), e;
      };
    },
    98100: function (e, t, a) {
      a.r(t);
      var o = a(52322);
      a(2784);
      var s = a(37637),
        l = a(47849),
        n = a(70915),
        i = a(84729);
      t.default = (e) =>
        (0, o.jsxs)(s.default, {
          className: "text grid gap-8 lg:gap-12 md:grid-cols-2",
          children: [
            (0, o.jsxs)("div", {
              className:
                "lg:pb-8 md:h-full w-full flex flex-col justify-between gap-2",
              children: [
                (0, o.jsxs)("div", {
                  className: "flex flex-col gap-2 md:max-w-md",
                  children: [
                    (0, o.jsx)("h1", {
                      className: "h1 !m-0",
                      children: "Request a demo",
                    }),
                    (0, o.jsx)("p", {
                      className: "md:text-lg text-foreground-lighter",
                      children:
                        "We can take your requirements and show you how Supabase can help you achieve your goals.",
                    }),
                  ],
                }),
                (0, o.jsx)(n.Z, {
                  className: "hidden md:flex",
                  tabs: [
                    {
                      label: (0, o.jsx)(l.CustomerLogo, {
                        title: "Goodtape",
                        logo: "/images/customers/logos/good-tape.png",
                      }),
                      panel: (0, o.jsx)(l.CustomerQuote, {
                        quote:
                          "My biggest regret is not having gone with Supabase from the beginning.",
                        author:
                          "Jakob Steinn, Co-founder & Tech Lead, Good Tape",
                      }),
                    },
                    {
                      label: (0, o.jsx)(l.CustomerLogo, {
                        title: "Xendit",
                        logo: "/images/customers/logos/xendit.png",
                      }),
                      panel: (0, o.jsx)(l.CustomerQuote, {
                        quote:
                          "The full solution was built and in production in less than one week.",
                        author: "Developer, Xendit",
                      }),
                    },
                    {
                      label: (0, o.jsx)(l.CustomerLogo, {
                        title: "Chatbase",
                        logo: "/images/customers/logos/chatbase.png",
                      }),
                      panel: (0, o.jsx)(l.CustomerQuote, {
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
            (0, o.jsx)(i.Z, {}),
            (0, o.jsx)(n.Z, {
              className: "md:hidden mt-4",
              tabs: [
                {
                  label: (0, o.jsx)(l.CustomerLogo, {
                    title: "Goodtape",
                    logo: "/images/customers/logos/good-tape.png",
                  }),
                  panel: (0, o.jsx)(l.CustomerQuote, {
                    quote:
                      "My biggest regret is not having gone with Supabase from the beginning.",
                    author: "Jakob Steinn Co-founder & Tech Lead",
                  }),
                },
                {
                  label: (0, o.jsx)(l.CustomerLogo, {
                    title: "Xendit",
                    logo: "/images/customers/logos/xendit.png",
                  }),
                  panel: (0, o.jsx)(l.CustomerQuote, {
                    quote:
                      "The full solution was built and in production in less than one week.",
                    author: "Xendit developer",
                  }),
                },
                {
                  label: (0, o.jsx)(l.CustomerLogo, {
                    title: "Chatbase",
                    logo: "/images/customers/logos/chatbase.png",
                  }),
                  panel: (0, o.jsx)(l.CustomerQuote, {
                    quote:
                      "Supabase is great because it has everything. I don’t need a different solution for authentication, a different solution for database, or a different solution for storage.",
                    author: "Yasser Elsaid, Founder, Chatbase",
                    className: "max-w-none",
                  }),
                },
              ],
            }),
          ],
        });
    },
    70915: function (e, t, a) {
      var o = a(52322),
        s = a(2784),
        l = a(4879),
        n = a(45781),
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
            intervalDuration: d = 25,
            updateFrequency: c = 10,
            className: g,
          } = e,
          [h, m] = (0, s.useState)(0),
          [f, p] = (0, s.useState)(0),
          [x, b] = (0, s.useState)(!1),
          j = (0, l._)(),
          v = (e) => {
            p(0), m(e);
          },
          w = { width: "100%", transition: { duration: d, ease: "linear" } };
        (0, s.useEffect)(() => {
          let e = (100 / d) * (c / 1e3);
          j.start(w);
          let t = setInterval(() => {
            if (x) return p(0);
            p((t) => (t + e) % 101);
          }, c);
          return () => {
            clearInterval(t), p(0);
          };
        }, [h, j, x]),
          (0, s.useEffect)(() => {
            f >= 100.9 && m((e) => (e === a.length - 1 ? 0 : e + 1));
          }, [f]);
        let C = (e) => {
          v(e);
        };
        return (0, o.jsxs)("div", {
          className: (0, r.cn)("flex flex-col gap-6 w-full", g),
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          children: [
            (0, o.jsx)(n.M, {
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
                    null === (t = a[h]) || void 0 === t ? void 0 : t.panel,
                },
                h
              ),
            }),
            (0, o.jsx)("div", {
              className:
                "relative w-full h-[1px] bg-border-strong opacity-80 group-hover:opacity-100 rounded-full overflow-hidden",
              children: (0, o.jsx)(i.E.div, {
                className: (0, r.cn)(
                  "absolute motion-reduce:hidden inset-0 w-full right-full bg-brand h-full transition-all",
                  f > 99.7 ? "opacity-0" : "opacity-100"
                ),
                style: { x: "".concat(f - 100, "%") },
                transition: { duration: d },
              }),
            }),
            (0, o.jsx)("div", {
              className: "w-full col-span-full flex gap-4 lg:gap-8 xl:gap-10",
              role: "tablist",
              children: a.map((e, t) =>
                (0, o.jsx)(
                  u,
                  { isActive: t === h, label: e.label, onClick: () => C(t) },
                  t
                )
              ),
            }),
          ],
        });
      };
    },
    47849: function (e, t, a) {
      a.r(t),
        a.d(t, {
          CustomerLogo: function () {
            return p;
          },
          CustomerQuote: function () {
            return f;
          },
        });
      var o = a(52322),
        s = a(96577),
        l = a.n(s),
        n = a(5632),
        i = a(55351),
        r = a(44382),
        u = a(27478),
        d = a(37637),
        c = a(70915),
        g = a(84729);
      let h = "Contact Sales & Request a Demo | Supabase",
        m =
          "Book a demo to explore how Supabase can support your business growth",
        f = (e) => {
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
        p = (e) => {
          let { title: t, logo: a } = e;
          return (0, o.jsx)("div", {
            className:
              "relative h-8 max-h-5 xl:max-h-6 w-20 max-w-20 md:w-28 xl:max-w-28",
            children: (0, o.jsx)(l(), {
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
        let e = (0, n.useRouter)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.PB, {
              title: h,
              description: m,
              openGraph: {
                title: h,
                description: m,
                url: "https://supabase.com/".concat(e.pathname),
              },
            }),
            (0, o.jsx)(u.default, {
              className: "!min-h-fit",
              children: (0, o.jsxs)(d.default, {
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
                      (0, o.jsx)(c.Z, {
                        className: "hidden md:flex",
                        tabs: [
                          {
                            label: (0, o.jsx)(p, {
                              title: "Goodtape",
                              logo: "/images/customers/logos/good-tape.png",
                            }),
                            panel: (0, o.jsx)(f, {
                              quote:
                                "My biggest regret is not having gone with Supabase from the beginning.",
                              author:
                                "Jakob Steinn, Co-founder & Tech Lead, Good Tape",
                            }),
                          },
                          {
                            label: (0, o.jsx)(p, {
                              title: "Xendit",
                              logo: "/images/customers/logos/xendit.png",
                            }),
                            panel: (0, o.jsx)(f, {
                              quote:
                                "The full solution was built and in production in less than one week.",
                              author: "Developer, Xendit",
                            }),
                          },
                          {
                            label: (0, o.jsx)(p, {
                              title: "Chatbase",
                              logo: "/images/customers/logos/chatbase.png",
                            }),
                            panel: (0, o.jsx)(f, {
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
                  (0, o.jsx)(g.Z, {}),
                  (0, o.jsx)(c.Z, {
                    className: "md:hidden mt-4",
                    tabs: [
                      {
                        label: (0, o.jsx)(p, {
                          title: "Goodtape",
                          logo: "/images/customers/logos/good-tape.png",
                        }),
                        panel: (0, o.jsx)(f, {
                          quote:
                            "My biggest regret is not having gone with Supabase from the beginning.",
                          author: "Jakob Steinn Co-founder & Tech Lead",
                        }),
                      },
                      {
                        label: (0, o.jsx)(p, {
                          title: "Xendit",
                          logo: "/images/customers/logos/xendit.png",
                        }),
                        panel: (0, o.jsx)(f, {
                          quote:
                            "The full solution was built and in production in less than one week.",
                          author: "Xendit developer",
                        }),
                      },
                      {
                        label: (0, o.jsx)(p, {
                          title: "Chatbase",
                          logo: "/images/customers/logos/chatbase.png",
                        }),
                        panel: (0, o.jsx)(f, {
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
]);
