(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [971, 1070],
  {
    75: function (e, r, t) {
      "use strict";
      t.d(r, {
        I: function () {
          return s;
        },
      });
      var i = t(18358);
      function s(e, r, t) {
        var s;
        if ("string" == typeof e) {
          let a = document;
          r &&
            ((0, i.k)(!!r.current, "Scope provided, but no element detected."),
            (a = r.current)),
            t
              ? ((null !== (s = t[e]) && void 0 !== s) ||
                  (t[e] = a.querySelectorAll(e)),
                (e = t[e]))
              : (e = a.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    97804: function (e, r, t) {
      "use strict";
      t.d(r, {
        Y: function () {
          return l;
        },
      });
      var i = t(2784),
        s = t(75);
      let a = { some: 0, all: 1 };
      function l(e, { root: r, margin: t, amount: l, once: n = !1 } = {}) {
        let [o, c] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            if (!e.current || (n && o)) return;
            let i = { root: (r && r.current) || void 0, margin: t, amount: l };
            return (function (
              e,
              r,
              { root: t, margin: i, amount: l = "some" } = {}
            ) {
              let n = (0, s.I)(e),
                o = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let t = o.get(e.target);
                      if (!!t !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let t = r(e);
                          "function" == typeof t
                            ? o.set(e.target, t)
                            : c.unobserve(e.target);
                        } else t && (t(e), o.delete(e.target));
                      }
                    });
                  },
                  {
                    root: t,
                    rootMargin: i,
                    threshold: "number" == typeof l ? l : a[l],
                  }
                );
              return n.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), n ? void 0 : () => c(!1)), i);
          }, [r, e, t, n, l]),
          o
        );
      }
    },
    59434: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/vector",
        function () {
          return t(23687);
        },
      ]);
    },
    14528: function (e, r, t) {
      "use strict";
      var i = t(52322);
      t(2784);
      var s = t(44382),
        a = t(39097),
        l = t.n(a),
        n = t(82577),
        o = t(37637);
      r.Z = function (e) {
        let { activePage: r } = e;
        return (0, i.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, i.jsx)(o.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(n.RB).map((e) => {
              let t = e[1],
                a = t.name === n.$7.AUTHENTICATION;
              return (0, i.jsxs)(
                l(),
                {
                  className: (0, s.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    t.name === r && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    a ? "auth" : t.name.toLowerCase().replace(" ", "-")
                  ),
                  children: [
                    (0, i.jsx)("svg", {
                      className:
                        "h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: t.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, i.jsx)("p", { children: a ? "Auth" : t.name }),
                  ],
                },
                t.name
              );
            }),
          }),
        });
      };
    },
    23687: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return I;
          },
        });
      var i = t(52322);
      t(31395);
      var s = t(55351),
        a = t(25237),
        l = t.n(a),
        n = t(5632),
        o = t(27478),
        c = t(30175),
        C = t(23642),
        d = t(96577),
        x = t.n(d),
        p = t(2784),
        u = t(22965),
        f = t(83480),
        g = t(9838),
        h = t(78225),
        y = (e) => {
          let { isHovered: r } = e,
            { resolvedTheme: t } = (0, u.F)(),
            s = {
              animate: {
                strokeDashoffset: -38,
                transition: {
                  ease: "linear",
                  duration: 3,
                  yoyo: !1,
                  repeat: 1 / 0,
                },
              },
              initial: { strokeDashoffset: 0 },
            },
            a = {
              glow: (null == t ? void 0 : t.includes("dark"))
                ? "#009C77"
                : "#00FFD9",
              rectStart: (null == t ? void 0 : t.includes("dark"))
                ? "#17FDDF"
                : "#49615E",
              rectEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#10FFE0"
                : "#202020",
              cardBgStart: (null == t ? void 0 : t.includes("dark"))
                ? "#171717"
                : "white",
              cardBgEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#171717"
                : "white",
              openAIStart: (null == t ? void 0 : t.includes("dark"))
                ? "#89FFCA"
                : "#4FD7B6",
              openAIEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#D0FAE6"
                : "#4F7362",
              openAIStrokeStart: (null == t ? void 0 : t.includes("dark"))
                ? "#A5FFD6"
                : "#5F5F5F",
              openAIStrokeEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#D0FAE6"
                : "#D6D6D6",
              openAIAltStart: (null == t || t.includes("dark"), "#00DBA7"),
              openAIAltEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#171717"
                : "#DFDFDF",
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className:
                  "w-[44%] h-[44%] -translate-x-[2px] absolute z-10 inset-0 top-auto bottom-[16%] m-auto",
                children: (0, i.jsx)(x(), {
                  src: (null == t ? void 0 : t.includes("dark"))
                    ? "/images/product/vector/openai-logo-dark.png"
                    : "/images/product/vector/openai-logo-light.png",
                  layout: "fill",
                  objectFit: "contain",
                  alt: "OpenAi logo",
                }),
              }),
              (0, i.jsx)(g.X, {
                features: h.H,
                children: (0, i.jsx)(
                  () =>
                    (0, i.jsxs)("svg", {
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 285 211",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, i.jsx)("g", {
                          filter: "url(#filter0_f_4346_99959)",
                          children: (0, i.jsx)("ellipse", {
                            cx: "141.35",
                            cy: "170.604",
                            rx: "84",
                            ry: "83.5",
                            fill: a.glow,
                          }),
                        }),
                        (0, i.jsx)(f.m.path, {
                          d: "M-75.6504 84.9567C-75.6504 71.7018 -64.9052 60.9567 -51.6504 60.9567H29.61C42.8649 60.9567 53.61 71.7018 53.61 84.9567V177.104C53.61 190.358 42.8648 201.104 29.61 201.104H-51.6504C-64.9052 201.104 -75.6504 190.358 -75.6504 177.104V84.9567Z",
                          stroke: "url(#paint0_radial_4346_99959)",
                          strokeWidth: "0.5",
                          strokeDasharray: "2.05 3.41",
                          variants: s,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                        }),
                        (0, i.jsx)(f.m.path, {
                          d: "M229.089 84.9567C229.089 71.7018 239.834 60.9567 253.089 60.9567H334.349C347.604 60.9567 358.349 71.7018 358.349 84.9567V177.104C358.349 190.358 347.604 201.104 334.349 201.104H253.089C239.834 201.104 229.089 190.358 229.089 177.104V84.9567Z",
                          stroke: "url(#paint1_radial_4346_99959)",
                          strokeWidth: "0.5",
                          strokeDasharray: "2.05 3.41",
                          variants: s,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                        }),
                        (0, i.jsx)(f.m.path, {
                          d: "M-75.6504 -64.8964C-75.6504 -78.1512 -64.9052 -88.8964 -51.6504 -88.8964H29.61C42.8649 -88.8964 53.61 -78.1512 53.61 -64.8964V27.2506C53.61 40.5055 42.8648 51.2506 29.61 51.2506H-51.6504C-64.9052 51.2506 -75.6504 40.5055 -75.6504 27.2506V-64.8964Z",
                          stroke: "url(#paint2_radial_4346_99959)",
                          strokeWidth: "0.5",
                          strokeDasharray: "2.05 3.41",
                          variants: s,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                        }),
                        (0, i.jsx)(f.m.path, {
                          d: "M229.089 -64.8964C229.089 -78.1512 239.834 -88.8964 253.089 -88.8964H334.35C347.604 -88.8964 358.35 -78.1512 358.35 -64.8964V27.2506C358.35 40.5055 347.604 51.2506 334.35 51.2506H253.089C239.834 51.2506 229.089 40.5055 229.089 27.2506V-64.8964Z",
                          stroke: "url(#paint3_radial_4346_99959)",
                          strokeWidth: "0.5",
                          strokeDasharray: "2.05 3.41",
                          variants: s,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                        }),
                        (0, i.jsx)(f.m.path, {
                          d: "M66.0322 -64.8964C66.0322 -78.1512 76.7774 -88.8964 90.0322 -88.8964H192.395C205.65 -88.8964 216.395 -78.1512 216.395 -64.8964V27.2506C216.395 40.5055 205.65 51.2506 192.395 51.2506H90.0323C76.7774 51.2506 66.0322 40.5055 66.0322 27.2506V-64.8964Z",
                          stroke: "url(#paint4_radial_4346_99959)",
                          strokeWidth: "0.5",
                          strokeDasharray: "2.05 3.41",
                          variants: s,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                        }),
                        (0, i.jsxs)("g", {
                          filter: "url(#filter1_b_4346_99959)",
                          children: [
                            (0, i.jsx)("rect", {
                              x: "66.3496",
                              y: "62.1036",
                              width: "150",
                              height: "139",
                              rx: "24",
                              fill: "url(#paint5_radial_4346_99959)",
                            }),
                            (0, i.jsx)("rect", {
                              x: "65.8496",
                              y: "61.6036",
                              width: "151",
                              height: "140",
                              rx: "24.5",
                              stroke: "url(#paint8_linear_4346_99959)",
                            }),
                          ],
                        }),
                        (0, i.jsx)("path", {
                          d: "M108.131 60.9898H174.594M141.335 61.2199V1.93152",
                          stroke: "url(#paint9_radial_4346_99959)",
                          strokeWidth: "3",
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter2_f_4346_99959)",
                          children: (0, i.jsx)("path", {
                            d: "M94.3145 60.9898H188.411M141.335 61.2199V1.93152",
                            stroke: "url(#paint10_radial_4346_99959)",
                            strokeWidth: "3",
                          }),
                        }),
                        (0, i.jsxs)("defs", {
                          children: [
                            (0, i.jsxs)("filter", {
                              id: "filter0_f_4346_99959",
                              x: "-188.65",
                              y: "-158.896",
                              width: "660",
                              height: "659",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, i.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, i.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, i.jsx)("feGaussianBlur", {
                                  stdDeviation: "123",
                                  result: "effect1_foregroundBlur_4346_99959",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("filter", {
                              id: "filter1_b_4346_99959",
                              x: "52.3134",
                              y: "48.0674",
                              width: "178.072",
                              height: "167.072",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, i.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, i.jsx)("feGaussianBlur", {
                                  in: "BackgroundImageFix",
                                  stdDeviation: "6.51812",
                                }),
                                (0, i.jsx)("feComposite", {
                                  in2: "SourceAlpha",
                                  operator: "in",
                                  result: "effect1_backgroundBlur_4346_99959",
                                }),
                                (0, i.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_backgroundBlur_4346_99959",
                                  result: "shape",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("filter", {
                              id: "filter2_f_4346_99959",
                              x: "90.3145",
                              y: "-2.06848",
                              width: "102.096",
                              height: "68.5583",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, i.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, i.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, i.jsx)("feGaussianBlur", {
                                  stdDeviation: "2",
                                  result: "effect1_foregroundBlur_4346_99959",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint0_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.214 58.5257) rotate(90) scale(123.673 132.688)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: a.rectStart }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.rectEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint1_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.214 58.5257) rotate(90) scale(123.673 132.688)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: a.rectStart }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.rectEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint2_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.214 58.5257) rotate(90) scale(123.673 132.688)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: a.rectStart }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.rectEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint3_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.214 58.5257) rotate(90) scale(123.673 132.688)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: a.rectStart }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.rectEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint4_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.214 58.5257) rotate(90) scale(123.673 132.688)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: a.rectStart }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.rectEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint5_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.35 88.487) rotate(90) scale(112.617 166.125)",
                              children: [
                                (0, i.jsx)("stop", {
                                  stopColor: a.cardBgStart,
                                }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.cardBgEnd,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("linearGradient", {
                              id: "paint8_linear_4346_99959",
                              x1: "106.634",
                              y1: "58.1285",
                              x2: "106.634",
                              y2: "134.096",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, i.jsx)("stop", {
                                  stopColor: a.openAIAltStart,
                                }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: a.openAIAltEnd,
                                  stopOpacity: "0.55",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint9_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.766 50.0377) rotate(90) scale(32.4982 32.4982)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: "#3AFFE5" }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#38BBAA",
                                  stopOpacity: "0",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("radialGradient", {
                              id: "paint10_radial_4346_99959",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(141.767 50.0377) rotate(90) scale(32.4982 32.4982)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: "#00FFDE" }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#38BBAA",
                                  stopOpacity: "0",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  {}
                ),
              }),
            ],
          });
        },
        j = t(68709),
        _ = (e) => {
          let { isHovered: r } = e,
            { resolvedTheme: t } = (0, u.F)(),
            s = (0, p.useRef)(),
            a = (0, p.useRef)(),
            l = {
              shieldsStroke: (null == t ? void 0 : t.includes("dark"))
                ? "#494949"
                : "#D5D5D5",
              cardBg: (null == t ? void 0 : t.includes("dark"))
                ? "#161616"
                : "#F8F9FA",
              bgGlow: (null == t ? void 0 : t.includes("dark"))
                ? "#009C77"
                : "#00FFD9",
              iconBg: (null == t ? void 0 : t.includes("dark"))
                ? "#112B25"
                : "#DCDCDC",
              smallIcon: (null == t ? void 0 : t.includes("dark"))
                ? "#1DF7C3"
                : "#00826A",
              cardLine: (null == t ? void 0 : t.includes("dark"))
                ? "#1DF7C3"
                : "#00826A",
            };
          return (
            (0, p.useEffect)(() => {
              var e;
              (a.current.style.transform = r
                ? "translateY(-5px)"
                : "translateY(0px)"),
                r &&
                  [
                    ...(null === (e = s.current) || void 0 === e
                      ? void 0
                      : e.querySelectorAll("path")),
                  ].map((e, r) => {
                    (e.style.transition = "opacity 0.2s ease"),
                      setTimeout(() => {
                        (e.style.opacity = "0.1"),
                          setTimeout(() => {
                            e.style.opacity = "1";
                          }, 400);
                      }, 35 * r);
                  });
            }, [r]),
            (0, i.jsx)(
              () =>
                (0, i.jsxs)("svg", {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 284 211",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsxs)("g", {
                      ref: s,
                      children: [
                        (0, i.jsx)("g", {
                          filter: "url(#filter0_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M211.626 48.3233V47.9921L211.305 47.9128L142.456 30.9229L142.355 30.8979L142.253 30.9229L73.4046 47.9128L73.0831 47.9921V48.3233V70.0275V70.1201C73.0831 99.1234 73.0831 113.726 77.0635 126.956C80.8942 139.688 87.3861 151.461 96.1092 161.495C105.173 171.921 117.523 179.714 142.051 195.192L142.109 195.229L142.326 195.403L142.58 195.242L142.658 195.193C167.186 179.715 179.536 171.921 188.6 161.495C197.323 151.461 203.815 139.688 207.646 126.956C211.626 113.726 211.626 99.1234 211.626 70.12V70.0275V48.3233Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter1_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M218.767 41.6039V41.2727L218.446 41.1934L142.456 22.4413L142.355 22.4163L142.254 22.4413L66.2639 41.1934L65.9424 41.2727V41.6039V65.5592V65.6519C65.9424 97.6724 65.9424 113.784 70.3338 128.379C74.5601 142.426 81.7223 155.414 91.346 166.485C101.346 177.988 114.971 186.586 142.051 203.674L142.129 203.724L142.355 203.866L142.58 203.724L142.659 203.674C169.738 186.586 183.364 177.988 193.364 166.485C202.987 155.414 210.15 142.426 214.376 128.379C218.767 113.784 218.767 97.6723 218.767 65.6517V65.5592V41.6039Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter2_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M225.908 34.8843V34.5532L225.587 34.4739L142.456 13.9596L142.355 13.9346L142.254 13.9596L59.1233 34.4739L58.8018 34.5532V34.8843V61.0908V61.1836C58.8018 96.2213 58.8018 113.841 63.6042 129.803C68.226 145.164 76.0585 159.368 86.5829 171.475C97.5185 184.054 112.42 193.457 142.051 212.156L142.129 212.205L142.355 212.348L142.581 212.205L142.659 212.156C172.29 193.457 187.192 184.054 198.127 171.475C208.652 159.368 216.484 145.164 221.106 129.803C225.908 113.842 225.908 96.2214 225.908 61.1839V61.0912V61.0908V34.8843Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter3_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M233.049 28.1649V27.8338L232.728 27.7545L142.457 5.47808L142.355 5.45308L142.254 5.47808L51.9827 27.7545L51.6612 27.8338V28.1649V56.6225V56.7153C51.6612 94.7703 51.6612 113.899 56.8746 131.226C61.8919 147.902 70.3946 163.322 81.8197 176.464C93.6912 190.12 109.868 200.329 142.051 220.637L142.13 220.687L142.355 220.829L142.581 220.687L142.659 220.637C174.842 200.329 191.019 190.12 202.891 176.464C214.316 163.322 222.819 147.902 227.836 131.226C233.049 113.899 233.049 94.7704 233.049 56.7157V56.6229V56.6225V28.1649Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter4_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M240.949 20.7319V20.4008L240.628 20.3214L142.457 -3.90425L142.356 -3.92924L142.255 -3.90425L44.0843 20.3214L43.7628 20.4008V20.7319V51.6797V51.7725C43.7628 93.1651 43.7628 113.963 49.4308 132.801C54.8856 150.931 64.1298 167.695 76.5512 181.984C89.4579 196.831 107.046 207.93 142.052 230.02L142.13 230.069L142.377 230.225L142.596 230.06L142.66 230.02C177.666 207.93 195.254 196.831 208.161 181.984C220.582 167.695 229.827 150.931 235.281 132.801C240.949 113.963 240.949 93.1652 240.949 51.7729V51.68V51.6797V20.7319Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter5_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M249.06 13.1004V12.7693L248.739 12.69L142.458 -13.5371L142.357 -13.5621L142.256 -13.5371L35.9749 12.69L35.6534 12.7693V13.1004V46.6049V46.6978C35.6534 91.5171 35.6534 114.028 41.7881 134.418C47.6922 154.041 57.6977 172.186 71.142 187.651C85.1115 203.72 104.149 215.734 142.052 239.652L142.131 239.702L142.139 239.707L142.147 239.711L142.147 239.711L142.388 239.849L142.597 239.693L142.661 239.653C180.564 215.734 199.602 203.72 213.572 187.651C227.016 172.186 237.021 154.041 242.926 134.418C249.06 114.028 249.06 91.5171 249.06 46.6976V46.6049V13.1004Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter6_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M257.171 5.46885V5.13772L256.85 5.05838L142.459 -23.17L142.358 -23.195L142.256 -23.17L27.8655 5.05838L27.544 5.13772V5.46885V41.53V41.6229C27.544 89.8691 27.544 114.094 34.1455 136.035C40.4988 157.151 51.2656 176.676 65.7328 193.318C80.7653 210.61 101.252 223.538 142.053 249.285L142.132 249.335L142.358 249.477L142.583 249.335L142.662 249.285C183.463 223.538 203.95 210.61 218.982 193.318C233.45 176.676 244.216 157.151 250.57 136.035C257.171 114.094 257.171 89.8692 257.171 41.6233V41.5302V41.53V5.46885Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter7_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M265.875 -2.72111V-3.05225L265.554 -3.13159L142.459 -33.5078L142.358 -33.5328L142.257 -33.5078L19.1624 -3.13159L18.8409 -3.05225V-2.72111V36.0838V36.1768C18.8409 88.1005 18.8409 114.164 25.9433 137.77C32.7787 160.488 44.3625 181.495 59.9275 199.4C76.1006 218.004 98.1422 231.913 142.054 259.623L142.132 259.673L142.358 259.815L142.584 259.673L142.661 259.624C186.574 231.913 208.615 218.004 224.789 199.4C240.354 181.495 251.938 160.488 258.773 137.77C265.875 114.164 265.875 88.1006 265.875 36.1771V36.0842V36.0838V-2.72111Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter8_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M274.974 -11.2833V-11.6144L274.653 -11.6938L142.459 -44.3154L142.358 -44.3404L142.256 -44.3154L10.0628 -11.6938L9.74127 -11.6144V-11.2833V30.3901V30.4831C9.74127 86.2515 9.74127 114.237 17.3674 139.584C24.7068 163.977 37.1447 186.533 53.8573 205.758C71.2229 225.734 94.8902 240.669 142.053 270.43L142.132 270.48L142.14 270.485L142.148 270.49L142.148 270.49L142.368 270.616L142.583 270.48L142.661 270.431C189.825 240.669 213.492 225.734 230.858 205.758C247.571 186.533 260.009 163.977 267.348 139.584C274.974 114.237 274.974 86.2514 274.974 30.4828V30.3901V-11.2833Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter9_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M284.646 -20.3844V-20.7155L284.324 -20.7949L142.459 -55.8032L142.358 -55.8282L142.256 -55.8032L0.390894 -20.7949L0.0693999 -20.7155V-20.3844V24.338V24.431C0.0693977 84.2862 0.0693966 114.315 8.25219 141.512C16.1273 167.686 29.473 191.888 47.4056 212.516C66.0388 233.95 91.4342 249.976 142.054 281.919L142.132 281.968L142.358 282.11L142.583 281.968L142.661 281.919C193.281 249.976 218.676 233.95 237.31 212.516C255.242 191.888 268.588 167.686 276.463 141.512C284.646 114.315 284.646 84.2864 284.646 24.4317V24.3387V24.338V-20.3844Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                        (0, i.jsx)("g", {
                          filter: "url(#filter10_b_4346_100010)",
                          children: (0, i.jsx)("path", {
                            d: "M294.941 -30.0717V-30.4029L294.619 -30.4822L142.459 -68.031L142.358 -68.056L142.256 -68.031L-9.90403 -30.4822L-10.2255 -30.4029V-30.0717V17.8961V17.9892C-10.2255 82.1942 -10.2255 114.398 -1.45022 143.564C6.99513 171.633 21.3072 197.588 40.5382 219.71C60.5207 242.696 87.7556 259.882 142.054 294.147L142.132 294.196L142.387 294.357L142.604 294.183L142.662 294.147C196.96 259.882 224.195 242.696 244.177 219.71C263.408 197.588 277.72 171.633 286.166 143.564C294.941 114.398 294.941 82.1942 294.941 17.9892V17.8961V-30.0717Z",
                            stroke: l.shieldsStroke,
                            strokeWidth: "0.845575",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("g", {
                      filter: "url(#filter11_f_4346_100010)",
                      children: (0, i.jsx)("ellipse", {
                        cx: "143.196",
                        cy: "124.219",
                        rx: "84.9456",
                        ry: "84.4399",
                        fill: l.bgGlow,
                      }),
                    }),
                    (0, i.jsxs)("g", {
                      ref: a,
                      style: {
                        transition: "all 0.18s cubic-bezier(".concat(j.nX, ")"),
                      },
                      filter: "url(#filter12_b_4346_100010)",
                      children: [
                        (0, i.jsx)("rect", {
                          x: "72.8496",
                          y: "79.5647",
                          width: "139",
                          height: "65.3972",
                          rx: "8",
                          fill: l.cardBg,
                        }),
                        (0, i.jsx)("path", {
                          d: "M99.1605 95.8374C99.0961 95.1897 98.8101 94.6745 98.3026 94.2919C97.795 93.9093 97.1567 93.7181 96.3878 93.7181C95.8461 93.7181 95.3688 93.8109 94.956 93.9965C94.5469 94.1821 94.2249 94.4397 93.9901 94.7692C93.759 95.095 93.6435 95.4662 93.6435 95.8828C93.6435 96.1897 93.7098 96.4586 93.8423 96.6897C93.9749 96.9207 94.1529 97.1196 94.3764 97.2862C94.6037 97.4491 94.8537 97.5893 95.1264 97.7067C95.4029 97.8241 95.6813 97.9226 95.9616 98.0022L97.1889 98.3544C97.5601 98.4567 97.9313 98.5874 98.3026 98.7465C98.6738 98.9056 99.0128 99.1063 99.3196 99.3487C99.6302 99.5874 99.8783 99.8809 100.064 100.229C100.253 100.574 100.348 100.989 100.348 101.474C100.348 102.095 100.187 102.654 99.8651 103.15C99.5431 103.646 99.081 104.04 98.4787 104.332C97.8764 104.62 97.1548 104.764 96.3139 104.764C95.5223 104.764 94.8348 104.633 94.2514 104.371C93.6681 104.106 93.2098 103.741 92.8764 103.275C92.5431 102.809 92.3556 102.269 92.3139 101.656H93.4048C93.4427 102.114 93.5942 102.502 93.8594 102.82C94.1245 103.139 94.4692 103.381 94.8935 103.548C95.3177 103.71 95.7912 103.792 96.3139 103.792C96.8935 103.792 97.4086 103.695 97.8594 103.502C98.3139 103.305 98.67 103.032 98.9276 102.684C99.1889 102.332 99.3196 101.923 99.3196 101.457C99.3196 101.063 99.2173 100.733 99.0128 100.468C98.8082 100.199 98.5223 99.9737 98.1548 99.7919C97.7912 99.6101 97.3688 99.4491 96.8878 99.309L95.4957 98.8999C94.5829 98.6272 93.8745 98.2503 93.3707 97.7692C92.867 97.2881 92.6151 96.6745 92.6151 95.9283C92.6151 95.3033 92.7817 94.754 93.1151 94.2806C93.4522 93.8033 93.9067 93.4321 94.4787 93.1669C95.0545 92.898 95.7003 92.7635 96.4162 92.7635C97.1397 92.7635 97.7798 92.8961 98.3366 93.1612C98.8935 93.4264 99.3348 93.7919 99.6605 94.2578C99.9901 94.72 100.166 95.2465 100.189 95.8374H99.1605ZM112.445 98.7465C112.445 99.9586 112.229 101.014 111.797 101.911C111.365 102.805 110.77 103.498 110.013 103.991C109.259 104.479 108.392 104.724 107.411 104.724C106.429 104.724 105.56 104.479 104.803 103.991C104.049 103.498 103.456 102.805 103.024 101.911C102.596 101.014 102.382 99.9586 102.382 98.7465C102.382 97.5343 102.596 96.4813 103.024 95.5874C103.456 94.6897 104.051 93.9965 104.808 93.5078C105.566 93.0154 106.433 92.7692 107.411 92.7692C108.392 92.7692 109.259 93.0154 110.013 93.5078C110.77 93.9965 111.365 94.6897 111.797 95.5874C112.229 96.4813 112.445 97.5343 112.445 98.7465ZM111.411 98.7465C111.411 97.7048 111.236 96.8128 110.888 96.0703C110.539 95.3241 110.064 94.754 109.462 94.3601C108.859 93.9662 108.176 93.7692 107.411 93.7692C106.649 93.7692 105.967 93.9662 105.365 94.3601C104.763 94.754 104.286 95.3222 103.933 96.0647C103.585 96.8071 103.411 97.701 103.411 98.7465C103.411 99.7881 103.585 100.68 103.933 101.423C104.282 102.165 104.757 102.735 105.359 103.133C105.962 103.527 106.645 103.724 107.411 103.724C108.176 103.724 108.859 103.527 109.462 103.133C110.068 102.739 110.545 102.171 110.893 101.428C111.242 100.682 111.414 99.7881 111.411 98.7465ZM124.128 96.5647H123.06C122.98 96.1669 122.836 95.7995 122.628 95.4624C122.423 95.1215 122.166 94.8241 121.855 94.5703C121.545 94.3165 121.192 94.1196 120.798 93.9794C120.404 93.8393 119.978 93.7692 119.52 93.7692C118.785 93.7692 118.115 93.9605 117.509 94.3431C116.906 94.7256 116.423 95.2881 116.06 96.0306C115.7 96.7692 115.52 97.6745 115.52 98.7465C115.52 99.826 115.7 100.735 116.06 101.474C116.423 102.212 116.906 102.773 117.509 103.156C118.115 103.534 118.785 103.724 119.52 103.724C119.978 103.724 120.404 103.654 120.798 103.514C121.192 103.373 121.545 103.178 121.855 102.928C122.166 102.674 122.423 102.377 122.628 102.036C122.836 101.695 122.98 101.326 123.06 100.928H124.128C124.033 101.462 123.855 101.96 123.594 102.423C123.336 102.881 123.007 103.282 122.605 103.627C122.207 103.972 121.749 104.241 121.23 104.434C120.711 104.627 120.141 104.724 119.52 104.724C118.543 104.724 117.675 104.479 116.918 103.991C116.16 103.498 115.565 102.805 115.134 101.911C114.705 101.017 114.491 99.9624 114.491 98.7465C114.491 97.5306 114.705 96.4756 115.134 95.5817C115.565 94.6878 116.16 93.9965 116.918 93.5078C117.675 93.0154 118.543 92.7692 119.52 92.7692C120.141 92.7692 120.711 92.8658 121.23 93.059C121.749 93.2484 122.207 93.5173 122.605 93.8658C123.007 94.2105 123.336 94.612 123.594 95.0703C123.855 95.5287 124.033 96.0268 124.128 96.5647ZM130.874 104.565V103.786L134.675 99.5135C135.171 98.9529 135.571 98.4737 135.874 98.076C136.177 97.6783 136.396 97.3109 136.533 96.9737C136.673 96.6366 136.743 96.2862 136.743 95.9226C136.743 95.4794 136.639 95.0931 136.43 94.7635C136.226 94.4302 135.944 94.1707 135.584 93.9851C135.224 93.7995 134.819 93.7067 134.368 93.7067C133.891 93.7067 133.472 93.809 133.112 94.0135C132.756 94.2181 132.48 94.4984 132.283 94.8544C132.086 95.2105 131.987 95.6196 131.987 96.0817H130.97C130.97 95.4378 131.118 94.8677 131.413 94.3715C131.713 93.8715 132.12 93.4794 132.635 93.1953C133.154 92.9112 133.741 92.7692 134.396 92.7692C135.044 92.7692 135.62 92.9093 136.124 93.1897C136.627 93.4662 137.023 93.8431 137.311 94.3203C137.599 94.7976 137.743 95.3317 137.743 95.9226C137.743 96.3506 137.667 96.7654 137.516 97.1669C137.368 97.5684 137.112 98.0154 136.749 98.5078C136.385 99.0003 135.881 99.6025 135.237 100.315L132.351 103.536V103.61H138.107V104.565H130.874ZM144.685 93.8828V92.9283H153.122V93.8828H149.435V104.565H148.372V93.8828H144.685ZM155.009 107.837C154.808 107.837 154.62 107.818 154.446 107.781C154.272 107.743 154.134 107.701 154.031 107.656L154.304 106.764C154.649 106.87 154.955 106.907 155.224 106.877C155.493 106.851 155.732 106.729 155.94 106.514C156.149 106.301 156.334 105.976 156.497 105.536L156.815 104.65L153.605 95.8374H154.702L157.293 103.229H157.372L159.963 95.8374H161.06L157.366 105.945C157.211 106.366 157.02 106.716 156.793 106.996C156.565 107.281 156.302 107.491 156.003 107.627C155.707 107.767 155.376 107.837 155.009 107.837ZM163.038 107.837V95.8374H164.021V97.5022H164.141C164.262 97.2408 164.429 96.9737 164.641 96.701C164.853 96.4245 165.133 96.1915 165.482 96.0022C165.834 95.8128 166.277 95.7181 166.811 95.7181C167.531 95.7181 168.16 95.9075 168.697 96.2862C169.239 96.6612 169.66 97.1878 169.959 97.8658C170.262 98.54 170.413 99.326 170.413 100.224C170.413 101.125 170.262 101.915 169.959 102.593C169.66 103.271 169.239 103.799 168.697 104.178C168.16 104.557 167.535 104.746 166.822 104.746C166.296 104.746 165.855 104.652 165.499 104.462C165.146 104.273 164.86 104.04 164.641 103.764C164.425 103.483 164.258 103.21 164.141 102.945H164.05V107.837H163.038ZM164.038 100.207C164.038 100.911 164.143 101.536 164.351 102.082C164.563 102.623 164.866 103.049 165.26 103.36C165.658 103.667 166.139 103.82 166.703 103.82C167.283 103.82 167.771 103.661 168.169 103.343C168.571 103.021 168.875 102.587 169.084 102.042C169.296 101.496 169.402 100.885 169.402 100.207C169.402 99.5362 169.298 98.9321 169.089 98.3942C168.885 97.8563 168.582 97.4302 168.18 97.1158C167.779 96.7976 167.286 96.6385 166.703 96.6385C166.135 96.6385 165.652 96.7919 165.254 97.0987C164.857 97.4018 164.554 97.8222 164.345 98.3601C164.141 98.8942 164.038 99.5097 164.038 100.207ZM176.161 104.746C175.346 104.746 174.642 104.557 174.047 104.178C173.452 103.796 172.992 103.267 172.666 102.593C172.344 101.915 172.183 101.135 172.183 100.252C172.183 99.3734 172.344 98.5931 172.666 97.9112C172.992 97.2256 173.441 96.6897 174.013 96.3033C174.589 95.9131 175.253 95.7181 176.007 95.7181C176.481 95.7181 176.937 95.8052 177.376 95.9794C177.816 96.1499 178.21 96.4131 178.558 96.7692C178.911 97.1215 179.189 97.5665 179.393 98.1044C179.598 98.6385 179.7 99.2711 179.7 100.002V100.502H172.882V99.6101H178.666C178.666 99.0495 178.553 98.5457 178.325 98.0987C178.102 97.648 177.789 97.2919 177.388 97.0306C176.99 96.7692 176.53 96.6385 176.007 96.6385C175.454 96.6385 174.967 96.7862 174.547 97.0817C174.126 97.3772 173.797 97.7673 173.558 98.2522C173.323 98.737 173.204 99.2673 173.2 99.8431V100.377C173.2 101.07 173.32 101.676 173.558 102.195C173.801 102.71 174.143 103.11 174.587 103.394C175.03 103.678 175.554 103.82 176.161 103.82C176.573 103.82 176.935 103.756 177.246 103.627C177.56 103.498 177.823 103.326 178.036 103.11C178.251 102.89 178.414 102.65 178.524 102.389L179.484 102.701C179.352 103.068 179.134 103.407 178.831 103.718C178.532 104.029 178.157 104.279 177.706 104.468C177.259 104.654 176.744 104.746 176.161 104.746ZM187.702 92.9283V104.565H186.639V92.9283H187.702ZM191.858 92.9283V104.565H190.795V92.9283H191.858Z",
                          fill: "url(#paint0_linear_4346_100010)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M90.8516 115.565H193.852",
                          stroke: (null == t ? void 0 : t.includes("dark"))
                            ? "#F3F3F3"
                            : "black",
                          strokeOpacity: "0.1",
                          strokeWidth: "0.845575",
                        }),
                        (0, i.jsx)("path", {
                          d: "M97.6961 128.263H97.0285C96.9788 128.015 96.8888 127.785 96.7586 127.574C96.6308 127.361 96.4698 127.175 96.2757 127.017C96.0815 126.858 95.8614 126.735 95.6151 126.647C95.3689 126.56 95.1026 126.516 94.8161 126.516C94.3569 126.516 93.9378 126.636 93.559 126.875C93.1826 127.114 92.8808 127.465 92.6535 127.929C92.4286 128.391 92.3161 128.957 92.3161 129.627C92.3161 130.302 92.4286 130.87 92.6535 131.331C92.8808 131.793 93.1826 132.143 93.559 132.383C93.9378 132.619 94.3569 132.738 94.8161 132.738C95.1026 132.738 95.3689 132.694 95.6151 132.606C95.8614 132.519 96.0815 132.397 96.2757 132.241C96.4698 132.082 96.6308 131.896 96.7586 131.683C96.8888 131.47 96.9788 131.239 97.0285 130.991H97.6961C97.6369 131.324 97.5257 131.636 97.3623 131.924C97.2013 132.211 96.9954 132.462 96.7444 132.677C96.4958 132.893 96.2094 133.061 95.885 133.182C95.5607 133.302 95.2044 133.363 94.8161 133.363C94.2053 133.363 93.6632 133.21 93.1897 132.905C92.7162 132.597 92.3445 132.164 92.0747 131.605C91.8071 131.046 91.6734 130.387 91.6734 129.627C91.6734 128.867 91.8071 128.208 92.0747 127.649C92.3445 127.09 92.7162 126.658 93.1897 126.353C93.6632 126.045 94.2053 125.891 94.8161 125.891C95.2044 125.891 95.5607 125.951 95.885 126.072C96.2094 126.191 96.4958 126.359 96.7444 126.576C96.9954 126.792 97.2013 127.043 97.3623 127.329C97.5257 127.616 97.6369 127.927 97.6961 128.263ZM101.33 133.377C100.821 133.377 100.38 133.258 100.009 133.022C99.6371 132.783 99.3495 132.452 99.1459 132.031C98.9446 131.607 98.844 131.12 98.844 130.568C98.844 130.019 98.9446 129.531 99.1459 129.105C99.3495 128.676 99.63 128.341 99.9875 128.1C100.347 127.856 100.763 127.734 101.234 127.734C101.53 127.734 101.815 127.789 102.09 127.897C102.364 128.004 102.611 128.169 102.828 128.391C103.049 128.611 103.223 128.889 103.35 129.226C103.478 129.559 103.542 129.955 103.542 130.412V130.724H99.2808V130.167H102.896C102.896 129.816 102.825 129.501 102.683 129.222C102.543 128.94 102.348 128.718 102.097 128.554C101.848 128.391 101.561 128.309 101.234 128.309C100.888 128.309 100.584 128.402 100.321 128.586C100.059 128.771 99.8525 129.015 99.7034 129.318C99.5566 129.621 99.482 129.952 99.4797 130.312V130.646C99.4797 131.079 99.5542 131.458 99.7034 131.782C99.8549 132.104 100.069 132.354 100.346 132.532C100.623 132.709 100.951 132.798 101.33 132.798C101.588 132.798 101.814 132.758 102.008 132.677C102.205 132.597 102.369 132.489 102.502 132.354C102.637 132.217 102.738 132.066 102.807 131.903L103.407 132.098C103.324 132.328 103.188 132.54 102.999 132.734C102.812 132.928 102.577 133.084 102.296 133.203C102.016 133.319 101.694 133.377 101.33 133.377ZM104.935 133.263V127.809H105.549V128.647H105.596C105.705 128.372 105.894 128.151 106.164 127.983C106.436 127.812 106.744 127.727 107.087 127.727C107.139 127.727 107.197 127.728 107.261 127.731C107.325 127.733 107.378 127.735 107.421 127.738V128.38C107.392 128.376 107.343 128.369 107.272 128.359C107.201 128.35 107.124 128.345 107.041 128.345C106.757 128.345 106.504 128.405 106.281 128.526C106.061 128.644 105.887 128.809 105.759 129.02C105.631 129.23 105.567 129.471 105.567 129.741V133.263H104.935ZM110.99 127.809V128.359H108.387V127.809H110.99ZM109.2 126.502H109.836V131.839C109.836 132.066 109.875 132.245 109.953 132.375C110.031 132.503 110.133 132.594 110.258 132.649C110.384 132.701 110.517 132.727 110.66 132.727C110.742 132.727 110.813 132.722 110.873 132.713C110.932 132.701 110.984 132.689 111.029 132.677L111.164 133.249C111.102 133.273 111.026 133.294 110.937 133.313C110.847 133.334 110.735 133.345 110.603 133.345C110.371 133.345 110.147 133.294 109.932 133.192C109.718 133.09 109.543 132.939 109.406 132.738C109.269 132.536 109.2 132.287 109.2 131.988V126.502ZM112.432 133.263V127.809H113.068V133.263H112.432ZM112.756 126.871C112.625 126.871 112.514 126.827 112.422 126.74C112.329 126.65 112.283 126.542 112.283 126.417C112.283 126.291 112.329 126.185 112.422 126.097C112.514 126.007 112.625 125.962 112.756 125.962C112.886 125.962 112.997 126.007 113.089 126.097C113.182 126.185 113.228 126.291 113.228 126.417C113.228 126.542 113.182 126.65 113.089 126.74C112.997 126.827 112.886 126.871 112.756 126.871ZM116.984 127.809V128.359H114.303V127.809H116.984ZM115.141 133.263V127.01C115.141 126.716 115.209 126.469 115.343 126.267C115.481 126.066 115.66 125.914 115.88 125.809C116.1 125.705 116.333 125.653 116.579 125.653C116.745 125.653 116.882 125.667 116.991 125.696C117.102 125.722 117.19 125.748 117.254 125.774L117.069 126.328C117.022 126.314 116.964 126.297 116.895 126.278C116.827 126.259 116.74 126.25 116.636 126.25C116.361 126.25 116.15 126.327 116 126.481C115.851 126.634 115.777 126.855 115.777 127.141L115.773 133.263H115.141ZM118.253 133.263V127.809H118.888V133.263H118.253ZM118.576 126.871C118.446 126.871 118.334 126.827 118.242 126.74C118.15 126.65 118.104 126.542 118.104 126.417C118.104 126.291 118.15 126.185 118.242 126.097C118.334 126.007 118.446 125.962 118.576 125.962C118.706 125.962 118.817 126.007 118.91 126.097C119.002 126.185 119.048 126.291 119.048 126.417C119.048 126.542 119.002 126.65 118.91 126.74C118.817 126.827 118.706 126.871 118.576 126.871ZM122.765 133.377C122.256 133.377 121.816 133.258 121.444 133.022C121.073 132.783 120.785 132.452 120.581 132.031C120.38 131.607 120.28 131.12 120.28 130.568C120.28 130.019 120.38 129.531 120.581 129.105C120.785 128.676 121.066 128.341 121.423 128.1C121.783 127.856 122.198 127.734 122.669 127.734C122.965 127.734 123.251 127.789 123.525 127.897C123.8 128.004 124.046 128.169 124.264 128.391C124.484 128.611 124.658 128.889 124.786 129.226C124.914 129.559 124.978 129.955 124.978 130.412V130.724H120.716V130.167H124.331C124.331 129.816 124.26 129.501 124.118 129.222C123.979 128.94 123.783 128.718 123.532 128.554C123.284 128.391 122.996 128.309 122.669 128.309C122.324 128.309 122.02 128.402 121.757 128.586C121.494 128.771 121.288 129.015 121.139 129.318C120.992 129.621 120.918 129.952 120.915 130.312V130.646C120.915 131.079 120.99 131.458 121.139 131.782C121.29 132.104 121.505 132.354 121.782 132.532C122.059 132.709 122.387 132.798 122.765 132.798C123.023 132.798 123.249 132.758 123.444 132.677C123.64 132.597 123.805 132.489 123.937 132.354C124.072 132.217 124.174 132.066 124.243 131.903L124.843 132.098C124.76 132.328 124.624 132.54 124.434 132.734C124.247 132.928 124.013 133.084 123.731 133.203C123.452 133.319 123.13 133.377 122.765 133.377ZM128.334 133.377C127.887 133.377 127.495 133.258 127.159 133.022C126.823 132.785 126.56 132.455 126.371 132.031C126.184 131.607 126.09 131.114 126.09 130.55C126.09 129.989 126.184 129.498 126.371 129.076C126.56 128.653 126.824 128.324 127.163 128.089C127.501 127.852 127.895 127.734 128.345 127.734C128.677 127.734 128.952 127.793 129.172 127.912C129.393 128.028 129.569 128.172 129.702 128.345C129.834 128.518 129.937 128.686 130.011 128.849H130.067V125.991H130.703V133.263H130.085V132.251H130.011C129.937 132.417 129.833 132.587 129.698 132.763C129.563 132.935 129.384 133.081 129.162 133.199C128.942 133.318 128.666 133.377 128.334 133.377ZM128.409 132.798C128.762 132.798 129.062 132.702 129.311 132.51C129.56 132.316 129.749 132.05 129.879 131.711C130.012 131.37 130.078 130.98 130.078 130.54C130.078 130.104 130.013 129.719 129.883 129.385C129.753 129.049 129.563 128.786 129.315 128.597C129.066 128.405 128.764 128.309 128.409 128.309C128.044 128.309 127.737 128.409 127.486 128.608C127.237 128.804 127.048 129.071 126.918 129.407C126.79 129.743 126.726 130.12 126.726 130.54C126.726 130.963 126.791 131.346 126.921 131.687C127.051 132.027 127.241 132.299 127.489 132.5C127.74 132.699 128.047 132.798 128.409 132.798Z",
                          fill: (null == t ? void 0 : t.includes("dark"))
                            ? "white"
                            : "black",
                        }),
                        (0, i.jsx)("rect", {
                          x: "177.543",
                          y: "121.565",
                          width: "16.3076",
                          height: "15.3972",
                          rx: "7.69858",
                          fill: l.iconBg,
                        }),
                        (0, i.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M185.585 125.591C185.655 125.556 185.738 125.556 185.808 125.591L185.958 125.665C186.779 126.07 187.683 126.281 188.598 126.281C188.738 126.281 188.851 126.394 188.851 126.533L188.851 129.2C188.851 130.331 188.27 131.384 187.313 131.988L185.831 132.923C185.749 132.975 185.644 132.975 185.562 132.923L184.08 131.988C183.123 131.384 182.543 130.331 182.543 129.2V126.533C182.543 126.466 182.57 126.402 182.617 126.355C182.664 126.307 182.728 126.281 182.795 126.281C183.711 126.281 184.614 126.07 185.435 125.665L185.585 125.591ZM185.697 126.098L185.659 126.117C184.844 126.519 183.954 126.745 183.048 126.78V129.2C183.048 130.158 183.539 131.05 184.35 131.561L185.697 132.411L187.044 131.561C187.854 131.05 188.346 130.158 188.346 129.2L188.346 126.78C187.44 126.745 186.55 126.519 185.735 126.117L185.697 126.098ZM187.522 127.72C187.621 127.819 187.621 127.978 187.522 128.077L185.527 130.072C185.429 130.17 185.269 130.17 185.171 130.072L184.088 128.989C183.989 128.89 183.989 128.73 184.088 128.632C184.186 128.533 184.346 128.533 184.445 128.632L185.349 129.536L187.165 127.72C187.264 127.622 187.423 127.622 187.522 127.72Z",
                          fill: l.smallIcon,
                        }),
                        (0, i.jsx)("rect", {
                          x: "73.3496",
                          y: "80.0647",
                          width: "138",
                          height: "64.3972",
                          rx: "7.5",
                          stroke: "url(#paint1_linear_4346_100010)",
                        }),
                      ],
                    }),
                    (0, i.jsx)("g", {
                      filter: "url(#filter14_d_4346_100010)",
                      children: (0, i.jsx)("path", {
                        d: "M196.447 62.6772V62.2856L196.067 62.1918L142.472 48.9662L142.352 48.9366L142.232 48.9662L88.638 62.1918L88.2578 62.2856V62.6772V79.5726V79.6817C88.2578 102.224 88.2578 113.615 91.3636 123.937C94.3525 133.871 99.4179 143.057 106.224 150.887C113.296 159.022 122.929 165.101 141.993 177.131L142.085 177.189L142.334 177.346L142.592 177.205L142.592 177.205L142.606 177.197L142.619 177.189L142.712 177.13C161.775 165.101 171.408 159.022 178.48 150.887C185.287 143.057 190.352 133.871 193.341 123.937C196.447 113.615 196.447 102.224 196.447 79.6818V79.5728V79.5726V62.6772Z",
                        stroke: "url(#paint3_linear_4346_100010)",
                        shapeRendering: "crispEdges",
                      }),
                    }),
                    (0, i.jsx)("g", {
                      filter: "url(#filter13_f_4346_100010)",
                      children: (0, i.jsx)("path", {
                        d: "M195.947 79.5726V62.6772L142.352 49.4516L88.7578 62.6772V79.5726C88.7578 102.218 88.7578 113.541 91.8424 123.793C94.8109 133.659 99.8417 142.783 106.601 150.559C113.625 158.638 123.201 164.681 142.352 176.766L142.352 176.766C161.504 164.681 171.079 158.638 178.103 150.559C184.863 142.783 189.894 133.659 192.862 123.793C195.947 113.541 195.947 102.218 195.947 79.5728V79.5726Z",
                        stroke: "url(#paint2_radial_4346_100010)",
                      }),
                    }),
                    (0, i.jsxs)("defs", {
                      children: [
                        (0, i.jsxs)("filter", {
                          id: "filter0_b_4346_100010",
                          x: "61.637",
                          y: "19.4393",
                          width: "161.437",
                          height: "187.505",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter1_b_4346_100010",
                          x: "54.4964",
                          y: "10.9577",
                          width: "175.718",
                          height: "204.431",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter2_b_4346_100010",
                          x: "47.3558",
                          y: "2.47605",
                          width: "189.999",
                          height: "221.395",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter3_b_4346_100010",
                          x: "40.2152",
                          y: "-6.00551",
                          width: "204.281",
                          height: "238.358",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter4_b_4346_100010",
                          x: "32.3167",
                          y: "-15.3878",
                          width: "220.077",
                          height: "257.148",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter5_b_4346_100010",
                          x: "24.2073",
                          y: "-25.0207",
                          width: "236.3",
                          height: "276.398",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter6_b_4346_100010",
                          x: "16.098",
                          y: "-34.6536",
                          width: "252.519",
                          height: "295.654",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter7_b_4346_100010",
                          x: "7.39485",
                          y: "-44.9914",
                          width: "269.925",
                          height: "316.329",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter8_b_4346_100010",
                          x: "-1.70476",
                          y: "-55.799",
                          width: "288.126",
                          height: "337.931",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter9_b_4346_100010",
                          x: "-11.3766",
                          y: "-67.2868",
                          width: "307.47",
                          height: "360.92",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter10_b_4346_100010",
                          x: "-21.6716",
                          y: "-79.5146",
                          width: "328.058",
                          height: "385.413",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "5.51156",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter11_f_4346_100010",
                          x: "-149.761",
                          y: "-168.233",
                          width: "585.914",
                          height: "584.903",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              stdDeviation: "104.006",
                              result: "effect1_foregroundBlur_4346_100010",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter12_b_4346_100010",
                          x: "69.4673",
                          y: "76.1824",
                          width: "145.767",
                          height: "72.1618",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "1.69115",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter13_f_4346_100010",
                          x: "85.2578",
                          y: "45.9366",
                          width: "114.188",
                          height: "134.421",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, i.jsx)("feGaussianBlur", {
                              stdDeviation: "1.5",
                              result: "effect1_foregroundBlur_4346_100010",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("filter", {
                          id: "filter14_d_4346_100010",
                          x: "80.7578",
                          y: "41.4216",
                          width: "123.188",
                          height: "143.504",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.jsx)("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                              result: "hardAlpha",
                            }),
                            (0, i.jsx)("feOffset", {}),
                            (0, i.jsx)("feGaussianBlur", {
                              stdDeviation: "3.5",
                            }),
                            (0, i.jsx)("feComposite", {
                              in2: "hardAlpha",
                              operator: "out",
                            }),
                            (0, i.jsx)("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.95 0",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in2: "BackgroundImageFix",
                              result: "effect1_dropShadow_4346_100010",
                            }),
                            (0, i.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_dropShadow_4346_100010",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                          id: "paint0_linear_4346_100010",
                          x1: "142.352",
                          y1: "87.5647",
                          x2: "142.352",
                          y2: "131.024",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, i.jsx)("stop", {
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "white"
                                : "#1CB199",
                            }),
                            (0, i.jsx)("stop", {
                              offset: "1",
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "white"
                                : "#494949",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                          id: "paint1_linear_4346_100010",
                          x1: "142.35",
                          y1: "74.3898",
                          x2: "142.35",
                          y2: "155.033",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, i.jsx)("stop", {
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#1DF7C3"
                                : "#3AFFE5",
                              stopOpacity: "0.86",
                            }),
                            (0, i.jsx)("stop", {
                              offset: "1",
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#161616"
                                : "#38BBAA",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("radialGradient", {
                          id: "paint2_radial_4346_100010",
                          cx: "0",
                          cy: "0",
                          r: "1",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform:
                            "translate(144.569 41.4294) rotate(90) scale(84.0463 63.1218)",
                          children: [
                            (0, i.jsx)("stop", {
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#3AFFE5"
                                : "#109079",
                            }),
                            (0, i.jsx)("stop", {
                              offset: "1",
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#38BBAA"
                                : "#3DCB8C",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                          id: "paint3_linear_4346_100010",
                          x1: "142.352",
                          y1: "49.4516",
                          x2: "142.352",
                          y2: "79.1828",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, i.jsx)("stop", {
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#1CF7C3"
                                : "#109179",
                            }),
                            (0, i.jsx)("stop", {
                              offset: "1",
                              stopColor: (
                                null == t ? void 0 : t.includes("dark")
                              )
                                ? "#3DCB8C"
                                : "#0B0B0B",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              {}
            )
          );
        },
        m = (e) => {
          let { isHovered: r } = e,
            { resolvedTheme: t } = (0, u.F)(),
            s = (0, p.useRef)(),
            a = {
              circles1: (null == t ? void 0 : t.includes("dark"))
                ? "#105C3B"
                : "#008B4F",
              circles2: (null == t ? void 0 : t.includes("dark"))
                ? "#1A2520"
                : "#DDDFDE",
              pgLogoStart: (null == t ? void 0 : t.includes("dark"))
                ? "#70F8BB"
                : "#7CDBC5",
              pgLogoEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#A3A3A3"
                : "#006136",
              pgLogoBg: (null == t ? void 0 : t.includes("dark"))
                ? "#161616"
                : "white",
              radialBgStart: (null == t ? void 0 : t.includes("dark"))
                ? "#131313"
                : "#F1F3F5",
              radialBgEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#161616"
                : "#F8F9FA",
              coordinatesStart: (null == t ? void 0 : t.includes("dark"))
                ? "#23FF98"
                : "#002313",
              coordinatesEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#49FFAA"
                : "#032C18",
              rectStart: (null == t ? void 0 : t.includes("dark"))
                ? "#17FDDF"
                : "#49615E",
              rectEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#10FFE0"
                : "#202020",
              arrow: (null == t ? void 0 : t.includes("dark"))
                ? "#02FF8F"
                : "#00542F",
              asdfStart: (null == t ? void 0 : t.includes("dark"))
                ? "#23FF98"
                : "#002313",
              asdfEnd: (null == t ? void 0 : t.includes("dark"))
                ? "#49FFAA"
                : "#032C18",
            },
            l = (e) => ({
              transition: ""
                .concat(e, " 0.18s cubic-bezier(")
                .concat(j.nX, ")"),
            }),
            n = {
              animate: {
                strokeDashoffset: 38,
                transition: {
                  ease: "linear",
                  duration: 3,
                  yoyo: !1,
                  repeat: 1 / 0,
                },
              },
              initial: { strokeDashoffset: 0 },
            };
          return (
            (0, p.useEffect)(() => {
              let e = s.current.querySelector("#coordinates"),
                t = s.current.querySelector("#circles"),
                i = s.current.querySelector("#arrow-tl"),
                a = s.current.querySelector("#arrow-tr"),
                l = s.current.querySelector("#arrow-bl"),
                n = s.current.querySelector("#arrow-br");
              (e.style.opacity = r ? "1" : "0.4"),
                (t.style.opacity = r ? "1" : "0.2"),
                (i.style.transform = r
                  ? "translate3d(0,0,0)"
                  : "translate3d(10px,4px,0)"),
                (a.style.transform = r
                  ? "translate3d(0,0,0)"
                  : "translate3d(-5px,2px,0)"),
                (l.style.transform = r
                  ? "translate3d(0,0,0)"
                  : "translate3d(4px,-2px,0)"),
                (n.style.transform = r
                  ? "translate3d(0,0,0)"
                  : "translate3d(-8px,-1px,0)");
            }, [r]),
            (0, i.jsx)(g.X, {
              features: h.H,
              children: (0, i.jsx)(
                () =>
                  (0, i.jsxs)("svg", {
                    ref: s,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 284 211",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, i.jsxs)("g", {
                        id: "rectangles",
                        children: [
                          (0, i.jsx)(f.m.rect, {
                            x: "143.039",
                            y: "23.9514",
                            width: "235.466",
                            height: "117.627",
                            rx: "3",
                            stroke: "url(#paint0_radial_4346_99807)",
                            strokeWidth: "0.5",
                            strokeDasharray: "2.05 3.41",
                            variants: n,
                            initial: "initial",
                            animate: r ? "animate" : "initial",
                          }),
                          (0, i.jsx)(f.m.rect, {
                            x: "-39.0586",
                            y: "151.092",
                            width: "146.622",
                            height: "70.089",
                            rx: "3",
                            stroke: "url(#paint1_radial_4346_99807)",
                            strokeWidth: "0.5",
                            strokeDasharray: "2.05 3.41",
                            variants: n,
                            initial: "initial",
                            animate: r ? "animate" : "initial",
                          }),
                          (0, i.jsx)(f.m.rect, {
                            x: "-61.9512",
                            y: "-24.5244",
                            width: "144.514",
                            height: "110.236",
                            rx: "3",
                            stroke: "url(#paint2_radial_4346_99807)",
                            strokeWidth: "0.5",
                            strokeDasharray: "2.05 3.41",
                            variants: n,
                            initial: "initial",
                            animate: r ? "animate" : "initial",
                          }),
                        ],
                      }),
                      (0, i.jsx)("path", {
                        d: "M102.12 21.5861L102.005 24.4706L104.56 23.1283L102.12 21.5861ZM122.178 59.2388L103.388 23.4619L102.945 23.6944L121.735 59.4712L122.178 59.2388Z",
                        fill: "url(#paint3_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M168.931 34.4283L166.381 35.7809L168.828 37.3132L168.931 34.4283ZM146.498 70.7159L167.949 36.4679L167.525 36.2025L146.074 70.4505L146.498 70.7159Z",
                        fill: "url(#paint4_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M-34.8744 131.287L-32.2163 132.413L-32.5702 129.548L-34.8744 131.287ZM53.3456 120.138L-32.672 130.763L-32.6107 131.259L53.4069 120.635L53.3456 120.138Z",
                        fill: "url(#paint5_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M25.7628 140.804L28.5573 141.529L27.7872 138.747L25.7628 140.804ZM81.9615 124.99L27.8646 139.963L27.998 140.445L82.0949 125.472L81.9615 124.99Z",
                        fill: "url(#paint6_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M0.902166 113.734L3.13731 115.561L3.60186 112.712L0.902166 113.734ZM34.0495 118.886L3.16307 113.85L3.08261 114.343L33.969 119.379L34.0495 118.886Z",
                        fill: "url(#paint7_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M214.22 162.817L212.597 160.43L211.341 163.03L214.22 162.817ZM183.908 148.45L212.086 162.064L212.303 161.614L184.125 148L183.908 148.45Z",
                        fill: "url(#paint8_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M291.251 175.737L289.496 173.445L288.389 176.111L291.251 175.737ZM224.422 148.251L289.077 175.105L289.269 174.643L224.613 147.789L224.422 148.251Z",
                        fill: "url(#paint9_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M280.556 66.6293L277.67 66.6719L279.15 69.1503L280.556 66.6293ZM246.828 87.062L278.752 67.9976L278.496 67.5683L246.572 86.6327L246.828 87.062Z",
                        fill: "url(#paint10_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        d: "M291.098 86.7516L288.408 85.7035L288.845 88.557L291.098 86.7516ZM166.636 106.074L288.912 87.3395L288.836 86.8453L166.561 105.58L166.636 106.074Z",
                        fill: "url(#paint11_linear_4346_99807)",
                      }),
                      (0, i.jsxs)("g", {
                        id: "circles",
                        children: [
                          (0, i.jsx)("circle", {
                            cx: "52.3215",
                            cy: "64.3578",
                            r: "3.04773",
                            transform: "rotate(-9.50119 52.3215 64.3578)",
                            stroke: a.circles1,
                          }),
                          (0, i.jsx)("circle", {
                            cx: "262.54",
                            cy: "116.714",
                            r: "3.04773",
                            stroke: a.circles1,
                          }),
                          (0, i.jsx)("circle", {
                            cx: "227.565",
                            cy: "52.9802",
                            r: "3.04773",
                            stroke: a.circles1,
                          }),
                          (0, i.jsx)("circle", {
                            cx: "199.868",
                            cy: "113.08",
                            r: "3.04773",
                            stroke: a.circles2,
                          }),
                          (0, i.jsx)("circle", {
                            cx: "121.351",
                            cy: "137.441",
                            r: "3.04773",
                            transform: "rotate(-9.50118 121.351 137.441)",
                            stroke: a.circles2,
                          }),
                          (0, i.jsx)("circle", {
                            cx: "72.6067",
                            cy: "162.583",
                            r: "3.04773",
                            transform: "rotate(-9.5012 72.6067 162.583)",
                            stroke: a.circles1,
                          }),
                        ],
                      }),
                      (0, i.jsx)("rect", {
                        x: "-57.6504",
                        y: "0.103638",
                        width: "400",
                        height: "210",
                        fill: "url(#paint12_radial_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M183.411 113.532C182.915 112.029 181.615 110.983 179.934 110.731C179.141 110.613 178.234 110.663 177.159 110.885C175.287 111.271 173.898 111.418 172.884 111.447C176.711 104.986 179.822 97.6186 181.613 90.6834C184.51 79.4696 182.962 74.361 181.153 72.0501C176.367 65.934 169.383 62.6482 160.958 62.5475C156.464 62.4926 152.518 63.38 150.46 64.018C148.543 63.6801 146.483 63.4913 144.32 63.4563C140.268 63.3917 136.687 64.2751 133.627 66.0908C131.933 65.5181 129.215 64.7106 126.075 64.1952C118.691 62.9829 112.739 63.9276 108.386 67.0028C103.115 70.7263 100.671 77.1956 101.123 86.2311C101.267 89.0999 102.871 97.8281 105.398 106.106C106.85 110.864 108.399 114.815 110.001 117.85C112.272 122.155 114.703 124.69 117.432 125.6C118.961 126.109 121.74 126.466 124.663 124.032C125.033 124.481 125.527 124.927 126.183 125.341C127.016 125.866 128.035 126.295 129.052 126.55C132.719 127.466 136.153 127.237 139.082 125.952C139.1 126.473 139.114 126.971 139.126 127.401C139.146 128.098 139.165 128.782 139.19 129.421C139.364 133.745 139.658 137.107 140.53 139.459C140.577 139.588 140.642 139.785 140.71 139.994C141.145 141.326 141.872 143.554 143.721 145.3C145.637 147.108 147.954 147.662 150.076 147.662C151.14 147.662 152.155 147.523 153.046 147.332C156.221 146.651 159.826 145.615 162.434 141.901C164.9 138.39 166.099 133.103 166.316 124.771C166.344 124.535 166.37 124.31 166.395 124.096C166.411 123.951 166.429 123.803 166.446 123.656L167.027 123.707L167.177 123.717C170.41 123.864 174.364 123.178 176.792 122.051C178.711 121.16 184.859 117.914 183.411 113.532Z",
                        fill: a.pgLogoBg,
                      }),
                      (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M183.411 113.532C182.915 112.029 181.615 110.983 179.934 110.731C179.141 110.613 178.234 110.663 177.159 110.885C175.287 111.271 173.898 111.418 172.884 111.447C176.711 104.986 179.822 97.6186 181.613 90.6834C184.51 79.4696 182.962 74.361 181.153 72.0501C176.367 65.934 169.383 62.6482 160.958 62.5475C156.464 62.4926 152.518 63.38 150.46 64.018C148.543 63.6801 146.483 63.4913 144.32 63.4563C140.268 63.3917 136.687 64.2751 133.627 66.0908C131.933 65.5181 129.215 64.7106 126.075 64.1952C118.691 62.9829 112.739 63.9276 108.386 67.0028C103.115 70.7263 100.671 77.1956 101.123 86.2311C101.267 89.0999 102.871 97.8281 105.398 106.106C106.85 110.864 108.399 114.815 110.001 117.85C112.272 122.155 114.703 124.69 117.432 125.6C118.961 126.109 121.74 126.466 124.663 124.032C125.033 124.481 125.527 124.927 126.183 125.341C127.016 125.866 128.035 126.295 129.052 126.55C132.719 127.466 136.153 127.237 139.082 125.952C139.1 126.473 139.114 126.971 139.126 127.401C139.146 128.098 139.165 128.782 139.19 129.421C139.364 133.745 139.658 137.107 140.53 139.459C140.577 139.588 140.642 139.785 140.71 139.994C141.145 141.326 141.872 143.554 143.721 145.3C145.637 147.108 147.954 147.662 150.076 147.662C151.14 147.662 152.155 147.523 153.046 147.332C156.221 146.651 159.826 145.615 162.434 141.901C164.9 138.39 166.099 133.103 166.316 124.771C166.344 124.535 166.37 124.31 166.395 124.096C166.411 123.951 166.429 123.803 166.446 123.656L167.027 123.707L167.177 123.717C170.41 123.864 174.364 123.178 176.792 122.051C178.711 121.16 184.859 117.914 183.411 113.532ZM135.912 88.7858C135.046 88.6652 134.261 88.7769 133.864 89.0773C133.641 89.2465 133.572 89.4424 133.553 89.5773C133.504 89.9345 133.754 90.3294 133.908 90.5331C134.343 91.1098 134.978 91.5061 135.607 91.5935C135.699 91.6061 135.789 91.6122 135.879 91.6122C136.929 91.6122 137.882 90.7953 137.967 90.1923C138.072 89.4372 136.975 88.9338 135.912 88.7858ZM164.612 88.8077H164.612C164.529 88.2158 163.476 88.047 162.476 88.1859C161.478 88.3251 160.51 88.7756 160.591 89.3688C160.656 89.8302 161.488 90.6178 162.475 90.6176C162.558 90.6176 162.642 90.6121 162.727 90.6003C163.385 90.5091 163.868 90.0911 164.097 89.8501C164.447 89.4831 164.649 89.0737 164.612 88.8077ZM181.083 114.159C180.716 113.05 179.537 112.693 177.576 113.098C171.756 114.299 169.671 113.467 168.987 112.963C173.511 106.071 177.233 97.7399 179.241 89.9666C180.192 86.2845 180.717 82.8651 180.76 80.0781C180.807 77.0185 180.287 74.7707 179.212 73.3974C174.879 67.8613 168.521 64.8917 160.823 64.8101C155.532 64.7507 151.061 66.105 150.194 66.4857C148.369 66.0318 146.379 65.7532 144.213 65.7176C140.241 65.6534 136.807 66.6044 133.964 68.5428C132.729 68.0834 129.538 66.9878 125.635 66.3592C118.888 65.2727 113.526 66.0958 109.7 68.8066C105.134 72.0412 103.026 77.8232 103.435 85.9915C103.572 88.7399 105.138 97.194 107.609 105.291C110.862 115.947 114.398 121.979 118.118 123.22C118.553 123.366 119.056 123.467 119.609 123.467C120.966 123.467 122.63 122.855 124.361 120.774C127.237 117.315 129.922 114.416 130.911 113.363C132.374 114.148 133.98 114.586 135.624 114.63C135.627 114.673 135.631 114.716 135.635 114.759C135.305 115.15 135.035 115.493 134.804 115.785C133.666 117.231 133.429 117.531 129.764 118.286C128.721 118.501 125.952 119.072 125.912 121.013C125.867 123.133 129.184 124.024 129.562 124.118C130.88 124.448 132.148 124.611 133.358 124.611C136.301 124.611 138.891 123.643 140.96 121.772C140.897 129.332 141.212 136.782 142.12 139.051C142.863 140.909 144.679 145.451 150.416 145.45C151.258 145.45 152.185 145.352 153.204 145.134C159.191 143.85 161.791 141.204 162.797 135.37C163.335 132.252 164.259 124.807 164.693 120.813C165.61 121.099 166.79 121.23 168.066 121.23C170.727 121.23 173.798 120.664 175.724 119.77C177.887 118.766 181.791 116.3 181.083 114.159ZM166.823 87.1724C166.803 88.3514 166.641 89.4217 166.469 90.5391C166.284 91.7407 166.093 92.983 166.045 94.4912C165.997 95.9588 166.18 97.4848 166.358 98.9603C166.716 101.941 167.083 105.009 165.66 108.037C165.439 107.644 165.226 107.216 165.03 106.741C164.853 106.313 164.469 105.624 163.938 104.671C161.869 100.961 157.025 92.2735 159.505 88.7285C160.243 87.6731 162.118 86.5885 166.823 87.1724ZM161.119 67.1982C168.016 67.3506 173.471 69.9306 177.334 74.8662C180.297 78.6521 177.034 95.8783 167.591 110.739C167.497 110.621 167.402 110.501 167.304 110.378C167.265 110.329 167.225 110.279 167.185 110.229C169.625 106.199 169.148 102.211 168.723 98.6758C168.549 97.225 168.384 95.8546 168.426 94.5675C168.469 93.2029 168.649 92.033 168.824 90.9015C169.038 89.5071 169.256 88.0645 169.196 86.3636C169.241 86.1853 169.259 85.9745 169.236 85.7243C169.082 84.0932 167.22 79.2124 163.425 74.7942C161.349 72.378 158.321 69.6737 154.188 67.8498C155.966 67.4813 158.397 67.1377 161.119 67.1982ZM122.53 119.25C120.622 121.543 119.305 121.104 118.872 120.959C116.05 120.018 112.775 114.053 109.888 104.594C107.39 96.4093 105.93 88.1792 105.814 85.8713C105.45 78.5726 107.219 73.4858 111.073 70.7523C117.346 66.3038 127.659 68.9664 131.803 70.3169C131.744 70.3756 131.682 70.4306 131.623 70.4902C124.822 77.358 124.984 89.0916 125 89.8087C125 90.0855 125.023 90.4773 125.055 91.0163C125.172 92.9896 125.39 96.6627 124.808 100.822C124.267 104.688 125.459 108.471 128.076 111.202C128.347 111.485 128.63 111.75 128.923 112C127.757 113.248 125.225 116.007 122.53 119.25ZM129.794 109.558C127.684 107.356 126.726 104.294 127.165 101.156C127.779 96.7618 127.552 92.9349 127.43 90.8789C127.413 90.5913 127.398 90.3392 127.389 90.1402C128.383 89.2595 132.986 86.7926 136.269 87.5449C137.768 87.8882 138.68 88.9082 139.06 90.6631C141.024 99.748 139.32 103.535 137.951 106.577C137.668 107.204 137.402 107.797 137.174 108.41L136.998 108.884C136.551 110.082 136.135 111.196 135.877 112.254C133.635 112.247 131.453 111.289 129.794 109.558ZM130.14 121.806C129.485 121.643 128.896 121.359 128.551 121.123C128.839 120.987 129.353 120.802 130.244 120.619C134.556 119.731 135.221 119.105 136.675 117.259C137.009 116.835 137.387 116.355 137.91 115.771C137.91 115.771 137.91 115.77 137.911 115.77C138.69 114.898 139.047 115.045 139.693 115.314C140.217 115.531 140.728 116.187 140.935 116.91C141.032 117.251 141.143 117.9 140.783 118.404C137.745 122.656 133.319 122.602 130.14 121.806ZM152.7 142.809C147.426 143.94 145.558 141.248 144.328 138.172C143.533 136.185 143.143 127.229 143.42 117.338C143.424 117.206 143.405 117.079 143.369 116.959C143.337 116.729 143.289 116.495 143.221 116.26C142.809 114.821 141.806 113.617 140.602 113.118C140.123 112.92 139.245 112.556 138.19 112.826C138.415 111.899 138.805 110.852 139.228 109.719L139.406 109.242C139.606 108.704 139.856 108.147 140.122 107.558C141.555 104.374 143.517 100.013 141.387 90.162C140.589 86.4723 137.925 84.6706 133.886 85.0889C131.464 85.3395 129.249 86.3165 128.144 86.8767C127.907 86.9971 127.689 87.1133 127.486 87.2267C127.795 83.5089 128.96 76.5613 133.318 72.1655C136.062 69.398 139.717 68.0313 144.17 68.1049C152.944 68.2486 158.57 72.7512 161.745 76.5032C164.481 79.7364 165.963 82.9932 166.554 84.7497C162.107 84.2977 159.083 85.1755 157.55 87.3672C154.215 92.1346 159.375 101.388 161.854 105.835C162.309 106.65 162.702 107.355 162.825 107.654C163.633 109.611 164.678 110.918 165.442 111.872C165.675 112.164 165.903 112.447 166.075 112.695C164.728 113.083 162.309 113.98 162.53 118.464C162.352 120.714 161.087 131.248 160.445 134.97C159.597 139.887 157.788 141.719 152.7 142.809ZM174.718 117.608C173.341 118.248 171.036 118.727 168.847 118.83C166.429 118.943 165.198 118.559 164.909 118.323C164.772 115.529 165.813 115.237 166.913 114.928C167.086 114.879 167.255 114.832 167.418 114.775C167.519 114.857 167.63 114.939 167.752 115.019C169.695 116.302 173.162 116.44 178.056 115.43C178.073 115.426 178.091 115.423 178.109 115.419C177.449 116.036 176.32 116.865 174.718 117.608Z",
                        fill: "url(#pgLogo)",
                        fillOpacity: "1",
                      }),
                      (0, i.jsx)("path", {
                        id: "arrow-tl",
                        style: l("transform"),
                        d: "M58.7307 67.0865L62.1609 71.7306L64.4677 66.438L58.7307 67.0865ZM130.873 97.9845L63.0557 68.4261L62.6561 69.3429L130.474 98.9012L130.873 97.9845Z",
                        fill: "url(#paint14_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        id: "arrow-tr",
                        style: l("transform"),
                        d: "M217.486 59.3723L211.724 59.0012L214.284 64.1764L217.486 59.3723ZM188.36 74.3344L213.674 61.8153L213.231 60.919L187.917 73.438L188.36 74.3344Z",
                        fill: "url(#paint15_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        id: "arrow-br",
                        style: l("transform"),
                        d: "M255.662 116.714L250.847 113.528L250.496 119.291L255.662 116.714ZM204.542 114.096L251.14 116.939L251.201 115.94L204.603 113.098L204.542 114.096Z",
                        fill: "url(#paint16_linear_4346_99807)",
                      }),
                      (0, i.jsx)("path", {
                        id: "arrow-bl",
                        style: l("transform"),
                        d: "M79.7356 159.947L85.5045 160.177L82.8194 155.066L79.7356 159.947ZM132.609 131.605L83.4868 157.411L83.9518 158.296L133.074 132.491L132.609 131.605Z",
                        fill: "url(#paint17_linear_4346_99807)",
                      }),
                      (0, i.jsxs)("g", {
                        id: "coordinates",
                        style: l("opacity"),
                        children: [
                          (0, i.jsx)("path", {
                            d: "M16.6192 167.276H15.0752V159.812H16.6192V160.42H15.7312V166.676H16.6192V167.276ZM17.2198 165.58C17.2198 165.268 17.4598 165.02 17.7718 165.02C18.0838 165.02 18.3318 165.268 18.3318 165.58C18.3318 165.892 18.0838 166.132 17.7718 166.132C17.4598 166.132 17.2198 165.892 17.2198 165.58ZM21.4222 164.124H19.2542V163.468H21.4222V164.124ZM22.9608 163.5C22.9608 164.292 23.1048 164.852 23.4168 165.18C23.6168 165.388 23.8728 165.516 24.2408 165.516C24.6088 165.516 24.8648 165.388 25.0648 165.18C25.3768 164.852 25.5208 164.292 25.5208 163.5C25.5208 162.708 25.3768 162.148 25.0648 161.82C24.8648 161.612 24.6088 161.484 24.2408 161.484C23.8728 161.484 23.6168 161.612 23.4168 161.82C23.1048 162.148 22.9608 162.708 22.9608 163.5ZM22.1848 163.5C22.1848 162.788 22.3048 162.132 22.6488 161.62C22.9848 161.116 23.5048 160.788 24.2408 160.788C24.9768 160.788 25.4968 161.116 25.8328 161.62C26.1768 162.132 26.2968 162.788 26.2968 163.5C26.2968 164.212 26.1768 164.868 25.8328 165.38C25.4968 165.884 24.9768 166.212 24.2408 166.212C23.5048 166.212 22.9848 165.884 22.6488 165.38C22.3048 164.868 22.1848 164.212 22.1848 163.5ZM28.8838 166.092H28.1158V162.436H26.8598V161.884C27.5798 161.868 28.0758 161.468 28.1958 160.908H28.8838V166.092ZM29.962 165.58C29.962 165.292 30.21 165.044 30.546 165.044C30.89 165.044 31.194 165.3 31.194 165.804C31.194 166.86 30.506 167.3 30.01 167.364V166.948C30.402 166.86 30.666 166.468 30.674 166.084C30.65 166.1 30.586 166.124 30.498 166.124C30.202 166.124 29.962 165.924 29.962 165.58ZM34.3136 165.58C34.3136 165.268 34.5536 165.02 34.8656 165.02C35.1776 165.02 35.4256 165.268 35.4256 165.58C35.4256 165.892 35.1776 166.132 34.8656 166.132C34.5536 166.132 34.3136 165.892 34.3136 165.58ZM38.516 164.124H36.348V163.468H38.516V164.124ZM40.0066 162.772L39.2226 162.676C39.2146 162.604 39.2146 162.532 39.2146 162.468C39.2146 161.58 39.8706 160.788 41.0066 160.788C42.1186 160.788 42.7586 161.516 42.7586 162.38C42.7586 163.06 42.3746 163.604 41.7826 163.98L40.7586 164.636C40.4626 164.828 40.1986 165.044 40.1266 165.364H42.7906V166.092H39.1586C39.1746 165.244 39.5106 164.596 40.3906 164.028L41.2546 163.468C41.7426 163.156 41.9666 162.788 41.9666 162.388C41.9666 161.916 41.6466 161.476 40.9906 161.476C40.3106 161.476 39.9906 161.948 39.9906 162.54C39.9906 162.612 39.9986 162.692 40.0066 162.772ZM43.673 165.58C43.673 165.292 43.921 165.044 44.257 165.044C44.601 165.044 44.905 165.3 44.905 165.804C44.905 166.86 44.217 167.3 43.721 167.364V166.948C44.113 166.86 44.377 166.468 44.385 166.084C44.361 166.1 44.297 166.124 44.209 166.124C43.913 166.124 43.673 165.924 43.673 165.58ZM48.0245 165.58C48.0245 165.268 48.2645 165.02 48.5765 165.02C48.8885 165.02 49.1365 165.268 49.1365 165.58C49.1365 165.892 48.8885 166.132 48.5765 166.132C48.2645 166.132 48.0245 165.892 48.0245 165.58ZM52.2269 164.124H50.0589V163.468H52.2269V164.124ZM53.7655 163.5C53.7655 164.292 53.9095 164.852 54.2215 165.18C54.4215 165.388 54.6775 165.516 55.0455 165.516C55.4135 165.516 55.6695 165.388 55.8695 165.18C56.1815 164.852 56.3255 164.292 56.3255 163.5C56.3255 162.708 56.1815 162.148 55.8695 161.82C55.6695 161.612 55.4135 161.484 55.0455 161.484C54.6775 161.484 54.4215 161.612 54.2215 161.82C53.9095 162.148 53.7655 162.708 53.7655 163.5ZM52.9895 163.5C52.9895 162.788 53.1095 162.132 53.4535 161.62C53.7895 161.116 54.3095 160.788 55.0455 160.788C55.7815 160.788 56.3015 161.116 56.6375 161.62C56.9815 162.132 57.1015 162.788 57.1015 163.5C57.1015 164.212 56.9815 164.868 56.6375 165.38C56.3015 165.884 55.7815 166.212 55.0455 166.212C54.3095 166.212 53.7895 165.884 53.4535 165.38C53.1095 164.868 52.9895 164.212 52.9895 163.5ZM58.6316 162.772L57.8476 162.676C57.8396 162.604 57.8396 162.532 57.8396 162.468C57.8396 161.58 58.4956 160.788 59.6316 160.788C60.7436 160.788 61.3836 161.516 61.3836 162.38C61.3836 163.06 60.9996 163.604 60.4076 163.98L59.3836 164.636C59.0876 164.828 58.8236 165.044 58.7516 165.364H61.4156V166.092H57.7836C57.7996 165.244 58.1356 164.596 59.0156 164.028L59.8796 163.468C60.3676 163.156 60.5916 162.788 60.5916 162.388C60.5916 161.916 60.2716 161.476 59.6156 161.476C58.9356 161.476 58.6156 161.948 58.6156 162.54C58.6156 162.612 58.6236 162.692 58.6316 162.772ZM63.322 167.276H61.778V166.676H62.666V160.42H61.778V159.812H63.322V167.276Z",
                            fill: "url(#paint18_linear_4346_99807)",
                          }),
                          (0, i.jsx)("path", {
                            d: "M280.535 120.798H278.991V113.334H280.535V113.942H279.647V120.198H280.535V120.798ZM281.136 119.102C281.136 118.79 281.376 118.542 281.688 118.542C282 118.542 282.248 118.79 282.248 119.102C282.248 119.414 282 119.654 281.688 119.654C281.376 119.654 281.136 119.414 281.136 119.102ZM283.83 117.022C283.83 117.814 283.974 118.374 284.286 118.702C284.486 118.91 284.742 119.038 285.11 119.038C285.478 119.038 285.734 118.91 285.934 118.702C286.246 118.374 286.39 117.814 286.39 117.022C286.39 116.23 286.246 115.67 285.934 115.342C285.734 115.134 285.478 115.006 285.11 115.006C284.742 115.006 284.486 115.134 284.286 115.342C283.974 115.67 283.83 116.23 283.83 117.022ZM283.054 117.022C283.054 116.31 283.174 115.654 283.518 115.142C283.854 114.638 284.374 114.31 285.11 114.31C285.846 114.31 286.366 114.638 286.702 115.142C287.046 115.654 287.166 116.31 287.166 117.022C287.166 117.734 287.046 118.39 286.702 118.902C286.366 119.406 285.846 119.734 285.11 119.734C284.374 119.734 283.854 119.406 283.518 118.902C283.174 118.39 283.054 117.734 283.054 117.022ZM289.329 117.206L288.945 116.558L290.473 115.15H287.993V114.43H291.513V115.134L290.033 116.502C290.793 116.502 291.633 117.014 291.633 118.078C291.633 118.95 290.961 119.742 289.753 119.742C288.553 119.742 287.873 118.958 287.825 118.11L288.593 117.934C288.625 118.622 289.121 119.054 289.745 119.054C290.457 119.054 290.841 118.614 290.841 118.094C290.841 117.414 290.297 117.126 289.785 117.126C289.625 117.126 289.465 117.158 289.329 117.206ZM292.433 119.102C292.433 118.814 292.681 118.566 293.017 118.566C293.361 118.566 293.665 118.822 293.665 119.326C293.665 120.382 292.977 120.822 292.481 120.886V120.47C292.873 120.382 293.137 119.99 293.145 119.606C293.121 119.622 293.057 119.646 292.969 119.646C292.673 119.646 292.433 119.446 292.433 119.102ZM296.784 119.102C296.784 118.79 297.024 118.542 297.336 118.542C297.648 118.542 297.896 118.79 297.896 119.102C297.896 119.414 297.648 119.654 297.336 119.654C297.024 119.654 296.784 119.414 296.784 119.102ZM300.259 117.206L299.875 116.558L301.403 115.15H298.923V114.43H302.443V115.134L300.963 116.502C301.723 116.502 302.563 117.014 302.563 118.078C302.563 118.95 301.891 119.742 300.683 119.742C299.483 119.742 298.803 118.958 298.755 118.11L299.523 117.934C299.555 118.622 300.051 119.054 300.675 119.054C301.387 119.054 301.771 118.614 301.771 118.094C301.771 117.414 301.227 117.126 300.715 117.126C300.555 117.126 300.395 117.158 300.259 117.206ZM303.362 119.102C303.362 118.814 303.61 118.566 303.946 118.566C304.29 118.566 304.594 118.822 304.594 119.326C304.594 120.382 303.906 120.822 303.41 120.886V120.47C303.802 120.382 304.066 119.99 304.074 119.606C304.05 119.622 303.986 119.646 303.898 119.646C303.602 119.646 303.362 119.446 303.362 119.102ZM307.714 119.102C307.714 118.79 307.954 118.542 308.266 118.542C308.578 118.542 308.826 118.79 308.826 119.102C308.826 119.414 308.578 119.654 308.266 119.654C307.954 119.654 307.714 119.414 307.714 119.102ZM310.408 117.022C310.408 117.814 310.552 118.374 310.864 118.702C311.064 118.91 311.32 119.038 311.688 119.038C312.056 119.038 312.312 118.91 312.512 118.702C312.824 118.374 312.968 117.814 312.968 117.022C312.968 116.23 312.824 115.67 312.512 115.342C312.312 115.134 312.056 115.006 311.688 115.006C311.32 115.006 311.064 115.134 310.864 115.342C310.552 115.67 310.408 116.23 310.408 117.022ZM309.632 117.022C309.632 116.31 309.752 115.654 310.096 115.142C310.432 114.638 310.952 114.31 311.688 114.31C312.424 114.31 312.944 114.638 313.28 115.142C313.624 115.654 313.744 116.31 313.744 117.022C313.744 117.734 313.624 118.39 313.28 118.902C312.944 119.406 312.424 119.734 311.688 119.734C310.952 119.734 310.432 119.406 310.096 118.902C309.752 118.39 309.632 117.734 309.632 117.022ZM315.907 117.206L315.523 116.558L317.051 115.15H314.571V114.43H318.091V115.134L316.611 116.502C317.371 116.502 318.211 117.014 318.211 118.078C318.211 118.95 317.539 119.742 316.331 119.742C315.131 119.742 314.451 118.958 314.403 118.11L315.171 117.934C315.203 118.622 315.699 119.054 316.323 119.054C317.035 119.054 317.419 118.614 317.419 118.094C317.419 117.414 316.875 117.126 316.363 117.126C316.203 117.126 316.043 117.158 315.907 117.206ZM320.113 120.798H318.569V120.198H319.457V113.942H318.569V113.334H320.113V120.798Z",
                            fill: "url(#paint19_linear_4346_99807)",
                          }),
                          (0, i.jsx)("path", {
                            d: "M243.094 56.8276H241.55V49.3636H243.094V49.9716H242.206V56.2276H243.094V56.8276ZM243.694 55.1316C243.694 54.8196 243.934 54.5716 244.246 54.5716C244.558 54.5716 244.806 54.8196 244.806 55.1316C244.806 55.4436 244.558 55.6836 244.246 55.6836C243.934 55.6836 243.694 55.4436 243.694 55.1316ZM246.389 53.0516C246.389 53.8436 246.533 54.4036 246.845 54.7316C247.045 54.9396 247.301 55.0676 247.669 55.0676C248.037 55.0676 248.293 54.9396 248.493 54.7316C248.805 54.4036 248.949 53.8436 248.949 53.0516C248.949 52.2596 248.805 51.6996 248.493 51.3716C248.293 51.1636 248.037 51.0356 247.669 51.0356C247.301 51.0356 247.045 51.1636 246.845 51.3716C246.533 51.6996 246.389 52.2596 246.389 53.0516ZM245.613 53.0516C245.613 52.3396 245.733 51.6836 246.077 51.1716C246.413 50.6676 246.933 50.3396 247.669 50.3396C248.405 50.3396 248.925 50.6676 249.261 51.1716C249.605 51.6836 249.725 52.3396 249.725 53.0516C249.725 53.7636 249.605 54.4196 249.261 54.9316C248.925 55.4356 248.405 55.7636 247.669 55.7636C246.933 55.7636 246.413 55.4356 246.077 54.9316C245.733 54.4196 245.613 53.7636 245.613 53.0516ZM250.368 54.2356L251.12 54.0116C251.168 54.6516 251.64 55.0836 252.288 55.0836C252.904 55.0836 253.4 54.6756 253.4 54.0356C253.4 53.3236 252.88 52.9636 252.28 52.9636C251.912 52.9636 251.56 53.1076 251.336 53.3396C251.064 53.2356 250.832 53.1316 250.568 53.0356L251.24 50.4596H253.976V51.1796H251.76L251.376 52.6676C251.608 52.4116 252.024 52.2836 252.432 52.2836C253.448 52.2836 254.192 52.9316 254.192 54.0036C254.192 54.9796 253.44 55.7716 252.288 55.7716C251.184 55.7716 250.44 55.0516 250.368 54.2356ZM254.952 55.1316C254.952 54.8436 255.2 54.5956 255.536 54.5956C255.88 54.5956 256.184 54.8516 256.184 55.3556C256.184 56.4116 255.496 56.8516 255 56.9156V56.4996C255.392 56.4116 255.656 56.0196 255.664 55.6356C255.64 55.6516 255.576 55.6756 255.488 55.6756C255.192 55.6756 254.952 55.4756 254.952 55.1316ZM259.304 55.1316C259.304 54.8196 259.544 54.5716 259.856 54.5716C260.168 54.5716 260.416 54.8196 260.416 55.1316C260.416 55.4436 260.168 55.6836 259.856 55.6836C259.544 55.6836 259.304 55.4436 259.304 55.1316ZM260.86 54.4756V53.5716L263.084 50.4596H264.164V53.7476H265.052V54.4756H264.164V55.6436H263.404V54.4756H260.86ZM263.404 53.7476V51.2116L261.58 53.7476H263.404ZM265.734 55.1316C265.734 54.8436 265.982 54.5956 266.318 54.5956C266.662 54.5956 266.966 54.8516 266.966 55.3556C266.966 56.4116 266.278 56.8516 265.782 56.9156V56.4996C266.174 56.4116 266.438 56.0196 266.446 55.6356C266.422 55.6516 266.358 55.6756 266.27 55.6756C265.974 55.6756 265.734 55.4756 265.734 55.1316ZM270.085 55.1316C270.085 54.8196 270.325 54.5716 270.637 54.5716C270.949 54.5716 271.197 54.8196 271.197 55.1316C271.197 55.4436 270.949 55.6836 270.637 55.6836C270.325 55.6836 270.085 55.4436 270.085 55.1316ZM272.779 53.0516C272.779 53.8436 272.923 54.4036 273.235 54.7316C273.435 54.9396 273.691 55.0676 274.059 55.0676C274.427 55.0676 274.683 54.9396 274.883 54.7316C275.195 54.4036 275.339 53.8436 275.339 53.0516C275.339 52.2596 275.195 51.6996 274.883 51.3716C274.683 51.1636 274.427 51.0356 274.059 51.0356C273.691 51.0356 273.435 51.1636 273.235 51.3716C272.923 51.6996 272.779 52.2596 272.779 53.0516ZM272.003 53.0516C272.003 52.3396 272.123 51.6836 272.467 51.1716C272.803 50.6676 273.323 50.3396 274.059 50.3396C274.795 50.3396 275.315 50.6676 275.651 51.1716C275.995 51.6836 276.115 52.3396 276.115 53.0516C276.115 53.7636 275.995 54.4196 275.651 54.9316C275.315 55.4356 274.795 55.7636 274.059 55.7636C273.323 55.7636 272.803 55.4356 272.467 54.9316C272.123 54.4196 272.003 53.7636 272.003 53.0516ZM277.645 52.3236L276.861 52.2276C276.853 52.1556 276.853 52.0836 276.853 52.0196C276.853 51.1316 277.509 50.3396 278.645 50.3396C279.757 50.3396 280.397 51.0676 280.397 51.9316C280.397 52.6116 280.013 53.1556 279.421 53.5316L278.397 54.1876C278.101 54.3796 277.837 54.5956 277.765 54.9156H280.429V55.6436H276.797C276.813 54.7956 277.149 54.1476 278.029 53.5796L278.893 53.0196C279.381 52.7076 279.605 52.3396 279.605 51.9396C279.605 51.4676 279.285 51.0276 278.629 51.0276C277.949 51.0276 277.629 51.4996 277.629 52.0916C277.629 52.1636 277.637 52.2436 277.645 52.3236ZM282.336 56.8276H280.792V56.2276H281.68V49.9716H280.792V49.3636H282.336V56.8276Z",
                            fill: "url(#paint20_linear_4346_99807)",
                          }),
                          (0, i.jsx)("path", {
                            d: "M-1.99217 67.4827H-3.53617V60.0187H-1.99217V60.6267H-2.88017V66.8827H-1.99217V67.4827ZM-1.39148 65.7867C-1.39148 65.4747 -1.15148 65.2267 -0.839485 65.2267C-0.527485 65.2267 -0.279485 65.4747 -0.279485 65.7867C-0.279485 66.0987 -0.527485 66.3387 -0.839485 66.3387C-1.15148 66.3387 -1.39148 66.0987 -1.39148 65.7867ZM2.81089 64.3307H0.64289V63.6747H2.81089V64.3307ZM4.34952 63.7067C4.34952 64.4987 4.49352 65.0587 4.80552 65.3867C5.00552 65.5947 5.26152 65.7227 5.62952 65.7227C5.99752 65.7227 6.25352 65.5947 6.45352 65.3867C6.76552 65.0587 6.90952 64.4987 6.90952 63.7067C6.90952 62.9147 6.76552 62.3547 6.45352 62.0267C6.25352 61.8187 5.99752 61.6907 5.62952 61.6907C5.26152 61.6907 5.00552 61.8187 4.80552 62.0267C4.49352 62.3547 4.34952 62.9147 4.34952 63.7067ZM3.57352 63.7067C3.57352 62.9947 3.69352 62.3387 4.03752 61.8267C4.37352 61.3227 4.89352 60.9947 5.62952 60.9947C6.36552 60.9947 6.88552 61.3227 7.22152 61.8267C7.56552 62.3387 7.68552 62.9947 7.68552 63.7067C7.68552 64.4187 7.56552 65.0747 7.22152 65.5867C6.88552 66.0907 6.36552 66.4187 5.62952 66.4187C4.89352 66.4187 4.37352 66.0907 4.03752 65.5867C3.69352 65.0747 3.57352 64.4187 3.57352 63.7067ZM9.84852 63.8907L9.46452 63.2427L10.9925 61.8347H8.51252V61.1147H12.0325V61.8187L10.5525 63.1867C11.3125 63.1867 12.1525 63.6987 12.1525 64.7627C12.1525 65.6347 11.4805 66.4267 10.2725 66.4267C9.07252 66.4267 8.39252 65.6427 8.34452 64.7947L9.11252 64.6187C9.14452 65.3067 9.64052 65.7387 10.2645 65.7387C10.9765 65.7387 11.3605 65.2987 11.3605 64.7787C11.3605 64.0987 10.8165 63.8107 10.3045 63.8107C10.1445 63.8107 9.98452 63.8427 9.84852 63.8907ZM12.9523 65.7867C12.9523 65.4987 13.2003 65.2507 13.5363 65.2507C13.8803 65.2507 14.1843 65.5067 14.1843 66.0107C14.1843 67.0667 13.4963 67.5067 13.0003 67.5707V67.1547C13.3923 67.0667 13.6563 66.6747 13.6643 66.2907C13.6403 66.3067 13.5763 66.3307 13.4883 66.3307C13.1923 66.3307 12.9523 66.1307 12.9523 65.7867ZM17.3038 65.7867C17.3038 65.4747 17.5438 65.2267 17.8558 65.2267C18.1678 65.2267 18.4158 65.4747 18.4158 65.7867C18.4158 66.0987 18.1678 66.3387 17.8558 66.3387C17.5438 66.3387 17.3038 66.0987 17.3038 65.7867ZM21.5062 64.3307H19.3382V63.6747H21.5062V64.3307ZM23.9366 66.2987H23.1686V62.6427H21.9126V62.0907C22.6326 62.0747 23.1286 61.6747 23.2486 61.1147H23.9366V66.2987ZM25.0148 65.7867C25.0148 65.4987 25.2628 65.2507 25.5988 65.2507C25.9428 65.2507 26.2468 65.5067 26.2468 66.0107C26.2468 67.0667 25.5588 67.5067 25.0628 67.5707V67.1547C25.4548 67.0667 25.7188 66.6747 25.7268 66.2907C25.7028 66.3067 25.6388 66.3307 25.5508 66.3307C25.2548 66.3307 25.0148 66.1307 25.0148 65.7867ZM29.3663 65.7867C29.3663 65.4747 29.6063 65.2267 29.9183 65.2267C30.2303 65.2267 30.4783 65.4747 30.4783 65.7867C30.4783 66.0987 30.2303 66.3387 29.9183 66.3387C29.6063 66.3387 29.3663 66.0987 29.3663 65.7867ZM32.0605 63.7067C32.0605 64.4987 32.2045 65.0587 32.5165 65.3867C32.7165 65.5947 32.9725 65.7227 33.3405 65.7227C33.7085 65.7227 33.9645 65.5947 34.1645 65.3867C34.4765 65.0587 34.6205 64.4987 34.6205 63.7067C34.6205 62.9147 34.4765 62.3547 34.1645 62.0267C33.9645 61.8187 33.7085 61.6907 33.3405 61.6907C32.9725 61.6907 32.7165 61.8187 32.5165 62.0267C32.2045 62.3547 32.0605 62.9147 32.0605 63.7067ZM31.2845 63.7067C31.2845 62.9947 31.4045 62.3387 31.7485 61.8267C32.0845 61.3227 32.6045 60.9947 33.3405 60.9947C34.0765 60.9947 34.5965 61.3227 34.9325 61.8267C35.2765 62.3387 35.3965 62.9947 35.3965 63.7067C35.3965 64.4187 35.2765 65.0747 34.9325 65.5867C34.5965 66.0907 34.0765 66.4187 33.3405 66.4187C32.6045 66.4187 32.0845 66.0907 31.7485 65.5867C31.4045 65.0747 31.2845 64.4187 31.2845 63.7067ZM37.9835 66.2987H37.2155V62.6427H35.9595V62.0907C36.6795 62.0747 37.1755 61.6747 37.2955 61.1147H37.9835V66.2987ZM40.2419 67.4827H38.6979V66.8827H39.5859V60.6267H38.6979V60.0187H40.2419V67.4827Z",
                            fill: "url(#paint21_linear_4346_99807)",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("defs", {
                        children: [
                          (0, i.jsxs)("radialGradient", {
                            id: "paint0_radial_4346_99807",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(260.699 83.7471) rotate(90) scale(50.1628 71.9898)",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.rectStart }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.rectEnd,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("radialGradient", {
                            id: "paint1_radial_4346_99807",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(34.2065 186.722) rotate(90) scale(29.89 44.8271)",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.rectStart }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.rectEnd,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("radialGradient", {
                            id: "paint2_radial_4346_99807",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(10.2607 31.5141) rotate(90) scale(47.0109 44.1827)",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.rectStart }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.rectEnd,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint3_linear_4346_99807",
                            x1: "103.644",
                            y1: "20.5905",
                            x2: "123.04",
                            y2: "40.7061",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint4_linear_4346_99807",
                            x1: "170.559",
                            y1: "35.2435",
                            x2: "162.945",
                            y2: "62.1299",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint5_linear_4346_99807",
                            x1: "-28.276",
                            y1: "118.776",
                            x2: "18.0891",
                            y2: "140.665",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint6_linear_4346_99807",
                            x1: "24.9597",
                            y1: "140.108",
                            x2: "35.2785",
                            y2: "116.967",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint7_linear_4346_99807",
                            x1: "0.768258",
                            y1: "112.818",
                            x2: "18.5578",
                            y2: "105.239",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint8_linear_4346_99807",
                            x1: "214.088",
                            y1: "163.734",
                            x2: "194.878",
                            y2: "165.94",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint9_linear_4346_99807",
                            x1: "282.318",
                            y1: "182.011",
                            x2: "256.032",
                            y2: "148.158",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint10_linear_4346_99807",
                            x1: "281.53",
                            y1: "70.3694",
                            x2: "256.656",
                            y2: "79.1142",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "#C4C4C4" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3F3F3F",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint11_linear_4346_99807",
                            x1: "291.112",
                            y1: "98.3415",
                            x2: "190.943",
                            y2: "101.575",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: "white" }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#696969",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("radialGradient", {
                            id: "paint12_radial_4346_99807",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(142.35 95.48) rotate(90) scale(103.327 196.814)",
                            children: [
                              (0, i.jsx)("stop", {
                                stopColor: a.radialBgStart,
                                stopOpacity: "0",
                              }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.radialBgEnd,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "pgLogo",
                            x1: "183.038",
                            y1: "80.9614",
                            x2: "217.562",
                            y2: "142.614",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", {
                                stopColor: a.pgLogoStart,
                                stopOpacity: "0.5",
                              }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.pgLogoEnd,
                                stopOpacity: "1",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint14_linear_4346_99807",
                            x1: "62.3337",
                            y1: "70.1224",
                            x2: "88.2532",
                            y2: "95.5895",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.arrow }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3DCB8C",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint15_linear_4346_99807",
                            x1: "216.624",
                            y1: "71.8806",
                            x2: "189.643",
                            y2: "75.3287",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.arrow }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3DCB8C",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint16_linear_4346_99807",
                            x1: "251.364",
                            y1: "125.828",
                            x2: "206.423",
                            y2: "124.536",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.arrow }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3DCB8C",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint17_linear_4346_99807",
                            x1: "78.8167",
                            y1: "158.5",
                            x2: "101.531",
                            y2: "135.096",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.arrow }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#3DCB8C",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint18_linear_4346_99807",
                            x1: "39.1989",
                            y1: "150.092",
                            x2: "39.1989",
                            y2: "176.291",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", {
                                stopColor: a.coordinatesStart,
                              }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.coordinatesEnd,
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint19_linear_4346_99807",
                            x1: "299.552",
                            y1: "103.614",
                            x2: "299.552",
                            y2: "129.813",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", {
                                stopColor: a.coordinatesStart,
                              }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.coordinatesEnd,
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint20_linear_4346_99807",
                            x1: "261.943",
                            y1: "39.6436",
                            x2: "261.943",
                            y2: "65.8419",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", {
                                stopColor: a.coordinatesStart,
                              }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.coordinatesEnd,
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "paint21_linear_4346_99807",
                            x1: "18.3532",
                            y1: "50.2987",
                            x2: "18.3532",
                            y2: "76.497",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, i.jsx)("stop", { stopColor: a.asdfStart }),
                              (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: a.asdfEnd,
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                {}
              ),
            })
          );
        },
        L = (e) => {
          let { isHovered: r } = e,
            { resolvedTheme: t } = (0, u.F)(),
            s = p.useRef(),
            a = ["1", "2", "3"],
            l = {
              green: (null == t ? void 0 : t.includes("dark"))
                ? "#1CF7C3"
                : "#00B99F",
              gray: (null == t ? void 0 : t.includes("dark"))
                ? "#151918"
                : "#D3D3D3",
            };
          return (
            p.useEffect(() => {
              var e;
              if (!r) return;
              let t = [],
                i = [
                  ...(null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.querySelectorAll("circle")),
                ],
                l = setInterval(() => {
                  null == i ||
                    i.map((e) => {
                      let r = a[Math.floor(Math.random() * a.length)],
                        i = e.dataset.state,
                        s =
                          Math.random() > 0.2 &&
                          (("1" === i && "3" === r) ||
                            ("1" === i && "2" === r) ||
                            ("2" === i && "3" === r));
                      if (s) {
                        let r = Math.round(50 * Math.random() + 40);
                        t.push(
                          setTimeout(() => {
                            e.style.opacity = "0.3";
                          }, r)
                        ),
                          t.push(
                            setTimeout(() => {
                              e.style.opacity = "1";
                            }, 250 + r)
                          );
                      }
                      "3" === i && "2" === r && s
                        ? (e.dataset.state = "1")
                        : (e.dataset.state = r);
                    });
                }, 200);
              return () => {
                clearInterval(l), t.forEach(clearTimeout);
              };
            }, [r]),
            (0, i.jsx)(
              () =>
                (0, i.jsxs)("svg", {
                  ref: s,
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 284 210",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "83.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "118.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "95.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "130.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "106.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "83.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "118.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "95.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "130.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "106.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "83.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "118.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "95.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "130.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "106.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "22.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "57.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "34.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "68.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "45.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "216.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "250.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "227.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "262.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "239.5",
                      cy: "27.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "38.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "49.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "216.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "250.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "227.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "262.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "239.5",
                      cy: "94.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "105.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "116.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "216.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "250.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "227.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "262.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "239.5",
                      cy: "160.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "171.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "154.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "189.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "166.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "201.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.gray,
                    }),
                    (0, i.jsx)("circle", {
                      cx: "178.5",
                      cy: "182.5",
                      r: "2.5",
                      fill: l.green,
                    }),
                  ],
                }),
              {}
            )
          );
        },
        b = t(97804),
        V = () => {
          let e = (0, p.useRef)(null),
            { resolvedTheme: r } = (0, u.F)(),
            t = (0, c.Gc)(767),
            s = (0, b.Y)(e, { margin: "-15%", once: !0 }),
            a = j.xF,
            l = (0, j.O8)({}),
            n = (null == r ? void 0 : r.includes("dark"))
              ? "/images/product/vector/vector-tools-dark".concat(
                  t ? "-mobile" : "",
                  ".png"
                )
              : "/images/product/vector/vector-tools-light".concat(
                  t ? "-mobile" : "",
                  ".png"
                );
          return (0, i.jsx)(g.X, {
            features: h.H,
            children: (0, i.jsx)(f.m.div, {
              ref: e,
              initial: a,
              animate: s ? l : a,
              className: "relative w-full h-full",
              children: (0, i.jsx)(
                () =>
                  (0, i.jsx)(x(), {
                    src: n,
                    alt: "Diagram of Machine Learning tools that integrate with Supabase Vector",
                    layout: "fill",
                    objectFit: "contain",
                    quality: 100,
                  }),
                {}
              ),
            }),
          });
        },
        k = (e) => ({
          metaTitle: "",
          metaDescription: "",
          heroSection: {
            announcement: {
              url: "https://youtu.be/qw4PrtyvJI0?t=10584",
              badge: "AI Engineer Summit",
              announcement: "Watch our CEO's talk",
              target: "_blank",
              hasArrow: !e,
            },
            title: "Supabase Vector",
            h1: (0, i.jsxs)(
              "span",
              {
                className: "heading-gradient",
                children: [
                  "The Postgres Vector database ",
                  (0, i.jsx)("br", { className: "hidden md:block" }),
                  "and AI Toolkit",
                ],
              },
              "vector-h1"
            ),
            subheader: (0, i.jsxs)(i.Fragment, {
              children: [
                "An open source Vector database for developing AI applications.",
                (0, i.jsx)("br", { className: "hidden md:block" }),
                " Use pgvector to store, index, and access embeddings, and our AI toolkit to build AI applications with Hugging Face and OpenAI.",
              ],
            }),
            image: "/images/product/vector/vector-hero.svg",
            cta: { label: "Launch a free database", link: "/dashboard" },
            secondaryCta: {
              label: "Explore documentation",
              link: "/docs/guides/ai",
            },
          },
          highlightsSection: {
            highlights: [
              {
                title: "Postgres + pgvector",
                paragraph:
                  "Use pgvector to store, query, and index your vector embeddings at scale in a Postgres instance.",
                image: m,
              },
              {
                title: "OpenAI and More",
                paragraph:
                  "Easily connect to any LLM or embeddings API, including Hugging Face, SageMaker and more.",
                image: y,
              },
              {
                title: "Secure and Scalable",
                paragraph:
                  "Supabase is SOC2 Type 2 compliant, and comes with an advanced permissions system.",
                image: _,
              },
              {
                title: "Deploy Globally",
                paragraph:
                  "Choose from many globally-distributed data centres or self-host on your own cloud.",
                image: L,
              },
            ],
          },
          integrations: { title: "Leverage the tools you love", image: V },
          useCasesSection: {
            title: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("span", {
                  className: "heading-gradient",
                  children: "What you can build",
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)("span", {
                  className: "heading-gradient",
                  children: "with Supabase Vector?",
                }),
              ],
            }),
            paragraph:
              "Scale effortlessly from experimentation to production-ready AI applications.",
            useCases: [
              {
                icon: "\n          M3 12V15C3 16.6569 6.13401 18 10 18C13.866 18 17 16.6569 17 15V12C17 13.6569 13.866 15 10 15C6.13401 15 3 13.6569 3 12Z\n          M3 7V10C3 11.6569 6.13401 13 10 13C13.866 13 17 11.6569 17 10V7C17 8.65685 13.866 10 10 10C6.13401 10 3 8.65685 3 7Z\n          M17 5C17 6.65685 13.866 8 10 8C6.13401 8 3 6.65685 3 5C3 3.34315 6.13401 2 10 2C13.866 2 17 3.34315 17 5Z\n        ",
                title: "Semantic Search",
                description:
                  "Search your own knowledge base by semantic similarity.",
                cta: {
                  label: "View example",
                  link: "/docs/guides/ai/examples/headless-vector-search",
                },
              },
              {
                icon: "M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z",
                title: "ChatGPT Plugins",
                description:
                  "Enhance chatbot memory with content-based long-term retention.",
                cta: {
                  label: "View example",
                  link: "/docs/guides/ai/examples/building-chatgpt-plugins",
                },
              },
              {
                icon: "M6 2C4.89543 2 4 2.89543 4 4V9.52779C5.06151 8.57771 6.46329 8 8 8C11.3137 8 14 10.6863 14 14C14 15.5367 13.4223 16.9385 12.4722 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 6.88378 15.7893 6.37507 15.4142 6L12 2.58579C11.6249 2.21071 11.1162 2 10.5858 2H6Z\n\n        M4 14C4 11.7909 5.79086 10 8 10C10.2091 10 12 11.7909 12 14C12 16.2091 10.2091 18 8 18C7.25862 18 6.56362 17.7977 5.96818 17.446L4.70711 18.7071C4.31658 19.0976 3.68342 19.0976 3.29289 18.7071C2.90237 18.3166 2.90237 17.6834 3.29289 17.2929L4.55397 16.0318C4.20229 15.4364 4 14.7414 4 14ZM8 12C6.89543 12 6 12.8954 6 14C6 14.5526 6.22276 15.0512 6.58579 15.4142C6.94881 15.7772 7.44744 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12Z\n        ",
                title: "OpenAI completions",
                description:
                  "Generate GPT text completions using OpenAI in Edge Functions.",
                cta: {
                  label: "View example",
                  link: "/docs/guides/ai/examples/openai",
                },
              },
              {
                icon: "\n          M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z\n          M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z\n          M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z\n        ",
                title: "Image Similarity",
                description:
                  "Transform images into image vector representations to detect similarity patterns.",
                cta: {
                  label: "Open in Colab",
                  link: "https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/face_similarity.ipynb",
                },
              },
              {
                icon: "M4 7C4 5.34315 5.34315 4 7 4H12C12.2985 4 12.5656 4.12956 12.7503 4.33882C12.764 4.35438 12.7782 4.36952 12.7929 4.38419L19.7671 11.3584C19.9131 11.5326 20 11.755 20 12C20 12.2985 19.8704 12.5656 19.6612 12.7503C19.6456 12.764 19.6305 12.7782 19.6158 12.7929L12.6416 19.7671C12.4674 19.9131 12.245 20 12 20C11.755 20 11.5326 19.9131 11.3584 19.7671L4.36217 12.7709L4.33882 12.7503C4.12956 12.5656 4 12.2985 4 12V7ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H7.01C7.56228 8 8.01 7.55228 8.01 7C8.01 6.44772 7.56228 6 7.01 6H7Z",
                title: "Data Management",
                description:
                  "Automatically tag, deduplicate or detect patterns in your vector store.",
                cta: {
                  label: "Open in Colab",
                  link: "https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/semantic_text_deduplication.ipynb",
                },
              },
              {
                icon: "M11 4C11 3.44772 10.5523 3 10 3V3.66667C10 4.74852 9.64911 5.80119 9 6.66667L7.6 8.53333C7.21053 9.05262 7 9.68422 7 10.3333V15.7639C7 16.1427 7.214 16.489 7.55279 16.6584L7.60263 16.6833C8.01919 16.8916 8.47854 17 8.94427 17H14.3604C14.8371 17 15.2475 16.6635 15.341 16.1961L16.541 10.1961C16.6647 9.57732 16.1914 9 15.5604 9H11V4ZM3.5 10C3.22386 10 3 10.2239 3 10.5V16.5C3 16.7761 3.22386 17 3.5 17C3.77614 17 4 16.7761 4 16.5V10.5C4 10.2239 3.77614 10 3.5 10Z",
                title: "Next.js Vector Search",
                description:
                  "Learn how to build ChatGPT-style doc search powered by Next.js and OpenAI.",
                cta: {
                  label: "View example",
                  link: "/docs/guides/ai/examples/nextjs-vector-search",
                },
              },
            ],
          },
          APIsection: {
            title: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("span", {
                  className: "heading-gradient",
                  children: "Simple yet",
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)("span", {
                  className: "text-brand",
                  children: "powerful APIs",
                }),
              ],
            }),
            paragraph:
              "Easy-to-use client libraries for managing and querying vector stores in Postgres.",
            cta: {
              label: "Explore documentation",
              link: "/docs/guides/ai/vecs-python-client",
            },
            tabs: [
              {
                label: "Store",
                paragraph:
                  "Efficiently upsert millions of vectors with important metadata.",
                colabUrl:
                  "https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb",
                code: '\ndocs = vx.create_collection(name="docs", dimension=3)\n\n# add records to the collection\ndocs.upsert(\n    vectors=[\n        (\n         "vec0",           # the vector\'s identifier\n         [0.1, 0.2, 0.3],  # the vector. list or np.array\n         {"year": 1973}    # associated  metadata\n        ),\n        (\n         "vec1",\n         [0.7, 0.8, 0.9],\n         {"year": 2012}\n        )\n    ]\n)\n        ',
              },
              {
                label: "Index",
                paragraph:
                  "Build indexes using Cosine distance, L2-Norm distance, or Max Inner Product for fast and efficient querying.",
                colabUrl:
                  "https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb",
                code: '\n# get an existing collection\ndocs = vx.get_collection(name="docs")\n\n# index the collection to be queried by cosine distance\ndocs.create_index(measure=vecs.IndexMeasure.cosine_distance)\n\n# Available options for query measure are:\n#\n# vecs.IndexMeasure.cosine_distance\n# vecs.IndexMeasure.l2_distance\n# vecs.IndexMeasure.max_inner_product\n\n# or use the default (cosine_distance)\ndocs.create_index()\n      ',
              },
              {
                label: "Query",
                paragraph:
                  "Efficient querying and filtering of results based on vector metadata.",
                colabUrl:
                  "https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb",
                code: '\n# get an existing collection\ndocs = vx.get_collection(name="docs")\n\n# Query vectors with optional Metadata Filtering\ndocs.query(\n    query_vector=[0.4,0.5,0.6],\n    filters={"year": {"$eq": 2012}}, # metadata filters\n)\n      ',
              },
            ],
          },
          featuresSection: {
            title: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("span", {
                  className: "heading-gradient",
                  children: "Powerful Features",
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)("span", {
                  className: "text-brand",
                  children: "Scale to millions",
                }),
              ],
            }),
            paragraph:
              "Develop, integrate, and deploy secure and enterprise-grade AI applications at unprecedented speed.",
            cta: { label: "Explore documentation", link: "/docs/guides/ai" },
            features: [
              {
                icon: "M19.7939 21.2285V18.3559C19.7939 15.6682 17.6151 13.4892 14.9273 13.4892M11.2082 15.2286H6.23242C5.40399 15.2286 4.73242 15.9002 4.73242 16.7286V19.7285C4.73242 20.5569 5.40399 21.2285 6.23242 21.2285H10.0606C10.0606 21.2285 10.0606 21.0148 10.0606 18.3559C10.0606 15.697 12.2395 13.4892 14.9273 13.4892M14.9273 13.4892C16.5841 13.4892 17.9273 12.1458 17.9273 10.489C17.9273 8.83213 16.5841 7.48898 14.9273 7.48898C13.2704 7.48898 11.9273 8.83213 11.9273 10.489C11.9273 12.1458 13.2704 13.4892 14.9273 13.4892ZM12.2042 9.22827H6.23242C5.404 9.22827 4.73242 8.5567 4.73242 7.72827V4.72827C4.73242 3.89984 5.40399 3.22827 6.23242 3.22827H18.2324C19.0608 3.22827 19.7324 3.89984 19.7324 4.72827V7.72827C19.7324 8.5567 19.0609 9.22827 18.2324 9.22827H17.6503M6.08311 9.22791V15.2279",
                title: "Fully managed or Self-Hosted",
                text: "Start with our hassle-free cloud platform, or self-host to keep everything within your infrastructure. You choose.",
              },
              {
                icon: "M12.2323 21.9783C14.3462 21.9783 16.0599 17.6131 16.0599 12.2284C16.0599 6.84372 14.3462 2.47856 12.2323 2.47856M12.2323 21.9783C10.1184 21.9783 8.4047 17.6131 8.4047 12.2284C8.4047 6.84372 10.1184 2.47856 12.2323 2.47856M12.2323 21.9783C15.432 21.9783 18.2717 20.4366 20.0495 18.0559M12.2323 21.9783C9.03252 21.9783 6.19277 20.4368 4.41505 18.0559M12.2323 2.47856C15.432 2.47856 18.2717 4.01981 20.0495 6.40045C20.0564 6.40977 20.0634 6.41911 20.0703 6.42846M12.2323 2.47856C9.02002 2.47856 6.1706 4.03191 4.39427 6.42846M2.55542 12.2284H21.9099M20.0495 18.0559C21.2634 16.4302 21.9821 14.4131 21.9821 12.2281C21.9821 10.0557 21.2716 8.04924 20.0703 6.42846M20.0495 18.0559C17.8271 16.9906 15.1343 16.367 12.2323 16.367C9.33023 16.367 6.63737 16.9906 4.41505 18.0559M20.0703 6.42846C17.844 7.49984 15.1434 8.12738 12.2323 8.12738C9.32118 8.12738 6.62057 7.49984 4.39427 6.42846M4.39427 6.42846C3.19294 8.04924 2.48242 10.0557 2.48242 12.2281C2.48242 14.4131 3.20114 16.4302 4.41505 18.0559",
                title: "Global & Multi-Region",
                text: "Automatically provision and configure a fleet of applications across multiple regions to reduce read latency.",
              },
              {
                icon: "M3.44434 12.228C3.44434 13.5631 3.74202 14.8288 4.27463 15.9622M12.2346 3.43774C10.8739 3.43774 9.58552 3.74688 8.43571 4.29875M21.0248 12.228C21.0248 10.8794 20.7211 9.60178 20.1784 8.45974M12.2346 21.0182C13.5925 21.0182 14.8785 20.7103 16.0266 20.1605M16.0266 20.1605C16.5683 20.9408 17.4708 21.4517 18.4927 21.4517C20.1495 21.4517 21.4927 20.1085 21.4927 18.4517C21.4927 16.7948 20.1495 15.4517 18.4927 15.4517C16.8358 15.4517 15.4927 16.7948 15.4927 18.4517C15.4927 19.0867 15.69 19.6756 16.0266 20.1605ZM4.27463 15.9622C3.47509 16.501 2.94922 17.4149 2.94922 18.4517C2.94922 20.1085 4.29236 21.4517 5.94922 21.4517C7.60607 21.4517 8.94922 20.1085 8.94922 18.4517C8.94922 16.7948 7.60607 15.4517 5.94922 15.4517C5.32908 15.4517 4.7529 15.6398 4.27463 15.9622ZM8.43571 4.29875C7.89644 3.5017 6.98401 2.97778 5.94922 2.97778C4.29236 2.97778 2.94922 4.32093 2.94922 5.97778C2.94922 7.63464 4.29236 8.97778 5.94922 8.97778C7.60607 8.97778 8.94922 7.63464 8.94922 5.97778C8.94922 5.35572 8.75989 4.77789 8.43571 4.29875ZM20.1784 8.45974C20.9717 7.9199 21.4927 7.00968 21.4927 5.97778C21.4927 4.32093 20.1495 2.97778 18.4927 2.97778C16.8358 2.97778 15.4927 4.32093 15.4927 5.97778C15.4927 7.63464 16.8358 8.97778 18.4927 8.97778C19.1176 8.97778 19.698 8.78669 20.1784 8.45974Z",
                title: "Integrated",
                text: "Store vector embeddings in the same database as your transactional data, simplifying your applications and improving performance.",
              },
              {
                icon: "M7.25609 19.7285C8.68148 20.6762 10.3925 21.2283 12.2324 21.2283C17.203 21.2283 21.2324 17.1989 21.2324 12.2283C21.2324 12.052 21.2273 11.8768 21.2173 11.703M4.80668 17.3149C3.81356 15.8679 3.23242 14.116 3.23242 12.2283C3.23242 7.25774 7.26186 3.2283 12.2324 3.2283C12.4726 3.2283 12.7106 3.23771 12.946 3.25618M14.0838 12.7647L6.39903 20.4491C5.73878 21.1093 4.66359 21.0936 4.02285 20.4144C3.40796 19.7626 3.42286 18.74 4.05648 18.1064L4.68813 17.4748C4.91734 17.2456 5.2282 17.1169 5.55234 17.1169C6.13125 17.1169 6.63075 16.7107 6.74883 16.144L6.77758 16.006C6.8757 15.535 7.25708 15.1752 7.73294 15.1046L7.89876 15.08C8.42784 15.0015 8.79572 14.5126 8.72453 13.9825C8.68395 13.6803 8.78666 13.3764 9.00228 13.1608L11.8094 10.3538M21.2325 12.221C21.232 11.8884 21.2131 11.5563 21.1761 11.2264M21.1761 11.2264C21.9939 10.2552 22.4867 9.00121 22.4867 7.63214C22.4867 4.5487 19.9871 2.04907 16.9037 2.04907C13.8202 2.04907 11.3206 4.5487 11.3206 7.63214C11.3206 10.7156 13.8202 13.2152 16.9037 13.2152C17.32 13.2152 17.7257 13.1696 18.1161 13.0832M21.1761 11.2264C20.9596 9.29629 20.1226 7.43832 18.7084 5.97684M19.512 6.52365C19.512 7.35157 18.8408 8.02274 18.0129 8.02274C17.185 8.02274 16.5138 7.35157 16.5138 6.52365C16.5138 5.69573 17.185 5.02457 18.0129 5.02457C18.8408 5.02457 19.512 5.69573 19.512 6.52365Z",
                title: "No Vendor Lock-In",
                text: "Supabase uses open source tools to increase portability and avoid lock-in, making it easy to migrate in and out.",
              },
              {
                icon: "M3.51324 13.0353C3.28563 10.2785 4.22645 7.44323 6.3357 5.33398C10.1433 1.52637 16.3167 1.52637 20.1243 5.33398C23.9319 9.14159 23.9319 15.315 20.1243 19.1226C16.3167 22.9302 10.1433 22.9302 6.3357 19.1226C5.43661 18.2235 4.74982 17.1925 4.27533 16.0919M0.948642 11.2135L2.45991 12.7248C3.0457 13.3106 3.99544 13.3106 4.58123 12.7248L6.0925 11.2135M10.6005 17.0718H15.7255C16.554 17.0718 17.2255 16.4002 17.2255 15.5718L17.2255 15.3318C17.2255 14.5033 16.554 13.8318 15.7255 13.8318L10.6005 13.8318C9.77212 13.8318 9.10055 14.5033 9.10055 15.3318L9.10055 15.5718C9.10055 16.4002 9.77212 17.0718 10.6005 17.0718ZM10.9882 13.8326L15.2976 13.8326C16.126 13.8326 16.7976 13.161 16.7976 12.3326L16.7976 12.0925C16.7976 11.2641 16.126 10.5925 15.2976 10.5925H10.9882C10.1598 10.5925 9.48823 11.2641 9.48823 12.0925L9.48823 12.3326C9.48823 13.161 10.1598 13.8326 10.9882 13.8326ZM10.6001 10.5927H15.7251C16.5536 10.5927 17.2251 9.92115 17.2251 9.09272L17.2251 8.85267C17.2251 8.02424 16.5536 7.35267 15.7251 7.35267L10.6001 7.35267C9.77172 7.35267 9.10015 8.02424 9.10015 8.85267L9.10015 9.09272C9.10015 9.92115 9.77172 10.5927 10.6001 10.5927Z",
                title: "Automatic Backups",
                text: "Protect your data using automatic backups with Point In Time Recovery to ensure it's always safe and recoverable.",
              },
              {
                icon: "M13.7324 10.7098V6.22827C13.7324 4.57142 12.3893 3.22827 10.7324 3.22827H6.23242C4.57557 3.22827 3.23242 4.57142 3.23242 6.22827V10.7283C3.23242 12.3851 4.57557 13.7283 6.23242 13.7283H10.6994M8.3111 8.32193L17.7334 17.7442M18.3821 13.5202V16.6084C18.3821 17.4369 17.7106 18.1084 16.8821 18.1084H13.7324M13.7324 21.2283H18.2324C19.8893 21.2283 21.2324 19.8851 21.2324 18.2283V13.7283C21.2324 12.0714 19.8893 10.7283 18.2324 10.7283H13.7324C12.0756 10.7283 10.7324 12.0714 10.7324 13.7283V18.2283C10.7324 19.8851 12.0756 21.2283 13.7324 21.2283Z",
                title: "Highly Scalable",
                text: "Designed for unparalleled high performance and availability at global scale.",
              },
            ],
          },
          quotesSection: {
            title: (0, i.jsxs)(i.Fragment, {
              children: [
                "Customers building on ",
                (0, i.jsx)("br", { className: "hidden md:block" }),
                "Supabase Vector",
              ],
            }),
            customers: [
              {
                type: "customer-story",
                avatar: "",
                customer: "mozilla",
                author: "Hermina Condei",
                role: "Director at MDN, Mozilla",
                target: "_blank",
                quote:
                  "We store embeddings in a PostgreSQL database, hosted by Supabase, to perform a similarity search to identify the most relevant sections within the MDN.",
                image: "/images/customers/logos/mozilla.png",
                abstract:
                  "MDN introduces an AI assistant powered by Supabase Vector to answer all web development questions in real time.",
                url: "https://developer.mozilla.org/en-US/blog/introducing-ai-help/",
              },
              {
                type: "customer-story",
                avatar: "",
                customer: "quivr",
                author: "Stan Girard",
                role: "Founder of Quivr",
                quote:
                  "Supabase Vector powered by pgvector allowed us to create a simple and efficient product. We are storing over 1.6 million embeddings and the performance and results are great. Open source develop can easily contribute thanks to the SQL syntax known by millions of developers.",
                image: "/images/customers/logos/quivr.png",
                abstract: "Quivr launch 5,000 Vector databases on Supabase.",
                url: "/customers/quivr",
              },
              {
                type: "customer-story",
                avatar: "",
                customer: "mendableai",
                author: "Caleb Peffer",
                role: "CEO at Mendable",
                quote:
                  "We tried other vector databases - we tried Faiss, we tried Weaviate, we tried Pinecone. If you’re just doing vector search they’re great, but if you need to store a bunch of metadata that becomes a huge pain.",
                image: "/images/customers/logos/mendableai.png",
                abstract:
                  "Mendable switches from Pinecone to Supabase for PostgreSQL vector embeddings.",
                url: "/customers/mendableai",
              },
            ],
          },
        }),
        M = t(14528),
        v = t(82577);
      let F = l()(
          () => Promise.all([t.e(2084), t.e(1815)]).then(t.bind(t, 21815)),
          { loadableGenerated: { webpack: () => [21815] } }
        ),
        S = l()(() => t.e(3147).then(t.bind(t, 73147)), {
          loadableGenerated: { webpack: () => [73147] },
        }),
        H = l()(
          () =>
            Promise.all([t.e(4525), t.e(8147), t.e(6728)]).then(
              t.bind(t, 31354)
            ),
          { loadableGenerated: { webpack: () => [31354] } }
        ),
        Z = l()(() => t.e(1357).then(t.bind(t, 51357)), {
          loadableGenerated: { webpack: () => [51357] },
        }),
        B = l()(() => t.e(1462).then(t.bind(t, 31462)), {
          loadableGenerated: { webpack: () => [31462] },
        }),
        w = l()(() => t.e(6526).then(t.bind(t, 86526)), {
          loadableGenerated: { webpack: () => [86526] },
        }),
        O = l()(
          () =>
            Promise.all([t.e(9573), t.e(1401), t.e(1434)]).then(
              t.bind(t, 51434)
            ),
          { loadableGenerated: { webpack: () => [51434] } }
        ),
        U = l()(() => t.e(8733).then(t.bind(t, 38733)), {
          loadableGenerated: { webpack: () => [38733] },
        }),
        G = l()(() => t.e(5028).then(t.bind(t, 35028)), {
          loadableGenerated: { webpack: () => [35028] },
        });
      var I = function () {
        let e = (0, c.Gc)(640),
          { basePath: r } = (0, n.useRouter)(),
          t = "Supabase Vector | The Postgres Vector database.",
          a =
            "An open source Vector database for developing AI applications. Use pgvector to store, index, and access embeddings, and our AI toolkit to build AI applications with Hugging Face and OpenAI.",
          l = k(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.PB, {
              title: t,
              description: a,
              openGraph: {
                title: t,
                description: a,
                url: "https://supabase.com/vector",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      r,
                      "/images/product/vector/og.png"
                    ),
                  },
                ],
              },
            }),
            (0, i.jsxs)(o.default, {
              className: "!bg-alternative",
              children: [
                (0, i.jsx)(M.Z, { activePage: v.$7.VECTOR }),
                (0, i.jsx)(F, { ...l.heroSection }),
                (0, i.jsx)(S, { ...l.highlightsSection }),
                (0, i.jsx)(B, { ...l.integrations }),
                (0, i.jsx)(O, { ...l.APIsection }),
                (0, i.jsxs)("div", {
                  className: "bg-alternative",
                  children: [
                    (0, i.jsx)(Z, { ...l.useCasesSection }),
                    (0, i.jsx)(H, { ...l.featuresSection }),
                  ],
                }),
                (0, i.jsx)(w, { ...l.quotesSection }),
                (0, i.jsx)("div", {
                  className: "bg-gradient-to-t from-alternative to-transparent",
                  children: (0, i.jsx)(G, {}),
                }),
                (0, i.jsxs)("div", {
                  className: "bg-background",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "w-full h-[1px] bg-gradient-to-r from-background-alternative via-border to-background-alternative",
                    }),
                    (0, i.jsx)(U, { currentProduct: C.ZF.VECTOR }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    31395: function () {},
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 59434));
      }
    ),
      (_N_E = e.O());
  },
]);
