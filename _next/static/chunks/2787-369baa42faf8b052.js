"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2787, 5159],
  {
    81765: function (e, t, n) {
      n.d(t, {
        Dx: function () {
          return H;
        },
        VY: function () {
          return q;
        },
        aV: function () {
          return Y;
        },
        dk: function () {
          return U;
        },
        fC: function () {
          return K;
        },
        h_: function () {
          return X;
        },
        x8: function () {
          return G;
        },
        xz: function () {
          return V;
        },
      });
      var r = n(7560),
        o = n(2784),
        a = n(38930),
        i = n(69968),
        u = n(72422),
        c = n(62825),
        l = n(68622),
        s = n(19590),
        d = n(68443),
        f = n(98074),
        p = n(80254),
        v = n(57915),
        m = n(10151),
        h = n(91869),
        g = n(49732),
        E = n(4522);
      let y = "Dialog",
        [b, w] = (0, u.b)(y),
        [C, k] = b(y),
        D = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...u } = e,
            c = k("DialogTrigger", n),
            l = (0, i.e)(t, c.triggerRef);
          return (0, o.createElement)(
            v.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": c.open,
                "aria-controls": c.contentId,
                "data-state": z(c.open),
              },
              u,
              { ref: l, onClick: (0, a.M)(e.onClick, c.onOpenToggle) }
            )
          );
        }),
        R = "DialogPortal",
        [M, T] = b(R, { forceMount: void 0 }),
        O = "DialogOverlay",
        S = (0, o.forwardRef)((e, t) => {
          let n = T(O, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            u = k(O, e.__scopeDialog);
          return u.modal
            ? (0, o.createElement)(
                p.z,
                { present: a || u.open },
                (0, o.createElement)(L, (0, r.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = k(O, n);
          return (0, o.createElement)(
            h.Z,
            { as: E.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, o.createElement)(
              v.WV.div,
              (0, r.Z)({ "data-state": z(i.open) }, a, {
                ref: t,
                style: { pointerEvents: "auto", ...a.style },
              })
            )
          );
        }),
        P = "DialogContent",
        _ = (0, o.forwardRef)((e, t) => {
          let n = T(P, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            u = k(P, e.__scopeDialog);
          return (0, o.createElement)(
            p.z,
            { present: a || u.open },
            u.modal
              ? (0, o.createElement)(W, (0, r.Z)({}, i, { ref: t }))
              : (0, o.createElement)(A, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        W = (0, o.forwardRef)((e, t) => {
          let n = k(P, e.__scopeDialog),
            u = (0, o.useRef)(null),
            c = (0, i.e)(t, n.contentRef, u);
          return (
            (0, o.useEffect)(() => {
              let e = u.current;
              if (e) return (0, g.Ry)(e);
            }, []),
            (0, o.createElement)(
              x,
              (0, r.Z)({}, e, {
                ref: c,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let n = k(P, e.__scopeDialog),
            a = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            x,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var r, o;
                null === (r = e.onCloseAutoFocus) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    (a.current ||
                      null === (o = n.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (a.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var r, o;
                null === (r = e.onInteractOutside) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    ((a.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let u = t.target;
                (null === (o = n.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(u)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        x = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: a,
              onOpenAutoFocus: u,
              onCloseAutoFocus: c,
              ...l
            } = e,
            f = k(P, n),
            p = (0, o.useRef)(null),
            v = (0, i.e)(t, p);
          return (
            (0, m.EW)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                d.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: a,
                  onMountAutoFocus: u,
                  onUnmountAutoFocus: c,
                },
                (0, o.createElement)(
                  s.XB,
                  (0, r.Z)(
                    {
                      role: "dialog",
                      id: f.contentId,
                      "aria-describedby": f.descriptionId,
                      "aria-labelledby": f.titleId,
                      "data-state": z(f.open),
                    },
                    l,
                    { ref: v, onDismiss: () => f.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        F = "DialogTitle",
        N = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = k(F, n);
          return (0, o.createElement)(
            v.WV.h2,
            (0, r.Z)({ id: i.titleId }, a, { ref: t })
          );
        }),
        Z = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = k("DialogDescription", n);
          return (0, o.createElement)(
            v.WV.p,
            (0, r.Z)({ id: i.descriptionId }, a, { ref: t })
          );
        }),
        I = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...i } = e,
            u = k("DialogClose", n);
          return (0, o.createElement)(
            v.WV.button,
            (0, r.Z)({ type: "button" }, i, {
              ref: t,
              onClick: (0, a.M)(e.onClick, () => u.onOpenChange(!1)),
            })
          );
        });
      function z(e) {
        return e ? "open" : "closed";
      }
      let [j, B] = (0, u.k)("DialogTitleWarning", {
          contentName: P,
          titleName: F,
          docsSlug: "dialog",
        }),
        K = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: u = !0,
            } = e,
            s = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [f = !1, p] = (0, l.T)({ prop: r, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            C,
            {
              scope: t,
              triggerRef: s,
              contentRef: d,
              contentId: (0, c.M)(),
              titleId: (0, c.M)(),
              descriptionId: (0, c.M)(),
              open: f,
              onOpenChange: p,
              onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
              modal: u,
            },
            n
          );
        },
        V = D,
        X = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = k(R, t);
          return (0, o.createElement)(
            M,
            { scope: t, forceMount: n },
            o.Children.map(r, (e) =>
              (0, o.createElement)(
                p.z,
                { present: n || i.open },
                (0, o.createElement)(f.h, { asChild: !0, container: a }, e)
              )
            )
          );
        },
        Y = S,
        q = _,
        H = N,
        U = Z,
        G = I;
    },
    19590: function (e, t, n) {
      let r;
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var o = n(7560),
        a = n(2784),
        i = n(38930),
        u = n(57915),
        c = n(69968),
        l = n(85751);
      let s = "dismissableLayer.update",
        d = (0, a.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = (0, a.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: h,
              onFocusOutside: g,
              onInteractOutside: E,
              onDismiss: y,
              ...b
            } = e,
            w = (0, a.useContext)(d),
            [C, k] = (0, a.useState)(null),
            D =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, R] = (0, a.useState)({}),
            M = (0, c.e)(t, (e) => k(e)),
            T = Array.from(w.layers),
            [O] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = T.indexOf(O),
            L = C ? T.indexOf(C) : -1,
            P = w.layersWithOutsidePointerEventsDisabled.size > 0,
            _ = L >= S,
            W = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e),
                r = (0, a.useRef)(!1),
                o = (0, a.useRef)(() => {});
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function a() {
                          v("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = a),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : a();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              !_ ||
                n ||
                (null == h || h(e),
                null == E || E(e),
                e.defaultPrevented || null == y || y());
            }, D),
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...w.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == E || E(e),
                e.defaultPrevented || null == y || y());
            }, D);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e);
              (0, a.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              L !== w.layers.size - 1 ||
                (null == m || m(e),
                !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, D),
            (0, a.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = D.body.style.pointerEvents),
                      (D.body.style.pointerEvents = "none")),
                    w.layersWithOutsidePointerEventsDisabled.add(C)),
                  w.layers.add(C),
                  p(),
                  () => {
                    f &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (D.body.style.pointerEvents = r);
                  }
                );
            }, [C, D, f, w]),
            (0, a.useEffect)(
              () => () => {
                C &&
                  (w.layers.delete(C),
                  w.layersWithOutsidePointerEventsDisabled.delete(C),
                  p());
              },
              [C, w]
            ),
            (0, a.useEffect)(() => {
              let e = () => R({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, a.createElement)(
              u.WV.div,
              (0, o.Z)({}, b, {
                ref: M,
                style: {
                  pointerEvents: P ? (_ ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, i.M)(e.onFocusCapture, A.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, A.onBlurCapture),
                onPointerDownCapture: (0, i.M)(
                  e.onPointerDownCapture,
                  W.onPointerDownCapture
                ),
              })
            )
          );
        });
      function p() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function v(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, u.jH)(o, a) : o.dispatchEvent(a);
      }
    },
    10151: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return a;
        },
      });
      var r = n(2784);
      let o = 0;
      function a() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    68443: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(7560),
        a = n(2784),
        i = n(69968),
        u = n(57915),
        c = n(85751);
      let l = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = (0, a.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...E
            } = e,
            [y, b] = (0, a.useState)(null),
            w = (0, c.W)(f),
            C = (0, c.W)(g),
            k = (0, a.useRef)(null),
            D = (0, i.e)(t, (e) => b(e)),
            R = (0, a.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, a.useEffect)(() => {
            if (r) {
              function e(e) {
                if (R.paused || !y) return;
                let t = e.target;
                y.contains(t) ? (k.current = t) : m(k.current, { select: !0 });
              }
              function t(e) {
                if (R.paused || !y) return;
                let t = e.relatedTarget;
                null === t || y.contains(t) || m(k.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(y);
              });
              return (
                y && n.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, y, R.paused]),
            (0, a.useEffect)(() => {
              if (y) {
                h.add(R);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(l, d);
                  y.addEventListener(l, w),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(y));
                }
                return () => {
                  y.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(s, d);
                      y.addEventListener(s, C),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(s, C),
                        h.remove(R);
                    }, 0);
                };
              }
            }, [y, w, C, R]);
          let M = (0, a.useCallback)(
            (e) => {
              if ((!n && !r) || R.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, a] = (function (e) {
                    let t = p(e);
                    return [v(t, e), v(t.reverse(), e)];
                  })(t);
                r && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && m(a, { select: !0 }))
                    : (e.preventDefault(), n && m(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, R.paused]
          );
          return (0, a.createElement)(
            u.WV.div,
            (0, o.Z)({ tabIndex: -1 }, E, { ref: D, onKeyDown: M })
          );
        });
      function p(e) {
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
      function v(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let h =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    98074: function (e, t, n) {
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(7560),
        o = n(2784),
        a = n(28316),
        i = n(57915);
      let u = (0, o.forwardRef)((e, t) => {
        var n;
        let {
          container: u = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...c
        } = e;
        return u
          ? a.createPortal(
              (0, o.createElement)(i.WV.div, (0, r.Z)({}, c, { ref: t })),
              u
            )
          : null;
      });
    },
    49732: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return l;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        a = {},
        i = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, c) {
          var l = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          a[n] || (a[n] = new WeakMap());
          var s = a[n],
            d = [],
            f = new Set(),
            p = new Set(l),
            v = function (e) {
              !e || f.has(e) || (f.add(e), v(e.parentNode));
            };
          l.forEach(v);
          var m = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else {
                  var t = e.getAttribute(c),
                    a = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    u = (s.get(e) || 0) + 1;
                  r.set(e, i),
                    s.set(e, u),
                    d.push(e),
                    1 === i && a && o.set(e, !0),
                    1 === u && e.setAttribute(n, "true"),
                    a || e.setAttribute(c, "true");
                }
              });
          };
          return (
            m(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  a = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, a),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  a || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (a = {}));
            }
          );
        },
        l = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    15159: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    59582: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    69380: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    65277: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(55132).Z)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    95346: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return i;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return a;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        a = "with-scroll-bars-hidden",
        i = "--removed-body-scroll-bar-size";
    },
    181: function (e, t, n) {
      n.d(t, {
        jp: function () {
          return f;
        },
      });
      var r = n(2784),
        o = n(33225),
        a = n(95346),
        i = { left: 0, top: 0, right: 0, gap: 0 },
        u = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        c = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [u(n), u(r), u(o)];
        },
        l = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return i;
          var t = c(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        s = (0, o.Ws)(),
        d = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(a.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        u,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(a.pF, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.zi, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.pF, " .")
              .concat(a.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.zi, " .")
              .concat(a.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat(a.Av, ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        f = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            a = void 0 === o ? "margin" : o,
            i = r.useMemo(
              function () {
                return l(a);
              },
              [a]
            );
          return r.createElement(s, {
            styles: d(i, !t, a, n ? "" : "!important"),
          });
        };
    },
    91869: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var r = n(50493),
        o = n(2784),
        a = n(95346),
        i = n(22442),
        u = (0, n(64597)._)(),
        c = function () {},
        l = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: c,
              onWheelCapture: c,
              onTouchMoveCapture: c,
            }),
            l = a[0],
            s = a[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            g = e.sideCar,
            E = e.noIsolation,
            y = e.inert,
            b = e.allowPinchZoom,
            w = e.as,
            C = (0, r._T)(e, [
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
            ]),
            k = (0, i.q)([n, t]),
            D = (0, r.pi)((0, r.pi)({}, C), l);
          return o.createElement(
            o.Fragment,
            null,
            m &&
              o.createElement(g, {
                sideCar: u,
                removeScrollBar: v,
                shards: h,
                noIsolation: E,
                inert: y,
                setCallbacks: s,
                allowPinchZoom: !!b,
                lockRef: n,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, r.pi)((0, r.pi)({}, D), { ref: k })
                )
              : o.createElement(
                  void 0 === w ? "div" : w,
                  (0, r.pi)({}, D, { className: p, ref: k }),
                  f
                )
          );
        });
      (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (l.classNames = { fullWidth: a.zi, zeroRight: a.pF });
      var s = n(57758),
        d = n(181),
        f = n(33225),
        p = !1;
      if ("undefined" != typeof window)
        try {
          var v = Object.defineProperty({}, "passive", {
            get: function () {
              return (p = !0), !0;
            },
          });
          window.addEventListener("test", v, v),
            window.removeEventListener("test", v, v);
        } catch (e) {
          p = !1;
        }
      var m = !!p && { passive: !1 },
        h = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        g = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              E(e, n))
            ) {
              var r = y(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        E = function (e, t) {
          return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
        },
        y = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        b = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            var v = y(e, c),
              m = v[0],
              h = v[1] - v[2] - i * m;
            (m || h) && E(e, c) && ((f += h), (p += m)), (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 0 === p) || (!o && -u > p)) && (s = !0),
            s
          );
        },
        w = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        C = function (e) {
          return [e.deltaX, e.deltaY];
        },
        k = function (e) {
          return e && "current" in e ? e.current : e;
        },
        D = 0,
        R = [],
        M = (0, s.L)(u, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            a = o.useRef(),
            i = o.useState(D++)[0],
            u = o.useState(function () {
              return (0, f.Ws)();
            })[0],
            c = o.useRef(e);
          o.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, r.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(k),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !c.current.allowPinchZoom;
              var r,
                o = w(e),
                i = n.current,
                u = "deltaX" in e ? e.deltaX : i[0] - o[0],
                l = "deltaY" in e ? e.deltaY : i[1] - o[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = g(d, s);
              if (!f) return !0;
              if (
                (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = g(d, s))), !f)
              )
                return !1;
              if (
                (!a.current &&
                  "changedTouches" in e &&
                  (u || l) &&
                  (a.current = r),
                !r)
              )
                return !0;
              var p = a.current || r;
              return b(p, t, e, "h" === p ? u : l, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (R.length && R[R.length - 1] === u) {
                var n = "deltaY" in e ? C(e) : w(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      t.target === e.target &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(k)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            p = o.useCallback(function (e, n, r, o) {
              var a = { name: e, delta: n, target: r, should: o };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            v = o.useCallback(function (e) {
              (n.current = w(e)), (a.current = void 0);
            }, []),
            h = o.useCallback(function (t) {
              p(t.type, C(t), t.target, l(t, e.lockRef.current));
            }, []),
            E = o.useCallback(function (t) {
              p(t.type, w(t), t.target, l(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              R.push(u),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: E,
              }),
              document.addEventListener("wheel", s, m),
              document.addEventListener("touchmove", s, m),
              document.addEventListener("touchstart", v, m),
              function () {
                (R = R.filter(function (e) {
                  return e !== u;
                })),
                  document.removeEventListener("wheel", s, m),
                  document.removeEventListener("touchmove", s, m),
                  document.removeEventListener("touchstart", v, m);
              }
            );
          }, []);
          var y = e.removeScrollBar,
            M = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            M
              ? o.createElement(u, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            y ? o.createElement(d.jp, { gapMode: "margin" }) : null
          );
        }),
        T = o.forwardRef(function (e, t) {
          return o.createElement(l, (0, r.pi)({}, e, { ref: t, sideCar: M }));
        });
      T.classNames = l.classNames;
      var O = T;
    },
    33225: function (e, t, n) {
      n.d(t, {
        Ws: function () {
          return u;
        },
      });
      var r,
        o = n(2784),
        a = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = o)
                  : a.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        i = function () {
          var e = a();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        u = function () {
          var e = i();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    50493: function (e, t, n) {
      n.d(t, {
        _T: function () {
          return o;
        },
        ev: function () {
          return a;
        },
        pi: function () {
          return r;
        },
      });
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function a(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    22442: function (e, t, n) {
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var r = n(2784);
      function o(e, t) {
        var n, o, a;
        return (
          (n = t || null),
          (o = function (t) {
            return e.forEach(function (e) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e;
            });
          }),
          ((a = (0, r.useState)(function () {
            return {
              value: n,
              callback: o,
              facade: {
                get current() {
                  return a.value;
                },
                set current(value) {
                  var e = a.value;
                  e !== value && ((a.value = value), a.callback(value, e));
                },
              },
            };
          })[0]).callback = o),
          a.facade
        );
      }
    },
    57758: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(50493),
        o = n(2784),
        a = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var a = t.read();
          if (!a) throw Error("Sidecar medium not found");
          return o.createElement(a, (0, r.pi)({}, n));
        };
      function i(e, t) {
        return e.useMedium(t), a;
      }
      a.isSideCarExport = !0;
    },
    64597: function (e, t, n) {
      n.d(t, {
        _: function () {
          return a;
        },
      });
      var r = n(50493);
      function o(e) {
        return e;
      }
      function a(e) {
        void 0 === e && (e = {});
        var t,
          n,
          a,
          i =
            (void 0 === t && (t = o),
            (n = []),
            (a = !1),
            {
              read: function () {
                if (a)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, a);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (a = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                a = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  i = function () {
                    return Promise.resolve().then(o);
                  };
                i(),
                  (n = {
                    push: function (e) {
                      t.push(e), i();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (i.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), i;
      }
    },
  },
]);
