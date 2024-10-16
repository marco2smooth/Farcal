"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4697],
  {
    30178: function () {},
    45781: function (e, t, n) {
      n.d(t, {
        M: function () {
          return h;
        },
      });
      var r = n(2784),
        o = n(54283);
      function i() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var a = n(24581),
        l = n(38168),
        u = n(16770);
      class c extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function s({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          o = (0, r.useRef)(null),
          i = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: a, left: l } = i.current;
            if (t || !o.current || !e || !r) return;
            o.current.dataset.motionPopId = n;
            let u = document.createElement("style");
            return (
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          r.createElement(
            c,
            { isPresent: t, childRef: o, sizeRef: i },
            r.cloneElement(e, { ref: o })
          )
        );
      }
      let f = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: o,
        custom: i,
        presenceAffectsLayout: a,
        mode: c,
      }) => {
        let f = (0, u.h)(d),
          p = (0, r.useId)(),
          m = (0, r.useMemo)(
            () => ({
              id: p,
              initial: t,
              isPresent: n,
              custom: i,
              onExitComplete: (e) => {
                for (let t of (f.set(e, !0), f.values())) if (!t) return;
                o && o();
              },
              register: (e) => (f.set(e, !1), () => f.delete(e)),
            }),
            a ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || f.size || !o || o();
          }, [n]),
          "popLayout" === c && (e = r.createElement(s, { isPresent: n }, e)),
          r.createElement(l.O.Provider, { value: m }, e)
        );
      };
      function d() {
        return new Map();
      }
      var p = n(96179),
        m = n(18358);
      let v = (e) => e.key || "",
        h = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: l,
          exitBeforeEnter: u,
          presenceAffectsLayout: c = !0,
          mode: s = "sync",
        }) => {
          var d;
          (0, m.k)(!u, "Replace exitBeforeEnter with mode='wait'");
          let h =
              (0, r.useContext)(p.p).forceRender ||
              (function () {
                let e = i(),
                  [t, n] = (0, r.useState)(0),
                  o = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => a.Wi.postRender(o), [o]), t];
              })()[0],
            g = i(),
            w = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            y = w,
            E = (0, r.useRef)(new Map()).current,
            b = (0, r.useRef)(y),
            x = (0, r.useRef)(new Map()).current,
            R = (0, r.useRef)(!0);
          if (
            ((0, o.L)(() => {
              (R.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = v(e);
                    t.set(n, e);
                  });
                })(w, x),
                (b.current = y);
            }),
            (d = () => {
              (R.current = !0), x.clear(), E.clear();
            }),
            (0, r.useEffect)(() => () => d(), []),
            R.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              y.map((e) =>
                r.createElement(
                  f,
                  {
                    key: v(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: s,
                  },
                  e
                )
              )
            );
          y = [...y];
          let M = b.current.map(v),
            C = w.map(v),
            _ = M.length;
          for (let e = 0; e < _; e++) {
            let t = M[e];
            -1 !== C.indexOf(t) || E.has(t) || E.set(t, void 0);
          }
          return (
            "wait" === s && E.size && (y = []),
            E.forEach((e, n) => {
              if (-1 !== C.indexOf(n)) return;
              let o = x.get(n);
              if (!o) return;
              let i = M.indexOf(n),
                a = e;
              a ||
                ((a = r.createElement(
                  f,
                  {
                    key: v(o),
                    isPresent: !1,
                    onExitComplete: () => {
                      E.delete(n);
                      let e = Array.from(x.keys()).filter(
                        (e) => !C.includes(e)
                      );
                      if (
                        (e.forEach((e) => x.delete(e)),
                        (b.current = w.filter((t) => {
                          let r = v(t);
                          return r === n || e.includes(r);
                        })),
                        !E.size)
                      ) {
                        if (!1 === g.current) return;
                        h(), l && l();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: s,
                  },
                  o
                )),
                E.set(n, a)),
                y.splice(i, 0, a);
            }),
            (y = y.map((e) => {
              let t = e.key;
              return E.has(t)
                ? e
                : r.createElement(
                    f,
                    {
                      key: v(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: s,
                    },
                    e
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              E.size ? y : y.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
    9838: function (e, t, n) {
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var r = n(2784),
        o = n(73612),
        i = n(84593);
      function a({ children: e, features: t, strict: n = !1 }) {
        let [, a] = (0, r.useState)(!l(t)),
          u = (0, r.useRef)(void 0);
        if (!l(t)) {
          let { renderer: e, ...n } = t;
          (u.current = e), (0, i.K)(n);
        }
        return (
          (0, r.useEffect)(() => {
            l(t) &&
              t().then(({ renderer: e, ...t }) => {
                (0, i.K)(t), (u.current = e), a(!0);
              });
          }, []),
          r.createElement(
            o.u.Provider,
            { value: { renderer: u.current, strict: n } },
            e
          )
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    78225: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(97489),
        o = n(1788);
      let i = { renderer: n(49538).b, ...r.s, ...o.E };
    },
    83480: function (e, t, n) {
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var r = n(20430),
        o = n(20038);
      let i = (0, r.D)(o.w);
    },
    50457: function (e, t, n) {
      n.d(t, {
        Cp: function () {
          return f;
        },
        RR: function () {
          return u;
        },
        cv: function () {
          return p;
        },
        dp: function () {
          return h;
        },
        dr: function () {
          return v;
        },
        oo: function () {
          return i;
        },
        uY: function () {
          return m;
        },
        x7: function () {
          return l;
        },
      });
      var r = n(6209);
      function o(e, t, n) {
        let o,
          { reference: i, floating: a } = e,
          l = (0, r.Qq)(t),
          u = (0, r.Wh)(t),
          c = (0, r.I4)(u),
          s = (0, r.k3)(t),
          f = "y" === l,
          d = i.x + i.width / 2 - a.width / 2,
          p = i.y + i.height / 2 - a.height / 2,
          m = i[c] / 2 - a[c] / 2;
        switch (s) {
          case "top":
            o = { x: d, y: i.y - a.height };
            break;
          case "bottom":
            o = { x: d, y: i.y + i.height };
            break;
          case "right":
            o = { x: i.x + i.width, y: p };
            break;
          case "left":
            o = { x: i.x - a.width, y: p };
            break;
          default:
            o = { x: i.x, y: i.y };
        }
        switch ((0, r.hp)(t)) {
          case "start":
            o[u] -= m * (n && f ? -1 : 1);
            break;
          case "end":
            o[u] += m * (n && f ? -1 : 1);
        }
        return o;
      }
      let i = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: a = [],
            platform: l,
          } = n,
          u = a.filter(Boolean),
          c = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: f, y: d } = o(s, r, c),
          p = r,
          m = {},
          v = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: a, fn: h } = u[n],
            {
              x: g,
              y: w,
              data: y,
              reset: E,
            } = await h({
              x: f,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: i,
              middlewareData: m,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          if (
            ((f = null != g ? g : f),
            (d = null != w ? w : d),
            (m = { ...m, [a]: { ...m[a], ...y } }),
            E && v <= 50)
          ) {
            v++,
              "object" == typeof E &&
                (E.placement && (p = E.placement),
                E.rects &&
                  (s =
                    !0 === E.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : E.rects),
                ({ x: f, y: d } = o(s, p, c))),
              (n = -1);
            continue;
          }
        }
        return { x: f, y: d, placement: p, strategy: i, middlewareData: m };
      };
      async function a(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: o, y: i, platform: a, rects: l, elements: u, strategy: c } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = (0, r.ku)(t, e),
          v = (0, r.yd)(m),
          h = u[p ? ("floating" === d ? "reference" : "floating") : d],
          g = (0, r.JB)(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(u.floating))),
              boundary: s,
              rootBoundary: f,
              strategy: c,
            })
          ),
          w = "floating" === d ? { ...l.floating, x: o, y: i } : l.reference,
          y = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(u.floating)),
          E = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
            (await (null == a.getScale ? void 0 : a.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = (0, r.JB)(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: y,
                  strategy: c,
                })
              : w
          );
        return {
          top: (g.top - b.top + v.top) / E.y,
          bottom: (b.bottom - g.bottom + v.bottom) / E.y,
          left: (g.left - b.left + v.left) / E.x,
          right: (b.right - g.right + v.right) / E.x,
        };
      }
      let l = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: o,
                placement: i,
                rects: a,
                platform: l,
                elements: u,
                middlewareData: c,
              } = t,
              { element: s, padding: f = 0 } = (0, r.ku)(e, t) || {};
            if (null == s) return {};
            let d = (0, r.yd)(f),
              p = { x: n, y: o },
              m = (0, r.Wh)(i),
              v = (0, r.I4)(m),
              h = await l.getDimensions(s),
              g = "y" === m,
              w = g ? "clientHeight" : "clientWidth",
              y = a.reference[v] + a.reference[m] - p[m] - a.floating[v],
              E = p[m] - a.reference[m],
              b = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(s)),
              x = b ? b[w] : 0;
            (x && (await (null == l.isElement ? void 0 : l.isElement(b)))) ||
              (x = u.floating[w] || a.floating[v]);
            let R = x / 2 - h[v] / 2 - 1,
              M = (0, r.VV)(d[g ? "top" : "left"], R),
              C = (0, r.VV)(d[g ? "bottom" : "right"], R),
              _ = x - h[v] - C,
              k = x / 2 - h[v] / 2 + (y / 2 - E / 2),
              P = (0, r.uZ)(M, k, _),
              D =
                !c.arrow &&
                null != (0, r.hp)(i) &&
                k != P &&
                a.reference[v] / 2 - (k < M ? M : C) - h[v] / 2 < 0,
              T = D ? (k < M ? k - M : k - _) : 0;
            return {
              [m]: p[m] + T,
              data: {
                [m]: P,
                centerOffset: k - P - T,
                ...(D && { alignmentOffset: T }),
              },
              reset: D,
            };
          },
        }),
        u = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, o, i, l, u;
                let {
                    placement: c,
                    middlewareData: s,
                    rects: f,
                    initialPlacement: d,
                    platform: p,
                    elements: m,
                  } = t,
                  {
                    mainAxis: v = !0,
                    crossAxis: h = !0,
                    fallbackPlacements: g,
                    fallbackStrategy: w = "bestFit",
                    fallbackAxisSideDirection: y = "none",
                    flipAlignment: E = !0,
                    ...b
                  } = (0, r.ku)(e, t);
                if (null != (n = s.arrow) && n.alignmentOffset) return {};
                let x = (0, r.k3)(c),
                  R = (0, r.k3)(d) === d,
                  M = await (null == p.isRTL ? void 0 : p.isRTL(m.floating)),
                  C = g || (R || !E ? [(0, r.pw)(d)] : (0, r.gy)(d));
                g || "none" === y || C.push(...(0, r.KX)(d, E, y, M));
                let _ = [d, ...C],
                  k = await a(t, b),
                  P = [],
                  D = (null == (o = s.flip) ? void 0 : o.overflows) || [];
                if ((v && P.push(k[x]), h)) {
                  let e = (0, r.i8)(c, f, M);
                  P.push(k[e[0]], k[e[1]]);
                }
                if (
                  ((D = [...D, { placement: c, overflows: P }]),
                  !P.every((e) => e <= 0))
                ) {
                  let e = ((null == (i = s.flip) ? void 0 : i.index) || 0) + 1,
                    t = _[e];
                  if (t)
                    return {
                      data: { index: e, overflows: D },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (l = D.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : l.placement;
                  if (!n)
                    switch (w) {
                      case "bestFit": {
                        let e =
                          null ==
                          (u = D.map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : u[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = d;
                    }
                  if (c !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        };
      function c(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function s(e) {
        return r.mA.some((t) => e[t] >= 0);
      }
      let f = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "hide",
            options: e,
            async fn(t) {
              let { rects: n } = t,
                { strategy: o = "referenceHidden", ...i } = (0, r.ku)(e, t);
              switch (o) {
                case "referenceHidden": {
                  let e = c(
                    await a(t, { ...i, elementContext: "reference" }),
                    n.reference
                  );
                  return {
                    data: { referenceHiddenOffsets: e, referenceHidden: s(e) },
                  };
                }
                case "escaped": {
                  let e = c(await a(t, { ...i, altBoundary: !0 }), n.floating);
                  return { data: { escapedOffsets: e, escaped: s(e) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      };
      async function d(e, t) {
        let { placement: n, platform: o, elements: i } = e,
          a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)),
          l = (0, r.k3)(n),
          u = (0, r.hp)(n),
          c = "y" === (0, r.Qq)(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          f = a && c ? -1 : 1,
          d = (0, r.ku)(t, e),
          {
            mainAxis: p,
            crossAxis: m,
            alignmentAxis: v,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          u && "number" == typeof v && (m = "end" === u ? -1 * v : v),
          c ? { x: m * f, y: p * s } : { x: p * s, y: m * f }
        );
      }
      let p = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                let { x: n, y: r } = t,
                  o = await d(t, e);
                return { x: n + o.x, y: r + o.y, data: o };
              },
            }
          );
        },
        m = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: o, placement: i } = t,
                  {
                    mainAxis: l = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = (0, r.ku)(e, t),
                  f = { x: n, y: o },
                  d = await a(t, s),
                  p = (0, r.Qq)((0, r.k3)(i)),
                  m = (0, r.Rn)(p),
                  v = f[m],
                  h = f[p];
                if (l) {
                  let e = "y" === m ? "top" : "left",
                    t = "y" === m ? "bottom" : "right",
                    n = v + d[e],
                    o = v - d[t];
                  v = (0, r.uZ)(n, v, o);
                }
                if (u) {
                  let e = "y" === p ? "top" : "left",
                    t = "y" === p ? "bottom" : "right",
                    n = h + d[e],
                    o = h - d[t];
                  h = (0, r.uZ)(n, h, o);
                }
                let g = c.fn({ ...t, [m]: v, [p]: h });
                return { ...g, data: { x: g.x - n, y: g.y - o } };
              },
            }
          );
        },
        v = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: o,
                    placement: i,
                    rects: a,
                    middlewareData: l,
                  } = t,
                  {
                    offset: u = 0,
                    mainAxis: c = !0,
                    crossAxis: s = !0,
                  } = (0, r.ku)(e, t),
                  f = { x: n, y: o },
                  d = (0, r.Qq)(i),
                  p = (0, r.Rn)(d),
                  m = f[p],
                  v = f[d],
                  h = (0, r.ku)(u, t),
                  g =
                    "number" == typeof h
                      ? { mainAxis: h, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...h };
                if (c) {
                  let e = "y" === p ? "height" : "width",
                    t = a.reference[p] - a.floating[e] + g.mainAxis,
                    n = a.reference[p] + a.reference[e] - g.mainAxis;
                  m < t ? (m = t) : m > n && (m = n);
                }
                if (s) {
                  var w, y;
                  let e = "y" === p ? "width" : "height",
                    t = ["top", "left"].includes((0, r.k3)(i)),
                    n =
                      a.reference[d] -
                      a.floating[e] +
                      ((t && (null == (w = l.offset) ? void 0 : w[d])) || 0) +
                      (t ? 0 : g.crossAxis),
                    o =
                      a.reference[d] +
                      a.reference[e] +
                      (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                      (t ? g.crossAxis : 0);
                  v < n ? (v = n) : v > o && (v = o);
                }
                return { [p]: m, [d]: v };
              },
            }
          );
        },
        h = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                let n, o;
                let { placement: i, rects: l, platform: u, elements: c } = t,
                  { apply: s = () => {}, ...f } = (0, r.ku)(e, t),
                  d = await a(t, f),
                  p = (0, r.k3)(i),
                  m = (0, r.hp)(i),
                  v = "y" === (0, r.Qq)(i),
                  { width: h, height: g } = l.floating;
                "top" === p || "bottom" === p
                  ? ((n = p),
                    (o =
                      m ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((o = p), (n = "end" === m ? "top" : "bottom"));
                let w = g - d[n],
                  y = h - d[o],
                  E = !t.middlewareData.shift,
                  b = w,
                  x = y;
                if (v) {
                  let e = h - d.left - d.right;
                  x = m || E ? (0, r.VV)(y, e) : e;
                } else {
                  let e = g - d.top - d.bottom;
                  b = m || E ? (0, r.VV)(w, e) : e;
                }
                if (E && !m) {
                  let e = (0, r.Fp)(d.left, 0),
                    t = (0, r.Fp)(d.right, 0),
                    n = (0, r.Fp)(d.top, 0),
                    o = (0, r.Fp)(d.bottom, 0);
                  v
                    ? (x =
                        h -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, r.Fp)(d.left, d.right)))
                    : (b =
                        g -
                        2 *
                          (0 !== n || 0 !== o
                            ? n + o
                            : (0, r.Fp)(d.top, d.bottom)));
                }
                await s({ ...t, availableWidth: x, availableHeight: b });
                let R = await u.getDimensions(c.floating);
                return h !== R.width || g !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    27567: function (e, t, n) {
      n.d(t, {
        Me: function () {
          return O;
        },
        oo: function () {
          return L;
        },
      });
      var r = n(6209),
        o = n(50457);
      function i(e) {
        return u(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function a(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function l(e) {
        var t;
        return null ==
          (t = (u(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function u(e) {
        return e instanceof Node || e instanceof a(e).Node;
      }
      function c(e) {
        return e instanceof Element || e instanceof a(e).Element;
      }
      function s(e) {
        return e instanceof HTMLElement || e instanceof a(e).HTMLElement;
      }
      function f(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
        );
      }
      function d(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = h(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function p(e) {
        let t = m(),
          n = h(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function m() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function v(e) {
        return ["html", "body", "#document"].includes(i(e));
      }
      function h(e) {
        return a(e).getComputedStyle(e);
      }
      function g(e) {
        return c(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function w(e) {
        if ("html" === i(e)) return e;
        let t = e.assignedSlot || e.parentNode || (f(e) && e.host) || l(e);
        return f(t) ? t.host : t;
      }
      function y(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = w(t);
            return v(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : s(n) && d(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = a(o);
        return i
          ? t.concat(
              l,
              l.visualViewport || [],
              d(o) ? o : [],
              l.frameElement && n ? y(l.frameElement) : []
            )
          : t.concat(o, y(o, [], n));
      }
      function E(e) {
        let t = h(e),
          n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0,
          i = s(e),
          a = i ? e.offsetWidth : n,
          l = i ? e.offsetHeight : o,
          u = (0, r.NM)(n) !== a || (0, r.NM)(o) !== l;
        return u && ((n = a), (o = l)), { width: n, height: o, $: u };
      }
      function b(e) {
        return c(e) ? e : e.contextElement;
      }
      function x(e) {
        let t = b(e);
        if (!s(t)) return (0, r.ze)(1);
        let n = t.getBoundingClientRect(),
          { width: o, height: i, $: a } = E(t),
          l = (a ? (0, r.NM)(n.width) : n.width) / o,
          u = (a ? (0, r.NM)(n.height) : n.height) / i;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: l, y: u }
        );
      }
      let R = (0, r.ze)(0);
      function M(e) {
        let t = a(e);
        return m() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : R;
      }
      function C(e, t, n, o) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let l = e.getBoundingClientRect(),
          u = b(e),
          s = (0, r.ze)(1);
        t && (o ? c(o) && (s = x(o)) : (s = x(e)));
        let f = (void 0 === (i = n) && (i = !1), o && (!i || o === a(u)) && i)
            ? M(u)
            : (0, r.ze)(0),
          d = (l.left + f.x) / s.x,
          p = (l.top + f.y) / s.y,
          m = l.width / s.x,
          v = l.height / s.y;
        if (u) {
          let e = a(u),
            t = o && c(o) ? a(o) : o,
            n = e.frameElement;
          for (; n && o && t !== e; ) {
            let e = x(n),
              t = n.getBoundingClientRect(),
              r = h(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (d *= e.x),
              (p *= e.y),
              (m *= e.x),
              (v *= e.y),
              (d += o),
              (p += i),
              (n = a(n).frameElement);
          }
        }
        return (0, r.JB)({ width: m, height: v, x: d, y: p });
      }
      function _(e) {
        return C(l(e)).left + g(e).scrollLeft;
      }
      function k(e, t, n) {
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            let n = a(e),
              r = l(e),
              o = n.visualViewport,
              i = r.clientWidth,
              u = r.clientHeight,
              c = 0,
              s = 0;
            if (o) {
              (i = o.width), (u = o.height);
              let e = m();
              (!e || (e && "fixed" === t)) &&
                ((c = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: i, height: u, x: c, y: s };
          })(e, n);
        else if ("document" === t)
          o = (function (e) {
            let t = l(e),
              n = g(e),
              o = e.ownerDocument.body,
              i = (0, r.Fp)(
                t.scrollWidth,
                t.clientWidth,
                o.scrollWidth,
                o.clientWidth
              ),
              a = (0, r.Fp)(
                t.scrollHeight,
                t.clientHeight,
                o.scrollHeight,
                o.clientHeight
              ),
              u = -n.scrollLeft + _(e),
              c = -n.scrollTop;
            return (
              "rtl" === h(o).direction &&
                (u += (0, r.Fp)(t.clientWidth, o.clientWidth) - i),
              { width: i, height: a, x: u, y: c }
            );
          })(l(e));
        else if (c(t))
          o = (function (e, t) {
            let n = C(e, !0, "fixed" === t),
              o = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              a = s(e) ? x(e) : (0, r.ze)(1),
              l = e.clientWidth * a.x;
            return {
              width: l,
              height: e.clientHeight * a.y,
              x: i * a.x,
              y: o * a.y,
            };
          })(t, n);
        else {
          let n = M(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(o);
      }
      function P(e, t) {
        return s(e) && "fixed" !== h(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function D(e, t) {
        let n = a(e);
        if (!s(e)) return n;
        let r = P(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(i(r)) &&
          "static" === h(r).position;

        )
          r = P(r, t);
        return r &&
          ("html" === i(r) ||
            ("body" === i(r) && "static" === h(r).position && !p(r)))
          ? n
          : r ||
              (function (e) {
                let t = w(e);
                for (; s(t) && !v(t); ) {
                  if (p(t)) return t;
                  t = w(t);
                }
                return null;
              })(e) ||
              n;
      }
      let T = async function (e) {
          let { reference: t, floating: n, strategy: o } = e,
            a = this.getOffsetParent || D,
            u = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let o = s(t),
                a = l(t),
                u = "fixed" === n,
                c = C(e, !0, u, t),
                f = { scrollLeft: 0, scrollTop: 0 },
                p = (0, r.ze)(0);
              if (o || (!o && !u)) {
                if ((("body" !== i(t) || d(a)) && (f = g(t)), o)) {
                  let e = C(t, !0, u, t);
                  (p.x = e.x + t.clientLeft), (p.y = e.y + t.clientTop);
                } else a && (p.x = _(a));
              }
              return {
                x: c.left + f.scrollLeft - p.x,
                y: c.top + f.scrollTop - p.y,
                width: c.width,
                height: c.height,
              };
            })(t, await a(n), o),
            floating: { x: 0, y: 0, ...(await u(n)) },
          };
        },
        A = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: o } = e,
              a = s(n),
              u = l(n);
            if (n === u) return t;
            let c = { scrollLeft: 0, scrollTop: 0 },
              f = (0, r.ze)(1),
              p = (0, r.ze)(0);
            if (
              (a || (!a && "fixed" !== o)) &&
              (("body" !== i(n) || d(u)) && (c = g(n)), s(n))
            ) {
              let e = C(n);
              (f = x(n)), (p.x = e.x + n.clientLeft), (p.y = e.y + n.clientTop);
            }
            return {
              width: t.width * f.x,
              height: t.height * f.y,
              x: t.x * f.x - c.scrollLeft * f.x + p.x,
              y: t.y * f.y - c.scrollTop * f.y + p.y,
            };
          },
          getDocumentElement: l,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: o, strategy: a } = e,
              l = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = y(e, [], !1).filter(
                          (e) => c(e) && "body" !== i(e)
                        ),
                        o = null,
                        a = "fixed" === h(e).position,
                        l = a ? w(e) : e;
                      for (; c(l) && !v(l); ) {
                        let t = h(l),
                          n = p(l);
                        n || "fixed" !== t.position || (o = null),
                          (
                            a
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (d(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = w(t);
                                    return (
                                      !(r === n || !c(r) || v(r)) &&
                                      ("fixed" === h(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (o = t),
                          (l = w(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                o,
              ],
              u = l[0],
              s = l.reduce((e, n) => {
                let o = k(t, n, a);
                return (
                  (e.top = (0, r.Fp)(o.top, e.top)),
                  (e.right = (0, r.VV)(o.right, e.right)),
                  (e.bottom = (0, r.VV)(o.bottom, e.bottom)),
                  (e.left = (0, r.Fp)(o.left, e.left)),
                  e
                );
              }, k(t, u, a));
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: D,
          getElementRects: T,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return E(e);
          },
          getScale: x,
          isElement: c,
          isRTL: function (e) {
            return "rtl" === h(e).direction;
          },
        };
      function O(e, t, n, o) {
        let i;
        void 0 === o && (o = {});
        let {
            ancestorScroll: a = !0,
            ancestorResize: u = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: s = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = o,
          d = b(e),
          p = a || u ? [...(d ? y(d) : []), ...y(t)] : [];
        p.forEach((e) => {
          a && e.addEventListener("scroll", n, { passive: !0 }),
            u && e.addEventListener("resize", n);
        });
        let m =
            d && s
              ? (function (e, t) {
                  let n,
                    o = null,
                    i = l(e);
                  function a() {
                    clearTimeout(n), o && o.disconnect(), (o = null);
                  }
                  return (
                    !(function l(u, c) {
                      void 0 === u && (u = !1), void 0 === c && (c = 1), a();
                      let {
                        left: s,
                        top: f,
                        width: d,
                        height: p,
                      } = e.getBoundingClientRect();
                      if ((u || t(), !d || !p)) return;
                      let m = (0, r.GW)(f),
                        v = (0, r.GW)(i.clientWidth - (s + d)),
                        h = {
                          rootMargin:
                            -m +
                            "px " +
                            -v +
                            "px " +
                            -(0, r.GW)(i.clientHeight - (f + p)) +
                            "px " +
                            -(0, r.GW)(s) +
                            "px",
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1,
                        },
                        g = !0;
                      function w(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== c) {
                          if (!g) return l();
                          t
                            ? l(!1, t)
                            : (n = setTimeout(() => {
                                l(!1, 1e-7);
                              }, 100));
                        }
                        g = !1;
                      }
                      try {
                        o = new IntersectionObserver(w, {
                          ...h,
                          root: i.ownerDocument,
                        });
                      } catch (e) {
                        o = new IntersectionObserver(w, h);
                      }
                      o.observe(e);
                    })(!0),
                    a
                  );
                })(d, n)
              : null,
          v = -1,
          h = null;
        c &&
          ((h = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === d &&
              h &&
              (h.unobserve(t),
              cancelAnimationFrame(v),
              (v = requestAnimationFrame(() => {
                h && h.observe(t);
              }))),
              n();
          })),
          d && !f && h.observe(d),
          h.observe(t));
        let g = f ? C(e) : null;
        return (
          f &&
            (function t() {
              let r = C(e);
              g &&
                (r.x !== g.x ||
                  r.y !== g.y ||
                  r.width !== g.width ||
                  r.height !== g.height) &&
                n(),
                (g = r),
                (i = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            p.forEach((e) => {
              a && e.removeEventListener("scroll", n),
                u && e.removeEventListener("resize", n);
            }),
              m && m(),
              h && h.disconnect(),
              (h = null),
              f && cancelAnimationFrame(i);
          }
        );
      }
      let L = (e, t, n) => {
        let r = new Map(),
          i = { platform: A, ...n },
          a = { ...i.platform, _c: r };
        return (0, o.oo)(e, t, { ...i, platform: a });
      };
    },
    68065: function (e, t, n) {
      n.d(t, {
        YF: function () {
          return p;
        },
        x7: function () {
          return l;
        },
      });
      var r = n(50457),
        o = n(27567),
        i = n(2784),
        a = n(28316);
      let l = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: o } = "function" == typeof e ? e(t) : e;
          if (n && {}.hasOwnProperty.call(n, "current")) {
            if (null != n.current)
              return (0, r.x7)({ element: n.current, padding: o }).fn(t);
          } else if (n) return (0, r.x7)({ element: n, padding: o }).fn(t);
          return {};
        },
      });
      var u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function c(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function s(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function f(e, t) {
        let n = s(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        let t = i.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      function p(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: l,
            elements: { reference: p, floating: m } = {},
            transform: v = !0,
            whileElementsMounted: h,
            open: g,
          } = e,
          [w, y] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, b] = i.useState(r);
        c(E, r) || b(r);
        let [x, R] = i.useState(null),
          [M, C] = i.useState(null),
          _ = i.useCallback(
            (e) => {
              e != T.current && ((T.current = e), R(e));
            },
            [R]
          ),
          k = i.useCallback(
            (e) => {
              e !== A.current && ((A.current = e), C(e));
            },
            [C]
          ),
          P = p || x,
          D = m || M,
          T = i.useRef(null),
          A = i.useRef(null),
          O = i.useRef(w),
          L = d(h),
          I = d(l),
          S = i.useCallback(() => {
            if (!T.current || !A.current) return;
            let e = { placement: t, strategy: n, middleware: E };
            I.current && (e.platform = I.current),
              (0, o.oo)(T.current, A.current, e).then((e) => {
                let t = { ...e, isPositioned: !0 };
                F.current &&
                  !c(O.current, t) &&
                  ((O.current = t),
                  a.flushSync(() => {
                    y(t);
                  }));
              });
          }, [E, t, n, I]);
        u(() => {
          !1 === g &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        let F = i.useRef(!1);
        u(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          []
        ),
          u(() => {
            if ((P && (T.current = P), D && (A.current = D), P && D)) {
              if (L.current) return L.current(P, D, S);
              S();
            }
          }, [P, D, S, L]);
        let V = i.useMemo(
            () => ({
              reference: T,
              floating: A,
              setReference: _,
              setFloating: k,
            }),
            [_, k]
          ),
          Z = i.useMemo(() => ({ reference: P, floating: D }), [P, D]),
          W = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!Z.floating) return e;
            let t = f(Z.floating, w.x),
              r = f(Z.floating, w.y);
            return v
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(s(Z.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, v, Z.floating, w.x, w.y]);
        return i.useMemo(
          () => ({ ...w, update: S, refs: V, elements: Z, floatingStyles: W }),
          [w, S, V, Z, W]
        );
      }
    },
    6209: function (e, t, n) {
      n.d(t, {
        Fp: function () {
          return i;
        },
        GW: function () {
          return l;
        },
        I4: function () {
          return h;
        },
        JB: function () {
          return C;
        },
        KX: function () {
          return x;
        },
        NM: function () {
          return a;
        },
        Qq: function () {
          return g;
        },
        Rn: function () {
          return v;
        },
        VV: function () {
          return o;
        },
        Wh: function () {
          return w;
        },
        gy: function () {
          return E;
        },
        hp: function () {
          return m;
        },
        i8: function () {
          return y;
        },
        k3: function () {
          return p;
        },
        ku: function () {
          return d;
        },
        mA: function () {
          return r;
        },
        pw: function () {
          return R;
        },
        uZ: function () {
          return f;
        },
        yd: function () {
          return M;
        },
        ze: function () {
          return u;
        },
      });
      let r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        a = Math.round,
        l = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function f(e, t, n) {
        return i(e, o(t, n));
      }
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function h(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function w(e) {
        return v(g(e));
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        let r = m(e),
          o = w(e),
          i = h(o),
          a =
            "x" === o
              ? r === (n ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
              ? "bottom"
              : "top";
        return t.reference[i] > t.floating[i] && (a = R(a)), [a, R(a)];
      }
      function E(e) {
        let t = R(e);
        return [b(e), t, b(t)];
      }
      function b(e) {
        return e.replace(/start|end/g, (e) => s[e]);
      }
      function x(e, t, n, r) {
        let o = m(e),
          i = (function (e, t, n) {
            let r = ["left", "right"],
              o = ["right", "left"];
            switch (e) {
              case "top":
              case "bottom":
                if (n) return t ? o : r;
                return t ? r : o;
              case "left":
              case "right":
                return t ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(p(e), "start" === n, r);
        return (
          o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(b)))),
          i
        );
      }
      function R(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function M(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function C(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
    },
    76255: function (e, t, n) {
      var r = n(2784);
      let o = r.forwardRef(function (e, t) {
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
            d: "M5 13l4 4L19 7",
          })
        );
      });
      t.Z = o;
    },
    2446: function (e, t, n) {
      var r = n(2784);
      let o = r.forwardRef(function (e, t) {
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
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
          })
        );
      });
      t.Z = o;
    },
    97342: function (e, t, n) {
      var r = n(2784);
      let o = r.forwardRef(function (e, t) {
        return r.createElement(
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
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
            clipRule: "evenodd",
          })
        );
      });
      t.Z = o;
    },
    51430: function (e, t, n) {
      var r = n(2784);
      let o = r.forwardRef(function (e, t) {
        return r.createElement(
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
          r.createElement("path", {
            d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z",
          })
        );
      });
      t.Z = o;
    },
    26800: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return K;
        },
        ck: function () {
          return N;
        },
        fC: function () {
          return W;
        },
        xz: function () {
          return z;
        },
      });
      var r = n(7560),
        o = n(2784),
        i = n(72422),
        a = n(20314),
        l = n(69968),
        u = n(38930),
        c = n(68622),
        s = n(57915),
        f = n(39379),
        d = n(62825),
        p = n(97368);
      let m = "Accordion",
        v = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [h, g, w] = (0, a.B)(m),
        [y, E] = (0, i.b)(m, [w, f.p_]),
        b = (0, f.p_)(),
        x = o.forwardRef((e, t) => {
          let { type: n, ...i } = e;
          return o.createElement(
            h.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === n
              ? o.createElement(P, (0, r.Z)({}, i, { ref: t }))
              : o.createElement(k, (0, r.Z)({}, i, { ref: t }))
          );
        });
      x.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [R, M] = y(m),
        [C, _] = y(m, { collapsible: !1 }),
        k = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: i,
              onValueChange: a = () => {},
              collapsible: l = !1,
              ...u
            } = e,
            [s, f] = (0, c.T)({ prop: n, defaultProp: i, onChange: a });
          return o.createElement(
            R,
            {
              scope: e.__scopeAccordion,
              value: s ? [s] : [],
              onItemOpen: f,
              onItemClose: o.useCallback(() => l && f(""), [l, f]),
            },
            o.createElement(
              C,
              { scope: e.__scopeAccordion, collapsible: l },
              o.createElement(A, (0, r.Z)({}, u, { ref: t }))
            )
          );
        }),
        P = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: i,
              onValueChange: a = () => {},
              ...l
            } = e,
            [u = [], s] = (0, c.T)({ prop: n, defaultProp: i, onChange: a }),
            f = o.useCallback((e) => s((t = []) => [...t, e]), [s]),
            d = o.useCallback(
              (e) => s((t = []) => t.filter((t) => t !== e)),
              [s]
            );
          return o.createElement(
            R,
            {
              scope: e.__scopeAccordion,
              value: u,
              onItemOpen: f,
              onItemClose: d,
            },
            o.createElement(
              C,
              { scope: e.__scopeAccordion, collapsible: !0 },
              o.createElement(A, (0, r.Z)({}, l, { ref: t }))
            )
          );
        }),
        [D, T] = y(m),
        A = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: i,
              dir: a,
              orientation: c = "vertical",
              ...f
            } = e,
            d = o.useRef(null),
            m = (0, l.e)(d, t),
            w = g(n),
            y = "ltr" === (0, p.gm)(a),
            E = (0, u.M)(e.onKeyDown, (e) => {
              var t;
              if (!v.includes(e.key)) return;
              let n = e.target,
                r = w().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = r.findIndex((e) => e.ref.current === n),
                i = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let a = o,
                l = i - 1,
                u = () => {
                  (a = o + 1) > l && (a = 0);
                },
                s = () => {
                  (a = o - 1) < 0 && (a = l);
                };
              switch (e.key) {
                case "Home":
                  a = 0;
                  break;
                case "End":
                  a = l;
                  break;
                case "ArrowRight":
                  "horizontal" === c && (y ? u() : s());
                  break;
                case "ArrowDown":
                  "vertical" === c && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === c && (y ? s() : u());
                  break;
                case "ArrowUp":
                  "vertical" === c && s();
              }
              null === (t = r[a % i].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            D,
            { scope: n, disabled: i, direction: a, orientation: c },
            o.createElement(
              h.Slot,
              { scope: n },
              o.createElement(
                s.WV.div,
                (0, r.Z)({}, f, {
                  "data-orientation": c,
                  ref: m,
                  onKeyDown: i ? void 0 : E,
                })
              )
            )
          );
        }),
        O = "AccordionItem",
        [L, I] = y(O),
        S = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: i, ...a } = e,
            l = T(O, n),
            u = M(O, n),
            c = b(n),
            s = (0, d.M)(),
            p = (i && u.value.includes(i)) || !1,
            m = l.disabled || e.disabled;
          return o.createElement(
            L,
            { scope: n, open: p, disabled: m, triggerId: s },
            o.createElement(
              f.fC,
              (0, r.Z)(
                {
                  "data-orientation": l.orientation,
                  "data-state": (function (e) {
                    return e ? "open" : "closed";
                  })(p),
                },
                c,
                a,
                {
                  ref: t,
                  disabled: m,
                  open: p,
                  onOpenChange: (e) => {
                    e ? u.onItemOpen(i) : u.onItemClose(i);
                  },
                }
              )
            )
          );
        }),
        F = "AccordionTrigger",
        V = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            a = T(m, n),
            l = I(F, n),
            u = _(F, n),
            c = b(n);
          return o.createElement(
            h.ItemSlot,
            { scope: n },
            o.createElement(
              f.xz,
              (0, r.Z)(
                {
                  "aria-disabled": (l.open && !u.collapsible) || void 0,
                  "data-orientation": a.orientation,
                  id: l.triggerId,
                },
                c,
                i,
                { ref: t }
              )
            )
          );
        }),
        Z = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            a = T(m, n),
            l = I("AccordionContent", n),
            u = b(n);
          return o.createElement(
            f.VY,
            (0, r.Z)(
              {
                role: "region",
                "aria-labelledby": l.triggerId,
                "data-orientation": a.orientation,
              },
              u,
              i,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        }),
        W = x,
        N = S,
        z = V,
        K = Z;
    },
    39379: function (e, t, n) {
      n.d(t, {
        Fw: function () {
          return b;
        },
        VY: function () {
          return _;
        },
        fC: function () {
          return M;
        },
        p_: function () {
          return v;
        },
        wy: function () {
          return y;
        },
        xz: function () {
          return C;
        },
      });
      var r = n(7560),
        o = n(2784),
        i = n(38930),
        a = n(72422),
        l = n(68622),
        u = n(24648),
        c = n(69968),
        s = n(57915),
        f = n(80254),
        d = n(62825);
      let p = "Collapsible",
        [m, v] = (0, a.b)(p),
        [h, g] = m(p),
        w = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: i,
              defaultOpen: a,
              disabled: u,
              onOpenChange: c,
              ...f
            } = e,
            [p = !1, m] = (0, l.T)({ prop: i, defaultProp: a, onChange: c });
          return (0, o.createElement)(
            h,
            {
              scope: n,
              disabled: u,
              contentId: (0, d.M)(),
              open: p,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
            },
            (0, o.createElement)(
              s.WV.div,
              (0, r.Z)(
                { "data-state": R(p), "data-disabled": u ? "" : void 0 },
                f,
                { ref: t }
              )
            )
          );
        }),
        y = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...a } = e,
            l = g("CollapsibleTrigger", n);
          return (0, o.createElement)(
            s.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-controls": l.contentId,
                "aria-expanded": l.open || !1,
                "data-state": R(l.open),
                "data-disabled": l.disabled ? "" : void 0,
                disabled: l.disabled,
              },
              a,
              { ref: t, onClick: (0, i.M)(e.onClick, l.onOpenToggle) }
            )
          );
        }),
        E = "CollapsibleContent",
        b = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = g(E, e.__scopeCollapsible);
          return (0, o.createElement)(
            f.z,
            { present: n || a.open },
            ({ present: e }) =>
              (0, o.createElement)(x, (0, r.Z)({}, i, { ref: t, present: e }))
          );
        }),
        x = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: i, children: a, ...l } = e,
            f = g(E, n),
            [d, p] = (0, o.useState)(i),
            m = (0, o.useRef)(null),
            v = (0, c.e)(t, m),
            h = (0, o.useRef)(0),
            w = h.current,
            y = (0, o.useRef)(0),
            b = y.current,
            x = f.open || d,
            M = (0, o.useRef)(x),
            C = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (M.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, u.b)(() => {
              let e = m.current;
              if (e) {
                (C.current = C.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (h.current = t.height),
                  (y.current = t.width),
                  M.current ||
                    ((e.style.transitionDuration =
                      C.current.transitionDuration),
                    (e.style.animationName = C.current.animationName)),
                  p(i);
              }
            }, [f.open, i]),
            (0, o.createElement)(
              s.WV.div,
              (0, r.Z)(
                {
                  "data-state": R(f.open),
                  "data-disabled": f.disabled ? "" : void 0,
                  id: f.contentId,
                  hidden: !x,
                },
                l,
                {
                  ref: v,
                  style: {
                    "--radix-collapsible-content-height": w ? `${w}px` : void 0,
                    "--radix-collapsible-content-width": b ? `${b}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              x && a
            )
          );
        });
      function R(e) {
        return e ? "open" : "closed";
      }
      let M = w,
        C = y,
        _ = b;
    },
    9614: function (e, t, n) {
      n.d(t, {
        oC: function () {
          return tc;
        },
        VY: function () {
          return ti;
        },
        ZA: function () {
          return ta;
        },
        ck: function () {
          return tu;
        },
        wU: function () {
          return td;
        },
        __: function () {
          return tl;
        },
        Uv: function () {
          return to;
        },
        Ee: function () {
          return ts;
        },
        Rk: function () {
          return tf;
        },
        fC: function () {
          return tn;
        },
        Z0: function () {
          return tp;
        },
        Tr: function () {
          return tm;
        },
        tu: function () {
          return th;
        },
        fF: function () {
          return tv;
        },
        xz: function () {
          return tr;
        },
      });
      var r = n(7560),
        o = n(2784),
        i = n(38930),
        a = n(69968),
        l = n(72422),
        u = n(68622),
        c = n(57915),
        s = n(20314),
        f = n(97368),
        d = n(19590),
        p = n(10151),
        m = n(68443),
        v = n(62825),
        h = n(68065),
        g = n(27567),
        w = n(50457);
      let y = (0, o.forwardRef)((e, t) => {
        let { children: n, width: i = 10, height: a = 5, ...l } = e;
        return (0, o.createElement)(
          c.WV.svg,
          (0, r.Z)({}, l, {
            ref: t,
            width: i,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var E = n(85751),
        b = n(24648),
        x = n(89348);
      let R = "Popper",
        [M, C] = (0, l.b)(R),
        [_, k] = M(R),
        P = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: i, ...l } = e,
            u = k("PopperAnchor", n),
            s = (0, o.useRef)(null),
            f = (0, a.e)(t, s);
          return (
            (0, o.useEffect)(() => {
              u.onAnchorChange((null == i ? void 0 : i.current) || s.current);
            }),
            i
              ? null
              : (0, o.createElement)(c.WV.div, (0, r.Z)({}, l, { ref: f }))
          );
        }),
        D = "PopperContent",
        [T, A] = M(D),
        O = (0, o.forwardRef)((e, t) => {
          var n, i, l, u, s, f, d, p;
          let {
              __scopePopper: m,
              side: v = "bottom",
              sideOffset: y = 0,
              align: R = "center",
              alignOffset: M = 0,
              arrowPadding: C = 0,
              avoidCollisions: _ = !0,
              collisionBoundary: P = [],
              collisionPadding: A = 0,
              sticky: O = "partial",
              hideWhenDetached: L = !1,
              updatePositionStrategy: I = "optimized",
              onPlaced: Z,
              ...W
            } = e,
            N = k(D, m),
            [z, K] = (0, o.useState)(null),
            H = (0, a.e)(t, (e) => K(e)),
            [B, $] = (0, o.useState)(null),
            U = (0, x.t)(B),
            Y =
              null !== (n = null == U ? void 0 : U.width) && void 0 !== n
                ? n
                : 0,
            G =
              null !== (i = null == U ? void 0 : U.height) && void 0 !== i
                ? i
                : 0,
            X =
              "number" == typeof A
                ? A
                : { top: 0, right: 0, bottom: 0, left: 0, ...A },
            j = Array.isArray(P) ? P : [P],
            q = j.length > 0,
            J = { padding: X, boundary: j.filter(S), altBoundary: q },
            {
              refs: Q,
              floatingStyles: ee,
              placement: et,
              isPositioned: en,
              middlewareData: er,
            } = (0, h.YF)({
              strategy: "fixed",
              placement: v + ("center" !== R ? "-" + R : ""),
              whileElementsMounted: (...e) =>
                (0, g.Me)(...e, { animationFrame: "always" === I }),
              elements: { reference: N.anchor },
              middleware: [
                (0, w.cv)({ mainAxis: y + G, alignmentAxis: M }),
                _ &&
                  (0, w.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === O ? (0, w.dr)() : void 0,
                    ...J,
                  }),
                _ && (0, w.RR)({ ...J }),
                (0, w.dp)({
                  ...J,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                B && (0, h.x7)({ element: B, padding: C }),
                F({ arrowWidth: Y, arrowHeight: G }),
                L && (0, w.Cp)({ strategy: "referenceHidden", ...J }),
              ],
            }),
            [eo, ei] = V(et),
            ea = (0, E.W)(Z);
          (0, b.b)(() => {
            en && (null == ea || ea());
          }, [en, ea]);
          let el = null === (l = er.arrow) || void 0 === l ? void 0 : l.x,
            eu = null === (u = er.arrow) || void 0 === u ? void 0 : u.y,
            ec =
              (null === (s = er.arrow) || void 0 === s
                ? void 0
                : s.centerOffset) !== 0,
            [es, ef] = (0, o.useState)();
          return (
            (0, b.b)(() => {
              z && ef(window.getComputedStyle(z).zIndex);
            }, [z]),
            (0, o.createElement)(
              "div",
              {
                ref: Q.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...ee,
                  transform: en ? ee.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: es,
                  "--radix-popper-transform-origin": [
                    null === (f = er.transformOrigin) || void 0 === f
                      ? void 0
                      : f.x,
                    null === (d = er.transformOrigin) || void 0 === d
                      ? void 0
                      : d.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                T,
                {
                  scope: m,
                  placedSide: eo,
                  onArrowChange: $,
                  arrowX: el,
                  arrowY: eu,
                  shouldHideArrow: ec,
                },
                (0, o.createElement)(
                  c.WV.div,
                  (0, r.Z)({ "data-side": eo, "data-align": ei }, W, {
                    ref: H,
                    style: {
                      ...W.style,
                      animation: en ? void 0 : "none",
                      opacity:
                        null !== (p = er.hide) &&
                        void 0 !== p &&
                        p.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        L = { top: "bottom", right: "left", bottom: "top", left: "right" },
        I = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...i } = e,
            a = A("PopperArrow", n),
            l = L[a.placedSide];
          return (0,
          o.createElement)("span", { ref: a.onArrowChange, style: { position: "absolute", left: a.arrowX, top: a.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[a.placedSide], visibility: a.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(y, (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: "block" } })));
        });
      function S(e) {
        return null !== e;
      }
      let F = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: l, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            f = s ? 0 : e.arrowWidth,
            d = s ? 0 : e.arrowHeight,
            [p, m] = V(l),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            h =
              (null !==
                (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              f / 2,
            g =
              (null !==
                (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            w = "",
            y = "";
          return (
            "bottom" === p
              ? ((w = s ? v : `${h}px`), (y = `${-d}px`))
              : "top" === p
              ? ((w = s ? v : `${h}px`), (y = `${u.floating.height + d}px`))
              : "right" === p
              ? ((w = `${-d}px`), (y = s ? v : `${g}px`))
              : "left" === p &&
                ((w = `${u.floating.width + d}px`), (y = s ? v : `${g}px`)),
            { data: { x: w, y: y } }
          );
        },
      });
      function V(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let Z = (e) => {
        let { __scopePopper: t, children: n } = e,
          [r, i] = (0, o.useState)(null);
        return (0, o.createElement)(
          _,
          { scope: t, anchor: r, onAnchorChange: i },
          n
        );
      };
      var W = n(98074),
        N = n(80254),
        z = n(19106),
        K = n(4522),
        H = n(49732),
        B = n(91869);
      let $ = ["Enter", " "],
        U = ["ArrowUp", "PageDown", "End"],
        Y = ["ArrowDown", "PageUp", "Home", ...U],
        G = { ltr: [...$, "ArrowRight"], rtl: [...$, "ArrowLeft"] },
        X = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        j = "Menu",
        [q, J, Q] = (0, s.B)(j),
        [ee, et] = (0, l.b)(j, [Q, C, z.Pc]),
        en = C(),
        er = (0, z.Pc)(),
        [eo, ei] = ee(j),
        [ea, el] = ee(j),
        eu = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...i } = e,
            a = en(n);
          return (0, o.createElement)(P, (0, r.Z)({}, a, i, { ref: t }));
        }),
        ec = "MenuPortal",
        [es, ef] = ee(ec, { forceMount: void 0 }),
        ed = "MenuContent",
        [ep, em] = ee(ed),
        ev = (0, o.forwardRef)((e, t) => {
          let n = ef(ed, e.__scopeMenu),
            { forceMount: i = n.forceMount, ...a } = e,
            l = ei(ed, e.__scopeMenu),
            u = el(ed, e.__scopeMenu);
          return (0, o.createElement)(
            q.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              N.z,
              { present: i || l.open },
              (0, o.createElement)(
                q.Slot,
                { scope: e.__scopeMenu },
                u.modal
                  ? (0, o.createElement)(eh, (0, r.Z)({}, a, { ref: t }))
                  : (0, o.createElement)(eg, (0, r.Z)({}, a, { ref: t }))
              )
            )
          );
        }),
        eh = (0, o.forwardRef)((e, t) => {
          let n = ei(ed, e.__scopeMenu),
            l = (0, o.useRef)(null),
            u = (0, a.e)(t, l);
          return (
            (0, o.useEffect)(() => {
              let e = l.current;
              if (e) return (0, H.Ry)(e);
            }, []),
            (0, o.createElement)(
              ew,
              (0, r.Z)({}, e, {
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, i.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
                onDismiss: () => n.onOpenChange(!1),
              })
            )
          );
        }),
        eg = (0, o.forwardRef)((e, t) => {
          let n = ei(ed, e.__scopeMenu);
          return (0, o.createElement)(
            ew,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        ew = (0, o.forwardRef)((e, t) => {
          let {
              __scopeMenu: n,
              loop: l = !1,
              trapFocus: u,
              onOpenAutoFocus: c,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: f,
              onEntryFocus: v,
              onEscapeKeyDown: h,
              onPointerDownOutside: g,
              onFocusOutside: w,
              onInteractOutside: y,
              onDismiss: E,
              disableOutsideScroll: b,
              ...x
            } = e,
            R = ei(ed, n),
            M = el(ed, n),
            C = en(n),
            _ = er(n),
            k = J(n),
            [P, D] = (0, o.useState)(null),
            T = (0, o.useRef)(null),
            A = (0, a.e)(t, T, R.onContentChange),
            L = (0, o.useRef)(0),
            I = (0, o.useRef)(""),
            S = (0, o.useRef)(0),
            F = (0, o.useRef)(null),
            V = (0, o.useRef)("right"),
            Z = (0, o.useRef)(0),
            W = b ? B.Z : o.Fragment,
            N = b ? { as: K.g7, allowPinchZoom: !0 } : void 0,
            H = (e) => {
              var t, n;
              let r = I.current + e,
                o = k().filter((e) => !e.disabled),
                i = document.activeElement,
                a =
                  null === (t = o.find((e) => e.ref.current === i)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                l = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    i =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (i = i.filter((e) => e !== n));
                  let a = i.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return a !== n ? a : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  a
                ),
                u =
                  null === (n = o.find((e) => e.textValue === l)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (I.current = t),
                  window.clearTimeout(L.current),
                  "" !== t && (L.current = window.setTimeout(() => e(""), 1e3));
              })(r),
                u && setTimeout(() => u.focus());
            };
          (0, o.useEffect)(() => () => window.clearTimeout(L.current), []),
            (0, p.EW)();
          let $ = (0, o.useCallback)((e) => {
            var t, n, r;
            return (
              V.current ===
                (null === (t = F.current) || void 0 === t ? void 0 : t.side) &&
              !!(r =
                null === (n = F.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                  let a = t[e].x,
                    l = t[e].y,
                    u = t[i].x,
                    c = t[i].y;
                  l > r != c > r &&
                    n < ((u - a) * (r - l)) / (c - l) + a &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, o.createElement)(
            ep,
            {
              scope: n,
              searchRef: I,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  $(e) && e.preventDefault();
                },
                [$]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var t;
                  $(e) ||
                    (null === (t = T.current) || void 0 === t || t.focus(),
                    D(null));
                },
                [$]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  $(e) && e.preventDefault();
                },
                [$]
              ),
              pointerGraceTimerRef: S,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                F.current = e;
              }, []),
            },
            (0, o.createElement)(
              W,
              N,
              (0, o.createElement)(
                m.M,
                {
                  asChild: !0,
                  trapped: u,
                  onMountAutoFocus: (0, i.M)(c, (e) => {
                    var t;
                    e.preventDefault(),
                      null === (t = T.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: s,
                },
                (0, o.createElement)(
                  d.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: f,
                    onEscapeKeyDown: h,
                    onPointerDownOutside: g,
                    onFocusOutside: w,
                    onInteractOutside: y,
                    onDismiss: E,
                  },
                  (0, o.createElement)(
                    z.fC,
                    (0, r.Z)({ asChild: !0 }, _, {
                      dir: M.dir,
                      orientation: "vertical",
                      loop: l,
                      currentTabStopId: P,
                      onCurrentTabStopIdChange: D,
                      onEntryFocus: (0, i.M)(v, (e) => {
                        M.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                    }),
                    (0, o.createElement)(
                      O,
                      (0, r.Z)(
                        {
                          role: "menu",
                          "aria-orientation": "vertical",
                          "data-state": ez(R.open),
                          "data-radix-menu-content": "",
                          dir: M.dir,
                        },
                        C,
                        x,
                        {
                          ref: A,
                          style: { outline: "none", ...x.style },
                          onKeyDown: (0, i.M)(x.onKeyDown, (e) => {
                            let t =
                                e.target.closest(
                                  "[data-radix-menu-content]"
                                ) === e.currentTarget,
                              n = e.ctrlKey || e.altKey || e.metaKey,
                              r = 1 === e.key.length;
                            t &&
                              ("Tab" === e.key && e.preventDefault(),
                              !n && r && H(e.key));
                            let o = T.current;
                            if (e.target !== o || !Y.includes(e.key)) return;
                            e.preventDefault();
                            let i = k()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            U.includes(e.key) && i.reverse(),
                              (function (e) {
                                let t = document.activeElement;
                                for (let n of e)
                                  if (
                                    n === t ||
                                    (n.focus(), document.activeElement !== t)
                                  )
                                    return;
                              })(i);
                          }),
                          onBlur: (0, i.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) ||
                              (window.clearTimeout(L.current),
                              (I.current = ""));
                          }),
                          onPointerMove: (0, i.M)(
                            e.onPointerMove,
                            eB((e) => {
                              let t = e.target,
                                n = Z.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                let t =
                                  e.clientX > Z.current ? "right" : "left";
                                (V.current = t), (Z.current = e.clientX);
                              }
                            })
                          ),
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        ey = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...i } = e;
          return (0, o.createElement)(
            c.WV.div,
            (0, r.Z)({ role: "group" }, i, { ref: t })
          );
        }),
        eE = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...i } = e;
          return (0, o.createElement)(c.WV.div, (0, r.Z)({}, i, { ref: t }));
        }),
        eb = "MenuItem",
        ex = "menu.itemSelect",
        eR = (0, o.forwardRef)((e, t) => {
          let { disabled: n = !1, onSelect: l, ...u } = e,
            s = (0, o.useRef)(null),
            f = el(eb, e.__scopeMenu),
            d = em(eb, e.__scopeMenu),
            p = (0, a.e)(t, s),
            m = (0, o.useRef)(!1);
          return (0, o.createElement)(
            eM,
            (0, r.Z)({}, u, {
              ref: p,
              disabled: n,
              onClick: (0, i.M)(e.onClick, () => {
                let e = s.current;
                if (!n && e) {
                  let t = new CustomEvent(ex, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(ex, (e) => (null == l ? void 0 : l(e)), {
                    once: !0,
                  }),
                    (0, c.jH)(e, t),
                    t.defaultPrevented ? (m.current = !1) : f.onClose();
                }
              }),
              onPointerDown: (t) => {
                var n;
                null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                  (m.current = !0);
              },
              onPointerUp: (0, i.M)(e.onPointerUp, (e) => {
                var t;
                m.current ||
                  null === (t = e.currentTarget) ||
                  void 0 === t ||
                  t.click();
              }),
              onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                let t = "" !== d.searchRef.current;
                !n &&
                  (!t || " " !== e.key) &&
                  $.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault());
              }),
            })
          );
        }),
        eM = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, disabled: l = !1, textValue: u, ...s } = e,
            f = em(eb, n),
            d = er(n),
            p = (0, o.useRef)(null),
            m = (0, a.e)(t, p),
            [v, h] = (0, o.useState)(!1),
            [g, w] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              let e = p.current;
              if (e) {
                var t;
                w(
                  (null !== (t = e.textContent) && void 0 !== t ? t : "").trim()
                );
              }
            }, [s.children]),
            (0, o.createElement)(
              q.ItemSlot,
              { scope: n, disabled: l, textValue: null != u ? u : g },
              (0, o.createElement)(
                z.ck,
                (0, r.Z)({ asChild: !0 }, d, { focusable: !l }),
                (0, o.createElement)(
                  c.WV.div,
                  (0, r.Z)(
                    {
                      role: "menuitem",
                      "data-highlighted": v ? "" : void 0,
                      "aria-disabled": l || void 0,
                      "data-disabled": l ? "" : void 0,
                    },
                    s,
                    {
                      ref: m,
                      onPointerMove: (0, i.M)(
                        e.onPointerMove,
                        eB((e) => {
                          l
                            ? f.onItemLeave(e)
                            : (f.onItemEnter(e),
                              e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, i.M)(
                        e.onPointerLeave,
                        eB((e) => f.onItemLeave(e))
                      ),
                      onFocus: (0, i.M)(e.onFocus, () => h(!0)),
                      onBlur: (0, i.M)(e.onBlur, () => h(!1)),
                    }
                  )
                )
              )
            )
          );
        }),
        eC = (0, o.forwardRef)((e, t) => {
          let { checked: n = !1, onCheckedChange: a, ...l } = e;
          return (0, o.createElement)(
            eA,
            { scope: e.__scopeMenu, checked: n },
            (0, o.createElement)(
              eR,
              (0, r.Z)(
                {
                  role: "menuitemcheckbox",
                  "aria-checked": eK(n) ? "mixed" : n,
                },
                l,
                {
                  ref: t,
                  "data-state": eH(n),
                  onSelect: (0, i.M)(
                    l.onSelect,
                    () => (null == a ? void 0 : a(!!eK(n) || !n)),
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        [e_, ek] = ee("MenuRadioGroup", {
          value: void 0,
          onValueChange: () => {},
        }),
        eP = (0, o.forwardRef)((e, t) => {
          let { value: n, onValueChange: i, ...a } = e,
            l = (0, E.W)(i);
          return (0, o.createElement)(
            e_,
            { scope: e.__scopeMenu, value: n, onValueChange: l },
            (0, o.createElement)(ey, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        eD = (0, o.forwardRef)((e, t) => {
          let { value: n, ...a } = e,
            l = ek("MenuRadioItem", e.__scopeMenu),
            u = n === l.value;
          return (0, o.createElement)(
            eA,
            { scope: e.__scopeMenu, checked: u },
            (0, o.createElement)(
              eR,
              (0, r.Z)({ role: "menuitemradio", "aria-checked": u }, a, {
                ref: t,
                "data-state": eH(u),
                onSelect: (0, i.M)(
                  a.onSelect,
                  () => {
                    var e;
                    return null === (e = l.onValueChange) || void 0 === e
                      ? void 0
                      : e.call(l, n);
                  },
                  { checkForDefaultPrevented: !1 }
                ),
              })
            )
          );
        }),
        eT = "MenuItemIndicator",
        [eA, eO] = ee(eT, { checked: !1 }),
        eL = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, forceMount: i, ...a } = e,
            l = eO(eT, n);
          return (0, o.createElement)(
            N.z,
            { present: i || eK(l.checked) || !0 === l.checked },
            (0, o.createElement)(
              c.WV.span,
              (0, r.Z)({}, a, { ref: t, "data-state": eH(l.checked) })
            )
          );
        }),
        eI = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...i } = e;
          return (0, o.createElement)(
            c.WV.div,
            (0, r.Z)(
              { role: "separator", "aria-orientation": "horizontal" },
              i,
              { ref: t }
            )
          );
        }),
        eS =
          ((e, t) => {
            let { __scopeMenu: n, ...i } = e,
              a = en(n);
            return (0, o.createElement)(I, (0, r.Z)({}, a, i, { ref: t }));
          },
          "MenuSub"),
        [eF, eV] = ee(eS),
        eZ = "MenuSubTrigger",
        eW = (0, o.forwardRef)((e, t) => {
          let n = ei(eZ, e.__scopeMenu),
            l = el(eZ, e.__scopeMenu),
            u = eV(eZ, e.__scopeMenu),
            c = em(eZ, e.__scopeMenu),
            s = (0, o.useRef)(null),
            { pointerGraceTimerRef: f, onPointerGraceIntentChange: d } = c,
            p = { __scopeMenu: e.__scopeMenu },
            m = (0, o.useCallback)(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
            }, []);
          return (
            (0, o.useEffect)(() => m, [m]),
            (0, o.useEffect)(() => {
              let e = f.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [f, d]),
            (0, o.createElement)(
              eu,
              (0, r.Z)({ asChild: !0 }, p),
              (0, o.createElement)(
                eM,
                (0, r.Z)(
                  {
                    id: u.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": u.contentId,
                    "data-state": ez(n.open),
                  },
                  e,
                  {
                    ref: (0, a.F)(t, u.onTriggerChange),
                    onClick: (t) => {
                      var r;
                      null === (r = e.onClick) || void 0 === r || r.call(e, t),
                        e.disabled ||
                          t.defaultPrevented ||
                          (t.currentTarget.focus(),
                          n.open || n.onOpenChange(!0));
                    },
                    onPointerMove: (0, i.M)(
                      e.onPointerMove,
                      eB((t) => {
                        c.onItemEnter(t),
                          t.defaultPrevented ||
                            e.disabled ||
                            n.open ||
                            s.current ||
                            (c.onPointerGraceIntentChange(null),
                            (s.current = window.setTimeout(() => {
                              n.onOpenChange(!0), m();
                            }, 100)));
                      })
                    ),
                    onPointerLeave: (0, i.M)(
                      e.onPointerLeave,
                      eB((e) => {
                        var t, r;
                        m();
                        let o =
                          null === (t = n.content) || void 0 === t
                            ? void 0
                            : t.getBoundingClientRect();
                        if (o) {
                          let t =
                              null === (r = n.content) || void 0 === r
                                ? void 0
                                : r.dataset.side,
                            i = "right" === t,
                            a = o[i ? "left" : "right"],
                            l = o[i ? "right" : "left"];
                          c.onPointerGraceIntentChange({
                            area: [
                              { x: e.clientX + (i ? -5 : 5), y: e.clientY },
                              { x: a, y: o.top },
                              { x: l, y: o.top },
                              { x: l, y: o.bottom },
                              { x: a, y: o.bottom },
                            ],
                            side: t,
                          }),
                            window.clearTimeout(f.current),
                            (f.current = window.setTimeout(
                              () => c.onPointerGraceIntentChange(null),
                              300
                            ));
                        } else {
                          if ((c.onTriggerLeave(e), e.defaultPrevented)) return;
                          c.onPointerGraceIntentChange(null);
                        }
                      })
                    ),
                    onKeyDown: (0, i.M)(e.onKeyDown, (t) => {
                      let r = "" !== c.searchRef.current;
                      if (
                        !e.disabled &&
                        (!r || " " !== t.key) &&
                        G[l.dir].includes(t.key)
                      ) {
                        var o;
                        n.onOpenChange(!0),
                          null === (o = n.content) || void 0 === o || o.focus(),
                          t.preventDefault();
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        eN = (0, o.forwardRef)((e, t) => {
          let n = ef(ed, e.__scopeMenu),
            { forceMount: l = n.forceMount, ...u } = e,
            c = ei(ed, e.__scopeMenu),
            s = el(ed, e.__scopeMenu),
            f = eV("MenuSubContent", e.__scopeMenu),
            d = (0, o.useRef)(null),
            p = (0, a.e)(t, d);
          return (0, o.createElement)(
            q.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              N.z,
              { present: l || c.open },
              (0, o.createElement)(
                q.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  ew,
                  (0, r.Z)(
                    { id: f.contentId, "aria-labelledby": f.triggerId },
                    u,
                    {
                      ref: p,
                      align: "start",
                      side: "rtl" === s.dir ? "left" : "right",
                      disableOutsidePointerEvents: !1,
                      disableOutsideScroll: !1,
                      trapFocus: !1,
                      onOpenAutoFocus: (e) => {
                        var t;
                        s.isUsingKeyboardRef.current &&
                          (null === (t = d.current) ||
                            void 0 === t ||
                            t.focus()),
                          e.preventDefault();
                      },
                      onCloseAutoFocus: (e) => e.preventDefault(),
                      onFocusOutside: (0, i.M)(e.onFocusOutside, (e) => {
                        e.target !== f.trigger && c.onOpenChange(!1);
                      }),
                      onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, (e) => {
                        s.onClose(), e.preventDefault();
                      }),
                      onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                        let t = e.currentTarget.contains(e.target),
                          n = X[s.dir].includes(e.key);
                        if (t && n) {
                          var r;
                          c.onOpenChange(!1),
                            null === (r = f.trigger) ||
                              void 0 === r ||
                              r.focus(),
                            e.preventDefault();
                        }
                      }),
                    }
                  )
                )
              )
            )
          );
        });
      function ez(e) {
        return e ? "open" : "closed";
      }
      function eK(e) {
        return "indeterminate" === e;
      }
      function eH(e) {
        return eK(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eB(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let e$ = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: i,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            u = en(t),
            [c, s] = (0, o.useState)(null),
            d = (0, o.useRef)(!1),
            p = (0, E.W)(a),
            m = (0, f.gm)(i);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                  (d.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (d.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, o.createElement)(
              Z,
              u,
              (0, o.createElement)(
                eo,
                {
                  scope: t,
                  open: n,
                  onOpenChange: p,
                  content: c,
                  onContentChange: s,
                },
                (0, o.createElement)(
                  ea,
                  {
                    scope: t,
                    onClose: (0, o.useCallback)(() => p(!1), [p]),
                    isUsingKeyboardRef: d,
                    dir: m,
                    modal: l,
                  },
                  r
                )
              )
            )
          );
        },
        eU = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
            a = ei(ec, t);
          return (0, o.createElement)(
            es,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              N.z,
              { present: n || a.open },
              (0, o.createElement)(W.h, { asChild: !0, container: i }, r)
            )
          );
        },
        eY = (e) => {
          let {
              __scopeMenu: t,
              children: n,
              open: r = !1,
              onOpenChange: i,
            } = e,
            a = ei(eS, t),
            l = en(t),
            [u, c] = (0, o.useState)(null),
            [s, f] = (0, o.useState)(null),
            d = (0, E.W)(i);
          return (
            (0, o.useEffect)(
              () => (!1 === a.open && d(!1), () => d(!1)),
              [a.open, d]
            ),
            (0, o.createElement)(
              Z,
              l,
              (0, o.createElement)(
                eo,
                {
                  scope: t,
                  open: r,
                  onOpenChange: d,
                  content: s,
                  onContentChange: f,
                },
                (0, o.createElement)(
                  eF,
                  {
                    scope: t,
                    contentId: (0, v.M)(),
                    triggerId: (0, v.M)(),
                    trigger: u,
                    onTriggerChange: c,
                  },
                  n
                )
              )
            )
          );
        },
        eG = "DropdownMenu",
        [eX, ej] = (0, l.b)(eG, [et]),
        eq = et(),
        [eJ, eQ] = eX(eG),
        e0 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, disabled: l = !1, ...u } = e,
            s = eQ("DropdownMenuTrigger", n),
            f = eq(n);
          return (0, o.createElement)(
            eu,
            (0, r.Z)({ asChild: !0 }, f),
            (0, o.createElement)(
              c.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  id: s.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": s.open,
                  "aria-controls": s.open ? s.contentId : void 0,
                  "data-state": s.open ? "open" : "closed",
                  "data-disabled": l ? "" : void 0,
                  disabled: l,
                },
                u,
                {
                  ref: (0, a.F)(t, s.triggerRef),
                  onPointerDown: (0, i.M)(e.onPointerDown, (e) => {
                    l ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (s.onOpenToggle(), s.open || e.preventDefault());
                  }),
                  onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                    !l &&
                      (["Enter", " "].includes(e.key) && s.onOpenToggle(),
                      "ArrowDown" === e.key && s.onOpenChange(!0),
                      ["Enter", " ", "ArrowDown"].includes(e.key) &&
                        e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        e1 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            l = eQ("DropdownMenuContent", n),
            u = eq(n),
            c = (0, o.useRef)(!1);
          return (0, o.createElement)(
            ev,
            (0, r.Z)(
              { id: l.contentId, "aria-labelledby": l.triggerId },
              u,
              a,
              {
                ref: t,
                onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  c.current ||
                    null === (t = l.triggerRef.current) ||
                    void 0 === t ||
                    t.focus(),
                    (c.current = !1),
                    e.preventDefault();
                }),
                onInteractOutside: (0, i.M)(e.onInteractOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey,
                    r = 2 === t.button || n;
                  (!l.modal || r) && (c.current = !0);
                }),
                style: {
                  ...e.style,
                  "--radix-dropdown-menu-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-dropdown-menu-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-dropdown-menu-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-dropdown-menu-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-dropdown-menu-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
              }
            )
          );
        }),
        e2 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(ey, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e4 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eE, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e8 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eR, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e5 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eC, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e7 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eP, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e6 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eD, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e3 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eL, (0, r.Z)({}, a, i, { ref: t }));
        }),
        e9 = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eI, (0, r.Z)({}, a, i, { ref: t }));
        }),
        te = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(eW, (0, r.Z)({}, a, i, { ref: t }));
        }),
        tt = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            a = eq(n);
          return (0, o.createElement)(
            eN,
            (0, r.Z)({}, a, i, {
              ref: t,
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        tn = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: i,
              open: a,
              defaultOpen: l,
              onOpenChange: c,
              modal: s = !0,
            } = e,
            f = eq(t),
            d = (0, o.useRef)(null),
            [p = !1, m] = (0, u.T)({ prop: a, defaultProp: l, onChange: c });
          return (0, o.createElement)(
            eJ,
            {
              scope: t,
              triggerId: (0, v.M)(),
              triggerRef: d,
              contentId: (0, v.M)(),
              open: p,
              onOpenChange: m,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
              modal: s,
            },
            (0, o.createElement)(
              e$,
              (0, r.Z)({}, f, { open: p, onOpenChange: m, dir: i, modal: s }),
              n
            )
          );
        },
        tr = e0,
        to = (e) => {
          let { __scopeDropdownMenu: t, ...n } = e,
            i = eq(t);
          return (0, o.createElement)(eU, (0, r.Z)({}, i, n));
        },
        ti = e1,
        ta = e2,
        tl = e4,
        tu = e8,
        tc = e5,
        ts = e7,
        tf = e6,
        td = e3,
        tp = e9,
        tm = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              open: i,
              onOpenChange: a,
              defaultOpen: l,
            } = e,
            c = eq(t),
            [s = !1, f] = (0, u.T)({ prop: i, defaultProp: l, onChange: a });
          return (0, o.createElement)(
            eY,
            (0, r.Z)({}, c, { open: s, onOpenChange: f }),
            n
          );
        },
        tv = te,
        th = tt;
    },
    75169: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(2784);
      function o(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    89348: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(24648);
      function i(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    50202: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Calendar", [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
        ],
        ["path", { d: "M3 10h18", key: "8toen8" }],
      ]);
    },
    45576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    50042: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    94522: function (e, t, n) {
      var r = n(2784),
        o = n(42196),
        i = ["mousedown", "touchstart"];
      t.Z = function (e, t, n) {
        void 0 === n && (n = i);
        var a = (0, r.useRef)(t);
        (0, r.useEffect)(
          function () {
            a.current = t;
          },
          [t]
        ),
          (0, r.useEffect)(
            function () {
              for (
                var t = function (t) {
                    var n = e.current;
                    n && !n.contains(t.target) && a.current(t);
                  },
                  r = 0,
                  i = n;
                r < i.length;
                r++
              ) {
                var l = i[r];
                (0, o.on)(document, l, t);
              }
              return function () {
                for (var e = 0, r = n; e < r.length; e++) {
                  var i = r[e];
                  (0, o.S1)(document, i, t);
                }
              };
            },
            [n, e]
          );
      };
    },
    53068: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(2784),
        o = n(42196),
        i = o.jU ? window : null,
        a = function (e) {
          return !!e.addEventListener;
        },
        l = function (e) {
          return !!e.on;
        },
        u = function (e, t, n, u) {
          void 0 === n && (n = i),
            (0, r.useEffect)(
              function () {
                if (t && n)
                  return (
                    a(n) ? (0, o.on)(n, e, t, u) : l(n) && n.on(e, t, u),
                    function () {
                      a(n) ? (0, o.S1)(n, e, t, u) : l(n) && n.off(e, t, u);
                    }
                  );
              },
              [e, t, n, JSON.stringify(u)]
            );
        },
        c = function (e, t, n, i) {
          void 0 === t && (t = o.ZT),
            void 0 === n && (n = {}),
            void 0 === i && (i = [e]);
          var a = n.event,
            l = n.target,
            c = n.options;
          u(
            void 0 === a ? "keydown" : a,
            (0, r.useMemo)(function () {
              var n =
                "function" == typeof e
                  ? e
                  : "string" == typeof e
                  ? function (t) {
                      return t.key === e;
                    }
                  : e
                  ? function () {
                      return !0;
                    }
                  : function () {
                      return !1;
                    };
              return function (e) {
                if (n(e)) return t(e);
              };
            }, i),
            l,
            c
          );
        };
    },
    60879: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return eh;
        },
        z$: function () {
          return ev;
        },
        ck: function () {
          return ed;
        },
        rU: function () {
          return em;
        },
        aV: function () {
          return ef;
        },
        fC: function () {
          return es;
        },
        xz: function () {
          return ep;
        },
        l_: function () {
          return eg;
        },
      });
      var r = n(7560),
        o = n(2784),
        i = n(28316),
        a = n(72422),
        l = n(38930),
        u = n(57915),
        c = n(68622),
        s = n(69968),
        f = n(97368),
        d = n(80254),
        p = n(62825),
        m = n(20314),
        v = n(19590),
        h = n(75169),
        g = n(24648),
        w = n(85751);
      let y = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            u.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        E = "NavigationMenu",
        [b, x, R] = (0, m.B)(E),
        [M, C, _] = (0, m.B)(E),
        [k, P] = (0, a.b)(E, [R, _]),
        [D, T] = k(E),
        [A, O] = k(E),
        L = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              onValueChange: a,
              defaultValue: l,
              delayDuration: d = 200,
              skipDelayDuration: p = 300,
              orientation: m = "horizontal",
              dir: v,
              ...h
            } = e,
            [g, w] = (0, o.useState)(null),
            y = (0, s.e)(t, (e) => w(e)),
            E = (0, f.gm)(v),
            b = (0, o.useRef)(0),
            x = (0, o.useRef)(0),
            R = (0, o.useRef)(0),
            [M, C] = (0, o.useState)(!0),
            [_ = "", k] = (0, c.T)({
              prop: i,
              onChange: (e) => {
                let t = p > 0;
                "" !== e
                  ? (window.clearTimeout(R.current), t && C(!1))
                  : (window.clearTimeout(R.current),
                    (R.current = window.setTimeout(() => C(!0), p))),
                  null == a || a(e);
              },
              defaultProp: l,
            }),
            P = (0, o.useCallback)(() => {
              window.clearTimeout(x.current),
                (x.current = window.setTimeout(() => k(""), 150));
            }, [k]),
            D = (0, o.useCallback)(
              (e) => {
                window.clearTimeout(x.current), k(e);
              },
              [k]
            ),
            T = (0, o.useCallback)(
              (e) => {
                _ === e
                  ? window.clearTimeout(x.current)
                  : (b.current = window.setTimeout(() => {
                      window.clearTimeout(x.current), k(e);
                    }, d));
              },
              [_, k, d]
            );
          return (
            (0, o.useEffect)(
              () => () => {
                window.clearTimeout(b.current),
                  window.clearTimeout(x.current),
                  window.clearTimeout(R.current);
              },
              []
            ),
            (0, o.createElement)(
              I,
              {
                scope: n,
                isRootMenu: !0,
                value: _,
                dir: E,
                orientation: m,
                rootNavigationMenu: g,
                onTriggerEnter: (e) => {
                  window.clearTimeout(b.current), M ? T(e) : D(e);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(b.current), P();
                },
                onContentEnter: () => window.clearTimeout(x.current),
                onContentLeave: P,
                onItemSelect: (e) => {
                  k((t) => (t === e ? "" : e));
                },
                onItemDismiss: () => k(""),
              },
              (0, o.createElement)(
                u.WV.nav,
                (0, r.Z)(
                  { "aria-label": "Main", "data-orientation": m, dir: E },
                  h,
                  { ref: y }
                )
              )
            )
          );
        }),
        I = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              dir: i,
              orientation: a,
              children: l,
              value: u,
              onItemSelect: c,
              onItemDismiss: s,
              onTriggerEnter: f,
              onTriggerLeave: d,
              onContentEnter: m,
              onContentLeave: v,
            } = e,
            [g, y] = (0, o.useState)(null),
            [E, x] = (0, o.useState)(new Map()),
            [R, M] = (0, o.useState)(null);
          return (0, o.createElement)(
            D,
            {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              value: u,
              previousValue: (0, h.D)(u),
              baseId: (0, p.M)(),
              dir: i,
              orientation: a,
              viewport: g,
              onViewportChange: y,
              indicatorTrack: R,
              onIndicatorTrackChange: M,
              onTriggerEnter: (0, w.W)(f),
              onTriggerLeave: (0, w.W)(d),
              onContentEnter: (0, w.W)(m),
              onContentLeave: (0, w.W)(v),
              onItemSelect: (0, w.W)(c),
              onItemDismiss: (0, w.W)(s),
              onViewportContentChange: (0, o.useCallback)((e, t) => {
                x((n) => (n.set(e, t), new Map(n)));
              }, []),
              onViewportContentRemove: (0, o.useCallback)((e) => {
                x((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
              }, []),
            },
            (0, o.createElement)(
              b.Provider,
              { scope: t },
              (0, o.createElement)(A, { scope: t, items: E }, l)
            )
          );
        },
        S = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = T("NavigationMenuList", n),
            l = (0, o.createElement)(
              u.WV.ul,
              (0, r.Z)({ "data-orientation": a.orientation }, i, { ref: t })
            );
          return (0, o.createElement)(
            u.WV.div,
            { style: { position: "relative" }, ref: a.onIndicatorTrackChange },
            (0, o.createElement)(
              b.Slot,
              { scope: n },
              a.isRootMenu ? (0, o.createElement)(ee, { asChild: !0 }, l) : l
            )
          );
        }),
        [F, V] = k("NavigationMenuItem"),
        Z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, value: i, ...a } = e,
            l = (0, p.M)(),
            c = (0, o.useRef)(null),
            s = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            d = (0, o.useRef)(() => {}),
            m = (0, o.useRef)(!1),
            v = (0, o.useCallback)((e = "start") => {
              if (c.current) {
                d.current();
                let t = er(c.current);
                t.length && eo("start" === e ? t : t.reverse());
              }
            }, []),
            h = (0, o.useCallback)(() => {
              if (c.current) {
                let e = er(c.current);
                e.length &&
                  (d.current =
                    (e.forEach((e) => {
                      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                        e.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      e.forEach((e) => {
                        let t = e.dataset.tabindex;
                        e.setAttribute("tabindex", t);
                      });
                    }));
              }
            }, []);
          return (0, o.createElement)(
            F,
            {
              scope: n,
              value: i || l || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: s,
              contentRef: c,
              focusProxyRef: f,
              wasEscapeCloseRef: m,
              onEntryKeyDown: v,
              onFocusProxyEnter: v,
              onRootContentClose: h,
              onContentFocusOutside: h,
            },
            (0, o.createElement)(u.WV.li, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        W = "NavigationMenuTrigger",
        N = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, disabled: i, ...a } = e,
            c = T(W, e.__scopeNavigationMenu),
            f = V(W, e.__scopeNavigationMenu),
            d = (0, o.useRef)(null),
            p = (0, s.e)(d, f.triggerRef, t),
            m = el(c.baseId, f.value),
            v = eu(c.baseId, f.value),
            h = (0, o.useRef)(!1),
            g = (0, o.useRef)(!1),
            w = f.value === c.value;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              b.ItemSlot,
              { scope: n, value: f.value },
              (0, o.createElement)(
                en,
                { asChild: !0 },
                (0, o.createElement)(
                  u.WV.button,
                  (0, r.Z)(
                    {
                      id: m,
                      disabled: i,
                      "data-disabled": i ? "" : void 0,
                      "data-state": ea(w),
                      "aria-expanded": w,
                      "aria-controls": v,
                    },
                    a,
                    {
                      ref: p,
                      onPointerEnter: (0, l.M)(e.onPointerEnter, () => {
                        (g.current = !1), (f.wasEscapeCloseRef.current = !1);
                      }),
                      onPointerMove: (0, l.M)(
                        e.onPointerMove,
                        ec(() => {
                          i ||
                            g.current ||
                            f.wasEscapeCloseRef.current ||
                            h.current ||
                            (c.onTriggerEnter(f.value), (h.current = !0));
                        })
                      ),
                      onPointerLeave: (0, l.M)(
                        e.onPointerLeave,
                        ec(() => {
                          i || (c.onTriggerLeave(), (h.current = !1));
                        })
                      ),
                      onClick: (0, l.M)(e.onClick, () => {
                        c.onItemSelect(f.value), (g.current = w);
                      }),
                      onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                        let t = {
                          horizontal: "ArrowDown",
                          vertical:
                            "rtl" === c.dir ? "ArrowLeft" : "ArrowRight",
                        }[c.orientation];
                        w &&
                          e.key === t &&
                          (f.onEntryKeyDown(), e.preventDefault());
                      }),
                    }
                  )
                )
              )
            ),
            w &&
              (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(y, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: f.focusProxyRef,
                  onFocus: (e) => {
                    let t = f.contentRef.current,
                      n = e.relatedTarget,
                      r = n === d.current,
                      o = null == t ? void 0 : t.contains(n);
                    (r || !o) && f.onFocusProxyEnter(r ? "start" : "end");
                  },
                }),
                c.viewport && (0, o.createElement)("span", { "aria-owns": v })
              )
          );
        }),
        z = "navigationMenu.linkSelect",
        K = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, active: i, onSelect: a, ...c } = e;
          return (0, o.createElement)(
            en,
            { asChild: !0 },
            (0, o.createElement)(
              u.WV.a,
              (0, r.Z)(
                {
                  "data-active": i ? "" : void 0,
                  "aria-current": i ? "page" : void 0,
                },
                c,
                {
                  ref: t,
                  onClick: (0, l.M)(
                    e.onClick,
                    (e) => {
                      let t = e.target,
                        n = new CustomEvent(z, { bubbles: !0, cancelable: !0 });
                      if (
                        (t.addEventListener(
                          z,
                          (e) => (null == a ? void 0 : a(e)),
                          { once: !0 }
                        ),
                        (0, u.jH)(t, n),
                        !n.defaultPrevented && !e.metaKey)
                      ) {
                        let e = new CustomEvent(X, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, u.jH)(t, e);
                      }
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        H = "NavigationMenuIndicator",
        B = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            l = T(H, e.__scopeNavigationMenu),
            u = !!l.value;
          return l.indicatorTrack
            ? i.createPortal(
                (0, o.createElement)(
                  d.z,
                  { present: n || u },
                  (0, o.createElement)($, (0, r.Z)({}, a, { ref: t }))
                ),
                l.indicatorTrack
              )
            : null;
        }),
        $ = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = T(H, n),
            l = x(n),
            [c, s] = (0, o.useState)(null),
            [f, d] = (0, o.useState)(null),
            p = "horizontal" === a.orientation,
            m = !!a.value;
          (0, o.useEffect)(() => {
            var e;
            let t =
              null === (e = l().find((e) => e.value === a.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && s(t);
          }, [l, a.value]);
          let v = () => {
            c &&
              d({
                size: p ? c.offsetWidth : c.offsetHeight,
                offset: p ? c.offsetLeft : c.offsetTop,
              });
          };
          return (
            ei(c, v),
            ei(a.indicatorTrack, v),
            f
              ? (0, o.createElement)(
                  u.WV.div,
                  (0, r.Z)(
                    {
                      "aria-hidden": !0,
                      "data-state": m ? "visible" : "hidden",
                      "data-orientation": a.orientation,
                    },
                    i,
                    {
                      ref: t,
                      style: {
                        position: "absolute",
                        ...(p
                          ? {
                              left: 0,
                              width: f.size + "px",
                              transform: `translateX(${f.offset}px)`,
                            }
                          : {
                              top: 0,
                              height: f.size + "px",
                              transform: `translateY(${f.offset}px)`,
                            }),
                        ...i.style,
                      },
                    }
                  )
                )
              : null
          );
        }),
        U = "NavigationMenuContent",
        Y = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = T(U, e.__scopeNavigationMenu),
            u = V(U, e.__scopeNavigationMenu),
            c = (0, s.e)(u.contentRef, t),
            f = u.value === a.value,
            p = {
              value: u.value,
              triggerRef: u.triggerRef,
              focusProxyRef: u.focusProxyRef,
              wasEscapeCloseRef: u.wasEscapeCloseRef,
              onContentFocusOutside: u.onContentFocusOutside,
              onRootContentClose: u.onRootContentClose,
              ...i,
            };
          return a.viewport
            ? (0, o.createElement)(
                G,
                (0, r.Z)({ forceMount: n }, p, { ref: c })
              )
            : (0, o.createElement)(
                d.z,
                { present: n || f },
                (0, o.createElement)(
                  j,
                  (0, r.Z)({ "data-state": ea(f) }, p, {
                    ref: c,
                    onPointerEnter: (0, l.M)(
                      e.onPointerEnter,
                      a.onContentEnter
                    ),
                    onPointerLeave: (0, l.M)(
                      e.onPointerLeave,
                      ec(a.onContentLeave)
                    ),
                    style: {
                      pointerEvents: !f && a.isRootMenu ? "none" : void 0,
                      ...p.style,
                    },
                  })
                )
              );
        }),
        G = (0, o.forwardRef)((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: r } = T(
            U,
            e.__scopeNavigationMenu
          );
          return (
            (0, g.b)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, g.b)(() => () => r(e.value), [e.value, r]),
            null
          );
        }),
        X = "navigationMenu.rootContentDismiss",
        j = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              triggerRef: a,
              focusProxyRef: u,
              wasEscapeCloseRef: c,
              onRootContentClose: f,
              onContentFocusOutside: d,
              ...p
            } = e,
            m = T(U, n),
            h = (0, o.useRef)(null),
            g = (0, s.e)(h, t),
            w = el(m.baseId, i),
            y = eu(m.baseId, i),
            E = x(n),
            b = (0, o.useRef)(null),
            { onItemDismiss: R } = m;
          (0, o.useEffect)(() => {
            let e = h.current;
            if (m.isRootMenu && e) {
              let t = () => {
                var t;
                R(),
                  f(),
                  e.contains(document.activeElement) &&
                    (null === (t = a.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(X, t), () => e.removeEventListener(X, t)
              );
            }
          }, [m.isRootMenu, e.value, a, R, f]);
          let M = (0, o.useMemo)(() => {
            let e = E().map((e) => e.value);
            "rtl" === m.dir && e.reverse();
            let t = e.indexOf(m.value),
              n = e.indexOf(m.previousValue),
              r = i === m.value,
              o = n === e.indexOf(i);
            if (!r && !o) return b.current;
            let a = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (o && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (b.current = a), a;
          }, [m.previousValue, m.value, m.dir, E, i]);
          return (0, o.createElement)(
            ee,
            { asChild: !0 },
            (0, o.createElement)(
              v.XB,
              (0, r.Z)(
                {
                  id: y,
                  "aria-labelledby": w,
                  "data-motion": M,
                  "data-orientation": m.orientation,
                },
                p,
                {
                  ref: g,
                  onDismiss: () => {
                    var e;
                    let t = new Event(X, { bubbles: !0, cancelable: !0 });
                    null === (e = h.current) ||
                      void 0 === e ||
                      e.dispatchEvent(t);
                  },
                  onFocusOutside: (0, l.M)(e.onFocusOutside, (e) => {
                    var t;
                    d();
                    let n = e.target;
                    null !== (t = m.rootNavigationMenu) &&
                      void 0 !== t &&
                      t.contains(n) &&
                      e.preventDefault();
                  }),
                  onPointerDownOutside: (0, l.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      var t;
                      let n = e.target,
                        r = E().some((e) => {
                          var t;
                          return null === (t = e.ref.current) || void 0 === t
                            ? void 0
                            : t.contains(n);
                        }),
                        o =
                          m.isRootMenu &&
                          (null === (t = m.viewport) || void 0 === t
                            ? void 0
                            : t.contains(n));
                      (r || o || !m.isRootMenu) && e.preventDefault();
                    }
                  ),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if ("Tab" === e.key && !t) {
                      let t = er(e.currentTarget),
                        r = document.activeElement,
                        o = t.findIndex((e) => e === r);
                      if (
                        eo(
                          e.shiftKey
                            ? t.slice(0, o).reverse()
                            : t.slice(o + 1, t.length)
                        )
                      )
                        e.preventDefault();
                      else {
                        var n;
                        null === (n = u.current) || void 0 === n || n.focus();
                      }
                    }
                  }),
                  onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, (e) => {
                    c.current = !0;
                  }),
                }
              )
            )
          );
        }),
        q = "NavigationMenuViewport",
        J = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = !!T(q, e.__scopeNavigationMenu).value;
          return (0, o.createElement)(
            d.z,
            { present: n || a },
            (0, o.createElement)(Q, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, children: i, ...a } = e,
            c = T(q, n),
            f = (0, s.e)(t, c.onViewportChange),
            p = O(U, e.__scopeNavigationMenu),
            [m, v] = (0, o.useState)(null),
            [h, g] = (0, o.useState)(null),
            w = m ? (null == m ? void 0 : m.width) + "px" : void 0,
            y = m ? (null == m ? void 0 : m.height) + "px" : void 0,
            E = !!c.value,
            b = E ? c.value : c.previousValue;
          return (
            ei(h, () => {
              h && v({ width: h.offsetWidth, height: h.offsetHeight });
            }),
            (0, o.createElement)(
              u.WV.div,
              (0, r.Z)(
                { "data-state": ea(E), "data-orientation": c.orientation },
                a,
                {
                  ref: f,
                  style: {
                    pointerEvents: !E && c.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": w,
                    "--radix-navigation-menu-viewport-height": y,
                    ...a.style,
                  },
                  onPointerEnter: (0, l.M)(e.onPointerEnter, c.onContentEnter),
                  onPointerLeave: (0, l.M)(
                    e.onPointerLeave,
                    ec(c.onContentLeave)
                  ),
                }
              ),
              Array.from(p.items).map(
                ([e, { ref: t, forceMount: n, ...i }]) => {
                  let a = b === e;
                  return (0, o.createElement)(
                    d.z,
                    { key: e, present: n || a },
                    (0, o.createElement)(
                      j,
                      (0, r.Z)({}, i, {
                        ref: (0, s.F)(t, (e) => {
                          a && e && g(e);
                        }),
                      })
                    )
                  );
                }
              )
            )
          );
        }),
        ee = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = T("FocusGroup", n);
          return (0, o.createElement)(
            M.Provider,
            { scope: n },
            (0, o.createElement)(
              M.Slot,
              { scope: n },
              (0, o.createElement)(
                u.WV.div,
                (0, r.Z)({ dir: a.dir }, i, { ref: t })
              )
            )
          );
        }),
        et = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        en = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = C(n),
            c = T("FocusGroupItem", n);
          return (0, o.createElement)(
            M.ItemSlot,
            { scope: n },
            (0, o.createElement)(
              u.WV.button,
              (0, r.Z)({}, i, {
                ref: t,
                onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                  if (["Home", "End", ...et].includes(e.key)) {
                    let t = a().map((e) => e.ref.current);
                    if (
                      ([
                        "rtl" === c.dir ? "ArrowRight" : "ArrowLeft",
                        "ArrowUp",
                        "End",
                      ].includes(e.key) && t.reverse(),
                      et.includes(e.key))
                    ) {
                      let n = t.indexOf(e.currentTarget);
                      t = t.slice(n + 1);
                    }
                    setTimeout(() => eo(t)), e.preventDefault();
                  }
                }),
              })
            )
          );
        });
      function er(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function eo(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function ei(e, t) {
        let n = (0, w.W)(t);
        (0, g.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function ea(e) {
        return e ? "open" : "closed";
      }
      function el(e, t) {
        return `${e}-trigger-${t}`;
      }
      function eu(e, t) {
        return `${e}-content-${t}`;
      }
      function ec(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let es = L,
        ef = S,
        ed = Z,
        ep = N,
        em = K,
        ev = B,
        eh = Y,
        eg = J;
    },
  },
]);
