(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1935],
  {
    28879: function (t) {
      var r;
      (r = function () {
        "use strict";
        var t = "millisecond",
          r = "second",
          e = "minute",
          i = "hour",
          o = "week",
          a = "month",
          u = "quarter",
          n = "year",
          h = "date",
          s = "Invalid Date",
          c =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          g =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          l = function (t, r, e) {
            var i = String(t);
            return !i || i.length >= r
              ? t
              : "" + Array(r + 1 - i.length).join(e) + t;
          },
          m = "en",
          p = {};
        p[m] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (t) {
            var r = ["th", "st", "nd", "rd"],
              e = t % 100;
            return "[" + t + (r[(e - 20) % 10] || r[e] || "th") + "]";
          },
        };
        var _ = "$isDayjsObject",
          d = function (t) {
            return t instanceof y || !(!t || !t[_]);
          },
          b = function t(r, e, i) {
            var o;
            if (!r) return m;
            if ("string" == typeof r) {
              var a = r.toLowerCase();
              p[a] && (o = a), e && ((p[a] = e), (o = a));
              var u = r.split("-");
              if (!o && u.length > 1) return t(u[0]);
            } else {
              var n = r.name;
              (p[n] = r), (o = n);
            }
            return !i && o && (m = o), o || (!i && m);
          },
          f = function (t, r) {
            if (d(t)) return t.clone();
            var e = "object" == typeof r ? r : {};
            return (e.date = t), (e.args = arguments), new y(e);
          },
          v = {
            s: l,
            z: function (t) {
              var r = -t.utcOffset(),
                e = Math.abs(r);
              return (
                (r <= 0 ? "+" : "-") +
                l(Math.floor(e / 60), 2, "0") +
                ":" +
                l(e % 60, 2, "0")
              );
            },
            m: function t(r, e) {
              if (r.date() < e.date()) return -t(e, r);
              var i = 12 * (e.year() - r.year()) + (e.month() - r.month()),
                o = r.clone().add(i, a),
                u = e - o < 0,
                n = r.clone().add(i + (u ? -1 : 1), a);
              return +(-(i + (e - o) / (u ? o - n : n - o)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (s) {
              return (
                {
                  M: a,
                  y: n,
                  w: o,
                  d: "day",
                  D: h,
                  h: i,
                  m: e,
                  s: r,
                  ms: t,
                  Q: u,
                }[s] ||
                String(s || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (v.l = b),
          (v.i = d),
          (v.w = function (t, r) {
            return f(t, {
              locale: r.$L,
              utc: r.$u,
              x: r.$x,
              $offset: r.$offset,
            });
          });
        var y = (function () {
            function l(t) {
              (this.$L = b(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[_] = !0);
            }
            var m = l.prototype;
            return (
              (m.parse = function (t) {
                (this.$d = (function (t) {
                  var r = t.date,
                    e = t.utc;
                  if (null === r) return new Date(NaN);
                  if (v.u(r)) return new Date();
                  if (r instanceof Date) return new Date(r);
                  if ("string" == typeof r && !/Z$/i.test(r)) {
                    var i = r.match(c);
                    if (i) {
                      var o = i[2] - 1 || 0,
                        a = (i[7] || "0").substring(0, 3);
                      return e
                        ? new Date(
                            Date.UTC(
                              i[1],
                              o,
                              i[3] || 1,
                              i[4] || 0,
                              i[5] || 0,
                              i[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            i[1],
                            o,
                            i[3] || 1,
                            i[4] || 0,
                            i[5] || 0,
                            i[6] || 0,
                            a
                          );
                    }
                  }
                  return new Date(r);
                })(t)),
                  this.init();
              }),
              (m.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (m.$utils = function () {
                return v;
              }),
              (m.isValid = function () {
                return this.$d.toString() !== s;
              }),
              (m.isSame = function (t, r) {
                var e = f(t);
                return this.startOf(r) <= e && e <= this.endOf(r);
              }),
              (m.isAfter = function (t, r) {
                return f(t) < this.startOf(r);
              }),
              (m.isBefore = function (t, r) {
                return this.endOf(r) < f(t);
              }),
              (m.$g = function (t, r, e) {
                return v.u(t) ? this[r] : this.set(e, t);
              }),
              (m.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (m.valueOf = function () {
                return this.$d.getTime();
              }),
              (m.startOf = function (t, u) {
                var s = this,
                  c = !!v.u(u) || u,
                  g = v.p(t),
                  l = function (t, r) {
                    var e = v.w(
                      s.$u ? Date.UTC(s.$y, r, t) : new Date(s.$y, r, t),
                      s
                    );
                    return c ? e : e.endOf("day");
                  },
                  m = function (t, r) {
                    return v.w(
                      s
                        .toDate()
                        [t].apply(
                          s.toDate("s"),
                          (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(r)
                        ),
                      s
                    );
                  },
                  p = this.$W,
                  _ = this.$M,
                  d = this.$D,
                  b = "set" + (this.$u ? "UTC" : "");
                switch (g) {
                  case n:
                    return c ? l(1, 0) : l(31, 11);
                  case a:
                    return c ? l(1, _) : l(0, _ + 1);
                  case o:
                    var f = this.$locale().weekStart || 0,
                      y = (p < f ? p + 7 : p) - f;
                    return l(c ? d - y : d + (6 - y), _);
                  case "day":
                  case h:
                    return m(b + "Hours", 0);
                  case i:
                    return m(b + "Minutes", 1);
                  case e:
                    return m(b + "Seconds", 2);
                  case r:
                    return m(b + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (m.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (m.$set = function (o, u) {
                var s,
                  c = v.p(o),
                  g = "set" + (this.$u ? "UTC" : ""),
                  l = (((s = {}).day = g + "Date"),
                  (s[h] = g + "Date"),
                  (s[a] = g + "Month"),
                  (s[n] = g + "FullYear"),
                  (s[i] = g + "Hours"),
                  (s[e] = g + "Minutes"),
                  (s[r] = g + "Seconds"),
                  (s[t] = g + "Milliseconds"),
                  s)[c],
                  m = "day" === c ? this.$D + (u - this.$W) : u;
                if (c === a || c === n) {
                  var p = this.clone().set(h, 1);
                  p.$d[l](m),
                    p.init(),
                    (this.$d = p.set(h, Math.min(this.$D, p.daysInMonth())).$d);
                } else l && this.$d[l](m);
                return this.init(), this;
              }),
              (m.set = function (t, r) {
                return this.clone().$set(t, r);
              }),
              (m.get = function (t) {
                return this[v.p(t)]();
              }),
              (m.add = function (t, u) {
                var h,
                  s = this;
                t = Number(t);
                var c = v.p(u),
                  g = function (r) {
                    var e = f(s);
                    return v.w(e.date(e.date() + Math.round(r * t)), s);
                  };
                if (c === a) return this.set(a, this.$M + t);
                if (c === n) return this.set(n, this.$y + t);
                if ("day" === c) return g(1);
                if (c === o) return g(7);
                var l =
                    (((h = {})[e] = 6e4), (h[i] = 36e5), (h[r] = 1e3), h)[c] ||
                    1,
                  m = this.$d.getTime() + t * l;
                return v.w(m, this);
              }),
              (m.subtract = function (t, r) {
                return this.add(-1 * t, r);
              }),
              (m.format = function (t) {
                var r = this,
                  e = this.$locale();
                if (!this.isValid()) return e.invalidDate || s;
                var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                  o = v.z(this),
                  a = this.$H,
                  u = this.$m,
                  n = this.$M,
                  h = e.weekdays,
                  c = e.months,
                  l = e.meridiem,
                  m = function (t, e, o, a) {
                    return (t && (t[e] || t(r, i))) || o[e].slice(0, a);
                  },
                  p = function (t) {
                    return v.s(a % 12 || 12, t, "0");
                  },
                  _ =
                    l ||
                    function (t, r, e) {
                      var i = t < 12 ? "AM" : "PM";
                      return e ? i.toLowerCase() : i;
                    };
                return i.replace(g, function (t, i) {
                  return (
                    i ||
                    (function (t) {
                      switch (t) {
                        case "YY":
                          return String(r.$y).slice(-2);
                        case "YYYY":
                          return v.s(r.$y, 4, "0");
                        case "M":
                          return n + 1;
                        case "MM":
                          return v.s(n + 1, 2, "0");
                        case "MMM":
                          return m(e.monthsShort, n, c, 3);
                        case "MMMM":
                          return m(c, n);
                        case "D":
                          return r.$D;
                        case "DD":
                          return v.s(r.$D, 2, "0");
                        case "d":
                          return String(r.$W);
                        case "dd":
                          return m(e.weekdaysMin, r.$W, h, 2);
                        case "ddd":
                          return m(e.weekdaysShort, r.$W, h, 3);
                        case "dddd":
                          return h[r.$W];
                        case "H":
                          return String(a);
                        case "HH":
                          return v.s(a, 2, "0");
                        case "h":
                          return p(1);
                        case "hh":
                          return p(2);
                        case "a":
                          return _(a, u, !0);
                        case "A":
                          return _(a, u, !1);
                        case "m":
                          return String(u);
                        case "mm":
                          return v.s(u, 2, "0");
                        case "s":
                          return String(r.$s);
                        case "ss":
                          return v.s(r.$s, 2, "0");
                        case "SSS":
                          return v.s(r.$ms, 3, "0");
                        case "Z":
                          return o;
                      }
                      return null;
                    })(t) ||
                    o.replace(":", "")
                  );
                });
              }),
              (m.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (m.diff = function (t, h, s) {
                var c,
                  g = this,
                  l = v.p(h),
                  m = f(t),
                  p = (m.utcOffset() - this.utcOffset()) * 6e4,
                  _ = this - m,
                  d = function () {
                    return v.m(g, m);
                  };
                switch (l) {
                  case n:
                    c = d() / 12;
                    break;
                  case a:
                    c = d();
                    break;
                  case u:
                    c = d() / 3;
                    break;
                  case o:
                    c = (_ - p) / 6048e5;
                    break;
                  case "day":
                    c = (_ - p) / 864e5;
                    break;
                  case i:
                    c = _ / 36e5;
                    break;
                  case e:
                    c = _ / 6e4;
                    break;
                  case r:
                    c = _ / 1e3;
                    break;
                  default:
                    c = _;
                }
                return s ? c : v.a(c);
              }),
              (m.daysInMonth = function () {
                return this.endOf(a).$D;
              }),
              (m.$locale = function () {
                return p[this.$L];
              }),
              (m.locale = function (t, r) {
                if (!t) return this.$L;
                var e = this.clone(),
                  i = b(t, r, !0);
                return i && (e.$L = i), e;
              }),
              (m.clone = function () {
                return v.w(this.$d, this);
              }),
              (m.toDate = function () {
                return new Date(this.valueOf());
              }),
              (m.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (m.toISOString = function () {
                return this.$d.toISOString();
              }),
              (m.toString = function () {
                return this.$d.toUTCString();
              }),
              l
            );
          })(),
          w = y.prototype;
        return (
          (f.prototype = w),
          [
            ["$ms", t],
            ["$s", r],
            ["$m", e],
            ["$H", i],
            ["$W", "day"],
            ["$M", a],
            ["$y", n],
            ["$D", h],
          ].forEach(function (t) {
            w[t[1]] = function (r) {
              return this.$g(r, t[0], t[1]);
            };
          }),
          (f.extend = function (t, r) {
            return t.$i || (t(r, y, f), (t.$i = !0)), f;
          }),
          (f.locale = b),
          (f.isDayjs = d),
          (f.unix = function (t) {
            return f(1e3 * t);
          }),
          (f.en = p[m]),
          (f.Ls = p),
          (f.p = {}),
          f
        );
      }),
        (t.exports = r());
    },
    69471: function (t, r, e) {
      "use strict";
      e.d(r, {
        R: function () {
          return n;
        },
      });
      var i = {};
      e.r(i),
        e.d(i, {
          MDXContext: function () {
            return u.pC;
          },
          MDXProvider: function () {
            return u.Zo;
          },
          useMDXComponents: function () {
            return u.ah;
          },
          withMDXComponents: function () {
            return u.NF;
          },
        });
      var o = e(2784),
        a = e(4423),
        u = e(29154);
      function n({
        compiledSource: t,
        frontmatter: r,
        scope: e,
        components: n = {},
        lazy: h,
      }) {
        let [s, c] = (0, o.useState)(!h || "undefined" == typeof window);
        (0, o.useEffect)(() => {
          if (h) {
            let t = window.requestIdleCallback(() => {
              c(!0);
            });
            return () => window.cancelIdleCallback(t);
          }
        }, []);
        let g = (0, o.useMemo)(() => {
          let o = Object.assign(
              { opts: { ...i, ...a.jsxRuntime } },
              { frontmatter: r },
              e
            ),
            u = Object.keys(o),
            n = Object.values(o),
            h = Reflect.construct(Function, u.concat(`${t}`));
          return h.apply(h, n).default;
        }, [e, t]);
        if (!s)
          return o.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let l = o.createElement(
          u.Zo,
          { components: n },
          o.createElement(g, null)
        );
        return h ? o.createElement("div", null, l) : l;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (t) {
            var r = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - r));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          }));
    },
    95421: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return l;
        },
      });
      var i = e(52322),
        o = e(39097),
        a = e.n(o),
        u = e(51229),
        n = e(76585);
      let h = (0, i.jsx)("path", {
        fill: "currentColor",
        d: "M0 1.85859C0 1.31985 0.180185 0.87541 0.540541 0.525253C0.900896 0.175079 1.36937 0 1.94595 0C2.51223 0 2.97039 0.17238 3.32046 0.517172C3.68082 0.872727 3.861 1.33602 3.861 1.90707C3.861 2.42424 3.68598 2.85521 3.33591 3.2C2.97555 3.55556 2.50193 3.73333 1.91506 3.73333H1.89961C1.33333 3.73333 0.875166 3.55556 0.525097 3.2C0.175027 2.84444 0 2.3973 0 1.85859ZM0.200772 16V5.20404H3.62934V16H0.200772ZM5.52896 16H8.95753V9.97172C8.95753 9.5946 8.99872 9.30369 9.08108 9.09899C9.22522 8.73265 9.44402 8.42289 9.73745 8.1697C10.0309 7.91649 10.399 7.7899 10.8417 7.7899C11.9949 7.7899 12.5714 8.60336 12.5714 10.2303V16H16V9.8101C16 8.21548 15.6396 7.00606 14.9189 6.18182C14.1982 5.35758 13.2458 4.94545 12.0618 4.94545C10.7336 4.94545 9.69884 5.54343 8.95753 6.73939V6.77172H8.94208L8.95753 6.73939V5.20404H5.52896C5.54954 5.54882 5.55985 6.62086 5.55985 8.4202C5.55985 10.2195 5.54954 12.7461 5.52896 16Z",
      });
      var s = function (t) {
        return (0, i.jsx)(n.Z, { src: h, stroke: "none", ...t });
      };
      let c = (0, i.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 0H16V16H0V0ZM4.69024 3.8925L7.46363 9.0659V12.4258H8.53025V9.11913L11.3036 3.8925H10.1302L8.53025 7.14582C8.42355 7.30582 8.31694 7.46582 8.26363 7.62582C8.23286 7.74859 8.1845 7.83601 8.13883 7.91862C8.10515 7.97957 8.07286 8.0379 8.05024 8.10582C8.02355 8.07913 8.01017 8.03913 7.99686 7.99906C7.98355 7.95913 7.97024 7.91913 7.94355 7.89244C7.91686 7.83913 7.90348 7.79906 7.89017 7.75899C7.87686 7.71906 7.86355 7.67906 7.83694 7.62582V7.57251L7.78355 7.51913C7.76319 7.47841 7.75061 7.44546 7.73984 7.41731C7.72246 7.37171 7.70988 7.33877 7.67694 7.30582C7.62355 7.25251 7.57024 7.19913 7.57024 7.14582L5.97024 3.8925H4.69024Z",
      });
      var g = function (t) {
          return (0, i.jsx)(n.Z, { src: c, stroke: "none", ...t });
        },
        l = (t) => {
          let {
              title: r,
              slug: e,
              iconSize: o = 20,
              basePath: n = "https://supabase.com/blog/",
            } = t,
            h = encodeURIComponent("".concat(n).concat(e)),
            c = encodeURIComponent(r);
          return (0, i.jsxs)("div", {
            className: "mt-4 flex items-center gap-4",
            children: [
              (0, i.jsx)(a(), {
                "aria-label": "Share on X",
                href: "https://twitter.com/intent/tweet?url="
                  .concat(h, "&text=")
                  .concat(c),
                target: "_blank",
                className: "text-foreground-lighter hover:text-foreground",
                children: (0, i.jsx)(u.Z, { size: o }),
              }),
              (0, i.jsx)(a(), {
                "aria-label": "Share on Linkedin",
                href: "https://www.linkedin.com/shareArticle?url="
                  .concat(h, "&text=")
                  .concat(c),
                target: "_blank",
                className: "text-foreground-lighter hover:text-foreground",
                children: (0, i.jsx)(s, { size: o }),
              }),
              (0, i.jsx)(a(), {
                "aria-label": "Share on Hacker News",
                href: "https://news.ycombinator.com/submitlink?u="
                  .concat(h, "&t=")
                  .concat(c),
                target: "_blank",
                className: "text-foreground-lighter hover:text-foreground",
                children: (0, i.jsx)(g, { size: o }),
              }),
            ],
          });
        };
    },
    28079: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return i;
        },
      });
      let i = (0, e(55132).Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    4423: function (t, r, e) {
      t.exports.jsxRuntime = e(52322);
    },
    61812: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"soedirgo","author":"Bobbie Soedirgo","username":"soedirgo","position":"Engineering","author_url":"https://github.com/soedirgo","author_image_url":"https://github.com/soedirgo.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"hieu","author":"Hieu Pham","username":"hieu","position":"Engineering","author_url":"https://github.com/phamhieu","author_image_url":"https://github.com/phamhieu.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonny Summers-Muir","position":"Product Design","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana Pavlinić","position":"Design","author_url":"https://github.com/marijanapav","author_image_url":"https://github.com/marijanapav.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"andreespirela","author":"Andrees Pirela","position":"Engineering","author_url":"https://github.com/andreespirela","author_image_url":"https://github.com/andreespirela.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"},{"author_id":"kevinbrolly","author":"Kevin Brolly","position":"Head of Customer Success","author_url":"https://twitter.com/kevinbrolly","author_image_url":"https://pbs.twimg.com/profile_images/1292938696912756736/_DO9_Evo_200x200.jpg"},{"author_id":"benediktmueller","author":"Benedikt M\xfcller","username":"bndkt","position":"Guest Author","author_url":"https://twitter.com/bndkt","author_image_url":"https://github.com/bndkt.png"},{"author_id":"long","author":"Long Hoang","username":"loong","position":"Growth","author_url":"https://github.com/loong","author_image_url":"https://github.com/loong.png"},{"author_id":"kamil_ogorek","author":"Kamil Og\xf3rek","username":"kamil","position":"Integrations Lead","author_url":"https://twitter.com/kamilogorek","author_image_url":"https://github.com/kamilogorek.png"},{"author_id":"yuri","author":"Yuri Santana","username":"yuri","position":"DevRel Social Media and Community","author_url":"https://twitter.com/yuricodesbot","author_image_url":"https://github.com/YuriCodes.png"},{"author_id":"ivasilov","author":"Ivan Vasilov","username":"ivasilov","position":"Engineering","author_url":"https://twitter.com/ivasilov","author_image_url":"https://github.com/ivasilov.png"},{"author_id":"philipp","author":"Philipp Steinr\xf6tter","username":"psteinroe","position":"Guest Author","author_url":"https://twitter.com/psteinroe","author_image_url":"/images/philipp-steinrotter.jpg"},{"author_id":"giancarlo","author":"Giancarlo Buomprisco","username":"giancarlo","position":"Guest Author","author_url":"https://twitter.com/gc_psk","author_image_url":"https://github.com/Gbuomprisco.png"},{"author_id":"filipe","author":"Filipe Caba\xe7o","username":"filipe","position":"Engineering","author_url":"https://twitter.com/filipecabaco","author_image_url":"https://github.com/filipecabaco.png"},{"author_id":"raminder_singh","author":"Raminder Singh","username":"imor","position":"Engineering","author_url":"https://github.com/imor","author_image_url":"https://github.com/imor.png"},{"author_id":"samrose","author":"Sam Rose","username":"samrose","position":"Engineering","author_url":"https://github.com/samrose","author_image_url":"https://github.com/samrose.png"},{"author_id":"timabdulla","author":"Tim Abdulla","username":"timabdulla","position":"Guest Author","author_url":"https://github.com/timabdulla","author_image_url":"https://github.com/timabdulla.png"},{"author_id":"grdsdev","author":"Guilherme Souza","username":"grdsdev","position":"Engineering","author_url":"https://github.com/grdsdev","author_image_url":"https://github.com/grdsdev.png"},{"author_id":"chris_chandler","author":"Chris Chandler","username":"chrischandler","position":"Partnerships","author_url":"https://github.com/chrischandler","author_image_url":"https://github.com/chrischandler.png"},{"author_id":"bdon","author":"Brandon Liu","username":"bdon","position":"Guest Author","author_url":"https://github.com/bdon","author_image_url":"https://github.com/bdon.png"},{"author_id":"p6l-richard","author":"Richard Poelderl","username":"p6l-richard","position":"Guest Author","author_url":"https://github.com/p6l-richard","author_image_url":"https://github.com/p6l-richard.png"},{"author_id":"PeerRich","author":"Peer Richelsen","username":"PeerRich","position":"Guest Author","author_url":"https://github.com/PeerRich","author_image_url":"https://github.com/PeerRich.png"},{"author_id":"khajvandi","author":"Cyrus Khajvandi","username":"khajvandi","position":"Co-Founder & CEO","company":"Humata","author_url":"https://www.linkedin.com/in/khajvandi/","author_image_url":"https://media.licdn.com/dms/image/v2/D5603AQGZst2tvV47PA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694666298155?e=1728518400&v=beta&t=Jkt6ii4cV8FsvU4qONEGFVUADw-Zc_WI1h-pSrenxGg"},{"author_id":"anas-araid","author":"Anas Araid","username":"anas-araid","position":"Guest Author","author_url":"https://github.com/anas-araid","author_image_url":"https://github.com/anas-araid.png"},{"author_id":"activenode","author":"David Lorenz","username":"activenode","position":"Guest Author","author_url":"https://github.com/activenode","author_image_url":"https://github.com/activenode.png"},{"author_id":"craig_cannon","author":"Craig Cannon","username":"CraigCannon","position":"Marketing","author_url":"https://x.com/CraigCannon","author_image_url":"https://github.com/craigcannon.png"},{"author_id":"jay_meistrich","author":"Jay Meistrich","username":"jmeistrich","position":"Guest Author","author_url":"https://x.com/jmeistrich","author_image_url":"https://github.com/jmeistrich.png"},{"author_id":"nyannyacha","author":"Nyannyacha","username":"nyannyacha","position":"Engineering","author_url":"https://github.com/nyannyacha","author_image_url":"https://github.com/nyannyacha.png"},{"author_id":"jstoone","author":"Jakob Steinn","position":"Co-founder & Tech Lead","company":"Good Tape","author_url":"https://twitter.com/jstoone","author_image_url":"https://pbs.twimg.com/profile_images/1233003191538790400/3OxNooXT_200x200.jpg"},{"author_id":"tim_shedor","author":"Tim Shedor","username":"tshedor","position":"Guest Author","author_url":"https://github.com/tshedor","author_image_url":"https://github.com/tshedor.png"},{"author_id":"jgoux","author":"Julien Goux","username":"jgoux","position":"Engineering","author_url":"https://github.com/jgoux","author_image_url":"https://github.com/jgoux.png"}]'
      );
    },
  },
]);
