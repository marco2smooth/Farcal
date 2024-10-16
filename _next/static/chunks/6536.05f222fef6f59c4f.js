"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6536],
  {
    36536: function (e, l, s) {
      s.r(l);
      var t = s(52322);
      s(2784);
      var a = s(37637);
      l.default = (e) => {
        let { id: l, quote: s } = e;
        return (0, t.jsxs)(a.default, {
          id: l,
          className: "flex flex-col items-center text-center gap-8 md:gap-12",
          children: [
            (0, t.jsx)("q", {
              className: "text-2xl max-w-xs md:text-3xl md:max-w-xl",
              children: s.text,
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-col items-center gap-1",
              children: [
                (0, t.jsx)("figure", {
                  className: "text-foreground-lighter mb-4",
                  children: s.logo,
                }),
                (0, t.jsx)("span", {
                  className: "text-foreground",
                  children: s.author,
                }),
                (0, t.jsx)("span", {
                  className: "text-foreground-lighter",
                  children: s.role,
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
