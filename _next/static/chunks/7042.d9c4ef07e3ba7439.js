"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7042],
  {
    57042: function (e, s, a) {
      a.r(s);
      var l = a(52322),
        r = a(39097),
        c = a.n(r),
        n = a(44382),
        t = a(29982);
      s.default = (e) => {
        let { darkerBg: s, className: a } = e;
        return (0, l.jsxs)("div", {
          className: (0, n.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            s && "bg-alternative",
            a
          ),
          children: [
            (0, l.jsx)("div", {
              className: "col-span-12",
              children: (0, l.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, l.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, l.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, l.jsx)(t.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, l.jsx)(c(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, l.jsx)(t.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, l.jsx)(c(), {
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
  },
]);
