(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9195],
  {
    50906: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return r(58434);
        },
      ]);
    },
    70086: function (t, e, r) {
      "use strict";
      var i = r(52322),
        a = r(61812),
        o = r(96577),
        s = r.n(o),
        u = r(39097),
        n = r.n(u);
      r(2784);
      var l = r(28879),
        h = r.n(l);
      e.Z = (t) => {
        let { post: e } = t,
          r = e.author ? e.author.split(",") : [],
          o = [];
        if (r)
          for (let t = 0; t < r.length; t++)
            o.push(a.find((e) => e.author_id === r[t]));
        return (0, i.jsx)(n(), {
          href: e.path,
          className:
            "group inline-block min-w-full p-2 sm:p-4 h-full border border-transparent transition-all hover:bg-surface-200 dark:hover:bg-surface-75 rounded-xl",
          children: (0, i.jsx)("div", {
            className: "flex flex-col space-y-2",
            children: (0, i.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "border-default relative mb-3 w-full aspect-[2/1] lg:aspect-[5/3] overflow-hidden rounded-lg border shadow-sm",
                  children: (0, i.jsx)(s(), {
                    fill: !0,
                    sizes: "100%",
                    quality: 100,
                    src: e.thumb
                      ? "casestudy" === e.type
                        ? e.thumb
                        : "/images/blog/".concat(e.thumb)
                      : "/images/blog/blog-placeholder.png",
                    className: "scale-100 object-cover overflow-hidden",
                    alt: "".concat(e.title, " thumbnail"),
                  }),
                }),
                e.date &&
                  (0, i.jsxs)("div", {
                    className:
                      "text-foreground-lighter flex items-center space-x-1.5 text-sm",
                    children: [
                      (0, i.jsx)("p", {
                        children: h()(e.date).format("D MMM YYYY"),
                      }),
                      e.readingTime &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("p", { children: "•" }),
                            (0, i.jsx)("p", { children: e.readingTime }),
                          ],
                        }),
                    ],
                  }),
                (0, i.jsx)("h3", {
                  className: "text-foreground max-w-sm text-xl",
                  children: e.title,
                }),
                (0, i.jsx)("p", {
                  className: "text-foreground-light max-w-sm text-base !mb-0",
                  children: e.description,
                }),
              ],
            }),
          }),
        });
      };
    },
    58434: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return M;
          },
          default: function () {
            return L;
          },
        });
      var i = r(52322),
        a = r(2784),
        o = r(5632),
        s = r(55351),
        u = r(27478),
        n = r(70086),
        l = r(61812),
        h = r(96577),
        c = r.n(h),
        g = r(39097),
        p = r.n(g),
        m = r(28879),
        d = r.n(m),
        _ = r(83940),
        b = (t) => {
          let { post: e } = t,
            r = e.author ? e.author.split(",") : [],
            a = [];
          if (r)
            for (let t = 0; t < r.length; t++)
              a.push(l.find((e) => e.author_id === r[t]));
          let o = (t) => t.replaceAll("-", " ");
          return (0, i.jsxs)(p(), {
            href: e.path,
            className:
              "group flex flex-col lg:grid lg:grid-cols-10 xl:grid-cols-12 w-full py-2 sm:py-4 h-full border-b",
            children: [
              (0, i.jsx)("div", {
                className: "flex w-full lg:col-span-8 xl:col-span-8",
                children: (0, i.jsx)("h3", {
                  className: "text-foreground text-lg group-hover:underline",
                  children: e.title,
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "lg:col-span-2 xl:col-span-4 flex justify-start items-center lg:grid grid-cols-2 xl:grid-cols-3 gap-2 text-sm",
                children: [
                  (0, i.jsx)("div", {
                    className: "hidden lg:flex items-center -space-x-2",
                    children: a.map((t, e) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className:
                            "relative ring-background w-6 h-6 rounded-full ring-2",
                          children:
                            t.author_image_url &&
                            (0, i.jsx)(c(), {
                              src: t.author_image_url,
                              className:
                                "rounded-full object-cover border border-default w-full h-full",
                              alt: "".concat(t.author, " avatar"),
                              fill: !0,
                            }),
                        },
                        e
                      )
                    ),
                  }),
                  e.categories &&
                    (0, i.jsx)("div", {
                      className:
                        "hidden xl:flex text-foreground-lighter group-hover:text-foreground-light",
                      children: e.categories.map(
                        (t, e) =>
                          0 === e &&
                          (0, i.jsx)(
                            _.C,
                            {
                              className:
                                "group-hover:border-foreground-muted capitalize",
                              children: o(t),
                            },
                            t
                          )
                      ),
                    }),
                  e.date &&
                    (0, i.jsx)("p", {
                      className:
                        "text-foreground-lighter group-hover:text-foreground-light flex-1 lg:text-right w-full",
                      children: d()(e.date).format("D MMM YYYY"),
                    }),
                ],
              }),
            ],
          });
        },
        x = r(30175),
        f = r(45781),
        v = r(5126),
        j = r(74600),
        y = r.n(j),
        w = r(82876),
        k = r(53068),
        N = r(45576),
        E = r(17644),
        C = r(51929),
        S = r(13088);
      let z = (0, r(55132).Z)("AlignJustify", [
        ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
        ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
        ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }],
      ]);
      var A = r(93501),
        G = r(29982),
        Z = r(44382),
        R = r(94878),
        T = function (t) {
          let { allPosts: e, setPosts: r, view: s, setView: u } = t,
            { BLOG_VIEW: n } = x.LOCAL_STORAGE_KEYS,
            l = "list" === s,
            [h, c] = (0, a.useState)("all"),
            [g, p] = (0, a.useState)(""),
            [m, d] = (0, a.useState)(!1),
            _ = (0, o.useRouter)(),
            b = (0, w.useSearchParams)(),
            j = null == b ? void 0 : b.get("q"),
            T = null == b ? void 0 : b.get("category"),
            P = (0, x.Gc)(1023),
            M = (0, x.Gc)(1535),
            L = [
              "all",
              "product",
              "company",
              "postgres",
              "developers",
              "engineering",
              "launch-week",
            ];
          (0, a.useEffect)(() => {
            j || O();
          }, [h]),
            (0, a.useEffect)(() => {
              j && F(j);
            }, [j]);
          let D = () => {
              g ||
                "all" === h ||
                ((_.query.category = h),
                _.replace(_, void 0, { shallow: !0, scroll: !1 }));
            },
            O = () => {
              let t = [...e];
              t.shift(),
                D(),
                r(
                  "all" === h
                    ? t
                    : e.filter((t) => {
                        var e;
                        return null === (e = t.categories) || void 0 === e
                          ? void 0
                          : e.includes(h);
                      })
                );
            };
          (0, k.Z)("Escape", () => F("")),
            (0, a.useEffect)(() => {
              d(!P);
            }, [P]),
            (0, a.useEffect)(() => {
              _.isReady && j && p(j), _.isReady && T && "all" !== T && c(T);
            }, [T, _.isReady, j]);
          let F = (t) => {
              p(t),
                (null == b ? void 0 : b.has("q")) &&
                  _.replace("/blog", void 0, { shallow: !0, scroll: !1 }),
                _.replace("/blog?q=".concat(t), void 0, {
                  shallow: !0,
                  scroll: !1,
                }),
                t.length < 1 &&
                  _.replace("/blog", void 0, { shallow: !0, scroll: !1 }),
                r(
                  e.filter((e) => {
                    var r, i, a;
                    return (
                      (null === (r = e.tags) || void 0 === r
                        ? void 0
                        : r
                            .join(" ")
                            .replaceAll("-", " ")
                            .includes(t.toLowerCase())) ||
                      (null === (i = e.title) || void 0 === i
                        ? void 0
                        : i.toLowerCase().includes(t.toLowerCase())) ||
                      (null === (a = e.author) || void 0 === a
                        ? void 0
                        : a.includes(t.toLowerCase()))
                    );
                  })
                );
            },
            B = (t) => {
              g && O(),
                g && p(""),
                c(t),
                "all" === t
                  ? _.replace("/blog", void 0, { shallow: !0, scroll: !1 })
                  : _.replace("/blog?category=".concat(t), void 0, {
                      shallow: !0,
                      scroll: !1,
                    });
            };
          return (0, i.jsxs)("div", {
            className: "flex flex-row items-center justify-between gap-2",
            children: [
              (0, i.jsxs)(f.M, {
                mode: "wait",
                children: [
                  !m &&
                    (0, i.jsx)(v.E.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0, transition: { duration: 0.05 } },
                      className: "flex lg:hidden",
                      children: (0, i.jsxs)(A.h_, {
                        children: [
                          (0, i.jsx)(A.$F, {
                            asChild: !0,
                            children: (0, i.jsx)(G.z, {
                              type: "outline",
                              iconRight: (0, i.jsx)(N.Z, {}),
                              className:
                                "w-full min-w-[200px] flex justify-between items-center py-2",
                              children: T
                                ? y()(
                                    null == T ? void 0 : T.replaceAll("-", " ")
                                  )
                                : "All Posts",
                            }),
                          }),
                          (0, i.jsx)(A.AW, {
                            side: "bottom",
                            align: "start",
                            children: L.map((t) =>
                              (0, i.jsx)(
                                A.Xi,
                                {
                                  onClick: () => B(t),
                                  className: (0, Z.cn)(
                                    ("all" !== t || T) && t !== T
                                      ? ""
                                      : "text-brand-600"
                                  ),
                                  children:
                                    "all" === t
                                      ? "All Posts"
                                      : y()(t.replaceAll("-", " ")),
                                },
                                "item-".concat(t)
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  (0, i.jsx)("div", {
                    className:
                      "hidden lg:flex flex-wrap items-center flex-grow gap-2",
                    children: L.map((t) =>
                      (0, i.jsx)(
                        G.z,
                        {
                          type:
                            "all" !== t || g || T
                              ? t === T
                                ? "default"
                                : "outline"
                              : "default",
                          onClick: () => B(t),
                          size: M ? "tiny" : "small",
                          className: "rounded-full",
                          children:
                            "all" === t ? "All" : y()(t.replaceAll("-", " ")),
                        },
                        t
                      )
                    ),
                  }),
                  !m &&
                    (0, i.jsx)(v.E.div, {
                      className: "flex-1 flex justify-end",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0, transition: { duration: 0.05 } },
                      children: (0, i.jsx)(G.z, {
                        className: "px-2",
                        size: "large",
                        type: "default",
                        onClick: () => d(!0),
                        children: (0, i.jsx)(E.Z, { size: "14" }),
                      }),
                    }),
                  m &&
                    (0, i.jsx)(v.E.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0, transition: { duration: 0.05 } },
                      className:
                        "w-full h-auto flex justify-end gap-2 items-stretch lg:max-w-[240px] xl:max-w-[280px]",
                      children: (0, i.jsx)(R.Z, {
                        icon: (0, i.jsx)(E.Z, { size: "14" }),
                        size: "small",
                        layout: "vertical",
                        autoComplete: "off",
                        type: "search",
                        placeholder: "Search blog",
                        value: g,
                        onChange: (t) => {
                          T && c("all"), F(t.target.value);
                        },
                        className: "w-full",
                        actions:
                          P &&
                          (0, i.jsx)(G.z, {
                            type: "link",
                            onClick: () => {
                              p(""), d(!1);
                            },
                            className:
                              "text-foreground-light hover:text-foreground hover:bg-selection",
                            children: (0, i.jsx)(C.Z, { size: "14" }),
                          }),
                      }),
                    }),
                ],
              }),
              (0, i.jsx)(G.z, {
                type: "default",
                title: l ? "Grid View" : "List View",
                onClick: () => {
                  u((t) => {
                    let e = "list" === t ? "grid" : "list";
                    return localStorage.setItem(n, e), e;
                  });
                },
                className: "h-full p-1.5",
                children: l ? (0, i.jsx)(S.Z, {}) : (0, i.jsx)(z, {}),
              }),
            ],
          });
        },
        P = function (t) {
          let e = t.author.split(","),
            r = [];
          for (let t = 0; t < e.length; t++)
            r.push(l.find((r) => r.author_id === e[t]));
          return (0, i.jsx)(
            "div",
            {
              className: "w-full",
              children: (0, i.jsxs)(p(), {
                href: "".concat(t.path),
                className:
                  "grid gap-4 lg:grid-cols-7 lg:gap-8 xl:gap-12 hover:bg-surface-200 dark:hover:bg-surface-75 p-2 sm:p-4 rounded-xl",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "relative w-full aspect-[2/1] lg:col-span-3 lg:aspect-[3/2] overflow-auto rounded-lg border",
                    children: (0, i.jsx)(c(), {
                      src: "/images/blog/" + (t.thumb ? t.thumb : t.image),
                      fill: !0,
                      sizes: "100%",
                      quality: 100,
                      className: "object-cover",
                      alt: "blog thumbnail",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col space-y-2 lg:col-span-4 xl:justify-center max-w-xl",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "text-lighter flex space-x-2 text-sm",
                        children: [
                          (0, i.jsx)("span", { children: t.formattedDate }),
                          (0, i.jsx)("span", { children: "•" }),
                          (0, i.jsx)("span", { children: t.readingTime }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("h2", {
                            className: "h2 lg:!text-2xl xl:!text-3xl !mb-2",
                            children: t.title,
                          }),
                          (0, i.jsx)("p", {
                            className: "p xl:text-lg",
                            children: t.description,
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "flex flex-col w-max gap-2",
                        children: r.map((t, e) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: "flex items-center space-x-2",
                              children: [
                                t.author_image_url &&
                                  (0, i.jsx)("div", {
                                    className: "relative h-6 w-6 overflow-auto",
                                    children: (0, i.jsx)(c(), {
                                      src: t.author_image_url,
                                      alt: "".concat(t.author, " avatar"),
                                      className: "rounded-full object-cover",
                                      fill: !0,
                                      sizes: "30px",
                                    }),
                                  }),
                                (0, i.jsx)("div", {
                                  className: "flex flex-col",
                                  children: (0, i.jsx)("span", {
                                    className: "text-foreground m-0 text-sm",
                                    children: t.author,
                                  }),
                                }),
                              ],
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            },
            t.slug
          );
        },
        M = !0,
        L = function (t) {
          var e;
          let { BLOG_VIEW: r } = x.LOCAL_STORAGE_KEYS,
            l = x.jU
              ? null === (e = localStorage) || void 0 === e
                ? void 0
                : e.getItem(r)
              : void 0,
            [h, c] = (0, a.useState)(t.blogs),
            [g, p] = (0, a.useState)(null != l ? l : "list"),
            m = "list" === g,
            d = (0, o.useRouter)(),
            _ = "Supabase Blog: Open Source Firebase alternative Blog",
            f = "Get all your Supabase News on the Supabase blog.";
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.PB, {
                title: _,
                description: f,
                openGraph: {
                  title: _,
                  description: f,
                  url: "https://supabase.com/".concat(d.pathname),
                  images: [
                    { url: "https://supabase.com/images/og/supabase-og.png" },
                  ],
                },
                additionalLinkTags: [
                  {
                    rel: "alternate",
                    type: "application/rss+xml",
                    href: "https://supabase.com/rss.xml",
                  },
                ],
              }),
              (0, i.jsxs)(u.default, {
                children: [
                  (0, i.jsx)("h1", {
                    className: "sr-only",
                    children: "Supabase blog",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "md:container mx-auto py-4 lg:py-10 px-4 sm:px-12 xl:px-16",
                    children: t.blogs
                      .slice(0, 1)
                      .map((t, e) => (0, i.jsx)(P, { ...t }, e)),
                  }),
                  (0, i.jsx)("div", {
                    className: "border-default border-t",
                    children: (0, i.jsxs)("div", {
                      className:
                        "md:container mx-auto mt-6 lg:mt-8 px-6 sm:px-16 xl:px-20",
                      children: [
                        (0, i.jsx)(T, {
                          allPosts: t.blogs,
                          setPosts: c,
                          view: g,
                          setView: p,
                        }),
                        (0, i.jsx)("ol", {
                          className: (0, Z.cn)(
                            "grid -mx-2 sm:-mx-4 py-6 lg:py-6 lg:pb-20",
                            m ? "grid-cols-1" : "grid-cols-12 lg:gap-4"
                          ),
                          children: (null == h ? void 0 : h.length)
                            ? null == h
                              ? void 0
                              : h.map((t, e) =>
                                  m
                                    ? (0, i.jsx)(
                                        "div",
                                        {
                                          className:
                                            "col-span-12 px-2 sm:px-4 [&_a]:last:border-none",
                                          children: (0, i.jsx)(b, { post: t }),
                                        },
                                        e
                                      )
                                    : (0, i.jsx)(
                                        "div",
                                        {
                                          className:
                                            "col-span-12 mb-4 md:col-span-12 lg:col-span-6 xl:col-span-4 h-full",
                                          children: (0, i.jsx)(n.Z, {
                                            post: t,
                                          }),
                                        },
                                        e
                                      )
                                )
                            : (0, i.jsx)("p", {
                                className: "text-sm text-light col-span-full",
                                children: "No results",
                              }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    43246: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(55132).Z)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    15481: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(55132).Z)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    13088: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(55132).Z)("Grid3x3", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        ["path", { d: "M3 9h18", key: "1pudct" }],
        ["path", { d: "M3 15h18", key: "5xshup" }],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ["path", { d: "M15 3v18", key: "14nvp0" }],
      ]);
    },
    17644: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(55132).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    94878: function (t, e, r) {
      "use strict";
      var i = r(52322),
        a = r(2784),
        o = r(27638),
        s = r(53322),
        u = r(66056),
        n = r(27510),
        l = r(1903),
        h = r(44382),
        c = r(29982),
        g = r(62365),
        p = r(15481);
      function m(t) {
        let {
            autoComplete: e,
            autoFocus: r,
            className: m,
            inputClassName: d,
            iconContainerClassName: _,
            copy: b,
            defaultValue: x,
            descriptionText: f,
            disabled: v,
            error: j,
            icon: y,
            id: w = "",
            name: k = "",
            inputRef: N,
            label: E,
            afterLabel: C,
            beforeLabel: S,
            labelOptional: z,
            layout: A,
            onChange: G,
            onBlur: Z,
            onCopy: R,
            placeholder: T,
            type: P = "text",
            value: M,
            style: L,
            reveal: D = !1,
            actions: O,
            size: F = "medium",
            borderless: B = !1,
            validation: Y,
            ...q
          } = t,
          [J, V] = (0, a.useState)("Copy"),
          [I, K] = (0, a.useState)(!0),
          W = (0, l.Z)("input"),
          {
            formContextOnChange: X,
            values: H,
            errors: U,
            handleBlur: Q,
            touched: $,
            fieldLevelValidation: tt,
          } = (0, g.G)();
        H && !M && (M = H[w || k]),
          j || (U && !j && (j = U[w || k]), (j = $ && $[w] ? j : void 0)),
          (0, a.useEffect)(() => {
            Y && tt(w, Y(M));
          }, []);
        let te = ["peer/input", W.base];
        return (
          j && te.push(W.variants.error),
          j || te.push(W.variants.standard),
          F && te.push(W.size[F]),
          y && te.push(W.with_icon),
          v && te.push(W.disabled),
          d && te.push(d),
          (0, i.jsx)(o.l, {
            label: E,
            afterLabel: C,
            beforeLabel: S,
            labelOptional: z,
            layout: A,
            id: w,
            error: j,
            descriptionText: f,
            style: L,
            size: F,
            className: m,
            children: (0, i.jsxs)("div", {
              className: W.container,
              children: [
                (0, i.jsx)("input", {
                  "data-size": F,
                  autoComplete: e,
                  autoFocus: r,
                  defaultValue: x,
                  disabled: v,
                  id: w,
                  name: k,
                  onChange: function (t) {
                    G && G(t), X && X(t), Y && tt(w, Y(t.target.value));
                  },
                  onBlur: function (t) {
                    Q &&
                      setTimeout(() => {
                        Q(t);
                      }, 100),
                      Z && Z(t);
                  },
                  onCopy: R,
                  placeholder: T,
                  ref: N,
                  type: P,
                  value: D && I ? n.aA : M,
                  className: (0, h.cn)(te),
                  ...q,
                }),
                y && (0, i.jsx)(u.Z, { size: F, icon: y, className: _ }),
                b || j || O
                  ? (0, i.jsxs)("div", {
                      className: W.actions_container,
                      children: [
                        j && (0, i.jsx)(s.Z, { size: F }),
                        b && !(D && I)
                          ? (0, i.jsx)(c.z, {
                              size: "tiny",
                              type: "default",
                              icon: (0, i.jsx)(p.Z, {}),
                              onClick: () => {
                                var t, e;
                                return (
                                  (t = M),
                                  void (
                                    null ===
                                      (e = navigator.clipboard.writeText(t)) ||
                                    void 0 === e ||
                                    e.then(
                                      function () {
                                        V("Copied"),
                                          setTimeout(function () {
                                            V("Copy");
                                          }, 3e3),
                                          null == R || R();
                                      },
                                      function () {
                                        V("Failed to copy");
                                      }
                                    )
                                  )
                                );
                              },
                              children: J,
                            })
                          : null,
                        D && I
                          ? (0, i.jsx)(c.z, {
                              size: "tiny",
                              type: "default",
                              onClick: function () {
                                K(!1);
                              },
                              children: "Reveal",
                            })
                          : null,
                        O && O,
                      ],
                    })
                  : null,
              ],
            }),
          })
        );
      }
      (m.TextArea = function (t) {
        let {
            className: e,
            textAreaClassName: r,
            descriptionText: u,
            disabled: n,
            error: h,
            icon: m,
            id: d = "",
            name: _ = "",
            label: b,
            afterLabel: x,
            beforeLabel: f,
            labelOptional: v,
            layout: j,
            onChange: y,
            onBlur: w,
            placeholder: k,
            value: N,
            style: E,
            rows: C = 4,
            limit: S,
            size: z,
            borderless: A = !1,
            validation: G,
            copy: Z = !1,
            onCopy: R,
            actions: T,
            ...P
          } = t,
          [M, L] = (0, a.useState)(0),
          [D, O] = (0, a.useState)("Copy"),
          {
            formContextOnChange: F,
            values: B,
            errors: Y,
            handleBlur: q,
            touched: J,
            fieldLevelValidation: V,
          } = (0, g.G)();
        B && !N && (N = B[d || _]),
          h || (Y && !h && (h = Y[d || _]), (h = J && J[d || _] ? h : void 0)),
          (0, a.useEffect)(() => {
            G && V(d, G(N));
          }, []);
        let I = (0, l.Z)("input"),
          K = [I.base];
        return (
          h && K.push(I.variants.error),
          h || K.push(I.variants.standard),
          m && K.push(I.with_icon),
          z && K.push(I.size[z]),
          n && K.push(I.disabled),
          r && K.push(r),
          (0, i.jsx)(o.l, {
            className: e,
            label: b,
            afterLabel: x,
            beforeLabel: f,
            labelOptional: v,
            layout: j,
            id: d,
            error: h,
            descriptionText: u,
            style: E,
            size: z,
            children: (0, i.jsxs)("div", {
              className: I.container,
              children: [
                (0, i.jsx)("textarea", {
                  disabled: n,
                  id: d,
                  name: _,
                  rows: C,
                  cols: 100,
                  placeholder: k,
                  onChange: function (t) {
                    L(t.target.value.length),
                      y && y(t),
                      F && F(t),
                      G && V(d, G(t.target.value));
                  },
                  onBlur: function (t) {
                    q &&
                      setTimeout(() => {
                        q(t);
                      }, 100),
                      w && w(t);
                  },
                  onCopy: R,
                  value: N,
                  className: K.join(" "),
                  maxLength: S,
                  ...P,
                }),
                Z || h || T
                  ? (0, i.jsx)("div", {
                      className: I.textarea_actions_container,
                      children: (0, i.jsxs)("div", {
                        className: I.textarea_actions_container_items,
                        children: [
                          h && (0, i.jsx)(s.Z, { size: z }),
                          Z &&
                            (0, i.jsx)(c.z, {
                              size: "tiny",
                              type: "default",
                              onClick: () =>
                                (function (t) {
                                  navigator.clipboard.writeText(t).then(
                                    function () {
                                      O("Copied"),
                                        setTimeout(function () {
                                          O("Copy");
                                        }, 3e3),
                                        null == R || R();
                                    },
                                    function () {
                                      O("Failed to copy");
                                    }
                                  );
                                })(N),
                              icon: (0, i.jsx)(p.Z, {}),
                              children: D,
                            }),
                          T && T,
                        ],
                      }),
                    })
                  : null,
              ],
            }),
          })
        );
      }),
        (e.Z = m);
    },
    53322: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = r(52322);
      r(2784);
      var a = r(1903),
        o = r(43246);
      let s = { tiny: 14, small: 16, medium: 20, large: 24, xlarge: 32 };
      function u(t) {
        let { style: e, size: r = "medium" } = t,
          u = (0, a.Z)("inputErrorIcon");
        return (0, i.jsx)("div", {
          className: u.base,
          style: e,
          children: (0, i.jsx)(o.Z, { size: s[r], strokeWidth: 2 }),
        });
      }
    },
    66056: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = r(52322);
      r(2784);
      var a = r(1903),
        o = r(44382);
      function s(t) {
        let { icon: e, className: r, size: s } = t,
          u = (0, a.Z)("inputIconContainer");
        return (0, i.jsx)("div", {
          className: (0, o.cn)(u.base, u.size[s], r),
          children: e,
        });
      }
    },
    61812: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"soedirgo","author":"Bobbie Soedirgo","username":"soedirgo","position":"Engineering","author_url":"https://github.com/soedirgo","author_image_url":"https://github.com/soedirgo.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"hieu","author":"Hieu Pham","username":"hieu","position":"Engineering","author_url":"https://github.com/phamhieu","author_image_url":"https://github.com/phamhieu.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonny Summers-Muir","position":"Product Design","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana Pavlinić","position":"Design","author_url":"https://github.com/marijanapav","author_image_url":"https://github.com/marijanapav.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"andreespirela","author":"Andrees Pirela","position":"Engineering","author_url":"https://github.com/andreespirela","author_image_url":"https://github.com/andreespirela.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"},{"author_id":"kevinbrolly","author":"Kevin Brolly","position":"Head of Customer Success","author_url":"https://twitter.com/kevinbrolly","author_image_url":"https://pbs.twimg.com/profile_images/1292938696912756736/_DO9_Evo_200x200.jpg"},{"author_id":"benediktmueller","author":"Benedikt M\xfcller","username":"bndkt","position":"Guest Author","author_url":"https://twitter.com/bndkt","author_image_url":"https://github.com/bndkt.png"},{"author_id":"long","author":"Long Hoang","username":"loong","position":"Growth","author_url":"https://github.com/loong","author_image_url":"https://github.com/loong.png"},{"author_id":"kamil_ogorek","author":"Kamil Og\xf3rek","username":"kamil","position":"Integrations Lead","author_url":"https://twitter.com/kamilogorek","author_image_url":"https://github.com/kamilogorek.png"},{"author_id":"yuri","author":"Yuri Santana","username":"yuri","position":"DevRel Social Media and Community","author_url":"https://twitter.com/yuricodesbot","author_image_url":"https://github.com/YuriCodes.png"},{"author_id":"ivasilov","author":"Ivan Vasilov","username":"ivasilov","position":"Engineering","author_url":"https://twitter.com/ivasilov","author_image_url":"https://github.com/ivasilov.png"},{"author_id":"philipp","author":"Philipp Steinr\xf6tter","username":"psteinroe","position":"Guest Author","author_url":"https://twitter.com/psteinroe","author_image_url":"/images/philipp-steinrotter.jpg"},{"author_id":"giancarlo","author":"Giancarlo Buomprisco","username":"giancarlo","position":"Guest Author","author_url":"https://twitter.com/gc_psk","author_image_url":"https://github.com/Gbuomprisco.png"},{"author_id":"filipe","author":"Filipe Caba\xe7o","username":"filipe","position":"Engineering","author_url":"https://twitter.com/filipecabaco","author_image_url":"https://github.com/filipecabaco.png"},{"author_id":"raminder_singh","author":"Raminder Singh","username":"imor","position":"Engineering","author_url":"https://github.com/imor","author_image_url":"https://github.com/imor.png"},{"author_id":"samrose","author":"Sam Rose","username":"samrose","position":"Engineering","author_url":"https://github.com/samrose","author_image_url":"https://github.com/samrose.png"},{"author_id":"timabdulla","author":"Tim Abdulla","username":"timabdulla","position":"Guest Author","author_url":"https://github.com/timabdulla","author_image_url":"https://github.com/timabdulla.png"},{"author_id":"grdsdev","author":"Guilherme Souza","username":"grdsdev","position":"Engineering","author_url":"https://github.com/grdsdev","author_image_url":"https://github.com/grdsdev.png"},{"author_id":"chris_chandler","author":"Chris Chandler","username":"chrischandler","position":"Partnerships","author_url":"https://github.com/chrischandler","author_image_url":"https://github.com/chrischandler.png"},{"author_id":"bdon","author":"Brandon Liu","username":"bdon","position":"Guest Author","author_url":"https://github.com/bdon","author_image_url":"https://github.com/bdon.png"},{"author_id":"p6l-richard","author":"Richard Poelderl","username":"p6l-richard","position":"Guest Author","author_url":"https://github.com/p6l-richard","author_image_url":"https://github.com/p6l-richard.png"},{"author_id":"PeerRich","author":"Peer Richelsen","username":"PeerRich","position":"Guest Author","author_url":"https://github.com/PeerRich","author_image_url":"https://github.com/PeerRich.png"},{"author_id":"khajvandi","author":"Cyrus Khajvandi","username":"khajvandi","position":"Co-Founder & CEO","company":"Humata","author_url":"https://www.linkedin.com/in/khajvandi/","author_image_url":"https://media.licdn.com/dms/image/v2/D5603AQGZst2tvV47PA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694666298155?e=1728518400&v=beta&t=Jkt6ii4cV8FsvU4qONEGFVUADw-Zc_WI1h-pSrenxGg"},{"author_id":"anas-araid","author":"Anas Araid","username":"anas-araid","position":"Guest Author","author_url":"https://github.com/anas-araid","author_image_url":"https://github.com/anas-araid.png"},{"author_id":"activenode","author":"David Lorenz","username":"activenode","position":"Guest Author","author_url":"https://github.com/activenode","author_image_url":"https://github.com/activenode.png"},{"author_id":"craig_cannon","author":"Craig Cannon","username":"CraigCannon","position":"Marketing","author_url":"https://x.com/CraigCannon","author_image_url":"https://github.com/craigcannon.png"},{"author_id":"jay_meistrich","author":"Jay Meistrich","username":"jmeistrich","position":"Guest Author","author_url":"https://x.com/jmeistrich","author_image_url":"https://github.com/jmeistrich.png"},{"author_id":"nyannyacha","author":"Nyannyacha","username":"nyannyacha","position":"Engineering","author_url":"https://github.com/nyannyacha","author_image_url":"https://github.com/nyannyacha.png"},{"author_id":"jstoone","author":"Jakob Steinn","position":"Co-founder & Tech Lead","company":"Good Tape","author_url":"https://twitter.com/jstoone","author_image_url":"https://pbs.twimg.com/profile_images/1233003191538790400/3OxNooXT_200x200.jpg"},{"author_id":"tim_shedor","author":"Tim Shedor","username":"tshedor","position":"Guest Author","author_url":"https://github.com/tshedor","author_image_url":"https://github.com/tshedor.png"},{"author_id":"jgoux","author":"Julien Goux","username":"jgoux","position":"Engineering","author_url":"https://github.com/jgoux","author_image_url":"https://github.com/jgoux.png"}]'
      );
    },
  },
  function (t) {
    t.O(
      0,
      [5126, 2787, 2251, 4697, 977, 8149, 7478, 6999, 2888, 9774, 179],
      function () {
        return t((t.s = 50906));
      }
    ),
      (_N_E = t.O());
  },
]);
