(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    7560: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    69968: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var n = r(2784);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return (0, n.useCallback)(o(...e), e);
      }
    },
    4522: function (e, t, r) {
      "use strict";
      r.d(t, {
        g7: function () {
          return s;
        },
      });
      var n = r(7560),
        o = r(2784),
        i = r(69968);
      let s = (0, o.forwardRef)((e, t) => {
        let { children: r, ...i } = e,
          s = o.Children.toArray(r),
          l = s.find(u);
        if (l) {
          let e = l.props.children,
            r = s.map((t) =>
              t !== l
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            a,
            (0, n.Z)({}, i, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, o.createElement)(a, (0, n.Z)({}, i, { ref: t }), r);
      });
      s.displayName = "Slot";
      let a = (0, o.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, o.isValidElement)(r)
          ? (0, o.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && i
                      ? (r[n] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (r[n] = o)
                    : "style" === n
                    ? (r[n] = { ...o, ...i })
                    : "className" === n &&
                      (r[n] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? (0, i.F)(t, r.ref) : r.ref,
            })
          : o.Children.count(r) > 1
          ? o.Children.only(null)
          : null;
      });
      a.displayName = "SlotClone";
      let l = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function u(e) {
        return (0, o.isValidElement)(e) && e.type === l;
      }
    },
    5130: function (e, t, r) {
      "use strict";
      var n = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = Object.getOwnPropertyNames,
        s = Object.prototype.hasOwnProperty,
        a = (e, t, r) =>
          new Promise((n, o) => {
            var i = (e) => {
                try {
                  a(r.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = (e) => {
                try {
                  a(r.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = (e) =>
                e.done ? n(e.value) : Promise.resolve(e.value).then(i, s);
            a((r = r.apply(e, t)).next());
          }),
        l = {};
      ((e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      })(l, {
        SessionContextProvider: () => h,
        useSession: () => g,
        useSessionContext: () => f,
        useSupabaseClient: () => p,
        useUser: () => m,
      }),
        (e.exports = ((e, t, r, a) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let l of i(t))
              s.call(e, l) ||
                l === r ||
                n(e, l, {
                  get: () => t[l],
                  enumerable: !(a = o(t, l)) || a.enumerable,
                });
          return e;
        })(n({}, "__esModule", { value: !0 }), l));
      var u = r(2784),
        c = r(52322),
        d = (0, u.createContext)({
          isLoading: !0,
          session: null,
          error: null,
          supabaseClient: {},
        }),
        h = ({ supabaseClient: e, initialSession: t = null, children: r }) => {
          let [n, o] = (0, u.useState)(t),
            [i, s] = (0, u.useState)(!t),
            [l, h] = (0, u.useState)();
          (0, u.useEffect)(() => {
            !n && t && o(t);
          }, [n, t]),
            (0, u.useEffect)(() => {
              let t = !0;
              return (
                (function () {
                  a(this, null, function* () {
                    let {
                      data: { session: r },
                      error: n,
                    } = yield e.auth.getSession();
                    if (t) {
                      if (n) {
                        h(n), s(!1);
                        return;
                      }
                      o(r), s(!1);
                    }
                  });
                })(),
                () => {
                  t = !1;
                }
              );
            }, []),
            (0, u.useEffect)(() => {
              let {
                data: { subscription: t },
              } = e.auth.onAuthStateChange((e, t) => {
                t &&
                  ("SIGNED_IN" === e ||
                    "TOKEN_REFRESHED" === e ||
                    "USER_UPDATED" === e) &&
                  o(t),
                  "SIGNED_OUT" === e && o(null);
              });
              return () => {
                t.unsubscribe();
              };
            }, []);
          let f = (0, u.useMemo)(
            () =>
              i
                ? {
                    isLoading: !0,
                    session: null,
                    error: null,
                    supabaseClient: e,
                  }
                : l
                ? { isLoading: !1, session: null, error: l, supabaseClient: e }
                : { isLoading: !1, session: n, error: null, supabaseClient: e },
            [i, n, l]
          );
          return (0, c.jsx)(d.Provider, { value: f, children: r });
        },
        f = () => {
          let e = (0, u.useContext)(d);
          if (void 0 === e)
            throw Error(
              "useSessionContext must be used within a SessionContextProvider."
            );
          return e;
        };
      function p() {
        let e = (0, u.useContext)(d);
        if (void 0 === e)
          throw Error(
            "useSupabaseClient must be used within a SessionContextProvider."
          );
        return e.supabaseClient;
      }
      var g = () => {
          let e = (0, u.useContext)(d);
          if (void 0 === e)
            throw Error(
              "useSession must be used within a SessionContextProvider."
            );
          return e.session;
        },
        m = () => {
          var e, t;
          let r = (0, u.useContext)(d);
          if (void 0 === r)
            throw Error(
              "useUser must be used within a SessionContextProvider."
            );
          return null != (t = null == (e = r.session) ? void 0 : e.user)
            ? t
            : null;
        };
    },
    19209: function (e, t, r) {
      "use strict";
      r.d(t, {
        LY: function () {
          return ea;
        },
        aC: function () {
          return en;
        },
      });
      let n = "2.64.2",
        o = { "X-Client-Info": `gotrue-js/${n}` },
        i = "X-Supabase-Api-Version",
        s = {
          "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01",
          },
        },
        a = () => "undefined" != typeof document,
        l = { tested: !1, writable: !1 },
        u = () => {
          if (!a()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (l.tested) return l.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (l.tested = !0),
              (l.writable = !0);
          } catch (e) {
            (l.tested = !0), (l.writable = !1);
          }
          return l.writable;
        };
      function c(e) {
        let t = {},
          r = new URL(e);
        if (r.hash && "#" === r.hash[0])
          try {
            new URLSearchParams(r.hash.substring(1)).forEach((e, r) => {
              t[r] = e;
            });
          } catch (e) {}
        return (
          r.searchParams.forEach((e, r) => {
            t[r] = e;
          }),
          t
        );
      }
      let d = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = (...e) =>
                  Promise.resolve()
                    .then(r.bind(r, 65699))
                    .then(({ default: t }) => t(...e)))
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        h = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        f = async (e, t, r) => {
          await e.setItem(t, JSON.stringify(r));
        },
        p = async (e, t) => {
          let r = await e.getItem(t);
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch (e) {
            return r;
          }
        },
        g = async (e, t) => {
          await e.removeItem(t);
        };
      class m {
        constructor() {
          this.promise = new m.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function v(e) {
        let t = e.split(".");
        if (3 !== t.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        return JSON.parse(
          (function (e) {
            let t, r, n, o, i, s, a;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              u = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (o = l.indexOf(e.charAt(c++))),
                (i = l.indexOf(e.charAt(c++))),
                (s = l.indexOf(e.charAt(c++))),
                (a = l.indexOf(e.charAt(c++))),
                (t = (o << 2) | (i >> 4)),
                (r = ((15 & i) << 4) | (s >> 2)),
                (n = ((3 & s) << 6) | a),
                (u += String.fromCharCode(t)),
                64 != s && 0 != r && (u += String.fromCharCode(r)),
                64 != a && 0 != n && (u += String.fromCharCode(n));
            return u;
          })(t[1])
        );
      }
      async function b(e) {
        return await new Promise((t) => {
          setTimeout(() => t(null), e);
        });
      }
      function y(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      async function w(e) {
        let t = new TextEncoder().encode(e);
        return Array.from(
          new Uint8Array(await crypto.subtle.digest("SHA-256", t))
        )
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function _(e) {
        return "undefined" != typeof crypto &&
          void 0 !== crypto.subtle &&
          "undefined" != typeof TextEncoder
          ? btoa(await w(e))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "")
          : (console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e);
      }
      async function x(e, t, r = !1) {
        let n = (function () {
            let e = new Uint32Array(56);
            if ("undefined" == typeof crypto) {
              let e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                t = e.length,
                r = "";
              for (let n = 0; n < 56; n++)
                r += e.charAt(Math.floor(Math.random() * t));
              return r;
            }
            return crypto.getRandomValues(e), Array.from(e, y).join("");
          })(),
          o = n;
        r && (o += "/PASSWORD_RECOVERY"), await f(e, `${t}-code-verifier`, o);
        let i = await _(n),
          s = n === i ? "plain" : "s256";
        return [i, s];
      }
      m.promiseConstructor = Promise;
      let k = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class j extends Error {
        constructor(e, t, r) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t),
            (this.code = r);
        }
      }
      function S(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      class E extends j {
        constructor(e, t, r) {
          super(e, t, r),
            (this.name = "AuthApiError"),
            (this.status = t),
            (this.code = r);
        }
      }
      class T extends j {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class O extends j {
        constructor(e, t, r, n) {
          super(e, r, n), (this.name = t), (this.status = r);
        }
      }
      class P extends O {
        constructor() {
          super(
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
          );
        }
      }
      class C extends O {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
          );
        }
      }
      class A extends O {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400, void 0);
        }
      }
      class R extends O {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class I extends O {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class $ extends O {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t, void 0);
        }
      }
      function L(e) {
        return S(e) && "AuthRetryableFetchError" === e.name;
      }
      class N extends O {
        constructor(e, t, r) {
          super(e, "AuthWeakPasswordError", t, "weak_password"),
            (this.reasons = r);
        }
      }
      var M = function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      };
      let U = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        D = [502, 503, 504];
      async function G(e) {
        var t;
        let r, n;
        if (!h(e)) throw new $(U(e), 0);
        if (D.includes(e.status)) throw new $(U(e), e.status);
        try {
          r = await e.json();
        } catch (e) {
          throw new T(U(e), e);
        }
        let o = (function (e) {
          let t = e.headers.get(i);
          if (!t || !t.match(k)) return null;
          try {
            return new Date(`${t}T00:00:00.0Z`);
          } catch (e) {
            return null;
          }
        })(e);
        if (
          (o &&
          o.getTime() >= s["2024-01-01"].timestamp &&
          "object" == typeof r &&
          r &&
          "string" == typeof r.code
            ? (n = r.code)
            : "object" == typeof r &&
              r &&
              "string" == typeof r.error_code &&
              (n = r.error_code),
          n)
        ) {
          if ("weak_password" === n)
            throw new N(
              U(r),
              e.status,
              (null === (t = r.weak_password) || void 0 === t
                ? void 0
                : t.reasons) || []
            );
        } else if (
          "object" == typeof r &&
          r &&
          "object" == typeof r.weak_password &&
          r.weak_password &&
          Array.isArray(r.weak_password.reasons) &&
          r.weak_password.reasons.length &&
          r.weak_password.reasons.reduce(
            (e, t) => e && "string" == typeof t,
            !0
          )
        )
          throw new N(U(r), e.status, r.weak_password.reasons);
        throw new E(U(r), e.status || 500, n);
      }
      let z = (e, t, r, n) => {
        let o = { method: e, headers: (null == t ? void 0 : t.headers) || {} };
        return "GET" === e
          ? o
          : ((o.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (o.body = JSON.stringify(n)),
            Object.assign(Object.assign({}, o), r));
      };
      async function B(e, t, r, n) {
        var o;
        let a = Object.assign({}, null == n ? void 0 : n.headers);
        a[i] || (a[i] = s["2024-01-01"].name),
          (null == n ? void 0 : n.jwt) && (a.Authorization = `Bearer ${n.jwt}`);
        let l =
          null !== (o = null == n ? void 0 : n.query) && void 0 !== o ? o : {};
        (null == n ? void 0 : n.redirectTo) && (l.redirect_to = n.redirectTo);
        let u = Object.keys(l).length
            ? "?" + new URLSearchParams(l).toString()
            : "",
          c = await F(
            e,
            t,
            r + u,
            { headers: a, noResolveJson: null == n ? void 0 : n.noResolveJson },
            {},
            null == n ? void 0 : n.body
          );
        return (null == n ? void 0 : n.xform)
          ? null == n
            ? void 0
            : n.xform(c)
          : { data: Object.assign({}, c), error: null };
      }
      async function F(e, t, r, n, o, i) {
        let s;
        let a = z(t, n, o, i);
        try {
          s = await e(r, Object.assign({}, a));
        } catch (e) {
          throw (console.error(e), new $(U(e), 0));
        }
        if ((s.ok || (await G(s)), null == n ? void 0 : n.noResolveJson))
          return s;
        try {
          return await s.json();
        } catch (e) {
          await G(e);
        }
      }
      function H(e) {
        var t, r;
        let n = null;
        return (
          e.access_token &&
            e.refresh_token &&
            e.expires_in &&
            ((n = Object.assign({}, e)), !e.expires_at) &&
            (n.expires_at =
              ((r = e.expires_in), Math.round(Date.now() / 1e3) + r)),
          {
            data: {
              session: n,
              user: null !== (t = e.user) && void 0 !== t ? t : e,
            },
            error: null,
          }
        );
      }
      function q(e) {
        let t = H(e);
        return (
          !t.error &&
            e.weak_password &&
            "object" == typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" == typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, t) => e && "string" == typeof t,
              !0
            ) &&
            (t.data.weak_password = e.weak_password),
          t
        );
      }
      function W(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function K(e) {
        return { data: e, error: null };
      }
      function V(e) {
        let {
          action_link: t,
          email_otp: r,
          hashed_token: n,
          redirect_to: o,
          verification_type: i,
        } = e;
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: r,
              hashed_token: n,
              redirect_to: o,
              verification_type: i,
            },
            user: Object.assign(
              {},
              M(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ])
            ),
          },
          error: null,
        };
      }
      function J(e) {
        return e;
      }
      var Y = function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      };
      class Z {
        constructor({ url: e = "", headers: t = {}, fetch: r }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = d(r)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await B(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0,
              }),
              { data: null, error: null }
            );
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await B(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: W,
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: t } = e,
              r = Y(e, ["options"]),
              n = Object.assign(Object.assign({}, r), t);
            return (
              "newEmail" in r &&
                ((n.new_email = null == r ? void 0 : r.newEmail),
                delete n.newEmail),
              await B(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: n,
                headers: this.headers,
                xform: V,
                redirectTo: null == t ? void 0 : t.redirectTo,
              })
            );
          } catch (e) {
            if (S(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await B(this.fetch, "POST", `${this.url}/admin/users`, {
              body: e,
              headers: this.headers,
              xform: W,
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, r, n, o, i, s, a;
          try {
            let l = { nextPage: null, lastPage: 0, total: 0 },
              u = await B(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (r =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== r
                      ? r
                      : "",
                  per_page:
                    null !==
                      (o =
                        null === (n = null == e ? void 0 : e.perPage) ||
                        void 0 === n
                          ? void 0
                          : n.toString()) && void 0 !== o
                      ? o
                      : "",
                },
                xform: J,
              });
            if (u.error) throw u.error;
            let c = await u.json(),
              d =
                null !== (i = u.headers.get("x-total-count")) && void 0 !== i
                  ? i
                  : 0,
              h =
                null !==
                  (a =
                    null === (s = u.headers.get("link")) || void 0 === s
                      ? void 0
                      : s.split(",")) && void 0 !== a
                  ? a
                  : [];
            return (
              h.length > 0 &&
                (h.forEach((e) => {
                  let t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    r = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${r}Page`] = t;
                }),
                (l.total = parseInt(d))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (e) {
            if (S(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await B(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
              headers: this.headers,
              xform: W,
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await B(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
              body: t,
              headers: this.headers,
              xform: W,
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await B(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: W,
              }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: t, error: r } = await B(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: r };
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await B(
                this.fetch,
                "DELETE",
                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
      }
      let X = {
        getItem: (e) => (u() ? globalThis.localStorage.getItem(e) : null),
        setItem: (e, t) => {
          u() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          u() && globalThis.localStorage.removeItem(e);
        },
      };
      function Q(e = {}) {
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, r) => {
            e[t] = r;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      let ee = {
        debug: !!(
          globalThis &&
          u() &&
          globalThis.localStorage &&
          "true" ===
            globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
        ),
      };
      class et extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      class er extends et {}
      async function en(e, t, r) {
        ee.debug &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
        let n = new globalThis.AbortController();
        return (
          t > 0 &&
            setTimeout(() => {
              n.abort(),
                ee.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, t),
          await globalThis.navigator.locks.request(
            e,
            0 === t
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: n.signal },
            async (n) => {
              if (n) {
                ee.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: acquired",
                    e,
                    n.name
                  );
                try {
                  return await r();
                } finally {
                  ee.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released",
                      e,
                      n.name
                    );
                }
              } else {
                if (0 === t)
                  throw (
                    (ee.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new er(
                      `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                    ))
                  );
                if (ee.debug)
                  try {
                    let e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (e) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      e
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await r()
                );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let eo = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: o,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
      };
      async function ei(e, t, r) {
        return await r();
      }
      class es {
        constructor(e) {
          var t, r;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = es.nextInstanceID),
            (es.nextInstanceID += 1),
            this.instanceID > 0 &&
              a() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let n = Object.assign(Object.assign({}, eo), e);
          if (
            ((this.logDebugMessages = !!n.debug),
            "function" == typeof n.debug && (this.logger = n.debug),
            (this.persistSession = n.persistSession),
            (this.storageKey = n.storageKey),
            (this.autoRefreshToken = n.autoRefreshToken),
            (this.admin = new Z({
              url: n.url,
              headers: n.headers,
              fetch: n.fetch,
            })),
            (this.url = n.url),
            (this.headers = n.headers),
            (this.fetch = d(n.fetch)),
            (this.lock = n.lock || ei),
            (this.detectSessionInUrl = n.detectSessionInUrl),
            (this.flowType = n.flowType),
            (this.hasCustomAuthorizationHeader =
              n.hasCustomAuthorizationHeader),
            n.lock
              ? (this.lock = n.lock)
              : a() &&
                (null ===
                  (t = null == globalThis ? void 0 : globalThis.navigator) ||
                void 0 === t
                  ? void 0
                  : t.locks)
              ? (this.lock = en)
              : (this.lock = ei),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? n.storage
                ? (this.storage = n.storage)
                : u()
                ? (this.storage = X)
                : ((this.memoryStorage = {}),
                  (this.storage = Q(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = Q(this.memoryStorage))),
            a() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (r = this.broadcastChannel) ||
              void 0 === r ||
              r.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${n}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!a() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: t, error: r } = await this._getSessionFromURL(e);
              if (r) {
                if (
                  (this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    r
                  ),
                  (null == r ? void 0 : r.message) ===
                    "Identity is already linked" ||
                    (null == r ? void 0 : r.message) ===
                      "Identity is already linked to another user")
                )
                  return { error: r };
                return await this._removeSession(), { error: r };
              }
              let { session: n, redirectType: o } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  n,
                  "redirect type",
                  o
                ),
                await this._saveSession(n),
                setTimeout(async () => {
                  "recovery" === o
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n)
                    : await this._notifyAllSubscribers("SIGNED_IN", n);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (S(e)) return { error: e };
            return {
              error: new T("Unexpected error during initialization", e),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signInAnonymously(e) {
          var t, r, n;
          try {
            await this._removeSession();
            let { data: o, error: i } = await B(
              this.fetch,
              "POST",
              `${this.url}/signup`,
              {
                headers: this.headers,
                body: {
                  data:
                    null !==
                      (r =
                        null === (t = null == e ? void 0 : e.options) ||
                        void 0 === t
                          ? void 0
                          : t.data) && void 0 !== r
                      ? r
                      : {},
                  gotrue_meta_security: {
                    captcha_token:
                      null === (n = null == e ? void 0 : e.options) ||
                      void 0 === n
                        ? void 0
                        : n.captchaToken,
                  },
                },
                xform: H,
              }
            );
            if (i || !o)
              return { data: { user: null, session: null }, error: i };
            let s = o.session,
              a = o.user;
            return (
              o.session &&
                (await this._saveSession(o.session),
                await this._notifyAllSubscribers("SIGNED_IN", s)),
              { data: { user: a, session: s }, error: null }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signUp(e) {
          var t, r, n;
          try {
            let o;
            if ((await this._removeSession(), "email" in e)) {
              let { email: r, password: n, options: i } = e,
                s = null,
                a = null;
              "pkce" === this.flowType &&
                ([s, a] = await x(this.storage, this.storageKey)),
                (o = await B(this.fetch, "POST", `${this.url}/signup`, {
                  headers: this.headers,
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                  body: {
                    email: r,
                    password: n,
                    data:
                      null !== (t = null == i ? void 0 : i.data) && void 0 !== t
                        ? t
                        : {},
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                    code_challenge: s,
                    code_challenge_method: a,
                  },
                  xform: H,
                }));
            } else if ("phone" in e) {
              let { phone: t, password: i, options: s } = e;
              o = await B(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: t,
                  password: i,
                  data:
                    null !== (r = null == s ? void 0 : s.data) && void 0 !== r
                      ? r
                      : {},
                  channel:
                    null !== (n = null == s ? void 0 : s.channel) &&
                    void 0 !== n
                      ? n
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == s ? void 0 : s.captchaToken,
                  },
                },
                xform: H,
              });
            } else
              throw new A(
                "You must provide either an email or phone number and a password"
              );
            let { data: i, error: s } = o;
            if (s || !i)
              return { data: { user: null, session: null }, error: s };
            let a = i.session,
              l = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", a)),
              { data: { user: l, session: a }, error: null }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              let { email: r, password: n, options: o } = e;
              t = await B(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    password: n,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                  xform: q,
                }
              );
            } else if ("phone" in e) {
              let { phone: r, password: n, options: o } = e;
              t = await B(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: r,
                    password: n,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                  xform: q,
                }
              );
            } else
              throw new A(
                "You must provide either an email or phone number and a password"
              );
            let { data: r, error: n } = t;
            if (n) return { data: { user: null, session: null }, error: n };
            if (!r || !r.session || !r.user)
              return { data: { user: null, session: null }, error: new C() };
            return (
              r.session &&
                (await this._saveSession(r.session),
                await this._notifyAllSubscribers("SIGNED_IN", r.session)),
              {
                data: Object.assign(
                  { user: r.user, session: r.session },
                  r.weak_password ? { weakPassword: r.weak_password } : null
                ),
                error: n,
              }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, r, n, o;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
              queryParams:
                null === (n = e.options) || void 0 === n
                  ? void 0
                  : n.queryParams,
              skipBrowserRedirect:
                null === (o = e.options) || void 0 === o
                  ? void 0
                  : o.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let t = await p(this.storage, `${this.storageKey}-code-verifier`),
            [r, n] = (null != t ? t : "").split("/"),
            { data: o, error: i } = await B(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: r },
                xform: H,
              }
            );
          return (await g(this.storage, `${this.storageKey}-code-verifier`), i)
            ? {
                data: { user: null, session: null, redirectType: null },
                error: i,
              }
            : o && o.session && o.user
            ? (o.session &&
                (await this._saveSession(o.session),
                await this._notifyAllSubscribers("SIGNED_IN", o.session)),
              {
                data: Object.assign(Object.assign({}, o), {
                  redirectType: null != n ? n : null,
                }),
                error: i,
              })
            : {
                data: { user: null, session: null, redirectType: null },
                error: new C(),
              };
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            let {
                options: t,
                provider: r,
                token: n,
                access_token: o,
                nonce: i,
              } = e,
              { data: s, error: a } = await B(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: r,
                    id_token: n,
                    access_token: o,
                    nonce: i,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: H,
                }
              );
            if (a) return { data: { user: null, session: null }, error: a };
            if (!s || !s.session || !s.user)
              return { data: { user: null, session: null }, error: new C() };
            return (
              s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              { data: s, error: a }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, r, n, o, i;
          try {
            if ((await this._removeSession(), "email" in e)) {
              let { email: n, options: o } = e,
                i = null,
                s = null;
              "pkce" === this.flowType &&
                ([i, s] = await x(this.storage, this.storageKey));
              let { error: a } = await B(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: n,
                    data:
                      null !== (t = null == o ? void 0 : o.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (r = null == o ? void 0 : o.shouldCreateUser) ||
                      void 0 === r ||
                      r,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                    code_challenge: i,
                    code_challenge_method: s,
                  },
                  redirectTo: null == o ? void 0 : o.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: a };
            }
            if ("phone" in e) {
              let { phone: t, options: r } = e,
                { data: s, error: a } = await B(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (n = null == r ? void 0 : r.data) &&
                        void 0 !== n
                          ? n
                          : {},
                      create_user:
                        null ===
                          (o = null == r ? void 0 : r.shouldCreateUser) ||
                        void 0 === o ||
                        o,
                      gotrue_meta_security: {
                        captcha_token: null == r ? void 0 : r.captchaToken,
                      },
                      channel:
                        null !== (i = null == r ? void 0 : r.channel) &&
                        void 0 !== i
                          ? i
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == s ? void 0 : s.message_id,
                },
                error: a,
              };
            }
            throw new A("You must provide either an email or phone number.");
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, r;
          try {
            let n, o;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((n =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (o =
                  null === (r = e.options) || void 0 === r
                    ? void 0
                    : r.captchaToken));
            let { data: i, error: s } = await B(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: o },
                }),
                redirectTo: n,
                xform: H,
              }
            );
            if (s) throw s;
            if (!i) throw Error("An error occurred on token verification.");
            let a = i.session,
              l = i.user;
            return (
              (null == a ? void 0 : a.access_token) &&
                (await this._saveSession(a),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  a
                )),
              { data: { user: l, session: a }, error: null }
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, r, n;
          try {
            await this._removeSession();
            let o = null,
              i = null;
            return (
              "pkce" === this.flowType &&
                ([o, i] = await x(this.storage, this.storageKey)),
              await B(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (r =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== r
                            ? r
                            : void 0,
                      }
                    ),
                    (
                      null === (n = null == e ? void 0 : e.options) ||
                      void 0 === n
                        ? void 0
                        : n.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: i,
                  }
                ),
                headers: this.headers,
                xform: K,
              })
            );
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: t },
                error: r,
              } = e;
              if (r) throw r;
              if (!t) throw new P();
              let { error: n } = await B(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: n };
            });
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            let t = `${this.url}/resend`;
            if ("email" in e) {
              let { email: r, type: n, options: o } = e,
                { error: i } = await B(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: r,
                    type: n,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                  redirectTo: null == o ? void 0 : o.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: i };
            }
            if ("phone" in e) {
              let { phone: r, type: n, options: o } = e,
                { data: i, error: s } = await B(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: r,
                    type: n,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == i ? void 0 : i.message_id,
                },
                error: s,
              };
            }
            throw new A(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () =>
              this._useSession(async (e) => e)
            )
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                r = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await r;
                    } catch (e) {}
                  })()
                ),
                r
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null,
              t = await p(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            let r = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${r ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !r)
            ) {
              if (this.storage.isServer) {
                let t = this.suppressGetSessionWarning;
                e = new Proxy(e, {
                  get: (e, r, n) => (
                    t ||
                      "user" !== r ||
                      console.warn(
                        "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                      ),
                    Reflect.get(e, r, n)
                  ),
                });
              }
              return { data: { session: e }, error: null };
            }
            let { session: n, error: o } = await this._callRefreshToken(
              e.refresh_token
            );
            if (o) return { data: { session: null }, error: o };
            return { data: { session: n }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              await this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await B(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: W,
              });
            return await this._useSession(async (e) => {
              var t, r, n;
              let { data: o, error: i } = e;
              if (i) throw i;
              return (null === (t = o.session) || void 0 === t
                ? void 0
                : t.access_token) || this.hasCustomAuthorizationHeader
                ? await B(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      null !==
                        (n =
                          null === (r = o.session) || void 0 === r
                            ? void 0
                            : r.access_token) && void 0 !== n
                        ? n
                        : void 0,
                    xform: W,
                  })
                : { data: { user: null }, error: new P() };
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (r) => {
              let { data: n, error: o } = r;
              if (o) throw o;
              if (!n.session) throw new P();
              let i = n.session,
                s = null,
                a = null;
              "pkce" === this.flowType &&
                null != e.email &&
                ([s, a] = await x(this.storage, this.storageKey));
              let { data: l, error: u } = await B(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: s,
                    code_challenge_method: a,
                  }),
                  jwt: i.access_token,
                  xform: W,
                }
              );
              if (u) throw u;
              return (
                (i.user = l.user),
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                { data: { user: i.user }, error: null }
              );
            });
          } catch (e) {
            if (S(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return v(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new P();
            let t = Date.now() / 1e3,
              r = t,
              n = !0,
              o = null,
              i = v(e.access_token);
            if ((i.exp && (n = (r = i.exp) <= t), n)) {
              let { session: t, error: r } = await this._callRefreshToken(
                e.refresh_token
              );
              if (r) return { data: { user: null, session: null }, error: r };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              o = t;
            } else {
              let { data: n, error: i } = await this._getUser(e.access_token);
              if (i) throw i;
              (o = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: n.user,
                token_type: "bearer",
                expires_in: r - t,
                expires_at: r,
              }),
                await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o);
            }
            return { data: { user: o.user, session: o }, error: null };
          } catch (e) {
            if (S(e)) return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              if (!e) {
                let { data: n, error: o } = t;
                if (o) throw o;
                e = null !== (r = n.session) && void 0 !== r ? r : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token)) throw new P();
              let { session: n, error: o } = await this._callRefreshToken(
                e.refresh_token
              );
              return o
                ? { data: { user: null, session: null }, error: o }
                : n
                ? { data: { user: n.user, session: n }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (S(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!a()) throw new R("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new I("Not a valid PKCE flow url.");
            } else throw new R("Not a valid implicit grant flow url.");
            let t = c(window.location.href);
            if (e) {
              if (!t.code) throw new I("No code detected.");
              let { data: e, error: r } = await this._exchangeCodeForSession(
                t.code
              );
              if (r) throw r;
              let n = new URL(window.location.href);
              return (
                n.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  n.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new R(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: r,
              provider_refresh_token: n,
              access_token: o,
              refresh_token: i,
              expires_in: s,
              expires_at: l,
              token_type: u,
            } = t;
            if (!o || !s || !i || !u) throw new R("No session defined in URL");
            let d = Math.round(Date.now() / 1e3),
              h = parseInt(s),
              f = d + h;
            l && (f = parseInt(l));
            let p = f - d;
            1e3 * p <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`
              );
            let g = f - h;
            d - g >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  g,
                  f,
                  d
                )
              : d - g < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  g,
                  f,
                  d
                );
            let { data: m, error: v } = await this._getUser(o);
            if (v) throw v;
            let b = {
              provider_token: r,
              provider_refresh_token: n,
              access_token: o,
              expires_in: h,
              expires_at: f,
              refresh_token: i,
              token_type: u,
              user: m.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: b, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (S(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = c(window.location.href);
          return !!(a() && (e.access_token || e.error_description));
        }
        async _isPKCEFlow() {
          let e = c(window.location.href),
            t = await p(this.storage, `${this.storageKey}-code-verifier`);
          return !!(e.code && t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var r;
            let { data: n, error: o } = t;
            if (o) return { error: o };
            let i =
              null === (r = n.session) || void 0 === r
                ? void 0
                : r.access_token;
            if (i) {
              let { error: t } = await this.admin.signOut(i, e);
              if (
                t &&
                !(
                  S(t) &&
                  "AuthApiError" === t.name &&
                  (404 === t.status || 401 === t.status || 403 === t.status)
                )
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await g(this.storage, `${this.storageKey}-code-verifier`),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            r = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, r),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: r } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var r, n;
            try {
              let {
                data: { session: n },
                error: o,
              } = t;
              if (o) throw o;
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", n)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", n);
            } catch (t) {
              await (null === (n = this.stateChangeEmitters.get(e)) ||
              void 0 === n
                ? void 0
                : n.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let r = null,
            n = null;
          "pkce" === this.flowType &&
            ([r, n] = await x(this.storage, this.storageKey, !0));
          try {
            return await B(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: r,
                code_challenge_method: n,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            let { data: t, error: r } = await this.getUser();
            if (r) throw r;
            return {
              data: {
                identities:
                  null !== (e = t.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async linkIdentity(e) {
          var t;
          try {
            let { data: r, error: n } = await this._useSession(async (t) => {
              var r, n, o, i, s;
              let { data: a, error: l } = t;
              if (l) throw l;
              let u = await this._getUrlForProvider(
                `${this.url}/user/identities/authorize`,
                e.provider,
                {
                  redirectTo:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.redirectTo,
                  scopes:
                    null === (n = e.options) || void 0 === n
                      ? void 0
                      : n.scopes,
                  queryParams:
                    null === (o = e.options) || void 0 === o
                      ? void 0
                      : o.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await B(this.fetch, "GET", u, {
                headers: this.headers,
                jwt:
                  null !==
                    (s =
                      null === (i = a.session) || void 0 === i
                        ? void 0
                        : i.access_token) && void 0 !== s
                    ? s
                    : void 0,
              });
            });
            if (n) throw n;
            return (
              !a() ||
                (null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.skipBrowserRedirect) ||
                window.location.assign(null == r ? void 0 : r.url),
              {
                data: { provider: e.provider, url: null == r ? void 0 : r.url },
                error: null,
              }
            );
          } catch (t) {
            if (S(t))
              return { data: { provider: e.provider, url: null }, error: t };
            throw t;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (t) => {
              var r, n;
              let { data: o, error: i } = t;
              if (i) throw i;
              return await B(
                this.fetch,
                "DELETE",
                `${this.url}/user/identities/${e.identity_id}`,
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (n =
                        null === (r = o.session) || void 0 === r
                          ? void 0
                          : r.access_token) && void 0 !== n
                      ? n
                      : void 0,
                }
              );
            });
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            var r, n;
            let o = Date.now();
            return await ((r = async (r) => (
              r > 0 && (await b(200 * Math.pow(2, r - 1))),
              this._debug(t, "refreshing attempt", r),
              await B(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                { body: { refresh_token: e }, headers: this.headers, xform: H }
              )
            )),
            (n = (e, t) =>
              t && L(t) && Date.now() + 200 * Math.pow(2, e) - o < 3e4),
            new Promise((e, t) => {
              (async () => {
                for (let o = 0; o < 1 / 0; o++)
                  try {
                    let t = await r(o);
                    if (!n(o, null, t)) {
                      e(t);
                      return;
                    }
                  } catch (e) {
                    if (!n(o, e)) {
                      t(e);
                      return;
                    }
                  }
              })();
            }));
          } catch (e) {
            if ((this._debug(t, "error", e), S(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          let r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              r
            ),
            a() && !t.skipBrowserRedirect && window.location.assign(r),
            { data: { provider: e, url: r }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            let r = await p(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", r),
              !this._isValidSession(r))
            ) {
              this._debug(t, "session is not valid"),
                null !== r && (await this._removeSession());
              return;
            }
            let n = Math.round(Date.now() / 1e3),
              o =
                (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) <
                n + 10;
            if (
              (this._debug(
                t,
                `session has${o ? "" : " not"} expired with margin of 10s`
              ),
              o)
            ) {
              if (this.autoRefreshToken && r.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  r.refresh_token
                );
                e &&
                  (console.error(e),
                  L(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", r);
          } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return;
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, r;
          if (!e) throw new P();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(n, "begin");
          try {
            this.refreshingDeferred = new m();
            let { data: t, error: r } = await this._refreshAccessToken(e);
            if (r) throw r;
            if (!t.session) throw new P();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let n = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(n), n;
          } catch (e) {
            if ((this._debug(n, "error", e), S(e))) {
              let r = { session: null, error: e };
              return (
                L(e) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(r),
                r
              );
            }
            throw (
              (null === (r = this.refreshingDeferred) ||
                void 0 === r ||
                r.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(n, "end");
          }
        }
        async _notifyAllSubscribers(e, t, r = !0) {
          let n = `#_notifyAllSubscribers(${e})`;
          this._debug(n, "begin", t, `broadcast = ${r}`);
          try {
            this.broadcastChannel &&
              r &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            let n = [],
              o = Array.from(this.stateChangeEmitters.values()).map(
                async (r) => {
                  try {
                    await r.callback(e, t);
                  } catch (e) {
                    n.push(e);
                  }
                }
              );
            if ((await Promise.all(o), n.length > 0)) {
              for (let e = 0; e < n.length; e += 1) console.error(n[e]);
              throw n[0];
            }
          } finally {
            this._debug(n, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            (this.suppressGetSessionWarning = !0),
            await f(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await g(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              a() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    let {
                      data: { session: r },
                    } = t;
                    if (!r || !r.refresh_token || !r.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let n = Math.floor((1e3 * r.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${n} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      n <= 3 && (await this._callRefreshToken(r.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof et)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !a() || !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        t,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t, r) {
          let n = [`provider=${encodeURIComponent(t)}`];
          if (
            ((null == r ? void 0 : r.redirectTo) &&
              n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
            (null == r ? void 0 : r.scopes) &&
              n.push(`scopes=${encodeURIComponent(r.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let [e, t] = await x(this.storage, this.storageKey),
              r = new URLSearchParams({
                code_challenge: `${encodeURIComponent(e)}`,
                code_challenge_method: `${encodeURIComponent(t)}`,
              });
            n.push(r.toString());
          }
          if (null == r ? void 0 : r.queryParams) {
            let e = new URLSearchParams(r.queryParams);
            n.push(e.toString());
          }
          return (
            (null == r ? void 0 : r.skipBrowserRedirect) &&
              n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
            `${e}?${n.join("&")}`
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              let { data: n, error: o } = t;
              return o
                ? { data: null, error: o }
                : await B(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (r = null == n ? void 0 : n.session) ||
                        void 0 === r
                          ? void 0
                          : r.access_token,
                    }
                  );
            });
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var r, n;
              let { data: o, error: i } = t;
              if (i) return { data: null, error: i };
              let { data: s, error: a } = await B(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (r = null == o ? void 0 : o.session) ||
                    void 0 === r
                      ? void 0
                      : r.access_token,
                }
              );
              return a
                ? { data: null, error: a }
                : ((null === (n = null == s ? void 0 : s.totp) || void 0 === n
                    ? void 0
                    : n.qr_code) &&
                    (s.totp.qr_code = `data:image/svg+xml;utf-8,${s.totp.qr_code}`),
                  { data: s, error: null });
            });
          } catch (e) {
            if (S(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var r;
                let { data: n, error: o } = t;
                if (o) return { data: null, error: o };
                let { data: i, error: s } = await B(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (r = null == n ? void 0 : n.session) ||
                      void 0 === r
                        ? void 0
                        : r.access_token,
                  }
                );
                return s
                  ? { data: null, error: s }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + i.expires_in,
                        },
                        i
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      i
                    ),
                    { data: i, error: s });
              });
            } catch (e) {
              if (S(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var r;
                let { data: n, error: o } = t;
                return o
                  ? { data: null, error: o }
                  : await B(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        headers: this.headers,
                        jwt:
                          null === (r = null == n ? void 0 : n.session) ||
                          void 0 === r
                            ? void 0
                            : r.access_token,
                      }
                    );
              });
            } catch (e) {
              if (S(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          let { data: t, error: r } = await this._challenge({
            factorId: e.factorId,
          });
          return r
            ? { data: null, error: r }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          let r = (null == e ? void 0 : e.factors) || [],
            n = r.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: r, totp: n }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, r;
                let {
                  data: { session: n },
                  error: o,
                } = e;
                if (o) return { data: null, error: o };
                if (!n)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                let i = this._decodeJWT(n.access_token),
                  s = null;
                i.aal && (s = i.aal);
                let a = s;
                return (
                  (null !==
                    (r =
                      null === (t = n.user.factors) || void 0 === t
                        ? void 0
                        : t.filter((e) => "verified" === e.status)) &&
                  void 0 !== r
                    ? r
                    : []
                  ).length > 0 && (a = "aal2"),
                  {
                    data: {
                      currentLevel: s,
                      nextLevel: a,
                      currentAuthenticationMethods: i.amr || [],
                    },
                    error: null,
                  }
                );
              })
          );
        }
      }
      es.nextInstanceID = 0;
      var ea = es;
    },
    65699: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Headers: function () {
            return i;
          },
          Request: function () {
            return s;
          },
          Response: function () {
            return a;
          },
          fetch: function () {
            return o;
          },
        });
      var n = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r.g) return r.g;
        throw Error("unable to locate global object");
      })();
      let o = n.fetch;
      t.default = n.fetch.bind(n);
      let i = n.Headers,
        s = n.Request,
        a = n.Response;
    },
    51587: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let o = n(r(65699)),
        i = n(r(39396));
      class s {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = o.default)
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let r = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, r, n;
            let o = null,
              s = null,
              a = null,
              l = e.status,
              u = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                let t = await e.text();
                "" === t ||
                  (s =
                    "text/csv" === this.headers.Accept
                      ? t
                      : this.headers.Accept &&
                        this.headers.Accept.includes(
                          "application/vnd.pgrst.plan+text"
                        )
                      ? t
                      : JSON.parse(t));
              }
              let n =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                i =
                  null === (r = e.headers.get("content-range")) || void 0 === r
                    ? void 0
                    : r.split("/");
              n && i && i.length > 1 && (a = parseInt(i[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(s) &&
                  (s.length > 1
                    ? ((o = {
                        code: "PGRST116",
                        details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (s = null),
                      (a = null),
                      (l = 406),
                      (u = "Not Acceptable"))
                    : (s = 1 === s.length ? s[0] : null));
            } else {
              let t = await e.text();
              try {
                (o = JSON.parse(t)),
                  Array.isArray(o) &&
                    404 === e.status &&
                    ((s = []), (o = null), (l = 200), (u = "OK"));
              } catch (r) {
                404 === e.status && "" === t
                  ? ((l = 204), (u = "No Content"))
                  : (o = { message: t });
              }
              if (
                (o &&
                  this.isMaybeSingle &&
                  (null === (n = null == o ? void 0 : o.details) || void 0 === n
                    ? void 0
                    : n.includes("0 rows")) &&
                  ((o = null), (l = 200), (u = "OK")),
                o && this.shouldThrowOnError)
              )
                throw new i.default(o);
            }
            return { error: o, data: s, count: a, status: l, statusText: u };
          });
          return (
            this.shouldThrowOnError ||
              (r = r.catch((e) => {
                var t, r, n;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (r = null == e ? void 0 : e.stack) &&
                      void 0 !== r
                        ? r
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (n = null == e ? void 0 : e.code) && void 0 !== n
                        ? n
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            r.then(e, t)
          );
        }
      }
      t.default = s;
    },
    11294: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let o = n(r(23280)),
        i = n(r(16626)),
        s = r(88381);
      class a {
        constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
          (this.url = e),
            (this.headers = Object.assign(
              Object.assign({}, s.DEFAULT_HEADERS),
              t
            )),
            (this.schemaName = r),
            (this.fetch = n);
        }
        from(e) {
          let t = new URL(`${this.url}/${e}`);
          return new o.default(t, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new a(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: r = !1, get: n = !1, count: o } = {}) {
          let s, a;
          let l = new URL(`${this.url}/rpc/${e}`);
          r || n
            ? ((s = r ? "HEAD" : "GET"),
              Object.entries(t)
                .filter(([e, t]) => void 0 !== t)
                .map(([e, t]) => [
                  e,
                  Array.isArray(t) ? `{${t.join(",")}}` : `${t}`,
                ])
                .forEach(([e, t]) => {
                  l.searchParams.append(e, t);
                }))
            : ((s = "POST"), (a = t));
          let u = Object.assign({}, this.headers);
          return (
            o && (u.Prefer = `count=${o}`),
            new i.default({
              method: s,
              url: l,
              headers: u,
              schema: this.schemaName,
              body: a,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      t.default = a;
    },
    39396: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      class r extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      }
      t.default = r;
    },
    16626: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let o = n(r(66063));
      class i extends o.default {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          let r = Array.from(new Set(t))
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${r})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: r, type: n } = {}) {
          let o = "";
          "plain" === n
            ? (o = "pl")
            : "phrase" === n
            ? (o = "ph")
            : "websearch" === n && (o = "w");
          let i = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(e, `${o}fts${i}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, r) {
          return this.url.searchParams.append(e, `not.${t}.${r}`), this;
        }
        or(e, { foreignTable: t, referencedTable: r = t } = {}) {
          let n = r ? `${r}.or` : "or";
          return this.url.searchParams.append(n, `(${e})`), this;
        }
        filter(e, t, r) {
          return this.url.searchParams.append(e, `${t}.${r}`), this;
        }
      }
      t.default = i;
    },
    23280: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let o = n(r(16626));
      class i {
        constructor(e, { headers: t = {}, schema: r, fetch: n }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = r),
            (this.fetch = n);
        }
        select(e, { head: t = !1, count: r } = {}) {
          let n = !1,
            i = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !n ? "" : ('"' === e && (n = !n), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", i),
            r && (this.headers.Prefer = `count=${r}`),
            new o.default({
              method: t ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: r = !0 } = {}) {
          let n = [];
          if (
            (this.headers.Prefer && n.push(this.headers.Prefer),
            t && n.push(`count=${t}`),
            r || n.push("missing=default"),
            (this.headers.Prefer = n.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new o.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: r = !1,
            count: n,
            defaultToNull: i = !0,
          } = {}
        ) {
          let s = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && s.push(this.headers.Prefer),
            n && s.push(`count=${n}`),
            i || s.push("missing=default"),
            (this.headers.Prefer = s.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new o.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          let r = [];
          return (
            this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push(`count=${t}`),
            (this.headers.Prefer = r.join(",")),
            new o.default({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new o.default({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      t.default = i;
    },
    66063: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let o = n(r(51587));
      class i extends o.default {
        select(e) {
          let t = !1,
            r = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", r),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(
          e,
          {
            ascending: t = !0,
            nullsFirst: r,
            foreignTable: n,
            referencedTable: o = n,
          } = {}
        ) {
          let i = o ? `${o}.order` : "order",
            s = this.url.searchParams.get(i);
          return (
            this.url.searchParams.set(
              i,
              `${s ? `${s},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
          let n = void 0 === r ? "limit" : `${r}.limit`;
          return this.url.searchParams.set(n, `${e}`), this;
        }
        range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
          let o = void 0 === n ? "offset" : `${n}.offset`,
            i = void 0 === n ? "limit" : `${n}.limit`;
          return (
            this.url.searchParams.set(o, `${e}`),
            this.url.searchParams.set(i, `${t - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: r = !1,
          buffers: n = !1,
          wal: o = !1,
          format: i = "text",
        } = {}) {
          var s;
          let a = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              r ? "settings" : null,
              n ? "buffers" : null,
              o ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            l =
              null !== (s = this.headers.Accept) && void 0 !== s
                ? s
                : "application/json";
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      t.default = i;
    },
    88381: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_HEADERS = void 0);
      let n = r(57662);
      t.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${n.version}` };
    },
    35943: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PostgrestBuilder =
          t.PostgrestTransformBuilder =
          t.PostgrestFilterBuilder =
          t.PostgrestQueryBuilder =
          t.PostgrestClient =
            void 0);
      let o = n(r(11294));
      t.PostgrestClient = o.default;
      let i = n(r(23280));
      t.PostgrestQueryBuilder = i.default;
      let s = n(r(16626));
      t.PostgrestFilterBuilder = s.default;
      let a = n(r(66063));
      t.PostgrestTransformBuilder = a.default;
      let l = n(r(51587));
      (t.PostgrestBuilder = l.default),
        (t.default = {
          PostgrestClient: o.default,
          PostgrestQueryBuilder: i.default,
          PostgrestFilterBuilder: s.default,
          PostgrestTransformBuilder: a.default,
          PostgrestBuilder: l.default,
        });
    },
    57662: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0),
        (t.version = "0.0.0-automated");
    },
    79617: function (e, t, r) {
      "use strict";
      r.d(t, {
        eI: function () {
          return eN;
        },
      });
      let n = (e) => {
        let t;
        return (
          e
            ? (t = e)
            : "undefined" == typeof fetch
            ? (t = (...e) =>
                Promise.resolve()
                  .then(r.bind(r, 65699))
                  .then(({ default: t }) => t(...e)))
            : (t = fetch),
          (...e) => t(...e)
        );
      };
      class o extends Error {
        constructor(e, t = "FunctionsError", r) {
          super(e), (this.name = t), (this.context = r);
        }
      }
      class i extends o {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class s extends o {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class a extends o {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      ((u = c || (c = {})).Any = "any"),
        (u.ApNortheast1 = "ap-northeast-1"),
        (u.ApNortheast2 = "ap-northeast-2"),
        (u.ApSouth1 = "ap-south-1"),
        (u.ApSoutheast1 = "ap-southeast-1"),
        (u.ApSoutheast2 = "ap-southeast-2"),
        (u.CaCentral1 = "ca-central-1"),
        (u.EuCentral1 = "eu-central-1"),
        (u.EuWest1 = "eu-west-1"),
        (u.EuWest2 = "eu-west-2"),
        (u.EuWest3 = "eu-west-3"),
        (u.SaEast1 = "sa-east-1"),
        (u.UsEast1 = "us-east-1"),
        (u.UsWest1 = "us-west-1"),
        (u.UsWest2 = "us-west-2");
      class l {
        constructor(
          e,
          { headers: t = {}, customFetch: r, region: o = c.Any } = {}
        ) {
          (this.url = e),
            (this.headers = t),
            (this.region = o),
            (this.fetch = n(r));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var r, n, o, l, u;
          return (
            (n = this),
            (o = void 0),
            (l = void 0),
            (u = function* () {
              try {
                let n;
                let { headers: o, method: l, body: u } = t,
                  c = {},
                  { region: d } = t;
                d || (d = this.region),
                  d && "any" !== d && (c["x-region"] = d),
                  u &&
                    ((o &&
                      !Object.prototype.hasOwnProperty.call(
                        o,
                        "Content-Type"
                      )) ||
                      !o) &&
                    (("undefined" != typeof Blob && u instanceof Blob) ||
                    u instanceof ArrayBuffer
                      ? ((c["Content-Type"] = "application/octet-stream"),
                        (n = u))
                      : "string" == typeof u
                      ? ((c["Content-Type"] = "text/plain"), (n = u))
                      : "undefined" != typeof FormData && u instanceof FormData
                      ? (n = u)
                      : ((c["Content-Type"] = "application/json"),
                        (n = JSON.stringify(u))));
                let h = yield this.fetch(`${this.url}/${e}`, {
                    method: l || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, c), this.headers),
                      o
                    ),
                    body: n,
                  }).catch((e) => {
                    throw new i(e);
                  }),
                  f = h.headers.get("x-relay-error");
                if (f && "true" === f) throw new s(h);
                if (!h.ok) throw new a(h);
                let p = (
                  null !== (r = h.headers.get("Content-Type")) && void 0 !== r
                    ? r
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === p
                      ? yield h.json()
                      : "application/octet-stream" === p
                      ? yield h.blob()
                      : "text/event-stream" === p
                      ? h
                      : "multipart/form-data" === p
                      ? yield h.formData()
                      : yield h.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (l || (l = Promise))(function (e, t) {
              function r(e) {
                try {
                  s(u.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function i(e) {
                try {
                  s(u.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function s(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value) instanceof l
                      ? n
                      : new l(function (e) {
                          e(n);
                        })
                    ).then(r, i);
              }
              s((u = u.apply(n, o || [])).next());
            })
          );
        }
      }
      var u,
        c,
        d,
        h,
        f,
        p,
        g,
        m,
        v,
        b,
        y,
        w,
        _,
        x,
        k,
        j,
        S,
        E,
        T,
        O,
        P,
        C = r(35943);
      let {
          PostgrestClient: A,
          PostgrestQueryBuilder: R,
          PostgrestFilterBuilder: I,
          PostgrestTransformBuilder: $,
          PostgrestBuilder: L,
        } = r.n(C)(),
        N = { "X-Client-Info": "realtime-js/2.10.2" };
      ((_ = d || (d = {}))[(_.connecting = 0)] = "connecting"),
        (_[(_.open = 1)] = "open"),
        (_[(_.closing = 2)] = "closing"),
        (_[(_.closed = 3)] = "closed"),
        ((x = h || (h = {})).closed = "closed"),
        (x.errored = "errored"),
        (x.joined = "joined"),
        (x.joining = "joining"),
        (x.leaving = "leaving"),
        ((k = f || (f = {})).close = "phx_close"),
        (k.error = "phx_error"),
        (k.join = "phx_join"),
        (k.reply = "phx_reply"),
        (k.leave = "phx_leave"),
        (k.access_token = "access_token"),
        ((p || (p = {})).websocket = "websocket"),
        ((j = g || (g = {})).Connecting = "connecting"),
        (j.Open = "open"),
        (j.Closing = "closing"),
        (j.Closed = "closed");
      class M {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : "string" == typeof e
            ? t(JSON.parse(e))
            : t({});
        }
        _binaryDecode(e) {
          let t = new DataView(e),
            r = new TextDecoder();
          return this._decodeBroadcast(e, t, r);
        }
        _decodeBroadcast(e, t, r) {
          let n = t.getUint8(1),
            o = t.getUint8(2),
            i = this.HEADER_LENGTH + 2,
            s = r.decode(e.slice(i, i + n));
          i += n;
          let a = r.decode(e.slice(i, i + o));
          return (
            (i += o),
            {
              ref: null,
              topic: s,
              event: a,
              payload: JSON.parse(r.decode(e.slice(i, e.byteLength))),
            }
          );
        }
      }
      class U {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      ((S = m || (m = {})).abstime = "abstime"),
        (S.bool = "bool"),
        (S.date = "date"),
        (S.daterange = "daterange"),
        (S.float4 = "float4"),
        (S.float8 = "float8"),
        (S.int2 = "int2"),
        (S.int4 = "int4"),
        (S.int4range = "int4range"),
        (S.int8 = "int8"),
        (S.int8range = "int8range"),
        (S.json = "json"),
        (S.jsonb = "jsonb"),
        (S.money = "money"),
        (S.numeric = "numeric"),
        (S.oid = "oid"),
        (S.reltime = "reltime"),
        (S.text = "text"),
        (S.time = "time"),
        (S.timestamp = "timestamp"),
        (S.timestamptz = "timestamptz"),
        (S.timetz = "timetz"),
        (S.tsrange = "tsrange"),
        (S.tstzrange = "tstzrange");
      let D = (e, t, r = {}) => {
          var n;
          let o = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
          return Object.keys(t).reduce(
            (r, n) => ((r[n] = G(n, e, t, o)), r),
            {}
          );
        },
        G = (e, t, r, n) => {
          let o = t.find((t) => t.name === e),
            i = null == o ? void 0 : o.type,
            s = r[e];
          return i && !n.includes(i) ? z(i, s) : B(s);
        },
        z = (e, t) => {
          if ("_" === e.charAt(0)) return W(t, e.slice(1, e.length));
          switch (e) {
            case m.bool:
              return F(t);
            case m.float4:
            case m.float8:
            case m.int2:
            case m.int4:
            case m.int8:
            case m.numeric:
            case m.oid:
              return H(t);
            case m.json:
            case m.jsonb:
              return q(t);
            case m.timestamp:
              return K(t);
            case m.abstime:
            case m.date:
            case m.daterange:
            case m.int4range:
            case m.int8range:
            case m.money:
            case m.reltime:
            case m.text:
            case m.time:
            case m.timestamptz:
            case m.timetz:
            case m.tsrange:
            case m.tstzrange:
            default:
              return B(t);
          }
        },
        B = (e) => e,
        F = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        H = (e) => {
          if ("string" == typeof e) {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        q = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        W = (e, t) => {
          if ("string" != typeof e) return e;
          let r = e.length - 1,
            n = e[r];
          if ("{" === e[0] && "}" === n) {
            let n;
            let o = e.slice(1, r);
            try {
              n = JSON.parse("[" + o + "]");
            } catch (e) {
              n = o ? o.split(",") : [];
            }
            return n.map((e) => z(t, e));
          }
          return e;
        },
        K = (e) => ("string" == typeof e ? e.replace(" ", "T") : e),
        V = (e) => {
          let t = e;
          return (t = (t = t.replace(/^ws/i, "http")).replace(
            /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
            ""
          )).replace(/\/+$/, "");
        };
      class J {
        constructor(e, t, r = {}, n = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = r),
            (this.timeout = n),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var r;
          return (
            this._hasReceived(e) &&
              t(
                null === (r = this.receivedResp) || void 0 === r
                  ? void 0
                  : r.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      ((E = v || (v = {})).SYNC = "sync"),
        (E.JOIN = "join"),
        (E.LEAVE = "leave");
      class Y {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let r = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(r.state, {}, (e) => {
            let { onJoin: t, onLeave: r, onSync: n } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = Y.syncState(this.state, e, t, r)),
              this.pendingDiffs.forEach((e) => {
                this.state = Y.syncDiff(this.state, e, t, r);
              }),
              (this.pendingDiffs = []),
              n();
          }),
            this.channel._on(r.diff, {}, (e) => {
              let { onJoin: t, onLeave: r, onSync: n } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = Y.syncDiff(this.state, e, t, r)), n());
            }),
            this.onJoin((e, t, r) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: r,
              });
            }),
            this.onLeave((e, t, r) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: r,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, r, n) {
          let o = this.cloneDeep(e),
            i = this.transformState(t),
            s = {},
            a = {};
          return (
            this.map(o, (e, t) => {
              i[e] || (a[e] = t);
            }),
            this.map(i, (e, t) => {
              let r = o[e];
              if (r) {
                let n = t.map((e) => e.presence_ref),
                  o = r.map((e) => e.presence_ref),
                  i = t.filter((e) => 0 > o.indexOf(e.presence_ref)),
                  l = r.filter((e) => 0 > n.indexOf(e.presence_ref));
                i.length > 0 && (s[e] = i), l.length > 0 && (a[e] = l);
              } else s[e] = t;
            }),
            this.syncDiff(o, { joins: s, leaves: a }, r, n)
          );
        }
        static syncDiff(e, t, r, n) {
          let { joins: o, leaves: i } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            r || (r = () => {}),
            n || (n = () => {}),
            this.map(o, (t, n) => {
              var o;
              let i = null !== (o = e[t]) && void 0 !== o ? o : [];
              if (((e[t] = this.cloneDeep(n)), i.length > 0)) {
                let r = e[t].map((e) => e.presence_ref),
                  n = i.filter((e) => 0 > r.indexOf(e.presence_ref));
                e[t].unshift(...n);
              }
              r(t, i, n);
            }),
            this.map(i, (t, r) => {
              let o = e[t];
              if (!o) return;
              let i = r.map((e) => e.presence_ref);
              (o = o.filter((e) => 0 > i.indexOf(e.presence_ref))),
                (e[t] = o),
                n(t, o, r),
                0 === o.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (t, r) => {
              let n = e[r];
              return (
                "metas" in n
                  ? (t[r] = n.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (t[r] = n),
                t
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      ((T = b || (b = {})).ALL = "*"),
        (T.INSERT = "INSERT"),
        (T.UPDATE = "UPDATE"),
        (T.DELETE = "DELETE"),
        ((O = y || (y = {})).BROADCAST = "broadcast"),
        (O.PRESENCE = "presence"),
        (O.POSTGRES_CHANGES = "postgres_changes"),
        ((P = w || (w = {})).SUBSCRIBED = "SUBSCRIBED"),
        (P.TIMED_OUT = "TIMED_OUT"),
        (P.CLOSED = "CLOSED"),
        (P.CHANNEL_ERROR = "CHANNEL_ERROR");
      class Z {
        constructor(e, t = { config: {} }, r) {
          (this.topic = e),
            (this.params = t),
            (this.socket = r),
            (this.bindings = {}),
            (this.state = h.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              {
                broadcast: { ack: !1, self: !1 },
                presence: { key: "" },
                private: !1,
              },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new J(this, f.join, this.params, this.timeout)),
            (this.rejoinTimer = new U(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = h.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = h.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = h.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = h.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(f.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new Y(this)),
            (this.broadcastEndpointURL =
              V(this.socket.endPoint) + "/api/broadcast");
        }
        subscribe(e, t = this.timeout) {
          var r, n;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: o, presence: i, private: s },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            let a = {},
              l = {
                broadcast: o,
                presence: i,
                postgres_changes:
                  null !==
                    (n =
                      null === (r = this.bindings.postgres_changes) ||
                      void 0 === r
                        ? void 0
                        : r.map((e) => e.filter)) && void 0 !== n
                    ? n
                    : [],
                private: s,
              };
            this.socket.accessToken &&
              (a.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: l }, a)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var r;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === t)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let n = this.bindings.postgres_changes,
                      o =
                        null !== (r = null == n ? void 0 : n.length) &&
                        void 0 !== r
                          ? r
                          : 0,
                      i = [];
                    for (let r = 0; r < o; r++) {
                      let o = n[r],
                        {
                          filter: { event: s, schema: a, table: l, filter: u },
                        } = o,
                        c = t && t[r];
                      if (
                        c &&
                        c.event === s &&
                        c.schema === a &&
                        c.table === l &&
                        c.filter === u
                      )
                        i.push(
                          Object.assign(Object.assign({}, o), { id: c.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = i), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, t = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, r) {
          return this._on(e, t, r);
        }
        async send(e, t = {}) {
          var r, n;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((r) => {
              var n, o, i;
              let s = this._push(e.type, e, t.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (i =
                    null ===
                      (o =
                        null === (n = this.params) || void 0 === n
                          ? void 0
                          : n.config) || void 0 === o
                      ? void 0
                      : o.broadcast) || void 0 === i
                  ? void 0
                  : i.ack) ||
                r("ok"),
                s.receive("ok", () => r("ok")),
                s.receive("error", () => r("error")),
                s.receive("timeout", () => r("timed out"));
            });
          {
            let { event: o, payload: i } = e,
              s = {
                method: "POST",
                headers: {
                  Authorization: this.socket.accessToken
                    ? `Bearer ${this.socket.accessToken}`
                    : "",
                  apikey: this.socket.apiKey ? this.socket.apiKey : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: o, payload: i }],
                }),
              };
            try {
              let e = await this._fetchWithTimeout(
                this.broadcastEndpointURL,
                s,
                null !== (r = t.timeout) && void 0 !== r ? r : this.timeout
              );
              return (
                await (null === (n = e.body) || void 0 === n
                  ? void 0
                  : n.cancel()),
                e.ok ? "ok" : "error"
              );
            } catch (e) {
              if ("AbortError" === e.name) return "timed out";
              return "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = h.leaving;
          let t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(f.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((r) => {
              let n = new J(this, f.leave, {}, e);
              n
                .receive("ok", () => {
                  t(), r("ok");
                })
                .receive("timeout", () => {
                  t(), r("timed out");
                })
                .receive("error", () => {
                  r("error");
                }),
                n.send(),
                this._canPush() || n.trigger("ok", {});
            })
          );
        }
        async _fetchWithTimeout(e, t, r) {
          let n = new AbortController(),
            o = setTimeout(() => n.abort(), r),
            i = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: n.signal })
            );
          return clearTimeout(o), i;
        }
        _push(e, t, r = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let n = new J(this, e, t, r);
          return (
            this._canPush()
              ? n.send()
              : (n.startTimeout(), this.pushBuffer.push(n)),
            n
          );
        }
        _onMessage(e, t, r) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, r) {
          var n, o;
          let i = e.toLocaleLowerCase(),
            { close: s, error: a, leave: l, join: u } = f;
          if (r && [s, a, l, u].indexOf(i) >= 0 && r !== this._joinRef())
            return;
          let c = this._onMessage(i, t, r);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(i)
            ? null === (n = this.bindings.postgres_changes) ||
              void 0 === n ||
              n
                .filter((e) => {
                  var t, r, n;
                  return (
                    (null === (t = e.filter) || void 0 === t
                      ? void 0
                      : t.event) === "*" ||
                    (null ===
                      (n =
                        null === (r = e.filter) || void 0 === r
                          ? void 0
                          : r.event) || void 0 === n
                      ? void 0
                      : n.toLocaleLowerCase()) === i
                  );
                })
                .map((e) => e.callback(c, r))
            : null === (o = this.bindings[i]) ||
              void 0 === o ||
              o
                .filter((e) => {
                  var r, n, o, s, a, l;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(i)
                  )
                    return e.type.toLocaleLowerCase() === i;
                  if ("id" in e) {
                    let i = e.id,
                      s =
                        null === (r = e.filter) || void 0 === r
                          ? void 0
                          : r.event;
                    return (
                      i &&
                      (null === (n = t.ids) || void 0 === n
                        ? void 0
                        : n.includes(i)) &&
                      ("*" === s ||
                        (null == s ? void 0 : s.toLocaleLowerCase()) ===
                          (null === (o = t.data) || void 0 === o
                            ? void 0
                            : o.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let r =
                      null ===
                        (a =
                          null === (s = null == e ? void 0 : e.filter) ||
                          void 0 === s
                            ? void 0
                            : s.event) || void 0 === a
                        ? void 0
                        : a.toLocaleLowerCase();
                    return (
                      "*" === r ||
                      r ===
                        (null === (l = null == t ? void 0 : t.event) ||
                        void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof c && "ids" in c) {
                    let e = c.data,
                      {
                        schema: t,
                        table: r,
                        commit_timestamp: n,
                        type: o,
                        errors: i,
                      } = e;
                    c = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: t,
                          table: r,
                          commit_timestamp: n,
                          eventType: o,
                          new: {},
                          old: {},
                          errors: i,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, r);
                });
        }
        _isClosed() {
          return this.state === h.closed;
        }
        _isJoined() {
          return this.state === h.joined;
        }
        _isJoining() {
          return this.state === h.joining;
        }
        _isLeaving() {
          return this.state === h.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, r) {
          let n = e.toLocaleLowerCase(),
            o = { type: n, filter: t, callback: r };
          return (
            this.bindings[n]
              ? this.bindings[n].push(o)
              : (this.bindings[n] = [o]),
            this
          );
        }
        _off(e, t) {
          let r = e.toLocaleLowerCase();
          return (
            (this.bindings[r] = this.bindings[r].filter((e) => {
              var n;
              return !(
                (null === (n = e.type) || void 0 === n
                  ? void 0
                  : n.toLocaleLowerCase()) === r && Z.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(f.close, {}, e);
        }
        _onError(e) {
          this._on(f.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = h.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let t = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (t.new = D(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (t.old = D(e.columns, e.old_record)),
            t
          );
        }
      }
      let X = () => {},
        Q = "undefined" != typeof WebSocket;
      class ee {
        constructor(e, t) {
          var n;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.httpEndpoint = ""),
            (this.headers = N),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = X),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new M()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let t;
              return (
                e
                  ? (t = e)
                  : "undefined" == typeof fetch
                  ? (t = (...e) =>
                      Promise.resolve()
                        .then(r.bind(r, 65699))
                        .then(({ default: t }) => t(...e)))
                  : (t = fetch),
                (...e) => t(...e)
              );
            }),
            (this.endPoint = `${e}/${p.websocket}`),
            (this.httpEndpoint = V(e)),
            (null == t ? void 0 : t.transport)
              ? (this.transport = t.transport)
              : (this.transport = null),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          let o =
            null === (n = null == t ? void 0 : t.params) || void 0 === n
              ? void 0
              : n.apikey;
          o && ((this.accessToken = o), (this.apiKey = o)),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new U(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch));
        }
        connect() {
          if (!this.conn) {
            if (this.transport) {
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
              return;
            }
            if (Q) {
              (this.conn = new WebSocket(this._endPointURL())),
                this.setupConnection();
              return;
            }
            (this.conn = new et(this._endPointURL(), void 0, {
              close: () => {
                this.conn = null;
              },
            })),
              r
                .e(7031)
                .then(r.t.bind(r, 37031, 23))
                .then(({ default: e }) => {
                  (this.conn = new e(this._endPointURL(), void 0, {
                    headers: this.headers,
                  })),
                    this.setupConnection();
                });
          }
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          let t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
          return this.disconnect(), e;
        }
        log(e, t, r) {
          this.logger(e, t, r);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case d.connecting:
              return g.Connecting;
            case d.open:
              return g.Open;
            case d.closing:
              return g.Closing;
            default:
              return g.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === g.Open;
        }
        channel(e, t = { config: {} }) {
          let r = new Z(`realtime:${e}`, t, this);
          return this.channels.push(r), r;
        }
        push(e) {
          let { topic: t, event: r, payload: n, ref: o } = e,
            i = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          this.log("push", `${t} ${r} (${o})`, n),
            this.isConnected() ? i() : this.sendBuffer.push(i);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(f.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: r, payload: n, ref: o } = e;
            ((o && o === this.pendingHeartbeatRef) ||
              r === (null == n ? void 0 : n.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${n.status || ""} ${t} ${r} ${(o && "(" + o + ")") || ""}`,
                n
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(r, n, o)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(f.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          let r = e.match(/\?/) ? "&" : "?",
            n = new URLSearchParams(t);
          return `${e}${r}${n}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      }
      class et {
        constructor(e, t, r) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = d.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = r.close);
        }
      }
      class er extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function en(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      class eo extends er {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class ei extends er {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      let es = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = (...e) =>
                  Promise.resolve()
                    .then(r.bind(r, 65699))
                    .then(({ default: t }) => t(...e)))
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        ea = () => {
          var e, t, n, o;
          return (
            (e = void 0),
            (t = void 0),
            (n = void 0),
            (o = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(r.bind(r, 65699))).Response
                : Response;
            }),
            new (n || (n = Promise))(function (r, i) {
              function s(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(s, a);
              }
              l((o = o.apply(e, t || [])).next());
            })
          );
        };
      var el = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      let eu = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ec = (e, t) =>
          el(void 0, void 0, void 0, function* () {
            e instanceof (yield ea())
              ? e
                  .json()
                  .then((r) => {
                    t(new eo(eu(r), e.status || 500));
                  })
                  .catch((e) => {
                    t(new ei(eu(e), e));
                  })
              : t(new ei(eu(e), e));
          }),
        ed = (e, t, r, n) => {
          let o = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? o
            : ((o.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              (o.body = JSON.stringify(n)),
              Object.assign(Object.assign({}, o), r));
        };
      function eh(e, t, r, n, o, i) {
        return el(this, void 0, void 0, function* () {
          return new Promise((s, a) => {
            e(r, ed(t, n, o, i))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == n ? void 0 : n.noResolveJson) ? e : e.json();
              })
              .then((e) => s(e))
              .catch((e) => ec(e, a));
          });
        });
      }
      function ef(e, t, r, n) {
        return el(this, void 0, void 0, function* () {
          return eh(e, "GET", t, r, n);
        });
      }
      function ep(e, t, r, n, o) {
        return el(this, void 0, void 0, function* () {
          return eh(e, "POST", t, n, o, r);
        });
      }
      function eg(e, t, r, n, o) {
        return el(this, void 0, void 0, function* () {
          return eh(e, "DELETE", t, n, o, r);
        });
      }
      var em = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      let ev = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        eb = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class ey {
        constructor(e, t = {}, r, n) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = r),
            (this.fetch = es(n));
        }
        uploadOrUpdate(e, t, r, n) {
          return em(this, void 0, void 0, function* () {
            try {
              let o;
              let i = Object.assign(Object.assign({}, eb), n),
                s = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(i.upsert) }
                );
              "undefined" != typeof Blob && r instanceof Blob
                ? ((o = new FormData()).append("cacheControl", i.cacheControl),
                  o.append("", r))
                : "undefined" != typeof FormData && r instanceof FormData
                ? (o = r).append("cacheControl", i.cacheControl)
                : ((o = r),
                  (s["cache-control"] = `max-age=${i.cacheControl}`),
                  (s["content-type"] = i.contentType));
              let a = this._removeEmptyFolders(t),
                l = this._getFinalPath(a),
                u = yield this.fetch(
                  `${this.url}/object/${l}`,
                  Object.assign(
                    { method: e, body: o, headers: s },
                    (null == i ? void 0 : i.duplex) ? { duplex: i.duplex } : {}
                  )
                ),
                c = yield u.json();
              if (u.ok)
                return {
                  data: { path: a, id: c.Id, fullPath: c.Key },
                  error: null,
                };
              return { data: null, error: c };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, r) {
          return em(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, r);
          });
        }
        uploadToSignedUrl(e, t, r, n) {
          return em(this, void 0, void 0, function* () {
            let o = this._removeEmptyFolders(e),
              i = this._getFinalPath(o),
              s = new URL(this.url + `/object/upload/sign/${i}`);
            s.searchParams.set("token", t);
            try {
              let e;
              let t = Object.assign({ upsert: eb.upsert }, n),
                i = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && r instanceof Blob
                ? ((e = new FormData()).append("cacheControl", t.cacheControl),
                  e.append("", r))
                : "undefined" != typeof FormData && r instanceof FormData
                ? (e = r).append("cacheControl", t.cacheControl)
                : ((e = r),
                  (i["cache-control"] = `max-age=${t.cacheControl}`),
                  (i["content-type"] = t.contentType));
              let a = yield this.fetch(s.toString(), {
                  method: "PUT",
                  body: e,
                  headers: i,
                }),
                l = yield a.json();
              if (a.ok)
                return { data: { path: o, fullPath: l.Key }, error: null };
              return { data: null, error: l };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e, t) {
          return em(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                n = Object.assign({}, this.headers);
              (null == t ? void 0 : t.upsert) && (n["x-upsert"] = "true");
              let o = yield ep(
                  this.fetch,
                  `${this.url}/object/upload/sign/${r}`,
                  {},
                  { headers: n }
                ),
                i = new URL(this.url + o.url),
                s = i.searchParams.get("token");
              if (!s) throw new er("No token returned by API");
              return {
                data: { signedUrl: i.toString(), path: e, token: s },
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, r) {
          return em(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, r);
          });
        }
        move(e, t, r) {
          return em(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/object/move`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: e,
                    destinationKey: t,
                    destinationBucket: null == r ? void 0 : r.destinationBucket,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t, r) {
          return em(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield ep(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                      destinationBucket:
                        null == r ? void 0 : r.destinationBucket,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, r) {
          return em(this, void 0, void 0, function* () {
            try {
              let n = this._getFinalPath(e),
                o = yield ep(
                  this.fetch,
                  `${this.url}/object/sign/${n}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == r ? void 0 : r.transform)
                      ? { transform: r.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                i = (null == r ? void 0 : r.download)
                  ? `&download=${!0 === r.download ? "" : r.download}`
                  : "";
              return {
                data: (o = {
                  signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`),
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, r) {
          return em(this, void 0, void 0, function* () {
            try {
              let n = yield ep(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                o = (null == r ? void 0 : r.download)
                  ? `&download=${!0 === r.download ? "" : r.download}`
                  : "";
              return {
                data: n.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${o}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return em(this, void 0, void 0, function* () {
            let r = void 0 !== (null == t ? void 0 : t.transform),
              n = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              o = n ? `?${n}` : "";
            try {
              let t = this._getFinalPath(e),
                n = yield ef(
                  this.fetch,
                  `${this.url}/${
                    r ? "render/image/authenticated" : "object"
                  }/${t}${o}`,
                  { headers: this.headers, noResolveJson: !0 }
                );
              return { data: yield n.blob(), error: null };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          let r = this._getFinalPath(e),
            n = [],
            o = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== o && n.push(o);
          let i = void 0 !== (null == t ? void 0 : t.transform),
            s = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== s && n.push(s);
          let a = n.join("&");
          return (
            "" !== a && (a = `?${a}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${i ? "render/image" : "object"}/public/${r}${a}`
                ),
              },
            }
          );
        }
        remove(e) {
          return em(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, r) {
          return em(this, void 0, void 0, function* () {
            try {
              let n = Object.assign(Object.assign(Object.assign({}, ev), t), {
                prefix: e || "",
              });
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  n,
                  { headers: this.headers },
                  r
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      }
      let ew = { "X-Client-Info": "storage-js/2.6.0" };
      var e_ = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      class ex {
        constructor(e, t = {}, r) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, ew), t)),
            (this.fetch = es(r));
        }
        listBuckets() {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield (function (e, t, r, n, o) {
                  return el(this, void 0, void 0, function* () {
                    return eh(e, "PUT", t, n, void 0, r);
                  });
                })(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/bucket/${e}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return e_(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (en(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      }
      class ek extends ex {
        constructor(e, t = {}, r) {
          super(e, t, r);
        }
        from(e) {
          return new ey(this.url, this.headers, e, this.fetch);
        }
      }
      let ej = "";
      "undefined" != typeof Deno
        ? (ej = "deno")
        : "undefined" != typeof document
        ? (ej = "web")
        : "undefined" != typeof navigator && "ReactNative" === navigator.product
        ? (ej = "react-native")
        : (ej = "node");
      let eS = { headers: { "X-Client-Info": `supabase-js-${ej}/2.44.3` } },
        eE = { schema: "public" },
        eT = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        eO = {};
      var eP = r(65699);
      let eC = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = eP.default)
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        eA = () => ("undefined" == typeof Headers ? eP.Headers : Headers),
        eR = (e, t, r) => {
          let n = eC(r),
            o = eA();
          return (r, i) => {
            var s, a, l, u;
            return (
              (s = void 0),
              (a = void 0),
              (l = void 0),
              (u = function* () {
                var s;
                let a = null !== (s = yield t()) && void 0 !== s ? s : e,
                  l = new o(null == i ? void 0 : i.headers);
                return (
                  l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") ||
                    l.set("Authorization", `Bearer ${a}`),
                  n(r, Object.assign(Object.assign({}, i), { headers: l }))
                );
              }),
              new (l || (l = Promise))(function (e, t) {
                function r(e) {
                  try {
                    o(u.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function n(e) {
                  try {
                    o(u.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function o(t) {
                  var o;
                  t.done
                    ? e(t.value)
                    : ((o = t.value) instanceof l
                        ? o
                        : new l(function (e) {
                            e(o);
                          })
                      ).then(r, n);
                }
                o((u = u.apply(s, a || [])).next());
              })
            );
          };
        };
      var eI = r(19209);
      class e$ extends eI.LY {
        constructor(e) {
          super(e);
        }
      }
      class eL {
        constructor(e, t, r) {
          var n, o, i;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw Error("supabaseUrl is required.");
          if (!t) throw Error("supabaseKey is required.");
          let s = e.replace(/\/$/, "");
          (this.realtimeUrl = `${s}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${s}/auth/v1`),
            (this.storageUrl = `${s}/storage/v1`),
            (this.functionsUrl = `${s}/functions/v1`);
          let a = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            l = (function (e, t) {
              let { db: r, auth: n, realtime: o, global: i } = e,
                { db: s, auth: a, realtime: l, global: u } = t;
              return {
                db: Object.assign(Object.assign({}, s), r),
                auth: Object.assign(Object.assign({}, a), n),
                realtime: Object.assign(Object.assign({}, l), o),
                global: Object.assign(Object.assign({}, u), i),
              };
            })(null != r ? r : {}, {
              db: eE,
              realtime: eO,
              auth: Object.assign(Object.assign({}, eT), { storageKey: a }),
              global: eS,
            });
          (this.storageKey =
            null !== (n = l.auth.storageKey) && void 0 !== n ? n : ""),
            (this.headers =
              null !== (o = l.global.headers) && void 0 !== o ? o : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (i = l.auth) && void 0 !== i ? i : {},
              this.headers,
              l.global.fetch
            )),
            (this.fetch = eR(
              t,
              this._getAccessToken.bind(this),
              l.global.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, l.realtime)
            )),
            (this.rest = new A(`${s}/rest/v1`, {
              headers: this.headers,
              schema: l.db.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new l(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new ek(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, r = {}) {
          return this.rest.rpc(e, t, r);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t, r, n, o, i;
          return (
            (r = this),
            (n = void 0),
            (o = void 0),
            (i = function* () {
              let { data: r } = yield this.auth.getSession();
              return null !==
                (t =
                  null === (e = r.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== t
                ? t
                : null;
            }),
            new (o || (o = Promise))(function (e, t) {
              function s(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function a(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function l(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof o
                      ? r
                      : new o(function (e) {
                          e(r);
                        })
                    ).then(s, a);
              }
              l((i = i.apply(r, n || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            storage: n,
            storageKey: o,
            flowType: i,
            debug: s,
          },
          a,
          l
        ) {
          var u;
          let c = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new e$({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, c), a),
            storageKey: o,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            storage: n,
            flowType: i,
            debug: s,
            fetch: l,
            hasCustomAuthorizationHeader: "Authorization" in this.headers,
          });
        }
        _initRealtimeClient(e) {
          return new ee(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, r) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== r
            ? (this.realtime.setAuth(null != r ? r : null),
              (this.changedAccessToken = r))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      }
      let eN = (e, t, r) => new eL(e, t, r);
    },
    51795: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return s;
        },
      });
      var n = r(6277);
      let o = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        i = n.Z,
        s = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: s, defaultVariants: a } = t,
            l = Object.keys(s).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = o(t) || o(n);
              return s[e][i];
            }),
            u =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return i(
            e,
            l,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...u }[t])
                      : { ...a, ...u }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    6277: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      }),
        (t.Z = n);
    },
    39515: function (e, t, r) {
      var n = r(38761)(r(37772), "DataView");
      e.exports = n;
    },
    89612: function (e, t, r) {
      var n = r(52118),
        o = r(96909),
        i = r(98138),
        s = r(4174),
        a = r(7942);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = i),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    80235: function (e, t, r) {
      var n = r(3945),
        o = r(21846),
        i = r(88028),
        s = r(72344),
        a = r(94769);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = i),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    10326: function (e, t, r) {
      var n = r(38761)(r(37772), "Map");
      e.exports = n;
    },
    96738: function (e, t, r) {
      var n = r(92411),
        o = r(36417),
        i = r(86928),
        s = r(79493),
        a = r(24150);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = i),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    52760: function (e, t, r) {
      var n = r(38761)(r(37772), "Promise");
      e.exports = n;
    },
    2143: function (e, t, r) {
      var n = r(38761)(r(37772), "Set");
      e.exports = n;
    },
    45386: function (e, t, r) {
      var n = r(96738),
        o = r(52842),
        i = r(52482);
      function s(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new n(); ++t < r; ) this.add(e[t]);
      }
      (s.prototype.add = s.prototype.push = o),
        (s.prototype.has = i),
        (e.exports = s);
    },
    86571: function (e, t, r) {
      var n = r(80235),
        o = r(15243),
        i = r(72858),
        s = r(4417),
        a = r(8605),
        l = r(71418);
      function u(e) {
        var t = (this.__data__ = new n(e));
        this.size = t.size;
      }
      (u.prototype.clear = o),
        (u.prototype.delete = i),
        (u.prototype.get = s),
        (u.prototype.has = a),
        (u.prototype.set = l),
        (e.exports = u);
    },
    50857: function (e, t, r) {
      var n = r(37772).Symbol;
      e.exports = n;
    },
    79162: function (e, t, r) {
      var n = r(37772).Uint8Array;
      e.exports = n;
    },
    93215: function (e, t, r) {
      var n = r(38761)(r(37772), "WeakMap");
      e.exports = n;
    },
    67552: function (e) {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length, o = 0, i = [];
          ++r < n;

        ) {
          var s = e[r];
          t(s, r, e) && (i[o++] = s);
        }
        return i;
      };
    },
    38333: function (e, t, r) {
      var n = r(77832);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    34893: function (e) {
      e.exports = function (e, t, r) {
        for (var n = -1, o = null == e ? 0 : e.length; ++n < o; )
          if (r(t, e[n])) return !0;
        return !1;
      };
    },
    1634: function (e, t, r) {
      var n = r(36473),
        o = r(79631),
        i = r(86152),
        s = r(73226),
        a = r(39045),
        l = r(77598),
        u = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var r = i(e),
          c = !r && o(e),
          d = !r && !c && s(e),
          h = !r && !c && !d && l(e),
          f = r || c || d || h,
          p = f ? n(e.length, String) : [],
          g = p.length;
        for (var m in e)
          (t || u.call(e, m)) &&
            !(
              f &&
              ("length" == m ||
                (d && ("offset" == m || "parent" == m)) ||
                (h &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                a(m, g))
            ) &&
            p.push(m);
        return p;
      };
    },
    50343: function (e) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
          o[r] = t(e[r], r, e);
        return o;
      };
    },
    65067: function (e) {
      e.exports = function (e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
        return e;
      };
    },
    87064: function (e) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      };
    },
    22218: function (e, t, r) {
      var n = r(41225);
      e.exports = function (e, t) {
        for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
        return -1;
      };
    },
    21359: function (e) {
      e.exports = function (e, t, r, n) {
        for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
    },
    13324: function (e, t, r) {
      var n = r(17297),
        o = r(33812);
      e.exports = function (e, t) {
        t = n(t, e);
        for (var r = 0, i = t.length; null != e && r < i; ) e = e[o(t[r++])];
        return r && r == i ? e : void 0;
      };
    },
    1897: function (e, t, r) {
      var n = r(65067),
        o = r(86152);
      e.exports = function (e, t, r) {
        var i = t(e);
        return o(e) ? i : n(i, r(e));
      };
    },
    53366: function (e, t, r) {
      var n = r(50857),
        o = r(62107),
        i = r(37157),
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
          ? o(e)
          : i(e);
      };
    },
    20187: function (e) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    77832: function (e, t, r) {
      var n = r(21359),
        o = r(22195),
        i = r(66024);
      e.exports = function (e, t, r) {
        return t == t ? i(e, t, r) : n(e, o, r);
      };
    },
    15183: function (e, t, r) {
      var n = r(53366),
        o = r(15125);
      e.exports = function (e) {
        return o(e) && "[object Arguments]" == n(e);
      };
    },
    88746: function (e, t, r) {
      var n = r(51952),
        o = r(15125);
      e.exports = function e(t, r, i, s, a) {
        return (
          t === r ||
          (null != t && null != r && (o(t) || o(r))
            ? n(t, r, i, s, e, a)
            : t != t && r != r)
        );
      };
    },
    51952: function (e, t, r) {
      var n = r(86571),
        o = r(74871),
        i = r(11491),
        s = r(17416),
        a = r(70940),
        l = r(86152),
        u = r(73226),
        c = r(77598),
        d = "[object Arguments]",
        h = "[object Array]",
        f = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r, g, m, v) {
        var b = l(e),
          y = l(t),
          w = b ? h : a(e),
          _ = y ? h : a(t);
        (w = w == d ? f : w), (_ = _ == d ? f : _);
        var x = w == f,
          k = _ == f,
          j = w == _;
        if (j && u(e)) {
          if (!u(t)) return !1;
          (b = !0), (x = !1);
        }
        if (j && !x)
          return (
            v || (v = new n()),
            b || c(e) ? o(e, t, r, g, m, v) : i(e, t, w, r, g, m, v)
          );
        if (!(1 & r)) {
          var S = x && p.call(e, "__wrapped__"),
            E = k && p.call(t, "__wrapped__");
          if (S || E) {
            var T = S ? e.value() : e,
              O = E ? t.value() : t;
            return v || (v = new n()), m(T, O, r, g, v);
          }
        }
        return !!j && (v || (v = new n()), s(e, t, r, g, m, v));
      };
    },
    37036: function (e, t, r) {
      var n = r(86571),
        o = r(88746);
      e.exports = function (e, t, r, i) {
        var s = r.length,
          a = s,
          l = !i;
        if (null == e) return !a;
        for (e = Object(e); s--; ) {
          var u = r[s];
          if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++s < a; ) {
          var c = (u = r[s])[0],
            d = e[c],
            h = u[1];
          if (l && u[2]) {
            if (void 0 === d && !(c in e)) return !1;
          } else {
            var f = new n();
            if (i) var p = i(d, h, c, e, t, f);
            if (!(void 0 === p ? o(h, d, 3, i, f) : p)) return !1;
          }
        }
        return !0;
      };
    },
    22195: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    6840: function (e, t, r) {
      var n = r(61049),
        o = r(47394),
        i = r(29259),
        s = r(87035),
        a = /^\[object .+?Constructor\]$/,
        l = Object.prototype,
        u = Function.prototype.toString,
        c = l.hasOwnProperty,
        d = RegExp(
          "^" +
            u
              .call(c)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!i(e) || o(e)) && (n(e) ? d : a).test(s(e));
      };
    },
    35522: function (e, t, r) {
      var n = r(53366),
        o = r(61158),
        i = r(15125),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return i(e) && o(e.length) && !!s[n(e)];
        });
    },
    68286: function (e, t, r) {
      var n = r(26423),
        o = r(74716),
        i = r(23059),
        s = r(86152),
        a = r(65798);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? i
          : "object" == typeof e
          ? s(e)
            ? o(e[0], e[1])
            : n(e)
          : a(e);
      };
    },
    86411: function (e, t, r) {
      var n = r(16001),
        o = r(54248),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e))
          i.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
    },
    26423: function (e, t, r) {
      var n = r(37036),
        o = r(49882),
        i = r(73477);
      e.exports = function (e) {
        var t = o(e);
        return 1 == t.length && t[0][2]
          ? i(t[0][0], t[0][1])
          : function (r) {
              return r === e || n(r, e, t);
            };
      };
    },
    74716: function (e, t, r) {
      var n = r(88746),
        o = r(72579),
        i = r(95041),
        s = r(21401),
        a = r(28792),
        l = r(73477),
        u = r(33812);
      e.exports = function (e, t) {
        return s(e) && a(t)
          ? l(u(e), t)
          : function (r) {
              var s = o(r, e);
              return void 0 === s && s === t ? i(r, e) : n(t, s, 3);
            };
      };
    },
    20256: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    82952: function (e, t, r) {
      var n = r(13324);
      e.exports = function (e) {
        return function (t) {
          return n(t, e);
        };
      };
    },
    36473: function (e) {
      e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
    },
    1054: function (e, t, r) {
      var n = r(50857),
        o = r(50343),
        i = r(86152),
        s = r(4795),
        a = 1 / 0,
        l = n ? n.prototype : void 0,
        u = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return o(t, e) + "";
        if (s(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -a ? "-0" : r;
      };
    },
    51704: function (e, t, r) {
      var n = r(52153),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e;
      };
    },
    47826: function (e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    67326: function (e, t, r) {
      var n = r(45386),
        o = r(38333),
        i = r(34893),
        s = r(59950),
        a = r(78803),
        l = r(16909);
      e.exports = function (e, t, r) {
        var u = -1,
          c = o,
          d = e.length,
          h = !0,
          f = [],
          p = f;
        if (r) (h = !1), (c = i);
        else if (d >= 200) {
          var g = t ? null : a(e);
          if (g) return l(g);
          (h = !1), (c = s), (p = new n());
        } else p = t ? [] : f;
        e: for (; ++u < d; ) {
          var m = e[u],
            v = t ? t(m) : m;
          if (((m = r || 0 !== m ? m : 0), h && v == v)) {
            for (var b = p.length; b--; ) if (p[b] === v) continue e;
            t && p.push(v), f.push(m);
          } else c(p, v, r) || (p !== f && p.push(v), f.push(m));
        }
        return f;
      };
    },
    59950: function (e) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    17297: function (e, t, r) {
      var n = r(86152),
        o = r(21401),
        i = r(54452),
        s = r(66188);
      e.exports = function (e, t) {
        return n(e) ? e : o(e, t) ? [e] : i(s(e));
      };
    },
    24019: function (e, t, r) {
      var n = r(37772)["__core-js_shared__"];
      e.exports = n;
    },
    78803: function (e, t, r) {
      var n = r(2143),
        o = r(34291),
        i = r(16909),
        s =
          n && 1 / i(new n([, -0]))[1] == 1 / 0
            ? function (e) {
                return new n(e);
              }
            : o;
      e.exports = s;
    },
    74871: function (e, t, r) {
      var n = r(45386),
        o = r(87064),
        i = r(59950);
      e.exports = function (e, t, r, s, a, l) {
        var u = 1 & r,
          c = e.length,
          d = t.length;
        if (c != d && !(u && d > c)) return !1;
        var h = l.get(e),
          f = l.get(t);
        if (h && f) return h == t && f == e;
        var p = -1,
          g = !0,
          m = 2 & r ? new n() : void 0;
        for (l.set(e, t), l.set(t, e); ++p < c; ) {
          var v = e[p],
            b = t[p];
          if (s) var y = u ? s(b, v, p, t, e, l) : s(v, b, p, e, t, l);
          if (void 0 !== y) {
            if (y) continue;
            g = !1;
            break;
          }
          if (m) {
            if (
              !o(t, function (e, t) {
                if (!i(m, t) && (v === e || a(v, e, r, s, l))) return m.push(t);
              })
            ) {
              g = !1;
              break;
            }
          } else if (!(v === b || a(v, b, r, s, l))) {
            g = !1;
            break;
          }
        }
        return l.delete(e), l.delete(t), g;
      };
    },
    11491: function (e, t, r) {
      var n = r(50857),
        o = r(79162),
        i = r(41225),
        s = r(74871),
        a = r(75179),
        l = r(16909),
        u = n ? n.prototype : void 0,
        c = u ? u.valueOf : void 0;
      e.exports = function (e, t, r, n, u, d, h) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              break;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            if (e.byteLength != t.byteLength || !d(new o(e), new o(t))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var f = a;
          case "[object Set]":
            var p = 1 & n;
            if ((f || (f = l), e.size != t.size && !p)) break;
            var g = h.get(e);
            if (g) return g == t;
            (n |= 2), h.set(e, t);
            var m = s(f(e), f(t), n, u, d, h);
            return h.delete(e), m;
          case "[object Symbol]":
            if (c) return c.call(e) == c.call(t);
        }
        return !1;
      };
    },
    17416: function (e, t, r) {
      var n = r(13483),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r, i, s, a) {
        var l = 1 & r,
          u = n(e),
          c = u.length;
        if (c != n(t).length && !l) return !1;
        for (var d = c; d--; ) {
          var h = u[d];
          if (!(l ? h in t : o.call(t, h))) return !1;
        }
        var f = a.get(e),
          p = a.get(t);
        if (f && p) return f == t && p == e;
        var g = !0;
        a.set(e, t), a.set(t, e);
        for (var m = l; ++d < c; ) {
          var v = e[(h = u[d])],
            b = t[h];
          if (i) var y = l ? i(b, v, h, t, e, a) : i(v, b, h, e, t, a);
          if (!(void 0 === y ? v === b || s(v, b, r, i, a) : y)) {
            g = !1;
            break;
          }
          m || (m = "constructor" == h);
        }
        if (g && !m) {
          var w = e.constructor,
            _ = t.constructor;
          w != _ &&
            "constructor" in e &&
            "constructor" in t &&
            !(
              "function" == typeof w &&
              w instanceof w &&
              "function" == typeof _ &&
              _ instanceof _
            ) &&
            (g = !1);
        }
        return a.delete(e), a.delete(t), g;
      };
    },
    51242: function (e, t, r) {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n;
    },
    13483: function (e, t, r) {
      var n = r(1897),
        o = r(80633),
        i = r(90249);
      e.exports = function (e) {
        return n(e, i, o);
      };
    },
    27937: function (e, t, r) {
      var n = r(98304);
      e.exports = function (e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
    },
    49882: function (e, t, r) {
      var n = r(28792),
        o = r(90249);
      e.exports = function (e) {
        for (var t = o(e), r = t.length; r--; ) {
          var i = t[r],
            s = e[i];
          t[r] = [i, s, n(s)];
        }
        return t;
      };
    },
    38761: function (e, t, r) {
      var n = r(6840),
        o = r(98109);
      e.exports = function (e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0;
      };
    },
    62107: function (e, t, r) {
      var n = r(50857),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        a = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, a),
          r = e[a];
        try {
          e[a] = void 0;
          var n = !0;
        } catch (e) {}
        var o = s.call(e);
        return n && (t ? (e[a] = r) : delete e[a]), o;
      };
    },
    80633: function (e, t, r) {
      var n = r(67552),
        o = r(30981),
        i = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        a = s
          ? function (e) {
              return null == e
                ? []
                : n(s((e = Object(e))), function (t) {
                    return i.call(e, t);
                  });
            }
          : o;
      e.exports = a;
    },
    70940: function (e, t, r) {
      var n = r(39515),
        o = r(10326),
        i = r(52760),
        s = r(2143),
        a = r(93215),
        l = r(53366),
        u = r(87035),
        c = "[object Map]",
        d = "[object Promise]",
        h = "[object Set]",
        f = "[object WeakMap]",
        p = "[object DataView]",
        g = u(n),
        m = u(o),
        v = u(i),
        b = u(s),
        y = u(a),
        w = l;
      ((n && w(new n(new ArrayBuffer(1))) != p) ||
        (o && w(new o()) != c) ||
        (i && w(i.resolve()) != d) ||
        (s && w(new s()) != h) ||
        (a && w(new a()) != f)) &&
        (w = function (e) {
          var t = l(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? u(r) : "";
          if (n)
            switch (n) {
              case g:
                return p;
              case m:
                return c;
              case v:
                return d;
              case b:
                return h;
              case y:
                return f;
            }
          return t;
        }),
        (e.exports = w);
    },
    98109: function (e) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    1369: function (e, t, r) {
      var n = r(17297),
        o = r(79631),
        i = r(86152),
        s = r(39045),
        a = r(61158),
        l = r(33812);
      e.exports = function (e, t, r) {
        t = n(t, e);
        for (var u = -1, c = t.length, d = !1; ++u < c; ) {
          var h = l(t[u]);
          if (!(d = null != e && r(e, h))) break;
          e = e[h];
        }
        return d || ++u != c
          ? d
          : !!(c = null == e ? 0 : e.length) &&
              a(c) &&
              s(h, c) &&
              (i(e) || o(e));
      };
    },
    52118: function (e, t, r) {
      var n = r(99191);
      e.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    96909: function (e) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    98138: function (e, t, r) {
      var n = r(99191),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return o.call(t, e) ? t[e] : void 0;
      };
    },
    4174: function (e, t, r) {
      var n = r(99191),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e);
      };
    },
    7942: function (e, t, r) {
      var n = r(99191);
      e.exports = function (e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    39045: function (e) {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, r) {
        var n = typeof e;
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ("number" == n || ("symbol" != n && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < r
        );
      };
    },
    21401: function (e, t, r) {
      var n = r(86152),
        o = r(4795),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      e.exports = function (e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return (
          !!(
            "number" == r ||
            "symbol" == r ||
            "boolean" == r ||
            null == e ||
            o(e)
          ) ||
          s.test(e) ||
          !i.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    98304: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    47394: function (e, t, r) {
      var n,
        o = r(24019),
        i = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      e.exports = function (e) {
        return !!i && i in e;
      };
    },
    16001: function (e) {
      var t = Object.prototype;
      e.exports = function (e) {
        var r = e && e.constructor;
        return e === (("function" == typeof r && r.prototype) || t);
      };
    },
    28792: function (e, t, r) {
      var n = r(29259);
      e.exports = function (e) {
        return e == e && !n(e);
      };
    },
    3945: function (e) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    21846: function (e, t, r) {
      var n = r(22218),
        o = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
        );
      };
    },
    88028: function (e, t, r) {
      var n = r(22218);
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
    },
    72344: function (e, t, r) {
      var n = r(22218);
      e.exports = function (e) {
        return n(this.__data__, e) > -1;
      };
    },
    94769: function (e, t, r) {
      var n = r(22218);
      e.exports = function (e, t) {
        var r = this.__data__,
          o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : (r[o][1] = t), this;
      };
    },
    92411: function (e, t, r) {
      var n = r(89612),
        o = r(80235),
        i = r(10326);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (i || o)(),
            string: new n(),
          });
      };
    },
    36417: function (e, t, r) {
      var n = r(27937);
      e.exports = function (e) {
        var t = n(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    86928: function (e, t, r) {
      var n = r(27937);
      e.exports = function (e) {
        return n(this, e).get(e);
      };
    },
    79493: function (e, t, r) {
      var n = r(27937);
      e.exports = function (e) {
        return n(this, e).has(e);
      };
    },
    24150: function (e, t, r) {
      var n = r(27937);
      e.exports = function (e, t) {
        var r = n(this, e),
          o = r.size;
        return r.set(e, t), (this.size += r.size == o ? 0 : 1), this;
      };
    },
    75179: function (e) {
      e.exports = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      };
    },
    73477: function (e) {
      e.exports = function (e, t) {
        return function (r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
      };
    },
    77777: function (e, t, r) {
      var n = r(30733);
      e.exports = function (e) {
        var t = n(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      };
    },
    99191: function (e, t, r) {
      var n = r(38761)(Object, "create");
      e.exports = n;
    },
    54248: function (e, t, r) {
      var n = r(60241)(Object.keys, Object);
      e.exports = n;
    },
    4146: function (e, t, r) {
      e = r.nmd(e);
      var n = r(51242),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o && n.process,
        a = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            if (e) return e;
            return s && s.binding && s.binding("util");
          } catch (e) {}
        })();
      e.exports = a;
    },
    37157: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    60241: function (e) {
      e.exports = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    37772: function (e, t, r) {
      var n = r(51242),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      e.exports = i;
    },
    52842: function (e) {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    52482: function (e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    16909: function (e) {
      e.exports = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      };
    },
    15243: function (e, t, r) {
      var n = r(80235);
      e.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    72858: function (e) {
      e.exports = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
    },
    4417: function (e) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    8605: function (e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    71418: function (e, t, r) {
      var n = r(80235),
        o = r(10326),
        i = r(96738);
      e.exports = function (e, t) {
        var r = this.__data__;
        if (r instanceof n) {
          var s = r.__data__;
          if (!o || s.length < 199)
            return s.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new i(s);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
    },
    66024: function (e) {
      e.exports = function (e, t, r) {
        for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n;
        return -1;
      };
    },
    54452: function (e, t, r) {
      var n = r(77777),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        s = n(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(o, function (e, r, n, o) {
              t.push(n ? o.replace(i, "$1") : r || e);
            }),
            t
          );
        });
      e.exports = s;
    },
    33812: function (e, t, r) {
      var n = r(4795),
        o = 1 / 0;
      e.exports = function (e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t;
      };
    },
    87035: function (e) {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    52153: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    60417: function (e) {
      e.exports = function (e) {
        for (
          var t = -1, r = null == e ? 0 : e.length, n = 0, o = [];
          ++t < r;

        ) {
          var i = e[t];
          i && (o[n++] = i);
        }
        return o;
      };
    },
    54073: function (e, t, r) {
      var n = r(29259),
        o = r(61100),
        i = r(7642),
        s = Math.max,
        a = Math.min;
      e.exports = function (e, t, r) {
        var l,
          u,
          c,
          d,
          h,
          f,
          p = 0,
          g = !1,
          m = !1,
          v = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function b(t) {
          var r = l,
            n = u;
          return (l = u = void 0), (p = t), (d = e.apply(n, r));
        }
        function y(e) {
          var r = e - f,
            n = e - p;
          return void 0 === f || r >= t || r < 0 || (m && n >= c);
        }
        function w() {
          var e,
            r,
            n,
            i = o();
          if (y(i)) return _(i);
          h = setTimeout(
            w,
            ((e = i - f), (r = i - p), (n = t - e), m ? a(n, c - r) : n)
          );
        }
        function _(e) {
          return ((h = void 0), v && l) ? b(e) : ((l = u = void 0), d);
        }
        function x() {
          var e,
            r = o(),
            n = y(r);
          if (((l = arguments), (u = this), (f = r), n)) {
            if (void 0 === h)
              return (p = e = f), (h = setTimeout(w, t)), g ? b(e) : d;
            if (m) return clearTimeout(h), (h = setTimeout(w, t)), b(f);
          }
          return void 0 === h && (h = setTimeout(w, t)), d;
        }
        return (
          (t = i(t) || 0),
          n(r) &&
            ((g = !!r.leading),
            (c = (m = "maxWait" in r) ? s(i(r.maxWait) || 0, t) : c),
            (v = "trailing" in r ? !!r.trailing : v)),
          (x.cancel = function () {
            void 0 !== h && clearTimeout(h), (p = 0), (l = f = u = h = void 0);
          }),
          (x.flush = function () {
            return void 0 === h ? d : _(o());
          }),
          x
        );
      };
    },
    41225: function (e) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    72579: function (e, t, r) {
      var n = r(13324);
      e.exports = function (e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o;
      };
    },
    95041: function (e, t, r) {
      var n = r(20187),
        o = r(1369);
      e.exports = function (e, t) {
        return null != e && o(e, t, n);
      };
    },
    23059: function (e) {
      e.exports = function (e) {
        return e;
      };
    },
    79631: function (e, t, r) {
      var n = r(15183),
        o = r(15125),
        i = Object.prototype,
        s = i.hasOwnProperty,
        a = i.propertyIsEnumerable,
        l = n(
          (function () {
            return arguments;
          })()
        )
          ? n
          : function (e) {
              return o(e) && s.call(e, "callee") && !a.call(e, "callee");
            };
      e.exports = l;
    },
    86152: function (e) {
      var t = Array.isArray;
      e.exports = t;
    },
    67878: function (e, t, r) {
      var n = r(61049),
        o = r(61158);
      e.exports = function (e) {
        return null != e && o(e.length) && !n(e);
      };
    },
    73226: function (e, t, r) {
      e = r.nmd(e);
      var n = r(37772),
        o = r(36330),
        i = t && !t.nodeType && t,
        s = i && e && !e.nodeType && e,
        a = s && s.exports === i ? n.Buffer : void 0,
        l = a ? a.isBuffer : void 0;
      e.exports = l || o;
    },
    61049: function (e, t, r) {
      var n = r(53366),
        o = r(29259);
      e.exports = function (e) {
        if (!o(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    61158: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    29259: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    15125: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    4795: function (e, t, r) {
      var n = r(53366),
        o = r(15125);
      e.exports = function (e) {
        return "symbol" == typeof e || (o(e) && "[object Symbol]" == n(e));
      };
    },
    77598: function (e, t, r) {
      var n = r(35522),
        o = r(47826),
        i = r(4146),
        s = i && i.isTypedArray,
        a = s ? o(s) : n;
      e.exports = a;
    },
    90249: function (e, t, r) {
      var n = r(1634),
        o = r(86411),
        i = r(67878);
      e.exports = function (e) {
        return i(e) ? n(e) : o(e);
      };
    },
    30733: function (e, t, r) {
      var n = r(96738);
      function o(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var s = e.apply(this, n);
          return (r.cache = i.set(o, s) || i), s;
        };
        return (r.cache = new (o.Cache || n)()), r;
      }
      (o.Cache = n), (e.exports = o);
    },
    34291: function (e) {
      e.exports = function () {};
    },
    61100: function (e, t, r) {
      var n = r(37772);
      e.exports = function () {
        return n.Date.now();
      };
    },
    65798: function (e, t, r) {
      var n = r(20256),
        o = r(82952),
        i = r(21401),
        s = r(33812);
      e.exports = function (e) {
        return i(e) ? n(s(e)) : o(e);
      };
    },
    30981: function (e) {
      e.exports = function () {
        return [];
      };
    },
    36330: function (e) {
      e.exports = function () {
        return !1;
      };
    },
    7642: function (e, t, r) {
      var n = r(51704),
        o = r(29259),
        i = r(4795),
        s = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return s;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = l.test(e);
        return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? s : +e;
      };
    },
    66188: function (e, t, r) {
      var n = r(1054);
      e.exports = function (e) {
        return null == e ? "" : n(e);
      };
    },
    84636: function (e, t, r) {
      var n = r(68286),
        o = r(67326);
      e.exports = function (e, t) {
        return e && e.length ? o(e, n(t, 2)) : [];
      };
    },
    55351: function (e, t, r) {
      "use strict";
      r.d(t, {
        PB: function () {
          return g;
        },
        lX: function () {
          return p;
        },
      });
      var n = r(2784),
        o = r(97729),
        i = r.n(o);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var l = ["keyOverride"],
        u = ["crossOrigin"],
        c = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          norobots: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        d = function (e, t, r) {
          void 0 === t && (t = []);
          var o = void 0 === r ? {} : r,
            i = o.defaultWidth,
            s = o.defaultHeight;
          return t.reduce(function (t, r, o) {
            return (
              t.push(
                n.createElement("meta", {
                  key: "og:" + e + ":0" + o,
                  property: "og:" + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":alt0" + o,
                    property: "og:" + e + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + o,
                    property: "og:" + e + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":type0" + o,
                    property: "og:" + e + ":type",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: r.width.toString(),
                    })
                  )
                : i &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: i.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + o,
                      property: "og:" + e + ":height",
                      content: r.height.toString(),
                    })
                  )
                : s &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + o,
                      property: "og:" + e + ":height",
                      content: s.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        h = function (e) {
          var t,
            r,
            o,
            i,
            h,
            f = [];
          e.titleTemplate && (c.templateTitle = e.titleTemplate);
          var p = "";
          e.title
            ? ((p = e.title),
              c.templateTitle &&
                (p = c.templateTitle.replace(/%s/g, function () {
                  return p;
                })))
            : e.defaultTitle && (p = e.defaultTitle),
            p && f.push(n.createElement("title", { key: "title" }, p));
          var g =
              void 0 === e.noindex
                ? c.noindex || e.dangerouslySetAllPagesToNoIndex
                : e.noindex,
            m =
              void 0 === e.nofollow
                ? c.nofollow || e.dangerouslySetAllPagesToNoFollow
                : e.nofollow,
            v = e.norobots || c.norobots,
            b = "";
          if (e.robotsProps) {
            var y = e.robotsProps,
              w = y.nosnippet,
              _ = y.maxSnippet,
              x = y.maxImagePreview,
              k = y.maxVideoPreview,
              j = y.noarchive,
              S = y.noimageindex,
              E = y.notranslate,
              T = y.unavailableAfter;
            b =
              (w ? ",nosnippet" : "") +
              (_ ? ",max-snippet:" + _ : "") +
              (x ? ",max-image-preview:" + x : "") +
              (j ? ",noarchive" : "") +
              (T ? ",unavailable_after:" + T : "") +
              (S ? ",noimageindex" : "") +
              (k ? ",max-video-preview:" + k : "") +
              (E ? ",notranslate" : "");
          }
          if (
            (e.norobots && (c.norobots = !0),
            g || m
              ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
                f.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (g ? "noindex" : "index") +
                      "," +
                      (m ? "nofollow" : "follow") +
                      b,
                  })
                ))
              : (!v || b) &&
                f.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + b,
                  })
                ),
            e.description &&
              f.push(
                n.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              f.push(
                n.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              f.push(
                n.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                f.push(
                  n.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                f.push(
                  n.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                f.push(
                  n.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                f.push(
                  n.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              f.push(
                n.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || p) &&
              f.push(
                n.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (i = e.openGraph) ? void 0 : i.title) || p,
                })
              ),
            ((null != (r = e.openGraph) && r.description) || e.description) &&
              f.push(
                n.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (h = e.openGraph) ? void 0 : h.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                f.push(
                  n.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var O = e.openGraph.type.toLowerCase();
              f.push(
                n.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: O,
                })
              ),
                "profile" === O && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      f.push(
                        n.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      f.push(
                        n.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      f.push(
                        n.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      f.push(
                        n.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === O && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      f.push(
                        n.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      f.push(
                        n.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === O && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      f.push(
                        n.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      f.push(
                        n.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      f.push(
                        n.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      f.push(
                        n.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === O ||
                      "video.episode" === O ||
                      "video.tv_show" === O ||
                      "video.other" === O) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          f.push(
                            n.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            f.push(
                              n.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      f.push(
                        n.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      f.push(
                        n.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        f.push(
                          n.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      f.push(
                        n.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                f.push.apply(
                  f,
                  d("image", e.openGraph.images, {
                    defaultWidth: c.defaultOpenGraphImageWidth,
                    defaultHeight: c.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                f.push.apply(
                  f,
                  d("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                f.push.apply(f, d("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                f.push(
                  n.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                f.push(
                  n.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              f.push(
                n.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  r,
                  o = e.keyOverride,
                  i = a(e, l);
                f.push(
                  n.createElement(
                    "meta",
                    s(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (r = null != o ? o : i.name)
                              ? r
                              : i.property)
                            ? t
                            : i.httpEquiv),
                      },
                      i
                    )
                  )
                );
              }),
            null != (o = e.additionalLinkTags) &&
              o.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t,
                  r = e.crossOrigin,
                  o = a(e, u);
                f.push(
                  n.createElement(
                    "link",
                    s(
                      {
                        key:
                          "link" +
                          (null != (t = o.keyOverride) ? t : o.href) +
                          o.rel,
                      },
                      o,
                      {
                        crossOrigin:
                          "anonymous" === r ||
                          "use-credentials" === r ||
                          "" === r
                            ? r
                            : void 0,
                      }
                    )
                  )
                );
              }),
            f
          );
        },
        f = function (e) {
          return n.createElement(i(), null, h(e));
        },
        p = function (e) {
          var t = e.title,
            r = e.titleTemplate,
            o = e.defaultTitle,
            i = e.themeColor,
            s = e.dangerouslySetAllPagesToNoIndex,
            a = e.dangerouslySetAllPagesToNoFollow,
            l = e.description,
            u = e.canonical,
            c = e.facebook,
            d = e.openGraph,
            h = e.additionalMetaTags,
            p = e.twitter,
            g = e.defaultOpenGraphImageWidth,
            m = e.defaultOpenGraphImageHeight,
            v = e.defaultOpenGraphVideoWidth,
            b = e.defaultOpenGraphVideoHeight,
            y = e.mobileAlternate,
            w = e.languageAlternates,
            _ = e.additionalLinkTags,
            x = e.robotsProps,
            k = e.norobots;
          return n.createElement(f, {
            title: t,
            titleTemplate: r,
            defaultTitle: o,
            themeColor: i,
            dangerouslySetAllPagesToNoIndex: void 0 !== s && s,
            dangerouslySetAllPagesToNoFollow: void 0 !== a && a,
            description: l,
            canonical: u,
            facebook: c,
            openGraph: d,
            additionalMetaTags: h,
            twitter: p,
            defaultOpenGraphImageWidth: g,
            defaultOpenGraphImageHeight: m,
            defaultOpenGraphVideoWidth: v,
            defaultOpenGraphVideoHeight: b,
            mobileAlternate: y,
            languageAlternates: w,
            additionalLinkTags: _,
            robotsProps: x,
            norobots: k,
          });
        },
        g = function (e) {
          var t = e.title,
            r = e.themeColor,
            o = e.noindex,
            i = e.nofollow,
            s = e.robotsProps,
            a = e.description,
            l = e.canonical,
            u = e.openGraph,
            c = e.facebook,
            d = e.twitter,
            h = e.additionalMetaTags,
            p = e.titleTemplate,
            g = e.defaultTitle,
            m = e.mobileAlternate,
            v = e.languageAlternates,
            b = e.additionalLinkTags;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(f, {
              title: t,
              themeColor: r,
              noindex: o,
              nofollow: i,
              robotsProps: s,
              description: a,
              canonical: l,
              facebook: c,
              openGraph: u,
              additionalMetaTags: h,
              twitter: d,
              titleTemplate: p,
              defaultTitle: g,
              mobileAlternate: m,
              languageAlternates: v,
              additionalLinkTags: b,
            })
          );
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      );
    },
    22965: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return u;
        },
        f: function () {
          return c;
        },
      });
      var n = r(2784),
        o = ["light", "dark"],
        i = "(prefers-color-scheme: dark)",
        s = "undefined" == typeof window,
        a = n.createContext(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        u = () => {
          var e;
          return null != (e = n.useContext(a)) ? e : l;
        },
        c = (e) =>
          n.useContext(a) ? e.children : n.createElement(h, { ...e }),
        d = ["light", "dark"],
        h = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: s = !0,
          storageKey: l = "theme",
          themes: u = d,
          defaultTheme: c = r ? "system" : "light",
          attribute: h = "data-theme",
          value: v,
          children: b,
          nonce: y,
        }) => {
          let [w, _] = n.useState(() => p(l, c)),
            [x, k] = n.useState(() => p(l)),
            j = v ? Object.values(v) : u,
            S = n.useCallback((e) => {
              let n = e;
              if (!n) return;
              "system" === e && r && (n = m());
              let i = v ? v[n] : n,
                a = t ? g() : null,
                l = document.documentElement;
              if (
                ("class" === h
                  ? (l.classList.remove(...j), i && l.classList.add(i))
                  : i
                  ? l.setAttribute(h, i)
                  : l.removeAttribute(h),
                s)
              ) {
                let e = o.includes(c) ? c : null,
                  t = o.includes(n) ? n : e;
                l.style.colorScheme = t;
              }
              null == a || a();
            }, []),
            E = n.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(e) : e;
                _(t);
                try {
                  localStorage.setItem(l, t);
                } catch (e) {}
              },
              [e]
            ),
            T = n.useCallback(
              (t) => {
                k(m(t)), "system" === w && r && !e && S("system");
              },
              [w, e]
            );
          n.useEffect(() => {
            let e = window.matchMedia(i);
            return e.addListener(T), T(e), () => e.removeListener(T);
          }, [T]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === l && E(e.newValue || c);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [E]),
            n.useEffect(() => {
              S(null != e ? e : w);
            }, [e, w]);
          let O = n.useMemo(
            () => ({
              theme: w,
              setTheme: E,
              forcedTheme: e,
              resolvedTheme: "system" === w ? x : w,
              themes: r ? [...u, "system"] : u,
              systemTheme: r ? x : void 0,
            }),
            [w, E, e, x, r, u]
          );
          return n.createElement(
            a.Provider,
            { value: O },
            n.createElement(f, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: r,
              enableColorScheme: s,
              storageKey: l,
              themes: u,
              defaultTheme: c,
              attribute: h,
              value: v,
              children: b,
              attrs: j,
              nonce: y,
            }),
            b
          );
        },
        f = n.memo(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: s,
            enableColorScheme: a,
            defaultTheme: l,
            value: u,
            attrs: c,
            nonce: d,
          }) => {
            let h = "system" === l,
              f =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              p = a
                ? (o.includes(l) ? l : null)
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              g = (e, t = !1, n = !0) => {
                let i = u ? u[e] : e,
                  s = t ? e + "|| ''" : `'${i}'`,
                  l = "";
                return (
                  a &&
                    n &&
                    !t &&
                    o.includes(e) &&
                    (l += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? t || i
                      ? (l += `c.add(${s})`)
                      : (l += "null")
                    : i && (l += `d[s](n,${s})`),
                  l
                );
              },
              m = e
                ? `!function(){${f}${g(e)}}()`
                : s
                ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g(
                    "dark"
                  )}}else{${g("light")}}}else if(e){${
                    u ? `var x=${JSON.stringify(u)};` : ""
                  }${g(u ? "x[e]" : "e", !0)}}${
                    h ? "" : "else{" + g(l, !1, !1) + "}"
                  }${p}}catch(e){}}()`
                : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${
                    u ? `var x=${JSON.stringify(u)};` : ""
                  }${g(u ? "x[e]" : "e", !0)}}else{${g(
                    l,
                    !1,
                    !1
                  )};}${p}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: m },
            });
          }
        ),
        p = (e, t) => {
          let r;
          if (!s) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        g = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        m = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? "dark" : "light"
        );
    },
    88472: function (e, t, r) {
      e.exports = r(53755);
    },
    93542: function (e, t, r) {
      "use strict";
      var n, o;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (o = r.g.process) ? void 0 : o.env)
          ? r.g.process
          : r(42351);
    },
    86570: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(60790);
        },
      ]);
    },
    53548: function (e, t, r) {
      "use strict";
      var n = r(5632);
      t.Z = () => {
        let { pathname: e } = (0, n.useRouter)(),
          t = e.startsWith("/launch-week/7"),
          r = e.startsWith("/launch-week/8"),
          o = e.startsWith("/launch-week/x");
        return t || r || o;
      };
    },
    23642: function (e, t, r) {
      "use strict";
      var n, o, i, s;
      r.d(t, {
        T5: function () {
          return d;
        },
        XK: function () {
          return u;
        },
        Yu: function () {
          return l;
        },
        ZF: function () {
          return o;
        },
        _O: function () {
          return h;
        },
        iC: function () {
          return a;
        },
        ih: function () {
          return f;
        },
        kU: function () {
          return v;
        },
        qP: function () {
          return m;
        },
        re: function () {
          return g;
        },
        rv: function () {
          return c;
        },
        yp: function () {
          return p;
        },
      });
      let a = "Supabase",
        l =
          "Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.",
        u = !0,
        c = !1,
        d = "https://api.supabase.io/platform";
      ((i = n || (n = {})).DATABASE = "Database"),
        (i.AUTH = "Authentication"),
        (i.STORAGE = "Storage"),
        (i.FUNCTIONS = "Edge Functions"),
        (i.REALTIME = "Realtime"),
        (i.VECTOR = "Vector"),
        ((s = o || (o = {})).DATABASE = "database"),
        (s.AUTH = "auth"),
        (s.STORAGE = "storage"),
        (s.FUNCTIONS = "functions"),
        (s.REALTIME = "realtime"),
        (s.VECTOR = "vector");
      let h = "https://supabase.com/launch-week",
        f = "https://supabase.com/launch-week",
        p = new URL(h).origin,
        g = "2024-04-21T23:59:59.000-07:00",
        m = "August 12-16 / 7am PT",
        v = "Launch Week 12";
    },
    31930: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return o;
        },
        v: function () {
          return i;
        },
      });
      var n = r(30175);
      async function o(e, t) {
        let r = await (0, n.hP)(),
          o = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
          });
        return (
          r && o.set("Authorization", "Bearer ".concat(r)),
          fetch(e, {
            method: "GET",
            headers: o,
            referrerPolicy: "no-referrer-when-downgrade",
            ...t,
          })
        );
      }
      async function i(e, t, r) {
        let { headers: o, ...i } = r || {},
          s = await (0, n.hP)(),
          a = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            ...o,
          });
        return (
          s && a.set("Authorization", "Bearer ".concat(s)),
          fetch(e, {
            method: "POST",
            headers: a,
            credentials: "include",
            referrerPolicy: "no-referrer-when-downgrade",
            body: JSON.stringify(t),
            ...i,
          })
        );
      }
    },
    43251: function (e, t, r) {
      "use strict";
      let n = (0, r(79617).eI)(
        "https://xguihxuzqibwxjnimxev.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndWloeHV6cWlid3hqbmlteGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNzc1MTgsImV4cCI6MjAzMzk1MzUxOH0.aIqjQ9V7djMxYit-DT1fYNV_VWMHSqldh_18XfX2_BE"
      );
      t.Z = n;
    },
    60790: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return B;
          },
        });
      var n = r(52322);
      r(13486), r(71921), r(75182);
      var o = r(5130),
        i = r(30175),
        s = r(55351),
        a = r(97729),
        l = r.n(a),
        u = r(5632),
        c = r(2784),
        d = r(49934),
        h = r(22965),
        f = r(6333),
        p = r(44382),
        g = r(29982),
        m = r(35710);
      let v = (e) => {
        let { toastOptions: t, ...r } = e,
          { theme: o = "system" } = (0, h.F)();
        return (0, n.jsx)(f.x7, {
          icons: {
            warning: (0, n.jsx)(m.Jj, { variant: "warning" }),
            error: (0, n.jsx)(m.Jj, { variant: "destructive" }),
            info: (0, n.jsx)(m.Jj, { variant: "default" }),
          },
          theme: o,
          className: "toaster group pointer-events-auto",
          style: { fontFamily: "inherit" },
          toastOptions: {
            unstyled: !0,
            classNames: {
              toast: (0, p.cn)(
                "group",
                "toast",
                "w-full",
                "rounded-md",
                "py-3",
                "px-5",
                "flex",
                "gap-2",
                "items-start",
                "font-normal",
                "text-sm",
                "group-[.toaster]:bg-overlay group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-overlay group-[.toaster]:shadow-lg"
              ),
              icon: "mt-0.5",
              title: "!font-normal",
              description:
                "text-xs group-[.toast]:text-foreground-lighter transition-opacity group-data-[expanded=false]:opacity-0 group-data-[front=true]:!opacity-100",
              actionButton: (0, p.cn)(
                "block",
                (0, g.d)({ type: "primary", size: "tiny" })
              ),
              cancelButton: (0, p.cn)(
                "block",
                (0, g.d)({ type: "default", size: "tiny" })
              ),
              warning:
                "group toast group-[.toaster]:!bg-warning-200 group-[.toaster]:!border-warning-500",
              error:
                "group toast group-[.toaster]:!bg-destructive-200 group-[.toaster]:!border-destructive-500",
              closeButton: (0, p.cn)(
                "absolute right-2 top-2 rounded-md text-foreground/50 opacity-0 transition-opacity",
                "hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
                "group-[.destructive]:text-destructive-300 group-[.destructive]:hover:text-destructive-50",
                "group-[.destructive]:focus:ring-destructive-400 group-[.destructive]:focus:ring-offset-destructive-600",
                "left-auto transform-none bg-transparent border-0 border-transparent hover:!bg-transparent hover:border-transparent"
              ),
              content: "grow",
            },
            duration: 4e3,
            closeButton: !0,
            ...t,
          },
          cn: p.cn,
          ...r,
        });
      };
      var b = r(88472),
        y = r(77013),
        w = r(41757);
      let _ = (e) => e.toLowerCase().replace(/\s+/g, "-"),
        x = function (e) {
          let { forceMount: t = !1, id: r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            id: null != r ? r : _(e),
            name: e,
            forceMount: t,
            commands: [],
          };
        },
        k = () => {
          let e = (0, w.sj)({
            commandSections: [],
            registerSection: (t, r, n) => {
              var o, i, s, a, l;
              let u = e.commandSections.findIndex((e) => e.name === t);
              if (
                (-1 === u && (u = e.commandSections.length),
                (null !== (a = (i = e.commandSections)[(s = u)]) &&
                  void 0 !== a) ||
                  (i[s] = x(t)),
                null == n ? void 0 : n.sectionMeta)
              ) {
                let t = e.commandSections[u].meta;
                t && "object" == typeof t && "object" == typeof n.sectionMeta
                  ? (e.commandSections[u].meta = { ...t, ...n.sectionMeta })
                  : (e.commandSections[u].meta = n.sectionMeta);
              }
              return (
                (null == n ? void 0 : n.forceMountSection) &&
                  (e.commandSections[u].forceMount = !0),
                (null == n ? void 0 : n.orderCommands)
                  ? (e.commandSections[u].commands = n.orderCommands(
                      e.commandSections[u].commands,
                      r
                    ))
                  : e.commandSections[u].commands.push(...r),
                (e.commandSections =
                  null !==
                    (l =
                      null == n
                        ? void 0
                        : null === (o = n.orderSection) || void 0 === o
                        ? void 0
                        : o.call(n, e.commandSections, u)) && void 0 !== l
                    ? l
                    : e.commandSections),
                () => {
                  let n = e.commandSections.findIndex((e) => e.name === t);
                  if (-1 !== n) {
                    let t = e.commandSections[n].commands.filter(
                      (e) => !r.map((e) => e.id).includes(e.id)
                    );
                    t.length
                      ? (e.commandSections[n].commands = t)
                      : e.commandSections.splice(n, 1);
                  }
                }
              );
            },
          });
          return e;
        };
      var j = r(39756);
      let S = () => {
          let e = (0, w.sj)({ query: "", setQuery: (t) => (e.query = t) });
          return e;
        },
        E = () => {
          let e = (0, w.sj)({
            initiated: !1,
            init: () => !e.initiated && (e.initiated = !0),
            open: !1,
            setOpen: (t) => {
              e.init(), (e.open = t);
            },
            toggleOpen: () => {
              e.init(), (e.open = !e.open);
            },
            size: "large",
            setSize: (t) => (e.size = t),
            touchHandlers: {
              handleTouchStart: () => {},
              handleTouchMove: () => {},
              handleTouchEnd: () => {},
            },
            setTouchHandlers: (t) => (e.touchHandlers = t),
          });
          return e;
        };
      var T = r(72079),
        O = r(73839);
      let P = (e) => {
          let { children: t } = e,
            r = (0, i.hS)(() => ({
              commandsState: k(),
              pagesState: (0, j.fU)(),
              queryState: S(),
              viewState: E(),
            }));
          return (0, n.jsx)(y.A.Provider, { value: r, children: t });
        },
        C = (e) => {
          let { openKey: t } = e,
            r = (0, O.az)();
          return (
            (0, c.useEffect)(() => {
              let e = (e) => {
                "" !== t &&
                  e.key === t &&
                  e.metaKey &&
                  (e.preventDefault(), r());
              };
              return (
                document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
              );
            }, [r]),
            null
          );
        };
      function A(e) {
        let { children: t } = e,
          r = (0, O.FX)(),
          o = (0, b.useRouter)(),
          i = !!o,
          s = (0, c.useCallback)(() => {
            r(!1);
          }, [r]),
          a = (0, c.useMemo)(() => ({ onPendingEnd: new Set([s]) }), [s]);
        return (
          (0, c.useEffect)(() => {
            if (i)
              return (
                o.events.on("routeChangeComplete", s),
                () => o.events.off("routeChangeComplete", s)
              );
          }, [i, o]),
          (0, n.jsx)(T.A.Provider, { value: a, children: t })
        );
      }
      let R = (e) => {
        let { children: t, openKey: r } = e;
        return (0, n.jsxs)(P, {
          children: [
            (0, n.jsx)(C, { openKey: null != r ? r : "k" }),
            (0, n.jsx)(A, { children: t }),
          ],
        });
      };
      var I = r(88906),
        $ = r(29802),
        L = r(25237);
      let N = r.n(L)()(
        () =>
          Promise.all([
            r.e(1717),
            r.e(2787),
            r.e(2251),
            r.e(9573),
            r.e(4525),
            r.e(569),
            r.e(6188),
            r.e(795),
          ]).then(r.bind(r, 90795)),
        { loadableGenerated: { webpack: () => [90795] }, ssr: !1 }
      );
      function M() {
        return (0, O.jK)() && (0, n.jsx)(N, {});
      }
      var U = r(23642),
        D = r(31930),
        G = r(43251),
        z = r(53548);
      function B(e) {
        var t, r;
        let { Component: a, pageProps: h } = e,
          f = (0, u.useRouter)(),
          p = (0, i.Mk)(),
          { consentValue: g, hasAcceptedConsent: m } = (0, I.Cg)(),
          b = (!i.XK && !U.rv) || !m,
          y =
            "undefined" != typeof document
              ? null === (t = document) || void 0 === t
                ? void 0
                : t.title
              : "",
          w =
            "undefined" != typeof document
              ? null === (r = document) || void 0 === r
                ? void 0
                : r.referrer
              : "",
          { search: _, language: x, viewport_height: k, viewport_width: j } = p;
        function S(e) {
          return (0, D.v)(
            "".concat(U.T5, "/telemetry/page"),
            {
              page_url: e,
              page_title: y,
              pathname: f.pathname,
              ph: {
                referrer: w,
                language: x,
                search: _,
                viewport_height: k,
                viewport_width: j,
                user_agent: navigator.userAgent,
              },
            },
            { headers: { Version: "2" }, credentials: "include" }
          );
        }
        (0, i.qe)(),
          (0, c.useEffect)(() => {
            if (!b)
              return (
                f.events.on("routeChangeComplete", e),
                () => {
                  f.events.off("routeChangeComplete", e);
                }
              );
            function e() {
              S(window.location.href);
            }
          }, [f.events, g]),
          (0, c.useEffect)(() => {
            !b && f.isReady && S(window.location.href);
          }, [f.isReady, g]),
          (0, c.useEffect)(() => {
            if (b) return;
            let e = async () => {
              await (0, D.v)("".concat(U.T5, "/telemetry/page-leave"), {
                page_url: window.location.href,
                page_title: y,
                pathname: f.pathname,
              });
            };
            return (
              window.addEventListener("beforeunload", e),
              () => {
                window.removeEventListener("beforeunload", e);
              }
            );
          }, []);
        let E = "".concat(U.iC, " | The Open Source Firebase Alternative"),
          { basePath: T } = (0, u.useRouter)(),
          O = (0, z.Z)(),
          P = "Supabase",
          C = $.u4,
          A = $.vi;
        return (
          f.asPath &&
            f.asPath.includes("/launch-week/x") &&
            ((P = "Supabase LWX"),
            (C = "images/launchweek/lwx/favicon"),
            (A = "FFFFFF")),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(l(), {
                children: (0, n.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1.0",
                }),
              }),
              (0, n.jsx)($.ZP, {
                applicationName: P,
                route: C,
                themeColor: A,
                includeManifest: !0,
                includeMsApplicationConfig: !0,
                includeRssXmlFeed: !0,
              }),
              (0, n.jsx)(s.lX, {
                title: E,
                description: U.Yu,
                openGraph: {
                  type: "website",
                  url: "https://supabase.com/",
                  site_name: "Supabase",
                  images: [
                    {
                      url: "https://supabase.com".concat(
                        T,
                        "/images/og/supabase-og.png"
                      ),
                      width: 800,
                      height: 600,
                      alt: "Supabase Og Image",
                    },
                  ],
                },
                twitter: {
                  handle: "@supabase",
                  site: "@supabase",
                  cardType: "summary_large_image",
                },
              }),
              (0, n.jsx)(o.SessionContextProvider, {
                supabaseClient: G.Z,
                children: (0, n.jsx)(i.Ho, {
                  children: (0, n.jsx)(i.f6, {
                    themes: d.n.map((e) => e.value),
                    enableSystem: !0,
                    disableTransitionOnChange: !0,
                    forcedTheme: O ? "dark" : void 0,
                    children: (0, n.jsxs)(R, {
                      children: [
                        (0, n.jsx)(v, { position: "top-right" }),
                        (0, n.jsx)(a, { ...h }),
                        (0, n.jsx)(M, {}),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    55132: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(2784);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
      var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let a = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: c,
            iconNode: d,
            ...h
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...s,
              width: o,
              height: o,
              stroke: r,
              strokeWidth: l ? (24 * Number(a)) / Number(o) : a,
              className: i("lucide", u),
              ...h,
            },
            [
              ...d.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        l = (e, t) => {
          let r = (0, n.forwardRef)((r, s) => {
            let { className: l, ...u } = r;
            return (0, n.createElement)(a, {
              ref: s,
              iconNode: t,
              className: i("lucide-".concat(o(e)), l),
              ...u,
            });
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    2005: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(55132).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    53755: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useRouter", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(2784),
        o = r(35274);
      function i() {
        return (0, n.useContext)(o.RouterContext);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    80122: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return l.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return l.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return u.ServerInsertedHTMLContext;
          },
          notFound: function () {
            return l.notFound;
          },
          permanentRedirect: function () {
            return l.permanentRedirect;
          },
          redirect: function () {
            return l.redirect;
          },
          useParams: function () {
            return f;
          },
          usePathname: function () {
            return d;
          },
          useRouter: function () {
            return h;
          },
          useSearchParams: function () {
            return c;
          },
          useSelectedLayoutSegment: function () {
            return g;
          },
          useSelectedLayoutSegments: function () {
            return p;
          },
          useServerInsertedHTML: function () {
            return u.useServerInsertedHTML;
          },
        });
      let n = r(2784),
        o = r(31011),
        i = r(23925),
        s = r(26323),
        a = r(59934),
        l = r(31339),
        u = r(9169);
      function c() {
        let e = (0, n.useContext)(i.SearchParamsContext);
        return (0, n.useMemo)(
          () => (e ? new l.ReadonlyURLSearchParams(e) : null),
          [e]
        );
      }
      function d() {
        return (0, n.useContext)(i.PathnameContext);
      }
      function h() {
        let e = (0, n.useContext)(o.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function f() {
        return (0, n.useContext)(i.PathParamsContext);
      }
      function p(e) {
        void 0 === e && (e = "children");
        let t = (0, n.useContext)(o.LayoutRouterContext);
        return t
          ? (function e(t, r, n, o) {
              let i;
              if ((void 0 === n && (n = !0), void 0 === o && (o = []), n))
                i = t[1][r];
              else {
                var l;
                let e = t[1];
                i = null != (l = e.children) ? l : Object.values(e)[0];
              }
              if (!i) return o;
              let u = i[0],
                c = (0, s.getSegmentValue)(u);
              return !c || c.startsWith(a.PAGE_SEGMENT_KEY)
                ? o
                : (o.push(c), e(i, r, !1, o));
            })(t.tree, e)
          : null;
      }
      function g(e) {
        void 0 === e && (e = "children");
        let t = p(e);
        if (!t || 0 === t.length) return null;
        let r = "children" === e ? t[0] : t[t.length - 1];
        return r === a.DEFAULT_SEGMENT_KEY ? null : r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    31339: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return s;
          },
          RedirectType: function () {
            return n.RedirectType;
          },
          notFound: function () {
            return o.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
        });
      let n = r(67105),
        o = r(60089);
      class i extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
          );
        }
      }
      class s extends URLSearchParams {
        append() {
          throw new i();
        }
        delete() {
          throw new i();
        }
        set() {
          throw new i();
        }
        sort() {
          throw new i();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    60089: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isNotFoundError: function () {
            return o;
          },
          notFound: function () {
            return n;
          },
        });
      let r = "NEXT_NOT_FOUND";
      function n() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function o(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    54403: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ((n = r || (r = {}))[(n.SeeOther = 303)] = "SeeOther"),
        (n[(n.TemporaryRedirect = 307)] = "TemporaryRedirect"),
        (n[(n.PermanentRedirect = 308)] = "PermanentRedirect"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    67105: function (e, t, r) {
      "use strict";
      var n, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return u;
          },
          getRedirectStatusCodeFromError: function () {
            return g;
          },
          getRedirectTypeFromError: function () {
            return p;
          },
          getURLFromRedirectError: function () {
            return f;
          },
          isRedirectError: function () {
            return h;
          },
          permanentRedirect: function () {
            return d;
          },
          redirect: function () {
            return c;
          },
        });
      let i = r(51253),
        s = r(58195),
        a = r(54403),
        l = "NEXT_REDIRECT";
      function u(e, t, r) {
        void 0 === r && (r = a.RedirectStatusCode.TemporaryRedirect);
        let n = Error(l);
        n.digest = l + ";" + t + ";" + e + ";" + r + ";";
        let o = i.requestAsyncStorage.getStore();
        return o && (n.mutableCookies = o.mutableCookies), n;
      }
      function c(e, t) {
        void 0 === t && (t = "replace");
        let r = s.actionAsyncStorage.getStore();
        throw u(
          e,
          t,
          (null == r ? void 0 : r.isAction)
            ? a.RedirectStatusCode.SeeOther
            : a.RedirectStatusCode.TemporaryRedirect
        );
      }
      function d(e, t) {
        void 0 === t && (t = "replace");
        let r = s.actionAsyncStorage.getStore();
        throw u(
          e,
          t,
          (null == r ? void 0 : r.isAction)
            ? a.RedirectStatusCode.SeeOther
            : a.RedirectStatusCode.PermanentRedirect
        );
      }
      function h(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("digest" in e) ||
          "string" != typeof e.digest
        )
          return !1;
        let [t, r, n, o] = e.digest.split(";", 4),
          i = Number(o);
        return (
          t === l &&
          ("replace" === r || "push" === r) &&
          "string" == typeof n &&
          !isNaN(i) &&
          i in a.RedirectStatusCode
        );
      }
      function f(e) {
        return h(e) ? e.digest.split(";", 3)[2] : null;
      }
      function p(e) {
        if (!h(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function g(e) {
        if (!h(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";", 4)[3]);
      }
      ((o = n || (n = {})).push = "push"),
        (o.replace = "replace"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    26323: function (e, t) {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    96798: function (e, t) {
      "use strict";
      var r, n, o, i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_FAST_REFRESH: function () {
            return d;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_REFRESH: function () {
            return s;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return h;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          PrefetchCacheEntryStatus: function () {
            return n;
          },
          PrefetchKind: function () {
            return r;
          },
          isThenable: function () {
            return f;
          },
        });
      let s = "refresh",
        a = "navigate",
        l = "restore",
        u = "server-patch",
        c = "prefetch",
        d = "fast-refresh",
        h = "server-action";
      function f(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((o = r || (r = {})).AUTO = "auto"),
        (o.FULL = "full"),
        (o.TEMPORARY = "temporary"),
        ((i = n || (n = {})).fresh = "fresh"),
        (i.reusable = "reusable"),
        (i.expired = "expired"),
        (i.stale = "stale"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    49056: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(65265),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    91425: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(63377),
        o = r(52322),
        i = n._(r(2784)),
        s = r(97942),
        a = r(40353),
        l = r(73828),
        u = r(58244),
        c = r(84515),
        d = r(35274),
        h = r(31011),
        f = r(96914),
        p = r(49056),
        g = r(98622),
        m = r(96798),
        v = new Set();
      function b(e, t, r, n, o, i) {
        if (i || (0, a.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: v,
          children: w,
          prefetch: _ = null,
          passHref: x,
          replace: k,
          shallow: j,
          scroll: S,
          locale: E,
          onClick: T,
          onMouseEnter: O,
          onTouchStart: P,
          legacyBehavior: C = !1,
          ...A
        } = e;
        (r = w),
          C &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let R = i.default.useContext(d.RouterContext),
          I = i.default.useContext(h.AppRouterContext),
          $ = null != R ? R : I,
          L = !R,
          N = !1 !== _,
          M = null === _ ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
          { href: U, as: D } = i.default.useMemo(() => {
            if (!R) {
              let e = y(l);
              return { href: e, as: v ? y(v) : e };
            }
            let [e, t] = (0, s.resolveHref)(R, l, !0);
            return { href: e, as: v ? (0, s.resolveHref)(R, v) : t || e };
          }, [R, l, v]),
          G = i.default.useRef(U),
          z = i.default.useRef(D);
        C && (n = i.default.Children.only(r));
        let B = C ? n && "object" == typeof n && n.ref : t,
          [F, H, q] = (0, f.useIntersection)({ rootMargin: "200px" }),
          W = i.default.useCallback(
            (e) => {
              (z.current !== D || G.current !== U) &&
                (q(), (z.current = D), (G.current = U)),
                F(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [D, B, U, q, F]
          );
        i.default.useEffect(() => {
          $ && H && N && b($, U, D, { locale: E }, { kind: M }, L);
        }, [D, U, H, E, N, null == R ? void 0 : R.locale, $, L, M]);
        let K = {
          ref: W,
          onClick(e) {
            C || "function" != typeof T || T(e),
              C &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              $ &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, s, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? i.default.startTransition(h) : h();
                })(e, $, U, D, k, j, S, E, L);
          },
          onMouseEnter(e) {
            C || "function" != typeof O || O(e),
              C &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              $ &&
                (N || !L) &&
                b(
                  $,
                  U,
                  D,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  L
                );
          },
          onTouchStart: function (e) {
            C || "function" != typeof P || P(e),
              C &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              $ &&
                (N || !L) &&
                b(
                  $,
                  U,
                  D,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(D)) K.href = D;
        else if (!C || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== E ? E : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                D,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          K.href =
            t ||
            (0, g.addBasePath)(
              (0, c.addLocale)(D, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return C
          ? i.default.cloneElement(n, K)
          : (0, o.jsx)("a", { ...A, ...K, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    96914: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2784),
        o = r(88435),
        i = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !i,
          [c, d] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          f = (0, n.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (u || c) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = s.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      s.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), s.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, h.current]),
          [
            f,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    59246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return a;
          },
          noSSR: function () {
            return s;
          },
        });
      let n = r(63377);
      r(52322), r(2784);
      let o = n._(r(84204));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function a(e, t) {
        let r = o.default,
          n = {
            loading: (e) => {
              let { error: t, isLoading: r, pastDelay: n } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (n.loader = () => e)
          : "function" == typeof e
          ? (n.loader = e)
          : "object" == typeof e && (n = { ...n, ...e });
        let a = (n = { ...n, ...t }).loader;
        return (n.loadableGenerated &&
          ((n = { ...n, ...n.loadableGenerated }), delete n.loadableGenerated),
        "boolean" != typeof n.ssr || n.ssr)
          ? r({
              ...n,
              loader: () =>
                null != a ? a().then(i) : Promise.resolve(i(() => null)),
            })
          : (delete n.webpack, delete n.modules, s(r, n));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    57604: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(63377)._(r(2784)).default.createContext(null);
    },
    84204: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let n = r(63377)._(r(2784)),
        o = r(57604),
        i = [],
        s = [],
        a = !1;
      function l(e) {
        let t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then((e) => ((r.loading = !1), (r.loaded = e), e))
            .catch((e) => {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      class u {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function c(e) {
        return (function (e, t) {
          let r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            i = null;
          function l() {
            if (!i) {
              let t = new u(e, r);
              i = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return i.promise();
          }
          if (!a) {
            let e = r.webpack ? r.webpack() : r.modules;
            e &&
              s.push((t) => {
                for (let r of e) if (t.includes(r)) return l();
              });
          }
          function c(e, t) {
            !(function () {
              l();
              let e = n.default.useContext(o.LoadableContext);
              e &&
                Array.isArray(r.modules) &&
                r.modules.forEach((t) => {
                  e(t);
                });
            })();
            let s = n.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue
            );
            return (
              n.default.useImperativeHandle(t, () => ({ retry: i.retry }), []),
              n.default.useMemo(() => {
                var t;
                return s.loading || s.error
                  ? n.default.createElement(r.loading, {
                      isLoading: s.loading,
                      pastDelay: s.pastDelay,
                      timedOut: s.timedOut,
                      error: s.error,
                      retry: i.retry,
                    })
                  : s.loaded
                  ? n.default.createElement(
                      (t = s.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, s])
            );
          }
          return (
            (c.preload = () => l()),
            (c.displayName = "LoadableComponent"),
            n.default.forwardRef(c)
          );
        })(l, e);
      }
      function d(e, t) {
        let r = [];
        for (; e.length; ) {
          let n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(() => {
          if (e.length) return d(e, t);
        });
      }
      (c.preloadAll = () =>
        new Promise((e, t) => {
          d(i).then(e, t);
        })),
        (c.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let r = () => ((a = !0), t());
            d(s, e).then(r, r);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady);
      let h = c;
    },
    9169: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return o;
          },
          useServerInsertedHTML: function () {
            return i;
          },
        });
      let n = r(5857)._(r(2784)),
        o = n.default.createContext(null);
      function i(e) {
        let t = (0, n.useContext)(o);
        t && t(e);
      }
    },
    42196: function (e, t, r) {
      "use strict";
      r.d(t, {
        S1: function () {
          return i;
        },
        ZT: function () {
          return n;
        },
        jU: function () {
          return s;
        },
        on: function () {
          return o;
        },
      });
      var n = function () {};
      function o(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        e && e.addEventListener && e.addEventListener.apply(e, t);
      }
      function i(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        e && e.removeEventListener && e.removeEventListener.apply(e, t);
      }
      var s = !0;
    },
    91631: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(2784),
        o = function (e) {
          (0, n.useEffect)(e, []);
        },
        i = function (e) {
          var t = (0, n.useRef)(e);
          (t.current = e),
            o(function () {
              return function () {
                return t.current();
              };
            });
        },
        s = function (e) {
          var t = (0, n.useRef)(0),
            r = (0, n.useState)(e),
            o = r[0],
            s = r[1],
            a = (0, n.useCallback)(function (e) {
              cancelAnimationFrame(t.current),
                (t.current = requestAnimationFrame(function () {
                  s(e);
                }));
            }, []);
          return (
            i(function () {
              cancelAnimationFrame(t.current);
            }),
            [o, a]
          );
        },
        a = r(42196),
        l = function (e, t) {
          void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0);
          var r = s({
              width: a.jU ? window.innerWidth : e,
              height: a.jU ? window.innerHeight : t,
            }),
            o = r[0],
            i = r[1];
          return (
            (0, n.useEffect)(function () {
              if (a.jU) {
                var e = function () {
                  i({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  (0, a.on)(window, "resize", e),
                  function () {
                    (0, a.S1)(window, "resize", e);
                  }
                );
              }
            }, []),
            o
          );
        };
    },
    29802: function (e, t, r) {
      "use strict";
      r.d(t, {
        u4: function () {
          return l;
        },
        vi: function () {
          return a;
        },
      });
      var n = r(52322),
        o = r(97729),
        i = r.n(o),
        s = r(5632);
      let a = "1E1E1E",
        l = "/favicon";
      t.ZP = (e) => {
        let {
            applicationName: t,
            route: r = l,
            themeColor: o = a,
            includeRssXmlFeed: u = !1,
            includeManifest: c = !1,
            includeMsApplicationConfig: d = !1,
          } = e,
          { basePath: h } = (0, s.useRouter)();
        return (0, n.jsxs)(i(), {
          children: [
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "57x57",
              href: "".concat(h).concat(r, "/apple-icon-57x57.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "60x60",
              href: "".concat(h).concat(r, "/apple-icon-60x60.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "72x72",
              href: "".concat(h).concat(r, "/apple-icon-72x72.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "76x76",
              href: "".concat(h).concat(r, "/apple-icon-76x76.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "114x114",
              href: "".concat(h).concat(r, "/apple-icon-114x114.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "120x120",
              href: "".concat(h).concat(r, "/apple-icon-120x120.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "144x144",
              href: "".concat(h).concat(r, "/apple-icon-144x144.png"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              sizes: "152x152",
              href: "".concat(h).concat(r, "/apple-icon-152x152.png"),
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-16x16.png"),
              sizes: "16x16",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-32x32.png"),
              sizes: "32x32",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-48x48.png"),
              sizes: "48x48",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-96x96.png"),
              sizes: "96x96",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-128.png"),
              sizes: "128x128",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-180x180.png"),
              sizes: "180x180",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              href: "".concat(h).concat(r, "/favicon-196x196.png"),
              sizes: "196x196",
            }),
            (0, n.jsx)("meta", {
              name: "application-name",
              content: null != t ? t : "&nbsp;",
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#".concat(o),
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-TileImage",
              content: "".concat(h).concat(r, "/mstile-144x144.png"),
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-square70x70logo",
              content: "".concat(h).concat(r, "/mstile-70x70.png"),
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-square150x150logo",
              content: "".concat(h).concat(r, "/mstile-150x150.png"),
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-wide310x150logo",
              content: "".concat(h).concat(r, "/mstile-310x150.png"),
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-square310x310logo",
              content: "".concat(h).concat(r, "/mstile-310x310.png"),
            }),
            (0, n.jsx)("meta", { name: "theme-color", content: "#".concat(o) }),
            (0, n.jsx)("link", {
              rel: "shortcut icon",
              href: "".concat(h).concat(r, "/favicon.ico"),
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "".concat(h).concat(r, "/favicon.ico"),
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon",
              href: "".concat(h).concat(r, "/favicon.ico"),
            }),
            u &&
              (0, n.jsx)("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "".concat(h, "/feed.xml"),
              }),
            c &&
              (0, n.jsx)("link", {
                rel: "manifest",
                href: "".concat(h).concat(r, "/manifest.json"),
              }),
            d &&
              (0, n.jsx)("meta", {
                name: "msapplication-config",
                content: "".concat(h).concat(r, "/browserconfig.xml"),
              }),
          ],
        });
      };
    },
    91450: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ao: function () {
          return o;
        },
        JZ: function () {
          return a;
        },
        jU: function () {
          return i;
        },
      });
      var n = r(2784);
      let o = () => {
          if (navigator) {
            if (-1 !== navigator.userAgent.indexOf("Chrome")) return "Chrome";
            if (-1 !== navigator.userAgent.indexOf("Firefox")) return "Firefox";
            if (-1 !== navigator.userAgent.indexOf("Safari")) return "Safari";
          }
        },
        i = !0,
        s = window.matchMedia("(prefers-reduced-motion: reduce)"),
        a = () =>
          !!s &&
          (0, n.useSyncExternalStore)(
            (e) => (
              s.addEventListener("change", e),
              () => {
                s.removeEventListener("change", e);
              }
            ),
            () => s.matches,
            () => !1
          );
    },
    36714: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return a;
        },
      });
      var n = r(2784),
        o = r(91631),
        i = r(42196).jU ? n.useLayoutEffect : n.useEffect;
      let s = { sm: 639, md: 767, lg: 1023, xl: 1027, "2xl": 1535 };
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "lg",
          [t, r] = (0, n.useState)(!1),
          { width: a } = (0, o.Z)(),
          l = "string" == typeof e ? s[e] : e;
        return (
          i(() => {
            a <= l ? r(!0) : r(!1);
          }, [a]),
          t
        );
      }
    },
    18467: function (e, t, r) {
      "use strict";
      var n = r(2784);
      t.Z = (e) => {
        let { onClose: t, threshold: r = 100 } = e,
          [o, i] = n.useState(0),
          [s, a] = n.useState(0),
          l = n.useRef(null),
          u = (0, n.useCallback)(
            (e) => {
              i(e.touches[0].clientY);
            },
            [i]
          ),
          c = (0, n.useCallback)(
            (e) => {
              a(e.touches[0].clientY);
              let t = s - o;
              t > 0 &&
                l.current &&
                (l.current.style.transform = "translateY(".concat(t, "px)"));
            },
            [a, o, s]
          ),
          d = (0, n.useCallback)(() => {
            s - o > r
              ? t()
              : l.current && (l.current.style.transform = "translateY(0)"),
              i(0),
              a(0);
          }, [i, a, o, s]);
        return {
          ref: l,
          handleTouchStart: u,
          handleTouchMove: c,
          handleTouchEnd: d,
        };
      };
    },
    18647: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return i;
        },
      });
      var n = r(88472),
        o = r(91450);
      function i() {
        let e = (0, n.useRouter)(),
          t = e ? e.locale : void 0;
        return {
          screenResolution: o.jU
            ? "".concat(window.innerWidth, "x").concat(window.innerHeight)
            : void 0,
          page_url: o.jU ? window.location.href : "",
          search: o.jU ? window.location.search : "",
          viewport_height: o.jU ? window.innerHeight : 0,
          viewport_width: o.jU ? window.innerWidth : 0,
          language: null != t ? t : "en-US",
        };
      }
    },
    30175: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ho: function () {
          return R;
        },
        Wu: function () {
          return p;
        },
        XK: function () {
          return G;
        },
        LOCAL_STORAGE_KEYS: function () {
          return z;
        },
        f6: function () {
          return ea;
        },
        Ao: function () {
          return B.Ao;
        },
        hP: function () {
          return D;
        },
        ig: function () {
          return eu;
        },
        OH: function () {
          return ec;
        },
        jU: function () {
          return B.jU;
        },
        Gc: function () {
          return F.G;
        },
        hS: function () {
          return H;
        },
        Nr: function () {
          return K;
        },
        OA: function () {
          return ee;
        },
        nu: function () {
          return M;
        },
        ZU: function () {
          return N;
        },
        UO: function () {
          return er;
        },
        JZ: function () {
          return B.JZ;
        },
        Mk: function () {
          return en.M;
        },
        qe: function () {
          return ei;
        },
      });
      var n,
        o,
        i,
        s,
        a,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        g = r(52322),
        m = r(2784),
        v = r(19209),
        b = r(93542);
      let y = b.env.NEXT_PUBLIC_STORAGE_KEY || "supabase.dashboard.auth.token",
        w = b.env.NEXT_PUBLIC_AUTH_DEBUG_KEY || "supabase.dashboard.auth.debug",
        _ =
          b.env.NEXT_PUBLIC_AUTH_DEBUG_PERSISTED_KEY ||
          "supabase.dashboard.auth.debug.persist",
        x =
          b.env.NEXT_PUBLIC_AUTH_NAVIGATOR_LOCK_KEY ||
          "supabase.dashboard.auth.navigatorLock.disabled",
        k =
          (null === (i = globalThis) || void 0 === i
            ? void 0
            : null === (o = i.localStorage) || void 0 === o
            ? void 0
            : o.getItem(w)) === "true",
        j =
          (null === (a = globalThis) || void 0 === a
            ? void 0
            : null === (s = a.localStorage) || void 0 === s
            ? void 0
            : s.getItem(_)) === "true",
        S =
          (null === (u = globalThis) || void 0 === u
            ? void 0
            : null === (l = u.localStorage) || void 0 === l
            ? void 0
            : l.getItem(x)) !== "true",
        E = !!(
          S &&
          (null === (d = globalThis) || void 0 === d
            ? void 0
            : null === (c = d.navigator) || void 0 === c
            ? void 0
            : c.locks)
        );
      !S ||
        (null === (f = globalThis) || void 0 === f
          ? void 0
          : null === (h = f.navigator) || void 0 === h
          ? void 0
          : h.locks) ||
        console.warn(
          "This browser does not support the Navigator Locks API. Please update it."
        );
      let T = Math.random().toString(16).substring(2),
        O = new Promise((e, t) => {
          if (!j) {
            e(null);
            return;
          }
          let r = indexedDB.open("auth-debug-log", 1);
          (r.onupgradeneeded = (e) => {
            var t;
            let r =
              null == e
                ? void 0
                : null === (t = e.target) || void 0 === t
                ? void 0
                : t.result;
            r && r.createObjectStore("events", { autoIncrement: !0 });
          }),
            (r.onsuccess = (t) => {
              console.log(
                "Opened persisted auth debug log IndexedDB database",
                T
              ),
                e(t.target.result);
            }),
            (r.onerror = (t) => {
              console.error(
                "Failed to open persisted auth debug log IndexedDB database",
                t
              ),
                e(null);
            });
        }),
        P = new v.LY({
          url: "https://auth.supabase.io/auth/v1",
          storageKey: y,
          detectSessionInUrl: !1,
          debug:
            !!k &&
            (!j ||
              function (e) {
                for (
                  var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
                  n < t;
                  n++
                )
                  r[n - 1] = arguments[n];
                console.log(e, ...r);
                let o = structuredClone(r);
                o.forEach((e) => {
                  "object" == typeof e &&
                    null !== e &&
                    (delete e.user,
                    delete e.access_token,
                    delete e.token_type,
                    delete e.provider_token);
                }),
                  (async () => {
                    try {
                      let t = await O;
                      if (!t) return;
                      let r = t.transaction(["events"], "readwrite");
                      (r.onerror = (e) => {
                        console.error(
                          "Failed to write to persisted auth debug log IndexedDB database",
                          e
                        ),
                          (O = Promise.resolve(null));
                      }),
                        r
                          .objectStore("events")
                          .add({
                            m: e.replace(/^GoTrueClient@/i, ""),
                            a: o,
                            l: window.location.pathname,
                            t: T,
                          });
                    } catch (e) {
                      console.error(
                        "Failed to log to persisted auth debug log IndexedDB database",
                        e
                      ),
                        (O = Promise.resolve(null));
                    }
                  })();
              }),
          lock: E ? v.aC : void 0,
        }),
        C = {
          access_token: void 0,
          expires_at: 0,
          expires_in: 0,
          refresh_token: "",
          token_type: "",
          user: {
            aud: "",
            app_metadata: {},
            confirmed_at: "",
            created_at: "",
            email: "",
            email_confirmed_at: "",
            id: "",
            identities: [],
            last_signed_in_at: "",
            phone: "",
            role: "",
            updated_at: "",
            user_metadata: {},
          },
        },
        A = (0, m.createContext)({
          session: null,
          isLoading: !0,
          refreshSession: () => Promise.resolve(null),
        }),
        R = (e) => {
          let { alwaysLoggedIn: t, children: r } = e,
            [n, o] = (0, m.useState)({ session: null, isLoading: !0 });
          (0, m.useEffect)(() => {
            let {
              data: { subscription: e },
            } = P.onAuthStateChange((e, t) => {
              o({ session: t, isLoading: !1 });
            });
            return e.unsubscribe;
          }, []);
          let i = (0, m.useCallback)(async () => {
              let {
                data: { session: e },
              } = await P.refreshSession();
              return e;
            }, []),
            s = (0, m.useMemo)(
              () =>
                t
                  ? { session: C, isLoading: !1, refreshSession: i }
                  : { ...n, refreshSession: i },
              [n, i]
            );
          return (0, g.jsx)(A.Provider, { value: s, children: r });
        },
        I = () => (0, m.useContext)(A),
        $ = () => I().session,
        L = () => {
          var e, t;
          return null !==
            (t = null === (e = $()) || void 0 === e ? void 0 : e.user) &&
            void 0 !== t
            ? t
            : null;
        },
        N = () => I().isLoading,
        M = () => null !== L(),
        U = null;
      async function D() {
        let e =
          null != U &&
          !!U.expires_at &&
          U.expires_at - Math.ceil(Date.now() / 1e3) < 30;
        if (!U || e) {
          let {
            data: { session: e },
            error: t,
          } = await P.getSession();
          if (t) throw t;
          return null == e ? void 0 : e.access_token;
        }
        return U.access_token;
      }
      P.onAuthStateChange((e, t) => {
        U = t;
      });
      let G = !0,
        z = {
          TELEMETRY_CONSENT: "supabase-consent-ph",
          HIDE_PROMO_TOAST: "supabase-hide-promo-toast",
          BLOG_VIEW: "supabase-blog-view",
        };
      var B = r(91450),
        F = r(36714);
      function H(e) {
        let t = (0, m.useRef)();
        return t.current || (t.current = { v: e() }), t.current.v;
      }
      var q = r(54073),
        W = r.n(q);
      let K = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          r = (0, m.useRef)();
        return (
          (0, m.useEffect)(() => {
            r.current = e;
          }, [e]),
          (0, m.useMemo)(
            () =>
              W()(() => {
                var e;
                null === (e = r.current) || void 0 === e || e.call(r);
              }, t),
            []
          )
        );
      };
      var V = r(60417),
        J = r.n(V),
        Y = r(84636),
        Z = r.n(Y);
      function X(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("id" in e && "path" in e && "type" in e && "title" in e)
        )
          return null;
        let t = [];
        return (
          "headings" in e &&
            Array.isArray(e.headings) &&
            "slugs" in e &&
            Array.isArray(e.slugs) &&
            e.headings.length === e.slugs.length &&
            e.headings.forEach((r, n) => {
              let o = e.slugs[n];
              r && o && t.push({ heading: r, slug: o });
            }),
          {
            id: e.id,
            path: e.path,
            type: e.type,
            title: e.title,
            subtitle: "subtitle" in e ? e.subtitle : null,
            description: "description" in e ? e.description : null,
            sections: t,
          }
        );
      }
      function Q(e, t) {
        if (e.key > t.key) return e;
        switch (t.type) {
          case "resultsReturned":
            let r = 2 === t.sourcesLoaded,
              n = J()(t.results.map(X)),
              o =
                "partialResults" === e.status && e.key === t.key
                  ? Z()(e.results.concat(n), (e) => e.id)
                  : n;
            if (!o.length)
              return r
                ? { status: "noResults", key: t.key }
                : {
                    status: "loading",
                    key: t.key,
                    staleResults:
                      "results" in e
                        ? e.results
                        : "staleResults" in e
                        ? e.staleResults
                        : [],
                  };
            return r
              ? { status: "fullResults", key: t.key, results: o }
              : { status: "partialResults", key: t.key, results: o };
          case "newSearchDispatched":
            return {
              status: "loading",
              key: t.key,
              staleResults:
                "results" in e
                  ? e.results
                  : "staleResults" in e
                  ? e.staleResults
                  : [],
            };
          case "reset":
            return { status: "initial", key: t.key };
          case "errored":
            if (2 === t.sourcesLoaded && !("results" in e))
              return { status: "error", key: t.key, message: t.message };
            return e;
          default:
            return e;
        }
      }
      ((n = p || (p = {})).Markdown = "markdown"),
        (n.Reference = "reference"),
        (n.Integration = "partner-integration"),
        (n.GithubDiscussion = "github-discussions");
      let ee = (e) => {
        let [t, r] = (0, m.useReducer)(Q, { status: "initial", key: 0 }),
          n = (0, m.useRef)(0),
          o = (0, m.useCallback)(
            async (t) => {
              n.current += 1;
              let o = n.current;
              r({ type: "newSearchDispatched", key: o });
              let i = 0;
              e.rpc("docs_search_fts", { query: t.trim() }).then((e) => {
                let { data: t, error: n } = e;
                if (((i += 1), n || !Array.isArray(t))) {
                  var s;
                  r({
                    type: "errored",
                    key: o,
                    sourcesLoaded: i,
                    message:
                      null !== (s = null == n ? void 0 : n.message) &&
                      void 0 !== s
                        ? s
                        : "",
                  });
                } else
                  r({
                    type: "resultsReturned",
                    key: o,
                    sourcesLoaded: i,
                    results: t,
                  });
              }),
                fetch(
                  ""
                    .concat("https://xguihxuzqibwxjnimxev.supabase.co")
                    .concat("/functions/v1/", "search-embeddings"),
                  { method: "POST", body: JSON.stringify({ query: t }) }
                )
                  .then((e) => e.json())
                  .then((e) => {
                    if (!Array.isArray(e))
                      throw Error("didn't get expected results array");
                    r({
                      type: "resultsReturned",
                      key: o,
                      sourcesLoaded: (i += 1),
                      results: e,
                    });
                  })
                  .catch((e) => {
                    var t;
                    r({
                      type: "errored",
                      key: o,
                      sourcesLoaded: (i += 1),
                      message:
                        null !== (t = e.message) && void 0 !== t ? t : "",
                    });
                  });
            },
            [e]
          ),
          i = (0, m.useMemo)(() => W()(o, 150), [o]);
        return {
          searchState: t,
          handleDocsSearch: o,
          handleDocsSearchDebounced: i,
          resetSearch: (0, m.useCallback)(() => {
            (n.current += 1), r({ type: "reset", key: n.current });
          }, []),
        };
      };
      r(18467),
        "undefined" != typeof document ? m.useLayoutEffect : m.useEffect;
      var et = r(88472);
      function er() {
        let e = (0, et.useRouter)(),
          t = null == e ? void 0 : e.query,
          r = { ...t };
        return (
          Object.keys(r).forEach((e) => {
            let t = e.includes("-")
              ? e
                  .split("-")
                  .map((e, t) =>
                    0 === t ? e : e.charAt(0).toUpperCase() + e.slice(1)
                  )
                  .join("")
              : e;
            t !== e && ((r[t] = r[e]), delete r[e]);
          }),
          (0, m.useMemo)(
            () =>
              Object.fromEntries(
                Object.entries(r).map((e) => {
                  let [t, r] = e;
                  return Array.isArray(r) ? [t, r[0]] : [t, r];
                })
              ),
            [t]
          )
        );
      }
      var en = r(18647);
      let eo = {
          "--brand-accent": "160deg 100% 50%",
          "--brand-default": "159.9deg 100% 38.6%",
          "--brand-600": "136deg 59.5% 70%",
          "--brand-500": "160.4deg 100% 19.2%",
          "--brand-400": "160.4deg 100% 9.6%",
          "--brand-300": "158.4deg 100% 4.9%",
          "--brand-200": "162deg 100% 2%",
          "--border-stronger": "200deg 16.1% 22%",
          "--border-strong": "200deg 16.5% 17.8%",
          "--border-alternative": "200deg 16.4% 13.1%",
          "--border-control": "200deg 10% 14%",
          "--border-overlay": "200deg 20% 9%",
          "--border-secondary": "200deg 21.6% 10%",
          "--border-muted": "200deg 14.9% 9.2%",
          "--border-default": "200deg 10% 11%",
          "--background-muted": "200deg 9.1% 10.8%",
          "--background-overlay-hover": "200deg 20% 11%",
          "--background-overlay-default": "200deg 14.3% 6.9%",
          "--background-surface-300": "200deg 20% 10%",
          "--background-surface-200": "200deg 20% 7%",
          "--background-surface-100": "200deg 20% 6%",
          "--background-control": "200deg 9% 11%",
          "--background-selection": "200deg 9.8% 10%",
          "--background-alternative": "200deg 20% 2.9%",
          "--background-default": "200deg 20% 4%",
          "--foreground-muted": "200deg 10% 35%",
          "--foreground-lighter": "200deg 8% 55%",
          "--foreground-light": "200deg 5% 69%",
          "--foreground-default": "200deg 0% 93%",
        },
        ei = () => {
          if (G) return null;
          let e = window.location.hash,
            t = localStorage.getItem("theme-sandbox"),
            n = e.includes("#theme-sandbox") || null !== t,
            [o, i] = (0, m.useState)(t ? JSON.parse(t) : eo),
            s = document.querySelector(":root"),
            a = (e, t) => {
              l(), i((r) => ({ ...r, [e]: t }));
            },
            l = () => {
              Object.entries(o).map((e) => {
                let [t, r] = e;
                return s.style.setProperty(t, r);
              }),
                localStorage.setItem("theme-sandbox", JSON.stringify(o));
            },
            u = async () => {
              if (!n) return;
              let e = new (await r.e(3860).then(r.bind(r, 43860))).GUI();
              (e.width = 500),
                Object.entries(eo).map((t) => {
                  var r;
                  let [n, i] = t;
                  if (!o[n]) return localStorage.removeItem("theme-sandbox");
                  let s = n.split("-")[2];
                  return (
                    null !== (r = e.__folders[s]) && void 0 !== r
                      ? r
                      : e.addFolder(s)
                  )
                    .add(o, n)
                    .name(n)
                    .onChange((e) => {
                      a(n, e);
                    });
                });
              var t = {
                "Apply Theme": function () {
                  l();
                },
                "Exit Sandbox": function () {
                  e.destroy();
                },
                "Reset localStorage": function () {
                  localStorage.removeItem("theme-sandbox"), i(eo);
                },
              };
              e.add(t, "Apply Theme"),
                e.add(t, "Reset localStorage"),
                e.add(t, "Exit Sandbox"),
                e.load;
            };
          return (
            (0, m.useEffect)(() => {
              u();
            }, []),
            { themeConfig: o, handleSetThemeConfig: a, isSandbox: n }
          );
        };
      r(29802);
      var es = r(22965);
      function ea(e) {
        let { children: t, ...r } = e;
        return (0, g.jsx)(es.f, {
          themes: ["dark", "light"],
          defaultTheme: "dark",
          ...r,
          children: t,
        });
      }
      let el = function (e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { optionHeaders: n, ...o } = r;
        return fetch(e, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...n,
          },
          credentials: "include",
          referrerPolicy: "no-referrer-when-downgrade",
          body: JSON.stringify(t),
          ...o,
        }).catch((e) => {
          console.error("Error at fetchWrapper - post:", e);
        });
      };
      function eu(e, t, r) {
        let {
          page_url: n,
          search: o,
          language: i,
          viewport_height: s,
          viewport_width: a,
        } = r;
        return el(
          "".concat(e, "/telemetry/page"),
          {
            page_url: n,
            page_title: document.title,
            pathname: t,
            ph: {
              referrer: document.referrer,
              user_agent: navigator.userAgent,
              search: o,
              language: i,
              viewport_height: s,
              viewport_width: a,
            },
          },
          { headers: { Version: "2" } }
        );
      }
      function ec(e) {
        return el("".concat(e, "/telemetry/reset"), {});
      }
    },
    72079: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return s;
        },
        K: function () {
          return a;
        },
      });
      var n = r(88472),
        o = r(82876),
        i = r(2784);
      let s = (0, i.createContext)(void 0);
      function a() {
        let { onPendingEnd: e } = (function () {
            let e = (0, i.useContext)(s);
            if (!e)
              throw Error(
                "useCrossCompatRouterContext must be used within a CrossCompatRouterContext.Provider"
              );
            return e;
          })(),
          t = (0, n.useRouter)(),
          r = (0, o.useRouter)(),
          a = !!t,
          [l, u] = (0, i.useTransition)(),
          c = (function (e) {
            let { onlyTo: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (0, i.useRef)(e),
              n = !0;
            return (
              r.current === e && (n = !1),
              t && e !== t && (n = !1),
              (r.current = e),
              n
            );
          })(l, { onlyTo: !1 });
        return (
          !a && c && e.forEach((e) => e()),
          (0, i.useMemo)(
            () => ({
              push: (e) => {
                a
                  ? t.push(e)
                  : u(() => {
                      r.push(e);
                    });
              },
            }),
            [a, t, r]
          )
        );
      }
    },
    73839: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cc: function () {
          return a;
        },
        FP: function () {
          return d;
        },
        FX: function () {
          return l;
        },
        Gk: function () {
          return h;
        },
        J9: function () {
          return f;
        },
        Qd: function () {
          return c;
        },
        az: function () {
          return u;
        },
        jK: function () {
          return s;
        },
      });
      var n = r(2784),
        o = r(20650),
        i = r(77013);
      let s = () => {
          let { viewState: e } = (0, i.D)(),
            { initiated: t } = (0, o.R)(e);
          return t;
        },
        a = () => {
          let { viewState: e } = (0, i.D)(),
            { open: t } = (0, o.R)(e);
          return t;
        },
        l = () => {
          let { viewState: e } = (0, i.D)(),
            { setOpen: t } = (0, o.R)(e);
          return t;
        },
        u = () => {
          let { viewState: e } = (0, i.D)(),
            { toggleOpen: t } = (0, o.R)(e);
          return t;
        },
        c = () => {
          let { viewState: e } = (0, i.D)(),
            { size: t } = (0, o.R)(e);
          return t;
        },
        d = (e) => {
          let { viewState: t } = (0, i.D)(),
            { setSize: r, size: s } = (0, o.R)(t),
            a = (0, n.useRef)(s);
          (0, n.useLayoutEffect)(() => (r(e), () => r(a.current)), [r]);
        },
        h = () => {
          let { viewState: e } = (0, i.D)(),
            { setTouchHandlers: t } = (0, o.R)(e);
          return t;
        },
        f = () => {
          let { viewState: e } = (0, i.D)(),
            { touchHandlers: t } = (0, o.R)(e);
          return t;
        };
    },
    77013: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return o;
        },
        D: function () {
          return i;
        },
      });
      var n = r(2784);
      let o = (0, n.createContext)(void 0),
        i = () => {
          let e = (0, n.useContext)(o);
          if (!e)
            throw Error(
              "`useCommandContext` must be used within a `CommandProvider`"
            );
          return e;
        };
    },
    39756: function (e, t, r) {
      "use strict";
      r.d(t, {
        GV: function () {
          return o;
        },
        fU: function () {
          return l;
        },
        jE: function () {
          return s;
        },
        sG: function () {
          return a;
        },
      });
      var n,
        o,
        i = r(41757);
      ((n = o || (o = {}))[(n.Commands = 0)] = "Commands"),
        (n[(n.Component = 1)] = "Component");
      let s = (e) => 0 === e.type,
        a = (e) => 1 === e.type,
        l = () => {
          let e = (0, i.sj)({
            commandPages: {},
            pageStack: [],
            registerNewPage: (t, r) => (
              (e.commandPages[t] = r),
              () => {
                (e.pageStack = e.pageStack.filter((e) => e !== t)),
                  delete e.commandPages[t];
              }
            ),
            appendPageStack: (t) =>
              t in e.commandPages &&
              e.pageStack.at(-1) !== t &&
              e.pageStack.push(t),
            popPageStack: () => e.pageStack.pop(),
          });
          return e;
        };
    },
    88906: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cg: function () {
          return p;
        },
        Sn: function () {
          return g;
        },
      });
      var n = r(52322),
        o = r(30175),
        i = r(34291),
        s = r.n(i),
        a = r(39097),
        l = r.n(a),
        u = r(2784),
        c = r(6333),
        d = r(29982),
        h = r(44382);
      let f = (e) => {
          let { onAccept: t = s(), onOptOut: r = s() } = e,
            i = (0, o.Gc)(639);
          return (0, n.jsxs)("div", {
            className: "py-1 flex flex-col gap-y-3 w-full",
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsxs)("p", {
                  className: "text-sm text-foreground",
                  children: [
                    "We use first-party cookies to improve our services.",
                    (0, n.jsx)(l(), {
                      className: "inline sm:hidden underline text-light",
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://supabase.com/privacy",
                      children: "Learn more",
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  (0, n.jsx)(d.z, {
                    type: "default",
                    onClick: t,
                    size: i ? "small" : "tiny",
                    block: i,
                    children: "Accept",
                  }),
                  (0, n.jsx)(d.z, {
                    type: i ? "outline" : "text",
                    onClick: r,
                    size: i ? "small" : "tiny",
                    block: i,
                    children: "Opt out",
                  }),
                  (0, n.jsx)(d.z, {
                    asChild: !0,
                    type: "text",
                    className:
                      "hidden sm:block text-light hover:text-foreground",
                    children: (0, n.jsx)(l(), {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://supabase.com/privacy",
                      children: "Learn more",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        p = () => {
          var e;
          let { TELEMETRY_CONSENT: t } = o.LOCAL_STORAGE_KEYS,
            r = (0, u.useRef)(),
            i = (0, o.Mk)(),
            s = o.jU
              ? null === (e = localStorage) || void 0 === e
                ? void 0
                : e.getItem(t)
              : null,
            [a, l] = (0, u.useState)(s),
            d = (e) => {
              o.jU &&
                (l(e),
                localStorage.setItem(t, e),
                r.current && c.Am.dismiss(r.current),
                "true" === e &&
                  (0, o.ig)(
                    "https://api.supabase.io/platform",
                    location.pathname,
                    i
                  ));
            },
            p = (0, u.useCallback)(() => {
              o.jU &&
                null === a &&
                (r.current = (0, c.Am)(
                  (0, n.jsx)(f, {
                    onAccept: () => d("true"),
                    onOptOut: () => d("false"),
                  }),
                  {
                    id: "consent-toast",
                    position: "bottom-right",
                    duration: 1 / 0,
                    closeButton: !1,
                    dismissible: !1,
                    className: (0, h.cn)(
                      "!w-screen !fixed !border-t !h-auto !left-0 !bottom-0 !top-auto !right-0 !rounded-none !max-w-none !bg-overlay !text",
                      "sm:!w-full sm:!max-w-[356px] sm:!left-auto sm:!right-8 sm:!bottom-8 sm:!rounded-lg sm:border"
                    ),
                  }
                ));
            }, []);
          return (
            (0, u.useEffect)(() => {
              if (o.jU)
                return (
                  window.addEventListener("storage", () => {
                    var e;
                    (null === (e = localStorage) || void 0 === e
                      ? void 0
                      : e.getItem(t)) && c.Am.dismiss(r.current);
                  }),
                  window.removeEventListener("storage", () => null)
                );
            }, []),
            (0, u.useEffect)(() => {
              setTimeout(() => {
                null === a && p();
              }, 300);
            }, [a]),
            {
              consentValue: a,
              setConsentValue: l,
              hasAcceptedConsent: "true" === a,
              triggerConsentToast: p,
            }
          );
        },
        g = (e) => {
          var t;
          let r = (0, o.Mk)(),
            n = o.jU
              ? null === (t = localStorage) || void 0 === t
                ? void 0
                : t.getItem(e)
              : null,
            [i, s] = (0, u.useState)(n);
          return {
            consentValue: i,
            setConsentValue: s,
            hasAccepted: "true" === i,
            handleConsent: (t) => {
              o.jU &&
                (s(t),
                localStorage.setItem(e, t),
                window.dispatchEvent(new Event("storage")),
                "true" === t &&
                  (0, o.ig)(
                    "https://api.supabase.io/platform",
                    location.pathname,
                    r
                  ));
            },
          };
        };
    },
    29982: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return c;
        },
        z: function () {
          return f;
        },
      });
      var n = r(52322),
        o = r(4522),
        i = r(51795),
        s = r(2005),
        a = r(2784),
        l = r(27510),
        u = r(44382);
      let c = (0, i.j)(
          "relative \n  flex items-center justify-center\n  cursor-pointer \n  inline-flex \n  items-center \n  space-x-2 \n  text-center \n  font-regular \n  ease-out \n  duration-200 \n  rounded-md\n  outline-none \n  transition-all \n  outline-0 \n  focus-visible:outline-4 \n  focus-visible:outline-offset-1\n  border\n  ",
          {
            variants: {
              type: {
                primary:
                  "\n          bg-brand-400 dark:bg-brand-500 \n          hover:bg-brand/80 dark:hover:bg-brand/50\n          text-foreground\n          border-brand-500/75 dark:border-brand/30\n          hover:border-brand-600 dark:hover:border-brand\n          focus-visible:outline-brand-600\n          data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80\n          data-[state=open]:outline-brand-600\n          ",
                default:
                  "\n          text-foreground\n          bg-alternative dark:bg-muted  hover:bg-selection\n          border-strong hover:border-stronger\n          focus-visible:outline-brand-600\n          data-[state=open]:bg-selection\n          data-[state=open]:outline-brand-600\n          data-[state=open]:border-button-hover\n          ",
                secondary:
                  "\n          bg-foreground\n          text-background hover:text-border-stronger\n          focus-visible:text-border-control\n          border-foreground-light hover:border-foreground-lighter\n          focus-visible:outline-border-strong\n          data-[state=open]:border-foreground-lighter\n          data-[state=open]:outline-border-strong\n        ",
                alternative:
                  "\n          text-foreground\n          bg-brand-400 hover:bg-brand-500\n          border-brand-500\n          focus-visible:border-brand-500\n          focus-visible:outline-brand-600\n          data-[state=open]:bg-brand-500\n          data-[state=open]:border-brand-500\n          data-[state=open]:outline-brand-600\n        ",
                outline:
                  "\n          text-foreground\n          bg-transparent\n          border-strong hover:border-foreground-muted\n          focus-visible:outline-border-strong\n          data-[state=open]:border-stronger\n          data-[state=open]:outline-border-strong\n        ",
                dashed:
                  "\n          text-foreground\n          border\n          border-dashed\n          border-strong hover:border-stronger\n          bg-transparent\n          focus-visible:outline-border-strong\n          data-[state=open]:border-stronger\n          data-[state=open]:outline-border-strong\n        ",
                link: "\n          text-brand-600\n          border\n          border-transparent\n          hover:bg-brand-400\n          border-opacity-0\n          bg-opacity-0\n          shadow-none\n          focus-visible:outline-border-strong\n          data-[state=open]:bg-brand-400\n          data-[state=open]:outline-border-strong\n        ",
                text: "\n          text-foreground\n          hover:bg-surface-300\n          shadow-none\n          focus-visible:outline-border-strong\n          data-[state=open]:bg-surface-300\n          data-[state=open]:outline-border-strong\n          border-transparent\n        ",
                danger:
                  "\n          text-foreground\n          bg-destructive-300 dark:bg-destructive-400 hover:bg-destructive-400 dark:hover:bg-destructive/50\n          border-destructive-500 hover:border-destructive\n          hover:text-hi-contrast\n          focus-visible:outline-amber-700\n          data-[state=open]:border-destructive\n          data-[state=open]:bg-destructive-400 dark:data-[state=open]:bg-destructive-/50\n          data-[state=open]:outline-destructive\n        ",
                warning:
                  "\n          text-foreground\n          bg-warning-300 dark:bg-warning-400 hover:bg-warning-400 dark:hover:bg-warning/50\n          border-warning-500 hover:border-warning\n          hover:text-hi-contrast\n          focus-visible:outline-amber-700\n          data-[state=open]:border-warning\n          data-[state=open]:bg-warning-400 dark:data-[state=open]:bg-warning-/50\n          data-[state=open]:outline-warning\n        ",
              },
              block: { true: "w-full flex items-center justify-center" },
              size: { ...l.Ld },
              overlay: {
                base: "absolute inset-0 bg-background opacity-50",
                container: "fixed inset-0 transition-opacity",
              },
              disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
              },
              rounded: { true: "rounded-full" },
              defaultVariants: { size: { SIZE_VARIANTS_DEFAULT: l.Rc } },
            },
          }
        ),
        d = (0, i.j)("", {
          variants: {
            size: {
              tiny: "[&_svg]:h-[14px] [&_svg]:w-[14px]",
              small: "[&_svg]:h-[18px] [&_svg]:w-[18px]",
              medium: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
              large: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
              xlarge: "[&_svg]:h-[24px] [&_svg]:w-[24px]",
              xxlarge: "[&_svg]:h-[30px] [&_svg]:w-[30px]",
              xxxlarge: "[&_svg]:h-[42px] [&_svg]:w-[42px]",
            },
            type: {
              primary: "text-brand-600",
              default: "text-foreground-lighter",
              secondary: "text-border-muted",
              alternative: "text-foreground-lighter",
              outline: "text-foreground-lighter",
              dashed: "text-foreground-lighter",
              link: "text-brand-600",
              text: "text-foreground-lighter",
              danger: "text-destructive-600",
              warning: "text-warning-600",
            },
          },
        }),
        h = (0, i.j)("", {
          variants: {
            type: {
              primary: "text-brand-600",
              default: "text-foreground-lighter",
              secondary: "text-border-muted",
              alternative: "text-foreground-lighter",
              outline: "text-foreground-lighter",
              dashed: "text-foreground-lighter",
              link: "text-brand-600",
              text: "text-foreground-muted",
              danger: "text-destructive-600",
              warning: "text-warning-600",
            },
            loading: { default: "", true: "animate-spin" },
          },
        }),
        f = (0, a.forwardRef)((e, t) => {
          let {
              asChild: r = !1,
              size: i = "tiny",
              type: l = "primary",
              children: f,
              loading: p,
              block: g,
              icon: m,
              iconRight: v,
              iconLeft: b,
              htmlType: y = "button",
              rounded: w,
              ..._
            } = e,
            x = r ? o.g7 : "button",
            { className: k } = _,
            j = p || m,
            S = null != m ? m : b,
            E = !0 === p || _.disabled;
          return (0, n.jsx)(x, {
            ref: t,
            "data-size": i,
            type: y,
            ..._,
            disabled: E,
            className: (0, u.cn)(
              c({ type: l, size: i, disabled: E, block: g, rounded: w }),
              k
            ),
            children: r
              ? (0, a.isValidElement)(f)
                ? (0, a.cloneElement)(
                    f,
                    void 0,
                    j &&
                      (p
                        ? (0, n.jsx)("div", {
                            className: (0, u.cn)(d({ size: i, type: l })),
                            children: (0, n.jsx)(s.Z, {
                              className: (0, u.cn)(h({ loading: p, type: l })),
                            }),
                          })
                        : S
                        ? (0, n.jsx)("div", {
                            className: (0, u.cn)(d({ size: i, type: l })),
                            children: S,
                          })
                        : null),
                    f.props.children &&
                      (0, n.jsx)("span", {
                        className: "truncate",
                        children: f.props.children,
                      }),
                    v &&
                      !p &&
                      (0, n.jsx)("div", {
                        className: (0, u.cn)(d({ size: i, type: l })),
                        children: v,
                      })
                  )
                : null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    j &&
                      (p
                        ? (0, n.jsx)("div", {
                            className: (0, u.cn)(d({ size: i, type: l })),
                            children: (0, n.jsx)(s.Z, {
                              className: (0, u.cn)(h({ loading: p, type: l })),
                            }),
                          })
                        : S
                        ? (0, n.jsx)("div", {
                            className: (0, u.cn)(d({ size: i, type: l })),
                            children: S,
                          })
                        : null),
                    " ",
                    f &&
                      (0, n.jsx)("span", {
                        className: "truncate",
                        children: f,
                      }),
                    " ",
                    v &&
                      !p &&
                      (0, n.jsx)("div", {
                        className: (0, u.cn)(d({ size: i, type: l })),
                        children: v,
                      }),
                  ],
                }),
          });
        });
      f.displayName = "Button";
    },
    35710: function (e, t, r) {
      "use strict";
      r.d(t, {
        Jj: function () {
          return s;
        },
      });
      var n = r(52322),
        o = r(2784),
        i = r(44382);
      let s = (0, o.forwardRef)((e, t) => {
          let r,
            { variant: o = "default", ...i } = e;
          return (r = "warning" === o ? u : "destructive" === o ? l : a)
            ? (0, n.jsx)(r, { ref: t, ...i })
            : null;
        }),
        a = (e) => {
          let { hideBackground: t = !1, ...r } = e;
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            ...r,
            className: (0, i.cn)(
              t
                ? "w-3 h-3 text-foreground-lighter"
                : "w-4 h-4 p-0.5 bg-foreground-lighter text-background-surface-200 rounded",
              r.className
            ),
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
              clipRule: "evenodd",
            }),
          });
        },
        l = (e) => {
          let { hideBackground: t = !1, ...r } = e;
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            ...r,
            className: (0, i.cn)(
              t
                ? "w-3 h-3 text-destructive-600"
                : "w-4 h-4 p-0.5 bg-destructive-600 text-destructive-200 rounded",
              r.className
            ),
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
            }),
          });
        },
        u = (e) => {
          let { hideBackground: t = !1, ...r } = e;
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            ...r,
            className: (0, i.cn)(
              t
                ? "w-3 h-3 text-warning-600"
                : "w-4 h-4 p-0.5 bg-warning-600 text-warning-200 rounded",
              r.className
            ),
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
            }),
          });
        };
    },
    49934: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return n;
        },
      });
      let n = [
        { name: "System", value: "system" },
        { name: "Dark", value: "dark" },
        { name: "Classic dark", value: "classic-dark" },
        { name: "Light", value: "light" },
      ];
    },
    27510: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ld: function () {
          return p;
        },
        Rc: function () {
          return g;
        },
        aA: function () {
          return n;
        },
      });
      let n = "**** **** **** ****",
        o = "text-xs",
        i = "text-sm leading-4",
        s = "text-sm",
        a = "text-base",
        l = "text-base",
        u = "px-2.5 py-1",
        c = "px-3 py-2",
        d = "px-4 py-2",
        h = "px-4 py-2",
        f = "px-6 py-3",
        p = {
          tiny: "".concat(o, " ").concat(u, " ").concat("h-[26px]"),
          small: "".concat(i, " ").concat(c, " ").concat("h-[34px]"),
          medium: "".concat(s, " ").concat(d, " ").concat("h-[38px]"),
          large: "".concat(a, " ").concat(h, " ").concat("h-[42px]"),
          xlarge: "".concat(l, " ").concat(f, " ").concat("h-[50px]"),
        };
      "".concat(o, " ").concat(u, " ").concat("h-[24px]"),
        "".concat(i, " ").concat(c, " ").concat("h-[28px]"),
        "".concat(s, " ").concat(d, " ").concat("h-[32px]"),
        "".concat(a, " ").concat(h, " ").concat("h-[36px]"),
        "".concat(l, " ").concat(f, " ").concat("h-[44px]");
      let g = "small";
    },
    44382: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return L;
        },
      });
      var n = r(6277),
        o = /^\[(.+)\]$/;
      function i(e, t) {
        var r = e;
        return (
          t.split("-").forEach(function (e) {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      var s = /\s+/;
      function a() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              if ("string" == typeof t) return t;
              for (var r, n = "", o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function l(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        h = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function g(e) {
        return _(e) || d.has(e) || c.test(e) || m(e);
      }
      function m(e) {
        return O(e, "length", P);
      }
      function v(e) {
        return O(e, "size", C);
      }
      function b(e) {
        return O(e, "position", C);
      }
      function y(e) {
        return O(e, "url", A);
      }
      function w(e) {
        return O(e, "number", _);
      }
      function _(e) {
        return !Number.isNaN(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && _(e.slice(0, -1));
      }
      function k(e) {
        return R(e) || O(e, "number", R);
      }
      function j(e) {
        return u.test(e);
      }
      function S() {
        return !0;
      }
      function E(e) {
        return h.test(e);
      }
      function T(e) {
        return O(e, "", I);
      }
      function O(e, t, r) {
        var n = u.exec(e);
        return !!n && (n[1] ? n[1] === t : r(n[2]));
      }
      function P(e) {
        return f.test(e);
      }
      function C() {
        return !1;
      }
      function A(e) {
        return e.startsWith("url(");
      }
      function R(e) {
        return Number.isInteger(Number(e));
      }
      function I(e) {
        return p.test(e);
      }
      var $ = (function () {
        for (var e, t, r, n = arguments.length, l = Array(n), u = 0; u < n; u++)
          l[u] = arguments[u];
        var c = function (n) {
          var s = l[0];
          return (
            (t = (e = (function (e) {
              var t, r, n, s, a, l, u, c, d, h, f;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    r = new Map(),
                    n = new Map();
                  function o(o, i) {
                    r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                  }
                  return {
                    get: function (e) {
                      var t = r.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = n.get(e))
                        ? (o(e, t), t)
                        : void 0;
                    },
                    set: function (e, t) {
                      r.has(e) ? r.set(e, t) : o(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((r = 1 === (t = e.separator || ":").length),
                  (n = t[0]),
                  (s = t.length),
                  function (e) {
                    for (
                      var o, i = [], a = 0, l = 0, u = 0;
                      u < e.length;
                      u++
                    ) {
                      var c = e[u];
                      if (0 === a) {
                        if (c === n && (r || e.slice(u, u + s) === t)) {
                          i.push(e.slice(l, u)), (l = u + s);
                          continue;
                        }
                        if ("/" === c) {
                          o = u;
                          continue;
                        }
                      }
                      "[" === c ? a++ : "]" === c && a--;
                    }
                    var d = 0 === i.length ? e : e.substring(l),
                      h = d.startsWith("!"),
                      f = h ? d.substring(1) : d;
                    return {
                      modifiers: i,
                      hasImportantModifier: h,
                      baseClassName: f,
                      maybePostfixModifierPosition: o && o > l ? o - l : void 0,
                    };
                  }),
                ...((c = e.theme),
                (d = e.prefix),
                (h = { nextPart: new Map(), validators: [] }),
                ((f = Object.entries(e.classGroups)),
                d
                  ? f.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? d + e
                            : "object" == typeof e
                            ? Object.fromEntries(
                                Object.entries(e).map(function (e) {
                                  return [d + e[0], e[1]];
                                })
                              )
                            : e;
                        }),
                      ];
                    })
                  : f).forEach(function (e) {
                  var t = e[0];
                  (function e(t, r, n, o) {
                    t.forEach(function (t) {
                      if ("string" == typeof t) {
                        ("" === t ? r : i(r, t)).classGroupId = n;
                        return;
                      }
                      if ("function" == typeof t) {
                        if (t.isThemeGetter) {
                          e(t(o), r, n, o);
                          return;
                        }
                        r.validators.push({ validator: t, classGroupId: n });
                        return;
                      }
                      Object.entries(t).forEach(function (t) {
                        var s = t[0];
                        e(t[1], i(r, s), n, o);
                      });
                    });
                  })(e[1], h, t, c);
                }),
                (a = e.conflictingClassGroups),
                (u =
                  void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l),
                {
                  getClassGroupId: function (e) {
                    var t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        var n = t[0],
                          o = r.nextPart.get(n),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 !== r.validators.length) {
                          var s = t.join("-");
                          return r.validators.find(function (e) {
                            return (0, e.validator)(s);
                          })?.classGroupId;
                        }
                      })(t, h) ||
                        (function (e) {
                          if (o.test(e)) {
                            var t = o.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var r = a[e] || [];
                    return t && u[e] ? [].concat(r, u[e]) : r;
                  },
                }),
              };
            })(
              l.slice(1).reduce(function (e, t) {
                return t(e);
              }, s())
            )).cache.get),
            (r = e.cache.set),
            (c = d),
            d(n)
          );
        };
        function d(n) {
          var o,
            i,
            a,
            l,
            u,
            c = t(n);
          if (c) return c;
          var d =
            ((i = (o = e).splitModifiers),
            (a = o.getClassGroupId),
            (l = o.getConflictingClassGroupIds),
            (u = new Set()),
            n
              .trim()
              .split(s)
              .map(function (e) {
                var t = i(e),
                  r = t.modifiers,
                  n = t.hasImportantModifier,
                  o = t.baseClassName,
                  s = t.maybePostfixModifierPosition,
                  l = a(s ? o.substring(0, s) : o),
                  u = !!s;
                if (!l) {
                  if (!s || !(l = a(o)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                var c = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                        : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  n = e.hasPostfixModifier,
                  o = t + r;
                return (
                  !u.has(o) &&
                  (u.add(o),
                  l(r, n).forEach(function (e) {
                    return u.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return r(n, d), d;
        }
        return function () {
          return c(a.apply(null, arguments));
        };
      })(function () {
        var e = l("colors"),
          t = l("spacing"),
          r = l("blur"),
          n = l("brightness"),
          o = l("borderColor"),
          i = l("borderRadius"),
          s = l("borderSpacing"),
          a = l("borderWidth"),
          u = l("contrast"),
          c = l("grayscale"),
          d = l("hueRotate"),
          h = l("invert"),
          f = l("gap"),
          p = l("gradientColorStops"),
          O = l("gradientColorStopPositions"),
          P = l("inset"),
          C = l("margin"),
          A = l("opacity"),
          R = l("padding"),
          I = l("saturate"),
          $ = l("scale"),
          L = l("sepia"),
          N = l("skew"),
          M = l("space"),
          U = l("translate"),
          D = function () {
            return ["auto", "contain", "none"];
          },
          G = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"];
          },
          z = function () {
            return ["auto", j, t];
          },
          B = function () {
            return [j, t];
          },
          F = function () {
            return ["", g];
          },
          H = function () {
            return ["auto", _, j];
          },
          q = function () {
            return [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ];
          },
          W = function () {
            return ["solid", "dashed", "dotted", "double", "none"];
          },
          K = function () {
            return [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ];
          },
          V = function () {
            return [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ];
          },
          J = function () {
            return ["", "0", j];
          },
          Y = function () {
            return [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ];
          },
          Z = function () {
            return [_, w];
          },
          X = function () {
            return [_, j];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [S],
            spacing: [g],
            blur: ["none", "", E, j],
            brightness: Z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", E, j],
            borderSpacing: B(),
            borderWidth: F(),
            contrast: Z(),
            grayscale: J(),
            hueRotate: X(),
            invert: J(),
            gap: B(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, m],
            inset: z(),
            margin: z(),
            opacity: Z(),
            padding: B(),
            saturate: Z(),
            scale: Z(),
            sepia: J(),
            skew: X(),
            space: B(),
            translate: B(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", j] }],
            container: ["container"],
            columns: [{ columns: [E] }],
            "break-after": [{ "break-after": Y() }],
            "break-before": [{ "break-before": Y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [].concat(q(), [j]) }],
            overflow: [{ overflow: G() }],
            "overflow-x": [{ "overflow-x": G() }],
            "overflow-y": [{ "overflow-y": G() }],
            overscroll: [{ overscroll: D() }],
            "overscroll-x": [{ "overscroll-x": D() }],
            "overscroll-y": [{ "overscroll-y": D() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [P] }],
            "inset-x": [{ "inset-x": [P] }],
            "inset-y": [{ "inset-y": [P] }],
            start: [{ start: [P] }],
            end: [{ end: [P] }],
            top: [{ top: [P] }],
            right: [{ right: [P] }],
            bottom: [{ bottom: [P] }],
            left: [{ left: [P] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", k] }],
            basis: [{ basis: z() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", j] }],
            grow: [{ grow: J() }],
            shrink: [{ shrink: J() }],
            order: [{ order: ["first", "last", "none", k] }],
            "grid-cols": [{ "grid-cols": [S] }],
            "col-start-end": [{ col: ["auto", { span: ["full", k] }, j] }],
            "col-start": [{ "col-start": H() }],
            "col-end": [{ "col-end": H() }],
            "grid-rows": [{ "grid-rows": [S] }],
            "row-start-end": [{ row: ["auto", { span: [k] }, j] }],
            "row-start": [{ "row-start": H() }],
            "row-end": [{ "row-end": H() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal"].concat(V()) }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              { content: ["normal"].concat(V(), ["baseline"]) },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              { "place-content": [].concat(V(), ["baseline"]) },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [R] }],
            px: [{ px: [R] }],
            py: [{ py: [R] }],
            ps: [{ ps: [R] }],
            pe: [{ pe: [R] }],
            pt: [{ pt: [R] }],
            pr: [{ pr: [R] }],
            pb: [{ pb: [R] }],
            pl: [{ pl: [R] }],
            m: [{ m: [C] }],
            mx: [{ mx: [C] }],
            my: [{ my: [C] }],
            ms: [{ ms: [C] }],
            me: [{ me: [C] }],
            mt: [{ mt: [C] }],
            mr: [{ mr: [C] }],
            mb: [{ mb: [C] }],
            ml: [{ ml: [C] }],
            "space-x": [{ "space-x": [M] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [M] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", j, t] }],
            "min-w": [{ "min-w": ["min", "max", "fit", j, g] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [E] },
                  E,
                  j,
                ],
              },
            ],
            h: [{ h: [j, t, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", j, g] }],
            "max-h": [{ "max-h": [j, t, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", E, m] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  w,
                ],
              },
            ],
            "font-family": [{ font: [S] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  j,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", _, w] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  j,
                  g,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", j] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [A] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [A] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [].concat(W(), ["wavy"]) }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", j, g] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: B() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  j,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [A] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [].concat(q(), [b]) }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", v] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  y,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [O] }],
            "gradient-via-pos": [{ via: [O] }],
            "gradient-to-pos": [{ to: [O] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [A] }],
            "border-style": [{ border: [].concat(W(), ["hidden"]) }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [A] }],
            "divide-style": [{ divide: W() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: [""].concat(W()) }],
            "outline-offset": [{ "outline-offset": [j, g] }],
            "outline-w": [{ outline: [g] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [A] }],
            "ring-offset-w": [{ "ring-offset": [g] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", E, T] }],
            "shadow-color": [{ shadow: [S] }],
            opacity: [{ opacity: [A] }],
            "mix-blend": [{ "mix-blend": K() }],
            "bg-blend": [{ "bg-blend": K() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", E, j] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [h] }],
            saturate: [{ saturate: [I] }],
            sepia: [{ sepia: [L] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [h] }],
            "backdrop-opacity": [{ "backdrop-opacity": [A] }],
            "backdrop-saturate": [{ "backdrop-saturate": [I] }],
            "backdrop-sepia": [{ "backdrop-sepia": [L] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  j,
                ],
              },
            ],
            duration: [{ duration: X() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
            delay: [{ delay: X() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", j] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [$] }],
            "scale-x": [{ "scale-x": [$] }],
            "scale-y": [{ "scale-y": [$] }],
            rotate: [{ rotate: [k, j] }],
            "translate-x": [{ "translate-x": [U] }],
            "translate-y": [{ "translate-y": [U] }],
            "skew-x": [{ "skew-x": [N] }],
            "skew-y": [{ "skew-y": [N] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  j,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  j,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": B() }],
            "scroll-mx": [{ "scroll-mx": B() }],
            "scroll-my": [{ "scroll-my": B() }],
            "scroll-ms": [{ "scroll-ms": B() }],
            "scroll-me": [{ "scroll-me": B() }],
            "scroll-mt": [{ "scroll-mt": B() }],
            "scroll-mr": [{ "scroll-mr": B() }],
            "scroll-mb": [{ "scroll-mb": B() }],
            "scroll-ml": [{ "scroll-ml": B() }],
            "scroll-p": [{ "scroll-p": B() }],
            "scroll-px": [{ "scroll-px": B() }],
            "scroll-py": [{ "scroll-py": B() }],
            "scroll-ps": [{ "scroll-ps": B() }],
            "scroll-pe": [{ "scroll-pe": B() }],
            "scroll-pt": [{ "scroll-pt": B() }],
            "scroll-pr": [{ "scroll-pr": B() }],
            "scroll-pb": [{ "scroll-pb": B() }],
            "scroll-pl": [{ "scroll-pl": B() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", j] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, w] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
      function L() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return $((0, n.W)(t));
      }
    },
    75182: function () {},
    13486: function () {},
    71921: function () {},
    42351: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                  r = s;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function d() {
                u &&
                  n &&
                  ((u = !1),
                  n.length ? (l = n.concat(l)) : (c = -1),
                  l.length && h());
              }
              function h() {
                if (!u) {
                  var e = a(d);
                  u = !0;
                  for (var t = l.length; t; ) {
                    for (n = l, l = []; ++c < t; ) n && n[c].run();
                    (c = -1), (t = l.length);
                  }
                  (n = null),
                    (u = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === s || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                l.push(new f(e, t)), 1 !== l.length || u || a(h);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = p),
                (o.addListener = p),
                (o.once = p),
                (o.off = p),
                (o.removeListener = p),
                (o.removeAllListeners = p),
                (o.emit = p),
                (o.prependListener = p),
                (o.prependOnceListener = p),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](i, i.exports, n), (s = !1);
          } finally {
            s && delete r[e];
          }
          return i.exports;
        }
        n.ab = "//";
        var o = n(229);
        e.exports = o;
      })();
    },
    25237: function (e, t, r) {
      e.exports = r(59246);
    },
    97729: function (e, t, r) {
      e.exports = r(3613);
    },
    39097: function (e, t, r) {
      e.exports = r(91425);
    },
    82876: function (e, t, r) {
      e.exports = r(80122);
    },
    5632: function (e, t, r) {
      e.exports = r(9351);
    },
    81411: function (e, t, r) {
      "use strict";
      r.d(t, {
        DM: function () {
          return h;
        },
        h8: function () {
          return m;
        },
        jc: function () {
          return g;
        },
        ln: function () {
          return f;
        },
        o5: function () {
          return p;
        },
      });
      let n = Symbol(),
        o = Symbol(),
        i = (e, t) => new Proxy(e, t),
        s = Object.getPrototypeOf,
        a = new WeakMap(),
        l = (e) =>
          e &&
          (a.has(e)
            ? a.get(e)
            : s(e) === Object.prototype || s(e) === Array.prototype),
        u = (e) => "object" == typeof e && null !== e,
        c = (e) => {
          if (Array.isArray(e)) return Array.from(e);
          let t = Object.getOwnPropertyDescriptors(e);
          return (
            Object.values(t).forEach((e) => {
              e.configurable = !0;
            }),
            Object.create(s(e), t)
          );
        },
        d = (e) => e[o] || e,
        h = (e, t, r, s) => {
          if (!l(e)) return e;
          let a = s && s.get(e);
          if (!a) {
            let t = d(e);
            (a = Object.values(Object.getOwnPropertyDescriptors(t)).some(
              (e) => !e.configurable && !e.writable
            )
              ? [t, c(t)]
              : [t]),
              null == s || s.set(e, a);
          }
          let [u, f] = a,
            p = r && r.get(u);
          return (
            (p && !!f === p[1].f) ||
              (((p = ((e, t) => {
                let r = { f: t },
                  i = !1,
                  s = (t, n) => {
                    if (!i) {
                      let o = r.a.get(e);
                      if ((o || ((o = {}), r.a.set(e, o)), "w" === t)) o.w = !0;
                      else {
                        let e = o[t];
                        e || ((e = new Set()), (o[t] = e)), e.add(n);
                      }
                    }
                  },
                  a = {
                    get: (t, n) =>
                      n === o
                        ? e
                        : (s("k", n), h(Reflect.get(t, n), r.a, r.c, r.t)),
                    has: (t, o) =>
                      o === n
                        ? ((i = !0), r.a.delete(e), !0)
                        : (s("h", o), Reflect.has(t, o)),
                    getOwnPropertyDescriptor: (e, t) => (
                      s("o", t), Reflect.getOwnPropertyDescriptor(e, t)
                    ),
                    ownKeys: (e) => (s("w"), Reflect.ownKeys(e)),
                  };
                return t && (a.set = a.deleteProperty = () => !1), [a, r];
              })(u, !!f))[1].p = i(f || u, p[0])),
              r && r.set(u, p)),
            (p[1].a = t),
            (p[1].c = r),
            (p[1].t = s),
            p[1].p
          );
        },
        f = (e, t, r, n) => {
          if (Object.is(e, t)) return !1;
          if (!u(e) || !u(t)) return !0;
          let o = r.get(d(e));
          if (!o) return !0;
          if (n) {
            let r = n.get(e);
            if (r && r.n === t) return r.g;
            n.set(e, { n: t, g: !1 });
          }
          let i = null;
          try {
            for (let r of o.h || [])
              if ((i = Reflect.has(e, r) !== Reflect.has(t, r))) return i;
            if (!0 === o.w) {
              if (
                (i = ((e, t) => {
                  let r = Reflect.ownKeys(e),
                    n = Reflect.ownKeys(t);
                  return r.length !== n.length || r.some((e, t) => e !== n[t]);
                })(e, t))
              )
                return i;
            } else
              for (let r of o.o || [])
                if (
                  (i =
                    !!Reflect.getOwnPropertyDescriptor(e, r) !=
                    !!Reflect.getOwnPropertyDescriptor(t, r))
                )
                  return i;
            for (let s of o.k || []) if ((i = f(e[s], t[s], r, n))) return i;
            return null === i && (i = !0), i;
          } finally {
            n && n.set(e, { n: t, g: i });
          }
        },
        p = (e) => (l(e) && e[o]) || null,
        g = (e, t = !0) => {
          a.set(e, t);
        },
        m = (e, t, r) => {
          let n = [],
            o = new WeakSet(),
            i = (e, s) => {
              if (o.has(e)) return;
              u(e) && o.add(e);
              let a = u(e) && t.get(d(e));
              if (a) {
                var l, c, h;
                if (
                  (null == (l = a.h) ||
                    l.forEach((e) => {
                      let t = `:has(${String(e)})`;
                      n.push(s ? [...s, t] : [t]);
                    }),
                  !0 === a.w)
                ) {
                  let e = ":ownKeys";
                  n.push(s ? [...s, e] : [e]);
                } else
                  null == (h = a.o) ||
                    h.forEach((e) => {
                      let t = `:hasOwn(${String(e)})`;
                      n.push(s ? [...s, t] : [t]);
                    });
                null == (c = a.k) ||
                  c.forEach((t) => {
                    (!r ||
                      "value" in
                        (Object.getOwnPropertyDescriptor(e, t) || {})) &&
                      i(e[t], s ? [...s, t] : [t]);
                  });
              } else s && n.push(s);
            };
          return i(e), n;
        };
    },
    6333: function (e, t, r) {
      "use strict";
      r.d(t, {
        Am: function () {
          return m;
        },
        x7: function () {
          return _;
        },
      });
      var n = r(2784),
        o = r(28316),
        i = (e) => {
          switch (e) {
            case "success":
              return l;
            case "info":
              return c;
            case "warning":
              return u;
            case "error":
              return d;
            default:
              return null;
          }
        },
        s = Array(12).fill(0),
        a = ({ visible: e }) =>
          n.createElement(
            "div",
            { className: "sonner-loading-wrapper", "data-visible": e },
            n.createElement(
              "div",
              { className: "sonner-spinner" },
              s.map((e, t) =>
                n.createElement("div", {
                  className: "sonner-loading-bar",
                  key: `spinner-bar-${t}`,
                })
              )
            )
          ),
        l = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        u = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        c = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        d = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        h = () => {
          let [e, t] = n.useState(document.hidden);
          return (
            n.useEffect(() => {
              let e = () => {
                t(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            e
          );
        },
        f = 1,
        p = new (class {
          constructor() {
            (this.subscribe = (e) => (
              this.subscribers.push(e),
              () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
              }
            )),
              (this.publish = (e) => {
                this.subscribers.forEach((t) => t(e));
              }),
              (this.addToast = (e) => {
                this.publish(e), (this.toasts = [...this.toasts, e]);
              }),
              (this.create = (e) => {
                var t;
                let { message: r, ...n } = e,
                  o =
                    "number" == typeof (null == e ? void 0 : e.id) ||
                    (null == (t = e.id) ? void 0 : t.length) > 0
                      ? e.id
                      : f++,
                  i = this.toasts.find((e) => e.id === o),
                  s = void 0 === e.dismissible || e.dismissible;
                return (
                  i
                    ? (this.toasts = this.toasts.map((t) =>
                        t.id === o
                          ? (this.publish({ ...t, ...e, id: o, title: r }),
                            { ...t, ...e, id: o, dismissible: s, title: r })
                          : t
                      ))
                    : this.addToast({ title: r, ...n, dismissible: s, id: o }),
                  o
                );
              }),
              (this.dismiss = (e) => (
                e ||
                  this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                e
              )),
              (this.message = (e, t) => this.create({ ...t, message: e })),
              (this.error = (e, t) =>
                this.create({ ...t, message: e, type: "error" })),
              (this.success = (e, t) =>
                this.create({ ...t, type: "success", message: e })),
              (this.info = (e, t) =>
                this.create({ ...t, type: "info", message: e })),
              (this.warning = (e, t) =>
                this.create({ ...t, type: "warning", message: e })),
              (this.loading = (e, t) =>
                this.create({ ...t, type: "loading", message: e })),
              (this.promise = (e, t) => {
                let r;
                if (!t) return;
                void 0 !== t.loading &&
                  (r = this.create({
                    ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description:
                      "function" != typeof t.description
                        ? t.description
                        : void 0,
                  }));
                let n = e instanceof Promise ? e : e(),
                  o = void 0 !== r;
                return (
                  n
                    .then(async (e) => {
                      if (g(e) && !e.ok) {
                        o = !1;
                        let n =
                            "function" == typeof t.error
                              ? await t.error(`HTTP error! status: ${e.status}`)
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(
                                  `HTTP error! status: ${e.status}`
                                )
                              : t.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      } else if (void 0 !== t.success) {
                        o = !1;
                        let n =
                            "function" == typeof t.success
                              ? await t.success(e)
                              : t.success,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: r,
                          type: "success",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .catch(async (e) => {
                      if (void 0 !== t.error) {
                        o = !1;
                        let n =
                            "function" == typeof t.error
                              ? await t.error(e)
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .finally(() => {
                      var e;
                      o && (this.dismiss(r), (r = void 0)),
                        null == (e = t.finally) || e.call(t);
                    }),
                  r
                );
              }),
              (this.custom = (e, t) => {
                let r = (null == t ? void 0 : t.id) || f++;
                return this.create({ jsx: e(r), id: r, ...t }), r;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        g = (e) =>
          e &&
          "object" == typeof e &&
          "ok" in e &&
          "boolean" == typeof e.ok &&
          "status" in e &&
          "number" == typeof e.status,
        m = Object.assign(
          (e, t) => {
            let r = (null == t ? void 0 : t.id) || f++;
            return p.addToast({ title: e, ...t, id: r }), r;
          },
          {
            success: p.success,
            info: p.info,
            warning: p.warning,
            error: p.error,
            custom: p.custom,
            message: p.message,
            promise: p.promise,
            dismiss: p.dismiss,
            loading: p.loading,
          },
          { getHistory: () => p.toasts }
        );
      function v(e) {
        return void 0 !== e.label;
      }
      function b(...e) {
        return e.filter(Boolean).join(" ");
      }
      !(function (e, { insertAt: t } = {}) {
        if (!e || "undefined" == typeof document) return;
        let r = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === t && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
      var y = (e) => {
        var t, r, o, s, l, u, c, d, f, p;
        let {
            invert: g,
            toast: m,
            unstyled: b,
            interacting: y,
            setHeights: w,
            visibleToasts: _,
            heights: x,
            index: k,
            toasts: j,
            expanded: S,
            removeToast: E,
            defaultRichColors: T,
            closeButton: O,
            style: P,
            cancelButtonStyle: C,
            actionButtonStyle: A,
            className: R = "",
            descriptionClassName: I = "",
            duration: $,
            position: L,
            gap: N,
            loadingIcon: M,
            expandByDefault: U,
            classNames: D,
            icons: G,
            closeButtonAriaLabel: z = "Close toast",
            pauseWhenPageIsHidden: B,
            cn: F,
          } = e,
          [H, q] = n.useState(!1),
          [W, K] = n.useState(!1),
          [V, J] = n.useState(!1),
          [Y, Z] = n.useState(!1),
          [X, Q] = n.useState(0),
          [ee, et] = n.useState(0),
          er = n.useRef(null),
          en = n.useRef(null),
          eo = 0 === k,
          ei = k + 1 <= _,
          es = m.type,
          ea = !1 !== m.dismissible,
          el = m.className || "",
          eu = m.descriptionClassName || "",
          ec = n.useMemo(
            () => x.findIndex((e) => e.toastId === m.id) || 0,
            [x, m.id]
          ),
          ed = n.useMemo(() => {
            var e;
            return null != (e = m.closeButton) ? e : O;
          }, [m.closeButton, O]),
          eh = n.useMemo(() => m.duration || $ || 4e3, [m.duration, $]),
          ef = n.useRef(0),
          ep = n.useRef(0),
          eg = n.useRef(0),
          em = n.useRef(null),
          [ev, eb] = L.split("-"),
          ey = n.useMemo(
            () => x.reduce((e, t, r) => (r >= ec ? e : e + t.height), 0),
            [x, ec]
          ),
          ew = h(),
          e_ = m.invert || g,
          ex = "loading" === es;
        (ep.current = n.useMemo(() => ec * N + ey, [ec, ey])),
          n.useEffect(() => {
            q(!0);
          }, []),
          n.useLayoutEffect(() => {
            if (!H) return;
            let e = en.current,
              t = e.style.height;
            e.style.height = "auto";
            let r = e.getBoundingClientRect().height;
            (e.style.height = t),
              et(r),
              w((e) =>
                e.find((e) => e.toastId === m.id)
                  ? e.map((e) => (e.toastId === m.id ? { ...e, height: r } : e))
                  : [{ toastId: m.id, height: r, position: m.position }, ...e]
              );
          }, [H, m.title, m.description, w, m.id]);
        let ek = n.useCallback(() => {
          K(!0),
            Q(ep.current),
            w((e) => e.filter((e) => e.toastId !== m.id)),
            setTimeout(() => {
              E(m);
            }, 200);
        }, [m, E, w, ep]);
        return (
          n.useEffect(() => {
            if (
              (m.promise && "loading" === es) ||
              m.duration === 1 / 0 ||
              "loading" === m.type
            )
              return;
            let e,
              t = eh;
            return (
              S || y || (B && ew)
                ? (() => {
                    if (eg.current < ef.current) {
                      let e = new Date().getTime() - ef.current;
                      t -= e;
                    }
                    eg.current = new Date().getTime();
                  })()
                : t !== 1 / 0 &&
                  ((ef.current = new Date().getTime()),
                  (e = setTimeout(() => {
                    var e;
                    null == (e = m.onAutoClose) || e.call(m, m), ek();
                  }, t))),
              () => clearTimeout(e)
            );
          }, [S, y, U, m, eh, ek, m.promise, es, B, ew]),
          n.useEffect(() => {
            let e = en.current;
            if (e) {
              let t = e.getBoundingClientRect().height;
              return (
                et(t),
                w((e) => [
                  { toastId: m.id, height: t, position: m.position },
                  ...e,
                ]),
                () => w((e) => e.filter((e) => e.toastId !== m.id))
              );
            }
          }, [w, m.id]),
          n.useEffect(() => {
            m.delete && ek();
          }, [ek, m.delete]),
          n.createElement(
            "li",
            {
              "aria-live": m.important ? "assertive" : "polite",
              "aria-atomic": "true",
              role: "status",
              tabIndex: 0,
              ref: en,
              className: F(
                R,
                el,
                null == D ? void 0 : D.toast,
                null == (t = null == m ? void 0 : m.classNames)
                  ? void 0
                  : t.toast,
                null == D ? void 0 : D.default,
                null == D ? void 0 : D[es],
                null == (r = null == m ? void 0 : m.classNames) ? void 0 : r[es]
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (o = m.richColors) ? o : T,
              "data-styled": !(m.jsx || m.unstyled || b),
              "data-mounted": H,
              "data-promise": !!m.promise,
              "data-removed": W,
              "data-visible": ei,
              "data-y-position": ev,
              "data-x-position": eb,
              "data-index": k,
              "data-front": eo,
              "data-swiping": V,
              "data-dismissible": ea,
              "data-type": es,
              "data-invert": e_,
              "data-swipe-out": Y,
              "data-expanded": !!(S || (U && H)),
              style: {
                "--index": k,
                "--toasts-before": k,
                "--z-index": j.length - k,
                "--offset": `${W ? X : ep.current}px`,
                "--initial-height": U ? "auto" : `${ee}px`,
                ...P,
                ...m.style,
              },
              onPointerDown: (e) => {
                ex ||
                  !ea ||
                  ((er.current = new Date()),
                  Q(ep.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (J(!0), (em.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, t, r, n;
                if (Y || !ea) return;
                em.current = null;
                let o = Number(
                    (null == (e = en.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount")
                          .replace("px", "")) || 0
                  ),
                  i =
                    new Date().getTime() -
                    (null == (t = er.current) ? void 0 : t.getTime());
                if (Math.abs(o) >= 20 || Math.abs(o) / i > 0.11) {
                  Q(ep.current),
                    null == (r = m.onDismiss) || r.call(m, m),
                    ek(),
                    Z(!0);
                  return;
                }
                null == (n = en.current) ||
                  n.style.setProperty("--swipe-amount", "0px"),
                  J(!1);
              },
              onPointerMove: (e) => {
                var t;
                if (!em.current || !ea) return;
                let r = e.clientY - em.current.y,
                  n = e.clientX - em.current.x,
                  o = ("top" === ev ? Math.min : Math.max)(0, r),
                  i = "touch" === e.pointerType ? 10 : 2;
                Math.abs(o) > i
                  ? null == (t = en.current) ||
                    t.style.setProperty("--swipe-amount", `${r}px`)
                  : Math.abs(n) > i && (em.current = null);
              },
            },
            ed && !m.jsx
              ? n.createElement(
                  "button",
                  {
                    "aria-label": z,
                    "data-disabled": ex,
                    "data-close-button": !0,
                    onClick:
                      ex || !ea
                        ? () => {}
                        : () => {
                            var e;
                            ek(), null == (e = m.onDismiss) || e.call(m, m);
                          },
                    className: F(
                      null == D ? void 0 : D.closeButton,
                      null == (s = null == m ? void 0 : m.classNames)
                        ? void 0
                        : s.closeButton
                    ),
                  },
                  n.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    n.createElement("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18",
                    }),
                    n.createElement("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18",
                    })
                  )
                )
              : null,
            m.jsx || n.isValidElement(m.title)
              ? m.jsx || m.title
              : n.createElement(
                  n.Fragment,
                  null,
                  es || m.icon || m.promise
                    ? n.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: F(
                            null == D ? void 0 : D.icon,
                            null == (l = null == m ? void 0 : m.classNames)
                              ? void 0
                              : l.icon
                          ),
                        },
                        m.promise || ("loading" === m.type && !m.icon)
                          ? m.icon ||
                              (null != G && G.loading
                                ? n.createElement(
                                    "div",
                                    {
                                      className: "sonner-loader",
                                      "data-visible": "loading" === es,
                                    },
                                    G.loading
                                  )
                                : M
                                ? n.createElement(
                                    "div",
                                    {
                                      className: "sonner-loader",
                                      "data-visible": "loading" === es,
                                    },
                                    M
                                  )
                                : n.createElement(a, {
                                    visible: "loading" === es,
                                  }))
                          : null,
                        "loading" !== m.type
                          ? m.icon || (null == G ? void 0 : G[es]) || i(es)
                          : null
                      )
                    : null,
                  n.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: F(
                        null == D ? void 0 : D.content,
                        null == (u = null == m ? void 0 : m.classNames)
                          ? void 0
                          : u.content
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        "data-title": "",
                        className: F(
                          null == D ? void 0 : D.title,
                          null == (c = null == m ? void 0 : m.classNames)
                            ? void 0
                            : c.title
                        ),
                      },
                      m.title
                    ),
                    m.description
                      ? n.createElement(
                          "div",
                          {
                            "data-description": "",
                            className: F(
                              I,
                              eu,
                              null == D ? void 0 : D.description,
                              null == (d = null == m ? void 0 : m.classNames)
                                ? void 0
                                : d.description
                            ),
                          },
                          m.description
                        )
                      : null
                  ),
                  n.isValidElement(m.cancel)
                    ? m.cancel
                    : m.cancel && v(m.cancel)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-cancel": !0,
                          style: m.cancelButtonStyle || C,
                          onClick: (e) => {
                            var t, r;
                            v(m.cancel) &&
                              ea &&
                              (null == (r = (t = m.cancel).onClick) ||
                                r.call(t, e),
                              ek());
                          },
                          className: F(
                            null == D ? void 0 : D.cancelButton,
                            null == (f = null == m ? void 0 : m.classNames)
                              ? void 0
                              : f.cancelButton
                          ),
                        },
                        m.cancel.label
                      )
                    : null,
                  n.isValidElement(m.action)
                    ? m.action
                    : m.action && v(m.action)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-action": !0,
                          style: m.actionButtonStyle || A,
                          onClick: (e) => {
                            var t, r;
                            v(m.action) &&
                              (e.defaultPrevented ||
                                (null == (r = (t = m.action).onClick) ||
                                  r.call(t, e),
                                ek()));
                          },
                          className: F(
                            null == D ? void 0 : D.actionButton,
                            null == (p = null == m ? void 0 : m.classNames)
                              ? void 0
                              : p.actionButton
                          ),
                        },
                        m.action.label
                      )
                    : null
                )
          )
        );
      };
      function w() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e
          ? e
          : window.getComputedStyle(document.documentElement).direction;
      }
      var _ = (e) => {
        let {
            invert: t,
            position: r = "bottom-right",
            hotkey: i = ["altKey", "KeyT"],
            expand: s,
            closeButton: a,
            className: l,
            offset: u,
            theme: c = "light",
            richColors: d,
            duration: h,
            style: f,
            visibleToasts: g = 3,
            toastOptions: m,
            dir: v = w(),
            gap: _ = 14,
            loadingIcon: x,
            icons: k,
            containerAriaLabel: j = "Notifications",
            pauseWhenPageIsHidden: S,
            cn: E = b,
          } = e,
          [T, O] = n.useState([]),
          P = n.useMemo(
            () =>
              Array.from(
                new Set(
                  [r].concat(T.filter((e) => e.position).map((e) => e.position))
                )
              ),
            [T, r]
          ),
          [C, A] = n.useState([]),
          [R, I] = n.useState(!1),
          [$, L] = n.useState(!1),
          [N, M] = n.useState(
            "system" !== c
              ? c
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          U = n.useRef(null),
          D = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          G = n.useRef(null),
          z = n.useRef(!1),
          B = n.useCallback(
            (e) => {
              var t;
              (null != (t = T.find((t) => t.id === e.id)) && t.delete) ||
                p.dismiss(e.id),
                O((t) => t.filter(({ id: t }) => t !== e.id));
            },
            [T]
          );
        return (
          n.useEffect(
            () =>
              p.subscribe((e) => {
                if (e.dismiss) {
                  O((t) =>
                    t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t))
                  );
                  return;
                }
                setTimeout(() => {
                  o.flushSync(() => {
                    O((t) => {
                      let r = t.findIndex((t) => t.id === e.id);
                      return -1 !== r
                        ? [
                            ...t.slice(0, r),
                            { ...t[r], ...e },
                            ...t.slice(r + 1),
                          ]
                        : [e, ...t];
                    });
                  });
                });
              }),
            []
          ),
          n.useEffect(() => {
            if ("system" !== c) {
              M(c);
              return;
            }
            "system" === c &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? M("dark")
                : M("light")),
              "undefined" != typeof window &&
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .addEventListener("change", ({ matches: e }) => {
                    M(e ? "dark" : "light");
                  });
          }, [c]),
          n.useEffect(() => {
            T.length <= 1 && I(!1);
          }, [T]),
          n.useEffect(() => {
            let e = (e) => {
              var t, r;
              i.every((t) => e[t] || e.code === t) &&
                (I(!0), null == (t = U.current) || t.focus()),
                "Escape" === e.code &&
                  (document.activeElement === U.current ||
                    (null != (r = U.current) &&
                      r.contains(document.activeElement))) &&
                  I(!1);
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [i]),
          n.useEffect(() => {
            if (U.current)
              return () => {
                G.current &&
                  (G.current.focus({ preventScroll: !0 }),
                  (G.current = null),
                  (z.current = !1));
              };
          }, [U.current]),
          T.length
            ? n.createElement(
                "section",
                { "aria-label": `${j} ${D}`, tabIndex: -1 },
                P.map((e, r) => {
                  var o;
                  let [i, c] = e.split("-");
                  return n.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === v ? w() : v,
                      tabIndex: -1,
                      ref: U,
                      className: l,
                      "data-sonner-toaster": !0,
                      "data-theme": N,
                      "data-y-position": i,
                      "data-x-position": c,
                      style: {
                        "--front-toast-height": `${
                          (null == (o = C[0]) ? void 0 : o.height) || 0
                        }px`,
                        "--offset":
                          "number" == typeof u ? `${u}px` : u || "32px",
                        "--width": "356px",
                        "--gap": `${_}px`,
                        ...f,
                      },
                      onBlur: (e) => {
                        z.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((z.current = !1),
                          G.current &&
                            (G.current.focus({ preventScroll: !0 }),
                            (G.current = null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          z.current ||
                          ((z.current = !0), (G.current = e.relatedTarget));
                      },
                      onMouseEnter: () => I(!0),
                      onMouseMove: () => I(!0),
                      onMouseLeave: () => {
                        $ || I(!1);
                      },
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          L(!0);
                      },
                      onPointerUp: () => L(!1),
                    },
                    T.filter(
                      (t) => (!t.position && 0 === r) || t.position === e
                    ).map((r, o) => {
                      var i, l;
                      return n.createElement(y, {
                        key: r.id,
                        icons: k,
                        index: o,
                        toast: r,
                        defaultRichColors: d,
                        duration:
                          null != (i = null == m ? void 0 : m.duration) ? i : h,
                        className: null == m ? void 0 : m.className,
                        descriptionClassName:
                          null == m ? void 0 : m.descriptionClassName,
                        invert: t,
                        visibleToasts: g,
                        closeButton:
                          null != (l = null == m ? void 0 : m.closeButton)
                            ? l
                            : a,
                        interacting: $,
                        position: e,
                        style: null == m ? void 0 : m.style,
                        unstyled: null == m ? void 0 : m.unstyled,
                        classNames: null == m ? void 0 : m.classNames,
                        cancelButtonStyle:
                          null == m ? void 0 : m.cancelButtonStyle,
                        actionButtonStyle:
                          null == m ? void 0 : m.actionButtonStyle,
                        removeToast: B,
                        toasts: T.filter((e) => e.position == r.position),
                        heights: C.filter((e) => e.position == r.position),
                        setHeights: A,
                        expandByDefault: s,
                        gap: _,
                        loadingIcon: x,
                        expanded: R,
                        pauseWhenPageIsHidden: S,
                        cn: E,
                      });
                    })
                  );
                })
              )
            : null
        );
      };
    },
    20452: function (e, t, r) {
      "use strict";
      var n = r(2784),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = i({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                c = n[1];
              return (
                a(
                  function () {
                    (o.value = r), (o.getSnapshot = t), u(o) && c({ inst: o });
                  },
                  [e, r, t]
                ),
                s(
                  function () {
                    return (
                      u(o) && c({ inst: o }),
                      e(function () {
                        u(o) && c({ inst: o });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    43100: function (e, t, r) {
      "use strict";
      e.exports = r(20452);
    },
    20650: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return d;
        },
      });
      var n = r(2784),
        o = r(81411),
        i = r(43100),
        s = r(41757);
      let { use: a } = n,
        { useSyncExternalStore: l } = i,
        u = (e, t) => {
          let r = (0, n.useRef)();
          (0, n.useEffect)(() => {
            r.current = (0, o.h8)(e, t, !0);
          }),
            (0, n.useDebugValue)(r.current);
        },
        c = new WeakMap();
      function d(e, t) {
        let r = null == t ? void 0 : t.sync,
          i = (0, n.useRef)(),
          d = (0, n.useRef)(),
          h = !0,
          f = l(
            (0, n.useCallback)(
              (t) => {
                let n = (0, s.Ld)(e, t, r);
                return t(), n;
              },
              [e, r]
            ),
            () => {
              let t = (0, s.CO)(e, a);
              try {
                if (
                  !h &&
                  i.current &&
                  d.current &&
                  !(0, o.ln)(i.current, t, d.current, new WeakMap())
                )
                  return i.current;
              } catch (e) {}
              return t;
            },
            () => (0, s.CO)(e, a)
          );
        h = !1;
        let p = new WeakMap();
        (0, n.useEffect)(() => {
          (i.current = f), (d.current = p);
        }),
          u(f, p);
        let g = (0, n.useMemo)(() => new WeakMap(), []);
        return (0, o.DM)(f, p, g, c);
      }
    },
    41757: function (e, t, r) {
      "use strict";
      r.d(t, {
        CO: function () {
          return c;
        },
        Ld: function () {
          return u;
        },
        sj: function () {
          return l;
        },
      });
      var n = r(81411);
      let o = (e) => "object" == typeof e && null !== e,
        i = new WeakMap(),
        s = new WeakSet(),
        [a] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          r = (e) =>
            o(e) &&
            !s.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          a = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          l = new WeakMap(),
          u = (e, t, r = a) => {
            let o = l.get(e);
            if ((null == o ? void 0 : o[0]) === t) return o[1];
            let c = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              (0, n.jc)(c, !0),
              l.set(e, [t, c]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(c, t)) return;
                let o = Reflect.get(e, t),
                  { enumerable: a } = Reflect.getOwnPropertyDescriptor(e, t),
                  l = { value: o, enumerable: a, configurable: !0 };
                if (s.has(o)) (0, n.jc)(o, !1);
                else if (o instanceof Promise)
                  delete l.value, (l.get = () => r(o));
                else if (i.has(o)) {
                  let [e, t] = i.get(o);
                  l.value = u(e, t(), r);
                }
                Object.defineProperty(c, t, l);
              }),
              Object.preventExtensions(c)
            );
          },
          c = new WeakMap(),
          d = [1, 1],
          h = (a) => {
            if (!o(a)) throw Error("object required");
            let l = c.get(a);
            if (l) return l;
            let f = d[0],
              p = new Set(),
              g = (e, t = ++d[0]) => {
                f !== t && ((f = t), p.forEach((r) => r(e, t)));
              },
              m = d[1],
              v = (e = ++d[1]) => (
                m === e ||
                  p.size ||
                  ((m = e),
                  y.forEach(([t]) => {
                    let r = t[1](e);
                    r > f && (f = r);
                  })),
                f
              ),
              b = (e) => (t, r) => {
                let n = [...t];
                (n[1] = [e, ...n[1]]), g(n, r);
              },
              y = new Map(),
              w = (e, t) => {
                if (y.has(e)) throw Error("prop listener already exists");
                if (p.size) {
                  let r = t[3](b(e));
                  y.set(e, [t, r]);
                } else y.set(e, [t]);
              },
              _ = (e) => {
                var t;
                let r = y.get(e);
                r && (y.delete(e), null == (t = r[1]) || t.call(r));
              },
              x = (e) => {
                p.add(e),
                  1 === p.size &&
                    y.forEach(([e, t], r) => {
                      if (t) throw Error("remove already exists");
                      let n = e[3](b(r));
                      y.set(r, [e, n]);
                    });
                let t = () => {
                  p.delete(e),
                    0 === p.size &&
                      y.forEach(([e, t], r) => {
                        t && (t(), y.set(r, [e]));
                      });
                };
                return t;
              },
              k = Array.isArray(a)
                ? []
                : Object.create(Object.getPrototypeOf(a)),
              j = {
                deleteProperty(e, t) {
                  let r = Reflect.get(e, t);
                  _(t);
                  let n = Reflect.deleteProperty(e, t);
                  return n && g(["delete", [t], r]), n;
                },
                set(t, a, l, u) {
                  let d = Reflect.has(t, a),
                    f = Reflect.get(t, a, u);
                  if (d && (e(f, l) || (c.has(l) && e(f, c.get(l))))) return !0;
                  _(a), o(l) && (l = (0, n.o5)(l) || l);
                  let p = l;
                  if (l instanceof Promise)
                    l.then((e) => {
                      (l.status = "fulfilled"),
                        (l.value = e),
                        g(["resolve", [a], e]);
                    }).catch((e) => {
                      (l.status = "rejected"),
                        (l.reason = e),
                        g(["reject", [a], e]);
                    });
                  else {
                    !i.has(l) && r(l) && (p = h(l));
                    let e = !s.has(p) && i.get(p);
                    e && w(a, e);
                  }
                  return Reflect.set(t, a, p, u), g(["set", [a], l, f]), !0;
                },
              },
              S = t(k, j);
            c.set(a, S);
            let E = [k, v, u, x];
            return (
              i.set(S, E),
              Reflect.ownKeys(a).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(a, e);
                "value" in t &&
                  ((S[e] = a[e]), delete t.value, delete t.writable),
                  Object.defineProperty(k, e, t);
              }),
              S
            );
          }
        ) => [h, i, s, e, t, r, a, l, u, c, d])();
      function l(e = {}) {
        return a(e);
      }
      function u(e, t, r) {
        let n;
        let o = i.get(e);
        o || console.warn("Please use proxy object");
        let s = [],
          a = o[3],
          l = !1,
          u = a((e) => {
            if ((s.push(e), r)) {
              t(s.splice(0));
              return;
            }
            n ||
              (n = Promise.resolve().then(() => {
                (n = void 0), l && t(s.splice(0));
              }));
          });
        return (
          (l = !0),
          () => {
            (l = !1), u();
          }
        );
      }
      function c(e, t) {
        let r = i.get(e);
        r || console.warn("Please use proxy object");
        let [n, o, s] = r;
        return s(n, o(), t);
      }
    },
    72292: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(737).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    58195: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.actionAsyncStorage;
          },
        });
      let n = r(72292);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    737: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
      }
      let o = globalThis.AsyncLocalStorage;
      function i() {
        return o ? new o() : new n();
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    30551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(737).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    51253: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getExpectedRequestStore: function () {
            return o;
          },
          requestAsyncStorage: function () {
            return n.requestAsyncStorage;
          },
        });
      let n = r(30551);
      function o(e) {
        let t = n.requestAsyncStorage.getStore();
        if (t) return t;
        throw Error(
          "`" +
            e +
            "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(86570), t(9351);
    }),
      (_N_E = e.O());
  },
]);
