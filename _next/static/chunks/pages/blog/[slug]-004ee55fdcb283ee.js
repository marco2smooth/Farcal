(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2492, 7042],
  {
    40167: function (e, l, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[slug]",
        function () {
          return s(93786);
        },
      ]);
    },
    57042: function (e, l, s) {
      "use strict";
      s.r(l);
      var a = s(52322),
        t = s(39097),
        r = s.n(t),
        i = s(44382),
        n = s(29982);
      l.default = (e) => {
        let { darkerBg: l, className: s } = e;
        return (0, a.jsxs)("div", {
          className: (0, i.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            l && "bg-alternative",
            s
          ),
          children: [
            (0, a.jsx)("div", {
              className: "col-span-12",
              children: (0, a.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, a.jsx)(n.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, a.jsx)(r(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, a.jsx)(n.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, a.jsx)(r(), {
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
    93786: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          __N_SSG: function () {
            return P;
          },
          default: function () {
            return A;
          },
        });
      var a = s(52322),
        t = s(69471),
        r = s(55351),
        i = s(96577),
        n = s.n(i),
        c = s(39097),
        o = s.n(c),
        d = s(5632),
        x = s(88147),
        h = s(83940),
        p = s(28879),
        u = s.n(p),
        m = s(61812),
        g = s(63511),
        f = s(33880),
        j = s(95421),
        b = s(57042);
      s(2784);
      var v = s(90369),
        N = () => {
          let e = (0, v.b)();
          return (0, a.jsxs)("div", {
            className:
              "w-full border bg-alternative-200 flex flex-col rounded-lg text-foreground-lighter mt-12",
            children: [
              (0, a.jsxs)("div", {
                className: "w-full p-4 flex justify-between items-center",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "/ga-week",
                    className:
                      "flex items-center gap-1.5 leading-none uppercase text-xs opacity-80 transition-opacity hover:opacity-100",
                    children: [
                      (0, a.jsx)(n(), {
                        src: "/images/launchweek/ga/ga-black.svg",
                        alt: "GA logo",
                        className: "dark:hidden w-5 aspect-[104/57] h-auto",
                        priority: !0,
                        width: 30,
                        height: 30,
                      }),
                      (0, a.jsx)(n(), {
                        src: "/images/launchweek/ga/ga-white.svg",
                        alt: "GA logo",
                        className:
                          "hidden dark:block w-5 aspect-[104/57] h-auto",
                        priority: !0,
                        width: 30,
                        height: 30,
                      }),
                      (0, a.jsx)("span", {
                        className: "text-foreground tracking-[1px] font-mono",
                        children: "Week",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "font-mono uppercase tracking-wide text-xs",
                    children: "15-19 April",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "pb-4 border-t p-4",
                children: (0, a.jsx)("ul", {
                  className: "flex flex-col gap-2",
                  children: e.map(
                    (e, l) =>
                      e.shipped &&
                      (0, a.jsx)(
                        "ol",
                        {
                          children: (0, a.jsxs)(o(), {
                            href: e.blog,
                            className:
                              "group flex py-1 gap-2 hover:text-foreground",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "shrink-0 text-sm font-mono uppercase leading-6",
                                children: ["Day ", l + 1, " -"],
                              }),
                              (0, a.jsx)("span", {
                                className: "leading-6",
                                children: e.title,
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                  ),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "w-[calc(100%+2px)] bg-surface-100 flex flex-col gap-2 -m-px border rounded-lg",
                children: (0, a.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "font-mono uppercase text-xs text-foreground tracking-wide",
                      children: "Build Stage",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "flex flex-col gap-2 mt-4",
                      children: [
                        v._.map(
                          (e, l) =>
                            e.is_shipped &&
                            (0, a.jsx)(
                              "ol",
                              {
                                children: (0, a.jsx)(o(), {
                                  href: e.links[0].url,
                                  className:
                                    "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                                  children: (0, a.jsxs)("span", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "font-mono uppercase mr-2",
                                        children: [
                                          l + 1 < 10 ? "0" : "",
                                          l + 1,
                                          " -",
                                        ],
                                      }),
                                      e.title,
                                    ],
                                  }),
                                }),
                              },
                              e.id
                            )
                        ),
                        (0, a.jsx)("ol", {
                          className: "border-t pt-4 mt-2",
                          children: (0, a.jsx)(o(), {
                            href: "/blog/supabase-oss-hackathon",
                            className:
                              "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                            children: "Open Source Hackathon 2024",
                          }),
                        }),
                        (0, a.jsx)("ol", {
                          children: (0, a.jsx)(o(), {
                            href: "/ga-week#meetups",
                            className:
                              "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                            children: "Community Meetups",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = s(71028),
        y = () => {
          let e = (0, w.b)();
          return (0, a.jsxs)("div", {
            className:
              "w-full border bg-alternative-200 flex flex-col rounded-lg text-foreground-lighter mt-12",
            children: [
              (0, a.jsxs)("div", {
                className: "w-full p-4 flex justify-between items-center",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "/launch-week",
                    className:
                      "flex items-center text-foreground font-medium gap-1.5 leading-none uppercase text-xs opacity-80 transition-opacity hover:opacity-100",
                    children: [
                      "Launch Week",
                      (0, a.jsx)("span", {
                        className: "font-mono",
                        children: "12",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "font-mono uppercase tracking-wide text-xs",
                    children: "12-16 August",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "pb-4 border-t p-4",
                children: (0, a.jsx)("ul", {
                  className: "flex flex-col gap-2",
                  children: e.map(
                    (e, l) =>
                      e.shipped &&
                      (0, a.jsx)(
                        "ol",
                        {
                          children: (0, a.jsxs)(o(), {
                            href: e.blog,
                            className:
                              "group flex py-1 gap-2 hover:text-foreground",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "shrink-0 text-sm font-mono uppercase leading-6",
                                children: ["Day ", l + 1, " -"],
                              }),
                              (0, a.jsx)("span", {
                                className: "leading-6",
                                children: e.title,
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                  ),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "w-[calc(100%+2px)] bg-surface-100 flex flex-col gap-2 -m-px border rounded-lg",
                children: (0, a.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "font-mono uppercase text-xs text-foreground tracking-wide",
                      children: "Build Stage",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "flex flex-col gap-2 mt-4",
                      children: [
                        w._.map(
                          (e, l) =>
                            e.is_shipped &&
                            (0, a.jsx)(
                              "ol",
                              {
                                children: (0, a.jsx)(o(), {
                                  href: e.links[0].url,
                                  className:
                                    "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                                  children: (0, a.jsxs)("span", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "font-mono uppercase mr-2",
                                        children: [
                                          l + 1 < 10 ? "0" : "",
                                          l + 1,
                                          " -",
                                        ],
                                      }),
                                      e.title,
                                    ],
                                  }),
                                }),
                              },
                              e.id
                            )
                        ),
                        (0, a.jsx)("ol", {
                          className: "border-t pt-4 mt-2",
                          children: (0, a.jsx)(o(), {
                            href: "/launch-week#meetups",
                            className:
                              "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                            children: "Community Meetups",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        k = s(5126),
        _ = s(17566);
      let S = (e) => {
          let { step: l } = e;
          return (0, a.jsx)(k.E.div, {
            className:
              "h-auto w-full flex flex-col lg:flex-row relative overflow-hidden",
            initial: "default",
            animate: "default",
            whileHover: "hover",
            children: (0, a.jsxs)(o(), {
              href:
                l.blog || l.github || l.hackernews || l.blog || l.docs || "#",
              className:
                "\nflex flex-col flex-1 gap-3 items-start justify-center border rounded-xl h-full relative overflow-hidden\np-6 lg:p-10 text-2xl bg-[#1C1C1C]\nbefore:absolute before:w-full before:h-full before:top-52 before:right-0 before:bottom-0 before:left-0\nbefore:border-[#1f3536] before:-z-10\n",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "relative z-10 flex items-center text-lg flex-col-reverse lg:flex-row lg:justify-start gap-2 text-foreground",
                  children: (0, a.jsx)("div", {
                    className: [
                      "text-transparent bg-clip-text bg-gradient-to-r text-base from-[#F4FFFA] to-[#B7B2C9] drop-shadow-lg",
                      l.break_thumb_title && "max-w-[240px]",
                    ].join(" "),
                    children: l.title,
                  }),
                }),
                l.thumb &&
                  (0, a.jsx)(k.E.div, {
                    className: "absolute inset-0 w-full h-full z-0",
                    variants: B,
                    children: (0, a.jsx)(n(), {
                      src: l.thumb,
                      className:
                        "\n  absolute\n  w-full h-full -z-10 transition-all duration-300\n",
                      layout: "fill",
                      objectPosition: "100% 50%",
                      objectFit: "cover",
                      alt: "",
                    }),
                  }),
                (0, a.jsx)("div", {
                  className:
                    "absolute opacity-10 w-full h-full -z-10 transition-all duration-300",
                  style: {
                    background:
                      "radial-gradient(650px 150px at 50% 100%, #4635A730, transparent)",
                  },
                }),
              ],
            }),
          });
        },
        C = [0.5, 0, 0.35, 1],
        B = {
          default: { scale: 1, ease: C, duration: 0.2 },
          hover: { scale: 1.03, transition: { duration: 0.4, ease: C } },
        };
      var L = () => {
          let e = _.Z.filter((e) => Date.parse(e.publishedAt) <= Date.now());
          return e.length
            ? (0, a.jsxs)("div", {
                className:
                  "flex flex-col gap-3 lg:gap-4 border-t border-muted py-4 lg:py-8 mt-4 lg:mt-8",
                children: [
                  (0, a.jsx)("h3", {
                    className: "text-foreground text-xl mb-4",
                    children: "More Launch Week 7",
                  }),
                  e.map((e) => {
                    var l;
                    return null === (l = e.steps) || void 0 === l
                      ? void 0
                      : l.map((e, l) => {
                          var s;
                          return (0, a.jsxs)(a.Fragment, {
                            children: [
                              !e.hideInBlog && (0, a.jsx)(S, { step: e }, l),
                              null === (s = e.steps) || void 0 === s
                                ? void 0
                                : s.map(
                                    (e, l) =>
                                      !e.hideInBlog &&
                                      (0, a.jsx)(S, { step: e }, l)
                                  ),
                            ],
                          });
                        });
                  }),
                ],
              })
            : null;
        },
        z = s(27646),
        D = () =>
          (0, a.jsxs)("div", {
            className:
              "w-full border bg-alternative-200 flex flex-col rounded-lg text-foreground-lighter mt-12",
            children: [
              (0, a.jsxs)("div", {
                className: "w-full p-4 flex justify-between items-center",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "/launch-week",
                    className:
                      "flex items-center gap-1.5 leading-none uppercase text-xs",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-foreground tracking-[1px]",
                        children: "Launch Week",
                      }),
                      " ",
                      (0, a.jsx)(n(), {
                        src: "/images/launchweek/lwx/logos/lwx_logo.svg",
                        alt: "Supabase Launch Week X icon",
                        width: 16,
                        height: 16,
                        className: "w-3 h-3",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "font-mono uppercase tracking-wide text-xs",
                    children: "11-15 Dec",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "pb-4 border-t p-4",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "font-mono uppercase text-xs text-foreground tracking-wide mb-3",
                    children: "Main Stage",
                  }),
                  (0, a.jsx)("ul", {
                    className: "flex flex-col gap-2",
                    children: z.b.map(
                      (e, l) =>
                        e.shipped &&
                        (0, a.jsx)(
                          "ol",
                          {
                            children: (0, a.jsxs)(o(), {
                              href: e.blog,
                              className:
                                "group flex py-1 gap-2 hover:text-foreground",
                              children: [
                                (0, a.jsxs)("span", {
                                  className:
                                    "shrink-0 text-sm font-mono uppercase leading-6",
                                  children: ["Day ", l + 1, " -"],
                                }),
                                (0, a.jsx)("span", {
                                  className: "leading-6",
                                  children: e.description,
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                    ),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "w-[calc(100%+2px)] bg-surface-100 flex flex-col gap-2 -m-px border rounded-lg",
                children: (0, a.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "font-mono uppercase text-xs text-foreground tracking-wide",
                      children: "Build Stage",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "flex flex-col gap-2 mt-4",
                      children: [
                        z._.map(
                          (e, l) =>
                            e.is_shipped &&
                            (0, a.jsx)(
                              "ol",
                              {
                                children: (0, a.jsx)(o(), {
                                  href: e.links[0].url,
                                  className:
                                    "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                                  children: (0, a.jsxs)("span", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "font-mono uppercase mr-2",
                                        children: [
                                          l + 1 < 10 ? "0" : "",
                                          l + 1,
                                          " -",
                                        ],
                                      }),
                                      e.title,
                                    ],
                                  }),
                                }),
                              },
                              e.id
                            )
                        ),
                        (0, a.jsx)("ol", {
                          className: "border-t pt-4 mt-2",
                          children: (0, a.jsx)(o(), {
                            href: "/blog/supabase-hackathon-lwx",
                            className:
                              "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                            children: "Supabase Launch Week X Hackathon",
                          }),
                        }),
                        (0, a.jsx)("ol", {
                          children: (0, a.jsx)(o(), {
                            href: "/blog/community-meetups-lwx",
                            className:
                              "relative flex items-center justify-between group w-full py-1 hover:text-foreground",
                            children:
                              "Supabase Launch Week X Community Meetups",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        F = s(27478),
        M = s(28079),
        P = !0,
        A = function (e) {
          var l, s, i, c, p, v, w;
          let k = e.blog.content,
            _ = e.blog.author.split(","),
            S = "7" === e.blog.launchweek,
            C =
              (null === (l = e.blog.launchweek) || void 0 === l
                ? void 0
                : l.toString().toLocaleLowerCase()) === "x",
            B =
              (null === (s = e.blog.launchweek) || void 0 === s
                ? void 0
                : s.toString().toLocaleLowerCase()) === "11",
            z =
              (null === (i = e.blog.launchweek) || void 0 === i
                ? void 0
                : i.toString().toLocaleLowerCase()) === "12",
            P = _.map((e) => m.find((l) => l.author_id === e)).filter(g.BX),
            A = P.map((e) => (null == e ? void 0 : e.author_url)).filter(g.BX),
            { basePath: E } = (0, d.useRouter)(),
            W = (e) => {
              let { post: l, label: s, className: t } = e;
              return (0, a.jsx)(o(), {
                href: "".concat(l.path),
                as: "".concat(l.path),
                children: (0, a.jsx)("div", {
                  className: t,
                  children: (0, a.jsx)("div", {
                    className:
                      "hover:bg-control cursor-pointer rounded border p-6 transition",
                    children: (0, a.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("p", {
                            className: "text-foreground-lighter text-sm",
                            children: s,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h4", {
                              className: "text-foreground text-lg",
                              children: l.title,
                            }),
                            (0, a.jsx)("p", {
                              className: "small",
                              children: l.formattedDate,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              });
            },
            X =
              e.blog.toc &&
              (0, a.jsxs)("div", {
                className: "space-y-8 py-8 lg:py-0",
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)("div", {
                      className: "flex flex-wrap gap-2",
                      children:
                        null === (c = e.blog.tags) || void 0 === c
                          ? void 0
                          : c.map((e) =>
                              (0, a.jsx)(
                                o(),
                                {
                                  href: "/blog/tags/".concat(e),
                                  children: (0, a.jsx)(h.C, { children: e }),
                                },
                                "category-badge-".concat(e)
                              )
                            ),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-foreground mb-4",
                          children: "On this page",
                        }),
                        (0, a.jsx)("div", {
                          className: "prose-toc",
                          children: (0, a.jsx)(x.D, {
                            children: e.blog.toc.content,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            H = {
              title:
                null !== (v = e.blog.meta_title) && void 0 !== v
                  ? v
                  : e.blog.title,
              description:
                null !== (w = e.blog.meta_description) && void 0 !== w
                  ? w
                  : e.blog.description,
              url: "https://supabase.com/blog/".concat(e.blog.slug),
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.PB, {
                title: H.title,
                description: H.description,
                openGraph: {
                  title: H.title,
                  description: H.description,
                  url: H.url,
                  type: "article",
                  videos: e.blog.video
                    ? [
                        {
                          url: e.blog.video,
                          type: "application/x-shockwave-flash",
                          width: 640,
                          height: 385,
                        },
                      ]
                    : void 0,
                  article: {
                    publishedTime: e.blog.date,
                    authors: A,
                    tags:
                      null === (p = e.blog.tags) || void 0 === p
                        ? void 0
                        : p.map((e) => e),
                  },
                  images: [
                    {
                      url: "https://supabase.com"
                        .concat(E, "/images/blog/")
                        .concat(e.blog.image ? e.blog.image : e.blog.thumb),
                      alt: "".concat(e.blog.title, " thumbnail"),
                    },
                  ],
                },
              }),
              (0, a.jsxs)(F.default, {
                children: [
                  (0, a.jsx)("div", {
                    className:
                      " container mx-auto px-4 py-4 md:py-8 xl:py-10 sm:px-16 xl:px-20 ",
                    children: (0, a.jsxs)("div", {
                      className: "grid grid-cols-12 gap-4",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "hidden col-span-12 xl:block lg:col-span-2",
                          children: (0, a.jsxs)(o(), {
                            href: "/blog",
                            className:
                              "text-foreground-lighter hover:text-foreground flex cursor-pointer items-center text-sm transition",
                            children: [
                              (0, a.jsx)(M.Z, { style: { padding: 0 } }),
                              "Back",
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "col-span-12 lg:col-span-12 xl:col-span-10",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mb-6 lg:mb-10 max-w-5xl space-y-8",
                              children: (0, a.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                  (0, a.jsx)(o(), {
                                    href: "/blog",
                                    className: "text-brand hidden lg:inline",
                                    children: "Blog",
                                  }),
                                  (0, a.jsx)("h1", {
                                    className: "text-2xl sm:text-4xl",
                                    children: e.blog.title,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "text-light flex space-x-3 text-sm",
                                    children: [
                                      (0, a.jsx)("p", {
                                        children: u()(e.blog.date).format(
                                          "DD MMM YYYY"
                                        ),
                                      }),
                                      (0, a.jsx)("p", { children: "•" }),
                                      (0, a.jsx)("p", {
                                        children: (0, g.Vz)(e.blog.source),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "hidden lg:flex justify-between",
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "flex-1 flex flex-col gap-3 pt-2 md:flex-row md:gap-0 lg:gap-3",
                                      children: P.map((e, l) =>
                                        (0, a.jsx)(
                                          "div",
                                          {
                                            className: "mr-4 w-max",
                                            children: (0, a.jsx)(o(), {
                                              href: e.author_url,
                                              target: "_blank",
                                              className: "cursor-pointer",
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  e.author_image_url &&
                                                    (0, a.jsx)("div", {
                                                      className: "w-10",
                                                      children: (0, a.jsx)(
                                                        n(),
                                                        {
                                                          src: e.author_image_url,
                                                          className:
                                                            "border-default rounded-full border w-full aspect-square object-cover",
                                                          alt: "".concat(
                                                            e.author,
                                                            " avatar"
                                                          ),
                                                          width: 40,
                                                          height: 40,
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "text-foreground mb-0 text-sm",
                                                        children: e.author,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "text-foreground-lighter mb-0 text-xs",
                                                        children: e.position,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          l
                                        )
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "grid grid-cols-12 lg:gap-16 xl:gap-8",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "col-span-12 lg:col-span-7 xl:col-span-7 overflow-x-hidden",
                                  children: [
                                    (0, a.jsx)("article", {
                                      children: (0, a.jsxs)("div", {
                                        className: "prose prose-docs",
                                        children: [
                                          e.blog.youtubeHero
                                            ? (0, a.jsx)("iframe", {
                                                className: "w-full",
                                                width: "700",
                                                height: "350",
                                                src: e.blog.youtubeHero,
                                                allow:
                                                  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                                allowFullScreen: !0,
                                              })
                                            : e.blog.thumb &&
                                              (0, a.jsx)("div", {
                                                className:
                                                  "hidden md:block relative mb-8 w-full aspect-video overflow-auto rounded-lg border",
                                                children: (0, a.jsx)(n(), {
                                                  src:
                                                    "/images/blog/" +
                                                    e.blog.thumb,
                                                  alt: e.blog.title,
                                                  fill: !0,
                                                  quality: 100,
                                                  sizes:
                                                    "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                                  className: "object-cover m-0",
                                                }),
                                              }),
                                          (0, a.jsx)(t.R, {
                                            ...k,
                                            components: (0, f.Z)("blog"),
                                          }),
                                        ],
                                      }),
                                    }),
                                    S && (0, a.jsx)(L, {}),
                                    C && (0, a.jsx)(D, {}),
                                    B && (0, a.jsx)(N, {}),
                                    z && (0, a.jsx)(y, {}),
                                    (0, a.jsxs)("div", {
                                      className: "block lg:hidden py-8",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "text-foreground-lighter text-sm",
                                          children: "Share this article",
                                        }),
                                        (0, a.jsx)(j.Z, {
                                          title: e.blog.title,
                                          slug: e.blog.slug,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "grid gap-8 py-8 lg:grid-cols-1",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children:
                                            e.prevPost &&
                                            (0, a.jsx)(W, {
                                              post: e.prevPost,
                                              label: "Last post",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                          children:
                                            e.nextPost &&
                                            (0, a.jsx)(W, {
                                              post: e.nextPost,
                                              label: "Next post",
                                              className: "text-right",
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "relative col-span-12 space-y-8 lg:col-span-5 xl:col-span-3 xl:col-start-9",
                                  children: (0, a.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "hidden lg:block",
                                        children: X,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "hidden lg:block",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-foreground text-sm",
                                            children: "Share this article",
                                          }),
                                          (0, a.jsx)(j.Z, {
                                            title: e.blog.title,
                                            slug: e.blog.slug,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(b.default, {}),
                ],
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 1028, 9289, 369, 1935, 7566, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 40167));
      }
    ),
      (_N_E = e.O());
  },
]);
