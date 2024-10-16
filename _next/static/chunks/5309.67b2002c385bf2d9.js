"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5309],
  {
    45309: function (e, s, l) {
      l.r(s);
      var a = l(52322);
      l(2784);
      var r = l(4880),
        t = l(37637);
      let c = (e) => {
        let { feature: s } = e,
          l = s.icon;
        return (0, a.jsxs)("li", {
          className:
            "flex flex-nowrap items-center h-fit gap-2 sm:gap-4 text-foreground text-xs sm:text-sm",
          children: [
            (0, a.jsx)("figure", {
              className:
                "border not-prose bg-surface-100 flex h-8 w-8 items-center justify-center rounded-md",
              children: (0, a.jsx)(l, { className: "w-4 h-4 stroke-1" }),
            }),
            (0, a.jsx)("p", { children: s.heading }),
          ],
        });
      };
      s.default = (e) =>
        (0, a.jsxs)(t.default, {
          id: e.id,
          className: "flex flex-col xl:flex-row justify-between gap-4 md:gap-8",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-2 max-w-xl",
              children: [
                (0, a.jsx)("span", { className: "label", children: e.label }),
                (0, a.jsx)("h2", { className: "h2 !m-0", children: e.heading }),
                (0, a.jsx)("p", {
                  className: "p !text-foreground-lighter",
                  children: e.subheading,
                }),
                (0, a.jsx)(r.Z, {
                  hasChevron: !0,
                  label: e.cta.label,
                  url: e.cta.url,
                  className: "mt-2",
                }),
              ],
            }),
            (0, a.jsx)("ul", {
              className:
                "grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-x-20 h-fit xl:grid-cols-2 mt-4 xl:mt-8",
              children: e.features.map((e) =>
                (0, a.jsx)(c, { feature: e }, e.heading)
              ),
            }),
          ],
        });
    },
  },
]);
