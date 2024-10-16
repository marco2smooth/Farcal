(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7468, 7042, 1815, 1070, 2084],
  {
    49112: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/open-source",
        function () {
          return s(44656);
        },
      ]);
    },
    57042: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(52322),
        n = s(39097),
        a = s.n(n),
        i = s(44382),
        o = s(29982);
      t.default = (e) => {
        let { darkerBg: t, className: s } = e;
        return (0, r.jsxs)("div", {
          className: (0, i.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            s
          ),
          children: [
            (0, r.jsx)("div", {
              className: "col-span-12",
              children: (0, r.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, r.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, r.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, r.jsx)(o.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, r.jsx)(a(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, r.jsx)(o.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, r.jsx)(a(), {
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
    21221: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(52322);
      t.default = function (e) {
        let { icon: t, color: s } = e;
        return (0, r.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            s && "black" !== s
              ? ""
              : "bg-foreground text-background-alternative",
            s && "gray" === s ? "bg-border-strong text-foreground-light" : "",
            s && "green" === s ? "bg-brand text-brand-100" : "",
            s && "alt" === s ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, r.jsx)("svg", {
            className: [
              "h-5 w-5",
              s && "black" !== s ? "" : "stroke-background",
              s && "gray" === s ? "stroke-foreground-light" : "",
              s && "green" === s ? "stroke-brand-200" : "",
              s && "alt" === s ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, r.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: t,
            }),
          }),
        });
      };
    },
    21815: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        });
      var r = s(52322),
        n = s(96577),
        a = s.n(n),
        i = s(39097),
        o = s.n(i),
        l = s(44382),
        c = s(29982),
        d = s(15241),
        p = s.n(d),
        u = s(2784),
        x = s(83940);
      let g = u.forwardRef(function (e, t) {
        return u.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          u.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 8l4 4m0 0l-4 4m4-4H3",
          })
        );
      });
      var h = (e) => {
          let {
            url: t,
            announcement: s,
            badge: n,
            target: a = "_self",
            className: i,
            hasArrow: c = !0,
          } = e;
          return (0, r.jsx)("div", {
            className: (0, l.cn)(
              "relative w-fit max-w-xl flex justify-center",
              i
            ),
            children: (0, r.jsxs)(o(), {
              href: t,
              target: a,
              className: (0, l.cn)(
                "\n          announcement-link\n          group/announcement\n          relative\n          flex flex-row\n          items-center\n          p-1 pr-3\n          text-sm\n          w-auto\n          gap-2\n          text-left\n          rounded-full\n          bg-opacity-20\n          border\n          border-background-surface-300\n          hover:border-foreground-muted\n          hover:border-opacity-30\n          shadow-md\n          overflow-hidden\n          focus-visible:outline-none focus-visible:ring-brand-600 focus-visible:ring-2 focus-visible:rounded-full\n          ",
                !n && "px-4"
              ),
              children: [
                n &&
                  (0, r.jsx)(x.C, {
                    variant: "brand",
                    size: "large",
                    className: "py-1 announcement-badge",
                    children: n,
                  }),
                (0, r.jsx)("span", {
                  className: "text-foreground announcement-text",
                  children: s,
                }),
                c &&
                  (0, r.jsx)(g, {
                    className:
                      "announcement-icon h-4 ml-2 -translate-x-1 text-foreground transition-transform group-hover/announcement:translate-x-0",
                  }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover/announcement:opacity-100 transition-opacity overflow-hidden rounded-full from-background-surface-100 to-background-surface-300 backdrop-blur-md ",
                }),
              ],
            }),
          });
        },
        m = s(21221),
        f = s(58371),
        b = (e) => {
          var t;
          return (0, r.jsx)("div", {
            className: (0, l.cn)(
              "container relative w-full mx-auto px-6 pt-2 pb-0 sm:px-16 xl:px-20",
              e.className
            ),
            children: (0, r.jsxs)("div", {
              className: "flex flex-col text-center items-center",
              children: [
                e.image && "string" == typeof e.image
                  ? (0, r.jsx)("div", {
                      className:
                        "relative w-full max-w-[630px] mx-auto z-0 aspect-[2.3/1] -mt-8 -mb-8 md:-mb-12 lg:-mb-12",
                      children: (0, r.jsx)(a(), {
                        src: e.image,
                        priority: !0,
                        layout: "fill",
                        objectFit: "contain",
                        objectPosition: "top",
                        alt: "",
                      }),
                    })
                  : (0, r.jsx)("div", {
                      className:
                        "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                      children: e.image,
                    }),
                (0, r.jsxs)("div", {
                  className:
                    "relative w-full z-10 flex flex-col items-center space-y-2 mx-auto max-w-2xl",
                  children: [
                    e.announcement &&
                      (0, r.jsx)(h, {
                        ...e.announcement,
                        className: "pb-4 md:pb-4 z-10",
                      }),
                    (0, r.jsx)("div", {
                      children:
                        e.icon || e.title
                          ? (0, r.jsxs)("div", {
                              className:
                                "mb-2 flex justify-center items-center gap-3",
                              children: [
                                e.icon &&
                                  (0, r.jsx)(m.default, { icon: e.icon }),
                                e.title &&
                                  (0, r.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-brand font-mono uppercase tracking-widest text-sm",
                                      children: e.title,
                                    },
                                    "product-name-".concat(e.title)
                                  ),
                              ],
                            })
                          : null,
                    }),
                    (0, r.jsxs)("div", {
                      className: (0, l.cn)(p()["appear-from-bottom"]),
                      children: [
                        (0, r.jsx)(
                          "h1",
                          {
                            className:
                              "h1 text-3xl md:text-4xl tracking-[-1.5px]",
                            children: e.h1,
                          },
                          "h1"
                        ),
                        (0, r.jsx)("p", {
                          className: "p !text-foreground-light",
                          children: e.subheader,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "w-full sm:w-auto flex flex-col items-stretch sm:flex-row pt-2 sm:items-center gap-2",
                      children: [
                        e.cta &&
                          (0, r.jsx)(c.z, {
                            size: "medium",
                            className: "text-white",
                            asChild: !0,
                            children: (0, r.jsx)(o(), {
                              href: e.cta.link,
                              as: e.cta.link,
                              children:
                                null !== (t = e.cta.label) && void 0 !== t
                                  ? t
                                  : "Start for free",
                            }),
                          }),
                        e.video &&
                          (0, r.jsx)(c.z, {
                            type: "default",
                            size: "medium",
                            icon: (0, r.jsx)(f.Z, {}),
                            asChild: !0,
                            children: (0, r.jsx)(o(), {
                              href: e.video,
                              as: e.video,
                              children: "Watch video",
                            }),
                          }),
                        e.secondaryCta &&
                          (0, r.jsx)(c.z, {
                            type: "default",
                            size: "medium",
                            asChild: !0,
                            children: (0, r.jsx)(o(), {
                              href: e.secondaryCta.link,
                              as: e.secondaryCta.link,
                              children: e.secondaryCta.label,
                            }),
                          }),
                      ],
                    }),
                    e.footer &&
                      (0, r.jsx)("div", {
                        className: "mb-4",
                        children: e.footer,
                      }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    44656: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return D;
          },
        });
      var r,
        n,
        a = s(52322);
      s(31395);
      var i = s(5632),
        o = s(55351),
        l = s(27478),
        c = s(37637),
        d = s(57042),
        p = s(2784),
        u = s(5126),
        x = s(91631),
        g = s(30175),
        h = s(22965),
        m = s(44382),
        f = s(25040),
        b = s.n(f);
      let v = () => {
        let { resolvedTheme: e } = (0, h.F)(),
          { width: t } = (0, x.Z)(),
          s = (0, g.Gc)(640),
          r = {
            color: (null == e ? void 0 : e.includes("dark"))
              ? "#00d4ad"
              : "#015a42",
            boxWidth: t ? 7 * t : 7500,
            boxHeight: t ? 5 * t : 6e3,
            xLines: s ? 20 : 49,
            yLines: s ? 65 : 130,
            strokeWidth: 1,
          };
        return (0, a.jsx)("div", {
          className:
            "relative -z-10 ![perspective:1200px] sm:![perspective:1200px] md:![perspective:1200px] lg:![perspective:1200px]",
          children: (0, a.jsx)("div", {
            style: {
              transform: "rotateX(85deg)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            },
            children: (0, a.jsx)("div", {
              className: [b()["hero-grid-lines"]].join(" "),
              children: (0, a.jsx)(
                () =>
                  (0, a.jsxs)("svg", {
                    preserveAspectRatio: "none",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 ".concat(r.boxWidth, " ").concat(r.boxHeight),
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      [...Array(r.yLines)].map((e, t) => {
                        let s = (r.boxWidth * t) / r.yLines;
                        return (0, a.jsx)(
                          "line",
                          {
                            x1: r.boxHeight,
                            y1: s,
                            x2: "0",
                            y2: s,
                            stroke: r.color,
                            strokeWidth: r.strokeWidth,
                            shapeRendering: "geometricPrecision",
                          },
                          "y-".concat(t)
                        );
                      }),
                      [...Array(r.xLines)].map((e, t) => {
                        let n = (r.boxHeight * t) / r.xLines;
                        return (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(
                              "line",
                              {
                                x1: n,
                                y1: r.boxWidth,
                                x2: n,
                                y2: "0",
                                stroke: r.color,
                                strokeWidth: r.strokeWidth,
                                shapeRendering: "geometricPrecision",
                              },
                              "x-".concat(t)
                            ),
                            s
                              ? 9 === t &&
                                (0, a.jsx)("line", {
                                  x1: n,
                                  y1: r.boxWidth,
                                  x2: n,
                                  y2: "0",
                                  stroke: "url(#electric-pulse)",
                                  strokeLinecap: "round",
                                  strokeWidth: 4,
                                  shapeRendering: "geometricPrecision",
                                })
                              : 25 === t &&
                                (0, a.jsx)("line", {
                                  x1: n,
                                  y1: r.boxWidth,
                                  x2: n,
                                  y2: "0",
                                  stroke: "url(#electric-pulse)",
                                  strokeLinecap: "round",
                                  strokeWidth: 4,
                                  shapeRendering: "geometricPrecision",
                                }),
                            s
                              ? 14 === t &&
                                (0, a.jsx)("line", {
                                  x1: n,
                                  y1: r.boxWidth,
                                  x2: n,
                                  y2: "0",
                                  stroke: "url(#electric-pulse-2)",
                                  strokeLinecap: "round",
                                  strokeWidth: 4,
                                  shapeRendering: "geometricPrecision",
                                })
                              : 33 === t &&
                                (0, a.jsx)("line", {
                                  x1: n,
                                  y1: r.boxWidth,
                                  x2: n,
                                  y2: "0",
                                  stroke: "url(#electric-pulse-2)",
                                  strokeLinecap: "round",
                                  strokeWidth: 4,
                                  shapeRendering: "geometricPrecision",
                                }),
                          ],
                        });
                      }),
                      (0, a.jsxs)("defs", {
                        children: [
                          (0, a.jsxs)(u.E.linearGradient, {
                            animate: {
                              x2: [r.boxWidth / 2, 0, r.boxWidth / 2],
                              x1: [r.boxWidth / 2, 0, r.boxWidth / 2],
                              y1: [r.boxHeight, r.boxHeight / 3, 0],
                              y2: [r.boxHeight, r.boxHeight / 2, 0],
                            },
                            transition: {
                              duration: s ? 4 : 5,
                              repeat: 1 / 0,
                              ease: "linear",
                            },
                            id: "electric-pulse",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, a.jsx)("stop", {
                                stopColor: r.color,
                                stopOpacity: "0",
                              }),
                              (0, a.jsx)("stop", {
                                stopColor: r.color,
                                stopOpacity: "0.8",
                              }),
                              (0, a.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--colors-brand9)",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(u.E.linearGradient, {
                            animate: {
                              x2: [r.boxWidth / 2, 0, r.boxWidth / 2],
                              x1: [r.boxWidth / 2, 0, r.boxWidth / 2],
                              y1: [r.boxHeight, r.boxHeight / 3, 0],
                              y2: [r.boxHeight, r.boxHeight / 2, 0],
                            },
                            transition: {
                              duration: s ? 4 : 5,
                              repeat: 1 / 0,
                              ease: "linear",
                              delay: 2,
                            },
                            id: "electric-pulse-2",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, a.jsx)("stop", {
                                stopColor: r.color,
                                stopOpacity: "0",
                              }),
                              (0, a.jsx)("stop", {
                                stopColor: r.color,
                                stopOpacity: "0.8",
                              }),
                              (0, a.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--colors-brand9)",
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
          }),
        });
      };
      var j = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "absolute z-[-4] flex flex-col top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 z-[1] w-full h-4/5 bg-gradient-to-t from-background to-transparent",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "absolute top-0 z-[1] w-full h-2/5 bg-gradient-to-b from-background to-transparent",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: (0, m.cn)(
                  "absolute inset-0 w-full h-[300px] lg:h-[500px] overflow-hidden pointer-events-none",
                  b()["hero-container"]
                ),
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute select-none pointer-events-none inset-0 z-[3] blur-[100px] w-full h-full opacity-60",
                    style: { transform: "translateZ(0px)" },
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 z-[-2] w-full h-full bg-gradient-to-t from-background to-transparent",
                  }),
                  (0, a.jsx)(v, {}),
                ],
              }),
            ],
          }),
        C = s(21815),
        w = s(39097),
        y = s.n(w),
        N = s(45781),
        k = s(41401),
        _ = s(12541),
        S = s.n(_),
        R = () =>
          (0, a.jsx)("div", {
            className:
              "w-full h-full flex flex-col items-center justify-center",
            children: (0, a.jsx)("div", {
              children: (0, a.jsx)("svg", {
                width: "60",
                height: "62",
                viewBox: "0 0 60 62",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: S().loading,
                children: (0, a.jsx)("path", {
                  d: "M30.2571 4.12811L30.257 4.12389C30.2133 1.21067 26.5349 -0.034778 24.7224 2.24311L1.76109 31.0996C-1.21104 34.8348 1.45637 40.34 6.23131 40.34H29.4845L29.7563 58.4432C29.8 61.3564 33.4783 62.6016 35.2908 60.324L34.8996 60.0127L35.2908 60.324L58.2521 31.4674C61.2241 27.7322 58.5568 22.227 53.782 22.227H30.3762L30.2571 4.12811Z",
                  stroke: "hsl(var(--brand-default))",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                }),
              }),
            }),
          });
      let L = (0, s(55132).Z)("Star", [
        [
          "polygon",
          {
            points:
              "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6",
          },
        ],
      ]);
      var E = s(93089),
        W = (e) => {
          let { repo: t, activeTab: s, index: r } = e;
          return (0, a.jsx)(
            u.E.div,
            {
              initial: { opacity: 0, y: 5 },
              animate: { opacity: 1, y: 0, transition: { delay: 0 + r / 25 } },
              exit: { opacity: 0, y: 5, transition: { duration: 0.05 } },
              className: "h-full",
              children: (0, a.jsx)(y(), {
                href: t.html_url,
                target: "_blank",
                className: "h-full",
                children: (0, a.jsxs)(E.Z, {
                  outerClassName: "md:h-full",
                  innerClassName:
                    "relative group flex flex-col gap-2 p-4 min-h-[170px] flex-1 md:h-full",
                  hasActiveOnHover: !0,
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className:
                            "fill-foreground-lighter grouopp-hover:fill-foreground",
                          children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 3.33215C7.09969 3.33215 3.12744 7.31061 3.12744 12.2198C3.12744 16.1459 5.66943 19.4775 9.19538 20.6523C9.63901 20.7339 9.80049 20.4597 9.80049 20.2237C9.80049 20.0135 9.7934 19.4536 9.78896 18.7127C7.32061 19.2495 6.79979 17.5211 6.79979 17.5211C6.39698 16.4937 5.81494 16.2204 5.81494 16.2204C5.00931 15.6703 5.87616 15.681 5.87616 15.681C6.76608 15.7431 7.23455 16.5966 7.23455 16.5966C8.02598 17.9541 9.31161 17.562 9.81646 17.3348C9.89809 16.7608 10.127 16.3695 10.3808 16.1477C8.41105 15.9232 6.33931 15.1602 6.33931 11.7549C6.33931 10.7851 6.68534 9.99101 7.25229 9.36993C7.16091 9.14545 6.85658 8.24134 7.33925 7.0187C7.33925 7.0187 8.08454 6.77914 9.7792 7.92903C10.503 7.73162 11.2498 7.63108 12 7.63002C12.7542 7.63357 13.5128 7.73206 14.2217 7.92903C15.9155 6.77914 16.659 7.01781 16.659 7.01781C17.1434 8.24134 16.8382 9.14545 16.7477 9.36993C17.3155 9.99101 17.6598 10.7851 17.6598 11.7549C17.6598 15.169 15.5845 15.9205 13.6086 16.1406C13.9271 16.4147 14.2102 16.9569 14.2102 17.7864C14.2102 18.9736 14.1995 19.9327 14.1995 20.2237C14.1995 20.4615 14.3592 20.7383 14.8099 20.6514C16.5767 20.0588 18.1126 18.9259 19.2005 17.4129C20.2884 15.8999 20.8733 14.0833 20.8726 12.2198C20.8726 7.31061 16.8994 3.33215 12 3.33215Z",
                            fill: "currentColor",
                          }),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-foreground group-hover:text-brand text-lg m-0 leading-none",
                          children: t.name,
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-sm flex-1 text-foreground-lighter",
                      children: t.description,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "text-sm w-full flex justify-between text-foreground-lighter mt-4",
                      children: [
                        (0, a.jsx)("p", { children: t.full_name }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, a.jsx)("span", {
                                  children: t.forks.toLocaleString(),
                                }),
                                (0, a.jsx)("svg", {
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className:
                                    "w-4 fill-foreground-lighter stroke-none",
                                  children: (0, a.jsx)("path", {
                                    d: "M5 5.37201V6.25001C5 6.66401 5.336 7.00001 5.75 7.00001H10.25C10.4489 7.00001 10.6397 6.92099 10.7803 6.78034C10.921 6.63969 11 6.44892 11 6.25001V5.37201C10.4996 5.19509 10.0778 4.84696 9.80928 4.38915C9.54072 3.93134 9.44265 3.39333 9.53241 2.87021C9.62216 2.34709 9.89396 1.87253 10.2998 1.53043C10.7056 1.18832 11.2192 1.00069 11.75 1.00069C12.2808 1.00069 12.7944 1.18832 13.2002 1.53043C13.6061 1.87253 13.8778 2.34709 13.9676 2.87021C14.0574 3.39333 13.9593 3.93134 13.6907 4.38915C13.4222 4.84696 13.0004 5.19509 12.5 5.37201V6.25001C12.5 6.84674 12.263 7.41904 11.841 7.841C11.419 8.26295 10.8467 8.50001 10.25 8.50001H8.75V10.628C9.25069 10.8049 9.67271 11.1532 9.94146 11.6112C10.2102 12.0692 10.3084 12.6075 10.2186 13.1309C10.1289 13.6543 9.85695 14.1291 9.45096 14.4714C9.04497 14.8136 8.53104 15.0014 8 15.0014C7.46897 15.0014 6.95504 14.8136 6.54905 14.4714C6.14306 14.1291 5.87115 13.6543 5.78139 13.1309C5.69164 12.6075 5.78981 12.0692 6.05855 11.6112C6.3273 11.1532 6.74932 10.8049 7.25 10.628V8.50001H5.75C5.15327 8.50001 4.58097 8.26295 4.15901 7.841C3.73706 7.41904 3.5 6.84674 3.5 6.25001V5.37201C2.99959 5.19509 2.57784 4.84696 2.30928 4.38915C2.04072 3.93134 1.94265 3.39333 2.03241 2.87021C2.12216 2.34709 2.39396 1.87253 2.79976 1.53043C3.20556 1.18832 3.71924 1.00069 4.25 1.00069C4.78077 1.00069 5.29445 1.18832 5.70025 1.53043C6.10605 1.87253 6.37785 2.34709 6.4676 2.87021C6.55735 3.39333 6.45929 3.93134 6.19073 4.38915C5.92217 4.84696 5.50042 5.19509 5 5.37201ZM5 3.25001C5 3.05109 4.92099 2.86033 4.78033 2.71968C4.63968 2.57902 4.44892 2.50001 4.25 2.50001C4.05109 2.50001 3.86033 2.57902 3.71967 2.71968C3.57902 2.86033 3.5 3.05109 3.5 3.25001C3.5 3.44892 3.57902 3.63969 3.71967 3.78034C3.86033 3.92099 4.05109 4.00001 4.25 4.00001C4.44892 4.00001 4.63968 3.92099 4.78033 3.78034C4.92099 3.63969 5 3.44892 5 3.25001ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001ZM8.75 12.75C8.75 12.5511 8.67099 12.3603 8.53033 12.2197C8.38968 12.079 8.19892 12 8 12C7.80109 12 7.61033 12.079 7.46967 12.2197C7.32902 12.3603 7.25 12.5511 7.25 12.75C7.25 12.9489 7.32902 13.1397 7.46967 13.2803C7.61033 13.421 7.80109 13.5 8 13.5C8.19892 13.5 8.38968 13.421 8.53033 13.2803C8.67099 13.1397 8.75 12.9489 8.75 12.75Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, a.jsx)("span", {
                                  children: t.stargazers_count.toLocaleString(),
                                }),
                                (0, a.jsx)(L, {
                                  className:
                                    "w-4 fill-foreground-lighter stroke-none",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            "".concat(s, "-").concat(t.name)
          );
        };
      let z = (e) => {
        let { isActive: t, label: s, icon: r, onClick: n } = e;
        return (0, a.jsx)("button", {
          onClick: n,
          className:
            "rounded-full px-4 md:px-3 py-2 md:py-1 nowrap flex group gap-1 transition-all ".concat(
              t
                ? "text-strong bg-surface-300"
                : "text-foreground-lighter bg-surface-200 hover:bg-overlay-hover"
            ),
          "aria-selected": t,
          role: "tab",
          children: (0, a.jsxs)("div", {
            className:
              "flex flex-nowrap text-sm lg:text-base gap-1 lg:gap-2 items-center",
            children: [
              r &&
                (0, a.jsx)("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0, m.cn)(
                    "text-foreground-light shrink-0",
                    t && "text-brand"
                  ),
                  children: (0, a.jsx)("path", {
                    d: r,
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              (0, a.jsx)("span", {
                className:
                  "whitespace-nowrap tracking-tight lg:tracking-normal",
                children: s,
              }),
            ],
          }),
        });
      };
      ((r = n || (n = {})).START = "START"),
        (r.MIDDLE = "MIDDLE"),
        (r.END = "END");
      let P = () =>
        (0, a.jsx)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "fill-foreground-lighter grouopp-hover:fill-foreground",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 3.33215C7.09969 3.33215 3.12744 7.31061 3.12744 12.2198C3.12744 16.1459 5.66943 19.4775 9.19538 20.6523C9.63901 20.7339 9.80049 20.4597 9.80049 20.2237C9.80049 20.0135 9.7934 19.4536 9.78896 18.7127C7.32061 19.2495 6.79979 17.5211 6.79979 17.5211C6.39698 16.4937 5.81494 16.2204 5.81494 16.2204C5.00931 15.6703 5.87616 15.681 5.87616 15.681C6.76608 15.7431 7.23455 16.5966 7.23455 16.5966C8.02598 17.9541 9.31161 17.562 9.81646 17.3348C9.89809 16.7608 10.127 16.3695 10.3808 16.1477C8.41105 15.9232 6.33931 15.1602 6.33931 11.7549C6.33931 10.7851 6.68534 9.99101 7.25229 9.36993C7.16091 9.14545 6.85658 8.24134 7.33925 7.0187C7.33925 7.0187 8.08454 6.77914 9.7792 7.92903C10.503 7.73162 11.2498 7.63108 12 7.63002C12.7542 7.63357 13.5128 7.73206 14.2217 7.92903C15.9155 6.77914 16.659 7.01781 16.659 7.01781C17.1434 8.24134 16.8382 9.14545 16.7477 9.36993C17.3155 9.99101 17.6598 10.7851 17.6598 11.7549C17.6598 15.169 15.5845 15.9205 13.6086 16.1406C13.9271 16.4147 14.2102 16.9569 14.2102 17.7864C14.2102 18.9736 14.1995 19.9327 14.1995 20.2237C14.1995 20.4615 14.3592 20.7383 14.8099 20.6514C16.5767 20.0588 18.1126 18.9259 19.2005 17.4129C20.2884 15.8999 20.8733 14.0833 20.8726 12.2198C20.8726 7.31061 16.8994 3.33215 12 3.33215Z",
            fill: "currentColor",
          }),
        });
      var O = (e) => {
          var t;
          let { tabs: r } = e,
            [n, i] = (0, p.useState)(null),
            [o, l] = (0, p.useState)(0),
            [c, d] = (0, p.useState)(void 0),
            [u, x] = (0, p.useState)("START");
          (0, p.useEffect)(() => {
            (async function () {
              let { Octokit: e } = await s.e(3184).then(s.bind(s, 53184)),
                t = new e();
              i(
                (
                  await t.request("GET /orgs/{org}/repos", {
                    org: "supabase",
                    type: "public",
                    per_page: 200,
                    page: 1,
                  })
                ).data
              );
            })();
          }, []),
            (0, p.useEffect)(() => {
              c && c.slideTo(o);
            }, [o]);
          let g = (e) => {
              l(e);
            },
            h = n
              ? null == n
                ? void 0
                : null ===
                    (t = n.filter((e) => {
                      var t;
                      return null === (t = r[o].repos) || void 0 === t
                        ? void 0
                        : t.includes(e.name);
                    })) || void 0 === t
                ? void 0
                : t.sort((e, t) =>
                    e.stargazers_count < t.stargazers_count ? 1 : -1
                  )
              : [];
          return (0, a.jsxs)("div", {
            className: "flex flex-col gap-8 xl:gap-10",
            children: [
              (0, a.jsxs)("div", {
                className: "flex mx-auto items-center gap-6 text-sm sm:gap-8",
                children: [
                  (0, a.jsxs)(y(), {
                    href: "https://github.com/supabase/supabase/blob/master/DEVELOPERS.md",
                    className:
                      "text-foreground-lighter hover:underline flex gap-1 items-center",
                    target: "_blank",
                    children: [(0, a.jsx)(P, {}), "How to contribute"],
                  }),
                  (0, a.jsxs)(y(), {
                    href: "https://github.com/supabase/.github/blob/main/CODE_OF_CONDUCT.md",
                    className:
                      "text-foreground-lighter hover:underline flex gap-1 items-center",
                    target: "_blank",
                    children: [(0, a.jsx)(P, {}), "Code of Conduct"],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full gap-2 flex flex-col items-center",
                children: (0, a.jsxs)("div", {
                  className:
                    "relative flex border justify-center h-fit max-w-full w-full md:w-auto overflow-hidden items-center rounded-full bg-surface-100 [&_.swiper-wrapper]:w-full [&_.swiper-slide]:w-fit",
                  children: [
                    (0, a.jsxs)(k.tq, {
                      onSwiper: d,
                      style: { padding: 10 },
                      initialSlide: 0,
                      spaceBetween: 10,
                      grabCursor: !0,
                      slidesPerView: "auto",
                      onSlideChange: (e) =>
                        x(e.isEnd ? "END" : e.isBeginning ? "START" : "MIDDLE"),
                      className:
                        "relative flex md:!hidden justify-center max-w-full w-full overflow-hidden items-center rounded-full bg-surface-100 p-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, m.cn)(
                            "not-sr-only absolute inset-0 left-auto bg-gradient-to-r from-transparent to-background-surface-100 w-10 z-20 pointer-events-none opacity-0 transition-opacity",
                            "END" !== u && "opacity-100"
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: (0, m.cn)(
                            "not-sr-only absolute inset-0 right-auto bg-gradient-to-l from-transparent to-background-surface-100 w-10 z-20 pointer-events-none opacity-0 transition-opacity",
                            "START" !== u && "opacity-100"
                          ),
                        }),
                        r.map((e, t) =>
                          (0, a.jsx)(
                            k.o5,
                            {
                              children: (0, a.jsx)(z, {
                                isActive: t === o,
                                label: e.label,
                                icon: e.icon,
                                onClick: () => g(t),
                              }),
                            },
                            e.label
                          )
                        ),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "hidden md:flex flex-nowrap overflow-x-scroll items-center p-2 md:p-1 gap-2 no-scrollbar",
                      children: r.map((e, t) =>
                        (0, a.jsx)(
                          z,
                          {
                            isActive: t === o,
                            label: e.label,
                            icon: e.icon,
                            onClick: () => g(t),
                          },
                          e.label
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "relative w-full h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: (0, a.jsx)(N.M, {
                  mode: "wait",
                  children:
                    null === n
                      ? (0, a.jsx)("div", {
                          className:
                            "col-span-full flex justify-center items-center min-h-[300px]",
                          children: (0, a.jsx)(R, {}),
                        })
                      : null == h
                      ? void 0
                      : h.map((e, t) =>
                          (0, a.jsx)(
                            W,
                            { repo: e, activeTab: o, index: t },
                            "".concat(o, "-").concat(e.name)
                          )
                        ),
                }),
              }),
            ],
          });
        },
        T = s(99),
        H = (e) => {
          let { sponsorships: t } = e;
          return (0, a.jsxs)("div", {
            className: "flex flex-col gap-8 xl:gap-10",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "w-full gap-2 flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-3xl xl:text-4xl max-w-[280px] sm:max-w-xs xl:max-w-[360px] tracking-[-1px]",
                    children: "Sponsored Projects",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-foreground-lighter mb-4 max-w-sm",
                    children:
                      "We don't just live and breath open-source, we also sponsor projects we love.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "relative w-full h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: t.map((e) =>
                  (0, a.jsx)(
                    y(),
                    {
                      href: e.url,
                      target: "_blank",
                      children: (0, a.jsxs)(E.Z, {
                        innerClassName: (0, m.cn)(
                          "relative group flex flex-col gap-2 p-4 ",
                          e.isGithub
                            ? "md:min-h-[170px] md:h-[200px]"
                            : "min-h-[120px] md:h-[140px]"
                        ),
                        hasActiveOnHover: !0,
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex gap-1 items-center",
                            children: [
                              e.isGithub &&
                                (0, a.jsx)("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className:
                                    "fill-foreground-lighter grouopp-hover:fill-foreground",
                                  children: (0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M12 3.33215C7.09969 3.33215 3.12744 7.31061 3.12744 12.2198C3.12744 16.1459 5.66943 19.4775 9.19538 20.6523C9.63901 20.7339 9.80049 20.4597 9.80049 20.2237C9.80049 20.0135 9.7934 19.4536 9.78896 18.7127C7.32061 19.2495 6.79979 17.5211 6.79979 17.5211C6.39698 16.4937 5.81494 16.2204 5.81494 16.2204C5.00931 15.6703 5.87616 15.681 5.87616 15.681C6.76608 15.7431 7.23455 16.5966 7.23455 16.5966C8.02598 17.9541 9.31161 17.562 9.81646 17.3348C9.89809 16.7608 10.127 16.3695 10.3808 16.1477C8.41105 15.9232 6.33931 15.1602 6.33931 11.7549C6.33931 10.7851 6.68534 9.99101 7.25229 9.36993C7.16091 9.14545 6.85658 8.24134 7.33925 7.0187C7.33925 7.0187 8.08454 6.77914 9.7792 7.92903C10.503 7.73162 11.2498 7.63108 12 7.63002C12.7542 7.63357 13.5128 7.73206 14.2217 7.92903C15.9155 6.77914 16.659 7.01781 16.659 7.01781C17.1434 8.24134 16.8382 9.14545 16.7477 9.36993C17.3155 9.99101 17.6598 10.7851 17.6598 11.7549C17.6598 15.169 15.5845 15.9205 13.6086 16.1406C13.9271 16.4147 14.2102 16.9569 14.2102 17.7864C14.2102 18.9736 14.1995 19.9327 14.1995 20.2237C14.1995 20.4615 14.3592 20.7383 14.8099 20.6514C16.5767 20.0588 18.1126 18.9259 19.2005 17.4129C20.2884 15.8999 20.8733 14.0833 20.8726 12.2198C20.8726 7.31061 16.8994 3.33215 12 3.33215Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-foreground group-hover:text-brand text-lg m-0 leading-none",
                                children: e.name,
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm flex-1 text-foreground-lighter",
                            children: e.description,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "text-sm w-full flex justify-between text-foreground-lighter mt-2",
                            children: (0, a.jsx)(T.Z, {
                              className: "w-4 stroke-[1.5px]",
                            }),
                          }),
                        ],
                      }),
                    },
                    e.name
                  )
                ),
              }),
            ],
          });
        },
        B = s(29750),
        Z = {
          metaTitle: "Supabase Open Source Community",
          metaDescription:
            "Supabase is an open source company, actively fostering collaboration and supporting existing open source tools and communities.",
          heroSection: {
            title: "The Power of Collaboration",
            h1: (0, a.jsx)("span", {
              className: "heading-gradient",
              children: "Open Source Community",
            }),
            subheader: (0, a.jsxs)(a.Fragment, {
              children: [
                "Supabase is an open source company, actively fostering collaboration",
                (0, a.jsx)("br", { className: "hidden md:inline" }),
                " and supporting existing open source tools and communities.",
              ],
            }),
          },
          repo_tabs: [
            {
              label: "Database",
              icon: B.RB.database.icon[16],
              repos: [
                "dbdev",
                "nix-postgres",
                "pljava",
                "pg_crdt",
                "pg_graphql",
                "pg_jsonschema",
                "pg_listen",
                "pg_net",
                "pg_netstat",
                "pgbouncer_exporter",
                "pgextkit",
                "pgx-contrib-spiext",
                "postgres",
                "postgres-deno",
                "postgres_lsp",
                "postgrest-dart",
                "postgrest-js",
                "postgres-meta",
                "postgres-wasm",
                "stripe-sync-engine",
                "supa_audit",
                "supabase",
                "supabase-dart",
                "supabase-js",
                "supabase-flutter",
                "supabase-audit",
                "supabase.dev",
                "supautils",
                "supavisor",
                "wal2json",
                "wrappers",
              ],
            },
            {
              label: "Auth",
              icon: B.RB.authentication.icon[16],
              repos: [
                "supabase",
                "supabase-cli",
                "supabase-js",
                "auth-helpers",
                "auth-elements",
                "auth-ui",
                "gotrue",
                "gotrue-dart",
                "gotrue-js",
                "mailme",
              ],
            },
            {
              label: "Storage",
              icon: B.RB.storage.icon[16],
              repos: ["storage-api", "supabase", "storage-js", "storage-dart"],
            },
            {
              label: "Edge Functions",
              icon: B.RB.functions.icon[16],
              repos: [
                "deno-arm64",
                "edge-runtime",
                "supabase",
                "postgres-deno",
                "self-hosted-edge-functions-demo",
                "functions-dart",
                "functions-js",
                "functions-relay",
                "supabase",
                "supabase-js",
              ],
            },
            {
              label: "Realtime",
              icon: B.RB.realtime.icon[16],
              repos: [
                "realtime",
                "realtime-js",
                "realtime-dart",
                "supabase",
                "supabase-js",
                "walrus",
              ],
            },
            {
              label: "Vector",
              icon: B.RB.vector.icon[16],
              repos: [
                "embeddings-generator",
                "headless-vector-search",
                "pgvector",
                "supabase",
                "supabase-js",
                "vecs",
              ],
            },
            {
              label: "Other",
              repos: [
                "benchmarks",
                "cli",
                "cloudflare-access-grafana",
                "cmdk",
                "design-tokens",
                "fly-admin",
                "fly-log-shipper",
                "fly-preview",
                "flyswatter",
                "grafana-agent-fly-example",
                "grafana-dashboards",
                "grid",
                "homebrew-tap",
                "imgproxy",
                "livebooks",
                "node-fetch",
                "og-image",
                "plrust",
                "pg_plan_filter",
                "prometheus-ecs-discovery",
                "react-data-grid",
                "rfcs",
                "setup-cli",
                "shared-types",
                "sql-formatter",
                "supabase-action-example",
                "tests",
                "test-inspector",
                "test-reports",
                "tus-node-server",
                "ui",
                "valut",
                "workflows",
                "yet-another-cloudwatch-exporter",
              ],
            },
          ],
          sponsorships: [
            {
              name: "postgrest",
              description:
                "PostgREST is a standalone web server that turns your PostgreSQL database directly into a RESTful API.",
              full_name: "/PostgREST/postgrest",
              isGithub: !0,
              url: "https://github.com/PostgREST/postgrest",
            },
            {
              name: "pgroonga",
              description:
                "PGroonga is a PostgreSQL extension to use Groonga as index. PGroonga makes PostgreSQL fast full text search platform for all languages!",
              full_name: "/pgroonga/pgroonga",
              isGithub: !0,
              url: "https://github.com/pgroonga/pgroonga",
            },
            {
              name: "pgsodium",
              description:
                "Modern cryptography for PostgreSQL using libsodium.",
              full_name: "/michelp/pgsodium",
              isGithub: !0,
              url: "https://github.com/michelp/pgsodium",
            },
            {
              name: "Open Collective Profile",
              description:
                "We have contributed with more than $250,000 on paying sponsorships.",
              url: "https://opencollective.com/supabase",
            },
            {
              name: "OrioleDB",
              description:
                "Sponsoring OrioleDB – the next generation storage engine for PostgreSQL",
              url: "https://www.socallinuxexpo.org/sites/default/files/presentations/solving-postgres-wicked-problems.pdf",
            },
            {
              name: "Elixir",
              description:
                "Elixir is a dynamic, functional language for building scalable and maintainable applications.",
              url: "https://elixir-lang.org/blog/2022/10/05/my-future-with-elixir-set-theoretic-types/#:~:text=is%20sponsored%20by-,Supabase,-(they%20are",
            },
          ],
        },
        D = () => {
          let e = (0, i.useRouter)(),
            t = Z.metaTitle || "Open Source | Supabase",
            s =
              Z.metaDescription ||
              "Supabase is an open source company, supporting existing open source tools and communities wherever possible.";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(o.PB, {
                title: t,
                description: s,
                openGraph: {
                  title: t,
                  description: s,
                  url: "https://supabase.com/".concat(e.pathname),
                  images: [
                    { url: "https://supabase.com/images/og/supabase-og.png" },
                  ],
                },
              }),
              (0, a.jsxs)(l.default, {
                className: "relative",
                children: [
                  (0, a.jsx)(c.default, {
                    className:
                      "overflow-hidden relative mx-auto !py-0 sm:!py-0 md:!py-4 lg:!pt-16 lg:!pb-12",
                    children: (0, a.jsx)(C.default, { ...Z.heroSection }),
                  }),
                  (0, a.jsx)(j, {}),
                  (0, a.jsx)(c.default, {
                    className: "!pt-0",
                    children: (0, a.jsx)(O, { tabs: Z.repo_tabs }),
                  }),
                  (0, a.jsx)(c.default, {
                    className: "!py-0",
                    children: (0, a.jsx)("div", {
                      className: "w-full border-b",
                    }),
                  }),
                  (0, a.jsx)(c.default, {
                    children: (0, a.jsx)(H, { sponsorships: Z.sponsorships }),
                  }),
                  (0, a.jsx)(d.default, {}),
                ],
              }),
            ],
          });
        };
    },
    99: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, s(55132).Z)("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    },
    58371: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, s(55132).Z)("CirclePlay", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
      ]);
    },
    31395: function () {},
    25040: function (e) {
      e.exports = {
        "hero-container": "hero_hero-container__dEpXQ",
        "hero-grid-lines": "hero_hero-grid-lines__geWjS",
        "animate-grid": "hero_animate-grid__1RTdp",
      };
    },
    15241: function (e) {
      e.exports = {
        "appear-from-bottom": "animations_appear-from-bottom__Z4upz",
        animateIn: "animations_animateIn__JEK8I",
      };
    },
    12541: function (e) {
      e.exports = {
        loading: "loading-anim_loading__rDN7u",
        dash: "loading-anim_dash__HIPR0",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 1401, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 49112));
      }
    ),
      (_N_E = e.O());
  },
]);
