"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [321],
  {
    7403: function (t, e, i) {
      i.d(e, {
        v: function () {
          return u;
        },
      });
      var n = i(3653),
        r = i(4097),
        s = i(9047),
        o = i(3646);
      let a = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (o.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var l = i(7533);
      class u {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: o,
            delay: u,
            onComplete: h,
            onUpdate: c,
            isGenerator: d,
          } = this.options;
          if (
            !d &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                l = a(r, e),
                u = a(o, e);
              return (
                (0, s.K)(
                  l === u,
                  `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, o)
          ) {
            if (r.c.current || !u) {
              null == c || c((0, l.$)(t, this.options, e)),
                null == h || h(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(t, e);
          !1 !== p &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...p }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    2645: function (t, e, i) {
      i.d(e, {
        s: function () {
          return ta;
        },
        y: function () {
          return tl;
        },
      });
      var n = i(3653),
        r = i(557),
        s = i(3476);
      function o(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, s.R)(i - t(n), e - n);
      }
      var a = i(9047),
        l = i(1506);
      function u(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let h = ["duration", "bounce"],
        c = ["stiffness", "damping", "mass"];
      function d(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function p({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let s;
        let p = t[0],
          m = t[t.length - 1],
          f = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!d(t, c) && d(t, h)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let s, o;
                (0, a.K)(
                  t <= (0, r.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, l.u)(0.05, 1, h)),
                  (t = (0, l.u)(0.01, 10, (0, r.X)(t))),
                  h < 1
                    ? ((s = (e) => {
                        let n = e * h,
                          r = n * t;
                        return 0.001 - ((n - i) / u(e, h)) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let n = e * h * t,
                          r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          o = u(Math.pow(e, 2), h);
                        return (
                          ((n * i + i - r) *
                            Math.exp(-n) *
                            (-s(e) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((s = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let c = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(s, o, 5 / t);
                if (((t = (0, r.w)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -(0, r.X)(n.velocity || 0) }),
          T = P || 0,
          b = g / (2 * Math.sqrt(v * y)),
          S = m - p,
          A = (0, r.X)(Math.sqrt(v / y)),
          V = 5 > Math.abs(S);
        if ((i || (i = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5), b < 1)) {
          let t = u(A, b);
          s = (e) =>
            m -
            Math.exp(-b * A * e) *
              (((T + b * A * S) / t) * Math.sin(t * e) + S * Math.cos(t * e));
        } else if (1 === b)
          s = (t) => m - Math.exp(-A * t) * (S + (T + A * S) * t);
        else {
          let t = A * Math.sqrt(b * b - 1);
          s = (e) => {
            let i = Math.exp(-b * A * e),
              n = Math.min(t * e, 300);
            return (
              m -
              (i * ((T + b * A * S) * Math.sinh(n) + t * S * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let n = s(t);
            if (w) f.done = t >= x;
            else {
              let r = T;
              0 !== t && (r = b < 1 ? o(s, t, n) : 0);
              let a = Math.abs(r) <= i,
                l = Math.abs(m - n) <= e;
              f.done = a && l;
            }
            return (f.value = f.done ? m : n), f;
          },
        };
      }
      function m({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: l,
        max: u,
        restDelta: h = 0.5,
        restSpeed: c,
      }) {
        let d, m;
        let f = t[0],
          v = { done: !1, value: f },
          g = (t) => (void 0 !== l && t < l) || (void 0 !== u && t > u),
          y = (t) =>
            void 0 === l
              ? u
              : void 0 === u
              ? l
              : Math.abs(l - t) < Math.abs(u - t)
              ? l
              : u,
          x = i * e,
          P = f + x,
          w = void 0 === a ? P : a(P);
        w !== P && (x = w - f);
        let T = (t) => -x * Math.exp(-t / n),
          b = (t) => w + T(t),
          S = (t) => {
            let e = T(t),
              i = b(t);
            (v.done = Math.abs(e) <= h), (v.value = v.done ? w : i);
          },
          A = (t) => {
            g(v.value) &&
              ((d = t),
              (m = p({
                keyframes: [v.value, y(v.value)],
                velocity: o(b, t, v.value),
                damping: r,
                stiffness: s,
                restDelta: h,
                restSpeed: c,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== d || ((e = !0), S(t), A(t)),
              void 0 !== d && t >= d)
                ? m.next(t - d)
                : (e || S(t), v);
            },
          }
        );
      }
      var f = i(9276);
      let v = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function g(t, e, i, n) {
        if (t === e && i === n) return f.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = v((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : v(r(t), e, n));
      }
      let y = g(0.42, 0, 1, 1),
        x = g(0, 0, 0.58, 1),
        P = g(0.42, 0, 0.58, 1),
        w = (t) => Array.isArray(t) && "number" != typeof t[0];
      var T = i(8536),
        b = i(3108),
        S = i(2718);
      let A = g(0.33, 1.53, 0.69, 0.99),
        V = (0, S.M)(A),
        C = (0, b.o)(V),
        E = {
          linear: f.Z,
          easeIn: y,
          easeInOut: P,
          easeOut: x,
          circIn: T.Z7,
          circInOut: T.X7,
          circOut: T.Bn,
          backIn: V,
          backInOut: C,
          backOut: A,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * V(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        D = (t) => {
          if (Array.isArray(t)) {
            (0, a.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return g(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, a.k)(void 0 !== E[t], `Invalid easing type '${t}'`), E[t])
            : t;
        };
      var M = i(9654),
        R = i(3217),
        k = i(5004);
      function j(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var L = i(5778),
        F = i(1583),
        B = i(598);
      function W(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let $ = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        O = [L.$, F.m, B.J],
        U = (t) => O.find((e) => e.test(t));
      function I(t) {
        let e = U(t);
        if (
          ((0, a.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === B.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = j(a, n, t + 1 / 3)),
                  (s = j(a, n, t)),
                  (o = j(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let N = (t, e) => {
        let i = I(t),
          n = I(e);
        if (!i || !n) return W(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = $(i.red, n.red, t)),
          (r.green = $(i.green, n.green, t)),
          (r.blue = $(i.blue, n.blue, t)),
          (r.alpha = (0, k.t)(i.alpha, n.alpha, t)),
          F.m.transform(r)
        );
      };
      var X = i(146),
        z = i(3646),
        K = i(1534);
      let H = new Set(["none", "hidden"]);
      function Y(t, e) {
        return (i) => (0, k.t)(t, e, i);
      }
      function Z(t) {
        return "number" == typeof t
          ? Y
          : "string" == typeof t
          ? (0, K.t)(t)
            ? W
            : X.$.test(t)
            ? N
            : _
          : Array.isArray(t)
          ? G
          : "object" == typeof t
          ? X.$.test(t)
            ? N
            : q
          : W;
      }
      function G(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => Z(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function q(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = Z(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let _ = (t, e) => {
        let i = z.P.createTransformer(e),
          n = (0, z.V)(t),
          r = (0, z.V)(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (H.has(t) && !r.values.length) || (H.has(e) && !n.values.length)
            ? H.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, M.z)(
                G(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : ((0, a.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            W(t, e));
      };
      function J(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, k.t)(t, e, i)
          : Z(t)(t, e);
      }
      function Q({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = w(n) ? n.map(D) : D(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              ((0, a.k)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || J,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || f.Z : e;
                    s = (0, M.z)(t, s);
                  }
                  n.push(s);
                }
                return n;
              })(e, n, r),
              u = o.length,
              h = (e) => {
                let i = 0;
                if (u > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, R.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => h((0, l.u)(t[0], t[s - 1], e)) : h;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = (0, R.Y)(0, e, n);
                        t.push((0, k.t)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || P).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      var tt = i(7403),
        te = i(9993),
        ti = i(6219);
      let tn = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => ti.Wi.update(e, !0),
          stop: () => (0, ti.Pn)(e),
          now: () =>
            ti.frameData.isProcessing ? ti.frameData.timestamp : te.X.now(),
        };
      };
      var tr = i(7533);
      let ts = { decay: m, inertia: m, tween: Q, keyframes: Q, spring: p },
        to = (t) => t / 100;
      class ta extends tt.v {
        constructor({ KeyframeResolver: t = n.e, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: r, keyframes: s } = this.options,
            o = (t, e) => this.onKeyframesResolved(t, e);
          i && r && r.owner
            ? (this.resolver = r.owner.resolveKeyframes(s, o, i, r))
            : (this.resolver = new t(s, o, i, r)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ts[n] || Q;
          l !== Q &&
            "number" != typeof t[0] &&
            ((e = (0, M.z)(to, J(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: c,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: m,
            repeatDelay: f,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let x = this.currentTime,
            P = r;
          if (p) {
            let t = Math.min(this.currentTime, h) / c,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === m
                  ? ((i = 1 - i), f && (i -= f / c))
                  : "mirror" === m && (P = s)),
              (x = (0, l.u)(0, 1, i) * c);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y ||
            null === u ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== n && (w.value = (0, tr.$)(a, this.options, n)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tn, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function tl(t) {
        return new ta(t);
      }
    },
    6323: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    7533: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, r) {
        let s = t.filter(n),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== r ? r : s[o];
      }
    },
    2703: function (t, e, i) {
      i.d(e, {
        v: function () {
          return R;
        },
      });
      var n = i(557),
        r = i(6019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
            ? t.startsWith("scale")
              ? o(e[1])
              : s
            : l;
      var h = i(9792),
        c = i(565),
        d = i(4097),
        p = i(7533),
        m = i(6219),
        f = i(9993),
        v = i(3078);
      function g(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var y = i(9276),
        x = i(7403),
        P = i(2645),
        w = i(6323);
      let T = (t) => Array.isArray(t) && "number" == typeof t[0],
        b = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        S = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: b([0, 0.65, 0.55, 1]),
          circOut: b([0.55, 0, 1, 0.45]),
          backIn: b([0.31, 0.01, 0.66, -0.59]),
          backOut: b([0.33, 1.53, 0.69, 0.99]),
        };
      function A(t) {
        return V(t) || S.easeOut;
      }
      function V(t) {
        if (t) return T(t) ? b(t) : Array.isArray(t) ? t.map(A) : S[t];
      }
      let C = g(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class E extends x.v {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new v.s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in S) ||
                T(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new P.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = V(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = f.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, p.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                ...u
              } = this.options,
              h = new P.s({
                ...u,
                keyframes: i,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              c = (0, n.w)(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            C() &&
            i &&
            w.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let D = g(() => void 0 !== window.ScrollTimeline);
      class M {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!D() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return m.Wi.update(n, !0), () => (0, m.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let R =
        (t, e, i, r = {}, s, o, a) =>
        (l) => {
          let f = (0, h.e)(r, t) || {},
            v = f.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, n.w)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...f,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), f.onUpdate && f.onUpdate(t);
            },
            onComplete: () => {
              l(), f.onComplete && f.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(f) || (y = { ...y, ...u(t, y) }),
            y.duration && (y.duration = (0, n.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, n.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let x = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (x = !0)),
            (d.c.current || c.c.skipAnimations) &&
              ((x = !0), (y.duration = 0), (y.delay = 0)),
            x && !o && void 0 !== e.get())
          ) {
            let t = (0, p.$)(y.keyframes, f);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new M([])
              );
          }
          return !o && E.supports(y) ? new E(y) : new P.s(y);
        };
    },
    3153: function (t, e, i) {
      i.d(e, {
        d: function () {
          return m;
        },
      });
      var n = i(352),
        r = i(6019),
        s = i(2703),
        o = i(6159),
        a = i(9792),
        l = i(2087),
        u = i(3944),
        h = i(6219);
      function c(t, e, { delay: i = 0, transitionOverride: n, type: c } = {}) {
        var d;
        let {
          transition: p = t.getDefaultTransition(),
          transitionEnd: m,
          ...f
        } = e;
        n && (p = n);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in f) {
          let n = t.getValue(
              e,
              null !== (d = t.latestValues[e]) && void 0 !== d ? d : null
            ),
            o = f[e];
          if (
            void 0 === o ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(g, e))
          )
            continue;
          let c = { delay: i, elapsed: 0, ...(0, a.e)(p || {}, e) },
            m = !1;
          if (window.HandoffAppearAnimations) {
            let i = (0, l.s)(t);
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, n, h.Wi);
              null !== t && ((c.elapsed = t), (m = !0));
            }
          }
          n.start(
            (0, s.v)(
              e,
              n,
              o,
              t.shouldReduceMotion && r.G.has(e) ? { type: !1 } : c,
              t,
              m,
              (0, u.K)(t, e)
            )
          );
          let y = n.animation;
          y && v.push(y);
        }
        return (
          m &&
            Promise.all(v).then(() => {
              h.Wi.update(() => {
                m && (0, o.C)(t, m);
              });
            }),
          v
        );
      }
      function d(t, e, i = {}) {
        var r;
        let s = (0, n.x)(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (o = i.transitionOverride);
        let a = s ? () => Promise.all(c(t, s, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              d(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, s, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function m(t, e, i = {}) {
        let r;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          r = Promise.all(e.map((e) => d(t, e, i)));
        else if ("string" == typeof e) r = d(t, e, i);
        else {
          let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
          r = Promise.all(c(t, s, i));
        }
        return r.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    5908: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(1580).D)("framerAppearId");
    },
    2087: function (t, e, i) {
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(5908);
      function r(t) {
        return t.getProps()[n.M];
      }
    },
    6925: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    9792: function (t, e, i) {
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    5050: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    9791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    8536: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(3108),
        r = i(2718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    3108: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2718: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(f));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(f);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    6219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(9276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    9993: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(6219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    3078: function (t, e, i) {
      i.d(e, {
        s: function () {
          return m;
        },
      });
      var n = i(9102),
        r = i(9047),
        s = i(4386),
        o = i(1534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(5014),
        u = i(3769),
        h = i(3653),
        c = i(3646),
        d = i(6450);
      let p = new Set(["auto", "none", "0"]);
      class m extends h.e {
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, o.t)(n))) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [n, h] = t,
            c = (0, u.C)(n),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, c.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    9321: function (t, e, i) {
      i.d(e, {
        E: function () {
          return nn;
        },
      });
      var n,
        r = i(7437),
        s = i(2265),
        o = i(9791);
      let a = (0, s.createContext)({});
      var l = i(7797),
        u = i(9033);
      let h = (0, s.createContext)({ strict: !1 });
      var c = i(5908);
      let { schedule: d, cancel: p } = (0, i(2981).Z)(queueMicrotask, !1);
      function m(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let f = (0, s.createContext)({}),
        v = !1;
      function g() {
        window.HandoffComplete = !0;
      }
      function y(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function x(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let P = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        w = ["initial", ...P];
      function T(t) {
        return x(t.animate) || w.some((e) => y(t[e]));
      }
      function b(t) {
        return !!(T(t) || t.variants);
      }
      function S(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let A = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        V = {};
      for (let t in A) V[t] = { isEnabled: (e) => A[t].some((t) => !!e[t]) };
      var C = i(7282),
        E = i(5050);
      let D = Symbol.for("motionComponentSymbol"),
        M = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function R(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (M.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let k = {};
      var j = i(6019);
      function L(t, { layout: e, layoutId: i }) {
        return (
          j.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!k[t] || "opacity" === t))
        );
      }
      var F = i(8322);
      let B = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        W = j._.length;
      var $ = i(1534);
      let O = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var U = i(7755);
      function I(t, e, i) {
        let { style: n, vars: r, transform: s, transformOrigin: o } = t,
          a = !1,
          l = !1,
          u = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, $.f)(t)) {
            r[t] = i;
            continue;
          }
          let h = U.j[t],
            c = O(i, h);
          if (j.G.has(t)) {
            if (((a = !0), (s[t] = c), !u)) continue;
            i !== (h.default || 0) && (u = !1);
          } else t.startsWith("origin") ? ((l = !0), (o[t] = c)) : (n[t] = c);
        }
        if (
          (!e.transform &&
            (a || i
              ? (n.transform = (function (t, e, i) {
                  let n = "";
                  for (let e = 0; e < W; e++) {
                    let i = j._[e];
                    if (void 0 !== t[i]) {
                      let e = B[i] || i;
                      n += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(t, e ? "" : n)) : e && (n = "none"),
                    n
                  );
                })(t.transform, u, i))
              : n.transform && (n.transform = "none")),
          l)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = o;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let N = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function X(t, e, i) {
        for (let n in e) (0, F.i)(e[n]) || L(n, i) || (t[n] = e[n]);
      }
      let z = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function K(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          z.has(t)
        );
      }
      let H = (t) => !K(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (H = (t) => (t.startsWith("on") ? !K(t) : n(t)));
      } catch (t) {}
      var Y = i(5480);
      function Z(t, e, i) {
        return "string" == typeof t ? t : Y.px.transform(e + i * t);
      }
      let G = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        q = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function _(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((I(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: m } = t;
        d.transform && (m && (p.transform = d.transform), delete d.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = Z(e, t.x, t.width),
                r = Z(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? G : q;
              t[s.offset] = Y.px.transform(-n);
              let o = Y.px.transform(e),
                a = Y.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let J = () => ({ ...N(), attrs: {} }),
        Q = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var tt = i(1580);
      function te(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let ti = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tn(t, e, i, n) {
        for (let i in (te(t, e, void 0, n), e.attrs))
          t.setAttribute(ti.has(i) ? i : (0, tt.D)(i), e.attrs[i]);
      }
      function tr(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          ((0, F.i)(r[o]) ||
            (e.style && (0, F.i)(e.style[o])) ||
            L(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return (
          i && r && "string" == typeof r.willChange && (i.applyWillChange = !1),
          s
        );
      }
      function ts(t, e, i) {
        let n = tr(t, e, i);
        for (let i in t)
          ((0, F.i)(t[i]) || (0, F.i)(e[i])) &&
            (n[
              -1 !== j._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      var to = i(8595),
        ta = i(458),
        tl = i(9155);
      function tu(t) {
        let e = (0, F.i)(t) ? t.get() : t;
        return (0, tl.p)(e) ? e.toValue() : e;
      }
      var th = i(5674),
        tc = i(8746);
      let td = (t) => (e, i) => {
        let n = (0, s.useContext)(a),
          r = (0, s.useContext)(l.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              r,
              s,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, i, n, r) {
                  var s;
                  let o = {},
                    a = [],
                    l =
                      n &&
                      (null === (s = t.style) || void 0 === s
                        ? void 0
                        : s.willChange) === void 0,
                    u = r(t, {});
                  for (let t in u) o[t] = tu(u[t]);
                  let { initial: h, animate: c } = t,
                    d = T(t),
                    p = b(t);
                  e &&
                    p &&
                    !d &&
                    !1 !== t.inherit &&
                    (void 0 === h && (h = e.initial),
                    void 0 === c && (c = e.animate));
                  let m = !!i && !1 === i.initial,
                    f = (m = m || !1 === h) ? c : h;
                  return (
                    f &&
                      "boolean" != typeof f &&
                      !x(f) &&
                      tp(t, f, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (o[e] = i);
                        }
                        for (let t in e) o[t] = e[t];
                      }),
                    l &&
                      (c &&
                        !1 !== h &&
                        !x(c) &&
                        tp(t, c, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, th.p)(e);
                              i && (0, tc.y4)(t, i);
                            })(a, e);
                        }),
                      a.length && (o.willChange = a.join(","))),
                    o
                  );
                })(r, s, o, !a && t, e),
                renderState: i(),
              };
              return n && (l.mount = (t) => n(r, t, l)), l;
            })(t, e, n, r, i);
        return i ? o() : (0, ta.h)(o);
      };
      function tp(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = (0, to.o)(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      var tm = i(6219);
      let tf = {
          useVisualState: td({
            scrapeMotionValuesFromProps: ts,
            createRenderState: J,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              tm.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tm.Wi.render(() => {
                  _(i, n, Q(e.tagName), t.transformTemplate), tn(e, i);
                });
            },
          }),
        },
        tv = {
          useVisualState: td({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: tr,
            createRenderState: N,
          }),
        };
      function tg(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let ty = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tx(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tP = (t) => (e) => ty(e) && t(e, tx(e));
      function tw(t, e, i, n) {
        return tg(t, e, tP(i), n);
      }
      var tT = i(9654);
      function tb(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tS = tb("dragHorizontal"),
        tA = tb("dragVertical");
      function tV(t) {
        let e = !1;
        if ("y" === t) e = tA();
        else if ("x" === t) e = tS();
        else {
          let t = tS(),
            i = tA();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tC() {
        let t = tV(!0);
        return !t || (t(), !1);
      }
      class tE {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tD(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tw(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || tC()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && tm.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tM extends tE {
        mount() {
          this.unmount = (0, tT.z)(tD(this.node, !0), tD(this.node, !1));
        }
        unmount() {}
      }
      class tR extends tE {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tT.z)(
            tg(this.node.current, "focus", () => this.onFocus()),
            tg(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tk = (t, e) => !!e && (t === e || tk(t, e.parentElement));
      var tj = i(9276);
      function tL(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tx(i));
      }
      class tF extends tE {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tj.Z),
            (this.removeEndListeners = tj.Z),
            (this.removeAccessibleListeners = tj.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tw(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || tk(this.node.current, t.target) ? i : n;
                    s && tm.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tw(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tT.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tg(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tg(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tL("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tm.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    tL("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tg(this.node.current, "blur", () => {
                  this.isPressing &&
                    tL("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tT.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tm.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tC()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tm.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tw(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tg(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tT.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tB = new WeakMap(),
        tW = new WeakMap(),
        t$ = (t) => {
          let e = tB.get(t.target);
          e && e(t);
        },
        tO = (t) => {
          t.forEach(t$);
        },
        tU = { some: 0, all: 1 };
      class tI extends tE {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : tU[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              tW.has(i) || tW.set(i, {});
              let n = tW.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tO, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              tB.set(t, i),
              n.observe(t),
              () => {
                tB.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var tN = i(6925);
      function tX(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var tz = i(352),
        tK = i(3153);
      let tH = [...P].reverse(),
        tY = P.length;
      function tZ(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function tG() {
        return {
          animate: tZ(!0),
          whileInView: tZ(),
          whileHover: tZ(),
          whileTap: tZ(),
          whileDrag: tZ(),
          whileFocus: tZ(),
          exit: tZ(),
        };
      }
      class tq extends tE {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, tK.d)(t, e, i)
                      )
                    ),
                  i = tG(),
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = (0, tz.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < tY; e++) {
                    var d;
                    let p = tH[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      v = y(f),
                      g = p === s ? m.isActive : null;
                    !1 === g && (c = e);
                    let P = f === a[p] && f !== o[p] && v;
                    if (
                      (P && n && t.manuallyAnimateOnMount && (P = !1),
                      (m.protectedKeys = { ...h }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        x(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let w =
                        ((d = m.prevProp),
                        ("string" == typeof f
                          ? f !== d
                          : !!Array.isArray(f) && !tX(f, d)) ||
                          (p === s && m.isActive && !P && v) ||
                          (e > c && v)),
                      T = !1,
                      b = Array.isArray(f) ? f : [f],
                      S = b.reduce(r(p), {});
                    !1 === g && (S = {});
                    let { prevResolvedValues: A = {} } = m,
                      V = { ...A, ...S },
                      C = (e) => {
                        (w = !0),
                          u.has(e) && ((T = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in V) {
                      let e = S[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        ((0, tN.C)(e) && (0, tN.C)(i) ? tX(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? C(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : u.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = S),
                      m.isActive && (h = { ...h, ...S }),
                      n && t.blockInitialAnimation && (w = !1),
                      w &&
                        (!P || T) &&
                        l.push(
                          ...b.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = tG()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          x(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let t_ = 0;
      class tJ extends tE {
        constructor() {
          super(...arguments), (this.id = t_++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var tQ = i(9047),
        t0 = i(557);
      let t1 = (t, e) => Math.abs(t - e);
      class t5 {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = t9(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(t1(t.x, e.x) ** 2 + t1(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = tm.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = t3(e, this.transformPagePoint)),
                tm.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = t9(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : t3(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !ty(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = t3(tx(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tm.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, t9(s, this.history)),
            (this.removeListeners = (0, tT.z)(
              tw(this.contextWindow, "pointermove", this.handlePointerMove),
              tw(this.contextWindow, "pointerup", this.handlePointerUp),
              tw(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tm.Pn)(this.updatePoint);
        }
      }
      function t3(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function t2(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function t9({ point: t }, e) {
        return {
          point: t,
          delta: t2(t, t6(e)),
          offset: t2(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = t6(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, t0.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, t0.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function t6(t) {
        return t[t.length - 1];
      }
      var t7 = i(3217),
        t4 = i(5004);
      function t8(t) {
        return t.max - t.min;
      }
      function et(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, t4.t)(e.min, e.max, t.origin)),
          (t.scale = t8(i) / t8(e)),
          (t.translate = (0, t4.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function ee(t, e, i, n) {
        et(t.x, e.x, i.x, n ? n.originX : void 0),
          et(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function ei(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + t8(e));
      }
      function en(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + t8(e));
      }
      function er(t, e, i) {
        en(t.x, e.x, i.x), en(t.y, e.y, i.y);
      }
      var es = i(1506);
      function eo(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ea(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function el(t, e, i) {
        return { min: eu(t, e), max: eu(t, i) };
      }
      function eu(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ec = () => ({ x: eh(), y: eh() }),
        ed = () => ({ min: 0, max: 0 }),
        ep = () => ({ x: ed(), y: ed() });
      function em(t) {
        return [t("x"), t("y")];
      }
      function ef({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function ev(t) {
        return void 0 === t || 1 === t;
      }
      function eg({ scale: t, scaleX: e, scaleY: i }) {
        return !ev(t) || !ev(e) || !ev(i);
      }
      function ey(t) {
        return (
          eg(t) ||
          ex(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ex(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function eP(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function ew(t, e = 0, i = 1, n, r) {
        (t.min = eP(t.min, e, i, n, r)), (t.max = eP(t.max, e, i, n, r));
      }
      function eT(t, { x: e, y: i }) {
        ew(t.x, e.translate, e.scale, e.originPoint),
          ew(t.y, i.translate, i.scale, i.originPoint);
      }
      function eb(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eS(t, e, i, n, r = 0.5) {
        let s = (0, t4.t)(t.min, t.max, r);
        ew(t, e, i, s, n);
      }
      function eA(t, e) {
        eS(t.x, e.x, e.scaleX, e.scale, e.originX),
          eS(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function eV(t, e) {
        return ef(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var eC = i(2703);
      let eE = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var eD = i(3944);
      let eM = new WeakMap();
      class eR {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ep()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new t5(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tx(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tV(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  em((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (Y.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = t8(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && tm.Wi.postRender(() => s(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = (0, eD.K)(
                    this.visualElement,
                    "transform"
                  ));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                em((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: eE(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && tm.Wi.postRender(() => s(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ek(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, t4.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, t4.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && m(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: eo(t.x, i, r), y: eo(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: el(t, "left", "right"), y: el(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              em((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !m(e)) return !1;
          let n = e.current;
          (0, tQ.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = eV(t, i),
                { scroll: r } = e;
              return r && (eb(n.x, r.offset.x), eb(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: ea((t = r.layout.layoutBox).x, s.x), y: ea(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = ef(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            em((o) => {
              if (!ek(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, eC.v)(
              t,
              i,
              0,
              e,
              this.visualElement,
              !1,
              (0, eD.K)(this.visualElement, t)
            )
          );
        }
        stopAnimation() {
          em((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          em((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          em((e) => {
            let { drag: i } = this.getProps();
            if (!ek(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, t4.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!m(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          em((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = t8(t),
                  r = t8(e);
                return (
                  r > n
                    ? (i = (0, t7.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, t7.Y)(t.min, t.max - r, e.min)),
                  (0, es.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            em((e) => {
              if (!ek(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, t4.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eM.set(this.visualElement, this);
          let t = tw(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              m(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            tm.Wi.read(e);
          let r = tg(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (em((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ek(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class ej extends tE {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tj.Z),
            (this.removeListeners = tj.Z),
            (this.controls = new eR(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tj.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let eL = (t) => (e, i) => {
        t && tm.Wi.postRender(() => t(e, i));
      };
      class eF extends tE {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tj.Z);
        }
        onPointerDown(t) {
          this.session = new t5(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eE(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: eL(t),
            onStart: eL(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && tm.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tw(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let eB = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eW(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let e$ = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!Y.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = eW(t, e.target.x),
            n = eW(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var eO = i(3646);
      class eU extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(k, eN),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (eB.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tm.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            d.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function eI(t) {
        let [e, i] = (function () {
            let t = (0, s.useContext)(l.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, s.useId)();
            (0, s.useEffect)(() => n(r), []);
            let o = (0, s.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, o] : [!0];
          })(),
          n = (0, s.useContext)(E.p);
        return (0, r.jsx)(eU, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(f),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let eN = {
        borderRadius: {
          ...e$,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: e$,
        borderTopRightRadius: e$,
        borderBottomLeftRadius: e$,
        borderBottomRightRadius: e$,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = eO.P.parse(t);
            if (n.length > 5) return t;
            let r = eO.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, t4.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var eX = i(2428),
        ez = i(8536);
      let eK = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eH = eK.length,
        eY = (t) => ("string" == typeof t ? parseFloat(t) : t),
        eZ = (t) => "number" == typeof t || Y.px.test(t);
      function eG(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eq = eJ(0, 0.5, ez.Bn),
        e_ = eJ(0.5, 0.95, tj.Z);
      function eJ(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, t7.Y)(t, e, n)));
      }
      function eQ(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function e0(t, e) {
        eQ(t.x, e.x), eQ(t.y, e.y);
      }
      function e1(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function e5(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function e3(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (Y.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, t4.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, t4.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = e5(t.min, e, i, a, r)),
            (t.max = e5(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let e2 = ["x", "scaleX", "originX"],
        e9 = ["y", "scaleY", "originY"];
      function e6(t, e, i, n) {
        e3(t.x, e, e2, i ? i.x : void 0, n ? n.x : void 0),
          e3(t.y, e, e9, i ? i.y : void 0, n ? n.y : void 0);
      }
      var e7 = i(9792);
      function e4(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function e8(t) {
        return e4(t.x) && e4(t.y);
      }
      function it(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function ie(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function ii(t, e) {
        return ie(t.x, e.x) && ie(t.y, e.y);
      }
      function ir(t) {
        return t8(t.x) / t8(t.y);
      }
      function is(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class io {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tc.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tc.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ia = (t, e) => t.depth - e.depth;
      class il {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tc.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tc.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(ia),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var iu = i(9993),
        ih = i(804),
        ic = i(2087);
      let id = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ip = "undefined" != typeof window && void 0 !== window.MotionDebug,
        im = ["", "X", "Y", "Z"],
        iv = { visibility: "hidden" },
        ig = 0;
      function iy(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ix({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = ig++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  ip &&
                    (id.totalNodes =
                      id.resolvedTargetDeltas =
                      id.recalculatedProjection =
                        0),
                  this.nodes.forEach(iT),
                  this.nodes.forEach(iD),
                  this.nodes.forEach(iM),
                  this.nodes.forEach(ib),
                  ip && window.MotionDebug.record(id);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new il());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eX.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = iu.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, tm.Pn)(n), t(r - 250));
                      };
                    return tm.Wi.read(n, !0), () => (0, tm.Pn)(n);
                  })(n, 0)),
                  eB.hasAnimatedSinceResize &&
                    ((eB.hasAnimatedSinceResize = !1), this.nodes.forEach(iE));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        iB,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !ii(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, e7.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || iE(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tm.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(iR),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return !1;
                  let { visualElement: i } = e.options;
                  return (
                    !!i &&
                    (!!(0, ic.s)(i) ||
                      (!!e.parent &&
                        !e.parent.hasCheckedOptimisedAppear &&
                        t(e.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iA);
              return;
            }
            this.isUpdating || this.nodes.forEach(iV),
              (this.isUpdating = !1),
              this.nodes.forEach(iC),
              this.nodes.forEach(iP),
              this.nodes.forEach(iw),
              this.clearAllSnapshots();
            let t = iu.X.now();
            (tm.frameData.delta = (0, es.u)(
              0,
              1e3 / 60,
              t - tm.frameData.timestamp
            )),
              (tm.frameData.timestamp = t),
              (tm.frameData.isProcessing = !0),
              tm.S6.update.process(tm.frameData),
              tm.S6.preRender.process(tm.frameData),
              tm.S6.render.process(tm.frameData),
              (tm.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), d.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(iS), this.sharedNodes.forEach(ik);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tm.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tm.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ep()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !e8(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || ey(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              iO((e = n).x),
              iO(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return ep();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(iI)
              )
            ) {
              let { scroll: t } = this.root;
              t && (eb(i.x, t.offset.x), eb(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = ep();
            if (
              (e0(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && e0(i, t),
                eb(i.x, r.offset.x),
                eb(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = ep();
            e0(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                eA(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ey(n.latestValues) && eA(i, n.latestValues);
            }
            return ey(this.latestValues) && eA(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ep();
            e0(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ey(i.latestValues)) continue;
              eg(i.latestValues) && i.updateSnapshot();
              let n = ep();
              e0(n, i.measurePageBox()),
                e6(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return ey(this.latestValues) && e6(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tm.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tm.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ep()),
                    (this.relativeTargetOrigin = ep()),
                    er(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    e0(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ep()), (this.targetWithTransforms = ep())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      ei(i.x, n.x, r.x),
                      ei(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : e0(this.target, this.layout.layoutBox),
                      eT(this.target, this.targetDelta))
                    : e0(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ep()),
                      (this.relativeTargetOrigin = ep()),
                      er(this.relativeTargetOrigin, this.target, t.target),
                      e0(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ip && id.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              eg(this.parent.latestValues) ||
              ex(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tm.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            e0(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      eA(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), eT(t, s)),
                    n && ey(r.latestValues) && eA(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = ep()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (e1(this.prevProjectionDelta.x, this.projectionDelta.x),
                e1(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              ee(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                is(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                is(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ip && id.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = ec()),
              (this.projectionDelta = ec()),
              (this.projectionDeltaWithTransform = ec());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = ec();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ep(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(iF)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (ij(o.x, t.x, n),
                  ij(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m;
                  er(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    iL(p.x, m.x, a.x, n),
                    iL(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      it(u.x, d.x) && it(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ep()),
                    e0(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, t4.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          eq(n)
                        )),
                        (t.opacityExit = (0, t4.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          e_(n)
                        )))
                      : s &&
                        (t.opacity = (0, t4.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < eH; r++) {
                      let s = `border${eK[r]}Radius`,
                        o = eG(e, s),
                        a = eG(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || eZ(o) === eZ(a)
                          ? ((t[s] = Math.max((0, t4.t)(eY(o), eY(a), n), 0)),
                            (Y.aQ.test(a) || Y.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, t4.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tm.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tm.Wi.update(() => {
                (eB.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, F.i)(0) ? 0 : (0, ih.BX)(0);
                    return n.start((0, eC.v)("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                iU(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || ep();
                let e = t8(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = t8(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              e0(e, i),
                eA(e, r),
                ee(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new io()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && iy("z", t, n, this.animationValues);
            for (let e = 0; e < im.length; e++)
              iy(`rotate${im[e]}`, t, n, this.animationValues),
                iy(`skew${im[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return iv;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  tu(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tu(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ey(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            k)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = k[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? tu(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(iA),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iP(t) {
        t.updateLayout();
      }
      function iw(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? em((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = t8(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : iU(r, i.layoutBox, e) &&
              em((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = t8(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = ec();
          ee(o, e, i.layoutBox);
          let a = ec();
          s
            ? ee(a, t.applyTransform(n, !0), i.measuredBox)
            : ee(a, e, i.layoutBox);
          let l = !e8(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = ep();
                er(o, i.layoutBox, r.layoutBox);
                let a = ep();
                er(a, e, s.layoutBox),
                  ii(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function iT(t) {
        ip && id.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ib(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function iS(t) {
        t.clearSnapshot();
      }
      function iA(t) {
        t.clearMeasurements();
      }
      function iV(t) {
        t.isLayoutDirty = !1;
      }
      function iC(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function iE(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function iD(t) {
        t.resolveTargetDelta();
      }
      function iM(t) {
        t.calcProjection();
      }
      function iR(t) {
        t.resetSkewAndRotation();
      }
      function ik(t) {
        t.removeLeadSnapshot();
      }
      function ij(t, e, i) {
        (t.translate = (0, t4.t)(e.translate, 0, i)),
          (t.scale = (0, t4.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iL(t, e, i, n) {
        (t.min = (0, t4.t)(e.min, i.min, n)),
          (t.max = (0, t4.t)(e.max, i.max, n));
      }
      function iF(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iB = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iW = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        i$ = iW("applewebkit/") && !iW("chrome/") ? Math.round : tj.Z;
      function iO(t) {
        (t.min = i$(t.min)), (t.max = i$(t.max));
      }
      function iU(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(ir(e) - ir(i))))
        );
      }
      function iI(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let iN = ix({
          attachResizeListener: (t, e) => tg(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iX = { current: void 0 },
        iz = ix({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iX.current) {
              let t = new iN({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iX.current = t);
            }
            return iX.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var iK = i(781);
      let iH = { current: null },
        iY = { current: !1 },
        iZ = new WeakMap();
      var iG = i(3653),
        iq = i(4386),
        i_ = i(9102),
        iJ = i(146),
        iQ = i(3769),
        i0 = i(2649);
      let i1 = [...iQ.$, iJ.$, eO.P],
        i5 = (t) => i1.find((0, i0.l)(t));
      var i3 = i(6450);
      let i2 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        i9 = w.length;
      class i6 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.resolveKeyframes = (t, e, i, n) =>
              new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = iG.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              (this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0),
                tm.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = T(e)),
            (this.isVariantNode = b(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, F.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            iZ.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iY.current ||
              (function () {
                if (((iY.current = !0), C.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iH.current = t.matches);
                    t.addListener(e), e();
                  } else iH.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iH.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iZ.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tm.Pn)(this.notifyUpdate),
          (0, tm.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = j.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tm.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in V) {
            let e = V[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ep();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < i2.length; e++) {
            let i = i2[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, F.i)(r)) t.addValue(n, r);
              else if ((0, F.i)(s)) t.addValue(n, (0, ih.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, ih.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < i9; t++) {
            let i = w[t],
              n = this.props[i];
            (y(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ih.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, iq.P)(n) || (0, i_.W)(n))
                ? (n = parseFloat(n))
                : !i5(n) && eO.P.test(e) && (n = (0, i3.T)(t, e)),
              this.setBaseTarget(t, (0, F.i)(n) ? n.get() : n)),
            (0, F.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, to.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, F.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eX.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var i7 = i(3078);
      class i4 extends i6 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = i7.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class i8 extends i4 {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = te);
        }
        readValueFromInstance(t, e) {
          if (j.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, $.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return eV(t, e);
        }
        build(t, e, i) {
          I(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tr(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, F.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class nt extends i4 {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ep);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (j.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          return (e = ti.has(e) ? e : (0, tt.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return ts(t, e, i);
        }
        build(t, e, i) {
          _(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          tn(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = Q(t.tagName)), super.mount(t);
        }
      }
      let ne = (t, e) =>
          R(t) ? new nt(e) : new i8(e, { allowProjection: t !== s.Fragment }),
        ni = {
          animation: { Feature: tq },
          exit: { Feature: tJ },
          inView: { Feature: tI },
          tap: { Feature: tF },
          focus: { Feature: tR },
          hover: { Feature: tM },
          pan: { Feature: eF },
          drag: { Feature: ej, ProjectionNode: iz, MeasureLayout: eI },
          layout: { ProjectionNode: iz, MeasureLayout: eI },
        },
        nn = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: p,
            }) {
              t &&
                (function (t) {
                  for (let e in t) V[e] = { ...V[e], ...t[e] };
                })(t);
              let x = (0, s.forwardRef)(function (t, x) {
                var P;
                let w;
                let b = {
                    ...(0, s.useContext)(o._),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(E.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(t),
                  },
                  { isStatic: A } = b,
                  D = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (T(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || y(e) ? e : void 0,
                          animate: y(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [S(e), S(i)]
                    );
                  })(t),
                  M = n(t, A);
                if (!A && C.j) {
                  (0, s.useContext)(h).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = V;
                    if (!e && !i) return {};
                    let n = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? n.MeasureLayout
                          : void 0,
                      ProjectionNode: n.ProjectionNode,
                    };
                  })(b);
                  (w = t.MeasureLayout),
                    (D.visualElement = (function (t, e, i, n, r) {
                      let { visualElement: p } = (0, s.useContext)(a),
                        y = (0, s.useContext)(h),
                        x = (0, s.useContext)(l.O),
                        P = (0, s.useContext)(o._).reducedMotion,
                        w = (0, s.useRef)();
                      (n = n || y.renderer),
                        !w.current &&
                          n &&
                          (w.current = n(t, {
                            visualState: e,
                            parent: p,
                            props: i,
                            presenceContext: x,
                            blockInitialAnimation: !!x && !1 === x.initial,
                            reducedMotionConfig: P,
                          }));
                      let T = w.current,
                        b = (0, s.useContext)(f);
                      T &&
                        !T.projection &&
                        r &&
                        ("html" === T.type || "svg" === T.type) &&
                        (function (t, e, i, n) {
                          let {
                            layoutId: r,
                            layout: s,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: r,
                              layout: s,
                              alwaysMeasureLayout: !!o || (a && m(a)),
                              visualElement: t,
                              animationType: "string" == typeof s ? s : "both",
                              initialPromotionConfig: n,
                              layoutScroll: l,
                              layoutRoot: u,
                            });
                        })(w.current, i, r, b),
                        (0, s.useInsertionEffect)(() => {
                          T && T.update(i, x);
                        });
                      let S = (0, s.useRef)(
                        !!(i[c.M] && !window.HandoffComplete)
                      );
                      return (
                        (0, u.L)(() => {
                          T &&
                            (T.updateFeatures(),
                            d.render(T.render),
                            S.current &&
                              T.animationState &&
                              T.animationState.animateChanges());
                        }),
                        (0, s.useEffect)(() => {
                          T &&
                            (!S.current &&
                              T.animationState &&
                              T.animationState.animateChanges(),
                            S.current &&
                              ((S.current = !1),
                              v || ((v = !0), queueMicrotask(g))));
                        }),
                        T
                      );
                    })(p, M, b, e, t.ProjectionNode));
                }
                return (0, r.jsxs)(a.Provider, {
                  value: D,
                  children: [
                    w && D.visualElement
                      ? (0, r.jsx)(w, { visualElement: D.visualElement, ...b })
                      : null,
                    i(
                      p,
                      t,
                      ((P = D.visualElement),
                      (0, s.useCallback)(
                        (t) => {
                          t && M.mount && M.mount(t),
                            P && (t ? P.mount(t) : P.unmount()),
                            x &&
                              ("function" == typeof x
                                ? x(t)
                                : m(x) && (x.current = t));
                        },
                        [P]
                      )),
                      M,
                      A,
                      D.visualElement
                    ),
                  ],
                });
              });
              return (x[D] = p), x;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            return {
              ...(R(t) ? tf : tv),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: r }, o) => {
                  let a = (
                      R(e)
                        ? function (t, e, i, n) {
                            let r = (0, s.useMemo)(() => {
                              let i = J();
                              return (
                                _(i, e, Q(n), t.transformTemplate),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              X(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e) {
                            let i = {},
                              n = (function (t, e) {
                                let i = t.style || {},
                                  n = {};
                                return (
                                  X(n, i, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e) {
                                      return (0, s.useMemo)(() => {
                                        let i = N();
                                        return (
                                          I(i, e, t),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e)
                                  ),
                                  n
                                );
                              })(t, e);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = n),
                              i
                            );
                          }
                    )(i, r, o, e),
                    l = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (H(r) ||
                            (!0 === i && K(r)) ||
                            (!e && !K(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    u = e !== s.Fragment ? { ...l, ...a, ref: n } : {},
                    { children: h } = i,
                    c = (0, s.useMemo)(() => ((0, F.i)(h) ? h.get() : h), [h]);
                  return (0, s.createElement)(e, { ...u, children: c });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, ni, ne)
        );
    },
    1580: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    1534: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5014: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(6019),
        r = i(783),
        s = i(5480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    6450: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(3646),
        r = i(4913),
        s = i(781);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    781: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(146),
        r = i(4913);
      let s = {
          ...i(7755).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    3769: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(783),
        r = i(5480),
        s = i(2649);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    7755: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(783),
        r = i(5480);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    2649: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    6019: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    3653: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(5014),
        r = i(6219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    352: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(8595);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    8595: function (t, e, i) {
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ("function" == typeof e) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    6159: function (t, e, i) {
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var n = i(9155),
        r = i(804),
        s = i(352);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, n.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
        }
      }
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    1506: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    9047: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(9276);
      let r = n.Z,
        s = n.Z;
    },
    7282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    4386: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    9102: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    5004: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    9276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    9654: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    3217: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    9155: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(6925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    4097: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(7282).j ? n.useLayoutEffect : n.useEffect;
    },
    3476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
      });
      var n = i(2428),
        r = i(3476),
        s = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.3.19"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(1583);
      let r = {
        test: (0, i(3338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(783),
        r = i(5480),
        s = i(7292),
        o = i(3338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    146: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(7292),
        r = i(5778),
        s = i(598),
        o = i(1583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    1583: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(1506),
        r = i(783),
        s = i(7292),
        o = i(3338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    3338: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(7292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4913: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(3646),
        r = i(7292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    3646: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(146),
        r = i(7292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    783: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(1506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    5480: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(7292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    7292: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    3944: function (t, e, i) {
      i.d(e, {
        K: function () {
          return l;
        },
      });
      var n = i(804),
        r = i(5674),
        s = i(8746);
      class o extends n.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, s.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var a = i(8322);
      function l(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new o("auto")), t.addValue("willChange", r)),
          (n = r),
          (0, a.i)(n) && n.add)
        )
          return r.add(e);
      }
    },
    5674: function (t, e, i) {
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var n = i(6323),
        r = i(1580),
        s = i(6019);
      function o(t) {
        return s.G.has(t) ? "transform" : n.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    8322: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
]);
