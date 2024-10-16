(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7942],
  {
    57449: function (e) {
      var t;
      (t = function () {
        return function (e, t) {
          var i = t.prototype,
            a = i.format;
          i.format = function (e) {
            var t = this,
              i = this.$locale();
            if (!this.isValid()) return a.bind(this)(e);
            var n = this.$utils(),
              r = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (e) {
                  switch (e) {
                    case "Q":
                      return Math.ceil((t.$M + 1) / 3);
                    case "Do":
                      return i.ordinal(t.$D);
                    case "gggg":
                      return t.weekYear();
                    case "GGGG":
                      return t.isoWeekYear();
                    case "wo":
                      return i.ordinal(t.week(), "W");
                    case "w":
                    case "ww":
                      return n.s(t.week(), "w" === e ? 1 : 2, "0");
                    case "W":
                    case "WW":
                      return n.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
                    case "k":
                    case "kk":
                      return n.s(
                        String(0 === t.$H ? 24 : t.$H),
                        "k" === e ? 1 : 2,
                        "0"
                      );
                    case "X":
                      return Math.floor(t.$d.getTime() / 1e3);
                    case "x":
                      return t.$d.getTime();
                    case "z":
                      return "[" + t.offsetName() + "]";
                    case "zzz":
                      return "[" + t.offsetName("long") + "]";
                    default:
                      return e;
                  }
                }
              );
            return a.bind(this)(r);
          };
        };
      }),
        (e.exports = t());
    },
    67338: function (e) {
      var t;
      (t = function () {
        "use strict";
        var e = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
          t = {};
        return function (i, a, n) {
          var r,
            l = function (e, i, a) {
              void 0 === a && (a = {});
              var n,
                r,
                l,
                o,
                s = new Date(e);
              return (void 0 === (n = a) && (n = {}),
              (o = t[(l = i + "|" + (r = n.timeZoneName || "short"))]) ||
                ((o = new Intl.DateTimeFormat("en-US", {
                  hour12: !1,
                  timeZone: i,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: r,
                })),
                (t[l] = o)),
              o).formatToParts(s);
            },
            o = function (t, i) {
              for (var a = l(t, i), r = [], o = 0; o < a.length; o += 1) {
                var s = a[o],
                  c = s.type,
                  u = s.value,
                  d = e[c];
                d >= 0 && (r[d] = parseInt(u, 10));
              }
              var h = r[3],
                f =
                  r[0] +
                  "-" +
                  r[1] +
                  "-" +
                  r[2] +
                  " " +
                  (24 === h ? 0 : h) +
                  ":" +
                  r[4] +
                  ":" +
                  r[5] +
                  ":000",
                m = +t;
              return (n.utc(f).valueOf() - (m -= m % 1e3)) / 6e4;
            },
            s = a.prototype;
          (s.tz = function (e, t) {
            void 0 === e && (e = r);
            var i,
              a = this.utcOffset(),
              l = this.toDate(),
              o = l.toLocaleString("en-US", { timeZone: e }),
              s = Math.round((l - new Date(o)) / 1e3 / 60),
              c = -(15 * Math.round(l.getTimezoneOffset() / 15)) - s;
            if (Number(c)) {
              if (
                ((i = n(o, { locale: this.$L })
                  .$set("millisecond", this.$ms)
                  .utcOffset(c, !0)),
                t)
              ) {
                var u = i.utcOffset();
                i = i.add(a - u, "minute");
              }
            } else i = this.utcOffset(0, t);
            return (i.$x.$timezone = e), i;
          }),
            (s.offsetName = function (e) {
              var t = this.$x.$timezone || n.tz.guess(),
                i = l(this.valueOf(), t, { timeZoneName: e }).find(function (
                  e
                ) {
                  return "timezonename" === e.type.toLowerCase();
                });
              return i && i.value;
            });
          var c = s.startOf;
          (s.startOf = function (e, t) {
            if (!this.$x || !this.$x.$timezone) return c.call(this, e, t);
            var i = n(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
              locale: this.$L,
            });
            return c.call(i, e, t).tz(this.$x.$timezone, !0);
          }),
            (n.tz = function (e, t, i) {
              var a = i && t,
                l = i || t || r,
                s = o(+n(), l);
              if ("string" != typeof e) return n(e).tz(l);
              var c = (function (e, t, i) {
                  var a = e - 60 * t * 1e3,
                    n = o(a, i);
                  if (t === n) return [a, t];
                  var r = o((a -= 60 * (n - t) * 1e3), i);
                  return n === r
                    ? [a, n]
                    : [e - 60 * Math.min(n, r) * 1e3, Math.max(n, r)];
                })(n.utc(e, a).valueOf(), s, l),
                u = c[0],
                d = c[1],
                h = n(u).utcOffset(d);
              return (h.$x.$timezone = l), h;
            }),
            (n.tz.guess = function () {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
            }),
            (n.tz.setDefault = function (e) {
              r = e;
            });
        };
      }),
        (e.exports = t());
    },
    10264: function (e) {
      var t;
      (t = function () {
        "use strict";
        var e = "minute",
          t = /[+-]\d\d(?::?\d\d)?/g,
          i = /([+-]|\d\d)/g;
        return function (a, n, r) {
          var l = n.prototype;
          (r.utc = function (e) {
            var t = { date: e, utc: !0, args: arguments };
            return new n(t);
          }),
            (l.utc = function (t) {
              var i = r(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? i.add(this.utcOffset(), e) : i;
            }),
            (l.local = function () {
              return r(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var o = l.parse;
          l.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              o.call(this, e);
          };
          var s = l.init;
          l.init = function () {
            if (this.$u) {
              var e = this.$d;
              (this.$y = e.getUTCFullYear()),
                (this.$M = e.getUTCMonth()),
                (this.$D = e.getUTCDate()),
                (this.$W = e.getUTCDay()),
                (this.$H = e.getUTCHours()),
                (this.$m = e.getUTCMinutes()),
                (this.$s = e.getUTCSeconds()),
                (this.$ms = e.getUTCMilliseconds());
            } else s.call(this);
          };
          var c = l.utcOffset;
          l.utcOffset = function (a, n) {
            var r = this.$utils().u;
            if (r(a))
              return this.$u
                ? 0
                : r(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof a &&
              null ===
                (a = (function (e) {
                  void 0 === e && (e = "");
                  var a = e.match(t);
                  if (!a) return null;
                  var n = ("" + a[0]).match(i) || ["-", 0, 0],
                    r = n[0],
                    l = 60 * +n[1] + +n[2];
                  return 0 === l ? 0 : "+" === r ? l : -l;
                })(a))
            )
              return this;
            var l = 16 >= Math.abs(a) ? 60 * a : a,
              o = this;
            if (n) return (o.$offset = l), (o.$u = 0 === a), o;
            if (0 !== a) {
              var s = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((o = this.local().add(l + s, e)).$offset = l),
                (o.$x.$localOffset = s);
            } else o = this.utc();
            return o;
          };
          var u = l.format;
          (l.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, t);
          }),
            (l.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (l.isUTC = function () {
              return !!this.$u;
            }),
            (l.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (l.toString = function () {
              return this.toDate().toUTCString();
            });
          var d = l.toDate;
          l.toDate = function (e) {
            return "s" === e && this.$offset
              ? r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : d.call(this);
          };
          var h = l.diff;
          l.diff = function (e, t, i) {
            if (e && this.$u === e.$u) return h.call(this, e, t, i);
            var a = this.local(),
              n = r(e).local();
            return h.call(a, n, t, i);
          };
        };
      }),
        (e.exports = t());
    },
    82108: function (e, t, i) {
      var a = i(66188),
        n = i(23779);
      e.exports = function (e) {
        return n(a(e).toLowerCase());
      };
    },
    70599: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/events/[slug]",
        function () {
          return i(3238);
        },
      ]);
    },
    53839: function (e, t) {
      "use strict";
      t.Z = {
        www_hp_hero_startProject: {
          action: "click",
          category: "www_hp_hero",
          label: "start_project",
        },
        www_hp_hero_documentation: {
          action: "click",
          category: "www_hp_hero",
          label: "documentation",
        },
        www_hp_subhero_products_database: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_database",
        },
        www_hp_subhero_products_auth: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_auth",
        },
        www_hp_subhero_products_storage: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_storage",
        },
        www_hp_subhero_products_edgeFunctions: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_functions",
        },
        www_hp_subhero_products_realtime: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_realtime",
        },
        www_hp_subhero_products_vector: {
          action: "click",
          category: "www_hp_subhero",
          label: "products_vector",
        },
        www_pricing_hero_plan_free: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_free",
        },
        www_pricing_hero_plan_pro: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_pro",
        },
        www_pricing_hero_plan_team: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_team",
        },
        www_pricing_hero_plan_enterprise: {
          action: "click",
          category: "www_pricing_hero",
          label: "plan_enterprise",
        },
        www_pricing_comparison_free: {
          action: "click",
          category: "www_pricing_comparison",
          label: "free",
        },
        www_pricing_comparison_pro: {
          action: "click",
          category: "www_pricing_comparison",
          label: "pro",
        },
        www_pricing_comparison_team: {
          action: "click",
          category: "www_pricing_comparison",
          label: "team",
        },
        www_pricing_comparison_enterprise: {
          action: "click",
          category: "www_pricing_comparison",
          label: "enterprise",
        },
        www_event_main_cta: {
          action: "click",
          category: "www_event_page",
          label: "main_cta",
        },
      };
    },
    61172: function (e, t, i) {
      "use strict";
      var a = i(30175),
        n = i(23642),
        r = i(31930);
      let l = () => {};
      t.Z = {
        sendEvent: (e, t, i) => {
          var o, s;
          let c = localStorage.getItem(a.LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT);
          if ((!n.XK && !n.rv) || "true" !== c) return l;
          let { category: u, action: d, label: h, value: f } = e,
            m =
              "undefined" != typeof document
                ? null === (o = document) || void 0 === o
                  ? void 0
                  : o.title
                : "",
            p =
              "undefined" != typeof document
                ? null === (s = document) || void 0 === s
                  ? void 0
                  : s.referrer
                : "",
            {
              page_url: g,
              search: v,
              language: w,
              viewport_height: _,
              viewport_width: x,
            } = t;
          return (0, r.v)(
            "".concat(n.T5, "/telemetry/event"),
            {
              page_url: g,
              action: d,
              page_title: m,
              pathname: i.pathname,
              ph: {
                search: v,
                referrer: p,
                language: w,
                viewport_height: _,
                viewport_width: x,
                user_agent: navigator.userAgent,
              },
              custom_properties: { category: u, label: h, value: f },
            },
            { headers: { Version: "2" }, credentials: "include" }
          );
        },
      };
    },
    3238: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return G;
          },
          default: function () {
            return W;
          },
        });
      var a = i(52322),
        n = i(2784),
        r = i(39097),
        l = i.n(r),
        o = i(96577),
        s = i.n(o),
        c = i(5632),
        u = i(69471),
        d = i(55351),
        h = i(28879),
        f = i.n(h),
        m = i(51430);
      let p = n.forwardRef(function (e, t) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t,
              },
              e
            ),
            n.createElement("path", {
              fillRule: "evenodd",
              d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
              clipRule: "evenodd",
            })
          );
        }),
        g = n.forwardRef(function (e, t) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t,
              },
              e
            ),
            n.createElement("path", {
              fillRule: "evenodd",
              d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
              clipRule: "evenodd",
            })
          );
        }),
        v = n.forwardRef(function (e, t) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t,
              },
              e
            ),
            n.createElement("path", {
              fillRule: "evenodd",
              d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
              clipRule: "evenodd",
            })
          );
        });
      var w = i(82108),
        _ = i.n(w),
        x = i(28079),
        b = i(51929),
        j = i(61812),
        y = i(63511),
        $ = i(33880),
        N = i(30175),
        k = i(61172),
        z = i(53839),
        D = i(10264),
        M = i.n(D),
        Y = i(67338),
        O = i.n(Y),
        T = i(57449),
        S = i.n(T),
        C = i(29982),
        E = i(20194),
        R = i(27478),
        Z = i(37637),
        H = i(95421),
        L = i(30970),
        U = i(68177),
        V = i(93542);
      f().extend(M()), f().extend(O()), f().extend(S());
      var G = !0,
        W = (e) => {
          var t,
            i,
            n,
            r,
            o,
            h,
            w,
            D,
            M,
            Y,
            O,
            T,
            S,
            G,
            W,
            A,
            I,
            P,
            X,
            B,
            F,
            K,
            Q,
            q,
            J,
            ee,
            et,
            ei,
            ea;
          let { event: en } = e,
            er = en.content,
            el =
              null === (t = en.speakers) || void 0 === t
                ? void 0
                : t.split(","),
            eo =
              null == el
                ? void 0
                : el.map((e) => j.find((t) => t.author_id === e)).filter(y.BX),
            es = null === (i = en.end_date) || void 0 === i ? void 0 : i.length,
            ec =
              en.onDemand ||
              (es
                ? Date.parse(en.end_date) > Date.now()
                : Date.parse(en.date) > Date.now()),
            eu = en.og_image
              ? en.og_image
              : encodeURI(
                  ""
                    .concat(
                      "https://obuldanrptloktxcffvn.supabase.co",
                      "/functions/v1/og-images?site=events&eventType="
                    )
                    .concat(en.type, "&title=")
                    .concat(
                      null !== (K = en.meta_title) && void 0 !== K
                        ? K
                        : en.title,
                      "&description="
                    )
                    .concat(
                      null !== (Q = en.meta_description) && void 0 !== Q
                        ? Q
                        : en.description,
                      "&date="
                    )
                    .concat(
                      f()(en.date).tz(en.timezone).format("DD MMM YYYY"),
                      "&duration="
                    )
                    .concat(en.duration)
                ),
            ed = {
              title: ""
                .concat(
                  null !== (q = en.meta_title) && void 0 !== q ? q : en.title,
                  " | "
                )
                .concat(
                  f()(en.date)
                    .tz(en.timezone)
                    .format(es ? "DD" : "DD MMM YYYY")
                )
                .concat(
                  es
                    ? f()(en.end_date).tz(en.timezone).format(" - DD MMM")
                    : "",
                  " | "
                )
                .concat(_()(en.type)),
              description:
                null !== (J = en.meta_description) && void 0 !== J
                  ? J
                  : en.description,
              url: "https://supabase.com/events/".concat(en.slug),
              image: eu,
            },
            eh = {
              conference: (e) => (0, a.jsx)(m.Z, { ...e }),
              hackathon: (e) => (0, a.jsx)(p, { ...e }),
              launch_week: (e) => (0, a.jsx)(m.Z, { ...e }),
              meetup: (e) => (0, a.jsx)(g, { ...e }),
              talk: (e) => (0, a.jsx)(v, { ...e }),
              webinar: (e) => (0, a.jsx)(m.Z, { ...e }),
            }[en.type],
            ef = (0, c.useRouter)(),
            em = (0, N.Mk)(),
            ep = async (e) => {
              await k.Z.sendEvent(e, em, ef);
            };
          return (
            N.jU ? location.origin : V.env.VERCEL_URL && V.env.VERCEL_URL,
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(d.PB, {
                  title: ed.title,
                  description: ed.description,
                  openGraph: {
                    title: ed.title,
                    description: ed.description,
                    url: ed.url,
                    type: "article",
                    images: [
                      {
                        url: ed.image,
                        alt: "".concat(en.title, " thumbnail"),
                        width: 1200,
                        height: 627,
                      },
                    ],
                    videos: en.video
                      ? [
                          {
                            url: en.video,
                            type: "application/x-shockwave-flash",
                            width: 640,
                            height: 385,
                          },
                        ]
                      : void 0,
                    article: {
                      publishedTime: en.date,
                      tags:
                        null === (n = en.tags) || void 0 === n
                          ? void 0
                          : n.map((e) => e),
                    },
                  },
                }),
                (0, a.jsxs)(R.default, {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "flex flex-col w-full bg-alternative border-b border-muted",
                      children: (0, a.jsx)(Z.default, {
                        className: "!py-2 flex items-start",
                        children: (0, a.jsxs)(l(), {
                          href: "/events",
                          className:
                            "text-foreground-lighter hover:text-foreground flex !m-0 !p-0 !leading-3 gap-1 cursor-pointer items-center text-sm transition",
                          children: [
                            (0, a.jsx)(x.Z, { className: "w-4 h-4" }),
                            "All Events",
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col w-full",
                      children: [
                        (0, a.jsxs)("header", {
                          className:
                            "relative bg-alternative w-full overflow-hidden",
                          children: [
                            (0, a.jsx)(s(), {
                              src: "/images/events/events-bg-dark.svg",
                              alt: "",
                              fill: !0,
                              sizes: "100%",
                              className:
                                "not-sr-only hidden dark:block w-full h-full absolute inset-0 object-cover object-bottom",
                            }),
                            (0, a.jsx)(s(), {
                              src: "/images/events/events-bg-light.svg",
                              alt: "",
                              fill: !0,
                              sizes: "100%",
                              className:
                                "not-sr-only block dark:hidden w-full h-full absolute inset-0 object-cover object-bottom",
                            }),
                            (0, a.jsxs)(Z.default, {
                              className:
                                " relative z-10 lg:min-h-[400px] h-full grid grid-cols-1 xl:grid-cols-2 gap-8 text-foreground-light !py-10 md:!py-16 ",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "h-full flex flex-col justify-between",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col gap-2 md:gap-3 items-start mb-8",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-row text-sm items-center flex-wrap",
                                          children: [
                                            (0, a.jsx)(eh, {
                                              className:
                                                "hidden sm:inline-block w-4 h-4 text-brand mr-2",
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "uppercase text-brand font-mono",
                                              children: en.type,
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "mx-3 px-3 border-x",
                                              children: f()(en.date)
                                                .tz(en.timezone)
                                                .format(
                                                  "DD MMM YYYY [at] hA z"
                                                ),
                                            }),
                                            (0, a.jsxs)("span", {
                                              className: "",
                                              children: [
                                                "Duration: ",
                                                en.duration,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h1", {
                                          className:
                                            "text-foreground text-3xl md:text-4xl xl:pr-9",
                                          children: en.title,
                                        }),
                                        (0, a.jsx)("p", {
                                          children: en.subtitle,
                                        }),
                                        (0, a.jsx)(C.z, {
                                          type: "primary",
                                          size: "medium",
                                          className: "mt-2",
                                          disabled: !ec,
                                          asChild: !0,
                                          children: (0, a.jsx)(l(), {
                                            href:
                                              null !==
                                                (ee =
                                                  null === (r = en.main_cta) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.url) && void 0 !== ee
                                                ? ee
                                                : "#",
                                            target: (
                                              null === (o = en.main_cta) ||
                                              void 0 === o
                                                ? void 0
                                                : o.target
                                            )
                                              ? null === (h = en.main_cta) ||
                                                void 0 === h
                                                ? void 0
                                                : h.target
                                              : void 0,
                                            onClick: () => ep(z.Z.www_event),
                                            children: ec
                                              ? (
                                                  null === (w = en.main_cta) ||
                                                  void 0 === w
                                                    ? void 0
                                                    : w.label
                                                )
                                                ? null === (D = en.main_cta) ||
                                                  void 0 === D
                                                  ? void 0
                                                  : D.label
                                                : "Register to this event"
                                              : (
                                                  null === (M = en.main_cta) ||
                                                  void 0 === M
                                                    ? void 0
                                                    : M.disabled_label
                                                )
                                              ? null === (Y = en.main_cta) ||
                                                void 0 === Y
                                                ? void 0
                                                : Y.disabled_label
                                              : "Registrations are closed",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-col text-sm",
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "Share on",
                                        }),
                                        (0, a.jsx)(H.Z, {
                                          title: ed.title,
                                          slug: ed.url,
                                          basePath: "",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                !!en.thumb &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "relative w-full aspect-[5/3] lg:aspect-[3/2] overflow-hidden border shadow-lg rounded-lg z-10",
                                    children: (0, a.jsx)(E.Z, {
                                      src: {
                                        dark: "/images/events/" + en.thumb,
                                        light:
                                          "/images/events/" +
                                          (en.thumb_light
                                            ? en.thumb_light
                                            : en.thumb),
                                      },
                                      fill: !0,
                                      sizes: "100%",
                                      quality: 100,
                                      containerClassName:
                                        " h-full [&.next-image--dynamic-fill_img]:!h-full [&.next-image--dynamic-fill_img]:!object-cover ",
                                      alt: "".concat(en.title, " thumbnail"),
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)(Z.default, {
                          className:
                            "grid lg:grid-cols-3 gap-12 !py-10 md:!py-16",
                          children: [
                            en.company &&
                              (0, a.jsxs)("div", {
                                className:
                                  "order-first lg:col-span-full flex items-center gap-4 md:gap-6 lg:mb-4",
                                children: [
                                  (0, a.jsx)("figure", {
                                    className:
                                      "h-6 [&_.next-image--dynamic-fill_img]:!h-full",
                                    children: (0, a.jsx)(E.Z, {
                                      src: { dark: L, light: U },
                                      alt: "Supabase Logo",
                                      width: 160,
                                      height: 30,
                                      sizes: "100%",
                                      className:
                                        "!relative object-contain object-left",
                                      containerClassName:
                                        "h-full object-contain object-left !rounded-none !border-none",
                                      priority: !0,
                                    }),
                                  }),
                                  (0, a.jsx)(b.Z, {
                                    className:
                                      "w-4 h-4 text-foreground-lighter",
                                  }),
                                  (0, a.jsx)(l(), {
                                    href:
                                      null !==
                                        (et =
                                          null === (O = en.company) ||
                                          void 0 === O
                                            ? void 0
                                            : O.website_url) && void 0 !== et
                                        ? et
                                        : "#",
                                    target: "_blank",
                                    className:
                                      "h-5 aspect-[9/1] transition-opacity opacity-100 hover:opacity-90 [&_.next-image--dynamic-fill_img]:!h-full",
                                    children: (0, a.jsx)(E.Z, {
                                      src: {
                                        dark:
                                          null === (T = en.company) ||
                                          void 0 === T
                                            ? void 0
                                            : T.logo,
                                        light:
                                          null === (S = en.company) ||
                                          void 0 === S
                                            ? void 0
                                            : S.logo_light,
                                      },
                                      alt: "".concat(
                                        null === (G = en.company) ||
                                          void 0 === G
                                          ? void 0
                                          : G.name,
                                        " Logo"
                                      ),
                                      width: 160,
                                      height: 30,
                                      sizes: "100%",
                                      className:
                                        "!relative object-contain object-left",
                                      containerClassName:
                                        "h-full object-contain object-left !rounded-none !border-none",
                                      priority: !0,
                                    }),
                                  }),
                                ],
                              }),
                            (0, a.jsxs)("main", {
                              className: "lg:col-span-2",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "prose prose-docs",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "text-foreground-light text-sm font-mono uppercase",
                                      children: "About this event",
                                    }),
                                    (0, a.jsx)(u.R, {
                                      ...er,
                                      components: (0, $.Z)(),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("aside", {
                                  className: "mt-8",
                                  children: (0, a.jsx)(C.z, {
                                    type: "primary",
                                    size: "medium",
                                    className: "mt-2",
                                    disabled: !ec,
                                    asChild: !0,
                                    children: (0, a.jsx)(l(), {
                                      href:
                                        null !==
                                          (ei =
                                            null === (W = en.main_cta) ||
                                            void 0 === W
                                              ? void 0
                                              : W.url) && void 0 !== ei
                                          ? ei
                                          : "#",
                                      "aria-disabled": !ec,
                                      target: (
                                        null === (A = en.main_cta) ||
                                        void 0 === A
                                          ? void 0
                                          : A.target
                                      )
                                        ? null === (I = en.main_cta) ||
                                          void 0 === I
                                          ? void 0
                                          : I.target
                                        : void 0,
                                      children: ec
                                        ? (
                                            null === (P = en.main_cta) ||
                                            void 0 === P
                                              ? void 0
                                              : P.label
                                          )
                                          ? null === (X = en.main_cta) ||
                                            void 0 === X
                                            ? void 0
                                            : X.label
                                          : "Register now"
                                        : (
                                            null === (B = en.main_cta) ||
                                            void 0 === B
                                              ? void 0
                                              : B.disabled_label
                                          )
                                        ? null === (F = en.main_cta) ||
                                          void 0 === F
                                          ? void 0
                                          : F.disabled_label
                                        : "Registrations are closed",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("aside", {
                              className: "order-first lg:order-last",
                              children:
                                eo &&
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "text-foreground-light text-sm font-mono uppercase",
                                      children:
                                        null !== (ea = en.speakers_label) &&
                                        void 0 !== ea
                                          ? ea
                                          : "Speakers",
                                    }),
                                    (0, a.jsx)("ul", {
                                      className:
                                        "list-none flex flex-col md:flex-row flex-wrap lg:flex-col gap-4 md:gap-8 lg:gap-4",
                                      children:
                                        null == eo
                                          ? void 0
                                          : eo.map((e) =>
                                              (0, a.jsx)(
                                                "li",
                                                {
                                                  children: (0, a.jsxs)(l(), {
                                                    href: e.author_url,
                                                    target: "_blank",
                                                    className: "flex gap-4",
                                                    children: [
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          "relative ring-background w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 cursor-pointer",
                                                        children:
                                                          (null == e
                                                            ? void 0
                                                            : e.author_image_url) &&
                                                          (0, a.jsx)(s(), {
                                                            src: e.author_image_url,
                                                            className:
                                                              "rounded-full object-cover border border-default w-full h-full",
                                                            alt: "".concat(
                                                              e.author,
                                                              " avatar"
                                                            ),
                                                            width: 100,
                                                            height: 100,
                                                            draggable: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "flex flex-col gap-1",
                                                        children: [
                                                          (0, a.jsx)("p", {
                                                            children:
                                                              null == e
                                                                ? void 0
                                                                : e.author,
                                                          }),
                                                          (0, a.jsxs)("span", {
                                                            className:
                                                              "text-xs text-foreground-light",
                                                            children: [
                                                              null == e
                                                                ? void 0
                                                                : e.position,
                                                              (
                                                                null == e
                                                                  ? void 0
                                                                  : e.company
                                                              )
                                                                ? ", ".concat(
                                                                    null == e
                                                                      ? void 0
                                                                      : e.company
                                                                  )
                                                                : ", Supabase",
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                null == e ? void 0 : e.author_id
                                              )
                                            ),
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
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 1935, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 70599));
      }
    ),
      (_N_E = e.O());
  },
]);
