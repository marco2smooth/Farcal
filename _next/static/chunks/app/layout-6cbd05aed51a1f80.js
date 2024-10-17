(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    836: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 4080, 23)),
        Promise.resolve().then(n.t.bind(n, 4908, 23)),
        Promise.resolve().then(n.bind(n, 3054)),
        Promise.resolve().then(n.bind(n, 9051)),
        Promise.resolve().then(n.bind(n, 5291)),
        Promise.resolve().then(n.bind(n, 6170));
    },
    905: function (e, t) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return i;
          },
          default: function () {
            return l;
          },
          isEqualNode: function () {
            return r;
          },
        });
      let i = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function o(e) {
        let { type: t, props: n } = e,
          o = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let r = i[e] || e.toLowerCase();
          "script" === t && ("async" === r || "defer" === r || "noModule" === r)
            ? (o[r] = !!n[e])
            : o.setAttribute(r, n[e]);
        }
        let { children: r, dangerouslySetInnerHTML: l } = n;
        return (
          l
            ? (o.innerHTML = l.__html || "")
            : r &&
              (o.textContent =
                "string" == typeof r ? r : Array.isArray(r) ? r.join("") : ""),
          o
        );
      }
      function r(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let i = t.cloneNode(!0);
            return (
              i.setAttribute("nonce", ""),
              (i.nonce = n),
              n === e.nonce && e.isEqualNode(i)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function l() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let i = t.title ? t.title[0] : null,
              o = "";
            if (i) {
              let { children: e } = i.props;
              o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            o !== document.title && (document.title = o),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          i = n.querySelector("meta[name=next-head-count]"),
          l = Number(i.content),
          s = [];
        for (
          let t = 0, n = i.previousElementSibling;
          t < l;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var a;
          (null == n
            ? void 0
            : null == (a = n.tagName)
            ? void 0
            : a.toLowerCase()) === e && s.push(n);
        }
        let d = t.map(o).filter((e) => {
          for (let t = 0, n = s.length; t < n; t++)
            if (r(s[t], e)) return s.splice(t, 1), !1;
          return !0;
        });
        s.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          d.forEach((e) => n.insertBefore(e, i)),
          (i.content = (l - s.length + d.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9189: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return i;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        i =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4080: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let i = n(9920),
        o = n(1452),
        r = n(7437),
        l = i._(n(4887)),
        s = o._(n(2265)),
        a = n(6590),
        d = n(905),
        p = n(9189),
        c = new Map(),
        u = new Set(),
        v = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        h = (e) => {
          if (l.default.preinit) {
            e.forEach((e) => {
              l.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        f = (e) => {
          let {
              src: t,
              id: n,
              onLoad: i = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: r,
              children: l = "",
              strategy: s = "afterInteractive",
              onError: a,
              stylesheets: p,
            } = e,
            f = n || t;
          if (f && u.has(f)) return;
          if (c.has(t)) {
            u.add(f), c.get(t).then(i, a);
            return;
          }
          let m = () => {
              o && o(), u.add(f);
            },
            g = document.createElement("script"),
            w = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), i && i.call(this, t), m();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              a && a(e);
            });
          for (let [n, i] of (r
            ? ((g.innerHTML = r.__html || ""), m())
            : l
            ? ((g.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
              m())
            : t && ((g.src = t), c.set(t, w)),
          Object.entries(e))) {
            if (void 0 === i || v.includes(n)) continue;
            let e = d.DOMAttributeNames[n] || n.toLowerCase();
            g.setAttribute(e, i);
          }
          "worker" === s && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", s),
            p && h(p);
           // document.body.appendChild(g);
        };
      function m(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, p.requestIdleCallback)(() => f(e));
            })
          : f(e);
      }
      function g(e) {
        e.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            u.add(t);
          });
      }
      function w(e) {
        let {
            id: t,
            src: n = "",
            onLoad: i = () => {},
            onReady: o = null,
            strategy: d = "afterInteractive",
            onError: c,
            stylesheets: v,
            ...h
          } = e,
          {
            updateScripts: m,
            scripts: g,
            getIsSsr: w,
            appDir: y,
            nonce: b,
          } = (0, s.useContext)(a.HeadManagerContext),
          _ = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = t || n;
          _.current || (o && e && u.has(e) && o(), (_.current = !0));
        }, [o, t, n]);
        let x = (0, s.useRef)(!1);
        if (
          ((0, s.useEffect)(() => {
            !x.current &&
              ("afterInteractive" === d
                ? f(e)
                : "lazyOnload" === d &&
                  ("complete" === document.readyState
                    ? (0, p.requestIdleCallback)(() => f(e))
                    : window.addEventListener("load", () => {
                        (0, p.requestIdleCallback)(() => f(e));
                      })),
              (x.current = !0));
          }, [e, d]),
          ("beforeInteractive" === d || "worker" === d) &&
            (m
              ? ((g[d] = (g[d] || []).concat([
                  { id: t, src: n, onLoad: i, onReady: o, onError: c, ...h },
                ])),
                m(g))
              : w && w()
              ? u.add(t || n)
              : w && !w() && f(e)),
          y)
        ) {
          if (
            (v &&
              v.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === d)
          )
            return n
              ? (l.default.preload(
                  n,
                  h.integrity
                    ? { as: "script", integrity: h.integrity, nonce: b }
                    : { as: "script", nonce: b }
                ),
                (0, r.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...h, id: t }]) +
                      ")",
                  },
                }))
              : (h.dangerouslySetInnerHTML &&
                  ((h.children = h.dangerouslySetInnerHTML.__html),
                  delete h.dangerouslySetInnerHTML),
                (0, r.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...h, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === d &&
            n &&
            l.default.preload(
              n,
              h.integrity
                ? { as: "script", integrity: h.integrity, nonce: b }
                : { as: "script", nonce: b }
            );
        }
        return null;
      }
      Object.defineProperty(w, "__nextScript", { value: !0 });
      let y = w;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6170: function (e, t, n) {
      "use strict";
      n.d(t, {
        TourGuideProvider: function () {
          return T;
        },
      });
      var i = n(7437),
        o = n(2265);
      let r = {};
      function l(e = {}) {
        r = {
          animate: !0,
          allowClose: !0,
          overlayOpacity: 0.7,
          smoothScroll: !1,
          disableActiveInteraction: !1,
          showProgress: !1,
          stagePadding: 10,
          stageRadius: 5,
          popoverOffset: 10,
          showButtons: ["next", "previous", "close"],
          disableButtons: [],
          overlayColor: "#000",
          ...e,
        };
      }
      function s(e) {
        return e ? r[e] : r;
      }
      function a(e, t, n, i) {
        return (e /= i / 2) < 1
          ? (n / 2) * e * e + t
          : (-n / 2) * (--e * (e - 2) - 1) + t;
      }
      function d(e) {
        let t =
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
        return e
          .flatMap((e) => {
            let n = e.matches(t),
              i = Array.from(e.querySelectorAll(t));
            return [...(n ? [e] : []), ...i];
          })
          .filter(
            (e) =>
              "none" !== getComputedStyle(e).pointerEvents &&
              !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
          );
      }
      function p(e) {
        if (
          !e ||
          (function (e) {
            let t = e.getBoundingClientRect();
            return (
              t.top >= 0 &&
              t.left >= 0 &&
              t.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              t.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          })(e)
        )
          return;
        let t = s("smoothScroll");
        e.scrollIntoView({
          behavior:
            !t ||
            (function (e) {
              if (!e || !e.parentElement) return;
              let t = e.parentElement;
              return t.scrollHeight > t.clientHeight;
            })(e)
              ? "auto"
              : "smooth",
          inline: "center",
          block: "center",
        });
      }
      let c = {};
      function u(e) {
        return e ? c[e] : c;
      }
      let v = {};
      function h(e) {
        var t;
        null == (t = v[e]) || t.call(v);
      }
      function f(e) {
        if (!e) return;
        let t = e.getBoundingClientRect(),
          n = { x: t.x, y: t.y, width: t.width, height: t.height };
        (c.__activeStagePosition = n), m(n);
      }
      function m(e) {
        let t = u("__overlaySvg");
        if (!t) {
          !(function (e) {
            let t = (function (e) {
              let t = window.innerWidth,
                n = window.innerHeight,
                i = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
              i.classList.add("driver-overlay", "driver-overlay-animated"),
                i.setAttribute("viewBox", `0 0 ${t} ${n}`),
                i.setAttribute("xmlSpace", "preserve"),
                i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"),
                i.setAttribute("version", "1.1"),
                i.setAttribute("preserveAspectRatio", "xMinYMin slice"),
                (i.style.fillRule = "evenodd"),
                (i.style.clipRule = "evenodd"),
                (i.style.strokeLinejoin = "round"),
                (i.style.strokeMiterlimit = "2"),
                (i.style.zIndex = "10000"),
                (i.style.position = "fixed"),
                (i.style.top = "0"),
                (i.style.left = "0"),
                (i.style.width = "100%"),
                (i.style.height = "100%");
              let o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                o.setAttribute("d", g(e)),
                (o.style.fill = s("overlayColor") || "rgb(0,0,0)"),
                (o.style.opacity = `${s("overlayOpacity")}`),
                (o.style.pointerEvents = "auto"),
                (o.style.cursor = "auto"),
                i.appendChild(o),
                i
              );
            })(e);
            document.body.appendChild(t),
              C(t, (e) => {
                "path" === e.target.tagName && h("overlayClick");
              }),
              (c.__overlaySvg = t);
          })(e);
          return;
        }
        let n = t.firstElementChild;
        if ((null == n ? void 0 : n.tagName) !== "path")
          throw Error("no path element found in stage svg");
        n.setAttribute("d", g(e));
      }
      function g(e) {
        let t = window.innerWidth,
          n = window.innerHeight,
          i = s("stagePadding") || 0,
          o = s("stageRadius") || 0,
          r = e.width + 2 * i,
          l = e.height + 2 * i,
          a = Math.floor(Math.max(Math.min(o, r / 2, l / 2), 0)),
          d = e.x - i + a,
          p = e.y - i,
          c = r - 2 * a,
          u = l - 2 * a;
        return `M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${d},${p} h${c} a${a},${a} 0 0 1 ${a},${a} v${u} a${a},${a} 0 0 1 -${a},${a} h-${c} a${a},${a} 0 0 1 -${a},-${a} v-${u} a${a},${a} 0 0 1 ${a},-${a} z`;
      }
      function w(e) {
        let { element: t } = e,
          n = "string" == typeof t ? document.querySelector(t) : t;
        n ||
          (n = (function () {
            let e = document.getElementById("driver-dummy-element");
            if (e) return e;
            let t = document.createElement("div");
            return (
              (t.id = "driver-dummy-element"),
              (t.style.width = "0"),
              (t.style.height = "0"),
              (t.style.pointerEvents = "none"),
              (t.style.opacity = "0"),
              (t.style.position = "fixed"),
              (t.style.top = "50%"),
              (t.style.left = "50%"),
              document.body.appendChild(t),
              t
            );
          })()),
          (function (e, t) {
            let n = Date.now(),
              i = u("__activeStep"),
              o = u("__activeElement") || e,
              r = !o || o === e,
              l = "driver-dummy-element" === e.id,
              d = "driver-dummy-element" === o.id,
              v = s("animate"),
              h = t.onHighlightStarted || s("onHighlightStarted"),
              g = (null == t ? void 0 : t.onHighlighted) || s("onHighlighted"),
              w = (null == i ? void 0 : i.onDeselected) || s("onDeselected"),
              y = s(),
              b = u();
            !r && w && w(d ? void 0 : o, i, { config: y, state: b }),
              h && h(l ? void 0 : e, t, { config: y, state: b });
            let _ = !r && v,
              x = !1;
            (function () {
              let e = u("popover");
              e && (e.wrapper.style.display = "none");
            })(),
              (c.previousStep = i),
              (c.previousElement = o),
              (c.activeStep = t),
              (c.activeElement = e);
            let C = () => {
              var r;
              if (u("__transitionCallback") !== C) return;
              let d = Date.now() - n,
                p = 400 - d <= 200;
              t.popover && p && !x && _ && (E(e, t), (x = !0)),
                s("animate") && d < 400
                  ? (function (e, t, n, i) {
                      var o;
                      let r = u("__activeStagePosition"),
                        l = r || n.getBoundingClientRect(),
                        s = i.getBoundingClientRect(),
                        d = a(e, l.x, s.x - l.x, 400);
                      m(
                        (r = {
                          x: d,
                          y: a(e, l.y, s.y - l.y, 400),
                          width: a(e, l.width, s.width - l.width, 400),
                          height: a(e, l.height, s.height - l.height, t),
                        })
                      ),
                        (o = r),
                        (c.__activeStagePosition = o);
                    })(d, 400, o, e)
                  : (f(e),
                    g && g(l ? void 0 : e, t, { config: s(), state: u() }),
                    (r = void 0),
                    (c.__transitionCallback = r),
                    (c.__previousStep = i),
                    (c.__previousElement = o),
                    (c.__activeStep = t),
                    (c.__activeElement = e)),
                window.requestAnimationFrame(C);
            };
            (c.__transitionCallback = C),
              window.requestAnimationFrame(C),
              p(e),
              !_ && t.popover && E(e, t),
              o.classList.remove(
                "driver-active-element",
                "driver-no-interaction"
              ),
              o.removeAttribute("aria-haspopup"),
              o.removeAttribute("aria-expanded"),
              o.removeAttribute("aria-controls"),
              s("disableActiveInteraction") &&
                e.classList.add("driver-no-interaction"),
              e.classList.add("driver-active-element"),
              e.setAttribute("aria-haspopup", "dialog"),
              e.setAttribute("aria-expanded", "true"),
              e.setAttribute("aria-controls", "driver-popover-content");
          })(n, e);
      }
      function y() {
        let e = u("__activeElement"),
          t = u("__activeStep");
        e &&
          (f(e),
          (function () {
            let e = u("__activeStagePosition"),
              t = u("__overlaySvg");
            if (!e) return;
            if (!t) {
              console.warn("No stage svg found.");
              return;
            }
            let n = window.innerWidth,
              i = window.innerHeight;
            t.setAttribute("viewBox", `0 0 ${n} ${i}`);
          })(),
          S(e, t));
      }
      function b() {
        var e;
        let t = u("__resizeTimeout");
        t && window.cancelAnimationFrame(t),
          (e = window.requestAnimationFrame(y)),
          (c.__resizeTimeout = e);
      }
      function _(e) {
        var t;
        if (!u("isInitialized") || !("Tab" === e.key || 9 === e.keyCode))
          return;
        let n = u("__activeElement"),
          i = null == (t = u("popover")) ? void 0 : t.wrapper,
          o = d([...(i ? [i] : []), ...(n ? [n] : [])]),
          r = o[0],
          l = o[o.length - 1];
        if ((e.preventDefault(), e.shiftKey)) {
          let e = o[o.indexOf(document.activeElement) - 1] || l;
          null == e || e.focus();
        } else {
          let e = o[o.indexOf(document.activeElement) + 1] || r;
          null == e || e.focus();
        }
      }
      function x(e) {
        var t;
        (null == (t = s("allowKeyboardControl")) || t) &&
          ("Escape" === e.key
            ? h("escapePress")
            : "ArrowRight" === e.key
            ? h("arrowRightPress")
            : "ArrowLeft" === e.key && h("arrowLeftPress"));
      }
      function C(e, t, n) {
        let i = (t, i) => {
          let o = t.target;
          e.contains(o) &&
            ((!n || n(o)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              t.stopImmediatePropagation()),
            null == i || i(t));
        };
        document.addEventListener("pointerdown", i, !0),
          document.addEventListener("mousedown", i, !0),
          document.addEventListener("pointerup", i, !0),
          document.addEventListener("mouseup", i, !0),
          document.addEventListener(
            "click",
            (e) => {
              i(e, t);
            },
            !0
          );
      }
      function E(e, t) {
        var n, i, o;
        let r = u("popover");
        r && document.body.removeChild(r.wrapper),
          (r = (function () {
            let e = document.createElement("div");
            e.classList.add("driver-popover");
            let t = document.createElement("div");
            t.classList.add("driver-popover-arrow");
            let n = document.createElement("header");
            (n.id = "driver-popover-title"),
              n.classList.add("driver-popover-title"),
              (n.style.display = "none"),
              (n.innerText = "Popover Title");
            let i = document.createElement("div");
            (i.id = "driver-popover-description"),
              i.classList.add("driver-popover-description"),
              (i.style.display = "none"),
              (i.innerText = "Popover description is here");
            let o = document.createElement("button");
            (o.type = "button"),
              o.classList.add("driver-popover-close-btn"),
              o.setAttribute("aria-label", "Close"),
              (o.innerHTML = "&times;");
            let r = document.createElement("footer");
            r.classList.add("driver-popover-footer");
            let l = document.createElement("span");
            l.classList.add("driver-popover-progress-text"), (l.innerText = "");
            let s = document.createElement("span");
            s.classList.add("driver-popover-navigation-btns");
            let a = document.createElement("button");
            (a.type = "button"),
              a.classList.add("driver-popover-prev-btn"),
              (a.innerHTML = "&larr; Previous");
            let d = document.createElement("button");
            return (
              (d.type = "button"),
              d.classList.add("driver-popover-next-btn"),
              (d.innerHTML = "Next &rarr;"),
              s.appendChild(a),
              s.appendChild(d),
              r.appendChild(l),
              r.appendChild(s),
              e.appendChild(o),
              e.appendChild(t),
              e.appendChild(n),
              e.appendChild(i),
              e.appendChild(r),
              {
                wrapper: e,
                arrow: t,
                title: n,
                description: i,
                footer: r,
                previousButton: a,
                nextButton: d,
                closeButton: o,
                footerButtons: s,
                progress: l,
              }
            );
          })()),
          document.body.appendChild(r.wrapper);
        let {
          title: l,
          description: a,
          showButtons: v,
          disableButtons: f,
          showProgress: m,
          nextBtnText: g = s("nextBtnText") || "Next &rarr;",
          prevBtnText: w = s("prevBtnText") || "&larr; Previous",
          progressText: y = s("progressText") || "{current} of {total}",
        } = t.popover || {};
        (r.nextButton.innerHTML = g),
          (r.previousButton.innerHTML = w),
          (r.progress.innerHTML = y),
          l
            ? ((r.title.innerHTML = l), (r.title.style.display = "block"))
            : (r.title.style.display = "none"),
          a
            ? ((r.description.innerHTML = a),
              (r.description.style.display = "block"))
            : (r.description.style.display = "none");
        let b = v || s("showButtons"),
          _ = m || s("showProgress") || !1,
          x =
            (null == b ? void 0 : b.includes("next")) ||
            (null == b ? void 0 : b.includes("previous")) ||
            _;
        (r.closeButton.style.display = b.includes("close") ? "block" : "none"),
          x
            ? ((r.footer.style.display = "flex"),
              (r.progress.style.display = _ ? "block" : "none"),
              (r.nextButton.style.display = b.includes("next")
                ? "block"
                : "none"),
              (r.previousButton.style.display = b.includes("previous")
                ? "block"
                : "none"))
            : (r.footer.style.display = "none");
        let E = f || s("disableButtons") || [];
        null != E &&
          E.includes("next") &&
          ((r.nextButton.disabled = !0),
          r.nextButton.classList.add("driver-popover-btn-disabled")),
          null != E &&
            E.includes("previous") &&
            ((r.previousButton.disabled = !0),
            r.previousButton.classList.add("driver-popover-btn-disabled")),
          null != E &&
            E.includes("close") &&
            ((r.closeButton.disabled = !0),
            r.closeButton.classList.add("driver-popover-btn-disabled"));
        let k = r.wrapper;
        (k.style.display = "block"),
          (k.style.left = ""),
          (k.style.top = ""),
          (k.style.bottom = ""),
          (k.style.right = ""),
          (k.id = "driver-popover-content"),
          k.setAttribute("role", "dialog"),
          k.setAttribute("aria-labelledby", "driver-popover-title"),
          k.setAttribute("aria-describedby", "driver-popover-description"),
          (r.arrow.className = "driver-popover-arrow");
        let L =
          (null == (n = t.popover) ? void 0 : n.popoverClass) ||
          s("popoverClass") ||
          "";
        (k.className = `driver-popover ${L}`.trim()),
          C(
            r.wrapper,
            (n) => {
              var i, o, r;
              let l = n.target,
                a =
                  (null == (i = t.popover) ? void 0 : i.onNextClick) ||
                  s("onNextClick"),
                d =
                  (null == (o = t.popover) ? void 0 : o.onPrevClick) ||
                  s("onPrevClick"),
                p =
                  (null == (r = t.popover) ? void 0 : r.onCloseClick) ||
                  s("onCloseClick");
              return l.classList.contains("driver-popover-next-btn")
                ? a
                  ? a(e, t, { config: s(), state: u() })
                  : h("nextClick")
                : l.classList.contains("driver-popover-prev-btn")
                ? d
                  ? d(e, t, { config: s(), state: u() })
                  : h("prevClick")
                : l.classList.contains("driver-popover-close-btn")
                ? p
                  ? p(e, t, { config: s(), state: u() })
                  : h("closeClick")
                : void 0;
            },
            (e) =>
              !(null != r && r.description.contains(e)) &&
              !(null != r && r.title.contains(e)) &&
              "string" == typeof e.className &&
              e.className.includes("driver-popover")
          ),
          (o = r),
          (c.popover = o);
        let P =
          (null == (i = t.popover) ? void 0 : i.onPopoverRender) ||
          s("onPopoverRender");
        P && P(r, { config: s(), state: u() }), S(e, t), p(k);
        let A = d([
          k,
          ...(e.classList.contains("driver-dummy-element") ? [] : [e]),
        ]);
        A.length > 0 && A[0].focus();
      }
      function k() {
        let e = u("popover");
        if (!(null != e && e.wrapper)) return;
        let t = e.wrapper.getBoundingClientRect(),
          n = s("stagePadding") || 0,
          i = s("popoverOffset") || 0;
        return {
          width: t.width + n + i,
          height: t.height + n + i,
          realWidth: t.width,
          realHeight: t.height,
        };
      }
      function L(e, t) {
        let {
          elementDimensions: n,
          popoverDimensions: i,
          popoverPadding: o,
          popoverArrowDimensions: r,
        } = t;
        return "start" === e
          ? Math.max(
              Math.min(n.top - o, window.innerHeight - i.realHeight - r.width),
              r.width
            )
          : "end" === e
          ? Math.max(
              Math.min(
                n.top - (null == i ? void 0 : i.realHeight) + n.height + o,
                window.innerHeight -
                  (null == i ? void 0 : i.realHeight) -
                  r.width
              ),
              r.width
            )
          : "center" === e
          ? Math.max(
              Math.min(
                n.top + n.height / 2 - (null == i ? void 0 : i.realHeight) / 2,
                window.innerHeight -
                  (null == i ? void 0 : i.realHeight) -
                  r.width
              ),
              r.width
            )
          : 0;
      }
      function P(e, t) {
        let {
          elementDimensions: n,
          popoverDimensions: i,
          popoverPadding: o,
          popoverArrowDimensions: r,
        } = t;
        return "start" === e
          ? Math.max(
              Math.min(n.left - o, window.innerWidth - i.realWidth - r.width),
              r.width
            )
          : "end" === e
          ? Math.max(
              Math.min(
                n.left - (null == i ? void 0 : i.realWidth) + n.width + o,
                window.innerWidth - (null == i ? void 0 : i.realWidth) - r.width
              ),
              r.width
            )
          : "center" === e
          ? Math.max(
              Math.min(
                n.left + n.width / 2 - (null == i ? void 0 : i.realWidth) / 2,
                window.innerWidth - (null == i ? void 0 : i.realWidth) - r.width
              ),
              r.width
            )
          : 0;
      }
      function S(e, t) {
        let n = u("popover");
        if (!n) return;
        let { align: i = "start", side: o = "left" } =
            (null == t ? void 0 : t.popover) || {},
          r = "driver-dummy-element" === e.id ? "over" : o,
          l = s("stagePadding") || 0,
          a = k(),
          d = n.arrow.getBoundingClientRect(),
          p = e.getBoundingClientRect(),
          c = p.top - a.height,
          v = c >= 0,
          h = window.innerHeight - (p.bottom + a.height),
          f = h >= 0,
          m = p.left - a.width,
          g = m >= 0,
          w = window.innerWidth - (p.right + a.width),
          y = w >= 0,
          b = !v && !f && !g && !y,
          _ = r;
        if (
          ("top" === r && v
            ? (y = g = f = !1)
            : "bottom" === r && f
            ? (y = g = v = !1)
            : "left" === r && g
            ? (y = v = f = !1)
            : "right" === r && y && (g = v = f = !1),
          "over" === r)
        ) {
          let e = window.innerWidth / 2 - a.realWidth / 2,
            t = window.innerHeight / 2 - a.realHeight / 2;
          (n.wrapper.style.left = `${e}px`),
            (n.wrapper.style.right = "auto"),
            (n.wrapper.style.top = `${t}px`),
            (n.wrapper.style.bottom = "auto");
        } else if (b) {
          let e =
            window.innerWidth / 2 - (null == a ? void 0 : a.realWidth) / 2;
          (n.wrapper.style.left = `${e}px`),
            (n.wrapper.style.right = "auto"),
            (n.wrapper.style.bottom = "10px"),
            (n.wrapper.style.top = "auto");
        } else if (g) {
          let e = Math.min(
              m,
              window.innerWidth - (null == a ? void 0 : a.realWidth) - d.width
            ),
            t = L(i, {
              elementDimensions: p,
              popoverDimensions: a,
              popoverPadding: l,
              popoverArrowDimensions: d,
            });
          (n.wrapper.style.left = `${e}px`),
            (n.wrapper.style.top = `${t}px`),
            (n.wrapper.style.bottom = "auto"),
            (n.wrapper.style.right = "auto"),
            (_ = "left");
        } else if (y) {
          let e = Math.min(
              w,
              window.innerWidth - (null == a ? void 0 : a.realWidth) - d.width
            ),
            t = L(i, {
              elementDimensions: p,
              popoverDimensions: a,
              popoverPadding: l,
              popoverArrowDimensions: d,
            });
          (n.wrapper.style.right = `${e}px`),
            (n.wrapper.style.top = `${t}px`),
            (n.wrapper.style.bottom = "auto"),
            (n.wrapper.style.left = "auto"),
            (_ = "right");
        } else if (v) {
          let e = Math.min(c, window.innerHeight - a.realHeight - d.width),
            t = P(i, {
              elementDimensions: p,
              popoverDimensions: a,
              popoverPadding: l,
              popoverArrowDimensions: d,
            });
          (n.wrapper.style.top = `${e}px`),
            (n.wrapper.style.left = `${t}px`),
            (n.wrapper.style.bottom = "auto"),
            (n.wrapper.style.right = "auto"),
            (_ = "top");
        } else if (f) {
          let e = Math.min(
              h,
              window.innerHeight - (null == a ? void 0 : a.realHeight) - d.width
            ),
            t = P(i, {
              elementDimensions: p,
              popoverDimensions: a,
              popoverPadding: l,
              popoverArrowDimensions: d,
            });
          (n.wrapper.style.left = `${t}px`),
            (n.wrapper.style.bottom = `${e}px`),
            (n.wrapper.style.top = "auto"),
            (n.wrapper.style.right = "auto"),
            (_ = "bottom");
        }
        b
          ? n.arrow.classList.add("driver-popover-arrow-none")
          : (function (e, t, n) {
              let i = u("popover");
              if (!i) return;
              let o = n.getBoundingClientRect(),
                r = k(),
                l = i.arrow,
                s = r.width,
                a = window.innerWidth,
                d = o.width,
                p = o.left,
                c = r.height,
                v = window.innerHeight,
                h = o.top,
                f = o.height;
              l.className = "driver-popover-arrow";
              let m = t,
                g = e;
              "top" === t
                ? (p + d <= 0
                    ? ((m = "right"), (g = "end"))
                    : p + d - s <= 0 && ((m = "top"), (g = "start")),
                  p >= a
                    ? ((m = "left"), (g = "end"))
                    : p + s >= a && ((m = "top"), (g = "end")))
                : "bottom" === t
                ? (p + d <= 0
                    ? ((m = "right"), (g = "start"))
                    : p + d - s <= 0 && ((m = "bottom"), (g = "start")),
                  p >= a
                    ? ((m = "left"), (g = "start"))
                    : p + s >= a && ((m = "bottom"), (g = "end")))
                : "left" === t
                ? (h + f <= 0
                    ? ((m = "bottom"), (g = "end"))
                    : h + f - c <= 0 && ((m = "left"), (g = "start")),
                  h >= v
                    ? ((m = "top"), (g = "end"))
                    : h + c >= v && ((m = "left"), (g = "end")))
                : "right" === t &&
                  (h + f <= 0
                    ? ((m = "bottom"), (g = "start"))
                    : h + f - c <= 0 && ((m = "right"), (g = "start")),
                  h >= v
                    ? ((m = "top"), (g = "start"))
                    : h + c >= v && ((m = "right"), (g = "end"))),
                m
                  ? (l.classList.add(`driver-popover-arrow-side-${m}`),
                    l.classList.add(`driver-popover-arrow-align-${g}`))
                  : l.classList.add("driver-popover-arrow-none");
            })(i, _, e);
      }
      let A = () => {
          let e = (function (e = {}) {
            function t() {
              s("allowClose") && p();
            }
            function n() {
              let e = u("activeIndex"),
                t = s("steps") || [];
              if (void 0 === e) return;
              let n = e + 1;
              t[n] ? d(n) : p();
            }
            function i() {
              let e = u("activeIndex"),
                t = s("steps") || [];
              if (void 0 === e) return;
              let n = e - 1;
              t[n] ? d(n) : p();
            }
            function o() {
              var e;
              if (u("__transitionCallback")) return;
              let t = u("activeIndex"),
                n = u("__activeStep"),
                o = u("__activeElement");
              if (void 0 === t || void 0 === n || void 0 === u("activeIndex"))
                return;
              let r =
                (null == (e = n.popover) ? void 0 : e.onPrevClick) ||
                s("onPrevClick");
              if (r) return r(o, n, { config: s(), state: u() });
              i();
            }
            function r() {
              var e;
              if (u("__transitionCallback")) return;
              let t = u("activeIndex"),
                i = u("__activeStep"),
                o = u("__activeElement");
              if (void 0 === t || void 0 === i) return;
              let r =
                (null == (e = i.popover) ? void 0 : e.onNextClick) ||
                s("onNextClick");
              if (r) return r(o, i, { config: s(), state: u() });
              n();
            }
            function a() {
              u("isInitialized") ||
                ((c.isInitialized = !0),
                document.body.classList.add(
                  "driver-active",
                  s("animate") ? "driver-fade" : "driver-simple"
                ),
                window.addEventListener("keyup", x, !1),
                window.addEventListener("keydown", _, !1),
                window.addEventListener("resize", b),
                window.addEventListener("scroll", b),
                (v.overlayClick = t),
                (v.escapePress = t),
                (v.arrowLeftPress = o),
                (v.arrowRightPress = r));
            }
            function d(e = 0) {
              var t, n, i, o, r, l, a, u, v;
              let h = s("steps");
              if (!h) {
                console.error("No steps to drive through"), p();
                return;
              }
              if (!h[e]) {
                p();
                return;
              }
              (v = document.activeElement),
                (c.__activeOnDestroyed = v),
                (c.activeIndex = e);
              let f = h[e],
                m = h[e + 1],
                g = h[e - 1],
                y =
                  (null == (t = f.popover) ? void 0 : t.doneBtnText) ||
                  s("doneBtnText") ||
                  "Done",
                b = s("allowClose"),
                _ =
                  void 0 !== (null == (n = f.popover) ? void 0 : n.showProgress)
                    ? null == (i = f.popover)
                      ? void 0
                      : i.showProgress
                    : s("showProgress"),
                x = (
                  (null == (o = f.popover) ? void 0 : o.progressText) ||
                  s("progressText") ||
                  "{{current}} of {{total}}"
                )
                  .replace("{{current}}", `${e + 1}`)
                  .replace("{{total}}", `${h.length}`),
                C =
                  (null == (r = f.popover) ? void 0 : r.showButtons) ||
                  s("showButtons"),
                E = ["next", "previous", ...(b ? ["close"] : [])].filter(
                  (e) => !(null != C && C.length) || C.includes(e)
                ),
                k =
                  (null == (l = f.popover) ? void 0 : l.onNextClick) ||
                  s("onNextClick"),
                L =
                  (null == (a = f.popover) ? void 0 : a.onPrevClick) ||
                  s("onPrevClick"),
                P =
                  (null == (u = f.popover) ? void 0 : u.onCloseClick) ||
                  s("onCloseClick");
              w({
                ...f,
                popover: {
                  showButtons: E,
                  nextBtnText: m ? void 0 : y,
                  disableButtons: [...(g ? [] : ["previous"])],
                  showProgress: _,
                  progressText: x,
                  onNextClick:
                    k ||
                    (() => {
                      m ? d(e + 1) : p();
                    }),
                  onPrevClick:
                    L ||
                    (() => {
                      d(e - 1);
                    }),
                  onCloseClick:
                    P ||
                    (() => {
                      p();
                    }),
                  ...((null == f ? void 0 : f.popover) || {}),
                },
              });
            }
            function p(e = !0) {
              var t;
              let n = u("__activeElement"),
                i = u("__activeStep"),
                o = u("__activeOnDestroyed"),
                r = s("onDestroyStarted");
              if (e && r) {
                r(
                  n && (null == n ? void 0 : n.id) !== "driver-dummy-element"
                    ? n
                    : void 0,
                  i,
                  { config: s(), state: u() }
                );
                return;
              }
              let l =
                  (null == i ? void 0 : i.onDeselected) || s("onDeselected"),
                a = s("onDestroyed");
              if (
                (document.body.classList.remove(
                  "driver-active",
                  "driver-fade",
                  "driver-simple"
                ),
                window.removeEventListener("keyup", x),
                window.removeEventListener("resize", b),
                window.removeEventListener("scroll", b),
                (function () {
                  var e;
                  let t = u("popover");
                  t &&
                    (null == (e = t.wrapper.parentElement) ||
                      e.removeChild(t.wrapper));
                })(),
                null == (t = document.getElementById("driver-dummy-element")) ||
                  t.remove(),
                document
                  .querySelectorAll(".driver-active-element")
                  .forEach((e) => {
                    e.classList.remove(
                      "driver-active-element",
                      "driver-no-interaction"
                    ),
                      e.removeAttribute("aria-haspopup"),
                      e.removeAttribute("aria-expanded"),
                      e.removeAttribute("aria-controls");
                  }),
                (function () {
                  let e = u("__overlaySvg");
                  e && e.remove();
                })(),
                (v = {}),
                (c = {}),
                n && i)
              ) {
                let e = "driver-dummy-element" === n.id;
                l && l(e ? void 0 : n, i, { config: s(), state: u() }),
                  a && a(e ? void 0 : n, i, { config: s(), state: u() });
              }
              o && o.focus();
            }
            return (
              l(e),
              {
                isActive: () => u("isInitialized") || !1,
                refresh: b,
                drive: (e = 0) => {
                  a(), d(e);
                },
                setConfig: l,
                setSteps: (e) => {
                  (c = {}), l({ ...s(), steps: e });
                },
                getConfig: s,
                getState: u,
                getActiveIndex: () => u("activeIndex"),
                isFirstStep: () => 0 === u("activeIndex"),
                isLastStep: () => {
                  let e = s("steps") || [],
                    t = u("activeIndex");
                  return void 0 !== t && t === e.length - 1;
                },
                getActiveStep: () => u("activeStep"),
                getActiveElement: () => u("activeElement"),
                getPreviousElement: () => u("previousElement"),
                getPreviousStep: () => u("previousStep"),
                moveNext: n,
                movePrevious: i,
                moveTo: function (e) {
                  (s("steps") || [])[e] ? d(e) : p();
                },
                hasNextStep: () => {
                  let e = s("steps") || [],
                    t = u("activeIndex");
                  return void 0 !== t && e[t + 1];
                },
                hasPreviousStep: () => {
                  let e = s("steps") || [],
                    t = u("activeIndex");
                  return void 0 !== t && e[t - 1];
                },
                highlight: (e) => {
                  a(),
                    w({
                      ...e,
                      popover: e.popover
                        ? {
                            showButtons: [],
                            showProgress: !1,
                            progressText: "",
                            ...e.popover,
                          }
                        : void 0,
                    });
                },
                destroy: () => {
                  p(!1);
                },
              }
            );
          })({
            showProgress: !0,
            allowClose: !1,
            steps: [
              {
                element: "#home-nav",
                popover: {
                  title: "hi",
                  description:
                    "Farcal 1.0 is still in making",
                  side: "top",
                  align: "center",
                },
              },
              
            ],
            onDestroyStarted: () => {
              (!e.hasNextStep() || confirm("Are you sure?")) && e.destroy();
            },
          });
          localStorage.getItem("isFirstTime") ||
            (e.drive(), localStorage.setItem("isFirstTime", "true"));
        },
        M = (0, o.createContext)({ startTour: () => {}, endTour: () => {} }),
        T = (e) => {
          let { children: t } = e,
            [n, r] = (0, o.useState)(!1),
            l = () => {
              r(!1);
            };
          return (
            (0, o.useEffect)(
              () => (
                window.addEventListener("load", A),
                () => {
                  window.removeEventListener("load", l);
                }
              ),
              []
            ),
            (0, o.useEffect)(() => {
              n && A();
            }, [n]),
            (0, i.jsx)(M.Provider, {
              value: {
                startTour: () => {
                  r(!0);
                },
                endTour: l,
              },
              children: t,
            })
          );
        };
    },
    5291: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = "ac2353319419");
    },
    9051: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = "ac2353319419");
    },
    3054: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = "ac2353319419");
    },
    4908: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Poppins_7df6af', '__Poppins_Fallback_7df6af'",
          fontStyle: "normal",
        },
        className: "__className_7df6af",
      };
    },
  },
  function (e) {
    e.O(0, [210, 971, 23, 744], function () {
      return e((e.s = 836));
    }),
      (_N_E = e.O());
  },
]);
