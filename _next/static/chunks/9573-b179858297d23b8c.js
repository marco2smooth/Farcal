(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9573],
  {
    98283: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
          }
        return n;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    14859: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    50381: function (e, t, n) {
      "use strict";
      var r = n(91706),
        a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          o,
          i,
          c,
          s,
          l,
          u,
          g,
          d = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((s = r()),
            (l = document.createRange()),
            (u = document.getSelection()),
            ((g = document.createElement("span")).textContent = e),
            (g.ariaHidden = "true"),
            (g.style.all = "unset"),
            (g.style.position = "fixed"),
            (g.style.top = 0),
            (g.style.clip = "rect(0, 0, 0, 0)"),
            (g.style.whiteSpace = "pre"),
            (g.style.webkitUserSelect = "text"),
            (g.style.MozUserSelect = "text"),
            (g.style.msUserSelect = "text"),
            (g.style.userSelect = "text"),
            g.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = a[t.format] || a.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(g),
            l.selectNodeContents(g),
            u.addRange(l),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (r) {
          i && console.error("unable to copy using execCommand: ", r),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (r) {
            i && console.error("unable to copy using clipboardData: ", r),
              i && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (o =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (c = n.replace(/#{\s*key\s*}/g, o)),
              window.prompt(c, e);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(l)
              : u.removeAllRanges()),
            g && document.body.removeChild(g),
            s();
        }
        return d;
      };
    },
    41536: function (e, t, n) {
      "use strict";
      var r = n(149),
        a = o(Error);
      function o(e) {
        return (t.displayName = e.displayName || e.name), t;
        function t(t) {
          return t && (t = r.apply(null, arguments)), new e(t);
        }
      }
      (e.exports = a),
        (a.eval = o(EvalError)),
        (a.range = o(RangeError)),
        (a.reference = o(ReferenceError)),
        (a.syntax = o(SyntaxError)),
        (a.type = o(TypeError)),
        (a.uri = o(URIError)),
        (a.create = o);
    },
    149: function (e) {
      !(function () {
        var t;
        function n(e) {
          for (
            var t,
              n,
              r,
              a,
              o = 1,
              i = [].slice.call(arguments),
              c = 0,
              s = e.length,
              l = "",
              u = !1,
              g = !1,
              d = function () {
                return i[o++];
              };
            c < s;
            ++c
          )
            if (((t = e[c]), u))
              switch (
                ((u = !1),
                "." == t
                  ? ((g = !1), (t = e[++c]))
                  : "0" == t && "." == e[c + 1]
                  ? ((g = !0), (c += 2), (t = e[c]))
                  : (g = !0),
                (a = (function () {
                  for (var n = ""; /\d/.test(e[c]); ) (n += e[c++]), (t = e[c]);
                  return n.length > 0 ? parseInt(n) : null;
                })()),
                t)
              ) {
                case "b":
                  l += parseInt(d(), 10).toString(2);
                  break;
                case "c":
                  "string" == typeof (n = d()) || n instanceof String
                    ? (l += n)
                    : (l += String.fromCharCode(parseInt(n, 10)));
                  break;
                case "d":
                  l += parseInt(d(), 10);
                  break;
                case "f":
                  (r = String(parseFloat(d()).toFixed(a || 6))),
                    (l += g ? r : r.replace(/^0/, ""));
                  break;
                case "j":
                  l += JSON.stringify(d());
                  break;
                case "o":
                  l += "0" + parseInt(d(), 10).toString(8);
                  break;
                case "s":
                  l += d();
                  break;
                case "x":
                  l += "0x" + parseInt(d(), 10).toString(16);
                  break;
                case "X":
                  l += "0x" + parseInt(d(), 10).toString(16).toUpperCase();
                  break;
                default:
                  l += t;
              }
            else "%" === t ? (u = !0) : (l += t);
          return l;
        }
        ((t = e.exports = n).format = n),
          (t.vsprintf = function (e, t) {
            return n.apply(null, [e].concat(t));
          }),
          "undefined" != typeof console &&
            "function" == typeof console.log &&
            (t.printf = function () {
              console.log(n.apply(null, arguments));
            });
      })();
    },
    71978: function (e) {
      function t(e) {
        return (
          e instanceof Map
            ? (e.clear =
                e.delete =
                e.set =
                  function () {
                    throw Error("map is read-only");
                  })
            : e instanceof Set &&
              (e.add =
                e.clear =
                e.delete =
                  function () {
                    throw Error("set is read-only");
                  }),
          Object.freeze(e),
          Object.getOwnPropertyNames(e).forEach(function (n) {
            var r = e[n];
            "object" != typeof r || Object.isFrozen(r) || t(r);
          }),
          e
        );
      }
      t.default = t;
      class n {
        constructor(e) {
          void 0 === e.data && (e.data = {}),
            (this.data = e.data),
            (this.isMatchIgnored = !1);
        }
        ignoreMatch() {
          this.isMatchIgnored = !0;
        }
      }
      function r(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
      }
      function a(e, ...t) {
        let n = Object.create(null);
        for (let t in e) n[t] = e[t];
        return (
          t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
          }),
          n
        );
      }
      let o = (e) => !!e.kind;
      class i {
        constructor(e, t) {
          (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
        }
        addText(e) {
          this.buffer += r(e);
        }
        openNode(e) {
          if (!o(e)) return;
          let t = e.kind;
          e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t);
        }
        closeNode(e) {
          o(e) && (this.buffer += "</span>");
        }
        value() {
          return this.buffer;
        }
        span(e) {
          this.buffer += `<span class="${e}">`;
        }
      }
      class c {
        constructor() {
          (this.rootNode = { children: [] }), (this.stack = [this.rootNode]);
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(e) {
          this.top.children.push(e);
        }
        openNode(e) {
          let t = { kind: e, children: [] };
          this.add(t), this.stack.push(t);
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(); );
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(e) {
          return this.constructor._walk(e, this.rootNode);
        }
        static _walk(e, t) {
          return (
            "string" == typeof t
              ? e.addText(t)
              : t.children &&
                (e.openNode(t),
                t.children.forEach((t) => this._walk(e, t)),
                e.closeNode(t)),
            e
          );
        }
        static _collapse(e) {
          "string" != typeof e &&
            e.children &&
            (e.children.every((e) => "string" == typeof e)
              ? (e.children = [e.children.join("")])
              : e.children.forEach((e) => {
                  c._collapse(e);
                }));
        }
      }
      class s extends c {
        constructor(e) {
          super(), (this.options = e);
        }
        addKeyword(e, t) {
          "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
        }
        addText(e) {
          "" !== e && this.add(e);
        }
        addSublanguage(e, t) {
          let n = e.root;
          (n.kind = t), (n.sublanguage = !0), this.add(n);
        }
        toHTML() {
          return new i(this, this.options).value();
        }
        finalize() {
          return !0;
        }
      }
      function l(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      let u = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
        g = "[a-zA-Z]\\w*",
        d = "[a-zA-Z_]\\w*",
        f = "\\b\\d+(\\.\\d+)?",
        p =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        h = "\\b(0b[01]+)",
        b = { begin: "\\\\[\\s\\S]", relevance: 0 },
        m = {
          begin:
            /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        },
        y = function (e, t, n = {}) {
          let r = a(
            { className: "comment", begin: e, end: t, contains: [] },
            n
          );
          return (
            r.contains.push(m),
            r.contains.push({
              className: "doctag",
              begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
              relevance: 0,
            }),
            r
          );
        },
        v = y("//", "$"),
        _ = y("/\\*", "\\*/"),
        E = y("#", "$");
      var w = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: g,
        UNDERSCORE_IDENT_RE: d,
        NUMBER_RE: f,
        C_NUMBER_RE: p,
        BINARY_NUMBER_RE: h,
        RE_STARTERS_RE:
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
          let t = /^#![ ]*\//;
          return (
            e.binary &&
              (e.begin = (function (...e) {
                return e.map((e) => l(e)).join("");
              })(t, /.*\b/, e.binary, /\b.*/)),
            a(
              {
                className: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                  0 !== e.index && t.ignoreMatch();
                },
              },
              e
            )
          );
        },
        BACKSLASH_ESCAPE: b,
        APOS_STRING_MODE: {
          className: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [b],
        },
        QUOTE_STRING_MODE: {
          className: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [b],
        },
        PHRASAL_WORDS_MODE: m,
        COMMENT: y,
        C_LINE_COMMENT_MODE: v,
        C_BLOCK_COMMENT_MODE: _,
        HASH_COMMENT_MODE: E,
        NUMBER_MODE: { className: "number", begin: f, relevance: 0 },
        C_NUMBER_MODE: { className: "number", begin: p, relevance: 0 },
        BINARY_NUMBER_MODE: { className: "number", begin: h, relevance: 0 },
        CSS_NUMBER_MODE: {
          className: "number",
          begin:
            f +
            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0,
        },
        REGEXP_MODE: {
          begin: /(?=\/[^/\n]*\/)/,
          contains: [
            {
              className: "regexp",
              begin: /\//,
              end: /\/[gimuy]*/,
              illegal: /\n/,
              contains: [
                b,
                { begin: /\[/, end: /\]/, relevance: 0, contains: [b] },
              ],
            },
          ],
        },
        TITLE_MODE: { className: "title", begin: g, relevance: 0 },
        UNDERSCORE_TITLE_MODE: { className: "title", begin: d, relevance: 0 },
        METHOD_GUARD: { begin: "\\.\\s*" + d, relevance: 0 },
        END_SAME_AS_BEGIN: function (e) {
          return Object.assign(e, {
            "on:begin": (e, t) => {
              t.data._beginMatch = e[1];
            },
            "on:end": (e, t) => {
              t.data._beginMatch !== e[1] && t.ignoreMatch();
            },
          });
        },
      });
      function N(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch();
      }
      function x(e, t) {
        t &&
          e.beginKeywords &&
          ((e.begin =
            "\\b(" +
            e.beginKeywords.split(" ").join("|") +
            ")(?!\\.)(?=\\b|\\s)"),
          (e.__beforeBegin = N),
          (e.keywords = e.keywords || e.beginKeywords),
          delete e.beginKeywords,
          void 0 === e.relevance && (e.relevance = 0));
      }
      function O(e, t) {
        Array.isArray(e.illegal) &&
          (e.illegal = (function (...e) {
            return "(" + e.map((e) => l(e)).join("|") + ")";
          })(...e.illegal));
      }
      function S(e, t) {
        if (e.match) {
          if (e.begin || e.end)
            throw Error("begin & end are not supported with match");
          (e.begin = e.match), delete e.match;
        }
      }
      function R(e, t) {
        void 0 === e.relevance && (e.relevance = 1);
      }
      let k = [
          "of",
          "and",
          "for",
          "in",
          "not",
          "or",
          "if",
          "then",
          "parent",
          "list",
          "value",
        ],
        j = {
          "after:highlightElement": ({ el: e, result: t, text: n }) => {
            let a = C(e);
            if (!a.length) return;
            let o = document.createElement("div");
            (o.innerHTML = t.value),
              (t.value = (function (e, t, n) {
                let a = 0,
                  o = "",
                  i = [];
                function c() {
                  return e.length && t.length
                    ? e[0].offset !== t[0].offset
                      ? e[0].offset < t[0].offset
                        ? e
                        : t
                      : "start" === t[0].event
                      ? e
                      : t
                    : e.length
                    ? e
                    : t;
                }
                function s(e) {
                  o +=
                    "<" +
                    A(e) +
                    [].map
                      .call(e.attributes, function (e) {
                        return " " + e.nodeName + '="' + r(e.value) + '"';
                      })
                      .join("") +
                    ">";
                }
                function l(e) {
                  o += "</" + A(e) + ">";
                }
                function u(e) {
                  ("start" === e.event ? s : l)(e.node);
                }
                for (; e.length || t.length; ) {
                  let t = c();
                  if (
                    ((o += r(n.substring(a, t[0].offset))),
                    (a = t[0].offset),
                    t === e)
                  ) {
                    i.reverse().forEach(l);
                    do u(t.splice(0, 1)[0]), (t = c());
                    while (t === e && t.length && t[0].offset === a);
                    i.reverse().forEach(s);
                  } else
                    "start" === t[0].event ? i.push(t[0].node) : i.pop(),
                      u(t.splice(0, 1)[0]);
                }
                return o + r(n.substr(a));
              })(a, C(o), n));
          },
        };
      function A(e) {
        return e.nodeName.toLowerCase();
      }
      function C(e) {
        let t = [];
        return (
          !(function e(n, r) {
            for (let a = n.firstChild; a; a = a.nextSibling)
              3 === a.nodeType
                ? (r += a.nodeValue.length)
                : 1 !== a.nodeType ||
                  (t.push({ event: "start", offset: r, node: a }),
                  (r = e(a, r)),
                  A(a).match(/br|hr|img|input/) ||
                    t.push({ event: "stop", offset: r, node: a }));
            return r;
          })(e, 0),
          t
        );
      }
      let M = {},
        L = (e) => {
          console.error(e);
        },
        D = (e, ...t) => {
          console.log(`WARN: ${e}`, ...t);
        },
        T = (e, t) => {
          M[`${e}/${t}`] ||
            (console.log(`Deprecated as of ${e}. ${t}`), (M[`${e}/${t}`] = !0));
        },
        I = Symbol("nomatch");
      var P = (function (e) {
        let o = Object.create(null),
          i = Object.create(null),
          c = [],
          g = !0,
          d = /(^(<[^>]+>|\t|)+|\n)/gm,
          f =
            "Could not find the language '{}', did you forget to load/include a language module?",
          p = { disableAutodetect: !0, name: "Plain text", contains: [] },
          h = {
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: null,
            __emitter: s,
          };
        function b(e) {
          return h.noHighlightRe.test(e);
        }
        function m(e, t, n, r) {
          let a = "",
            o = "";
          "object" == typeof t
            ? ((a = e), (n = t.ignoreIllegals), (o = t.language), (r = void 0))
            : (T(
                "10.7.0",
                "highlight(lang, code, ...args) has been deprecated."
              ),
              T(
                "10.7.0",
                "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
              ),
              (o = e),
              (a = t));
          let i = { code: a, language: o };
          $("before:highlight", i);
          let c = i.result ? i.result : y(i.language, i.code, n, r);
          return (c.code = i.code), $("after:highlight", c), c;
        }
        function y(e, t, i, s) {
          function d() {
            null != N.subLanguage
              ? (function () {
                  if ("" === C) return;
                  let e = null;
                  if ("string" == typeof N.subLanguage) {
                    if (!o[N.subLanguage]) {
                      A.addText(C);
                      return;
                    }
                    (e = y(N.subLanguage, C, !0, j[N.subLanguage])),
                      (j[N.subLanguage] = e.top);
                  } else e = v(C, N.subLanguage.length ? N.subLanguage : null);
                  N.relevance > 0 && (D += e.relevance),
                    A.addSublanguage(e.emitter, e.language);
                })()
              : (function () {
                  if (!N.keywords) {
                    A.addText(C);
                    return;
                  }
                  let e = 0;
                  N.keywordPatternRe.lastIndex = 0;
                  let t = N.keywordPatternRe.exec(C),
                    n = "";
                  for (; t; ) {
                    n += C.substring(e, t.index);
                    let r = (function (e, t) {
                      let n = _.case_insensitive ? t[0].toLowerCase() : t[0];
                      return (
                        Object.prototype.hasOwnProperty.call(e.keywords, n) &&
                        e.keywords[n]
                      );
                    })(N, t);
                    if (r) {
                      let [e, a] = r;
                      if ((A.addText(n), (n = ""), (D += a), e.startsWith("_")))
                        n += t[0];
                      else {
                        let n = _.classNameAliases[e] || e;
                        A.addKeyword(t[0], n);
                      }
                    } else n += t[0];
                    (e = N.keywordPatternRe.lastIndex),
                      (t = N.keywordPatternRe.exec(C));
                  }
                  (n += C.substr(e)), A.addText(n);
                })(),
              (C = "");
          }
          function p(e) {
            return (
              e.className &&
                A.openNode(_.classNameAliases[e.className] || e.className),
              (N = Object.create(e, { parent: { value: N } }))
            );
          }
          let b = {};
          function m(r, a) {
            let o = a && a[0];
            if (((C += r), null == o)) return d(), 0;
            if (
              "begin" === b.type &&
              "end" === a.type &&
              b.index === a.index &&
              "" === o
            ) {
              if (((C += t.slice(a.index, a.index + 1)), !g)) {
                let t = Error("0 width match regex");
                throw ((t.languageName = e), (t.badRule = b.rule), t);
              }
              return 1;
            }
            if (((b = a), "begin" === a.type))
              return (function (e) {
                let t = e[0],
                  r = e.rule,
                  a = new n(r);
                for (let n of [r.__beforeBegin, r["on:begin"]])
                  if (n && (n(e, a), a.isMatchIgnored))
                    return 0 === N.matcher.regexIndex
                      ? ((C += t[0]), 1)
                      : ((B = !0), 0);
                return (
                  r &&
                    r.endSameAsBegin &&
                    (r.endRe = RegExp(
                      t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                      "m"
                    )),
                  r.skip
                    ? (C += t)
                    : (r.excludeBegin && (C += t),
                      d(),
                      r.returnBegin || r.excludeBegin || (C = t)),
                  p(r),
                  r.returnBegin ? 0 : t.length
                );
              })(a);
            if ("illegal" !== a.type || i) {
              if ("end" === a.type) {
                let e = (function (e) {
                  let r = e[0],
                    a = t.substr(e.index),
                    o = (function e(t, r, a) {
                      let o = (function (e, t) {
                        let n = e && e.exec(t);
                        return n && 0 === n.index;
                      })(t.endRe, a);
                      if (o) {
                        if (t["on:end"]) {
                          let e = new n(t);
                          t["on:end"](r, e), e.isMatchIgnored && (o = !1);
                        }
                        if (o) {
                          for (; t.endsParent && t.parent; ) t = t.parent;
                          return t;
                        }
                      }
                      if (t.endsWithParent) return e(t.parent, r, a);
                    })(N, e, a);
                  if (!o) return I;
                  let i = N;
                  i.skip
                    ? (C += r)
                    : (i.returnEnd || i.excludeEnd || (C += r),
                      d(),
                      i.excludeEnd && (C = r));
                  do
                    N.className && A.closeNode(),
                      N.skip || N.subLanguage || (D += N.relevance),
                      (N = N.parent);
                  while (N !== o.parent);
                  return (
                    o.starts &&
                      (o.endSameAsBegin && (o.starts.endRe = o.endRe),
                      p(o.starts)),
                    i.returnEnd ? 0 : r.length
                  );
                })(a);
                if (e !== I) return e;
              }
            } else {
              let e = Error(
                'Illegal lexeme "' +
                  o +
                  '" for mode "' +
                  (N.className || "<unnamed>") +
                  '"'
              );
              throw ((e.mode = N), e);
            }
            if ("illegal" === a.type && "" === o) return 1;
            if (P > 1e5 && P > 3 * a.index)
              throw Error(
                "potential infinite loop, way more iterations than matches"
              );
            return (C += o), o.length;
          }
          let _ = M(e);
          if (!_)
            throw (
              (L(f.replace("{}", e)), Error('Unknown language: "' + e + '"'))
            );
          let E = (function (e, { plugins: t }) {
              function n(t, n) {
                return RegExp(
                  l(t),
                  "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : "")
                );
              }
              class r {
                constructor() {
                  (this.matchIndexes = {}),
                    (this.regexes = []),
                    (this.matchAt = 1),
                    (this.position = 0);
                }
                addRule(e, t) {
                  (t.position = this.position++),
                    (this.matchIndexes[this.matchAt] = t),
                    this.regexes.push([t, e]),
                    (this.matchAt +=
                      RegExp(e.toString() + "|").exec("").length - 1 + 1);
                }
                compile() {
                  0 === this.regexes.length && (this.exec = () => null);
                  let e = this.regexes.map((e) => e[1]);
                  (this.matcherRe = n(
                    (function (e, t = "|") {
                      let n = 0;
                      return e
                        .map((e) => {
                          let t = (n += 1),
                            r = l(e),
                            a = "";
                          for (; r.length > 0; ) {
                            let e = u.exec(r);
                            if (!e) {
                              a += r;
                              break;
                            }
                            (a += r.substring(0, e.index)),
                              (r = r.substring(e.index + e[0].length)),
                              "\\" === e[0][0] && e[1]
                                ? (a += "\\" + String(Number(e[1]) + t))
                                : ((a += e[0]), "(" === e[0] && n++);
                          }
                          return a;
                        })
                        .map((e) => `(${e})`)
                        .join(t);
                    })(e),
                    !0
                  )),
                    (this.lastIndex = 0);
                }
                exec(e) {
                  this.matcherRe.lastIndex = this.lastIndex;
                  let t = this.matcherRe.exec(e);
                  if (!t) return null;
                  let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                    r = this.matchIndexes[n];
                  return t.splice(0, n), Object.assign(t, r);
                }
              }
              class o {
                constructor() {
                  (this.rules = []),
                    (this.multiRegexes = []),
                    (this.count = 0),
                    (this.lastIndex = 0),
                    (this.regexIndex = 0);
                }
                getMatcher(e) {
                  if (this.multiRegexes[e]) return this.multiRegexes[e];
                  let t = new r();
                  return (
                    this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
                    t.compile(),
                    (this.multiRegexes[e] = t),
                    t
                  );
                }
                resumingScanAtSamePosition() {
                  return 0 !== this.regexIndex;
                }
                considerAll() {
                  this.regexIndex = 0;
                }
                addRule(e, t) {
                  this.rules.push([e, t]), "begin" === t.type && this.count++;
                }
                exec(e) {
                  let t = this.getMatcher(this.regexIndex);
                  t.lastIndex = this.lastIndex;
                  let n = t.exec(e);
                  if (this.resumingScanAtSamePosition()) {
                    if (n && n.index === this.lastIndex);
                    else {
                      let t = this.getMatcher(0);
                      (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                    }
                  }
                  return (
                    n &&
                      ((this.regexIndex += n.position + 1),
                      this.regexIndex === this.count && this.considerAll()),
                    n
                  );
                }
              }
              if (
                (e.compilerExtensions || (e.compilerExtensions = []),
                e.contains && e.contains.includes("self"))
              )
                throw Error(
                  "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
                );
              return (
                (e.classNameAliases = a(e.classNameAliases || {})),
                (function t(r, i) {
                  if (r.isCompiled) return r;
                  [S].forEach((e) => e(r, i)),
                    e.compilerExtensions.forEach((e) => e(r, i)),
                    (r.__beforeBegin = null),
                    [x, O, R].forEach((e) => e(r, i)),
                    (r.isCompiled = !0);
                  let c = null;
                  if (
                    ("object" == typeof r.keywords &&
                      ((c = r.keywords.$pattern), delete r.keywords.$pattern),
                    r.keywords &&
                      (r.keywords = (function e(t, n, r = "keyword") {
                        let a = {};
                        return (
                          "string" == typeof t
                            ? o(r, t.split(" "))
                            : Array.isArray(t)
                            ? o(r, t)
                            : Object.keys(t).forEach(function (r) {
                                Object.assign(a, e(t[r], n, r));
                              }),
                          a
                        );
                        function o(e, t) {
                          n && (t = t.map((e) => e.toLowerCase())),
                            t.forEach(function (t) {
                              var n, r;
                              let o = t.split("|");
                              a[o[0]] = [
                                e,
                                ((n = o[0]),
                                (r = o[1])
                                  ? Number(r)
                                  : k.includes(n.toLowerCase())
                                  ? 0
                                  : 1),
                              ];
                            });
                        }
                      })(r.keywords, e.case_insensitive)),
                    r.lexemes && c)
                  )
                    throw Error(
                      "ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) "
                    );
                  return (
                    (c = c || r.lexemes || /\w+/),
                    (r.keywordPatternRe = n(c, !0)),
                    i &&
                      (r.begin || (r.begin = /\B|\b/),
                      (r.beginRe = n(r.begin)),
                      r.endSameAsBegin && (r.end = r.begin),
                      r.end || r.endsWithParent || (r.end = /\B|\b/),
                      r.end && (r.endRe = n(r.end)),
                      (r.terminatorEnd = l(r.end) || ""),
                      r.endsWithParent &&
                        i.terminatorEnd &&
                        (r.terminatorEnd +=
                          (r.end ? "|" : "") + i.terminatorEnd)),
                    r.illegal && (r.illegalRe = n(r.illegal)),
                    r.contains || (r.contains = []),
                    (r.contains = [].concat(
                      ...r.contains.map(function (e) {
                        var t;
                        return ((t = "self" === e ? r : e).variants &&
                          !t.cachedVariants &&
                          (t.cachedVariants = t.variants.map(function (e) {
                            return a(t, { variants: null }, e);
                          })),
                        t.cachedVariants)
                          ? t.cachedVariants
                          : !(function e(t) {
                              return !!t && (t.endsWithParent || e(t.starts));
                            })(t)
                          ? Object.isFrozen(t)
                            ? a(t)
                            : t
                          : a(t, { starts: t.starts ? a(t.starts) : null });
                      })
                    )),
                    r.contains.forEach(function (e) {
                      t(e, r);
                    }),
                    r.starts && t(r.starts, i),
                    (r.matcher = (function (e) {
                      let t = new o();
                      return (
                        e.contains.forEach((e) =>
                          t.addRule(e.begin, { rule: e, type: "begin" })
                        ),
                        e.terminatorEnd &&
                          t.addRule(e.terminatorEnd, { type: "end" }),
                        e.illegal && t.addRule(e.illegal, { type: "illegal" }),
                        t
                      );
                    })(r)),
                    r
                  );
                })(e)
              );
            })(_, { plugins: c }),
            w = "",
            N = s || E,
            j = {},
            A = new h.__emitter(h);
          !(function () {
            let e = [];
            for (let t = N; t !== _; t = t.parent)
              t.className && e.unshift(t.className);
            e.forEach((e) => A.openNode(e));
          })();
          let C = "",
            D = 0,
            T = 0,
            P = 0,
            B = !1;
          try {
            for (N.matcher.considerAll(); ; ) {
              P++,
                B ? (B = !1) : N.matcher.considerAll(),
                (N.matcher.lastIndex = T);
              let e = N.matcher.exec(t);
              if (!e) break;
              let n = t.substring(T, e.index),
                r = m(n, e);
              T = e.index + r;
            }
            return (
              m(t.substr(T)),
              A.closeAllNodes(),
              A.finalize(),
              (w = A.toHTML()),
              {
                relevance: Math.floor(D),
                value: w,
                language: e,
                illegal: !1,
                emitter: A,
                top: N,
              }
            );
          } catch (n) {
            if (n.message && n.message.includes("Illegal"))
              return {
                illegal: !0,
                illegalBy: {
                  msg: n.message,
                  context: t.slice(T - 100, T + 100),
                  mode: n.mode,
                },
                sofar: w,
                relevance: 0,
                value: r(t),
                emitter: A,
              };
            if (g)
              return {
                illegal: !1,
                relevance: 0,
                value: r(t),
                emitter: A,
                language: e,
                top: N,
                errorRaised: n,
              };
            throw n;
          }
        }
        function v(e, t) {
          t = t || h.languages || Object.keys(o);
          let n = (function (e) {
              let t = {
                relevance: 0,
                emitter: new h.__emitter(h),
                value: r(e),
                illegal: !1,
                top: p,
              };
              return t.emitter.addText(e), t;
            })(e),
            a = t
              .filter(M)
              .filter(B)
              .map((t) => y(t, e, !1));
          a.unshift(n);
          let [i, c] = a.sort((e, t) => {
            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
            if (e.language && t.language) {
              if (M(e.language).supersetOf === t.language) return 1;
              if (M(t.language).supersetOf === e.language) return -1;
            }
            return 0;
          });
          return (i.second_best = c), i;
        }
        let _ = /^(<[^>]+>|\t)+/gm;
        function E(e) {
          let t = (function (e) {
            let t = e.className + " ";
            t += e.parentNode ? e.parentNode.className : "";
            let n = h.languageDetectRe.exec(t);
            if (n) {
              let t = M(n[1]);
              return (
                t ||
                  (D(f.replace("{}", n[1])),
                  D("Falling back to no-highlight mode for this block.", e)),
                t ? n[1] : "no-highlight"
              );
            }
            return t.split(/\s+/).find((e) => b(e) || M(e));
          })(e);
          if (b(t)) return;
          $("before:highlightElement", { el: e, language: t });
          let n = e.textContent,
            r = t ? m(n, { language: t, ignoreIllegals: !0 }) : v(n);
          $("after:highlightElement", { el: e, result: r, text: n }),
            (e.innerHTML = r.value),
            (function (e, t, n) {
              let r = t ? i[t] : n;
              e.classList.add("hljs"), r && e.classList.add(r);
            })(e, t, r.language),
            (e.result = {
              language: r.language,
              re: r.relevance,
              relavance: r.relevance,
            }),
            r.second_best &&
              (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.relevance,
                relavance: r.second_best.relevance,
              });
        }
        let N = () => {
            N.called ||
              ((N.called = !0),
              T(
                "10.6.0",
                "initHighlighting() is deprecated.  Use highlightAll() instead."
              ),
              document.querySelectorAll("pre code").forEach(E));
          },
          A = !1;
        function C() {
          if ("loading" === document.readyState) {
            A = !0;
            return;
          }
          document.querySelectorAll("pre code").forEach(E);
        }
        function M(e) {
          return o[(e = (e || "").toLowerCase())] || o[i[e]];
        }
        function P(e, { languageName: t }) {
          "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              i[e.toLowerCase()] = t;
            });
        }
        function B(e) {
          let t = M(e);
          return t && !t.disableAutodetect;
        }
        function $(e, t) {
          c.forEach(function (n) {
            n[e] && n[e](t);
          });
        }
        for (let n in ("undefined" != typeof window &&
          window.addEventListener &&
          window.addEventListener(
            "DOMContentLoaded",
            function () {
              A && C();
            },
            !1
          ),
        Object.assign(e, {
          highlight: m,
          highlightAuto: v,
          highlightAll: C,
          fixMarkup: function (e) {
            var t;
            return (
              T("10.2.0", "fixMarkup will be removed entirely in v11.0"),
              T(
                "10.2.0",
                "Please see https://github.com/highlightjs/highlight.js/issues/2534"
              ),
              (t = e),
              h.tabReplace || h.useBR
                ? t.replace(d, (e) =>
                    "\n" === e
                      ? h.useBR
                        ? "<br>"
                        : e
                      : h.tabReplace
                      ? e.replace(/\t/g, h.tabReplace)
                      : e
                  )
                : t
            );
          },
          highlightElement: E,
          highlightBlock: function (e) {
            return (
              T("10.7.0", "highlightBlock will be removed entirely in v12.0"),
              T("10.7.0", "Please use highlightElement now."),
              E(e)
            );
          },
          configure: function (e) {
            e.useBR &&
              (T("10.3.0", "'useBR' will be removed entirely in v11.0"),
              T(
                "10.3.0",
                "Please see https://github.com/highlightjs/highlight.js/issues/2559"
              )),
              (h = a(h, e));
          },
          initHighlighting: N,
          initHighlightingOnLoad: function () {
            T(
              "10.6.0",
              "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."
            ),
              (A = !0);
          },
          registerLanguage: function (t, n) {
            let r = null;
            try {
              r = n(e);
            } catch (e) {
              if (
                (L(
                  "Language definition for '{}' could not be registered.".replace(
                    "{}",
                    t
                  )
                ),
                g)
              )
                L(e);
              else throw e;
              r = p;
            }
            r.name || (r.name = t),
              (o[t] = r),
              (r.rawDefinition = n.bind(null, e)),
              r.aliases && P(r.aliases, { languageName: t });
          },
          unregisterLanguage: function (e) {
            for (let t of (delete o[e], Object.keys(i)))
              i[t] === e && delete i[t];
          },
          listLanguages: function () {
            return Object.keys(o);
          },
          getLanguage: M,
          registerAliases: P,
          requireLanguage: function (e) {
            T("10.4.0", "requireLanguage will be removed entirely in v11."),
              T(
                "10.4.0",
                "Please see https://github.com/highlightjs/highlight.js/pull/2844"
              );
            let t = M(e);
            if (t) return t;
            throw Error(
              "The '{}' language is required, but not loaded.".replace("{}", e)
            );
          },
          autoDetection: B,
          inherit: a,
          addPlugin: function (e) {
            var t;
            (t = e)["before:highlightBlock"] &&
              !t["before:highlightElement"] &&
              (t["before:highlightElement"] = (e) => {
                t["before:highlightBlock"](Object.assign({ block: e.el }, e));
              }),
              t["after:highlightBlock"] &&
                !t["after:highlightElement"] &&
                (t["after:highlightElement"] = (e) => {
                  t["after:highlightBlock"](Object.assign({ block: e.el }, e));
                }),
              c.push(e);
          },
          vuePlugin: (function (e) {
            let t = {
              props: ["language", "code", "autodetect"],
              data: function () {
                return { detectedLanguage: "", unknownLanguage: !1 };
              },
              computed: {
                className() {
                  return this.unknownLanguage
                    ? ""
                    : "hljs " + this.detectedLanguage;
                },
                highlighted() {
                  if (!this.autoDetect && !e.getLanguage(this.language))
                    return (
                      console.warn(
                        `The language "${this.language}" you specified could not be found.`
                      ),
                      (this.unknownLanguage = !0),
                      r(this.code)
                    );
                  let t = {};
                  return (
                    this.autoDetect
                      ? ((t = e.highlightAuto(this.code)),
                        (this.detectedLanguage = t.language))
                      : ((t = e.highlight(
                          this.language,
                          this.code,
                          this.ignoreIllegals
                        )),
                        (this.detectedLanguage = this.language)),
                    t.value
                  );
                },
                autoDetect() {
                  var e;
                  return (
                    !this.language || !!((e = this.autodetect) || "" === e)
                  );
                },
                ignoreIllegals: () => !0,
              },
              render(e) {
                return e("pre", {}, [
                  e("code", {
                    class: this.className,
                    domProps: { innerHTML: this.highlighted },
                  }),
                ]);
              },
            };
            return {
              Component: t,
              VuePlugin: {
                install(e) {
                  e.component("highlightjs", t);
                },
              },
            };
          })(e).VuePlugin,
        }),
        (e.debugMode = function () {
          g = !1;
        }),
        (e.safeMode = function () {
          g = !0;
        }),
        (e.versionString = "10.7.3"),
        w))
          "object" == typeof w[n] && t(w[n]);
        return (
          Object.assign(e, w),
          e.addPlugin({
            "before:highlightElement": ({ el: e }) => {
              h.useBR &&
                (e.innerHTML = e.innerHTML
                  .replace(/\n/g, "")
                  .replace(/<br[ /]*>/g, "\n"));
            },
            "after:highlightElement": ({ result: e }) => {
              h.useBR && (e.value = e.value.replace(/\n/g, "<br>"));
            },
          }),
          e.addPlugin(j),
          e.addPlugin({
            "after:highlightElement": ({ result: e }) => {
              h.tabReplace &&
                (e.value = e.value.replace(_, (e) =>
                  e.replace(/\t/g, h.tabReplace)
                ));
            },
          }),
          e
        );
      })({});
      e.exports = P;
    },
    82511: function (e) {
      e.exports = function (e) {
        let t = {};
        Object.assign(t, {
          className: "variable",
          variants: [
            {
              begin: (function (...e) {
                return e
                  .map((e) =>
                    e ? ("string" == typeof e ? e : e.source) : null
                  )
                  .join("");
              })(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"),
            },
            {
              begin: /\$\{/,
              end: /\}/,
              contains: ["self", { begin: /:-/, contains: [t] }],
            },
          ],
        });
        let n = {
            className: "subst",
            begin: /\$\(/,
            end: /\)/,
            contains: [e.BACKSLASH_ESCAPE],
          },
          r = {
            begin: /<<-?\s*(?=\w+)/,
            starts: {
              contains: [
                e.END_SAME_AS_BEGIN({
                  begin: /(\w+)/,
                  end: /(\w+)/,
                  className: "string",
                }),
              ],
            },
          },
          a = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t, n],
          };
        n.contains.push(a);
        let o = {
            begin: /\$\(\(/,
            end: /\)\)/,
            contains: [
              { begin: /\d+#[0-9a-f]+/, className: "number" },
              e.NUMBER_MODE,
              t,
            ],
          },
          i = e.SHEBANG({
            binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
            relevance: 10,
          }),
          c = {
            className: "function",
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: !0,
            contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
            relevance: 0,
          };
        return {
          name: "Bash",
          aliases: ["sh", "zsh"],
          keywords: {
            $pattern: /\b[a-z._-]+\b/,
            keyword:
              "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in:
              "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
          },
          contains: [
            i,
            e.SHEBANG(),
            c,
            o,
            e.HASH_COMMENT_MODE,
            r,
            a,
            { className: "", begin: /\\"/ },
            { className: "string", begin: /'/, end: /'/ },
            t,
          ],
        };
      };
    },
    23755: function (e) {
      let t = "[A-Za-z$_][0-9A-Za-z$_]*",
        n = [
          "as",
          "in",
          "of",
          "if",
          "for",
          "while",
          "finally",
          "var",
          "new",
          "function",
          "do",
          "return",
          "void",
          "else",
          "break",
          "catch",
          "instanceof",
          "with",
          "throw",
          "case",
          "default",
          "try",
          "switch",
          "continue",
          "typeof",
          "delete",
          "let",
          "yield",
          "const",
          "class",
          "debugger",
          "async",
          "await",
          "static",
          "import",
          "from",
          "export",
          "extends",
        ],
        r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        a = [].concat(
          [
            "setInterval",
            "setTimeout",
            "clearInterval",
            "clearTimeout",
            "require",
            "exports",
            "eval",
            "isFinite",
            "isNaN",
            "parseFloat",
            "parseInt",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
          ],
          [
            "arguments",
            "this",
            "super",
            "console",
            "window",
            "document",
            "localStorage",
            "module",
            "global",
          ],
          [
            "Intl",
            "DataView",
            "Number",
            "Math",
            "Date",
            "String",
            "RegExp",
            "Object",
            "Function",
            "Boolean",
            "Error",
            "Symbol",
            "Set",
            "Map",
            "WeakSet",
            "WeakMap",
            "Proxy",
            "Reflect",
            "JSON",
            "Promise",
            "Float64Array",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Uint16Array",
            "Uint32Array",
            "Float32Array",
            "Array",
            "Uint8Array",
            "Uint8ClampedArray",
            "ArrayBuffer",
            "BigInt64Array",
            "BigUint64Array",
            "BigInt",
          ],
          [
            "EvalError",
            "InternalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError",
          ]
        );
      function o(e) {
        return i("(?=", e, ")");
      }
      function i(...e) {
        return e
          .map((e) => (e ? ("string" == typeof e ? e : e.source) : null))
          .join("");
      }
      e.exports = function (e) {
        let c = (e, { after: t }) => {
            let n = "</" + e[0].slice(1);
            return -1 !== e.input.indexOf(n, t);
          },
          s = /<[A-Za-z0-9\\._:-]+/,
          l = /\/[A-Za-z0-9\\._:-]+>|\/>/,
          u = { $pattern: t, keyword: n, literal: r, built_in: a },
          g = "[0-9](_?[0-9])*",
          d = `\\.(${g})`,
          f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
          p = {
            className: "number",
            variants: [
              { begin: `(\\b(${f})((${d})|\\.)?|(${d}))[eE][+-]?(${g})\\b` },
              { begin: `\\b(${f})\\b((${d})\\b|\\.)?|(${d})\\b` },
              { begin: "\\\b(0|[1-9](_?[0-9])*)n\\\b" },
              { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
              { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
              { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
              { begin: "\\b0[0-7]+n?\\b" },
            ],
            relevance: 0,
          },
          h = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: u,
            contains: [],
          },
          b = {
            begin: "html`",
            end: "",
            starts: {
              end: "`",
              returnEnd: !1,
              contains: [e.BACKSLASH_ESCAPE, h],
              subLanguage: "xml",
            },
          },
          m = {
            begin: "css`",
            end: "",
            starts: {
              end: "`",
              returnEnd: !1,
              contains: [e.BACKSLASH_ESCAPE, h],
              subLanguage: "css",
            },
          },
          y = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, h],
          },
          v = {
            className: "comment",
            variants: [
              e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+",
                    contains: [
                      {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        relevance: 0,
                      },
                      {
                        className: "variable",
                        begin: t + "(?=\\s*(-)|$)",
                        endsParent: !0,
                        relevance: 0,
                      },
                      { begin: /(?=[^\n])\s/, relevance: 0 },
                    ],
                  },
                ],
              }),
              e.C_BLOCK_COMMENT_MODE,
              e.C_LINE_COMMENT_MODE,
            ],
          },
          _ = [
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            b,
            m,
            y,
            p,
            e.REGEXP_MODE,
          ];
        h.contains = _.concat({
          begin: /\{/,
          end: /\}/,
          keywords: u,
          contains: ["self"].concat(_),
        });
        let E = [].concat(v, h.contains),
          w = E.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: u,
              contains: ["self"].concat(E),
            },
          ]),
          N = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: u,
            contains: w,
          };
        return {
          name: "Javascript",
          aliases: ["js", "jsx", "mjs", "cjs"],
          keywords: u,
          exports: { PARAMS_CONTAINS: w },
          illegal: /#(?![$_A-z])/,
          contains: [
            e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
            {
              label: "use_strict",
              className: "meta",
              relevance: 10,
              begin: /^\s*['"]use (strict|asm)['"]/,
            },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            b,
            m,
            y,
            v,
            p,
            {
              begin: i(
                /[{,\n]\s*/,
                o(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, t + "\\s*:"))
              ),
              relevance: 0,
              contains: [
                { className: "attr", begin: t + o("\\s*:"), relevance: 0 },
              ],
            },
            {
              begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
              keywords: "return throw case",
              contains: [
                v,
                e.REGEXP_MODE,
                {
                  className: "function",
                  begin:
                    "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                    e.UNDERSCORE_IDENT_RE +
                    ")\\s*=>",
                  returnBegin: !0,
                  end: "\\s*=>",
                  contains: [
                    {
                      className: "params",
                      variants: [
                        { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                        { className: null, begin: /\(\s*\)/, skip: !0 },
                        {
                          begin: /\(/,
                          end: /\)/,
                          excludeBegin: !0,
                          excludeEnd: !0,
                          keywords: u,
                          contains: w,
                        },
                      ],
                    },
                  ],
                },
                { begin: /,/, relevance: 0 },
                { className: "", begin: /\s/, end: /\s*/, skip: !0 },
                {
                  variants: [
                    { begin: "<>", end: "</>" },
                    {
                      begin: s,
                      "on:begin": (e, t) => {
                        let n = e[0].length + e.index,
                          r = e.input[n];
                        if ("<" === r) {
                          t.ignoreMatch();
                          return;
                        }
                        ">" !== r || c(e, { after: n }) || t.ignoreMatch();
                      },
                      end: l,
                    },
                  ],
                  subLanguage: "xml",
                  contains: [
                    { begin: s, end: l, skip: !0, contains: ["self"] },
                  ],
                },
              ],
              relevance: 0,
            },
            {
              className: "function",
              beginKeywords: "function",
              end: /[{;]/,
              excludeEnd: !0,
              keywords: u,
              contains: ["self", e.inherit(e.TITLE_MODE, { begin: t }), N],
              illegal: /%/,
            },
            { beginKeywords: "while if switch catch for" },
            {
              className: "function",
              begin:
                e.UNDERSCORE_IDENT_RE +
                "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
              returnBegin: !0,
              contains: [N, e.inherit(e.TITLE_MODE, { begin: t })],
            },
            {
              variants: [{ begin: "\\." + t }, { begin: "\\$" + t }],
              relevance: 0,
            },
            {
              className: "class",
              beginKeywords: "class",
              end: /[{;=]/,
              excludeEnd: !0,
              illegal: /[:"[\]]/,
              contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
            },
            {
              begin: /\b(?=constructor)/,
              end: /[{;]/,
              excludeEnd: !0,
              contains: [e.inherit(e.TITLE_MODE, { begin: t }), "self", N],
            },
            {
              begin: "(get|set)\\s+(?=" + t + "\\()",
              end: /\{/,
              keywords: "get set",
              contains: [
                e.inherit(e.TITLE_MODE, { begin: t }),
                { begin: /\(\)/ },
                N,
              ],
            },
            { begin: /\$[(.]/ },
          ],
        };
      };
    },
    25962: function (e) {
      var t = "[0-9](_*[0-9])*",
        n = `\\.(${t})`,
        r = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        a = {
          className: "number",
          variants: [
            {
              begin: `(\\b(${t})((${n})|\\.)?|(${n}))[eE][+-]?(${t})[fFdD]?\\b`,
            },
            { begin: `\\b(${t})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
            { begin: `(${n})[fFdD]?\\b` },
            { begin: `\\b(${t})[fFdD]\\b` },
            {
              begin: `\\b0[xX]((${r})\\.?|(${r})?\\.(${r}))[pP][+-]?(${t})[fFdD]?\\b`,
            },
            { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
            { begin: `\\b0[xX](${r})[lL]?\\b` },
            { begin: "\\b0(_*[0-7])*[lL]?\\b" },
            { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
          ],
          relevance: 0,
        };
      e.exports = function (e) {
        let t = {
            keyword:
              "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
            built_in:
              "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
            literal: "true false null",
          },
          n = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
          r = {
            className: "subst",
            begin: /\$\{/,
            end: /\}/,
            contains: [e.C_NUMBER_MODE],
          },
          o = { className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE },
          i = {
            className: "string",
            variants: [
              { begin: '"""', end: '"""(?=[^"])', contains: [o, r] },
              {
                begin: "'",
                end: "'",
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE],
              },
              {
                begin: '"',
                end: '"',
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE, o, r],
              },
            ],
          };
        r.contains.push(i);
        let c = {
            className: "meta",
            begin:
              "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
              e.UNDERSCORE_IDENT_RE +
              ")?",
          },
          s = {
            className: "meta",
            begin: "@" + e.UNDERSCORE_IDENT_RE,
            contains: [
              {
                begin: /\(/,
                end: /\)/,
                contains: [e.inherit(i, { className: "meta-string" })],
              },
            ],
          },
          l = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
          u = {
            variants: [
              { className: "type", begin: e.UNDERSCORE_IDENT_RE },
              { begin: /\(/, end: /\)/, contains: [] },
            ],
          };
        return (
          (u.variants[1].contains = [u]),
          (u.variants[1].contains = [u]),
          {
            name: "Kotlin",
            aliases: ["kt", "kts"],
            keywords: t,
            contains: [
              e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
              }),
              e.C_LINE_COMMENT_MODE,
              l,
              {
                className: "keyword",
                begin: /\b(break|continue|return|this)\b/,
                starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
              },
              n,
              c,
              s,
              {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: !0,
                excludeEnd: !0,
                keywords: t,
                relevance: 5,
                contains: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE],
                  },
                  {
                    className: "type",
                    begin: /</,
                    end: />/,
                    keywords: "reified",
                    relevance: 0,
                  },
                  {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    endsParent: !0,
                    keywords: t,
                    relevance: 0,
                    contains: [
                      {
                        begin: /:/,
                        end: /[=,\/]/,
                        endsWithParent: !0,
                        contains: [u, e.C_LINE_COMMENT_MODE, l],
                        relevance: 0,
                      },
                      e.C_LINE_COMMENT_MODE,
                      l,
                      c,
                      s,
                      i,
                      e.C_NUMBER_MODE,
                    ],
                  },
                  l,
                ],
              },
              {
                className: "class",
                beginKeywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: !0,
                illegal: "extends implements",
                contains: [
                  {
                    beginKeywords:
                      "public protected internal private constructor",
                  },
                  e.UNDERSCORE_TITLE_MODE,
                  {
                    className: "type",
                    begin: /</,
                    end: />/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0,
                  },
                  {
                    className: "type",
                    begin: /[,:]\s*/,
                    end: /[<\(,]|$/,
                    excludeBegin: !0,
                    returnEnd: !0,
                  },
                  c,
                  s,
                ],
              },
              i,
              {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: "\n",
              },
              a,
            ],
          }
        );
      };
    },
    83443: function (e) {
      e.exports = function (e) {
        let t = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: [
              "and",
              "as",
              "assert",
              "async",
              "await",
              "break",
              "class",
              "continue",
              "def",
              "del",
              "elif",
              "else",
              "except",
              "finally",
              "for",
              "from",
              "global",
              "if",
              "import",
              "in",
              "is",
              "lambda",
              "nonlocal|10",
              "not",
              "or",
              "pass",
              "raise",
              "return",
              "try",
              "while",
              "with",
              "yield",
            ],
            built_in: [
              "__import__",
              "abs",
              "all",
              "any",
              "ascii",
              "bin",
              "bool",
              "breakpoint",
              "bytearray",
              "bytes",
              "callable",
              "chr",
              "classmethod",
              "compile",
              "complex",
              "delattr",
              "dict",
              "dir",
              "divmod",
              "enumerate",
              "eval",
              "exec",
              "filter",
              "float",
              "format",
              "frozenset",
              "getattr",
              "globals",
              "hasattr",
              "hash",
              "help",
              "hex",
              "id",
              "input",
              "int",
              "isinstance",
              "issubclass",
              "iter",
              "len",
              "list",
              "locals",
              "map",
              "max",
              "memoryview",
              "min",
              "next",
              "object",
              "oct",
              "open",
              "ord",
              "pow",
              "print",
              "property",
              "range",
              "repr",
              "reversed",
              "round",
              "set",
              "setattr",
              "slice",
              "sorted",
              "staticmethod",
              "str",
              "sum",
              "super",
              "tuple",
              "type",
              "vars",
              "zip",
            ],
            literal: [
              "__debug__",
              "Ellipsis",
              "False",
              "None",
              "NotImplemented",
              "True",
            ],
            type: [
              "Any",
              "Callable",
              "Coroutine",
              "Dict",
              "List",
              "Literal",
              "Generic",
              "Optional",
              "Sequence",
              "Set",
              "Tuple",
              "Type",
              "Union",
            ],
          },
          n = { className: "meta", begin: /^(>>>|\.\.\.) / },
          r = {
            className: "subst",
            begin: /\{/,
            end: /\}/,
            keywords: t,
            illegal: /#/,
          },
          a = { begin: /\{\{/, relevance: 0 },
          o = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, n],
                relevance: 10,
              },
              {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, n],
                relevance: 10,
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, n, a, r],
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, n, a, r],
              },
              { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
              { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
              { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
              { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE, a, r],
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, a, r],
              },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
            ],
          },
          i = "[0-9](_?[0-9])*",
          c = `(\\b(${i}))?\\.(${i})|\\b(${i})\\.`,
          s = {
            className: "number",
            relevance: 0,
            variants: [
              { begin: `(\\b(${i})|(${c}))[eE][+-]?(${i})[jJ]?\\b` },
              { begin: `(${c})[jJ]?` },
              { begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b" },
              { begin: "\\b0[bB](_?[01])+[lL]?\\b" },
              { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" },
              { begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b" },
              { begin: `\\b(${i})[jJ]\\b` },
            ],
          },
          l = {
            className: "comment",
            begin: ["(?=", /# type:/, ")"]
              .map((e) => (e ? ("string" == typeof e ? e : e.source) : null))
              .join(""),
            end: /$/,
            keywords: t,
            contains: [
              { begin: /# type:/ },
              { begin: /#/, end: /\b\B/, endsWithParent: !0 },
            ],
          },
          u = {
            className: "params",
            variants: [
              { className: "", begin: /\(\s*\)/, skip: !0 },
              {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: t,
                contains: ["self", n, s, o, e.HASH_COMMENT_MODE],
              },
            ],
          };
        return (
          (r.contains = [o, s, n]),
          {
            name: "Python",
            aliases: ["py", "gyp", "ipython"],
            keywords: t,
            illegal: /(<\/|->|\?)|=>/,
            contains: [
              n,
              s,
              { begin: /\bself\b/ },
              { beginKeywords: "if", relevance: 0 },
              o,
              l,
              e.HASH_COMMENT_MODE,
              {
                variants: [
                  { className: "function", beginKeywords: "def" },
                  { className: "class", beginKeywords: "class" },
                ],
                end: /:/,
                illegal: /[${=;\n,]/,
                contains: [
                  e.UNDERSCORE_TITLE_MODE,
                  u,
                  { begin: /->/, endsWithParent: !0, keywords: t },
                ],
              },
              {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /(?=#)|$/,
                contains: [s, u, o],
              },
            ],
          }
        );
      };
    },
    4829: function (e) {
      function t(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function n(...e) {
        return "(" + e.map((e) => t(e)).join("|") + ")";
      }
      e.exports = function (e) {
        let r = e.COMMENT("--", "$"),
          a = ["true", "false", "unknown"],
          o = [
            "bigint",
            "binary",
            "blob",
            "boolean",
            "char",
            "character",
            "clob",
            "date",
            "dec",
            "decfloat",
            "decimal",
            "float",
            "int",
            "integer",
            "interval",
            "nchar",
            "nclob",
            "national",
            "numeric",
            "real",
            "row",
            "smallint",
            "time",
            "timestamp",
            "varchar",
            "varying",
            "varbinary",
          ],
          i = [
            "abs",
            "acos",
            "array_agg",
            "asin",
            "atan",
            "avg",
            "cast",
            "ceil",
            "ceiling",
            "coalesce",
            "corr",
            "cos",
            "cosh",
            "count",
            "covar_pop",
            "covar_samp",
            "cume_dist",
            "dense_rank",
            "deref",
            "element",
            "exp",
            "extract",
            "first_value",
            "floor",
            "json_array",
            "json_arrayagg",
            "json_exists",
            "json_object",
            "json_objectagg",
            "json_query",
            "json_table",
            "json_table_primitive",
            "json_value",
            "lag",
            "last_value",
            "lead",
            "listagg",
            "ln",
            "log",
            "log10",
            "lower",
            "max",
            "min",
            "mod",
            "nth_value",
            "ntile",
            "nullif",
            "percent_rank",
            "percentile_cont",
            "percentile_disc",
            "position",
            "position_regex",
            "power",
            "rank",
            "regr_avgx",
            "regr_avgy",
            "regr_count",
            "regr_intercept",
            "regr_r2",
            "regr_slope",
            "regr_sxx",
            "regr_sxy",
            "regr_syy",
            "row_number",
            "sin",
            "sinh",
            "sqrt",
            "stddev_pop",
            "stddev_samp",
            "substring",
            "substring_regex",
            "sum",
            "tan",
            "tanh",
            "translate",
            "translate_regex",
            "treat",
            "trim",
            "trim_array",
            "unnest",
            "upper",
            "value_of",
            "var_pop",
            "var_samp",
            "width_bucket",
          ],
          c = [
            "create table",
            "insert into",
            "primary key",
            "foreign key",
            "not null",
            "alter table",
            "add constraint",
            "grouping sets",
            "on overflow",
            "character set",
            "respect nulls",
            "ignore nulls",
            "nulls first",
            "nulls last",
            "depth first",
            "breadth first",
          ],
          s = [
            "abs",
            "acos",
            "all",
            "allocate",
            "alter",
            "and",
            "any",
            "are",
            "array",
            "array_agg",
            "array_max_cardinality",
            "as",
            "asensitive",
            "asin",
            "asymmetric",
            "at",
            "atan",
            "atomic",
            "authorization",
            "avg",
            "begin",
            "begin_frame",
            "begin_partition",
            "between",
            "bigint",
            "binary",
            "blob",
            "boolean",
            "both",
            "by",
            "call",
            "called",
            "cardinality",
            "cascaded",
            "case",
            "cast",
            "ceil",
            "ceiling",
            "char",
            "char_length",
            "character",
            "character_length",
            "check",
            "classifier",
            "clob",
            "close",
            "coalesce",
            "collate",
            "collect",
            "column",
            "commit",
            "condition",
            "connect",
            "constraint",
            "contains",
            "convert",
            "copy",
            "corr",
            "corresponding",
            "cos",
            "cosh",
            "count",
            "covar_pop",
            "covar_samp",
            "create",
            "cross",
            "cube",
            "cume_dist",
            "current",
            "current_catalog",
            "current_date",
            "current_default_transform_group",
            "current_path",
            "current_role",
            "current_row",
            "current_schema",
            "current_time",
            "current_timestamp",
            "current_path",
            "current_role",
            "current_transform_group_for_type",
            "current_user",
            "cursor",
            "cycle",
            "date",
            "day",
            "deallocate",
            "dec",
            "decimal",
            "decfloat",
            "declare",
            "default",
            "define",
            "delete",
            "dense_rank",
            "deref",
            "describe",
            "deterministic",
            "disconnect",
            "distinct",
            "double",
            "drop",
            "dynamic",
            "each",
            "element",
            "else",
            "empty",
            "end",
            "end_frame",
            "end_partition",
            "end-exec",
            "equals",
            "escape",
            "every",
            "except",
            "exec",
            "execute",
            "exists",
            "exp",
            "external",
            "extract",
            "false",
            "fetch",
            "filter",
            "first_value",
            "float",
            "floor",
            "for",
            "foreign",
            "frame_row",
            "free",
            "from",
            "full",
            "function",
            "fusion",
            "get",
            "global",
            "grant",
            "group",
            "grouping",
            "groups",
            "having",
            "hold",
            "hour",
            "identity",
            "in",
            "indicator",
            "initial",
            "inner",
            "inout",
            "insensitive",
            "insert",
            "int",
            "integer",
            "intersect",
            "intersection",
            "interval",
            "into",
            "is",
            "join",
            "json_array",
            "json_arrayagg",
            "json_exists",
            "json_object",
            "json_objectagg",
            "json_query",
            "json_table",
            "json_table_primitive",
            "json_value",
            "lag",
            "language",
            "large",
            "last_value",
            "lateral",
            "lead",
            "leading",
            "left",
            "like",
            "like_regex",
            "listagg",
            "ln",
            "local",
            "localtime",
            "localtimestamp",
            "log",
            "log10",
            "lower",
            "match",
            "match_number",
            "match_recognize",
            "matches",
            "max",
            "member",
            "merge",
            "method",
            "min",
            "minute",
            "mod",
            "modifies",
            "module",
            "month",
            "multiset",
            "national",
            "natural",
            "nchar",
            "nclob",
            "new",
            "no",
            "none",
            "normalize",
            "not",
            "nth_value",
            "ntile",
            "null",
            "nullif",
            "numeric",
            "octet_length",
            "occurrences_regex",
            "of",
            "offset",
            "old",
            "omit",
            "on",
            "one",
            "only",
            "open",
            "or",
            "order",
            "out",
            "outer",
            "over",
            "overlaps",
            "overlay",
            "parameter",
            "partition",
            "pattern",
            "per",
            "percent",
            "percent_rank",
            "percentile_cont",
            "percentile_disc",
            "period",
            "portion",
            "position",
            "position_regex",
            "power",
            "precedes",
            "precision",
            "prepare",
            "primary",
            "procedure",
            "ptf",
            "range",
            "rank",
            "reads",
            "real",
            "recursive",
            "ref",
            "references",
            "referencing",
            "regr_avgx",
            "regr_avgy",
            "regr_count",
            "regr_intercept",
            "regr_r2",
            "regr_slope",
            "regr_sxx",
            "regr_sxy",
            "regr_syy",
            "release",
            "result",
            "return",
            "returns",
            "revoke",
            "right",
            "rollback",
            "rollup",
            "row",
            "row_number",
            "rows",
            "running",
            "savepoint",
            "scope",
            "scroll",
            "search",
            "second",
            "seek",
            "select",
            "sensitive",
            "session_user",
            "set",
            "show",
            "similar",
            "sin",
            "sinh",
            "skip",
            "smallint",
            "some",
            "specific",
            "specifictype",
            "sql",
            "sqlexception",
            "sqlstate",
            "sqlwarning",
            "sqrt",
            "start",
            "static",
            "stddev_pop",
            "stddev_samp",
            "submultiset",
            "subset",
            "substring",
            "substring_regex",
            "succeeds",
            "sum",
            "symmetric",
            "system",
            "system_time",
            "system_user",
            "table",
            "tablesample",
            "tan",
            "tanh",
            "then",
            "time",
            "timestamp",
            "timezone_hour",
            "timezone_minute",
            "to",
            "trailing",
            "translate",
            "translate_regex",
            "translation",
            "treat",
            "trigger",
            "trim",
            "trim_array",
            "true",
            "truncate",
            "uescape",
            "union",
            "unique",
            "unknown",
            "unnest",
            "update   ",
            "upper",
            "user",
            "using",
            "value",
            "values",
            "value_of",
            "var_pop",
            "var_samp",
            "varbinary",
            "varchar",
            "varying",
            "versioning",
            "when",
            "whenever",
            "where",
            "width_bucket",
            "window",
            "with",
            "within",
            "without",
            "year",
            "add",
            "asc",
            "collation",
            "desc",
            "final",
            "first",
            "last",
            "view",
          ].filter((e) => !i.includes(e)),
          l = {
            begin: (function (...e) {
              return e.map((e) => t(e)).join("");
            })(/\b/, n(...i), /\s*\(/),
            keywords: { built_in: i },
          };
        return {
          name: "SQL",
          case_insensitive: !0,
          illegal: /[{}]|<\//,
          keywords: {
            $pattern: /\b[\w\.]+/,
            keyword: (function (e, { exceptions: t, when: n } = {}) {
              return (
                (t = t || []),
                e.map((e) =>
                  e.match(/\|\d+$/) || t.includes(e) ? e : n(e) ? `${e}|0` : e
                )
              );
            })(s, { when: (e) => e.length < 3 }),
            literal: a,
            type: o,
            built_in: [
              "current_catalog",
              "current_date",
              "current_default_transform_group",
              "current_path",
              "current_role",
              "current_schema",
              "current_transform_group_for_type",
              "current_user",
              "session_user",
              "system_time",
              "system_user",
              "current_time",
              "localtime",
              "current_timestamp",
              "localtimestamp",
            ],
          },
          contains: [
            {
              begin: n(...c),
              keywords: {
                $pattern: /[\w\.]+/,
                keyword: s.concat(c),
                literal: a,
                type: o,
              },
            },
            {
              className: "type",
              begin: n(
                "double precision",
                "large object",
                "with timezone",
                "without timezone"
              ),
            },
            l,
            { className: "variable", begin: /@[a-z0-9]+/ },
            {
              className: "string",
              variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/ }] }],
            },
            { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
            e.C_NUMBER_MODE,
            e.C_BLOCK_COMMENT_MODE,
            r,
            {
              className: "operator",
              begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
              relevance: 0,
            },
          ],
        };
      };
    },
    47190: function (e, t, n) {
      "use strict";
      var r = n(71978),
        a = n(41536);
      (t.highlight = i),
        (t.highlightAuto = function (e, t) {
          var n,
            c,
            s,
            l,
            u = t || {},
            g = u.subset || r.listLanguages(),
            d = u.prefix,
            f = g.length,
            p = -1;
          if ((null == d && (d = o), "string" != typeof e))
            throw a("Expected `string` for value, got `%s`", e);
          for (
            c = { relevance: 0, language: null, value: [] },
              n = { relevance: 0, language: null, value: [] };
            ++p < f;

          )
            (l = g[p]),
              r.getLanguage(l) &&
                (((s = i(l, e, t)).language = l),
                s.relevance > c.relevance && (c = s),
                s.relevance > n.relevance && ((c = n), (n = s)));
          return c.language && (n.secondBest = c), n;
        }),
        (t.registerLanguage = function (e, t) {
          r.registerLanguage(e, t);
        }),
        (t.listLanguages = function () {
          return r.listLanguages();
        }),
        (t.registerAlias = function (e, t) {
          var n,
            a = e;
          for (n in (t && ((a = {})[e] = t), a))
            r.registerAliases(a[n], { languageName: n });
        }),
        (c.prototype.addText = function (e) {
          var t,
            n,
            r = this.stack;
          "" !== e &&
            ((n = (t = r[r.length - 1]).children[t.children.length - 1]) &&
            "text" === n.type
              ? (n.value += e)
              : t.children.push({ type: "text", value: e }));
        }),
        (c.prototype.addKeyword = function (e, t) {
          this.openNode(t), this.addText(e), this.closeNode();
        }),
        (c.prototype.addSublanguage = function (e, t) {
          var n = this.stack,
            r = n[n.length - 1],
            a = e.rootNode.children;
          r.children = r.children.concat(
            t
              ? {
                  type: "element",
                  tagName: "span",
                  properties: { className: [t] },
                  children: a,
                }
              : a
          );
        }),
        (c.prototype.openNode = function (e) {
          var t = this.stack,
            n = this.options.classPrefix + e,
            r = t[t.length - 1],
            a = {
              type: "element",
              tagName: "span",
              properties: { className: [n] },
              children: [],
            };
          r.children.push(a), t.push(a);
        }),
        (c.prototype.closeNode = function () {
          this.stack.pop();
        }),
        (c.prototype.closeAllNodes = s),
        (c.prototype.finalize = s),
        (c.prototype.toHTML = function () {
          return "";
        });
      var o = "hljs-";
      function i(e, t, n) {
        var i,
          s = r.configure({}),
          l = (n || {}).prefix;
        if ("string" != typeof e)
          throw a("Expected `string` for name, got `%s`", e);
        if (!r.getLanguage(e))
          throw a("Unknown language: `%s` is not registered", e);
        if ("string" != typeof t)
          throw a("Expected `string` for value, got `%s`", t);
        if (
          (null == l && (l = o),
          r.configure({ __emitter: c, classPrefix: l }),
          (i = r.highlight(t, { language: e, ignoreIllegals: !0 })),
          r.configure(s || {}),
          i.errorRaised)
        )
          throw i.errorRaised;
        return {
          relevance: i.relevance,
          language: i.language,
          value: i.emitter.rootNode.children,
        };
      }
      function c(e) {
        (this.options = e),
          (this.rootNode = { children: [] }),
          (this.stack = [this.rootNode]);
      }
      function s() {}
    },
    36794: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var a = c(n(2784)),
        o = c(n(50381)),
        i = ["text", "onCopy", "options", "children"];
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && u(e, t);
        })(s, e);
        var t,
          n,
          c =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = d(s);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, d(this).constructor)
                  : n.apply(this, arguments)),
                (function (e, t) {
                  if (t && ("object" === r(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return g(e);
                })(this, e)
              );
            });
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, s);
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            f(
              g((e = c.call.apply(c, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  r = n.text,
                  i = n.onCopy,
                  c = n.children,
                  s = n.options,
                  l = a.default.Children.only(c),
                  u = (0, o.default)(r, s);
                i && i(r, u),
                  l &&
                    l.props &&
                    "function" == typeof l.props.onClick &&
                    l.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          a = {},
                          o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < o.length; r++)
                        (n = o[r]),
                          !(t.indexOf(n) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (a[n] = e[n]);
                    }
                    return a;
                  })(e, i),
                  r = a.default.Children.only(t);
                return a.default.cloneElement(
                  r,
                  l(l({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(s.prototype, n),
          Object.defineProperty(s, "prototype", { writable: !1 }),
          s
        );
      })(a.default.PureComponent);
      (t.CopyToClipboard = p),
        f(p, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    72282: function (e, t, n) {
      "use strict";
      var r = n(36794).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    27666: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var a = r(n(82511)).default;
      t.Z = a;
    },
    86497: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var a = r(n(23755)).default;
      t.Z = a;
    },
    83667: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var a = r(n(25962)).default;
      t.Z = a;
    },
    54299: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var a = r(n(83443)).default;
      t.Z = a;
    },
    14969: function (e, t, n) {
      "use strict";
      var r = n(14859);
      t.Z = void 0;
      var a = r(n(4829)).default;
      t.Z = a;
    },
    19469: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var r,
        a = n(98283);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e) {
        return (i =
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
      function c(e, t, n) {
        var r;
        return (
          ((r = (function (e, t) {
            if ("object" != i(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != i(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == i(r) ? r : r + "") in e)
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var s = n(2784),
        l = n(7560);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = {},
        f = [
          "language",
          "children",
          "style",
          "customStyle",
          "codeTagProps",
          "useInlineStyles",
          "showLineNumbers",
          "showInlineLineNumbers",
          "startingLineNumber",
          "lineNumberContainerStyle",
          "lineNumberStyle",
          "wrapLines",
          "wrapLongLines",
          "lineProps",
          "renderer",
          "PreTag",
          "CodeTag",
          "code",
          "astGenerator",
        ];
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var b = /\n/g;
      function m(e) {
        var t,
          n,
          r,
          a,
          o = e.codeString,
          i = e.codeStyle,
          c = e.containerStyle,
          l = e.numberStyle,
          u = e.startingLineNumber;
        return s.createElement(
          "code",
          {
            style: Object.assign(
              {},
              i,
              void 0 === c ? { float: "left", paddingRight: "10px" } : c
            ),
          },
          ((n = (t = {
            lines: o.replace(/\n$/, "").split("\n"),
            style: void 0 === l ? {} : l,
            startingLineNumber: u,
          }).lines),
          (r = t.startingLineNumber),
          (a = t.style),
          n.map(function (e, t) {
            var n = t + r;
            return s.createElement(
              "span",
              {
                key: "line-".concat(t),
                className: "react-syntax-highlighter-line-number",
                style: "function" == typeof a ? a(n) : a,
              },
              "".concat(n, "\n")
            );
          }))
        );
      }
      function y(e, t) {
        return {
          type: "element",
          tagName: "span",
          properties: {
            key: "line-number--".concat(e),
            className: [
              "comment",
              "linenumber",
              "react-syntax-highlighter-line-number",
            ],
            style: t,
          },
          children: [{ type: "text", value: e }],
        };
      }
      function v(e, t, n) {
        var r = {
            display: "inline-block",
            minWidth: "".concat(n.toString().length, ".25em"),
            paddingRight: "1em",
            textAlign: "right",
            userSelect: "none",
          },
          a = "function" == typeof e ? e(t) : e;
        return h(h({}, r), a);
      }
      function _(e) {
        var t = e.children,
          n = e.lineNumber,
          r = e.lineNumberStyle,
          a = e.largestLineNumber,
          o = e.showInlineLineNumbers,
          i = e.lineProps,
          c = void 0 === i ? {} : i,
          s = e.className,
          l = e.showLineNumbers,
          u = e.wrapLongLines,
          g = "function" == typeof c ? c(n) : c;
        if (((g.className = void 0 === s ? [] : s), n && o)) {
          var d = v(r, n, a);
          t.unshift(y(n, d));
        }
        return (
          u & l && (g.style = h(h({}, g.style), {}, { display: "flex" })),
          { type: "element", tagName: "span", properties: g, children: t }
        );
      }
      function E(e) {
        var t = e.rows,
          n = e.stylesheet,
          r = e.useInlineStyles;
        return t.map(function (e, t) {
          return (function e(t) {
            var n = t.node,
              r = t.stylesheet,
              a = t.style,
              o = t.useInlineStyles,
              i = t.key,
              c = n.properties,
              u = n.type,
              f = n.tagName,
              p = n.value;
            if ("text" === u) return p;
            if (f) {
              var h,
                b,
                m =
                  ((h = 0),
                  function (t) {
                    return (
                      (h += 1),
                      t.map(function (t, n) {
                        return e({
                          node: t,
                          stylesheet: r,
                          useInlineStyles: o,
                          key: "code-segment-".concat(h, "-").concat(n),
                        });
                      })
                    );
                  });
              if (o) {
                var y = Object.keys(r).reduce(function (e, t) {
                    return (
                      t.split(".").forEach(function (t) {
                        e.includes(t) || e.push(t);
                      }),
                      e
                    );
                  }, []),
                  v =
                    c.className && c.className.includes("token")
                      ? ["token"]
                      : [],
                  _ =
                    c.className &&
                    v.concat(
                      c.className.filter(function (e) {
                        return !y.includes(e);
                      })
                    );
                b = g(
                  g({}, c),
                  {},
                  {
                    className: _.join(" ") || void 0,
                    style: (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                      return (function (e) {
                        if (0 === e.length || 1 === e.length) return e;
                        var t,
                          n = e.join(".");
                        return (
                          d[n] ||
                            (d[n] =
                              0 === (t = e.length) || 1 === t
                                ? e
                                : 2 === t
                                ? [
                                    e[0],
                                    e[1],
                                    "".concat(e[0], ".").concat(e[1]),
                                    "".concat(e[1], ".").concat(e[0]),
                                  ]
                                : 3 === t
                                ? [
                                    e[0],
                                    e[1],
                                    e[2],
                                    "".concat(e[0], ".").concat(e[1]),
                                    "".concat(e[0], ".").concat(e[2]),
                                    "".concat(e[1], ".").concat(e[0]),
                                    "".concat(e[1], ".").concat(e[2]),
                                    "".concat(e[2], ".").concat(e[0]),
                                    "".concat(e[2], ".").concat(e[1]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0]),
                                  ]
                                : t >= 4
                                ? [
                                    e[0],
                                    e[1],
                                    e[2],
                                    e[3],
                                    "".concat(e[0], ".").concat(e[1]),
                                    "".concat(e[0], ".").concat(e[2]),
                                    "".concat(e[0], ".").concat(e[3]),
                                    "".concat(e[1], ".").concat(e[0]),
                                    "".concat(e[1], ".").concat(e[2]),
                                    "".concat(e[1], ".").concat(e[3]),
                                    "".concat(e[2], ".").concat(e[0]),
                                    "".concat(e[2], ".").concat(e[1]),
                                    "".concat(e[2], ".").concat(e[3]),
                                    "".concat(e[3], ".").concat(e[0]),
                                    "".concat(e[3], ".").concat(e[1]),
                                    "".concat(e[3], ".").concat(e[2]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[3]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[2], ".")
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0], ".")
                                      .concat(e[2]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[1], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[0], ".")
                                      .concat(e[1]),
                                    ""
                                      .concat(e[3], ".")
                                      .concat(e[2], ".")
                                      .concat(e[1], ".")
                                      .concat(e[0]),
                                  ]
                                : void 0),
                          d[n]
                        );
                      })(
                        e.filter(function (e) {
                          return "token" !== e;
                        })
                      ).reduce(function (e, t) {
                        return g(g({}, e), n[t]);
                      }, t);
                    })(
                      c.className,
                      Object.assign({}, c.style, void 0 === a ? {} : a),
                      r
                    ),
                  }
                );
              } else b = g(g({}, c), {}, { className: c.className.join(" ") });
              var E = m(n.children);
              return s.createElement(f, (0, l.Z)({ key: i }, b), E);
            }
          })({
            node: e,
            stylesheet: n,
            useInlineStyles: r,
            key: "code-segement".concat(t),
          });
        });
      }
      function w(e) {
        return e && void 0 !== e.highlightAuto;
      }
      var N = n(47190),
        x =
          ((r = {}),
          function (e) {
            var t = e.language,
              n = e.children,
              i = e.style,
              c = void 0 === i ? r : i,
              l = e.customStyle,
              u = void 0 === l ? {} : l,
              g = e.codeTagProps,
              d =
                void 0 === g
                  ? {
                      className: t ? "language-".concat(t) : void 0,
                      style: h(
                        h({}, c['code[class*="language-"]']),
                        c['code[class*="language-'.concat(t, '"]')]
                      ),
                    }
                  : g,
              p = e.useInlineStyles,
              x = void 0 === p || p,
              O = e.showLineNumbers,
              S = void 0 !== O && O,
              R = e.showInlineLineNumbers,
              k = void 0 === R || R,
              j = e.startingLineNumber,
              A = void 0 === j ? 1 : j,
              C = e.lineNumberContainerStyle,
              M = e.lineNumberStyle,
              L = void 0 === M ? {} : M,
              D = e.wrapLines,
              T = e.wrapLongLines,
              I = void 0 !== T && T,
              P = e.lineProps,
              B = e.renderer,
              $ = e.PreTag,
              U = void 0 === $ ? "pre" : $,
              H = e.CodeTag,
              z = void 0 === H ? "code" : H,
              K = e.code,
              F = void 0 === K ? (Array.isArray(n) ? n[0] : n) || "" : K,
              G = e.astGenerator,
              Z = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = (0, a.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]),
                      t.indexOf(n) >= 0 ||
                        ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
              })(e, f);
            G = G || N;
            var q = S
                ? s.createElement(m, {
                    containerStyle: C,
                    codeStyle: d.style || {},
                    numberStyle: L,
                    startingLineNumber: A,
                    codeString: F,
                  })
                : null,
              X = c.hljs ||
                c['pre[class*="language-"]'] || { backgroundColor: "#fff" },
              W = w(G) ? "hljs" : "prismjs",
              V = x
                ? Object.assign({}, Z, { style: Object.assign({}, X, u) })
                : Object.assign({}, Z, {
                    className: Z.className
                      ? "".concat(W, " ").concat(Z.className)
                      : W,
                    style: Object.assign({}, u),
                  });
            if (
              (I
                ? (d.style = h(h({}, d.style), {}, { whiteSpace: "pre-wrap" }))
                : (d.style = h(h({}, d.style), {}, { whiteSpace: "pre" })),
              !G)
            )
              return s.createElement(U, V, q, s.createElement(z, d, F));
            ((void 0 === D && B) || I) && (D = !0), (B = B || E);
            var J = [{ type: "text", value: F }],
              Q = (function (e) {
                var t = e.astGenerator,
                  n = e.language,
                  r = e.code,
                  a = e.defaultCodeValue;
                if (w(t)) {
                  var o = -1 !== t.listLanguages().indexOf(n);
                  return "text" === n
                    ? { value: a, language: "text" }
                    : o
                    ? t.highlight(n, r)
                    : t.highlightAuto(r);
                }
                try {
                  return n && "text" !== n
                    ? { value: t.highlight(r, n) }
                    : { value: a };
                } catch (e) {
                  return { value: a };
                }
              })({
                astGenerator: G,
                language: t,
                code: F,
                defaultCodeValue: J,
              });
            null === Q.language && (Q.value = J);
            var Y = Q.value.length + A,
              ee = (function (e, t, n, r, a, i, c, s, l) {
                var u,
                  g = (function e(t) {
                    for (
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [],
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [],
                        a = 0;
                      a < t.length;
                      a++
                    ) {
                      var i,
                        c = t[a];
                      if ("text" === c.type)
                        r.push(
                          _({
                            children: [c],
                            className:
                              (function (e) {
                                if (Array.isArray(e)) return o(e);
                              })((i = new Set(n))) ||
                              (function (e) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != e[Symbol.iterator]) ||
                                  null != e["@@iterator"]
                                )
                                  return Array.from(e);
                              })(i) ||
                              (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return o(e, void 0);
                                  var n = {}.toString.call(e).slice(8, -1);
                                  return (
                                    "Object" === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    "Map" === n || "Set" === n
                                      ? Array.from(e)
                                      : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n
                                        )
                                      ? o(e, void 0)
                                      : void 0
                                  );
                                }
                              })(i) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                          })
                        );
                      else if (c.children) {
                        var s = n.concat(c.properties.className);
                        e(c.children, s).forEach(function (e) {
                          return r.push(e);
                        });
                      }
                    }
                    return r;
                  })(e.value),
                  d = [],
                  f = -1,
                  p = 0;
                function h(e, o) {
                  var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return t || i.length > 0
                    ? (function (e, t) {
                        var o =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [];
                        return _({
                          children: e,
                          lineNumber: t,
                          lineNumberStyle: s,
                          largestLineNumber: c,
                          showInlineLineNumbers: a,
                          lineProps: n,
                          className: o,
                          showLineNumbers: r,
                          wrapLongLines: l,
                        });
                      })(e, o, i)
                    : (function (e, t) {
                        if (r && t && a) {
                          var n = v(s, t, c);
                          e.unshift(y(t, n));
                        }
                        return e;
                      })(e, o);
                }
                for (; p < g.length; )
                  !(function () {
                    var e = g[p],
                      t = e.children[0].value;
                    if (t.match(b)) {
                      var n = t.split("\n");
                      n.forEach(function (t, a) {
                        var o = r && d.length + i,
                          c = { type: "text", value: "".concat(t, "\n") };
                        if (0 === a) {
                          var s = h(
                            g
                              .slice(f + 1, p)
                              .concat(
                                _({
                                  children: [c],
                                  className: e.properties.className,
                                })
                              ),
                            o
                          );
                          d.push(s);
                        } else if (a === n.length - 1) {
                          var l =
                              g[p + 1] &&
                              g[p + 1].children &&
                              g[p + 1].children[0],
                            u = { type: "text", value: "".concat(t) };
                          if (l) {
                            var b = _({
                              children: [u],
                              className: e.properties.className,
                            });
                            g.splice(p + 1, 0, b);
                          } else {
                            var m = h([u], o, e.properties.className);
                            d.push(m);
                          }
                        } else {
                          var y = h([c], o, e.properties.className);
                          d.push(y);
                        }
                      }),
                        (f = p);
                    }
                    p++;
                  })();
                if (f !== g.length - 1) {
                  var m = g.slice(f + 1, g.length);
                  if (m && m.length) {
                    var E = h(m, r && d.length + i);
                    d.push(E);
                  }
                }
                return t ? d : (u = []).concat.apply(u, d);
              })(Q, D, void 0 === P ? {} : P, S, k, A, Y, L, I);
            return s.createElement(
              U,
              V,
              s.createElement(
                z,
                d,
                !k && q,
                B({ rows: ee, stylesheet: c, useInlineStyles: x })
              )
            );
          });
      x.registerLanguage = N.registerLanguage;
      var O = x;
    },
    91706: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
