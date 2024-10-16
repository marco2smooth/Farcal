"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9736],
  {
    79582: function (e, t, r) {
      var n = r(2784);
      let o = n.forwardRef(function (e, t) {
        return n.createElement(
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
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 14l-7 7m0 0l-7-7m7 7V3",
          })
        );
      });
      t.Z = o;
    },
    33023: function (e, t, r) {
      let n;
      r.d(t, {
        ee: function () {
          return e5;
        },
        VY: function () {
          return e3;
        },
        h_: function () {
          return e7;
        },
        fC: function () {
          return e2;
        },
        xz: function () {
          return e9;
        },
      });
      var o,
        a = r(2784),
        l = r.t(a, 2);
      function i(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      function u(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function s(...e) {
        return a.useCallback(u(...e), e);
      }
      var c = r(52322);
      function d(e, t = []) {
        let r = [],
          n = () => {
            let t = r.map((e) => a.createContext(e));
            return function (r) {
              let n = r?.[e] || t;
              return a.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                [r, n]
              );
            };
          };
        return (
          (n.scopeName = e),
          [
            function (t, n) {
              let o = a.createContext(n),
                l = r.length;
              function i(t) {
                let { scope: r, children: n, ...i } = t,
                  u = r?.[e][l] || o,
                  s = a.useMemo(() => i, Object.values(i));
                return (0, c.jsx)(u.Provider, { value: s, children: n });
              }
              return (
                (r = [...r, n]),
                (i.displayName = t + "Provider"),
                [
                  i,
                  function (r, i) {
                    let u = i?.[e][l] || o,
                      s = a.useContext(u);
                    if (s) return s;
                    if (void 0 !== n) return n;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return a.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: n }),
                    [n]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(n, ...t),
          ]
        );
      }
      var f = r(28316),
        p = a.forwardRef((e, t) => {
          let { children: r, ...n } = e,
            o = a.Children.toArray(r),
            l = o.find(h);
          if (l) {
            let e = l.props.children,
              r = o.map((t) =>
                t !== l
                  ? t
                  : a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, c.jsx)(v, {
              ...n,
              ref: t,
              children: a.isValidElement(e)
                ? a.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, c.jsx)(v, { ...n, ref: t, children: r });
        });
      p.displayName = "Slot";
      var v = a.forwardRef((e, t) => {
        let { children: r, ...n } = e;
        if (a.isValidElement(r)) {
          let e, o;
          let l =
            (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? r.ref
              : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? r.props.ref
              : r.props.ref || r.ref;
          return a.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  a = t[n];
                /^on[A-Z]/.test(n)
                  ? o && a
                    ? (r[n] = (...e) => {
                        a(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : "style" === n
                  ? (r[n] = { ...o, ...a })
                  : "className" === n &&
                    (r[n] = [o, a].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(n, r.props),
            ref: t ? u(t, l) : l,
          });
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null;
      });
      v.displayName = "SlotClone";
      var m = ({ children: e }) => (0, c.jsx)(c.Fragment, { children: e });
      function h(e) {
        return a.isValidElement(e) && e.type === m;
      }
      var g = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = a.forwardRef((e, r) => {
          let { asChild: n, ...o } = e,
            a = n ? p : t;
          return (
            "undefined" != typeof window &&
              (window[Symbol.for("radix-ui")] = !0),
            (0, c.jsx)(a, { ...o, ref: r })
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function y(e) {
        let t = a.useRef(e);
        return (
          a.useEffect(() => {
            t.current = e;
          }),
          a.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var b = "dismissableLayer.update",
        E = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = a.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: n,
              onPointerDownOutside: l,
              onFocusOutside: u,
              onInteractOutside: d,
              onDismiss: f,
              ...p
            } = e,
            v = a.useContext(E),
            [m, h] = a.useState(null),
            w = m?.ownerDocument ?? globalThis?.document,
            [, R] = a.useState({}),
            S = s(t, (e) => h(e)),
            k = Array.from(v.layers),
            [P] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
            A = k.indexOf(P),
            N = m ? k.indexOf(m) : -1,
            O = v.layersWithOutsidePointerEventsDisabled.size > 0,
            L = N >= A,
            M = (function (e, t = globalThis?.document) {
              let r = y(e),
                n = a.useRef(!1),
                o = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = function () {
                            C("dismissableLayer.pointerDownOutside", r, a, {
                              discrete: !0,
                            });
                          },
                          a = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = n),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : n();
                      } else t.removeEventListener("click", o.current);
                      n.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...v.branches].some((e) => e.contains(t));
              !L || r || (l?.(e), d?.(e), e.defaultPrevented || f?.());
            }, w),
            I = (function (e, t = globalThis?.document) {
              let r = y(e),
                n = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      C(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...v.branches].some((e) => e.contains(t)) ||
                (u?.(e), d?.(e), e.defaultPrevented || f?.());
            }, w);
          return (
            !(function (e, t = globalThis?.document) {
              let r = y(e);
              a.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              N !== v.layers.size - 1 ||
                (n?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, w),
            a.useEffect(() => {
              if (m)
                return (
                  r &&
                    (0 === v.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = "none")),
                    v.layersWithOutsidePointerEventsDisabled.add(m)),
                  v.layers.add(m),
                  x(),
                  () => {
                    r &&
                      1 === v.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = o);
                  }
                );
            }, [m, w, r, v]),
            a.useEffect(
              () => () => {
                m &&
                  (v.layers.delete(m),
                  v.layersWithOutsidePointerEventsDisabled.delete(m),
                  x());
              },
              [m, v]
            ),
            a.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(b, e),
                () => document.removeEventListener(b, e)
              );
            }, []),
            (0, c.jsx)(g.div, {
              ...p,
              ref: S,
              style: {
                pointerEvents: O ? (L ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: i(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: i(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: i(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function x() {
        let e = new CustomEvent(b);
        document.dispatchEvent(e);
      }
      function C(e, t, r, { discrete: n }) {
        let o = r.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && o.addEventListener(e, t, { once: !0 }), n)
          ? o && f.flushSync(() => o.dispatchEvent(a))
          : o.dispatchEvent(a);
      }
      (w.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let r = a.useContext(E),
            n = a.useRef(null),
            o = s(t, n);
          return (
            a.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, c.jsx)(g.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var R = 0;
      function S() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var k = "focusScope.autoFocusOnMount",
        P = "focusScope.autoFocusOnUnmount",
        A = { bubbles: !1, cancelable: !0 },
        N = a.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: n = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              ...i
            } = e,
            [u, d] = a.useState(null),
            f = y(o),
            p = y(l),
            v = a.useRef(null),
            m = s(t, (e) => d(e)),
            h = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          a.useEffect(() => {
            if (n) {
              let e = function (e) {
                  if (h.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (v.current = t)
                    : M(v.current, { select: !0 });
                },
                t = function (e) {
                  if (h.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || M(v.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && M(u);
              });
              return (
                u && r.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [n, u, h.paused]),
            a.useEffect(() => {
              if (u) {
                I.add(h);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(k, A);
                  u.addEventListener(k, f),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (M(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        O(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && M(u));
                }
                return () => {
                  u.removeEventListener(k, f),
                    setTimeout(() => {
                      let t = new CustomEvent(P, A);
                      u.addEventListener(P, p),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          M(e ?? document.body, { select: !0 }),
                        u.removeEventListener(P, p),
                        I.remove(h);
                    }, 0);
                };
              }
            }, [u, f, p, h]);
          let b = a.useCallback(
            (e) => {
              if ((!r && !n) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [n, a] = (function (e) {
                    let t = O(e);
                    return [L(t, e), L(t.reverse(), e)];
                  })(t);
                n && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === n &&
                      (e.preventDefault(), r && M(a, { select: !0 }))
                    : (e.preventDefault(), r && M(n, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [r, n, h.paused]
          );
          return (0, c.jsx)(g.div, {
            tabIndex: -1,
            ...i,
            ref: m,
            onKeyDown: b,
          });
        });
      function O(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function L(e, t) {
        for (let r of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function M(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      N.displayName = "FocusScope";
      var I =
        ((n = []),
        {
          add(e) {
            let t = n[0];
            e !== t && t?.pause(), (n = j(n, e)).unshift(e);
          },
          remove(e) {
            (n = j(n, e)), n[0]?.resume();
          },
        });
      function j(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
      var D = globalThis?.document ? a.useLayoutEffect : () => {},
        T = l["useId".toString()] || (() => void 0),
        F = 0,
        W = r(68065),
        _ = r(27567),
        $ = r(50457),
        V = a.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...a } = e;
          return (0, c.jsx)(g.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, c.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      V.displayName = "Arrow";
      var U = "Popper",
        [z, B] = d(U),
        [K, Y] = z(U),
        Z = (e) => {
          let { __scopePopper: t, children: r } = e,
            [n, o] = a.useState(null);
          return (0, c.jsx)(K, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r,
          });
        };
      Z.displayName = U;
      var H = "PopperAnchor",
        q = a.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: n, ...o } = e,
            l = Y(H, r),
            i = a.useRef(null),
            u = s(t, i);
          return (
            a.useEffect(() => {
              l.onAnchorChange(n?.current || i.current);
            }),
            n ? null : (0, c.jsx)(g.div, { ...o, ref: u })
          );
        });
      q.displayName = H;
      var X = "PopperContent",
        [G, J] = z(X),
        Q = a.forwardRef((e, t) => {
          let {
              __scopePopper: r,
              side: n = "bottom",
              sideOffset: o = 0,
              align: l = "center",
              alignOffset: i = 0,
              arrowPadding: u = 0,
              avoidCollisions: d = !0,
              collisionBoundary: f = [],
              collisionPadding: p = 0,
              sticky: v = "partial",
              hideWhenDetached: m = !1,
              updatePositionStrategy: h = "optimized",
              onPlaced: b,
              ...E
            } = e,
            w = Y(X, r),
            [x, C] = a.useState(null),
            R = s(t, (e) => C(e)),
            [S, k] = a.useState(null),
            P = (function (e) {
              let [t, r] = a.useState(void 0);
              return (
                D(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let n, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let a = t[0];
                      if ("borderBoxSize" in a) {
                        let e = a.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (n = t.inlineSize), (o = t.blockSize);
                      } else (n = e.offsetWidth), (o = e.offsetHeight);
                      r({ width: n, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  r(void 0);
                }, [e]),
                t
              );
            })(S),
            A = P?.width ?? 0,
            N = P?.height ?? 0,
            O =
              "number" == typeof p
                ? p
                : { top: 0, right: 0, bottom: 0, left: 0, ...p },
            L = Array.isArray(f) ? f : [f],
            M = L.length > 0,
            I = { padding: O, boundary: L.filter(en), altBoundary: M },
            {
              refs: j,
              floatingStyles: T,
              placement: F,
              isPositioned: V,
              middlewareData: U,
            } = (0, W.YF)({
              strategy: "fixed",
              placement: n + ("center" !== l ? "-" + l : ""),
              whileElementsMounted: (...e) =>
                (0, _.Me)(...e, { animationFrame: "always" === h }),
              elements: { reference: w.anchor },
              middleware: [
                (0, $.cv)({ mainAxis: o + N, alignmentAxis: i }),
                d &&
                  (0, $.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === v ? (0, $.dr)() : void 0,
                    ...I,
                  }),
                d && (0, $.RR)({ ...I }),
                (0, $.dp)({
                  ...I,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: r,
                    availableHeight: n,
                  }) => {
                    let { width: o, height: a } = t.reference,
                      l = e.floating.style;
                    l.setProperty("--radix-popper-available-width", `${r}px`),
                      l.setProperty(
                        "--radix-popper-available-height",
                        `${n}px`
                      ),
                      l.setProperty("--radix-popper-anchor-width", `${o}px`),
                      l.setProperty("--radix-popper-anchor-height", `${a}px`);
                  },
                }),
                S && (0, W.x7)({ element: S, padding: u }),
                eo({ arrowWidth: A, arrowHeight: N }),
                m && (0, $.Cp)({ strategy: "referenceHidden", ...I }),
              ],
            }),
            [z, B] = ea(F),
            K = y(b);
          D(() => {
            V && K?.();
          }, [V, K]);
          let Z = U.arrow?.x,
            H = U.arrow?.y,
            q = U.arrow?.centerOffset !== 0,
            [J, Q] = a.useState();
          return (
            D(() => {
              x && Q(window.getComputedStyle(x).zIndex);
            }, [x]),
            (0, c.jsx)("div", {
              ref: j.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...T,
                transform: V ? T.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: J,
                "--radix-popper-transform-origin": [
                  U.transformOrigin?.x,
                  U.transformOrigin?.y,
                ].join(" "),
                ...(U.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, c.jsx)(G, {
                scope: r,
                placedSide: z,
                onArrowChange: k,
                arrowX: Z,
                arrowY: H,
                shouldHideArrow: q,
                children: (0, c.jsx)(g.div, {
                  "data-side": z,
                  "data-align": B,
                  ...E,
                  ref: R,
                  style: { ...E.style, animation: V ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      Q.displayName = X;
      var ee = "PopperArrow",
        et = { top: "bottom", right: "left", bottom: "top", left: "right" },
        er = a.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = J(ee, r),
            a = et[o.placedSide];
          return (0,
          c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(V, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
        });
      function en(e) {
        return null !== e;
      }
      er.displayName = ee;
      var eo = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: r, rects: n, middlewareData: o } = t,
            a = o.arrow?.centerOffset !== 0,
            l = a ? 0 : e.arrowWidth,
            i = a ? 0 : e.arrowHeight,
            [u, s] = ea(r),
            c = { start: "0%", center: "50%", end: "100%" }[s],
            d = (o.arrow?.x ?? 0) + l / 2,
            f = (o.arrow?.y ?? 0) + i / 2,
            p = "",
            v = "";
          return (
            "bottom" === u
              ? ((p = a ? c : `${d}px`), (v = `${-i}px`))
              : "top" === u
              ? ((p = a ? c : `${d}px`), (v = `${n.floating.height + i}px`))
              : "right" === u
              ? ((p = `${-i}px`), (v = a ? c : `${f}px`))
              : "left" === u &&
                ((p = `${n.floating.width + i}px`), (v = a ? c : `${f}px`)),
            { data: { x: p, y: v } }
          );
        },
      });
      function ea(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var el = a.forwardRef((e, t) => {
        let { container: r, ...n } = e,
          [o, l] = a.useState(!1);
        D(() => l(!0), []);
        let i = r || (o && globalThis?.document?.body);
        return i
          ? f.createPortal((0, c.jsx)(g.div, { ...n, ref: t }), i)
          : null;
      });
      el.displayName = "Portal";
      var ei = (e) => {
        let t, r;
        let { present: n, children: o } = e,
          l = (function (e) {
            var t, r;
            let [n, o] = a.useState(),
              l = a.useRef({}),
              i = a.useRef(e),
              u = a.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (r = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                a.useReducer((e, t) => r[e][t] ?? e, t));
            return (
              a.useEffect(() => {
                let e = eu(l.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              D(() => {
                let t = l.current,
                  r = i.current;
                if (r !== e) {
                  let n = u.current,
                    o = eu(t);
                  e
                    ? c("MOUNT")
                    : "none" === o || t?.display === "none"
                    ? c("UNMOUNT")
                    : r && n !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (i.current = e);
                }
              }, [e, c]),
              D(() => {
                if (n) {
                  let e = (e) => {
                      let t = eu(l.current).includes(e.animationName);
                      e.target === n &&
                        t &&
                        f.flushSync(() => c("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === n && (u.current = eu(l.current));
                    };
                  return (
                    n.addEventListener("animationstart", t),
                    n.addEventListener("animationcancel", e),
                    n.addEventListener("animationend", e),
                    () => {
                      n.removeEventListener("animationstart", t),
                        n.removeEventListener("animationcancel", e),
                        n.removeEventListener("animationend", e);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [n, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: a.useCallback((e) => {
                  e && (l.current = getComputedStyle(e)), o(e);
                }, []),
              }
            );
          })(n),
          i =
            "function" == typeof o
              ? o({ present: l.isPresent })
              : a.Children.only(o),
          u = s(
            l.ref,
            (t = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning
              ? i.ref
              : (t = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? i.props.ref
              : i.props.ref || i.ref
          );
        return "function" == typeof o || l.isPresent
          ? a.cloneElement(i, { ref: u })
          : null;
      };
      function eu(e) {
        return e?.animationName || "none";
      }
      ei.displayName = "Presence";
      var es = r(49732),
        ec = r(50493),
        ed = r(95346),
        ef = r(22442),
        ep = (0, r(64597)._)(),
        ev = function () {},
        em = a.forwardRef(function (e, t) {
          var r = a.useRef(null),
            n = a.useState({
              onScrollCapture: ev,
              onWheelCapture: ev,
              onTouchMoveCapture: ev,
            }),
            o = n[0],
            l = n[1],
            i = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            b = (0, ec._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            E = (0, ef.q)([r, t]),
            w = (0, ec.pi)((0, ec.pi)({}, b), o);
          return a.createElement(
            a.Fragment,
            null,
            d &&
              a.createElement(p, {
                sideCar: ep,
                removeScrollBar: c,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: l,
                allowPinchZoom: !!h,
                lockRef: r,
                gapMode: y,
              }),
            i
              ? a.cloneElement(
                  a.Children.only(u),
                  (0, ec.pi)((0, ec.pi)({}, w), { ref: E })
                )
              : a.createElement(
                  void 0 === g ? "div" : g,
                  (0, ec.pi)({}, w, { className: s, ref: E }),
                  u
                )
          );
        });
      (em.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (em.classNames = { fullWidth: ed.zi, zeroRight: ed.pF });
      var eh = r(57758),
        eg = r(181),
        ey = r(33225),
        eb = !1;
      if ("undefined" != typeof window)
        try {
          var eE = Object.defineProperty({}, "passive", {
            get: function () {
              return (eb = !0), !0;
            },
          });
          window.addEventListener("test", eE, eE),
            window.removeEventListener("test", eE, eE);
        } catch (e) {
          eb = !1;
        }
      var ew = !!eb && { passive: !1 },
        ex = function (e, t) {
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        eC = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              eR(e, n))
            ) {
              var o = eS(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        eR = function (e, t) {
          return "v" === e ? ex(t, "overflowY") : ex(t, "overflowX");
        },
        eS = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ek = function (e, t, r, n, o) {
          var a,
            l =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            i = l * n,
            u = r.target,
            s = t.contains(u),
            c = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = eS(e, u),
              m = v[0],
              h = v[1] - v[2] - l * m;
            (m || h) && eR(e, u) && ((f += h), (p += m)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (c = !0),
            c
          );
        },
        eP = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        eA = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eN = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eO = 0,
        eL = [],
        eM = (0, eh.L)(ep, function (e) {
          var t = a.useRef([]),
            r = a.useRef([0, 0]),
            n = a.useRef(),
            o = a.useState(eO++)[0],
            l = a.useState(ey.Ws)[0],
            i = a.useRef(e);
          a.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, ec.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(eN),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = a.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !i.current.allowPinchZoom;
              var o,
                a = eP(e),
                l = r.current,
                u = "deltaX" in e ? e.deltaX : l[0] - a[0],
                s = "deltaY" in e ? e.deltaY : l[1] - a[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = eC(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = eC(d, c))),
                !f)
              )
                return !1;
              if (
                (!n.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (n.current = o),
                !o)
              )
                return !0;
              var p = n.current || o;
              return ek(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = a.useCallback(function (e) {
              if (eL.length && eL[eL.length - 1] === l) {
                var r = "deltaY" in e ? eA(e) : eP(e),
                  n = t.current.filter(function (t) {
                    var n;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (n = t.delta)[0] === r[0] &&
                      n[1] === r[1]
                    );
                  })[0];
                if (n && n.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!n) {
                  var o = (i.current.shards || [])
                    .map(eN)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = a.useCallback(function (e, r, n, o) {
              var a = {
                name: e,
                delta: r,
                target: n,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(n),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = a.useCallback(function (e) {
              (r.current = eP(e)), (n.current = void 0);
            }, []),
            f = a.useCallback(function (t) {
              c(t.type, eA(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              c(t.type, eP(t), t.target, u(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              eL.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, ew),
              document.addEventListener("touchmove", s, ew),
              document.addEventListener("touchstart", d, ew),
              function () {
                (eL = eL.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", s, ew),
                  document.removeEventListener("touchmove", s, ew),
                  document.removeEventListener("touchstart", d, ew);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            v ? a.createElement(eg.jp, { gapMode: e.gapMode }) : null
          );
        }),
        eI = a.forwardRef(function (e, t) {
          return a.createElement(
            em,
            (0, ec.pi)({}, e, { ref: t, sideCar: eM })
          );
        });
      eI.classNames = em.classNames;
      var ej = "Popover",
        [eD, eT] = d(ej, [B]),
        eF = B(),
        [eW, e_] = eD(ej),
        e$ = (e) => {
          let {
              __scopePopover: t,
              children: r,
              open: n,
              defaultOpen: o,
              onOpenChange: l,
              modal: i = !1,
            } = e,
            u = eF(t),
            s = a.useRef(null),
            [d, f] = a.useState(!1),
            [p = !1, v] = (function ({
              prop: e,
              defaultProp: t,
              onChange: r = () => {},
            }) {
              let [n, o] = (function ({ defaultProp: e, onChange: t }) {
                  let r = a.useState(e),
                    [n] = r,
                    o = a.useRef(n),
                    l = y(t);
                  return (
                    a.useEffect(() => {
                      o.current !== n && (l(n), (o.current = n));
                    }, [n, o, l]),
                    r
                  );
                })({ defaultProp: t, onChange: r }),
                l = void 0 !== e,
                i = l ? e : n,
                u = y(r);
              return [
                i,
                a.useCallback(
                  (t) => {
                    if (l) {
                      let r = "function" == typeof t ? t(e) : t;
                      r !== e && u(r);
                    } else o(t);
                  },
                  [l, e, o, u]
                ),
              ];
            })({ prop: n, defaultProp: o, onChange: l });
          return (0, c.jsx)(Z, {
            ...u,
            children: (0, c.jsx)(eW, {
              scope: t,
              contentId: (function (e) {
                let [t, r] = a.useState(T());
                return (
                  D(() => {
                    r((e) => e ?? String(F++));
                  }, [void 0]),
                  t ? `radix-${t}` : ""
                );
              })(),
              triggerRef: s,
              open: p,
              onOpenChange: v,
              onOpenToggle: a.useCallback(() => v((e) => !e), [v]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: a.useCallback(() => f(!0), []),
              onCustomAnchorRemove: a.useCallback(() => f(!1), []),
              modal: i,
              children: r,
            }),
          });
        };
      e$.displayName = ej;
      var eV = "PopoverAnchor",
        eU = a.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            o = e_(eV, r),
            l = eF(r),
            { onCustomAnchorAdd: i, onCustomAnchorRemove: u } = o;
          return (
            a.useEffect(() => (i(), () => u()), [i, u]),
            (0, c.jsx)(q, { ...l, ...n, ref: t })
          );
        });
      eU.displayName = eV;
      var ez = "PopoverTrigger",
        eB = a.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            o = e_(ez, r),
            a = eF(r),
            l = s(t, o.triggerRef),
            u = (0, c.jsx)(g.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": e1(o.open),
              ...n,
              ref: l,
              onClick: i(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? u
            : (0, c.jsx)(q, { asChild: !0, ...a, children: u });
        });
      eB.displayName = ez;
      var eK = "PopoverPortal",
        [eY, eZ] = eD(eK, { forceMount: void 0 }),
        eH = (e) => {
          let {
              __scopePopover: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            a = e_(eK, t);
          return (0, c.jsx)(eY, {
            scope: t,
            forceMount: r,
            children: (0, c.jsx)(ei, {
              present: r || a.open,
              children: (0, c.jsx)(el, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      eH.displayName = eK;
      var eq = "PopoverContent",
        eX = a.forwardRef((e, t) => {
          let r = eZ(eq, e.__scopePopover),
            { forceMount: n = r.forceMount, ...o } = e,
            a = e_(eq, e.__scopePopover);
          return (0, c.jsx)(ei, {
            present: n || a.open,
            children: a.modal
              ? (0, c.jsx)(eG, { ...o, ref: t })
              : (0, c.jsx)(eJ, { ...o, ref: t }),
          });
        });
      eX.displayName = eq;
      var eG = a.forwardRef((e, t) => {
          let r = e_(eq, e.__scopePopover),
            n = a.useRef(null),
            o = s(t, n),
            l = a.useRef(!1);
          return (
            a.useEffect(() => {
              let e = n.current;
              if (e) return (0, es.Ry)(e);
            }, []),
            (0, c.jsx)(eI, {
              as: p,
              allowPinchZoom: !0,
              children: (0, c.jsx)(eQ, {
                ...e,
                ref: o,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: i(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    l.current || r.triggerRef.current?.focus();
                }),
                onPointerDownOutside: i(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      r = 0 === t.button && !0 === t.ctrlKey,
                      n = 2 === t.button || r;
                    l.current = n;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: i(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            })
          );
        }),
        eJ = a.forwardRef((e, t) => {
          let r = e_(eq, e.__scopePopover),
            n = a.useRef(!1),
            o = a.useRef(!1);
          return (0, c.jsx)(eQ, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (n.current || r.triggerRef.current?.focus(),
                  t.preventDefault()),
                (n.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((n.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let a = t.target;
              r.triggerRef.current?.contains(a) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        eQ = a.forwardRef((e, t) => {
          let {
              __scopePopover: r,
              trapFocus: n,
              onOpenAutoFocus: o,
              onCloseAutoFocus: l,
              disableOutsidePointerEvents: i,
              onEscapeKeyDown: u,
              onPointerDownOutside: s,
              onFocusOutside: d,
              onInteractOutside: f,
              ...p
            } = e,
            v = e_(eq, r),
            m = eF(r);
          return (
            a.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? S()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? S()),
                R++,
                () => {
                  1 === R &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    R--;
                }
              );
            }, []),
            (0, c.jsx)(N, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              children: (0, c.jsx)(w, {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onInteractOutside: f,
                onEscapeKeyDown: u,
                onPointerDownOutside: s,
                onFocusOutside: d,
                onDismiss: () => v.onOpenChange(!1),
                children: (0, c.jsx)(Q, {
                  "data-state": e1(v.open),
                  role: "dialog",
                  id: v.contentId,
                  ...m,
                  ...p,
                  ref: t,
                  style: {
                    ...p.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        e0 = "PopoverClose";
      function e1(e) {
        return e ? "open" : "closed";
      }
      (a.forwardRef((e, t) => {
        let { __scopePopover: r, ...n } = e,
          o = e_(e0, r);
        return (0, c.jsx)(g.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: i(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = e0),
        (a.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            o = eF(r);
          return (0, c.jsx)(er, { ...o, ...n, ref: t });
        }).displayName = "PopoverArrow");
      var e2 = e$,
        e5 = eU,
        e9 = eB,
        e7 = eH,
        e3 = eX;
    },
    99219: function (e, t, r) {
      r.d(t, {
        mY: function () {
          return O;
        },
      });
      var n = /[\\\/_+.#"@\[\(\{&]/,
        o = /[\\\/_+.#"@\[\(\{&]/g,
        a = /[\s-]/,
        l = /[\s-]/g;
      function i(e) {
        return e.toLowerCase().replace(l, " ");
      }
      var u = r(81765),
        s = r(2784),
        c = r(57915),
        d = '[cmdk-group=""]',
        f = '[cmdk-group-items=""]',
        p = '[cmdk-item=""]',
        v = `${p}:not([aria-disabled="true"])`,
        m = "cmdk-item-select",
        h = "data-value",
        g = (e, t, r) => {
          var u;
          return (
            (u = e),
            (function e(t, r, i, u, s, c, d) {
              if (c === r.length) return s === t.length ? 1 : 0.99;
              var f = `${s},${c}`;
              if (void 0 !== d[f]) return d[f];
              for (
                var p, v, m, h, g = u.charAt(c), y = i.indexOf(g, s), b = 0;
                y >= 0;

              )
                (p = e(t, r, i, u, y + 1, c + 1, d)) > b &&
                  (y === s
                    ? (p *= 1)
                    : n.test(t.charAt(y - 1))
                    ? ((p *= 0.8),
                      (m = t.slice(s, y - 1).match(o)) &&
                        s > 0 &&
                        (p *= Math.pow(0.999, m.length)))
                    : a.test(t.charAt(y - 1))
                    ? ((p *= 0.9),
                      (h = t.slice(s, y - 1).match(l)) &&
                        s > 0 &&
                        (p *= Math.pow(0.999, h.length)))
                    : ((p *= 0.17), s > 0 && (p *= Math.pow(0.999, y - s))),
                  t.charAt(y) !== r.charAt(c) && (p *= 0.9999)),
                  ((p < 0.1 && i.charAt(y - 1) === u.charAt(c + 1)) ||
                    (u.charAt(c + 1) === u.charAt(c) &&
                      i.charAt(y - 1) !== u.charAt(c))) &&
                    0.1 * (v = e(t, r, i, u, y + 1, c + 2, d)) > p &&
                    (p = 0.1 * v),
                  p > b && (b = p),
                  (y = i.indexOf(g, y + 1));
              return (d[f] = b), b;
            })(
              (u = r && r.length > 0 ? `${u + " " + r.join(" ")}` : u),
              t,
              i(u),
              i(t),
              0,
              0,
              {}
            )
          );
        },
        y = s.createContext(void 0),
        b = () => s.useContext(y),
        E = s.createContext(void 0),
        w = () => s.useContext(E),
        x = s.createContext(void 0),
        C = s.forwardRef((e, t) => {
          let r = I(() => {
              var t, r;
              return {
                search: "",
                value:
                  null != (r = null != (t = e.value) ? t : e.defaultValue)
                    ? r
                    : "",
                filtered: { count: 0, items: new Map(), groups: new Set() },
              };
            }),
            n = I(() => new Set()),
            o = I(() => new Map()),
            a = I(() => new Map()),
            l = I(() => new Set()),
            i = L(e),
            {
              label: u,
              children: b,
              value: w,
              onValueChange: x,
              filter: C,
              shouldFilter: R,
              loop: S,
              disablePointerSelection: k = !1,
              vimBindings: P = !0,
              ...A
            } = e,
            N = s.useId(),
            O = s.useId(),
            j = s.useId(),
            D = s.useRef(null),
            T = F();
          M(() => {
            if (void 0 !== w) {
              let e = w.trim();
              (r.current.value = e), $.emit();
            }
          }, [w]),
            M(() => {
              T(6, Y);
            }, []);
          let $ = s.useMemo(
              () => ({
                subscribe: (e) => (l.current.add(e), () => l.current.delete(e)),
                snapshot: () => r.current,
                setState: (e, t, n) => {
                  var o, a, l;
                  if (!Object.is(r.current[e], t)) {
                    if (((r.current[e] = t), "search" === e)) K(), z(), T(1, B);
                    else if (
                      "value" === e &&
                      (n || T(5, Y),
                      (null == (o = i.current) ? void 0 : o.value) !== void 0)
                    ) {
                      null == (l = (a = i.current).onValueChange) ||
                        l.call(a, null != t ? t : "");
                      return;
                    }
                    $.emit();
                  }
                },
                emit: () => {
                  l.current.forEach((e) => e());
                },
              }),
              []
            ),
            V = s.useMemo(
              () => ({
                value: (e, t, n) => {
                  var o;
                  t !== (null == (o = a.current.get(e)) ? void 0 : o.value) &&
                    (a.current.set(e, { value: t, keywords: n }),
                    r.current.filtered.items.set(e, U(t, n)),
                    T(2, () => {
                      z(), $.emit();
                    }));
                },
                item: (e, t) => (
                  n.current.add(e),
                  t &&
                    (o.current.has(t)
                      ? o.current.get(t).add(e)
                      : o.current.set(t, new Set([e]))),
                  T(3, () => {
                    K(), z(), r.current.value || B(), $.emit();
                  }),
                  () => {
                    a.current.delete(e),
                      n.current.delete(e),
                      r.current.filtered.items.delete(e);
                    let t = Z();
                    T(4, () => {
                      K(),
                        (null == t ? void 0 : t.getAttribute("id")) === e &&
                          B(),
                        $.emit();
                    });
                  }
                ),
                group: (e) => (
                  o.current.has(e) || o.current.set(e, new Set()),
                  () => {
                    a.current.delete(e), o.current.delete(e);
                  }
                ),
                filter: () => i.current.shouldFilter,
                label: u || e["aria-label"],
                disablePointerSelection: k,
                listId: N,
                inputId: j,
                labelId: O,
                listInnerRef: D,
              }),
              []
            );
          function U(e, t) {
            var n, o;
            let a =
              null != (o = null == (n = i.current) ? void 0 : n.filter) ? o : g;
            return e ? a(e, r.current.search, t) : 0;
          }
          function z() {
            if (!r.current.search || !1 === i.current.shouldFilter) return;
            let e = r.current.filtered.items,
              t = [];
            r.current.filtered.groups.forEach((r) => {
              let n = o.current.get(r),
                a = 0;
              n.forEach((t) => {
                a = Math.max(e.get(t), a);
              }),
                t.push([r, a]);
            });
            let n = D.current;
            H()
              .sort((t, r) => {
                var n, o;
                let a = t.getAttribute("id"),
                  l = r.getAttribute("id");
                return (
                  (null != (n = e.get(l)) ? n : 0) -
                  (null != (o = e.get(a)) ? o : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(f);
                t
                  ? t.appendChild(
                      e.parentElement === t ? e : e.closest(`${f} > *`)
                    )
                  : n.appendChild(
                      e.parentElement === n ? e : e.closest(`${f} > *`)
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  let t = D.current.querySelector(
                    `${d}[${h}="${encodeURIComponent(e[0])}"]`
                  );
                  null == t || t.parentElement.appendChild(t);
                });
          }
          function B() {
            let e = H().find((e) => "true" !== e.getAttribute("aria-disabled")),
              t = null == e ? void 0 : e.getAttribute(h);
            $.setState("value", t || void 0);
          }
          function K() {
            var e, t, l, u;
            if (!r.current.search || !1 === i.current.shouldFilter) {
              r.current.filtered.count = n.current.size;
              return;
            }
            r.current.filtered.groups = new Set();
            let s = 0;
            for (let o of n.current) {
              let n = U(
                null != (t = null == (e = a.current.get(o)) ? void 0 : e.value)
                  ? t
                  : "",
                null !=
                  (u = null == (l = a.current.get(o)) ? void 0 : l.keywords)
                  ? u
                  : []
              );
              r.current.filtered.items.set(o, n), n > 0 && s++;
            }
            for (let [e, t] of o.current)
              for (let n of t)
                if (r.current.filtered.items.get(n) > 0) {
                  r.current.filtered.groups.add(e);
                  break;
                }
            r.current.filtered.count = s;
          }
          function Y() {
            var e, t, r;
            let n = Z();
            n &&
              ((null == (e = n.parentElement) ? void 0 : e.firstChild) === n &&
                (null ==
                  (r =
                    null == (t = n.closest(d))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  r.scrollIntoView({ block: "nearest" })),
              n.scrollIntoView({ block: "nearest" }));
          }
          function Z() {
            var e;
            return null == (e = D.current)
              ? void 0
              : e.querySelector(`${p}[aria-selected="true"]`);
          }
          function H() {
            var e;
            return Array.from(
              null == (e = D.current) ? void 0 : e.querySelectorAll(v)
            );
          }
          function q(e) {
            let t = H()[e];
            t && $.setState("value", t.getAttribute(h));
          }
          function X(e) {
            var t;
            let r = Z(),
              n = H(),
              o = n.findIndex((e) => e === r),
              a = n[o + e];
            null != (t = i.current) &&
              t.loop &&
              (a =
                o + e < 0
                  ? n[n.length - 1]
                  : o + e === n.length
                  ? n[0]
                  : n[o + e]),
              a && $.setState("value", a.getAttribute(h));
          }
          function G(e) {
            let t = Z(),
              r = null == t ? void 0 : t.closest(d),
              n;
            for (; r && !n; )
              n =
                null ==
                (r =
                  e > 0
                    ? (function (e, t) {
                        let r = e.nextElementSibling;
                        for (; r; ) {
                          if (r.matches(t)) return r;
                          r = r.nextElementSibling;
                        }
                      })(r, d)
                    : (function (e, t) {
                        let r = e.previousElementSibling;
                        for (; r; ) {
                          if (r.matches(t)) return r;
                          r = r.previousElementSibling;
                        }
                      })(r, d))
                  ? void 0
                  : r.querySelector(v);
            n ? $.setState("value", n.getAttribute(h)) : X(e);
          }
          let J = () => q(H().length - 1),
            Q = (e) => {
              e.preventDefault(), e.metaKey ? J() : e.altKey ? G(1) : X(1);
            },
            ee = (e) => {
              e.preventDefault(), e.metaKey ? q(0) : e.altKey ? G(-1) : X(-1);
            };
          return s.createElement(
            c.WV.div,
            {
              ref: t,
              tabIndex: -1,
              ...A,
              "cmdk-root": "",
              onKeyDown: (e) => {
                var t;
                if (
                  (null == (t = A.onKeyDown) || t.call(A, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case "n":
                    case "j":
                      P && e.ctrlKey && Q(e);
                      break;
                    case "ArrowDown":
                      Q(e);
                      break;
                    case "p":
                    case "k":
                      P && e.ctrlKey && ee(e);
                      break;
                    case "ArrowUp":
                      ee(e);
                      break;
                    case "Home":
                      e.preventDefault(), q(0);
                      break;
                    case "End":
                      e.preventDefault(), J();
                      break;
                    case "Enter":
                      if (!e.nativeEvent.isComposing && 229 !== e.keyCode) {
                        e.preventDefault();
                        let t = Z();
                        if (t) {
                          let e = new Event(m);
                          t.dispatchEvent(e);
                        }
                      }
                  }
              },
            },
            s.createElement(
              "label",
              { "cmdk-label": "", htmlFor: V.inputId, id: V.labelId, style: _ },
              u
            ),
            W(e, (e) =>
              s.createElement(
                E.Provider,
                { value: $ },
                s.createElement(y.Provider, { value: V }, e)
              )
            )
          );
        }),
        R = s.forwardRef((e, t) => {
          var r, n;
          let o = s.useId(),
            a = s.useRef(null),
            l = s.useContext(x),
            i = b(),
            u = L(e),
            d =
              null != (n = null == (r = u.current) ? void 0 : r.forceMount)
                ? n
                : null == l
                ? void 0
                : l.forceMount;
          M(() => {
            if (!d) return i.item(o, null == l ? void 0 : l.id);
          }, [d]);
          let f = T(o, a, [e.value, e.children, a], e.keywords),
            p = w(),
            v = D((e) => e.value && e.value === f.current),
            h = D(
              (e) =>
                !!d ||
                !1 === i.filter() ||
                !e.search ||
                e.filtered.items.get(o) > 0
            );
          function g() {
            var e, t;
            y(), null == (t = (e = u.current).onSelect) || t.call(e, f.current);
          }
          function y() {
            p.setState("value", f.current, !0);
          }
          if (
            (s.useEffect(() => {
              let t = a.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(m, g), () => t.removeEventListener(m, g)
                );
            }, [h, e.onSelect, e.disabled]),
            !h)
          )
            return null;
          let {
            disabled: E,
            value: C,
            onSelect: R,
            forceMount: S,
            keywords: k,
            ...P
          } = e;
          return s.createElement(
            c.WV.div,
            {
              ref: j([a, t]),
              ...P,
              id: o,
              "cmdk-item": "",
              role: "option",
              "aria-disabled": !!E,
              "aria-selected": !!v,
              "data-disabled": !!E,
              "data-selected": !!v,
              onPointerMove: E || i.disablePointerSelection ? void 0 : y,
              onClick: E ? void 0 : g,
            },
            e.children
          );
        }),
        S = s.forwardRef((e, t) => {
          let { heading: r, children: n, forceMount: o, ...a } = e,
            l = s.useId(),
            i = s.useRef(null),
            u = s.useRef(null),
            d = s.useId(),
            f = b(),
            p = D(
              (e) =>
                !!o ||
                !1 === f.filter() ||
                !e.search ||
                e.filtered.groups.has(l)
            );
          M(() => f.group(l), []), T(l, i, [e.value, e.heading, u]);
          let v = s.useMemo(() => ({ id: l, forceMount: o }), [o]);
          return s.createElement(
            c.WV.div,
            {
              ref: j([i, t]),
              ...a,
              "cmdk-group": "",
              role: "presentation",
              hidden: !p || void 0,
            },
            r &&
              s.createElement(
                "div",
                { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: d },
                r
              ),
            W(e, (e) =>
              s.createElement(
                "div",
                {
                  "cmdk-group-items": "",
                  role: "group",
                  "aria-labelledby": r ? d : void 0,
                },
                s.createElement(x.Provider, { value: v }, e)
              )
            )
          );
        }),
        k = s.forwardRef((e, t) => {
          let { alwaysRender: r, ...n } = e,
            o = s.useRef(null),
            a = D((e) => !e.search);
          return r || a
            ? s.createElement(c.WV.div, {
                ref: j([o, t]),
                ...n,
                "cmdk-separator": "",
                role: "separator",
              })
            : null;
        }),
        P = s.forwardRef((e, t) => {
          let { onValueChange: r, ...n } = e,
            o = null != e.value,
            a = w(),
            l = D((e) => e.search),
            i = D((e) => e.value),
            u = b(),
            d = s.useMemo(() => {
              var e;
              let t =
                null == (e = u.listInnerRef.current)
                  ? void 0
                  : e.querySelector(`${p}[${h}="${encodeURIComponent(i)}"]`);
              return null == t ? void 0 : t.getAttribute("id");
            }, []);
          return (
            s.useEffect(() => {
              null != e.value && a.setState("search", e.value);
            }, [e.value]),
            s.createElement(c.WV.input, {
              ref: t,
              ...n,
              "cmdk-input": "",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": u.listId,
              "aria-labelledby": u.labelId,
              "aria-activedescendant": d,
              id: u.inputId,
              type: "text",
              value: o ? e.value : l,
              onChange: (e) => {
                o || a.setState("search", e.target.value),
                  null == r || r(e.target.value);
              },
            })
          );
        }),
        A = s.forwardRef((e, t) => {
          let { children: r, label: n = "Suggestions", ...o } = e,
            a = s.useRef(null),
            l = s.useRef(null),
            i = b();
          return (
            s.useEffect(() => {
              if (l.current && a.current) {
                let e = l.current,
                  t = a.current,
                  r,
                  n = new ResizeObserver(() => {
                    r = requestAnimationFrame(() => {
                      let r = e.offsetHeight;
                      t.style.setProperty(
                        "--cmdk-list-height",
                        r.toFixed(1) + "px"
                      );
                    });
                  });
                return (
                  n.observe(e),
                  () => {
                    cancelAnimationFrame(r), n.unobserve(e);
                  }
                );
              }
            }, []),
            s.createElement(
              c.WV.div,
              {
                ref: j([a, t]),
                ...o,
                "cmdk-list": "",
                role: "listbox",
                "aria-label": n,
                id: i.listId,
              },
              W(e, (e) =>
                s.createElement(
                  "div",
                  { ref: j([l, i.listInnerRef]), "cmdk-list-sizer": "" },
                  e
                )
              )
            )
          );
        }),
        N = s.forwardRef((e, t) => {
          let {
            open: r,
            onOpenChange: n,
            overlayClassName: o,
            contentClassName: a,
            container: l,
            ...i
          } = e;
          return s.createElement(
            u.fC,
            { open: r, onOpenChange: n },
            s.createElement(
              u.h_,
              { container: l },
              s.createElement(u.aV, { "cmdk-overlay": "", className: o }),
              s.createElement(
                u.VY,
                { "aria-label": e.label, "cmdk-dialog": "", className: a },
                s.createElement(C, { ref: t, ...i })
              )
            )
          );
        }),
        O = Object.assign(C, {
          List: A,
          Item: R,
          Input: P,
          Group: S,
          Separator: k,
          Dialog: N,
          Empty: s.forwardRef((e, t) =>
            D((e) => 0 === e.filtered.count)
              ? s.createElement(c.WV.div, {
                  ref: t,
                  ...e,
                  "cmdk-empty": "",
                  role: "presentation",
                })
              : null
          ),
          Loading: s.forwardRef((e, t) => {
            let { progress: r, children: n, label: o = "Loading...", ...a } = e;
            return s.createElement(
              c.WV.div,
              {
                ref: t,
                ...a,
                "cmdk-loading": "",
                role: "progressbar",
                "aria-valuenow": r,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-label": o,
              },
              W(e, (e) => s.createElement("div", { "aria-hidden": !0 }, e))
            );
          }),
        });
      function L(e) {
        let t = s.useRef(e);
        return (
          M(() => {
            t.current = e;
          }),
          t
        );
      }
      var M = "undefined" == typeof window ? s.useEffect : s.useLayoutEffect;
      function I(e) {
        let t = s.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function j(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function D(e) {
        let t = w(),
          r = () => e(t.snapshot());
        return s.useSyncExternalStore(t.subscribe, r, r);
      }
      function T(e, t, r, n = []) {
        let o = s.useRef(),
          a = b();
        return (
          M(() => {
            var l;
            let i = (() => {
                var e;
                for (let t of r) {
                  if ("string" == typeof t) return t.trim();
                  if ("object" == typeof t && "current" in t)
                    return t.current
                      ? null == (e = t.current.textContent)
                        ? void 0
                        : e.trim()
                      : o.current;
                }
              })(),
              u = n.map((e) => e.trim());
            a.value(e, i, u),
              null == (l = t.current) || l.setAttribute(h, i),
              (o.current = i);
          }),
          o
        );
      }
      var F = () => {
        let [e, t] = s.useState(),
          r = I(() => new Map());
        return (
          M(() => {
            r.current.forEach((e) => e()), (r.current = new Map());
          }, [e]),
          (e, n) => {
            r.current.set(e, n), t({});
          }
        );
      };
      function W({ asChild: e, children: t }, r) {
        let n;
        return e && s.isValidElement(t)
          ? s.cloneElement(
              "function" == typeof (n = t.type)
                ? n(t.props)
                : "render" in n
                ? n.render(t.props)
                : t,
              { ref: t.ref },
              r(t.props.children)
            )
          : r(t);
      }
      var _ = {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      };
    },
    99: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(55132).Z)("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    },
    46204: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(55132).Z)("ChevronsUpDown", [
        ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
        ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
      ]);
    },
    51248: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(55132).Z)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    17644: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(55132).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
  },
]);
