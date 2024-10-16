(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [977],
  {
    20314: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return c;
        },
      });
      var o = r(2784),
        n = r(72422),
        u = r(69968),
        l = r(4522);
      function c(e) {
        let t = e + "CollectionProvider",
          [r, c] = (0, n.b)(t),
          [i, a] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          f = e + "CollectionSlot",
          s = o.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              c = a(f, r),
              i = (0, u.e)(t, c.collectionRef);
            return o.createElement(l.g7, { ref: i }, n);
          }),
          p = e + "CollectionItemSlot",
          d = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: r } = e,
                n = o.useRef(null),
                u = o.useRef(new Map()).current;
              return o.createElement(
                i,
                { scope: t, itemMap: u, collectionRef: n },
                r
              );
            },
            Slot: s,
            ItemSlot: o.forwardRef((e, t) => {
              let { scope: r, children: n, ...c } = e,
                i = o.useRef(null),
                f = (0, u.e)(t, i),
                s = a(p, r);
              return (
                o.useEffect(
                  () => (
                    s.itemMap.set(i, { ref: i, ...c }),
                    () => void s.itemMap.delete(i)
                  )
                ),
                o.createElement(l.g7, { [d]: "", ref: f }, n)
              );
            }),
          },
          function (t) {
            let r = a(e + "CollectionConsumer", t);
            return o.useCallback(() => {
              let e = r.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${d}]`));
              return Array.from(r.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
              );
            }, [r.collectionRef, r.itemMap]);
          },
          c,
        ];
      }
    },
    97368: function (e, t, r) {
      "use strict";
      r.d(t, {
        gm: function () {
          return u;
        },
      });
      var o = r(2784);
      let n = (0, o.createContext)(void 0);
      function u(e) {
        let t = (0, o.useContext)(n);
        return e || t || "ltr";
      }
    },
    19106: function (e, t, r) {
      "use strict";
      r.d(t, {
        Pc: function () {
          return E;
        },
        ck: function () {
          return T;
        },
        fC: function () {
          return x;
        },
      });
      var o = r(7560),
        n = r(2784),
        u = r(38930),
        l = r(20314),
        c = r(69968),
        i = r(72422),
        a = r(62825),
        f = r(57915),
        s = r(85751),
        p = r(68622),
        d = r(97368);
      let v = "rovingFocusGroup.onEntryFocus",
        m = { bubbles: !1, cancelable: !0 },
        b = "RovingFocusGroup",
        [g, w, R] = (0, l.B)(b),
        [h, E] = (0, i.b)(b, [R]),
        [S, I] = h(b),
        C = (0, n.forwardRef)((e, t) =>
          (0, n.createElement)(
            g.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, n.createElement)(
              g.Slot,
              { scope: e.__scopeRovingFocusGroup },
              (0, n.createElement)(F, (0, o.Z)({}, e, { ref: t }))
            )
          )
        ),
        F = (0, n.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: l,
              loop: i = !1,
              dir: a,
              currentTabStopId: b,
              defaultCurrentTabStopId: g,
              onCurrentTabStopIdChange: R,
              onEntryFocus: h,
              ...E
            } = e,
            I = (0, n.useRef)(null),
            C = (0, c.e)(t, I),
            F = (0, d.gm)(a),
            [y = null, A] = (0, p.T)({ prop: b, defaultProp: g, onChange: R }),
            [x, T] = (0, n.useState)(!1),
            k = (0, s.W)(h),
            _ = w(r),
            D = (0, n.useRef)(!1),
            [P, G] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              let e = I.current;
              if (e)
                return (
                  e.addEventListener(v, k), () => e.removeEventListener(v, k)
                );
            }, [k]),
            (0, n.createElement)(
              S,
              {
                scope: r,
                orientation: l,
                dir: F,
                loop: i,
                currentTabStopId: y,
                onItemFocus: (0, n.useCallback)((e) => A(e), [A]),
                onItemShiftTab: (0, n.useCallback)(() => T(!0), []),
                onFocusableItemAdd: (0, n.useCallback)(
                  () => G((e) => e + 1),
                  []
                ),
                onFocusableItemRemove: (0, n.useCallback)(
                  () => G((e) => e - 1),
                  []
                ),
              },
              (0, n.createElement)(
                f.WV.div,
                (0, o.Z)(
                  { tabIndex: x || 0 === P ? -1 : 0, "data-orientation": l },
                  E,
                  {
                    ref: C,
                    style: { outline: "none", ...e.style },
                    onMouseDown: (0, u.M)(e.onMouseDown, () => {
                      D.current = !0;
                    }),
                    onFocus: (0, u.M)(e.onFocus, (e) => {
                      let t = !D.current;
                      if (e.target === e.currentTarget && t && !x) {
                        let t = new CustomEvent(v, m);
                        if (
                          (e.currentTarget.dispatchEvent(t),
                          !t.defaultPrevented)
                        ) {
                          let e = _().filter((e) => e.focusable);
                          M(
                            [
                              e.find((e) => e.active),
                              e.find((e) => e.id === y),
                              ...e,
                            ]
                              .filter(Boolean)
                              .map((e) => e.ref.current)
                          );
                        }
                      }
                      D.current = !1;
                    }),
                    onBlur: (0, u.M)(e.onBlur, () => T(!1)),
                  }
                )
              )
            )
          );
        }),
        y = (0, n.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: l = !0,
              active: c = !1,
              tabStopId: i,
              ...s
            } = e,
            p = (0, a.M)(),
            d = i || p,
            v = I("RovingFocusGroupItem", r),
            m = v.currentTabStopId === d,
            b = w(r),
            { onFocusableItemAdd: R, onFocusableItemRemove: h } = v;
          return (
            (0, n.useEffect)(() => {
              if (l) return R(), () => h();
            }, [l, R, h]),
            (0, n.createElement)(
              g.ItemSlot,
              { scope: r, id: d, focusable: l, active: c },
              (0, n.createElement)(
                f.WV.span,
                (0, o.Z)(
                  { tabIndex: m ? 0 : -1, "data-orientation": v.orientation },
                  s,
                  {
                    ref: t,
                    onMouseDown: (0, u.M)(e.onMouseDown, (e) => {
                      l ? v.onItemFocus(d) : e.preventDefault();
                    }),
                    onFocus: (0, u.M)(e.onFocus, () => v.onItemFocus(d)),
                    onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                      if ("Tab" === e.key && e.shiftKey) {
                        v.onItemShiftTab();
                        return;
                      }
                      if (e.target !== e.currentTarget) return;
                      let t = (function (e, t, r) {
                        var o;
                        let n =
                          ((o = e.key),
                          "rtl" !== r
                            ? o
                            : "ArrowLeft" === o
                            ? "ArrowRight"
                            : "ArrowRight" === o
                            ? "ArrowLeft"
                            : o);
                        if (
                          !(
                            "vertical" === t &&
                            ["ArrowLeft", "ArrowRight"].includes(n)
                          ) &&
                          !(
                            "horizontal" === t &&
                            ["ArrowUp", "ArrowDown"].includes(n)
                          )
                        )
                          return A[n];
                      })(e, v.orientation, v.dir);
                      if (void 0 !== t) {
                        e.preventDefault();
                        let n = b()
                          .filter((e) => e.focusable)
                          .map((e) => e.ref.current);
                        if ("last" === t) n.reverse();
                        else if ("prev" === t || "next" === t) {
                          var r, o;
                          "prev" === t && n.reverse();
                          let u = n.indexOf(e.currentTarget);
                          n = v.loop
                            ? ((r = n),
                              (o = u + 1),
                              r.map((e, t) => r[(o + t) % r.length]))
                            : n.slice(u + 1);
                        }
                        setTimeout(() => M(n));
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        A = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
      function M(e) {
        let t = document.activeElement;
        for (let r of e)
          if (r === t || (r.focus(), document.activeElement !== t)) return;
      }
      let x = C,
        T = y;
    },
    72779: function (e, t) {
      var r;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function n() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var u = typeof r;
              if ("string" === u || "number" === u) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var l = n.apply(null, r);
                  l && e.push(l);
                }
              } else if ("object" === u) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var c in r) o.call(r, c) && r[c] && e.push(c);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((n.default = n), (e.exports = n))
          : void 0 !==
              (r = function () {
                return n;
              }.apply(t, [])) && (e.exports = r);
      })();
    },
  },
]);
