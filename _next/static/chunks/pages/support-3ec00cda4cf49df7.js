(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5563],
  {
    21376: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/support",
        function () {
          return r(33794);
        },
      ]);
    },
    33794: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var n = r(52322),
        s = r(55351),
        a = r(39097),
        l = r.n(a),
        i = r(5632),
        o = r(2784),
        d = r(97219),
        c = r(44382),
        u = r(29982),
        m = r(40936),
        p = r(29750),
        f = r(27478),
        x = r(37637),
        h = r(93089),
        g = r(99),
        b = r(38880),
        v = r(60119),
        y = r(4988);
      let k = {
        meta_title: "Help & Support | Supabase",
        meta_description:
          "Find help and support for Supabase. Our Support team provide answers on all types of issues, including account information, billing, and refunds.",
        hero: { h1: "Support", title: "Hello, how can we help?" },
        cards: [
          {
            title: "Issues",
            paragraph:
              "Found a bug? We'd love to hear about it in our GitHub issues.",
            links: [
              {
                label: "Open GitHub Issue",
                link: "https://github.com/supabase/supabase/issues",
                target: "_blank",
                icon: (0, n.jsx)(b.Z, {}),
                type: "default",
              },
            ],
          },
          {
            title: "Feature requests",
            paragraph:
              "Want to suggest a new feature? Share it with us and the community.",
            links: [
              {
                label: "Request feature",
                link: "https://github.com/orgs/supabase/discussions/categories/feature-requests",
                target: "_blank",
                icon: (0, n.jsx)(b.Z, {}),
                type: "default",
              },
            ],
          },
          {
            title: "Ask the Community",
            paragraph:
              "Join our GitHub discussions or our Discord server to browse for help and best practices.",
            links: [
              {
                label: "Ask a question",
                link: "https://github.com/supabase/supabase/discussions",
                target: "_blank",
                icon: (0, n.jsx)(v.Z, {}),
                type: "default",
              },
              {
                label: "Join Discord",
                link: "https://discord.supabase.com/",
                target: "_blank",
                icon: (0, n.jsx)(y.Z, {
                  fill: "hsl(var(--background-default))",
                }),
                type: "secondary",
              },
            ],
            className: "col-span-full xl:col-span-1",
          },
        ],
        banner: {
          title: "Can't find what you're looking for?",
          paragraph: (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("p", {
                className: "text-foreground-light",
                children: "The Supabase Support Team is ready to help.",
              }),
              (0, n.jsx)("p", {
                className: "text-foreground-lighter text-sm",
                children:
                  "Response time for support tickets will vary depending on plan type and severity of the issue.",
              }),
            ],
          }),
          links: [
            {
              label: "Contact Enterprise Sales",
              link: "https://forms.supabase.com/enterprise",
              target: "_blank",
              type: "default",
            },
            {
              label: "Open Ticket",
              link: "https://supabase.com/dashboard/support/new",
              target: "_blank",
              icon: (0, n.jsx)(g.Z, {}),
              className: "!text-foreground-light hover:!text-foreground",
              type: "text",
            },
          ],
        },
      };
      var N = r(17644),
        j = r(81308),
        w = () => {
          let e = (0, i.useRouter)(),
            t = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              let e = new d.Z(t.current, {
                strings: p.Xl,
                typeSpeed: 50,
                backDelay: 4e3,
                showCursor: !1,
              });
              return () => {
                e.destroy();
              };
            }, []),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(s.PB, {
                  title: k.meta_title,
                  description: k.meta_description,
                  openGraph: {
                    title: k.meta_title,
                    description: k.meta_description,
                    url: "https://supabase.com/".concat(e.pathname),
                    images: [
                      { url: "https://supabase.com/images/og/supabase-og.png" },
                    ],
                  },
                }),
                (0, n.jsxs)(f.default, {
                  className: "!min-h-fit",
                  children: [
                    (0, n.jsx)("div", {
                      className: "bg-alternative",
                      children: (0, n.jsxs)(x.default, {
                        className: "space-y-2 text-center",
                        children: [
                          (0, n.jsx)("h1", {
                            className:
                              "text-brand font-mono text-base uppercase tracking-widest",
                            children: k.hero.h1,
                          }),
                          (0, n.jsx)("p", {
                            className: "h1 tracking-[-1px]",
                            children: k.hero.title,
                          }),
                          (0, n.jsx)(m.av, {
                            children: (0, n.jsxs)("button", {
                              className:
                                " mx-auto w-full max-w-lg flex px-3 py-3 group items-center justify-between bg-background border border-control hover:bg-surface-100 transition  rounded",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center flex-1 space-x-2",
                                  children: [
                                    (0, n.jsx)(N.Z, {
                                      className: "text-foreground-light",
                                      size: 18,
                                      strokeWidth: 2,
                                    }),
                                    (0, n.jsx)("p", {
                                      ref: t,
                                      className:
                                        "text-foreground-lighter text-sm group-hover:text-foreground-light transition",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "flex items-center h-full space-x-1",
                                  children: (0, n.jsxs)("div", {
                                    className:
                                      "hidden text-foreground-lighter md:flex items-center justify-center h-5 w-10 border rounded bg-surface-300 border-foreground-lighter/30 gap-1",
                                    children: [
                                      (0, n.jsx)(j.Z, {
                                        size: 12,
                                        strokeWidth: 1.5,
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "text-[12px]",
                                        children: "K",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(x.default, {
                      className:
                        "text grid gap-5 md:grid-cols-2 xl:grid-cols-3 max-w-7xl !pb-8",
                      children: k.cards.map((e) =>
                        (0, n.jsxs)(
                          h.Z,
                          {
                            outerClassName: (0, c.cn)(e.className),
                            innerClassName: "flex flex-col p-5",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "mb-4 lg:mb-8 flex-1",
                                children: [
                                  (0, n.jsx)("h2", {
                                    className: "text text-lg font-medium",
                                    children: e.title,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "my-2 block",
                                    children: (0, n.jsx)("p", {
                                      className: "text-foreground-light",
                                      children: e.paragraph,
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: "flex gap-2",
                                children: e.links.map((e) => {
                                  var t;
                                  return (0, n.jsx)(u.z, {
                                    size: "small",
                                    type:
                                      null !== (t = e.type) && void 0 !== t
                                        ? t
                                        : "default",
                                    iconRight: e.icon,
                                    asChild: !0,
                                    children: (0, n.jsx)(l(), {
                                      href: e.link,
                                      as: e.link,
                                      target: e.target,
                                      children: e.label,
                                    }),
                                  });
                                }),
                              }),
                            ],
                          },
                          e.title
                        )
                      ),
                    }),
                    (0, n.jsx)(x.default, {
                      className: "!pt-0 max-w-7xl",
                      children: (0, n.jsx)("div", {
                        className:
                          "mx-auto bg-alternative border rounded-xl p-6 lg:p-10",
                        children: (0, n.jsxs)("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-16 justify-between",
                          children: [
                            (0, n.jsx)("div", {
                              className: "gap-2 flex flex-col",
                              children: (0, n.jsx)("h2", {
                                className: "text-xl lg:text-2xl tracking-tight",
                                children: k.banner.title,
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "flex flex-col",
                                  children: k.banner.paragraph,
                                }),
                                (0, n.jsx)("div", {
                                  className: "flex gap-2",
                                  children: k.banner.links.map((e) => {
                                    var t;
                                    return (0, n.jsx)(u.z, {
                                      size: "tiny",
                                      type:
                                        null !== (t = e.type) && void 0 !== t
                                          ? t
                                          : "default",
                                      iconRight: e.icon,
                                      asChild: !0,
                                      children: (0, n.jsx)(l(), {
                                        href: e.link,
                                        as: e.link,
                                        target: e.target,
                                        className: (0, c.cn)(e.className),
                                        children: e.label,
                                      }),
                                    });
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
              ],
            })
          );
        };
    },
    40936: function (e, t, r) {
      "use strict";
      r.d(t, {
        B_: function () {
          return b;
        },
        _f: function () {
          return N;
        },
        aG: function () {
          return g;
        },
        av: function () {
          return k;
        },
      });
      var n = r(52322),
        s = r(39649),
        a = r(83809),
        l = r(2784),
        i = r(32955),
        o = r(30175),
        d = r(18467),
        c = r(44382),
        u = r(59951),
        m = r(29982),
        p = r(94352),
        f = r(70870),
        x = r(51382),
        h = r(73839);
      function g(e) {
        let { className: t } = e,
          r = (0, f.Wo)(),
          a = (0, f.yg)();
        if (r)
          return (0, n.jsxs)("button", {
            className: (0, c.cn)(
              "p-2 bg-overlay flex items-center gap-2 text-xs text-foreground-muted",
              t
            ),
            onClick: a,
            children: [(0, n.jsx)(s.Z, { width: 12, height: 12 }), r.name],
          });
      }
      let b = (0, l.forwardRef)((e, t) => {
        let { children: r, className: s, ...a } = e;
        return (0, n.jsx)(u.mY, {
          ref: t,
          className: (0, c.cn)(
            "h-full w-full flex flex-col overflow-hidden",
            "[&_[cmdk-group]]:px-2 [&_[cmdk-group]]:!bg-transparent [&_[cmdk-group-heading]]:!bg-transparent [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-border-stronger [&_[cmdk-input]]:h-12",
            "[&_[cmdk-item]_svg]:h-5",
            "[&_[cmdk-item]_svg]:w-5",
            "[&_[cmdk-item]_svg]:stroke-1",
            "[&_[cmdk-input-wrapper]_svg]:h-5",
            "[&_[cmdk-input-wrapper]_svg]:w-5",
            "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0",
            s
          ),
          ...a,
          children: r,
        });
      });
      function v(e) {
        let { resetErrorBoundary: t } = e;
        return (0, n.jsx)("div", {
          className: (0, c.cn)("min-h-64", "flex items-center justify-center"),
          children: (0, n.jsxs)("div", {
            className: "p-10 flex flex-col items-center gap-6 mt-4",
            children: [
              (0, n.jsx)(a.Z, { strokeWidth: 1.5, size: 40 }),
              (0, n.jsx)("p", {
                className: "text-lg text-center",
                children:
                  "Sorry, looks like we're having some issues with the command menu!",
              }),
              (0, n.jsx)("p", {
                className: "text-sm text-center",
                children: "Please try again in a bit.",
              }),
              (0, n.jsx)(m.z, {
                size: "tiny",
                type: "secondary",
                onClick: t,
                children: "Try again?",
              }),
            ],
          }),
        });
      }
      function y(e) {
        let { children: t } = e,
          r = (0, f.EB)();
        return r ? (0, n.jsx)(r, {}) : (0, n.jsx)(b, { children: t });
      }
      function k(e) {
        let { children: t } = e,
          r = (0, h.Cc)(),
          n = (0, h.FX)(),
          s = l.Children.only(t);
        return s && (0, l.isValidElement)(s)
          ? (0, l.cloneElement)(s, {
              onClick: () => {
                var e, t;
                n(!r),
                  null === (e = (t = s.props).onOpen) ||
                    void 0 === e ||
                    e.call(t, !r);
              },
              "aria-haspopup": "dialog",
              "aria-expanded": r,
              "aria-controls": "command-menu-dialog-content",
              className: (0, c.cn)(
                "h-10 px-4 py-2",
                "inline-flex items-center justify-center",
                "whitespace-nowrap",
                "rounded-md border border-input bg-background",
                "text-sm font-medium",
                "hover:bg-accent hover:text-accent-foreground",
                "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                "transition-colors",
                s.props.className
              ),
            })
          : null;
      }
      function N(e) {
        let { children: t, trigger: r } = e,
          s = (0, h.Cc)(),
          a = (0, h.FX)(),
          u = (0, o.Gc)("sm"),
          m = (0, h.Qd)(),
          g = (0, f.Wo)(),
          b = (0, f.yg)(),
          k = (0, x.a)(),
          N = (0, x.A)(),
          { ref: j } = (function (e) {
            let { toggleOpen: t } = e,
              {
                ref: r,
                handleTouchStart: n,
                handleTouchMove: s,
                handleTouchEnd: a,
              } = (0, d.Z)({ onClose: t }),
              i = (0, h.Gk)(),
              o = (0, l.useMemo)(
                () => ({
                  handleTouchStart: n,
                  handleTouchMove: s,
                  handleTouchEnd: a,
                }),
                [n, s, a]
              );
            return (
              (0, l.useEffect)(() => {
                i(o);
              }, [o]),
              { ref: r }
            );
          })({ toggleOpen: () => a(!s) });
        return (0, n.jsxs)(p.Vq, {
          open: s,
          onOpenChange: a,
          children: [
            r,
            (0, n.jsx)(p.cZ, {
              id: "command-menu-dialog-content",
              hideClose: !0,
              forceMount: !0,
              ref: j,
              onOpenAutoFocus: (e) => u && e.preventDefault(),
              onInteractOutside: () => a(!1),
              onEscapeKeyDown: (e) => (
                e.preventDefault(), k ? N("") : g ? b() : a(!1)
              ),
              size: m,
              className: (0, c.cn)(
                "relative flex flex-col my-0 mx-auto rounded-t-lg overflow-hidden",
                "h-[85dvh] mt-[15vh] md:max-h-[500px] md:mt-0 left-0 bottom-0 md:bottom-auto",
                "!animate-in !slide-in-from-bottom-[85%] !duration-300",
                "data-[state=closed]:!animate-out data-[state=closed]:!slide-out-to-bottom",
                "!slide-in-from-left-[0%] :!slide-in-from-top-[0%]",
                "!slide-out-to-left-[0%] !slide-out-to-top-[0%]",
                "md:data-[state=open]:!slide-in-from-bottom-[0%] md:data-[state=closed]:!slide-out-to-bottom-[0%]",
                "md:data-[state=open]:!zoom-in-95 md:data-[state=closed]:!zoom-out-95"
              ),
              dialogOverlayProps: {
                className: (0, c.cn)(
                  "overflow-hidden flex data-closed:delay-100"
                ),
              },
              children: (0, n.jsx)(i.SV, {
                FallbackComponent: v,
                children: (0, n.jsx)(y, { children: t }),
              }),
            }),
          ],
        });
      }
      b.displayName = u.mY.displayName;
    },
    70870: function (e, t, r) {
      "use strict";
      r.d(t, {
        EB: function () {
          return u;
        },
        Qy: function () {
          return x;
        },
        SL: function () {
          return m;
        },
        Wo: function () {
          return c;
        },
        yg: function () {
          return p;
        },
      });
      var n = r(18149),
        s = r.n(n),
        a = r(2784),
        l = r(20650),
        i = r(77013),
        o = r(39756),
        d = r(51382);
      let c = () => {
          let { pagesState: e } = (0, i.D)(),
            { commandPages: t, pageStack: r } = (0, l.R)(e),
            n = r.at(-1);
          return (0, a.useMemo)(
            () => (n && t[n] ? { ...t[n], name: n } : void 0),
            [t, n]
          );
        },
        u = () => {
          let e = c();
          if (e && (0, o.sG)(e)) return e.component;
        },
        m = () => {
          let { pagesState: e } = (0, i.D)(),
            t = (0, d.A)();
          return function (r) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.appendPageStack(r), n || t("");
          };
        },
        p = () => {
          let { pagesState: e } = (0, i.D)(),
            { popPageStack: t } = (0, l.R)(e);
          return t;
        },
        f = [],
        x = function (e, t) {
          let { deps: r = f, enabled: n = !0 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { pagesState: o } = (0, i.D)(),
            { registerNewPage: d } = (0, l.R)(o),
            c = (0, a.useRef)(r),
            u = (0, a.useRef)(n),
            m = (0, a.useRef)();
          (0, a.useMemo)(() => {
            if (!s()(c.current, r) || u.current !== n) {
              var a;
              null === (a = m.current) || void 0 === a || a.call(m),
                (m.current = n ? d(e, t) : void 0),
                (c.current = r),
                (u.current = n);
            }
          }, [d, e, t, r, n]),
            (0, a.useEffect)(
              () => (
                (m.current = n ? d(e, t) : void 0),
                () => {
                  var e;
                  return null === (e = m.current) || void 0 === e
                    ? void 0
                    : e.call(m);
                }
              ),
              []
            );
        };
    },
    51382: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return l;
        },
        a: function () {
          return a;
        },
      });
      var n = r(20650),
        s = r(77013);
      let a = () => {
          let { queryState: e } = (0, s.D)(),
            { query: t } = (0, n.R)(e);
          return t;
        },
        l = () => {
          let { queryState: e } = (0, s.D)(),
            { setQuery: t } = (0, n.R)(e);
          return t;
        };
    },
    59951: function (e, t, r) {
      "use strict";
      r.d(t, {
        di: function () {
          return f;
        },
        e8: function () {
          return c;
        },
        fu: function () {
          return m;
        },
        mY: function () {
          return o;
        },
        rb: function () {
          return u;
        },
        sZ: function () {
          return d;
        },
        zz: function () {
          return p;
        },
      });
      var n = r(52322),
        s = r(99219),
        a = r(17644),
        l = r(2784),
        i = r(44382);
      let o = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY, {
          ref: t,
          className: (0, i.cn)(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-overlay text-foreground-light",
            r
          ),
          ...a,
        });
      });
      o.displayName = s.mY.displayName;
      let d = l.forwardRef((e, t) => {
        let { className: r, wrapperClassName: l, ...o } = e;
        return (0, n.jsxs)("div", {
          className: (0, i.cn)("flex items-center border-b px-3", l),
          "cmdk-input-wrapper": "",
          children: [
            (0, n.jsx)(a.Z, { className: "h-4 w-4 shrink-0 opacity-50" }),
            (0, n.jsx)(s.mY.Input, {
              ref: t,
              className: (0, i.cn)(
                "flex h-9 w-full rounded-md bg-transparent py-3 text-xs text outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0",
                r
              ),
              ...o,
            }),
          ],
        });
      });
      d.displayName = s.mY.Input.displayName;
      let c = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY.List, {
          ref: t,
          className: (0, i.cn)(
            "max-h-[300px] overflow-y-auto overflow-x-hidden",
            r
          ),
          ...a,
        });
      });
      c.displayName = s.mY.List.displayName;
      let u = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY.Empty, {
          ref: t,
          className: (0, i.cn)("py-6 text-center text-xs", r),
          ...a,
        });
      });
      u.displayName = s.mY.Empty.displayName;
      let m = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY.Group, {
          ref: t,
          className: (0, i.cn)(
            "overflow-hidden p-1 text-foreground-light [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-foreground-muted",
            "[&_[cmdk-group-heading]]:font-mono",
            "[&_[cmdk-group-heading]]:uppercase",
            "[&_[cmdk-group-heading]]:tracking-wider",
            r
          ),
          ...a,
        });
      });
      m.displayName = s.mY.Group.displayName;
      let p = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY.Separator, {
          ref: t,
          className: (0, i.cn)("-mx-1 h-px bg-border-overlay", r),
          ...a,
        });
      });
      p.displayName = s.mY.Separator.displayName;
      let f = l.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.mY.Item, {
          ref: t,
          className: (0, i.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[selected=true]:bg-overlay-hover data-[selected=true]:text-strong data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
            r
          ),
          ...a,
        });
      });
      f.displayName = s.mY.Item.displayName;
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 9517, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 21376));
      }
    ),
      (_N_E = e.O());
  },
]);
