(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2758],
  {
    4501: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ga-week",
        function () {
          return l(21321);
        },
      ]);
    },
    36392: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return r;
        },
        o: function () {
          return s;
        },
      });
      var n = l(2784);
      let s = (0, n.createContext)(null);
      function r() {
        let e = (0, n.useContext)(s);
        if (!e) throw Error();
        return e;
      }
    },
    72298: function (e, t, l) {
      "use strict";
      let n = (0, l(79617).eI)(
        "https://obuldanrptloktxcffvn.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MTQ2ODUsImV4cCI6MjAzNDE5MDY4NX0.NFt49g6DFkc1X5khCzN5p01iAVo2TMxlx88cY1V0E2M"
      );
      t.Z = n;
    },
    21321: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return Q;
          },
        });
      var n = l(52322),
        s = l(2784),
        r = l(25237),
        i = l.n(r),
        a = l(5632),
        o = l(55351),
        d = l(23642),
        c = l(72298),
        u = l(27478),
        m = l(36392),
        x = l(37637),
        h = l(39097),
        f = l.n(h),
        p = l(90369),
        g = l(44382),
        v = l(30175),
        j = l(96577),
        b = l.n(j),
        w = () => {
          let e,
            t = (0, p.b)(),
            { ticketState: l, userData: r } = (0, m.Z)(),
            i = r.platinum,
            a = r.secret,
            o =
              (null == r ? void 0 : r.name) ||
              (null == r ? void 0 : r.username),
            d = o && o.split(" ")[0],
            c = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            h = () => {
              var e, t;
              let l = "";
              null === (e = c.current) ||
                void 0 === e ||
                e.forEach((e) => {
                  let { y: t } = e.getBoundingClientRect();
                  t - 66 < 0 && (l = e.id);
                }),
                null === (t = u.current) ||
                  void 0 === t ||
                  t.forEach((e) => {
                    var t;
                    e.classList.remove("!text-foreground"),
                      decodeURI(
                        null !== (t = e.getAttribute("href")) && void 0 !== t
                          ? t
                          : ""
                      )
                        .split("#")
                        .splice(-1)
                        .join("") === l && e.classList.add("!text-foreground");
                  });
            };
          return (
            (0, s.useEffect)(() => {
              if (v.jU)
                return (
                  (c.current = document.querySelectorAll(".lwx-nav-anchor")),
                  (u.current = document.querySelectorAll(
                    ".lwx-sticky-nav li a"
                  )),
                  window.addEventListener("scroll", h),
                  () => {
                    window.removeEventListener("scroll", h);
                  }
                );
            }, []),
            (0, n.jsx)("div", {
              className: "absolute inset-0 pointer-events-none w-full h-full",
              children: (0, n.jsx)("nav", {
                className:
                  "sticky z-30 top-0 bg-alternative/90 backdrop-blur-sm pointer-events-auto w-full border-b border-muted h-[60px] flex items-center",
                children: (0, n.jsxs)(x.default, {
                  className:
                    "!max-w-none !py-0 lg:!container flex items-center justify-between font-mono gap-4 md:gap-8 text-sm",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex items-center gap-4 md:gap-8",
                      children: (0, n.jsxs)("ul", {
                        className:
                          "lwx-sticky-nav flex items-center gap-2 md:gap-4 text-foreground-muted",
                        children: [
                          t.map((e) =>
                            (0, n.jsx)(
                              "li",
                              {
                                children: (0, n.jsxs)(f(), {
                                  href: "#".concat(e.id),
                                  className: (0, g.cn)(
                                    "p-1 transition-colors hover:text-foreground flex items-center",
                                    e.isToday && "text-foreground-light"
                                  ),
                                  children: [
                                    e.dd,
                                    " ",
                                    e.isToday &&
                                      (0, n.jsx)("span", {
                                        title: "Live",
                                        className:
                                          "w-1 h-1 ml-1 animate-pulse rounded-full bg-brand mb-2 block",
                                      }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(f(), {
                              href: "#build-stage",
                              className:
                                "p-1 transition-colors hover:text-foreground",
                              children: "Build Stage",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      children:
                        "ticket" === l &&
                        (0, n.jsxs)(f(), {
                          href: "#ticket",
                          className:
                            "flex items-center gap-2 text-xs text-foreground-light hover:text-foreground transition-colors",
                          children: [
                            d,
                            "'s ticket",
                            (0, n.jsx)(b(), {
                              src:
                                ((e = a
                                  ? "secret"
                                  : i
                                  ? "platinum"
                                  : "regular"),
                                "/images/launchweek/11/tickets/icon/ticket-icon-".concat(
                                  e,
                                  ".png"
                                )),
                              alt: "",
                              width: 24,
                              height: 24,
                              "aria-hidden": !0,
                              className: "w-auto h-4 shadow",
                              priority: !0,
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        y = l(29982),
        N = l(28826),
        k = l(91631);
      function C(e, t, l, n, s, r) {
        var i;
        let a =
          arguments.length > 6 && void 0 !== arguments[6]
            ? arguments[6]
            : "255,255,255";
        (this.x = e),
          (this.y = t),
          (this.w = l),
          (this.h = n),
          (this.opacity = s),
          (this.anim = r),
          (this.isVert =
            (null === (i = this.anim) || void 0 === i
              ? void 0
              : i.direction) === "vertical"),
          (this.draw = function (e) {
            e.fillRect(this.x, this.y, this.w, this.h),
              (e.fillStyle = "rgba(".concat(a, ",").concat(this.opacity, ")")),
              e.fill();
          }),
          (this.update = function (e, t) {
            this.draw(e, t);
          });
      }
      let Z = {
        dotGrid: 40,
        percentageLarge: 0.98,
        percentageAnimated: 0.6,
        randomizeLargeDots: 3,
        randomizeSmallDots: 0.5,
        minSpeed: 1,
        maxSpeed: 2,
        minOscillation: 1,
        maxOscillation: 12,
        minDelay: -3e3,
        maxDelay: 15e3,
        minDuration: 200,
        maxDuration: 1e4,
      };
      var S = (e) => {
          var t;
          let { className: l } = e,
            r = s.useRef(null),
            [i, a] = (0, s.useState)({ w: 1200, h: 800 }),
            [o] = (0, s.useState)(Z),
            [d, c] = (0, s.useState)(!1),
            u = (0, k.Z)(),
            m = o.dotGrid,
            x =
              null === (t = r.current) || void 0 === t
                ? void 0
                : t.getContext("2d"),
            h = [];
          function f() {
            var e;
            if (!x) return;
            c(!0),
              (x =
                null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.getContext("2d")).clearRect(0, 0, i.w, i.h),
              (h = []);
            let t = Math.floor(i.w / m),
              l = Math.floor(i.h / m);
            for (let e = 0; e < t; e++)
              for (let n = 0; n < l; n++) {
                let s = Math.random() > o.percentageLarge,
                  r = s || Math.random() > o.percentageAnimated,
                  a = r
                    ? Math.random() > 0.5
                      ? "vertical"
                      : "horizontal"
                    : void 0,
                  d = r ? N.Z.random(o.minSpeed, o.maxSpeed) : void 0,
                  c = s ? 1 : N.Z.random(0.4, 1),
                  u = r ? Math.random() > 0.5 : void 0,
                  x = r
                    ? N.Z.random(o.minOscillation, o.maxOscillation).toFixed()
                    : void 0,
                  f = s
                    ? Math.random() * o.randomizeLargeDots
                    : Math.random() * o.randomizeSmallDots,
                  p = {
                    x: N.Z.random(
                      1 * m - m / 2 + f / 2,
                      10 * m - m / 2 + f / 2
                    ).toFixed(),
                    y: N.Z.random(
                      1 * m - m / 2 + f / 2,
                      10 * m - m / 2 + f / 2
                    ).toFixed(),
                  },
                  g = N.Z.random(o.minDelay, o.maxDelay),
                  v = N.Z.random(o.minDuration, o.maxDuration),
                  j = r
                    ? {
                        direction: a,
                        speed: d,
                        isReverse: u,
                        oscillation: x,
                        endPos: p,
                        delay: g,
                        duration: v,
                      }
                    : void 0,
                  b = (i.w / t) * e + m / 2 - f / 2,
                  w = (i.h / l) * n + m / 2 - f / 2;
                h.push(new C(b, w, f, f, c, j));
              }
            !(function (e) {
              if (v.jU) {
                for (let e = 0; e < h.length; e++) h[e].update(x, 0);
                N.Z.timeline({
                  targets: h.filter((e) => e.anim),
                  loop: !0,
                  direction: "alternate",
                  autoplay: !0,
                  update: p,
                })
                  .add(
                    {
                      x: (e) => {
                        var t;
                        return e.isVert
                          ? e.x
                          : ""
                              .concat(
                                (
                                  null === (t = e.anim) || void 0 === t
                                    ? void 0
                                    : t.isReverse
                                )
                                  ? "+"
                                  : "-",
                                "="
                              )
                              .concat(m * e.anim.oscillation);
                      },
                      y: (e) => {
                        var t;
                        return e.isVert
                          ? ""
                              .concat(
                                (
                                  null === (t = e.anim) || void 0 === t
                                    ? void 0
                                    : t.isReverse
                                )
                                  ? "+"
                                  : "-",
                                "="
                              )
                              .concat(m * e.anim.oscillation)
                          : e.y;
                      },
                      duration: (e) => {
                        var t;
                        return null === (t = e.anim) || void 0 === t
                          ? void 0
                          : t.duration;
                      },
                      delay: (e) => {
                        var t;
                        return (
                          (null === (t = e.anim) || void 0 === t
                            ? void 0
                            : t.delay) - 1e3
                        );
                      },
                      easing: "easeInOutExpo",
                    },
                    "-=1000"
                  )
                  .play();
              }
            })(0);
          }
          function p(e) {
            if (v.jU) {
              null == x || x.clearRect(0, 0, i.w, i.h);
              for (let e = 0; e < h.length; e++) h[e].update(x, 0);
              for (var t = 0; t < e.animatables.length; t++)
                e.animatables[t].target.update(x, 0);
            }
          }
          function j() {
            a({ w: u.width, h: u.height }), f();
          }
          return (
            (0, s.useEffect)(() => {
              v.jU && j();
            }, [u]),
            (0, s.useEffect)(() => {
              j(), f();
            }, []),
            d || f(),
            (0, n.jsx)("canvas", {
              ref: r,
              className: (0, g.cn)(
                "opacity-0 animate-fade-in duration-1000 w-full h-full",
                l
              ),
              width: i.w,
              height: i.h,
            })
          );
        },
        z = (e) => {
          let { className: t } = e;
          return (0, n.jsxs)("div", {
            className: (0, g.cn)(
              "relative w-full overflow-visible pt-10 sm:pt-8",
              t
            ),
            children: [
              (0, n.jsxs)(x.default, {
                className:
                  "h-full flex flex-col items-start gap-4 !max-w-none lg:!container !pb-4 md:!pb-10",
                children: [
                  (0, n.jsx)(b(), {
                    src: "/images/launchweek/ga/ga-black.svg",
                    alt: "GA logo",
                    className:
                      "dark:hidden w-20 md:w-24 aspect-[104/57] h-auto",
                    priority: !0,
                    quality: 100,
                    width: 300,
                    height: 300,
                  }),
                  (0, n.jsx)(b(), {
                    src: "/images/launchweek/ga/ga-white.svg",
                    alt: "GA logo",
                    className:
                      "hidden dark:block w-20 md:w-24 aspect-[104/57] h-auto",
                    priority: !0,
                    quality: 100,
                    width: 300,
                    height: 300,
                  }),
                  (0, n.jsxs)("p", {
                    className:
                      "text-foreground-lighter text-xl md:text-2xl max-w-2xl",
                    children: [
                      "Supabase is",
                      " ",
                      (0, n.jsx)("strong", {
                        className: "text-foreground font-normal",
                        children:
                          "officially launching into General Availability",
                      }),
                      ". ",
                      (0, n.jsx)("br", { className: "hidden sm:block" }),
                      " Join us in this major milestone and explore",
                      " ",
                      (0, n.jsx)("br", { className: "hidden sm:block" }),
                      " the exciting features that come with it.",
                    ],
                  }),
                  (0, n.jsx)(y.z, {
                    asChild: !0,
                    size: "small",
                    type: "alternative",
                    children: (0, n.jsx)(f(), {
                      href: "/ga",
                      children: "Read full announcement",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "absolute z-0 inset-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                  (0, n.jsx)("div", {
                    className: "absolute z-0 inset-0 w-full aspect-video",
                    children: (0, n.jsx)(S, {
                      className:
                        "absolute z-0 inset-0 w-full flex items-center justify-center opacity-100 transition-opacity h-full",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[linear-gradient(to_top,#060809)_0%,transparent_100%)]",
                  }),
                ],
              }),
            ],
          });
        },
        M = l(22600),
        I = l(68169),
        E = l(31298),
        V = l(93048),
        _ = (e) => {
          let {
            date: t,
            showCard: l = !0,
            className: s,
            size: r = "small",
          } = e;
          return t
            ? (0, n.jsx)(E.ZP, {
                date: new Date(t),
                renderer: (e) => {
                  let {
                    days: t,
                    hours: i,
                    minutes: a,
                    seconds: o,
                    completed: d,
                  } = e;
                  return d
                    ? null
                    : (0, n.jsx)(V.f, {
                        days: t,
                        hours: i,
                        minutes: a,
                        seconds: o,
                        showCard: l,
                        className: s,
                        size: r,
                      });
                },
              })
            : null;
        },
        R = l(91087),
        D = l(21392),
        F = l(86555),
        L = l(1848),
        A = l(85043),
        O = l(21203);
      let G = (e) => {
        let { type: t, icon: l, text: r, href: i = "", className: a } = e,
          [o, d] = (0, s.useState)(!1);
        if (
          ((0, s.useEffect)(() => {
            d(!0);
          }, []),
          !o)
        )
          return null;
        let c = {
            blog: { icon: R.Z, text: "Blog Post" },
            docs: { icon: R.Z, text: "Docs" },
            productHunt: { icon: D.Z, text: "Product Hunt" },
            video: { icon: F.Z, text: "Watch video" },
            podcast: { icon: A.Z, text: "Podcast" },
            xSpace: { icon: L.Z, text: "X Space" },
          },
          u = null != l ? l : c[t].icon,
          m = () => {
            var e;
            return (0, n.jsx)(n.Fragment, {
              children:
                null != r
                  ? r
                  : null === (e = c[t]) || void 0 === e
                  ? void 0
                  : e.text,
            });
          },
          x = "video" === t ? "div" : f(),
          h = (e) => {
            let { component: t, ...l } = e;
            return (0, n.jsxs)(t, {
              className: (0, g.cn)(
                "py-1 flex gap-2 items-center text-foreground-lighter hover:text-foreground transition-colors text-sm",
                a
              ),
              ...l,
              children: [
                (0, n.jsx)("span", {
                  className: "w-4 h-4 flex items-center justify-center",
                  children: (0, n.jsx)(u, {}),
                }),
                (0, n.jsx)(m, {}),
              ],
            });
          };
        return "video" === t
          ? (0, n.jsx)(O.R, {
              videoId: i,
              trigger: (0, n.jsx)(h, { component: x }),
            })
          : (0, n.jsx)(h, {
              href: i,
              target: (() => {
                switch (t) {
                  case "productHunt":
                  case "xSpace":
                  case "docs":
                    return !0;
                }
              })()
                ? "_blank"
                : "_self",
              component: x,
            });
      };
      var H = (e) => {
          var t, l, r, i;
          let { day: a, className: o } = e,
            d = (0, v.Gc)(639),
            c = "group/d" + a.d,
            [u, m] = (0, s.useState)(!1);
          return ((0, s.useEffect)(() => {
            m(!0);
          }, []),
          u)
            ? (0, n.jsxs)("section", {
                id: a.id,
                className: (0, g.cn)(
                  "lwx-nav-anchor border-b py-8 first:border-t dark:border-[#111718] text-foreground dark:text-[#575E61] scroll-mt-16 grid grid-cols-1 gap-4 md:grid-cols-3",
                  o
                ),
                children: [
                  (0, n.jsxs)("div", {
                    id: a.isToday ? "today" : void 0,
                    className:
                      "flex h-full scroll-mt-10 flex-col gap-4 items-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, g.cn)(
                          "text-sm inline uppercase font-mono dark:text-foreground-muted tracking-[0.1rem]",
                          a.shipped && "!text-foreground"
                        ),
                        children: [a.dd, ", ", a.date],
                      }),
                      !!a.links &&
                        (0, n.jsx)("ul", {
                          className:
                            "flex-1 h-full w-full justify-end grid grid-cols-2 md:flex flex-col gap-1",
                          children:
                            null === (t = a.links) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                  (0, n.jsx)(
                                    "li",
                                    { children: (0, n.jsx)(G, { ...e }) },
                                    e.href
                                  )
                                ),
                        }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex col-span-2",
                    children:
                      a.shipped && a.steps.length > 0
                        ? (0, n.jsxs)(f(), {
                            href: a.blog,
                            className: (0, g.cn)(
                              "\n              bg-default sm:!bg-transparent\n              min-h-[210px] group sm:aspect-[3.67/1] relative overflow-hidden flex-1 flex flex-col justify-between\n              hover:border-strong transition-colors border border-muted\n              rounded-xl text-2xl bg-contain shadow-lg",
                              c
                            ),
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "relative text-foreground-light p-4 sm:p-6 md:p-8 z-20 flex-grow flex flex-col items-start justify-between gap-2 w-full lg:w-1/2 text-left",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "relative w-full flex items-center gap-2 text-sm translate-x-0 !ease-[.24,0,.22,.99] duration-200 group-hover:-translate-x-6 transition-transform",
                                    children: [
                                      (0, n.jsx)(I.Z, {
                                        className:
                                          "w-4 min-w-4 group-hover:opacity-0 transition-opacity",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Blog post",
                                      }),
                                      (0, n.jsx)(M.Z, {
                                        className:
                                          "w-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("h2", {
                                    className:
                                      "text-lg leading-7 [&_strong]:font-normal [&_strong]:text-foreground",
                                    children: a.description,
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "relative z-10 border-b border-muted/40 sm:border-none w-full order-first aspect-[2/1] sm:aspect-auto sm:absolute sm:inset-0",
                                children:
                                  (null === (l = a.steps[0]) || void 0 === l
                                    ? void 0
                                    : l.bg_layers) &&
                                  (null === (i = a.steps[0]) || void 0 === i
                                    ? void 0
                                    : null === (r = i.bg_layers) || void 0 === r
                                    ? void 0
                                    : r.map(
                                        (e, t) =>
                                          !!e.img &&
                                          (0, n.jsx)(
                                            "div",
                                            {
                                              className:
                                                "absolute sm:opacity-90 transition-opacity inset-0 w-full h-full -z-10 group-hover/d1:opacity-100",
                                              children: (0, n.jsx)(b(), {
                                                src:
                                                  e.mobileImg && d
                                                    ? e.mobileImg
                                                    : e.img,
                                                className:
                                                  "\n                            absolute md:opacity-50 lg:opacity-100 object-cover\n                            w-full h-full z-0 transition-all duration-300\n                            object-center sm:object-right\n                          ",
                                                fill: !0,
                                                sizes: "100%",
                                                quality: 100,
                                                alt: a.title,
                                              }),
                                            },
                                            ""
                                              .concat(a.title, "-image-")
                                              .concat(t)
                                          )
                                      )),
                              }),
                            ],
                          })
                        : (0, n.jsx)("div", {
                            className: (0, g.cn)(
                              "min-h-[210px] group aspect-[3.67/1] relative overflow-hidden flex-1 flex flex-col justify-end\n              bg-surface-100/10 border border-dashed border-strong dark:border-[#14191B] dark:text-[#8B9092]\n              rounded-xl p-4 sm:p-6 md:p-8 text-2xl bg-contain",
                              c
                            ),
                            children: (0, n.jsxs)("div", {
                              className: "flex items-center gap-2 h-5",
                              children: [
                                (0, n.jsx)("svg", {
                                  width: "17",
                                  height: "17",
                                  viewBox: "0 0 17 17",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, n.jsx)("g", {
                                    opacity: "0.5",
                                    children: (0, n.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M4.32656 7.58047V5.98047C4.32656 3.77133 6.11742 1.98047 8.32656 1.98047C10.5357 1.98047 12.3266 3.77133 12.3266 5.98047V7.58047C13.2102 7.58047 13.9266 8.29681 13.9266 9.18047V13.1805C13.9266 14.0641 13.2102 14.7805 12.3266 14.7805H4.32656C3.44291 14.7805 2.72656 14.0641 2.72656 13.1805V9.18047C2.72656 8.29681 3.44291 7.58047 4.32656 7.58047ZM10.7266 5.98047V7.58047H5.92656V5.98047C5.92656 4.65499 7.00108 3.58047 8.32656 3.58047C9.65205 3.58047 10.7266 4.65499 10.7266 5.98047Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                }),
                                a.hasCountdown &&
                                  (0, n.jsx)(_, {
                                    date: a.published_at,
                                    showCard: !1,
                                  }),
                              ],
                            }),
                          }),
                  }),
                ],
              })
            : null;
        },
        T = l(62351),
        B = (e) => {
          var t, l, s;
          let { day: r, className: i, cardClassName: a } = e;
          return (0, n.jsxs)("section", {
            id: r.id,
            className: (0, g.cn)(
              "lwx-nav-anchor border-b py-8 first:border-t dark:border-[#111718] scroll-mt-16 grid grid-cols-1 gap-4 md:grid-cols-3",
              i
            ),
            children: [
              (0, n.jsxs)("div", {
                id: r.isToday ? "today" : void 0,
                className:
                  "flex h-full scroll-mt-10 flex-col gap-4 items-between",
                children: [
                  (0, n.jsx)("div", {
                    className: "md:max-w-xs flex flex-col gap-4",
                    children: (0, n.jsx)(O.R, {
                      videoId:
                        null !== (s = r.videoId) && void 0 !== s ? s : "",
                      imgUrl: r.videoThumbnail,
                      imgOverlayText: "Watch announcement",
                      priority: !0,
                    }),
                  }),
                  !!r.links &&
                    (0, n.jsx)("ul", {
                      className:
                        "flex-1 h-full w-full justify-end xs:grid grid-cols-2 lg:grid-cols-3 flex flex-col gap-1",
                      children:
                        null === (t = r.links) || void 0 === t
                          ? void 0
                          : t.map((e) =>
                              (0, n.jsx)(
                                "li",
                                { children: (0, n.jsx)(G, { ...e }) },
                                e.href
                              )
                            ),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: (0, g.cn)(
                  "group relative overflow-hidden flex-1 flex col-span-2 \n          md:px-4 text-2xl",
                  a
                ),
                children: (0, n.jsx)("div", {
                  className:
                    "relative text-sm w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-xl border gap-px bg-border overflow-hidden",
                  children:
                    null === (l = r.steps) || void 0 === l
                      ? void 0
                      : l.map((e) =>
                          (0, n.jsxs)(
                            f(),
                            {
                              href: e.url,
                              target: "_blank",
                              className:
                                "flex group/step flex-col gap-2 p-4 transition-colors bg-surface-75 hover:bg-surface-100 overflow-hidden border-0",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex-1 flex justify-between items-start",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1 mb-4 transition-colors text-foreground-light group-hover/step:text-foreground group-focus-visible/step:text-foreground",
                                      children: [
                                        (0, n.jsx)("svg", {
                                          className: "h-4 w-4",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 16 16",
                                          children: (0, n.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1",
                                            d: e.icon,
                                            stroke: "currentColor",
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          children: e.title,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)(T.Z, {
                                      className:
                                        "w-4 ml-2 -mt-px opacity-0 -rotate-45 translate-y-1 -translate-x-1 text-foreground-light transition-all will-change-transform group-hover/step:opacity-100 group-hover/step:translate-y-0 group-hover/step:translate-x-0",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-foreground",
                                  children: e.description,
                                }),
                              ],
                            },
                            e.title
                          )
                        ),
                }),
              }),
            ],
          });
        },
        P = l(4880),
        J = (e) => {
          let { className: t } = e,
            l = new Date() < new Date(d.re);
          return (0, n.jsxs)("div", {
            className: (0, g.cn)(
              "font-mono uppercase tracking-[1px] py-8 scroll-mt-16 flex flex-col md:flex-row justify-between gap-2",
              t
            ),
            children: [
              (0, n.jsx)("div", {
                className:
                  "!text-foreground [&_*]:text-foreground text-sm flex flex-col sm:flex-row sm:items-center sm:gap-3",
                children: l
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        "Hackathon ends in ",
                        (0, n.jsx)(_, { date: d.re, showCard: !1 }),
                      ],
                    })
                  : "Open Source Hackathon 2024",
              }),
              (0, n.jsx)("div", {
                className: "!m-0 flex items-center",
                children: (0, n.jsx)(P.Z, {
                  label: "Learn more",
                  url: "/blog/supabase-oss-hackathon",
                  target: "_blank",
                  hasChevron: !0,
                  className: "m-0",
                }),
              }),
            ],
          });
        },
        q = l(22965),
        U = (e) => {
          let { className: t } = e,
            { resolvedTheme: l } = (0, q.F)(),
            s = null == l ? void 0 : l.includes("dark"),
            [r, ...i] = (0, p.b)(s);
          return (0, n.jsxs)(x.default, {
            className: (0, g.cn)("relative !max-w-none !py-0 lg:!container", t),
            id: "main-stage",
            children: [
              (0, n.jsx)(B, {
                day: r,
                className: "!border-t-0",
                cardClassName: "md:-mx-4",
              }),
              (0, n.jsx)(J, {}),
              (0, n.jsx)("div", {
                children: i.map((e) => (0, n.jsx)(H, { day: e }, e.dd)),
              }),
            ],
          });
        };
      let W = i()(() => l.e(1212).then(l.bind(l, 81212)), {
          loadableGenerated: { webpack: () => [81212] },
        }),
        X = i()(() => l.e(7254).then(l.bind(l, 7254)), {
          loadableGenerated: { webpack: () => [7254] },
        }),
        Y = i()(() => l.e(5809).then(l.bind(l, 55809)), {
          loadableGenerated: { webpack: () => [55809] },
        });
      function Q() {
        var e, t, l, r, i;
        let { query: h } = (0, a.useRouter)(),
          f = "Supabase GA Week | 15-19 April 2024",
          p =
            "Join us for a week of announcing new features, every day at 7 AM PT.",
          g = "".concat(d.yp, "/images/launchweek/11/lw11-og-ga.png"),
          v =
            null === (e = h.ticketNumber) || void 0 === e
              ? void 0
              : e.toString(),
          j =
            null === (t = h.bgImageId) || void 0 === t ? void 0 : t.toString(),
          [b, y] = (0, s.useState)(null),
          [N, k] = (0, s.useState)(!1),
          C = {
            id: null === (l = h.id) || void 0 === l ? void 0 : l.toString(),
            ticketNumber: v ? parseInt(v, 10) : void 0,
            name: null === (r = h.name) || void 0 === r ? void 0 : r.toString(),
            username:
              null === (i = h.username) || void 0 === i ? void 0 : i.toString(),
            golden: !!h.golden,
            bgImageId: j ? parseInt(j, 10) : void 0,
          },
          [Z, S] = (0, s.useState)(C),
          [M, I] = (0, s.useState)("loading");
        return (
          (0, s.useEffect)(() => {
            if (c.Z) {
              c.Z.auth.getSession().then((e) => {
                let {
                  data: { session: t },
                } = e;
                return y(t);
              });
              let {
                data: { subscription: e },
              } = c.Z.auth.onAuthStateChange((e, t) => {
                y(t);
              });
              return () => e.unsubscribe();
            }
          }, [c.Z]),
          (0, s.useEffect)(
            () =>
              (null == b ? void 0 : b.user)
                ? (null == Z ? void 0 : Z.id)
                  ? I("ticket")
                  : I("loading")
                : b
                ? void 0
                : I("registration"),
            [b, Z]
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.PB, {
                title: f,
                description: p,
                openGraph: {
                  title: f,
                  description: p,
                  url: "https://supabase.com/ga-week",
                  images: [{ url: g }],
                },
              }),
              (0, n.jsx)(m.o.Provider, {
                value: {
                  supabase: c.Z,
                  session: b,
                  userData: Z,
                  setUserData: S,
                  ticketState: M,
                  setTicketState: I,
                  showCustomizationForm: N,
                  setShowCustomizationForm: k,
                },
                children: (0, n.jsxs)(u.default, {
                  className: "bg-alternative",
                  children: [
                    (0, n.jsx)(w, {}),
                    (0, n.jsx)(z, { className: "pb-20 z-0" }),
                    (0, n.jsx)(U, { className: "relative -mt-20 z-10" }),
                    (0, n.jsx)(W, {}),
                    (0, n.jsx)(x.default, {
                      id: "meetups",
                      className: "scroll-mt-[66px]",
                      children: (0, n.jsx)(X, { meetups: [] }),
                    }),
                    (0, n.jsx)(x.default, {
                      className: "lg:pb-40",
                      id: "awards",
                      children: (0, n.jsx)(Y, {}),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    62351: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, l(55132).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    85043: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, l(55132).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    68169: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, l(55132).Z)("SquarePen", [
        [
          "path",
          {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g",
          },
        ],
        [
          "path",
          {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2",
          },
        ],
      ]);
    },
    93048: function (e, t, l) {
      "use strict";
      l.d(t, {
        f: function () {
          return a;
        },
      });
      var n = l(52322),
        s = l(44382),
        r = l(2784),
        i = function (e) {
          let { value: t, unit: l, showCard: i = !0, size: a = "small" } = e,
            o = "large" === a,
            [d, c] = (0, r.useState)(!1);
          return ((0, r.useEffect)(() => {
            c(!0);
          }, []),
          d)
            ? (0, n.jsx)("div", {
                className: (0, s.cn)(
                  "font-mono uppercase tracking-[0.05rem] text-sm",
                  i
                    ? "rounded-md p-[1px] overflow-hidden bg-gradient-to-b from-border-muted to-border-muted/20"
                    : "tracking-[0.1rem]",
                  o && "text-lg"
                ),
                children: (0, n.jsxs)("div", {
                  className: (0, s.cn)(
                    i
                      ? "py-1 px-2 rounded-md w-11 leading-4 flex items-center justify-center bg-black backdrop-blur-md"
                      : (0, s.cn)(
                          "flex items-center justify-center w-7 py-1 px-1",
                          o && "w-9"
                        )
                  ),
                  children: [
                    (0, n.jsx)("span", {
                      className: "m-0",
                      children: t > 9 ? t : "0" + t,
                    }),
                    (0, n.jsx)("span", { children: l }),
                  ],
                }),
              })
            : null;
        };
      function a(e) {
        let {
            days: t,
            hours: l,
            minutes: r,
            seconds: a,
            showCard: o = !0,
            className: d,
            size: c,
          } = e,
          u = "large" === c,
          m = () =>
            (0, n.jsx)("span", {
              className: (0, s.cn)(
                "text-xs mx-px text-foreground-muted",
                u && "text-lg"
              ),
              children: ":",
            });
        return (0, n.jsxs)("div", {
          className: (0, s.cn)(
            "flex gap-1 items-center text-foreground-light",
            d
          ),
          children: [
            void 0 !== t && "0" != t
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i, {
                      value: t,
                      unit: "d",
                      showCard: o,
                      size: c,
                    }),
                    (0, n.jsx)(m, {}),
                  ],
                })
              : null,
            void 0 !== l && "0" != l
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i, {
                      value: l,
                      unit: "h",
                      showCard: o,
                      size: c,
                    }),
                    (0, n.jsx)(m, {}),
                  ],
                })
              : null,
            void 0 !== r && "0" != r
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i, {
                      value: r,
                      unit: "m",
                      showCard: o,
                      size: c,
                    }),
                    void 0 !== a && (0, n.jsx)(m, {}),
                  ],
                })
              : null,
            void 0 !== a
              ? (0, n.jsx)(i, { value: a, unit: "s", showCard: o, size: c })
              : null,
          ],
        });
      }
    },
    21203: function (e, t, l) {
      "use strict";
      l.d(t, {
        R: function () {
          return u;
        },
      });
      var n = l(52322),
        s = l(30175),
        r = l(96577),
        i = l.n(r),
        a = l(2784),
        o = l(72334),
        d = l(44382),
        c = l(84498);
      function u(e) {
        let {
            imgUrl: t,
            videoId: l,
            imgOverlayText: r,
            triggerContainerClassName: u = "",
            imgAltText: m,
            trigger: x,
            onOpenCallback: h,
            priority: f = !1,
          } = e,
          [p, g] = a.useState(!1),
          v = (0, s.Gc)(768);
        return (
          a.useEffect(() => {
            function e(e) {
              if ("Escape" === e.key) return g(!1);
            }
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, []),
          a.useEffect(() => {
            v && g(!1);
          }, [v]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.Z, {
                visible: p,
                hideFooter: !0,
                className: (0, d.cn)(
                  "!bg-[#f8f9fa]/95 dark:!bg-[#1c1c1c]/80",
                  "!border-[#e6e8eb]/90 dark:!border-[#282828]/90",
                  "transition ease-out",
                  "mx-auto backdrop-blur-md w-[calc(100%-2rem)]"
                ),
                onInteractOutside: (e) => {
                  "dismissableLayer.pointerDownOutside" === e.type && g(!p);
                },
                size: "xxlarge",
                children: (0, n.jsx)("div", {
                  className: "!w-full flex items-center justify-center",
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: () => g(!1),
                        className:
                          "text-foreground-light hover:text-foreground absolute -top-8 right-0",
                        children: (0, n.jsx)("p", {
                          className: "text-xs",
                          children: "Close",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "video-container !rounded overflow-hidden",
                        children: (0, n.jsx)("iframe", {
                          src: "https://www.youtube-nocookie.com/embed/".concat(
                            l
                          ),
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("button", {
                onClick: () => {
                  h && h(), g(!0);
                },
                className: ["w-full", u].join(" ").trim(),
                children:
                  null != x
                    ? x
                    : (0, n.jsx)(
                        () =>
                          (0, n.jsxs)("div", {
                            className:
                              "video-container overflow-hidden rounded hover:cursor-pointer",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  " absolute inset-0 z-10 text-white flex flex-col gap-3 items-center justify-center before:content[''] before:absolute before:inset-0 before:bg-black before:opacity-30 before:-z-10 hover:before:opacity-50 before:transition-opacity ",
                                children: [
                                  (0, n.jsx)(c.Z, {
                                    strokeWidth: 2,
                                    className: "w-5 h-5",
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-sm",
                                    children:
                                      null != r ? r : "Watch video guide",
                                  }),
                                ],
                              }),
                              (0, n.jsx)(i(), {
                                src: null != t ? t : "/images/blur.png",
                                alt: null != m ? m : "Video guide preview",
                                fill: !0,
                                sizes: "100%",
                                priority: f,
                                className:
                                  "absolute inset-0 object-cover blur-sm scale-105",
                              }),
                            ],
                          }),
                        {}
                      ),
              }),
            ],
          })
        );
      }
    },
    1848: function (e, t, l) {
      "use strict";
      var n = l(52322),
        s = l(76585);
      let r = (0, n.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.34939 5.70062C3.34939 2.85671 5.65466 0.55127 8.49837 0.55127C11.3421 0.55127 13.6473 2.85671 13.6473 5.70062V8.64311C13.6473 11.487 11.3421 13.7925 8.49837 13.7925C5.65466 13.7925 3.34939 11.487 3.34939 8.64311V5.70062ZM6.29166 8.64311C6.59619 8.64311 6.84334 8.39594 6.84334 8.09139V6.25234C6.84334 5.94779 6.59619 5.70062 6.29166 5.70062C5.98714 5.70062 5.73999 5.94779 5.73999 6.25234V8.09139C5.73999 8.39594 5.98714 8.64311 6.29166 8.64311ZM8.49837 9.37873C8.80289 9.37873 9.05004 9.13156 9.05004 8.82702V5.51672C9.05004 5.21217 8.80289 4.965 8.49837 4.965C8.19384 4.965 7.94669 5.21217 7.94669 5.51672V8.82702C7.94669 9.13156 8.19384 9.37873 8.49837 9.37873ZM10.7051 8.64311C11.0096 8.64311 11.2567 8.39594 11.2567 8.09139V6.25234C11.2567 5.94779 11.0096 5.70062 10.7051 5.70062C10.4005 5.70062 10.1534 5.94779 10.1534 6.25234V8.09139C10.1534 8.39594 10.4005 8.64311 10.7051 8.64311Z M1.3741 9.9623C1.76321 9.84461 2.17219 10.0653 2.28988 10.4552C3.08356 13.1012 5.52932 15.08 8.49954 15.08C11.4698 15.08 13.9155 13.1012 14.7099 10.4544C14.8269 10.0646 15.2373 9.84534 15.6257 9.96157C16.0141 10.0778 16.2362 10.4875 16.1186 10.8774C15.1469 14.1164 12.1494 16.5513 8.49954 16.5513C4.84965 16.5513 1.85221 14.1164 0.881265 10.8782C0.763574 10.489 0.984244 10.08 1.3741 9.9623Z",
      });
      t.Z = function (e) {
        return (0, n.jsx)(s.Z, { src: r, stroke: "none", ...e });
      };
    },
    21392: function (e, t, l) {
      "use strict";
      var n = l(52322),
        s = l(76585);
      let r = (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M7.29978 8.55127H9.56658C9.88484 8.55127 10.1901 8.42484 10.4151 8.1998C10.6401 7.97475 10.7666 7.66953 10.7666 7.35127C10.7666 7.03301 10.6401 6.72779 10.4151 6.50274C10.1901 6.2777 9.88484 6.15127 9.56658 6.15127H7.29978V8.55127Z M8.5 16.5513C12.9184 16.5513 16.5 12.9697 16.5 8.55127C16.5 4.13287 12.9184 0.55127 8.5 0.55127C4.0816 0.55127 0.5 4.13287 0.5 8.55127C0.5 12.9697 4.0816 16.5513 8.5 16.5513ZM5.69978 4.55127H9.56658C10.3092 4.55127 11.0214 4.84627 11.5465 5.37137C12.0716 5.89647 12.3666 6.60866 12.3666 7.35127C12.3666 8.09388 12.0716 8.80607 11.5465 9.33117C11.0214 9.85627 10.3092 10.1513 9.56658 10.1513H7.29978V12.5513H5.69978V4.55127Z",
      });
      t.Z = function (e) {
        return (0, n.jsx)(s.Z, { src: r, stroke: "none", ...e });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        5126, 2787, 2251, 4697, 977, 4777, 8826, 7478, 6999, 369, 2888, 9774,
        179,
      ],
      function () {
        return e((e.s = 4501));
      }
    ),
      (_N_E = e.O());
  },
]);
