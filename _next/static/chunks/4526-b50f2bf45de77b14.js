(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4526],
  {
    18682: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
        x: function () {
          return a;
        },
      });
      var r = n(22274),
        i = n(7575);
      function o() {
        var t,
          e,
          n = (0, i.Z)().unknown(void 0),
          a = n.domain,
          u = n.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var n = a().length,
            r = l < c,
            i = r ? l : c,
            o = r ? c : l;
          (t = (o - i) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (i += (o - i - t * (n - f)) * h),
            (e = t * (1 - f)),
            s && ((i = Math.round(i)), (e = Math.round(e)));
          var d = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +n);
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / n)),
                o = Array(i);
              ++r < i;

            )
              o[r] = t + r * n;
            return o;
          })(n).map(function (e) {
            return i + t * e;
          });
          return u(r ? d.reverse() : d);
        }
        return (
          delete n.unknown,
          (n.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (n.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), d())
              : [c, l];
          }),
          (n.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), d();
          }),
          (n.bandwidth = function () {
            return e;
          }),
          (n.step = function () {
            return t;
          }),
          (n.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (n.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (n.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (n.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (n.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (n.copy = function () {
            return o(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          r.o.apply(d(), arguments)
        );
      }
      function a() {
        return (function t(e) {
          var n = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return t(n());
            }),
            e
          );
        })(o.apply(null, arguments).paddingInner(1));
      }
    },
    22274: function (t, e, n) {
      "use strict";
      function r(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function i(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      n.d(e, {
        O: function () {
          return i;
        },
        o: function () {
          return r;
        },
      });
    },
    7575: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return function t() {
            var e = new r(),
              n = [],
              i = [],
              o = u;
            function c(t) {
              let r = e.get(t);
              if (void 0 === r) {
                if (o !== u) return o;
                e.set(t, (r = n.push(t) - 1));
              }
              return i[r % i.length];
            }
            return (
              (c.domain = function (t) {
                if (!arguments.length) return n.slice();
                for (let i of ((n = []), (e = new r()), t))
                  e.has(i) || e.set(i, n.push(i) - 1);
                return c;
              }),
              (c.range = function (t) {
                return arguments.length ? ((i = Array.from(t)), c) : i.slice();
              }),
              (c.unknown = function (t) {
                return arguments.length ? ((o = t), c) : o;
              }),
              (c.copy = function () {
                return t(n, i).unknown(o);
              }),
              a.o.apply(c, arguments),
              c
            );
          };
        },
        O: function () {
          return u;
        },
      });
      class r extends Map {
        constructor(t, e = o) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (let [e, n] of t) this.set(e, n);
        }
        get(t) {
          return super.get(i(this, t));
        }
        has(t) {
          return super.has(i(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, n) {
              let r = e(n);
              return t.has(r) ? t.get(r) : (t.set(r, n), n);
            })(this, t),
            e
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, n) {
              let r = e(n);
              return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
            })(this, t)
          );
        }
      }
      function i({ _intern: t, _key: e }, n) {
        let r = e(n);
        return t.has(r) ? t.get(r) : n;
      }
      function o(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var a = n(22274);
      let u = Symbol("implicit");
    },
    72299: function (t, e, n) {
      "use strict";
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      }),
        Array.prototype.slice;
    },
    33554: function (t, e, n) {
      "use strict";
      function r(t) {
        return function () {
          return t;
        };
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    37583: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return c;
        },
      });
      let r = Math.PI,
        i = 2 * r,
        o = i - 1e-6;
      function a(t) {
        this._ += t[0];
        for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? a
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                    if (e > 15) return a;
                    let n = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, r = t.length; e < r; ++e)
                        this._ += Math.round(arguments[e] * n) / n + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, n, r) {
          this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, e, n, r, i, o) {
          this._append`C${+t},${+e},${+n},${+r},${(this._x1 = +i)},${(this._y1 =
            +o)}`;
        }
        arcTo(t, e, n, i, o) {
          if (((t = +t), (e = +e), (n = +n), (i = +i), (o = +o) < 0))
            throw Error(`negative radius: ${o}`);
          let a = this._x1,
            u = this._y1,
            c = n - t,
            l = i - e,
            s = a - t,
            f = u - e,
            p = s * s + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (p > 1e-6) {
            if (Math.abs(f * c - l * s) > 1e-6 && o) {
              let h = n - a,
                d = i - u,
                y = c * c + l * l,
                v = Math.sqrt(y),
                m = Math.sqrt(p),
                g =
                  o *
                  Math.tan(
                    (r - Math.acos((y + p - (h * h + d * d)) / (2 * v * m))) / 2
                  ),
                b = g / m,
                x = g / v;
              Math.abs(b - 1) > 1e-6 &&
                this._append`L${t + b * s},${e + b * f}`,
                this._append`A${o},${o},0,0,${+(f * h > s * d)},${(this._x1 =
                  t + x * c)},${(this._y1 = e + x * l)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          }
        }
        arc(t, e, n, a, u, c) {
          if (((t = +t), (e = +e), (c = !!c), (n = +n) < 0))
            throw Error(`negative radius: ${n}`);
          let l = n * Math.cos(a),
            s = n * Math.sin(a),
            f = t + l,
            p = e + s,
            h = 1 ^ c,
            d = c ? a - u : u - a;
          null === this._x1
            ? this._append`M${f},${p}`
            : (Math.abs(this._x1 - f) > 1e-6 ||
                Math.abs(this._y1 - p) > 1e-6) &&
              this._append`L${f},${p}`,
            n &&
              (d < 0 && (d = (d % i) + i),
              d > o
                ? this._append`A${n},${n},0,1,${h},${t - l},${
                    e - s
                  }A${n},${n},0,1,${h},${(this._x1 = f)},${(this._y1 = p)}`
                : d > 1e-6 &&
                  this._append`A${n},${n},0,${+(d >= r)},${h},${(this._x1 =
                    t + n * Math.cos(u))},${(this._y1 = e + n * Math.sin(u))}`);
        }
        rect(t, e, n, r) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(n = +n)}v${+r}h${-n}Z`;
        }
        toString() {
          return this._;
        }
      }
      function c(t) {
        let e = 3;
        return (
          (t.digits = function (n) {
            if (!arguments.length) return e;
            if (null == n) e = null;
            else {
              let t = Math.floor(n);
              if (!(t >= 0)) throw RangeError(`invalid digits: ${n}`);
              e = t;
            }
            return t;
          }),
          () => new u(e)
        );
      }
      u.prototype;
    },
    17374: function (t, e, n) {
      var r;
      !(function (i) {
        "use strict";
        var o,
          a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          c = "[DecimalError] ",
          l = c + "Invalid argument: ",
          s = c + "Exponent out of range: ",
          f = Math.floor,
          p = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d = f(1286742750677284.5),
          y = {};
        function v(t, e) {
          var n,
            r,
            i,
            o,
            a,
            c,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? A(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (i = e.e),
            (l = l.slice()),
            (o = a - i))
          ) {
            for (
              o < 0
                ? ((r = l), (o = -o), (c = s.length))
                : ((r = s), (i = a), (c = l.length)),
                o > (c = (a = Math.ceil(p / 7)) > c ? a + 1 : c + 1) &&
                  ((o = c), (r.length = 1)),
                r.reverse();
              o--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (c = l.length) - (o = s.length) < 0 &&
              ((o = c), (r = s), (s = l), (l = r)),
              n = 0;
            o;

          )
            (n = ((l[--o] = l[o] + s[o] + n) / 1e7) | 0), (l[o] %= 1e7);
          for (n && (l.unshift(n), ++i), c = l.length; 0 == l[--c]; ) l.pop();
          return (e.d = l), (e.e = i), u ? A(e, p) : e;
        }
        function m(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(l + t);
        }
        function g(t) {
          var e,
            n,
            r,
            i = t.length - 1,
            o = "",
            a = t[0];
          if (i > 0) {
            for (o += a, e = 1; e < i; e++)
              (n = 7 - (r = t[e] + "").length) && (o += j(n)), (o += r);
            (n = 7 - (r = (a = t[e]) + "").length) && (o += j(n));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return o + a;
        }
        (y.absoluteValue = y.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (y.comparedTo = y.cmp =
            function (t) {
              var e, n, r, i;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = this.d.length) < (i = t.d.length) ? r : i;
                e < n;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return r === i ? 0 : (r > i) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (y.dividedBy = y.div =
            function (t) {
              return b(this, new this.constructor(t));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (t) {
              var e = this.constructor;
              return A(b(this, new e(t), 0, 1), e.precision);
            }),
          (y.equals = y.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (y.exponent = function () {
            return O(this);
          }),
          (y.greaterThan = y.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (y.logarithm = y.log =
            function (t) {
              var e,
                n = this.constructor,
                r = n.precision,
                i = r + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(o)) throw Error(c + "NaN");
              if (this.s < 1) throw Error(c + (this.s ? "NaN" : "-Infinity"));
              return this.eq(o)
                ? new n(0)
                : ((u = !1),
                  (e = b(S(this, i), S(t, i), i)),
                  (u = !0),
                  A(e, r));
            }),
          (y.minus = y.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? E(this, t) : v(this, ((t.s = -t.s), t))
              );
            }),
          (y.modulo = y.mod =
            function (t) {
              var e,
                n = this.constructor,
                r = n.precision;
              if (!(t = new n(t)).s) throw Error(c + "NaN");
              return this.s
                ? ((u = !1),
                  (e = b(this, t, 0, 1).times(t)),
                  (u = !0),
                  this.minus(e))
                : A(new n(this), r);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return S(this);
            }),
          (y.negated = y.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (y.plus = y.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? v(this, t) : E(this, ((t.s = -t.s), t))
              );
            }),
          (y.precision = y.sd =
            function (t) {
              var e, n, r;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(l + t);
              if (
                ((e = O(this) + 1),
                (n = 7 * (r = this.d.length - 1) + 1),
                (r = this.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = this.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a,
                l = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new l(0);
                throw Error(c + "NaN");
              }
              for (
                t = O(this),
                  u = !1,
                  0 == (i = Math.sqrt(+this)) || i == 1 / 0
                    ? (((e = g(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (i = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new l(
                        (e =
                          i == 1 / 0
                            ? "5e" + t
                            : (e = i.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + t)
                      )))
                    : (r = new l(i.toString())),
                  i = a = (n = l.precision) + 3;
                ;

              )
                if (
                  ((r = (o = r).plus(b(this, o, a + 2)).times(0.5)),
                  g(o.d).slice(0, a) === (e = g(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), i == a && "4999" == e)) {
                    if ((A(o, n + 1, 0), o.times(o).eq(this))) {
                      r = o;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (u = !0), A(r, n);
            }),
          (y.times = y.mul =
            function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                c,
                l,
                s,
                f = this.constructor,
                p = this.d,
                h = (t = new f(t)).d;
              if (!this.s || !t.s) return new f(0);
              for (
                t.s *= this.s,
                  n = this.e + t.e,
                  (l = p.length) < (s = h.length) &&
                    ((o = p), (p = h), (h = o), (a = l), (l = s), (s = a)),
                  o = [],
                  r = a = l + s;
                r--;

              )
                o.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, i = l + r; i > r; )
                  (c = o[i] + h[r] * p[i - r - 1] + e),
                    (o[i--] = c % 1e7 | 0),
                    (e = (c / 1e7) | 0);
                o[i] = (o[i] + e) % 1e7 | 0;
              }
              for (; !o[--a]; ) o.pop();
              return (
                e ? ++n : o.shift(),
                (t.d = o),
                (t.e = n),
                u ? A(t, f.precision) : t
              );
            }),
          (y.toDecimalPlaces = y.todp =
            function (t, e) {
              var n = this,
                r = n.constructor;
              return ((n = new r(n)), void 0 === t)
                ? n
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : m(e, 0, 8),
                  A(n, t + O(n) + 1, e));
            }),
          (y.toExponential = function (t, e) {
            var n,
              r = this,
              i = r.constructor;
            return (
              void 0 === t
                ? (n = k(r, !0))
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = i.rounding) : m(e, 0, 8),
                  (n = k((r = A(new i(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (y.toFixed = function (t, e) {
            var n,
              r,
              i = this.constructor;
            return void 0 === t
              ? k(this)
              : (m(t, 0, 1e9),
                void 0 === e ? (e = i.rounding) : m(e, 0, 8),
                (n = k(
                  (r = A(new i(this), t + O(this) + 1, e)).abs(),
                  !1,
                  t + O(r) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + n : n);
          }),
          (y.toInteger = y.toint =
            function () {
              var t = this.constructor;
              return A(new t(this), O(this) + 1, t.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (t) {
              var e,
                n,
                r,
                i,
                a,
                l,
                s = this,
                p = s.constructor,
                h = +(t = new p(t));
              if (!t.s) return new p(o);
              if (!(s = new p(s)).s) {
                if (t.s < 1) throw Error(c + "Infinity");
                return s;
              }
              if (s.eq(o)) return s;
              if (((r = p.precision), t.eq(o))) return A(s, r);
              if (((l = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), l)) {
                if ((n = h < 0 ? -h : h) <= 9007199254740991) {
                  for (
                    i = new p(o), e = Math.ceil(r / 7 + 4), u = !1;
                    n % 2 && M((i = i.times(s)).d, e), 0 !== (n = f(n / 2));

                  )
                    M((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new p(o).div(i) : A(i, r);
                }
              } else if (a < 0) throw Error(c + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (i = t.times(S(s, r + 12))),
                (u = !0),
                ((i = x(i)).s = a),
                i
              );
            }),
          (y.toPrecision = function (t, e) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return (
              void 0 === t
                ? ((n = O(i)), (r = k(i, n <= o.toExpNeg || n >= o.toExpPos)))
                : (m(t, 1, 1e9),
                  void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                  (n = O((i = A(new o(i), t, e)))),
                  (r = k(i, t <= n || n <= o.toExpNeg, t))),
              r
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (t, e) {
              var n = this.constructor;
              return (
                void 0 === t
                  ? ((t = n.precision), (e = n.rounding))
                  : (m(t, 1, 1e9),
                    void 0 === e ? (e = n.rounding) : m(e, 0, 8)),
                A(new n(this), t, e)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var t = O(this),
                  e = this.constructor;
                return k(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var b = (function () {
          function t(t, e) {
            var n,
              r = 0,
              i = t.length;
            for (t = t.slice(); i--; )
              (n = t[i] * e + r), (t[i] = n % 1e7 | 0), (r = (n / 1e7) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var i, o;
            if (n != r) o = n > r ? 1 : -1;
            else
              for (i = o = 0; i < n; i++)
                if (t[i] != e[i]) {
                  o = t[i] > e[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = 1e7 * r + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, i, o, a) {
            var u,
              l,
              s,
              f,
              p,
              h,
              d,
              y,
              v,
              m,
              g,
              b,
              x,
              w,
              j,
              S,
              P,
              E,
              k = r.constructor,
              M = r.s == i.s ? 1 : -1,
              T = r.d,
              _ = i.d;
            if (!r.s) return new k(r);
            if (!i.s) throw Error(c + "Division by zero");
            for (
              s = 0,
                l = r.e - i.e,
                P = _.length,
                j = T.length,
                y = (d = new k(M)).d = [];
              _[s] == (T[s] || 0);

            )
              ++s;
            if (
              (_[s] > (T[s] || 0) && --l,
              (b =
                null == o ? (o = k.precision) : a ? o + (O(r) - O(i)) + 1 : o) <
                0)
            )
              return new k(0);
            if (((b = (b / 7 + 2) | 0), (s = 0), 1 == P))
              for (f = 0, _ = _[0], b++; (s < j || f) && b--; s++)
                (x = 1e7 * f + (T[s] || 0)),
                  (y[s] = (x / _) | 0),
                  (f = x % _ | 0);
            else {
              for (
                (f = (1e7 / (_[0] + 1)) | 0) > 1 &&
                  ((_ = t(_, f)),
                  (T = t(T, f)),
                  (P = _.length),
                  (j = T.length)),
                  w = P,
                  m = (v = T.slice(0, P)).length;
                m < P;

              )
                v[m++] = 0;
              (E = _.slice()).unshift(0), (S = _[0]), _[1] >= 1e7 / 2 && ++S;
              do
                (f = 0),
                  (u = e(_, v, P, m)) < 0
                    ? ((g = v[0]),
                      P != m && (g = 1e7 * g + (v[1] || 0)),
                      (f = (g / S) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (h = (p = t(_, f)).length),
                          (m = v.length),
                          1 == (u = e(p, v, h, m)) &&
                            (f--, n(p, P < h ? E : _, h)))
                        : (0 == f && (u = f = 1), (p = _.slice())),
                      (h = p.length) < m && p.unshift(0),
                      n(v, p, m),
                      -1 == u &&
                        ((m = v.length),
                        (u = e(_, v, P, m)) < 1 &&
                          (f++, n(v, P < m ? E : _, m))),
                      (m = v.length))
                    : 0 === u && (f++, (v = [0])),
                  (y[s++] = f),
                  u && v[0] ? (v[m++] = T[w] || 0) : ((v = [T[w]]), (m = 1));
              while ((w++ < j || void 0 !== v[0]) && b--);
            }
            return y[0] || y.shift(), (d.e = l), A(d, a ? o + O(d) + 1 : o);
          };
        })();
        function x(t, e) {
          var n,
            r,
            i,
            a,
            c,
            l = 0,
            f = 0,
            h = t.constructor,
            d = h.precision;
          if (O(t) > 16) throw Error(s + O(t));
          if (!t.s) return new h(o);
          for (
            null == e ? ((u = !1), (c = d)) : (c = e), a = new h(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (f += 5);
          for (
            c += ((Math.log(p(2, f)) / Math.LN10) * 2 + 5) | 0,
              n = r = i = new h(o),
              h.precision = c;
            ;

          ) {
            if (
              ((r = A(r.times(t), c)),
              (n = n.times(++l)),
              g((a = i.plus(b(r, n, c))).d).slice(0, c) === g(i.d).slice(0, c))
            ) {
              for (; f--; ) i = A(i.times(i), c);
              return (h.precision = d), null == e ? ((u = !0), A(i, d)) : i;
            }
            i = a;
          }
        }
        function O(t) {
          for (var e = 7 * t.e, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function w(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              n && (t.precision = n),
              Error(c + "LN10 precision limit exceeded"))
            );
          return A(new t(t.LN10), e);
        }
        function j(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function S(t, e) {
          var n,
            r,
            i,
            a,
            l,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            x = m.precision;
          if (y.s < 1) throw Error(c + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(o)) return new m(0);
          if ((null == e ? ((u = !1), (p = x)) : (p = e), y.eq(10)))
            return null == e && (u = !0), w(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = g(v)).charAt(0)),
            !(15e14 > Math.abs((a = O(y)))))
          )
            return (
              (f = w(m, p + 2, x).times(a + "")),
              (y = S(new m(r + "." + n.slice(1)), p - 10).plus(f)),
              (m.precision = x),
              null == e ? ((u = !0), A(y, x)) : y
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = g((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = O(y),
              r > 1
                ? ((y = new m("0." + n)), a++)
                : (y = new m(r + "." + n.slice(1))),
              s = l = y = b(y.minus(o), y.plus(o), p),
              h = A(y.times(y), p),
              i = 3;
            ;

          ) {
            if (
              ((l = A(l.times(h), p)),
              g((f = s.plus(b(l, new m(i), p))).d).slice(0, p) ===
                g(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(w(m, p + 2, x).times(a + ""))),
                (s = b(s, new m(d), p)),
                (m.precision = x),
                null == e ? ((u = !0), A(s, x)) : s
              );
            (s = f), (i += 2);
          }
        }
        function P(t, e) {
          var n, r, i;
          for (
            (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length),
              r = 0;
            48 === e.charCodeAt(r);

          )
            ++r;
          for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
          if ((e = e.slice(r, i))) {
            if (
              ((i -= r),
              (n = n - r - 1),
              (t.e = f(n / 7)),
              (t.d = []),
              (r = (n + 1) % 7),
              n < 0 && (r += 7),
              r < i)
            ) {
              for (r && t.d.push(+e.slice(0, r)), i -= 7; r < i; )
                t.d.push(+e.slice(r, (r += 7)));
              r = 7 - (e = e.slice(r)).length;
            } else r -= i;
            for (; r--; ) e += "0";
            if ((t.d.push(+e), u && (t.e > d || t.e < -d))) throw Error(s + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function A(t, e, n) {
          var r,
            i,
            o,
            a,
            c,
            l,
            h,
            y,
            v = t.d;
          for (a = 1, o = v[0]; o >= 10; o /= 10) a++;
          if ((r = e - a) < 0) (r += 7), (i = e), (h = v[(y = 0)]);
          else {
            if ((y = Math.ceil((r + 1) / 7)) >= (o = v.length)) return t;
            for (a = 1, h = o = v[y]; o >= 10; o /= 10) a++;
            (r %= 7), (i = r - 7 + a);
          }
          if (
            (void 0 !== n &&
              ((c = (h / (o = p(10, a - i - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== v[y + 1] || h % o),
              (l =
                n < 4
                  ? (c || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (i > 0 ? h / p(10, a - i) : 0) : v[y - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !v[0])
          )
            return (
              l
                ? ((o = O(t)),
                  (v.length = 1),
                  (e = e - o - 1),
                  (v[0] = p(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((v.length = 1), (v[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((v.length = y), (o = 1), y--)
              : ((v.length = y + 1),
                (o = p(10, 7 - r)),
                (v[y] = i > 0 ? ((h / p(10, a - i)) % p(10, i) | 0) * o : 0)),
            l)
          )
            for (;;) {
              if (0 == y) {
                1e7 == (v[0] += o) && ((v[0] = 1), ++t.e);
                break;
              }
              if (((v[y] += o), 1e7 != v[y])) break;
              (v[y--] = 0), (o = 1);
            }
          for (r = v.length; 0 === v[--r]; ) v.pop();
          if (u && (t.e > d || t.e < -d)) throw Error(s + O(t));
          return t;
        }
        function E(t, e) {
          var n,
            r,
            i,
            o,
            a,
            c,
            l,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), u ? A(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (r = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - r))
          ) {
            for (
              (f = a < 0)
                ? ((n = l), (a = -a), (c = p.length))
                : ((n = p), (r = s), (c = l.length)),
                a > (i = Math.max(Math.ceil(d / 7), c) + 2) &&
                  ((a = i), (n.length = 1)),
                n.reverse(),
                i = a;
              i--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (f = (i = l.length) < (c = p.length)) && (c = i), i = 0;
              i < c;
              i++
            )
              if (l[i] != p[i]) {
                f = l[i] < p[i];
                break;
              }
            a = 0;
          }
          for (
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
              c = l.length,
              i = p.length - c;
            i > 0;
            --i
          )
            l[c++] = 0;
          for (i = p.length; i > a; ) {
            if (l[--i] < p[i]) {
              for (o = i; o && 0 === l[--o]; ) l[o] = 1e7 - 1;
              --l[o], (l[i] += 1e7);
            }
            l[i] -= p[i];
          }
          for (; 0 === l[--c]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), u ? A(e, d) : e) : new h(0);
        }
        function k(t, e, n) {
          var r,
            i = O(t),
            o = g(t.d),
            a = o.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + j(r))
                  : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (i < 0 ? "e" : "e+") + i))
              : i < 0
              ? ((o = "0." + j(-i - 1) + o),
                n && (r = n - a) > 0 && (o += j(r)))
              : i >= a
              ? ((o += j(i + 1 - a)),
                n && (r = n - i - 1) > 0 && (o = o + "." + j(r)))
              : ((r = i + 1) < a && (o = o.slice(0, r) + "." + o.slice(r)),
                n &&
                  (r = n - a) > 0 &&
                  (i + 1 === a && (o += "."), (o += j(r)))),
            t.s < 0 ? "-" + o : o
          );
        }
        function M(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function T(t) {
          if (!t || "object" != typeof t) throw Error(c + "Object expected");
          var e,
            n,
            r,
            i = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < i.length; e += 3)
            if (void 0 !== (r = t[(n = i[e])])) {
              if (f(r) === r && r >= i[e + 1] && r <= i[e + 2]) this[n] = r;
              else throw Error(l + n + ": " + r);
            }
          if (void 0 !== (r = t[(n = "LN10")])) {
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(l + n + ": " + r);
          }
          return this;
        }
        ((a = (function t(e) {
          var n, r, i;
          function o(t) {
            if (!(this instanceof o)) return new o(t);
            if (((this.constructor = o), t instanceof o)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(l + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return P(this, t.toString());
            }
            if ("string" != typeof t) throw Error(l + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              h.test(t))
            )
              P(this, t);
            else throw Error(l + t);
          }
          if (
            ((o.prototype = y),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = t),
            (o.config = o.set = T),
            void 0 === e && (e = {}),
            e)
          )
            for (
              n = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              n < i.length;

            )
              e.hasOwnProperty((r = i[n++])) || (e[r] = this[r]);
          return o.config(e), o;
        })(a)).default = a.Decimal =
          a),
          (o = new a(1)),
          void 0 !==
            (r = function () {
              return a;
            }.call(e, n, e, t)) && (t.exports = r);
      })(0);
    },
    10161: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function o(t, e, r, o, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var u = new i(r, o || t, a),
          c = n ? n + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], u])
              : t._events[c].push(u)
            : ((t._events[c] = u), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function u() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (u.prototype.eventNames = function () {
          var t,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (t = this._events))
            e.call(t, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (u.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (u.prototype.emit = function (t, e, r, i, o, a) {
          var u = n ? n + t : t;
          if (!this._events[u]) return !1;
          var c,
            l,
            s = this._events[u],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, r), !0;
              case 4:
                return s.fn.call(s.context, e, r, i), !0;
              case 5:
                return s.fn.call(s.context, e, r, i, o), !0;
              case 6:
                return s.fn.call(s.context, e, r, i, o, a), !0;
            }
            for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
            s.fn.apply(s.context, c);
          } else {
            var p,
              h = s.length;
            for (l = 0; l < h; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, r);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, r, i);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(f - 1); p < f; p++)
                      c[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return o(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return o(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, r, i) {
          var o = n ? n + t : t;
          if (!this._events[o]) return this;
          if (!e) return a(this, o), this;
          var u = this._events[o];
          if (u.fn)
            u.fn !== e ||
              (i && !u.once) ||
              (r && u.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (i && !u[c].once) ||
                (r && u[c].context !== r)) &&
                l.push(u[c]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : a(this, o);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && a(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = n),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    49432: function (t) {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    77603: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      };
    },
    50217: function (t) {
      t.exports = function (t) {
        return t.split("");
      };
    },
    13940: function (t, e, n) {
      var r = n(83043);
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    24303: function (t, e, n) {
      var r = n(26548),
        i = n(92019)(r);
      t.exports = i;
    },
    50080: function (t, e, n) {
      var r = n(24303);
      t.exports = function (t, e) {
        var n = !0;
        return (
          r(t, function (t, r, i) {
            return (n = !!e(t, r, i));
          }),
          n
        );
      };
    },
    2229: function (t, e, n) {
      var r = n(4795);
      t.exports = function (t, e, n) {
        for (var i = -1, o = t.length; ++i < o; ) {
          var a = t[i],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !r(u) : n(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    62034: function (t, e, n) {
      var r = n(65067),
        i = n(95882);
      t.exports = function t(e, n, o, a, u) {
        var c = -1,
          l = e.length;
        for (o || (o = i), u || (u = []); ++c < l; ) {
          var s = e[c];
          n > 0 && o(s)
            ? n > 1
              ? t(s, n - 1, o, a, u)
              : r(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    15308: function (t, e, n) {
      var r = n(55463)();
      t.exports = r;
    },
    26548: function (t, e, n) {
      var r = n(15308),
        i = n(90249);
      t.exports = function (t, e) {
        return t && r(t, e, i);
      };
    },
    84134: function (t) {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    17606: function (t) {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    93401: function (t, e, n) {
      var r = n(24303),
        i = n(67878);
      t.exports = function (t, e) {
        var n = -1,
          o = i(t) ? Array(t.length) : [];
        return (
          r(t, function (t, r, i) {
            o[++n] = e(t, r, i);
          }),
          o
        );
      };
    },
    23813: function (t, e, n) {
      var r = n(50343),
        i = n(13324),
        o = n(68286),
        a = n(93401),
        u = n(27095),
        c = n(47826),
        l = n(18477),
        s = n(23059),
        f = n(86152);
      t.exports = function (t, e, n) {
        e = e.length
          ? r(e, function (t) {
              return f(t)
                ? function (e) {
                    return i(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        return (
          (e = r(e, c(o))),
          u(
            a(t, function (t, n, i) {
              return {
                criteria: r(e, function (e) {
                  return e(t);
                }),
                index: ++p,
                value: t,
              };
            }),
            function (t, e) {
              return l(t, e, n);
            }
          )
        );
      };
    },
    93228: function (t) {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function (t, r, i, o) {
        for (var a = -1, u = n(e((r - t) / (i || 1)), 0), c = Array(u); u--; )
          (c[o ? u : ++a] = t), (t += i);
        return c;
      };
    },
    36060: function (t, e, n) {
      var r = n(23059),
        i = n(43114),
        o = n(75251);
      t.exports = function (t, e) {
        return o(i(t, e, r), t + "");
      };
    },
    86532: function (t, e, n) {
      var r = n(86874),
        i = n(83043),
        o = n(23059),
        a = i
          ? function (t, e) {
              return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : o;
      t.exports = a;
    },
    39872: function (t) {
      t.exports = function (t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n) < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
        return o;
      };
    },
    4751: function (t, e, n) {
      var r = n(24303);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, i) {
            return !(n = e(t, r, i));
          }),
          !!n
        );
      };
    },
    27095: function (t) {
      t.exports = function (t, e) {
        var n = t.length;
        for (t.sort(e); n--; ) t[n] = t[n].value;
        return t;
      };
    },
    23895: function (t, e, n) {
      var r = n(39872);
      t.exports = function (t, e, n) {
        var i = t.length;
        return (n = void 0 === n ? i : n), !e && n >= i ? t : r(t, e, n);
      };
    },
    27520: function (t, e, n) {
      var r = n(4795);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            i = null === t,
            o = t == t,
            a = r(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = r(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (i && u && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!i && !a && !s && t < e) ||
            (s && n && o && !i && !a) ||
            (c && n && o) ||
            (!u && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    18477: function (t, e, n) {
      var r = n(27520);
      t.exports = function (t, e, n) {
        for (
          var i = -1,
            o = t.criteria,
            a = e.criteria,
            u = o.length,
            c = n.length;
          ++i < u;

        ) {
          var l = r(o[i], a[i]);
          if (l) {
            if (i >= c) return l;
            return l * ("desc" == n[i] ? -1 : 1);
          }
        }
        return t.index - e.index;
      };
    },
    92019: function (t, e, n) {
      var r = n(67878);
      t.exports = function (t, e) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return t(n, i);
          for (
            var o = n.length, a = e ? o : -1, u = Object(n);
            (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

          );
          return n;
        };
      };
    },
    55463: function (t) {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
            var c = a[t ? u : ++i];
            if (!1 === n(o[c], c, o)) break;
          }
          return e;
        };
      };
    },
    83126: function (t, e, n) {
      var r = n(23895),
        i = n(99836),
        o = n(8435),
        a = n(66188);
      t.exports = function (t) {
        return function (e) {
          var n = i((e = a(e))) ? o(e) : void 0,
            u = n ? n[0] : e.charAt(0),
            c = n ? r(n, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    98776: function (t, e, n) {
      var r = n(68286),
        i = n(67878),
        o = n(90249);
      t.exports = function (t) {
        return function (e, n, a) {
          var u = Object(e);
          if (!i(e)) {
            var c = r(n, 3);
            (e = o(e)),
              (n = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, n, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    82941: function (t, e, n) {
      var r = n(93228),
        i = n(82406),
        o = n(5707);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && "number" != typeof a && i(e, n, a) && (n = a = void 0),
            (e = o(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = o(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : o(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    83043: function (t, e, n) {
      var r = n(38761),
        i = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = i;
    },
    47353: function (t, e, n) {
      var r = n(60241)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    99836: function (t) {
      var e = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    95882: function (t, e, n) {
      var r = n(50857),
        i = n(79631),
        o = n(86152),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a]);
      };
    },
    82406: function (t, e, n) {
      var r = n(41225),
        i = n(67878),
        o = n(39045),
        a = n(29259);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return (
          ("number" == u
            ? !!(i(n) && o(e, n.length))
            : "string" == u && e in n) && r(n[e], t)
        );
      };
    },
    43114: function (t, e, n) {
      var r = n(49432),
        i = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = o[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = o[a];
            return (l[e] = n(c)), r(t, this, l);
          }
        );
      };
    },
    75251: function (t, e, n) {
      var r = n(86532),
        i = n(97787)(r);
      t.exports = i;
    },
    97787: function (t) {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var i = e(),
            o = 16 - (i - r);
          if (((r = i), o > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    8435: function (t, e, n) {
      var r = n(50217),
        i = n(99836),
        o = n(63344);
      t.exports = function (t) {
        return i(t) ? o(t) : r(t);
      };
    },
    63344: function (t) {
      var e = "\ud800-\udfff",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        r = "\ud83c[\udffb-\udfff]",
        i = "[^" + e + "]",
        o = "(?:\ud83c[\udde6-\uddff]){2}",
        a = "[\ud800-\udbff][\udc00-\udfff]",
        u = "(?:" + n + "|" + r + ")?",
        c = "[\\ufe0e\\ufe0f]?",
        l = "(?:\\u200d(?:" + [i, o, a].join("|") + ")" + c + u + ")*",
        s = RegExp(
          r +
            "(?=" +
            r +
            ")|(?:" +
            [i + n + "?", n, o, a, "[" + e + "]"].join("|") +
            ")" +
            (c + u + l),
          "g"
        );
      t.exports = function (t) {
        return t.match(s) || [];
      };
    },
    86874: function (t) {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    39794: function (t, e, n) {
      var r = n(77603),
        i = n(50080),
        o = n(68286),
        a = n(86152),
        u = n(82406);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : i;
        return n && u(t, e, n) && (e = void 0), c(t, o(e, 3));
      };
    },
    55281: function (t, e, n) {
      var r = n(98776)(n(12982));
      t.exports = r;
    },
    12982: function (t, e, n) {
      var r = n(21359),
        i = n(68286),
        o = n(38101),
        a = Math.max;
      t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
      };
    },
    35838: function (t, e, n) {
      var r = n(62034),
        i = n(16760);
      t.exports = function (t, e) {
        return r(i(t, e), 1);
      };
    },
    4335: function (t, e, n) {
      var r = n(53366),
        i = n(15125);
      t.exports = function (t) {
        return !0 === t || !1 === t || (i(t) && "[object Boolean]" == r(t));
      };
    },
    18149: function (t, e, n) {
      var r = n(88746);
      t.exports = function (t, e) {
        return r(t, e);
      };
    },
    16951: function (t, e, n) {
      var r = n(80537);
      t.exports = function (t) {
        return r(t) && t != +t;
      };
    },
    1842: function (t) {
      t.exports = function (t) {
        return null == t;
      };
    },
    80537: function (t, e, n) {
      var r = n(53366),
        i = n(15125);
      t.exports = function (t) {
        return "number" == typeof t || (i(t) && "[object Number]" == r(t));
      };
    },
    97030: function (t, e, n) {
      var r = n(53366),
        i = n(47353),
        o = n(15125),
        a = Object.prototype,
        u = Function.prototype.toString,
        c = a.hasOwnProperty,
        l = u.call(Object);
      t.exports = function (t) {
        if (!o(t) || "[object Object]" != r(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var n = c.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == l;
      };
    },
    85505: function (t, e, n) {
      var r = n(53366),
        i = n(86152),
        o = n(15125);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!i(t) && o(t) && "[object String]" == r(t))
        );
      };
    },
    56974: function (t) {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    16760: function (t, e, n) {
      var r = n(50343),
        i = n(68286),
        o = n(93401),
        a = n(86152);
      t.exports = function (t, e) {
        return (a(t) ? r : o)(t, i(e, 3));
      };
    },
    34519: function (t, e, n) {
      var r = n(13940),
        i = n(26548),
        o = n(68286);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = o(e, 3)),
          i(t, function (t, i, o) {
            r(n, i, e(t, i, o));
          }),
          n
        );
      };
    },
    71644: function (t, e, n) {
      var r = n(2229),
        i = n(84134),
        o = n(23059);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    65680: function (t, e, n) {
      var r = n(2229),
        i = n(17606),
        o = n(23059);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    2689: function (t, e, n) {
      var r = n(82941)();
      t.exports = r;
    },
    51525: function (t, e, n) {
      var r = n(87064),
        i = n(68286),
        o = n(4751),
        a = n(86152),
        u = n(82406);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : o;
        return n && u(t, e, n) && (e = void 0), c(t, i(e, 3));
      };
    },
    829: function (t, e, n) {
      var r = n(62034),
        i = n(23813),
        o = n(36060),
        a = n(82406),
        u = o(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            i(t, r(e, 1), [])
          );
        });
      t.exports = u;
    },
    12436: function (t, e, n) {
      var r = n(54073),
        i = n(29259);
      t.exports = function (t, e, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          i(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: o, maxWait: e, trailing: a })
        );
      };
    },
    5707: function (t, e, n) {
      var r = n(7642),
        i = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = r(t)) === i || t === -i
            ? (t < 0 ? -1 : 1) * 17976931348623157e292
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    38101: function (t, e, n) {
      var r = n(5707);
      t.exports = function (t) {
        var e = r(t),
          n = e % 1;
        return e == e ? (n ? e - n : e) : 0;
      };
    },
    23779: function (t, e, n) {
      var r = n(83126)("toUpperCase");
      t.exports = r;
    },
    96141: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return U;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(46097),
        a = n(18149),
        u = n.n(a),
        c = n(1842),
        l = n.n(c),
        s = n(42629),
        f = n(19539),
        p = function (t) {
          return null;
        };
      p.displayName = "Cell";
      var h = n(41250),
        d = n(523),
        y = n(10997),
        v = n(72549),
        m = n(27721),
        g = n(69888),
        b = n(99356),
        x = n(89531),
        O = ["x", "y"];
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function j() {
        return (j = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != w(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != w(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == w(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function A(t, e) {
        var n = t.x,
          r = t.y,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (i[n] = t[n]);
            }
            return i;
          })(t, O),
          o = parseInt("".concat(n), 10),
          a = parseInt("".concat(r), 10),
          u = parseInt("".concat(e.height || i.height), 10),
          c = parseInt("".concat(e.width || i.width), 10);
        return P(
          P(P(P(P({}, e), i), o ? { x: o } : {}), a ? { y: a } : {}),
          {},
          { height: u, width: c, name: e.name, radius: e.radius }
        );
      }
      function E(t) {
        return r.createElement(
          x.bn,
          j(
            {
              shapeType: "rectangle",
              propTransformer: A,
              activeClassName: "recharts-active-bar",
            },
            t
          )
        );
      }
      var k = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return function (n, r) {
            if ("number" == typeof t) return t;
            var i = "number" == typeof n;
            return i ? t(n, r) : (i || (0, b.Z)(!1), e);
          };
        },
        M = ["value", "background"];
      function T(t) {
        return (T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function C(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(n), !0).forEach(function (e) {
                $(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function I(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, z(r.key), r);
        }
      }
      function N() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (N = function () {
          return !!t;
        })();
      }
      function B(t) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function L(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function R(t, e) {
        return (R = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function $(t, e, n) {
        return (
          (e = z(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function z(t) {
        var e = (function (t, e) {
          if ("object" != T(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != T(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == T(e) ? e : String(e);
      }
      var U = (function (t) {
        var e, n;
        function a() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, a);
          for (
            var t, e, n, r = arguments.length, i = Array(r), o = 0;
            o < r;
            o++
          )
            i[o] = arguments[o];
          return (
            (e = a),
            (n = [].concat(i)),
            (e = B(e)),
            (t = (function (t, e) {
              if (e && ("object" === T(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return L(t);
            })(
              this,
              N()
                ? Reflect.construct(e, n || [], B(this).constructor)
                : e.apply(this, n)
            )),
            $(L(t), "state", { isAnimationFinished: !1 }),
            $(L(t), "id", (0, d.EL)("recharts-bar-")),
            $(L(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            $(L(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && R(t, e);
          })(a, t),
          (e = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  n = this.props,
                  i = n.shape,
                  o = n.dataKey,
                  a = n.activeIndex,
                  u = n.activeBar,
                  c = (0, y.L6)(this.props, !1);
                return (
                  t &&
                  t.map(function (t, n) {
                    var l = n === a,
                      f = D(
                        D(D({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: l ? u : i,
                          index: n,
                          dataKey: o,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd,
                        }
                      );
                    return r.createElement(
                      s.m,
                      _(
                        { className: "recharts-bar-rectangle" },
                        (0, g.bw)(e.props, t, n),
                        {
                          key: "rectangle-"
                            .concat(null == t ? void 0 : t.x, "-")
                            .concat(null == t ? void 0 : t.y, "-")
                            .concat(null == t ? void 0 : t.value),
                        }
                      ),
                      r.createElement(E, f)
                    );
                  })
                );
              },
            },
            {
              key: "renderRectanglesWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.data,
                  i = e.layout,
                  a = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return r.createElement(
                  o.ZP,
                  {
                    begin: u,
                    duration: c,
                    isActive: a,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "bar-".concat(f),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var o = e.t,
                      a = n.map(function (t, e) {
                        var n = p && p[e];
                        if (n) {
                          var r = (0, d.k4)(n.x, t.x),
                            a = (0, d.k4)(n.y, t.y),
                            u = (0, d.k4)(n.width, t.width),
                            c = (0, d.k4)(n.height, t.height);
                          return D(
                            D({}, t),
                            {},
                            { x: r(o), y: a(o), width: u(o), height: c(o) }
                          );
                        }
                        if ("horizontal" === i) {
                          var l = (0, d.k4)(0, t.height)(o);
                          return D(
                            D({}, t),
                            {},
                            { y: t.y + t.height - l, height: l }
                          );
                        }
                        var s = (0, d.k4)(0, t.width)(o);
                        return D(D({}, t), {}, { width: s });
                      });
                    return r.createElement(
                      s.m,
                      null,
                      t.renderRectanglesStatically(a)
                    );
                  }
                );
              },
            },
            {
              key: "renderRectangles",
              value: function () {
                var t = this.props,
                  e = t.data,
                  n = t.isAnimationActive,
                  r = this.state.prevData;
                return n && e && e.length && (!r || !u()(r, e))
                  ? this.renderRectanglesWithAnimation()
                  : this.renderRectanglesStatically(e);
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.data,
                  i = e.dataKey,
                  o = e.activeIndex,
                  a = (0, y.L6)(this.props.background, !1);
                return n.map(function (e, n) {
                  e.value;
                  var u = e.background,
                    c = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            i = {},
                            o = Object.keys(t);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (i[n] = t[n]);
                      }
                      return i;
                    })(e, M);
                  if (!u) return null;
                  var l = D(
                    D(
                      D(D(D({}, c), {}, { fill: "#eee" }, u), a),
                      (0, g.bw)(t.props, e, n)
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: i,
                      index: n,
                      key: "background-bar-".concat(n),
                      className: "recharts-bar-background-rectangle",
                    }
                  );
                  return r.createElement(
                    E,
                    _({ option: t.props.background, isActive: n === o }, l)
                  );
                });
              },
            },
            {
              key: "renderErrorBar",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var n = this.props,
                  i = n.data,
                  o = n.xAxis,
                  a = n.yAxis,
                  u = n.layout,
                  c = n.children,
                  l = (0, y.NN)(c, f.W);
                if (!l) return null;
                var p = "vertical" === u ? i[0].height / 2 : i[0].width / 2,
                  h = function (t, e) {
                    var n = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: n,
                      errorVal: (0, m.F$)(t, e),
                    };
                  };
                return r.createElement(
                  s.m,
                  { clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
                  l.map(function (t) {
                    return r.cloneElement(t, {
                      key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
                      data: i,
                      xAxis: o,
                      yAxis: a,
                      layout: u,
                      offset: p,
                      dataPointFormatter: h,
                    });
                  })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  n = t.data,
                  o = t.className,
                  a = t.xAxis,
                  u = t.yAxis,
                  c = t.left,
                  f = t.top,
                  p = t.width,
                  d = t.height,
                  y = t.isAnimationActive,
                  v = t.background,
                  m = t.id;
                if (e || !n || !n.length) return null;
                var g = this.state.isAnimationFinished,
                  b = (0, i.Z)("recharts-bar", o),
                  x = a && a.allowDataOverflow,
                  O = u && u.allowDataOverflow,
                  w = x || O,
                  j = l()(m) ? this.id : m;
                return r.createElement(
                  s.m,
                  { className: b },
                  x || O
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          r.createElement("rect", {
                            x: x ? c : c - p / 2,
                            y: O ? f : f - d / 2,
                            width: x ? p : 2 * p,
                            height: O ? d : 2 * d,
                          })
                        )
                      )
                    : null,
                  r.createElement(
                    s.m,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: w ? "url(#clipPath-".concat(j, ")") : null,
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles()
                  ),
                  this.renderErrorBar(w, j),
                  (!y || g) && h.e.renderCallByParent(this.props, n)
                );
              },
            },
          ]),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curData: t.data,
                      prevData: e.curData,
                    }
                  : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
              },
            },
          ]),
          e && I(a.prototype, e),
          n && I(a, n),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      $(U, "displayName", "Bar"),
        $(U, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          legendType: "rect",
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: "vertical",
          activeBar: !1,
          isAnimationActive: !v.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "ease",
        }),
        $(U, "getComposedData", function (t) {
          var e = t.props,
            n = t.item,
            r = t.barPosition,
            i = t.bandSize,
            o = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.stackedData,
            s = t.dataStartIndex,
            f = t.displayedData,
            h = t.offset,
            v = (0, m.Bu)(r, n);
          if (!v) return null;
          var g = e.layout,
            b = n.props,
            x = b.dataKey,
            O = b.children,
            w = b.minPointSize,
            j = "horizontal" === g ? a : o,
            S = l ? j.scale.domain() : null,
            P = (0, m.Yj)({ numericAxis: j }),
            A = (0, y.NN)(O, p),
            E = f.map(function (t, e) {
              l
                ? (f = (0, m.Vv)(l[s + e], S))
                : Array.isArray((f = (0, m.F$)(t, x))) || (f = [P, f]);
              var r = k(w, U.defaultProps.minPointSize)(f[1], e);
              if ("horizontal" === g) {
                var f,
                  p,
                  h,
                  y,
                  b,
                  O,
                  j,
                  E = [a.scale(f[0]), a.scale(f[1])],
                  M = E[0],
                  T = E[1];
                (p = (0, m.Fy)({
                  axis: o,
                  ticks: u,
                  bandSize: i,
                  offset: v.offset,
                  entry: t,
                  index: e,
                })),
                  (h =
                    null !== (j = null != T ? T : M) && void 0 !== j
                      ? j
                      : void 0),
                  (y = v.size);
                var _ = M - T;
                if (
                  ((b = Number.isNaN(_) ? 0 : _),
                  (O = { x: p, y: a.y, width: y, height: a.height }),
                  Math.abs(r) > 0 && Math.abs(b) < Math.abs(r))
                ) {
                  var C = (0, d.uY)(b || r) * (Math.abs(r) - Math.abs(b));
                  (h -= C), (b += C);
                }
              } else {
                var I = [o.scale(f[0]), o.scale(f[1])],
                  N = I[0],
                  B = I[1];
                if (
                  ((p = N),
                  (h = (0, m.Fy)({
                    axis: a,
                    ticks: c,
                    bandSize: i,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (y = B - N),
                  (b = v.size),
                  (O = { x: o.x, y: h, width: o.width, height: b }),
                  Math.abs(r) > 0 && Math.abs(y) < Math.abs(r))
                ) {
                  var L = (0, d.uY)(y || r) * (Math.abs(r) - Math.abs(y));
                  y += L;
                }
              }
              return D(
                D(
                  D({}, t),
                  {},
                  {
                    x: p,
                    y: h,
                    width: y,
                    height: b,
                    value: l ? f : f[1],
                    payload: t,
                    background: O,
                  },
                  A && A[e] && A[e].props
                ),
                {},
                {
                  tooltipPayload: [(0, m.Qo)(n, t)],
                  tooltipPosition: { x: p + y / 2, y: h + b / 2 },
                }
              );
            });
          return D({ data: E, layout: g }, h);
        });
    },
    33426: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return R;
        },
      });
      var r = n(2784),
        i = n(61049),
        o = n.n(i),
        a = n(72579),
        u = n.n(a),
        c = n(29112),
        l = n(21664),
        s = n(42629),
        f = n(86731),
        p = n(7302),
        h = n(523),
        d = n(69888),
        y = n(10997),
        v = n(45570),
        m = n(72549),
        g = n(85742);
      function b(t, e, n) {
        if (e < 1) return [];
        if (1 === e && void 0 === n) return t;
        for (var r = [], i = 0; i < t.length; i += e) {
          if (void 0 !== n && !0 !== n(t[i])) return;
          r.push(t[i]);
        }
        return r;
      }
      function x(t, e, n, r, i) {
        if (t * e < t * r || t * e > t * i) return !1;
        var o = n();
        return t * (e - (t * o) / 2 - r) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
      }
      function O(t) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function w(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != O(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != O(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == O(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var S = ["viewBox"],
        P = ["viewBox"],
        A = ["ticks"];
      function E(t) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                B(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function C(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, L(r.key), r);
        }
      }
      function D() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (D = function () {
          return !!t;
        })();
      }
      function I(t) {
        return (I = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function N(t, e) {
        return (N = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function B(t, e, n) {
        return (
          (e = L(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function L(t) {
        var e = (function (t, e) {
          if ("object" != E(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != E(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == E(e) ? e : String(e);
      }
      var R = (function (t) {
        var e, n;
        function i(t) {
          var e, n, r;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, i),
            (n = i),
            (r = [t]),
            (n = I(n)),
            ((e = (function (t, e) {
              if (e && ("object" === E(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              D()
                ? Reflect.construct(n, r || [], I(this).constructor)
                : n.apply(this, r)
            )).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && N(t, e);
          })(i, t),
          (e = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var n = t.viewBox,
                  r = _(t, S),
                  i = this.props,
                  o = i.viewBox,
                  a = _(i, P);
                return (
                  !(0, l.w)(n, o) || !(0, l.w)(r, a) || !(0, l.w)(e, this.state)
                );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var t = this.layerReference;
                if (t) {
                  var e = t.getElementsByClassName(
                    "recharts-cartesian-axis-tick-value"
                  )[0];
                  e &&
                    this.setState({
                      fontSize: window.getComputedStyle(e).fontSize,
                      letterSpacing: window.getComputedStyle(e).letterSpacing,
                    });
                }
              },
            },
            {
              key: "getTickLineCoord",
              value: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  u = this.props,
                  c = u.x,
                  l = u.y,
                  s = u.width,
                  f = u.height,
                  p = u.orientation,
                  d = u.tickSize,
                  y = u.mirror,
                  v = u.tickMargin,
                  m = y ? -1 : 1,
                  g = t.tickSize || d,
                  b = (0, h.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +!y * f) - m * g) - m * v),
                      (o = b);
                    break;
                  case "left":
                    (r = i = t.coordinate),
                      (o = (e = (n = c + +!y * s) - m * g) - m * v),
                      (a = b);
                    break;
                  case "right":
                    (r = i = t.coordinate),
                      (o = (e = (n = c + +y * s) + m * g) + m * v),
                      (a = b);
                    break;
                  default:
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +y * f) + m * g) + m * v),
                      (o = b);
                }
                return {
                  line: { x1: e, y1: r, x2: n, y2: i },
                  tick: { x: o, y: a },
                };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t,
                  e = this.props,
                  n = e.orientation,
                  r = e.mirror;
                switch (n) {
                  case "left":
                    t = r ? "start" : "end";
                    break;
                  case "right":
                    t = r ? "end" : "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getTickVerticalAnchor",
              value: function () {
                var t = this.props,
                  e = t.orientation,
                  n = t.mirror,
                  r = "end";
                switch (e) {
                  case "left":
                  case "right":
                    r = "middle";
                    break;
                  case "top":
                    r = n ? "start" : "end";
                    break;
                  default:
                    r = n ? "end" : "start";
                }
                return r;
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  i = t.width,
                  o = t.height,
                  a = t.orientation,
                  l = t.mirror,
                  s = t.axisLine,
                  f = T(
                    T(T({}, (0, y.L6)(this.props, !1)), (0, y.L6)(s, !1)),
                    {},
                    { fill: "none" }
                  );
                if ("top" === a || "bottom" === a) {
                  var p = +(("top" === a && !l) || ("bottom" === a && l));
                  f = T(
                    T({}, f),
                    {},
                    { x1: e, y1: n + p * o, x2: e + i, y2: n + p * o }
                  );
                } else {
                  var h = +(("left" === a && !l) || ("right" === a && l));
                  f = T(
                    T({}, f),
                    {},
                    { x1: e + h * i, y1: n, x2: e + h * i, y2: n + o }
                  );
                }
                return r.createElement(
                  "line",
                  k({}, f, {
                    className: (0, c.Z)(
                      "recharts-cartesian-axis-line",
                      u()(s, "className")
                    ),
                  })
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, e, n) {
                var a = this,
                  l = this.props,
                  f = l.tickLine,
                  p = l.stroke,
                  O = l.tick,
                  w = l.tickFormatter,
                  S = l.unit,
                  P = (function (t, e, n) {
                    var r,
                      i,
                      a,
                      u,
                      c,
                      l = t.tick,
                      s = t.ticks,
                      f = t.viewBox,
                      p = t.minTickGap,
                      d = t.orientation,
                      y = t.interval,
                      O = t.tickFormatter,
                      w = t.unit,
                      S = t.angle;
                    if (!s || !s.length || !l) return [];
                    if ((0, h.hj)(y) || m.x.isSsr)
                      return b(
                        s,
                        ("number" == typeof y && (0, h.hj)(y) ? y : 0) + 1
                      );
                    var P = "top" === d || "bottom" === d ? "width" : "height",
                      A =
                        w && "width" === P
                          ? (0, v.xE)(w, { fontSize: e, letterSpacing: n })
                          : { width: 0, height: 0 },
                      E = function (t, r) {
                        var i,
                          a,
                          u = o()(O) ? O(t.value, r) : t.value;
                        return "width" === P
                          ? ((a = {
                              width:
                                (i = (0, v.xE)(u, {
                                  fontSize: e,
                                  letterSpacing: n,
                                })).width + A.width,
                              height: i.height + A.height,
                            }),
                            (0, g.xE)(a, S))
                          : (0, v.xE)(u, { fontSize: e, letterSpacing: n })[P];
                      },
                      k =
                        s.length >= 2
                          ? (0, h.uY)(s[1].coordinate - s[0].coordinate)
                          : 1,
                      M =
                        ((r = "width" === P),
                        (i = f.x),
                        (a = f.y),
                        (u = f.width),
                        (c = f.height),
                        1 === k
                          ? { start: r ? i : a, end: r ? i + u : a + c }
                          : { start: r ? i + u : a + c, end: r ? i : a });
                    return "equidistantPreserveStart" === y
                      ? (function (t, e, n, r, i) {
                          for (
                            var o,
                              a = (r || []).slice(),
                              u = e.start,
                              c = e.end,
                              l = 0,
                              s = 1,
                              f = u;
                            s <= a.length;

                          )
                            if (
                              (o = (function () {
                                var e,
                                  o = null == r ? void 0 : r[l];
                                if (void 0 === o) return { v: b(r, s) };
                                var a = l,
                                  p = function () {
                                    return void 0 === e && (e = n(o, a)), e;
                                  },
                                  h = o.coordinate,
                                  d = 0 === l || x(t, h, p, f, c);
                                d || ((l = 0), (f = u), (s += 1)),
                                  d && ((f = h + t * (p() / 2 + i)), (l += s));
                              })())
                            )
                              return o.v;
                          return [];
                        })(k, M, E, s, p)
                      : ("preserveStart" === y || "preserveStartEnd" === y
                          ? (function (t, e, n, r, i, o) {
                              var a = (r || []).slice(),
                                u = a.length,
                                c = e.start,
                                l = e.end;
                              if (o) {
                                var s = r[u - 1],
                                  f = n(s, u - 1),
                                  p = t * (s.coordinate + (t * f) / 2 - l);
                                (a[u - 1] = s =
                                  j(
                                    j({}, s),
                                    {},
                                    {
                                      tickCoord:
                                        p > 0
                                          ? s.coordinate - p * t
                                          : s.coordinate,
                                    }
                                  )),
                                  x(
                                    t,
                                    s.tickCoord,
                                    function () {
                                      return f;
                                    },
                                    c,
                                    l
                                  ) &&
                                    ((l = s.tickCoord - t * (f / 2 + i)),
                                    (a[u - 1] = j(
                                      j({}, s),
                                      {},
                                      { isShow: !0 }
                                    )));
                              }
                              for (
                                var h = o ? u - 1 : u,
                                  d = function (e) {
                                    var r,
                                      o = a[e],
                                      u = function () {
                                        return void 0 === r && (r = n(o, e)), r;
                                      };
                                    if (0 === e) {
                                      var s =
                                        t * (o.coordinate - (t * u()) / 2 - c);
                                      a[e] = o = j(
                                        j({}, o),
                                        {},
                                        {
                                          tickCoord:
                                            s < 0
                                              ? o.coordinate - s * t
                                              : o.coordinate,
                                        }
                                      );
                                    } else
                                      a[e] = o = j(
                                        j({}, o),
                                        {},
                                        { tickCoord: o.coordinate }
                                      );
                                    x(t, o.tickCoord, u, c, l) &&
                                      ((c = o.tickCoord + t * (u() / 2 + i)),
                                      (a[e] = j(j({}, o), {}, { isShow: !0 })));
                                  },
                                  y = 0;
                                y < h;
                                y++
                              )
                                d(y);
                              return a;
                            })(k, M, E, s, p, "preserveStartEnd" === y)
                          : (function (t, e, n, r, i) {
                              for (
                                var o = (r || []).slice(),
                                  a = o.length,
                                  u = e.start,
                                  c = e.end,
                                  l = function (e) {
                                    var r,
                                      l = o[e],
                                      s = function () {
                                        return void 0 === r && (r = n(l, e)), r;
                                      };
                                    if (e === a - 1) {
                                      var f =
                                        t * (l.coordinate + (t * s()) / 2 - c);
                                      o[e] = l = j(
                                        j({}, l),
                                        {},
                                        {
                                          tickCoord:
                                            f > 0
                                              ? l.coordinate - f * t
                                              : l.coordinate,
                                        }
                                      );
                                    } else
                                      o[e] = l = j(
                                        j({}, l),
                                        {},
                                        { tickCoord: l.coordinate }
                                      );
                                    x(t, l.tickCoord, s, u, c) &&
                                      ((c = l.tickCoord - t * (s() / 2 + i)),
                                      (o[e] = j(j({}, l), {}, { isShow: !0 })));
                                  },
                                  s = a - 1;
                                s >= 0;
                                s--
                              )
                                l(s);
                              return o;
                            })(k, M, E, s, p)
                        ).filter(function (t) {
                          return t.isShow;
                        });
                  })(T(T({}, this.props), {}, { ticks: t }), e, n),
                  A = this.getTickTextAnchor(),
                  E = this.getTickVerticalAnchor(),
                  M = (0, y.L6)(this.props, !1),
                  _ = (0, y.L6)(O, !1),
                  C = T(T({}, M), {}, { fill: "none" }, (0, y.L6)(f, !1)),
                  D = P.map(function (t, e) {
                    var n = a.getTickLineCoord(t),
                      l = n.line,
                      h = n.tick,
                      y = T(
                        T(
                          T(
                            T({ textAnchor: A, verticalAnchor: E }, M),
                            {},
                            { stroke: "none", fill: p },
                            _
                          ),
                          h
                        ),
                        {},
                        {
                          index: e,
                          payload: t,
                          visibleTicksCount: P.length,
                          tickFormatter: w,
                        }
                      );
                    return r.createElement(
                      s.m,
                      k(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, d.bw)(a.props, t, e)
                      ),
                      f &&
                        r.createElement(
                          "line",
                          k({}, C, l, {
                            className: (0, c.Z)(
                              "recharts-cartesian-axis-tick-line",
                              u()(f, "className")
                            ),
                          })
                        ),
                      O &&
                        i.renderTickItem(
                          O,
                          y,
                          ""
                            .concat(o()(w) ? w(t.value, e) : t.value)
                            .concat(S || "")
                        )
                    );
                  });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  D
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.axisLine,
                  i = e.width,
                  a = e.height,
                  u = e.ticksGenerator,
                  l = e.className;
                if (e.hide) return null;
                var f = this.props,
                  h = f.ticks,
                  d = _(f, A),
                  y = h;
                return (o()(u) && (y = u(h && h.length > 0 ? this.props : d)),
                i <= 0 || a <= 0 || !y || !y.length)
                  ? null
                  : r.createElement(
                      s.m,
                      {
                        className: (0, c.Z)("recharts-cartesian-axis", l),
                        ref: function (e) {
                          t.layerReference = e;
                        },
                      },
                      n && this.renderAxisLine(),
                      this.renderTicks(
                        y,
                        this.state.fontSize,
                        this.state.letterSpacing
                      ),
                      p._.renderCallByParent(this.props)
                    );
              },
            },
          ]),
          (n = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : o()(t)
                  ? t(e)
                  : r.createElement(
                      f.x,
                      k({}, e, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      n
                    );
              },
            },
          ]),
          e && C(i.prototype, e),
          n && C(i, n),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(r.Component);
      B(R, "displayName", "CartesianAxis"),
        B(R, "defaultProps", {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          viewBox: { x: 0, y: 0, width: 0, height: 0 },
          orientation: "bottom",
          ticks: [],
          stroke: "#666",
          tickLine: !0,
          axisLine: !0,
          tick: !0,
          mirror: !1,
          minTickGap: 5,
          tickSize: 6,
          tickMargin: 2,
          interval: "preserveEnd",
        });
    },
    19539: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return s;
        },
      });
      var r = n(2784),
        i = n(99356),
        o = n(42629),
        a = n(10997),
        u = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t) {
        var e = t.offset,
          n = t.layout,
          s = t.width,
          f = t.dataKey,
          p = t.data,
          h = t.dataPointFormatter,
          d = t.xAxis,
          y = t.yAxis,
          v = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (i[n] = t[n]);
            }
            return i;
          })(t, u),
          m = (0, a.L6)(v, !1);
        "x" === t.direction && "number" !== d.type && (0, i.Z)(!1);
        var g = p.map(function (t) {
          var i,
            a,
            u = h(t, f),
            p = u.x,
            v = u.y,
            g = u.value,
            b = u.errorVal;
          if (!b) return null;
          var x = [];
          if (Array.isArray(b)) {
            var O =
              (function (t) {
                if (Array.isArray(t)) return t;
              })(b) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      o = (n = n.call(t)).next;
                      !(c = (r = o.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (i = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw i;
                    }
                  }
                  return u;
                }
              })(b, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return l(t, 2);
                }
              })(b, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })();
            (i = O[0]), (a = O[1]);
          } else i = a = b;
          if ("vertical" === n) {
            var w = d.scale,
              j = v + e,
              S = j + s,
              P = j - s,
              A = w(g - i),
              E = w(g + a);
            x.push({ x1: E, y1: S, x2: E, y2: P }),
              x.push({ x1: A, y1: j, x2: E, y2: j }),
              x.push({ x1: A, y1: S, x2: A, y2: P });
          } else if ("horizontal" === n) {
            var k = y.scale,
              M = p + e,
              T = M - s,
              _ = M + s,
              C = k(g - i),
              D = k(g + a);
            x.push({ x1: T, y1: D, x2: _, y2: D }),
              x.push({ x1: M, y1: C, x2: M, y2: D }),
              x.push({ x1: T, y1: C, x2: _, y2: C });
          }
          return r.createElement(
            o.m,
            c(
              {
                className: "recharts-errorBar",
                key: "bar-".concat(
                  x.map(function (t) {
                    return ""
                      .concat(t.x1, "-")
                      .concat(t.x2, "-")
                      .concat(t.y1, "-")
                      .concat(t.y2);
                  })
                ),
              },
              m
            ),
            x.map(function (t) {
              return r.createElement(
                "line",
                c({}, t, {
                  key: "line-"
                    .concat(t.x1, "-")
                    .concat(t.x2, "-")
                    .concat(t.y1, "-")
                    .concat(t.y2),
                })
              );
            })
          );
        });
        return r.createElement(o.m, { className: "recharts-errorBars" }, g);
      }
      (s.defaultProps = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        (s.displayName = "ErrorBar");
    },
    14799: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return l;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(94533),
        a = n(33426),
        u = n(27721);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = function (t) {
        var e = t.xAxisId,
          n = (0, o.zn)(),
          l = (0, o.Mw)(),
          s = (0, o.bH)(e);
        return null == s
          ? null
          : r.createElement(
              a.O,
              c({}, s, {
                className: (0, i.Z)(
                  "recharts-".concat(s.axisType, " ").concat(s.axisType),
                  s.className
                ),
                viewBox: { x: 0, y: 0, width: n, height: l },
                ticksGenerator: function (t) {
                  return (0, u.uY)(t, !0);
                },
              })
            );
      };
      (l.displayName = "XAxis"),
        (l.defaultProps = {
          allowDecimals: !0,
          hide: !1,
          orientation: "bottom",
          width: 0,
          height: 30,
          mirror: !1,
          xAxisId: 0,
          tickCount: 5,
          type: "category",
          padding: { left: 0, right: 0 },
          allowDataOverflow: !1,
          scale: "auto",
          reversed: !1,
          allowDuplicatedCategory: !0,
        });
    },
    84645: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return l;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(94533),
        a = n(33426),
        u = n(27721);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = function (t) {
        var e = t.yAxisId,
          n = (0, o.zn)(),
          l = (0, o.Mw)(),
          s = (0, o.Ud)(e);
        return null == s
          ? null
          : r.createElement(
              a.O,
              c({}, s, {
                className: (0, i.Z)(
                  "recharts-".concat(s.axisType, " ").concat(s.axisType),
                  s.className
                ),
                viewBox: { x: 0, y: 0, width: n, height: l },
                ticksGenerator: function (t) {
                  return (0, u.uY)(t, !0);
                },
              })
            );
      };
      (l.displayName = "YAxis"),
        (l.defaultProps = {
          allowDuplicatedCategory: !0,
          allowDecimals: !0,
          hide: !1,
          orientation: "left",
          width: 60,
          height: 0,
          mirror: !1,
          yAxisId: 0,
          tickCount: 5,
          type: "number",
          padding: { top: 0, bottom: 0 },
          allowDataOverflow: !1,
          scale: "auto",
          reversed: !1,
        });
    },
    32605: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return eg;
        },
      });
      var r = n(2784),
        i = n(1842),
        o = n.n(i),
        a = n(61049),
        u = n.n(a),
        c = n(2689),
        l = n.n(c),
        s = n(72579),
        f = n.n(s),
        p = n(829),
        h = n.n(p),
        d = n(12436),
        y = n.n(d),
        v = n(29112),
        m = n(99356),
        g = n(1099),
        b = n(42629),
        x = n(44894),
        O = n(28335),
        w = n(81145),
        j = n(55597),
        S = n(10997),
        P = n(18682),
        A = n(86731),
        E = n(27721),
        k = n(523);
      function M(t) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function T(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                C(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function C(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != M(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != M(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == M(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var D = ["Webkit", "Moz", "O", "ms"],
        I = function (t, e) {
          if (!t) return null;
          var n = t.replace(/(\w)/, function (t) {
              return t.toUpperCase();
            }),
            r = D.reduce(function (t, r) {
              return _(_({}, t), {}, C({}, r + n, e));
            }, {});
          return (r[t] = e), r;
        };
      function N(t) {
        return (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function L(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(n), !0).forEach(function (e) {
                q(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, W(r.key), r);
        }
      }
      function z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (z = function () {
          return !!t;
        })();
      }
      function U(t) {
        return (U = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function F(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Z(t, e) {
        return (Z = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function q(t, e, n) {
        return (
          (e = W(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function W(t) {
        var e = (function (t, e) {
          if ("object" != N(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != N(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == N(e) ? e : String(e);
      }
      var Y = function (t) {
          var e = t.data,
            n = t.startIndex,
            r = t.endIndex,
            i = t.x,
            o = t.width,
            a = t.travellerWidth;
          if (!e || !e.length) return {};
          var u = e.length,
            c = (0, P.x)()
              .domain(l()(0, u))
              .range([i, i + o - a]),
            s = c.domain().map(function (t) {
              return c(t);
            });
          return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: c(n),
            endX: c(r),
            scale: c,
            scaleValues: s,
          };
        },
        H = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        X = (function (t) {
          var e, n;
          function i(t) {
            var e, n, r;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, i),
              (n = i),
              (r = [t]),
              (n = U(n)),
              (e = (function (t, e) {
                if (e && ("object" === N(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return F(t);
              })(
                this,
                z()
                  ? Reflect.construct(n, r || [], U(this).constructor)
                  : n.apply(this, r)
              )),
              q(F(e), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              q(F(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              q(F(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      n = t.endIndex,
                      r = t.onDragEnd,
                      i = t.startIndex;
                    null == r || r({ endIndex: n, startIndex: i });
                  }
                ),
                  e.detachDragEndListener();
              }),
              q(F(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut
                  ));
              }),
              q(F(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              q(F(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              q(F(e), "handleSlideDragStart", function (t) {
                var n = H(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: n.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(F(e), "startX"),
                endX: e.handleTravellerDragStart.bind(F(e), "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Z(t, e);
            })(i, t),
            (e = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    n = t.endX,
                    r = this.state.scaleValues,
                    o = this.props,
                    a = o.gap,
                    u = o.data.length - 1,
                    c = i.getIndexInRange(r, Math.min(e, n)),
                    l = i.getIndexInRange(r, Math.max(e, n));
                  return {
                    startIndex: c - (c % a),
                    endIndex: l === u ? u : l - (l % a),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    i = e.dataKey,
                    o = (0, E.F$)(n[t], i, t);
                  return u()(r) ? r(o, t) : o;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
                    window.removeEventListener(
                      "touchend",
                      this.handleDragEnd,
                      !0
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.handleDrag,
                      !0
                    );
                },
              },
              {
                key: "handleSlideDrag",
                value: function (t) {
                  var e = this.state,
                    n = e.slideMoveStartX,
                    r = e.startX,
                    i = e.endX,
                    o = this.props,
                    a = o.x,
                    u = o.width,
                    c = o.travellerWidth,
                    l = o.startIndex,
                    s = o.endIndex,
                    f = o.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + u - c - i, a + u - c - r))
                    : p < 0 && (p = Math.max(p, a - r, a - i));
                  var h = this.getIndex({ startX: r + p, endX: i + p });
                  (h.startIndex !== l || h.endIndex !== s) && f && f(h),
                    this.setState({
                      startX: r + p,
                      endX: i + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var n = H(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: n.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e = this.state,
                    n = e.brushMoveStartX,
                    r = e.movingTravellerId,
                    i = e.endX,
                    o = e.startX,
                    a = this.state[r],
                    u = this.props,
                    c = u.x,
                    l = u.width,
                    s = u.travellerWidth,
                    f = u.onChange,
                    p = u.gap,
                    h = u.data,
                    d = { startX: this.state.startX, endX: this.state.endX },
                    y = t.pageX - n;
                  y > 0
                    ? (y = Math.min(y, c + l - s - a))
                    : y < 0 && (y = Math.max(y, c - a)),
                    (d[r] = a + y);
                  var v = this.getIndex(d),
                    m = v.startIndex,
                    g = v.endIndex,
                    b = function () {
                      var t = h.length - 1;
                      return (
                        ("startX" === r && (i > o ? m % p == 0 : g % p == 0)) ||
                        (i < o && g === t) ||
                        ("endX" === r && (i > o ? g % p == 0 : m % p == 0)) ||
                        (i > o && g === t)
                      );
                    };
                  this.setState(
                    q(q({}, r, a + y), "brushMoveStartX", t.pageX),
                    function () {
                      f && b() && f(v);
                    }
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var n = this,
                    r = this.state,
                    i = r.scaleValues,
                    o = r.startX,
                    a = r.endX,
                    u = this.state[e],
                    c = i.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (-1 !== l && !(l >= i.length)) {
                      var s = i[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= o) ||
                        this.setState(q({}, e, s), function () {
                          n.props.onChange(
                            n.getIndex({
                              startX: n.state.startX,
                              endX: n.state.endX,
                            })
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return r.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: n,
                    width: i,
                    height: o,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = r.Children.only(u);
                  return l
                    ? r.cloneElement(l, {
                        x: e,
                        y: n,
                        width: i,
                        height: o,
                        margin: c,
                        compact: !0,
                        data: a,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var n,
                    o,
                    a = this,
                    u = this.props,
                    c = u.y,
                    l = u.travellerWidth,
                    s = u.height,
                    f = u.traveller,
                    p = u.ariaLabel,
                    h = u.data,
                    d = u.startIndex,
                    y = u.endIndex,
                    v = Math.max(t, this.props.x),
                    m = R(
                      R({}, (0, S.L6)(this.props, !1)),
                      {},
                      { x: v, y: c, width: l, height: s }
                    ),
                    g =
                      p ||
                      "Min value: "
                        .concat(
                          null === (n = h[d]) || void 0 === n ? void 0 : n.name,
                          ", Max value: "
                        )
                        .concat(
                          null === (o = h[y]) || void 0 === o ? void 0 : o.name
                        );
                  return r.createElement(
                    b.m,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": g,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          a.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e
                          ));
                      },
                      onFocus: function () {
                        a.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        a.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    i.renderTraveller(f, m)
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var n = this.props,
                    i = n.y,
                    o = n.height,
                    a = n.stroke,
                    u = n.travellerWidth;
                  return r.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: a,
                    fillOpacity: 0.2,
                    x: Math.min(t, e) + u,
                    y: i,
                    width: Math.max(Math.abs(e - t) - u, 0),
                    height: o,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    i = t.y,
                    o = t.height,
                    a = t.travellerWidth,
                    u = t.stroke,
                    c = this.state,
                    l = c.startX,
                    s = c.endX,
                    f = { pointerEvents: "none", fill: u };
                  return r.createElement(
                    b.m,
                    { className: "recharts-brush-texts" },
                    r.createElement(
                      A.x,
                      B(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(l, s) - 5,
                          y: i + o / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(e)
                    ),
                    r.createElement(
                      A.x,
                      B(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: i + o / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(n)
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = t.className,
                    i = t.children,
                    o = t.x,
                    a = t.y,
                    u = t.width,
                    c = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    m = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, k.hj)(o) ||
                    !(0, k.hj)(a) ||
                    !(0, k.hj)(u) ||
                    !(0, k.hj)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var g = (0, v.Z)("recharts-brush", n),
                    x = 1 === r.Children.count(i),
                    O = I("userSelect", "none");
                  return r.createElement(
                    b.m,
                    {
                      className: g,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: O,
                    },
                    this.renderBackground(),
                    x && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || m || l) && this.renderText()
                  );
                },
              },
            ]),
            (n = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.stroke,
                    u = Math.floor(n + o / 2) - 1;
                  return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("rect", {
                      x: e,
                      y: n,
                      width: i,
                      height: o,
                      fill: a,
                      stroke: "none",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + i - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u + 2,
                      x2: e + i - 1,
                      y2: u + 2,
                      fill: "none",
                      stroke: "#fff",
                    })
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return r.isValidElement(t)
                    ? r.cloneElement(t, e)
                    : u()(t)
                    ? t(e)
                    : i.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var n = t.data,
                    r = t.width,
                    i = t.x,
                    o = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return R(
                      {
                        prevData: n,
                        prevTravellerWidth: o,
                        prevUpdateId: a,
                        prevX: i,
                        prevWidth: r,
                      },
                      n && n.length
                        ? Y({
                            data: n,
                            width: r,
                            x: i,
                            travellerWidth: o,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null }
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      i !== e.prevX ||
                      o !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([i, i + r - o]);
                    var l = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: o,
                      prevUpdateId: a,
                      prevX: i,
                      prevWidth: r,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: l,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var n = t.length, r = 0, i = n - 1; i - r > 1; ) {
                    var o = Math.floor((r + i) / 2);
                    t[o] > e ? (i = o) : (r = o);
                  }
                  return e >= t[i] ? i : r;
                },
              },
            ]),
            e && $(i.prototype, e),
            n && $(i, n),
            Object.defineProperty(i, "prototype", { writable: !1 }),
            i
          );
        })(r.PureComponent);
      q(X, "displayName", "Brush"),
        q(X, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var V = n(45570),
        G = n(23237),
        K = n(7302),
        J = function (t, e) {
          var n = t.alwaysShow,
            r = t.ifOverflow;
          return n && (r = "extendDomain"), r === e;
        },
        Q = n(85742),
        tt = n(89951);
      function te(t) {
        return (te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tn() {
        return (tn = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ti(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tr(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != te(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != te(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == te(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var to = function (t) {
        var e = t.x,
          n = t.y,
          r = t.xAxis,
          i = t.yAxis,
          o = (0, Q.Ky)({ x: r.scale, y: i.scale }),
          a = o.apply({ x: e, y: n }, { bandAware: !0 });
        return J(t, "discard") && !o.isInRange(a) ? null : a;
      };
      function ta(t) {
        var e = t.x,
          n = t.y,
          i = t.r,
          o = t.alwaysShow,
          a = t.clipPathId,
          u = (0, k.P2)(e),
          c = (0, k.P2)(n);
        if (
          ((0, tt.Z)(
            void 0 === o,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
          ),
          !u || !c)
        )
          return null;
        var l = to(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = ti(
            ti(
              { clipPath: J(t, "hidden") ? "url(#".concat(a, ")") : void 0 },
              (0, S.L6)(t, !0)
            ),
            {},
            { cx: s, cy: f }
          );
        return r.createElement(
          b.m,
          { className: (0, v.Z)("recharts-reference-dot", h) },
          ta.renderDot(p, d),
          K._.renderCallByParent(t, {
            x: s - i,
            y: f - i,
            width: 2 * i,
            height: 2 * i,
          })
        );
      }
      (ta.displayName = "ReferenceDot"),
        (ta.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#fff",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
        }),
        (ta.renderDot = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : r.createElement(
                w.o,
                tn({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                })
              );
        });
      var tu = n(51525),
        tc = n.n(tu),
        tl = n(94533);
      function ts(t) {
        return (ts =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tf(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tp(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tf(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != ts(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != ts(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == ts(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tf(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function th(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function td() {
        return (td = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var ty = function (t, e, n, r, i, o, a, u, c) {
        var l = i.x,
          s = i.y,
          f = i.width,
          p = i.height;
        if (n) {
          var h = c.y,
            d = t.y.apply(h, { position: o });
          if (J(c, "discard") && !t.y.isInRange(d)) return null;
          var y = [
            { x: l + f, y: d },
            { x: l, y: d },
          ];
          return "left" === u ? y.reverse() : y;
        }
        if (e) {
          var v = c.x,
            m = t.x.apply(v, { position: o });
          if (J(c, "discard") && !t.x.isInRange(m)) return null;
          var g = [
            { x: m, y: s + p },
            { x: m, y: s },
          ];
          return "top" === a ? g.reverse() : g;
        }
        if (r) {
          var b = c.segment.map(function (e) {
            return t.apply(e, { position: o });
          });
          return J(c, "discard") &&
            tc()(b, function (e) {
              return !t.isInRange(e);
            })
            ? null
            : b;
        }
        return null;
      };
      function tv(t) {
        var e,
          n,
          i = t.x,
          o = t.y,
          a = t.segment,
          c = t.xAxisId,
          l = t.yAxisId,
          s = t.shape,
          f = t.className,
          p = t.alwaysShow,
          h = (0, tl.sp)(),
          d = (0, tl.bH)(c),
          y = (0, tl.Ud)(l),
          m = (0, tl.d2)();
        if (!h || !m) return null;
        (0, tt.Z)(
          void 0 === p,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var g = ty(
          (0, Q.Ky)({ x: d.scale, y: y.scale }),
          (0, k.P2)(i),
          (0, k.P2)(o),
          a && 2 === a.length,
          m,
          t.position,
          d.orientation,
          y.orientation,
          t
        );
        if (!g) return null;
        var x =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(g) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    o = (n = n.call(t)).next;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (i = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw i;
                  }
                }
                return u;
              }
            })(g, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return th(t, 2);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return th(t, 2);
              }
            })(g, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          O = x[0],
          w = O.x,
          j = O.y,
          P = x[1],
          A = P.x,
          E = P.y,
          M = tp(
            tp(
              { clipPath: J(t, "hidden") ? "url(#".concat(h, ")") : void 0 },
              (0, S.L6)(t, !0)
            ),
            {},
            { x1: w, y1: j, x2: A, y2: E }
          );
        return r.createElement(
          b.m,
          { className: (0, v.Z)("recharts-reference-line", f) },
          ((e = s),
          (n = M),
          r.isValidElement(e)
            ? r.cloneElement(e, n)
            : u()(e)
            ? e(n)
            : r.createElement(
                "line",
                td({}, n, { className: "recharts-reference-line-line" })
              )),
          K._.renderCallByParent(t, (0, Q._b)({ x1: w, y1: j, x2: A, y2: E }))
        );
      }
      function tm(t) {
        return (tm =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tg() {
        return (tg = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tb(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tx(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tb(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tm(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != tm(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tm(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tb(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      (tv.displayName = "ReferenceLine"),
        (tv.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          fill: "none",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
          position: "middle",
        });
      var tO = function (t, e, n, r, i) {
        var o = i.x1,
          a = i.x2,
          u = i.y1,
          c = i.y2,
          l = i.xAxis,
          s = i.yAxis;
        if (!l || !s) return null;
        var f = (0, Q.Ky)({ x: l.scale, y: s.scale }),
          p = {
            x: t ? f.x.apply(o, { position: "start" }) : f.x.rangeMin,
            y: n ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
          },
          h = {
            x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
            y: r ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
          };
        return !J(i, "discard") || (f.isInRange(p) && f.isInRange(h))
          ? (0, Q.O1)(p, h)
          : null;
      };
      function tw(t) {
        var e = t.x1,
          n = t.x2,
          i = t.y1,
          o = t.y2,
          a = t.className,
          u = t.alwaysShow,
          c = t.clipPathId;
        (0, tt.Z)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var l = (0, k.P2)(e),
          s = (0, k.P2)(n),
          f = (0, k.P2)(i),
          p = (0, k.P2)(o),
          h = t.shape;
        if (!l && !s && !f && !p && !h) return null;
        var d = tO(l, s, f, p, t);
        if (!d && !h) return null;
        var y = J(t, "hidden") ? "url(#".concat(c, ")") : void 0;
        return r.createElement(
          b.m,
          { className: (0, v.Z)("recharts-reference-area", a) },
          tw.renderRect(h, tx(tx({ clipPath: y }, (0, S.L6)(t, !0)), d)),
          K._.renderCallByParent(t, d)
        );
      }
      function tj(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tS(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tS(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tS(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tS(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (tw.displayName = "ReferenceArea"),
        (tw.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#ccc",
          fillOpacity: 0.5,
          stroke: "none",
          strokeWidth: 1,
        }),
        (tw.renderRect = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : r.createElement(
                j.A,
                tg({}, e, { className: "recharts-reference-area-rect" })
              );
        });
      var tP = function (t, e, n, r, i) {
          var o = (0, S.NN)(t, tv),
            a = (0, S.NN)(t, ta),
            u = [].concat(tj(o), tj(a)),
            c = (0, S.NN)(t, tw),
            l = "".concat(r, "Id"),
            s = r[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  J(e.props, "extendDomain") &&
                  (0, k.hj)(e.props[s])
                ) {
                  var r = e.props[s];
                  return [Math.min(t[0], r), Math.max(t[1], r)];
                }
                return t;
              }, f)),
            c.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = c.reduce(function (t, e) {
              if (
                e.props[l] === n &&
                J(e.props, "extendDomain") &&
                (0, k.hj)(e.props[p]) &&
                (0, k.hj)(e.props[h])
              ) {
                var r = e.props[p],
                  i = e.props[h];
                return [Math.min(t[0], r, i), Math.max(t[1], r, i)];
              }
              return t;
            }, f);
          }
          return (
            i &&
              i.length &&
              (f = i.reduce(function (t, e) {
                return (0, k.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        tA = n(15788),
        tE = n(21664),
        tk = n(10161),
        tM = new (n.n(tk)())(),
        tT = "recharts.syncMouseEvents",
        t_ = n(69888);
      function tC(t) {
        return (tC =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tD(t, e, n) {
        return (
          (e = tI(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tI(t) {
        var e = (function (t, e) {
          if ("object" != tC(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != tC(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tC(e) ? e : String(e);
      }
      var tN = (function () {
          var t;
          function e() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              tD(this, "activeIndex", 0),
              tD(this, "coordinateList", []),
              tD(this, "layout", "horizontal");
          }
          return (
            (t = [
              {
                key: "setDetails",
                value: function (t) {
                  var e,
                    n = t.coordinateList,
                    r = void 0 === n ? null : n,
                    i = t.container,
                    o = void 0 === i ? null : i,
                    a = t.layout,
                    u = void 0 === a ? null : a,
                    c = t.offset,
                    l = void 0 === c ? null : c,
                    s = t.mouseHandlerCallback,
                    f = void 0 === s ? null : s;
                  (this.coordinateList =
                    null !== (e = null != r ? r : this.coordinateList) &&
                    void 0 !== e
                      ? e
                      : []),
                    (this.container = null != o ? o : this.container),
                    (this.layout = null != u ? u : this.layout),
                    (this.offset = null != l ? l : this.offset),
                    (this.mouseHandlerCallback =
                      null != f ? f : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "setIndex",
                value: function (t) {
                  this.activeIndex = t;
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var t,
                      e,
                      n = this.container.getBoundingClientRect(),
                      r = n.x,
                      i = n.y,
                      o = n.height,
                      a = this.coordinateList[this.activeIndex].coordinate,
                      u =
                        (null === (t = window) || void 0 === t
                          ? void 0
                          : t.scrollX) || 0,
                      c =
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.scrollY) || 0,
                      l = i + this.offset.top + o / 2 + c;
                    this.mouseHandlerCallback({ pageX: r + a + u, pageY: l });
                  }
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, tI(r.key), r);
              }
            })(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(),
        tB = n(89531),
        tL = n(62647);
      function tR(t) {
        return (tR =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var t$ = ["x", "y", "top", "left", "width", "height", "className"];
      function tz() {
        return (tz = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tU(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var tF = function (t) {
        var e = t.x,
          n = void 0 === e ? 0 : e,
          i = t.y,
          o = void 0 === i ? 0 : i,
          a = t.top,
          u = void 0 === a ? 0 : a,
          c = t.left,
          l = void 0 === c ? 0 : c,
          s = t.width,
          f = void 0 === s ? 0 : s,
          p = t.height,
          h = void 0 === p ? 0 : p,
          d = t.className,
          y = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? tU(Object(n), !0).forEach(function (e) {
                    var r, i;
                    (r = e),
                      (i = n[e]),
                      (r = (function (t) {
                        var e = (function (t, e) {
                          if ("object" != tR(t) || !t) return t;
                          var n = t[Symbol.toPrimitive];
                          if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != tR(r)) return r;
                            throw TypeError(
                              "@@toPrimitive must return a primitive value."
                            );
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == tR(e) ? e : String(e);
                      })(r)) in t
                        ? Object.defineProperty(t, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[r] = i);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : tU(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            { x: n, y: o, top: u, left: l, width: f, height: h },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (i[n] = t[n]);
              }
              return i;
            })(t, t$)
          );
        return (0, k.hj)(n) &&
          (0, k.hj)(o) &&
          (0, k.hj)(f) &&
          (0, k.hj)(h) &&
          (0, k.hj)(u) &&
          (0, k.hj)(l)
          ? r.createElement(
              "path",
              tz({}, (0, S.L6)(y, !0), {
                className: (0, v.Z)("recharts-cross", d),
                d: "M"
                  .concat(n, ",")
                  .concat(u, "v")
                  .concat(h, "M")
                  .concat(l, ",")
                  .concat(o, "h")
                  .concat(f),
              })
            )
          : null;
      };
      function tZ(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          i = t.startAngle,
          o = t.endAngle;
        return {
          points: [(0, tA.op)(e, n, r, i), (0, tA.op)(e, n, r, o)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: i,
          endAngle: o,
        };
      }
      var tq = n(90677);
      function tW(t) {
        return (tW =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tY(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tH(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tY(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tW(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != tW(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tW(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tY(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function tX(t) {
        var e,
          n,
          i = t.element,
          o = t.tooltipEventType,
          a = t.isActive,
          u = t.activeCoordinate,
          c = t.activePayload,
          l = t.offset,
          s = t.activeTooltipIndex,
          f = t.tooltipAxisBandSize,
          p = t.layout,
          h = t.chartName;
        if (
          !i ||
          !i.props.cursor ||
          !a ||
          !u ||
          ("ScatterChart" !== h && "axis" !== o)
        )
          return null;
        var d = tL.H;
        if ("ScatterChart" === h) (n = u), (d = tF);
        else if ("BarChart" === h)
          (e = f / 2),
            (n = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === p ? u.x - e : l.left + 0.5,
              y: "horizontal" === p ? l.top + 0.5 : u.y - e,
              width: "horizontal" === p ? f : l.width - 1,
              height: "horizontal" === p ? l.height - 1 : f,
            }),
            (d = j.A);
        else if ("radial" === p) {
          var y = tZ(u),
            m = y.cx,
            g = y.cy,
            b = y.radius;
          (n = {
            cx: m,
            cy: g,
            startAngle: y.startAngle,
            endAngle: y.endAngle,
            innerRadius: b,
            outerRadius: b,
          }),
            (d = tq.L);
        } else
          (n = {
            points: (function (t, e, n) {
              var r, i, o, a;
              if ("horizontal" === t)
                (o = r = e.x), (i = n.top), (a = n.top + n.height);
              else if ("vertical" === t)
                (a = i = e.y), (r = n.left), (o = n.left + n.width);
              else if (null != e.cx && null != e.cy) {
                if ("centric" !== t) return tZ(e);
                var u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.angle,
                  p = (0, tA.op)(u, c, l, f),
                  h = (0, tA.op)(u, c, s, f);
                (r = p.x), (i = p.y), (o = h.x), (a = h.y);
              }
              return [
                { x: r, y: i },
                { x: o, y: a },
              ];
            })(p, u, l),
          }),
            (d = tL.H);
        var x = tH(
          tH(
            tH(tH({ stroke: "#ccc", pointerEvents: "none" }, l), n),
            (0, S.L6)(i.props.cursor, !1)
          ),
          {},
          {
            payload: c,
            payloadIndex: s,
            className: (0, v.Z)(
              "recharts-tooltip-cursor",
              i.props.cursor.className
            ),
          }
        );
        return (0, r.isValidElement)(i.props.cursor)
          ? (0, r.cloneElement)(i.props.cursor, x)
          : (0, r.createElement)(d, x);
      }
      var tV = ["item"],
        tG = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function tK(t) {
        return (tK =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tJ() {
        return (tJ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tQ(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          t7(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function t0(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function t1() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (t1 = function () {
          return !!t;
        })();
      }
      function t2(t) {
        return (t2 = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function t3(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function t5(t, e) {
        return (t5 = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function t6(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t4(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          t7(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function t7(t, e) {
        if (t) {
          if ("string" == typeof t) return t4(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return t4(t, e);
        }
      }
      function t4(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function t8(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function t9(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t8(Object(n), !0).forEach(function (e) {
                et(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : t8(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function et(t, e, n) {
        return (
          (e = ee(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ee(t) {
        var e = (function (t, e) {
          if ("object" != tK(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != tK(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tK(e) ? e : String(e);
      }
      var en = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        er = { width: "100%", height: "100%" },
        ei = { x: 0, y: 0 };
      function eo(t) {
        return t;
      }
      var ea = function (t, e, n, r) {
          var i = e.find(function (t) {
            return t && t.index === n;
          });
          if (i) {
            if ("horizontal" === t) return { x: i.coordinate, y: r.y };
            if ("vertical" === t) return { x: r.x, y: i.coordinate };
            if ("centric" === t) {
              var o = i.coordinate,
                a = r.radius;
              return t9(
                t9(t9({}, r), (0, tA.op)(r.cx, r.cy, a, o)),
                {},
                { angle: o, radius: a }
              );
            }
            var u = i.coordinate,
              c = r.angle;
            return t9(
              t9(t9({}, r), (0, tA.op)(r.cx, r.cy, u, c)),
              {},
              { angle: c, radius: u }
            );
          }
          return ei;
        },
        eu = function (t, e) {
          var n = e.graphicalItems,
            r = e.dataStartIndex,
            i = e.dataEndIndex,
            o = (null != n ? n : []).reduce(function (t, e) {
              var n = e.props.data;
              return n && n.length ? [].concat(t6(t), t6(n)) : t;
            }, []);
          return o.length > 0
            ? o
            : t && t.length && (0, k.hj)(r) && (0, k.hj)(i)
            ? t.slice(r, i + 1)
            : [];
        };
      function ec(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var el = function (t, e, n, r) {
          var i = t.graphicalItems,
            o = t.tooltipAxis,
            a = eu(e, t);
          return n < 0 || !i || !i.length || n >= a.length
            ? null
            : i.reduce(function (i, u) {
                var c,
                  l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  o.dataKey && !o.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, k.Ap)(f, o.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(t6(i), [(0, E.Qo)(u, l)]) : i;
              }, []);
        },
        es = function (t, e, n, r) {
          var i = r || { x: t.chartX, y: t.chartY },
            o =
              "horizontal" === n
                ? i.x
                : "vertical" === n
                ? i.y
                : "centric" === n
                ? i.angle
                : i.radius,
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, E.VO)(o, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = el(t, e, l, s),
              p = ea(n, a, l, i);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        ef = function (t, e) {
          var n = e.axes,
            r = e.graphicalItems,
            i = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, E.NA)(f, i);
          return n.reduce(function (e, n) {
            var y = n.props,
              v = y.type,
              m = y.dataKey,
              g = y.allowDataOverflow,
              b = y.allowDuplicatedCategory,
              x = y.scale,
              O = y.ticks,
              w = y.includeHidden,
              j = n.props[a];
            if (e[j]) return e;
            var S = eu(t.data, {
                graphicalItems: r.filter(function (t) {
                  return t.props[a] === j;
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              P = S.length;
            (function (t, e, n) {
              if ("number" === n && !0 === e && Array.isArray(t)) {
                var r = null == t ? void 0 : t[0],
                  i = null == t ? void 0 : t[1];
                if (r && i && (0, k.hj)(r) && (0, k.hj)(i)) return !0;
              }
              return !1;
            })(n.props.domain, g, v) &&
              ((T = (0, E.LG)(n.props.domain, null, g)),
              d &&
                ("number" === v || "auto" !== x) &&
                (C = (0, E.gF)(S, m, "category")));
            var A = ec(v);
            if (!T || 0 === T.length) {
              var M,
                T,
                _,
                C,
                D,
                I = null !== (D = n.props.domain) && void 0 !== D ? D : A;
              if (m) {
                if (((T = (0, E.gF)(S, m, v)), "category" === v && d)) {
                  var N = (0, k.bv)(T);
                  b && N
                    ? ((_ = T), (T = l()(0, P)))
                    : b ||
                      (T = (0, E.ko)(I, T, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(t6(t), [e]);
                      }, []));
                } else if ("category" === v)
                  T = b
                    ? T.filter(function (t) {
                        return "" !== t && !o()(t);
                      })
                    : (0, E.ko)(I, T, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || o()(e)
                          ? t
                          : [].concat(t6(t), [e]);
                      }, []);
                else if ("number" === v) {
                  var B = (0, E.ZI)(
                    S,
                    r.filter(function (t) {
                      return t.props[a] === j && (w || !t.props.hide);
                    }),
                    m,
                    i,
                    f
                  );
                  B && (T = B);
                }
                d &&
                  ("number" === v || "auto" !== x) &&
                  (C = (0, E.gF)(S, m, "category"));
              } else
                T = d
                  ? l()(0, P)
                  : u && u[j] && u[j].hasStack && "number" === v
                  ? "expand" === h
                    ? [0, 1]
                    : (0, E.EB)(u[j].stackGroups, c, s)
                  : (0, E.s6)(
                      S,
                      r.filter(function (t) {
                        return t.props[a] === j && (w || !t.props.hide);
                      }),
                      v,
                      f,
                      !0
                    );
              "number" === v
                ? ((T = tP(p, T, j, i, O)), I && (T = (0, E.LG)(I, T, g)))
                : "category" === v &&
                  I &&
                  T.every(function (t) {
                    return I.indexOf(t) >= 0;
                  }) &&
                  (T = I);
            }
            return t9(
              t9({}, e),
              {},
              et(
                {},
                j,
                t9(
                  t9({}, n.props),
                  {},
                  {
                    axisType: i,
                    domain: T,
                    categoricalDomain: C,
                    duplicateDomain: _,
                    originalDomain:
                      null !== (M = n.props.domain) && void 0 !== M ? M : A,
                    isCategorical: d,
                    layout: f,
                  }
                )
              )
            );
          }, {});
        },
        ep = function (t, e) {
          var n = e.graphicalItems,
            r = e.Axis,
            i = e.axisType,
            o = e.axisIdKey,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.layout,
            p = t.children,
            h = eu(t.data, {
              graphicalItems: n,
              dataStartIndex: u,
              dataEndIndex: c,
            }),
            d = h.length,
            y = (0, E.NA)(s, i),
            v = -1;
          return n.reduce(function (t, e) {
            var m,
              g = e.props[o],
              b = ec("number");
            return t[g]
              ? t
              : (v++,
                (m = y
                  ? l()(0, d)
                  : a && a[g] && a[g].hasStack
                  ? tP(p, (m = (0, E.EB)(a[g].stackGroups, u, c)), g, i)
                  : tP(
                      p,
                      (m = (0, E.LG)(
                        b,
                        (0, E.s6)(
                          h,
                          n.filter(function (t) {
                            return t.props[o] === g && !t.props.hide;
                          }),
                          "number",
                          s
                        ),
                        r.defaultProps.allowDataOverflow
                      )),
                      g,
                      i
                    )),
                t9(
                  t9({}, t),
                  {},
                  et(
                    {},
                    g,
                    t9(
                      t9({ axisType: i }, r.defaultProps),
                      {},
                      {
                        hide: !0,
                        orientation: f()(
                          en,
                          "".concat(i, ".").concat(v % 2),
                          null
                        ),
                        domain: m,
                        originalDomain: b,
                        isCategorical: y,
                        layout: s,
                      }
                    )
                  )
                ));
          }, {});
        },
        eh = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? "xAxis" : n,
            i = e.AxisComp,
            o = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.children,
            s = "".concat(r, "Id"),
            f = (0, S.NN)(l, i),
            p = {};
          return (
            f && f.length
              ? (p = ef(t, {
                  axes: f,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : o &&
                o.length &&
                (p = ep(t, {
                  Axis: i,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            p
          );
        },
        ed = function (t) {
          var e = (0, k.Kt)(t),
            n = (0, E.uY)(e, !1, !0);
          return {
            tooltipTicks: n,
            orderedTooltipTicks: h()(n, function (t) {
              return t.coordinate;
            }),
            tooltipAxis: e,
            tooltipAxisBandSize: (0, E.zT)(e, n),
          };
        },
        ey = function (t) {
          var e = t.children,
            n = t.defaultShowTooltip,
            r = (0, S.sP)(e, X),
            i = 0,
            o = 0;
          return (
            t.data && 0 !== t.data.length && (o = t.data.length - 1),
            r &&
              r.props &&
              (r.props.startIndex >= 0 && (i = r.props.startIndex),
              r.props.endIndex >= 0 && (o = r.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: i,
              dataEndIndex: o,
              activeTooltipIndex: -1,
              isTooltipActive: !!n,
            }
          );
        },
        ev = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        em = function (t, e) {
          var n = t.props,
            r = t.graphicalItems,
            i = t.xAxisMap,
            o = void 0 === i ? {} : i,
            a = t.yAxisMap,
            u = void 0 === a ? {} : a,
            c = n.width,
            l = n.height,
            s = n.children,
            p = n.margin || {},
            h = (0, S.sP)(s, X),
            d = (0, S.sP)(s, O.D),
            y = Object.keys(u).reduce(
              function (t, e) {
                var n = u[e],
                  r = n.orientation;
                return n.mirror || n.hide
                  ? t
                  : t9(t9({}, t), {}, et({}, r, t[r] + n.width));
              },
              { left: p.left || 0, right: p.right || 0 }
            ),
            v = Object.keys(o).reduce(
              function (t, e) {
                var n = o[e],
                  r = n.orientation;
                return n.mirror || n.hide
                  ? t
                  : t9(
                      t9({}, t),
                      {},
                      et({}, r, f()(t, "".concat(r)) + n.height)
                    );
              },
              { top: p.top || 0, bottom: p.bottom || 0 }
            ),
            m = t9(t9({}, v), y),
            g = m.bottom;
          h && (m.bottom += h.props.height || X.defaultProps.height),
            d && e && (m = (0, E.By)(m, r, n, e));
          var b = c - m.left - m.right,
            x = l - m.top - m.bottom;
          return t9(
            t9({ brushBottom: g }, m),
            {},
            { width: Math.max(b, 0), height: Math.max(x, 0) }
          );
        },
        eg = function (t) {
          var e,
            n = t.chartName,
            i = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            c = void 0 === a ? "axis" : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ["axis"] : l,
            p = t.axisComponents,
            h = t.legendContent,
            d = t.formatAxisMap,
            O = t.defaultProps,
            P = function (t, e) {
              var n = e.graphicalItems,
                r = e.stackGroups,
                i = e.offset,
                a = e.updateId,
                u = e.dataStartIndex,
                c = e.dataEndIndex,
                l = t.barSize,
                s = t.layout,
                f = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = ev(s),
                v = y.numericAxisName,
                g = y.cateAxisName,
                b =
                  !!n &&
                  !!n.length &&
                  n.some(function (t) {
                    var e = (0, S.Gf)(t && t.type);
                    return e && e.indexOf("Bar") >= 0;
                  }),
                x = [];
              return (
                n.forEach(function (n, y) {
                  var O = eu(t.data, {
                      graphicalItems: [n],
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    w = n.props,
                    j = w.dataKey,
                    P = w.maxBarSize,
                    A = n.props["".concat(v, "Id")],
                    k = n.props["".concat(g, "Id")],
                    M = p.reduce(function (t, r) {
                      var i = e["".concat(r.axisType, "Map")],
                        o = n.props["".concat(r.axisType, "Id")];
                      (i && i[o]) || "zAxis" === r.axisType || (0, m.Z)(!1);
                      var a = i[o];
                      return t9(
                        t9({}, t),
                        {},
                        et(
                          et({}, r.axisType, a),
                          "".concat(r.axisType, "Ticks"),
                          (0, E.uY)(a)
                        )
                      );
                    }, {}),
                    T = M[g],
                    _ = M["".concat(g, "Ticks")],
                    C =
                      r &&
                      r[A] &&
                      r[A].hasStack &&
                      (0, E.O3)(n, r[A].stackGroups),
                    D = (0, S.Gf)(n.type).indexOf("Bar") >= 0,
                    I = (0, E.zT)(T, _),
                    N = [],
                    B =
                      b &&
                      (0, E.pt)({
                        barSize: l,
                        stackGroups: r,
                        totalSize:
                          "xAxis" === g
                            ? M[g].width
                            : "yAxis" === g
                            ? M[g].height
                            : void 0,
                      });
                  if (D) {
                    var L,
                      R,
                      $ = o()(P) ? d : P,
                      z =
                        null !==
                          (L =
                            null !== (R = (0, E.zT)(T, _, !0)) && void 0 !== R
                              ? R
                              : $) && void 0 !== L
                          ? L
                          : 0;
                    (N = (0, E.qz)({
                      barGap: f,
                      barCategoryGap: h,
                      bandSize: z !== I ? z : I,
                      sizeList: B[k],
                      maxBarSize: $,
                    })),
                      z !== I &&
                        (N = N.map(function (t) {
                          return t9(
                            t9({}, t),
                            {},
                            {
                              position: t9(
                                t9({}, t.position),
                                {},
                                { offset: t.position.offset - z / 2 }
                              ),
                            }
                          );
                        }));
                  }
                  var U = n && n.type && n.type.getComposedData;
                  U &&
                    x.push({
                      props: t9(
                        t9(
                          {},
                          U(
                            t9(
                              t9({}, M),
                              {},
                              {
                                displayedData: O,
                                props: t,
                                dataKey: j,
                                item: n,
                                bandSize: I,
                                barPosition: N,
                                offset: i,
                                stackedData: C,
                                layout: s,
                                dataStartIndex: u,
                                dataEndIndex: c,
                              }
                            )
                          )
                        ),
                        {},
                        et(
                          et(
                            et({ key: n.key || "item-".concat(y) }, v, M[v]),
                            g,
                            M[g]
                          ),
                          "animationId",
                          a
                        )
                      ),
                      childIndex: (0, S.$R)(n, t.children),
                      item: n,
                    });
                }),
                x
              );
            },
            A = function (t, e) {
              var r = t.props,
                o = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, S.TT)({ props: r })) return null;
              var c = r.children,
                l = r.layout,
                s = r.stackOffset,
                f = r.data,
                h = r.reverseStackOrder,
                y = ev(l),
                v = y.numericAxisName,
                m = y.cateAxisName,
                g = (0, S.NN)(c, i),
                b = (0, E.wh)(
                  f,
                  g,
                  "".concat(v, "Id"),
                  "".concat(m, "Id"),
                  s,
                  h
                ),
                x = p.reduce(function (t, e) {
                  var n = "".concat(e.axisType, "Map");
                  return t9(
                    t9({}, t),
                    {},
                    et(
                      {},
                      n,
                      eh(
                        r,
                        t9(
                          t9({}, e),
                          {},
                          {
                            graphicalItems: g,
                            stackGroups: e.axisType === v && b,
                            dataStartIndex: o,
                            dataEndIndex: a,
                          }
                        )
                      )
                    )
                  );
                }, {}),
                O = em(
                  t9(t9({}, x), {}, { props: r, graphicalItems: g }),
                  null == e ? void 0 : e.legendBBox
                );
              Object.keys(x).forEach(function (t) {
                x[t] = d(r, x[t], O, t.replace("Map", ""), n);
              });
              var w = ed(x["".concat(m, "Map")]),
                j = P(
                  r,
                  t9(
                    t9({}, x),
                    {},
                    {
                      dataStartIndex: o,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: g,
                      stackGroups: b,
                      offset: O,
                    }
                  )
                );
              return t9(
                t9(
                  {
                    formattedGraphicalItems: j,
                    graphicalItems: g,
                    offset: O,
                    stackGroups: b,
                  },
                  w
                ),
                x
              );
            };
          return (
            (e = (function (t) {
              var e;
              function i(t) {
                var e, a, c, l, s;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw TypeError("Cannot call a class as a function");
                  })(this, i),
                  (l = i),
                  (s = [t]),
                  (l = t2(l)),
                  (c = (function (t, e) {
                    if (e && ("object" === tK(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return t3(t);
                  })(
                    this,
                    t1()
                      ? Reflect.construct(l, s || [], t2(this).constructor)
                      : l.apply(this, s)
                  )),
                  et(
                    t3(c),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter")
                  ),
                  et(t3(c), "accessibilityManager", new tN()),
                  et(t3(c), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = c.state,
                        n = e.dataStartIndex,
                        r = e.dataEndIndex,
                        i = e.updateId;
                      c.setState(
                        t9(
                          { legendBBox: t },
                          A(
                            {
                              props: c.props,
                              dataStartIndex: n,
                              dataEndIndex: r,
                              updateId: i,
                            },
                            t9(t9({}, c.state), {}, { legendBBox: t })
                          )
                        )
                      );
                    }
                  }),
                  et(t3(c), "handleReceiveSyncEvent", function (t, e, n) {
                    c.props.syncId === t &&
                      (n !== c.eventEmitterSymbol ||
                        "function" == typeof c.props.syncMethod) &&
                      c.applySyncEvent(e);
                  }),
                  et(t3(c), "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      n = t.endIndex;
                    if (
                      e !== c.state.dataStartIndex ||
                      n !== c.state.dataEndIndex
                    ) {
                      var r = c.state.updateId;
                      c.setState(function () {
                        return t9(
                          { dataStartIndex: e, dataEndIndex: n },
                          A(
                            {
                              props: c.props,
                              dataStartIndex: e,
                              dataEndIndex: n,
                              updateId: r,
                            },
                            c.state
                          )
                        );
                      }),
                        c.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: n,
                        });
                    }
                  }),
                  et(t3(c), "handleMouseEnter", function (t) {
                    var e = c.getMouseInfo(t);
                    if (e) {
                      var n = t9(t9({}, e), {}, { isTooltipActive: !0 });
                      c.setState(n), c.triggerSyncEvent(n);
                      var r = c.props.onMouseEnter;
                      u()(r) && r(n, t);
                    }
                  }),
                  et(t3(c), "triggeredAfterMouseMove", function (t) {
                    var e = c.getMouseInfo(t),
                      n = e
                        ? t9(t9({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    c.setState(n), c.triggerSyncEvent(n);
                    var r = c.props.onMouseMove;
                    u()(r) && r(n, t);
                  }),
                  et(t3(c), "handleItemMouseEnter", function (t) {
                    c.setState(function () {
                      return {
                        isTooltipActive: !0,
                        activeItem: t,
                        activePayload: t.tooltipPayload,
                        activeCoordinate: t.tooltipPosition || {
                          x: t.cx,
                          y: t.cy,
                        },
                      };
                    });
                  }),
                  et(t3(c), "handleItemMouseLeave", function () {
                    c.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  et(t3(c), "handleMouseMove", function (t) {
                    t.persist(), c.throttleTriggeredAfterMouseMove(t);
                  }),
                  et(t3(c), "handleMouseLeave", function (t) {
                    c.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    c.setState(e), c.triggerSyncEvent(e);
                    var n = c.props.onMouseLeave;
                    u()(n) && n(e, t);
                  }),
                  et(t3(c), "handleOuterEvent", function (t) {
                    var e,
                      n = (0, S.Bh)(t),
                      r = f()(c.props, "".concat(n));
                    n &&
                      u()(r) &&
                      r(
                        null !==
                          (e = /.*touch.*/i.test(n)
                            ? c.getMouseInfo(t.changedTouches[0])
                            : c.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t
                      );
                  }),
                  et(t3(c), "handleClick", function (t) {
                    var e = c.getMouseInfo(t);
                    if (e) {
                      var n = t9(t9({}, e), {}, { isTooltipActive: !0 });
                      c.setState(n), c.triggerSyncEvent(n);
                      var r = c.props.onClick;
                      u()(r) && r(n, t);
                    }
                  }),
                  et(t3(c), "handleMouseDown", function (t) {
                    var e = c.props.onMouseDown;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  et(t3(c), "handleMouseUp", function (t) {
                    var e = c.props.onMouseUp;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  et(t3(c), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  et(t3(c), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.handleMouseDown(t.changedTouches[0]);
                  }),
                  et(t3(c), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.handleMouseUp(t.changedTouches[0]);
                  }),
                  et(t3(c), "triggerSyncEvent", function (t) {
                    void 0 !== c.props.syncId &&
                      tM.emit(tT, c.props.syncId, t, c.eventEmitterSymbol);
                  }),
                  et(t3(c), "applySyncEvent", function (t) {
                    var e = c.props,
                      n = e.layout,
                      r = e.syncMethod,
                      i = c.state.updateId,
                      o = t.dataStartIndex,
                      a = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      c.setState(
                        t9(
                          { dataStartIndex: o, dataEndIndex: a },
                          A(
                            {
                              props: c.props,
                              dataStartIndex: o,
                              dataEndIndex: a,
                              updateId: i,
                            },
                            c.state
                          )
                        )
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var u = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = c.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ("function" == typeof r) s = r(h, t);
                      else if ("value" === r) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = t9(t9({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(u, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        g = h[s] && h[s].value,
                        b = el(c.state, c.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === n ? h[s].coordinate : v,
                              y: "horizontal" === n ? m : h[s].coordinate,
                            }
                          : ei;
                      c.setState(
                        t9(
                          t9({}, t),
                          {},
                          {
                            activeLabel: g,
                            activeCoordinate: x,
                            activePayload: b,
                            activeTooltipIndex: s,
                          }
                        )
                      );
                    } else c.setState(t);
                  }),
                  et(t3(c), "renderCursor", function (t) {
                    var e,
                      i = c.state,
                      o = i.isTooltipActive,
                      a = i.activeCoordinate,
                      u = i.activePayload,
                      l = i.offset,
                      s = i.activeTooltipIndex,
                      f = i.tooltipAxisBandSize,
                      p = c.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : o,
                      d = c.props.layout,
                      y = t.key || "_recharts-cursor";
                    return r.createElement(tX, {
                      key: y,
                      activeCoordinate: a,
                      activePayload: u,
                      activeTooltipIndex: s,
                      chartName: n,
                      element: t,
                      isActive: h,
                      layout: d,
                      offset: l,
                      tooltipAxisBandSize: f,
                      tooltipEventType: p,
                    });
                  }),
                  et(t3(c), "renderPolarAxis", function (t, e, n) {
                    var i = f()(t, "type.axisType"),
                      o = f()(c.state, "".concat(i, "Map")),
                      a = o && o[t.props["".concat(i, "Id")]];
                    return (0,
                    r.cloneElement)(t, t9(t9({}, a), {}, { className: (0, v.Z)(i, a.className), key: t.key || "".concat(e, "-").concat(n), ticks: (0, E.uY)(a, !0) }));
                  }),
                  et(t3(c), "renderPolarGrid", function (t) {
                    var e = t.props,
                      n = e.radialLines,
                      i = e.polarAngles,
                      o = e.polarRadius,
                      a = c.state,
                      u = a.radiusAxisMap,
                      l = a.angleAxisMap,
                      s = (0, k.Kt)(u),
                      f = (0, k.Kt)(l),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, r.cloneElement)(t, {
                      polarAngles: Array.isArray(i)
                        ? i
                        : (0, E.uY)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(o)
                        ? o
                        : (0, E.uY)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || "polar-grid",
                      radialLines: n,
                    });
                  }),
                  et(t3(c), "renderLegend", function () {
                    var t = c.state.formattedGraphicalItems,
                      e = c.props,
                      n = e.children,
                      i = e.width,
                      o = e.height,
                      a = c.props.margin || {},
                      u = i - (a.left || 0) - (a.right || 0),
                      l = (0, G.z)({
                        children: n,
                        formattedGraphicalItems: t,
                        legendWidth: u,
                        legendContent: h,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = t0(l, tV);
                    return (0,
                    r.cloneElement)(s, t9(t9({}, f), {}, { chartWidth: i, chartHeight: o, margin: a, onBBoxUpdate: c.handleLegendBBoxUpdate }));
                  }),
                  et(t3(c), "renderTooltip", function () {
                    var t,
                      e = c.props,
                      n = e.children,
                      i = e.accessibilityLayer,
                      o = (0, S.sP)(n, x.u);
                    if (!o) return null;
                    var a = c.state,
                      u = a.isTooltipActive,
                      l = a.activeCoordinate,
                      s = a.activePayload,
                      f = a.activeLabel,
                      p = a.offset,
                      h = null !== (t = o.props.active) && void 0 !== t ? t : u;
                    return (0,
                    r.cloneElement)(o, { viewBox: t9(t9({}, p), {}, { x: p.left, y: p.top }), active: h, label: f, payload: h ? s : [], coordinate: l, accessibilityLayer: i });
                  }),
                  et(t3(c), "renderBrush", function (t) {
                    var e = c.props,
                      n = e.margin,
                      i = e.data,
                      o = c.state,
                      a = o.offset,
                      u = o.dataStartIndex,
                      l = o.dataEndIndex,
                      s = o.updateId;
                    return (0,
                    r.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: (0, E.DO)(c.handleBrushChange, t.props.onChange), data: i, x: (0, k.hj)(t.props.x) ? t.props.x : a.left, y: (0, k.hj)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (n.bottom || 0), width: (0, k.hj)(t.props.width) ? t.props.width : a.width, startIndex: u, endIndex: l, updateId: "brush-".concat(s) });
                  }),
                  et(t3(c), "renderReferenceElement", function (t, e, n) {
                    if (!t) return null;
                    var i = t3(c).clipPathId,
                      o = c.state,
                      a = o.xAxisMap,
                      u = o.yAxisMap,
                      l = o.offset,
                      s = t.props,
                      f = s.xAxisId,
                      p = s.yAxisId;
                    return (0,
                    r.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(n), xAxis: a[f], yAxis: u[p], viewBox: { x: l.left, y: l.top, width: l.width, height: l.height }, clipPathId: i });
                  }),
                  et(t3(c), "renderActivePoints", function (t) {
                    var e = t.item,
                      n = t.activePoint,
                      r = t.basePoint,
                      o = t.childIndex,
                      a = t.isRange,
                      u = [],
                      c = e.props.key,
                      l = e.item.props,
                      s = l.activeDot,
                      f = t9(
                        t9(
                          {
                            index: o,
                            dataKey: l.dataKey,
                            cx: n.x,
                            cy: n.y,
                            r: 4,
                            fill: (0, E.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: n.payload,
                            value: n.value,
                            key: "".concat(c, "-activePoint-").concat(o),
                          },
                          (0, S.L6)(s, !1)
                        ),
                        (0, t_.Ym)(s)
                      );
                    return (
                      u.push(i.renderActiveDot(s, f)),
                      r
                        ? u.push(
                            i.renderActiveDot(
                              s,
                              t9(
                                t9({}, f),
                                {},
                                {
                                  cx: r.x,
                                  cy: r.y,
                                  key: "".concat(c, "-basePoint-").concat(o),
                                }
                              )
                            )
                          )
                        : a && u.push(null),
                      u
                    );
                  }),
                  et(t3(c), "renderGraphicChild", function (t, e, n) {
                    var i = c.filterFormatItem(t, e, n);
                    if (!i) return null;
                    var a = c.getTooltipEventType(),
                      u = c.state,
                      l = u.isTooltipActive,
                      s = u.tooltipAxis,
                      f = u.activeTooltipIndex,
                      p = u.activeLabel,
                      h = c.props.children,
                      d = (0, S.sP)(h, x.u),
                      y = i.props,
                      v = y.points,
                      m = y.isRange,
                      g = y.baseLine,
                      b = i.item.props,
                      O = b.activeDot,
                      w = b.hide,
                      j = b.activeBar,
                      P = b.activeShape,
                      A = {};
                    "axis" !== a && d && "click" === d.props.trigger
                      ? (A = {
                          onClick: (0, E.DO)(
                            c.handleItemMouseEnter,
                            t.props.onClick
                          ),
                        })
                      : "axis" !== a &&
                        (A = {
                          onMouseLeave: (0, E.DO)(
                            c.handleItemMouseLeave,
                            t.props.onMouseLeave
                          ),
                          onMouseEnter: (0, E.DO)(
                            c.handleItemMouseEnter,
                            t.props.onMouseEnter
                          ),
                        });
                    var M = (0, r.cloneElement)(t, t9(t9({}, i.props), A));
                    if (!w && l && d && (O || j || P)) {
                      if (f >= 0) {
                        if (s.dataKey && !s.allowDuplicatedCategory) {
                          var T =
                            "function" == typeof s.dataKey
                              ? function (t) {
                                  return "function" == typeof s.dataKey
                                    ? s.dataKey(t.payload)
                                    : null;
                                }
                              : "payload.".concat(s.dataKey.toString());
                          (C = (0, k.Ap)(v, T, p)),
                            (D = m && g && (0, k.Ap)(g, T, p));
                        } else
                          (C = null == v ? void 0 : v[f]), (D = m && g && g[f]);
                        if (P || j) {
                          var _ =
                            void 0 !== t.props.activeIndex
                              ? t.props.activeIndex
                              : f;
                          return [
                            (0, r.cloneElement)(
                              t,
                              t9(t9(t9({}, i.props), A), {}, { activeIndex: _ })
                            ),
                            null,
                            null,
                          ];
                        }
                        if (!o()(C))
                          return [M].concat(
                            t6(
                              c.renderActivePoints({
                                item: i,
                                activePoint: C,
                                basePoint: D,
                                childIndex: f,
                                isRange: m,
                              })
                            )
                          );
                      } else {
                        var C,
                          D,
                          I,
                          N = (
                            null !==
                              (I = c.getItemByXY(c.state.activeCoordinate)) &&
                            void 0 !== I
                              ? I
                              : { graphicalItem: M }
                          ).graphicalItem,
                          B = N.item,
                          L = void 0 === B ? t : B,
                          R = N.childIndex,
                          $ = t9(
                            t9(t9({}, i.props), A),
                            {},
                            { activeIndex: R }
                          );
                        return [(0, r.cloneElement)(L, $), null, null];
                      }
                    }
                    return m ? [M, null, null] : [M, null];
                  }),
                  et(t3(c), "renderCustomized", function (t, e, n) {
                    return (0,
                    r.cloneElement)(t, t9(t9({ key: "recharts-customized-".concat(n) }, c.props), c.state));
                  }),
                  et(t3(c), "renderMap", {
                    CartesianGrid: { handler: eo, once: !0 },
                    ReferenceArea: { handler: c.renderReferenceElement },
                    ReferenceLine: { handler: eo },
                    ReferenceDot: { handler: c.renderReferenceElement },
                    XAxis: { handler: eo },
                    YAxis: { handler: eo },
                    Brush: { handler: c.renderBrush, once: !0 },
                    Bar: { handler: c.renderGraphicChild },
                    Line: { handler: c.renderGraphicChild },
                    Area: { handler: c.renderGraphicChild },
                    Radar: { handler: c.renderGraphicChild },
                    RadialBar: { handler: c.renderGraphicChild },
                    Scatter: { handler: c.renderGraphicChild },
                    Pie: { handler: c.renderGraphicChild },
                    Funnel: { handler: c.renderGraphicChild },
                    Tooltip: { handler: c.renderCursor, once: !0 },
                    PolarGrid: { handler: c.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: c.renderPolarAxis },
                    PolarRadiusAxis: { handler: c.renderPolarAxis },
                    Customized: { handler: c.renderCustomized },
                  }),
                  (c.clipPathId = "".concat(
                    null !== (e = t.id) && void 0 !== e
                      ? e
                      : (0, k.EL)("recharts"),
                    "-clip"
                  )),
                  (c.throttleTriggeredAfterMouseMove = y()(
                    c.triggeredAfterMouseMove,
                    null !== (a = t.throttleDelay) && void 0 !== a
                      ? a
                      : 1e3 / 60
                  )),
                  (c.state = {}),
                  c
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw TypeError(
                      "Super expression must either be null or a function"
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e && t5(t, e);
                })(i, t),
                (e = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t, e;
                      this.addListener(),
                        this.accessibilityManager.setDetails({
                          container: this.container,
                          offset: {
                            left:
                              null !== (t = this.props.margin.left) &&
                              void 0 !== t
                                ? t
                                : 0,
                            top:
                              null !== (e = this.props.margin.top) &&
                              void 0 !== e
                                ? e
                                : 0,
                          },
                          coordinateList: this.state.tooltipTicks,
                          mouseHandlerCallback: this.triggeredAfterMouseMove,
                          layout: this.props.layout,
                        }),
                        this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "displayDefaultTooltip",
                    value: function () {
                      var t = this.props,
                        e = t.children,
                        n = t.data,
                        r = t.height,
                        i = t.layout,
                        o = (0, S.sP)(e, x.u);
                      if (o) {
                        var a = o.props.defaultIndex;
                        if (
                          "number" == typeof a &&
                          !(a < 0) &&
                          !(a > this.state.tooltipTicks.length)
                        ) {
                          var u =
                              this.state.tooltipTicks[a] &&
                              this.state.tooltipTicks[a].value,
                            c = el(this.state, n, a, u),
                            l = this.state.tooltipTicks[a].coordinate,
                            s = (this.state.offset.top + r) / 2,
                            f =
                              "horizontal" === i
                                ? { x: l, y: s }
                                : { y: l, x: s },
                            p = this.state.formattedGraphicalItems.find(
                              function (t) {
                                return "Scatter" === t.item.type.name;
                              }
                            );
                          p &&
                            ((f = t9(
                              t9({}, f),
                              p.props.points[a].tooltipPosition
                            )),
                            (c = p.props.points[a].tooltipPayload));
                          var h = {
                            activeTooltipIndex: a,
                            isTooltipActive: !0,
                            activeLabel: u,
                            activePayload: c,
                            activeCoordinate: f,
                          };
                          this.setState(h),
                            this.renderCursor(o),
                            this.accessibilityManager.setIndex(a);
                        }
                      }
                    },
                  },
                  {
                    key: "getSnapshotBeforeUpdate",
                    value: function (t, e) {
                      if (!this.props.accessibilityLayer) return null;
                      if (
                        (this.state.tooltipTicks !== e.tooltipTicks &&
                          this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks,
                          }),
                        this.props.layout !== t.layout &&
                          this.accessibilityManager.setDetails({
                            layout: this.props.layout,
                          }),
                        this.props.margin !== t.margin)
                      ) {
                        var n, r;
                        this.accessibilityManager.setDetails({
                          offset: {
                            left:
                              null !== (n = this.props.margin.left) &&
                              void 0 !== n
                                ? n
                                : 0,
                            top:
                              null !== (r = this.props.margin.top) &&
                              void 0 !== r
                                ? r
                                : 0,
                          },
                        });
                      }
                      return null;
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      (0, S.rL)(
                        [(0, S.sP)(t.children, x.u)],
                        [(0, S.sP)(this.props.children, x.u)]
                      ) || this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.removeListener(),
                        this.throttleTriggeredAfterMouseMove.cancel();
                    },
                  },
                  {
                    key: "getTooltipEventType",
                    value: function () {
                      var t = (0, S.sP)(this.props.children, x.u);
                      if (t && "boolean" == typeof t.props.shared) {
                        var e = t.props.shared ? "axis" : "item";
                        return s.indexOf(e) >= 0 ? e : c;
                      }
                      return c;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e = this.container,
                        n = e.getBoundingClientRect(),
                        r = (0, V.os)(n),
                        i = {
                          chartX: Math.round(t.pageX - r.left),
                          chartY: Math.round(t.pageY - r.top),
                        },
                        o = n.width / e.offsetWidth || 1,
                        a = this.inRange(i.chartX, i.chartY, o);
                      if (!a) return null;
                      var u = this.state,
                        c = u.xAxisMap,
                        l = u.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && c && l) {
                        var s = (0, k.Kt)(c).scale,
                          f = (0, k.Kt)(l).scale,
                          p = s && s.invert ? s.invert(i.chartX) : null,
                          h = f && f.invert ? f.invert(i.chartY) : null;
                        return t9(t9({}, i), {}, { xValue: p, yValue: h });
                      }
                      var d = es(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a
                      );
                      return d ? t9(t9({}, i), d) : null;
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        r = this.props.layout,
                        i = t / n,
                        o = e / n;
                      if ("horizontal" === r || "vertical" === r) {
                        var a = this.state.offset;
                        return i >= a.left &&
                          i <= a.left + a.width &&
                          o >= a.top &&
                          o <= a.top + a.height
                          ? { x: i, y: o }
                          : null;
                      }
                      var u = this.state,
                        c = u.angleAxisMap,
                        l = u.radiusAxisMap;
                      if (c && l) {
                        var s = (0, k.Kt)(c);
                        return (0, tA.z3)({ x: i, y: o }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        n = (0, S.sP)(t, x.u),
                        r = {};
                      return (
                        n &&
                          "axis" === e &&
                          (r =
                            "click" === n.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                }),
                        t9(
                          t9({}, (0, t_.Ym)(this.props, this.handleOuterEvent)),
                          r
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      tM.on(tT, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      tM.removeListener(tT, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, n) {
                      for (
                        var r = this.state.formattedGraphicalItems,
                          i = 0,
                          o = r.length;
                        i < o;
                        i++
                      ) {
                        var a = r[i];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, S.Gf)(a.item.type) && n === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderClipPath",
                    value: function () {
                      var t = this.clipPathId,
                        e = this.state.offset,
                        n = e.left,
                        i = e.top,
                        o = e.height,
                        a = e.width;
                      return r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: t },
                          r.createElement("rect", {
                            x: n,
                            y: i,
                            height: o,
                            width: a,
                          })
                        )
                      );
                    },
                  },
                  {
                    key: "getXScales",
                    value: function () {
                      var t = this.state.xAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var n = tQ(e, 2),
                              r = n[0],
                              i = n[1];
                            return t9(t9({}, t), {}, et({}, r, i.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getYScales",
                    value: function () {
                      var t = this.state.yAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var n = tQ(e, 2),
                              r = n[0],
                              i = n[1];
                            return t9(t9({}, t), {}, et({}, r, i.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getXScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.xAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getYScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.yAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getItemByXY",
                    value: function (t) {
                      var e = this.state,
                        n = e.formattedGraphicalItems,
                        r = e.activeItem;
                      if (n && n.length)
                        for (var i = 0, o = n.length; i < o; i++) {
                          var a = n[i],
                            u = a.props,
                            c = a.item,
                            l = (0, S.Gf)(c.type);
                          if ("Bar" === l) {
                            var s = (u.data || []).find(function (e) {
                              return (0, j.X)(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ("RadialBar" === l) {
                            var f = (u.data || []).find(function (e) {
                              return (0, tA.z3)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if (
                            (0, tB.lT)(a, r) ||
                            (0, tB.V$)(a, r) ||
                            (0, tB.w7)(a, r)
                          ) {
                            var p = (0, tB.a3)({
                                graphicalItem: a,
                                activeTooltipItem: r,
                                itemData: c.props.data,
                              }),
                              h =
                                void 0 === c.props.activeIndex
                                  ? p
                                  : c.props.activeIndex;
                            return {
                              graphicalItem: t9(
                                t9({}, a),
                                {},
                                { childIndex: h }
                              ),
                              payload: (0, tB.w7)(a, r)
                                ? c.props.data[p]
                                : a.props.data[p],
                            };
                          }
                        }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t,
                        e,
                        n = this;
                      if (!(0, S.TT)(this)) return null;
                      var i = this.props,
                        o = i.children,
                        a = i.className,
                        u = i.width,
                        c = i.height,
                        l = i.style,
                        s = i.compact,
                        f = i.title,
                        p = i.desc,
                        h = t0(i, tG),
                        d = (0, S.L6)(h, !1);
                      if (s)
                        return r.createElement(
                          tl.br,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          r.createElement(
                            g.T,
                            tJ({}, d, {
                              width: u,
                              height: c,
                              title: f,
                              desc: p,
                            }),
                            this.renderClipPath(),
                            (0, S.eu)(o, this.renderMap)
                          )
                        );
                      this.props.accessibilityLayer &&
                        ((d.tabIndex =
                          null !== (t = this.props.tabIndex) && void 0 !== t
                            ? t
                            : 0),
                        (d.role =
                          null !== (e = this.props.role) && void 0 !== e
                            ? e
                            : "application"),
                        (d.onKeyDown = function (t) {
                          n.accessibilityManager.keyboardEvent(t);
                        }),
                        (d.onFocus = function () {
                          n.accessibilityManager.focus();
                        }));
                      var y = this.parseEventsOfWrapper();
                      return r.createElement(
                        tl.br,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        r.createElement(
                          "div",
                          tJ(
                            {
                              className: (0, v.Z)("recharts-wrapper", a),
                              style: t9(
                                {
                                  position: "relative",
                                  cursor: "default",
                                  width: u,
                                  height: c,
                                },
                                l
                              ),
                            },
                            y,
                            {
                              ref: function (t) {
                                n.container = t;
                              },
                            }
                          ),
                          r.createElement(
                            g.T,
                            tJ({}, d, {
                              width: u,
                              height: c,
                              title: f,
                              desc: p,
                              style: er,
                            }),
                            this.renderClipPath(),
                            (0, S.eu)(o, this.renderMap)
                          ),
                          this.renderLegend(),
                          this.renderTooltip()
                        )
                      );
                    },
                  },
                ]),
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, ee(r.key), r);
                  }
                })(i.prototype, e),
                Object.defineProperty(i, "prototype", { writable: !1 }),
                i
              );
            })(r.Component)),
            et(e, "displayName", n),
            et(
              e,
              "defaultProps",
              t9(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                O
              )
            ),
            et(e, "getDerivedStateFromProps", function (t, e) {
              var n = t.dataKey,
                r = t.data,
                i = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = ey(t);
                return t9(
                  t9(
                    t9({}, h),
                    {},
                    { updateId: 0 },
                    A(t9(t9({ props: t }, h), {}, { updateId: 0 }), e)
                  ),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: u,
                    prevLayout: c,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i,
                  }
                );
              }
              if (
                n !== e.prevDataKey ||
                r !== e.prevData ||
                a !== e.prevWidth ||
                u !== e.prevHeight ||
                c !== e.prevLayout ||
                l !== e.prevStackOffset ||
                !(0, tE.w)(s, e.prevMargin)
              ) {
                var d = ey(t),
                  y = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = t9(t9({}, es(e, r, c)), {}, { updateId: e.updateId + 1 }),
                  m = t9(t9(t9({}, d), y), v);
                return t9(
                  t9(t9({}, m), A(t9({ props: t }, m), e)),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: u,
                    prevLayout: c,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i,
                  }
                );
              }
              if (!(0, S.rL)(i, e.prevChildren)) {
                var g,
                  b,
                  x,
                  O,
                  w = (0, S.sP)(i, X),
                  j =
                    w &&
                    null !==
                      (g =
                        null === (b = w.props) || void 0 === b
                          ? void 0
                          : b.startIndex) &&
                    void 0 !== g
                      ? g
                      : f,
                  P =
                    w &&
                    null !==
                      (x =
                        null === (O = w.props) || void 0 === O
                          ? void 0
                          : O.endIndex) &&
                    void 0 !== x
                      ? x
                      : p,
                  E =
                    o()(r) || j !== f || P !== p ? e.updateId + 1 : e.updateId;
                return t9(
                  t9(
                    { updateId: E },
                    A(
                      t9(
                        t9({ props: t }, e),
                        {},
                        { updateId: E, dataStartIndex: j, dataEndIndex: P }
                      ),
                      e
                    )
                  ),
                  {},
                  { prevChildren: i, dataStartIndex: j, dataEndIndex: P }
                );
              }
              return null;
            }),
            et(e, "renderActiveDot", function (t, e) {
              var n;
              return (
                (n = (0, r.isValidElement)(t)
                  ? (0, r.cloneElement)(t, e)
                  : u()(t)
                  ? t(e)
                  : r.createElement(w.o, e)),
                r.createElement(
                  b.m,
                  { className: "recharts-active-dot", key: e.key },
                  n
                )
              );
            }),
            e
          );
        };
    },
    7302: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return P;
        },
      });
      var r = n(2784),
        i = n(1842),
        o = n.n(i),
        a = n(61049),
        u = n.n(a),
        c = n(29259),
        l = n.n(c),
        s = n(29112),
        f = n(86731),
        p = n(10997),
        h = n(523),
        d = n(15788);
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var v = ["offset"];
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != y(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != y(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == y(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var O = function (t) {
          var e = t.value,
            n = t.formatter,
            r = o()(t.children) ? e : t.children;
          return u()(n) ? n(r) : r;
        },
        w = function (t, e, n) {
          var i,
            a,
            u = t.position,
            c = t.viewBox,
            l = t.offset,
            f = t.className,
            p = c.cx,
            y = c.cy,
            v = c.innerRadius,
            m = c.outerRadius,
            g = c.startAngle,
            b = c.endAngle,
            O = c.clockWise,
            w = (v + m) / 2,
            j = (0, h.uY)(b - g) * Math.min(Math.abs(b - g), 360),
            S = j >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((i = g + S * l), (a = O))
            : "insideEnd" === u
            ? ((i = b - S * l), (a = !O))
            : "end" === u && ((i = b + S * l), (a = O)),
            (a = j <= 0 ? a : !a);
          var P = (0, d.op)(p, y, w, i),
            A = (0, d.op)(p, y, w, i + (a ? 1 : -1) * 359),
            E = "M"
              .concat(P.x, ",")
              .concat(P.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(A.x, ",")
              .concat(A.y),
            k = o()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
          return r.createElement(
            "text",
            x({}, n, {
              dominantBaseline: "central",
              className: (0, s.Z)("recharts-radial-bar-label", f),
            }),
            r.createElement(
              "defs",
              null,
              r.createElement("path", { id: k, d: E })
            ),
            r.createElement("textPath", { xlinkHref: "#".concat(k) }, e)
          );
        },
        j = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            i = e.cx,
            o = e.cy,
            a = e.innerRadius,
            u = e.outerRadius,
            c = (e.startAngle + e.endAngle) / 2;
          if ("outside" === r) {
            var l = (0, d.op)(i, o, u + n, c),
              s = l.x;
            return {
              x: s,
              y: l.y,
              textAnchor: s >= i ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: i,
              y: o,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: i,
              y: o,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: i, y: o, textAnchor: "middle", verticalAnchor: "end" };
          var f = (0, d.op)(i, o, (a + u) / 2, c);
          return {
            x: f.x,
            y: f.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        S = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            i = t.position,
            o = e.x,
            a = e.y,
            u = e.width,
            c = e.height,
            s = c >= 0 ? 1 : -1,
            f = s * r,
            p = s > 0 ? "end" : "start",
            d = s > 0 ? "start" : "end",
            y = u >= 0 ? 1 : -1,
            v = y * r,
            m = y > 0 ? "end" : "start",
            g = y > 0 ? "start" : "end";
          if ("top" === i)
            return b(
              b(
                {},
                {
                  x: o + u / 2,
                  y: a - s * r,
                  textAnchor: "middle",
                  verticalAnchor: p,
                }
              ),
              n ? { height: Math.max(a - n.y, 0), width: u } : {}
            );
          if ("bottom" === i)
            return b(
              b(
                {},
                {
                  x: o + u / 2,
                  y: a + c + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                }
              ),
              n
                ? { height: Math.max(n.y + n.height - (a + c), 0), width: u }
                : {}
            );
          if ("left" === i) {
            var x = {
              x: o - v,
              y: a + c / 2,
              textAnchor: m,
              verticalAnchor: "middle",
            };
            return b(
              b({}, x),
              n ? { width: Math.max(x.x - n.x, 0), height: c } : {}
            );
          }
          if ("right" === i) {
            var O = {
              x: o + u + v,
              y: a + c / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return b(
              b({}, O),
              n ? { width: Math.max(n.x + n.width - O.x, 0), height: c } : {}
            );
          }
          var w = n ? { width: u, height: c } : {};
          return "insideLeft" === i
            ? b(
                {
                  x: o + v,
                  y: a + c / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideRight" === i
            ? b(
                {
                  x: o + u - v,
                  y: a + c / 2,
                  textAnchor: m,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideTop" === i
            ? b(
                {
                  x: o + u / 2,
                  y: a + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                w
              )
            : "insideBottom" === i
            ? b(
                {
                  x: o + u / 2,
                  y: a + c - f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                w
              )
            : "insideTopLeft" === i
            ? b({ x: o + v, y: a + f, textAnchor: g, verticalAnchor: d }, w)
            : "insideTopRight" === i
            ? b({ x: o + u - v, y: a + f, textAnchor: m, verticalAnchor: d }, w)
            : "insideBottomLeft" === i
            ? b({ x: o + v, y: a + c - f, textAnchor: g, verticalAnchor: p }, w)
            : "insideBottomRight" === i
            ? b(
                {
                  x: o + u - v,
                  y: a + c - f,
                  textAnchor: m,
                  verticalAnchor: p,
                },
                w
              )
            : l()(i) &&
              ((0, h.hj)(i.x) || (0, h.hU)(i.x)) &&
              ((0, h.hj)(i.y) || (0, h.hU)(i.y))
            ? b(
                {
                  x: o + (0, h.h1)(i.x, u),
                  y: a + (0, h.h1)(i.y, c),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                w
              )
            : b(
                {
                  x: o + u / 2,
                  y: a + c / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                w
              );
        };
      function P(t) {
        var e,
          n = t.offset,
          i = b(
            { offset: void 0 === n ? 5 : n },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (i[n] = t[n]);
              }
              return i;
            })(t, v)
          ),
          a = i.viewBox,
          c = i.position,
          l = i.value,
          d = i.children,
          y = i.content,
          m = i.className,
          g = i.textBreakAll;
        if (!a || (o()(l) && o()(d) && !(0, r.isValidElement)(y) && !u()(y)))
          return null;
        if ((0, r.isValidElement)(y)) return (0, r.cloneElement)(y, i);
        if (u()(y)) {
          if (((e = (0, r.createElement)(y, i)), (0, r.isValidElement)(e)))
            return e;
        } else e = O(i);
        var P = "cx" in a && (0, h.hj)(a.cx),
          A = (0, p.L6)(i, !0);
        if (P && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return w(i, e, A);
        var E = P ? j(i) : S(i);
        return r.createElement(
          f.x,
          x(
            { className: (0, s.Z)("recharts-label", void 0 === m ? "" : m) },
            A,
            E,
            { breakAll: g }
          ),
          e
        );
      }
      P.displayName = "Label";
      var A = function (t) {
        var e = t.cx,
          n = t.cy,
          r = t.angle,
          i = t.startAngle,
          o = t.endAngle,
          a = t.r,
          u = t.radius,
          c = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, h.hj)(y) && (0, h.hj)(v)) {
          if ((0, h.hj)(s) && (0, h.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.hj)(p) && (0, h.hj)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.hj)(s) && (0, h.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.hj)(e) && (0, h.hj)(n)
          ? {
              cx: e,
              cy: n,
              startAngle: i || r || 0,
              endAngle: o || r || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (P.parseViewBox = A),
        (P.renderCallByParent = function (t, e) {
          var n,
            i,
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && o && !t.label)) return null;
          var a = t.children,
            c = A(t),
            s = (0, p.NN)(a, P).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { viewBox: e || c, key: "label-".concat(n) });
            });
          return o
            ? [
                ((n = t.label),
                (i = e || c),
                n
                  ? !0 === n
                    ? r.createElement(P, { key: "label-implicit", viewBox: i })
                    : (0, h.P2)(n)
                    ? r.createElement(P, {
                        key: "label-implicit",
                        viewBox: i,
                        value: n,
                      })
                    : (0, r.isValidElement)(n)
                    ? n.type === P
                      ? (0, r.cloneElement)(n, {
                          key: "label-implicit",
                          viewBox: i,
                        })
                      : r.createElement(P, {
                          key: "label-implicit",
                          content: n,
                          viewBox: i,
                        })
                    : u()(n)
                    ? r.createElement(P, {
                        key: "label-implicit",
                        content: n,
                        viewBox: i,
                      })
                    : l()(n)
                    ? r.createElement(
                        P,
                        x({ viewBox: i }, n, { key: "label-implicit" })
                      )
                    : null
                  : null),
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return m(t);
                })(s) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(s) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return m(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return m(t, void 0);
                    }
                  })(s) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : s;
        });
    },
    41250: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return P;
        },
      });
      var r = n(2784),
        i = n(1842),
        o = n.n(i),
        a = n(29259),
        u = n.n(a),
        c = n(61049),
        l = n.n(c),
        s = n(56974),
        f = n.n(s),
        p = n(7302),
        h = n(42629),
        d = n(10997),
        y = n(27721);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var m = ["valueAccessor"],
        g = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != v(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function j(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      var S = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function P(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? S : e,
          i = j(t, m),
          a = i.data,
          u = i.dataKey,
          c = i.clockWise,
          l = i.id,
          s = i.textBreakAll,
          f = j(i, g);
        return a && a.length
          ? r.createElement(
              h.m,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var i = o()(u) ? n(t, e) : (0, y.F$)(t && t.payload, u),
                  a = o()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return r.createElement(
                  p._,
                  x({}, (0, d.L6)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: i,
                    textBreakAll: s,
                    viewBox: p._.parseViewBox(
                      o()(c) ? t : w(w({}, t), {}, { clockWise: c })
                    ),
                    key: "label-".concat(e),
                    index: e,
                  })
                );
              })
            )
          : null;
      }
      (P.displayName = "LabelList"),
        (P.renderCallByParent = function (t, e) {
          var n,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && i && !t.label)) return null;
          var o = t.children,
            a = (0, d.NN)(o, P).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { data: e, key: "labelList-".concat(n) });
            });
          return i
            ? [
                (n = t.label)
                  ? !0 === n
                    ? r.createElement(P, { key: "labelList-implicit", data: e })
                    : r.isValidElement(n) || l()(n)
                    ? r.createElement(P, {
                        key: "labelList-implicit",
                        data: e,
                        content: n,
                      })
                    : u()(n)
                    ? r.createElement(
                        P,
                        x({ data: e }, n, { key: "labelList-implicit" })
                      )
                    : null
                  : null,
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return b(t);
                })(a) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(a) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return b(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return b(t, void 0);
                    }
                  })(a) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : a;
        });
    },
    28335: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return I;
        },
      });
      var r = n(2784),
        i = n(61049),
        o = n.n(i),
        a = n(29112),
        u = n(89951),
        c = n(1099),
        l = n(55238),
        s = n(69888);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (d = function () {
          return !!t;
        })();
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function v(t, e) {
        return (v = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function m(t, e, n) {
        return (
          (e = g(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function g(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != f(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : String(e);
      }
      var b = (function (t) {
        var e;
        function n() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (t = n),
            (e = arguments),
            (t = y(t)),
            (function (t, e) {
              if (e && ("object" === f(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              d()
                ? Reflect.construct(t, e || [], y(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && v(t, e);
          })(n, t),
          (e = [
            {
              key: "renderIcon",
              value: function (t) {
                var e = this.props.inactiveColor,
                  n = 32 / 6,
                  i = 32 / 3,
                  o = t.inactive ? e : t.color;
                if ("plainline" === t.type)
                  return r.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: o,
                    strokeDasharray: t.payload.strokeDasharray,
                    x1: 0,
                    y1: 16,
                    x2: 32,
                    y2: 16,
                    className: "recharts-legend-icon",
                  });
                if ("line" === t.type)
                  return r.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: o,
                    d: "M0,"
                      .concat(16, "h")
                      .concat(i, "\n            A")
                      .concat(n, ",")
                      .concat(n, ",0,1,1,")
                      .concat(2 * i, ",")
                      .concat(16, "\n            H")
                      .concat(32, "M")
                      .concat(2 * i, ",")
                      .concat(16, "\n            A")
                      .concat(n, ",")
                      .concat(n, ",0,1,1,")
                      .concat(i, ",")
                      .concat(16),
                    className: "recharts-legend-icon",
                  });
                if ("rect" === t.type)
                  return r.createElement("path", {
                    stroke: "none",
                    fill: o,
                    d: "M0,"
                      .concat(4, "h")
                      .concat(32, "v")
                      .concat(24, "h")
                      .concat(-32, "z"),
                    className: "recharts-legend-icon",
                  });
                if (r.isValidElement(t.legendIcon)) {
                  var a = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? h(Object(n), !0).forEach(function (e) {
                            m(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : h(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  return delete a.legendIcon, r.cloneElement(t.legendIcon, a);
                }
                return r.createElement(l.v, {
                  fill: o,
                  cx: 16,
                  cy: 16,
                  size: 32,
                  sizeType: "diameter",
                  type: t.type,
                });
              },
            },
            {
              key: "renderItems",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.payload,
                  i = e.iconSize,
                  l = e.layout,
                  f = e.formatter,
                  h = e.inactiveColor,
                  d = { x: 0, y: 0, width: 32, height: 32 },
                  y = {
                    display: "horizontal" === l ? "inline-block" : "block",
                    marginRight: 10,
                  },
                  v = {
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4,
                  };
                return n.map(function (e, n) {
                  var l = e.formatter || f,
                    g = (0, a.Z)(
                      m(
                        m(
                          { "recharts-legend-item": !0 },
                          "legend-item-".concat(n),
                          !0
                        ),
                        "inactive",
                        e.inactive
                      )
                    );
                  if ("none" === e.type) return null;
                  var b = o()(e.value) ? null : e.value;
                  (0,
                  u.Z)(!o()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                  var x = e.inactive ? h : e.color;
                  return r.createElement(
                    "li",
                    p(
                      { className: g, style: y, key: "legend-item-".concat(n) },
                      (0, s.bw)(t.props, e, n)
                    ),
                    r.createElement(
                      c.T,
                      { width: i, height: i, viewBox: d, style: v },
                      t.renderIcon(e)
                    ),
                    r.createElement(
                      "span",
                      {
                        className: "recharts-legend-item-text",
                        style: { color: x },
                      },
                      l ? l(b, e, n) : b
                    )
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.payload,
                  n = t.layout,
                  i = t.align;
                return e && e.length
                  ? r.createElement(
                      "ul",
                      {
                        className: "recharts-default-legend",
                        style: {
                          padding: 0,
                          margin: 0,
                          textAlign: "horizontal" === n ? i : "left",
                        },
                      },
                      this.renderItems()
                    )
                  : null;
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, g(r.key), r);
            }
          })(n.prototype, e),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(r.PureComponent);
      m(b, "displayName", "Legend"),
        m(b, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var x = n(523),
        O = n(57015);
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var j = ["ref"];
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                _(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function A(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r);
        }
      }
      function E() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (E = function () {
          return !!t;
        })();
      }
      function k(t) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function M(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function T(t, e) {
        return (T = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function _(t, e, n) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != w(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : String(e);
      }
      function D(t) {
        return t.value;
      }
      var I = (function (t) {
        var e, n;
        function i() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          for (
            var t, e, n, r = arguments.length, o = Array(r), a = 0;
            a < r;
            a++
          )
            o[a] = arguments[a];
          return (
            (e = i),
            (n = [].concat(o)),
            (e = k(e)),
            (t = (function (t, e) {
              if (e && ("object" === w(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return M(t);
            })(
              this,
              E()
                ? Reflect.construct(e, n || [], k(this).constructor)
                : e.apply(this, n)
            )),
            _(M(t), "lastBoundingBox", { width: -1, height: -1 }),
            t
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && T(t, e);
          })(i, t),
          (e = [
            {
              key: "componentDidMount",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "getBBox",
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 !== this.lastBoundingBox.width ||
                      -1 !== this.lastBoundingBox.height) &&
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? P({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  i = r.layout,
                  o = r.align,
                  a = r.verticalAlign,
                  u = r.margin,
                  c = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === o && "vertical" === i
                        ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === o
                        ? { right: (u && u.right) || 0 }
                        : { left: (u && u.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (n =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  P(P({}, e), n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  i = e.width,
                  o = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = P(
                    P(
                      {
                        position: "absolute",
                        width: i || "auto",
                        height: o || "auto",
                      },
                      this.getDefaultPosition(a)
                    ),
                    a
                  );
                return r.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (r.isValidElement(t)) return r.cloneElement(t, e);
                    if ("function" == typeof t) return r.createElement(t, e);
                    e.ref;
                    var n = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            i = {},
                            o = Object.keys(t);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (i[n] = t[n]);
                      }
                      return i;
                    })(e, j);
                    return r.createElement(b, n);
                  })(
                    n,
                    P(P({}, this.props), {}, { payload: (0, O.z)(c, u, D) })
                  )
                );
              },
            },
          ]),
          (n = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var n = t.props.layout;
                return "vertical" === n && (0, x.hj)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === n
                  ? { width: t.props.width || e }
                  : null;
              },
            },
          ]),
          e && A(i.prototype, e),
          n && A(i, n),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(r.PureComponent);
      _(I, "displayName", "Legend"),
        _(I, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    97433: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return y;
        },
      });
      var r = n(29112),
        i = n(2784),
        o = n(12436),
        a = n.n(o),
        u = n(48570),
        c = n(523),
        l = n(89951),
        s = n(10997);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != f(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != f(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == f(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var y = (0, i.forwardRef)(function (t, e) {
        var n,
          o = t.aspect,
          f = t.initialDimension,
          p = void 0 === f ? { width: -1, height: -1 } : f,
          y = t.width,
          v = void 0 === y ? "100%" : y,
          m = t.height,
          g = void 0 === m ? "100%" : m,
          b = t.minWidth,
          x = void 0 === b ? 0 : b,
          O = t.minHeight,
          w = t.maxHeight,
          j = t.children,
          S = t.debounce,
          P = void 0 === S ? 0 : S,
          A = t.id,
          E = t.className,
          k = t.onResize,
          M = t.style,
          T = (0, i.useRef)(null),
          _ = (0, i.useRef)();
        (_.current = k),
          (0, i.useImperativeHandle)(e, function () {
            return Object.defineProperty(T.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported."
                  ),
                  T.current
                );
              },
              configurable: !0,
            });
          });
        var C =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (n = (0, i.useState)({
                containerWidth: p.width,
                containerHeight: p.height,
              }))
            ) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    o = (n = n.call(t)).next;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (i = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw i;
                  }
                }
                return u;
              }
            })(n, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return d(t, 2);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return d(t, 2);
              }
            })(n, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          D = C[0],
          I = C[1],
          N = (0, i.useCallback)(function (t, e) {
            I(function (n) {
              var r = Math.round(t),
                i = Math.round(e);
              return n.containerWidth === r && n.containerHeight === i
                ? n
                : { containerWidth: r, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(
          function () {
            var t = function (t) {
              var e,
                n = t[0].contentRect,
                r = n.width,
                i = n.height;
              N(r, i),
                null === (e = _.current) || void 0 === e || e.call(_, r, i);
            };
            P > 0 && (t = a()(t, P, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              n = T.current.getBoundingClientRect();
            return (
              N(n.width, n.height),
              e.observe(T.current),
              function () {
                e.disconnect();
              }
            );
          },
          [N, P]
        );
        var B = (0, i.useMemo)(
          function () {
            var t = D.containerWidth,
              e = D.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.Z)(
              (0, c.hU)(v) || (0, c.hU)(g),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              v,
              g
            ),
              (0, l.Z)(
                !o || o > 0,
                "The aspect(%s) must be greater than zero.",
                o
              );
            var n = (0, c.hU)(v) ? t : v,
              r = (0, c.hU)(g) ? e : g;
            o &&
              o > 0 &&
              (n ? (r = n / o) : r && (n = r * o), w && r > w && (r = w)),
              (0, l.Z)(
                n > 0 || r > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                r,
                v,
                g,
                x,
                O,
                o
              );
            var a =
              !Array.isArray(j) &&
              (0, u.isElement)(j) &&
              (0, s.Gf)(j.type).endsWith("Chart");
            return i.Children.map(j, function (t) {
              return (0, u.isElement)(t)
                ? (0, i.cloneElement)(
                    t,
                    h(
                      { width: n, height: r },
                      a
                        ? {
                            style: h(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: r,
                                maxWidth: n,
                              },
                              t.props.style
                            ),
                          }
                        : {}
                    )
                  )
                : t;
            });
          },
          [o, j, g, w, O, x, D, v]
        );
        return i.createElement(
          "div",
          {
            id: A ? "".concat(A) : void 0,
            className: (0, r.Z)("recharts-responsive-container", E),
            style: h(
              h({}, void 0 === M ? {} : M),
              {},
              { width: v, height: g, minWidth: x, minHeight: O, maxHeight: w }
            ),
            ref: T,
          },
          B
        );
      });
    },
    86731: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return L;
        },
      });
      var r = n(2784),
        i = n(1842),
        o = n.n(i),
        a = n(29112),
        u = n(523),
        c = n(72549),
        l = n(10997),
        s = n(45570);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return h(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              t,
              (function (t) {
                var e = (function (t, e) {
                  if ("object" != f(t) || !t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != f(r)) return r;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == f(e) ? e : String(e);
              })(r.key),
              r
            );
        }
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        g = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        b = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(b),
        O = (function () {
          var t, e;
          function n(t, e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              (this.num = t),
              (this.unit = e),
              (this.num = t),
              (this.unit = e),
              Number.isNaN(t) && (this.unit = ""),
              "" === e || m.test(e) || ((this.num = NaN), (this.unit = "")),
              x.includes(e) && ((this.num = t * b[e]), (this.unit = "px"));
          }
          return (
            (t = [
              {
                key: "add",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num + t.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num - t.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num * t.num, this.unit || t.unit);
                },
              },
              {
                key: "divide",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num / t.num, this.unit || t.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ]),
            (e = [
              {
                key: "parse",
                value: function (t) {
                  var e,
                    r = p(null !== (e = g.exec(t)) && void 0 !== e ? e : [], 3),
                    i = r[1],
                    o = r[2];
                  return new n(parseFloat(i), null != o ? o : "");
                },
              },
            ]),
            t && d(n.prototype, t),
            e && d(n, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })();
      function w(t) {
        if (t.includes("NaN")) return "NaN";
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var n,
            r = p(null !== (n = y.exec(e)) && void 0 !== n ? n : [], 4),
            i = r[1],
            o = r[2],
            a = r[3],
            u = O.parse(null != i ? i : ""),
            c = O.parse(null != a ? a : ""),
            l = "*" === o ? u.multiply(c) : u.divide(c);
          if (l.isNaN()) return "NaN";
          e = e.replace(y, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = v.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            d = f[2],
            m = f[3],
            g = O.parse(null != h ? h : ""),
            b = O.parse(null != m ? m : ""),
            x = "+" === d ? g.add(b) : g.subtract(b);
          if (x.isNaN()) return "NaN";
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var j = /\(([^()]*)\)/;
      function S(t) {
        var e = (function (t) {
          try {
            var e;
            return (
              (e = t.replace(/\s+/g, "")),
              (e = (function (t) {
                for (var e = t; e.includes("("); ) {
                  var n = p(j.exec(e), 2)[1];
                  e = e.replace(j, w(n));
                }
                return e;
              })(e)),
              (e = w(e))
            );
          } catch (t) {
            return "NaN";
          }
        })(t.slice(5, -1));
        return "NaN" === e ? "" : e;
      }
      var P = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        A = ["dx", "dy", "angle", "className", "breakAll"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function M(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return T(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return T(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var _ = /[ \f\n\r\t\v\u2028\u2029]+/,
        C = function (t) {
          var e = t.children,
            n = t.breakAll,
            r = t.style;
          try {
            var i = [];
            o()(e) || (i = n ? e.toString().split("") : e.toString().split(_));
            var a = i.map(function (t) {
                return { word: t, width: (0, s.xE)(t, r).width };
              }),
              u = n ? 0 : (0, s.xE)("\xa0", r).width;
            return { wordsWithComputedWidth: a, spaceWidth: u };
          } catch (t) {
            return null;
          }
        },
        D = function (t, e, n, r, i) {
          var o,
            a = t.maxLines,
            c = t.children,
            l = t.style,
            s = t.breakAll,
            f = (0, u.hj)(a),
            p = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.reduce(function (t, e) {
                var o = e.word,
                  a = e.width,
                  u = t[t.length - 1];
                return (
                  u && (null == r || i || u.width + a + n < Number(r))
                    ? (u.words.push(o), (u.width += a + n))
                    : t.push({ words: [o], width: a }),
                  t
                );
              }, []);
            },
            h = p(e);
          if (!f) return h;
          for (
            var d = function (t) {
                var e = p(
                  C({ breakAll: s, style: l, children: c.slice(0, t) + "…" })
                    .wordsWithComputedWidth
                );
                return [
                  e.length > a ||
                    e.reduce(function (t, e) {
                      return t.width > e.width ? t : e;
                    }).width > Number(r),
                  e,
                ];
              },
              y = 0,
              v = c.length - 1,
              m = 0;
            y <= v && m <= c.length - 1;

          ) {
            var g = Math.floor((y + v) / 2),
              b = M(d(g - 1), 2),
              x = b[0],
              O = b[1],
              w = M(d(g), 1)[0];
            if ((x || w || (y = g + 1), x && w && (v = g - 1), !x && w)) {
              o = O;
              break;
            }
            m++;
          }
          return o || h;
        },
        I = function (t) {
          return [{ words: o()(t) ? [] : t.toString().split(_) }];
        },
        N = function (t) {
          var e = t.width,
            n = t.scaleToFit,
            r = t.children,
            i = t.style,
            o = t.breakAll,
            a = t.maxLines;
          if ((e || n) && !c.x.isSsr) {
            var u = C({ breakAll: o, children: r, style: i });
            return u
              ? D(
                  { breakAll: o, children: r, maxLines: a, style: i },
                  u.wordsWithComputedWidth,
                  u.spaceWidth,
                  e,
                  n
                )
              : I(r);
          }
          return I(r);
        },
        B = "#808080",
        L = function (t) {
          var e,
            n = t.x,
            i = void 0 === n ? 0 : n,
            o = t.y,
            c = void 0 === o ? 0 : o,
            s = t.lineHeight,
            f = void 0 === s ? "1em" : s,
            p = t.capHeight,
            h = void 0 === p ? "0.71em" : p,
            d = t.scaleToFit,
            y = void 0 !== d && d,
            v = t.textAnchor,
            m = t.verticalAnchor,
            g = t.fill,
            b = void 0 === g ? B : g,
            x = k(t, P),
            O = (0, r.useMemo)(
              function () {
                return N({
                  breakAll: x.breakAll,
                  children: x.children,
                  maxLines: x.maxLines,
                  scaleToFit: y,
                  style: x.style,
                  width: x.width,
                });
              },
              [x.breakAll, x.children, x.maxLines, y, x.style, x.width]
            ),
            w = x.dx,
            j = x.dy,
            M = x.angle,
            T = x.className,
            _ = x.breakAll,
            C = k(x, A);
          if (!(0, u.P2)(i) || !(0, u.P2)(c)) return null;
          var D = i + ((0, u.hj)(w) ? w : 0),
            I = c + ((0, u.hj)(j) ? j : 0);
          switch (void 0 === m ? "end" : m) {
            case "start":
              e = S("calc(".concat(h, ")"));
              break;
            case "middle":
              e = S(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(f, " + (")
                  .concat(h, " / 2))")
              );
              break;
            default:
              e = S("calc(".concat(O.length - 1, " * -").concat(f, ")"));
          }
          var L = [];
          if (y) {
            var R = O[0].width,
              $ = x.width;
            L.push("scale(".concat(((0, u.hj)($) ? $ / R : 1) / R, ")"));
          }
          return (
            M &&
              L.push("rotate(".concat(M, ", ").concat(D, ", ").concat(I, ")")),
            L.length && (C.transform = L.join(" ")),
            r.createElement(
              "text",
              E({}, (0, l.L6)(C, !0), {
                x: D,
                y: I,
                className: (0, a.Z)("recharts-text", T),
                textAnchor: void 0 === v ? "start" : v,
                fill: b.includes("url") ? B : b,
              }),
              O.map(function (t, n) {
                var i = t.words.join(_ ? "" : " ");
                return r.createElement(
                  "tspan",
                  { x: D, dy: 0 === n ? e : f, key: i },
                  i
                );
              })
            )
          );
        };
    },
    44894: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return Z;
        },
      });
      var r = n(2784),
        i = n(829),
        o = n.n(i),
        a = n(1842),
        u = n.n(a),
        c = n(29112),
        l = n(523);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != s(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function y(t) {
        return Array.isArray(t) && (0, l.P2)(t[0]) && (0, l.P2)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var v = function (t) {
        var e = t.separator,
          n = void 0 === e ? " : " : e,
          i = t.contentStyle,
          a = t.itemStyle,
          s = void 0 === a ? {} : a,
          h = t.labelStyle,
          v = t.payload,
          m = t.formatter,
          g = t.itemSorter,
          b = t.wrapperClassName,
          x = t.labelClassName,
          O = t.label,
          w = t.labelFormatter,
          j = t.accessibilityLayer,
          S = d(
            {
              margin: 0,
              padding: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              whiteSpace: "nowrap",
            },
            void 0 === i ? {} : i
          ),
          P = d({ margin: 0 }, void 0 === h ? {} : h),
          A = !u()(O),
          E = A ? O : "",
          k = (0, c.Z)("recharts-default-tooltip", b),
          M = (0, c.Z)("recharts-tooltip-label", x);
        return (
          A && w && null != v && (E = w(O, v)),
          r.createElement(
            "div",
            f(
              { className: k, style: S },
              void 0 !== j && j
                ? { role: "status", "aria-live": "assertive" }
                : {}
            ),
            r.createElement(
              "p",
              { className: M, style: P },
              r.isValidElement(E) ? E : "".concat(E)
            ),
            (function () {
              if (v && v.length) {
                var t = (g ? o()(v, g) : v).map(function (t, e) {
                  if ("none" === t.type) return null;
                  var i = d(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      s
                    ),
                    o = t.formatter || m || y,
                    a = t.value,
                    u = t.name,
                    c = a,
                    f = u;
                  if (o && null != c && null != f) {
                    var h = o(a, u, t, e, v);
                    if (Array.isArray(h)) {
                      var g =
                        (function (t) {
                          if (Array.isArray(t)) return t;
                        })(h) ||
                        (function (t, e) {
                          var n =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != n) {
                            var r,
                              i,
                              o,
                              a,
                              u = [],
                              c = !0,
                              l = !1;
                            try {
                              for (
                                o = (n = n.call(t)).next;
                                !(c = (r = o.call(n)).done) &&
                                (u.push(r.value), 2 !== u.length);
                                c = !0
                              );
                            } catch (t) {
                              (l = !0), (i = t);
                            } finally {
                              try {
                                if (
                                  !c &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (l) throw i;
                              }
                            }
                            return u;
                          }
                        })(h, 2) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, 2);
                            var n = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                              return p(t, 2);
                          }
                        })(h, 2) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })();
                      (c = g[0]), (f = g[1]);
                    } else c = h;
                  }
                  return r.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(e),
                      style: i,
                    },
                    (0, l.P2)(f)
                      ? r.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          f
                        )
                      : null,
                    (0, l.P2)(f)
                      ? r.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          n
                        )
                      : null,
                    r.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      c
                    ),
                    r.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      t.unit || ""
                    )
                  );
                });
                return r.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  t
                );
              }
              return null;
            })()
          )
        );
      };
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function g(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != m(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != m(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == m(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var b = "recharts-tooltip-wrapper",
        x = { visibility: "hidden" };
      function O(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          i = t.offsetTopLeft,
          o = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (o && (0, l.hj)(o[r])) return o[r];
        var f = n[r] - u - i,
          p = n[r] + i;
        return e[r]
          ? a[r]
            ? f
            : p
          : a[r]
          ? f < c[r]
            ? Math.max(p, c[r])
            : Math.max(f, c[r])
          : p + u > c[r] + s
          ? Math.max(f, c[r])
          : Math.max(p, c[r]);
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function j(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                M(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function P() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (P = function () {
          return !!t;
        })();
      }
      function A(t) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function E(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function k(t, e) {
        return (k = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function M(t, e, n) {
        return (
          (e = T(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function T(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != w(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : String(e);
      }
      var _ = (function (t) {
          var e;
          function n() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n);
            for (
              var t, e, r, i = arguments.length, o = Array(i), a = 0;
              a < i;
              a++
            )
              o[a] = arguments[a];
            return (
              (e = n),
              (r = [].concat(o)),
              (e = A(e)),
              (t = (function (t, e) {
                if (e && ("object" === w(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return E(t);
              })(
                this,
                P()
                  ? Reflect.construct(e, r || [], A(this).constructor)
                  : e.apply(this, r)
              )),
              M(E(t), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
                lastBoundingBox: { width: -1, height: -1 },
              }),
              M(E(t), "handleKeyDown", function (e) {
                if ("Escape" === e.key) {
                  var n, r, i, o;
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (n =
                            null === (r = t.props.coordinate) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0,
                      y:
                        null !==
                          (i =
                            null === (o = t.props.coordinate) || void 0 === o
                              ? void 0
                              : o.y) && void 0 !== i
                          ? i
                          : 0,
                    },
                  });
                }
              }),
              t
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && k(t, e);
            })(n, t),
            (e = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.state.lastBoundingBox.height) >
                        1) &&
                      this.setState({
                        lastBoundingBox: { width: t.width, height: t.height },
                      });
                  } else
                    (-1 !== this.state.lastBoundingBox.width ||
                      -1 !== this.state.lastBoundingBox.height) &&
                      this.setState({
                        lastBoundingBox: { width: -1, height: -1 },
                      });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyDown),
                    this.updateBBox();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      ((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) !== this.state.dismissedAtCoordinate.x ||
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) !== this.state.dismissedAtCoordinate.y) &&
                      (this.state.dismissed = !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e,
                    n,
                    i,
                    o,
                    a,
                    u,
                    s,
                    f,
                    p,
                    h,
                    d,
                    y,
                    v,
                    m,
                    w,
                    j,
                    P,
                    A,
                    E = this,
                    k = this.props,
                    M = k.active,
                    T = k.allowEscapeViewBox,
                    _ = k.animationDuration,
                    C = k.animationEasing,
                    D = k.children,
                    I = k.coordinate,
                    N = k.hasPayload,
                    B = k.isAnimationActive,
                    L = k.offset,
                    R = k.position,
                    $ = k.reverseDirection,
                    z = k.useTranslate3d,
                    U = k.viewBox,
                    F = k.wrapperStyle,
                    Z =
                      ((d = (t = {
                        allowEscapeViewBox: T,
                        coordinate: I,
                        offsetTopLeft: L,
                        position: R,
                        reverseDirection: $,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: z,
                        viewBox: U,
                      }).allowEscapeViewBox),
                      (y = t.coordinate),
                      (v = t.offsetTopLeft),
                      (m = t.position),
                      (w = t.reverseDirection),
                      (j = t.tooltipBox),
                      (P = t.useTranslate3d),
                      (A = t.viewBox),
                      j.height > 0 && j.width > 0 && y
                        ? ((n = (e = {
                            translateX: (p = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "x",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.width,
                              viewBox: A,
                              viewBoxDimension: A.width,
                            })),
                            translateY: (h = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "y",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.height,
                              viewBox: A,
                              viewBoxDimension: A.height,
                            })),
                            useTranslate3d: P,
                          }).translateX),
                          (i = e.translateY),
                          (f = {
                            transform: e.useTranslate3d
                              ? "translate3d("
                                  .concat(n, "px, ")
                                  .concat(i, "px, 0)")
                              : "translate(".concat(n, "px, ").concat(i, "px)"),
                          }))
                        : (f = x),
                      {
                        cssProperties: f,
                        cssClasses:
                          ((a = (o = {
                            translateX: p,
                            translateY: h,
                            coordinate: y,
                          }).coordinate),
                          (u = o.translateX),
                          (s = o.translateY),
                          (0, c.Z)(
                            b,
                            g(
                              g(
                                g(
                                  g(
                                    {},
                                    "".concat(b, "-right"),
                                    (0, l.hj)(u) &&
                                      a &&
                                      (0, l.hj)(a.x) &&
                                      u >= a.x
                                  ),
                                  "".concat(b, "-left"),
                                  (0, l.hj)(u) && a && (0, l.hj)(a.x) && u < a.x
                                ),
                                "".concat(b, "-bottom"),
                                (0, l.hj)(s) && a && (0, l.hj)(a.y) && s >= a.y
                              ),
                              "".concat(b, "-top"),
                              (0, l.hj)(s) && a && (0, l.hj)(a.y) && s < a.y
                            )
                          )),
                      }),
                    q = Z.cssClasses,
                    W = Z.cssProperties,
                    Y = S(
                      S(
                        {
                          transition:
                            B && M
                              ? "transform ".concat(_, "ms ").concat(C)
                              : void 0,
                        },
                        W
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && M && N
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      F
                    );
                  return r.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      className: q,
                      style: Y,
                      ref: function (t) {
                        E.wrapperNode = t;
                      },
                    },
                    D
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, T(r.key), r);
              }
            })(n.prototype, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })(r.PureComponent),
        C = n(72549),
        D = n(57015);
      function I(t) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                z(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function L() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (L = function () {
          return !!t;
        })();
      }
      function R(t) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function $(t, e) {
        return ($ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function z(t, e, n) {
        return (
          (e = U(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function U(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != I(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == I(e) ? e : String(e);
      }
      function F(t) {
        return t.dataKey;
      }
      var Z = (function (t) {
        var e;
        function n() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (t = n),
            (e = arguments),
            (t = R(t)),
            (function (t, e) {
              if (e && ("object" === I(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              L()
                ? Reflect.construct(t, e || [], R(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && $(t, e);
          })(n, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  n = this.props,
                  i = n.active,
                  o = n.allowEscapeViewBox,
                  a = n.animationDuration,
                  u = n.animationEasing,
                  c = n.content,
                  l = n.coordinate,
                  s = n.filterNull,
                  f = n.isAnimationActive,
                  p = n.offset,
                  h = n.payload,
                  d = n.payloadUniqBy,
                  y = n.position,
                  m = n.reverseDirection,
                  g = n.useTranslate3d,
                  b = n.viewBox,
                  x = n.wrapperStyle,
                  O = null != h ? h : [];
                s &&
                  O.length &&
                  (O = (0, D.z)(
                    h.filter(function (t) {
                      return (
                        null != t.value &&
                        (!0 !== t.hide || e.props.includeHidden)
                      );
                    }),
                    d,
                    F
                  ));
                var w = O.length > 0;
                return r.createElement(
                  _,
                  {
                    allowEscapeViewBox: o,
                    animationDuration: a,
                    animationEasing: u,
                    isAnimationActive: f,
                    active: i,
                    coordinate: l,
                    hasPayload: w,
                    offset: p,
                    position: y,
                    reverseDirection: m,
                    useTranslate3d: g,
                    viewBox: b,
                    wrapperStyle: x,
                  },
                  ((t = B(B({}, this.props), {}, { payload: O })),
                  r.isValidElement(c)
                    ? r.cloneElement(c, t)
                    : "function" == typeof c
                    ? r.createElement(c, t)
                    : r.createElement(v, t))
                );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, U(r.key), r);
            }
          })(n.prototype, e),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(r.PureComponent);
      z(Z, "displayName", "Tooltip"),
        z(Z, "defaultProps", {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !C.x.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {},
        });
    },
    42629: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return c;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(10997),
        a = ["children", "className"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var c = r.forwardRef(function (t, e) {
        var n = t.children,
          c = t.className,
          l = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (i[n] = t[n]);
            }
            return i;
          })(t, a),
          s = (0, i.Z)("recharts-layer", c);
        return r.createElement(
          "g",
          u({ className: s }, (0, o.L6)(l, !0), { ref: e }),
          n
        );
      });
    },
    1099: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return c;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(10997),
        a = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function c(t) {
        var e = t.children,
          n = t.width,
          c = t.height,
          l = t.viewBox,
          s = t.className,
          f = t.style,
          p = t.title,
          h = t.desc,
          d = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (i[n] = t[n]);
            }
            return i;
          })(t, a),
          y = l || { width: n, height: c, x: 0, y: 0 },
          v = (0, i.Z)("recharts-surface", s);
        return r.createElement(
          "svg",
          u({}, (0, o.L6)(d, !0, "svg"), {
            className: v,
            width: n,
            height: c,
            style: f,
            viewBox: ""
              .concat(y.x, " ")
              .concat(y.y, " ")
              .concat(y.width, " ")
              .concat(y.height),
          }),
          r.createElement("title", null, p),
          r.createElement("desc", null, h),
          e
        );
      }
    },
    94533: function (t, e, n) {
      "use strict";
      n.d(e, {
        br: function () {
          return d;
        },
        Mw: function () {
          return x;
        },
        zn: function () {
          return b;
        },
        sp: function () {
          return y;
        },
        d2: function () {
          return g;
        },
        bH: function () {
          return v;
        },
        Ud: function () {
          return m;
        },
      });
      var r = n(2784),
        i = n(99356);
      n(55281), n(39794);
      var o = n(30733),
        a = n.n(o)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join(
              ""
            );
          }
        ),
        u = (0, r.createContext)(void 0),
        c = (0, r.createContext)(void 0),
        l = (0, r.createContext)(void 0),
        s = (0, r.createContext)({}),
        f = (0, r.createContext)(void 0),
        p = (0, r.createContext)(0),
        h = (0, r.createContext)(0),
        d = function (t) {
          var e = t.state,
            n = e.xAxisMap,
            i = e.yAxisMap,
            o = e.offset,
            d = t.clipPathId,
            y = t.children,
            v = t.width,
            m = t.height,
            g = a(o);
          return r.createElement(
            u.Provider,
            { value: n },
            r.createElement(
              c.Provider,
              { value: i },
              r.createElement(
                s.Provider,
                { value: o },
                r.createElement(
                  l.Provider,
                  { value: g },
                  r.createElement(
                    f.Provider,
                    { value: d },
                    r.createElement(
                      p.Provider,
                      { value: m },
                      r.createElement(h.Provider, { value: v }, y)
                    )
                  )
                )
              )
            )
          );
        },
        y = function () {
          return (0, r.useContext)(f);
        },
        v = function (t) {
          var e = (0, r.useContext)(u);
          null != e || (0, i.Z)(!1);
          var n = e[t];
          return null != n || (0, i.Z)(!1), n;
        },
        m = function (t) {
          var e = (0, r.useContext)(c);
          null != e || (0, i.Z)(!1);
          var n = e[t];
          return null != n || (0, i.Z)(!1), n;
        },
        g = function () {
          return (0, r.useContext)(l);
        },
        b = function () {
          return (0, r.useContext)(h);
        },
        x = function () {
          return (0, r.useContext)(p);
        };
    },
    62647: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return H;
        },
      });
      var r = n(2784);
      function i() {}
      function o(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6
        );
      }
      function a(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              o(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              o(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: i,
          areaEnd: i,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (c.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function h(t, e, n) {
        var r = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          a = (n - t._y1) / (i || (r < 0 && -0));
        return (
          ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(o),
              Math.abs(a),
              0.5 * Math.abs((o * i + a * r) / (r + i))
            ) || 0
        );
      }
      function d(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function y(t, e, n) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * e, o - u, a - u * n, o, a);
      }
      function v(t) {
        this._context = t;
      }
      function m(t) {
        this._context = new g(t);
      }
      function g(t) {
        this._context = t;
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        var e,
          n,
          r = t.length - 1,
          i = Array(r),
          o = Array(r),
          a = Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = i[e] / o[e - 1]), (o[e] -= n), (a[e] -= n * a[e - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], e = r - 2; e >= 0; --e)
          i[e] = (a[e] - i[e + 1]) / o[e];
        for (e = 0, o[r - 1] = (t[r] + i[r - 1]) / 2; e < r - 1; ++e)
          o[e] = 2 * t[e + 1] - i[e + 1];
        return [i, o];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: i,
        areaEnd: i,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t = +t),
            (e = +e),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      }),
        (f.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          },
        }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, d(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), y(this, d(this, (n = h(this, t, e))), n);
                  break;
                default:
                  y(this, this._t0, (n = h(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          },
        }),
        ((m.prototype = Object.create(v.prototype)).point = function (t, e) {
          v.prototype.point.call(this, e, t);
        }),
        (g.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, i, o) {
            this._context.bezierCurveTo(e, t, r, n, o, i);
          },
        }),
        (b.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              n = t.length;
            if (n) {
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === n)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var r = x(t), i = x(e), o = 0, a = 1; a < n; ++o, ++a)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    t[a],
                    e[a]
                  );
            }
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var n = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var w = n(72299),
        j = n(33554),
        S = n(37583);
      function P(t) {
        return t[0];
      }
      function A(t) {
        return t[1];
      }
      function E(t, e) {
        var n = (0, j.Z)(!0),
          r = null,
          i = p,
          o = null,
          a = (0, S.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, w.Z)(u)).length,
            p = !1;
          for (null == r && (o = i((s = a()))), c = 0; c <= f; ++c)
            !(c < f && n((l = u[c]), c, u)) === p &&
              ((p = !p) ? o.lineStart() : o.lineEnd()),
              p && o.point(+t(l, c, u), +e(l, c, u));
          if (s) return (o = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, j.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? A : (0, j.Z)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : (0, j.Z)(!!t)), u)
              : n;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((i = t), null != r && (o = i(r)), u) : i;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (r = o = null) : (o = i((r = t))), u)
              : r;
          }),
          u
        );
      }
      function k(t, e, n) {
        var r = null,
          i = (0, j.Z)(!0),
          o = null,
          a = p,
          u = null,
          c = (0, S.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, w.Z)(l)).length,
            v = !1,
            m = Array(y),
            g = Array(y);
          for (null == o && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((h = l[s]), s, l)) === v) {
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                  u.point(m[p], g[p]);
                u.lineEnd(), u.areaEnd();
              }
            }
            v &&
              ((m[s] = +t(h, s, l)),
              (g[s] = +e(h, s, l)),
              u.point(r ? +r(h, s, l) : m[s], n ? +n(h, s, l) : g[s]));
          }
          if (d) return (u = null), d + "" || null;
        }
        function s() {
          return E().defined(i).curve(a).context(o);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, j.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, j.Z)(0)
              : (0, j.Z)(+e)),
          (n = "function" == typeof n ? n : void 0 === n ? A : (0, j.Z)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), (r = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), (n = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
                l)
              : n;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(n);
          }),
          (l.lineX1 = function () {
            return s().x(r).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : (0, j.Z)(!!t)), l)
              : i;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != o && (u = a(o)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (o = u = null) : (u = a((o = t))), l)
              : o;
          }),
          l
        );
      }
      var M = n(23779),
        T = n.n(M),
        _ = n(61049),
        C = n.n(_),
        D = n(29112),
        I = n(69888),
        N = n(10997),
        B = n(523);
      function L(t) {
        return (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function R() {
        return (R = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function $(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != L(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != L(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == L(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var U = {
          curveBasisClosed: function (t) {
            return new u(t);
          },
          curveBasisOpen: function (t) {
            return new c(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new v(t);
          },
          curveMonotoneY: function (t) {
            return new m(t);
          },
          curveNatural: function (t) {
            return new b(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        F = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        Z = function (t) {
          return t.x;
        },
        q = function (t) {
          return t.y;
        },
        W = function (t, e) {
          if (C()(t)) return t;
          var n = "curve".concat(T()(t));
          return ("curveMonotone" === n || "curveBump" === n) && e
            ? U["".concat(n).concat("vertical" === e ? "Y" : "X")]
            : U[n] || p;
        },
        Y = function (t) {
          var e,
            n = t.type,
            r = t.points,
            i = void 0 === r ? [] : r,
            o = t.baseLine,
            a = t.layout,
            u = t.connectNulls,
            c = void 0 !== u && u,
            l = W(void 0 === n ? "linear" : n, a),
            s = c
              ? i.filter(function (t) {
                  return F(t);
                })
              : i;
          if (Array.isArray(o)) {
            var f = c
                ? o.filter(function (t) {
                    return F(t);
                  })
                : o,
              p = s.map(function (t, e) {
                return z(z({}, t), {}, { base: f[e] });
              });
            return (
              (e =
                "vertical" === a
                  ? k()
                      .y(q)
                      .x1(Z)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : k()
                      .x(Z)
                      .y1(q)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(F)
                .curve(l),
              e(p)
            );
          }
          return (
            (e =
              "vertical" === a && (0, B.hj)(o)
                ? k().y(q).x1(Z).x0(o)
                : (0, B.hj)(o)
                ? k().x(Z).y1(q).y0(o)
                : E().x(Z).y(q))
              .defined(F)
              .curve(l),
            e(s)
          );
        },
        H = function (t) {
          var e = t.className,
            n = t.points,
            i = t.path,
            o = t.pathRef;
          if ((!n || !n.length) && !i) return null;
          var a = n && n.length ? Y(t) : i;
          return r.createElement(
            "path",
            R({}, (0, N.L6)(t, !1), (0, I.Ym)(t), {
              className: (0, D.Z)("recharts-curve", e),
              d: a,
              ref: o,
            })
          );
        };
    },
    81145: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return c;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(69888),
        a = n(10997);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var c = function (t) {
        var e = t.cx,
          n = t.cy,
          c = t.r,
          l = t.className,
          s = (0, i.Z)("recharts-dot", l);
        return e === +e && n === +n && c === +c
          ? r.createElement(
              "circle",
              u({}, (0, a.L6)(t, !1), (0, o.Ym)(t), {
                className: s,
                cx: e,
                cy: n,
                r: c,
              })
            )
          : null;
      };
    },
    55597: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return y;
        },
        X: function () {
          return h;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(46097),
        a = n(10997);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != u(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != u(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == u(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = function (t, e, n, r, i) {
          var o,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            u = r >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
          if (a > 0 && i instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = i[f] > a ? a : i[f];
            (o = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (o += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + c * s[0], ",")
                  .concat(e)),
              (o += "L ".concat(t + n - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (o += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n, ",")
                  .concat(e + u * s[1])),
              (o += "L ".concat(t + n, ",").concat(e + r - u * s[2])),
              s[2] > 0 &&
                (o += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n - c * s[2], ",")
                  .concat(e + r)),
              (o += "L ".concat(t + c * s[3], ",").concat(e + r)),
              s[3] > 0 &&
                (o += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + r - u * s[3])),
              (o += "Z");
          } else if (a > 0 && i === +i && i > 0) {
            var p = Math.min(a, i);
            o = "M "
              .concat(t, ",")
              .concat(e + u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + c * p, ",")
              .concat(e, "\n            L ")
              .concat(t + n - c * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n, ",")
              .concat(e + u * p, "\n            L ")
              .concat(t + n, ",")
              .concat(e + r - u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n - c * p, ",")
              .concat(e + r, "\n            L ")
              .concat(t + c * p, ",")
              .concat(e + r, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + r - u * p, " Z");
          } else
            o = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(n, " v ")
              .concat(r, " h ")
              .concat(-n, " Z");
          return o;
        },
        h = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y,
            a = e.width,
            u = e.height;
          return (
            !!(Math.abs(a) > 0 && Math.abs(u) > 0) &&
            n >= Math.min(i, i + a) &&
            n <= Math.max(i, i + a) &&
            r >= Math.min(o, o + u) &&
            r <= Math.max(o, o + u)
          );
        },
        d = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        y = function (t) {
          var e,
            n = f(f({}, d), t),
            u = (0, r.useRef)(),
            s =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, r.useState)(-1))) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      o = (n = n.call(t)).next;
                      !(c = (r = o.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (i = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw i;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return l(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            h = s[0],
            y = s[1];
          (0, r.useEffect)(function () {
            if (u.current && u.current.getTotalLength)
              try {
                var t = u.current.getTotalLength();
                t && y(t);
              } catch (t) {}
          }, []);
          var v = n.x,
            m = n.y,
            g = n.width,
            b = n.height,
            x = n.radius,
            O = n.className,
            w = n.animationEasing,
            j = n.animationDuration,
            S = n.animationBegin,
            P = n.isAnimationActive,
            A = n.isUpdateAnimationActive;
          if (
            v !== +v ||
            m !== +m ||
            g !== +g ||
            b !== +b ||
            0 === g ||
            0 === b
          )
            return null;
          var E = (0, i.Z)("recharts-rectangle", O);
          return A
            ? r.createElement(
                o.ZP,
                {
                  canBegin: h > 0,
                  from: { width: g, height: b, x: v, y: m },
                  to: { width: g, height: b, x: v, y: m },
                  duration: j,
                  animationEasing: w,
                  isActive: A,
                },
                function (t) {
                  var e = t.width,
                    i = t.height,
                    l = t.x,
                    s = t.y;
                  return r.createElement(
                    o.ZP,
                    {
                      canBegin: h > 0,
                      from: "0px ".concat(-1 === h ? 1 : h, "px"),
                      to: "".concat(h, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: S,
                      duration: j,
                      isActive: P,
                      easing: w,
                    },
                    r.createElement(
                      "path",
                      c({}, (0, a.L6)(n, !0), {
                        className: E,
                        d: p(l, s, e, i, x),
                        ref: u,
                      })
                    )
                  );
                }
              )
            : r.createElement(
                "path",
                c({}, (0, a.L6)(n, !0), { className: E, d: p(v, m, g, b, x) })
              );
        };
    },
    90677: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return v;
        },
      });
      var r = n(2784),
        i = n(29112),
        o = n(10997),
        a = n(15788),
        u = n(523);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != c(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != c(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == c(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.radius,
            i = t.angle,
            o = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + r,
            f = Math.asin(c / s) / a.Wk,
            p = l ? i : i + o * f;
          return {
            center: (0, a.op)(e, n, s, p),
            circleTangency: (0, a.op)(e, n, r, p),
            lineTangency: (0, a.op)(
              e,
              n,
              s * Math.cos(f * a.Wk),
              l ? i - o * f : i
            ),
            theta: f,
          };
        },
        h = function (t) {
          var e,
            n = t.cx,
            r = t.cy,
            i = t.innerRadius,
            o = t.outerRadius,
            c = t.startAngle,
            l =
              ((e = t.endAngle),
              (0, u.uY)(e - c) * Math.min(Math.abs(e - c), 359.999)),
            s = c + l,
            f = (0, a.op)(n, r, o, c),
            p = (0, a.op)(n, r, o, s),
            h = "M "
              .concat(f.x, ",")
              .concat(f.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(c > s), ",\n    ")
              .concat(p.x, ",")
              .concat(p.y, "\n  ");
          if (i > 0) {
            var d = (0, a.op)(n, r, i, c),
              y = (0, a.op)(n, r, i, s);
            h += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(i, ",")
              .concat(i, ",0,\n            ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(c <= s), ",\n            ")
              .concat(d.x, ",")
              .concat(d.y, " Z");
          } else h += "L ".concat(n, ",").concat(r, " Z");
          return h;
        },
        d = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.innerRadius,
            i = t.outerRadius,
            o = t.cornerRadius,
            a = t.forceCornerRadius,
            c = t.cornerIsExternal,
            l = t.startAngle,
            s = t.endAngle,
            f = (0, u.uY)(s - l),
            d = p({
              cx: e,
              cy: n,
              radius: i,
              angle: l,
              sign: f,
              cornerRadius: o,
              cornerIsExternal: c,
            }),
            y = d.circleTangency,
            v = d.lineTangency,
            m = d.theta,
            g = p({
              cx: e,
              cy: n,
              radius: i,
              angle: s,
              sign: -f,
              cornerRadius: o,
              cornerIsExternal: c,
            }),
            b = g.circleTangency,
            x = g.lineTangency,
            O = g.theta,
            w = c ? Math.abs(l - s) : Math.abs(l - s) - m - O;
          if (w < 0)
            return a
              ? "M "
                  .concat(v.x, ",")
                  .concat(v.y, "\n        a")
                  .concat(o, ",")
                  .concat(o, ",0,0,1,")
                  .concat(2 * o, ",0\n        a")
                  .concat(o, ",")
                  .concat(o, ",0,0,1,")
                  .concat(-(2 * o), ",0\n      ")
              : h({
                  cx: e,
                  cy: n,
                  innerRadius: r,
                  outerRadius: i,
                  startAngle: l,
                  endAngle: s,
                });
          var j = "M "
            .concat(v.x, ",")
            .concat(v.y, "\n    A")
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(y.x, ",")
            .concat(y.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,")
            .concat(+(w > 180), ",")
            .concat(+(f < 0), ",")
            .concat(b.x, ",")
            .concat(b.y, "\n    A")
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(x.x, ",")
            .concat(x.y, "\n  ");
          if (r > 0) {
            var S = p({
                cx: e,
                cy: n,
                radius: r,
                angle: l,
                sign: f,
                isExternal: !0,
                cornerRadius: o,
                cornerIsExternal: c,
              }),
              P = S.circleTangency,
              A = S.lineTangency,
              E = S.theta,
              k = p({
                cx: e,
                cy: n,
                radius: r,
                angle: s,
                sign: -f,
                isExternal: !0,
                cornerRadius: o,
                cornerIsExternal: c,
              }),
              M = k.circleTangency,
              T = k.lineTangency,
              _ = k.theta,
              C = c ? Math.abs(l - s) : Math.abs(l - s) - E - _;
            if (C < 0 && 0 === o)
              return "".concat(j, "L").concat(e, ",").concat(n, "Z");
            j += "L"
              .concat(T.x, ",")
              .concat(T.y, "\n      A")
              .concat(o, ",")
              .concat(o, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(M.x, ",")
              .concat(M.y, "\n      A")
              .concat(r, ",")
              .concat(r, ",0,")
              .concat(+(C > 180), ",")
              .concat(+(f > 0), ",")
              .concat(P.x, ",")
              .concat(P.y, "\n      A")
              .concat(o, ",")
              .concat(o, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(A.x, ",")
              .concat(A.y, "Z");
          } else j += "L".concat(e, ",").concat(n, "Z");
          return j;
        },
        y = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        v = function (t) {
          var e,
            n = f(f({}, y), t),
            a = n.cx,
            c = n.cy,
            s = n.innerRadius,
            p = n.outerRadius,
            v = n.cornerRadius,
            m = n.forceCornerRadius,
            g = n.cornerIsExternal,
            b = n.startAngle,
            x = n.endAngle,
            O = n.className;
          if (p < s || b === x) return null;
          var w = (0, i.Z)("recharts-sector", O),
            j = p - s,
            S = (0, u.h1)(v, j, 0, !0);
          return (
            (e =
              S > 0 && 360 > Math.abs(b - x)
                ? d({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    cornerRadius: Math.min(S, j / 2),
                    forceCornerRadius: m,
                    cornerIsExternal: g,
                    startAngle: b,
                    endAngle: x,
                  })
                : h({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    startAngle: b,
                    endAngle: x,
                  })),
            r.createElement(
              "path",
              l({}, (0, o.L6)(n, !0), { className: w, d: e, role: "img" })
            )
          );
        };
    },
    55238: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return D;
        },
      });
      var r = n(2784),
        i = n(23779),
        o = n.n(i);
      let a = Math.cos,
        u = Math.sin,
        c = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      var f = {
        draw(t, e) {
          let n = c(e / l);
          t.moveTo(n, 0), t.arc(0, 0, n, 0, s);
        },
      };
      let p = c(1 / 3),
        h = 2 * p,
        d = u(l / 10) / u((7 * l) / 10),
        y = u(s / 10) * d,
        v = -a(s / 10) * d,
        m = c(3),
        g = c(3) / 2,
        b = 1 / c(12),
        x = (b / 2 + 1) * 3;
      var O = n(33554),
        w = n(37583);
      c(3), c(3);
      var j = n(29112),
        S = n(10997);
      function P(t) {
        return (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var A = ["type", "size", "sizeType"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != P(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != P(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == P(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var T = {
          symbolCircle: f,
          symbolCross: {
            draw(t, e) {
              let n = c(e / 5) / 2;
              t.moveTo(-3 * n, -n),
                t.lineTo(-n, -n),
                t.lineTo(-n, -3 * n),
                t.lineTo(n, -3 * n),
                t.lineTo(n, -n),
                t.lineTo(3 * n, -n),
                t.lineTo(3 * n, n),
                t.lineTo(n, n),
                t.lineTo(n, 3 * n),
                t.lineTo(-n, 3 * n),
                t.lineTo(-n, n),
                t.lineTo(-3 * n, n),
                t.closePath();
            },
          },
          symbolDiamond: {
            draw(t, e) {
              let n = c(e / h),
                r = n * p;
              t.moveTo(0, -n),
                t.lineTo(r, 0),
                t.lineTo(0, n),
                t.lineTo(-r, 0),
                t.closePath();
            },
          },
          symbolSquare: {
            draw(t, e) {
              let n = c(e),
                r = -n / 2;
              t.rect(r, r, n, n);
            },
          },
          symbolStar: {
            draw(t, e) {
              let n = c(0.8908130915292852 * e),
                r = y * n,
                i = v * n;
              t.moveTo(0, -n), t.lineTo(r, i);
              for (let e = 1; e < 5; ++e) {
                let o = (s * e) / 5,
                  c = a(o),
                  l = u(o);
                t.lineTo(l * n, -c * n), t.lineTo(c * r - l * i, l * r + c * i);
              }
              t.closePath();
            },
          },
          symbolTriangle: {
            draw(t, e) {
              let n = -c(e / (3 * m));
              t.moveTo(0, 2 * n),
                t.lineTo(-m * n, -n),
                t.lineTo(m * n, -n),
                t.closePath();
            },
          },
          symbolWye: {
            draw(t, e) {
              let n = c(e / x),
                r = n / 2,
                i = n * b,
                o = n * b + n,
                a = -r;
              t.moveTo(r, i),
                t.lineTo(r, o),
                t.lineTo(a, o),
                t.lineTo(-0.5 * r - g * i, g * r + -0.5 * i),
                t.lineTo(-0.5 * r - g * o, g * r + -0.5 * o),
                t.lineTo(-0.5 * a - g * o, g * a + -0.5 * o),
                t.lineTo(-0.5 * r + g * i, -0.5 * i - g * r),
                t.lineTo(-0.5 * r + g * o, -0.5 * o - g * r),
                t.lineTo(-0.5 * a + g * o, -0.5 * o - g * a),
                t.closePath();
            },
          },
        },
        _ = Math.PI / 180,
        C = function (t, e, n) {
          if ("area" === e) return t;
          switch (n) {
            case "cross":
              return (5 * t * t) / 9;
            case "diamond":
              return (0.5 * t * t) / Math.sqrt(3);
            case "square":
              return t * t;
            case "star":
              var r = 18 * _;
              return (
                1.25 *
                t *
                t *
                (Math.tan(r) - Math.tan(2 * r) * Math.pow(Math.tan(r), 2))
              );
            case "triangle":
              return (Math.sqrt(3) * t * t) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
              return (Math.PI * t * t) / 4;
          }
        },
        D = function (t) {
          var e,
            n = t.type,
            i = void 0 === n ? "circle" : n,
            a = t.size,
            u = void 0 === a ? 64 : a,
            c = t.sizeType,
            l = void 0 === c ? "area" : c,
            s = M(
              M(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    i = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                      for (r = 0; r < o.length; r++)
                        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                      return i;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++)
                      (n = o[r]),
                        !(e.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(t, n) &&
                          (i[n] = t[n]);
                  }
                  return i;
                })(t, A)
              ),
              {},
              { type: i, size: u, sizeType: l }
            ),
            p = s.className,
            h = s.cx,
            d = s.cy,
            y = (0, S.L6)(s, !0);
          return h === +h && d === +d && u === +u
            ? r.createElement(
                "path",
                E({}, y, {
                  className: (0, j.Z)("recharts-symbols", p),
                  transform: "translate(".concat(h, ", ").concat(d, ")"),
                  d:
                    ((e = T["symbol".concat(o()(i))] || f),
                    (function (t, e) {
                      let n = null,
                        r = (0, w.d)(i);
                      function i() {
                        let i;
                        if (
                          (n || (n = i = r()),
                          t
                            .apply(this, arguments)
                            .draw(n, +e.apply(this, arguments)),
                          i)
                        )
                          return (n = null), i + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, O.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, O.Z)(void 0 === e ? 64 : +e)),
                        (i.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, O.Z)(e)),
                              i)
                            : t;
                        }),
                        (i.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, O.Z)(+t)),
                              i)
                            : e;
                        }),
                        (i.context = function (t) {
                          return arguments.length
                            ? ((n = null == t ? null : t), i)
                            : n;
                        }),
                        i
                      );
                    })()
                      .type(e)
                      .size(C(u, l, i))()),
                })
              )
            : null;
        };
      D.registerSymbol = function (t, e) {
        T["symbol".concat(o()(t))] = e;
      };
    },
    89531: function (t, e, n) {
      "use strict";
      n.d(e, {
        bn: function () {
          return C;
        },
        a3: function () {
          return $;
        },
        lT: function () {
          return D;
        },
        V$: function () {
          return I;
        },
        w7: function () {
          return N;
        },
      });
      var r = n(2784),
        i = n(61049),
        o = n.n(i),
        a = n(97030),
        u = n.n(a),
        c = n(4335),
        l = n.n(c),
        s = n(18149),
        f = n.n(s),
        p = n(55597),
        h = n(29112),
        d = n(46097),
        y = n(10997);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != v(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var O = function (t, e, n, r, i) {
          var o = n - r;
          return (
            "M ".concat(t, ",").concat(e) +
            "L ".concat(t + n, ",").concat(e) +
            "L ".concat(t + n - o / 2, ",").concat(e + i) +
            "L ".concat(t + n - o / 2 - r, ",").concat(e + i) +
            "L ".concat(t, ",").concat(e, " Z")
          );
        },
        w = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        j = function (t) {
          var e,
            n = x(x({}, w), t),
            i = (0, r.useRef)(),
            o =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, r.useState)(-1))) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      o = (n = n.call(t)).next;
                      !(c = (r = o.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (i = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw i;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return g(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return g(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            a = o[0],
            u = o[1];
          (0, r.useEffect)(function () {
            if (i.current && i.current.getTotalLength)
              try {
                var t = i.current.getTotalLength();
                t && u(t);
              } catch (t) {}
          }, []);
          var c = n.x,
            l = n.y,
            s = n.upperWidth,
            f = n.lowerWidth,
            p = n.height,
            v = n.className,
            b = n.animationEasing,
            j = n.animationDuration,
            S = n.animationBegin,
            P = n.isUpdateAnimationActive;
          if (
            c !== +c ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            p !== +p ||
            (0 === s && 0 === f) ||
            0 === p
          )
            return null;
          var A = (0, h.Z)("recharts-trapezoid", v);
          return P
            ? r.createElement(
                d.ZP,
                {
                  canBegin: a > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: l },
                  to: { upperWidth: s, lowerWidth: f, height: p, x: c, y: l },
                  duration: j,
                  animationEasing: b,
                  isActive: P,
                },
                function (t) {
                  var e = t.upperWidth,
                    o = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return r.createElement(
                    d.ZP,
                    {
                      canBegin: a > 0,
                      from: "0px ".concat(-1 === a ? 1 : a, "px"),
                      to: "".concat(a, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: S,
                      duration: j,
                      easing: b,
                    },
                    r.createElement(
                      "path",
                      m({}, (0, y.L6)(n, !0), {
                        className: A,
                        d: O(c, l, e, o, u),
                        ref: i,
                      })
                    )
                  );
                }
              )
            : r.createElement(
                "g",
                null,
                r.createElement(
                  "path",
                  m({}, (0, y.L6)(n, !0), { className: A, d: O(c, l, s, f, p) })
                )
              );
        },
        S = n(90677),
        P = n(42629),
        A = n(55238),
        E = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function k(t) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != k(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != k(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == k(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function _(t) {
        var e = t.shapeType,
          n = t.elementProps;
        switch (e) {
          case "rectangle":
            return r.createElement(p.A, n);
          case "trapezoid":
            return r.createElement(j, n);
          case "sector":
            return r.createElement(S.L, n);
          case "symbols":
            if ("symbols" === e) return r.createElement(A.v, n);
            break;
          default:
            return null;
        }
      }
      function C(t) {
        var e,
          n = t.option,
          i = t.shapeType,
          a = t.propTransformer,
          c = t.activeClassName,
          s = t.isActive,
          f = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (i[n] = t[n]);
            }
            return i;
          })(t, E);
        if ((0, r.isValidElement)(n))
          e = (0, r.cloneElement)(
            n,
            T(T({}, f), (0, r.isValidElement)(n) ? n.props : n)
          );
        else if (o()(n)) e = n(f);
        else if (u()(n) && !l()(n)) {
          var p = (
            void 0 === a
              ? function (t, e) {
                  return T(T({}, e), t);
                }
              : a
          )(n, f);
          e = r.createElement(_, { shapeType: i, elementProps: p });
        } else e = r.createElement(_, { shapeType: i, elementProps: f });
        return s
          ? r.createElement(
              P.m,
              { className: void 0 === c ? "recharts-active-shape" : c },
              e
            )
          : e;
      }
      function D(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function I(t, e) {
        return null != e && "sectors" in t.props;
      }
      function N(t, e) {
        return null != e && "points" in t.props;
      }
      function B(t, e) {
        var n,
          r,
          i =
            t.x ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          o =
            t.y ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return i && o;
      }
      function L(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function R(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          i = t.z === e.z;
        return n && r && i;
      }
      function $(t) {
        var e,
          n,
          r,
          i = t.activeTooltipItem,
          o = t.graphicalItem,
          a = t.itemData,
          u =
            (D(o, i)
              ? (e = "trapezoids")
              : I(o, i)
              ? (e = "sectors")
              : N(o, i) && (e = "points"),
            e),
          c = D(o, i)
            ? null === (n = i.tooltipPayload) ||
              void 0 === n ||
              null === (n = n[0]) ||
              void 0 === n ||
              null === (n = n.payload) ||
              void 0 === n
              ? void 0
              : n.payload
            : I(o, i)
            ? null === (r = i.tooltipPayload) ||
              void 0 === r ||
              null === (r = r[0]) ||
              void 0 === r ||
              null === (r = r.payload) ||
              void 0 === r
              ? void 0
              : r.payload
            : N(o, i)
            ? i.payload
            : {},
          l = a.filter(function (t, e) {
            var n = f()(c, t),
              r = o.props[u].filter(function (t) {
                var e;
                return (D(o, i)
                  ? (e = B)
                  : I(o, i)
                  ? (e = L)
                  : N(o, i) && (e = R),
                e)(t, i);
              }),
              a = o.props[u].indexOf(r[r.length - 1]);
            return n && e === a;
          });
        return a.indexOf(l[l.length - 1]);
      }
    },
    85742: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ky: function () {
          return O;
        },
        O1: function () {
          return g;
        },
        _b: function () {
          return b;
        },
        t9: function () {
          return m;
        },
        xE: function () {
          return w;
        },
      });
      var r = n(34519),
        i = n.n(r),
        o = n(39794),
        a = n.n(o),
        u = n(27721),
        c = n(10997),
        l = n(523),
        s = n(96141);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r);
        }
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function y(t, e, n) {
        return (
          (e = v(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function v(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != f(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : String(e);
      }
      var m = function (t, e, n, r, i) {
          var o = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: n.left,
              leftMirror: n.left,
              right: o - n.right,
              rightMirror: o - n.right,
              top: n.top,
              topMirror: n.top,
              bottom: a - n.bottom,
              bottomMirror: a - n.bottom,
            },
            m = !!(0, c.sP)(p, s.$);
          return h.reduce(function (o, a) {
            var c,
              s,
              p,
              h,
              g,
              b = e[a],
              x = b.orientation,
              O = b.domain,
              w = b.padding,
              j = void 0 === w ? {} : w,
              S = b.mirror,
              P = b.reversed,
              A = "".concat(x).concat(S ? "Mirror" : "");
            if (
              "number" === b.type &&
              ("gap" === b.padding || "no-gap" === b.padding)
            ) {
              var E = O[1] - O[0],
                k = 1 / 0,
                M = b.categoricalDomain.sort();
              if (
                (M.forEach(function (t, e) {
                  e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
                }),
                Number.isFinite(k))
              ) {
                var T = k / E,
                  _ = "vertical" === b.layout ? n.height : n.width;
                if (
                  ("gap" === b.padding && (c = (T * _) / 2),
                  "no-gap" === b.padding)
                ) {
                  var C = (0, l.h1)(t.barCategoryGap, T * _),
                    D = (T * _) / 2;
                  c = D - C - ((D - C) / _) * C;
                }
              }
            }
            (s =
              "xAxis" === r
                ? [
                    n.left + (j.left || 0) + (c || 0),
                    n.left + n.width - (j.right || 0) - (c || 0),
                  ]
                : "yAxis" === r
                ? "horizontal" === f
                  ? [n.top + n.height - (j.bottom || 0), n.top + (j.top || 0)]
                  : [
                      n.top + (j.top || 0) + (c || 0),
                      n.top + n.height - (j.bottom || 0) - (c || 0),
                    ]
                : b.range),
              P && (s = [s[1], s[0]]);
            var I = (0, u.Hq)(b, i, m),
              N = I.scale,
              B = I.realScaleType;
            N.domain(O).range(s), (0, u.zF)(N);
            var L = (0, u.g$)(N, d(d({}, b), {}, { realScaleType: B }));
            "xAxis" === r
              ? ((g = ("top" === x && !S) || ("bottom" === x && S)),
                (p = n.left),
                (h = v[A] - g * b.height))
              : "yAxis" === r &&
                ((g = ("left" === x && !S) || ("right" === x && S)),
                (p = v[A] - g * b.width),
                (h = n.top));
            var R = d(
              d(d({}, b), L),
              {},
              {
                realScaleType: B,
                x: p,
                y: h,
                scale: N,
                width: "xAxis" === r ? n.width : b.width,
                height: "yAxis" === r ? n.height : b.height,
              }
            );
            return (
              (R.bandSize = (0, u.zT)(R, L)),
              b.hide || "xAxis" !== r
                ? b.hide || (v[A] += (g ? -1 : 1) * R.width)
                : (v[A] += (g ? -1 : 1) * R.height),
              d(d({}, o), {}, y({}, a, R))
            );
          }, {});
        },
        g = function (t, e) {
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y;
          return {
            x: Math.min(n, i),
            y: Math.min(r, o),
            width: Math.abs(i - n),
            height: Math.abs(o - r),
          };
        },
        b = function (t) {
          return g({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 });
        },
        x = (function () {
          var t, e;
          function n(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              (this.scale = t);
          }
          return (
            (t = [
              {
                key: "domain",
                get: function () {
                  return this.scale.domain;
                },
              },
              {
                key: "range",
                get: function () {
                  return this.scale.range;
                },
              },
              {
                key: "rangeMin",
                get: function () {
                  return this.range()[0];
                },
              },
              {
                key: "rangeMax",
                get: function () {
                  return this.range()[1];
                },
              },
              {
                key: "bandwidth",
                get: function () {
                  return this.scale.bandwidth;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.bandAware,
                    r = e.position;
                  if (void 0 !== t) {
                    if (r)
                      switch (r) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + i;
                        case "end":
                          var o = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + o;
                      }
                    if (n) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    n = e[0],
                    r = e[e.length - 1];
                  return n <= r ? t >= n && t <= r : t >= r && t <= n;
                },
              },
            ]),
            (e = [
              {
                key: "create",
                value: function (t) {
                  return new n(t);
                },
              },
            ]),
            t && p(n.prototype, t),
            e && p(n, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })();
      y(x, "EPS", 1e-4);
      var O = function (t) {
          var e = Object.keys(t).reduce(function (e, n) {
            return d(d({}, e), {}, y({}, n, x.create(t[n])));
          }, {});
          return d(
            d({}, e),
            {},
            {
              apply: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = n.bandAware,
                  o = n.position;
                return i()(t, function (t, n) {
                  return e[n].apply(t, { bandAware: r, position: o });
                });
              },
              isInRange: function (t) {
                return a()(t, function (t, n) {
                  return e[n].isInRange(t);
                });
              },
            }
          );
        },
        w = function (t) {
          var e = t.width,
            n = t.height,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i = ((((r % 180) + 180) % 180) * Math.PI) / 180,
            o = Math.atan(n / e);
          return Math.abs(
            i > o && i < Math.PI - o ? n / Math.sin(i) : e / Math.cos(i)
          );
        };
    },
    27721: function (t, e, n) {
      "use strict";
      n.d(e, {
        By: function () {
          return r5;
        },
        VO: function () {
          return r0;
        },
        zF: function () {
          return ii;
        },
        DO: function () {
          return ie;
        },
        Bu: function () {
          return io;
        },
        zT: function () {
          return ix;
        },
        qz: function () {
          return r3;
        },
        pt: function () {
          return r2;
        },
        Yj: function () {
          return id;
        },
        Fy: function () {
          return ih;
        },
        Hv: function () {
          return ip;
        },
        gF: function () {
          return rQ;
        },
        s6: function () {
          return r4;
        },
        EB: function () {
          return iv;
        },
        fk: function () {
          return r1;
        },
        wh: function () {
          return il;
        },
        O3: function () {
          return iy;
        },
        uY: function () {
          return r9;
        },
        g$: function () {
          return is;
        },
        Qo: function () {
          return iw;
        },
        F$: function () {
          return rJ;
        },
        NA: function () {
          return r8;
        },
        ko: function () {
          return iO;
        },
        ZI: function () {
          return r7;
        },
        Hq: function () {
          return ir;
        },
        LG: function () {
          return ib;
        },
        Vv: function () {
          return ia;
        },
      });
      var r,
        i,
        o,
        a,
        u,
        c,
        l,
        s = {};
      n.r(s),
        n.d(s, {
          scaleBand: function () {
            return f.Z;
          },
          scaleDiverging: function () {
            return function t() {
              var e = tN(nJ()(tv));
              return (
                (e.copy = function () {
                  return nV(e, t());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleDivergingLog: function () {
            return function t() {
              var e = tq(nJ()).domain([0.1, 1, 10]);
              return (
                (e.copy = function () {
                  return nV(e, t()).base(e.base());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleDivergingPow: function () {
            return nQ;
          },
          scaleDivergingSqrt: function () {
            return n0;
          },
          scaleDivergingSymlog: function () {
            return function t() {
              var e = tH(nJ());
              return (
                (e.copy = function () {
                  return nV(e, t()).constant(e.constant());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleIdentity: function () {
            return function t(e) {
              var n;
              function r(t) {
                return null == t || isNaN((t = +t)) ? n : t;
              }
              return (
                (r.invert = r),
                (r.domain = r.range =
                  function (t) {
                    return arguments.length
                      ? ((e = Array.from(t, td)), r)
                      : e.slice();
                  }),
                (r.unknown = function (t) {
                  return arguments.length ? ((n = t), r) : n;
                }),
                (r.copy = function () {
                  return t(e).unknown(n);
                }),
                (e = arguments.length ? Array.from(e, td) : [0, 1]),
                tN(r)
              );
            };
          },
          scaleImplicit: function () {
            return tX.O;
          },
          scaleLinear: function () {
            return tB;
          },
          scaleLog: function () {
            return function t() {
              let e = tq(tO()).domain([1, 10]);
              return (
                (e.copy = () => tx(e, t()).base(e.base())),
                tj.o.apply(e, arguments),
                e
              );
            };
          },
          scaleOrdinal: function () {
            return tX.Z;
          },
          scalePoint: function () {
            return f.x;
          },
          scalePow: function () {
            return tQ;
          },
          scaleQuantile: function () {
            return function t() {
              var e,
                n = [],
                r = [],
                i = [];
              function o() {
                var t = 0,
                  e = Math.max(1, r.length);
                for (i = Array(e - 1); ++t < e; )
                  i[t - 1] = (function (t, e, n = j) {
                    if (!(!(r = t.length) || isNaN((e = +e)))) {
                      if (e <= 0 || r < 2) return +n(t[0], 0, t);
                      if (e >= 1) return +n(t[r - 1], r - 1, t);
                      var r,
                        i = (r - 1) * e,
                        o = Math.floor(i),
                        a = +n(t[o], o, t);
                      return a + (+n(t[o + 1], o + 1, t) - a) * (i - o);
                    }
                  })(n, t / e);
                return a;
              }
              function a(t) {
                return null == t || isNaN((t = +t)) ? e : r[P(i, t)];
              }
              return (
                (a.invertExtent = function (t) {
                  var e = r.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : [
                        e > 0 ? i[e - 1] : n[0],
                        e < i.length ? i[e] : n[n.length - 1],
                      ];
                }),
                (a.domain = function (t) {
                  if (!arguments.length) return n.slice();
                  for (let e of ((n = []), t))
                    null == e || isNaN((e = +e)) || n.push(e);
                  return n.sort(b), o();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? ((r = Array.from(t)), o())
                    : r.slice();
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.quantiles = function () {
                  return i.slice();
                }),
                (a.copy = function () {
                  return t().domain(n).range(r).unknown(e);
                }),
                tj.o.apply(a, arguments)
              );
            };
          },
          scaleQuantize: function () {
            return function t() {
              var e,
                n = 0,
                r = 1,
                i = 1,
                o = [0.5],
                a = [0, 1];
              function u(t) {
                return null != t && t <= t ? a[P(o, t, 0, i)] : e;
              }
              function c() {
                var t = -1;
                for (o = Array(i); ++t < i; )
                  o[t] = ((t + 1) * r - (t - i) * n) / (i + 1);
                return u;
              }
              return (
                (u.domain = function (t) {
                  return arguments.length
                    ? (([n, r] = t), (n = +n), (r = +r), c())
                    : [n, r];
                }),
                (u.range = function (t) {
                  return arguments.length
                    ? ((i = (a = Array.from(t)).length - 1), c())
                    : a.slice();
                }),
                (u.invertExtent = function (t) {
                  var e = a.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : e < 1
                    ? [n, o[0]]
                    : e >= i
                    ? [o[i - 1], r]
                    : [o[e - 1], o[e]];
                }),
                (u.unknown = function (t) {
                  return arguments.length && (e = t), u;
                }),
                (u.thresholds = function () {
                  return o.slice();
                }),
                (u.copy = function () {
                  return t().domain([n, r]).range(a).unknown(e);
                }),
                tj.o.apply(tN(u), arguments)
              );
            };
          },
          scaleRadial: function () {
            return function t() {
              var e,
                n = tw(),
                r = [0, 1],
                i = !1;
              function o(t) {
                var r,
                  o = Math.sign((r = n(t))) * Math.sqrt(Math.abs(r));
                return isNaN(o) ? e : i ? Math.round(o) : o;
              }
              return (
                (o.invert = function (t) {
                  return n.invert(t1(t));
                }),
                (o.domain = function (t) {
                  return arguments.length ? (n.domain(t), o) : n.domain();
                }),
                (o.range = function (t) {
                  return arguments.length
                    ? (n.range((r = Array.from(t, td)).map(t1)), o)
                    : r.slice();
                }),
                (o.rangeRound = function (t) {
                  return o.range(t).round(!0);
                }),
                (o.round = function (t) {
                  return arguments.length ? ((i = !!t), o) : i;
                }),
                (o.clamp = function (t) {
                  return arguments.length ? (n.clamp(t), o) : n.clamp();
                }),
                (o.unknown = function (t) {
                  return arguments.length ? ((e = t), o) : e;
                }),
                (o.copy = function () {
                  return t(n.domain(), r).round(i).clamp(n.clamp()).unknown(e);
                }),
                tj.o.apply(o, arguments),
                tN(o)
              );
            };
          },
          scaleSequential: function () {
            return function t() {
              var e = tN(nX()(tv));
              return (
                (e.copy = function () {
                  return nV(e, t());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSequentialLog: function () {
            return function t() {
              var e = tq(nX()).domain([1, 10]);
              return (
                (e.copy = function () {
                  return nV(e, t()).base(e.base());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSequentialPow: function () {
            return nG;
          },
          scaleSequentialQuantile: function () {
            return function t() {
              var e = [],
                n = tv;
              function r(t) {
                if (null != t && !isNaN((t = +t)))
                  return n((P(e, t, 1) - 1) / (e.length - 1));
              }
              return (
                (r.domain = function (t) {
                  if (!arguments.length) return e.slice();
                  for (let n of ((e = []), t))
                    null == n || isNaN((n = +n)) || e.push(n);
                  return e.sort(b), r;
                }),
                (r.interpolator = function (t) {
                  return arguments.length ? ((n = t), r) : n;
                }),
                (r.range = function () {
                  return e.map((t, r) => n(r / (e.length - 1)));
                }),
                (r.quantiles = function (t) {
                  return Array.from({ length: t + 1 }, (n, r) =>
                    (function (t, e, n) {
                      if (
                        !(
                          !(r = (t = Float64Array.from(
                            (function* (t, e) {
                              if (void 0 === e)
                                for (let e of t)
                                  null != e && (e = +e) >= e && (yield e);
                              else {
                                let n = -1;
                                for (let r of t)
                                  null != (r = e(r, ++n, t)) &&
                                    (r = +r) >= r &&
                                    (yield r);
                              }
                            })(t, void 0)
                          )).length) || isNaN((e = +e))
                        )
                      ) {
                        if (e <= 0 || r < 2) return t3(t);
                        if (e >= 1) return t2(t);
                        var r,
                          i = (r - 1) * e,
                          o = Math.floor(i),
                          a = t2(
                            (function t(e, n, r = 0, i = 1 / 0, o) {
                              if (
                                ((n = Math.floor(n)),
                                (r = Math.floor(Math.max(0, r))),
                                (i = Math.floor(Math.min(e.length - 1, i))),
                                !(r <= n && n <= i))
                              )
                                return e;
                              for (
                                o =
                                  void 0 === o
                                    ? t5
                                    : (function (t = b) {
                                        if (t === b) return t5;
                                        if ("function" != typeof t)
                                          throw TypeError(
                                            "compare is not a function"
                                          );
                                        return (e, n) => {
                                          let r = t(e, n);
                                          return r || 0 === r
                                            ? r
                                            : (0 === t(n, n)) - (0 === t(e, e));
                                        };
                                      })(o);
                                i > r;

                              ) {
                                if (i - r > 600) {
                                  let a = i - r + 1,
                                    u = n - r + 1,
                                    c = Math.log(a),
                                    l = 0.5 * Math.exp((2 * c) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((c * l * (a - l)) / a) *
                                      (u - a / 2 < 0 ? -1 : 1),
                                    f = Math.max(
                                      r,
                                      Math.floor(n - (u * l) / a + s)
                                    ),
                                    p = Math.min(
                                      i,
                                      Math.floor(n + ((a - u) * l) / a + s)
                                    );
                                  t(e, n, f, p, o);
                                }
                                let a = e[n],
                                  u = r,
                                  c = i;
                                for (
                                  t6(e, r, n), o(e[i], a) > 0 && t6(e, r, i);
                                  u < c;

                                ) {
                                  for (t6(e, u, c), ++u, --c; 0 > o(e[u], a); )
                                    ++u;
                                  for (; o(e[c], a) > 0; ) --c;
                                }
                                0 === o(e[r], a) ? t6(e, r, c) : t6(e, ++c, i),
                                  c <= n && (r = c + 1),
                                  n <= c && (i = c - 1);
                              }
                              return e;
                            })(t, o).subarray(0, o + 1)
                          );
                        return a + (t3(t.subarray(o + 1)) - a) * (i - o);
                      }
                    })(e, r / t)
                  );
                }),
                (r.copy = function () {
                  return t(n).domain(e);
                }),
                tj.O.apply(r, arguments)
              );
            };
          },
          scaleSequentialSqrt: function () {
            return nK;
          },
          scaleSequentialSymlog: function () {
            return function t() {
              var e = tH(nX());
              return (
                (e.copy = function () {
                  return nV(e, t()).constant(e.constant());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSqrt: function () {
            return t0;
          },
          scaleSymlog: function () {
            return function t() {
              var e = tH(tO());
              return (
                (e.copy = function () {
                  return tx(e, t()).constant(e.constant());
                }),
                tj.o.apply(e, arguments)
              );
            };
          },
          scaleThreshold: function () {
            return function t() {
              var e,
                n = [0.5],
                r = [0, 1],
                i = 1;
              function o(t) {
                return null != t && t <= t ? r[P(n, t, 0, i)] : e;
              }
              return (
                (o.domain = function (t) {
                  return arguments.length
                    ? ((i = Math.min((n = Array.from(t)).length, r.length - 1)),
                      o)
                    : n.slice();
                }),
                (o.range = function (t) {
                  return arguments.length
                    ? ((r = Array.from(t)),
                      (i = Math.min(n.length, r.length - 1)),
                      o)
                    : r.slice();
                }),
                (o.invertExtent = function (t) {
                  var e = r.indexOf(t);
                  return [n[e - 1], n[e]];
                }),
                (o.unknown = function (t) {
                  return arguments.length ? ((e = t), o) : e;
                }),
                (o.copy = function () {
                  return t().domain(n).range(r).unknown(e);
                }),
                tj.o.apply(o, arguments)
              );
            };
          },
          scaleTime: function () {
            return nY;
          },
          scaleUtc: function () {
            return nH;
          },
          tickFormat: function () {
            return tI;
          },
        });
      var f = n(18682);
      let p = Math.sqrt(50),
        h = Math.sqrt(10),
        d = Math.sqrt(2);
      function y(t, e, n) {
        let r, i, o;
        let a = (e - t) / Math.max(0, n),
          u = Math.floor(Math.log10(a)),
          c = a / Math.pow(10, u),
          l = c >= p ? 10 : c >= h ? 5 : c >= d ? 2 : 1;
        return (u < 0
          ? ((r = Math.round(t * (o = Math.pow(10, -u) / l))),
            (i = Math.round(e * o)),
            r / o < t && ++r,
            i / o > e && --i,
            (o = -o))
          : ((r = Math.round(t / (o = Math.pow(10, u) * l))),
            (i = Math.round(e / o)),
            r * o < t && ++r,
            i * o > e && --i),
        i < r && 0.5 <= n && n < 2)
          ? y(t, e, 2 * n)
          : [r, i, o];
      }
      function v(t, e, n) {
        if (((e = +e), (t = +t), !((n = +n) > 0))) return [];
        if (t === e) return [t];
        let r = e < t,
          [i, o, a] = r ? y(e, t, n) : y(t, e, n);
        if (!(o >= i)) return [];
        let u = o - i + 1,
          c = Array(u);
        if (r) {
          if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((o - t) / a);
          else for (let t = 0; t < u; ++t) c[t] = (o - t) * a;
        } else if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((i + t) / a);
        else for (let t = 0; t < u; ++t) c[t] = (i + t) * a;
        return c;
      }
      function m(t, e, n) {
        return y((t = +t), (e = +e), (n = +n))[2];
      }
      function g(t, e, n) {
        (e = +e), (t = +t), (n = +n);
        let r = e < t,
          i = r ? m(e, t, n) : m(t, e, n);
        return (r ? -1 : 1) * (i < 0 ? -(1 / i) : i);
      }
      function b(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function x(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function O(t) {
        let e, n, r;
        function i(t, r, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== e(r, r)) return o;
            do {
              let e = (i + o) >>> 1;
              0 > n(t[e], r) ? (i = e + 1) : (o = e);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = b), (n = (e, n) => b(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === b || t === x ? t : w), (n = t), (r = t)),
          {
            left: i,
            center: function (t, e, n = 0, o = t.length) {
              let a = i(t, e, n, o - 1);
              return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function (t, r, i = 0, o = t.length) {
              if (i < o) {
                if (0 !== e(r, r)) return o;
                do {
                  let e = (i + o) >>> 1;
                  0 >= n(t[e], r) ? (i = e + 1) : (o = e);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function w() {
        return 0;
      }
      function j(t) {
        return null === t ? NaN : +t;
      }
      let S = O(b),
        P = S.right;
      function A(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function E(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function k() {}
      S.left, O(j).center;
      var M = "\\s*([+-]?\\d+)\\s*",
        T = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        _ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        C = /^#([0-9a-f]{3,8})$/,
        D = RegExp(`^rgb\\(${M},${M},${M}\\)$`),
        I = RegExp(`^rgb\\(${_},${_},${_}\\)$`),
        N = RegExp(`^rgba\\(${M},${M},${M},${T}\\)$`),
        B = RegExp(`^rgba\\(${_},${_},${_},${T}\\)$`),
        L = RegExp(`^hsl\\(${T},${_},${_}\\)$`),
        R = RegExp(`^hsla\\(${T},${_},${_},${T}\\)$`),
        $ = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function z() {
        return this.rgb().formatHex();
      }
      function U() {
        return this.rgb().formatRgb();
      }
      function F(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = C.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? Z(e)
                : 3 === n
                ? new Y(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === n
                ? q(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === n
                ? q(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = D.exec(t))
            ? new Y(e[1], e[2], e[3], 1)
            : (e = I.exec(t))
            ? new Y(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = N.exec(t))
            ? q(e[1], e[2], e[3], e[4])
            : (e = B.exec(t))
            ? q(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = L.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = R.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, e[4])
            : $.hasOwnProperty(t)
            ? Z($[t])
            : "transparent" === t
            ? new Y(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Z(t) {
        return new Y((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function q(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new Y(t, e, n, r);
      }
      function W(t, e, n, r) {
        var i;
        return 1 == arguments.length
          ? ((i = t) instanceof k || (i = F(i)), i)
            ? new Y((i = i.rgb()).r, i.g, i.b, i.opacity)
            : new Y()
          : new Y(t, e, n, null == r ? 1 : r);
      }
      function Y(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function H() {
        return `#${K(this.r)}${K(this.g)}${K(this.b)}`;
      }
      function X() {
        let t = V(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${G(this.r)}, ${G(this.g)}, ${G(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function V(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function G(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function K(t) {
        return ((t = G(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function J(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new tt(t, e, n, r)
        );
      }
      function Q(t) {
        if (t instanceof tt) return new tt(t.h, t.s, t.l, t.opacity);
        if ((t instanceof k || (t = F(t)), !t)) return new tt();
        if (t instanceof tt) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          o = Math.max(e, n, r),
          a = NaN,
          u = o - i,
          c = (o + i) / 2;
        return (
          u
            ? ((a =
                e === o
                  ? (n - r) / u + (n < r) * 6
                  : n === o
                  ? (r - e) / u + 2
                  : (e - n) / u + 4),
              (u /= c < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new tt(a, u, c, t.opacity)
        );
      }
      function tt(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function te(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function tn(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function tr(t, e, n) {
        return (
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      function ti(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      A(k, F, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: z,
        formatHex: z,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Q(this).formatHsl();
        },
        formatRgb: U,
        toString: U,
      }),
        A(
          Y,
          W,
          E(k, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new Y(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Y(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new Y(G(this.r), G(this.g), G(this.b), V(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: H,
            formatHex: H,
            formatHex8: function () {
              return `#${K(this.r)}${K(this.g)}${K(this.b)}${K(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: X,
            toString: X,
          })
        ),
        A(
          tt,
          function (t, e, n, r) {
            return 1 == arguments.length
              ? Q(t)
              : new tt(t, e, n, null == r ? 1 : r);
          },
          E(k, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new Y(
                tr(t >= 240 ? t - 240 : t + 120, i, r),
                tr(t, i, r),
                tr(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            clamp() {
              return new tt(
                te(this.h),
                tn(this.s),
                tn(this.l),
                V(this.opacity)
              );
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = V(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${te(this.h)}, ${
                100 * tn(this.s)
              }%, ${100 * tn(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
      var to = (t) => () => t;
      function ta(t, e) {
        var n = e - t;
        return n
          ? function (e) {
              return t + e * n;
            }
          : to(isNaN(t) ? e : t);
      }
      var tu = (function t(e) {
        var n,
          r =
            1 == (n = +(n = e))
              ? ta
              : function (t, e) {
                  var r, i, o;
                  return e - t
                    ? ((r = t),
                      (i = e),
                      (r = Math.pow(r, (o = n))),
                      (i = Math.pow(i, o) - r),
                      (o = 1 / o),
                      function (t) {
                        return Math.pow(r + t * i, o);
                      })
                    : to(isNaN(t) ? e : t);
                };
        function i(t, e) {
          var n = r((t = W(t)).r, (e = W(e)).r),
            i = r(t.g, e.g),
            o = r(t.b, e.b),
            a = ta(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = n(e)),
              (t.g = i(e)),
              (t.b = o(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (i.gamma = t), i;
      })(1);
      function tc(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = Array(i),
            a = Array(i),
            u = Array(i);
          for (n = 0; n < i; ++n)
            (r = W(e[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (u[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      function tl(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      tc(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            u = r < e - 1 ? t[r + 2] : 2 * o - i;
          return ti((n - r / e) * e, a, i, o, u);
        };
      }),
        tc(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              o = t[r % e],
              a = t[(r + 1) % e],
              u = t[(r + 2) % e];
            return ti((n - r / e) * e, i, o, a, u);
          };
        });
      var ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        tf = RegExp(ts.source, "g");
      function tp(t, e) {
        var n,
          r,
          i = typeof e;
        return null == e || "boolean" === i
          ? to(e)
          : ("number" === i
              ? tl
              : "string" === i
              ? (r = F(e))
                ? ((e = r), tu)
                : function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      a,
                      u = (ts.lastIndex = tf.lastIndex = 0),
                      c = -1,
                      l = [],
                      s = [];
                    for (
                      t += "", e += "";
                      (i = ts.exec(t)) && (o = tf.exec(e));

                    )
                      (a = o.index) > u &&
                        ((a = e.slice(u, a)),
                        l[c] ? (l[c] += a) : (l[++c] = a)),
                        (i = i[0]) === (o = o[0])
                          ? l[c]
                            ? (l[c] += o)
                            : (l[++c] = o)
                          : ((l[++c] = null), s.push({ i: c, x: tl(i, o) })),
                        (u = tf.lastIndex);
                    return (
                      u < e.length &&
                        ((a = e.slice(u)), l[c] ? (l[c] += a) : (l[++c] = a)),
                      l.length < 2
                        ? s[0]
                          ? ((n = s[0].x),
                            function (t) {
                              return n(t) + "";
                            })
                          : ((r = e),
                            function () {
                              return r;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var n, r = 0; r < e; ++r)
                              l[(n = s[r]).i] = n.x(t);
                            return l.join("");
                          })
                    );
                  }
              : e instanceof F
              ? tu
              : e instanceof Date
              ? function (t, e) {
                  var n = new Date();
                  return (
                    (t = +t),
                    (e = +e),
                    function (r) {
                      return n.setTime(t * (1 - r) + e * r), n;
                    }
                  );
                }
              : !ArrayBuffer.isView((n = e)) || n instanceof DataView
              ? Array.isArray(e)
                ? function (t, e) {
                    var n,
                      r = e ? e.length : 0,
                      i = t ? Math.min(r, t.length) : 0,
                      o = Array(i),
                      a = Array(r);
                    for (n = 0; n < i; ++n) o[n] = tp(t[n], e[n]);
                    for (; n < r; ++n) a[n] = e[n];
                    return function (t) {
                      for (n = 0; n < i; ++n) a[n] = o[n](t);
                      return a;
                    };
                  }
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? function (t, e) {
                    var n,
                      r = {},
                      i = {};
                    for (n in ((null === t || "object" != typeof t) && (t = {}),
                    (null === e || "object" != typeof e) && (e = {}),
                    e))
                      n in t ? (r[n] = tp(t[n], e[n])) : (i[n] = e[n]);
                    return function (t) {
                      for (n in r) i[n] = r[n](t);
                      return i;
                    };
                  }
                : tl
              : function (t, e) {
                  e || (e = []);
                  var n,
                    r = t ? Math.min(e.length, t.length) : 0,
                    i = e.slice();
                  return function (o) {
                    for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
                    return i;
                  };
                })(t, e);
      }
      function th(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function td(t) {
        return +t;
      }
      var ty = [0, 1];
      function tv(t) {
        return t;
      }
      function tm(t, e) {
        var n;
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
      }
      function tg(t, e, n) {
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < r
            ? ((r = tm(i, r)), (o = n(a, o)))
            : ((r = tm(r, i)), (o = n(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function tb(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          i = Array(r),
          o = Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (i[a] = tm(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = P(t, e, 1, r) - 1;
          return o[n](i[n](e));
        };
      }
      function tx(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function tO() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = ty,
          u = ty,
          c = tp,
          l = tv;
        function s() {
          var t,
            e,
            n,
            c = Math.min(a.length, u.length);
          return (
            l !== tv &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((n = t), (t = e), (e = n)),
              (l = function (n) {
                return Math.max(t, Math.min(e, n));
              })),
            (r = c > 2 ? tb : tg),
            (i = o = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (i || (i = r(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((o || (o = r(u, a.map(t), tl)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, td)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = th), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || tv), s()) : l !== tv;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), s();
          }
        );
      }
      function tw() {
        return tO()(tv, tv);
      }
      var tj = n(22274),
        tS =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function tP(t) {
        var e;
        if (!(e = tS.exec(t))) throw Error("invalid format: " + t);
        return new tA({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function tA(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function tE(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function tk(t) {
        return (t = tE(Math.abs(t))) ? t[1] : NaN;
      }
      function tM(t, e) {
        var n = tE(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1];
        return i < 0
          ? "0." + Array(-i).join("0") + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + "." + r.slice(i + 1)
          : r + Array(i - r.length + 2).join("0");
      }
      (tP.prototype = tA.prototype),
        (tA.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var tT = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => tM(100 * t, e),
        r: tM,
        s: function (t, e) {
          var n = tE(t, e);
          if (!n) return t + "";
          var i = n[0],
            o = n[1],
            a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            u = i.length;
          return a === u
            ? i
            : a > u
            ? i + Array(a - u + 1).join("0")
            : a > 0
            ? i.slice(0, a) + "." + i.slice(a)
            : "0." + Array(1 - a).join("0") + tE(t, Math.max(0, e + a - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function t_(t) {
        return t;
      }
      var tC = Array.prototype.map,
        tD = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function tI(t, e, n, r) {
        var i,
          u,
          c = g(t, e, n);
        switch ((r = tP(null == r ? ",f" : r)).type) {
          case "s":
            var l = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (u = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(tk(l) / 3))) -
                      tk(Math.abs(c))
                  ))
                ) ||
                (r.precision = u),
              a(r, l)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (u =
                  Math.max(
                    0,
                    tk(
                      Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                        (i = Math.abs((i = c)))
                    ) - tk(i)
                  ) + 1)
              ) ||
              (r.precision = u - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN((u = Math.max(0, -tk(Math.abs(c))))) ||
              (r.precision = u - ("%" === r.type) * 2);
        }
        return o(r);
      }
      function tN(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return v(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return tI(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              i,
              o = e(),
              a = 0,
              u = o.length - 1,
              c = o[a],
              l = o[u],
              s = 10;
            for (
              l < c && ((i = c), (c = l), (l = i), (i = a), (a = u), (u = i));
              s-- > 0;

            ) {
              if ((i = m(c, l, n)) === r) return (o[a] = c), (o[u] = l), e(o);
              if (i > 0)
                (c = Math.floor(c / i) * i), (l = Math.ceil(l / i) * i);
              else if (i < 0)
                (c = Math.ceil(c * i) / i), (l = Math.floor(l * i) / i);
              else break;
              r = i;
            }
            return t;
          }),
          t
        );
      }
      function tB() {
        var t = tw();
        return (
          (t.copy = function () {
            return tx(t, tB());
          }),
          tj.o.apply(t, arguments),
          tN(t)
        );
      }
      function tL(t, e) {
        t = t.slice();
        var n,
          r = 0,
          i = t.length - 1,
          o = t[r],
          a = t[i];
        return (
          a < o && ((n = r), (r = i), (i = n), (n = o), (o = a), (a = n)),
          (t[r] = e.floor(o)),
          (t[i] = e.ceil(a)),
          t
        );
      }
      function tR(t) {
        return Math.log(t);
      }
      function t$(t) {
        return Math.exp(t);
      }
      function tz(t) {
        return -Math.log(-t);
      }
      function tU(t) {
        return -Math.exp(-t);
      }
      function tF(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function tZ(t) {
        return (e, n) => -t(-e, n);
      }
      function tq(t) {
        let e, n;
        let r = t(tR, t$),
          i = r.domain,
          a = 10;
        function u() {
          var o, u;
          return (
            (e =
              (o = a) === Math.E
                ? Math.log
                : (10 === o && Math.log10) ||
                  (2 === o && Math.log2) ||
                  ((o = Math.log(o)), (t) => Math.log(t) / o)),
            (n =
              10 === (u = a)
                ? tF
                : u === Math.E
                ? Math.exp
                : (t) => Math.pow(u, t)),
            i()[0] < 0 ? ((e = tZ(e)), (n = tZ(n)), t(tz, tU)) : t(tR, t$),
            r
          );
        }
        return (
          (r.base = function (t) {
            return arguments.length ? ((a = +t), u()) : a;
          }),
          (r.domain = function (t) {
            return arguments.length ? (i(t), u()) : i();
          }),
          (r.ticks = (t) => {
            let r, o;
            let u = i(),
              c = u[0],
              l = u[u.length - 1],
              s = l < c;
            s && ([c, l] = [l, c]);
            let f = e(c),
              p = e(l),
              h = null == t ? 10 : +t,
              d = [];
            if (!(a % 1) && p - f < h) {
              if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
                for (; f <= p; ++f)
                  for (r = 1; r < a; ++r)
                    if (!((o = f < 0 ? r / n(-f) : r * n(f)) < c)) {
                      if (o > l) break;
                      d.push(o);
                    }
              } else
                for (; f <= p; ++f)
                  for (r = a - 1; r >= 1; --r)
                    if (!((o = f > 0 ? r / n(-f) : r * n(f)) < c)) {
                      if (o > l) break;
                      d.push(o);
                    }
              2 * d.length < h && (d = v(c, l, h));
            } else d = v(f, p, Math.min(p - f, h)).map(n);
            return s ? d.reverse() : d;
          }),
          (r.tickFormat = (t, i) => {
            if (
              (null == t && (t = 10),
              null == i && (i = 10 === a ? "s" : ","),
              "function" != typeof i &&
                (a % 1 || null != (i = tP(i)).precision || (i.trim = !0),
                (i = o(i))),
              t === 1 / 0)
            )
              return i;
            let u = Math.max(1, (a * t) / r.ticks().length);
            return (t) => {
              let r = t / n(Math.round(e(t)));
              return r * a < a - 0.5 && (r *= a), r <= u ? i(t) : "";
            };
          }),
          (r.nice = () =>
            i(
              tL(i(), {
                floor: (t) => n(Math.floor(e(t))),
                ceil: (t) => n(Math.ceil(e(t))),
              })
            )),
          r
        );
      }
      function tW(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function tY(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function tH(t) {
        var e = 1,
          n = t(tW(1), tY(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(tW((e = +n)), tY(e)) : e;
          }),
          tN(n)
        );
      }
      (o = (i = (function (t) {
        var e,
          n,
          i,
          o =
            void 0 === t.grouping || void 0 === t.thousands
              ? t_
              : ((e = tC.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, u = e[0], c = 0;
                    i > 0 &&
                    u > 0 &&
                    (c + u + 1 > r && (u = Math.max(1, r - c)),
                    o.push(t.substring((i -= u), i + u)),
                    !((c += u + 1) > r));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(n);
                }),
          a = void 0 === t.currency ? "" : t.currency[0] + "",
          u = void 0 === t.currency ? "" : t.currency[1] + "",
          c = void 0 === t.decimal ? "." : t.decimal + "",
          l =
            void 0 === t.numerals
              ? t_
              : ((i = tC.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return i[+t];
                  });
                }),
          s = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          p = void 0 === t.nan ? "NaN" : t.nan + "";
        function h(t) {
          var e = (t = tP(t)).fill,
            n = t.align,
            i = t.sign,
            h = t.symbol,
            d = t.zero,
            y = t.width,
            v = t.comma,
            m = t.precision,
            g = t.trim,
            b = t.type;
          "n" === b
            ? ((v = !0), (b = "g"))
            : tT[b] || (void 0 === m && (m = 12), (g = !0), (b = "g")),
            (d || ("0" === e && "=" === n)) && ((d = !0), (e = "0"), (n = "="));
          var x =
              "$" === h
                ? a
                : "#" === h && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            O = "$" === h ? u : /[%p]/.test(b) ? s : "",
            w = tT[b],
            j = /[defgprs%]/.test(b);
          function S(t) {
            var a,
              u,
              s,
              h = x,
              S = O;
            if ("c" === b) (S = w(t) + S), (t = "");
            else {
              var P = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? p : w(Math.abs(t), m)),
                g &&
                  (t = (function (t) {
                    t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          i = e = r;
                          break;
                        case "0":
                          0 === i && (i = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                P && 0 == +t && "+" !== i && (P = !1),
                (h =
                  (P ? ("(" === i ? i : f) : "-" === i || "(" === i ? "" : i) +
                  h),
                (S =
                  ("s" === b ? tD[8 + r / 3] : "") +
                  S +
                  (P && "(" === i ? ")" : "")),
                j)
              ) {
                for (a = -1, u = t.length; ++a < u; )
                  if (48 > (s = t.charCodeAt(a)) || s > 57) {
                    (S = (46 === s ? c + t.slice(a + 1) : t.slice(a)) + S),
                      (t = t.slice(0, a));
                    break;
                  }
              }
            }
            v && !d && (t = o(t, 1 / 0));
            var A = h.length + t.length + S.length,
              E = A < y ? Array(y - A + 1).join(e) : "";
            switch (
              (v &&
                d &&
                ((t = o(E + t, E.length ? y - S.length : 1 / 0)), (E = "")),
              n)
            ) {
              case "<":
                t = h + t + S + E;
                break;
              case "=":
                t = h + E + t + S;
                break;
              case "^":
                t = E.slice(0, (A = E.length >> 1)) + h + t + S + E.slice(A);
                break;
              default:
                t = E + h + t + S;
            }
            return l(t);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(b)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
            (S.toString = function () {
              return t + "";
            }),
            S
          );
        }
        return {
          format: h,
          formatPrefix: function (t, e) {
            var n = h((((t = tP(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(tk(e) / 3))),
              i = Math.pow(10, -r),
              o = tD[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (a = i.formatPrefix);
      var tX = n(7575);
      function tV(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function tG(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function tK(t) {
        return t < 0 ? -t * t : t * t;
      }
      function tJ(t) {
        var e = t(tv, tv),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (n = +e)
                ? t(tv, tv)
                : 0.5 === n
                ? t(tG, tK)
                : t(tV(n), tV(1 / n))
              : n;
          }),
          tN(e)
        );
      }
      function tQ() {
        var t = tJ(tO());
        return (
          (t.copy = function () {
            return tx(t, tQ()).exponent(t.exponent());
          }),
          tj.o.apply(t, arguments),
          t
        );
      }
      function t0() {
        return tQ.apply(null, arguments).exponent(0.5);
      }
      function t1(t) {
        return Math.sign(t) * t * t;
      }
      function t2(t, e) {
        let n;
        if (void 0 === e)
          for (let e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n < i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function t3(t, e) {
        let n;
        if (void 0 === e)
          for (let e of t)
            null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n > i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function t5(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function t6(t, e, n) {
        let r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      let t7 = new Date(),
        t4 = new Date();
      function t8(t, e, n, r) {
        function i(e) {
          return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = (e) => (t((e = new Date(+e))), e)),
          (i.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (i.round = (t) => {
            let e = i(t),
              n = i.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (i.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (i.range = (n, r, o) => {
            let a;
            let u = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r) || !(o > 0))
            )
              return u;
            do u.push((a = new Date(+n))), e(n, o), t(n);
            while (a < n && n < r);
            return u;
          }),
          (i.filter = (n) =>
            t8(
              (e) => {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              (t, r) => {
                if (t >= t) {
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
                }
              }
            )),
          n &&
            ((i.count = (e, r) => (
              t7.setTime(+e),
              t4.setTime(+r),
              t(t7),
              t(t4),
              Math.floor(n(t7, t4))
            )),
            (i.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? i.filter(
                      r ? (e) => r(e) % t == 0 : (e) => i.count(0, e) % t == 0
                    )
                  : i
                : null)),
          i
        );
      }
      let t9 = t8(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      (t9.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t > 1
            ? t8(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t
              )
            : t9
          : null),
        t9.range;
      let et = t8(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, e) => {
          t.setTime(+t + 1e3 * e);
        },
        (t, e) => (e - t) / 1e3,
        (t) => t.getUTCSeconds()
      );
      et.range;
      let ee = t8(
        (t) => {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getMinutes()
      );
      ee.range;
      let en = t8(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getUTCMinutes()
      );
      en.range;
      let er = t8(
        (t) => {
          t.setTime(
            t -
              t.getMilliseconds() -
              1e3 * t.getSeconds() -
              6e4 * t.getMinutes()
          );
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getHours()
      );
      er.range;
      let ei = t8(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getUTCHours()
      );
      ei.range;
      let eo = t8(
        (t) => t.setHours(0, 0, 0, 0),
        (t, e) => t.setDate(t.getDate() + e),
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          864e5,
        (t) => t.getDate() - 1
      );
      eo.range;
      let ea = t8(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => t.getUTCDate() - 1
      );
      ea.range;
      let eu = t8(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => Math.floor(t / 864e5)
      );
      function ec(t) {
        return t8(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
            6048e5
        );
      }
      eu.range;
      let el = ec(0),
        es = ec(1),
        ef = ec(2),
        ep = ec(3),
        eh = ec(4),
        ed = ec(5),
        ey = ec(6);
      function ev(t) {
        return t8(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / 6048e5
        );
      }
      el.range, es.range, ef.range, ep.range, eh.range, ed.range, ey.range;
      let em = ev(0),
        eg = ev(1),
        eb = ev(2),
        ex = ev(3),
        eO = ev(4),
        ew = ev(5),
        ej = ev(6);
      em.range, eg.range, eb.range, ex.range, eO.range, ew.range, ej.range;
      let eS = t8(
        (t) => {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setMonth(t.getMonth() + e);
        },
        (t, e) =>
          e.getMonth() -
          t.getMonth() +
          (e.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      eS.range;
      let eP = t8(
        (t) => {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        (t, e) =>
          e.getUTCMonth() -
          t.getUTCMonth() +
          (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      eP.range;
      let eA = t8(
        (t) => {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setFullYear(t.getFullYear() + e);
        },
        (t, e) => e.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      (eA.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t8(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setFullYear(e.getFullYear() + n * t);
              }
            )
          : null),
        eA.range;
      let eE = t8(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      function ek(t, e, n, r, i, o) {
        let a = [
          [et, 1, 1e3],
          [et, 5, 5e3],
          [et, 15, 15e3],
          [et, 30, 3e4],
          [o, 1, 6e4],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, 864e5],
          [r, 2, 1728e5],
          [n, 1, 6048e5],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function u(e, n, r) {
          let i = Math.abs(n - e) / r,
            o = O(([, , t]) => t).right(a, i);
          if (o === a.length) return t.every(g(e / 31536e6, n / 31536e6, r));
          if (0 === o) return t9.every(Math.max(g(e, n, r), 1));
          let [u, c] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
          return u.every(c);
        }
        return [
          function (t, e, n) {
            let r = e < t;
            r && ([t, e] = [e, t]);
            let i = n && "function" == typeof n.range ? n : u(t, e, n),
              o = i ? i.range(t, +e + 1) : [];
            return r ? o.reverse() : o;
          },
          u,
        ];
      }
      (eE.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t8(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              }
            )
          : null),
        eE.range;
      let [eM, eT] = ek(eE, eP, em, eu, ei, en),
        [e_, eC] = ek(eA, eS, el, eo, er, ee);
      function eD(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function eI(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function eN(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var eB = { "-": "", _: " ", 0: "0" },
        eL = /^\s*\d+/,
        eR = /^%/,
        e$ = /[\\^$*+?|[\]().{}]/g;
      function ez(t, e, n) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          o = i.length;
        return r + (o < n ? Array(n - o + 1).join(e) + i : i);
      }
      function eU(t) {
        return t.replace(e$, "\\$&");
      }
      function eF(t) {
        return RegExp("^(?:" + t.map(eU).join("|") + ")", "i");
      }
      function eZ(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function eq(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function eW(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function eY(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function eH(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function eX(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function eV(t, e, n) {
        var r = eL.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function eG(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function eK(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function eJ(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function eQ(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function e0(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function e1(t, e, n) {
        var r = eL.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function e2(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function e3(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function e5(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function e6(t, e, n) {
        var r = eL.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function e7(t, e, n) {
        var r = eL.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function e4(t, e, n) {
        var r = eR.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function e8(t, e, n) {
        var r = eL.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function e9(t, e, n) {
        var r = eL.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function nt(t, e) {
        return ez(t.getDate(), e, 2);
      }
      function ne(t, e) {
        return ez(t.getHours(), e, 2);
      }
      function nn(t, e) {
        return ez(t.getHours() % 12 || 12, e, 2);
      }
      function nr(t, e) {
        return ez(1 + eo.count(eA(t), t), e, 3);
      }
      function ni(t, e) {
        return ez(t.getMilliseconds(), e, 3);
      }
      function no(t, e) {
        return ni(t, e) + "000";
      }
      function na(t, e) {
        return ez(t.getMonth() + 1, e, 2);
      }
      function nu(t, e) {
        return ez(t.getMinutes(), e, 2);
      }
      function nc(t, e) {
        return ez(t.getSeconds(), e, 2);
      }
      function nl(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function ns(t, e) {
        return ez(el.count(eA(t) - 1, t), e, 2);
      }
      function nf(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? eh(t) : eh.ceil(t);
      }
      function np(t, e) {
        return (
          (t = nf(t)), ez(eh.count(eA(t), t) + (4 === eA(t).getDay()), e, 2)
        );
      }
      function nh(t) {
        return t.getDay();
      }
      function nd(t, e) {
        return ez(es.count(eA(t) - 1, t), e, 2);
      }
      function ny(t, e) {
        return ez(t.getFullYear() % 100, e, 2);
      }
      function nv(t, e) {
        return ez((t = nf(t)).getFullYear() % 100, e, 2);
      }
      function nm(t, e) {
        return ez(t.getFullYear() % 1e4, e, 4);
      }
      function ng(t, e) {
        var n = t.getDay();
        return ez(
          (t = n >= 4 || 0 === n ? eh(t) : eh.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function nb(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          ez((e / 60) | 0, "0", 2) +
          ez(e % 60, "0", 2)
        );
      }
      function nx(t, e) {
        return ez(t.getUTCDate(), e, 2);
      }
      function nO(t, e) {
        return ez(t.getUTCHours(), e, 2);
      }
      function nw(t, e) {
        return ez(t.getUTCHours() % 12 || 12, e, 2);
      }
      function nj(t, e) {
        return ez(1 + ea.count(eE(t), t), e, 3);
      }
      function nS(t, e) {
        return ez(t.getUTCMilliseconds(), e, 3);
      }
      function nP(t, e) {
        return nS(t, e) + "000";
      }
      function nA(t, e) {
        return ez(t.getUTCMonth() + 1, e, 2);
      }
      function nE(t, e) {
        return ez(t.getUTCMinutes(), e, 2);
      }
      function nk(t, e) {
        return ez(t.getUTCSeconds(), e, 2);
      }
      function nM(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function nT(t, e) {
        return ez(em.count(eE(t) - 1, t), e, 2);
      }
      function n_(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? eO(t) : eO.ceil(t);
      }
      function nC(t, e) {
        return (
          (t = n_(t)), ez(eO.count(eE(t), t) + (4 === eE(t).getUTCDay()), e, 2)
        );
      }
      function nD(t) {
        return t.getUTCDay();
      }
      function nI(t, e) {
        return ez(eg.count(eE(t) - 1, t), e, 2);
      }
      function nN(t, e) {
        return ez(t.getUTCFullYear() % 100, e, 2);
      }
      function nB(t, e) {
        return ez((t = n_(t)).getUTCFullYear() % 100, e, 2);
      }
      function nL(t, e) {
        return ez(t.getUTCFullYear() % 1e4, e, 4);
      }
      function nR(t, e) {
        var n = t.getUTCDay();
        return ez(
          (t = n >= 4 || 0 === n ? eO(t) : eO.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function n$() {
        return "+0000";
      }
      function nz() {
        return "%";
      }
      function nU(t) {
        return +t;
      }
      function nF(t) {
        return Math.floor(+t / 1e3);
      }
      function nZ(t) {
        return new Date(t);
      }
      function nq(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function nW(t, e, n, r, i, o, a, u, c, l) {
        var s = tw(),
          f = s.invert,
          p = s.domain,
          h = l(".%L"),
          d = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          g = l("%b %d"),
          b = l("%B"),
          x = l("%Y");
        function O(t) {
          return (
            c(t) < t
              ? h
              : u(t) < t
              ? d
              : a(t) < t
              ? y
              : o(t) < t
              ? v
              : r(t) < t
              ? i(t) < t
                ? m
                : g
              : n(t) < t
              ? b
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, nq)) : p().map(nZ);
          }),
          (s.ticks = function (e) {
            var n = p();
            return t(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? O : l(e);
          }),
          (s.nice = function (t) {
            var n = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
              t ? p(tL(n, t)) : s
            );
          }),
          (s.copy = function () {
            return tx(s, nW(t, e, n, r, i, o, a, u, c, l));
          }),
          s
        );
      }
      function nY() {
        return tj.o.apply(
          nW(e_, eC, eA, eS, el, eo, er, ee, et, c).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function nH() {
        return tj.o.apply(
          nW(eM, eT, eE, eP, em, ea, ei, en, et, l).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function nX() {
        var t,
          e,
          n,
          r,
          i,
          o = 0,
          a = 1,
          u = tv,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? i
            : u(
                0 === n
                  ? 0.5
                  : ((e = (r(e) - t) * n), c ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var n, r;
            return arguments.length
              ? (([n, r] = e), (u = t(n, r)), l)
              : [u(0), u(1)];
          };
        }
        return (
          (l.domain = function (i) {
            return arguments.length
              ? (([o, a] = i),
                (t = r((o = +o))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [o, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(tp)),
          (l.rangeRound = s(th)),
          (l.unknown = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          function (i) {
            return (
              (r = i),
              (t = i(o)),
              (e = i(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function nV(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function nG() {
        var t = tJ(nX());
        return (
          (t.copy = function () {
            return nV(t, nG()).exponent(t.exponent());
          }),
          tj.O.apply(t, arguments)
        );
      }
      function nK() {
        return nG.apply(null, arguments).exponent(0.5);
      }
      function nJ() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = tv,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? r : i)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var n, r, i;
            return arguments.length
              ? (([n, r, i] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = tp));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      i = e[0],
                      o = Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    o[n] = t(i, (i = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return o[e](t - e);
                  };
                })(t, [n, r, i])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([u, c, l] = a),
                (t = o((u = +u))),
                (e = o((c = +c))),
                (n = o((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (i = e === n ? 0 : 0.5 / (n - e)),
                (s = e < t ? -1 : 1),
                h)
              : [u, c, l];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(tp)),
          (h.rangeRound = d(th)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (o = a),
              (t = a(u)),
              (e = a(c)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (i = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function nQ() {
        var t = tJ(nJ());
        return (
          (t.copy = function () {
            return nV(t, nQ()).exponent(t.exponent());
          }),
          tj.O.apply(t, arguments)
        );
      }
      function n0() {
        return nQ.apply(null, arguments).exponent(0.5);
      }
      function n1(t, e) {
        if ((i = t.length) > 1)
          for (var n, r, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
            for (r = a, a = t[e[o]], n = 0; n < u; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      (c = (u = (function (t) {
        var e = t.dateTime,
          n = t.date,
          r = t.time,
          i = t.periods,
          o = t.days,
          a = t.shortDays,
          u = t.months,
          c = t.shortMonths,
          l = eF(i),
          s = eZ(i),
          f = eF(o),
          p = eZ(o),
          h = eF(a),
          d = eZ(a),
          y = eF(u),
          v = eZ(u),
          m = eF(c),
          g = eZ(c),
          b = {
            a: function (t) {
              return a[t.getDay()];
            },
            A: function (t) {
              return o[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return u[t.getMonth()];
            },
            c: null,
            d: nt,
            e: nt,
            f: no,
            g: nv,
            G: ng,
            H: ne,
            I: nn,
            j: nr,
            L: ni,
            m: na,
            M: nu,
            p: function (t) {
              return i[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: nU,
            s: nF,
            S: nc,
            u: nl,
            U: ns,
            V: np,
            w: nh,
            W: nd,
            x: null,
            X: null,
            y: ny,
            Y: nm,
            Z: nb,
            "%": nz,
          },
          x = {
            a: function (t) {
              return a[t.getUTCDay()];
            },
            A: function (t) {
              return o[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return u[t.getUTCMonth()];
            },
            c: null,
            d: nx,
            e: nx,
            f: nP,
            g: nB,
            G: nR,
            H: nO,
            I: nw,
            j: nj,
            L: nS,
            m: nA,
            M: nE,
            p: function (t) {
              return i[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: nU,
            s: nF,
            S: nk,
            u: nM,
            U: nT,
            V: nC,
            w: nD,
            W: nI,
            x: null,
            X: null,
            y: nN,
            Y: nL,
            Z: n$,
            "%": nz,
          },
          O = {
            a: function (t, e, n) {
              var r = h.exec(e.slice(n));
              return r
                ? ((t.w = d.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            A: function (t, e, n) {
              var r = f.exec(e.slice(n));
              return r
                ? ((t.w = p.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            b: function (t, e, n) {
              var r = m.exec(e.slice(n));
              return r
                ? ((t.m = g.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            B: function (t, e, n) {
              var r = y.exec(e.slice(n));
              return r
                ? ((t.m = v.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            c: function (t, n, r) {
              return S(t, e, n, r);
            },
            d: e0,
            e: e0,
            f: e7,
            g: eG,
            G: eV,
            H: e2,
            I: e2,
            j: e1,
            L: e6,
            m: eQ,
            M: e3,
            p: function (t, e, n) {
              var r = l.exec(e.slice(n));
              return r
                ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            q: eJ,
            Q: e8,
            s: e9,
            S: e5,
            u: eW,
            U: eY,
            V: eH,
            w: eq,
            W: eX,
            x: function (t, e, r) {
              return S(t, n, e, r);
            },
            X: function (t, e, n) {
              return S(t, r, e, n);
            },
            y: eG,
            Y: eV,
            Z: eK,
            "%": e4,
          };
        function w(t, e) {
          return function (n) {
            var r,
              i,
              o,
              a = [],
              u = -1,
              c = 0,
              l = t.length;
            for (n instanceof Date || (n = new Date(+n)); ++u < l; )
              37 === t.charCodeAt(u) &&
                (a.push(t.slice(c, u)),
                null != (i = eB[(r = t.charAt(++u))])
                  ? (r = t.charAt(++u))
                  : (i = "e" === r ? " " : "0"),
                (o = e[r]) && (r = o(n, i)),
                a.push(r),
                (c = u + 1));
            return a.push(t.slice(c, u)), a.join("");
          };
        }
        function j(t, e) {
          return function (n) {
            var r,
              i,
              o = eN(1900, void 0, 1);
            if (S(o, t, (n += ""), 0) != n.length) return null;
            if ("Q" in o) return new Date(o.Q);
            if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
            if (
              (!e || "Z" in o || (o.Z = 0),
              "p" in o && (o.H = (o.H % 12) + 12 * o.p),
              void 0 === o.m && (o.m = "q" in o ? o.q : 0),
              "V" in o)
            ) {
              if (o.V < 1 || o.V > 53) return null;
              "w" in o || (o.w = 1),
                "Z" in o
                  ? ((r =
                      (i = (r = eI(eN(o.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                        ? eg.ceil(r)
                        : eg(r)),
                    (r = ea.offset(r, (o.V - 1) * 7)),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((r =
                      (i = (r = eD(eN(o.y, 0, 1))).getDay()) > 4 || 0 === i
                        ? es.ceil(r)
                        : es(r)),
                    (r = eo.offset(r, (o.V - 1) * 7)),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ("W" in o || "U" in o) &&
                ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                (i =
                  "Z" in o
                    ? eI(eN(o.y, 0, 1)).getUTCDay()
                    : eD(eN(o.y, 0, 1)).getDay()),
                (o.m = 0),
                (o.d =
                  "W" in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                    : o.w + 7 * o.U - ((i + 6) % 7)));
            return "Z" in o
              ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), eI(o))
              : eD(o);
          };
        }
        function S(t, e, n, r) {
          for (var i, o, a = 0, u = e.length, c = n.length; a < u; ) {
            if (r >= c) return -1;
            if (37 === (i = e.charCodeAt(a++))) {
              if (
                !(o = O[(i = e.charAt(a++)) in eB ? e.charAt(a++) : i]) ||
                (r = o(t, n, r)) < 0
              )
                return -1;
            } else if (i != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (b.x = w(n, b)),
          (b.X = w(r, b)),
          (b.c = w(e, b)),
          (x.x = w(n, x)),
          (x.X = w(r, x)),
          (x.c = w(e, x)),
          {
            format: function (t) {
              var e = w((t += ""), b);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = j((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = w((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = j((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        u.parse,
        (l = u.utcFormat),
        u.utcParse;
      var n2 = n(72299),
        n3 = n(33554);
      function n5(t) {
        for (var e = t.length, n = Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function n6(t, e) {
        return t[e];
      }
      function n7(t) {
        let e = [];
        return (e.key = t), e;
      }
      var n4 = n(71644),
        n8 = n.n(n4),
        n9 = n(65680),
        rt = n.n(n9),
        re = n(1842),
        rn = n.n(re),
        rr = n(61049),
        ri = n.n(rr),
        ro = n(85505),
        ra = n.n(ro),
        ru = n(72579),
        rc = n.n(ru),
        rl = n(35838),
        rs = n.n(rl),
        rf = n(16951),
        rp = n.n(rf),
        rh = n(23779),
        rd = n.n(rh),
        ry = n(18149),
        rv = n.n(ry),
        rm = n(829),
        rg = n.n(rm),
        rb = n(17374),
        rx = n.n(rb);
      function rO(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var rw = function (t) {
          return t;
        },
        rj = {},
        rS = function (t) {
          return t === rj;
        },
        rP = function (t) {
          return function e() {
            return 0 == arguments.length ||
              (1 == arguments.length &&
                rS(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        rA = function (t) {
          return (function t(e, n) {
            return 1 === e
              ? n
              : rP(function () {
                  for (
                    var r = arguments.length, i = Array(r), o = 0;
                    o < r;
                    o++
                  )
                    i[o] = arguments[o];
                  var a = i.filter(function (t) {
                    return t !== rj;
                  }).length;
                  return a >= e
                    ? n.apply(void 0, i)
                    : t(
                        e - a,
                        rP(function () {
                          for (
                            var t = arguments.length, e = Array(t), r = 0;
                            r < t;
                            r++
                          )
                            e[r] = arguments[r];
                          var o = i.map(function (t) {
                            return rS(t) ? e.shift() : t;
                          });
                          return n.apply(
                            void 0,
                            (
                              (function (t) {
                                if (Array.isArray(t)) return rO(t);
                              })(o) ||
                              (function (t) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(t)
                                )
                                  return Array.from(t);
                              })(o) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t)
                                    return rO(t, void 0);
                                  var n = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      t.constructor &&
                                      (n = t.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  )
                                    return rO(t, void 0);
                                }
                              })(o) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()
                            ).concat(e)
                          );
                        })
                      );
                });
          })(t.length, t);
        },
        rE = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        rk = rA(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        rM = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return rw;
          var r = e.reverse(),
            i = r[0],
            o = r.slice(1);
          return function () {
            return o.reduce(function (t, e) {
              return e(t);
            }, i.apply(void 0, arguments));
          };
        },
        rT = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        r_ = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return e &&
              i.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = i), (n = t.apply(void 0, i)));
          };
        },
        rC =
          (rA(function (t, e, n) {
            var r = +t;
            return r + n * (+e - r);
          }),
          rA(function (t, e, n) {
            var r = e - +t;
            return (n - t) / (r = r || 1 / 0);
          }),
          rA(function (t, e, n) {
            var r = e - +t;
            return Math.max(0, Math.min(1, (n - t) / (r = r || 1 / 0)));
          }),
          {
            rangeStep: function (t, e, n) {
              for (var r = new (rx())(t), i = 0, o = []; r.lt(e) && i < 1e5; )
                o.push(r.toNumber()), (r = r.add(n)), i++;
              return o;
            },
            getDigitCount: function (t) {
              return 0 === t
                ? 1
                : Math.floor(new (rx())(t).abs().log(10).toNumber()) + 1;
            },
          });
      function rD(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return rB(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          rN(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rI(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(r = (a = u.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  r || null == u.return || u.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            }
          })(t, e) ||
          rN(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rN(t, e) {
        if (t) {
          if ("string" == typeof t) return rB(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return rB(t, e);
        }
      }
      function rB(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function rL(t) {
        var e = rI(t, 2),
          n = e[0],
          r = e[1],
          i = n,
          o = r;
        return n > r && ((i = r), (o = n)), [i, o];
      }
      function rR(t, e, n) {
        if (t.lte(0)) return new (rx())(0);
        var r = rC.getDigitCount(t.toNumber()),
          i = new (rx())(10).pow(r),
          o = t.div(i),
          a = 1 !== r ? 0.05 : 0.1,
          u = new (rx())(Math.ceil(o.div(a).toNumber())).add(n).mul(a).mul(i);
        return e ? u : new (rx())(Math.ceil(u));
      }
      function r$(t, e, n) {
        var r = 1,
          i = new (rx())(t);
        if (!i.isint() && n) {
          var o = Math.abs(t);
          o < 1
            ? ((r = new (rx())(10).pow(rC.getDigitCount(t) - 1)),
              (i = new (rx())(Math.floor(i.div(r).toNumber())).mul(r)))
            : o > 1 && (i = new (rx())(Math.floor(t)));
        } else
          0 === t
            ? (i = new (rx())(Math.floor((e - 1) / 2)))
            : n || (i = new (rx())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return rM(
          rk(function (t) {
            return i.add(new (rx())(t - a).mul(r)).toNumber();
          }),
          rE
        )(0, e);
      }
      var rz = r_(function (t) {
        var e = rI(t, 2),
          n = e[0],
          r = e[1],
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          o =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(i, 2),
          u = rI(rL([n, r]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) {
          var s =
            l === 1 / 0
              ? [c].concat(
                  rD(
                    rE(0, i - 1).map(function () {
                      return 1 / 0;
                    })
                  )
                )
              : [].concat(
                  rD(
                    rE(0, i - 1).map(function () {
                      return -1 / 0;
                    })
                  ),
                  [l]
                );
          return n > r ? rT(s) : s;
        }
        if (c === l) return r$(c, i, o);
        var f = (function t(e, n, r, i) {
            var o,
              a =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
            if (!Number.isFinite((n - e) / (r - 1)))
              return {
                step: new (rx())(0),
                tickMin: new (rx())(0),
                tickMax: new (rx())(0),
              };
            var u = rR(new (rx())(n).sub(e).div(r - 1), i, a),
              c = Math.ceil(
                (o =
                  e <= 0 && n >= 0
                    ? new (rx())(0)
                    : (o = new (rx())(e).add(n).div(2)).sub(
                        new (rx())(o).mod(u)
                      ))
                  .sub(e)
                  .div(u)
                  .toNumber()
              ),
              l = Math.ceil(new (rx())(n).sub(o).div(u).toNumber()),
              s = c + l + 1;
            return s > r
              ? t(e, n, r, i, a + 1)
              : (s < r &&
                  ((l = n > 0 ? l + (r - s) : l),
                  (c = n > 0 ? c : c + (r - s))),
                {
                  step: u,
                  tickMin: o.sub(new (rx())(c).mul(u)),
                  tickMax: o.add(new (rx())(l).mul(u)),
                });
          })(c, l, a, o),
          p = f.step,
          h = f.tickMin,
          d = f.tickMax,
          y = rC.rangeStep(h, d.add(new (rx())(0.1).mul(p)), p);
        return n > r ? rT(y) : y;
      });
      r_(function (t) {
        var e = rI(t, 2),
          n = e[0],
          r = e[1],
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          o =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(i, 2),
          u = rI(rL([n, r]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) return [n, r];
        if (c === l) return r$(c, i, o);
        var s = rR(new (rx())(l).sub(c).div(a - 1), o, 0),
          f = rM(
            rk(function (t) {
              return new (rx())(c).add(new (rx())(t).mul(s)).toNumber();
            }),
            rE
          )(0, a).filter(function (t) {
            return t >= c && t <= l;
          });
        return n > r ? rT(f) : f;
      });
      var rU = r_(function (t, e) {
          var n = rI(t, 2),
            r = n[0],
            i = n[1],
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = rI(rL([r, i]), 2),
            u = a[0],
            c = a[1];
          if (u === -1 / 0 || c === 1 / 0) return [r, i];
          if (u === c) return [u];
          var l = rR(new (rx())(c).sub(u).div(Math.max(e, 2) - 1), o, 0),
            s = [].concat(
              rD(
                rC.rangeStep(
                  new (rx())(u),
                  new (rx())(c).sub(new (rx())(0.99).mul(l)),
                  l
                )
              ),
              [c]
            );
          return r > i ? rT(s) : s;
        }),
        rF = n(19539),
        rZ = n(523),
        rq = n(10997),
        rW = n(23237);
      function rY(t) {
        return (rY =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function rH(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rX(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rH(Object(n), !0).forEach(function (e) {
                rV(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rH(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function rV(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != rY(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != rY(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == rY(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function rG(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return rK(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return rK(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return rK(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rK(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function rJ(t, e, n) {
        return rn()(t) || rn()(e)
          ? n
          : (0, rZ.P2)(e)
          ? rc()(t, e, n)
          : ri()(e)
          ? e(t)
          : n;
      }
      function rQ(t, e, n, r) {
        var i = rs()(t, function (t) {
          return rJ(t, e);
        });
        if ("number" === n) {
          var o = i.filter(function (t) {
            return (0, rZ.hj)(t) || parseFloat(t);
          });
          return o.length ? [rt()(o), n8()(o)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? i.filter(function (t) {
                return !rn()(t);
              })
            : i
        ).map(function (t) {
          return (0, rZ.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var r0 = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            i &&
            "angleAxis" === i.axisType &&
            1e-6 >= Math.abs(Math.abs(i.range[1] - i.range[0]) - 360)
          )
            for (var u = i.range, c = 0; c < a; c++) {
              var l = c > 0 ? r[c - 1].coordinate : r[a - 1].coordinate,
                s = r[c].coordinate,
                f = c >= a - 1 ? r[0].coordinate : r[c + 1].coordinate,
                p = void 0;
              if ((0, rZ.uY)(s - l) !== (0, rZ.uY)(f - s)) {
                var h = [];
                if ((0, rZ.uY)(f - s) === (0, rZ.uY)(u[1] - u[0])) {
                  p = f;
                  var d = s + u[1] - u[0];
                  (h[0] = Math.min(d, (d + l) / 2)),
                    (h[1] = Math.max(d, (d + l) / 2));
                } else {
                  p = l;
                  var y = f + u[1] - u[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  o = r[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  o = r[c].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
                  t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
              ) {
                o = n[b].index;
                break;
              }
          return o;
        },
        r1 = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            i = r.stroke,
            o = r.fill;
          switch (n) {
            case "Line":
              e = i;
              break;
            case "Area":
            case "Radar":
              e = i && "none" !== i ? i : o;
              break;
            default:
              e = o;
          }
          return e;
        },
        r2 = function (t) {
          var e = t.barSize,
            n = t.totalSize,
            r = t.stackGroups,
            i = void 0 === r ? {} : r;
          if (!i) return {};
          for (var o = {}, a = Object.keys(i), u = 0, c = a.length; u < c; u++)
            for (
              var l = i[a[u]].stackGroups,
                s = Object.keys(l),
                f = 0,
                p = s.length;
              f < p;
              f++
            ) {
              var h = l[s[f]],
                d = h.items,
                y = h.cateAxisId,
                v = d.filter(function (t) {
                  return (0, rq.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (v && v.length) {
                var m = v[0].props.barSize,
                  g = v[0].props[y];
                o[g] || (o[g] = []);
                var b = rn()(m) ? e : m;
                o[g].push({
                  item: v[0],
                  stackList: v.slice(1),
                  barSize: rn()(b) ? void 0 : (0, rZ.h1)(b, n, 0),
                });
              }
            }
          return o;
        },
        r3 = function (t) {
          var e,
            n = t.barGap,
            r = t.barCategoryGap,
            i = t.bandSize,
            o = t.sizeList,
            a = void 0 === o ? [] : o,
            u = t.maxBarSize,
            c = a.length;
          if (c < 1) return null;
          var l = (0, rZ.h1)(n, i, 0, !0),
            s = [];
          if (a[0].barSize === +a[0].barSize) {
            var f = !1,
              p = i / c,
              h = a.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (c - 1) * l) >= i && ((h -= (c - 1) * l), (l = 0)),
              h >= i && p > 0 && ((f = !0), (p *= 0.9), (h = c * p));
            var d = { offset: (((i - h) / 2) >> 0) - l, size: 0 };
            e = a.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                r = [].concat(rG(t), [n]);
              return (
                (d = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: d });
                  }),
                r
              );
            }, s);
          } else {
            var y = (0, rZ.h1)(r, i, 0, !0);
            i - 2 * y - (c - 1) * l <= 0 && (l = 0);
            var v = (i - 2 * y - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = u === +u ? Math.min(v, u) : v;
            e = a.reduce(function (t, e, n) {
              var r = [].concat(rG(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * n + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: r[r.length - 1].position });
                  }),
                r
              );
            }, s);
          }
          return e;
        },
        r5 = function (t, e, n, r) {
          var i = n.children,
            o = n.width,
            a = n.margin,
            u = o - (a.left || 0) - (a.right || 0),
            c = (0, rW.z)({ children: i, legendWidth: u });
          if (c) {
            var l = r || {},
              s = l.width,
              f = l.height,
              p = c.align,
              h = c.verticalAlign,
              d = c.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, rZ.hj)(t[p])
            )
              return rX(rX({}, t), {}, rV({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, rZ.hj)(t[h])
            )
              return rX(rX({}, t), {}, rV({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        r6 = function (t, e, n, r, i) {
          var o = e.props.children,
            a = (0, rq.NN)(o, rF.W).filter(function (t) {
              var e;
              return (
                (e = t.props.direction),
                !!rn()(i) ||
                  ("horizontal" === r
                    ? "yAxis" === i
                    : "vertical" === r || "x" === e
                    ? "xAxis" === i
                    : "y" !== e || "yAxis" === i)
              );
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = rJ(e, n);
                if (rn()(r)) return t;
                var i = Array.isArray(r) ? [rt()(r), n8()(r)] : [r, r],
                  o = u.reduce(
                    function (t, n) {
                      var r = rJ(e, n, 0),
                        o = i[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = i[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                      return [Math.min(o, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
              },
              [1 / 0, -1 / 0]
            );
          }
          return null;
        },
        r7 = function (t, e, n, r, i) {
          var o = e
            .map(function (e) {
              return r6(t, e, n, i, r);
            })
            .filter(function (t) {
              return !rn()(t);
            });
          return o && o.length
            ? o.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              )
            : null;
        },
        r4 = function (t, e, n, r, i) {
          var o = e.map(function (e) {
            var o = e.props.dataKey;
            return ("number" === n && o && r6(t, e, o, r)) || rQ(t, o, n, i);
          });
          if ("number" === n)
            return o.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            );
          var a = {};
          return o.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        r8 = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        r9 = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            i = t.duplicateDomain,
            o = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? r.bandwidth() / 2 : 2,
            c =
              (e || n) && "category" === o && r.bandwidth
                ? r.bandwidth() / u
                : 0;
          return ((c =
            "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
              ? 2 * (0, rZ.uY)(a[0] - a[1]) * c
              : c),
          e && (t.ticks || t.niceTicks))
            ? (t.ticks || t.niceTicks)
                .map(function (t) {
                  return {
                    coordinate: r(i ? i.indexOf(t) : t) + c,
                    value: t,
                    offset: c,
                  };
                })
                .filter(function (t) {
                  return !rp()(t.coordinate);
                })
            : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: r(t) + c, value: t, index: e, offset: c };
              })
            : r.ticks && !n
            ? r.ticks(t.tickCount).map(function (t) {
                return { coordinate: r(t) + c, value: t, offset: c };
              })
            : r.domain().map(function (t, e) {
                return {
                  coordinate: r(t) + c,
                  value: i ? i[t] : t,
                  index: e,
                  offset: c,
                };
              });
        },
        it = new WeakMap(),
        ie = function (t, e) {
          if ("function" != typeof e) return t;
          it.has(t) || it.set(t, new WeakMap());
          var n = it.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        ir = function (t, e, n) {
          var r = t.scale,
            i = t.type,
            o = t.layout,
            a = t.axisType;
          if ("auto" === r)
            return "radial" === o && "radiusAxis" === a
              ? { scale: f.Z(), realScaleType: "band" }
              : "radial" === o && "angleAxis" === a
              ? { scale: tB(), realScaleType: "linear" }
              : "category" === i &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !n))
              ? { scale: f.x(), realScaleType: "point" }
              : "category" === i
              ? { scale: f.Z(), realScaleType: "band" }
              : { scale: tB(), realScaleType: "linear" };
          if (ra()(r)) {
            var u = "scale".concat(rd()(r));
            return {
              scale: (s[u] || f.x)(),
              realScaleType: s[u] ? u : "point",
            };
          }
          return ri()(r)
            ? { scale: r }
            : { scale: f.x(), realScaleType: "point" };
        },
        ii = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              i = Math.min(r[0], r[1]) - 1e-4,
              o = Math.max(r[0], r[1]) + 1e-4,
              a = t(e[0]),
              u = t(e[n - 1]);
            (a < i || a > o || u < i || u > o) && t.domain([e[0], e[n - 1]]);
          }
        },
        io = function (t, e) {
          if (!t) return null;
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n].item === e) return t[n].position;
          return null;
        },
        ia = function (t, e) {
          if (!e || 2 !== e.length || !(0, rZ.hj)(e[0]) || !(0, rZ.hj)(e[1]))
            return t;
          var n = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]),
            i = [t[0], t[1]];
          return (
            (!(0, rZ.hj)(t[0]) || t[0] < n) && (i[0] = n),
            (!(0, rZ.hj)(t[1]) || t[1] > r) && (i[1] = r),
            i[0] > r && (i[0] = r),
            i[1] < n && (i[1] = n),
            i
          );
        },
        iu = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                  var u = rp()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  u >= 0
                    ? ((t[a][n][0] = i), (t[a][n][1] = i + u), (i = t[a][n][1]))
                    : ((t[a][n][0] = o),
                      (t[a][n][1] = o + u),
                      (o = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0;
                if (i) for (n = 0; n < r; ++n) t[n][o][1] /= i;
              }
              n1(t, e);
            }
          },
          none: n1,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) {
                for (var a = 0, u = 0; a < n; ++a) u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2;
              }
              n1(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, i, o = 0, a = 1; a < r; ++a) {
                for (var u = 0, c = 0, l = 0; u < i; ++u) {
                  for (
                    var s = t[e[u]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < u;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                  }
                  (c += f), (l += p * f);
                }
                (n[a - 1][1] += n[a - 1][0] = o), c && (o -= l / c);
              }
              (n[a - 1][1] += n[a - 1][0] = o), n1(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0; o < e; ++o) {
                  var a = rp()(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                  a >= 0
                    ? ((t[o][n][0] = i), (t[o][n][1] = i + a), (i = t[o][n][1]))
                    : ((t[o][n][0] = 0), (t[o][n][1] = 0));
                }
          },
        },
        ic = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            i = iu[n];
          return (function () {
            var t = (0, n3.Z)([]),
              e = n5,
              n = n1,
              r = n6;
            function i(i) {
              var o,
                a,
                u = Array.from(t.apply(this, arguments), n7),
                c = u.length,
                l = -1;
              for (let t of i)
                for (o = 0, ++l; o < c; ++o)
                  (u[o][l] = [0, +r(t, u[o].key, l, i)]).data = t;
              for (o = 0, a = (0, n2.Z)(e(u)); o < c; ++o) u[a[o]].index = o;
              return n(u, a), u;
            }
            return (
              (i.keys = function (e) {
                return arguments.length
                  ? ((t =
                      "function" == typeof e ? e : (0, n3.Z)(Array.from(e))),
                    i)
                  : t;
              }),
              (i.value = function (t) {
                return arguments.length
                  ? ((r = "function" == typeof t ? t : (0, n3.Z)(+t)), i)
                  : r;
              }),
              (i.order = function (t) {
                return arguments.length
                  ? ((e =
                      null == t
                        ? n5
                        : "function" == typeof t
                        ? t
                        : (0, n3.Z)(Array.from(t))),
                    i)
                  : e;
              }),
              (i.offset = function (t) {
                return arguments.length ? ((n = null == t ? n1 : t), i) : n;
              }),
              i
            );
          })()
            .keys(r)
            .value(function (t, e) {
              return +rJ(t, e, 0);
            })
            .order(n5)
            .offset(i)(t);
        },
        il = function (t, e, n, r, i, o) {
          if (!t) return null;
          var a = (o ? e.reverse() : e).reduce(function (t, e) {
            var i = e.props,
              o = i.stackId;
            if (i.hide) return t;
            var a = e.props[n],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, rZ.P2)(o)) {
              var c = u.stackGroups[o] || {
                numericAxisId: n,
                cateAxisId: r,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[o] = c);
            } else u.stackGroups[(0, rZ.EL)("_stackId_")] = { numericAxisId: n, cateAxisId: r, items: [e] };
            return rX(rX({}, t), {}, rV({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, o) {
            var u = a[o];
            return (
              u.hasStack &&
                (u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                  e,
                  o
                ) {
                  var a = u.stackGroups[o];
                  return rX(
                    rX({}, e),
                    {},
                    rV({}, o, {
                      numericAxisId: n,
                      cateAxisId: r,
                      items: a.items,
                      stackedData: ic(t, a.items, i),
                    })
                  );
                },
                {})),
              rX(rX({}, e), {}, rV({}, o, u))
            );
          }, {});
        },
        is = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            i = e.tickCount,
            o = e.originalDomain,
            a = e.allowDecimals,
            u = n || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            i &&
            "number" === r &&
            o &&
            ("auto" === o[0] || "auto" === o[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = rz(c, i, a);
            return t.domain([rt()(l), n8()(l)]), { niceTicks: l };
          }
          return i && "number" === r
            ? { niceTicks: rU(t.domain(), i, a) }
            : null;
        };
      function ip(t) {
        var e = t.axis,
          n = t.ticks,
          r = t.bandSize,
          i = t.entry,
          o = t.index,
          a = t.dataKey;
        if ("category" === e.type) {
          if (!e.allowDuplicatedCategory && e.dataKey && !rn()(i[e.dataKey])) {
            var u = (0, rZ.Ap)(n, "value", i[e.dataKey]);
            if (u) return u.coordinate + r / 2;
          }
          return n[o] ? n[o].coordinate + r / 2 : null;
        }
        var c = rJ(i, rn()(a) ? e.dataKey : a);
        return rn()(c) ? null : e.scale(c);
      }
      var ih = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.offset,
            i = t.bandSize,
            o = t.entry,
            a = t.index;
          if ("category" === e.type) return n[a] ? n[a].coordinate + r : null;
          var u = rJ(o, e.dataKey, e.domain[a]);
          return rn()(u) ? null : e.scale(u) - i / 2 + r;
        },
        id = function (t) {
          var e = t.numericAxis,
            n = e.scale.domain();
          if ("number" === e.type) {
            var r = Math.min(n[0], n[1]),
              i = Math.max(n[0], n[1]);
            return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
          }
          return n[0];
        },
        iy = function (t, e) {
          var n = t.props.stackId;
          if ((0, rZ.P2)(n)) {
            var r = e[n];
            if (r) {
              var i = r.items.indexOf(t);
              return i >= 0 ? r.stackedData[i] : null;
            }
          }
          return null;
        },
        iv = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, i) {
                var o = t[i].stackedData.reduce(
                  function (t, r) {
                    var i = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          rt()(e.concat([t[0]]).filter(rZ.hj)),
                          n8()(e.concat([t[1]]).filter(rZ.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0]
                    );
                    return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                  },
                  [1 / 0, -1 / 0]
                );
                return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
              },
              [1 / 0, -1 / 0]
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        im = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ig = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ib = function (t, e, n) {
          if (ri()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, rZ.hj)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (im.test(t[0])) {
            var i = +im.exec(t[0])[1];
            r[0] = e[0] - i;
          } else ri()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, rZ.hj)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (ig.test(t[1])) {
            var o = +ig.exec(t[1])[1];
            r[1] = e[1] + o;
          } else ri()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        ix = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var i = rg()(e, function (t) {
                  return t.coordinate;
                }),
                o = 1 / 0,
                a = 1,
                u = i.length;
              a < u;
              a++
            ) {
              var c = i[a],
                l = i[a - 1];
              o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
          }
          return n ? void 0 : 0;
        },
        iO = function (t, e, n) {
          return !t || !t.length || rv()(t, rc()(n, "type.defaultProps.domain"))
            ? e
            : t;
        },
        iw = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            i = n.name,
            o = n.unit,
            a = n.formatter,
            u = n.tooltipType,
            c = n.chartType,
            l = n.hide;
          return rX(
            rX({}, (0, rq.L6)(t, !1)),
            {},
            {
              dataKey: r,
              unit: o,
              formatter: a,
              name: i || r,
              color: r1(t),
              value: rJ(e, r),
              type: u,
              payload: e,
              chartType: c,
              hide: l,
            }
          );
        };
    },
    45570: function (t, e, n) {
      "use strict";
      n.d(e, {
        os: function () {
          return f;
        },
        xE: function () {
          return s;
        },
      });
      var r = n(72549);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != i(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != i(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == i(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = { widthCache: {}, cacheCount: 0 },
        c = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        l = "recharts_measurement_span",
        s = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (null == t || r.x.isSsr) return { width: 0, height: 0 };
          var i =
              (Object.keys((e = a({}, n))).forEach(function (t) {
                e[t] || delete e[t];
              }),
              e),
            o = JSON.stringify({ text: t, copyStyle: i });
          if (u.widthCache[o]) return u.widthCache[o];
          try {
            var s = document.getElementById(l);
            s ||
              ((s = document.createElement("span")).setAttribute("id", l),
              s.setAttribute("aria-hidden", "true"),
              document.body.appendChild(s));
            var f = a(a({}, c), i);
            Object.assign(s.style, f), (s.textContent = "".concat(t));
            var p = s.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (u.widthCache[o] = h),
              ++u.cacheCount > 2e3 && ((u.cacheCount = 0), (u.widthCache = {})),
              h
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        f = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    523: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ap: function () {
          return O;
        },
        EL: function () {
          return v;
        },
        Kt: function () {
          return g;
        },
        P2: function () {
          return d;
        },
        bv: function () {
          return b;
        },
        h1: function () {
          return m;
        },
        hU: function () {
          return p;
        },
        hj: function () {
          return h;
        },
        k4: function () {
          return x;
        },
        uY: function () {
          return f;
        },
      });
      var r = n(85505),
        i = n.n(r),
        o = n(16951),
        a = n.n(o),
        u = n(72579),
        c = n.n(u),
        l = n(80537),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return i()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || i()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !i()(t)) return r;
          if (p(t)) {
            var u = t.indexOf("%");
            n = (e * parseFloat(t.slice(0, u))) / 100;
          } else n = +t;
          return a()(n) && (n = r), o && n > e && (n = e), n;
        },
        g = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        b = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, n = {}, r = 0; r < e; r++) {
            if (n[t[r]]) return !0;
            n[t[r]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (n) {
                return t + n * (e - t);
              }
            : function () {
                return e;
              };
        };
      function O(t, e, n) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : c()(t, e)) === n;
            })
          : null;
      }
    },
    72549: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return r;
        },
      });
      var r = {
        isSsr:
          !window.document ||
          !window.document.createElement ||
          !window.setTimeout,
        get: function (t) {
          return r[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) r[t] = e;
          else {
            var n = Object.keys(t);
            n &&
              n.length &&
              n.forEach(function (e) {
                r[e] = t[e];
              });
          }
        },
      };
    },
    89951: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var r = function (t, e) {
        for (
          var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          r[i - 2] = arguments[i];
      };
    },
    15788: function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                var i, o;
                (i = e),
                  (o = n[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != r(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != r(i)) return i;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == r(e) ? e : String(e);
                  })(i)) in t
                    ? Object.defineProperty(t, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[i] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      n.d(e, {
        Wk: function () {
          return a;
        },
        op: function () {
          return u;
        },
        z3: function () {
          return f;
        },
      }),
        n(1842),
        n(2784),
        n(61049);
      var a = Math.PI / 180,
        u = function (t, e, n, r) {
          return { x: t + Math.cos(-a * r) * n, y: e + Math.sin(-a * r) * n };
        },
        c = function (t, e) {
          var n = t.x,
            r = t.y;
          return Math.sqrt(Math.pow(n - e.x, 2) + Math.pow(r - e.y, 2));
        },
        l = function (t, e) {
          var n = t.x,
            r = t.y,
            i = e.cx,
            o = e.cy,
            a = c({ x: n, y: r }, { x: i, y: o });
          if (a <= 0) return { radius: a };
          var u = Math.acos((n - i) / a);
          return (
            r > o && (u = 2 * Math.PI - u),
            { radius: a, angle: (180 * u) / Math.PI, angleInRadian: u }
          );
        },
        s = function (t) {
          var e = t.startAngle,
            n = t.endAngle,
            r = Math.min(Math.floor(e / 360), Math.floor(n / 360));
          return { startAngle: e - 360 * r, endAngle: n - 360 * r };
        },
        f = function (t, e) {
          var n,
            r = l({ x: t.x, y: t.y }, e),
            i = r.radius,
            a = r.angle,
            u = e.innerRadius,
            c = e.outerRadius;
          if (i < u || i > c) return !1;
          if (0 === i) return !0;
          var f = s(e),
            p = f.startAngle,
            h = f.endAngle,
            d = a;
          if (p <= h) {
            for (; d > h; ) d -= 360;
            for (; d < p; ) d += 360;
            n = d >= p && d <= h;
          } else {
            for (; d > p; ) d -= 360;
            for (; d < h; ) d += 360;
            n = d >= h && d <= p;
          }
          return n
            ? o(
                o({}, e),
                {},
                {
                  radius: i,
                  angle:
                    d +
                    360 *
                      Math.min(
                        Math.floor(e.startAngle / 360),
                        Math.floor(e.endAngle / 360)
                      ),
                }
              )
            : null;
        };
    },
    10997: function (t, e, n) {
      "use strict";
      n.d(e, {
        $R: function () {
          return R;
        },
        $k: function () {
          return _;
        },
        Bh: function () {
          return L;
        },
        Gf: function () {
          return j;
        },
        L6: function () {
          return D;
        },
        NN: function () {
          return E;
        },
        TT: function () {
          return M;
        },
        eu: function () {
          return B;
        },
        rL: function () {
          return I;
        },
        sP: function () {
          return k;
        },
      });
      var r = n(72579),
        i = n.n(r),
        o = n(1842),
        a = n.n(o),
        u = n(85505),
        c = n.n(u),
        l = n(61049),
        s = n.n(l),
        f = n(29259),
        p = n.n(f),
        h = n(2784),
        d = n(48570),
        y = n(523),
        v = n(21664),
        m = n(69888),
        g = ["children"],
        b = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function O(t) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var w = {
          click: "onClick",
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          mouseout: "onMouseOut",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          touchcancel: "onTouchCancel",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
        },
        j = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        S = null,
        P = null,
        A = function t(e) {
          if (e === S && Array.isArray(P)) return P;
          var n = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (P = n),
            (S = e),
            n
          );
        };
      function E(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return j(t);
              })
            : [j(e)]),
          A(t).forEach(function (t) {
            var e = i()(t, "type.displayName") || i()(t, "type.name");
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function k(t, e) {
        var n = E(t, e);
        return n && n[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            n = e.width,
            r = e.height;
          return !!(0, y.hj)(n) && !(n <= 0) && !!(0, y.hj)(r) && !(r <= 0);
        },
        T = [
          "a",
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColormatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-url",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "lineGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "script",
          "set",
          "stop",
          "style",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "title",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ],
        _ = function (t) {
          return t && "object" === O(t) && "cx" in t && "cy" in t && "r" in t;
        },
        C = function (t, e, n, r) {
          var i,
            o =
              null !==
                (i = null === m.ry || void 0 === m.ry ? void 0 : m.ry[r]) &&
              void 0 !== i
                ? i
                : [];
          return (
            (!s()(t) && ((r && o.includes(e)) || m.Yh.includes(e))) ||
            (n && m.nv.includes(e))
          );
        },
        D = function (t, e, n) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, h.isValidElement)(t) && (r = t.props), !p()(r))) return null;
          var i = {};
          return (
            Object.keys(r).forEach(function (t) {
              var o;
              C(null === (o = r) || void 0 === o ? void 0 : o[t], t, e, n) &&
                (i[t] = r[t]);
            }),
            i
          );
        },
        I = function t(e, n) {
          if (e === n) return !0;
          var r = h.Children.count(e);
          if (r !== h.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return N(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var i = 0; i < r; i++) {
            var o = e[i],
              a = n[i];
            if (Array.isArray(o) || Array.isArray(a)) {
              if (!t(o, a)) return !1;
            } else if (!N(o, a)) return !1;
          }
          return !0;
        },
        N = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              i = x(n, g),
              o = e.props || {},
              u = o.children,
              c = x(o, b);
            if (r && u) return (0, v.w)(i, c) && I(r, u);
            if (!r && !u) return (0, v.w)(i, c);
          }
          return !1;
        },
        B = function (t, e) {
          var n = [],
            r = {};
          return (
            A(t).forEach(function (t, i) {
              if (t && t.type && c()(t.type) && T.indexOf(t.type) >= 0)
                n.push(t);
              else if (t) {
                var o = j(t.type),
                  a = e[o] || {},
                  u = a.handler,
                  l = a.once;
                if (u && (!l || !r[o])) {
                  var s = u(t, o, i);
                  n.push(s), (r[o] = !0);
                }
              }
            }),
            n
          );
        },
        L = function (t) {
          var e = t && t.type;
          return e && w[e] ? w[e] : null;
        },
        R = function (t, e) {
          return A(e).indexOf(t);
        };
    },
    21664: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n in t)
          if (
            {}.hasOwnProperty.call(t, n) &&
            (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])
          )
            return !1;
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
            return !1;
        return !0;
      }
      n.d(e, {
        w: function () {
          return r;
        },
      });
    },
    23237: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return l;
        },
      });
      var r = n(28335),
        i = n(27721),
        o = n(10997);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != a(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != a(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == a(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var l = function (t) {
        var e,
          n = t.children,
          a = t.formattedGraphicalItems,
          u = t.legendWidth,
          l = t.legendContent,
          s = (0, o.sP)(n, r.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                ? (a || []).reduce(function (t, e) {
                    var n = e.item,
                      r = e.props,
                      i = r.sectors || r.data || [];
                    return t.concat(
                      i.map(function (t) {
                        return {
                          type: s.props.iconType || n.props.legendType,
                          value: t.name,
                          color: t.fill,
                          payload: t,
                        };
                      })
                    );
                  }, [])
                : (a || []).map(function (t) {
                    var e = t.item,
                      n = e.props,
                      r = n.dataKey,
                      o = n.name,
                      a = n.legendType;
                    return {
                      inactive: n.hide,
                      dataKey: r,
                      type: s.props.iconType || a || "square",
                      color: (0, i.fk)(e),
                      value: o || r,
                      payload: e.props,
                    };
                  })),
            c(
              c(c({}, s.props), r.D.getWithHeight(s, u)),
              {},
              { payload: e, item: s }
            ))
          : null;
      };
    },
    57015: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return u;
        },
      });
      var r = n(84636),
        i = n.n(r),
        o = n(61049),
        a = n.n(o);
      function u(t, e, n) {
        return !0 === e ? i()(t, n) : a()(e) ? i()(t, e) : t;
      }
    },
    69888: function (t, e, n) {
      "use strict";
      n.d(e, {
        Yh: function () {
          return u;
        },
        Ym: function () {
          return f;
        },
        bw: function () {
          return p;
        },
        nv: function () {
          return s;
        },
        ry: function () {
          return l;
        },
      });
      var r = n(2784),
        i = n(29259),
        o = n.n(i);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var u = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        c = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: c, polyline: c },
        s = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, r.isValidElement)(t) && (n = t.props), !o()(n))) return null;
          var i = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (i[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            i
          );
        },
        p = function (t, e, n) {
          if (!o()(t) || "object" !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (i) {
              var o = t[i];
              s.includes(i) &&
                "function" == typeof o &&
                (r || (r = {}),
                (r[i] = function (t) {
                  return o(e, n, t), null;
                }));
            }),
            r
          );
        };
    },
    29112: function (t, e, n) {
      "use strict";
      e.Z = function () {
        for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++)
          (t = arguments[n]) &&
            (e = (function t(e) {
              var n,
                r,
                i = "";
              if ("string" == typeof e || "number" == typeof e) i += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var o = e.length;
                  for (n = 0; n < o; n++)
                    e[n] && (r = t(e[n])) && (i && (i += " "), (i += r));
                } else for (r in e) e[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      };
    },
    68262: function (t, e, n) {
      "use strict";
      var r = n(23586);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, n, i, o, a) {
            if (a !== r) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    13980: function (t, e, n) {
      t.exports = n(68262)();
    },
    23586: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    66866: function (t, e) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        s = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        d = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        m = n ? Symbol.for("react.block") : 60121,
        g = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function O(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case s:
                case f:
                case o:
                case u:
                case a:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case v:
                    case y:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function w(t) {
        return O(t) === f;
      }
      (e.AsyncMode = s),
        (e.ConcurrentMode = f),
        (e.ContextConsumer = l),
        (e.ContextProvider = c),
        (e.Element = r),
        (e.ForwardRef = p),
        (e.Fragment = o),
        (e.Lazy = v),
        (e.Memo = y),
        (e.Portal = i),
        (e.Profiler = u),
        (e.StrictMode = a),
        (e.Suspense = h),
        (e.isAsyncMode = function (t) {
          return w(t) || O(t) === s;
        }),
        (e.isConcurrentMode = w),
        (e.isContextConsumer = function (t) {
          return O(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return O(t) === c;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === r;
        }),
        (e.isForwardRef = function (t) {
          return O(t) === p;
        }),
        (e.isFragment = function (t) {
          return O(t) === o;
        }),
        (e.isLazy = function (t) {
          return O(t) === v;
        }),
        (e.isMemo = function (t) {
          return O(t) === y;
        }),
        (e.isPortal = function (t) {
          return O(t) === i;
        }),
        (e.isProfiler = function (t) {
          return O(t) === u;
        }),
        (e.isStrictMode = function (t) {
          return O(t) === a;
        }),
        (e.isSuspense = function (t) {
          return O(t) === h;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === o ||
            t === f ||
            t === u ||
            t === a ||
            t === h ||
            t === d ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === y ||
                t.$$typeof === c ||
                t.$$typeof === l ||
                t.$$typeof === p ||
                t.$$typeof === g ||
                t.$$typeof === b ||
                t.$$typeof === x ||
                t.$$typeof === m))
          );
        }),
        (e.typeOf = O);
    },
    48570: function (t, e, n) {
      "use strict";
      t.exports = n(66866);
    },
    46097: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return tZ;
        },
      });
      var r = n(2784),
        i = n(13980),
        o = n.n(i),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, i) {
          return t(n, r, i) && e(n, r, i);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || "object" != typeof e || "object" != typeof n)
            return t(e, n, r);
          var i = r.cache,
            o = i.get(e),
            a = i.get(n);
          if (o && a) return o === n && a === e;
          i.set(e, n), i.set(n, e);
          var u = t(e, n, r);
          return i.delete(e), i.delete(n), u;
        };
      }
      function f(t) {
        return a(t).concat(u(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return c.call(t, e);
        };
      function h(t, e) {
        return t || e ? t === e : t === e || (t != t && e != e);
      }
      var d = "_owner",
        y = Object.getOwnPropertyDescriptor,
        v = Object.keys;
      function m(t, e, n) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        return !0;
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e, n) {
        if (t.size !== e.size) return !1;
        for (
          var r, i, o = {}, a = t.entries(), u = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (i = c.next()) && !i.done;

          ) {
            var f = r.value,
              p = f[0],
              h = f[1],
              d = i.value,
              y = d[0],
              v = d[1];
            !l &&
              !o[s] &&
              (l =
                n.equals(p, y, u, s, t, e, n) &&
                n.equals(h, v, p, y, t, e, n)) &&
              (o[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          i = v(t),
          o = i.length;
        if (v(e).length !== o) return !1;
        for (; o-- > 0; )
          if (
            ((r = i[o]) === d &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof) ||
            !p(e, r) ||
            !n.equals(t[r], e[r], r, r, t, e, n)
          )
            return !1;
        return !0;
      }
      function O(t, e, n) {
        var r,
          i,
          o,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; )
          if (
            ((r = a[u]) === d &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof) ||
            !p(e, r) ||
            !n.equals(t[r], e[r], r, r, t, e, n) ||
            ((i = y(t, r)),
            (o = y(e, r)),
            (i || o) &&
              (!i ||
                !o ||
                i.configurable !== o.configurable ||
                i.enumerable !== o.enumerable ||
                i.writable !== o.writable))
          )
            return !1;
        return !0;
      }
      function w(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, i, o = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var u = e.values(), c = !1, l = 0; (i = u.next()) && !i.done; )
            !c &&
              !o[l] &&
              (c = n.equals(r.value, i.value, r.value, i.value, t, e, n)) &&
              (o[l] = !0),
              l++;
          if (!c) return !1;
        }
        return !0;
      }
      function P(t, e) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var A = Array.isArray,
        E =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        k = Object.assign,
        M = Object.prototype.toString.call.bind(Object.prototype.toString),
        T = _();
      function _(t) {
        void 0 === t && (t = {});
        var e,
          n,
          r,
          i,
          o,
          a,
          u,
          c,
          f,
          p = t.circular,
          h = t.createInternalComparator,
          d = t.createState,
          y = t.strict,
          v =
            ((n = (e = (function (t) {
              var e = t.circular,
                n = t.createCustomConfig,
                r = t.strict,
                i = {
                  areArraysEqual: r ? O : m,
                  areDatesEqual: g,
                  areMapsEqual: r ? l(b, O) : b,
                  areObjectsEqual: r ? O : x,
                  arePrimitiveWrappersEqual: w,
                  areRegExpsEqual: j,
                  areSetsEqual: r ? l(S, O) : S,
                  areTypedArraysEqual: r ? O : P,
                };
              if ((n && (i = k({}, i, n(i))), e)) {
                var o = s(i.areArraysEqual),
                  a = s(i.areMapsEqual),
                  u = s(i.areObjectsEqual),
                  c = s(i.areSetsEqual);
                i = k({}, i, {
                  areArraysEqual: o,
                  areMapsEqual: a,
                  areObjectsEqual: u,
                  areSetsEqual: c,
                });
              }
              return i;
            })(t)).areArraysEqual),
            (r = e.areDatesEqual),
            (i = e.areMapsEqual),
            (o = e.areObjectsEqual),
            (a = e.arePrimitiveWrappersEqual),
            (u = e.areRegExpsEqual),
            (c = e.areSetsEqual),
            (f = e.areTypedArraysEqual),
            function (t, e, l) {
              if (t === e) return !0;
              if (
                null == t ||
                null == e ||
                "object" != typeof t ||
                "object" != typeof e
              )
                return t != t && e != e;
              var s = t.constructor;
              if (s !== e.constructor) return !1;
              if (s === Object) return o(t, e, l);
              if (A(t)) return n(t, e, l);
              if (null != E && E(t)) return f(t, e, l);
              if (s === Date) return r(t, e, l);
              if (s === RegExp) return u(t, e, l);
              if (s === Map) return i(t, e, l);
              if (s === Set) return c(t, e, l);
              var p = M(t);
              return "[object Date]" === p
                ? r(t, e, l)
                : "[object RegExp]" === p
                ? u(t, e, l)
                : "[object Map]" === p
                ? i(t, e, l)
                : "[object Set]" === p
                ? c(t, e, l)
                : "[object Object]" === p
                ? "function" != typeof t.then &&
                  "function" != typeof e.then &&
                  o(t, e, l)
                : "[object Arguments]" === p
                ? o(t, e, l)
                : ("[object Boolean]" === p ||
                    "[object Number]" === p ||
                    "[object String]" === p) &&
                  a(t, e, l);
            }),
          T = h
            ? h(v)
            : function (t, e, n, r, i, o, a) {
                return v(t, e, a);
              };
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            i = t.equals,
            o = t.strict;
          if (r)
            return function (t, a) {
              var u = r(),
                c = u.cache;
              return n(t, a, {
                cache: void 0 === c ? (e ? new WeakMap() : void 0) : c,
                equals: i,
                meta: u.meta,
                strict: o,
              });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: i,
                meta: void 0,
                strict: o,
              });
            };
          var a = { cache: void 0, equals: i, meta: void 0, strict: o };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: void 0 !== p && p,
          comparator: v,
          createState: d,
          equals: T,
          strict: void 0 !== y && y,
        });
      }
      function C(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(i) {
          if ((n < 0 && (n = i), i - n > e)) t(i), (n = -1);
          else {
            var o;
            (o = r),
              "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame(o);
          }
        });
      }
      function D(t) {
        return (D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function I(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function N(t) {
        return (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function B(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(n), !0).forEach(function (e) {
                R(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function R(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" !== N(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" !== N(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === N(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      _({ strict: !0 }),
        _({ circular: !0 }),
        _({ circular: !0, strict: !0 }),
        _({
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      var $ = function (t) {
          return t;
        },
        z = function (t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return L(L({}, n), {}, R({}, r, t(r, e[r])));
          }, {});
        },
        U = function (t, e, n) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  t.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  }),
                  " "
                )
                .concat(e, "ms ")
                .concat(n);
            })
            .join(",");
        },
        F = function (t, e, n, r, i, o, a, u) {};
      function Z(t, e) {
        if (t) {
          if ("string" == typeof t) return q(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return q(t, e);
        }
      }
      function q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var W = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        Y = function (t, e) {
          return t
            .map(function (t, n) {
              return t * Math.pow(e, n);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        H = function (t, e) {
          return function (n) {
            return Y(W(t, e), n);
          };
        },
        X = function () {
          for (var t, e, n = arguments.length, r = Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          var o = r[0],
            a = r[1],
            u = r[2],
            c = r[3];
          if (1 === r.length)
            switch (r[0]) {
              case "linear":
                (o = 0), (a = 0), (u = 1), (c = 1);
                break;
              case "ease":
                (o = 0.25), (a = 0.1), (u = 0.25), (c = 1);
                break;
              case "ease-in":
                (o = 0.42), (a = 0), (u = 1), (c = 1);
                break;
              case "ease-out":
                (o = 0.42), (a = 0), (u = 0.58), (c = 1);
                break;
              case "ease-in-out":
                (o = 0), (a = 0), (u = 0.58), (c = 1);
                break;
              default:
                var l = r[0].split("(");
                if (
                  "cubic-bezier" === l[0] &&
                  4 === l[1].split(")")[0].split(",").length
                ) {
                  var s,
                    f =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(
                        (s = l[1]
                          .split(")")[0]
                          .split(",")
                          .map(function (t) {
                            return parseFloat(t);
                          }))
                      ) ||
                      (function (t, e) {
                        var n =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != n) {
                          var r,
                            i,
                            o,
                            a,
                            u = [],
                            c = !0,
                            l = !1;
                          try {
                            for (
                              o = (n = n.call(t)).next;
                              !(c = (r = o.call(n)).done) &&
                              (u.push(r.value), 4 !== u.length);
                              c = !0
                            );
                          } catch (t) {
                            (l = !0), (i = t);
                          } finally {
                            try {
                              if (
                                !c &&
                                null != n.return &&
                                ((a = n.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw i;
                            }
                          }
                          return u;
                        }
                      })(s, 4) ||
                      Z(s, 4) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                  (o = f[0]), (a = f[1]), (u = f[2]), (c = f[3]);
                } else
                  F(
                    !1,
                    "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                    r
                  );
            }
          F(
            [o, u, a, c].every(function (t) {
              return "number" == typeof t && t >= 0 && t <= 1;
            }),
            "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
            r
          );
          var p = H(o, u),
            h = H(a, c),
            d =
              ((t = o),
              (e = u),
              function (n) {
                var r;
                return Y(
                  [].concat(
                    (function (t) {
                      if (Array.isArray(t)) return q(t);
                    })(
                      (r = W(t, e)
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1))
                    ) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(r) ||
                      Z(r) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    [0]
                  ),
                  n
                );
              }),
            y = function (t) {
              for (var e = t > 1 ? 1 : t, n = e, r = 0; r < 8; ++r) {
                var i,
                  o = p(n) - e,
                  a = d(n);
                if (1e-4 > Math.abs(o - e) || a < 1e-4) break;
                n = (i = n - o / a) > 1 ? 1 : i < 0 ? 0 : i;
              }
              return h(n);
            };
          return (y.isStepper = !1), y;
        },
        V = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.stiff,
            n = void 0 === e ? 100 : e,
            r = t.damping,
            i = void 0 === r ? 8 : r,
            o = t.dt,
            a = void 0 === o ? 17 : o,
            u = function (t, e, r) {
              var o = r + ((-(t - e) * n - r * i) * a) / 1e3,
                u = (r * a) / 1e3 + t;
              return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(o)
                ? [e, 0]
                : [u, o];
            };
          return (u.isStepper = !0), (u.dt = a), u;
        },
        G = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0];
          if ("string" == typeof r)
            switch (r) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return X(r);
              case "spring":
                return V();
              default:
                if ("cubic-bezier" === r.split("(")[0]) return X(r);
                F(
                  !1,
                  "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                  e
                );
            }
          return "function" == typeof r
            ? r
            : (F(
                !1,
                "[configEasing]: first argument type should be function or string, instead received %s",
                e
              ),
              null);
        };
      function K(t) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function J(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tr(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          tn(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(n), !0).forEach(function (e) {
                te(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function te(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" !== K(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" !== K(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === K(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tn(t, e) {
        if (t) {
          if ("string" == typeof t) return tr(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return tr(t, e);
        }
      }
      function tr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var ti = function (t, e, n) {
          return t + (e - t) * n;
        },
        to = function (t) {
          return t.from !== t.to;
        },
        ta = function t(e, n, r) {
          var i = z(function (t, n) {
            if (to(n)) {
              var r,
                i =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((r = e(n.from, n.to, n.velocity))) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        i,
                        o,
                        a,
                        u = [],
                        c = !0,
                        l = !1;
                      try {
                        for (
                          o = (n = n.call(t)).next;
                          !(c = (r = o.call(n)).done) &&
                          (u.push(r.value), 2 !== u.length);
                          c = !0
                        );
                      } catch (t) {
                        (l = !0), (i = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw i;
                        }
                      }
                      return u;
                    }
                  })(r, 2) ||
                  tn(r, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                o = i[0],
                a = i[1];
              return tt(tt({}, n), {}, { from: o, velocity: a });
            }
            return n;
          }, n);
          return r < 1
            ? z(function (t, e) {
                return to(e)
                  ? tt(
                      tt({}, e),
                      {},
                      {
                        velocity: ti(e.velocity, i[t].velocity, r),
                        from: ti(e.from, i[t].from, r),
                      }
                    )
                  : e;
              }, n)
            : t(e, i, r - 1);
        },
        tu = function (t, e, n, r, i) {
          var o,
            a,
            u = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
              return t.filter(function (t) {
                return e.includes(t);
              });
            }),
            c = u.reduce(function (n, r) {
              return tt(tt({}, n), {}, te({}, r, [t[r], e[r]]));
            }, {}),
            l = u.reduce(function (n, r) {
              return tt(
                tt({}, n),
                {},
                te({}, r, { from: t[r], velocity: 0, to: e[r] })
              );
            }, {}),
            s = -1,
            f = function () {
              return null;
            };
          return (
            (f = n.isStepper
              ? function (r) {
                  o || (o = r);
                  var a = (r - o) / n.dt;
                  (l = ta(n, l, a)),
                    i(
                      tt(
                        tt(tt({}, t), e),
                        z(function (t, e) {
                          return e.from;
                        }, l)
                      )
                    ),
                    (o = r),
                    Object.values(l).filter(to).length &&
                      (s = requestAnimationFrame(f));
                }
              : function (o) {
                  a || (a = o);
                  var u = (o - a) / r,
                    l = z(function (t, e) {
                      return ti.apply(void 0, J(e).concat([n(u)]));
                    }, c);
                  if ((i(tt(tt(tt({}, t), e), l)), u < 1))
                    s = requestAnimationFrame(f);
                  else {
                    var p = z(function (t, e) {
                      return ti.apply(void 0, J(e).concat([n(1)]));
                    }, c);
                    i(tt(tt(tt({}, t), e), p));
                  }
                }),
            function () {
              return (
                requestAnimationFrame(f),
                function () {
                  cancelAnimationFrame(s);
                }
              );
            }
          );
        };
      function tc(t) {
        return (tc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var tl = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "steps",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
      ];
      function ts(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tf(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tf(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tf(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function tp(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function th(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tp(Object(n), !0).forEach(function (e) {
                td(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tp(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function td(t, e, n) {
        return (
          (e = ty(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ty(t) {
        var e = (function (t, e) {
          if ("object" !== tc(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== tc(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === tc(e) ? e : String(e);
      }
      function tv(t, e) {
        return (tv = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tm(t, e) {
        if (e && ("object" === tc(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return tg(t);
      }
      function tg(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tb(t) {
        return (tb = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var tx = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && tv(t, e);
        })(o, t);
        var e,
          n,
          i =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = tb(o);
              return (
                (t = e
                  ? Reflect.construct(n, arguments, tb(this).constructor)
                  : n.apply(this, arguments)),
                tm(this, t)
              );
            });
        function o(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, o);
          var n,
            r = (n = i.call(this, t, e)).props,
            a = r.isActive,
            u = r.attributeName,
            c = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(tg(n))),
            (n.changeStyle = n.changeStyle.bind(tg(n))),
            !a || p <= 0)
          )
            return (
              (n.state = { style: {} }),
              "function" == typeof f && (n.state = { style: l }),
              tm(n)
            );
          if (s && s.length) n.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (n.state = { style: c }), tm(n);
            n.state = { style: u ? td({}, u, c) : c };
          } else n.state = { style: {} };
          return n;
        }
        return (
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  n = t.canBegin;
                (this.mounted = !0), e && n && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  n = e.isActive,
                  r = e.canBegin,
                  i = e.attributeName,
                  o = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (r) {
                  if (!n) {
                    var l = { style: i ? td({}, i, a) : a };
                    this.state &&
                      c &&
                      ((i && c[i] !== a) || (!i && c !== a)) &&
                      this.setState(l);
                    return;
                  }
                  if (!T(t.to, a) || !t.canBegin || !t.isActive) {
                    var s = !t.canBegin || !t.isActive;
                    this.manager && this.manager.stop(),
                      this.stopJSAnimation && this.stopJSAnimation();
                    var f = s || o ? u : t.to;
                    if (this.state && c) {
                      var p = { style: i ? td({}, i, f) : f };
                      ((i && c[i] !== f) || (!i && c !== f)) &&
                        this.setState(p);
                    }
                    this.runAnimation(
                      th(th({}, this.props), {}, { from: f, begin: 0 })
                    );
                  }
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  n = t.from,
                  r = t.to,
                  i = t.duration,
                  o = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = tu(n, r, G(o), i, this.changeStyle);
                this.manager.start([
                  c,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  i,
                  u,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  n = t.steps,
                  r = t.begin,
                  i = t.onAnimationStart,
                  o = n[0],
                  a = o.style,
                  u = o.duration;
                return this.manager.start(
                  [i].concat(
                    ts(
                      n.reduce(
                        function (t, r, i) {
                          if (0 === i) return t;
                          var o = r.duration,
                            a = r.easing,
                            u = void 0 === a ? "ease" : a,
                            c = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = i > 0 ? n[i - 1] : r,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(ts(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: o,
                                easing: u,
                              }),
                              o,
                            ]);
                          var h = U(p, o, u),
                            d = th(
                              th(th({}, f.style), c),
                              {},
                              { transition: h }
                            );
                          return [].concat(ts(t), [d, o, s]).filter($);
                        },
                        [a, Math.max(void 0 === u ? 0 : u, r)]
                      )
                    ),
                    [t.onAnimationEnd]
                  )
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                if (!this.manager) {
                  var e, n, r;
                  this.manager =
                    ((e = function () {
                      return null;
                    }),
                    (n = !1),
                    (r = function t(r) {
                      if (!n) {
                        if (Array.isArray(r)) {
                          if (!r.length) return;
                          var i =
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(r) ||
                              (function (t) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t["@@iterator"]
                                )
                                  return Array.from(t);
                              })(r) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return I(t, void 0);
                                  var n = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      t.constructor &&
                                      (n = t.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  )
                                    return I(t, void 0);
                                }
                              })(r) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                            o = i[0],
                            a = i.slice(1);
                          if ("number" == typeof o) {
                            C(t.bind(null, a), o);
                            return;
                          }
                          t(o), C(t.bind(null, a));
                          return;
                        }
                        "object" === D(r) && e(r),
                          "function" == typeof r && r();
                      }
                    }),
                    {
                      stop: function () {
                        n = !0;
                      },
                      start: function (t) {
                        (n = !1), r(t);
                      },
                      subscribe: function (t) {
                        return (
                          (e = t),
                          function () {
                            e = function () {
                              return null;
                            };
                          }
                        );
                      },
                    });
                }
                var i = t.begin,
                  o = t.duration,
                  a = t.attributeName,
                  u = t.to,
                  c = t.easing,
                  l = t.onAnimationStart,
                  s = t.onAnimationEnd,
                  f = t.steps,
                  p = t.children,
                  h = this.manager;
                if (
                  ((this.unSubscribe = h.subscribe(this.handleStyleChange)),
                  "function" == typeof c ||
                    "function" == typeof p ||
                    "spring" === c)
                ) {
                  this.runJSAnimation(t);
                  return;
                }
                if (f.length > 1) {
                  this.runStepAnimation(t);
                  return;
                }
                var d = a ? td({}, a, u) : u,
                  y = U(Object.keys(d), o, c);
                h.start([l, i, th(th({}, d), {}, { transition: y }), o, s]);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = (t.begin, t.duration),
                  i = (t.attributeName, t.easing, t.isActive),
                  o =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            i = {},
                            o = Object.keys(t);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (i[n] = t[n]);
                      }
                      return i;
                    })(t, tl)),
                  a = r.Children.count(e),
                  u = this.state.style;
                if ("function" == typeof e) return e(u);
                if (!i || 0 === a || n <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    n = e.style,
                    i = e.className;
                  return (0, r.cloneElement)(
                    t,
                    th(
                      th({}, o),
                      {},
                      {
                        style: th(th({}, void 0 === n ? {} : n), u),
                        className: i,
                      }
                    )
                  );
                };
                return 1 === a
                  ? c(r.Children.only(e))
                  : r.createElement(
                      "div",
                      null,
                      r.Children.map(e, function (t) {
                        return c(t);
                      })
                    );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, ty(r.key), r);
            }
          })(o.prototype, n),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(r.PureComponent);
      (tx.displayName = "Animate"),
        (tx.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: "",
          to: "",
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {},
        }),
        (tx.propTypes = {
          from: o().oneOfType([o().object, o().string]),
          to: o().oneOfType([o().object, o().string]),
          attributeName: o().string,
          duration: o().number,
          begin: o().number,
          easing: o().oneOfType([o().string, o().func]),
          steps: o().arrayOf(
            o().shape({
              duration: o().number.isRequired,
              style: o().object.isRequired,
              easing: o().oneOfType([
                o().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                o().func,
              ]),
              properties: o().arrayOf("string"),
              onAnimationEnd: o().func,
            })
          ),
          children: o().oneOfType([o().node, o().func]),
          isActive: o().bool,
          canBegin: o().bool,
          onAnimationEnd: o().func,
          shouldReAnimate: o().bool,
          onAnimationStart: o().func,
          onAnimationReStart: o().func,
        });
      var tO = n(98283),
        tw = n(7560),
        tj = n(78223),
        tS = n(77008);
      function tP(t, e) {
        var n = Object.create(null);
        return (
          t &&
            r.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              n[t.key] = e && (0, r.isValidElement)(t) ? e(t) : t;
            }),
          n
        );
      }
      function tA(t, e, n) {
        return null != n[e] ? n[e] : t.props[e];
      }
      var tE =
          Object.values ||
          function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
        tk = (function (t) {
          function e(e, n) {
            var r,
              i = (r = t.call(this, e, n) || this).handleExited.bind(
                (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: i,
                firstRender: !0,
              }),
              r
            );
          }
          (0, tj.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (e.getDerivedStateFromProps = function (t, e) {
              var n,
                i,
                o = e.children,
                a = e.handleExited;
              return {
                children: e.firstRender
                  ? tP(t.children, function (e) {
                      return (0,
                      r.cloneElement)(e, { onExited: a.bind(null, e), in: !0, appear: tA(e, "appear", t), enter: tA(e, "enter", t), exit: tA(e, "exit", t) });
                    })
                  : (Object.keys(
                      (i = (function (t, e) {
                        function n(n) {
                          return n in e ? e[n] : t[n];
                        }
                        (t = t || {}), (e = e || {});
                        var r,
                          i = Object.create(null),
                          o = [];
                        for (var a in t)
                          a in e
                            ? o.length && ((i[a] = o), (o = []))
                            : o.push(a);
                        var u = {};
                        for (var c in e) {
                          if (i[c])
                            for (r = 0; r < i[c].length; r++) {
                              var l = i[c][r];
                              u[i[c][r]] = n(l);
                            }
                          u[c] = n(c);
                        }
                        for (r = 0; r < o.length; r++) u[o[r]] = n(o[r]);
                        return u;
                      })(o, (n = tP(t.children))))
                    ).forEach(function (e) {
                      var u = i[e];
                      if ((0, r.isValidElement)(u)) {
                        var c = e in o,
                          l = e in n,
                          s = o[e],
                          f = (0, r.isValidElement)(s) && !s.props.in;
                        l && (!c || f)
                          ? (i[e] = (0, r.cloneElement)(u, {
                              onExited: a.bind(null, u),
                              in: !0,
                              exit: tA(u, "exit", t),
                              enter: tA(u, "enter", t),
                            }))
                          : l || !c || f
                          ? l &&
                            c &&
                            (0, r.isValidElement)(s) &&
                            (i[e] = (0, r.cloneElement)(u, {
                              onExited: a.bind(null, u),
                              in: s.props.in,
                              exit: tA(u, "exit", t),
                              enter: tA(u, "enter", t),
                            }))
                          : (i[e] = (0, r.cloneElement)(u, { in: !1 }));
                      }
                    }),
                    i),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (t, e) {
              var n = tP(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var n = (0, tw.Z)({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                i = (0, tO.Z)(t, ["component", "childFactory"]),
                o = this.state.contextValue,
                a = tE(this.state.children).map(n);
              return (delete i.appear,
              delete i.enter,
              delete i.exit,
              null === e)
                ? r.createElement(tS.Z.Provider, { value: o }, a)
                : r.createElement(
                    tS.Z.Provider,
                    { value: o },
                    r.createElement(e, i, a)
                  );
            }),
            e
          );
        })(r.Component);
      (tk.propTypes = {}),
        (tk.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var tM = n(37198),
        tT = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function t_(t) {
        return (t_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tC() {
        return (tC = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tD(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tI(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tD(Object(n), !0).forEach(function (e) {
                tR(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tD(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function tN(t, e) {
        return (tN = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tB(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tL(t) {
        return (tL = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tR(t, e, n) {
        return (
          (e = t$(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function t$(t) {
        var e = (function (t, e) {
          if ("object" !== t_(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== t_(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === t_(e) ? e : String(e);
      }
      var tz = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.steps,
            n = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(n)
            ? n
            : 0;
        },
        tU = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && tN(t, e);
          })(o, t);
          var e,
            n,
            i =
              ((e = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  n = tL(o);
                return (
                  (t = e
                    ? Reflect.construct(n, arguments, tL(this).constructor)
                    : n.apply(this, arguments)),
                  (function (t, e) {
                    if (e && ("object" === t_(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return tB(t);
                  })(this, t)
                );
              });
          function o() {
            var t;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, o),
              tR(tB((t = i.call(this))), "handleEnter", function (e, n) {
                var r = t.props,
                  i = r.appearOptions,
                  o = r.enterOptions;
                t.handleStyleActive(n ? i : o);
              }),
              tR(tB(t), "handleExit", function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (n = [
              {
                key: "handleStyleActive",
                value: function (t) {
                  if (t) {
                    var e = t.onAnimationEnd
                      ? function () {
                          t.onAnimationEnd();
                        }
                      : null;
                    this.setState(
                      tI(tI({}, t), {}, { onAnimationEnd: e, isActive: !0 })
                    );
                  }
                },
              },
              {
                key: "parseTimeout",
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    n = t.enterOptions,
                    r = t.leaveOptions;
                  return tz(e) + tz(n) + tz(r);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    i =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      (function (t, e) {
                        if (null == t) return {};
                        var n,
                          r,
                          i = (function (t, e) {
                            if (null == t) return {};
                            var n,
                              r,
                              i = {},
                              o = Object.keys(t);
                            for (r = 0; r < o.length; r++)
                              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(t);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]),
                              !(e.indexOf(n) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  n
                                ) &&
                                (i[n] = t[n]);
                        }
                        return i;
                      })(e, tT));
                  return r.createElement(
                    tM.ZP,
                    tC({}, i, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return r.createElement(tx, t.state, r.Children.only(n));
                    }
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, t$(r.key), r);
              }
            })(o.prototype, n),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        })(r.Component);
      function tF(t) {
        var e = t.component,
          n = t.children,
          i = t.appear,
          o = t.enter,
          a = t.leave;
        return r.createElement(
          tk,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              tU,
              {
                appearOptions: i,
                enterOptions: o,
                leaveOptions: a,
                key: "child-".concat(e),
              },
              t
            );
          })
        );
      }
      (tU.propTypes = {
        appearOptions: o().object,
        enterOptions: o().object,
        leaveOptions: o().object,
        children: o().element,
      }),
        (tF.propTypes = {
          appear: o().object,
          enter: o().object,
          leave: o().object,
          children: o().oneOfType([o().array, o().element]),
          component: o().any,
        }),
        (tF.defaultProps = { component: "span" });
      var tZ = tx;
    },
    99356: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!t) throw Error("Invariant failed");
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
