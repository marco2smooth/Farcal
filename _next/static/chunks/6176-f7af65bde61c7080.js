(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6176],
  {
    94920: function (e) {
      e.exports = function (e) {
        var l = "true false yes no null",
          s = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
          o = {
            className: "string",
            relevance: 0,
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /\S+/ },
            ],
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                className: "template-variable",
                variants: [
                  { begin: /\{\{/, end: /\}\}/ },
                  { begin: /%\{/, end: /\}/ },
                ],
              },
            ],
          },
          n = e.inherit(o, {
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /[^\s,{}[\]]+/ },
            ],
          }),
          t = {
            end: ",",
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: l,
            relevance: 0,
          },
          r = [
            {
              className: "attr",
              variants: [
                { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
                { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
                { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
              ],
            },
            { className: "meta", begin: "^---\\s*$", relevance: 10 },
            {
              className: "string",
              begin:
                "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
            },
            {
              begin: "<%[%=-]?",
              end: "[%-]?%>",
              subLanguage: "ruby",
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
            },
            { className: "type", begin: "!\\w+!" + s },
            { className: "type", begin: "!<" + s + ">" },
            { className: "type", begin: "!" + s },
            { className: "type", begin: "!!" + s },
            { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
            e.HASH_COMMENT_MODE,
            { beginKeywords: l, keywords: { literal: l } },
            {
              className: "number",
              begin:
                "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
            },
            { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
            {
              begin: /\{/,
              end: /\}/,
              contains: [t],
              illegal: "\\n",
              relevance: 0,
            },
            {
              begin: "\\[",
              end: "\\]",
              contains: [t],
              illegal: "\\n",
              relevance: 0,
            },
            o,
          ],
          a = [...r];
        return (
          a.pop(),
          a.push(n),
          (t.contains = a),
          { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: r }
        );
      };
    },
    97939: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return y;
        },
      });
      var o = s(52322),
        n = s(16474),
        t = s(10963),
        r = s(15159),
        a = s(15481),
        i = s(22965),
        c = s(2784),
        d = s(72282),
        h = s.n(d),
        g = s(19469),
        u = s(27666),
        m = s(86497),
        j = s(83667),
        b = s(54299),
        p = s(14969),
        f = s(78894),
        x = s(44382),
        E = s(29982),
        v = {
          dark: {
            hljs: {
              display: "block",
              overflowX: "auto",
              padding: "0.5em",
              background: "#161616",
              color: "#ddd",
            },
            "hljs-tag": { color: "#569cd6" },
            "hljs-keyword": { color: "#569cd6", fontWeight: "normal" },
            "hljs-selector-tag": { color: "#569cd6", fontWeight: "normal" },
            "hljs-literal": { color: "#569cd6", fontWeight: "normal" },
            "hljs-strong": { color: "#569cd6" },
            "hljs-name": { color: "#569cd6" },
            "hljs-code": { color: "#66d9ef" },
            "hljs-class .hljs-title": { color: "gray" },
            "hljs-attribute": { color: "#bf79db" },
            "hljs-symbol": { color: "#bf79db" },
            "hljs-regexp": { color: "#bf79db" },
            "hljs-link": { color: "#bf79db" },
            "hljs-string": { color: "#3ECF8E" },
            "hljs-bullet": { color: "#3ECF8E" },
            "hljs-subst": { color: "#3ECF8E" },
            "hljs-title": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-section": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-emphasis": { color: "#3ECF8E" },
            "hljs-type": { color: "#3ECF8E", fontWeight: "normal" },
            "hljs-built_in": { color: "#3ECF8E" },
            "hljs-builtin-name": { color: "#3ECF8E" },
            "hljs-selector-attr": { color: "#3ECF8E" },
            "hljs-selector-pseudo": { color: "#3ECF8E" },
            "hljs-addition": { color: "#3ECF8E" },
            "hljs-variable": { color: "#3ECF8E" },
            "hljs-template-tag": { color: "#3ECF8E" },
            "hljs-template-variable": { color: "#3ECF8E" },
            "hljs-comment": { color: "#75715e" },
            "hljs-quote": { color: "#75715e" },
            "hljs-deletion": { color: "#75715e" },
            "hljs-meta": { color: "#75715e" },
            "hljs-doctag": { fontWeight: "normal" },
            "hljs-selector-id": { fontWeight: "normal" },
          },
          light: {
            hljs: {
              display: "block",
              overflowX: "auto",
              padding: "0.5em",
              background: "#f9f9f9",
              color: "#24292f",
            },
            "hljs-tag": { color: "#0550ae" },
            "hljs-keyword": { color: "#0550ae", fontWeight: "normal" },
            "hljs-selector-tag": { color: "#0550ae", fontWeight: "normal" },
            "hljs-literal": { color: "#0550ae", fontWeight: "normal" },
            "hljs-strong": { color: "#0550ae" },
            "hljs-name": { color: "#0550ae" },
            "hljs-code": { color: "#66d9ef" },
            "hljs-class .hljs-title": { color: "gray" },
            "hljs-attribute": { color: "#bf79db" },
            "hljs-symbol": { color: "#bf79db" },
            "hljs-regexp": { color: "#bf79db" },
            "hljs-link": { color: "#bf79db" },
            "hljs-string": { color: "#1B9657" },
            "hljs-bullet": { color: "#1B9657" },
            "hljs-subst": { color: "#1B9657" },
            "hljs-title": { color: "#1B9657", fontWeight: "normal" },
            "hljs-section": { color: "#1B9657", fontWeight: "normal" },
            "hljs-emphasis": { color: "#1B9657" },
            "hljs-type": { color: "#1B9657", fontWeight: "normal" },
            "hljs-built_in": { color: "#1B9657" },
            "hljs-builtin-name": { color: "#1B9657" },
            "hljs-selector-attr": { color: "#1B9657" },
            "hljs-selector-pseudo": { color: "#1B9657" },
            "hljs-addition": { color: "#1B9657" },
            "hljs-variable": { color: "#1B9657" },
            "hljs-template-tag": { color: "#1B9657" },
            "hljs-template-variable": { color: "#1B9657" },
            "hljs-comment": { color: "#75715e" },
            "hljs-quote": { color: "#75715e" },
            "hljs-deletion": { color: "#75715e" },
            "hljs-meta": { color: "#75715e" },
            "hljs-doctag": { fontWeight: "normal" },
            "hljs-selector-id": { fontWeight: "normal" },
          },
        },
        y = function (e) {
          let { resolvedTheme: l } = (0, i.F)(),
            s = null == l ? void 0 : l.includes("dark"),
            [d, y] = (0, c.useState)(!1),
            [N, k] = (0, c.useState)(!1),
            Z = e.children ? e.children.split("\n")[0] : "",
            w = "";
          Z.includes("filename =") && (w = Z.split("=")[1]);
          let C =
              e.children && w
                ? e.children.replace("".concat(Z, "\n\n"), "")
                : e.children,
            W = () => {
              y(!0),
                setTimeout(() => {
                  y(!1);
                }, 1e3);
            },
            B = e.lang
              ? e.lang
              : e.className
              ? e.className.replace("language-", "")
              : "js";
          return ("jsx" === B && (B = "js"),
          g.Z.registerLanguage("js", m.Z),
          g.Z.registerLanguage("py", b.Z),
          g.Z.registerLanguage("sql", p.Z),
          g.Z.registerLanguage("bash", u.Z),
          g.Z.registerLanguage("kotlin", j.Z),
          g.Z.registerLanguage("yaml", f.Z),
          (0, c.useEffect)(() => {
            k(!0);
          }, []),
          N)
            ? (0, o.jsxs)("div", {
                className: "not-prose dark overflow-hidden",
                children: [
                  w &&
                    (0, o.jsxs)("div", {
                      className:
                        " bg-background text-muted flex h-8 w-full items-center  gap-1 rounded-tr rounded-tl  border-t  border-r border-l px-4 font-sans ",
                      children: [
                        "bash" === B
                          ? (0, o.jsx)(n.Z, { size: 12, strokeWidth: 2 })
                          : (0, o.jsx)(t.Z, { size: 12, strokeWidth: 2 }),
                        (0, o.jsx)("span", {
                          className: "text-xs",
                          children: null != w ? w : "index.js",
                        }),
                      ],
                    }),
                  (0, o.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, o.jsx)(g.Z, {
                        language: B,
                        style: s ? v.dark : v.light,
                        className: (0, x.cn)(
                          "synthax-highlighter border border-default/15 rounded-lg",
                          !w && "rounded-t-lg",
                          "rounded-b-lg",
                          e.className
                        ),
                        customStyle: {
                          padding: e.showLineNumbers
                            ? "1rem 0.8rem"
                            : "1.25rem 1.5rem",
                          fontSize: "0.775rem",
                          lineHeight: 1.4,
                        },
                        showLineNumbers: e.showLineNumbers,
                        lineNumberStyle: {
                          padding: "0px",
                          marginRight: "21px",
                          minWidth: "1.5em",
                          opacity: "0.3",
                          fontSize: "0.75rem",
                        },
                        children: C,
                      }),
                      !e.hideCopy && e.children
                        ? (0, o.jsx)("div", {
                            className: "absolute right-2 top-2",
                            children: (0, o.jsx)(h(), {
                              text: e.children,
                              children: (0, o.jsx)(E.z, {
                                type: "text",
                                icon: d
                                  ? (0, o.jsx)("span", {
                                      className: "text-brand",
                                      children: (0, o.jsx)(r.Z, {
                                        strokeWidth: 3,
                                      }),
                                    })
                                  : (0, o.jsx)(a.Z, {}),
                                onClick: () => W(),
                                "aria-label": "Copy",
                                className:
                                  "px-1.5 py-1.5 border border-transparent hover:border-strong",
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null;
        };
    },
    66176: function (e, l, s) {
      "use strict";
      s.r(l);
      var o = s(52322);
      s(31395);
      var n = s(39097),
        t = s.n(n),
        r = s(2784),
        a = s(41401),
        i = s(29982),
        c = s(93419),
        d = s(97939),
        h = s(99);
      l.default = function (e) {
        let [l, s] = (0, r.useState)(void 0),
          [n, g] = (0, r.useState)(0);
        return (0, o.jsxs)("div", {
          className: "grid grid-cols-12 lg:gap-16",
          children: [
            (0, o.jsxs)("div", {
              className: "col-span-12 pb-8 lg:col-span-5 xl:col-span-5",
              children: [
                (0, o.jsx)("h2", { className: "h3", children: e.title }),
                (0, o.jsx)("div", { className: "p", children: e.text }),
                e.documentation_link &&
                  (0, o.jsx)(i.z, {
                    asChild: !0,
                    size: "small",
                    className: "mt-4",
                    type: "default",
                    icon: (0, o.jsx)(h.Z, {}),
                    children: (0, o.jsx)(t(), {
                      href: e.documentation_link,
                      as: e.documentation_link,
                      children: "Explore documentation",
                    }),
                  }),
                e.footer &&
                  (0, o.jsx)("div", { className: "py-8", children: e.footer }),
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7",
              children: [
                (0, o.jsx)(c.Z, {
                  scrollable: !0,
                  activeId: n.toString(),
                  onChange: (e) => {
                    var s;
                    g((s = Number(e))), l.slideTo(s);
                  },
                  children:
                    e.content &&
                    e.content.map((e, l) =>
                      (0, o.jsx)(
                        c.Z.Panel,
                        {
                          label: e.title,
                          id: l.toString(),
                          children: (0, o.jsx)("span", {}, l),
                        },
                        l
                      )
                    ),
                }),
                (0, o.jsx)("div", {
                  className: "overflow-hidden",
                  children: (0, o.jsx)(a.tq, {
                    onSwiper: s,
                    style: { zIndex: 0, marginRight: "1px" },
                    initialSlide: n,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 300,
                    allowTouchMove: !1,
                    autoHeight: !!e.autoHeight && e.autoHeight,
                    children:
                      e.content &&
                      e.content.map((l, s) =>
                        (0, o.jsx)(
                          a.o5,
                          {
                            children: (0, o.jsx)(
                              d.Z,
                              {
                                lang: l.lang,
                                size: e.size ? e.size : "small",
                                children: l.code,
                              },
                              s
                            ),
                          },
                          s
                        )
                      ),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    15481: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return o;
        },
      });
      let o = (0, s(55132).Z)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    10963: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return o;
        },
      });
      let o = (0, s(55132).Z)("File", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
      ]);
    },
    16474: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return o;
        },
      });
      let o = (0, s(55132).Z)("Terminal", [
        ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
      ]);
    },
    78894: function (e, l, s) {
      "use strict";
      var o = s(14859);
      l.Z = void 0;
      var n = o(s(94920)).default;
      l.Z = n;
    },
  },
]);
