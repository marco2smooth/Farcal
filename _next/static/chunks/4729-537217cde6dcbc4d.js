"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4729],
  {
    84729: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        },
      });
      var a = r(52322),
        l = r(2784),
        n = r(39097),
        o = r.n(n),
        i = r(43246),
        s = r(51795),
        c = r(27510),
        d = r(44382);
      let u = (0, s.j)("aria-[]", {
          variants: { size: { ...c.Ld } },
          defaultVariants: { size: c.Rc },
        }),
        f = l.forwardRef((e, t) => {
          let { className: r, type: l, size: n = "small", ...o } = e;
          return (0, a.jsx)("input", {
            type: l,
            ref: t,
            ...o,
            className: (0, d.cn)(
              "flex h-10 w-full rounded-md border border-control bg-foreground/[.026] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:opacity-50",
              "aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive",
              u({ size: n }),
              r
            ),
          });
        });
      f.displayName = "Input";
      let m = ["bg-control"],
        p = l.forwardRef((e, t) => {
          let { className: r, ...l } = e;
          return (0, a.jsx)("textarea", {
            className: (0, d.cn)(
              "flex min-h-10 w-full rounded-md border border-control bg-control px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:opacity-50",
              ...m,
              r
            ),
            ref: t,
            ...l,
          });
        });
      p.displayName = "TextArea";
      var g = r(29982),
        x = r(7560),
        v = r(57915);
      let h = (0, l.forwardRef)((e, t) =>
          (0, l.createElement)(
            v.WV.label,
            (0, x.Z)({}, e, {
              ref: t,
              onMouseDown: (t) => {
                var r;
                null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                  !t.defaultPrevented && t.detail > 1 && t.preventDefault();
              },
            })
          )
        ),
        b = (0, s.j)(
          "text-sm text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        y = l.forwardRef((e, t) => {
          let { className: r, ...l } = e;
          return (0, a.jsx)(h, { ref: t, className: (0, d.cn)(b(), r), ...l });
        });
      y.displayName = h.displayName;
      var N = r(42380),
        w = r(89577);
      let j = {
          firstName: {
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            required: !0,
            className: "md:col-span-1",
            component: f,
          },
          secondName: {
            type: "text",
            label: "Last Name",
            placeholder: "Last Name",
            required: !0,
            className: "md:col-span-1",
            component: f,
          },
          companyEmail: {
            type: "text",
            label: "Company Email",
            placeholder: "Company Email",
            required: !0,
            className: "",
            component: f,
          },
          message: {
            type: "textarea",
            label: "What are you interested in?",
            placeholder: "Share more about what you want to accomplish",
            required: !0,
            className:
              "[&_textarea]:min-h-[100px] [&_textarea]:bg-foreground/[.026]",
            component: p,
          },
        },
        k = (e) => /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(e),
        E = [
          "@gmail.com",
          "@yahoo.com",
          "@hotmail.",
          "@outlook.com",
          "@aol.com",
          "@icloud.com",
          "@live.com",
          "@protonmail.com",
          "@mail.com",
          "@example.com",
        ],
        S = (e) => {
          for (let t of E) if (e.includes(t)) return !1;
          return !0;
        },
        R = { firstName: "", secondName: "", companyEmail: "", message: "" };
      var C = (e) => {
        let { className: t } = e,
          [r, n] = (0, l.useState)(R),
          [s, c] = (0, l.useState)(""),
          [u, f] = (0, l.useState)({}),
          [m, p] = (0, l.useState)(!1),
          [x, v] = (0, l.useState)(null),
          [h, b] = (0, l.useState)(0),
          E = (e) => {
            let { name: t, value: r } = e.target;
            f({}), n((e) => ({ ...e, [t]: r }));
          },
          C = () => {
            let e = {};
            for (let t in j)
              j[t].required && !r[t] && (e[t] = "This field is required");
            return (
              r.companyEmail &&
                !k(r.companyEmail) &&
                (e.companyEmail = "Invalid email address"),
              r.companyEmail &&
                !S(r.companyEmail) &&
                (e.companyEmail = "Please use a company email address"),
              f(e),
              0 === Object.keys(e).length && "" === s
            );
          },
          z = async (e) => {
            if ((e.preventDefault(), (Date.now() - h) / 1e3 < 3)) {
              f({
                general: "Submission too fast. Please fill the form correctly.",
              });
              return;
            }
            if (C()) {
              p(!0), v(null);
              try {
                let e = await fetch("/api-v2/submit-form-contact-sales", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(r),
                });
                if (e.ok)
                  v("Thank you for your submission!"),
                    n({
                      firstName: "",
                      secondName: "",
                      companyEmail: "",
                      message: "",
                    });
                else {
                  let t = await e.json();
                  f({ general: "Submission failed: ".concat(t.message) });
                }
              } catch (e) {
                f({
                  general: "An unexpected error occurred. Please try again.",
                });
              } finally {
                p(!1);
              }
            }
          };
        return (
          (0, l.useEffect)(() => {
            b(Date.now());
          }, []),
          (0, a.jsxs)("div", {
            className: (0, d.cn)(
              "flex flex-col gap-4 w-full items-center justify-center min-h-[300px]",
              t
            ),
            children: [
              (0, a.jsx)("div", {
                className:
                  "border rounded-xl bg-surface-75 p-4 md:p-6 w-full lg:max-w-lg min-h-[200px] md:min-h-[400px]",
                children: x
                  ? (0, a.jsxs)("div", {
                      className:
                        "flex flex-col h-full w-full min-w-[300px] gap-4 items-center justify-center opacity-0 transition-opacity animate-fade-in scale-1",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-center text-sm",
                          children: x,
                        }),
                        (0, a.jsx)(g.z, {
                          onClick: (e) => {
                            e.preventDefault(), n(R), v(null), f({});
                          },
                          children: "Reset",
                        }),
                      ],
                    })
                  : (0, a.jsxs)("form", {
                      id: "support-form",
                      className: (0, d.cn)(
                        "flex flex-col lg:grid lg:grid-cols-2 gap-4"
                      ),
                      onSubmit: z,
                      children: [
                        Object.entries(j).map((e) => {
                          let [t, { component: l, ...n }] = e;
                          return (0, a.jsxs)(
                            "div",
                            {
                              className: (0, d.cn)(
                                "flex flex-col col-span-full gap-y-2",
                                n.className
                              ),
                              children: [
                                (0, a.jsxs)(y, {
                                  htmlFor: t,
                                  className:
                                    "text-foreground-light flex justify-between",
                                  children: [
                                    n.label,
                                    (0, a.jsx)("div", {
                                      className: (0, d.cn)(
                                        "flex flex-nowrap text-right gap-1 items-center text-xs leading-none transition-opacity opacity-0 text-foreground-muted",
                                        u[t] && "opacity-100 animate-fade-in"
                                      ),
                                      children: u[t],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(l, {
                                  type: "text",
                                  id: t,
                                  name: t,
                                  value: r[t],
                                  onChange: E,
                                  placeholder: n.placeholder,
                                }),
                              ],
                            },
                            t
                          );
                        }),
                        (0, a.jsx)("input", {
                          type: "text",
                          name: "honeypot",
                          value: s,
                          onChange: (e) => c(e.target.value),
                          style: { display: "none" },
                          "aria-hidden": "true",
                        }),
                        (0, a.jsx)(N.Z, { className: "col-span-full" }),
                        (0, a.jsx)(g.z, {
                          block: !0,
                          htmlType: "submit",
                          size: "small",
                          className: "col-span-full",
                          disabled: m,
                          loading: m,
                          children: "Request a demo",
                        }),
                        (0, a.jsxs)("p", {
                          className:
                            "text-foreground-lighter text-sm col-span-full",
                          children: [
                            "By submitting this form, I confirm that I have read and understood the",
                            " ",
                            (0, a.jsx)(o(), {
                              href: "/privacy",
                              className: "text-foreground hover:underline",
                              children: "Privacy Policy",
                            }),
                            ".",
                          ],
                        }),
                        u.general &&
                          (0, a.jsxs)(w.bZ, {
                            className:
                              "flex gap-2 text-foreground text-sm col-span-full",
                            children: [
                              (0, a.jsx)(i.Z, { className: "w-3 h-3" }),
                              " ",
                              (0, a.jsx)("span", { children: u.general }),
                            ],
                          }),
                      ],
                    }),
              }),
              (0, a.jsxs)("p", {
                className: "text-foreground-lighter text-sm",
                children: [
                  (0, a.jsx)(o(), {
                    href: "/support",
                    className: "text-foreground hover:underline",
                    children: "Contact support",
                  }),
                  " ",
                  "if you need technical help",
                ],
              }),
            ],
          })
        );
      };
    },
    43246: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(55132).Z)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    89577: function (e, t, r) {
      r.d(t, {
        Cd: function () {
          return c;
        },
        X: function () {
          return d;
        },
        bZ: function () {
          return s;
        },
      });
      var a = r(52322),
        l = r(51795),
        n = r(2784),
        o = r(44382);
      let i = (0, l.j)(
          (0, o.cn)(
            "relative w-full text-sm rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
            "[&>svg]:w-[23px] [&>svg]:h-[23px] [&>svg]:p-1 [&>svg]:flex [&>svg]:rounded"
          ),
          {
            variants: {
              variant: {
                default:
                  "text-foreground bg-alternative border [&>svg]:text-background [&>svg]:bg-foreground",
                destructive:
                  "text border-destructive-400 bg-destructive-200 [&>svg]:text-destructive-200 [&>svg]:bg-destructive-600",
                warning:
                  "border-warning-400 bg-warning-200 [&>svg]:text-warning-200 [&>svg]:bg-warning-600",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        s = n.forwardRef((e, t) => {
          let { className: r, variant: l, ...n } = e;
          return (0, a.jsx)("div", {
            ref: t,
            role: "alert",
            className: (0, o.cn)(i({ variant: l }), r),
            ...n,
          });
        });
      s.displayName = "Alert";
      let c = n.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, a.jsx)("h5", {
          ref: t,
          className: (0, o.cn)("mb-1", r),
          ...l,
        });
      });
      c.displayName = "AlertTitle";
      let d = n.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, o.cn)(
            "text-sm [&_p]:leading-relaxed text-foreground-light font-normal",
            r
          ),
          ...l,
        });
      });
      d.displayName = "AlertDescription";
    },
    42380: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var a = r(52322),
        l = r(7560),
        n = r(2784),
        o = r(57915);
      let i = "horizontal",
        s = ["horizontal", "vertical"],
        c = (0, n.forwardRef)((e, t) => {
          let { decorative: r, orientation: a = i, ...s } = e,
            c = d(a) ? a : i;
          return (0, n.createElement)(
            o.WV.div,
            (0, l.Z)(
              { "data-orientation": c },
              r
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === c ? c : void 0,
                    role: "separator",
                  },
              s,
              { ref: t }
            )
          );
        });
      function d(e) {
        return s.includes(e);
      }
      c.propTypes = {
        orientation(e, t, r) {
          let a = e[t],
            l = String(a);
          return a && !d(a)
            ? Error(`Invalid prop \`orientation\` of value \`${l}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`)
            : null;
        },
      };
      var u = r(44382);
      let f = n.forwardRef((e, t) => {
        let {
          className: r,
          orientation: l = "horizontal",
          decorative: n = !0,
          ...o
        } = e;
        return (0, a.jsx)(c, {
          ref: t,
          decorative: n,
          orientation: l,
          className: (0, u.cn)(
            "shrink-0 bg-border-muted",
            "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...o,
        });
      });
      f.displayName = c.displayName;
    },
  },
]);
