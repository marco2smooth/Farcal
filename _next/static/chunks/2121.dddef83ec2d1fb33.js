"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2121],
  {
    72121: function (C, e, t) {
      t.r(e);
      var s = t(52322),
        a = t(2784),
        i = t(39097),
        n = t.n(i),
        r = t(5632),
        o = t(45781),
        L = t(5126),
        d = t(30175),
        l = t(44382),
        c = t(61172),
        u = t(68709),
        g = t(37637);
     
        m = {
          initial: { y: 10, opacity: 0 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.25, ease: u.sq },
          },
          exit: { y: 0, opacity: 0, transition: { duration: 0.1, ease: u.ms } },
        };
      e.default = (C) => {
        var e;
        let { className: t } = C,
          [i, u] = (0, a.useState)(null),
          h = (0, r.useRouter)(),
          M = (0, d.Mk)(),
          Z = (0, d.Gc)(640),
          _ = async (C) =>
            await c.Z.sendEvent(
              { action: C, category: "link", label: "" },
              M,
              h
            );
        return (0, s.jsx)(g.default, {
          className: (0, l.cn)(t),
          id: "frameworks",
          children: (0, s.jsxs)("div", {
            className:
              "relative z-20 w-full max-w-6xl mx-auto h-full flex flex-col xl:flex-row gap-4 items-center justify-between",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "!leading-tight text-center xl:text-left text-2xl md:text-4xl text-foreground-lighter whitespace-nowrap",
                children: [
                  "Use Supabase with",
                  " ",
                  (0, s.jsx)("div", {
                    className: "block",
                    children: (0, s.jsx)(o.M, {
                      mode: "wait",
                      children: (0, s.jsx)(
                        L.E.span,
                        {
                          initial: "initial",
                          animate: "animate",
                          exit: "exit",
                          variants: m,
                          className: "inline-block text-foreground",
                          children:
                            null !== (e = null == i ? void 0 : i.name) &&
                            void 0 !== e
                              ? e
                              : "any framework",
                        },
                        null == i ? void 0 : i.name
                      ),
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "grid grid-cols-5 md:grid-cols-10",
                children: w.map((C) =>
                  (0, s.jsx)(
                    n(),
                    {
                      href: C.docs,
                      className: "transition-opacity group",
                      onClick: () => _(C.gaEvent),
                      onMouseOver: () => u(C),
                      onMouseOut: () => u(null),
                      children: (0, s.jsx)("div", {
                        className: (0, l.cn)(
                          "m-1 bg-[var(--color-bg-darkest)] h-16 w-16 flex items-center justify-center rounded-md group-hover:border transition-all text-foreground-light border-foreground-light hover:shadow",
                          !!i && i.name !== C.name && "text-foreground-muted",
                          (null == i ? void 0 : i.name) === C.name &&
                            "text-foreground"
                        ),
                        children: (0, s.jsx)("svg", {
                          width: Z ? 35 : 45,
                          height: Z ? 35 : 45,
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          viewBox: "0 0 61 61",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, s.jsx)("path", {
                            d: C.icon,
                            fill: "currentColor",
                          }),
                        }),
                      }),
                    },
                    C.name
                  )
                ),
              }),
            ],
          }),
        });
      };
    },
  },
]);
