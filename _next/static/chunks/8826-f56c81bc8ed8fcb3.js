"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8826],
  {
    28826: function (n, e) {
      var t,
        r,
        a = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: "normal",
          autoplay: !0,
          timelineOffset: 0,
        },
        o = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: "easeOutElastic(1, .5)",
          round: 0,
        },
        u = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ],
        i = {},
        c = {};
      function s(n, e, t) {
        return Math.min(Math.max(n, e), t);
      }
      function f(n, e) {
        return n.indexOf(e) > -1;
      }
      function l(n, e) {
        return n.apply(null, e);
      }
      var d = {
        arr: function (n) {
          return Array.isArray(n);
        },
        obj: function (n) {
          return f(Object.prototype.toString.call(n), "Object");
        },
        pth: function (n) {
          return d.obj(n) && n.hasOwnProperty("totalLength");
        },
        svg: function (n) {
          return n instanceof SVGElement;
        },
        inp: function (n) {
          return n instanceof HTMLInputElement;
        },
        dom: function (n) {
          return n.nodeType || d.svg(n);
        },
        str: function (n) {
          return "string" == typeof n;
        },
        fnc: function (n) {
          return "function" == typeof n;
        },
        und: function (n) {
          return void 0 === n;
        },
        nil: function (n) {
          return d.und(n) || null === n;
        },
        hex: function (n) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
        },
        rgb: function (n) {
          return /^rgb/.test(n);
        },
        hsl: function (n) {
          return /^hsl/.test(n);
        },
        col: function (n) {
          return d.hex(n) || d.rgb(n) || d.hsl(n);
        },
        key: function (n) {
          return (
            !a.hasOwnProperty(n) &&
            !o.hasOwnProperty(n) &&
            "targets" !== n &&
            "keyframes" !== n
          );
        },
      };
      function p(n) {
        var e = /\(([^)]+)\)/.exec(n);
        return e
          ? e[1].split(",").map(function (n) {
              return parseFloat(n);
            })
          : [];
      }
      function h(n, e) {
        var t = p(n),
          r = s(d.und(t[0]) ? 1 : t[0], 0.1, 100),
          a = s(d.und(t[1]) ? 100 : t[1], 0.1, 100),
          o = s(d.und(t[2]) ? 10 : t[2], 0.1, 100),
          u = s(d.und(t[3]) ? 0 : t[3], 0.1, 100),
          i = Math.sqrt(a / r),
          f = o / (2 * Math.sqrt(a * r)),
          l = f < 1 ? i * Math.sqrt(1 - f * f) : 0,
          h = f < 1 ? (f * i + -u) / l : -u + i;
        function v(n) {
          var t = e ? (e * n) / 1e3 : n;
          return ((t =
            f < 1
              ? Math.exp(-t * f * i) *
                (1 * Math.cos(l * t) + h * Math.sin(l * t))
              : (1 + h * t) * Math.exp(-t * i)),
          0 === n || 1 === n)
            ? n
            : 1 - t;
        }
        return e
          ? v
          : function () {
              var e = c[n];
              if (e) return e;
              for (var t = 1 / 6, r = 0, a = 0; ; )
                if (1 === v((r += t))) {
                  if (++a >= 16) break;
                } else a = 0;
              var o = r * t * 1e3;
              return (c[n] = o), o;
            };
      }
      function v(n) {
        return (
          void 0 === n && (n = 10),
          function (e) {
            return Math.ceil(s(e, 1e-6, 1) * n) * (1 / n);
          }
        );
      }
      var g = (function () {
          function n(n, e, t) {
            return (
              (((1 - 3 * t + 3 * e) * n + (3 * t - 6 * e)) * n + 3 * e) * n
            );
          }
          function e(n, e, t) {
            return (
              3 * (1 - 3 * t + 3 * e) * n * n + 2 * (3 * t - 6 * e) * n + 3 * e
            );
          }
          return function (t, r, a, o) {
            if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
              var u = new Float32Array(11);
              if (t !== r || a !== o)
                for (var i = 0; i < 11; ++i) u[i] = n(0.1 * i, t, a);
              return function (i) {
                return (t === r && a === o) || 0 === i || 1 === i
                  ? i
                  : n(
                      (function (r) {
                        for (var o = 0, i = 1; 10 !== i && u[i] <= r; ++i)
                          o += 0.1;
                        var c = o + ((r - u[--i]) / (u[i + 1] - u[i])) * 0.1,
                          s = e(c, t, a);
                        return s >= 0.001
                          ? (function (t, r, a, o) {
                              for (var u = 0; u < 4; ++u) {
                                var i = e(r, a, o);
                                if (0 === i) break;
                                var c = n(r, a, o) - t;
                                r -= c / i;
                              }
                              return r;
                            })(r, c, t, a)
                          : 0 === s
                          ? c
                          : (function (e, t, r, a, o) {
                              var u,
                                i,
                                c = 0;
                              do
                                (u = n((i = t + (r - t) / 2), a, o) - e) > 0
                                  ? (r = i)
                                  : (t = i);
                              while (Math.abs(u) > 1e-7 && ++c < 10);
                              return i;
                            })(r, o, o + 0.1, t, a);
                      })(i),
                      r,
                      o
                    );
              };
            }
          };
        })(),
        m =
          ((t = {
            linear: function () {
              return function (n) {
                return n;
              };
            },
          }),
          (r = {
            Sine: function () {
              return function (n) {
                return 1 - Math.cos((n * Math.PI) / 2);
              };
            },
            Expo: function () {
              return function (n) {
                return n ? Math.pow(2, 10 * n - 10) : 0;
              };
            },
            Circ: function () {
              return function (n) {
                return 1 - Math.sqrt(1 - n * n);
              };
            },
            Back: function () {
              return function (n) {
                return n * n * (3 * n - 2);
              };
            },
            Bounce: function () {
              return function (n) {
                for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - t) -
                  7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
                );
              };
            },
            Elastic: function (n, e) {
              void 0 === n && (n = 1), void 0 === e && (e = 0.5);
              var t = s(n, 1, 10),
                r = s(e, 0.1, 2);
              return function (n) {
                return 0 === n || 1 === n
                  ? n
                  : -t *
                      Math.pow(2, 10 * (n - 1)) *
                      Math.sin(
                        (2 *
                          Math.PI *
                          (n - 1 - (r / (2 * Math.PI)) * Math.asin(1 / t))) /
                          r
                      );
              };
            },
          }),
          ["Quad", "Cubic", "Quart", "Quint"].forEach(function (n, e) {
            r[n] = function () {
              return function (n) {
                return Math.pow(n, e + 2);
              };
            };
          }),
          Object.keys(r).forEach(function (n) {
            var e = r[n];
            (t["easeIn" + n] = e),
              (t["easeOut" + n] = function (n, t) {
                return function (r) {
                  return 1 - e(n, t)(1 - r);
                };
              }),
              (t["easeInOut" + n] = function (n, t) {
                return function (r) {
                  return r < 0.5
                    ? e(n, t)(2 * r) / 2
                    : 1 - e(n, t)(-2 * r + 2) / 2;
                };
              }),
              (t["easeOutIn" + n] = function (n, t) {
                return function (r) {
                  return r < 0.5
                    ? (1 - e(n, t)(1 - 2 * r)) / 2
                    : (e(n, t)(2 * r - 1) + 1) / 2;
                };
              });
          }),
          t);
      function y(n, e) {
        if (d.fnc(n)) return n;
        var t = n.split("(")[0],
          r = m[t],
          a = p(n);
        switch (t) {
          case "spring":
            return h(n, e);
          case "cubicBezier":
            return l(g, a);
          case "steps":
            return l(v, a);
          default:
            return l(r, a);
        }
      }
      function b(n) {
        try {
          return document.querySelectorAll(n);
        } catch (n) {
          return;
        }
      }
      function M(n, e) {
        for (
          var t = n.length,
            r = arguments.length >= 2 ? arguments[1] : void 0,
            a = [],
            o = 0;
          o < t;
          o++
        )
          if (o in n) {
            var u = n[o];
            e.call(r, u, o, n) && a.push(u);
          }
        return a;
      }
      function w(n) {
        return n.reduce(function (n, e) {
          return n.concat(d.arr(e) ? w(e) : e);
        }, []);
      }
      function x(n) {
        return d.arr(n)
          ? n
          : (d.str(n) && (n = b(n) || n),
            n instanceof NodeList || n instanceof HTMLCollection)
          ? [].slice.call(n)
          : [n];
      }
      function k(n, e) {
        return n.some(function (n) {
          return n === e;
        });
      }
      function O(n) {
        var e = {};
        for (var t in n) e[t] = n[t];
        return e;
      }
      function P(n, e) {
        var t = O(n);
        for (var r in n) t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
        return t;
      }
      function C(n, e) {
        var t = O(n);
        for (var r in e) t[r] = d.und(n[r]) ? e[r] : n[r];
        return t;
      }
      function I(n) {
        var e =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            n
          );
        if (e) return e[1];
      }
      function D(n, e) {
        return d.fnc(n) ? n(e.target, e.id, e.total) : n;
      }
      function B(n, e) {
        return n.getAttribute(e);
      }
      function T(n, e, t) {
        if (k([t, "deg", "rad", "turn"], I(e))) return e;
        var r = i[e + t];
        if (!d.und(r)) return r;
        var a = document.createElement(n.tagName),
          o =
            n.parentNode && n.parentNode !== document
              ? n.parentNode
              : document.body;
        o.appendChild(a),
          (a.style.position = "absolute"),
          (a.style.width = 100 + t);
        var u = 100 / a.offsetWidth;
        o.removeChild(a);
        var c = u * parseFloat(e);
        return (i[e + t] = c), c;
      }
      function E(n, e, t) {
        if (e in n.style) {
          var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
          return t ? T(n, a, t) : a;
        }
      }
      function N(n, e) {
        return d.dom(n) && !d.inp(n) && (!d.nil(B(n, e)) || (d.svg(n) && n[e]))
          ? "attribute"
          : d.dom(n) && k(u, e)
          ? "transform"
          : d.dom(n) && "transform" !== e && E(n, e)
          ? "css"
          : null != n[e]
          ? "object"
          : void 0;
      }
      function F(n) {
        if (d.dom(n)) {
          for (
            var e,
              t = n.style.transform || "",
              r = /(\w+)\(([^)]*)\)/g,
              a = new Map();
            (e = r.exec(t));

          )
            a.set(e[1], e[2]);
          return a;
        }
      }
      function A(n, e, t, r) {
        switch (N(n, e)) {
          case "transform":
            var a, o;
            return (
              (a = f(e, "scale")
                ? 1
                : 0 +
                  (f(e, "translate") || "perspective" === e
                    ? "px"
                    : f(e, "rotate") || f(e, "skew")
                    ? "deg"
                    : void 0)),
              (o = F(n).get(e) || a),
              r && (r.transforms.list.set(e, o), (r.transforms.last = e)),
              t ? T(n, o, t) : o
            );
          case "css":
            return E(n, e, t);
          case "attribute":
            return B(n, e);
          default:
            return n[e] || 0;
        }
      }
      function L(n, e) {
        var t = /^(\*=|\+=|-=)/.exec(n);
        if (!t) return n;
        var r = I(n) || 0,
          a = parseFloat(e),
          o = parseFloat(n.replace(t[0], ""));
        switch (t[0][0]) {
          case "+":
            return a + o + r;
          case "-":
            return a - o + r;
          case "*":
            return a * o + r;
        }
      }
      function j(n, e) {
        if (d.col(n)) {
          var t, r, a, o;
          return (
            (t = n),
            d.rgb(t)
              ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))
                ? "rgba(" + r[1] + ",1)"
                : t
              : d.hex(t)
              ? ((a = t.replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  function (n, e, t, r) {
                    return e + e + t + t + r + r;
                  }
                )),
                "rgba(" +
                  parseInt(
                    (o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                      a
                    ))[1],
                    16
                  ) +
                  "," +
                  parseInt(o[2], 16) +
                  "," +
                  parseInt(o[3], 16) +
                  ",1)")
              : d.hsl(t)
              ? (function (n) {
                  var e,
                    t,
                    r,
                    a =
                      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
                      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                        n
                      ),
                    o = parseInt(a[1], 10) / 360,
                    u = parseInt(a[2], 10) / 100,
                    i = parseInt(a[3], 10) / 100,
                    c = a[4] || 1;
                  function s(n, e, t) {
                    return (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6)
                      ? n + (e - n) * 6 * t
                      : t < 0.5
                      ? e
                      : t < 2 / 3
                      ? n + (e - n) * (2 / 3 - t) * 6
                      : n;
                  }
                  if (0 == u) e = t = r = i;
                  else {
                    var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
                      l = 2 * i - f;
                    (e = s(l, f, o + 1 / 3)),
                      (t = s(l, f, o)),
                      (r = s(l, f, o - 1 / 3));
                  }
                  return (
                    "rgba(" +
                    255 * e +
                    "," +
                    255 * t +
                    "," +
                    255 * r +
                    "," +
                    c +
                    ")"
                  );
                })(t)
              : void 0
          );
        }
        if (/\s/g.test(n)) return n;
        var u = I(n),
          i = u ? n.substr(0, n.length - u.length) : n;
        return e ? i + e : i;
      }
      function q(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
      }
      function H(n) {
        for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
          var o = t.getItem(a);
          a > 0 && (r += q(e, o)), (e = o);
        }
        return r;
      }
      function S(n) {
        var e;
        if (n.getTotalLength) return n.getTotalLength();
        switch (n.tagName.toLowerCase()) {
          case "circle":
            return 2 * Math.PI * B(n, "r");
          case "rect":
            return 2 * B(n, "width") + 2 * B(n, "height");
          case "line":
            return q(
              { x: B(n, "x1"), y: B(n, "y1") },
              { x: B(n, "x2"), y: B(n, "y2") }
            );
          case "polyline":
            return H(n);
          case "polygon":
            return (
              (e = n.points),
              H(n) + q(e.getItem(e.numberOfItems - 1), e.getItem(0))
            );
        }
      }
      function V(n, e) {
        var t = e || {},
          r =
            t.el ||
            (function (n) {
              for (var e = n.parentNode; d.svg(e) && d.svg(e.parentNode); )
                e = e.parentNode;
              return e;
            })(n),
          a = r.getBoundingClientRect(),
          o = B(r, "viewBox"),
          u = a.width,
          i = a.height,
          c = t.viewBox || (o ? o.split(" ") : [0, 0, u, i]);
        return {
          el: r,
          viewBox: c,
          x: c[0] / 1,
          y: c[1] / 1,
          w: u,
          h: i,
          vW: c[2],
          vH: c[3],
        };
      }
      function $(n, e) {
        var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          r = j(d.pth(n) ? n.totalLength : n, e) + "";
        return {
          original: r,
          numbers: r.match(t) ? r.match(t).map(Number) : [0],
          strings: d.str(n) || e ? r.split(t) : [],
        };
      }
      function W(n) {
        return M(n ? w(d.arr(n) ? n.map(x) : x(n)) : [], function (n, e, t) {
          return t.indexOf(n) === e;
        });
      }
      function _(n) {
        var e = W(n);
        return e.map(function (n, t) {
          return {
            target: n,
            id: t,
            total: e.length,
            transforms: { list: F(n) },
          };
        });
      }
      var Z = {
        css: function (n, e, t) {
          return (n.style[e] = t);
        },
        attribute: function (n, e, t) {
          return n.setAttribute(e, t);
        },
        object: function (n, e, t) {
          return (n[e] = t);
        },
        transform: function (n, e, t, r, a) {
          if ((r.list.set(e, t), e === r.last || a)) {
            var o = "";
            r.list.forEach(function (n, e) {
              o += e + "(" + n + ") ";
            }),
              (n.style.transform = o);
          }
        },
      };
      function X(n, e) {
        _(n).forEach(function (n) {
          for (var t in e) {
            var r = D(e[t], n),
              a = n.target,
              o = I(r),
              u = A(a, t, o, n),
              i = L(j(r, o || I(u)), u);
            Z[N(a, t)](a, t, i, n.transforms, !0);
          }
        });
      }
      function Y(n, e) {
        var t = n.length,
          r = function (n) {
            return n.timelineOffset ? n.timelineOffset : 0;
          },
          a = {};
        return (
          (a.duration = t
            ? Math.max.apply(
                Math,
                n.map(function (n) {
                  return r(n) + n.duration;
                })
              )
            : e.duration),
          (a.delay = t
            ? Math.min.apply(
                Math,
                n.map(function (n) {
                  return r(n) + n.delay;
                })
              )
            : e.delay),
          (a.endDelay = t
            ? a.duration -
              Math.max.apply(
                Math,
                n.map(function (n) {
                  return r(n) + n.duration - n.endDelay;
                })
              )
            : e.endDelay),
          a
        );
      }
      var G = 0,
        Q = [],
        z = (function () {
          var n;
          function e(t) {
            for (var r = Q.length, a = 0; a < r; ) {
              var o = Q[a];
              o.paused ? (Q.splice(a, 1), r--) : (o.tick(t), a++);
            }
            n = a > 0 ? requestAnimationFrame(e) : void 0;
          }
          return (
            "undefined" != typeof document &&
              document.addEventListener("visibilitychange", function () {
                J.suspendWhenDocumentHidden &&
                  (R()
                    ? (n = cancelAnimationFrame(n))
                    : (Q.forEach(function (n) {
                        return n._onDocumentVisibility();
                      }),
                      z()));
              }),
            function () {
              n ||
                (R() && J.suspendWhenDocumentHidden) ||
                !(Q.length > 0) ||
                (n = requestAnimationFrame(e));
            }
          );
        })();
      function R() {
        return !!document && document.hidden;
      }
      function J(n) {
        void 0 === n && (n = {});
        var e,
          t,
          r,
          u,
          i,
          c,
          f,
          l,
          p,
          v = 0,
          g = 0,
          m = 0,
          b = 0,
          x = null;
        function k(n) {
          var e =
            window.Promise &&
            new Promise(function (n) {
              return (x = n);
            });
          return (n.finished = e), e;
        }
        var B =
          ((t = P(a, (e = n))),
          (u = (function (n, e) {
            var t = [],
              r = e.keyframes;
            for (var a in (r &&
              (e = C(
                (function (n) {
                  for (
                    var e = M(
                        w(
                          n.map(function (n) {
                            return Object.keys(n);
                          })
                        ),
                        function (n) {
                          return d.key(n);
                        }
                      ).reduce(function (n, e) {
                        return 0 > n.indexOf(e) && n.push(e), n;
                      }, []),
                      t = {},
                      r = 0;
                    r < e.length;
                    r++
                  )
                    !(function (r) {
                      var a = e[r];
                      t[a] = n.map(function (n) {
                        var e = {};
                        for (var t in n)
                          d.key(t) ? t == a && (e.value = n[t]) : (e[t] = n[t]);
                        return e;
                      });
                    })(r);
                  return t;
                })(r),
                e
              )),
            e))
              d.key(a) &&
                t.push({
                  name: a,
                  tweens: (function (n, e) {
                    var t = O(e);
                    if (
                      (/^spring/.test(t.easing) && (t.duration = h(t.easing)),
                      d.arr(n))
                    ) {
                      var r = n.length;
                      2 !== r || d.obj(n[0])
                        ? d.fnc(e.duration) || (t.duration = e.duration / r)
                        : (n = { value: n });
                    }
                    var a = d.arr(n) ? n : [n];
                    return a
                      .map(function (n, t) {
                        var r = d.obj(n) && !d.pth(n) ? n : { value: n };
                        return (
                          d.und(r.delay) && (r.delay = t ? 0 : e.delay),
                          d.und(r.endDelay) &&
                            (r.endDelay = t === a.length - 1 ? e.endDelay : 0),
                          r
                        );
                      })
                      .map(function (n) {
                        return C(n, t);
                      });
                  })(e[a], n),
                });
            return t;
          })((r = P(o, e)), e)),
          (f = Y(
            (c = M(
              w(
                (i = _(e.targets)).map(function (n) {
                  return u.map(function (e) {
                    return (function (n, e) {
                      var t = N(n.target, e.name);
                      if (t) {
                        var r,
                          a = e.tweens.map(function (t) {
                            var a = (function (n, e) {
                                var t = {};
                                for (var r in n) {
                                  var a = D(n[r], e);
                                  d.arr(a) &&
                                    1 ===
                                      (a = a.map(function (n) {
                                        return D(n, e);
                                      })).length &&
                                    (a = a[0]),
                                    (t[r] = a);
                                }
                                return (
                                  (t.duration = parseFloat(t.duration)),
                                  (t.delay = parseFloat(t.delay)),
                                  t
                                );
                              })(t, n),
                              o = a.value,
                              u = d.arr(o) ? o[1] : o,
                              i = I(u),
                              c = A(n.target, e.name, i, n),
                              s = r ? r.to.original : c,
                              f = d.arr(o) ? o[0] : s,
                              l = I(f) || I(c),
                              p = i || l;
                            return (
                              d.und(u) && (u = s),
                              (a.from = $(f, p)),
                              (a.to = $(L(u, f), p)),
                              (a.start = r ? r.end : 0),
                              (a.end =
                                a.start + a.delay + a.duration + a.endDelay),
                              (a.easing = y(a.easing, a.duration)),
                              (a.isPath = d.pth(o)),
                              (a.isPathTargetInsideSVG =
                                a.isPath && d.svg(n.target)),
                              (a.isColor = d.col(a.from.original)),
                              a.isColor && (a.round = 1),
                              (r = a),
                              a
                            );
                          }),
                          o = a[a.length - 1];
                        return {
                          type: t,
                          property: e.name,
                          animatable: n,
                          tweens: a,
                          duration: o.end,
                          delay: a[0].delay,
                          endDelay: o.endDelay,
                        };
                      }
                    })(n, e);
                  });
                })
              ),
              function (n) {
                return !d.und(n);
              }
            )),
            r
          )),
          (l = G),
          G++,
          C(t, {
            id: l,
            children: [],
            animatables: i,
            animations: c,
            duration: f.duration,
            delay: f.delay,
            endDelay: f.endDelay,
          }));
        function T() {
          var n = B.direction;
          "alternate" !== n &&
            (B.direction = "normal" !== n ? "normal" : "reverse"),
            (B.reversed = !B.reversed),
            p.forEach(function (n) {
              return (n.reversed = B.reversed);
            });
        }
        function E(n) {
          return B.reversed ? B.duration - n : n;
        }
        function F() {
          (v = 0), (g = E(B.currentTime) * (1 / J.speed));
        }
        function j(n, e) {
          e && e.seek(n - e.timelineOffset);
        }
        function q(n) {
          for (var e = 0, t = B.animations, r = t.length; e < r; ) {
            var a = t[e],
              o = a.animatable,
              u = a.tweens,
              i = u.length - 1,
              c = u[i];
            i &&
              (c =
                M(u, function (e) {
                  return n < e.end;
                })[0] || c);
            for (
              var f = s(n - c.start - c.delay, 0, c.duration) / c.duration,
                l = isNaN(f) ? 1 : c.easing(f),
                d = c.to.strings,
                p = c.round,
                h = [],
                v = c.to.numbers.length,
                g = void 0,
                m = 0;
              m < v;
              m++
            ) {
              var y = void 0,
                b = c.to.numbers[m],
                w = c.from.numbers[m] || 0;
              (y = c.isPath
                ? (function (n, e, t) {
                    function r(t) {
                      void 0 === t && (t = 0);
                      var r = e + t >= 1 ? e + t : 0;
                      return n.el.getPointAtLength(r);
                    }
                    var a = V(n.el, n.svg),
                      o = r(),
                      u = r(-1),
                      i = r(1),
                      c = t ? 1 : a.w / a.vW,
                      s = t ? 1 : a.h / a.vH;
                    switch (n.property) {
                      case "x":
                        return (o.x - a.x) * c;
                      case "y":
                        return (o.y - a.y) * s;
                      case "angle":
                        return (
                          (180 * Math.atan2(i.y - u.y, i.x - u.x)) / Math.PI
                        );
                    }
                  })(c.value, l * b, c.isPathTargetInsideSVG)
                : w + l * (b - w)),
                p && !(c.isColor && m > 2) && (y = Math.round(y * p) / p),
                h.push(y);
            }
            var x = d.length;
            if (x) {
              g = d[0];
              for (var k = 0; k < x; k++) {
                d[k];
                var O = d[k + 1],
                  P = h[k];
                isNaN(P) || (O ? (g += P + O) : (g += P + " "));
              }
            } else g = h[0];
            Z[a.type](o.target, a.property, g, o.transforms),
              (a.currentValue = g),
              e++;
          }
        }
        function H(n) {
          B[n] && !B.passThrough && B[n](B);
        }
        function S(n) {
          var e = B.duration,
            t = B.delay,
            r = e - B.endDelay,
            a = E(n);
          (B.progress = s((a / e) * 100, 0, 100)),
            (B.reversePlayback = a < B.currentTime),
            p &&
              (function (n) {
                if (B.reversePlayback) for (var e = b; e--; ) j(n, p[e]);
                else for (var t = 0; t < b; t++) j(n, p[t]);
              })(a),
            !B.began && B.currentTime > 0 && ((B.began = !0), H("begin")),
            !B.loopBegan &&
              B.currentTime > 0 &&
              ((B.loopBegan = !0), H("loopBegin")),
            a <= t && 0 !== B.currentTime && q(0),
            ((a >= r && B.currentTime !== e) || !e) && q(e),
            a > t && a < r
              ? (B.changeBegan ||
                  ((B.changeBegan = !0),
                  (B.changeCompleted = !1),
                  H("changeBegin")),
                H("change"),
                q(a))
              : B.changeBegan &&
                ((B.changeCompleted = !0),
                (B.changeBegan = !1),
                H("changeComplete")),
            (B.currentTime = s(a, 0, e)),
            B.began && H("update"),
            n >= e &&
              ((g = 0),
              B.remaining && !0 !== B.remaining && B.remaining--,
              B.remaining
                ? ((v = m),
                  H("loopComplete"),
                  (B.loopBegan = !1),
                  "alternate" === B.direction && T())
                : ((B.paused = !0),
                  !B.completed &&
                    ((B.completed = !0),
                    H("loopComplete"),
                    H("complete"),
                    !B.passThrough && "Promise" in window && (x(), k(B)))));
        }
        return (
          k(B),
          (B.reset = function () {
            var n = B.direction;
            (B.passThrough = !1),
              (B.currentTime = 0),
              (B.progress = 0),
              (B.paused = !0),
              (B.began = !1),
              (B.loopBegan = !1),
              (B.changeBegan = !1),
              (B.completed = !1),
              (B.changeCompleted = !1),
              (B.reversePlayback = !1),
              (B.reversed = "reverse" === n),
              (B.remaining = B.loop),
              (b = (p = B.children).length);
            for (var e = b; e--; ) B.children[e].reset();
            ((B.reversed && !0 !== B.loop) ||
              ("alternate" === n && 1 === B.loop)) &&
              B.remaining++,
              q(B.reversed ? B.duration : 0);
          }),
          (B._onDocumentVisibility = F),
          (B.set = function (n, e) {
            return X(n, e), B;
          }),
          (B.tick = function (n) {
            (m = n), v || (v = m), S((m + (g - v)) * J.speed);
          }),
          (B.seek = function (n) {
            S(E(n));
          }),
          (B.pause = function () {
            (B.paused = !0), F();
          }),
          (B.play = function () {
            B.paused &&
              (B.completed && B.reset(), (B.paused = !1), Q.push(B), F(), z());
          }),
          (B.reverse = function () {
            T(), (B.completed = !B.reversed), F();
          }),
          (B.restart = function () {
            B.reset(), B.play();
          }),
          (B.remove = function (n) {
            U(W(n), B);
          }),
          B.reset(),
          B.autoplay && B.play(),
          B
        );
      }
      function K(n, e) {
        for (var t = e.length; t--; )
          k(n, e[t].animatable.target) && e.splice(t, 1);
      }
      function U(n, e) {
        var t = e.animations,
          r = e.children;
        K(n, t);
        for (var a = r.length; a--; ) {
          var o = r[a],
            u = o.animations;
          K(n, u), u.length || o.children.length || r.splice(a, 1);
        }
        t.length || r.length || e.pause();
      }
      (J.version = "3.2.1"),
        (J.speed = 1),
        (J.suspendWhenDocumentHidden = !0),
        (J.running = Q),
        (J.remove = function (n) {
          for (var e = W(n), t = Q.length; t--; ) U(e, Q[t]);
        }),
        (J.get = A),
        (J.set = X),
        (J.convertPx = T),
        (J.path = function (n, e) {
          var t = d.str(n) ? b(n)[0] : n,
            r = e || 100;
          return function (n) {
            return {
              property: n,
              el: t,
              svg: V(t),
              totalLength: S(t) * (r / 100),
            };
          };
        }),
        (J.setDashoffset = function (n) {
          var e = S(n);
          return n.setAttribute("stroke-dasharray", e), e;
        }),
        (J.stagger = function (n, e) {
          void 0 === e && (e = {});
          var t = e.direction || "normal",
            r = e.easing ? y(e.easing) : null,
            a = e.grid,
            o = e.axis,
            u = e.from || 0,
            i = "first" === u,
            c = "center" === u,
            s = "last" === u,
            f = d.arr(n),
            l = f ? parseFloat(n[0]) : parseFloat(n),
            p = f ? parseFloat(n[1]) : 0,
            h = I(f ? n[1] : n) || 0,
            v = e.start || 0 + (f ? l : 0),
            g = [],
            m = 0;
          return function (n, e, d) {
            if (
              (i && (u = 0),
              c && (u = (d - 1) / 2),
              s && (u = d - 1),
              !g.length)
            ) {
              for (var y = 0; y < d; y++) {
                if (a) {
                  var b = c ? (a[0] - 1) / 2 : u % a[0],
                    M = c ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                    w = y % a[0],
                    x = Math.floor(y / a[0]),
                    k = b - w,
                    O = M - x,
                    P = Math.sqrt(k * k + O * O);
                  "x" === o && (P = -k), "y" === o && (P = -O), g.push(P);
                } else g.push(Math.abs(u - y));
                m = Math.max.apply(Math, g);
              }
              r &&
                (g = g.map(function (n) {
                  return r(n / m) * m;
                })),
                "reverse" === t &&
                  (g = g.map(function (n) {
                    return o ? (n < 0 ? -1 * n : -n) : Math.abs(m - n);
                  }));
            }
            var C = f ? (p - l) / m : l;
            return v + (Math.round(100 * g[e]) / 100) * C + h;
          };
        }),
        (J.timeline = function (n) {
          void 0 === n && (n = {});
          var e = J(n);
          return (
            (e.duration = 0),
            (e.add = function (t, r) {
              var a = Q.indexOf(e),
                u = e.children;
              function i(n) {
                n.passThrough = !0;
              }
              a > -1 && Q.splice(a, 1);
              for (var c = 0; c < u.length; c++) i(u[c]);
              var s = C(t, P(o, n));
              s.targets = s.targets || n.targets;
              var f = e.duration;
              (s.autoplay = !1),
                (s.direction = e.direction),
                (s.timelineOffset = d.und(r) ? f : L(r, f)),
                i(e),
                e.seek(s.timelineOffset);
              var l = J(s);
              i(l), u.push(l);
              var p = Y(u, n);
              return (
                (e.delay = p.delay),
                (e.endDelay = p.endDelay),
                (e.duration = p.duration),
                e.seek(0),
                e.reset(),
                e.autoplay && e.play(),
                e
              );
            }),
            e
          );
        }),
        (J.easing = y),
        (J.penner = m),
        (J.random = function (n, e) {
          return Math.floor(Math.random() * (e - n + 1)) + n;
        }),
        (e.Z = J);
    },
  },
]);
