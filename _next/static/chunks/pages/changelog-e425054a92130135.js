(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3477, 7042],
  {
    22600: function (e, t, n) {
      "use strict";
      var r = n(2784);
      let s = r.forwardRef(function (e, t) {
        return r.createElement(
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
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 5l7 7m0 0l-7 7m7-7H3",
          })
        );
      });
      t.Z = s;
    },
    28879: function (e) {
      var t;
      (t = function () {
        "use strict";
        var e = "millisecond",
          t = "second",
          n = "minute",
          r = "hour",
          s = "week",
          i = "month",
          a = "quarter",
          u = "year",
          c = "date",
          o = "Invalid Date",
          l =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          d =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          f = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : "" + Array(t + 1 - r.length).join(n) + e;
          },
          h = "en",
          m = {};
        m[h] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              n = e % 100;
            return "[" + e + (t[(n - 20) % 10] || t[n] || "th") + "]";
          },
        };
        var p = "$isDayjsObject",
          g = function (e) {
            return e instanceof w || !(!e || !e[p]);
          },
          x = function e(t, n, r) {
            var s;
            if (!t) return h;
            if ("string" == typeof t) {
              var i = t.toLowerCase();
              m[i] && (s = i), n && ((m[i] = n), (s = i));
              var a = t.split("-");
              if (!s && a.length > 1) return e(a[0]);
            } else {
              var u = t.name;
              (m[u] = t), (s = u);
            }
            return !r && s && (h = s), s || (!r && h);
          },
          $ = function (e, t) {
            if (g(e)) return e.clone();
            var n = "object" == typeof t ? t : {};
            return (n.date = e), (n.args = arguments), new w(n);
          },
          v = {
            s: f,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t);
              return (
                (t <= 0 ? "+" : "-") +
                f(Math.floor(n / 60), 2, "0") +
                ":" +
                f(n % 60, 2, "0")
              );
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                s = t.clone().add(r, i),
                a = n - s < 0,
                u = t.clone().add(r + (a ? -1 : 1), i);
              return +(-(r + (n - s) / (a ? s - u : u - s)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (o) {
              return (
                {
                  M: i,
                  y: u,
                  w: s,
                  d: "day",
                  D: c,
                  h: r,
                  m: n,
                  s: t,
                  ms: e,
                  Q: a,
                }[o] ||
                String(o || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        (v.l = x),
          (v.i = g),
          (v.w = function (e, t) {
            return $(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var w = (function () {
            function f(e) {
              (this.$L = x(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[p] = !0);
            }
            var h = f.prototype;
            return (
              (h.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (v.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(l);
                    if (r) {
                      var s = r[2] - 1 || 0,
                        i = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              s,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              i
                            )
                          )
                        : new Date(
                            r[1],
                            s,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            i
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (h.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (h.$utils = function () {
                return v;
              }),
              (h.isValid = function () {
                return this.$d.toString() !== o;
              }),
              (h.isSame = function (e, t) {
                var n = $(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (h.isAfter = function (e, t) {
                return $(e) < this.startOf(t);
              }),
              (h.isBefore = function (e, t) {
                return this.endOf(t) < $(e);
              }),
              (h.$g = function (e, t, n) {
                return v.u(e) ? this[t] : this.set(n, e);
              }),
              (h.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (h.valueOf = function () {
                return this.$d.getTime();
              }),
              (h.startOf = function (e, a) {
                var o = this,
                  l = !!v.u(a) || a,
                  d = v.p(e),
                  f = function (e, t) {
                    var n = v.w(
                      o.$u ? Date.UTC(o.$y, t, e) : new Date(o.$y, t, e),
                      o
                    );
                    return l ? n : n.endOf("day");
                  },
                  h = function (e, t) {
                    return v.w(
                      o
                        .toDate()
                        [e].apply(
                          o.toDate("s"),
                          (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      o
                    );
                  },
                  m = this.$W,
                  p = this.$M,
                  g = this.$D,
                  x = "set" + (this.$u ? "UTC" : "");
                switch (d) {
                  case u:
                    return l ? f(1, 0) : f(31, 11);
                  case i:
                    return l ? f(1, p) : f(0, p + 1);
                  case s:
                    var $ = this.$locale().weekStart || 0,
                      w = (m < $ ? m + 7 : m) - $;
                    return f(l ? g - w : g + (6 - w), p);
                  case "day":
                  case c:
                    return h(x + "Hours", 0);
                  case r:
                    return h(x + "Minutes", 1);
                  case n:
                    return h(x + "Seconds", 2);
                  case t:
                    return h(x + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (h.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (h.$set = function (s, a) {
                var o,
                  l = v.p(s),
                  d = "set" + (this.$u ? "UTC" : ""),
                  f = (((o = {}).day = d + "Date"),
                  (o[c] = d + "Date"),
                  (o[i] = d + "Month"),
                  (o[u] = d + "FullYear"),
                  (o[r] = d + "Hours"),
                  (o[n] = d + "Minutes"),
                  (o[t] = d + "Seconds"),
                  (o[e] = d + "Milliseconds"),
                  o)[l],
                  h = "day" === l ? this.$D + (a - this.$W) : a;
                if (l === i || l === u) {
                  var m = this.clone().set(c, 1);
                  m.$d[f](h),
                    m.init(),
                    (this.$d = m.set(c, Math.min(this.$D, m.daysInMonth())).$d);
                } else f && this.$d[f](h);
                return this.init(), this;
              }),
              (h.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (h.get = function (e) {
                return this[v.p(e)]();
              }),
              (h.add = function (e, a) {
                var c,
                  o = this;
                e = Number(e);
                var l = v.p(a),
                  d = function (t) {
                    var n = $(o);
                    return v.w(n.date(n.date() + Math.round(t * e)), o);
                  };
                if (l === i) return this.set(i, this.$M + e);
                if (l === u) return this.set(u, this.$y + e);
                if ("day" === l) return d(1);
                if (l === s) return d(7);
                var f =
                    (((c = {})[n] = 6e4), (c[r] = 36e5), (c[t] = 1e3), c)[l] ||
                    1,
                  h = this.$d.getTime() + e * f;
                return v.w(h, this);
              }),
              (h.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (h.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || o;
                var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                  s = v.z(this),
                  i = this.$H,
                  a = this.$m,
                  u = this.$M,
                  c = n.weekdays,
                  l = n.months,
                  f = n.meridiem,
                  h = function (e, n, s, i) {
                    return (e && (e[n] || e(t, r))) || s[n].slice(0, i);
                  },
                  m = function (e) {
                    return v.s(i % 12 || 12, e, "0");
                  },
                  p =
                    f ||
                    function (e, t, n) {
                      var r = e < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(d, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return v.s(t.$y, 4, "0");
                        case "M":
                          return u + 1;
                        case "MM":
                          return v.s(u + 1, 2, "0");
                        case "MMM":
                          return h(n.monthsShort, u, l, 3);
                        case "MMMM":
                          return h(l, u);
                        case "D":
                          return t.$D;
                        case "DD":
                          return v.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return h(n.weekdaysMin, t.$W, c, 2);
                        case "ddd":
                          return h(n.weekdaysShort, t.$W, c, 3);
                        case "dddd":
                          return c[t.$W];
                        case "H":
                          return String(i);
                        case "HH":
                          return v.s(i, 2, "0");
                        case "h":
                          return m(1);
                        case "hh":
                          return m(2);
                        case "a":
                          return p(i, a, !0);
                        case "A":
                          return p(i, a, !1);
                        case "m":
                          return String(a);
                        case "mm":
                          return v.s(a, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return v.s(t.$s, 2, "0");
                        case "SSS":
                          return v.s(t.$ms, 3, "0");
                        case "Z":
                          return s;
                      }
                      return null;
                    })(e) ||
                    s.replace(":", "")
                  );
                });
              }),
              (h.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (h.diff = function (e, c, o) {
                var l,
                  d = this,
                  f = v.p(c),
                  h = $(e),
                  m = (h.utcOffset() - this.utcOffset()) * 6e4,
                  p = this - h,
                  g = function () {
                    return v.m(d, h);
                  };
                switch (f) {
                  case u:
                    l = g() / 12;
                    break;
                  case i:
                    l = g();
                    break;
                  case a:
                    l = g() / 3;
                    break;
                  case s:
                    l = (p - m) / 6048e5;
                    break;
                  case "day":
                    l = (p - m) / 864e5;
                    break;
                  case r:
                    l = p / 36e5;
                    break;
                  case n:
                    l = p / 6e4;
                    break;
                  case t:
                    l = p / 1e3;
                    break;
                  default:
                    l = p;
                }
                return o ? l : v.a(l);
              }),
              (h.daysInMonth = function () {
                return this.endOf(i).$D;
              }),
              (h.$locale = function () {
                return m[this.$L];
              }),
              (h.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = x(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (h.clone = function () {
                return v.w(this.$d, this);
              }),
              (h.toDate = function () {
                return new Date(this.valueOf());
              }),
              (h.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (h.toISOString = function () {
                return this.$d.toISOString();
              }),
              (h.toString = function () {
                return this.$d.toUTCString();
              }),
              f
            );
          })(),
          y = w.prototype;
        return (
          ($.prototype = y),
          [
            ["$ms", e],
            ["$s", t],
            ["$m", n],
            ["$H", r],
            ["$W", "day"],
            ["$M", i],
            ["$y", u],
            ["$D", c],
          ].forEach(function (e) {
            y[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          ($.extend = function (e, t) {
            return e.$i || (e(t, w, $), (e.$i = !0)), $;
          }),
          ($.locale = x),
          ($.isDayjs = g),
          ($.unix = function (e) {
            return $(1e3 * e);
          }),
          ($.en = m[h]),
          ($.Ls = m),
          ($.p = {}),
          $
        );
      }),
        (e.exports = t());
    },
    69471: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return u;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          MDXContext: function () {
            return a.pC;
          },
          MDXProvider: function () {
            return a.Zo;
          },
          useMDXComponents: function () {
            return a.ah;
          },
          withMDXComponents: function () {
            return a.NF;
          },
        });
      var s = n(2784),
        i = n(4423),
        a = n(29154);
      function u({
        compiledSource: e,
        frontmatter: t,
        scope: n,
        components: u = {},
        lazy: c,
      }) {
        let [o, l] = (0, s.useState)(!c || "undefined" == typeof window);
        (0, s.useEffect)(() => {
          if (c) {
            let e = window.requestIdleCallback(() => {
              l(!0);
            });
            return () => window.cancelIdleCallback(e);
          }
        }, []);
        let d = (0, s.useMemo)(() => {
          let s = Object.assign(
              { opts: { ...r, ...i.jsxRuntime } },
              { frontmatter: t },
              n
            ),
            a = Object.keys(s),
            u = Object.values(s),
            c = Reflect.construct(Function, a.concat(`${e}`));
          return c.apply(c, u).default;
        }, [n, e]);
        if (!o)
          return s.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let f = s.createElement(
          a.Zo,
          { components: u },
          s.createElement(d, null)
        );
        return c ? s.createElement("div", null, f) : f;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          }));
    },
    37782: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/changelog",
        function () {
          return n(12743);
        },
      ]);
    },
    57042: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(52322),
        s = n(39097),
        i = n.n(s),
        a = n(44382),
        u = n(29982);
      t.default = (e) => {
        let { darkerBg: t, className: n } = e;
        return (0, r.jsxs)("div", {
          className: (0, a.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            n
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
                (0, r.jsx)(u.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, r.jsx)(i(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, r.jsx)(u.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, r.jsx)(i(), {
                    href: "/contact/sales",
                    children: "Request a demoss",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    12743: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return $;
          },
        });
      var r = n(52322),
        s = n(2784);
      let i = s.forwardRef(function (e, t) {
        return s.createElement(
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
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 19l-7-7m0 0l7-7m-7 7h18",
          })
        );
      });
      var a = n(22600),
        u = n(28879),
        c = n.n(u);
      let o = (0, n(55132).Z)("GitCommitHorizontal", [
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
        ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }],
      ]);
      var l = n(69471),
        d = n(55351),
        f = n(39097),
        h = n.n(f),
        m = n(57042),
        p = n(27478),
        g = n(33880),
        x = !0,
        $ = function (e) {
          let { changelog: t, pageInfo: n, restPage: s } = e,
            { endCursor: u, hasNextPage: f, hasPreviousPage: x } = n,
            $ = "Changelog";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d.PB, {
                title: $,
                openGraph: {
                  title: $,
                  description: "New updates and improvements to Supabase",
                  url: "https://supabase.com/changelog",
                  type: "article",
                },
              }),
              (0, r.jsxs)(p.default, {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      " container mx-auto flex flex-col gap-20 px-4 py-10 sm:px-16 xl:px-20 ",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "py-10",
                        children: [
                          (0, r.jsx)("h1", {
                            className: "h1",
                            children: "Changelog",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-foreground-lighter text-lg",
                            children: "New updates and product improvements",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "grid gap-12 lg:gap-36",
                        children:
                          t.length > 0 &&
                          t
                            .filter((e) => !e.title.includes("[d]"))
                            .map((e, t) =>
                              (0, r.jsxs)(
                                "div",
                                {
                                  className:
                                    "border-muted grid border-l lg:grid-cols-12 lg:gap-8",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "col-span-12 mb-8 self-start lg:sticky lg:top-0 lg:col-span-4 lg:-mt-32 lg:pt-32 ",
                                      children: (0, r.jsxs)("div", {
                                        className:
                                          "flex w-full items-baseline gap-6",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "bg-border border-muted text-foreground-lighter -ml-2.5 flex h-5 w-5 items-center justify-center rounded border drop-shadow-sm",
                                            children: (0, r.jsx)(o, {
                                              size: 14,
                                              strokeWidth: 1.5,
                                            }),
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "flex w-full flex-col gap-1",
                                            children: [
                                              e.title &&
                                                (0, r.jsxs)(h(), {
                                                  href: e.url,
                                                  children: [
                                                    (0, r.jsx)("h3", {
                                                      className:
                                                        "text-foreground text-2xl",
                                                      children: e.title,
                                                    }),
                                                    " ",
                                                  ],
                                                }),
                                              (0, r.jsx)("p", {
                                                className: "text-muted text-lg",
                                                children: c()(
                                                  e.created_at
                                                ).format("MMM D, YYYY"),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "col-span-8 ml-8 lg:ml-0 max-w-[calc(100vw-80px)]",
                                      children: (0, r.jsx)("article", {
                                        className:
                                          "prose prose-docs max-w-none",
                                        children: (0, r.jsx)(l.R, {
                                          ...e.source,
                                          components: (0, g.Z)("blog"),
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                      }),
                      (0, r.jsxs)("div", {
                        className: "my-8 flex items-center gap-4",
                        children: [
                          x &&
                            (0, r.jsxs)(h(), {
                              href: "/changelog",
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(i, { width: 14 }),
                                " Previous",
                              ],
                            }),
                          f &&
                            (0, r.jsxs)(h(), {
                              href: "/changelog?next="
                                .concat(u, "&restPage=")
                                .concat(s + 1),
                              className: "flex items-center gap-2",
                              children: [
                                "Next ",
                                (0, r.jsx)(a.Z, { width: 14 }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(m.default, {}),
                ],
              }),
            ],
          });
        };
    },
    4423: function (e, t, n) {
      e.exports.jsxRuntime = n(52322);
    },
  },
  function (e) {
    e.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 37782));
      }
    ),
      (_N_E = e.O());
  },
]);
