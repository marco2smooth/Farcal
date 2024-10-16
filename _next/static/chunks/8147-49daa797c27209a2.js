(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8147],
  {
    6299: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        u = /^\s*/,
        r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        c = /^\s+|\s+$/g;
      function a(e) {
        return e ? e.replace(c, "") : "";
      }
      e.exports = function (e, c) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        c = c || {};
        var s = 1,
          f = 1;
        function p(e) {
          var t = e.match(n);
          t && (s += t.length);
          var u = e.lastIndexOf("\n");
          f = ~u ? e.length - u : f + e.length;
        }
        function d() {
          var e = { line: s, column: f };
          return function (t) {
            return (t.position = new F(e)), A(u), t;
          };
        }
        function F(e) {
          (this.start = e),
            (this.end = { line: s, column: f }),
            (this.source = c.source);
        }
        F.prototype.content = e;
        var h = [];
        function m(t) {
          var n = Error(c.source + ":" + s + ":" + f + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = c.source),
            (n.line = s),
            (n.column = f),
            (n.source = e),
            c.silent)
          )
            h.push(n);
          else throw n;
        }
        function A(t) {
          var n = t.exec(e);
          if (n) {
            var u = n[0];
            return p(u), (e = e.slice(u.length)), n;
          }
        }
        function g(e) {
          var t;
          for (e = e || []; (t = y()); ) !1 !== t && e.push(t);
          return e;
        }
        function y() {
          var t = d();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return m("End of comment missing");
            var u = e.slice(2, n - 2);
            return (
              (f += 2),
              p(u),
              (e = e.slice(n)),
              (f += 2),
              t({ type: "comment", comment: u })
            );
          }
        }
        return (
          A(u),
          (function () {
            var e,
              n = [];
            for (
              g(n);
              (e = (function () {
                var e = d(),
                  n = A(r);
                if (n) {
                  if ((y(), !A(i))) return m("property missing ':'");
                  var u = A(o),
                    c = e({
                      type: "declaration",
                      property: a(n[0].replace(t, "")),
                      value: u ? a(u[0].replace(t, "")) : "",
                    });
                  return A(l), c;
                }
              })());

            )
              !1 !== e && (n.push(e), g(n));
            return n;
          })()
        );
      };
    },
    2730: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return i;
        },
      });
      var u = n(99238),
        r = n(67061);
      let i = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, r.xz)(t) ? (0, u.f)(e, i, "linePrefix")(t) : i(t);
          };
          function i(e) {
            return null === e || (0, r.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    67061: function (e, t, n) {
      "use strict";
      n.d(t, {
        jv: function () {
          return u;
        },
        H$: function () {
          return r;
        },
        n9: function () {
          return i;
        },
        Av: function () {
          return o;
        },
        pY: function () {
          return l;
        },
        AF: function () {
          return c;
        },
        sR: function () {
          return a;
        },
        Ch: function () {
          return s;
        },
        z3: function () {
          return f;
        },
        xz: function () {
          return p;
        },
      });
      let u = d(/[A-Za-z]/),
        r = d(/[\dA-Za-z]/),
        i = d(/[#-'*+\--9=?A-Z^-~]/);
      function o(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let l = d(/\d/),
        c = d(/[\dA-Fa-f]/),
        a = d(/[!-/:-@[-`{-~]/);
      function s(e) {
        return null !== e && e < -2;
      }
      function f(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function p(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      function d(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      d(
        /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
      ),
        d(/\s/);
    },
    99238: function (e, t, n) {
      "use strict";
      function u(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      function r(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function i(e, t, n, r) {
        let i = r ? r - 1 : Number.POSITIVE_INFINITY,
          o = 0;
        return function (r) {
          return u(r)
            ? (e.enter(n),
              (function r(l) {
                return u(l) && o++ < i ? (e.consume(l), r) : (e.exit(n), t(l));
              })(r))
            : t(r);
        };
      }
      n.d(t, {
        f: function () {
          return i;
        },
      }),
        r(/[A-Za-z]/),
        r(/[\dA-Za-z]/),
        r(/[#-'*+\--9=?A-Z^-~]/),
        r(/\d/),
        r(/[\dA-Fa-f]/),
        r(/[!-/:-@[-`{-~]/),
        r(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        r(/\s/);
    },
    50189: function (e, t, n) {
      "use strict";
      function u(e, t, n, u) {
        let r;
        let i = e.length,
          o = 0;
        if (
          ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
          (n = n > 0 ? n : 0),
          u.length < 1e4)
        )
          (r = Array.from(u)).unshift(t, n), e.splice(...r);
        else
          for (n && e.splice(t, n); o < u.length; )
            (r = u.slice(o, o + 1e4)).unshift(t, 0),
              e.splice(...r),
              (o += 1e4),
              (t += 1e4);
      }
      function r(e, t) {
        return e.length > 0 ? (u(e, e.length, 0, t), e) : t;
      }
      n.d(t, {
        V: function () {
          return r;
        },
        d: function () {
          return u;
        },
      });
    },
    25869: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      }),
        i(/[A-Za-z]/),
        i(/[\dA-Za-z]/),
        i(/[#-'*+\--9=?A-Z^-~]/),
        i(/\d/),
        i(/[\dA-Fa-f]/),
        i(/[!-/:-@[-`{-~]/);
      let u = i(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        r = i(/\s/);
      function i(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function o(e) {
        return null === e || (null !== e && (e < 0 || 32 === e)) || r(e)
          ? 1
          : u(e)
          ? 2
          : void 0;
      }
    },
    61271: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var u = n(50189);
      let r = {}.hasOwnProperty;
      function i(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; )
          !(function (e, t) {
            let n;
            for (n in t) {
              let i;
              let o = (r.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                l = t[n];
              if (l)
                for (i in l) {
                  r.call(o, i) || (o[i] = []);
                  let e = l[i];
                  !(function (e, t) {
                    let n = -1,
                      r = [];
                    for (; ++n < t.length; )
                      ("after" === t[n].add ? e : r).push(t[n]);
                    (0, u.d)(e, 0, 0, r);
                  })(o[i], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(t, e[n]);
        return t;
      }
    },
    14343: function (e, t, n) {
      "use strict";
      function u(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCharCode(n);
      }
      n.d(t, {
        o: function () {
          return u;
        },
      });
    },
    1973: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return o;
        },
      });
      var u = n(33859),
        r = n(14343);
      let i =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function o(e) {
        return e.replace(i, l);
      }
      function l(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return (0, r.o)(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return (0, u.T)(n) || e;
      }
    },
    20402: function (e, t, n) {
      "use strict";
      function u(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, {
        d: function () {
          return u;
        },
      });
    },
    79598: function (e, t, n) {
      "use strict";
      function u(e, t, n) {
        let u = [],
          r = -1;
        for (; ++r < e.length; ) {
          let i = e[r].resolveAll;
          i && !u.includes(i) && ((t = i(t, n)), u.push(i));
        }
        return t;
      }
      n.d(t, {
        C: function () {
          return u;
        },
      });
    },
    88147: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return tU;
        },
      });
      var u = {};
      n.r(u),
        n.d(u, {
          attentionMarkers: function () {
            return eX;
          },
          contentInitial: function () {
            return eQ;
          },
          disable: function () {
            return e0;
          },
          document: function () {
            return eZ;
          },
          flow: function () {
            return eY;
          },
          flowInitial: function () {
            return eW;
          },
          insideSpan: function () {
            return eK;
          },
          string: function () {
            return eJ;
          },
          text: function () {
            return eG;
          },
        });
      var r = n(2784),
        i = n(97033),
        o = n.n(i);
      function l(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? a(e.position)
            : "start" in e || "end" in e
            ? a(e)
            : "line" in e || "column" in e
            ? c(e)
            : ""
          : "";
      }
      function c(e) {
        return s(e && e.line) + ":" + s(e && e.column);
      }
      function a(e) {
        return c(e && e.start) + "-" + c(e && e.end);
      }
      function s(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class f extends Error {
        constructor(e, t, n) {
          let u = [null, null],
            r = {
              start: { line: null, column: null },
              end: { line: null, column: null },
            };
          if (
            (super(),
            "string" == typeof t && ((n = t), (t = void 0)),
            "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (u[1] = n)
              : ((u[0] = n.slice(0, e)), (u[1] = n.slice(e + 1)));
          }
          t &&
            ("type" in t || "position" in t
              ? t.position && (r = t.position)
              : "start" in t || "end" in t
              ? (r = t)
              : ("line" in t || "column" in t) && (r.start = t)),
            (this.name = l(t) || "1:1"),
            (this.message = "object" == typeof e ? e.message : e),
            (this.stack = ""),
            "object" == typeof e && e.stack && (this.stack = e.stack),
            (this.reason = this.message),
            this.fatal,
            (this.line = r.start.line),
            (this.column = r.start.column),
            (this.position = r),
            (this.source = u[0]),
            (this.ruleId = u[1]),
            this.file,
            this.actual,
            this.expected,
            this.url,
            this.note;
        }
      }
      (f.prototype.file = ""),
        (f.prototype.name = ""),
        (f.prototype.reason = ""),
        (f.prototype.message = ""),
        (f.prototype.stack = ""),
        (f.prototype.fatal = null),
        (f.prototype.column = null),
        (f.prototype.line = null),
        (f.prototype.source = null),
        (f.prototype.ruleId = null),
        (f.prototype.position = null);
      let p = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          d(e);
          let u = 0,
            r = -1,
            i = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; i--; )
              if (47 === e.charCodeAt(i)) {
                if (n) {
                  u = i + 1;
                  break;
                }
              } else r < 0 && ((n = !0), (r = i + 1));
            return r < 0 ? "" : e.slice(u, r);
          }
          if (t === e) return "";
          let o = -1,
            l = t.length - 1;
          for (; i--; )
            if (47 === e.charCodeAt(i)) {
              if (n) {
                u = i + 1;
                break;
              }
            } else
              o < 0 && ((n = !0), (o = i + 1)),
                l > -1 &&
                  (e.charCodeAt(i) === t.charCodeAt(l--)
                    ? l < 0 && (r = i)
                    : ((l = -1), (r = o)));
          return u === r ? (r = o) : r < 0 && (r = e.length), e.slice(u, r);
        },
        dirname: function (e) {
          let t;
          if ((d(e), 0 === e.length)) return ".";
          let n = -1,
            u = e.length;
          for (; --u; )
            if (47 === e.charCodeAt(u)) {
              if (t) {
                n = u;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.charCodeAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          d(e);
          let n = e.length,
            u = -1,
            r = 0,
            i = -1,
            o = 0;
          for (; n--; ) {
            let l = e.charCodeAt(n);
            if (47 === l) {
              if (t) {
                r = n + 1;
                break;
              }
              continue;
            }
            u < 0 && ((t = !0), (u = n + 1)),
              46 === l
                ? i < 0
                  ? (i = n)
                  : 1 !== o && (o = 1)
                : i > -1 && (o = -1);
          }
          return i < 0 ||
            u < 0 ||
            0 === o ||
            (1 === o && i === u - 1 && i === r + 1)
            ? ""
            : e.slice(i, u);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            d(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                d(e);
                let t = 47 === e.charCodeAt(0),
                  n = (function (e, t) {
                    let n,
                      u,
                      r = "",
                      i = 0,
                      o = -1,
                      l = 0,
                      c = -1;
                    for (; ++c <= e.length; ) {
                      if (c < e.length) n = e.charCodeAt(c);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (o === c - 1 || 1 === l);
                        else if (o !== c - 1 && 2 === l) {
                          if (
                            r.length < 2 ||
                            2 !== i ||
                            46 !== r.charCodeAt(r.length - 1) ||
                            46 !== r.charCodeAt(r.length - 2)
                          ) {
                            if (r.length > 2) {
                              if ((u = r.lastIndexOf("/")) !== r.length - 1) {
                                u < 0
                                  ? ((r = ""), (i = 0))
                                  : (i =
                                      (r = r.slice(0, u)).length -
                                      1 -
                                      r.lastIndexOf("/")),
                                  (o = c),
                                  (l = 0);
                                continue;
                              }
                            } else if (r.length > 0) {
                              (r = ""), (i = 0), (o = c), (l = 0);
                              continue;
                            }
                          }
                          t && ((r = r.length > 0 ? r + "/.." : ".."), (i = 2));
                        } else
                          r.length > 0
                            ? (r += "/" + e.slice(o + 1, c))
                            : (r = e.slice(o + 1, c)),
                            (i = c - o - 1);
                        (o = c), (l = 0);
                      } else 46 === n && l > -1 ? l++ : (l = -1);
                    }
                    return r;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.charCodeAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function d(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      function F(e) {
        return null !== e && "object" == typeof e && e.href && e.origin;
      }
      let h = ["history", "path", "basename", "stem", "extname", "dirname"];
      class m {
        constructor(e) {
          let t, n;
          (t = e
            ? "string" == typeof e || o()(e)
              ? { value: e }
              : F(e)
              ? { path: e }
              : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = "/"),
            this.value,
            this.stored,
            this.result,
            this.map;
          let u = -1;
          for (; ++u < h.length; ) {
            let e = h[u];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) h.includes(n) || (this[n] = t[n]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          F(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!F(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                    let e = t.charCodeAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            g(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get dirname() {
          return "string" == typeof this.path ? p.dirname(this.path) : void 0;
        }
        set dirname(e) {
          y(this.basename, "dirname"),
            (this.path = p.join(e || "", this.basename));
        }
        get basename() {
          return "string" == typeof this.path ? p.basename(this.path) : void 0;
        }
        set basename(e) {
          g(e, "basename"),
            A(e, "basename"),
            (this.path = p.join(this.dirname || "", e));
        }
        get extname() {
          return "string" == typeof this.path ? p.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((A(e, "extname"), y(this.dirname, "extname"), e)) {
            if (46 !== e.charCodeAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = p.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return "string" == typeof this.path
            ? p.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          g(e, "stem"),
            A(e, "stem"),
            (this.path = p.join(this.dirname || "", e + (this.extname || "")));
        }
        toString(e) {
          return (this.value || "").toString(e || void 0);
        }
        message(e, t, n) {
          let u = new f(e, t, n);
          return (
            this.path &&
              ((u.name = this.path + ":" + u.name), (u.file = this.path)),
            (u.fatal = !1),
            this.messages.push(u),
            u
          );
        }
        info(e, t, n) {
          let u = this.message(e, t, n);
          return (u.fatal = null), u;
        }
        fail(e, t, n) {
          let u = this.message(e, t, n);
          throw ((u.fatal = !0), u);
        }
      }
      function A(e, t) {
        if (e && e.includes(p.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + p.sep + "`"
          );
      }
      function g(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function y(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      var E = n(87683),
        x = n(9520),
        C = n.n(x),
        D = n(49385),
        k = n.n(D),
        v = n(21856),
        b = n(68776);
      let B = (function e() {
          let t;
          let n = (0, b.r)(),
            u = [],
            r = {},
            i = -1;
          return (
            (o.data = function (e, n) {
              return "string" == typeof e
                ? 2 == arguments.length
                  ? (I("data", t), (r[e] = n), o)
                  : (S.call(r, e) && r[e]) || null
                : e
                ? (I("data", t), (r = e), o)
                : r;
            }),
            (o.Parser = void 0),
            (o.Compiler = void 0),
            (o.freeze = function () {
              if (t) return o;
              for (; ++i < u.length; ) {
                let [e, ...t] = u[i];
                if (!1 === t[0]) continue;
                !0 === t[0] && (t[0] = void 0);
                let r = e.call(o, ...t);
                "function" == typeof r && n.use(r);
              }
              return (t = !0), (i = Number.POSITIVE_INFINITY), o;
            }),
            (o.attachers = u),
            (o.use = function (e, ...n) {
              let i;
              if ((I("use", t), null == e));
              else if ("function" == typeof e) a(e, ...n);
              else if ("object" == typeof e) Array.isArray(e) ? c(e) : l(e);
              else throw TypeError("Expected usable value, not `" + e + "`");
              return i && (r.settings = Object.assign(r.settings || {}, i)), o;
              function l(e) {
                c(e.plugins),
                  e.settings && (i = Object.assign(i || {}, e.settings));
              }
              function c(e) {
                let t = -1;
                if (null == e);
                else if (Array.isArray(e))
                  for (; ++t < e.length; )
                    !(function (e) {
                      if ("function" == typeof e) a(e);
                      else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                          let [t, ...n] = e;
                          a(t, ...n);
                        } else l(e);
                      } else
                        throw TypeError(
                          "Expected usable value, not `" + e + "`"
                        );
                    })(e[t]);
                else
                  throw TypeError(
                    "Expected a list of plugins, not `" + e + "`"
                  );
              }
              function a(e, t) {
                let n,
                  r = -1;
                for (; ++r < u.length; )
                  if (u[r][0] === e) {
                    n = u[r];
                    break;
                  }
                n
                  ? ((0, v.Z)(n[1]) && (0, v.Z)(t) && (t = k()(!0, n[1], t)),
                    (n[1] = t))
                  : u.push([...arguments]);
              }
            }),
            (o.parse = function (e) {
              o.freeze();
              let t = O(e),
                n = o.Parser;
              return (z("parse", n), w(n, "parse"))
                ? new n(String(t), t).parse()
                : n(String(t), t);
            }),
            (o.stringify = function (e, t) {
              o.freeze();
              let n = O(t),
                u = o.Compiler;
              return (T("stringify", u), P(e), w(u, "compile"))
                ? new u(e, n).compile()
                : u(e, n);
            }),
            (o.run = function (e, t, u) {
              if (
                (P(e),
                o.freeze(),
                u || "function" != typeof t || ((u = t), (t = void 0)),
                !u)
              )
                return new Promise(r);
              function r(r, i) {
                n.run(e, O(t), function (t, n, o) {
                  (n = n || e), t ? i(t) : r ? r(n) : u(null, n, o);
                });
              }
              r(null, u);
            }),
            (o.runSync = function (e, t) {
              let n, u;
              return (
                o.run(e, t, function (e, t) {
                  (0, E.N)(e), (n = t), (u = !0);
                }),
                N("runSync", "run", u),
                n
              );
            }),
            (o.process = function (e, t) {
              if (
                (o.freeze(),
                z("process", o.Parser),
                T("process", o.Compiler),
                !t)
              )
                return new Promise(n);
              function n(n, u) {
                let r = O(e);
                function i(e, r) {
                  e || !r ? u(e) : n ? n(r) : t(null, r);
                }
                o.run(o.parse(r), r, (e, t, n) => {
                  if (!e && t && n) {
                    let u = o.stringify(t, n);
                    null == u ||
                      ("string" == typeof u || C()(u)
                        ? (n.value = u)
                        : (n.result = u)),
                      i(e, n);
                  } else i(e);
                });
              }
              n(null, t);
            }),
            (o.processSync = function (e) {
              let t;
              o.freeze(),
                z("processSync", o.Parser),
                T("processSync", o.Compiler);
              let n = O(e);
              return (
                o.process(n, function (e) {
                  (t = !0), (0, E.N)(e);
                }),
                N("processSync", "process", t),
                n
              );
            }),
            o
          );
          function o() {
            let t = e(),
              n = -1;
            for (; ++n < u.length; ) t.use(...u[n]);
            return t.data(k()(!0, {}, r)), t;
          }
        })().freeze(),
        S = {}.hasOwnProperty;
      function w(e, t) {
        return (
          "function" == typeof e &&
          e.prototype &&
          ((function (e) {
            let t;
            for (t in e) if (S.call(e, t)) return !0;
            return !1;
          })(e.prototype) ||
            t in e.prototype)
        );
      }
      function z(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `Parser`");
      }
      function T(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `Compiler`");
      }
      function I(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function P(e) {
        if (!(0, v.Z)(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function N(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function O(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new m(e);
      }
      let _ = {};
      function L(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return j(e.children, t, n);
        }
        return Array.isArray(e) ? j(e, t, n) : "";
      }
      function j(e, t, n) {
        let u = [],
          r = -1;
        for (; ++r < e.length; ) u[r] = L(e[r], t, n);
        return u.join("");
      }
      var M = n(61271),
        R = n(99238);
      function H(e) {
        return null !== e && e < -2;
      }
      function V(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      V(/[A-Za-z]/),
        V(/[\dA-Za-z]/),
        V(/[#-'*+\--9=?A-Z^-~]/),
        V(/\d/),
        V(/[\dA-Fa-f]/),
        V(/[!-/:-@[-`{-~]/),
        V(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        V(/\s/);
      let $ = {
        tokenize: function (e) {
          let t;
          let n = e.attempt(
            this.parser.constructs.contentInitial,
            function (t) {
              if (null === t) {
                e.consume(t);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, R.f)(e, n, "linePrefix")
              );
            },
            function (n) {
              return (
                e.enter("paragraph"),
                (function n(u) {
                  let r = e.enter("chunkText", {
                    contentType: "text",
                    previous: t,
                  });
                  return (
                    t && (t.next = r),
                    (t = r),
                    (function t(u) {
                      if (null === u) {
                        e.exit("chunkText"), e.exit("paragraph"), e.consume(u);
                        return;
                      }
                      return H(u)
                        ? (e.consume(u), e.exit("chunkText"), n)
                        : (e.consume(u), t);
                    })(u)
                  );
                })(n)
              );
            }
          );
          return n;
        },
      };
      var q = n(50189);
      let U = {
          tokenize: function (e) {
            let t, n, u;
            let r = this,
              i = [],
              o = 0;
            return l;
            function l(t) {
              if (o < i.length) {
                let n = i[o];
                return (
                  (r.containerState = n[1]),
                  e.attempt(n[0].continuation, c, a)(t)
                );
              }
              return a(t);
            }
            function c(e) {
              if ((o++, r.containerState._closeFlow)) {
                let n;
                (r.containerState._closeFlow = void 0), t && A();
                let u = r.events.length,
                  i = u;
                for (; i--; )
                  if (
                    "exit" === r.events[i][0] &&
                    "chunkFlow" === r.events[i][1].type
                  ) {
                    n = r.events[i][1].end;
                    break;
                  }
                m(o);
                let l = u;
                for (; l < r.events.length; )
                  (r.events[l][1].end = Object.assign({}, n)), l++;
                return (
                  (0, q.d)(r.events, i + 1, 0, r.events.slice(u)),
                  (r.events.length = l),
                  a(e)
                );
              }
              return l(e);
            }
            function a(n) {
              if (o === i.length) {
                if (!t) return p(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return F(n);
                r.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (r.containerState = {}), e.check(Z, s, f)(n);
            }
            function s(e) {
              return t && A(), m(o), p(e);
            }
            function f(e) {
              return (
                (r.parser.lazy[r.now().line] = o !== i.length),
                (u = r.now().offset),
                F(e)
              );
            }
            function p(t) {
              return (r.containerState = {}), e.attempt(Z, d, F)(t);
            }
            function d(e) {
              return o++, i.push([r.currentConstruct, r.containerState]), p(e);
            }
            function F(u) {
              if (null === u) {
                t && A(), m(0), e.consume(u);
                return;
              }
              return (
                (t = t || r.parser.flow(r.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: n,
                  _tokenizer: t,
                }),
                (function t(n) {
                  if (null === n) {
                    h(e.exit("chunkFlow"), !0), m(0), e.consume(n);
                    return;
                  }
                  return H(n)
                    ? (e.consume(n),
                      h(e.exit("chunkFlow")),
                      (o = 0),
                      (r.interrupt = void 0),
                      l)
                    : (e.consume(n), t);
                })(u)
              );
            }
            function h(e, i) {
              let l = r.sliceStream(e);
              if (
                (i && l.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(l),
                r.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  i = t.events.length;
                for (; i--; )
                  if (
                    t.events[i][1].start.offset < u &&
                    (!t.events[i][1].end || t.events[i][1].end.offset > u)
                  )
                    return;
                let l = r.events.length,
                  c = l;
                for (; c--; )
                  if (
                    "exit" === r.events[c][0] &&
                    "chunkFlow" === r.events[c][1].type
                  ) {
                    if (e) {
                      n = r.events[c][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (m(o), i = l; i < r.events.length; )
                  (r.events[i][1].end = Object.assign({}, n)), i++;
                (0, q.d)(r.events, c + 1, 0, r.events.slice(l)),
                  (r.events.length = i);
              }
            }
            function m(t) {
              let n = i.length;
              for (; n-- > t; ) {
                let t = i[n];
                (r.containerState = t[1]), t[0].exit.call(r, e);
              }
              i.length = t;
            }
            function A() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (r.containerState._closeFlow = void 0);
            }
          },
        },
        Z = {
          tokenize: function (e, t, n) {
            return (0, R.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var Q = n(2730),
        W = n(67061);
      function Y(e) {
        let t, n, u, r, i, o, l;
        let c = {},
          a = -1;
        for (; ++a < e.length; ) {
          for (; a in c; ) a = c[a];
          if (
            ((t = e[a]),
            a &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === e[a - 1][1].type &&
              ((u = 0) < (o = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === o[u][1].type &&
                (u += 2),
              u < o.length && "content" === o[u][1].type))
          )
            for (; ++u < o.length && "content" !== o[u][1].type; )
              "chunkText" === o[u][1].type &&
                ((o[u][1]._isInFirstContentOfListItem = !0), u++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                c,
                (function (e, t) {
                  let n, u;
                  let r = e[t][1],
                    i = e[t][2],
                    o = t - 1,
                    l = [],
                    c = r._tokenizer || i.parser[r.contentType](r.start),
                    a = c.events,
                    s = [],
                    f = {},
                    p = -1,
                    d = r,
                    F = 0,
                    h = 0,
                    m = [0];
                  for (; d; ) {
                    for (; e[++o][1] !== d; );
                    l.push(o),
                      !d._tokenizer &&
                        ((n = i.sliceStream(d)),
                        d.next || n.push(null),
                        u && c.defineSkip(d.start),
                        d._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = !0),
                        c.write(n),
                        d._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = void 0)),
                      (u = d),
                      (d = d.next);
                  }
                  for (d = r; ++p < a.length; )
                    "exit" === a[p][0] &&
                      "enter" === a[p - 1][0] &&
                      a[p][1].type === a[p - 1][1].type &&
                      a[p][1].start.line !== a[p][1].end.line &&
                      ((h = p + 1),
                      m.push(h),
                      (d._tokenizer = void 0),
                      (d.previous = void 0),
                      (d = d.next));
                  for (
                    c.events = [],
                      d
                        ? ((d._tokenizer = void 0), (d.previous = void 0))
                        : m.pop(),
                      p = m.length;
                    p--;

                  ) {
                    let t = a.slice(m[p], m[p + 1]),
                      n = l.pop();
                    s.unshift([n, n + t.length - 1]), (0, q.d)(e, n, 2, t);
                  }
                  for (p = -1; ++p < s.length; )
                    (f[F + s[p][0]] = F + s[p][1]),
                      (F += s[p][1] - s[p][0] - 1);
                  return f;
                })(e, a)
              ),
              (a = c[a]),
              (l = !0));
          else if (t[1]._container) {
            for (u = a, n = void 0; u--; )
              if (
                "lineEnding" === (r = e[u])[1].type ||
                "lineEndingBlank" === r[1].type
              )
                "enter" === r[0] &&
                  (n && (e[n][1].type = "lineEndingBlank"),
                  (r[1].type = "lineEnding"),
                  (n = u));
              else break;
            n &&
              ((t[1].end = Object.assign({}, e[n][1].start)),
              (i = e.slice(n, a)).unshift(t),
              (0, q.d)(e, n, a - n + 1, i));
          }
        }
        return !l;
      }
      let J = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                u(t)
              );
            };
            function u(t) {
              return null === t
                ? r(t)
                : (0, W.Ch)(t)
                ? e.check(G, i, r)(t)
                : (e.consume(t), u);
            }
            function r(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function i(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                u
              );
            }
          },
          resolve: function (e) {
            return Y(e), e;
          },
        },
        G = {
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, R.f)(e, r, "linePrefix")
              );
            };
            function r(r) {
              if (null === r || (0, W.Ch)(r)) return n(r);
              let i = u.events[u.events.length - 1];
              return !u.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(r)
                : e.interrupt(u.parser.constructs.flow, n, t)(r);
            }
          },
          partial: !0,
        },
        K = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                Q.w,
                function (u) {
                  if (null === u) {
                    e.consume(u);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(u),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  u,
                  (0, R.f)(
                    e,
                    e.attempt(this.parser.constructs.flow, u, e.attempt(J, u)),
                    "linePrefix"
                  )
                )
              );
            return n;
            function u(u) {
              if (null === u) {
                e.consume(u);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(u),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        X = { resolveAll: eu() },
        ee = en("string"),
        et = en("text");
      function en(e) {
        return {
          tokenize: function (t) {
            let n = this,
              u = this.parser.constructs[e],
              r = t.attempt(u, i, o);
            return i;
            function i(e) {
              return c(e) ? r(e) : o(e);
            }
            function o(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), l;
            }
            function l(e) {
              return c(e) ? (t.exit("data"), r(e)) : (t.consume(e), l);
            }
            function c(e) {
              if (null === e) return !0;
              let t = u[e],
                r = -1;
              if (t)
                for (; ++r < t.length; ) {
                  let e = t[r];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: eu("text" === e ? er : void 0),
        };
      }
      function eu(e) {
        return function (t, n) {
          let u,
            r = -1;
          for (; ++r <= t.length; )
            void 0 === u
              ? t[r] && "data" === t[r][1].type && ((u = r), r++)
              : (t[r] && "data" === t[r][1].type) ||
                (r !== u + 2 &&
                  ((t[u][1].end = t[r - 1][1].end),
                  t.splice(u + 2, r - u - 2),
                  (r = u + 2)),
                (u = void 0));
          return e ? e(t, n) : t;
        };
      }
      function er(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let u;
            let r = e[n - 1][1],
              i = t.sliceStream(r),
              o = i.length,
              l = -1,
              c = 0;
            for (; o--; ) {
              let e = i[o];
              if ("string" == typeof e) {
                for (l = e.length; 32 === e.charCodeAt(l - 1); ) c++, l--;
                if (l) break;
                l = -1;
              } else if (-2 === e) (u = !0), c++;
              else if (-1 === e);
              else {
                o++;
                break;
              }
            }
            if (c) {
              let i = {
                type:
                  n === e.length || u || c < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - c,
                  offset: r.end.offset - c,
                  _index: r.start._index + o,
                  _bufferIndex: o ? l : r.start._bufferIndex + l,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, i.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, i)
                  : (e.splice(n, 0, ["enter", i, t], ["exit", i, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var ei = n(79598);
      let eo = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let u,
              r = 0;
            return function (i) {
              return (
                e.enter("thematicBreak"),
                (u = i),
                (function i(o) {
                  return o === u
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === u
                          ? (e.consume(n), r++, t)
                          : (e.exit("thematicBreakSequence"),
                            (0, W.xz)(n)
                              ? (0, R.f)(e, i, "whitespace")(n)
                              : i(n));
                      })(o))
                    : r >= 3 && (null === o || (0, W.Ch)(o))
                    ? (e.exit("thematicBreak"), t(o))
                    : n(o);
                })(i)
              );
            };
          },
        },
        el = {
          name: "list",
          tokenize: function (e, t, n) {
            let u = this,
              r = u.events[u.events.length - 1],
              i =
                r && "linePrefix" === r[1].type
                  ? r[2].sliceSerialize(r[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              let r =
                u.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === r
                  ? !u.containerState.marker || t === u.containerState.marker
                  : (0, W.pY)(t)
              ) {
                if (
                  (u.containerState.type ||
                    ((u.containerState.type = r),
                    e.enter(r, { _container: !0 })),
                  "listUnordered" === r)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(eo, n, l)(t) : l(t)
                  );
                if (!u.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(r) {
                      return (0, W.pY)(r) && ++o < 10
                        ? (e.consume(r), t)
                        : (!u.interrupt || o < 2) &&
                          (u.containerState.marker
                            ? r === u.containerState.marker
                            : 41 === r || 46 === r)
                        ? (e.exit("listItemValue"), l(r))
                        : n(r);
                    })(t)
                  );
              }
              return n(t);
            };
            function l(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (u.containerState.marker = u.containerState.marker || t),
                e.check(Q.w, u.interrupt ? n : c, e.attempt(ec, s, a))
              );
            }
            function c(e) {
              return (u.containerState.initialBlankLine = !0), i++, s(e);
            }
            function a(t) {
              return (0, W.xz)(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  s)
                : n(t);
            }
            function s(n) {
              return (
                (u.containerState.size =
                  i + u.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let u = this;
              return (
                (u.containerState._closeFlow = void 0),
                e.check(
                  Q.w,
                  function (n) {
                    return (
                      (u.containerState.furtherBlankLines =
                        u.containerState.furtherBlankLines ||
                        u.containerState.initialBlankLine),
                      (0, R.f)(
                        e,
                        t,
                        "listItemIndent",
                        u.containerState.size + 1
                      )(n)
                    );
                  },
                  function (n) {
                    return u.containerState.furtherBlankLines || !(0, W.xz)(n)
                      ? ((u.containerState.furtherBlankLines = void 0),
                        (u.containerState.initialBlankLine = void 0),
                        r(n))
                      : ((u.containerState.furtherBlankLines = void 0),
                        (u.containerState.initialBlankLine = void 0),
                        e.attempt(ea, t, r)(n));
                  }
                )
              );
              function r(r) {
                return (
                  (u.containerState._closeFlow = !0),
                  (u.interrupt = void 0),
                  (0, R.f)(
                    e,
                    e.attempt(el, t, n),
                    "linePrefix",
                    u.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(r)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        ec = {
          tokenize: function (e, t, n) {
            let u = this;
            return (0, R.f)(
              e,
              function (e) {
                let r = u.events[u.events.length - 1];
                return !(0, W.xz)(e) &&
                  r &&
                  "listItemPrefixWhitespace" === r[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              u.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        ea = {
          tokenize: function (e, t, n) {
            let u = this;
            return (0, R.f)(
              e,
              function (e) {
                let r = u.events[u.events.length - 1];
                return r &&
                  "listItemIndent" === r[1].type &&
                  r[2].sliceSerialize(r[1], !0).length === u.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              u.containerState.size + 1
            );
          },
          partial: !0,
        },
        es = {
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              if (62 === t) {
                let n = u.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  r
                );
              }
              return n(t);
            };
            function r(n) {
              return (0, W.xz)(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let u = this;
              return function (t) {
                return (0, W.xz)(t)
                  ? (0, R.f)(
                      e,
                      r,
                      "linePrefix",
                      u.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : r(t);
              };
              function r(u) {
                return e.attempt(es, t, n)(u);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      function ef(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      function ep(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function ed(e, t, n, u, r, i, o, l, c) {
        let a = c || Number.POSITIVE_INFINITY,
          s = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(u), e.enter(r), e.enter(i), e.consume(t), e.exit(i), f)
            : null === t || 32 === t || 41 === t || ef(t)
            ? n(t)
            : (e.enter(u),
              e.enter(o),
              e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              F(t));
        };
        function f(n) {
          return 62 === n
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), e.exit(u), t)
            : (e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              p(n));
        }
        function p(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(l), f(t))
            : null === t || 60 === t || (null !== t && t < -2)
            ? n(t)
            : (e.consume(t), 92 === t ? d : p);
        }
        function d(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
        function F(r) {
          return !s &&
            (null === r || 41 === r || (null !== r && (r < 0 || 32 === r)))
            ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(u), t(r))
            : s < a && 40 === r
            ? (e.consume(r), s++, F)
            : 41 === r
            ? (e.consume(r), s--, F)
            : null === r || 32 === r || 40 === r || ef(r)
            ? n(r)
            : (e.consume(r), 92 === r ? h : F);
        }
        function h(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), F) : F(t);
        }
      }
      function eF(e) {
        return null !== e && e < -2;
      }
      function eh(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function em(e, t, n, u, r, i) {
        let o;
        let l = this,
          c = 0;
        return function (t) {
          return e.enter(u), e.enter(r), e.consume(t), e.exit(r), e.enter(i), a;
        };
        function a(f) {
          return c > 999 ||
            null === f ||
            91 === f ||
            (93 === f && !o) ||
            (94 === f && !c && "_hiddenFootnoteSupport" in l.parser.constructs)
            ? n(f)
            : 93 === f
            ? (e.exit(i), e.enter(r), e.consume(f), e.exit(r), e.exit(u), t)
            : eF(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a)
            : (e.enter("chunkString", { contentType: "string" }), s(f));
        }
        function s(t) {
          return null === t || 91 === t || 93 === t || eF(t) || c++ > 999
            ? (e.exit("chunkString"), a(t))
            : (e.consume(t),
              !o && (o = !(-2 === t || -1 === t || 32 === t)),
              92 === t ? f : s);
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), c++, s)
            : s(t);
        }
      }
      function eA(e) {
        return null !== e && e < -2;
      }
      function eg(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function ey(e, t, n, u, r, i) {
        let o;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(u),
              e.enter(r),
              e.consume(t),
              e.exit(r),
              (o = 40 === t ? 41 : t),
              l)
            : n(t);
        };
        function l(n) {
          return n === o
            ? (e.enter(r), e.consume(n), e.exit(r), e.exit(u), t)
            : (e.enter(i), c(n));
        }
        function c(t) {
          return t === o
            ? (e.exit(i), l(o))
            : null === t
            ? n(t)
            : eA(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              (0, R.f)(e, c, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), a(t));
        }
        function a(t) {
          return t === o || null === t || eA(t)
            ? (e.exit("chunkString"), c(t))
            : (e.consume(t), 92 === t ? s : a);
        }
        function s(t) {
          return t === o || 92 === t ? (e.consume(t), a) : a(t);
        }
      }
      function eE(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function ex(e, t) {
        let n;
        return function u(r) {
          return null !== r && r < -2
            ? (e.enter("lineEnding"),
              e.consume(r),
              e.exit("lineEnding"),
              (n = !0),
              u)
            : -2 === r || -1 === r || 32 === r
            ? (0, R.f)(e, u, n ? "linePrefix" : "lineSuffix")(r)
            : t(r);
        };
      }
      ep(/[A-Za-z]/),
        ep(/[\dA-Za-z]/),
        ep(/[#-'*+\--9=?A-Z^-~]/),
        ep(/\d/),
        ep(/[\dA-Fa-f]/),
        ep(/[!-/:-@[-`{-~]/),
        ep(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        ep(/\s/),
        eh(/[A-Za-z]/),
        eh(/[\dA-Za-z]/),
        eh(/[#-'*+\--9=?A-Z^-~]/),
        eh(/\d/),
        eh(/[\dA-Fa-f]/),
        eh(/[!-/:-@[-`{-~]/),
        eh(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        eh(/\s/),
        eg(/[A-Za-z]/),
        eg(/[\dA-Za-z]/),
        eg(/[#-'*+\--9=?A-Z^-~]/),
        eg(/\d/),
        eg(/[\dA-Fa-f]/),
        eg(/[!-/:-@[-`{-~]/),
        eg(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        eg(/\s/),
        eE(/[A-Za-z]/),
        eE(/[\dA-Za-z]/),
        eE(/[#-'*+\--9=?A-Z^-~]/),
        eE(/\d/),
        eE(/[\dA-Fa-f]/),
        eE(/[!-/:-@[-`{-~]/),
        eE(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        eE(/\s/);
      var eC = n(20402);
      let eD = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, W.z3)(t) ? ex(e, u)(t) : n(t);
            };
            function u(t) {
              return ey(
                e,
                r,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function r(t) {
              return (0, W.xz)(t) ? (0, R.f)(e, i, "whitespace")(t) : i(t);
            }
            function i(e) {
              return null === e || (0, W.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        ek = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return (
                e.enter("codeIndented"), (0, R.f)(e, r, "linePrefix", 5)(t)
              );
            };
            function r(t) {
              let r = u.events[u.events.length - 1];
              return r &&
                "linePrefix" === r[1].type &&
                r[2].sliceSerialize(r[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? i(n)
                      : (0, W.Ch)(n)
                      ? e.attempt(ev, t, i)(n)
                      : (e.enter("codeFlowValue"),
                        (function n(u) {
                          return null === u || (0, W.Ch)(u)
                            ? (e.exit("codeFlowValue"), t(u))
                            : (e.consume(u), n);
                        })(n));
                  })(t)
                : n(t);
            }
            function i(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        ev = {
          tokenize: function (e, t, n) {
            let u = this;
            return r;
            function r(t) {
              return u.parser.lazy[u.now().line]
                ? n(t)
                : (0, W.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r)
                : (0, R.f)(e, i, "linePrefix", 5)(t);
            }
            function i(e) {
              let i = u.events[u.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(e)
                : (0, W.Ch)(e)
                ? r(e)
                : n(e);
            }
          },
          partial: !0,
        },
        eb = {
          name: "setextUnderline",
          tokenize: function (e, t, n) {
            let u;
            let r = this;
            return function (t) {
              let o,
                l = r.events.length;
              for (; l--; )
                if (
                  "lineEnding" !== r.events[l][1].type &&
                  "linePrefix" !== r.events[l][1].type &&
                  "content" !== r.events[l][1].type
                ) {
                  o = "paragraph" === r.events[l][1].type;
                  break;
                }
              return !r.parser.lazy[r.now().line] && (r.interrupt || o)
                ? (e.enter("setextHeadingLine"),
                  (u = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === u
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, W.xz)(n) ? (0, R.f)(e, i, "lineSuffix")(n) : i(n));
                  })(t))
                : n(t);
            };
            function i(u) {
              return null === u || (0, W.Ch)(u)
                ? (e.exit("setextHeadingLine"), t(u))
                : n(u);
            }
          },
          resolveTo: function (e, t) {
            let n,
              u,
              r,
              i = e.length;
            for (; i--; )
              if ("enter" === e[i][0]) {
                if ("content" === e[i][1].type) {
                  n = i;
                  break;
                }
                "paragraph" === e[i][1].type && (u = i);
              } else
                "content" === e[i][1].type && e.splice(i, 1),
                  r || "definition" !== e[i][1].type || (r = i);
            let o = {
              type: "setextHeading",
              start: Object.assign({}, e[u][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[u][1].type = "setextHeadingText"),
              r
                ? (e.splice(u, 0, ["enter", o, t]),
                  e.splice(r + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[r][1].end)))
                : (e[n][1] = o),
              e.push(["exit", o, t]),
              e
            );
          },
        },
        eB = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        eS = ["pre", "script", "style", "textarea"],
        ew = {
          tokenize: function (e, t, n) {
            return function (u) {
              return (
                e.enter("lineEnding"),
                e.consume(u),
                e.exit("lineEnding"),
                e.attempt(Q.w, t, n)
              );
            };
          },
          partial: !0,
        },
        ez = {
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return (0, W.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r)
                : n(t);
            };
            function r(e) {
              return u.parser.lazy[u.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        eT = {
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  r);
            };
            function r(e) {
              return u.parser.lazy[u.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        eI = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let u;
            let r = this,
              i = {
                tokenize: function (e, t, n) {
                  let i = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      o
                    );
                  };
                  function o(t) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, W.xz)(t)
                        ? (0, R.f)(
                            e,
                            c,
                            "linePrefix",
                            r.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : c(t)
                    );
                  }
                  function c(t) {
                    return t === u
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(r) {
                          return r === u
                            ? (i++, e.consume(r), t)
                            : i >= l
                            ? (e.exit("codeFencedFenceSequence"),
                              (0, W.xz)(r)
                                ? (0, R.f)(e, a, "whitespace")(r)
                                : a(r))
                            : n(r);
                        })(t))
                      : n(t);
                  }
                  function a(u) {
                    return null === u || (0, W.Ch)(u)
                      ? (e.exit("codeFencedFence"), t(u))
                      : n(u);
                  }
                },
                partial: !0,
              },
              o = 0,
              l = 0;
            return function (t) {
              return (function (t) {
                let i = r.events[r.events.length - 1];
                return (
                  (o =
                    i && "linePrefix" === i[1].type
                      ? i[2].sliceSerialize(i[1], !0).length
                      : 0),
                  (u = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function t(r) {
                    return r === u
                      ? (l++, e.consume(r), t)
                      : l < 3
                      ? n(r)
                      : (e.exit("codeFencedFenceSequence"),
                        (0, W.xz)(r) ? (0, R.f)(e, c, "whitespace")(r) : c(r));
                  })(t)
                );
              })(t);
            };
            function c(i) {
              return null === i || (0, W.Ch)(i)
                ? (e.exit("codeFencedFence"),
                  r.interrupt ? t(i) : e.check(eT, s, F)(i))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(r) {
                    return null === r || (0, W.Ch)(r)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        c(r))
                      : (0, W.xz)(r)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0, R.f)(e, a, "whitespace")(r))
                      : 96 === r && r === u
                      ? n(r)
                      : (e.consume(r), t);
                  })(i));
            }
            function a(t) {
              return null === t || (0, W.Ch)(t)
                ? c(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(r) {
                    return null === r || (0, W.Ch)(r)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        c(r))
                      : 96 === r && r === u
                      ? n(r)
                      : (e.consume(r), t);
                  })(t));
            }
            function s(t) {
              return e.attempt(i, F, f)(t);
            }
            function f(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p
              );
            }
            function p(t) {
              return o > 0 && (0, W.xz)(t)
                ? (0, R.f)(e, d, "linePrefix", o + 1)(t)
                : d(t);
            }
            function d(t) {
              return null === t || (0, W.Ch)(t)
                ? e.check(eT, s, F)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || (0, W.Ch)(n)
                      ? (e.exit("codeFlowValue"), d(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function F(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        };
      var eP = n(33859);
      let eN = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let u, r;
            let i = this,
              o = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                l
              );
            };
            function l(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  c)
                : (e.enter("characterReferenceValue"),
                  (u = 31),
                  (r = W.H$),
                  a(t));
            }
            function c(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (u = 6),
                  (r = W.AF),
                  a)
                : (e.enter("characterReferenceValue"),
                  (u = 7),
                  (r = W.pY),
                  a(t));
            }
            function a(l) {
              if (59 === l && o) {
                let u = e.exit("characterReferenceValue");
                return r !== W.H$ || (0, eP.T)(i.sliceSerialize(u))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(l),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(l);
              }
              return r(l) && o++ < u ? (e.consume(l), a) : n(l);
            }
          },
        },
        eO = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                u
              );
            };
            function u(u) {
              return (0, W.sR)(u)
                ? (e.enter("characterEscapeValue"),
                  e.consume(u),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(u);
            }
          },
        },
        e_ = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, R.f)(e, t, "linePrefix")
              );
            };
          },
        },
        eL = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            let u, r;
            let i = this,
              o = i.events.length;
            for (; o--; )
              if (
                ("labelImage" === i.events[o][1].type ||
                  "labelLink" === i.events[o][1].type) &&
                !i.events[o][1]._balanced
              ) {
                u = i.events[o][1];
                break;
              }
            return function (t) {
              return u
                ? u._inactive
                  ? s(t)
                  : ((r = i.parser.defined.includes(
                      (0, eC.d)(
                        i.sliceSerialize({ start: u.end, end: i.now() })
                      )
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    l)
                : n(t);
            };
            function l(t) {
              return 40 === t
                ? e.attempt(ej, a, r ? a : s)(t)
                : 91 === t
                ? e.attempt(eM, a, r ? c : s)(t)
                : r
                ? a(t)
                : s(t);
            }
            function c(t) {
              return e.attempt(eR, a, s)(t);
            }
            function a(e) {
              return t(e);
            }
            function s(e) {
              return (u._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              u,
              r,
              i,
              o = e.length,
              l = 0;
            for (; o--; )
              if (((n = e[o][1]), u)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[o][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (r) {
                if (
                  "enter" === e[o][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((u = o), "labelLink" !== n.type)
                ) {
                  l = 2;
                  break;
                }
              } else "labelEnd" === n.type && (r = o);
            let c = {
                type: "labelLink" === e[u][1].type ? "link" : "image",
                start: Object.assign({}, e[u][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              a = {
                type: "label",
                start: Object.assign({}, e[u][1].start),
                end: Object.assign({}, e[r][1].end),
              },
              s = {
                type: "labelText",
                start: Object.assign({}, e[u + l + 2][1].end),
                end: Object.assign({}, e[r - 2][1].start),
              };
            return (
              (i = [
                ["enter", c, t],
                ["enter", a, t],
              ]),
              (i = (0, q.V)(i, e.slice(u + 1, u + l + 3))),
              (i = (0, q.V)(i, [["enter", s, t]])),
              (i = (0, q.V)(
                i,
                (0, ei.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(u + l + 4, r - 3),
                  t
                )
              )),
              (i = (0, q.V)(i, [
                ["exit", s, t],
                e[r - 2],
                e[r - 1],
                ["exit", a, t],
              ])),
              (i = (0, q.V)(i, e.slice(r + 1))),
              (i = (0, q.V)(i, [["exit", c, t]])),
              (0, q.d)(e, u, e.length, i),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              let n = e[t][1];
              ("labelImage" === n.type ||
                "labelLink" === n.type ||
                "labelEnd" === n.type) &&
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        ej = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                u
              );
            };
            function u(t) {
              return (0, W.z3)(t) ? ex(e, r)(t) : r(t);
            }
            function r(t) {
              return 41 === t
                ? a(t)
                : ed(
                    e,
                    i,
                    o,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function i(t) {
              return (0, W.z3)(t) ? ex(e, l)(t) : a(t);
            }
            function o(e) {
              return n(e);
            }
            function l(t) {
              return 34 === t || 39 === t || 40 === t
                ? ey(
                    e,
                    c,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : a(t);
            }
            function c(t) {
              return (0, W.z3)(t) ? ex(e, a)(t) : a(t);
            }
            function a(u) {
              return 41 === u
                ? (e.enter("resourceMarker"),
                  e.consume(u),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(u);
            }
          },
        },
        eM = {
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return em.call(
                u,
                e,
                r,
                i,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function r(e) {
              return u.parser.defined.includes(
                (0, eC.d)(
                  u
                    .sliceSerialize(u.events[u.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function i(e) {
              return n(e);
            }
          },
        },
        eR = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                u
              );
            };
            function u(u) {
              return 93 === u
                ? (e.enter("referenceMarker"),
                  e.consume(u),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(u);
            }
          },
        },
        eH = {
          name: "labelStartImage",
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                r
              );
            };
            function r(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  i)
                : n(t);
            }
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in u.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: eL.resolveAll,
        };
      var eV = n(25869);
      let e$ = {
        name: "attention",
        tokenize: function (e, t) {
          let n;
          let u = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            i = (0, eV.r)(r);
          return function (o) {
            return (
              (n = o),
              e.enter("attentionSequence"),
              (function o(l) {
                if (l === n) return e.consume(l), o;
                let c = e.exit("attentionSequence"),
                  a = (0, eV.r)(l),
                  s = !a || (2 === a && i) || u.includes(l),
                  f = !i || (2 === i && a) || u.includes(r);
                return (
                  (c._open = !!(42 === n ? s : s && (i || !f))),
                  (c._close = !!(42 === n ? f : f && (a || !s))),
                  t(l)
                );
              })(o)
            );
          };
        },
        resolveAll: function (e, t) {
          let n,
            u,
            r,
            i,
            o,
            l,
            c,
            a,
            s = -1;
          for (; ++s < e.length; )
            if (
              "enter" === e[s][0] &&
              "attentionSequence" === e[s][1].type &&
              e[s][1]._close
            ) {
              for (n = s; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[s][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[s][1]._open) &&
                    (e[s][1].end.offset - e[s][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[s][1].end.offset -
                        e[s][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  l =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[s][1].end.offset - e[s][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = Object.assign({}, e[n][1].end),
                    p = Object.assign({}, e[s][1].start);
                  eq(f, -l),
                    eq(p, l),
                    (i = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (o = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[s][1].start),
                      end: p,
                    }),
                    (r = {
                      type: l > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[s][1].start),
                    }),
                    (u = {
                      type: l > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, i.start),
                      end: Object.assign({}, o.end),
                    }),
                    (e[n][1].end = Object.assign({}, i.start)),
                    (e[s][1].start = Object.assign({}, o.end)),
                    (c = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (c = (0, q.V)(c, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (c = (0, q.V)(c, [
                      ["enter", u, t],
                      ["enter", i, t],
                      ["exit", i, t],
                      ["enter", r, t],
                    ])),
                    (c = (0, q.V)(
                      c,
                      (0, ei.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, s),
                        t
                      )
                    )),
                    (c = (0, q.V)(c, [
                      ["exit", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["exit", u, t],
                    ])),
                    e[s][1].end.offset - e[s][1].start.offset
                      ? ((a = 2),
                        (c = (0, q.V)(c, [
                          ["enter", e[s][1], t],
                          ["exit", e[s][1], t],
                        ])))
                      : (a = 0),
                    (0, q.d)(e, n - 1, s - n + 3, c),
                    (s = n + c.length - a - 2);
                  break;
                }
            }
          for (s = -1; ++s < e.length; )
            "attentionSequence" === e[s][1].type && (e[s][1].type = "data");
          return e;
        },
      };
      function eq(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let eU = {
          name: "labelStartLink",
          tokenize: function (e, t, n) {
            let u = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                r
              );
            };
            function r(e) {
              return 94 === e && "_hiddenFootnoteSupport" in u.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: eL.resolveAll,
        },
        eZ = {
          42: el,
          43: el,
          45: el,
          48: el,
          49: el,
          50: el,
          51: el,
          52: el,
          53: el,
          54: el,
          55: el,
          56: el,
          57: el,
          62: es,
        },
        eQ = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let u;
              let r = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  em.call(
                    r,
                    e,
                    i,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t)
                );
              };
              function i(t) {
                return ((u = (0, eC.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    o)
                  : n(t);
              }
              function o(t) {
                return (0, W.z3)(t) ? ex(e, l)(t) : l(t);
              }
              function l(t) {
                return ed(
                  e,
                  c,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function c(t) {
                return e.attempt(eD, a, a)(t);
              }
              function a(t) {
                return (0, W.xz)(t) ? (0, R.f)(e, s, "whitespace")(t) : s(t);
              }
              function s(i) {
                return null === i || (0, W.Ch)(i)
                  ? (e.exit("definition"), r.parser.defined.push(u), t(i))
                  : n(i);
              }
            },
          },
        },
        eW = { [-2]: ek, [-1]: ek, 32: ek },
        eY = {
          35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
              let u = 0;
              return function (r) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function r(i) {
                    return 35 === i && u++ < 6
                      ? (e.consume(i), r)
                      : null === i || (0, W.z3)(i)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(u) {
                          return 35 === u
                            ? (e.enter("atxHeadingSequence"),
                              (function t(u) {
                                return 35 === u
                                  ? (e.consume(u), t)
                                  : (e.exit("atxHeadingSequence"), n(u));
                              })(u))
                            : null === u || (0, W.Ch)(u)
                            ? (e.exit("atxHeading"), t(u))
                            : (0, W.xz)(u)
                            ? (0, R.f)(e, n, "whitespace")(u)
                            : (e.enter("atxHeadingText"),
                              (function t(u) {
                                return null === u || 35 === u || (0, W.z3)(u)
                                  ? (e.exit("atxHeadingText"), n(u))
                                  : (e.consume(u), t);
                              })(u));
                        })(i))
                      : n(i);
                  })(r)
                );
              };
            },
            resolve: function (e, t) {
              let n,
                u,
                r = e.length - 2,
                i = 3;
              return (
                "whitespace" === e[3][1].type && (i += 2),
                r - 2 > i && "whitespace" === e[r][1].type && (r -= 2),
                "atxHeadingSequence" === e[r][1].type &&
                  (i === r - 1 ||
                    (r - 4 > i && "whitespace" === e[r - 2][1].type)) &&
                  (r -= i + 1 === r ? 2 : 4),
                r > i &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[i][1].start,
                    end: e[r][1].end,
                  }),
                  (u = {
                    type: "chunkText",
                    start: e[i][1].start,
                    end: e[r][1].end,
                    contentType: "text",
                  }),
                  (0, q.d)(e, i, r - i + 1, [
                    ["enter", n, t],
                    ["enter", u, t],
                    ["exit", u, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
          },
          42: eo,
          45: [eb, eo],
          60: {
            name: "htmlFlow",
            tokenize: function (e, t, n) {
              let u, r, i, o, l;
              let c = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), a
                );
              };
              function a(o) {
                return 33 === o
                  ? (e.consume(o), s)
                  : 47 === o
                  ? (e.consume(o), (r = !0), d)
                  : 63 === o
                  ? (e.consume(o), (u = 3), c.interrupt ? t : I)
                  : (0, W.jv)(o)
                  ? (e.consume(o), (i = String.fromCharCode(o)), F)
                  : n(o);
              }
              function s(r) {
                return 45 === r
                  ? (e.consume(r), (u = 2), f)
                  : 91 === r
                  ? (e.consume(r), (u = 5), (o = 0), p)
                  : (0, W.jv)(r)
                  ? (e.consume(r), (u = 4), c.interrupt ? t : I)
                  : n(r);
              }
              function f(u) {
                return 45 === u ? (e.consume(u), c.interrupt ? t : I) : n(u);
              }
              function p(u) {
                let r = "CDATA[";
                return u === r.charCodeAt(o++)
                  ? (e.consume(u), o === r.length)
                    ? c.interrupt
                      ? t
                      : k
                    : p
                  : n(u);
              }
              function d(t) {
                return (0, W.jv)(t)
                  ? (e.consume(t), (i = String.fromCharCode(t)), F)
                  : n(t);
              }
              function F(o) {
                if (null === o || 47 === o || 62 === o || (0, W.z3)(o)) {
                  let l = 47 === o,
                    a = i.toLowerCase();
                  return !l && !r && eS.includes(a)
                    ? ((u = 1), c.interrupt ? t(o) : k(o))
                    : eB.includes(i.toLowerCase())
                    ? ((u = 6), l)
                      ? (e.consume(o), h)
                      : c.interrupt
                      ? t(o)
                      : k(o)
                    : ((u = 7),
                      c.interrupt && !c.parser.lazy[c.now().line]
                        ? n(o)
                        : r
                        ? (function t(n) {
                            return (0, W.xz)(n) ? (e.consume(n), t) : C(n);
                          })(o)
                        : m(o));
                }
                return 45 === o || (0, W.H$)(o)
                  ? (e.consume(o), (i += String.fromCharCode(o)), F)
                  : n(o);
              }
              function h(u) {
                return 62 === u ? (e.consume(u), c.interrupt ? t : k) : n(u);
              }
              function m(t) {
                return 47 === t
                  ? (e.consume(t), C)
                  : 58 === t || 95 === t || (0, W.jv)(t)
                  ? (e.consume(t), A)
                  : (0, W.xz)(t)
                  ? (e.consume(t), m)
                  : C(t);
              }
              function A(t) {
                return 45 === t ||
                  46 === t ||
                  58 === t ||
                  95 === t ||
                  (0, W.H$)(t)
                  ? (e.consume(t), A)
                  : g(t);
              }
              function g(t) {
                return 61 === t
                  ? (e.consume(t), y)
                  : (0, W.xz)(t)
                  ? (e.consume(t), g)
                  : m(t);
              }
              function y(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (l = t), E)
                  : (0, W.xz)(t)
                  ? (e.consume(t), y)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        (0, W.z3)(n)
                        ? g(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function E(t) {
                return t === l
                  ? (e.consume(t), (l = null), x)
                  : null === t || (0, W.Ch)(t)
                  ? n(t)
                  : (e.consume(t), E);
              }
              function x(e) {
                return 47 === e || 62 === e || (0, W.xz)(e) ? m(e) : n(e);
              }
              function C(t) {
                return 62 === t ? (e.consume(t), D) : n(t);
              }
              function D(t) {
                return null === t || (0, W.Ch)(t)
                  ? k(t)
                  : (0, W.xz)(t)
                  ? (e.consume(t), D)
                  : n(t);
              }
              function k(t) {
                return 45 === t && 2 === u
                  ? (e.consume(t), S)
                  : 60 === t && 1 === u
                  ? (e.consume(t), w)
                  : 62 === t && 4 === u
                  ? (e.consume(t), P)
                  : 63 === t && 3 === u
                  ? (e.consume(t), I)
                  : 93 === t && 5 === u
                  ? (e.consume(t), T)
                  : (0, W.Ch)(t) && (6 === u || 7 === u)
                  ? (e.exit("htmlFlowData"), e.check(ew, N, v)(t))
                  : null === t || (0, W.Ch)(t)
                  ? (e.exit("htmlFlowData"), v(t))
                  : (e.consume(t), k);
              }
              function v(t) {
                return e.check(ez, b, N)(t);
              }
              function b(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B
                );
              }
              function B(t) {
                return null === t || (0, W.Ch)(t)
                  ? v(t)
                  : (e.enter("htmlFlowData"), k(t));
              }
              function S(t) {
                return 45 === t ? (e.consume(t), I) : k(t);
              }
              function w(t) {
                return 47 === t ? (e.consume(t), (i = ""), z) : k(t);
              }
              function z(t) {
                if (62 === t) {
                  let n = i.toLowerCase();
                  return eS.includes(n) ? (e.consume(t), P) : k(t);
                }
                return (0, W.jv)(t) && i.length < 8
                  ? (e.consume(t), (i += String.fromCharCode(t)), z)
                  : k(t);
              }
              function T(t) {
                return 93 === t ? (e.consume(t), I) : k(t);
              }
              function I(t) {
                return 62 === t
                  ? (e.consume(t), P)
                  : 45 === t && 2 === u
                  ? (e.consume(t), I)
                  : k(t);
              }
              function P(t) {
                return null === t || (0, W.Ch)(t)
                  ? (e.exit("htmlFlowData"), N(t))
                  : (e.consume(t), P);
              }
              function N(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            concrete: !0,
          },
          61: eb,
          95: eo,
          96: eI,
          126: eI,
        },
        eJ = { 38: eN, 92: eO },
        eG = {
          [-5]: e_,
          [-4]: e_,
          [-3]: e_,
          33: eH,
          38: eN,
          42: e$,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let u = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    r
                  );
                };
                function r(t) {
                  return (0, W.jv)(t) ? (e.consume(t), i) : l(t);
                }
                function i(t) {
                  return 43 === t || 45 === t || 46 === t || (0, W.H$)(t)
                    ? ((u = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (u = 0), o)
                          : (43 === n ||
                              45 === n ||
                              46 === n ||
                              (0, W.H$)(n)) &&
                            u++ < 32
                          ? (e.consume(n), t)
                          : ((u = 0), l(n));
                      })(t))
                    : l(t);
                }
                function o(u) {
                  return 62 === u
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(u),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === u || 32 === u || 60 === u || (0, W.Av)(u)
                    ? n(u)
                    : (e.consume(u), o);
                }
                function l(t) {
                  return 64 === t
                    ? (e.consume(t), c)
                    : (0, W.n9)(t)
                    ? (e.consume(t), l)
                    : n(t);
                }
                function c(r) {
                  return (0, W.H$)(r)
                    ? (function r(i) {
                        return 46 === i
                          ? (e.consume(i), (u = 0), c)
                          : 62 === i
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(i),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(i) {
                              if ((45 === i || (0, W.H$)(i)) && u++ < 63) {
                                let n = 45 === i ? t : r;
                                return e.consume(i), n;
                              }
                              return n(i);
                            })(i);
                      })(r)
                    : n(r);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let u, r, i;
                let o = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    l
                  );
                };
                function l(t) {
                  return 33 === t
                    ? (e.consume(t), c)
                    : 47 === t
                    ? (e.consume(t), E)
                    : 63 === t
                    ? (e.consume(t), g)
                    : (0, W.jv)(t)
                    ? (e.consume(t), C)
                    : n(t);
                }
                function c(t) {
                  return 45 === t
                    ? (e.consume(t), a)
                    : 91 === t
                    ? (e.consume(t), (r = 0), d)
                    : (0, W.jv)(t)
                    ? (e.consume(t), A)
                    : n(t);
                }
                function a(t) {
                  return 45 === t ? (e.consume(t), p) : n(t);
                }
                function s(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), f)
                    : (0, W.Ch)(t)
                    ? ((i = s), z(t))
                    : (e.consume(t), s);
                }
                function f(t) {
                  return 45 === t ? (e.consume(t), p) : s(t);
                }
                function p(e) {
                  return 62 === e ? w(e) : 45 === e ? f(e) : s(e);
                }
                function d(t) {
                  let u = "CDATA[";
                  return t === u.charCodeAt(r++)
                    ? (e.consume(t), r === u.length ? F : d)
                    : n(t);
                }
                function F(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), h)
                    : (0, W.Ch)(t)
                    ? ((i = F), z(t))
                    : (e.consume(t), F);
                }
                function h(t) {
                  return 93 === t ? (e.consume(t), m) : F(t);
                }
                function m(t) {
                  return 62 === t ? w(t) : 93 === t ? (e.consume(t), m) : F(t);
                }
                function A(t) {
                  return null === t || 62 === t
                    ? w(t)
                    : (0, W.Ch)(t)
                    ? ((i = A), z(t))
                    : (e.consume(t), A);
                }
                function g(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), y)
                    : (0, W.Ch)(t)
                    ? ((i = g), z(t))
                    : (e.consume(t), g);
                }
                function y(e) {
                  return 62 === e ? w(e) : g(e);
                }
                function E(t) {
                  return (0, W.jv)(t) ? (e.consume(t), x) : n(t);
                }
                function x(t) {
                  return 45 === t || (0, W.H$)(t)
                    ? (e.consume(t), x)
                    : (function t(n) {
                        return (0, W.Ch)(n)
                          ? ((i = t), z(n))
                          : (0, W.xz)(n)
                          ? (e.consume(n), t)
                          : w(n);
                      })(t);
                }
                function C(t) {
                  return 45 === t || (0, W.H$)(t)
                    ? (e.consume(t), C)
                    : 47 === t || 62 === t || (0, W.z3)(t)
                    ? D(t)
                    : n(t);
                }
                function D(t) {
                  return 47 === t
                    ? (e.consume(t), w)
                    : 58 === t || 95 === t || (0, W.jv)(t)
                    ? (e.consume(t), k)
                    : (0, W.Ch)(t)
                    ? ((i = D), z(t))
                    : (0, W.xz)(t)
                    ? (e.consume(t), D)
                    : w(t);
                }
                function k(t) {
                  return 45 === t ||
                    46 === t ||
                    58 === t ||
                    95 === t ||
                    (0, W.H$)(t)
                    ? (e.consume(t), k)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), v)
                          : (0, W.Ch)(n)
                          ? ((i = t), z(n))
                          : (0, W.xz)(n)
                          ? (e.consume(n), t)
                          : D(n);
                      })(t);
                }
                function v(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (u = t), b)
                    : (0, W.Ch)(t)
                    ? ((i = v), z(t))
                    : (0, W.xz)(t)
                    ? (e.consume(t), v)
                    : (e.consume(t), B);
                }
                function b(t) {
                  return t === u
                    ? (e.consume(t), (u = void 0), S)
                    : null === t
                    ? n(t)
                    : (0, W.Ch)(t)
                    ? ((i = b), z(t))
                    : (e.consume(t), b);
                }
                function B(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || (0, W.z3)(t)
                    ? D(t)
                    : (e.consume(t), B);
                }
                function S(e) {
                  return 47 === e || 62 === e || (0, W.z3)(e) ? D(e) : n(e);
                }
                function w(u) {
                  return 62 === u
                    ? (e.consume(u),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(u);
                }
                function z(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    T
                  );
                }
                function T(t) {
                  return (0, W.xz)(t)
                    ? (0, R.f)(
                        e,
                        I,
                        "linePrefix",
                        o.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : I(t);
                }
                function I(t) {
                  return e.enter("htmlTextData"), i(t);
                }
              },
            },
          ],
          91: eU,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), u;
                };
                function u(u) {
                  return (0, W.Ch)(u)
                    ? (e.exit("hardBreakEscape"), t(u))
                    : n(u);
                }
              },
            },
            eO,
          ],
          93: eL,
          95: e$,
          96: {
            name: "codeText",
            tokenize: function (e, t, n) {
              let u,
                r,
                i = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), i++, t)
                      : (e.exit("codeTextSequence"), o(n));
                  })(t)
                );
              };
              function o(c) {
                return null === c
                  ? n(c)
                  : 32 === c
                  ? (e.enter("space"), e.consume(c), e.exit("space"), o)
                  : 96 === c
                  ? ((r = e.enter("codeTextSequence")),
                    (u = 0),
                    (function n(o) {
                      return 96 === o
                        ? (e.consume(o), u++, n)
                        : u === i
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o))
                        : ((r.type = "codeTextData"), l(o));
                    })(c))
                  : (0, W.Ch)(c)
                  ? (e.enter("lineEnding"),
                    e.consume(c),
                    e.exit("lineEnding"),
                    o)
                  : (e.enter("codeTextData"), l(c));
              }
              function l(t) {
                return null === t || 32 === t || 96 === t || (0, W.Ch)(t)
                  ? (e.exit("codeTextData"), o(t))
                  : (e.consume(t), l);
              }
            },
            resolve: function (e) {
              let t,
                n,
                u = e.length - 4,
                r = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[r][1].type) &&
                ("lineEnding" === e[u][1].type || "space" === e[u][1].type)
              ) {
                for (t = r; ++t < u; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[r][1].type = "codeTextPadding"),
                      (e[u][1].type = "codeTextPadding"),
                      (r += 2),
                      (u -= 2);
                    break;
                  }
              }
              for (t = r - 1, u++; ++t <= u; )
                void 0 === n
                  ? t !== u && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === u || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (u -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        eK = { null: [e$, X] },
        eX = { null: [42, 95] },
        e0 = { null: [] },
        e1 = /[\0\t\n\r]/g;
      var e2 = n(14343),
        e3 = n(1973);
      let e6 = {}.hasOwnProperty,
        e5 = function (e, t, n) {
          let r, i, o, c;
          return (
            "string" != typeof t && ((n = t), (t = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: i(E),
                  autolinkProtocol: p,
                  autolinkEmail: p,
                  atxHeading: i(A),
                  blockQuote: i(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: p,
                  characterReference: p,
                  codeFenced: i(m),
                  codeFencedFenceInfo: o,
                  codeFencedFenceMeta: o,
                  codeIndented: i(m, o),
                  codeText: i(function () {
                    return { type: "inlineCode", value: "" };
                  }, o),
                  codeTextData: p,
                  data: p,
                  codeFlowValue: p,
                  definition: i(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: o,
                  definitionLabelString: o,
                  definitionTitleString: o,
                  emphasis: i(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: i(g),
                  hardBreakTrailing: i(g),
                  htmlFlow: i(y, o),
                  htmlFlowData: p,
                  htmlText: i(y, o),
                  htmlTextData: p,
                  image: i(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: o,
                  link: i(E),
                  listItem: i(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    n.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (n.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: i(x, function () {
                    n.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: i(x),
                  paragraph: i(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    n.referenceType = "collapsed";
                  },
                  referenceString: o,
                  resourceDestinationString: o,
                  resourceTitleString: o,
                  setextHeading: i(A),
                  strong: i(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: i(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: a(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: a(),
                  autolinkEmail: function (e) {
                    d.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    d.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: a(),
                  characterEscapeValue: d,
                  characterReferenceMarkerHexadecimal: h,
                  characterReferenceMarkerNumeric: h,
                  characterReferenceValue: function (e) {
                    let t;
                    let u = this.sliceSerialize(e),
                      r = n.characterReferenceType;
                    r
                      ? ((t = (0, e2.o)(
                          u,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16
                        )),
                        (n.characterReferenceType = void 0))
                      : (t = (0, eP.T)(u));
                    let i = this.stack.pop();
                    (i.value += t), (i.position.end = e7(e.end));
                  },
                  codeFenced: a(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (n.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    !n.flowCodeInside &&
                      (this.buffer(), (n.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: d,
                  codeIndented: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: d,
                  data: d,
                  definition: a(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, eC.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: a(),
                  hardBreakEscape: a(F),
                  hardBreakTrailing: a(F),
                  htmlFlow: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: d,
                  htmlText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: d,
                  image: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (n.inReference) {
                      let t = n.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    n.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      u = this.stack[this.stack.length - 1];
                    if (((n.inReference = !0), "link" === u.type)) {
                      let t = e.children;
                      u.children = t;
                    } else u.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = (0, e3.v)(t)),
                      (n.identifier = (0, eC.d)(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let u = this.stack[this.stack.length - 1];
                    if (n.atHardBreak) {
                      (u.children[u.children.length - 1].position.end = e7(
                        e.end
                      )),
                        (n.atHardBreak = void 0);
                      return;
                    }
                    !n.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(u.type) &&
                      (p.call(this, e), d.call(this, e));
                  },
                  link: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (n.inReference) {
                      let t = n.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    n.referenceType = void 0;
                  }),
                  listItem: a(),
                  listOrdered: a(),
                  listUnordered: a(),
                  paragraph: a(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      u = this.stack[this.stack.length - 1];
                    (u.label = t),
                      (u.identifier = (0, eC.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase()),
                      (n.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    n.inReference = void 0;
                  },
                  setextHeading: a(function () {
                    n.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    n.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: a(),
                  thematicBreak: a(),
                },
              };
              !(function e(t, n) {
                let u = -1;
                for (; ++u < n.length; ) {
                  let r = n[u];
                  Array.isArray(r)
                    ? e(t, r)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (e6.call(t, n)) {
                            if ("canContainEols" === n) {
                              let u = t[n];
                              u && e[n].push(...u);
                            } else if ("transforms" === n) {
                              let u = t[n];
                              u && e[n].push(...u);
                            } else if ("enter" === n || "exit" === n) {
                              let u = t[n];
                              u && Object.assign(e[n], u);
                            }
                          }
                      })(t, r);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let n = { type: "root", children: [] },
                  i = {
                    stack: [n],
                    tokenStack: [],
                    config: t,
                    enter: c,
                    exit: s,
                    buffer: o,
                    resume: f,
                    setData: u,
                    getData: r,
                  },
                  l = [],
                  a = -1;
                for (; ++a < e.length; )
                  ("listOrdered" === e[a][1].type ||
                    "listUnordered" === e[a][1].type) &&
                    ("enter" === e[a][0]
                      ? l.push(a)
                      : (a = (function (e, t, n) {
                          let u,
                            r,
                            i,
                            o,
                            l = t - 1,
                            c = -1,
                            a = !1;
                          for (; ++l <= n; ) {
                            let t = e[l];
                            if (
                              ("listUnordered" === t[1].type ||
                              "listOrdered" === t[1].type ||
                              "blockQuote" === t[1].type
                                ? ("enter" === t[0] ? c++ : c--, (o = void 0))
                                : "lineEndingBlank" === t[1].type
                                ? "enter" === t[0] &&
                                  (!u || o || c || i || (i = l), (o = void 0))
                                : "linePrefix" === t[1].type ||
                                  "listItemValue" === t[1].type ||
                                  "listItemMarker" === t[1].type ||
                                  "listItemPrefix" === t[1].type ||
                                  "listItemPrefixWhitespace" === t[1].type ||
                                  (o = void 0),
                              (!c &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                                (-1 === c &&
                                  "exit" === t[0] &&
                                  ("listUnordered" === t[1].type ||
                                    "listOrdered" === t[1].type)))
                            ) {
                              if (u) {
                                let o = l;
                                for (r = void 0; o--; ) {
                                  let t = e[o];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    r &&
                                      ((e[r][1].type = "lineEndingBlank"),
                                      (a = !0)),
                                      (t[1].type = "lineEnding"),
                                      (r = o);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                i && (!r || i < r) && (u._spread = !0),
                                  (u.end = Object.assign(
                                    {},
                                    r ? e[r][1].start : t[1].end
                                  )),
                                  e.splice(r || l, 0, ["exit", u, t[2]]),
                                  l++,
                                  n++;
                              }
                              "listItemPrefix" === t[1].type &&
                                ((u = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                }),
                                e.splice(l, 0, ["enter", u, t[2]]),
                                l++,
                                n++,
                                (i = void 0),
                                (o = !0));
                            }
                          }
                          return (e[t][1]._spread = a), n;
                        })(e, l.pop(), a)));
                for (a = -1; ++a < e.length; ) {
                  let n = t[e[a][0]];
                  e6.call(n, e[a][1].type) &&
                    n[e[a][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[a][2].sliceSerialize },
                        i
                      ),
                      e[a][1]
                    );
                }
                if (i.tokenStack.length > 0) {
                  let e = i.tokenStack[i.tokenStack.length - 1];
                  (e[1] || e9).call(i, void 0, e[0]);
                }
                for (
                  n.position = {
                    start: e7(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: e7(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    a = -1;
                  ++a < t.transforms.length;

                )
                  n = t.transforms[a](n) || n;
                return n;
              };
              function u(e, t) {
                n[e] = t;
              }
              function r(e) {
                return n[e];
              }
              function i(e, t) {
                return function (n) {
                  c.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function o() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function c(e, t, n) {
                return (
                  this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n]),
                  (e.position = { start: e7(t.start) }),
                  e
                );
              }
              function a(e) {
                return function (t) {
                  e && e.call(this, t), s.call(this, t);
                };
              }
              function s(e, t) {
                let n = this.stack.pop(),
                  u = this.tokenStack.pop();
                if (u)
                  u[0].type !== e.type &&
                    (t
                      ? t.call(this, e, u[0])
                      : (u[1] || e9).call(this, e, u[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      l({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                return (n.position.end = e7(e.end)), n;
              }
              function f() {
                return L(
                  this.stack.pop(),
                  "boolean" != typeof _.includeImageAlt || _.includeImageAlt,
                  "boolean" != typeof _.includeHtml || _.includeHtml
                );
              }
              function p(e) {
                let t = this.stack[this.stack.length - 1],
                  n = t.children[t.children.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: e7(e.start),
                  }),
                  t.children.push(n)),
                  this.stack.push(n);
              }
              function d(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = e7(e.end));
              }
              function F() {
                n.atHardBreak = !0;
              }
              function h(e) {
                var t;
                (t = e.type), (n.characterReferenceType = t);
              }
              function m() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function A() {
                return { type: "heading", depth: void 0, children: [] };
              }
              function g() {
                return { type: "break" };
              }
              function y() {
                return { type: "html", value: "" };
              }
              function E() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function x(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(n)(
              (function (e) {
                for (; !Y(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    defined: [],
                    lazy: {},
                    constructs: (0, M.W)([u, ...((e || {}).extensions || [])]),
                    content: n($),
                    document: n(U),
                    flow: n(K),
                    string: n(ee),
                    text: n(et),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let u = Object.assign(
                            n
                              ? Object.assign({}, n)
                              : { line: 1, column: 1, offset: 0 },
                            { _index: 0, _bufferIndex: -1 }
                          ),
                          r = {},
                          i = [],
                          o = [],
                          l = [],
                          c = {
                            consume: function (e) {
                              H(e)
                                ? (u.line++,
                                  (u.column = 1),
                                  (u.offset += -3 === e ? 2 : 1),
                                  m())
                                : -1 !== e && (u.column++, u.offset++),
                                u._bufferIndex < 0
                                  ? u._index++
                                  : (u._bufferIndex++,
                                    u._bufferIndex === o[u._index].length &&
                                      ((u._bufferIndex = -1), u._index++)),
                                (a.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = p()),
                                a.events.push(["enter", n, a]),
                                l.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = l.pop();
                              return (
                                (t.end = p()), a.events.push(["exit", t, a]), t
                              );
                            },
                            attempt: F(function (e, t) {
                              h(e, t.from);
                            }),
                            check: F(d),
                            interrupt: F(d, { interrupt: !0 }),
                          },
                          a = {
                            previous: null,
                            code: null,
                            containerState: {},
                            events: [],
                            parser: e,
                            sliceStream: f,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  u = -1,
                                  r = [];
                                for (; ++u < e.length; ) {
                                  let i;
                                  let o = e[u];
                                  if ("string" == typeof o) i = o;
                                  else
                                    switch (o) {
                                      case -5:
                                        i = "\r";
                                        break;
                                      case -4:
                                        i = "\n";
                                        break;
                                      case -3:
                                        i = "\r\n";
                                        break;
                                      case -2:
                                        i = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        i = " ";
                                        break;
                                      default:
                                        i = String.fromCharCode(o);
                                    }
                                  (n = -2 === o), r.push(i);
                                }
                                return r.join("");
                              })(f(e), t);
                            },
                            now: p,
                            defineSkip: function (e) {
                              (r[e.line] = e.column), m();
                            },
                            write: function (e) {
                              return ((o = (0, q.V)(o, e)),
                              (function () {
                                let e;
                                for (; u._index < o.length; ) {
                                  let n = o[u._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = u._index,
                                        u._bufferIndex < 0 &&
                                          (u._bufferIndex = 0);
                                      u._index === e &&
                                      u._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(u._bufferIndex)),
                                        (s = s(t));
                                    }
                                  else s = s(n);
                                }
                              })(),
                              null !== o[o.length - 1])
                                ? []
                                : (h(t, 0),
                                  (a.events = (0, ei.C)(i, a.events, a)),
                                  a.events);
                            },
                          },
                          s = t.tokenize.call(a, c);
                        return t.resolveAll && i.push(t), a;
                        function f(e) {
                          return (function (e, t) {
                            let n;
                            let u = t.start._index,
                              r = t.start._bufferIndex,
                              i = t.end._index,
                              o = t.end._bufferIndex;
                            if (u === i) n = [e[u].slice(r, o)];
                            else {
                              if (((n = e.slice(u, i)), r > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(r))
                                  : n.shift();
                              }
                              o > 0 && n.push(e[i].slice(0, o));
                            }
                            return n;
                          })(o, e);
                        }
                        function p() {
                          let {
                            line: e,
                            column: t,
                            offset: n,
                            _index: r,
                            _bufferIndex: i,
                          } = u;
                          return {
                            line: e,
                            column: t,
                            offset: n,
                            _index: r,
                            _bufferIndex: i,
                          };
                        }
                        function d(e, t) {
                          t.restore();
                        }
                        function F(e, t) {
                          return function (n, r, i) {
                            let o, s, f, d;
                            return Array.isArray(n)
                              ? F(n)
                              : "tokenize" in n
                              ? F([n])
                              : function (e) {
                                  let t = null !== e && n[e],
                                    u = null !== e && n.null;
                                  return F([
                                    ...(Array.isArray(t) ? t : t ? [t] : []),
                                    ...(Array.isArray(u) ? u : u ? [u] : []),
                                  ])(e);
                                };
                            function F(e) {
                              return ((o = e), (s = 0), 0 === e.length)
                                ? i
                                : h(e[s]);
                            }
                            function h(e) {
                              return function (n) {
                                return ((d = (function () {
                                  let e = p(),
                                    t = a.previous,
                                    n = a.currentConstruct,
                                    r = a.events.length,
                                    i = Array.from(l);
                                  return {
                                    restore: function () {
                                      (u = e),
                                        (a.previous = t),
                                        (a.currentConstruct = n),
                                        (a.events.length = r),
                                        (l = i),
                                        m();
                                    },
                                    from: r,
                                  };
                                })()),
                                (f = e),
                                e.partial || (a.currentConstruct = e),
                                e.name &&
                                  a.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? g(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(a), t)
                                        : a,
                                      c,
                                      A,
                                      g
                                    )(n);
                              };
                            }
                            function A(t) {
                              return e(f, d), r;
                            }
                            function g(e) {
                              return (d.restore(), ++s < o.length)
                                ? h(o[s])
                                : i;
                            }
                          };
                        }
                        function h(e, t) {
                          e.resolveAll && !i.includes(e) && i.push(e),
                            e.resolve &&
                              (0, q.d)(
                                a.events,
                                t,
                                a.events.length - t,
                                e.resolve(a.events.slice(t), a)
                              ),
                            e.resolveTo &&
                              (a.events = e.resolveTo(a.events, a));
                        }
                        function m() {
                          u.line in r &&
                            u.column < 2 &&
                            ((u.column = r[u.line]),
                            (u.offset += r[u.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(n)
                  .document()
                  .write(
                    ((i = 1),
                    (o = ""),
                    (c = !0),
                    function (e, t, n) {
                      let u, l, a, s, f;
                      let p = [];
                      for (
                        e = o + e.toString(t),
                          a = 0,
                          o = "",
                          c && (65279 === e.charCodeAt(0) && a++, (c = void 0));
                        a < e.length;

                      ) {
                        if (
                          ((e1.lastIndex = a),
                          (s =
                            (u = e1.exec(e)) && void 0 !== u.index
                              ? u.index
                              : e.length),
                          (f = e.charCodeAt(s)),
                          !u)
                        ) {
                          o = e.slice(a);
                          break;
                        }
                        if (10 === f && a === s && r) p.push(-3), (r = void 0);
                        else
                          switch (
                            (r && (p.push(-5), (r = void 0)),
                            a < s && (p.push(e.slice(a, s)), (i += s - a)),
                            f)
                          ) {
                            case 0:
                              p.push(65533), i++;
                              break;
                            case 9:
                              for (
                                l = 4 * Math.ceil(i / 4), p.push(-2);
                                i++ < l;

                              )
                                p.push(-1);
                              break;
                            case 10:
                              p.push(-4), (i = 1);
                              break;
                            default:
                              (r = !0), (i = 1);
                          }
                        a = s + 1;
                      }
                      return (
                        n && (r && p.push(-5), o && p.push(o), p.push(null)), p
                      );
                    })(e, t, !0)
                  )
              )
            )
          );
        };
      function e7(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function e9(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              l({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              l({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            l({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function e4(e) {
        Object.assign(this, {
          Parser: (t) =>
            e5(
              t,
              Object.assign({}, this.data("settings"), e, {
                extensions: this.data("micromarkExtensions") || [],
                mdastExtensions: this.data("fromMarkdownExtensions") || [],
              })
            ),
        });
      }
      te(/[A-Za-z]/);
      let e8 = te(/[\dA-Za-z]/);
      function te(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function tt(e) {
        let t = [],
          n = -1,
          u = 0,
          r = 0;
        for (; ++n < e.length; ) {
          let i = e.charCodeAt(n),
            o = "";
          if (37 === i && e8(e.charCodeAt(n + 1)) && e8(e.charCodeAt(n + 2)))
            r = 2;
          else if (i < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
              (o = String.fromCharCode(i));
          else if (i > 55295 && i < 57344) {
            let t = e.charCodeAt(n + 1);
            i < 56320 && t > 56319 && t < 57344
              ? ((o = String.fromCharCode(i, t)), (r = 1))
              : (o = "�");
          } else o = String.fromCharCode(i);
          o &&
            (t.push(e.slice(u, n), encodeURIComponent(o)),
            (u = n + r + 1),
            (o = "")),
            r && ((n += r), (r = 0));
        }
        return t.join("") + e.slice(u);
      }
      te(/[#-'*+\--9=?A-Z^-~]/),
        te(/\d/),
        te(/[\dA-Fa-f]/),
        te(/[!-/:-@[-`{-~]/),
        te(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        ),
        te(/\s/);
      let tn = function (e) {
        if (null == e) return tr;
        if ("string" == typeof e)
          return tu(function (t) {
            return t && t.type === e;
          });
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = tn(e[n]);
                return tu(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].call(this, ...e)) return !0;
                  return !1;
                });
              })(e)
            : tu(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("function" == typeof e) return tu(e);
        throw Error("Expected function, string, or object as test");
      };
      function tu(e) {
        return function (t, ...n) {
          return !!(
            t &&
            "object" == typeof t &&
            "type" in t &&
            e.call(this, t, ...n)
          );
        };
      }
      function tr() {
        return !0;
      }
      let ti = function (e, t, n, u) {
          "function" == typeof t &&
            "function" != typeof n &&
            ((u = n), (n = t), (t = null));
          let r = tn(t),
            i = u ? -1 : 1;
          (function e(o, l, c) {
            let a = o && "object" == typeof o ? o : {};
            if ("string" == typeof a.type) {
              let e =
                "string" == typeof a.tagName
                  ? a.tagName
                  : "string" == typeof a.name
                  ? a.name
                  : void 0;
              Object.defineProperty(s, "name", {
                value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")",
              });
            }
            return s;
            function s() {
              var a;
              let s,
                f,
                p,
                d = [];
              if (
                (!t || r(o, l, c[c.length - 1] || null)) &&
                !1 ===
                  (d = Array.isArray((a = n(o, c)))
                    ? a
                    : "number" == typeof a
                    ? [!0, a]
                    : [a])[0]
              )
                return d;
              if (o.children && "skip" !== d[0])
                for (
                  f = (u ? o.children.length : -1) + i, p = c.concat(o);
                  f > -1 && f < o.children.length;

                ) {
                  if (!1 === (s = e(o.children[f], f, p)())[0]) return s;
                  f = "number" == typeof s[1] ? s[1] : f + i;
                }
              return d;
            }
          })(e, void 0, [])();
        },
        to = function (e, t, n, u) {
          "function" == typeof t &&
            "function" != typeof n &&
            ((u = n), (n = t), (t = null)),
            ti(
              e,
              t,
              function (e, t) {
                let u = t[t.length - 1];
                return n(e, u ? u.children.indexOf(e) : null, u);
              },
              u
            );
        },
        tl = ta("start"),
        tc = ta("end");
      function ta(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          return {
            line: n.line || null,
            column: n.column || null,
            offset: n.offset > -1 ? n.offset : null,
          };
        };
      }
      let ts = {}.hasOwnProperty;
      function tf(e) {
        return String(e || "").toUpperCase();
      }
      function tp(e, t) {
        let n;
        let u = String(t.identifier).toUpperCase(),
          r = tt(u.toLowerCase()),
          i = e.footnoteOrder.indexOf(u);
        -1 === i
          ? (e.footnoteOrder.push(u),
            (e.footnoteCounts[u] = 1),
            (n = e.footnoteOrder.length))
          : (e.footnoteCounts[u]++, (n = i + 1));
        let o = e.footnoteCounts[u],
          l = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + e.clobberPrefix + "fn-" + r,
              id: e.clobberPrefix + "fnref-" + r + (o > 1 ? "-" + o : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
        e.patch(t, l);
        let c = {
          type: "element",
          tagName: "sup",
          properties: {},
          children: [l],
        };
        return e.patch(t, c), e.applyData(t, c);
      }
      function td(e, t) {
        let n = t.referenceType,
          u = "]";
        if (
          ("collapsed" === n
            ? (u += "[]")
            : "full" === n && (u += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return { type: "text", value: "![" + t.alt + u };
        let r = e.all(t),
          i = r[0];
        i && "text" === i.type
          ? (i.value = "[" + i.value)
          : r.unshift({ type: "text", value: "[" });
        let o = r[r.length - 1];
        return (
          o && "text" === o.type
            ? (o.value += u)
            : r.push({ type: "text", value: u }),
          r
        );
      }
      function tF(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      var th = n(66406);
      let tm = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            u = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
            r = {};
          u && (r.className = ["language-" + u]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: tp,
        footnote: function (e, t) {
          let n = e.footnoteById,
            u = 1;
          for (; u in n; ) u++;
          let r = String(u);
          return (
            (n[r] = {
              type: "footnoteDefinition",
              identifier: r,
              children: [{ type: "paragraph", children: t.children }],
              position: t.position,
            }),
            tp(e, {
              type: "footnoteReference",
              identifier: r,
              position: t.position,
            })
          );
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.dangerous) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
          return null;
        },
        imageReference: function (e, t) {
          let n = e.definition(t.identifier);
          if (!n) return td(e, t);
          let u = { src: tt(n.url || ""), alt: t.alt };
          null !== n.title && void 0 !== n.title && (u.title = n.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: u,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        image: function (e, t) {
          let n = { src: tt(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let u = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let u = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        linkReference: function (e, t) {
          let n = e.definition(t.identifier);
          if (!n) return td(e, t);
          let u = { href: tt(n.url || "") };
          null !== n.title && void 0 !== n.title && (u.title = n.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: u,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        link: function (e, t) {
          let n = { href: tt(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let u = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        listItem: function (e, t, n) {
          let u = e.all(t),
            r = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      u = -1;
                    for (; !t && ++u < n.length; ) t = tF(n[u]);
                  }
                  return t;
                })(n)
              : tF(t),
            i = {},
            o = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = u[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                u.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (i.className = ["task-list-item"]);
          }
          let l = -1;
          for (; ++l < u.length; ) {
            let e = u[l];
            (r || 0 !== l || "element" !== e.type || "p" !== e.tagName) &&
              o.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || r
                ? o.push(e)
                : o.push(...e.children);
          }
          let c = u[u.length - 1];
          c &&
            (r || "element" !== c.type || "p" !== c.tagName) &&
            o.push({ type: "text", value: "\n" });
          let a = {
            type: "element",
            tagName: "li",
            properties: i,
            children: o,
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        list: function (e, t) {
          let n = {},
            u = e.all(t),
            r = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++r < u.length;

          ) {
            let e = u[r];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let i = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(u, !0),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            u = n.shift(),
            r = [];
          if (u) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([u], !0),
            };
            e.patch(t.children[0], n), r.push(n);
          }
          if (n.length > 0) {
            let u = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              i = tl(t.children[1]),
              o = tc(t.children[t.children.length - 1]);
            i.line && o.line && (u.position = { start: i, end: o }), r.push(u);
          }
          let i = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(r, !0),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let u = n ? n.children : void 0,
            r = 0 === (u ? u.indexOf(t) : 1) ? "th" : "td",
            i = n && "table" === n.type ? n.align : void 0,
            o = i ? i.length : t.children.length,
            l = -1,
            c = [];
          for (; ++l < o; ) {
            let n = t.children[l],
              u = {},
              o = i ? i[l] : void 0;
            o && (u.align = o);
            let a = {
              type: "element",
              tagName: r,
              properties: u,
              children: [],
            };
            n &&
              ((a.children = e.all(n)), e.patch(n, a), (a = e.applyData(t, a))),
              c.push(a);
          }
          let a = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(c, !0),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        text: function (e, t) {
          let n = { type: "text", value: (0, th.j)(String(t.value)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: tA,
        yaml: tA,
        definition: tA,
        footnoteDefinition: tA,
      };
      function tA() {
        return null;
      }
      let tg = {}.hasOwnProperty;
      function ty(e, t) {
        e.position && (t.position = { start: tl(e), end: tc(e) });
      }
      function tE(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            u = e.data.hChildren,
            r = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: [],
                })),
            "element" === n.type &&
              r &&
              (n.properties = { ...n.properties, ...r }),
            "children" in n && n.children && null != u && (n.children = u);
        }
        return n;
      }
      function tx(e, t, n) {
        let u = t && t.type;
        if (!u) throw Error("Expected node, got `" + t + "`");
        return tg.call(e.handlers, u)
          ? e.handlers[u](e, t, n)
          : e.passThrough && e.passThrough.includes(u)
          ? "children" in t
            ? { ...t, children: tC(e, t) }
            : t
          : e.unknownHandler
          ? e.unknownHandler(e, t, n)
          : (function (e, t) {
              let n = t.data || {},
                u =
                  "value" in t &&
                  !(tg.call(n, "hProperties") || tg.call(n, "hChildren"))
                    ? { type: "text", value: t.value }
                    : {
                        type: "element",
                        tagName: "div",
                        properties: {},
                        children: tC(e, t),
                      };
              return e.patch(t, u), e.applyData(t, u);
            })(e, t);
      }
      function tC(e, t) {
        let n = [];
        if ("children" in t) {
          let u = t.children,
            r = -1;
          for (; ++r < u.length; ) {
            let i = tx(e, u[r], t);
            if (i) {
              if (
                r &&
                "break" === u[r - 1].type &&
                (Array.isArray(i) ||
                  "text" !== i.type ||
                  (i.value = i.value.replace(/^\s+/, "")),
                !Array.isArray(i) && "element" === i.type)
              ) {
                let e = i.children[0];
                e &&
                  "text" === e.type &&
                  (e.value = e.value.replace(/^\s+/, ""));
              }
              Array.isArray(i) ? n.push(...i) : n.push(i);
            }
          }
        }
        return n;
      }
      function tD(e, t) {
        let n = [],
          u = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++u < e.length; )
          u && n.push({ type: "text", value: "\n" }), n.push(e[u]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function tk(e, t) {
        let n = (function (e, t) {
            let n = t || {},
              u = n.allowDangerousHtml || !1,
              r = {};
            return (
              (o.dangerous = u),
              (o.clobberPrefix =
                void 0 === n.clobberPrefix || null === n.clobberPrefix
                  ? "user-content-"
                  : n.clobberPrefix),
              (o.footnoteLabel = n.footnoteLabel || "Footnotes"),
              (o.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
              (o.footnoteLabelProperties = n.footnoteLabelProperties || {
                className: ["sr-only"],
              }),
              (o.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
              (o.unknownHandler = n.unknownHandler),
              (o.passThrough = n.passThrough),
              (o.handlers = { ...tm, ...n.handlers }),
              (o.definition = (function (e) {
                let t = Object.create(null);
                if (!e || !e.type)
                  throw Error("mdast-util-definitions expected node");
                return (
                  to(e, "definition", (e) => {
                    let n = tf(e.identifier);
                    n && !ts.call(t, n) && (t[n] = e);
                  }),
                  function (e) {
                    let n = tf(e);
                    return n && ts.call(t, n) ? t[n] : null;
                  }
                );
              })(e)),
              (o.footnoteById = r),
              (o.footnoteOrder = []),
              (o.footnoteCounts = {}),
              (o.patch = ty),
              (o.applyData = tE),
              (o.one = function (e, t) {
                return tx(o, e, t);
              }),
              (o.all = function (e) {
                return tC(o, e);
              }),
              (o.wrap = tD),
              (o.augment = i),
              to(e, "footnoteDefinition", (e) => {
                let t = String(e.identifier).toUpperCase();
                tg.call(r, t) || (r[t] = e);
              }),
              o
            );
            function i(e, t) {
              if (e && "data" in e && e.data) {
                let n = e.data;
                n.hName &&
                  ("element" !== t.type &&
                    (t = {
                      type: "element",
                      tagName: "",
                      properties: {},
                      children: [],
                    }),
                  (t.tagName = n.hName)),
                  "element" === t.type &&
                    n.hProperties &&
                    (t.properties = { ...t.properties, ...n.hProperties }),
                  "children" in t &&
                    t.children &&
                    n.hChildren &&
                    (t.children = n.hChildren);
              }
              if (e) {
                let n = "type" in e ? e : { position: e };
                !n ||
                  !n.position ||
                  !n.position.start ||
                  !n.position.start.line ||
                  !n.position.start.column ||
                  !n.position.end ||
                  !n.position.end.line ||
                  !n.position.end.column ||
                  (t.position = { start: tl(n), end: tc(n) });
              }
              return t;
            }
            function o(e, t, n, u) {
              return (
                Array.isArray(n) && ((u = n), (n = {})),
                i(e, {
                  type: "element",
                  tagName: t,
                  properties: n || {},
                  children: u || [],
                })
              );
            }
          })(e, t),
          u = n.one(e, null),
          r = (function (e) {
            let t = [],
              n = -1;
            for (; ++n < e.footnoteOrder.length; ) {
              let u = e.footnoteById[e.footnoteOrder[n]];
              if (!u) continue;
              let r = e.all(u),
                i = String(u.identifier).toUpperCase(),
                o = tt(i.toLowerCase()),
                l = 0,
                c = [];
              for (; ++l <= e.footnoteCounts[i]; ) {
                let t = {
                  type: "element",
                  tagName: "a",
                  properties: {
                    href:
                      "#" +
                      e.clobberPrefix +
                      "fnref-" +
                      o +
                      (l > 1 ? "-" + l : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel,
                  },
                  children: [{ type: "text", value: "↩" }],
                };
                l > 1 &&
                  t.children.push({
                    type: "element",
                    tagName: "sup",
                    children: [{ type: "text", value: String(l) }],
                  }),
                  c.length > 0 && c.push({ type: "text", value: " " }),
                  c.push(t);
              }
              let a = r[r.length - 1];
              if (a && "element" === a.type && "p" === a.tagName) {
                let e = a.children[a.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : a.children.push({ type: "text", value: " " }),
                  a.children.push(...c);
              } else r.push(...c);
              let s = {
                type: "element",
                tagName: "li",
                properties: { id: e.clobberPrefix + "fn-" + o },
                children: e.wrap(r, !0),
              };
              e.patch(u, s), t.push(s);
            }
            if (0 !== t.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: e.footnoteLabelTagName,
                    properties: {
                      ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                      id: "footnote-label",
                    },
                    children: [{ type: "text", value: e.footnoteLabel }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(t, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n);
        return (
          r && u.children.push({ type: "text", value: "\n" }, r),
          Array.isArray(u) ? { type: "root", children: u } : u
        );
      }
      var tv = function (e, t) {
          var n;
          return e && "run" in e
            ? (n, u, r) => {
                e.run(tk(n, t), u, (e) => {
                  r(e);
                });
              }
            : ((n = e || t), (e) => tk(e, n));
        },
        tb = n(13980),
        tB = n.n(tb),
        tS = n(83384);
      function tw(e) {
        if (e.allowedElements && e.disallowedElements)
          throw TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return (t) => {
            to(t, "element", (t, n, u) => {
              let r;
              if (
                (e.allowedElements
                  ? (r = !e.allowedElements.includes(t.tagName))
                  : e.disallowedElements &&
                    (r = e.disallowedElements.includes(t.tagName)),
                !r &&
                  e.allowElement &&
                  "number" == typeof n &&
                  (r = !e.allowElement(t, n, u)),
                r && "number" == typeof n)
              )
                return (
                  e.unwrapDisallowed && t.children
                    ? u.children.splice(n, 1, ...t.children)
                    : u.children.splice(n, 1),
                  n
                );
            });
          };
      }
      var tz = n(33978),
        tT = n(60204),
        tI = n(81361),
        tP = n(93113),
        tN = n(97327),
        tO = n(85653),
        t_ = n.n(tO)();
      let tL = ["http", "https", "mailto", "tel"];
      function tj(e) {
        let t = (e || "").trim(),
          n = t.charAt(0);
        if ("#" === n || "/" === n) return t;
        let u = t.indexOf(":");
        if (-1 === u) return t;
        let r = -1;
        for (; ++r < tL.length; ) {
          let e = tL[r];
          if (u === e.length && t.slice(0, e.length).toLowerCase() === e)
            return t;
        }
        return (-1 !== (r = t.indexOf("?")) && u > r) ||
          (-1 !== (r = t.indexOf("#")) && u > r)
          ? t
          : "javascript:void(0)";
      }
      let tM = {}.hasOwnProperty,
        tR = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
      function tH(e, t) {
        let n = -1,
          u = 0;
        for (; ++n < e.children.length && e.children[n] !== t; )
          "element" === e.children[n].type && u++;
        return u;
      }
      function tV(e, t) {
        return t.toUpperCase();
      }
      let t$ = {}.hasOwnProperty,
        tq = {
          plugins: {
            to: "remarkPlugins",
            id: "change-plugins-to-remarkplugins",
          },
          renderers: { to: "components", id: "change-renderers-to-components" },
          astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
          allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
          escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
          source: { to: "children", id: "change-source-to-children" },
          allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
        };
      function tU(e) {
        for (let t in tq)
          if (t$.call(tq, t) && t$.call(e, t)) {
            let e = tq[t];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : "remove"
              } \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`
            ),
              delete tq[t];
          }
        let t = B()
            .use(e4)
            .use(e.remarkPlugins || [])
            .use(tv, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(tw, e),
          n = new m();
        "string" == typeof e.children
          ? (n.value = e.children)
          : void 0 !== e.children &&
            null !== e.children &&
            console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
            );
        let u = t.runSync(t.parse(n), n);
        if ("root" !== u.type) throw TypeError("Expected a `root` node");
        let i = r.createElement(
          r.Fragment,
          {},
          (function e(t, n) {
            let u;
            let i = [],
              o = -1;
            for (; ++o < n.children.length; )
              "element" === (u = n.children[o]).type
                ? i.push(
                    (function (t, n, u, i) {
                      let o;
                      let l = t.options,
                        c =
                          void 0 === l.transformLinkUri
                            ? tj
                            : l.transformLinkUri,
                        a = t.schema,
                        s = n.tagName,
                        f = {},
                        p = a;
                      if (
                        ("html" === a.space &&
                          "svg" === s &&
                          ((p = tS.YP), (t.schema = p)),
                        n.properties)
                      )
                        for (o in n.properties)
                          tM.call(n.properties, o) &&
                            (function (e, t, n, u) {
                              let r = (0, tT.s)(u.schema, t),
                                i = n;
                              null != i &&
                                i == i &&
                                (Array.isArray(i) &&
                                  (i = r.commaSeparated
                                    ? (0, tN.P)(i)
                                    : (0, tP.P)(i)),
                                "style" === r.property &&
                                  "string" == typeof i &&
                                  (i = (function (e) {
                                    let t = {};
                                    try {
                                      t_(e, function (e, n) {
                                        t[
                                          ("-ms-" === e.slice(0, 4)
                                            ? `ms-${e.slice(4)}`
                                            : e
                                          ).replace(/-([a-z])/g, tV)
                                        ] = n;
                                      });
                                    } catch {}
                                    return t;
                                  })(i)),
                                r.space && r.property
                                  ? (e[
                                      tM.call(tI.D, r.property)
                                        ? tI.D[r.property]
                                        : r.property
                                    ] = i)
                                  : r.attribute && (e[r.attribute] = i));
                            })(f, o, n.properties[o], t);
                      ("ol" === s || "ul" === s) && t.listDepth++;
                      let d = e(t, n);
                      ("ol" === s || "ul" === s) && t.listDepth--,
                        (t.schema = a);
                      let F = n.position || {
                          start: { line: null, column: null, offset: null },
                          end: { line: null, column: null, offset: null },
                        },
                        h =
                          l.components && tM.call(l.components, s)
                            ? l.components[s]
                            : s,
                        m = "string" == typeof h || h === r.Fragment;
                      if (!tz.isValidElementType(h))
                        throw TypeError(
                          `Component for name \`${s}\` not defined or is not renderable`
                        );
                      if (
                        ((f.key = u),
                        "a" === s &&
                          l.linkTarget &&
                          (f.target =
                            "function" == typeof l.linkTarget
                              ? l.linkTarget(
                                  String(f.href || ""),
                                  n.children,
                                  "string" == typeof f.title ? f.title : null
                                )
                              : l.linkTarget),
                        "a" === s &&
                          c &&
                          (f.href = c(
                            String(f.href || ""),
                            n.children,
                            "string" == typeof f.title ? f.title : null
                          )),
                        m ||
                          "code" !== s ||
                          "element" !== i.type ||
                          "pre" === i.tagName ||
                          (f.inline = !0),
                        m ||
                          ("h1" !== s &&
                            "h2" !== s &&
                            "h3" !== s &&
                            "h4" !== s &&
                            "h5" !== s &&
                            "h6" !== s) ||
                          (f.level = Number.parseInt(s.charAt(1), 10)),
                        "img" === s &&
                          l.transformImageUri &&
                          (f.src = l.transformImageUri(
                            String(f.src || ""),
                            String(f.alt || ""),
                            "string" == typeof f.title ? f.title : null
                          )),
                        !m && "li" === s && "element" === i.type)
                      ) {
                        let e = (function (e) {
                          let t = -1;
                          for (; ++t < e.children.length; ) {
                            let n = e.children[t];
                            if ("element" === n.type && "input" === n.tagName)
                              return n;
                          }
                          return null;
                        })(n);
                        (f.checked =
                          e && e.properties ? !!e.properties.checked : null),
                          (f.index = tH(i, n)),
                          (f.ordered = "ol" === i.tagName);
                      }
                      return (
                        m ||
                          ("ol" !== s && "ul" !== s) ||
                          ((f.ordered = "ol" === s), (f.depth = t.listDepth)),
                        ("td" !== s && "th" !== s) ||
                          (f.align &&
                            (f.style || (f.style = {}),
                            (f.style.textAlign = f.align),
                            delete f.align),
                          m || (f.isHeader = "th" === s)),
                        m ||
                          "tr" !== s ||
                          "element" !== i.type ||
                          (f.isHeader = "thead" === i.tagName),
                        l.sourcePos &&
                          (f["data-sourcepos"] = [
                            F.start.line,
                            ":",
                            F.start.column,
                            "-",
                            F.end.line,
                            ":",
                            F.end.column,
                          ]
                            .map(String)
                            .join("")),
                        !m && l.rawSourcePos && (f.sourcePosition = n.position),
                        !m &&
                          l.includeElementIndex &&
                          ((f.index = tH(i, n)), (f.siblingCount = tH(i))),
                        m || (f.node = n),
                        d.length > 0
                          ? r.createElement(h, f, d)
                          : r.createElement(h, f)
                      );
                    })(t, u, o, n)
                  )
                : "text" === u.type
                ? ("element" === n.type &&
                    tR.has(n.tagName) &&
                    (function (e) {
                      let t =
                        e && "object" == typeof e && "text" === e.type
                          ? e.value || ""
                          : e;
                      return (
                        "string" == typeof t &&
                        "" === t.replace(/[ \t\n\f\r]/g, "")
                      );
                    })(u)) ||
                  i.push(u.value)
                : "raw" !== u.type || t.options.skipHtml || i.push(u.value);
            return i;
          })({ options: e, schema: tS.dy, listDepth: 0 }, u)
        );
        return (
          e.className &&
            (i = r.createElement("div", { className: e.className }, i)),
          i
        );
      }
      tU.propTypes = {
        children: tB().string,
        className: tB().string,
        allowElement: tB().func,
        allowedElements: tB().arrayOf(tB().string),
        disallowedElements: tB().arrayOf(tB().string),
        unwrapDisallowed: tB().bool,
        remarkPlugins: tB().arrayOf(
          tB().oneOfType([
            tB().object,
            tB().func,
            tB().arrayOf(
              tB().oneOfType([
                tB().bool,
                tB().string,
                tB().object,
                tB().func,
                tB().arrayOf(tB().any),
              ])
            ),
          ])
        ),
        rehypePlugins: tB().arrayOf(
          tB().oneOfType([
            tB().object,
            tB().func,
            tB().arrayOf(
              tB().oneOfType([
                tB().bool,
                tB().string,
                tB().object,
                tB().func,
                tB().arrayOf(tB().any),
              ])
            ),
          ])
        ),
        sourcePos: tB().bool,
        rawSourcePos: tB().bool,
        skipHtml: tB().bool,
        includeElementIndex: tB().bool,
        transformLinkUri: tB().oneOfType([tB().func, tB().bool]),
        linkTarget: tB().oneOfType([tB().func, tB().string]),
        transformImageUri: tB().func,
        components: tB().object,
      };
    },
    35828: function (e, t) {
      "use strict";
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n,
        u = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        a = Symbol.for("react.context"),
        s = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        F = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        m = Symbol.for("react.offscreen");
      function A(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case u:
              switch ((e = e.type)) {
                case i:
                case l:
                case o:
                case p:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case a:
                    case f:
                    case h:
                    case F:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      (n = Symbol.for("react.module.reference")),
        (t.ContextConsumer = a),
        (t.ContextProvider = c),
        (t.Element = u),
        (t.ForwardRef = f),
        (t.Fragment = i),
        (t.Lazy = h),
        (t.Memo = F),
        (t.Portal = r),
        (t.Profiler = l),
        (t.StrictMode = o),
        (t.Suspense = p),
        (t.SuspenseList = d),
        (t.isAsyncMode = function () {
          return !1;
        }),
        (t.isConcurrentMode = function () {
          return !1;
        }),
        (t.isContextConsumer = function (e) {
          return A(e) === a;
        }),
        (t.isContextProvider = function (e) {
          return A(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === u;
        }),
        (t.isForwardRef = function (e) {
          return A(e) === f;
        }),
        (t.isFragment = function (e) {
          return A(e) === i;
        }),
        (t.isLazy = function (e) {
          return A(e) === h;
        }),
        (t.isMemo = function (e) {
          return A(e) === F;
        }),
        (t.isPortal = function (e) {
          return A(e) === r;
        }),
        (t.isProfiler = function (e) {
          return A(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return A(e) === o;
        }),
        (t.isSuspense = function (e) {
          return A(e) === p;
        }),
        (t.isSuspenseList = function (e) {
          return A(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === l ||
            e === o ||
            e === p ||
            e === d ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === F ||
                e.$$typeof === c ||
                e.$$typeof === a ||
                e.$$typeof === f ||
                e.$$typeof === n ||
                void 0 !== e.getModuleId))
          );
        }),
        (t.typeOf = A);
    },
    33978: function (e, t, n) {
      "use strict";
      e.exports = n(35828);
    },
    85653: function (e, t, n) {
      var u = n(6299);
      function r(e, t) {
        var n,
          r,
          i,
          o = null;
        if (!e || "string" != typeof e) return o;
        for (
          var l = u(e), c = "function" == typeof t, a = 0, s = l.length;
          a < s;
          a++
        )
          (r = (n = l[a]).property),
            (i = n.value),
            c ? t(r, i, n) : i && (o || (o = {}), (o[r] = i));
        return o;
      }
      (e.exports = r), (e.exports.default = r);
    },
    9520: function (e) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    97033: function (e) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
  },
]);
