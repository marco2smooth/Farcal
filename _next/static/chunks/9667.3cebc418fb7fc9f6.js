"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9667],
  {
    19667: function (e, a, n) {
      n.r(a);
      var t = n(52322);
      n(2784);
      var l = n(2689),
        s = n.n(l),
        o = n(44382),
        r = n(78290);
      let c = "gap-4";
      a.default = (e) => {
        let { columns: a, className: n } = e;
        return (0, t.jsx)("div", {
          className: (0, o.cn)(
            "group/tw-marquee w-full items-stretch h-[300px] min-w-[300px] nowrap mb-16 md:mb-24 lg:mb-24",
            c,
            n
          ),
          children: s()(0, 2).map((e, n) =>
            (0, t.jsx)(
              "div",
              {
                className: (0, o.cn)(
                  "relative",
                  "left-0 z-10",
                  "w-auto h-full",
                  "flex gap-4 items-end",
                  "motion-safe:run motion-safe:animate-[marquee_50000ms_linear_both_infinite] group-hover/tw-marquee:pause",
                  "will-change-transform transition-transform",
                  c
                ),
                children: a.map((e, a) =>
                  (0, t.jsx)(
                    r.CompositionCol,
                    {
                      className: (0, o.cn)(
                        "flex flex-col !h-full",
                        c,
                        "expanded" === e.type ? "w-[450px]" : "w-[250px]"
                      ),
                      column: e,
                    },
                    "customers-col-".concat(n, "-").concat(a)
                  )
                ),
              },
              "row-".concat(n)
            )
          ),
        });
      };
    },
  },
]);
