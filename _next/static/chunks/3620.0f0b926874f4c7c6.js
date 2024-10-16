"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3620],
  {
    23620: function (e, l, s) {
      s.r(l);
      var a = s(52322);
      s(2784);
      var c = s(44382),
        r = s(37637);
      let t = (e) => {
        let { feature: l } = e,
          s = l.icon,
          r = "w-".concat(7);
        return (0, a.jsxs)("li", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, a.jsx)(s, {
              className: (0, c.cn)(
                "stroke-1 mb-2 text-foreground-lighter",
                r,
                "h-".concat(7)
              ),
            }),
            (0, a.jsx)("div", {
              className:
                "w-full h-px overflow-hidden flex items-start bg-border-muted",
              children: (0, a.jsx)("span", {
                className: (0, c.cn)("h-full bg-foreground-lighter", r),
              }),
            }),
            (0, a.jsx)("h4", {
              className: "text-foreground text-lg lg:text-xl mt-1",
              children: l.heading,
            }),
            (0, a.jsx)("p", {
              className: "text-foreground-lighter text-sm",
              children: l.subheading,
            }),
          ],
        });
      };
      l.default = (e) =>
        (0, a.jsxs)(r.default, {
          id: e.id,
          className: "flex flex-col gap-4 md:gap-8",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, a.jsx)("span", { className: "label", children: e.label }),
                (0, a.jsx)("h2", { className: "h2", children: e.heading }),
              ],
            }),
            (0, a.jsx)("ul", {
              className:
                "grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-3 md:gap-12 xl:gap-20",
              children: e.features.map((e) =>
                (0, a.jsx)(t, { feature: e }, e.heading)
              ),
            }),
          ],
        });
    },
  },
]);
