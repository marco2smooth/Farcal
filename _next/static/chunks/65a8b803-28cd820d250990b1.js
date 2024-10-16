"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4996],
  {
    22569: function (e, t, n) {
      n.d(t, {
        CH: function () {
          return tX;
        },
      });
      var r,
        i,
        o = n(2784),
        s = n(28316);
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      let l = (e) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),
        c = (e, t) => e.match(RegExp(`.{${t}}`, "g")),
        u = (e) => parseInt(e.repeat(2 / e.length), 16);
      function d(e, t) {
        return { prev: t(e.prev, "prev"), next: t(e.next, "next") };
      }
      function h(e, t) {
        return {
          prev: (null == e ? void 0 : e.prev) === void 0 ? t : e.prev,
          next: (null == e ? void 0 : e.next) === void 0 ? t : e.next,
        };
      }
      function f(e) {
        return e.lines
          .map((e) => e.tokens.map((e) => e.content).join(""))
          .join("\n");
      }
      function m(e) {
        return e.split(/,(?![^\[]*\])/g);
      }
      function p(e) {
        return e.reduce((e, t) => Object.assign(e, t), {});
      }
      function v(e) {
        let t = e.match(/(\d+)\[(.+)\]/);
        if (!t) return p(x(e).map((e) => ({ [e]: !0 })));
        {
          let [, e, n] = t,
            r = n.split(",").map(g);
          return { [Number(e)]: r };
        }
      }
      function g(e) {
        let [t, n] = e.split(":");
        if (!E(t)) throw new j(t);
        let r = Number(t);
        if (r < 1) throw new w();
        if (!n) return { start: r, end: r };
        if (!E(n)) throw new j(n);
        return { start: r, end: +n };
      }
      function b(e) {
        if (!e) throw Error("Focus cannot be empty");
        try {
          let t = e.split(/,(?![^\[]*\])/g).map(y);
          return (function (e) {
            let t = {},
              n = -1,
              r = null == e ? 0 : e.length;
            for (; ++n < r; ) {
              var i = e[n];
              t[i[0]] = i[1];
            }
            return t;
          })(t.flat());
        } catch (e) {
          throw e;
        }
      }
      function y(e) {
        let t = e.match(/(\d+)\[(.+)\]/);
        if (!t) return x(e).map((e) => [e - 1, !0]);
        {
          let [, e, n] = t,
            r = n.split(",").map(x);
          return [[Number(e) - 1, r.flat().map((e) => e - 1)]];
        }
      }
      function x(e) {
        let [t, n] = e.split(":");
        if (!E(t)) throw new j(t);
        let r = Number(t);
        if (r < 1) throw new w();
        if (!n) return [r];
        {
          if (!E(n)) throw new j(n);
          let e = [];
          for (let t = r; t <= +n; t++) e.push(t);
          return e;
        }
      }
      function E(e) {
        var t = Math.abs((e = e.toString())),
          n = parseInt(e, 10);
        return !isNaN(t) && n === t && t.toString() === e;
      }
      class w extends Error {
        constructor() {
          super("Invalid line or column number in focus string"),
            Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class j extends Error {
        constructor(e) {
          super(`Invalid number "${e}" in focus string`),
            (this.number = e),
            Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      let O = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function N(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      let C = /\r\n|\r|\n/;
      function k(e, t) {
        let n = e ? e.split(C) : [""],
          r = t ? Object.keys(b(t)).map((e) => parseInt(e, 10)) : [...n.keys()],
          i = "";
        return (
          n.forEach((e, t) => {
            r.includes(t) && e.length > i.length && (i = e);
          }),
          i
        );
      }
      function S(e) {
        let t = getComputedStyle(e);
        return (
          parseFloat(t.width) -
          parseFloat(t.paddingLeft) -
          parseFloat(t.paddingRight)
        );
      }
      function _(e) {
        if (!e) return null;
        let t = getComputedStyle(e);
        return (
          parseFloat(t.height) -
          parseFloat(t.paddingTop) -
          parseFloat(t.paddingBottom)
        );
      }
      function L() {}
      L.prototype = {
        diff: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.callback;
          "function" == typeof n && ((r = n), (n = {})), (this.options = n);
          var i = this;
          function o(e) {
            return r
              ? (setTimeout(function () {
                  r(void 0, e);
                }, 0),
                !0)
              : e;
          }
          (e = this.castInput(e)),
            (t = this.castInput(t)),
            (e = this.removeEmpty(this.tokenize(e)));
          var s = (t = this.removeEmpty(this.tokenize(t))).length,
            a = e.length,
            l = 1,
            c = s + a,
            u = [{ newPos: -1, components: [] }],
            d = this.extractCommon(u[0], t, e, 0);
          if (u[0].newPos + 1 >= s && d + 1 >= a)
            return o([{ value: this.join(t), count: t.length }]);
          function h() {
            for (var n = -1 * l; n <= l; n += 2) {
              var r = void 0,
                c = u[n - 1],
                d = u[n + 1],
                h = (d ? d.newPos : 0) - n;
              c && (u[n - 1] = void 0);
              var f = c && c.newPos + 1 < s,
                m = d && 0 <= h && h < a;
              if (!f && !m) {
                u[n] = void 0;
                continue;
              }
              if (
                (!f || (m && c.newPos < d.newPos)
                  ? ((r = {
                      newPos: d.newPos,
                      components: d.components.slice(0),
                    }),
                    i.pushComponent(r.components, void 0, !0))
                  : ((r = c),
                    r.newPos++,
                    i.pushComponent(r.components, !0, void 0)),
                (h = i.extractCommon(r, t, e, n)),
                r.newPos + 1 >= s && h + 1 >= a)
              )
                return o(
                  (function (e, t, n, r, i) {
                    for (var o = 0, s = t.length, a = 0, l = 0; o < s; o++) {
                      var c = t[o];
                      if (c.removed) {
                        if (
                          ((c.value = e.join(r.slice(l, l + c.count))),
                          (l += c.count),
                          o && t[o - 1].added)
                        ) {
                          var u = t[o - 1];
                          (t[o - 1] = t[o]), (t[o] = u);
                        }
                      } else {
                        if (!c.added && i) {
                          var d = n.slice(a, a + c.count);
                          (d = d.map(function (e, t) {
                            var n = r[l + t];
                            return n.length > e.length ? n : e;
                          })),
                            (c.value = e.join(d));
                        } else c.value = e.join(n.slice(a, a + c.count));
                        (a += c.count), c.added || (l += c.count);
                      }
                    }
                    var h = t[s - 1];
                    return (
                      s > 1 &&
                        "string" == typeof h.value &&
                        (h.added || h.removed) &&
                        e.equals("", h.value) &&
                        ((t[s - 2].value += h.value), t.pop()),
                      t
                    );
                  })(i, r.components, t, e, i.useLongestToken)
                );
              u[n] = r;
            }
            l++;
          }
          if (r)
            !(function e() {
              setTimeout(function () {
                if (l > c) return r();
                h() || e();
              }, 0);
            })();
          else
            for (; l <= c; ) {
              var f = h();
              if (f) return f;
            }
        },
        pushComponent: function (e, t, n) {
          var r = e[e.length - 1];
          r && r.added === t && r.removed === n
            ? (e[e.length - 1] = { count: r.count + 1, added: t, removed: n })
            : e.push({ count: 1, added: t, removed: n });
        },
        extractCommon: function (e, t, n, r) {
          for (
            var i = t.length, o = n.length, s = e.newPos, a = s - r, l = 0;
            s + 1 < i && a + 1 < o && this.equals(t[s + 1], n[a + 1]);

          )
            s++, a++, l++;
          return l && e.components.push({ count: l }), (e.newPos = s), a;
        },
        equals: function (e, t) {
          return this.options.comparator
            ? this.options.comparator(e, t)
            : e === t ||
                (this.options.ignoreCase &&
                  e.toLowerCase() === t.toLowerCase());
        },
        removeEmpty: function (e) {
          for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
          return t;
        },
        castInput: function (e) {
          return e;
        },
        tokenize: function (e) {
          return e.split("");
        },
        join: function (e) {
          return e.join("");
        },
      };
      var P = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
        F = /\S/,
        M = new L();
      (M.equals = function (e, t) {
        return (
          this.options.ignoreCase &&
            ((e = e.toLowerCase()), (t = t.toLowerCase())),
          e === t || (this.options.ignoreWhitespace && !F.test(e) && !F.test(t))
        );
      }),
        (M.tokenize = function (e) {
          for (
            var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0;
            n < t.length - 1;
            n++
          )
            !t[n + 1] &&
              t[n + 2] &&
              P.test(t[n]) &&
              P.test(t[n + 2]) &&
              ((t[n] += t[n + 2]), t.splice(n + 1, 2), n--);
          return t;
        });
      var $ = new L();
      function I(e) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      ($.tokenize = function (e) {
        var t = [],
          n = e.split(/(\n|\r\n)/);
        n[n.length - 1] || n.pop();
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          r % 2 && !this.options.newlineIsToken
            ? (t[t.length - 1] += i)
            : (this.options.ignoreWhitespace && (i = i.trim()), t.push(i));
        }
        return t;
      }),
        (new L().tokenize = function (e) {
          return e.split(/(\S.+?[.!?])(?=\s+|$)/);
        }),
        (new L().tokenize = function (e) {
          return e.split(/([{}:;,]|\s+)/);
        });
      var H = Object.prototype.toString,
        T = new L();
      (T.useLongestToken = !0),
        (T.tokenize = $.tokenize),
        (T.castInput = function (e) {
          var t = this.options,
            n = t.undefinedReplacement,
            r = t.stringifyReplacer,
            i =
              void 0 === r
                ? function (e, t) {
                    return void 0 === t ? n : t;
                  }
                : r;
          return "string" == typeof e
            ? e
            : JSON.stringify(
                (function e(t, n, r, i, o) {
                  for (
                    n = n || [], r = r || [], i && (t = i(o, t)), s = 0;
                    s < n.length;
                    s += 1
                  )
                    if (n[s] === t) return r[s];
                  if ("[object Array]" === H.call(t)) {
                    for (
                      n.push(t), a = Array(t.length), r.push(a), s = 0;
                      s < t.length;
                      s += 1
                    )
                      a[s] = e(t[s], n, r, i, o);
                    return n.pop(), r.pop(), a;
                  }
                  if (
                    (t && t.toJSON && (t = t.toJSON()),
                    "object" === I(t) && null !== t)
                  ) {
                    n.push(t), (a = {}), r.push(a);
                    var s,
                      a,
                      l,
                      c = [];
                    for (l in t) t.hasOwnProperty(l) && c.push(l);
                    for (c.sort(), s = 0; s < c.length; s += 1)
                      a[(l = c[s])] = e(t[l], n, r, i, l);
                    n.pop(), r.pop();
                  } else a = t;
                  return a;
                })(e, null, null, i),
                i,
                "  "
              );
        }),
        (T.equals = function (e, t) {
          return L.prototype.equals.call(
            T,
            e.replace(/,([\r\n])/g, "$1"),
            t.replace(/,([\r\n])/g, "$1")
          );
        });
      var A = new L();
      function z(e, t) {
        return Array.isArray(t)
          ? t.some(({ start: t, end: n }) => t - 1 <= e && e < n)
          : t;
      }
      function R(e, t) {
        return t.find(({ columnNumbers: t }) => t.start - 1 <= e && e < t.end);
      }
      function W(e, t) {
        if (!0 === e.fixed) return e.value;
        {
          let [n, r] = e.interval,
            [i, o] = e.extremes;
          return t < n
            ? i
            : t > r
            ? o
            : i + (e.ease || q.linear)((t - n) / (r - n)) * (o - i);
        }
      }
      function B([e, t], n, r) {
        if (r <= 1) return [e, t];
        let i = t - e,
          o = i / Math.pow(r, 1 / 8),
          s = e + ((i - o) / (r - 1)) * n;
        return [s, s + o];
      }
      (A.tokenize = function (e) {
        return e.slice();
      }),
        (A.join = A.removeEmpty =
          function (e) {
            return e;
          });
      let q = {
        linear: function (e) {
          return e;
        },
        easeInQuad: function (e) {
          return e * e;
        },
        easeOutQuad: function (e) {
          return e * (2 - e);
        },
        easeInOutCubic: function (e) {
          return e < 0.5
            ? 4 * e * e * e
            : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        },
      };
      function U(e) {
        return !!e.focus.match(/(\d+)\[(.+)\]/);
      }
      function X(e, t, n) {
        let r = [...t];
        r.sort((e, t) => e.lineNumbers.start - t.lineNumbers.start);
        let i = 0,
          o = [];
        for (; i < e.length; ) {
          let t = r[0],
            s = e[i];
          if (t && n(s) > t.lineNumbers.start)
            throw "Code Hike can't handle two annotations for the same line";
          if (t && n(s) === t.lineNumbers.start) {
            let a = { lines: [], annotation: t };
            for (; s && (!n(s) || n(s) <= t.lineNumbers.end); )
              a.lines.push(s), (s = e[++i]);
            o.push(a), r.shift();
          } else if (t) {
            let r = { lines: [] };
            for (; s && (!n(s) || n(s) < t.lineNumbers.start); )
              r.lines.push(s), (s = e[++i]);
            o.push(r);
          } else o.push({ lines: e.slice(i) }), (i = e.length);
        }
        return o;
      }
      function D(e, t, n) {
        let r = [],
          i = t;
        for (; i < n && e.length > 0; ) {
          let t = e.shift();
          r.push(t), (i += t.tokens.reduce((e, t) => e + t.content.length, 0));
        }
        return r;
      }
      function G({
        dimensions: e,
        codeStep: t,
        children: n,
        minZoom: r = 0,
        maxZoom: i = 1.2,
        center: s = !1,
        progress: l,
      }) {
        let { prev: c, next: u } = (function (e) {
            var { codeStep: t } = e,
              n = a(e, ["codeStep"]);
            let { lineHeight: r, lineWidth: i } = n.dimensions;
            return d(
              {
                prev: {
                  extremes: [
                    t.firstFocusedLineNumber.prev - 1,
                    t.lastFocusedLineNumber.prev - 1,
                  ],
                  originalContentHeight: t.lineCount.prev * r,
                  lineWidth: i[0],
                },
                next: {
                  extremes: [
                    t.firstFocusedLineNumber.next - 1,
                    t.lastFocusedLineNumber.next - 1,
                  ],
                  originalContentHeight: t.lineCount.next * r,
                  lineWidth: i[1],
                },
              },
              ({ extremes: e, originalContentHeight: t, lineWidth: r }) =>
                (function ({
                  dimensions: e,
                  lineWidth: t,
                  minZoom: n,
                  maxZoom: r,
                  extremes: i,
                  originalContentHeight: o,
                  horizontalCenter: s,
                }) {
                  var a, l;
                  let { lineHeight: c } = e,
                    u = null == e ? void 0 : e.contentHeight,
                    d = null == e ? void 0 : e.contentWidth,
                    h = (i[1] - i[0] + 3) * c,
                    f = Math.max(
                      Math.min(
                        (d -
                          ((null == e ? void 0 : e.lineNumberWidth) || 16) -
                          16) /
                          t,
                        u / h,
                        r
                      ),
                      n
                    ),
                    m = o * f,
                    p = (i[0] - 1) * c * f,
                    v = (i[1] + 2) * c * f;
                  return {
                    zoom: f,
                    dx: s ? Math.max(d / 2 - (t * f) / 2, 0) : 0,
                    dy:
                      u > m
                        ? (u - m) / 2
                        : (a = u / 2 - (v + p) / 2) <= (l = Math.max(u - m, -p))
                        ? l
                        : a >= 0
                        ? 0
                        : a,
                    focusHeight: v - p,
                    focusWidth: t * f,
                  };
                })(
                  Object.assign(
                    { extremes: e, originalContentHeight: t, lineWidth: r },
                    n
                  )
                )
            );
          })({
            codeStep: t,
            dimensions: e,
            minZoom: r,
            maxZoom: i,
            horizontalCenter: s,
          }),
          h = J(c.zoom, u.zoom, l),
          f = J(c.dx, u.dx, l),
          m = J(c.dy, u.dy, l, t.verticalInterval),
          p = J(c.focusHeight, u.focusHeight, l),
          v = J(c.focusWidth, u.focusWidth, l),
          g = ((null == e ? void 0 : e.lineNumberWidth) || 0) * h || 16,
          b = Math.max(v + g, e.contentWidth);
        return o.createElement(
          K,
          { width: e.containerWidth, height: e.containerHeight, lang: t.lang },
          o.createElement(
            V,
            {
              dx: f,
              dy: m,
              scale: h,
              height: Math.max(p, e.contentHeight),
              width: b,
            },
            n(v, g / h)
          )
        );
      }
      function K({ width: e, height: t, children: n, lang: r }) {
        return o.createElement("code", {
          style: {
            width: e,
            height: t,
            position: "relative",
            overflow: "auto",
          },
          className: "ch-code-scroll-parent",
          children: n,
          "data-ch-lang": r,
        });
      }
      function V({ dx: e, dy: t, scale: n, height: r, width: i, children: s }) {
        return o.createElement(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "top left",
              width: i,
              height: r,
              overflow: "hidden",
            },
            className: "ch-code-scroll-content",
          },
          o.createElement("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translateX(${e}px) translateY(${t}px) scale(${n})`,
              transformOrigin: "left top",
              width: i / n,
              height: (r - 2 * t) / n,
            },
            children: s,
          })
        );
      }
      function J(e, t, n, r = [0, 1]) {
        return W(
          { fixed: !1, interval: r, extremes: [e, t], ease: q.easeInOutCubic },
          n
        );
      }
      function Y(e) {
        return o.createElement(G, Object.assign({}, e), (t, n) =>
          o.createElement(Z, {
            codeStep: e.codeStep,
            focusWidth: t,
            lineHeight: e.dimensions.lineHeight,
            progress: e.progress,
            startX: n,
            lineNumberWidth: e.dimensions.lineNumberWidth,
          })
        );
      }
      function Z({
        codeStep: e,
        progress: t,
        focusWidth: n,
        lineHeight: r,
        startX: i,
        lineNumberWidth: s,
      }) {
        let a = t < 0.5 ? e.groups.prev : e.groups.next;
        return o.createElement(
          o.Fragment,
          null,
          a.map((e, a) => {
            if (!e.annotation)
              return o.createElement(Q, {
                lines: e.lines,
                t: t,
                focusWidth: n,
                lineHeight: r,
                startX: i,
                key: a,
                lineNumberWidth: s,
              });
            let l = W(e.lines[0].tweenY, t),
              c =
                e.annotation.lineNumbers.end -
                e.annotation.lineNumbers.start +
                1,
              u = e.annotation.Component;
            return o.createElement(
              u,
              {
                style: {
                  position: "absolute",
                  height: c * r,
                  width: "100%",
                  transform: `translateY(${l * r}px)`,
                },
                key: a,
                data: e.annotation.data,
                isInline: !1,
                lines: e.lines,
              },
              o.createElement(Q, {
                lines: e.lines,
                t: t,
                focusWidth: n,
                lineHeight: r,
                startY: l,
                startX: i,
                lineNumberWidth: s,
              })
            );
          })
        );
      }
      function Q({
        lines: e,
        focusWidth: t,
        lineHeight: n,
        t: r,
        startX: i,
        startY: s = 0,
        lineNumberWidth: a,
      }) {
        return o.createElement(
          o.Fragment,
          null,
          e.map((e, l) => {
            let { tweenX: c, tweenY: u, focused: d } = e,
              h = W(c, r),
              f = W(u, r),
              m = er(d, r, h);
            return o.createElement(
              o.Fragment,
              { key: l },
              a
                ? o.createElement(
                    "span",
                    {
                      className: "ch-code-line-number",
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: `translate(${h * t}px, ${(f - s) * n}px)`,
                        width: a,
                        opacity: m,
                      },
                    },
                    r < 0.5 ? e.lineNumber.prev : e.lineNumber.next
                  )
                : void 0,
              o.createElement(
                en,
                { dx: i + h * t, dy: (f - s) * n, width: t, opacity: m },
                o.createElement(ee, { line: e, progress: r, dx: h })
              )
            );
          })
        );
      }
      function ee({ line: e, progress: t, dx: n }) {
        return o.createElement(
          "div",
          { style: { display: "inline-block", width: "100%" } },
          e.annotatedGroups.map((e, r) =>
            o.createElement(et, {
              annotatedGroup: e,
              progress: t,
              dx: n,
              key: r,
            })
          ),
          o.createElement("br", null)
        );
      }
      function et({ annotatedGroup: e, progress: t, dx: n }) {
        var r, i;
        let s = t < 0.5 ? e.prev : e.next,
          a = (null == s ? void 0 : s.groups) || [],
          l =
            null === (r = null == s ? void 0 : s.annotation) || void 0 === r
              ? void 0
              : r.Component,
          c = a.map((e, r) => {
            let i = er(e.focused, t, n);
            return o.createElement(
              "span",
              { style: { opacity: i }, key: r + 1 },
              e.element
            );
          });
        return l
          ? o.createElement(l, {
              children: c,
              data:
                null === (i = null == s ? void 0 : s.annotation) || void 0 === i
                  ? void 0
                  : i.data,
              isInline: !0,
            })
          : o.createElement(o.Fragment, null, c);
      }
      function en({ children: e, dx: t, dy: n, opacity: r, width: i }) {
        return o.createElement(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translate(${t}px, ${n}px)`,
              width: i,
              display: r <= 0 ? "none" : void 0,
            },
          },
          e
        );
      }
      function er(e, t, n) {
        return (
          W(
            {
              fixed: !1,
              extremes: [e.prev ? 0.99 : 0.33, e.next ? 0.99 : 0.33],
              interval: [0, 1],
            },
            t
          ) -
          1 * Math.abs(n)
        );
      }
      function ei({ content: e, style: t, className: n }) {
        let [r, i] = o.useState(!1);
        return o.createElement(
          "button",
          {
            type: "button",
            title: "Copy code",
            className: n,
            style: t,
            onClick: () => {
              (function (e) {
                if (!navigator.clipboard) {
                  (function (e) {
                    var t = document.createElement("textarea");
                    (t.value = e),
                      (t.style.top = "0"),
                      (t.style.left = "0"),
                      (t.style.position = "fixed"),
                      document.body.appendChild(t),
                      t.focus(),
                      t.select();
                    try {
                      document.execCommand("copy");
                    } catch (e) {}
                    document.body.removeChild(t);
                  })(e);
                  return;
                }
                navigator.clipboard.writeText(e);
              })(e),
                i(!0),
                setTimeout(() => {
                  i(!1);
                }, 1200);
            },
          },
          o.createElement(
            "svg",
            {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r
              ? o.createElement("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M5 13l4 4L19 7",
                })
              : o.createElement("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.6px",
                  d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                })
          )
        );
      }
      function eo(e) {
        var { tween: t, progress: n, config: r } = e,
          i = a(e, ["tween", "progress", "config"]);
        let s = (function ({ tween: e }) {
            var t;
            return (function (e) {
              let { highlightedLines: t, focus: n } = e;
              return o.useMemo(
                () =>
                  (function ({
                    focus: e,
                    annotations: t,
                    highlightedLines: n,
                    lang: r,
                  }) {
                    var i, s;
                    let l, c;
                    let u = d(n, (e) =>
                        e
                          .map((e) => e.tokens.map((e) => e.content).join(""))
                          .join("\n")
                          .trimEnd()
                          .concat("\n")
                      ),
                      f =
                        ((i = u),
                        (s = n),
                        (l = 0),
                        (c = 0),
                        {
                          lines: (function (e) {
                            var t, n;
                            let r =
                                ((t = e.prev),
                                (n = e.next),
                                $.diff(t, n, void 0)),
                              i = [],
                              o = 0,
                              s = 0;
                            return (
                              r.forEach((e) => {
                                if (e.added)
                                  for (let t = 0; t < e.count; t++)
                                    i.push({ next: s++ });
                                else if (e.removed)
                                  for (let t = 0; t < e.count; t++)
                                    i.push({ prev: o++ });
                                else
                                  for (let t = 0; t < e.count; t++)
                                    i.push({ prev: o++, next: s++ });
                              }),
                              i
                            );
                          })(i).map((e) =>
                            void 0 === e.next
                              ? Object.assign(
                                  Object.assign({}, s.prev[e.prev]),
                                  {
                                    lineNumber: { prev: e.prev + 1 },
                                    move: "exit",
                                    enterIndex: null,
                                    exitIndex: c++,
                                  }
                                )
                              : void 0 === e.prev
                              ? Object.assign(
                                  Object.assign({}, s.next[e.next]),
                                  {
                                    lineNumber: { next: e.next + 1 },
                                    move: "enter",
                                    enterIndex: l++,
                                    exitIndex: null,
                                  }
                                )
                              : Object.assign(
                                  Object.assign({}, s.prev[e.prev]),
                                  {
                                    lineNumber: {
                                      prev: e.prev + 1,
                                      next: e.next + 1,
                                    },
                                    move: "stay",
                                    enterIndex: null,
                                    exitIndex: null,
                                  }
                                )
                          ),
                          enterCount: l,
                          exitCount: c,
                        }),
                      { inlineAnnotations: b, multilineAnnotations: y } =
                        (function (e) {
                          var t, n, r, i, o, s;
                          let a =
                              ((t = []),
                              (n = (e) =>
                                e.flatMap((e) =>
                                  m(e.focus).map((t) =>
                                    Object.assign(Object.assign({}, e), {
                                      focus: t,
                                    })
                                  )
                                )),
                              d(h(e, t), n)),
                            l =
                              ((r = []),
                              (i = (e) => e.filter(U)),
                              d(h(a, r), i)),
                            c =
                              ((o = []),
                              (s = (e) => e.filter((e) => !U(e))),
                              d(h(a, o), s));
                          return {
                            inlineAnnotations: d(l, (e) =>
                              (function (e) {
                                let t = {};
                                return (
                                  e.forEach((e) => {
                                    let n = v(e.focus),
                                      r = +Object.keys(n)[0],
                                      i = n[r],
                                      o = t[r] || [];
                                    o.push({
                                      columnNumbers: i[0],
                                      data: e.data,
                                      Component: e.Component,
                                    }),
                                      (t[r] = o);
                                  }),
                                  t
                                );
                              })(e)
                            ),
                            multilineAnnotations: d(c, (e) =>
                              e.map((e) => ({
                                lineNumbers: g(e.focus),
                                data: e.data,
                                Component: e.Component,
                              }))
                            ),
                          };
                        })(t);
                    return (function (e, t, n) {
                      var r, i;
                      let o =
                          ((r = e.enterCount),
                          (i = e.exitCount),
                          r <= 0 && i <= 0
                            ? [0, 1]
                            : r <= 0 && i >= 1
                            ? [0.33, 1]
                            : r >= 1 && i <= 0
                            ? [0, 0.67]
                            : [0.25, 0.75]),
                        s = d(e.lineGroups, (t) =>
                          t.map((t) =>
                            Object.assign(Object.assign({}, t), {
                              lines: (function (e, t, n, r) {
                                let [i, o] = t;
                                return e.map((e) => {
                                  let t = d(e.lineNumber, (e) => e && e - 1),
                                    { enterIndex: s, exitIndex: a } = e,
                                    l =
                                      "exit" === e.move
                                        ? { fixed: !0, value: t.prev }
                                        : "enter" === e.move
                                        ? { fixed: !0, value: t.next }
                                        : {
                                            fixed: !1,
                                            extremes: [t.prev, t.next],
                                            interval: [i, o],
                                            ease: q.easeInOutCubic,
                                          },
                                    c =
                                      "exit" === e.move
                                        ? {
                                            fixed: !1,
                                            extremes: [0, -1],
                                            ease: q.easeInQuad,
                                            interval: B([0, i], a, r),
                                          }
                                        : "enter" === e.move
                                        ? {
                                            fixed: !1,
                                            extremes: [1, 0],
                                            ease: q.easeOutQuad,
                                            interval: B([o, 1], s, n),
                                          }
                                        : { fixed: !0, value: 0 };
                                  return Object.assign(Object.assign({}, e), {
                                    tweenX: c,
                                    tweenY: l,
                                  });
                                });
                              })(t.lines, o, e.enterCount, e.exitCount),
                            })
                          )
                        );
                      return Object.assign(Object.assign({}, e), {
                        groups: s,
                        verticalInterval: o,
                        code: t,
                        lang: n,
                      });
                    })(
                      (function (e, t, n) {
                        var r,
                          { lines: i } = e,
                          o = a(e, ["lines"]);
                        let s = {
                          prev: X(
                            (r = i.map((e) => {
                              var { groups: n } = e,
                                r = a(e, ["groups"]);
                              let { lineNumber: i } = r,
                                o = {
                                  prev: (i.prev && t.prev[i.prev]) || [],
                                  next: (i.next && t.next[i.next]) || [],
                                };
                              return Object.assign(Object.assign({}, r), {
                                annotatedGroups: (function (e, t) {
                                  let n = [...e],
                                    r = [...e],
                                    i = [...t.prev],
                                    o = [...t.next],
                                    s = [],
                                    a = 1,
                                    l = 1;
                                  for (; n.length > 0 || r.length > 0; ) {
                                    let e = i[0],
                                      t = o[0],
                                      c = e && e.columnNumbers.start === a,
                                      u = t && t.columnNumbers.start === l;
                                    if (a < l) {
                                      if (c) {
                                        let t = e.columnNumbers.end + 1;
                                        s.push({
                                          prev: {
                                            annotation: e,
                                            groups: D(n, a, t),
                                          },
                                        }),
                                          (a = t),
                                          i.shift();
                                      } else {
                                        let t = Math.min(
                                          l,
                                          (null == e
                                            ? void 0
                                            : e.columnNumbers.start) || l
                                        );
                                        s.push({
                                          prev: { groups: D(n, a, t) },
                                        }),
                                          (a = t);
                                      }
                                    } else if (a > l) {
                                      if (u) {
                                        let e = t.columnNumbers.end + 1;
                                        s.push({
                                          next: {
                                            annotation: t,
                                            groups: D(r, l, e),
                                          },
                                        }),
                                          (l = e),
                                          o.shift();
                                      } else {
                                        let e = Math.min(
                                          a,
                                          (null == t
                                            ? void 0
                                            : t.columnNumbers.start) || a
                                        );
                                        s.push({
                                          next: { groups: D(r, l, e) },
                                        }),
                                          (l = e);
                                      }
                                    } else if (a == l) {
                                      if (
                                        c &&
                                        u &&
                                        e.columnNumbers.end ===
                                          t.columnNumbers.end
                                      ) {
                                        let c = t.columnNumbers.end + 1;
                                        s.push({
                                          prev: {
                                            annotation: e,
                                            groups: D(n, a, c),
                                          },
                                          next: {
                                            annotation: t,
                                            groups: D(r, l, c),
                                          },
                                        }),
                                          (a = c),
                                          (l = c),
                                          i.shift(),
                                          o.shift();
                                      } else if (c) {
                                        let t = e.columnNumbers.end + 1;
                                        s.push({
                                          prev: {
                                            annotation: e,
                                            groups: D(n, a, t),
                                          },
                                        }),
                                          (a = t),
                                          i.shift();
                                      } else if (u) {
                                        let e = t.columnNumbers.end + 1;
                                        s.push({
                                          next: {
                                            annotation: t,
                                            groups: D(r, l, e),
                                          },
                                        }),
                                          (l = e),
                                          o.shift();
                                      } else if (e || t) {
                                        let i = Math.min(
                                          (null == e
                                            ? void 0
                                            : e.columnNumbers.start) ||
                                            Number.MAX_VALUE,
                                          (null == t
                                            ? void 0
                                            : t.columnNumbers.start) ||
                                            Number.MAX_VALUE
                                        );
                                        s.push({
                                          prev: { groups: D(n, a, i) },
                                          next: { groups: D(r, l, i) },
                                        }),
                                          (a = i),
                                          (l = i);
                                      } else
                                        s.push({
                                          prev: { groups: n },
                                          next: { groups: r },
                                        }),
                                          (n = []),
                                          (r = []);
                                    }
                                  }
                                  return s;
                                })(n, o),
                              });
                            })),
                            n.prev,
                            (e) => e.lineNumber.prev
                          ),
                          next: X(r, n.next, (e) => e.lineNumber.next),
                        };
                        return Object.assign(Object.assign({}, o), {
                          lineGroups: s,
                          lineCount: {
                            prev: i.filter((e) => null != e.lineNumber.prev)
                              .length,
                            next: i.filter((e) => null != e.lineNumber.next)
                              .length,
                          },
                        });
                      })(
                        (function (e, t, n) {
                          let { lines: r } = e,
                            i = a(e, ["lines"]),
                            s = d(t, (e, t) => {
                              let n =
                                "prev" === t
                                  ? r.filter((e) => "enter" !== e.move)
                                  : r.filter((e) => "exit" !== e.move);
                              return e
                                ? p(m(e).map(v))
                                : p(
                                    [...n.keys()].map((e) => ({ [e + 1]: !0 }))
                                  );
                            }),
                            l = r.map((e) => {
                              let { tokens: t } = e,
                                r = a(e, ["tokens"]),
                                i = {
                                  prev:
                                    !!e.lineNumber.prev &&
                                    s.prev[e.lineNumber.prev],
                                  next:
                                    !!e.lineNumber.next &&
                                    s.next[e.lineNumber.next],
                                },
                                l = {
                                  prev:
                                    (e.lineNumber.prev &&
                                      n.prev[e.lineNumber.prev]) ||
                                    [],
                                  next:
                                    (e.lineNumber.next &&
                                      n.next[e.lineNumber.next]) ||
                                    [],
                                };
                              return Object.assign(
                                {
                                  focused: d(i, (e) => !!e),
                                  groups: (function (e, t, n) {
                                    let r = d(t, (e) =>
                                        Array.isArray(e) ? e : []
                                      ),
                                      i = d(n, (e) =>
                                        e.map(({ columnNumbers: e }) => e)
                                      ),
                                      s = (function (e, t) {
                                        let n = [
                                            ...t.map((e) => e.start - 1),
                                            ...t.map((e) => e.end),
                                          ],
                                          r = e;
                                        return (
                                          n.forEach((e) => {
                                            let t = [],
                                              n = 0;
                                            r.forEach((r) => {
                                              let i = n,
                                                o = n + r.content.length;
                                              if (i < e && e < o) {
                                                let n = e - i,
                                                  o = r.content.slice(0, n),
                                                  s = r.content.slice(n);
                                                t.push(
                                                  Object.assign(
                                                    Object.assign({}, r),
                                                    { content: o }
                                                  )
                                                ),
                                                  t.push(
                                                    Object.assign(
                                                      Object.assign({}, r),
                                                      { content: s }
                                                    )
                                                  );
                                              } else t.push(r);
                                              n = o;
                                            }),
                                              (r = t);
                                          }),
                                          r
                                        );
                                      })(e, [
                                        ...r.prev,
                                        ...r.next,
                                        ...i.prev,
                                        ...i.next,
                                      ]),
                                      a = 0,
                                      l = null,
                                      c = [];
                                    return (
                                      s.forEach((e) => {
                                        let r = z(a, t.prev),
                                          i = z(a, t.next),
                                          o = R(a, n.prev),
                                          s = R(a, n.next);
                                        (l &&
                                          l.focused.prev === r &&
                                          l.focused.next === i &&
                                          l.annotation.prev === o &&
                                          l.annotation.next === s) ||
                                          ((l = {
                                            focused: { prev: r, next: i },
                                            tokens: [],
                                            annotation: { prev: o, next: s },
                                          }),
                                          c.push(l)),
                                          null == l || l.tokens.push(e),
                                          (a += e.content.length);
                                      }),
                                      c.map((e) => ({
                                        focused: e.focused,
                                        tokens: e.tokens,
                                        element: o.createElement(
                                          o.Fragment,
                                          null,
                                          e.tokens.map(
                                            ({ content: e, props: t }, n) =>
                                              o.createElement(
                                                "span",
                                                Object.assign({}, t, {
                                                  key: n + 1,
                                                }),
                                                e
                                              )
                                          )
                                        ),
                                      }))
                                    );
                                  })(t, i, l),
                                },
                                r
                              );
                            }),
                            c = d(s, (e) =>
                              Object.keys(e).map((e) => Number(e))
                            );
                          return Object.assign(
                            {
                              lines: l,
                              firstFocusedLineNumber: d(c, (e) =>
                                Math.min(...e)
                              ),
                              lastFocusedLineNumber: d(c, (e) =>
                                Math.max(...e)
                              ),
                            },
                            i
                          );
                        })(f, h(e, null), b),
                        b,
                        y
                      ),
                      u,
                      r
                    );
                  })(e),
                [t.prev, t.next, n.prev, n.next]
              );
            })({
              highlightedLines: d(e, (e) => e.code.lines),
              focus: d(e, (e) => e.focus),
              annotations: d(e, (e) => e.annotations),
              lang:
                (t = (e) => {
                  var t;
                  return null === (t = null == e ? void 0 : e.code) ||
                    void 0 === t
                    ? void 0
                    : t.lang;
                })(e.prev) || t(e.next),
            });
          })({ tween: t }),
          { element: l, dimensions: c } = (function (e, t, n, r, i, s) {
            let [a, l] = o.useState(null),
              [c, u] = o.useState(0),
              d = (function () {
                let [e, t] = o.useState(void 0);
                return (
                  o.useEffect(() => {
                    function e() {
                      t(window.innerWidth);
                    }
                    return (
                      window.addEventListener("resize", e),
                      () => window.removeEventListener("resize", e)
                    );
                  }, []),
                  e
                );
              })(),
              h = o.useRef(null),
              {
                prevLongestLine: f,
                nextLongestLine: m,
                element: p,
              } = o.useMemo(() => {
                let n = k(e.prev, t.prev),
                  s = k(e.next, t.next),
                  a = (e.prev || e.next).trimEnd().split(C),
                  l = Math.max(a.length, 10);
                if (i) {
                  let e =
                      "focus" === i
                        ? (function (e, t) {
                            let [n, r] = (function (e, t) {
                              if (!e) return [0, t.length - 1];
                              {
                                let t = Object.keys(b(e)).map((e) =>
                                  parseInt(e, 10)
                                );
                                return [Math.min(...t), Math.max(...t)];
                              }
                            })(e.prev, t);
                            return r - n + 1;
                          })(t, a)
                        : i,
                    r = a.length;
                  for (; r < e; ) a.push(""), r++;
                  for (; r > e; ) a.pop(), r--;
                  n && !a.includes(n) && (a[a.length - 1] = n);
                }
                let c = !1,
                  u = o.createElement(
                    "code",
                    { className: "ch-code-scroll-parent" },
                    o.createElement("br", null),
                    a.map((e, t) => {
                      let i = c || e !== n ? void 0 : h;
                      return (
                        (c = c || null != i),
                        o.createElement(
                          "div",
                          { ref: i, key: t },
                          r
                            ? o.createElement(
                                "span",
                                { className: "ch-code-line-number" },
                                "_",
                                l
                              )
                            : void 0,
                          o.createElement(
                            "div",
                            {
                              style: {
                                display: "inline-block",
                                marginLeft: 16,
                              },
                            },
                            o.createElement("span", null, e)
                          )
                        )
                      );
                    }),
                    o.createElement("br", null)
                  );
                return { prevLongestLine: n, nextLongestLine: s, element: u };
              }, [e]),
              v = [...s, d, f, m, n, c];
            return (O(() => {
              var e;
              if (h.current) {
                let t = h.current,
                  r = null == t ? void 0 : t.parentElement,
                  i = r.parentElement,
                  { width: o } = i.getBoundingClientRect();
                if (!o && 0 === c) {
                  let e = new ResizeObserver(([t]) => {
                    let { width: n } = t.contentRect;
                    n && (e.disconnect(), u(1));
                  });
                  return e.observe(i), () => e.disconnect();
                }
                let s = null == t ? void 0 : t.querySelector(":scope > div"),
                  a = null == t ? void 0 : t.querySelector(":scope > span"),
                  d = a ? parseFloat(getComputedStyle(a).width) : 0,
                  p = S(s),
                  g = p / f.length || 1,
                  b = m.length * g,
                  y = null !== (e = _(s)) && void 0 !== e ? e : 20;
                l({
                  containerWidth: S(i.parentElement),
                  containerHeight: _(i.parentElement),
                  contentWidth: S(r.parentElement),
                  contentHeight: _(r.parentElement),
                  lineWidths: [p || b || 200, b || p || 200],
                  lineWidth: [
                    Math.max(p || b || 200, g * n),
                    Math.max(b || p || 200, g * n),
                  ],
                  lineHeight: y,
                  colWidth: g,
                  lineNumberWidth: d,
                  deps: v,
                });
              }
              return () => {};
            }, v),
            !a ||
              (function (e, t) {
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
                return !1;
              })(a.deps, v))
              ? { element: p, dimensions: null }
              : { element: p, dimensions: a };
          })(
            s.code,
            d(t, (e) => e.focus),
            r.minColumns || 10,
            r.lineNumbers || !1,
            r.rows,
            [r.parentHeight]
          );
        return !c || r.debug
          ? o.createElement(es, { element: l, htmlProps: i, debug: r.debug })
          : o.createElement(ea, {
              dimensions: c,
              stepInfo: s,
              config: r,
              progress: n,
              htmlProps: i,
            });
      }
      function es({ element: e, htmlProps: t, debug: n }) {
        return o.createElement(el, { htmlProps: t, measured: !1 }, e);
      }
      function ea({
        config: { minZoom: e = 1, maxZoom: t = 1, horizontalCenter: n = !1 },
        dimensions: r,
        stepInfo: i,
        progress: s,
        htmlProps: a,
        config: l,
      }) {
        var c;
        return o.createElement(
          el,
          { htmlProps: a, measured: !0 },
          o.createElement(Y, {
            codeStep: i,
            progress: s,
            dimensions: r,
            minZoom: e,
            maxZoom: t,
            center: n,
          }),
          l.showCopyButton
            ? o.createElement(ei, {
                className: "ch-code-button",
                content:
                  null === (c = null == i ? void 0 : i.code) || void 0 === c
                    ? void 0
                    : c.prev,
              })
            : void 0
        );
      }
      function el({ htmlProps: e, children: t, measured: n }) {
        return o.createElement(
          "div",
          Object.assign({}, e, {
            className: `ch-code-wrapper ${
              (null == e ? void 0 : e.className) || ""
            }`,
            "data-ch-measured": n,
            children: t,
          })
        );
      }
      function ec() {
        return "undefined" != typeof window ? performance.now() : 0;
      }
      function eu(e, t) {
        var n = t.stiffness,
          r = t.damping,
          i = t.mass,
          o = t.decimals,
          s = t.teleport;
        return {
          X: e,
          k: null != n ? n : 170,
          c: null != r ? r : 26,
          m: null != i ? i : 1,
          teleport: null != s && s,
          decimals: null != o ? o : 2,
        };
      }
      var ed = Math.sqrt,
        eh = Math.exp,
        ef = Math.sin,
        em = Math.cos;
      function ep(e) {
        var t = e.x0,
          n = e.v0,
          r = e.t0,
          i = e.t,
          o = e.k,
          s = e.c,
          a = e.m,
          l = e.X,
          c = t - l,
          u = (i - r) / 1e3,
          d = s * s - 4 * o * a;
        if (d > 0) {
          var h = (-s + ed(d)) / (2 * a),
            f = (-s - ed(d)) / (2 * a),
            m = (c * h - n) / (h - f),
            p = (n - c * f) / (h - f);
          return {
            x: l + m * eh(f * u) + p * eh(h * u),
            v: m * f * eh(f * u) + p * h * eh(h * u),
          };
        }
        if (d < 0) {
          var v = -s / (2 * a),
            g = ed(-d) / (2 * a),
            b = (n - v * c) / g;
          return {
            x: l + eh(v * u) * (c * em(g * u) + b * ef(g * u)),
            v:
              eh(v * u) *
              ((b * g + c * v) * em(g * u) - (c * g - b * v) * ef(g * u)),
          };
        }
        var y = -s / (2 * a),
          x = n - y * c;
        return {
          x: l + (c + x * u) * eh(y * u),
          v: (x + c * y + x * y * u) * eh(y * u),
        };
      }
      var ev = [],
        eg = null;
      function eb(e) {
        var t = ev.push(e);
        return 1 === t && (eg = requestAnimationFrame(ex)), [eg, t - 1];
      }
      function ey(e) {
        var t = e[0],
          n = e[1];
        t === eg && delete ev[n];
      }
      function ex() {
        var e = ec(),
          t = ev;
        (ev = []),
          (0, s.unstable_batchedUpdates)(function () {
            return t.forEach(function (t) {
              return t && t(e);
            });
          });
      }
      var eE = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function ew(e, t) {
        void 0 === t && (t = {});
        var n,
          r,
          i,
          s,
          a,
          l,
          c,
          u,
          d,
          h = o.useState()[1],
          f = eu(e, t),
          m =
            ((u = t),
            null == (d = o.useRef(null)).current &&
              (d.current = {
                config: eu(e, u),
                state: {
                  x0: null != (n = u.from) ? n : e,
                  v0: null != (r = u.initialSpeed) ? r : 0,
                  t0: ec(),
                  raf: null,
                },
              }),
            d.current),
          p = m.state,
          v = m.config,
          g = ec(),
          b = p.x0,
          y = p.v0,
          x = p.t0,
          E = v.k,
          w = v.c,
          j = v.m,
          O = v.X,
          N = f.teleport
            ? { x: O, v: 0 }
            : ep({ x0: b, v0: y, t0: x, t: g, k: E, c: w, m: j, X: O }),
          C = N.x,
          k = N.v,
          S =
            ((i = f.decimals),
            (s = f.X),
            (a = f.k),
            (l = f.c),
            (c = f.m),
            ej(C, i) !== ej(s, i) ||
              ej(
                ep({
                  x0: C,
                  v0: k,
                  t0: g,
                  t: g + 0.016,
                  k: a,
                  c: l,
                  m: c,
                  X: s,
                }).x,
                i
              ) !== ej(s, i));
        return (
          eE(
            function () {
              Object.assign(v, f);
            },
            [f.X, f.k, f.c, f.m, f.teleport]
          ),
          eE(
            function () {
              (p.x0 = C), (p.v0 = k), (p.t0 = g);
            },
            [C, k, g]
          ),
          eE(function () {
            S && null == p.raf
              ? (p.raf = eb(function e(t) {
                  var n = p.x0,
                    r = p.v0,
                    i = p.t0,
                    o = v.k,
                    s = v.c,
                    a = v.m,
                    l = v.X,
                    c = v.decimals;
                  ej(
                    ep({ x0: n, v0: r, t0: i, t: t, k: o, c: s, m: a, X: l }).x,
                    c
                  ) !== ej(n, c)
                    ? ((p.raf = null), h(t))
                    : (p.raf = eb(e));
                }))
              : S || null == p.raf || (ey(p.raf), (p.raf = null));
          }),
          eE(function () {
            return function () {
              null != p.raf && ey(p.raf);
            };
          }, []),
          [ej(C, f.decimals), S]
        );
      }
      function ej(e, t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n;
      }
      let eO = { stiffness: 120, damping: 24, mass: 0.2, decimals: 3 };
      function eN(e) {
        var { step: t, config: n } = e,
          r = a(e, ["step", "config"]);
        let { tween: i, t: s } = (function (e, t = eO) {
          let [{ target: n, steps: r, index: i }, s] = o.useState({
            target: 2,
            steps: [e, e, e],
            index: 0,
          });
          o.useEffect(() => {
            r[r.length - 1] != e &&
              s((t) =>
                (function (e, t, n) {
                  let { steps: r, target: i, index: o } = e,
                    s = r.slice();
                  return n - o < 1
                    ? ((s[2] = t),
                      Object.assign(Object.assign({}, e), { steps: s }))
                    : ((s[0] = r[1]),
                      (s[1] = r[2]),
                      (s[2] = t),
                      Object.assign(Object.assign({}, e), {
                        steps: s,
                        target: i + 1,
                        index: o + 1,
                      }));
                })(t, e, a)
              );
          }, [e]);
          let [a] = ew(n, t),
            l = a - i;
          return l <= 1
            ? { tween: { prev: r[0], next: r[1] }, t: l }
            : { tween: { prev: r[1], next: r[2] }, t: l - 1 };
        })(t, n.spring);
        return o.createElement(
          eo,
          Object.assign({ tween: i, progress: s, config: n }, r)
        );
      }
      let eC = o.forwardRef(function (e, t) {
        var {
            title: n,
            children: r,
            titleBar: i,
            zoom: s = 1,
            overflow: l,
          } = e,
          c = a(e, ["title", "children", "titleBar", "zoom", "overflow"]);
        let u = i || o.createElement(ek, { title: n });
        return o.createElement(
          "div",
          Object.assign({}, c, { ref: t }),
          o.createElement(
            "div",
            { className: "ch-frame" },
            o.createElement("div", { className: "ch-frame-title-bar" }, u),
            o.createElement(
              "div",
              { className: "ch-frame-content" },
              o.createElement(
                "div",
                {
                  className: "ch-frame-zoom",
                  style: { "--ch-frame-zoom": s, overflow: l },
                },
                r
              )
            )
          )
        );
      });
      function ek({ title: e }) {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: "ch-frame-left-bar" },
            o.createElement(eS, null)
          ),
          o.createElement("div", { className: "ch-frame-middle-bar" }, e),
          o.createElement("div", { className: "ch-frame-right-bar" })
        );
      }
      function eS() {
        return o.createElement(
          "div",
          { className: "ch-frame-buttons" },
          o.createElement("div", {
            className: "ch-frame-button ch-frame-button-left",
          }),
          o.createElement("div", { className: "ch-frame-button-space" }),
          o.createElement("div", {
            className: "ch-frame-button ch-frame-button-middle",
          }),
          o.createElement("div", { className: "ch-frame-button-space" }),
          o.createElement("div", {
            className: "ch-frame-button ch-frame-button-right",
          })
        );
      }
      o.forwardRef(function (e, t) {
        var { title: n, children: r, titleBar: i, overflow: s } = e,
          l = a(e, ["title", "children", "titleBar", "overflow"]);
        let c = i || o.createElement(ek, { title: n });
        return o.createElement(
          "div",
          Object.assign({}, l, { ref: t }),
          o.createElement(
            "div",
            { className: "ch-simple-frame" },
            o.createElement("div", { className: "ch-frame-title-bar" }, c),
            r
          )
        );
      });
      let e_ = o.forwardRef(function (e, t) {
        var n,
          {
            northPanel: r,
            southPanel: i,
            terminalPanel: s,
            style: l,
            height: c,
            northButton: u,
            southButton: d,
            className: h,
            onTabClick: f,
          } = e,
          m = a(e, [
            "northPanel",
            "southPanel",
            "terminalPanel",
            "style",
            "height",
            "northButton",
            "southButton",
            "className",
            "onTabClick",
          ]);
        return o.createElement(
          "div",
          Object.assign({ ref: t }, m, {
            className: "ch-editor-frame",
            style: l,
          }),
          o.createElement(
            "div",
            { className: "ch-frame-title-bar" },
            o.createElement(eL, {
              tabs: r.tabs,
              showFrameButtons: !0,
              button: u,
              panel: "north",
              onTabClick: f,
            })
          ),
          o.createElement("div", {
            "data-ch-panel": "north",
            style: r.style,
            children: r.children,
          }),
          i &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                {
                  className: "ch-frame-title-bar",
                  style: {
                    transform:
                      null === (n = i.style) || void 0 === n
                        ? void 0
                        : n.transform,
                  },
                },
                o.createElement(eL, {
                  tabs: i.tabs,
                  showFrameButtons: !1,
                  button: d,
                  topBorder: !0,
                  panel: "south",
                  onTabClick: f,
                })
              ),
              o.createElement("div", {
                "data-ch-panel": "south",
                children: i.children,
                style: i.style,
              })
            )
        );
      });
      function eL({
        tabs: e,
        button: t,
        showFrameButtons: n,
        topBorder: r,
        panel: i,
        onTabClick: s,
      }) {
        return o.createElement(
          o.Fragment,
          null,
          r && o.createElement("div", { className: "ch-editor-group-border" }),
          n ? o.createElement(eS, null) : o.createElement("div", null),
          e.map(({ title: e, active: t, style: n }) =>
            o.createElement(
              "div",
              {
                key: e,
                title: e,
                "data-ch-tab": i,
                "data-active": t,
                className: "ch-editor-tab",
                style: n,
                onClick: s && (() => s(e)),
              },
              o.createElement(eP, { title: e })
            )
          ),
          o.createElement("div", { style: { flex: 1, minWidth: "0.8em" } }),
          t
        );
      }
      function eP({ title: e }) {
        if (!e) return o.createElement("div", null);
        let t = e.lastIndexOf("/") + 1,
          n = e.substring(t),
          r = e.substring(0, t);
        return o.createElement(
          "div",
          null,
          o.createElement("span", { style: { opacity: 0.5 } }, r),
          n
        );
      }
      let eF = o.createElement(
        "span",
        { className: "ch-terminal-prompt" },
        "$"
      );
      function eM({ text: e, progress: t = 1, style: n }) {
        let r = (function (e, t) {
          if (!e) return [];
          let n = Math.round(e.length * t),
            { commands: r } = (function (e) {
              let [, ...t] = e.split(/^\$\s*/gm),
                n = t.map((e) => {
                  let [t, ...n] = e.split(/\r?\n/);
                  return { run: t, output: n.length > 0 ? n.join("\n") : null };
                }),
                r = n[n.length - 1],
                i = n.length > 0 && null != r.output;
              return {
                title: i ? r.run.split(/(\s+)/)[0] : "bash",
                isRunning: i,
                commands: n,
              };
            })(e.slice(0, n));
          return r;
        })(e, t);
        return o.createElement(
          "pre",
          { style: n, className: "ch-terminal-content" },
          r.map(({ run: e, output: t }, n) =>
            o.createElement(
              o.Fragment,
              { key: n },
              o.createElement(
                "div",
                null,
                eF,
                " ",
                o.createElement("span", null, e)
              ),
              t &&
                o.createElement("div", { className: "ch-terminal-output" }, t)
            )
          )
        );
      }
      function e$({
        prev: e = "",
        prevKey: t,
        next: n = "",
        nextKey: r,
        progress: i,
      }) {
        return o.createElement(
          "div",
          { className: "ch-terminal" },
          o.createElement(
            "div",
            {
              style: {
                position: "relative",
                transform: `translateY(-${100 * i}%)`,
              },
            },
            o.createElement(eM, { text: e, progress: 1, key: t }),
            o.createElement(eM, {
              style: { position: "absolute" },
              text: n,
              progress: i,
              key: r,
            })
          )
        );
      }
      function eI({ steps: e, progress: t }) {
        let n = e.map((e) => e.text),
          r = Math.min(Math.max(Math.floor(t), 0), e.length - 1),
          i = r + 1;
        return o.createElement(e$, {
          prev: n[r],
          prevKey: r,
          next: n[i] || "",
          nextKey: i,
          progress: t % 1,
        });
      }
      function eH({ prev: e, next: t, t: n, backward: r }) {
        let i = (function ({ prev: e, next: t, t: n, backward: r }) {
          return e || t
            ? !e && t
              ? eT * Math.min(4 * n, 1)
              : e && !t
              ? eT * Math.max(1 - 4 * n, 0)
              : eT
            : 0;
        })({ prev: e, next: t, t: n, backward: r });
        return i
          ? o.createElement(
              "div",
              { className: "ch-editor-terminal", style: { height: i } },
              o.createElement(
                "div",
                { className: "ch-editor-terminal-tab" },
                o.createElement("span", null, "Terminal")
              ),
              o.createElement(
                "div",
                { className: "ch-editor-terminal-content" },
                o.createElement(eI, {
                  steps: [{ text: e || "" }, { text: t || "" }],
                  progress: n,
                }),
                ")"
              )
            )
          : null;
      }
      let eT = 150;
      function eA(e) {
        return Array.isArray(e.rows)
          ? Object.assign(Object.assign({}, e), { rows: e.rows[0] })
          : e;
      }
      function ez(e) {
        return Array.isArray(e.rows)
          ? Object.assign(Object.assign({}, e), { rows: e.rows[1] })
          : e;
      }
      function eR({
        prevFile: e,
        nextFile: t,
        t: n,
        codeConfig: r,
        parentHeight: i,
      }) {
        var s;
        let a = Object.assign(
          Object.assign({}, null == r ? void 0 : r.htmlProps),
          {
            style: Object.assign(
              { height: "100%" },
              null === (s = null == r ? void 0 : r.htmlProps) || void 0 === s
                ? void 0
                : s.style
            ),
          }
        );
        return o.createElement(
          eo,
          Object.assign(
            {
              progress: n,
              tween: { prev: e, next: t },
              config: Object.assign(Object.assign({}, r), { parentHeight: i }),
            },
            a
          )
        );
      }
      function eW(e) {
        return e ? f(e.code) : "";
      }
      function eB(e, t, n) {
        var r, i;
        let o = e.northPanel.active,
          s = t.northPanel.active,
          a = null === (r = e.southPanel) || void 0 === r ? void 0 : r.active,
          l = null === (i = t.southPanel) || void 0 === i ? void 0 : i.active,
          c = e.files.find((e) => e.name === o),
          u = t.files.find((e) => e.name === s),
          d = a ? e.files.find((e) => e.name === a) : null,
          h = l ? t.files.find((e) => e.name === l) : null;
        return a || o !== l
          ? l || s !== a
            ? {
                prevNorthFile: o === s ? c : n ? c : u,
                nextNorthFile: o === s ? u : n ? c : u,
                prevSouthFile: a === l ? d : n ? d || h : h || d,
                nextSouthFile: a === l ? h : n ? d || h : h || d,
              }
            : {
                prevNorthFile: c,
                nextNorthFile: c,
                prevSouthFile: d,
                nextSouthFile: u,
              }
          : {
              prevNorthFile: u,
              nextNorthFile: u,
              prevSouthFile: c,
              nextSouthFile: h,
            };
      }
      function eq(e, t, n, r, i, o) {
        let s = e
            ? Object.keys(e)
                .filter((e) => eU(e, n) || !n)
                .map((t) => {
                  let r = n && n[t],
                    s = e[t],
                    a = r ? r.left + (s.left - r.left) * o : s.left;
                  return {
                    active: t === i,
                    title: t,
                    style: {
                      position: "absolute",
                      transform: `translateX(${a}px)`,
                      width: r ? r.width + (s.width - r.width) * o : s.width,
                    },
                  };
                })
            : [],
          a = e
            ? Object.keys(e)
                .filter((e) => n && !eU(e, n))
                .map((t) => {
                  let n = e[t];
                  return {
                    active: t === i,
                    title: t,
                    style: {
                      position: "absolute",
                      transform: `translateX(${n.left}px)`,
                      opacity: o,
                      width: n.width,
                    },
                  };
                })
            : [];
        return (
          e &&
            Object.keys(e)
              .filter((e) => eU(e, r))
              .map((t) => {
                let n = r[t],
                  o = e[t].left - n.left;
                return {
                  active: t === i,
                  title: t,
                  style: {
                    position: "absolute",
                    transform: `translateX(${o}px)`,
                  },
                };
              }),
          [
            ...a,
            ...s,
            ...(n
              ? Object.keys(n)
                  .filter((t) => !eU(t, e))
                  .map((e) => {
                    let t = n[e];
                    return {
                      active: e === i,
                      title: e,
                      style: {
                        position: "absolute",
                        opacity: 1 - o,
                        transform: `translateX(${t.left}px)`,
                        width: t.width,
                      },
                    };
                  })
              : []),
          ]
        );
      }
      function eU(e, t) {
        return t && e && e in t;
      }
      let eX = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function eD(e, t) {
        var n;
        let r = e.querySelector("[data-ch-panel='north']"),
          i = e.querySelector("[data-ch-panel='south']");
        return {
          titleBarHeight: e
            .querySelector(".ch-frame-title-bar")
            .getBoundingClientRect().height,
          northHeight: r.getBoundingClientRect().height,
          northKey: t.northPanel.active,
          southHeight:
            (null == i ? void 0 : i.getBoundingClientRect().height) || null,
          southKey:
            null === (n = t.southPanel) || void 0 === n ? void 0 : n.active,
        };
      }
      function eG(e, t) {
        var n;
        let r = Array.from(e.querySelectorAll("[data-ch-tab='north']")),
          i = Array.from(e.querySelectorAll("[data-ch-tab='south']"));
        return {
          northTabs: eK(r, t.northPanel.active),
          southTabs: eK(
            i,
            null === (n = t.southPanel) || void 0 === n ? void 0 : n.active
          ),
        };
      }
      function eK(e, t) {
        if (!e[0]) return null;
        let n = e[0].parentElement.getBoundingClientRect().left,
          r = {};
        return (
          e.forEach((e) => {
            let i = e.getAttribute("title"),
              o = e.getBoundingClientRect();
            r[i] = { left: o.left - n, width: o.width, active: i === t };
          }),
          r
        );
      }
      function eV({ files: e, startingFileName: t }) {
        let [n, r] = o.useState(() => e.find((e) => e.name === t));
        return o.createElement(
          "div",
          { className: "ch-code-browser" },
          o.createElement(eJ, { files: e, activeFile: n, setActiveFile: r }),
          o.createElement(eQ, { file: n })
        );
      }
      function eJ({ files: e, activeFile: t, setActiveFile: n }) {
        let r = o.useMemo(
          () =>
            (function (e) {
              let t = [];
              for (let n of e) {
                let e = n.name.split("/"),
                  r = t;
                for (let t = 0; t < e.length; t++) {
                  let i = e[t],
                    o = t === e.length - 1,
                    s = r.findIndex((e) => e.name === i);
                  if (-1 === s) {
                    let e = { name: i, children: [], codeFile: void 0 };
                    o && (e.codeFile = n), r.push(e), (r = e.children);
                  } else r = r[s].children;
                }
              }
              return (function e(t) {
                for (let n of t) n.children = e(n.children);
                return t.sort((e, t) => {
                  let n = e.children && e.children.length > 0,
                    r = t.children && t.children.length > 0;
                  return (n && r) || (!n && !r)
                    ? e.name.localeCompare(t.name)
                    : n
                    ? -1
                    : 1;
                });
              })(t);
            })(e),
          [e]
        );
        return o.createElement(
          "div",
          { className: "ch-code-browser-sidebar" },
          o.createElement(eY, { tree: r, activeFile: t, setActiveFile: n })
        );
      }
      function eY({ tree: e, activeFile: t, setActiveFile: n, level: r = 0 }) {
        return o.createElement(
          o.Fragment,
          null,
          e.map((e) =>
            o.createElement(eZ, {
              key: e.name,
              node: e,
              activeFile: t,
              setActiveFile: n,
              level: r,
            })
          )
        );
      }
      function eZ({ node: e, activeFile: t, setActiveFile: n, level: r }) {
        let i = e.children && e.children.length > 0,
          s = e.codeFile === t;
        return i
          ? o.createElement(
              "div",
              null,
              o.createElement(
                "div",
                { className: "ch-code-browser-sidebar-folder" },
                o.createElement(
                  "div",
                  { style: { paddingLeft: 1.5 * r + "ch" } },
                  e.name
                )
              ),
              o.createElement(eY, {
                tree: e.children,
                activeFile: t,
                setActiveFile: n,
                level: r + 1,
              })
            )
          : o.createElement(
              "div",
              null,
              o.createElement(
                "div",
                {
                  className: "ch-code-browser-sidebar-file",
                  "data-selected": s,
                  onClick: () => n(e.codeFile),
                },
                o.createElement(
                  "div",
                  { style: { paddingLeft: 1.5 * r + "ch" } },
                  e.name
                )
              )
            );
      }
      function eQ({ file: e }) {
        return o.createElement(
          "div",
          { className: "ch-code-browser-content" },
          o.createElement(ei, {
            className: "ch-code-browser-button",
            content: f(e.code),
          }),
          e.code.lines.map((e, t) =>
            o.createElement(
              "div",
              { key: t },
              e.tokens.map((e, t) =>
                o.createElement(
                  "span",
                  Object.assign({ key: t }, e.props),
                  e.content
                )
              ),
              o.createElement("br", null)
            )
          )
        );
      }
      function e0({ style: e, step: t, className: n }) {
        let [r, i] = o.useState(!1),
          [s, a] = o.useState(!0),
          l = o.useRef(null),
          c = t.files;
        return (o.useEffect(() => {
          l.current && !l.current.showModal && a(!1);
        }, []),
        s)
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(e1, {
                className: n,
                style: e,
                onClick: () => {
                  l.current.showModal(),
                    document.body.classList.add("ch-no-scroll"),
                    i(!0);
                },
              }),
              o.createElement(
                "dialog",
                {
                  ref: l,
                  className: "ch-expand-dialog",
                  onClose: () => {
                    i(!1);
                  },
                  onClick: (e) => {
                    e.currentTarget === e.target &&
                      (l.current.close(),
                      document.body.classList.remove("ch-no-scroll"));
                  },
                },
                o.createElement(e2, {
                  onClick: () => {
                    l.current.close(),
                      document.body.classList.remove("ch-no-scroll");
                  },
                }),
                r
                  ? o.createElement(
                      "div",
                      { className: "ch-expand-dialog-content" },
                      o.createElement(eV, {
                        files: c,
                        startingFileName: t.northPanel.active,
                      })
                    )
                  : void 0
              )
            )
          : null;
      }
      function e1({ onClick: e, style: t, className: n }) {
        return o.createElement(
          "button",
          {
            type: "button",
            title: "Expand",
            style: t,
            onClick: e,
            className: n,
          },
          o.createElement(
            "svg",
            {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
            })
          )
        );
      }
      function e2({ onClick: e }) {
        return o.createElement(
          "button",
          {
            onClick: e,
            className: "ch-expand-close",
            type: "button",
            title: "Close",
          },
          o.createElement(
            "svg",
            {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12",
            })
          )
        );
      }
      let e5 = {
        files: [{ code: { lines: [], lang: "js" }, focus: "", name: "" }],
        northPanel: { active: "", tabs: [""], heightRatio: 1 },
      };
      function e4(e) {
        var {
            prev: t = e5,
            next: n,
            t: r,
            backward: i,
            codeConfig: s,
            frameProps: l = {},
          } = e,
          c = a(e, [
            "prev",
            "next",
            "t",
            "backward",
            "codeConfig",
            "frameProps",
          ]);
        let u = o.createRef(),
          { showCopyButton: d, showExpandButton: h } = s,
          {
            northPanel: f,
            southPanel: m,
            northContent: p,
            southContent: v,
          } = (function (e, t, n, r, i, s) {
            var a, l, c, u, d, h, f, m, p;
            let { prevSnapshot: v, nextSnapshot: g } = (function (e, t, n) {
              let [{ prevSnapshot: r, nextSnapshot: i }, s] = o.useState({
                prevSnapshot: null,
                nextSnapshot: null,
              });
              return (
                eX(() => {
                  (r || i) && s({ prevSnapshot: null, nextSnapshot: null });
                }, [t, n]),
                eX(() => {
                  if (r) {
                    if (!i) {
                      let t = e.current;
                      s((e) =>
                        Object.assign(Object.assign({}, e), {
                          nextSnapshot: Object.assign(
                            Object.assign({}, eD(t, n)),
                            eG(t, n)
                          ),
                        })
                      );
                    }
                  } else {
                    let n = e.current;
                    s((e) =>
                      Object.assign(Object.assign({}, e), {
                        prevSnapshot: Object.assign(
                          Object.assign({}, eD(n, t)),
                          eG(n, t)
                        ),
                      })
                    );
                  }
                }),
                { prevSnapshot: r, nextSnapshot: i }
              );
            })(e, t, n);
            if (!v)
              return (function (e, t, n) {
                let r = e.northPanel,
                  i = e.southPanel,
                  {
                    prevNorthFile: s,
                    prevSouthFile: a,
                    nextNorthFile: l,
                    nextSouthFile: c,
                  } = eB(e, t, !0);
                return {
                  northContent: eW(s),
                  northPanel: {
                    tabs: r.tabs.map((e) => ({
                      title: e,
                      active: e === r.active,
                      style: {},
                    })),
                    style: { flexGrow: 1, overflow: "hidden" },
                    children: o.createElement(eR, {
                      codeConfig: eA(n),
                      prevFile: s,
                      nextFile: s,
                      t: 0,
                      parentHeight: "0",
                    }),
                  },
                  southContent: eW(a),
                  southPanel: i && {
                    tabs: i.tabs.map((e) => ({
                      title: e,
                      active: e === i.active,
                      style: {},
                    })),
                    style: { flexGrow: 1, overflow: "hidden" },
                    children: o.createElement(eR, {
                      codeConfig: ez(n),
                      prevFile: a,
                      nextFile: a,
                      t: 0,
                      parentHeight: "0",
                    }),
                  },
                };
              })(t, n, s);
            if (!g || 1 === r)
              return (function (e, t, n) {
                var r;
                let i = t.northPanel,
                  s = t.southPanel,
                  {
                    prevNorthFile: a,
                    prevSouthFile: l,
                    nextNorthFile: c,
                    nextSouthFile: u,
                  } = eB(e, t, !1);
                return (
                  s ||
                    i.active !==
                      (null === (r = null == e ? void 0 : e.southPanel) ||
                      void 0 === r
                        ? void 0
                        : r.active) ||
                    (c = u),
                  {
                    northContent: eW(c),
                    northPanel: {
                      tabs: i.tabs.map((e) => ({
                        title: e,
                        active: e === i.active,
                        style: {},
                      })),
                      style: { flexGrow: 1, overflow: "hidden" },
                      children: o.createElement(eR, {
                        codeConfig: eA(n),
                        prevFile: c,
                        nextFile: c,
                        t: 1,
                        parentHeight: "1",
                      }),
                    },
                    southContent: eW(u),
                    southPanel: s && {
                      tabs: s.tabs.map((e) => ({
                        title: e,
                        active: e === s.active,
                        style: {},
                      })),
                      style: { flexGrow: 1, overflow: "hidden" },
                      children: o.createElement(eR, {
                        codeConfig: ez(n),
                        prevFile: u,
                        nextFile: u,
                        t: 1,
                        parentHeight: "1",
                      }),
                    },
                  }
                );
              })(t, n, s);
            let b = t.southPanel || n.southPanel,
              {
                prevNorthFile: y,
                prevSouthFile: x,
                nextNorthFile: E,
                nextSouthFile: w,
              } = eB(t, n, 0 == r || i),
              { northStyle: j, southStyle: O } =
                null === v.southHeight && null === g.southHeight
                  ? { northStyle: { minHeight: v.northHeight } }
                  : null !== v.southHeight &&
                    null === g.southHeight &&
                    g.northKey !== v.southKey
                  ? {
                      northStyle: {
                        minHeight:
                          ((a = v.northHeight), a + (g.northHeight - a) * r),
                      },
                      southStyle: { minHeight: v.southHeight },
                    }
                  : null !== v.southHeight &&
                    null === g.southHeight &&
                    v.southKey === g.northKey
                  ? {
                      northStyle: { minHeight: v.northHeight },
                      southStyle: {
                        position: "relative",
                        minHeight:
                          ((l = v.southHeight), l + (g.northHeight - l) * r),
                        transform: `translateY(${
                          0 + (-(v.northHeight + v.titleBarHeight) - 0) * r
                        }px)`,
                      },
                    }
                  : null === v.southHeight &&
                    null !== g.southHeight &&
                    v.northKey !== g.southKey
                  ? {
                      northStyle: {
                        minHeight:
                          ((c = v.northHeight), c + (g.northHeight - c) * r),
                      },
                      southStyle: {
                        position: "relative",
                        minHeight: g.southHeight,
                      },
                    }
                  : null === v.southHeight &&
                    null !== g.southHeight &&
                    v.northKey === g.southKey
                  ? {
                      northStyle: { minHeight: g.northHeight },
                      southStyle: {
                        position: "relative",
                        minHeight:
                          ((u = v.northHeight), u + (g.southHeight - u) * r),
                        transform: `translateY(${
                          (d = -(g.northHeight + g.titleBarHeight)) +
                          (0 - d) * r
                        }px)`,
                      },
                    }
                  : {
                      northStyle: {
                        minHeight:
                          ((h = v.northHeight), h + (g.northHeight - h) * r),
                      },
                      southStyle: {
                        minHeight:
                          ((f = v.southHeight), f + (g.southHeight - f) * r),
                      },
                    },
              { northTabs: N, southTabs: C } =
                ((m = y.name),
                (p = null == x ? void 0 : x.name),
                !v.southTabs && eU(p, v.northTabs)
                  ? {
                      northTabs: eq(
                        g.northTabs,
                        g.southTabs,
                        v.southTabs,
                        v.northTabs,
                        m,
                        r
                      ),
                      southTabs: eq(
                        g.southTabs,
                        g.northTabs,
                        v.northTabs,
                        v.southTabs,
                        p,
                        r
                      ),
                    }
                  : !g.southTabs && eU(p, g.northTabs)
                  ? {
                      northTabs: eq(
                        g.southTabs,
                        g.northTabs,
                        v.northTabs,
                        v.southTabs,
                        m,
                        r
                      ),
                      southTabs: eq(
                        g.northTabs,
                        g.southTabs,
                        v.southTabs,
                        v.northTabs,
                        p,
                        r
                      ),
                    }
                  : {
                      northTabs: eq(
                        g.northTabs,
                        g.southTabs,
                        v.northTabs,
                        v.southTabs,
                        m,
                        r
                      ),
                      southTabs: eq(
                        g.southTabs,
                        g.northTabs,
                        v.southTabs,
                        v.northTabs,
                        p,
                        r
                      ),
                    });
            return {
              northContent: eW(E),
              northPanel: {
                tabs: N,
                style: j,
                children: o.createElement(eR, {
                  codeConfig: eA(s),
                  prevFile: y,
                  nextFile: E,
                  t: r,
                  parentHeight: j.height || j.minHeight,
                }),
              },
              southContent: eW(w),
              southPanel: b && {
                tabs: C,
                style: O,
                children: o.createElement(eR, {
                  codeConfig: ez(s),
                  prevFile: x,
                  nextFile: w,
                  t: r,
                  parentHeight:
                    (null == O ? void 0 : O.height) ||
                    (null == O ? void 0 : O.minHeight),
                }),
              },
            };
          })(u, t, n || t, r, i, a(s, ["showCopyButton", "showExpandButton"])),
          [g, b] = o.useState(void 0);
        O(() => {
          var e;
          b(
            null === (e = u.current) || void 0 === e
              ? void 0
              : e.getBoundingClientRect().height
          );
        }, []);
        let y = Object.assign(Object.assign(Object.assign({}, l), c), {
          style: Object.assign(
            Object.assign({}, null == l ? void 0 : l.style),
            null == c ? void 0 : c.style
          ),
        });
        g && ((y.style.height = g), (y.style.maxHeight = g));
        let x = o.createElement(
            o.Fragment,
            null,
            d
              ? o.createElement(ei, {
                  className: "ch-editor-button",
                  content: p,
                })
              : void 0,
            h
              ? o.createElement(e0, {
                  className: "ch-editor-button",
                  step: n || t,
                })
              : void 0
          ),
          E = d
            ? o.createElement(ei, { className: "ch-editor-button", content: v })
            : void 0,
          w = o.createElement(eH, {
            prev: t.terminal,
            next: (n || t).terminal,
            t: r,
            backward: i,
          });
        return o.createElement(
          e_,
          Object.assign({ ref: u }, y, {
            northPanel: f,
            southPanel: m,
            terminalPanel: w,
            northButton: x,
            southButton: E,
          })
        );
      }
      let e3 = { stiffness: 120, damping: 24, mass: 0.2, decimals: 3 };
      function e6(e) {
        var {
            northPanel: t,
            southPanel: n,
            files: r,
            terminal: i,
            springConfig: s,
          } = e,
          l = a(e, [
            "northPanel",
            "southPanel",
            "files",
            "terminal",
            "springConfig",
          ]);
        let {
          prev: c,
          next: u,
          t: d,
        } = (function (e, t = e3) {
          let [{ target: n, steps: r, index: i }, s] = o.useState({
            target: 2,
            steps: [e, e, e],
            index: 0,
          });
          o.useEffect(() => {
            r[r.length - 1] != e &&
              s((t) =>
                (function (e, t, n) {
                  let { steps: r, target: i, index: o } = e,
                    s = r.slice();
                  return n - o < 1
                    ? ((s[2] = t),
                      Object.assign(Object.assign({}, e), { steps: s }))
                    : ((s[0] = r[1]),
                      (s[1] = r[2]),
                      (s[2] = t),
                      Object.assign(Object.assign({}, e), {
                        steps: s,
                        target: i + 1,
                        index: o + 1,
                      }));
                })(t, e, a)
              );
          }, [e]);
          let [a] = ew(n, t),
            l = a - i;
          return l <= 1
            ? { prev: r[0], next: r[1], t: l }
            : { prev: r[1], next: r[2], t: l - 1 };
        })(
          o.useMemo(
            () => ({ northPanel: t, southPanel: n, files: r, terminal: i }),
            [t, n, r, i]
          ),
          s
        );
        return o.createElement(
          e4,
          Object.assign({ t: d, backward: !1, prev: c, next: u }, l)
        );
      }
      function e8(e) {
        var t,
          n,
          { onTabClick: r } = e,
          i = a(e, ["onTabClick"]);
        let s = (function (e) {
            var t, n, r, i, o, s, l, c, u;
            let {
                lineNumbers: d,
                showCopyButton: h,
                showExpandButton: f,
                minZoom: m,
                maxZoom: p,
              } = e,
              v = a(e, [
                "lineNumbers",
                "showCopyButton",
                "showExpandButton",
                "minZoom",
                "maxZoom",
              ]),
              g = Object.assign(Object.assign({}, e.codeConfig), {
                maxZoom:
                  null == p
                    ? null === (t = e.codeConfig) || void 0 === t
                      ? void 0
                      : t.maxZoom
                    : p,
                minZoom:
                  null == m
                    ? null === (n = e.codeConfig) || void 0 === n
                      ? void 0
                      : n.minZoom
                    : m,
                horizontalCenter:
                  null !==
                    (i =
                      null === (r = e.codeConfig) || void 0 === r
                        ? void 0
                        : r.horizontalCenter) && void 0 !== i
                    ? i
                    : e.horizontalCenter,
                lineNumbers:
                  null == d
                    ? null === (o = e.codeConfig) || void 0 === o
                      ? void 0
                      : o.lineNumbers
                    : d,
                showCopyButton:
                  null == h
                    ? null === (s = e.codeConfig) || void 0 === s
                      ? void 0
                      : s.showCopyButton
                    : h,
                showExpandButton:
                  null == f
                    ? null === (l = e.codeConfig) || void 0 === l
                      ? void 0
                      : l.showExpandButton
                    : f,
                rows: e.rows,
                debug:
                  null !== (c = e.debug) && void 0 !== c
                    ? c
                    : null === (u = e.codeConfig) || void 0 === u
                    ? void 0
                    : u.debug,
              });
            return Object.assign(Object.assign({}, v), { codeConfig: g });
          })(i),
          { className: l, style: c, codeConfig: u } = s,
          d = a(s, ["className", "style", "codeConfig"]);
        if (!i.southPanel && 1 === i.files.length && !i.files[0].name)
          return o.createElement(
            "div",
            {
              className: `ch-codeblock not-prose ${l || ""}`,
              "data-ch-theme":
                null === (t = i.codeConfig) || void 0 === t
                  ? void 0
                  : t.themeName,
              style: c,
            },
            o.createElement(eN, {
              className: "ch-code",
              config: u,
              step: d.files[0],
            })
          );
        {
          let e = Object.assign(
            Object.assign({}, null == d ? void 0 : d.frameProps),
            { onTabClick: r }
          );
          return o.createElement(
            "div",
            {
              className: `ch-codegroup not-prose ${l || ""}`,
              "data-ch-theme":
                null === (n = i.codeConfig) || void 0 === n
                  ? void 0
                  : n.themeName,
              style: c,
            },
            o.createElement(
              e6,
              Object.assign({}, d, { frameProps: e, codeConfig: u })
            )
          );
        }
      }
      function e9(e, t, n) {
        let r = t || e.northPanel.active,
          i = e.files.map((e) =>
            e.name === r
              ? Object.assign(Object.assign({}, e), {
                  focus: null === n ? e.focus : n,
                })
              : e
          ),
          o = Object.assign({}, e.northPanel),
          s = e.southPanel && Object.assign({}, e.southPanel);
        return (
          e.northPanel.tabs.includes(r) ? (o.active = r) : s && (s.active = r),
          { files: i, northPanel: o, southPanel: s }
        );
      }
      let e7 = o.createContext({ props: null, setFocus: () => {} }),
        te = o.createContext({
          activatedId: void 0,
          activate: () => {},
          reset: () => {},
        });
      function tt({ onActivation: e, onReset: t, children: n }) {
        let [r, i] = o.useState(void 0),
          s = o.useCallback(
            (t) => {
              i(t.id), e(t);
            },
            [e]
          ),
          a = o.useCallback(() => {
            i(void 0), t();
          }, [t]);
        return o.createElement(
          te.Provider,
          { value: { activate: s, reset: a, activatedId: r } },
          n
        );
      }
      function tn() {
        return o.createElement(
          "svg",
          {
            fill: "currentColor",
            preserveAspectRatio: "xMidYMid meet",
            height: "1em",
            viewBox: "13 10 14 23",
            className: "ch-browser-button ch-browser-back-button",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d: "m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z",
            })
          )
        );
      }
      function tr() {
        return o.createElement(
          "svg",
          {
            fill: "currentColor",
            preserveAspectRatio: "xMidYMid meet",
            height: "1em",
            viewBox: "13 10 14 23",
            className: "ch-browser-button ch-browser-forward-button",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d: "m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z",
            })
          )
        );
      }
      function ti({ href: e }) {
        return o.createElement(
          "a",
          {
            className: "ch-browser-button ch-browser-open-button",
            title: "Open in new tab",
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          o.createElement(
            "svg",
            {
              stroke: "currentColor",
              fill: "currentColor",
              strokeWidth: "0",
              viewBox: "3 3 18 18",
              height: "1em",
              width: "1em",
              className: "ch-browser-open-icon",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("path", {
              d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
            })
          )
        );
      }
      function to({ url: e, linkUrl: t }) {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(eS, null),
          o.createElement(tn, null),
          o.createElement(tr, null),
          o.createElement("input", { value: e || "", readOnly: !0 }),
          o.createElement(ti, { href: t })
        );
      }
      let ts = o.forwardRef(function (e, t) {
        var {
            progress: n = 0,
            backward: r = !1,
            steps: i,
            transition: s = "none",
          } = e,
          l = a(e, ["progress", "backward", "steps", "transition"]);
        let {
          zoom: c,
          displayUrl: u,
          loadUrl: d,
          children: h,
        } = o.useMemo(
          () =>
            i
              ? i.map((e) => {
                  let { displayUrl: t, loadUrl: n } = (function (e, t, n) {
                    let r = "undefined" != typeof window ? window.origin : "",
                      i = e && !0 === n ? r + e : e;
                    return { displayUrl: i, loadUrl: t || i };
                  })(e.url, e.loadUrl, e.prependOrigin);
                  return {
                    zoom: e.zoom || 1,
                    displayUrl: t,
                    loadUrl: n,
                    children: e.children,
                  };
                })
              : [{ zoom: 1 }],
          [i]
        )[Math.round(n)];
        return o.createElement(
          eC,
          Object.assign({}, l, {
            zoom: c,
            className: `ch-mini-browser ${l.className || ""}`,
            style: Object.assign(
              Object.assign(
                {},
                (function ({ progress: e, transition: t }) {
                  if ("slide" === t) {
                    let t = e - Math.floor(e),
                      n = 2 * Math.abs(t - 0.5);
                    return {
                      transform: `translateX(${
                        t <= 0.5 ? -50 * t : 50 - 50 * t
                      }px)`,
                      opacity: n * n,
                    };
                  }
                  return {};
                })({ progress: n, transition: s })
              ),
              l.style
            ),
            titleBar: o.createElement(to, { url: u, linkUrl: d }),
          }),
          h || o.createElement("iframe", { ref: t, src: d })
        );
      });
      function ta(e) {
        var { url: t, loadUrl: n, prependOrigin: r, children: i, zoom: s } = e,
          l = a(e, ["url", "loadUrl", "prependOrigin", "children", "zoom"]);
        let [c, u] = (function ({
          url: e,
          loadUrl: t,
          prependOrigin: n,
          children: r,
          zoom: i,
        }) {
          let [s, a] = o.useState({
            target: 0,
            steps: [
              { url: e, loadUrl: t, prependOrigin: n, children: r, zoom: i },
            ],
          });
          o.useEffect(() => {
            let o = s.steps[s.steps.length - 1];
            (o.url !== e ||
              o.loadUrl !== t ||
              o.prependOrigin !== n ||
              o.children !== r) &&
              a((o) => ({
                target: o.target + 1,
                steps: [
                  ...o.steps,
                  {
                    url: e,
                    loadUrl: t,
                    prependOrigin: n,
                    children: r,
                    zoom: i,
                  },
                ],
              }));
          }, [e, t, n, r, i]);
          let [l] = ew(s.target, { stiffness: 100, decimals: 3 });
          return [s.steps, l];
        })({ url: t, loadUrl: n, prependOrigin: r, children: i, zoom: s });
        return o.createElement(
          ts,
          Object.assign({}, l, { steps: c, progress: u })
        );
      }
      var tl =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {},
        tc = {};
      Object.defineProperty(tc, "__esModule", { value: !0 }),
        (tc.getMainFile = function (e) {
          return "vue-cli" === e
            ? "src/main.js"
            : "angular-cli" === e
            ? "src/main.ts"
            : "create-react-app-typescript" === e
            ? "src/index.tsx"
            : "parcel" === e
            ? "index.html"
            : "gatsby" === e
            ? "src/pages/index.js"
            : "nuxt" === e ||
              "next" === e ||
              "apollo" === e ||
              "reason" === e ||
              "sapper" === e
            ? "package.json"
            : "nest" === e
            ? "src/main.ts"
            : "static" === e
            ? "index.html"
            : "src/index.js";
        });
      var tu = "sandbox.config.json",
        td = (tc.getTemplate = function (e, t) {
          var n = t[tu] || t["/" + tu];
          if (n)
            try {
              var r = JSON.parse(n.content);
              if (r.template) return r.template;
            } catch (e) {}
          var i = e.dependencies,
            o = e.devDependencies,
            s = Object.keys(void 0 === i ? {} : i).concat(
              Object.keys(void 0 === o ? {} : o)
            ),
            a = ["nuxt", "nuxt-edge"];
          if (
            s.some(function (e) {
              return a.indexOf(e) > -1;
            })
          )
            return "nuxt";
          if (s.indexOf("next") > -1) return "next";
          var l = [
            "apollo-server",
            "apollo-server-express",
            "apollo-server-hapi",
            "apollo-server-koa",
            "apollo-server-lambda",
            "apollo-server-micro",
          ];
          if (
            s.some(function (e) {
              return l.indexOf(e) > -1;
            })
          )
            return "apollo";
          if (s.indexOf("ember-cli") > -1) return "ember";
          if (s.indexOf("sapper") > -1) return "sapper";
          var c = Object.keys(t);
          if (
            c.some(function (e) {
              return e.endsWith(".vue");
            })
          )
            return "vue-cli";
          if (
            c.some(function (e) {
              return e.endsWith(".re");
            })
          )
            return "reason";
          if (s.indexOf("gatsby") > -1) return "gatsby";
          if (s.indexOf("parcel-bundler") > -1) return "parcel";
          if (s.indexOf("react-scripts") > -1) return "create-react-app";
          if (s.indexOf("react-scripts-ts") > -1)
            return "create-react-app-typescript";
          if (s.indexOf("@angular/core") > -1) return "angular-cli";
          if (s.indexOf("preact-cli") > -1) return "preact-cli";
          if (s.indexOf("svelte") > -1) return "svelte";
          if (s.indexOf("vue") > -1) return "vue-cli";
          var u = ["@dojo/core", "@dojo/framework"];
          return s.some(function (e) {
            return u.indexOf(e) > -1;
          })
            ? "@dojo/cli-create-app"
            : s.indexOf("cx") > -1
            ? "cxjs"
            : s.indexOf("@nestjs/core") > -1 || s.indexOf("@nestjs/common") > -1
            ? "nest"
            : void 0;
        }),
        th = { exports: {} };
      !(function (e, t) {
        var n,
          r,
          i,
          o = "__lodash_hash_undefined__",
          s = "[object Arguments]",
          a = "[object Array]",
          l = "[object Boolean]",
          c = "[object Date]",
          u = "[object Error]",
          d = "[object Function]",
          h = "[object Map]",
          f = "[object Number]",
          m = "[object Object]",
          p = "[object Promise]",
          v = "[object RegExp]",
          g = "[object Set]",
          b = "[object String]",
          y = "[object WeakMap]",
          x = "[object ArrayBuffer]",
          E = "[object DataView]",
          w = /^\[object .+?Constructor\]$/,
          j = /^(?:0|[1-9]\d*)$/,
          O = {};
        (O["[object Float32Array]"] =
          O["[object Float64Array]"] =
          O["[object Int8Array]"] =
          O["[object Int16Array]"] =
          O["[object Int32Array]"] =
          O["[object Uint8Array]"] =
          O["[object Uint8ClampedArray]"] =
          O["[object Uint16Array]"] =
          O["[object Uint32Array]"] =
            !0),
          (O[s] =
            O[a] =
            O[x] =
            O[l] =
            O[E] =
            O[c] =
            O[u] =
            O[d] =
            O[h] =
            O[f] =
            O[m] =
            O[v] =
            O[g] =
            O[b] =
            O[y] =
              !1);
        var N = "object" == typeof tl && tl && tl.Object === Object && tl,
          C = "object" == typeof self && self && self.Object === Object && self,
          k = N || C || Function("return this")(),
          S = t && !t.nodeType && t,
          _ = S && e && !e.nodeType && e,
          L = _ && _.exports === S,
          P = L && N.process,
          F = (function () {
            try {
              return P && P.binding && P.binding("util");
            } catch (e) {}
          })(),
          M = F && F.isTypedArray;
        function $(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function I(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        var H = Array.prototype,
          T = Function.prototype,
          A = Object.prototype,
          z = k["__core-js_shared__"],
          R = T.toString,
          W = A.hasOwnProperty,
          B = (n = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + n
            : "",
          q = A.toString,
          U = RegExp(
            "^" +
              R.call(W)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          X = L ? k.Buffer : void 0,
          D = k.Symbol,
          G = k.Uint8Array,
          K = A.propertyIsEnumerable,
          V = H.splice,
          J = D ? D.toStringTag : void 0,
          Y = Object.getOwnPropertySymbols,
          Z = X ? X.isBuffer : void 0,
          Q =
            ((r = Object.keys),
            (i = Object),
            function (e) {
              return r(i(e));
            }),
          ee = eO(k, "DataView"),
          et = eO(k, "Map"),
          en = eO(k, "Promise"),
          er = eO(k, "Set"),
          ei = eO(k, "WeakMap"),
          eo = eO(Object, "create"),
          es = ek(ee),
          ea = ek(et),
          el = ek(en),
          ec = ek(er),
          eu = ek(ei),
          ed = D ? D.prototype : void 0,
          eh = ed ? ed.valueOf : void 0;
        function ef(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function em(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ep(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ev(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new ep(); ++t < n; ) this.add(e[t]);
        }
        function eg(e) {
          var t = (this.__data__ = new em(e));
          this.size = t.size;
        }
        function eb(e, t) {
          for (var n = e.length; n--; ) if (eS(e[n][0], t)) return n;
          return -1;
        }
        function ey(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : J && J in Object(e)
            ? (function (e) {
                var t = W.call(e, J),
                  n = e[J];
                try {
                  e[J] = void 0;
                  var r = !0;
                } catch (e) {}
                var i = q.call(e);
                return r && (t ? (e[J] = n) : delete e[J]), i;
              })(e)
            : q.call(e);
        }
        function ex(e) {
          return eI(e) && ey(e) == s;
        }
        function eE(e, t, n, r, i, o) {
          var s = 1 & n,
            a = e.length,
            l = t.length;
          if (a != l && !(s && l > a)) return !1;
          var c = o.get(e);
          if (c && o.get(t)) return c == t;
          var u = -1,
            d = !0,
            h = 2 & n ? new ev() : void 0;
          for (o.set(e, t), o.set(t, e); ++u < a; ) {
            var f = e[u],
              m = t[u];
            if (r) var p = s ? r(m, f, u, t, e, o) : r(f, m, u, e, t, o);
            if (void 0 !== p) {
              if (p) continue;
              d = !1;
              break;
            }
            if (h) {
              if (
                !(function (e, t) {
                  for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                    if (t(e[n], n, e)) return !0;
                  return !1;
                })(t, function (e, t) {
                  if (!h.has(t) && (f === e || i(f, e, n, r, o)))
                    return h.push(t);
                })
              ) {
                d = !1;
                break;
              }
            } else if (!(f === m || i(f, m, n, r, o))) {
              d = !1;
              break;
            }
          }
          return o.delete(e), o.delete(t), d;
        }
        function ew(e) {
          var t;
          return (
            (t = (function (e) {
              return null != e && eM(e.length) && !eF(e)
                ? (function (e, t) {
                    var n,
                      r = eL(e),
                      i = !r && e_(e),
                      o = !r && !i && eP(e),
                      s = !r && !i && !o && eH(e),
                      a = r || i || o || s,
                      l = a
                        ? (function (e, t) {
                            for (var n = -1, r = Array(e); ++n < e; )
                              r[n] = t(n);
                            return r;
                          })(e.length, String)
                        : [],
                      c = l.length;
                    for (var u in e)
                      W.call(e, u) &&
                        !(
                          a &&
                          ("length" == u ||
                            (o && ("offset" == u || "parent" == u)) ||
                            (s &&
                              ("buffer" == u ||
                                "byteLength" == u ||
                                "byteOffset" == u)) ||
                            ((n = null == (n = c) ? 9007199254740991 : n) &&
                              ("number" == typeof u || j.test(u)) &&
                              u > -1 &&
                              u % 1 == 0 &&
                              u < n))
                        ) &&
                        l.push(u);
                    return l;
                  })(e)
                : (function (e) {
                    if (
                      ((t = e && e.constructor),
                      e !== (("function" == typeof t && t.prototype) || A))
                    )
                      return Q(e);
                    var t,
                      n = [];
                    for (var r in Object(e))
                      W.call(e, r) && "constructor" != r && n.push(r);
                    return n;
                  })(e);
            })(e)),
            eL(e)
              ? t
              : (function (e, t) {
                  for (var n = -1, r = t.length, i = e.length; ++n < r; )
                    e[i + n] = t[n];
                  return e;
                })(t, eN(e))
          );
        }
        function ej(e, t) {
          var n,
            r = e.__data__;
          return (
            "string" == (n = typeof t) ||
            "number" == n ||
            "symbol" == n ||
            "boolean" == n
              ? "__proto__" !== t
              : null === t
          )
            ? r["string" == typeof t ? "string" : "hash"]
            : r.map;
        }
        function eO(e, t) {
          var n = null == e ? void 0 : e[t];
          return !(!e$(n) || (B && B in n)) && (eF(n) ? U : w).test(ek(n))
            ? n
            : void 0;
        }
        (ef.prototype.clear = function () {
          (this.__data__ = eo ? eo(null) : {}), (this.size = 0);
        }),
          (ef.prototype.delete = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }),
          (ef.prototype.get = function (e) {
            var t = this.__data__;
            if (eo) {
              var n = t[e];
              return n === o ? void 0 : n;
            }
            return W.call(t, e) ? t[e] : void 0;
          }),
          (ef.prototype.has = function (e) {
            var t = this.__data__;
            return eo ? void 0 !== t[e] : W.call(t, e);
          }),
          (ef.prototype.set = function (e, t) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = eo && void 0 === t ? o : t),
              this
            );
          }),
          (em.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          (em.prototype.delete = function (e) {
            var t = this.__data__,
              n = eb(t, e);
            return (
              !(n < 0) &&
              (n == t.length - 1 ? t.pop() : V.call(t, n, 1), --this.size, !0)
            );
          }),
          (em.prototype.get = function (e) {
            var t = this.__data__,
              n = eb(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (em.prototype.has = function (e) {
            return eb(this.__data__, e) > -1;
          }),
          (em.prototype.set = function (e, t) {
            var n = this.__data__,
              r = eb(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
          }),
          (ep.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new ef(),
                map: new (et || em)(),
                string: new ef(),
              });
          }),
          (ep.prototype.delete = function (e) {
            var t = ej(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          }),
          (ep.prototype.get = function (e) {
            return ej(this, e).get(e);
          }),
          (ep.prototype.has = function (e) {
            return ej(this, e).has(e);
          }),
          (ep.prototype.set = function (e, t) {
            var n = ej(this, e),
              r = n.size;
            return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
          }),
          (ev.prototype.add = ev.prototype.push =
            function (e) {
              return this.__data__.set(e, o), this;
            }),
          (ev.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (eg.prototype.clear = function () {
            (this.__data__ = new em()), (this.size = 0);
          }),
          (eg.prototype.delete = function (e) {
            var t = this.__data__,
              n = t.delete(e);
            return (this.size = t.size), n;
          }),
          (eg.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (eg.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (eg.prototype.set = function (e, t) {
            var n = this.__data__;
            if (n instanceof em) {
              var r = n.__data__;
              if (!et || r.length < 199)
                return r.push([e, t]), (this.size = ++n.size), this;
              n = this.__data__ = new ep(r);
            }
            return n.set(e, t), (this.size = n.size), this;
          });
        var eN = Y
            ? function (e) {
                return null == e
                  ? []
                  : (function (e, t) {
                      for (
                        var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                        ++n < r;

                      ) {
                        var s = e[n];
                        t(s, n, e) && (o[i++] = s);
                      }
                      return o;
                    })(Y((e = Object(e))), function (t) {
                      return K.call(e, t);
                    });
              }
            : function () {
                return [];
              },
          eC = ey;
        function ek(e) {
          if (null != e) {
            try {
              return R.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function eS(e, t) {
          return e === t || (e != e && t != t);
        }
        ((ee && eC(new ee(new ArrayBuffer(1))) != E) ||
          (et && eC(new et()) != h) ||
          (en && eC(en.resolve()) != p) ||
          (er && eC(new er()) != g) ||
          (ei && eC(new ei()) != y)) &&
          (eC = function (e) {
            var t = ey(e),
              n = t == m ? e.constructor : void 0,
              r = n ? ek(n) : "";
            if (r)
              switch (r) {
                case es:
                  return E;
                case ea:
                  return h;
                case el:
                  return p;
                case ec:
                  return g;
                case eu:
                  return y;
              }
            return t;
          });
        var e_ = ex(
            (function () {
              return arguments;
            })()
          )
            ? ex
            : function (e) {
                return eI(e) && W.call(e, "callee") && !K.call(e, "callee");
              },
          eL = Array.isArray,
          eP =
            Z ||
            function () {
              return !1;
            };
        function eF(e) {
          if (!e$(e)) return !1;
          var t = ey(e);
          return (
            t == d ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        }
        function eM(e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        }
        function e$(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        }
        function eI(e) {
          return null != e && "object" == typeof e;
        }
        var eH = M
          ? function (e) {
              return M(e);
            }
          : function (e) {
              return eI(e) && eM(e.length) && !!O[ey(e)];
            };
        e.exports = function (e, t) {
          return (function e(t, n, r, i, o) {
            return (
              t === n ||
              (null != t && null != n && (eI(t) || eI(n))
                ? (function (e, t, n, r, i, o) {
                    var d = eL(e),
                      p = eL(t),
                      y = d ? a : eC(e),
                      w = p ? a : eC(t);
                    (y = y == s ? m : y), (w = w == s ? m : w);
                    var j = y == m,
                      O = w == m,
                      N = y == w;
                    if (N && eP(e)) {
                      if (!eP(t)) return !1;
                      (d = !0), (j = !1);
                    }
                    if (N && !j)
                      return (
                        o || (o = new eg()),
                        d || eH(e)
                          ? eE(e, t, n, r, i, o)
                          : (function (e, t, n, r, i, o, s) {
                              switch (n) {
                                case E:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    break;
                                  (e = e.buffer), (t = t.buffer);
                                case x:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    !o(new G(e), new G(t))
                                  )
                                    break;
                                  return !0;
                                case l:
                                case c:
                                case f:
                                  return eS(+e, +t);
                                case u:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case v:
                                case b:
                                  return e == t + "";
                                case h:
                                  var a = $;
                                case g:
                                  var d = 1 & r;
                                  if ((a || (a = I), e.size != t.size && !d))
                                    break;
                                  var m = s.get(e);
                                  if (m) return m == t;
                                  (r |= 2), s.set(e, t);
                                  var p = eE(a(e), a(t), r, i, o, s);
                                  return s.delete(e), p;
                                case "[object Symbol]":
                                  if (eh) return eh.call(e) == eh.call(t);
                              }
                              return !1;
                            })(e, t, y, n, r, i, o)
                      );
                    if (!(1 & n)) {
                      var C = j && W.call(e, "__wrapped__"),
                        k = O && W.call(t, "__wrapped__");
                      if (C || k) {
                        var S = C ? e.value() : e,
                          _ = k ? t.value() : t;
                        return o || (o = new eg()), i(S, _, n, r, o);
                      }
                    }
                    return (
                      !!N &&
                      (o || (o = new eg()),
                      (function (e, t, n, r, i, o) {
                        var s = 1 & n,
                          a = ew(e),
                          l = a.length;
                        if (l != ew(t).length && !s) return !1;
                        for (var c = l; c--; ) {
                          var u = a[c];
                          if (!(s ? u in t : W.call(t, u))) return !1;
                        }
                        var d = o.get(e);
                        if (d && o.get(t)) return d == t;
                        var h = !0;
                        o.set(e, t), o.set(t, e);
                        for (var f = s; ++c < l; ) {
                          var m = e[(u = a[c])],
                            p = t[u];
                          if (r)
                            var v = s
                              ? r(p, m, u, t, e, o)
                              : r(m, p, u, e, t, o);
                          if (
                            !(void 0 === v ? m === p || i(m, p, n, r, o) : v)
                          ) {
                            h = !1;
                            break;
                          }
                          f || (f = "constructor" == u);
                        }
                        if (h && !f) {
                          var g = e.constructor,
                            b = t.constructor;
                          g != b &&
                            "constructor" in e &&
                            "constructor" in t &&
                            !(
                              "function" == typeof g &&
                              g instanceof g &&
                              "function" == typeof b &&
                              b instanceof b
                            ) &&
                            (h = !1);
                        }
                        return o.delete(e), o.delete(t), h;
                      })(e, t, n, r, i, o))
                    );
                  })(t, n, r, i, e, o)
                : t != t && n != n)
            );
          })(e, t);
        };
      })(th, th.exports);
      var tf = th.exports,
        tm = () => Math.floor(1e6 * Math.random() + 1e6 * Math.random()),
        tp = (e) => {
          try {
            return e.constructor.name;
          } catch (e) {
            return "";
          }
        },
        tv = class {
          constructor(e, t, n) {
            (this.type = e),
              (this.handleMessage = t),
              (this.target = n),
              (this.outgoingMessages = new Set()),
              (this._messageListener = async (e) => {
                var t;
                let { data: n } = e;
                if (
                  n.$type !== this.getTypeId() ||
                  this.outgoingMessages.has(n.$id)
                )
                  return;
                let r = {
                  $originId: this.internalId,
                  $type: this.getTypeId(),
                  $id: n.$id,
                };
                try {
                  let e = await this.handleMessage(n.$data);
                  r.$data = e;
                } catch (e) {
                  e.message || console.error(e),
                    (r.$error = {
                      message: null != (t = e.message) ? t : "Unknown error",
                    });
                }
                e.source ? e.source.postMessage(r, "*") : this._postMessage(r);
              }),
              this.createConnection(),
              (this.internalId = tm()),
              (this.isWorker = "Worker" === tp(n));
          }
          getTypeId() {
            return `p-${this.type}`;
          }
          createConnection() {
            self.addEventListener("message", this._messageListener);
          }
          dispose() {
            self.removeEventListener("message", this._messageListener);
          }
          sendMessage(e) {
            return new Promise((t) => {
              let n = tm(),
                r = {
                  $originId: this.internalId,
                  $type: this.getTypeId(),
                  $data: e,
                  $id: n,
                };
              this.outgoingMessages.add(n);
              let i = (e) => {
                let { data: r } = e;
                r.$type === this.getTypeId() &&
                  r.$id === n &&
                  r.$originId !== this.internalId &&
                  (t(r.$data), self.removeEventListener("message", i));
              };
              self.addEventListener("message", i), this._postMessage(r);
            });
          }
          _postMessage(e) {
            this.isWorker ||
            ("undefined" != typeof DedicatedWorkerGlobalScope &&
              this.target instanceof DedicatedWorkerGlobalScope)
              ? this.target.postMessage(e)
              : this.target.postMessage(e, "*");
          }
        },
        tg = class {
          constructor(e, t) {
            (this.globalListeners = {}),
              (this.globalListenersCount = 0),
              (this.channelListeners = {}),
              (this.channelListenersCount = 0),
              (this.channelId = Math.floor(1e6 * Math.random())),
              (this.frameWindow = e.contentWindow),
              (this.origin = t),
              (this.globalListeners = []),
              (this.channelListeners = []),
              (this.eventListener = this.eventListener.bind(this)),
              "undefined" != typeof window &&
                window.addEventListener("message", this.eventListener);
          }
          cleanup() {
            window.removeEventListener("message", this.eventListener),
              (this.globalListeners = {}),
              (this.channelListeners = {}),
              (this.globalListenersCount = 0),
              (this.channelListenersCount = 0);
          }
          register() {
            this.frameWindow &&
              this.frameWindow.postMessage(
                {
                  type: "register-frame",
                  origin: document.location.origin,
                  id: this.channelId,
                },
                this.origin
              );
          }
          dispatch(e) {
            this.frameWindow &&
              this.frameWindow.postMessage(
                { $id: this.channelId, codesandbox: !0, ...e },
                this.origin
              );
          }
          globalListen(e) {
            if ("function" != typeof e) return () => {};
            let t = this.globalListenersCount;
            return (
              (this.globalListeners[t] = e),
              this.globalListenersCount++,
              () => {
                delete this.globalListeners[t];
              }
            );
          }
          channelListen(e) {
            if ("function" != typeof e) return () => {};
            let t = this.channelListenersCount;
            return (
              (this.channelListeners[t] = e),
              this.channelListenersCount++,
              () => {
                delete this.channelListeners[t];
              }
            );
          }
          eventListener(e) {
            if (e.source !== this.frameWindow) return;
            let t = e.data;
            t.codesandbox &&
              (Object.values(this.globalListeners).forEach((e) => e(t)),
              t.$id === this.channelId &&
                Object.values(this.channelListeners).forEach((e) => e(t)));
          }
        };
      function tb(e = {}, t = {}, n = "/index.js") {
        return JSON.stringify(
          {
            name: "sandpack-project",
            main: n,
            dependencies: e,
            devDependencies: t,
          },
          null,
          2
        );
      }
      var ty = `https://${"0.19.0".replace(
          /\./g,
          "-"
        )}-sandpack.codesandbox.io/`,
        tx = class {
          constructor(e, t, n = {}) {
            var r;
            if (
              ((this.getTranspilerContext = () =>
                new Promise((e) => {
                  let t = this.listen((n) => {
                    "transpiler-context" === n.type && (e(n.data), t());
                  });
                  this.dispatch({ type: "get-transpiler-context" });
                })),
              (this.options = n),
              (this.sandboxInfo = t),
              (this.bundlerURL = n.bundlerURL || ty),
              (this.bundlerState = void 0),
              (this.errors = []),
              (this.status = "initializing"),
              "string" == typeof e)
            ) {
              this.selector = e;
              let t = document.querySelector(e);
              if (!t) throw Error(`No element found for selector '${e}'`);
              (this.element = t),
                (this.iframe = document.createElement("iframe")),
                this.initializeElement();
            } else (this.element = e), (this.iframe = e);
            this.iframe.getAttribute("sandbox") ||
              this.iframe.setAttribute(
                "sandbox",
                "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              );
            let i = n.startRoute
              ? new URL(n.startRoute, this.bundlerURL).toString()
              : this.bundlerURL;
            null == (r = this.iframe.contentWindow) || r.location.replace(i),
              (this.iframeProtocol = new tg(this.iframe, this.bundlerURL)),
              (this.unsubscribeGlobalListener =
                this.iframeProtocol.globalListen((e) => {
                  "initialized" === e.type &&
                    this.iframe.contentWindow &&
                    (this.iframeProtocol.register(),
                    this.options.fileResolver &&
                      (this.fileResolverProtocol = new tv(
                        "file-resolver",
                        async (e) =>
                          "isFile" === e.m
                            ? this.options.fileResolver.isFile(e.p)
                            : this.options.fileResolver.readFile(e.p),
                        this.iframe.contentWindow
                      )),
                    this.updatePreview(this.sandboxInfo, !0));
                })),
              (this.unsubscribeChannelListener =
                this.iframeProtocol.channelListen((e) => {
                  switch (e.type) {
                    case "start":
                      this.errors = [];
                      break;
                    case "status":
                      this.status = e.status;
                      break;
                    case "action":
                      "show-error" === e.action &&
                        (this.errors = [
                          ...this.errors,
                          (function (e) {
                            var t, n;
                            if ("SyntaxError" === e.title) {
                              let {
                                title: t,
                                path: n,
                                message: r,
                                line: i,
                                column: o,
                              } = e;
                              return {
                                title: t,
                                path: n,
                                message: r,
                                line: i,
                                column: o,
                              };
                            }
                            let r = (function (e) {
                              if (e)
                                return e.find((e) => !!e._originalFileName);
                            })(e.payload.frames);
                            if (!r) return { message: e.message };
                            let i = (function (e) {
                                let t =
                                    e._originalScriptCode[
                                      e._originalScriptCode.length - 1
                                    ].lineNumber.toString().length,
                                  n = 2 + t + 3 + e._originalColumnNumber;
                                return e._originalScriptCode.reduce((e, r) => {
                                  let i = r.highlight ? ">" : " ",
                                    o =
                                      r.lineNumber.toString().length === t
                                        ? `${r.lineNumber}`
                                        : ` ${r.lineNumber}`,
                                    s = r.highlight
                                      ? "\n" + " ".repeat(n) + "^"
                                      : "";
                                  return (
                                    e +
                                    "\n" +
                                    i +
                                    " " +
                                    o +
                                    " | " +
                                    r.content +
                                    s
                                  );
                                }, "");
                              })(r),
                              o = r
                                ? ` (${r._originalLineNumber}:${r._originalColumnNumber})`
                                : "";
                            return {
                              message:
                                ((t = r._originalFileName),
                                (n = e.message),
                                `${t}: ${n}${o}
${i}`),
                              title: e.title,
                              path: r._originalFileName,
                              line: r._originalLineNumber,
                              column: r._originalColumnNumber,
                            };
                          })(e),
                        ]);
                      break;
                    case "state":
                      this.bundlerState = e.state;
                  }
                }));
          }
          cleanup() {
            this.unsubscribeChannelListener(),
              this.unsubscribeGlobalListener(),
              this.iframeProtocol.cleanup();
          }
          updateOptions(e) {
            tf(this.options, e) || ((this.options = e), this.updatePreview());
          }
          updatePreview(e = this.sandboxInfo, t) {
            var n, r, o, s;
            this.sandboxInfo = { ...this.sandboxInfo, ...e };
            let a = this.getFiles(),
              l = Object.keys(a).reduce(
                (e, t) => ({ ...e, [t]: { code: a[t].code, path: t } }),
                {}
              ),
              c = JSON.parse(
                tb(
                  this.sandboxInfo.dependencies,
                  this.sandboxInfo.devDependencies,
                  this.sandboxInfo.entry
                )
              );
            try {
              c = JSON.parse(a["/package.json"].code);
            } catch (e) {
              console.error("Could not parse package.json file: " + e.message);
            }
            let u = Object.keys(a).reduce(
              (e, t) => ({ ...e, [t]: { content: a[t].code, path: t } }),
              {}
            );
            this.dispatch({
              type: "compile",
              codesandbox: !0,
              version: 3,
              isInitializationCompile: t,
              modules: l,
              reactDevTools: this.options.reactDevTools,
              externalResources: this.options.externalResources || [],
              hasFileResolver: !!this.options.fileResolver,
              disableDependencyPreprocessing:
                this.sandboxInfo.disableDependencyPreprocessing,
              template: this.sandboxInfo.template || td(c, u),
              showOpenInCodeSandbox:
                null == (n = this.options.showOpenInCodeSandbox) || n,
              showErrorScreen: null == (r = this.options.showErrorScreen) || r,
              showLoadingScreen:
                null == (o = this.options.showLoadingScreen) || o,
              skipEval: this.options.skipEval || !1,
              clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile,
              logLevel: null != (s = this.options.logLevel) ? s : i.Info,
            });
          }
          dispatch(e) {
            this.iframeProtocol.dispatch(e);
          }
          listen(e) {
            return this.iframeProtocol.channelListen(e);
          }
          getCodeSandboxURL() {
            let e = this.getFiles();
            return fetch(
              "https://codesandbox.io/api/v1/sandboxes/define?json=1",
              {
                method: "POST",
                body: JSON.stringify({
                  files: Object.keys(e).reduce(
                    (t, n) => ({
                      ...t,
                      [n.replace("/", "")]: {
                        content: e[n].code,
                        isBinary: !1,
                      },
                    }),
                    {}
                  ),
                }),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
              .then((e) => e.json())
              .then((e) => ({
                sandboxId: e.sandbox_id,
                editorUrl: `https://codesandbox.io/s/${e.sandbox_id}`,
                embedUrl: `https://codesandbox.io/embed/${e.sandbox_id}`,
              }));
          }
          getFiles() {
            let { sandboxInfo: e } = this;
            return void 0 === e.files["/package.json"]
              ? (function (e, t, n, r) {
                  let i = { ...e };
                  if (!i["/package.json"]) {
                    if (!t)
                      throw Error(
                        "No dependencies specified, please specify either a package.json or dependencies."
                      );
                    if (!r)
                      throw Error(
                        "Missing 'entry' parameter. Either specify an entry point, or pass in a package.json with the 'main' field set."
                      );
                    i["/package.json"] = { code: tb(t, n, r) };
                  }
                  return i;
                })(e.files, e.dependencies, e.devDependencies, e.entry)
              : this.sandboxInfo.files;
          }
          initializeElement() {
            if (
              ((this.iframe.style.border = "0"),
              (this.iframe.style.width = this.options.width || "100%"),
              (this.iframe.style.height = this.options.height || "100%"),
              (this.iframe.style.overflow = "hidden"),
              !this.element.parentNode)
            )
              throw Error("Given element does not have a parent.");
            this.element.parentNode.replaceChild(this.iframe, this.element);
          }
        };
      function tE(e) {
        var {
            className: t,
            files: n,
            presetConfig: r,
            show: i,
            children: s,
            style: l,
            frameless: c,
            codeConfig: u,
          } = e,
          d = a(e, [
            "className",
            "files",
            "presetConfig",
            "show",
            "children",
            "style",
            "frameless",
            "codeConfig",
          ]);
        let h = r ? o.createElement(tw, { files: n, presetConfig: r }) : s;
        return o.createElement(
          "div",
          {
            className: "ch-preview" + (t ? " " + t : ""),
            style: l,
            "data-ch-theme": null == u ? void 0 : u.themeName,
          },
          c
            ? h
            : o.createElement(
                ta,
                Object.assign({ loadUrl: i }, d, { children: h })
              )
        );
      }
      function tw({ files: e, presetConfig: t }) {
        let n = o.useRef(null),
          r = o.useRef(null);
        return (
          o.useEffect(() => {
            r.current = new tx(
              n.current,
              Object.assign(Object.assign({}, t), { files: tj(t.files, e) }),
              { showOpenInCodeSandbox: !1 }
            );
          }, []),
          o.useEffect(() => {
            r.current &&
              r.current.updatePreview(
                Object.assign(Object.assign({}, t), { files: tj(t.files, e) })
              );
          }, [e]),
          o.createElement("iframe", { ref: n })
        );
      }
      function tj(e, t) {
        let n = Object.assign({}, e);
        return (
          t.forEach((e) => {
            n["/" + e.name] = {
              code: e.code.lines
                .map((e) => e.tokens.map((e) => e.content).join(""))
                .join("\n"),
            };
          }),
          n
        );
      }
      function tO(e, t) {
        let n = o.Children.toArray(e);
        return {
          stepsChildren: t ? n.slice(0, n.length / 2) : n,
          previewChildren: t ? n.slice(n.length / 2) : void 0,
        };
      }
      function tN(e) {
        var t;
        let n =
          (null === (t = e.rootBounds) || void 0 === t ? void 0 : t.height) ||
          0;
        tC(e.rootBounds, {
          border: `${Math.min(10, n / 2)}px solid ${tk.rootColor}`,
          overflow: "hidden",
          boxSizing: "border-box",
        }),
          tC(e.boundingClientRect, {
            border: `${Math.min(10, e.boundingClientRect.height / 2)}px solid ${
              e.isIntersecting ? tk.enterColor : tk.exitColor
            }`,
            overflow: "hidden",
            boxSizing: "border-box",
          }),
          tC(e.intersectionRect, { backgroundColor: tk.interColor, zIndex: 2 });
      }
      function tC(e, t = {}) {
        let { width: n, left: r, height: i, top: o } = e,
          s = document.createElement("div");
        return (
          (s.style.position = "fixed"),
          (s.style.width = n + "px"),
          (s.style.left = r + "px"),
          (s.style.top = o + "px"),
          (s.style.height = i + "px"),
          (s.style.pointerEvents = "none"),
          (s.style.transition = "opacity 2s ease-in"),
          Object.assign(s.style, t),
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              s.style.opacity = "0";
            })
          ),
          s.addEventListener("transitionend", () => {
            document.body.removeChild(s);
          }),
          document.body.appendChild(s),
          s
        );
      }
      ((r = i || (i = {}))[(r.None = 0)] = "None"),
        (r[(r.Error = 10)] = "Error"),
        (r[(r.Warning = 20)] = "Warning"),
        (r[(r.Info = 30)] = "Info"),
        (r[(r.Debug = 40)] = "Debug");
      let tk = {
          rootColor: "#9428AB",
          enterColor: "#B35C00",
          exitColor: "#035570",
          interColor: "#9CAF00BB",
        },
        tS = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        t_ = o.createContext(void 0),
        tL = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function tP({
        onStepChange: e,
        children: t,
        getRootMargin: n = tM,
        triggerPosition: r,
        debug: i = !1,
      }) {
        let [s, a] = o.useState(),
          l = (function () {
            let e = "object" == typeof window;
            function t() {
              return e ? document.documentElement.clientHeight : void 0;
            }
            let [n, r] = o.useState(t);
            return (
              o.useEffect(() => {
                function e() {
                  r(t());
                }
                return (
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              tS(() => {
                r(t());
              }, []),
              n
            );
          })();
        return (
          tL(() => {
            let t = new IntersectionObserver(
              (t) => {
                (i || window.chDebugScroller) &&
                  (function (e) {
                    e.forEach(tN);
                  })(t),
                  t.forEach((t) => {
                    t.intersectionRatio > 0 && e(+t.target.stepIndex);
                  });
              },
              { rootMargin: n(l || 0, r), threshold: 1e-6, root: null }
            );
            return a(t), () => t.disconnect();
          }, [l]),
          o.createElement(t_.Provider, { value: s }, t)
        );
      }
      function tF(e) {
        var { as: t = "section", index: n } = e,
          r = a(e, ["as", "index"]);
        let i = o.useRef(null),
          s = o.useContext(t_);
        return (
          tL(
            () => (
              s && s.observe(i.current), () => s && s.unobserve(i.current)
            ),
            [s]
          ),
          tL(() => {
            i.current.stepIndex = n;
          }, [n]),
          o.createElement(t, Object.assign(Object.assign({}, r), { ref: i }))
        );
      }
      function tM(e, t = "50%") {
        let n = 0.5 * e;
        return (
          t.endsWith("%")
            ? (n = (parseFloat(t.replace("%", "")) / 100) * e)
            : t.endsWith("px") && (n = parseFloat(t.replace("px", ""))),
          n < 0 && (n = e + n),
          `-${n - 2}px 0px -${e - n - 2}px`
        );
      }
      let t$ = 0;
      function tI({ match: e }) {
        let t = e.map(([e]) => e),
          { isServer: n, matchedIndex: r } = (function (e) {
            let t = "undefined" == typeof window,
              n = e.slice(0, -1);
            "default" !== e[e.length - 1] &&
              console.warn("last media query should be 'default'");
            let [, r] = o.useState(0),
              i = t ? [] : n.map((e) => window.matchMedia(e));
            o.useEffect(() => {
              let e = () => r((e) => e + 1);
              return (
                i.forEach((t) => t.addListener(e)),
                () => i.forEach((t) => t.removeListener(e))
              );
            }, []);
            let s = i.findIndex((e) => e.matches);
            return { isServer: t, matchedIndex: s < 0 ? e.length - 1 : s };
          })(t),
          i = n ? "ssmq-" + t$++ : "";
        return n
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement("style", {
                className: i,
                dangerouslySetInnerHTML: {
                  __html: t
                    .slice()
                    .reverse()
                    .map((e) => {
                      let t = `.${i}.${tH(e)}{display:block}`,
                        n = `.${i}:not(.${tH(e)}){display: none;}`;
                      return "default" === e
                        ? `${t}${n}`
                        : `@media ${e}{${t}${n}}`;
                    })
                    .join("\n"),
                },
              }),
              e.map(([e, t]) =>
                o.createElement(
                  "div",
                  { key: e, className: `${i} ${tH(e)}` },
                  t
                )
              ),
              o.createElement("script", {
                className: i,
                dangerouslySetInnerHTML: {
                  __html: (function (e, t) {
                    let n = e.map(([e]) => e),
                      r = n.map(tH);
                    return `(function() {
  var qs = ${JSON.stringify(n)};
  var clss = ${JSON.stringify(r)};
  var mainCls = "${t}";

  var scrEls = document.getElementsByTagName("script");
  var scrEl = scrEls[scrEls.length - 1];
  var parent = scrEl.parentNode;

  var el = null;
  for (var i = 0; i < qs.length - 1; i++) {
    if (window.matchMedia(qs[i]).matches) {
      el = parent.querySelector(":scope > ." + mainCls + "." + clss[i]);
      break;
    }
  }
  if (!el) {
    var defaultClass = clss.pop();
    el = parent.querySelector(":scope > ." + mainCls + "." + defaultClass);
  }
  el.removeAttribute("class");

  parent.querySelectorAll(":scope > ." + mainCls).forEach(function (e) {
    parent.removeChild(e);
  });
})();`;
                  })(e, i),
                },
              })
            )
          : o.createElement(
              o.Fragment,
              null,
              o.createElement("div", null, e[r][1])
            );
      }
      function tH(e) {
        return (
          "ssmq-" +
          e
            .replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~\s]/g, "")
            .toLowerCase()
        );
      }
      function tT({ editorStep: e, setFocus: t }) {
        let n = a(e, ["preset", "presetConfig"]);
        return o.createElement(
          e8,
          Object.assign({}, n, {
            onTabClick: (e) => {
              t({ fileName: e, focus: null, id: "" });
            },
          })
        );
      }
      function tA({ previewStep: e, allProps: t, editorStep: n }) {
        let r = a(t, ["preset"]);
        return o.createElement(
          tE,
          Object.assign(
            { className: "ch-scrollycoding-preview" },
            r,
            null == e ? void 0 : e.props,
            { files: n.files }
          )
        );
      }
      let tz = o.createContext(null);
      function tR(e) {
        var t,
          { children: n, hasPreviewSteps: r, editorSteps: i } = e,
          s = a(e, ["children", "hasPreviewSteps", "editorSteps"]);
        let { stepsChildren: l, previewChildren: c } = tO(n, r);
        return o.createElement(
          "section",
          {
            className: "ch-scrollycoding-static",
            "data-ch-theme":
              null === (t = null == s ? void 0 : s.codeConfig) || void 0 === t
                ? void 0
                : t.themeName,
          },
          l.map((e, t) =>
            o.createElement(
              tW,
              { key: t, editorStep: i[t], previewStep: c && c[t], allProps: s },
              e
            )
          )
        );
      }
      function tW({ editorStep: e, previewStep: t, allProps: n, children: r }) {
        let [i, s] = o.useState(Object.assign(Object.assign({}, e), n)),
          a = ({ fileName: e, focus: t, id: n }) => {
            let r = e9(i, e, t);
            s(
              Object.assign(Object.assign(Object.assign({}, i), r), {
                selectedId: n,
              })
            );
          };
        return o.createElement(
          tz.Provider,
          {
            value: { editorStep: i, previewStep: t, allProps: n, setFocus: a },
          },
          o.createElement(
            tt,
            {
              onActivation: a,
              onReset: () => s(Object.assign(Object.assign({}, e), n)),
            },
            r
          )
        );
      }
      function tB(e) {
        var {
            children: t,
            editorSteps: n,
            codeConfig: r,
            presetConfig: i,
            start: s = 0,
            className: l,
            style: c,
            hasPreviewSteps: u,
          } = e,
          d = a(e, [
            "children",
            "editorSteps",
            "codeConfig",
            "presetConfig",
            "start",
            "className",
            "style",
            "hasPreviewSteps",
          ]);
        let { stepsChildren: h, previewChildren: f } = tO(t, u),
          m = i || u,
          [p, v] = o.useState({ stepIndex: s, step: n[s] }),
          g = p.step;
        function b(e) {
          v({ stepIndex: e, step: n[e] });
        }
        return o.createElement(
          "section",
          {
            className: `ch-scrollycoding ${
              m ? "ch-scrollycoding-with-preview" : ""
            } ${l || ""}`,
            style: c,
            "data-ch-theme": null == r ? void 0 : r.themeName,
          },
          o.createElement(
            "div",
            { className: "ch-scrollycoding-content" },
            o.createElement(
              tP,
              {
                onStepChange: b,
                triggerPosition: null == r ? void 0 : r.triggerPosition,
              },
              h.map((e, t) =>
                o.createElement(
                  tF,
                  {
                    as: "div",
                    key: t,
                    index: t,
                    onClick: () => b(t),
                    className: "ch-scrollycoding-step-content",
                    "data-selected": t === p.stepIndex ? "true" : void 0,
                  },
                  o.createElement(
                    tt,
                    {
                      onActivation: ({ fileName: e, focus: r }) => {
                        !(function (e, t, r) {
                          let i = e9(n[e], t, r);
                          v(
                            Object.assign(Object.assign({}, p), {
                              stepIndex: e,
                              step: i,
                            })
                          );
                        })(t, e, r);
                      },
                      onReset: () => {
                        b(t);
                      },
                    },
                    e
                  )
                )
              )
            )
          ),
          o.createElement(
            "div",
            { className: "ch-scrollycoding-sticker" },
            o.createElement(
              e8,
              Object.assign({ showExpandButton: !0 }, d, g, {
                codeConfig: r,
                onTabClick: function (e) {
                  let t = e9(p.step, e, null);
                  v(Object.assign(Object.assign({}, p), { step: t }));
                },
              })
            ),
            i
              ? o.createElement(tE, {
                  className: "ch-scrollycoding-preview",
                  files: g.files,
                  presetConfig: i,
                })
              : u
              ? o.createElement(
                  tE,
                  Object.assign(
                    { className: "ch-scrollycoding-preview" },
                    f[p.stepIndex].props
                  )
                )
              : null
          )
        );
      }
      function tq({ children: e, data: t, style: n, lines: r }) {
        let i = r
          .map((e) =>
            e.annotatedGroups
              .flatMap((e) => {
                var t;
                return null === (t = e.prev) || void 0 === t
                  ? void 0
                  : t.groups.flatMap((e) => e.tokens.map((e) => e.content));
              })
              .join("")
          )
          .join("\n");
        return o.createElement(
          "div",
          {
            style: n,
            className: "ch-code-multiline-mark " + (null != t ? t : ""),
          },
          o.createElement("span", {
            className: "ch-code-multiline-mark-border",
          }),
          e,
          o.createElement(ei, { className: "ch-code-button", content: i })
        );
      }
      function tU({ children: e, data: t }) {
        return o.createElement(
          "span",
          {
            className: "ch-code-inline-mark " + (null != t ? t : ""),
            style: {
              background:
                (function (e) {
                  var t, n, r;
                  try {
                    let i = o.Children.toArray(e)[0],
                      s = o.Children.toArray(
                        (null === (t = null == i ? void 0 : i.props) ||
                        void 0 === t
                          ? void 0
                          : t.children) || []
                      )[0],
                      a = o.Children.toArray(
                        (null === (n = null == s ? void 0 : s.props) ||
                        void 0 === n
                          ? void 0
                          : n.children) || []
                      )[0],
                      { color: d } =
                        (null === (r = null == a ? void 0 : a.props) ||
                        void 0 === r
                          ? void 0
                          : r.style) || {};
                    if (d)
                      return (function (e, t) {
                        if (!e) return e;
                        let {
                          r: n,
                          g: r,
                          b: i,
                          a: o,
                        } = (function (e) {
                          if (!e) return;
                          if (!l(e))
                            throw Error(
                              "Invalid color string, must be a valid hex color"
                            );
                          let t = Math.floor((e.length - 1) / 3),
                            [n, r, i, o] = c(e.slice(1), t).map(u);
                          return {
                            r: n,
                            g: r,
                            b: i,
                            a: void 0 !== o ? o / 255 : 1,
                          };
                        })(e);
                        return (function (e) {
                          if (!e) return;
                          let { r: t, g: n, b: r, a: i } = e;
                          return `#${t.toString(16).padStart(2, "0")}${n
                            .toString(16)
                            .padStart(2, "0")}${r
                            .toString(16)
                            .padStart(2, "0")}${Math.round(255 * i)
                            .toString(16)
                            .padStart(2, "0")}`;
                        })({ r: n, g: r, b: i, a: 0.2 * o });
                      })(d, 0);
                    return;
                  } catch (e) {
                    return;
                  }
                })(e) || void 0,
            },
          },
          e
        );
      }
      let tX = {
        Code: function (e) {
          let [t, n] = o.useState(e);
          return o.createElement(
            e8,
            Object.assign({}, t, {
              onTabClick: function (e) {
                let r = e9(t, e, null);
                n(Object.assign(Object.assign({}, t), r));
              },
            })
          );
        },
        Section: function (e) {
          var { children: t, className: n, style: r } = e,
            i = a(e, ["children", "className", "style"]);
          let [s, l] = o.useState(i),
            c = ({ fileName: e, focus: t, id: n }) => {
              let r = e9(s, e, t);
              l(
                Object.assign(Object.assign(Object.assign({}, s), r), {
                  selectedId: n,
                })
              );
            },
            u = a(s, ["selectedId"]);
          return o.createElement(
            "section",
            { className: `ch-section ${n || ""}`, style: r },
            o.createElement(
              e7.Provider,
              { value: { props: u, setFocus: c } },
              o.createElement(tt, { onActivation: c, onReset: () => l(i) }, t)
            )
          );
        },
        SectionLink: function ({ focus: e, file: t, children: n, id: r }) {
          let { activate: i, reset: s, activatedId: a } = o.useContext(te);
          return o.createElement("span", {
            className: "ch-section-link",
            "data-active": a === r,
            children: n,
            onMouseOver: () => i({ fileName: t, focus: e, id: r }),
            onMouseOut: s,
          });
        },
        SectionCode: function (e) {
          let { props: t, setFocus: n } = o.useContext(e7);
          return o.createElement(
            e8,
            Object.assign({}, e, t, {
              onTabClick: (e) => {
                n({ fileName: e, focus: null, id: "" });
              },
            })
          );
        },
        Spotlight: function (e) {
          var t,
            {
              children: n,
              editorSteps: r,
              codeConfig: i,
              start: s = 0,
              presetConfig: l,
              className: c,
              style: u,
              hasPreviewSteps: d,
            } = e,
            h = a(e, [
              "children",
              "editorSteps",
              "codeConfig",
              "start",
              "presetConfig",
              "className",
              "style",
              "hasPreviewSteps",
            ]);
          let { stepsChildren: f, previewChildren: m } = tO(n, d),
            p = l || d,
            [v, g] = o.useState({ stepIndex: s, step: r[s] }),
            b = v.step,
            y = f[0];
          return o.createElement(
            "section",
            {
              className: `ch-spotlight ${
                p ? "ch-spotlight-with-preview" : ""
              } ${c || ""}`,
              style: u,
              "data-ch-theme": i.themeName,
            },
            o.createElement(
              "div",
              { className: "ch-spotlight-tabs" },
              (
                null === (t = null == y ? void 0 : y.props) || void 0 === t
                  ? void 0
                  : t.children
              )
                ? o.createElement("div", null, f[0])
                : null,
              f.map((e, t) =>
                0 === t
                  ? null
                  : o.createElement(
                      "div",
                      {
                        key: t,
                        onClick: () => g({ stepIndex: t, step: r[t] }),
                        className: "ch-spotlight-tab",
                        "data-selected": t === v.stepIndex ? "true" : void 0,
                      },
                      e
                    )
              )
            ),
            o.createElement(
              "div",
              { className: "ch-spotlight-sticker" },
              o.createElement(
                e8,
                Object.assign({}, h, b, {
                  codeConfig: i,
                  onTabClick: function (e) {
                    let t = e9(v.step, e, null);
                    g(Object.assign(Object.assign({}, v), { step: t }));
                  },
                })
              ),
              l
                ? o.createElement(tE, {
                    className: "ch-spotlight-preview",
                    files: b.files,
                    presetConfig: l,
                  })
                : d
                ? o.createElement(
                    tE,
                    Object.assign(
                      { className: "ch-spotlight-preview" },
                      m[v.stepIndex].props
                    )
                  )
                : null
            )
          );
        },
        Scrollycoding: function (e) {
          return o.createElement(tI, {
            match: [
              [
                e.codeConfig.staticMediaQuery,
                o.createElement(tR, Object.assign({}, e)),
              ],
              ["default", o.createElement(tB, Object.assign({}, e))],
            ],
          });
        },
        Preview: tE,
        annotations: {
          box: function ({ children: e, data: t }) {
            return o.createElement(
              "span",
              {
                className: "ch-code-box-annotation",
                style: { outlineColor: "string" == typeof t ? t : void 0 },
              },
              e
            );
          },
          bg: tq,
          label: function ({ children: e, data: t, style: n }) {
            return o.createElement(
              "div",
              { className: "ch-code-label-annotation", style: n },
              e,
              o.createElement(
                "div",
                { className: "ch-code-label-annotation-text" },
                (null == t ? void 0 : t.children) || t
              )
            );
          },
          link: function ({ children: e, isInline: t, style: n, data: r }) {
            let i = (null == r ? void 0 : r.url) || r,
              s = null == r ? void 0 : r.title;
            return o.createElement(
              "a",
              {
                href: i,
                title: s,
                className: t ? "ch-code-inline-link" : "ch-code-link",
                style: n,
              },
              e
            );
          },
          mark: function (e) {
            return e.isInline
              ? o.createElement(tU, Object.assign({}, e))
              : o.createElement(tq, Object.assign({}, e));
          },
          withClass: function ({ children: e, data: t, style: n }) {
            return o.createElement("span", { style: n, className: t }, e);
          },
        },
        Annotation: function () {
          return o.createElement(
            "div",
            null,
            '"error: code hike remark plugin not running or annotation isn\'t at the right place"'
          );
        },
        Slideshow: function (e) {
          var {
              children: t,
              className: n,
              code: r,
              codeConfig: i,
              editorSteps: s,
              autoFocus: l,
              hasPreviewSteps: c,
              start: u = 0,
              onChange: d = () => {},
              presetConfig: h,
              style: f,
              autoPlay: m,
              loop: p = !1,
            } = e,
            v = a(e, [
              "children",
              "className",
              "code",
              "codeConfig",
              "editorSteps",
              "autoFocus",
              "hasPreviewSteps",
              "start",
              "onChange",
              "presetConfig",
              "style",
              "autoPlay",
              "loop",
            ]);
          let { stepsChildren: g, previewChildren: b } = tO(t, c),
            y = h || c,
            x = g.some((e) => {
              var t;
              return null === (t = e.props) || void 0 === t
                ? void 0
                : t.children;
            }),
            E = s.length - 1,
            [w, j] = o.useState(() => {
              let e = N(u, 0, E);
              return { stepIndex: e, step: s[e] };
            }),
            { stepIndex: O, step: C } = w,
            k = O === E;
          function S(e) {
            let t = N(e, 0, E);
            j({ stepIndex: t, step: s[t] });
          }
          function _() {
            j((e) => {
              let t = p
                ? (e.stepIndex + 1) % (E + 1)
                : N(e.stepIndex + 1, 0, E);
              return { stepIndex: t, step: s[t] };
            });
          }
          return (
            o.useEffect(() => {
              d({ index: O });
            }, [O]),
            !(function (e, t) {
              let n = o.useRef(e);
              o.useEffect(() => {
                n.current = e;
              }, [e]),
                o.useEffect(() => {
                  if (!t && 0 !== t) return;
                  let e = setInterval(() => n.current(), t);
                  return () => clearInterval(e);
                }, [t]);
            })(_, m),
            o.createElement(
              "div",
              {
                className: `ch-slideshow ${
                  y ? "ch-slideshow-with-preview" : ""
                } ${n || ""}`,
                style: f,
                "data-ch-theme": i.themeName,
              },
              o.createElement(
                "div",
                { className: "ch-slideshow-slide" },
                o.createElement(
                  e8,
                  Object.assign({}, v, C, {
                    codeConfig: Object.assign(Object.assign({}, i), r),
                    onTabClick: function (e) {
                      let t = e9(C, e, null);
                      j(Object.assign(Object.assign({}, w), { step: t }));
                    },
                  })
                ),
                h
                  ? o.createElement(tE, {
                      className: "ch-slideshow-preview",
                      files: C.files,
                      presetConfig: h,
                    })
                  : c
                  ? o.createElement(
                      tE,
                      Object.assign(
                        { className: "ch-slideshow-preview" },
                        b[O].props
                      )
                    )
                  : null
              ),
              o.createElement(
                "div",
                { className: "ch-slideshow-notes" },
                o.createElement(
                  "div",
                  { className: "ch-slideshow-range" },
                  o.createElement(
                    "button",
                    { onClick: () => S(O - 1), disabled: 0 === O },
                    "Prev"
                  ),
                  o.createElement("input", {
                    max: E,
                    min: 0,
                    step: 1,
                    type: "range",
                    value: O,
                    onChange: (e) => S(+e.target.value),
                    ref: (function (e) {
                      let t = o.useRef(null);
                      return (
                        o.useEffect(() => {
                          e && t.current.focus();
                        }, []),
                        t
                      );
                    })(l),
                    autoFocus: l,
                  }),
                  o.createElement("button", { onClick: _, disabled: k }, "Next")
                ),
                x &&
                  o.createElement(
                    "div",
                    { className: "ch-slideshow-note" },
                    g[O]
                  )
              )
            )
          );
        },
        InlineCode: function (e) {
          var { className: t, codeConfig: n, children: r, code: i } = e,
            s = a(e, ["className", "codeConfig", "children", "code"]);
          let { lines: l } = i,
            c = l.flatMap((e) => e.tokens);
          return o.createElement(
            "span",
            Object.assign(
              {
                "data-ch-theme": n.themeName,
                className: "ch-inline-code not-prose" + (t ? " " + t : ""),
              },
              s
            ),
            o.createElement(
              "code",
              null,
              c.map((e, t) =>
                o.createElement(
                  "span",
                  Object.assign({ key: t }, e.props),
                  e.content
                )
              )
            )
          );
        },
        CodeSlot: function () {
          let e = o.useContext(tz);
          return e ? o.createElement(tT, Object.assign({}, e)) : null;
        },
        PreviewSlot: function () {
          let e = o.useContext(tz);
          return e ? o.createElement(tA, Object.assign({}, e)) : null;
        },
      };
    },
  },
]);
