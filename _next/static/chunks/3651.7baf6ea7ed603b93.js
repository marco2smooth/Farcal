(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3651],
  {
    13651: function (e, l, s) {
      "use strict";
      s.r(l);
      var a = s(52322);
      s(31395), s(2784);
      var i = s(41401),
        t = s(39097),
        r = s.n(t),
        d = s(4880),
        c = s(37637),
        n = s(93089),
        h = s(96577),
        x = s.n(h);
      let o = (e) => {
          var l;
          let { story: s } = e;
          return (0, a.jsx)(r(), {
            href: s.url,
            target: null !== (l = s.target) && void 0 !== l ? l : void 0,
            className: "w-full h-full",
            children: (0, a.jsxs)(n.Z, {
              outerClassName: "w-full h-full",
              hasActiveOnHover: !0,
              innerClassName:
                "flex flex-col justify-between text-foreground-lighter bg-surface-75 p-2",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-between gap-6 p-3 md:max-w-[230px]",
                  children: [
                    (0, a.jsx)(x(), {
                      src: s.icon,
                      alt: s.heading,
                      width: 150,
                      height: 30,
                      className:
                        "max-h-[23px] max-w-[150px] w-auto object-contain object-left-bottom filter invert dark:invert-0 opacity-60",
                    }),
                    (0, a.jsx)("h3", {
                      className: "text-foreground",
                      children: s.heading,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "p-3 bg-surface-200 rounded-lg",
                  children: (0, a.jsx)("q", {
                    className: "text-sm block",
                    children: s.subheading,
                  }),
                }),
              ],
            }),
          });
        },
        m = (e) => {
          let { highlight: l } = e,
            s = l.icon;
          return (0, a.jsxs)("li", {
            className: "text-foreground text-sm max-w-[250px]",
            children: [
              (0, a.jsx)(s, { className: "stroke-1 mb-2" }),
              (0, a.jsx)("h4", {
                className: "text-foreground text-xl lg:text-2xl",
                children: l.heading,
              }),
              (0, a.jsx)("p", {
                className: "text-foreground-lighter text-sm",
                children: l.subheading,
              }),
              (0, a.jsx)(d.Z, {
                hasChevron: !0,
                label: "Read story",
                url: l.url,
                className: "mt-4",
              }),
            ],
          });
        };
      l.default = (e) =>
        (0, a.jsxs)("section", {
          id: e.id,
          children: [
            (0, a.jsx)(c.default, {
              className: "flex flex-col gap-4 md:gap-8 !pb-0",
              children: (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)("span", { className: "label", children: e.label }),
                  (0, a.jsx)("h2", { className: "h2", children: e.heading }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "overflow-hidden",
              children: (0, a.jsxs)(c.default, {
                className: "!py-4",
                children: [
                  (0, a.jsx)("ul", {
                    className:
                      "hidden xl:flex flex-col gap-4 md:flex-row items-stretch w-full h-auto min-h-[300px]",
                    children: e.stories.map((e) =>
                      (0, a.jsx)(
                        "li",
                        {
                          className: "w-full",
                          children: (0, a.jsx)(o, { story: e }),
                        },
                        e.heading
                      )
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: "xl:hidden",
                    children: (0, a.jsx)(i.tq, {
                      style: { zIndex: 0, marginRight: "1px" },
                      initialSlide: 0,
                      spaceBetween: 12,
                      slidesPerView: 1.2,
                      speed: 300,
                      watchOverflow: !0,
                      threshold: 2,
                      updateOnWindowResize: !0,
                      className: "h-[300px] w-full !overflow-visible",
                      breakpoints: {
                        320: { slidesPerView: 1.2 },
                        540: { slidesPerView: 1.5 },
                        900: { slidesPerView: 2.5 },
                      },
                      children: e.stories.map((e, l) =>
                        (0, a.jsx)(
                          i.o5,
                          { children: (0, a.jsx)(o, { story: e }) },
                          "".concat(e.heading, "-mobile")
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)(c.default, {
              className: "!pt-0",
              children: (0, a.jsx)("ul", {
                className:
                  "grid grid-cols-2 gap-4 sm:gap-10 gap-y-10 lg:grid-cols-4 md:gap-12 lg:gap-x-8 mt-8",
                children: e.highlights.map((e) =>
                  (0, a.jsx)(m, { highlight: e }, e.heading)
                ),
              }),
            }),
          ],
        });
    },
    31395: function () {},
  },
]);
