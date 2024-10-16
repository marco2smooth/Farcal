(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6838, 7042],
  {
    89228: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal/dpa",
        function () {
          return a(31636);
        },
      ]);
    },
    57042: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(52322),
        i = a(39097),
        s = a.n(i),
        l = a(44382),
        r = a(29982);
      t.default = (e) => {
        let { darkerBg: t, className: a } = e;
        return (0, n.jsxs)("div", {
          className: (0, l.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            a
          ),
         
        });
      };
    },
    72298: function (e, t, a) {
      "use strict";
      let n = (0, a(79617).eI)(
        "https://obuldanrptloktxcffvn.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MTQ2ODUsImV4cCI6MjAzNDE5MDY4NX0.NFt49g6DFkc1X5khCzN5p01iAVo2TMxlx88cY1V0E2M"
      );
      t.Z = n;
    },
    31636: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var n = a(52322),
        i = a(2784),
        s = a(10386),
        l = a(62365);
      function r(e, t) {
        if (!t.error) return delete e[t.key], e;
        if (t) return { ...e, [t.key]: t.error };
        throw Error();
      }
      function o(e) {
        let { validate: t, ...a } = e,
          [o, c] = (0, i.useReducer)(r, null),
          u = (0, s.TA)({
            validateOnBlur: !0,
            ...a,
            validationSchema: a.validationSchema,
            initialValues: a.initialValues,
            onSubmit: a.onSubmit,
            validate:
              t ||
              function () {
                return o;
              },
          });
        return (0, n.jsx)("form", {
          id: a.id,
          name: a.name,
          onSubmit: u.handleSubmit,
          className: a.className,
          style: a.style,
          method: "POST",
          children: (0, n.jsx)(l.o, {
            values: u.values,
            errors: u.errors,
            formContextOnChange: u.handleChange,
            handleBlur: u.handleBlur,
            touched: u.touched,
            fieldLevelValidation: function (e, t) {
              c({ key: e, error: t });
            },
            children: a.children({
              errors: u.errors,
              touched: u.touched,
              isSubmitting: u.isSubmitting,
              isValidating: u.isValidating,
              submitCount: u.submitCount,
              initialValues: u.initialValues,
              values: u.values,
              handleReset: u.handleReset,
              resetForm: u.resetForm,
              setFieldValue: u.setFieldValue,
            }),
          }),
        });
      }
      var c = a(94878),
        u = a(29982),
        d = a(48601),
        m = a(57042),
        h = a(27478),
        p = a(37637),
        x = a(72298),
        f = a(4619),
        v = () => {
          let [e, t] = (0, i.useState)(""),
            [a, s] = (0, i.useState)(),
            [l, r] = (0, i.useState)(!1),
            v = d
              .Ry()
              .shape({
                email: d.Z_().email("Invalid email").required("Required"),
              }),
            b = async (e, t) => {
              let { resetForm: a } = t;
              try {
                s(void 0);
                let { error: t } = await x.Z.from("dpa_downloads").insert([
                  { contact_email: e.email, document: "dpa" },
                ]);
                if (t) throw t;
                a(),
                  r(!0),
                  window.open(
                    "https://supabase.com/downloads/docs/Supabase+DPA+231211.pdf",
                    "_blank"
                  );
              } catch (e) {
                s(e.message);
              }
            };
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(h.default, {
              children: [
                (0, n.jsx)(p.default, {
                  children: (0, n.jsx)("div", {
                    className: "mx-auto grid max-w-2xl grid-cols-12 rounded-lg",
                    children: (0, n.jsx)("div", {
                      className: "col-span-12 flex items-center lg:col-span-12",
                      children: (0, n.jsxs)("div", {
                        className: "prose flex flex-col space-y-8 pb-16",
                        children: [
                          (0, n.jsx)("h1", {
                            className: "text-center text-5xl",
                            children: "DPA",
                          }),
                          (0, n.jsx)("p", {
                            children:
                              'We have a long-standing commitment to customer privacy and data protection, and as part of that commitment we have prepared a pre-signed Data Processing Addendum ("DPA").',
                          }),
                          (0, n.jsxs)("p", {
                            children: [
                              "You can download our latest DPA document by submitting your email here. For the document to be considered executed, you must return the signed DPA document to",
                              " ",
                              (0, n.jsx)("a", {
                                href: "mailto:privacy@supabase.com",
                                target: "_blank",
                                className: "text-brand hover:text-brand",
                                children: "privacy@supabase.com",
                              }),
                              ".",
                            ],
                          }),
                          l
                            ? (0, n.jsx)("p", {
                                className: "text-brand",
                                children:
                                  "Thank you for your submission! A new tab should have opened with the DPA document",
                              })
                            : (0, n.jsx)(o, {
                                initialValues: { email: "" },
                                validationSchema: v,
                                onSubmit: b,
                                children: (i) => {
                                  let { isSubmitting: s } = i;
                                  return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)(c.Z, {
                                        value: e,
                                        onChange: (e) => t(e.target.value),
                                        type: "email",
                                        name: "email",
                                        id: "email",
                                        required: !0,
                                        descriptionText:
                                          "We only keep a record of your email so we can update you when the document has been updated.",
                                        placeholder: "Your email address",
                                        error: a,
                                        actions: (0, n.jsx)(u.z, {
                                          htmlType: "submit",
                                          type: "default",
                                          iconRight: (0, n.jsx)(f.Z, {}),
                                          className: "mr-1",
                                          loading: s,
                                          children: "Download DPA",
                                        }),
                                      }),
                                      a && (0, n.jsx)("p", { children: a }),
                                    ],
                                  });
                                },
                              }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(m.default, {}),
              ],
            }),
          });
        };
    },
    94878: function (e, t, a) {
      "use strict";
      var n = a(52322),
        i = a(2784),
        s = a(27638),
        l = a(53322),
        r = a(66056),
        o = a(27510),
        c = a(1903),
        u = a(44382),
        d = a(29982),
        m = a(62365),
        h = a(15481);
      function p(e) {
        let {
            autoComplete: t,
            autoFocus: a,
            className: p,
            inputClassName: x,
            iconContainerClassName: f,
            copy: v,
            defaultValue: b,
            descriptionText: j,
            disabled: y,
            error: g,
            icon: N,
            id: C = "",
            name: w = "",
            inputRef: z,
            label: _,
            afterLabel: Z,
            beforeLabel: k,
            labelOptional: S,
            layout: I,
            onChange: T,
            onBlur: V,
            onCopy: A,
            placeholder: F,
            type: D = "text",
            value: E,
            style: O,
            reveal: P = !1,
            actions: R,
            size: B = "medium",
            borderless: J = !1,
            validation: L,
            ...M
          } = e,
          [X, Y] = (0, i.useState)("Copy"),
          [W, q] = (0, i.useState)(!0),
          G = (0, c.Z)("input"),
          {
            formContextOnChange: Q,
            values: U,
            errors: H,
            handleBlur: K,
            touched: $,
            fieldLevelValidation: ee,
          } = (0, m.G)();
        U && !E && (E = U[C || w]),
          g || (H && !g && (g = H[C || w]), (g = $ && $[C] ? g : void 0)),
          (0, i.useEffect)(() => {
            L && ee(C, L(E));
          }, []);
        let et = ["peer/input", G.base];
        return (
          g && et.push(G.variants.error),
          g || et.push(G.variants.standard),
          B && et.push(G.size[B]),
          N && et.push(G.with_icon),
          y && et.push(G.disabled),
          x && et.push(x),
          (0, n.jsx)(s.l, {
            label: _,
            afterLabel: Z,
            beforeLabel: k,
            labelOptional: S,
            layout: I,
            id: C,
            error: g,
            descriptionText: j,
            style: O,
            size: B,
            className: p,
            children: (0, n.jsxs)("div", {
              className: G.container,
              children: [
                (0, n.jsx)("input", {
                  "data-size": B,
                  autoComplete: t,
                  autoFocus: a,
                  defaultValue: b,
                  disabled: y,
                  id: C,
                  name: w,
                  onChange: function (e) {
                    T && T(e), Q && Q(e), L && ee(C, L(e.target.value));
                  },
                  onBlur: function (e) {
                    K &&
                      setTimeout(() => {
                        K(e);
                      }, 100),
                      V && V(e);
                  },
                  onCopy: A,
                  placeholder: F,
                  ref: z,
                  type: D,
                  value: P && W ? o.aA : E,
                  className: (0, u.cn)(et),
                  ...M,
                }),
                N && (0, n.jsx)(r.Z, { size: B, icon: N, className: f }),
                v || g || R
                  ? (0, n.jsxs)("div", {
                      className: G.actions_container,
                      children: [
                        g && (0, n.jsx)(l.Z, { size: B }),
                        v && !(P && W)
                          ? (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              icon: (0, n.jsx)(h.Z, {}),
                              onClick: () => {
                                var e, t;
                                return (
                                  (e = E),
                                  void (
                                    null ===
                                      (t = navigator.clipboard.writeText(e)) ||
                                    void 0 === t ||
                                    t.then(
                                      function () {
                                        Y("Copied"),
                                          setTimeout(function () {
                                            Y("Copy");
                                          }, 3e3),
                                          null == A || A();
                                      },
                                      function () {
                                        Y("Failed to copy");
                                      }
                                    )
                                  )
                                );
                              },
                              children: X,
                            })
                          : null,
                        P && W
                          ? (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              onClick: function () {
                                q(!1);
                              },
                              children: "Reveal",
                            })
                          : null,
                        R && R,
                      ],
                    })
                  : null,
              ],
            }),
          })
        );
      }
      (p.TextArea = function (e) {
        let {
            className: t,
            textAreaClassName: a,
            descriptionText: r,
            disabled: o,
            error: u,
            icon: p,
            id: x = "",
            name: f = "",
            label: v,
            afterLabel: b,
            beforeLabel: j,
            labelOptional: y,
            layout: g,
            onChange: N,
            onBlur: C,
            placeholder: w,
            value: z,
            style: _,
            rows: Z = 4,
            limit: k,
            size: S,
            borderless: I = !1,
            validation: T,
            copy: V = !1,
            onCopy: A,
            actions: F,
            ...D
          } = e,
          [E, O] = (0, i.useState)(0),
          [P, R] = (0, i.useState)("Copy"),
          {
            formContextOnChange: B,
            values: J,
            errors: L,
            handleBlur: M,
            touched: X,
            fieldLevelValidation: Y,
          } = (0, m.G)();
        J && !z && (z = J[x || f]),
          u || (L && !u && (u = L[x || f]), (u = X && X[x || f] ? u : void 0)),
          (0, i.useEffect)(() => {
            T && Y(x, T(z));
          }, []);
        let W = (0, c.Z)("input"),
          q = [W.base];
        return (
          u && q.push(W.variants.error),
          u || q.push(W.variants.standard),
          p && q.push(W.with_icon),
          S && q.push(W.size[S]),
          o && q.push(W.disabled),
          a && q.push(a),
          (0, n.jsx)(s.l, {
            className: t,
            label: v,
            afterLabel: b,
            beforeLabel: j,
            labelOptional: y,
            layout: g,
            id: x,
            error: u,
            descriptionText: r,
            style: _,
            size: S,
            children: (0, n.jsxs)("div", {
              className: W.container,
              children: [
                (0, n.jsx)("textarea", {
                  disabled: o,
                  id: x,
                  name: f,
                  rows: Z,
                  cols: 100,
                  placeholder: w,
                  onChange: function (e) {
                    O(e.target.value.length),
                      N && N(e),
                      B && B(e),
                      T && Y(x, T(e.target.value));
                  },
                  onBlur: function (e) {
                    M &&
                      setTimeout(() => {
                        M(e);
                      }, 100),
                      C && C(e);
                  },
                  onCopy: A,
                  value: z,
                  className: q.join(" "),
                  maxLength: k,
                  ...D,
                }),
                V || u || F
                  ? (0, n.jsx)("div", {
                      className: W.textarea_actions_container,
                      children: (0, n.jsxs)("div", {
                        className: W.textarea_actions_container_items,
                        children: [
                          u && (0, n.jsx)(l.Z, { size: S }),
                          V &&
                            (0, n.jsx)(d.z, {
                              size: "tiny",
                              type: "default",
                              onClick: () =>
                                (function (e) {
                                  navigator.clipboard.writeText(e).then(
                                    function () {
                                      R("Copied"),
                                        setTimeout(function () {
                                          R("Copy");
                                        }, 3e3),
                                        null == A || A();
                                    },
                                    function () {
                                      R("Failed to copy");
                                    }
                                  );
                                })(z),
                              icon: (0, n.jsx)(h.Z, {}),
                              children: P,
                            }),
                          F && F,
                        ],
                      }),
                    })
                  : null,
              ],
            }),
          })
        );
      }),
        (t.Z = p);
    },
    53322: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(52322);
      a(2784);
      var i = a(1903),
        s = a(43246);
      let l = { tiny: 14, small: 16, medium: 20, large: 24, xlarge: 32 };
      function r(e) {
        let { style: t, size: a = "medium" } = e,
          r = (0, i.Z)("inputErrorIcon");
        return (0, n.jsx)("div", {
          className: r.base,
          style: t,
          children: (0, n.jsx)(s.Z, { size: l[a], strokeWidth: 2 }),
        });
      }
    },
    66056: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(52322);
      a(2784);
      var i = a(1903),
        s = a(44382);
      function l(e) {
        let { icon: t, className: a, size: l } = e,
          r = (0, i.Z)("inputIconContainer");
        return (0, n.jsx)("div", {
          className: (0, s.cn)(r.base, r.size[l], a),
          children: t,
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 9372, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 89228));
      }
    ),
      (_N_E = e.O());
  },
]);
