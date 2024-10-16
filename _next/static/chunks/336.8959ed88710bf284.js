(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    336: function (e, l, a) {
      "use strict";
      a.r(l);
      var s = a(52322);
      a(31395), a(2784);
      var c = a(41401),
        n = a(44382),
        o = a(78290);
      l.default = (e) => {
        let { columns: l, className: a } = e;
        return (0, s.jsx)("div", {
          className: a,
          children: (0, s.jsx)(c.tq, {
            initialSlide: 0,
            spaceBetween: 12,
            slidesPerView: "auto",
            speed: 400,
            watchOverflow: !0,
            threshold: 2,
            updateOnWindowResize: !0,
            allowTouchMove: !0,
            className: "!px-6 w-full h-full overflow-visible",
            children: l.map((e, l) =>
              (0, s.jsx)(
                c.o5,
                {
                  className: (0, n.cn)(
                    "flex w-full !h-full",
                    "expanded" === e.type
                      ? "w-full max-w-[450px]"
                      : "!w-[250px]"
                  ),
                  children: (0, s.jsx)(o.CompositionCol, {
                    className: (0, n.cn)(
                      "flex flex-col w-full !h-full gap-3",
                      "expanded" === e.type ? "w-full" : "w-[250px]"
                    ),
                    column: e,
                  }),
                },
                ""
                  .concat(e.cards[0].organization, "-mobile-customer-")
                  .concat(l)
              )
            ),
          }),
        });
      };
    },
    31395: function () {},
  },
]);
