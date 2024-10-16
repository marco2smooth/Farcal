(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7695],
  {
    57449: function (t) {
      var e;
      (e = function () {
        return function (t, e) {
          var r = e.prototype,
            i = r.format;
          r.format = function (t) {
            var e = this,
              r = this.$locale();
            if (!this.isValid()) return i.bind(this)(t);
            var o = this.$utils(),
              a = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (t) {
                  switch (t) {
                    case "Q":
                      return Math.ceil((e.$M + 1) / 3);
                    case "Do":
                      return r.ordinal(e.$D);
                    case "gggg":
                      return e.weekYear();
                    case "GGGG":
                      return e.isoWeekYear();
                    case "wo":
                      return r.ordinal(e.week(), "W");
                    case "w":
                    case "ww":
                      return o.s(e.week(), "w" === t ? 1 : 2, "0");
                    case "W":
                    case "WW":
                      return o.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
                    case "k":
                    case "kk":
                      return o.s(
                        String(0 === e.$H ? 24 : e.$H),
                        "k" === t ? 1 : 2,
                        "0"
                      );
                    case "X":
                      return Math.floor(e.$d.getTime() / 1e3);
                    case "x":
                      return e.$d.getTime();
                    case "z":
                      return "[" + e.offsetName() + "]";
                    case "zzz":
                      return "[" + e.offsetName("long") + "]";
                    default:
                      return t;
                  }
                }
              );
            return i.bind(this)(a);
          };
        };
      }),
        (t.exports = e());
    },
    67338: function (t) {
      var e;
      (e = function () {
        "use strict";
        var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
          e = {};
        return function (r, i, o) {
          var a,
            u = function (t, r, i) {
              void 0 === i && (i = {});
              var o,
                a,
                u,
                n,
                s = new Date(t);
              return (void 0 === (o = i) && (o = {}),
              (n = e[(u = r + "|" + (a = o.timeZoneName || "short"))]) ||
                ((n = new Intl.DateTimeFormat("en-US", {
                  hour12: !1,
                  timeZone: r,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: a,
                })),
                (e[u] = n)),
              n).formatToParts(s);
            },
            n = function (e, r) {
              for (var i = u(e, r), a = [], n = 0; n < i.length; n += 1) {
                var s = i[n],
                  h = s.type,
                  l = s.value,
                  g = t[h];
                g >= 0 && (a[g] = parseInt(l, 10));
              }
              var c = a[3],
                m =
                  a[0] +
                  "-" +
                  a[1] +
                  "-" +
                  a[2] +
                  " " +
                  (24 === c ? 0 : c) +
                  ":" +
                  a[4] +
                  ":" +
                  a[5] +
                  ":000",
                p = +e;
              return (o.utc(m).valueOf() - (p -= p % 1e3)) / 6e4;
            },
            s = i.prototype;
          (s.tz = function (t, e) {
            void 0 === t && (t = a);
            var r,
              i = this.utcOffset(),
              u = this.toDate(),
              n = u.toLocaleString("en-US", { timeZone: t }),
              s = Math.round((u - new Date(n)) / 1e3 / 60),
              h = -(15 * Math.round(u.getTimezoneOffset() / 15)) - s;
            if (Number(h)) {
              if (
                ((r = o(n, { locale: this.$L })
                  .$set("millisecond", this.$ms)
                  .utcOffset(h, !0)),
                e)
              ) {
                var l = r.utcOffset();
                r = r.add(i - l, "minute");
              }
            } else r = this.utcOffset(0, e);
            return (r.$x.$timezone = t), r;
          }),
            (s.offsetName = function (t) {
              var e = this.$x.$timezone || o.tz.guess(),
                r = u(this.valueOf(), e, { timeZoneName: t }).find(function (
                  t
                ) {
                  return "timezonename" === t.type.toLowerCase();
                });
              return r && r.value;
            });
          var h = s.startOf;
          (s.startOf = function (t, e) {
            if (!this.$x || !this.$x.$timezone) return h.call(this, t, e);
            var r = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
              locale: this.$L,
            });
            return h.call(r, t, e).tz(this.$x.$timezone, !0);
          }),
            (o.tz = function (t, e, r) {
              var i = r && e,
                u = r || e || a,
                s = n(+o(), u);
              if ("string" != typeof t) return o(t).tz(u);
              var h = (function (t, e, r) {
                  var i = t - 60 * e * 1e3,
                    o = n(i, r);
                  if (e === o) return [i, e];
                  var a = n((i -= 60 * (o - e) * 1e3), r);
                  return o === a
                    ? [i, o]
                    : [t - 60 * Math.min(o, a) * 1e3, Math.max(o, a)];
                })(o.utc(t, i).valueOf(), s, u),
                l = h[0],
                g = h[1],
                c = o(l).utcOffset(g);
              return (c.$x.$timezone = u), c;
            }),
            (o.tz.guess = function () {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
            }),
            (o.tz.setDefault = function (t) {
              a = t;
            });
        };
      }),
        (t.exports = e());
    },
    10264: function (t) {
      var e;
      (e = function () {
        "use strict";
        var t = "minute",
          e = /[+-]\d\d(?::?\d\d)?/g,
          r = /([+-]|\d\d)/g;
        return function (i, o, a) {
          var u = o.prototype;
          (a.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new o(e);
          }),
            (u.utc = function (e) {
              var r = a(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? r.add(this.utcOffset(), t) : r;
            }),
            (u.local = function () {
              return a(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var n = u.parse;
          u.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              n.call(this, t);
          };
          var s = u.init;
          u.init = function () {
            if (this.$u) {
              var t = this.$d;
              (this.$y = t.getUTCFullYear()),
                (this.$M = t.getUTCMonth()),
                (this.$D = t.getUTCDate()),
                (this.$W = t.getUTCDay()),
                (this.$H = t.getUTCHours()),
                (this.$m = t.getUTCMinutes()),
                (this.$s = t.getUTCSeconds()),
                (this.$ms = t.getUTCMilliseconds());
            } else s.call(this);
          };
          var h = u.utcOffset;
          u.utcOffset = function (i, o) {
            var a = this.$utils().u;
            if (a(i))
              return this.$u
                ? 0
                : a(this.$offset)
                ? h.call(this)
                : this.$offset;
            if (
              "string" == typeof i &&
              null ===
                (i = (function (t) {
                  void 0 === t && (t = "");
                  var i = t.match(e);
                  if (!i) return null;
                  var o = ("" + i[0]).match(r) || ["-", 0, 0],
                    a = o[0],
                    u = 60 * +o[1] + +o[2];
                  return 0 === u ? 0 : "+" === a ? u : -u;
                })(i))
            )
              return this;
            var u = 16 >= Math.abs(i) ? 60 * i : i,
              n = this;
            if (o) return (n.$offset = u), (n.$u = 0 === i), n;
            if (0 !== i) {
              var s = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((n = this.local().add(u + s, t)).$offset = u),
                (n.$x.$localOffset = s);
            } else n = this.utc();
            return n;
          };
          var l = u.format;
          (u.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return l.call(this, e);
          }),
            (u.valueOf = function () {
              var t = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * t;
            }),
            (u.isUTC = function () {
              return !!this.$u;
            }),
            (u.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (u.toString = function () {
              return this.toDate().toUTCString();
            });
          var g = u.toDate;
          u.toDate = function (t) {
            return "s" === t && this.$offset
              ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : g.call(this);
          };
          var c = u.diff;
          u.diff = function (t, e, r) {
            if (t && this.$u === t.$u) return c.call(this, t, e, r);
            var i = this.local(),
              o = a(t).local();
            return c.call(i, o, e, r);
          };
        };
      }),
        (t.exports = e());
    },
    77562: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/events",
        function () {
          return r(58e3);
        },
      ]);
    },
    58e3: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return T;
          },
          default: function () {
            return A;
          },
        });
      var i = r(52322),
        o = r(2784),
        a = r(5632),
        u = r(55351),
        n = r(44382),
        s = r(27478),
        h = r(61812),
        l = r(39097),
        g = r.n(l),
        c = r(28879),
        m = r.n(c),
        p = r(10264),
        d = r.n(p),
        _ = r(67338),
        f = r.n(_),
        b = r(57449),
        v = r.n(b),
        x = r(83940);
      m().extend(d()), m().extend(f()), m().extend(v());
      let w = (t) => {
        let { event: e } = t;
        return (0, i.jsxs)("p", {
          className:
            "text-foreground-lighter lg:text-right flex-grow lg:w-full text-nowrap group-hover:text-foreground-light min-w-40 inline-flex items-center lg:justify-end gap-1.5 flex-1 w-full",
          children: [
            m()(e.date).tz(e.timezone).format("DD MMM YYYY"),
            (0, i.jsx)("span", { className: "min-w-px h-[16px] bg-muted" }),
            (0, i.jsx)("span", {
              className: "",
              children: m()(e.date).tz(e.timezone).format("hA"),
            }),
            (0, i.jsx)("span", { className: "min-w-px h-[16px] bg-muted" }),
            m()(e.date).tz(e.timezone).format("z"),
          ],
        });
      };
      var y = (t) => {
          var e, r, o, a;
          let { event: u } = t,
            n = (null == u ? void 0 : u.author) ? u.author.split(",") : [],
            s = [];
          if (n)
            for (let t = 0; t < n.length; t++)
              s.push(h.find((e) => e.author_id === n[t]));
          return (0, i.jsxs)(g(), {
            href: u.disable_page_build
              ? null !==
                  (o =
                    null === (e = u.link) || void 0 === e ? void 0 : e.href) &&
                void 0 !== o
                ? o
                : ""
              : u.path,
            target: u.disable_page_build
              ? null !==
                  (a =
                    null === (r = u.link) || void 0 === r
                      ? void 0
                      : r.target) && void 0 !== a
                ? a
                : ""
              : "_self",
            className:
              "group flex flex-col lg:grid lg:grid-cols-10 2xl:grid-cols-12 w-full py-2 sm:py-4 h-full border-b",
            children: [
              (0, i.jsx)("div", {
                className: "flex w-full lg:col-span-7 2xl:col-span-9",
                children: (0, i.jsx)("h3", {
                  className: "text-foreground text-lg group-hover:underline",
                  children: u.title,
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "lg:col-span-3 xl:col-span-3 flex justify-between items-center grid-cols-2 gap-2 text-sm",
                children: [
                  u.categories &&
                    (0, i.jsx)("div", {
                      className:
                        "hidden xl:flex gap-2 text-foreground-lighter group-hover:text-foreground-light",
                      children: u.categories.map(
                        (t, e) =>
                          0 === e &&
                          (0, i.jsx)(
                            x.C,
                            {
                              className:
                                "group-hover:border-foreground-muted capitalize",
                              children: t,
                            },
                            t
                          )
                      ),
                    }),
                  u.date && (0, i.jsx)(w, { event: u }),
                ],
              }),
            ],
          });
        },
        j = r(30175),
        k = r(45781),
        $ = r(5126),
        E = r(74600),
        S = r.n(E),
        N = r(82876),
        z = r(53068),
        D = r(93501),
        C = r(29982),
        G = r(45576),
        M = function (t) {
          let { allEvents: e, setEvents: r, categories: u } = t,
            [s, h] = (0, o.useState)("all"),
            [l, g] = (0, o.useState)(""),
            [c, m] = (0, o.useState)(!1),
            p = (0, a.useRouter)(),
            d = (0, N.useSearchParams)(),
            _ = null == d ? void 0 : d.get("q"),
            f = null == d ? void 0 : d.get("category"),
            b = (0, j.Gc)(1023),
            v = (0, j.Gc)(1535);
          (0, o.useEffect)(() => {
            _ || w();
          }, [s]),
            (0, o.useEffect)(() => {
              _ && y(_);
            }, [_]);
          let x = () => {
              l ||
                "all" === s ||
                ((p.query.category = s),
                p.replace(p, void 0, { shallow: !0, scroll: !1 }));
            },
            w = () => {
              x(),
                r(
                  "all" === s
                    ? e
                    : e.filter((t) => {
                        var e;
                        return null === (e = t.categories) || void 0 === e
                          ? void 0
                          : e.includes(s);
                      })
                );
            };
          (0, z.Z)("Escape", () => y("")),
            (0, o.useEffect)(() => {
              m(!b);
            }, [b]),
            (0, o.useEffect)(() => {
              p.isReady && _ && g(_), p.isReady && f && "all" !== f && h(f);
            }, [f, p.isReady, _]);
          let y = (t) => {
              g(t),
                (null == d ? void 0 : d.has("q")) &&
                  p.replace("/events", void 0, { shallow: !0, scroll: !1 }),
                p.replace("/events?q=".concat(t), void 0, {
                  shallow: !0,
                  scroll: !1,
                }),
                t.length < 1 &&
                  p.replace("/events", void 0, { shallow: !0, scroll: !1 }),
                r(
                  e.filter((e) => {
                    var r, i, o;
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
                      (null === (o = e.author) || void 0 === o
                        ? void 0
                        : o.includes(t.toLowerCase()))
                    );
                  })
                );
            },
            E = (t) => {
              l && w(),
                l && g(""),
                h(t),
                "all" === t
                  ? p.replace("/events", void 0, { shallow: !0, scroll: !1 })
                  : p.replace("/events?category=".concat(t), void 0, {
                      shallow: !0,
                      scroll: !1,
                    });
            };
          return (0, i.jsx)("div", {
            className: "flex flex-row items-center justify-between gap-2",
            children: (0, i.jsxs)(k.M, {
              mode: "wait",
              children: [
                !c &&
                  (0, i.jsx)($.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: { duration: 0.05 } },
                    className: "flex lg:hidden",
                    children: (0, i.jsxs)(D.h_, {
                      children: [
                        (0, i.jsx)(D.$F, {
                          asChild: !0,
                          children: (0, i.jsx)(C.z, {
                            type: "outline",
                            size: "medium",
                            iconRight: (0, i.jsx)(G.Z, {}),
                            className:
                              "w-full min-w-[200px] flex [&_span]:flex [&_span]:items-center [&_span]:gap-2 justify-between items-center py-2",
                            children: f
                              ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    S()(
                                      null == f
                                        ? void 0
                                        : f.replaceAll("-", " ")
                                    ),
                                    (0, i.jsx)("span", {
                                      className:
                                        "text-foreground-lighter text-xs",
                                      children: u[f],
                                    }),
                                  ],
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    "All Events",
                                    " ",
                                    (0, i.jsx)("span", {
                                      className:
                                        "text-foreground-lighter text-xs",
                                      children: u.all,
                                    }),
                                  ],
                                }),
                          }),
                        }),
                        (0, i.jsx)(D.AW, {
                          side: "bottom",
                          align: "start",
                          children: Object.entries(u).map((t) => {
                            let [e, r] = t;
                            return (0, i.jsxs)(
                              D.Xi,
                              {
                                onClick: () => E(e),
                                className: (0, n.cn)(
                                  "flex gap-0.5 items-center justify-between",
                                  ("all" !== e || f) && e !== f
                                    ? ""
                                    : "text-brand-600"
                                ),
                                children: [
                                  "all" === e
                                    ? "All Posts"
                                    : S()(e.replaceAll("-", " ")),
                                  " ",
                                  (0, i.jsx)("span", {
                                    className:
                                      "text-foreground-lighter text-xs w-3",
                                    children: r,
                                  }),
                                ],
                              },
                              "item-".concat(e)
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                (0, i.jsx)("div", {
                  className:
                    "hidden lg:flex flex-wrap items-center flex-grow gap-2",
                  children: Object.entries(u).map((t) => {
                    let [e, r] = t;
                    return (0, i.jsxs)(
                      C.z,
                      {
                        type:
                          "all" !== e || l || f
                            ? e === f
                              ? "default"
                              : "outline"
                            : "default",
                        onClick: () => E(e),
                        size: v ? "tiny" : "small",
                        className: "rounded-full",
                        iconRight: (0, i.jsx)("span", {
                          className:
                            "text-foreground-lighter text-xs flex items-center h-[16px] self-center",
                          children: r,
                        }),
                        children: [
                          "all" === e ? "All" : S()(e.replaceAll("-", " ")),
                          " ",
                        ],
                      },
                      e
                    );
                  }),
                }),
              ],
            }),
          });
        },
        O = r(37637),
        T = !0,
        A = function (t) {
          let { events: e, onDemandEvents: r, categories: h } = t,
            [l, g] = (0, o.useState)(e),
            c = (0, a.useRouter)(),
            m = "Supabase Events: webinars, talks, hackathons, and meetups",
            p =
              "Join Supabase and the open-source community at the upcoming events.";
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(u.PB, {
                title: m,
                description: p,
                openGraph: {
                  title: m,
                  description: p,
                  url: "https://supabase.com/".concat(c.pathname),
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
              (0, i.jsxs)(s.default, {
                className: "min-h-[80dvh]",
                children: [
                  (0, i.jsxs)(O.default, {
                    className: "!py-8 lg:!py-16",
                    children: [
                      (0, i.jsxs)("h1", {
                        className: "h1",
                        children: [
                          (0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Supabase",
                          }),
                          " Events",
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className: "text-foreground-light",
                        children: "Join us at the following upcoming events",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(O.default, {
                    className: "!py-0",
                    children: [
                      (0, i.jsx)(M, {
                        allEvents: e,
                        events: l,
                        setEvents: g,
                        categories: h,
                      }),
                      (0, i.jsx)("ol", {
                        className: (0, n.cn)(
                          "grid -mx-2 sm:-mx-4 py-6 lg:py-6 grid-cols-1",
                          !(null == l ? void 0 : l.length) && "mx-0 sm:mx-0"
                        ),
                        children: (null == l ? void 0 : l.length)
                          ? null == l
                            ? void 0
                            : l
                                .sort(
                                  (t, e) =>
                                    new Date(t.date).getTime() -
                                    new Date(e.date).getTime()
                                )
                                .map((t, e) =>
                                  (0, i.jsx)(
                                    "div",
                                    {
                                      className:
                                        "col-span-12 px-2 sm:px-4 [&_a]:last:border-none opacity-0 !scale-100 animate-fade-in",
                                      children: (0, i.jsx)(y, { event: t }),
                                    },
                                    "".concat(t.title, "-upcoming-").concat(e)
                                  )
                                )
                          : (0, i.jsx)("p", {
                              className:
                                "text-sm py-2 sm:py-4 text-lighter col-span-full italic opacity-0 !scale-100 animate-fade-in",
                              children: "No results found",
                            }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(O.default, {
                    children: [
                      (0, i.jsxs)("div", {
                        className: "pt-8 border-t",
                        children: [
                          (0, i.jsx)("h2", {
                            className: "h3",
                            children: "On Demand",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-foreground-light",
                            children: "Replay selected events on your schedule",
                          }),
                        ],
                      }),
                      (0, i.jsx)("ol", {
                        className: (0, n.cn)(
                          "grid -mx-2 sm:-mx-4 py-6 lg:py-6",
                          "grid-cols-12 lg:gap-4",
                          !(null == r ? void 0 : r.length) && "mx-0 sm:mx-0"
                        ),
                        children: (null == r ? void 0 : r.length)
                          ? null == r
                            ? void 0
                            : r.map((t, e) =>
                                (0, i.jsx)(
                                  "div",
                                  {
                                    className:
                                      "col-span-12 px-2 sm:px-4 [&_a]:last:border-none opacity-0 !scale-100 animate-fade-in",
                                    children: (0, i.jsx)(y, { event: t }),
                                  },
                                  "".concat(t.title, "-upcoming-").concat(e)
                                )
                              )
                          : (0, i.jsx)("p", {
                              className:
                                "text-sm py-2 sm:py-4 text-lighter col-span-full italic opacity-0 !scale-100 animate-fade-in",
                              children: "No results found",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
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
        return t((t.s = 77562));
      }
    ),
      (_N_E = t.O());
  },
]);
