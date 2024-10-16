"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4409],
  {
    4409: function (e, s, l) {
      l.r(s);
      var a = l(52322);
      l(2784);
      var t = l(44382),
        r = l(83940),
        i = l(37637);
      let n = (e) => {
          let { className: s } = e;
          return (0, a.jsxs)("div", {
            className: (0, t.cn)(
              "absolute z-10 inset-0 left-auto right-[20%] -top-8 md:top-0 xl:top-[15%] w-fit h-[200px] lg:h-[400px]",
              "flex flex-col items-center gap-1",
              s
            ),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "w-fit text-foreground bg-alternative p-4 rounded-lg border flex flex-col gap-1",
                children: [
                  (0, a.jsx)("span", {
                    className: "label !text-[10px] !leading-3",
                    children: "Users",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-foreground-light text-2xl",
                        children: "930,550",
                      }),
                      (0, a.jsx)(r.C, {
                        variant: "success",
                        size: "small",
                        className: "h-[24px] px-2",
                        children: "+13.4%",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: (0, t.cn)(
                  "relative w-2 h-2 min-w-2 min-h-2 rounded-full border-2 border-stronger",
                  "after:absolute after:inset-0 after:top-full after:mx-auto after:w-[2px] after:h-[150px] after:lg:h-[250px]",
                  "after:bg-gradient-to-b after:from-border-stronger after:to-transparent"
                ),
              }),
            ],
          });
        },
        d = (e) => {
          let { highlight: s } = e;
          return (0, a.jsxs)("li", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, a.jsx)("span", { className: "label", children: s.heading }),
              (0, a.jsx)("p", {
                className: "text-foreground text-xl md:text-3xl",
                children: s.subheading,
              }),
            ],
          });
        };
      s.default = (e) =>
        (0, a.jsxs)(i.default, {
          id: e.id,
          className: "relative",
          children: [
            (0, a.jsxs)("div", {
              className: "relative z-10 flex flex-col gap-4 md:gap-8 pb-20",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2 max-w-xl",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "h2 !m-0",
                      children: e.heading,
                    }),
                    (0, a.jsx)("p", {
                      className: "p !text-foreground-lighter",
                      children: e.subheading,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex flex-wrap gap-4 md:gap-12",
                  children: e.highlights.map((e) =>
                    (0, a.jsx)(d, { highlight: e }, e.heading)
                  ),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "relative xl:absolute z-0 inset-0 mt-4 -mb-8 sm:mt-0 sm:-mb-20 md:-mt-20 md:-mb-36 xl:mt-0 xl:top-10 w-full aspect-[2.15/1]",
              children: [
                (0, a.jsx)(n, { className: "" }),
                (0, a.jsxs)("svg", {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 1403 599",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "absolute inset-0 w-full h-full",
                  children: [
                    (0, a.jsx)("path", {
                      d: "M1402.27 0.744141C896.689 410.854 286.329 492.876 0.476562 492.876V598.744H1402.27V0.744141Z",
                      fill: "url(#paint0_linear_585_9420)",
                    }),
                    (0, a.jsx)("path", {
                      d: "M11.4209 492.744C295.041 492.744 900.636 410.744 1402.27 0.744141",
                      stroke: "hsl(var(--foreground-lighter))",
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_585_9420",
                        x1: "701.374",
                        y1: "170.846",
                        x2: "701.374",
                        y2: "561.839",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, a.jsx)("stop", {
                            stopColor: "hsl(var(--border-overlay))",
                          }),
                          (0, a.jsx)("stop", {
                            offset: "1",
                            stopColor: "hsl(var(--border-overlay))",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_transparent_0%,_hsl(var(--background-default))_100%)]",
                }),
              ],
            }),
          ],
        });
    },
  },
]);
