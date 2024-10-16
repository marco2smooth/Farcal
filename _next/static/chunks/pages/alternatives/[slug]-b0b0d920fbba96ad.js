(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1343, 7042],
  {
    69471: function (t, r, o) {
      "use strict";
      o.d(r, {
        R: function () {
          return h;
        },
      });
      var i = {};
      o.r(i),
        o.d(i, {
          MDXContext: function () {
            return u.pC;
          },
          MDXProvider: function () {
            return u.Zo;
          },
          useMDXComponents: function () {
            return u.ah;
          },
          withMDXComponents: function () {
            return u.NF;
          },
        });
      var e = o(2784),
        a = o(4423),
        u = o(29154);
      function h({
        compiledSource: t,
        frontmatter: r,
        scope: o,
        components: h = {},
        lazy: n,
      }) {
        let [s, l] = (0, e.useState)(!n || "undefined" == typeof window);
        (0, e.useEffect)(() => {
          if (n) {
            let t = window.requestIdleCallback(() => {
              l(!0);
            });
            return () => window.cancelIdleCallback(t);
          }
        }, []);
        let g = (0, e.useMemo)(() => {
          let e = Object.assign(
              { opts: { ...i, ...a.jsxRuntime } },
              { frontmatter: r },
              o
            ),
            u = Object.keys(e),
            h = Object.values(e),
            n = Reflect.construct(Function, u.concat(`${t}`));
          return n.apply(n, h).default;
        }, [o, t]);
        if (!s)
          return e.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let c = e.createElement(
          u.Zo,
          { components: h },
          e.createElement(g, null)
        );
        return n ? e.createElement("div", null, c) : c;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (t) {
            var r = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - r));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          }));
    },
    52730: function (t, r, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/alternatives/[slug]",
        function () {
          return o(72602);
        },
      ]);
    },
    57042: function (t, r, o) {
      "use strict";
      o.r(r);
      var i = o(52322),
        e = o(39097),
        a = o.n(e),
        u = o(44382),
        h = o(29982);
      r.default = (t) => {
        let { darkerBg: r, className: o } = t;
        return (0, i.jsxs)("div", {
          className: (0, u.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            r && "bg-alternative",
            o
          ),
          children: [
            (0, i.jsx)("div", {
              className: "col-span-12",
              children: (0, i.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, i.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, i.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, i.jsx)(h.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, i.jsx)(a(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, i.jsx)(h.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, i.jsx)(a(), {
                    href: "/contact/sales",
                    children: "Request a demo",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    72602: function (t, r, o) {
      "use strict";
      o.r(r),
        o.d(r, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return v;
          },
        });
      var i = o(52322),
        e = o(61812),
        a = o(55351),
        u = o(96577),
        h = o.n(u),
        n = o(39097),
        s = o.n(n),
        l = o(5632);
      o(2784);
      var g = o(57042),
        c = o(27478),
        m = o(63511),
        p = o(69471),
        d = (t) => {
          var r;
          let { components: o, props: u } = t,
            n = u.blog.content,
            d = u.blog.author.split(","),
            _ = [];
          for (let t = 0; t < d.length; t++)
            _.push(e.find((r) => r.author_id === d[t]));
          let { basePath: b } = (0, l.useRouter)(),
            v = (t) => {
              let { post: r, label: o, className: e } = t;
              return (0, i.jsx)(s(), {
                href: "".concat(r.url),
                as: "".concat(r.url),
                children: (0, i.jsx)("div", {
                  className: e,
                  children: (0, i.jsx)("div", {
                    className:
                      "border-default hover:bg-surface-100 cursor-pointer rounded border p-6 transition",
                    children: (0, i.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)("p", {
                            className: "text-muted text-sm",
                            children: o,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("h4", {
                              className: "text-foreground text-lg",
                              children: r.title,
                            }),
                            (0, i.jsx)("p", {
                              className: "small",
                              children: r.date,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              });
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(a.PB, {
                title: u.blog.title,
                openGraph: {
                  title: u.blog.title,
                  description: u.blog.description,
                  url: "https://supabase.com/alternatives/".concat(u.blog.slug),
                  type: "article",
                  article: {
                    publishedTime: u.blog.date,
                    authors: [u.blog.author_url],
                    tags:
                      null === (r = u.blog.tags) || void 0 === r
                        ? void 0
                        : r.map((t) => t),
                  },
                  images: [
                    {
                      url: "https://supabase.com"
                        .concat(b, "/images/blog/")
                        .concat(u.blog.image ? u.blog.image : u.blog.thumb),
                    },
                  ],
                },
              }),
              (0, i.jsxs)(c.default, {
                children: [
                  (0, i.jsxs)("article", {
                    className: "mx-auto max-w-5xl px-8 py-16 sm:px-16 xl:px-20",
                    children: [
                      (0, i.jsx)("div", {
                        className: "mb-16 max-w-5xl space-y-8",
                        children: (0, i.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, i.jsx)("p", {
                              className: "text-brand text-center",
                              children: "Alternative",
                            }),
                            (0, i.jsx)("h1", {
                              className: "h1 text-center",
                              children: u.blog.title,
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "text-muted flex justify-center space-x-3 text-sm",
                              children: [
                                (0, i.jsx)("p", { children: u.blog.date }),
                                (0, i.jsx)("p", { children: "•" }),
                                (0, i.jsx)("p", {
                                  children: (0, m.Vz)(u.blog.source),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "flex justify-center gap-3",
                              children: _.map((t) =>
                                (0, i.jsx)("div", {
                                  className: "mt-6 mb-8 mr-4 w-max lg:mb-0",
                                  children: (0, i.jsx)(s(), {
                                    href: t.author_url,
                                    className: "cursor-pointer",
                                    children: (0, i.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        t.author_image_url &&
                                          (0, i.jsx)("div", {
                                            className: "w-10 h-10 relative",
                                            children: (0, i.jsx)(h(), {
                                              src: t.author_image_url,
                                              alt: "author avatar",
                                              className:
                                                "rounded-full border border-default w-full",
                                              fill: !0,
                                              style: { objectFit: "cover" },
                                            }),
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: "flex flex-col",
                                          children: [
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-foreground mb-0 text-sm",
                                              children: t.author,
                                            }),
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-muted mb-0 text-xs",
                                              children: t.position,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("div", {
                            className: "prose prose-docs max-w-none",
                            children: (0, i.jsx)(p.R, { ...n, components: o }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "py-16",
                            children: [
                              (0, i.jsx)("div", {
                                className: "text-foreground-lighter text-sm",
                                children: "Share this article",
                              }),
                              (0, i.jsxs)("div", {
                                className: "mt-4 flex items-center space-x-4",
                                children: [
                                  (0, i.jsx)(s(), {
                                    href: "https://twitter.com/share?text="
                                      .concat(
                                        u.blog.title,
                                        "&url=https://supabase.com/blog/"
                                      )
                                      .concat(u.blog.slug),
                                    target: "_blank",
                                    className:
                                      "text-muted hover:text-foreground",
                                    children: (0, i.jsx)("svg", {
                                      height: "26",
                                      width: "26",
                                      viewBox: "-89 -46.8 644 446.8",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      children: (0, i.jsx)("path", {
                                        d: "m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359",
                                        fillRule: "nonzero",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)(s(), {
                                    href: "https://www.linkedin.com/shareArticle?url=https://supabase.com/blog/"
                                      .concat(u.blog.slug, "&title=")
                                      .concat(u.blog.title),
                                    target: "_blank",
                                    className:
                                      "text-muted hover:text-foreground",
                                    children: (0, i.jsx)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 5 1036 990",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      children: (0, i.jsx)("path", {
                                        d: "M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "grid gap-8 py-8 lg:grid-cols-1",
                            children: [
                              (0, i.jsx)("div", {
                                children:
                                  u.prevPost &&
                                  (0, i.jsx)(v, {
                                    post: u.prevPost,
                                    label: "Previous comparison",
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                children:
                                  u.nextPost &&
                                  (0, i.jsx)(v, {
                                    post: u.nextPost,
                                    label: "Next comparison",
                                    className: "text-right",
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(g.default, {}),
                ],
              }),
            ],
          });
        },
        _ = o(33880),
        b = !0,
        v = function (t) {
          let r = t.blog.author.split(","),
            o = [];
          for (let t = 0; t < r.length; t++)
            o.push(e.find((o) => o.author_id === r[t]));
          return (0, i.jsx)(d, { components: (0, _.Z)(), props: t });
        };
    },
    4423: function (t, r, o) {
      t.exports.jsxRuntime = o(52322);
    },
    61812: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"soedirgo","author":"Bobbie Soedirgo","username":"soedirgo","position":"Engineering","author_url":"https://github.com/soedirgo","author_image_url":"https://github.com/soedirgo.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"hieu","author":"Hieu Pham","username":"hieu","position":"Engineering","author_url":"https://github.com/phamhieu","author_image_url":"https://github.com/phamhieu.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonny Summers-Muir","position":"Product Design","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana Pavlinić","position":"Design","author_url":"https://github.com/marijanapav","author_image_url":"https://github.com/marijanapav.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"andreespirela","author":"Andrees Pirela","position":"Engineering","author_url":"https://github.com/andreespirela","author_image_url":"https://github.com/andreespirela.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"},{"author_id":"kevinbrolly","author":"Kevin Brolly","position":"Head of Customer Success","author_url":"https://twitter.com/kevinbrolly","author_image_url":"https://pbs.twimg.com/profile_images/1292938696912756736/_DO9_Evo_200x200.jpg"},{"author_id":"benediktmueller","author":"Benedikt M\xfcller","username":"bndkt","position":"Guest Author","author_url":"https://twitter.com/bndkt","author_image_url":"https://github.com/bndkt.png"},{"author_id":"long","author":"Long Hoang","username":"loong","position":"Growth","author_url":"https://github.com/loong","author_image_url":"https://github.com/loong.png"},{"author_id":"kamil_ogorek","author":"Kamil Og\xf3rek","username":"kamil","position":"Integrations Lead","author_url":"https://twitter.com/kamilogorek","author_image_url":"https://github.com/kamilogorek.png"},{"author_id":"yuri","author":"Yuri Santana","username":"yuri","position":"DevRel Social Media and Community","author_url":"https://twitter.com/yuricodesbot","author_image_url":"https://github.com/YuriCodes.png"},{"author_id":"ivasilov","author":"Ivan Vasilov","username":"ivasilov","position":"Engineering","author_url":"https://twitter.com/ivasilov","author_image_url":"https://github.com/ivasilov.png"},{"author_id":"philipp","author":"Philipp Steinr\xf6tter","username":"psteinroe","position":"Guest Author","author_url":"https://twitter.com/psteinroe","author_image_url":"/images/philipp-steinrotter.jpg"},{"author_id":"giancarlo","author":"Giancarlo Buomprisco","username":"giancarlo","position":"Guest Author","author_url":"https://twitter.com/gc_psk","author_image_url":"https://github.com/Gbuomprisco.png"},{"author_id":"filipe","author":"Filipe Caba\xe7o","username":"filipe","position":"Engineering","author_url":"https://twitter.com/filipecabaco","author_image_url":"https://github.com/filipecabaco.png"},{"author_id":"raminder_singh","author":"Raminder Singh","username":"imor","position":"Engineering","author_url":"https://github.com/imor","author_image_url":"https://github.com/imor.png"},{"author_id":"samrose","author":"Sam Rose","username":"samrose","position":"Engineering","author_url":"https://github.com/samrose","author_image_url":"https://github.com/samrose.png"},{"author_id":"timabdulla","author":"Tim Abdulla","username":"timabdulla","position":"Guest Author","author_url":"https://github.com/timabdulla","author_image_url":"https://github.com/timabdulla.png"},{"author_id":"grdsdev","author":"Guilherme Souza","username":"grdsdev","position":"Engineering","author_url":"https://github.com/grdsdev","author_image_url":"https://github.com/grdsdev.png"},{"author_id":"chris_chandler","author":"Chris Chandler","username":"chrischandler","position":"Partnerships","author_url":"https://github.com/chrischandler","author_image_url":"https://github.com/chrischandler.png"},{"author_id":"bdon","author":"Brandon Liu","username":"bdon","position":"Guest Author","author_url":"https://github.com/bdon","author_image_url":"https://github.com/bdon.png"},{"author_id":"p6l-richard","author":"Richard Poelderl","username":"p6l-richard","position":"Guest Author","author_url":"https://github.com/p6l-richard","author_image_url":"https://github.com/p6l-richard.png"},{"author_id":"PeerRich","author":"Peer Richelsen","username":"PeerRich","position":"Guest Author","author_url":"https://github.com/PeerRich","author_image_url":"https://github.com/PeerRich.png"},{"author_id":"khajvandi","author":"Cyrus Khajvandi","username":"khajvandi","position":"Co-Founder & CEO","company":"Humata","author_url":"https://www.linkedin.com/in/khajvandi/","author_image_url":"https://media.licdn.com/dms/image/v2/D5603AQGZst2tvV47PA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694666298155?e=1728518400&v=beta&t=Jkt6ii4cV8FsvU4qONEGFVUADw-Zc_WI1h-pSrenxGg"},{"author_id":"anas-araid","author":"Anas Araid","username":"anas-araid","position":"Guest Author","author_url":"https://github.com/anas-araid","author_image_url":"https://github.com/anas-araid.png"},{"author_id":"activenode","author":"David Lorenz","username":"activenode","position":"Guest Author","author_url":"https://github.com/activenode","author_image_url":"https://github.com/activenode.png"},{"author_id":"craig_cannon","author":"Craig Cannon","username":"CraigCannon","position":"Marketing","author_url":"https://x.com/CraigCannon","author_image_url":"https://github.com/craigcannon.png"},{"author_id":"jay_meistrich","author":"Jay Meistrich","username":"jmeistrich","position":"Guest Author","author_url":"https://x.com/jmeistrich","author_image_url":"https://github.com/jmeistrich.png"},{"author_id":"nyannyacha","author":"Nyannyacha","username":"nyannyacha","position":"Engineering","author_url":"https://github.com/nyannyacha","author_image_url":"https://github.com/nyannyacha.png"},{"author_id":"jstoone","author":"Jakob Steinn","position":"Co-founder & Tech Lead","company":"Good Tape","author_url":"https://twitter.com/jstoone","author_image_url":"https://pbs.twimg.com/profile_images/1233003191538790400/3OxNooXT_200x200.jpg"},{"author_id":"tim_shedor","author":"Tim Shedor","username":"tshedor","position":"Guest Author","author_url":"https://github.com/tshedor","author_image_url":"https://github.com/tshedor.png"},{"author_id":"jgoux","author":"Julien Goux","username":"jgoux","position":"Engineering","author_url":"https://github.com/jgoux","author_image_url":"https://github.com/jgoux.png"}]'
      );
    },
  },
  function (t) {
    t.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 2888, 9774, 179,
      ],
      function () {
        return t((t.s = 52730));
      }
    ),
      (_N_E = t.O());
  },
]);
